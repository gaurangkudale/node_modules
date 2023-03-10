(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/tooltip'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/tooltip'), require('primeng/ripple'), require('primeng/api'), require('primeng/dom')) :
    typeof define === 'function' && define.amd ? define('primeng/tabview', ['@angular/core','@angular/common','primeng/ripple','primeng/tooltip','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/tooltip', 'primeng/ripple', 'primeng/api', 'primeng/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.tooltip,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.tabview = {}), global.ng.core, global.ng.common, global.primeng.tooltip, global.primeng.ripple, global.primeng.api, global.primeng.dom));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, common, tooltip, ripple, api, dom) { 
function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabPanel_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
} }
function TabPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", !ctx_r0.selected);
    ɵngcc0.ɵɵattribute("id", ctx_r0.id)("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
} }
var _c0 = ["*"];
var _c1 = ["navbar"];
var _c2 = ["inkbar"];
function TabView_ng_template_3_li_0_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    var tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.leftIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    var tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabView_ng_template_3_li_0_ng_container_2_span_1_Template, 1, 1, "span", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_ng_container_2_span_4_Template, 1, 1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.leftIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabView_ng_template_3_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 18);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); var tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.close($event, tab_r3); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c3 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
function TabView_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵelementStart(1, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.open($event, tab_r3); })("keydown.enter", function TabView_ng_template_3_li_0_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.open($event, tab_r3); });
    ɵngcc0.ɵɵtemplate(2, TabView_ng_template_3_li_0_ng_container_2_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_li_0_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_span_4_Template, 1, 0, "span", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(tab_r3.headerStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c3, tab_r3.selected, tab_r3.disabled))("ngStyle", tab_r3.headerStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTooltip", tab_r3.tooltip)("tooltipPosition", tab_r3.tooltipPosition)("positionStyle", tab_r3.tooltipPositionStyle)("tooltipStyleClass", tab_r3.tooltipStyleClass);
    ɵngcc0.ɵɵattribute("id", tab_r3.id + "-label")("aria-selected", tab_r3.selected)("aria-controls", tab_r3.id)("aria-selected", tab_r3.selected)("tabindex", tab_r3.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.closable);
} }
function TabView_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabView_ng_template_3_li_0_Template, 5, 19, "li", 7);
} if (rf & 2) {
    var tab_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.closed);
} }
'use strict';

    var idx = 0;
    var TabPanel = /** @class */ (function () {
        function TabPanel(tabView, viewContainer, cd) {
            this.viewContainer = viewContainer;
            this.cd = cd;
            this.cache = true;
            this.tooltipPosition = 'top';
            this.tooltipPositionStyle = 'absolute';
            this.id = "p-tabpanel-" + idx++;
            this.tabView = tabView;
        }
        TabPanel.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Object.defineProperty(TabPanel.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (val) {
                this._selected = val;
                if (!this.loaded) {
                    this.cd.detectChanges();
                }
                this.loaded = true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabPanel.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                this._disabled = disabled;
                this.tabView.cd.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        ;
        TabPanel.prototype.ngOnDestroy = function () {
            this.view = null;
        };
TabPanel.ɵfac = function TabPanel_Factory(t) { return new (t || TabPanel)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return TabView; })), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPanel, selectors: [["p-tabPanel"]], contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", selected: "selected", disabled: "disabled", header: "header", closable: "closable", headerStyle: "headerStyle", headerStyleClass: "headerStyleClass", leftIcon: "leftIcon", rightIcon: "rightIcon", tooltip: "tooltip", tooltipStyleClass: "tooltipStyleClass" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabPanel_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabPanel, [{
        type: core.Component,
        args: [{
                selector: 'p-tabPanel',
                template: "\n        <div [attr.id]=\"id\" class=\"p-tabview-panel\" [hidden]=\"!selected\"\n            role=\"tabpanel\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id + '-label'\" *ngIf=\"!closed\">\n            <ng-content></ng-content>\n            <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </ng-container>\n        </div>\n    "
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return TabView; })]
            }] }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: core.Input
        }], tooltipPosition: [{
            type: core.Input
        }], tooltipPositionStyle: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], header: [{
            type: core.Input
        }], closable: [{
            type: core.Input
        }], headerStyle: [{
            type: core.Input
        }], headerStyleClass: [{
            type: core.Input
        }], leftIcon: [{
            type: core.Input
        }], rightIcon: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], tooltipStyleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return TabPanel;
    }());
    TabPanel.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TabView; }),] }] },
        { type: core.ViewContainerRef },
        { type: core.ChangeDetectorRef }
    ]; };
    TabPanel.propDecorators = {
        header: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        headerStyle: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        leftIcon: [{ type: core.Input }],
        rightIcon: [{ type: core.Input }],
        cache: [{ type: core.Input }],
        tooltip: [{ type: core.Input }],
        tooltipPosition: [{ type: core.Input }],
        tooltipPositionStyle: [{ type: core.Input }],
        tooltipStyleClass: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        selected: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };
    var TabView = /** @class */ (function () {
        function TabView(el, cd) {
            this.el = el;
            this.cd = cd;
            this.orientation = 'top';
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.activeIndexChange = new core.EventEmitter();
        }
        TabView.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.initTabs();
            this.tabPanels.changes.subscribe(function (_) {
                _this.initTabs();
            });
        };
        TabView.prototype.ngAfterViewChecked = function () {
            if (this.tabChanged) {
                this.updateInkBar();
                this.tabChanged = false;
            }
        };
        TabView.prototype.initTabs = function () {
            this.tabs = this.tabPanels.toArray();
            var selectedTab = this.findSelectedTab();
            if (!selectedTab && this.tabs.length) {
                if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                    this.tabs[this.activeIndex].selected = true;
                else
                    this.tabs[0].selected = true;
                this.tabChanged = true;
            }
            this.cd.markForCheck();
        };
        TabView.prototype.open = function (event, tab) {
            if (tab.disabled) {
                if (event) {
                    event.preventDefault();
                }
                return;
            }
            if (!tab.selected) {
                var selectedTab = this.findSelectedTab();
                if (selectedTab) {
                    selectedTab.selected = false;
                }
                this.tabChanged = true;
                tab.selected = true;
                var selectedTabIndex = this.findTabIndex(tab);
                this.preventActiveIndexPropagation = true;
                this.activeIndexChange.emit(selectedTabIndex);
                this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
            }
            if (event) {
                event.preventDefault();
            }
        };
        TabView.prototype.close = function (event, tab) {
            var _this = this;
            if (this.controlClose) {
                this.onClose.emit({
                    originalEvent: event,
                    index: this.findTabIndex(tab),
                    close: function () {
                        _this.closeTab(tab);
                    }
                });
            }
            else {
                this.closeTab(tab);
                this.onClose.emit({
                    originalEvent: event,
                    index: this.findTabIndex(tab)
                });
            }
            event.stopPropagation();
        };
        TabView.prototype.closeTab = function (tab) {
            if (tab.disabled) {
                return;
            }
            if (tab.selected) {
                this.tabChanged = true;
                tab.selected = false;
                for (var i = 0; i < this.tabs.length; i++) {
                    var tabPanel = this.tabs[i];
                    if (!tabPanel.closed && !tab.disabled) {
                        tabPanel.selected = true;
                        break;
                    }
                }
            }
            tab.closed = true;
        };
        TabView.prototype.findSelectedTab = function () {
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i].selected) {
                    return this.tabs[i];
                }
            }
            return null;
        };
        TabView.prototype.findTabIndex = function (tab) {
            var index = -1;
            for (var i = 0; i < this.tabs.length; i++) {
                if (this.tabs[i] == tab) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        TabView.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Object.defineProperty(TabView.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (val) {
                this._activeIndex = val;
                if (this.preventActiveIndexPropagation) {
                    this.preventActiveIndexPropagation = false;
                    return;
                }
                if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
                    this.findSelectedTab().selected = false;
                    this.tabs[this._activeIndex].selected = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        TabView.prototype.updateInkBar = function () {
            var tabHeader = dom.DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
            this.inkbar.nativeElement.style.width = dom.DomHandler.getWidth(tabHeader) + 'px';
            this.inkbar.nativeElement.style.left = dom.DomHandler.getOffset(tabHeader).left - dom.DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
        };
TabView.ɵfac = function TabView_Factory(t) { return new (t || TabView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabView, selectors: [["p-tabView"]], contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabPanel, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabPanels = _t);
    } }, viewQuery: function TabView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { orientation: "orientation", activeIndex: "activeIndex", style: "style", styleClass: "styleClass", controlClose: "controlClose" }, outputs: { onChange: "onChange", onClose: "onClose", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c0, decls: 8, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-tabview-ink-bar"], ["inkbar", ""], [1, "p-tabview-panels"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown.enter"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tabview-close pi pi-times", 3, "click", 4, "ngIf"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-close", "pi", "pi-times", 3, "click"]], template: function TabView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_Template, 1, 1, "ng-template", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabview p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc3.Tooltip, ɵngcc1.NgTemplateOutlet], styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabView, [{
        type: core.Component,
        args: [{
                selector: 'p-tabView',
                template: "\n        <div [ngClass]=\"'p-tabview p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul #navbar class=\"p-tabview-nav\" role=\"tablist\">\n                <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n                    <li role=\"presentation\" [ngClass]=\"{'p-highlight': tab.selected, 'p-disabled': tab.disabled}\" [ngStyle]=\"tab.headerStyle\" [class]=\"tab.headerStyleClass\" *ngIf=\"!tab.closed\">\n                        <a role=\"tab\" class=\"p-tabview-nav-link\" [attr.id]=\"tab.id + '-label'\" [attr.aria-selected]=\"tab.selected\" [attr.aria-controls]=\"tab.id\" [pTooltip]=\"tab.tooltip\" [tooltipPosition]=\"tab.tooltipPosition\"\n                            [attr.aria-selected]=\"tab.selected\" [positionStyle]=\"tab.tooltipPositionStyle\" [tooltipStyleClass]=\"tab.tooltipStyleClass\"\n                            (click)=\"open($event,tab)\" (keydown.enter)=\"open($event,tab)\" pRipple [attr.tabindex]=\"tab.disabled ? null : '0'\">\n                            <ng-container *ngIf=\"!tab.headerTemplate\">\n                                <span class=\"p-tabview-left-icon\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                                <span class=\"p-tabview-title\">{{tab.header}}</span>\n                                <span class=\"p-tabview-right-icon\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                            </ng-container>\n                            <ng-container *ngTemplateOutlet=\"tab.headerTemplate\"></ng-container>\n                            <span *ngIf=\"tab.closable\" class=\"p-tabview-close pi pi-times\" (click)=\"close($event,tab)\"></span>\n                        </a>\n                    </li>\n                </ng-template>\n                <li #inkbar class=\"p-tabview-ink-bar\"></li>\n            </ul>\n            <div class=\"p-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onClose: [{
            type: core.Output
        }], activeIndexChange: [{
            type: core.Output
        }], activeIndex: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], controlClose: [{
            type: core.Input
        }], navbar: [{
            type: core.ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: core.ViewChild,
            args: ['inkbar']
        }], tabPanels: [{
            type: core.ContentChildren,
            args: [TabPanel]
        }] }); })();
        return TabView;
    }());
    TabView.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    TabView.propDecorators = {
        orientation: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        controlClose: [{ type: core.Input }],
        navbar: [{ type: core.ViewChild, args: ['navbar',] }],
        inkbar: [{ type: core.ViewChild, args: ['inkbar',] }],
        tabPanels: [{ type: core.ContentChildren, args: [TabPanel,] }],
        onChange: [{ type: core.Output }],
        onClose: [{ type: core.Output }],
        activeIndexChange: [{ type: core.Output }],
        activeIndex: [{ type: core.Input }]
    };
    var TabViewModule = /** @class */ (function () {
        function TabViewModule() {
        }
TabViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabViewModule });
TabViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabViewModule_Factory(t) { return new (t || TabViewModule)(); }, imports: [[common.CommonModule, api.SharedModule, tooltip.TooltipModule, ripple.RippleModule], ɵngcc4.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabViewModule, { declarations: [TabView, TabPanel], imports: [ɵngcc1.CommonModule, ɵngcc4.SharedModule, ɵngcc3.TooltipModule, ɵngcc2.RippleModule], exports: [TabView, TabPanel, ɵngcc4.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabViewModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, tooltip.TooltipModule, ripple.RippleModule],
                exports: [TabView, TabPanel, api.SharedModule],
                declarations: [TabView, TabPanel]
            }]
    }], function () { return []; }, null); })();
        return TabViewModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TabPanel = TabPanel;
    exports.TabView = TabView;
    exports.TabViewModule = TabViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-tabview.umd.js.map