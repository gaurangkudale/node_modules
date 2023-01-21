(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('primeng/api', ['@angular/core','@angular/common','exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.api = {}), global.ng.core, global.rxjs, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, i0, rxjs, common) { 
var _c0 = ["*"];
'use strict';

    var PrimeNGConfig = /** @class */ (function () {
        function PrimeNGConfig() {
            this.ripple = false;
        }
PrimeNGConfig.ɵfac = function PrimeNGConfig_Factory(t) { return new (t || PrimeNGConfig)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PrimeNGConfig, [{
        type: i0.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
        return PrimeNGConfig;
    }());
    PrimeNGConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PrimeNGConfig_Factory() { return new PrimeNGConfig(); }, token: PrimeNGConfig, providedIn: "root" });

    var ConfirmationService = /** @class */ (function () {
        function ConfirmationService() {
            this.requireConfirmationSource = new rxjs.Subject();
            this.acceptConfirmationSource = new rxjs.Subject();
            this.requireConfirmation$ = this.requireConfirmationSource.asObservable();
            this.accept = this.acceptConfirmationSource.asObservable();
        }
        ConfirmationService.prototype.confirm = function (confirmation) {
            this.requireConfirmationSource.next(confirmation);
            return this;
        };
        ConfirmationService.prototype.close = function () {
            this.requireConfirmationSource.next(null);
            return this;
        };
        ConfirmationService.prototype.onAccept = function () {
            this.acceptConfirmationSource.next();
        };
ConfirmationService.ɵfac = function ConfirmationService_Factory(t) { return new (t || ConfirmationService)(); };
ConfirmationService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ConfirmationService, factory: function (t) { return ConfirmationService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmationService, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
        return ConfirmationService;
    }());

    var MessageService = /** @class */ (function () {
        function MessageService() {
            this.messageSource = new rxjs.Subject();
            this.clearSource = new rxjs.Subject();
            this.messageObserver = this.messageSource.asObservable();
            this.clearObserver = this.clearSource.asObservable();
        }
        MessageService.prototype.add = function (message) {
            if (message) {
                this.messageSource.next(message);
            }
        };
        MessageService.prototype.addAll = function (messages) {
            if (messages && messages.length) {
                this.messageSource.next(messages);
            }
        };
        MessageService.prototype.clear = function (key) {
            this.clearSource.next(key || null);
        };
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MessageService, factory: function (t) { return MessageService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MessageService, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
        return MessageService;
    }());

    var Header = /** @class */ (function () {
        function Header() {
        }
Header.ɵfac = function Header_Factory(t) { return new (t || Header)(); };
Header.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Header, selectors: [["p-header"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function Header_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Header, [{
        type: i0.Component,
        args: [{
                selector: 'p-header',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return []; }, null); })();
        return Header;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
        }
Footer.ɵfac = function Footer_Factory(t) { return new (t || Footer)(); };
Footer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Footer, selectors: [["p-footer"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function Footer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Footer, [{
        type: i0.Component,
        args: [{
                selector: 'p-footer',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return []; }, null); })();
        return Footer;
    }());
    var PrimeTemplate = /** @class */ (function () {
        function PrimeTemplate(template) {
            this.template = template;
        }
        PrimeTemplate.prototype.getType = function () {
            return this.name;
        };
PrimeTemplate.ɵfac = function PrimeTemplate_Factory(t) { return new (t || PrimeTemplate)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
PrimeTemplate.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PrimeTemplate, selectors: [["", "pTemplate", ""]], inputs: { type: "type", name: ["pTemplate", "name"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PrimeTemplate, [{
        type: i0.Directive,
        args: [{
                selector: '[pTemplate]',
                host: {}
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { type: [{
            type: i0.Input
        }], name: [{
            type: i0.Input,
            args: ['pTemplate']
        }] }); })();
        return PrimeTemplate;
    }());
    PrimeTemplate.ctorParameters = function () { return [
        { type: i0.TemplateRef }
    ]; };
    PrimeTemplate.propDecorators = {
        type: [{ type: i0.Input }],
        name: [{ type: i0.Input, args: ['pTemplate',] }]
    };
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
SharedModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SharedModule, { declarations: [Header, Footer, PrimeTemplate], imports: [ɵngcc1.CommonModule], exports: [Header, Footer, PrimeTemplate] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SharedModule, [{
        type: i0.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Header, Footer, PrimeTemplate],
                declarations: [Header, Footer, PrimeTemplate]
            }]
    }], function () { return []; }, null); })();
        return SharedModule;
    }());

    var TreeDragDropService = /** @class */ (function () {
        function TreeDragDropService() {
            this.dragStartSource = new rxjs.Subject();
            this.dragStopSource = new rxjs.Subject();
            this.dragStart$ = this.dragStartSource.asObservable();
            this.dragStop$ = this.dragStopSource.asObservable();
        }
        TreeDragDropService.prototype.startDrag = function (event) {
            this.dragStartSource.next(event);
        };
        TreeDragDropService.prototype.stopDrag = function (event) {
            this.dragStopSource.next(event);
        };
TreeDragDropService.ɵfac = function TreeDragDropService_Factory(t) { return new (t || TreeDragDropService)(); };
TreeDragDropService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeDragDropService, factory: function (t) { return TreeDragDropService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeDragDropService, [{
        type: i0.Injectable
    }], function () { return []; }, null); })();
        return TreeDragDropService;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConfirmationService = ConfirmationService;
    exports.Footer = Footer;
    exports.Header = Header;
    exports.MessageService = MessageService;
    exports.PrimeNGConfig = PrimeNGConfig;
    exports.PrimeTemplate = PrimeTemplate;
    exports.SharedModule = SharedModule;
    exports.TreeDragDropService = TreeDragDropService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-api.umd.js.map