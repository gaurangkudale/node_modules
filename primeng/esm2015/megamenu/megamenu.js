import { NgModule, Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from '@angular/router';

function MegaMenu_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MegaMenu_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, MegaMenu_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
} }
const _c0 = function (a0) { return { "p-hidden": a0 }; };
function MegaMenu_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 10);
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, category_r6.visible === false));
} }
function MegaMenu_ng_template_3_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", category_r6.icon);
} }
function MegaMenu_ng_template_3_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(category_r6.label);
} }
function MegaMenu_ng_template_3_li_1_a_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", category_r6.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0, a1) { return { "pi-angle-down": a0, "pi-angle-right": a1 }; };
function MegaMenu_ng_template_3_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 23);
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r17.orientation == "horizontal", ctx_r17.orientation == "vertical"));
} }
const _c2 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function MegaMenu_ng_template_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onCategoryClick($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_1_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 18, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MegaMenu_ng_template_3_li_1_a_1_span_5_Template, 1, 4, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r15 = ɵngcc0.ɵɵreference(4);
    const category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
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
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", category_r6.icon);
} }
function MegaMenu_ng_template_3_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(category_r6.label);
} }
function MegaMenu_ng_template_3_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", category_r6.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c3 = function () { return { exact: false }; };
function MegaMenu_ng_template_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 24);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onCategoryClick($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_2_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 25, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r27 = ɵngcc0.ɵɵreference(4);
    const category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
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
    const submenu_r39 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submenu_r39.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 32);
} if (rf & 2) {
    const submenu_r39 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", submenu_r39.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 35);
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, item_r46.visible === false));
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 20);
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r46.icon);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r46.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r46.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c4 = function (a0) { return { "p-disabled": a0 }; };
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 39);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r60); const item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r59 = ɵngcc0.ɵɵnextContext(6); return ctx_r59.itemClick($event, item_r46); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 40, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r54 = ɵngcc0.ɵɵreference(4);
    const item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit;
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
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r46.icon);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r46.label);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const item_r46 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r46.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 41);
    ɵngcc0.ɵɵlistener("click", function MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); const item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r70 = ɵngcc0.ɵɵnextContext(6); return ctx_r70.itemClick($event, item_r46); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_1_Template, 1, 1, "span", 16);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_span_2_Template, 2, 1, "span", 17);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_ng_template_2_ng_template_1_ng_template_5_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 42, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r65 = ɵngcc0.ɵɵreference(4);
    const item_r46 = ɵngcc0.ɵɵnextContext(2).$implicit;
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
    const item_r46 = ɵngcc0.ɵɵnextContext().$implicit;
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
    const item_r46 = ctx.$implicit;
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
    const submenu_r39 = ctx.$implicit;
    const _r41 = ɵngcc0.ɵɵreference(4);
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
    const column_r37 = ctx.$implicit;
    const category_r6 = ɵngcc0.ɵɵnextContext(3).$implicit;
    const ctx_r36 = ɵngcc0.ɵɵnextContext();
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
    const category_r6 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", category_r6.items);
} }
const _c5 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function MegaMenu_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 11);
    ɵngcc0.ɵɵlistener("mouseenter", function MegaMenu_ng_template_3_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r78); const category_r6 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r77 = ɵngcc0.ɵɵnextContext(); return ctx_r77.onCategoryMouseEnter($event, category_r6); });
    ɵngcc0.ɵɵtemplate(1, MegaMenu_ng_template_3_li_1_a_1_Template, 6, 15, "a", 12);
    ɵngcc0.ɵɵtemplate(2, MegaMenu_ng_template_3_li_1_a_2_Template, 5, 24, "a", 13);
    ɵngcc0.ɵɵtemplate(3, MegaMenu_ng_template_3_li_1_div_3_Template, 3, 1, "div", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r6 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
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
    const category_r6 = ctx.$implicit;
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
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.endTemplate);
} }
function MegaMenu_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c6 = function (a1, a2) { return { "p-megamenu p-component": true, "p-megamenu-horizontal": a1, "p-megamenu-vertical": a2 }; };
const _c7 = ["*"];
export class MegaMenu {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.orientation = 'horizontal';
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'start':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                    this.endTemplate = item.template;
                    break;
            }
        });
    }
    onCategoryMouseEnter(event, menuitem) {
        if (menuitem.disabled) {
            event.preventDefault();
            return;
        }
        if (this.activeItem) {
            this.activeItem = menuitem;
        }
    }
    onCategoryClick(event, item) {
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
    }
    itemClick(event, item) {
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
    }
    getColumnClass(menuitem) {
        let length = menuitem.items ? menuitem.items.length : 0;
        let columnClass;
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
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.el && !this.el.nativeElement.contains(event.target)) {
                    this.activeItem = null;
                    this.unbindDocumentClickListener();
                    this.cd.markForCheck();
                }
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }
}
MegaMenu.ɵfac = function MegaMenu_Factory(t) { return new (t || MegaMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MegaMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MegaMenu, selectors: [["p-megaMenu"]], contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
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
        const _r3 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c6, ctx.orientation == "horizontal", ctx.orientation == "vertical"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.startTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", _r3);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive], styles: [".p-megamenu-root-list{list-style:none;margin:0;padding:0}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{list-style:none;margin:0;padding:0}.p-megamenu-horizontal .p-megamenu-root-list{-ms-flex-align:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{-ms-flex-direction:column;flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon{margin-left:auto}.p-megamenu-grid{display:-ms-flexbox;display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{-ms-flex:0 0 auto;flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}"], encapsulation: 2, changeDetection: 0 });
MegaMenu.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
MegaMenu.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    orientation: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MegaMenu, [{
        type: Component,
        args: [{
                selector: 'p-megaMenu',
                template: `
        <div [class]="styleClass" [ngStyle]="style"
            [ngClass]="{'p-megamenu p-component':true,'p-megamenu-horizontal': orientation == 'horizontal','p-megamenu-vertical': orientation == 'vertical'}">
            <div class="p-megamenu-start" *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <ul class="p-megamenu-root-list" role="menubar">
                <ng-template ngFor let-category [ngForOf]="model">
                    <li *ngIf="category.separator" class="p-menu-separator" [ngClass]="{'p-hidden': category.visible === false}">
                    <li *ngIf="!category.separator" [ngClass]="{'p-menuitem':true,'p-menuitem-active':category==activeItem, 'p-hidden': category.visible === false}"
                        (mouseenter)="onCategoryMouseEnter($event, category)">
                        <a *ngIf="!category.routerLink" [href]="category.url||'#'" [attr.target]="category.target" [attr.title]="category.title" [attr.id]="category.id" (click)="onCategoryClick($event, category)" [attr.tabindex]="category.tabindex ? category.tabindex : '0'"
                            [ngClass]="{'p-menuitem-link':true,'p-disabled':category.disabled}" [ngStyle]="category.style" [class]="category.styleClass" pRipple>
                            <span class="p-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="p-menuitem-text" *ngIf="category.escape !== false; else categoryHtmlLabel">{{category.label}}</span>
                            <ng-template #categoryHtmlLabel><span class="p-menuitem-text" [innerHTML]="category.label"></span></ng-template>
                            <span *ngIf="category.items" class="p-submenu-icon pi" [ngClass]="{'pi-angle-down':orientation=='horizontal','pi-angle-right':orientation=='vertical'}"></span>
                        </a>
                        <a *ngIf="category.routerLink" [routerLink]="category.routerLink" [queryParams]="category.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="category.routerLinkActiveOptions||{exact:false}" [attr.tabindex]="category.tabindex ? category.tabindex : '0'" 
                            [attr.target]="category.target" [attr.title]="category.title" [attr.id]="category.id"
                            (click)="onCategoryClick($event, category)" [ngClass]="{'p-menuitem-link':true,'p-disabled':category.disabled}" [ngStyle]="category.style" [class]="category.styleClass"
                            [fragment]="category.fragment" [queryParamsHandling]="category.queryParamsHandling" [preserveFragment]="category.preserveFragment" [skipLocationChange]="category.skipLocationChange" [replaceUrl]="category.replaceUrl" [state]="category.state" pRipple>
                            <span class="p-menuitem-icon" *ngIf="category.icon" [ngClass]="category.icon"></span>
                            <span class="p-menuitem-text" *ngIf="category.escape !== false; else categoryHtmlRouteLabel">{{category.label}}</span>
                            <ng-template #categoryHtmlRouteLabel><span class="p-menuitem-text" [innerHTML]="category.label"></span></ng-template>
                        </a>
                        <div class="p-megamenu-panel" *ngIf="category.items">
                            <div class="p-megamenu-grid">
                                <ng-template ngFor let-column [ngForOf]="category.items">
                                    <div [class]="getColumnClass(category)">
                                        <ng-template ngFor let-submenu [ngForOf]="column">
                                            <ul class="p-megamenu-submenu" role="menu">
                                                <li class="p-megamenu-submenu-header">
                                                    <span *ngIf="submenu.escape !== false; else submenuHtmlLabel">{{submenu.label}}</span>
                                                    <ng-template #submenuHtmlLabel><span [innerHTML]="submenu.label"></span></ng-template>
                                                </li>
                                                <ng-template ngFor let-item [ngForOf]="submenu.items">
                                                    <li *ngIf="item.separator" class="p-menu-separator" [ngClass]="{'p-hidden': item.visible === false}" role="separator">
                                                    <li *ngIf="!item.separator" class="p-menuitem" [ngClass]="{'p-hidden': item.visible === false}" role="none">
                                                        <a *ngIf="!item.routerLink" role="menuitem" [href]="item.url||'#'" class="p-menuitem-link" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [ngClass]="{'p-disabled':item.disabled}" (click)="itemClick($event, item)" pRipple>
                                                            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
                                                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                                        </a>
                                                        <a *ngIf="item.routerLink" role="menuitem" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [attr.tabindex]="item.tabindex ? item.tabindex : '0'"
                                                            [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" 
                                                             [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id"
                                                            [ngClass]="{'p-disabled':item.disabled}" (click)="itemClick($event, item)"
                                                            [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state" pRipple>
                                                            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                                                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
                                                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                                                        </a>
                                                    </li>
                                                </ng-template>
                                            </ul>
                                        </ng-template>
                                    </div>
                                </ng-template>
                            </div>
                        </div>
                    </li>
                </ng-template>
                <div class="p-megamenu-end" *ngIf="endTemplate; else legacy">
                    <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
                </div>
                <ng-template #legacy>
                    <div class="p-megamenu-end">
                        <ng-content></ng-content>
                    </div>
                </ng-template>
            </ul>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-megamenu-root-list{list-style:none;margin:0;padding:0}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{list-style:none;margin:0;padding:0}.p-megamenu-horizontal .p-megamenu-root-list{-ms-flex-align:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap}.p-megamenu-vertical .p-megamenu-root-list{-ms-flex-direction:column;flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-link>.p-submenu-icon{margin-left:auto}.p-megamenu-grid{display:-ms-flexbox;display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{-ms-flex:0 0 auto;flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class MegaMenuModule {
}
MegaMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MegaMenuModule });
MegaMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MegaMenuModule_Factory(t) { return new (t || MegaMenuModule)(); }, imports: [[CommonModule, RouterModule, RippleModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MegaMenuModule, { declarations: function () { return [MegaMenu]; }, imports: function () { return [CommonModule, RouterModule, RippleModule]; }, exports: function () { return [MegaMenu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MegaMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, RippleModule],
                exports: [MegaMenu, RouterModule],
                declarations: [MegaMenu]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYW1lbnUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9tZWdhbWVudS9tZWdhbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBb0IsZUFBZSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNyTSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUF3QixhQUFhLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRjVDLE1BQU0sT0FBTyxRQUFRO0FBQUcsSUF3QnBCLFlBQW1CLEVBQWMsRUFBUyxRQUFtQixFQUFTLEVBQXFCO0FBQUksUUFBNUUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLFFBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQVEsT0FBRSxHQUFGLEVBQUUsQ0FB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QUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNqRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBWSxDQUFDLGtCQUNoQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDM0I7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxSZW5kZXJlcjIsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNZWdhTWVudUl0ZW0sTWVudUl0ZW0sIFByaW1lVGVtcGxhdGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJzsgIFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtbWVnYU1lbnUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtbWVnYW1lbnUgcC1jb21wb25lbnQnOnRydWUsJ3AtbWVnYW1lbnUtaG9yaXpvbnRhbCc6IG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJywncC1tZWdhbWVudS12ZXJ0aWNhbCc6IG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCd9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1tZWdhbWVudS1zdGFydFwiICpuZ0lmPVwic3RhcnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGFydFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInAtbWVnYW1lbnUtcm9vdC1saXN0XCIgcm9sZT1cIm1lbnViYXJcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNhdGVnb3J5IFtuZ0Zvck9mXT1cIm1vZGVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImNhdGVnb3J5LnNlcGFyYXRvclwiIGNsYXNzPVwicC1tZW51LXNlcGFyYXRvclwiIFtuZ0NsYXNzXT1cInsncC1oaWRkZW4nOiBjYXRlZ29yeS52aXNpYmxlID09PSBmYWxzZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWNhdGVnb3J5LnNlcGFyYXRvclwiIFtuZ0NsYXNzXT1cInsncC1tZW51aXRlbSc6dHJ1ZSwncC1tZW51aXRlbS1hY3RpdmUnOmNhdGVnb3J5PT1hY3RpdmVJdGVtLCAncC1oaWRkZW4nOiBjYXRlZ29yeS52aXNpYmxlID09PSBmYWxzZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25DYXRlZ29yeU1vdXNlRW50ZXIoJGV2ZW50LCBjYXRlZ29yeSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWNhdGVnb3J5LnJvdXRlckxpbmtcIiBbaHJlZl09XCJjYXRlZ29yeS51cmx8fCcjJ1wiIFthdHRyLnRhcmdldF09XCJjYXRlZ29yeS50YXJnZXRcIiBbYXR0ci50aXRsZV09XCJjYXRlZ29yeS50aXRsZVwiIFthdHRyLmlkXT1cImNhdGVnb3J5LmlkXCIgKGNsaWNrKT1cIm9uQ2F0ZWdvcnlDbGljaygkZXZlbnQsIGNhdGVnb3J5KVwiIFthdHRyLnRhYmluZGV4XT1cImNhdGVnb3J5LnRhYmluZGV4ID8gY2F0ZWdvcnkudGFiaW5kZXggOiAnMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1tZW51aXRlbS1saW5rJzp0cnVlLCdwLWRpc2FibGVkJzpjYXRlZ29yeS5kaXNhYmxlZH1cIiBbbmdTdHlsZV09XCJjYXRlZ29yeS5zdHlsZVwiIFtjbGFzc109XCJjYXRlZ29yeS5zdHlsZUNsYXNzXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0taWNvblwiICpuZ0lmPVwiY2F0ZWdvcnkuaWNvblwiIFtuZ0NsYXNzXT1cImNhdGVnb3J5Lmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiAqbmdJZj1cImNhdGVnb3J5LmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgY2F0ZWdvcnlIdG1sTGFiZWxcIj57e2NhdGVnb3J5LmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYXRlZ29yeUh0bWxMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiY2F0ZWdvcnkubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNhdGVnb3J5Lml0ZW1zXCIgY2xhc3M9XCJwLXN1Ym1lbnUtaWNvbiBwaVwiIFtuZ0NsYXNzXT1cInsncGktYW5nbGUtZG93bic6b3JpZW50YXRpb249PSdob3Jpem9udGFsJywncGktYW5nbGUtcmlnaHQnOm9yaWVudGF0aW9uPT0ndmVydGljYWwnfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiY2F0ZWdvcnkucm91dGVyTGlua1wiIFtyb3V0ZXJMaW5rXT1cImNhdGVnb3J5LnJvdXRlckxpbmtcIiBbcXVlcnlQYXJhbXNdPVwiY2F0ZWdvcnkucXVlcnlQYXJhbXNcIiBbcm91dGVyTGlua0FjdGl2ZV09XCIncC1tZW51aXRlbS1saW5rLWFjdGl2ZSdcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwiY2F0ZWdvcnkucm91dGVyTGlua0FjdGl2ZU9wdGlvbnN8fHtleGFjdDpmYWxzZX1cIiBbYXR0ci50YWJpbmRleF09XCJjYXRlZ29yeS50YWJpbmRleCA/IGNhdGVnb3J5LnRhYmluZGV4IDogJzAnXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFyZ2V0XT1cImNhdGVnb3J5LnRhcmdldFwiIFthdHRyLnRpdGxlXT1cImNhdGVnb3J5LnRpdGxlXCIgW2F0dHIuaWRdPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNhdGVnb3J5Q2xpY2soJGV2ZW50LCBjYXRlZ29yeSlcIiBbbmdDbGFzc109XCJ7J3AtbWVudWl0ZW0tbGluayc6dHJ1ZSwncC1kaXNhYmxlZCc6Y2F0ZWdvcnkuZGlzYWJsZWR9XCIgW25nU3R5bGVdPVwiY2F0ZWdvcnkuc3R5bGVcIiBbY2xhc3NdPVwiY2F0ZWdvcnkuc3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cImNhdGVnb3J5LmZyYWdtZW50XCIgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwiY2F0ZWdvcnkucXVlcnlQYXJhbXNIYW5kbGluZ1wiIFtwcmVzZXJ2ZUZyYWdtZW50XT1cImNhdGVnb3J5LnByZXNlcnZlRnJhZ21lbnRcIiBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cImNhdGVnb3J5LnNraXBMb2NhdGlvbkNoYW5nZVwiIFtyZXBsYWNlVXJsXT1cImNhdGVnb3J5LnJlcGxhY2VVcmxcIiBbc3RhdGVdPVwiY2F0ZWdvcnkuc3RhdGVcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS1pY29uXCIgKm5nSWY9XCJjYXRlZ29yeS5pY29uXCIgW25nQ2xhc3NdPVwiY2F0ZWdvcnkuaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiY2F0ZWdvcnkuZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBjYXRlZ29yeUh0bWxSb3V0ZUxhYmVsXCI+e3tjYXRlZ29yeS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2F0ZWdvcnlIdG1sUm91dGVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiY2F0ZWdvcnkubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW1lZ2FtZW51LXBhbmVsXCIgKm5nSWY9XCJjYXRlZ29yeS5pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW1lZ2FtZW51LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jb2x1bW4gW25nRm9yT2ZdPVwiY2F0ZWdvcnkuaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cImdldENvbHVtbkNsYXNzKGNhdGVnb3J5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtc3VibWVudSBbbmdGb3JPZl09XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicC1tZWdhbWVudS1zdWJtZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtbWVnYW1lbnUtc3VibWVudS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInN1Ym1lbnUuZXNjYXBlICE9PSBmYWxzZTsgZWxzZSBzdWJtZW51SHRtbExhYmVsXCI+e3tzdWJtZW51LmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJtZW51SHRtbExhYmVsPjxzcGFuIFtpbm5lckhUTUxdPVwic3VibWVudS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJzdWJtZW51Lml0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaXRlbS5zZXBhcmF0b3JcIiBjbGFzcz1cInAtbWVudS1zZXBhcmF0b3JcIiBbbmdDbGFzc109XCJ7J3AtaGlkZGVuJzogaXRlbS52aXNpYmxlID09PSBmYWxzZX1cIiByb2xlPVwic2VwYXJhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWl0ZW0uc2VwYXJhdG9yXCIgY2xhc3M9XCJwLW1lbnVpdGVtXCIgW25nQ2xhc3NdPVwieydwLWhpZGRlbic6IGl0ZW0udmlzaWJsZSA9PT0gZmFsc2V9XCIgcm9sZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhaXRlbS5yb3V0ZXJMaW5rXCIgcm9sZT1cIm1lbnVpdGVtXCIgW2hyZWZdPVwiaXRlbS51cmx8fCcjJ1wiIGNsYXNzPVwicC1tZW51aXRlbS1saW5rXCIgW2F0dHIudGFyZ2V0XT1cIml0ZW0udGFyZ2V0XCIgW2F0dHIudGl0bGVdPVwiaXRlbS50aXRsZVwiIFthdHRyLmlkXT1cIml0ZW0uaWRcIiBbYXR0ci50YWJpbmRleF09XCJpdGVtLnRhYmluZGV4ID8gaXRlbS50YWJpbmRleCA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtZGlzYWJsZWQnOml0ZW0uZGlzYWJsZWR9XCIgKGNsaWNrKT1cIml0ZW1DbGljaygkZXZlbnQsIGl0ZW0pXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS1pY29uXCIgKm5nSWY9XCJpdGVtLmljb25cIiBbbmdDbGFzc109XCJpdGVtLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxMYWJlbFwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNodG1sTGFiZWw+PHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cIml0ZW0ubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cIml0ZW0ucm91dGVyTGlua1wiIHJvbGU9XCJtZW51aXRlbVwiIFtyb3V0ZXJMaW5rXT1cIml0ZW0ucm91dGVyTGlua1wiIFtxdWVyeVBhcmFtc109XCJpdGVtLnF1ZXJ5UGFyYW1zXCIgW3JvdXRlckxpbmtBY3RpdmVdPVwiJ3AtbWVudWl0ZW0tbGluay1hY3RpdmUnXCIgW2F0dHIudGFiaW5kZXhdPVwiaXRlbS50YWJpbmRleCA/IGl0ZW0udGFiaW5kZXggOiAnMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIml0ZW0ucm91dGVyTGlua0FjdGl2ZU9wdGlvbnN8fHtleGFjdDpmYWxzZX1cIiBjbGFzcz1cInAtbWVudWl0ZW0tbGlua1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJpdGVtLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cIml0ZW0udGl0bGVcIiBbYXR0ci5pZF09XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncC1kaXNhYmxlZCc6aXRlbS5kaXNhYmxlZH1cIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cIml0ZW0uZnJhZ21lbnRcIiBbcXVlcnlQYXJhbXNIYW5kbGluZ109XCJpdGVtLnF1ZXJ5UGFyYW1zSGFuZGxpbmdcIiBbcHJlc2VydmVGcmFnbWVudF09XCJpdGVtLnByZXNlcnZlRnJhZ21lbnRcIiBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cIml0ZW0uc2tpcExvY2F0aW9uQ2hhbmdlXCIgW3JlcGxhY2VVcmxdPVwiaXRlbS5yZXBsYWNlVXJsXCIgW3N0YXRlXT1cIml0ZW0uc3RhdGVcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiIFtuZ0NsYXNzXT1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgKm5nSWY9XCJpdGVtLmVzY2FwZSAhPT0gZmFsc2U7IGVsc2UgaHRtbFJvdXRlTGFiZWxcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaHRtbFJvdXRlTGFiZWw+PHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLXRleHRcIiBbaW5uZXJIVE1MXT1cIml0ZW0ubGFiZWxcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbWVnYW1lbnUtZW5kXCIgKm5nSWY9XCJlbmRUZW1wbGF0ZTsgZWxzZSBsZWdhY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImVuZFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNsZWdhY3k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLW1lZ2FtZW51LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL21lZ2FtZW51LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lZ2FNZW51IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSBtb2RlbDogTWVnYU1lbnVJdGVtW107XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIG9yaWVudGF0aW9uOiBzdHJpbmcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgXG4gICAgYWN0aXZlSXRlbTogYW55O1xuXG4gICAgZG9jdW1lbnRDbGlja0xpc3RlbmVyOiBhbnk7XG5cbiAgICBzdGFydFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgZW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgICAgICAgICAgICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICBcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNhdGVnb3J5TW91c2VFbnRlcihldmVudCwgbWVudWl0ZW06IE1lZ2FNZW51SXRlbSkge1xuICAgICAgICBpZiAobWVudWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBtZW51aXRlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2F0ZWdvcnlDbGljayhldmVudCwgaXRlbTogTWVudUl0ZW0gfCBNZWdhTWVudUl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWl0ZW0udXJsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY29tbWFuZCkge1xuICAgICAgICAgICAgaXRlbS5jb21tYW5kKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtICYmIHRoaXMuYWN0aXZlSXRlbSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaXRlbUNsaWNrKGV2ZW50LCBpdGVtOiBNZW51SXRlbSB8IE1lZ2FNZW51SXRlbSnCoHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChpdGVtLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIGl0ZW0uY29tbWFuZCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb2x1bW5DbGFzcyhtZW51aXRlbTogTWVnYU1lbnVJdGVtKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSBtZW51aXRlbS5pdGVtcyA/IG1lbnVpdGVtLml0ZW1zLmxlbmd0aDogMDtcbiAgICAgICAgbGV0IGNvbHVtbkNsYXNzO1xuICAgICAgICBzd2l0Y2gobGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29sdW1uQ2xhc3M9ICdwLW1lZ2FtZW51LWNvbC02JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY29sdW1uQ2xhc3M9ICdwLW1lZ2FtZW51LWNvbC00JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgY29sdW1uQ2xhc3M9ICdwLW1lZ2FtZW51LWNvbC0zJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY29sdW1uQ2xhc3M9ICdwLW1lZ2FtZW51LWNvbC0yJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbHVtbkNsYXNzPSAncC1tZWdhbWVudS1jb2wtMTInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb2x1bW5DbGFzcztcbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsICYmICF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsUm91dGVyTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW01lZ2FNZW51LFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTWVnYU1lbnVdXG59KVxuZXhwb3J0IGNsYXNzIE1lZ2FNZW51TW9kdWxlIHsgfSJdfQ==