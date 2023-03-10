(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('primeng/dom'), require('primeng/utils'), require('@angular/forms'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/listbox', ['@angular/core','@angular/common','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api', 'primeng/dom', 'primeng/utils', '@angular/forms', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.listbox = {}), global.ng.core, global.ng.common, global.primeng.api, global.primeng.dom, global.primeng.utils, global.ng.forms, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, api, dom, utils, forms, ripple) { 
var _c0 = ["headerchkbox"];
function Listbox_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
var _c1 = function (a0) { return { "p-checkbox-disabled": a0 }; };
var _c2 = function (a0, a1) { return { "p-highlight": a0, "p-focus": a1 }; };
var _c3 = function (a0) { return { "pi pi-check": a0 }; };
function Listbox_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵelementStart(2, "input", 11);
    ɵngcc0.ɵɵlistener("focus", function Listbox_div_2_div_1_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onHeaderCheckboxFocus(); })("blur", function Listbox_div_2_div_1_Template_input_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onHeaderCheckboxBlur(); })("keydown.space", function Listbox_div_2_div_1_Template_input_keydown_space_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.toggleAll($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 12, 13);
    ɵngcc0.ɵɵlistener("click", function Listbox_div_2_div_1_Template_div_click_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.toggleAll($event); });
    ɵngcc0.ɵɵelement(5, "span", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, ctx_r5.disabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("checked", ctx_r5.allChecked);
    ɵngcc0.ɵɵattribute("disabled", ctx_r5.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c2, ctx_r5.allChecked, ctx_r5.headerCheckboxFocus));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c3, ctx_r5.allChecked));
} }
function Listbox_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵelementStart(1, "input", 16);
    ɵngcc0.ɵɵlistener("input", function Listbox_div_2_div_2_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.onFilter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(2, "span", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r6.filterValue || "")("disabled", ctx_r6.disabled);
    ɵngcc0.ɵɵattribute("placeholder", ctx_r6.filterPlaceHolder)("aria-label", ctx_r6.ariaFilterLabel);
} }
function Listbox_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, Listbox_div_2_div_1_Template, 6, 12, "div", 7);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_2_div_2_Template, 3, 4, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.checkbox && ctx_r1.multiple && ctx_r1.showToggleAll);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filter);
} }
var _c4 = function (a0) { return { "p-highlight": a0 }; };
function Listbox_li_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵelement(2, "span", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r15 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r17 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c1, ctx_r17.disabled || option_r15.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c4, ctx_r17.isSelected(option_r15)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c3, ctx_r17.isSelected(option_r15)));
} }
function Listbox_li_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r15 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r15.label);
} }
function Listbox_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c5 = function (a1, a2) { return { "p-listbox-item": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c6 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function Listbox_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 18);
    ɵngcc0.ɵɵlistener("click", function Listbox_li_5_Template_li_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var option_r15 = ctx.$implicit; var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onOptionClick($event, option_r15); })("dblclick", function Listbox_li_5_Template_li_dblclick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var option_r15 = ctx.$implicit; var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onOptionDoubleClick($event, option_r15); })("touchend", function Listbox_li_5_Template_li_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var option_r15 = ctx.$implicit; var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onOptionTouchEnd($event, option_r15); })("keydown", function Listbox_li_5_Template_li_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var option_r15 = ctx.$implicit; var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onOptionKeyDown($event, option_r15); });
    ɵngcc0.ɵɵtemplate(1, Listbox_li_5_div_1_Template, 3, 9, "div", 7);
    ɵngcc0.ɵɵtemplate(2, Listbox_li_5_span_2_Template, 2, 1, "span", 19);
    ɵngcc0.ɵɵtemplate(3, Listbox_li_5_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r15 = ctx.$implicit;
    var i_r16 = ctx.index;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r2.isItemVisible(option_r15) ? "flex" : "none");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(10, _c5, ctx_r2.isSelected(option_r15), option_r15.disabled));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.disabled || option_r15.disabled ? null : "0")("aria-label", option_r15.label)("aria-selected", ctx_r2.isSelected(option_r15));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.checkbox && ctx_r2.multiple);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(13, _c6, option_r15, i_r16));
} }
function Listbox_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Listbox_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Listbox_div_6_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate);
} }
var _c7 = [[["p-header"]], [["p-footer"]]];
var _c8 = function (a1) { return { "p-listbox p-component": true, "p-disabled": a1 }; };
var _c9 = ["p-header", "p-footer"];
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

    var LISTBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Listbox; }),
        multi: true
    };
    var Listbox = /** @class */ (function () {
        function Listbox(el, cd) {
            this.el = el;
            this.cd = cd;
            this.checkbox = false;
            this.filter = false;
            this.filterMode = 'contains';
            this.metaKeySelection = true;
            this.showToggleAll = true;
            this.onChange = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onDblClick = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.disabledSelectedOptions = [];
        }
        Object.defineProperty(Listbox.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (val) {
                var opts = this.optionLabel ? utils.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
                this._options = opts;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Listbox.prototype, "filterValue", {
            get: function () {
                return this._filterValue;
            },
            set: function (val) {
                this._filterValue = val;
            },
            enumerable: false,
            configurable: true
        });
        Listbox.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'item':
                        _this.itemTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.itemTemplate = item.template;
                        break;
                }
            });
        };
        Listbox.prototype.writeValue = function (value) {
            this.value = value;
            this.setDisabledSelectedOptions();
            this.cd.markForCheck();
        };
        Listbox.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Listbox.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Listbox.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        Listbox.prototype.onOptionClick = function (event, option) {
            if (this.disabled || option.disabled || this.readonly) {
                return;
            }
            if (this.multiple) {
                if (this.checkbox)
                    this.onOptionClickCheckbox(event, option);
                else
                    this.onOptionClickMultiple(event, option);
            }
            else {
                this.onOptionClickSingle(event, option);
            }
            this.onClick.emit({
                originalEvent: event,
                option: option,
                value: this.value
            });
            this.optionTouched = false;
        };
        Listbox.prototype.onOptionTouchEnd = function (event, option) {
            if (this.disabled || option.disabled || this.readonly) {
                return;
            }
            this.optionTouched = true;
        };
        Listbox.prototype.onOptionDoubleClick = function (event, option) {
            if (this.disabled || option.disabled || this.readonly) {
                return;
            }
            this.onDblClick.emit({
                originalEvent: event,
                option: option,
                value: this.value
            });
        };
        Listbox.prototype.onOptionClickSingle = function (event, option) {
            var selected = this.isSelected(option);
            var valueChanged = false;
            var metaSelection = this.optionTouched ? false : this.metaKeySelection;
            if (metaSelection) {
                var metaKey = (event.metaKey || event.ctrlKey);
                if (selected) {
                    if (metaKey) {
                        this.value = null;
                        valueChanged = true;
                    }
                }
                else {
                    this.value = option.value;
                    valueChanged = true;
                }
            }
            else {
                this.value = selected ? null : option.value;
                valueChanged = true;
            }
            if (valueChanged) {
                this.onModelChange(this.value);
                this.onChange.emit({
                    originalEvent: event,
                    value: this.value
                });
            }
        };
        Listbox.prototype.onOptionClickMultiple = function (event, option) {
            var selected = this.isSelected(option);
            var valueChanged = false;
            var metaSelection = this.optionTouched ? false : this.metaKeySelection;
            if (metaSelection) {
                var metaKey = (event.metaKey || event.ctrlKey);
                if (selected) {
                    if (metaKey) {
                        this.removeOption(option);
                    }
                    else {
                        this.value = [option.value];
                    }
                    valueChanged = true;
                }
                else {
                    this.value = (metaKey) ? this.value || [] : [];
                    this.value = __spread(this.value, [option.value]);
                    valueChanged = true;
                }
            }
            else {
                if (selected) {
                    this.removeOption(option);
                }
                else {
                    this.value = __spread(this.value || [], [option.value]);
                }
                valueChanged = true;
            }
            if (valueChanged) {
                this.onModelChange(this.value);
                this.onChange.emit({
                    originalEvent: event,
                    value: this.value
                });
            }
        };
        Listbox.prototype.onOptionClickCheckbox = function (event, option) {
            if (this.disabled || this.readonly) {
                return;
            }
            var selected = this.isSelected(option);
            if (selected) {
                this.removeOption(option);
            }
            else {
                this.value = this.value ? this.value : [];
                this.value = __spread(this.value, [option.value]);
            }
            this.onModelChange(this.value);
            this.onChange.emit({
                originalEvent: event,
                value: this.value
            });
        };
        Listbox.prototype.removeOption = function (option) {
            var _this = this;
            this.value = this.value.filter(function (val) { return !utils.ObjectUtils.equals(val, option.value, _this.dataKey); });
        };
        Listbox.prototype.isSelected = function (option) {
            var e_1, _a;
            var selected = false;
            if (this.multiple) {
                if (this.value) {
                    try {
                        for (var _b = __values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var val = _c.value;
                            if (utils.ObjectUtils.equals(val, option.value, this.dataKey)) {
                                selected = true;
                                break;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            else {
                selected = utils.ObjectUtils.equals(this.value, option.value, this.dataKey);
            }
            return selected;
        };
        Object.defineProperty(Listbox.prototype, "allChecked", {
            get: function () {
                if (this.filterValue) {
                    return this.allFilteredSelected();
                }
                else {
                    var optionCount = this.getEnabledOptionCount();
                    var disabledSelectedOptionCount = this.disabledSelectedOptions.length;
                    return this.value && this.options && (this.value.length > 0 && this.value.length == optionCount + disabledSelectedOptionCount);
                }
            },
            enumerable: false,
            configurable: true
        });
        Listbox.prototype.getEnabledOptionCount = function () {
            var e_2, _a;
            if (this.options) {
                var count = 0;
                try {
                    for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var opt = _c.value;
                        if (!opt.disabled) {
                            count++;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return count;
            }
            else {
                return 0;
            }
        };
        Listbox.prototype.allFilteredSelected = function () {
            var e_3, _a;
            var allSelected;
            var options = this.filterValue ? this.getFilteredOptions() : this.options;
            if (this.value && options && options.length) {
                allSelected = true;
                try {
                    for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var opt = _c.value;
                        if (this.isItemVisible(opt)) {
                            if (!this.isSelected(opt)) {
                                allSelected = false;
                                break;
                            }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            return allSelected;
        };
        Listbox.prototype.onFilter = function (event) {
            this._filterValue = event.target.value;
        };
        Listbox.prototype.toggleAll = function (event) {
            if (this.disabled || this.readonly || !this.options || this.options.length === 0) {
                return;
            }
            if (this.allChecked) {
                if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                    var value = [];
                    value = __spread(this.disabledSelectedOptions);
                    this.value = value;
                }
                else {
                    this.value = [];
                }
            }
            else {
                if (this.options) {
                    this.value = [];
                    if (this.disabledSelectedOptions && this.disabledSelectedOptions.length > 0) {
                        this.value = __spread(this.disabledSelectedOptions);
                    }
                    for (var i = 0; i < this.options.length; i++) {
                        var opt = this.options[i];
                        if (this.isItemVisible(opt) && !opt.disabled) {
                            this.value.push(opt.value);
                        }
                    }
                }
            }
            this.onModelChange(this.value);
            this.onChange.emit({ originalEvent: event, value: this.value });
            event.preventDefault();
        };
        Listbox.prototype.isItemVisible = function (option) {
            if (this.filterValue) {
                var visible = void 0;
                if (this.filterMode) {
                    visible = utils.FilterUtils[this.filterMode](option.label, this.filterValue, this.filterLocale);
                }
                else {
                    visible = true;
                }
                return visible;
            }
            else {
                return true;
            }
        };
        Listbox.prototype.onOptionKeyDown = function (event, option) {
            if (this.readonly) {
                return;
            }
            var item = event.currentTarget;
            switch (event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(item);
                    if (nextItem) {
                        nextItem.focus();
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    var prevItem = this.findPrevItem(item);
                    if (prevItem) {
                        prevItem.focus();
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    this.onOptionClick(event, option);
                    event.preventDefault();
                    break;
            }
        };
        Listbox.prototype.findNextItem = function (item) {
            var nextItem = item.nextElementSibling;
            if (nextItem)
                return dom.DomHandler.hasClass(nextItem, 'p-disabled') || dom.DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        };
        Listbox.prototype.findPrevItem = function (item) {
            var prevItem = item.previousElementSibling;
            if (prevItem)
                return dom.DomHandler.hasClass(prevItem, 'p-disabled') || dom.DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        };
        Listbox.prototype.getFilteredOptions = function () {
            var filteredOptions = [];
            if (this.filterValue) {
                for (var i = 0; i < this.options.length; i++) {
                    var opt = this.options[i];
                    if (this.isItemVisible(opt) && !opt.disabled) {
                        filteredOptions.push(opt);
                    }
                }
                return filteredOptions;
            }
            else {
                return this.options;
            }
        };
        Listbox.prototype.onHeaderCheckboxFocus = function () {
            this.headerCheckboxFocus = true;
        };
        Listbox.prototype.onHeaderCheckboxBlur = function () {
            this.headerCheckboxFocus = false;
        };
        Listbox.prototype.setDisabledSelectedOptions = function () {
            var e_4, _a;
            if (this.options) {
                this.disabledSelectedOptions = [];
                if (this.value) {
                    try {
                        for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var opt = _c.value;
                            if (opt.disabled && this.isSelected(opt)) {
                                this.disabledSelectedOptions.push(opt.value);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        };
Listbox.ɵfac = function Listbox_Factory(t) { return new (t || Listbox)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Listbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Listbox, selectors: [["p-listbox"]], contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Listbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
    } }, inputs: { checkbox: "checkbox", filter: "filter", filterMode: "filterMode", metaKeySelection: "metaKeySelection", showToggleAll: "showToggleAll", options: "options", filterValue: "filterValue", disabled: "disabled", multiple: "multiple", style: "style", styleClass: "styleClass", listStyle: "listStyle", listStyleClass: "listStyleClass", readonly: "readonly", filterLocale: "filterLocale", dataKey: "dataKey", optionLabel: "optionLabel", ariaFilterLabel: "ariaFilterLabel", filterPlaceHolder: "filterPlaceHolder" }, outputs: { onChange: "onChange", onClick: "onClick", onDblClick: "onDblClick" }, features: [ɵngcc0.ɵɵProvidersFeature([LISTBOX_VALUE_ACCESSOR])], ngContentSelectors: _c9, decls: 7, vars: 14, consts: [[3, "ngClass", "ngStyle"], ["class", "p-listbox-header", 4, "ngIf"], ["role", "listbox", "aria-multiselectable", "multiple", 1, "p-listbox-list"], ["pRipple", "", "role", "option", 3, "display", "ngClass", "click", "dblclick", "touchend", "keydown", 4, "ngFor", "ngForOf"], ["class", "p-listbox-footer", 4, "ngIf"], [1, "p-listbox-header"], [4, "ngTemplateOutlet"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], ["class", "p-listbox-filter-container", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "readonly", "readonly", 3, "checked", "focus", "blur", "keydown.space"], [1, "p-checkbox-box", 3, "ngClass", "click"], ["headerchkbox", ""], [1, "p-checkbox-icon", 3, "ngClass"], [1, "p-listbox-filter-container"], ["type", "text", 1, "p-listbox-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input"], [1, "p-listbox-filter-icon", "pi", "pi-search"], ["pRipple", "", "role", "option", 3, "ngClass", "click", "dblclick", "touchend", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-checkbox-box", 3, "ngClass"], [1, "p-listbox-footer"]], template: function Listbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Listbox_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Listbox_div_2_Template, 3, 2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 0);
        ɵngcc0.ɵɵelementStart(4, "ul", 2);
        ɵngcc0.ɵɵtemplate(5, Listbox_li_5_Template, 4, 16, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, Listbox_div_6_Template, 3, 1, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx.disabled))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.listStyleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-listbox-list-wrapper")("ngStyle", ctx.listStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;overflow:hidden;position:relative}.p-listbox-header,.p-listbox-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-listbox-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Listbox, [{
        type: core.Component,
        args: [{
                selector: 'p-listbox',
                template: "\n    <div [ngClass]=\"{'p-listbox p-component': true, 'p-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n      <div class=\"p-listbox-header\" *ngIf=\"headerFacet || headerTemplate\">\n        <ng-content select=\"p-header\"></ng-content>\n        <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n      </div>\n      <div class=\"p-listbox-header\" *ngIf=\"(checkbox && multiple && showToggleAll) || filter\">\n        <div class=\"p-checkbox p-component\" *ngIf=\"checkbox && multiple && showToggleAll\" [ngClass]=\"{'p-checkbox-disabled': disabled}\">\n          <div class=\"p-hidden-accessible\">\n            <input type=\"checkbox\" readonly=\"readonly\" [checked]=\"allChecked\" (focus)=\"onHeaderCheckboxFocus()\" (blur)=\"onHeaderCheckboxBlur()\" (keydown.space)=\"toggleAll($event)\" [attr.disabled]=\"disabled\">\n          </div>\n          <div #headerchkbox class=\"p-checkbox-box\" [ngClass]=\"{'p-highlight': allChecked, 'p-focus': headerCheckboxFocus}\" (click)=\"toggleAll($event)\">\n            <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':allChecked}\"></span>\n          </div>\n        </div>\n        <div class=\"p-listbox-filter-container\" *ngIf=\"filter\">\n          <input type=\"text\" [value]=\"filterValue||''\" (input)=\"onFilter($event)\" class=\"p-listbox-filter p-inputtext p-component\" [disabled]=\"disabled\" [attr.placeholder]=\"filterPlaceHolder\" [attr.aria-label]=\"ariaFilterLabel\">\n          <span class=\"p-listbox-filter-icon pi pi-search\"></span>\n        </div>\n      </div>\n      <div [ngClass]=\"'p-listbox-list-wrapper'\" [ngStyle]=\"listStyle\" [class]=\"listStyleClass\">\n        <ul class=\"p-listbox-list\" role=\"listbox\" aria-multiselectable=\"multiple\">\n          <li *ngFor=\"let option of options; let i = index;\" [style.display]=\"isItemVisible(option) ? 'flex' : 'none'\" [attr.tabindex]=\"disabled || option.disabled ? null : '0'\" pRipple\n              [ngClass]=\"{'p-listbox-item':true,'p-highlight':isSelected(option), 'p-disabled': option.disabled}\" role=\"option\" [attr.aria-label]=\"option.label\"\n              [attr.aria-selected]=\"isSelected(option)\" (click)=\"onOptionClick($event,option)\" (dblclick)=\"onOptionDoubleClick($event,option)\" (touchend)=\"onOptionTouchEnd($event,option)\" (keydown)=\"onOptionKeyDown($event,option)\">\n            <div class=\"p-checkbox p-component\" *ngIf=\"checkbox && multiple\" [ngClass]=\"{'p-checkbox-disabled': disabled || option.disabled}\">\n              <div class=\"p-checkbox-box\" [ngClass]=\"{'p-highlight':isSelected(option)}\">\n                <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':isSelected(option)}\"></span>\n              </div>\n            </div>\n            <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n            <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n          </li>\n        </ul>\n      </div>\n      <div class=\"p-listbox-footer\" *ngIf=\"footerFacet || footerTemplate\">\n        <ng-content select=\"p-footer\"></ng-content>\n        <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n      </div>\n    </div>\n  ",
                providers: [LISTBOX_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;overflow:hidden;position:relative}.p-listbox-header,.p-listbox-item{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-listbox-filter-container{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}.p-listbox-filter-icon{margin-top:-.5rem;position:absolute;top:50%}.p-listbox-filter{width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { checkbox: [{
            type: core.Input
        }], filter: [{
            type: core.Input
        }], filterMode: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], showToggleAll: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onClick: [{
            type: core.Output
        }], onDblClick: [{
            type: core.Output
        }], options: [{
            type: core.Input
        }], filterValue: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], multiple: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], listStyle: [{
            type: core.Input
        }], listStyleClass: [{
            type: core.Input
        }], readonly: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], optionLabel: [{
            type: core.Input
        }], ariaFilterLabel: [{
            type: core.Input
        }], filterPlaceHolder: [{
            type: core.Input
        }], headerCheckboxViewChild: [{
            type: core.ViewChild,
            args: ['headerchkbox']
        }], headerFacet: [{
            type: core.ContentChild,
            args: [api.Header]
        }], footerFacet: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Listbox;
    }());
    Listbox.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    Listbox.propDecorators = {
        multiple: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        listStyle: [{ type: core.Input }],
        listStyleClass: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        checkbox: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        filterMode: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        showToggleAll: [{ type: core.Input }],
        optionLabel: [{ type: core.Input }],
        ariaFilterLabel: [{ type: core.Input }],
        filterPlaceHolder: [{ type: core.Input }],
        onChange: [{ type: core.Output }],
        onClick: [{ type: core.Output }],
        onDblClick: [{ type: core.Output }],
        headerCheckboxViewChild: [{ type: core.ViewChild, args: ['headerchkbox',] }],
        headerFacet: [{ type: core.ContentChild, args: [api.Header,] }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        options: [{ type: core.Input }],
        filterValue: [{ type: core.Input }]
    };
    var ListboxModule = /** @class */ (function () {
        function ListboxModule() {
        }
ListboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ListboxModule });
ListboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ListboxModule_Factory(t) { return new (t || ListboxModule)(); }, imports: [[common.CommonModule, api.SharedModule, ripple.RippleModule], ɵngcc3.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ListboxModule, { declarations: [Listbox], imports: [ɵngcc1.CommonModule, ɵngcc3.SharedModule, ɵngcc2.RippleModule], exports: [Listbox, ɵngcc3.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListboxModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, ripple.RippleModule],
                exports: [Listbox, api.SharedModule],
                declarations: [Listbox]
            }]
    }], function () { return []; }, null); })();
        return ListboxModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LISTBOX_VALUE_ACCESSOR = LISTBOX_VALUE_ACCESSOR;
    exports.Listbox = Listbox;
    exports.ListboxModule = ListboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-listbox.umd.js.map