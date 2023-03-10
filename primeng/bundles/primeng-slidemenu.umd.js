(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/router'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('primeng/slidemenu', ['@angular/core','@angular/common','@angular/router','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.slidemenu = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.ng.router));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, animations, common, dom, router) { 
var _c0 = function (a0) { return { "p-hidden": a0 }; };
function SlideMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, child_r1.visible === false));
} }
function SlideMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function SlideMenuSub_ng_template_1_li_1_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} }
var _c1 = function (a0) { return { "p-disabled": a0 }; };
function SlideMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function SlideMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); ɵngcc0.ɵɵnextContext(); var _r5 = ɵngcc0.ɵɵreference(1); var child_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.itemClick($event, child_r1, _r5); });
    ɵngcc0.ɵɵtemplate(1, SlideMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, SlideMenuSub_ng_template_1_li_1_a_2_span_4_Template, 1, 0, "span", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(9, _c1, child_r1.disabled));
    ɵngcc0.ɵɵattribute("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function SlideMenuSub_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function SlideMenuSub_ng_template_1_li_1_a_3_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} }
var _c2 = function () { return { exact: false }; };
function SlideMenuSub_ng_template_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function SlideMenuSub_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); ɵngcc0.ɵɵnextContext(); var _r5 = ɵngcc0.ɵɵreference(1); var child_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.itemClick($event, child_r1, _r5); });
    ɵngcc0.ɵɵtemplate(1, SlideMenuSub_ng_template_1_li_1_a_3_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵelementStart(2, "span", 12);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, SlideMenuSub_ng_template_1_li_1_a_3_span_4_Template, 1, 0, "span", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(19, _c2))("href", child_r1.url, ɵngcc0.ɵɵsanitizeUrl)("ngClass", ɵngcc0.ɵɵpureFunction1(20, _c1, child_r1.disabled))("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function SlideMenuSub_ng_template_1_li_1_p_slideMenuSub_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-slideMenuSub", 19);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("item", child_r1)("index", ctx_r8.index + 1)("menuWidth", ctx_r8.menuWidth);
} }
var _c3 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function SlideMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 5, 6);
    ɵngcc0.ɵɵtemplate(2, SlideMenuSub_ng_template_1_li_1_a_2_Template, 5, 11, "a", 7);
    ɵngcc0.ɵɵtemplate(3, SlideMenuSub_ng_template_1_li_1_a_3_Template, 5, 22, "a", 8);
    ɵngcc0.ɵɵtemplate(4, SlideMenuSub_ng_template_1_li_1_p_slideMenuSub_4_Template, 1, 3, "p-slideMenuSub", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r5 = ɵngcc0.ɵɵreference(1);
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c3, _r5 == ctx_r3.activeItem, child_r1.visible === false))("ngStyle", child_r1.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function SlideMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SlideMenuSub_ng_template_1_li_0_Template, 1, 3, "li", 2);
    ɵngcc0.ɵɵtemplate(1, SlideMenuSub_ng_template_1_li_1_Template, 5, 10, "li", 3);
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
var _c4 = function (a0, a1, a2) { return { "p-slidemenu-rootlist": a0, "p-submenu-list": a1, "p-active-submenu": a2 }; };
var _c5 = ["container"];
var _c6 = ["backward"];
var _c7 = ["slideMenuContent"];
var _c8 = function (a1) { return { "p-slidemenu p-component": true, "p-slidemenu-overlay": a1 }; };
var _c9 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c10 = function (a1) { return { value: "visible", params: a1 }; };
function SlideMenu_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1, 2);
    ɵngcc0.ɵɵlistener("click", function SlideMenu_div_0_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick($event); })("@overlayAnimation.start", function SlideMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4, 5);
    ɵngcc0.ɵɵelement(5, "p-slideMenuSub", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 7, 8);
    ɵngcc0.ɵɵlistener("click", function SlideMenu_div_0_Template_div_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.goBack(); });
    ɵngcc0.ɵɵelement(8, "span", 9);
    ɵngcc0.ɵɵelementStart(9, "span");
    ɵngcc0.ɵɵtext(10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c8, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(21, _c10, ɵngcc0.ɵɵpureFunction2(18, _c9, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r0.left ? ctx_r0.viewportHeight + "px" : "auto");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("item", ctx_r0.model)("index", 0)("menuWidth", ctx_r0.menuWidth)("effectDuration", ctx_r0.effectDuration)("easing", ctx_r0.easing);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("display", ctx_r0.left ? "block" : "none");
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.backLabel);
} }
'use strict';

    var SlideMenuSub = /** @class */ (function () {
        function SlideMenuSub(slideMenu) {
            this.backLabel = 'Back';
            this.easing = 'ease-out';
            this.slideMenu = slideMenu;
        }
        SlideMenuSub.prototype.itemClick = function (event, item, listitem) {
            var _this = this;
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
            if (item.items && !this.slideMenu.animating) {
                this.slideMenu.left -= this.slideMenu.menuWidth;
                this.activeItem = listitem;
                this.slideMenu.animating = true;
                setTimeout(function () { return _this.slideMenu.animating = false; }, this.effectDuration);
            }
            if (!item.items && this.slideMenu.popup) {
                this.slideMenu.hide();
            }
        };
        SlideMenuSub.prototype.ngOnDestroy = function () {
            this.activeItem = null;
        };
SlideMenuSub.ɵfac = function SlideMenuSub_Factory(t) { return new (t || SlideMenuSub)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return SlideMenu; }))); };
SlideMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SlideMenuSub, selectors: [["p-slideMenuSub"]], inputs: { backLabel: "backLabel", easing: "easing", item: "item", root: "root", menuWidth: "menuWidth", effectDuration: "effectDuration", index: "index" }, decls: 2, vars: 16, consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [3, "ngClass", "ngStyle"], ["listitem", ""], ["class", "p-menuitem-link", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "href", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["class", "p-submenu", 3, "item", "index", "menuWidth", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-text"], ["class", "p-submenu-icon pi pi-fw pi-angle-right", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-submenu-icon", "pi", "pi-fw", "pi-angle-right"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "href", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["class", "p-submenu-icon pi pi-fw pi-caret-right", 4, "ngIf"], [1, "p-submenu-icon", "pi", "pi-fw", "pi-caret-right"], [1, "p-submenu", 3, "item", "index", "menuWidth"]], template: function SlideMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, SlideMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.menuWidth, "px")("left", ctx.root ? ctx.slideMenu.left : ctx.slideMenu.menuWidth, "px")("transition-property", ctx.root ? "left" : "none")("transition-duration", ctx.effectDuration + "ms")("transition-timing-function", ctx.easing);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(12, _c4, ctx.root, !ctx.root, 0 - ctx.slideMenu.left == ctx.index * ctx.menuWidth));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc2.RouterLinkWithHref, ɵngcc2.RouterLinkActive, SlideMenuSub], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SlideMenuSub, [{
        type: core.Component,
        args: [{
                selector: 'p-slideMenuSub',
                template: "\n        <ul [ngClass]=\"{'p-slidemenu-rootlist':root, 'p-submenu-list':!root, 'p-active-submenu': (-slideMenu.left == (index * menuWidth))}\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\"\n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration + 'ms'\" [style.transitionTimingFunction]=\"easing\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listitem [ngClass]=\"{'p-menuitem':true,'p-menuitem-active':listitem==activeItem,'p-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url\" class=\"p-menuitem-link\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'p-disabled':child.disabled}\" [attr.tabindex]=\"child.disabled ? null : '0'\"\n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\">{{child.label}}</span>\n                        <span class=\"p-submenu-icon pi pi-fw pi-angle-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\"\n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [href]=\"child.url\" class=\"p-menuitem-link\"\n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\"\n                        [ngClass]=\"{'p-disabled':child.disabled}\"\n                        (click)=\"itemClick($event, child, listitem)\"\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\">{{child.label}}</span>\n                        <span class=\"p-submenu-icon pi pi-fw pi-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-slideMenuSub class=\"p-submenu\" [item]=\"child\" [index]=\"index + 1\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return SlideMenu; })]
            }] }]; }, { backLabel: [{
            type: core.Input
        }], easing: [{
            type: core.Input
        }], item: [{
            type: core.Input
        }], root: [{
            type: core.Input
        }], menuWidth: [{
            type: core.Input
        }], effectDuration: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }] }); })();
        return SlideMenuSub;
    }());
    SlideMenuSub.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return SlideMenu; }),] }] }
    ]; };
    SlideMenuSub.propDecorators = {
        item: [{ type: core.Input }],
        root: [{ type: core.Input }],
        backLabel: [{ type: core.Input }],
        menuWidth: [{ type: core.Input }],
        effectDuration: [{ type: core.Input }],
        easing: [{ type: core.Input }],
        index: [{ type: core.Input }]
    };
    var SlideMenu = /** @class */ (function () {
        function SlideMenu(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.menuWidth = 190;
            this.viewportHeight = 180;
            this.effectDuration = 250;
            this.easing = 'ease-out';
            this.backLabel = 'Back';
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.left = 0;
            this.animating = false;
        }
        SlideMenu.prototype.ngAfterViewChecked = function () {
            if (!this.viewportUpdated && !this.popup && this.containerViewChild) {
                this.updateViewPort();
                this.viewportUpdated = true;
            }
        };
        Object.defineProperty(SlideMenu.prototype, "container", {
            set: function (element) {
                this.containerViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlideMenu.prototype, "backward", {
            set: function (element) {
                this.backwardViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SlideMenu.prototype, "slideMenuContent", {
            set: function (element) {
                this.slideMenuContentViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        SlideMenu.prototype.updateViewPort = function () {
            this.slideMenuContentViewChild.nativeElement.style.height = this.viewportHeight - dom.DomHandler.getHiddenElementOuterHeight(this.backwardViewChild.nativeElement) + 'px';
        };
        SlideMenu.prototype.toggle = function (event) {
            if (this.visible)
                this.hide();
            else
                this.show(event);
            this.preventDocumentDefault = true;
        };
        SlideMenu.prototype.show = function (event) {
            this.target = event.currentTarget;
            this.visible = true;
            this.preventDocumentDefault = true;
            this.cd.markForCheck();
        };
        SlideMenu.prototype.onOverlayAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    if (this.popup) {
                        this.updateViewPort();
                        this.moveOnTop();
                        this.onShow.emit({});
                        this.appendOverlay();
                        dom.DomHandler.absolutePosition(this.containerViewChild.nativeElement, this.target);
                        this.bindDocumentClickListener();
                        this.bindDocumentResizeListener();
                        this.bindScrollListener();
                    }
                    break;
                case 'void':
                    this.onOverlayHide();
                    this.onHide.emit({});
                    break;
            }
        };
        SlideMenu.prototype.appendOverlay = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
            }
        };
        SlideMenu.prototype.restoreOverlayAppend = function () {
            if (this.container && this.appendTo) {
                this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
            }
        };
        SlideMenu.prototype.moveOnTop = function () {
            if (this.autoZIndex) {
                this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
        };
        SlideMenu.prototype.hide = function () {
            this.visible = false;
            this.cd.markForCheck();
        };
        SlideMenu.prototype.onWindowResize = function () {
            this.hide();
        };
        SlideMenu.prototype.onClick = function (event) {
            this.preventDocumentDefault = true;
        };
        SlideMenu.prototype.goBack = function () {
            this.left += this.menuWidth;
        };
        SlideMenu.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function () {
                    if (!_this.preventDocumentDefault) {
                        _this.hide();
                        _this.cd.detectChanges();
                    }
                    _this.preventDocumentDefault = false;
                });
            }
        };
        SlideMenu.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        SlideMenu.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        SlideMenu.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        SlideMenu.prototype.bindScrollListener = function () {
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
        SlideMenu.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        SlideMenu.prototype.onOverlayHide = function () {
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
            this.preventDocumentDefault = false;
            this.target = null;
            this.left = 0;
        };
        SlideMenu.prototype.ngOnDestroy = function () {
            if (this.popup) {
                if (this.scrollHandler) {
                    this.scrollHandler.destroy();
                    this.scrollHandler = null;
                }
                this.restoreOverlayAppend();
                this.onOverlayHide();
            }
        };
SlideMenu.ɵfac = function SlideMenu_Factory(t) { return new (t || SlideMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SlideMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SlideMenu, selectors: [["p-slideMenu"]], viewQuery: function SlideMenu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.backward = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slideMenuContent = _t.first);
    } }, inputs: { menuWidth: "menuWidth", viewportHeight: "viewportHeight", effectDuration: "effectDuration", easing: "easing", backLabel: "backLabel", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", popup: "popup", style: "style", styleClass: "styleClass", appendTo: "appendTo" }, outputs: { onShow: "onShow", onHide: "onHide" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-slidemenu-wrapper"], [1, "p-slidemenu-content"], ["slideMenuContent", ""], ["root", "root", 3, "item", "index", "menuWidth", "effectDuration", "easing"], [1, "p-slidemenu-backward", 3, "click"], ["backward", ""], [1, "p-slidemenu-backward-icon", "pi", "pi-fw", "pi-caret-left"]], template: function SlideMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SlideMenu_div_0_Template, 11, 23, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, SlideMenuSub], styles: [".p-slidemenu{width:12.5rem}.p-slidemenu.p-slidemenu-overlay{position:absolute}.p-slidemenu ul{list-style:none;margin:0;padding:0}.p-slidemenu .p-slidemenu-rootlist{position:absolute;top:0}.p-slidemenu .p-submenu-list{display:none;position:absolute;top:0;width:12.5rem}.p-slidemenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;text-decoration:none}.p-slidemenu .p-menuitem-icon,.p-slidemenu .p-menuitem-text{vertical-align:middle}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative}.p-slidemenu-backward{bottom:0;cursor:pointer;display:none;position:absolute;width:100%}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-menuitem-active>.p-submenu>.p-submenu-list{display:block}.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-submenu>.p-submenu-list,.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active){display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}"], encapsulation: 2, data: { animation: [
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SlideMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-slideMenu',
                template: "\n        <div #container [ngClass]=\"{'p-slidemenu p-component':true, 'p-slidemenu-overlay':popup}\"\n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\"\n            [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"popup !== true\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" *ngIf=\"!popup || visible\">\n            <div class=\"p-slidemenu-wrapper\" [style.height]=\"left ? viewportHeight + 'px' : 'auto'\">\n                <div #slideMenuContent class=\"p-slidemenu-content\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [index]=\"0\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div #backward class=\"p-slidemenu-backward\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"p-slidemenu-backward-icon pi pi-fw pi-caret-left\"></span><span>{{backLabel}}</span>\n                </div>\n            </div>\n        </div>\n    ",
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
                styles: [".p-slidemenu{width:12.5rem}.p-slidemenu.p-slidemenu-overlay{position:absolute}.p-slidemenu ul{list-style:none;margin:0;padding:0}.p-slidemenu .p-slidemenu-rootlist{position:absolute;top:0}.p-slidemenu .p-submenu-list{display:none;position:absolute;top:0;width:12.5rem}.p-slidemenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;text-decoration:none}.p-slidemenu .p-menuitem-icon,.p-slidemenu .p-menuitem-text{vertical-align:middle}.p-slidemenu .p-menuitem{position:relative}.p-slidemenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-slidemenu .p-slidemenu-wrapper{position:relative}.p-slidemenu .p-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative}.p-slidemenu-backward{bottom:0;cursor:pointer;display:none;position:absolute;width:100%}.p-slidemenu-backward .p-slidemenu-backward-icon,.p-slidemenu-backward span{vertical-align:middle}.p-slidemenu .p-menuitem-active{position:static}.p-slidemenu .p-menuitem-active>.p-submenu>.p-submenu-list{display:block}.p-slidemenu .p-active-submenu>.p-menuitem-active>.p-submenu>.p-submenu-list,.p-slidemenu ul:not(.p-active-submenu)>.p-menuitem:not(.p-menuitem-active){display:none}.p-slidemenu .p-active-submenu>.p-menuitem-active~.p-menuitem{display:block}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { menuWidth: [{
            type: core.Input
        }], viewportHeight: [{
            type: core.Input
        }], effectDuration: [{
            type: core.Input
        }], easing: [{
            type: core.Input
        }], backLabel: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], container: [{
            type: core.ViewChild,
            args: ['container']
        }], backward: [{
            type: core.ViewChild,
            args: ['backward']
        }], slideMenuContent: [{
            type: core.ViewChild,
            args: ['slideMenuContent']
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
        return SlideMenu;
    }());
    SlideMenu.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    SlideMenu.propDecorators = {
        model: [{ type: core.Input }],
        popup: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        menuWidth: [{ type: core.Input }],
        viewportHeight: [{ type: core.Input }],
        effectDuration: [{ type: core.Input }],
        easing: [{ type: core.Input }],
        backLabel: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        container: [{ type: core.ViewChild, args: ['container',] }],
        backward: [{ type: core.ViewChild, args: ['backward',] }],
        slideMenuContent: [{ type: core.ViewChild, args: ['slideMenuContent',] }]
    };
    var SlideMenuModule = /** @class */ (function () {
        function SlideMenuModule() {
        }
SlideMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SlideMenuModule });
SlideMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SlideMenuModule_Factory(t) { return new (t || SlideMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule], ɵngcc2.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SlideMenuModule, { declarations: [SlideMenu, SlideMenuSub], imports: [ɵngcc1.CommonModule, ɵngcc2.RouterModule], exports: [SlideMenu, ɵngcc2.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SlideMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule],
                exports: [SlideMenu, router.RouterModule],
                declarations: [SlideMenu, SlideMenuSub]
            }]
    }], function () { return []; }, null); })();
        return SlideMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SlideMenu = SlideMenu;
    exports.SlideMenuModule = SlideMenuModule;
    exports.SlideMenuSub = SlideMenuSub;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-slidemenu.umd.js.map