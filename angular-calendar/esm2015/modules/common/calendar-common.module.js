import * as ɵngcc0 from '@angular/core';
var CalendarCommonModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, I18nPluralPipe } from '@angular/common';
import { CalendarEventActionsComponent } from './calendar-event-actions.component';
import { CalendarEventTitleComponent } from './calendar-event-title.component';
import { CalendarTooltipDirective, CalendarTooltipWindowComponent, } from './calendar-tooltip.directive';
import { CalendarPreviousViewDirective } from './calendar-previous-view.directive';
import { CalendarNextViewDirective } from './calendar-next-view.directive';
import { CalendarTodayDirective } from './calendar-today.directive';
import { CalendarDatePipe } from './calendar-date.pipe';
import { CalendarEventTitlePipe } from './calendar-event-title.pipe';
import { ClickDirective } from './click.directive';
import { KeydownEnterDirective } from './keydown-enter.directive';
import { CalendarEventTitleFormatter } from './calendar-event-title-formatter.provider';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
import { CalendarUtils } from './calendar-utils.provider';
import { CalendarA11y } from './calendar-a11y.provider';
import { CalendarA11yPipe } from './calendar-a11y.pipe';
export * from './calendar-event-title-formatter.provider';
export * from './calendar-moment-date-formatter.provider';
export * from './calendar-native-date-formatter.provider';
export * from './calendar-angular-date-formatter.provider';
export * from './calendar-date-formatter.provider';
export * from './calendar-utils.provider';
export * from './calendar-a11y.provider';
export * from './calendar-event-times-changed-event.interface';
export * from '../../date-adapters/date-adapter';
export * from './calendar-view.enum';
export { DAYS_OF_WEEK, } from 'calendar-utils';
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
let CalendarCommonModule = CalendarCommonModule_1 = class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
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
    }
};
CalendarCommonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarCommonModule });
CalendarCommonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarCommonModule_Factory(t) { return new (t || CalendarCommonModule)(); }, providers: [I18nPluralPipe], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarCommonModule, { declarations: function () { return [CalendarEventActionsComponent,
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
        KeydownEnterDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CalendarEventActionsComponent,
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
        KeydownEnterDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarCommonModule, [{
        type: NgModule,
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
                imports: [CommonModule],
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
                providers: [I18nPluralPipe],
                entryComponents: [CalendarTooltipWindowComponent]
            }]
    }], null, null); })();
export { CalendarCommonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEdBQy9CLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTeEQsY0FBYywyQ0FBMkMsQ0FBQztBQUMxRCxjQUFjLDJDQUEyQyxDQUFDO0FBQzFELGNBQWMsMkNBQTJDLENBQUM7QUFDMUQsY0FBYyw0Q0FBNEMsQ0FBQztBQUMzRCxjQUFjLG9DQUFvQyxDQUFDO0FBQ25ELGNBQWMsMkJBQTJCLENBQUM7QUFDMUMsY0FBYywwQkFBMEIsQ0FBQztBQUd6QyxjQUFjLGdEQUFnRCxDQUFDO0FBQy9ELGNBQWMsa0NBQWtDLENBQUM7QUFDakQsY0FBYyxzQkFBc0IsQ0FBQztBQUVyQyxPQUFPLEVBR0wsWUFBWSxHQUViLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQWtDSCxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBb0I7QUFDakMsSUFBRSxNQUFNLENBQUMsT0FBTyxDQUNaLFdBQXFCLEVBQ3JCLFNBQStCLEVBQUU7QUFDbEMsUUFDQyxPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsc0JBQW9CO0FBQ3BDLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRLFdBQVc7QUFDbkIsZ0JBQVEsTUFBTSxDQUFDLG1CQUFtQixJQUFJLDJCQUEyQjtBQUNqRSxnQkFBUSxNQUFNLENBQUMsYUFBYSxJQUFJLHFCQUFxQjtBQUNyRCxnQkFBUSxNQUFNLENBQUMsS0FBSyxJQUFJLGFBQWE7QUFDckMsZ0JBQVEsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZO0FBQ25DLGFBQU87QUFDUCxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxDQUFDLENBQUE7QUFoQlksb0JBQW9CLDZDQWpDaEMsUUFBUSxDQUFDLFVBQ1I7V0FBWSxFQUFFLGNBQ1osNkJBQTZCLGNBQzdCLDJCQUEyQixjQUMzQiw4QkFBOEIsY0FDOUIsd0JBQXdCLGNBQ3hCO1lBQTZCLGNBQzdCLHlCQUF5QixjQUN6QixzQkFBc0IsY0FDdEIsZ0JBQWdCLGNBQ2hCLHNCQUFzQixjQUN0QjtBQUFnQixjQUNoQixjQUFjO0tBQ2QscUJBQXFCLFdBQ3RCO09BQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO01BQ3ZCLE9BQU8sRUFBRSxjQUNQO21CQUE2QixjQUM3Qjt5QkFBMkI7T0FDM0I7V0FBOEIsY0FDOUI7aUJBQXdCO0tBQ3hCO1VBQTZCLGNBQzdCLHlCQUF5QixjQUN6QixzQkFBc0IsY0FDdEIsZ0JBQWdCLGNBQ2hCO0tBQXNCLGNBQ3RCLGdCQUFnQjtZQUNoQixjQUFjO0FBQ2QscUJBQXFCLFdBQ3RCO1FBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO01BQzNCLGVBQWUsRUFBRSxDQUFDO21CQUE4QixDQUFDLE9BQ2xELENBQUM7QUFDVyxvQkFBb0IsQ0FnQmhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNEO0FBQUMsU0FqQlksb0JBQW9CO0FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIEkxOG5QbHVyYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDYWxlbmRhclRvb2x0aXBEaXJlY3RpdmUsXG4gIENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudCxcbn0gZnJvbSAnLi9jYWxlbmRhci10b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJOZXh0Vmlld0RpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItbmV4dC12aWV3LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhclRvZGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9jYWxlbmRhci10b2RheS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlUGlwZSB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS5waXBlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZVBpcGUgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLnBpcGUnO1xuaW1wb3J0IHsgQ2xpY2tEaXJlY3RpdmUgfSBmcm9tICcuL2NsaWNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBLZXlkb3duRW50ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2tleWRvd24tZW50ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4vY2FsZW5kYXItdXRpbHMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJBMTF5IH0gZnJvbSAnLi9jYWxlbmRhci1hMTF5LnByb3ZpZGVyJztcbmltcG9ydCB7IENhbGVuZGFyQTExeVBpcGUgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkucGlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJNb2R1bGVDb25maWcge1xuICBldmVudFRpdGxlRm9ybWF0dGVyPzogUHJvdmlkZXI7XG4gIGRhdGVGb3JtYXR0ZXI/OiBQcm92aWRlcjtcbiAgdXRpbHM/OiBQcm92aWRlcjtcbiAgYTExeT86IFByb3ZpZGVyO1xufVxuXG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW1vbWVudC1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWFuZ3VsYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItYTExeS5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWExMXkuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuXG5leHBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBFdmVudEFjdGlvbiBhcyBDYWxlbmRhckV2ZW50QWN0aW9uLFxuICBEQVlTX09GX1dFRUssXG4gIFZpZXdQZXJpb2QgYXMgQ2FsZW5kYXJWaWV3UGVyaW9kLFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbi8qKlxuICogSW1wb3J0IHRoaXMgbW9kdWxlIHRvIGlmIHlvdSdyZSBqdXN0IHVzaW5nIGEgc2luZ3VsYXIgdmlldyBhbmQgd2FudCB0byBzYXZlIG9uIGJ1bmRsZSBzaXplLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlLCBDYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLmZvclJvb3QoKSxcbiAqICAgICBDYWxlbmRhck1vbnRoTW9kdWxlXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50LFxuICAgIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJEYXRlUGlwZSxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVQaXBlLFxuICAgIENhbGVuZGFyQTExeVBpcGUsXG4gICAgQ2xpY2tEaXJlY3RpdmUsXG4gICAgS2V5ZG93bkVudGVyRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCxcbiAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyUHJldmlvdXNWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckRhdGVQaXBlLFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUsXG4gICAgQ2FsZW5kYXJBMTF5UGlwZSxcbiAgICBDbGlja0RpcmVjdGl2ZSxcbiAgICBLZXlkb3duRW50ZXJEaXJlY3RpdmUsXG4gIF0sXG4gIHByb3ZpZGVyczogW0kxOG5QbHVyYWxQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkYXRlQWRhcHRlcjogUHJvdmlkZXIsXG4gICAgY29uZmlnOiBDYWxlbmRhck1vZHVsZUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FsZW5kYXJDb21tb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGRhdGVBZGFwdGVyLFxuICAgICAgICBjb25maWcuZXZlbnRUaXRsZUZvcm1hdHRlciB8fCBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIsXG4gICAgICAgIGNvbmZpZy5kYXRlRm9ybWF0dGVyIHx8IENhbGVuZGFyRGF0ZUZvcm1hdHRlcixcbiAgICAgICAgY29uZmlnLnV0aWxzIHx8IENhbGVuZGFyVXRpbHMsXG4gICAgICAgIGNvbmZpZy5hMTF5IHx8IENhbGVuZGFyQTExeSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19