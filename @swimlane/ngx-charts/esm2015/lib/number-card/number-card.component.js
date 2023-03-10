import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { gridLayout, gridSize } from '../common/grid-layout.helper';
export class NumberCardComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.innerPadding = 15;
        this.margin = [10, 10, 10, 10];
    }
    get clickable() {
        return !!this.select.observers.length;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.formatDates();
        this.domain = this.getDomain();
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        const size = gridSize(this.dims, this.results.length, 150);
        const N = size[0] * size[1];
        const data = this.results.slice();
        while (data.length < N) {
            data.push({ value: null });
        }
        this.data = gridLayout(this.dims, data, 150, this.designatedTotal);
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
}
NumberCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-charts-number-card',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="number-card chart" [class.clickable]="clickable">
        <svg:g
          ngx-charts-card-series
          [colors]="colors"
          [cardColor]="cardColor"
          [bandColor]="bandColor"
          [textColor]="textColor"
          [emptyColor]="emptyColor"
          [data]="data"
          [dims]="dims"
          [innerPadding]="innerPadding"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;line-height:1em;overflow:hidden;pointer-events:none;text-align:left}ngx-charts-number-card .cell .trimmed-label p{margin:0;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap;width:100%}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}"]
            },] }
];
NumberCardComponent.propDecorators = {
    cardColor: [{ type: Input }],
    bandColor: [{ type: Input }],
    emptyColor: [{ type: Input }],
    innerPadding: [{ type: Input }],
    textColor: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    designatedTotal: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL251bWJlci1jYXJkL251bWJlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQWtCLE1BQU0sa0NBQWtDLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUE2QnBFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxrQkFBa0I7SUEzQjNEOztRQThCVyxlQUFVLEdBQVcsa0JBQWtCLENBQUM7UUFDeEMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFZM0IsV0FBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUErQzVCLENBQUM7SUEzQ0MsSUFBSSxTQUFTO1FBQ1gsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNO1FBQ0osS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQztZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFFdkUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtnQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7d0JBRUUsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMsIFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IGdyaWRMYXlvdXQsIGdyaWRTaXplIH0gZnJvbSAnLi4vY29tbW9uL2dyaWQtbGF5b3V0LmhlbHBlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtbnVtYmVyLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtY2hhcnRzLWNoYXJ0IFt2aWV3XT1cIlt3aWR0aCwgaGVpZ2h0XVwiIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiPlxuICAgICAgPHN2ZzpnIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBjbGFzcz1cIm51bWJlci1jYXJkIGNoYXJ0XCIgW2NsYXNzLmNsaWNrYWJsZV09XCJjbGlja2FibGVcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1jYXJkLXNlcmllc1xuICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICBbY2FyZENvbG9yXT1cImNhcmRDb2xvclwiXG4gICAgICAgICAgW2JhbmRDb2xvcl09XCJiYW5kQ29sb3JcIlxuICAgICAgICAgIFt0ZXh0Q29sb3JdPVwidGV4dENvbG9yXCJcbiAgICAgICAgICBbZW1wdHlDb2xvcl09XCJlbXB0eUNvbG9yXCJcbiAgICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbaW5uZXJQYWRkaW5nXT1cImlubmVyUGFkZGluZ1wiXG4gICAgICAgICAgW3ZhbHVlRm9ybWF0dGluZ109XCJ2YWx1ZUZvcm1hdHRpbmdcIlxuICAgICAgICAgIFtsYWJlbEZvcm1hdHRpbmddPVwibGFiZWxGb3JtYXR0aW5nXCJcbiAgICAgICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJywgJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FyZENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhbmRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBlbXB0eUNvbG9yOiBzdHJpbmcgPSAncmdiYSgwLCAwLCAwLCAwKSc7XG4gIEBJbnB1dCgpIGlubmVyUGFkZGluZyA9IDE1O1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGxhYmVsRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSBkZXNpZ25hdGVkVG90YWw6IG51bWJlcjtcblxuICBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgZGF0YTogYW55W107XG4gIHNsb3RzOiBhbnlbXTtcbiAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIGRvbWFpbjogYW55W107XG4gIG1hcmdpbiA9IFsxMCwgMTAsIDEwLCAxMF07XG5cbiAgYmFja2dyb3VuZENhcmRzOiBhbnlbXTtcblxuICBnZXQgY2xpY2thYmxlKCkge1xuICAgIHJldHVybiAhIXRoaXMuc2VsZWN0Lm9ic2VydmVycy5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpblxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtYXREYXRlcygpO1xuXG4gICAgdGhpcy5kb21haW4gPSB0aGlzLmdldERvbWFpbigpO1xuXG4gICAgdGhpcy5zZXRDb2xvcnMoKTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLmRpbXMueE9mZnNldH0gLCAke3RoaXMubWFyZ2luWzBdfSlgO1xuXG4gICAgY29uc3Qgc2l6ZSA9IGdyaWRTaXplKHRoaXMuZGltcywgdGhpcy5yZXN1bHRzLmxlbmd0aCwgMTUwKTtcbiAgICBjb25zdCBOID0gc2l6ZVswXSAqIHNpemVbMV07XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bHRzLnNsaWNlKCk7XG5cbiAgICB3aGlsZSAoZGF0YS5sZW5ndGggPCBOKSB7XG4gICAgICBkYXRhLnB1c2goeyB2YWx1ZTogbnVsbCB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBncmlkTGF5b3V0KHRoaXMuZGltcywgZGF0YSwgMTUwLCB0aGlzLmRlc2lnbmF0ZWRUb3RhbCk7XG4gIH1cblxuICBnZXREb21haW4oKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMubWFwKGQgPT4gZC5sYWJlbCk7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JzID0gbmV3IENvbG9ySGVscGVyKHRoaXMuc2NoZW1lLCAnb3JkaW5hbCcsIHRoaXMuZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XG4gIH1cbn1cbiJdfQ==