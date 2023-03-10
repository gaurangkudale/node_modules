(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/progressbar', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.progressbar = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 
function ProgressBar_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.value + "%");
} }
function ProgressBar_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r1.value != null ? "block" : "none");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r1.value, "", ctx_r1.unit, "");
} }
function ProgressBar_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelement(1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = function (a1, a2) { return { "p-progressbar p-component": true, "p-progressbar-determinate": a1, "p-progressbar-indeterminate": a2 }; };
'use strict';

    var ProgressBar = /** @class */ (function () {
        function ProgressBar() {
            this.showValue = true;
            this.unit = '%';
            this.mode = 'determinate';
        }
ProgressBar.ɵfac = function ProgressBar_Factory(t) { return new (t || ProgressBar)(); };
ProgressBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressBar, selectors: [["p-progressBar"]], inputs: { showValue: "showValue", unit: "unit", mode: "mode", value: "value", style: "style", styleClass: "styleClass" }, decls: 4, vars: 11, consts: [["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", "style", "display:block", 3, "width", 4, "ngIf"], ["class", "p-progressbar-label", 3, "display", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 2, "display", "block"], [1, "p-progressbar-label"], [1, "p-progressbar-indeterminate-container"], [1, "p-progressbar-value", "p-progressbar-value-animate"]], template: function ProgressBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ProgressBar_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ProgressBar_div_2_Template, 2, 4, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ProgressBar_div_3_Template, 2, 0, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate" && ctx.showValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBar, [{
        type: core.Component,
        args: [{
                selector: 'p-progressBar',
                template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" role=\"progressbar\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" aria-valuemax=\"100\"\n            [ngClass]=\"{'p-progressbar p-component': true, 'p-progressbar-determinate': (mode === 'determinate'), 'p-progressbar-indeterminate': (mode === 'indeterminate')}\">\n            <div *ngIf=\"mode === 'determinate'\" class=\"p-progressbar-value p-progressbar-value-animate\" [style.width]=\"value + '%'\" style=\"display:block\"></div>\n            <div *ngIf=\"mode === 'determinate' && showValue\" class=\"p-progressbar-label\" [style.display]=\"value != null ? 'block' : 'none'\">{{value}}{{unit}}</div>\n            <div *ngIf=\"mode === 'indeterminate'\" class=\"p-progressbar-indeterminate-container\">\n                <div class=\"p-progressbar-value p-progressbar-value-animate\"></div>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"]
            }]
    }], function () { return []; }, { showValue: [{
            type: core.Input
        }], unit: [{
            type: core.Input
        }], mode: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return ProgressBar;
    }());
    ProgressBar.propDecorators = {
        value: [{ type: core.Input }],
        showValue: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        unit: [{ type: core.Input }],
        mode: [{ type: core.Input }]
    };
    var ProgressBarModule = /** @class */ (function () {
        function ProgressBarModule() {
        }
ProgressBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressBarModule });
ProgressBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressBarModule, { declarations: [ProgressBar], imports: [ɵngcc1.CommonModule], exports: [ProgressBar] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [ProgressBar],
                declarations: [ProgressBar]
            }]
    }], function () { return []; }, null); })();
        return ProgressBarModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProgressBar = ProgressBar;
    exports.ProgressBarModule = ProgressBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-progressbar.umd.js.map