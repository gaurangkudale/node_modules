import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, } from '@angular/core';
import { trackByWeekDayHeaderDate } from '../common/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-draggable-droppable';
import * as ɵngcc3 from '../common/click.directive';
import * as ɵngcc4 from '../common/calendar-date.pipe';

function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var day_r10 = ctx.$implicit; var dayHeaderClicked_r5 = ɵngcc0.ɵɵnextContext().dayHeaderClicked; return dayHeaderClicked_r5.emit({ day: day_r10, sourceEvent: $event }); })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var day_r10 = ctx.$implicit; var eventDropped_r6 = ɵngcc0.ɵɵnextContext().eventDropped; return eventDropped_r6.emit({ event: $event.dropData.event, newStart: day_r10.date }); })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var day_r10 = ctx.$implicit; var dragEnter_r8 = ɵngcc0.ɵɵnextContext().dragEnter; return dragEnter_r8.emit({ date: day_r10.date }); });
    ɵngcc0.ɵɵelementStart(1, "b");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "br");
    ɵngcc0.ɵɵelementStart(5, "span");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵpipe(7, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r10 = ctx.$implicit;
    var locale_r4 = ɵngcc0.ɵɵnextContext().locale;
    ɵngcc0.ɵɵclassProp("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    ɵngcc0.ɵɵproperty("ngClass", day_r10.cssClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(3, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(7, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
} }
function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var days_r3 = ctx.days;
    var trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
} }
function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2, a3, a4, a5) { return { days: a0, locale: a1, dayHeaderClicked: a2, eventDropped: a3, dragEnter: a4, trackByWeekDayHeaderDate: a5 }; };
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) { return new (t || CalendarWeekViewHeaderComponent)(); };
CalendarWeekViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHeaderComponent, selectors: [["mwl-calendar-week-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, decls: 3, vars: 9, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction6(2, _c0, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc2.ɵa, ɵngcc1.NgClass, ɵngcc3.ClickDirective], pipes: [ɵngcc4.CalendarDatePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { dayHeaderClicked: [{
            type: Output
        }], eventDropped: [{
            type: Output
        }], dragEnter: [{
            type: Output
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
    return CalendarWeekViewHeaderComponent;
}());
export { CalendarWeekViewHeaderComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRDFEO0FBQ29CLElBRHBCO0FBQTZDLFFBT2pDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUd6QyxDQUFDO0FBQ1AsUUFDWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUdyQyxDQUFDO0FBQ1AsUUFDWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7QUFDM0QsUUFDRSw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztBQUN0RCxJQUFBLENBQUM7QUFDRCxJQXBCVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVksaUVBRkc7QUFFM0IsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFO0FBRWMsbUVBRkE7QUFFMUIsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFlLFdBQVc7QUFBRSwyRUFBSTtBQUU1QyxJQUFZO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUU7QUFDUiw2RUFFRTtBQUVQLElBQVk7QUFBYSxRQUF0QixNQUFNLEVBQUU7QUFBRTtBQUNKLHlFQUVGO0FBRVAsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFFO0FBQTBDLHNFQUFJO0lBakI5QywrQkFBK0Isd0JBeEQzQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsK0JBQStCLGNBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7OzRCQW9EVCxVQUNGLENBQUMsUUFDVywrQkFBK0IsQ0FvQjNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHNDQUFDO0FBQ0EsQ0FEQSxBQXBCRCxJQW9CQztBQUNELFNBckJhLCtCQUErQjtBQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50LCBXZWVrRGF5IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZGF5cz1cImRheXNcIlxuICAgICAgbGV0LWxvY2FsZT1cImxvY2FsZVwiXG4gICAgICBsZXQtZGF5SGVhZGVyQ2xpY2tlZD1cImRheUhlYWRlckNsaWNrZWRcIlxuICAgICAgbGV0LWV2ZW50RHJvcHBlZD1cImV2ZW50RHJvcHBlZFwiXG4gICAgICBsZXQtdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlPVwidHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgIGxldC1kcmFnRW50ZXI9XCJkcmFnRW50ZXJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZGF5LWhlYWRlcnNcIiByb2xlPVwicm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNhbC1oZWFkZXJcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgdHJhY2tCeTogdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXBhc3RdPVwiZGF5LmlzUGFzdFwiXG4gICAgICAgICAgW2NsYXNzLmNhbC10b2RheV09XCJkYXkuaXNUb2RheVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1mdXR1cmVdPVwiZGF5LmlzRnV0dXJlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXdlZWtlbmRdPVwiZGF5LmlzV2Vla2VuZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZGF5LmNzc0NsYXNzXCJcbiAgICAgICAgICAobXdsQ2xpY2spPVwiZGF5SGVhZGVyQ2xpY2tlZC5lbWl0KHsgZGF5OiBkYXksIHNvdXJjZUV2ZW50OiAkZXZlbnQgfSlcIlxuICAgICAgICAgIG13bERyb3BwYWJsZVxuICAgICAgICAgIGRyYWdPdmVyQ2xhc3M9XCJjYWwtZHJhZy1vdmVyXCJcbiAgICAgICAgICAoZHJvcCk9XCJcbiAgICAgICAgICAgIGV2ZW50RHJvcHBlZC5lbWl0KHtcbiAgICAgICAgICAgICAgZXZlbnQ6ICRldmVudC5kcm9wRGF0YS5ldmVudCxcbiAgICAgICAgICAgICAgbmV3U3RhcnQ6IGRheS5kYXRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIFwiXG4gICAgICAgICAgKGRyYWdFbnRlcik9XCJkcmFnRW50ZXIuZW1pdCh7IGRhdGU6IGRheS5kYXRlIH0pXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGI+e3sgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6ICd3ZWVrVmlld0NvbHVtbkhlYWRlcic6bG9jYWxlIH19PC9iXG4gICAgICAgICAgPjxiciAvPlxuICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICBkYXkuZGF0ZSB8IGNhbGVuZGFyRGF0ZTogJ3dlZWtWaWV3Q29sdW1uU3ViSGVhZGVyJzpsb2NhbGVcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGRheXM6IGRheXMsXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBkYXlIZWFkZXJDbGlja2VkOiBkYXlIZWFkZXJDbGlja2VkLFxuICAgICAgICBldmVudERyb3BwZWQ6IGV2ZW50RHJvcHBlZCxcbiAgICAgICAgZHJhZ0VudGVyOiBkcmFnRW50ZXIsXG4gICAgICAgIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTogdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheXM6IFdlZWtEYXlbXTtcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgZGF5SGVhZGVyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRheTogV2Vla0RheTtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgfT4oKTtcblxuICBAT3V0cHV0KCkgZXZlbnREcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgbmV3U3RhcnQ6IERhdGU7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xufVxuIl19