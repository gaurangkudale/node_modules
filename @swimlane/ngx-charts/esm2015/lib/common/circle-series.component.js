import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { id } from '../utils/id';
export class CircleSeriesComponent {
    constructor() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.barVisible = false;
    }
    ngOnInit() {
        this.gradientId = 'grad' + id().toString();
        this.gradientFill = `url(#${this.gradientId})`;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.circle = this.getActiveCircle();
    }
    getActiveCircle() {
        const indexActiveDataPoint = this.data.series.findIndex(d => {
            const label = d.name;
            return label && this.visibleValue && label.toString() === this.visibleValue.toString() && d.value !== undefined;
        });
        if (indexActiveDataPoint === -1) {
            // No valid point is 'active/hovered over' at this moment.
            return undefined;
        }
        return this.mapDataPointToCircle(this.data.series[indexActiveDataPoint], indexActiveDataPoint);
    }
    mapDataPointToCircle(d, i) {
        const seriesName = this.data.name;
        const value = d.value;
        const label = d.name;
        const tooltipLabel = formatLabel(label);
        let cx;
        if (this.scaleType === 'time') {
            cx = this.xScale(label);
        }
        else if (this.scaleType === 'linear') {
            cx = this.xScale(Number(label));
        }
        else {
            cx = this.xScale(label);
        }
        const cy = this.yScale(this.type === 'standard' ? value : d.d1);
        const radius = 5;
        const height = this.yScale.range()[0] - cy;
        const opacity = 1;
        let color;
        if (this.colors.scaleType === 'linear') {
            if (this.type === 'standard') {
                color = this.colors.getColor(value);
            }
            else {
                color = this.colors.getColor(d.d1);
            }
        }
        else {
            color = this.colors.getColor(seriesName);
        }
        const data = Object.assign({}, d, {
            series: seriesName,
            value,
            name: label
        });
        return {
            classNames: [`circle-data-${i}`],
            value,
            label,
            data,
            cx,
            cy,
            radius,
            height,
            tooltipLabel,
            color,
            opacity,
            seriesName,
            gradientStops: this.getGradientStops(color),
            min: d.min,
            max: d.max
        };
    }
    getTooltipText({ tooltipLabel, value, seriesName, min, max }) {
        return `
      <span class="tooltip-label">${escapeLabel(seriesName)} ??? ${escapeLabel(tooltipLabel)}</span>
      <span class="tooltip-val">${value.toLocaleString()}${this.getTooltipMinMaxText(min, max)}</span>
    `;
    }
    getTooltipMinMaxText(min, max) {
        if (min !== undefined || max !== undefined) {
            let result = ' (';
            if (min !== undefined) {
                if (max === undefined) {
                    result += '???';
                }
                result += min.toLocaleString();
                if (max !== undefined) {
                    result += ' - ';
                }
            }
            else if (max !== undefined) {
                result += '???';
            }
            if (max !== undefined) {
                result += max.toLocaleString();
            }
            result += ')';
            return result;
        }
        else {
            return '';
        }
    }
    getGradientStops(color) {
        return [
            {
                offset: 0,
                color,
                opacity: 0.2
            },
            {
                offset: 100,
                color,
                opacity: 1
            }
        ];
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
    activateCircle() {
        this.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle() {
        this.barVisible = false;
        this.circle.opacity = 0;
        this.deactivate.emit({ name: this.data.name });
    }
}
CircleSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-circle-series]',
                template: `
    <svg:g *ngIf="circle">
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          orientation="vertical"
          [name]="gradientId"
          [stops]="circle.gradientStops"
        />
      </defs>
      <svg:rect
        *ngIf="barVisible && type === 'standard'"
        [@animationState]="'active'"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="gradientFill"
        class="tooltip-bar"
      />
      <svg:g
        ngx-charts-circle
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circle.radius"
        [fill]="circle.color"
        [class.active]="isActive({ name: circle.seriesName })"
        [pointerEvents]="circle.value === 0 ? 'none' : 'all'"
        [data]="circle.value"
        [classNames]="circle.classNames"
        (select)="onClick(circle.data)"
        (activate)="activateCircle()"
        (deactivate)="deactivateCircle()"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0
                            }),
                            animate(250, style({ opacity: 1 }))
                        ])
                    ])
                ]
            },] }
];
CircleSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    type: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    visibleValue: [{ type: Input }],
    activeEntries: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NpcmNsZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBR1osdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxhQUFhLENBQUM7QUE2RGpDLE1BQU0sT0FBTyxxQkFBcUI7SUExRGxDO1FBNERXLFNBQUksR0FBRyxVQUFVLENBQUM7UUFPbEIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJMUMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQTRKOUIsQ0FBQztJQXhKQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFN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RSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQXZPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7NkJBQ1gsQ0FBQzs0QkFDRixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNwQyxDQUFDO3FCQUNILENBQUM7aUJBQ0g7YUFDRjs7O21CQUVFLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBRUwsTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmb3JtYXRMYWJlbCwgZXNjYXBlTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWNpcmNsZS1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgKm5nSWY9XCJjaXJjbGVcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXN2Zy1saW5lYXItZ3JhZGllbnRcbiAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICBbbmFtZV09XCJncmFkaWVudElkXCJcbiAgICAgICAgICBbc3RvcHNdPVwiY2lyY2xlLmdyYWRpZW50U3RvcHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kZWZzPlxuICAgICAgPHN2ZzpyZWN0XG4gICAgICAgICpuZ0lmPVwiYmFyVmlzaWJsZSAmJiB0eXBlID09PSAnc3RhbmRhcmQnXCJcbiAgICAgICAgW0BhbmltYXRpb25TdGF0ZV09XCInYWN0aXZlJ1wiXG4gICAgICAgIFthdHRyLnhdPVwiY2lyY2xlLmN4IC0gY2lyY2xlLnJhZGl1c1wiXG4gICAgICAgIFthdHRyLnldPVwiY2lyY2xlLmN5XCJcbiAgICAgICAgW2F0dHIud2lkdGhdPVwiY2lyY2xlLnJhZGl1cyAqIDJcIlxuICAgICAgICBbYXR0ci5oZWlnaHRdPVwiY2lyY2xlLmhlaWdodFwiXG4gICAgICAgIFthdHRyLmZpbGxdPVwiZ3JhZGllbnRGaWxsXCJcbiAgICAgICAgY2xhc3M9XCJ0b29sdGlwLWJhclwiXG4gICAgICAvPlxuICAgICAgPHN2ZzpnXG4gICAgICAgIG5neC1jaGFydHMtY2lyY2xlXG4gICAgICAgIGNsYXNzPVwiY2lyY2xlXCJcbiAgICAgICAgW2N4XT1cImNpcmNsZS5jeFwiXG4gICAgICAgIFtjeV09XCJjaXJjbGUuY3lcIlxuICAgICAgICBbcl09XCJjaXJjbGUucmFkaXVzXCJcbiAgICAgICAgW2ZpbGxdPVwiY2lyY2xlLmNvbG9yXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpc0FjdGl2ZSh7IG5hbWU6IGNpcmNsZS5zZXJpZXNOYW1lIH0pXCJcbiAgICAgICAgW3BvaW50ZXJFdmVudHNdPVwiY2lyY2xlLnZhbHVlID09PSAwID8gJ25vbmUnIDogJ2FsbCdcIlxuICAgICAgICBbZGF0YV09XCJjaXJjbGUudmFsdWVcIlxuICAgICAgICBbY2xhc3NOYW1lc109XCJjaXJjbGUuY2xhc3NOYW1lc1wiXG4gICAgICAgIChzZWxlY3QpPVwib25DbGljayhjaXJjbGUuZGF0YSlcIlxuICAgICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGVDaXJjbGUoKVwiXG4gICAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGVDaXJjbGUoKVwiXG4gICAgICAgIG5neC10b29sdGlwXG4gICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwiJ3RvcCdcIlxuICAgICAgICBbdG9vbHRpcFR5cGVdPVwiJ3Rvb2x0aXAnXCJcbiAgICAgICAgW3Rvb2x0aXBUaXRsZV09XCJ0b29sdGlwVGVtcGxhdGUgPyB1bmRlZmluZWQgOiBnZXRUb29sdGlwVGV4dChjaXJjbGUpXCJcbiAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICBbdG9vbHRpcENvbnRleHRdPVwiY2lyY2xlLmRhdGFcIlxuICAgICAgLz5cbiAgICA8L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgyNTAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIHR5cGUgPSAnc3RhbmRhcmQnO1xuICBASW5wdXQoKSB4U2NhbGU7XG4gIEBJbnB1dCgpIHlTY2FsZTtcbiAgQElucHV0KCkgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgQElucHV0KCkgc2NhbGVUeXBlO1xuICBASW5wdXQoKSB2aXNpYmxlVmFsdWU7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgYXJlYVBhdGg6IGFueTtcbiAgY2lyY2xlOiBhbnk7IC8vIGFjdGl2ZSBjaXJjbGVcbiAgYmFyVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBncmFkaWVudElkOiBzdHJpbmc7XG4gIGdyYWRpZW50RmlsbDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ3JhZGllbnRJZCA9ICdncmFkJyArIGlkKCkudG9TdHJpbmcoKTtcbiAgICB0aGlzLmdyYWRpZW50RmlsbCA9IGB1cmwoIyR7dGhpcy5ncmFkaWVudElkfSlgO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaXJjbGUgPSB0aGlzLmdldEFjdGl2ZUNpcmNsZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ2lyY2xlKCk6IHt9IHtcbiAgICBjb25zdCBpbmRleEFjdGl2ZURhdGFQb2ludCA9IHRoaXMuZGF0YS5zZXJpZXMuZmluZEluZGV4KGQgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkLm5hbWU7XG4gICAgICByZXR1cm4gbGFiZWwgJiYgdGhpcy52aXNpYmxlVmFsdWUgJiYgbGFiZWwudG9TdHJpbmcoKSA9PT0gdGhpcy52aXNpYmxlVmFsdWUudG9TdHJpbmcoKSAmJiBkLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXhBY3RpdmVEYXRhUG9pbnQgPT09IC0xKSB7XG4gICAgICAvLyBObyB2YWxpZCBwb2ludCBpcyAnYWN0aXZlL2hvdmVyZWQgb3ZlcicgYXQgdGhpcyBtb21lbnQuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1hcERhdGFQb2ludFRvQ2lyY2xlKHRoaXMuZGF0YS5zZXJpZXNbaW5kZXhBY3RpdmVEYXRhUG9pbnRdLCBpbmRleEFjdGl2ZURhdGFQb2ludCk7XG4gIH1cblxuICBtYXBEYXRhUG9pbnRUb0NpcmNsZShkOiBhbnksIGk6IG51bWJlcik6IGFueSB7XG4gICAgY29uc3Qgc2VyaWVzTmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xuXG4gICAgY29uc3QgdmFsdWUgPSBkLnZhbHVlO1xuICAgIGNvbnN0IGxhYmVsID0gZC5uYW1lO1xuICAgIGNvbnN0IHRvb2x0aXBMYWJlbCA9IGZvcm1hdExhYmVsKGxhYmVsKTtcblxuICAgIGxldCBjeDtcbiAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09ICd0aW1lJykge1xuICAgICAgY3ggPSB0aGlzLnhTY2FsZShsYWJlbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgIGN4ID0gdGhpcy54U2NhbGUoTnVtYmVyKGxhYmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN4ID0gdGhpcy54U2NhbGUobGFiZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN5ID0gdGhpcy55U2NhbGUodGhpcy50eXBlID09PSAnc3RhbmRhcmQnID8gdmFsdWUgOiBkLmQxKTtcbiAgICBjb25zdCByYWRpdXMgPSA1O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMueVNjYWxlLnJhbmdlKClbMF0gLSBjeTtcbiAgICBjb25zdCBvcGFjaXR5ID0gMTtcblxuICAgIGxldCBjb2xvcjtcbiAgICBpZiAodGhpcy5jb2xvcnMuc2NhbGVUeXBlID09PSAnbGluZWFyJykge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3N0YW5kYXJkJykge1xuICAgICAgICBjb2xvciA9IHRoaXMuY29sb3JzLmdldENvbG9yKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IoZC5kMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3Ioc2VyaWVzTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGQsIHtcbiAgICAgIHNlcmllczogc2VyaWVzTmFtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbmFtZTogbGFiZWxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWVzOiBbYGNpcmNsZS1kYXRhLSR7aX1gXSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBkYXRhLFxuICAgICAgY3gsXG4gICAgICBjeSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGhlaWdodCxcbiAgICAgIHRvb2x0aXBMYWJlbCxcbiAgICAgIGNvbG9yLFxuICAgICAgb3BhY2l0eSxcbiAgICAgIHNlcmllc05hbWUsXG4gICAgICBncmFkaWVudFN0b3BzOiB0aGlzLmdldEdyYWRpZW50U3RvcHMoY29sb3IpLFxuICAgICAgbWluOiBkLm1pbixcbiAgICAgIG1heDogZC5tYXhcbiAgICB9O1xuICB9XG5cbiAgZ2V0VG9vbHRpcFRleHQoeyB0b29sdGlwTGFiZWwsIHZhbHVlLCBzZXJpZXNOYW1lLCBtaW4sIG1heCB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLWxhYmVsXCI+JHtlc2NhcGVMYWJlbChzZXJpZXNOYW1lKX0g4oCiICR7ZXNjYXBlTGFiZWwodG9vbHRpcExhYmVsKX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtdmFsXCI+JHt2YWx1ZS50b0xvY2FsZVN0cmluZygpfSR7dGhpcy5nZXRUb29sdGlwTWluTWF4VGV4dChtaW4sIG1heCl9PC9zcGFuPlxuICAgIGA7XG4gIH1cblxuICBnZXRUb29sdGlwTWluTWF4VGV4dChtaW46IGFueSwgbWF4OiBhbnkpIHtcbiAgICBpZiAobWluICE9PSB1bmRlZmluZWQgfHwgbWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCByZXN1bHQgPSAnICgnO1xuICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdCArPSAn4omlJztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gbWluLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIGlmIChtYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdCArPSAnIC0gJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgKz0gJ+KJpCc7XG4gICAgICB9XG4gICAgICBpZiAobWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ICs9IG1heC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgfVxuICAgICAgcmVzdWx0ICs9ICcpJztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXRHcmFkaWVudFN0b3BzKGNvbG9yKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgb3BhY2l0eTogMC4yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvZmZzZXQ6IDEwMCxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgb25DbGljayhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XG4gICAgICByZXR1cm4gZW50cnkubmFtZSA9PT0gZC5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhY3RpdmF0ZUNpcmNsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmJhclZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7IG5hbWU6IHRoaXMuZGF0YS5uYW1lIH0pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUNpcmNsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmJhclZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNpcmNsZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLmRlYWN0aXZhdGUuZW1pdCh7IG5hbWU6IHRoaXMuZGF0YS5uYW1lIH0pO1xuICB9XG59XG4iXX0=