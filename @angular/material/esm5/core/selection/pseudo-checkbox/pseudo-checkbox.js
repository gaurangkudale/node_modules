/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, Inject, Optional, } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
var MatPseudoCheckbox = /** @class */ (function () {
    function MatPseudoCheckbox(_animationMode) {
        this._animationMode = _animationMode;
        /** Display state of the checkbox. */
        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */
        this.disabled = false;
    }
    /** @nocollapse */
    MatPseudoCheckbox.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatPseudoCheckbox.propDecorators = {
        state: [{ type: Input }],
        disabled: [{ type: Input }]
    };
MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) { return new (t || MatPseudoCheckbox)(ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatPseudoCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatPseudoCheckbox, selectors: [["mat-pseudo-checkbox"]], hostAttrs: [1, "mat-pseudo-checkbox"], hostVars: 8, hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { state: "state", disabled: "disabled" }, decls: 0, vars: 0, template: function MatPseudoCheckbox_Template(rf, ctx) { }, styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPseudoCheckbox, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'mat-pseudo-checkbox',
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { state: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
    return MatPseudoCheckbox;
}());
export { MatPseudoCheckbox };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHNldWRvLWNoZWNrYm94LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9zZWxlY3Rpb24vcHNldWRvLWNoZWNrYm94L3BzZXVkby1jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBUTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDd0MsSUFvQnRDLDJCQUE4RCxjQUF1QjtBQUFJLFFBQTNCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO0FBQUMsUUFOdEYscUNBQXFDO0FBQ3ZDLFFBQVcsVUFBSyxHQUEyQixXQUFXLENBQUM7QUFDdkQsUUFDRSx3Q0FBd0M7QUFDMUMsUUFBVyxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQ3JDLElBQzJGLENBQUMsQUFQcEY7QUFBQzs4QkFkUixTQUFTLFNBQUMsaERBY3FCO1FBYjlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsNUdBY3RCLDZDQUtOLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO0tBbkJOLExBbUJjO2lCQWxCN0QsUUFBUSxFQUFFLDNCQWtCNkQ7T0FsQnhDLHNCQUUvQiw3QkFrQmlCLHdCQVBoQixLQUFLO0dBWEUsRUFBRSxFQUFFLHNCQUNaLElBQUksRUFBRSxuQ0FVSywyQkFHVixLQUFLO0FBQUk7a0JBWlIsT0FBTyxFQUFFLHFCQUFxQiwwQkFDOUIsMkNBQTJDLEVBQUUsMkJBQTJCO2VBQ3hFLHFDQUFxQyxFQUFFLHFCQUFxQiwwQkFDNUQsc0NBQXNDLEVBQUUsVUFBVSwwQkFDbEQsaUNBQWlDLEVBQUU7R0FBcUMsdUJBQ3pFOzAxQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBTWlCO0FBQUMsSUFHbkIsd0JBQUM7QUFDQSxDQURBLEFBdEJELElBc0JDO0FBQ0QsU0FUYSxpQkFBaUI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG4vKipcbiAqIFBvc3NpYmxlIHN0YXRlcyBmb3IgYSBwc2V1ZG8gY2hlY2tib3guXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCB0eXBlIE1hdFBzZXVkb0NoZWNrYm94U3RhdGUgPSAndW5jaGVja2VkJyB8ICdjaGVja2VkJyB8ICdpbmRldGVybWluYXRlJztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBzaG93cyBhIHNpbXBsaWZpZWQgY2hlY2tib3ggd2l0aG91dCBpbmNsdWRpbmcgYW55IGtpbmQgb2YgXCJyZWFsXCIgY2hlY2tib3guXG4gKiBNZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlIGNoZWNrYm94IGlzIHB1cmVseSBkZWNvcmF0aXZlIGFuZCBhIGxhcmdlIG51bWJlciBvZiB0aGVtIHdpbGwgYmVcbiAqIGluY2x1ZGVkLCBzdWNoIGFzIGZvciB0aGUgb3B0aW9ucyBpbiBhIG11bHRpLXNlbGVjdC4gVXNlcyBubyBTVkdzIG9yIGNvbXBsZXggYW5pbWF0aW9ucy5cbiAqIE5vdGUgdGhhdCB0aGVtaW5nIGlzIG1lYW50IHRvIGJlIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBlbGVtZW50LCBlLmcuXG4gKiBgbWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3hgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGNvbXBvbmVudCB3aWxsIGJlIGNvbXBsZXRlbHkgaW52aXNpYmxlIHRvIHNjcmVlbi1yZWFkZXIgdXNlcnMuIFRoaXMgaXMgKm5vdCpcbiAqIGludGVyY2hhbmdlYWJsZSB3aXRoIGA8bWF0LWNoZWNrYm94PmAgYW5kIHNob3VsZCAqbm90KiBiZSB1c2VkIGlmIHRoZSB1c2VyIHdvdWxkIGRpcmVjdGx5XG4gKiBpbnRlcmFjdCB3aXRoIHRoZSBjaGVja2JveC4gVGhlIHBzZXVkby1jaGVja2JveCBzaG91bGQgb25seSBiZSB1c2VkIGFzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbFxuICogb2YgbW9yZSBjb21wbGV4IGNvbXBvbmVudHMgdGhhdCBhcHByb3ByaWF0ZWx5IGhhbmRsZSBzZWxlY3RlZCAvIGNoZWNrZWQgc3RhdGUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdtYXQtcHNldWRvLWNoZWNrYm94JyxcbiAgc3R5bGVVcmxzOiBbJ3BzZXVkby1jaGVja2JveC5jc3MnXSxcbiAgdGVtcGxhdGU6ICcnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1wc2V1ZG8tY2hlY2tib3gnLFxuICAgICdbY2xhc3MubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlXSc6ICdzdGF0ZSA9PT0gXCJpbmRldGVybWluYXRlXCInLFxuICAgICdbY2xhc3MubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkXSc6ICdzdGF0ZSA9PT0gXCJjaGVja2VkXCInLFxuICAgICdbY2xhc3MubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuX21hdC1hbmltYXRpb24tbm9vcGFibGVdJzogJ19hbmltYXRpb25Nb2RlID09PSBcIk5vb3BBbmltYXRpb25zXCInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRQc2V1ZG9DaGVja2JveCB7XG4gIC8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgQElucHV0KCkgc3RhdGU6IE1hdFBzZXVkb0NoZWNrYm94U3RhdGUgPSAndW5jaGVja2VkJztcblxuICAvKiogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHB1YmxpYyBfYW5pbWF0aW9uTW9kZT86IHN0cmluZykgeyB9XG59XG4iXX0=