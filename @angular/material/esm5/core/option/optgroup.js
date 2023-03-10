/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { mixinDisabled } from '../common-behaviors/disabled';
// Boilerplate for applying mixins to MatOptgroup.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];
var MatOptgroupBase = /** @class */ (function () {
    function MatOptgroupBase() {
    }
    return MatOptgroupBase;
}());
var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
var _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
var MatOptgroup = /** @class */ (function (_super) {
    __extends(MatOptgroup, _super);
    function MatOptgroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Unique id for the underlying label. */
        _this._labelId = "mat-optgroup-label-" + _uniqueOptgroupIdCounter++;
        return _this;
    }
    MatOptgroup.propDecorators = {
        label: [{ type: Input }]
    };
MatOptgroup.ɵfac = function MatOptgroup_Factory(t) { return ɵMatOptgroup_BaseFactory(t || MatOptgroup); };
MatOptgroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatOptgroup, selectors: [["mat-optgroup"]], hostAttrs: ["role", "group", 1, "mat-optgroup"], hostVars: 4, hostBindings: function MatOptgroup_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);
        ɵngcc0.ɵɵclassProp("mat-optgroup-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", label: "label" }, exportAs: ["matOptgroup"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "mat-optgroup-label", 3, "id"]], template: function MatOptgroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3, 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx._labelId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.label, " ");
    } }, styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
var ɵMatOptgroup_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatOptgroup);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatOptgroup, [{
        type: Component,
        args: [{
                selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId'
                },
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
            }]
    }], null, { label: [{
            type: Input
        }] }); })();
    return MatOptgroup;
}(_MatOptgroupMixinBase));
export { MatOptgroup };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0Z3JvdXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL29wdGlvbi9vcHRncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQTZCLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBR3ZGLGtEQUFrRDtBQUNsRCxvQkFBb0I7Ozs7O0FBQ3BCO0FBQ3lCLElBRHpCO0FBQ0csSUFEcUIsQ0FBQztBQUN6QixJQUR3QixzQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFDekIsSUFBTSxxQkFBcUIsR0FDdkIsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRW5DLGdDQUFnQztBQUNoQyxJQUFJLHdCQUF3QixHQUFHLENBQUMsQ0FBQztBQUVqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRVksSUFjcUIsK0JBQXFCO0FBQUMsSUFoQnZEO0FBQ1ksUUFEWixxRUF3QkM7QUFDRCxRQUxFLDBDQUEwQztBQUM1QyxRQUFFLGNBQVEsR0FBVyx3QkFBc0Isd0JBQXdCLEVBQUksQ0FBQztBQUN4RTtBQUNxQixJQUNyQixDQUFDLEFBUk87QUFBQztZQWhCUixTQUFTLFNBQUMsOUJBZ0JpQyx3QkFFekMsS0FBSztBQUFJO1lBakJWLFFBQVEsRUFBRSxjQUFjLHNCQUN4QixRQUFRLEVBQUUsYUFBYSxzQkFDdkI7NEtBQTRCLHNCQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUM7QUFBSSxzQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sc0JBQy9DLE1BQU0sRUFBRSxDQUFDO09BQVUsQ0FBQyxzQkFFcEIsSUFBSSxFQUFFLDBCQUNKO0VBQU8sRUFBRSxjQUFjLDBCQUN2QixNQUFNLEVBQUUsT0FBTywwQkFDZiwrQkFBK0IsRUFBRSxVQUFVLDBCQUMzQyxzQkFBc0IsRUFBRSxxQkFBcUIsMEJBQzdDLHdCQUF3QixFQUFFLFVBQVUsdUJBQ3JDOzs7Ozs7Ozs7OzsyUUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFHaUI7QUFBQyxJQU1uQixrQkFBQztBQUNBLENBREEsQUF4QkQsQ0FnQmlDLHFCQUFxQixHQVFyRDtBQUNELFNBVGEsV0FBVztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5EaXNhYmxlLCBDYW5EaXNhYmxlQ3RvciwgbWl4aW5EaXNhYmxlZH0gZnJvbSAnLi4vY29tbW9uLWJlaGF2aW9ycy9kaXNhYmxlZCc7XG5cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRPcHRncm91cC5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRPcHRncm91cEJhc2UgeyB9XG5jb25zdCBfTWF0T3B0Z3JvdXBNaXhpbkJhc2U6IENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdE9wdGdyb3VwQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlZChNYXRPcHRncm91cEJhc2UpO1xuXG4vLyBDb3VudGVyIGZvciB1bmlxdWUgZ3JvdXAgaWRzLlxubGV0IF91bmlxdWVPcHRncm91cElkQ291bnRlciA9IDA7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgaXMgdXNlZCB0byBncm91cCBpbnN0YW5jZXMgb2YgYG1hdC1vcHRpb25gLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtb3B0Z3JvdXAnLFxuICBleHBvcnRBczogJ21hdE9wdGdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICdvcHRncm91cC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxuICBzdHlsZVVybHM6IFsnb3B0Z3JvdXAuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LW9wdGdyb3VwJyxcbiAgICAncm9sZSc6ICdncm91cCcsXG4gICAgJ1tjbGFzcy5tYXQtb3B0Z3JvdXAtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nOiAnX2xhYmVsSWQnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdE9wdGdyb3VwIGV4dGVuZHMgX01hdE9wdGdyb3VwTWl4aW5CYXNlIGltcGxlbWVudHMgQ2FuRGlzYWJsZSB7XG4gIC8qKiBMYWJlbCBmb3IgdGhlIG9wdGlvbiBncm91cC4gKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKiogVW5pcXVlIGlkIGZvciB0aGUgdW5kZXJseWluZyBsYWJlbC4gKi9cbiAgX2xhYmVsSWQ6IHN0cmluZyA9IGBtYXQtb3B0Z3JvdXAtbGFiZWwtJHtfdW5pcXVlT3B0Z3JvdXBJZENvdW50ZXIrK31gO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19