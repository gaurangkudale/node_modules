/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, NgZone, } from '@angular/core';
import { take } from 'rxjs/operators';
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 2);
    ɵngcc0.ɵɵelementStart(1, "td", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.numCols);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
function MatCalendarBody_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    ɵngcc0.ɵɵattribute("colspan", ctx_r4._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 8);
    ɵngcc0.ɵɵlistener("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var item_r6 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8._cellClicked(item_r6); });
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var colIndex_r7 = ctx.index;
    var rowIndex_r3 = ɵngcc0.ɵɵnextContext().index;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    ɵngcc0.ɵɵclassProp("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7));
    ɵngcc0.ɵɵproperty("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : 0 - 1);
    ɵngcc0.ɵɵattribute("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5.selectedValue === item_r6.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("mat-calendar-body-selected", ctx_r5.selectedValue === item_r6.value)("mat-calendar-body-today", ctx_r5.todayValue === item_r6.value);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r6.displayValue, " ");
} }
function MatCalendarBody_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 4);
    ɵngcc0.ɵɵtemplate(1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    ɵngcc0.ɵɵtemplate(2, MatCalendarBody_tr_1_td_2_Template, 3, 20, "td", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r2 = ctx.$implicit;
    var rowIndex_r3 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r2);
} }
var MatCalendarCell = /** @class */ (function () {
    function MatCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses) {
        if (cssClasses === void 0) { cssClasses = {}; }
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
    }
    return MatCalendarCell;
}());
export { MatCalendarCell };
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
var MatCalendarBody = /** @class */ (function () {
    function MatCalendarBody(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** The number of columns in the table. */
        this.numCols = 7;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    MatCalendarBody.prototype._cellClicked = function (cell) {
        if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
        }
    };
    MatCalendarBody.prototype.ngOnChanges = function (changes) {
        var columnChanges = changes['numCols'];
        var _a = this, rows = _a.rows, numCols = _a.numCols;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = 50 * this.cellAspectRatio / numCols + "%";
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = 100 / numCols + "%";
        }
    };
    MatCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    /** Focuses the active cell after the microtask queue is empty. */
    MatCalendarBody.prototype._focusActiveCell = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(function () {
                var activeCell = _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    activeCell.focus();
                }
            });
        });
    };
    /** @nocollapse */
    MatCalendarBody.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MatCalendarBody.propDecorators = {
        label: [{ type: Input }],
        rows: [{ type: Input }],
        todayValue: [{ type: Input }],
        selectedValue: [{ type: Input }],
        labelMinRequiredCells: [{ type: Input }],
        numCols: [{ type: Input }],
        activeCell: [{ type: Input }],
        cellAspectRatio: [{ type: Input }],
        selectedValueChange: [{ type: Output }]
    };
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) { return new (t || MatCalendarBody)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatCalendarBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCalendarBody, selectors: [["", "mat-calendar-body", ""]], hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", cellAspectRatio: "cellAspectRatio", label: "label", rows: "rows", todayValue: "todayValue", selectedValue: "selectedValue", labelMinRequiredCells: "labelMinRequiredCells" }, outputs: { selectedValueChange: "selectedValueChange" }, exportAs: ["matCalendarBody"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", "role", "button", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", "role", "button", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content"]], template: function MatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        ɵngcc0.ɵɵtemplate(1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.rows);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCalendarBody, [{
        type: Component,
        args: [{
                selector: '[mat-calendar-body]',
                template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"selectedValue === item.value\"\n      (click)=\"_cellClicked(item)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      role=\"button\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content\"\n        [class.mat-calendar-body-selected]=\"selectedValue === item.value\"\n        [class.mat-calendar-body-today]=\"todayValue === item.value\">\n        {{item.displayValue}}\n      </div>\n  </td>\n</tr>\n",
                host: {
                    'class': 'mat-calendar-body',
                    'role': 'grid',
                    'aria-readonly': 'true'
                },
                exportAs: 'matCalendarBody',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { numCols: [{
            type: Input
        }], activeCell: [{
            type: Input
        }], cellAspectRatio: [{
            type: Input
        }], selectedValueChange: [{
            type: Output
        }], label: [{
            type: Input
        }], rows: [{
            type: Input
        }], todayValue: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], labelMinRequiredCells: [{
            type: Input
        }] }); })();
    return MatCalendarBody;
}());
export { MatCalendarBody };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RhdGVwaWNrZXIvY2FsZW5kYXItYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixNQUFNLEdBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNIO0FBQ29CLElBQWxCLHlCQUFtQixLQUFhLEVBQ2IsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsT0FBZ0IsRUFDaEIsVUFBMEM7QUFBSSxRQUE5QywyQkFBQSxFQUFBLGVBQTBDO0FBQUksUUFKOUMsVUFBSyxHQUFMLEtBQUssQ0FBUTtBQUFDLFFBQ2QsaUJBQVksR0FBWixZQUFZLENBQVE7QUFBQyxRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFRO0FBQUMsUUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztBQUFDLFFBQ2pCLGVBQVUsR0FBVixVQUFVLENBQWdDO0FBQUMsSUFBRSxDQUFDO0FBQ25FLElBQUEsc0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUcsSUFtREQseUJBQW9CLFdBQW9DLEVBQVUsT0FBZTtBQUFJLFFBQWpFLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBeEJsRiwwQ0FBMEM7QUFDNUMs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LFVBQVU7U0FrQ3FCLFRBakMvQixnQkFJQSxNQUFNO01BOEJOLE5BN0JEO0FBQVU7QUFFUyx3QkF3Q2pCLEtBQUs7QUFBSyx1QkFHVixLQUFLO0FBQUssNkJBR1YsS0FBSztBQUFLLGdDQUdWLEtBQUs7QUFBSyx3Q0FHVixLQUFLO0FBQUssMEJBR1YsS0FBSztBQUFLLDZCQUdWLEtBQUs7QUFBSyxrQ0FNVixLQUFLO0FBQUssc0NBR1YsTUFBTTtBQUFJOzs7Ozs7Ozt5Q0F4Q3NCO2VBRWpDLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUsbUJBQW1CLDBCQUM1QixNQUFNLEVBQUUsTUFBTSwwQkFDZCxlQUFlLEVBQUUsTUFBTSxzQkFDeEIsc0JBQ0QsUUFBUSxFQUFFLGlCQUFpQixzQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksc0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzs7OzsrSEFDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQThCa0I7QUFBQyxJQTREcEIsc0JBQUM7QUFDQSxDQURBLEFBdEdELElBc0dDO0FBQ0QsU0ExRmEsZUFBZTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEV4dHJhIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCBhIGNhbGVuZGFyIGNlbGwuXG4gKi9cbmV4cG9ydCB0eXBlIE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwge1trZXk6IHN0cmluZ106IGFueX07XG5cbi8qKlxuICogQW4gaW50ZXJuYWwgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gYSBzaW5nbGUgY2FsZW5kYXIgY2VsbC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdENhbGVuZGFyQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogbnVtYmVyLFxuICAgICAgICAgICAgICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW4sXG4gICAgICAgICAgICAgIHB1YmxpYyBjc3NDbGFzc2VzOiBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzID0ge30pIHt9XG59XG5cblxuLyoqXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGNhbGVuZGFyIGRhdGEgaW4gYSB0YWJsZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYWxlbmRhci1ib2R5XScsXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItYm9keS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhbGVuZGFyLWJvZHkuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNhbGVuZGFyLWJvZHknLFxuICAgICdyb2xlJzogJ2dyaWQnLFxuICAgICdhcmlhLXJlYWRvbmx5JzogJ3RydWUnXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWF0Q2FsZW5kYXJCb2R5JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdENhbGVuZGFyQm9keSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWJsZS4gKGUuZy4gXCJKYW4gMjAxN1wiKS4gKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKiogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLiAqL1xuICBASW5wdXQoKSByb3dzOiBNYXRDYWxlbmRhckNlbGxbXVtdO1xuXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgY29ycmVzcG9uZHMgdG8gdG9kYXkuICovXG4gIEBJbnB1dCgpIHRvZGF5VmFsdWU6IG51bWJlcjtcblxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC4gKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbWluaW11bSBudW1iZXIgb2YgZnJlZSBjZWxscyBuZWVkZWQgdG8gZml0IHRoZSBsYWJlbCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xuICBASW5wdXQoKSBsYWJlbE1pblJlcXVpcmVkQ2VsbHM6IG51bWJlcjtcblxuICAvKiogVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSB0YWJsZS4gKi9cbiAgQElucHV0KCkgbnVtQ29sczogbnVtYmVyID0gNztcblxuICAvKiogVGhlIGNlbGwgbnVtYmVyIG9mIHRoZSBhY3RpdmUgY2VsbCBpbiB0aGUgdGFibGUuICovXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGw6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBhc3BlY3QgcmF0aW8gKHdpZHRoIC8gaGVpZ2h0KSB0byB1c2UgZm9yIHRoZSBjZWxscyBpbiB0aGUgdGFibGUuIFRoaXMgYXNwZWN0IHJhdGlvIHdpbGwgYmVcbiAgICogbWFpbnRhaW5lZCBldmVuIGFzIHRoZSB0YWJsZSByZXNpemVzLlxuICAgKi9cbiAgQElucHV0KCkgY2VsbEFzcGVjdFJhdGlvOiBudW1iZXIgPSAxO1xuXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyB0byBwdXQgYXQgdGhlIGJlZ2lubmluZyBmb3IgdGhlIGZpcnN0IHJvdy4gKi9cbiAgX2ZpcnN0Um93T2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqIFBhZGRpbmcgZm9yIHRoZSBpbmRpdmlkdWFsIGRhdGUgY2VsbHMuICovXG4gIF9jZWxsUGFkZGluZzogc3RyaW5nO1xuXG4gIC8qKiBXaWR0aCBvZiBhbiBpbmRpdmlkdWFsIGNlbGwuICovXG4gIF9jZWxsV2lkdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxuXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBNYXRDYWxlbmRhckNlbGwpOiB2b2lkIHtcbiAgICBpZiAoY2VsbC5lbmFibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdChjZWxsLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY29sdW1uQ2hhbmdlcyA9IGNoYW5nZXNbJ251bUNvbHMnXTtcbiAgICBjb25zdCB7cm93cywgbnVtQ29sc30gPSB0aGlzO1xuXG4gICAgaWYgKGNoYW5nZXNbJ3Jvd3MnXSB8fCBjb2x1bW5DaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9maXJzdFJvd09mZnNldCA9IHJvd3MgJiYgcm93cy5sZW5ndGggJiYgcm93c1swXS5sZW5ndGggPyBudW1Db2xzIC0gcm93c1swXS5sZW5ndGggOiAwO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydjZWxsQXNwZWN0UmF0aW8nXSB8fCBjb2x1bW5DaGFuZ2VzIHx8ICF0aGlzLl9jZWxsUGFkZGluZykge1xuICAgICAgdGhpcy5fY2VsbFBhZGRpbmcgPSBgJHs1MCAqIHRoaXMuY2VsbEFzcGVjdFJhdGlvIC8gbnVtQ29sc30lYDtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uQ2hhbmdlcyB8fCAhdGhpcy5fY2VsbFdpZHRoKSB7XG4gICAgICB0aGlzLl9jZWxsV2lkdGggPSBgJHsxMDAgLyBudW1Db2xzfSVgO1xuICAgIH1cbiAgfVxuXG4gIF9pc0FjdGl2ZUNlbGwocm93SW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCBjZWxsTnVtYmVyID0gcm93SW5kZXggKiB0aGlzLm51bUNvbHMgKyBjb2xJbmRleDtcblxuICAgIC8vIEFjY291bnQgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGZpcnN0IHJvdyBtYXkgbm90IGhhdmUgYXMgbWFueSBjZWxscy5cbiAgICBpZiAocm93SW5kZXgpIHtcbiAgICAgIGNlbGxOdW1iZXIgLT0gdGhpcy5fZmlyc3RSb3dPZmZzZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNlbGxOdW1iZXIgPT0gdGhpcy5hY3RpdmVDZWxsO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGFjdGl2ZSBjZWxsIGFmdGVyIHRoZSBtaWNyb3Rhc2sgcXVldWUgaXMgZW1wdHkuICovXG4gIF9mb2N1c0FjdGl2ZUNlbGwoKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNlbGw6IEhUTUxFbGVtZW50IHwgbnVsbCA9XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZScpO1xuXG4gICAgICAgIGlmIChhY3RpdmVDZWxsKSB7XG4gICAgICAgICAgYWN0aXZlQ2VsbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19