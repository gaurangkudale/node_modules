/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var CdkStepHeader = /** @class */ (function () {
    function CdkStepHeader(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    CdkStepHeader.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    /** @nocollapse */
    CdkStepHeader.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkStepHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepHeader, [{
        type: Directive,
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return CdkStepHeader;
}());
export { CdkStepHeader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBSXBEO0FBRUssSUFLSCx1QkFBc0IsV0FBb0M7QUFBSSxRQUF4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxJQUFFLENBQUM7QUFDaEUsSUFDRSwrQkFBK0I7QUFDakMsSUFBRSw2QkFBSyxHQUFMO0FBQ0UsUUFBQSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQyxJQUFFLENBQUMsQ0FOTTtBQUFDOzBCQU5ULFNBQVMsU0FBQyw1Q0FNc0I7UUFML0IsUUFBUSxFQUFFLGxCQU11QixnQkFYaEIsVUFBVTtNQUtBLE5BTEc7a0JBTTlCLElBQUksRUFBRSwwQkFDSixNQUFNLEVBQUUsS0FBSyx1QkFDZCxtQkFDRjs7Ozs7Ozs7OzsyRUFUd0M7QUFBQyxJQWlCMUMsb0JBQUM7QUFDQSxDQURBLEFBYkQsSUFhQztBQUNELFNBUmEsYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1N0ZXBIZWFkZXJdJyxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ3RhYicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka1N0ZXBIZWFkZXIgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7fVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBzdGVwIGhlYWRlci4gKi9cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==