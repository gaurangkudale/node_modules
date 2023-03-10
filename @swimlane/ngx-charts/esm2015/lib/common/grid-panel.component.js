import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class GridPanelComponent {
}
GridPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-grid-panel]',
                template: `
    <svg:rect [attr.height]="height" [attr.width]="width" [attr.x]="x" [attr.y]="y" stroke="none" class="gridpanel" />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GridPanelComponent.propDecorators = {
    path: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2dyaWQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFFLE1BQU0sT0FBTyxrQkFBa0I7OztZQVA5QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOztHQUVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWdyaWQtcGFuZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOnJlY3QgW2F0dHIuaGVpZ2h0XT1cImhlaWdodFwiIFthdHRyLndpZHRoXT1cIndpZHRoXCIgW2F0dHIueF09XCJ4XCIgW2F0dHIueV09XCJ5XCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZ3JpZHBhbmVsXCIgLz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGF0aDtcbiAgQElucHV0KCkgd2lkdGg7XG4gIEBJbnB1dCgpIGhlaWdodDtcbiAgQElucHV0KCkgeDtcbiAgQElucHV0KCkgeTtcbn1cbiJdfQ==