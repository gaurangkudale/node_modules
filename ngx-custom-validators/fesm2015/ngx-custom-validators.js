import { __decorate, __metadata } from 'tslib';
import { forwardRef, Input, Directive, NgModule } from '@angular/core';
import { Validators, FormControl, NgModel, NG_VALIDATORS } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        const date = new Date(obj);
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
            const d = obj._d;
            const month = +d.getMonth() + 1;
            const day = +d.getDate();
            return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            const month = +obj.month;
            const day = +obj.day;
            return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? `0${month}` : month;
}

const arrayLength = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
    };
};

const base64 = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
};

const creditCard = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    const sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
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

const date = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    let v = control.value;
    v = parseDate(v);
    return isDate(v) ? null : { date: true };
};

const dateISO = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const digits = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const email = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const equal = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};

const equalTo = (equalControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v > +value ? null : { gt: { value: value } };
    };
};

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { gte: { value: value } };
    };
};

const json = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v < +value ? null : { lt: { value: value } };
    };
};

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { lte: { value: value } };
    };
};

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { max: { value: value } };
    };
};

const maxDate = (maxInput) => {
    let value;
    let subscribe = false;
    let maxValue = maxInput;
    const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(() => {
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
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { min: { value: value } };
    };
};

const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
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
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const notEqual = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};

const notEqualTo = (notEqualControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        if (notEqualControl.value == null && v == null) {
            return null;
        }
        return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
    };
};

const number = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

const property = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
    };
};

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
    };
};

const uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        const pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const url = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const ARRAY_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ArrayLengthValidator),
    multi: true
};
let ArrayLengthValidator = class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [ɵngcc0.ɵɵProvidersFeature([ARRAY_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], ArrayLengthValidator.prototype, "arrayLength", void 0);

const BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64Validator),
    multi: true
};
let Base64Validator = class Base64Validator {
    validate(c) {
        return base64(c);
    }
};
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([BASE64_VALIDATOR])] });

const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
let CreditCardValidator = class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
};
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([CREDIT_CARD_VALIDATOR])] });

const DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};
let DateValidator = class DateValidator {
    validate(c) {
        return date(c);
    }
};
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_VALIDATOR])] });

const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
let DateISOValidator = class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
};
DateISOValidator.ɵfac = function DateISOValidator_Factory(t) { return new (t || DateISOValidator)(); };
DateISOValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DateISOValidator, selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DATE_ISO_VALIDATOR])] });

const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
let DigitsValidator = class DigitsValidator {
    validate(c) {
        return digits(c);
    }
};
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([DIGITS_VALIDATOR])] });

const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
let EmailValidator = class EmailValidator {
    validate(c) {
        return email(c);
    }
};
EmailValidator.ɵfac = function EmailValidator_Factory(t) { return new (t || EmailValidator)(); };
EmailValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EmailValidator, selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([EMAIL_VALIDATOR])] });

const EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};
let EqualValidator = class EqualValidator {
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(); };
EqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]], inputs: { equal: "equal" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], EqualValidator.prototype, "equal", void 0);

const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
let EqualToValidator = class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [ɵngcc0.ɵɵProvidersFeature([EQUAL_TO_VALIDATOR])] });
__decorate([
    Input(),
    __metadata("design:type", FormControl)
], EqualToValidator.prototype, "equalTo", void 0);

const GREATER_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanValidator),
    multi: true
};
let GreaterThanValidator = class GreaterThanValidator {
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) { return new (t || GreaterThanValidator)(); };
GreaterThanValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanValidator, selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]], inputs: { gt: "gt" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], GreaterThanValidator.prototype, "gt", void 0);

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidator),
    multi: true
};
let GreaterThanEqualValidator = class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [ɵngcc0.ɵɵProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], GreaterThanEqualValidator.prototype, "gte", void 0);

const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
let JSONValidator = class JSONValidator {
    validate(c) {
        return json(c);
    }
};
JSONValidator.ɵfac = function JSONValidator_Factory(t) { return new (t || JSONValidator)(); };
JSONValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: JSONValidator, selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([JSON_VALIDATOR])] });

const LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidator),
    multi: true
};
let LessThanValidator = class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanValidator.ɵfac = function LessThanValidator_Factory(t) { return new (t || LessThanValidator)(); };
LessThanValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LessThanValidator, selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]], inputs: { lt: "lt" }, features: [ɵngcc0.ɵɵProvidersFeature([LESS_THAN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], LessThanValidator.prototype, "lt", void 0);

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanEqualValidator),
    multi: true
};
let LessThanEqualValidator = class LessThanEqualValidator {
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) { return new (t || LessThanEqualValidator)(); };
LessThanEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: LessThanEqualValidator, selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]], inputs: { lte: "lte" }, features: [ɵngcc0.ɵɵProvidersFeature([LESS_THAN_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], LessThanEqualValidator.prototype, "lte", void 0);

const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidator),
    multi: true
};
let MaxValidator = class MaxValidator {
    ngOnInit() {
        this.validator = max(this.max);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxValidator.ɵfac = function MaxValidator_Factory(t) { return new (t || MaxValidator)(); };
MaxValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxValidator, selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]], inputs: { max: "max" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], MaxValidator.prototype, "max", void 0);

const MAX_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidator),
    multi: true
};
let MaxDateValidator = class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], MaxDateValidator.prototype, "maxDate", void 0);

const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};
let MinValidator = class MinValidator {
    ngOnInit() {
        this.validator = min(this.min);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinValidator.ɵfac = function MinValidator_Factory(t) { return new (t || MinValidator)(); };
MinValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinValidator, selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]], inputs: { min: "min" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Number)
], MinValidator.prototype, "min", void 0);

const MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinDateValidator),
    multi: true
};
let MinDateValidator = class MinDateValidator {
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinDateValidator.ɵfac = function MinDateValidator_Factory(t) { return new (t || MinDateValidator)(); };
MinDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MinDateValidator, selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]], inputs: { minDate: "minDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MIN_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], MinDateValidator.prototype, "minDate", void 0);

const NOT_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidator),
    multi: true
};
let NotEqualValidator = class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) { return new (t || NotEqualValidator)(); };
NotEqualValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualValidator, selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]], inputs: { notEqual: "notEqual" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], NotEqualValidator.prototype, "notEqual", void 0);

const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
let NotEqualToValidator = class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) { return new (t || NotEqualToValidator)(); };
NotEqualToValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NotEqualToValidator, selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]], inputs: { notEqualTo: "notEqualTo" }, features: [ɵngcc0.ɵɵProvidersFeature([NOT_EQUAL_TO_VALIDATOR])] });
__decorate([
    Input(),
    __metadata("design:type", FormControl)
], NotEqualToValidator.prototype, "notEqualTo", void 0);

const NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberValidator),
    multi: true
};
let NumberValidator = class NumberValidator {
    validate(c) {
        return number(c);
    }
};
NumberValidator.ɵfac = function NumberValidator_Factory(t) { return new (t || NumberValidator)(); };
NumberValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NumberValidator, selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([NUMBER_VALIDATOR])] });

const PROPERTY_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PropertyValidator),
    multi: true
};
let PropertyValidator = class PropertyValidator {
    ngOnInit() {
        this.validator = property(this.property);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
PropertyValidator.ɵfac = function PropertyValidator_Factory(t) { return new (t || PropertyValidator)(); };
PropertyValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PropertyValidator, selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]], inputs: { property: "property" }, features: [ɵngcc0.ɵɵProvidersFeature([PROPERTY_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", String)
], PropertyValidator.prototype, "property", void 0);

const RANGE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidator),
    multi: true
};
let RangeValidator = class RangeValidator {
    ngOnInit() {
        this.validator = range(this.range);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeValidator.ɵfac = function RangeValidator_Factory(t) { return new (t || RangeValidator)(); };
RangeValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeValidator, selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]], inputs: { range: "range" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Array)
], RangeValidator.prototype, "range", void 0);

const RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};
let RangeLengthValidator = class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [ɵngcc0.ɵɵProvidersFeature([RANGE_LENGTH_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Array)
], RangeLengthValidator.prototype, "rangeLength", void 0);

const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
let UrlValidator = class UrlValidator {
    validate(c) {
        return url(c);
    }
};
UrlValidator.ɵfac = function UrlValidator_Factory(t) { return new (t || UrlValidator)(); };
UrlValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UrlValidator, selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([URL_VALIDATOR])] });

const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
let UUIDValidator = class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [ɵngcc0.ɵɵProvidersFeature([UUID_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input(),
    __metadata("design:type", Object)
], UUIDValidator.prototype, "uuid", void 0);

const CustomValidators = {
    arrayLength,
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    property,
    range,
    rangeLength,
    url,
    uuid
};
const CustomDirectives = [
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
let CustomFormsModule = class CustomFormsModule {
};
CustomFormsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CustomFormsModule });
CustomFormsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CustomFormsModule_Factory(t) { return new (t || CustomFormsModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ArrayLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], null, { arrayLength: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Base64Validator, [{
        type: Directive,
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CreditCardValidator, [{
        type: Directive,
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateValidator, [{
        type: Directive,
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateISOValidator, [{
        type: Directive,
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DigitsValidator, [{
        type: Directive,
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EmailValidator, [{
        type: Directive,
        args: [{
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualValidator, [{
        type: Directive,
        args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            }]
    }], null, { equal: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EqualToValidator, [{
        type: Directive,
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], null, { equalTo: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanValidator, [{
        type: Directive,
        args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            }]
    }], null, { gt: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GreaterThanEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { gte: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JSONValidator, [{
        type: Directive,
        args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LessThanValidator, [{
        type: Directive,
        args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            }]
    }], null, { lt: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LessThanEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { lte: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxValidator, [{
        type: Directive,
        args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            }]
    }], null, { max: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxDateValidator, [{
        type: Directive,
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], null, { maxDate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinValidator, [{
        type: Directive,
        args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            }]
    }], null, { min: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MinDateValidator, [{
        type: Directive,
        args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            }]
    }], null, { minDate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualValidator, [{
        type: Directive,
        args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            }]
    }], null, { notEqual: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NotEqualToValidator, [{
        type: Directive,
        args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
    }], null, { notEqualTo: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberValidator, [{
        type: Directive,
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PropertyValidator, [{
        type: Directive,
        args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            }]
    }], null, { property: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeValidator, [{
        type: Directive,
        args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            }]
    }], null, { range: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RangeLengthValidator, [{
        type: Directive,
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], null, { rangeLength: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UrlValidator, [{
        type: Directive,
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UUIDValidator, [{
        type: Directive,
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], null, { uuid: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CustomFormsModule, { declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator], exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CustomFormsModule, [{
        type: NgModule,
        args: [{
                declarations: [CustomDirectives],
                exports: [CustomDirectives]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CustomFormsModule, CustomValidators, arrayLength as ɵa, base64 as ɵb, ArrayLengthValidator as ɵba, Base64Validator as ɵbb, CreditCardValidator as ɵbc, DateValidator as ɵbd, DateISOValidator as ɵbe, DigitsValidator as ɵbf, EmailValidator as ɵbg, EqualValidator as ɵbh, EqualToValidator as ɵbi, GreaterThanValidator as ɵbj, GreaterThanEqualValidator as ɵbk, JSONValidator as ɵbl, LessThanValidator as ɵbm, LessThanEqualValidator as ɵbn, MaxValidator as ɵbo, MaxDateValidator as ɵbp, MinValidator as ɵbq, MinDateValidator as ɵbr, NotEqualValidator as ɵbs, NotEqualToValidator as ɵbt, NumberValidator as ɵbu, PropertyValidator as ɵbv, RangeValidator as ɵbw, RangeLengthValidator as ɵbx, UrlValidator as ɵby, UUIDValidator as ɵbz, creditCard as ɵc, date as ɵd, dateISO as ɵe, digits as ɵf, email as ɵg, equal as ɵh, equalTo as ɵi, gt as ɵj, gte as ɵk, json as ɵl, lt as ɵm, lte as ɵn, max as ɵo, maxDate as ɵp, min as ɵq, minDate as ɵr, notEqual as ɵs, notEqualTo as ɵt, number as ɵu, property as ɵv, range as ɵw, rangeLength as ɵx, url as ɵy, uuid as ɵz };

//# sourceMappingURL=ngx-custom-validators.js.map