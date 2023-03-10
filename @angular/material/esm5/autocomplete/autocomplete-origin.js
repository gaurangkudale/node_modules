/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef } from '@angular/core';
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
import * as ɵngcc0 from '@angular/core';
var MatAutocompleteOrigin = /** @class */ (function () {
    function MatAutocompleteOrigin(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
    /** @nocollapse */
    MatAutocompleteOrigin.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
MatAutocompleteOrigin.ɵfac = function MatAutocompleteOrigin_Factory(t) { return new (t || MatAutocompleteOrigin)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatAutocompleteOrigin.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatAutocompleteOrigin, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatAutocompleteOrigin, [{
        type: Directive,
        args: [{
                selector: '[matAutocompleteOrigin]',
                exportAs: 'matAutocompleteOrigin'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return MatAutocompleteOrigin;
}());
export { MatAutocompleteOrigin };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW9yaWdpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtb3JpZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBRUssSUFHSDtBQUNpQixJQUFiLGtFQUFrRTtBQUN4RSxJQUFhLFVBQW1DO0FBQUksUUFBdkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7QUFBQyxJQUFHLENBQUMsQUFINUM7QUFBQztrQ0FKVCxTQUFTLFNBQUMscERBSXNCO1FBSC9CLFFBQVEsRUFBRSxsQkFLbUMsZ0JBWjVCLFVBQVU7QUFBRztJQU9LLHNCQUNuQyxRQUFRLEVBQUUsdUJBQXVCLG1CQUNsQzs7Ozs7Ozs7MkVBVHdDO0FBQUMsSUFjMUMsNEJBQUM7QUFDQSxDQURBLEFBUkQsSUFRQztBQUNELFNBTGEscUJBQXFCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgYXBwbGllZCB0byBhbiBlbGVtZW50IHRvIG1ha2UgaXQgdXNhYmxlXG4gKiBhcyBhIGNvbm5lY3Rpb24gcG9pbnQgZm9yIGFuIGF1dG9jb21wbGV0ZSBwYW5lbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdEF1dG9jb21wbGV0ZU9yaWdpbl0nLFxuICBleHBvcnRBczogJ21hdEF1dG9jb21wbGV0ZU9yaWdpbicsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEF1dG9jb21wbGV0ZU9yaWdpbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgZGlyZWN0aXZlIGlzIGFwcGxpZWQuICovXG4gICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHsgfVxufVxuIl19