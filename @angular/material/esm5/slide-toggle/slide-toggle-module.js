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
/** This module is used by both original and MDC-based slide-toggle implementations. */
import * as ɵngcc0 from '@angular/core';
var _MatSlideToggleRequiredValidatorModule = /** @class */ (function () {
    function _MatSlideToggleRequiredValidatorModule() {
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
    }], function () { return []; }, null); })();
    return _MatSlideToggleRequiredValidatorModule;
}());
export { _MatSlideToggleRequiredValidatorModule };
var MatSlideToggleModule = /** @class */ (function () {
    function MatSlideToggleModule() {
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
    }], function () { return []; }, null); })();
    return MatSlideToggleModule;
}());
export { MatSlideToggleModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRix1RkFBdUY7O0FBQ3ZGO0FBRWdCLElBRmhCO0FBQ3dDLElBS3hDLENBQUM7MEVBTkEsUUFBUSxTQUFDLHNCQUNSLE9BQU87Q0FBRSxDQUFDLCtCQUErQixDQUFDLHNCQUMxQyxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxtQkFDaEQ7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFFViw2Q0FBQztBQUVELENBRkMsQUFORCxJQU1DO0FBQ0QsU0FGYSxzQ0FBc0M7QUFHbkQ7QUFFK0IsSUFGL0I7QUFFUyxJQVkwQixDQUFDO3dEQWRuQyxRQUFRLFNBQUM7VUFDUixPQUFPLEVBQUUsMEJBQ1Asc0NBQXNDLDBCQUN0QyxlQUFlLDBCQUNmO0VBQWUsMEJBQ2YsZUFBZTtjQUNoQjtPQUNELE9BQU8sRUFBRTthQUNQO3NCQUFzQywwQkFDdEMsY0FBYztnQkFDZCxlQUFlLHNCQUNoQixzQkFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQXlCLDJCQUFDO0FBQ25DLENBRG1DLEFBZHBDLElBY29DO0FBQ3BDLFNBRGEsb0JBQW9CO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2ZXJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlUmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLXJlcXVpcmVkLXZhbGlkYXRvcic7XG5cbi8qKiBUaGlzIG1vZHVsZSBpcyB1c2VkIGJ5IGJvdGggb3JpZ2luYWwgYW5kIE1EQy1iYXNlZCBzbGlkZS10b2dnbGUgaW1wbGVtZW50YXRpb25zLiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW01hdFNsaWRlVG9nZ2xlUmVxdWlyZWRWYWxpZGF0b3JdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yXSxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9NYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlIHtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIF9NYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgT2JzZXJ2ZXJzTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgX01hdFNsaWRlVG9nZ2xlUmVxdWlyZWRWYWxpZGF0b3JNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01hdFNsaWRlVG9nZ2xlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2xpZGVUb2dnbGVNb2R1bGUge31cbiJdfQ==