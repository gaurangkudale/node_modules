(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('@angular/router'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('@angular/router'), require('primeng/ripple'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('primeng/tieredmenu', ['@angular/core','@angular/common','primeng/ripple','@angular/router','exports', '@angular/core', '@angular/common', 'primeng/dom', '@angular/router', 'primeng/ripple', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.tieredmenu = {}), global.ng.core, global.ng.common, global.primeng.dom, global.ng.router, global.primeng.ripple, global.ng.animations));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, dom, router, ripple, animations) { 
var _c0 = function (a0) { return { "p-hidden": a0 }; };
function TieredMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, child_r1.visible === false));
} }
function TieredMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function TieredMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function TieredMenuSub_ng_template_1_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TieredMenuSub_ng_template_1_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} }
var _c1 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function TieredMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function TieredMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, TieredMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, TieredMenuSub_ng_template_1_li_1_a_2_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, TieredMenuSub_ng_template_1_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, TieredMenuSub_ng_template_1_li_1_a_2_span_5_Template, 1, 0, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r11 = ɵngcc0.ɵɵreference(4);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c1, child_r1.disabled))("ngStyle", child_r1.style);
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0")("aria-haspopup", ctx_r6.item.items != null)("aria-expanded", ctx_r6.item === ctx_r6.activeItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function TieredMenuSub_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function TieredMenuSub_ng_template_1_li_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function TieredMenuSub_ng_template_1_li_1_a_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TieredMenuSub_ng_template_1_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} }
var _c2 = function () { return { exact: false }; };
function TieredMenuSub_ng_template_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function TieredMenuSub_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, TieredMenuSub_ng_template_1_li_1_a_3_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, TieredMenuSub_ng_template_1_li_1_a_3_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, TieredMenuSub_ng_template_1_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, TieredMenuSub_ng_template_1_li_1_a_3_span_5_Template, 1, 0, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵngcc0.ɵɵreference(4);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(23, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c1, child_r1.disabled))("ngStyle", child_r1.style)("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function TieredMenuSub_ng_template_1_li_1_p_tieredMenuSub_4_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-tieredMenuSub", 21);
    ɵngcc0.ɵɵlistener("leafClick", function TieredMenuSub_ng_template_1_li_1_p_tieredMenuSub_4_Template_p_tieredMenuSub_leafClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(3); return ctx_r33.onLeafClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("parentActive", child_r1 === ctx_r8.activeItem)("item", child_r1)("mobileActive", ctx_r8.mobileActive)("autoDisplay", true);
} }
var _c3 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function TieredMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5, 6);
    ɵngcc0.ɵɵlistener("mouseenter", function TieredMenuSub_ng_template_1_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); var child_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onItemMouseEnter($event, child_r1); });
    ɵngcc0.ɵɵtemplate(2, TieredMenuSub_ng_template_1_li_1_a_2_Template, 6, 18, "a", 7);
    ɵngcc0.ɵɵtemplate(3, TieredMenuSub_ng_template_1_li_1_a_3_Template, 6, 26, "a", 8);
    ɵngcc0.ɵɵtemplate(4, TieredMenuSub_ng_template_1_li_1_p_tieredMenuSub_4_Template, 1, 4, "p-tieredMenuSub", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c3, child_r1 === ctx_r3.activeItem, child_r1.visible === false));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function TieredMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TieredMenuSub_ng_template_1_li_0_Template, 1, 3, "li", 2);
    ɵngcc0.ɵɵtemplate(1, TieredMenuSub_ng_template_1_li_1_Template, 5, 7, "li", 3);
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
var _c4 = function (a0) { return { "p-submenu-list": a0 }; };
var _c5 = function (a1) { return { "p-tieredmenu p-component": true, "p-tieredmenu-overlay": a1 }; };
var _c6 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c7 = function (a1) { return { value: "visible", params: a1 }; };
function TieredMenu_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("@overlayAnimation.start", function TieredMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onOverlayAnimationStart($event); })("click", function TieredMenu_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.preventDocumentDefault = true; });
    ɵngcc0.ɵɵelementStart(1, "p-tieredMenuSub", 2);
    ɵngcc0.ɵɵlistener("leafClick", function TieredMenu_div_0_Template_p_tieredMenuSub_leafClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onLeafClick(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c5, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(15, _c7, ɵngcc0.ɵɵpureFunction2(12, _c6, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("item", ctx_r0.model)("parentActive", ctx_r0.parentActive)("baseZIndex", ctx_r0.baseZIndex)("autoZIndex", ctx_r0.autoZIndex);
} }
'use strict';

    var TieredMenuSub = /** @class */ (function () {
        function TieredMenuSub(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.leafClick = new core.EventEmitter();
            this.menuHoverActive = false;
        }
        Object.defineProperty(TieredMenuSub.prototype, "parentActive", {
            get: function () {
                return this._parentActive;
            },
            set: function (value) {
                if (!this.root) {
                    this._parentActive = value;
                    if (!value)
                        this.activeItem = null;
                }
            },
            enumerable: false,
            configurable: true
        });
        TieredMenuSub.prototype.onItemMouseEnter = function (event, item) {
            if (item.disabled || this.mobileActive) {
                event.preventDefault();
                return;
            }
            if (this.root) {
                if (this.activeItem) {
                    this.activeItem = item;
                }
            }
            else {
                this.activeItem = item;
            }
        };
        TieredMenuSub.prototype.onItemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (!item.url && !item.routerLink) {
                event.preventDefault();
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            if (item.items) {
                if (this.activeItem && item === this.activeItem) {
                    this.activeItem = null;
                    this.unbindDocumentClickListener();
                }
                else {
                    this.activeItem = item;
                    if (this.root) {
                        this.bindDocumentClickListener();
                    }
                }
            }
            if (!item.items) {
                this.onLeafClick();
            }
        };
        TieredMenuSub.prototype.onLeafClick = function () {
            this.activeItem = null;
            if (this.root) {
                this.unbindDocumentClickListener();
            }
            this.leafClick.emit();
        };
        TieredMenuSub.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                this.documentClickListener = function (event) {
                    if (_this.el && !_this.el.nativeElement.contains(event.target)) {
                        _this.activeItem = null;
                        _this.cd.markForCheck();
                        _this.unbindDocumentClickListener();
                    }
                };
                document.addEventListener('click', this.documentClickListener);
            }
        };
        TieredMenuSub.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        };
        TieredMenuSub.prototype.ngOnDestroy = function () {
            this.unbindDocumentClickListener();
        };
TieredMenuSub.ɵfac = function TieredMenuSub_Factory(t) { return new (t || TieredMenuSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TieredMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TieredMenuSub, selectors: [["p-tieredMenuSub"]], inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", parentActive: "parentActive", item: "item", root: "root", autoDisplay: "autoDisplay", mobileActive: "mobileActive" }, outputs: { leafClick: "leafClick" }, decls: 2, vars: 4, consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "mouseenter", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [3, "ngClass", "mouseenter"], ["listItem", ""], ["pRipple", "", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-submenu-icon pi pi-angle-right", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", "pi-angle-right"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick"]], template: function TieredMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, TieredMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c4, !ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgStyle, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive, TieredMenuSub], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TieredMenuSub, [{
        type: core.Component,
        args: [{
                selector: 'p-tieredMenuSub',
                template: "\n        <ul [ngClass]=\"{'p-submenu-list': !root}\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'p-menuitem':true, 'p-menuitem-active': child === activeItem, 'p-hidden': child.visible === false}\" (mouseenter)=\"onItemMouseEnter($event,child)\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" [attr.data-automationid]=\"child.automationId\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" (click)=\"onItemClick($event, child)\"\n                         [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\" \n                         [attr.tabindex]=\"child.disabled ? null : '0'\" [attr.aria-haspopup]=\"item.items != null\" [attr.aria-expanded]=\"item === activeItem\" pRipple>\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlLabel\">{{child.label}}</span>\n                        <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi pi-angle-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [attr.data-automationid]=\"child.automationId\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\"\n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\" role=\"menuitem\"\n                        (click)=\"onItemClick($event, child)\" [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\" pRipple>\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlRouteLabel\">{{child.label}}</span>\n                        <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi pi-angle-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-tieredMenuSub [parentActive]=\"child === activeItem\" [item]=\"child\" *ngIf=\"child.items\" [mobileActive]=\"mobileActive\" [autoDisplay]=\"true\" (leafClick)=\"onLeafClick()\"></p-tieredMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], leafClick: [{
            type: core.Output
        }], parentActive: [{
            type: core.Input
        }], item: [{
            type: core.Input
        }], root: [{
            type: core.Input
        }], autoDisplay: [{
            type: core.Input
        }], mobileActive: [{
            type: core.Input
        }] }); })();
        return TieredMenuSub;
    }());
    TieredMenuSub.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    TieredMenuSub.propDecorators = {
        item: [{ type: core.Input }],
        root: [{ type: core.Input }],
        autoDisplay: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        mobileActive: [{ type: core.Input }],
        parentActive: [{ type: core.Input }],
        leafClick: [{ type: core.Output }]
    };
    var TieredMenu = /** @class */ (function () {
        function TieredMenu(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
        }
        TieredMenu.prototype.toggle = function (event) {
            if (this.visible)
                this.hide();
            else
                this.show(event);
            this.preventDocumentDefault = true;
        };
        TieredMenu.prototype.show = function (event) {
            this.target = event.currentTarget;
            this.visible = true;
            this.parentActive = true;
            this.preventDocumentDefault = true;
            this.cd.markForCheck();
        };
        TieredMenu.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    if (this.popup) {
                        this.container = event.element;
                        this.moveOnTop();
                        this.appendOverlay();
                        dom.DomHandler.absolutePosition(this.container, this.target);
                        this.bindDocumentClickListener();
                        this.bindDocumentResizeListener();
                        this.bindScrollListener();
                    }
                    break;
                case 'void':
                    this.onOverlayHide();
                    break;
            }
        };
        TieredMenu.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    dom.DomHandler.appendChild(this.container, this.appendTo);
            }
        };
        TieredMenu.prototype.restoreOverlayAppend = function () {
            if (this.container && this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        };
        TieredMenu.prototype.moveOnTop = function () {
            if (this.autoZIndex) {
                this.container.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
        };
        TieredMenu.prototype.hide = function () {
            this.visible = false;
            this.parentActive = false;
            this.cd.markForCheck();
        };
        TieredMenu.prototype.onWindowResize = function () {
            this.hide();
        };
        TieredMenu.prototype.onLeafClick = function () {
            this.unbindDocumentClickListener();
        };
        TieredMenu.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function () {
                    if (!_this.preventDocumentDefault && _this.popup) {
                        _this.hide();
                    }
                    _this.preventDocumentDefault = false;
                });
            }
        };
        TieredMenu.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        TieredMenu.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        TieredMenu.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        TieredMenu.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.target, function () {
                    if (_this.visible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        TieredMenu.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        TieredMenu.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.preventDocumentDefault = false;
            this.target = null;
        };
        TieredMenu.prototype.ngOnDestroy = function () {
            if (this.popup) {
                if (this.scrollHandler) {
                    this.scrollHandler.destroy();
                    this.scrollHandler = null;
                }
                this.restoreOverlayAppend();
                this.onOverlayHide();
            }
        };
TieredMenu.ɵfac = function TieredMenu_Factory(t) { return new (t || TieredMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TieredMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TieredMenu, selectors: [["p-tieredMenu"]], inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", popup: "popup", style: "style", styleClass: "styleClass", appendTo: "appendTo" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["root", "root", 3, "item", "parentActive", "baseZIndex", "autoZIndex", "leafClick"]], template: function TieredMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TieredMenu_div_0_Template, 2, 17, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, TieredMenuSub], styles: [".p-tieredmenu-overlay{position:absolute}.p-tieredmenu ul{list-style:none;margin:0;padding:0}.p-tieredmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-tieredmenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}"], encapsulation: 2, data: { animation: [
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TieredMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-tieredMenu',
                template: "\n        <div [ngClass]=\"{'p-tieredmenu p-component':true, 'p-tieredmenu-overlay':popup}\" [class]=\"styleClass\" [ngStyle]=\"style\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\"\n            (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (click)=\"preventDocumentDefault=true\" *ngIf=\"!popup || visible\">\n            <p-tieredMenuSub [item]=\"model\" root=\"root\" [parentActive]=\"parentActive\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\" (leafClick)=\"onLeafClick()\"></p-tieredMenuSub>\n        </div>\n    ",
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
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-tieredmenu-overlay{position:absolute}.p-tieredmenu ul{list-style:none;margin:0;padding:0}.p-tieredmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-tieredmenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-tieredmenu .p-menuitem-text{line-height:1}.p-tieredmenu .p-menuitem{position:relative}.p-tieredmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-tieredmenu .p-menuitem-active>p-tieredmenusub>.p-submenu-list{display:block;left:100%;top:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], model: [{
            type: core.Input
        }], popup: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }] }); })();
        return TieredMenu;
    }());
    TieredMenu.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    TieredMenu.propDecorators = {
        model: [{ type: core.Input }],
        popup: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }]
    };
    var TieredMenuModule = /** @class */ (function () {
        function TieredMenuModule() {
        }
TieredMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TieredMenuModule });
TieredMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TieredMenuModule_Factory(t) { return new (t || TieredMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule, ripple.RippleModule], ɵngcc3.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TieredMenuModule, { declarations: [TieredMenu, TieredMenuSub], imports: [ɵngcc1.CommonModule, ɵngcc3.RouterModule, ɵngcc2.RippleModule], exports: [TieredMenu, ɵngcc3.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TieredMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule, ripple.RippleModule],
                exports: [TieredMenu, router.RouterModule],
                declarations: [TieredMenu, TieredMenuSub]
            }]
    }], function () { return []; }, null); })();
        return TieredMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TieredMenu = TieredMenu;
    exports.TieredMenuModule = TieredMenuModule;
    exports.TieredMenuSub = TieredMenuSub;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tieredmenu.umd.js.map