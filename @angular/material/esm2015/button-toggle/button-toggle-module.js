/**
 * @fileoverview added by tsickle
 * Generated from: src/material/button-toggle/button-toggle-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggle, MatButtonToggleGroup } from './button-toggle';
import * as ɵngcc0 from '@angular/core';
export class MatButtonToggleModule {
}
MatButtonToggleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatButtonToggleModule });
MatButtonToggleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatButtonToggleModule_Factory(t) { return new (t || MatButtonToggleModule)(); }, imports: [[MatCommonModule, MatRippleModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatButtonToggleModule, { declarations: function () { return [MatButtonToggleGroup, MatButtonToggle]; }, imports: function () { return [MatCommonModule, MatRippleModule]; }, exports: function () { return [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatButtonToggleModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule, MatRippleModule],
                exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle],
                declarations: [MatButtonToggleGroup, MatButtonToggle]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBUXRFLE1BQU0sT0FBTyxxQkFBcUI7QUFBRztpREFMcEMsUUFBUSxTQUFDLGtCQUNSO0lBQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsa0JBQzNDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLENBQUMsa0JBQ2pFLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxlQUN0RDs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlLCBNYXRCdXR0b25Ub2dnbGVHcm91cH0gZnJvbSAnLi9idXR0b24tdG9nZ2xlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlLCBNYXRCdXR0b25Ub2dnbGVHcm91cCwgTWF0QnV0dG9uVG9nZ2xlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0QnV0dG9uVG9nZ2xlR3JvdXAsIE1hdEJ1dHRvblRvZ2dsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB7fVxuIl19