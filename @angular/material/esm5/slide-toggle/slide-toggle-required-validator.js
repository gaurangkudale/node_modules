/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Directive, forwardRef, } from '@angular/core';
import { CheckboxRequiredValidator, NG_VALIDATORS, } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MatSlideToggleRequiredValidator; }),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
var MatSlideToggleRequiredValidator = /** @class */ (function (_super) {
    __extends(MatSlideToggleRequiredValidator, _super);
    function MatSlideToggleRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [ɵngcc0.ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatSlideToggleRequiredValidator_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatSlideToggleRequiredValidator);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSlideToggleRequiredValidator, [{
        type: Directive,
        args: [{
                selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();
    return MatSlideToggleRequiredValidator;
}(CheckboxRequiredValidator));
export { MatSlideToggleRequiredValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLXJlcXVpcmVkLXZhbGlkYXRvci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtcmVxdWlyZWQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXhCLE1BQU0sQ0FBQyxJQUFNLG1DQUFtQyxHQUFhO0FBQzdELElBQUUsT0FBTyxFQUFFLGFBQWE7QUFDeEIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwrQkFBK0IsRUFBL0IsQ0FBK0IsQ0FBQztBQUNoRSxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFRSxJQUdtRCxtREFBeUI7QUFBQyxJQUwvRTtBQUNnQztBQUNlLElBR2lDLENBQUM7bUVBTGhGLFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUU7bUVBQzhFLHNCQUN4RixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxtQkFDakQ7Ozs7Ozs7OzBCQUNRO0FBQUMsSUFBc0Usc0NBQUM7QUFDaEYsQ0FEZ0YsQUFMakYsQ0FLcUQseUJBQXlCLEdBQUc7QUFDakYsU0FEYSwrQkFBK0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIFByb3ZpZGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsXG4gIE5HX1ZBTElEQVRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IE1BVF9TTElERV9UT0dHTEVfUkVRVUlSRURfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIFZhbGlkYXRvciBmb3IgTWF0ZXJpYWwgc2xpZGUtdG9nZ2xlIGNvbXBvbmVudHMgd2l0aCB0aGUgcmVxdWlyZWQgYXR0cmlidXRlIGluIGFcbiAqIHRlbXBsYXRlLWRyaXZlbiBmb3JtLiBUaGUgZGVmYXVsdCB2YWxpZGF0b3IgZm9yIHJlcXVpcmVkIGZvcm0gY29udHJvbHMgYXNzZXJ0c1xuICogdGhhdCB0aGUgY29udHJvbCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkIGJ1dCB0aGF0IGlzIG5vdCBhcHByb3ByaWF0ZSBmb3IgYSBzbGlkZS10b2dnbGVcbiAqIHdoZXJlIHRoZSB2YWx1ZSBpcyBhbHdheXMgZGVmaW5lZC5cbiAqXG4gKiBSZXF1aXJlZCBzbGlkZS10b2dnbGUgZm9ybSBjb250cm9scyBhcmUgdmFsaWQgd2hlbiBjaGVja2VkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBtYXQtc2xpZGUtdG9nZ2xlW3JlcXVpcmVkXVtmb3JtQ29udHJvbE5hbWVdLFxuICAgICAgICAgICAgIG1hdC1zbGlkZS10b2dnbGVbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSwgbWF0LXNsaWRlLXRvZ2dsZVtyZXF1aXJlZF1bbmdNb2RlbF1gLFxuICBwcm92aWRlcnM6IFtNQVRfU0xJREVfVE9HR0xFX1JFUVVJUkVEX1ZBTElEQVRPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNsaWRlVG9nZ2xlUmVxdWlyZWRWYWxpZGF0b3IgZXh0ZW5kcyBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yIHt9XG4iXX0=