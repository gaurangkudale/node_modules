(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/forms'),require('@angular/common'),exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/inputtextarea', ['@angular/core','@angular/forms','@angular/common','exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.forms,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.inputtextarea = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, forms, common) { 'use strict';

    var InputTextarea = /** @class */ (function () {
        function InputTextarea(el, ngModel, control) {
            this.el = el;
            this.ngModel = ngModel;
            this.control = control;
            this.onResize = new core.EventEmitter();
        }
        InputTextarea.prototype.ngOnInit = function () {
            var _this = this;
            if (this.ngModel) {
                this.ngModelSubscription = this.ngModel.valueChanges.subscribe(function () {
                    _this.updateState();
                });
            }
            if (this.control) {
                this.ngControlSubscription = this.control.valueChanges.subscribe(function () {
                    _this.updateState();
                });
            }
        };
        InputTextarea.prototype.ngAfterViewInit = function () {
            if (this.autoResize)
                this.resize();
        };
        InputTextarea.prototype.onInput = function (e) {
            this.updateState();
        };
        InputTextarea.prototype.updateFilledState = function () {
            this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
        };
        InputTextarea.prototype.onFocus = function (e) {
            if (this.autoResize) {
                this.resize(e);
            }
        };
        InputTextarea.prototype.onBlur = function (e) {
            if (this.autoResize) {
                this.resize(e);
            }
        };
        InputTextarea.prototype.resize = function (event) {
            this.el.nativeElement.style.height = 'auto';
            this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
            if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
                this.el.nativeElement.style.overflowY = "scroll";
                this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
            }
            else {
                this.el.nativeElement.style.overflow = "hidden";
            }
            this.onResize.emit(event || {});
        };
        InputTextarea.prototype.updateState = function () {
            this.updateFilledState();
            if (this.autoResize) {
                this.resize();
            }
        };
        InputTextarea.prototype.ngOnDestroy = function () {
            if (this.ngModelSubscription) {
                this.ngModelSubscription.unsubscribe();
            }
            if (this.ngControlSubscription) {
                this.ngControlSubscription.unsubscribe();
            }
        };
InputTextarea.ɵfac = function InputTextarea_Factory(t) { return new (t || InputTextarea)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 8)); };
InputTextarea.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputTextarea, selectors: [["", "pInputTextarea", ""]], hostVars: 10, hostBindings: function InputTextarea_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputTextarea_input_HostBindingHandler($event) { return ctx.onInput($event); })("focus", function InputTextarea_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("blur", function InputTextarea_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtextarea", true)("p-inputtext", true)("p-component", true)("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
    } }, inputs: { autoResize: "autoResize" }, outputs: { onResize: "onResize" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextarea, [{
        type: core.Directive,
        args: [{
                selector: '[pInputTextarea]',
                host: {
                    '[class.p-inputtextarea]': 'true',
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled',
                    '[class.p-inputtextarea-resizable]': 'autoResize'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc1.NgControl, decorators: [{
                type: core.Optional
            }] }]; }, { onResize: [{
            type: core.Output
        }], onInput: [{
            type: core.HostListener,
            args: ['input', ['$event']]
        }], onFocus: [{
            type: core.HostListener,
            args: ['focus', ['$event']]
        }], onBlur: [{
            type: core.HostListener,
            args: ['blur', ['$event']]
        }], autoResize: [{
            type: core.Input
        }] }); })();
        return InputTextarea;
    }());
    InputTextarea.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: forms.NgModel, decorators: [{ type: core.Optional }] },
        { type: forms.NgControl, decorators: [{ type: core.Optional }] }
    ]; };
    InputTextarea.propDecorators = {
        autoResize: [{ type: core.Input }],
        onResize: [{ type: core.Output }],
        onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }],
        onFocus: [{ type: core.HostListener, args: ['focus', ['$event'],] }],
        onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
    };
    var InputTextareaModule = /** @class */ (function () {
        function InputTextareaModule() {
        }
InputTextareaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextareaModule });
InputTextareaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextareaModule_Factory(t) { return new (t || InputTextareaModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextareaModule, { declarations: [InputTextarea], imports: [ɵngcc2.CommonModule], exports: [InputTextarea] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextareaModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [InputTextarea],
                declarations: [InputTextarea]
            }]
    }], function () { return []; }, null); })();
        return InputTextareaModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputTextarea = InputTextarea;
    exports.InputTextareaModule = InputTextareaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-inputtextarea.umd.js.map