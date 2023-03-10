import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDayViewComponent } from './calendar-day-view.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekModule } from '../week/calendar-week.module';
import * as ɵngcc0 from '@angular/core';
export { CalendarDayViewComponent, } from './calendar-day-view.component';
let CalendarDayModule = class CalendarDayModule {
};
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
    }], null, null); })();
export { CalendarDayModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9kYXkvY2FsZW5kYXItZGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWxFLE9BQU8sRUFDTCx3QkFBd0IsR0FFekIsTUFBTSwrQkFBK0IsQ0FBQztBQU92QyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtBQUFHLENBQUEsQ0FBQTtBQUFwQixpQkFBaUIsb0JBTDdCLFFBQVEsQ0FBQyxVQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVk7Q0FBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxVQUNqRSxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxVQUN4QyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxPQUNwQyxDQUFDLElBQ1csaUJBQWlCLENBQUc7Ozs7Ozs7OzswQkFDakM7QUFBQyxTQURZLGlCQUFpQjtBQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1kYXktdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtNb2R1bGUgfSBmcm9tICcuLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50LFxuICBDYWxlbmRhckRheVZpZXdCZWZvcmVSZW5kZXJFdmVudCxcbn0gZnJvbSAnLi9jYWxlbmRhci1kYXktdmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDYWxlbmRhckNvbW1vbk1vZHVsZSwgQ2FsZW5kYXJXZWVrTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbGVuZGFyRGF5Vmlld0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGF5TW9kdWxlIHt9XG4iXX0=