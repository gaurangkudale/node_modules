import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './click.directive';
import * as ɵngcc3 from './keydown-enter.directive';
import * as ɵngcc4 from './calendar-a11y.pipe';

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
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByActionId = function (index, action) {
            return action.id ? action.id : action;
        };
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarEventActionsComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) { return new (t || CalendarEventActionsComponent)(); };
CalendarEventActionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventActionsComponent, selectors: [["mwl-calendar-event-actions"]], inputs: { event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]], template: function CalendarEventActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx.event, ctx.trackByActionId));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc2.ClickDirective, ɵngcc3.KeydownEnterDirective], pipes: [ɵngcc4.CalendarA11yPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventActionsComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-event-actions',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
    return CalendarEventActionsComponent;
}());
export { CalendarEventActionsComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUM5RDtBQUNvQixJQURwQjtBQUEyQyxRQUt6QyxvQkFBZSxHQUFHLFVBQUMsS0FBYSxFQUFFLE1BQW1CO0FBQUksWUFDdkQsT0FBQSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNO0FBQ2xDLFFBREksQ0FBOEIsQ0FBQztBQUNuQyxJQUFBLENBQUM7QUFDRCxJQVBXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFUSxnRUFGWTtBQUVoQyxJQUFXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUUsa0NBQWUsV0FBVztBQUFFLHlFQUFJO0lBSC9CLDZCQUE2Qix3QkF0Q3pDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSw0QkFBNEIsY0FDdEMsUUFBUTtBQUFFOzs7O1NBa0NULFVBQ0YsQ0FBQyxRQUNXO2dCQUE2QixDQU96Qzs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsb0NBQUM7QUFDQSxDQURBLEFBUEQsSUFPQztBQUNELFNBUmEsNkJBQTZCO0FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIEV2ZW50QWN0aW9uIH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiXG4gICAgICBsZXQtdHJhY2tCeUFjdGlvbklkPVwidHJhY2tCeUFjdGlvbklkXCJcbiAgICA+XG4gICAgICA8c3BhbiAqbmdJZj1cImV2ZW50LmFjdGlvbnNcIiBjbGFzcz1cImNhbC1ldmVudC1hY3Rpb25zXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtYWN0aW9uXCJcbiAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGV2ZW50LmFjdGlvbnM7IHRyYWNrQnk6IHRyYWNrQnlBY3Rpb25JZFwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImFjdGlvbi5vbkNsaWNrKHsgZXZlbnQ6IGV2ZW50LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXCJcbiAgICAgICAgICAobXdsS2V5ZG93bkVudGVyKT1cIlxuICAgICAgICAgICAgYWN0aW9uLm9uQ2xpY2soeyBldmVudDogZXZlbnQsIHNvdXJjZUV2ZW50OiAkZXZlbnQgfSlcbiAgICAgICAgICBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImFjdGlvbi5jc3NDbGFzc1wiXG4gICAgICAgICAgW2lubmVySHRtbF09XCJhY3Rpb24ubGFiZWxcIlxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgIHsgYWN0aW9uOiBhY3Rpb24gfSB8IGNhbGVuZGFyQTExeTogJ2FjdGlvbkJ1dHRvbkxhYmVsJ1xuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICB0cmFja0J5QWN0aW9uSWQ6IHRyYWNrQnlBY3Rpb25JZFxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgdHJhY2tCeUFjdGlvbklkID0gKGluZGV4OiBudW1iZXIsIGFjdGlvbjogRXZlbnRBY3Rpb24pID0+XG4gICAgYWN0aW9uLmlkID8gYWN0aW9uLmlkIDogYWN0aW9uO1xufVxuIl19