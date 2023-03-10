/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { _MatMenu } from './menu';
import { MatMenuContent } from './menu-content';
import { MatMenuItem } from './menu-item';
import { MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER, MatMenuTrigger } from './menu-trigger';
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
import * as ɵngcc0 from '@angular/core';
var _MatMenuDirectivesModule = /** @class */ (function () {
    function _MatMenuDirectivesModule() {
    }
_MatMenuDirectivesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: _MatMenuDirectivesModule });
_MatMenuDirectivesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function _MatMenuDirectivesModule_Factory(t) { return new (t || _MatMenuDirectivesModule)(); }, providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(_MatMenuDirectivesModule, { declarations: function () { return [MatMenuTrigger,
        MatMenuContent]; }, exports: function () { return [MatMenuTrigger, MatMenuContent, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatMenuDirectivesModule, [{
        type: NgModule,
        args: [{
                exports: [MatMenuTrigger, MatMenuContent, MatCommonModule],
                declarations: [
                    MatMenuTrigger,
                    MatMenuContent,
                ],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return _MatMenuDirectivesModule;
}());
export { _MatMenuDirectivesModule };
var MatMenuModule = /** @class */ (function () {
    function MatMenuModule() {
    }
MatMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatMenuModule });
MatMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatMenuModule_Factory(t) { return new (t || MatMenuModule)(); }, providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            CommonModule,
            MatCommonModule,
            MatRippleModule,
            OverlayModule,
            _MatMenuDirectivesModule,
        ], _MatMenuDirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatMenuModule, { declarations: function () { return [_MatMenu, MatMenuItem]; }, imports: function () { return [CommonModule,
        MatCommonModule,
        MatRippleModule,
        OverlayModule, _MatMenuDirectivesModule]; }, exports: function () { return [_MatMenu, MatMenuItem, _MatMenuDirectivesModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCommonModule,
                    MatRippleModule,
                    OverlayModule,
                    _MatMenuDirectivesModule,
                ],
                exports: [_MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                declarations: [_MatMenu, MatMenuItem],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return MatMenuModule;
}());
export { MatMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9tZW51L21lbnUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx5Q0FBeUMsRUFBRSxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBQ2dELElBRGhEO0FBQzBCLElBUWEsQ0FBQzs0REFUdkMsUUFBUSxTQUFDO01BQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsc0JBQzFELFlBQVksRUFBRSwwQkFDWixjQUFjLDBCQUNkLGNBQWMsdUJBQ2Ysc0JBQ0QsU0FBUyxFQUFFLENBQUM7NEJBQXlDLENBQUMsa0JBQ3ZEOzs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUM2QiwrQkFBQztBQUV4QyxDQUZ3QyxBQVR4QyxJQVN3QztBQUN4QyxTQURhLHdCQUF3QjtBQUVyQztBQUdNLElBSE47QUFFRSxJQVUwQixDQUFDO2lEQVo1QixRQUFRLFNBQUM7aUJBQ1IsT0FBTyxFQUFFLDBCQUNQLFlBQVksMEJBQ1osZUFBZSwwQkFDZixlQUFlLDBCQUNmLGFBQWE7YUFDYjtXQUF3QjtLQUN6QixzQkFDRDtLQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7RUFBVyxFQUFFLHdCQUF3QixDQUFDO2FBQzFELFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUFXLENBQUMsc0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDLGtCQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBa0Isb0JBQUM7QUFDNUIsQ0FENEIsQUFaN0IsSUFZNkI7QUFDN0IsU0FEYSxhQUFhO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtfTWF0TWVudX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7TWF0TWVudUNvbnRlbnR9IGZyb20gJy4vbWVudS1jb250ZW50JztcbmltcG9ydCB7TWF0TWVudUl0ZW19IGZyb20gJy4vbWVudS1pdGVtJztcbmltcG9ydCB7TUFUX01FTlVfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIsIE1hdE1lbnVUcmlnZ2VyfSBmcm9tICcuL21lbnUtdHJpZ2dlcic7XG5cbi8qKlxuICogVXNlZCBieSBib3RoIHRoZSBjdXJyZW50IGBNYXRNZW51TW9kdWxlYCBhbmQgdGhlIE1EQyBgTWF0TWVudU1vZHVsZWBcbiAqIHRvIGRlY2xhcmUgdGhlIG1lbnUtcmVsYXRlZCBkaXJlY3RpdmVzLlxuICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTWF0TWVudVRyaWdnZXIsIE1hdE1lbnVDb250ZW50LCBNYXRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRNZW51VHJpZ2dlcixcbiAgICBNYXRNZW51Q29udGVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTUFUX01FTlVfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVJdXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfTWF0TWVudURpcmVjdGl2ZXNNb2R1bGUge31cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgX01hdE1lbnVEaXJlY3RpdmVzTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbX01hdE1lbnUsIE1hdE1lbnVJdGVtLCBfTWF0TWVudURpcmVjdGl2ZXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtfTWF0TWVudSwgTWF0TWVudUl0ZW1dLFxuICBwcm92aWRlcnM6IFtNQVRfTUVOVV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgTWF0TWVudU1vZHVsZSB7fVxuIl19