"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var ɵngcc0 = require('@angular/core');
var MAX_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = (function () {
    function MaxDateValidator() {
    }
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = _1.maxDate(this.maxDate);
    };
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = _1.maxDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_DATE_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxDateValidator, [{
        type: core_1.Directive,
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], function () { return []; }, { maxDate: [{
            type: core_1.Input
        }] }); })();
    return MaxDateValidator;
}());
/** @nocollapse */
MaxDateValidator.ctorParameters = function () { return []; };
MaxDateValidator.propDecorators = {
    'maxDate': [{ type: core_1.Input },],
};
exports.MaxDateValidator = MaxDateValidator;

//# sourceMappingURL=directive.js.map