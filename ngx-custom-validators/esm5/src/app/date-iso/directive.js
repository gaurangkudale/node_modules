import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { dateISO } from './validator';
import * as ɵngcc0 from '@angular/core';
var DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return DateISOValidator; }),
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
        type: Directive,
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], function () { return []; }, null); })();
    return DateISOValidator;
}());
export { DateISOValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvZGF0ZS1pc28vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXRDLElBQU0sa0JBQWtCLEdBQVE7QUFDaEMsSUFBRSxPQUFPLEVBQUUsYUFBYTtBQUN4QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0FBQ2pELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFNRjtBQUFvRCxJQUFwRDtBQUE4QixJQUk5QixDQUFDO0FBQ0QsSUFKRSxtQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixJQUFFLENBQUM7SUFIVSxnQkFBZ0IsZ0NBSjVCLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRTtvREFBc0UsY0FDaEYsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFDaEMsQ0FBQyxRQUNXLGdCQUFnQixDQUk1Qjs7Ozs7OztnREFDRDtBQUFDLElBREQsdUJBQUM7QUFDQSxDQURBLEFBSkQsSUFJQztBQUNELFNBTGEsZ0JBQWdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkYXRlSVNPIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBEQVRFX0lTT19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZUlTT1ZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGF0ZUlTT11bZm9ybUNvbnRyb2xOYW1lXSxbZGF0ZUlTT11bZm9ybUNvbnRyb2xdLFtkYXRlSVNPXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0RBVEVfSVNPX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUlTT1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gZGF0ZUlTTyhjKTtcbiAgfVxufVxuIl19