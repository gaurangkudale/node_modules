import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { url } from './validator';
import * as ɵngcc0 from '@angular/core';
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UrlValidator, [{
        type: Directive,
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], null, null); })();
export { UrlValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWN1c3RvbS12YWxpZGF0b3JzL3NyYy9hcHAvdXJsL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVsQyxNQUFNLGFBQWEsR0FBUTtBQUMzQixJQUFFLE9BQU8sRUFBRSxhQUFhO0FBQ3hCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7QUFDN0MsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQU1GLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7QUFBRyxJQUMxQixRQUFRLENBQUMsQ0FBa0I7QUFBSSxRQUM3QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixJQUFFLENBQUM7QUFDSCxDQUFDLENBQUE7QUFKWSxZQUFZLDRCQUp4QixTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7b0NBQTBELFVBQ3BFLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUMzQixDQUFDLElBQ1csWUFBWSxDQUl4Qjs7Ozs7OzswQkFDRDtBQUFDLFNBTFksWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdXJsIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBVUkxfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVybFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXJsXVtmb3JtQ29udHJvbE5hbWVdLFt1cmxdW2Zvcm1Db250cm9sXSxbdXJsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1VSTF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIFVybFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdXJsKGMpO1xuICB9XG59XG4iXX0=