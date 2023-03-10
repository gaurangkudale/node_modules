/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepHeader } from './step-header';
import { MatStepLabel } from './step-label';
import { MatHorizontalStepper, MatStep, MatStepper, MatVerticalStepper } from './stepper';
import { MatStepperNext, MatStepperPrevious } from './stepper-button';
import { MatStepperIcon } from './stepper-icon';
import { MAT_STEPPER_INTL_PROVIDER } from './stepper-intl';
import * as ɵngcc0 from '@angular/core';
var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
MatStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatStepperModule });
MatStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); }, providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [[
            MatCommonModule,
            CommonModule,
            PortalModule,
            MatButtonModule,
            CdkStepperModule,
            MatIconModule,
            MatRippleModule,
        ], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatStepperModule, { declarations: function () { return [MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; }, imports: function () { return [MatCommonModule,
        CommonModule,
        PortalModule,
        MatButtonModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule]; }, exports: function () { return [MatCommonModule,
        MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCommonModule,
                    CommonModule,
                    PortalModule,
                    MatButtonModule,
                    CdkStepperModule,
                    MatIconModule,
                    MatRippleModule,
                ],
                exports: [
                    MatCommonModule,
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
            }]
    }], function () { return []; }, null); })();
    return MatStepperModule;
}());
export { MatStepperModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0YsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN4RixPQUFPLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztBQUd6RDtBQUdNLElBSE47QUFFSyxJQWlDMEIsQ0FBQztvREFuQy9CLFFBQVEsU0FBQztjQUNSLE9BQU8sRUFBRSwwQkFDUCxlQUFlLDBCQUNmLFlBQVksMEJBQ1osWUFBWSwwQkFDWixlQUFlLDBCQUNmO2FBQWdCO1VBQ2hCLGFBQWE7dUJBQ2I7WUFBZTtNQUNoQixzQkFDRDtLQUFPLEVBQUU7TUFDUCxlQUFlO2tCQUNmO01BQW9CLDBCQUNwQixrQkFBa0IsMEJBQ2xCLE9BQU8sMEJBQ1AsWUFBWSwwQkFDWixVQUFVO2FBQ1YsY0FBYzs7UUFDZDtJQUFrQjtVQUNsQixhQUFhO3lCQUNiO1dBQWM7V0FDZixzQkFDRCxZQUFZLEVBQUUsMEJBQ1o7aUJBQW9CO3FCQUNwQjtpQkFBa0I7a0JBQ2xCLE9BQU87O0VBQ1AsWUFBWSwwQkFDWixVQUFVLDBCQUNWO2FBQWM7U0FDZCxrQkFBa0I7O1FBQ2xCLGFBQWE7O0tBQ2IsY0FBYztrQkFDZjtZQUNELFNBQVM7QUFBRSxDQUFDLHlCQUF5QixFQUFFO1FBQWlCLENBQUMsbUJBQzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBcUIsdUJBQUM7QUFDL0IsQ0FEK0IsQUFuQ2hDLElBbUNnQztBQUNoQyxTQURhLGdCQUFnQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0Nka1N0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXIsIE1hdENvbW1vbk1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFN0ZXBIZWFkZXJ9IGZyb20gJy4vc3RlcC1oZWFkZXInO1xuaW1wb3J0IHtNYXRTdGVwTGFiZWx9IGZyb20gJy4vc3RlcC1sYWJlbCc7XG5pbXBvcnQge01hdEhvcml6b250YWxTdGVwcGVyLCBNYXRTdGVwLCBNYXRTdGVwcGVyLCBNYXRWZXJ0aWNhbFN0ZXBwZXJ9IGZyb20gJy4vc3RlcHBlcic7XG5pbXBvcnQge01hdFN0ZXBwZXJOZXh0LCBNYXRTdGVwcGVyUHJldmlvdXN9IGZyb20gJy4vc3RlcHBlci1idXR0b24nO1xuaW1wb3J0IHtNYXRTdGVwcGVySWNvbn0gZnJvbSAnLi9zdGVwcGVyLWljb24nO1xuaW1wb3J0IHtNQVRfU1RFUFBFUl9JTlRMX1BST1ZJREVSfSBmcm9tICcuL3N0ZXBwZXItaW50bCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBDZGtTdGVwcGVyTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICAgIE1hdEhvcml6b250YWxTdGVwcGVyLFxuICAgIE1hdFZlcnRpY2FsU3RlcHBlcixcbiAgICBNYXRTdGVwLFxuICAgIE1hdFN0ZXBMYWJlbCxcbiAgICBNYXRTdGVwcGVyLFxuICAgIE1hdFN0ZXBwZXJOZXh0LFxuICAgIE1hdFN0ZXBwZXJQcmV2aW91cyxcbiAgICBNYXRTdGVwSGVhZGVyLFxuICAgIE1hdFN0ZXBwZXJJY29uLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXRIb3Jpem9udGFsU3RlcHBlcixcbiAgICBNYXRWZXJ0aWNhbFN0ZXBwZXIsXG4gICAgTWF0U3RlcCxcbiAgICBNYXRTdGVwTGFiZWwsXG4gICAgTWF0U3RlcHBlcixcbiAgICBNYXRTdGVwcGVyTmV4dCxcbiAgICBNYXRTdGVwcGVyUHJldmlvdXMsXG4gICAgTWF0U3RlcEhlYWRlcixcbiAgICBNYXRTdGVwcGVySWNvbixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTUFUX1NURVBQRVJfSU5UTF9QUk9WSURFUiwgRXJyb3JTdGF0ZU1hdGNoZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTdGVwcGVyTW9kdWxlIHt9XG4iXX0=