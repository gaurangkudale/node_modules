import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarWeekViewComponent } from './calendar-week-view.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekViewHourSegmentComponent } from './calendar-week-view-hour-segment.component';
import { CalendarWeekViewCurrentTimeMarkerComponent } from './calendar-week-view-current-time-marker.component';
import * as ɵngcc0 from '@angular/core';
export { CalendarWeekViewComponent, } from './calendar-week-view.component';
export { getWeekViewPeriod } from '../common/util';
let CalendarWeekModule = class CalendarWeekModule {
};
CalendarWeekModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarWeekModule });
CalendarWeekModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarWeekModule_Factory(t) { return new (t || CalendarWeekModule)(); }, imports: [[
            CommonModule,
            ResizableModule,
            DragAndDropModule,
            CalendarCommonModule,
        ], ResizableModule,
        DragAndDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarWeekModule, { declarations: function () { return [CalendarWeekViewComponent,
        CalendarWeekViewHeaderComponent,
        CalendarWeekViewEventComponent,
        CalendarWeekViewHourSegmentComponent,
        CalendarWeekViewCurrentTimeMarkerComponent]; }, imports: function () { return [CommonModule,
        ResizableModule,
        DragAndDropModule,
        CalendarCommonModule]; }, exports: function () { return [ResizableModule,
        DragAndDropModule,
        CalendarWeekViewComponent,
        CalendarWeekViewHeaderComponent,
        CalendarWeekViewEventComponent,
        CalendarWeekViewHourSegmentComponent,
        CalendarWeekViewCurrentTimeMarkerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ResizableModule,
                    DragAndDropModule,
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
                    ResizableModule,
                    DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent,
                ]
            }]
    }], null, null); })();
export { CalendarWeekModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQUVoSCxPQUFPLEVBQ0wseUJBQXlCLEdBRTFCLE1BQU0sZ0NBQWdDLENBQUM7QUFNeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUEwQm5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0FBQUcsQ0FBQSxDQUFBO0FBQXJCLGtCQUFrQixvQkF4QjlCLFFBQVEsQ0FBQyxVQUNSLE9BQU8sRUFBRSxjQUNQO1dBQVksY0FDWixlQUFlLGNBQ2YsaUJBQWlCLGNBQ2pCLG9CQUFvQixXQUNyQixVQUNELFlBQVksRUFBRSxjQUNaO3NCQUF5QjtVQUN6QjtZQUErQixjQUMvQjt5QkFBOEI7S0FDOUI7YUFBb0MsY0FDcEM7c0NBQTBDLFdBQzNDLFVBQ0QsT0FBTyxFQUFFLGNBQ1AsZUFBZSxjQUNmLGlCQUFpQixjQUNqQix5QkFBeUI7SUFDekIsK0JBQStCO1FBQy9CLDhCQUE4QjtZQUM5QjtFQUFvQyxjQUNwQywwQ0FBMEMsV0FDM0MsT0FDRixDQUFDLElBQ1csa0JBQWtCLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDbEM7QUFBQyxTQURZLGtCQUFrQjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdFdmVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LWV2ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdIb3VyU2VnbWVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LWhvdXItc2VnbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0N1cnJlbnRUaW1lTWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXctY3VycmVudC10aW1lLW1hcmtlci5jb21wb25lbnQnO1xuXG5leHBvcnQge1xuICBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50LFxuICBDYWxlbmRhcldlZWtWaWV3QmVmb3JlUmVuZGVyRXZlbnQsXG59IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge1xuICBXZWVrVmlld0FsbERheUV2ZW50IGFzIENhbGVuZGFyV2Vla1ZpZXdBbGxEYXlFdmVudCxcbiAgV2Vla1ZpZXdBbGxEYXlFdmVudFJvdyBhcyBDYWxlbmRhcldlZWtWaWV3QWxsRGF5RXZlbnRSb3csXG4gIEdldFdlZWtWaWV3QXJncyBhcyBDYWxlbmRhckdldFdlZWtWaWV3QXJncyxcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuZXhwb3J0IHsgZ2V0V2Vla1ZpZXdQZXJpb2QgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0V2ZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdIb3VyU2VnbWVudENvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3Q3VycmVudFRpbWVNYXJrZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXNpemFibGVNb2R1bGUsXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0NvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3SGVhZGVyQ29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdFdmVudENvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3SG91clNlZ21lbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0N1cnJlbnRUaW1lTWFya2VyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtNb2R1bGUge31cbiJdfQ==