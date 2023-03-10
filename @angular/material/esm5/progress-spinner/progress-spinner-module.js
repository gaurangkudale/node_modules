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
import { MatProgressSpinner, MatSpinner } from './progress-spinner';
import * as ɵngcc0 from '@angular/core';
var MatProgressSpinnerModule = /** @class */ (function () {
    function MatProgressSpinnerModule() {
    }
MatProgressSpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatProgressSpinnerModule });
MatProgressSpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatProgressSpinnerModule_Factory(t) { return new (t || MatProgressSpinnerModule)(); }, imports: [[MatCommonModule, CommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatProgressSpinnerModule, { declarations: function () { return [MatProgressSpinner,
        MatSpinner]; }, imports: function () { return [MatCommonModule, CommonModule]; }, exports: function () { return [MatProgressSpinner,
        MatSpinner,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule, CommonModule],
                exports: [
                    MatProgressSpinner,
                    MatSpinner,
                    MatCommonModule
                ],
                declarations: [
                    MatProgressSpinner,
                    MatSpinner
                ]
            }]
    }], function () { return []; }, null); })();
    return MatProgressSpinnerModule;
}());
export { MatProgressSpinnerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUdsRTtBQUVJLElBRko7QUFDMEIsSUFXYSxDQUFDOzREQVp2QyxRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLHNCQUN4QyxPQUFPLEVBQUUsMEJBQ1Asa0JBQWtCLDBCQUNsQixVQUFVLDBCQUNWLGVBQWUsc0JBQ2hCO2VBQ0QsWUFBWSxFQUFFLDBCQUNaLGtCQUFrQiwwQkFDbEIsVUFBVSxzQkFDWCxtQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBNkIsK0JBQUM7QUFDdkMsQ0FEdUMsQUFaeEMsSUFZd0M7QUFDeEMsU0FEYSx3QkFBd0I7QUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lciwgTWF0U3Bpbm5lcn0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyLFxuICAgIE1hdFNwaW5uZXIsXG4gICAgTWF0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lcixcbiAgICBNYXRTcGlubmVyXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB7fVxuIl19