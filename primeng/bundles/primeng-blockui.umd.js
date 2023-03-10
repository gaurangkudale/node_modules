(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/blockui', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.blockui = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, dom, api) { 
var _c0 = ["mask"];
function BlockUI_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function (a0) { return { "p-blockui-document": a0, "p-blockui p-component-overlay": true }; };
var _c2 = function (a0) { return { display: a0 }; };
var _c3 = ["*"];
'use strict';

    var BlockUI = /** @class */ (function () {
        function BlockUI(el, cd) {
            this.el = el;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
        }
        Object.defineProperty(BlockUI.prototype, "blocked", {
            get: function () {
                return this._blocked;
            },
            set: function (val) {
                this._blocked = val;
                if (this.mask && this.mask.nativeElement) {
                    if (this._blocked)
                        this.block();
                    else
                        this.unblock();
                }
            },
            enumerable: false,
            configurable: true
        });
        BlockUI.prototype.ngAfterViewInit = function () {
            if (this.target && !this.target.getBlockableElement) {
                throw 'Target of BlockUI must implement BlockableUI interface';
            }
        };
        BlockUI.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        BlockUI.prototype.block = function () {
            if (this.target) {
                this.target.getBlockableElement().appendChild(this.mask.nativeElement);
                this.target.getBlockableElement().style.position = 'relative';
            }
            else {
                document.body.appendChild(this.mask.nativeElement);
            }
            if (this.autoZIndex) {
                this.mask.nativeElement.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
        };
        BlockUI.prototype.unblock = function () {
            this.el.nativeElement.appendChild(this.mask.nativeElement);
        };
        BlockUI.prototype.ngOnDestroy = function () {
            this.unblock();
        };
BlockUI.ɵfac = function BlockUI_Factory(t) { return new (t || BlockUI)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
BlockUI.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BlockUI, selectors: [["p-blockUI"]], contentQueries: function BlockUI_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function BlockUI_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mask = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", blocked: "blocked", target: "target", styleClass: "styleClass" }, ngContentSelectors: _c3, decls: 4, vars: 9, consts: [[3, "ngClass", "ngStyle"], ["mask", ""], [4, "ngTemplateOutlet"]], template: function BlockUI_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, BlockUI_ng_container_3_Template, 1, 0, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, !ctx.target))("ngStyle", ɵngcc0.ɵɵpureFunction1(7, _c2, ctx.blocked ? "flex" : "none"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], styles: [".p-blockui{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;top:0;transition-property:background-color;width:100%}.p-blockui,.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:rgba(0,0,0,0)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BlockUI, [{
        type: core.Component,
        args: [{
                selector: 'p-blockUI',
                template: "\n        <div #mask [class]=\"styleClass\" [ngClass]=\"{'p-blockui-document':!target, 'p-blockui p-component-overlay': true}\" [ngStyle]=\"{display: blocked ? 'flex' : 'none'}\">\n            <ng-content></ng-content>\n            <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-blockui{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;top:0;transition-property:background-color;width:100%}.p-blockui,.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:rgba(0,0,0,0)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], blocked: [{
            type: core.Input
        }], target: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }], mask: [{
            type: core.ViewChild,
            args: ['mask']
        }] }); })();
        return BlockUI;
    }());
    BlockUI.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    BlockUI.propDecorators = {
        target: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        mask: [{ type: core.ViewChild, args: ['mask',] }],
        blocked: [{ type: core.Input }]
    };
    var BlockUIModule = /** @class */ (function () {
        function BlockUIModule() {
        }
BlockUIModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BlockUIModule });
BlockUIModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BlockUIModule_Factory(t) { return new (t || BlockUIModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BlockUIModule, { declarations: [BlockUI], imports: [ɵngcc1.CommonModule], exports: [BlockUI] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BlockUIModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [BlockUI],
                declarations: [BlockUI]
            }]
    }], function () { return []; }, null); })();
        return BlockUIModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BlockUI = BlockUI;
    exports.BlockUIModule = BlockUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-blockui.umd.js.map