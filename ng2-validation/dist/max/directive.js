"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var _1 = require("./");
var ɵngcc0 = require('@angular/core');
var MAX_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxValidator; }),
    multi: true
};
var MaxValidator = (function () {
    function MaxValidator() {
    }
    MaxValidator.prototype.ngOnInit = function () {
        this.validator = _1.max(this.max);
    };
    MaxValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'max') {
                this.validator = _1.max(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
MaxValidator.ɵfac = function MaxValidator_Factory(t) { return new (t || MaxValidator)(); };
MaxValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MaxValidator, selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]], inputs: { max: "max" }, features: [ɵngcc0.ɵɵProvidersFeature([MAX_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaxValidator, [{
        type: core_1.Directive,
        args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            }]
    }], function () { return []; }, { max: [{
            type: core_1.Input
        }] }); })();
    return MaxValidator;
}());
/** @nocollapse */
MaxValidator.ctorParameters = function () { return []; };
MaxValidator.propDecorators = {
    'max': [{ type: core_1.Input },],
};
exports.MaxValidator = MaxValidator;

//# sourceMappingURL=directive.js.map