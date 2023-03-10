(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('@angular/router'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('@angular/router'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/megamenu', ['@angular/core','@angular/common','primeng/ripple','@angular/router','exports', '@angular/core', '@angular/common', 'primeng/api', '@angular/router', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.megamenu = {}), global.ng.core, global.ng.common, global.primeng.api, global.ng.router, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, api, router, ripple) { 
function MegaMenu_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MegaMenu_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
} }
var _c0 = function (a0) { return { "p-hidden": a0 }; };
function MegaMenu_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 10);
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, category_r6.visible === false));
} }
function MegaMenu_ng_template_3_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", category_r6.icon);
} }
function MegaMenu_ng_template_3_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(category_r6.label);
} }
function MegaMenu_ng_template_3_li_1_a_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", category_r6.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c1 = function (a0, a1) { return { "pi-angle-down": a0, "pi-angle-right": a1 }; };
function MegaMenu_ng_template_3_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 23);
} if (rf & 2) {
    var ctx_r17 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r17.orientation == "horizontal", ctx_r17.orientation == "vertical"));
} }
var _c2 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function MegaMenu_ng_template_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onCategoryClick($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_1_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 18, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MegaMenu_ng_template_3_li_1_a_1_span_5_Template, 1, 4, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r15 = ɵngcc0.ɵɵreference(4);
    var category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(category_r6.styleClass);
    ɵngcc0.ɵɵproperty("href", category_r6.url || "#", ɵngcc0.ɵɵsanitizeUrl)("ngClass", ɵngcc0.ɵɵpureFunction1(13, _c2, category_r6.disabled))("ngStyle", category_r6.style);
    ɵngcc0.ɵɵattribute("target", category_r6.target)("title", category_r6.title)("id", category_r6.id)("tabindex", category_r6.tabindex ? category_r6.tabindex : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.escape !== false)("ngIfElse", _r15);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.items);
} }
function MegaMenu_ng_template_3_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", category_r6.icon);
} }
function MegaMenu_ng_template_3_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(category_r6.label);
} }
function MegaMenu_ng_template_3_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", category_r6.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c3 = function () { return { exact: false }; };
function MegaMenu_ng_template_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 24);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); var category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onCategoryClick($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_2_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 25, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r27 = ɵngcc0.ɵɵreference(4);
    var category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(category_r6.styleClass);
    ɵngcc0.ɵɵproperty("routerLink", category_r6.routerLink)("queryParams", category_r6.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", category_r6.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(21, _c3))("ngClass", ɵngcc0.ɵɵpureFunction1(22, _c2, category_r6.disabled))("ngStyle", category_r6.style)("fragment", category_r6.fragment)("queryParamsHandling", category_r6.queryParamsHandling)("preserveFragment", category_r6.preserveFragment)("skipLocationChange", category_r6.skipLocationChange)("replaceUrl", category_r6.replaceUrl)("state", category_r6.state);
    ɵngcc0.ɵɵattribute("tabindex", category_r6.tabindex ? category_r6.tabindex : "0")("target", category_r6.target)("title", category_r6.title)("id", category_r6.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.escape !== false)("ngIfElse", _r27);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var submenu_r39 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submenu_r39.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 32);
} if (rf & 2) {
    var submenu_r39 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", submenu_r39.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 35);
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, item_r46.visible === false));
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r46.icon);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r46.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r46.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c4 = function (a0) { return { "p-disabled": a0 }; };
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r60 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 39);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r60); var item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r59 = ɵngcc0.ɵɵnextContext(6); return ctx_r59.itemClick($event, item_r46); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 40, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r54 = ɵngcc0.ɵɵreference(4);
    var item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("href", item_r46.url || "#", ɵngcc0.ɵɵsanitizeUrl)("ngClass", ɵngcc0.ɵɵpureFunction1(9, _c4, item_r46.disabled));
    ɵngcc0.ɵɵattribute("target", item_r46.target)("title", item_r46.title)("id", item_r46.id)("tabindex", item_r46.tabindex ? item_r46.tabindex : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r46.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r46.escape !== false)("ngIfElse", _r54);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r46.icon);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r46.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r46.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r71 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 41);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); var item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r70 = ɵngcc0.ɵɵnextContext(6); return ctx_r70.itemClick($event, item_r46); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 42, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r65 = ɵngcc0.ɵɵreference(4);
    var item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r46.routerLink)("queryParams", item_r46.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r46.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(18, _c3))("ngClass", ɵngcc0.ɵɵpureFunction1(19, _c4, item_r46.disabled))("fragment", item_r46.fragment)("queryParamsHandling", item_r46.queryParamsHandling)("preserveFragment", item_r46.preserveFragment)("skipLocationChange", item_r46.skipLocationChange)("replaceUrl", item_r46.replaceUrl)("state", item_r46.state);
    ɵngcc0.ɵɵattribute("tabindex", item_r46.tabindex ? item_r46.tabindex : "0")("target", item_r46.target)("title", item_r46.title)("id", item_r46.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r46.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r46.escape !== false)("ngIfElse", _r65);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 36);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_Template, 5, 11, "a", 37);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_Template, 5, 21, "a", 38);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r46 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c0, item_r46.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r46.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r46.routerLink);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_0_Template, 1, 3, "li", 33);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_Template, 3, 5, "li", 34);
} if (rf & 2) {
    var item_r46 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", item_r46.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r46.separator);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 28);
    ɵngcc0.ɵɵelementStart(1, "li", 29);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_span_2_Template, 2, 1, "span", 30);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_3_Template, 1, 1, "ng-template", null, 31, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_Template, 2, 2, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var submenu_r39 = ctx.$implicit;
    var _r41 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", submenu_r39.escape !== false)("ngIfElse", _r41);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", submenu_r39.items);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_Template, 6, 3, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r37 = ctx.$implicit;
    var category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    var ctx_r36 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r36.getColumnClass(category_r6));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", column_r37);
} }
function MegaMenu_ng_template_3_li_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵelementStart(1, "div", 27);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_Template, 2, 3, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", category_r6.items);
} }
var _c5 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function MegaMenu_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r78 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 11);
    ɵngcc0.ɵɵlistener("mouseenter", function MegaMenu_ng_template_3_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r78); var category_r6 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r77 = ɵngcc0.ɵɵnextContext(); return ctx_r77.onCategoryMouseEnter($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_1_Template, 6, 15, "a", 12);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_2_Template, 5, 24, "a", 13);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_Template, 3, 1, "div", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c5, category_r6 == ctx_r8.activeItem, category_r6.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !category_r6.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", category_r6.items);
} }
function MegaMenu_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MegaMenu_ng_template_3_li_0_Template, 1, 3, "li", 8);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_Template, 4, 7, "li", 9);
} if (rf & 2) {
    var category_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", category_r6.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !category_r6.separator);
} }
function MegaMenu_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MegaMenu_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.endTemplate);
} }
function MegaMenu_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
var _c6 = function (a1, a2) { return { "p-megamenu p-component": true, "p-megamenu-horizontal": a1, "p-megamenu-vertical": a2 }; };
var _c7 = ["*"];
'use strict';

    var MegaMenu = /** @class */ (function () {
        function MegaMenu(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.orientation = 'horizontal';
            this.autoZIndex = true;
            this.baseZIndex = 0;
        }
        MegaMenu.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'start':
                        _this.startTemplate = item.template;
                        break;
                    case 'end':
                        _this.endTemplate = item.template;
                        break;
                }
            });
        };
        MegaMenu.prototype.onCategoryMouseEnter = function (event, menuitem) {
            if (menuitem.disabled) {
                event.preventDefault();
                return;
            }
            if (this.activeItem) {
                this.activeItem = menuitem;
            }
        };
        MegaMenu.prototype.onCategoryClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (!item.url) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            if (item.items) {
                if (this.activeItem && this.activeItem === item) {
                    this.activeItem = null;
                    this.unbindDocumentClickListener();
                }
                else {
                    this.activeItem = item;
                    this.bindDocumentClickListener();
                }
            }
        };
        MegaMenu.prototype.itemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (!item.url) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            this.activeItem = null;
        };
        MegaMenu.prototype.getColumnClass = function (menuitem) {
            var length = menuitem.items ? menuitem.items.length : 0;
            var columnClass;
            switch (length) {
                case 2:
                    columnClass = 'p-megamenu-col-6';
                    break;
                case 3:
                    columnClass = 'p-megamenu-col-4';
                    break;
                case 4:
                    columnClass = 'p-megamenu-col-3';
                    break;
                case 6:
                    columnClass = 'p-megamenu-col-2';
                    break;
                default:
                    columnClass = 'p-megamenu-col-12';
                    break;
            }
            return columnClass;
        };
        MegaMenu.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                this.documentClickListener = function (event) {
                    if (_this.el && !_this.el.nativeElement.contains(event.target)) {
                        _this.activeItem = null;
                        _this.unbindDocumentClickListener();
                        _this.cd.markForCheck();
                    }
                };
                document.addEventListener('click', this.documentClickListener);
            }
        };
        MegaMenu.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        };
MegaMenu.ɵfac = function MegaMenu_Factory(t) { return new (t || MegaMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MegaMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MegaMenu, selectors: [["p-megaMenu"]], contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { orientation: "orientation", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", model: "model", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c7, decls: 7, vars: 11, consts: [[3, "ngStyle", "ngClass"], ["class", "p-megamenu-start", 4, "ngIf"], ["role", "menubar", 1, "p-megamenu-root-list"], ["ngFor", "", 3, "ngForOf"], ["class", "p-megamenu-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-megamenu-start"], [4, "ngTemplateOutlet"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "mouseenter", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [3, "ngClass", "mouseenter"], ["pRipple", "", 3, "href", "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-megamenu-panel", 4, "ngIf"], ["pRipple", "", 3, "href", "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["categoryHtmlLabel", ""], ["class", "p-submenu-icon pi", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", 3, "ngClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["categoryHtmlRouteLabel", ""], [1, "p-megamenu-panel"], [1, "p-megamenu-grid"], ["role", "menu", 1, "p-megamenu-submenu"], [1, "p-megamenu-submenu-header"], [4, "ngIf", "ngIfElse"], ["submenuHtmlLabel", ""], [3, "innerHTML"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem", "role", "none", 3, "ngClass", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["role", "none", 1, "p-menuitem", 3, "ngClass"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "href", "ngClass", "click", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "href", "ngClass", "click"], ["htmlLabel", ""], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-megamenu-end"]], template: function MegaMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, MegaMenu_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ul", 2);
        ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_Template, 2, 2, "ng-template", 3);
        ɵngcc0.ɵɵtemplate(4, MegaMenu_div_4_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵtemplate(5, MegaMenu_ng_template_5_Template, 2, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r3 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c6, ctx.orientation == "horizontal", ctx.orientation == "vertical"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.startTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", _r3);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive], styles: [".p-megamenu-root-list{list-style:none;margin:0;padding:0}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{list-style:none;margin:0;padding:0}.p-megamenu-horizontal .p-megamenu-root-list{-ms-flex-align:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{-ms-flex-direction:column;flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon{margin-left:auto}.p-megamenu-grid{display:-ms-flexbox;display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{-ms-flex:0 0 auto;flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MegaMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-megaMenu',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\"\n            [ngClass]=\"{'p-megamenu p-component':true,'p-megamenu-horizontal': orientation == 'horizontal','p-megamenu-vertical': orientation == 'vertical'}\">\n            <div class=\"p-megamenu-start\" *ngIf=\"startTemplate\">\n                <ng-container *ngTemplateOutlet=\"startTemplate\"></ng-container>\n            </div>\n            <ul class=\"p-megamenu-root-list\" role=\"menubar\">\n                <ng-template ngFor let-category [ngForOf]=\"model\">\n                    <li *ngIf=\"category.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': category.visible === false}\">\n                    <li *ngIf=\"!category.separator\" [ngClass]=\"{'p-menuitem':true,'p-menuitem-active':category==activeItem, 'p-hidden': category.visible === false}\"\n                        (mouseenter)=\"onCategoryMouseEnter($event, category)\">\n                        <a *ngIf=\"!category.routerLink\" [href]=\"category.url||'#'\" [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\" (click)=\"onCategoryClick($event, category)\" [attr.tabindex]=\"category.tabindex ? category.tabindex : '0'\"\n                            [ngClass]=\"{'p-menuitem-link':true,'p-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\" pRipple>\n                            <span class=\"p-menuitem-icon\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"category.escape !== false; else categoryHtmlLabel\">{{category.label}}</span>\n                            <ng-template #categoryHtmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"category.label\"></span></ng-template>\n                            <span *ngIf=\"category.items\" class=\"p-submenu-icon pi\" [ngClass]=\"{'pi-angle-down':orientation=='horizontal','pi-angle-right':orientation=='vertical'}\"></span>\n                        </a>\n                        <a *ngIf=\"category.routerLink\" [routerLink]=\"category.routerLink\" [queryParams]=\"category.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"category.routerLinkActiveOptions||{exact:false}\" [attr.tabindex]=\"category.tabindex ? category.tabindex : '0'\" \n                            [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\"\n                            (click)=\"onCategoryClick($event, category)\" [ngClass]=\"{'p-menuitem-link':true,'p-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\"\n                            [fragment]=\"category.fragment\" [queryParamsHandling]=\"category.queryParamsHandling\" [preserveFragment]=\"category.preserveFragment\" [skipLocationChange]=\"category.skipLocationChange\" [replaceUrl]=\"category.replaceUrl\" [state]=\"category.state\" pRipple>\n                            <span class=\"p-menuitem-icon\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"category.escape !== false; else categoryHtmlRouteLabel\">{{category.label}}</span>\n                            <ng-template #categoryHtmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"category.label\"></span></ng-template>\n                        </a>\n                        <div class=\"p-megamenu-panel\" *ngIf=\"category.items\">\n                            <div class=\"p-megamenu-grid\">\n                                <ng-template ngFor let-column [ngForOf]=\"category.items\">\n                                    <div [class]=\"getColumnClass(category)\">\n                                        <ng-template ngFor let-submenu [ngForOf]=\"column\">\n                                            <ul class=\"p-megamenu-submenu\" role=\"menu\">\n                                                <li class=\"p-megamenu-submenu-header\">\n                                                    <span *ngIf=\"submenu.escape !== false; else submenuHtmlLabel\">{{submenu.label}}</span>\n                                                    <ng-template #submenuHtmlLabel><span [innerHTML]=\"submenu.label\"></span></ng-template>\n                                                </li>\n                                                <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                                                    <li *ngIf=\"item.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': item.visible === false}\" role=\"separator\">\n                                                    <li *ngIf=\"!item.separator\" class=\"p-menuitem\" [ngClass]=\"{'p-hidden': item.visible === false}\" role=\"none\">\n                                                        <a *ngIf=\"!item.routerLink\" role=\"menuitem\" [href]=\"item.url||'#'\" class=\"p-menuitem-link\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\"\n                                                            [ngClass]=\"{'p-disabled':item.disabled}\" (click)=\"itemClick($event, item)\" pRipple>\n                                                            <span class=\"p-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlLabel\">{{item.label}}</span>\n                                                            <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                                                        </a>\n                                                        <a *ngIf=\"item.routerLink\" role=\"menuitem\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [attr.tabindex]=\"item.tabindex ? item.tabindex : '0'\"\n                                                            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"p-menuitem-link\" \n                                                             [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'p-disabled':item.disabled}\" (click)=\"itemClick($event, item)\"\n                                                            [fragment]=\"item.fragment\" [queryParamsHandling]=\"item.queryParamsHandling\" [preserveFragment]=\"item.preserveFragment\" [skipLocationChange]=\"item.skipLocationChange\" [replaceUrl]=\"item.replaceUrl\" [state]=\"item.state\" pRipple>\n                                                            <span class=\"p-menuitem-icon\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlRouteLabel\">{{item.label}}</span>\n                                                            <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                                                        </a>\n                                                    </li>\n                                                </ng-template>\n                                            </ul>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </li>\n                </ng-template>\n                <div class=\"p-megamenu-end\" *ngIf=\"endTemplate; else legacy\">\n                    <ng-container *ngTemplateOutlet=\"endTemplate\"></ng-container>\n                </div>\n                <ng-template #legacy>\n                    <div class=\"p-megamenu-end\">\n                        <ng-content></ng-content>\n                    </div>\n                </ng-template>\n            </ul>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-megamenu-root-list{list-style:none;margin:0;padding:0}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{list-style:none;margin:0;padding:0}.p-megamenu-horizontal .p-megamenu-root-list{-ms-flex-align:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{-ms-flex-direction:column;flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon{margin-left:auto}.p-megamenu-grid{display:-ms-flexbox;display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{-ms-flex:0 0 auto;flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], model: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return MegaMenu;
    }());
    MegaMenu.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    MegaMenu.propDecorators = {
        model: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        orientation: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var MegaMenuModule = /** @class */ (function () {
        function MegaMenuModule() {
        }
MegaMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MegaMenuModule });
MegaMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MegaMenuModule_Factory(t) { return new (t || MegaMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule, ripple.RippleModule], ɵngcc3.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MegaMenuModule, { declarations: [MegaMenu], imports: [ɵngcc1.CommonModule, ɵngcc3.RouterModule, ɵngcc2.RippleModule], exports: [MegaMenu, ɵngcc3.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MegaMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule, ripple.RippleModule],
                exports: [MegaMenu, router.RouterModule],
                declarations: [MegaMenu]
            }]
    }], function () { return []; }, null); })();
        return MegaMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MegaMenu = MegaMenu;
    exports.MegaMenuModule = MegaMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-megamenu.umd.js.map