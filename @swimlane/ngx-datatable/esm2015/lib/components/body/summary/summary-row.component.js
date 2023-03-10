import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../body-row.component';

function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", 0 - 1);
} }
function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
let DataTableSummaryRowComponent = class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
};
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.DataTableBodyRowComponent], encapsulation: 2 });
__decorate([
    Input()
], DataTableSummaryRowComponent.prototype, "rows", void 0);
__decorate([
    Input()
], DataTableSummaryRowComponent.prototype, "columns", void 0);
__decorate([
    Input()
], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
__decorate([
    Input()
], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
__decorate([
    Input()
], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableSummaryRowComponent, [{
        type: Component,
        args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: Input
        }], columns: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], innerWidth: [{
            type: Input
        }] }); })();
export { DataTableSummaryRowComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovQHN3aW1sYW5lL25neC1kYXRhdGFibGUvbGliL2NvbXBvbmVudHMvYm9keS9zdW1tYXJ5L3N1bW1hcnktcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQVV4RixTQUFTLGNBQWMsQ0FBQyxLQUFZO0FBQUksSUFDdEMsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RCxJQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO0FBQy9CLFFBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsS0FBRztBQUNILElBQUUsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLEVBQUU7QUFDOUQsUUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixLQUFHO0FBQ0gsSUFDRSxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVk7QUFBSSxJQUNuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFxQkQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7QUFBRyxJQUE1QztBQUFnQixRQVNkLGVBQVUsR0FBUSxFQUFFLENBQUM7QUFDdkIsSUF3Q0EsQ0FBQztBQUNELElBeENFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNyQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUNVLHFCQUFxQjtBQUMvQixRQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGlDQUMzQyxHQUFHLEtBQ04sWUFBWSxFQUFFLEdBQUcsQ0FBQyxlQUFlLElBQ2pDLENBQUMsQ0FBQztBQUNSLElBQUUsQ0FBQztBQUNILElBQ1UsWUFBWTtBQUN0QixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFFBQ0ksSUFBSSxDQUFDLE9BQU87QUFDaEIsYUFBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDMUMsYUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckIsWUFBUSxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFlBQVEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFlBQ1EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7QUFDNUMsZ0JBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlELGdCQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMzQyxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUFDVSxrQkFBa0IsQ0FBQyxNQUFzQjtBQUFJLFFBQ25ELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7QUFDMUMsWUFBTSxPQUFPLGNBQWMsQ0FBQztBQUM1QixTQUFLO0FBQUMsYUFBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO0FBQzVDLFlBQU0sT0FBTyxXQUFXLENBQUM7QUFDekIsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNoQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7Ozs7OzBGQUFBO0FBakRVO0FBQ1gsSUFERyxLQUFLLEVBQUU7QUFBQywwREFBWTtBQUNaO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNkRBQTBCO0FBRTFCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsK0RBQWtCO0FBQ2xCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNkRBQWdCO0FBQ2hCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsZ0VBQW1CO0FBTmpCLDRCQUE0QixvQkFuQnhDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtjQUF1QixVQUNqQztPQUFRLEVBQUU7Ozs7Ozs7OzsyQkFZVDtPQUNELElBQUksRUFBRTtFQUNKLEtBQUssRUFBRTs7SUFBdUIsVUFDL0IsTUFDRixDQUFDLElBQ1c7O3NCQUE0QixDQWtEeEM7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FuRFksNEJBQTRCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFBpcGVUcmFuc2Zvcm0sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1bW1hcnlDb2x1bW4ge1xuICBzdW1tYXJ5RnVuYz86IChjZWxsczogYW55W10pID0+IGFueTtcbiAgc3VtbWFyeVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcm9wOiBzdHJpbmc7XG4gIHBpcGU/OiBQaXBlVHJhbnNmb3JtO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3VtRnVuYyhjZWxsczogYW55W10pOiBhbnkge1xuICBjb25zdCBjZWxsc1dpdGhWYWx1ZXMgPSBjZWxscy5maWx0ZXIoY2VsbCA9PiAhIWNlbGwpO1xuXG4gIGlmICghY2VsbHNXaXRoVmFsdWVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjZWxsc1dpdGhWYWx1ZXMuc29tZShjZWxsID0+IHR5cGVvZiBjZWxsICE9PSAnbnVtYmVyJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjZWxsc1dpdGhWYWx1ZXMucmVkdWNlKChyZXMsIGNlbGwpID0+IHJlcyArIGNlbGwpO1xufVxuXG5mdW5jdGlvbiBub29wU3VtRnVuYyhjZWxsczogYW55W10pOiB2b2lkIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRhdGF0YWJsZS1ib2R5LXJvd1xuICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIF9pbnRlcm5hbENvbHVtbnNcIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxuICAgICAgW2NvbHVtbnNdPVwiX2ludGVybmFsQ29sdW1uc1wiXG4gICAgICBbcm93SGVpZ2h0XT1cInJvd0hlaWdodFwiXG4gICAgICBbcm93XT1cInN1bW1hcnlSb3dcIlxuICAgICAgW3Jvd0luZGV4XT1cIi0xXCJcbiAgICA+XG4gICAgPC9kYXRhdGFibGUtYm9keS1yb3c+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdW1tYXJ5Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcm93czogYW55W107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IElTdW1tYXJ5Q29sdW1uW107XG5cbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9mZnNldFg6IG51bWJlcjtcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xuXG4gIF9pbnRlcm5hbENvbHVtbnM6IElTdW1tYXJ5Q29sdW1uW107XG4gIHN1bW1hcnlSb3c6IGFueSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5jb2x1bW5zIHx8ICF0aGlzLnJvd3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnRlcm5hbENvbHVtbnMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnRlcm5hbENvbHVtbnMoKSB7XG4gICAgdGhpcy5faW50ZXJuYWxDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2wgPT4gKHtcbiAgICAgIC4uLmNvbCxcbiAgICAgIGNlbGxUZW1wbGF0ZTogY29sLnN1bW1hcnlUZW1wbGF0ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWVzKCkge1xuICAgIHRoaXMuc3VtbWFyeVJvdyA9IHt9O1xuXG4gICAgdGhpcy5jb2x1bW5zXG4gICAgICAuZmlsdGVyKGNvbCA9PiAhY29sLnN1bW1hcnlUZW1wbGF0ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxzRnJvbVNpbmdsZUNvbHVtbiA9IHRoaXMucm93cy5tYXAocm93ID0+IHJvd1tjb2wucHJvcF0pO1xuICAgICAgICBjb25zdCBzdW1GdW5jID0gdGhpcy5nZXRTdW1tYXJ5RnVuY3Rpb24oY29sKTtcblxuICAgICAgICB0aGlzLnN1bW1hcnlSb3dbY29sLnByb3BdID0gY29sLnBpcGVcbiAgICAgICAgICA/IGNvbC5waXBlLnRyYW5zZm9ybShzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbikpXG4gICAgICAgICAgOiBzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtbWFyeUZ1bmN0aW9uKGNvbHVtbjogSVN1bW1hcnlDb2x1bW4pOiAoYTogYW55W10pID0+IGFueSB7XG4gICAgaWYgKGNvbHVtbi5zdW1tYXJ5RnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFN1bUZ1bmM7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4uc3VtbWFyeUZ1bmMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub29wU3VtRnVuYztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbHVtbi5zdW1tYXJ5RnVuYztcbiAgICB9XG4gIH1cbn1cbiJdfQ==