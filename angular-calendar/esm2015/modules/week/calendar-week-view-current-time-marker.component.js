import { __decorate, __metadata } from "tslib";
import { Component, Input, NgZone, OnChanges, SimpleChanges, TemplateRef, } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { switchMapTo, startWith, map, switchMap } from 'rxjs/operators';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const topPx_r9 = ɵngcc0.ɵɵnextContext().topPx;
    ɵngcc0.ɵɵstyleProp("top", topPx_r9, "px");
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
} if (rf & 2) {
    const isVisible_r8 = ctx.isVisible;
    ɵngcc0.ɵɵproperty("ngIf", isVisible_r8);
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6) { return { columnDate: a0, dayStartHour: a1, dayStartMinute: a2, dayEndHour: a3, dayEndMinute: a4, isVisible: a5, topPx: a6 }; };
let CalendarWeekViewCurrentTimeMarkerComponent = class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter, zone) {
        this.dateAdapter = dateAdapter;
        this.zone = zone;
        this.columnDate$ = new BehaviorSubject(this.columnDate);
        this.marker$ = this.zone.onStable.pipe(switchMap(() => interval(60 * 1000)), startWith(0), switchMapTo(this.columnDate$), map((columnDate) => {
            const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
            const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
            const hourHeightModifier = (this.hourSegments * this.hourSegmentHeight) / 60;
            const now = new Date();
            return {
                isVisible: this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier,
            };
        }));
    }
    ngOnChanges(changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    }
};
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) { return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(ɵngcc0.ɵɵdirectiveInject(DateAdapter), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewCurrentTimeMarkerComponent, selectors: [["mwl-calendar-week-view-current-time-marker"]], inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 14, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]], template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵpipe(4, "async");
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        var tmp_1_0 = null;
        const currVal_1 = ɵngcc0.ɵɵpureFunction7(6, _c0, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(4, 4, ctx.marker$)) == null ? null : tmp_1_0.top);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", currVal_1);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], pipes: [ɵngcc1.AsyncPipe], encapsulation: 2 });
CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = () => [
    { type: DateAdapter },
    { type: NgZone }
];
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
CalendarWeekViewCurrentTimeMarkerComponent = __decorate([ __metadata("design:paramtypes", [DateAdapter, NgZone])
], CalendarWeekViewCurrentTimeMarkerComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-current-time-marker',
                template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return [{ type: DateAdapter }, { type: ɵngcc0.NgZone }]; }, { columnDate: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
export { CalendarWeekViewCurrentTimeMarkerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL3dlZWsvY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGFBQWEsRUFDYixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0MvRCxJQUFhLDBDQUEwQyxHQUF2RCxNQUFhLDBDQUEwQztBQUFHLElBa0R4RCxZQUFvQixXQUF3QixFQUFVLElBQVk7QUFBSSxRQUFsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtBQUFDLFFBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBakNuRSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzRCxRQUNFLFlBQU8sR0FHRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ3BDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDWixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUM3QixHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtBQUN2QixZQUFNLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUN4RCxJQUFJLENBQUMsY0FBYyxDQUNwQixDQUFDO0FBQ1IsWUFBTSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztBQUNSLFlBQU0sTUFBTSxrQkFBa0IsR0FDdEIsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxRCxZQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDN0IsWUFBTSxPQUFPO0FBQ2IsZ0JBQVEsU0FBUyxFQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7QUFDckQsb0JBQVUsR0FBRyxJQUFJLFVBQVU7QUFDM0Isb0JBQVUsR0FBRyxJQUFJLFFBQVE7QUFDekIsZ0JBQVEsR0FBRyxFQUNELElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQztBQUMvRCxvQkFBVSxrQkFBa0I7QUFDNUIsYUFBTyxDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0osSUFDdUUsQ0FBQztBQUN4RSxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUNwQyxRQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUM1QixZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0QsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7NEdBQUE7QUFDRDtBQUFvRSxZQVJqQyxXQUFXO0FBQUksWUFBWSxNQUFNO0FBQUc7QUFqRDVEO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUUsOEJBQVcsSUFBSTtBQUMzQiw4RUFENEI7QUFFakI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVJLGdGQUZnQjtBQUVyQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUUsa0ZBRm9CO0FBRXZCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFTSw4RUFGWTtBQUVuQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUksZ0ZBRmdCO0FBRXJCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFSSxnRkFGZ0I7QUFFckI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVELHFGQUYwQjtBQUUxQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFLDhCQUFlLFdBQVc7QUFBRSxrRkFBSTtBQWYvQiwwQ0FBMEMsb0JBbEN0RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsbkNBaUNSLGtDQWtEK0IsV0FBVyxFQUFnQixNQUFNO3VCQW5GWixVQUN0RCxRQUFRLEVBQUUsM0NBa0YyRCxHQWxEMUQsMENBQTBDLENBeUR0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBM0RFLE1BQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTJERjtBQUFDLFNBMURZLDBDQUEwQztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcFRvLCBzdGFydFdpdGgsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXctY3VycmVudC10aW1lLW1hcmtlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtY29sdW1uRGF0ZT1cImNvbHVtbkRhdGVcIlxuICAgICAgbGV0LWRheVN0YXJ0SG91cj1cImRheVN0YXJ0SG91clwiXG4gICAgICBsZXQtZGF5U3RhcnRNaW51dGU9XCJkYXlTdGFydE1pbnV0ZVwiXG4gICAgICBsZXQtZGF5RW5kSG91cj1cImRheUVuZEhvdXJcIlxuICAgICAgbGV0LWRheUVuZE1pbnV0ZT1cImRheUVuZE1pbnV0ZVwiXG4gICAgICBsZXQtaXNWaXNpYmxlPVwiaXNWaXNpYmxlXCJcbiAgICAgIGxldC10b3BQeD1cInRvcFB4XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWN1cnJlbnQtdGltZS1tYXJrZXJcIlxuICAgICAgICAqbmdJZj1cImlzVmlzaWJsZVwiXG4gICAgICAgIFtzdHlsZS50b3AucHhdPVwidG9wUHhcIlxuICAgICAgPjwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgY29sdW1uRGF0ZTogY29sdW1uRGF0ZSxcbiAgICAgICAgZGF5U3RhcnRIb3VyOiBkYXlTdGFydEhvdXIsXG4gICAgICAgIGRheVN0YXJ0TWludXRlOiBkYXlTdGFydE1pbnV0ZSxcbiAgICAgICAgZGF5RW5kSG91cjogZGF5RW5kSG91cixcbiAgICAgICAgZGF5RW5kTWludXRlOiBkYXlFbmRNaW51dGUsXG4gICAgICAgIGlzVmlzaWJsZTogKG1hcmtlciQgfCBhc3luYyk/LmlzVmlzaWJsZSxcbiAgICAgICAgdG9wUHg6IChtYXJrZXIkIHwgYXN5bmMpPy50b3BcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q3VycmVudFRpbWVNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2x1bW5EYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0SG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG5cbiAgQElucHV0KCkgZGF5RW5kSG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheUVuZE1pbnV0ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50czogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29sdW1uRGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGU+KHRoaXMuY29sdW1uRGF0ZSk7XG5cbiAgbWFya2VyJDogT2JzZXJ2YWJsZTx7XG4gICAgaXNWaXNpYmxlOiBib29sZWFuO1xuICAgIHRvcDogbnVtYmVyO1xuICB9PiA9IHRoaXMuem9uZS5vblN0YWJsZS5waXBlKFxuICAgIHN3aXRjaE1hcCgoKSA9PiBpbnRlcnZhbCg2MCAqIDEwMDApKSxcbiAgICBzdGFydFdpdGgoMCksXG4gICAgc3dpdGNoTWFwVG8odGhpcy5jb2x1bW5EYXRlJCksXG4gICAgbWFwKChjb2x1bW5EYXRlKSA9PiB7XG4gICAgICBjb25zdCBzdGFydE9mRGF5ID0gdGhpcy5kYXRlQWRhcHRlci5zZXRNaW51dGVzKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLnNldEhvdXJzKGNvbHVtbkRhdGUsIHRoaXMuZGF5U3RhcnRIb3VyKSxcbiAgICAgICAgdGhpcy5kYXlTdGFydE1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGVuZE9mRGF5ID0gdGhpcy5kYXRlQWRhcHRlci5zZXRNaW51dGVzKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLnNldEhvdXJzKGNvbHVtbkRhdGUsIHRoaXMuZGF5RW5kSG91ciksXG4gICAgICAgIHRoaXMuZGF5RW5kTWludXRlXG4gICAgICApO1xuICAgICAgY29uc3QgaG91ckhlaWdodE1vZGlmaWVyID1cbiAgICAgICAgKHRoaXMuaG91clNlZ21lbnRzICogdGhpcy5ob3VyU2VnbWVudEhlaWdodCkgLyA2MDtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1Zpc2libGU6XG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5pc1NhbWVEYXkoY29sdW1uRGF0ZSwgbm93KSAmJlxuICAgICAgICAgIG5vdyA+PSBzdGFydE9mRGF5ICYmXG4gICAgICAgICAgbm93IDw9IGVuZE9mRGF5LFxuICAgICAgICB0b3A6XG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5kaWZmZXJlbmNlSW5NaW51dGVzKG5vdywgc3RhcnRPZkRheSkgKlxuICAgICAgICAgIGhvdXJIZWlnaHRNb2RpZmllcixcbiAgICAgIH07XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlciwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbkRhdGUpIHtcbiAgICAgIHRoaXMuY29sdW1uRGF0ZSQubmV4dChjaGFuZ2VzLmNvbHVtbkRhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==