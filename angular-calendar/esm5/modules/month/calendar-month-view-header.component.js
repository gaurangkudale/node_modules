import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef, EventEmitter, Output, } from '@angular/core';
import { trackByWeekDayHeaderDate } from '../common/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../common/calendar-date.pipe';

function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var day_r7 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.columnHeaderClicked.emit({ isoDayNumber: day_r7.day, sourceEvent: $event }); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r7 = ctx.$implicit;
    var locale_r4 = ɵngcc0.ɵɵnextContext().locale;
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
    var days_r3 = ctx.days;
    var trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
} }
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.columnHeaderClicked = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
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
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c0, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgClass], pipes: [ɵngcc2.CalendarDatePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
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
    return CalendarMonthViewHeaderComponent;
}());
export { CalendarMonthViewHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL21vbnRoL2NhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEMxRDtBQUNvQixJQURwQjtBQUE4QyxRQU9sQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFHNUMsQ0FBQztBQUNQLFFBQ0UsNkJBQXdCLEdBQUcsd0JBQXdCLENBQUM7QUFDdEQsSUFBQSxDQUFDO0FBQ0QsSUFiVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVksa0VBRkc7QUFFM0IsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRWMsb0VBRkE7QUFFMUIsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFlLFdBQVc7QUFBRSw0RUFBSTtBQUU1QyxJQUFZO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUU7QUFDWCxpRkFFSztJQVZNLGdDQUFnQyx3QkExQzVDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxnQ0FBZ0MsY0FDMUMsUUFBUSxFQUFFOzs7Ozs7O2lEQXNDVCxVQUNGLENBQUMsUUFDVyxnQ0FBZ0MsQ0FhNUM7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHVDQUFDO0FBQ0EsQ0FEQSxBQWJELElBYUM7QUFDRCxTQWRhLGdDQUFnQztBQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrRGF5IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWRheXM9XCJkYXlzXCJcbiAgICAgIGxldC1sb2NhbGU9XCJsb2NhbGVcIlxuICAgICAgbGV0LXRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZT1cInRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1jZWxsLXJvdyBjYWwtaGVhZGVyXCIgcm9sZT1cInJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtY2VsbFwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzOyB0cmFja0J5OiB0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCJcbiAgICAgICAgICAoY2xpY2spPVwiXG4gICAgICAgICAgICBjb2x1bW5IZWFkZXJDbGlja2VkLmVtaXQoe1xuICAgICAgICAgICAgICBpc29EYXlOdW1iZXI6IGRheS5kYXksXG4gICAgICAgICAgICAgIHNvdXJjZUV2ZW50OiAkZXZlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJkYXkuY3NzQ2xhc3NcIlxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBkYXkuZGF0ZSB8IGNhbGVuZGFyRGF0ZTogJ21vbnRoVmlld0NvbHVtbkhlYWRlcic6bG9jYWxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlOiB0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoVmlld0hlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheXM6IFdlZWtEYXlbXTtcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgY29sdW1uSGVhZGVyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGlzb0RheU51bWJlcjogbnVtYmVyO1xuICAgIHNvdXJjZUV2ZW50OiBNb3VzZUV2ZW50O1xuICB9PigpO1xuXG4gIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSA9IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTtcbn1cbiJdfQ==