import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { max } from 'd3-array';
import { arc, pie } from 'd3-shape';
import { formatLabel, escapeLabel } from '../common/label.helper';
export class PieSeriesComponent {
    constructor() {
        this.series = [];
        this.innerRadius = 60;
        this.outerRadius = 80;
        this.trimLabels = true;
        this.maxLabelLength = 10;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dblclick = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        const pieGenerator = pie()
            .value(d => d.value)
            .sort(null);
        const arcData = pieGenerator(this.series);
        this.max = max(arcData, d => {
            return d.value;
        });
        this.data = this.calculateLabelPositions(arcData);
        this.tooltipText = this.tooltipText || this.defaultTooltipText;
    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    outerArc() {
        const factor = 1.5;
        return arc()
            .innerRadius(this.outerRadius * factor)
            .outerRadius(this.outerRadius * factor);
    }
    calculateLabelPositions(pieData) {
        const factor = 1.5;
        const minDistance = 10;
        const labelPositions = pieData;
        labelPositions.forEach(d => {
            d.pos = this.outerArc().centroid(d);
            d.pos[0] = factor * this.outerRadius * (this.midAngle(d) < Math.PI ? 1 : -1);
        });
        for (let i = 0; i < labelPositions.length - 1; i++) {
            const a = labelPositions[i];
            if (!this.labelVisible(a)) {
                continue;
            }
            for (let j = i + 1; j < labelPositions.length; j++) {
                const b = labelPositions[j];
                if (!this.labelVisible(b)) {
                    continue;
                }
                // if they're on the same side
                if (b.pos[0] * a.pos[0] > 0) {
                    // if they're overlapping
                    const o = minDistance - Math.abs(b.pos[1] - a.pos[1]);
                    if (o > 0) {
                        // push the second up or down
                        b.pos[1] += Math.sign(b.pos[0]) * o;
                    }
                }
            }
        }
        return labelPositions;
    }
    labelVisible(myArc) {
        return this.showLabels && myArc.endAngle - myArc.startAngle > Math.PI / 30;
    }
    getTooltipTitle(a) {
        return this.tooltipTemplate ? undefined : this.tooltipText(a);
    }
    labelText(myArc) {
        if (this.labelFormatting) {
            return this.labelFormatting(myArc.data.name);
        }
        return this.label(myArc);
    }
    label(myArc) {
        return formatLabel(myArc.data.name);
    }
    defaultTooltipText(myArc) {
        const label = this.label(myArc);
        const val = formatLabel(myArc.data.value);
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
    color(myArc) {
        return this.colors.getColor(this.label(myArc));
    }
    trackBy(index, item) {
        return item.data.name;
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
}
PieSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-pie-series]',
                template: `
    <svg:g *ngFor="let arc of data; trackBy: trackBy">
      <svg:g
        ngx-charts-pie-label
        *ngIf="labelVisible(arc)"
        [data]="arc"
        [radius]="outerRadius"
        [color]="color(arc)"
        [label]="labelText(arc)"
        [labelTrim]="trimLabels"
        [labelTrimSize]="maxLabelLength"
        [max]="max"
        [value]="arc.value"
        [explodeSlices]="explodeSlices"
        [animations]="animations"
      ></svg:g>
      <svg:g
        ngx-charts-pie-arc
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [gradient]="gradient"
        [data]="arc.data"
        [max]="max"
        [explodeSlices]="explodeSlices"
        [isActive]="isActive(arc.data)"
        [animate]="animations"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        (dblclick)="dblclick.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="getTooltipTitle(arc)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="arc.data"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PieSeriesComponent.propDecorators = {
    colors: [{ type: Input }],
    series: [{ type: Input }],
    dims: [{ type: Input }],
    innerRadius: [{ type: Input }],
    outerRadius: [{ type: Input }],
    explodeSlices: [{ type: Input }],
    showLabels: [{ type: Input }],
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    trimLabels: [{ type: Input }],
    maxLabelLength: [{ type: Input }],
    tooltipText: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    dblclick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvcGllLWNoYXJ0L3BpZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWtEbEUsTUFBTSxPQUFPLGtCQUFrQjtJQWhEL0I7UUFrRFcsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU1qQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF3SDFDLENBQUM7SUFuSEMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBWTthQUNqQyxLQUFLLENB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RUwsTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1heCB9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7IGFyYywgcGllIH0gZnJvbSAnZDMtc2hhcGUnO1xuXG5pbXBvcnQgeyBmb3JtYXRMYWJlbCwgZXNjYXBlTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXBpZS1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IGFyYyBvZiBkYXRhOyB0cmFja0J5OiB0cmFja0J5XCI+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy1waWUtbGFiZWxcbiAgICAgICAgKm5nSWY9XCJsYWJlbFZpc2libGUoYXJjKVwiXG4gICAgICAgIFtkYXRhXT1cImFyY1wiXG4gICAgICAgIFtyYWRpdXNdPVwib3V0ZXJSYWRpdXNcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3IoYXJjKVwiXG4gICAgICAgIFtsYWJlbF09XCJsYWJlbFRleHQoYXJjKVwiXG4gICAgICAgIFtsYWJlbFRyaW1dPVwidHJpbUxhYmVsc1wiXG4gICAgICAgIFtsYWJlbFRyaW1TaXplXT1cIm1heExhYmVsTGVuZ3RoXCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICBbdmFsdWVdPVwiYXJjLnZhbHVlXCJcbiAgICAgICAgW2V4cGxvZGVTbGljZXNdPVwiZXhwbG9kZVNsaWNlc1wiXG4gICAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgPjwvc3ZnOmc+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy1waWUtYXJjXG4gICAgICAgIFtzdGFydEFuZ2xlXT1cImFyYy5zdGFydEFuZ2xlXCJcbiAgICAgICAgW2VuZEFuZ2xlXT1cImFyYy5lbmRBbmdsZVwiXG4gICAgICAgIFtpbm5lclJhZGl1c109XCJpbm5lclJhZGl1c1wiXG4gICAgICAgIFtvdXRlclJhZGl1c109XCJvdXRlclJhZGl1c1wiXG4gICAgICAgIFtmaWxsXT1cImNvbG9yKGFyYylcIlxuICAgICAgICBbdmFsdWVdPVwiYXJjLmRhdGEudmFsdWVcIlxuICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICBbZGF0YV09XCJhcmMuZGF0YVwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW2V4cGxvZGVTbGljZXNdPVwiZXhwbG9kZVNsaWNlc1wiXG4gICAgICAgIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZShhcmMuZGF0YSlcIlxuICAgICAgICBbYW5pbWF0ZV09XCJhbmltYXRpb25zXCJcbiAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgKGRlYWN0aXZhdGUpPVwiZGVhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAoZGJsY2xpY2spPVwiZGJsY2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgbmd4LXRvb2x0aXBcbiAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCIndG9wJ1wiXG4gICAgICAgIFt0b29sdGlwVHlwZV09XCIndG9vbHRpcCdcIlxuICAgICAgICBbdG9vbHRpcFRpdGxlXT1cImdldFRvb2x0aXBUaXRsZShhcmMpXCJcbiAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICBbdG9vbHRpcENvbnRleHRdPVwiYXJjLmRhdGFcIlxuICAgICAgPjwvc3ZnOmc+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGllU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3JzO1xuICBASW5wdXQoKSBzZXJpZXM6IGFueSA9IFtdO1xuICBASW5wdXQoKSBkaW1zO1xuICBASW5wdXQoKSBpbm5lclJhZGl1cyA9IDYwO1xuICBASW5wdXQoKSBvdXRlclJhZGl1cyA9IDgwO1xuICBASW5wdXQoKSBleHBsb2RlU2xpY2VzO1xuICBASW5wdXQoKSBzaG93TGFiZWxzO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogYW55W107XG4gIEBJbnB1dCgpIGxhYmVsRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSB0cmltTGFiZWxzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4TGFiZWxMZW5ndGg6IG51bWJlciA9IDEwO1xuICBASW5wdXQoKSB0b29sdGlwVGV4dDogKG86IGFueSkgPT4gYW55O1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGJsY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbWF4OiBudW1iZXI7XG4gIGRhdGE6IGFueTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBwaWVHZW5lcmF0b3IgPSBwaWU8YW55LCBhbnk+KClcbiAgICAgIC52YWx1ZShkID0+IGQudmFsdWUpXG4gICAgICAuc29ydChudWxsKTtcblxuICAgIGNvbnN0IGFyY0RhdGEgPSBwaWVHZW5lcmF0b3IodGhpcy5zZXJpZXMpO1xuXG4gICAgdGhpcy5tYXggPSBtYXgoYXJjRGF0YSwgZCA9PiB7XG4gICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF0YSA9IHRoaXMuY2FsY3VsYXRlTGFiZWxQb3NpdGlvbnMoYXJjRGF0YSk7XG4gICAgdGhpcy50b29sdGlwVGV4dCA9IHRoaXMudG9vbHRpcFRleHQgfHwgdGhpcy5kZWZhdWx0VG9vbHRpcFRleHQ7XG4gIH1cblxuICBtaWRBbmdsZShkKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZC5zdGFydEFuZ2xlICsgKGQuZW5kQW5nbGUgLSBkLnN0YXJ0QW5nbGUpIC8gMjtcbiAgfVxuXG4gIG91dGVyQXJjKCk6IGFueSB7XG4gICAgY29uc3QgZmFjdG9yID0gMS41O1xuXG4gICAgcmV0dXJuIGFyYygpXG4gICAgICAuaW5uZXJSYWRpdXModGhpcy5vdXRlclJhZGl1cyAqIGZhY3RvcilcbiAgICAgIC5vdXRlclJhZGl1cyh0aGlzLm91dGVyUmFkaXVzICogZmFjdG9yKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUxhYmVsUG9zaXRpb25zKHBpZURhdGEpOiBhbnkge1xuICAgIGNvbnN0IGZhY3RvciA9IDEuNTtcbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwO1xuICAgIGNvbnN0IGxhYmVsUG9zaXRpb25zID0gcGllRGF0YTtcblxuICAgIGxhYmVsUG9zaXRpb25zLmZvckVhY2goZCA9PiB7XG4gICAgICBkLnBvcyA9IHRoaXMub3V0ZXJBcmMoKS5jZW50cm9pZChkKTtcbiAgICAgIGQucG9zWzBdID0gZmFjdG9yICogdGhpcy5vdXRlclJhZGl1cyAqICh0aGlzLm1pZEFuZ2xlKGQpIDwgTWF0aC5QSSA/IDEgOiAtMSk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsUG9zaXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGxhYmVsUG9zaXRpb25zW2ldO1xuICAgICAgaWYgKCF0aGlzLmxhYmVsVmlzaWJsZShhKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbGFiZWxQb3NpdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgYiA9IGxhYmVsUG9zaXRpb25zW2pdO1xuICAgICAgICBpZiAoIXRoaXMubGFiZWxWaXNpYmxlKGIpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhleSdyZSBvbiB0aGUgc2FtZSBzaWRlXG4gICAgICAgIGlmIChiLnBvc1swXSAqIGEucG9zWzBdID4gMCkge1xuICAgICAgICAgIC8vIGlmIHRoZXkncmUgb3ZlcmxhcHBpbmdcbiAgICAgICAgICBjb25zdCBvID0gbWluRGlzdGFuY2UgLSBNYXRoLmFicyhiLnBvc1sxXSAtIGEucG9zWzFdKTtcbiAgICAgICAgICBpZiAobyA+IDApIHtcbiAgICAgICAgICAgIC8vIHB1c2ggdGhlIHNlY29uZCB1cCBvciBkb3duXG4gICAgICAgICAgICBiLnBvc1sxXSArPSBNYXRoLnNpZ24oYi5wb3NbMF0pICogbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxQb3NpdGlvbnM7XG4gIH1cblxuICBsYWJlbFZpc2libGUobXlBcmMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93TGFiZWxzICYmIG15QXJjLmVuZEFuZ2xlIC0gbXlBcmMuc3RhcnRBbmdsZSA+IE1hdGguUEkgLyAzMDtcbiAgfVxuXG4gIGdldFRvb2x0aXBUaXRsZShhKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcFRlbXBsYXRlID8gdW5kZWZpbmVkIDogdGhpcy50b29sdGlwVGV4dChhKTtcbiAgfVxuXG4gIGxhYmVsVGV4dChteUFyYyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubGFiZWxGb3JtYXR0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbEZvcm1hdHRpbmcobXlBcmMuZGF0YS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFiZWwobXlBcmMpO1xuICB9XG5cbiAgbGFiZWwobXlBcmMpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRMYWJlbChteUFyYy5kYXRhLm5hbWUpO1xuICB9XG5cbiAgZGVmYXVsdFRvb2x0aXBUZXh0KG15QXJjKTogc3RyaW5nIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwobXlBcmMpO1xuICAgIGNvbnN0IHZhbCA9IGZvcm1hdExhYmVsKG15QXJjLmRhdGEudmFsdWUpO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7ZXNjYXBlTGFiZWwobGFiZWwpfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj4ke3ZhbH08L3NwYW4+XG4gICAgYDtcbiAgfVxuXG4gIGNvbG9yKG15QXJjKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodGhpcy5sYWJlbChteUFyYykpO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleCwgaXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0uZGF0YS5uYW1lO1xuICB9XG5cbiAgb25DbGljayhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XG4gICAgICByZXR1cm4gZW50cnkubmFtZSA9PT0gZC5uYW1lICYmIGVudHJ5LnNlcmllcyA9PT0gZC5zZXJpZXM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19