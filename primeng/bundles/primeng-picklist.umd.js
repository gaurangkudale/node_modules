(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/button'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('primeng/api'), require('primeng/dom'), require('primeng/ripple'), require('primeng/utils')) :
    typeof define === 'function' && define.amd ? define('primeng/picklist', ['@angular/core','@angular/common','primeng/button','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/button', 'primeng/api', 'primeng/dom', 'primeng/ripple', 'primeng/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.button,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.picklist = {}), global.ng.core, global.ng.common, global.primeng.button, global.primeng.api, global.primeng.dom, global.primeng.ripple, global.primeng.utils));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, common, button, api, dom, ripple, utils) { 
var _c0 = ["sourcelist"];
var _c1 = ["targetlist"];
var _c2 = ["sourceFilter"];
var _c3 = ["targetFilter"];
function PickList_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r12.moveUp(_r3, ctx_r12.source, ctx_r12.selectedItemsSource, ctx_r12.onSourceReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r14.moveTop(_r3, ctx_r14.source, ctx_r14.selectedItemsSource, ctx_r14.onSourceReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r15 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r15.moveDown(_r3, ctx_r15.source, ctx_r15.selectedItemsSource, ctx_r15.onSourceReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_1_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r16 = ɵngcc0.ɵɵnextContext(); var _r3 = ɵngcc0.ɵɵreference(6); return ctx_r16.moveBottom(_r3, ctx_r16.source, ctx_r16.selectedItemsSource, ctx_r16.onSourceReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
} }
function PickList_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵelementStart(1, "div", 24);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.sourceHeader);
} }
function PickList_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 28);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_4_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onFilter($event, ctx_r18.source, ctx_r18.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r2.sourceFilterPlaceholder)("aria-label", ctx_r2.ariaSourceFilterLabel);
} }
var _c4 = function (a0) { return { "p-picklist-droppoint-highlight": a0 }; };
function PickList_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 34);
    ɵngcc0.ɵɵlistener("dragover", function PickList_ng_template_7_li_0_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var i_r21 = ɵngcc0.ɵɵnextContext().index; var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onDragOver($event, i_r21, ctx_r26.SOURCE_LIST); })("drop", function PickList_ng_template_7_li_0_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var i_r21 = ɵngcc0.ɵɵnextContext().index; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onDrop($event, i_r21, ctx_r29.SOURCE_LIST); })("dragleave", function PickList_ng_template_7_li_0_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.onDragLeave($event, ctx_r31.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = ɵngcc0.ɵɵnextContext();
    var item_r20 = ctx_r32.$implicit;
    var i_r21 = ctx_r32.index;
    var ctx_r23 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r23.isItemVisible(item_r20, ctx_r23.SOURCE_LIST) ? "block" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c4, i_r21 === ctx_r23.dragOverItemIndexSource));
} }
function PickList_ng_template_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_template_7_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 34);
    ɵngcc0.ɵɵlistener("dragover", function PickList_ng_template_7_li_3_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var i_r21 = ɵngcc0.ɵɵnextContext().index; var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onDragOver($event, i_r21 + 1, ctx_r33.SOURCE_LIST); })("drop", function PickList_ng_template_7_li_3_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var i_r21 = ɵngcc0.ɵɵnextContext().index; var ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onDrop($event, i_r21 + 1, ctx_r36.SOURCE_LIST); })("dragleave", function PickList_ng_template_7_li_3_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r38 = ɵngcc0.ɵɵnextContext(2); return ctx_r38.onDragLeave($event, ctx_r38.SOURCE_LIST); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r21 = ɵngcc0.ɵɵnextContext().index;
    var ctx_r25 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, i_r21 + 1 === ctx_r25.dragOverItemIndexSource));
} }
var _c5 = function (a1, a2) { return { "p-picklist-item": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c6 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function PickList_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_7_li_0_Template, 1, 5, "li", 30);
    ɵngcc0.ɵɵelementStart(1, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_7_Template_li_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var item_r20 = ctx.$implicit; var ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.onItemClick($event, item_r20, ctx_r40.selectedItemsSource, ctx_r40.onSourceSelect); })("dblclick", function PickList_ng_template_7_Template_li_dblclick_1_listener() { ɵngcc0.ɵɵrestoreView(_r41); var ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.onSourceItemDblClick(); })("touchend", function PickList_ng_template_7_Template_li_touchend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var ctx_r43 = ɵngcc0.ɵɵnextContext(); return ctx_r43.onItemTouchEnd($event); })("keydown", function PickList_ng_template_7_Template_li_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var item_r20 = ctx.$implicit; var ctx_r44 = ɵngcc0.ɵɵnextContext(); return ctx_r44.onItemKeydown($event, item_r20, ctx_r44.selectedItemsSource, ctx_r44.onSourceSelect); })("dragstart", function PickList_ng_template_7_Template_li_dragstart_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var i_r21 = ctx.index; var ctx_r45 = ɵngcc0.ɵɵnextContext(); return ctx_r45.onDragStart($event, i_r21, ctx_r45.SOURCE_LIST); })("dragend", function PickList_ng_template_7_Template_li_dragend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); var ctx_r46 = ɵngcc0.ɵɵnextContext(); return ctx_r46.onDragEnd($event); });
    ɵngcc0.ɵɵtemplate(2, PickList_ng_template_7_ng_container_2_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, PickList_ng_template_7_li_3_Template, 1, 3, "li", 33);
} if (rf & 2) {
    var item_r20 = ctx.$implicit;
    var i_r21 = ctx.index;
    var l_r22 = ctx.last;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.dragdrop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("display", ctx_r4.isItemVisible(item_r20, ctx_r4.SOURCE_LIST) ? "block" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c5, ctx_r4.isSelected(item_r20, ctx_r4.selectedItemsSource), ctx_r4.disabled));
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r4.isSelected(item_r20, ctx_r4.selectedItemsSource))("draggable", ctx_r4.dragdrop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(12, _c6, item_r20, i_r21));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.dragdrop && l_r22);
} }
function PickList_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 35);
    ɵngcc0.ɵɵtemplate(2, PickList_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 36);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.emptyMessageSourceTemplate);
} }
function PickList_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r48 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r48.targetHeader);
} }
function PickList_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, PickList_div_15_div_1_Template, 2, 1, "div", 37);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.targetHeader);
} }
function PickList_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵelementStart(2, "input", 27, 38);
    ɵngcc0.ɵɵlistener("keyup", function PickList_div_16_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r51); var ctx_r50 = ɵngcc0.ɵɵnextContext(); return ctx_r50.onFilter($event, ctx_r50.target, ctx_r50.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "span", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r7.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r7.targetFilterPlaceholder)("aria-label", ctx_r7.ariaTargetFilterLabel);
} }
function PickList_ng_template_19_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r59 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 34);
    ɵngcc0.ɵɵlistener("dragover", function PickList_ng_template_19_li_0_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); var i_r53 = ɵngcc0.ɵɵnextContext().index; var ctx_r58 = ɵngcc0.ɵɵnextContext(); return ctx_r58.onDragOver($event, i_r53, ctx_r58.TARGET_LIST); })("drop", function PickList_ng_template_19_li_0_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); var i_r53 = ɵngcc0.ɵɵnextContext().index; var ctx_r61 = ɵngcc0.ɵɵnextContext(); return ctx_r61.onDrop($event, i_r53, ctx_r61.TARGET_LIST); })("dragleave", function PickList_ng_template_19_li_0_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r59); var ctx_r63 = ɵngcc0.ɵɵnextContext(2); return ctx_r63.onDragLeave($event, ctx_r63.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r64 = ɵngcc0.ɵɵnextContext();
    var item_r52 = ctx_r64.$implicit;
    var i_r53 = ctx_r64.index;
    var ctx_r55 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r55.isItemVisible(item_r52, ctx_r55.TARGET_LIST) ? "block" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c4, i_r53 === ctx_r55.dragOverItemIndexTarget));
} }
function PickList_ng_template_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_template_19_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 34);
    ɵngcc0.ɵɵlistener("dragover", function PickList_ng_template_19_li_3_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); var i_r53 = ɵngcc0.ɵɵnextContext().index; var ctx_r65 = ɵngcc0.ɵɵnextContext(); return ctx_r65.onDragOver($event, i_r53 + 1, ctx_r65.TARGET_LIST); })("drop", function PickList_ng_template_19_li_3_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); var i_r53 = ɵngcc0.ɵɵnextContext().index; var ctx_r68 = ɵngcc0.ɵɵnextContext(); return ctx_r68.onDrop($event, i_r53 + 1, ctx_r68.TARGET_LIST); })("dragleave", function PickList_ng_template_19_li_3_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); var ctx_r70 = ɵngcc0.ɵɵnextContext(2); return ctx_r70.onDragLeave($event, ctx_r70.TARGET_LIST); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r53 = ɵngcc0.ɵɵnextContext().index;
    var ctx_r57 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, i_r53 + 1 === ctx_r57.dragOverItemIndexTarget));
} }
function PickList_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    var _r73 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵtemplate(0, PickList_ng_template_19_li_0_Template, 1, 5, "li", 30);
    ɵngcc0.ɵɵelementStart(1, "li", 31);
    ɵngcc0.ɵɵlistener("click", function PickList_ng_template_19_Template_li_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var item_r52 = ctx.$implicit; var ctx_r72 = ɵngcc0.ɵɵnextContext(); return ctx_r72.onItemClick($event, item_r52, ctx_r72.selectedItemsTarget, ctx_r72.onTargetSelect); })("dblclick", function PickList_ng_template_19_Template_li_dblclick_1_listener() { ɵngcc0.ɵɵrestoreView(_r73); var ctx_r74 = ɵngcc0.ɵɵnextContext(); return ctx_r74.onTargetItemDblClick(); })("touchend", function PickList_ng_template_19_Template_li_touchend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var ctx_r75 = ɵngcc0.ɵɵnextContext(); return ctx_r75.onItemTouchEnd($event); })("keydown", function PickList_ng_template_19_Template_li_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var item_r52 = ctx.$implicit; var ctx_r76 = ɵngcc0.ɵɵnextContext(); return ctx_r76.onItemKeydown($event, item_r52, ctx_r76.selectedItemsTarget, ctx_r76.onTargetSelect); })("dragstart", function PickList_ng_template_19_Template_li_dragstart_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var i_r53 = ctx.index; var ctx_r77 = ɵngcc0.ɵɵnextContext(); return ctx_r77.onDragStart($event, i_r53, ctx_r77.TARGET_LIST); })("dragend", function PickList_ng_template_19_Template_li_dragend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r73); var ctx_r78 = ɵngcc0.ɵɵnextContext(); return ctx_r78.onDragEnd($event); });
    ɵngcc0.ɵɵtemplate(2, PickList_ng_template_19_ng_container_2_Template, 1, 0, "ng-container", 32);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, PickList_ng_template_19_li_3_Template, 1, 3, "li", 33);
} if (rf & 2) {
    var item_r52 = ctx.$implicit;
    var i_r53 = ctx.index;
    var l_r54 = ctx.last;
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.dragdrop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("display", ctx_r9.isItemVisible(item_r52, ctx_r9.TARGET_LIST) ? "block" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(9, _c5, ctx_r9.isSelected(item_r52, ctx_r9.selectedItemsTarget), ctx_r9.disabled));
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r9.isSelected(item_r52, ctx_r9.selectedItemsTarget))("draggable", ctx_r9.dragdrop);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(12, _c6, item_r52, i_r53));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.dragdrop && l_r54);
} }
function PickList_ng_container_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function PickList_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "li", 35);
    ɵngcc0.ɵɵtemplate(2, PickList_ng_container_20_ng_container_2_Template, 1, 0, "ng-container", 36);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r10.emptyMessageTargetTemplate);
} }
function PickList_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r81 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 39);
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r81); var ctx_r80 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r80.moveUp(_r8, ctx_r80.target, ctx_r80.selectedItemsTarget, ctx_r80.onTargetReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "button", 20);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r81); var ctx_r82 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r82.moveTop(_r8, ctx_r82.target, ctx_r82.selectedItemsTarget, ctx_r82.onTargetReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 21);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r81); var ctx_r83 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r83.moveDown(_r8, ctx_r83.target, ctx_r83.selectedItemsTarget, ctx_r83.onTargetReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 22);
    ɵngcc0.ɵɵlistener("click", function PickList_div_21_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r81); var ctx_r84 = ɵngcc0.ɵɵnextContext(); var _r8 = ɵngcc0.ɵɵreference(18); return ctx_r84.moveBottom(_r8, ctx_r84.target, ctx_r84.selectedItemsTarget, ctx_r84.onTargetReorder); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.disabled);
} }
var _c7 = function (a0) { return { "p-picklist-list-highlight": a0 }; };
'use strict';

    var PickList = /** @class */ (function () {
        function PickList(el, cd) {
            this.el = el;
            this.cd = cd;
            this.trackBy = function (index, item) { return item; };
            this.showSourceFilter = true;
            this.showTargetFilter = true;
            this.metaKeySelection = true;
            this.showSourceControls = true;
            this.showTargetControls = true;
            this.disabled = false;
            this.filterMatchMode = "contains";
            this.onMoveToSource = new core.EventEmitter();
            this.onMoveAllToSource = new core.EventEmitter();
            this.onMoveAllToTarget = new core.EventEmitter();
            this.onMoveToTarget = new core.EventEmitter();
            this.onSourceReorder = new core.EventEmitter();
            this.onTargetReorder = new core.EventEmitter();
            this.onSourceSelect = new core.EventEmitter();
            this.onTargetSelect = new core.EventEmitter();
            this.onSourceFilter = new core.EventEmitter();
            this.onTargetFilter = new core.EventEmitter();
            this.selectedItemsSource = [];
            this.selectedItemsTarget = [];
            this.SOURCE_LIST = -1;
            this.TARGET_LIST = 1;
        }
        PickList.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'emptymessagesource':
                        _this.emptyMessageSourceTemplate = item.template;
                        break;
                    case 'emptymessagetarget':
                        _this.emptyMessageTargetTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        PickList.prototype.ngAfterViewChecked = function () {
            if (this.movedUp || this.movedDown) {
                var listItems = dom.DomHandler.find(this.reorderedListElement, 'li.p-highlight');
                var listItem = void 0;
                if (this.movedUp)
                    listItem = listItems[0];
                else
                    listItem = listItems[listItems.length - 1];
                dom.DomHandler.scrollInView(this.reorderedListElement, listItem);
                this.movedUp = false;
                this.movedDown = false;
                this.reorderedListElement = null;
            }
        };
        PickList.prototype.onItemClick = function (event, item, selectedItems, callback) {
            if (this.disabled) {
                return;
            }
            var index = this.findIndexInSelection(item, selectedItems);
            var selected = (index != -1);
            var metaSelection = this.itemTouched ? false : this.metaKeySelection;
            if (metaSelection) {
                var metaKey = (event.metaKey || event.ctrlKey || event.shiftKey);
                if (selected && metaKey) {
                    selectedItems.splice(index, 1);
                }
                else {
                    if (!metaKey) {
                        selectedItems.length = 0;
                    }
                    selectedItems.push(item);
                }
            }
            else {
                if (selected)
                    selectedItems.splice(index, 1);
                else
                    selectedItems.push(item);
            }
            callback.emit({ originalEvent: event, items: selectedItems });
            this.itemTouched = false;
        };
        PickList.prototype.onSourceItemDblClick = function () {
            if (this.disabled) {
                return;
            }
            this.moveRight();
        };
        PickList.prototype.onTargetItemDblClick = function () {
            if (this.disabled) {
                return;
            }
            this.moveLeft();
        };
        PickList.prototype.onFilter = function (event, data, listType) {
            var query = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
            this.filter(query, data, listType);
        };
        PickList.prototype.filter = function (query, data, listType) {
            var searchFields = this.filterBy.split(',');
            if (listType === this.SOURCE_LIST) {
                this.filterValueSource = query;
                this.visibleOptionsSource = utils.FilterUtils.filter(data, searchFields, this.filterValueSource, this.filterMatchMode, this.filterLocale);
                this.onSourceFilter.emit({ query: this.filterValueSource, value: this.visibleOptionsSource });
            }
            else if (listType === this.TARGET_LIST) {
                this.filterValueTarget = query;
                this.visibleOptionsTarget = utils.FilterUtils.filter(data, searchFields, this.filterValueTarget, this.filterMatchMode, this.filterLocale);
                this.onTargetFilter.emit({ query: this.filterValueTarget, value: this.visibleOptionsTarget });
            }
        };
        PickList.prototype.isItemVisible = function (item, listType) {
            if (listType == this.SOURCE_LIST)
                return this.isVisibleInList(this.visibleOptionsSource, item, this.filterValueSource);
            else
                return this.isVisibleInList(this.visibleOptionsTarget, item, this.filterValueTarget);
        };
        PickList.prototype.isVisibleInList = function (data, item, filterValue) {
            if (filterValue && filterValue.trim().length) {
                for (var i = 0; i < data.length; i++) {
                    if (item == data[i]) {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        };
        PickList.prototype.onItemTouchEnd = function (event) {
            if (this.disabled) {
                return;
            }
            this.itemTouched = true;
        };
        PickList.prototype.sortByIndexInList = function (items, list) {
            var _this = this;
            return items.sort(function (item1, item2) { return _this.findIndexInList(item1, list) - _this.findIndexInList(item2, list); });
        };
        PickList.prototype.moveUp = function (listElement, list, selectedItems, callback) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != 0) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex - 1];
                        list[selectedItemIndex - 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }
                this.movedUp = true;
                this.reorderedListElement = listElement;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveTop = function (listElement, list, selectedItems, callback) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = 0; i < selectedItems.length; i++) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != 0) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.unshift(movedItem);
                    }
                    else {
                        break;
                    }
                }
                listElement.scrollTop = 0;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveDown = function (listElement, list, selectedItems, callback) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != (list.length - 1)) {
                        var movedItem = list[selectedItemIndex];
                        var temp = list[selectedItemIndex + 1];
                        list[selectedItemIndex + 1] = movedItem;
                        list[selectedItemIndex] = temp;
                    }
                    else {
                        break;
                    }
                }
                this.movedDown = true;
                this.reorderedListElement = listElement;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveBottom = function (listElement, list, selectedItems, callback) {
            if (selectedItems && selectedItems.length) {
                selectedItems = this.sortByIndexInList(selectedItems, list);
                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    var selectedItem = selectedItems[i];
                    var selectedItemIndex = this.findIndexInList(selectedItem, list);
                    if (selectedItemIndex != (list.length - 1)) {
                        var movedItem = list.splice(selectedItemIndex, 1)[0];
                        list.push(movedItem);
                    }
                    else {
                        break;
                    }
                }
                listElement.scrollTop = listElement.scrollHeight;
                callback.emit({ items: selectedItems });
            }
        };
        PickList.prototype.moveRight = function () {
            if (this.selectedItemsSource && this.selectedItemsSource.length) {
                for (var i = 0; i < this.selectedItemsSource.length; i++) {
                    var selectedItem = this.selectedItemsSource[i];
                    if (this.findIndexInList(selectedItem, this.target) == -1) {
                        this.target.push(this.source.splice(this.findIndexInList(selectedItem, this.source), 1)[0]);
                    }
                }
                this.onMoveToTarget.emit({
                    items: this.selectedItemsSource
                });
                this.selectedItemsSource = [];
                if (this.filterValueTarget) {
                    this.filter(this.filterValueTarget, this.target, this.TARGET_LIST);
                }
            }
        };
        PickList.prototype.moveAllRight = function () {
            if (this.source) {
                var movedItems = [];
                for (var i = 0; i < this.source.length; i++) {
                    if (this.isItemVisible(this.source[i], this.SOURCE_LIST)) {
                        var removedItem = this.source.splice(i, 1)[0];
                        this.target.push(removedItem);
                        movedItems.push(removedItem);
                        i--;
                    }
                }
                this.onMoveToTarget.emit({
                    items: movedItems
                });
                this.onMoveAllToTarget.emit({
                    items: movedItems
                });
                this.selectedItemsSource = [];
                if (this.filterValueTarget) {
                    this.filter(this.filterValueTarget, this.target, this.TARGET_LIST);
                }
            }
        };
        PickList.prototype.moveLeft = function () {
            if (this.selectedItemsTarget && this.selectedItemsTarget.length) {
                for (var i = 0; i < this.selectedItemsTarget.length; i++) {
                    var selectedItem = this.selectedItemsTarget[i];
                    if (this.findIndexInList(selectedItem, this.source) == -1) {
                        this.source.push(this.target.splice(this.findIndexInList(selectedItem, this.target), 1)[0]);
                    }
                }
                this.onMoveToSource.emit({
                    items: this.selectedItemsTarget
                });
                this.selectedItemsTarget = [];
                if (this.filterValueSource) {
                    this.filter(this.filterValueSource, this.source, this.SOURCE_LIST);
                }
            }
        };
        PickList.prototype.moveAllLeft = function () {
            if (this.target) {
                var movedItems = [];
                for (var i = 0; i < this.target.length; i++) {
                    if (this.isItemVisible(this.target[i], this.TARGET_LIST)) {
                        var removedItem = this.target.splice(i, 1)[0];
                        this.source.push(removedItem);
                        movedItems.push(removedItem);
                        i--;
                    }
                }
                this.onMoveToSource.emit({
                    items: movedItems
                });
                this.onMoveAllToSource.emit({
                    items: movedItems
                });
                this.selectedItemsTarget = [];
                if (this.filterValueSource) {
                    this.filter(this.filterValueSource, this.source, this.SOURCE_LIST);
                }
            }
        };
        PickList.prototype.isSelected = function (item, selectedItems) {
            return this.findIndexInSelection(item, selectedItems) != -1;
        };
        PickList.prototype.findIndexInSelection = function (item, selectedItems) {
            return this.findIndexInList(item, selectedItems);
        };
        PickList.prototype.findIndexInList = function (item, list) {
            var index = -1;
            if (list) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i] == item) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        PickList.prototype.onDragStart = function (event, index, listType) {
            event.dataTransfer.setData('text', 'b'); // For firefox
            event.target.blur();
            this.dragging = true;
            this.fromListType = listType;
            if (listType === this.SOURCE_LIST)
                this.draggedItemIndexSource = index;
            else
                this.draggedItemIndexTarget = index;
        };
        PickList.prototype.onDragOver = function (event, index, listType) {
            if (this.dragging) {
                if (listType == this.SOURCE_LIST) {
                    if (this.draggedItemIndexSource !== index && this.draggedItemIndexSource + 1 !== index || (this.fromListType === this.TARGET_LIST)) {
                        this.dragOverItemIndexSource = index;
                        event.preventDefault();
                    }
                }
                else {
                    if (this.draggedItemIndexTarget !== index && this.draggedItemIndexTarget + 1 !== index || (this.fromListType === this.SOURCE_LIST)) {
                        this.dragOverItemIndexTarget = index;
                        event.preventDefault();
                    }
                }
                this.onListItemDroppoint = true;
            }
        };
        PickList.prototype.onDragLeave = function (event, listType) {
            this.dragOverItemIndexSource = null;
            this.dragOverItemIndexTarget = null;
            this.onListItemDroppoint = false;
        };
        PickList.prototype.onDrop = function (event, index, listType) {
            if (this.onListItemDroppoint) {
                if (listType === this.SOURCE_LIST) {
                    if (this.fromListType === this.TARGET_LIST) {
                        this.insert(this.draggedItemIndexTarget, this.target, index, this.source, this.onMoveToSource);
                    }
                    else {
                        utils.ObjectUtils.reorderArray(this.source, this.draggedItemIndexSource, (this.draggedItemIndexSource > index) ? index : (index === 0) ? 0 : index - 1);
                        this.onSourceReorder.emit({ items: this.source[this.draggedItemIndexSource] });
                    }
                    this.dragOverItemIndexSource = null;
                }
                else {
                    if (this.fromListType === this.SOURCE_LIST) {
                        this.insert(this.draggedItemIndexSource, this.source, index, this.target, this.onMoveToTarget);
                    }
                    else {
                        utils.ObjectUtils.reorderArray(this.target, this.draggedItemIndexTarget, (this.draggedItemIndexTarget > index) ? index : (index === 0) ? 0 : index - 1);
                        this.onTargetReorder.emit({ items: this.target[this.draggedItemIndexTarget] });
                    }
                    this.dragOverItemIndexTarget = null;
                }
                this.listHighlightTarget = false;
                this.listHighlightSource = false;
                event.preventDefault();
            }
        };
        PickList.prototype.onDragEnd = function (event) {
            this.dragging = false;
        };
        PickList.prototype.onListDrop = function (event, listType) {
            if (!this.onListItemDroppoint) {
                if (listType === this.SOURCE_LIST) {
                    if (this.fromListType === this.TARGET_LIST) {
                        this.insert(this.draggedItemIndexTarget, this.target, null, this.source, this.onMoveToSource);
                    }
                }
                else {
                    if (this.fromListType === this.SOURCE_LIST) {
                        this.insert(this.draggedItemIndexSource, this.source, null, this.target, this.onMoveToTarget);
                    }
                }
                this.listHighlightTarget = false;
                this.listHighlightSource = false;
                event.preventDefault();
            }
        };
        PickList.prototype.insert = function (fromIndex, fromList, toIndex, toList, callback) {
            var elementtomove = fromList[fromIndex];
            if (toIndex === null)
                toList.push(fromList.splice(fromIndex, 1)[0]);
            else
                toList.splice(toIndex, 0, fromList.splice(fromIndex, 1)[0]);
            callback.emit({
                items: [elementtomove]
            });
        };
        PickList.prototype.onListMouseMove = function (event, listType) {
            if (this.dragging) {
                var moveListType = (listType == 0 ? this.listViewSourceChild : this.listViewTargetChild);
                var offsetY = moveListType.nativeElement.getBoundingClientRect().top + document.body.scrollTop;
                var bottomDiff = (offsetY + moveListType.nativeElement.clientHeight) - event.pageY;
                var topDiff = (event.pageY - offsetY);
                if (bottomDiff < 25 && bottomDiff > 0)
                    moveListType.nativeElement.scrollTop += 15;
                else if (topDiff < 25 && topDiff > 0)
                    moveListType.nativeElement.scrollTop -= 15;
                if (listType === this.SOURCE_LIST) {
                    if (this.fromListType === this.TARGET_LIST)
                        this.listHighlightSource = true;
                }
                else {
                    if (this.fromListType === this.SOURCE_LIST)
                        this.listHighlightTarget = true;
                }
                event.preventDefault();
            }
        };
        PickList.prototype.onListDragLeave = function () {
            this.listHighlightTarget = false;
            this.listHighlightSource = false;
        };
        PickList.prototype.resetFilter = function () {
            this.visibleOptionsSource = null;
            this.filterValueSource = null;
            this.visibleOptionsTarget = null;
            this.filterValueTarget = null;
            this.sourceFilterViewChild.nativeElement.value = '';
            this.targetFilterViewChild.nativeElement.value = '';
        };
        PickList.prototype.onItemKeydown = function (event, item, selectedItems, callback) {
            var listItem = event.currentTarget;
            switch (event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.focus();
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.focus();
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.onItemClick(event, item, selectedItems, callback);
                    event.preventDefault();
                    break;
            }
        };
        PickList.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return !dom.DomHandler.hasClass(nextItem, 'p-picklist-item') || dom.DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        };
        PickList.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return !dom.DomHandler.hasClass(prevItem, 'p-picklist-item') || dom.DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        };
PickList.ɵfac = function PickList_Factory(t) { return new (t || PickList)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PickList.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PickList, selectors: [["p-pickList"]], contentQueries: function PickList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function PickList_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listViewSourceChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listViewTargetChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sourceFilterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.targetFilterViewChild = _t.first);
    } }, inputs: { trackBy: "trackBy", showSourceFilter: "showSourceFilter", showTargetFilter: "showTargetFilter", metaKeySelection: "metaKeySelection", showSourceControls: "showSourceControls", showTargetControls: "showTargetControls", disabled: "disabled", filterMatchMode: "filterMatchMode", source: "source", target: "target", sourceHeader: "sourceHeader", targetHeader: "targetHeader", responsive: "responsive", filterBy: "filterBy", filterLocale: "filterLocale", sourceTrackBy: "sourceTrackBy", targetTrackBy: "targetTrackBy", dragdrop: "dragdrop", style: "style", styleClass: "styleClass", sourceStyle: "sourceStyle", targetStyle: "targetStyle", sourceFilterPlaceholder: "sourceFilterPlaceholder", targetFilterPlaceholder: "targetFilterPlaceholder", ariaSourceFilterLabel: "ariaSourceFilterLabel", ariaTargetFilterLabel: "ariaTargetFilterLabel" }, outputs: { onMoveToSource: "onMoveToSource", onMoveAllToSource: "onMoveAllToSource", onMoveAllToTarget: "onMoveAllToTarget", onMoveToTarget: "onMoveToTarget", onSourceReorder: "onSourceReorder", onTargetReorder: "onTargetReorder", onSourceSelect: "onSourceSelect", onTargetSelect: "onTargetSelect", onSourceFilter: "onSourceFilter", onTargetFilter: "onTargetFilter" }, decls: 22, vars: 28, consts: [[3, "ngStyle", "ngClass"], ["class", "p-picklist-buttons p-picklist-source-controls", 4, "ngIf"], [1, "p-picklist-list-wrapper", "p-picklist-source-wrapper"], ["class", "p-picklist-header", 4, "ngIf"], ["class", "p-picklist-filter-container", 4, "ngIf"], ["role", "listbox", "aria-multiselectable", "multiple", 1, "p-picklist-list", "p-picklist-source", 3, "ngClass", "ngStyle", "dragover", "dragleave", "drop"], ["sourcelist", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-transfer-buttons"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-right", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-right", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-left", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-left", 3, "disabled", "click"], [1, "p-picklist-list-wrapper", "p-picklist-target-wrapper"], ["role", "listbox", "aria-multiselectable", "multiple", 1, "p-picklist-list", "p-picklist-target", 3, "ngClass", "ngStyle", "dragover", "dragleave", "drop"], ["targetlist", ""], ["class", "p-picklist-buttons p-picklist-target-controls", 4, "ngIf"], [1, "p-picklist-buttons", "p-picklist-source-controls"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-up", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-up", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-down", 3, "disabled", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-down", 3, "disabled", "click"], [1, "p-picklist-header"], [1, "p-picklist-title"], [1, "p-picklist-filter-container"], [1, "p-picklist-filter"], ["type", "text", "role", "textbox", 1, "p-picklist-filter-input", "p-inputtext", "p-component", 3, "disabled", "keyup"], ["sourceFilter", ""], [1, "p-picklist-filter-icon", "pi", "pi-search"], ["class", "p-picklist-droppoint", 3, "ngClass", "display", "dragover", "drop", "dragleave", 4, "ngIf"], ["pRipple", "", "tabindex", "0", "role", "option", 3, "ngClass", "click", "dblclick", "touchend", "keydown", "dragstart", "dragend"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-picklist-droppoint", 3, "ngClass", "dragover", "drop", "dragleave", 4, "ngIf"], [1, "p-picklist-droppoint", 3, "ngClass", "dragover", "drop", "dragleave"], [1, "p-picklist-empty-message"], [4, "ngTemplateOutlet"], ["class", "p-picklist-title", 4, "ngIf"], ["targetFilter", ""], [1, "p-picklist-buttons", "p-picklist-target-controls"]], template: function PickList_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PickList_div_1_Template, 5, 4, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, PickList_div_3_Template, 3, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, PickList_div_4_Template, 5, 3, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "ul", 5, 6);
        ɵngcc0.ɵɵlistener("dragover", function PickList_Template_ul_dragover_5_listener($event) { return ctx.onListMouseMove($event, ctx.SOURCE_LIST); })("dragleave", function PickList_Template_ul_dragleave_5_listener() { return ctx.onListDragLeave(); })("drop", function PickList_Template_ul_drop_5_listener($event) { return ctx.onListDrop($event, ctx.SOURCE_LIST); });
        ɵngcc0.ɵɵtemplate(7, PickList_ng_template_7_Template, 4, 15, "ng-template", 7);
        ɵngcc0.ɵɵtemplate(8, PickList_ng_container_8_Template, 3, 1, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelementStart(10, "button", 10);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_10_listener() { return ctx.moveRight(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "button", 11);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_11_listener() { return ctx.moveAllRight(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "button", 12);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_12_listener() { return ctx.moveLeft(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "button", 13);
        ɵngcc0.ɵɵlistener("click", function PickList_Template_button_click_13_listener() { return ctx.moveAllLeft(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 14);
        ɵngcc0.ɵɵtemplate(15, PickList_div_15_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(16, PickList_div_16_Template, 5, 3, "div", 4);
        ɵngcc0.ɵɵelementStart(17, "ul", 15, 16);
        ɵngcc0.ɵɵlistener("dragover", function PickList_Template_ul_dragover_17_listener($event) { return ctx.onListMouseMove($event, ctx.TARGET_LIST); })("dragleave", function PickList_Template_ul_dragleave_17_listener() { return ctx.onListDragLeave(); })("drop", function PickList_Template_ul_drop_17_listener($event) { return ctx.onListDrop($event, ctx.TARGET_LIST); });
        ɵngcc0.ɵɵtemplate(19, PickList_ng_template_19_Template, 4, 15, "ng-template", 7);
        ɵngcc0.ɵɵtemplate(20, PickList_ng_container_20_Template, 3, 1, "ng-container", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(21, PickList_div_21_Template, 5, 4, "div", 17);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-picklist p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSourceControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.sourceHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterBy && ctx.showSourceFilter !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c7, ctx.listHighlightSource))("ngStyle", ctx.sourceStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.source)("ngForTrackBy", ctx.sourceTrackBy || ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.source == null || ctx.source.length === 0) && ctx.emptyMessageSourceTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.targetHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterBy && ctx.showTargetFilter !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(26, _c7, ctx.listHighlightTarget))("ngStyle", ctx.targetStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.target)("ngForTrackBy", ctx.targetTrackBy || ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.target == null || ctx.target.length === 0) && ctx.emptyMessageTargetTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTargetControls);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ButtonDirective, ɵngcc3.Ripple, ɵngcc1.NgTemplateOutlet], styles: [".p-picklist,.p-picklist-buttons{display:-ms-flexbox;display:flex}.p-picklist-buttons{-ms-flex-direction:column;-ms-flex-pack:center;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{-ms-flex:1 1 50%;flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;max-height:24rem;min-height:12rem;overflow:auto;padding:0}.p-picklist-item{cursor:pointer;overflow:hidden}.p-picklist-filter,.p-picklist-item{position:relative}.p-picklist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-picklist-filter-input{width:100%}.p-picklist-droppoint{height:6px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickList, [{
        type: core.Component,
        args: [{
                selector: 'p-pickList',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'p-picklist p-component'\">\n            <div class=\"p-picklist-buttons p-picklist-source-controls\" *ngIf=\"showSourceControls\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-up\" [disabled]=\"disabled\" (click)=\"moveUp(sourcelist,source,selectedItemsSource,onSourceReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-up\" [disabled]=\"disabled\" (click)=\"moveTop(sourcelist,source,selectedItemsSource,onSourceReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-down\" [disabled]=\"disabled\" (click)=\"moveDown(sourcelist,source,selectedItemsSource,onSourceReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-down\" [disabled]=\"disabled\" (click)=\"moveBottom(sourcelist,source,selectedItemsSource,onSourceReorder)\"></button>\n            </div>\n            <div class=\"p-picklist-list-wrapper p-picklist-source-wrapper\">\n                <div class=\"p-picklist-header\" *ngIf=\"sourceHeader\">\n                    <div class=\"p-picklist-title\">{{sourceHeader}}</div>\n                </div>\n                <div class=\"p-picklist-filter-container\" *ngIf=\"filterBy && showSourceFilter !== false\">\n                    <div class=\"p-picklist-filter\">\n                        <input #sourceFilter type=\"text\" role=\"textbox\" (keyup)=\"onFilter($event,source,SOURCE_LIST)\" class=\"p-picklist-filter-input p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"sourceFilterPlaceholder\" [attr.aria-label]=\"ariaSourceFilterLabel\">\n                        <span class=\"p-picklist-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                \n                <ul #sourcelist class=\"p-picklist-list p-picklist-source\" [ngClass]=\"{'p-picklist-list-highlight': listHighlightSource}\"\n                    [ngStyle]=\"sourceStyle\" (dragover)=\"onListMouseMove($event,SOURCE_LIST)\" (dragleave)=\"onListDragLeave()\" (drop)=\"onListDrop($event, SOURCE_LIST)\" role=\"listbox\" aria-multiselectable=\"multiple\">\n                    <ng-template ngFor let-item [ngForOf]=\"source\" [ngForTrackBy]=\"sourceTrackBy || trackBy\" let-i=\"index\" let-l=\"last\">\n                        <li class=\"p-picklist-droppoint\" *ngIf=\"dragdrop\" (dragover)=\"onDragOver($event, i, SOURCE_LIST)\" (drop)=\"onDrop($event, i, SOURCE_LIST)\" (dragleave)=\"onDragLeave($event, SOURCE_LIST)\"\n                        [ngClass]=\"{'p-picklist-droppoint-highlight': (i === dragOverItemIndexSource)}\" [style.display]=\"isItemVisible(item, SOURCE_LIST) ? 'block' : 'none'\"></li>\n                        <li [ngClass]=\"{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsSource),'p-disabled': disabled}\" pRipple\n                            (click)=\"onItemClick($event,item,selectedItemsSource,onSourceSelect)\" (dblclick)=\"onSourceItemDblClick()\" (touchend)=\"onItemTouchEnd($event)\" (keydown)=\"onItemKeydown($event,item,selectedItemsSource,onSourceSelect)\"\n                            [style.display]=\"isItemVisible(item, SOURCE_LIST) ? 'block' : 'none'\" tabindex=\"0\" role=\"option\" [attr.aria-selected]=\"isSelected(item, selectedItemsSource)\"\n                            [attr.draggable]=\"dragdrop\" (dragstart)=\"onDragStart($event, i, SOURCE_LIST)\" (dragend)=\"onDragEnd($event)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                        <li class=\"p-picklist-droppoint\" *ngIf=\"dragdrop&&l\" (dragover)=\"onDragOver($event, i + 1, SOURCE_LIST)\" (drop)=\"onDrop($event, i + 1, SOURCE_LIST)\" (dragleave)=\"onDragLeave($event, SOURCE_LIST)\"\n                        [ngClass]=\"{'p-picklist-droppoint-highlight': (i + 1 === dragOverItemIndexSource)}\"></li>\n                    </ng-template>\n                    <ng-container *ngIf=\"(source == null || source.length === 0) && emptyMessageSourceTemplate\">\n                        <li class=\"p-picklist-empty-message\">\n                            <ng-container *ngTemplateOutlet=\"emptyMessageSourceTemplate\"></ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"p-picklist-buttons p-picklist-transfer-buttons\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-right\" [disabled]=\"disabled\" (click)=\"moveRight()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-right\" [disabled]=\"disabled\" (click)=\"moveAllRight()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-left\" [disabled]=\"disabled\" (click)=\"moveLeft()\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-left\" [disabled]=\"disabled\" (click)=\"moveAllLeft()\"></button>\n            </div>\n            <div class=\"p-picklist-list-wrapper p-picklist-target-wrapper\">\n                <div class=\"p-picklist-header\" *ngIf=\"targetHeader\">\n                    <div class=\"p-picklist-title\" *ngIf=\"targetHeader\">{{targetHeader}}</div>\n                </div>\n                <div class=\"p-picklist-filter-container\" *ngIf=\"filterBy && showTargetFilter !== false\">\n                    <div class=\"p-picklist-filter\">\n                        <input #targetFilter type=\"text\" role=\"textbox\" (keyup)=\"onFilter($event,target,TARGET_LIST)\" class=\"p-picklist-filter-input p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"targetFilterPlaceholder\" [attr.aria-label]=\"ariaTargetFilterLabel\">\n                        <span class=\"p-picklist-filter-icon pi pi-search\"></span>\n                    </div>\n                </div>\n                <ul #targetlist class=\"p-picklist-list p-picklist-target\" [ngClass]=\"{'p-picklist-list-highlight': listHighlightTarget}\"\n                    [ngStyle]=\"targetStyle\" (dragover)=\"onListMouseMove($event,TARGET_LIST)\" (dragleave)=\"onListDragLeave()\" (drop)=\"onListDrop($event,TARGET_LIST)\" role=\"listbox\" aria-multiselectable=\"multiple\">\n                    <ng-template ngFor let-item [ngForOf]=\"target\" [ngForTrackBy]=\"targetTrackBy || trackBy\" let-i=\"index\" let-l=\"last\">\n                        <li class=\"p-picklist-droppoint\" *ngIf=\"dragdrop\" (dragover)=\"onDragOver($event, i, TARGET_LIST)\" (drop)=\"onDrop($event, i, TARGET_LIST)\" (dragleave)=\"onDragLeave($event, TARGET_LIST)\"\n                        [ngClass]=\"{'p-picklist-droppoint-highlight': (i === dragOverItemIndexTarget)}\" [style.display]=\"isItemVisible(item, TARGET_LIST) ? 'block' : 'none'\"></li>\n                        <li [ngClass]=\"{'p-picklist-item':true,'p-highlight':isSelected(item,selectedItemsTarget), 'p-disabled': disabled}\" pRipple\n                            (click)=\"onItemClick($event,item,selectedItemsTarget,onTargetSelect)\" (dblclick)=\"onTargetItemDblClick()\" (touchend)=\"onItemTouchEnd($event)\" (keydown)=\"onItemKeydown($event,item,selectedItemsTarget,onTargetSelect)\"\n                            [style.display]=\"isItemVisible(item, TARGET_LIST) ? 'block' : 'none'\" tabindex=\"0\" role=\"option\" [attr.aria-selected]=\"isSelected(item, selectedItemsTarget)\"\n                            [attr.draggable]=\"dragdrop\" (dragstart)=\"onDragStart($event, i, TARGET_LIST)\" (dragend)=\"onDragEnd($event)\">\n                            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                        </li>\n                        <li class=\"p-picklist-droppoint\" *ngIf=\"dragdrop&&l\" (dragover)=\"onDragOver($event, i + 1, TARGET_LIST)\" (drop)=\"onDrop($event, i + 1, TARGET_LIST)\" (dragleave)=\"onDragLeave($event, TARGET_LIST)\"\n                        [ngClass]=\"{'p-picklist-droppoint-highlight': (i + 1 === dragOverItemIndexTarget)}\"></li>\n                    </ng-template>\n                    <ng-container *ngIf=\"(target == null || target.length === 0) && emptyMessageTargetTemplate\">\n                        <li class=\"p-picklist-empty-message\">\n                            <ng-container *ngTemplateOutlet=\"emptyMessageTargetTemplate\"></ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n            <div class=\"p-picklist-buttons p-picklist-target-controls\" *ngIf=\"showTargetControls\">\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-up\" [disabled]=\"disabled\" (click)=\"moveUp(targetlist,target,selectedItemsTarget,onTargetReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-up\" [disabled]=\"disabled\" (click)=\"moveTop(targetlist,target,selectedItemsTarget,onTargetReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-down\" [disabled]=\"disabled\" (click)=\"moveDown(targetlist,target,selectedItemsTarget,onTargetReorder)\"></button>\n                <button type=\"button\" pButton pRipple icon=\"pi pi-angle-double-down\" [disabled]=\"disabled\" (click)=\"moveBottom(targetlist,target,selectedItemsTarget,onTargetReorder)\"></button>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-picklist,.p-picklist-buttons{display:-ms-flexbox;display:flex}.p-picklist-buttons{-ms-flex-direction:column;-ms-flex-pack:center;flex-direction:column;justify-content:center}.p-picklist-list-wrapper{-ms-flex:1 1 50%;flex:1 1 50%}.p-picklist-list{list-style-type:none;margin:0;max-height:24rem;min-height:12rem;overflow:auto;padding:0}.p-picklist-item{cursor:pointer;overflow:hidden}.p-picklist-filter,.p-picklist-item{position:relative}.p-picklist-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-picklist-filter-input{width:100%}.p-picklist-droppoint{height:6px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { trackBy: [{
            type: core.Input
        }], showSourceFilter: [{
            type: core.Input
        }], showTargetFilter: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], showSourceControls: [{
            type: core.Input
        }], showTargetControls: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], filterMatchMode: [{
            type: core.Input
        }], onMoveToSource: [{
            type: core.Output
        }], onMoveAllToSource: [{
            type: core.Output
        }], onMoveAllToTarget: [{
            type: core.Output
        }], onMoveToTarget: [{
            type: core.Output
        }], onSourceReorder: [{
            type: core.Output
        }], onTargetReorder: [{
            type: core.Output
        }], onSourceSelect: [{
            type: core.Output
        }], onTargetSelect: [{
            type: core.Output
        }], onSourceFilter: [{
            type: core.Output
        }], onTargetFilter: [{
            type: core.Output
        }], source: [{
            type: core.Input
        }], target: [{
            type: core.Input
        }], sourceHeader: [{
            type: core.Input
        }], targetHeader: [{
            type: core.Input
        }], responsive: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], sourceTrackBy: [{
            type: core.Input
        }], targetTrackBy: [{
            type: core.Input
        }], dragdrop: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], sourceStyle: [{
            type: core.Input
        }], targetStyle: [{
            type: core.Input
        }], sourceFilterPlaceholder: [{
            type: core.Input
        }], targetFilterPlaceholder: [{
            type: core.Input
        }], ariaSourceFilterLabel: [{
            type: core.Input
        }], ariaTargetFilterLabel: [{
            type: core.Input
        }], listViewSourceChild: [{
            type: core.ViewChild,
            args: ['sourcelist']
        }], listViewTargetChild: [{
            type: core.ViewChild,
            args: ['targetlist']
        }], sourceFilterViewChild: [{
            type: core.ViewChild,
            args: ['sourceFilter']
        }], targetFilterViewChild: [{
            type: core.ViewChild,
            args: ['targetFilter']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return PickList;
    }());
    PickList.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    PickList.propDecorators = {
        source: [{ type: core.Input }],
        target: [{ type: core.Input }],
        sourceHeader: [{ type: core.Input }],
        targetHeader: [{ type: core.Input }],
        responsive: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        trackBy: [{ type: core.Input }],
        sourceTrackBy: [{ type: core.Input }],
        targetTrackBy: [{ type: core.Input }],
        showSourceFilter: [{ type: core.Input }],
        showTargetFilter: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        dragdrop: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        sourceStyle: [{ type: core.Input }],
        targetStyle: [{ type: core.Input }],
        showSourceControls: [{ type: core.Input }],
        showTargetControls: [{ type: core.Input }],
        sourceFilterPlaceholder: [{ type: core.Input }],
        targetFilterPlaceholder: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        ariaSourceFilterLabel: [{ type: core.Input }],
        ariaTargetFilterLabel: [{ type: core.Input }],
        filterMatchMode: [{ type: core.Input }],
        onMoveToSource: [{ type: core.Output }],
        onMoveAllToSource: [{ type: core.Output }],
        onMoveAllToTarget: [{ type: core.Output }],
        onMoveToTarget: [{ type: core.Output }],
        onSourceReorder: [{ type: core.Output }],
        onTargetReorder: [{ type: core.Output }],
        onSourceSelect: [{ type: core.Output }],
        onTargetSelect: [{ type: core.Output }],
        onSourceFilter: [{ type: core.Output }],
        onTargetFilter: [{ type: core.Output }],
        listViewSourceChild: [{ type: core.ViewChild, args: ['sourcelist',] }],
        listViewTargetChild: [{ type: core.ViewChild, args: ['targetlist',] }],
        sourceFilterViewChild: [{ type: core.ViewChild, args: ['sourceFilter',] }],
        targetFilterViewChild: [{ type: core.ViewChild, args: ['targetFilter',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var PickListModule = /** @class */ (function () {
        function PickListModule() {
        }
PickListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PickListModule });
PickListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PickListModule_Factory(t) { return new (t || PickListModule)(); }, imports: [[common.CommonModule, button.ButtonModule, api.SharedModule, ripple.RippleModule], ɵngcc4.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PickListModule, { declarations: [PickList], imports: [ɵngcc1.CommonModule, ɵngcc2.ButtonModule, ɵngcc4.SharedModule, ɵngcc3.RippleModule], exports: [PickList, ɵngcc4.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PickListModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule, api.SharedModule, ripple.RippleModule],
                exports: [PickList, api.SharedModule],
                declarations: [PickList]
            }]
    }], function () { return []; }, null); })();
        return PickListModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PickList = PickList;
    exports.PickListModule = PickListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-picklist.umd.js.map