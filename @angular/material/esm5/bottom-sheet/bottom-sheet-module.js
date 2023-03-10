/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatBottomSheetContainer } from './bottom-sheet-container';
import * as ɵngcc0 from '@angular/core';
var MatBottomSheetModule = /** @class */ (function () {
    function MatBottomSheetModule() {
    }
MatBottomSheetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatBottomSheetModule });
MatBottomSheetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatBottomSheetModule_Factory(t) { return new (t || MatBottomSheetModule)(); }, imports: [[
            CommonModule,
            OverlayModule,
            MatCommonModule,
            PortalModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatBottomSheetModule, { declarations: function () { return [MatBottomSheetContainer]; }, imports: function () { return [CommonModule,
        OverlayModule,
        MatCommonModule,
        PortalModule]; }, exports: function () { return [MatBottomSheetContainer, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBottomSheetModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatCommonModule,
                    PortalModule,
                ],
                exports: [MatBottomSheetContainer, MatCommonModule],
                declarations: [MatBottomSheetContainer],
                entryComponents: [MatBottomSheetContainer]
            }]
    }], function () { return []; }, null); })();
    return MatBottomSheetModule;
}());
export { MatBottomSheetModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHakU7QUFHYSxJQUhiO0FBRVMsSUFTMEIsQ0FBQzt3REFYbkMsUUFBUSxTQUFDO1VBQ1IsT0FBTyxFQUFFLDBCQUNQLFlBQVksMEJBQ1osYUFBYSwwQkFDYixlQUFlO0FBQ2YsWUFBWTtTQUNiO0lBQ0QsT0FBTyxFQUFFLENBQUM7UUFBdUIsRUFBRSxlQUFlO0FBQUMsc0JBQ25EO0VBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDLHNCQUN2QyxlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBeUIsMkJBQUM7QUFDbkMsQ0FEbUMsQUFYcEMsSUFXb0M7QUFDcEMsU0FEYSxvQkFBb0I7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldENvbnRhaW5lcn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtY29udGFpbmVyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW01hdEJvdHRvbVNoZWV0Q29udGFpbmVyLCBNYXRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRCb3R0b21TaGVldENvbnRhaW5lcl0sXG4gIGVudHJ5Q29tcG9uZW50czogW01hdEJvdHRvbVNoZWV0Q29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Qm90dG9tU2hlZXRNb2R1bGUge31cbiJdfQ==