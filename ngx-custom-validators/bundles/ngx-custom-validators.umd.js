(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-custom-validators', ['@angular/core','exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory(global.ng.core,global['ngx-custom-validators'] = {}, global.ng.core, global.ng.forms));
}(this, function (ɵngcc0,exports, core, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    function isDate(obj) {
        try {
            var date = new Date(obj);
            return !isNaN(date.getTime());
        }
        catch (e) {
            return false;
        }
    }
    function parseDate(obj) {
        try {
            // Moment.js
            if (obj._d instanceof Date) {
                var d = obj._d;
                var month = +d.getMonth() + 1;
                var day = +d.getDate();
                return d.getFullYear() + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
            }
            // NgbDateStruct
            if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
                var month = +obj.month;
                var day = +obj.day;
                return obj.year + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
            }
        }
        catch (e) { }
        return obj;
    }
    function formatDayOrMonth(month) {
        return month < 10 ? "0" + month : month;
    }

    var arrayLength = function (value) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var obj = control.value;
            return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
        };
    };

    var base64 = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
    };

    var creditCard = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, '');
        // problem with chrome
        /* tslint:disable */
        if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
            return { creditCard: true };
        }
        /* tslint:enable */
        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                }
                else {
                    sum += tmpNum;
                }
            }
            else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        if (Boolean((sum % 10) === 0 ? sanitized : false)) {
            return null;
        }
        return { creditCard: true };
    };

    var date = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        v = parseDate(v);
        return isDate(v) ? null : { date: true };
    };

    var dateISO = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
    };

    var digits = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^\d+$/.test(v) ? null : { digits: true };
    };

    var email = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        /* tslint:disable */
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
        /* tslint:enable */
    };

    var equal = function (val) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return val === v ? null : { equal: { value: val } };
        };
    };

    var equalTo = function (equalControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
        };
    };

    var gt = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v > +value ? null : { gt: { value: value } };
        };
    };

    var gte = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= +value ? null : { gte: { value: value } };
        };
    };

    var json = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        try {
            var obj = JSON.parse(v);
            if (Boolean(obj) && typeof obj === 'object') {
                return null;
            }
        }
        catch (e) { }
        return { json: true };
    };

    var lt = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v < +value ? null : { lt: { value: value } };
        };
    };

    var lte = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v <= +value ? null : { lte: { value: value } };
        };
    };

    var max = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v <= +value ? null : { max: { value: value } };
        };
    };

    var maxDate = function (maxInput) {
        var value;
        var subscribe = false;
        var maxValue = maxInput;
        var isForm = maxInput instanceof forms.FormControl || maxInput instanceof forms.NgModel;
        return function (control) {
            if (!subscribe && isForm) {
                subscribe = true;
                maxInput.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            if (isForm) {
                maxValue = maxInput.value;
            }
            value = parseDate(maxValue);
            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                }
                else if (isForm) {
                    return { maxDate: { error: 'maxDate is invalid' } };
                }
                else {
                    throw Error('maxDate value must be or return a formatted date');
                }
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var d = new Date(parseDate(control.value)).getTime();
            if (!isDate(d)) {
                return { value: true };
            }
            if (value instanceof Function) {
                value = value();
            }
            return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
        };
    };

    var min = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= +value ? null : { min: { value: value } };
        };
    };

    var minDate = function (minInput) {
        var value;
        var subscribe = false;
        var minValue = minInput;
        var isForm = minInput instanceof forms.FormControl || minInput instanceof forms.NgModel;
        return function (control) {
            if (!subscribe && isForm) {
                subscribe = true;
                minInput.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            if (isForm) {
                minValue = minInput.value;
            }
            value = parseDate(minValue);
            if (!isDate(value) && !(value instanceof Function)) {
                if (value == null) {
                    return null;
                }
                else if (isForm) {
                    return { minDate: { error: 'minDate is invalid' } };
                }
                else {
                    throw Error('minDate value must be or return a formatted date');
                }
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var d = new Date(parseDate(control.value)).getTime();
            if (!isDate(d)) {
                return { value: true };
            }
            if (value instanceof Function) {
                value = value();
            }
            return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
        };
    };

    var notEqual = function (val) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return val !== v ? null : { notEqual: { value: val } };
        };
    };

    var notEqualTo = function (notEqualControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                notEqualControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            if (notEqualControl.value == null && v == null) {
                return null;
            }
            return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
        };
    };

    var number = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
    };

    var property = function (value) {
        return function (control) {
            var e_1, _a;
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var properties = value.split(',');
            var obj = control.value;
            var isValid = true;
            try {
                for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                    var prop = properties_1_1.value;
                    if (obj[prop] == null) {
                        isValid = false;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return isValid ? null : { hasProperty: { value: value } };
        };
    };

    var range = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = +control.value;
            return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
        };
    };

    var rangeLength = function (value) {
        return function (control) {
            if (!isPresent(value)) {
                return null;
            }
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
        };
    };

    var uuids = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    var uuid = function (version) {
        return function (control) {
            if (isPresent(forms.Validators.required(control))) {
                return null;
            }
            var v = control.value;
            var pattern = uuids[version] || uuids.all;
            return (new RegExp(pattern)).test(v) ? null : { uuid: true };
        };
    };

    var url = function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var v = control.value;
        /* tslint:disable */
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
        /* tslint:enable */
    };

    var ARRAY_LENGTH_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return ArrayLengthValidator; }),
        multi: true
    };
    var ArrayLengthValidator = /** @class */ (function () {
        function ArrayLengthValidator() {
        }
        ArrayLengthValidator.prototype.ngOnInit = function () {
            this.validator = arrayLength(this.arrayLength);
        };
        ArrayLengthValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'arrayLength') {
                    this.validator = arrayLength(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        ArrayLengthValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        ArrayLengthValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], ArrayLengthValidator.prototype, "arrayLength", void 0);
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [ɵngcc0.ɵɵProvidersFeature([ARRAY_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ArrayLengthValidator, [{
        type: core.Directive,
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], function () { return []; }, { arrayLength: [{
            type: core.Input
        }] }); })();
        return ArrayLengthValidator;
    }());

    var BASE64_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return Base64Validator; }),
        multi: true
    };
    var Base64Validator = /** @class */ (function () {
        function Base64Validator() {
        }
        Base64Validator.prototype.validate = function (c) {
            return base64(c);
        };
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([BASE64_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Base64Validator, [{
        type: core.Directive,
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return Base64Validator;
    }());

    var CREDIT_CARD_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return CreditCardValidator; }),
        multi: true
    };
    var CreditCardValidator = /** @class */ (function () {
        function CreditCardValidator() {
        }
        CreditCardValidator.prototype.validate = function (c) {
            return creditCard(c);
        };
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([CREDIT_CARD_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardValidator, [{
        type: core.Directive,
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return CreditCardValidator;
    }());

    var DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DateValidator; }),
        multi: true
    };
    var DateValidator = /** @class */ (function () {
        function DateValidator() {
        }
        DateValidator.prototype.validate = function (c) {
            return date(c);
        };
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateValidator, [{
        type: core.Directive,
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return DateValidator;
    }());

    var DATE_ISO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DateISOValidator; }),
        multi: true
    };
    var DateISOValidator = /** @class */ (function () {
        function DateISOValidator() {
        }
        DateISOValidator.prototype.validate = function (c) {
            return dateISO(c);
        };
DateISOValidator.ɵfac = function DateISOValidator_Factory(t) { return new (t || DateISOValidator)(); };
DateISOValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateISOValidator, selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_ISO_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateISOValidator, [{
        type: core.Directive,
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return DateISOValidator;
    }());

    var DIGITS_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return DigitsValidator; }),
        multi: true
    };
    var DigitsValidator = /** @class */ (function () {
        function DigitsValidator() {
        }
        DigitsValidator.prototype.validate = function (c) {
            return digits(c);
        };
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DIGITS_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DigitsValidator, [{
        type: core.Directive,
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return DigitsValidator;
    }());

    var EMAIL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EmailValidator; }),
        multi: true
    };
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.validate = function (c) {
            return email(c);
        };
EmailValidator.ɵfac = function EmailValidator_Factory(t) { return new (t || EmailValidator)(); };
EmailValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EmailValidator, selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([EMAIL_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailValidator, [{
        type: core.Directive,
        args: [{
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return EmailValidator;
    }());

    var EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EqualValidator; }),
        multi: true
    };
    var EqualValidator = /** @class */ (function () {
        function EqualValidator() {
        }
        EqualValidator.prototype.ngOnInit = function () {
            this.validator = equal(this.equal);
        };
        EqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'equal') {
                    this.validator = equal(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        EqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        EqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], EqualValidator.prototype, "equal", void 0);
EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(); };
EqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]], inputs: { equal: "equal" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualValidator, [{
        type: core.Directive,
        args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { equal: [{
            type: core.Input
        }] }); })();
        return EqualValidator;
    }());

    var EQUAL_TO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EqualToValidator; }),
        multi: true
    };
    var EqualToValidator = /** @class */ (function () {
        function EqualToValidator() {
        }
        EqualToValidator.prototype.ngOnInit = function () {
            this.validator = equalTo(this.equalTo);
        };
        EqualToValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", forms.FormControl)
        ], EqualToValidator.prototype, "equalTo", void 0);
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_TO_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualToValidator, [{
        type: core.Directive,
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], function () { return []; }, { equalTo: [{
            type: core.Input
        }] }); })();
        return EqualToValidator;
    }());

    var GREATER_THAN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return GreaterThanValidator; }),
        multi: true
    };
    var GreaterThanValidator = /** @class */ (function () {
        function GreaterThanValidator() {
        }
        GreaterThanValidator.prototype.ngOnInit = function () {
            this.validator = gt(this.gt);
        };
        GreaterThanValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'gt') {
                    this.validator = gt(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        GreaterThanValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], GreaterThanValidator.prototype, "gt", void 0);
GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) { return new (t || GreaterThanValidator)(); };
GreaterThanValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanValidator, selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]], inputs: { gt: "gt" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanValidator, [{
        type: core.Directive,
        args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            }]
    }], function () { return []; }, { gt: [{
            type: core.Input
        }] }); })();
        return GreaterThanValidator;
    }());

    var GREATER_THAN_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return GreaterThanEqualValidator; }),
        multi: true
    };
    var GreaterThanEqualValidator = /** @class */ (function () {
        function GreaterThanEqualValidator() {
        }
        GreaterThanEqualValidator.prototype.ngOnInit = function () {
            this.validator = gte(this.gte);
        };
        GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'gte') {
                    this.validator = gte(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        GreaterThanEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], GreaterThanEqualValidator.prototype, "gte", void 0);
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanEqualValidator, [{
        type: core.Directive,
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { gte: [{
            type: core.Input
        }] }); })();
        return GreaterThanEqualValidator;
    }());

    var JSON_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return JSONValidator; }),
        multi: true
    };
    var JSONValidator = /** @class */ (function () {
        function JSONValidator() {
        }
        JSONValidator.prototype.validate = function (c) {
            return json(c);
        };
JSONValidator.ɵfac = function JSONValidator_Factory(t) { return new (t || JSONValidator)(); };
JSONValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: JSONValidator, selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([JSON_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JSONValidator, [{
        type: core.Directive,
        args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return JSONValidator;
    }());

    var LESS_THAN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return LessThanValidator; }),
        multi: true
    };
    var LessThanValidator = /** @class */ (function () {
        function LessThanValidator() {
        }
        LessThanValidator.prototype.ngOnInit = function () {
            this.validator = lt(this.lt);
        };
        LessThanValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'lt') {
                    this.validator = lt(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        LessThanValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], LessThanValidator.prototype, "lt", void 0);
LessThanValidator.ɵfac = function LessThanValidator_Factory(t) { return new (t || LessThanValidator)(); };
LessThanValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LessThanValidator, selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]], inputs: { lt: "lt" }, features: [ɵngcc0.ɵɵProvidersFeature([LESS_THAN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LessThanValidator, [{
        type: core.Directive,
        args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            }]
    }], function () { return []; }, { lt: [{
            type: core.Input
        }] }); })();
        return LessThanValidator;
    }());

    var LESS_THAN_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return LessThanEqualValidator; }),
        multi: true
    };
    var LessThanEqualValidator = /** @class */ (function () {
        function LessThanEqualValidator() {
        }
        LessThanEqualValidator.prototype.ngOnInit = function () {
            this.validator = lte(this.lte);
        };
        LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'lte') {
                    this.validator = lte(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        LessThanEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], LessThanEqualValidator.prototype, "lte", void 0);
LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) { return new (t || LessThanEqualValidator)(); };
LessThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LessThanEqualValidator, selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]], inputs: { lte: "lte" }, features: [ɵngcc0.ɵɵProvidersFeature([LESS_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LessThanEqualValidator, [{
        type: core.Directive,
        args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { lte: [{
            type: core.Input
        }] }); })();
        return LessThanEqualValidator;
    }());

    var MAX_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxValidator; }),
        multi: true
    };
    var MaxValidator = /** @class */ (function () {
        function MaxValidator() {
        }
        MaxValidator.prototype.ngOnInit = function () {
            this.validator = max(this.max);
        };
        MaxValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'max') {
                    this.validator = max(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MaxValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MaxValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], MaxValidator.prototype, "max", void 0);
MaxValidator.ɵfac = function MaxValidator_Factory(t) { return new (t || MaxValidator)(); };
MaxValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxValidator, selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]], inputs: { max: "max" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxValidator, [{
        type: core.Directive,
        args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            }]
    }], function () { return []; }, { max: [{
            type: core.Input
        }] }); })();
        return MaxValidator;
    }());

    var MAX_DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxDateValidator; }),
        multi: true
    };
    var MaxDateValidator = /** @class */ (function () {
        function MaxDateValidator() {
        }
        MaxDateValidator.prototype.ngOnInit = function () {
            this.validator = maxDate(this.maxDate);
        };
        MaxDateValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'maxDate') {
                    this.validator = maxDate(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MaxDateValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MaxDateValidator.prototype, "maxDate", void 0);
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxDateValidator, [{
        type: core.Directive,
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], function () { return []; }, { maxDate: [{
            type: core.Input
        }] }); })();
        return MaxDateValidator;
    }());

    var MIN_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinValidator; }),
        multi: true
    };
    var MinValidator = /** @class */ (function () {
        function MinValidator() {
        }
        MinValidator.prototype.ngOnInit = function () {
            this.validator = min(this.min);
        };
        MinValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'min') {
                    this.validator = min(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MinValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MinValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], MinValidator.prototype, "min", void 0);
MinValidator.ɵfac = function MinValidator_Factory(t) { return new (t || MinValidator)(); };
MinValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinValidator, selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]], inputs: { min: "min" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinValidator, [{
        type: core.Directive,
        args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            }]
    }], function () { return []; }, { min: [{
            type: core.Input
        }] }); })();
        return MinValidator;
    }());

    var MIN_DATE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinDateValidator; }),
        multi: true
    };
    var MinDateValidator = /** @class */ (function () {
        function MinDateValidator() {
        }
        MinDateValidator.prototype.ngOnInit = function () {
            this.validator = minDate(this.minDate);
        };
        MinDateValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'minDate') {
                    this.validator = minDate(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        MinDateValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MinDateValidator.prototype, "minDate", void 0);
MinDateValidator.ɵfac = function MinDateValidator_Factory(t) { return new (t || MinDateValidator)(); };
MinDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinDateValidator, selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]], inputs: { minDate: "minDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinDateValidator, [{
        type: core.Directive,
        args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            }]
    }], function () { return []; }, { minDate: [{
            type: core.Input
        }] }); })();
        return MinDateValidator;
    }());

    var NOT_EQUAL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NotEqualValidator; }),
        multi: true
    };
    var NotEqualValidator = /** @class */ (function () {
        function NotEqualValidator() {
        }
        NotEqualValidator.prototype.ngOnInit = function () {
            this.validator = notEqual(this.notEqual);
        };
        NotEqualValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'notEqual') {
                    this.validator = notEqual(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        NotEqualValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NotEqualValidator.prototype, "notEqual", void 0);
NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) { return new (t || NotEqualValidator)(); };
NotEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualValidator, selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]], inputs: { notEqual: "notEqual" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualValidator, [{
        type: core.Directive,
        args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            }]
    }], function () { return []; }, { notEqual: [{
            type: core.Input
        }] }); })();
        return NotEqualValidator;
    }());

    var NOT_EQUAL_TO_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NotEqualToValidator; }),
        multi: true
    };
    var NotEqualToValidator = /** @class */ (function () {
        function NotEqualToValidator() {
        }
        NotEqualToValidator.prototype.ngOnInit = function () {
            this.validator = notEqualTo(this.notEqualTo);
        };
        NotEqualToValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", forms.FormControl)
        ], NotEqualToValidator.prototype, "notEqualTo", void 0);
NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) { return new (t || NotEqualToValidator)(); };
NotEqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualToValidator, selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]], inputs: { notEqualTo: "notEqualTo" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_TO_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualToValidator, [{
        type: core.Directive,
        args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
    }], function () { return []; }, { notEqualTo: [{
            type: core.Input
        }] }); })();
        return NotEqualToValidator;
    }());

    var NUMBER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NumberValidator; }),
        multi: true
    };
    var NumberValidator = /** @class */ (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.validate = function (c) {
            return number(c);
        };
NumberValidator.ɵfac = function NumberValidator_Factory(t) { return new (t || NumberValidator)(); };
NumberValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NumberValidator, selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([NUMBER_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberValidator, [{
        type: core.Directive,
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return NumberValidator;
    }());

    var PROPERTY_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return PropertyValidator; }),
        multi: true
    };
    var PropertyValidator = /** @class */ (function () {
        function PropertyValidator() {
        }
        PropertyValidator.prototype.ngOnInit = function () {
            this.validator = property(this.property);
        };
        PropertyValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'property') {
                    this.validator = property(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        PropertyValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        PropertyValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], PropertyValidator.prototype, "property", void 0);
PropertyValidator.ɵfac = function PropertyValidator_Factory(t) { return new (t || PropertyValidator)(); };
PropertyValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PropertyValidator, selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]], inputs: { property: "property" }, features: [ɵngcc0.ɵɵProvidersFeature([PROPERTY_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PropertyValidator, [{
        type: core.Directive,
        args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            }]
    }], function () { return []; }, { property: [{
            type: core.Input
        }] }); })();
        return PropertyValidator;
    }());

    var RANGE_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RangeValidator; }),
        multi: true
    };
    var RangeValidator = /** @class */ (function () {
        function RangeValidator() {
        }
        RangeValidator.prototype.ngOnInit = function () {
            this.validator = range(this.range);
        };
        RangeValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'range') {
                    this.validator = range(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        RangeValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        RangeValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], RangeValidator.prototype, "range", void 0);
RangeValidator.ɵfac = function RangeValidator_Factory(t) { return new (t || RangeValidator)(); };
RangeValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeValidator, selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]], inputs: { range: "range" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeValidator, [{
        type: core.Directive,
        args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            }]
    }], function () { return []; }, { range: [{
            type: core.Input
        }] }); })();
        return RangeValidator;
    }());

    var RANGE_LENGTH_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RangeLengthValidator; }),
        multi: true
    };
    var RangeLengthValidator = /** @class */ (function () {
        function RangeLengthValidator() {
        }
        RangeLengthValidator.prototype.ngOnInit = function () {
            this.validator = rangeLength(this.rangeLength);
        };
        RangeLengthValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'rangeLength') {
                    this.validator = rangeLength(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        RangeLengthValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], RangeLengthValidator.prototype, "rangeLength", void 0);
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeLengthValidator, [{
        type: core.Directive,
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], function () { return []; }, { rangeLength: [{
            type: core.Input
        }] }); })();
        return RangeLengthValidator;
    }());

    var URL_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return UrlValidator; }),
        multi: true
    };
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.prototype.validate = function (c) {
            return url(c);
        };
UrlValidator.ɵfac = function UrlValidator_Factory(t) { return new (t || UrlValidator)(); };
UrlValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UrlValidator, selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([URL_VALIDATOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UrlValidator, [{
        type: core.Directive,
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
        return UrlValidator;
    }());

    var UUID_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return UUIDValidator; }),
        multi: true
    };
    var UUIDValidator = /** @class */ (function () {
        function UUIDValidator() {
        }
        UUIDValidator.prototype.ngOnInit = function () {
            this.validator = uuid(this.uuid);
        };
        UUIDValidator.prototype.ngOnChanges = function (changes) {
            for (var key in changes) {
                if (key === 'uuid') {
                    this.validator = uuid(changes[key].currentValue);
                    if (this.onChange) {
                        this.onChange();
                    }
                }
            }
        };
        UUIDValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onChange = fn;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], UUIDValidator.prototype, "uuid", void 0);
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [ɵngcc0.ɵɵProvidersFeature([UUID_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UUIDValidator, [{
        type: core.Directive,
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], function () { return []; }, { uuid: [{
            type: core.Input
        }] }); })();
        return UUIDValidator;
    }());

    var CustomValidators = {
        arrayLength: arrayLength,
        base64: base64,
        creditCard: creditCard,
        date: date,
        dateISO: dateISO,
        digits: digits,
        email: email,
        equal: equal,
        equalTo: equalTo,
        gt: gt,
        gte: gte,
        json: json,
        lt: lt,
        lte: lte,
        max: max,
        maxDate: maxDate,
        min: min,
        minDate: minDate,
        notEqual: notEqual,
        notEqualTo: notEqualTo,
        number: number,
        property: property,
        range: range,
        rangeLength: rangeLength,
        url: url,
        uuid: uuid
    };
    var CustomDirectives = [
        ArrayLengthValidator,
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        DateISOValidator,
        DigitsValidator,
        EmailValidator,
        EqualValidator,
        EqualToValidator,
        GreaterThanValidator,
        GreaterThanEqualValidator,
        JSONValidator,
        LessThanValidator,
        LessThanEqualValidator,
        MaxValidator,
        MaxDateValidator,
        MinValidator,
        MinDateValidator,
        NotEqualValidator,
        NotEqualToValidator,
        NumberValidator,
        PropertyValidator,
        RangeValidator,
        RangeLengthValidator,
        UrlValidator,
        UUIDValidator
    ];
    var CustomFormsModule = /** @class */ (function () {
        function CustomFormsModule() {
        }
CustomFormsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CustomFormsModule });
CustomFormsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CustomFormsModule_Factory(t) { return new (t || CustomFormsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CustomFormsModule, { declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator], exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CustomFormsModule, [{
        type: core.NgModule,
        args: [{
                declarations: [CustomDirectives],
                exports: [CustomDirectives]
            }]
    }], function () { return []; }, null); })();
        return CustomFormsModule;
    }());

    exports.CustomFormsModule = CustomFormsModule;
    exports.CustomValidators = CustomValidators;
    exports.ɵa = arrayLength;
    exports.ɵb = base64;
    exports.ɵba = ArrayLengthValidator;
    exports.ɵbb = Base64Validator;
    exports.ɵbc = CreditCardValidator;
    exports.ɵbd = DateValidator;
    exports.ɵbe = DateISOValidator;
    exports.ɵbf = DigitsValidator;
    exports.ɵbg = EmailValidator;
    exports.ɵbh = EqualValidator;
    exports.ɵbi = EqualToValidator;
    exports.ɵbj = GreaterThanValidator;
    exports.ɵbk = GreaterThanEqualValidator;
    exports.ɵbl = JSONValidator;
    exports.ɵbm = LessThanValidator;
    exports.ɵbn = LessThanEqualValidator;
    exports.ɵbo = MaxValidator;
    exports.ɵbp = MaxDateValidator;
    exports.ɵbq = MinValidator;
    exports.ɵbr = MinDateValidator;
    exports.ɵbs = NotEqualValidator;
    exports.ɵbt = NotEqualToValidator;
    exports.ɵbu = NumberValidator;
    exports.ɵbv = PropertyValidator;
    exports.ɵbw = RangeValidator;
    exports.ɵbx = RangeLengthValidator;
    exports.ɵby = UrlValidator;
    exports.ɵbz = UUIDValidator;
    exports.ɵc = creditCard;
    exports.ɵd = date;
    exports.ɵe = dateISO;
    exports.ɵf = digits;
    exports.ɵg = email;
    exports.ɵh = equal;
    exports.ɵi = equalTo;
    exports.ɵj = gt;
    exports.ɵk = gte;
    exports.ɵl = json;
    exports.ɵm = lt;
    exports.ɵn = lte;
    exports.ɵo = max;
    exports.ɵp = maxDate;
    exports.ɵq = min;
    exports.ɵr = minDate;
    exports.ɵs = notEqual;
    exports.ɵt = notEqualTo;
    exports.ɵu = number;
    exports.ɵv = property;
    exports.ɵw = range;
    exports.ɵx = rangeLength;
    exports.ɵy = url;
    exports.ɵz = uuid;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

//# sourceMappingURL=ngx-custom-validators.umd.js.map