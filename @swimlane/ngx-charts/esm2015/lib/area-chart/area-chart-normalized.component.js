import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { scaleLinear, scalePoint, scaleTime } from 'd3-scale';
import { curveLinear } from 'd3-shape';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { id } from '../utils/id';
import { getUniqueXDomainValues, getScaleType } from '../common/domain.helper';
export class AreaChartNormalizedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        for (let i = 0; i < this.xSet.length; i++) {
            const val = this.xSet[i];
            let d0 = 0;
            let total = 0;
            for (const group of this.results) {
                const d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    total += d.value;
                }
            }
            for (const group of this.results) {
                let d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    d.d0 = d0;
                    d.d1 = d0 + d.value;
                    d0 += d.value;
                }
                else {
                    d = {
                        name: val,
                        value: 0,
                        d0,
                        d1: d0
                    };
                    group.series.push(d);
                }
                if (total > 0) {
                    d.d0 = (d.d0 * 100) / total;
                    d.d1 = (d.d1 * 100) / total;
                }
                else {
                    d.d0 = 0;
                    d.d1 = 0;
                }
            }
        }
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === 'time') {
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        return [0, 100];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime();
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear();
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().padding(0.1);
        }
        scale.range([0, width]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
}
AreaChartNormalizedComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-charts-area-chart-normalized',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [activeEntries]="activeEntries"
              [gradient]="gradient"
              normalized="true"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [showPercentage]="true"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                type="stacked"
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            normalized="true"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            },] }
];
AreaChartNormalizedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    timeline: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    seriesTooltipTemplate: [{ type: ContentChild, args: ['seriesTooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1jaGFydC1ub3JtYWxpemVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hcmVhLWNoYXJ0L2FyZWEtY2hhcnQtbm9ybWFsaXplZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLGtDQUFrQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQTZJL0UsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGtCQUFrQjtJQTNJcEU7O1FBNElXLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUMvQixtQkFBYyxHQUFXLE9BQU8sQ0FBQztRQVNqQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixVQUFLLEdBQVEsV0FBVyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRTFCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQVks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LGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztxQkFFRSxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBRUwsTUFBTTt5QkFDTixNQUFNOzhCQUVOLFlBQVksU0FBQyxpQkFBaUI7b0NBQzlCLFlBQVksU0FBQyx1QkFBdUI7MEJBbU5wQyxZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzY2FsZVBvaW50LCBzY2FsZVRpbWUgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgeyBjdXJ2ZUxpbmVhciB9IGZyb20gJ2QzLXNoYXBlJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMsIFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpZCB9IGZyb20gJy4uL3V0aWxzL2lkJztcbmltcG9ydCB7IGdldFVuaXF1ZVhEb21haW5WYWx1ZXMsIGdldFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi9kb21haW4uaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1hcmVhLWNoYXJ0LW5vcm1hbGl6ZWQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtY2hhcnRzLWNoYXJ0XG4gICAgICBbdmlld109XCJbd2lkdGgsIGhlaWdodF1cIlxuICAgICAgW3Nob3dMZWdlbmRdPVwibGVnZW5kXCJcbiAgICAgIFtsZWdlbmRPcHRpb25zXT1cImxlZ2VuZE9wdGlvbnNcIlxuICAgICAgW2FjdGl2ZUVudHJpZXNdPVwiYWN0aXZlRW50cmllc1wiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIChsZWdlbmRMYWJlbENsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAobGVnZW5kTGFiZWxBY3RpdmF0ZSk9XCJvbkFjdGl2YXRlKCRldmVudClcIlxuICAgICAgKGxlZ2VuZExhYmVsRGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHN2ZzpkZWZzPlxuICAgICAgICA8c3ZnOmNsaXBQYXRoIFthdHRyLmlkXT1cImNsaXBQYXRoSWRcIj5cbiAgICAgICAgICA8c3ZnOnJlY3RcbiAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImRpbXMud2lkdGggKyAxMFwiXG4gICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiZGltcy5oZWlnaHQgKyAxMFwiXG4gICAgICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZSgtNSwgLTUpJ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc6Y2xpcFBhdGg+XG4gICAgICA8L3N2ZzpkZWZzPlxuICAgICAgPHN2ZzpnIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBjbGFzcz1cImFyZWEtY2hhcnQgY2hhcnRcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy14LWF4aXNcbiAgICAgICAgICAqbmdJZj1cInhBeGlzXCJcbiAgICAgICAgICBbeFNjYWxlXT1cInhTY2FsZVwiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW3Nob3dHcmlkTGluZXNdPVwic2hvd0dyaWRMaW5lc1wiXG4gICAgICAgICAgW3Nob3dMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXG4gICAgICAgICAgW2xhYmVsVGV4dF09XCJ4QXhpc0xhYmVsXCJcbiAgICAgICAgICBbdHJpbVRpY2tzXT1cInRyaW1YQXhpc1RpY2tzXCJcbiAgICAgICAgICBbcm90YXRlVGlja3NdPVwicm90YXRlWEF4aXNUaWNrc1wiXG4gICAgICAgICAgW21heFRpY2tMZW5ndGhdPVwibWF4WEF4aXNUaWNrTGVuZ3RoXCJcbiAgICAgICAgICBbdGlja0Zvcm1hdHRpbmddPVwieEF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW3RpY2tzXT1cInhBeGlzVGlja3NcIlxuICAgICAgICAgIChkaW1lbnNpb25zQ2hhbmdlZCk9XCJ1cGRhdGVYQXhpc0hlaWdodCgkZXZlbnQpXCJcbiAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMteS1heGlzXG4gICAgICAgICAgKm5nSWY9XCJ5QXhpc1wiXG4gICAgICAgICAgW3lTY2FsZV09XCJ5U2NhbGVcIlxuICAgICAgICAgIFtkaW1zXT1cImRpbXNcIlxuICAgICAgICAgIFtzaG93R3JpZExpbmVzXT1cInNob3dHcmlkTGluZXNcIlxuICAgICAgICAgIFtzaG93TGFiZWxdPVwic2hvd1lBeGlzTGFiZWxcIlxuICAgICAgICAgIFtsYWJlbFRleHRdPVwieUF4aXNMYWJlbFwiXG4gICAgICAgICAgW3RyaW1UaWNrc109XCJ0cmltWUF4aXNUaWNrc1wiXG4gICAgICAgICAgW21heFRpY2tMZW5ndGhdPVwibWF4WUF4aXNUaWNrTGVuZ3RoXCJcbiAgICAgICAgICBbdGlja0Zvcm1hdHRpbmddPVwieUF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW3RpY2tzXT1cInlBeGlzVGlja3NcIlxuICAgICAgICAgIChkaW1lbnNpb25zQ2hhbmdlZCk9XCJ1cGRhdGVZQXhpc1dpZHRoKCRldmVudClcIlxuICAgICAgICA+PC9zdmc6Zz5cbiAgICAgICAgPHN2ZzpnIFthdHRyLmNsaXAtcGF0aF09XCJjbGlwUGF0aFwiPlxuICAgICAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgc2VyaWVzIG9mIHJlc3VsdHM7IHRyYWNrQnk6IHRyYWNrQnlcIj5cbiAgICAgICAgICAgIDxzdmc6Z1xuICAgICAgICAgICAgICBuZ3gtY2hhcnRzLWFyZWEtc2VyaWVzXG4gICAgICAgICAgICAgIFt4U2NhbGVdPVwieFNjYWxlXCJcbiAgICAgICAgICAgICAgW3lTY2FsZV09XCJ5U2NhbGVcIlxuICAgICAgICAgICAgICBbY29sb3JzXT1cImNvbG9yc1wiXG4gICAgICAgICAgICAgIFtkYXRhXT1cInNlcmllc1wiXG4gICAgICAgICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgICAgICAgW2FjdGl2ZUVudHJpZXNdPVwiYWN0aXZlRW50cmllc1wiXG4gICAgICAgICAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgW2N1cnZlXT1cImN1cnZlXCJcbiAgICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnOmc+XG5cbiAgICAgICAgICA8c3ZnOmcgKm5nSWY9XCIhdG9vbHRpcERpc2FibGVkXCIgKG1vdXNlbGVhdmUpPVwiaGlkZUNpcmNsZXMoKVwiPlxuICAgICAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgICAgIG5neC1jaGFydHMtdG9vbHRpcC1hcmVhXG4gICAgICAgICAgICAgIFtkaW1zXT1cImRpbXNcIlxuICAgICAgICAgICAgICBbeFNldF09XCJ4U2V0XCJcbiAgICAgICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgICAgICBbeVNjYWxlXT1cInlTY2FsZVwiXG4gICAgICAgICAgICAgIFtyZXN1bHRzXT1cInJlc3VsdHNcIlxuICAgICAgICAgICAgICBbY29sb3JzXT1cImNvbG9yc1wiXG4gICAgICAgICAgICAgIFtzaG93UGVyY2VudGFnZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInNlcmllc1Rvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIChob3Zlcik9XCJ1cGRhdGVIb3ZlcmVkVmVydGljYWwoJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHNlcmllcyBvZiByZXN1bHRzXCI+XG4gICAgICAgICAgICAgIDxzdmc6Z1xuICAgICAgICAgICAgICAgIG5neC1jaGFydHMtY2lyY2xlLXNlcmllc1xuICAgICAgICAgICAgICAgIHR5cGU9XCJzdGFja2VkXCJcbiAgICAgICAgICAgICAgICBbeFNjYWxlXT1cInhTY2FsZVwiXG4gICAgICAgICAgICAgICAgW3lTY2FsZV09XCJ5U2NhbGVcIlxuICAgICAgICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICAgICAgICBbYWN0aXZlRW50cmllc109XCJhY3RpdmVFbnRyaWVzXCJcbiAgICAgICAgICAgICAgICBbZGF0YV09XCJzZXJpZXNcIlxuICAgICAgICAgICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgICAgICAgICBbdmlzaWJsZVZhbHVlXT1cImhvdmVyZWRWZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50LCBzZXJpZXMpXCJcbiAgICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2ZzpnPlxuICAgICAgICAgIDwvc3ZnOmc+XG4gICAgICAgIDwvc3ZnOmc+XG4gICAgICA8L3N2ZzpnPlxuICAgICAgPHN2ZzpnXG4gICAgICAgIG5neC1jaGFydHMtdGltZWxpbmVcbiAgICAgICAgKm5nSWY9XCJ0aW1lbGluZSAmJiBzY2FsZVR5cGUgIT0gJ29yZGluYWwnXCJcbiAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInRpbWVsaW5lVHJhbnNmb3JtXCJcbiAgICAgICAgW3Jlc3VsdHNdPVwicmVzdWx0c1wiXG4gICAgICAgIFt2aWV3XT1cIlt0aW1lbGluZVdpZHRoLCBoZWlnaHRdXCJcbiAgICAgICAgW2hlaWdodF09XCJ0aW1lbGluZUhlaWdodFwiXG4gICAgICAgIFtzY2hlbWVdPVwic2NoZW1lXCJcbiAgICAgICAgW2N1c3RvbUNvbG9yc109XCJjdXN0b21Db2xvcnNcIlxuICAgICAgICBbbGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgKG9uRG9tYWluQ2hhbmdlKT1cInVwZGF0ZURvbWFpbigkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPHN2ZzpnICpuZ0Zvcj1cImxldCBzZXJpZXMgb2YgcmVzdWx0czsgdHJhY2tCeTogdHJhY2tCeVwiPlxuICAgICAgICAgIDxzdmc6Z1xuICAgICAgICAgICAgbmd4LWNoYXJ0cy1hcmVhLXNlcmllc1xuICAgICAgICAgICAgW3hTY2FsZV09XCJ0aW1lbGluZVhTY2FsZVwiXG4gICAgICAgICAgICBbeVNjYWxlXT1cInRpbWVsaW5lWVNjYWxlXCJcbiAgICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICAgIFtkYXRhXT1cInNlcmllc1wiXG4gICAgICAgICAgICBbc2NhbGVUeXBlXT1cInNjYWxlVHlwZVwiXG4gICAgICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgbm9ybWFsaXplZD1cInRydWVcIlxuICAgICAgICAgICAgW2N1cnZlXT1cImN1cnZlXCJcbiAgICAgICAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnOmc+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFyZWFDaGFydE5vcm1hbGl6ZWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBsZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGVnZW5kVGl0bGU6IHN0cmluZyA9ICdMZWdlbmQnO1xuICBASW5wdXQoKSBsZWdlbmRQb3NpdGlvbjogc3RyaW5nID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgeEF4aXM7XG4gIEBJbnB1dCgpIHlBeGlzO1xuICBASW5wdXQoKSBzaG93WEF4aXNMYWJlbDtcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWw7XG4gIEBJbnB1dCgpIHhBeGlzTGFiZWw7XG4gIEBJbnB1dCgpIHlBeGlzTGFiZWw7XG4gIEBJbnB1dCgpIHRpbWVsaW5lO1xuICBASW5wdXQoKSBncmFkaWVudDtcbiAgQElucHV0KCkgc2hvd0dyaWRMaW5lczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGN1cnZlOiBhbnkgPSBjdXJ2ZUxpbmVhcjtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgc2NoZW1lVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSB0cmltWEF4aXNUaWNrczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHRyaW1ZQXhpc1RpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcm90YXRlWEF4aXNUaWNrczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG1heFhBeGlzVGlja0xlbmd0aDogbnVtYmVyID0gMTY7XG4gIEBJbnB1dCgpIG1heFlBeGlzVGlja0xlbmd0aDogbnVtYmVyID0gMTY7XG4gIEBJbnB1dCgpIHhBeGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgeUF4aXNUaWNrRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSB4QXhpc1RpY2tzOiBhbnlbXTtcbiAgQElucHV0KCkgeUF4aXNUaWNrczogYW55W107XG4gIEBJbnB1dCgpIHJvdW5kRG9tYWluczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFRlbXBsYXRlJykgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKCdzZXJpZXNUb29sdGlwVGVtcGxhdGUnKSBzZXJpZXNUb29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gIHNjYWxlVHlwZTogc3RyaW5nO1xuICB4RG9tYWluOiBhbnlbXTtcbiAgeFNldDogYW55W107IC8vIHRoZSBzZXQgb2YgYWxsIHZhbHVlcyBvbiB0aGUgWCBBeGlzXG4gIHlEb21haW46IGFueVtdO1xuICBzZXJpZXNEb21haW46IGFueTtcbiAgeFNjYWxlOiBhbnk7XG4gIHlTY2FsZTogYW55O1xuICB0cmFuc2Zvcm06IHN0cmluZztcbiAgY2xpcFBhdGhJZDogc3RyaW5nO1xuICBjbGlwUGF0aDogc3RyaW5nO1xuICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBtYXJnaW4gPSBbMTAsIDIwLCAxMCwgMjBdO1xuICB0b29sdGlwQXJlYXM6IGFueVtdO1xuICBob3ZlcmVkVmVydGljYWw6IGFueTsgLy8gdGhlIHZhbHVlIG9mIHRoZSB4IGF4aXMgdGhhdCBpcyBob3ZlcmVkIG92ZXJcbiAgeEF4aXNIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHlBeGlzV2lkdGg6IG51bWJlciA9IDA7XG4gIGZpbHRlcmVkRG9tYWluOiBhbnk7XG4gIGxlZ2VuZE9wdGlvbnM6IGFueTtcblxuICB0aW1lbGluZVdpZHRoOiBhbnk7XG4gIHRpbWVsaW5lSGVpZ2h0OiBudW1iZXIgPSA1MDtcbiAgdGltZWxpbmVYU2NhbGU6IGFueTtcbiAgdGltZWxpbmVZU2NhbGU6IGFueTtcbiAgdGltZWxpbmVYRG9tYWluOiBhbnk7XG4gIHRpbWVsaW5lVHJhbnNmb3JtOiBhbnk7XG4gIHRpbWVsaW5lUGFkZGluZzogbnVtYmVyID0gMTA7XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kaW1zID0gY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMoe1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbWFyZ2luczogdGhpcy5tYXJnaW4sXG4gICAgICBzaG93WEF4aXM6IHRoaXMueEF4aXMsXG4gICAgICBzaG93WUF4aXM6IHRoaXMueUF4aXMsXG4gICAgICB4QXhpc0hlaWdodDogdGhpcy54QXhpc0hlaWdodCxcbiAgICAgIHlBeGlzV2lkdGg6IHRoaXMueUF4aXNXaWR0aCxcbiAgICAgIHNob3dYTGFiZWw6IHRoaXMuc2hvd1hBeGlzTGFiZWwsXG4gICAgICBzaG93WUxhYmVsOiB0aGlzLnNob3dZQXhpc0xhYmVsLFxuICAgICAgc2hvd0xlZ2VuZDogdGhpcy5sZWdlbmQsXG4gICAgICBsZWdlbmRUeXBlOiB0aGlzLnNjaGVtZVR5cGUsXG4gICAgICBsZWdlbmRQb3NpdGlvbjogdGhpcy5sZWdlbmRQb3NpdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHRoaXMuZGltcy5oZWlnaHQgLT0gdGhpcy50aW1lbGluZUhlaWdodCArIHRoaXMubWFyZ2luWzJdICsgdGhpcy50aW1lbGluZVBhZGRpbmc7XG4gICAgfVxuXG4gICAgdGhpcy54RG9tYWluID0gdGhpcy5nZXRYRG9tYWluKCk7XG4gICAgaWYgKHRoaXMuZmlsdGVyZWREb21haW4pIHtcbiAgICAgIHRoaXMueERvbWFpbiA9IHRoaXMuZmlsdGVyZWREb21haW47XG4gICAgfVxuXG4gICAgdGhpcy55RG9tYWluID0gdGhpcy5nZXRZRG9tYWluKCk7XG4gICAgdGhpcy5zZXJpZXNEb21haW4gPSB0aGlzLmdldFNlcmllc0RvbWFpbigpO1xuXG4gICAgdGhpcy54U2NhbGUgPSB0aGlzLmdldFhTY2FsZSh0aGlzLnhEb21haW4sIHRoaXMuZGltcy53aWR0aCk7XG4gICAgdGhpcy55U2NhbGUgPSB0aGlzLmdldFlTY2FsZSh0aGlzLnlEb21haW4sIHRoaXMuZGltcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnhTZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMueFNldFtpXTtcbiAgICAgIGxldCBkMCA9IDA7XG5cbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMucmVzdWx0cykge1xuICAgICAgICBjb25zdCBkID0gZ3JvdXAuc2VyaWVzLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgbGV0IGEgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgbGV0IGIgPSB2YWw7XG4gICAgICAgICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSAndGltZScpIHtcbiAgICAgICAgICAgIGEgPSBhLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGIgPSBiLnZhbHVlT2YoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZCkge1xuICAgICAgICAgIHRvdGFsICs9IGQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBncm91cCBvZiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgICAgbGV0IGQgPSBncm91cC5zZXJpZXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICBsZXQgYSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICBsZXQgYiA9IHZhbDtcbiAgICAgICAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICAgICAgYSA9IGEudmFsdWVPZigpO1xuICAgICAgICAgICAgYiA9IGIudmFsdWVPZigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICBkLmQwID0gZDA7XG4gICAgICAgICAgZC5kMSA9IGQwICsgZC52YWx1ZTtcbiAgICAgICAgICBkMCArPSBkLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQgPSB7XG4gICAgICAgICAgICBuYW1lOiB2YWwsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGQwLFxuICAgICAgICAgICAgZDE6IGQwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBncm91cC5zZXJpZXMucHVzaChkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3RhbCA+IDApIHtcbiAgICAgICAgICBkLmQwID0gKGQuZDAgKiAxMDApIC8gdG90YWw7XG4gICAgICAgICAgZC5kMSA9IChkLmQxICogMTAwKSAvIHRvdGFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQuZDAgPSAwO1xuICAgICAgICAgIGQuZDEgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaW1lbGluZSgpO1xuXG4gICAgdGhpcy5zZXRDb2xvcnMoKTtcbiAgICB0aGlzLmxlZ2VuZE9wdGlvbnMgPSB0aGlzLmdldExlZ2VuZE9wdGlvbnMoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMuZGltcy54T2Zmc2V0fSAsICR7dGhpcy5tYXJnaW5bMF19KWA7XG5cbiAgICB0aGlzLmNsaXBQYXRoSWQgPSAnY2xpcCcgKyBpZCgpLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5jbGlwUGF0aCA9IGB1cmwoIyR7dGhpcy5jbGlwUGF0aElkfSlgO1xuICB9XG5cbiAgdXBkYXRlVGltZWxpbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHRoaXMudGltZWxpbmVXaWR0aCA9IHRoaXMuZGltcy53aWR0aDtcbiAgICAgIHRoaXMudGltZWxpbmVYRG9tYWluID0gdGhpcy5nZXRYRG9tYWluKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lWFNjYWxlID0gdGhpcy5nZXRYU2NhbGUodGhpcy50aW1lbGluZVhEb21haW4sIHRoaXMudGltZWxpbmVXaWR0aCk7XG4gICAgICB0aGlzLnRpbWVsaW5lWVNjYWxlID0gdGhpcy5nZXRZU2NhbGUodGhpcy55RG9tYWluLCB0aGlzLnRpbWVsaW5lSGVpZ2h0KTtcbiAgICAgIHRoaXMudGltZWxpbmVUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5kaW1zLnhPZmZzZXR9LCAkey10aGlzLm1hcmdpblsyXX0pYDtcbiAgICB9XG4gIH1cblxuICBnZXRYRG9tYWluKCk6IGFueVtdIHtcbiAgICBsZXQgdmFsdWVzID0gZ2V0VW5pcXVlWERvbWFpblZhbHVlcyh0aGlzLnJlc3VsdHMpO1xuXG4gICAgdGhpcy5zY2FsZVR5cGUgPSBnZXRTY2FsZVR5cGUodmFsdWVzKTtcbiAgICBsZXQgZG9tYWluID0gW107XG5cbiAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xuICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udmFsdWVzKTtcbiAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XG4gICAgICBkb21haW4gPSBbbmV3IERhdGUobWluKSwgbmV3IERhdGUobWF4KV07XG4gICAgICB0aGlzLnhTZXQgPSBbLi4udmFsdWVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFEYXRlID0gYS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGJEYXRlID0gYi5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChhRGF0ZSA+IGJEYXRlKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGJEYXRlID4gYURhdGUpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVUeXBlID09PSAnbGluZWFyJykge1xuICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IE51bWJlcih2KSk7XG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xuICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gICAgICAvLyBVc2UgY29tcGFyZSBmdW5jdGlvbiB0byBzb3J0IG51bWJlcnMgbnVtZXJpY2FsbHlcbiAgICAgIHRoaXMueFNldCA9IFsuLi52YWx1ZXNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tYWluID0gdmFsdWVzO1xuICAgICAgdGhpcy54U2V0ID0gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRZRG9tYWluKCk6IGFueVtdIHtcbiAgICByZXR1cm4gWzAsIDEwMF07XG4gIH1cblxuICBnZXRTZXJpZXNEb21haW4oKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMubWFwKGQgPT4gZC5uYW1lKTtcbiAgfVxuXG4gIGdldFhTY2FsZShkb21haW4sIHdpZHRoKTogYW55IHtcbiAgICBsZXQgc2NhbGU7XG5cbiAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xuICAgICAgc2NhbGUgPSBzY2FsZVRpbWUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVUeXBlID09PSAnbGluZWFyJykge1xuICAgICAgc2NhbGUgPSBzY2FsZUxpbmVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICdvcmRpbmFsJykge1xuICAgICAgc2NhbGUgPSBzY2FsZVBvaW50KCkucGFkZGluZygwLjEpO1xuICAgIH1cblxuICAgIHNjYWxlLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihkb21haW4pO1xuXG4gICAgcmV0dXJuIHRoaXMucm91bmREb21haW5zID8gc2NhbGUubmljZSgpIDogc2NhbGU7XG4gIH1cblxuICBnZXRZU2NhbGUoZG9tYWluLCBoZWlnaHQpOiBhbnkge1xuICAgIGNvbnN0IHNjYWxlID0gc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGRvbWFpbik7XG4gICAgcmV0dXJuIHRoaXMucm91bmREb21haW5zID8gc2NhbGUubmljZSgpIDogc2NhbGU7XG4gIH1cblxuICB1cGRhdGVEb21haW4oZG9tYWluKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJlZERvbWFpbiA9IGRvbWFpbjtcbiAgICB0aGlzLnhEb21haW4gPSB0aGlzLmZpbHRlcmVkRG9tYWluO1xuICAgIHRoaXMueFNjYWxlID0gdGhpcy5nZXRYU2NhbGUodGhpcy54RG9tYWluLCB0aGlzLmRpbXMud2lkdGgpO1xuICB9XG5cbiAgdXBkYXRlSG92ZXJlZFZlcnRpY2FsKGl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyZWRWZXJ0aWNhbCA9IGl0ZW0udmFsdWU7XG4gICAgdGhpcy5kZWFjdGl2YXRlQWxsKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgaGlkZUNpcmNsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkVmVydGljYWwgPSBudWxsO1xuICAgIHRoaXMuZGVhY3RpdmF0ZUFsbCgpO1xuICB9XG5cbiAgb25DbGljayhkYXRhLCBzZXJpZXM/KTogdm9pZCB7XG4gICAgaWYgKHNlcmllcykge1xuICAgICAgZGF0YS5zZXJpZXMgPSBzZXJpZXMubmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleCwgaXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG4gIHNldENvbG9ycygpOiB2b2lkIHtcbiAgICBsZXQgZG9tYWluO1xuICAgIGlmICh0aGlzLnNjaGVtZVR5cGUgPT09ICdvcmRpbmFsJykge1xuICAgICAgZG9tYWluID0gdGhpcy5zZXJpZXNEb21haW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMueURvbWFpbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBDb2xvckhlbHBlcih0aGlzLnNjaGVtZSwgdGhpcy5zY2hlbWVUeXBlLCBkb21haW4sIHRoaXMuY3VzdG9tQ29sb3JzKTtcbiAgfVxuXG4gIGdldExlZ2VuZE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHNjYWxlVHlwZTogdGhpcy5zY2hlbWVUeXBlLFxuICAgICAgY29sb3JzOiB1bmRlZmluZWQsXG4gICAgICBkb21haW46IFtdLFxuICAgICAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmxlZ2VuZFBvc2l0aW9uXG4gICAgfTtcbiAgICBpZiAob3B0cy5zY2FsZVR5cGUgPT09ICdvcmRpbmFsJykge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnNlcmllc0RvbWFpbjtcbiAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICBvcHRzLnRpdGxlID0gdGhpcy5sZWdlbmRUaXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnlEb21haW47XG4gICAgICBvcHRzLmNvbG9ycyA9IHRoaXMuY29sb3JzLnNjYWxlO1xuICAgIH1cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHVwZGF0ZVlBeGlzV2lkdGgoeyB3aWR0aCB9KTogdm9pZCB7XG4gICAgdGhpcy55QXhpc1dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVhBeGlzSGVpZ2h0KHsgaGVpZ2h0IH0pOiB2b2lkIHtcbiAgICB0aGlzLnhBeGlzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkFjdGl2YXRlKGl0ZW0pIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZEluZGV4KGQgPT4ge1xuICAgICAgcmV0dXJuIGQubmFtZSA9PT0gaXRlbS5uYW1lICYmIGQudmFsdWUgPT09IGl0ZW0udmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzID0gW2l0ZW0sIC4uLnRoaXMuYWN0aXZlRW50cmllc107XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxuXG4gIG9uRGVhY3RpdmF0ZShpdGVtKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUFsbCgpIHtcbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuYWN0aXZlRW50cmllcykge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogZW50cnksIGVudHJpZXM6IFtdIH0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbXTtcbiAgfVxufVxuIl19