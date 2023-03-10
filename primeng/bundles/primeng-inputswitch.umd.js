(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/inputswitch', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.inputswitch = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, forms) { 
var _c0 = function (a1, a2, a3) { return { "p-inputswitch p-component": true, "p-inputswitch-checked": a1, "p-disabled": a2, "p-focus": a3 }; };
'use strict';

    var INPUTSWITCH_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return InputSwitch; }),
        multi: true
    };
    var InputSwitch = /** @class */ (function () {
        function InputSwitch(cd) {
            this.cd = cd;
            this.onChange = new core.EventEmitter();
            this.checked = false;
            this.focused = false;
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        InputSwitch.prototype.onClick = function (event, cb) {
            if (!this.disabled && !this.readonly) {
                event.preventDefault();
                this.toggle(event);
                cb.focus();
            }
        };
        InputSwitch.prototype.onInputChange = function (event) {
            if (!this.readonly) {
                var inputChecked = event.target.checked;
                this.updateModel(event, inputChecked);
            }
        };
        InputSwitch.prototype.toggle = function (event) {
            this.updateModel(event, !this.checked);
        };
        InputSwitch.prototype.updateModel = function (event, value) {
            this.checked = value;
            this.onModelChange(this.checked);
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
        };
        InputSwitch.prototype.onFocus = function (event) {
            this.focused = true;
        };
        InputSwitch.prototype.onBlur = function (event) {
            this.focused = false;
            this.onModelTouched();
        };
        InputSwitch.prototype.writeValue = function (checked) {
            this.checked = checked;
            this.cd.markForCheck();
        };
        InputSwitch.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        InputSwitch.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        InputSwitch.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
InputSwitch.ɵfac = function InputSwitch_Factory(t) { return new (t || InputSwitch)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputSwitch.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InputSwitch, selectors: [["p-inputSwitch"]], inputs: { disabled: "disabled", style: "style", styleClass: "styleClass", tabindex: "tabindex", inputId: "inputId", name: "name", readonly: "readonly", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([INPUTSWITCH_VALUE_ACCESSOR])], decls: 5, vars: 15, consts: [[3, "ngClass", "ngStyle", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", "role", "switch", 3, "checked", "disabled", "change", "focus", "blur"], ["cb", ""], [1, "p-inputswitch-slider"]], template: function InputSwitch_Template(rf, ctx) { if (rf & 1) {
        var _r1 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function InputSwitch_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r1); var _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("change", function InputSwitch_Template_input_change_2_listener($event) { return ctx.onInputChange($event); })("focus", function InputSwitch_Template_input_focus_2_listener($event) { return ctx.onFocus($event); })("blur", function InputSwitch_Template_input_blur_2_listener($event) { return ctx.onBlur($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "span", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(11, _c0, ctx.checked, ctx.disabled, ctx.focused))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("aria-labelledby", ctx.ariaLabelledBy);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-inputswitch{display:inline-block;position:relative}.p-inputswitch-slider{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.p-inputswitch-slider:before{content:\"\";position:absolute;top:50%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputSwitch, [{
        type: core.Component,
        args: [{
                selector: 'p-inputSwitch',
                template: "\n        <div [ngClass]=\"{'p-inputswitch p-component': true, 'p-inputswitch-checked': checked, 'p-disabled': disabled, 'p-focus': focused}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onClick($event, cb)\">\n            <div class=\"p-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [attr.name]=\"name\" [attr.tabindex]=\"tabindex\" [checked]=\"checked\" (change)=\"onInputChange($event)\"\n                    (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [disabled]=\"disabled\" role=\"switch\" [attr.aria-checked]=\"checked\" [attr.aria-labelledby]=\"ariaLabelledBy\"/>\n            </div>\n            <span class=\"p-inputswitch-slider\"></span>\n        </div>\n    ",
                providers: [INPUTSWITCH_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-inputswitch{display:inline-block;position:relative}.p-inputswitch-slider{bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0}.p-inputswitch-slider:before{content:\"\";position:absolute;top:50%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { onChange: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }] }); })();
        return InputSwitch;
    }());
    InputSwitch.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    InputSwitch.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        name: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };
    var InputSwitchModule = /** @class */ (function () {
        function InputSwitchModule() {
        }
InputSwitchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputSwitchModule });
InputSwitchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputSwitchModule_Factory(t) { return new (t || InputSwitchModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputSwitchModule, { declarations: [InputSwitch], imports: [ɵngcc1.CommonModule], exports: [InputSwitch] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputSwitchModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [InputSwitch],
                declarations: [InputSwitch]
            }]
    }], function () { return []; }, null); })();
        return InputSwitchModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.INPUTSWITCH_VALUE_ACCESSOR = INPUTSWITCH_VALUE_ACCESSOR;
    exports.InputSwitch = InputSwitch;
    exports.InputSwitchModule = InputSwitchModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-inputswitch.umd.js.map