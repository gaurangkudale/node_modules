(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('@angular/router'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api'), require('@angular/router'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/menubar', ['@angular/core','@angular/common','primeng/ripple','@angular/router','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api', '@angular/router', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.menubar = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api, global.ng.router, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, dom, api, router, ripple) { 
var _c0 = function (a0) { return { "p-hidden": a0 }; };
function MenubarSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, child_r1.visible === false));
} }
function MenubarSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function MenubarSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function MenubarSub_ng_template_1_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
var _c1 = function (a0, a1) { return { "pi-angle-down": a0, "pi-angle-right": a1 }; };
function MenubarSub_ng_template_1_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r13.root, !ctx_r13.root));
} }
var _c2 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function MenubarSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function MenubarSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_a_2_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_2_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MenubarSub_ng_template_1_li_1_a_2_span_5_Template, 1, 4, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r11 = ɵngcc0.ɵɵreference(4);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c2, child_r1.disabled))("ngStyle", child_r1.style);
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0")("aria-haspopup", ctx_r6.item.items != null)("aria-expanded", ctx_r6.item === ctx_r6.activeItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function MenubarSub_ng_template_1_li_1_a_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function MenubarSub_ng_template_1_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} if (rf & 2) {
    var ctx_r25 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c1, ctx_r25.root, !ctx_r25.root));
} }
var _c3 = function () { return { exact: false }; };
function MenubarSub_ng_template_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function MenubarSub_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onItemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_a_3_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_3_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, MenubarSub_ng_template_1_li_1_a_3_span_5_Template, 1, 4, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵngcc0.ɵɵreference(4);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(23, _c3))("ngClass", ɵngcc0.ɵɵpureFunction1(24, _c2, child_r1.disabled))("ngStyle", child_r1.style)("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("data-automationid", child_r1.automationId)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-menubarSub", 21);
    ɵngcc0.ɵɵlistener("leafClick", function MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template_p_menubarSub_leafClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(3); return ctx_r33.onLeafClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("parentActive", child_r1 === ctx_r8.activeItem)("item", child_r1)("mobileActive", ctx_r8.mobileActive)("autoDisplay", true);
} }
var _c4 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function MenubarSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5, 6);
    ɵngcc0.ɵɵlistener("mouseenter", function MenubarSub_ng_template_1_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); var child_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r36 = ɵngcc0.ɵɵnextContext(); return ctx_r36.onItemMouseEnter($event, child_r1); });
    ɵngcc0.ɵɵtemplate(2, MenubarSub_ng_template_1_li_1_a_2_Template, 6, 18, "a", 7);
    ɵngcc0.ɵɵtemplate(3, MenubarSub_ng_template_1_li_1_a_3_Template, 6, 26, "a", 8);
    ɵngcc0.ɵɵtemplate(4, MenubarSub_ng_template_1_li_1_p_menubarSub_4_Template, 1, 4, "p-menubarSub", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c4, child_r1 === ctx_r3.activeItem, child_r1.visible === false));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function MenubarSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MenubarSub_ng_template_1_li_0_Template, 1, 3, "li", 2);
    ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_li_1_Template, 5, 7, "li", 3);
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
var _c5 = function (a0, a1) { return { "p-submenu-list": a0, "p-menubar-root-list": a1 }; };
var _c6 = ["menubutton"];
var _c7 = ["rootmenu"];
function Menubar_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Menubar_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, Menubar_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
} }
function Menubar_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Menubar_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, Menubar_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.endTemplate);
} }
function Menubar_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
var _c8 = function (a1) { return { "p-menubar p-component": true, "p-menubar-mobile-active": a1 }; };
var _c9 = ["*"];
'use strict';

    var MenubarSub = /** @class */ (function () {
        function MenubarSub(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.leafClick = new core.EventEmitter();
            this.menuHoverActive = false;
        }
        Object.defineProperty(MenubarSub.prototype, "parentActive", {
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
        MenubarSub.prototype.onItemMouseEnter = function (event, item) {
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
        MenubarSub.prototype.onItemClick = function (event, item) {
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
        MenubarSub.prototype.onLeafClick = function () {
            this.activeItem = null;
            if (this.root) {
                this.unbindDocumentClickListener();
            }
            this.leafClick.emit();
        };
        MenubarSub.prototype.bindDocumentClickListener = function () {
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
        MenubarSub.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                document.removeEventListener('click', this.documentClickListener);
                this.documentClickListener = null;
            }
        };
        MenubarSub.prototype.ngOnDestroy = function () {
            this.unbindDocumentClickListener();
        };
MenubarSub.ɵfac = function MenubarSub_Factory(t) { return new (t || MenubarSub)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MenubarSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenubarSub, selectors: [["p-menubarSub"]], inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", parentActive: "parentActive", item: "item", root: "root", autoDisplay: "autoDisplay", mobileActive: "mobileActive" }, outputs: { leafClick: "leafClick" }, decls: 2, vars: 5, consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "mouseenter", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [3, "ngClass", "mouseenter"], ["listItem", ""], ["pRipple", "", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-submenu-icon pi", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentActive", "item", "mobileActive", "autoDisplay", "leafClick"]], template: function MenubarSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, MenubarSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c5, !ctx.root, ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgStyle, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive, MenubarSub], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenubarSub, [{
        type: core.Component,
        args: [{
                selector: 'p-menubarSub',
                template: "\n        <ul [ngClass]=\"{'p-submenu-list': !root, 'p-menubar-root-list': root}\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'p-menuitem':true, 'p-menuitem-active': child === activeItem, 'p-hidden': child.visible === false}\" (mouseenter)=\"onItemMouseEnter($event,child)\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" [attr.data-automationid]=\"child.automationId\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" (click)=\"onItemClick($event, child)\"\n                         [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\" \n                         [attr.tabindex]=\"child.disabled ? null : '0'\" [attr.aria-haspopup]=\"item.items != null\" [attr.aria-expanded]=\"item === activeItem\" pRipple>\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlLabel\">{{child.label}}</span>\n                        <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi\" *ngIf=\"child.items\" [ngClass]=\"{'pi-angle-down':root,'pi-angle-right':!root}\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [attr.data-automationid]=\"child.automationId\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\"\n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\" role=\"menuitem\"\n                        (click)=\"onItemClick($event, child)\" [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\" pRipple>\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlRouteLabel\">{{child.label}}</span>\n                        <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi\" *ngIf=\"child.items\" [ngClass]=\"{'pi-angle-down':root,'pi-angle-right':!root}\"></span>\n                    </a>\n                    <p-menubarSub [parentActive]=\"child === activeItem\" [item]=\"child\" *ngIf=\"child.items\" [mobileActive]=\"mobileActive\" [autoDisplay]=\"true\" (leafClick)=\"onLeafClick()\"></p-menubarSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
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
        return MenubarSub;
    }());
    MenubarSub.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    MenubarSub.propDecorators = {
        item: [{ type: core.Input }],
        root: [{ type: core.Input }],
        autoDisplay: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        mobileActive: [{ type: core.Input }],
        parentActive: [{ type: core.Input }],
        leafClick: [{ type: core.Output }]
    };
    var Menubar = /** @class */ (function () {
        function Menubar(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
        }
        Object.defineProperty(Menubar.prototype, "autoDisplay", {
            get: function () {
                return this._autoDisplay;
            },
            set: function (_autoDisplay) {
                console.log("AutoDisplay property is deprecated and functionality is not available.");
            },
            enumerable: false,
            configurable: true
        });
        Menubar.prototype.ngAfterContentInit = function () {
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
        Menubar.prototype.toggle = function (event) {
            this.mobileActive = !this.mobileActive;
            var rootmenu = dom.DomHandler.findSingle(this.el.nativeElement, ".p-menubar-root-list");
            rootmenu.style.zIndex = String(dom.DomHandler.generateZIndex());
            this.bindOutsideClickListener();
            event.preventDefault();
        };
        Menubar.prototype.bindOutsideClickListener = function () {
            var _this = this;
            if (!this.outsideClickListener) {
                this.outsideClickListener = function (event) {
                    if (_this.mobileActive && _this.rootmenu.el.nativeElement !== event.target && !_this.rootmenu.el.nativeElement.contains(event.target)
                        && _this.menubutton.nativeElement !== event.target && !_this.menubutton.nativeElement.contains(event.target)) {
                        _this.mobileActive = false;
                        _this.cd.markForCheck();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        };
        Menubar.prototype.onLeafClick = function () {
            this.mobileActive = false;
            this.unbindOutsideClickListener();
        };
        Menubar.prototype.unbindOutsideClickListener = function () {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        };
        Menubar.prototype.ngOnDestroy = function () {
            this.unbindOutsideClickListener();
        };
Menubar.ɵfac = function Menubar_Factory(t) { return new (t || Menubar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Menubar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Menubar, selectors: [["p-menubar"]], contentQueries: function Menubar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Menubar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menubutton = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", autoDisplay: "autoDisplay", model: "model", style: "style", styleClass: "styleClass" }, ngContentSelectors: _c9, decls: 10, vars: 13, consts: [[3, "ngClass", "ngStyle"], ["class", "p-menubar-start", 4, "ngIf"], ["tabindex", "0", 1, "p-menubar-button", 3, "click"], ["menubutton", ""], [1, "pi", "pi-bars"], ["root", "root", 3, "item", "baseZIndex", "autoZIndex", "mobileActive", "leafClick"], ["rootmenu", ""], ["class", "p-menubar-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-menubar-start"], [4, "ngTemplateOutlet"], [1, "p-menubar-end"]], template: function Menubar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Menubar_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2, 3);
        ɵngcc0.ɵɵlistener("click", function Menubar_Template_a_click_2_listener($event) { return ctx.toggle($event); });
        ɵngcc0.ɵɵelement(4, "i", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "p-menubarSub", 5, 6);
        ɵngcc0.ɵɵlistener("leafClick", function Menubar_Template_p_menubarSub_leafClick_5_listener() { return ctx.onLeafClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, Menubar_div_7_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵtemplate(8, Menubar_ng_template_8_Template, 2, 0, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r4 = ɵngcc0.ɵɵreference(9);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c8, ctx.mobileActive))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.startTemplate);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("item", ctx.model)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("mobileActive", ctx.mobileActive);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", _r4);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, MenubarSub, ɵngcc1.NgTemplateOutlet], styles: [".p-menubar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar ul{list-style:none;margin:0;padding:0}.p-menubar .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:1}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-left:auto}.p-menubar-button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:none;justify-content:center}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Menubar, [{
        type: core.Component,
        args: [{
                selector: 'p-menubar',
                template: "\n        <div [ngClass]=\"{'p-menubar p-component':true, 'p-menubar-mobile-active': mobileActive}\" [class]=\"styleClass\" [ngStyle]=\"style\">\n            <div class=\"p-menubar-start\" *ngIf=\"startTemplate\">\n                <ng-container *ngTemplateOutlet=\"startTemplate\"></ng-container>\n            </div>\n            <a #menubutton tabindex=\"0\" class=\"p-menubar-button\" (click)=\"toggle($event)\">\n                <i class=\"pi pi-bars\"></i>\n            </a>\n            <p-menubarSub #rootmenu [item]=\"model\" root=\"root\" [baseZIndex]=\"baseZIndex\" (leafClick)=\"onLeafClick()\" [autoZIndex]=\"autoZIndex\" [mobileActive]=\"mobileActive\"></p-menubarSub>\n            <div class=\"p-menubar-end\" *ngIf=\"endTemplate; else legacy\">\n                <ng-container *ngTemplateOutlet=\"endTemplate\"></ng-container>\n            </div>\n            <ng-template #legacy>\n                <div class=\"p-menubar-end\">\n                    <ng-content></ng-content>\n                </div>\n            </ng-template>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-menubar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar ul{list-style:none;margin:0;padding:0}.p-menubar .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menubar .p-menuitem-text{line-height:1}.p-menubar .p-menuitem{position:relative}.p-menubar-root-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-menubar-root-list>li ul{display:none;z-index:1}.p-menubar-root-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block}.p-menubar .p-submenu-list{display:none;position:absolute;z-index:1}.p-menubar .p-submenu-list>.p-menuitem-active>p-menubarsub>.p-submenu-list{display:block;left:100%;top:0}.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-menubar .p-menubar-custom,.p-menubar .p-menubar-end{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin-left:auto}.p-menubar-button{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:none;justify-content:center}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], autoDisplay: [{
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
        }], menubutton: [{
            type: core.ViewChild,
            args: ['menubutton']
        }], rootmenu: [{
            type: core.ViewChild,
            args: ['rootmenu']
        }] }); })();
        return Menubar;
    }());
    Menubar.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    Menubar.propDecorators = {
        model: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        autoDisplay: [{ type: core.Input }],
        menubutton: [{ type: core.ViewChild, args: ['menubutton',] }],
        rootmenu: [{ type: core.ViewChild, args: ['rootmenu',] }]
    };
    var MenubarModule = /** @class */ (function () {
        function MenubarModule() {
        }
MenubarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MenubarModule });
MenubarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MenubarModule_Factory(t) { return new (t || MenubarModule)(); }, imports: [[common.CommonModule, router.RouterModule, ripple.RippleModule], ɵngcc3.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MenubarModule, { declarations: [Menubar, MenubarSub], imports: [ɵngcc1.CommonModule, ɵngcc3.RouterModule, ɵngcc2.RippleModule], exports: [Menubar, ɵngcc3.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenubarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule, ripple.RippleModule],
                exports: [Menubar, router.RouterModule],
                declarations: [Menubar, MenubarSub]
            }]
    }], function () { return []; }, null); })();
        return MenubarModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Menubar = Menubar;
    exports.MenubarModule = MenubarModule;
    exports.MenubarSub = MenubarSub;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-menubar.umd.js.map