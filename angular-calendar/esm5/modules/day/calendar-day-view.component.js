import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, } from '@angular/core';
import { Subject } from 'rxjs';
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../week/calendar-week-view.component';
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
        this.eventClicked = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarDayViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarDayViewComponent.prototype, "events", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], CalendarDayViewComponent.prototype, "refresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarDayViewComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", snapDraggedEvents: "snapDraggedEvents", viewDate: "viewDate", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipTemplate: "tooltipTemplate", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 1, vars: 23, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view", 0);
        ɵngcc0.ɵɵlistener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) { return ctx.beforeViewRender.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    } }, directives: [ɵngcc1.CalendarWeekViewComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-day-view',
                template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
            }]
    }], function () { return []; }, { events: [{
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
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], snapDraggedEvents: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], beforeViewRender: [{
            type: Output
        }], viewDate: [{
            type: Input
        }], refresh: [{
            type: Input
        }], locale: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], allDayEventsLabelTemplate: [{
            type: Input
        }], currentTimeMarkerTemplate: [{
            type: Input
        }] }); })();
    return CalendarDayViewComponent;
}());
export { CalendarDayViewComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2RheS9jYWxlbmRhci1kYXktdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBb0NIO0FBRWMsSUFGZDtBQUFzQyxRQU1wQztBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxXQUFNLEdBQW9CLEVBQUUsQ0FBQztBQUN4QyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFXLENBQUMsQ0FBQztBQUNwQyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxzQkFBaUIsR0FBVyxFQUFFLENBQUM7QUFDMUMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsaUJBQVksR0FBVyxDQUFDLENBQUM7QUFDcEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsbUJBQWMsR0FBVyxDQUFDLENBQUM7QUFDdEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsZUFBVSxHQUFXLEVBQUUsQ0FBQztBQUNuQyxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztBQUNyQyxRQWdCRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcscUJBQWdCLEdBQW1CLE1BQU0sQ0FBQztBQUNyRCxRQU1FO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyx3QkFBbUIsR0FBWSxJQUFJLENBQUM7QUFDL0MsUUFDRTtBQUNGO0FBQ007QUFFQSxX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QXVCLGNBQ2pDO0dBQVEsRUFBRSwyeUNBK0JULFVBQ0YsQ0FBQyxRQUNXLHdCQUF3QixDQTZJcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCwrQkFBQztBQUNBLENBREEsQUE3SUQsSUE2SUM7QUFDRCxTQTlJYSx3QkFBd0I7QUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudCB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1ldmVudC10aW1lcy1jaGFuZ2VkLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudCB9IGZyb20gJy4uL3dlZWsvY2FsZW5kYXItd2Vlay5tb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBDYWxlbmRhckRheVZpZXdCZWZvcmVSZW5kZXJFdmVudCA9IENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudDtcblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gZGF5LiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItZGF5LXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCI+XG4gKiA8L213bC1jYWxlbmRhci1kYXktdmlldz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZGF5LXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtd2wtY2FsZW5kYXItd2Vlay12aWV3XG4gICAgICBjbGFzcz1cImNhbC1kYXktdmlld1wiXG4gICAgICBbZGF5c0luV2Vla109XCIxXCJcbiAgICAgIFt2aWV3RGF0ZV09XCJ2aWV3RGF0ZVwiXG4gICAgICBbZXZlbnRzXT1cImV2ZW50c1wiXG4gICAgICBbaG91clNlZ21lbnRzXT1cImhvdXJTZWdtZW50c1wiXG4gICAgICBbaG91clNlZ21lbnRIZWlnaHRdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgW2RheVN0YXJ0SG91cl09XCJkYXlTdGFydEhvdXJcIlxuICAgICAgW2RheVN0YXJ0TWludXRlXT1cImRheVN0YXJ0TWludXRlXCJcbiAgICAgIFtkYXlFbmRIb3VyXT1cImRheUVuZEhvdXJcIlxuICAgICAgW2RheUVuZE1pbnV0ZV09XCJkYXlFbmRNaW51dGVcIlxuICAgICAgW3JlZnJlc2hdPVwicmVmcmVzaFwiXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICBbZXZlbnRTbmFwU2l6ZV09XCJldmVudFNuYXBTaXplXCJcbiAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICBbdG9vbHRpcERlbGF5XT1cInRvb2x0aXBEZWxheVwiXG4gICAgICBbaG91clNlZ21lbnRUZW1wbGF0ZV09XCJob3VyU2VnbWVudFRlbXBsYXRlXCJcbiAgICAgIFtldmVudFRlbXBsYXRlXT1cImV2ZW50VGVtcGxhdGVcIlxuICAgICAgW2V2ZW50VGl0bGVUZW1wbGF0ZV09XCJldmVudFRpdGxlVGVtcGxhdGVcIlxuICAgICAgW2V2ZW50QWN0aW9uc1RlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgIFtzbmFwRHJhZ2dlZEV2ZW50c109XCJzbmFwRHJhZ2dlZEV2ZW50c1wiXG4gICAgICBbYWxsRGF5RXZlbnRzTGFiZWxUZW1wbGF0ZV09XCJhbGxEYXlFdmVudHNMYWJlbFRlbXBsYXRlXCJcbiAgICAgIFtjdXJyZW50VGltZU1hcmtlclRlbXBsYXRlXT1cImN1cnJlbnRUaW1lTWFya2VyVGVtcGxhdGVcIlxuICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChob3VyU2VnbWVudENsaWNrZWQpPVwiaG91clNlZ21lbnRDbGlja2VkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoZXZlbnRUaW1lc0NoYW5nZWQpPVwiZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChiZWZvcmVWaWV3UmVuZGVyKT1cImJlZm9yZVZpZXdSZW5kZXIuZW1pdCgkZXZlbnQpXCJcbiAgICA+PC9td2wtY2FsZW5kYXItd2Vlay12aWV3PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRheVZpZXdDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKSB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXZlbnRzIHRvIGRpc3BsYXkgb24gdmlld1xuICAgKiBUaGUgc2NoZW1hIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY2FsZW5kYXItdXRpbHMvYmxvYi9jNTE2ODk5ODVmNTlhMjcxOTQwZTMwYmM0ZTJjNGUxZmVlM2ZjYjVjL3NyYy9jYWxlbmRhclV0aWxzLnRzI0w0OS1MNjNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2Ygc2VnbWVudHMgaW4gYW4gaG91ci4gTXVzdCBiZSA8PSA2XG4gICAqL1xuICBASW5wdXQoKSBob3VyU2VnbWVudHM6IG51bWJlciA9IDI7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzIG9mIGVhY2ggaG91ciBzZWdtZW50XG4gICAqL1xuICBASW5wdXQoKSBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgc3RhcnQgaG91cnMgaW4gMjQgaG91ciB0aW1lLiBNdXN0IGJlIDAtMjNcbiAgICovXG4gIEBJbnB1dCgpIGRheVN0YXJ0SG91cjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBtaW51dGVzLiBNdXN0IGJlIDAtNTlcbiAgICovXG4gIEBJbnB1dCgpIGRheVN0YXJ0TWludXRlOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IGVuZCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KCkgZGF5RW5kSG91cjogbnVtYmVyID0gMjM7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KCkgZGF5RW5kTWludXRlOiBudW1iZXIgPSA1OTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRTbmFwU2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBQbGFjZW1lbnRBcnJheSA9ICdhdXRvJztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgbm90IHByb3ZpZGVkIHRoZSB0b29sdGlwXG4gICAqIHdpbGwgYmUgZGlzcGxheWVkIGltbWVkaWF0ZWx5LlxuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcERlbGF5OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhvdXIgc2VnbWVudFxuICAgKi9cbiAgQElucHV0KCkgaG91clNlZ21lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciBkYXkgdmlldyBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAqL1xuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc25hcCBldmVudHMgdG8gYSBncmlkIHdoZW4gZHJhZ2dpbmdcbiAgICovXG4gIEBJbnB1dCgpIHNuYXBEcmFnZ2VkRXZlbnRzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgYWxsIGRheSBldmVudHMgbGFiZWwgdGV4dFxuICAgKi9cbiAgQElucHV0KCkgYWxsRGF5RXZlbnRzTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgY3VycmVudCB0aW1lIG1hcmtlclxuICAgKi9cbiAgQElucHV0KCkgY3VycmVudFRpbWVNYXJrZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgdGl0bGUgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBob3VyIHNlZ21lbnQgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIGhvdXJTZWdtZW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRhdGU6IERhdGU7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpIGV2ZW50VGltZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRcbiAgPigpO1xuXG4gIC8qKlxuICAgKiBBbiBvdXRwdXQgdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHZpZXcgaXMgcmVuZGVyZWQgZm9yIHRoZSBjdXJyZW50IGRheS5cbiAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byBhbiBob3VyIGdyaWQgc2VnbWVudCBpdCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBob3VyIHNlZ21lbnQgaW4gdGhlIHRlbXBsYXRlXG4gICAqL1xuICBAT3V0cHV0KCkgYmVmb3JlVmlld1JlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQ2FsZW5kYXJEYXlWaWV3QmVmb3JlUmVuZGVyRXZlbnRcbiAgPigpO1xufVxuIl19