/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Error state matcher that matches when a control is invalid and dirty. */
import * as ɵngcc0 from '@angular/core';
var ShowOnDirtyErrorStateMatcher = /** @class */ (function () {
    function ShowOnDirtyErrorStateMatcher() {
    }
    ShowOnDirtyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    };
ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) { return new (t || ShowOnDirtyErrorStateMatcher)(); };
ShowOnDirtyErrorStateMatcher.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ShowOnDirtyErrorStateMatcher, factory: function (t) { return ShowOnDirtyErrorStateMatcher.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ShowOnDirtyErrorStateMatcher, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return ShowOnDirtyErrorStateMatcher;
}());
export { ShowOnDirtyErrorStateMatcher };
/** Provider that defines how form controls behave with regards to displaying error messages. */
var ErrorStateMatcher = /** @class */ (function () {
    function ErrorStateMatcher() {
    }
    ErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    };
    ErrorStateMatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) { return new (t || ErrorStateMatcher)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorStateMatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return ErrorStateMatcher;
}());
export { ErrorStateMatcher };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Itb3B0aW9ucy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NvcmUvZXJyb3IvZXJyb3Itb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QztBQUVBLDRFQUE0RTs7QUFDNUU7QUFDa0QsSUFEbEQ7QUFDNEIsSUFJNUIsQ0FBQztBQUNELElBSkUsbURBQVksR0FBWixVQUFhLE9BQTJCLEVBQUUsSUFBd0M7QUFBSSxRQUNwRixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLElBQUUsQ0FBQztnRUFKRixVQUFVOzs7O2dEQUNMO0FBQUMsSUFJUCxtQ0FBQztBQUVELENBRkMsQUFMRCxJQUtDO0FBQ0QsU0FMYSw0QkFBNEI7QUFNekMsZ0dBQWdHO0FBQ2hHO0FBQ21CLElBRG5CO0FBQStCLEtBSzlCO0FBQ0QsSUFKRSx3Q0FBWSxHQUFaLFVBQWEsT0FBMkIsRUFBRSxJQUF3QztBQUFJLFFBQ3BGLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0YsSUFBRSxDQUFDLENBSE07cURBRFIsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyw5RkFDdEI7Ozs7O2dEQUV1RDtBQUFDLDRCQXZCbEU7QUFBRSxDQXlCRCxBQUxELElBS0M7QUFDRCxTQUxhLGlCQUFpQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEVycm9yIHN0YXRlIG1hdGNoZXIgdGhhdCBtYXRjaGVzIHdoZW4gYSBjb250cm9sIGlzIGludmFsaWQgYW5kIGRpcnR5LiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgKGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQpKSk7XG4gIH1cbn1cblxuLyoqIFByb3ZpZGVyIHRoYXQgZGVmaW5lcyBob3cgZm9ybSBjb250cm9scyBiZWhhdmUgd2l0aCByZWdhcmRzIHRvIGRpc3BsYXlpbmcgZXJyb3IgbWVzc2FnZXMuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wudG91Y2hlZCB8fCAoZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZCkpKTtcbiAgfVxufVxuIl19