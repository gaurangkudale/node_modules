/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Stepper data that is required for internationalization. */
import * as ɵngcc0 from '@angular/core';
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MatStepperIntl;
}());
export { MatStepperIntl };
/** @docs-private */
export function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/** @docs-private */
export var MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLWludGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCO0FBRUEsOERBQThEOztBQUM5RDtBQUNnQixJQURoQjtBQUE0QixRQUUxQjtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7QUFDeEQsUUFDRSxtREFBbUQ7QUFDckQsUUFBRSxrQkFBYSxHQUFXLFVBQVUsQ0FBQztBQUNyQyxLQUFDLEFBVFE7a0RBRFIsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQywzRkFDdEI7Ozs7O2dEQUlSO0FBQUMseUJBbEJIO0FBQUUsQ0F1QkQsQUFWRCxJQVVDO0FBQ0QsU0FWYSxjQUFjO0FBWTNCLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsaUNBQWlDLENBQUMsVUFBMEI7QUFDNUUsSUFBRSxPQUFPLFVBQVUsSUFBSSxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUc7QUFDekMsSUFBRSxPQUFPLEVBQUUsY0FBYztBQUN6QixJQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzFELElBQUUsVUFBVSxFQUFFLGlDQUFpQztBQUMvQyxDQUFDLENBQUM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5cbi8qKiBTdGVwcGVyIGRhdGEgdGhhdCBpcyByZXF1aXJlZCBmb3IgaW50ZXJuYXRpb25hbGl6YXRpb24uICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNYXRTdGVwcGVySW50bCB7XG4gIC8qKlxuICAgKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciB0aGUgbGFiZWxzIGhlcmUgYXJlIGNoYW5nZWQuIFVzZSB0aGlzIHRvIG5vdGlmeVxuICAgKiBjb21wb25lbnRzIGlmIHRoZSBsYWJlbHMgaGF2ZSBjaGFuZ2VkIGFmdGVyIGluaXRpYWxpemF0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgY2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIExhYmVsIHRoYXQgaXMgcmVuZGVyZWQgYmVsb3cgb3B0aW9uYWwgc3RlcHMuICovXG4gIG9wdGlvbmFsTGFiZWw6IHN0cmluZyA9ICdPcHRpb25hbCc7XG59XG5cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfU1RFUFBFUl9JTlRMX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50SW50bDogTWF0U3RlcHBlckludGwpIHtcbiAgcmV0dXJuIHBhcmVudEludGwgfHwgbmV3IE1hdFN0ZXBwZXJJbnRsKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX1NURVBQRVJfSU5UTF9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogTWF0U3RlcHBlckludGwsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBNYXRTdGVwcGVySW50bF1dLFxuICB1c2VGYWN0b3J5OiBNQVRfU1RFUFBFUl9JTlRMX1BST1ZJREVSX0ZBQ1RPUllcbn07XG4iXX0=