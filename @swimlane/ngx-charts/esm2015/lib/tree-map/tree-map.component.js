import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { treemap, stratify } from 'd3-hierarchy';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
export class TreeMapComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.tooltipDisabled = false;
        this.gradient = false;
        this.select = new EventEmitter();
        this.margin = [10, 10, 10, 10];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.domain = this.getDomain();
        this.treemap = treemap().size([this.dims.width, this.dims.height]);
        const rootNode = {
            name: 'root',
            value: 0,
            isRoot: true
        };
        const root = stratify()
            .id(d => {
            let label = d.name;
            if (label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label.toLocaleString();
            }
            return label;
        })
            .parentId(d => (d.isRoot ? null : 'root'))([rootNode, ...this.results])
            .sum(d => d.value);
        this.data = this.treemap(root);
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getDomain() {
        return this.results.map(d => d.name);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
}
TreeMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-charts-tree-map',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="tree-map chart">
        <svg:g
          ngx-charts-tree-map-cell-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [gradient]="gradient"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".tree-map .treemap-val{display:inline-block;font-size:1.3em;padding-top:5px}.tree-map .treemap-label p{display:table-cell;line-height:1.2em;text-align:center;vertical-align:middle}"]
            },] }
];
TreeMapComponent.propDecorators = {
    results: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    gradient: [{ type: Input }],
    select: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL3RyZWUtbWFwL3RyZWUtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTJCckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGtCQUFrQjtJQXpCeEQ7O1FBMkJXLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBR2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVdEMsV0FBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFxRDVCLENBQUM7SUFuREMsTUFBTTtRQUNKLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7WUFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFeEUsTUFBTSxRQUFRLEdBQUc7WUFDZixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsUUFBUSxFQUFPO2FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFbkIsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7YUFDRCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7c0JBRUUsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU07OEJBRU4sWUFBWSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmVlbWFwLCBzdHJhdGlmeSB9IGZyb20gJ2QzLWhpZXJhcmNoeSc7XG5cbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi92aWV3LWRpbWVuc2lvbnMuaGVscGVyJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtdHJlZS1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtY2hhcnRzLWNoYXJ0IFt2aWV3XT1cIlt3aWR0aCwgaGVpZ2h0XVwiIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiPlxuICAgICAgPHN2ZzpnIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBjbGFzcz1cInRyZWUtbWFwIGNoYXJ0XCI+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMtdHJlZS1tYXAtY2VsbC1zZXJpZXNcbiAgICAgICAgICBbY29sb3JzXT1cImNvbG9yc1wiXG4gICAgICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICBbdmFsdWVGb3JtYXR0aW5nXT1cInZhbHVlRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW2xhYmVsRm9ybWF0dGluZ109XCJsYWJlbEZvcm1hdHRpbmdcIlxuICAgICAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L25neC1jaGFydHMtY2hhcnQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtbWFwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNYXBDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBASW5wdXQoKSByZXN1bHRzO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGxhYmVsRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFRlbXBsYXRlJykgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGRpbXM6IGFueTtcbiAgZG9tYWluOiBhbnk7XG4gIHRyYW5zZm9ybTogYW55O1xuICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICB0cmVlbWFwOiBhbnk7XG4gIGRhdGE6IGFueTtcbiAgbWFyZ2luID0gWzEwLCAxMCwgMTAsIDEwXTtcblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpblxuICAgIH0pO1xuXG4gICAgdGhpcy5kb21haW4gPSB0aGlzLmdldERvbWFpbigpO1xuXG4gICAgdGhpcy50cmVlbWFwID0gdHJlZW1hcDxhbnk+KCkuc2l6ZShbdGhpcy5kaW1zLndpZHRoLCB0aGlzLmRpbXMuaGVpZ2h0XSk7XG5cbiAgICBjb25zdCByb290Tm9kZSA9IHtcbiAgICAgIG5hbWU6ICdyb290JyxcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgaXNSb290OiB0cnVlXG4gICAgfTtcblxuICAgIGNvbnN0IHJvb3QgPSBzdHJhdGlmeTxhbnk+KClcbiAgICAgIC5pZChkID0+IHtcbiAgICAgICAgbGV0IGxhYmVsID0gZC5uYW1lO1xuXG4gICAgICAgIGlmIChsYWJlbC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScpIHtcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsID0gbGFiZWwudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICB9KVxuICAgICAgLnBhcmVudElkKGQgPT4gKGQuaXNSb290ID8gbnVsbCA6ICdyb290JykpKFtyb290Tm9kZSwgLi4udGhpcy5yZXN1bHRzXSlcbiAgICAgIC5zdW0oZCA9PiBkLnZhbHVlKTtcblxuICAgIHRoaXMuZGF0YSA9IHRoaXMudHJlZW1hcChyb290KTtcblxuICAgIHRoaXMuc2V0Q29sb3JzKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLmRpbXMueE9mZnNldH0gLCAke3RoaXMubWFyZ2luWzBdfSlgO1xuICB9XG5cbiAgZ2V0RG9tYWluKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQubmFtZSk7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JzID0gbmV3IENvbG9ySGVscGVyKHRoaXMuc2NoZW1lLCAnb3JkaW5hbCcsIHRoaXMuZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XG4gIH1cbn1cbiJdfQ==