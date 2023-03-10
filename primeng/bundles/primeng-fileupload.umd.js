(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/platform-browser'),require('@angular/common/http'),require('@angular/common'),require('primeng/ripple'),require('primeng/messages'),require('primeng/button'),require('primeng/progressbar'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('primeng/button'), require('primeng/messages'), require('primeng/progressbar'), require('primeng/dom'), require('primeng/api'), require('primeng/ripple'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('primeng/fileupload', ['@angular/core','@angular/platform-browser','@angular/common/http','@angular/common','primeng/ripple','primeng/messages','primeng/button','primeng/progressbar','primeng/api','exports', '@angular/core', '@angular/common', '@angular/platform-browser', 'primeng/button', 'primeng/messages', 'primeng/progressbar', 'primeng/dom', 'primeng/api', 'primeng/ripple', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.platformBrowser,global.ng.common.http,global.ng.common,global.primeng.ripple,global.primeng.messages,global.primeng.button,global.primeng.progressbar,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.fileupload = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.primeng.button, global.primeng.messages, global.primeng.progressbar, global.primeng.dom, global.primeng.api, global.primeng.ripple, global.ng.common.http));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,exports, core, common, platformBrowser, button, messages, progressbar, dom, api, ripple, http) { 
var _c0 = ["advancedfileinput"];
var _c1 = ["basicfileinput"];
var _c2 = ["content"];
function FileUpload_div_0_p_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-button", 17);
    ɵngcc0.ɵɵlistener("onClick", function FileUpload_div_0_p_button_8_Template_p_button_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.upload(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("label", ctx_r3.uploadLabel)("icon", ctx_r3.uploadIcon)("disabled", !ctx_r3.hasFiles() || ctx_r3.isFileLimitExceeded());
} }
function FileUpload_div_0_p_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-button", 17);
    ɵngcc0.ɵɵlistener("onClick", function FileUpload_div_0_p_button_9_Template_p_button_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.clear(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("label", ctx_r4.cancelLabel)("icon", ctx_r4.cancelIcon)("disabled", !ctx_r4.hasFiles() || ctx_r4.uploading);
} }
function FileUpload_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function FileUpload_div_0_p_progressBar_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "p-progressBar", 18);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("value", ctx_r7.progress)("showValue", false);
} }
function FileUpload_div_0_div_15_div_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 25);
} if (rf & 2) {
    var file_r17 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r19 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("src", file_r17.objectURL, ɵngcc0.ɵɵsanitizeUrl)("width", ctx_r19.previewWidth);
} }
function FileUpload_div_0_div_15_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, FileUpload_div_0_div_15_div_1_div_1_img_2_Template, 1, 2, "img", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div");
    ɵngcc0.ɵɵelementStart(8, "button", 24);
    ɵngcc0.ɵɵlistener("click", function FileUpload_div_0_div_15_div_1_div_1_Template_button_click_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var i_r18 = ctx.index; var ctx_r21 = ɵngcc0.ɵɵnextContext(4); return ctx_r21.remove($event, i_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r17 = ctx.$implicit;
    var ctx_r16 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.isImage(file_r17));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(file_r17.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.formatSize(file_r17.size));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r16.uploading);
} }
function FileUpload_div_0_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_1_div_1_Template, 9, 4, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.files);
} }
function FileUpload_div_0_div_15_div_2_ng_template_1_Template(rf, ctx) { }
function FileUpload_div_0_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_2_ng_template_1_Template, 0, 0, "ng-template", 26);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r15.files)("ngForTemplate", ctx_r15.fileTemplate);
} }
function FileUpload_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtemplate(1, FileUpload_div_0_div_15_div_1_Template, 2, 1, "div", 20);
    ɵngcc0.ɵɵtemplate(2, FileUpload_div_0_div_15_div_2_Template, 2, 2, "div", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r8.fileTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.fileTemplate);
} }
function FileUpload_div_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c3 = function (a0, a1) { return { "p-focus": a0, "p-disabled": a1 }; };
var _c4 = function (a0) { return { $implicit: a0 }; };
function FileUpload_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelementStart(2, "span", 4);
    ɵngcc0.ɵɵlistener("focus", function FileUpload_div_0_Template_span_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onFocus(); })("blur", function FileUpload_div_0_Template_span_blur_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onBlur(); })("click", function FileUpload_div_0_Template_span_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.choose(); })("keydown.enter", function FileUpload_div_0_Template_span_keydown_enter_2_listener() { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.choose(); });
    ɵngcc0.ɵɵelementStart(3, "input", 5, 6);
    ɵngcc0.ɵɵlistener("change", function FileUpload_div_0_Template_input_change_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onFileSelect($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(5, "span", 7);
    ɵngcc0.ɵɵelementStart(6, "span", 8);
    ɵngcc0.ɵɵtext(7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, FileUpload_div_0_p_button_8_Template, 1, 3, "p-button", 9);
    ɵngcc0.ɵɵtemplate(9, FileUpload_div_0_p_button_9_Template, 1, 3, "p-button", 9);
    ɵngcc0.ɵɵtemplate(10, FileUpload_div_0_ng_container_10_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "div", 11, 12);
    ɵngcc0.ɵɵlistener("dragenter", function FileUpload_div_0_Template_div_dragenter_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onDragEnter($event); })("dragleave", function FileUpload_div_0_Template_div_dragleave_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onDragLeave($event); })("drop", function FileUpload_div_0_Template_div_drop_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.onDrop($event); });
    ɵngcc0.ɵɵtemplate(13, FileUpload_div_0_p_progressBar_13_Template, 1, 2, "p-progressBar", 13);
    ɵngcc0.ɵɵelement(14, "p-messages", 14);
    ɵngcc0.ɵɵtemplate(15, FileUpload_div_0_div_15_Template, 3, 2, "div", 15);
    ɵngcc0.ɵɵtemplate(16, FileUpload_div_0_ng_container_16_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-fileupload p-fileupload-advanced p-component")("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(22, _c3, ctx_r0.focus, ctx_r0.disabled || ctx_r0.isChooseDisabled()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("multiple", ctx_r0.multiple)("accept", ctx_r0.accept)("disabled", ctx_r0.disabled || ctx_r0.isChooseDisabled());
    ɵngcc0.ɵɵattribute("title", "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r0.chooseIcon);
    ɵngcc0.ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.chooseLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showUploadButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.auto && ctx_r0.showCancelButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.toolbarTemplate);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r0.msgs)("enableService", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasFiles());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(25, _c4, ctx_r0.files));
} }
function FileUpload_div_1_input_6_Template(rf, ctx) { if (rf & 1) {
    var _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 31, 32);
    ɵngcc0.ɵɵlistener("change", function FileUpload_div_1_input_6_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r36); var ctx_r35 = ɵngcc0.ɵɵnextContext(2); return ctx_r35.onFileSelect($event); })("focus", function FileUpload_div_1_input_6_Template_input_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); var ctx_r37 = ɵngcc0.ɵɵnextContext(2); return ctx_r37.onFocus(); })("blur", function FileUpload_div_1_input_6_Template_input_blur_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); var ctx_r38 = ɵngcc0.ɵɵnextContext(2); return ctx_r38.onBlur(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r33 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("accept", ctx_r33.accept)("multiple", ctx_r33.multiple)("disabled", ctx_r33.disabled);
} }
var _c5 = function (a1, a2, a3) { return { "p-button p-component p-fileupload-choose": true, "p-fil(eupload-choose-selected": a1, "p-focus": a2, "p-disabled": a3 }; };
function FileUpload_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵelement(1, "p-messages", 14);
    ɵngcc0.ɵɵelementStart(2, "span", 28);
    ɵngcc0.ɵɵlistener("mouseup", function FileUpload_div_1_Template_span_mouseup_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onBasicUploaderClick(); })("keydown", function FileUpload_div_1_Template_span_keydown_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.onBasicUploaderClick(); });
    ɵngcc0.ɵɵelement(3, "span", 29);
    ɵngcc0.ɵɵelementStart(4, "span", 8);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, FileUpload_div_1_input_6_Template, 2, 3, "input", 30);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r1.msgs)("enableService", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(9, _c5, ctx_r1.hasFiles(), ctx_r1.focus, ctx_r1.disabled))("ngStyle", ctx_r1.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.hasFiles() && !ctx_r1.auto ? ctx_r1.uploadIcon : ctx_r1.chooseIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.auto ? ctx_r1.chooseLabel : ctx_r1.hasFiles() ? ctx_r1.files[0].name : ctx_r1.chooseLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.hasFiles());
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

    var FileUpload = /** @class */ (function () {
        function FileUpload(el, sanitizer, zone, http, cd) {
            this.el = el;
            this.sanitizer = sanitizer;
            this.zone = zone;
            this.http = http;
            this.cd = cd;
            this.method = 'POST';
            this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
            this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
            this.invalidFileTypeMessageSummary = '{0}: Invalid file type, ';
            this.invalidFileTypeMessageDetail = 'allowed file types: {0}.';
            this.invalidFileLimitMessageDetail = 'limit is {0} at most.';
            this.invalidFileLimitMessageSummary = 'Maximum number of files exceeded, ';
            this.previewWidth = 50;
            this.chooseLabel = 'Choose';
            this.uploadLabel = 'Upload';
            this.cancelLabel = 'Cancel';
            this.chooseIcon = 'pi pi-plus';
            this.uploadIcon = 'pi pi-upload';
            this.cancelIcon = 'pi pi-times';
            this.showUploadButton = true;
            this.showCancelButton = true;
            this.mode = 'advanced';
            this.onBeforeUpload = new core.EventEmitter();
            this.onSend = new core.EventEmitter();
            this.onUpload = new core.EventEmitter();
            this.onError = new core.EventEmitter();
            this.onClear = new core.EventEmitter();
            this.onRemove = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onProgress = new core.EventEmitter();
            this.uploadHandler = new core.EventEmitter();
            this._files = [];
            this.progress = 0;
            this.uploadedFileCount = 0;
        }
        Object.defineProperty(FileUpload.prototype, "files", {
            get: function () {
                return this._files;
            },
            set: function (files) {
                this._files = [];
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (this.validate(file)) {
                        if (this.isImage(file)) {
                            file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                        }
                        this._files.push(files[i]);
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        FileUpload.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'file':
                        _this.fileTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    case 'toolbar':
                        _this.toolbarTemplate = item.template;
                        break;
                    default:
                        _this.fileTemplate = item.template;
                        break;
                }
            });
        };
        FileUpload.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.mode === 'advanced') {
                this.zone.runOutsideAngular(function () {
                    if (_this.content)
                        _this.content.nativeElement.addEventListener('dragover', _this.onDragOver.bind(_this));
                });
            }
        };
        FileUpload.prototype.choose = function () {
            this.advancedFileInput.nativeElement.click();
        };
        FileUpload.prototype.onFileSelect = function (event) {
            if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
                this.duplicateIEEvent = false;
                return;
            }
            this.msgs = [];
            if (!this.multiple) {
                this.files = [];
            }
            var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (!this.isFileSelected(file)) {
                    if (this.validate(file)) {
                        if (this.isImage(file)) {
                            file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                        }
                        this.files.push(files[i]);
                    }
                }
            }
            this.onSelect.emit({ originalEvent: event, files: files, currentFiles: this.files });
            if (this.fileLimit && this.mode == "advanced") {
                this.checkFileLimit();
            }
            if (this.hasFiles() && this.auto && (!(this.mode === "advanced") || !this.isFileLimitExceeded())) {
                this.upload();
            }
            if (event.type !== 'drop' && this.isIE11()) {
                this.clearIEInput();
            }
            else {
                this.clearInputElement();
            }
        };
        FileUpload.prototype.isFileSelected = function (file) {
            var e_1, _a;
            try {
                for (var _b = __values(this.files), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sFile = _c.value;
                    if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                        return true;
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
            return false;
        };
        FileUpload.prototype.isIE11 = function () {
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        };
        FileUpload.prototype.validate = function (file) {
            if (this.accept && !this.isFileTypeValid(file)) {
                this.msgs.push({
                    severity: 'error',
                    summary: this.invalidFileTypeMessageSummary.replace('{0}', file.name),
                    detail: this.invalidFileTypeMessageDetail.replace('{0}', this.accept)
                });
                return false;
            }
            if (this.maxFileSize && file.size > this.maxFileSize) {
                this.msgs.push({
                    severity: 'error',
                    summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                    detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
                });
                return false;
            }
            return true;
        };
        FileUpload.prototype.isFileTypeValid = function (file) {
            var e_2, _a;
            var acceptableTypes = this.accept.split(',').map(function (type) { return type.trim(); });
            try {
                for (var acceptableTypes_1 = __values(acceptableTypes), acceptableTypes_1_1 = acceptableTypes_1.next(); !acceptableTypes_1_1.done; acceptableTypes_1_1 = acceptableTypes_1.next()) {
                    var type = acceptableTypes_1_1.value;
                    var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                        : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
                    if (acceptable) {
                        return true;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (acceptableTypes_1_1 && !acceptableTypes_1_1.done && (_a = acceptableTypes_1.return)) _a.call(acceptableTypes_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return false;
        };
        FileUpload.prototype.getTypeClass = function (fileType) {
            return fileType.substring(0, fileType.indexOf('/'));
        };
        FileUpload.prototype.isWildcard = function (fileType) {
            return fileType.indexOf('*') !== -1;
        };
        FileUpload.prototype.getFileExtension = function (file) {
            return '.' + file.name.split('.').pop();
        };
        FileUpload.prototype.isImage = function (file) {
            return /^image\//.test(file.type);
        };
        FileUpload.prototype.onImageLoad = function (img) {
            window.URL.revokeObjectURL(img.src);
        };
        FileUpload.prototype.upload = function () {
            var _this = this;
            if (this.customUpload) {
                if (this.fileLimit) {
                    this.uploadedFileCount += this.files.length;
                }
                this.uploadHandler.emit({
                    files: this.files
                });
                this.cd.markForCheck();
            }
            else {
                this.uploading = true;
                this.msgs = [];
                var formData_1 = new FormData();
                this.onBeforeUpload.emit({
                    'formData': formData_1
                });
                for (var i = 0; i < this.files.length; i++) {
                    formData_1.append(this.name, this.files[i], this.files[i].name);
                }
                this.http.post(this.url, formData_1, {
                    headers: this.headers, reportProgress: true, observe: 'events', withCredentials: this.withCredentials
                }).subscribe(function (event) {
                    switch (event.type) {
                        case http.HttpEventType.Sent:
                            _this.onSend.emit({
                                originalEvent: event,
                                'formData': formData_1
                            });
                            break;
                        case http.HttpEventType.Response:
                            _this.uploading = false;
                            _this.progress = 0;
                            if (event['status'] >= 200 && event['status'] < 300) {
                                if (_this.fileLimit) {
                                    _this.uploadedFileCount += _this.files.length;
                                }
                                _this.onUpload.emit({ originalEvent: event, files: _this.files });
                            }
                            else {
                                _this.onError.emit({ files: _this.files });
                            }
                            _this.clear();
                            break;
                        case http.HttpEventType.UploadProgress: {
                            if (event['loaded']) {
                                _this.progress = Math.round((event['loaded'] * 100) / event['total']);
                            }
                            _this.onProgress.emit({ originalEvent: event, progress: _this.progress });
                            break;
                        }
                    }
                    _this.cd.markForCheck();
                }, function (error) {
                    _this.uploading = false;
                    _this.onError.emit({ files: _this.files, error: error });
                });
            }
        };
        FileUpload.prototype.clear = function () {
            this.files = [];
            this.onClear.emit();
            this.clearInputElement();
            this.cd.markForCheck();
        };
        FileUpload.prototype.remove = function (event, index) {
            this.clearInputElement();
            this.onRemove.emit({ originalEvent: event, file: this.files[index] });
            this.files.splice(index, 1);
        };
        FileUpload.prototype.isFileLimitExceeded = function () {
            if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focus) {
                this.focus = false;
            }
            return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
        };
        FileUpload.prototype.isChooseDisabled = function () {
            return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
        };
        FileUpload.prototype.checkFileLimit = function () {
            if (this.isFileLimitExceeded()) {
                this.msgs.push({
                    severity: 'error',
                    summary: this.invalidFileLimitMessageSummary.replace('{0}', this.fileLimit.toString()),
                    detail: this.invalidFileLimitMessageDetail.replace('{0}', this.fileLimit.toString())
                });
            }
        };
        FileUpload.prototype.clearInputElement = function () {
            if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
                this.advancedFileInput.nativeElement.value = '';
            }
            if (this.basicFileInput && this.basicFileInput.nativeElement) {
                this.basicFileInput.nativeElement.value = '';
            }
        };
        FileUpload.prototype.clearIEInput = function () {
            if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
                this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
                this.advancedFileInput.nativeElement.value = '';
            }
        };
        FileUpload.prototype.hasFiles = function () {
            return this.files && this.files.length > 0;
        };
        FileUpload.prototype.onDragEnter = function (e) {
            if (!this.disabled) {
                e.stopPropagation();
                e.preventDefault();
            }
        };
        FileUpload.prototype.onDragOver = function (e) {
            if (!this.disabled) {
                dom.DomHandler.addClass(this.content.nativeElement, 'p-fileupload-highlight');
                this.dragHighlight = true;
                e.stopPropagation();
                e.preventDefault();
            }
        };
        FileUpload.prototype.onDragLeave = function (event) {
            if (!this.disabled) {
                dom.DomHandler.removeClass(this.content.nativeElement, 'p-fileupload-highlight');
            }
        };
        FileUpload.prototype.onDrop = function (event) {
            if (!this.disabled) {
                dom.DomHandler.removeClass(this.content.nativeElement, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();
                var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
                var allowDrop = this.multiple || (files && files.length === 1);
                if (allowDrop) {
                    this.onFileSelect(event);
                }
            }
        };
        FileUpload.prototype.onFocus = function () {
            this.focus = true;
        };
        FileUpload.prototype.onBlur = function () {
            this.focus = false;
        };
        FileUpload.prototype.formatSize = function (bytes) {
            if (bytes == 0) {
                return '0 B';
            }
            var k = 1024, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        };
        FileUpload.prototype.onBasicUploaderClick = function () {
            if (this.hasFiles())
                this.upload();
            else
                this.basicFileInput.nativeElement.click();
        };
        FileUpload.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        FileUpload.prototype.ngOnDestroy = function () {
            if (this.content && this.content.nativeElement) {
                this.content.nativeElement.removeEventListener('dragover', this.onDragOver);
            }
        };
FileUpload.ɵfac = function FileUpload_Factory(t) { return new (t || FileUpload)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
FileUpload.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FileUpload, selectors: [["p-fileUpload"]], contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function FileUpload_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.advancedFileInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.basicFileInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { method: "method", invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary", invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail", invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary", invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail", invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail", invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary", previewWidth: "previewWidth", chooseLabel: "chooseLabel", uploadLabel: "uploadLabel", cancelLabel: "cancelLabel", chooseIcon: "chooseIcon", uploadIcon: "uploadIcon", cancelIcon: "cancelIcon", showUploadButton: "showUploadButton", showCancelButton: "showCancelButton", mode: "mode", files: "files", name: "name", url: "url", multiple: "multiple", accept: "accept", disabled: "disabled", auto: "auto", withCredentials: "withCredentials", maxFileSize: "maxFileSize", style: "style", styleClass: "styleClass", headers: "headers", customUpload: "customUpload", fileLimit: "fileLimit" }, outputs: { onBeforeUpload: "onBeforeUpload", onSend: "onSend", onUpload: "onUpload", onError: "onError", onClear: "onClear", onRemove: "onRemove", onSelect: "onSelect", onProgress: "onProgress", uploadHandler: "uploadHandler" }, decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["class", "p-fileupload p-fileupload-basic p-component", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "p-fileupload-buttonbar"], ["pRipple", "", "tabindex", "0", 1, "p-button", "p-component", "p-fileupload-choose", 3, "ngClass", "focus", "blur", "click", "keydown.enter"], ["type", "file", 3, "multiple", "accept", "disabled", "change"], ["advancedfileinput", ""], [3, "ngClass"], [1, "p-button-label"], ["type", "button", 3, "label", "icon", "disabled", "onClick", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-fileupload-content", 3, "dragenter", "dragleave", "drop"], ["content", ""], [3, "value", "showValue", 4, "ngIf"], [3, "value", "enableService"], ["class", "p-fileupload-files", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "label", "icon", "disabled", "onClick"], [3, "value", "showValue"], [1, "p-fileupload-files"], [4, "ngIf"], ["class", "p-fileupload-row", 4, "ngFor", "ngForOf"], [1, "p-fileupload-row"], [3, "src", "width", 4, "ngIf"], ["type", "button", "icon", "pi pi-times", "pButton", "", 3, "disabled", "click"], [3, "src", "width"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "p-fileupload", "p-fileupload-basic", "p-component"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "ngStyle", "mouseup", "keydown"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur", 4, "ngIf"], ["type", "file", 3, "accept", "multiple", "disabled", "change", "focus", "blur"], ["basicfileinput", ""]], template: function FileUpload_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FileUpload_div_0_Template, 17, 27, "div", 0);
        ɵngcc0.ɵɵtemplate(1, FileUpload_div_1_Template, 7, 13, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "advanced");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "basic");
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc4.Ripple, ɵngcc3.NgTemplateOutlet, ɵngcc5.Messages, ɵngcc6.Button, ɵngcc7.ProgressBar, ɵngcc3.NgForOf, ɵngcc6.ButtonDirective], styles: [".p-fileupload-content{position:relative}.p-fileupload-row{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-fileupload-row>div{-ms-flex:1 1 auto;flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{left:0;position:absolute;top:0;width:100%}.p-button.p-fileupload-choose{overflow:hidden;position:relative}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileUpload, [{
        type: core.Component,
        args: [{
                selector: 'p-fileUpload',
                template: "\n        <div [ngClass]=\"'p-fileupload p-fileupload-advanced p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"mode === 'advanced'\">\n            <div class=\"p-fileupload-buttonbar\">\n                <span class=\"p-button p-component p-fileupload-choose\" [ngClass]=\"{'p-focus': focus, 'p-disabled':disabled || isChooseDisabled()}\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" pRipple\n                    (click)=\"choose()\" (keydown.enter)=\"choose()\" tabindex=\"0\"> \n                    <input #advancedfileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled || isChooseDisabled()\" [attr.title]=\"''\">\n                    <span [ngClass]=\"'p-button-icon p-button-icon-left'\" [class]=\"chooseIcon\"></span>\n                    <span class=\"p-button-label\">{{chooseLabel}}</span>\n                </span>\n\n                <p-button *ngIf=\"!auto&&showUploadButton\" type=\"button\" [label]=\"uploadLabel\" [icon]=\"uploadIcon\" (onClick)=\"upload()\" [disabled]=\"!hasFiles() || isFileLimitExceeded()\"></p-button>\n                <p-button *ngIf=\"!auto&&showCancelButton\" type=\"button\" [label]=\"cancelLabel\" [icon]=\"cancelIcon\" (onClick)=\"clear()\" [disabled]=\"!hasFiles() ||\u00A0uploading\"></p-button>\n\n                <ng-container *ngTemplateOutlet=\"toolbarTemplate\"></ng-container>\n            </div>\n            <div #content class=\"p-fileupload-content\" (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n\n                <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n                <div class=\"p-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"p-fileupload-row\" *ngFor=\"let file of files; let i = index;\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div>\n                                <button type=\"button\" icon=\"pi pi-times\" pButton (click)=\"remove($event,i)\" [disabled]=\"uploading\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <ng-template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></ng-template>\n                    </div>\n                </div>\n                <ng-container *ngTemplateOutlet=\"contentTemplate; context: {$implicit: files}\"></ng-container>\n            </div>\n        </div>\n        <div class=\"p-fileupload p-fileupload-basic p-component\" *ngIf=\"mode === 'basic'\">\n            <p-messages [value]=\"msgs\" [enableService]=\"false\"></p-messages>\n            <span [ngClass]=\"{'p-button p-component p-fileupload-choose': true, 'p-fil(eupload-choose-selected': hasFiles(),'p-focus': focus, 'p-disabled':disabled}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" (mouseup)=\"onBasicUploaderClick()\" (keydown)=\"onBasicUploaderClick()\" tabindex=\"0\" pRipple>\n                <span class=\"p-button-icon p-button-icon-left pi\" [ngClass]=\"hasFiles()&&!auto ? uploadIcon : chooseIcon\"></span>\n                <span class=\"p-button-label\">{{auto ? chooseLabel : hasFiles() ? files[0].name : chooseLabel}}</span>\n                <input #basicfileinput type=\"file\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\"\n                    (change)=\"onFileSelect($event)\" *ngIf=\"!hasFiles()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </span>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-fileupload-content{position:relative}.p-fileupload-row{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-fileupload-row>div{-ms-flex:1 1 auto;flex:1 1 auto;width:25%}.p-fileupload-row>div:last-child{text-align:right}.p-fileupload-content .p-progressbar{left:0;position:absolute;top:0;width:100%}.p-button.p-fileupload-choose{overflow:hidden;position:relative}.p-button.p-fileupload-choose input[type=file],.p-fileupload-choose.p-fileupload-choose-selected input[type=file]{display:none}.p-fluid .p-fileupload .p-button{width:auto}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.HttpClient }, { type: ɵngcc0.ChangeDetectorRef }]; }, { method: [{
            type: core.Input
        }], invalidFileSizeMessageSummary: [{
            type: core.Input
        }], invalidFileSizeMessageDetail: [{
            type: core.Input
        }], invalidFileTypeMessageSummary: [{
            type: core.Input
        }], invalidFileTypeMessageDetail: [{
            type: core.Input
        }], invalidFileLimitMessageDetail: [{
            type: core.Input
        }], invalidFileLimitMessageSummary: [{
            type: core.Input
        }], previewWidth: [{
            type: core.Input
        }], chooseLabel: [{
            type: core.Input
        }], uploadLabel: [{
            type: core.Input
        }], cancelLabel: [{
            type: core.Input
        }], chooseIcon: [{
            type: core.Input
        }], uploadIcon: [{
            type: core.Input
        }], cancelIcon: [{
            type: core.Input
        }], showUploadButton: [{
            type: core.Input
        }], showCancelButton: [{
            type: core.Input
        }], mode: [{
            type: core.Input
        }], onBeforeUpload: [{
            type: core.Output
        }], onSend: [{
            type: core.Output
        }], onUpload: [{
            type: core.Output
        }], onError: [{
            type: core.Output
        }], onClear: [{
            type: core.Output
        }], onRemove: [{
            type: core.Output
        }], onSelect: [{
            type: core.Output
        }], onProgress: [{
            type: core.Output
        }], uploadHandler: [{
            type: core.Output
        }], files: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], url: [{
            type: core.Input
        }], multiple: [{
            type: core.Input
        }], accept: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], auto: [{
            type: core.Input
        }], withCredentials: [{
            type: core.Input
        }], maxFileSize: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], headers: [{
            type: core.Input
        }], customUpload: [{
            type: core.Input
        }], fileLimit: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }], advancedFileInput: [{
            type: core.ViewChild,
            args: ['advancedfileinput']
        }], basicFileInput: [{
            type: core.ViewChild,
            args: ['basicfileinput']
        }], content: [{
            type: core.ViewChild,
            args: ['content']
        }] }); })();
        return FileUpload;
    }());
    FileUpload.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: platformBrowser.DomSanitizer },
        { type: core.NgZone },
        { type: http.HttpClient },
        { type: core.ChangeDetectorRef }
    ]; };
    FileUpload.propDecorators = {
        name: [{ type: core.Input }],
        url: [{ type: core.Input }],
        method: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        accept: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        auto: [{ type: core.Input }],
        withCredentials: [{ type: core.Input }],
        maxFileSize: [{ type: core.Input }],
        invalidFileSizeMessageSummary: [{ type: core.Input }],
        invalidFileSizeMessageDetail: [{ type: core.Input }],
        invalidFileTypeMessageSummary: [{ type: core.Input }],
        invalidFileTypeMessageDetail: [{ type: core.Input }],
        invalidFileLimitMessageDetail: [{ type: core.Input }],
        invalidFileLimitMessageSummary: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        previewWidth: [{ type: core.Input }],
        chooseLabel: [{ type: core.Input }],
        uploadLabel: [{ type: core.Input }],
        cancelLabel: [{ type: core.Input }],
        chooseIcon: [{ type: core.Input }],
        uploadIcon: [{ type: core.Input }],
        cancelIcon: [{ type: core.Input }],
        showUploadButton: [{ type: core.Input }],
        showCancelButton: [{ type: core.Input }],
        mode: [{ type: core.Input }],
        headers: [{ type: core.Input }],
        customUpload: [{ type: core.Input }],
        fileLimit: [{ type: core.Input }],
        onBeforeUpload: [{ type: core.Output }],
        onSend: [{ type: core.Output }],
        onUpload: [{ type: core.Output }],
        onError: [{ type: core.Output }],
        onClear: [{ type: core.Output }],
        onRemove: [{ type: core.Output }],
        onSelect: [{ type: core.Output }],
        onProgress: [{ type: core.Output }],
        uploadHandler: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        advancedFileInput: [{ type: core.ViewChild, args: ['advancedfileinput',] }],
        basicFileInput: [{ type: core.ViewChild, args: ['basicfileinput',] }],
        content: [{ type: core.ViewChild, args: ['content',] }],
        files: [{ type: core.Input }]
    };
    var FileUploadModule = /** @class */ (function () {
        function FileUploadModule() {
        }
FileUploadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FileUploadModule });
FileUploadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); }, imports: [[common.CommonModule, api.SharedModule, button.ButtonModule, progressbar.ProgressBarModule, messages.MessagesModule, ripple.RippleModule], ɵngcc8.SharedModule, ɵngcc6.ButtonModule, ɵngcc7.ProgressBarModule, ɵngcc5.MessagesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FileUploadModule, { declarations: [FileUpload], imports: [ɵngcc3.CommonModule, ɵngcc8.SharedModule, ɵngcc6.ButtonModule, ɵngcc7.ProgressBarModule, ɵngcc5.MessagesModule, ɵngcc4.RippleModule], exports: [FileUpload, ɵngcc8.SharedModule, ɵngcc6.ButtonModule, ɵngcc7.ProgressBarModule, ɵngcc5.MessagesModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FileUploadModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, button.ButtonModule, progressbar.ProgressBarModule, messages.MessagesModule, ripple.RippleModule],
                exports: [FileUpload, api.SharedModule, button.ButtonModule, progressbar.ProgressBarModule, messages.MessagesModule],
                declarations: [FileUpload]
            }]
    }], function () { return []; }, null); })();
        return FileUploadModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FileUpload = FileUpload;
    exports.FileUploadModule = FileUploadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-fileupload.umd.js.map