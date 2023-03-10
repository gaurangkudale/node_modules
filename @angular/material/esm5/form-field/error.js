/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var nextUniqueId = 0;
/** Single error message to be shown underneath the form field. */
var MatError = /** @class */ (function () {
    function MatError() {
        this.id = "mat-error-" + nextUniqueId++;
    }
    MatError.propDecorators = {
        id: [{ type: Input }]
    };
MatError.ɵfac = function MatError_Factory(t) { return new (t || MatError)(); };
MatError.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatError, selectors: [["mat-error"]], hostAttrs: ["role", "alert", 1, "mat-error"], hostVars: 1, hostBindings: function MatError_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id);
    } }, inputs: { id: "id" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatError, [{
        type: Directive,
        args: [{
                selector: 'mat-error',
                host: {
                    'class': 'mat-error',
                    'role': 'alert',
                    '[attr.id]': 'id'
                }
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }] }); })();
    return MatError;
}());
export { MatError };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFHL0MsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBR3JCLGtFQUFrRTtBQUNsRTtBQUVNLElBRk47QUFDUyxRQVFFLE9BQUUsR0FBVyxlQUFhLFlBQVksRUFBSSxDQUFDO0FBQ3RELElBQUEsQ0FBQyxBQUZRO0FBQUM7WUFSVCxTQUFTLHJCQVNRLHFCQUFmLEtBQUs7QUFURyxBQVNDO2VBUlYsUUFBUSxFQUFFLFdBQVcsc0JBQ3JCLElBQUksRUFBRTtVQUNKLE9BQU8sRUFBRSxXQUFXLDBCQUNwQixNQUFNLEVBQUUsT0FBTywwQkFDZixXQUFXLEVBQUUsSUFBSSx1QkFDbEIsa0JBQ0Y7Ozs7Ozs7Ozs7Ozs7OztvQkFFaUI7QUFBQyxJQUNuQixlQUFDO0FBQ0EsQ0FEQSxBQVZELElBVUM7QUFDRCxTQUhhLFFBQVE7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuXG4vKiogU2luZ2xlIGVycm9yIG1lc3NhZ2UgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZm9ybSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1lcnJvcicsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWVycm9yJyxcbiAgICAncm9sZSc6ICdhbGVydCcsXG4gICAgJ1thdHRyLmlkXSc6ICdpZCcsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0RXJyb3Ige1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gYG1hdC1lcnJvci0ke25leHRVbmlxdWVJZCsrfWA7XG59XG4iXX0=