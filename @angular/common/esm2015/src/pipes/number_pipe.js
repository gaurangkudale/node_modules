/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DEFAULT_CURRENCY_CODE, Inject, LOCALE_ID, Pipe } from '@angular/core';
import { formatCurrency, formatNumber, formatPercent } from '../i18n/format_number';
import { getCurrencySymbol } from '../i18n/locale_data_api';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';
/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number into a string,
 * formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * If no parameters are specified, the function rounds off to the nearest value using this
 * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
 * The behavior differs from that of the JavaScript ```Math.round()``` function.
 * In the following case for example, the pipe rounds down where
 * ```Math.round()``` rounds up:
 *
 * ```html
 * -2.5 | number:'1.0-0'
 * > -3
 * Math.round(-2.5)
 * > -2
 * ```
 *
 * @see `formatNumber()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * ### Example
 *
 * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export class DecimalPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * @param value The number to be formatted.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `3`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value, digitsInfo, locale) {
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        try {
            const num = strToNumber(value);
            return formatNumber(num, locale, digitsInfo);
        }
        catch (error) {
            throw invalidPipeArgumentError(DecimalPipe, error.message);
        }
    }
}
DecimalPipe.ɵfac = function DecimalPipe_Factory(t) { return new (t || DecimalPipe)(ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
DecimalPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "number", type: DecimalPipe, pure: true });
DecimalPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DecimalPipe, [{
        type: Pipe,
        args: [{ name: 'number' }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a percentage
 * string, formatted according to locale rules that determine group sizing and
 * separator, decimal-point character, and other locale-specific
 * configurations.
 *
 * @see `formatPercent()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
 *
 * @publicApi
 */
export class PercentPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     *
     * @param value The number to be formatted as a percentage.
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `0`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `0`.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value, digitsInfo, locale) {
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        try {
            const num = strToNumber(value);
            return formatPercent(num, locale, digitsInfo);
        }
        catch (error) {
            throw invalidPipeArgumentError(PercentPipe, error.message);
        }
    }
}
PercentPipe.ɵfac = function PercentPipe_Factory(t) { return new (t || PercentPipe)(ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
PercentPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "percent", type: PercentPipe, pure: true });
PercentPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PercentPipe, [{
        type: Pipe,
        args: [{ name: 'percent' }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
/**
 * @ngModule CommonModule
 * @description
 *
 * Transforms a number to a currency string, formatted according to locale rules
 * that determine group sizing and separator, decimal-point character,
 * and other locale-specific configurations.
 *
 * {@a currency-code-deprecation}
 * <div class="alert is-helpful">
 *
 * **Deprecation notice:**
 *
 * The default currency code is currently always `USD` but this is deprecated from v9.
 *
 * **In v11 the default currency code will be taken from the current locale identified by
 * the `LOCAL_ID` token. See the [i18n guide](guide/i18n#setting-up-the-locale-of-your-app) for
 * more information.**
 *
 * If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
 * your application `NgModule`:
 *
 * ```ts
 * {provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
 * ```
 *
 * </div>
 *
 * @see `getCurrencySymbol()`
 * @see `formatCurrency()`
 *
 * @usageNotes
 * The following code shows how the pipe transforms numbers
 * into text strings, according to various format specifications,
 * where the caller's default locale is `en-US`.
 *
 * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
 *
 * @publicApi
 */
export class CurrencyPipe {
    constructor(_locale, _defaultCurrencyCode = 'USD') {
        this._locale = _locale;
        this._defaultCurrencyCode = _defaultCurrencyCode;
    }
    /**
     *
     * @param value The number to be formatted as currency.
     * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
     * such as `USD` for the US dollar and `EUR` for the euro. The default currency code can be
     * configured using the `DEFAULT_CURRENCY_CODE` injection token.
     * @param display The format for the currency indicator. One of the following:
     *   - `code`: Show the code (such as `USD`).
     *   - `symbol`(default): Show the symbol (such as `$`).
     *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
     * currency.
     * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
     * locale has no narrow symbol, uses the standard symbol for the locale.
     *   - String: Use the given string value instead of a code or a symbol.
     * For example, an empty string will suppress the currency & symbol.
     *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
     *
     * @param digitsInfo Decimal representation options, specified by a string
     * in the following format:<br>
     * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
     *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
     * Default is `1`.
     *   - `minFractionDigits`: The minimum number of digits after the decimal point.
     * Default is `2`.
     *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
     * Default is `2`.
     * If not provided, the number will be formatted with the proper amount of digits,
     * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
     * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     */
    transform(value, currencyCode, display = 'symbol', digitsInfo, locale) {
        if (isEmpty(value))
            return null;
        locale = locale || this._locale;
        if (typeof display === 'boolean') {
            if (console && console.warn) {
                console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
            }
            display = display ? 'symbol' : 'code';
        }
        let currency = currencyCode || this._defaultCurrencyCode;
        if (display !== 'code') {
            if (display === 'symbol' || display === 'symbol-narrow') {
                currency = getCurrencySymbol(currency, display === 'symbol' ? 'wide' : 'narrow', locale);
            }
            else {
                currency = display;
            }
        }
        try {
            const num = strToNumber(value);
            return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
        }
        catch (error) {
            throw invalidPipeArgumentError(CurrencyPipe, error.message);
        }
    }
}
CurrencyPipe.ɵfac = function CurrencyPipe_Factory(t) { return new (t || CurrencyPipe)(ɵngcc0.ɵɵdirectiveInject(LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DEFAULT_CURRENCY_CODE)); };
CurrencyPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "currency", type: CurrencyPipe, pure: true });
CurrencyPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: String, decorators: [{ type: Inject, args: [DEFAULT_CURRENCY_CODE,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CurrencyPipe, [{
        type: Pipe,
        args: [{ name: 'currency' }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: String, decorators: [{
                type: Inject,
                args: [DEFAULT_CURRENCY_CODE]
            }] }]; }, null); })();
function isEmpty(value) {
    return value == null || value === '' || value !== value;
}
/**
 * Transforms a string into a number (if needed).
 */
function strToNumber(value) {
    // Convert strings to numbers
    if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
        return Number(value);
    }
    if (typeof value !== 'number') {
        throw new Error(`${value} is not a number`);
    }
    return value;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyX3BpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMvbnVtYmVyX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFHdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE1BQU0sT0FBTyxXQUFXO0FBQUcsSUFDekIsWUFBdUMsT0FBZTtBQUFJLFFBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxJQUFFLENBQUM7QUFDNUQsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FEZjtBQUNMLElBQUUsU0FBUyxDQUFDLEtBQVUsRUFBRSxVQUFtQixFQUFFLE1BQWU7QUFBSSxRQUM1RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFBRSxZQUFBLE9BQU8sSUFBSSxDQUFDO0FBQ3BDLFFBQ0ksTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJ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QUFDLENBQUM7QUFDbEUsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3dDQXZFQyxJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOytGQUNuQjtBQUFDO0FBQXNDLHlDQUVyQyxNQUFNLFNBQUMsU0FBUztBQUFTLHlDQUN6QixNQUFNLFNBQUMscUJBQXFCO0FBQVE7Ozs7Ozs7Ozs7a0NBQUU7QUFxRTdDLFNBQVMsT0FBTyxDQUFDLEtBQVU7QUFBSSxJQUM3QixPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQzFELENBQUM7QUFFRDtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsV0FBVyxDQUFDLEtBQW9CO0FBQUksSUFDM0MsNkJBQTZCO0FBQy9CLElBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzlFLFFBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsS0FBRztBQUNILElBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDakMsUUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hELEtBQUc7QUFDSCxJQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7REVGQVVMVF9DVVJSRU5DWV9DT0RFLCBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zvcm1hdEN1cnJlbmN5LCBmb3JtYXROdW1iZXIsIGZvcm1hdFBlcmNlbnR9IGZyb20gJy4uL2kxOG4vZm9ybWF0X251bWJlcic7XG5pbXBvcnQge2dldEN1cnJlbmN5U3ltYm9sfSBmcm9tICcuLi9pMThuL2xvY2FsZV9kYXRhX2FwaSc7XG5cbmltcG9ydCB7aW52YWxpZFBpcGVBcmd1bWVudEVycm9yfSBmcm9tICcuL2ludmFsaWRfcGlwZV9hcmd1bWVudF9lcnJvcic7XG5cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIGludG8gYSBzdHJpbmcsXG4gKiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcyB0aGF0IGRldGVybWluZSBncm91cCBzaXppbmcgYW5kXG4gKiBzZXBhcmF0b3IsIGRlY2ltYWwtcG9pbnQgY2hhcmFjdGVyLCBhbmQgb3RoZXIgbG9jYWxlLXNwZWNpZmljXG4gKiBjb25maWd1cmF0aW9ucy5cbiAqXG4gKiBJZiBubyBwYXJhbWV0ZXJzIGFyZSBzcGVjaWZpZWQsIHRoZSBmdW5jdGlvbiByb3VuZHMgb2ZmIHRvIHRoZSBuZWFyZXN0IHZhbHVlIHVzaW5nIHRoaXNcbiAqIFtyb3VuZGluZyBtZXRob2RdKGh0dHBzOi8vZW4ud2lraWJvb2tzLm9yZy93aWtpL0FyaXRobWV0aWMvUm91bmRpbmcpLlxuICogVGhlIGJlaGF2aW9yIGRpZmZlcnMgZnJvbSB0aGF0IG9mIHRoZSBKYXZhU2NyaXB0IGBgYE1hdGgucm91bmQoKWBgYCBmdW5jdGlvbi5cbiAqIEluIHRoZSBmb2xsb3dpbmcgY2FzZSBmb3IgZXhhbXBsZSwgdGhlIHBpcGUgcm91bmRzIGRvd24gd2hlcmVcbiAqIGBgYE1hdGgucm91bmQoKWBgYCByb3VuZHMgdXA6XG4gKlxuICogYGBgaHRtbFxuICogLTIuNSB8IG51bWJlcjonMS4wLTAnXG4gKiA+IC0zXG4gKiBNYXRoLnJvdW5kKC0yLjUpXG4gKiA+IC0yXG4gKiBgYGBcbiAqXG4gKiBAc2VlIGBmb3JtYXROdW1iZXIoKWBcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBjb2RlIHNob3dzIGhvdyB0aGUgcGlwZSB0cmFuc2Zvcm1zIG51bWJlcnNcbiAqIGludG8gdGV4dCBzdHJpbmdzLCBhY2NvcmRpbmcgdG8gdmFyaW91cyBmb3JtYXQgc3BlY2lmaWNhdGlvbnMsXG4gKiB3aGVyZSB0aGUgY2FsbGVyJ3MgZGVmYXVsdCBsb2NhbGUgaXMgYGVuLVVTYC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9udW1iZXJfcGlwZS50c1wiIHJlZ2lvbj0nTnVtYmVyUGlwZSc+PC9jb2RlLWV4YW1wbGU+XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5AUGlwZSh7bmFtZTogJ251bWJlcid9KVxuZXhwb3J0IGNsYXNzIERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZykge31cblxuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkLlxuICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xuICAgKiBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDo8YnI+XG4gICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxuICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxuICAgKiBEZWZhdWx0IGlzIGAxYC5cbiAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXG4gICAqIERlZmF1bHQgaXMgYDBgLlxuICAgKiAgIC0gYG1heEZyYWN0aW9uRGlnaXRzYDogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cbiAgICogRGVmYXVsdCBpcyBgM2AuXG4gICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICAgKiBXaGVuIG5vdCBzdXBwbGllZCwgdXNlcyB0aGUgdmFsdWUgb2YgYExPQ0FMRV9JRGAsIHdoaWNoIGlzIGBlbi1VU2AgYnkgZGVmYXVsdC5cbiAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGRpZ2l0c0luZm8/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHJldHVybiBudWxsO1xuXG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IHRoaXMuX2xvY2FsZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBudW0gPSBzdHJUb051bWJlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gZm9ybWF0TnVtYmVyKG51bSwgbG9jYWxlLCBkaWdpdHNJbmZvKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgaW52YWxpZFBpcGVBcmd1bWVudEVycm9yKERlY2ltYWxQaXBlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIHRvIGEgcGVyY2VudGFnZVxuICogc3RyaW5nLCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcyB0aGF0IGRldGVybWluZSBncm91cCBzaXppbmcgYW5kXG4gKiBzZXBhcmF0b3IsIGRlY2ltYWwtcG9pbnQgY2hhcmFjdGVyLCBhbmQgb3RoZXIgbG9jYWxlLXNwZWNpZmljXG4gKiBjb25maWd1cmF0aW9ucy5cbiAqXG4gKiBAc2VlIGBmb3JtYXRQZXJjZW50KClgXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBzaG93cyBob3cgdGhlIHBpcGUgdHJhbnNmb3JtcyBudW1iZXJzXG4gKiBpbnRvIHRleHQgc3RyaW5ncywgYWNjb3JkaW5nIHRvIHZhcmlvdXMgZm9ybWF0IHNwZWNpZmljYXRpb25zLFxuICogd2hlcmUgdGhlIGNhbGxlcidzIGRlZmF1bHQgbG9jYWxlIGlzIGBlbi1VU2AuXG4gKlxuICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiY29tbW9uL3BpcGVzL3RzL3BlcmNlbnRfcGlwZS50c1wiIHJlZ2lvbj0nUGVyY2VudFBpcGUnPjwvY29kZS1leGFtcGxlPlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdwZXJjZW50J30pXG5leHBvcnQgY2xhc3MgUGVyY2VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB0byBiZSBmb3JtYXR0ZWQgYXMgYSBwZXJjZW50YWdlLlxuICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xuICAgKiBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDo8YnI+XG4gICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxuICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxuICAgKiBEZWZhdWx0IGlzIGAxYC5cbiAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXG4gICAqIERlZmF1bHQgaXMgYDBgLlxuICAgKiAgIC0gYG1heEZyYWN0aW9uRGlnaXRzYDogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cbiAgICogRGVmYXVsdCBpcyBgMGAuXG4gICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICAgKiBXaGVuIG5vdCBzdXBwbGllZCwgdXNlcyB0aGUgdmFsdWUgb2YgYExPQ0FMRV9JRGAsIHdoaWNoIGlzIGBlbi1VU2AgYnkgZGVmYXVsdC5cbiAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGRpZ2l0c0luZm8/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHJldHVybiBudWxsO1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCB0aGlzLl9sb2NhbGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG51bSA9IHN0clRvTnVtYmVyKHZhbHVlKTtcbiAgICAgIHJldHVybiBmb3JtYXRQZXJjZW50KG51bSwgbG9jYWxlLCBkaWdpdHNJbmZvKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgaW52YWxpZFBpcGVBcmd1bWVudEVycm9yKFBlcmNlbnRQaXBlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBUcmFuc2Zvcm1zIGEgbnVtYmVyIHRvIGEgY3VycmVuY3kgc3RyaW5nLCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlc1xuICogdGhhdCBkZXRlcm1pbmUgZ3JvdXAgc2l6aW5nIGFuZCBzZXBhcmF0b3IsIGRlY2ltYWwtcG9pbnQgY2hhcmFjdGVyLFxuICogYW5kIG90aGVyIGxvY2FsZS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucy5cbiAqXG4gKiB7QGEgY3VycmVuY3ktY29kZS1kZXByZWNhdGlvbn1cbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1oZWxwZnVsXCI+XG4gKlxuICogKipEZXByZWNhdGlvbiBub3RpY2U6KipcbiAqXG4gKiBUaGUgZGVmYXVsdCBjdXJyZW5jeSBjb2RlIGlzIGN1cnJlbnRseSBhbHdheXMgYFVTRGAgYnV0IHRoaXMgaXMgZGVwcmVjYXRlZCBmcm9tIHY5LlxuICpcbiAqICoqSW4gdjExIHRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoZSBjdXJyZW50IGxvY2FsZSBpZGVudGlmaWVkIGJ5XG4gKiB0aGUgYExPQ0FMX0lEYCB0b2tlbi4gU2VlIHRoZSBbaTE4biBndWlkZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApIGZvclxuICogbW9yZSBpbmZvcm1hdGlvbi4qKlxuICpcbiAqIElmIHlvdSBuZWVkIHRoZSBwcmV2aW91cyBiZWhhdmlvciB0aGVuIHNldCBpdCBieSBjcmVhdGluZyBhIGBERUZBVUxUX0NVUlJFTkNZX0NPREVgIHByb3ZpZGVyIGluXG4gKiB5b3VyIGFwcGxpY2F0aW9uIGBOZ01vZHVsZWA6XG4gKlxuICogYGBgdHNcbiAqIHtwcm92aWRlOiBERUZBVUxUX0NVUlJFTkNZX0NPREUsIHVzZVZhbHVlOiAnVVNEJ31cbiAqIGBgYFxuICpcbiAqIDwvZGl2PlxuICpcbiAqIEBzZWUgYGdldEN1cnJlbmN5U3ltYm9sKClgXG4gKiBAc2VlIGBmb3JtYXRDdXJyZW5jeSgpYFxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBUaGUgZm9sbG93aW5nIGNvZGUgc2hvd3MgaG93IHRoZSBwaXBlIHRyYW5zZm9ybXMgbnVtYmVyc1xuICogaW50byB0ZXh0IHN0cmluZ3MsIGFjY29yZGluZyB0byB2YXJpb3VzIGZvcm1hdCBzcGVjaWZpY2F0aW9ucyxcbiAqIHdoZXJlIHRoZSBjYWxsZXIncyBkZWZhdWx0IGxvY2FsZSBpcyBgZW4tVVNgLlxuICpcbiAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImNvbW1vbi9waXBlcy90cy9jdXJyZW5jeV9waXBlLnRzXCIgcmVnaW9uPSdDdXJyZW5jeVBpcGUnPjwvY29kZS1leGFtcGxlPlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdjdXJyZW5jeSd9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgICAgIEBJbmplY3QoREVGQVVMVF9DVVJSRU5DWV9DT0RFKSBwcml2YXRlIF9kZWZhdWx0Q3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnVVNEJykge31cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkIGFzIGN1cnJlbmN5LlxuICAgKiBAcGFyYW0gY3VycmVuY3lDb2RlIFRoZSBbSVNPIDQyMTddKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KSBjdXJyZW5jeSBjb2RlLFxuICAgKiBzdWNoIGFzIGBVU0RgIGZvciB0aGUgVVMgZG9sbGFyIGFuZCBgRVVSYCBmb3IgdGhlIGV1cm8uIFRoZSBkZWZhdWx0IGN1cnJlbmN5IGNvZGUgY2FuIGJlXG4gICAqIGNvbmZpZ3VyZWQgdXNpbmcgdGhlIGBERUZBVUxUX0NVUlJFTkNZX0NPREVgIGluamVjdGlvbiB0b2tlbi5cbiAgICogQHBhcmFtIGRpc3BsYXkgVGhlIGZvcm1hdCBmb3IgdGhlIGN1cnJlbmN5IGluZGljYXRvci4gT25lIG9mIHRoZSBmb2xsb3dpbmc6XG4gICAqICAgLSBgY29kZWA6IFNob3cgdGhlIGNvZGUgKHN1Y2ggYXMgYFVTRGApLlxuICAgKiAgIC0gYHN5bWJvbGAoZGVmYXVsdCk6IFNob3cgdGhlIHN5bWJvbCAoc3VjaCBhcyBgJGApLlxuICAgKiAgIC0gYHN5bWJvbC1uYXJyb3dgOiBVc2UgdGhlIG5hcnJvdyBzeW1ib2wgZm9yIGxvY2FsZXMgdGhhdCBoYXZlIHR3byBzeW1ib2xzIGZvciB0aGVpclxuICAgKiBjdXJyZW5jeS5cbiAgICogRm9yIGV4YW1wbGUsIHRoZSBDYW5hZGlhbiBkb2xsYXIgQ0FEIGhhcyB0aGUgc3ltYm9sIGBDQSRgIGFuZCB0aGUgc3ltYm9sLW5hcnJvdyBgJGAuIElmIHRoZVxuICAgKiBsb2NhbGUgaGFzIG5vIG5hcnJvdyBzeW1ib2wsIHVzZXMgdGhlIHN0YW5kYXJkIHN5bWJvbCBmb3IgdGhlIGxvY2FsZS5cbiAgICogICAtIFN0cmluZzogVXNlIHRoZSBnaXZlbiBzdHJpbmcgdmFsdWUgaW5zdGVhZCBvZiBhIGNvZGUgb3IgYSBzeW1ib2wuXG4gICAqIEZvciBleGFtcGxlLCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBzdXBwcmVzcyB0aGUgY3VycmVuY3kgJiBzeW1ib2wuXG4gICAqICAgLSBCb29sZWFuIChtYXJrZWQgZGVwcmVjYXRlZCBpbiB2NSk6IGB0cnVlYCBmb3Igc3ltYm9sIGFuZCBmYWxzZSBmb3IgYGNvZGVgLlxuICAgKlxuICAgKiBAcGFyYW0gZGlnaXRzSW5mbyBEZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9wdGlvbnMsIHNwZWNpZmllZCBieSBhIHN0cmluZ1xuICAgKiBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDo8YnI+XG4gICAqIDxjb2RlPnttaW5JbnRlZ2VyRGlnaXRzfS57bWluRnJhY3Rpb25EaWdpdHN9LXttYXhGcmFjdGlvbkRpZ2l0c308L2NvZGU+LlxuICAgKiAgIC0gYG1pbkludGVnZXJEaWdpdHNgOiBUaGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsIHBvaW50LlxuICAgKiBEZWZhdWx0IGlzIGAxYC5cbiAgICogICAtIGBtaW5GcmFjdGlvbkRpZ2l0c2A6IFRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuXG4gICAqIERlZmF1bHQgaXMgYDJgLlxuICAgKiAgIC0gYG1heEZyYWN0aW9uRGlnaXRzYDogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC5cbiAgICogRGVmYXVsdCBpcyBgMmAuXG4gICAqIElmIG5vdCBwcm92aWRlZCwgdGhlIG51bWJlciB3aWxsIGJlIGZvcm1hdHRlZCB3aXRoIHRoZSBwcm9wZXIgYW1vdW50IG9mIGRpZ2l0cyxcbiAgICogZGVwZW5kaW5nIG9uIHdoYXQgdGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpIHNwZWNpZmllcy5cbiAgICogRm9yIGV4YW1wbGUsIHRoZSBDYW5hZGlhbiBkb2xsYXIgaGFzIDIgZGlnaXRzLCB3aGVyZWFzIHRoZSBDaGlsZWFuIHBlc28gaGFzIG5vbmUuXG4gICAqIEBwYXJhbSBsb2NhbGUgQSBsb2NhbGUgY29kZSBmb3IgdGhlIGxvY2FsZSBmb3JtYXQgcnVsZXMgdG8gdXNlLlxuICAgKiBXaGVuIG5vdCBzdXBwbGllZCwgdXNlcyB0aGUgdmFsdWUgb2YgYExPQ0FMRV9JRGAsIHdoaWNoIGlzIGBlbi1VU2AgYnkgZGVmYXVsdC5cbiAgICogU2VlIFtTZXR0aW5nIHlvdXIgYXBwIGxvY2FsZV0oZ3VpZGUvaTE4biNzZXR0aW5nLXVwLXRoZS1sb2NhbGUtb2YteW91ci1hcHApLlxuICAgKi9cbiAgdHJhbnNmb3JtKFxuICAgICAgdmFsdWU6IGFueSwgY3VycmVuY3lDb2RlPzogc3RyaW5nLFxuICAgICAgZGlzcGxheTogJ2NvZGUnfCdzeW1ib2wnfCdzeW1ib2wtbmFycm93J3xzdHJpbmd8Ym9vbGVhbiA9ICdzeW1ib2wnLCBkaWdpdHNJbmZvPzogc3RyaW5nLFxuICAgICAgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIGlmIChpc0VtcHR5KHZhbHVlKSkgcmV0dXJuIG51bGw7XG5cbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgdGhpcy5fbG9jYWxlO1xuXG4gICAgaWYgKHR5cGVvZiBkaXNwbGF5ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICg8YW55PmNvbnNvbGUgJiYgPGFueT5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IHRoZSBjdXJyZW5jeSBwaXBlIGhhcyBiZWVuIGNoYW5nZWQgaW4gQW5ndWxhciB2NS4gVGhlIHN5bWJvbERpc3BsYXkgb3B0aW9uICh0aGlyZCBwYXJhbWV0ZXIpIGlzIG5vdyBhIHN0cmluZyBpbnN0ZWFkIG9mIGEgYm9vbGVhbi4gVGhlIGFjY2VwdGVkIHZhbHVlcyBhcmUgXCJjb2RlXCIsIFwic3ltYm9sXCIgb3IgXCJzeW1ib2wtbmFycm93XCIuYCk7XG4gICAgICB9XG4gICAgICBkaXNwbGF5ID0gZGlzcGxheSA/ICdzeW1ib2wnIDogJ2NvZGUnO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW5jeTogc3RyaW5nID0gY3VycmVuY3lDb2RlIHx8IHRoaXMuX2RlZmF1bHRDdXJyZW5jeUNvZGU7XG4gICAgaWYgKGRpc3BsYXkgIT09ICdjb2RlJykge1xuICAgICAgaWYgKGRpc3BsYXkgPT09ICdzeW1ib2wnIHx8IGRpc3BsYXkgPT09ICdzeW1ib2wtbmFycm93Jykge1xuICAgICAgICBjdXJyZW5jeSA9IGdldEN1cnJlbmN5U3ltYm9sKGN1cnJlbmN5LCBkaXNwbGF5ID09PSAnc3ltYm9sJyA/ICd3aWRlJyA6ICduYXJyb3cnLCBsb2NhbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVuY3kgPSBkaXNwbGF5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBudW0gPSBzdHJUb051bWJlcih2YWx1ZSk7XG4gICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kobnVtLCBsb2NhbGUsIGN1cnJlbmN5LCBjdXJyZW5jeUNvZGUsIGRpZ2l0c0luZm8pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBpbnZhbGlkUGlwZUFyZ3VtZW50RXJyb3IoQ3VycmVuY3lQaXBlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyIChpZiBuZWVkZWQpLlxuICovXG5mdW5jdGlvbiBzdHJUb051bWJlcih2YWx1ZTogbnVtYmVyfHN0cmluZyk6IG51bWJlciB7XG4gIC8vIENvbnZlcnQgc3RyaW5ncyB0byBudW1iZXJzXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTihOdW1iZXIodmFsdWUpIC0gcGFyc2VGbG9hdCh2YWx1ZSkpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIG5vdCBhIG51bWJlcmApO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdfQ==