import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { number } from './validator';
import * as ɵngcc0 from '@angular/core';
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberValidator, [{
        type: Directive,
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], null, null); })();
export { NumberValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvbnVtYmVyL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVyQyxNQUFNLGdCQUFnQixHQUFRO0FBQzlCLElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztBQUNoRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBTUYsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtBQUFHLElBQzdCLFFBQVEsQ0FBQyxDQUFrQjtBQUFJLFFBQzdCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQUpZLGVBQWUsNEJBSjNCLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTt1Q0FBbUUsVUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFDOUIsQ0FBQyxJQUNXLGVBQWUsQ0FJM0I7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQUxZLGVBQWU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG51bWJlciB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgTlVNQkVSX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdW1iZXJWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW251bWJlcl1bZm9ybUNvbnRyb2xOYW1lXSxbbnVtYmVyXVtmb3JtQ29udHJvbF0sW251bWJlcl1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtOVU1CRVJfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIG51bWJlcihjKTtcbiAgfVxufVxuIl19