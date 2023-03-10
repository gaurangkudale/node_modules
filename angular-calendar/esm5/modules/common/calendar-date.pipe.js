import { __decorate, __metadata, __param } from "tslib";
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        if (typeof this.dateFormatter[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
            throw new Error(method + " is not a valid date formatter. Can only be one of " + allowedMethods.join(', '));
        }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek,
        });
    };
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CalendarDatePipe = __decorate([ __param(1, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [CalendarDateFormatter, String])
    ], CalendarDatePipe);
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarDateFormatter), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
CalendarDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarDate", type: CalendarDatePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDatePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarDate'
            }]
    }], function () { return [{ type: CalendarDateFormatter }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
    return CalendarDatePipe;
}());
export { CalendarDatePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF0ZS5waXBlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFJSDtBQUFvRCxJQUNsRCwwQkFDVSxhQUFvQyxFQUNqQixNQUFjO0FBQzFDLFFBRlMsa0JBQWEsR0FBYixhQUFhLENBQXVCO0FBQUMsUUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUM3QyxJQUFLLENBQUM7QUFDTixJQUNFLG9DQUFTLEdBQVQsVUFDRSxJQUFVLEVBQ1YsTUFBYyxFQUNkLE1BQTRCLEVBQzVCLFlBQXdCLEVBQ3hCLFdBQTBCLEVBQzFCLFVBQW1CO0FBQ3BCLFFBSkMsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtBQUM5QixRQUFFLDZCQUFBLEVBQUEsZ0JBQXdCO0FBQzFCLFFBQUUsNEJBQUEsRUFBQSxnQkFBMEI7QUFDNUIsUUFFRSxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7QUFDM0QsWUFBTSxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQ3ZELENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxLQUFLLGFBQWEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0FBQ3ZELFlBQU0sTUFBTSxJQUFJLEtBQUssQ0FDVixNQUFNLDJEQUFzRCxjQUFjLENBQUMsSUFBSSxDQUNoRixJQUFJLENBQ0gsQ0FDSixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sSUFBSSxNQUFBO0FBQ1YsWUFBTSxNQUFNLFFBQUE7QUFDWixZQUFNLFlBQVksY0FBQTtBQUNsQixZQUFNLFdBQVcsYUFBQTtBQUNqQixZQUFNLFVBQVUsWUFBQTtBQUNoQixTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNGO0FBQzJELGdCQS9CakMscUJBQXFCO0FBQzlDLDZDQUFHLE1BQU0sU0FBQyxTQUFTO0FBQVE7QUFBVSxJQUgxQixnQkFBZ0Isd0JBSDVCLElBQUksQ0FBQyxjQUNKLDVCQUVNLENBR0gsV0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7QUFMaEIsRUFBRSxjQUFjLFdBQ3JCLENBQUMsNUJBSXNCLHlDQURHLHFCQUFxQjtBQUN2QyxPQUhJLGdCQUFnQixDQWdDNUI7Ozs7Ozs7Ozs7O2tDQUNEO0FBQUMsSUFERCx1QkFBQztBQUNBLENBREEsQUFoQ0QsSUFnQ0M7QUFDRCxTQWpDYSxnQkFBZ0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcblxuLyoqXG4gKiBUaGlzIHBpcGUgaXMgcHJpbWFyaWx5IGZvciByZW5kZXJpbmcgdGhlIGN1cnJlbnQgdmlldyB0aXRsZS4gRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIHdoZXJlIGB2aWV3RGF0ZWAgaXMgYSBgRGF0ZWAgYW5kIHZpZXcgaXMgYCdtb250aCcgfCAnd2VlaycgfCAnZGF5J2BcbiAqIHt7IHZpZXdEYXRlIHwgY2FsZW5kYXJEYXRlOih2aWV3ICsgJ1ZpZXdUaXRsZScpOidlbicgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdjYWxlbmRhckRhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdHRlcjogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nXG4gICkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZTogRGF0ZSxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLFxuICAgIHdlZWtTdGFydHNPbjogbnVtYmVyID0gMCxcbiAgICBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXSxcbiAgICBkYXlzSW5XZWVrPzogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmRhdGVGb3JtYXR0ZXJbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoXG4gICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihDYWxlbmRhckRhdGVGb3JtYXR0ZXIucHJvdG90eXBlKVxuICAgICAgKS5maWx0ZXIoKGlNZXRob2QpID0+IGlNZXRob2QgIT09ICdjb25zdHJ1Y3RvcicpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHttZXRob2R9IGlzIG5vdCBhIHZhbGlkIGRhdGUgZm9ybWF0dGVyLiBDYW4gb25seSBiZSBvbmUgb2YgJHthbGxvd2VkTWV0aG9kcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0dGVyW21ldGhvZF0oe1xuICAgICAgZGF0ZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHdlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVEYXlzLFxuICAgICAgZGF5c0luV2VlayxcbiAgICB9KTtcbiAgfVxufVxuIl19