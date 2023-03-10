/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from './moment-date-adapter';
import { MAT_MOMENT_DATE_FORMATS } from './moment-date-formats';
import * as ɵngcc0 from '@angular/core';
export * from './moment-date-adapter';
export * from './moment-date-formats';
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
MomentDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MomentDateModule });
MomentDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MomentDateModule_Factory(t) { return new (t || MomentDateModule)(); }, providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        }
    ] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MomentDateModule, [{
        type: NgModule,
        args: [{
                providers: [
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    }
                ]
            }]
    }], function () { return []; }, null); })();
    return MomentDateModule;
}());
export { MomentDateModule };
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
MatMomentDateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatMomentDateModule });
MatMomentDateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatMomentDateModule_Factory(t) { return new (t || MatMomentDateModule)(); }, providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }], imports: [[MomentDateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatMomentDateModule, { imports: [MomentDateModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMomentDateModule, [{
        type: NgModule,
        args: [{
                imports: [MomentDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0 }]
            }]
    }], function () { return []; }, null); })();
    return MatMomentDateModule;
}());
export { MatMomentDateModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1tb21lbnQtYWRhcHRlci9hZGFwdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLCtCQUErQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDekYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBRTlELGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyx1QkFBdUIsQ0FBQztBQUV0QztBQUdtQixJQUhuQjtBQUVHLElBTzRCLENBQUM7b0RBVC9CLFFBQVEsU0FBQztjQUNSLFNBQVMsRUFBRSwwQkFDVCw4QkFDRSxPQUFPLEVBQUUsV0FBVyw4QkFDcEIsUUFBUSxFQUFFO01BQWlCOzBCQUMzQixJQUFJLEVBQUUsQ0FBQztjQUFlLEVBQUU7TUFBK0IsQ0FBQywwQkFDekQsc0JBQ0Y7S0FDRjs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQXFCLHVCQUFDO0FBRWhDLENBRmdDLEFBVGhDLElBU2dDO0FBQ2hDLFNBRGEsZ0JBQWdCO0FBQzdCLFNBSW9ELHVCQUF1QjtBQUYzRTtBQUVZLElBRlo7QUFDcUIsSUFHYSxDQUFDO3VEQUpsQyxRQUFRLFNBQUM7V0FDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFDM0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUF5QixFQUFDLENBQUMsbUJBQzVFOzs7Ozs7OztnREFDUTtBQUFDLElBQXdCLDBCQUFDO0FBQ2xDLENBRGtDLEFBSm5DLElBSW1DO0FBQ25DLFNBRGEsbUJBQW1CO0FBQ2hDO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLCBNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnLi9tb21lbnQtZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7TUFUX01PTUVOVF9EQVRFX0ZPUk1BVFN9IGZyb20gJy4vbW9tZW50LWRhdGUtZm9ybWF0cyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbW9tZW50LWRhdGUtYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL21vbWVudC1kYXRlLWZvcm1hdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRlTW9kdWxlIHt9XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01vbWVudERhdGVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdE1vbWVudERhdGVNb2R1bGUge31cbiJdfQ==