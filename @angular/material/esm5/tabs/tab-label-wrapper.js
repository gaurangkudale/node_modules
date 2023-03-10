/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { mixinDisabled } from '@angular/material/core';
// Boilerplate for applying mixins to MatTabLabelWrapper.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
var MatTabLabelWrapperBase = /** @class */ (function () {
    function MatTabLabelWrapperBase() {
    }
    return MatTabLabelWrapperBase;
}());
var _MatTabLabelWrapperMixinBase = mixinDisabled(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
var MatTabLabelWrapper = /** @class */ (function (_super) {
    __extends(MatTabLabelWrapper, _super);
    function MatTabLabelWrapper(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /** Sets focus on the wrapper element */
    MatTabLabelWrapper.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    MatTabLabelWrapper.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    MatTabLabelWrapper.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    /** @nocollapse */
    MatTabLabelWrapper.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) { return new (t || MatTabLabelWrapper)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatTabLabelWrapper.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTabLabelWrapper, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-disabled", !!ctx.disabled);
        ɵngcc0.ɵɵclassProp("mat-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTabLabelWrapper, [{
        type: Directive,
        args: [{
                selector: '[matTabLabelWrapper]',
                inputs: ['disabled'],
                host: {
                    '[class.mat-tab-disabled]': 'disabled',
                    '[attr.aria-disabled]': '!!disabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return MatTabLabelWrapper;
}(_MatTabLabelWrapperMixinBase));
export { MatTabLabelWrapper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxhYmVsLXdyYXBwZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90YWJzL3RhYi1sYWJlbC13cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBNkIsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHakYseURBQXlEO0FBQ3pELG9CQUFvQjs7QUFDcEI7QUFDMEIsSUFEMUI7QUFDSSxJQUQwQixDQUFDO0FBQy9CLElBRDhCLDZCQUFDO0FBQUQsQ0FBQyxBQUEvQixJQUErQjtBQUMvQixJQUFNLDRCQUE0QixHQUM5QixhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUxQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFVyxJQU02QixzQ0FBNEI7QUFBQyxJQUNuRSw0QkFBbUIsVUFBc0I7QUFDM0MsUUFERSxZQUNFLGlCQUFPLFNBQ1I7QUFDSCxRQUhxQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDO0FBSTNDLElBRkMsQ0FBQztBQUNILElBQ0Usd0NBQXdDO0FBQzFDLElBQUUsa0NBQUssR0FBTDtBQUFjLFFBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBRUgsSUFBRSwwQ0FBYSxHQUFiO0FBQWMsUUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxJQUFFLENBQUM7QUFFSCxJQUFFLDJDQUFjLEdBQWQ7QUFBYyxRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3JELElBQUUsQ0FBQyxDQWhCTTtBQUFDOytCQVJULFNBQVMsU0FBQyxqREFRc0I7UUFQL0IsUUFBUSxFQUFFLGxCQVFULGdCQXZCZ0IsVUFBVTtBQUFHO0NBZUUsc0JBQ2hDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFDcEIsSUFBSSxFQUFFLDBCQUNKLDBCQUEwQixFQUFFLFVBQVU7UUFDdEMsc0JBQXNCLEVBQUUsWUFBWSx1QkFDckMsa0JBQ0Y7Ozs7Ozs7Ozs7Ozs7OzJFQXJCd0M7QUFBQyxJQXlDMUMseUJBQUM7QUFDQSxDQURBLEFBM0JELENBUXdDLDRCQUE0QixHQW1CbkU7QUFDRCxTQXBCYSxrQkFBa0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuRGlzYWJsZSwgQ2FuRGlzYWJsZUN0b3IsIG1peGluRGlzYWJsZWR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0VGFiTGFiZWxXcmFwcGVyLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdFRhYkxhYmVsV3JhcHBlckJhc2Uge31cbmNvbnN0IF9NYXRUYWJMYWJlbFdyYXBwZXJNaXhpbkJhc2U6IENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdFRhYkxhYmVsV3JhcHBlckJhc2UgPVxuICAgIG1peGluRGlzYWJsZWQoTWF0VGFiTGFiZWxXcmFwcGVyQmFzZSk7XG5cbi8qKlxuICogVXNlZCBpbiB0aGUgYG1hdC10YWItZ3JvdXBgIHZpZXcgdG8gZGlzcGxheSB0YWIgbGFiZWxzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VGFiTGFiZWxXcmFwcGVyXScsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5tYXQtdGFiLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJyEhZGlzYWJsZWQnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYkxhYmVsV3JhcHBlciBleHRlbmRzIF9NYXRUYWJMYWJlbFdyYXBwZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBDYW5EaXNhYmxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIHdyYXBwZXIgZWxlbWVudCAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgZ2V0T2Zmc2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==