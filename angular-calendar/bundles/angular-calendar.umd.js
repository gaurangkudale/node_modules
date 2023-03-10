(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('angular-draggable-droppable'),require('angular-resizable-element'),exports, require('@angular/core'), require('@angular/common'), require('positioning'), require('rxjs'), require('rxjs/operators'), require('calendar-utils'), require('angular-draggable-droppable'), require('@angular/animations'), require('angular-resizable-element')) :
    typeof define === 'function' && define.amd ? define('angular-calendar', ['@angular/core','@angular/common','angular-draggable-droppable','angular-resizable-element','exports', '@angular/core', '@angular/common', 'positioning', 'rxjs', 'rxjs/operators', 'calendar-utils', 'angular-draggable-droppable', '@angular/animations', 'angular-resizable-element'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.angularDraggableDroppable,global.angularResizableElement,global['angular-calendar'] = {}, global.ng.core, global.ng.common, global.positioning, global.rxjs, global.rxjs.operators, global.calendarUtils, global['angular-draggable-droppable'], global.ng.animations, global['angular-resizable-element']));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, positioning, rxjs, operators, calendarUtils, angularDraggableDroppable, animations, angularResizableElement) { 
var _c0 = function (a0) { return { action: a0 }; };
function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var action_r7 = ctx.$implicit; var event_r3 = ɵngcc0.ɵɵnextContext(2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var action_r7 = ctx.$implicit; var event_r3 = ɵngcc0.ɵɵnextContext(2).event; return action_r7.onClick({ event: event_r3, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r7 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 3, ɵngcc0.ɵɵpureFunction1(6, _c0, action_r7), "actionButtonLabel"));
} }
function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵtemplate(1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext();
    var event_r3 = ctx_r13.event;
    var trackByActionId_r4 = ctx_r13.trackByActionId;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
} }
function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
} if (rf & 2) {
    var event_r3 = ctx.event;
    ɵngcc0.ɵɵproperty("ngIf", event_r3.actions);
} }
function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) { }
var _c1 = function (a0, a1) { return { event: a0, trackByActionId: a1 }; };
var _c2 = function () { return {}; };
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
} if (rf & 2) {
    var event_r3 = ctx.event;
    var view_r4 = ctx.view;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind3(1, 2, event_r3.title, view_r4, event_r3), ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 6, ɵngcc0.ɵɵpureFunction0(9, _c2), "hideEventTitle"));
} }
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) { }
var _c3 = function (a0, a1) { return { event: a0, view: a1 }; };
function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelement(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var contents_r3 = ctx.contents;
    var placement_r4 = ctx.placement;
    ɵngcc0.ɵɵproperty("ngClass", "cal-tooltip-" + placement_r4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("innerHtml", contents_r3, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) { }
var _c4 = function (a0, a1, a2) { return { contents: a0, placement: a1, event: a2 }; };
var _c5 = function (a0) { return { backgroundColor: a0 }; };
function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mwl-calendar-month-cell", 7);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var day_r3 = ctx.$implicit; var ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var day_r3 = ctx.$implicit; var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.dayClicked.emit({ day: day_r3, sourceEvent: $event }); })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.toggleDayHighlight($event.event, true); })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.toggleDayHighlight($event.event, false); })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var day_r3 = ctx.$implicit; var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom); })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r3 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", ɵngcc0.ɵɵpureFunction1(15, _c5, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    ɵngcc0.ɵɵattribute("tabindex", ɵngcc0.ɵɵpipeBind2(1, 12, ɵngcc0.ɵɵpureFunction0(17, _c2), "monthCellTabIndex"));
} }
function CalendarMonthViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    ɵngcc0.ɵɵpipe(3, "slice");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "mwl-calendar-open-day-events", 6);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var rowIndex_r1 = ctx.$implicit;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(3, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
} }
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
var _c6 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r3 = ɵngcc0.ɵɵnextContext().day;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r3.badgeTotal);
} }
var _c7 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
var _c8 = function (a0, a1) { return { x: a0, y: a1 }; };
var _c9 = function () { return { delay: 300, delta: 30 }; };
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
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(22, _c5, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", ɵngcc0.ɵɵpipeBind3(1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", ɵngcc0.ɵɵpureFunction2(24, _c7, event_r19, day_r3))("dragAxis", ɵngcc0.ɵɵpureFunction2(27, _c8, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(30, _c9));
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 19, ɵngcc0.ɵɵpureFunction0(31, _c2), "hideMonthCellEvents"));
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
var _c10 = function (a0, a1) { return { day: a0, locale: a1 }; };
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
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 4, ɵngcc0.ɵɵpureFunction2(11, _c10, day_r3, locale_r5), "monthCell"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.badgeTotal > 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) { }
var _c11 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
var _c12 = function (a0) { return { event: a0 }; };
var _c13 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵtext(2, " ");
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-event-title", 9);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var event_r10 = ctx.$implicit; var eventClicked_r4 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var event_r10 = ctx.$implicit; var eventClicked_r4 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(5, " ");
    ɵngcc0.ɵɵelement(6, "mwl-calendar-event-actions", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var event_r10 = ctx.$implicit;
    var validateDrag_r7 = ɵngcc0.ɵɵnextContext(2).validateDrag;
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r10.draggable);
    ɵngcc0.ɵɵproperty("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", ɵngcc0.ɵɵpureFunction1(16, _c12, event_r10))("dragAxis", ɵngcc0.ɵɵpureFunction2(18, _c8, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(21, _c9));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(22, _c5, event_r10.color == null ? null : event_r10.color.primary));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 13, ɵngcc0.ɵɵpureFunction2(24, _c13, event_r10, ctx_r9.locale), "eventDescription"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
} }
var _c14 = function (a0, a1) { return { date: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵtemplate(5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext();
    var events_r3 = ctx_r17.events;
    var trackByEventId_r6 = ctx_r17.trackByEventId;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@collapse", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 5, ɵngcc0.ɵɵpureFunction2(11, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 8, ɵngcc0.ɵɵpureFunction2(14, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
} }
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
} if (rf & 2) {
    var isOpen_r5 = ctx.isOpen;
    ɵngcc0.ɵɵproperty("ngIf", isOpen_r5);
} }
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) { }
var _c15 = function (a0, a1, a2, a3, a4) { return { events: a0, eventClicked: a1, isOpen: a2, trackByEventId: a3, validateDrag: a4 }; };
function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var day_r7 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.eventDropped($event, day_r7.date, true); })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var day_r7 = ctx.$implicit; var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.dateDragEnter(day_r7.date); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c16 = function () { return { left: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c16));
} }
var _c17 = function () { return { right: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c17));
} }
var _c18 = function (a0, a1) { return { left: a0, right: a1 }; };
var _c19 = function (a0, a1) { return { event: a0, calendarId: a1 }; };
var _c20 = function (a0) { return { x: a0 }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17, 18);
    ɵngcc0.ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var allDayEvent_r14 = ctx.$implicit; ɵngcc0.ɵɵnextContext(); var _r12 = ɵngcc0.ɵɵreference(1); var ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event); })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var allDayEvent_r14 = ctx.$implicit; var ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth); })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var allDayEvent_r14 = ctx.$implicit; var ctx_r21 = ɵngcc0.ɵɵnextContext(3); return ctx_r21.allDayEventResizeEnded(allDayEvent_r14); })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var _r15 = ɵngcc0.ɵɵreference(1); ɵngcc0.ɵɵnextContext(); var _r12 = ɵngcc0.ɵɵreference(1); var ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.dragStarted(_r12, _r15); })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r23 = ɵngcc0.ɵɵnextContext(3); return ctx_r23.allDayEventDragMove(); })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var allDayEvent_r14 = ctx.$implicit; var ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth); });
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-week-view-event", 20);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var allDayEvent_r14 = ctx.$implicit; var ctx_r25 = ɵngcc0.ɵɵnextContext(3); return ctx_r25.eventClicked.emit({ event: allDayEvent_r14.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var allDayEvent_r14 = ctx.$implicit;
    var ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%");
    ɵngcc0.ɵɵclassProp("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    ɵngcc0.ɵɵproperty("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction2(30, _c18, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", ɵngcc0.ɵɵpureFunction2(33, _c19, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(36, _c8, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction1(39, _c20, ctx_r13.dayColumnWidth) : ɵngcc0.ɵɵpureFunction0(41, _c2))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(42, _c9));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
} }
function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14, 15);
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 43, "div", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var eventRow_r11 = ctx.$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
} }
function CalendarWeekViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8, 9);
    ɵngcc0.ɵɵlistener("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.dragEnter("allDay"); })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.dragLeave("allDay"); });
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 10);
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
} }
function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mwl-calendar-week-view-hour-segment", 28);
} if (rf & 2) {
    var segment_r33 = ctx.$implicit;
    var ctx_r32 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("height", ctx_r32.hourSegmentHeight, "px");
    ɵngcc0.ɵɵproperty("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
} }
function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r30 = ctx.$implicit;
    var odd_r31 = ctx.odd;
    var ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("cal-hour-odd", odd_r31);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
} }
var _c21 = function () { return { left: true, top: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c21));
} }
function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) { }
function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r46 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view-event", 36);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r46); var timeEvent_r37 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r44 = ɵngcc0.ɵɵnextContext(2); return ctx_r44.eventClicked.emit({ event: timeEvent_r37.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var timeEvent_r37 = ɵngcc0.ɵɵnextContext().$implicit;
    var column_r34 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r42 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
} }
var _c22 = function () { return { right: true, bottom: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c22));
} }
var _c23 = function (a0, a1, a2, a3) { return { left: a0, right: a1, top: a2, bottom: a3 }; };
function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r50 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 33, 18);
    ɵngcc0.ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var ctx_r49 = ɵngcc0.ɵɵnextContext(2); var _r2 = ɵngcc0.ɵɵreference(6); return ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event); })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var ctx_r51 = ɵngcc0.ɵɵnextContext(2); return ctx_r51.timeEventResizing(timeEvent_r37, $event); })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var ctx_r52 = ɵngcc0.ɵɵnextContext(2); return ctx_r52.timeEventResizeEnded(timeEvent_r37); })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var _r38 = ɵngcc0.ɵɵreference(1); var ctx_r53 = ɵngcc0.ɵɵnextContext(2); var _r2 = ɵngcc0.ɵɵreference(6); return ctx_r53.dragStarted(_r2, _r38, timeEvent_r37); })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.dragMove(timeEvent_r37, $event); })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); var timeEvent_r37 = ctx.$implicit; var ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true); });
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);
    ɵngcc0.ɵɵtemplate(3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 34);
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 35, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var timeEvent_r37 = ctx.$implicit;
    var _r41 = ɵngcc0.ɵɵreference(5);
    var ctx_r35 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");
    ɵngcc0.ɵɵclassProp("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);
    ɵngcc0.ɵɵproperty("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction4(29, _c23, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", ɵngcc0.ɵɵpureFunction2(34, _c19, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(37, _c8, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction2(40, _c8, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : ɵngcc0.ɵɵpureFunction0(43, _c2))("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(44, _c9))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r41);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
} }
function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    var _r61 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view-hour-segment", 38);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r61); var segment_r59 = ctx.$implicit; var ctx_r60 = ɵngcc0.ɵɵnextContext(3); return ctx_r60.hourSegmentClicked.emit({ date: segment_r59.date, sourceEvent: $event }); })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r61); var segment_r59 = ctx.$implicit; var ctx_r62 = ɵngcc0.ɵɵnextContext(3); return ctx_r62.eventDropped($event, segment_r59.date, false); })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() { ɵngcc0.ɵɵrestoreView(_r61); var segment_r59 = ctx.$implicit; var ctx_r63 = ɵngcc0.ɵɵnextContext(3); return ctx_r63.dateDragEnter(segment_r59.date); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var segment_r59 = ctx.$implicit;
    var ctx_r58 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("height", ctx_r58.hourSegmentHeight, "px");
    ɵngcc0.ɵɵproperty("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
} }
function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var hour_r56 = ctx.$implicit;
    var odd_r57 = ctx.odd;
    var ctx_r36 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("cal-hour-odd", odd_r57);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵelement(1, "mwl-calendar-week-view-current-time-marker", 30);
    ɵngcc0.ɵɵelementStart(2, "div", 31);
    ɵngcc0.ɵɵtemplate(3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 45, "div", 32);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r34 = ctx.$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
} }
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
var _c24 = function (a0, a1, a2, a3, a4, a5) { return { days: a0, locale: a1, dayHeaderClicked: a2, eventDropped: a3, dragEnter: a4, trackByWeekDayHeaderDate: a5 }; };
var _c25 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var eventClicked_r5 = ctx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var eventClicked_r5 = ctx.eventClicked; return eventClicked_r5.emit({ sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelement(3, "mwl-calendar-event-actions", 3);
    ɵngcc0.ɵɵtext(4, " ");
    ɵngcc0.ɵɵelement(5, "mwl-calendar-event-title", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var weekEvent_r3 = ctx.weekEvent;
    var tooltipPlacement_r4 = ctx.tooltipPlacement;
    var tooltipTemplate_r6 = ctx.tooltipTemplate;
    var tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    var tooltipDisabled_r8 = ctx.tooltipDisabled;
    var tooltipDelay_r9 = ctx.tooltipDelay;
    var daysInWeek_r11 = ctx.daysInWeek;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(20, _c25, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? ɵngcc0.ɵɵpipeBind3(1, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 17, ɵngcc0.ɵɵpureFunction2(23, _c13, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
} }
function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) { }
var _c26 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { weekEvent: a0, tooltipPlacement: a1, eventClicked: a2, tooltipTemplate: a3, tooltipAppendToBody: a4, tooltipDisabled: a5, tooltipDelay: a6, column: a7, daysInWeek: a8 }; };
function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    var segment_r3 = ctx_r9.segment;
    var daysInWeek_r7 = ctx_r9.daysInWeek;
    var locale_r4 = ctx_r9.locale;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
} }
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var segment_r3 = ctx.segment;
    var segmentHeight_r5 = ctx.segmentHeight;
    var isTimeLabel_r6 = ctx.isTimeLabel;
    var daysInWeek_r7 = ctx.daysInWeek;
    ɵngcc0.ɵɵstyleProp("height", segmentHeight_r5, "px");
    ɵngcc0.ɵɵclassProp("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    ɵngcc0.ɵɵproperty("ngClass", segment_r3.cssClass);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(1, 9, ɵngcc0.ɵɵpureFunction0(12, _c2), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", isTimeLabel_r6);
} }
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) { }
var _c27 = function (a0, a1, a2, a3, a4) { return { segment: a0, locale: a1, segmentHeight: a2, isTimeLabel: a3, daysInWeek: a4 }; };
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    var topPx_r9 = ɵngcc0.ɵɵnextContext().topPx;
    ɵngcc0.ɵɵstyleProp("top", topPx_r9, "px");
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
} if (rf & 2) {
    var isVisible_r8 = ctx.isVisible;
    ɵngcc0.ɵɵproperty("ngIf", isVisible_r8);
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) { }
var _c28 = function (a0, a1, a2, a3, a4, a5, a6) { return { columnDate: a0, dayStartHour: a1, dayStartMinute: a2, dayEndHour: a3, dayEndMinute: a4, isVisible: a5, topPx: a6 }; };
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CalendarEventActionsComponent = /** @class */ (function () {
        function CalendarEventActionsComponent() {
            this.trackByActionId = function (index, action) {
                return action.id ? action.id : action;
            };
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarEventActionsComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) { return new (t || CalendarEventActionsComponent)(); };
CalendarEventActionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventActionsComponent, selectors: [["mwl-calendar-event-actions"]], inputs: { event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]], template: function CalendarEventActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx.event, ctx.trackByActionId));
    } }, directives: function () { return [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, ClickDirective, KeydownEnterDirective]; }, pipes: function () { return [CalendarA11yPipe]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventActionsComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-event-actions',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { event: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarEventActionsComponent;
    }());

    var CalendarEventTitleComponent = /** @class */ (function () {
        function CalendarEventTitleComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarEventTitleComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarEventTitleComponent.prototype, "view", void 0);
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) { return new (t || CalendarEventTitleComponent)(); };
CalendarEventTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventTitleComponent, selectors: [["mwl-calendar-event-title"]], inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]], template: function CalendarEventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c3, ctx.event, ctx.view));
    } }, directives: function () { return [ɵngcc1.NgTemplateOutlet]; }, pipes: function () { return [CalendarEventTitlePipe, CalendarA11yPipe]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitleComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-event-title',
                template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { event: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }], view: [{
            type: core.Input
        }] }); })();
        return CalendarEventTitleComponent;
    }());

    var CalendarTooltipWindowComponent = /** @class */ (function () {
        function CalendarTooltipWindowComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarTooltipWindowComponent.prototype, "event", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) { return new (t || CalendarTooltipWindowComponent)(); };
CalendarTooltipWindowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarTooltipWindowComponent, selectors: [["mwl-calendar-tooltip-window"]], inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]], template: function CalendarTooltipWindowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c4, ctx.contents, ctx.placement, ctx.event));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipWindowComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-tooltip-window',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { contents: [{
            type: core.Input
        }], placement: [{
            type: core.Input
        }], event: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarTooltipWindowComponent;
    }());
    var CalendarTooltipDirective = /** @class */ (function () {
        function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        ) {
            this.elementRef = elementRef;
            this.injector = injector;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.document = document;
            this.placement = 'auto'; // tslint:disable-line no-input-rename
            this.delay = null; // tslint:disable-line no-input-rename
            this.cancelTooltipDelay$ = new rxjs.Subject();
            this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
        }
        CalendarTooltipDirective.prototype.ngOnChanges = function (changes) {
            if (this.tooltipRef &&
                (changes.contents || changes.customTemplate || changes.event)) {
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                this.tooltipRef.changeDetectorRef.markForCheck();
                if (!this.contents) {
                    this.hide();
                }
            }
        };
        CalendarTooltipDirective.prototype.ngOnDestroy = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.onMouseOver = function () {
            var _this = this;
            var delay$ = this.delay === null ? rxjs.of('now') : rxjs.timer(this.delay);
            delay$.pipe(operators.takeUntil(this.cancelTooltipDelay$)).subscribe(function () {
                _this.show();
            });
        };
        CalendarTooltipDirective.prototype.onMouseOut = function () {
            this.hide();
        };
        CalendarTooltipDirective.prototype.show = function () {
            var _this = this;
            if (!this.tooltipRef && this.contents) {
                this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
                this.tooltipRef.instance.contents = this.contents;
                this.tooltipRef.instance.customTemplate = this.customTemplate;
                this.tooltipRef.instance.event = this.event;
                if (this.appendToBody) {
                    this.document.body.appendChild(this.tooltipRef.location.nativeElement);
                }
                requestAnimationFrame(function () {
                    _this.positionTooltip();
                });
            }
        };
        CalendarTooltipDirective.prototype.hide = function () {
            if (this.tooltipRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
                this.tooltipRef = null;
            }
            this.cancelTooltipDelay$.next();
        };
        CalendarTooltipDirective.prototype.positionTooltip = function (previousPositions) {
            if (previousPositions === void 0) { previousPositions = []; }
            if (this.tooltipRef) {
                this.tooltipRef.changeDetectorRef.detectChanges();
                this.tooltipRef.instance.placement = positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
                // keep re-positioning the tooltip until the arrow position doesn't make a difference
                if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                    this.positionTooltip(__spread(previousPositions, [
                        this.tooltipRef.instance.placement,
                    ]));
                }
            }
        };
        CalendarTooltipDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Injector },
            { type: core.Renderer2 },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        __decorate([
            core.Input('mwlCalendarTooltip'),
            __metadata("design:type", String)
        ], CalendarTooltipDirective.prototype, "contents", void 0);
        __decorate([
            core.Input('tooltipPlacement'),
            __metadata("design:type", Object)
        ], CalendarTooltipDirective.prototype, "placement", void 0);
        __decorate([
            core.Input('tooltipTemplate'),
            __metadata("design:type", core.TemplateRef)
        ], CalendarTooltipDirective.prototype, "customTemplate", void 0);
        __decorate([
            core.Input('tooltipEvent'),
            __metadata("design:type", Object)
        ], CalendarTooltipDirective.prototype, "event", void 0);
        __decorate([
            core.Input('tooltipAppendToBody'),
            __metadata("design:type", Boolean)
        ], CalendarTooltipDirective.prototype, "appendToBody", void 0);
        __decorate([
            core.Input('tooltipDelay'),
            __metadata("design:type", Number)
        ], CalendarTooltipDirective.prototype, "delay", void 0);
        __decorate([
            core.HostListener('mouseenter'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTooltipDirective.prototype, "onMouseOver", null);
        __decorate([
            core.HostListener('mouseleave'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTooltipDirective.prototype, "onMouseOut", null);
        CalendarTooltipDirective = __decorate([ __param(5, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Injector,
                core.Renderer2,
                core.ComponentFactoryResolver,
                core.ViewContainerRef, Object])
        ], CalendarTooltipDirective);
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) { return new (t || CalendarTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT)); };
CalendarTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTooltipDirective, selectors: [["", "mwlCalendarTooltip", ""]], hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { placement: ["tooltipPlacement", "placement"], delay: ["tooltipDelay", "delay"], contents: ["mwlCalendarTooltip", "contents"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlCalendarTooltip]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, { placement: [{
            type: core.Input,
            args: ['tooltipPlacement']
        }], delay: [{
            type: core.Input,
            args: ['tooltipDelay']
        }], onMouseOver: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseOut: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], contents: [{
            type: core.Input,
            args: ['mwlCalendarTooltip']
        }], customTemplate: [{
            type: core.Input,
            args: ['tooltipTemplate']
        }], event: [{
            type: core.Input,
            args: ['tooltipEvent']
        }], appendToBody: [{
            type: core.Input,
            args: ['tooltipAppendToBody']
        }] }); })();
        return CalendarTooltipDirective;
    }());

    var DateAdapter = /** @class */ (function () {
        function DateAdapter() {
        }
        return DateAdapter;
    }());


    (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
    })(exports.CalendarView || (exports.CalendarView = {}));

    var validateEvents = function (events) {
        var warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.warn.apply(console, __spread(['angular-calendar'], args));
        };
        return calendarUtils.validateEvents(events, warn);
    };
    function isInside(outer, inner) {
        return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
            Math.floor(inner.left) <= Math.ceil(outer.right) &&
            Math.floor(outer.left) <= Math.ceil(inner.right) &&
            Math.floor(inner.right) <= Math.ceil(outer.right) &&
            Math.floor(outer.top) <= Math.ceil(inner.top) &&
            Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
            Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
            Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
    }
    function roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
    }
    var trackByEventId = function (index, event) {
        return event.id ? event.id : event;
    };
    var trackByWeekDayHeaderDate = function (index, day) {
        return day.date.toISOString();
    };
    var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
    var trackByHour = function (index, hour) {
        return hour.segments[0].date.toISOString();
    };
    var trackByWeekAllDayEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var trackByWeekTimeEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
    var MINUTES_IN_HOUR = 60;
    function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
        return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    }
    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
        var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }
    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
        return (getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight);
    }
    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
            return event.end;
        }
        else {
            return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
    }
    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;
        while (daysToAdd <= Math.abs(days)) {
            result = changeDays(date, daysCounter);
            var day = dateAdapter.getDay(result);
            if (excluded.indexOf(day) === -1) {
                daysToAdd++;
            }
            daysCounter++;
        }
        return result;
    }
    function isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return ((period.start <= newStart && newStart <= period.end) ||
            (period.start <= end && end <= period.end));
    }
    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return (dropEvent.dropData &&
            dropEvent.dropData.event &&
            (dropEvent.dropData.calendarId !== calendarId ||
                (dropEvent.dropData.event.allDay && !allDay) ||
                (!dropEvent.dropData.event.allDay && allDay)));
    }
    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
        if (excluded === void 0) { excluded = []; }
        var viewStart = daysInWeek
            ? dateAdapter.startOfDay(viewDate)
            : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
            viewStart < endOfWeek) {
            viewStart = dateAdapter.addDays(viewStart, 1);
        }
        if (daysInWeek) {
            var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
        else {
            var viewEnd = endOfWeek;
            while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
                viewEnd > viewStart) {
                viewEnd = dateAdapter.subDays(viewEnd, 1);
            }
            return { viewStart: viewStart, viewEnd: viewEnd };
        }
    }
    function isWithinThreshold(_a) {
        var x = _a.x, y = _a.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }

    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */
    var CalendarPreviousViewDirective = /** @class */ (function () {
        function CalendarPreviousViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going back by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarPreviousViewDirective.prototype.onClick = function () {
            var subFn = {
                day: this.dateAdapter.subDays,
                week: this.dateAdapter.subWeeks,
                month: this.dateAdapter.subMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
        };
        CalendarPreviousViewDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarPreviousViewDirective.prototype, "view", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarPreviousViewDirective.prototype, "onClick", null);
        CalendarPreviousViewDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarPreviousViewDirective);
CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) { return new (t || CalendarPreviousViewDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarPreviousViewDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarPreviousViewDirective, selectors: [["", "mwlCalendarPreviousView", ""]], hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarPreviousViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarPreviousViewDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlCalendarPreviousView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: core.Input
        }], viewDateChange: [{
            type: core.Output
        }], onClick: [{
            type: core.HostListener,
            args: ['click']
        }], view: [{
            type: core.Input
        }], viewDate: [{
            type: core.Input
        }], daysInWeek: [{
            type: core.Input
        }] }); })();
        return CalendarPreviousViewDirective;
    }());

    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */
    var CalendarNextViewDirective = /** @class */ (function () {
        function CalendarNextViewDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Days to skip when going forward by 1 day
             */
            this.excludeDays = [];
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarNextViewDirective.prototype.onClick = function () {
            var addFn = {
                day: this.dateAdapter.addDays,
                week: this.dateAdapter.addWeeks,
                month: this.dateAdapter.addMonths,
            }[this.view];
            if (this.view === exports.CalendarView.Day) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            }
            else if (this.view === exports.CalendarView.Week && this.daysInWeek) {
                this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            }
            else {
                this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
        };
        CalendarNextViewDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarNextViewDirective.prototype, "view", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarNextViewDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarNextViewDirective.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarNextViewDirective.prototype, "onClick", null);
        CalendarNextViewDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarNextViewDirective);
CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) { return new (t || CalendarNextViewDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarNextViewDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarNextViewDirective, selectors: [["", "mwlCalendarNextView", ""]], hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarNextViewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarNextViewDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlCalendarNextView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: core.Input
        }], viewDateChange: [{
            type: core.Output
        }], onClick: [{
            type: core.HostListener,
            args: ['click']
        }], view: [{
            type: core.Input
        }], viewDate: [{
            type: core.Input
        }], daysInWeek: [{
            type: core.Input
        }] }); })();
        return CalendarNextViewDirective;
    }());

    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */
    var CalendarTodayDirective = /** @class */ (function () {
        function CalendarTodayDirective(dateAdapter) {
            this.dateAdapter = dateAdapter;
            /**
             * Called when the view date is changed
             */
            this.viewDateChange = new core.EventEmitter();
        }
        /**
         * @hidden
         */
        CalendarTodayDirective.prototype.onClick = function () {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        };
        CalendarTodayDirective.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarTodayDirective.prototype, "viewDate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarTodayDirective.prototype, "viewDateChange", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], CalendarTodayDirective.prototype, "onClick", null);
        CalendarTodayDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarTodayDirective);
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarTodayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarTodayDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTodayDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlCalendarToday]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { viewDateChange: [{
            type: core.Output
        }], onClick: [{
            type: core.HostListener,
            args: ['click']
        }], viewDate: [{
            type: core.Input
        }] }); })();
        return CalendarTodayDirective;
    }());

    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */
    var CalendarAngularDateFormatter = /** @class */ (function () {
        function CalendarAngularDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE', locale);
        };
        /**
         * The month view cell day number
         */
        CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'd', locale);
        };
        /**
         * The month view title
         */
        CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'LLLL y', locale);
        };
        /**
         * The week view header week day labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE', locale);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'MMM d', locale);
        };
        /**
         * The week view title
         */
        CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return common.formatDate(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarAngularDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'h a', locale);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'h a', locale);
        };
        /**
         * The day view title
         */
        CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE, MMMM d, y', locale);
        };
        CalendarAngularDateFormatter.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarAngularDateFormatter = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarAngularDateFormatter);
CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) { return new (t || CalendarAngularDateFormatter)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarAngularDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarAngularDateFormatter, factory: function (t) { return CalendarAngularDateFormatter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarAngularDateFormatter, [{
        type: core.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
        return CalendarAngularDateFormatter;
    }());

    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * @Injectable()
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */
    var CalendarDateFormatter = /** @class */ (function (_super) {
        __extends(CalendarDateFormatter, _super);
        function CalendarDateFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
CalendarDateFormatter.ɵfac = function CalendarDateFormatter_Factory(t) { return ɵCalendarDateFormatter_BaseFactory(t || CalendarDateFormatter); };
CalendarDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarDateFormatter, factory: function (t) { return CalendarDateFormatter.ɵfac(t); } });
var ɵCalendarDateFormatter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(CalendarDateFormatter);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDateFormatter, [{
        type: core.Injectable
    }], null, null); })();
        return CalendarDateFormatter;
    }(CalendarAngularDateFormatter));

    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */
    var CalendarDatePipe = /** @class */ (function () {
        function CalendarDatePipe(dateFormatter, locale) {
            this.dateFormatter = dateFormatter;
            this.locale = locale;
        }
        CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
            if (locale === void 0) { locale = this.locale; }
            if (weekStartsOn === void 0) { weekStartsOn = 0; }
            if (excludeDays === void 0) { excludeDays = []; }
            if (typeof this.dateFormatter[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
            }
            return this.dateFormatter[method]({
                date: date,
                locale: locale,
                weekStartsOn: weekStartsOn,
                excludeDays: excludeDays,
                daysInWeek: daysInWeek,
            });
        };
        CalendarDatePipe.ctorParameters = function () { return [
            { type: CalendarDateFormatter },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CalendarDatePipe = __decorate([ __param(1, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [CalendarDateFormatter, String])
        ], CalendarDatePipe);
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarDateFormatter), ɵngcc0.ɵɵdirectiveInject(core.LOCALE_ID)); };
CalendarDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarDate", type: CalendarDatePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDatePipe, [{
        type: core.Pipe,
        args: [{
                name: 'calendarDate'
            }]
    }], function () { return [{ type: CalendarDateFormatter }, { type: String, decorators: [{
                type: core.Inject,
                args: [core.LOCALE_ID]
            }] }]; }, null); })();
        return CalendarDatePipe;
    }());

    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { Injectable } from '@angular/core';
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * @Injectable()
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */
    var CalendarEventTitleFormatter = /** @class */ (function () {
        function CalendarEventTitleFormatter() {
        }
        /**
         * The month view event title.
         */
        CalendarEventTitleFormatter.prototype.month = function (event, title) {
            return event.title;
        };
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.monthTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The week view event title.
         */
        CalendarEventTitleFormatter.prototype.week = function (event, title) {
            return event.title;
        };
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.weekTooltip = function (event, title) {
            return event.title;
        };
        /**
         * The day view event title.
         */
        CalendarEventTitleFormatter.prototype.day = function (event, title) {
            return event.title;
        };
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         */
        CalendarEventTitleFormatter.prototype.dayTooltip = function (event, title) {
            return event.title;
        };
        return CalendarEventTitleFormatter;
    }());

    var CalendarEventTitlePipe = /** @class */ (function () {
        function CalendarEventTitlePipe(calendarEventTitle) {
            this.calendarEventTitle = calendarEventTitle;
        }
        CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
        };
        CalendarEventTitlePipe.ctorParameters = function () { return [
            { type: CalendarEventTitleFormatter }
        ]; };
        CalendarEventTitlePipe = __decorate([ __metadata("design:paramtypes", [CalendarEventTitleFormatter])
        ], CalendarEventTitlePipe);
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarEventTitleFormatter)); };
CalendarEventTitlePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitlePipe, [{
        type: core.Pipe,
        args: [{
                name: 'calendarEventTitle'
            }]
    }], function () { return [{ type: CalendarEventTitleFormatter }]; }, null); })();
        return CalendarEventTitlePipe;
    }());

    var ClickDirective = /** @class */ (function () {
        function ClickDirective(renderer, elm, document) {
            this.renderer = renderer;
            this.elm = elm;
            this.document = document;
            this.clickListenerDisabled = false;
            this.click = new core.EventEmitter(); // tslint:disable-line
            this.destroy$ = new rxjs.Subject();
        }
        ClickDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.clickListenerDisabled) {
                this.listen()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (event) {
                    event.stopPropagation();
                    _this.click.emit(event);
                });
            }
        };
        ClickDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        ClickDirective.prototype.listen = function () {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                return _this.renderer.listen(_this.elm.nativeElement, 'click', function (event) {
                    observer.next(event);
                });
            });
        };
        ClickDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ClickDirective.prototype, "clickListenerDisabled", void 0);
        __decorate([
            core.Output('mwlClick'),
            __metadata("design:type", Object)
        ], ClickDirective.prototype, "click", void 0);
        ClickDirective = __decorate([ __param(2, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [core.Renderer2,
                core.ElementRef, Object])
        ], ClickDirective);
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT)); };
ClickDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClickDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlClick]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, { clickListenerDisabled: [{
            type: core.Input
        }], click: [{
            type: core.Output,
            args: ['mwlClick']
        }] }); })();
        return ClickDirective;
    }());

    var KeydownEnterDirective = /** @class */ (function () {
        function KeydownEnterDirective() {
            this.keydown = new core.EventEmitter(); // tslint:disable-line
        }
        KeydownEnterDirective.prototype.onKeyPress = function (event) {
            if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                event.preventDefault();
                event.stopPropagation();
                this.keydown.emit(event);
            }
        };
        __decorate([
            core.Output('mwlKeydownEnter'),
            __metadata("design:type", Object)
        ], KeydownEnterDirective.prototype, "keydown", void 0);
        __decorate([
            core.HostListener('keydown', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], KeydownEnterDirective.prototype, "onKeyPress", null);
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(); };
KeydownEnterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) { return ctx.onKeyPress($event); });
    } }, outputs: { keydown: "mwlKeydownEnter" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeydownEnterDirective, [{
        type: core.Directive,
        args: [{
                selector: '[mwlKeydownEnter]'
            }]
    }], function () { return []; }, { keydown: [{
            type: core.Output,
            args: ['mwlKeydownEnter']
        }], onKeyPress: [{
            type: core.HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
        return KeydownEnterDirective;
    }());

    var CalendarUtils = /** @class */ (function () {
        function CalendarUtils(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        CalendarUtils.prototype.getMonthView = function (args) {
            return calendarUtils.getMonthView(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekViewHeader = function (args) {
            return calendarUtils.getWeekViewHeader(this.dateAdapter, args);
        };
        CalendarUtils.prototype.getWeekView = function (args) {
            return calendarUtils.getWeekView(this.dateAdapter, args);
        };
        CalendarUtils.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarUtils = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarUtils);
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarUtils.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarUtils, factory: function (t) { return CalendarUtils.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarUtils, [{
        type: core.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
        return CalendarUtils;
    }());

    /**
     * This class is responsible for adding accessibility to the calendar.
     * You may override any of its methods via angulars DI to suit your requirements.
     * For example:
     *
     * ```typescript
     * import { A11yParams, CalendarA11y } from 'angular-calendar';
     * import { formatDate, I18nPluralPipe } from '@angular/common';
     * import { Injectable } from '@angular/core';
     *
     * // adding your own a11y params
     * export interface CustomA11yParams extends A11yParams {
     *   isDrSuess?: boolean;
     * }
     *
     * @Injectable()
     * export class CustomCalendarA11y extends CalendarA11y {
     *   constructor(protected i18nPlural: I18nPluralPipe) {
     *     super(i18nPlural);
     *   }
     *
     *   // overriding a function
     *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
     *     if (isDrSuess) {
     *       return `
     *         ${formatDate(date, 'EEEE MMMM d', locale)}
     *          Today you are you! That is truer than true! There is no one alive
     *          who is you-er than you!
     *       `;
     *     }
     *   }
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *  provide: CalendarA11y,
     *  useClass: CustomCalendarA11y
     * }]
     * ```
     */
    var CalendarA11y = /** @class */ (function () {
        function CalendarA11y(i18nPlural) {
            this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */
        CalendarA11y.prototype.monthCell = function (_a) {
            var day = _a.day, locale = _a.locale;
            if (day.badgeTotal > 0) {
                return "\n        " + common.formatDate(day.date, 'EEEE MMMM d', locale) + ",\n        " + this.i18nPlural.transform(day.badgeTotal, {
                    '=0': 'No events',
                    '=1': 'One event',
                    other: '# events',
                }) + ",\n         click to expand\n      ";
            }
            else {
                return "" + common.formatDate(day.date, 'EEEE MMMM d', locale);
            }
        };
        /**
         * Aria label for the open day events start landmark
         * @example: `Saturday October 19 expanded view`
         */
        CalendarA11y.prototype.openDayEventsLandmark = function (_a) {
            var date = _a.date, locale = _a.locale;
            return "\n      Beginning of expanded view for " + common.formatDate(date, 'EEEE MMMM dd', locale) + "\n    ";
        };
        /**
         * Aria label for alert that a day in the month view was expanded
         * @example: `Saturday October 19 expanded`
         */
        CalendarA11y.prototype.openDayEventsAlert = function (_a) {
            var date = _a.date, locale = _a.locale;
            return common.formatDate(date, 'EEEE MMMM dd', locale) + " expanded";
        };
        /**
         * Descriptive aria label for an event
         * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
         */
        CalendarA11y.prototype.eventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            if (event.allDay === true) {
                return this.allDayEventDescription({ event: event, locale: locale });
            }
            var aria = "\n      " + common.formatDate(event.start, 'EEEE MMMM dd', locale) + ",\n      " + event.title + ", from " + common.formatDate(event.start, 'hh:mm a', locale) + "\n    ";
            if (event.end) {
                return aria + (" to " + common.formatDate(event.end, 'hh:mm a', locale));
            }
            return aria;
        };
        /**
         * Descriptive aria label for an all day event
         * @example:
         * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
         */
        CalendarA11y.prototype.allDayEventDescription = function (_a) {
            var event = _a.event, locale = _a.locale;
            var aria = "\n      " + event.title + ", event spans multiple days:\n      start time " + common.formatDate(event.start, 'MMMM dd hh:mm a', locale) + "\n    ";
            if (event.end) {
                return (aria + (", stop time " + common.formatDate(event.end, 'MMMM d hh:mm a', locale)));
            }
            return aria + ", no stop time";
        };
        /**
         * Aria label for the calendar event actions icons
         * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
         */
        CalendarA11y.prototype.actionButtonLabel = function (_a) {
            var action = _a.action;
            return action.a11yLabel;
        };
        /**
         * @returns {number} Tab index to be given to month cells
         */
        CalendarA11y.prototype.monthCellTabIndex = function () {
            return 0;
        };
        /**
         * @returns true if the events inside the month cell should be aria-hidden
         */
        CalendarA11y.prototype.hideMonthCellEvents = function () {
            return true;
        };
        /**
         * @returns true if event titles should be aria-hidden (global)
         */
        CalendarA11y.prototype.hideEventTitle = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the week view should be aria-hidden
         */
        CalendarA11y.prototype.hideWeekHourSegment = function () {
            return true;
        };
        /**
         * @returns true if hour segments in the day view should be aria-hidden
         */
        CalendarA11y.prototype.hideDayHourSegment = function () {
            return true;
        };
        CalendarA11y.ctorParameters = function () { return [
            { type: common.I18nPluralPipe }
        ]; };
        CalendarA11y = __decorate([ __metadata("design:paramtypes", [common.I18nPluralPipe])
        ], CalendarA11y);
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(ɵngcc0.ɵɵinject(ɵngcc1.I18nPluralPipe)); };
CalendarA11y.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarA11y, factory: function (t) { return CalendarA11y.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11y, [{
        type: core.Injectable
    }], function () { return [{ type: ɵngcc1.I18nPluralPipe }]; }, null); })();
        return CalendarA11y;
    }());

    /**
     * This pipe is primarily for rendering aria labels. Example usage:
     * ```typescript
     * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
     * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
     * ```
     */
    var CalendarA11yPipe = /** @class */ (function () {
        function CalendarA11yPipe(calendarA11y, locale) {
            this.calendarA11y = calendarA11y;
            this.locale = locale;
        }
        CalendarA11yPipe.prototype.transform = function (a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;
            if (typeof this.calendarA11y[method] === 'undefined') {
                var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
                throw new Error(method + " is not a valid a11y method. Can only be one of " + allowedMethods.join(', '));
            }
            return this.calendarA11y[method](a11yParams);
        };
        CalendarA11yPipe.ctorParameters = function () { return [
            { type: CalendarA11y },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        CalendarA11yPipe = __decorate([ __param(1, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [CalendarA11y, String])
        ], CalendarA11yPipe);
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) { return new (t || CalendarA11yPipe)(ɵngcc0.ɵɵdirectiveInject(CalendarA11y), ɵngcc0.ɵɵdirectiveInject(core.LOCALE_ID)); };
CalendarA11yPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarA11y", type: CalendarA11yPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11yPipe, [{
        type: core.Pipe,
        args: [{
                name: 'calendarA11y'
            }]
    }], function () { return [{ type: CalendarA11y }, { type: String, decorators: [{
                type: core.Inject,
                args: [core.LOCALE_ID]
            }] }]; }, null); })();
        return CalendarA11yPipe;
    }());

    var MOMENT = new core.InjectionToken('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */
    var CalendarMomentDateFormatter = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMomentDateFormatter(moment, dateAdapter) {
            this.moment = moment;
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The month view cell day number
         */
        CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('D');
        };
        /**
         * The month view title
         */
        CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
        };
        /**
         * The week view header week day labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd');
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('MMM D');
        };
        /**
         * The week view title
         */
        CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
            var _this = this;
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return _this.moment(dateToFormat)
                    .locale(locale)
                    .format('MMM D' + (showYear ? ', YYYY' : ''));
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarMomentDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('ha');
        };
        /**
         * The day view title
         */
        CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        };
        CalendarMomentDateFormatter.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MOMENT,] }] },
            { type: DateAdapter }
        ]; };
        CalendarMomentDateFormatter = __decorate([ __param(0, core.Inject(MOMENT)),
            __metadata("design:paramtypes", [Object, DateAdapter])
        ], CalendarMomentDateFormatter);
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) { return new (t || CalendarMomentDateFormatter)(ɵngcc0.ɵɵinject(MOMENT), ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarMomentDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarMomentDateFormatter, factory: function (t) { return CalendarMomentDateFormatter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMomentDateFormatter, [{
        type: core.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [MOMENT]
            }] }, { type: DateAdapter }]; }, null); })();
        return CalendarMomentDateFormatter;
    }());

    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */
    var CalendarNativeDateFormatter = /** @class */ (function () {
        function CalendarNativeDateFormatter(dateAdapter) {
            this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */
        CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The month view cell day number
         */
        CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
        };
        /**
         * The month view title
         */
        CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: 'long',
            }).format(date);
        };
        /**
         * The week view header week day labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
        };
        /**
         * The week view sub header day and month labels
         */
        CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
            }).format(date);
        };
        /**
         * The week view title
         */
        CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
            var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
            var format = function (dateToFormat, showYear) {
                return new Intl.DateTimeFormat(locale, {
                    day: 'numeric',
                    month: 'short',
                    year: showYear ? 'numeric' : undefined,
                }).format(dateToFormat);
            };
            return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
        };
        /**
         * The time formatting down the left hand side of the week view
         */
        CalendarNativeDateFormatter.prototype.weekViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The time formatting down the left hand side of the day view
         */
        CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
        };
        /**
         * The day view title
         */
        CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
            var date = _a.date, locale = _a.locale;
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                weekday: 'long',
            }).format(date);
        };
        CalendarNativeDateFormatter.ctorParameters = function () { return [
            { type: DateAdapter }
        ]; };
        CalendarNativeDateFormatter = __decorate([ __metadata("design:paramtypes", [DateAdapter])
        ], CalendarNativeDateFormatter);
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) { return new (t || CalendarNativeDateFormatter)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarNativeDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarNativeDateFormatter, factory: function (t) { return CalendarNativeDateFormatter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarNativeDateFormatter, [{
        type: core.Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
        return CalendarNativeDateFormatter;
    }());


    (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
    })(exports.CalendarEventTimesChangedEventType || (exports.CalendarEventTimesChangedEventType = {}));

    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    var CalendarCommonModule = /** @class */ (function () {
        function CalendarCommonModule() {
        }
        CalendarCommonModule_1 = CalendarCommonModule;
        CalendarCommonModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: CalendarCommonModule_1,
                providers: [
                    dateAdapter,
                    config.eventTitleFormatter || CalendarEventTitleFormatter,
                    config.dateFormatter || CalendarDateFormatter,
                    config.utils || CalendarUtils,
                    config.a11y || CalendarA11y,
                ],
            };
        };
        var CalendarCommonModule_1;
CalendarCommonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarCommonModule });
CalendarCommonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarCommonModule_Factory(t) { return new (t || CalendarCommonModule)(); }, providers: [common.I18nPluralPipe], imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarCommonModule, { declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective], imports: [ɵngcc1.CommonModule], exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarCommonModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                imports: [common.CommonModule],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective,
                ],
                providers: [common.I18nPluralPipe],
                entryComponents: [CalendarTooltipWindowComponent]
            }]
    }], function () { return []; }, null); })();
        return CalendarCommonModule;
    }());

    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */
    var CalendarMonthViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
            var _this = this;
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            /**
             * An array of events to display on view.
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * Whether the events list for the day of the `viewDate` option is visible or not
             */
            this.activeDayIsOpen = false;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * An output that will be called before the view is rendered for the current month.
             * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
             */
            this.beforeViewRender = new core.EventEmitter();
            /**
             * Called when the day cell is clicked
             */
            this.dayClicked = new core.EventEmitter();
            /**
             * Called when the event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when a header week day is clicked. Returns ISO day number.
             */
            this.columnHeaderClicked = new core.EventEmitter();
            /**
             * Called when an event is dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * @hidden
             */
            this.trackByRowOffset = function (index, offset) {
                return _this.view.days
                    .slice(offset, _this.view.totalDaysVisibleInWeek)
                    .map(function (day) { return day.date.toISOString(); })
                    .join('-');
            };
            /**
             * @hidden
             */
            this.trackByDate = function (index, day) { return day.date.toISOString(); };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.weekendDays;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
            if (changes.activeDayIsOpen ||
                changes.viewDate ||
                changes.events ||
                changes.excludeDays ||
                changes.activeDay) {
                this.checkActiveDayIsOpen();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
            this.view.days.forEach(function (day) {
                if (isHighlighted && day.events.indexOf(event) > -1) {
                    day.backgroundColor =
                        (event.color && event.color.secondary) || '#D1E8FF';
                }
                else {
                    delete day.backgroundColor;
                }
            });
        };
        /**
         * @hidden
         */
        CalendarMonthViewComponent.prototype.eventDropped = function (droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
                var year = this.dateAdapter.getYear(droppedOn.date);
                var month = this.dateAdapter.getMonth(droppedOn.date);
                var date = this.dateAdapter.getDate(droppedOn.date);
                var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
                var newEnd = void 0;
                if (event.end) {
                    var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                    newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
                }
                this.eventTimesChanged.emit({
                    event: event,
                    newStart: newStart,
                    newEnd: newEnd,
                    day: droppedOn,
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                });
            }
        };
        CalendarMonthViewComponent.prototype.refreshHeader = function () {
            this.columnHeaders = this.utils.getWeekViewHeader({
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.refreshBody = function () {
            this.view = this.utils.getMonthView({
                events: this.events,
                viewDate: this.viewDate,
                weekStartsOn: this.weekStartsOn,
                excluded: this.excludeDays,
                weekendDays: this.weekendDays,
            });
        };
        CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
            var _this = this;
            if (this.activeDayIsOpen === true) {
                var activeDay_1 = this.activeDay || this.viewDate;
                this.openDay = this.view.days.find(function (day) {
                    return _this.dateAdapter.isSameDay(day.date, activeDay_1);
                });
                var index = this.view.days.indexOf(this.openDay);
                this.openRowIndex =
                    Math.floor(index / this.view.totalDaysVisibleInWeek) *
                        this.view.totalDaysVisibleInWeek;
            }
            else {
                this.openRowIndex = null;
                this.openDay = null;
            }
        };
        CalendarMonthViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
        };
        CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.columnHeaders && this.view) {
                this.beforeViewRender.emit({
                    header: this.columnHeaders,
                    body: this.view.days,
                    period: this.view.period,
                });
            }
        };
        CalendarMonthViewComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: CalendarUtils },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarMonthViewComponent.prototype, "activeDay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarMonthViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
        CalendarMonthViewComponent = __decorate([ __param(2, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [core.ChangeDetectorRef,
                CalendarUtils, String, DateAdapter])
        ], CalendarMonthViewComponent);
CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) { return new (t || CalendarMonthViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(CalendarUtils), ɵngcc0.ɵɵdirectiveInject(core.LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarMonthViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewComponent, selectors: [["mwl-calendar-month-view"]], inputs: { events: "events", excludeDays: "excludeDays", activeDayIsOpen: "activeDayIsOpen", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", locale: "locale", viewDate: "viewDate", activeDay: "activeDay", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate", openDayEventsTemplate: "openDayEventsTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays" }, outputs: { beforeViewRender: "beforeViewRender", dayClicked: "dayClicked", eventClicked: "eventClicked", columnHeaderClicked: "columnHeaderClicked", eventTimesChanged: "eventTimesChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]], template: function CalendarMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mwl-calendar-month-view-header", 1);
        ɵngcc0.ɵɵlistener("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) { return ctx.columnHeaderClicked.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    } }, directives: function () { return [CalendarMonthViewHeaderComponent, ɵngcc1.NgForOf, CalendarOpenDayEventsComponent, ɵngcc2.ɵa, CalendarMonthCellComponent, ɵngcc1.NgClass, ɵngcc1.NgStyle, ClickDirective, KeydownEnterDirective]; }, pipes: function () { return [ɵngcc1.SlicePipe, CalendarA11yPipe]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-month-view',
                template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: core.Inject,
                args: [core.LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: core.Input
        }], excludeDays: [{
            type: core.Input
        }], activeDayIsOpen: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], tooltipAppendToBody: [{
            type: core.Input
        }], tooltipDelay: [{
            type: core.Input
        }], beforeViewRender: [{
            type: core.Output
        }], dayClicked: [{
            type: core.Output
        }], eventClicked: [{
            type: core.Output
        }], columnHeaderClicked: [{
            type: core.Output
        }], eventTimesChanged: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], viewDate: [{
            type: core.Input
        }], activeDay: [{
            type: core.Input
        }], refresh: [{
            type: core.Input
        }], tooltipTemplate: [{
            type: core.Input
        }], weekStartsOn: [{
            type: core.Input
        }], headerTemplate: [{
            type: core.Input
        }], cellTemplate: [{
            type: core.Input
        }], openDayEventsTemplate: [{
            type: core.Input
        }], eventTitleTemplate: [{
            type: core.Input
        }], eventActionsTemplate: [{
            type: core.Input
        }], weekendDays: [{
            type: core.Input
        }] }); })();
        return CalendarMonthViewComponent;
    }());

    var CalendarMonthViewHeaderComponent = /** @class */ (function () {
        function CalendarMonthViewHeaderComponent() {
            this.columnHeaderClicked = new core.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgClass], pipes: [CalendarDatePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewHeaderComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { columnHeaderClicked: [{
            type: core.Output
        }], days: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarMonthViewHeaderComponent;
    }());

    var CalendarMonthCellComponent = /** @class */ (function () {
        function CalendarMonthCellComponent() {
            this.highlightDay = new core.EventEmitter();
            this.unhighlightDay = new core.EventEmitter();
            this.eventClicked = new core.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "day", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "openDay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarMonthCellComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
        __decorate([
            core.Output(),
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
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c11, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgStyle, ɵngcc1.NgClass, CalendarTooltipDirective, ClickDirective], pipes: [CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthCellComponent, [{
        type: core.Component,
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
            type: core.Output
        }], unhighlightDay: [{
            type: core.Output
        }], eventClicked: [{
            type: core.Output
        }], day: [{
            type: core.Input
        }], openDay: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], tooltipAppendToBody: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }], tooltipTemplate: [{
            type: core.Input
        }], tooltipDelay: [{
            type: core.Input
        }] }); })();
        return CalendarMonthCellComponent;
    }());

    var collapseAnimation = animations.trigger('collapse', [
        animations.state('void', animations.style({
            height: 0,
            overflow: 'hidden',
            'padding-top': 0,
            'padding-bottom': 0,
        })),
        animations.state('*', animations.style({
            height: '*',
            overflow: 'hidden',
            'padding-top': '*',
            'padding-bottom': '*',
        })),
        animations.transition('* => void', animations.animate('150ms ease-out')),
        animations.transition('void => *', animations.animate('150ms ease-in')),
    ]);
    var CalendarOpenDayEventsComponent = /** @class */ (function () {
        function CalendarOpenDayEventsComponent() {
            this.isOpen = false;
            this.eventClicked = new core.EventEmitter();
            this.trackByEventId = trackByEventId;
            this.validateDrag = isWithinThreshold;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarOpenDayEventsComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarOpenDayEventsComponent.prototype, "date", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) { return new (t || CalendarOpenDayEventsComponent)(); };
CalendarOpenDayEventsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarOpenDayEventsComponent, selectors: [["mwl-calendar-open-day-events"]], inputs: { isOpen: "isOpen", locale: "locale", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]], template: function CalendarOpenDayEventsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c15, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgClass, ɵngcc1.NgStyle, CalendarEventTitleComponent, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent], pipes: [CalendarA11yPipe], encapsulation: 2, data: { animation: [collapseAnimation] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarOpenDayEventsComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-open-day-events',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
                animations: [collapseAnimation]
            }]
    }], function () { return []; }, { isOpen: [{
            type: core.Input
        }], eventClicked: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], events: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }], eventTitleTemplate: [{
            type: core.Input
        }], eventActionsTemplate: [{
            type: core.Input
        }], date: [{
            type: core.Input
        }] }); })();
        return CalendarOpenDayEventsComponent;
    }());

    var CalendarMonthModule = /** @class */ (function () {
        function CalendarMonthModule() {
        }
CalendarMonthModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarMonthModule });
CalendarMonthModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarMonthModule_Factory(t) { return new (t || CalendarMonthModule)(); }, imports: [[common.CommonModule, angularDraggableDroppable.DragAndDropModule, CalendarCommonModule], ɵngcc2.DragAndDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarMonthModule, { declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent], imports: [ɵngcc1.CommonModule, ɵngcc2.DragAndDropModule, CalendarCommonModule], exports: [ɵngcc2.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, angularDraggableDroppable.DragAndDropModule, CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ],
                exports: [
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent,
                ]
            }]
    }], function () { return []; }, null); })();
        return CalendarMonthModule;
    }());

    var CalendarDragHelper = /** @class */ (function () {
        function CalendarDragHelper(dragContainerElement, draggableElement) {
            this.dragContainerElement = dragContainerElement;
            this.startPosition = draggableElement.getBoundingClientRect();
        }
        CalendarDragHelper.prototype.validateDrag = function (_a) {
            var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
            if (snapDraggedEvents) {
                var newRect = Object.assign({}, this.startPosition, {
                    left: this.startPosition.left + transform.x,
                    right: this.startPosition.right + transform.x,
                    top: this.startPosition.top + transform.y,
                    bottom: this.startPosition.bottom + transform.y,
                });
                return ((isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved) &&
                    isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
            }
            else {
                return isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
            }
        };
        return CalendarDragHelper;
    }());

    var CalendarResizeHelper = /** @class */ (function () {
        function CalendarResizeHelper(resizeContainerElement, minWidth) {
            this.resizeContainerElement = resizeContainerElement;
            this.minWidth = minWidth;
        }
        CalendarResizeHelper.prototype.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            if (this.minWidth &&
                Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
                return false;
            }
            return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        };
        return CalendarResizeHelper;
    }());

    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */
    var CalendarWeekViewComponent = /** @class */ (function () {
        /**
         * @hidden
         */
        function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
            this.cdr = cdr;
            this.utils = utils;
            this.dateAdapter = dateAdapter;
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
             */
            this.excludeDays = [];
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * The precision to display events.
             * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
             */
            this.precision = 'days';
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * The number of segments in an hour. Must be <= 6
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
             */
            this.dayHeaderClicked = new core.EventEmitter();
            /**
             * Called when the event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current week.
             * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
             */
            this.beforeViewRender = new core.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new core.EventEmitter();
            /**
             * @hidden
             */
            this.allDayEventResizes = new Map();
            /**
             * @hidden
             */
            this.timeEventResizes = new Map();
            /**
             * @hidden
             */
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            /**
             * @hidden
             */
            this.dragActive = false;
            /**
             * @hidden
             */
            this.dragAlreadyMoved = false;
            /**
             * @hidden
             */
            this.calendarId = Symbol('angular calendar week view id');
            /**
             * @hidden
             */
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
            /**
             * @hidden
             */
            this.trackByHourSegment = trackByHourSegment;
            /**
             * @hidden
             */
            this.trackByHour = trackByHour;
            /**
             * @hidden
             */
            this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
            /**
             * @hidden
             */
            this.trackByWeekTimeEvent = trackByWeekTimeEvent;
            /**
             * @hidden
             */
            this.trackByHourColumn = function (index, column) {
                return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
            };
            /**
             * @hidden
             */
            this.trackById = function (index, row) { return row.id; };
            this.locale = locale;
        }
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.refresh) {
                this.refreshSubscription = this.refresh.subscribe(function () {
                    _this.refreshAll();
                    _this.cdr.markForCheck();
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
            var refreshHeader = changes.viewDate ||
                changes.excludeDays ||
                changes.weekendDays ||
                changes.daysInWeek ||
                changes.weekStartsOn;
            var refreshBody = changes.viewDate ||
                changes.dayStartHour ||
                changes.dayStartMinute ||
                changes.dayEndHour ||
                changes.dayEndMinute ||
                changes.hourSegments ||
                changes.weekStartsOn ||
                changes.weekendDays ||
                changes.excludeDays ||
                changes.hourSegmentHeight ||
                changes.events ||
                changes.daysInWeek;
            if (refreshHeader) {
                this.refreshHeader();
            }
            if (changes.events) {
                validateEvents(this.events);
            }
            if (refreshBody) {
                this.refreshBody();
            }
            if (refreshHeader || refreshBody) {
                this.emitBeforeViewRender();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
            if (this.refreshSubscription) {
                this.refreshSubscription.unsubscribe();
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
            var _this = this;
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();
            var tempEvents = __spread(this.events);
            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
                var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
                var adjustedEvent = __assign(__assign({}, event), newEventDates);
                adjustedEvents.set(adjustedEvent, event);
                var eventIndex = tempEvents.indexOf(event);
                tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
            if (lastResizeEvent) {
                this.timeEventResizes.delete(timeEvent.event);
                var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
                this.eventTimesChanged.emit({
                    newStart: newEventDates.start,
                    newEnd: newEventDates.end,
                    event: timeEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
                originalOffset: allDayEvent.offset,
                originalSpan: allDayEvent.span,
                edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right',
            });
            this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.left / dayWidth);
                allDayEvent.offset = currentResize.originalOffset + diff;
                allDayEvent.span = currentResize.originalSpan - diff;
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var diff = Math.round(+resizeEvent.edges.right / dayWidth);
                allDayEvent.span = currentResize.originalSpan + diff;
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);
            if (currentResize) {
                var allDayEventResizingBeforeStart = currentResize.edge === 'left';
                var daysDiff = void 0;
                if (allDayEventResizingBeforeStart) {
                    daysDiff = allDayEvent.offset - currentResize.originalOffset;
                }
                else {
                    daysDiff = allDayEvent.span - currentResize.originalSpan;
                }
                allDayEvent.offset = currentResize.originalOffset;
                allDayEvent.span = currentResize.originalSpan;
                var newStart = allDayEvent.event.start;
                var newEnd = allDayEvent.event.end || allDayEvent.event.start;
                if (allDayEventResizingBeforeStart) {
                    newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
                }
                else {
                    newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
                }
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: allDayEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Resize,
                });
                this.allDayEventResizes.delete(allDayEvent);
            }
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dateDragEnter = function (date) {
            this.lastDragEnterDate = date;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
                this.lastDragEnterDate.getTime() === date.getTime() &&
                (!this.snapDraggedEvents ||
                    dropEvent.dropData.event !== this.lastDraggedEvent)) {
                this.eventTimesChanged.emit({
                    type: exports.CalendarEventTimesChangedEventType.Drop,
                    event: dropEvent.dropData.event,
                    newStart: date,
                    allDay: allDay,
                });
            }
            this.lastDraggedEvent = null;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnter = function (type) {
            this.eventDragEnterByType[type]++;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragLeave = function (type) {
            this.eventDragEnterByType[type]--;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragStarted = function (eventsContainer, event, dayEvent) {
            var _this = this;
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var dragHelper = new CalendarDragHelper(eventsContainer, event);
            this.validateDrag = function (_a) {
                var x = _a.x, y = _a.y, transform = _a.transform;
                return _this.allDayEventResizes.size === 0 &&
                    _this.timeEventResizes.size === 0 &&
                    dragHelper.validateDrag({
                        x: x,
                        y: y,
                        snapDraggedEvents: _this.snapDraggedEvents,
                        dragAlreadyMoved: _this.dragAlreadyMoved,
                        transform: transform,
                    });
            };
            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
                allDay: 0,
                time: 0,
            };
            if (!this.snapDraggedEvents && dayEvent) {
                this.view.hourColumns.forEach(function (column) {
                    var linkedEvent = column.events.find(function (columnEvent) {
                        return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                    });
                    // hide any linked events while dragging
                    if (linkedEvent) {
                        linkedEvent.width = 0;
                        linkedEvent.height = 0;
                    }
                });
            }
            this.cdr.markForCheck();
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = __assign(__assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                    return adjustedEvent;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.allDayEventDragMove = function () {
            this.dragAlreadyMoved = true;
        };
        /**
         * @hidden
         */
        CalendarWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
            if (useY === void 0) { useY = false; }
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;
            var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
            if ((this.snapDraggedEvents ||
                this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) &&
                isDraggedWithinPeriod(start, end, this.view.period)) {
                this.lastDraggedEvent = weekEvent.event;
                this.eventTimesChanged.emit({
                    newStart: start,
                    newEnd: end,
                    event: weekEvent.event,
                    type: exports.CalendarEventTimesChangedEventType.Drag,
                    allDay: !useY,
                });
            }
        };
        CalendarWeekViewComponent.prototype.refreshHeader = function () {
            this.days = this.utils.getWeekViewHeader(__assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.refreshBody = function () {
            this.view = this.getWeekView(this.events);
        };
        CalendarWeekViewComponent.prototype.refreshAll = function () {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
        };
        CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
            if (this.days && this.view) {
                this.beforeViewRender.emit(__assign({ header: this.days }, this.view));
            }
        };
        CalendarWeekViewComponent.prototype.getWeekView = function (events) {
            return this.utils.getWeekView(__assign({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                    hour: this.dayStartHour,
                    minute: this.dayStartMinute,
                }, dayEnd: {
                    hour: this.dayEndHour,
                    minute: this.dayEndMinute,
                }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        };
        CalendarWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
            var minutesMoved = useY
                ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
                : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;
            if (weekEvent.event.end) {
                end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }
            return { start: start, end: end };
        };
        CalendarWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents, snapDraggedEvents) {
            if (snapDraggedEvents === void 0) { snapDraggedEvents = true; }
            var previousView = this.view;
            this.view = this.getWeekView(tempEvents);
            var adjustedEventsArray = tempEvents.filter(function (event) {
                return adjustedEvents.has(event);
            });
            this.view.hourColumns.forEach(function (column, columnIndex) {
                previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                    hour.segments.forEach(function (segment, segmentIndex) {
                        column.hours[hourIndex].segments[segmentIndex].cssClass =
                            segment.cssClass;
                    });
                });
                adjustedEventsArray.forEach(function (adjustedEvent) {
                    var originalEvent = adjustedEvents.get(adjustedEvent);
                    var existingColumnEvent = column.events.find(function (columnEvent) { return columnEvent.event === adjustedEvent; });
                    if (existingColumnEvent) {
                        // restore the original event so trackBy kicks in and the dom isn't changed
                        existingColumnEvent.event = originalEvent;
                        existingColumnEvent['tempEvent'] = adjustedEvent;
                        if (!snapDraggedEvents) {
                            existingColumnEvent.height = 0;
                            existingColumnEvent.width = 0;
                        }
                    }
                    else {
                        // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                        var event_1 = {
                            event: originalEvent,
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0,
                            startsBeforeDay: false,
                            endsAfterDay: false,
                            tempEvent: adjustedEvent,
                        };
                        column.events.push(event_1);
                    }
                });
            });
            adjustedEvents.clear();
        };
        CalendarWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
            var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
            var newEventDates = {
                start: calendarEvent.start,
                end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight),
            };
            var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
            var smallestResizes = {
                start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
                end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight),
            };
            if (typeof resizeEvent.edges.left !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
                var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.right !== 'undefined') {
                var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
                var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            if (typeof resizeEvent.edges.top !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
                var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
                if (newStart < smallestResizes.start) {
                    newEventDates.start = newStart;
                }
                else {
                    newEventDates.start = smallestResizes.start;
                }
            }
            else if (typeof resizeEvent.edges.bottom !== 'undefined') {
                var minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
                var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
                if (newEnd > smallestResizes.end) {
                    newEventDates.end = newEnd;
                }
                else {
                    newEventDates.end = smallestResizes.end;
                }
            }
            return newEventDates;
        };
        CalendarWeekViewComponent.prototype.resizeStarted = function (eventsContainer, minWidth) {
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
            this.validateResize = function (_a) {
                var rectangle = _a.rectangle;
                return resizeHelper.validateResize({ rectangle: rectangle });
            };
            this.cdr.markForCheck();
        };
        CalendarWeekViewComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: CalendarUtils },
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
            { type: DateAdapter }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarWeekViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewComponent.prototype, "precision", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
        CalendarWeekViewComponent = __decorate([ __param(2, core.Inject(core.LOCALE_ID)),
            __metadata("design:paramtypes", [core.ChangeDetectorRef,
                CalendarUtils, String, DateAdapter])
        ], CalendarWeekViewComponent);
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) { return new (t || CalendarWeekViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(CalendarUtils), ɵngcc0.ɵɵdirectiveInject(core.LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarWeekViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewComponent, selectors: [["mwl-calendar-week-view"]], inputs: { events: "events", excludeDays: "excludeDays", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", precision: "precision", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", locale: "locale", viewDate: "viewDate", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 9, consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mwl-calendar-week-view-header", 1);
        ɵngcc0.ɵɵlistener("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) { return ctx.dayHeaderClicked.emit($event); })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) { return ctx.eventDropped({ dropData: $event }, $event.newStart, true); })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) { return ctx.dateDragEnter($event.date); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵlistener("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() { return ctx.dragEnter("time"); })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() { return ctx.dragLeave("time"); });
        ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5, 6);
        ɵngcc0.ɵɵtemplate(7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.view.allDayEventRows.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("cal-resize-active", ctx.timeEventResizes.size > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    } }, directives: function () { return [CalendarWeekViewHeaderComponent, ɵngcc1.NgIf, ɵngcc2.ɵa, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.ResizableDirective, ɵngcc2.ɵb, ɵngcc1.NgClass, CalendarWeekViewEventComponent, ɵngcc3.ResizeHandleDirective, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, ClickDirective]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: core.Inject,
                args: [core.LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: core.Input
        }], excludeDays: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], tooltipAppendToBody: [{
            type: core.Input
        }], tooltipDelay: [{
            type: core.Input
        }], precision: [{
            type: core.Input
        }], snapDraggedEvents: [{
            type: core.Input
        }], hourSegments: [{
            type: core.Input
        }], hourSegmentHeight: [{
            type: core.Input
        }], dayStartHour: [{
            type: core.Input
        }], dayStartMinute: [{
            type: core.Input
        }], dayEndHour: [{
            type: core.Input
        }], dayEndMinute: [{
            type: core.Input
        }], dayHeaderClicked: [{
            type: core.Output
        }], eventClicked: [{
            type: core.Output
        }], eventTimesChanged: [{
            type: core.Output
        }], beforeViewRender: [{
            type: core.Output
        }], hourSegmentClicked: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], viewDate: [{
            type: core.Input
        }], refresh: [{
            type: core.Input
        }], tooltipTemplate: [{
            type: core.Input
        }], weekStartsOn: [{
            type: core.Input
        }], headerTemplate: [{
            type: core.Input
        }], eventTemplate: [{
            type: core.Input
        }], eventTitleTemplate: [{
            type: core.Input
        }], eventActionsTemplate: [{
            type: core.Input
        }], weekendDays: [{
            type: core.Input
        }], hourSegmentTemplate: [{
            type: core.Input
        }], eventSnapSize: [{
            type: core.Input
        }], allDayEventsLabelTemplate: [{
            type: core.Input
        }], daysInWeek: [{
            type: core.Input
        }], currentTimeMarkerTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarWeekViewComponent;
    }());

    var CalendarWeekViewHeaderComponent = /** @class */ (function () {
        function CalendarWeekViewHeaderComponent() {
            this.dayHeaderClicked = new core.EventEmitter();
            this.eventDropped = new core.EventEmitter();
            this.dragEnter = new core.EventEmitter();
            this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) { return new (t || CalendarWeekViewHeaderComponent)(); };
CalendarWeekViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHeaderComponent, selectors: [["mwl-calendar-week-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, decls: 3, vars: 9, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction6(2, _c24, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc2.ɵa, ɵngcc1.NgClass, ClickDirective], pipes: [CalendarDatePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHeaderComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { dayHeaderClicked: [{
            type: core.Output
        }], eventDropped: [{
            type: core.Output
        }], dragEnter: [{
            type: core.Output
        }], days: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarWeekViewHeaderComponent;
    }());

    var CalendarWeekViewEventComponent = /** @class */ (function () {
        function CalendarWeekViewEventComponent() {
            this.eventClicked = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewEventComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "column", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) { return new (t || CalendarWeekViewEventComponent)(); };
CalendarWeekViewEventComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewEventComponent, selectors: [["mwl-calendar-week-view-event"]], inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 12, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]], template: function CalendarWeekViewEventComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c26, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, CalendarEventActionsComponent, CalendarEventTitleComponent], pipes: [CalendarEventTitlePipe, CalendarA11yPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewEventComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-week-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { eventClicked: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], weekEvent: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], tooltipAppendToBody: [{
            type: core.Input
        }], tooltipDisabled: [{
            type: core.Input
        }], tooltipDelay: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }], eventTitleTemplate: [{
            type: core.Input
        }], eventActionsTemplate: [{
            type: core.Input
        }], tooltipTemplate: [{
            type: core.Input
        }], column: [{
            type: core.Input
        }], daysInWeek: [{
            type: core.Input
        }] }); })();
        return CalendarWeekViewEventComponent;
    }());

    var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
        function CalendarWeekViewHourSegmentComponent() {
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) { return new (t || CalendarWeekViewHourSegmentComponent)(); };
CalendarWeekViewHourSegmentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHourSegmentComponent, selectors: [["mwl-calendar-week-view-hour-segment"]], inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c27, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass, ɵngcc1.NgIf], pipes: [CalendarA11yPipe, CalendarDatePipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHourSegmentComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-week-view-hour-segment',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { segment: [{
            type: core.Input
        }], segmentHeight: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], isTimeLabel: [{
            type: core.Input
        }], daysInWeek: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarWeekViewHourSegmentComponent;
    }());

    var CalendarWeekViewCurrentTimeMarkerComponent = /** @class */ (function () {
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
            var _this = this;
            this.dateAdapter = dateAdapter;
            this.zone = zone;
            this.columnDate$ = new rxjs.BehaviorSubject(this.columnDate);
            this.marker$ = this.zone.onStable.pipe(operators.switchMap(function () { return rxjs.interval(60 * 1000); }), operators.startWith(0), operators.switchMapTo(this.columnDate$), operators.map(function (columnDate) {
                var startOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayStartHour), _this.dayStartMinute);
                var endOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayEndHour), _this.dayEndMinute);
                var hourHeightModifier = (_this.hourSegments * _this.hourSegmentHeight) / 60;
                var now = new Date();
                return {
                    isVisible: _this.dateAdapter.isSameDay(columnDate, now) &&
                        now >= startOfDay &&
                        now <= endOfDay,
                    top: _this.dateAdapter.differenceInMinutes(now, startOfDay) *
                        hourHeightModifier,
                };
            }));
        }
        CalendarWeekViewCurrentTimeMarkerComponent.prototype.ngOnChanges = function (changes) {
            if (changes.columnDate) {
                this.columnDate$.next(changes.columnDate.currentValue);
            }
        };
        CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () { return [
            { type: DateAdapter },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
        CalendarWeekViewCurrentTimeMarkerComponent = __decorate([ __metadata("design:paramtypes", [DateAdapter, core.NgZone])
        ], CalendarWeekViewCurrentTimeMarkerComponent);
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) { return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(ɵngcc0.ɵɵdirectiveInject(DateAdapter), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewCurrentTimeMarkerComponent, selectors: [["mwl-calendar-week-view-current-time-marker"]], inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 14, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]], template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵpipe(4, "async");
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        var tmp_1_0 = null;
        var currVal_1 = ɵngcc0.ɵɵpureFunction7(6, _c28, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(4, 4, ctx.marker$)) == null ? null : tmp_1_0.top);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", currVal_1);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], pipes: [ɵngcc1.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-week-view-current-time-marker',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return [{ type: DateAdapter }, { type: ɵngcc0.NgZone }]; }, { columnDate: [{
            type: core.Input
        }], dayStartHour: [{
            type: core.Input
        }], dayStartMinute: [{
            type: core.Input
        }], dayEndHour: [{
            type: core.Input
        }], dayEndMinute: [{
            type: core.Input
        }], hourSegments: [{
            type: core.Input
        }], hourSegmentHeight: [{
            type: core.Input
        }], customTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarWeekViewCurrentTimeMarkerComponent;
    }());

    var CalendarWeekModule = /** @class */ (function () {
        function CalendarWeekModule() {
        }
CalendarWeekModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarWeekModule });
CalendarWeekModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarWeekModule_Factory(t) { return new (t || CalendarWeekModule)(); }, imports: [[
            common.CommonModule,
            angularResizableElement.ResizableModule,
            angularDraggableDroppable.DragAndDropModule,
            CalendarCommonModule,
        ], ɵngcc3.ResizableModule, ɵngcc2.DragAndDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarWeekModule, { declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent], imports: [ɵngcc1.CommonModule, ɵngcc3.ResizableModule, ɵngcc2.DragAndDropModule, CalendarCommonModule], exports: [ɵngcc3.ResizableModule, ɵngcc2.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarCommonModule,
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ],
                exports: [
                    angularResizableElement.ResizableModule,
                    angularDraggableDroppable.DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ]
            }]
    }], function () { return []; }, null); })();
        return CalendarWeekModule;
    }());

    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    var CalendarDayViewComponent = /** @class */ (function () {
        function CalendarDayViewComponent() {
            /**
             * An array of events to display on view
             * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
             */
            this.events = [];
            /**
             * The number of segments in an hour. Must be <= 6
             */
            this.hourSegments = 2;
            /**
             * The height in pixels of each hour segment
             */
            this.hourSegmentHeight = 30;
            /**
             * The day start hours in 24 hour time. Must be 0-23
             */
            this.dayStartHour = 0;
            /**
             * The day start minutes. Must be 0-59
             */
            this.dayStartMinute = 0;
            /**
             * The day end hours in 24 hour time. Must be 0-23
             */
            this.dayEndHour = 23;
            /**
             * The day end minutes. Must be 0-59
             */
            this.dayEndMinute = 59;
            /**
             * The placement of the event tooltip
             */
            this.tooltipPlacement = 'auto';
            /**
             * Whether to append tooltips to the body or next to the trigger element
             */
            this.tooltipAppendToBody = true;
            /**
             * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
             * will be displayed immediately.
             */
            this.tooltipDelay = null;
            /**
             * Whether to snap events to a grid when dragging
             */
            this.snapDraggedEvents = true;
            /**
             * Called when an event title is clicked
             */
            this.eventClicked = new core.EventEmitter();
            /**
             * Called when an hour segment is clicked
             */
            this.hourSegmentClicked = new core.EventEmitter();
            /**
             * Called when an event is resized or dragged and dropped
             */
            this.eventTimesChanged = new core.EventEmitter();
            /**
             * An output that will be called before the view is rendered for the current day.
             * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
             */
            this.beforeViewRender = new core.EventEmitter();
        }
        __decorate([
            core.Input(),
            __metadata("design:type", Date)
        ], CalendarDayViewComponent.prototype, "viewDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], CalendarDayViewComponent.prototype, "events", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", rxjs.Subject)
        ], CalendarDayViewComponent.prototype, "refresh", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], CalendarDayViewComponent.prototype, "locale", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", core.TemplateRef)
        ], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", snapDraggedEvents: "snapDraggedEvents", viewDate: "viewDate", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipTemplate: "tooltipTemplate", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 1, vars: 23, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view", 0);
        ɵngcc0.ɵɵlistener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) { return ctx.beforeViewRender.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    } }, directives: [CalendarWeekViewComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayViewComponent, [{
        type: core.Component,
        args: [{
                selector: 'mwl-calendar-day-view',
                template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
            }]
    }], function () { return []; }, { events: [{
            type: core.Input
        }], hourSegments: [{
            type: core.Input
        }], hourSegmentHeight: [{
            type: core.Input
        }], dayStartHour: [{
            type: core.Input
        }], dayStartMinute: [{
            type: core.Input
        }], dayEndHour: [{
            type: core.Input
        }], dayEndMinute: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], tooltipAppendToBody: [{
            type: core.Input
        }], tooltipDelay: [{
            type: core.Input
        }], snapDraggedEvents: [{
            type: core.Input
        }], eventClicked: [{
            type: core.Output
        }], hourSegmentClicked: [{
            type: core.Output
        }], eventTimesChanged: [{
            type: core.Output
        }], beforeViewRender: [{
            type: core.Output
        }], viewDate: [{
            type: core.Input
        }], refresh: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], eventSnapSize: [{
            type: core.Input
        }], tooltipTemplate: [{
            type: core.Input
        }], hourSegmentTemplate: [{
            type: core.Input
        }], eventTemplate: [{
            type: core.Input
        }], eventTitleTemplate: [{
            type: core.Input
        }], eventActionsTemplate: [{
            type: core.Input
        }], allDayEventsLabelTemplate: [{
            type: core.Input
        }], currentTimeMarkerTemplate: [{
            type: core.Input
        }] }); })();
        return CalendarDayViewComponent;
    }());

    var CalendarDayModule = /** @class */ (function () {
        function CalendarDayModule() {
        }
CalendarDayModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarDayModule });
CalendarDayModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarDayModule_Factory(t) { return new (t || CalendarDayModule)(); }, imports: [[common.CommonModule, CalendarCommonModule, CalendarWeekModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarDayModule, { declarations: [CalendarDayViewComponent], imports: [ɵngcc1.CommonModule, CalendarCommonModule, CalendarWeekModule], exports: [CalendarDayViewComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, CalendarCommonModule, CalendarWeekModule],
                declarations: [CalendarDayViewComponent],
                exports: [CalendarDayViewComponent]
            }]
    }], function () { return []; }, null); })();
        return CalendarDayModule;
    }());

    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * @NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */
    var CalendarModule = /** @class */ (function () {
        function CalendarModule() {
        }
        CalendarModule_1 = CalendarModule;
        CalendarModule.forRoot = function (dateAdapter, config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: CalendarModule_1,
                providers: [
                    dateAdapter,
                    config.eventTitleFormatter || CalendarEventTitleFormatter,
                    config.dateFormatter || CalendarDateFormatter,
                    config.utils || CalendarUtils,
                    config.a11y || CalendarA11y,
                ],
            };
        };
        var CalendarModule_1;
CalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarModule });
CalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
            CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule,
        ], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarModule, { imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule,
                ]
            }]
    }], function () { return []; }, null); })();
        return CalendarModule;
    }());

    Object.defineProperty(exports, 'DAYS_OF_WEEK', {
        enumerable: true,
        get: function () {
            return calendarUtils.DAYS_OF_WEEK;
        }
    });
    exports.CalendarA11y = CalendarA11y;
    exports.CalendarAngularDateFormatter = CalendarAngularDateFormatter;
    exports.CalendarCommonModule = CalendarCommonModule;
    exports.CalendarDateFormatter = CalendarDateFormatter;
    exports.CalendarDayModule = CalendarDayModule;
    exports.CalendarDayViewComponent = CalendarDayViewComponent;
    exports.CalendarEventTitleFormatter = CalendarEventTitleFormatter;
    exports.CalendarModule = CalendarModule;
    exports.CalendarMomentDateFormatter = CalendarMomentDateFormatter;
    exports.CalendarMonthModule = CalendarMonthModule;
    exports.CalendarMonthViewComponent = CalendarMonthViewComponent;
    exports.CalendarNativeDateFormatter = CalendarNativeDateFormatter;
    exports.CalendarUtils = CalendarUtils;
    exports.CalendarWeekModule = CalendarWeekModule;
    exports.CalendarWeekViewComponent = CalendarWeekViewComponent;
    exports.DateAdapter = DateAdapter;
    exports.MOMENT = MOMENT;
    exports.collapseAnimation = collapseAnimation;
    exports.getWeekViewPeriod = getWeekViewPeriod;
    exports.ɵa = CalendarOpenDayEventsComponent;
    exports.ɵb = CalendarEventActionsComponent;
    exports.ɵc = CalendarEventTitleComponent;
    exports.ɵd = CalendarTooltipWindowComponent;
    exports.ɵe = CalendarTooltipDirective;
    exports.ɵf = CalendarPreviousViewDirective;
    exports.ɵg = CalendarNextViewDirective;
    exports.ɵh = CalendarTodayDirective;
    exports.ɵi = CalendarDatePipe;
    exports.ɵj = CalendarEventTitlePipe;
    exports.ɵk = CalendarA11yPipe;
    exports.ɵl = ClickDirective;
    exports.ɵm = KeydownEnterDirective;
    exports.ɵn = CalendarMonthCellComponent;
    exports.ɵo = CalendarMonthViewHeaderComponent;
    exports.ɵp = CalendarWeekViewHeaderComponent;
    exports.ɵq = CalendarWeekViewEventComponent;
    exports.ɵr = CalendarWeekViewHourSegmentComponent;
    exports.ɵs = CalendarWeekViewCurrentTimeMarkerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-calendar.umd.js.map