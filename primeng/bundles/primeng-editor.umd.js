(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/api'), require('primeng/dom'), require('@angular/forms'), require('quill')) :
    typeof define === 'function' && define.amd ? define('primeng/editor', ['@angular/core','@angular/common','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/api', 'primeng/dom', '@angular/forms', 'quill'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.editor = {}), global.ng.core, global.ng.common, global.primeng.api, global.primeng.dom, global.ng.forms, global.Quill));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, api, dom, forms, Quill) { 
function Editor_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Editor_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Editor_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
function Editor_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "span", 5);
    ɵngcc0.ɵɵelementStart(2, "select", 6);
    ɵngcc0.ɵɵelementStart(3, "option", 7);
    ɵngcc0.ɵɵtext(4, "Heading");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "option", 8);
    ɵngcc0.ɵɵtext(6, "Subheading");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "option", 9);
    ɵngcc0.ɵɵtext(8, "Normal");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "select", 10);
    ɵngcc0.ɵɵelementStart(10, "option", 9);
    ɵngcc0.ɵɵtext(11, "Sans Serif");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "option", 11);
    ɵngcc0.ɵɵtext(13, "Serif");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "option", 12);
    ɵngcc0.ɵɵtext(15, "Monospace");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(16, "span", 5);
    ɵngcc0.ɵɵelement(17, "button", 13);
    ɵngcc0.ɵɵelement(18, "button", 14);
    ɵngcc0.ɵɵelement(19, "button", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(20, "span", 5);
    ɵngcc0.ɵɵelement(21, "select", 16);
    ɵngcc0.ɵɵelement(22, "select", 17);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(23, "span", 5);
    ɵngcc0.ɵɵelement(24, "button", 18);
    ɵngcc0.ɵɵelement(25, "button", 19);
    ɵngcc0.ɵɵelementStart(26, "select", 20);
    ɵngcc0.ɵɵelement(27, "option", 9);
    ɵngcc0.ɵɵelement(28, "option", 21);
    ɵngcc0.ɵɵelement(29, "option", 22);
    ɵngcc0.ɵɵelement(30, "option", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(31, "span", 5);
    ɵngcc0.ɵɵelement(32, "button", 24);
    ɵngcc0.ɵɵelement(33, "button", 25);
    ɵngcc0.ɵɵelement(34, "button", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(35, "span", 5);
    ɵngcc0.ɵɵelement(36, "button", 27);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = [[["p-header"]]];
var _c1 = ["p-header"];
'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var Quill__namespace = /*#__PURE__*/_interopNamespace(Quill);

    var EDITOR_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Editor; }),
        multi: true
    };
    var Editor = /** @class */ (function () {
        function Editor(el) {
            this.el = el;
            this.onTextChange = new core.EventEmitter();
            this.onSelectionChange = new core.EventEmitter();
            this.onInit = new core.EventEmitter();
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        Editor.prototype.ngAfterViewInit = function () {
            var _this = this;
            var editorElement = dom.DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-content');
            var toolbarElement = dom.DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-toolbar');
            var defaultModule = { toolbar: toolbarElement };
            var modules = this.modules ? Object.assign(Object.assign({}, defaultModule), this.modules) : defaultModule;
            this.quill = new Quill__namespace(editorElement, {
                modules: modules,
                placeholder: this.placeholder,
                readOnly: this.readonly,
                theme: 'snow',
                formats: this.formats,
                bounds: this.bounds,
                debug: this.debug,
                scrollingContainer: this.scrollingContainer
            });
            if (this.value) {
                this.quill.pasteHTML(this.value);
            }
            this.quill.on('text-change', function (delta, oldContents, source) {
                if (source === 'user') {
                    var html = editorElement.children[0].innerHTML;
                    var text = _this.quill.getText().trim();
                    if (html === '<p><br></p>') {
                        html = null;
                    }
                    _this.onTextChange.emit({
                        htmlValue: html,
                        textValue: text,
                        delta: delta,
                        source: source
                    });
                    _this.onModelChange(html);
                    _this.onModelTouched();
                }
            });
            this.quill.on('selection-change', function (range, oldRange, source) {
                _this.onSelectionChange.emit({
                    range: range,
                    oldRange: oldRange,
                    source: source
                });
            });
            this.onInit.emit({
                editor: this.quill
            });
        };
        Editor.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'toolbar':
                        _this.toolbarTemplate = item.template;
                        break;
                }
            });
        };
        Editor.prototype.writeValue = function (value) {
            this.value = value;
            if (this.quill) {
                if (value)
                    this.quill.pasteHTML(value);
                else
                    this.quill.setText('');
            }
        };
        Editor.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Editor.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Editor.prototype.getQuill = function () {
            return this.quill;
        };
        Object.defineProperty(Editor.prototype, "readonly", {
            get: function () {
                return this._readonly;
            },
            set: function (val) {
                this._readonly = val;
                if (this.quill) {
                    if (this._readonly)
                        this.quill.disable();
                    else
                        this.quill.enable();
                }
            },
            enumerable: false,
            configurable: true
        });
Editor.ɵfac = function Editor_Factory(t) { return new (t || Editor)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Editor.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Editor, selectors: [["p-editor"]], contentQueries: function Editor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.toolbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { readonly: "readonly", style: "style", styleClass: "styleClass", placeholder: "placeholder", formats: "formats", modules: "modules", bounds: "bounds", scrollingContainer: "scrollingContainer", debug: "debug" }, outputs: { onTextChange: "onTextChange", onSelectionChange: "onSelectionChange", onInit: "onInit" }, features: [ɵngcc0.ɵɵProvidersFeature([EDITOR_VALUE_ACCESSOR])], ngContentSelectors: _c1, decls: 4, vars: 6, consts: [[3, "ngClass"], ["class", "p-editor-toolbar", 4, "ngIf"], [1, "p-editor-content", 3, "ngStyle"], [1, "p-editor-toolbar"], [4, "ngTemplateOutlet"], [1, "ql-formats"], [1, "ql-header"], ["value", "1"], ["value", "2"], ["selected", ""], [1, "ql-font"], ["value", "serif"], ["value", "monospace"], ["aria-label", "Bold", "type", "button", 1, "ql-bold"], ["aria-label", "Italic", "type", "button", 1, "ql-italic"], ["aria-label", "Underline", "type", "button", 1, "ql-underline"], [1, "ql-color"], [1, "ql-background"], ["value", "ordered", "aria-label", "Ordered List", "type", "button", 1, "ql-list"], ["value", "bullet", "aria-label", "Unordered List", "type", "button", 1, "ql-list"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], ["aria-label", "Insert Link", "type", "button", 1, "ql-link"], ["aria-label", "Insert Image", "type", "button", 1, "ql-image"], ["aria-label", "Insert Code Block", "type", "button", 1, "ql-code-block"], ["aria-label", "Remove Styles", "type", "button", 1, "ql-clean"]], template: function Editor_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Editor_div_1_Template, 3, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Editor_div_2_Template, 37, 0, "div", 1);
        ɵngcc0.ɵɵelement(3, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-editor-container");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toolbar || ctx.toolbarTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.toolbar && !ctx.toolbarTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Editor, [{
        type: core.Component,
        args: [{
                selector: 'p-editor',
                template: "\n        <div [ngClass]=\"'p-editor-container'\" [class]=\"styleClass\">\n            <div class=\"p-editor-toolbar\" *ngIf=\"toolbar || toolbarTemplate\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n            </div>\n            <div class=\"p-editor-toolbar\" *ngIf=\"!toolbar && !toolbarTemplate\">\n                <span class=\"ql-formats\">\n                    <select class=\"ql-header\">\n                      <option value=\"1\">Heading</option>\n                      <option value=\"2\">Subheading</option>\n                      <option selected>Normal</option>\n                    </select>\n                    <select class=\"ql-font\">\n                      <option selected>Sans Serif</option>\n                      <option value=\"serif\">Serif</option>\n                      <option value=\"monospace\">Monospace</option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-bold\" aria-label=\"Bold\" type=\"button\"></button>\n                    <button class=\"ql-italic\" aria-label=\"Italic\" type=\"button\"></button>\n                    <button class=\"ql-underline\" aria-label=\"Underline\" type=\"button\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <select class=\"ql-color\"></select>\n                    <select class=\"ql-background\"></select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-list\" value=\"ordered\" aria-label=\"Ordered List\" type=\"button\"></button>\n                    <button class=\"ql-list\" value=\"bullet\" aria-label=\"Unordered List\" type=\"button\"></button>\n                    <select class=\"ql-align\">\n                        <option selected></option>\n                        <option value=\"center\"></option>\n                        <option value=\"right\"></option>\n                        <option value=\"justify\"></option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-link\" aria-label=\"Insert Link\" type=\"button\"></button>\n                    <button class=\"ql-image\" aria-label=\"Insert Image\" type=\"button\"></button>\n                    <button class=\"ql-code-block\" aria-label=\"Insert Code Block\" type=\"button\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-clean\" aria-label=\"Remove Styles\" type=\"button\"></button>\n                </span>\n            </div>\n            <div class=\"p-editor-content\" [ngStyle]=\"style\"></div>\n        </div>\n    ",
                providers: [EDITOR_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onTextChange: [{
            type: core.Output
        }], onSelectionChange: [{
            type: core.Output
        }], onInit: [{
            type: core.Output
        }], readonly: [{
            type: core.Input
        }], toolbar: [{
            type: core.ContentChild,
            args: [api.Header]
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], formats: [{
            type: core.Input
        }], modules: [{
            type: core.Input
        }], bounds: [{
            type: core.Input
        }], scrollingContainer: [{
            type: core.Input
        }], debug: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Editor;
    }());
    Editor.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    Editor.propDecorators = {
        onTextChange: [{ type: core.Output }],
        onSelectionChange: [{ type: core.Output }],
        toolbar: [{ type: core.ContentChild, args: [api.Header,] }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        formats: [{ type: core.Input }],
        modules: [{ type: core.Input }],
        bounds: [{ type: core.Input }],
        scrollingContainer: [{ type: core.Input }],
        debug: [{ type: core.Input }],
        onInit: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        readonly: [{ type: core.Input }]
    };
    var EditorModule = /** @class */ (function () {
        function EditorModule() {
        }
EditorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: EditorModule });
EditorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, imports: [[common.CommonModule], ɵngcc2.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(EditorModule, { declarations: [Editor], imports: [ɵngcc1.CommonModule], exports: [Editor, ɵngcc2.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EditorModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Editor, api.SharedModule],
                declarations: [Editor]
            }]
    }], function () { return []; }, null); })();
        return EditorModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EDITOR_VALUE_ACCESSOR = EDITOR_VALUE_ACCESSOR;
    exports.Editor = Editor;
    exports.EditorModule = EditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-editor.umd.js.map