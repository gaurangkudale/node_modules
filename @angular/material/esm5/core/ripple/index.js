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
export * from './ripple';
export * from './ripple-ref';
export * from './ripple-renderer';
var MatRippleModule = /** @class */ (function () {
    function MatRippleModule() {
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
    }], function () { return []; }, null); })();
    return MatRippleModule;
}());
export { MatRippleModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL3JpcHBsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7O0FBRW5DLGNBQWMsVUFBVSxDQUFDO0FBQ3pCLGNBQWMsY0FBYyxDQUFDO0FBQzdCLGNBQWMsbUJBQW1CLENBQUM7QUFFbEM7QUFDdUMsSUFEdkM7QUFDaUIsSUFJYSxDQUFDO21EQUw5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLHNCQUMxQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLHNCQUNyQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQzFCOzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixzQkFBQztBQUM5QixDQUQ4QixBQUwvQixJQUsrQjtBQUMvQixTQURhLGVBQWU7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJy4uL2NvbW1vbi1iZWhhdmlvcnMvY29tbW9uLW1vZHVsZSc7XG5pbXBvcnQge01hdFJpcHBsZX0gZnJvbSAnLi9yaXBwbGUnO1xuXG5leHBvcnQgKiBmcm9tICcuL3JpcHBsZSc7XG5leHBvcnQgKiBmcm9tICcuL3JpcHBsZS1yZWYnO1xuZXhwb3J0ICogZnJvbSAnLi9yaXBwbGUtcmVuZGVyZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNYXRSaXBwbGUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW01hdFJpcHBsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFJpcHBsZU1vZHVsZSB7fVxuIl19