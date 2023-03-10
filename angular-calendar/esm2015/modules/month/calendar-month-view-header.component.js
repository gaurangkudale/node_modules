import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef, EventEmitter, Output, } from '@angular/core';
import { trackByWeekDayHeaderDate } from '../common/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../common/calendar-date.pipe';

function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const day_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.columnHeaderClicked.emit({ isoDayNumber: day_r7.day, sourceEvent: $event }); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const locale_r4 = ɵngcc0.ɵɵnextContext().locale;
    ɵngcc0.ɵɵclassProp("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    ɵngcc0.ɵɵproperty("ngClass", day_r7.cssClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), " ");
} }
function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
} }
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
let CalendarMonthViewHeaderComponent = class CalendarMonthViewHeaderComponent {
    constructor() {
        this.columnHeaderClicked = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgClass], pipes: [ɵngcc2.CalendarDatePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-view-header',
                template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
    >
      <div class="cal-cell-row cal-header" role="row">
        <div
          class="cal-cell"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          (click)="
            columnHeaderClicked.emit({
              isoDayNumber: day.day,
              sourceEvent: $event
            })
          "
          [ngClass]="day.cssClass"
          tabindex="0"
          role="columnheader"
        >
          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { columnHeaderClicked: [{
            type: Output
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
export { CalendarMonthViewHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL21vbnRoL2NhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEMxRCxJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztBQUM3QyxJQURBO0FBQWdCLFFBT0osd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBRzVDLENBQUM7QUFDUCxRQUNFLDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO0FBQ3RELElBQUEsQ0FBQztBQUNELENBREM7Ozs7Ozs7OztzSUFBQTtBQVpVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFUSw4REFGTztBQUVoQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVUsZ0VBRkk7QUFFZjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFLDhCQUFlLFdBQVc7QUFBRSx3RUFBSTtBQUVoQztBQUFhLElBQXRCLE1BQU0sRUFBRTtBQUFFO0FBQXNDLDZFQUc1QztBQVZNLGdDQUFnQyxvQkExQzVDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTt1QkFBZ0M7UUFDMUMsUUFBUTtDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXNDVCxNQUNGLENBQUMsSUFDVyxnQ0FBZ0MsQ0FhNUM7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FkWSxnQ0FBZ0M7QUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla0RheSB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1kYXlzPVwiZGF5c1wiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC10cmFja0J5V2Vla0RheUhlYWRlckRhdGU9XCJ0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtY2VsbC1yb3cgY2FsLWhlYWRlclwiIHJvbGU9XCJyb3dcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWNlbGxcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgdHJhY2tCeTogdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgW2NsYXNzLmNhbC10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiXG4gICAgICAgICAgKGNsaWNrKT1cIlxuICAgICAgICAgICAgY29sdW1uSGVhZGVyQ2xpY2tlZC5lbWl0KHtcbiAgICAgICAgICAgICAgaXNvRGF5TnVtYmVyOiBkYXkuZGF5LFxuICAgICAgICAgICAgICBzb3VyY2VFdmVudDogJGV2ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZGF5LmNzc0NsYXNzXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6ICdtb250aFZpZXdDb2x1bW5IZWFkZXInOmxvY2FsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTogdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aFZpZXdIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIGNvbHVtbkhlYWRlckNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBpc29EYXlOdW1iZXI6IG51bWJlcjtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgfT4oKTtcblxuICB0cmFja0J5V2Vla0RheUhlYWRlckRhdGUgPSB0cmFja0J5V2Vla0RheUhlYWRlckRhdGU7XG59XG4iXX0=