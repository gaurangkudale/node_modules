/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation, } from '@angular/core';
import { MatStepLabel } from './step-label';
import { MatStepperIntl } from './stepper-intl';
import { CdkStepHeader } from '@angular/cdk/stepper';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/icon';

function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 9);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 10);
    ɵngcc0.ɵɵtemplate(1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r1.state);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "number");
} }
function MatStepHeader_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 13);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.errorMessage);
} }
var MatStepHeader = /** @class */ (function (_super) {
    __extends(MatStepHeader, _super);
    function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._intl = _intl;
        _this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        _this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
        return _this;
    }
    MatStepHeader.prototype.ngOnDestroy = function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Focuses the step header. */
    MatStepHeader.prototype.focus = function () {
        this._focusMonitor.focusVia(this._elementRef, 'program');
    };
    /** Returns string label of given step if it is a text label. */
    MatStepHeader.prototype._stringLabel = function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    MatStepHeader.prototype._templateLabel = function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    MatStepHeader.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    MatStepHeader.prototype._getIconContext = function () {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    };
    MatStepHeader.prototype._getDefaultTextForState = function (state) {
        if (state == 'number') {
            return "" + (this.index + 1);
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    };
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl },
        { type: FocusMonitor },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    MatStepHeader.propDecorators = {
        state: [{ type: Input }],
        label: [{ type: Input }],
        errorMessage: [{ type: Input }],
        iconOverrides: [{ type: Input }],
        index: [{ type: Input }],
        selected: [{ type: Input }],
        active: [{ type: Input }],
        optional: [{ type: Input }],
        disableRipple: [{ type: Input }]
    };
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(ɵngcc0.ɵɵdirectiveInject(MatStepperIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtemplate(6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, MatStepHeader_div_7_Template, 2, 1, "div", 6);
        ɵngcc0.ɵɵtemplate(8, MatStepHeader_div_8_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(9, MatStepHeader_div_9_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        ɵngcc0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._templateLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._stringLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optional && ctx.state != "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == "error");
    } }, directives: [ɵngcc2.MatRipple, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepHeader, [{
        type: Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: Input
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], iconOverrides: [{
            type: Input
        }], index: [{
            type: Input
        }], selected: [{
            type: Input
        }], active: [{
            type: Input
        }], optional: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }] }); })();
    return MatStepHeader;
}(CdkStepHeader));
export { MatStepHeader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXAtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxpQkFBaUIsR0FFbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFDLGFBQWEsRUFBWSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHOUQ7QUFFVyxJQVN3QixpQ0FBYTtBQUFDLElBOEIvQyx1QkFDUyxLQUFxQixFQUNwQixhQUEyQixFQUNuQyxXQUFvQyxFQUNwQyxpQkFBb0M7QUFDeEMsUUFMRSxZQUtFLGtCQUFNLFdBQVcsQ0FBQyxTQUduQjtBQUNILFFBUlcsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7QUFBQyxRQUNyQixtQkFBYSxHQUFiLGFBQWEsQ0FBYztBQUFDLFFBSXBDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLFFBQUksS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0FBQzdGO0FBRWlCLElBRmYsQ0FB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ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01hdFN0ZXBMYWJlbH0gZnJvbSAnLi9zdGVwLWxhYmVsJztcbmltcG9ydCB7TWF0U3RlcHBlckludGx9IGZyb20gJy4vc3RlcHBlci1pbnRsJztcbmltcG9ydCB7TWF0U3RlcHBlckljb25Db250ZXh0fSBmcm9tICcuL3N0ZXBwZXItaWNvbic7XG5pbXBvcnQge0Nka1N0ZXBIZWFkZXIsIFN0ZXBTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zdGVwLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1oZWFkZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwLWhlYWRlci5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtc3RlcC1oZWFkZXInLFxuICAgICdyb2xlJzogJ3RhYicsXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRTdGVwSGVhZGVyIGV4dGVuZHMgQ2RrU3RlcEhlYWRlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2ludGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKiogU3RhdGUgb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpIHN0YXRlOiBTdGVwU3RhdGU7XG5cbiAgLyoqIExhYmVsIG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKSBsYWJlbDogTWF0U3RlcExhYmVsIHwgc3RyaW5nO1xuXG4gIC8qKiBFcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGVyZSdzIGFuIGVycm9yLiAqL1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuICAvKiogT3ZlcnJpZGVzIGZvciB0aGUgaGVhZGVyIGljb25zLCBwYXNzZWQgaW4gdmlhIHRoZSBzdGVwcGVyLiAqL1xuICBASW5wdXQoKSBpY29uT3ZlcnJpZGVzOiB7W2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8TWF0U3RlcHBlckljb25Db250ZXh0Pn07XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGlzIHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBsYWJlbCBpcyBhY3RpdmUuICovXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBpcyBvcHRpb25hbC4gKi9cbiAgQElucHV0KCkgb3B0aW9uYWw6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHJpcHBsZSBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpIGRpc2FibGVSaXBwbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9pbnRsOiBNYXRTdGVwcGVySW50bCxcbiAgICBwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYpO1xuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSk7XG4gICAgdGhpcy5faW50bFN1YnNjcmlwdGlvbiA9IF9pbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ludGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgc3RlcCBoZWFkZXIuICovXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLl9lbGVtZW50UmVmLCAncHJvZ3JhbScpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgc3RyaW5nIGxhYmVsIG9mIGdpdmVuIHN0ZXAgaWYgaXQgaXMgYSB0ZXh0IGxhYmVsLiAqL1xuICBfc3RyaW5nTGFiZWwoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgaW5zdGFuY2VvZiBNYXRTdGVwTGFiZWwgPyBudWxsIDogdGhpcy5sYWJlbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIE1hdFN0ZXBMYWJlbCBpZiB0aGUgbGFiZWwgb2YgZ2l2ZW4gc3RlcCBpcyBhIHRlbXBsYXRlIGxhYmVsLiAqL1xuICBfdGVtcGxhdGVMYWJlbCgpOiBNYXRTdGVwTGFiZWwgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCBpbnN0YW5jZW9mIE1hdFN0ZXBMYWJlbCA/IHRoaXMubGFiZWwgOiBudWxsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGhvc3QgSFRNTCBlbGVtZW50LiAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBUZW1wbGF0ZSBjb250ZXh0IHZhcmlhYmxlcyB0aGF0IGFyZSBleHBvc2VkIHRvIHRoZSBgbWF0U3RlcHBlckljb25gIGluc3RhbmNlcy4gKi9cbiAgX2dldEljb25Db250ZXh0KCk6IE1hdFN0ZXBwZXJJY29uQ29udGV4dCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIG9wdGlvbmFsOiB0aGlzLm9wdGlvbmFsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXREZWZhdWx0VGV4dEZvclN0YXRlKHN0YXRlOiBTdGVwU3RhdGUpOiBzdHJpbmcge1xuICAgIGlmIChzdGF0ZSA9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaW5kZXggKyAxfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PSAnZWRpdCcpIHtcbiAgICAgIHJldHVybiAnY3JlYXRlJztcbiAgICB9XG4gICAgaWYgKHN0YXRlID09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19