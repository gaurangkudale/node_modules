/**
 * @fileoverview added by tsickle
 * Generated from: src/material/slide-toggle/slide-toggle-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ObserversModule } from '@angular/cdk/observers';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatSlideToggle } from './slide-toggle';
import { MatSlideToggleRequiredValidator } from './slide-toggle-required-validator';
/**
 * This module is used by both original and MDC-based slide-toggle implementations.
 */
// tslint:disable-next-line:class-name
import * as ɵngcc0 from '@angular/core';
export class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(_MatSlideToggleRequiredValidatorModule, { declarations: function () { return [MatSlideToggleRequiredValidator]; }, exports: function () { return [MatSlideToggleRequiredValidator]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
        type: NgModule,
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
export class MatSlideToggleModule {
}
MatSlideToggleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
            _MatSlideToggleRequiredValidatorModule,
            MatRippleModule,
            MatCommonModule,
            ObserversModule,
        ], _MatSlideToggleRequiredValidatorModule, MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule, MatRippleModule,
        MatCommonModule,
        ObserversModule]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatRippleModule,
                    MatCommonModule,
                    ObserversModule,
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    MatCommonModule
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGO0FBQ0c7QUFBb0Y7QUFLdkYsc0NBQXNDOztBQUN0QyxNQUFNLE9BQU8sc0NBQXNDO0FBQ25EO2tFQU5DLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQztxQkFBK0IsQ0FBQyxrQkFDMUMsWUFBWSxFQUFFLENBQUMsK0JBQStCLENBQUMsZUFDaEQ7Ozs7Ozs7OzBCQUNJO0FBa0JMLE1BQU0sT0FBTyxvQkFBb0I7QUFBRztnREFkbkMsUUFBUSxTQUFDLGtCQUNSO0tBQU8sRUFBRSxzQkFDUCxzQ0FBc0Msc0JBQ3RDLGVBQWUsc0JBQ2YsZUFBZTtBQUNmLGVBQWUsbUJBQ2hCO0FBQ0QsT0FBTyxFQUFFO0VBQ1A7V0FBc0M7SUFDdEMsY0FBYyxzQkFDZCxlQUFlO0NBQ2hCLGtCQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxlQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1yZXF1aXJlZC12YWxpZGF0b3InO1xuXG4vKiogVGhpcyBtb2R1bGUgaXMgdXNlZCBieSBib3RoIG9yaWdpbmFsIGFuZCBNREMtYmFzZWQgc2xpZGUtdG9nZ2xlIGltcGxlbWVudGF0aW9ucy4gKi9cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtNYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvcl0sXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvck1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBfTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvck1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICAgIE9ic2VydmVyc01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIF9NYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlLFxuICAgIE1hdENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRTbGlkZVRvZ2dsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNsaWRlVG9nZ2xlTW9kdWxlIHt9XG4iXX0=