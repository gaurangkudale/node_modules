import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../common/calendar-a11y.pipe';
import * as ɵngcc3 from '../common/calendar-date.pipe';

function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    const segment_r3 = ctx_r9.segment;
    const daysInWeek_r7 = ctx_r9.daysInWeek;
    const locale_r4 = ctx_r9.locale;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
} }
const _c0 = function () { return {}; };
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r3 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r7 = ctx.daysInWeek;
    ɵngcc0.ɵɵstyleProp("height", segmentHeight_r5, "px");
    ɵngcc0.ɵɵclassProp("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    ɵngcc0.ɵɵproperty("ngClass", segment_r3.cssClass);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(1, 9, ɵngcc0.ɵɵpureFunction0(12, _c0), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", isTimeLabel_r6);
} }
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { segment: a0, locale: a1, segmentHeight: a2, isTimeLabel: a3, daysInWeek: a4 }; };
let CalendarWeekViewHourSegmentComponent = class CalendarWeekViewHourSegmentComponent {
};
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) { return new (t || CalendarWeekViewHourSegmentComponent)(); };
CalendarWeekViewHourSegmentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHourSegmentComponent, selectors: [["mwl-calendar-week-view-hour-segment"]], inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c1, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass, ɵngcc1.NgIf], pipes: [ɵngcc2.CalendarA11yPipe, ɵngcc3.CalendarDatePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHourSegmentComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-hour-segment',
                template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time" *ngIf="isTimeLabel">
          {{
            segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale
          }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
            }]
    }], null, { segment: [{
            type: Input
        }], segmentHeight: [{
            type: Input
        }], locale: [{
            type: Input
        }], isTimeLabel: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
export { CalendarWeekViewHourSegmentComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWhvdXItc2VnbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRDlELElBQWEsb0NBQW9DLEdBQWpELE1BQWEsb0NBQW9DO0FBQ2pELENBV0M7Ozs7Ozs7Ozs0SkFBQTtBQVhVO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFSixxRUFGZ0M7QUFFN0I7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVHLDJFQUZrQjtBQUV0QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRVUsb0VBRkk7QUFFZjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUsseUVBRmU7QUFFckI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVNLHdFQUZZO0FBRW5CO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUUsOEJBQWUsV0FBVztBQUFFLDRFQUFJO0FBWC9CLG9DQUFvQyxvQkFoRGhELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7R0FBcUMsVUFDL0M7SUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQTRDVCxNQUNGLENBQUMsSUFDVzs4QkFBb0M7QUFZaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FiWSxvQ0FBb0M7QUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdIb3VyU2VnbWVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LXNlZ21lbnQ9XCJzZWdtZW50XCJcbiAgICAgIGxldC1sb2NhbGU9XCJsb2NhbGVcIlxuICAgICAgbGV0LXNlZ21lbnRIZWlnaHQ9XCJzZWdtZW50SGVpZ2h0XCJcbiAgICAgIGxldC1pc1RpbWVMYWJlbD1cImlzVGltZUxhYmVsXCJcbiAgICAgIGxldC1kYXlzSW5XZWVrPVwiZGF5c0luV2Vla1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCJcbiAgICAgICAgICB7fVxuICAgICAgICAgICAgfCBjYWxlbmRhckExMXlcbiAgICAgICAgICAgICAgOiAoZGF5c0luV2VlayA9PT0gMVxuICAgICAgICAgICAgICAgICAgPyAnaGlkZURheUhvdXJTZWdtZW50J1xuICAgICAgICAgICAgICAgICAgOiAnaGlkZVdlZWtIb3VyU2VnbWVudCcpXG4gICAgICAgIFwiXG4gICAgICAgIGNsYXNzPVwiY2FsLWhvdXItc2VnbWVudFwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic2VnbWVudEhlaWdodFwiXG4gICAgICAgIFtjbGFzcy5jYWwtaG91ci1zdGFydF09XCJzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbY2xhc3MuY2FsLWFmdGVyLWhvdXItc3RhcnRdPVwiIXNlZ21lbnQuaXNTdGFydFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInNlZ21lbnQuY3NzQ2xhc3NcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLXRpbWVcIiAqbmdJZj1cImlzVGltZUxhYmVsXCI+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgIHNlZ21lbnQuZGlzcGxheURhdGVcbiAgICAgICAgICAgICAgfCBjYWxlbmRhckRhdGVcbiAgICAgICAgICAgICAgICA6IChkYXlzSW5XZWVrID09PSAxID8gJ2RheVZpZXdIb3VyJyA6ICd3ZWVrVmlld0hvdXInKVxuICAgICAgICAgICAgICAgIDogbG9jYWxlXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIHNlZ21lbnQ6IHNlZ21lbnQsXG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBzZWdtZW50SGVpZ2h0OiBzZWdtZW50SGVpZ2h0LFxuICAgICAgICBpc1RpbWVMYWJlbDogaXNUaW1lTGFiZWwsXG4gICAgICAgIGRheXNJbldlZWs6IGRheXNJbldlZWtcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3SG91clNlZ21lbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZWdtZW50OiBXZWVrVmlld0hvdXJTZWdtZW50O1xuXG4gIEBJbnB1dCgpIHNlZ21lbnRIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBpc1RpbWVMYWJlbDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBkYXlzSW5XZWVrOiBudW1iZXI7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iXX0=