/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
import * as ɵngcc0 from '@angular/core';
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /** Drop lists registered inside the group. */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    CdkDropListGroup.prototype.ngOnDestroy = function () {
        this._items.clear();
    };
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: Input, args: ['cdkDropListGroupDisabled',] }]
    };
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) { return new (t || CdkDropListGroup)(); };
CdkDropListGroup.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkDropListGroup, selectors: [["", "cdkDropListGroup", ""]], inputs: { disabled: ["cdkDropListGroupDisabled", "disabled"] }, exportAs: ["cdkDropListGroup"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkDropListGroup, [{
        type: Directive,
        args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup'
            }]
    }], function () { return []; }, { disabled: [{
            type: Input,
            args: ['cdkDropListGroupDisabled']
        }] }); })();
    return CdkDropListGroup;
}());
export { CdkDropListGroup };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LWdyb3VwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kaXJlY3RpdmVzL2Ryb3AtbGlzdC1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBYSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFFSyxJQUZMO0FBQ2lCLFFBSWYsOENBQThDO0FBQ2hELFFBQVcsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFLLENBQUM7QUFDakMsUUFPVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLElBTUEsQ0FBQztBQUNELElBYkUsc0JBQ0ksc0NBQVE7QUFBSSxRQUZoQiwrRUFBK0U7QUFDakYsYUFBRSxjQUMwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGFBQUMsVUFBYSxLQUFjO0FBQzdCLFlBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxRQUFFLENBQUM7QUFDRjtBQUEwQjtBQUdyQixPQVA4QztBQUNwRCxJQUtFLHNDQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDLENBZE07QUFBQztZQUpULFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUUsOURBR3NDLDJCQUsvQyxLQUFLLFNBQUMsMEJBQTBCO0FBQy9CO0VBVDRCLHNCQUM5QixRQUFRLEVBQUUsa0JBQWtCLG1CQUM3Qjs7Ozs7Ozs7Ozs7b0JBT1M7QUFBQyxJQVdYLHVCQUFDO0FBQ0EsQ0FEQSxBQXJCRCxJQXFCQztBQUNELFNBbEJhLGdCQUFnQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBPbkRlc3Ryb3ksIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbi8qKlxuICogRGVjbGFyYXRpdmVseSBjb25uZWN0cyBzaWJsaW5nIGBjZGtEcm9wTGlzdGAgaW5zdGFuY2VzIHRvZ2V0aGVyLiBBbGwgb2YgdGhlIGBjZGtEcm9wTGlzdGBcbiAqIGVsZW1lbnRzIHRoYXQgYXJlIHBsYWNlZCBpbnNpZGUgYSBgY2RrRHJvcExpc3RHcm91cGAgd2lsbCBiZSBjb25uZWN0ZWQgdG8gZWFjaCBvdGhlclxuICogYXV0b21hdGljYWxseS4gQ2FuIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIGBjZGtEcm9wTGlzdENvbm5lY3RlZFRvYCBpbnB1dFxuICogZnJvbSBgY2RrRHJvcExpc3RgLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrRHJvcExpc3RHcm91cF0nLFxuICBleHBvcnRBczogJ2Nka0Ryb3BMaXN0R3JvdXAnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcm9wTGlzdEdyb3VwPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIERyb3AgbGlzdHMgcmVnaXN0ZXJlZCBpbnNpZGUgdGhlIGdyb3VwLiAqL1xuICByZWFkb25seSBfaXRlbXMgPSBuZXcgU2V0PFQ+KCk7XG5cbiAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgYSBkcmFnZ2luZyBzZXF1ZW5jZSBmcm9tIGluc2lkZSB0aGlzIGdyb3VwIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0R3JvdXBEaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2l0ZW1zLmNsZWFyKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==