(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/cdk/scrolling'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('primeng/virtualscroller', ['@angular/core','@angular/common','@angular/cdk/scrolling','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api', '@angular/cdk/scrolling'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.ng.cdk.scrolling,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.virtualscroller = {}), global.ng.core, global.ng.common, global.primeng.api, global.ng.cdk.scrolling));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, api, scrolling) { 
function VirtualScroller_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function VirtualScroller_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_div_1_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function VirtualScroller_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { "height": a0 }; };
var _c1 = function (a0, a1, a2, a3, a4, a5, a6) { return { $implicit: a0, index: a1, count: a2, first: a3, last: a4, even: a5, odd: a6 }; };
function VirtualScroller_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    var c_r8 = ctx.count;
    var f_r9 = ctx.first;
    var l_r10 = ctx.last;
    var e_r11 = ctx.even;
    var o_r12 = ctx.odd;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r3.itemSize + "px"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r6 ? ctx_r3.itemTemplate : ctx_r3.loadingItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction7(5, _c1, item_r6, i_r7, c_r8, f_r9, l_r10, e_r11, o_r12));
} }
function VirtualScroller_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function VirtualScroller_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, VirtualScroller_div_8_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.footerTemplate);
} }
var _c2 = [[["p-header"]], [["p-footer"]]];
var _c3 = ["p-header", "p-footer"];
'use strict';

    var VirtualScroller = /** @class */ (function () {
        function VirtualScroller(el) {
            this.el = el;
            this.trackBy = function (index, item) { return item; };
            this.onLazyLoad = new core.EventEmitter();
            this._totalRecords = 0;
            this.page = 0;
            this._first = 0;
            this.loadedPages = [];
        }
        Object.defineProperty(VirtualScroller.prototype, "totalRecords", {
            get: function () {
                return this._totalRecords;
            },
            set: function (val) {
                this._totalRecords = val;
                console.log("totalRecords is deprecated, provide a value with the length of virtual items instead.");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VirtualScroller.prototype, "first", {
            get: function () {
                return this._first;
            },
            set: function (val) {
                this._first = val;
                console.log("first property is deprecated, use scrollToIndex function to scroll a specific item.");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VirtualScroller.prototype, "cache", {
            get: function () {
                return this._cache;
            },
            set: function (val) {
                this._cache = val;
                console.log("cache is deprecated as it is always on.");
            },
            enumerable: false,
            configurable: true
        });
        VirtualScroller.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'loadingItem':
                        _this.loadingItemTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        VirtualScroller.prototype.onScrollIndexChange = function (index) {
            var _this = this;
            if (this.lazy) {
                var pageRange = this.createPageRange(Math.floor(index / this.rows));
                pageRange.forEach(function (page) { return _this.loadPage(page); });
            }
        };
        VirtualScroller.prototype.createPageRange = function (page) {
            var range = [];
            if (page !== 0) {
                range.push(page - 1);
            }
            range.push(page);
            if (page !== (Math.ceil(this.value.length / this.rows) - 1)) {
                range.push(page + 1);
            }
            return range;
        };
        VirtualScroller.prototype.loadPage = function (page) {
            if (!this.loadedPages.includes(page)) {
                this.onLazyLoad.emit({ first: this.rows * page, rows: this.rows });
                this.loadedPages.push(page);
            }
        };
        VirtualScroller.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        //@deprecated
        VirtualScroller.prototype.scrollTo = function (index, mode) {
            this.scrollToIndex(index, mode);
        };
        VirtualScroller.prototype.scrollToIndex = function (index, mode) {
            if (this.viewport) {
                this.viewport.scrollToIndex(index, mode);
            }
        };
        VirtualScroller.prototype.clearCache = function () {
            this.loadedPages = [];
        };
        VirtualScroller.prototype.ngOnChanges = function (simpleChange) {
            if (simpleChange.value) {
                if (!this.lazy) {
                    this.clearCache();
                }
            }
        };
VirtualScroller.ɵfac = function VirtualScroller_Factory(t) { return new (t || VirtualScroller)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
VirtualScroller.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: VirtualScroller, selectors: [["p-virtualScroller"]], contentQueries: function VirtualScroller_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function VirtualScroller_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
    } }, inputs: { trackBy: "trackBy", totalRecords: "totalRecords", first: "first", cache: "cache", value: "value", itemSize: "itemSize", style: "style", styleClass: "styleClass", scrollHeight: "scrollHeight", lazy: "lazy", rows: "rows", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, outputs: { onLazyLoad: "onLazyLoad" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 14, consts: [[3, "ngClass", "ngStyle"], ["class", "p-virtualscroller-header", 4, "ngIf"], [1, "p-virtualscroller-content"], ["content", ""], [1, "p-virtualscroller-list"], [3, "ngStyle", "itemSize", "minBufferPx", "maxBufferPx", "scrolledIndexChange"], ["viewport", ""], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["class", "p-virtualscroller-footer", 4, "ngIf"], [1, "p-virtualscroller-header"], [4, "ngTemplateOutlet"], [1, "p-virtualscroller-item", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-virtualscroller-footer"]], template: function VirtualScroller_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, VirtualScroller_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "cdk-virtual-scroll-viewport", 5, 6);
        ɵngcc0.ɵɵlistener("scrolledIndexChange", function VirtualScroller_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_5_listener($event) { return ctx.onScrollIndexChange($event); });
        ɵngcc0.ɵɵtemplate(7, VirtualScroller_ng_container_7_Template, 3, 13, "ng-container", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, VirtualScroller_div_8_Template, 3, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-virtualscroller p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(12, _c0, ctx.scrollHeight))("itemSize", ctx.itemSize)("minBufferPx", ctx.minBufferPx)("maxBufferPx", ctx.maxBufferPx);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx.value)("cdkVirtualForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footer || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc2.CdkVirtualScrollViewport, ɵngcc2.CdkFixedSizeVirtualScroll, ɵngcc2.CdkVirtualForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VirtualScroller, [{
        type: core.Component,
        args: [{
                selector: 'p-virtualScroller',
                template: "\n        <div [ngClass]=\"'p-virtualscroller p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-virtualscroller-header\" *ngIf=\"header || headerTemplate\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n            </div>\n            <div #content class=\"p-virtualscroller-content\">\n                <div class=\"p-virtualscroller-list\">\n                    <cdk-virtual-scroll-viewport #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" [minBufferPx]=\"minBufferPx\" [maxBufferPx]=\"maxBufferPx\" (scrolledIndexChange)=\"onScrollIndexChange($event)\">\n                        <ng-container *cdkVirtualFor=\"let item of value; trackBy: trackBy; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd;\">\n                            <div [ngStyle]=\"{'height': itemSize + 'px'}\" class=\"p-virtualscroller-item\">\n                                <ng-container *ngTemplateOutlet=\"item ? itemTemplate : loadingItemTemplate; context: {$implicit: item, index: i, count: c, first: f, last: l, even: e, odd: o}\"></ng-container>\n                            </div>\n                        </ng-container>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>\n            <div class=\"p-virtualscroller-footer\" *ngIf=\"footer || footerTemplate\">\n                <ng-content select=\"p-footer\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { trackBy: [{
            type: core.Input
        }], onLazyLoad: [{
            type: core.Output
        }], totalRecords: [{
            type: core.Input
        }], first: [{
            type: core.Input
        }], cache: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], itemSize: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], scrollHeight: [{
            type: core.Input
        }], lazy: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], minBufferPx: [{
            type: core.Input
        }], maxBufferPx: [{
            type: core.Input
        }], header: [{
            type: core.ContentChild,
            args: [api.Header]
        }], footer: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }], viewport: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }] }); })();
        return VirtualScroller;
    }());
    VirtualScroller.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    VirtualScroller.propDecorators = {
        value: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        scrollHeight: [{ type: core.Input }],
        lazy: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        minBufferPx: [{ type: core.Input }],
        maxBufferPx: [{ type: core.Input }],
        trackBy: [{ type: core.Input }],
        header: [{ type: core.ContentChild, args: [api.Header,] }],
        footer: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        viewport: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }],
        onLazyLoad: [{ type: core.Output }],
        totalRecords: [{ type: core.Input }],
        first: [{ type: core.Input }],
        cache: [{ type: core.Input }]
    };
    var VirtualScrollerModule = /** @class */ (function () {
        function VirtualScrollerModule() {
        }
VirtualScrollerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: VirtualScrollerModule });
VirtualScrollerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function VirtualScrollerModule_Factory(t) { return new (t || VirtualScrollerModule)(); }, imports: [[common.CommonModule, scrolling.ScrollingModule], ɵngcc3.SharedModule, ɵngcc2.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(VirtualScrollerModule, { declarations: [VirtualScroller], imports: [ɵngcc1.CommonModule, ɵngcc2.ScrollingModule], exports: [VirtualScroller, ɵngcc3.SharedModule, ɵngcc2.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VirtualScrollerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, scrolling.ScrollingModule],
                exports: [VirtualScroller, api.SharedModule, scrolling.ScrollingModule],
                declarations: [VirtualScroller]
            }]
    }], function () { return []; }, null); })();
        return VirtualScrollerModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.VirtualScroller = VirtualScroller;
    exports.VirtualScrollerModule = VirtualScrollerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-virtualscroller.umd.js.map