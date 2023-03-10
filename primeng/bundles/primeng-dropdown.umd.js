(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('primeng/ripple'),require('@angular/common'),require('primeng/tooltip'),require('@angular/cdk/scrolling'),require('primeng/api'),exports, require('@angular/cdk/scrolling'), require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/api'), require('primeng/dom'), require('primeng/utils'), require('@angular/forms'), require('primeng/tooltip'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/dropdown', ['@angular/core','primeng/ripple','@angular/common','primeng/tooltip','@angular/cdk/scrolling','primeng/api','exports', '@angular/cdk/scrolling', '@angular/core', '@angular/animations', '@angular/common', 'primeng/api', 'primeng/dom', 'primeng/utils', '@angular/forms', 'primeng/tooltip', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.primeng.ripple,global.ng.common,global.primeng.tooltip,global.ng.cdk.scrolling,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.dropdown = {}), global.ng.cdk.scrolling, global.ng.core, global.ng.animations, global.ng.common, global.primeng.api, global.primeng.dom, global.primeng.utils, global.ng.forms, global.primeng.tooltip, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, scrolling, core, animations, common, api, dom, utils, forms, tooltip, ripple) { 
function DropdownItem_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.option.label || "empty");
} }
function DropdownItem_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { "height": a0 }; };
var _c1 = function (a1, a2) { return { "p-dropdown-item": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c2 = function (a0) { return { $implicit: a0 }; };
var _c3 = ["container"];
var _c4 = ["filter"];
var _c5 = ["in"];
var _c6 = ["editableInput"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.label || "empty");
} }
function Dropdown_span_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c7 = function (a1) { return { "p-dropdown-label p-inputtext": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵtemplate(1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c2, ctx_r2.selectedOption));
} }
var _c8 = function (a1) { return { "p-dropdown-label p-inputtext p-placeholder": true, "p-dropdown-label-empty": a1 }; };
function Dropdown_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c8, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.placeholder || "empty");
} }
function Dropdown_input_7_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 16, 17);
    ɵngcc0.ɵɵlistener("click", function Dropdown_input_7_Template_input_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onEditableInputClick(); })("input", function Dropdown_input_7_Template_input_input_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onEditableInputChange($event); })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onEditableInputFocus($event); })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onInputBlur($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r4.disabled);
    ɵngcc0.ɵɵattribute("maxlength", ctx_r4.maxlength)("aria-label", ctx_r4.selectedOption ? ctx_r4.selectedOption.label : " ")("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
} }
function Dropdown_i_8_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 18);
    ɵngcc0.ɵɵlistener("click", function Dropdown_i_8_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.clear($event); });
    ɵngcc0.ɵɵelementEnd();
} }
function Dropdown_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵlistener("click", function Dropdown_div_11_div_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keydown.enter", function Dropdown_div_11_div_1_Template_input_keydown_enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); return $event.preventDefault(); })("keydown", function Dropdown_div_11_div_1_Template_input_keydown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onKeydown($event, false); })("input", function Dropdown_div_11_div_1_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onFilter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r17.filterValue || "");
    ɵngcc0.ɵɵattribute("placeholder", ctx_r17.filterPlaceholder)("aria-label", ctx_r17.ariaFilterLabel);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var optgroup_r30 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(optgroup_r30.label || "empty");
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c9 = function (a0, a1) { return { $implicit: a0, selectedOption: a1 }; };
function Dropdown_div_11_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 31);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, Dropdown_div_11_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 14);
} if (rf & 2) {
    var optgroup_r30 = ctx.$implicit;
    ɵngcc0.ɵɵnextContext(2);
    var _r20 = ɵngcc0.ɵɵreference(7);
    var ctx_r29 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r29.groupTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r29.groupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c2, optgroup_r30));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c9, optgroup_r30.items, ctx_r29.selectedOption));
} }
function Dropdown_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_4_ng_template_1_Template, 4, 10, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r18.optionsToDisplay);
} }
function Dropdown_div_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dropdown_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r20 = ɵngcc0.ɵɵreference(7);
    var ctx_r19 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r20)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c9, ctx_r19.optionsToDisplay, ctx_r19.selectedOption));
} }
function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template_p_dropdownItem_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); var ctx_r44 = ɵngcc0.ɵɵnextContext(4); return ctx_r44.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r42 = ctx.$implicit;
    var selectedOption_r37 = ɵngcc0.ɵɵnextContext(2).selectedOption;
    var ctx_r41 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("option", option_r42)("selected", selectedOption_r37 == option_r42)("template", ctx_r41.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_container_0_ng_template_1_Template, 1, 3, "ng-template", 30);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var options_r36 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r59 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "p-dropdownItem", 34);
    ɵngcc0.ɵɵlistener("onClick", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template_p_dropdownItem_onClick_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); var ctx_r58 = ɵngcc0.ɵɵnextContext(5); return ctx_r58.onItemClick($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var option_r51 = ctx.$implicit;
    var selectedOption_r37 = ɵngcc0.ɵɵnextContext(3).selectedOption;
    var ctx_r50 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("option", option_r51)("selected", selectedOption_r37 == option_r51)("template", ctx_r50.itemTemplate);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) { if (rf & 1) {
    var _r62 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 36, 37);
    ɵngcc0.ɵɵlistener("scrolledIndexChange", function Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_0_listener() { ɵngcc0.ɵɵrestoreView(_r62); var ctx_r61 = ɵngcc0.ɵɵnextContext(4); return ctx_r61.scrollToSelectedVirtualScrollElement(); });
    ɵngcc0.ɵɵtemplate(2, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_2_Template, 2, 3, "ng-container", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var options_r36 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r48 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r48.scrollHeight))("itemSize", ctx_r48.itemSize);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", options_r36);
} }
function Dropdown_div_11_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 3, 5, "cdk-virtual-scroll-viewport", 35);
} if (rf & 2) {
    var ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r40.virtualScroll && ctx_r40.optionsToDisplay && ctx_r40.optionsToDisplay.length);
} }
function Dropdown_div_11_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Dropdown_div_11_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 32);
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 33, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    var _r39 = ɵngcc0.ɵɵreference(2);
    var ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r21.virtualScroll)("ngIfElse", _r39);
} }
function Dropdown_div_11_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 39);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r22.emptyFilterMessage);
} }
var _c10 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c11 = function (a1) { return { value: "visible", params: a1 }; };
function Dropdown_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r65 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function Dropdown_div_11_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r65); var ctx_r64 = ɵngcc0.ɵɵnextContext(); return ctx_r64.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵtemplate(1, Dropdown_div_11_div_1_Template, 5, 3, "div", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵelementStart(3, "ul", 22);
    ɵngcc0.ɵɵtemplate(4, Dropdown_div_11_ng_container_4_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(5, Dropdown_div_11_ng_container_5_Template, 2, 5, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(6, Dropdown_div_11_ng_template_6_Template, 3, 2, "ng-template", null, 23, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(8, Dropdown_div_11_li_8_Template, 2, 1, "li", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r6.panelStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dropdown-panel p-component")("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(14, _c11, ɵngcc0.ɵɵpureFunction2(11, _c10, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("ngStyle", ctx_r6.panelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r6.virtualScroll ? "auto" : ctx_r6.scrollHeight || "auto");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.group);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.group);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.filter && (!ctx_r6.optionsToDisplay || ctx_r6.optionsToDisplay && ctx_r6.optionsToDisplay.length === 0));
} }
var _c12 = function (a1, a2, a3, a4) { return { "p-dropdown p-component": true, "p-disabled": a1, "p-dropdown-open": a2, "p-focus": a3, "p-dropdown-clearable": a4 }; };
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var DROPDOWN_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Dropdown; }),
        multi: true
    };
    var DropdownItem = /** @class */ (function () {
        function DropdownItem() {
            this.onClick = new core.EventEmitter();
        }
        DropdownItem.prototype.onOptionClick = function (event) {
            this.onClick.emit({
                originalEvent: event,
                option: this.option
            });
        };
DropdownItem.ɵfac = function DropdownItem_Factory(t) { return new (t || DropdownItem)(); };
DropdownItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DropdownItem, selectors: [["p-dropdownItem"]], inputs: { option: "option", selected: "selected", disabled: "disabled", visible: "visible", itemSize: "itemSize", template: "template" }, outputs: { onClick: "onClick" }, decls: 3, vars: 14, consts: [["role", "option", "pRipple", "", 3, "ngStyle", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DropdownItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) { return ctx.onOptionClick($event); });
        ɵngcc0.ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1);
        ɵngcc0.ɵɵtemplate(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx.itemSize + "px"))("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx.selected, ctx.option.disabled));
        ɵngcc0.ɵɵattribute("aria-label", ctx.option.label)("aria-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.option));
    } }, directives: [ɵngcc1.Ripple, ɵngcc2.NgStyle, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownItem, [{
        type: core.Component,
        args: [{
                selector: 'p-dropdownItem',
                template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\" pRipple\n            [attr.aria-label]=\"option.label\" [attr.aria-selected]=\"selected\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'p-dropdown-item':true, 'p-highlight': selected, 'p-disabled':(option.disabled)}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
            }]
    }], function () { return []; }, { onClick: [{
            type: core.Output
        }], option: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], visible: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], template: [{
            type: core.Input
        }] }); })();
        return DropdownItem;
    }());
    DropdownItem.propDecorators = {
        option: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        visible: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        template: [{ type: core.Input }],
        onClick: [{ type: core.Output }]
    };
    var Dropdown = /** @class */ (function () {
        function Dropdown(el, renderer, cd, zone) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.zone = zone;
            this.scrollHeight = '200px';
            this.filterBy = 'label';
            this.resetFilterOnHide = false;
            this.dropdownIcon = 'pi pi-chevron-down';
            this.autoDisplayFirst = true;
            this.emptyFilterMessage = 'No results found';
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.filterMatchMode = "contains";
            this.tooltip = '';
            this.tooltipPosition = 'right';
            this.tooltipPositionStyle = 'absolute';
            this.autofocusFilter = true;
            this.onChange = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.viewPortOffsetTop = 0;
        }
        Object.defineProperty(Dropdown.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (_disabled) {
                if (_disabled)
                    this.focused = false;
                this._disabled = _disabled;
                if (!this.cd.destroyed) {
                    this.cd.detectChanges();
                }
            },
            enumerable: false,
            configurable: true
        });
        ;
        Dropdown.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'selectedItem':
                        _this.selectedItemTemplate = item.template;
                        break;
                    case 'group':
                        _this.groupTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        Dropdown.prototype.ngOnInit = function () {
            this.optionsToDisplay = this.options;
            this.updateSelectedOption(null);
        };
        Object.defineProperty(Dropdown.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (val) {
                var opts = this.optionLabel ? utils.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
                this._options = opts;
                this.optionsToDisplay = this._options;
                this.updateSelectedOption(this.value);
                this.optionsChanged = true;
                this.updateFilledState();
                if (this.filterValue && this.filterValue.length) {
                    this.activateFilter();
                }
            },
            enumerable: false,
            configurable: true
        });
        Dropdown.prototype.ngAfterViewInit = function () {
            if (this.editable) {
                this.updateEditableLabel();
            }
        };
        Object.defineProperty(Dropdown.prototype, "label", {
            get: function () {
                return (this.selectedOption ? this.selectedOption.label : null);
            },
            enumerable: false,
            configurable: true
        });
        Dropdown.prototype.updateEditableLabel = function () {
            if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
                this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
            }
        };
        Dropdown.prototype.onItemClick = function (event) {
            var _this = this;
            var option = event.option;
            if (!option.disabled) {
                this.selectItem(event, option);
                this.accessibleViewChild.nativeElement.focus();
            }
            setTimeout(function () {
                _this.hide(event);
            }, 150);
        };
        Dropdown.prototype.selectItem = function (event, option) {
            var _this = this;
            if (this.selectedOption != option) {
                this.selectedOption = option;
                this.value = option.value;
                this.filled = true;
                this.onModelChange(this.value);
                this.updateEditableLabel();
                this.onChange.emit({
                    originalEvent: event.originalEvent,
                    value: this.value
                });
                if (this.virtualScroll) {
                    setTimeout(function () {
                        _this.viewPortOffsetTop = _this.viewPort ? _this.viewPort.measureScrollOffset() : 0;
                    }, 1);
                }
            }
        };
        Dropdown.prototype.ngAfterViewChecked = function () {
            var _this = this;
            if (this.optionsChanged && this.overlayVisible) {
                this.optionsChanged = false;
                if (this.virtualScroll) {
                    this.updateVirtualScrollSelectedIndex(true);
                }
                this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.alignOverlay();
                    }, 1);
                });
            }
            if (this.selectedOptionUpdated && this.itemsWrapper) {
                if (this.virtualScroll && this.viewPort) {
                    var range = this.viewPort.getRenderedRange();
                    this.updateVirtualScrollSelectedIndex(false);
                    if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                        this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                    }
                }
                var selectedItem = dom.DomHandler.findSingle(this.overlay, 'li.p-highlight');
                if (selectedItem) {
                    dom.DomHandler.scrollInView(this.itemsWrapper, dom.DomHandler.findSingle(this.overlay, 'li.p-highlight'));
                }
                this.selectedOptionUpdated = false;
            }
        };
        Dropdown.prototype.writeValue = function (value) {
            if (this.filter) {
                this.resetFilter();
            }
            this.value = value;
            this.updateSelectedOption(value);
            this.updateEditableLabel();
            this.updateFilledState();
            this.cd.markForCheck();
        };
        Dropdown.prototype.resetFilter = function () {
            this.filterValue = null;
            if (this.filterViewChild && this.filterViewChild.nativeElement) {
                this.filterViewChild.nativeElement.value = '';
            }
            this.optionsToDisplay = this.options;
        };
        Dropdown.prototype.updateSelectedOption = function (val) {
            this.selectedOption = this.findOption(val, this.optionsToDisplay);
            if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
                this.selectedOption = this.optionsToDisplay[0];
            }
            this.selectedOptionUpdated = true;
        };
        Dropdown.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Dropdown.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Dropdown.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        Dropdown.prototype.onMouseclick = function (event) {
            if (this.disabled || this.readonly || this.isInputClick(event)) {
                return;
            }
            this.onClick.emit(event);
            this.accessibleViewChild.nativeElement.focus();
            if (this.overlayVisible)
                this.hide(event);
            else
                this.show();
            this.cd.detectChanges();
        };
        Dropdown.prototype.isInputClick = function (event) {
            return dom.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') ||
                event.target.isSameNode(this.accessibleViewChild.nativeElement) ||
                (this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement));
        };
        Dropdown.prototype.isOutsideClicked = function (event) {
            return !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        };
        Dropdown.prototype.onEditableInputClick = function () {
            this.bindDocumentClickListener();
        };
        Dropdown.prototype.onEditableInputFocus = function (event) {
            this.focused = true;
            this.hide(event);
            this.onFocus.emit(event);
        };
        Dropdown.prototype.onEditableInputChange = function (event) {
            this.value = event.target.value;
            this.updateSelectedOption(this.value);
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        };
        Dropdown.prototype.show = function () {
            this.overlayVisible = true;
        };
        Dropdown.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.overlay = event.element;
                    var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.p-dropdown-items-wrapper';
                    this.itemsWrapper = dom.DomHandler.findSingle(this.overlay, itemsWrapperSelector);
                    this.appendOverlay();
                    if (this.autoZIndex) {
                        this.overlay.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
                    }
                    this.alignOverlay();
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                    this.bindScrollListener();
                    if (this.options && this.options.length) {
                        if (!this.virtualScroll) {
                            var selectedListItem = dom.DomHandler.findSingle(this.itemsWrapper, '.p-dropdown-item.p-highlight');
                            if (selectedListItem) {
                                dom.DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
                            }
                        }
                    }
                    if (this.filterViewChild && this.filterViewChild.nativeElement) {
                        this.preventModelTouched = true;
                        if (this.autofocusFilter) {
                            this.filterViewChild.nativeElement.focus();
                        }
                    }
                    this.onShow.emit(event);
                    break;
                case 'void':
                    this.onOverlayHide();
                    break;
            }
        };
        Dropdown.prototype.scrollToSelectedVirtualScrollElement = function () {
            if (!this.virtualAutoScrolled) {
                if (this.viewPortOffsetTop) {
                    this.viewPort.scrollToOffset(this.viewPortOffsetTop);
                }
                else if (this.virtualScrollSelectedIndex > -1) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            this.virtualAutoScrolled = true;
        };
        Dropdown.prototype.updateVirtualScrollSelectedIndex = function (resetOffset) {
            if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
                if (resetOffset) {
                    this.viewPortOffsetTop = 0;
                }
                this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
            }
        };
        Dropdown.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.overlay);
                else
                    dom.DomHandler.appendChild(this.overlay, this.appendTo);
                if (!this.overlay.style.minWidth) {
                    this.overlay.style.minWidth = dom.DomHandler.getWidth(this.containerViewChild.nativeElement) + 'px';
                }
            }
        };
        Dropdown.prototype.restoreOverlayAppend = function () {
            if (this.overlay && this.appendTo) {
                this.el.nativeElement.appendChild(this.overlay);
            }
        };
        Dropdown.prototype.hide = function (event) {
            this.overlayVisible = false;
            if (this.filter && this.resetFilterOnHide) {
                this.resetFilter();
            }
            if (this.virtualScroll) {
                this.virtualAutoScrolled = false;
            }
            this.cd.markForCheck();
            this.onHide.emit(event);
        };
        Dropdown.prototype.alignOverlay = function () {
            if (this.overlay) {
                if (this.appendTo)
                    dom.DomHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
            }
        };
        Dropdown.prototype.onInputFocus = function (event) {
            this.focused = true;
            this.onFocus.emit(event);
        };
        Dropdown.prototype.onInputBlur = function (event) {
            this.focused = false;
            this.onBlur.emit(event);
            if (!this.preventModelTouched) {
                this.onModelTouched();
            }
            this.preventModelTouched = false;
        };
        Dropdown.prototype.findPrevEnabledOption = function (index) {
            var prevEnabledOption;
            if (this.optionsToDisplay && this.optionsToDisplay.length) {
                for (var i = (index - 1); 0 <= i; i--) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
                if (!prevEnabledOption) {
                    for (var i = this.optionsToDisplay.length - 1; i >= index; i--) {
                        var option = this.optionsToDisplay[i];
                        if (option.disabled) {
                            continue;
                        }
                        else {
                            prevEnabledOption = option;
                            break;
                        }
                    }
                }
            }
            return prevEnabledOption;
        };
        Dropdown.prototype.findNextEnabledOption = function (index) {
            var nextEnabledOption;
            if (this.optionsToDisplay && this.optionsToDisplay.length) {
                for (var i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
                if (!nextEnabledOption) {
                    for (var i = 0; i < index; i++) {
                        var option = this.optionsToDisplay[i];
                        if (option.disabled) {
                            continue;
                        }
                        else {
                            nextEnabledOption = option;
                            break;
                        }
                    }
                }
            }
            return nextEnabledOption;
        };
        Dropdown.prototype.onKeydown = function (event, search) {
            if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
                return;
            }
            switch (event.which) {
                //down
                case 40:
                    if (!this.overlayVisible && event.altKey) {
                        this.show();
                    }
                    else {
                        if (this.group) {
                            var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                            if (selectedItemIndex !== -1) {
                                var nextItemIndex = selectedItemIndex.itemIndex + 1;
                                if (nextItemIndex < (this.optionsToDisplay[selectedItemIndex.groupIndex].items.length)) {
                                    this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                                    this.selectedOptionUpdated = true;
                                }
                                else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                    this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                                    this.selectedOptionUpdated = true;
                                }
                            }
                            else {
                                this.selectItem(event, this.optionsToDisplay[0].items[0]);
                            }
                        }
                        else {
                            var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                            var nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                            if (nextEnabledOption) {
                                this.selectItem(event, nextEnabledOption);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (this.group) {
                        var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            var prevItemIndex = selectedItemIndex.itemIndex - 1;
                            if (prevItemIndex >= 0) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[prevItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (prevItemIndex < 0) {
                                var prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                                if (prevGroup) {
                                    this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                                    this.selectedOptionUpdated = true;
                                }
                            }
                        }
                    }
                    else {
                        var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        var prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                        if (prevEnabledOption) {
                            this.selectItem(event, prevEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                    event.preventDefault();
                    break;
                //space
                case 32:
                case 32:
                    if (!this.overlayVisible) {
                        this.show();
                        event.preventDefault();
                    }
                    break;
                //enter
                case 13:
                    if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                        this.hide(event);
                    }
                    event.preventDefault();
                    break;
                //escape and tab
                case 27:
                case 9:
                    this.hide(event);
                    break;
                //search item based on keyboard input
                default:
                    if (search) {
                        this.search(event);
                    }
                    break;
            }
        };
        Dropdown.prototype.search = function (event) {
            var _this = this;
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            var char = event.key;
            this.previousSearchChar = this.currentSearchChar;
            this.currentSearchChar = char;
            if (this.previousSearchChar === this.currentSearchChar)
                this.searchValue = this.currentSearchChar;
            else
                this.searchValue = this.searchValue ? this.searchValue + char : char;
            var newOption;
            if (this.group) {
                var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
                newOption = this.searchOptionWithinGroup(searchIndex);
            }
            else {
                var searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                newOption = this.searchOption(++searchIndex);
            }
            if (newOption && !newOption.disabled) {
                this.selectItem(event, newOption);
                this.selectedOptionUpdated = true;
            }
            this.searchTimeout = setTimeout(function () {
                _this.searchValue = null;
            }, 250);
        };
        Dropdown.prototype.searchOption = function (index) {
            var option;
            if (this.searchValue) {
                option = this.searchOptionInRange(index, this.optionsToDisplay.length);
                if (!option) {
                    option = this.searchOptionInRange(0, index);
                }
            }
            return option;
        };
        Dropdown.prototype.searchOptionInRange = function (start, end) {
            for (var i = start; i < end; i++) {
                var opt = this.optionsToDisplay[i];
                if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                    return opt;
                }
            }
            return null;
        };
        Dropdown.prototype.searchOptionWithinGroup = function (index) {
            var option;
            if (this.searchValue) {
                for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                    for (var j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.optionsToDisplay[i].items.length; j++) {
                        var opt = this.optionsToDisplay[i].items[j];
                        if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                            return opt;
                        }
                    }
                }
                if (!option) {
                    for (var i = 0; i <= index.groupIndex; i++) {
                        for (var j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.optionsToDisplay[i].items.length); j++) {
                            var opt = this.optionsToDisplay[i].items[j];
                            if (opt.label.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !opt.disabled) {
                                return opt;
                            }
                        }
                    }
                }
            }
            return null;
        };
        Dropdown.prototype.findOptionIndex = function (val, opts) {
            var index = -1;
            if (opts) {
                for (var i = 0; i < opts.length; i++) {
                    if ((val == null && opts[i].value == null) || utils.ObjectUtils.equals(val, opts[i].value, this.dataKey)) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        Dropdown.prototype.findOptionGroupIndex = function (val, opts) {
            var groupIndex, itemIndex;
            if (opts) {
                for (var i = 0; i < opts.length; i++) {
                    groupIndex = i;
                    itemIndex = this.findOptionIndex(val, opts[i].items);
                    if (itemIndex !== -1) {
                        break;
                    }
                }
            }
            if (itemIndex !== -1) {
                return { groupIndex: groupIndex, itemIndex: itemIndex };
            }
            else {
                return -1;
            }
        };
        Dropdown.prototype.findOption = function (val, opts, inGroup) {
            var e_1, _a;
            if (this.group && !inGroup) {
                var opt = void 0;
                if (opts && opts.length) {
                    try {
                        for (var opts_1 = __values(opts), opts_1_1 = opts_1.next(); !opts_1_1.done; opts_1_1 = opts_1.next()) {
                            var optgroup = opts_1_1.value;
                            opt = this.findOption(val, optgroup.items, true);
                            if (opt) {
                                break;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (opts_1_1 && !opts_1_1.done && (_a = opts_1.return)) _a.call(opts_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return opt;
            }
            else {
                var index = this.findOptionIndex(val, opts);
                return (index != -1) ? opts[index] : null;
            }
        };
        Dropdown.prototype.onFilter = function (event) {
            var inputValue = event.target.value;
            if (inputValue && inputValue.length) {
                this.filterValue = inputValue;
                this.activateFilter();
            }
            else {
                this.filterValue = null;
                this.optionsToDisplay = this.options;
            }
            this.optionsChanged = true;
        };
        Dropdown.prototype.activateFilter = function () {
            var e_2, _a;
            var searchFields = this.filterBy.split(',');
            if (this.options && this.options.length) {
                if (this.group) {
                    var filteredGroups = [];
                    try {
                        for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var optgroup = _c.value;
                            var filteredSubOptions = utils.FilterUtils.filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                            if (filteredSubOptions && filteredSubOptions.length) {
                                filteredGroups.push({
                                    label: optgroup.label,
                                    value: optgroup.value,
                                    items: filteredSubOptions
                                });
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    this.optionsToDisplay = filteredGroups;
                }
                else {
                    this.optionsToDisplay = utils.FilterUtils.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                }
                this.optionsChanged = true;
            }
        };
        Dropdown.prototype.applyFocus = function () {
            if (this.editable)
                dom.DomHandler.findSingle(this.el.nativeElement, '.p-dropdown-label.p-inputtext').focus();
            else
                dom.DomHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
        };
        Dropdown.prototype.focus = function () {
            this.applyFocus();
        };
        Dropdown.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                    if (_this.isOutsideClicked(event)) {
                        _this.hide(event);
                        _this.unbindDocumentClickListener();
                    }
                    _this.cd.markForCheck();
                });
            }
        };
        Dropdown.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        Dropdown.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        Dropdown.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        Dropdown.prototype.onWindowResize = function () {
            if (!dom.DomHandler.isAndroid()) {
                this.hide(event);
            }
        };
        Dropdown.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.containerViewChild.nativeElement, function (event) {
                    if (_this.overlayVisible) {
                        _this.hide(event);
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        Dropdown.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        Dropdown.prototype.updateFilledState = function () {
            this.filled = (this.selectedOption != null);
        };
        Dropdown.prototype.clear = function (event) {
            this.value = null;
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
            this.updateSelectedOption(this.value);
            this.updateEditableLabel();
            this.updateFilledState();
        };
        Dropdown.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.overlay = null;
            this.itemsWrapper = null;
            this.onModelTouched();
        };
        Dropdown.prototype.ngOnDestroy = function () {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.restoreOverlayAppend();
            this.onOverlayHide();
        };
Dropdown.ɵfac = function Dropdown_Factory(t) { return new (t || Dropdown)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
Dropdown.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dropdown, selectors: [["p-dropdown"]], contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dropdown_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewPort = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
    } }, hostVars: 4, hostBindings: function Dropdown_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused);
    } }, inputs: { scrollHeight: "scrollHeight", filterBy: "filterBy", resetFilterOnHide: "resetFilterOnHide", dropdownIcon: "dropdownIcon", autoDisplayFirst: "autoDisplayFirst", emptyFilterMessage: "emptyFilterMessage", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", filterMatchMode: "filterMatchMode", tooltip: "tooltip", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", autofocusFilter: "autofocusFilter", disabled: "disabled", options: "options", filter: "filter", name: "name", style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", readonly: "readonly", required: "required", editable: "editable", appendTo: "appendTo", tabindex: "tabindex", placeholder: "placeholder", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", inputId: "inputId", selectId: "selectId", dataKey: "dataKey", autofocus: "autofocus", optionLabel: "optionLabel", group: "group", showClear: "showClear", virtualScroll: "virtualScroll", itemSize: "itemSize", ariaFilterLabel: "ariaFilterLabel", ariaLabelledBy: "ariaLabelledBy", maxlength: "maxlength", tooltipStyleClass: "tooltipStyleClass" }, outputs: { onChange: "onChange", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide" }, features: [ɵngcc0.ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])], decls: 12, vars: 23, consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", "role", "listbox", 3, "disabled", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "click", "input", "focus", "blur", 4, "ngIf"], ["class", "p-dropdown-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "click", "input", "focus", "blur"], ["editableInput", ""], [1, "p-dropdown-clear-icon", "pi", "pi-times", 3, "click"], [3, "ngClass", "ngStyle"], ["class", "p-dropdown-header", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], ["role", "listbox", 1, "p-dropdown-items"], ["itemslist", ""], ["class", "p-dropdown-empty-message", 4, "ngIf"], [1, "p-dropdown-header"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], [1, "p-dropdown-filter-icon", "pi", "pi-search"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], [3, "option", "selected", "template", "onClick"], [3, "ngStyle", "itemSize", "scrolledIndexChange", 4, "ngIf"], [3, "ngStyle", "itemSize", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "p-dropdown-empty-message"]], template: function Dropdown_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) { return ctx.onMouseclick($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "input", 3, 4);
        ɵngcc0.ɵɵlistener("focus", function Dropdown_Template_input_focus_3_listener($event) { return ctx.onInputFocus($event); })("blur", function Dropdown_Template_input_blur_3_listener($event) { return ctx.onInputBlur($event); })("keydown", function Dropdown_Template_input_keydown_3_listener($event) { return ctx.onKeydown($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, Dropdown_span_5_Template, 3, 12, "span", 5);
        ɵngcc0.ɵɵtemplate(6, Dropdown_span_6_Template, 2, 4, "span", 6);
        ɵngcc0.ɵɵtemplate(7, Dropdown_input_7_Template, 2, 5, "input", 7);
        ɵngcc0.ɵɵtemplate(8, Dropdown_i_8_Template, 1, 0, "i", 8);
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelement(10, "span", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, Dropdown_div_11_Template, 9, 16, "div", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(18, _c12, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("id", ctx.inputId)("aria-label", ctx.selectedOption ? ctx.selectedOption.label : " ")("aria-expanded", ctx.overlayVisible)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("autofocus", ctx.autofocus);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label != null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editable && ctx.label == null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value != null && ctx.showClear && !ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.overlayVisible);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.dropdownIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.overlayVisible);
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc2.NgIf, ɵngcc3.Tooltip, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgForOf, DropdownItem, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-dropdown{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{-ms-flex:1 1 auto;cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:-ms-flexbox;display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"], encapsulation: 2, data: { animation: [
            animations.trigger('overlayAnimation', [
                animations.transition(':enter', [
                    animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition(':leave', [
                    animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dropdown, [{
        type: core.Component,
        args: [{
                selector: 'p-dropdown',
                template: "\n         <div #container [ngClass]=\"{'p-dropdown p-component':true,\n            'p-disabled':disabled, 'p-dropdown-open':overlayVisible, 'p-focus':focused, 'p-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" [attr.aria-labelledby]=\"ariaLabelledBy\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\"\n                    [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\" role=\"listbox\">\n            </div>\n            <span [ngClass]=\"{'p-dropdown-label p-inputtext':true,'p-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n            </span>\n            <span [ngClass]=\"{'p-dropdown-label p-inputtext p-placeholder':true,'p-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</span>\n            <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"p-dropdown-label p-inputtext\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\" (click)=\"onEditableInputClick()\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n            <i class=\"p-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            <div class=\"p-dropdown-trigger\" role=\"button\" aria-haspopup=\"listbox\" [attr.aria-expanded]=\"overlayVisible\">\n                <span class=\"p-dropdown-trigger-icon\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'p-dropdown-panel p-component'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div class=\"p-dropdown-header\" *ngIf=\"filter\" >\n                    <div class=\"p-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"p-dropdown-filter p-inputtext p-component\" [attr.placeholder]=\"filterPlaceholder\"\n                        (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                        <span class=\"p-dropdown-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                <div class=\"p-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"p-dropdown-items\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"p-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">\n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && (!optionsToDisplay || (optionsToDisplay && optionsToDisplay.length === 0))\" class=\"p-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('overlayAnimation', [
                        animations.transition(':enter', [
                            animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition(':leave', [
                            animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                        ])
                    ])
                ],
                host: {
                    '[class.p-inputwrapper-filled]': 'filled',
                    '[class.p-inputwrapper-focus]': 'focused'
                },
                providers: [DROPDOWN_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-dropdown{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;user-select:none}.p-dropdown-clear-icon{margin-top:-.5rem;position:absolute;top:50%}.p-dropdown-trigger{-ms-flex-align:center;-ms-flex-negative:0;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:center}.p-dropdown-label{-ms-flex:1 1 auto;cursor:pointer;display:block;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:1%}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-panel{position:absolute}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;overflow:hidden;position:relative;white-space:nowrap}.p-dropdown-items{list-style-type:none;margin:0;padding:0}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-fluid .p-dropdown{display:-ms-flexbox;display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], resetFilterOnHide: [{
            type: core.Input
        }], dropdownIcon: [{
            type: core.Input
        }], autoDisplayFirst: [{
            type: core.Input
        }], emptyFilterMessage: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], filterMatchMode: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], tooltipPosition: [{
            type: core.Input
        }], tooltipPositionStyle: [{
            type: core.Input
        }], autofocusFilter: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onFocus: [{
            type: core.Output
        }], onBlur: [{
            type: core.Output
        }], onClick: [{
            type: core.Output
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], options: [{
            type: core.Input
        }], filter: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], panelStyle: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], panelStyleClass: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], editable: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], filterPlaceholder: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], inputId: [{
            type: core.Input
        }], selectId: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], autofocus: [{
            type: core.Input
        }], optionLabel: [{
            type: core.Input
        }], group: [{
            type: core.Input
        }], showClear: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], ariaFilterLabel: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], maxlength: [{
            type: core.Input
        }], tooltipStyleClass: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], filterViewChild: [{
            type: core.ViewChild,
            args: ['filter']
        }], accessibleViewChild: [{
            type: core.ViewChild,
            args: ['in']
        }], viewPort: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }], editableInputViewChild: [{
            type: core.ViewChild,
            args: ['editableInput']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Dropdown;
    }());
    Dropdown.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    Dropdown.propDecorators = {
        scrollHeight: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        name: [{ type: core.Input }],
        style: [{ type: core.Input }],
        panelStyle: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        panelStyleClass: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        required: [{ type: core.Input }],
        editable: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        filterPlaceholder: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        selectId: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        autofocus: [{ type: core.Input }],
        resetFilterOnHide: [{ type: core.Input }],
        dropdownIcon: [{ type: core.Input }],
        optionLabel: [{ type: core.Input }],
        autoDisplayFirst: [{ type: core.Input }],
        group: [{ type: core.Input }],
        showClear: [{ type: core.Input }],
        emptyFilterMessage: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        ariaFilterLabel: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        filterMatchMode: [{ type: core.Input }],
        maxlength: [{ type: core.Input }],
        tooltip: [{ type: core.Input }],
        tooltipPosition: [{ type: core.Input }],
        tooltipPositionStyle: [{ type: core.Input }],
        tooltipStyleClass: [{ type: core.Input }],
        autofocusFilter: [{ type: core.Input }],
        onChange: [{ type: core.Output }],
        onFocus: [{ type: core.Output }],
        onBlur: [{ type: core.Output }],
        onClick: [{ type: core.Output }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        filterViewChild: [{ type: core.ViewChild, args: ['filter',] }],
        accessibleViewChild: [{ type: core.ViewChild, args: ['in',] }],
        viewPort: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }],
        editableInputViewChild: [{ type: core.ViewChild, args: ['editableInput',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        disabled: [{ type: core.Input }],
        options: [{ type: core.Input }]
    };
    var DropdownModule = /** @class */ (function () {
        function DropdownModule() {
        }
DropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DropdownModule_Factory(t) { return new (t || DropdownModule)(); }, imports: [[common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule], ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: [Dropdown, DropdownItem], imports: [ɵngcc2.CommonModule, ɵngcc5.SharedModule, ɵngcc4.ScrollingModule, ɵngcc3.TooltipModule, ɵngcc1.RippleModule], exports: [Dropdown, ɵngcc5.SharedModule, ɵngcc4.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, scrolling.ScrollingModule, tooltip.TooltipModule, ripple.RippleModule],
                exports: [Dropdown, api.SharedModule, scrolling.ScrollingModule],
                declarations: [Dropdown, DropdownItem]
            }]
    }], function () { return []; }, null); })();
        return DropdownModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DROPDOWN_VALUE_ACCESSOR = DROPDOWN_VALUE_ACCESSOR;
    exports.Dropdown = Dropdown;
    exports.DropdownItem = DropdownItem;
    exports.DropdownModule = DropdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-dropdown.umd.js.map