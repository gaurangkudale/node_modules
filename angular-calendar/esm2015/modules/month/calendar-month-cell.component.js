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
    const day_r3 = ɵngcc0.ɵɵnextContext().day;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r3.badgeTotal);
} }
const _c0 = function (a0) { return { backgroundColor: a0 }; };
const _c1 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
const _c2 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c3 = function () { return { delay: 300, delta: 30 }; };
const _c4 = function () { return {}; };
function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const event_r19 = ctx.$implicit; const highlightDay_r7 = ɵngcc0.ɵɵnextContext(2).highlightDay; return highlightDay_r7.emit({ event: event_r19 }); })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const event_r19 = ctx.$implicit; const unhighlightDay_r8 = ɵngcc0.ɵɵnextContext(2).unhighlightDay; return unhighlightDay_r8.emit({ event: event_r19 }); })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const event_r19 = ctx.$implicit; const eventClicked_r9 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r9.emit({ event: event_r19, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    const tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    const tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    const tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    const tooltipDelay_r12 = ctx_r27.tooltipDelay;
    const day_r3 = ctx_r27.day;
    const validateDrag_r14 = ctx_r27.validateDrag;
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r19.draggable);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(22, _c0, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", ɵngcc0.ɵɵpipeBind3(1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", ɵngcc0.ɵɵpureFunction2(24, _c1, event_r19, day_r3))("dragAxis", ɵngcc0.ɵɵpureFunction2(27, _c2, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(30, _c3));
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 19, ɵngcc0.ɵɵpureFunction0(31, _c4), "hideMonthCellEvents"));
} }
function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext();
    const day_r3 = ctx_r28.day;
    const trackByEventId_r13 = ctx_r28.trackByEventId;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
} }
const _c5 = function (a0, a1) { return { day: a0, locale: a1 }; };
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
    const day_r3 = ctx.day;
    const locale_r5 = ctx.locale;
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 4, ɵngcc0.ɵɵpureFunction2(11, _c5, day_r3, locale_r5), "monthCell"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.badgeTotal > 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", day_r3.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
let CalendarMonthCellComponent = class CalendarMonthCellComponent {
    constructor() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) { return new (t || CalendarMonthCellComponent)(); };
CalendarMonthCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthCellComponent, selectors: [["mwl-calendar-month-cell"]], hostAttrs: [1, "cal-cell", "cal-day-cell"], hostVars: 18, hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    } }, inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, decls: 3, vars: 15, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]], template: function CalendarMonthCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c6, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc3.CalendarTooltipDirective, ɵngcc4.ClickDirective], pipes: [ɵngcc5.CalendarA11yPipe, ɵngcc6.CalendarDatePipe, ɵngcc7.CalendarEventTitlePipe], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthCellComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-cell',
                template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y: 'monthCell'
        "
      >
        <span aria-hidden="true">
          <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{
            day.badgeTotal
          }}</span>
          <span class="cal-day-number">{{
            day.date | calendarDate: 'monthViewDayNumber':locale
          }}</span>
        </span>
      </div>
      <div class="cal-events" *ngIf="day.events.length > 0">
        <div
          class="cal-event"
          *ngFor="let event of day.events; trackBy: trackByEventId"
          [ngStyle]="{ backgroundColor: event.color?.primary }"
          [ngClass]="event?.cssClass"
          (mouseenter)="highlightDay.emit({ event: event })"
          (mouseleave)="unhighlightDay.emit({ event: event })"
          [mwlCalendarTooltip]="
            event.title | calendarEventTitle: 'monthTooltip':event
          "
          [tooltipPlacement]="tooltipPlacement"
          [tooltipEvent]="event"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipAppendToBody]="tooltipAppendToBody"
          [tooltipDelay]="tooltipDelay"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event, draggedFrom: day }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
          (mwlClick)="eventClicked.emit({ event: event, sourceEvent: $event })"
          [attr.aria-hidden]="{} | calendarA11y: 'hideMonthCellEvents'"
        ></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
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
export { CalendarMonthCellComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0duRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtBQUN2QyxJQURBO0FBQWdCLFFBaUJKLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDakUsUUFDWSxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25FLFFBQ1ksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFHckMsQ0FBQztBQUNQLFFBQ0UsbUJBQWMsR0FBRyxjQUFjLENBQUM7QUFDbEMsUUFDRSxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO0FBQ25DLElBQUEsQ0FBQztBQUNELENBREM7Ozs7Ozs7Ozs7OzhSQUFBO0FBNUJVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFTyx1REFGVTtBQUVsQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUcsMkRBRmtCO0FBRXRCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFVSwwREFGSTtBQUVmO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFUixvRUFGd0M7QUFFakM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVILHVFQUYrQjtBQUU3QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFLDhCQUFlLFdBQVc7QUFBRSxrRUFBSTtBQUVqQztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFLDhCQUFnQixXQUFXO0FBQUUsbUVBQUk7QUFFbEM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVILGdFQUY4QjtBQUUzQjtBQUFhLElBQXRCLE1BQU0sRUFBRTtBQUFFLDhCQUFhLFlBQVk7QUFBRSxnRUFBeUI7QUFFckQ7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBRSw4QkFBZSxZQUFZO0FBQUUsa0VBQXlCO0FBRXZEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUU7QUFDUixnRUFFRTtBQXhCTSwwQkFBMEIsb0JBN0Z0QyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7Z0JBQXlCO0NBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBNkVULFVBQ0Q7Q0FBSSxFQUFFLGNBQ0osS0FBSyxFQUFFOztHQUF1QjtXQUM5Qjs7S0FBa0IsRUFBRSxZQUFZO1NBQ2hDLG1CQUFtQixFQUFFLGFBQWE7S0FDbEMsb0JBQW9CLEVBQUUsY0FBYztDQUNwQyxxQkFBcUIsRUFBRSxlQUFlLGNBQ3RDO21CQUFzQixFQUFFLGFBQWEsY0FDckM7YUFBdUIsRUFBRSxjQUFjLGNBQ3ZDO09BQXdCLEVBQUUsdUJBQXVCLGNBQ2pEO0tBQWtCLEVBQUUsaUJBQWlCLGNBQ3JDO01BQTZCLEVBQUUsdUJBQXVCLFdBQ3ZELE1BQ0YsQ0FBQyxJQUNXO1FBQTBCLENBNkJ0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQTlCWSwwQkFBMEI7QUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9udGhWaWV3RGF5LCBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgaXNXaXRoaW5UaHJlc2hvbGQsIHRyYWNrQnlFdmVudElkIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXkgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1tb250aC1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1kYXk9XCJkYXlcIlxuICAgICAgbGV0LW9wZW5EYXk9XCJvcGVuRGF5XCJcbiAgICAgIGxldC1sb2NhbGU9XCJsb2NhbGVcIlxuICAgICAgbGV0LXRvb2x0aXBQbGFjZW1lbnQ9XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgIGxldC1oaWdobGlnaHREYXk9XCJoaWdobGlnaHREYXlcIlxuICAgICAgbGV0LXVuaGlnaGxpZ2h0RGF5PVwidW5oaWdobGlnaHREYXlcIlxuICAgICAgbGV0LWV2ZW50Q2xpY2tlZD1cImV2ZW50Q2xpY2tlZFwiXG4gICAgICBsZXQtdG9vbHRpcFRlbXBsYXRlPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgIGxldC10b29sdGlwQXBwZW5kVG9Cb2R5PVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICBsZXQtdG9vbHRpcERlbGF5PVwidG9vbHRpcERlbGF5XCJcbiAgICAgIGxldC10cmFja0J5RXZlbnRJZD1cInRyYWNrQnlFdmVudElkXCJcbiAgICAgIGxldC12YWxpZGF0ZURyYWc9XCJ2YWxpZGF0ZURyYWdcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtY2VsbC10b3BcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgIHsgZGF5OiBkYXksIGxvY2FsZTogbG9jYWxlIH0gfCBjYWxlbmRhckExMXk6ICdtb250aENlbGwnXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FsLWRheS1iYWRnZVwiICpuZ0lmPVwiZGF5LmJhZGdlVG90YWwgPiAwXCI+e3tcbiAgICAgICAgICAgIGRheS5iYWRnZVRvdGFsXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWwtZGF5LW51bWJlclwiPnt7XG4gICAgICAgICAgICBkYXkuZGF0ZSB8IGNhbGVuZGFyRGF0ZTogJ21vbnRoVmlld0RheU51bWJlcic6bG9jYWxlXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudHNcIiAqbmdJZj1cImRheS5ldmVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiBkYXkuZXZlbnRzOyB0cmFja0J5OiB0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgW25nU3R5bGVdPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGV2ZW50LmNvbG9yPy5wcmltYXJ5IH1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaGlnaGxpZ2h0RGF5LmVtaXQoeyBldmVudDogZXZlbnQgfSlcIlxuICAgICAgICAgIChtb3VzZWxlYXZlKT1cInVuaGlnaGxpZ2h0RGF5LmVtaXQoeyBldmVudDogZXZlbnQgfSlcIlxuICAgICAgICAgIFttd2xDYWxlbmRhclRvb2x0aXBdPVwiXG4gICAgICAgICAgICBldmVudC50aXRsZSB8IGNhbGVuZGFyRXZlbnRUaXRsZTogJ21vbnRoVG9vbHRpcCc6ZXZlbnRcbiAgICAgICAgICBcIlxuICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgIFt0b29sdGlwRXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICBbdG9vbHRpcERlbGF5XT1cInRvb2x0aXBEZWxheVwiXG4gICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiZXZlbnQuZHJhZ2dhYmxlXCJcbiAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgIFtkcm9wRGF0YV09XCJ7IGV2ZW50OiBldmVudCwgZHJhZ2dlZEZyb206IGRheSB9XCJcbiAgICAgICAgICBbZHJhZ0F4aXNdPVwieyB4OiBldmVudC5kcmFnZ2FibGUsIHk6IGV2ZW50LmRyYWdnYWJsZSB9XCJcbiAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgICAgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwieyBkZWxheTogMzAwLCBkZWx0YTogMzAgfVwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHsgZXZlbnQ6IGV2ZW50LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCJ7fSB8IGNhbGVuZGFyQTExeTogJ2hpZGVNb250aENlbGxFdmVudHMnXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgb3BlbkRheTogb3BlbkRheSxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIHRvb2x0aXBQbGFjZW1lbnQ6IHRvb2x0aXBQbGFjZW1lbnQsXG4gICAgICAgIGhpZ2hsaWdodERheTogaGlnaGxpZ2h0RGF5LFxuICAgICAgICB1bmhpZ2hsaWdodERheTogdW5oaWdobGlnaHREYXksXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkLFxuICAgICAgICB0b29sdGlwVGVtcGxhdGU6IHRvb2x0aXBUZW1wbGF0ZSxcbiAgICAgICAgdG9vbHRpcEFwcGVuZFRvQm9keTogdG9vbHRpcEFwcGVuZFRvQm9keSxcbiAgICAgICAgdG9vbHRpcERlbGF5OiB0b29sdGlwRGVsYXksXG4gICAgICAgIHRyYWNrQnlFdmVudElkOiB0cmFja0J5RXZlbnRJZCxcbiAgICAgICAgdmFsaWRhdGVEcmFnOiB2YWxpZGF0ZURyYWdcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdjYWwtY2VsbCBjYWwtZGF5LWNlbGwnLFxuICAgICdbY2xhc3MuY2FsLXBhc3RdJzogJ2RheS5pc1Bhc3QnLFxuICAgICdbY2xhc3MuY2FsLXRvZGF5XSc6ICdkYXkuaXNUb2RheScsXG4gICAgJ1tjbGFzcy5jYWwtZnV0dXJlXSc6ICdkYXkuaXNGdXR1cmUnLFxuICAgICdbY2xhc3MuY2FsLXdlZWtlbmRdJzogJ2RheS5pc1dlZWtlbmQnLFxuICAgICdbY2xhc3MuY2FsLWluLW1vbnRoXSc6ICdkYXkuaW5Nb250aCcsXG4gICAgJ1tjbGFzcy5jYWwtb3V0LW1vbnRoXSc6ICchZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsLWhhcy1ldmVudHNdJzogJ2RheS5ldmVudHMubGVuZ3RoID4gMCcsXG4gICAgJ1tjbGFzcy5jYWwtb3Blbl0nOiAnZGF5ID09PSBvcGVuRGF5JyxcbiAgICAnW2NsYXNzLmNhbC1ldmVudC1oaWdobGlnaHRdJzogJyEhZGF5LmJhY2tncm91bmRDb2xvcicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhDZWxsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF5OiBNb250aFZpZXdEYXk7XG5cbiAgQElucHV0KCkgb3BlbkRheTogTW9udGhWaWV3RGF5O1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5O1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBEZWxheTogbnVtYmVyIHwgbnVsbDtcblxuICBAT3V0cHV0KCkgaGlnaGxpZ2h0RGF5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgdW5oaWdobGlnaHREYXk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBldmVudENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgfT4oKTtcblxuICB0cmFja0J5RXZlbnRJZCA9IHRyYWNrQnlFdmVudElkO1xuXG4gIHZhbGlkYXRlRHJhZyA9IGlzV2l0aGluVGhyZXNob2xkO1xufVxuIl19