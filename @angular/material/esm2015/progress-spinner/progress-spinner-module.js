/**
 * @fileoverview added by tsickle
 * Generated from: src/material/progress-spinner/progress-spinner-module.ts
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
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatProgressSpinner, MatSpinner } from './progress-spinner';
import * as ɵngcc0 from '@angular/core';
export class MatProgressSpinnerModule {
}
MatProgressSpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatProgressSpinnerModule });
MatProgressSpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatProgressSpinnerModule_Factory(t) { return new (t || MatProgressSpinnerModule)(); }, imports: [[MatCommonModule, CommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatProgressSpinnerModule, { declarations: function () { return [MatProgressSpinner,
        MatSpinner]; }, imports: function () { return [MatCommonModule, CommonModule]; }, exports: function () { return [MatProgressSpinner,
        MatSpinner,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule, CommonModule],
                exports: [
                    MatProgressSpinner,
                    MatSpinner,
                    MatCommonModule
                ],
                declarations: [
                    MatProgressSpinner,
                    MatSpinner
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7O0FBZWxFLE1BQU0sT0FBTyx3QkFBd0I7QUFBRztvREFadkMsUUFBUSxTQUFDLGtCQUNSO0NBQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsa0JBQ3hDLE9BQU8sRUFBRSxzQkFDUCxrQkFBa0Isc0JBQ2xCLFVBQVUsc0JBQ1YsZUFBZSxrQkFDaEIsa0JBQ0QsWUFBWSxFQUFFO2VBQ1osa0JBQWtCLHNCQUNsQixVQUFVLGtCQUNYLGVBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc1NwaW5uZXIsIE1hdFNwaW5uZXJ9IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdENvbW1vbk1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lcixcbiAgICBNYXRTcGlubmVyLFxuICAgIE1hdENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXIsXG4gICAgTWF0U3Bpbm5lclxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUge31cbiJdfQ==