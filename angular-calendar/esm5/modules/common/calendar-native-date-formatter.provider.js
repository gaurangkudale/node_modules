import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { getWeekViewPeriod } from './util';
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
import * as ɵngcc0 from '@angular/core';
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        var format = function (dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined,
            }).format(dateToFormat);
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    CalendarNativeDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        }).format(date);
    };
    CalendarNativeDateFormatter.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarNativeDateFormatter = __decorate([ __metadata("design:paramtypes", [DateAdapter])
    ], CalendarNativeDateFormatter);
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) { return new (t || CalendarNativeDateFormatter)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarNativeDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarNativeDateFormatter, factory: function (t) { return CalendarNativeDateFormatter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarNativeDateFormatter, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
    return CalendarNativeDateFormatter;
}());
export { CalendarNativeDateFormatter };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbmF0aXZlLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1uYXRpdmUtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDc0IsSUFDcEIscUNBQXNCLFdBQXdCO0FBQUksUUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7QUFBQyxJQUFFLENBQUM7QUFDcEQsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVMsMkRBQXFCLEdBQTVCLFVBQTZCLEVBQXFDO0FBQUksWUFBdkMsY0FBSSxFQUFFLGtCQUFNO0FBQUUsUUFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFTLHdEQUFrQixHQUF6QixVQUEwQixFQUFxQztBQUFJLFlBQXZDLGNBQUksRUFBRSxrQkFBTTtBQUFFLFFBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RSxJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBUyxvREFBYyxHQUFyQixVQUFzQixF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LENBQUMsTUFBTSxFQUFFO0FBQzNDLFlBQU0sR0FBRyxFQUFFLFNBQVM7QUFDcEIsWUFBTSxLQUFLLEVBQUUsTUFBTTtBQUNuQixZQUFNLElBQUksRUFBRSxTQUFTO0FBQ3JCLFlBQU0sT0FBTyxFQUFFLE1BQU07QUFDckIsU0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNGO0FBQ3NFLGdCQXZHbEMsV0FBVztBQUFHO0FBR2xELElBTFksMkJBQTJCLHdCQUR2QyxVQUFVLEVBQUUsckJBQ0wsa0NBRTZCLFdBQVc7QUFBRyxPQUZ0QywyQkFBMkIsQ0F3R3ZDOzs7OztxRUFDRDtBQUFDLElBREQsa0NBQUM7QUFDQSxDQURBLEFBeEdELElBd0dDO0FBQ0QsU0F6R2EsMkJBQTJCO0FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlLFxuICBEYXRlRm9ybWF0dGVyUGFyYW1zLFxufSBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IGdldFdlZWtWaWV3UGVyaW9kIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHdpbGwgdXNlIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SW50bDwvYT4gQVBJIHRvIGRvIGFsbCBkYXRlIGZvcm1hdHRpbmcuXG4gKlxuICogWW91IHdpbGwgbmVlZCB0byBpbmNsdWRlIGEgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5ZWFybnNoYXcvSW50bC5qcy9cIj5wb2x5ZmlsbDwvYT4gZm9yIG9sZGVyIGJyb3dzZXJzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJOYXRpdmVEYXRlRm9ybWF0dGVyXG4gIGltcGxlbWVudHMgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJyxcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyB3ZWVrZGF5OiAnbG9uZycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgc3ViIGhlYWRlciBkYXkgYW5kIG1vbnRoIGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uU3ViSGVhZGVyKHtcbiAgICBkYXRlLFxuICAgIGxvY2FsZSxcbiAgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3VGl0bGUoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBleGNsdWRlRGF5cyxcbiAgICBkYXlzSW5XZWVrLFxuICB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHZpZXdTdGFydCwgdmlld0VuZCB9ID0gZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgZGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVEYXlzLFxuICAgICAgZGF5c0luV2Vla1xuICAgICk7XG5cbiAgICBjb25zdCBmb3JtYXQgPSAoZGF0ZVRvRm9ybWF0OiBEYXRlLCBzaG93WWVhcjogYm9vbGVhbikgPT5cbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIHllYXI6IHNob3dZZWFyID8gJ251bWVyaWMnIDogdW5kZWZpbmVkLFxuICAgICAgfSkuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG5cbiAgICByZXR1cm4gYCR7Zm9ybWF0KFxuICAgICAgdmlld1N0YXJ0LFxuICAgICAgdmlld1N0YXJ0LmdldFVUQ0Z1bGxZZWFyKCkgIT09IHZpZXdFbmQuZ2V0VVRDRnVsbFllYXIoKVxuICAgICl9IC0gJHtmb3JtYXQodmlld0VuZCwgdHJ1ZSl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSB3ZWVrIHZpZXdcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBob3VyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGRheSB2aWV3XG4gICAqL1xuICBwdWJsaWMgZGF5Vmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBob3VyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=