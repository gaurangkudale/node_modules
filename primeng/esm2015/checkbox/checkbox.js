import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
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
export const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
};
export class Checkbox {
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
export class CheckboxModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFZLHVCQUF1QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hLLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQW9DLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQVE7QUFDNUMsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQXdCRixNQUFNLE9BQU8sUUFBUTtBQUFHLElBOENwQixZQUFvQixFQUFxQjtBQUFJLFFBQXpCLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUFwQmpDLGlCQUFZLEdBQVcsYUFBYSxDQUFDO0FBQ2xELFFBT2MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQy9ELFFBR0ksa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdkMsUUFDSSxtQkFBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN4QyxRQUNJLFlBQU8sR0FBWSxLQUFLLENBQUM7QUFDN0IsUUFDSSxZQUFPLEdBQVksS0FBSyxDQUFDO0FBQzdCLElBQ2dELENBQUM7QUFDakQsSUFDSSxPQUFPLENBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxLQUFhO0FBQ3hD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QUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssOEJBRVYsS0FBSztBQUFLLDBCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyw2QkFFVixTQUFTLFNBQUMsSUFBSTtBQUFPLHVCQUVyQixNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQWdIakIsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FMN0IsUUFBUSxTQUFDO0lBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMzQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLGZvcndhcmRSZWYsQ2hhbmdlRGV0ZWN0b3JSZWYsVmlld0NoaWxkLEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwieydwLWNoZWNrYm94IHAtY29tcG9uZW50JzogdHJ1ZSwgJ3AtY2hlY2tib3gtY2hlY2tlZCc6IGNoZWNrZWQsICdwLWNoZWNrYm94LWRpc2FibGVkJzogZGlzYWJsZWQsICdwLWNoZWNrYm94LWZvY3VzZWQnOiBmb2N1c2VkfVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAjY2IgdHlwZT1cImNoZWNrYm94XCIgW2F0dHIuaWRdPVwiaW5wdXRJZFwiIFthdHRyLm5hbWVdPVwibmFtZVwiIFtyZWFkb25seV09XCJyZWFkb25seVwiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtjaGVja2VkXT1cImNoZWNrZWRcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiIFthdHRyLnJlcXVpcmVkXT1cInJlcXVpcmVkXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNoZWNrYm94LWJveFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxjYix0cnVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtaGlnaGxpZ2h0JzogY2hlY2tlZCwgJ3AtZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ3AtZm9jdXMnOiBmb2N1c2VkfVwiIHJvbGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWNoZWNrYm94LWljb25cIiBbbmdDbGFzc109XCJjaGVja2VkID8gY2hlY2tib3hJY29uIDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIChjbGljayk9XCJvbkNsaWNrKCRldmVudCxjYix0cnVlKVwiIFtjbGFzc109XCJsYWJlbFN0eWxlQ2xhc3NcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1jaGVja2JveC1sYWJlbCc6IHRydWUsICdwLWNoZWNrYm94LWxhYmVsLWFjdGl2ZSc6Y2hlY2tlZCwgJ3AtZGlzYWJsZWQnOmRpc2FibGVkLCAncC1jaGVja2JveC1sYWJlbC1mb2N1cyc6Zm9jdXNlZH1cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGFiZWxcIiBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiPnt7bGFiZWx9fTwvbGFiZWw+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueTtcblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIFxuICAgIEBJbnB1dCgpIGJpbmFyeTogYm9vbGVhbjtcbiAgICBcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGxhYmVsU3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgICBcbiAgICBASW5wdXQoKSBjaGVja2JveEljb246IHN0cmluZyA9ICdwaSBwaS1jaGVjayc7XG4gICAgXG4gICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NiJykgaW5wdXRWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIG1vZGVsOiBhbnk7XG4gICAgXG4gICAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICBcbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgICAgICAgXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgb25DbGljayhldmVudCxjaGVja2JveCxmb2N1czpib29sZWFuKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICBjaGVja2JveC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZU1vZGVsKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5iaW5hcnkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZSgpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoKTtcblxuICAgICAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtjaGVja2VkOnRoaXMuY2hlY2tlZCwgb3JpZ2luYWxFdmVudDogZXZlbnR9KTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KcKge1xuICAgICAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmJpbmFyeSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmluZGV4T2YodGhpcy52YWx1ZSkgPiAtMTtcbiAgICB9XG5cbiAgICByZW1vdmVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMubW9kZWwuZmlsdGVyKHZhbCA9PiB2YWwgIT09IHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGFkZFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbClcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBbLi4udGhpcy5tb2RlbCwgdGhpcy52YWx1ZV07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBbdGhpcy52YWx1ZV07XG4gICAgfVxuICAgIFxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLmlucHV0Vmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgIFxuICAgIHdyaXRlVmFsdWUobW9kZWw6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cbiAgICBcbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbQ2hlY2tib3hdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoZWNrYm94XVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveE1vZHVsZSB7IH1cbiJdfQ==