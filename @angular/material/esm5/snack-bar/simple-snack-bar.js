/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBarRef } from './snack-bar-ref';
import { MAT_SNACK_BAR_DATA } from './snack-bar-config';
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/button';

function SimpleSnackBar_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "button", 2);
    ɵngcc0.ɵɵlistener("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.action(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.data.action);
} }
var SimpleSnackBar = /** @class */ (function () {
    function SimpleSnackBar(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    /** Performs the action on the snack bar. */
    SimpleSnackBar.prototype.action = function () {
        this.snackBarRef.dismissWithAction();
    };
    Object.defineProperty(SimpleSnackBar.prototype, "hasAction", {
        /** If the action button should be shown. */
        get: function () {
            return !!this.data.action;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    SimpleSnackBar.ctorParameters = function () { return [
        { type: MatSnackBarRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) { return new (t || SimpleSnackBar)(ɵngcc0.ɵɵdirectiveInject(MatSnackBarRef), ɵngcc0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
SimpleSnackBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SimpleSnackBar, selectors: [["simple-snack-bar"]], hostAttrs: [1, "mat-simple-snackbar"], decls: 3, vars: 2, consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]], template: function SimpleSnackBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.data.message);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasAction);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatButton], styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SimpleSnackBar, [{
        type: Component,
        args: [{
                selector: 'simple-snack-bar',
                template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-simple-snackbar'
                },
                styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatSnackBarRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
    return SimpleSnackBar;
}());
export { SimpleSnackBar };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNuYWNrLWJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NuYWNrLWJhci9zaW1wbGUtc25hY2stYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFHdEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0g7QUFFSyxJQVlILHdCQUNTLFdBQTJDLEVBQ3RCLElBQVM7QUFDekMsUUFGVyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0M7QUFBQyxRQUVuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFFLENBQUM7QUFDSCxJQUNFLDRDQUE0QztBQUM5QyxJQUFFLCtCQUFNLEdBQU47QUFBYyxRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFFSCxJQUNFLHNCQUFJLHFDQUFTO0FBQUksUUFEakIsNENBQTRDO0FBQzlDLGFBQUU7QUFBYyxZQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlCLFFBQUUsQ0FBQztBQUNGO0FBQ3dCO0FBQTJCLE9BRmpELEFBbEJLO0FBQUM7MkJBVlIsU0FBUyxTQUFDLDdDQVdUO1FBVkEsUUFBUSxFQUFFLGxCQVdILGdCQXBCRCxjQUFjO0VBU1Esc0JBQzVCLHhCQVZ3QixnREF3QnJCLE1BQU0sU0FBQyxrQkFBa0I7QUFBUTs2R0FkQSxzQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7TUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sc0JBQy9DLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUscUJBQXFCLHVCQUMvQjs7OzttRUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRQztBQUFDLElBWUgscUJBQUM7QUFDQSxDQURBLEFBN0JELElBNkJDO0FBQ0QsU0FwQmEsY0FBYztBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTbmFja0JhclJlZn0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcbmltcG9ydCB7TUFUX1NOQUNLX0JBUl9EQVRBfSBmcm9tICcuL3NuYWNrLWJhci1jb25maWcnO1xuXG5cbi8qKlxuICogQSBjb21wb25lbnQgdXNlZCB0byBvcGVuIGFzIHRoZSBkZWZhdWx0IHNuYWNrIGJhciwgbWF0Y2hpbmcgbWF0ZXJpYWwgc3BlYy5cbiAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBzbmFjayBiYXIgc2VydmljZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLXNuYWNrLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnc2ltcGxlLXNuYWNrLWJhci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpbXBsZS1zbmFjay1iYXIuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1zaW1wbGUtc25hY2tiYXInLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNuYWNrQmFyIHtcbiAgLyoqIERhdGEgdGhhdCB3YXMgaW5qZWN0ZWQgaW50byB0aGUgc25hY2sgYmFyLiAqL1xuICBkYXRhOiB7bWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZ307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNuYWNrQmFyUmVmOiBNYXRTbmFja0JhclJlZjxTaW1wbGVTbmFja0Jhcj4sXG4gICAgQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICAvKiogUGVyZm9ybXMgdGhlIGFjdGlvbiBvbiB0aGUgc25hY2sgYmFyLiAqL1xuICBhY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zbmFja0JhclJlZi5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICB9XG5cbiAgLyoqIElmIHRoZSBhY3Rpb24gYnV0dG9uIHNob3VsZCBiZSBzaG93bi4gKi9cbiAgZ2V0IGhhc0FjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmRhdGEuYWN0aW9uO1xuICB9XG59XG4iXX0=