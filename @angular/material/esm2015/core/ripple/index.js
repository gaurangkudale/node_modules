/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/ripple/index.ts
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
import { PlatformModule } from '@angular/cdk/platform';
import { MatCommonModule } from '../common-behaviors/common-module';
import { MatRipple } from './ripple';
import * as ɵngcc0 from '@angular/core';
export { MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple } from './ripple';
export { RippleState, RippleRef } from './ripple-ref';
export { defaultRippleAnimationConfig, RippleRenderer } from './ripple-renderer';
export class MatRippleModule {
}
MatRippleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatRippleModule });
MatRippleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatRippleModule_Factory(t) { return new (t || MatRippleModule)(); }, imports: [[MatCommonModule, PlatformModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatRippleModule, { declarations: function () { return [MatRipple]; }, imports: function () { return [MatCommonModule, PlatformModule]; }, exports: function () { return [MatRipple, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRippleModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule, PlatformModule],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL3JpcHBsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQzs7QUFFbkMscURBQWMsVUFBVSxDQUFDO0FBQ3pCLHVDQUFjLGNBQWMsQ0FBQztBQUM3Qiw2REFBYyxtQkFBbUIsQ0FBQztBQU9sQyxNQUFNLE9BQU8sZUFBZTtBQUFHOzJDQUw5QixRQUFRLFNBQUM7R0FDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLGtCQUMxQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLGtCQUNyQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsZUFDMUI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQbGF0Zm9ybU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlfSBmcm9tICcuLi9jb21tb24tYmVoYXZpb3JzL2NvbW1vbi1tb2R1bGUnO1xuaW1wb3J0IHtNYXRSaXBwbGV9IGZyb20gJy4vcmlwcGxlJztcblxuZXhwb3J0ICogZnJvbSAnLi9yaXBwbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yaXBwbGUtcmVmJztcbmV4cG9ydCAqIGZyb20gJy4vcmlwcGxlLXJlbmRlcmVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdENvbW1vbk1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdLFxuICBleHBvcnRzOiBbTWF0UmlwcGxlLCBNYXRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRSaXBwbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRSaXBwbGVNb2R1bGUge31cbiJdfQ==