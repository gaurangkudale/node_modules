/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, Directive, } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { MatCommonModule } from '../common-behaviors/common-module';
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
import * as ɵngcc0 from '@angular/core';
var MatLine = /** @class */ (function () {
    function MatLine() {
    }
MatLine.ɵfac = function MatLine_Factory(t) { return new (t || MatLine)(); };
MatLine.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatLine, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatLine, [{
        type: Directive,
        args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            }]
    }], function () { return []; }, null); })();
    return MatLine;
}());
export { MatLine };
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
export function setLines(lines, element) {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(startWith(lines)).subscribe(function (_a) {
        var length = _a.length;
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);
        if (length === 2 || length === 3) {
            setClass(element, "mat-" + length + "-line", true);
        }
        else if (length > 3) {
            setClass(element, "mat-multi-line", true);
        }
    });
}
/** Adds or removes a class from an element. */
function setClass(element, className, isAdd) {
    var classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 * @deprecated Use `setLines` instead.
 * @breaking-change 8.0.0
 */
var MatLineSetter = /** @class */ (function () {
    function MatLineSetter(lines, element) {
        setLines(lines, element);
    }
    return MatLineSetter;
}());
export { MatLineSetter };
var MatLineModule = /** @class */ (function () {
    function MatLineModule() {
    }
MatLineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatLineModule });
MatLineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatLineModule_Factory(t) { return new (t || MatLineModule)(); }, imports: [[MatCommonModule], MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatLineModule, { declarations: function () { return [MatLine]; }, imports: function () { return [MatCommonModule]; }, exports: function () { return [MatLine, MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatLineModule, [{
        type: NgModule,
        args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine]
            }]
    }], function () { return []; }, null); })();
    return MatLineModule;
}());
export { MatLineModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NvcmUvbGluZS9saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBR2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSDtBQUM4QixJQUQ5QjtBQUNRLElBR2MsQ0FBQzsyQ0FKdEIsU0FBUyxTQUFDO01BQ1QsUUFBUSxFQUFFLHVCQUF1QixzQkFDakMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxrQkFDNUI7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFZLGNBQUM7QUFFdkIsQ0FGdUIsQUFKdkIsSUFJdUI7QUFDdkIsU0FEYSxPQUFPO0FBRXBCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQXlCLEVBQUUsT0FBZ0M7QUFDcEYsSUFBRSx1REFBdUQ7QUFDekQsSUFBRSx3REFBd0Q7QUFDMUQsSUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFRO0FBQUksWUFBWCxrQkFBTTtBQUFFLFFBQ3ZELFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLFFBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsUUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFFBQ0ksSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDdEMsWUFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQU8sTUFBTSxVQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEQsU0FBSztBQUFDLGFBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLFlBQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxTQUFLO0FBQ0wsSUFBRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCwrQ0FBK0M7QUFDL0MsU0FBUyxRQUFRLENBQUMsT0FBZ0MsRUFBRSxTQUFpQixFQUFFLEtBQWM7QUFBSSxJQUN2RixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUNwRCxJQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNvQixJQUFsQix1QkFBWSxLQUF5QixFQUFFLE9BQWdDO0FBQ3pFLFFBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUFBLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFDRDtBQUNBO0FBRU8sSUFGUDtBQUNlLElBSWMsQ0FBQztpREFMN0IsUUFBUSxTQUFDO2lCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFDMUIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxzQkFDbkMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLG1CQUN4Qjs7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBbUIsb0JBQUM7QUFDN0IsQ0FENkIsQUFMOUIsSUFLOEI7QUFDOUIsU0FEYSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7c3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01hdENvbW1vbk1vZHVsZX0gZnJvbSAnLi4vY29tbW9uLWJlaGF2aW9ycy9jb21tb24tbW9kdWxlJztcblxuXG4vKipcbiAqIFNoYXJlZCBkaXJlY3RpdmUgdG8gY291bnQgbGluZXMgaW5zaWRlIGEgdGV4dCBhcmVhLCBzdWNoIGFzIGEgbGlzdCBpdGVtLlxuICogTGluZSBlbGVtZW50cyBjYW4gYmUgZXh0cmFjdGVkIHdpdGggYSBAQ29udGVudENoaWxkcmVuKE1hdExpbmUpIHF1ZXJ5LCB0aGVuXG4gKiBjb3VudGVkIGJ5IGNoZWNraW5nIHRoZSBxdWVyeSBsaXN0J3MgbGVuZ3RoLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0LWxpbmVdLCBbbWF0TGluZV0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1saW5lJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0TGluZSB7fVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHRha2VzIGEgcXVlcnkgbGlzdCBvZiBsaW5lcyBhbmQgc2V0cyB0aGUgY29ycmVjdCBjbGFzcyBvbiB0aGUgaG9zdC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExpbmVzKGxpbmVzOiBRdWVyeUxpc3Q8TWF0TGluZT4sIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gIC8vIE5vdGU6IGRvZXNuJ3QgbmVlZCB0byB1bnN1YnNjcmliZSwgYmVjYXVzZSBgY2hhbmdlc2BcbiAgLy8gZ2V0cyBjb21wbGV0ZWQgYnkgQW5ndWxhciB3aGVuIHRoZSB2aWV3IGlzIGRlc3Ryb3llZC5cbiAgbGluZXMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChsaW5lcykpLnN1YnNjcmliZSgoe2xlbmd0aH0pID0+IHtcbiAgICBzZXRDbGFzcyhlbGVtZW50LCAnbWF0LTItbGluZScsIGZhbHNlKTtcbiAgICBzZXRDbGFzcyhlbGVtZW50LCAnbWF0LTMtbGluZScsIGZhbHNlKTtcbiAgICBzZXRDbGFzcyhlbGVtZW50LCAnbWF0LW11bHRpLWxpbmUnLCBmYWxzZSk7XG5cbiAgICBpZiAobGVuZ3RoID09PSAyIHx8IGxlbmd0aCA9PT0gMykge1xuICAgICAgc2V0Q2xhc3MoZWxlbWVudCwgYG1hdC0ke2xlbmd0aH0tbGluZWAsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAobGVuZ3RoID4gMykge1xuICAgICAgc2V0Q2xhc3MoZWxlbWVudCwgYG1hdC1tdWx0aS1saW5lYCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIGZyb20gYW4gZWxlbWVudC4gKi9cbmZ1bmN0aW9uIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBjbGFzc05hbWU6IHN0cmluZywgaXNBZGQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgaXNBZGQgPyBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogSGVscGVyIHRoYXQgdGFrZXMgYSBxdWVyeSBsaXN0IG9mIGxpbmVzIGFuZCBzZXRzIHRoZSBjb3JyZWN0IGNsYXNzIG9uIHRoZSBob3N0LlxuICogQGRvY3MtcHJpdmF0ZVxuICogQGRlcHJlY2F0ZWQgVXNlIGBzZXRMaW5lc2AgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdExpbmVTZXR0ZXIge1xuICBjb25zdHJ1Y3RvcihsaW5lczogUXVlcnlMaXN0PE1hdExpbmU+LCBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHNldExpbmVzKGxpbmVzLCBlbGVtZW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW01hdExpbmUsIE1hdENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW01hdExpbmVdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRMaW5lTW9kdWxlIHsgfVxuIl19