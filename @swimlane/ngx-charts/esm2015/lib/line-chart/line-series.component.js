import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { area, line } from 'd3-shape';
import { id } from '../utils/id';
import { sortLinear, sortByTime, sortByDomain } from '../utils/sort';
export class LineSeriesComponent {
    constructor() {
        this.animations = true;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateGradients();
        const data = this.sortData(this.data.series);
        const lineGen = this.getLineGenerator();
        this.path = lineGen(data) || '';
        const areaGen = this.getAreaGenerator();
        this.areaPath = areaGen(data) || '';
        if (this.hasRange) {
            const range = this.getRangeGenerator();
            this.outerPath = range(data) || '';
        }
        if (this.hasGradient) {
            this.stroke = this.gradientUrl;
            const values = this.data.series.map(d => d.value);
            const max = Math.max(...values);
            const min = Math.min(...values);
            if (max === min) {
                this.stroke = this.colors.getColor(max);
            }
        }
        else {
            this.stroke = this.colors.getColor(this.data.name);
        }
    }
    getLineGenerator() {
        return line()
            .x(d => {
            const label = d.name;
            let value;
            if (this.scaleType === 'time') {
                value = this.xScale(label);
            }
            else if (this.scaleType === 'linear') {
                value = this.xScale(Number(label));
            }
            else {
                value = this.xScale(label);
            }
            return value;
        })
            .y(d => this.yScale(d.value))
            .curve(this.curve);
    }
    getRangeGenerator() {
        return area()
            .x(d => {
            const label = d.name;
            let value;
            if (this.scaleType === 'time') {
                value = this.xScale(label);
            }
            else if (this.scaleType === 'linear') {
                value = this.xScale(Number(label));
            }
            else {
                value = this.xScale(label);
            }
            return value;
        })
            .y0(d => this.yScale(typeof d.min === 'number' ? d.min : d.value))
            .y1(d => this.yScale(typeof d.max === 'number' ? d.max : d.value))
            .curve(this.curve);
    }
    getAreaGenerator() {
        const xProperty = d => {
            const label = d.name;
            return this.xScale(label);
        };
        return area()
            .x(xProperty)
            .y0(() => this.yScale.range()[0])
            .y1(d => this.yScale(d.value))
            .curve(this.curve);
    }
    sortData(data) {
        if (this.scaleType === 'linear') {
            data = sortLinear(data, 'name');
        }
        else if (this.scaleType === 'time') {
            data = sortByTime(data, 'name');
        }
        else {
            data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
        }
        return data;
    }
    updateGradients() {
        if (this.colors.scaleType === 'linear') {
            this.hasGradient = true;
            this.gradientId = 'grad' + id().toString();
            this.gradientUrl = `url(#${this.gradientId})`;
            const values = this.data.series.map(d => d.value);
            const max = Math.max(...values);
            const min = Math.min(...values);
            this.gradientStops = this.colors.getLinearGradientStops(max, min);
            this.areaGradientStops = this.colors.getLinearGradientStops(max);
        }
        else {
            this.hasGradient = false;
            this.gradientStops = undefined;
            this.areaGradientStops = undefined;
        }
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isInactive(entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item === undefined;
    }
}
LineSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-line-series]',
                template: `
    <svg:g>
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          *ngIf="hasGradient"
          orientation="vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:g
        ngx-charts-area
        class="line-highlight"
        [data]="data"
        [path]="areaPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [opacity]="0.25"
        [startOpacity]="0"
        [gradient]="true"
        [stops]="areaGradientStops"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [animations]="animations"
      />
      <svg:g
        ngx-charts-line
        class="line-series"
        [data]="data"
        [path]="path"
        [stroke]="stroke"
        [animations]="animations"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
      />
      <svg:g
        ngx-charts-area
        *ngIf="hasRange"
        class="line-series-range"
        [data]="data"
        [path]="outerPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [opacity]="rangeFillOpacity"
        [animations]="animations"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
LineSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    rangeFillOpacity: [{ type: Input }],
    hasRange: [{ type: Input }],
    animations: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2xpbmUtY2hhcnQvbGluZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVEckUsTUFBTSxPQUFPLG1CQUFtQjtJQXJEaEM7UUErRFcsZUFBVSxHQUFZLElBQUksQ0FBQztJQTJJdEMsQ0FBQztJQS9IQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZ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QyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7WUF6TUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBRUUsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFyZWEsIGxpbmUgfSBmcm9tICdkMy1zaGFwZSc7XG5cbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgc29ydExpbmVhciwgc29ydEJ5VGltZSwgc29ydEJ5RG9tYWluIH0gZnJvbSAnLi4vdXRpbHMvc29ydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1saW5lLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Zz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXN2Zy1saW5lYXItZ3JhZGllbnRcbiAgICAgICAgICAqbmdJZj1cImhhc0dyYWRpZW50XCJcbiAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICBbbmFtZV09XCJncmFkaWVudElkXCJcbiAgICAgICAgICBbc3RvcHNdPVwiZ3JhZGllbnRTdG9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2RlZnM+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy1hcmVhXG4gICAgICAgIGNsYXNzPVwibGluZS1oaWdobGlnaHRcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW3BhdGhdPVwiYXJlYVBhdGhcIlxuICAgICAgICBbZmlsbF09XCJoYXNHcmFkaWVudCA/IGdyYWRpZW50VXJsIDogY29sb3JzLmdldENvbG9yKGRhdGEubmFtZSlcIlxuICAgICAgICBbb3BhY2l0eV09XCIwLjI1XCJcbiAgICAgICAgW3N0YXJ0T3BhY2l0eV09XCIwXCJcbiAgICAgICAgW2dyYWRpZW50XT1cInRydWVcIlxuICAgICAgICBbc3RvcHNdPVwiYXJlYUdyYWRpZW50U3RvcHNcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlzQWN0aXZlKGRhdGEpXCJcbiAgICAgICAgW2NsYXNzLmluYWN0aXZlXT1cImlzSW5hY3RpdmUoZGF0YSlcIlxuICAgICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIC8+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy1saW5lXG4gICAgICAgIGNsYXNzPVwibGluZS1zZXJpZXNcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW3BhdGhdPVwicGF0aFwiXG4gICAgICAgIFtzdHJva2VdPVwic3Ryb2tlXCJcbiAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmUoZGF0YSlcIlxuICAgICAgICBbY2xhc3MuaW5hY3RpdmVdPVwiaXNJbmFjdGl2ZShkYXRhKVwiXG4gICAgICAvPlxuICAgICAgPHN2ZzpnXG4gICAgICAgIG5neC1jaGFydHMtYXJlYVxuICAgICAgICAqbmdJZj1cImhhc1JhbmdlXCJcbiAgICAgICAgY2xhc3M9XCJsaW5lLXNlcmllcy1yYW5nZVwiXG4gICAgICAgIFtkYXRhXT1cImRhdGFcIlxuICAgICAgICBbcGF0aF09XCJvdXRlclBhdGhcIlxuICAgICAgICBbZmlsbF09XCJoYXNHcmFkaWVudCA/IGdyYWRpZW50VXJsIDogY29sb3JzLmdldENvbG9yKGRhdGEubmFtZSlcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImlzQWN0aXZlKGRhdGEpXCJcbiAgICAgICAgW2NsYXNzLmluYWN0aXZlXT1cImlzSW5hY3RpdmUoZGF0YSlcIlxuICAgICAgICBbb3BhY2l0eV09XCJyYW5nZUZpbGxPcGFjaXR5XCJcbiAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAvPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpbmVTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSB4U2NhbGU7XG4gIEBJbnB1dCgpIHlTY2FsZTtcbiAgQElucHV0KCkgY29sb3JzO1xuICBASW5wdXQoKSBzY2FsZVR5cGU7XG4gIEBJbnB1dCgpIGN1cnZlOiBhbnk7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSByYW5nZUZpbGxPcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpIGhhc1JhbmdlOiBib29sZWFuO1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcblxuICBwYXRoOiBzdHJpbmc7XG4gIG91dGVyUGF0aDogc3RyaW5nO1xuICBhcmVhUGF0aDogc3RyaW5nO1xuICBncmFkaWVudElkOiBzdHJpbmc7XG4gIGdyYWRpZW50VXJsOiBzdHJpbmc7XG4gIGhhc0dyYWRpZW50OiBib29sZWFuO1xuICBncmFkaWVudFN0b3BzOiBhbnlbXTtcbiAgYXJlYUdyYWRpZW50U3RvcHM6IGFueVtdO1xuICBzdHJva2U6IGFueTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUdyYWRpZW50cygpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc29ydERhdGEodGhpcy5kYXRhLnNlcmllcyk7XG5cbiAgICBjb25zdCBsaW5lR2VuID0gdGhpcy5nZXRMaW5lR2VuZXJhdG9yKCk7XG4gICAgdGhpcy5wYXRoID0gbGluZUdlbihkYXRhKSB8fCAnJztcblxuICAgIGNvbnN0IGFyZWFHZW4gPSB0aGlzLmdldEFyZWFHZW5lcmF0b3IoKTtcbiAgICB0aGlzLmFyZWFQYXRoID0gYXJlYUdlbihkYXRhKSB8fCAnJztcblxuICAgIGlmICh0aGlzLmhhc1JhbmdlKSB7XG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuZ2V0UmFuZ2VHZW5lcmF0b3IoKTtcbiAgICAgIHRoaXMub3V0ZXJQYXRoID0gcmFuZ2UoZGF0YSkgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzR3JhZGllbnQpIHtcbiAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5ncmFkaWVudFVybDtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZGF0YS5zZXJpZXMubWFwKGQgPT4gZC52YWx1ZSk7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xuICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udmFsdWVzKTtcbiAgICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHRoaXMuY29sb3JzLmdldENvbG9yKG1heCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodGhpcy5kYXRhLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldExpbmVHZW5lcmF0b3IoKTogYW55IHtcbiAgICByZXR1cm4gbGluZTxhbnk+KClcbiAgICAgIC54KGQgPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGQubmFtZTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy54U2NhbGUobGFiZWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVUeXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy54U2NhbGUoTnVtYmVyKGxhYmVsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnhTY2FsZShsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSlcbiAgICAgIC55KGQgPT4gdGhpcy55U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuY3VydmUodGhpcy5jdXJ2ZSk7XG4gIH1cblxuICBnZXRSYW5nZUdlbmVyYXRvcigpOiBhbnkge1xuICAgIHJldHVybiBhcmVhPGFueT4oKVxuICAgICAgLngoZCA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZC5uYW1lO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnhTY2FsZShsYWJlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLnhTY2FsZShOdW1iZXIobGFiZWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMueFNjYWxlKGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KVxuICAgICAgLnkwKGQgPT4gdGhpcy55U2NhbGUodHlwZW9mIGQubWluID09PSAnbnVtYmVyJyA/IGQubWluIDogZC52YWx1ZSkpXG4gICAgICAueTEoZCA9PiB0aGlzLnlTY2FsZSh0eXBlb2YgZC5tYXggPT09ICdudW1iZXInID8gZC5tYXggOiBkLnZhbHVlKSlcbiAgICAgIC5jdXJ2ZSh0aGlzLmN1cnZlKTtcbiAgfVxuXG4gIGdldEFyZWFHZW5lcmF0b3IoKTogYW55IHtcbiAgICBjb25zdCB4UHJvcGVydHkgPSBkID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZC5uYW1lO1xuICAgICAgcmV0dXJuIHRoaXMueFNjYWxlKGxhYmVsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyZWE8YW55PigpXG4gICAgICAueCh4UHJvcGVydHkpXG4gICAgICAueTAoKCkgPT4gdGhpcy55U2NhbGUucmFuZ2UoKVswXSlcbiAgICAgIC55MShkID0+IHRoaXMueVNjYWxlKGQudmFsdWUpKVxuICAgICAgLmN1cnZlKHRoaXMuY3VydmUpO1xuICB9XG5cbiAgc29ydERhdGEoZGF0YSkge1xuICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgIGRhdGEgPSBzb3J0TGluZWFyKGRhdGEsICduYW1lJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICBkYXRhID0gc29ydEJ5VGltZShkYXRhLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gc29ydEJ5RG9tYWluKGRhdGEsICduYW1lJywgJ2FzYycsIHRoaXMueFNjYWxlLmRvbWFpbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZUdyYWRpZW50cygpIHtcbiAgICBpZiAodGhpcy5jb2xvcnMuc2NhbGVUeXBlID09PSAnbGluZWFyJykge1xuICAgICAgdGhpcy5oYXNHcmFkaWVudCA9IHRydWU7XG4gICAgICB0aGlzLmdyYWRpZW50SWQgPSAnZ3JhZCcgKyBpZCgpLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmdyYWRpZW50VXJsID0gYHVybCgjJHt0aGlzLmdyYWRpZW50SWR9KWA7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmRhdGEuc2VyaWVzLm1hcChkID0+IGQudmFsdWUpO1xuICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgICB0aGlzLmdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKG1heCwgbWluKTtcbiAgICAgIHRoaXMuYXJlYUdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzR3JhZGllbnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ3JhZGllbnRTdG9wcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYXJlYUdyYWRpZW50U3RvcHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaXNBY3RpdmUoZW50cnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRW50cmllcykgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZChkID0+IHtcbiAgICAgIHJldHVybiBlbnRyeS5uYW1lID09PSBkLm5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzSW5hY3RpdmUoZW50cnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRW50cmllcyB8fCB0aGlzLmFjdGl2ZUVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kKGQgPT4ge1xuICAgICAgcmV0dXJuIGVudHJ5Lm5hbWUgPT09IGQubmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbSA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=