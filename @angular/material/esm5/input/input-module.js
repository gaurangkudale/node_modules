/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTextareaAutosize } from './autosize';
import { MatInput } from './input';
import * as ɵngcc0 from '@angular/core';
var MatInputModule = /** @class */ (function () {
    function MatInputModule() {
    }
MatInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatInputModule });
MatInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatInputModule_Factory(t) { return new (t || MatInputModule)(); }, providers: [ErrorStateMatcher], imports: [[
            CommonModule,
            TextFieldModule,
            MatFormFieldModule,
        ], TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        MatFormFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatInputModule, { declarations: function () { return [MatInput, MatTextareaAutosize]; }, imports: function () { return [CommonModule,
        TextFieldModule,
        MatFormFieldModule]; }, exports: function () { return [TextFieldModule,
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        MatFormFieldModule,
        MatInput,
        MatTextareaAutosize]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatInputModule, [{
        type: NgModule,
        args: [{
                declarations: [MatInput, MatTextareaAutosize],
                imports: [
                    CommonModule,
                    TextFieldModule,
                    MatFormFieldModule,
                ],
                exports: [
                    TextFieldModule,
                    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                    // be used together with `MatFormField`.
                    MatFormFieldModule,
                    MatInput,
                    MatTextareaAutosize,
                ],
                providers: [ErrorStateMatcher]
            }]
    }], function () { return []; }, null); })();
    return MatInputModule;
}());
export { MatInputModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7O0FBRWpDO0FBQ3NDLElBRHRDO0FBQ2dCLElBZ0JhLENBQUM7a0RBakI3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLHNCQUM3QyxPQUFPLEVBQUUsMEJBQ1AsWUFBWSwwQkFDWixlQUFlO29CQUNmO1lBQWtCO01BQ25CLHNCQUNEO0dBQU8sRUFBRTtHQUNQLGVBQWUsMEJBQ2Y7bUNBQTRFO1dBQzVFO21CQUF3Qyx5QkFDeEMsa0JBQWtCLDBCQUNsQixRQUFRLDBCQUNSLG1CQUFtQix1QkFDcEIsc0JBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBbUIscUJBQUM7QUFDN0IsQ0FENkIsQUFqQjlCLElBaUI4QjtBQUM5QixTQURhLGNBQWM7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUZXh0RmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0VGV4dGFyZWFBdXRvc2l6ZX0gZnJvbSAnLi9hdXRvc2l6ZSc7XG5pbXBvcnQge01hdElucHV0fSBmcm9tICcuL2lucHV0JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWF0SW5wdXQsIE1hdFRleHRhcmVhQXV0b3NpemVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRleHRGaWVsZE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgLy8gV2UgcmUtZXhwb3J0IHRoZSBgTWF0Rm9ybUZpZWxkTW9kdWxlYCBzaW5jZSBgTWF0SW5wdXRgIHdpbGwgYWxtb3N0IGFsd2F5c1xuICAgIC8vIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBgTWF0Rm9ybUZpZWxkYC5cbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXQsXG4gICAgTWF0VGV4dGFyZWFBdXRvc2l6ZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbRXJyb3JTdGF0ZU1hdGNoZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRJbnB1dE1vZHVsZSB7fVxuIl19