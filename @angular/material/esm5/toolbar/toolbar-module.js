/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbar, MatToolbarRow } from './toolbar';
import * as ɵngcc0 from '@angular/core';
var MatToolbarModule = /** @class */ (function () {
    function MatToolbarModule() {
    }
MatToolbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatToolbarModule });
MatToolbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatToolbarModule_Factory(t) { return new (t || MatToolbarModule)(); }, imports: [[MatCommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatToolbarModule, { declarations: function () { return [MatToolbar, MatToolbarRow]; }, imports: function () { return [MatCommonModule]; }, exports: function () { return [MatToolbar, MatToolbarRow, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbarModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule],
                exports: [MatToolbar, MatToolbarRow, MatCommonModule],
                declarations: [MatToolbar, MatToolbarRow]
            }]
    }], function () { return []; }, null); })();
    return MatToolbarModule;
}());
export { MatToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFFLGFBQWEsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7QUFHcEQ7QUFFVSxJQUZWO0FBQ2tCLElBSWEsQ0FBQztvREFML0IsUUFBUSxTQUFDO2NBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUMxQixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxzQkFDckQsWUFBWSxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQztRQUMxQzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFxQix1QkFBQztBQUMvQixDQUQrQixBQUxoQyxJQUtnQztBQUNoQyxTQURhLGdCQUFnQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0VG9vbGJhciwgTWF0VG9vbGJhclJvd30gZnJvbSAnLi90b29sYmFyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW01hdFRvb2xiYXIsIE1hdFRvb2xiYXJSb3csIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW01hdFRvb2xiYXIsIE1hdFRvb2xiYXJSb3ddLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRUb29sYmFyTW9kdWxlIHt9XG4iXX0=