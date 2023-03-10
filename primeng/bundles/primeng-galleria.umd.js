(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('primeng/utils'), require('primeng/dom'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/galleria', ['@angular/core','@angular/common','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api', 'primeng/utils', 'primeng/dom', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.galleria = {}), global.ng.core, global.ng.common, global.primeng.api, global.primeng.utils, global.primeng.dom, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, api, utils, dom, ripple) { 
var _c0 = ["mask"];
var _c1 = function (a1) { return { "p-galleria-mask p-component-overlay": true, "p-galleria-visible": a1 }; };
var _c2 = function (a0) { return { "zIndex": a0 }; };
function Galleria_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3, 4);
    ɵngcc0.ɵɵelementStart(2, "p-galleriaContent", 5);
    ɵngcc0.ɵɵlistener("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.onMaskHide(); })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
function Galleria_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaContent", 6);
    ɵngcc0.ɵɵlistener("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onActiveItemChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
} }
function GalleriaContent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 8);
    ɵngcc0.ɵɵlistener("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.maskHide.emit(); });
    ɵngcc0.ɵɵelement(1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
} }
function GalleriaContent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r2.galleria.templates);
} }
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-galleriaThumbnails", 12);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onActiveIndexChange($event); })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
} }
function GalleriaContent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("templates", ctx_r4.galleria.templates);
} }
var _c3 = function (a1, a2, a3) { return { "p-galleria p-component": true, "p-galleria-fullscreen": a1, "p-galleria-indicator-onitem": a2, "p-galleria-item-nav-onhover": a3 }; };
var _c4 = function () { return {}; };
function GalleriaContent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    ɵngcc0.ɵɵtemplate(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "p-galleriaItem", 5);
    ɵngcc0.ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActiveIndexChange($event); })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.startSlideShow(); })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.stopSlideShow(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
} }
var _c5 = function (a1) { return { "p-galleria-item-prev p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
} }
var _c6 = function (a1) { return { "p-galleria-item-next p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 6);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
} }
function GalleriaItem_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelement(1, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
} }
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "button", 16);
} }
var _c7 = function (a1) { return { "p-galleria-indicator": true, "p-highlight": a1 }; };
function GalleriaItem_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵlistener("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var index_r10 = ctx.index; var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onIndicatorClick(index_r10); })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var index_r10 = ctx.index; var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onIndicatorMouseEnter(index_r10); })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var index_r10 = ctx.index; var ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onIndicatorKeyDown(index_r10); });
    ɵngcc0.ɵɵtemplate(1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r10 = ctx.index;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
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
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.value);
} }
var _c8 = ["itemsContainer"];
var _c9 = function (a1) { return { "p-galleria-thumbnail-prev p-link": true, "p-disabled": a1 }; };
var _c10 = function (a1, a2) { return { "p-galleria-thumbnail-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function GalleriaThumbnails_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.navBackward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
} }
var _c11 = function (a1, a2, a3, a4) { return { "p-galleria-thumbnail-item": true, "p-galleria-thumbnail-item-current": a1, "p-galleria-thumbnail-item-active": a2, "p-galleria-thumbnail-item-start": a3, "p-galleria-thumbnail-item-end": a4 }; };
function GalleriaThumbnails_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); var index_r7 = ctx.index; var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onItemClick(index_r7); })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() { ɵngcc0.ɵɵrestoreView(_r9); var index_r7 = ctx.index; var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemClick(index_r7); });
    ɵngcc0.ɵɵelement(2, "p-galleriaItemSlot", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var index_r7 = ctx.index;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.getTabIndex(index_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", item_r6)("templates", ctx_r2.templates);
} }
var _c12 = function (a1) { return { "p-galleria-thumbnail-next p-link": true, "p-disabled": a1 }; };
var _c13 = function (a1, a2) { return { "p-galleria-thumbnail-next-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function GalleriaThumbnails_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.navForward($event); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
} }
var _c14 = function (a0) { return { "height": a0 }; };
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

    var Galleria = /** @class */ (function () {
        function Galleria(element, cd) {
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
            this.activeIndexChange = new core.EventEmitter();
            this.visibleChange = new core.EventEmitter();
            this._visible = false;
            this._activeIndex = 0;
        }
        Object.defineProperty(Galleria.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (activeIndex) {
                this._activeIndex = activeIndex;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Galleria.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (visible) {
                this._visible = visible;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Galleria.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerFacet = item.template;
                        break;
                    case 'footer':
                        _this.footerFacet = item.template;
                        break;
                    case 'indicator':
                        _this.indicatorFacet = item.template;
                        break;
                    case 'caption':
                        _this.captionFacet = item.template;
                        break;
                }
            });
        };
        Galleria.prototype.ngOnChanges = function (simpleChanges) {
            if (this.fullScreen && simpleChanges.visible) {
                if (simpleChanges.visible.currentValue) {
                    dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
                    this.zIndex = String(this.baseZIndex + ++dom.DomHandler.zindex);
                }
                else {
                    dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
            }
        };
        Galleria.prototype.onMaskHide = function () {
            this.visible = false;
            this.visibleChange.emit(false);
        };
        Galleria.prototype.onActiveItemChange = function (index) {
            if (this.activeIndex !== index) {
                this.activeIndex = index;
                this.activeIndexChange.emit(index);
            }
        };
        Galleria.prototype.ngOnDestroy = function () {
            if (this.fullScreen) {
                dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        };
Galleria.ɵfac = function Galleria_Factory(t) { return new (t || Galleria)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Galleria.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Galleria, selectors: [["p-galleria"]], contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
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
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaContent]; }, styles: [".p-galleria-content,.p-galleria-item-wrapper{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:-ms-flexbox;display:flex;height:100%;position:relative}.p-galleria-item-nav{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{-ms-flex-direction:column;-ms-flex-negative:0;display:-ms-flexbox;display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-flex:0 0 auto;-ms-flex-item-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-thumbnail-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-item,.p-galleria-thumbnail-items{display:-ms-flexbox;display:flex}.p-galleria-thumbnail-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{-ms-flex-direction:row;flex-direction:row}.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-top .p-galleria-item-wrapper{-ms-flex-order:2;order:2}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper{-ms-flex-order:1;order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{-ms-flex-direction:column;-ms-flex-positive:1;flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{-ms-flex-direction:column;flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-indicator>button{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{-ms-flex-align:center;-ms-flex-direction:row;align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{-ms-flex-order:2;order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-order:1;order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-direction:column;flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:-ms-flexbox;display:flex;position:absolute}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:rgba(0,0,0,0);height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:rgba(0,0,0,0)}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Galleria, [{
        type: core.Component,
        args: [{
                selector: 'p-galleria',
                template: "\n        <div *ngIf=\"fullScreen;else windowed\">\n            <div *ngIf=\"visible\" #mask [ngClass]=\"{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}\" [class]=\"maskClass\" [ngStyle]=\"{'zIndex':zIndex}\">\n                <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (maskHide)=\"onMaskHide()\" (activeItemChange)=\"onActiveItemChange($event)\" [ngStyle]=\"containerStyle\"></p-galleriaContent>\n            </div>\n        </div>\n\n        <ng-template #windowed>\n            <p-galleriaContent [value]=\"value\" [activeIndex]=\"activeIndex\" (activeItemChange)=\"onActiveItemChange($event)\"></p-galleriaContent>\n        </ng-template>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-galleria-content,.p-galleria-item-wrapper{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:-ms-flexbox;display:flex;height:100%;position:relative}.p-galleria-item-nav{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{-ms-flex-direction:column;-ms-flex-negative:0;display:-ms-flexbox;display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-flex:0 0 auto;-ms-flex-item-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-thumbnail-container{-ms-flex-direction:row;display:-ms-flexbox;display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-item,.p-galleria-thumbnail-items{display:-ms-flexbox;display:flex}.p-galleria-thumbnail-item{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{-ms-flex-direction:row;flex-direction:row}.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-top .p-galleria-item-wrapper{-ms-flex-order:2;order:2}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper{-ms-flex-order:1;order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{-ms-flex-direction:column;-ms-flex-positive:1;flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{-ms-flex-direction:column;flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-galleria-indicator>button{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{-ms-flex-align:center;-ms-flex-direction:row;align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{-ms-flex-order:2;order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-order:1;order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-direction:column;flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:-ms-flexbox;display:flex;position:absolute}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{-ms-flex-align:end;align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{-ms-flex-align:start;align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:rgba(0,0,0,0);height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:rgba(0,0,0,0)}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { fullScreen: [{
            type: core.Input
        }], numVisible: [{
            type: core.Input
        }], showItemNavigators: [{
            type: core.Input
        }], showThumbnailNavigators: [{
            type: core.Input
        }], showItemNavigatorsOnHover: [{
            type: core.Input
        }], changeItemOnIndicatorHover: [{
            type: core.Input
        }], circular: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], transitionInterval: [{
            type: core.Input
        }], showThumbnails: [{
            type: core.Input
        }], thumbnailsPosition: [{
            type: core.Input
        }], verticalThumbnailViewPortHeight: [{
            type: core.Input
        }], showIndicators: [{
            type: core.Input
        }], showIndicatorsOnItem: [{
            type: core.Input
        }], indicatorsPosition: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], activeIndexChange: [{
            type: core.Output
        }], visibleChange: [{
            type: core.Output
        }], activeIndex: [{
            type: core.Input
        }], visible: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], responsiveOptions: [{
            type: core.Input
        }], maskClass: [{
            type: core.Input
        }], containerClass: [{
            type: core.Input
        }], containerStyle: [{
            type: core.Input
        }], mask: [{
            type: core.ViewChild,
            args: ['mask', { static: false }]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Galleria;
    }());
    Galleria.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    Galleria.propDecorators = {
        activeIndex: [{ type: core.Input }],
        fullScreen: [{ type: core.Input }],
        id: [{ type: core.Input }],
        value: [{ type: core.Input }],
        numVisible: [{ type: core.Input }],
        responsiveOptions: [{ type: core.Input }],
        showItemNavigators: [{ type: core.Input }],
        showThumbnailNavigators: [{ type: core.Input }],
        showItemNavigatorsOnHover: [{ type: core.Input }],
        changeItemOnIndicatorHover: [{ type: core.Input }],
        circular: [{ type: core.Input }],
        autoPlay: [{ type: core.Input }],
        transitionInterval: [{ type: core.Input }],
        showThumbnails: [{ type: core.Input }],
        thumbnailsPosition: [{ type: core.Input }],
        verticalThumbnailViewPortHeight: [{ type: core.Input }],
        showIndicators: [{ type: core.Input }],
        showIndicatorsOnItem: [{ type: core.Input }],
        indicatorsPosition: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        maskClass: [{ type: core.Input }],
        containerClass: [{ type: core.Input }],
        containerStyle: [{ type: core.Input }],
        mask: [{ type: core.ViewChild, args: ['mask', { static: false },] }],
        visible: [{ type: core.Input }],
        activeIndexChange: [{ type: core.Output }],
        visibleChange: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var GalleriaContent = /** @class */ (function () {
        function GalleriaContent(galleria, cd) {
            this.galleria = galleria;
            this.cd = cd;
            this.value = [];
            this.maskHide = new core.EventEmitter();
            this.activeItemChange = new core.EventEmitter();
            this.id = this.galleria.id || utils.UniqueComponentId();
            this.slideShowActicve = false;
            this._activeIndex = 0;
            this.slideShowActive = true;
        }
        Object.defineProperty(GalleriaContent.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (activeIndex) {
                this._activeIndex = activeIndex;
            },
            enumerable: false,
            configurable: true
        });
        ;
        GalleriaContent.prototype.galleriaClass = function () {
            var thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
            var indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
            return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
        };
        GalleriaContent.prototype.startSlideShow = function () {
            var _this = this;
            this.interval = setInterval(function () {
                var activeIndex = (_this.galleria.circular && (_this.value.length - 1) === _this.activeIndex) ? 0 : (_this.activeIndex + 1);
                _this.onActiveIndexChange(activeIndex);
                _this.activeIndex = activeIndex;
            }, this.galleria.transitionInterval);
            this.slideShowActive = true;
        };
        GalleriaContent.prototype.stopSlideShow = function () {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.slideShowActive = false;
        };
        GalleriaContent.prototype.getPositionClass = function (preClassName, position) {
            var positions = ['top', 'left', 'bottom', 'right'];
            var pos = positions.find(function (item) { return item === position; });
            return pos ? preClassName + "-" + pos : '';
        };
        GalleriaContent.prototype.isVertical = function () {
            return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
        };
        GalleriaContent.prototype.onActiveIndexChange = function (index) {
            if (this.activeIndex !== index) {
                this.activeIndex = index;
                this.activeItemChange.emit(this.activeIndex);
            }
        };
GalleriaContent.ɵfac = function GalleriaContent_Factory(t) { return new (t || GalleriaContent)(ɵngcc0.ɵɵdirectiveInject(Galleria), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
GalleriaContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaContent, selectors: [["p-galleriaContent"]], inputs: { value: "value", activeIndex: "activeIndex" }, outputs: { maskHide: "maskHide", activeItemChange: "activeItemChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]], template: function GalleriaContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, GalleriaItem, ɵngcc2.Ripple, GalleriaItemSlot, GalleriaThumbnails]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaContent, [{
        type: core.Component,
        args: [{
                selector: 'p-galleriaContent',
                template: "\n        <div [attr.id]=\"id\" *ngIf=\"value && value.length > 0\" [ngClass]=\"{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, \n            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}\"\n            [ngStyle]=\"!galleria.fullScreen ? galleria.containerStyle : {}\" [class]=\"galleriaClass()\">\n            <button *ngIf=\"galleria.fullScreen\" type=\"button\" class=\"p-galleria-close p-link\" (click)=\"maskHide.emit()\" pRipple>\n                <span class=\"p-galleria-close-icon pi pi-times\"></span>\n            </button>\n            <div *ngIf=\"galleria.templates && galleria.headerFacet\" class=\"p-galleria-header\">\n                <p-galleriaItemSlot type=\"header\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n            <div class=\"p-galleria-content\">\n                <p-galleriaItem [value]=\"value\" [activeIndex]=\"activeIndex\" [circular]=\"galleria.circular\" [templates]=\"galleria.templates\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" \n                    [showIndicators]=\"galleria.showIndicators\" [changeItemOnIndicatorHover]=\"galleria.changeItemOnIndicatorHover\" [indicatorFacet]=\"galleria.indicatorFacet\"\n                    [captionFacet]=\"galleria.captionFacet\" [showItemNavigators]=\"galleria.showItemNavigators\" [autoPlay]=\"galleria.autoPlay\" [slideShowActive]=\"slideShowActive\"\n                    (startSlideShow)=\"startSlideShow()\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaItem>\n\n                <p-galleriaThumbnails *ngIf=\"galleria.showThumbnails\" [containerId]=\"id\" [value]=\"value\" (onActiveIndexChange)=\"onActiveIndexChange($event)\" [activeIndex]=\"activeIndex\" [templates]=\"galleria.templates\"\n                    [numVisible]=\"galleria.numVisible\" [responsiveOptions]=\"galleria.responsiveOptions\" [circular]=\"galleria.circular\"\n                    [isVertical]=\"isVertical()\" [contentHeight]=\"galleria.verticalThumbnailViewPortHeight\" [showThumbnailNavigators]=\"galleria.showThumbnailNavigators\"\n                    [slideShowActive]=\"slideShowActive\" (stopSlideShow)=\"stopSlideShow()\"></p-galleriaThumbnails>\n            </div>\n            <div *ngIf=\"galleria.templates && galleria.footerFacet\" class=\"p-galleria-footer\">\n                <p-galleriaItemSlot type=\"footer\" [templates]=\"galleria.templates\"></p-galleriaItemSlot>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: Galleria }, { type: ɵngcc0.ChangeDetectorRef }]; }, { value: [{
            type: core.Input
        }], maskHide: [{
            type: core.Output
        }], activeItemChange: [{
            type: core.Output
        }], activeIndex: [{
            type: core.Input
        }] }); })();
        return GalleriaContent;
    }());
    GalleriaContent.ctorParameters = function () { return [
        { type: Galleria },
        { type: core.ChangeDetectorRef }
    ]; };
    GalleriaContent.propDecorators = {
        activeIndex: [{ type: core.Input }],
        value: [{ type: core.Input }],
        maskHide: [{ type: core.Output }],
        activeItemChange: [{ type: core.Output }]
    };
    var GalleriaItemSlot = /** @class */ (function () {
        function GalleriaItemSlot() {
        }
        Object.defineProperty(GalleriaItemSlot.prototype, "item", {
            get: function () {
                return this._item;
            },
            set: function (item) {
                var _this = this;
                this._item = item;
                if (this.templates) {
                    this.templates.forEach(function (item) {
                        if (item.getType() === _this.type) {
                            switch (_this.type) {
                                case 'item':
                                case 'caption':
                                case 'thumbnail':
                                    _this.context = { $implicit: _this.item };
                                    _this.contentTemplate = item.template;
                                    break;
                            }
                        }
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        ;
        GalleriaItemSlot.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                if (item.getType() === _this.type) {
                    switch (_this.type) {
                        case 'item':
                        case 'caption':
                        case 'thumbnail':
                            _this.context = { $implicit: _this.item };
                            _this.contentTemplate = item.template;
                            break;
                        case 'indicator':
                            _this.context = { $implicit: _this.index };
                            _this.contentTemplate = item.template;
                            break;
                        default:
                            _this.context = {};
                            _this.contentTemplate = item.template;
                            break;
                    }
                }
            });
        };
GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) { return new (t || GalleriaItemSlot)(); };
GalleriaItemSlot.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GalleriaItemSlot, selectors: [["p-galleriaItemSlot"]], inputs: { item: "item", templates: "templates", index: "index", type: "type" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleriaItemSlot_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItemSlot, [{
        type: core.Component,
        args: [{
                selector: 'p-galleriaItemSlot',
                template: "\n        <ng-container *ngIf=\"contentTemplate\">\n            <ng-container *ngTemplateOutlet=\"contentTemplate; context: context\"></ng-container>\n        </ng-container>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { item: [{
            type: core.Input
        }], templates: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }] }); })();
        return GalleriaItemSlot;
    }());
    GalleriaItemSlot.propDecorators = {
        templates: [{ type: core.Input }],
        index: [{ type: core.Input }],
        item: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };
    var GalleriaItem = /** @class */ (function () {
        function GalleriaItem() {
            this.circular = false;
            this.showItemNavigators = false;
            this.showIndicators = true;
            this.slideShowActive = true;
            this.changeItemOnIndicatorHover = true;
            this.autoPlay = false;
            this.startSlideShow = new core.EventEmitter();
            this.stopSlideShow = new core.EventEmitter();
            this.onActiveIndexChange = new core.EventEmitter();
            this._activeIndex = 0;
        }
        Object.defineProperty(GalleriaItem.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (activeIndex) {
                this._activeIndex = activeIndex;
                this.activeItem = this.value[this._activeIndex];
            },
            enumerable: false,
            configurable: true
        });
        ;
        GalleriaItem.prototype.ngOnInit = function () {
            if (this.autoPlay) {
                this.startSlideShow.emit();
            }
        };
        GalleriaItem.prototype.next = function () {
            var nextItemIndex = this.activeIndex + 1;
            var activeIndex = this.circular && this.value.length - 1 === this.activeIndex
                ? 0
                : nextItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
        };
        GalleriaItem.prototype.prev = function () {
            var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
            var activeIndex = this.circular && this.activeIndex === 0
                ? this.value.length - 1
                : prevItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
        };
        GalleriaItem.prototype.stopTheSlideShow = function () {
            if (this.slideShowActive && this.stopSlideShow) {
                this.stopSlideShow.emit();
            }
        };
        GalleriaItem.prototype.navForward = function (e) {
            this.stopTheSlideShow();
            this.next();
            if (e && e.cancelable) {
                e.preventDefault();
            }
        };
        GalleriaItem.prototype.navBackward = function (e) {
            this.stopTheSlideShow();
            this.prev();
            if (e && e.cancelable) {
                e.preventDefault();
            }
        };
        GalleriaItem.prototype.onIndicatorClick = function (index) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        };
        GalleriaItem.prototype.onIndicatorMouseEnter = function (index) {
            if (this.changeItemOnIndicatorHover) {
                this.stopTheSlideShow();
                this.onActiveIndexChange.emit(index);
            }
        };
        GalleriaItem.prototype.onIndicatorKeyDown = function (index) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        };
        GalleriaItem.prototype.isNavForwardDisabled = function () {
            return !this.circular && this.activeIndex === (this.value.length - 1);
        };
        GalleriaItem.prototype.isNavBackwardDisabled = function () {
            return !this.circular && this.activeIndex === 0;
        };
        GalleriaItem.prototype.isIndicatorItemActive = function (index) {
            return this.activeIndex === index;
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaItem, [{
        type: core.Component,
        args: [{
                selector: 'p-galleriaItem',
                template: "\n        <div class=\"p-galleria-item-wrapper\">\n            <div class=\"p-galleria-item-container\">\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-prev-icon pi pi-chevron-left\"></span>\n                </button>\n                <p-galleriaItemSlot type=\"item\" [item]=\"activeItem\" [templates]=\"templates\" class=\"p-galleria-item\"></p-galleriaItemSlot>\n                <button *ngIf=\"showItemNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\"  [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span class=\"p-galleria-item-next-icon pi pi-chevron-right\"></span>\n                </button>\n                <div class=\"p-galleria-caption\" *ngIf=\"captionFacet\">\n                    <p-galleriaItemSlot type=\"caption\" [item]=\"activeItem\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </div>\n            </div>\n            <ul *ngIf=\"showIndicators\" class=\"p-galleria-indicators p-reset\">\n                <li *ngFor=\"let item of value; let index = index;\" tabindex=\"0\"\n                    (click)=\"onIndicatorClick(index)\" (mouseenter)=\"onIndicatorMouseEnter(index)\" (keydown.enter)=\"onIndicatorKeyDown(index)\"\n                    [ngClass]=\"{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}\">\n                    <button type=\"button\" tabIndex=\"-1\" class=\"p-link\" *ngIf=\"!indicatorFacet\">\n                    </button>\n                    <p-galleriaItemSlot type=\"indicator\" [index]=\"index\" [templates]=\"templates\"></p-galleriaItemSlot>\n                </li>\n            </ul>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { circular: [{
            type: core.Input
        }], showItemNavigators: [{
            type: core.Input
        }], showIndicators: [{
            type: core.Input
        }], slideShowActive: [{
            type: core.Input
        }], changeItemOnIndicatorHover: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], startSlideShow: [{
            type: core.Output
        }], stopSlideShow: [{
            type: core.Output
        }], onActiveIndexChange: [{
            type: core.Output
        }], activeIndex: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], templates: [{
            type: core.Input
        }], indicatorFacet: [{
            type: core.Input
        }], captionFacet: [{
            type: core.Input
        }] }); })();
        return GalleriaItem;
    }());
    GalleriaItem.propDecorators = {
        circular: [{ type: core.Input }],
        value: [{ type: core.Input }],
        showItemNavigators: [{ type: core.Input }],
        showIndicators: [{ type: core.Input }],
        slideShowActive: [{ type: core.Input }],
        changeItemOnIndicatorHover: [{ type: core.Input }],
        autoPlay: [{ type: core.Input }],
        templates: [{ type: core.Input }],
        indicatorFacet: [{ type: core.Input }],
        captionFacet: [{ type: core.Input }],
        startSlideShow: [{ type: core.Output }],
        stopSlideShow: [{ type: core.Output }],
        onActiveIndexChange: [{ type: core.Output }],
        activeIndex: [{ type: core.Input }]
    };
    var GalleriaThumbnails = /** @class */ (function () {
        function GalleriaThumbnails() {
            this.isVertical = false;
            this.slideShowActive = false;
            this.circular = false;
            this.contentHeight = "300px";
            this.showThumbnailNavigators = true;
            this.onActiveIndexChange = new core.EventEmitter();
            this.stopSlideShow = new core.EventEmitter();
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
        Object.defineProperty(GalleriaThumbnails.prototype, "numVisible", {
            get: function () {
                return this._numVisible;
            },
            set: function (numVisible) {
                this._numVisible = numVisible;
                this._oldNumVisible = this.d_numVisible;
                this.d_numVisible = numVisible;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(GalleriaThumbnails.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (activeIndex) {
                this._oldactiveIndex = this._activeIndex;
                this._activeIndex = activeIndex;
            },
            enumerable: false,
            configurable: true
        });
        ;
        GalleriaThumbnails.prototype.ngOnInit = function () {
            this.createStyle();
            this.calculatePosition();
            if (this.responsiveOptions) {
                this.bindDocumentListeners();
            }
        };
        GalleriaThumbnails.prototype.ngAfterContentChecked = function () {
            var totalShiftedItems = this.totalShiftedItems;
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
                    this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, " + totalShiftedItems * (100 / this.d_numVisible) + "%, 0)" : "translate3d(" + totalShiftedItems * (100 / this.d_numVisible) + "%, 0, 0)";
                }
                if (this._oldactiveIndex !== this._activeIndex) {
                    dom.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                    this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
                }
                this._oldactiveIndex = this._activeIndex;
                this._oldNumVisible = this.d_numVisible;
            }
        };
        GalleriaThumbnails.prototype.createStyle = function () {
            if (!this.thumbnailsStyle) {
                this.thumbnailsStyle = document.createElement('style');
                this.thumbnailsStyle.type = 'text/css';
                document.body.appendChild(this.thumbnailsStyle);
            }
            var innerHTML = "\n            #" + this.containerId + " .p-galleria-thumbnail-item {\n                flex: 1 0 " + (100 / this.d_numVisible) + "%\n            }\n        ";
            if (this.responsiveOptions) {
                this.sortedResponsiveOptions = __spread(this.responsiveOptions);
                this.sortedResponsiveOptions.sort(function (data1, data2) {
                    var value1 = data1.breakpoint;
                    var value2 = data2.breakpoint;
                    var result = null;
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
                for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    var res = this.sortedResponsiveOptions[i];
                    innerHTML += "\n                    @media screen and (max-width: " + res.breakpoint + ") {\n                        #" + this.containerId + " .p-galleria-thumbnail-item {\n                            flex: 1 0 " + (100 / res.numVisible) + "%\n                        }\n                    }\n                ";
                }
            }
            this.thumbnailsStyle.innerHTML = innerHTML;
        };
        GalleriaThumbnails.prototype.calculatePosition = function () {
            if (this.itemsContainer && this.sortedResponsiveOptions) {
                var windowWidth = window.innerWidth;
                var matchedResponsiveData = {
                    numVisible: this._numVisible
                };
                for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
                    var res = this.sortedResponsiveOptions[i];
                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveData = res;
                    }
                }
                if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                    this.d_numVisible = matchedResponsiveData.numVisible;
                }
            }
        };
        GalleriaThumbnails.prototype.getTabIndex = function (index) {
            return this.isItemActive(index) ? 0 : null;
        };
        GalleriaThumbnails.prototype.navForward = function (e) {
            this.stopTheSlideShow();
            var nextItemIndex = this._activeIndex + 1;
            if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
                this.step(-1);
            }
            var activeIndex = this.circular && (this.value.length - 1) === this._activeIndex ? 0 : nextItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
            if (e.cancelable) {
                e.preventDefault();
            }
        };
        GalleriaThumbnails.prototype.navBackward = function (e) {
            this.stopTheSlideShow();
            var prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
            var diff = prevItemIndex + this.totalShiftedItems;
            if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
                this.step(1);
            }
            var activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
            this.onActiveIndexChange.emit(activeIndex);
            if (e.cancelable) {
                e.preventDefault();
            }
        };
        GalleriaThumbnails.prototype.onItemClick = function (index) {
            this.stopTheSlideShow();
            var selectedItemIndex = index;
            if (selectedItemIndex !== this._activeIndex) {
                var diff = selectedItemIndex + this.totalShiftedItems;
                var dir = 0;
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
        };
        GalleriaThumbnails.prototype.step = function (dir) {
            var totalShiftedItems = this.totalShiftedItems + dir;
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
                dom.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? "translate3d(0, " + totalShiftedItems * (100 / this.d_numVisible) + "%, 0)" : "translate3d(" + totalShiftedItems * (100 / this.d_numVisible) + "%, 0, 0)";
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }
            this.totalShiftedItems = totalShiftedItems;
        };
        GalleriaThumbnails.prototype.stopTheSlideShow = function () {
            if (this.slideShowActive && this.stopSlideShow) {
                this.stopSlideShow.emit();
            }
        };
        GalleriaThumbnails.prototype.changePageOnTouch = function (e, diff) {
            if (diff < 0) { // left
                this.navForward(e);
            }
            else { // right
                this.navBackward(e);
            }
        };
        GalleriaThumbnails.prototype.getTotalPageNumber = function () {
            return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
        };
        GalleriaThumbnails.prototype.getMedianItemIndex = function () {
            var index = Math.floor(this.d_numVisible / 2);
            return (this.d_numVisible % 2) ? index : index - 1;
        };
        GalleriaThumbnails.prototype.onTransitionEnd = function () {
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
                dom.DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = '';
            }
        };
        GalleriaThumbnails.prototype.onTouchEnd = function (e) {
            var touchobj = e.changedTouches[0];
            if (this.isVertical) {
                this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
            }
            else {
                this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
            }
        };
        GalleriaThumbnails.prototype.onTouchMove = function (e) {
            if (e.cancelable) {
                e.preventDefault();
            }
        };
        GalleriaThumbnails.prototype.onTouchStart = function (e) {
            var touchobj = e.changedTouches[0];
            this.startPos = {
                x: touchobj.pageX,
                y: touchobj.pageY
            };
        };
        GalleriaThumbnails.prototype.isNavBackwardDisabled = function () {
            return (!this.circular && this._activeIndex === 0) || (this.value.length <= this.d_numVisible);
        };
        GalleriaThumbnails.prototype.isNavForwardDisabled = function () {
            return (!this.circular && this._activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
        };
        GalleriaThumbnails.prototype.firstItemAciveIndex = function () {
            return this.totalShiftedItems * -1;
        };
        GalleriaThumbnails.prototype.lastItemActiveIndex = function () {
            return this.firstItemAciveIndex() + this.d_numVisible - 1;
        };
        GalleriaThumbnails.prototype.isItemActive = function (index) {
            return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
        };
        GalleriaThumbnails.prototype.bindDocumentListeners = function () {
            var _this = this;
            if (!this.documentResizeListener) {
                this.documentResizeListener = function () {
                    _this.calculatePosition();
                };
                window.addEventListener('resize', this.documentResizeListener);
            }
        };
        GalleriaThumbnails.prototype.unbindDocumentListeners = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        GalleriaThumbnails.prototype.ngOnDestroy = function () {
            if (this.responsiveOptions) {
                this.unbindDocumentListeners();
            }
            if (this.thumbnailsStyle) {
                this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
            }
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaThumbnails, [{
        type: core.Component,
        args: [{
                selector: 'p-galleriaThumbnails',
                template: "\n        <div class=\"p-galleria-thumbnail-wrapper\">\n            <div class=\"p-galleria-thumbnail-container\">\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}\" (click)=\"navBackward($event)\" [disabled]=\"isNavBackwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}\"></span>\n                </button>\n                <div class=\"p-galleria-thumbnail-items-container\" [ngStyle]=\"{'height': isVertical ? contentHeight : ''}\">\n                    <div #itemsContainer class=\"p-galleria-thumbnail-items\" (transitionend)=\"onTransitionEnd()\"\n                        (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\">\n                        <div *ngFor=\"let item of value; let index = index;\" [ngClass]=\"{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),\n                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }\">\n                            <div class=\"p-galleria-thumbnail-item-content\" [attr.tabindex]=\"getTabIndex(index)\" (click)=\"onItemClick(index)\" (keydown.enter)=\"onItemClick(index)\">\n                                <p-galleriaItemSlot type=\"thumbnail\" [item]=\"item\" [templates]=\"templates\"></p-galleriaItemSlot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <button *ngIf=\"showThumbnailNavigators\" type=\"button\" [ngClass]=\"{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}\" (click)=\"navForward($event)\" [disabled]=\"isNavForwardDisabled()\" pRipple>\n                    <span [ngClass]=\"{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}\"></span>\n                </button>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { isVertical: [{
            type: core.Input
        }], slideShowActive: [{
            type: core.Input
        }], circular: [{
            type: core.Input
        }], contentHeight: [{
            type: core.Input
        }], showThumbnailNavigators: [{
            type: core.Input
        }], onActiveIndexChange: [{
            type: core.Output
        }], stopSlideShow: [{
            type: core.Output
        }], numVisible: [{
            type: core.Input
        }], activeIndex: [{
            type: core.Input
        }], containerId: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], responsiveOptions: [{
            type: core.Input
        }], templates: [{
            type: core.Input
        }], itemsContainer: [{
            type: core.ViewChild,
            args: ['itemsContainer']
        }] }); })();
        return GalleriaThumbnails;
    }());
    GalleriaThumbnails.propDecorators = {
        containerId: [{ type: core.Input }],
        value: [{ type: core.Input }],
        isVertical: [{ type: core.Input }],
        slideShowActive: [{ type: core.Input }],
        circular: [{ type: core.Input }],
        responsiveOptions: [{ type: core.Input }],
        contentHeight: [{ type: core.Input }],
        showThumbnailNavigators: [{ type: core.Input }],
        templates: [{ type: core.Input }],
        onActiveIndexChange: [{ type: core.Output }],
        stopSlideShow: [{ type: core.Output }],
        itemsContainer: [{ type: core.ViewChild, args: ['itemsContainer',] }],
        numVisible: [{ type: core.Input }],
        activeIndex: [{ type: core.Input }]
    };
    var GalleriaModule = /** @class */ (function () {
        function GalleriaModule() {
        }
GalleriaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GalleriaModule });
GalleriaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GalleriaModule_Factory(t) { return new (t || GalleriaModule)(); }, imports: [[common.CommonModule, api.SharedModule, ripple.RippleModule], ɵngcc1.CommonModule, ɵngcc3.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GalleriaModule, { declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails], imports: [ɵngcc1.CommonModule, ɵngcc3.SharedModule, ɵngcc2.RippleModule], exports: [ɵngcc1.CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, ɵngcc3.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GalleriaModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, ripple.RippleModule],
                exports: [common.CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, api.SharedModule],
                declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
            }]
    }], function () { return []; }, null); })();
        return GalleriaModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Galleria = Galleria;
    exports.GalleriaContent = GalleriaContent;
    exports.GalleriaItem = GalleriaItem;
    exports.GalleriaItemSlot = GalleriaItemSlot;
    exports.GalleriaModule = GalleriaModule;
    exports.GalleriaThumbnails = GalleriaThumbnails;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-galleria.umd.js.map