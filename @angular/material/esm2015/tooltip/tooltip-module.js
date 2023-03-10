/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tooltip/tooltip-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatTooltip, TooltipComponent, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, } from './tooltip';
import * as ɵngcc0 from '@angular/core';
export class MatTooltipModule {
}
MatTooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTooltipModule });
MatTooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTooltipModule_Factory(t) { return new (t || MatTooltipModule)(); }, providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            A11yModule,
            CommonModule,
            OverlayModule,
            MatCommonModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTooltipModule, { declarations: function () { return [MatTooltip, TooltipComponent]; }, imports: function () { return [A11yModule,
        CommonModule,
        OverlayModule,
        MatCommonModule]; }, exports: function () { return [MatTooltip, TooltipComponent, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTooltipModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    CommonModule,
                    OverlayModule,
                    MatCommonModule,
                ],
                exports: [MatTooltip, TooltipComponent, MatCommonModule],
                declarations: [MatTooltip, TooltipComponent],
                entryComponents: [TooltipComponent],
                providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLDRDQUE0QyxHQUM3QyxNQUFNLFdBQVcsQ0FBQzs7QUFjbkIsTUFBTSxPQUFPLGdCQUFnQjtBQUFHOzRDQVovQixRQUFRLFNBQUM7RUFDUixPQUFPLEVBQUUsc0JBQ1AsVUFBVSxzQkFDVixZQUFZLHNCQUNaLGFBQWEsc0JBQ2IsZUFBZSxtQkFDaEIsa0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFO2NBQWdCLEVBQUU7T0FBZSxDQUFDO0FBQ3hELFlBQVksRUFBRSxDQUFDLFVBQVU7QUFBRSxnQkFBZ0IsQ0FBQztNQUM1QyxlQUFlLEVBQUUsQ0FBQztRQUFnQixDQUFDLGtCQUNuQyxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQyxjQUMxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1xuICBNYXRUb29sdGlwLFxuICBUb29sdGlwQ29tcG9uZW50LFxuICBNQVRfVE9PTFRJUF9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUixcbn0gZnJvbSAnLi90b29sdGlwJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEExMXlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbTWF0VG9vbHRpcCwgVG9vbHRpcENvbXBvbmVudCwgTWF0Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTWF0VG9vbHRpcCwgVG9vbHRpcENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Rvb2x0aXBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtNQVRfVE9PTFRJUF9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgTWF0VG9vbHRpcE1vZHVsZSB7fVxuIl19