/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, } from '@angular/cdk/table';
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/table';
var MatCellDef = /** @class */ (function (_super) {
    __extends(MatCellDef, _super);
    function MatCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: MatCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCellDef, [{
        type: Directive,
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: MatCellDef }]
            }]
    }], null, null); })();
    return MatCellDef;
}(CdkCellDef));
export { MatCellDef };
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var MatHeaderCellDef = /** @class */ (function (_super) {
    __extends(MatHeaderCellDef, _super);
    function MatHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatHeaderCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCellDef, [{
        type: Directive,
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
    return MatHeaderCellDef;
}(CdkHeaderCellDef));
export { MatHeaderCellDef };
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var MatFooterCellDef = /** @class */ (function (_super) {
    __extends(MatFooterCellDef, _super);
    function MatFooterCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatFooterCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCellDef, [{
        type: Directive,
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: CdkFooterCellDef, useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
    return MatFooterCellDef;
}(CdkFooterCellDef));
export { MatFooterCellDef };
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
var MatColumnDef = /** @class */ (function (_super) {
    __extends(MatColumnDef, _super);
    function MatColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatColumnDef.propDecorators = {
        name: [{ type: Input, args: ['matColumnDef',] }]
    };
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkColumnDef, useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatColumnDef, [{
        type: Directive,
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: CdkColumnDef, useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: Input,
            args: ['matColumnDef']
        }] }); })();
    return MatColumnDef;
}(CdkColumnDef));
export { MatColumnDef };
/** Header cell template container that adds the right classes and role. */
var MatHeaderCell = /** @class */ (function (_super) {
    __extends(MatHeaderCell, _super);
    function MatHeaderCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    /** @nocollapse */
    MatHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return new (t || MatHeaderCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return MatHeaderCell;
}(CdkHeaderCell));
export { MatHeaderCell };
/** Footer cell template container that adds the right classes and role. */
var MatFooterCell = /** @class */ (function (_super) {
    __extends(MatFooterCell, _super);
    function MatFooterCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    /** @nocollapse */
    MatFooterCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return new (t || MatFooterCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCell, [{
        type: Directive,
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return MatFooterCell;
}(CdkFooterCell));
export { MatFooterCell };
/** Cell template container that adds the right classes and role. */
var MatCell = /** @class */ (function (_super) {
    __extends(MatCell, _super);
    function MatCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    /** @nocollapse */
    MatCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
MatCell.ɵfac = function MatCell_Factory(t) { return new (t || MatCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCell, [{
        type: Directive,
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return MatCell;
}(CdkCell));
export { MatCell };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL2NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQzdDLGFBQWEsRUFDYixnQkFBZ0IsR0FDakIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFDSDtBQUVXLElBRXFCLDhCQUFVO0FBQUMsSUFKM0M7QUFDVztBQUM2QyxJQUVaLENBQUM7OENBSjVDLFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUU7T0FBYyxzQkFDeEIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsQ0FBQyxrQkFDNUQ7Ozs7Ozs7OzBCQUNRO0FBQUMsSUFBa0MsaUJBQUM7QUFFN0MsQ0FGNkMsQUFKN0MsQ0FJZ0MsVUFBVSxHQUFHO0FBQzdDLFNBRGEsVUFBVTtBQUV2QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFVyxJQUUyQixvQ0FBZ0I7QUFBQyxJQUp2RDtBQUNpQjtBQUN1QyxJQUVBLENBQUM7b0RBSnhELFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxrQkFDeEU7Ozs7Ozs7OzBCQUNRO0FBQUMsSUFBOEMsdUJBQUM7QUFFekQsQ0FGeUQsQUFKekQsQ0FJc0MsZ0JBQWdCLEdBQUc7QUFDekQsU0FEYSxnQkFBZ0I7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QUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWMsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7QUFDM0Y7QUFFZ0IsSUFGZCxDQUFDLEFBTE07QUFBQztvQkFQVCxTQUFTLFNBQUMsdENBT3NCO1FBTi9CLFFBQVEsRUFBRSxsQkFRTCxnQkFoR0wsWUFBWTtVQXdGc0IsVkF4RmxCLGdCQUpDLFVBQVU7R0E2RjNCLElBQUksRUFBRSxUQTdGd0I7eUJBOEY1QixPQUFPLEVBQUUsVUFBVSwwQkFDbkIsTUFBTSxFQUFFLFVBQVUsdUJBQ25CLG1CQUNGOzs7Ozs7Ozs7OzswR0FqR3dDO0FBQUMsSUF3RzFDLGNBQUM7QUFDQSxDQURBLEFBYkQsQ0FPNkIsT0FBTyxHQU1uQztBQUNELFNBUGEsT0FBTztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0NlbGwsXG4gIENka0NlbGxEZWYsXG4gIENka0NvbHVtbkRlZiwgQ2RrRm9vdGVyQ2VsbCwgQ2RrRm9vdGVyQ2VsbERlZixcbiAgQ2RrSGVhZGVyQ2VsbCxcbiAgQ2RrSGVhZGVyQ2VsbERlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuLyoqXG4gKiBDZWxsIGRlZmluaXRpb24gZm9yIHRoZSBtYXQtdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBkYXRhIHJvdyBjZWxsIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0Q2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE1hdENlbGxEZWZ9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDZWxsRGVmIGV4dGVuZHMgQ2RrQ2VsbERlZiB7fVxuXG4vKipcbiAqIEhlYWRlciBjZWxsIGRlZmluaXRpb24gZm9yIHRoZSBtYXQtdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBoZWFkZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTWF0SGVhZGVyQ2VsbERlZn1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdEhlYWRlckNlbGxEZWYgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsRGVmIHt9XG5cbi8qKlxuICogRm9vdGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgdGhlIG1hdC10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGZvb3RlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdEZvb3RlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0Zvb3RlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBNYXRGb290ZXJDZWxsRGVmfV1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Rm9vdGVyQ2VsbERlZiBleHRlbmRzIENka0Zvb3RlckNlbGxEZWYge31cblxuLyoqXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIG1hdC10YWJsZS5cbiAqIERlZmluZXMgYSBzZXQgb2YgY2VsbHMgYXZhaWxhYmxlIGZvciBhIHRhYmxlIGNvbHVtbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdENvbHVtbkRlZl0nLFxuICBpbnB1dHM6IFsnc3RpY2t5J10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBNYXRDb2x1bW5EZWZ9LFxuICAgIHtwcm92aWRlOiAnTUFUX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYnLCB1c2VFeGlzdGluZzogTWF0Q29sdW1uRGVmfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRDb2x1bW5EZWYgZXh0ZW5kcyBDZGtDb2x1bW5EZWYge1xuICAvKiogVW5pcXVlIG5hbWUgZm9yIHRoaXMgY29sdW1uLiAqL1xuICBASW5wdXQoJ21hdENvbHVtbkRlZicpIG5hbWU6IHN0cmluZztcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKiBIZWFkZXIgY2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWhlYWRlci1jZWxsLCB0aFttYXQtaGVhZGVyLWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtaGVhZGVyLWNlbGwnLFxuICAgICdyb2xlJzogJ2NvbHVtbmhlYWRlcicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEhlYWRlckNlbGwgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbWF0LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxufVxuXG4vKiogRm9vdGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1mb290ZXItY2VsbCwgdGRbbWF0LWZvb3Rlci1jZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWZvb3Rlci1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZvb3RlckNlbGwgZXh0ZW5kcyBDZGtGb290ZXJDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBtYXQtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG59XG5cbi8qKiBDZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtY2VsbCwgdGRbbWF0LWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRDZWxsIGV4dGVuZHMgQ2RrQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG1hdC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cbn1cbiJdfQ==