import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarHelper } from './services/scrollbar-helper.service';
import { DimensionsHelper } from './services/dimensions-helper.service';
import { ColumnChangesService } from './services/column-changes.service';
import { DataTableFooterTemplateDirective } from './components/footer/footer-template.directive';
import { VisibilityDirective } from './directives/visibility.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { ResizeableDirective } from './directives/resizeable.directive';
import { OrderableDirective } from './directives/orderable.directive';
import { LongPressDirective } from './directives/long-press.directive';
import { ScrollerComponent } from './components/body/scroller.component';
import { DatatableComponent } from './components/datatable.component';
import { DataTableColumnDirective } from './components/columns/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTableHeaderCellComponent } from './components/header/header-cell.component';
import { DataTableBodyComponent } from './components/body/body.component';
import { DataTableFooterComponent } from './components/footer/footer.component';
import { DataTablePagerComponent } from './components/footer/pager.component';
import { ProgressBarComponent } from './components/body/progress-bar.component';
import { DataTableBodyRowComponent } from './components/body/body-row.component';
import { DataTableRowWrapperComponent } from './components/body/body-row-wrapper.component';
import { DatatableRowDetailDirective } from './components/row-detail/row-detail.directive';
import { DatatableGroupHeaderDirective } from './components/body/body-group-header.directive';
import { DatatableRowDetailTemplateDirective } from './components/row-detail/row-detail-template.directive';
import { DataTableBodyCellComponent } from './components/body/body-cell.component';
import { DataTableSelectionComponent } from './components/body/selection.component';
import { DataTableColumnHeaderDirective } from './components/columns/column-header.directive';
import { DataTableColumnCellDirective } from './components/columns/column-cell.directive';
import { DataTableColumnCellTreeToggle } from './components/columns/tree.directive';
import { DatatableFooterDirective } from './components/footer/footer.directive';
import { DatatableGroupHeaderTemplateDirective } from './components/body/body-group-header-template.directive';
import { DataTableSummaryRowComponent } from './components/body/summary/summary-row.component';
import * as ɵngcc0 from '@angular/core';
var NgxDatatableModule = /** @class */ (function () {
    function NgxDatatableModule() {
    }
    NgxDatatableModule_1 = NgxDatatableModule;
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    NgxDatatableModule.forRoot = function (configuration) {
        return {
            ngModule: NgxDatatableModule_1,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    };
    var NgxDatatableModule_1;
NgxDatatableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); }, providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxDatatableModule, { declarations: function () { return [DataTableFooterTemplateDirective,
        VisibilityDirective,
        DraggableDirective,
        ResizeableDirective,
        OrderableDirective,
        LongPressDirective,
        ScrollerComponent,
        DatatableComponent,
        DataTableColumnDirective,
        DataTableHeaderComponent,
        DataTableHeaderCellComponent,
        DataTableBodyComponent,
        DataTableFooterComponent,
        DataTablePagerComponent,
        ProgressBarComponent,
        DataTableBodyRowComponent,
        DataTableRowWrapperComponent,
        DatatableRowDetailDirective,
        DatatableGroupHeaderDirective,
        DatatableRowDetailTemplateDirective,
        DataTableBodyCellComponent,
        DataTableSelectionComponent,
        DataTableColumnHeaderDirective,
        DataTableColumnCellDirective,
        DataTableColumnCellTreeToggle,
        DatatableFooterDirective,
        DatatableGroupHeaderTemplateDirective,
        DataTableSummaryRowComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DatatableComponent,
        DatatableRowDetailDirective,
        DatatableGroupHeaderDirective,
        DatatableRowDetailTemplateDirective,
        DataTableColumnDirective,
        DataTableColumnHeaderDirective,
        DataTableColumnCellDirective,
        DataTableColumnCellTreeToggle,
        DataTableFooterTemplateDirective,
        DatatableFooterDirective,
        DataTablePagerComponent,
        DatatableGroupHeaderTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxDatatableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            }]
    }], function () { return []; }, null); })();
    return NgxDatatableModule;
}());
export { NgxDatatableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9saWIvbmd4LWRhdGF0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDNUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saURBQWlELENBQUM7O0FBa0QvRjtBQUVjLElBRmQ7QUFBZ0MsSUFXaEMsQ0FBQztBQUNELDJCQVphLGtCQUFrQjtBQUFFLElBQy9CO0FBQ0Y7QUFDRTtBQUNFLE9BQUM7QUFDTCxJQUFTLDBCQUFPLEdBQWQsVUFBZSxhQUFrQztBQUFJLFFBQ25ELE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxvQkFBa0I7QUFDbEMsWUFBTSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO0FBQ3hFLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNGO0lBWFksa0JBQWtCLCtDQWhEOUIsUUFBUSxDQUFDO1dBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQ3ZCLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxjQUNwRSxZQUFZLEVBQUUsa0JBQ1osZ0NBQWdDLGtCQUNoQyxtQkFBbUI7SUFDbkIsa0JBQWtCLGtCQUNsQixtQkFBbUIsa0JBQ25CLGtCQUFrQixrQkFDbEIsa0JBQWtCLGtCQUNsQixpQkFBaUI7QUFDakIsa0JBQWtCO09BQ2xCO0dBQXdCLGtCQUN4QjtnQkFBd0I7TUFDeEI7TUFBNEIsa0JBQzVCO21CQUFzQjtTQUN0Qix3QkFBd0I7aUJBQ3hCO01BQXVCLGtCQUN2QjtNQUFvQixrQkFDcEI7aUJBQXlCO0NBQ3pCLDRCQUE0QjtjQUM1QjtXQUEyQixrQkFDM0I7dUJBQTZCO0dBQzdCO0NBQW1DLGtCQUNuQztNQUEwQixrQkFDMUI7TUFBMkIsa0JBQzNCO2tCQUE4QixrQkFDOUI7MkJBQTRCO0tBQzVCLDZCQUE2QjtjQUM3Qix3QkFBd0I7aUJBQ3hCO29CQUFxQyxrQkFDckM7bUJBQTRCLGNBQzdCLGNBQ0QsT0FBTyxFQUFFLGtCQUNQLGtCQUFrQixrQkFDbEIsMkJBQTJCO2FBQzNCO0tBQTZCLGtCQUM3QjttQkFBbUMsa0JBQ25DO2dCQUF3QjtBQUN4Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO2dCQUM1QjtNQUE2QixrQkFDN0I7Y0FBZ0Msa0JBQ2hDO3NCQUF3QjtPQUN4Qix1QkFBdUIsa0JBQ3ZCO3lCQUFxQyxjQUN0QyxVQUNGLENBQUMsUUFDVyxrQkFBa0I7QUFXOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ0Q7QUFDQSxJQUZBLHlCQUFDO0FBRUQsQ0FGQyxBQVhELElBV0M7QUFDRCxTQVphLGtCQUFrQjtBQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsYmFySGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zY3JvbGxiYXItaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9uc0hlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZGltZW5zaW9ucy1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb2x1bW5DaGFuZ2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29sdW1uLWNoYW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWaXNpYmlsaXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Zpc2liaWxpdHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc2l6ZWFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzaXplYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3JkZXJhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL29yZGVyYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9uZ1ByZXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvc2Nyb2xsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW5zL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUhlYWRlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVGFibGVCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9wYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9wcm9ncmVzcy1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZUJvZHlSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlUm93V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib2R5L2JvZHktcm93LXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9yb3ctZGV0YWlsL3Jvdy1kZXRhaWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZUdyb3VwSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvYm9keS1ncm91cC1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZVJvd0RldGFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jvdy1kZXRhaWwvcm93LWRldGFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQm9keUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9ib2R5LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib2R5L3NlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW5zL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5DZWxsVHJlZVRvZ2dsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW5zL3RyZWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGF0YWJsZUZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVHcm91cEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2JvZHkvYm9keS1ncm91cC1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVN1bW1hcnlSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9keS9zdW1tYXJ5L3N1bW1hcnktcm93LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtTY3JvbGxiYXJIZWxwZXIsIERpbWVuc2lvbnNIZWxwZXIsIENvbHVtbkNoYW5nZXNTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcbiAgICBEcmFnZ2FibGVEaXJlY3RpdmUsXG4gICAgUmVzaXplYWJsZURpcmVjdGl2ZSxcbiAgICBPcmRlcmFibGVEaXJlY3RpdmUsXG4gICAgTG9uZ1ByZXNzRGlyZWN0aXZlLFxuICAgIFNjcm9sbGVyQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50LFxuICAgIERhdGFUYWJsZUhlYWRlckNlbGxDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQm9keUNvbXBvbmVudCxcbiAgICBEYXRhVGFibGVGb290ZXJDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlUGFnZXJDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXG4gICAgRGF0YVRhYmxlQm9keVJvd0NvbXBvbmVudCxcbiAgICBEYXRhVGFibGVSb3dXcmFwcGVyQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVCb2R5Q2VsbENvbXBvbmVudCxcbiAgICBEYXRhVGFibGVTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUsXG4gICAgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlLFxuICAgIERhdGF0YWJsZUdyb3VwSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlU3VtbWFyeVJvd0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRGF0YXRhYmxlQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZVJvd0RldGFpbERpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVHcm91cEhlYWRlckRpcmVjdGl2ZSxcbiAgICBEYXRhdGFibGVSb3dEZXRhaWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uSGVhZGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsXG4gICAgRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUsXG4gICAgRGF0YVRhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlLFxuICAgIERhdGFUYWJsZVBhZ2VyQ29tcG9uZW50LFxuICAgIERhdGF0YWJsZUdyb3VwSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRhdGFibGVNb2R1bGUge1xuICAvKipcbiAgICogQ29uZmlndXJlIGdsb2JhbCBjb25maWd1cmF0aW9uIHZpYSBJTmd4RGF0YXRhYmxlQ29uZmlnXG4gICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBJTmd4RGF0YXRhYmxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hEYXRhdGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neERhdGF0YWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogJ2NvbmZpZ3VyYXRpb24nLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvbiB9XVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZGVmaW5pdGlvbiBmb3IgSU5neERhdGF0YWJsZUNvbmZpZyBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElOZ3hEYXRhdGFibGVDb25maWcge1xuICBtZXNzYWdlczoge1xuICAgIGVtcHR5TWVzc2FnZTogc3RyaW5nOyAvLyBNZXNzYWdlIHRvIHNob3cgd2hlbiBhcnJheSBpcyBwcmVzZW50ZWQsIGJ1dCBjb250YWlucyBubyB2YWx1ZXNcbiAgICB0b3RhbE1lc3NhZ2U6IHN0cmluZzsgLy8gRm9vdGVyIHRvdGFsIG1lc3NhZ2VcbiAgICBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZzsgLy8gRm9vdGVyIHNlbGVjdGVkIG1lc3NhZ2VcbiAgfTtcbn1cbiJdfQ==