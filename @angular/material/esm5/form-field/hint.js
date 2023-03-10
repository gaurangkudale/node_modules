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
/** Hint text to be shown underneath the form field control. */
var MatHint = /** @class */ (function () {
    function MatHint() {
        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
        this.id = "mat-hint-" + nextUniqueId++;
    }
    MatHint.propDecorators = {
        align: [{ type: Input }],
        id: [{ type: Input }]
    };
MatHint.ɵfac = function MatHint_Factory(t) { return new (t || MatHint)(); };
MatHint.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHint, selectors: [["mat-hint"]], hostAttrs: [1, "mat-hint"], hostVars: 4, hostBindings: function MatHint_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id)("align", null);
        ɵngcc0.ɵɵclassProp("mat-right", ctx.align == "end");
    } }, inputs: { align: "align", id: "id" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHint, [{
        type: Directive,
        args: [{
                selector: 'mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-right]': 'align == "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null'
                }
            }]
    }], function () { return []; }, { align: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();
    return MatHint;
}());
export { MatHint };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2Zvcm0tZmllbGQvaGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRy9DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUdyQiwrREFBK0Q7QUFDL0Q7QUFFTSxJQUZOO0FBQ1EsUUFVTix1RUFBdUU7QUFDekUsUUFBVyxVQUFLLEdBQW9CLE9BQU8sQ0FBQztBQUM1QyxRQUNFLHVGQUF1RjtBQUN6RixRQUFXLE9BQUUsR0FBVyxjQUFZLFlBQVksRUFBSSxDQUFDO0FBQ3JELElBQUEsQ0FBQyxBQU5RO0FBQUM7WUFWVCxTQUFTLFNBQUMsOUJBV08sd0JBQ2YsS0FBSztrQkFYTixRQUFRLEVBQUUsNUJBV0MscUJBR1YsS0FBSztBQUFJO0NBZFUsc0JBQ3BCLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUsVUFBVTt1QkFDbkIsbUJBQW1CLEVBQUUsZ0JBQWdCLDBCQUNyQyxXQUFXLEVBQUUsSUFBSSwwQkFDakI7SUFBcUUseUJBQ3JFLGNBQWMsRUFBRSxNQUFNO2lCQUN2QixrQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1pQjtBQUFDLElBQ25CLGNBQUM7QUFDQSxDQURBLEFBaEJELElBZ0JDO0FBQ0QsU0FQYSxPQUFPO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtaGludCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWhpbnQnLFxuICAgICdbY2xhc3MubWF0LXJpZ2h0XSc6ICdhbGlnbiA9PSBcImVuZFwiJyxcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAvLyBSZW1vdmUgYWxpZ24gYXR0cmlidXRlIHRvIHByZXZlbnQgaXQgZnJvbSBpbnRlcmZlcmluZyB3aXRoIGxheW91dC5cbiAgICAnW2F0dHIuYWxpZ25dJzogJ251bGwnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEhpbnQge1xuICAvKiogV2hldGhlciB0byBhbGlnbiB0aGUgaGludCBsYWJlbCBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBsaW5lLiAqL1xuICBASW5wdXQoKSBhbGlnbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcblxuICAvKiogVW5pcXVlIElEIGZvciB0aGUgaGludC4gVXNlZCBmb3IgdGhlIGFyaWEtZGVzY3JpYmVkYnkgb24gdGhlIGZvcm0gZmllbGQgY29udHJvbC4gKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBtYXQtaGludC0ke25leHRVbmlxdWVJZCsrfWA7XG59XG4iXX0=