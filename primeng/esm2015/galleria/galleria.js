import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChildren, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import { DomHandler } from 'primeng/dom';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = ["mask"];
const _c1 = function (a1) { return { "p-galleria-mask p-component-overlay": true, "p-galleria-visible": a1 }; };
const _c2 = function (a0) { return { "zIndex": a0 }; };
function Galleria_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3, 4);
    ɵngcc0.ɵɵelementStart(2, "p-galleriaContent", 5);
    ɵngcc0.ɵɵlistener("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onMaskHide(); })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r3.maskClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c1, ctx_r3.visible))("ngStyle", ɵngcc0.ɵɵpureFunction1(9, _c2, ctx_r3.zIndex));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
} }
function Galleria_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
function Galleria_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaContent", 6);
    ɵngcc0.ɵɵlistener("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
} }
function GalleriaContent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.maskHide.emit(); });
    ɵngcc0.ɵɵelement(1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} }
function GalleriaContent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r2.galleria.templates);
} }
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaThumbnails", 12);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveIndexChange($event); })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
} }
function GalleriaContent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r4.galleria.templates);
} }
const _c3 = function (a1, a2, a3) { return { "p-galleria p-component": true, "p-galleria-fullscreen": a1, "p-galleria-indicator-onitem": a2, "p-galleria-item-nav-onhover": a3 }; };
const _c4 = function () { return {}; };
function GalleriaContent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    ɵngcc0.ɵɵtemplate(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "p-galleriaItem", 5);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActiveIndexChange($event); })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.startSlideShow(); })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.galleriaClass());
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : ɵngcc0.ɵɵpureFunction0(24, _c4));
    ɵngcc0.ɵɵattribute("id", ctx_r0.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.fullScreen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.showThumbnails);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
} }
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
} }
const _c5 = function (a1) { return { "p-galleria-item-prev p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
} }
const _c6 = function (a1) { return { "p-galleria-item-next p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
} }
function GalleriaItem_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
} }
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "button", 16);
} }
const _c7 = function (a1) { return { "p-galleria-indicator": true, "p-highlight": a1 }; };
function GalleriaItem_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onIndicatorClick(index_r10); })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onIndicatorMouseEnter(index_r10); })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const index_r10 = ctx.index; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onIndicatorKeyDown(index_r10); });
    ɵngcc0.ɵɵtemplate(1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.indicatorFacet);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("index", index_r10)("templates", ctx_r8.templates);
} }
function GalleriaItem_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 11);
    ɵngcc0.ɵɵtemplate(1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.value);
} }
const _c8 = ["itemsContainer"];
const _c9 = function (a1) { return { "p-galleria-thumbnail-prev p-link": true, "p-disabled": a1 }; };
const _c10 = function (a1, a2) { return { "p-galleria-thumbnail-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function GalleriaThumbnails_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
} }
const _c11 = function (a1, a2, a3, a4) { return { "p-galleria-thumbnail-item": true, "p-galleria-thumbnail-item-current": a1, "p-galleria-thumbnail-item-active": a2, "p-galleria-thumbnail-item-start": a3, "p-galleria-thumbnail-item-end": a4 }; };
function GalleriaThumbnails_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const index_r7 = ctx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onItemClick(index_r7); })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); const index_r7 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(index_r7); });
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.getTabIndex(index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r6)("templates", ctx_r2.templates);
} }
const _c12 = function (a1) { return { "p-galleria-thumbnail-next p-link": true, "p-disabled": a1 }; };
const _c13 = function (a1, a2) { return { "p-galleria-thumbnail-next-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function GalleriaThumbnails_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
} }
const _c14 = function (a0) { return { "height": a0 }; };
export class Galleria {
    constructor(element, cd) {
        this.element = element;
        this.cd = cd;
        this.fullScreen = false;
        this.numVisible = 3;
        this.showItemNavigators = false;
        this.showThumbnailNavigators = true;
        this.showItemNavigatorsOnHover = false;
        this.changeItemOnIndicatorHover = false;
        this.circular = false;
        this.autoPlay = false;
        this.transitionInterval = 4000;
        this.showThumbnails = true;
        this.thumbnailsPosition = "bottom";
        this.verticalThumbnailViewPortHeight = "300px";
        this.showIndicators = false;
        this.showIndicatorsOnItem = false;
        this.indicatorsPosition = "bottom";
        this.baseZIndex = 0;
        this.activeIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this._visible = false;
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    get visible() {
        return this._visible;
    }
    ;
    set visible(visible) {
        this._visible = visible;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerFacet = item.template;
                    break;
                case 'footer':
                    this.footerFacet = item.template;
                    break;
                case 'indicator':
                    this.indicatorFacet = item.template;
                    break;
                case 'caption':
                    this.captionFacet = item.template;
                    break;
            }
        });
    }
    ngOnChanges(simpleChanges) {
        if (this.fullScreen && simpleChanges.visible) {
            if (simpleChanges.visible.currentValue) {
                DomHandler.addClass(document.body, 'p-overflow-hidden');
                this.zIndex = String(this.baseZIndex + ++DomHandler.zindex);
            }
            else {
                DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        }
    }
    onMaskHide() {
        this.visible = false;
        this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeIndexChange.emit(index);
        }
    }
    ngOnDestroy() {
        if (this.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
    }
}
Galleria.ɵfac = function Galleria_Factory(t) { return new (t || Galleria)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Galleria.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Galleria, selectors: [["p-galleria"]], contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Galleria_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mask = _t.first);
    } }, inputs: { fullScreen: "fullScreen", numVisible: "numVisible", showItemNavigators: "showItemNavigators", showThumbnailNavigators: "showThumbnailNavigators", showItemNavigatorsOnHover: "showItemNavigatorsOnHover", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", circular: "circular", autoPlay: "autoPlay", transitionInterval: "transitionInterval", showThumbnails: "showThumbnails", thumbnailsPosition: "thumbnailsPosition", verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight", showIndicators: "showIndicators", showIndicatorsOnItem: "showIndicatorsOnItem", indicatorsPosition: "indicatorsPosition", baseZIndex: "baseZIndex", activeIndex: "activeIndex", visible: "visible", id: "id", value: "value", responsiveOptions: "responsiveOptions", maskClass: "maskClass", containerClass: "containerClass", containerStyle: "containerStyle" }, outputs: { activeIndexChange: "activeIndexChange", visibleChange: "visibleChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]], template: function Galleria_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Galleria_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaContent]; }, styles: [".p-galleria-content,.p-galleria-item-wrapper{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:-ms-flexbox;display:flex;height:100%;position:relative}.p-galleria-item-nav{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{-ms-flex-direction:column;-ms-flex-negative:0;display:-ms-flexbox;display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-flex:0 0 auto;-ms-flex-item-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-thumbnail-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-item,.p-galleria-thumbnail-items{display:-ms-flexbox;display:flex}.p-galleria-thumbnail-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{-ms-flex-direction:row;flex-direction:row}.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-top .p-galleria-item-wrapper{-ms-flex-order:2;order:2}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper{-ms-flex-order:1;order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{-ms-flex-direction:column;-ms-flex-positive:1;flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{-ms-flex-direction:column;flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-indicator>button{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{-ms-flex-align:center;-ms-flex-direction:row;align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{-ms-flex-order:2;order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-order:1;order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-direction:column;flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:-ms-flexbox;display:flex;position:absolute}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:rgba(0,0,0,0);height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:rgba(0,0,0,0)}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Galleria.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Galleria.propDecorators = {
    activeIndex: [{ type: Input }],
    fullScreen: [{ type: Input }],
    id: [{ type: Input }],
    value: [{ type: Input }],
    numVisible: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    showItemNavigators: [{ type: Input }],
    showThumbnailNavigators: [{ type: Input }],
    showItemNavigatorsOnHover: [{ type: Input }],
    changeItemOnIndicatorHover: [{ type: Input }],
    circular: [{ type: Input }],
    autoPlay: [{ type: Input }],
    transitionInterval: [{ type: Input }],
    showThumbnails: [{ type: Input }],
    thumbnailsPosition: [{ type: Input }],
    verticalThumbnailViewPortHeight: [{ type: Input }],
    showIndicators: [{ type: Input }],
    showIndicatorsOnItem: [{ type: Input }],
    indicatorsPosition: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    maskClass: [{ type: Input }],
    containerClass: [{ type: Input }],
    containerStyle: [{ type: Input }],
    mask: [{ type: ViewChild, args: ['mask', { static: false },] }],
    visible: [{ type: Input }],
    activeIndexChange: [{ type: Output }],
    visibleChange: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Galleria, [{
        type: Component,
        args: [{
                selector: 'p-galleria',
                template: `
        <div *ngIf="fullScreen;else windowed">
            <div *ngIf="visible" #mask [ngClass]="{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}" [class]="maskClass" [ngStyle]="{'zIndex':zIndex}">
                <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (maskHide)="onMaskHide()" (activeItemChange)="onActiveItemChange($event)" [ngStyle]="containerStyle"></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-galleria-content,.p-galleria-item-wrapper{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:-ms-flexbox;display:flex;height:100%;position:relative}.p-galleria-item-nav{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{-ms-flex-direction:column;-ms-flex-negative:0;display:-ms-flexbox;display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-flex:0 0 auto;-ms-flex-item-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-thumbnail-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-item,.p-galleria-thumbnail-items{display:-ms-flexbox;display:flex}.p-galleria-thumbnail-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{-ms-flex-direction:row;flex-direction:row}.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-top .p-galleria-item-wrapper{-ms-flex-order:2;order:2}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper{-ms-flex-order:1;order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{-ms-flex-direction:column;-ms-flex-positive:1;flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{-ms-flex-direction:column;flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-indicator>button{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{-ms-flex-align:center;-ms-flex-direction:row;align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{-ms-flex-order:2;order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-order:1;order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-direction:column;flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:-ms-flexbox;display:flex;position:absolute}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:rgba(0,0,0,0);height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:rgba(0,0,0,0)}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { fullScreen: [{
            type: Input
        }], numVisible: [{
            type: Input
        }], showItemNavigators: [{
            type: Input
        }], showThumbnailNavigators: [{
            type: Input
        }], showItemNavigatorsOnHover: [{
            type: Input
        }], changeItemOnIndicatorHover: [{
            type: Input
        }], circular: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], transitionInterval: [{
            type: Input
        }], showThumbnails: [{
            type: Input
        }], thumbnailsPosition: [{
            type: Input
        }], verticalThumbnailViewPortHeight: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }], showIndicatorsOnItem: [{
            type: Input
        }], indicatorsPosition: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], activeIndexChange: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], visible: [{
            type: Input
        }], id: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], maskClass: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], containerStyle: [{
            type: Input
        }], mask: [{
            type: ViewChild,
            args: ['mask', { static: false }]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class GalleriaContent {
    constructor(galleria, cd) {
        this.galleria = galleria;
        this.cd = cd;
        this.value = [];
        this.maskHide = new EventEmitter();
        this.activeItemChange = new EventEmitter();
        this.id = this.galleria.id || UniqueComponentId();
        this.slideShowActicve = false;
        this._activeIndex = 0;
        this.slideShowActive = true;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    galleriaClass() {
        const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
        const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
        return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
    }
    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.galleria.circular && (this.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
            this.onActiveIndexChange(activeIndex);
            this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
    }
    stopSlideShow() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);
        return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
        return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeItemChange.emit(this.activeIndex);
        }
    }
}
GalleriaContent.ɵfac = function GalleriaContent_Factory(t) { return new (t || GalleriaContent)(ɵngcc0.ɵɵdirectiveInject(Galleria), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
GalleriaContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaContent, selectors: [["p-galleriaContent"]], inputs: { value: "value", activeIndex: "activeIndex" }, outputs: { maskHide: "maskHide", activeItemChange: "activeItemChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]], template: function GalleriaContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaItem, ɵngcc2.Ripple, GalleriaItemSlot, GalleriaThumbnails]; }, encapsulation: 2, changeDetection: 0 });
GalleriaContent.ctorParameters = () => [
    { type: Galleria },
    { type: ChangeDetectorRef }
];
GalleriaContent.propDecorators = {
    activeIndex: [{ type: Input }],
    value: [{ type: Input }],
    maskHide: [{ type: Output }],
    activeItemChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaContent, [{
        type: Component,
        args: [{
                selector: 'p-galleriaContent',
                template: `
        <div [attr.id]="id" *ngIf="value && value.length > 0" [ngClass]="{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, 
            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" [class]="galleriaClass()">
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <span class="p-galleria-close-icon pi pi-times"></span>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem [value]="value" [activeIndex]="activeIndex" [circular]="galleria.circular" [templates]="galleria.templates" (onActiveIndexChange)="onActiveIndexChange($event)" 
                    [showIndicators]="galleria.showIndicators" [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover" [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet" [showItemNavigators]="galleria.showItemNavigators" [autoPlay]="galleria.autoPlay" [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()" (stopSlideShow)="stopSlideShow()"></p-galleriaItem>

                <p-galleriaThumbnails *ngIf="galleria.showThumbnails" [containerId]="id" [value]="value" (onActiveIndexChange)="onActiveIndexChange($event)" [activeIndex]="activeIndex" [templates]="galleria.templates"
                    [numVisible]="galleria.numVisible" [responsiveOptions]="galleria.responsiveOptions" [circular]="galleria.circular"
                    [isVertical]="isVertical()" [contentHeight]="galleria.verticalThumbnailViewPortHeight" [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive" (stopSlideShow)="stopSlideShow()"></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: Galleria }, { type: ɵngcc0.ChangeDetectorRef }]; }, { value: [{
            type: Input
        }], maskHide: [{
            type: Output
        }], activeItemChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }] }); })();
export class GalleriaItemSlot {
    get item() {
        return this._item;
    }
    ;
    set item(item) {
        this._item = item;
        if (this.templates) {
            this.templates.forEach((item) => {
                if (item.getType() === this.type) {
                    switch (this.type) {
                        case 'item':
                        case 'caption':
                        case 'thumbnail':
                            this.context = { $implicit: this.item };
                            this.contentTemplate = item.template;
                            break;
                    }
                }
            });
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            if (item.getType() === this.type) {
                switch (this.type) {
                    case 'item':
                    case 'caption':
                    case 'thumbnail':
                        this.context = { $implicit: this.item };
                        this.contentTemplate = item.template;
                        break;
                    case 'indicator':
                        this.context = { $implicit: this.index };
                        this.contentTemplate = item.template;
                        break;
                    default:
                        this.context = {};
                        this.contentTemplate = item.template;
                        break;
                }
            }
        });
    }
}
GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) { return new (t || GalleriaItemSlot)(); };
GalleriaItemSlot.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaItemSlot, selectors: [["p-galleriaItemSlot"]], inputs: { item: "item", templates: "templates", index: "index", type: "type" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleriaItemSlot_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
GalleriaItemSlot.propDecorators = {
    templates: [{ type: Input }],
    index: [{ type: Input }],
    item: [{ type: Input }],
    type: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItemSlot, [{
        type: Component,
        args: [{
                selector: 'p-galleriaItemSlot',
                template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { item: [{
            type: Input
        }], templates: [{
            type: Input
        }], index: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
export class GalleriaItem {
    constructor() {
        this.circular = false;
        this.showItemNavigators = false;
        this.showIndicators = true;
        this.slideShowActive = true;
        this.changeItemOnIndicatorHover = true;
        this.autoPlay = false;
        this.startSlideShow = new EventEmitter();
        this.stopSlideShow = new EventEmitter();
        this.onActiveIndexChange = new EventEmitter();
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
        this.activeItem = this.value[this._activeIndex];
    }
    ngOnInit() {
        if (this.autoPlay) {
            this.startSlideShow.emit();
        }
    }
    next() {
        let nextItemIndex = this.activeIndex + 1;
        let activeIndex = this.circular && this.value.length - 1 === this.activeIndex
            ? 0
            : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
        let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
        let activeIndex = this.circular && this.activeIndex === 0
            ? this.value.length - 1
            : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    navForward(e) {
        this.stopTheSlideShow();
        this.next();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        this.prev();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onIndicatorClick(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
        if (this.changeItemOnIndicatorHover) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        }
    }
    onIndicatorKeyDown(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    isNavForwardDisabled() {
        return !this.circular && this.activeIndex === (this.value.length - 1);
    }
    isNavBackwardDisabled() {
        return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
        return this.activeIndex === index;
    }
}
GalleriaItem.ɵfac = function GalleriaItem_Factory(t) { return new (t || GalleriaItem)(); };
GalleriaItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaItem, selectors: [["p-galleriaItem"]], inputs: { circular: "circular", showItemNavigators: "showItemNavigators", showIndicators: "showIndicators", slideShowActive: "slideShowActive", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", autoPlay: "autoPlay", activeIndex: "activeIndex", value: "value", templates: "templates", indicatorFacet: "indicatorFacet", captionFacet: "captionFacet" }, outputs: { startSlideShow: "startSlideShow", stopSlideShow: "stopSlideShow", onActiveIndexChange: "onActiveIndexChange" }, decls: 7, vars: 6, consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]], template: function GalleriaItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
        ɵngcc0.ɵɵelement(3, "p-galleriaItemSlot", 3);
        ɵngcc0.ɵɵtemplate(4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
        ɵngcc0.ɵɵtemplate(5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("item", ctx.activeItem)("templates", ctx.templates);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.captionFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showIndicators);
    } }, directives: [ɵngcc1.NgIf, GalleriaItemSlot, ɵngcc2.Ripple, ɵngcc1.NgClass, ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
GalleriaItem.propDecorators = {
    circular: [{ type: Input }],
    value: [{ type: Input }],
    showItemNavigators: [{ type: Input }],
    showIndicators: [{ type: Input }],
    slideShowActive: [{ type: Input }],
    changeItemOnIndicatorHover: [{ type: Input }],
    autoPlay: [{ type: Input }],
    templates: [{ type: Input }],
    indicatorFacet: [{ type: Input }],
    captionFacet: [{ type: Input }],
    startSlideShow: [{ type: Output }],
    stopSlideShow: [{ type: Output }],
    onActiveIndexChange: [{ type: Output }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItem, [{
        type: Component,
        args: [{
                selector: 'p-galleriaItem',
                template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)"  [disabled]="isNavForwardDisabled()" pRipple>
                    <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li *ngFor="let item of value; let index = index;" tabindex="0"
                    (click)="onIndicatorClick(index)" (mouseenter)="onIndicatorMouseEnter(index)" (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}">
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet">
                    </button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { circular: [{
            type: Input
        }], showItemNavigators: [{
            type: Input
        }], showIndicators: [{
            type: Input
        }], slideShowActive: [{
            type: Input
        }], changeItemOnIndicatorHover: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], startSlideShow: [{
            type: Output
        }], stopSlideShow: [{
            type: Output
        }], onActiveIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], value: [{
            type: Input
        }], templates: [{
            type: Input
        }], indicatorFacet: [{
            type: Input
        }], captionFacet: [{
            type: Input
        }] }); })();
export class GalleriaThumbnails {
    constructor() {
        this.isVertical = false;
        this.slideShowActive = false;
        this.circular = false;
        this.contentHeight = "300px";
        this.showThumbnailNavigators = true;
        this.onActiveIndexChange = new EventEmitter();
        this.stopSlideShow = new EventEmitter();
        this.startPos = null;
        this.thumbnailsStyle = null;
        this.sortedResponsiveOptions = null;
        this.totalShiftedItems = 0;
        this.page = 0;
        this._numVisible = 0;
        this.d_numVisible = 0;
        this._oldNumVisible = 0;
        this._activeIndex = 0;
        this._oldactiveIndex = 0;
    }
    get numVisible() {
        return this._numVisible;
    }
    ;
    set numVisible(numVisible) {
        this._numVisible = numVisible;
        this._oldNumVisible = this.d_numVisible;
        this.d_numVisible = numVisible;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._oldactiveIndex = this._activeIndex;
        this._activeIndex = activeIndex;
    }
    ngOnInit() {
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }
    ngAfterContentChecked() {
        let totalShiftedItems = this.totalShiftedItems;
        if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
            if (this._activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex();
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            }
            if (this._oldactiveIndex !== this._activeIndex) {
                DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }
            this._oldactiveIndex = this._activeIndex;
            this._oldNumVisible = this.d_numVisible;
        }
    }
    createStyle() {
        if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
        }
        let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${(100 / this.d_numVisible)}%
            }
        `;
        if (this.responsiveOptions) {
            this.sortedResponsiveOptions = [...this.responsiveOptions];
            this.sortedResponsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this._numVisible
            };
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                this.d_numVisible = matchedResponsiveData.numVisible;
            }
        }
    }
    getTabIndex(index) {
        return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
        this.stopTheSlideShow();
        let nextItemIndex = this._activeIndex + 1;
        if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
            this.step(-1);
        }
        let activeIndex = this.circular && (this.value.length - 1) === this._activeIndex ? 0 : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
        let diff = prevItemIndex + this.totalShiftedItems;
        if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
            this.step(1);
        }
        let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onItemClick(index) {
        this.stopTheSlideShow();
        let selectedItemIndex = index;
        if (selectedItemIndex !== this._activeIndex) {
            const diff = selectedItemIndex + this.totalShiftedItems;
            let dir = 0;
            if (selectedItemIndex < this._activeIndex) {
                dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                    this.step(dir);
                }
            }
            else {
                dir = this.getMedianItemIndex() - diff;
                if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                    this.step(dir);
                }
            }
            this.activeIndex = selectedItemIndex;
            this.onActiveIndexChange.emit(this.activeIndex);
        }
    }
    step(dir) {
        let totalShiftedItems = this.totalShiftedItems + dir;
        if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
            totalShiftedItems = this.d_numVisible - this.value.length;
        }
        else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
        }
        if (this.circular) {
            if (dir < 0 && this.value.length - 1 === this._activeIndex) {
                totalShiftedItems = 0;
            }
            else if (dir > 0 && this._activeIndex === 0) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
        }
        if (this.itemsContainer) {
            DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    changePageOnTouch(e, diff) {
        if (diff < 0) { // left
            this.navForward(e);
        }
        else { // right
            this.navBackward(e);
        }
    }
    getTotalPageNumber() {
        return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
    }
    getMedianItemIndex() {
        let index = Math.floor(this.d_numVisible / 2);
        return (this.d_numVisible % 2) ? index : index - 1;
    }
    onTransitionEnd() {
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
            DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transition = '';
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    isNavBackwardDisabled() {
        return (!this.circular && this._activeIndex === 0) || (this.value.length <= this.d_numVisible);
    }
    isNavForwardDisabled() {
        return (!this.circular && this._activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
    }
    firstItemAciveIndex() {
        return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
        return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
        return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
    }
}
GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) { return new (t || GalleriaThumbnails)(); };
GalleriaThumbnails.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaThumbnails, selectors: [["p-galleriaThumbnails"]], viewQuery: function GalleriaThumbnails_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { isVertical: "isVertical", slideShowActive: "slideShowActive", circular: "circular", contentHeight: "contentHeight", showThumbnailNavigators: "showThumbnailNavigators", numVisible: "numVisible", activeIndex: "activeIndex", containerId: "containerId", value: "value", responsiveOptions: "responsiveOptions", templates: "templates" }, outputs: { onActiveIndexChange: "onActiveIndexChange", stopSlideShow: "stopSlideShow" }, decls: 8, vars: 6, consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]], template: function GalleriaThumbnails_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵlistener("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() { return ctx.onTransitionEnd(); })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) { return ctx.onTouchMove($event); })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) { return ctx.onTouchEnd($event); });
        ɵngcc0.ɵɵtemplate(6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c14, ctx.isVertical ? ctx.contentHeight : ""));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc2.Ripple, ɵngcc1.NgClass, GalleriaItemSlot], encapsulation: 2, changeDetection: 0 });
GalleriaThumbnails.propDecorators = {
    containerId: [{ type: Input }],
    value: [{ type: Input }],
    isVertical: [{ type: Input }],
    slideShowActive: [{ type: Input }],
    circular: [{ type: Input }],
    responsiveOptions: [{ type: Input }],
    contentHeight: [{ type: Input }],
    showThumbnailNavigators: [{ type: Input }],
    templates: [{ type: Input }],
    onActiveIndexChange: [{ type: Output }],
    stopSlideShow: [{ type: Output }],
    itemsContainer: [{ type: ViewChild, args: ['itemsContainer',] }],
    numVisible: [{ type: Input }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaThumbnails, [{
        type: Component,
        args: [{
                selector: 'p-galleriaThumbnails',
                template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}"></span>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{'height': isVertical ? contentHeight : ''}">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()"
                        (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)">
                        <div *ngFor="let item of value; let index = index;" [ngClass]="{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),
                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }">
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}"></span>
                </button>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { isVertical: [{
            type: Input
        }], slideShowActive: [{
            type: Input
        }], circular: [{
            type: Input
        }], contentHeight: [{
            type: Input
        }], showThumbnailNavigators: [{
            type: Input
        }], onActiveIndexChange: [{
            type: Output
        }], stopSlideShow: [{
            type: Output
        }], numVisible: [{
            type: Input
        }], activeIndex: [{
            type: Input
        }], containerId: [{
            type: Input
        }], value: [{
            type: Input
        }], responsiveOptions: [{
            type: Input
        }], templates: [{
            type: Input
        }], itemsContainer: [{
            type: ViewChild,
            args: ['itemsContainer']
        }] }); })();
export class GalleriaModule {
}
GalleriaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GalleriaModule });
GalleriaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GalleriaModule_Factory(t) { return new (t || GalleriaModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], CommonModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GalleriaModule, { declarations: function () { return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule],
                declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyaWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJpYS9nYWxsZXJpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQVcsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBaUYsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDelEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1COUMsTUFBTSxPQUFPLFFBQVE7QUFBRyxJQXFGcEIsWUFBbUIsT0FBbUIsRUFBUyxFQUFxQjtBQUFJLFFBQXJELFlBQU8sR0FBUCxPQUFPLENBQVk7QUFBQyxRQUFRLE9BQUUsR0FBRixFQUFFLENBQW1CO0FBQUMsUUEzRTVELGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDekMsUUFLYSxlQUFVLEdBQVcsQ0FBQyxDQUFDO0FBQ3BD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SztBQUFLLGtDQUVWLE1BQU07QUFBSyw0QkFFWCxNQUFNO0FBQUssNkJBRVgsU0FBUyxTQUFDLGdCQUFnQjtBQUFPLHlCQUVqQyxLQUFLO0FBQUssMEJBVVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQTZWaEIsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FMN0IsUUFBUSxTQUFDO0lBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsa0JBQ25ELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsa0JBQ3BIO0FBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDLGNBQ2hHOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixPbkRlc3Ryb3ksSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUsIFByaW1lVGVtcGxhdGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBVbmlxdWVDb21wb25lbnRJZCB9IGZyb20gJ3ByaW1lbmcvdXRpbHMnO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJzsgIFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZ2FsbGVyaWEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJmdWxsU2NyZWVuO2Vsc2Ugd2luZG93ZWRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ2aXNpYmxlXCIgI21hc2sgW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLW1hc2sgcC1jb21wb25lbnQtb3ZlcmxheSc6dHJ1ZSwgJ3AtZ2FsbGVyaWEtdmlzaWJsZSc6IHRoaXMudmlzaWJsZX1cIiBbY2xhc3NdPVwibWFza0NsYXNzXCIgW25nU3R5bGVdPVwieyd6SW5kZXgnOnpJbmRleH1cIj5cbiAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUNvbnRlbnQgW3ZhbHVlXT1cInZhbHVlXCIgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCIgKG1hc2tIaWRlKT1cIm9uTWFza0hpZGUoKVwiIChhY3RpdmVJdGVtQ2hhbmdlKT1cIm9uQWN0aXZlSXRlbUNoYW5nZSgkZXZlbnQpXCIgW25nU3R5bGVdPVwiY29udGFpbmVyU3R5bGVcIj48L3AtZ2FsbGVyaWFDb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjd2luZG93ZWQ+XG4gICAgICAgICAgICA8cC1nYWxsZXJpYUNvbnRlbnQgW3ZhbHVlXT1cInZhbHVlXCIgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCIgKGFjdGl2ZUl0ZW1DaGFuZ2UpPVwib25BY3RpdmVJdGVtQ2hhbmdlKCRldmVudClcIj48L3AtZ2FsbGVyaWFDb250ZW50PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9nYWxsZXJpYS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJpYSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGdldCBhY3RpdmVJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlSW5kZXg7XG4gICAgfTtcblxuICAgIHNldCBhY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGZ1bGxTY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogYW55W107XG5cbiAgICBASW5wdXQoKSBudW1WaXNpYmxlOiBudW1iZXIgPSAzO1xuXG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZU9wdGlvbnM6IGFueVtdO1xuXG4gICAgQElucHV0KCkgc2hvd0l0ZW1OYXZpZ2F0b3JzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBzaG93VGh1bWJuYWlsTmF2aWdhdG9yczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzaG93SXRlbU5hdmlnYXRvcnNPbkhvdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBjaGFuZ2VJdGVtT25JbmRpY2F0b3JIb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgY2lyY3VsYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB0cmFuc2l0aW9uSW50ZXJ2YWw6IG51bWJlciA9IDQwMDA7XG5cbiAgICBASW5wdXQoKSBzaG93VGh1bWJuYWlsczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSB0aHVtYm5haWxzUG9zaXRpb246IHN0cmluZyA9IFwiYm90dG9tXCI7XG5cbiAgICBASW5wdXQoKSB2ZXJ0aWNhbFRodW1ibmFpbFZpZXdQb3J0SGVpZ2h0OiBzdHJpbmcgPSBcIjMwMHB4XCI7XG5cbiAgICBASW5wdXQoKSBzaG93SW5kaWNhdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgc2hvd0luZGljYXRvcnNPbkl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGluZGljYXRvcnNQb3NpdGlvbjogc3RyaW5nID0gXCJib3R0b21cIjtcblxuICAgIEBJbnB1dCgpIGJhc2VaSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBtYXNrQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjb250YWluZXJTdHlsZTogYW55O1xuXG4gICAgQFZpZXdDaGlsZCgnbWFzaycsIHtzdGF0aWM6IGZhbHNlfSkgbWFzazogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgc2V0IHZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgYWN0aXZlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuXHRAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cblxuICAgIF92aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBfYWN0aXZlSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBoZWFkZXJGYWNldDogYW55O1xuXG4gICAgZm9vdGVyRmFjZXQ6IGFueTtcblxuICAgIGluZGljYXRvckZhY2V0OiBhbnk7XG5cbiAgICBjYXB0aW9uRmFjZXQ6IGFueTtcblxuICAgIHpJbmRleDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckZhY2V0ID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlckZhY2V0ID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpbmRpY2F0b3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvckZhY2V0ID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXB0aW9uRmFjZXQgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxTY3JlZW4gJiYgc2ltcGxlQ2hhbmdlcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAoc2ltcGxlQ2hhbmdlcy52aXNpYmxlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3Atb3ZlcmZsb3ctaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnpJbmRleCA9IFN0cmluZyh0aGlzLmJhc2VaSW5kZXggKyArK0RvbUhhbmRsZXIuemluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAncC1vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbk1hc2tIaWRlKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQWN0aXZlSXRlbUNoYW5nZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAncC1vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWdhbGxlcmlhQ29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbYXR0ci5pZF09XCJpZFwiICpuZ0lmPVwidmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMFwiIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYSBwLWNvbXBvbmVudCc6IHRydWUsICdwLWdhbGxlcmlhLWZ1bGxzY3JlZW4nOiB0aGlzLmdhbGxlcmlhLmZ1bGxTY3JlZW4sIFxuICAgICAgICAgICAgJ3AtZ2FsbGVyaWEtaW5kaWNhdG9yLW9uaXRlbSc6IHRoaXMuZ2FsbGVyaWEuc2hvd0luZGljYXRvcnNPbkl0ZW0sICdwLWdhbGxlcmlhLWl0ZW0tbmF2LW9uaG92ZXInOiB0aGlzLmdhbGxlcmlhLnNob3dJdGVtTmF2aWdhdG9yc09uSG92ZXIgJiYgIXRoaXMuZ2FsbGVyaWEuZnVsbFNjcmVlbn1cIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwiIWdhbGxlcmlhLmZ1bGxTY3JlZW4gPyBnYWxsZXJpYS5jb250YWluZXJTdHlsZSA6IHt9XCIgW2NsYXNzXT1cImdhbGxlcmlhQ2xhc3MoKVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImdhbGxlcmlhLmZ1bGxTY3JlZW5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwLWdhbGxlcmlhLWNsb3NlIHAtbGlua1wiIChjbGljayk9XCJtYXNrSGlkZS5lbWl0KClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1nYWxsZXJpYS1jbG9zZS1pY29uIHBpIHBpLXRpbWVzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ2FsbGVyaWEudGVtcGxhdGVzICYmIGdhbGxlcmlhLmhlYWRlckZhY2V0XCIgY2xhc3M9XCJwLWdhbGxlcmlhLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhSXRlbVNsb3QgdHlwZT1cImhlYWRlclwiIFt0ZW1wbGF0ZXNdPVwiZ2FsbGVyaWEudGVtcGxhdGVzXCI+PC9wLWdhbGxlcmlhSXRlbVNsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUl0ZW0gW3ZhbHVlXT1cInZhbHVlXCIgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCIgW2NpcmN1bGFyXT1cImdhbGxlcmlhLmNpcmN1bGFyXCIgW3RlbXBsYXRlc109XCJnYWxsZXJpYS50ZW1wbGF0ZXNcIiAob25BY3RpdmVJbmRleENoYW5nZSk9XCJvbkFjdGl2ZUluZGV4Q2hhbmdlKCRldmVudClcIiBcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dJbmRpY2F0b3JzXT1cImdhbGxlcmlhLnNob3dJbmRpY2F0b3JzXCIgW2NoYW5nZUl0ZW1PbkluZGljYXRvckhvdmVyXT1cImdhbGxlcmlhLmNoYW5nZUl0ZW1PbkluZGljYXRvckhvdmVyXCIgW2luZGljYXRvckZhY2V0XT1cImdhbGxlcmlhLmluZGljYXRvckZhY2V0XCJcbiAgICAgICAgICAgICAgICAgICAgW2NhcHRpb25GYWNldF09XCJnYWxsZXJpYS5jYXB0aW9uRmFjZXRcIiBbc2hvd0l0ZW1OYXZpZ2F0b3JzXT1cImdhbGxlcmlhLnNob3dJdGVtTmF2aWdhdG9yc1wiIFthdXRvUGxheV09XCJnYWxsZXJpYS5hdXRvUGxheVwiIFtzbGlkZVNob3dBY3RpdmVdPVwic2xpZGVTaG93QWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXJ0U2xpZGVTaG93KT1cInN0YXJ0U2xpZGVTaG93KClcIiAoc3RvcFNsaWRlU2hvdyk9XCJzdG9wU2xpZGVTaG93KClcIj48L3AtZ2FsbGVyaWFJdGVtPlxuXG4gICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFUaHVtYm5haWxzICpuZ0lmPVwiZ2FsbGVyaWEuc2hvd1RodW1ibmFpbHNcIiBbY29udGFpbmVySWRdPVwiaWRcIiBbdmFsdWVdPVwidmFsdWVcIiAob25BY3RpdmVJbmRleENoYW5nZSk9XCJvbkFjdGl2ZUluZGV4Q2hhbmdlKCRldmVudClcIiBbYWN0aXZlSW5kZXhdPVwiYWN0aXZlSW5kZXhcIiBbdGVtcGxhdGVzXT1cImdhbGxlcmlhLnRlbXBsYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtudW1WaXNpYmxlXT1cImdhbGxlcmlhLm51bVZpc2libGVcIiBbcmVzcG9uc2l2ZU9wdGlvbnNdPVwiZ2FsbGVyaWEucmVzcG9uc2l2ZU9wdGlvbnNcIiBbY2lyY3VsYXJdPVwiZ2FsbGVyaWEuY2lyY3VsYXJcIlxuICAgICAgICAgICAgICAgICAgICBbaXNWZXJ0aWNhbF09XCJpc1ZlcnRpY2FsKClcIiBbY29udGVudEhlaWdodF09XCJnYWxsZXJpYS52ZXJ0aWNhbFRodW1ibmFpbFZpZXdQb3J0SGVpZ2h0XCIgW3Nob3dUaHVtYm5haWxOYXZpZ2F0b3JzXT1cImdhbGxlcmlhLnNob3dUaHVtYm5haWxOYXZpZ2F0b3JzXCJcbiAgICAgICAgICAgICAgICAgICAgW3NsaWRlU2hvd0FjdGl2ZV09XCJzbGlkZVNob3dBY3RpdmVcIiAoc3RvcFNsaWRlU2hvdyk9XCJzdG9wU2xpZGVTaG93KClcIj48L3AtZ2FsbGVyaWFUaHVtYm5haWxzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ2FsbGVyaWEudGVtcGxhdGVzICYmIGdhbGxlcmlhLmZvb3RlckZhY2V0XCIgY2xhc3M9XCJwLWdhbGxlcmlhLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhSXRlbVNsb3QgdHlwZT1cImZvb3RlclwiIFt0ZW1wbGF0ZXNdPVwiZ2FsbGVyaWEudGVtcGxhdGVzXCI+PC9wLWdhbGxlcmlhSXRlbVNsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcmlhQ29udGVudCB7XG5cbiAgICBASW5wdXQoKSBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4O1xuICAgIH07XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgoYWN0aXZlSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnlbXSA9IFtdO1xuXG4gICAgQE91dHB1dCgpIG1hc2tIaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBhY3RpdmVJdGVtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGlkOiBzdHJpbmcgPSB0aGlzLmdhbGxlcmlhLmlkIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG5cbiAgICBzbGlkZVNob3dBY3RpY3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBfYWN0aXZlSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBzbGlkZVNob3dBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgaW50ZXJ2YWw6IGFueTtcblxuICAgIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJpYTogR2FsbGVyaWEsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgZ2FsbGVyaWFDbGFzcygpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsc1Bvc0NsYXNzID0gdGhpcy5nYWxsZXJpYS5zaG93VGh1bWJuYWlscyAmJiB0aGlzLmdldFBvc2l0aW9uQ2xhc3MoJ3AtZ2FsbGVyaWEtdGh1bWJuYWlscycsIHRoaXMuZ2FsbGVyaWEudGh1bWJuYWlsc1Bvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgaW5kaWNhdG9yUG9zQ2xhc3MgPSB0aGlzLmdhbGxlcmlhLnNob3dJbmRpY2F0b3JzICYmIHRoaXMuZ2V0UG9zaXRpb25DbGFzcygncC1nYWxsZXJpYS1pbmRpY2F0b3JzJywgdGhpcy5nYWxsZXJpYS5pbmRpY2F0b3JzUG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5nYWxsZXJpYS5jb250YWluZXJDbGFzcyA/IHRoaXMuZ2FsbGVyaWEuY29udGFpbmVyQ2xhc3MgKyBcIiBcIiA6ICcnKSArICh0aHVtYm5haWxzUG9zQ2xhc3MgPyB0aHVtYm5haWxzUG9zQ2xhc3MgKyBcIiBcIiA6ICcnKSArIChpbmRpY2F0b3JQb3NDbGFzcyA/IGluZGljYXRvclBvc0NsYXNzICsgXCIgXCIgOiAnJyk7XG4gICAgfVxuXG4gICAgc3RhcnRTbGlkZVNob3coKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlSW5kZXggPSAodGhpcy5nYWxsZXJpYS5jaXJjdWxhciAmJiAodGhpcy52YWx1ZS5sZW5ndGggLSAxKSA9PT0gdGhpcy5hY3RpdmVJbmRleCkgPyAwIDogKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZShhY3RpdmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgICAgIH0sIHRoaXMuZ2FsbGVyaWEudHJhbnNpdGlvbkludGVydmFsKTtcblxuICAgICAgICB0aGlzLnNsaWRlU2hvd0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RvcFNsaWRlU2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNsaWRlU2hvd0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uQ2xhc3MocHJlQ2xhc3NOYW1lLCBwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbScsICdyaWdodCddO1xuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbnMuZmluZChpdGVtID0+IGl0ZW0gPT09IHBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gcG9zID8gYCR7cHJlQ2xhc3NOYW1lfS0ke3Bvc31gIDogJyc7XG4gICAgfVxuXG4gICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FsbGVyaWEudGh1bWJuYWlsc1Bvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5nYWxsZXJpYS50aHVtYm5haWxzUG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgfVxuXG4gICAgb25BY3RpdmVJbmRleENoYW5nZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtZ2FsbGVyaWFJdGVtU2xvdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZTsgY29udGV4dDogY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBgLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyaWFJdGVtU2xvdCB7XG4gICAgQElucHV0KCkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBnZXQgaXRlbSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbTtcbiAgICB9O1xuXG4gICAgc2V0IGl0ZW0oaXRlbTphbnkpIHtcbiAgICAgICAgdGhpcy5faXRlbSA9IGl0ZW07XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdldFR5cGUoKSA9PT0gdGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2FwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aHVtYm5haWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHskaW1wbGljaXQ6IHRoaXMuaXRlbX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnRleHQ6YW55O1xuXG4gICAgX2l0ZW06YW55O1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5nZXRUeXBlKCkgPT09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NhcHRpb24nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aHVtYm5haWwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0geyRpbXBsaWNpdDogdGhpcy5pdGVtfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luZGljYXRvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB7JGltcGxpY2l0OiB0aGlzLmluZGV4fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1nYWxsZXJpYUl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZ2FsbGVyaWEtaXRlbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0l0ZW1OYXZpZ2F0b3JzXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS1pdGVtLXByZXYgcC1nYWxsZXJpYS1pdGVtLW5hdiBwLWxpbmsnOiB0cnVlLCAncC1kaXNhYmxlZCc6IHRoaXMuaXNOYXZCYWNrd2FyZERpc2FibGVkKCl9XCIgKGNsaWNrKT1cIm5hdkJhY2t3YXJkKCRldmVudClcIiBbZGlzYWJsZWRdPVwiaXNOYXZCYWNrd2FyZERpc2FibGVkKClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZ2FsbGVyaWEtaXRlbS1wcmV2LWljb24gcGkgcGktY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwLWdhbGxlcmlhSXRlbVNsb3QgdHlwZT1cIml0ZW1cIiBbaXRlbV09XCJhY3RpdmVJdGVtXCIgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIiBjbGFzcz1cInAtZ2FsbGVyaWEtaXRlbVwiPjwvcC1nYWxsZXJpYUl0ZW1TbG90PlxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93SXRlbU5hdmlnYXRvcnNcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLWl0ZW0tbmV4dCBwLWdhbGxlcmlhLWl0ZW0tbmF2IHAtbGluayc6IHRydWUsJ3AtZGlzYWJsZWQnOiB0aGlzLmlzTmF2Rm9yd2FyZERpc2FibGVkKCl9XCIgKGNsaWNrKT1cIm5hdkZvcndhcmQoJGV2ZW50KVwiICBbZGlzYWJsZWRdPVwiaXNOYXZGb3J3YXJkRGlzYWJsZWQoKVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1nYWxsZXJpYS1pdGVtLW5leHQtaWNvbiBwaSBwaS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLWNhcHRpb25cIiAqbmdJZj1cImNhcHRpb25GYWNldFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1nYWxsZXJpYUl0ZW1TbG90IHR5cGU9XCJjYXB0aW9uXCIgW2l0ZW1dPVwiYWN0aXZlSXRlbVwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+PC9wLWdhbGxlcmlhSXRlbVNsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCAqbmdJZj1cInNob3dJbmRpY2F0b3JzXCIgY2xhc3M9XCJwLWdhbGxlcmlhLWluZGljYXRvcnMgcC1yZXNldFwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2YWx1ZTsgbGV0IGluZGV4ID0gaW5kZXg7XCIgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSW5kaWNhdG9yQ2xpY2soaW5kZXgpXCIgKG1vdXNlZW50ZXIpPVwib25JbmRpY2F0b3JNb3VzZUVudGVyKGluZGV4KVwiIChrZXlkb3duLmVudGVyKT1cIm9uSW5kaWNhdG9yS2V5RG93bihpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtaW5kaWNhdG9yJzogdHJ1ZSwncC1oaWdobGlnaHQnOiBpc0luZGljYXRvckl0ZW1BY3RpdmUoaW5kZXgpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJJbmRleD1cIi0xXCIgY2xhc3M9XCJwLWxpbmtcIiAqbmdJZj1cIiFpbmRpY2F0b3JGYWNldFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFJdGVtU2xvdCB0eXBlPVwiaW5kaWNhdG9yXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIj48L3AtZ2FsbGVyaWFJdGVtU2xvdD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcmlhSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBjaXJjdWxhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgdmFsdWU6IGFueVtdO1xuXG4gICAgQElucHV0KCkgc2hvd0l0ZW1OYXZpZ2F0b3JzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBzaG93SW5kaWNhdG9yczogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSBzbGlkZVNob3dBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgQElucHV0KCkgYXV0b1BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBASW5wdXQoKSBpbmRpY2F0b3JGYWNldDogYW55O1xuXG4gICAgQElucHV0KCkgY2FwdGlvbkZhY2V0OiBhbnk7XG5cbiAgICBAT3V0cHV0KCkgc3RhcnRTbGlkZVNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHN0b3BTbGlkZVNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkFjdGl2ZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIGdldCBhY3RpdmVJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlSW5kZXg7XG4gICAgfTtcblxuICAgIHNldCBhY3RpdmVJbmRleChhY3RpdmVJbmRleCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLnZhbHVlW3RoaXMuX2FjdGl2ZUluZGV4XTtcbiAgICB9XG5cbiAgICBfYWN0aXZlSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBhY3RpdmVJdGVtOiBhbnk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTbGlkZVNob3cuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgbGV0IG5leHRJdGVtSW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gdGhpcy5jaXJjdWxhciAmJiB0aGlzLnZhbHVlLmxlbmd0aCAtIDEgPT09IHRoaXMuYWN0aXZlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogbmV4dEl0ZW1JbmRleDtcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoYWN0aXZlSW5kZXgpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGxldCBwcmV2SXRlbUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAhPT0gMCA/IHRoaXMuYWN0aXZlSW5kZXggLSAxIDogMDtcbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gdGhpcy5jaXJjdWxhciAmJiB0aGlzLmFjdGl2ZUluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLnZhbHVlLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICA6IHByZXZJdGVtSW5kZXhcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoYWN0aXZlSW5kZXgpO1xuICAgIH1cblxuICAgIHN0b3BUaGVTbGlkZVNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlU2hvd0FjdGl2ZSAmJiB0aGlzLnN0b3BTbGlkZVNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNsaWRlU2hvdy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZGb3J3YXJkKGUpIHtcbiAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuXG4gICAgICAgIGlmIChlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2QmFja3dhcmQoZSkge1xuICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG5cbiAgICAgICAgaWYgKGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkluZGljYXRvckNsaWNrKGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3RvcFRoZVNsaWRlU2hvdygpO1xuICAgICAgICB0aGlzLm9uQWN0aXZlSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgfVxuXG4gICAgb25JbmRpY2F0b3JNb3VzZUVudGVyKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZUl0ZW1PbkluZGljYXRvckhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5kaWNhdG9yS2V5RG93bihpbmRleCkge1xuICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cblxuICAgIGlzTmF2Rm9yd2FyZERpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuY2lyY3VsYXIgJiYgdGhpcy5hY3RpdmVJbmRleCA9PT0gKHRoaXMudmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaXNOYXZCYWNrd2FyZERpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuY2lyY3VsYXIgJiYgdGhpcy5hY3RpdmVJbmRleCA9PT0gMDtcbiAgICB9XG5cbiAgICBpc0luZGljYXRvckl0ZW1BY3RpdmUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXggPT09IGluZGV4O1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWdhbGxlcmlhVGh1bWJuYWlscycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtZ2FsbGVyaWEtdGh1bWJuYWlsLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWdhbGxlcmlhLXRodW1ibmFpbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1RodW1ibmFpbE5hdmlnYXRvcnNcIiB0eXBlPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieydwLWdhbGxlcmlhLXRodW1ibmFpbC1wcmV2IHAtbGluayc6IHRydWUsICdwLWRpc2FibGVkJzogdGhpcy5pc05hdkJhY2t3YXJkRGlzYWJsZWQoKX1cIiAoY2xpY2spPVwibmF2QmFja3dhcmQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJpc05hdkJhY2t3YXJkRGlzYWJsZWQoKVwiIHBSaXBwbGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS10aHVtYm5haWwtcHJldi1pY29uIHBpJzogdHJ1ZSwgJ3BpLWNoZXZyb24tbGVmdCc6ICF0aGlzLmlzVmVydGljYWwsICdwaS1jaGV2cm9uLXVwJzogdGhpcy5pc1ZlcnRpY2FsfVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbXMtY29udGFpbmVyXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBpc1ZlcnRpY2FsID8gY29udGVudEhlaWdodCA6ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNpdGVtc0NvbnRhaW5lciBjbGFzcz1cInAtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zXCIgKHRyYW5zaXRpb25lbmQpPVwib25UcmFuc2l0aW9uRW5kKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIiAodG91Y2htb3ZlKT1cIm9uVG91Y2hNb3ZlKCRldmVudClcIiAodG91Y2hlbmQpPVwib25Ub3VjaEVuZCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZhbHVlOyBsZXQgaW5kZXggPSBpbmRleDtcIiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0nOiB0cnVlLCAncC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1jdXJyZW50JzogYWN0aXZlSW5kZXggPT09IGluZGV4LCAncC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1hY3RpdmUnOiBpc0l0ZW1BY3RpdmUoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtLXN0YXJ0JzogZmlyc3RJdGVtQWNpdmVJbmRleCgpID09PSBpbmRleCwgJ3AtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0tZW5kJzogbGFzdEl0ZW1BY3RpdmVJbmRleCgpID09PSBpbmRleCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0tY29udGVudFwiIFthdHRyLnRhYmluZGV4XT1cImdldFRhYkluZGV4KGluZGV4KVwiIChjbGljayk9XCJvbkl0ZW1DbGljayhpbmRleClcIiAoa2V5ZG93bi5lbnRlcik9XCJvbkl0ZW1DbGljayhpbmRleClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZ2FsbGVyaWFJdGVtU2xvdCB0eXBlPVwidGh1bWJuYWlsXCIgW2l0ZW1dPVwiaXRlbVwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+PC9wLWdhbGxlcmlhSXRlbVNsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dUaHVtYm5haWxOYXZpZ2F0b3JzXCIgdHlwZT1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsncC1nYWxsZXJpYS10aHVtYm5haWwtbmV4dCBwLWxpbmsnOiB0cnVlLCAncC1kaXNhYmxlZCc6IHRoaXMuaXNOYXZGb3J3YXJkRGlzYWJsZWQoKX1cIiAoY2xpY2spPVwibmF2Rm9yd2FyZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImlzTmF2Rm9yd2FyZERpc2FibGVkKClcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3AtZ2FsbGVyaWEtdGh1bWJuYWlsLW5leHQtaWNvbiBwaSc6IHRydWUsICdwaS1jaGV2cm9uLXJpZ2h0JzogIXRoaXMuaXNWZXJ0aWNhbCwgJ3BpLWNoZXZyb24tZG93bic6IHRoaXMuaXNWZXJ0aWNhbH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcmlhVGh1bWJuYWlscyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGNvbnRhaW5lcklkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogYW55W107XG5cbiAgICBASW5wdXQoKSBpc1ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBzbGlkZVNob3dBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGNpcmN1bGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSByZXNwb25zaXZlT3B0aW9uczogYW55W107XG5cbiAgICBASW5wdXQoKSBjb250ZW50SGVpZ2h0OiBzdHJpbmcgPSBcIjMwMHB4XCI7XG5cbiAgICBASW5wdXQoKSBzaG93VGh1bWJuYWlsTmF2aWdhdG9ycyA9IHRydWU7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgQE91dHB1dCgpIG9uQWN0aXZlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIHN0b3BTbGlkZVNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZCgnaXRlbXNDb250YWluZXInKSBpdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIGdldCBudW1WaXNpYmxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9udW1WaXNpYmxlO1xuICAgIH07XG5cbiAgICBzZXQgbnVtVmlzaWJsZShudW1WaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuX251bVZpc2libGUgPSBudW1WaXNpYmxlO1xuICAgICAgICB0aGlzLl9vbGROdW1WaXNpYmxlID0gdGhpcy5kX251bVZpc2libGU7XG4gICAgICAgIHRoaXMuZF9udW1WaXNpYmxlID0gbnVtVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4O1xuICAgIH07XG5cbiAgICBzZXQgYWN0aXZlSW5kZXgoYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fb2xkYWN0aXZlSW5kZXggPSB0aGlzLl9hY3RpdmVJbmRleDtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG4gICAgXG4gICAgaW5kZXg6IG51bWJlcjtcblxuICAgIHN0YXJ0UG9zID0gbnVsbDtcbiAgICBcbiAgICB0aHVtYm5haWxzU3R5bGUgPSBudWxsO1xuXG4gICAgc29ydGVkUmVzcG9uc2l2ZU9wdGlvbnMgPSBudWxsO1xuXG4gICAgdG90YWxTaGlmdGVkSXRlbXM6IG51bWJlciA9IDA7XG5cbiAgICBwYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgZG9jdW1lbnRSZXNpemVMaXN0ZW5lcjogYW55O1xuXG4gICAgX251bVZpc2libGU6bnVtYmVyID0gMDtcblxuICAgIGRfbnVtVmlzaWJsZTogbnVtYmVyID0gMDtcblxuICAgIF9vbGROdW1WaXNpYmxlOiBudW1iZXIgPSAwO1xuXG4gICAgX2FjdGl2ZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIFxuICAgIF9vbGRhY3RpdmVJbmRleDogbnVtYmVyID0gMDtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVN0eWxlKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuXG5cdFx0aWYgKHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcblx0XHRcdHRoaXMuYmluZERvY3VtZW50TGlzdGVuZXJzKCk7XG5cdFx0fVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAgICAgbGV0IHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcztcblxuICAgICAgICBpZiAoKHRoaXMuX29sZE51bVZpc2libGUgIT09IHRoaXMuZF9udW1WaXNpYmxlIHx8IHRoaXMuX29sZGFjdGl2ZUluZGV4ICE9PSB0aGlzLl9hY3RpdmVJbmRleCkgJiYgdGhpcy5pdGVtc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUluZGV4IDw9IHRoaXMuZ2V0TWVkaWFuSXRlbUluZGV4KCkpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIHRoaXMuZF9udW1WaXNpYmxlICsgdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSA8IHRoaXMuX2FjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLmRfbnVtVmlzaWJsZSAtIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZS5sZW5ndGggLSB0aGlzLmRfbnVtVmlzaWJsZSA8IHRoaXMuX2FjdGl2ZUluZGV4ICYmIHRoaXMuZF9udW1WaXNpYmxlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gKHRoaXMuX2FjdGl2ZUluZGV4ICogLTEpICsgdGhpcy5nZXRNZWRpYW5JdGVtSW5kZXgoKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9ICh0aGlzLl9hY3RpdmVJbmRleCAqIC0xKSArIHRoaXMuZ2V0TWVkaWFuSXRlbUluZGV4KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIgJiYgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDApYCA6IGB0cmFuc2xhdGUzZCgke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDAsIDApYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX29sZGFjdGl2ZUluZGV4ICE9PSB0aGlzLl9hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncC1pdGVtcy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZSAwcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX29sZGFjdGl2ZUluZGV4ID0gdGhpcy5fYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9vbGROdW1WaXNpYmxlID0gdGhpcy5kX251bVZpc2libGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTdHlsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRodW1ibmFpbHNTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudGh1bWJuYWlsc1N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAjJHt0aGlzLmNvbnRhaW5lcklkfSAucC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbSB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwICR7ICgxMDAvIHRoaXMuZF9udW1WaXNpYmxlKSB9JVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgIGlmICh0aGlzLnJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zID0gWy4uLnRoaXMucmVzcG9uc2l2ZU9wdGlvbnNdO1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRSZXNwb25zaXZlT3B0aW9ucy5zb3J0KChkYXRhMSwgZGF0YTIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTEgPSBkYXRhMS5icmVha3BvaW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlMiA9IGRhdGEyLmJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IC0xO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlMSAhPSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlMSA9PSBudWxsICYmIHZhbHVlMiA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZTEgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZTIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKHZhbHVlMSA8IHZhbHVlMikgPyAtMSA6ICh2YWx1ZTEgPiB2YWx1ZTIpID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMuc29ydGVkUmVzcG9uc2l2ZU9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICBpbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3Jlcy5icmVha3BvaW50fSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIyR7dGhpcy5jb250YWluZXJJZH0gLnAtZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAkeyAoMTAwLyByZXMubnVtVmlzaWJsZSkgfSVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1N0eWxlLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIgJiYgdGhpcy5zb3J0ZWRSZXNwb25zaXZlT3B0aW9ucykge1xuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZFJlc3BvbnNpdmVEYXRhID0ge1xuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IHRoaXMuX251bVZpc2libGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0ZWRSZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLnNvcnRlZFJlc3BvbnNpdmVPcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJlcy5icmVha3BvaW50LCAxMCkgPj0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFJlc3BvbnNpdmVEYXRhID0gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZF9udW1WaXNpYmxlICE9PSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZF9udW1WaXNpYmxlID0gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUYWJJbmRleChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0l0ZW1BY3RpdmUoaW5kZXgpID8gMCA6IG51bGw7XG4gICAgfVxuXG4gICAgbmF2Rm9yd2FyZChlKSB7XG4gICAgICAgIHRoaXMuc3RvcFRoZVNsaWRlU2hvdygpO1xuXG4gICAgICAgIGxldCBuZXh0SXRlbUluZGV4ID0gdGhpcy5fYWN0aXZlSW5kZXggKyAxO1xuICAgICAgICBpZiAobmV4dEl0ZW1JbmRleCArIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPiB0aGlzLmdldE1lZGlhbkl0ZW1JbmRleCgpICYmICgoLTEgKiB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zKSA8IHRoaXMuZ2V0VG90YWxQYWdlTnVtYmVyKCkgLSAxIHx8IHRoaXMuY2lyY3VsYXIpKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAoLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gdGhpcy5jaXJjdWxhciAmJiAodGhpcy52YWx1ZS5sZW5ndGggLSAxKSA9PT0gdGhpcy5fYWN0aXZlSW5kZXggPyAwIDogbmV4dEl0ZW1JbmRleDtcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoYWN0aXZlSW5kZXgpO1xuXG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdkJhY2t3YXJkKGUpIHtcbiAgICAgICAgdGhpcy5zdG9wVGhlU2xpZGVTaG93KCk7XG5cbiAgICAgICAgbGV0IHByZXZJdGVtSW5kZXggPSB0aGlzLl9hY3RpdmVJbmRleCAhPT0gMCA/IHRoaXMuX2FjdGl2ZUluZGV4IC0gMSA6IDA7XG4gICAgICAgIGxldCBkaWZmID0gcHJldkl0ZW1JbmRleCArIHRoaXMudG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgIGlmICgodGhpcy5kX251bVZpc2libGUgLSBkaWZmIC0gMSkgPiB0aGlzLmdldE1lZGlhbkl0ZW1JbmRleCgpICYmICgoLTEgKiB0aGlzLnRvdGFsU2hpZnRlZEl0ZW1zKSAhPT0gMCB8fCB0aGlzLmNpcmN1bGFyKSkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gdGhpcy5jaXJjdWxhciAmJiB0aGlzLl9hY3RpdmVJbmRleCA9PT0gMCA/IHRoaXMudmFsdWUubGVuZ3RoIC0gMSA6IHByZXZJdGVtSW5kZXg7XG4gICAgICAgIHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5lbWl0KGFjdGl2ZUluZGV4KTtcblxuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnN0b3BUaGVTbGlkZVNob3coKTtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4ICE9PSB0aGlzLl9hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHNlbGVjdGVkSXRlbUluZGV4ICsgdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICAgICAgICAgIGxldCBkaXIgPSAwO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUluZGV4IDwgdGhpcy5fYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBkaXIgPSAodGhpcy5kX251bVZpc2libGUgLSBkaWZmIC0gMSkgLSB0aGlzLmdldE1lZGlhbkl0ZW1JbmRleCgpO1xuICAgICAgICAgICAgICAgIGlmIChkaXIgPiAwICYmICgtMSAqIHRoaXMudG90YWxTaGlmdGVkSXRlbXMpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcChkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpciA9IHRoaXMuZ2V0TWVkaWFuSXRlbUluZGV4KCkgLSBkaWZmO1xuICAgICAgICAgICAgICAgIGlmIChkaXIgPCAwICYmICgtMSAqIHRoaXMudG90YWxTaGlmdGVkSXRlbXMpIDwgdGhpcy5nZXRUb3RhbFBhZ2VOdW1iZXIoKSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwKGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gc2VsZWN0ZWRJdGVtSW5kZXg7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXAoZGlyKSB7XG4gICAgICAgIGxldCB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMudG90YWxTaGlmdGVkSXRlbXMgKyBkaXI7XG5cbiAgICAgICAgaWYgKGRpciA8IDAgJiYgKC0xICogdG90YWxTaGlmdGVkSXRlbXMpICsgdGhpcy5kX251bVZpc2libGUgPiAodGhpcy52YWx1ZS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLmRfbnVtVmlzaWJsZSAtIHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpciA+IDAgJiYgdG90YWxTaGlmdGVkSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaXJjdWxhcikge1xuICAgICAgICAgICAgaWYgKGRpciA8IDAgJiYgdGhpcy52YWx1ZS5sZW5ndGggLSAxID09PSB0aGlzLl9hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpciA+IDAgJiYgdGhpcy5fYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMuZF9udW1WaXNpYmxlIC0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdwLWl0ZW1zLWhpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDApYCA6IGB0cmFuc2xhdGUzZCgke3RvdGFsU2hpZnRlZEl0ZW1zICogKDEwMC8gdGhpcy5kX251bVZpc2libGUpfSUsIDAsIDApYDtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSA1MDBtcyBlYXNlIDBzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG90YWxTaGlmdGVkSXRlbXMgPSB0b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICB9XG5cbiAgICBzdG9wVGhlU2xpZGVTaG93KCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZVNob3dBY3RpdmUgJiYgdGhpcy5zdG9wU2xpZGVTaG93KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3cuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZU9uVG91Y2goZSwgZGlmZikge1xuICAgICAgICBpZiAoZGlmZiA8IDApIHsgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIHRoaXMubmF2Rm9yd2FyZChlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICB0aGlzLm5hdkJhY2t3YXJkKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFRvdGFsUGFnZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5kX251bVZpc2libGUgPyAodGhpcy52YWx1ZS5sZW5ndGggLSB0aGlzLmRfbnVtVmlzaWJsZSkgKyAxIDogMDtcbiAgICB9XG5cbiAgICBnZXRNZWRpYW5JdGVtSW5kZXgoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IodGhpcy5kX251bVZpc2libGUgLyAyKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMuZF9udW1WaXNpYmxlICUgMikgPyBpbmRleCA6IGluZGV4IC0gMTtcbiAgICB9XG5cbiAgICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zQ29udGFpbmVyICYmIHRoaXMuaXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLml0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdwLWl0ZW1zLWhpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICBsZXQgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZU9uVG91Y2goZSwgKHRvdWNob2JqLnBhZ2VZIC0gdGhpcy5zdGFydFBvcy55KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2VPblRvdWNoKGUsICh0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhcnRQb3MueCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBsZXQgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB7XG4gICAgICAgICAgICB4OiB0b3VjaG9iai5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNob2JqLnBhZ2VZXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaXNOYXZCYWNrd2FyZERpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmNpcmN1bGFyICYmIHRoaXMuX2FjdGl2ZUluZGV4ID09PSAwKSB8fCAodGhpcy52YWx1ZS5sZW5ndGggPD0gdGhpcy5kX251bVZpc2libGUpO1xuICAgIH1cblxuICAgIGlzTmF2Rm9yd2FyZERpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmNpcmN1bGFyICYmIHRoaXMuX2FjdGl2ZUluZGV4ID09PSAodGhpcy52YWx1ZS5sZW5ndGggLSAxKSkgfHwgKHRoaXMudmFsdWUubGVuZ3RoIDw9IHRoaXMuZF9udW1WaXNpYmxlKTtcbiAgICB9XG5cbiAgICBmaXJzdEl0ZW1BY2l2ZUluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbFNoaWZ0ZWRJdGVtcyAqIC0xO1xuICAgIH1cblxuICAgIGxhc3RJdGVtQWN0aXZlSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0SXRlbUFjaXZlSW5kZXgoKSArIHRoaXMuZF9udW1WaXNpYmxlIC0gMTtcbiAgICB9XG5cbiAgICBpc0l0ZW1BY3RpdmUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RJdGVtQWNpdmVJbmRleCgpIDw9IGluZGV4ICYmIHRoaXMubGFzdEl0ZW1BY3RpdmVJbmRleCgpID49IGluZGV4O1xuICAgIH1cblxuICAgIGJpbmREb2N1bWVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZERvY3VtZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBpZih0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zaXZlT3B0aW9ucykge1xuXHRcdFx0dGhpcy51bmJpbmREb2N1bWVudExpc3RlbmVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGh1bWJuYWlsc1N0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbHNTdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudGh1bWJuYWlsc1N0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGUsIFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgR2FsbGVyaWEsIEdhbGxlcmlhQ29udGVudCwgR2FsbGVyaWFJdGVtU2xvdCwgR2FsbGVyaWFJdGVtLCBHYWxsZXJpYVRodW1ibmFpbHMsIFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbR2FsbGVyaWEsIEdhbGxlcmlhQ29udGVudCwgR2FsbGVyaWFJdGVtU2xvdCwgR2FsbGVyaWFJdGVtLCBHYWxsZXJpYVRodW1ibmFpbHNdXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcmlhTW9kdWxlIHsgfSJdfQ==