(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('@angular/router'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/ripple'), require('primeng/api'), require('@angular/router'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/tabmenu', ['@angular/core','@angular/common','primeng/ripple','@angular/router','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/ripple', 'primeng/api', '@angular/router', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.ng.router,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.tabmenu = {}), global.ng.core, global.ng.common, global.primeng.ripple, global.primeng.api, global.ng.router, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, common, ripple, api, router, dom) { 
var _c0 = ["navbar"];
var _c1 = ["inkbar"];
function TabMenu_li_3_a_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r3.icon);
} }
function TabMenu_li_3_a_1_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r3.label);
} }
function TabMenu_li_3_a_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r3.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TabMenu_li_3_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_ng_container_1_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_1_ng_container_1_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_a_1_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r11 = ɵngcc0.ɵɵreference(4);
    var item_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", _r11);
} }
function TabMenu_li_3_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function TabMenu_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabMenu_li_3_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var item_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.itemClick($event, item_r3); });
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_ng_container_1_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_1_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = ɵngcc0.ɵɵnextContext();
    var item_r3 = ctx_r20.$implicit;
    var i_r4 = ctx_r20.index;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("href", item_r3.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r3.disabled ? null : "0")("target", item_r3.target)("title", item_r3.title)("id", item_r3.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(8, _c2, item_r3, i_r4));
} }
function TabMenu_li_3_a_2_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r3.icon);
} }
function TabMenu_li_3_a_2_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r3.label);
} }
function TabMenu_li_3_a_2_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r3.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TabMenu_li_3_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_2_ng_container_1_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_ng_container_1_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_a_2_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r25 = ɵngcc0.ɵɵreference(4);
    var item_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", _r25);
} }
function TabMenu_li_3_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c3 = function () { return { exact: false }; };
function TabMenu_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function TabMenu_li_3_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); var item_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.itemClick($event, item_r3); });
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_2_ng_container_1_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = ɵngcc0.ɵɵnextContext();
    var item_r3 = ctx_r34.$implicit;
    var i_r4 = ctx_r34.index;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(17, _c3))("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    ɵngcc0.ɵɵattribute("tabindex", item_r3.disabled ? null : "0")("target", item_r3.target)("title", item_r3.title)("id", item_r3.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(18, _c2, item_r3, i_r4));
} }
var _c4 = function (a1, a2, a3) { return { "p-tabmenuitem": true, "p-disabled": a1, "p-highlight": a2, "p-hidden": a3 }; };
function TabMenu_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_Template, 3, 11, "a", 7);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_Template, 3, 21, "a", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c4, item_r3.disabled, ctx_r1.activeItem == item_r3, item_r3.visible === false));
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r1.activeItem == item_r3)("aria-expanded", ctx_r1.activeItem == item_r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r3.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.routerLink);
} }
'use strict';

    var TabMenu = /** @class */ (function () {
        function TabMenu() {
        }
        TabMenu.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        TabMenu.prototype.ngAfterViewInit = function () {
            this.updateInkBar();
        };
        TabMenu.prototype.ngAfterViewChecked = function () {
            if (this.tabChanged) {
                this.updateInkBar();
                this.tabChanged = false;
            }
        };
        TabMenu.prototype.itemClick = function (event, item) {
            if (item.disabled) {
                event.preventDefault();
                return;
            }
            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }
            this.activeItem = item;
            this.tabChanged = true;
        };
        TabMenu.prototype.updateInkBar = function () {
            var tabHeader = dom.DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
            if (tabHeader) {
                this.inkbar.nativeElement.style.width = dom.DomHandler.getWidth(tabHeader) + 'px';
                this.inkbar.nativeElement.style.left = dom.DomHandler.getOffset(tabHeader).left - dom.DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
            }
        };
TabMenu.ɵfac = function TabMenu_Factory(t) { return new (t || TabMenu)(); };
TabMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabMenu, selectors: [["p-tabMenu"]], contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function TabMenu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { activeItem: "activeItem", model: "model", popup: "popup", style: "style", styleClass: "styleClass" }, decls: 6, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabmenu-nav", "p-reset"], ["navbar", ""], ["role", "tab", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-tabmenu-ink-bar"], ["inkbar", ""], ["role", "tab", 3, "ngClass"], ["class", "p-menuitem-link", "role", "presentation", "pRipple", "", 3, "click", 4, "ngIf"], ["role", "presentation", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""]], template: function TabMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_Template, 3, 9, "li", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabmenu p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive], styles: [".p-tabmenu-nav{-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabmenu-nav,.p-tabmenu-nav a{display:-ms-flexbox;display:flex}.p-tabmenu-nav a{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1}.p-tabmenu-ink-bar{display:none;z-index:1}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabMenu, [{
        type: core.Component,
        args: [{
                selector: 'p-tabMenu',
                template: "\n        <div [ngClass]=\"'p-tabmenu p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul #navbar class=\"p-tabmenu-nav p-reset\" role=\"tablist\">\n                <li *ngFor=\"let item of model; let i = index\" role=\"tab\" [attr.aria-selected]=\"activeItem==item\" [attr.aria-expanded]=\"activeItem==item\"\n                    [ngClass]=\"{'p-tabmenuitem':true,'p-disabled':item.disabled,'p-highlight':activeItem==item,'p-hidden': item.visible === false}\">\n                    <a *ngIf=\"!item.routerLink\" [attr.href]=\"item.url\" class=\"p-menuitem-link\" role=\"presentation\" (click)=\"itemClick($event,item)\" [attr.tabindex]=\"item.disabled ? null : '0'\"\n                        [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\" pRipple>\n                        <ng-container *ngIf=\"!itemTemplate\">\n                            <span class=\"p-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlLabel\">{{item.label}}</span>\n                            <ng-template #htmlLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                        </ng-container>\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                    </a>\n                    <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'p-menuitem-link-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\"\n                        role=\"presentation\" class=\"p-menuitem-link\" (click)=\"itemClick($event,item)\" [attr.tabindex]=\"item.disabled ? null : '0'\"\n                        [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                        [fragment]=\"item.fragment\" [queryParamsHandling]=\"item.queryParamsHandling\" [preserveFragment]=\"item.preserveFragment\" [skipLocationChange]=\"item.skipLocationChange\" [replaceUrl]=\"item.replaceUrl\" [state]=\"item.state\" pRipple>\n                        <ng-container *ngIf=\"!itemTemplate\">\n                            <span class=\"p-menuitem-icon\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                            <span class=\"p-menuitem-text\" *ngIf=\"item.escape !== false; else htmlRouteLabel\">{{item.label}}</span>\n                            <ng-template #htmlRouteLabel><span class=\"p-menuitem-text\" [innerHTML]=\"item.label\"></span></ng-template>\n                        </ng-container>\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                    </a>\n                </li>\n                <li #inkbar class=\"p-tabmenu-ink-bar\"></li>\n            </ul>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-tabmenu-nav{-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabmenu-nav,.p-tabmenu-nav a{display:-ms-flexbox;display:flex}.p-tabmenu-nav a{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1}.p-tabmenu-ink-bar{display:none;z-index:1}"]
            }]
    }], function () { return []; }, { activeItem: [{
            type: core.Input
        }], model: [{
            type: core.Input
        }], popup: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], navbar: [{
            type: core.ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: core.ViewChild,
            args: ['inkbar']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return TabMenu;
    }());
    TabMenu.propDecorators = {
        model: [{ type: core.Input }],
        activeItem: [{ type: core.Input }],
        popup: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        navbar: [{ type: core.ViewChild, args: ['navbar',] }],
        inkbar: [{ type: core.ViewChild, args: ['inkbar',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var TabMenuModule = /** @class */ (function () {
        function TabMenuModule() {
        }
TabMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabMenuModule });
TabMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabMenuModule_Factory(t) { return new (t || TabMenuModule)(); }, imports: [[common.CommonModule, router.RouterModule, api.SharedModule, ripple.RippleModule], ɵngcc3.RouterModule, ɵngcc4.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabMenuModule, { declarations: [TabMenu], imports: [ɵngcc1.CommonModule, ɵngcc3.RouterModule, ɵngcc4.SharedModule, ɵngcc2.RippleModule], exports: [TabMenu, ɵngcc3.RouterModule, ɵngcc4.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, router.RouterModule, api.SharedModule, ripple.RippleModule],
                exports: [TabMenu, router.RouterModule, api.SharedModule],
                declarations: [TabMenu]
            }]
    }], function () { return []; }, null); })();
        return TabMenuModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TabMenu = TabMenu;
    exports.TabMenuModule = TabMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tabmenu.umd.js.map