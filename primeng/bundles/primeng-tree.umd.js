(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/api'),require('@angular/cdk/scrolling'),exports, require('@angular/core'), require('@angular/cdk/scrolling'), require('@angular/common'), require('primeng/api'), require('primeng/utils'), require('primeng/dom'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/tree', ['@angular/core','@angular/common','primeng/ripple','primeng/api','@angular/cdk/scrolling','exports', '@angular/core', '@angular/cdk/scrolling', '@angular/common', 'primeng/api', 'primeng/utils', 'primeng/dom', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.api,global.ng.cdk.scrolling,(global.primeng = global.primeng || {}, global.primeng.tree = {}), global.ng.core, global.ng.cdk.scrolling, global.ng.common, global.primeng.api, global.primeng.utils, global.primeng.dom, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, scrolling, common, api, utils, dom, ripple) { 
var _c0 = function (a0) { return { "p-treenode-droppoint-active": a0 }; };
function UITreeNode_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("drop", function UITreeNode_ng_template_0_li_0_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onDropPoint($event, 0 - 1); })("dragover", function UITreeNode_ng_template_0_li_0_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onDropPointDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_0_Template_li_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onDropPointDragEnter($event, 0 - 1); })("dragleave", function UITreeNode_ng_template_0_li_0_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.onDropPointDragLeave($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r1.draghoverPrev));
} }
var _c1 = function (a0, a1) { return { "p-highlight": a0, "p-indeterminate": a1 }; };
var _c2 = function (a0, a1) { return { "pi-check": a0, "pi-minus": a1 }; };
function UITreeNode_ng_template_0_li_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵelement(2, "span", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-checked", ctx_r10.isSelected());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c1, ctx_r10.isSelected(), ctx_r10.node.partialSelected));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(6, _c2, ctx_r10.isSelected(), ctx_r10.node.partialSelected));
} }
function UITreeNode_ng_template_0_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span");
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r11.getIcon());
} }
function UITreeNode_ng_template_0_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.node.label);
} }
function UITreeNode_ng_template_0_li_1_span_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c3 = function (a0) { return { $implicit: a0 }; };
function UITreeNode_ng_template_0_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_span_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.tree.getTemplateForNode(ctx_r13.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r13.node));
} }
function UITreeNode_ng_template_0_li_1_ul_9_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 19);
} if (rf & 2) {
    var childNode_r17 = ctx.$implicit;
    var firstChild_r18 = ctx.first;
    var lastChild_r19 = ctx.last;
    var index_r20 = ctx.index;
    var ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("height", ctx_r16.tree.virtualNodeHeight, "px");
    ɵngcc0.ɵɵproperty("node", childNode_r17)("parentNode", ctx_r16.node)("firstChild", firstChild_r18)("lastChild", lastChild_r19)("index", index_r20)("level", ctx_r16.level + 1);
} }
function UITreeNode_ng_template_0_li_1_ul_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 17);
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_ul_9_p_treeNode_1_Template, 1, 8, "p-treeNode", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("display", ctx_r14.node.expanded ? "block" : "none");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.node.children)("ngForTrackBy", ctx_r14.tree.trackBy);
} }
var _c4 = function (a1, a2) { return ["p-treenode", a1, a2]; };
var _c5 = function (a0, a1, a2) { return { "p-treenode-selectable": a0, "p-treenode-dragover": a1, "p-highlight": a2 }; };
var _c6 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function UITreeNode_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.onNodeClick($event); })("contextmenu", function UITreeNode_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onNodeRightClick($event); })("touchend", function UITreeNode_ng_template_0_li_1_Template_div_touchend_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r24 = ɵngcc0.ɵɵnextContext(2); return ctx_r24.onNodeTouchEnd(); })("drop", function UITreeNode_ng_template_0_li_1_Template_div_drop_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.onDropNode($event); })("dragover", function UITreeNode_ng_template_0_li_1_Template_div_dragover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onDropNodeDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_1_Template_div_dragenter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onDropNodeDragEnter($event); })("dragleave", function UITreeNode_ng_template_0_li_1_Template_div_dragleave_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onDropNodeDragLeave($event); })("dragstart", function UITreeNode_ng_template_0_li_1_Template_div_dragstart_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.onDragStart($event); })("dragend", function UITreeNode_ng_template_0_li_1_Template_div_dragend_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.onDragStop($event); })("keydown", function UITreeNode_ng_template_0_li_1_Template_div_keydown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.onKeyDown($event); });
    ɵngcc0.ɵɵelementStart(2, "button", 7);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_li_1_Template_button_click_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r32 = ɵngcc0.ɵɵnextContext(2); return ctx_r32.toggle($event); });
    ɵngcc0.ɵɵelement(3, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, UITreeNode_ng_template_0_li_1_div_4_Template, 3, 9, "div", 9);
    ɵngcc0.ɵɵtemplate(5, UITreeNode_ng_template_0_li_1_span_5_Template, 1, 2, "span", 3);
    ɵngcc0.ɵɵelementStart(6, "span", 10);
    ɵngcc0.ɵɵtemplate(7, UITreeNode_ng_template_0_li_1_span_7_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(8, UITreeNode_ng_template_0_li_1_span_8_Template, 2, 4, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, UITreeNode_ng_template_0_li_1_ul_9_Template, 2, 4, "ul", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c4, ctx_r2.node.styleClass || "", ctx_r2.isLeaf() ? "p-treenode-leaf" : ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("padding-left", ctx_r2.level * ctx_r2.indentation + "rem");
    ɵngcc0.ɵɵproperty("draggable", ctx_r2.tree.draggableNodes)("ngClass", ɵngcc0.ɵɵpureFunction3(19, _c5, ctx_r2.tree.selectionMode && ctx_r2.node.selectable !== false, ctx_r2.draghoverNode, ctx_r2.isSelected()));
    ɵngcc0.ɵɵattribute("tabindex", 0)("aria-posinset", ctx_r2.index + 1)("aria-expanded", ctx_r2.node.expanded)("aria-selected", ctx_r2.isSelected())("aria-label", ctx_r2.node.label);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(23, _c6, !ctx_r2.node.expanded, ctx_r2.node.expanded));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tree.selectionMode == "checkbox");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.node.icon || ctx_r2.node.expandedIcon || ctx_r2.node.collapsedIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.tree.virtualScroll && ctx_r2.node.children && ctx_r2.node.expanded);
} }
function UITreeNode_ng_template_0_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵlistener("drop", function UITreeNode_ng_template_0_li_2_Template_li_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onDropPoint($event, 1); })("dragover", function UITreeNode_ng_template_0_li_2_Template_li_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.onDropPointDragOver($event); })("dragenter", function UITreeNode_ng_template_0_li_2_Template_li_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onDropPointDragEnter($event, 1); })("dragleave", function UITreeNode_ng_template_0_li_2_Template_li_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r37 = ɵngcc0.ɵɵnextContext(2); return ctx_r37.onDropPointDragLeave($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r3.draghoverNext));
} }
var _c7 = function (a0) { return { "p-treenode-connector-line": a0 }; };
function UITreeNode_ng_template_0_table_3_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 25);
    ɵngcc0.ɵɵelementStart(1, "table", 26);
    ɵngcc0.ɵɵelementStart(2, "tbody");
    ɵngcc0.ɵɵelementStart(3, "tr");
    ɵngcc0.ɵɵelement(4, "td", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "tr");
    ɵngcc0.ɵɵelement(6, "td", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r38 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c7, !ctx_r38.firstChild));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c7, !ctx_r38.lastChild));
} }
var _c8 = function (a0, a1) { return { "pi-plus": a0, "pi-minus": a1 }; };
function UITreeNode_ng_template_0_table_3_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 28);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); var ctx_r44 = ɵngcc0.ɵɵnextContext(3); return ctx_r44.toggle($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r39 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !ctx_r39.node.expanded, ctx_r39.node.expanded));
} }
function UITreeNode_ng_template_0_table_3_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span");
} if (rf & 2) {
    var ctx_r40 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassMap(ctx_r40.getIcon());
} }
function UITreeNode_ng_template_0_table_3_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r41.node.label);
} }
function UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function UITreeNode_ng_template_0_table_3_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r42.tree.getTemplateForNode(ctx_r42.node))("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, ctx_r42.node));
} }
function UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 32);
} if (rf & 2) {
    var childNode_r48 = ctx.$implicit;
    var firstChild_r49 = ctx.first;
    var lastChild_r50 = ctx.last;
    ɵngcc0.ɵɵproperty("node", childNode_r48)("firstChild", firstChild_r49)("lastChild", lastChild_r50);
} }
function UITreeNode_ng_template_0_table_3_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 29);
    ɵngcc0.ɵɵelementStart(1, "div", 30);
    ɵngcc0.ɵɵtemplate(2, UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r43 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("display", ctx_r43.node.expanded ? "table-cell" : "none");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r43.node.children)("ngForTrackBy", ctx_r43.tree.trackBy);
} }
var _c9 = function (a0) { return { "p-treenode-collapsed": a0 }; };
var _c10 = function (a0, a1) { return { "p-treenode-selectable": a0, "p-highlight": a1 }; };
function UITreeNode_ng_template_0_table_3_Template(rf, ctx) { if (rf & 1) {
    var _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "table");
    ɵngcc0.ɵɵelementStart(1, "tbody");
    ɵngcc0.ɵɵelementStart(2, "tr");
    ɵngcc0.ɵɵtemplate(3, UITreeNode_ng_template_0_table_3_td_3_Template, 7, 6, "td", 20);
    ɵngcc0.ɵɵelementStart(4, "td", 21);
    ɵngcc0.ɵɵelementStart(5, "div", 22);
    ɵngcc0.ɵɵlistener("click", function UITreeNode_ng_template_0_table_3_Template_div_click_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r51 = ɵngcc0.ɵɵnextContext(2); return ctx_r51.onNodeClick($event); })("contextmenu", function UITreeNode_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r53 = ɵngcc0.ɵɵnextContext(2); return ctx_r53.onNodeRightClick($event); })("touchend", function UITreeNode_ng_template_0_table_3_Template_div_touchend_5_listener() { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.onNodeTouchEnd(); })("keydown", function UITreeNode_ng_template_0_table_3_Template_div_keydown_5_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); var ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.onNodeKeydown($event); });
    ɵngcc0.ɵɵtemplate(6, UITreeNode_ng_template_0_table_3_span_6_Template, 1, 4, "span", 23);
    ɵngcc0.ɵɵtemplate(7, UITreeNode_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    ɵngcc0.ɵɵelementStart(8, "span", 10);
    ɵngcc0.ɵɵtemplate(9, UITreeNode_ng_template_0_table_3_span_9_Template, 2, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(10, UITreeNode_ng_template_0_table_3_span_10_Template, 2, 4, "span", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, UITreeNode_ng_template_0_table_3_td_11_Template, 3, 4, "td", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.node.styleClass);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.root);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c9, !ctx_r4.node.expanded));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(12, _c10, ctx_r4.tree.selectionMode, ctx_r4.isSelected()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.isLeaf());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.node.icon || ctx_r4.node.expandedIcon || ctx_r4.node.collapsedIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.node.children && ctx_r4.node.expanded);
} }
function UITreeNode_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, UITreeNode_ng_template_0_li_0_Template, 1, 3, "li", 1);
    ɵngcc0.ɵɵtemplate(1, UITreeNode_ng_template_0_li_1_Template, 10, 26, "li", 2);
    ɵngcc0.ɵɵtemplate(2, UITreeNode_ng_template_0_li_2_Template, 1, 3, "li", 1);
    ɵngcc0.ɵɵtemplate(3, UITreeNode_ng_template_0_table_3_Template, 12, 15, "table", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.tree.horizontal);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.droppableNodes && ctx_r0.lastChild);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.tree.horizontal);
} }
function Tree_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r2.loadingIcon);
} }
function Tree_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "input", 10, 11);
    ɵngcc0.ɵɵlistener("keydown.enter", function Tree_div_0_div_2_Template_input_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); return $event.preventDefault(); })("input", function Tree_div_0_div_2_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11._filter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(3, "span", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r3.filterPlaceholder);
} }
function Tree_div_0_ng_container_3_ul_2_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 17);
} if (rf & 2) {
    var node_r14 = ctx.$implicit;
    var firstChild_r15 = ctx.first;
    var lastChild_r16 = ctx.last;
    var index_r17 = ctx.index;
    ɵngcc0.ɵɵproperty("node", node_r14)("firstChild", firstChild_r15)("lastChild", lastChild_r16)("index", index_r17)("level", 0);
} }
function Tree_div_0_ng_container_3_ul_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 15);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_container_3_ul_2_p_treeNode_1_Template, 1, 5, "p-treeNode", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r12.ariaLabel)("aria-labelledby", ctx_r12.ariaLabelledBy);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.getRootNode())("ngForTrackBy", ctx_r12.trackBy);
} }
function Tree_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, Tree_div_0_ng_container_3_ul_2_Template, 2, 4, "ul", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("max-height", ctx_r4.scrollHeight);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.getRootNode());
} }
function Tree_div_0_ng_template_4_ul_1_p_treeNode_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-treeNode", 20);
} if (rf & 2) {
    var rowNode_r20 = ctx.$implicit;
    var firstChild_r21 = ctx.first;
    var lastChild_r22 = ctx.last;
    var index_r23 = ctx.index;
    var ctx_r19 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("height", ctx_r19.virtualNodeHeight, "px");
    ɵngcc0.ɵɵproperty("level", rowNode_r20.level)("rowNode", rowNode_r20)("node", rowNode_r20.node)("firstChild", firstChild_r21)("lastChild", lastChild_r22)("index", index_r23)("indentation", ctx_r19.indentation);
} }
function Tree_div_0_ng_template_4_ul_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 15);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_template_4_ul_1_p_treeNode_1_Template, 1, 9, "p-treeNode", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r18.ariaLabel)("aria-labelledby", ctx_r18.ariaLabelledBy);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r18.serializedValue)("cdkVirtualForTrackBy", ctx_r18.trackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function Tree_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 18);
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_ng_template_4_ul_1_Template, 2, 5, "ul", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r6.scrollHeight);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r6.virtualNodeHeight)("minBufferPx", ctx_r6.minBufferPx)("maxBufferPx", ctx_r6.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.getRootNode());
} }
function Tree_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.emptyMessage);
} }
var _c11 = function (a1, a2, a3, a4) { return { "p-tree p-component": true, "p-tree-selectable": a1, "p-treenode-dragover": a2, "p-tree-loading": a3, "p-tree-flex-scrollable": a4 }; };
function Tree_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("drop", function Tree_div_0_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onDrop($event); })("dragover", function Tree_div_0_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onDragOver($event); })("dragenter", function Tree_div_0_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onDragEnter($event); })("dragleave", function Tree_div_0_Template_div_dragleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onDragLeave($event); });
    ɵngcc0.ɵɵtemplate(1, Tree_div_0_div_1_Template, 2, 2, "div", 3);
    ɵngcc0.ɵɵtemplate(2, Tree_div_0_div_2_Template, 4, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(3, Tree_div_0_ng_container_3_Template, 3, 3, "ng-container", 5);
    ɵngcc0.ɵɵtemplate(4, Tree_div_0_ng_template_4_Template, 2, 6, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(6, Tree_div_0_div_6_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r5 = ɵngcc0.ɵɵreference(5);
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(9, _c11, ctx_r0.selectionMode, ctx_r0.dragHover, ctx_r0.loading, ctx_r0.scrollHeight === "flex"))("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.loading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.virtualScroll)("ngIfElse", _r5);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.loading && (ctx_r0.value == null || ctx_r0.value.length === 0));
} }
function Tree_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("p-tree-loading-icon pi-spin " + ctx_r29.loadingIcon);
} }
function Tree_div_1_table_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "table");
    ɵngcc0.ɵɵelement(1, "p-treeNode", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("node", ctx_r30.value[0])("root", true);
} }
function Tree_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r31.emptyMessage);
} }
var _c12 = function (a1) { return { "p-tree p-tree-horizontal p-component": true, "p-tree-selectable": a1 }; };
function Tree_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, Tree_div_1_div_1_Template, 2, 2, "div", 23);
    ɵngcc0.ɵɵtemplate(2, Tree_div_1_table_2_Template, 2, 2, "table", 24);
    ɵngcc0.ɵɵtemplate(3, Tree_div_1_div_3_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c12, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.loading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.value && ctx_r1.value[0]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.loading && (ctx_r1.value == null || ctx_r1.value.length === 0));
} }
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

    var UITreeNode = /** @class */ (function () {
        function UITreeNode(tree) {
            this.tree = tree;
        }
        UITreeNode.prototype.ngOnInit = function () {
            this.node.parent = this.parentNode;
            if (this.parentNode) {
                this.tree.syncNodeOption(this.node, this.tree.value, 'parent', this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
            }
        };
        UITreeNode.prototype.getIcon = function () {
            var icon;
            if (this.node.icon)
                icon = this.node.icon;
            else
                icon = this.node.expanded && this.node.children && this.node.children.length ? this.node.expandedIcon : this.node.collapsedIcon;
            return UITreeNode.ICON_CLASS + ' ' + icon;
        };
        UITreeNode.prototype.isLeaf = function () {
            return this.tree.isNodeLeaf(this.node);
        };
        UITreeNode.prototype.toggle = function (event) {
            if (this.node.expanded)
                this.collapse(event);
            else
                this.expand(event);
        };
        UITreeNode.prototype.expand = function (event) {
            this.node.expanded = true;
            if (this.tree.virtualScroll) {
                this.tree.updateSerializedValue();
            }
            this.tree.onNodeExpand.emit({ originalEvent: event, node: this.node });
        };
        UITreeNode.prototype.collapse = function (event) {
            this.node.expanded = false;
            if (this.tree.virtualScroll) {
                this.tree.updateSerializedValue();
            }
            this.tree.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        };
        UITreeNode.prototype.onNodeClick = function (event) {
            this.tree.onNodeClick(event, this.node);
        };
        UITreeNode.prototype.onNodeKeydown = function (event) {
            if (event.which === 13) {
                this.tree.onNodeClick(event, this.node);
            }
        };
        UITreeNode.prototype.onNodeTouchEnd = function () {
            this.tree.onNodeTouchEnd();
        };
        UITreeNode.prototype.onNodeRightClick = function (event) {
            this.tree.onNodeRightClick(event, this.node);
        };
        UITreeNode.prototype.isSelected = function () {
            return this.tree.isSelected(this.node);
        };
        UITreeNode.prototype.onDropPoint = function (event, position) {
            var _this = this;
            event.preventDefault();
            var dragNode = this.tree.dragNode;
            var dragNodeIndex = this.tree.dragNodeIndex;
            var dragNodeScope = this.tree.dragNodeScope;
            var isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? (position === 1 || dragNodeIndex !== this.index - 1) : true;
            if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
                var dropParams_1 = Object.assign({}, this.createDropPointEventMetadata(position));
                if (this.tree.validateDrop) {
                    this.tree.onNodeDrop.emit({
                        originalEvent: event,
                        dragNode: dragNode,
                        dropNode: this.node,
                        dropIndex: this.index,
                        accept: function () {
                            _this.processPointDrop(dropParams_1);
                        }
                    });
                }
                else {
                    this.processPointDrop(dropParams_1);
                    this.tree.onNodeDrop.emit({
                        originalEvent: event,
                        dragNode: dragNode,
                        dropNode: this.node,
                        dropIndex: this.index
                    });
                }
            }
            this.draghoverPrev = false;
            this.draghoverNext = false;
        };
        UITreeNode.prototype.processPointDrop = function (event) {
            var newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
            event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
            var dropIndex = this.index;
            if (event.position < 0) {
                dropIndex = (event.dragNodeSubNodes === newNodeList) ? ((event.dragNodeIndex > event.index) ? event.index : event.index - 1) : event.index;
                newNodeList.splice(dropIndex, 0, event.dragNode);
            }
            else {
                dropIndex = newNodeList.length;
                newNodeList.push(event.dragNode);
            }
            this.tree.dragDropService.stopDrag({
                node: event.dragNode,
                subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
                index: event.dragNodeIndex
            });
        };
        UITreeNode.prototype.createDropPointEventMetadata = function (position) {
            return {
                dragNode: this.tree.dragNode,
                dragNodeIndex: this.tree.dragNodeIndex,
                dragNodeSubNodes: this.tree.dragNodeSubNodes,
                dropNode: this.node,
                index: this.index,
                position: position
            };
        };
        UITreeNode.prototype.onDropPointDragOver = function (event) {
            event.dataTransfer.dropEffect = 'move';
            event.preventDefault();
        };
        UITreeNode.prototype.onDropPointDragEnter = function (event, position) {
            if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
                if (position < 0)
                    this.draghoverPrev = true;
                else
                    this.draghoverNext = true;
            }
        };
        UITreeNode.prototype.onDropPointDragLeave = function (event) {
            this.draghoverPrev = false;
            this.draghoverNext = false;
        };
        UITreeNode.prototype.onDragStart = function (event) {
            if (this.tree.draggableNodes && this.node.draggable !== false) {
                event.dataTransfer.setData("text", "data");
                this.tree.dragDropService.startDrag({
                    tree: this,
                    node: this.node,
                    subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                    index: this.index,
                    scope: this.tree.draggableScope
                });
            }
            else {
                event.preventDefault();
            }
        };
        UITreeNode.prototype.onDragStop = function (event) {
            this.tree.dragDropService.stopDrag({
                node: this.node,
                subNodes: this.node.parent ? this.node.parent.children : this.tree.value,
                index: this.index
            });
        };
        UITreeNode.prototype.onDropNodeDragOver = function (event) {
            event.dataTransfer.dropEffect = 'move';
            if (this.tree.droppableNodes) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        UITreeNode.prototype.onDropNode = function (event) {
            var _this = this;
            if (this.tree.droppableNodes && this.node.droppable !== false) {
                var dragNode = this.tree.dragNode;
                if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
                    var dropParams_2 = Object.assign({}, this.createDropNodeEventMetadata());
                    if (this.tree.validateDrop) {
                        this.tree.onNodeDrop.emit({
                            originalEvent: event,
                            dragNode: dragNode,
                            dropNode: this.node,
                            index: this.index,
                            accept: function () {
                                _this.processNodeDrop(dropParams_2);
                            }
                        });
                    }
                    else {
                        this.processNodeDrop(dropParams_2);
                        this.tree.onNodeDrop.emit({
                            originalEvent: event,
                            dragNode: dragNode,
                            dropNode: this.node,
                            index: this.index
                        });
                    }
                }
            }
            event.preventDefault();
            event.stopPropagation();
            this.draghoverNode = false;
        };
        UITreeNode.prototype.createDropNodeEventMetadata = function () {
            return {
                dragNode: this.tree.dragNode,
                dragNodeIndex: this.tree.dragNodeIndex,
                dragNodeSubNodes: this.tree.dragNodeSubNodes,
                dropNode: this.node
            };
        };
        UITreeNode.prototype.processNodeDrop = function (event) {
            var dragNodeIndex = event.dragNodeIndex;
            event.dragNodeSubNodes.splice(dragNodeIndex, 1);
            if (event.dropNode.children)
                event.dropNode.children.push(event.dragNode);
            else
                event.dropNode.children = [event.dragNode];
            this.tree.dragDropService.stopDrag({
                node: event.dragNode,
                subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
                index: dragNodeIndex
            });
        };
        UITreeNode.prototype.onDropNodeDragEnter = function (event) {
            if (this.tree.droppableNodes && this.node.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
                this.draghoverNode = true;
            }
        };
        UITreeNode.prototype.onDropNodeDragLeave = function (event) {
            if (this.tree.droppableNodes) {
                var rect = event.currentTarget.getBoundingClientRect();
                if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
                    this.draghoverNode = false;
                }
            }
        };
        UITreeNode.prototype.onKeyDown = function (event) {
            var nodeElement = event.target.parentElement.parentElement;
            if (nodeElement.nodeName !== 'P-TREENODE') {
                return;
            }
            switch (event.which) {
                //down arrow
                case 40:
                    var listElement = (this.tree.droppableNodes) ? nodeElement.children[1].children[1] : nodeElement.children[0].children[1];
                    if (listElement && listElement.children.length > 0) {
                        this.focusNode(listElement.children[0]);
                    }
                    else {
                        var nextNodeElement = nodeElement.nextElementSibling;
                        if (nextNodeElement) {
                            this.focusNode(nextNodeElement);
                        }
                        else {
                            var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
                            if (nextSiblingAncestor) {
                                this.focusNode(nextSiblingAncestor);
                            }
                        }
                    }
                    event.preventDefault();
                    break;
                //up arrow
                case 38:
                    if (nodeElement.previousElementSibling) {
                        this.focusNode(this.findLastVisibleDescendant(nodeElement.previousElementSibling));
                    }
                    else {
                        var parentNodeElement = this.getParentNodeElement(nodeElement);
                        if (parentNodeElement) {
                            this.focusNode(parentNodeElement);
                        }
                    }
                    event.preventDefault();
                    break;
                //right arrow
                case 39:
                    if (!this.node.expanded && !this.tree.isNodeLeaf(this.node)) {
                        this.expand(event);
                    }
                    event.preventDefault();
                    break;
                //left arrow
                case 37:
                    if (this.node.expanded) {
                        this.collapse(event);
                    }
                    else {
                        var parentNodeElement = this.getParentNodeElement(nodeElement);
                        if (parentNodeElement) {
                            this.focusNode(parentNodeElement);
                        }
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.tree.onNodeClick(event, this.node);
                    event.preventDefault();
                    break;
                default:
                    //no op
                    break;
            }
        };
        UITreeNode.prototype.findNextSiblingOfAncestor = function (nodeElement) {
            var parentNodeElement = this.getParentNodeElement(nodeElement);
            if (parentNodeElement) {
                if (parentNodeElement.nextElementSibling)
                    return parentNodeElement.nextElementSibling;
                else
                    return this.findNextSiblingOfAncestor(parentNodeElement);
            }
            else {
                return null;
            }
        };
        UITreeNode.prototype.findLastVisibleDescendant = function (nodeElement) {
            var listElement = Array.from(nodeElement.children).find(function (el) { return dom.DomHandler.hasClass(el, 'p-treenode'); });
            var childrenListElement = listElement.children[1];
            if (childrenListElement && childrenListElement.children.length > 0) {
                var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
                return this.findLastVisibleDescendant(lastChildElement);
            }
            else {
                return nodeElement;
            }
        };
        UITreeNode.prototype.getParentNodeElement = function (nodeElement) {
            var parentNodeElement = nodeElement.parentElement.parentElement.parentElement;
            return parentNodeElement.tagName === 'P-TREENODE' ? parentNodeElement : null;
        };
        UITreeNode.prototype.focusNode = function (element) {
            if (this.tree.droppableNodes)
                element.children[1].children[0].focus();
            else
                element.children[0].children[0].focus();
        };
UITreeNode.ɵfac = function UITreeNode_Factory(t) { return new (t || UITreeNode)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return Tree; }))); };
UITreeNode.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: UITreeNode, selectors: [["p-treeNode"]], inputs: { rowNode: "rowNode", node: "node", parentNode: "parentNode", root: "root", index: "index", firstChild: "firstChild", lastChild: "lastChild", level: "level", indentation: "indentation" }, decls: 1, vars: 1, consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave"], ["role", "treeitem", 3, "ngClass"], [1, "p-treenode-content", 3, "draggable", "ngClass", "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend", "keydown"], ["type", "button", "pRipple", "", 1, "p-tree-toggler", "p-link", 3, "click"], [1, "p-tree-toggler-icon", "pi", "pi-fw", 3, "ngClass"], ["class", "p-checkbox p-component", 4, "ngIf"], [1, "p-treenode-label"], [4, "ngIf"], ["class", "p-treenode-children", "style", "display: none;", "role", "group", 3, "display", 4, "ngIf"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-checkbox-icon", "pi", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", 1, "p-treenode-children", 2, "display", "none"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "height", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "level"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "ngClass", "click", "contextmenu", "touchend", "keydown"], ["class", "p-tree-toggler pi pi-fw", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "display", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [1, "p-tree-toggler", "pi", "pi-fw", 3, "ngClass", "click"], [1, "p-treenode-children-container"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]], template: function UITreeNode_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, UITreeNode_ng_template_0_Template, 4, 4, "ng-template", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.node);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, UITreeNode], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UITreeNode, [{
        type: core.Component,
        args: [{
                selector: 'p-treeNode',
                template: "\n        <ng-template [ngIf]=\"node\">\n            <li *ngIf=\"tree.droppableNodes\" class=\"p-treenode-droppoint\" [ngClass]=\"{'p-treenode-droppoint-active':draghoverPrev}\"\n            (drop)=\"onDropPoint($event,-1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,-1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <li *ngIf=\"!tree.horizontal\" role=\"treeitem\" [ngClass]=\"['p-treenode',node.styleClass||'', isLeaf() ? 'p-treenode-leaf': '']\">\n                <div class=\"p-treenode-content\" [style.paddingLeft]=\"(level * indentation)  + 'rem'\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\" (touchend)=\"onNodeTouchEnd()\"\n                    (drop)=\"onDropNode($event)\" (dragover)=\"onDropNodeDragOver($event)\" (dragenter)=\"onDropNodeDragEnter($event)\" (dragleave)=\"onDropNodeDragLeave($event)\"\n                    [draggable]=\"tree.draggableNodes\" (dragstart)=\"onDragStart($event)\" (dragend)=\"onDragStop($event)\" [attr.tabindex]=\"0\"\n                    [ngClass]=\"{'p-treenode-selectable':tree.selectionMode && node.selectable !== false,'p-treenode-dragover':draghoverNode, 'p-highlight':isSelected()}\"\n                    (keydown)=\"onKeyDown($event)\" [attr.aria-posinset]=\"this.index + 1\" [attr.aria-expanded]=\"this.node.expanded\" [attr.aria-selected]=\"isSelected()\" [attr.aria-label]=\"node.label\">\n                    <button type=\"button\" class=\"p-tree-toggler p-link\" (click)=\"toggle($event)\" pRipple>\n                        <span class=\"p-tree-toggler-icon pi pi-fw\" [ngClass]=\"{'pi-chevron-right':!node.expanded,'pi-chevron-down':node.expanded}\"></span>\n                    </button>\n                    <div class=\"p-checkbox p-component\" *ngIf=\"tree.selectionMode == 'checkbox'\" [attr.aria-checked]=\"isSelected()\">\n                        <div class=\"p-checkbox-box\" [ngClass]=\"{'p-highlight': isSelected(), 'p-indeterminate': node.partialSelected}\">\n                            <span class=\"p-checkbox-icon pi\" [ngClass]=\"{'pi-check':isSelected(),'pi-minus':node.partialSelected}\"></span>\n                        </div>\n                    </div>\n                    <span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span>\n                    <span class=\"p-treenode-label\">\n                            <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                            <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                            </span>\n                    </span>\n                </div>\n                <ul class=\"p-treenode-children\" style=\"display: none;\" *ngIf=\"!tree.virtualScroll && node.children && node.expanded\" [style.display]=\"node.expanded ? 'block' : 'none'\" role=\"group\">\n                    <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; let index=index; trackBy: tree.trackBy\" [node]=\"childNode\" [parentNode]=\"node\"\n                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [style.height.px]=\"tree.virtualNodeHeight\" [level]=\"level + 1\"></p-treeNode>\n                </ul>\n            </li>\n            <li *ngIf=\"tree.droppableNodes&&lastChild\" class=\"p-treenode-droppoint\" [ngClass]=\"{'p-treenode-droppoint-active':draghoverNext}\"\n            (drop)=\"onDropPoint($event,1)\" (dragover)=\"onDropPointDragOver($event)\" (dragenter)=\"onDropPointDragEnter($event,1)\" (dragleave)=\"onDropPointDragLeave($event)\"></li>\n            <table *ngIf=\"tree.horizontal\" [class]=\"node.styleClass\">\n                <tbody>\n                    <tr>\n                        <td class=\"p-treenode-connector\" *ngIf=\"!root\">\n                            <table class=\"p-treenode-connector-table\">\n                                <tbody>\n                                    <tr>\n                                        <td [ngClass]=\"{'p-treenode-connector-line':!firstChild}\"></td>\n                                    </tr>\n                                    <tr>\n                                        <td [ngClass]=\"{'p-treenode-connector-line':!lastChild}\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td class=\"p-treenode\" [ngClass]=\"{'p-treenode-collapsed':!node.expanded}\">\n                            <div class=\"p-treenode-content\" tabindex=\"0\" [ngClass]=\"{'p-treenode-selectable':tree.selectionMode,'p-highlight':isSelected()}\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\"\n                                (touchend)=\"onNodeTouchEnd()\" (keydown)=\"onNodeKeydown($event)\">\n                                <span class=\"p-tree-toggler pi pi-fw\" [ngClass]=\"{'pi-plus':!node.expanded,'pi-minus':node.expanded}\" *ngIf=\"!isLeaf()\" (click)=\"toggle($event)\"></span>\n                                <span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span>\n                                <span class=\"p-treenode-label\">\n                                    <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                                    <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                        <ng-container *ngTemplateOutlet=\"tree.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                                    </span>\n                                </span>\n                            </div>\n                        </td>\n                        <td class=\"p-treenode-children-container\" *ngIf=\"node.children && node.expanded\" [style.display]=\"node.expanded ? 'table-cell' : 'none'\">\n                            <div class=\"p-treenode-children\">\n                                <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last; trackBy: tree.trackBy\" [node]=\"childNode\"\n                                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\"></p-treeNode>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </ng-template>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return Tree; })]
            }] }]; }, { rowNode: [{
            type: core.Input
        }], node: [{
            type: core.Input
        }], parentNode: [{
            type: core.Input
        }], root: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }], firstChild: [{
            type: core.Input
        }], lastChild: [{
            type: core.Input
        }], level: [{
            type: core.Input
        }], indentation: [{
            type: core.Input
        }] }); })();
        return UITreeNode;
    }());
    UITreeNode.ICON_CLASS = 'p-treenode-icon ';
    UITreeNode.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return Tree; }),] }] }
    ]; };
    UITreeNode.propDecorators = {
        rowNode: [{ type: core.Input }],
        node: [{ type: core.Input }],
        parentNode: [{ type: core.Input }],
        root: [{ type: core.Input }],
        index: [{ type: core.Input }],
        firstChild: [{ type: core.Input }],
        lastChild: [{ type: core.Input }],
        level: [{ type: core.Input }],
        indentation: [{ type: core.Input }]
    };
    var Tree = /** @class */ (function () {
        function Tree(el, dragDropService) {
            this.el = el;
            this.dragDropService = dragDropService;
            this.selectionChange = new core.EventEmitter();
            this.onNodeSelect = new core.EventEmitter();
            this.onNodeUnselect = new core.EventEmitter();
            this.onNodeExpand = new core.EventEmitter();
            this.onNodeCollapse = new core.EventEmitter();
            this.onNodeContextMenuSelect = new core.EventEmitter();
            this.onNodeDrop = new core.EventEmitter();
            this.layout = 'vertical';
            this.metaKeySelection = true;
            this.propagateSelectionUp = true;
            this.propagateSelectionDown = true;
            this.loadingIcon = 'pi pi-spinner';
            this.emptyMessage = 'No records found';
            this.filterBy = 'label';
            this.filterMode = 'lenient';
            this.indentation = 1.5;
            this.trackBy = function (index, item) { return item; };
            this.onFilter = new core.EventEmitter();
        }
        Tree.prototype.ngOnInit = function () {
            var _this = this;
            if (this.droppableNodes) {
                this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(function (event) {
                    _this.dragNodeTree = event.tree;
                    _this.dragNode = event.node;
                    _this.dragNodeSubNodes = event.subNodes;
                    _this.dragNodeIndex = event.index;
                    _this.dragNodeScope = event.scope;
                });
                this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(function (event) {
                    _this.dragNodeTree = null;
                    _this.dragNode = null;
                    _this.dragNodeSubNodes = null;
                    _this.dragNodeIndex = null;
                    _this.dragNodeScope = null;
                    _this.dragHover = false;
                });
            }
        };
        Tree.prototype.ngOnChanges = function (simpleChange) {
            if (simpleChange.value) {
                this.updateSerializedValue();
            }
            if (simpleChange.scrollHeight && this.virtualScrollBody) {
                this.virtualScrollBody.checkViewportSize();
            }
        };
        Object.defineProperty(Tree.prototype, "horizontal", {
            get: function () {
                return this.layout == 'horizontal';
            },
            enumerable: false,
            configurable: true
        });
        Tree.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.templates.length) {
                this.templateMap = {};
            }
            this.templates.forEach(function (item) {
                _this.templateMap[item.name] = item.template;
            });
        };
        Tree.prototype.updateSerializedValue = function () {
            this.serializedValue = [];
            this.serializeNodes(null, this.getRootNode(), 0, true);
        };
        Tree.prototype.serializeNodes = function (parent, nodes, level, visible) {
            var e_1, _a;
            if (nodes && nodes.length) {
                try {
                    for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var node = nodes_1_1.value;
                        node.parent = parent;
                        var rowNode = {
                            node: node,
                            parent: parent,
                            level: level,
                            visible: visible && (parent ? parent.expanded : true)
                        };
                        this.serializedValue.push(rowNode);
                        if (rowNode.visible && node.expanded) {
                            this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        Tree.prototype.onNodeClick = function (event, node) {
            var eventTarget = event.target;
            if (dom.DomHandler.hasClass(eventTarget, 'p-tree-toggler') || dom.DomHandler.hasClass(eventTarget, 'p-tree-toggler-icon')) {
                return;
            }
            else if (this.selectionMode) {
                if (node.selectable === false) {
                    return;
                }
                if (this.hasFilteredNodes()) {
                    node = this.getNodeWithKey(node.key, this.value);
                    if (!node) {
                        return;
                    }
                }
                var index_1 = this.findIndexInSelection(node);
                var selected = (index_1 >= 0);
                if (this.isCheckboxSelectionMode()) {
                    if (selected) {
                        if (this.propagateSelectionDown)
                            this.propagateDown(node, false);
                        else
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                        if (this.propagateSelectionUp && node.parent) {
                            this.propagateUp(node.parent, false);
                        }
                        this.selectionChange.emit(this.selection);
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.propagateSelectionDown)
                            this.propagateDown(node, true);
                        else
                            this.selection = __spread(this.selection || [], [node]);
                        if (this.propagateSelectionUp && node.parent) {
                            this.propagateUp(node.parent, true);
                        }
                        this.selectionChange.emit(this.selection);
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    var metaSelection = this.nodeTouched ? false : this.metaKeySelection;
                    if (metaSelection) {
                        var metaKey = (event.metaKey || event.ctrlKey);
                        if (selected && metaKey) {
                            if (this.isSingleSelectionMode()) {
                                this.selectionChange.emit(null);
                            }
                            else {
                                this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                                this.selectionChange.emit(this.selection);
                            }
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            if (this.isSingleSelectionMode()) {
                                this.selectionChange.emit(node);
                            }
                            else if (this.isMultipleSelectionMode()) {
                                this.selection = (!metaKey) ? [] : this.selection || [];
                                this.selection = __spread(this.selection, [node]);
                                this.selectionChange.emit(this.selection);
                            }
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            if (selected) {
                                this.selection = null;
                                this.onNodeUnselect.emit({ originalEvent: event, node: node });
                            }
                            else {
                                this.selection = node;
                                this.onNodeSelect.emit({ originalEvent: event, node: node });
                            }
                        }
                        else {
                            if (selected) {
                                this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                                this.onNodeUnselect.emit({ originalEvent: event, node: node });
                            }
                            else {
                                this.selection = __spread(this.selection || [], [node]);
                                this.onNodeSelect.emit({ originalEvent: event, node: node });
                            }
                        }
                        this.selectionChange.emit(this.selection);
                    }
                }
            }
            this.nodeTouched = false;
        };
        Tree.prototype.onNodeTouchEnd = function () {
            this.nodeTouched = true;
        };
        Tree.prototype.onNodeRightClick = function (event, node) {
            if (this.contextMenu) {
                var eventTarget = event.target;
                if (eventTarget.className && eventTarget.className.indexOf('p-tree-toggler') === 0) {
                    return;
                }
                else {
                    var index = this.findIndexInSelection(node);
                    var selected = (index >= 0);
                    if (!selected) {
                        if (this.isSingleSelectionMode())
                            this.selectionChange.emit(node);
                        else
                            this.selectionChange.emit([node]);
                    }
                    this.contextMenu.show(event);
                    this.onNodeContextMenuSelect.emit({ originalEvent: event, node: node });
                }
            }
        };
        Tree.prototype.findIndexInSelection = function (node) {
            var index = -1;
            if (this.selectionMode && this.selection) {
                if (this.isSingleSelectionMode()) {
                    var areNodesEqual = (this.selection.key && this.selection.key === node.key) || this.selection == node;
                    index = areNodesEqual ? 0 : -1;
                }
                else {
                    for (var i = 0; i < this.selection.length; i++) {
                        var selectedNode = this.selection[i];
                        var areNodesEqual = (selectedNode.key && selectedNode.key === node.key) || selectedNode == node;
                        if (areNodesEqual) {
                            index = i;
                            break;
                        }
                    }
                }
            }
            return index;
        };
        Tree.prototype.syncNodeOption = function (node, parentNodes, option, value) {
            // to synchronize the node option between the filtered nodes and the original nodes(this.value)
            var _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
            if (_node) {
                _node[option] = value || node[option];
            }
        };
        Tree.prototype.hasFilteredNodes = function () {
            return this.filter && this.filteredNodes && this.filteredNodes.length;
        };
        Tree.prototype.getNodeWithKey = function (key, nodes) {
            var e_2, _a;
            try {
                for (var nodes_2 = __values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                    var node = nodes_2_1.value;
                    if (node.key === key) {
                        return node;
                    }
                    if (node.children) {
                        var matchedNode = this.getNodeWithKey(key, node.children);
                        if (matchedNode) {
                            return matchedNode;
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        Tree.prototype.propagateUp = function (node, select) {
            var e_3, _a;
            if (node.children && node.children.length) {
                var selectedCount = 0;
                var childPartialSelected = false;
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (this.isSelected(child)) {
                            selectedCount++;
                        }
                        else if (child.partialSelected) {
                            childPartialSelected = true;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (select && selectedCount == node.children.length) {
                    this.selection = __spread(this.selection || [], [node]);
                    node.partialSelected = false;
                }
                else {
                    if (!select) {
                        var index_2 = this.findIndexInSelection(node);
                        if (index_2 >= 0) {
                            this.selection = this.selection.filter(function (val, i) { return i != index_2; });
                        }
                    }
                    if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                        node.partialSelected = true;
                    else
                        node.partialSelected = false;
                }
                this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
            }
            var parent = node.parent;
            if (parent) {
                this.propagateUp(parent, select);
            }
        };
        Tree.prototype.propagateDown = function (node, select) {
            var e_4, _a;
            var index = this.findIndexInSelection(node);
            if (select && index == -1) {
                this.selection = __spread(this.selection || [], [node]);
            }
            else if (!select && index > -1) {
                this.selection = this.selection.filter(function (val, i) { return i != index; });
            }
            node.partialSelected = false;
            this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
            if (node.children && node.children.length) {
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        this.propagateDown(child, select);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
        Tree.prototype.isSelected = function (node) {
            return this.findIndexInSelection(node) != -1;
        };
        Tree.prototype.isSingleSelectionMode = function () {
            return this.selectionMode && this.selectionMode == 'single';
        };
        Tree.prototype.isMultipleSelectionMode = function () {
            return this.selectionMode && this.selectionMode == 'multiple';
        };
        Tree.prototype.isCheckboxSelectionMode = function () {
            return this.selectionMode && this.selectionMode == 'checkbox';
        };
        Tree.prototype.isNodeLeaf = function (node) {
            return node.leaf == false ? false : !(node.children && node.children.length);
        };
        Tree.prototype.getRootNode = function () {
            return this.filteredNodes ? this.filteredNodes : this.value;
        };
        Tree.prototype.getTemplateForNode = function (node) {
            if (this.templateMap)
                return node.type ? this.templateMap[node.type] : this.templateMap['default'];
            else
                return null;
        };
        Tree.prototype.onDragOver = function (event) {
            if (this.droppableNodes && (!this.value || this.value.length === 0)) {
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
        };
        Tree.prototype.onDrop = function (event) {
            if (this.droppableNodes && (!this.value || this.value.length === 0)) {
                event.preventDefault();
                var dragNode = this.dragNode;
                if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
                    var dragNodeIndex = this.dragNodeIndex;
                    this.dragNodeSubNodes.splice(dragNodeIndex, 1);
                    this.value = this.value || [];
                    this.value.push(dragNode);
                    this.dragDropService.stopDrag({
                        node: dragNode
                    });
                }
            }
        };
        Tree.prototype.onDragEnter = function (event) {
            if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
                this.dragHover = true;
            }
        };
        Tree.prototype.onDragLeave = function (event) {
            if (this.droppableNodes) {
                var rect = event.currentTarget.getBoundingClientRect();
                if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
                    this.dragHover = false;
                }
            }
        };
        Tree.prototype.allowDrop = function (dragNode, dropNode, dragNodeScope) {
            if (!dragNode) {
                //prevent random html elements to be dragged
                return false;
            }
            else if (this.isValidDragScope(dragNodeScope)) {
                var allow = true;
                if (dropNode) {
                    if (dragNode === dropNode) {
                        allow = false;
                    }
                    else {
                        var parent = dropNode.parent;
                        while (parent != null) {
                            if (parent === dragNode) {
                                allow = false;
                                break;
                            }
                            parent = parent.parent;
                        }
                    }
                }
                return allow;
            }
            else {
                return false;
            }
        };
        Tree.prototype.isValidDragScope = function (dragScope) {
            var e_5, _a, e_6, _b;
            var dropScope = this.droppableScope;
            if (dropScope) {
                if (typeof dropScope === 'string') {
                    if (typeof dragScope === 'string')
                        return dropScope === dragScope;
                    else if (dragScope instanceof Array)
                        return dragScope.indexOf(dropScope) != -1;
                }
                else if (dropScope instanceof Array) {
                    if (typeof dragScope === 'string') {
                        return dropScope.indexOf(dragScope) != -1;
                    }
                    else if (dragScope instanceof Array) {
                        try {
                            for (var dropScope_1 = __values(dropScope), dropScope_1_1 = dropScope_1.next(); !dropScope_1_1.done; dropScope_1_1 = dropScope_1.next()) {
                                var s = dropScope_1_1.value;
                                try {
                                    for (var dragScope_1 = (e_6 = void 0, __values(dragScope)), dragScope_1_1 = dragScope_1.next(); !dragScope_1_1.done; dragScope_1_1 = dragScope_1.next()) {
                                        var ds = dragScope_1_1.value;
                                        if (s === ds) {
                                            return true;
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (dragScope_1_1 && !dragScope_1_1.done && (_b = dragScope_1.return)) _b.call(dragScope_1);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (dropScope_1_1 && !dropScope_1_1.done && (_a = dropScope_1.return)) _a.call(dropScope_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                    }
                }
                return false;
            }
            else {
                return true;
            }
        };
        Tree.prototype._filter = function (event) {
            var e_7, _a;
            var filterValue = event.target.value;
            if (filterValue === '') {
                this.filteredNodes = null;
            }
            else {
                this.filteredNodes = [];
                var searchFields = this.filterBy.split(',');
                var filterText = utils.ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
                var isStrictMode = this.filterMode === 'strict';
                try {
                    for (var _b = __values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var node = _c.value;
                        var copyNode = Object.assign({}, node);
                        var paramsWithoutNode = { searchFields: searchFields, filterText: filterText, isStrictMode: isStrictMode };
                        if ((isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                            (!isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                            this.filteredNodes.push(copyNode);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            this.updateSerializedValue();
            this.onFilter.emit({
                filter: filterValue,
                filteredValue: this.filteredNodes
            });
        };
        Tree.prototype.findFilteredNodes = function (node, paramsWithoutNode) {
            var e_8, _a;
            if (node) {
                var matched = false;
                if (node.children) {
                    var childNodes = __spread(node.children);
                    node.children = [];
                    try {
                        for (var childNodes_1 = __values(childNodes), childNodes_1_1 = childNodes_1.next(); !childNodes_1_1.done; childNodes_1_1 = childNodes_1.next()) {
                            var childNode = childNodes_1_1.value;
                            var copyChildNode = Object.assign({}, childNode);
                            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                                matched = true;
                                node.children.push(copyChildNode);
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (childNodes_1_1 && !childNodes_1_1.done && (_a = childNodes_1.return)) _a.call(childNodes_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                if (matched) {
                    node.expanded = true;
                    return true;
                }
            }
        };
        Tree.prototype.isFilterMatched = function (node, _a) {
            var e_9, _b;
            var searchFields = _a.searchFields, filterText = _a.filterText, isStrictMode = _a.isStrictMode;
            var matched = false;
            try {
                for (var searchFields_1 = __values(searchFields), searchFields_1_1 = searchFields_1.next(); !searchFields_1_1.done; searchFields_1_1 = searchFields_1.next()) {
                    var field = searchFields_1_1.value;
                    var fieldValue = utils.ObjectUtils.removeAccents(String(utils.ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
                    if (fieldValue.indexOf(filterText) > -1) {
                        matched = true;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (searchFields_1_1 && !searchFields_1_1.done && (_b = searchFields_1.return)) _b.call(searchFields_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
            if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, { searchFields: searchFields, filterText: filterText, isStrictMode: isStrictMode }) || matched;
            }
            return matched;
        };
        Tree.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Tree.prototype.ngOnDestroy = function () {
            if (this.dragStartSubscription) {
                this.dragStartSubscription.unsubscribe();
            }
            if (this.dragStopSubscription) {
                this.dragStopSubscription.unsubscribe();
            }
        };
Tree.ɵfac = function Tree_Factory(t) { return new (t || Tree)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.TreeDragDropService, 8)); };
Tree.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Tree, selectors: [["p-tree"]], contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Tree_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { layout: "layout", metaKeySelection: "metaKeySelection", propagateSelectionUp: "propagateSelectionUp", propagateSelectionDown: "propagateSelectionDown", loadingIcon: "loadingIcon", emptyMessage: "emptyMessage", filterBy: "filterBy", filterMode: "filterMode", indentation: "indentation", trackBy: "trackBy", selection: "selection", value: "value", selectionMode: "selectionMode", style: "style", styleClass: "styleClass", contextMenu: "contextMenu", draggableScope: "draggableScope", droppableScope: "droppableScope", draggableNodes: "draggableNodes", droppableNodes: "droppableNodes", loading: "loading", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", validateDrop: "validateDrop", filter: "filter", filterPlaceholder: "filterPlaceholder", filterLocale: "filterLocale", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", virtualNodeHeight: "virtualNodeHeight", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { selectionChange: "selectionChange", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse", onNodeContextMenuSelect: "onNodeContextMenuSelect", onNodeDrop: "onNodeDrop", onFilter: "onFilter" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle", "drop", "dragover", "dragenter", "dragleave"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-tree-filter-container", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [1, "p-tree-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], ["filter", ""], [1, "p-tree-filter-icon", "pi", "pi-search"], [1, "p-tree-wrapper"], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level"], [1, "p-tree-wrapper", 3, "itemSize", "minBufferPx", "maxBufferPx"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "height", "indentation", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "indentation"], [1, "p-tree-empty-message"], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]], template: function Tree_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Tree_div_0_Template, 7, 14, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Tree_div_1_Template, 4, 9, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.horizontal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.horizontal);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, UITreeNode, ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf], styles: [".p-tree-container{overflow:auto}.p-tree-container,.p-treenode-children{list-style-type:none;margin:0;padding:0}.p-tree-wrapper{overflow:auto}.p-tree-toggler,.p-treenode-selectable{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-tree-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-tree-filter{width:100%}.p-tree-filter-container{display:block;position:relative;width:100%}.p-tree-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-tree-loading{min-height:4rem;position:relative}.p-tree .p-tree-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-tree-flex-scrollable{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-tree-flex-scrollable .p-tree-wrapper{-ms-flex:1;flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0}.p-tree-horizontal{overflow:auto;padding-left:0;padding-right:0;width:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal td,.p-tree.p-tree-horizontal tr{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-weight:400;padding:.4em 1em .4em .2em}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-x scroll 50% rgba(0,0,0,0);padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed,.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{margin:0;padding:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-y scroll 0 0 rgba(0,0,0,0);width:1px}.p-tree.p-tree-horizontal table{height:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Tree, [{
        type: core.Component,
        args: [{
                selector: 'p-tree',
                template: "\n        <div [ngClass]=\"{'p-tree p-component':true,'p-tree-selectable':selectionMode,\n                'p-treenode-dragover':dragHover,'p-tree-loading': loading, 'p-tree-flex-scrollable': scrollHeight === 'flex'}\" \n            [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"!horizontal\"\n            (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\" (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\">\n            <div class=\"p-tree-loading-overlay p-component-overlay\" *ngIf=\"loading\">\n                <i [class]=\"'p-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"filter\" class=\"p-tree-filter-container\">\n                <input #filter type=\"text\" autocomplete=\"off\" class=\"p-tree-filter p-inputtext p-component\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (input)=\"_filter($event)\">\n                    <span class=\"p-tree-filter-icon pi pi-search\"></span>\n            </div>\n            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                <div class=\"p-tree-wrapper\" [style.max-height]=\"scrollHeight\">\n                    <ul class=\"p-tree-container\" *ngIf=\"getRootNode()\" role=\"tree\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n                        <p-treeNode *ngFor=\"let node of getRootNode(); let firstChild=first;let lastChild=last; let index=index; trackBy: trackBy\" [node]=\"node\"\n                                    [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [level]=\"0\"></p-treeNode>\n                    </ul>\n                </div>\n            </ng-container>\n            <ng-template #virtualScrollList>\n                <cdk-virtual-scroll-viewport class=\"p-tree-wrapper\" [style.height]=\"scrollHeight\" [itemSize]=\"virtualNodeHeight\" [minBufferPx]=\"minBufferPx\" [maxBufferPx]=\"maxBufferPx\">\n                    <ul class=\"p-tree-container\" *ngIf=\"getRootNode()\" role=\"tree\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n                        <p-treeNode *cdkVirtualFor=\"let rowNode of serializedValue; let firstChild=first; let lastChild=last; let index=index; trackBy: trackBy; templateCacheSize: 0\"  [level]=\"rowNode.level\"\n                                    [rowNode]=\"rowNode\" [node]=\"rowNode.node\" [firstChild]=\"firstChild\" [lastChild]=\"lastChild\" [index]=\"index\" [style.height.px]=\"virtualNodeHeight\" [indentation]=\"indentation\"></p-treeNode>\n                    </ul>\n                </cdk-virtual-scroll-viewport>\n            </ng-template>\n            <div class=\"p-tree-empty-message\" *ngIf=\"!loading && (value == null || value.length === 0)\">{{emptyMessage}}</div>\n        </div>\n        <div [ngClass]=\"{'p-tree p-tree-horizontal p-component':true,'p-tree-selectable':selectionMode}\"  [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"horizontal\">\n            <div class=\"p-tree-loading-mask p-component-overlay\" *ngIf=\"loading\">\n                <i [class]=\"'p-tree-loading-icon pi-spin ' + loadingIcon\"></i>\n            </div>\n            <table *ngIf=\"value&&value[0]\">\n                <p-treeNode [node]=\"value[0]\" [root]=\"true\"></p-treeNode>\n            </table>\n            <div class=\"p-tree-empty-message\" *ngIf=\"!loading && (value == null || value.length === 0)\">{{emptyMessage}}</div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-tree-container{overflow:auto}.p-tree-container,.p-treenode-children{list-style-type:none;margin:0;padding:0}.p-tree-wrapper{overflow:auto}.p-tree-toggler,.p-treenode-selectable{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-tree-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-tree-filter{width:100%}.p-tree-filter-container{display:block;position:relative;width:100%}.p-tree-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-tree-loading{min-height:4rem;position:relative}.p-tree .p-tree-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}.p-tree-flex-scrollable{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-tree-flex-scrollable .p-tree-wrapper{-ms-flex:1;flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0}.p-tree-horizontal{overflow:auto;padding-left:0;padding-right:0;width:auto}.p-tree.p-tree-horizontal table,.p-tree.p-tree-horizontal td,.p-tree.p-tree-horizontal tr{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.p-tree-horizontal .p-treenode-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-weight:400;padding:.4em 1em .4em .2em}.p-tree-horizontal .p-treenode-parent .p-treenode-content{font-weight:400;white-space:nowrap}.p-tree.p-tree-horizontal .p-treenode{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-x scroll 50% rgba(0,0,0,0);padding:.25rem 2.5rem}.p-tree.p-tree-horizontal .p-treenode.p-treenode-collapsed,.p-tree.p-tree-horizontal .p-treenode.p-treenode-leaf{padding-right:0}.p-tree.p-tree-horizontal .p-treenode-children{margin:0;padding:0}.p-tree.p-tree-horizontal .p-treenode-connector{width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-table{height:100%;width:1px}.p-tree.p-tree-horizontal .p-treenode-connector-line{background:url(\"data:image/gif;base64,R0lGODlhAQABAIAAALGxsf///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzQgNDYuMjcyOTc2LCBTYXQgSmFuIDI3IDIwMDcgMjI6Mzc6MzcgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgRmlyZXdvcmtzIENTMzwveGFwOkNyZWF0b3JUb29sPgogICAgICAgICA8eGFwOkNyZWF0ZURhdGU+MjAxMC0wMy0xMVQxMDoxNjo0MVo8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMC0wMy0xMVQxMjo0NDoxOVo8L3hhcDpNb2RpZnlEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9naWY8L2RjOmZvcm1hdD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PAA6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQABwD/ACwAAAAAAQABAAACAkQBADs=\") repeat-y scroll 0 0 rgba(0,0,0,0);width:1px}.p-tree.p-tree-horizontal table{height:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc3.TreeDragDropService, decorators: [{
                type: core.Optional
            }] }]; }, { selectionChange: [{
            type: core.Output
        }], onNodeSelect: [{
            type: core.Output
        }], onNodeUnselect: [{
            type: core.Output
        }], onNodeExpand: [{
            type: core.Output
        }], onNodeCollapse: [{
            type: core.Output
        }], onNodeContextMenuSelect: [{
            type: core.Output
        }], onNodeDrop: [{
            type: core.Output
        }], layout: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], propagateSelectionUp: [{
            type: core.Input
        }], propagateSelectionDown: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], emptyMessage: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], filterMode: [{
            type: core.Input
        }], indentation: [{
            type: core.Input
        }], trackBy: [{
            type: core.Input
        }], onFilter: [{
            type: core.Output
        }], selection: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], selectionMode: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], contextMenu: [{
            type: core.Input
        }], draggableScope: [{
            type: core.Input
        }], droppableScope: [{
            type: core.Input
        }], draggableNodes: [{
            type: core.Input
        }], droppableNodes: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], validateDrop: [{
            type: core.Input
        }], filter: [{
            type: core.Input
        }], filterPlaceholder: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], scrollHeight: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], virtualNodeHeight: [{
            type: core.Input
        }], minBufferPx: [{
            type: core.Input
        }], maxBufferPx: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }], virtualScrollBody: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }] }); })();
        return Tree;
    }());
    Tree.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: api.TreeDragDropService, decorators: [{ type: core.Optional }] }
    ]; };
    Tree.propDecorators = {
        value: [{ type: core.Input }],
        selectionMode: [{ type: core.Input }],
        selection: [{ type: core.Input }],
        selectionChange: [{ type: core.Output }],
        onNodeSelect: [{ type: core.Output }],
        onNodeUnselect: [{ type: core.Output }],
        onNodeExpand: [{ type: core.Output }],
        onNodeCollapse: [{ type: core.Output }],
        onNodeContextMenuSelect: [{ type: core.Output }],
        onNodeDrop: [{ type: core.Output }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        contextMenu: [{ type: core.Input }],
        layout: [{ type: core.Input }],
        draggableScope: [{ type: core.Input }],
        droppableScope: [{ type: core.Input }],
        draggableNodes: [{ type: core.Input }],
        droppableNodes: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        propagateSelectionUp: [{ type: core.Input }],
        propagateSelectionDown: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        emptyMessage: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        validateDrop: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterMode: [{ type: core.Input }],
        filterPlaceholder: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        scrollHeight: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        virtualNodeHeight: [{ type: core.Input }],
        minBufferPx: [{ type: core.Input }],
        maxBufferPx: [{ type: core.Input }],
        indentation: [{ type: core.Input }],
        trackBy: [{ type: core.Input }],
        onFilter: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        virtualScrollBody: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }]
    };
    var TreeModule = /** @class */ (function () {
        function TreeModule() {
        }
TreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeModule });
TreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TreeModule_Factory(t) { return new (t || TreeModule)(); }, imports: [[common.CommonModule, scrolling.ScrollingModule, ripple.RippleModule], ɵngcc3.SharedModule, ɵngcc4.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeModule, { declarations: [Tree, UITreeNode], imports: [ɵngcc1.CommonModule, ɵngcc4.ScrollingModule, ɵngcc2.RippleModule], exports: [Tree, ɵngcc3.SharedModule, ɵngcc4.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, scrolling.ScrollingModule, ripple.RippleModule],
                exports: [Tree, api.SharedModule, scrolling.ScrollingModule],
                declarations: [Tree, UITreeNode]
            }]
    }], function () { return []; }, null); })();
        return TreeModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Tree = Tree;
    exports.TreeModule = TreeModule;
    exports.UITreeNode = UITreeNode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tree.umd.js.map