(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/button'),exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/inplace', ['@angular/core','@angular/common','primeng/button','exports', '@angular/core', '@angular/common', 'primeng/button', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.button,(global.primeng = global.primeng || {}, global.primeng.inplace = {}), global.ng.core, global.ng.common, global.primeng.button, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, button, api) { 
var _c0 = ["*"];
function Inplace_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function (a0) { return { "p-disabled": a0 }; };
function Inplace_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("click", function Inplace_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onActivateClick($event); })("keydown", function Inplace_div_1_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onKeydown($event); });
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r0.disabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.displayTemplate);
} }
function Inplace_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Inplace_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function Inplace_div_2_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onDeactivateClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r7.closeIcon);
} }
function Inplace_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Inplace_div_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, Inplace_div_2_button_3_Template, 1, 1, "button", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.closable);
} }
var _c2 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
var _c3 = function (a1) { return { "p-inplace p-component": true, "p-inplace-closable": a1 }; };
var _c4 = ["[pInplaceDisplay]", "[pInplaceContent]"];
'use strict';

    var InplaceDisplay = /** @class */ (function () {
        function InplaceDisplay() {
        }
InplaceDisplay.ɵfac = function InplaceDisplay_Factory(t) { return new (t || InplaceDisplay)(); };
InplaceDisplay.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InplaceDisplay, selectors: [["p-inplaceDisplay"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function InplaceDisplay_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceDisplay, [{
        type: core.Component,
        args: [{
                selector: 'p-inplaceDisplay',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return []; }, null); })();
        return InplaceDisplay;
    }());
    var InplaceContent = /** @class */ (function () {
        function InplaceContent() {
        }
InplaceContent.ɵfac = function InplaceContent_Factory(t) { return new (t || InplaceContent)(); };
InplaceContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InplaceContent, selectors: [["p-inplaceContent"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function InplaceContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceContent, [{
        type: core.Component,
        args: [{
                selector: 'p-inplaceContent',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return []; }, null); })();
        return InplaceContent;
    }());
    var Inplace = /** @class */ (function () {
        function Inplace(cd) {
            this.cd = cd;
            this.closeIcon = 'pi pi-times';
            this.onActivate = new core.EventEmitter();
            this.onDeactivate = new core.EventEmitter();
        }
        Inplace.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'display':
                        _this.displayTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Inplace.prototype.onActivateClick = function (event) {
            if (!this.preventClick)
                this.activate(event);
        };
        Inplace.prototype.onDeactivateClick = function (event) {
            if (!this.preventClick)
                this.deactivate(event);
        };
        Inplace.prototype.activate = function (event) {
            if (!this.disabled) {
                this.active = true;
                this.onActivate.emit(event);
                this.cd.markForCheck();
            }
        };
        Inplace.prototype.deactivate = function (event) {
            if (!this.disabled) {
                this.active = false;
                this.hover = false;
                this.onDeactivate.emit(event);
                this.cd.markForCheck();
            }
        };
        Inplace.prototype.onKeydown = function (event) {
            if (event.which === 13) {
                this.activate(event);
                event.preventDefault();
            }
        };
Inplace.ɵfac = function Inplace_Factory(t) { return new (t || Inplace)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Inplace.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Inplace, selectors: [["p-inplace"]], contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { closeIcon: "closeIcon", active: "active", closable: "closable", disabled: "disabled", preventClick: "preventClick", style: "style", styleClass: "styleClass" }, outputs: { onActivate: "onActivate", onDeactivate: "onDeactivate" }, ngContentSelectors: _c4, decls: 3, vars: 8, consts: [[3, "ngClass", "ngStyle"], ["class", "p-inplace-display", "tabindex", "0", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-inplace-content", 4, "ngIf"], ["tabindex", "0", 1, "p-inplace-display", 3, "ngClass", "click", "keydown"], [4, "ngTemplateOutlet"], [1, "p-inplace-content"], ["type", "button", "pButton", "", 3, "icon", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click"]], template: function Inplace_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Inplace_div_1_Template, 3, 4, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Inplace_div_2_Template, 4, 2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c3, ctx.closable))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.active);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.active);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.ButtonDirective], styles: [".p-inplace .p-inplace-display{cursor:pointer;display:inline}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:-ms-flexbox;display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Inplace, [{
        type: core.Component,
        args: [{
                selector: 'p-inplace',
                template: "\n        <div [ngClass]=\"{'p-inplace p-component': true, 'p-inplace-closable': closable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-inplace-display\" (click)=\"onActivateClick($event)\" tabindex=\"0\" (keydown)=\"onKeydown($event)\"   \n                [ngClass]=\"{'p-disabled':disabled}\" *ngIf=\"!active\">\n                <ng-content select=\"[pInplaceDisplay]\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"displayTemplate\"></ng-container>\n            </div>\n            <div class=\"p-inplace-content\" *ngIf=\"active\">\n                <ng-content select=\"[pInplaceContent]\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                <button type=\"button\" [icon]=\"closeIcon\" pButton (click)=\"onDeactivateClick($event)\" *ngIf=\"closable\"></button>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-inplace .p-inplace-display{cursor:pointer;display:inline}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:-ms-flexbox;display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { closeIcon: [{
            type: core.Input
        }], onActivate: [{
            type: core.Output
        }], onDeactivate: [{
            type: core.Output
        }], active: [{
            type: core.Input
        }], closable: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], preventClick: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Inplace;
    }());
    Inplace.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    Inplace.propDecorators = {
        active: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        preventClick: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        closeIcon: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        onActivate: [{ type: core.Output }],
        onDeactivate: [{ type: core.Output }]
    };
    var InplaceModule = /** @class */ (function () {
        function InplaceModule() {
        }
InplaceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InplaceModule });
InplaceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InplaceModule_Factory(t) { return new (t || InplaceModule)(); }, imports: [[common.CommonModule, button.ButtonModule], ɵngcc2.ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InplaceModule, { declarations: [Inplace, InplaceDisplay, InplaceContent], imports: [ɵngcc1.CommonModule, ɵngcc2.ButtonModule], exports: [Inplace, InplaceDisplay, InplaceContent, ɵngcc2.ButtonModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule],
                exports: [Inplace, InplaceDisplay, InplaceContent, button.ButtonModule],
                declarations: [Inplace, InplaceDisplay, InplaceContent]
            }]
    }], function () { return []; }, null); })();
        return InplaceModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Inplace = Inplace;
    exports.InplaceContent = InplaceContent;
    exports.InplaceDisplay = InplaceDisplay;
    exports.InplaceModule = InplaceModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-inplace.umd.js.map