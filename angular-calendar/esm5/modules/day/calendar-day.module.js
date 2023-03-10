import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDayViewComponent } from './calendar-day-view.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekModule } from '../week/calendar-week.module';
import * as ɵngcc0 from '@angular/core';
export { CalendarDayViewComponent, } from './calendar-day-view.component';
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
CalendarDayModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarDayModule });
CalendarDayModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarDayModule_Factory(t) { return new (t || CalendarDayModule)(); }, imports: [[CommonModule, CalendarCommonModule, CalendarWeekModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarDayModule, { declarations: function () { return [CalendarDayViewComponent]; }, imports: function () { return [CommonModule, CalendarCommonModule, CalendarWeekModule]; }, exports: function () { return [CalendarDayViewComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CalendarCommonModule, CalendarWeekModule],
                declarations: [CalendarDayViewComponent],
                exports: [CalendarDayViewComponent]
            }]
    }], function () { return []; }, null); })();
    return CalendarDayModule;
}());
export { CalendarDayModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9kYXkvY2FsZW5kYXItZGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWxFLE9BQU8sRUFDTCx3QkFBd0IsR0FFekIsTUFBTSwrQkFBK0IsQ0FBQztBQU92QztBQUNtQixJQURuQjtBQUErQixJQUFDLENBQUM7SUFBcEIsaUJBQWlCLHdCQUw3QixRQUFRLENBQUMsY0FDUixPQUFPLEVBQUUsQ0FBQztXQUFZLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsY0FDakUsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUMsY0FDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUMsV0FDcEMsQ0FBQyxRQUNXLGlCQUFpQixDQUFHOzs7Ozs7Ozs7Z0RBQ2pDO0FBQUMsSUFEK0Isd0JBQUM7QUFDaEMsQ0FEZ0MsQUFBakMsSUFBaUM7QUFDakMsU0FEYSxpQkFBaUI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrTW9kdWxlIH0gZnJvbSAnLi4vd2Vlay9jYWxlbmRhci13ZWVrLm1vZHVsZSc7XG5cbmV4cG9ydCB7XG4gIENhbGVuZGFyRGF5Vmlld0NvbXBvbmVudCxcbiAgQ2FsZW5kYXJEYXlWaWV3QmVmb3JlUmVuZGVyRXZlbnQsXG59IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FsZW5kYXJDb21tb25Nb2R1bGUsIENhbGVuZGFyV2Vla01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyRGF5Vmlld0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYWxlbmRhckRheVZpZXdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRheU1vZHVsZSB7fVxuIl19