/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatRadioButton, MatRadioGroup } from './radio';
import * as ɵngcc0 from '@angular/core';
var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
MatRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatRadioModule });
MatRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatRadioModule_Factory(t) { return new (t || MatRadioModule)(); }, imports: [[CommonModule, MatRippleModule, MatCommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatRadioModule, { declarations: function () { return [MatRadioGroup, MatRadioButton]; }, imports: function () { return [CommonModule, MatRippleModule, MatCommonModule]; }, exports: function () { return [MatRadioGroup, MatRadioButton, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatRippleModule, MatCommonModule],
                exports: [MatRadioGroup, MatRadioButton, MatCommonModule],
                declarations: [MatRadioGroup, MatRadioButton]
            }]
    }], function () { return []; }, null); })();
    return MatRadioModule;
}());
export { MatRadioModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvcmFkaW8vcmFkaW8tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxjQUFjLEVBQUUsYUFBYSxFQUFDLE1BQU0sU0FBUyxDQUFDOztBQUd0RDtBQUNzQyxJQUR0QztBQUNnQixJQUlhLENBQUM7a0RBTDdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxzQkFDekQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsc0JBQ3pELFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRTtJQUFjLENBQUMsbUJBQzlDOzs7Ozs7OztnREFDUTtBQUFDLElBQW1CLHFCQUFDO0FBQzdCLENBRDZCLEFBTDlCLElBSzhCO0FBQzlCLFNBRGEsY0FBYztBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGUsIE1hdFJpcHBsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFJhZGlvQnV0dG9uLCBNYXRSYWRpb0dyb3VwfSBmcm9tICcuL3JhZGlvJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRSYWRpb0dyb3VwLCBNYXRSYWRpb0J1dHRvbiwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0UmFkaW9Hcm91cCwgTWF0UmFkaW9CdXR0b25dLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRSYWRpb01vZHVsZSB7fVxuIl19