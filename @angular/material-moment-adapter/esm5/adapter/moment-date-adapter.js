/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Inject, Injectable, Optional, InjectionToken } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// TODO(mmalerba): See if we can clean this up at some point.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import * as ɵngcc0 from '@angular/core';
var moment = _rollupMoment || _moment;
/** InjectionToken for moment date adapter to configure options. */
export var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new InjectionToken('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/** @docs-private */
export function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/** Adapts Moment.js Dates for use with Angular Material. */
var MomentDateAdapter = /** @class */ (function (_super) {
    __extends(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale, _options) {
        var _this = _super.call(this) || this;
        _this._options = _options;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    MomentDateAdapter.prototype.setLocale = function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    MomentDateAdapter.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    MomentDateAdapter.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    MomentDateAdapter.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    MomentDateAdapter.prototype.getDayOfWeek = function (date) {
        return this.clone(date).day();
    };
    MomentDateAdapter.prototype.getMonthNames = function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    MomentDateAdapter.prototype.getDateNames = function () {
        return this._localeData.dates;
    };
    MomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    MomentDateAdapter.prototype.getYearName = function (date) {
        return this.clone(date).format('YYYY');
    };
    MomentDateAdapter.prototype.getFirstDayOfWeek = function () {
        return this._localeData.firstDayOfWeek;
    };
    MomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    MomentDateAdapter.prototype.clone = function (date) {
        return date.clone().locale(this.locale);
    };
    MomentDateAdapter.prototype.createDate = function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    MomentDateAdapter.prototype.today = function () {
        return this._createMoment().locale(this.locale);
    };
    MomentDateAdapter.prototype.parse = function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    };
    MomentDateAdapter.prototype.format = function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    MomentDateAdapter.prototype.addCalendarYears = function (date, years) {
        return this.clone(date).add({ years: years });
    };
    MomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
        return this.clone(date).add({ months: months });
    };
    MomentDateAdapter.prototype.addCalendarDays = function (date, days) {
        return this.clone(date).add({ days: days });
    };
    MomentDateAdapter.prototype.toIso8601 = function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    MomentDateAdapter.prototype.deserialize = function (value) {
        var date;
        if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
        }
        else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
        }
        return _super.prototype.deserialize.call(this, value);
    };
    MomentDateAdapter.prototype.isDateInstance = function (obj) {
        return moment.isMoment(obj);
    };
    MomentDateAdapter.prototype.isValid = function (date) {
        return this.clone(date).isValid();
    };
    MomentDateAdapter.prototype.invalid = function () {
        return moment.invalid();
    };
    /** Creates a Moment instance while respecting the current UTC settings. */
    MomentDateAdapter.prototype._createMoment = function (date, format, locale) {
        var _a = this._options || {}, strict = _a.strict, useUtc = _a.useUtc;
        return useUtc
            ? moment.utc(date, format, locale, strict)
            : moment(date, format, locale, strict);
    };
    /** @nocollapse */
    MomentDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_LOCALE,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] }] }
    ]; };
MomentDateAdapter.ɵfac = function MomentDateAdapter_Factory(t) { return new (t || MomentDateAdapter)(ɵngcc0.ɵɵinject(MAT_DATE_LOCALE, 8), ɵngcc0.ɵɵinject(MAT_MOMENT_DATE_ADAPTER_OPTIONS, 8)); };
MomentDateAdapter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MomentDateAdapter, factory: function (t) { return MomentDateAdapter.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MomentDateAdapter, [{
        type: Injectable
    }], function () { return [{ type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DATE_LOCALE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            }] }]; }, null); })();
    return MomentDateAdapter;
}(DateAdapter));
export { MomentDateAdapter };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9tZW50LWRhdGUtYWRhcHRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyL2FkYXB0ZXIvbW9tZW50LWRhdGUtYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsZ0ZBQWdGO0FBQ2hGLDZGQUE2RjtBQUM3RixpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFDLE9BQU8sSUFBSSxhQUFhLEVBQWlELE1BQU0sUUFBUSxDQUFDOztBQUVoRyxJQUFNLE1BQU0sR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDO0FBbUJ4QyxtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLElBQU0sK0JBQStCLEdBQUcsSUFBSSxjQUFjLENBQy9ELGlDQUFpQyxFQUFFO0FBQ3JDLElBQUksVUFBVSxFQUFFLE1BQU07QUFDdEIsSUFBSSxPQUFPLEVBQUUsdUNBQXVDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBR0gsb0JBQW9CO0FBQ3BCLE1BQU0sVUFBVSx1Q0FBdUM7QUFBSyxJQUMxRCxPQUFPO0FBQ1QsUUFBSSxNQUFNLEVBQUUsS0FBSztBQUNqQixLQUFHLENBQUM7QUFDSixDQUFDO0FBR0QsaURBQWlEO0FBQ2pELFNBQVMsS0FBSyxDQUFJLE1BQWMsRUFBRSxhQUFtQztBQUFJLElBQ3ZFLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQyxJ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QUFFLENBQUM7QUFFSCxJQUFFLG1DQUFPLEdBQVA7QUFBYyxRQUNaLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUVILElBQUUsMkVBQTJFO0FBQzdFLElBQVUseUNBQWEsR0FBckIsVUFDRSxJQUFpQixFQUNqQixNQUFrQyxFQUNsQyxNQUFlO0FBQ2pCLFFBQ1EsSUFBQSx3QkFBbUUsRUFBbEUsa0JBQU0sRUFBRSxrQkFBMEQsQ0FBQztBQUM5RSxRQUNJLE9BQU8sTUFBTTtBQUNqQixZQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUNoRCxZQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsSUFBRSxDQUFDLENBbE1HO0FBQUM7OEJBRE4sVUFBVSx4Q0FDbUI7QUFDQyw2Q0FlaEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlO0FBQVMsZ0RBQ3JELFFBQVEsWUFBSSxNQUFNLFNBQUMsK0JBQStCO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7a0NBQVM7QUFBQyxJQWlMaEIsd0JBQUM7QUFDQSxDQURBLEFBcE1ELENBQ3VDLFdBQVcsR0FtTWpEO0FBQ0QsU0FwTWEsaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgcm9sbHVwIGlzIHVzZWQsIG1vbWVudCBuZWVkcyB0byBiZSBpbXBvcnRlZCBkaWZmZXJlbnRseS5cbi8vIFNpbmNlIE1vbWVudC5qcyBkb2Vzbid0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCwgd2Ugbm9ybWFsbHkgbmVlZCB0byBpbXBvcnQgdXNpbmcgdGhlIGAqIGFzYFxuLy8gc3ludGF4LiBIb3dldmVyLCByb2xsdXAgY3JlYXRlcyBhIHN5bnRoZXRpYyBkZWZhdWx0IG1vZHVsZSBhbmQgd2UgdGh1cyBuZWVkIHRvIGltcG9ydCBpdCB1c2luZ1xuLy8gdGhlIGBkZWZhdWx0IGFzYCBzeW50YXguXG4vLyBUT0RPKG1tYWxlcmJhKTogU2VlIGlmIHdlIGNhbiBjbGVhbiB0aGlzIHVwIGF0IHNvbWUgcG9pbnQuXG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50LCBNb21lbnQsIE1vbWVudEZvcm1hdFNwZWNpZmljYXRpb24sIE1vbWVudElucHV0fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBfcm9sbHVwTW9tZW50IHx8IF9tb21lbnQ7XG5cbi8qKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3Ige0BzZWUgTW9tZW50RGF0ZUFkYXB0ZXJ9LiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXRNb21lbnREYXRlQWRhcHRlck9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBXaGVuIGVuYWJsZWQsIHRoZSBkYXRlcyBoYXZlIHRvIG1hdGNoIHRoZSBmb3JtYXQgZXhhY3RseS5cbiAgICogU2VlIGh0dHBzOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3BhcnNpbmcvc3RyaWN0LW1vZGUvLlxuICAgKi9cbiAgc3RyaWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIHVzZSBvZiB1dGMgZGF0ZXMgb24gb3Igb2ZmLlxuICAgKiBDaGFuZ2luZyB0aGlzIHdpbGwgY2hhbmdlIGhvdyBBbmd1bGFyIE1hdGVyaWFsIGNvbXBvbmVudHMgbGlrZSBEYXRlUGlja2VyIG91dHB1dCBkYXRlcy5cbiAgICoge0BkZWZhdWx0IGZhbHNlfVxuICAgKi9cbiAgdXNlVXRjPzogYm9vbGVhbjtcbn1cblxuLyoqIEluamVjdGlvblRva2VuIGZvciBtb21lbnQgZGF0ZSBhZGFwdGVyIHRvIGNvbmZpZ3VyZSBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWF0TW9tZW50RGF0ZUFkYXB0ZXJPcHRpb25zPihcbiAgJ01BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMnLCB7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgIGZhY3Rvcnk6IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNfRkFDVE9SWVxufSk7XG5cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TX0ZBQ1RPUlkoKTogTWF0TW9tZW50RGF0ZUFkYXB0ZXJPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICB1c2VVdGM6IGZhbHNlXG4gIH07XG59XG5cblxuLyoqIENyZWF0ZXMgYW4gYXJyYXkgYW5kIGZpbGxzIGl0IHdpdGggdmFsdWVzLiAqL1xuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xuICB9XG4gIHJldHVybiB2YWx1ZXNBcnJheTtcbn1cblxuXG4vKiogQWRhcHRzIE1vbWVudC5qcyBEYXRlcyBmb3IgdXNlIHdpdGggQW5ndWxhciBNYXRlcmlhbC4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRlQWRhcHRlciBleHRlbmRzIERhdGVBZGFwdGVyPE1vbWVudD4ge1xuICAvLyBOb3RlOiBhbGwgb2YgdGhlIG1ldGhvZHMgdGhhdCBhY2NlcHQgYSBgTW9tZW50YCBpbnB1dCBwYXJhbWV0ZXIgaW1tZWRpYXRlbHkgY2FsbCBgdGhpcy5jbG9uZWBcbiAgLy8gb24gaXQuIFRoaXMgaXMgdG8gZW5zdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIGEgYE1vbWVudGAgdGhhdCBoYXMgdGhlIGNvcnJlY3QgbG9jYWxlIHNldHRpbmdcbiAgLy8gd2hpbGUgYXZvaWRpbmcgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCBwYXNzZWQgdG8gdXMuIEp1c3QgY2FsbGluZyBgLmxvY2FsZSguLi4pYCBvbiB0aGVcbiAgLy8gaW5wdXQgd291bGQgbXV0YXRlIHRoZSBvYmplY3QuXG5cbiAgcHJpdmF0ZSBfbG9jYWxlRGF0YToge1xuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIsXG4gICAgbG9uZ01vbnRoczogc3RyaW5nW10sXG4gICAgc2hvcnRNb250aHM6IHN0cmluZ1tdLFxuICAgIGRhdGVzOiBzdHJpbmdbXSxcbiAgICBsb25nRGF5c09mV2Vlazogc3RyaW5nW10sXG4gICAgc2hvcnREYXlzT2ZXZWVrOiBzdHJpbmdbXSxcbiAgICBuYXJyb3dEYXlzT2ZXZWVrOiBzdHJpbmdbXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBkYXRlTG9jYWxlOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TKVxuICAgIHByaXZhdGUgX29wdGlvbnM/OiBNYXRNb21lbnREYXRlQWRhcHRlck9wdGlvbnMpIHtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRMb2NhbGUoZGF0ZUxvY2FsZSB8fCBtb21lbnQubG9jYWxlKCkpO1xuICB9XG5cbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIuc2V0TG9jYWxlKGxvY2FsZSk7XG5cbiAgICBsZXQgbW9tZW50TG9jYWxlRGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKGxvY2FsZSk7XG4gICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLmZpcnN0RGF5T2ZXZWVrKCksXG4gICAgICBsb25nTW9udGhzOiBtb21lbnRMb2NhbGVEYXRhLm1vbnRocygpLFxuICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcbiAgICAgIGRhdGVzOiByYW5nZSgzMSwgKGkpID0+IHRoaXMuY3JlYXRlRGF0ZSgyMDE3LCAwLCBpICsgMSkuZm9ybWF0KCdEJykpLFxuICAgICAgbG9uZ0RheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXMoKSxcbiAgICAgIHNob3J0RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c1Nob3J0KCksXG4gICAgICBuYXJyb3dEYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzTWluKCksXG4gICAgfTtcbiAgfVxuXG4gIGdldFllYXIoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS55ZWFyKCk7XG4gIH1cblxuICBnZXRNb250aChkYXRlOiBNb21lbnQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLm1vbnRoKCk7XG4gIH1cblxuICBnZXREYXRlKGRhdGU6IE1vbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuZGF0ZSgpO1xuICB9XG5cbiAgZ2V0RGF5T2ZXZWVrKGRhdGU6IE1vbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuZGF5KCk7XG4gIH1cblxuICBnZXRNb250aE5hbWVzKHN0eWxlOiAnbG9uZycgfCAnc2hvcnQnIHwgJ25hcnJvdycpOiBzdHJpbmdbXSB7XG4gICAgLy8gTW9tZW50LmpzIGRvZXNuJ3Qgc3VwcG9ydCBuYXJyb3cgbW9udGggbmFtZXMsIHNvIHdlIGp1c3QgdXNlIHNob3J0IGlmIG5hcnJvdyBpcyByZXF1ZXN0ZWQuXG4gICAgcmV0dXJuIHN0eWxlID09ICdsb25nJyA/IHRoaXMuX2xvY2FsZURhdGEubG9uZ01vbnRocyA6IHRoaXMuX2xvY2FsZURhdGEuc2hvcnRNb250aHM7XG4gIH1cblxuICBnZXREYXRlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLmRhdGVzO1xuICB9XG5cbiAgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGU6ICdsb25nJyB8ICdzaG9ydCcgfCAnbmFycm93Jyk6IHN0cmluZ1tdIHtcbiAgICBpZiAoc3R5bGUgPT0gJ2xvbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF0YS5sb25nRGF5c09mV2VlaztcbiAgICB9XG4gICAgaWYgKHN0eWxlID09ICdzaG9ydCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLnNob3J0RGF5c09mV2VlaztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGEubmFycm93RGF5c09mV2VlaztcbiAgfVxuXG4gIGdldFllYXJOYW1lKGRhdGU6IE1vbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoZGF0ZSkuZm9ybWF0KCdZWVlZJyk7XG4gIH1cblxuICBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLmZpcnN0RGF5T2ZXZWVrO1xuICB9XG5cbiAgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5kYXlzSW5Nb250aCgpO1xuICB9XG5cbiAgY2xvbmUoZGF0ZTogTW9tZW50KTogTW9tZW50IHtcbiAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLmxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gIH1cblxuICBjcmVhdGVEYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKTogTW9tZW50IHtcbiAgICAvLyBNb21lbnQuanMgd2lsbCBjcmVhdGUgYW4gaW52YWxpZCBkYXRlIGlmIGFueSBvZiB0aGUgY29tcG9uZW50cyBhcmUgb3V0IG9mIGJvdW5kcywgYnV0IHdlXG4gICAgLy8gZXhwbGljaXRseSBjaGVjayBlYWNoIGNhc2Ugc28gd2UgY2FuIHRocm93IG1vcmUgZGVzY3JpcHRpdmUgZXJyb3JzLlxuICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZSA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NyZWF0ZU1vbWVudCh7eWVhciwgbW9udGgsIGRhdGV9KS5sb2NhbGUodGhpcy5sb2NhbGUpO1xuXG4gICAgLy8gSWYgdGhlIHJlc3VsdCBpc24ndCB2YWxpZCwgdGhlIGRhdGUgbXVzdCBoYXZlIGJlZW4gb3V0IG9mIGJvdW5kcyBmb3IgdGhpcyBtb250aC5cbiAgICBpZiAoIXJlc3VsdC5pc1ZhbGlkKCkpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b2RheSgpOiBNb21lbnQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVNb21lbnQoKS5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICB9XG5cbiAgcGFyc2UodmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IHN0cmluZyB8IHN0cmluZ1tdKTogTW9tZW50IHwgbnVsbCB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZU1vbWVudCh2YWx1ZSwgcGFyc2VGb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID8gdGhpcy5fY3JlYXRlTW9tZW50KHZhbHVlKS5sb2NhbGUodGhpcy5sb2NhbGUpIDogbnVsbDtcbiAgfVxuXG4gIGZvcm1hdChkYXRlOiBNb21lbnQsIGRpc3BsYXlGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgZGF0ZSA9IHRoaXMuY2xvbmUoZGF0ZSk7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdNb21lbnREYXRlQWRhcHRlcjogQ2Fubm90IGZvcm1hdCBpbnZhbGlkIGRhdGUuJyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlLmZvcm1hdChkaXNwbGF5Rm9ybWF0KTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogTW9tZW50LCB5ZWFyczogbnVtYmVyKTogTW9tZW50IHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5hZGQoe3llYXJzfSk7XG4gIH1cblxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBNb21lbnQsIG1vbnRoczogbnVtYmVyKTogTW9tZW50IHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5hZGQoe21vbnRoc30pO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IE1vbWVudCwgZGF5czogbnVtYmVyKTogTW9tZW50IHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5hZGQoe2RheXN9KTtcbiAgfVxuXG4gIHRvSXNvODYwMShkYXRlOiBNb21lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb25lKGRhdGUpLmZvcm1hdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIGdpdmVuIGEgdmFsaWQgTW9tZW50IG9yIG51bGwuIERlc2VyaWFsaXplcyB2YWxpZCBJU08gODYwMSBzdHJpbmdzXG4gICAqIChodHRwczovL3d3dy5pZXRmLm9yZy9yZmMvcmZjMzMzOS50eHQpIGFuZCB2YWxpZCBEYXRlIG9iamVjdHMgaW50byB2YWxpZCBNb21lbnRzIGFuZCBlbXB0eVxuICAgKiBzdHJpbmcgaW50byBudWxsLiBSZXR1cm5zIGFuIGludmFsaWQgZGF0ZSBmb3IgYWxsIG90aGVyIHZhbHVlcy5cbiAgICovXG4gIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBNb21lbnQgfCBudWxsIHtcbiAgICBsZXQgZGF0ZTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICBkYXRlID0gdGhpcy5fY3JlYXRlTW9tZW50KHZhbHVlKS5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0RhdGVJbnN0YW5jZSh2YWx1ZSkpIHtcbiAgICAgIC8vIE5vdGU6IGFzc3VtZXMgdGhhdCBjbG9uaW5nIGFsc28gc2V0cyB0aGUgY29ycmVjdCBsb2NhbGUuXG4gICAgICByZXR1cm4gdGhpcy5jbG9uZSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgZGF0ZSA9IHRoaXMuX2NyZWF0ZU1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIH1cbiAgICBpZiAoZGF0ZSAmJiB0aGlzLmlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVNb21lbnQoZGF0ZSkubG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgfVxuXG4gIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1vbWVudC5pc01vbWVudChvYmopO1xuICB9XG5cbiAgaXNWYWxpZChkYXRlOiBNb21lbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShkYXRlKS5pc1ZhbGlkKCk7XG4gIH1cblxuICBpbnZhbGlkKCk6IE1vbWVudCB7XG4gICAgcmV0dXJuIG1vbWVudC5pbnZhbGlkKCk7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIE1vbWVudCBpbnN0YW5jZSB3aGlsZSByZXNwZWN0aW5nIHRoZSBjdXJyZW50IFVUQyBzZXR0aW5ncy4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlTW9tZW50KFxuICAgIGRhdGU6IE1vbWVudElucHV0LFxuICAgIGZvcm1hdD86IE1vbWVudEZvcm1hdFNwZWNpZmljYXRpb24sXG4gICAgbG9jYWxlPzogc3RyaW5nLFxuICApOiBNb21lbnQge1xuICAgIGNvbnN0IHtzdHJpY3QsIHVzZVV0Y306IE1hdE1vbWVudERhdGVBZGFwdGVyT3B0aW9ucyA9IHRoaXMuX29wdGlvbnMgfHwge307XG5cbiAgICByZXR1cm4gdXNlVXRjXG4gICAgICA/IG1vbWVudC51dGMoZGF0ZSwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdClcbiAgICAgIDogbW9tZW50KGRhdGUsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpO1xuICB9XG59XG4iXX0=