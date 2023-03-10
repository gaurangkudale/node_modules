import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { formatLabel } from '../label.helper';
export class LegendComponent {
    constructor(cd) {
        this.cd = cd;
        this.horizontal = false;
        this.labelClick = new EventEmitter();
        this.labelActivate = new EventEmitter();
        this.labelDeactivate = new EventEmitter();
        this.legendEntries = [];
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.cd.markForCheck();
        this.legendEntries = this.getLegendEntries();
    }
    getLegendEntries() {
        const items = [];
        for (const label of this.data) {
            const formattedLabel = formatLabel(label);
            const idx = items.findIndex(i => {
                return i.label === formattedLabel;
            });
            if (idx === -1) {
                items.push({
                    label,
                    formattedLabel,
                    color: this.colors.getColor(label)
                });
            }
        }
        return items;
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.label === d.name;
        });
        return item !== undefined;
    }
    activate(item) {
        this.labelActivate.emit(item);
    }
    deactivate(item) {
        this.labelDeactivate.emit(item);
    }
    trackBy(index, item) {
        return item.label;
    }
}
LegendComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-charts-legend',
                template: `
    <div [style.width.px]="width">
      <header class="legend-title" *ngIf="title?.length > 0">
        <span class="legend-title-text">{{ title }}</span>
      </header>
      <div class="legend-wrap">
        <ul class="legend-labels" [class.horizontal-legend]="horizontal" [style.max-height.px]="height - 45">
          <li *ngFor="let entry of legendEntries; trackBy: trackBy" class="legend-label">
            <ngx-charts-legend-entry
              [label]="entry.label"
              [formattedLabel]="entry.formattedLabel"
              [color]="entry.color"
              [isActive]="isActive(entry)"
              (select)="labelClick.emit($event)"
              (activate)="activate($event)"
              (deactivate)="deactivate($event)"
            >
            </ngx-charts-legend-entry>
          </li>
        </ul>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{font-size:14px;font-weight:700;margin-bottom:5px;margin-left:10px;overflow:hidden;white-space:nowrap}.chart-legend li,.chart-legend ul{list-style:none;margin:0;padding:0}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{background:rgba(0,0,0,.05);border-radius:3px;float:left;line-height:85%;list-style:none;overflow-x:hidden;overflow-y:auto;text-align:left;white-space:nowrap;width:100%}.chart-legend .legend-label{color:#afb7c8;cursor:pointer;font-size:90%;margin:8px}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{border-radius:3px;color:#5b646b;display:inline-block;height:15px;margin-right:5px;width:15px}.chart-legend .legend-label-text{font-size:12px;line-height:15px;vertical-align:top;width:calc(100% - 20px)}.chart-legend .legend-label-text,.chart-legend .legend-title-text{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart-legend .legend-title-text{line-height:16px;vertical-align:bottom}"]
            },] }
];
LegendComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
LegendComponent.propDecorators = {
    data: [{ type: Input }],
    title: [{ type: Input }],
    colors: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    activeEntries: [{ type: Input }],
    horizontal: [{ type: Input }],
    labelClick: [{ type: Output }],
    labelActivate: [{ type: Output }],
    labelDeactivate: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixZQUFZLEVBR1osaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUErQjlDLE1BQU0sT0FBTyxlQUFlO0lBZTFCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBUmhDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRSxrQkFBYSxHQUFVLEVBQUUsQ0FBQztJQUVrQixDQUFDO0lBRTdDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNULEtBQUs7b0JBQ0wsY0FBYztvQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUEvRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDtnQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFqQ0MsaUJBQWlCOzs7bUJBbUNoQixLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUVMLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdExhYmVsIH0gZnJvbSAnLi4vbGFiZWwuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwibGVnZW5kLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZT8ubGVuZ3RoID4gMFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10aXRsZS10ZXh0XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtd3JhcFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsZWdlbmQtbGFiZWxzXCIgW2NsYXNzLmhvcml6b250YWwtbGVnZW5kXT1cImhvcml6b250YWxcIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCJoZWlnaHQgLSA0NVwiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgZW50cnkgb2YgbGVnZW5kRW50cmllczsgdHJhY2tCeTogdHJhY2tCeVwiIGNsYXNzPVwibGVnZW5kLWxhYmVsXCI+XG4gICAgICAgICAgICA8bmd4LWNoYXJ0cy1sZWdlbmQtZW50cnlcbiAgICAgICAgICAgICAgW2xhYmVsXT1cImVudHJ5LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2Zvcm1hdHRlZExhYmVsXT1cImVudHJ5LmZvcm1hdHRlZExhYmVsXCJcbiAgICAgICAgICAgICAgW2NvbG9yXT1cImVudHJ5LmNvbG9yXCJcbiAgICAgICAgICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlKGVudHJ5KVwiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwibGFiZWxDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L25neC1jaGFydHMtbGVnZW5kLWVudHJ5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbGVnZW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE7XG4gIEBJbnB1dCgpIHRpdGxlO1xuICBASW5wdXQoKSBjb2xvcnM7XG4gIEBJbnB1dCgpIGhlaWdodDtcbiAgQElucHV0KCkgd2lkdGg7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM7XG4gIEBJbnB1dCgpIGhvcml6b250YWwgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbEFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbGVnZW5kRW50cmllczogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubGVnZW5kRW50cmllcyA9IHRoaXMuZ2V0TGVnZW5kRW50cmllcygpO1xuICB9XG5cbiAgZ2V0TGVnZW5kRW50cmllcygpOiBhbnlbXSB7XG4gICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgbGFiZWwgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRMYWJlbCA9IGZvcm1hdExhYmVsKGxhYmVsKTtcblxuICAgICAgY29uc3QgaWR4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4ge1xuICAgICAgICByZXR1cm4gaS5sYWJlbCA9PT0gZm9ybWF0dGVkTGFiZWw7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgZm9ybWF0dGVkTGFiZWwsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzLmdldENvbG9yKGxhYmVsKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBpc0FjdGl2ZShlbnRyeSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hY3RpdmVFbnRyaWVzKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kKGQgPT4ge1xuICAgICAgcmV0dXJuIGVudHJ5LmxhYmVsID09PSBkLm5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFjdGl2YXRlKGl0ZW0pIHtcbiAgICB0aGlzLmxhYmVsQWN0aXZhdGUuZW1pdChpdGVtKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoaXRlbSkge1xuICAgIHRoaXMubGFiZWxEZWFjdGl2YXRlLmVtaXQoaXRlbSk7XG4gIH1cblxuICB0cmFja0J5KGluZGV4LCBpdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5sYWJlbDtcbiAgfVxufVxuIl19