(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/api'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/accordion', ['@angular/core','@angular/common','primeng/api','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.accordion = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, animations, common, api) { 
function AccordionTab_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
} }
function AccordionTab_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AccordionTab_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "hasHeaderFacet"]);
} }
function AccordionTab_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AccordionTab_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AccordionTab_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate);
} }
var _c0 = ["*", [["p-header"]]];
var _c1 = function (a0) { return { "p-accordion-tab-active": a0 }; };
var _c2 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
var _c3 = function (a0) { return { transitionParams: a0 }; };
var _c4 = function (a1) { return { value: "visible", params: a1 }; };
var _c5 = function (a1) { return { value: "hidden", params: a1 }; };
var _c6 = ["*", "p-header"];
var _c7 = ["*"];
'use strict';

    var idx = 0;
    var AccordionTab = /** @class */ (function () {
        function AccordionTab(accordion, changeDetector) {
            this.changeDetector = changeDetector;
            this.cache = true;
            this.selectedChange = new core.EventEmitter();
            this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
            this.id = "p-accordiontab-" + idx++;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionTab.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (val) {
                this._selected = val;
                if (!this.loaded) {
                    this.changeDetector.detectChanges();
                }
            },
            enumerable: false,
            configurable: true
        });
        AccordionTab.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        AccordionTab.prototype.toggle = function (event) {
            if (this.disabled) {
                return false;
            }
            var index = this.findTabIndex();
            if (this.selected) {
                this.selected = false;
                this.accordion.onClose.emit({ originalEvent: event, index: index });
            }
            else {
                if (!this.accordion.multiple) {
                    for (var i = 0; i < this.accordion.tabs.length; i++) {
                        this.accordion.tabs[i].selected = false;
                        this.accordion.tabs[i].selectedChange.emit(false);
                        this.accordion.tabs[i].changeDetector.markForCheck();
                    }
                }
                this.selected = true;
                this.loaded = true;
                this.accordion.onOpen.emit({ originalEvent: event, index: index });
            }
            this.selectedChange.emit(this.selected);
            this.accordion.updateActiveIndex();
            this.changeDetector.markForCheck();
            event.preventDefault();
        };
        AccordionTab.prototype.findTabIndex = function () {
            var index = -1;
            for (var i = 0; i < this.accordion.tabs.length; i++) {
                if (this.accordion.tabs[i] == this) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        Object.defineProperty(AccordionTab.prototype, "hasHeaderFacet", {
            get: function () {
                return this.headerFacet && this.headerFacet.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        AccordionTab.prototype.onKeydown = function (event) {
            if (event.which === 32 || event.which === 13) {
                this.toggle(event);
                event.preventDefault();
            }
        };
        AccordionTab.prototype.ngOnDestroy = function () {
            this.accordion.tabs.splice(this.findTabIndex(), 1);
        };
AccordionTab.ɵfac = function AccordionTab_Factory(t) { return new (t || AccordionTab)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return Accordion; })), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AccordionTab.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionTab, selectors: [["p-accordionTab"]], contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", transitionOptions: "transitionOptions", selected: "selected", header: "header", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, ngContentSelectors: _c6, decls: 11, vars: 28, consts: [[1, "p-accordion-tab", 3, "ngClass"], [1, "p-accordion-header", 3, "ngClass"], ["role", "tab", 1, "p-accordion-header-link", 3, "click", "keydown"], [1, "p-accordion-toggle-icon", 3, "ngClass"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content"], [1, "p-accordion-header-text"]], template: function AccordionTab_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵlistener("click", function AccordionTab_Template_a_click_2_listener($event) { return ctx.toggle($event); })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵtemplate(4, AccordionTab_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(5, AccordionTab_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(6, AccordionTab_6_Template, 1, 0, undefined, 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "div", 8);
        ɵngcc0.ɵɵprojection(9);
        ɵngcc0.ɵɵtemplate(10, AccordionTab_ng_container_10_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c1, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(17, _c2, ctx.selected, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : 0)("id", ctx.id)("aria-controls", ctx.id + "-content")("aria-expanded", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.selected ? ctx.accordion.collapseIcon : ctx.accordion.expandIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hasHeaderFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasHeaderFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@tabContent", ctx.selected ? ɵngcc0.ɵɵpureFunction1(22, _c4, ɵngcc0.ɵɵpureFunction1(20, _c3, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(26, _c5, ɵngcc0.ɵɵpureFunction1(24, _c3, ctx.transitionOptions)));
        ɵngcc0.ɵɵattribute("id", ctx.id + "-content")("aria-hidden", !ctx.selected)("aria-labelledby", ctx.id);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-accordion-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"], encapsulation: 2, data: { animation: [
            animations.trigger('tabContent', [
                animations.state('hidden', animations.style({
                    height: '0',
                    overflow: 'hidden'
                })),
                animations.state('visible', animations.style({
                    height: '*'
                })),
                animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                animations.transition('void => *', animations.animate(0))
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionTab, [{
        type: core.Component,
        args: [{
                selector: 'p-accordionTab',
                template: "\n        <div class=\"p-accordion-tab\" [ngClass]=\"{'p-accordion-tab-active': selected}\">\n            <div class=\"p-accordion-header\" [ngClass]=\"{'p-highlight': selected, 'p-disabled': disabled}\">\n                <a role=\"tab\" class=\"p-accordion-header-link\" (click)=\"toggle($event)\" (keydown)=\"onKeydown($event)\" [attr.tabindex]=\"disabled ? null : 0\"\n                    [attr.id]=\"id\" [attr.aria-controls]=\"id + '-content'\" [attr.aria-expanded]=\"selected\">\n                    <span class=\"p-accordion-toggle-icon\" [ngClass]=\"selected ? accordion.collapseIcon : accordion.expandIcon\"></span>\n                    <span class=\"p-accordion-header-text\" *ngIf=\"!hasHeaderFacet\">\n                        {{header}}\n                    </span>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <ng-content select=\"p-header\" *ngIf=\"hasHeaderFacet\"></ng-content>\n                </a>\n            </div>\n            <div [attr.id]=\"id + '-content'\" class=\"p-toggleable-content\" [@tabContent]=\"selected ? {value: 'visible', params: {transitionParams: transitionOptions}} : {value: 'hidden', params: {transitionParams: transitionOptions}}\"\n                role=\"region\" [attr.aria-hidden]=\"!selected\" [attr.aria-labelledby]=\"id\">\n                <div class=\"p-accordion-content\">\n                    <ng-content></ng-content>\n                    <ng-container *ngIf=\"contentTemplate && (cache ? loaded : selected)\">\n                        <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('tabContent', [
                        animations.state('hidden', animations.style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        animations.state('visible', animations.style({
                            height: '*'
                        })),
                        animations.transition('visible <=> hidden', [animations.style({ overflow: 'hidden' }), animations.animate('{{transitionParams}}')]),
                        animations.transition('void => *', animations.animate(0))
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-accordion-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return Accordion; })]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: core.Input
        }], selectedChange: [{
            type: core.Output
        }], transitionOptions: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], header: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], headerFacet: [{
            type: core.ContentChildren,
            args: [api.Header]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return AccordionTab;
    }());
    AccordionTab.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return Accordion; }),] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    AccordionTab.propDecorators = {
        header: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        cache: [{ type: core.Input }],
        selectedChange: [{ type: core.Output }],
        transitionOptions: [{ type: core.Input }],
        headerFacet: [{ type: core.ContentChildren, args: [api.Header,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        selected: [{ type: core.Input }]
    };
    var Accordion = /** @class */ (function () {
        function Accordion(el, changeDetector) {
            this.el = el;
            this.changeDetector = changeDetector;
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.expandIcon = 'pi pi-fw pi-chevron-right';
            this.collapseIcon = 'pi pi-fw pi-chevron-down';
            this.activeIndexChange = new core.EventEmitter();
            this.tabs = [];
        }
        Accordion.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.initTabs();
            this.tabListSubscription = this.tabList.changes.subscribe(function (_) {
                _this.initTabs();
            });
        };
        Accordion.prototype.initTabs = function () {
            this.tabs = this.tabList.toArray();
            this.updateSelectionState();
            this.changeDetector.markForCheck();
        };
        Accordion.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Object.defineProperty(Accordion.prototype, "activeIndex", {
            get: function () {
                return this._activeIndex;
            },
            set: function (val) {
                this._activeIndex = val;
                if (this.preventActiveIndexPropagation) {
                    this.preventActiveIndexPropagation = false;
                    return;
                }
                this.updateSelectionState();
            },
            enumerable: false,
            configurable: true
        });
        Accordion.prototype.updateSelectionState = function () {
            if (this.tabs && this.tabs.length && this._activeIndex != null) {
                for (var i = 0; i < this.tabs.length; i++) {
                    var selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                    var changed = selected !== this.tabs[i].selected;
                    if (changed) {
                        this.tabs[i].selected = selected;
                        this.tabs[i].selectedChange.emit(selected);
                        this.tabs[i].changeDetector.markForCheck();
                    }
                }
            }
        };
        Accordion.prototype.updateActiveIndex = function () {
            var _this = this;
            var index = this.multiple ? [] : null;
            this.tabs.forEach(function (tab, i) {
                if (tab.selected) {
                    if (_this.multiple) {
                        index.push(i);
                    }
                    else {
                        index = i;
                        return;
                    }
                }
            });
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(index);
        };
        Accordion.prototype.ngOnDestroy = function () {
            if (this.tabListSubscription) {
                this.tabListSubscription.unsubscribe();
            }
        };
Accordion.ɵfac = function Accordion_Factory(t) { return new (t || Accordion)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Accordion.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Accordion, selectors: [["p-accordion"]], contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AccordionTab, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabList = _t);
    } }, inputs: { expandIcon: "expandIcon", collapseIcon: "collapseIcon", activeIndex: "activeIndex", multiple: "multiple", style: "style", styleClass: "styleClass" }, outputs: { onClose: "onClose", onOpen: "onOpen", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c7, decls: 2, vars: 4, consts: [["role", "tablist", 3, "ngClass", "ngStyle"]], template: function Accordion_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Accordion, [{
        type: core.Component,
        args: [{
                selector: 'p-accordion',
                template: "\n        <div [ngClass]=\"'p-accordion p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\" role=\"tablist\">\n            <ng-content></ng-content>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onClose: [{
            type: core.Output
        }], onOpen: [{
            type: core.Output
        }], expandIcon: [{
            type: core.Input
        }], collapseIcon: [{
            type: core.Input
        }], activeIndexChange: [{
            type: core.Output
        }], activeIndex: [{
            type: core.Input
        }], multiple: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], tabList: [{
            type: core.ContentChildren,
            args: [AccordionTab]
        }] }); })();
        return Accordion;
    }());
    Accordion.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    Accordion.propDecorators = {
        multiple: [{ type: core.Input }],
        onClose: [{ type: core.Output }],
        onOpen: [{ type: core.Output }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        expandIcon: [{ type: core.Input }],
        collapseIcon: [{ type: core.Input }],
        activeIndexChange: [{ type: core.Output }],
        tabList: [{ type: core.ContentChildren, args: [AccordionTab,] }],
        activeIndex: [{ type: core.Input }]
    };
    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
AccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[common.CommonModule], ɵngcc2.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [Accordion, AccordionTab], imports: [ɵngcc1.CommonModule], exports: [Accordion, AccordionTab, ɵngcc2.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Accordion, AccordionTab, api.SharedModule],
                declarations: [Accordion, AccordionTab]
            }]
    }], function () { return []; }, null); })();
        return AccordionModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Accordion = Accordion;
    exports.AccordionModule = AccordionModule;
    exports.AccordionTab = AccordionTab;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-accordion.umd.js.map