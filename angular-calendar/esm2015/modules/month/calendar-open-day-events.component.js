import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef, } from '@angular/core';
import { trigger, style, state, transition, animate, } from '@angular/animations';
import { isWithinThreshold, trackByEventId } from '../common/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-draggable-droppable';
import * as ɵngcc3 from '../common/calendar-event-title.component';
import * as ɵngcc4 from '../common/click.directive';
import * as ɵngcc5 from '../common/keydown-enter.directive';
import * as ɵngcc6 from '../common/calendar-event-actions.component';
import * as ɵngcc7 from '../common/calendar-a11y.pipe';

const _c0 = function (a0) { return { event: a0 }; };
const _c1 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c2 = function () { return { delay: 300, delta: 30 }; };
const _c3 = function (a0) { return { backgroundColor: a0 }; };
const _c4 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵtext(2, " ");
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-event-title", 9);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const eventClicked_r4 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const eventClicked_r4 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r4.emit({ event: event_r10, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(5, " ");
    ɵngcc0.ɵɵelement(6, "mwl-calendar-event-actions", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const validateDrag_r7 = ɵngcc0.ɵɵnextContext(2).validateDrag;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r10.draggable);
    ɵngcc0.ɵɵproperty("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", ɵngcc0.ɵɵpureFunction1(16, _c0, event_r10))("dragAxis", ɵngcc0.ɵɵpureFunction2(18, _c1, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", ɵngcc0.ɵɵpureFunction0(21, _c2));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(22, _c3, event_r10.color == null ? null : event_r10.color.primary));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 13, ɵngcc0.ɵɵpureFunction2(24, _c4, event_r10, ctx_r9.locale), "eventDescription"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
} }
const _c5 = function (a0, a1) { return { date: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵtemplate(5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext();
    const events_r3 = ctx_r17.events;
    const trackByEventId_r6 = ctx_r17.trackByEventId;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@collapse", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 5, ɵngcc0.ɵɵpureFunction2(11, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 8, ɵngcc0.ɵɵpureFunction2(14, _c5, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
} }
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
} if (rf & 2) {
    const isOpen_r5 = ctx.isOpen;
    ɵngcc0.ɵɵproperty("ngIf", isOpen_r5);
} }
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2, a3, a4) { return { events: a0, eventClicked: a1, isOpen: a2, trackByEventId: a3, validateDrag: a4 }; };
export const collapseAnimation = trigger('collapse', [
    state('void', style({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0,
    })),
    state('*', style({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*',
    })),
    transition('* => void', animate('150ms ease-out')),
    transition('void => *', animate('150ms ease-in')),
]);
let CalendarOpenDayEventsComponent = class CalendarOpenDayEventsComponent {
    constructor() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) { return new (t || CalendarOpenDayEventsComponent)(); };
CalendarOpenDayEventsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarOpenDayEventsComponent, selectors: [["mwl-calendar-open-day-events"]], inputs: { isOpen: "isOpen", locale: "locale", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]], template: function CalendarOpenDayEventsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c6, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc3.CalendarEventTitleComponent, ɵngcc4.ClickDirective, ɵngcc5.KeydownEnterDirective, ɵngcc6.CalendarEventActionsComponent], pipes: [ɵngcc7.CalendarA11yPipe], encapsulation: 2, data: { animation: [collapseAnimation] } });
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarOpenDayEventsComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarOpenDayEventsComponent.prototype, "date", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarOpenDayEventsComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-open-day-events',
                template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
                animations: [collapseAnimation]
            }]
    }], function () { return []; }, { isOpen: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], locale: [{
            type: Input
        }], events: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();
export { CalendarOpenDayEventsComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9tb250aC9jYWxlbmRhci1vcGVuLWRheS1ldmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FFUixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQTZCLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDL0UsSUFBRSxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztBQUNWLFFBQU0sTUFBTSxFQUFFLENBQUM7QUFDZixRQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLFFBQU0sYUFBYSxFQUFFLENBQUM7QUFDdEIsUUFBTSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3pCLEtBQUssQ0FBQyxDQUNIO0FBQ0gsSUFBRSxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztBQUNWLFFBQU0sTUFBTSxFQUFFLEdBQUc7QUFDakIsUUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixRQUFNLGFBQWEsRUFBRSxHQUFHO0FBQ3hCLFFBQU0sZ0JBQWdCLEVBQUUsR0FBRztBQUMzQixLQUFLLENBQUMsQ0FDSDtBQUNILElBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNwRCxJQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBMkZILElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0FBQzNDLElBREE7QUFBZ0IsUUFHTCxXQUFNLEdBQVksS0FBSyxDQUFDO0FBQ25DLFFBV1ksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFHckMsQ0FBQztBQUNQLFFBQ0UsbUJBQWMsR0FBRyxjQUFjLENBQUM7QUFDbEMsUUFDRSxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO0FBQ25DLElBQUEsQ0FBQztBQUNELENBREM7Ozs7Ozs7Ozt1VkFBQTtBQXRCVTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVUsOERBRkk7QUFFZjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUUsOERBRnFCO0FBRXhCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFQSw4REFGdUI7QUFFeEI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRSw4QkFBZSxXQUFXO0FBQUUsc0VBQUk7QUFFakM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRSw4QkFBbUIsV0FBVztBQUFFLDBFQUFJO0FBRXJDO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUUsOEJBQXFCLFdBQVc7QUFBRSw0RUFBSTtBQUV2QztBQUVYLElBRkcsS0FBSyxFQUFFO0FBQUUsOEJBQUssSUFBSTtBQUNyQiw0REFEc0I7QUFFVjtBQUFhLElBQXRCLE1BQU0sRUFBRTtBQUFFO0FBQ1Isb0VBRUU7QUFsQk0sOEJBQThCLG9CQXpGMUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3FCQUE4QjtNQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFvRlQsVUFDRDtPQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUNoQztBQUFDLElBQ1c7OztBQUE4QixDQXVCMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQXhCWSw4QkFBOEI7QUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3R5bGUsXG4gIHN0YXRlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGlzV2l0aGluVGhyZXNob2xkLCB0cmFja0J5RXZlbnRJZCB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlQW5pbWF0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdjb2xsYXBzZScsIFtcbiAgc3RhdGUoXG4gICAgJ3ZvaWQnLFxuICAgIHN0eWxlKHtcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdwYWRkaW5nLXRvcCc6IDAsXG4gICAgICAncGFkZGluZy1ib3R0b20nOiAwLFxuICAgIH0pXG4gICksXG4gIHN0YXRlKFxuICAgICcqJyxcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdwYWRkaW5nLXRvcCc6ICcqJyxcbiAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcqJyxcbiAgICB9KVxuICApLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcpKSxcbiAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicpKSxcbl0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1ldmVudHM9XCJldmVudHNcIlxuICAgICAgbGV0LWV2ZW50Q2xpY2tlZD1cImV2ZW50Q2xpY2tlZFwiXG4gICAgICBsZXQtaXNPcGVuPVwiaXNPcGVuXCJcbiAgICAgIGxldC10cmFja0J5RXZlbnRJZD1cInRyYWNrQnlFdmVudElkXCJcbiAgICAgIGxldC12YWxpZGF0ZURyYWc9XCJ2YWxpZGF0ZURyYWdcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtb3Blbi1kYXktZXZlbnRzXCJcbiAgICAgICAgW0Bjb2xsYXBzZV1cbiAgICAgICAgKm5nSWY9XCJpc09wZW5cIlxuICAgICAgICByb2xlPVwiYXBwbGljYXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgIHsgZGF0ZTogZGF0ZSwgbG9jYWxlOiBsb2NhbGUgfSB8IGNhbGVuZGFyQTExeTogJ29wZW5EYXlFdmVudHNBbGVydCdcbiAgICAgICAgICBcIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgcm9sZT1cImxhbmRtYXJrXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgICAgeyBkYXRlOiBkYXRlLCBsb2NhbGU6IGxvY2FsZSB9XG4gICAgICAgICAgICAgIHwgY2FsZW5kYXJBMTF5OiAnb3BlbkRheUV2ZW50c0xhbmRtYXJrJ1xuICAgICAgICAgIFwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZXZlbnRzOyB0cmFja0J5OiB0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiZXZlbnQ/LmNzc0NsYXNzXCJcbiAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICBbY2xhc3MuY2FsLWRyYWdnYWJsZV09XCJldmVudC5kcmFnZ2FibGVcIlxuICAgICAgICAgIGRyYWdBY3RpdmVDbGFzcz1cImNhbC1kcmFnLWFjdGl2ZVwiXG4gICAgICAgICAgW2Ryb3BEYXRhXT1cInsgZXZlbnQ6IGV2ZW50IH1cIlxuICAgICAgICAgIFtkcmFnQXhpc109XCJ7IHg6IGV2ZW50LmRyYWdnYWJsZSwgeTogZXZlbnQuZHJhZ2dhYmxlIH1cIlxuICAgICAgICAgIFt2YWxpZGF0ZURyYWddPVwidmFsaWRhdGVEcmFnXCJcbiAgICAgICAgICBbdG91Y2hTdGFydExvbmdQcmVzc109XCJ7IGRlbGF5OiAzMDAsIGRlbHRhOiAzMCB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGJhY2tncm91bmRDb2xvcjogZXZlbnQuY29sb3I/LnByaW1hcnkgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAmbmdzcDtcbiAgICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlXG4gICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICB2aWV3PVwibW9udGhcIlxuICAgICAgICAgICAgKG13bENsaWNrKT1cIlxuICAgICAgICAgICAgICBldmVudENsaWNrZWQuZW1pdCh7IGV2ZW50OiBldmVudCwgc291cmNlRXZlbnQ6ICRldmVudCB9KVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChtd2xLZXlkb3duRW50ZXIpPVwiXG4gICAgICAgICAgICAgIGV2ZW50Q2xpY2tlZC5lbWl0KHsgZXZlbnQ6IGV2ZW50LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgICAgIHsgZXZlbnQ6IGV2ZW50LCBsb2NhbGU6IGxvY2FsZSB9XG4gICAgICAgICAgICAgICAgfCBjYWxlbmRhckExMXk6ICdldmVudERlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtdGl0bGU+XG4gICAgICAgICAgJm5nc3A7XG4gICAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zXG4gICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50QWN0aW9uc1RlbXBsYXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGV2ZW50czogZXZlbnRzLFxuICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZCxcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXG4gICAgICAgIHRyYWNrQnlFdmVudElkOiB0cmFja0J5RXZlbnRJZCxcbiAgICAgICAgdmFsaWRhdGVEcmFnOiB2YWxpZGF0ZURyYWdcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBhbmltYXRpb25zOiBbY29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck9wZW5EYXlFdmVudHNDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcblxuICBAT3V0cHV0KCkgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBhbnk7XG4gIH0+KCk7XG5cbiAgdHJhY2tCeUV2ZW50SWQgPSB0cmFja0J5RXZlbnRJZDtcblxuICB2YWxpZGF0ZURyYWcgPSBpc1dpdGhpblRocmVzaG9sZDtcbn1cbiJdfQ==