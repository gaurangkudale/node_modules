(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/tristatecheckbox', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.tristatecheckbox = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, forms) { 
var _c0 = function (a0, a1, a2) { return { "p-checkbox-label-active": a0, "p-disabled": a1, "p-checkbox-label-focus": a2 }; };
function TriStateCheckbox_label_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("click", function TriStateCheckbox_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); var _r0 = ɵngcc0.ɵɵreference(3); return ctx_r2.onClick($event, _r0); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(3, _c0, ctx_r1.value != null, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
var _c1 = function (a1, a2) { return { "p-checkbox p-component": true, "p-checkbox-disabled": a1, "p-checkbox-focused": a2 }; };
var _c2 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-focus": a2 }; };
var _c3 = function (a0, a1) { return { "pi-check": a0, "pi-times": a1 }; };
'use strict';

    var TRISTATECHECKBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return TriStateCheckbox; }),
        multi: true
    };
    var TriStateCheckbox = /** @class */ (function () {
        function TriStateCheckbox(cd) {
            this.cd = cd;
            this.onChange = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        TriStateCheckbox.prototype.onClick = function (event, input) {
            if (!this.disabled && !this.readonly) {
                this.toggle(event);
                this.focused = true;
                input.focus();
            }
        };
        TriStateCheckbox.prototype.onKeydown = function (event) {
            if (event.keyCode == 32) {
                event.preventDefault();
            }
        };
        TriStateCheckbox.prototype.onKeyup = function (event) {
            if (event.keyCode == 32 && !this.readonly) {
                this.toggle(event);
                event.preventDefault();
            }
        };
        TriStateCheckbox.prototype.toggle = function (event) {
            if (this.value == null || this.value == undefined)
                this.value = true;
            else if (this.value == true)
                this.value = false;
            else if (this.value == false)
                this.value = null;
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        };
        TriStateCheckbox.prototype.onFocus = function () {
            this.focused = true;
        };
        TriStateCheckbox.prototype.onBlur = function () {
            this.focused = false;
            this.onModelTouched();
        };
        TriStateCheckbox.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        TriStateCheckbox.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        TriStateCheckbox.prototype.writeValue = function (value) {
            this.value = value;
            this.cd.markForCheck();
        };
        TriStateCheckbox.prototype.setDisabledState = function (disabled) {
            this.disabled = disabled;
            this.cd.markForCheck();
        };
TriStateCheckbox.ɵfac = function TriStateCheckbox_Factory(t) { return new (t || TriStateCheckbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TriStateCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TriStateCheckbox, selectors: [["p-triStateCheckbox"]], inputs: { disabled: "disabled", name: "name", ariaLabelledBy: "ariaLabelledBy", tabindex: "tabindex", inputId: "inputId", style: "style", styleClass: "styleClass", label: "label", readonly: "readonly" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([TRISTATECHECKBOX_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "text", "inputmode", "none", 3, "name", "readonly", "disabled", "keyup", "keydown", "focus", "blur"], ["input", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", "pi", 3, "ngClass"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], [1, "p-checkbox-label", 3, "ngClass", "click"]], template: function TriStateCheckbox_Template(rf, ctx) { if (rf & 1) {
        var _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("keyup", function TriStateCheckbox_Template_input_keyup_2_listener($event) { return ctx.onKeyup($event); })("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) { return ctx.onKeydown($event); })("focus", function TriStateCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TriStateCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function TriStateCheckbox_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, TriStateCheckbox_label_6_Template, 2, 7, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(14, _c1, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(17, _c2, ctx.value != null, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.value === true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(21, _c3, ctx.value == true, ctx.value == false));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TriStateCheckbox, [{
        type: core.Component,
        args: [{
                selector: 'p-triStateCheckbox',
                template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"{'p-checkbox p-component': true,'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}\" [class]=\"styleClass\">\n            <div class=\"p-hidden-accessible\">\n                <input #input type=\"text\" [attr.id]=\"inputId\" [name]=\"name\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [attr.aria-labelledby]=\"ariaLabelledBy\" inputmode=\"none\">\n            </div>\n            <div class=\"p-checkbox-box\" (click)=\"onClick($event,input)\"  role=\"checkbox\" [attr.aria-checked]=\"value === true\"\n                [ngClass]=\"{'p-highlight':value!=null,'p-disabled':disabled,'p-focus':focused}\">\n                <span class=\"p-checkbox-icon pi\" [ngClass]=\"{'pi-check':value==true,'pi-times':value==false}\"></span>\n            </div>\n        </div>\n        <label class=\"p-checkbox-label\" (click)=\"onClick($event,input)\"\n               [ngClass]=\"{'p-checkbox-label-active':value!=null, 'p-disabled':disabled, 'p-checkbox-label-focus':focused}\"\n               *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
                providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }] }); })();
        return TriStateCheckbox;
    }());
    TriStateCheckbox.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    TriStateCheckbox.propDecorators = {
        disabled: [{ type: core.Input }],
        name: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        label: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };
    var TriStateCheckboxModule = /** @class */ (function () {
        function TriStateCheckboxModule() {
        }
TriStateCheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TriStateCheckboxModule });
TriStateCheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TriStateCheckboxModule_Factory(t) { return new (t || TriStateCheckboxModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TriStateCheckboxModule, { declarations: [TriStateCheckbox], imports: [ɵngcc1.CommonModule], exports: [TriStateCheckbox] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TriStateCheckboxModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [TriStateCheckbox],
                declarations: [TriStateCheckbox]
            }]
    }], function () { return []; }, null); })();
        return TriStateCheckboxModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TRISTATECHECKBOX_VALUE_ACCESSOR = TRISTATECHECKBOX_VALUE_ACCESSOR;
    exports.TriStateCheckbox = TriStateCheckbox;
    exports.TriStateCheckboxModule = TriStateCheckboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tristatecheckbox.umd.js.map