/**
 * @fileoverview added by tsickle
 * Generated from: src/material/datepicker/calendar-body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 2);
    ɵngcc0.ɵɵelementStart(1, "td", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    ɵngcc0.ɵɵattribute("colspan", ctx_r4._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 8);
    ɵngcc0.ɵɵlistener("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const item_r6 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8._cellClicked(item_r6); });
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
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
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r2);
} }
export class MatCalendarCell {
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     * @param {?=} cssClasses
     */
    constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
    }
}
if (false) {
    /** @type {?} */
    MatCalendarCell.prototype.value;
    /** @type {?} */
    MatCalendarCell.prototype.displayValue;
    /** @type {?} */
    MatCalendarCell.prototype.ariaLabel;
    /** @type {?} */
    MatCalendarCell.prototype.enabled;
    /** @type {?} */
    MatCalendarCell.prototype.cssClasses;
}
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
export class MatCalendarBody {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new EventEmitter();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    _cellClicked(cell) {
        if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = `${100 / numCols}%`;
        }
    }
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isActiveCell(rowIndex, colIndex) {
        /** @type {?} */
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    _focusActiveCell() {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    activeCell.focus();
                }
            }));
        }));
    }
}
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) { return new (t || MatCalendarBody)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
MatCalendarBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCalendarBody, selectors: [["", "mat-calendar-body", ""]], hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", cellAspectRatio: "cellAspectRatio", label: "label", rows: "rows", todayValue: "todayValue", selectedValue: "selectedValue", labelMinRequiredCells: "labelMinRequiredCells" }, outputs: { selectedValueChange: "selectedValueChange" }, exportAs: ["matCalendarBody"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", "role", "button", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", "role", "button", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content"]], template: function MatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        ɵngcc0.ɵɵtemplate(1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.rows);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatCalendarBody.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
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
if (false) {
    /**
     * The label for the table. (e.g. "Jan 2017").
     * @type {?}
     */
    MatCalendarBody.prototype.label;
    /**
     * The cells to display in the table.
     * @type {?}
     */
    MatCalendarBody.prototype.rows;
    /**
     * The value in the table that corresponds to today.
     * @type {?}
     */
    MatCalendarBody.prototype.todayValue;
    /**
     * The value in the table that is currently selected.
     * @type {?}
     */
    MatCalendarBody.prototype.selectedValue;
    /**
     * The minimum number of free cells needed to fit the label in the first row.
     * @type {?}
     */
    MatCalendarBody.prototype.labelMinRequiredCells;
    /**
     * The number of columns in the table.
     * @type {?}
     */
    MatCalendarBody.prototype.numCols;
    /**
     * The cell number of the active cell in the table.
     * @type {?}
     */
    MatCalendarBody.prototype.activeCell;
    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     * @type {?}
     */
    MatCalendarBody.prototype.cellAspectRatio;
    /**
     * Emits when a new value is selected.
     * @type {?}
     */
    MatCalendarBody.prototype.selectedValueChange;
    /**
     * The number of blank cells to put at the beginning for the first row.
     * @type {?}
     */
    MatCalendarBody.prototype._firstRowOffset;
    /**
     * Padding for the individual date cells.
     * @type {?}
     */
    MatCalendarBody.prototype._cellPadding;
    /**
     * Width of an individual cell.
     * @type {?}
     */
    MatCalendarBody.prototype._cellWidth;
    /**
     * @type {?}
     * @private
     */
    MatCalendarBody.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatCalendarBody.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RhdGVwaWNrZXIvY2FsZW5kYXItYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEM7QUFDRztBQUdhO0FBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEMsTUFBTSxPQUFPLGVBQWU7QUFDNUI7QUFBUTtBQUF3QjtBQUNMO0FBQ2Y7QUFBMEI7QUFDVjtBQUFRLElBSGxDLFlBQW1CLEtBQWEsRUFDYixZQUFvQixFQUNwQixTQUFpQixFQUNqQixPQUFnQixFQUNoQixhQUF3QyxFQUFFO0FBQUksUUFKOUMsVUFBSyxHQUFMLEtBQUssQ0FBUTtBQUFDLFFBQ2QsaUJBQVksR0FBWixZQUFZLENBQVE7QUFBQyxRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFRO0FBQUMsUUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztBQUFDLFFBQ2pCLGVBQVUsR0FBVixVQUFVLENBQWdDO0FBQUMsSUFBRSxDQUFDO0FBQ25FLENBQUM7QUFDRDtBQUdPO0FBQXFCLElBVGQsZ0NBQW9CO0FBQUM7QUFDZixJQUFOLHVDQUEyQjtBQUFDO0FBQ3RCLElBQU4sb0NBQXdCO0FBQUM7QUFDbkIsSUFBTixrQ0FBdUI7QUFBQztBQUNsQixJQUFOLHFDQUFpRDtBQUFDO0FBQUU7QUFFbEU7QUFHNkQ7QUFDakQ7QUFlWixNQUFNLE9BQU8sZUFBZTtBQUFHO0FBQVE7QUFDdEI7QUFBMEI7QUFB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NUIscUNBQWdDO0FBQ2xDO0FBRUM7QUFDRTtBQUNFO0FBQ1c7QUFBUSxJQUF0QiwwQ0FBcUM7QUFDdkM7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsOENBQTBGO0FBQzVGO0FBQ087QUFDRjtBQUFpQjtBQUVwQixJQUZBLDBDQUF3QjtBQUMxQjtBQUNPO0FBQ0Y7QUFBaUI7QUFFakIsSUFGSCx1Q0FBcUI7QUFDdkI7QUFDTztBQUNGO0FBQ0w7QUFDTyxJQUZMLHFDQUFtQjtBQUNyQjtBQUNPO0FBQWlCO0FBQWdCO0FBQVEsSUFBbEMsc0NBQTRDO0FBQUM7QUFBUTtBQUFpQjtBQUUxRTtBQUFRLElBRjBDLGtDQUF1QjtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogRXh0cmEgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIGEgY2FsZW5kYXIgY2VsbC5cbiAqL1xuZXhwb3J0IHR5cGUgTWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcyA9IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7W2tleTogc3RyaW5nXTogYW55fTtcblxuLyoqXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byBhIHNpbmdsZSBjYWxlbmRhciBjZWxsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgTWF0Q2FsZW5kYXJDZWxsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBudW1iZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbixcbiAgICAgICAgICAgICAgcHVibGljIGNzc0NsYXNzZXM6IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXMgPSB7fSkge31cbn1cblxuXG4vKipcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXIgZGF0YSBpbiBhIHRhYmxlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbWF0LWNhbGVuZGFyLWJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1ib2R5Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FsZW5kYXItYm9keS5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtY2FsZW5kYXItYm9keScsXG4gICAgJ3JvbGUnOiAnZ3JpZCcsXG4gICAgJ2FyaWEtcmVhZG9ubHknOiAndHJ1ZSdcbiAgfSxcbiAgZXhwb3J0QXM6ICdtYXRDYWxlbmRhckJvZHknLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FsZW5kYXJCb2R5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIHRhYmxlLiAoZS5nLiBcIkphbiAyMDE3XCIpLiAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY2VsbHMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGUuICovXG4gIEBJbnB1dCgpIHJvd3M6IE1hdENhbGVuZGFyQ2VsbFtdW107XG5cbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBjb3JyZXNwb25kcyB0byB0b2RheS4gKi9cbiAgQElucHV0KCkgdG9kYXlWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBmcmVlIGNlbGxzIG5lZWRlZCB0byBmaXQgdGhlIGxhYmVsIGluIHRoZSBmaXJzdCByb3cuICovXG4gIEBJbnB1dCgpIGxhYmVsTWluUmVxdWlyZWRDZWxsczogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLiAqL1xuICBASW5wdXQoKSBudW1Db2xzOiBudW1iZXIgPSA3O1xuXG4gIC8qKiBUaGUgY2VsbCBudW1iZXIgb2YgdGhlIGFjdGl2ZSBjZWxsIGluIHRoZSB0YWJsZS4gKi9cbiAgQElucHV0KCkgYWN0aXZlQ2VsbDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGFzcGVjdCByYXRpbyAod2lkdGggLyBoZWlnaHQpIHRvIHVzZSBmb3IgdGhlIGNlbGxzIGluIHRoZSB0YWJsZS4gVGhpcyBhc3BlY3QgcmF0aW8gd2lsbCBiZVxuICAgKiBtYWludGFpbmVkIGV2ZW4gYXMgdGhlIHRhYmxlIHJlc2l6ZXMuXG4gICAqL1xuICBASW5wdXQoKSBjZWxsQXNwZWN0UmF0aW86IG51bWJlciA9IDE7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIHRvIHB1dCBhdCB0aGUgYmVnaW5uaW5nIGZvciB0aGUgZmlyc3Qgcm93LiAqL1xuICBfZmlyc3RSb3dPZmZzZXQ6IG51bWJlcjtcblxuICAvKiogUGFkZGluZyBmb3IgdGhlIGluZGl2aWR1YWwgZGF0ZSBjZWxscy4gKi9cbiAgX2NlbGxQYWRkaW5nOiBzdHJpbmc7XG5cbiAgLyoqIFdpZHRoIG9mIGFuIGluZGl2aWR1YWwgY2VsbC4gKi9cbiAgX2NlbGxXaWR0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XG5cbiAgX2NlbGxDbGlja2VkKGNlbGw6IE1hdENhbGVuZGFyQ2VsbCk6IHZvaWQge1xuICAgIGlmIChjZWxsLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KGNlbGwudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBjb2x1bW5DaGFuZ2VzID0gY2hhbmdlc1snbnVtQ29scyddO1xuICAgIGNvbnN0IHtyb3dzLCBudW1Db2xzfSA9IHRoaXM7XG5cbiAgICBpZiAoY2hhbmdlc1sncm93cyddIHx8IGNvbHVtbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2ZpcnN0Um93T2Zmc2V0ID0gcm93cyAmJiByb3dzLmxlbmd0aCAmJiByb3dzWzBdLmxlbmd0aCA/IG51bUNvbHMgLSByb3dzWzBdLmxlbmd0aCA6IDA7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2NlbGxBc3BlY3RSYXRpbyddIHx8IGNvbHVtbkNoYW5nZXMgfHwgIXRoaXMuX2NlbGxQYWRkaW5nKSB7XG4gICAgICB0aGlzLl9jZWxsUGFkZGluZyA9IGAkezUwICogdGhpcy5jZWxsQXNwZWN0UmF0aW8gLyBudW1Db2xzfSVgO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW5DaGFuZ2VzIHx8ICF0aGlzLl9jZWxsV2lkdGgpIHtcbiAgICAgIHRoaXMuX2NlbGxXaWR0aCA9IGAkezEwMCAvIG51bUNvbHN9JWA7XG4gICAgfVxuICB9XG5cbiAgX2lzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xuXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgZmlyc3Qgcm93IG1heSBub3QgaGF2ZSBhcyBtYW55IGNlbGxzLlxuICAgIGlmIChyb3dJbmRleCkge1xuICAgICAgY2VsbE51bWJlciAtPSB0aGlzLl9maXJzdFJvd09mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbE51bWJlciA9PSB0aGlzLmFjdGl2ZUNlbGw7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgYWN0aXZlIGNlbGwgYWZ0ZXIgdGhlIG1pY3JvdGFzayBxdWV1ZSBpcyBlbXB0eS4gKi9cbiAgX2ZvY3VzQWN0aXZlQ2VsbCgpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2VsbDogSFRNTEVsZW1lbnQgfCBudWxsID1cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUNlbGwpIHtcbiAgICAgICAgICBhY3RpdmVDZWxsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=