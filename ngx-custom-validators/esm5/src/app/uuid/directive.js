import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { uuid } from './validator';
import * as ɵngcc0 from '@angular/core';
var UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return UUIDValidator; }),
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UUIDValidator.prototype, "uuid", void 0);
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [ɵngcc0.ɵɵProvidersFeature([UUID_VALIDATOR]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UUIDValidator, [{
        type: Directive,
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], function () { return []; }, { uuid: [{
            type: Input
        }] }); })();
    return UUIDValidator;
}());
export { UUIDValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvdXVpZC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVuQyxJQUFNLGNBQWMsR0FBUTtBQUM1QixJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsQ0FBQztBQUM5QyxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUY7QUFBaUQsSUFBakQ7QUFBMkIsSUE0QjNCLENBQUM7QUFDRCxJQXZCRSxnQ0FBUSxHQUFSO0FBQ0QsUUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBRUgsSUFBRSxtQ0FBVyxHQUFYLFVBQVksT0FBc0I7QUFDcEMsUUFBSSxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUMvQixZQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtBQUMxQixnQkFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekQsZ0JBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLG9CQUFVLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxnQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBRUgsSUFBRSxpREFBeUIsR0FBekIsVUFBMEIsRUFBYztBQUFJLFFBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNGLElBM0JVO0FBRUcsUUFGWCxLQUFLLEVBQUU7QUFBRTtBQUdGLCtDQUhNO0lBREgsYUFBYSxnQ0FKekIsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFO2lEQUE2RCxjQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFDNUIsQ0FBQyxRQUNXLGFBQWEsQ0E0QnpCOzs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELG9CQUFDO0FBQ0EsQ0FEQSxBQTVCRCxJQTRCQztBQUNELFNBN0JhLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IFVVSURfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVVSURWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3V1aWRdW2Zvcm1Db250cm9sTmFtZV0sW3V1aWRdW2Zvcm1Db250cm9sXSxbdXVpZF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtVVUlEX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgVVVJRFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB1dWlkO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IHV1aWQodGhpcy51dWlkKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAndXVpZCcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSB1dWlkKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=