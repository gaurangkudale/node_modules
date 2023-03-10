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
var MatButtonToggleModule = /** @class */ (function () {
    function MatButtonToggleModule() {
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
    }], function () { return []; }, null); })();
    return MatButtonToggleModule;
}());
export { MatButtonToggleModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUd0RTtBQUM2QyxJQUQ3QztBQUN1QixJQUlhLENBQUM7eURBTHBDLFFBQVEsU0FBQztTQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsc0JBQzNDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLENBQUMsc0JBQ2pFLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztZQUN0RDs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUEwQiw0QkFBQztBQUNwQyxDQURvQyxBQUxyQyxJQUtxQztBQUNyQyxTQURhLHFCQUFxQjtBQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGUsIE1hdEJ1dHRvblRvZ2dsZUdyb3VwfSBmcm9tICcuL2J1dHRvbi10b2dnbGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRDb21tb25Nb2R1bGUsIE1hdEJ1dHRvblRvZ2dsZUdyb3VwLCBNYXRCdXR0b25Ub2dnbGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRCdXR0b25Ub2dnbGVHcm91cCwgTWF0QnV0dG9uVG9nZ2xlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIHt9XG4iXX0=