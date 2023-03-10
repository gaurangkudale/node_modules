(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/defer', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.defer = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    var DeferredLoader = /** @class */ (function () {
        function DeferredLoader(el, renderer, viewContainer) {
            this.el = el;
            this.renderer = renderer;
            this.viewContainer = viewContainer;
            this.onLoad = new core.EventEmitter();
        }
        DeferredLoader.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.shouldLoad()) {
                this.load();
            }
            if (!this.isLoaded()) {
                this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
                    if (_this.shouldLoad()) {
                        _this.load();
                        _this.documentScrollListener();
                        _this.documentScrollListener = null;
                    }
                });
            }
        };
        DeferredLoader.prototype.shouldLoad = function () {
            if (this.isLoaded()) {
                return false;
            }
            else {
                var rect = this.el.nativeElement.getBoundingClientRect();
                var docElement = document.documentElement;
                var winHeight = docElement.clientHeight;
                return (winHeight >= rect.top);
            }
        };
        DeferredLoader.prototype.load = function () {
            this.view = this.viewContainer.createEmbeddedView(this.template);
            this.onLoad.emit();
        };
        DeferredLoader.prototype.isLoaded = function () {
            return this.view != null;
        };
        DeferredLoader.prototype.ngOnDestroy = function () {
            this.view = null;
            if (this.documentScrollListener) {
                this.documentScrollListener();
            }
        };
DeferredLoader.ɵfac = function DeferredLoader_Factory(t) { return new (t || DeferredLoader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
DeferredLoader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DeferredLoader, selectors: [["", "pDefer", ""]], contentQueries: function DeferredLoader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, outputs: { onLoad: "onLoad" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferredLoader, [{
        type: core.Directive,
        args: [{
                selector: '[pDefer]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }]; }, { onLoad: [{
            type: core.Output
        }], template: [{
            type: core.ContentChild,
            args: [core.TemplateRef]
        }] }); })();
        return DeferredLoader;
    }());
    DeferredLoader.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ViewContainerRef }
    ]; };
    DeferredLoader.propDecorators = {
        onLoad: [{ type: core.Output }],
        template: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
    };
    var DeferModule = /** @class */ (function () {
        function DeferModule() {
        }
DeferModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DeferModule });
DeferModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DeferModule_Factory(t) { return new (t || DeferModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DeferModule, { declarations: [DeferredLoader], imports: [ɵngcc1.CommonModule], exports: [DeferredLoader] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [DeferredLoader],
                declarations: [DeferredLoader]
            }]
    }], function () { return []; }, null); })();
        return DeferModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DeferModule = DeferModule;
    exports.DeferredLoader = DeferredLoader;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-defer.umd.js.map