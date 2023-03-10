/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Inject, InjectionToken, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/** Injection token for the MatInkBar's Positioner. */
import * as ɵngcc0 from '@angular/core';
export var _MAT_INK_BAR_POSITIONER = new InjectionToken('MatInkBarPositioner', {
    providedIn: 'root',
    factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
export function _MAT_INK_BAR_POSITIONER_FACTORY() {
    var method = function (element) { return ({
        left: element ? (element.offsetLeft || 0) + 'px' : '0',
        width: element ? (element.offsetWidth || 0) + 'px' : '0',
    }); };
    return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
var MatInkBar = /** @class */ (function () {
    function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    MatInkBar.prototype.alignToElement = function (element) {
        var _this = this;
        this.show();
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () { return _this._setStyles(element); });
            });
        }
        else {
            this._setStyles(element);
        }
    };
    /** Shows the ink bar. */
    MatInkBar.prototype.show = function () {
        this._elementRef.nativeElement.style.visibility = 'visible';
    };
    /** Hides the ink bar. */
    MatInkBar.prototype.hide = function () {
        this._elementRef.nativeElement.style.visibility = 'hidden';
    };
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */
    MatInkBar.prototype._setStyles = function (element) {
        var positions = this._inkBarPositioner(element);
        var inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    };
    /** @nocollapse */
    MatInkBar.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [_MAT_INK_BAR_POSITIONER,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
MatInkBar.ɵfac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(_MAT_INK_BAR_POSITIONER), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatInkBar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatInkBar, [{
        type: Directive,
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
    return MatInkBar;
}());
export { MatInkBar };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5rLWJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYnMvaW5rLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBWTNFLHNEQUFzRDs7QUFDdEQsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQ2xDLElBQUksY0FBYyxDQUF1QixxQkFBcUIsRUFBRTtBQUNsRSxJQUFJLFVBQVUsRUFBRSxNQUFNO0FBQ3RCLElBQUksT0FBTyxFQUFFLCtCQUErQjtBQUM1QyxDQUFHLENBQUMsQ0FBQztBQUVMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLFVBQVUsK0JBQStCO0FBQUssSUFDbEQsSUFBTSxNQUFNLEdBQUcsVUFBQyxPQUFvQixJQUFLLE9BQUEsQ0FBQztBQUM1QyxRQUFJLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFDMUQsUUFBSSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQzVELEtBQUcsQ0FBQyxFQUh1QyxDQUd2QyxDQUFDO0FBQ0wsSUFDRSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUssSUFNSCxtQkFDVSxXQUFvQyxFQUNwQyxPQUFlLEVBQ2tCLGlCQUF1QyxFQUM5QixjQUF1QjtBQUFJLFFBSHJFLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxRQUNpQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXNCO0FBQUMsUUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQVM7QUFBQyxJQUFHLENBQUM7QUFDbEYsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLGtDQUFjLEdBQWQsVUFBZSxPQUFvQjtBQUNyQyxRQURFLGlCQVVDO0FBQ0gsUUFWSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEIsUUFDSSxJQUFJLE9BQU8scUJBQXFCLEtBQUssV0FBVyxFQUFFO0FBQ3RELFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUMvQixnQkFBRSxxQkFBcUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0FBQzlELFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSx5QkFBeUI7QUFDM0IsSUFBRSx3QkFBSSxHQUFKO0FBQWMsUUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUNoRSxJQUFFLENBQUM7QUFFSCxJQUFFLHlCQUF5QjtBQUMzQixJQUFFLHdCQUFJLEdBQUo7QUFBYyxRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQy9ELElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQVUsOEJBQVUsR0FBbEIsVUFBbUIsT0FBb0I7QUFDekMsUUFBSSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEQsUUFBSSxJQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFDL0QsUUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLFFBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUN6QyxJQUFFLENBQUMsQ0E1Q007QUFBQztzQkFQVCxTQUFTLFNBQUMseENBUUg7UUFQTixRQUFRLEVBQUUsbEJBUW1DLGdCQTlDNUIsVUFBVTtDQXNDSixzQkFDdkIsdkJBdkMrQixnQkFBc0IsTUFBTTtDQXVDdkQsRUFBRSwwQkFDSixPQUFPLEVBQUUsYUFBYSwwQkFDdEIsN0VBekM2RCxnREFnRDVELE1BQU0sU0FBQyx1QkFBdUI7ZUFQRSxFQUFFLHFDQUFxQyx1QkFDekUsbUJBQ0YsaEdBSzJDLDZDQUN2QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFTO0FBQUMsSUF3Qy9ELGdCQUFDO0FBQ0EsQ0FEQSxBQXBERCxJQW9EQztBQUNELFNBOUNhLFNBQVM7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgYSBNYXRJbmtCYXIgcG9zaXRpb25lciBtZXRob2QsIGRlZmluaW5nIHRoZSBwb3NpdGlvbmluZyBhbmQgd2lkdGggb2YgdGhlIGlua1xuICogYmFyIGluIGEgc2V0IG9mIHRhYnMuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjbGFzcy1uYW1lIFVzaW5nIGxlYWRpbmcgdW5kZXJzY29yZSB0byBkZW5vdGUgaW50ZXJuYWwgaW50ZXJmYWNlLlxuZXhwb3J0IGludGVyZmFjZSBfTWF0SW5rQmFyUG9zaXRpb25lciB7XG4gIChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHsgbGVmdDogc3RyaW5nLCB3aWR0aDogc3RyaW5nIH07XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gZm9yIHRoZSBNYXRJbmtCYXIncyBQb3NpdGlvbmVyLiAqL1xuZXhwb3J0IGNvbnN0IF9NQVRfSU5LX0JBUl9QT1NJVElPTkVSID1cbiAgbmV3IEluamVjdGlvblRva2VuPF9NYXRJbmtCYXJQb3NpdGlvbmVyPignTWF0SW5rQmFyUG9zaXRpb25lcicsIHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgZmFjdG9yeTogX01BVF9JTktfQkFSX1BPU0lUSU9ORVJfRkFDVE9SWVxuICB9KTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBwb3NpdGlvbmVyIGZ1bmN0aW9uIGZvciB0aGUgTWF0SW5rQmFyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX01BVF9JTktfQkFSX1BPU0lUSU9ORVJfRkFDVE9SWSgpOiBfTWF0SW5rQmFyUG9zaXRpb25lciB7XG4gIGNvbnN0IG1ldGhvZCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gKHtcbiAgICBsZWZ0OiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwKSArICdweCcgOiAnMCcsXG4gICAgd2lkdGg6IGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwKSArICdweCcgOiAnMCcsXG4gIH0pO1xuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogVGhlIGluay1iYXIgaXMgdXNlZCB0byBkaXNwbGF5IGFuZCBhbmltYXRlIHRoZSBsaW5lIHVuZGVybmVhdGggdGhlIGN1cnJlbnQgYWN0aXZlIHRhYiBsYWJlbC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWluay1iYXInLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1pbmstYmFyJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6IGBfYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJ2AsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdElua0JhciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoX01BVF9JTktfQkFSX1BPU0lUSU9ORVIpIHByaXZhdGUgX2lua0JhclBvc2l0aW9uZXI6IF9NYXRJbmtCYXJQb3NpdGlvbmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHsgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzdHlsZXMgZnJvbSB0aGUgcHJvdmlkZWQgZWxlbWVudCBpbiBvcmRlciB0byBhbGlnbiB0aGUgaW5rLWJhciB0byB0aGF0IGVsZW1lbnQuXG4gICAqIFNob3dzIHRoZSBpbmsgYmFyIGlmIHByZXZpb3VzbHkgc2V0IGFzIGhpZGRlbi5cbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICovXG4gIGFsaWduVG9FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zaG93KCk7XG5cbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLl9zZXRTdHlsZXMoZWxlbWVudCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlcyhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogU2hvd3MgdGhlIGluayBiYXIuICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cblxuICAvKiogSGlkZXMgdGhlIGluayBiYXIuICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcm9wZXIgc3R5bGVzIHRvIHRoZSBpbmsgYmFyIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9zZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLl9pbmtCYXJQb3NpdGlvbmVyKGVsZW1lbnQpO1xuICAgIGNvbnN0IGlua0JhcjogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpbmtCYXIuc3R5bGUubGVmdCA9IHBvc2l0aW9ucy5sZWZ0O1xuICAgIGlua0Jhci5zdHlsZS53aWR0aCA9IHBvc2l0aW9ucy53aWR0aDtcbiAgfVxufVxuIl19