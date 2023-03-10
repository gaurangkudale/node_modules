(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/api'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/fieldset', ['@angular/core','@angular/common','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/api', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.fieldset = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.api, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, animations, common, api, ripple) { 
var _c0 = function (a0, a1) { return { "pi-minus": a0, "pi-plus": a1 }; };
function Fieldset_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 9);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !ctx_r4.collapsed, ctx_r4.collapsed));
} }
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Fieldset_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function Fieldset_ng_container_2_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.toggle($event); })("keydown.enter", function Fieldset_ng_container_2_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.toggle($event); });
    ɵngcc0.ɵɵtemplate(2, Fieldset_ng_container_2_span_2_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(3, Fieldset_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r1 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-controls", ctx_r0.id + "-content")("aria-expanded", !ctx_r0.collapsed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.toggleable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Fieldset_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵprojection(2, 1);
    ɵngcc0.ɵɵtemplate(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.legend);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
} }
function Fieldset_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = ["*", [["p-header"]]];
var _c2 = function (a1) { return { "p-fieldset p-component": true, "p-fieldset-toggleable": a1 }; };
var _c3 = function (a0) { return { transitionParams: a0, height: "0" }; };
var _c4 = function (a1) { return { value: "hidden", params: a1 }; };
var _c5 = function (a0) { return { transitionParams: a0, height: "*" }; };
var _c6 = function (a1) { return { value: "visible", params: a1 }; };
var _c7 = ["*", "p-header"];
'use strict';

    var idx = 0;
    var Fieldset = /** @class */ (function () {
        function Fieldset(el) {
            this.el = el;
            this.collapsed = false;
            this.collapsedChange = new core.EventEmitter();
            this.onBeforeToggle = new core.EventEmitter();
            this.onAfterToggle = new core.EventEmitter();
            this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
            this.id = "p-fieldset-" + idx++;
        }
        Fieldset.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Fieldset.prototype.toggle = function (event) {
            if (this.animating) {
                return false;
            }
            this.animating = true;
            this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
            this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
            event.preventDefault();
        };
        Fieldset.prototype.expand = function (event) {
            this.collapsed = false;
            this.collapsedChange.emit(this.collapsed);
        };
        Fieldset.prototype.collapse = function (event) {
            this.collapsed = true;
            this.collapsedChange.emit(this.collapsed);
        };
        Fieldset.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        Fieldset.prototype.onToggleDone = function (event) {
            this.animating = false;
        };
Fieldset.ɵfac = function Fieldset_Factory(t) { return new (t || Fieldset)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Fieldset.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Fieldset, selectors: [["p-fieldset"]], contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { collapsed: "collapsed", transitionOptions: "transitionOptions", legend: "legend", toggleable: "toggleable", style: "style", styleClass: "styleClass" }, outputs: { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, ngContentSelectors: _c7, decls: 9, vars: 22, consts: [[3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["legendContent", ""], ["role", "region", 1, "p-toggleable-content"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["tabindex", "0", "pRipple", "", 3, "click", "keydown.enter"], ["class", "p-fieldset-toggler pi", 3, "ngClass", 4, "ngIf"], [1, "p-fieldset-toggler", "pi", 3, "ngClass"], [1, "p-fieldset-legend-text"]], template: function Fieldset_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "fieldset", 0);
        ɵngcc0.ɵɵelementStart(1, "legend", 1);
        ɵngcc0.ɵɵtemplate(2, Fieldset_ng_container_2_Template, 4, 4, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, Fieldset_ng_template_3_Template, 4, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵlistener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener($event) { return ctx.onToggleDone($event); });
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵtemplate(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.toggleable))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toggleable)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("@fieldsetContent", ctx.collapsed ? ɵngcc0.ɵɵpureFunction1(16, _c4, ɵngcc0.ɵɵpureFunction1(14, _c3, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(20, _c6, ɵngcc0.ɵɵpureFunction1(18, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵngcc0.ɵɵattribute("id", ctx.id + "-content")("aria-labelledby", ctx.id)("aria-hidden", ctx.collapsed);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"], encapsulation: 2, data: { animation: [
            animations.trigger('fieldsetContent', [
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Fieldset, [{
        type: core.Component,
        args: [{
                selector: 'p-fieldset',
                template: "\n        <fieldset [attr.id]=\"id\" [ngClass]=\"{'p-fieldset p-component': true, 'p-fieldset-toggleable': toggleable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <legend class=\"p-fieldset-legend\">\n                <ng-container *ngIf=\"toggleable; else legendContent\">\n                    <a tabindex=\"0\" (click)=\"toggle($event)\" (keydown.enter)=\"toggle($event)\" [attr.aria-controls]=\"id + '-content'\" [attr.aria-expanded]=\"!collapsed\" pRipple>\n                        <span class=\"p-fieldset-toggler pi\" *ngIf=\"toggleable\" [ngClass]=\"{'pi-minus': !collapsed,'pi-plus':collapsed}\"></span>\n                        <ng-container *ngTemplateOutlet=\"legendContent\"></ng-container>\n                    </a>\n                </ng-container>\n                <ng-template #legendContent>\n                    <span class=\"p-fieldset-legend-text\">{{legend}}</span>\n                    <ng-content select=\"p-header\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                </ng-template>\n            </legend>\n            <div [attr.id]=\"id + '-content'\" class=\"p-toggleable-content\" [@fieldsetContent]=\"collapsed ? {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}}\" \n                        [attr.aria-labelledby]=\"id\" [attr.aria-hidden]=\"collapsed\"\n                         (@fieldsetContent.done)=\"onToggleDone($event)\" role=\"region\">\n                <div class=\"p-fieldset-content\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n            </div>\n        </fieldset>\n    ",
                animations: [
                    animations.trigger('fieldsetContent', [
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
                styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { collapsed: [{
            type: core.Input
        }], collapsedChange: [{
            type: core.Output
        }], onBeforeToggle: [{
            type: core.Output
        }], onAfterToggle: [{
            type: core.Output
        }], transitionOptions: [{
            type: core.Input
        }], legend: [{
            type: core.Input
        }], toggleable: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Fieldset;
    }());
    Fieldset.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    Fieldset.propDecorators = {
        legend: [{ type: core.Input }],
        toggleable: [{ type: core.Input }],
        collapsed: [{ type: core.Input }],
        collapsedChange: [{ type: core.Output }],
        onBeforeToggle: [{ type: core.Output }],
        onAfterToggle: [{ type: core.Output }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        transitionOptions: [{ type: core.Input }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var FieldsetModule = /** @class */ (function () {
        function FieldsetModule() {
        }
FieldsetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FieldsetModule });
FieldsetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FieldsetModule_Factory(t) { return new (t || FieldsetModule)(); }, imports: [[common.CommonModule, ripple.RippleModule], ɵngcc3.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FieldsetModule, { declarations: [Fieldset], imports: [ɵngcc1.CommonModule, ɵngcc2.RippleModule], exports: [Fieldset, ɵngcc3.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FieldsetModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [Fieldset, api.SharedModule],
                declarations: [Fieldset]
            }]
    }], function () { return []; }, null); })();
        return FieldsetModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fieldset = Fieldset;
    exports.FieldsetModule = FieldsetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-fieldset.umd.js.map