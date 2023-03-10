import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { TooltipService } from '../tooltip/tooltip.service';
export class ChartComponent {
    constructor() {
        this.showLegend = false;
        this.animations = true;
        this.legendLabelClick = new EventEmitter();
        this.legendLabelActivate = new EventEmitter();
        this.legendLabelDeactivate = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        let legendColumns = 0;
        if (this.showLegend) {
            this.legendType = this.getLegendType();
            if (!this.legendOptions || this.legendOptions.position === 'right') {
                if (this.legendType === 'scaleLegend') {
                    legendColumns = 1;
                }
                else {
                    legendColumns = 2;
                }
            }
        }
        const chartColumns = 12 - legendColumns;
        this.chartWidth = Math.floor((this.view[0] * chartColumns) / 12.0);
        this.legendWidth =
            !this.legendOptions || this.legendOptions.position === 'right'
                ? Math.floor((this.view[0] * legendColumns) / 12.0)
                : this.chartWidth;
    }
    getLegendType() {
        if (this.legendOptions.scaleType === 'linear') {
            return 'scaleLegend';
        }
        else {
            return 'legend';
        }
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                providers: [TooltipService],
                selector: 'ngx-charts-chart',
                template: `
    <div class="ngx-charts-outer" [style.width.px]="view[0]" [@animationState]="'active'" [@.disabled]="!animations">
      <svg class="ngx-charts" [attr.width]="chartWidth" [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
      <ngx-charts-scale-legend
        *ngIf="showLegend && legendType === 'scaleLegend'"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === 'below'"
        [valueRange]="legendOptions.domain"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
      >
      </ngx-charts-scale-legend>
      <ngx-charts-legend
        *ngIf="showLegend && legendType === 'legend'"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === 'below'"
        [data]="legendOptions.domain"
        [title]="legendOptions.title"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
        [activeEntries]="activeEntries"
        (labelClick)="legendLabelClick.emit($event)"
        (labelActivate)="legendLabelActivate.emit($event)"
        (labelDeactivate)="legendLabelDeactivate.emit($event)"
      >
      </ngx-charts-legend>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [style({ opacity: 0 }), animate('500ms 100ms', style({ opacity: 1 }))])
                    ])
                ]
            },] }
];
ChartComponent.propDecorators = {
    view: [{ type: Input }],
    showLegend: [{ type: Input }],
    legendOptions: [{ type: Input }],
    data: [{ type: Input }],
    legendData: [{ type: Input }],
    legendType: [{ type: Input }],
    colors: [{ type: Input }],
    activeEntries: [{ type: Input }],
    animations: [{ type: Input }],
    legendLabelClick: [{ type: Output }],
    legendLabelActivate: [{ type: Output }],
    legendLabelDeactivate: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9jaGFydHMvY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE0QzVELE1BQU0sT0FBTyxjQUFjO0lBMUMzQjtRQTRDVyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBU25CLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFMUIscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsd0JBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUF3QzFFLENBQUM7SUFsQ0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUNsRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssYUFBYSxFQUFFO29CQUNyQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQjthQUNGO1NBQ0Y7UUFFRCxNQUFNLFlBQVksR0FBRyxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBRXhDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVc7WUFDZCxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssT0FBTztnQkFDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUM3QyxPQUFPLGFBQWEsQ0FBQztTQUN0QjthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDM0IsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdGLENBQUM7aUJBQ0g7YUFDRjs7O21CQUVFLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUdMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUVMLE1BQU07a0NBQ04sTUFBTTtvQ0FDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVG9vbHRpcFNlcnZpY2UgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtUb29sdGlwU2VydmljZV0sXG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5neC1jaGFydHMtb3V0ZXJcIiBbc3R5bGUud2lkdGgucHhdPVwidmlld1swXVwiIFtAYW5pbWF0aW9uU3RhdGVdPVwiJ2FjdGl2ZSdcIiBbQC5kaXNhYmxlZF09XCIhYW5pbWF0aW9uc1wiPlxuICAgICAgPHN2ZyBjbGFzcz1cIm5neC1jaGFydHNcIiBbYXR0ci53aWR0aF09XCJjaGFydFdpZHRoXCIgW2F0dHIuaGVpZ2h0XT1cInZpZXdbMV1cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zdmc+XG4gICAgICA8bmd4LWNoYXJ0cy1zY2FsZS1sZWdlbmRcbiAgICAgICAgKm5nSWY9XCJzaG93TGVnZW5kICYmIGxlZ2VuZFR5cGUgPT09ICdzY2FsZUxlZ2VuZCdcIlxuICAgICAgICBjbGFzcz1cImNoYXJ0LWxlZ2VuZFwiXG4gICAgICAgIFtob3Jpem9udGFsXT1cImxlZ2VuZE9wdGlvbnMgJiYgbGVnZW5kT3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2JlbG93J1wiXG4gICAgICAgIFt2YWx1ZVJhbmdlXT1cImxlZ2VuZE9wdGlvbnMuZG9tYWluXCJcbiAgICAgICAgW2NvbG9yc109XCJsZWdlbmRPcHRpb25zLmNvbG9yc1wiXG4gICAgICAgIFtoZWlnaHRdPVwidmlld1sxXVwiXG4gICAgICAgIFt3aWR0aF09XCJsZWdlbmRXaWR0aFwiXG4gICAgICA+XG4gICAgICA8L25neC1jaGFydHMtc2NhbGUtbGVnZW5kPlxuICAgICAgPG5neC1jaGFydHMtbGVnZW5kXG4gICAgICAgICpuZ0lmPVwic2hvd0xlZ2VuZCAmJiBsZWdlbmRUeXBlID09PSAnbGVnZW5kJ1wiXG4gICAgICAgIGNsYXNzPVwiY2hhcnQtbGVnZW5kXCJcbiAgICAgICAgW2hvcml6b250YWxdPVwibGVnZW5kT3B0aW9ucyAmJiBsZWdlbmRPcHRpb25zLnBvc2l0aW9uID09PSAnYmVsb3cnXCJcbiAgICAgICAgW2RhdGFdPVwibGVnZW5kT3B0aW9ucy5kb21haW5cIlxuICAgICAgICBbdGl0bGVdPVwibGVnZW5kT3B0aW9ucy50aXRsZVwiXG4gICAgICAgIFtjb2xvcnNdPVwibGVnZW5kT3B0aW9ucy5jb2xvcnNcIlxuICAgICAgICBbaGVpZ2h0XT1cInZpZXdbMV1cIlxuICAgICAgICBbd2lkdGhdPVwibGVnZW5kV2lkdGhcIlxuICAgICAgICBbYWN0aXZlRW50cmllc109XCJhY3RpdmVFbnRyaWVzXCJcbiAgICAgICAgKGxhYmVsQ2xpY2spPVwibGVnZW5kTGFiZWxDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAobGFiZWxBY3RpdmF0ZSk9XCJsZWdlbmRMYWJlbEFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChsYWJlbERlYWN0aXZhdGUpPVwibGVnZW5kTGFiZWxEZWFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25neC1jaGFydHMtbGVnZW5kPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW3N0eWxlKHsgb3BhY2l0eTogMCB9KSwgYW5pbWF0ZSgnNTAwbXMgMTAwbXMnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmlldztcbiAgQElucHV0KCkgc2hvd0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWdlbmRPcHRpb25zOiBhbnk7XG5cbiAgLy8gcmVtb3ZlXG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIGxlZ2VuZERhdGE7XG4gIEBJbnB1dCgpIGxlZ2VuZFR5cGU6IGFueTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnk7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgbGVnZW5kTGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsZWdlbmRMYWJlbEFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxlZ2VuZExhYmVsRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2hhcnRXaWR0aDogYW55O1xuICB0aXRsZTogYW55O1xuICBsZWdlbmRXaWR0aDogYW55O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBsZWdlbmRDb2x1bW5zID0gMDtcbiAgICBpZiAodGhpcy5zaG93TGVnZW5kKSB7XG4gICAgICB0aGlzLmxlZ2VuZFR5cGUgPSB0aGlzLmdldExlZ2VuZFR5cGUoKTtcblxuICAgICAgaWYgKCF0aGlzLmxlZ2VuZE9wdGlvbnMgfHwgdGhpcy5sZWdlbmRPcHRpb25zLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZ2VuZFR5cGUgPT09ICdzY2FsZUxlZ2VuZCcpIHtcbiAgICAgICAgICBsZWdlbmRDb2x1bW5zID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWdlbmRDb2x1bW5zID0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoYXJ0Q29sdW1ucyA9IDEyIC0gbGVnZW5kQ29sdW1ucztcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9IE1hdGguZmxvb3IoKHRoaXMudmlld1swXSAqIGNoYXJ0Q29sdW1ucykgLyAxMi4wKTtcbiAgICB0aGlzLmxlZ2VuZFdpZHRoID1cbiAgICAgICF0aGlzLmxlZ2VuZE9wdGlvbnMgfHwgdGhpcy5sZWdlbmRPcHRpb25zLnBvc2l0aW9uID09PSAncmlnaHQnXG4gICAgICAgID8gTWF0aC5mbG9vcigodGhpcy52aWV3WzBdICogbGVnZW5kQ29sdW1ucykgLyAxMi4wKVxuICAgICAgICA6IHRoaXMuY2hhcnRXaWR0aDtcbiAgfVxuXG4gIGdldExlZ2VuZFR5cGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5sZWdlbmRPcHRpb25zLnNjYWxlVHlwZSA9PT0gJ2xpbmVhcicpIHtcbiAgICAgIHJldHVybiAnc2NhbGVMZWdlbmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2xlZ2VuZCc7XG4gICAgfVxuICB9XG59XG4iXX0=