import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, } from '@angular/core';
import { isWithinThreshold, trackByEventId } from '../common/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-draggable-droppable';
import * as ɵngcc3 from '../common/calendar-tooltip.directive';
import * as ɵngcc4 from '../common/click.directive';
import * as ɵngcc5 from '../common/calendar-a11y.pipe';
import * as ɵngcc6 from '../common/calendar-date.pipe';
import * as ɵngcc7 from '../common/calendar-event-title.pipe';

function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r3 = ɵngcc0.ɵɵnextContext().day;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r3.badgeTotal);
} }
var _c0 = function (a0) { return { backgroundColor: a0 }; };
var _c1 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
var _c2 = function (a0, a1) { return { x: a0, y: a1 }; };
var _c3 = function () { return { delay: 300, delta: 30 }; };
var _c4 = function () { return {}; };
function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var event_r19 = ctx.$implicit; var highlightDay_r7 = ɵngcc0.ɵɵnextContext(2).highlightDay; return highlightDay_r7.emit({ event: event_r19 }); })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); var event_r19 = ctx.$implicit; var unhighlightDay_r8 = ɵngcc0.ɵɵnextContext(2).unhighlightDay; return unhighlightDay_r8.emit({ event: event_r19 }); })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var event_r19 = ctx.$implicit; var eventClicked_r9 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r9.emit({ event: event_r19, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var event_r19 = ctx.$implicit;
    var ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    var tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    var tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    var tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    var tooltipDelay_r12 = ctx_r27.tooltipDelay;
    var day_r3 = ctx_r27.day;
    var validateDrag_r14 = ctx_r27.validateDrag;
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r19.draggable);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", ɵngcc0.ɵɵpipeBind3(1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", ɵngcc0.ɵɵpureFunction2(24, _c1, event_r19, day_r3))("dragAxis", ɵngcc0.ɵɵpureFunction2(27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(30, _c3));
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 19, ɵngcc0.ɵɵpureFunction0(31, _c4), "hideMonthCellEvents"));
} }
function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r28 = ɵngcc0.ɵɵnextContext();
    var day_r3 = ctx_r28.day;
    var trackByEventId_r13 = ctx_r28.trackByEventId;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
} }
var _c5 = function (a0, a1) { return { day: a0, locale: a1 }; };
function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementStart(2, "span", 3);
    ɵngcc0.ɵɵtemplate(3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
} if (rf & 2) {
    var day_r3 = ctx.day;
    var locale_r5 = ctx.locale;
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 4, ɵngcc0.ɵɵpureFunction2(11, _c5, day_r3, locale_r5), "monthCell"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.badgeTotal > 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) { }
var _c6 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "day", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "openDay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarMonthCellComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) { return new (t || CalendarMonthCellComponent)(); };
CalendarMonthCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthCellComponent, selectors: [["mwl-calendar-month-cell"]], hostAttrs: [1, "cal-cell", "cal-day-cell"], hostVars: 18, hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    } }, inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, decls: 3, vars: 15, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]], template: function CalendarMonthCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc3.CalendarTooltipDirective, ɵngcc4.ClickDirective], pipes: [ɵngcc5.CalendarA11yPipe, ɵngcc6.CalendarDatePipe, ɵngcc7.CalendarEventTitlePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthCellComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-cell',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[class.cal-event-highlight]': '!!day.backgroundColor'
                }
            }]
    }], function () { return []; }, { highlightDay: [{
            type: Output
        }], unhighlightDay: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], day: [{
            type: Input
        }], openDay: [{
            type: Input
        }], locale: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }] }); })();
    return CalendarMonthCellComponent;
}());
export { CalendarMonthCellComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0duRTtBQUNvQixJQURwQjtBQUF3QyxRQWlCNUIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNqRSxRQUNZLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbkUsUUFDWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUdyQyxDQUFDO0FBQ1AsUUFDRSxtQkFBYyxHQUFHLGNBQWMsQ0FBQztBQUNsQyxRQUNFLGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7QUFDbkMsSUFBQSxDQUFDO0FBQ0QsSUE3Qlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVXLDJEQUZNO0FBRTdCLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVPLCtEQUZjO0FBRWpDLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVjLDhEQUZBO0FBRTFCLElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVKLHdFQUZvQztBQUU1QyxJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFQywyRUFGMkI7QUFFeEMsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFFLGtDQUFlLFdBQVc7QUFBRSxzRUFBSTtBQUU1QyxJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUUsa0NBQWdCLFdBQVc7QUFBRSx1RUFBSTtBQUU3QyxJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFQyxvRUFGMEI7QUFFdkMsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFFLGtDQUFhLFlBQVk7QUFBRSxvRUFBeUI7QUFFakUsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFFLGtDQUFlLFlBQVk7QUFBRSxzRUFBeUI7QUFFbkUsSUFBWTtBQUFhLFFBQXRCLE1BQU0sRUFBRTtBQUFFO0FBQ0osb0VBRUY7SUF4Qk0sMEJBQTBCLHdCQTdGdEMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHlCQUF5QixjQUNuQztDQUFRLEVBQUU7Ozs7Ozs7OztxTkE2RVQsY0FDRCxJQUFJLEVBQUUsa0JBQ0osS0FBSyxFQUFFLHVCQUF1QjtZQUM5QixrQkFBa0IsRUFBRSxZQUFZLGtCQUNoQyxtQkFBbUIsRUFBRTtXQUFhO0lBQ2xDO09BQW9CLEVBQUUsY0FBYyxrQkFDcEM7U0FBcUIsRUFBRSxlQUFlLGtCQUN0QyxzQkFBc0IsRUFBRSxhQUFhLGtCQUNyQyx1QkFBdUIsRUFBRSxjQUFjLGtCQUN2Qyx3QkFBd0IsRUFBRSx1QkFBdUIsa0JBQ2pELGtCQUFrQixFQUFFLGlCQUFpQixrQkFDckMsNkJBQTZCLEVBQUUsdUJBQXVCLGVBQ3ZELFVBQ0YsQ0FBQyxRQUNXLDBCQUEwQixDQTZCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsaUNBQUM7QUFDQSxDQURBLEFBN0JELElBNkJDO0FBQ0QsU0E5QmEsMEJBQTBCO0FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vbnRoVmlld0RheSwgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGlzV2l0aGluVGhyZXNob2xkLCB0cmFja0J5RXZlbnRJZCB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItbW9udGgtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZGF5PVwiZGF5XCJcbiAgICAgIGxldC1vcGVuRGF5PVwib3BlbkRheVwiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC10b29sdGlwUGxhY2VtZW50PVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICBsZXQtaGlnaGxpZ2h0RGF5PVwiaGlnaGxpZ2h0RGF5XCJcbiAgICAgIGxldC11bmhpZ2hsaWdodERheT1cInVuaGlnaGxpZ2h0RGF5XCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LXRvb2x0aXBUZW1wbGF0ZT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBsZXQtdG9vbHRpcEFwcGVuZFRvQm9keT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIlxuICAgICAgbGV0LXRvb2x0aXBEZWxheT1cInRvb2x0aXBEZWxheVwiXG4gICAgICBsZXQtdHJhY2tCeUV2ZW50SWQ9XCJ0cmFja0J5RXZlbnRJZFwiXG4gICAgICBsZXQtdmFsaWRhdGVEcmFnPVwidmFsaWRhdGVEcmFnXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWNlbGwtdG9wXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICB7IGRheTogZGF5LCBsb2NhbGU6IGxvY2FsZSB9IHwgY2FsZW5kYXJBMTF5OiAnbW9udGhDZWxsJ1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhbC1kYXktYmFkZ2VcIiAqbmdJZj1cImRheS5iYWRnZVRvdGFsID4gMFwiPnt7XG4gICAgICAgICAgICBkYXkuYmFkZ2VUb3RhbFxuICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsLWRheS1udW1iZXJcIj57e1xuICAgICAgICAgICAgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6ICdtb250aFZpZXdEYXlOdW1iZXInOmxvY2FsZVxuICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnRzXCIgKm5nSWY9XCJkYXkuZXZlbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZGF5LmV2ZW50czsgdHJhY2tCeTogdHJhY2tCeUV2ZW50SWRcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsgYmFja2dyb3VuZENvbG9yOiBldmVudC5jb2xvcj8ucHJpbWFyeSB9XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICAgIChtb3VzZWVudGVyKT1cImhpZ2hsaWdodERheS5lbWl0KHsgZXZlbnQ6IGV2ZW50IH0pXCJcbiAgICAgICAgICAobW91c2VsZWF2ZSk9XCJ1bmhpZ2hsaWdodERheS5lbWl0KHsgZXZlbnQ6IGV2ZW50IH0pXCJcbiAgICAgICAgICBbbXdsQ2FsZW5kYXJUb29sdGlwXT1cIlxuICAgICAgICAgICAgZXZlbnQudGl0bGUgfCBjYWxlbmRhckV2ZW50VGl0bGU6ICdtb250aFRvb2x0aXAnOmV2ZW50XG4gICAgICAgICAgXCJcbiAgICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICBbdG9vbHRpcEV2ZW50XT1cImV2ZW50XCJcbiAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgW3Rvb2x0aXBEZWxheV09XCJ0b29sdGlwRGVsYXlcIlxuICAgICAgICAgIG13bERyYWdnYWJsZVxuICAgICAgICAgIFtjbGFzcy5jYWwtZHJhZ2dhYmxlXT1cImV2ZW50LmRyYWdnYWJsZVwiXG4gICAgICAgICAgZHJhZ0FjdGl2ZUNsYXNzPVwiY2FsLWRyYWctYWN0aXZlXCJcbiAgICAgICAgICBbZHJvcERhdGFdPVwieyBldmVudDogZXZlbnQsIGRyYWdnZWRGcm9tOiBkYXkgfVwiXG4gICAgICAgICAgW2RyYWdBeGlzXT1cInsgeDogZXZlbnQuZHJhZ2dhYmxlLCB5OiBldmVudC5kcmFnZ2FibGUgfVwiXG4gICAgICAgICAgW3ZhbGlkYXRlRHJhZ109XCJ2YWxpZGF0ZURyYWdcIlxuICAgICAgICAgIFt0b3VjaFN0YXJ0TG9uZ1ByZXNzXT1cInsgZGVsYXk6IDMwMCwgZGVsdGE6IDMwIH1cIlxuICAgICAgICAgIChtd2xDbGljayk9XCJldmVudENsaWNrZWQuZW1pdCh7IGV2ZW50OiBldmVudCwgc291cmNlRXZlbnQ6ICRldmVudCB9KVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwie30gfCBjYWxlbmRhckExMXk6ICdoaWRlTW9udGhDZWxsRXZlbnRzJ1wiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIG9wZW5EYXk6IG9wZW5EYXksXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICB0b29sdGlwUGxhY2VtZW50OiB0b29sdGlwUGxhY2VtZW50LFxuICAgICAgICBoaWdobGlnaHREYXk6IGhpZ2hsaWdodERheSxcbiAgICAgICAgdW5oaWdobGlnaHREYXk6IHVuaGlnaGxpZ2h0RGF5LFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgdG9vbHRpcFRlbXBsYXRlOiB0b29sdGlwVGVtcGxhdGUsXG4gICAgICAgIHRvb2x0aXBBcHBlbmRUb0JvZHk6IHRvb2x0aXBBcHBlbmRUb0JvZHksXG4gICAgICAgIHRvb2x0aXBEZWxheTogdG9vbHRpcERlbGF5LFxuICAgICAgICB0cmFja0J5RXZlbnRJZDogdHJhY2tCeUV2ZW50SWQsXG4gICAgICAgIHZhbGlkYXRlRHJhZzogdmFsaWRhdGVEcmFnXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnY2FsLWNlbGwgY2FsLWRheS1jZWxsJyxcbiAgICAnW2NsYXNzLmNhbC1wYXN0XSc6ICdkYXkuaXNQYXN0JyxcbiAgICAnW2NsYXNzLmNhbC10b2RheV0nOiAnZGF5LmlzVG9kYXknLFxuICAgICdbY2xhc3MuY2FsLWZ1dHVyZV0nOiAnZGF5LmlzRnV0dXJlJyxcbiAgICAnW2NsYXNzLmNhbC13ZWVrZW5kXSc6ICdkYXkuaXNXZWVrZW5kJyxcbiAgICAnW2NsYXNzLmNhbC1pbi1tb250aF0nOiAnZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsLW91dC1tb250aF0nOiAnIWRheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbC1oYXMtZXZlbnRzXSc6ICdkYXkuZXZlbnRzLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuY2FsLW9wZW5dJzogJ2RheSA9PT0gb3BlbkRheScsXG4gICAgJ1tjbGFzcy5jYWwtZXZlbnQtaGlnaGxpZ2h0XSc6ICchIWRheS5iYWNrZ3JvdW5kQ29sb3InLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ2VsbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheTogTW9udGhWaWV3RGF5O1xuXG4gIEBJbnB1dCgpIG9wZW5EYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheTtcblxuICBASW5wdXQoKSB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGw7XG5cbiAgQE91dHB1dCgpIGhpZ2hsaWdodERheTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHVuaGlnaGxpZ2h0RGF5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIH0+KCk7XG5cbiAgdHJhY2tCeUV2ZW50SWQgPSB0cmFja0J5RXZlbnRJZDtcblxuICB2YWxpZGF0ZURyYWcgPSBpc1dpdGhpblRocmVzaG9sZDtcbn1cbiJdfQ==