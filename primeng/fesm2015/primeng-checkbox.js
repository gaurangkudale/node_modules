import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, ViewChild, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["cb"];
const _c1 = function (a1, a2, a3) { return { "p-checkbox-label": true, "p-checkbox-label-active": a1, "p-disabled": a2, "p-checkbox-label-focus": a3 }; };
function Checkbox_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 7);
    ɵngcc0.ɵɵlistener("click", function Checkbox_label_6_Template_label_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); const _r0 = ɵngcc0.ɵɵreference(3); return ctx_r2.onClick($event, _r0, true); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.labelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c1, ctx_r1.checked, ctx_r1.disabled, ctx_r1.focused));
    ɵngcc0.ɵɵattribute("for", ctx_r1.inputId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.label);
} }
const _c2 = function (a1, a2, a3) { return { "p-checkbox p-component": true, "p-checkbox-checked": a1, "p-checkbox-disabled": a2, "p-checkbox-focused": a3 }; };
const _c3 = function (a0, a1, a2) { return { "p-highlight": a0, "p-disabled": a1, "p-focus": a2 }; };
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
class Checkbox {
    constructor(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.focused = false;
        this.checked = false;
    }
    onClick(event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled || this.readonly) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel(event);
        if (focus) {
            checkbox.focus();
        }
    }
    updateModel(event) {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit({ checked: this.checked, originalEvent: event });
    }
    handleChange(event) {
        if (!this.readonly) {
            this.checked = event.target.checked;
            this.updateModel(event);
        }
    }
    isChecked() {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    }
    removeValue() {
        this.model = this.model.filter(val => val !== this.value);
    }
    addValue() {
        if (this.model)
            this.model = [...this.model, this.value];
        else
            this.model = [this.value];
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
        this.onModelTouched();
    }
    focus() {
        this.inputViewChild.nativeElement.focus();
    }
    writeValue(model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
}
Checkbox.ɵfac = function Checkbox_Factory(t) { return new (t || Checkbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Checkbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Checkbox, selectors: [["p-checkbox"]], viewQuery: function Checkbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    } }, inputs: { checkboxIcon: "checkboxIcon", disabled: "disabled", value: "value", name: "name", binary: "binary", label: "label", ariaLabelledBy: "ariaLabelledBy", tabindex: "tabindex", inputId: "inputId", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass", formControl: "formControl", readonly: "readonly", required: "required" }, outputs: { onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR])], decls: 7, vars: 25, consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "readonly", "value", "checked", "disabled", "focus", "blur", "change"], ["cb", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]], template: function Checkbox_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function Checkbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function Checkbox_Template_input_blur_2_listener() { return ctx.onBlur(); })("change", function Checkbox_Template_input_change_2_listener($event) { return ctx.handleChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵlistener("click", function Checkbox_Template_div_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0, true); });
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, Checkbox_label_6_Template, 2, 9, "label", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction3(17, _c2, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("readonly", ctx.readonly)("value", ctx.value)("checked", ctx.checked)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("name", ctx.name)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy)("required", ctx.required);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(21, _c3, ctx.checked, ctx.disabled, ctx.focused));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.checked ? ctx.checkboxIcon : null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-checkbox{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-box{-ms-flex-pack:center;display:-ms-flexbox;display:flex;justify-content:center}.p-checkbox-box,p-checkbox{-ms-flex-align:center;align-items:center}p-checkbox{display:-ms-inline-flexbox;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"], encapsulation: 2, changeDetection: 0 });
Checkbox.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Checkbox.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    binary: [{ type: Input }],
    label: [{ type: Input }],
    ariaLabelledBy: [{ type: Input }],
    tabindex: [{ type: Input }],
    inputId: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    labelStyleClass: [{ type: Input }],
    formControl: [{ type: Input }],
    checkboxIcon: [{ type: Input }],
    readonly: [{ type: Input }],
    required: [{ type: Input }],
    inputViewChild: [{ type: ViewChild, args: ['cb',] }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Checkbox, [{
        type: Component,
        args: [{
                selector: 'p-checkbox',
                template: `
        <div [ngStyle]="style" [ngClass]="{'p-checkbox p-component': true, 'p-checkbox-checked': checked, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused}" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [readonly]="readonly" [value]="value" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                (change)="handleChange($event)" [disabled]="disabled" [attr.tabindex]="tabindex" [attr.aria-labelledby]="ariaLabelledBy" [attr.required]="required">
            </div>
            <div class="p-checkbox-box" (click)="onClick($event,cb,true)"
                        [ngClass]="{'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}" role="checkbox" [attr.aria-checked]="checked">
                <span class="p-checkbox-icon" [ngClass]="checked ? checkboxIcon : null"></span>
            </div>
        </div>
        <label (click)="onClick($event,cb,true)" [class]="labelStyleClass"
                [ngClass]="{'p-checkbox-label': true, 'p-checkbox-label-active':checked, 'p-disabled':disabled, 'p-checkbox-label-focus':focused}"
                *ngIf="label" [attr.for]="inputId">{{label}}</label>
    `,
                providers: [CHECKBOX_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-checkbox{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-box{-ms-flex-pack:center;display:-ms-flexbox;display:flex;justify-content:center}.p-checkbox-box,p-checkbox{-ms-flex-align:center;align-items:center}p-checkbox{display:-ms-inline-flexbox;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { checkboxIcon: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }], binary: [{
            type: Input
        }], label: [{
            type: Input
        }], ariaLabelledBy: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputId: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], labelStyleClass: [{
            type: Input
        }], formControl: [{
            type: Input
        }], readonly: [{
            type: Input
        }], required: [{
            type: Input
        }], inputViewChild: [{
            type: ViewChild,
            args: ['cb']
        }] }); })();
class CheckboxModule {
}
CheckboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CheckboxModule });
CheckboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CheckboxModule, { declarations: function () { return [Checkbox]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Checkbox]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Checkbox],
                declarations: [Checkbox]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CHECKBOX_VALUE_ACCESSOR, Checkbox, CheckboxModule };

//# sourceMappingURL=primeng-checkbox.js.map