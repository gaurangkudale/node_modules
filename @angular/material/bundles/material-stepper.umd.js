(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/a11y'),require('@angular/material/core'),require('@angular/common'),require('@angular/material/icon'),require('@angular/cdk/bidi'),require('@angular/cdk/portal'),require('@angular/material/button'),require('@angular/cdk/stepper'),exports, require('@angular/cdk/portal'), require('@angular/cdk/stepper'), require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/icon'), require('tslib'), require('@angular/cdk/a11y'), require('rxjs'), require('@angular/cdk/bidi'), require('rxjs/operators'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@angular/material/stepper', ['@angular/core','@angular/cdk/a11y','@angular/material/core','@angular/common','@angular/material/icon','@angular/cdk/bidi','@angular/cdk/portal','@angular/material/button','@angular/cdk/stepper','exports', '@angular/cdk/portal', '@angular/cdk/stepper', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/core', '@angular/material/icon', 'tslib', '@angular/cdk/a11y', 'rxjs', '@angular/cdk/bidi', 'rxjs/operators', '@angular/animations'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.a11y,global.ng.material.core,global.ng.common,global.ng.material.icon,global.ng.cdk.bidi,global.ng.cdk.portal,global.ng.material.button,global.ng.cdk.stepper,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.stepper = {}), global.ng.cdk.portal, global.ng.cdk.stepper, global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.core, global.ng.material.icon, global.tslib, global.ng.cdk.a11y, global.rxjs, global.ng.cdk.bidi, global.rxjs.operators, global.ng.animations));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,exports, portal, stepper, common, i0, button, core, icon, tslib, a11y, rxjs, bidi, operators, animations) { 
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
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} }
function MatHorizontalStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "mat-step-header", 4);
    ɵngcc0.ɵɵlistener("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() { var step_r2 = ctx.$implicit; return step_r2.select(); })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7._onKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var step_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var isLast_r4 = ctx.last;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    ɵngcc0.ɵɵattribute("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !isLast_r4);
} }
function MatHorizontalStepper_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵlistener("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11._animationDone.next($event); });
    ɵngcc0.ɵɵelementContainer(1, 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var step_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r9.content);
} }
function MatVerticalStepper_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "mat-step-header", 2);
    ɵngcc0.ɵɵlistener("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() { var step_r1 = ctx.$implicit; return step_r1.select(); })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5._onKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵlistener("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7._animationDone.next($event); });
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵelementContainer(5, 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var step_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var isLast_r3 = ctx.last;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    ɵngcc0.ɵɵattribute("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("mat-stepper-vertical-line", !isLast_r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r1.content);
} }
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatStepLabel = /** @class */ (function (_super) {
        tslib.__extends(MatStepLabel, _super);
        function MatStepLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatStepLabel.ɵfac = function MatStepLabel_Factory(t) { return ɵMatStepLabel_BaseFactory(t || MatStepLabel); };
MatStepLabel.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatStepLabel_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepLabel);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepLabel, [{
        type: i0.Directive,
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();
        return MatStepLabel;
    }(stepper.CdkStepLabel));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Stepper data that is required for internationalization. */
    var MatStepperIntl = /** @class */ (function () {
        function MatStepperIntl() {
            /**
             * Stream that emits whenever the labels here are changed. Use this to notify
             * components if the labels have changed after initialization.
             */
            this.changes = new rxjs.Subject();
            /** Label that is rendered below optional steps. */
            this.optionalLabel = 'Optional';
        }
        MatStepperIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperIntl, [{
        type: i0.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
        return MatStepperIntl;
    }());
    /** @docs-private */
    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatStepperIntl();
    }
    /** @docs-private */
    var MAT_STEPPER_INTL_PROVIDER = {
        provide: MatStepperIntl,
        deps: [[new i0.Optional(), new i0.SkipSelf(), MatStepperIntl]],
        useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatStepHeader = /** @class */ (function (_super) {
        tslib.__extends(MatStepHeader, _super);
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
            { type: a11y.FocusMonitor },
            { type: i0.ElementRef },
            { type: i0.ChangeDetectorRef }
        ]; };
        MatStepHeader.propDecorators = {
            state: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            errorMessage: [{ type: i0.Input }],
            iconOverrides: [{ type: i0.Input }],
            index: [{ type: i0.Input }],
            selected: [{ type: i0.Input }],
            active: [{ type: i0.Input }],
            optional: [{ type: i0.Input }],
            disableRipple: [{ type: i0.Input }]
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
        type: i0.Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: i0.ViewEncapsulation.None,
                changeDetection: i0.ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: i0.Input
        }], label: [{
            type: i0.Input
        }], errorMessage: [{
            type: i0.Input
        }], iconOverrides: [{
            type: i0.Input
        }], index: [{
            type: i0.Input
        }], selected: [{
            type: i0.Input
        }], active: [{
            type: i0.Input
        }], optional: [{
            type: i0.Input
        }], disableRipple: [{
            type: i0.Input
        }] }); })();
        return MatStepHeader;
    }(stepper.CdkStepHeader));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Animations used by the Material steppers.
     * @docs-private
     */
    var matStepperAnimations = {
        /** Animation that transitions the step along the X axis in a horizontal stepper. */
        horizontalStepTransition: animations.trigger('stepTransition', [
            animations.state('previous', animations.style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
            animations.state('current', animations.style({ transform: 'none', visibility: 'visible' })),
            animations.state('next', animations.style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
            animations.transition('* => *', animations.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
        ]),
        /** Animation that transitions the step along the Y axis in a vertical stepper. */
        verticalStepTransition: animations.trigger('stepTransition', [
            animations.state('previous', animations.style({ height: '0px', visibility: 'hidden' })),
            animations.state('next', animations.style({ height: '0px', visibility: 'hidden' })),
            animations.state('current', animations.style({ height: '*', visibility: 'visible' })),
            animations.transition('* <=> current', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Template to be used to override the icons inside the step header.
     */
    var MatStepperIcon = /** @class */ (function () {
        function MatStepperIcon(templateRef) {
            this.templateRef = templateRef;
        }
        /** @nocollapse */
        MatStepperIcon.ctorParameters = function () { return [
            { type: i0.TemplateRef }
        ]; };
        MatStepperIcon.propDecorators = {
            name: [{ type: i0.Input, args: ['matStepperIcon',] }]
        };
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
MatStepperIcon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperIcon, [{
        type: i0.Directive,
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { name: [{
            type: i0.Input,
            args: ['matStepperIcon']
        }] }); })();
        return MatStepperIcon;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatStep = /** @class */ (function (_super) {
        tslib.__extends(MatStep, _super);
        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function MatStep(stepper, _errorStateMatcher, stepperOptions) {
            var _this = _super.call(this, stepper, stepperOptions) || this;
            _this._errorStateMatcher = _errorStateMatcher;
            return _this;
        }
        /** Custom error state matcher that additionally checks for validity of interacted form. */
        MatStep.prototype.isErrorState = function (control, form) {
            var originalErrorState = this._errorStateMatcher.isErrorState(control, form);
            // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.
            var customErrorState = !!(control && control.invalid && this.interacted);
            return originalErrorState || customErrorState;
        };
        /** @nocollapse */
        MatStep.ctorParameters = function () { return [
            { type: MatStepper, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return MatStepper; }),] }] },
            { type: core.ErrorStateMatcher, decorators: [{ type: i0.SkipSelf }] },
            { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [stepper.STEPPER_GLOBAL_OPTIONS,] }] }
        ]; };
        MatStep.propDecorators = {
            stepLabel: [{ type: i0.ContentChild, args: [MatStepLabel,] }]
        };
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(ɵngcc0.ɵɵdirectiveInject(i0.forwardRef(function () { return MatStepper; })), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ErrorStateMatcher, 4), ɵngcc0.ɵɵdirectiveInject(stepper.STEPPER_GLOBAL_OPTIONS, 8)); };
MatStep.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepLabel, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
    } }, exportAs: ["matStep"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: core.ErrorStateMatcher, useExisting: MatStep },
            { provide: stepper.CdkStep, useExisting: MatStep },
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStep, [{
        type: i0.Component,
        args: [{
                selector: 'mat-step',
                template: "<ng-template><ng-content></ng-content></ng-template>\n",
                providers: [
                    { provide: core.ErrorStateMatcher, useExisting: MatStep },
                    { provide: stepper.CdkStep, useExisting: MatStep },
                ],
                encapsulation: i0.ViewEncapsulation.None,
                exportAs: 'matStep',
                changeDetection: i0.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: i0.Inject,
                args: [i0.forwardRef(function () { return MatStepper; })]
            }] }, { type: ɵngcc2.ErrorStateMatcher, decorators: [{
                type: i0.SkipSelf
            }] }, { type: undefined, decorators: [{
                type: i0.Optional
            }, {
                type: i0.Inject,
                args: [stepper.STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { stepLabel: [{
            type: i0.ContentChild,
            args: [MatStepLabel]
        }] }); })();
        return MatStep;
    }(stepper.CdkStep));
    var MatStepper = /** @class */ (function (_super) {
        tslib.__extends(MatStepper, _super);
        function MatStepper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Event emitted when the current step is done transitioning in. */
            _this.animationDone = new i0.EventEmitter();
            /** Consumer-specified template-refs to be used to override the header icons. */
            _this._iconOverrides = {};
            /** Stream of animation `done` events when the body expands/collapses. */
            _this._animationDone = new rxjs.Subject();
            return _this;
        }
        MatStepper.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._icons.forEach(function (_a) {
                var name = _a.name, templateRef = _a.templateRef;
                return _this._iconOverrides[name] = templateRef;
            });
            // Mark the component for change detection whenever the content children query changes
            this._steps.changes.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                _this._stateChanged();
            });
            this._animationDone.pipe(
            // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            operators.distinctUntilChanged(function (x, y) { return x.fromState === y.fromState && x.toState === y.toState; }), operators.takeUntil(this._destroyed)).subscribe(function (event) {
                if (event.toState === 'current') {
                    _this.animationDone.emit();
                }
            });
        };
        MatStepper.propDecorators = {
            _stepHeader: [{ type: i0.ViewChildren, args: [MatStepHeader,] }],
            _steps: [{ type: i0.ContentChildren, args: [MatStep, { descendants: true },] }],
            _icons: [{ type: i0.ContentChildren, args: [MatStepperIcon, { descendants: true },] }],
            animationDone: [{ type: i0.Output }],
            disableRipple: [{ type: i0.Input }]
        };
MatStepper.ɵfac = function MatStepper_Factory(t) { return ɵMatStepper_BaseFactory(t || MatStepper); };
MatStepper.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepper, selectors: [["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStep, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepperIcon, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._steps = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatStepHeader, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
    } }, inputs: { disableRipple: "disableRipple" }, outputs: { animationDone: "animationDone" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: stepper.CdkStepper, useExisting: MatStepper }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepper);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepper, [{
        type: i0.Directive,
        args: [{ selector: '[matStepper]', providers: [{ provide: stepper.CdkStepper, useExisting: MatStepper }] }]
    }], null, { _stepHeader: [{
            type: i0.ViewChildren,
            args: [MatStepHeader]
        }], _steps: [{
            type: i0.ContentChildren,
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: i0.ContentChildren,
            args: [MatStepperIcon, { descendants: true }]
        }], animationDone: [{
            type: i0.Output
        }], disableRipple: [{
            type: i0.Input
        }] }); })();
        return MatStepper;
    }(stepper.CdkStepper));
    var MatHorizontalStepper = /** @class */ (function (_super) {
        tslib.__extends(MatHorizontalStepper, _super);
        function MatHorizontalStepper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Whether the label should display in bottom or end position. */
            _this.labelPosition = 'end';
            return _this;
        }
        MatHorizontalStepper.propDecorators = {
            labelPosition: [{ type: i0.Input }]
        };
MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) { return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper); };
MatHorizontalStepper.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"], hostVars: 4, hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition" }, exportAs: ["matHorizontalStepper"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MatStepper, useExisting: MatHorizontalStepper },
            { provide: stepper.CdkStepper, useExisting: MatHorizontalStepper }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]], template: function MatHorizontalStepper_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [ɵngcc3.NgForOf, MatStepHeader, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [matStepperAnimations.horizontalStepTransition] }, changeDetection: 0 });
var ɵMatHorizontalStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHorizontalStepper);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHorizontalStepper, [{
        type: i0.Component,
        args: [{
                selector: 'mat-horizontal-stepper',
                exportAs: 'matHorizontalStepper',
                template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-horizontal',
                    '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                    'aria-orientation': 'horizontal',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.horizontalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatHorizontalStepper },
                    { provide: stepper.CdkStepper, useExisting: MatHorizontalStepper }
                ],
                encapsulation: i0.ViewEncapsulation.None,
                changeDetection: i0.ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], null, { labelPosition: [{
            type: i0.Input
        }] }); })();
        return MatHorizontalStepper;
    }(MatStepper));
    var MatVerticalStepper = /** @class */ (function (_super) {
        tslib.__extends(MatVerticalStepper, _super);
        function MatVerticalStepper(dir, changeDetectorRef, 
        // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
        elementRef, _document) {
            var _this = _super.call(this, dir, changeDetectorRef, elementRef, _document) || this;
            _this._orientation = 'vertical';
            return _this;
        }
        /** @nocollapse */
        MatVerticalStepper.ctorParameters = function () { return [
            { type: bidi.Directionality, decorators: [{ type: i0.Optional }] },
            { type: i0.ChangeDetectorRef },
            { type: i0.ElementRef },
            { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
        ]; };
MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) { return new (t || MatVerticalStepper)(ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT)); };
MatVerticalStepper.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"], inputs: { selectedIndex: "selectedIndex" }, exportAs: ["matVerticalStepper"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MatStepper, useExisting: MatVerticalStepper },
            { provide: stepper.CdkStepper, useExisting: MatVerticalStepper }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]], template: function MatVerticalStepper_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [ɵngcc3.NgForOf, MatStepHeader, ɵngcc3.NgTemplateOutlet], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [matStepperAnimations.verticalStepTransition] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatVerticalStepper, [{
        type: i0.Component,
        args: [{
                selector: 'mat-vertical-stepper',
                exportAs: 'matVerticalStepper',
                template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-vertical',
                    'aria-orientation': 'vertical',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.verticalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatVerticalStepper },
                    { provide: stepper.CdkStepper, useExisting: MatVerticalStepper }
                ],
                encapsulation: i0.ViewEncapsulation.None,
                changeDetection: i0.ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc5.Directionality, decorators: [{
                type: i0.Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: i0.Inject,
                args: [common.DOCUMENT]
            }] }]; }, null); })();
        return MatVerticalStepper;
    }(MatStepper));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Button that moves to the next step in a stepper workflow. */
    var MatStepperNext = /** @class */ (function (_super) {
        tslib.__extends(MatStepperNext, _super);
        function MatStepperNext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatStepperNext.ɵfac = function MatStepperNext_Factory(t) { return ɵMatStepperNext_BaseFactory(t || MatStepperNext); };
MatStepperNext.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatStepperNext_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperNext);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperNext, [{
        type: i0.Directive,
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
        return MatStepperNext;
    }(stepper.CdkStepperNext));
    /** Button that moves to the previous step in a stepper workflow. */
    var MatStepperPrevious = /** @class */ (function (_super) {
        tslib.__extends(MatStepperPrevious, _super);
        function MatStepperPrevious() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) { return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious); };
MatStepperPrevious.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatStepperPrevious_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperPrevious);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperPrevious, [{
        type: i0.Directive,
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
        return MatStepperPrevious;
    }(stepper.CdkStepperPrevious));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatStepperModule = /** @class */ (function () {
        function MatStepperModule() {
        }
MatStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatStepperModule });
MatStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); }, providers: [MAT_STEPPER_INTL_PROVIDER, core.ErrorStateMatcher], imports: [[
            core.MatCommonModule,
            common.CommonModule,
            portal.PortalModule,
            button.MatButtonModule,
            stepper.CdkStepperModule,
            icon.MatIconModule,
            core.MatRippleModule,
        ], ɵngcc2.MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatStepperModule, { declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon], imports: [ɵngcc2.MatCommonModule, ɵngcc3.CommonModule, ɵngcc6.PortalModule, ɵngcc7.MatButtonModule, ɵngcc8.CdkStepperModule, ɵngcc4.MatIconModule, ɵngcc2.MatRippleModule], exports: [ɵngcc2.MatCommonModule, MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatStepperModule, [{
        type: i0.NgModule,
        args: [{
                imports: [
                    core.MatCommonModule,
                    common.CommonModule,
                    portal.PortalModule,
                    button.MatButtonModule,
                    stepper.CdkStepperModule,
                    icon.MatIconModule,
                    core.MatRippleModule,
                ],
                exports: [
                    core.MatCommonModule,
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, core.ErrorStateMatcher]
            }]
    }], function () { return []; }, null); })();
        return MatStepperModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MAT_STEPPER_INTL_PROVIDER = MAT_STEPPER_INTL_PROVIDER;
    exports.MAT_STEPPER_INTL_PROVIDER_FACTORY = MAT_STEPPER_INTL_PROVIDER_FACTORY;
    exports.MatHorizontalStepper = MatHorizontalStepper;
    exports.MatStep = MatStep;
    exports.MatStepHeader = MatStepHeader;
    exports.MatStepLabel = MatStepLabel;
    exports.MatStepper = MatStepper;
    exports.MatStepperIcon = MatStepperIcon;
    exports.MatStepperIntl = MatStepperIntl;
    exports.MatStepperModule = MatStepperModule;
    exports.MatStepperNext = MatStepperNext;
    exports.MatStepperPrevious = MatStepperPrevious;
    exports.MatVerticalStepper = MatVerticalStepper;
    exports.matStepperAnimations = matStepperAnimations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-stepper.umd.js.map