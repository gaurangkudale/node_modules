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
var MatGridListModule = /** @class */ (function () {
    function MatGridListModule() {
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
    }], function () { return []; }, null); })();
    return MatGridListModule;
}());
export { MatGridListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUNMLFdBQVcsRUFBRSxlQUFlLEVBQUUsNkJBQTZCLEVBQzNELDZCQUE2QixFQUFFLHlCQUF5QixFQUN6RCxNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDOztBQUd4QztBQUN5QyxJQUR6QztBQUNtQixJQW9CYSxDQUFDO3FEQXJCaEMsUUFBUSxTQUFDO2FBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxzQkFDekMsT0FBTyxFQUFFLDBCQUNQLFdBQVcsMEJBQ1gsV0FBVywwQkFDWCxlQUFlO3lCQUNmO1NBQWEsMEJBQ2IsZUFBZSwwQkFDZiw2QkFBNkIsMEJBQzdCLDZCQUE2Qjs7R0FDN0I7R0FBeUIsc0JBQzFCO1FBQ0QsWUFBWSxFQUFFO1NBQ1osV0FBVywwQkFDWCxXQUFXLDBCQUNYLGVBQWUsMEJBQ2Y7R0FBNkI7UUFDN0I7WUFBNkI7ZUFDN0I7ZUFBeUIsc0JBQzFCO2lCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBc0Isd0JBQUM7QUFDaEMsQ0FEZ0MsQUFyQmpDLElBcUJpQztBQUNqQyxTQURhLGlCQUFpQjtBQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TGluZU1vZHVsZSwgTWF0Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7XG4gIE1hdEdyaWRUaWxlLCBNYXRHcmlkVGlsZVRleHQsIE1hdEdyaWRUaWxlRm9vdGVyQ3NzTWF0U3R5bGVyLFxuICBNYXRHcmlkVGlsZUhlYWRlckNzc01hdFN0eWxlciwgTWF0R3JpZEF2YXRhckNzc01hdFN0eWxlclxufSBmcm9tICcuL2dyaWQtdGlsZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0fSBmcm9tICcuL2dyaWQtbGlzdCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdExpbmVNb2R1bGUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRHcmlkTGlzdCxcbiAgICBNYXRHcmlkVGlsZSxcbiAgICBNYXRHcmlkVGlsZVRleHQsXG4gICAgTWF0TGluZU1vZHVsZSxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgTWF0R3JpZFRpbGVIZWFkZXJDc3NNYXRTdHlsZXIsXG4gICAgTWF0R3JpZFRpbGVGb290ZXJDc3NNYXRTdHlsZXIsXG4gICAgTWF0R3JpZEF2YXRhckNzc01hdFN0eWxlclxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRHcmlkTGlzdCxcbiAgICBNYXRHcmlkVGlsZSxcbiAgICBNYXRHcmlkVGlsZVRleHQsXG4gICAgTWF0R3JpZFRpbGVIZWFkZXJDc3NNYXRTdHlsZXIsXG4gICAgTWF0R3JpZFRpbGVGb290ZXJDc3NNYXRTdHlsZXIsXG4gICAgTWF0R3JpZEF2YXRhckNzc01hdFN0eWxlclxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRHcmlkTGlzdE1vZHVsZSB7fVxuIl19