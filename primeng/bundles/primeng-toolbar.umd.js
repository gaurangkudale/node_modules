(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/toolbar', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.toolbar = {}), global.ng.core, global.ng.common, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, api) { 
function Toolbar_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Toolbar_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.leftTemplate);
} }
function Toolbar_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Toolbar_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.rightTemplate);
} }
var _c0 = ["*"];
'use strict';

    var Toolbar = /** @class */ (function () {
        function Toolbar(el) {
            this.el = el;
        }
        Toolbar.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Toolbar.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'left':
                        _this.leftTemplate = item.template;
                        break;
                    case 'right':
                        _this.rightTemplate = item.template;
                        break;
                }
            });
        };
Toolbar.ɵfac = function Toolbar_Factory(t) { return new (t || Toolbar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Toolbar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Toolbar, selectors: [["p-toolbar"]], contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { style: "style", styleClass: "styleClass" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [["role", "toolbar", 3, "ngClass", "ngStyle"], ["class", "p-toolbar-group-left", 4, "ngIf"], ["class", "p-toolbar-group-right", 4, "ngIf"], [1, "p-toolbar-group-left"], [4, "ngTemplateOutlet"], [1, "p-toolbar-group-right"]], template: function Toolbar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Toolbar_div_2_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(3, Toolbar_div_3_Template, 2, 1, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-toolbar p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.leftTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rightTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-toolbar{-ms-flex-pack:justify;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:space-between}.p-toolbar,.p-toolbar-group-left,.p-toolbar-group-right{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Toolbar, [{
        type: core.Component,
        args: [{
                selector: 'p-toolbar',
                template: "\n        <div [ngClass]=\"'p-toolbar p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\" role=\"toolbar\">\n            <ng-content></ng-content>\n            <div class=\"p-toolbar-group-left\" *ngIf=\"leftTemplate\">\n                <ng-container *ngTemplateOutlet=\"leftTemplate\"></ng-container>\n            </div>\n            <div class=\"p-toolbar-group-right\" *ngIf=\"rightTemplate\">\n                <ng-container *ngTemplateOutlet=\"rightTemplate\"></ng-container>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-toolbar{-ms-flex-pack:justify;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:space-between}.p-toolbar,.p-toolbar-group-left,.p-toolbar-group-right{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Toolbar;
    }());
    Toolbar.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    Toolbar.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var ToolbarModule = /** @class */ (function () {
        function ToolbarModule() {
        }
ToolbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToolbarModule });
ToolbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToolbarModule_Factory(t) { return new (t || ToolbarModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToolbarModule, { declarations: [Toolbar], imports: [ɵngcc1.CommonModule], exports: [Toolbar] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToolbarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Toolbar],
                declarations: [Toolbar]
            }]
    }], function () { return []; }, null); })();
        return ToolbarModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Toolbar = Toolbar;
    exports.ToolbarModule = ToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-toolbar.umd.js.map