import { __assign, __decorate, __metadata, __param, __read, __rest, __spread } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges, OnInit, OnDestroy, LOCALE_ID, Inject, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarDragHelper } from '../common/calendar-drag-helper.provider';
import { CalendarResizeHelper } from '../common/calendar-resize-helper.provider';
import { CalendarEventTimesChangedEventType, } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { validateEvents, roundToNearest, trackByWeekDayHeaderDate, trackByHourSegment, trackByHour, getMinutesMoved, getDefaultEventEnd, getMinimumEventHeightInMinutes, addDaysWithExclusions, isDraggedWithinPeriod, shouldFireDroppedEvent, getWeekViewPeriod, trackByWeekAllDayEvent, trackByWeekTimeEvent, } from '../common/util';
import { DateAdapter } from '../../date-adapters/date-adapter';
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './calendar-week-view-header.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'angular-draggable-droppable';
import * as ɵngcc4 from 'angular-resizable-element';
import * as ɵngcc5 from './calendar-week-view-event.component';
import * as ɵngcc6 from './calendar-week-view-hour-segment.component';
import * as ɵngcc7 from './calendar-week-view-current-time-marker.component';
import * as ɵngcc8 from '../common/click.directive';

function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var day_r7 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.eventDropped($event, day_r7.date, true); })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var day_r7 = ctx.$implicit; var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.dateDragEnter(day_r7.date); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = function () { return { left: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c0));
} }
var _c1 = function () { return { right: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c1));
} }
var _c2 = function (a0, a1) { return { left: a0, right: a1 }; };
var _c3 = function (a0, a1) { return { event: a0, calendarId: a1 }; };
var _c4 = function (a0, a1) { return { x: a0, y: a1 }; };
var _c5 = function (a0) { return { x: a0 }; };
var _c6 = function () { return {}; };
var _c7 = function () { return { delay: 300, delta: 30 }; };
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
    ɵngcc0.ɵɵproperty("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction2(30, _c2, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", ɵngcc0.ɵɵpureFunction2(33, _c3, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(36, _c4, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction1(39, _c5, ctx_r13.dayColumnWidth) : ɵngcc0.ɵɵpureFunction0(41, _c6))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(42, _c7));
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
var _c8 = function () { return { left: true, top: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c8));
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
var _c9 = function () { return { right: true, bottom: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c9));
} }
var _c10 = function (a0, a1, a2, a3) { return { left: a0, right: a1, top: a2, bottom: a3 }; };
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
    ɵngcc0.ɵɵproperty("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction4(29, _c10, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", ɵngcc0.ɵɵpureFunction2(34, _c3, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(37, _c4, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction2(40, _c4, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : ɵngcc0.ɵɵpureFunction0(43, _c6))("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(44, _c7))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
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
        this.dayHeaderClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
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
                type: CalendarEventTimesChangedEventType.Resize,
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
                type: CalendarEventTimesChangedEventType.Resize,
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
                type: CalendarEventTimesChangedEventType.Drop,
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
                type: CalendarEventTimesChangedEventType.Drag,
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
        { type: ChangeDetectorRef },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DateAdapter }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "events", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], CalendarWeekViewComponent.prototype, "refresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "precision", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
    CalendarWeekViewComponent = __decorate([ __param(2, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            CalendarUtils, String, DateAdapter])
    ], CalendarWeekViewComponent);
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) { return new (t || CalendarWeekViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(CalendarUtils), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
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
    } }, directives: [ɵngcc1.CalendarWeekViewHeaderComponent, ɵngcc2.NgIf, ɵngcc3.ɵa, ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc4.ResizableDirective, ɵngcc3.ɵb, ɵngcc2.NgClass, ɵngcc5.CalendarWeekViewEventComponent, ɵngcc4.ResizeHandleDirective, ɵngcc6.CalendarWeekViewHourSegmentComponent, ɵngcc7.CalendarWeekViewCurrentTimeMarkerComponent, ɵngcc8.ClickDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: Input
        }], excludeDays: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], precision: [{
            type: Input
        }], snapDraggedEvents: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], dayHeaderClicked: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], beforeViewRender: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], locale: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], refresh: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], weekStartsOn: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], weekendDays: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], allDayEventsLabelTemplate: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }], currentTimeMarkerTemplate: [{
            type: Input
        }] }); })();
    return CalendarWeekViewComponent;
}());
export { CalendarWeekViewComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBYzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFFTCxrQ0FBa0MsR0FDbkMsTUFBTSx3REFBd0QsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsZUFBZSxFQUNmLGtCQUFrQixFQUNsQiw4QkFBOEIsRUFDOUIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixvQkFBb0IsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFtQi9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QlkseUNBRkwsaUJBQWlCO0FBQ3BDLFlBQXFCLGFBQWEsVUFFUCxXQUFXO0FBQ3BDLE9BdlNXLHlCQUF5QixDQWs3QnJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2d0lBcDdCRSxVQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQW83QkY7QUFBQyxJQURELGdDQUFDO0FBQ0EsQ0FEQSxBQWw3QkQsSUFrN0JDO0FBQ0QsU0FuN0JhLHlCQUF5QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBXZWVrRGF5LFxuICBDYWxlbmRhckV2ZW50LFxuICBXZWVrVmlld0FsbERheUV2ZW50LFxuICBXZWVrVmlldyxcbiAgVmlld1BlcmlvZCxcbiAgV2Vla1ZpZXdIb3VyQ29sdW1uLFxuICBXZWVrVmlld1RpbWVFdmVudCxcbiAgV2Vla1ZpZXdIb3VyU2VnbWVudCxcbiAgV2Vla1ZpZXdIb3VyLFxuICBXZWVrVmlld0FsbERheUV2ZW50Um93LFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBSZXNpemVFdmVudCB9IGZyb20gJ2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEcmFnSGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWRyYWctaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IENhbGVuZGFyUmVzaXplSGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLXJlc2l6ZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50LFxuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLFxufSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQge1xuICB2YWxpZGF0ZUV2ZW50cyxcbiAgcm91bmRUb05lYXJlc3QsXG4gIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSxcbiAgdHJhY2tCeUhvdXJTZWdtZW50LFxuICB0cmFja0J5SG91cixcbiAgZ2V0TWludXRlc01vdmVkLFxuICBnZXREZWZhdWx0RXZlbnRFbmQsXG4gIGdldE1pbmltdW1FdmVudEhlaWdodEluTWludXRlcyxcbiAgYWRkRGF5c1dpdGhFeGNsdXNpb25zLFxuICBpc0RyYWdnZWRXaXRoaW5QZXJpb2QsXG4gIHNob3VsZEZpcmVEcm9wcGVkRXZlbnQsXG4gIGdldFdlZWtWaWV3UGVyaW9kLFxuICB0cmFja0J5V2Vla0FsbERheUV2ZW50LFxuICB0cmFja0J5V2Vla1RpbWVFdmVudCxcbn0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQge1xuICBEcmFnRW5kRXZlbnQsXG4gIERyb3BFdmVudCxcbiAgRHJhZ01vdmVFdmVudCxcbiAgVmFsaWRhdGVEcmFnLFxufSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdBbGxEYXlFdmVudFJlc2l6ZSB7XG4gIG9yaWdpbmFsT2Zmc2V0OiBudW1iZXI7XG4gIG9yaWdpbmFsU3BhbjogbnVtYmVyO1xuICBlZGdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50IGV4dGVuZHMgV2Vla1ZpZXcge1xuICBoZWFkZXI6IFdlZWtEYXlbXTtcbn1cblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gd2Vlay4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8bXdsLWNhbGVuZGFyLXdlZWstdmlld1xuICogIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gKiAgW2V2ZW50c109XCJldmVudHNcIj5cbiAqIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItd2Vlay12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLXdlZWstdmlld1wiIHJvbGU9XCJncmlkXCI+XG4gICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXJcbiAgICAgICAgW2RheXNdPVwiZGF5c1wiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgKGRheUhlYWRlckNsaWNrZWQpPVwiZGF5SGVhZGVyQ2xpY2tlZC5lbWl0KCRldmVudClcIlxuICAgICAgICAoZXZlbnREcm9wcGVkKT1cIlxuICAgICAgICAgIGV2ZW50RHJvcHBlZCh7IGRyb3BEYXRhOiAkZXZlbnQgfSwgJGV2ZW50Lm5ld1N0YXJ0LCB0cnVlKVxuICAgICAgICBcIlxuICAgICAgICAoZHJhZ0VudGVyKT1cImRhdGVEcmFnRW50ZXIoJGV2ZW50LmRhdGUpXCJcbiAgICAgID5cbiAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWFsbC1kYXktZXZlbnRzXCJcbiAgICAgICAgI2FsbERheUV2ZW50c0NvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInZpZXcuYWxsRGF5RXZlbnRSb3dzLmxlbmd0aCA+IDBcIlxuICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgKGRyYWdFbnRlcik9XCJkcmFnRW50ZXIoJ2FsbERheScpXCJcbiAgICAgICAgKGRyYWdMZWF2ZSk9XCJkcmFnTGVhdmUoJ2FsbERheScpXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXktY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY2FsLXRpbWUtbGFiZWwtY29sdW1uXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFsbERheUV2ZW50c0xhYmVsVGVtcGxhdGVcIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhbC1kYXktY29sdW1uXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgdHJhY2tCeTogdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlXCJcbiAgICAgICAgICAgIG13bERyb3BwYWJsZVxuICAgICAgICAgICAgZHJhZ092ZXJDbGFzcz1cImNhbC1kcmFnLW92ZXJcIlxuICAgICAgICAgICAgKGRyb3ApPVwiZXZlbnREcm9wcGVkKCRldmVudCwgZGF5LmRhdGUsIHRydWUpXCJcbiAgICAgICAgICAgIChkcmFnRW50ZXIpPVwiZGF0ZURyYWdFbnRlcihkYXkuZGF0ZSlcIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnRSb3cgb2Ygdmlldy5hbGxEYXlFdmVudFJvd3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiXG4gICAgICAgICAgI2V2ZW50Um93Q29udGFpbmVyXG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRzLXJvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgbGV0IGFsbERheUV2ZW50IG9mIGV2ZW50Um93LnJvdztcbiAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeVdlZWtBbGxEYXlFdmVudFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICNldmVudFxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtZHJhZ2dhYmxlXT1cIlxuICAgICAgICAgICAgICBhbGxEYXlFdmVudC5ldmVudC5kcmFnZ2FibGUgJiYgYWxsRGF5RXZlbnRSZXNpemVzLnNpemUgPT09IDBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4td2Vla109XCIhYWxsRGF5RXZlbnQuc3RhcnRzQmVmb3JlV2Vla1wiXG4gICAgICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLXdlZWtdPVwiIWFsbERheUV2ZW50LmVuZHNBZnRlcldlZWtcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYWxsRGF5RXZlbnQuZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cIigxMDAgLyBkYXlzLmxlbmd0aCkgKiBhbGxEYXlFdmVudC5zcGFuXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LiVdPVwiKDEwMCAvIGRheXMubGVuZ3RoKSAqIGFsbERheUV2ZW50Lm9mZnNldFwiXG4gICAgICAgICAgICBtd2xSZXNpemFibGVcbiAgICAgICAgICAgIFtyZXNpemVTbmFwR3JpZF09XCJ7IGxlZnQ6IGRheUNvbHVtbldpZHRoLCByaWdodDogZGF5Q29sdW1uV2lkdGggfVwiXG4gICAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgICAgKHJlc2l6ZVN0YXJ0KT1cIlxuICAgICAgICAgICAgICBhbGxEYXlFdmVudFJlc2l6ZVN0YXJ0ZWQoZXZlbnRSb3dDb250YWluZXIsIGFsbERheUV2ZW50LCAkZXZlbnQpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKHJlc2l6aW5nKT1cIlxuICAgICAgICAgICAgICBhbGxEYXlFdmVudFJlc2l6aW5nKGFsbERheUV2ZW50LCAkZXZlbnQsIGRheUNvbHVtbldpZHRoKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChyZXNpemVFbmQpPVwiYWxsRGF5RXZlbnRSZXNpemVFbmRlZChhbGxEYXlFdmVudClcIlxuICAgICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgW2Ryb3BEYXRhXT1cInsgZXZlbnQ6IGFsbERheUV2ZW50LmV2ZW50LCBjYWxlbmRhcklkOiBjYWxlbmRhcklkIH1cIlxuICAgICAgICAgICAgW2RyYWdBeGlzXT1cIntcbiAgICAgICAgICAgICAgeDogYWxsRGF5RXZlbnQuZXZlbnQuZHJhZ2dhYmxlICYmIGFsbERheUV2ZW50UmVzaXplcy5zaXplID09PSAwLFxuICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICFzbmFwRHJhZ2dlZEV2ZW50cyAmJlxuICAgICAgICAgICAgICAgIGFsbERheUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJlxuICAgICAgICAgICAgICAgIGFsbERheUV2ZW50UmVzaXplcy5zaXplID09PSAwXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIFtkcmFnU25hcEdyaWRdPVwic25hcERyYWdnZWRFdmVudHMgPyB7IHg6IGRheUNvbHVtbldpZHRoIH0gOiB7fVwiXG4gICAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgICAgICBbdG91Y2hTdGFydExvbmdQcmVzc109XCJ7IGRlbGF5OiAzMDAsIGRlbHRhOiAzMCB9XCJcbiAgICAgICAgICAgIChkcmFnU3RhcnQpPVwiZHJhZ1N0YXJ0ZWQoZXZlbnRSb3dDb250YWluZXIsIGV2ZW50KVwiXG4gICAgICAgICAgICAoZHJhZ2dpbmcpPVwiYWxsRGF5RXZlbnREcmFnTW92ZSgpXCJcbiAgICAgICAgICAgIChkcmFnRW5kKT1cImRyYWdFbmRlZChhbGxEYXlFdmVudCwgJGV2ZW50LCBkYXlDb2x1bW5XaWR0aClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtcmVzaXplLWhhbmRsZSBjYWwtcmVzaXplLWhhbmRsZS1iZWZvcmUtc3RhcnRcIlxuICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgIGFsbERheUV2ZW50LmV2ZW50Py5yZXNpemFibGU/LmJlZm9yZVN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgIWFsbERheUV2ZW50LnN0YXJ0c0JlZm9yZVdlZWtcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgIFtyZXNpemVFZGdlc109XCJ7IGxlZnQ6IHRydWUgfVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudFxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFt3ZWVrRXZlbnRdPVwiYWxsRGF5RXZlbnRcIlxuICAgICAgICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBEZWxheV09XCJ0b29sdGlwRGVsYXlcIlxuICAgICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtldmVudFRpdGxlVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2V2ZW50QWN0aW9uc1RlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2RheXNJbldlZWtdPVwiZGF5c0luV2Vla1wiXG4gICAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiXG4gICAgICAgICAgICAgICAgZXZlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgZXZlbnQ6IGFsbERheUV2ZW50LmV2ZW50LFxuICAgICAgICAgICAgICAgICAgc291cmNlRXZlbnQ6ICRldmVudC5zb3VyY2VFdmVudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L213bC1jYWxlbmRhci13ZWVrLXZpZXctZXZlbnQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY2FsLXJlc2l6ZS1oYW5kbGUgY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICBhbGxEYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5hZnRlckVuZCAmJlxuICAgICAgICAgICAgICAgICFhbGxEYXlFdmVudC5lbmRzQWZ0ZXJXZWVrXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIG13bFJlc2l6ZUhhbmRsZVxuICAgICAgICAgICAgICBbcmVzaXplRWRnZXNdPVwieyByaWdodDogdHJ1ZSB9XCJcbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtdGltZS1ldmVudHNcIlxuICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgKGRyYWdFbnRlcik9XCJkcmFnRW50ZXIoJ3RpbWUnKVwiXG4gICAgICAgIChkcmFnTGVhdmUpPVwiZHJhZ0xlYXZlKCd0aW1lJylcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtdGltZS1sYWJlbC1jb2x1bW5cIlxuICAgICAgICAgICpuZ0lmPVwidmlldy5ob3VyQ29sdW1ucy5sZW5ndGggPiAwICYmIGRheXNJbldlZWsgIT09IDFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgIGxldCBob3VyIG9mIHZpZXcuaG91ckNvbHVtbnNbMF0uaG91cnM7XG4gICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlIb3VyO1xuICAgICAgICAgICAgICBsZXQgb2RkID0gb2RkXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtaG91clwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsLWhvdXItb2RkXT1cIm9kZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG13bC1jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50XG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIGhvdXIuc2VnbWVudHM7IHRyYWNrQnk6IHRyYWNrQnlIb3VyU2VnbWVudFwiXG4gICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgICAgW3NlZ21lbnRIZWlnaHRdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2lzVGltZUxhYmVsXT1cInRydWVcIlxuICAgICAgICAgICAgICBbZGF5c0luV2Vla109XCJkYXlzSW5XZWVrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZGF5LWNvbHVtbnNcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcmVzaXplLWFjdGl2ZV09XCJ0aW1lRXZlbnRSZXNpemVzLnNpemUgPiAwXCJcbiAgICAgICAgICAjZGF5Q29sdW1uc1xuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZGF5LWNvbHVtblwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHZpZXcuaG91ckNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQnlIb3VyQ29sdW1uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1jdXJyZW50LXRpbWUtbWFya2VyXG4gICAgICAgICAgICAgIFtjb2x1bW5EYXRlXT1cImNvbHVtbi5kYXRlXCJcbiAgICAgICAgICAgICAgW2RheVN0YXJ0SG91cl09XCJkYXlTdGFydEhvdXJcIlxuICAgICAgICAgICAgICBbZGF5U3RhcnRNaW51dGVdPVwiZGF5U3RhcnRNaW51dGVcIlxuICAgICAgICAgICAgICBbZGF5RW5kSG91cl09XCJkYXlFbmRIb3VyXCJcbiAgICAgICAgICAgICAgW2RheUVuZE1pbnV0ZV09XCJkYXlFbmRNaW51dGVcIlxuICAgICAgICAgICAgICBbaG91clNlZ21lbnRzXT1cImhvdXJTZWdtZW50c1wiXG4gICAgICAgICAgICAgIFtob3VyU2VnbWVudEhlaWdodF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJjdXJyZW50VGltZU1hcmtlclRlbXBsYXRlXCJcbiAgICAgICAgICAgID48L213bC1jYWxlbmRhci13ZWVrLXZpZXctY3VycmVudC10aW1lLW1hcmtlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgdGltZUV2ZW50IG9mIGNvbHVtbi5ldmVudHM7XG4gICAgICAgICAgICAgICAgICB0cmFja0J5OiB0cmFja0J5V2Vla1RpbWVFdmVudFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY2FsLWRyYWdnYWJsZV09XCJcbiAgICAgICAgICAgICAgICAgIHRpbWVFdmVudC5ldmVudC5kcmFnZ2FibGUgJiYgdGltZUV2ZW50UmVzaXplcy5zaXplID09PSAwXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4tZGF5XT1cIiF0aW1lRXZlbnQuc3RhcnRzQmVmb3JlRGF5XCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY2FsLWVuZHMtd2l0aGluLWRheV09XCIhdGltZUV2ZW50LmVuZHNBZnRlckRheVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGltZUV2ZW50LmV2ZW50LmNzc0NsYXNzXCJcbiAgICAgICAgICAgICAgICBbaGlkZGVuXT1cInRpbWVFdmVudC5oZWlnaHQgPT09IDAgJiYgdGltZUV2ZW50LndpZHRoID09PSAwXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUudG9wLnB4XT1cInRpbWVFdmVudC50b3BcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwidGltZUV2ZW50LmhlaWdodFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmxlZnQuJV09XCJ0aW1lRXZlbnQubGVmdFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwidGltZUV2ZW50LndpZHRoXCJcbiAgICAgICAgICAgICAgICBtd2xSZXNpemFibGVcbiAgICAgICAgICAgICAgICBbcmVzaXplU25hcEdyaWRdPVwie1xuICAgICAgICAgICAgICAgICAgbGVmdDogZGF5Q29sdW1uV2lkdGgsXG4gICAgICAgICAgICAgICAgICByaWdodDogZGF5Q29sdW1uV2lkdGgsXG4gICAgICAgICAgICAgICAgICB0b3A6IGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICBib3R0b206IGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgICAgICAgIFthbGxvd05lZ2F0aXZlUmVzaXplc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAocmVzaXplU3RhcnQpPVwiXG4gICAgICAgICAgICAgICAgICB0aW1lRXZlbnRSZXNpemVTdGFydGVkKGRheUNvbHVtbnMsIHRpbWVFdmVudCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKHJlc2l6aW5nKT1cInRpbWVFdmVudFJlc2l6aW5nKHRpbWVFdmVudCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKHJlc2l6ZUVuZCk9XCJ0aW1lRXZlbnRSZXNpemVFbmRlZCh0aW1lRXZlbnQpXCJcbiAgICAgICAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgIFtkcm9wRGF0YV09XCJ7IGV2ZW50OiB0aW1lRXZlbnQuZXZlbnQsIGNhbGVuZGFySWQ6IGNhbGVuZGFySWQgfVwiXG4gICAgICAgICAgICAgICAgW2RyYWdBeGlzXT1cIntcbiAgICAgICAgICAgICAgICAgIHg6IHRpbWVFdmVudC5ldmVudC5kcmFnZ2FibGUgJiYgdGltZUV2ZW50UmVzaXplcy5zaXplID09PSAwLFxuICAgICAgICAgICAgICAgICAgeTogdGltZUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiB0aW1lRXZlbnRSZXNpemVzLnNpemUgPT09IDBcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBbZHJhZ1NuYXBHcmlkXT1cIlxuICAgICAgICAgICAgICAgICAgc25hcERyYWdnZWRFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBkYXlDb2x1bW5XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFt0b3VjaFN0YXJ0TG9uZ1ByZXNzXT1cInsgZGVsYXk6IDMwMCwgZGVsdGE6IDMwIH1cIlxuICAgICAgICAgICAgICAgIFtnaG9zdERyYWdFbmFibGVkXT1cIiFzbmFwRHJhZ2dlZEV2ZW50c1wiXG4gICAgICAgICAgICAgICAgW2dob3N0RWxlbWVudFRlbXBsYXRlXT1cIndlZWtFdmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgICAgICAgICAgKGRyYWdTdGFydCk9XCJkcmFnU3RhcnRlZChkYXlDb2x1bW5zLCBldmVudCwgdGltZUV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGRyYWdnaW5nKT1cImRyYWdNb3ZlKHRpbWVFdmVudCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGRyYWdFbmQpPVwiZHJhZ0VuZGVkKHRpbWVFdmVudCwgJGV2ZW50LCBkYXlDb2x1bW5XaWR0aCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtcmVzaXplLWhhbmRsZSBjYWwtcmVzaXplLWhhbmRsZS1iZWZvcmUtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgdGltZUV2ZW50LmV2ZW50Py5yZXNpemFibGU/LmJlZm9yZVN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgICAgICF0aW1lRXZlbnQuc3RhcnRzQmVmb3JlRGF5XG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgICAgICBbcmVzaXplRWRnZXNdPVwie1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIndlZWtFdmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3dlZWtFdmVudFRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPG13bC1jYWxlbmRhci13ZWVrLXZpZXctZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICBbd2Vla0V2ZW50XT1cInRpbWVFdmVudFwiXG4gICAgICAgICAgICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFt0b29sdGlwQXBwZW5kVG9Cb2R5XT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIlxuICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cImRyYWdBY3RpdmUgfHwgdGltZUV2ZW50UmVzaXplcy5zaXplID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIFt0b29sdGlwRGVsYXldPVwidG9vbHRpcERlbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtldmVudEFjdGlvbnNUZW1wbGF0ZV09XCJldmVudEFjdGlvbnNUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgW2RheXNJbldlZWtdPVwiZGF5c0luV2Vla1wiXG4gICAgICAgICAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiXG4gICAgICAgICAgICAgICAgICAgICAgZXZlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRpbWVFdmVudC5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUV2ZW50OiAkZXZlbnQuc291cmNlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9td2wtY2FsZW5kYXItd2Vlay12aWV3LWV2ZW50PlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtcmVzaXplLWhhbmRsZSBjYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmRcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgdGltZUV2ZW50LmV2ZW50Py5yZXNpemFibGU/LmFmdGVyRW5kICYmXG4gICAgICAgICAgICAgICAgICAgICF0aW1lRXZlbnQuZW5kc0FmdGVyRGF5XG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgbXdsUmVzaXplSGFuZGxlXG4gICAgICAgICAgICAgICAgICBbcmVzaXplRWRnZXNdPVwie1xuICAgICAgICAgICAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgb2YgY29sdW1uLmhvdXJzO1xuICAgICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlIb3VyO1xuICAgICAgICAgICAgICAgIGxldCBvZGQgPSBvZGRcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjYWwtaG91clwiXG4gICAgICAgICAgICAgIFtjbGFzcy5jYWwtaG91ci1vZGRdPVwib2RkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13bC1jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgc2VnbWVudCBvZiBob3VyLnNlZ21lbnRzO1xuICAgICAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUhvdXJTZWdtZW50XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImhvdXJTZWdtZW50SGVpZ2h0XCJcbiAgICAgICAgICAgICAgICBbc2VnbWVudF09XCJzZWdtZW50XCJcbiAgICAgICAgICAgICAgICBbc2VnbWVudEhlaWdodF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbZGF5c0luV2Vla109XCJkYXlzSW5XZWVrXCJcbiAgICAgICAgICAgICAgICAobXdsQ2xpY2spPVwiXG4gICAgICAgICAgICAgICAgICBob3VyU2VnbWVudENsaWNrZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHNlZ21lbnQuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlRXZlbnQ6ICRldmVudFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFtjbGlja0xpc3RlbmVyRGlzYWJsZWRdPVwiXG4gICAgICAgICAgICAgICAgICBob3VyU2VnbWVudENsaWNrZWQub2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICAgICAgW2RyYWdPdmVyQ2xhc3NdPVwiXG4gICAgICAgICAgICAgICAgICAhZHJhZ0FjdGl2ZSB8fCAhc25hcERyYWdnZWRFdmVudHMgPyAnY2FsLWRyYWctb3ZlcicgOiBudWxsXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgICAgICAgIChkcm9wKT1cImV2ZW50RHJvcHBlZCgkZXZlbnQsIHNlZ21lbnQuZGF0ZSwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgICAoZHJhZ0VudGVyKT1cImRhdGVEcmFnRW50ZXIoc2VnbWVudC5kYXRlKVwiXG4gICAgICAgICAgICAgICAgW2lzVGltZUxhYmVsXT1cImRheXNJbldlZWsgPT09IDFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKSB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKiBUaGUgc2NoZW1hIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY2FsZW5kYXItdXRpbHMvYmxvYi9jNTE2ODk5ODVmNTlhMjcxOTQwZTMwYmM0ZTJjNGUxZmVlM2ZjYjVjL3NyYy9jYWxlbmRhclV0aWxzLnRzI0w0OS1MNjNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgKi9cbiAgQElucHV0KCkgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCB3aGVuIGVtaXR0ZWQgb24gd2lsbCByZS1yZW5kZXIgdGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KCkgcmVmcmVzaDogU3ViamVjdDxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIHVzZWQgdG8gZm9ybWF0IGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50QXJyYXkgPSAnYXV0byc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGV2ZW50IHRvb2x0aXBzXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRvb2x0aXBzIHRvIHRoZSBib2R5IG9yIG5leHQgdG8gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSB0b29sdGlwIHNob3VsZCBiZSBkaXNwbGF5ZWQuIElmIG5vdCBwcm92aWRlZCB0aGUgdG9vbHRpcFxuICAgKiB3aWxsIGJlIGRpc3BsYXllZCBpbW1lZGlhdGVseS5cbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBEZWxheTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBudW1iZXIgb2YgdGhlIHdlZWsuXG4gICAqIFRoaXMgaXMgaWdub3JlZCB3aGVuIHRoZSBgZGF5c0luV2Vla2AgaW5wdXQgaXMgYWxzbyBzZXQgYXMgdGhlIGB2aWV3RGF0ZWAgd2lsbCBiZSB1c2VkIGFzIHRoZSBzdGFydCBvZiB0aGUgd2VlayBpbnN0ZWFkLlxuICAgKiBOb3RlLCB5b3Ugc2hvdWxkIGFsc28gcGFzcyB0aGlzIHRvIHRoZSBjYWxlbmRhciB0aXRsZSBwaXBlIHNvIGl0IHNob3dzIHRoZSBzYW1lIGRheXM6IHt7IHZpZXdEYXRlIHwgY2FsZW5kYXJEYXRlOih2aWV3ICsgJ1ZpZXdUaXRsZScpOmxvY2FsZTp3ZWVrU3RhcnRzT24gfX1cbiAgICovXG4gIEBJbnB1dCgpIHdlZWtTdGFydHNPbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgaGVhZGVyXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB3ZWVrIHZpZXcgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKSBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGV2ZW50IHRpdGxlc1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGV2ZW50IGFjdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgcHJlY2lzaW9uIHRvIGRpc3BsYXkgZXZlbnRzLlxuICAgKiBgZGF5c2Agd2lsbCByb3VuZCBldmVudCBzdGFydCBhbmQgZW5kIGRhdGVzIHRvIHRoZSBuZWFyZXN0IGRheSBhbmQgYG1pbnV0ZXNgIHdpbGwgbm90IGRvIHRoaXMgcm91bmRpbmdcbiAgICovXG4gIEBJbnB1dCgpIHByZWNpc2lvbjogJ2RheXMnIHwgJ21pbnV0ZXMnID0gJ2RheXMnO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgaW5kaWNhdGUgd2hpY2ggZGF5cyBhcmUgd2Vla2VuZHNcbiAgICovXG4gIEBJbnB1dCgpIHdlZWtlbmREYXlzOiBudW1iZXJbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzbmFwIGV2ZW50cyB0byBhIGdyaWQgd2hlbiBkcmFnZ2luZ1xuICAgKi9cbiAgQElucHV0KCkgc25hcERyYWdnZWRFdmVudHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHNlZ21lbnRzIGluIGFuIGhvdXIuIE11c3QgYmUgPD0gNlxuICAgKi9cbiAgQElucHV0KCkgaG91clNlZ21lbnRzOiBudW1iZXIgPSAyO1xuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IGluIHBpeGVscyBvZiBlYWNoIGhvdXIgc2VnbWVudFxuICAgKi9cbiAgQElucHV0KCkgaG91clNlZ21lbnRIZWlnaHQ6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKSBkYXlTdGFydEhvdXI6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKSBkYXlTdGFydE1pbnV0ZTogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpIGRheUVuZEhvdXI6IG51bWJlciA9IDIzO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpIGRheUVuZE1pbnV0ZTogbnVtYmVyID0gNTk7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBncmlkIHNpemUgdG8gc25hcCByZXNpemluZyBhbmQgZHJhZ2dpbmcgb2YgaG91cmx5IGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRTbmFwU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBhbGwgZGF5IGV2ZW50cyBsYWJlbCB0ZXh0XG4gICAqL1xuICBASW5wdXQoKSBhbGxEYXlFdmVudHNMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGRheXMgaW4gYSB3ZWVrLiBDYW4gYmUgdXNlZCB0byBjcmVhdGUgYSBzaG9ydGVyIG9yIGxvbmdlciB3ZWVrIHZpZXcuXG4gICAqIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgd2lsbCBhbHdheXMgYmUgdGhlIGB2aWV3RGF0ZWAgYW5kIGB3ZWVrU3RhcnRzT25gIGlmIHNldCB3aWxsIGJlIGlnbm9yZWRcbiAgICovXG4gIEBJbnB1dCgpIGRheXNJbldlZWs6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgY3VycmVudCB0aW1lIG1hcmtlclxuICAgKi9cbiAgQElucHV0KCkgY3VycmVudFRpbWVNYXJrZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBoZWFkZXIgd2VlayBkYXkgaXMgY2xpY2tlZC4gQWRkaW5nIGEgYGNzc0NsYXNzYCBwcm9wZXJ0eSBvbiBgJGV2ZW50LmRheWAgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkYXlIZWFkZXJDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF5OiBXZWVrRGF5O1xuICAgIHNvdXJjZUV2ZW50OiBNb3VzZUV2ZW50O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICAgIHNvdXJjZUV2ZW50OiBNb3VzZUV2ZW50IHwgYW55O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCBpcyByZXNpemVkIG9yIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKSBldmVudFRpbWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50XG4gID4oKTtcblxuICAvKipcbiAgICogQW4gb3V0cHV0IHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCB3ZWVrLlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGEgZGF5IGluIHRoZSBoZWFkZXIgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBlbGVtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQE91dHB1dCgpIGJlZm9yZVZpZXdSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudFxuICA+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgaG91clNlZ21lbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF0ZTogRGF0ZTtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBXZWVrVmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBhbGxEYXlFdmVudFJlc2l6ZXM6IE1hcDxcbiAgICBXZWVrVmlld0FsbERheUV2ZW50LFxuICAgIFdlZWtWaWV3QWxsRGF5RXZlbnRSZXNpemVcbiAgPiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdGltZUV2ZW50UmVzaXplczogTWFwPENhbGVuZGFyRXZlbnQsIFJlc2l6ZUV2ZW50PiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnREcmFnRW50ZXJCeVR5cGUgPSB7XG4gICAgYWxsRGF5OiAwLFxuICAgIHRpbWU6IDAsXG4gIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRyYWdBY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZHJhZ0FscmVhZHlNb3ZlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVSZXNpemU6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRheUNvbHVtbldpZHRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNhbGVuZGFySWQgPSBTeW1ib2woJ2FuZ3VsYXIgY2FsZW5kYXIgd2VlayB2aWV3IGlkJyk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGxhc3REcmFnZ2VkRXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSA9IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeUhvdXJTZWdtZW50ID0gdHJhY2tCeUhvdXJTZWdtZW50O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SG91ciA9IHRyYWNrQnlIb3VyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5V2Vla0FsbERheUV2ZW50ID0gdHJhY2tCeVdlZWtBbGxEYXlFdmVudDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeVdlZWtUaW1lRXZlbnQgPSB0cmFja0J5V2Vla1RpbWVFdmVudDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBsYXN0RHJhZ0VudGVyRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIHV0aWxzOiBDYWxlbmRhclV0aWxzLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyXG4gICkge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlIb3VyQ29sdW1uID0gKGluZGV4OiBudW1iZXIsIGNvbHVtbjogV2Vla1ZpZXdIb3VyQ29sdW1uKSA9PlxuICAgIGNvbHVtbi5ob3Vyc1swXSA/IGNvbHVtbi5ob3Vyc1swXS5zZWdtZW50c1swXS5kYXRlLnRvSVNPU3RyaW5nKCkgOiBjb2x1bW47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlJZCA9IChpbmRleDogbnVtYmVyLCByb3c6IFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cpID0+IHJvdy5pZDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaCkge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gdGhpcy5yZWZyZXNoLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbCgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZWZyZXNoSGVhZGVyID1cbiAgICAgIGNoYW5nZXMudmlld0RhdGUgfHxcbiAgICAgIGNoYW5nZXMuZXhjbHVkZURheXMgfHxcbiAgICAgIGNoYW5nZXMud2Vla2VuZERheXMgfHxcbiAgICAgIGNoYW5nZXMuZGF5c0luV2VlayB8fFxuICAgICAgY2hhbmdlcy53ZWVrU3RhcnRzT247XG5cbiAgICBjb25zdCByZWZyZXNoQm9keSA9XG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmRheVN0YXJ0SG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydE1pbnV0ZSB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRIb3VyIHx8XG4gICAgICBjaGFuZ2VzLmRheUVuZE1pbnV0ZSB8fFxuICAgICAgY2hhbmdlcy5ob3VyU2VnbWVudHMgfHxcbiAgICAgIGNoYW5nZXMud2Vla1N0YXJ0c09uIHx8XG4gICAgICBjaGFuZ2VzLndlZWtlbmREYXlzIHx8XG4gICAgICBjaGFuZ2VzLmV4Y2x1ZGVEYXlzIHx8XG4gICAgICBjaGFuZ2VzLmhvdXJTZWdtZW50SGVpZ2h0IHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlzSW5XZWVrO1xuXG4gICAgaWYgKHJlZnJlc2hIZWFkZXIpIHtcbiAgICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmV2ZW50cykge1xuICAgICAgdmFsaWRhdGVFdmVudHModGhpcy5ldmVudHMpO1xuICAgIH1cblxuICAgIGlmIChyZWZyZXNoQm9keSkge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cblxuICAgIGlmIChyZWZyZXNoSGVhZGVyIHx8IHJlZnJlc2hCb2R5KSB7XG4gICAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0aW1lRXZlbnRSZXNpemVTdGFydGVkKFxuICAgIGV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgdGltZUV2ZW50OiBXZWVrVmlld1RpbWVFdmVudCxcbiAgICByZXNpemVFdmVudDogUmVzaXplRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy50aW1lRXZlbnRSZXNpemVzLnNldCh0aW1lRXZlbnQuZXZlbnQsIHJlc2l6ZUV2ZW50KTtcbiAgICB0aGlzLnJlc2l6ZVN0YXJ0ZWQoZXZlbnRzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0aW1lRXZlbnRSZXNpemluZyh0aW1lRXZlbnQ6IFdlZWtWaWV3VGltZUV2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpIHtcbiAgICB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuc2V0KHRpbWVFdmVudC5ldmVudCwgcmVzaXplRXZlbnQpO1xuICAgIGNvbnN0IGFkanVzdGVkRXZlbnRzID0gbmV3IE1hcDxDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50PigpO1xuXG4gICAgY29uc3QgdGVtcEV2ZW50cyA9IFsuLi50aGlzLmV2ZW50c107XG5cbiAgICB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuZm9yRWFjaCgobGFzdFJlc2l6ZUV2ZW50LCBldmVudCkgPT4ge1xuICAgICAgY29uc3QgbmV3RXZlbnREYXRlcyA9IHRoaXMuZ2V0VGltZUV2ZW50UmVzaXplZERhdGVzKFxuICAgICAgICBldmVudCxcbiAgICAgICAgbGFzdFJlc2l6ZUV2ZW50XG4gICAgICApO1xuICAgICAgY29uc3QgYWRqdXN0ZWRFdmVudCA9IHsgLi4uZXZlbnQsIC4uLm5ld0V2ZW50RGF0ZXMgfTtcbiAgICAgIGFkanVzdGVkRXZlbnRzLnNldChhZGp1c3RlZEV2ZW50LCBldmVudCk7XG4gICAgICBjb25zdCBldmVudEluZGV4ID0gdGVtcEV2ZW50cy5pbmRleE9mKGV2ZW50KTtcbiAgICAgIHRlbXBFdmVudHNbZXZlbnRJbmRleF0gPSBhZGp1c3RlZEV2ZW50O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXN0b3JlT3JpZ2luYWxFdmVudHModGVtcEV2ZW50cywgYWRqdXN0ZWRFdmVudHMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRpbWVFdmVudFJlc2l6ZUVuZGVkKHRpbWVFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmdldFdlZWtWaWV3KHRoaXMuZXZlbnRzKTtcbiAgICBjb25zdCBsYXN0UmVzaXplRXZlbnQgPSB0aGlzLnRpbWVFdmVudFJlc2l6ZXMuZ2V0KHRpbWVFdmVudC5ldmVudCk7XG4gICAgaWYgKGxhc3RSZXNpemVFdmVudCkge1xuICAgICAgdGhpcy50aW1lRXZlbnRSZXNpemVzLmRlbGV0ZSh0aW1lRXZlbnQuZXZlbnQpO1xuICAgICAgY29uc3QgbmV3RXZlbnREYXRlcyA9IHRoaXMuZ2V0VGltZUV2ZW50UmVzaXplZERhdGVzKFxuICAgICAgICB0aW1lRXZlbnQuZXZlbnQsXG4gICAgICAgIGxhc3RSZXNpemVFdmVudFxuICAgICAgKTtcbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgIG5ld1N0YXJ0OiBuZXdFdmVudERhdGVzLnN0YXJ0LFxuICAgICAgICBuZXdFbmQ6IG5ld0V2ZW50RGF0ZXMuZW5kLFxuICAgICAgICBldmVudDogdGltZUV2ZW50LmV2ZW50LFxuICAgICAgICB0eXBlOiBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLlJlc2l6ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBhbGxEYXlFdmVudFJlc2l6ZVN0YXJ0ZWQoXG4gICAgYWxsRGF5RXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBhbGxEYXlFdmVudDogV2Vla1ZpZXdBbGxEYXlFdmVudCxcbiAgICByZXNpemVFdmVudDogUmVzaXplRXZlbnRcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuc2V0KGFsbERheUV2ZW50LCB7XG4gICAgICBvcmlnaW5hbE9mZnNldDogYWxsRGF5RXZlbnQub2Zmc2V0LFxuICAgICAgb3JpZ2luYWxTcGFuOiBhbGxEYXlFdmVudC5zcGFuLFxuICAgICAgZWRnZTogdHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgIT09ICd1bmRlZmluZWQnID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2l6ZVN0YXJ0ZWQoXG4gICAgICBhbGxEYXlFdmVudHNDb250YWluZXIsXG4gICAgICB0aGlzLmdldERheUNvbHVtbldpZHRoKGFsbERheUV2ZW50c0NvbnRhaW5lcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGFsbERheUV2ZW50UmVzaXppbmcoXG4gICAgYWxsRGF5RXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQsXG4gICAgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50LFxuICAgIGRheVdpZHRoOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFJlc2l6ZTogV2Vla1ZpZXdBbGxEYXlFdmVudFJlc2l6ZSA9IHRoaXMuYWxsRGF5RXZlbnRSZXNpemVzLmdldChcbiAgICAgIGFsbERheUV2ZW50XG4gICAgKTtcblxuICAgIGlmICh0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMubGVmdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgLyBkYXlXaWR0aCk7XG4gICAgICBhbGxEYXlFdmVudC5vZmZzZXQgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0ICsgZGlmZjtcbiAgICAgIGFsbERheUV2ZW50LnNwYW4gPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiAtIGRpZmY7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzaXplRXZlbnQuZWRnZXMucmlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLnJvdW5kKCtyZXNpemVFdmVudC5lZGdlcy5yaWdodCAvIGRheVdpZHRoKTtcbiAgICAgIGFsbERheUV2ZW50LnNwYW4gPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbiArIGRpZmY7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGFsbERheUV2ZW50UmVzaXplRW5kZWQoYWxsRGF5RXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UmVzaXplOiBXZWVrVmlld0FsbERheUV2ZW50UmVzaXplID0gdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuZ2V0KFxuICAgICAgYWxsRGF5RXZlbnRcbiAgICApO1xuXG4gICAgaWYgKGN1cnJlbnRSZXNpemUpIHtcbiAgICAgIGNvbnN0IGFsbERheUV2ZW50UmVzaXppbmdCZWZvcmVTdGFydCA9IGN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnO1xuICAgICAgbGV0IGRheXNEaWZmOiBudW1iZXI7XG4gICAgICBpZiAoYWxsRGF5RXZlbnRSZXNpemluZ0JlZm9yZVN0YXJ0KSB7XG4gICAgICAgIGRheXNEaWZmID0gYWxsRGF5RXZlbnQub2Zmc2V0IC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRheXNEaWZmID0gYWxsRGF5RXZlbnQuc3BhbiAtIGN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuICAgICAgfVxuXG4gICAgICBhbGxEYXlFdmVudC5vZmZzZXQgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0O1xuICAgICAgYWxsRGF5RXZlbnQuc3BhbiA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuO1xuXG4gICAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSBhbGxEYXlFdmVudC5ldmVudC5zdGFydDtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGUgPSBhbGxEYXlFdmVudC5ldmVudC5lbmQgfHwgYWxsRGF5RXZlbnQuZXZlbnQuc3RhcnQ7XG4gICAgICBpZiAoYWxsRGF5RXZlbnRSZXNpemluZ0JlZm9yZVN0YXJ0KSB7XG4gICAgICAgIG5ld1N0YXJ0ID0gYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgbmV3U3RhcnQsXG4gICAgICAgICAgZGF5c0RpZmYsXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RW5kID0gYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgbmV3RW5kLFxuICAgICAgICAgIGRheXNEaWZmLFxuICAgICAgICAgIHRoaXMuZXhjbHVkZURheXNcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgbmV3U3RhcnQsXG4gICAgICAgIG5ld0VuZCxcbiAgICAgICAgZXZlbnQ6IGFsbERheUV2ZW50LmV2ZW50LFxuICAgICAgICB0eXBlOiBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLlJlc2l6ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbGxEYXlFdmVudFJlc2l6ZXMuZGVsZXRlKGFsbERheUV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRSb3dDb250YWluZXI6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihldmVudFJvd0NvbnRhaW5lci5vZmZzZXRXaWR0aCAvIHRoaXMuZGF5cy5sZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRhdGVEcmFnRW50ZXIoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMubGFzdERyYWdFbnRlckRhdGUgPSBkYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50RHJvcHBlZChcbiAgICBkcm9wRXZlbnQ6IERyb3BFdmVudDx7IGV2ZW50PzogQ2FsZW5kYXJFdmVudDsgY2FsZW5kYXJJZD86IHN5bWJvbCB9PixcbiAgICBkYXRlOiBEYXRlLFxuICAgIGFsbERheTogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBzaG91bGRGaXJlRHJvcHBlZEV2ZW50KGRyb3BFdmVudCwgZGF0ZSwgYWxsRGF5LCB0aGlzLmNhbGVuZGFySWQpICYmXG4gICAgICB0aGlzLmxhc3REcmFnRW50ZXJEYXRlLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCkgJiZcbiAgICAgICghdGhpcy5zbmFwRHJhZ2dlZEV2ZW50cyB8fFxuICAgICAgICBkcm9wRXZlbnQuZHJvcERhdGEuZXZlbnQgIT09IHRoaXMubGFzdERyYWdnZWRFdmVudClcbiAgICApIHtcbiAgICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgIHR5cGU6IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGUuRHJvcCxcbiAgICAgICAgZXZlbnQ6IGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCxcbiAgICAgICAgbmV3U3RhcnQ6IGRhdGUsXG4gICAgICAgIGFsbERheSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxhc3REcmFnZ2VkRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRyYWdFbnRlcih0eXBlOiAnYWxsRGF5JyB8ICd0aW1lJykge1xuICAgIHRoaXMuZXZlbnREcmFnRW50ZXJCeVR5cGVbdHlwZV0rKztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkcmFnTGVhdmUodHlwZTogJ2FsbERheScgfCAndGltZScpIHtcbiAgICB0aGlzLmV2ZW50RHJhZ0VudGVyQnlUeXBlW3R5cGVdLS07XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZHJhZ1N0YXJ0ZWQoXG4gICAgZXZlbnRzQ29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBldmVudDogSFRNTEVsZW1lbnQsXG4gICAgZGF5RXZlbnQ/OiBXZWVrVmlld1RpbWVFdmVudFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmRheUNvbHVtbldpZHRoID0gdGhpcy5nZXREYXlDb2x1bW5XaWR0aChldmVudHNDb250YWluZXIpO1xuICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIoXG4gICAgICBldmVudHNDb250YWluZXIsXG4gICAgICBldmVudFxuICAgICk7XG4gICAgdGhpcy52YWxpZGF0ZURyYWcgPSAoeyB4LCB5LCB0cmFuc2Zvcm0gfSkgPT5cbiAgICAgIHRoaXMuYWxsRGF5RXZlbnRSZXNpemVzLnNpemUgPT09IDAgJiZcbiAgICAgIHRoaXMudGltZUV2ZW50UmVzaXplcy5zaXplID09PSAwICYmXG4gICAgICBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHNuYXBEcmFnZ2VkRXZlbnRzOiB0aGlzLnNuYXBEcmFnZ2VkRXZlbnRzLFxuICAgICAgICBkcmFnQWxyZWFkeU1vdmVkOiB0aGlzLmRyYWdBbHJlYWR5TW92ZWQsXG4gICAgICAgIHRyYW5zZm9ybSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZHJhZ0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5kcmFnQWxyZWFkeU1vdmVkID0gZmFsc2U7XG4gICAgdGhpcy5sYXN0RHJhZ2dlZEV2ZW50ID0gbnVsbDtcbiAgICB0aGlzLmV2ZW50RHJhZ0VudGVyQnlUeXBlID0ge1xuICAgICAgYWxsRGF5OiAwLFxuICAgICAgdGltZTogMCxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zbmFwRHJhZ2dlZEV2ZW50cyAmJiBkYXlFdmVudCkge1xuICAgICAgdGhpcy52aWV3LmhvdXJDb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb25zdCBsaW5rZWRFdmVudCA9IGNvbHVtbi5ldmVudHMuZmluZChcbiAgICAgICAgICAoY29sdW1uRXZlbnQpID0+XG4gICAgICAgICAgICBjb2x1bW5FdmVudC5ldmVudCA9PT0gZGF5RXZlbnQuZXZlbnQgJiYgY29sdW1uRXZlbnQgIT09IGRheUV2ZW50XG4gICAgICAgICk7XG4gICAgICAgIC8vIGhpZGUgYW55IGxpbmtlZCBldmVudHMgd2hpbGUgZHJhZ2dpbmdcbiAgICAgICAgaWYgKGxpbmtlZEV2ZW50KSB7XG4gICAgICAgICAgbGlua2VkRXZlbnQud2lkdGggPSAwO1xuICAgICAgICAgIGxpbmtlZEV2ZW50LmhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkcmFnTW92ZShkYXlFdmVudDogV2Vla1ZpZXdUaW1lRXZlbnQsIGRyYWdFdmVudDogRHJhZ01vdmVFdmVudCkge1xuICAgIGNvbnN0IG5ld0V2ZW50VGltZXMgPSB0aGlzLmdldERyYWdNb3ZlZEV2ZW50VGltZXMoXG4gICAgICBkYXlFdmVudCxcbiAgICAgIGRyYWdFdmVudCxcbiAgICAgIHRoaXMuZGF5Q29sdW1uV2lkdGgsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBvcmlnaW5hbEV2ZW50ID0gZGF5RXZlbnQuZXZlbnQ7XG4gICAgY29uc3QgYWRqdXN0ZWRFdmVudCA9IHsgLi4ub3JpZ2luYWxFdmVudCwgLi4ubmV3RXZlbnRUaW1lcyB9O1xuICAgIGNvbnN0IHRlbXBFdmVudHMgPSB0aGlzLmV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgPT09IG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGFkanVzdGVkRXZlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfSk7XG4gICAgdGhpcy5yZXN0b3JlT3JpZ2luYWxFdmVudHMoXG4gICAgICB0ZW1wRXZlbnRzLFxuICAgICAgbmV3IE1hcChbW2FkanVzdGVkRXZlbnQsIG9yaWdpbmFsRXZlbnRdXSksXG4gICAgICB0aGlzLnNuYXBEcmFnZ2VkRXZlbnRzXG4gICAgKTtcbiAgICB0aGlzLmRyYWdBbHJlYWR5TW92ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGFsbERheUV2ZW50RHJhZ01vdmUoKSB7XG4gICAgdGhpcy5kcmFnQWxyZWFkeU1vdmVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkcmFnRW5kZWQoXG4gICAgd2Vla0V2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50IHwgV2Vla1ZpZXdUaW1lRXZlbnQsXG4gICAgZHJhZ0VuZEV2ZW50OiBEcmFnRW5kRXZlbnQsXG4gICAgZGF5V2lkdGg6IG51bWJlcixcbiAgICB1c2VZID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5nZXRXZWVrVmlldyh0aGlzLmV2ZW50cyk7XG4gICAgdGhpcy5kcmFnQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy52YWxpZGF0ZURyYWcgPSBudWxsO1xuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5nZXREcmFnTW92ZWRFdmVudFRpbWVzKFxuICAgICAgd2Vla0V2ZW50LFxuICAgICAgZHJhZ0VuZEV2ZW50LFxuICAgICAgZGF5V2lkdGgsXG4gICAgICB1c2VZXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICAodGhpcy5zbmFwRHJhZ2dlZEV2ZW50cyB8fFxuICAgICAgICB0aGlzLmV2ZW50RHJhZ0VudGVyQnlUeXBlW3VzZVkgPyAndGltZScgOiAnYWxsRGF5J10gPiAwKSAmJlxuICAgICAgaXNEcmFnZ2VkV2l0aGluUGVyaW9kKHN0YXJ0LCBlbmQsIHRoaXMudmlldy5wZXJpb2QpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3REcmFnZ2VkRXZlbnQgPSB3ZWVrRXZlbnQuZXZlbnQ7XG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgICBuZXdTdGFydDogc3RhcnQsXG4gICAgICAgIG5ld0VuZDogZW5kLFxuICAgICAgICBldmVudDogd2Vla0V2ZW50LmV2ZW50LFxuICAgICAgICB0eXBlOiBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLkRyYWcsXG4gICAgICAgIGFsbERheTogIXVzZVksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVmcmVzaEhlYWRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRheXMgPSB0aGlzLnV0aWxzLmdldFdlZWtWaWV3SGVhZGVyKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgd2Vla2VuZERheXM6IHRoaXMud2Vla2VuZERheXMsXG4gICAgICAuLi5nZXRXZWVrVmlld1BlcmlvZChcbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICAgIHRoaXMuZXhjbHVkZURheXMsXG4gICAgICAgIHRoaXMuZGF5c0luV2Vla1xuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWZyZXNoQm9keSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmdldFdlZWtWaWV3KHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWZyZXNoQWxsKCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF5cyAmJiB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMuYmVmb3JlVmlld1JlbmRlci5lbWl0KHtcbiAgICAgICAgaGVhZGVyOiB0aGlzLmRheXMsXG4gICAgICAgIC4uLnRoaXMudmlldyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRXZWVrVmlldyhldmVudHM6IENhbGVuZGFyRXZlbnRbXSkge1xuICAgIHJldHVybiB0aGlzLnV0aWxzLmdldFdlZWtWaWV3KHtcbiAgICAgIGV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgcHJlY2lzaW9uOiB0aGlzLnByZWNpc2lvbixcbiAgICAgIGFic29sdXRlUG9zaXRpb25lZEV2ZW50czogdHJ1ZSxcbiAgICAgIGhvdXJTZWdtZW50czogdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICBkYXlTdGFydDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheVN0YXJ0SG91cixcbiAgICAgICAgbWludXRlOiB0aGlzLmRheVN0YXJ0TWludXRlLFxuICAgICAgfSxcbiAgICAgIGRheUVuZDoge1xuICAgICAgICBob3VyOiB0aGlzLmRheUVuZEhvdXIsXG4gICAgICAgIG1pbnV0ZTogdGhpcy5kYXlFbmRNaW51dGUsXG4gICAgICB9LFxuICAgICAgc2VnbWVudEhlaWdodDogdGhpcy5ob3VyU2VnbWVudEhlaWdodCxcbiAgICAgIHdlZWtlbmREYXlzOiB0aGlzLndlZWtlbmREYXlzLFxuICAgICAgLi4uZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgIHRoaXMudmlld0RhdGUsXG4gICAgICAgIHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgICB0aGlzLmRheXNJbldlZWtcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RHJhZ01vdmVkRXZlbnRUaW1lcyhcbiAgICB3ZWVrRXZlbnQ6IFdlZWtWaWV3QWxsRGF5RXZlbnQgfCBXZWVrVmlld1RpbWVFdmVudCxcbiAgICBkcmFnRW5kRXZlbnQ6IERyYWdFbmRFdmVudCB8IERyYWdNb3ZlRXZlbnQsXG4gICAgZGF5V2lkdGg6IG51bWJlcixcbiAgICB1c2VZOiBib29sZWFuXG4gICkge1xuICAgIGNvbnN0IGRheXNEcmFnZ2VkID0gcm91bmRUb05lYXJlc3QoZHJhZ0VuZEV2ZW50LngsIGRheVdpZHRoKSAvIGRheVdpZHRoO1xuICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZCA9IHVzZVlcbiAgICAgID8gZ2V0TWludXRlc01vdmVkKFxuICAgICAgICAgIGRyYWdFbmRFdmVudC55LFxuICAgICAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgICAgIHRoaXMuaG91clNlZ21lbnRIZWlnaHQsXG4gICAgICAgICAgdGhpcy5ldmVudFNuYXBTaXplXG4gICAgICAgIClcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5kYXRlQWRhcHRlci5hZGRNaW51dGVzKFxuICAgICAgYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICB3ZWVrRXZlbnQuZXZlbnQuc3RhcnQsXG4gICAgICAgIGRheXNEcmFnZ2VkLFxuICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzXG4gICAgICApLFxuICAgICAgbWludXRlc01vdmVkXG4gICAgKTtcbiAgICBsZXQgZW5kOiBEYXRlO1xuICAgIGlmICh3ZWVrRXZlbnQuZXZlbnQuZW5kKSB7XG4gICAgICBlbmQgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZE1pbnV0ZXMoXG4gICAgICAgIGFkZERheXNXaXRoRXhjbHVzaW9ucyhcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICAgIHdlZWtFdmVudC5ldmVudC5lbmQsXG4gICAgICAgICAgZGF5c0RyYWdnZWQsXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApLFxuICAgICAgICBtaW51dGVzTW92ZWRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlc3RvcmVPcmlnaW5hbEV2ZW50cyhcbiAgICB0ZW1wRXZlbnRzOiBDYWxlbmRhckV2ZW50W10sXG4gICAgYWRqdXN0ZWRFdmVudHM6IE1hcDxDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50PixcbiAgICBzbmFwRHJhZ2dlZEV2ZW50cyA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcHJldmlvdXNWaWV3ID0gdGhpcy52aWV3O1xuICAgIHRoaXMudmlldyA9IHRoaXMuZ2V0V2Vla1ZpZXcodGVtcEV2ZW50cyk7XG4gICAgY29uc3QgYWRqdXN0ZWRFdmVudHNBcnJheSA9IHRlbXBFdmVudHMuZmlsdGVyKChldmVudCkgPT5cbiAgICAgIGFkanVzdGVkRXZlbnRzLmhhcyhldmVudClcbiAgICApO1xuICAgIHRoaXMudmlldy5ob3VyQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICBwcmV2aW91c1ZpZXcuaG91ckNvbHVtbnNbY29sdW1uSW5kZXhdLmhvdXJzLmZvckVhY2goKGhvdXIsIGhvdXJJbmRleCkgPT4ge1xuICAgICAgICBob3VyLnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIHNlZ21lbnRJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbHVtbi5ob3Vyc1tob3VySW5kZXhdLnNlZ21lbnRzW3NlZ21lbnRJbmRleF0uY3NzQ2xhc3MgPVxuICAgICAgICAgICAgc2VnbWVudC5jc3NDbGFzcztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgYWRqdXN0ZWRFdmVudHNBcnJheS5mb3JFYWNoKChhZGp1c3RlZEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSBhZGp1c3RlZEV2ZW50cy5nZXQoYWRqdXN0ZWRFdmVudCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29sdW1uRXZlbnQgPSBjb2x1bW4uZXZlbnRzLmZpbmQoXG4gICAgICAgICAgKGNvbHVtbkV2ZW50KSA9PiBjb2x1bW5FdmVudC5ldmVudCA9PT0gYWRqdXN0ZWRFdmVudFxuICAgICAgICApO1xuICAgICAgICBpZiAoZXhpc3RpbmdDb2x1bW5FdmVudCkge1xuICAgICAgICAgIC8vIHJlc3RvcmUgdGhlIG9yaWdpbmFsIGV2ZW50IHNvIHRyYWNrQnkga2lja3MgaW4gYW5kIHRoZSBkb20gaXNuJ3QgY2hhbmdlZFxuICAgICAgICAgIGV4aXN0aW5nQ29sdW1uRXZlbnQuZXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICAgICAgICAgIGV4aXN0aW5nQ29sdW1uRXZlbnRbJ3RlbXBFdmVudCddID0gYWRqdXN0ZWRFdmVudDtcbiAgICAgICAgICBpZiAoIXNuYXBEcmFnZ2VkRXZlbnRzKSB7XG4gICAgICAgICAgICBleGlzdGluZ0NvbHVtbkV2ZW50LmhlaWdodCA9IDA7XG4gICAgICAgICAgICBleGlzdGluZ0NvbHVtbkV2ZW50LndpZHRoID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYWRkIGEgZHVtbXkgZXZlbnQgdG8gdGhlIGRyb3Agc28gaWYgdGhlIGV2ZW50IHdhcyByZW1vdmVkIGZyb20gdGhlIG9yaWdpbmFsIGNvbHVtbiB0aGUgZHJhZyBkb2Vzbid0IGVuZCBlYXJseVxuICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgZXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBzdGFydHNCZWZvcmVEYXk6IGZhbHNlLFxuICAgICAgICAgICAgZW5kc0FmdGVyRGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRlbXBFdmVudDogYWRqdXN0ZWRFdmVudCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbHVtbi5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGFkanVzdGVkRXZlbnRzLmNsZWFyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VGltZUV2ZW50UmVzaXplZERhdGVzKFxuICAgIGNhbGVuZGFyRXZlbnQ6IENhbGVuZGFyRXZlbnQsXG4gICAgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50XG4gICkge1xuICAgIGNvbnN0IG1pbmltdW1FdmVudEhlaWdodCA9IGdldE1pbmltdW1FdmVudEhlaWdodEluTWludXRlcyhcbiAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgdGhpcy5ob3VyU2VnbWVudEhlaWdodFxuICAgICk7XG4gICAgY29uc3QgbmV3RXZlbnREYXRlcyA9IHtcbiAgICAgIHN0YXJ0OiBjYWxlbmRhckV2ZW50LnN0YXJ0LFxuICAgICAgZW5kOiBnZXREZWZhdWx0RXZlbnRFbmQoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGNhbGVuZGFyRXZlbnQsXG4gICAgICAgIG1pbmltdW1FdmVudEhlaWdodFxuICAgICAgKSxcbiAgICB9O1xuICAgIGNvbnN0IHsgZW5kLCAuLi5ldmVudFdpdGhvdXRFbmQgfSA9IGNhbGVuZGFyRXZlbnQ7XG4gICAgY29uc3Qgc21hbGxlc3RSZXNpemVzID0ge1xuICAgICAgc3RhcnQ6IHRoaXMuZGF0ZUFkYXB0ZXIuYWRkTWludXRlcyhcbiAgICAgICAgbmV3RXZlbnREYXRlcy5lbmQsXG4gICAgICAgIG1pbmltdW1FdmVudEhlaWdodCAqIC0xXG4gICAgICApLFxuICAgICAgZW5kOiBnZXREZWZhdWx0RXZlbnRFbmQoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGV2ZW50V2l0aG91dEVuZCxcbiAgICAgICAgbWluaW11bUV2ZW50SGVpZ2h0XG4gICAgICApLFxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBkYXlzRGlmZiA9IE1hdGgucm91bmQoXG4gICAgICAgICtyZXNpemVFdmVudC5lZGdlcy5sZWZ0IC8gdGhpcy5kYXlDb2x1bW5XaWR0aFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICBuZXdFdmVudERhdGVzLnN0YXJ0LFxuICAgICAgICBkYXlzRGlmZixcbiAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgKTtcbiAgICAgIGlmIChuZXdTdGFydCA8IHNtYWxsZXN0UmVzaXplcy5zdGFydCkge1xuICAgICAgICBuZXdFdmVudERhdGVzLnN0YXJ0ID0gbmV3U3RhcnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFdmVudERhdGVzLnN0YXJ0ID0gc21hbGxlc3RSZXNpemVzLnN0YXJ0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZGF5c0RpZmYgPSBNYXRoLnJvdW5kKFxuICAgICAgICArcmVzaXplRXZlbnQuZWRnZXMucmlnaHQgLyB0aGlzLmRheUNvbHVtbldpZHRoXG4gICAgICApO1xuICAgICAgY29uc3QgbmV3RW5kID0gYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgICBuZXdFdmVudERhdGVzLmVuZCxcbiAgICAgICAgZGF5c0RpZmYsXG4gICAgICAgIHRoaXMuZXhjbHVkZURheXNcbiAgICAgICk7XG4gICAgICBpZiAobmV3RW5kID4gc21hbGxlc3RSZXNpemVzLmVuZCkge1xuICAgICAgICBuZXdFdmVudERhdGVzLmVuZCA9IG5ld0VuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuZW5kID0gc21hbGxlc3RSZXNpemVzLmVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc2l6ZUV2ZW50LmVkZ2VzLnRvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZCA9IGdldE1pbnV0ZXNNb3ZlZChcbiAgICAgICAgcmVzaXplRXZlbnQuZWRnZXMudG9wIGFzIG51bWJlcixcbiAgICAgICAgdGhpcy5ob3VyU2VnbWVudHMsXG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRIZWlnaHQsXG4gICAgICAgIHRoaXMuZXZlbnRTbmFwU2l6ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0ID0gdGhpcy5kYXRlQWRhcHRlci5hZGRNaW51dGVzKFxuICAgICAgICBuZXdFdmVudERhdGVzLnN0YXJ0LFxuICAgICAgICBtaW51dGVzTW92ZWRcbiAgICAgICk7XG4gICAgICBpZiAobmV3U3RhcnQgPCBzbWFsbGVzdFJlc2l6ZXMuc3RhcnQpIHtcbiAgICAgICAgbmV3RXZlbnREYXRlcy5zdGFydCA9IG5ld1N0YXJ0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RXZlbnREYXRlcy5zdGFydCA9IHNtYWxsZXN0UmVzaXplcy5zdGFydDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXNpemVFdmVudC5lZGdlcy5ib3R0b20gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBtaW51dGVzTW92ZWQgPSBnZXRNaW51dGVzTW92ZWQoXG4gICAgICAgIHJlc2l6ZUV2ZW50LmVkZ2VzLmJvdHRvbSBhcyBudW1iZXIsXG4gICAgICAgIHRoaXMuaG91clNlZ21lbnRzLFxuICAgICAgICB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0LFxuICAgICAgICB0aGlzLmV2ZW50U25hcFNpemVcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdFbmQgPSB0aGlzLmRhdGVBZGFwdGVyLmFkZE1pbnV0ZXMoXG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuZW5kLFxuICAgICAgICBtaW51dGVzTW92ZWRcbiAgICAgICk7XG4gICAgICBpZiAobmV3RW5kID4gc21hbGxlc3RSZXNpemVzLmVuZCkge1xuICAgICAgICBuZXdFdmVudERhdGVzLmVuZCA9IG5ld0VuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0V2ZW50RGF0ZXMuZW5kID0gc21hbGxlc3RSZXNpemVzLmVuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RXZlbnREYXRlcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZXNpemVTdGFydGVkKGV2ZW50c0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1pbldpZHRoPzogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXlDb2x1bW5XaWR0aCA9IHRoaXMuZ2V0RGF5Q29sdW1uV2lkdGgoZXZlbnRzQ29udGFpbmVyKTtcbiAgICBjb25zdCByZXNpemVIZWxwZXI6IENhbGVuZGFyUmVzaXplSGVscGVyID0gbmV3IENhbGVuZGFyUmVzaXplSGVscGVyKFxuICAgICAgZXZlbnRzQ29udGFpbmVyLFxuICAgICAgbWluV2lkdGhcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVSZXNpemUgPSAoeyByZWN0YW5nbGUgfSkgPT5cbiAgICAgIHJlc2l6ZUhlbHBlci52YWxpZGF0ZVJlc2l6ZSh7IHJlY3RhbmdsZSB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19