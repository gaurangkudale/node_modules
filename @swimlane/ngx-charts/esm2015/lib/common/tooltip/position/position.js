import { PlacementTypes } from './placement.type';
const caretOffset = 7;
function verticalPosition(elDimensions, popoverDimensions, alignment) {
    if (alignment === 'top') {
        return elDimensions.top - caretOffset;
    }
    if (alignment === 'bottom') {
        return elDimensions.top + elDimensions.height - popoverDimensions.height + caretOffset;
    }
    if (alignment === 'center') {
        return elDimensions.top + elDimensions.height / 2 - popoverDimensions.height / 2;
    }
    return undefined;
}
function horizontalPosition(elDimensions, popoverDimensions, alignment) {
    if (alignment === 'left') {
        return elDimensions.left - caretOffset;
    }
    if (alignment === 'right') {
        return elDimensions.left + elDimensions.width - popoverDimensions.width + caretOffset;
    }
    if (alignment === 'center') {
        return elDimensions.left + elDimensions.width / 2 - popoverDimensions.width / 2;
    }
    return undefined;
}
/**
 * Position helper for the popover directive.
 *
 * @export
 */
export class PositionHelper {
    /**
     * Calculate vertical alignment position
     *
     * @memberOf PositionHelper
     */
    static calculateVerticalAlignment(elDimensions, popoverDimensions, alignment) {
        let result = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.height > window.innerHeight) {
            result = window.innerHeight - popoverDimensions.height;
        }
        return result;
    }
    /**
     * Calculate vertical caret position
     *
     * @memberOf PositionHelper
     */
    static calculateVerticalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        let result;
        if (alignment === 'top') {
            result = elDimensions.height / 2 - caretDimensions.height / 2 + caretOffset;
        }
        if (alignment === 'bottom') {
            result = popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.height / 2 - caretDimensions.height / 2;
        }
        const popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.height > window.innerHeight) {
            result += popoverPosition + popoverDimensions.height - window.innerHeight;
        }
        return result;
    }
    /**
     * Calculate horz alignment position
     *
     * @memberOf PositionHelper
     */
    static calculateHorizontalAlignment(elDimensions, popoverDimensions, alignment) {
        let result = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.width > window.innerWidth) {
            result = window.innerWidth - popoverDimensions.width;
        }
        return result;
    }
    /**
     * Calculate horz caret position
     *
     * @memberOf PositionHelper
     */
    static calculateHorizontalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        let result;
        if (alignment === 'left') {
            result = elDimensions.width / 2 - caretDimensions.width / 2 + caretOffset;
        }
        if (alignment === 'right') {
            result = popoverDimensions.width - elDimensions.width / 2 - caretDimensions.width / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.width / 2 - caretDimensions.width / 2;
        }
        const popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.width > window.innerWidth) {
            result += popoverPosition + popoverDimensions.width - window.innerWidth;
        }
        return result;
    }
    /**
     * Checks if the element's position should be flipped
     *
     * @memberOf PositionHelper
     */
    static shouldFlip(elDimensions, popoverDimensions, placement, spacing) {
        let flip = false;
        if (placement === 'right') {
            if (elDimensions.left + elDimensions.width + popoverDimensions.width + spacing > window.innerWidth) {
                flip = true;
            }
        }
        if (placement === 'left') {
            if (elDimensions.left - popoverDimensions.width - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'top') {
            if (elDimensions.top - popoverDimensions.height - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'bottom') {
            if (elDimensions.top + elDimensions.height + popoverDimensions.height + spacing > window.innerHeight) {
                flip = true;
            }
        }
        return flip;
    }
    /**
     * Position caret
     *
     * @memberOf PositionHelper
     */
    static positionCaret(placement, elmDim, hostDim, caretDimensions, alignment) {
        let top = 0;
        let left = 0;
        if (placement === PlacementTypes.right) {
            left = -7;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = elmDim.width;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = elmDim.height;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = -7;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        return { top, left };
    }
    /**
     * Position content
     *
     * @memberOf PositionHelper
     */
    static positionContent(placement, elmDim, hostDim, spacing, alignment) {
        let top = 0;
        let left = 0;
        if (placement === PlacementTypes.right) {
            left = hostDim.left + hostDim.width + spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = hostDim.left - elmDim.width - spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = hostDim.top - elmDim.height - spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = hostDim.top + hostDim.height + spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        return { top, left };
    }
    /**
     * Determine placement based on flip
     *
     * @memberOf PositionHelper
     */
    static determinePlacement(placement, elmDim, hostDim, spacing) {
        const shouldFlip = PositionHelper.shouldFlip(hostDim, elmDim, placement, spacing);
        if (shouldFlip) {
            if (placement === PlacementTypes.right) {
                return PlacementTypes.left;
            }
            else if (placement === PlacementTypes.left) {
                return PlacementTypes.right;
            }
            else if (placement === PlacementTypes.top) {
                return PlacementTypes.bottom;
            }
            else if (placement === PlacementTypes.bottom) {
                return PlacementTypes.top;
            }
        }
        return placement;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3Rvb2x0aXAvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztBQUV0QixTQUFTLGdCQUFnQixDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxTQUFTO0lBQ2xFLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtRQUN2QixPQUFPLFlBQVksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO0tBQ3ZDO0lBRUQsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUFFO1FBQzFCLE9BQU8sWUFBWSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7S0FDeEY7SUFFRCxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxZQUFZLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDbEY7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsU0FBUztJQUNwRSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDeEIsT0FBTyxZQUFZLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztLQUN4QztJQUVELElBQUksU0FBUyxLQUFLLE9BQU8sRUFBRTtRQUN6QixPQUFPLFlBQVksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0tBQ3ZGO0lB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Q0FBQztTQUNoRjthQUFNLElBQUksU0FBUyxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDN0MsSUFBSSxHQUFHLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPO1FBQzNELE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFbEYsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLFNBQVMsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO2dCQUN0QyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxTQUFTLEtBQUssY0FBYyxDQUFDLElBQUksRUFBRTtnQkFDNUMsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDO2FBQzdCO2lCQUFNLElBQUksU0FBUyxLQUFLLGNBQWMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzNDLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUM5QjtpQkFBTSxJQUFJLFNBQVMsS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFO2dCQUM5QyxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUM7YUFDM0I7U0FDRjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi9wbGFjZW1lbnQudHlwZSc7XG5cbmNvbnN0IGNhcmV0T2Zmc2V0ID0gNztcblxuZnVuY3Rpb24gdmVydGljYWxQb3NpdGlvbihlbERpbWVuc2lvbnMsIHBvcG92ZXJEaW1lbnNpb25zLCBhbGlnbm1lbnQpIHtcbiAgaWYgKGFsaWdubWVudCA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gZWxEaW1lbnNpb25zLnRvcCAtIGNhcmV0T2Zmc2V0O1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gZWxEaW1lbnNpb25zLnRvcCArIGVsRGltZW5zaW9ucy5oZWlnaHQgLSBwb3BvdmVyRGltZW5zaW9ucy5oZWlnaHQgKyBjYXJldE9mZnNldDtcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgPT09ICdjZW50ZXInKSB7XG4gICAgcmV0dXJuIGVsRGltZW5zaW9ucy50b3AgKyBlbERpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCAvIDI7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBob3Jpem9udGFsUG9zaXRpb24oZWxEaW1lbnNpb25zLCBwb3BvdmVyRGltZW5zaW9ucywgYWxpZ25tZW50KSB7XG4gIGlmIChhbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiBlbERpbWVuc2lvbnMubGVmdCAtIGNhcmV0T2Zmc2V0O1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiBlbERpbWVuc2lvbnMubGVmdCArIGVsRGltZW5zaW9ucy53aWR0aCAtIHBvcG92ZXJEaW1lbnNpb25zLndpZHRoICsgY2FyZXRPZmZzZXQ7XG4gIH1cblxuICBpZiAoYWxpZ25tZW50ID09PSAnY2VudGVyJykge1xuICAgIHJldHVybiBlbERpbWVuc2lvbnMubGVmdCArIGVsRGltZW5zaW9ucy53aWR0aCAvIDIgLSBwb3BvdmVyRGltZW5zaW9ucy53aWR0aCAvIDI7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFBvc2l0aW9uIGhlbHBlciBmb3IgdGhlIHBvcG92ZXIgZGlyZWN0aXZlLlxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc2l0aW9uSGVscGVyIHtcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgcG9zaXRpb25cbiAgICpcbiAgICogQG1lbWJlck9mIFBvc2l0aW9uSGVscGVyXG4gICAqL1xuICBzdGF0aWMgY2FsY3VsYXRlVmVydGljYWxBbGlnbm1lbnQoZWxEaW1lbnNpb25zLCBwb3BvdmVyRGltZW5zaW9ucywgYWxpZ25tZW50KTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gdmVydGljYWxQb3NpdGlvbihlbERpbWVuc2lvbnMsIHBvcG92ZXJEaW1lbnNpb25zLCBhbGlnbm1lbnQpO1xuXG4gICAgaWYgKHJlc3VsdCArIHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgcmVzdWx0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcG9wb3ZlckRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHZlcnRpY2FsIGNhcmV0IHBvc2l0aW9uXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQb3NpdGlvbkhlbHBlclxuICAgKi9cbiAgc3RhdGljIGNhbGN1bGF0ZVZlcnRpY2FsQ2FyZXQoZWxEaW1lbnNpb25zLCBwb3BvdmVyRGltZW5zaW9ucywgY2FyZXREaW1lbnNpb25zLCBhbGlnbm1lbnQpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoYWxpZ25tZW50ID09PSAndG9wJykge1xuICAgICAgcmVzdWx0ID0gZWxEaW1lbnNpb25zLmhlaWdodCAvIDIgLSBjYXJldERpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIGNhcmV0T2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChhbGlnbm1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICByZXN1bHQgPSBwb3BvdmVyRGltZW5zaW9ucy5oZWlnaHQgLSBlbERpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIGNhcmV0RGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gY2FyZXRPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHJlc3VsdCA9IHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCAvIDIgLSBjYXJldERpbWVuc2lvbnMuaGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3BvdmVyUG9zaXRpb24gPSB2ZXJ0aWNhbFBvc2l0aW9uKGVsRGltZW5zaW9ucywgcG9wb3ZlckRpbWVuc2lvbnMsIGFsaWdubWVudCk7XG4gICAgaWYgKHBvcG92ZXJQb3NpdGlvbiArIHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgcmVzdWx0ICs9IHBvcG92ZXJQb3NpdGlvbiArIHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3J6IGFsaWdubWVudCBwb3NpdGlvblxuICAgKlxuICAgKiBAbWVtYmVyT2YgUG9zaXRpb25IZWxwZXJcbiAgICovXG4gIHN0YXRpYyBjYWxjdWxhdGVIb3Jpem9udGFsQWxpZ25tZW50KGVsRGltZW5zaW9ucywgcG9wb3ZlckRpbWVuc2lvbnMsIGFsaWdubWVudCk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdCA9IGhvcml6b250YWxQb3NpdGlvbihlbERpbWVuc2lvbnMsIHBvcG92ZXJEaW1lbnNpb25zLCBhbGlnbm1lbnQpO1xuXG4gICAgaWYgKHJlc3VsdCArIHBvcG92ZXJEaW1lbnNpb25zLndpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJlc3VsdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcG9wb3ZlckRpbWVuc2lvbnMud2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgaG9yeiBjYXJldCBwb3NpdGlvblxuICAgKlxuICAgKiBAbWVtYmVyT2YgUG9zaXRpb25IZWxwZXJcbiAgICovXG4gIHN0YXRpYyBjYWxjdWxhdGVIb3Jpem9udGFsQ2FyZXQoZWxEaW1lbnNpb25zLCBwb3BvdmVyRGltZW5zaW9ucywgY2FyZXREaW1lbnNpb25zLCBhbGlnbm1lbnQpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoYWxpZ25tZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJlc3VsdCA9IGVsRGltZW5zaW9ucy53aWR0aCAvIDIgLSBjYXJldERpbWVuc2lvbnMud2lkdGggLyAyICsgY2FyZXRPZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmVzdWx0ID0gcG9wb3ZlckRpbWVuc2lvbnMud2lkdGggLSBlbERpbWVuc2lvbnMud2lkdGggLyAyIC0gY2FyZXREaW1lbnNpb25zLndpZHRoIC8gMiAtIGNhcmV0T2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChhbGlnbm1lbnQgPT09ICdjZW50ZXInKSB7XG4gICAgICByZXN1bHQgPSBwb3BvdmVyRGltZW5zaW9ucy53aWR0aCAvIDIgLSBjYXJldERpbWVuc2lvbnMud2lkdGggLyAyO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcG92ZXJQb3NpdGlvbiA9IGhvcml6b250YWxQb3NpdGlvbihlbERpbWVuc2lvbnMsIHBvcG92ZXJEaW1lbnNpb25zLCBhbGlnbm1lbnQpO1xuICAgIGlmIChwb3BvdmVyUG9zaXRpb24gKyBwb3BvdmVyRGltZW5zaW9ucy53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXN1bHQgKz0gcG9wb3ZlclBvc2l0aW9uICsgcG9wb3ZlckRpbWVuc2lvbnMud2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHNob3VsZCBiZSBmbGlwcGVkXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQb3NpdGlvbkhlbHBlclxuICAgKi9cbiAgc3RhdGljIHNob3VsZEZsaXAoZWxEaW1lbnNpb25zLCBwb3BvdmVyRGltZW5zaW9ucywgcGxhY2VtZW50LCBzcGFjaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGZsaXAgPSBmYWxzZTtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIGlmIChlbERpbWVuc2lvbnMubGVmdCArIGVsRGltZW5zaW9ucy53aWR0aCArIHBvcG92ZXJEaW1lbnNpb25zLndpZHRoICsgc3BhY2luZyA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIGZsaXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgaWYgKGVsRGltZW5zaW9ucy5sZWZ0IC0gcG9wb3ZlckRpbWVuc2lvbnMud2lkdGggLSBzcGFjaW5nIDwgMCkge1xuICAgICAgICBmbGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJykge1xuICAgICAgaWYgKGVsRGltZW5zaW9ucy50b3AgLSBwb3BvdmVyRGltZW5zaW9ucy5oZWlnaHQgLSBzcGFjaW5nIDwgMCkge1xuICAgICAgICBmbGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgaWYgKGVsRGltZW5zaW9ucy50b3AgKyBlbERpbWVuc2lvbnMuaGVpZ2h0ICsgcG9wb3ZlckRpbWVuc2lvbnMuaGVpZ2h0ICsgc3BhY2luZyA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICBmbGlwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmxpcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBjYXJldFxuICAgKlxuICAgKiBAbWVtYmVyT2YgUG9zaXRpb25IZWxwZXJcbiAgICovXG4gIHN0YXRpYyBwb3NpdGlvbkNhcmV0KHBsYWNlbWVudCwgZWxtRGltLCBob3N0RGltLCBjYXJldERpbWVuc2lvbnMsIGFsaWdubWVudCk6IGFueSB7XG4gICAgbGV0IHRvcCA9IDA7XG4gICAgbGV0IGxlZnQgPSAwO1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gUGxhY2VtZW50VHlwZXMucmlnaHQpIHtcbiAgICAgIGxlZnQgPSAtNztcbiAgICAgIHRvcCA9IFBvc2l0aW9uSGVscGVyLmNhbGN1bGF0ZVZlcnRpY2FsQ2FyZXQoaG9zdERpbSwgZWxtRGltLCBjYXJldERpbWVuc2lvbnMsIGFsaWdubWVudCk7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFBsYWNlbWVudFR5cGVzLmxlZnQpIHtcbiAgICAgIGxlZnQgPSBlbG1EaW0ud2lkdGg7XG4gICAgICB0b3AgPSBQb3NpdGlvbkhlbHBlci5jYWxjdWxhdGVWZXJ0aWNhbENhcmV0KGhvc3REaW0sIGVsbURpbSwgY2FyZXREaW1lbnNpb25zLCBhbGlnbm1lbnQpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy50b3ApIHtcbiAgICAgIHRvcCA9IGVsbURpbS5oZWlnaHQ7XG4gICAgICBsZWZ0ID0gUG9zaXRpb25IZWxwZXIuY2FsY3VsYXRlSG9yaXpvbnRhbENhcmV0KGhvc3REaW0sIGVsbURpbSwgY2FyZXREaW1lbnNpb25zLCBhbGlnbm1lbnQpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5ib3R0b20pIHtcbiAgICAgIHRvcCA9IC03O1xuICAgICAgbGVmdCA9IFBvc2l0aW9uSGVscGVyLmNhbGN1bGF0ZUhvcml6b250YWxDYXJldChob3N0RGltLCBlbG1EaW0sIGNhcmV0RGltZW5zaW9ucywgYWxpZ25tZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBjb250ZW50XG4gICAqXG4gICAqIEBtZW1iZXJPZiBQb3NpdGlvbkhlbHBlclxuICAgKi9cbiAgc3RhdGljIHBvc2l0aW9uQ29udGVudChwbGFjZW1lbnQsIGVsbURpbSwgaG9zdERpbSwgc3BhY2luZywgYWxpZ25tZW50KTogYW55IHtcbiAgICBsZXQgdG9wID0gMDtcbiAgICBsZXQgbGVmdCA9IDA7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5yaWdodCkge1xuICAgICAgbGVmdCA9IGhvc3REaW0ubGVmdCArIGhvc3REaW0ud2lkdGggKyBzcGFjaW5nO1xuICAgICAgdG9wID0gUG9zaXRpb25IZWxwZXIuY2FsY3VsYXRlVmVydGljYWxBbGlnbm1lbnQoaG9zdERpbSwgZWxtRGltLCBhbGlnbm1lbnQpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5sZWZ0KSB7XG4gICAgICBsZWZ0ID0gaG9zdERpbS5sZWZ0IC0gZWxtRGltLndpZHRoIC0gc3BhY2luZztcbiAgICAgIHRvcCA9IFBvc2l0aW9uSGVscGVyLmNhbGN1bGF0ZVZlcnRpY2FsQWxpZ25tZW50KGhvc3REaW0sIGVsbURpbSwgYWxpZ25tZW50KTtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gUGxhY2VtZW50VHlwZXMudG9wKSB7XG4gICAgICB0b3AgPSBob3N0RGltLnRvcCAtIGVsbURpbS5oZWlnaHQgLSBzcGFjaW5nO1xuICAgICAgbGVmdCA9IFBvc2l0aW9uSGVscGVyLmNhbGN1bGF0ZUhvcml6b250YWxBbGlnbm1lbnQoaG9zdERpbSwgZWxtRGltLCBhbGlnbm1lbnQpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5ib3R0b20pIHtcbiAgICAgIHRvcCA9IGhvc3REaW0udG9wICsgaG9zdERpbS5oZWlnaHQgKyBzcGFjaW5nO1xuICAgICAgbGVmdCA9IFBvc2l0aW9uSGVscGVyLmNhbGN1bGF0ZUhvcml6b250YWxBbGlnbm1lbnQoaG9zdERpbSwgZWxtRGltLCBhbGlnbm1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvcCwgbGVmdCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBwbGFjZW1lbnQgYmFzZWQgb24gZmxpcFxuICAgKlxuICAgKiBAbWVtYmVyT2YgUG9zaXRpb25IZWxwZXJcbiAgICovXG4gIHN0YXRpYyBkZXRlcm1pbmVQbGFjZW1lbnQocGxhY2VtZW50LCBlbG1EaW0sIGhvc3REaW0sIHNwYWNpbmcpOiBhbnkge1xuICAgIGNvbnN0IHNob3VsZEZsaXAgPSBQb3NpdGlvbkhlbHBlci5zaG91bGRGbGlwKGhvc3REaW0sIGVsbURpbSwgcGxhY2VtZW50LCBzcGFjaW5nKTtcblxuICAgIGlmIChzaG91bGRGbGlwKSB7XG4gICAgICBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5yaWdodCkge1xuICAgICAgICByZXR1cm4gUGxhY2VtZW50VHlwZXMubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5sZWZ0KSB7XG4gICAgICAgIHJldHVybiBQbGFjZW1lbnRUeXBlcy5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy50b3ApIHtcbiAgICAgICAgcmV0dXJuIFBsYWNlbWVudFR5cGVzLmJvdHRvbTtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy5ib3R0b20pIHtcbiAgICAgICAgcmV0dXJuIFBsYWNlbWVudFR5cGVzLnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG59XG4iXX0=