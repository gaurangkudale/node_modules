(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/progressspinner', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.progressspinner = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    var ProgressSpinner = /** @class */ (function () {
        function ProgressSpinner() {
            this.strokeWidth = "2";
            this.fill = "none";
            this.animationDuration = "2s";
        }
ProgressSpinner.ɵfac = function ProgressSpinner_Factory(t) { return new (t || ProgressSpinner)(); };
ProgressSpinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressSpinner, selectors: [["p-progressSpinner"]], inputs: { strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", style: "style", styleClass: "styleClass" }, decls: 3, vars: 6, consts: [["role", "alert", "aria-busy", "true", 1, "p-progress-spinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progress-spinner-svg"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progress-spinner-circle"]], template: function ProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵelement(2, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("animation-duration", ctx.animationDuration);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{-ms-transform-origin:center center;-webkit-animation:p-progress-spinner-rotate 2s linear infinite;animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{-webkit-animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@-webkit-keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinner, [{
        type: core.Component,
        args: [{
                selector: 'p-progressSpinner',
                template: "\n        <div class=\"p-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\"  role=\"alert\" aria-busy=\"true\">\n            <svg class=\"p-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"p-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{-ms-transform-origin:center center;-webkit-animation:p-progress-spinner-rotate 2s linear infinite;animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{-webkit-animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@-webkit-keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"]
            }]
    }], function () { return []; }, { strokeWidth: [{
            type: core.Input
        }], fill: [{
            type: core.Input
        }], animationDuration: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return ProgressSpinner;
    }());
    ProgressSpinner.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        strokeWidth: [{ type: core.Input }],
        fill: [{ type: core.Input }],
        animationDuration: [{ type: core.Input }]
    };
    var ProgressSpinnerModule = /** @class */ (function () {
        function ProgressSpinnerModule() {
        }
ProgressSpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressSpinnerModule });
ProgressSpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressSpinnerModule_Factory(t) { return new (t || ProgressSpinnerModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressSpinnerModule, { declarations: [ProgressSpinner], imports: [ɵngcc1.CommonModule], exports: [ProgressSpinner] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinnerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [ProgressSpinner],
                declarations: [ProgressSpinner]
            }]
    }], function () { return []; }, null); })();
        return ProgressSpinnerModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProgressSpinner = ProgressSpinner;
    exports.ProgressSpinnerModule = ProgressSpinnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-progressspinner.umd.js.map