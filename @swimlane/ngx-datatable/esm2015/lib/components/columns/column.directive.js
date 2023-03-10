import { __decorate } from "tslib";
import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { ColumnChangesService } from '../../services/column-changes.service';
import * as ɵngcc0 from '@angular/core';
let DataTableColumnDirective = class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
};
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
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
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
export { DataTableColumnDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2xpYi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBSTdFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0FBQUcsSUF3RHRDLFlBQW9CLG9CQUEwQztBQUFJLFFBQTlDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7QUFBQyxRQUZ2RCxrQkFBYSxHQUFHLElBQUksQ0FBQztBQUMvQixJQUNtRSxDQUFDO0FBQ3BFLElBM0JFLElBQUksWUFBWTtBQUFLLFFBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUM5RCxJQUFFLENBQUM7QUFDSCxJQU9FLElBQUksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNsRSxJQUFFLENBQUM7QUFDSCxJQU9FLElBQUksa0JBQWtCO0FBQUssUUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDO0FBQzFFLElBQUUsQ0FBQztBQUNILElBS0UsV0FBVztBQUNiLFFBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQzVCLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDakMsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNoRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OHpCQUFBO0FBQ0Q7QUFBa0QsWUFWTixvQkFBb0I7QUFBRztBQXZEeEQ7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxzREFBYTtBQUNiO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsc0RBQXNCO0FBQ3RCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNERBQWdCO0FBQ2hCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNkRBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNERBQW9CO0FBQ3BCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsNERBQWdCO0FBQ2hCO0FBQ1QsSUFEQyxLQUFLLEVBQUU7QUFBQyxzREFBVTtBQUNWO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQWtCO0FBQ2xCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMkRBQW1CO0FBQ25CO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsK0RBQXVCO0FBQ3ZCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQWlCO0FBQ2pCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsdURBQWM7QUFDZDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDBEQUFpQjtBQUNqQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFzQjtBQUN0QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG9FQUE0QjtBQUM1QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDZEQUFvRDtBQUNwRDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDJEQUFrRDtBQUNsRDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhEQUFzQjtBQUN0QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGlFQUF3QjtBQUN4QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDZEQUFtQztBQUNuQztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGlFQUFrQztBQUczQztBQUFhLElBRFosS0FBSyxDQUFDLGNBQWMsQ0FBQztBQUN4QixvRUFBdUM7QUFHckM7QUFBYSxJQURaLFlBQVksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2xGLG9FQUF1QztBQU9yQztBQUFhLElBRFosS0FBSyxDQUFDLGdCQUFnQixDQUFDO0FBQzFCLHNFQUF5QztBQUd2QztBQUFhLElBRFosWUFBWSxDQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDcEYsc0VBQXlDO0FBT3ZDO0FBQWEsSUFEWixLQUFLLENBQUMsb0JBQW9CLENBQUM7QUFDOUIsMEVBQTZDO0FBRzNDO0FBQWEsSUFEWixZQUFZLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNuRiwwRUFBNkM7QUFoRGhDLHdCQUF3QixvQkFEcEMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFO0tBQXNCLEVBQUUsQ0FBQyxJQUNuQztXQUF3QixDQWlFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBbEVZLHdCQUF3QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5DZWxsVHJlZVRvZ2dsZSB9IGZyb20gJy4vdHJlZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uQ2hhbmdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uUHJvcCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1jb2x1bW4nIH0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9wOiBUYWJsZUNvbHVtblByb3A7XG4gIEBJbnB1dCgpIGZyb3plbkxlZnQ6IGFueTtcbiAgQElucHV0KCkgZnJvemVuUmlnaHQ6IGFueTtcbiAgQElucHV0KCkgZmxleEdyb3c6IG51bWJlcjtcbiAgQElucHV0KCkgcmVzaXplYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgY29tcGFyYXRvcjogYW55O1xuICBASW5wdXQoKSBwaXBlOiBhbnk7XG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNhbkF1dG9SZXNpemU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNoZWNrYm94YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGVyQ2hlY2tib3hhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBoZWFkZXJDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGNlbGxDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGlzVHJlZUNvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJlZUxldmVsSW5kZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN1bW1hcnlGdW5jOiAoY2VsbHM6IGFueVtdKSA9PiBhbnk7XG4gIEBJbnB1dCgpIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXG4gIF9jZWxsVGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfY2VsbFRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IGNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2VsbFRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fY2VsbFRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBASW5wdXQoJ2hlYWRlclRlbXBsYXRlJylcbiAgX2hlYWRlclRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfaGVhZGVyVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgaGVhZGVyVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclRlbXBsYXRlSW5wdXQgfHwgdGhpcy5faGVhZGVyVGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIEBJbnB1dCgndHJlZVRvZ2dsZVRlbXBsYXRlJylcbiAgX3RyZWVUb2dnbGVUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IHRyZWVUb2dnbGVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBwcml2YXRlIGlzRmlyc3RDaGFuZ2UgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U6IENvbHVtbkNoYW5nZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaXNGaXJzdENoYW5nZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbHVtbkNoYW5nZXNTZXJ2aWNlLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==