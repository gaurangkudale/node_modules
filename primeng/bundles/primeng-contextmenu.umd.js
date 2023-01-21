(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('@angular/router'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/ripple'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('primeng/contextmenu', ['@angular/core','@angular/common','primeng/ripple','@angular/router','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/ripple', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.ng.router,(global.primeng = global.primeng || {}, global.primeng.contextmenu = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.ripple, global.ng.router));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, dom, ripple, router) { 
var _c0 = function (a0) { return { "p-hidden": a0 }; };
function ContextMenuSub_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 4);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, child_r1.visible === false));
} }
function ContextMenuSub_ng_template_1_li_1_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function ContextMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function ContextMenuSub_ng_template_1_li_1_a_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function ContextMenuSub_ng_template_1_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} }
var _c1 = function (a1) { return { "p-menuitem-link": true, "p-disabled": a1 }; };
function ContextMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 10);
    ɵngcc0.ɵɵlistener("click", function ContextMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.itemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_1_li_1_a_2_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_1_li_1_a_2_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_1_li_1_a_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, ContextMenuSub_ng_template_1_li_1_a_2_span_5_Template, 1, 0, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r11 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(1);
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c1, child_r1.disabled))("ngStyle", child_r1.style);
    ɵngcc0.ɵɵattribute("href", child_r1.url ? child_r1.url : null, ɵngcc0.ɵɵsanitizeUrl)("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0")("aria-haspopup", _r5.items != null)("aria-expanded", _r5 === ctx_r6.activeItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r11);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function ContextMenuSub_ng_template_1_li_1_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", child_r1.icon);
} }
function ContextMenuSub_ng_template_1_li_1_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(child_r1.label);
} }
function ContextMenuSub_ng_template_1_li_1_a_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var child_r1 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", child_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function ContextMenuSub_ng_template_1_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 18);
} }
var _c2 = function () { return { exact: false }; };
function ContextMenuSub_ng_template_1_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 19);
    ɵngcc0.ɵɵlistener("click", function ContextMenuSub_ng_template_1_li_1_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.itemClick($event, child_r1); });
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_1_li_1_a_3_span_1_Template, 1, 1, "span", 11);
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_1_li_1_a_3_span_2_Template, 2, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_1_li_1_a_3_ng_template_3_Template, 1, 1, "ng-template", null, 20, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(5, ContextMenuSub_ng_template_1_li_1_a_3_span_5_Template, 1, 0, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵngcc0.ɵɵreference(4);
    var child_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(child_r1.styleClass);
    ɵngcc0.ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(22, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(23, _c1, child_r1.disabled))("ngStyle", child_r1.style)("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵngcc0.ɵɵattribute("target", child_r1.target)("title", child_r1.title)("id", child_r1.id)("tabindex", child_r1.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r23);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function ContextMenuSub_ng_template_1_li_1_p_contextMenuSub_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-contextMenuSub", 21);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(1);
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("parentActive", _r5 == ctx_r8.activeItem)("item", child_r1);
} }
var _c3 = function (a1, a2) { return { "p-menuitem": true, "p-menuitem-active": a1, "p-hidden": a2 }; };
function ContextMenuSub_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 5, 6);
    ɵngcc0.ɵɵlistener("mouseenter", function ContextMenuSub_ng_template_1_li_1_Template_li_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); var _r5 = ɵngcc0.ɵɵreference(1); var child_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.onItemMouseEnter($event, _r5, child_r1); });
    ɵngcc0.ɵɵtemplate(2, ContextMenuSub_ng_template_1_li_1_a_2_Template, 6, 17, "a", 7);
    ɵngcc0.ɵɵtemplate(3, ContextMenuSub_ng_template_1_li_1_a_3_Template, 6, 25, "a", 8);
    ɵngcc0.ɵɵtemplate(4, ContextMenuSub_ng_template_1_li_1_p_contextMenuSub_4_Template, 1, 2, "p-contextMenuSub", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r5 = ɵngcc0.ɵɵreference(1);
    var child_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c3, _r5 == ctx_r3.activeItem, child_r1.visible === false));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", child_r1.items);
} }
function ContextMenuSub_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ContextMenuSub_ng_template_1_li_0_Template, 1, 3, "li", 2);
    ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_1_li_1_Template, 5, 7, "li", 3);
} if (rf & 2) {
    var child_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", child_r1.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !child_r1.separator);
} }
var _c4 = function (a0) { return { "p-submenu-list": a0 }; };
var _c5 = ["container"];
'use strict';

    var ContextMenuSub = /** @class */ (function () {
        function ContextMenuSub(contextMenu) {
            this.contextMenu = contextMenu;
        }
        Object.defineProperty(ContextMenuSub.prototype, "parentActive", {
            get: function () {
                return this._parentActive;
            },
            set: function (value) {
                this._parentActive = value;
                if (!value) {
                    this.activeItem = null;
                }
            },
            enumerable: false,
            configurable: true
        });
        ContextMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            if (menuitem.disabled) {
                return;
            }
            this.activeItem = item;
            var nextElement = item.children[0].nextElementSibling;
            if (nextElement) {
                var sublist = nextElement.children[0];
                sublist.style.zIndex = ++dom.DomHandler.zindex;
                this.position(sublist, item);
            }
        };
        ContextMenuSub.prototype.itemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
                event.preventDefault();
            }
            if (item.items)
                event.preventDefault();
            else
                this.contextMenu.hide();
        };
        ContextMenuSub.prototype.listClick = function (event) {
            this.activeItem = null;
        };
        ContextMenuSub.prototype.position = function (sublist, item) {
            this.containerOffset = dom.DomHandler.getOffset(item.parentElement);
            var viewport = dom.DomHandler.getViewport();
            var sublistWidth = sublist.offsetParent ? sublist.offsetWidth : dom.DomHandler.getHiddenElementOuterWidth(sublist);
            var itemOuterWidth = dom.DomHandler.getOuterWidth(item.children[0]);
            var itemOuterHeight = dom.DomHandler.getOuterHeight(item.children[0]);
            var sublistHeight = sublist.offsetHeight ? sublist.offsetHeight : dom.DomHandler.getHiddenElementOuterHeight(sublist);
            if ((parseInt(this.containerOffset.top) + itemOuterHeight + sublistHeight) > (viewport.height - dom.DomHandler.calculateScrollbarHeight())) {
                sublist.style.removeProperty('top');
                sublist.style.bottom = '0px';
            }
            else {
                sublist.style.removeProperty('bottom');
                sublist.style.top = '0px';
            }
            if ((parseInt(this.containerOffset.left) + itemOuterWidth + sublistWidth) > (viewport.width - dom.DomHandler.calculateScrollbarWidth())) {
                sublist.style.left = -sublistWidth + 'px';
            }
            else {
                sublist.style.left = itemOuterWidth + 'px';
            }
        };
ContextMenuSub.ɵfac = function ContextMenuSub_Factory(t) { return new (t || ContextMenuSub)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return ContextMenu; }))); };
ContextMenuSub.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContextMenuSub, selectors: [["p-contextMenuSub"]], inputs: { parentActive: "parentActive", item: "item", root: "root" }, decls: 2, vars: 4, consts: [[3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["role", "none", 3, "ngClass", "mouseenter", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator", 3, "ngClass"], ["role", "none", 3, "ngClass", "mouseenter"], ["item", ""], ["pRipple", "", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "class", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [3, "parentActive", "item", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "ngStyle", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-submenu-icon pi pi-angle-right", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-submenu-icon", "pi", "pi-angle-right"], ["role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""], [3, "parentActive", "item"]], template: function ContextMenuSub_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, ContextMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c4, !ctx.root));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.root ? ctx.item : ctx.item.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgStyle, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive, ContextMenuSub], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuSub, [{
        type: core.Component,
        args: [{
                selector: 'p-contextMenuSub',
                template: "\n        <ul [ngClass]=\"{'p-submenu-list':!root}\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"p-menu-separator\" [ngClass]=\"{'p-hidden': child.visible === false}\" role=\"separator\">\n                <li *ngIf=\"!child.separator\" #item [ngClass]=\"{'p-menuitem':true,'p-menuitem-active':item==activeItem,'p-hidden': child.visible === false}\"\n                    (mouseenter)=\"onItemMouseEnter($event,item,child)\" role=\"none\">\n                    <a *ngIf=\"!child.routerLink\" [attr.href]=\"child.url ? child.url : null\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\" (click)=\"itemClick($event, child)\"\n                        [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\" pRipple\n                        [attr.aria-haspopup]=\"item.items != null\" [attr.aria-expanded]=\"item === activeItem\">\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlLabel\">{{child.label}}</span>\n                        <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi pi-angle-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" role=\"menuitem\"\n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\" [attr.tabindex]=\"child.disabled ? null : '0'\"\n                        (click)=\"itemClick($event, child)\" [ngClass]=\"{'p-menuitem-link':true,'p-disabled':child.disabled}\"\n                        [ngStyle]=\"child.style\" [class]=\"child.styleClass\" pRipple\n                        [fragment]=\"child.fragment\" [queryParamsHandling]=\"child.queryParamsHandling\" [preserveFragment]=\"child.preserveFragment\" [skipLocationChange]=\"child.skipLocationChange\" [replaceUrl]=\"child.replaceUrl\" [state]=\"child.state\">\n                        <span class=\"p-menuitem-icon\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"p-menuitem-text\" *ngIf=\"child.escape !== false; else htmlRouteLabel\">{{child.label}}</span>\n                        <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"child.label\"></span></ng-template>\n                        <span class=\"p-submenu-icon pi pi-angle-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-contextMenuSub [parentActive]=\"item==activeItem\" [item]=\"child\" *ngIf=\"child.items\"></p-contextMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return ContextMenu; })]
            }] }]; }, { parentActive: [{
            type: core.Input
        }], item: [{
            type: core.Input
        }], root: [{
            type: core.Input
        }] }); })();
        return ContextMenuSub;
    }());
    ContextMenuSub.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return ContextMenu; }),] }] }
    ]; };
    ContextMenuSub.propDecorators = {
        item: [{ type: core.Input }],
        root: [{ type: core.Input }],
        parentActive: [{ type: core.Input }]
    };
    var ContextMenu = /** @class */ (function () {
        function ContextMenu(el, renderer, zone) {
            this.el = el;
            this.renderer = renderer;
            this.zone = zone;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.triggerEvent = 'contextmenu';
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
        }
        ContextMenu.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.global) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.triggerEventListener = this.renderer.listen(documentTarget, this.triggerEvent, function (event) {
                    _this.show(event);
                    event.preventDefault();
                });
            }
            else if (this.target) {
                this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, function (event) {
                    _this.show(event);
                    event.preventDefault();
                    event.stopPropagation();
                });
            }
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
            }
        };
        ContextMenu.prototype.show = function (event) {
            this.position(event);
            this.moveOnTop();
            this.containerViewChild.nativeElement.style.display = 'block';
            this.parentActive = true;
            dom.DomHandler.fadeIn(this.containerViewChild.nativeElement, 250);
            this.bindGlobalListeners();
            if (event) {
                event.preventDefault();
            }
            this.onShow.emit();
        };
        ContextMenu.prototype.hide = function () {
            this.containerViewChild.nativeElement.style.display = 'none';
            this.parentActive = false;
            this.unbindGlobalListeners();
            this.onHide.emit();
        };
        ContextMenu.prototype.moveOnTop = function () {
            if (this.autoZIndex) {
                this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
        };
        ContextMenu.prototype.toggle = function (event) {
            if (this.containerViewChild.nativeElement.offsetParent)
                this.hide();
            else
                this.show(event);
        };
        ContextMenu.prototype.position = function (event) {
            if (event) {
                var left = event.pageX + 1;
                var top = event.pageY + 1;
                var width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : dom.DomHandler.getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
                var height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : dom.DomHandler.getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
                var viewport = dom.DomHandler.getViewport();
                //flip
                if (left + width - document.body.scrollLeft > viewport.width) {
                    left -= width;
                }
                //flip
                if (top + height - document.body.scrollTop > viewport.height) {
                    top -= height;
                }
                //fit
                if (left < document.body.scrollLeft) {
                    left = document.body.scrollLeft;
                }
                //fit
                if (top < document.body.scrollTop) {
                    top = document.body.scrollTop;
                }
                this.containerViewChild.nativeElement.style.left = left + 'px';
                this.containerViewChild.nativeElement.style.top = top + 'px';
            }
        };
        ContextMenu.prototype.bindGlobalListeners = function () {
            var _this = this;
            if (!this.documentClickListener) {
                var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
                this.documentClickListener = this.renderer.listen(documentTarget, 'click', function (event) {
                    if (_this.containerViewChild.nativeElement.offsetParent && _this.isOutsideClicked(event) && event.button !== 2) {
                        _this.hide();
                    }
                });
            }
            this.zone.runOutsideAngular(function () {
                if (!_this.windowResizeListener) {
                    _this.windowResizeListener = _this.onWindowResize.bind(_this);
                    window.addEventListener('resize', _this.windowResizeListener);
                }
            });
        };
        ContextMenu.prototype.unbindGlobalListeners = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
            if (this.windowResizeListener) {
                window.removeEventListener('resize', this.windowResizeListener);
                this.windowResizeListener = null;
            }
        };
        ContextMenu.prototype.onWindowResize = function (event) {
            if (this.containerViewChild.nativeElement.offsetParent) {
                this.hide();
            }
        };
        ContextMenu.prototype.isOutsideClicked = function (event) {
            return !(this.containerViewChild.nativeElement.isSameNode(event.target) || this.containerViewChild.nativeElement.contains(event.target));
        };
        ContextMenu.prototype.ngOnDestroy = function () {
            this.unbindGlobalListeners();
            if (this.triggerEventListener) {
                this.triggerEventListener();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
            }
        };
ContextMenu.ɵfac = function ContextMenu_Factory(t) { return new (t || ContextMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ContextMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ContextMenu, selectors: [["p-contextMenu"]], viewQuery: function ContextMenu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", triggerEvent: "triggerEvent", model: "model", global: "global", target: "target", style: "style", styleClass: "styleClass", appendTo: "appendTo" }, outputs: { onShow: "onShow", onHide: "onHide" }, decls: 3, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["root", "root", 3, "item", "parentActive"]], template: function ContextMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "p-contextMenuSub", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-contextmenu p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("item", ctx.model)("parentActive", ctx.parentActive);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ContextMenuSub], styles: [".p-contextmenu{display:none;position:absolute}.p-contextmenu ul{list-style:none;margin:0;padding:0}.p-contextmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-contextmenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list{display:block!important}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-contextMenu',
                template: "\n        <div #container [ngClass]=\"'p-contextmenu p-component'\"\n            [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-contextMenuSub [item]=\"model\" [parentActive]=\"parentActive\" root=\"root\"></p-contextMenuSub>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-contextmenu{display:none;position:absolute}.p-contextmenu ul{list-style:none;margin:0;padding:0}.p-contextmenu .p-submenu-list{display:none;min-width:100%;position:absolute;z-index:1}.p-contextmenu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon{margin-left:auto}.p-contextmenu .p-menuitem-active>p-contextmenusub>.p-submenu-list{display:block!important}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], triggerEvent: [{
            type: core.Input
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], model: [{
            type: core.Input
        }], global: [{
            type: core.Input
        }], target: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }] }); })();
        return ContextMenu;
    }());
    ContextMenu.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.NgZone }
    ]; };
    ContextMenu.propDecorators = {
        model: [{ type: core.Input }],
        global: [{ type: core.Input }],
        target: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        triggerEvent: [{ type: core.Input }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }]
    };
    var ContextMenuModule = /** @class */ (function () {
        function ContextMenuModule() {
        }
ContextMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ContextMenuModule });
ContextMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ContextMenuModule_Factory(t) { return new (t || ContextMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule, ripple.RippleModule], ɵngcc3.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ContextMenuModule, { declarations: [ContextMenu, ContextMenuSub], imports: [ɵngcc1.CommonModule, ɵngcc3.RouterModule, ɵngcc2.RippleModule], exports: [ContextMenu, ɵngcc3.RouterModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContextMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule, ripple.RippleModule],
                exports: [ContextMenu, router.RouterModule],
                declarations: [ContextMenu, ContextMenuSub]
            }]
    }], function () { return []; }, null); })();
        return ContextMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ContextMenu = ContextMenu;
    exports.ContextMenuModule = ContextMenuModule;
    exports.ContextMenuSub = ContextMenuSub;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-contextmenu.umd.js.map