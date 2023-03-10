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
let CalendarDatePipe = class CalendarDatePipe {
    constructor(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter((iMethod) => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.dateFormatter[method]({
            date,
            locale,
            weekStartsOn,
            excludeDays,
            daysInWeek,
        });
    }
};
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarDateFormatter), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
CalendarDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarDate", type: CalendarDatePipe, pure: true });
CalendarDatePipe.ctorParameters = () => [
    { type: CalendarDateFormatter },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CalendarDatePipe = __decorate([ __param(1, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [CalendarDateFormatter, String])
], CalendarDatePipe);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDatePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarDate'
            }]
    }], function () { return [{ type: CalendarDateFormatter }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
export { CalendarDatePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF0ZS5waXBlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFJSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtBQUFHLElBQzlCLFlBQ1UsYUFBb0MsRUFDakIsTUFBYztBQUMxQyxRQUZTLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtBQUFDLFFBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7QUFDN0MsSUFBSyxDQUFDO0FBQ04sSUFDRSxTQUFTLENBQ1AsSUFBVSxFQUNWLE1BQWMsRUFDZCxTQUFpQixJQUFJLENBQUMsTUFBTSxFQUM1QixlQUF1QixDQUFDLEVBQ3hCLGNBQXdCLEVBQUUsRUFDMUIsVUFBbUI7QUFDcEIsUUFDQyxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7QUFDM0QsWUFBTSxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQ3ZELENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssYUFBYSxDQUFDLENBQUM7QUFDdkQsWUFBTSxNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsTUFBTSxzREFBc0QsY0FBYyxDQUFDLElBQUksQ0FDaEYsSUFBSSxDQUNMLEVBQUUsQ0FDSixDQUFDO0FBQ1IsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sSUFBSTtBQUNWLFlBQU0sTUFBTTtBQUNaLFlBQU0sWUFBWTtBQUNsQixZQUFNLFdBQVc7QUFDakIsWUFBTSxVQUFVO0FBQ2hCLFNBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs7MkdBQUE7QUFDRDtBQUEwQyxZQS9CZixxQkFBcUI7QUFDOUMseUNBQUcsTUFBTSxTQUFDLFNBQVM7QUFBUTtBQUhoQixnQkFBZ0Isb0JBSDVCLElBQUksQ0FBQyxVQUNKLElBQUksRUFBRSwxQkFFSixDQUdDLFdBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBTEEsT0FDckIsQ0FBQyxoQkFJc0IscUNBREcscUJBQXFCO0FBQ3ZDLEdBSEksZ0JBQWdCLENBZ0M1Qjs7Ozs7Ozs7O2tDQUNEO0FBQUMsU0FqQ1ksZ0JBQWdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5cbi8qKlxuICogVGhpcyBwaXBlIGlzIHByaW1hcmlseSBmb3IgcmVuZGVyaW5nIHRoZSBjdXJyZW50IHZpZXcgdGl0bGUuIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB3aGVyZSBgdmlld0RhdGVgIGlzIGEgYERhdGVgIGFuZCB2aWV3IGlzIGAnbW9udGgnIHwgJ3dlZWsnIHwgJ2RheSdgXG4gKiB7eyB2aWV3RGF0ZSB8IGNhbGVuZGFyRGF0ZToodmlldyArICdWaWV3VGl0bGUnKTonZW4nIH19XG4gKiBgYGBcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnY2FsZW5kYXJEYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IENhbGVuZGFyRGF0ZUZvcm1hdHRlcixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZ1xuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGUsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSxcbiAgICB3ZWVrU3RhcnRzT246IG51bWJlciA9IDAsXG4gICAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW10sXG4gICAgZGF5c0luV2Vlaz86IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kYXRlRm9ybWF0dGVyW21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhbGxvd2VkTWV0aG9kcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFxuICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLnByb3RvdHlwZSlcbiAgICAgICkuZmlsdGVyKChpTWV0aG9kKSA9PiBpTWV0aG9kICE9PSAnY29uc3RydWN0b3InKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7bWV0aG9kfSBpcyBub3QgYSB2YWxpZCBkYXRlIGZvcm1hdHRlci4gQ2FuIG9ubHkgYmUgb25lIG9mICR7YWxsb3dlZE1ldGhvZHMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlclttZXRob2RdKHtcbiAgICAgIGRhdGUsXG4gICAgICBsb2NhbGUsXG4gICAgICB3ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlRGF5cyxcbiAgICAgIGRheXNJbldlZWssXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==