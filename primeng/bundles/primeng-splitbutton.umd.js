(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/button'),require('primeng/menu'),exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('primeng/menu')) :
    typeof define === 'function' && define.amd ? define('primeng/splitbutton', ['@angular/core','@angular/common','primeng/button','primeng/menu','exports', '@angular/core', '@angular/common', 'primeng/button', 'primeng/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.button,global.primeng.menu,(global.primeng = global.primeng || {}, global.primeng.splitbutton = {}), global.ng.core, global.ng.common, global.primeng.button, global.primeng.menu));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, button, menu) { 
var _c0 = ["container"];
var _c1 = ["defaultbtn"];
var _c2 = ["menu"];
'use strict';

    var SplitButton = /** @class */ (function () {
        function SplitButton() {
            this.iconPos = 'left';
            this.onClick = new core.EventEmitter();
            this.onDropdownClick = new core.EventEmitter();
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
        }
        SplitButton.prototype.onDefaultButtonClick = function (event) {
            this.onClick.emit(event);
        };
        SplitButton.prototype.onDropdownButtonClick = function (event) {
            this.onDropdownClick.emit(event);
            this.menu.toggle({ currentTarget: this.containerViewChild.nativeElement, relativeAlign: this.appendTo == null });
        };
SplitButton.ɵfac = function SplitButton_Factory(t) { return new (t || SplitButton)(); };
SplitButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SplitButton, selectors: [["p-splitButton"]], viewQuery: function SplitButton_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.buttonViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menu = _t.first);
    } }, inputs: { iconPos: "iconPos", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", icon: "icon", label: "label", style: "style", styleClass: "styleClass", menuStyle: "menuStyle", menuStyleClass: "menuStyleClass", disabled: "disabled", tabindex: "tabindex", appendTo: "appendTo", dir: "dir" }, outputs: { onClick: "onClick", onDropdownClick: "onDropdownClick" }, decls: 7, vars: 18, consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["type", "button", "pButton", "", 1, "p-splitbutton-defaultbutton", 3, "icon", "iconPos", "label", "disabled", "click"], ["defaultbtn", ""], ["type", "button", "pButton", "", "icon", "pi pi-chevron-down", 1, "p-splitbutton-menubutton", 3, "disabled", "click"], [3, "popup", "model", "styleClass", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["menu", ""]], template: function SplitButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2, 3);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_2_listener($event) { return ctx.onDefaultButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 4);
        ɵngcc0.ɵɵlistener("click", function SplitButton_Template_button_click_4_listener($event) { return ctx.onDropdownButtonClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "p-menu", 5, 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-splitbutton p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("icon", ctx.icon)("iconPos", ctx.iconPos)("label", ctx.label)("disabled", ctx.disabled);
        ɵngcc0.ɵɵattribute("tabindex", ctx.tabindex);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMap(ctx.menuStyle);
        ɵngcc0.ɵɵproperty("popup", true)("model", ctx.model)("styleClass", ctx.menuStyleClass)("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc2.ButtonDirective, ɵngcc3.Menu], styles: [".p-splitbutton{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{-ms-flex:1 1 auto;border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:-ms-flexbox;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:-ms-flexbox;display:flex}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButton, [{
        type: core.Component,
        args: [{
                selector: 'p-splitButton',
                template: "\n        <div #container [ngClass]=\"'p-splitbutton p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button #defaultbtn class=\"p-splitbutton-defaultbutton\" type=\"button\" pButton [icon]=\"icon\" [iconPos]=\"iconPos\" [label]=\"label\" (click)=\"onDefaultButtonClick($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\"></button>\n            <button type=\"button\" pButton class=\"p-splitbutton-menubutton\" icon=\"pi pi-chevron-down\" (click)=\"onDropdownButtonClick($event)\" [disabled]=\"disabled\"></button>\n            <p-menu #menu [popup]=\"true\" [model]=\"model\" [style]=\"menuStyle\" [styleClass]=\"menuStyleClass\" [appendTo]=\"appendTo\"\n                    [showTransitionOptions]=\"showTransitionOptions\" [hideTransitionOptions]=\"hideTransitionOptions\"></p-menu>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-splitbutton{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{-ms-flex:1 1 auto;border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:-ms-flexbox;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return []; }, { iconPos: [{
            type: core.Input
        }], onClick: [{
            type: core.Output
        }], onDropdownClick: [{
            type: core.Output
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], model: [{
            type: core.Input
        }], icon: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], menuStyle: [{
            type: core.Input
        }], menuStyleClass: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], dir: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], buttonViewChild: [{
            type: core.ViewChild,
            args: ['defaultbtn']
        }], menu: [{
            type: core.ViewChild,
            args: ['menu']
        }] }); })();
        return SplitButton;
    }());
    SplitButton.propDecorators = {
        model: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        iconPos: [{ type: core.Input }],
        label: [{ type: core.Input }],
        onClick: [{ type: core.Output }],
        onDropdownClick: [{ type: core.Output }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        menuStyle: [{ type: core.Input }],
        menuStyleClass: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        dir: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        buttonViewChild: [{ type: core.ViewChild, args: ['defaultbtn',] }],
        menu: [{ type: core.ViewChild, args: ['menu',] }]
    };
    var SplitButtonModule = /** @class */ (function () {
        function SplitButtonModule() {
        }
SplitButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SplitButtonModule });
SplitButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SplitButtonModule_Factory(t) { return new (t || SplitButtonModule)(); }, imports: [[common.CommonModule, button.ButtonModule, menu.MenuModule], ɵngcc2.ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SplitButtonModule, { declarations: [SplitButton], imports: [ɵngcc1.CommonModule, ɵngcc2.ButtonModule, ɵngcc3.MenuModule], exports: [SplitButton, ɵngcc2.ButtonModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SplitButtonModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, button.ButtonModule, menu.MenuModule],
                exports: [SplitButton, button.ButtonModule],
                declarations: [SplitButton]
            }]
    }], function () { return []; }, null); })();
        return SplitButtonModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SplitButton = SplitButton;
    exports.SplitButtonModule = SplitButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-splitbutton.umd.js.map