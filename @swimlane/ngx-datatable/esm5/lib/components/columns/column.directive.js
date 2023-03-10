import { __decorate } from "tslib";
import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { ColumnChangesService } from '../../services/column-changes.service';
import * as ɵngcc0 from '@angular/core';
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    Object.defineProperty(DataTableColumnDirective.prototype, "cellTemplate", {
        get: function () {
            return this._cellTemplateInput || this._cellTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "headerTemplate", {
        get: function () {
            return this._headerTemplateInput || this._headerTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnDirective.prototype, "treeToggleTemplate", {
        get: function () {
            return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
        },
        enumerable: true,
        configurable: true
    });
    DataTableColumnDirective.prototype.ngOnChanges = function () {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    };
    DataTableColumnDirective.ctorParameters = function () { return [
        { type: ColumnChangesService }
    ]; };
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "name", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "prop", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "frozenLeft", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "frozenRight", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "flexGrow", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "resizeable", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "comparator", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "pipe", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "sortable", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "draggable", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "canAutoResize", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "minWidth", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "width", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "maxWidth", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "checkboxable", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "headerClass", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "cellClass", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "isTreeColumn", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "treeLevelIndent", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "summaryFunc", void 0);
    __decorate([
        Input()
    ], DataTableColumnDirective.prototype, "summaryTemplate", void 0);
    __decorate([
        Input('cellTemplate')
    ], DataTableColumnDirective.prototype, "_cellTemplateInput", void 0);
    __decorate([
        ContentChild(DataTableColumnCellDirective, { read: TemplateRef, static: true })
    ], DataTableColumnDirective.prototype, "_cellTemplateQuery", void 0);
    __decorate([
        Input('headerTemplate')
    ], DataTableColumnDirective.prototype, "_headerTemplateInput", void 0);
    __decorate([
        ContentChild(DataTableColumnHeaderDirective, { read: TemplateRef, static: true })
    ], DataTableColumnDirective.prototype, "_headerTemplateQuery", void 0);
    __decorate([
        Input('treeToggleTemplate')
    ], DataTableColumnDirective.prototype, "_treeToggleTemplateInput", void 0);
    __decorate([
        ContentChild(DataTableColumnCellTreeToggle, { read: TemplateRef, static: true })
    ], DataTableColumnDirective.prototype, "_treeToggleTemplateQuery", void 0);
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(ɵngcc0.ɵɵdirectiveInject(ColumnChangesService)); };
DataTableColumnDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DataTableColumnCellDirective, true, TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DataTableColumnHeaderDirective, true, TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, DataTableColumnCellTreeToggle, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._cellTemplateQuery = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._headerTemplateQuery = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTableColumnDirective, [{
        type: Directive,
        args: [{ selector: 'ngx-datatable-column' }]
    }], function () { return [{ type: ColumnChangesService }]; }, { name: [{
            type: Input
        }], prop: [{
            type: Input
        }], frozenLeft: [{
            type: Input
        }], frozenRight: [{
            type: Input
        }], flexGrow: [{
            type: Input
        }], resizeable: [{
            type: Input
        }], comparator: [{
            type: Input
        }], pipe: [{
            type: Input
        }], sortable: [{
            type: Input
        }], draggable: [{
            type: Input
        }], canAutoResize: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], width: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], checkboxable: [{
            type: Input
        }], headerCheckboxable: [{
            type: Input
        }], headerClass: [{
            type: Input
        }], cellClass: [{
            type: Input
        }], isTreeColumn: [{
            type: Input
        }], treeLevelIndent: [{
            type: Input
        }], summaryFunc: [{
            type: Input
        }], summaryTemplate: [{
            type: Input
        }], _cellTemplateInput: [{
            type: Input,
            args: ['cellTemplate']
        }], _cellTemplateQuery: [{
            type: ContentChild,
            args: [DataTableColumnCellDirective, { read: TemplateRef, static: true }]
        }], _headerTemplateInput: [{
            type: Input,
            args: ['headerTemplate']
        }], _headerTemplateQuery: [{
            type: ContentChild,
            args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: true }]
        }], _treeToggleTemplateInput: [{
            type: Input,
            args: ['treeToggleTemplate']
        }], _treeToggleTemplateQuery: [{
            type: ContentChild,
            args: [DataTableColumnCellTreeToggle, { read: TemplateRef, static: true }]
        }] }); })();
    return DataTableColumnDirective;
}());
export { DataTableColumnDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBSTdFO0FBQTRELElBd0QxRCxrQ0FBb0Isb0JBQTBDO0FBQUksUUFBOUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtBQUFDLFFBRnZELGtCQUFhLEdBQUcsSUFBSSxDQUFDO0FBQy9CLElBQ21FLENBQUM7QUFDcEUsSUEzQkUsc0JBQUksa0RBQVk7QUFBSSxhQUFwQjtBQUFjLFlBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzlELFFBQUUsQ0FBQztBQUVIO0FBQTBCO0FBQ0EsT0FIdkI7QUFDSCxJQU9FLHNCQUFJLG9EQUFjO0FBQUksYUFBdEI7QUFBYyxZQUNaLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNsRSxRQUFFLENBQUM7QUFFSDtBQUEwQjtBQUNKLE9BSG5CO0FBQ0gsSUFPRSxzQkFBSSx3REFBa0I7QUFBSSxhQUExQjtBQUFjLFlBQ1osT0FBTyxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDO0FBQzFFLFFBQUUsQ0FBQztBQUVIO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCwrQkFBQztBQUNBLENBREEsQUFqRUQsSUFpRUM7QUFDRCxTQWxFYSx3QkFBd0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW4taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW4tY2VsbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUgfSBmcm9tICcuL3RyZWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbHVtbkNoYW5nZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtblByb3AgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25neC1kYXRhdGFibGUtY29sdW1uJyB9KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHJvcDogVGFibGVDb2x1bW5Qcm9wO1xuICBASW5wdXQoKSBmcm96ZW5MZWZ0OiBhbnk7XG4gIEBJbnB1dCgpIGZyb3plblJpZ2h0OiBhbnk7XG4gIEBJbnB1dCgpIGZsZXhHcm93OiBudW1iZXI7XG4gIEBJbnB1dCgpIHJlc2l6ZWFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbXBhcmF0b3I6IGFueTtcbiAgQElucHV0KCkgcGlwZTogYW55O1xuICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBjYW5BdXRvUmVzaXplOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBjaGVja2JveGFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhlYWRlckNoZWNrYm94YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGVyQ2xhc3M6IHN0cmluZyB8ICgoZGF0YTogYW55KSA9PiBzdHJpbmcgfCBhbnkpO1xuICBASW5wdXQoKSBjZWxsQ2xhc3M6IHN0cmluZyB8ICgoZGF0YTogYW55KSA9PiBzdHJpbmcgfCBhbnkpO1xuICBASW5wdXQoKSBpc1RyZWVDb2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyZWVMZXZlbEluZGVudDogbnVtYmVyO1xuICBASW5wdXQoKSBzdW1tYXJ5RnVuYzogKGNlbGxzOiBhbnlbXSkgPT4gYW55O1xuICBASW5wdXQoKSBzdW1tYXJ5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCdjZWxsVGVtcGxhdGUnKVxuICBfY2VsbFRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5DZWxsRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX2NlbGxUZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBjZWxsVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbGxUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2NlbGxUZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgQElucHV0KCdoZWFkZXJUZW1wbGF0ZScpXG4gIF9oZWFkZXJUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX2hlYWRlclRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IGhlYWRlclRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2hlYWRlclRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBASW5wdXQoJ3RyZWVUb2dnbGVUZW1wbGF0ZScpXG4gIF90cmVlVG9nZ2xlVGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX3RyZWVUb2dnbGVUZW1wbGF0ZVF1ZXJ5OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCB0cmVlVG9nZ2xlVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyZWVUb2dnbGVUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX3RyZWVUb2dnbGVUZW1wbGF0ZVF1ZXJ5O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpcnN0Q2hhbmdlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbkNoYW5nZXNTZXJ2aWNlOiBDb2x1bW5DaGFuZ2VzU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5pc0ZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmlzRmlyc3RDaGFuZ2UgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2x1bW5DaGFuZ2VzU2VydmljZS5vbklucHV0Q2hhbmdlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=