import { __decorate, __metadata, __param } from "tslib";
import { InjectionToken, Inject, Injectable } from '@angular/core';
import { getWeekViewPeriod } from './util';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
export var MOMENT = new InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('MMM D');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var _this = this;
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        var format = function (dateToFormat, showYear) {
            return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : ''));
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    CalendarMomentDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('ha');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MOMENT,] }] },
        { type: DateAdapter }
    ]; };
    CalendarMomentDateFormatter = __decorate([ __param(0, Inject(MOMENT)),
        __metadata("design:paramtypes", [Object, DateAdapter])
    ], CalendarMomentDateFormatter);
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) { return new (t || CalendarMomentDateFormatter)(ɵngcc0.ɵɵinject(MOMENT), ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarMomentDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarMomentDateFormatter, factory: function (t) { return CalendarMomentDateFormatter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMomentDateFormatter, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MOMENT]
            }] }, { type: DateAdapter }]; }, null); })();
    return CalendarMomentDateFormatter;
}());
export { CalendarMomentDateFormatter };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9tZW50LWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1tb21lbnQtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUUvRCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQTJCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSDtBQUNzQixJQUNwQjtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUscUNBQzRCLE1BQVcsRUFDM0IsV0FBd0I7QUFDbkMsUUFGMkIsV0FBTSxHQUFOLE1BQU0sQ0FBSztBQUFDLFFBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0FBQ3RDLElBQUssQ0FBQztBQUNOLElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFTLDJEQUFxQixHQUE1QixVQUE2QixFQUFxQztBQUFJLFlBQXZDLGNBQUksRUFBRSxrQkFBTTtBQUFFLFFBQzNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNELElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFTLHdEQUFrQixHQUF6QixVQUEwQixFQUFxQztBQUFJLFlBQXZDLGNB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QUFFLFFBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDekUsSUFBRSxDQUFDO0FBQ0Y7QUFDc0UsZ0RBMUZsRSxNQUFNLFNBQUMsTUFBTTtBQUFTLGdCQUNBLFdBQVc7QUFDcEM7QUFFRSxJQVZTLDJCQUEyQix3QkFEdkMsVUFBVSxFQUFFLHJCQUNMLENBTUgsV0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7QUFBRSxpREFDTSxXQUFXO0FBQ3BDLE9BUlcsMkJBQTJCLENBK0Z2Qzs7Ozs7Ozs7eURBQ0Q7QUFBQyxJQURELGtDQUFDO0FBQ0EsQ0FEQSxBQS9GRCxJQStGQztBQUNELFNBaEdhLDJCQUEyQjtBQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSxcbiAgRGF0ZUZvcm1hdHRlclBhcmFtcyxcbn0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0V2Vla1ZpZXdQZXJpb2QgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbmV4cG9ydCBjb25zdCBNT01FTlQ6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ01vbWVudCcpO1xuXG4vKipcbiAqIFRoaXMgd2lsbCB1c2UgPGEgaHJlZj1cImh0dHA6Ly9tb21lbnRqcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+bW9tZW50PC9hPiB0byBkbyBhbGwgZGF0ZSBmb3JtYXR0aW5nLiBUbyB1c2UgdGhpcyBjbGFzczpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsIENhbGVuZGFyTW9tZW50RGF0ZUZvcm1hdHRlciwgTU9NRU5UIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKiBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4gKlxuICogLy8gaW4geW91ciBjb21wb25lbnRcbiAqIHByb3ZpZGU6IFt7XG4gKiAgIHByb3ZpZGU6IE1PTUVOVCwgdXNlVmFsdWU6IG1vbWVudFxuICogfSwge1xuICogICBwcm92aWRlOiBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsIHVzZUNsYXNzOiBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXJcbiAqIH1dXG4gKlxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXJcbiAgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChNT01FTlQpIHByb3RlY3RlZCBtb21lbnQ6IGFueSxcbiAgICBwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyXG4gICkge31cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkubG9jYWxlKGxvY2FsZSkuZm9ybWF0KCdkZGRkJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ0QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ01NTU0gWVlZWScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ2RkZGQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IHN1YiBoZWFkZXIgZGF5IGFuZCBtb250aCBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtblN1YkhlYWRlcih7XG4gICAgZGF0ZSxcbiAgICBsb2NhbGUsXG4gIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ01NTSBEJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3VGl0bGUoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBleGNsdWRlRGF5cyxcbiAgICBkYXlzSW5XZWVrLFxuICB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHZpZXdTdGFydCwgdmlld0VuZCB9ID0gZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gICAgICB0aGlzLmRhdGVBZGFwdGVyLFxuICAgICAgZGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVEYXlzLFxuICAgICAgZGF5c0luV2Vla1xuICAgICk7XG4gICAgY29uc3QgZm9ybWF0ID0gKGRhdGVUb0Zvcm1hdDogRGF0ZSwgc2hvd1llYXI6IGJvb2xlYW4pID0+XG4gICAgICB0aGlzLm1vbWVudChkYXRlVG9Gb3JtYXQpXG4gICAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgICAuZm9ybWF0KCdNTU0gRCcgKyAoc2hvd1llYXIgPyAnLCBZWVlZJyA6ICcnKSk7XG4gICAgcmV0dXJuIGAke2Zvcm1hdChcbiAgICAgIHZpZXdTdGFydCxcbiAgICAgIHZpZXdTdGFydC5nZXRVVENGdWxsWWVhcigpICE9PSB2aWV3RW5kLmdldFVUQ0Z1bGxZZWFyKClcbiAgICApfSAtICR7Zm9ybWF0KHZpZXdFbmQsIHRydWUpfWA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRpbWUgZm9ybWF0dGluZyBkb3duIHRoZSBsZWZ0IGhhbmQgc2lkZSBvZiB0aGUgd2VlayB2aWV3XG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5sb2NhbGUobG9jYWxlKS5mb3JtYXQoJ2hhJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRpbWUgZm9ybWF0dGluZyBkb3duIHRoZSBsZWZ0IGhhbmQgc2lkZSBvZiB0aGUgZGF5IHZpZXdcbiAgICovXG4gIHB1YmxpYyBkYXlWaWV3SG91cih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkubG9jYWxlKGxvY2FsZSkuZm9ybWF0KCdoYScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkubG9jYWxlKGxvY2FsZSkuZm9ybWF0KCdkZGRkLCBEIE1NTU0sIFlZWVknKTtcbiAgfVxufVxuIl19