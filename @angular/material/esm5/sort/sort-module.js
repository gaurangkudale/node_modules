/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatSortHeader } from './sort-header';
import { MatSort } from './sort';
import { MAT_SORT_HEADER_INTL_PROVIDER } from './sort-header-intl';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
var MatSortModule = /** @class */ (function () {
    function MatSortModule() {
    }
MatSortModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSortModule });
MatSortModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSortModule_Factory(t) { return new (t || MatSortModule)(); }, providers: [MAT_SORT_HEADER_INTL_PROVIDER], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSortModule, { declarations: function () { return [MatSort, MatSortHeader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [MatSort, MatSortHeader]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSortModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [MatSort, MatSortHeader],
                declarations: [MatSort, MatSortHeader],
                providers: [MAT_SORT_HEADER_INTL_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return MatSortModule;
}());
export { MatSortModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zb3J0L3NvcnQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRzdDO0FBRVUsSUFGVjtBQUNlLElBS2EsQ0FBQztpREFONUIsUUFBUSxTQUFDO2lCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxzQkFDdkIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxzQkFDakMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxzQkFDdEMsU0FBUyxFQUFFLENBQUM7Y0FBNkIsQ0FBQyxrQkFDM0M7Ozs7Ozs7OztnREFDUTtBQUFDLElBQWtCLG9CQUFDO0FBQzVCLENBRDRCLEFBTjdCLElBTTZCO0FBQzdCLFNBRGEsYUFBYTtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydEhlYWRlcn0gZnJvbSAnLi9zb3J0LWhlYWRlcic7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQge01BVF9TT1JUX0hFQURFUl9JTlRMX1BST1ZJREVSfSBmcm9tICcuL3NvcnQtaGVhZGVyLWludGwnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRTb3J0LCBNYXRTb3J0SGVhZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0U29ydCwgTWF0U29ydEhlYWRlcl0sXG4gIHByb3ZpZGVyczogW01BVF9TT1JUX0hFQURFUl9JTlRMX1BST1ZJREVSXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRTb3J0TW9kdWxlIHt9XG4iXX0=