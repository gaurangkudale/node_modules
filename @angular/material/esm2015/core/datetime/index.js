/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { DateAdapter } from './date-adapter';
import { MAT_DATE_FORMATS } from './date-formats';
import { NativeDateAdapter } from './native-date-adapter';
import { MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
import * as ɵngcc0 from '@angular/core';
export { MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter } from './date-adapter';
export { MAT_DATE_FORMATS } from './date-formats';
export { NativeDateAdapter } from './native-date-adapter';
export { MAT_NATIVE_DATE_FORMATS } from './native-date-formats';
export class NativeDateModule {
}
NativeDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NativeDateModule });
NativeDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NativeDateModule_Factory(t) { return new (t || NativeDateModule)(); }, providers: [
        { provide: DateAdapter, useClass: NativeDateAdapter },
    ], imports: [[PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NativeDateModule, { imports: function () { return [PlatformModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NativeDateModule, [{
        type: NgModule,
        args: [{
                imports: [PlatformModule],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ]
            }]
    }], null, null); })();
const ɵ0 = MAT_NATIVE_DATE_FORMATS;
export class MatNativeDateModule {
}
MatNativeDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatNativeDateModule });
MatNativeDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatNativeDateModule_Factory(t) { return new (t || MatNativeDateModule)(); }, providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }], imports: [[NativeDateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatNativeDateModule, { imports: [NativeDateModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatNativeDateModule, [{
        type: NgModule,
        args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }]
            }]
    }], null, null); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL2RhdGV0aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFOUQsZ0dBQWMsZ0JBQWdCLENBQUM7QUFDL0IsaUNBQWMsZ0JBQWdCLENBQUM7QUFDL0Isa0NBQWMsdUJBQXVCLENBQUM7QUFDdEMsd0NBQWMsdUJBQXVCLENBQUM7QUFTdEMsTUFBTSxPQUFPLGdCQUFnQjtBQUFHOzRDQU4vQixRQUFRLFNBQUM7RUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQ3pCLFNBQVMsRUFBRSxzQkFDVCxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDLG1CQUNwRDthQUNGOzs7Ozs7Ozs7OzswQkFDSTtBQUFDLFdBSzhDLHVCQUF1QjtBQUUzRSxNQUFNLE9BQU8sbUJBQW1CO0FBQUc7K0NBSmxDLFFBQVEsU0FBQyxrQkFDUjtNQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFDM0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUF5QixFQUFDLENBQUMsZUFDNUU7Ozs7Ozs7OzBCQUNJO0FBQUM7QUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyfSBmcm9tICcuL2RhdGUtYWRhcHRlcic7XG5pbXBvcnQge01BVF9EQVRFX0ZPUk1BVFN9IGZyb20gJy4vZGF0ZS1mb3JtYXRzJztcbmltcG9ydCB7TmF0aXZlRGF0ZUFkYXB0ZXJ9IGZyb20gJy4vbmF0aXZlLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQge01BVF9OQVRJVkVfREFURV9GT1JNQVRTfSBmcm9tICcuL25hdGl2ZS1kYXRlLWZvcm1hdHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2RhdGUtYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtZm9ybWF0cyc7XG5leHBvcnQgKiBmcm9tICcuL25hdGl2ZS1kYXRlLWFkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRpdmUtZGF0ZS1mb3JtYXRzJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUGxhdGZvcm1Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBOYXRpdmVEYXRlQWRhcHRlcn0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGVNb2R1bGUge31cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlRGF0ZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX05BVElWRV9EQVRFX0ZPUk1BVFN9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0TmF0aXZlRGF0ZU1vZHVsZSB7fVxuIl19