import { Component, ViewEncapsulation, ChangeDetectorRef, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';

function PanelMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} }
const _c0 = function (a0, a1) { return { "pi-angle-right": a0, "pi-angle-down": a1 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function PanelMenuSub_ng_template_1_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c1, child_r1.disabled));
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", !ctx_r4.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !child_r1.expanded, child_r1.expanded));
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c2 = function () { return { exact: false }; };
function PanelMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 4, "span", 10);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(20, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("tabindex", !ctx_r5.item.expanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("target", child_r1.target)("title", child_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-panelMenuSub", 20);
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", child_r1)("expanded", child_r1.expanded)("transitionOptions", ctx_r6.transitionOptions);
} }
function PanelMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_Template, 6, 13, "a", 6);
    ɵngcc0.ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_Template, 6, 23, "a", 7);
    ɵngcc0.ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template, 1, 3, "p-panelMenuSub", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassProp("p-hidden", child_r1.visible === false);
    ɵngcc0.ɵɵproperty("ngClass", child_r1.styleClass)("ngStyle", child_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function PanelMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_0_Template, 1, 0, "li", 2);
    ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_Template, 4, 7, "li", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
const _c3 = function (a1) { return { "p-submenu-list": true, "p-panelmenu-root-submenu": a1 }; };
const _c4 = function (a0) { return { transitionParams: a0, height: "*" }; };
const _c5 = function (a1) { return { value: "visible", params: a1 }; };
const _c6 = function (a0) { return { transitionParams: a0, height: "0" }; };
const _c7 = function (a1) { return { value: "hidden", params: a1 }; };
const _c8 = function (a0, a1) { return { "pi-chevron-right": a0, "pi-chevron-down": a1 }; };
function PanelMenu_ng_container_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_3_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_3_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵattribute("href", item_r1.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r1.disabled ? null : "0")("id", item_r1.id)("target", item_r1.target)("title", item_r1.title)("aria-expanded", item_r1.expanded)("id", item_r1.id + "_header")("aria-controls", item_r1.id + "_content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r10);
} }
function PanelMenu_ng_container_1_a_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c8, !item_r1.expanded, item_r1.expanded));
} }
function PanelMenu_ng_container_1_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r1.icon);
} }
function PanelMenu_ng_container_1_a_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.label);
} }
function PanelMenu_ng_container_1_a_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function PanelMenu_ng_container_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function PanelMenu_ng_container_1_a_4_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const item_r1 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.handleClick($event, item_r1); });
    ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_a_4_span_1_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(2, PanelMenu_ng_container_1_a_4_span_2_Template, 1, 1, "span", 9);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_4_span_3_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 17, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵngcc0.ɵɵreference(5);
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(18, _c2))("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    ɵngcc0.ɵɵattribute("target", item_r1.target)("title", item_r1.title)("id", item_r1.id)("tabindex", item_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r23);
} }
function PanelMenu_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_1_div_5_Template_div_animation_rootItem_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onToggleDone(); });
    ɵngcc0.ɵɵelementStart(1, "div", 19);
    ɵngcc0.ɵɵelement(2, "p-panelMenuSub", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@rootItem", item_r1.expanded ? ɵngcc0.ɵɵpureFunction1(9, _c5, ɵngcc0.ɵɵpureFunction1(7, _c4, ctx_r6.animating ? ctx_r6.transitionOptions : "0ms")) : ɵngcc0.ɵɵpureFunction1(13, _c7, ɵngcc0.ɵɵpureFunction1(11, _c6, ctx_r6.transitionOptions)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("id", item_r1.id + "_content")("aria-labelledby", item_r1.id + "_header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r1)("expanded", true)("transitionOptions", ctx_r6.transitionOptions)("root", true);
} }
const _c9 = function (a0) { return { "p-hidden": a0 }; };
const _c10 = function (a1, a2) { return { "p-component p-panelmenu-header": true, "p-highlight": a1, "p-disabled": a2 }; };
function PanelMenu_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, PanelMenu_ng_container_1_a_3_Template, 6, 12, "a", 4);
    ɵngcc0.ɵɵtemplate(4, PanelMenu_ng_container_1_a_4_Template, 6, 19, "a", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, PanelMenu_ng_container_1_div_5_Template, 3, 15, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c9, item_r1.visible === false));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(item_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c10, item_r1.expanded, item_r1.disabled))("ngStyle", item_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.items);
} }
class BasePanelMenuItem {
    constructor(ref) {
        this.ref = ref;
    }
    handleClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        this.ref.detectChanges();
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }
}
class PanelMenuSub extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
    }
}
PanelMenuSub.ɵfac = function PanelMenuSub_Factory(t) { return new (t || PanelMenuSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenuSub, selectors: [["p-panelMenuSub"]], inputs: { item: "item", expanded: "expanded", transitionOptions: "transitionOptions", root: "root" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 13, consts: [["role", "tree", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menuitem", 3, "ngClass", "p-hidden", "ngStyle", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], [1, "p-menuitem", 3, "ngClass", "ngStyle"], ["class", "p-menuitem-link", "role", "treeitem", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "treeitem", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "item", "expanded", "transitionOptions", 4, "ngIf"], ["role", "treeitem", 1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-panelmenu-icon pi pi-fw", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", "pi-fw", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "treeitem", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "item", "expanded", "transitionOptions"]], template: function PanelMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c3, ctx.root))("@submenu", ctx.expanded ? ɵngcc0.ɵɵpureFunction1(7, _c5, ɵngcc0.ɵɵpureFunction1(5, _c4, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(11, _c7, ɵngcc0.ɵɵpureFunction1(9, _c6, ctx.transitionOptions)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], encapsulation: 2, data: { animation: [
            trigger('submenu', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] } });
PanelMenuSub.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenuSub.propDecorators = {
    item: [{ type: Input }],
    expanded: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    root: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuSub, [{
        type: Component,
        args: [{
                selector: 'p-panelMenuSub',
                template: `
        <ul [ngClass]="{'p-submenu-list': true, 'p-panelmenu-root-submenu': root}" [@submenu]="expanded ? {value: 'visible', params: {transitionParams: transitionOptions, height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}" role="tree">
            <ng-template ngFor let-child [ngForOf]="item.items">
                <li *ngIf="child.separator" class="p-menu-separator" role="separator">
                <li *ngIf="!child.separator" class="p-menuitem" [ngClass]="child.styleClass" [class.p-hidden]="child.visible === false" [ngStyle]="child.style">
                    <a *ngIf="!child.routerLink" [attr.href]="child.url" class="p-menuitem-link" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id"
                        [ngClass]="{'p-disabled':child.disabled}" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{child.label}}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <a *ngIf="child.routerLink" [routerLink]="child.routerLink" [queryParams]="child.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="child.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" 
                        [ngClass]="{'p-disabled':child.disabled}" [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'" [attr.id]="child.id" role="treeitem" [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event,child)" [attr.target]="child.target" [attr.title]="child.title"
                        [fragment]="child.fragment" [queryParamsHandling]="child.queryParamsHandling" [preserveFragment]="child.preserveFragment" [skipLocationChange]="child.skipLocationChange" [replaceUrl]="child.replaceUrl" [state]="child.state">
                        <span class="p-panelmenu-icon pi pi-fw" [ngClass]="{'pi-angle-right':!child.expanded,'pi-angle-down':child.expanded}" *ngIf="child.items"></span>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{child.label}}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                    </a>
                    <p-panelMenuSub [item]="child" [expanded]="child.expanded" [transitionOptions]="transitionOptions" *ngIf="child.items"></p-panelMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
                animations: [
                    trigger('submenu', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { item: [{
            type: Input
        }], expanded: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], root: [{
            type: Input
        }] }); })();
class PanelMenu extends BasePanelMenuItem {
    constructor(ref) {
        super(ref);
        this.multiple = true;
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    }
    collapseAll() {
        for (let item of this.model) {
            if (item.expanded) {
                item.expanded = false;
            }
        }
    }
    handleClick(event, item) {
        if (!this.multiple) {
            for (let modelItem of this.model) {
                if (item !== modelItem && modelItem.expanded) {
                    modelItem.expanded = false;
                }
            }
        }
        this.animating = true;
        super.handleClick(event, item);
    }
    onToggleDone() {
        this.animating = false;
    }
}
PanelMenu.ɵfac = function PanelMenu_Factory(t) { return new (t || PanelMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PanelMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PanelMenu, selectors: [["p-panelMenu"]], inputs: { multiple: "multiple", transitionOptions: "transitionOptions", model: "model", style: "style", styleClass: "styleClass" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], [1, "p-panelmenu-panel", 3, "ngClass"], [3, "ngClass", "ngStyle"], ["class", "p-panelmenu-header-link", 3, "click", 4, "ngIf"], ["class", "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-toggleable-content", 4, "ngIf"], [1, "p-panelmenu-header-link", 3, "click"], ["class", "p-panelmenu-icon pi", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-panelmenu-icon", "pi", 3, "ngClass"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [1, "p-toggleable-content"], ["role", "region", 1, "p-panelmenu-content"], [3, "item", "expanded", "transitionOptions", "root"]], template: function PanelMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PanelMenu_ng_container_1_Template, 6, 13, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, PanelMenuSub], styles: [".p-panelmenu .p-panelmenu-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('rootItem', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] }, changeDetection: 0 });
PanelMenu.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PanelMenu.propDecorators = {
    model: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    multiple: [{ type: Input }],
    transitionOptions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenu, [{
        type: Component,
        args: [{
                selector: 'p-panelMenu',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'">
            <ng-container *ngFor="let item of model;let f=first;let l=last;">
                <div class="p-panelmenu-panel" [ngClass]="{'p-hidden': item.visible === false}">
                    <div [ngClass]="{'p-component p-panelmenu-header':true, 'p-highlight':item.expanded,'p-disabled':item.disabled}" [class]="item.styleClass" [ngStyle]="item.style">
                        <a *ngIf="!item.routerLink" [attr.href]="item.url" (click)="handleClick($event,item)" [attr.tabindex]="item.disabled ? null : '0'" [attr.id]="item.id"
                           [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.aria-expanded]="item.expanded" [attr.id]="item.id + '_header'" [attr.aria-controls]="item.id +'_content'">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}"
                           (click)="handleClick($event,item)" [attr.target]="item.target" [attr.title]="item.title" class="p-panelmenu-header-link" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'"
                           [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
                            <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{'pi-chevron-right':!item.expanded,'pi-chevron-down':item.expanded}"></span>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </a>
                    </div>
                    <div *ngIf="item.items" class="p-toggleable-content" [@rootItem]="item.expanded ? {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}} : {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}}"  (@rootItem.done)="onToggleDone()">
                        <div class="p-panelmenu-content" role="region" [attr.id]="item.id +'_content' " [attr.aria-labelledby]="item.id +'_header'">
                            <p-panelMenuSub [item]="item" [expanded]="true" [transitionOptions]="transitionOptions" [root]="true"></p-panelMenuSub>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
                animations: [
                    trigger('rootItem', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-panelmenu .p-panelmenu-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{list-style:none;margin:0;padding:0}.p-panelmenu .p-menuitem-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;text-decoration:none;user-select:none}.p-panelmenu .p-menuitem-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { multiple: [{
            type: Input
        }], transitionOptions: [{
            type: Input
        }], model: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
class PanelMenuModule {
}
PanelMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PanelMenuModule });
PanelMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PanelMenuModule_Factory(t) { return new (t || PanelMenuModule)(); }, imports: [[CommonModule, RouterModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PanelMenuModule, { declarations: function () { return [PanelMenu, PanelMenuSub]; }, imports: function () { return [CommonModule, RouterModule]; }, exports: function () { return [PanelMenu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule],
                exports: [PanelMenu, RouterModule],
                declarations: [PanelMenu, PanelMenuSub]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BasePanelMenuItem, PanelMenu, PanelMenuModule, PanelMenuSub };

//# sourceMappingURL=primeng-panelmenu.js.map