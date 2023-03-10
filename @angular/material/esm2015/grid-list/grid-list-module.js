/**
 * @fileoverview added by tsickle
 * Generated from: src/material/grid-list/grid-list-module.ts
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
import { MatLineModule, MatCommonModule } from '@angular/material/core';
import { MatGridTile, MatGridTileText, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridAvatarCssMatStyler } from './grid-tile';
import { MatGridList } from './grid-list';
import * as ɵngcc0 from '@angular/core';
export class MatGridListModule {
}
MatGridListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatGridListModule });
MatGridListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); }, imports: [[MatLineModule, MatCommonModule], MatLineModule,
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatGridListModule, { declarations: function () { return [MatGridList,
        MatGridTile,
        MatGridTileText,
        MatGridTileHeaderCssMatStyler,
        MatGridTileFooterCssMatStyler,
        MatGridAvatarCssMatStyler]; }, imports: function () { return [MatLineModule, MatCommonModule]; }, exports: function () { return [MatGridList,
        MatGridTile,
        MatGridTileText,
        MatLineModule,
        MatCommonModule,
        MatGridTileHeaderCssMatStyler,
        MatGridTileFooterCssMatStyler,
        MatGridAvatarCssMatStyler]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridListModule, [{
        type: NgModule,
        args: [{
                imports: [MatLineModule, MatCommonModule],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatLineModule,
                    MatCommonModule,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsV0FBVyxFQUFFLGVBQWUsRUFBRSw2QkFBNkIsRUFDM0QsNkJBQTZCLEVBQUUseUJBQXlCLEVBQ3pELE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7O0FBd0J4QyxNQUFNLE9BQU8saUJBQWlCO0FBQUc7NkNBckJoQyxRQUFRLFNBQUM7Q0FDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLGtCQUN6QyxPQUFPLEVBQUUsc0JBQ1AsV0FBVyxzQkFDWCxXQUFXLHNCQUNYLGVBQWUsc0JBQ2Y7TUFBYSxzQkFDYjtjQUFlLHNCQUNmLDZCQUE2QixzQkFDN0IsNkJBQTZCLHNCQUM3QjtDQUF5QixrQkFDMUI7Z0JBQ0Q7R0FBWSxFQUFFLHNCQUNaLFdBQVc7cUJBQ1gsV0FBVztlQUNYLGVBQWUsc0JBQ2YsNkJBQTZCLHNCQUM3Qiw2QkFBNkI7SUFDN0I7UUFBeUI7Q0FDMUIsZUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMaW5lTW9kdWxlLCBNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0R3JpZFRpbGUsIE1hdEdyaWRUaWxlVGV4dCwgTWF0R3JpZFRpbGVGb290ZXJDc3NNYXRTdHlsZXIsXG4gIE1hdEdyaWRUaWxlSGVhZGVyQ3NzTWF0U3R5bGVyLCBNYXRHcmlkQXZhdGFyQ3NzTWF0U3R5bGVyXG59IGZyb20gJy4vZ3JpZC10aWxlJztcbmltcG9ydCB7TWF0R3JpZExpc3R9IGZyb20gJy4vZ3JpZC1saXN0JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0TGluZU1vZHVsZSwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE1hdEdyaWRMaXN0LFxuICAgIE1hdEdyaWRUaWxlLFxuICAgIE1hdEdyaWRUaWxlVGV4dCxcbiAgICBNYXRMaW5lTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXRHcmlkVGlsZUhlYWRlckNzc01hdFN0eWxlcixcbiAgICBNYXRHcmlkVGlsZUZvb3RlckNzc01hdFN0eWxlcixcbiAgICBNYXRHcmlkQXZhdGFyQ3NzTWF0U3R5bGVyXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdEdyaWRMaXN0LFxuICAgIE1hdEdyaWRUaWxlLFxuICAgIE1hdEdyaWRUaWxlVGV4dCxcbiAgICBNYXRHcmlkVGlsZUhlYWRlckNzc01hdFN0eWxlcixcbiAgICBNYXRHcmlkVGlsZUZvb3RlckNzc01hdFN0eWxlcixcbiAgICBNYXRHcmlkQXZhdGFyQ3NzTWF0U3R5bGVyXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdEdyaWRMaXN0TW9kdWxlIHt9XG4iXX0=