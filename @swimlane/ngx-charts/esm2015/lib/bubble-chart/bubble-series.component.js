import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel, escapeLabel } from '../common/label.helper';
export class BubbleSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.circles = this.getCircles();
    }
    getCircles() {
        const seriesName = this.data.name;
        return this.data.series
            .map((d, i) => {
            if (typeof d.y !== 'undefined' && typeof d.x !== 'undefined') {
                const y = d.y;
                const x = d.x;
                const r = d.r;
                const radius = this.rScale(r || 1);
                const tooltipLabel = formatLabel(d.name);
                const cx = this.xScaleType === 'linear' ? this.xScale(Number(x)) : this.xScale(x);
                const cy = this.yScaleType === 'linear' ? this.yScale(Number(y)) : this.yScale(y);
                const color = this.colors.scaleType === 'linear' ? this.colors.getColor(r) : this.colors.getColor(seriesName);
                const isActive = !this.activeEntries.length ? true : this.isActive({ name: seriesName });
                const opacity = isActive ? 1 : 0.3;
                const data = Object.assign({}, d, {
                    series: seriesName,
                    name: d.name,
                    value: d.y,
                    x: d.x,
                    radius: d.r
                });
                return {
                    data,
                    x,
                    y,
                    r,
                    classNames: [`circle-data-${i}`],
                    value: y,
                    label: x,
                    cx,
                    cy,
                    radius,
                    tooltipLabel,
                    color,
                    opacity,
                    seriesName,
                    isActive,
                    transform: `translate(${cx},${cy})`
                };
            }
        })
            .filter(circle => circle !== undefined);
    }
    getTooltipText(circle) {
        const hasRadius = typeof circle.r !== 'undefined';
        const hasTooltipLabel = circle.tooltipLabel && circle.tooltipLabel.length;
        const hasSeriesName = circle.seriesName && circle.seriesName.length;
        const radiusValue = hasRadius ? formatLabel(circle.r) : '';
        const xAxisLabel = this.xAxisLabel && this.xAxisLabel !== '' ? `${this.xAxisLabel}:` : '';
        const yAxisLabel = this.yAxisLabel && this.yAxisLabel !== '' ? `${this.yAxisLabel}:` : '';
        const x = formatLabel(circle.x);
        const y = formatLabel(circle.y);
        const name = hasSeriesName && hasTooltipLabel
            ? `${circle.seriesName} ??? ${circle.tooltipLabel}`
            : circle.seriesName + circle.tooltipLabel;
        const tooltipTitle = hasSeriesName || hasTooltipLabel ? `<span class="tooltip-label">${escapeLabel(name)}</span>` : '';
        return `
      ${tooltipTitle}
      <span class="tooltip-label">
        <label>${escapeLabel(xAxisLabel)}</label> ${escapeLabel(x)}<br />
        <label>${escapeLabel(yAxisLabel)}</label> ${escapeLabel(y)}
      </span>
      <span class="tooltip-val">
        ${escapeLabel(radiusValue)}
      </span>
    `;
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isVisible(circle) {
        if (this.activeEntries.length > 0) {
            return this.isActive({ name: circle.seriesName });
        }
        return circle.opacity !== 0;
    }
    activateCircle(circle) {
        circle.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle(circle) {
        circle.barVisible = false;
        this.deactivate.emit({ name: this.data.name });
    }
    trackBy(index, circle) {
        return `${circle.data.series} ${circle.data.name}`;
    }
}
BubbleSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-bubble-series]',
                template: `
    <svg:g *ngFor="let circle of circles; trackBy: trackBy">
      <svg:g [attr.transform]="circle.transform">
        <svg:g
          ngx-charts-circle
          [@animationState]="'active'"
          class="circle"
          [cx]="0"
          [cy]="0"
          [r]="circle.radius"
          [fill]="circle.color"
          [style.opacity]="circle.opacity"
          [class.active]="circle.isActive"
          [pointerEvents]="'all'"
          [data]="circle.value"
          [classNames]="circle.classNames"
          (select)="onClick(circle.data)"
          (activate)="activateCircle(circle)"
          (deactivate)="deactivateCircle(circle)"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipPlacement]="'top'"
          [tooltipType]="'tooltip'"
          [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="circle.data"
        />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0,
                                transform: 'scale(0)'
                            }),
                            animate(250, style({ opacity: 1, transform: 'scale(1)' }))
                        ])
                    ])
                ]
            },] }
];
BubbleSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    rScale: [{ type: Input }],
    xScaleType: [{ type: Input }],
    yScaleType: [{ type: Input }],
    colors: [{ type: Input }],
    visibleValue: [{ type: Input }],
    activeEntries: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvYnViYmxlLWNoYXJ0L2J1YmJsZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBRVosdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBK0NsRSxNQUFNLE9BQU8scUJBQXFCO0lBN0NsQztRQXlEVyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUdoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStINUMsQ0FBQztJQTFIQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLElBQUks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TUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7WUE1TEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2QlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsVUFBVTs2QkFDdEIsQ0FBQzs0QkFDRixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7eUJBQzNELENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGOzs7bUJBRUUsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFFTCxNQUFNO3VCQUNOLE1BQU07eUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRMYWJlbCwgZXNjYXBlTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWJ1YmJsZS1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IGNpcmNsZSBvZiBjaXJjbGVzOyB0cmFja0J5OiB0cmFja0J5XCI+XG4gICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cImNpcmNsZS50cmFuc2Zvcm1cIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1jaXJjbGVcbiAgICAgICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgICAgICBjbGFzcz1cImNpcmNsZVwiXG4gICAgICAgICAgW2N4XT1cIjBcIlxuICAgICAgICAgIFtjeV09XCIwXCJcbiAgICAgICAgICBbcl09XCJjaXJjbGUucmFkaXVzXCJcbiAgICAgICAgICBbZmlsbF09XCJjaXJjbGUuY29sb3JcIlxuICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImNpcmNsZS5vcGFjaXR5XCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImNpcmNsZS5pc0FjdGl2ZVwiXG4gICAgICAgICAgW3BvaW50ZXJFdmVudHNdPVwiJ2FsbCdcIlxuICAgICAgICAgIFtkYXRhXT1cImNpcmNsZS52YWx1ZVwiXG4gICAgICAgICAgW2NsYXNzTmFtZXNdPVwiY2lyY2xlLmNsYXNzTmFtZXNcIlxuICAgICAgICAgIChzZWxlY3QpPVwib25DbGljayhjaXJjbGUuZGF0YSlcIlxuICAgICAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZUNpcmNsZShjaXJjbGUpXCJcbiAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJkZWFjdGl2YXRlQ2lyY2xlKGNpcmNsZSlcIlxuICAgICAgICAgIG5neC10b29sdGlwXG4gICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cIid0b3AnXCJcbiAgICAgICAgICBbdG9vbHRpcFR5cGVdPVwiJ3Rvb2x0aXAnXCJcbiAgICAgICAgICBbdG9vbHRpcFRpdGxlXT1cInRvb2x0aXBUZW1wbGF0ZSA/IHVuZGVmaW5lZCA6IGdldFRvb2x0aXBUZXh0KGNpcmNsZSlcIlxuICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICBbdG9vbHRpcENvbnRleHRdPVwiY2lyY2xlLmRhdGFcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoMjUwLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdWJibGVTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSB4U2NhbGU7XG4gIEBJbnB1dCgpIHlTY2FsZTtcbiAgQElucHV0KCkgclNjYWxlO1xuICBASW5wdXQoKSB4U2NhbGVUeXBlO1xuICBASW5wdXQoKSB5U2NhbGVUeXBlO1xuICBASW5wdXQoKSBjb2xvcnM7XG4gIEBJbnB1dCgpIHZpc2libGVWYWx1ZTtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogYW55W107XG4gIEBJbnB1dCgpIHhBeGlzTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgeUF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgYXJlYVBhdGg6IGFueTtcbiAgY2lyY2xlczogYW55W107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaXJjbGVzID0gdGhpcy5nZXRDaXJjbGVzKCk7XG4gIH1cblxuICBnZXRDaXJjbGVzKCk6IGFueVtdIHtcbiAgICBjb25zdCBzZXJpZXNOYW1lID0gdGhpcy5kYXRhLm5hbWU7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhLnNlcmllc1xuICAgICAgLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGQueSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGQueCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjb25zdCB5ID0gZC55O1xuICAgICAgICAgIGNvbnN0IHggPSBkLng7XG4gICAgICAgICAgY29uc3QgciA9IGQucjtcblxuICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuclNjYWxlKHIgfHwgMSk7XG4gICAgICAgICAgY29uc3QgdG9vbHRpcExhYmVsID0gZm9ybWF0TGFiZWwoZC5uYW1lKTtcblxuICAgICAgICAgIGNvbnN0IGN4ID0gdGhpcy54U2NhbGVUeXBlID09PSAnbGluZWFyJyA/IHRoaXMueFNjYWxlKE51bWJlcih4KSkgOiB0aGlzLnhTY2FsZSh4KTtcbiAgICAgICAgICBjb25zdCBjeSA9IHRoaXMueVNjYWxlVHlwZSA9PT0gJ2xpbmVhcicgPyB0aGlzLnlTY2FsZShOdW1iZXIoeSkpIDogdGhpcy55U2NhbGUoeSk7XG5cbiAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3JzLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicgPyB0aGlzLmNvbG9ycy5nZXRDb2xvcihyKSA6IHRoaXMuY29sb3JzLmdldENvbG9yKHNlcmllc05hbWUpO1xuXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAhdGhpcy5hY3RpdmVFbnRyaWVzLmxlbmd0aCA/IHRydWUgOiB0aGlzLmlzQWN0aXZlKHsgbmFtZTogc2VyaWVzTmFtZSB9KTtcbiAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gaXNBY3RpdmUgPyAxIDogMC4zO1xuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGQsIHtcbiAgICAgICAgICAgIHNlcmllczogc2VyaWVzTmFtZSxcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBkLnksXG4gICAgICAgICAgICB4OiBkLngsXG4gICAgICAgICAgICByYWRpdXM6IGQuclxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHIsXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbYGNpcmNsZS1kYXRhLSR7aX1gXSxcbiAgICAgICAgICAgIHZhbHVlOiB5LFxuICAgICAgICAgICAgbGFiZWw6IHgsXG4gICAgICAgICAgICBjeCxcbiAgICAgICAgICAgIGN5LFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgdG9vbHRpcExhYmVsLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBvcGFjaXR5LFxuICAgICAgICAgICAgc2VyaWVzTmFtZSxcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7Y3h9LCR7Y3l9KWBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihjaXJjbGUgPT4gY2lyY2xlICE9PSB1bmRlZmluZWQpO1xuICB9XG5cbiAgZ2V0VG9vbHRpcFRleHQoY2lyY2xlKTogc3RyaW5nIHtcbiAgICBjb25zdCBoYXNSYWRpdXMgPSB0eXBlb2YgY2lyY2xlLnIgIT09ICd1bmRlZmluZWQnO1xuICAgIGNvbnN0IGhhc1Rvb2x0aXBMYWJlbCA9IGNpcmNsZS50b29sdGlwTGFiZWwgJiYgY2lyY2xlLnRvb2x0aXBMYWJlbC5sZW5ndGg7XG4gICAgY29uc3QgaGFzU2VyaWVzTmFtZSA9IGNpcmNsZS5zZXJpZXNOYW1lICYmIGNpcmNsZS5zZXJpZXNOYW1lLmxlbmd0aDtcblxuICAgIGNvbnN0IHJhZGl1c1ZhbHVlID0gaGFzUmFkaXVzID8gZm9ybWF0TGFiZWwoY2lyY2xlLnIpIDogJyc7XG4gICAgY29uc3QgeEF4aXNMYWJlbCA9IHRoaXMueEF4aXNMYWJlbCAmJiB0aGlzLnhBeGlzTGFiZWwgIT09ICcnID8gYCR7dGhpcy54QXhpc0xhYmVsfTpgIDogJyc7XG4gICAgY29uc3QgeUF4aXNMYWJlbCA9IHRoaXMueUF4aXNMYWJlbCAmJiB0aGlzLnlBeGlzTGFiZWwgIT09ICcnID8gYCR7dGhpcy55QXhpc0xhYmVsfTpgIDogJyc7XG4gICAgY29uc3QgeCA9IGZvcm1hdExhYmVsKGNpcmNsZS54KTtcbiAgICBjb25zdCB5ID0gZm9ybWF0TGFiZWwoY2lyY2xlLnkpO1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgaGFzU2VyaWVzTmFtZSAmJiBoYXNUb29sdGlwTGFiZWxcbiAgICAgICAgPyBgJHtjaXJjbGUuc2VyaWVzTmFtZX0g4oCiICR7Y2lyY2xlLnRvb2x0aXBMYWJlbH1gXG4gICAgICAgIDogY2lyY2xlLnNlcmllc05hbWUgKyBjaXJjbGUudG9vbHRpcExhYmVsO1xuICAgIGNvbnN0IHRvb2x0aXBUaXRsZSA9XG4gICAgICBoYXNTZXJpZXNOYW1lIHx8IGhhc1Rvb2x0aXBMYWJlbCA/IGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke2VzY2FwZUxhYmVsKG5hbWUpfTwvc3Bhbj5gIDogJyc7XG5cbiAgICByZXR1cm4gYFxuICAgICAgJHt0b29sdGlwVGl0bGV9XG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj5cbiAgICAgICAgPGxhYmVsPiR7ZXNjYXBlTGFiZWwoeEF4aXNMYWJlbCl9PC9sYWJlbD4gJHtlc2NhcGVMYWJlbCh4KX08YnIgLz5cbiAgICAgICAgPGxhYmVsPiR7ZXNjYXBlTGFiZWwoeUF4aXNMYWJlbCl9PC9sYWJlbD4gJHtlc2NhcGVMYWJlbCh5KX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj5cbiAgICAgICAgJHtlc2NhcGVMYWJlbChyYWRpdXNWYWx1ZSl9XG4gICAgICA8L3NwYW4+XG4gICAgYDtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBpc0FjdGl2ZShlbnRyeSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hY3RpdmVFbnRyaWVzKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kKGQgPT4ge1xuICAgICAgcmV0dXJuIGVudHJ5Lm5hbWUgPT09IGQubmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNWaXNpYmxlKGNpcmNsZSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFjdGl2ZUVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUoeyBuYW1lOiBjaXJjbGUuc2VyaWVzTmFtZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlLm9wYWNpdHkgIT09IDA7XG4gIH1cblxuICBhY3RpdmF0ZUNpcmNsZShjaXJjbGUpOiB2b2lkIHtcbiAgICBjaXJjbGUuYmFyVmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgbmFtZTogdGhpcy5kYXRhLm5hbWUgfSk7XG4gIH1cblxuICBkZWFjdGl2YXRlQ2lyY2xlKGNpcmNsZSk6IHZvaWQge1xuICAgIGNpcmNsZS5iYXJWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXgsIGNpcmNsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2NpcmNsZS5kYXRhLnNlcmllc30gJHtjaXJjbGUuZGF0YS5uYW1lfWA7XG4gIH1cbn1cbiJdfQ==