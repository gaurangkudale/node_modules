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
import { MatProgressBar } from './progress-bar';
import * as ɵngcc0 from '@angular/core';
var MatProgressBarModule = /** @class */ (function () {
    function MatProgressBarModule() {
    }
MatProgressBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatProgressBarModule });
MatProgressBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatProgressBarModule_Factory(t) { return new (t || MatProgressBarModule)(); }, imports: [[CommonModule, MatCommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatProgressBarModule, { declarations: function () { return [MatProgressBar]; }, imports: function () { return [CommonModule, MatCommonModule]; }, exports: function () { return [MatProgressBar, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatProgressBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatCommonModule],
                exports: [MatProgressBar, MatCommonModule],
                declarations: [MatProgressBar]
            }]
    }], function () { return []; }, null); })();
    return MatProgressBarModule;
}());
export { MatProgressBarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztBQUc5QztBQUVBLElBRkE7QUFDc0IsSUFJYSxDQUFDO3dEQUxuQyxRQUFRLFNBQUM7VUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLHNCQUN4QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLHNCQUMxQyxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQy9COzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUF5QiwyQkFBQztBQUNuQyxDQURtQyxBQUxwQyxJQUtvQztBQUNwQyxTQURhLG9CQUFvQjtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhcn0gZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRQcm9ncmVzc0JhciwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0UHJvZ3Jlc3NCYXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB7fVxuIl19