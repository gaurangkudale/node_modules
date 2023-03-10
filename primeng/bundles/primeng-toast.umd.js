(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api'), require('primeng/ripple'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('primeng/toast', ['@angular/core','@angular/common','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api', 'primeng/ripple', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.toast = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api, global.primeng.ripple, global.ng.animations));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, dom, api, ripple, animations) { 
var _c0 = ["container"];
var _c1 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-exclamation-triangle": a1, "pi-times-circle": a2, "pi-check": a3 }; };
function ToastItem_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementStart(2, "div", 7);
    ɵngcc0.ɵɵelementStart(3, "div", 8);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 9);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(3, _c1, ctx_r1.message.severity == "info", ctx_r1.message.severity == "warn", ctx_r1.message.severity == "error", ctx_r1.message.severity == "success"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.message.summary);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.message.detail);
} }
function ToastItem_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function ToastItem_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onCloseIconClick($event); })("keydown.enter", function ToastItem_button_4_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onCloseIconClick($event); });
    ɵngcc0.ɵɵelement(1, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} }
function ToastItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c2 = function (a0, a1, a2, a3) { return { showTransformParams: a0, hideTransformParams: a1, showTransitionParams: a2, hideTransitionParams: a3 }; };
var _c3 = function (a1) { return { value: "visible", params: a1 }; };
var _c4 = function (a0) { return { $implicit: a0 }; };
function Toast_p_toastItem_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-toastItem", 3);
    ɵngcc0.ɵɵlistener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onMessageClose($event); })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onAnimationStart($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var msg_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("message", msg_r2)("index", i_r3)("template", ctx_r1.template)("@toastAnimation", undefined)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
} }
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ToastItem = /** @class */ (function () {
        function ToastItem(zone) {
            this.zone = zone;
            this.onClose = new core.EventEmitter();
        }
        ToastItem.prototype.ngAfterViewInit = function () {
            this.initTimeout();
        };
        ToastItem.prototype.initTimeout = function () {
            var _this = this;
            if (!this.message.sticky) {
                this.zone.runOutsideAngular(function () {
                    _this.timeout = setTimeout(function () {
                        _this.onClose.emit({
                            index: _this.index,
                            message: _this.message
                        });
                    }, _this.message.life || 3000);
                });
            }
        };
        ToastItem.prototype.clearTimeout = function () {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        ToastItem.prototype.onMouseEnter = function () {
            this.clearTimeout();
        };
        ToastItem.prototype.onMouseLeave = function () {
            this.initTimeout();
        };
        ToastItem.prototype.onCloseIconClick = function (event) {
            this.clearTimeout();
            this.onClose.emit({
                index: this.index,
                message: this.message
            });
            event.preventDefault();
        };
        ToastItem.prototype.ngOnDestroy = function () {
            this.clearTimeout();
        };
ToastItem.ɵfac = function ToastItem_Factory(t) { return new (t || ToastItem)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ToastItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastItem, selectors: [["p-toastItem"]], viewQuery: function ToastItem_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { message: "message", index: "index", template: "template", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onClose: "onClose" }, decls: 6, vars: 16, consts: [[1, "p-toast-message", 3, "ngClass", "mouseenter", "mouseleave"], ["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "p-toast-message-content"], [4, "ngIf"], ["type", "button", "class", "p-toast-icon-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-toast-message-icon", "pi", 3, "ngClass"], [1, "p-toast-message-text"], [1, "p-toast-summary"], [1, "p-toast-detail"], ["type", "button", "pRipple", "", 1, "p-toast-icon-close", "p-link", 3, "click", "keydown.enter"], [1, "p-toast-icon-close-icon", "pi", "pi-times"]], template: function ToastItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastItem_ng_container_3_Template, 7, 8, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(4, ToastItem_button_4_Template, 2, 0, "button", 4);
        ɵngcc0.ɵɵtemplate(5, ToastItem_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", "p-toast-message-" + ctx.message.severity)("@messageState", ɵngcc0.ɵɵpureFunction1(12, _c3, ɵngcc0.ɵɵpureFunction4(7, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        ɵngcc0.ɵɵattribute("id", ctx.message.id);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message.closable !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c4, ctx.message));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], encapsulation: 2, data: { animation: [
            animations.trigger('messageState', [
                animations.state('visible', animations.style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                animations.transition('void => *', [
                    animations.style({ transform: '{{showTransformParams}}', opacity: 0 }),
                    animations.animate('{{showTransitionParams}}')
                ]),
                animations.transition('* => void', [
                    animations.animate(('{{hideTransitionParams}}'), animations.style({
                        height: 0,
                        opacity: 0,
                        transform: '{{hideTransformParams}}'
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastItem, [{
        type: core.Component,
        args: [{
                selector: 'p-toastItem',
                template: "\n        <div #container [attr.id]=\"message.id\" class=\"p-toast-message\" [ngClass]=\"'p-toast-message-' + message.severity\" [@messageState]=\"{value: 'visible', params: {showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\"\n                (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\">\n            <div class=\"p-toast-message-content\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n                <ng-container *ngIf=\"!template\">\n                    <span class=\"p-toast-message-icon pi\" [ngClass]=\"{'pi-info-circle': message.severity == 'info', 'pi-exclamation-triangle': message.severity == 'warn',\n                        'pi-times-circle': message.severity == 'error', 'pi-check' :message.severity == 'success'}\"></span>\n                    <div class=\"p-toast-message-text\">\n                        <div class=\"p-toast-summary\">{{message.summary}}</div>\n                        <div class=\"p-toast-detail\">{{message.detail}}</div>\n                    </div>\n                </ng-container>\n                <button type=\"button\" class=\"p-toast-icon-close p-link\" (click)=\"onCloseIconClick($event)\" (keydown.enter)=\"onCloseIconClick($event)\" *ngIf=\"message.closable !== false\" pRipple>\n                    <span class=\"p-toast-icon-close-icon pi pi-times\"></span>\n                </button>\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: message}\"></ng-container>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('messageState', [
                        animations.state('visible', animations.style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        animations.transition('void => *', [
                            animations.style({ transform: '{{showTransformParams}}', opacity: 0 }),
                            animations.animate('{{showTransitionParams}}')
                        ]),
                        animations.transition('* => void', [
                            animations.animate(('{{hideTransitionParams}}'), animations.style({
                                height: 0,
                                opacity: 0,
                                transform: '{{hideTransformParams}}'
                            }))
                        ])
                    ])
                ],
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, { onClose: [{
            type: core.Output
        }], message: [{
            type: core.Input
        }], index: [{
            type: core.Input
        }], template: [{
            type: core.Input
        }], showTransformOptions: [{
            type: core.Input
        }], hideTransformOptions: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }] }); })();
        return ToastItem;
    }());
    ToastItem.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    ToastItem.propDecorators = {
        message: [{ type: core.Input }],
        index: [{ type: core.Input }],
        template: [{ type: core.Input }],
        showTransformOptions: [{ type: core.Input }],
        hideTransformOptions: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        onClose: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }]
    };
    var Toast = /** @class */ (function () {
        function Toast(messageService, cd) {
            this.messageService = messageService;
            this.cd = cd;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.position = 'top-right';
            this.preventOpenDuplicates = false;
            this.preventDuplicates = false;
            this.showTransformOptions = 'translateY(100%)';
            this.hideTransformOptions = 'translateY(-100%)';
            this.showTransitionOptions = '300ms ease-out';
            this.hideTransitionOptions = '250ms ease-in';
            this.onClose = new core.EventEmitter();
        }
        Toast.prototype.ngOnInit = function () {
            var _this = this;
            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
                if (messages) {
                    if (messages instanceof Array) {
                        var filteredMessages = messages.filter(function (m) { return _this.canAdd(m); });
                        _this.add(filteredMessages);
                    }
                    else if (_this.canAdd(messages)) {
                        _this.add([messages]);
                    }
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
                if (key) {
                    if (_this.key === key) {
                        _this.messages = null;
                    }
                }
                else {
                    _this.messages = null;
                }
                _this.cd.markForCheck();
            });
        };
        Toast.prototype.add = function (messages) {
            this.messages = this.messages ? __spread(this.messages, messages) : __spread(messages);
            if (this.preventDuplicates) {
                this.messagesArchieve = this.messagesArchieve ? __spread(this.messagesArchieve, messages) : __spread(messages);
            }
            this.cd.markForCheck();
        };
        Toast.prototype.canAdd = function (message) {
            var allow = this.key === message.key;
            if (allow && this.preventOpenDuplicates) {
                allow = !this.containsMessage(this.messages, message);
            }
            if (allow && this.preventDuplicates) {
                allow = !this.containsMessage(this.messagesArchieve, message);
            }
            return allow;
        };
        Toast.prototype.containsMessage = function (collection, message) {
            if (!collection) {
                return false;
            }
            return collection.find(function (m) {
                return ((m.summary === message.summary) && (m.detail == message.detail) && (m.severity === message.severity));
            }) != null;
        };
        Toast.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'message':
                        _this.template = item.template;
                        break;
                    default:
                        _this.template = item.template;
                        break;
                }
            });
        };
        Toast.prototype.onMessageClose = function (event) {
            this.messages.splice(event.index, 1);
            this.onClose.emit({
                message: event.message
            });
            this.cd.detectChanges();
        };
        Toast.prototype.onAnimationStart = function (event) {
            if (event.fromState === 'void' && this.autoZIndex) {
                this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
        };
        Toast.prototype.ngOnDestroy = function () {
            if (this.messageSubscription) {
                this.messageSubscription.unsubscribe();
            }
            if (this.clearSubscription) {
                this.clearSubscription.unsubscribe();
            }
        };
Toast.ɵfac = function Toast_Factory(t) { return new (t || Toast)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.MessageService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Toast.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Toast, selectors: [["p-toast"]], contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Toast_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", position: "position", preventOpenDuplicates: "preventOpenDuplicates", preventDuplicates: "preventDuplicates", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", key: "key", style: "style", styleClass: "styleClass" }, outputs: { onClose: "onClose" }, decls: 3, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose"]], template: function Toast_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, Toast_p_toastItem_2_Template, 1, 8, "p-toastItem", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-toast p-component p-toast-" + ctx.position)("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.messages);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ToastItem], styles: [".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex}.p-toast-message-text{-ms-flex:1 1 auto;flex:1 1 auto}.p-toast-top-right{right:20px;top:20px}.p-toast-top-left{left:20px;top:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{left:50%;margin-left:-10em;top:20px}.p-toast-bottom-center{bottom:20px;left:50%;margin-left:-10em}.p-toast-center{-ms-transform:translate(-50%,-50%);left:50%;min-width:20vw;top:50%;transform:translate(-50%,-50%)}.p-toast-icon-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}"], encapsulation: 2, data: { animation: [
            animations.trigger('toastAnimation', [
                animations.transition(':enter, :leave', [
                    animations.query('@*', animations.animateChild())
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Toast, [{
        type: core.Component,
        args: [{
                selector: 'p-toast',
                template: "\n        <div #container [ngClass]=\"'p-toast p-component p-toast-' + position\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <p-toastItem *ngFor=\"let msg of messages; let i=index\" [message]=\"msg\" [index]=\"i\" (onClose)=\"onMessageClose($event)\"\n                    [template]=\"template\" @toastAnimation (@toastAnimation.start)=\"onAnimationStart($event)\" \n                    [showTransformOptions]=\"showTransformOptions\" [hideTransformOptions]=\"hideTransformOptions\" \n                    [showTransitionOptions]=\"showTransitionOptions\" [hideTransitionOptions]=\"hideTransitionOptions\"></p-toastItem>\n        </div>\n    ",
                animations: [
                    animations.trigger('toastAnimation', [
                        animations.transition(':enter, :leave', [
                            animations.query('@*', animations.animateChild())
                        ])
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex}.p-toast-message-text{-ms-flex:1 1 auto;flex:1 1 auto}.p-toast-top-right{right:20px;top:20px}.p-toast-top-left{left:20px;top:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{left:50%;margin-left:-10em;top:20px}.p-toast-bottom-center{bottom:20px;left:50%;margin-left:-10em}.p-toast-center{-ms-transform:translate(-50%,-50%);left:50%;min-width:20vw;top:50%;transform:translate(-50%,-50%)}.p-toast-icon-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}"]
            }]
    }], function () { return [{ type: ɵngcc3.MessageService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], position: [{
            type: core.Input
        }], preventOpenDuplicates: [{
            type: core.Input
        }], preventDuplicates: [{
            type: core.Input
        }], showTransformOptions: [{
            type: core.Input
        }], hideTransformOptions: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], onClose: [{
            type: core.Output
        }], key: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Toast;
    }());
    Toast.ctorParameters = function () { return [
        { type: api.MessageService },
        { type: core.ChangeDetectorRef }
    ]; };
    Toast.propDecorators = {
        key: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        position: [{ type: core.Input }],
        preventOpenDuplicates: [{ type: core.Input }],
        preventDuplicates: [{ type: core.Input }],
        showTransformOptions: [{ type: core.Input }],
        hideTransformOptions: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        onClose: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var ToastModule = /** @class */ (function () {
        function ToastModule() {
        }
ToastModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastModule });
ToastModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastModule_Factory(t) { return new (t || ToastModule)(); }, imports: [[common.CommonModule, ripple.RippleModule], ɵngcc3.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastModule, { declarations: [Toast, ToastItem], imports: [ɵngcc1.CommonModule, ɵngcc2.RippleModule], exports: [Toast, ɵngcc3.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [Toast, api.SharedModule],
                declarations: [Toast, ToastItem]
            }]
    }], function () { return []; }, null); })();
        return ToastModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Toast = Toast;
    exports.ToastItem = ToastItem;
    exports.ToastModule = ToastModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-toast.umd.js.map