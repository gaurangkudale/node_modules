/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from './drawer';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from './sidenav';
import * as ɵngcc0 from '@angular/core';
var MatSidenavModule = /** @class */ (function () {
    function MatSidenavModule() {
    }
MatSidenavModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatSidenavModule });
MatSidenavModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatSidenavModule_Factory(t) { return new (t || MatSidenavModule)(); }, imports: [[
            CommonModule,
            MatCommonModule,
            ScrollingModule,
            PlatformModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatSidenavModule, { declarations: function () { return [MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent]; }, imports: function () { return [CommonModule,
        MatCommonModule,
        ScrollingModule,
        PlatformModule]; }, exports: function () { return [MatCommonModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSidenavModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCommonModule,
                    ScrollingModule,
                    PlatformModule,
                ],
                exports: [
                    MatCommonModule,
                    MatDrawer,
                    MatDrawerContainer,
                    MatDrawerContent,
                    MatSidenav,
                    MatSidenavContainer,
                    MatSidenavContent,
                ],
                declarations: [
                    MatDrawer,
                    MatDrawerContainer,
                    MatDrawerContent,
                    MatSidenav,
                    MatSidenavContainer,
                    MatSidenavContent,
                ]
            }]
    }], function () { return []; }, null); })();
    return MatSidenavModule;
}());
export { MatSidenavModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBRzdFO0FBR1MsSUFIVDtBQUVLLElBdUIwQixDQUFDO29EQXpCL0IsUUFBUSxTQUFDO2NBQ1IsT0FBTyxFQUFFLDBCQUNQLFlBQVksMEJBQ1osZUFBZSwwQkFDZixlQUFlO2tCQUNmO01BQWM7QUFDZixzQkFDRDtBQUFPLEVBQUU7QUFDUCxlQUFlO1NBQ2YsU0FBUywwQkFDVCxrQkFBa0IsMEJBQ2xCLGdCQUFnQiwwQkFDaEIsVUFBVTtPQUNWLG1CQUFtQjt3QkFDbkI7ZUFBaUI7a0JBQ2xCO1dBQ0QsWUFBWSxFQUFFLDBCQUNaLFNBQVM7VUFDVDtHQUFrQjtJQUNsQixnQkFBZ0IsMEJBQ2hCLFVBQVU7TUFDVjtNQUFtQjtJQUNuQixpQkFBaUI7a0JBQ2xCO2lCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQXFCLHVCQUFDO0FBQy9CLENBRCtCLEFBekJoQyxJQXlCZ0M7QUFDaEMsU0FEYSxnQkFBZ0I7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lciwgTWF0RHJhd2VyQ29udGVudH0gZnJvbSAnLi9kcmF3ZXInO1xuaW1wb3J0IHtNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyLCBNYXRTaWRlbmF2Q29udGVudH0gZnJvbSAnLi9zaWRlbmF2JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBTY3JvbGxpbmdNb2R1bGUsXG4gICAgUGxhdGZvcm1Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgTWF0RHJhd2VyLFxuICAgIE1hdERyYXdlckNvbnRhaW5lcixcbiAgICBNYXREcmF3ZXJDb250ZW50LFxuICAgIE1hdFNpZGVuYXYsXG4gICAgTWF0U2lkZW5hdkNvbnRhaW5lcixcbiAgICBNYXRTaWRlbmF2Q29udGVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWF0RHJhd2VyLFxuICAgIE1hdERyYXdlckNvbnRhaW5lcixcbiAgICBNYXREcmF3ZXJDb250ZW50LFxuICAgIE1hdFNpZGVuYXYsXG4gICAgTWF0U2lkZW5hdkNvbnRhaW5lcixcbiAgICBNYXRTaWRlbmF2Q29udGVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2lkZW5hdk1vZHVsZSB7fVxuIl19