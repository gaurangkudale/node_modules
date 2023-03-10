(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/forms'),exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('primeng/dom'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('primeng/terminal', ['@angular/core','@angular/common','@angular/forms','exports', '@angular/core', '@angular/forms', '@angular/common', 'primeng/dom', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.ng.forms,(global.primeng = global.primeng || {}, global.primeng.terminal = {}), global.ng.core, global.ng.forms, global.ng.common, global.primeng.dom, global.rxjs));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, forms, common, dom, rxjs) { 
function Terminal_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.welcomeMessage);
} }
function Terminal_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "span", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "span", 9);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 10);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var command_r3 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.prompt);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.text);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(command_r3.response);
} }
'use strict';

    var TerminalService = /** @class */ (function () {
        function TerminalService() {
            this.commandSource = new rxjs.Subject();
            this.responseSource = new rxjs.Subject();
            this.commandHandler = this.commandSource.asObservable();
            this.responseHandler = this.responseSource.asObservable();
        }
        TerminalService.prototype.sendCommand = function (command) {
            if (command) {
                this.commandSource.next(command);
            }
        };
        TerminalService.prototype.sendResponse = function (response) {
            if (response) {
                this.responseSource.next(response);
            }
        };
TerminalService.ɵfac = function TerminalService_Factory(t) { return new (t || TerminalService)(); };
TerminalService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TerminalService, factory: function (t) { return TerminalService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TerminalService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();
        return TerminalService;
    }());

    var Terminal = /** @class */ (function () {
        function Terminal(el, terminalService, cd) {
            var _this = this;
            this.el = el;
            this.terminalService = terminalService;
            this.cd = cd;
            this.commands = [];
            this.subscription = terminalService.responseHandler.subscribe(function (response) {
                _this.commands[_this.commands.length - 1].response = response;
                _this.commandProcessed = true;
            });
        }
        Terminal.prototype.ngAfterViewInit = function () {
            this.container = dom.DomHandler.find(this.el.nativeElement, '.p-terminal')[0];
        };
        Terminal.prototype.ngAfterViewChecked = function () {
            if (this.commandProcessed) {
                this.container.scrollTop = this.container.scrollHeight;
                this.commandProcessed = false;
            }
        };
        Object.defineProperty(Terminal.prototype, "response", {
            set: function (value) {
                if (value) {
                    this.commands[this.commands.length - 1].response = value;
                    this.commandProcessed = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        Terminal.prototype.handleCommand = function (event) {
            if (event.keyCode == 13) {
                this.commands.push({ text: this.command });
                this.terminalService.sendCommand(this.command);
                this.command = '';
            }
        };
        Terminal.prototype.focus = function (element) {
            element.focus();
        };
        Terminal.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
Terminal.ɵfac = function Terminal_Factory(t) { return new (t || Terminal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(TerminalService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Terminal.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Terminal, selectors: [["p-terminal"]], inputs: { response: "response", welcomeMessage: "welcomeMessage", prompt: "prompt", style: "style", styleClass: "styleClass" }, decls: 9, vars: 8, consts: [[3, "ngClass", "ngStyle", "click"], [4, "ngIf"], [1, "p-terminal-content"], [4, "ngFor", "ngForOf"], [1, "p-terminal-prompt-container"], [1, "p-terminal-content-prompt"], ["type", "text", "autocomplete", "off", "autofocus", "", 1, "p-terminal-input", 3, "ngModel", "ngModelChange", "keydown"], ["in", ""], [1, "p-terminal-prompt"], [1, "p-terminal-command"], [1, "p-terminal-response"]], template: function Terminal_Template(rf, ctx) { if (rf & 1) {
        var _r4 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Terminal_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); var _r2 = ɵngcc0.ɵɵreference(8); return ctx.focus(_r2); });
        ɵngcc0.ɵɵtemplate(1, Terminal_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Terminal_div_3_Template, 7, 3, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "span", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "input", 6, 7);
        ɵngcc0.ɵɵlistener("ngModelChange", function Terminal_Template_input_ngModelChange_7_listener($event) { return ctx.command = $event; })("keydown", function Terminal_Template_input_keydown_7_listener($event) { return ctx.handleCommand($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-terminal p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.welcomeMessage);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.commands);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.prompt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.command);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-terminal-input{-ms-flex:1 1 auto;background-color:rgba(0,0,0,0);border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Terminal, [{
        type: core.Component,
        args: [{
                selector: 'p-terminal',
                template: "\n        <div [ngClass]=\"'p-terminal p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"focus(in)\">\n            <div *ngIf=\"welcomeMessage\">{{welcomeMessage}}</div>\n            <div class=\"p-terminal-content\">\n                <div *ngFor=\"let command of commands\">\n                    <span class=\"p-terminal-prompt\">{{prompt}}</span>\n                    <span class=\"p-terminal-command\">{{command.text}}</span>\n                    <div class=\"p-terminal-response\">{{command.response}}</div>\n                </div>\n            </div>\n            <div class=\"p-terminal-prompt-container\">\n                <span class=\"p-terminal-content-prompt\">{{prompt}}</span>\n                <input #in type=\"text\" [(ngModel)]=\"command\" class=\"p-terminal-input\" autocomplete=\"off\" (keydown)=\"handleCommand($event)\" autofocus>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-terminal{height:18rem;overflow:auto}.p-terminal-prompt-container{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-terminal-input{-ms-flex:1 1 auto;background-color:rgba(0,0,0,0);border:0;color:inherit;flex:1 1 auto;outline:0 none;padding:0}.p-terminal-input::-ms-clear{display:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: TerminalService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { response: [{
            type: core.Input
        }], welcomeMessage: [{
            type: core.Input
        }], prompt: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return Terminal;
    }());
    Terminal.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: TerminalService },
        { type: core.ChangeDetectorRef }
    ]; };
    Terminal.propDecorators = {
        welcomeMessage: [{ type: core.Input }],
        prompt: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        response: [{ type: core.Input }]
    };
    var TerminalModule = /** @class */ (function () {
        function TerminalModule() {
        }
TerminalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TerminalModule });
TerminalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TerminalModule_Factory(t) { return new (t || TerminalModule)(); }, imports: [[common.CommonModule, forms.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TerminalModule, { declarations: [Terminal], imports: [ɵngcc1.CommonModule, ɵngcc2.FormsModule], exports: [Terminal] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TerminalModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule],
                exports: [Terminal],
                declarations: [Terminal]
            }]
    }], function () { return []; }, null); })();
        return TerminalModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Terminal = Terminal;
    exports.TerminalModule = TerminalModule;
    exports.TerminalService = TerminalService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-terminal.umd.js.map