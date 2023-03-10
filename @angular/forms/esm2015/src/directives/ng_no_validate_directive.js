/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive } from '@angular/core';
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
import * as ɵngcc0 from '@angular/core';
export class ɵNgNoValidate {
}
ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) { return new (t || ɵNgNoValidate)(); };
ɵNgNoValidate.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ɵNgNoValidate, selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]], hostAttrs: ["novalidate", ""] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ɵNgNoValidate, [{
        type: Directive,
        args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' }
            }]
    }], null, null); })();
export { ɵNgNoValidate as NgNoValidate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbm9fdmFsaWRhdGVfZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUtILE1BQU0sT0FBTyxhQUFhO0FBQzFCO3lDQUxDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7c0NBQThDLGtCQUN4RCxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUUsRUFBRSxFQUFDLGVBQ3pCOzs7Ozs7OzBCQUNJO0FBR0wsT0FBTyxFQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUMsQ0FBQztBQUN2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQWRkcyBgbm92YWxpZGF0ZWAgYXR0cmlidXRlIHRvIGFsbCBmb3JtcyBieSBkZWZhdWx0LlxuICpcbiAqIGBub3ZhbGlkYXRlYCBpcyB1c2VkIHRvIGRpc2FibGUgYnJvd3NlcidzIG5hdGl2ZSBmb3JtIHZhbGlkYXRpb24uXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIG5hdGl2ZSB2YWxpZGF0aW9uIHdpdGggQW5ndWxhciBmb3JtcywganVzdCBhZGQgYG5nTmF0aXZlVmFsaWRhdGVgIGF0dHJpYnV0ZTpcbiAqXG4gKiBgYGBcbiAqIDxmb3JtIG5nTmF0aXZlVmFsaWRhdGU+PC9mb3JtPlxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICogQG5nTW9kdWxlIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAqIEBuZ01vZHVsZSBGb3Jtc01vZHVsZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW25nTmF0aXZlVmFsaWRhdGVdKScsXG4gIGhvc3Q6IHsnbm92YWxpZGF0ZSc6ICcnfSxcbn0pXG5leHBvcnQgY2xhc3MgybVOZ05vVmFsaWRhdGUge1xufVxuXG5leHBvcnQge8m1TmdOb1ZhbGlkYXRlIGFzIE5nTm9WYWxpZGF0ZX07XG4iXX0=