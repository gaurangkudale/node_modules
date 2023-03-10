/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/flex-layout/core'),exports, require('@angular/core'), require('@angular/flex-layout/core'), require('@angular/cdk/coercion')) :
	typeof define === 'function' && define.amd ? define('@angular/flex-layout/grid', ['@angular/core','@angular/flex-layout/core','exports', '@angular/core', '@angular/flex-layout/core', '@angular/cdk/coercion'], factory) :
	(factory(global.ng.core,global.ng.flexLayout.core,(global.ng = global.ng || {}, global.ng.flexLayout = global.ng.flexLayout || {}, global.ng.flexLayout.grid = {}),global.ng.core,global.ng.flexLayout.core,global.ng.cdk.coercion));
}(this, (function (ɵngcc0,ɵngcc1,exports,core,core$1,coercion) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/grid-align/grid-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ROW_DEFAULT = 'stretch';
/** @type {?} */
var COL_DEFAULT = 'stretch';
var GridAlignStyleBuilder = /** @class */ (function (_super) {
    __extends(GridAlignStyleBuilder, _super);
    function GridAlignStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridAlignStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return buildCss(input || ROW_DEFAULT);
    };
    /** @nocollapse */ GridAlignStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAlignStyleBuilder_Factory() { return new GridAlignStyleBuilder(); }, token: GridAlignStyleBuilder, providedIn: "root" });
GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) { return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder); };
var ɵGridAlignStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAlignStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignStyleBuilder;
}(core$1.StyleBuilder));
var GridAlignDirective = /** @class */ (function (_super) {
    __extends(GridAlignDirective, _super);
    function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align';
        _this.styleCache = alignCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridAlignDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridAlignStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) { return new (t || GridAlignDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridAlignStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAlignDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAlignDirective, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridAlignStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, null); })();
    return GridAlignDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var alignCache = new Map();
/** @type {?} */
var inputs = [
    'gdGridAlign',
    'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl',
    'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl',
    'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'
];
/** @type {?} */
var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
var DefaultGridAlignDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAlignDirective, _super);
    function DefaultGridAlignDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) { return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective); };
DefaultGridAlignDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAlignDirective, selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]], inputs: { gdGridAlign: "gdGridAlign", "gdGridAlign.xs": "gdGridAlign.xs", "gdGridAlign.sm": "gdGridAlign.sm", "gdGridAlign.md": "gdGridAlign.md", "gdGridAlign.lg": "gdGridAlign.lg", "gdGridAlign.xl": "gdGridAlign.xl", "gdGridAlign.lt-sm": "gdGridAlign.lt-sm", "gdGridAlign.lt-md": "gdGridAlign.lt-md", "gdGridAlign.lt-lg": "gdGridAlign.lt-lg", "gdGridAlign.lt-xl": "gdGridAlign.lt-xl", "gdGridAlign.gt-xs": "gdGridAlign.gt-xs", "gdGridAlign.gt-sm": "gdGridAlign.gt-sm", "gdGridAlign.gt-md": "gdGridAlign.gt-md", "gdGridAlign.gt-lg": "gdGridAlign.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAlignDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAlignDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAlignDirective, [{
        type: core.Directive,
        args: [{ selector: selector, inputs: inputs }]
    }], null, null); })();
    return DefaultGridAlignDirective;
}(GridAlignDirective));
/**
 * @param {?=} align
 * @return {?}
 */
function buildCss(align) {
    if (align === void 0) { align = ''; }
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), rowAxis = _a[0], columnAxis = _a[1];
    // Row axis
    switch (rowAxis) {
        case 'end':
            css['justify-self'] = 'end';
            break;
        case 'center':
            css['justify-self'] = 'center';
            break;
        case 'stretch':
            css['justify-self'] = 'stretch';
            break;
        case 'start':
            css['justify-self'] = 'start';
            break;
        default:
            css['justify-self'] = ROW_DEFAULT; // default row axis
            break;
    }
    // Column axis
    switch (columnAxis) {
        case 'end':
            css['align-self'] = 'end';
            break;
        case 'center':
            css['align-self'] = 'center';
            break;
        case 'stretch':
            css['align-self'] = 'stretch';
            break;
        case 'start':
            css['align-self'] = 'start';
            break;
        default:
            css['align-self'] = COL_DEFAULT; // default column axis
            break;
    }
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-columns/align-columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_MAIN = 'start';
/** @type {?} */
var DEFAULT_CROSS = 'stretch';
var GridAlignColumnsStyleBuilder = /** @class */ (function (_super) {
    __extends(GridAlignColumnsStyleBuilder, _super);
    function GridAlignColumnsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAlignColumnsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return buildCss$1(input || DEFAULT_MAIN + " " + DEFAULT_CROSS, parent.inline);
    };
    /** @nocollapse */ GridAlignColumnsStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAlignColumnsStyleBuilder_Factory() { return new GridAlignColumnsStyleBuilder(); }, token: GridAlignColumnsStyleBuilder, providedIn: "root" });
GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) { return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder); };
var ɵGridAlignColumnsStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAlignColumnsStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignColumnsStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignColumnsStyleBuilder;
}(core$1.StyleBuilder));
var GridAlignColumnsDirective = /** @class */ (function (_super) {
    __extends(GridAlignColumnsDirective, _super);
    function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align-columns';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAlignColumnsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAlignColumnsDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridAlignColumnsStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
    GridAlignColumnsDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) { return new (t || GridAlignColumnsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridAlignColumnsStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAlignColumnsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAlignColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignColumnsDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridAlignColumnsStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridAlignColumnsDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var alignColumnsCache = new Map();
/** @type {?} */
var alignColumnsInlineCache = new Map();
/** @type {?} */
var inputs$1 = [
    'gdAlignColumns',
    'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md',
    'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm',
    'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl',
    'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md',
    'gdAlignColumns.gt-lg'
];
/** @type {?} */
var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
var DefaultGridAlignColumnsDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAlignColumnsDirective, _super);
    function DefaultGridAlignColumnsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$1;
        return _this;
    }
DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) { return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective); };
DefaultGridAlignColumnsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAlignColumnsDirective, selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]], inputs: { gdAlignColumns: "gdAlignColumns", "gdAlignColumns.xs": "gdAlignColumns.xs", "gdAlignColumns.sm": "gdAlignColumns.sm", "gdAlignColumns.md": "gdAlignColumns.md", "gdAlignColumns.lg": "gdAlignColumns.lg", "gdAlignColumns.xl": "gdAlignColumns.xl", "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md": "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md": "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAlignColumnsDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAlignColumnsDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAlignColumnsDirective, [{
        type: core.Directive,
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
    return DefaultGridAlignColumnsDirective;
}(GridAlignColumnsDirective));
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$1(align, inline) {
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
    // Main axis
    switch (mainAxis) {
        case 'center':
            css['align-content'] = 'center';
            break;
        case 'space-around':
            css['align-content'] = 'space-around';
            break;
        case 'space-between':
            css['align-content'] = 'space-between';
            break;
        case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;
        case 'end':
            css['align-content'] = 'end';
            break;
        case 'start':
            css['align-content'] = 'start';
            break;
        case 'stretch':
            css['align-content'] = 'stretch';
            break;
        default:
            css['align-content'] = DEFAULT_MAIN; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
            css['align-items'] = 'start';
            break;
        case 'center':
            css['align-items'] = 'center';
            break;
        case 'end':
            css['align-items'] = 'end';
            break;
        case 'stretch':
            css['align-items'] = 'stretch';
            break;
        default: // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-rows/align-rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_MAIN$1 = 'start';
/** @type {?} */
var DEFAULT_CROSS$1 = 'stretch';
var GridAlignRowsStyleBuilder = /** @class */ (function (_super) {
    __extends(GridAlignRowsStyleBuilder, _super);
    function GridAlignRowsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAlignRowsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return buildCss$2(input || DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1, parent.inline);
    };
    /** @nocollapse */ GridAlignRowsStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAlignRowsStyleBuilder_Factory() { return new GridAlignRowsStyleBuilder(); }, token: GridAlignRowsStyleBuilder, providedIn: "root" });
GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) { return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder); };
var ɵGridAlignRowsStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAlignRowsStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignRowsStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignRowsStyleBuilder;
}(core$1.StyleBuilder));
var GridAlignRowsDirective = /** @class */ (function (_super) {
    __extends(GridAlignRowsDirective, _super);
    function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align-rows';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAlignRowsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAlignRowsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAlignRowsDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridAlignRowsStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
    GridAlignRowsDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) { return new (t || GridAlignRowsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridAlignRowsStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAlignRowsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAlignRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAlignRowsDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridAlignRowsStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridAlignRowsDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var alignRowsCache = new Map();
/** @type {?} */
var alignRowsInlineCache = new Map();
/** @type {?} */
var inputs$2 = [
    'gdAlignRows',
    'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md',
    'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm',
    'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl',
    'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md',
    'gdAlignRows.gt-lg'
];
/** @type {?} */
var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
var DefaultGridAlignRowsDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAlignRowsDirective, _super);
    function DefaultGridAlignRowsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$2;
        return _this;
    }
DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) { return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective); };
DefaultGridAlignRowsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAlignRowsDirective, selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]], inputs: { gdAlignRows: "gdAlignRows", "gdAlignRows.xs": "gdAlignRows.xs", "gdAlignRows.sm": "gdAlignRows.sm", "gdAlignRows.md": "gdAlignRows.md", "gdAlignRows.lg": "gdAlignRows.lg", "gdAlignRows.xl": "gdAlignRows.xl", "gdAlignRows.lt-sm": "gdAlignRows.lt-sm", "gdAlignRows.lt-md": "gdAlignRows.lt-md", "gdAlignRows.lt-lg": "gdAlignRows.lt-lg", "gdAlignRows.lt-xl": "gdAlignRows.lt-xl", "gdAlignRows.gt-xs": "gdAlignRows.gt-xs", "gdAlignRows.gt-sm": "gdAlignRows.gt-sm", "gdAlignRows.gt-md": "gdAlignRows.gt-md", "gdAlignRows.gt-lg": "gdAlignRows.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAlignRowsDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAlignRowsDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAlignRowsDirective, [{
        type: core.Directive,
        args: [{ selector: selector$2, inputs: inputs$2 }]
    }], null, null); })();
    return DefaultGridAlignRowsDirective;
}(GridAlignRowsDirective));
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$2(align, inline) {
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
    // Main axis
    switch (mainAxis) {
        case 'center':
        case 'space-around':
        case 'space-between':
        case 'space-evenly':
        case 'end':
        case 'start':
        case 'stretch':
            css['justify-content'] = mainAxis;
            break;
        default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
        case 'center':
        case 'end':
        case 'stretch':
            css['justify-items'] = crossAxis;
            break;
        default: // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/area/area.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE = 'auto';
var GridAreaStyleBuilder = /** @class */ (function (_super) {
    __extends(GridAreaStyleBuilder, _super);
    function GridAreaStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridAreaStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-area': input || DEFAULT_VALUE };
    };
    /** @nocollapse */ GridAreaStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAreaStyleBuilder_Factory() { return new GridAreaStyleBuilder(); }, token: GridAreaStyleBuilder, providedIn: "root" });
GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) { return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder); };
var ɵGridAreaStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAreaStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAreaStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAreaStyleBuilder;
}(core$1.StyleBuilder));
var GridAreaDirective = /** @class */ (function (_super) {
    __extends(GridAreaDirective, _super);
    function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-area';
        _this.styleCache = gridAreaCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridAreaDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.StyleUtils },
        { type: GridAreaStyleBuilder },
        { type: core$1.MediaMarshaller }
    ]; };
GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) { return new (t || GridAreaDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(GridAreaStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAreaDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAreaDirective, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAreaDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.StyleUtils }, { type: GridAreaStyleBuilder }, { type: ɵngcc1.MediaMarshaller }]; }, null); })();
    return GridAreaDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var gridAreaCache = new Map();
/** @type {?} */
var inputs$3 = [
    'gdArea',
    'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl',
    'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl',
    'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'
];
/** @type {?} */
var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
var DefaultGridAreaDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAreaDirective, _super);
    function DefaultGridAreaDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$3;
        return _this;
    }
DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) { return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective); };
DefaultGridAreaDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAreaDirective, selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]], inputs: { gdArea: "gdArea", "gdArea.xs": "gdArea.xs", "gdArea.sm": "gdArea.sm", "gdArea.md": "gdArea.md", "gdArea.lg": "gdArea.lg", "gdArea.xl": "gdArea.xl", "gdArea.lt-sm": "gdArea.lt-sm", "gdArea.lt-md": "gdArea.lt-md", "gdArea.lt-lg": "gdArea.lt-lg", "gdArea.lt-xl": "gdArea.lt-xl", "gdArea.gt-xs": "gdArea.gt-xs", "gdArea.gt-sm": "gdArea.gt-sm", "gdArea.gt-md": "gdArea.gt-md", "gdArea.gt-lg": "gdArea.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAreaDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAreaDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAreaDirective, [{
        type: core.Directive,
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();
    return DefaultGridAreaDirective;
}(GridAreaDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/areas/areas.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$1 = 'none';
/** @type {?} */
var DELIMETER = '|';
var GridAreasStyleBuiler = /** @class */ (function (_super) {
    __extends(GridAreasStyleBuiler, _super);
    function GridAreasStyleBuiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAreasStyleBuiler.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        /** @type {?} */
        var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return "\"" + v.trim() + "\""; }));
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    };
    /** @nocollapse */ GridAreasStyleBuiler.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAreasStyleBuiler_Factory() { return new GridAreasStyleBuiler(); }, token: GridAreasStyleBuiler, providedIn: "root" });
GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) { return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler); };
var ɵGridAreasStyleBuiler_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAreasStyleBuiler);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAreasStyleBuiler, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAreasStyleBuiler;
}(core$1.StyleBuilder));
var GridAreasDirective = /** @class */ (function (_super) {
    __extends(GridAreasDirective, _super);
    function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-areas';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAreasDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAreasDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? areasInlineCache : areasCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAreasDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.StyleUtils },
        { type: GridAreasStyleBuiler },
        { type: core$1.MediaMarshaller }
    ]; };
    GridAreasDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) { return new (t || GridAreasDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(GridAreasStyleBuiler), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAreasDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAreasDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAreasDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.StyleUtils }, { type: GridAreasStyleBuiler }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridAreasDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var areasCache = new Map();
/** @type {?} */
var areasInlineCache = new Map();
/** @type {?} */
var inputs$4 = [
    'gdAreas',
    'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl',
    'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl',
    'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'
];
/** @type {?} */
var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
var DefaultGridAreasDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAreasDirective, _super);
    function DefaultGridAreasDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$4;
        return _this;
    }
DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) { return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective); };
DefaultGridAreasDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAreasDirective, selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]], inputs: { gdAreas: "gdAreas", "gdAreas.xs": "gdAreas.xs", "gdAreas.sm": "gdAreas.sm", "gdAreas.md": "gdAreas.md", "gdAreas.lg": "gdAreas.lg", "gdAreas.xl": "gdAreas.xl", "gdAreas.lt-sm": "gdAreas.lt-sm", "gdAreas.lt-md": "gdAreas.lt-md", "gdAreas.lt-lg": "gdAreas.lt-lg", "gdAreas.lt-xl": "gdAreas.lt-xl", "gdAreas.gt-xs": "gdAreas.gt-xs", "gdAreas.gt-sm": "gdAreas.gt-sm", "gdAreas.gt-md": "gdAreas.gt-md", "gdAreas.gt-lg": "gdAreas.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAreasDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAreasDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAreasDirective, [{
        type: core.Directive,
        args: [{ selector: selector$4, inputs: inputs$4 }]
    }], null, null); })();
    return DefaultGridAreasDirective;
}(GridAreasDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/auto/auto.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$2 = 'initial';
var GridAutoStyleBuilder = /** @class */ (function (_super) {
    __extends(GridAutoStyleBuilder, _super);
    function GridAutoStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAutoStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        var _a = (input || DEFAULT_VALUE$2).split(' '), direction = _a[0], dense = _a[1];
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    };
    /** @nocollapse */ GridAutoStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridAutoStyleBuilder_Factory() { return new GridAutoStyleBuilder(); }, token: GridAutoStyleBuilder, providedIn: "root" });
GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) { return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder); };
var ɵGridAutoStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridAutoStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAutoStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAutoStyleBuilder;
}(core$1.StyleBuilder));
var GridAutoDirective = /** @class */ (function (_super) {
    __extends(GridAutoDirective, _super);
    function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this._inline = false;
        _this.DIRECTIVE_KEY = 'grid-auto';
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAutoDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAutoDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? autoInlineCache : autoCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAutoDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridAutoStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
    GridAutoDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) { return new (t || GridAutoDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridAutoStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridAutoDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridAutoDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridAutoDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridAutoStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridAutoDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var autoCache = new Map();
/** @type {?} */
var autoInlineCache = new Map();
/** @type {?} */
var inputs$5 = [
    'gdAuto',
    'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl',
    'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl',
    'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'
];
/** @type {?} */
var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
var DefaultGridAutoDirective = /** @class */ (function (_super) {
    __extends(DefaultGridAutoDirective, _super);
    function DefaultGridAutoDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$5;
        return _this;
    }
DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) { return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective); };
DefaultGridAutoDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridAutoDirective, selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]], inputs: { gdAuto: "gdAuto", "gdAuto.xs": "gdAuto.xs", "gdAuto.sm": "gdAuto.sm", "gdAuto.md": "gdAuto.md", "gdAuto.lg": "gdAuto.lg", "gdAuto.xl": "gdAuto.xl", "gdAuto.lt-sm": "gdAuto.lt-sm", "gdAuto.lt-md": "gdAuto.lt-md", "gdAuto.lt-lg": "gdAuto.lt-lg", "gdAuto.lt-xl": "gdAuto.lt-xl", "gdAuto.gt-xs": "gdAuto.gt-xs", "gdAuto.gt-sm": "gdAuto.gt-sm", "gdAuto.gt-md": "gdAuto.gt-md", "gdAuto.gt-lg": "gdAuto.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridAutoDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridAutoDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridAutoDirective, [{
        type: core.Directive,
        args: [{ selector: selector$5, inputs: inputs$5 }]
    }], null, null); })();
    return DefaultGridAutoDirective;
}(GridAutoDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/column/column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$3 = 'auto';
var GridColumnStyleBuilder = /** @class */ (function (_super) {
    __extends(GridColumnStyleBuilder, _super);
    function GridColumnStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridColumnStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-column': input || DEFAULT_VALUE$3 };
    };
    /** @nocollapse */ GridColumnStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridColumnStyleBuilder_Factory() { return new GridColumnStyleBuilder(); }, token: GridColumnStyleBuilder, providedIn: "root" });
GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) { return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder); };
var ɵGridColumnStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridColumnStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridColumnStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridColumnStyleBuilder;
}(core$1.StyleBuilder));
var GridColumnDirective = /** @class */ (function (_super) {
    __extends(GridColumnDirective, _super);
    function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-column';
        _this.styleCache = columnCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridColumnDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridColumnStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) { return new (t || GridColumnDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridColumnStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridColumnDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridColumnDirective, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridColumnDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridColumnStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, null); })();
    return GridColumnDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var columnCache = new Map();
/** @type {?} */
var inputs$6 = [
    'gdColumn',
    'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl',
    'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl',
    'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'
];
/** @type {?} */
var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var DefaultGridColumnDirective = /** @class */ (function (_super) {
    __extends(DefaultGridColumnDirective, _super);
    function DefaultGridColumnDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$6;
        return _this;
    }
DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) { return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective); };
DefaultGridColumnDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridColumnDirective, selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]], inputs: { gdColumn: "gdColumn", "gdColumn.xs": "gdColumn.xs", "gdColumn.sm": "gdColumn.sm", "gdColumn.md": "gdColumn.md", "gdColumn.lg": "gdColumn.lg", "gdColumn.xl": "gdColumn.xl", "gdColumn.lt-sm": "gdColumn.lt-sm", "gdColumn.lt-md": "gdColumn.lt-md", "gdColumn.lt-lg": "gdColumn.lt-lg", "gdColumn.lt-xl": "gdColumn.lt-xl", "gdColumn.gt-xs": "gdColumn.gt-xs", "gdColumn.gt-sm": "gdColumn.gt-sm", "gdColumn.gt-md": "gdColumn.gt-md", "gdColumn.gt-lg": "gdColumn.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridColumnDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridColumnDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridColumnDirective, [{
        type: core.Directive,
        args: [{ selector: selector$6, inputs: inputs$6 }]
    }], null, null); })();
    return DefaultGridColumnDirective;
}(GridColumnDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/columns/columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$4 = 'none';
/** @type {?} */
var AUTO_SPECIFIER = '!';
var GridColumnsStyleBuilder = /** @class */ (function (_super) {
    __extends(GridColumnsStyleBuilder, _super);
    function GridColumnsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridColumnsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        input = input || DEFAULT_VALUE$4;
        /** @type {?} */
        var auto = false;
        if (input.endsWith(AUTO_SPECIFIER)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = input;
        return css;
    };
    /** @nocollapse */ GridColumnsStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridColumnsStyleBuilder_Factory() { return new GridColumnsStyleBuilder(); }, token: GridColumnsStyleBuilder, providedIn: "root" });
GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) { return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder); };
var ɵGridColumnsStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridColumnsStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridColumnsStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridColumnsStyleBuilder;
}(core$1.StyleBuilder));
var GridColumnsDirective = /** @class */ (function (_super) {
    __extends(GridColumnsDirective, _super);
    function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-columns';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridColumnsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridColumnsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? columnsInlineCache : columnsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridColumnsDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridColumnsStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
    GridColumnsDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) { return new (t || GridColumnsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridColumnsStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridColumnsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridColumnsDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridColumnsStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridColumnsDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var columnsCache = new Map();
/** @type {?} */
var columnsInlineCache = new Map();
/** @type {?} */
var inputs$7 = [
    'gdColumns',
    'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl',
    'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl',
    'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'
];
/** @type {?} */
var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var DefaultGridColumnsDirective = /** @class */ (function (_super) {
    __extends(DefaultGridColumnsDirective, _super);
    function DefaultGridColumnsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$7;
        return _this;
    }
DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) { return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective); };
DefaultGridColumnsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridColumnsDirective, selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]], inputs: { gdColumns: "gdColumns", "gdColumns.xs": "gdColumns.xs", "gdColumns.sm": "gdColumns.sm", "gdColumns.md": "gdColumns.md", "gdColumns.lg": "gdColumns.lg", "gdColumns.xl": "gdColumns.xl", "gdColumns.lt-sm": "gdColumns.lt-sm", "gdColumns.lt-md": "gdColumns.lt-md", "gdColumns.lt-lg": "gdColumns.lt-lg", "gdColumns.lt-xl": "gdColumns.lt-xl", "gdColumns.gt-xs": "gdColumns.gt-xs", "gdColumns.gt-sm": "gdColumns.gt-sm", "gdColumns.gt-md": "gdColumns.gt-md", "gdColumns.gt-lg": "gdColumns.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridColumnsDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridColumnsDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridColumnsDirective, [{
        type: core.Directive,
        args: [{ selector: selector$7, inputs: inputs$7 }]
    }], null, null); })();
    return DefaultGridColumnsDirective;
}(GridColumnsDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/gap/gap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$5 = '0';
var GridGapStyleBuilder = /** @class */ (function (_super) {
    __extends(GridGapStyleBuilder, _super);
    function GridGapStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridGapStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-gap': input || DEFAULT_VALUE$5
        };
    };
    /** @nocollapse */ GridGapStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridGapStyleBuilder_Factory() { return new GridGapStyleBuilder(); }, token: GridGapStyleBuilder, providedIn: "root" });
GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) { return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder); };
var ɵGridGapStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridGapStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridGapStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridGapStyleBuilder;
}(core$1.StyleBuilder));
var GridGapDirective = /** @class */ (function (_super) {
    __extends(GridGapDirective, _super);
    function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-gap';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridGapDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridGapDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? gapInlineCache : gapCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridGapDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core$1.StyleUtils },
        { type: GridGapStyleBuilder },
        { type: core$1.MediaMarshaller }
    ]; };
    GridGapDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridGapDirective.ɵfac = function GridGapDirective_Factory(t) { return new (t || GridGapDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(GridGapStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridGapDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridGapDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridGapDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.StyleUtils }, { type: GridGapStyleBuilder }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridGapDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var gapCache = new Map();
/** @type {?} */
var gapInlineCache = new Map();
/** @type {?} */
var inputs$8 = [
    'gdGap',
    'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl',
    'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl',
    'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'
];
/** @type {?} */
var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
var DefaultGridGapDirective = /** @class */ (function (_super) {
    __extends(DefaultGridGapDirective, _super);
    function DefaultGridGapDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$8;
        return _this;
    }
DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) { return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective); };
DefaultGridGapDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridGapDirective, selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]], inputs: { gdGap: "gdGap", "gdGap.xs": "gdGap.xs", "gdGap.sm": "gdGap.sm", "gdGap.md": "gdGap.md", "gdGap.lg": "gdGap.lg", "gdGap.xl": "gdGap.xl", "gdGap.lt-sm": "gdGap.lt-sm", "gdGap.lt-md": "gdGap.lt-md", "gdGap.lt-lg": "gdGap.lt-lg", "gdGap.lt-xl": "gdGap.lt-xl", "gdGap.gt-xs": "gdGap.gt-xs", "gdGap.gt-sm": "gdGap.gt-sm", "gdGap.gt-md": "gdGap.gt-md", "gdGap.gt-lg": "gdGap.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridGapDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridGapDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridGapDirective, [{
        type: core.Directive,
        args: [{ selector: selector$8, inputs: inputs$8 }]
    }], null, null); })();
    return DefaultGridGapDirective;
}(GridGapDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/row/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$6 = 'auto';
var GridRowStyleBuilder = /** @class */ (function (_super) {
    __extends(GridRowStyleBuilder, _super);
    function GridRowStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridRowStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-row': input || DEFAULT_VALUE$6 };
    };
    /** @nocollapse */ GridRowStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridRowStyleBuilder_Factory() { return new GridRowStyleBuilder(); }, token: GridRowStyleBuilder, providedIn: "root" });
GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) { return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder); };
var ɵGridRowStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridRowStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridRowStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridRowStyleBuilder;
}(core$1.StyleBuilder));
var GridRowDirective = /** @class */ (function (_super) {
    __extends(GridRowDirective, _super);
    function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-row';
        _this.styleCache = rowCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridRowDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridRowStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
GridRowDirective.ɵfac = function GridRowDirective_Factory(t) { return new (t || GridRowDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridRowStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridRowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridRowDirective, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridRowDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridRowStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, null); })();
    return GridRowDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var rowCache = new Map();
/** @type {?} */
var inputs$9 = [
    'gdRow',
    'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl',
    'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl',
    'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'
];
/** @type {?} */
var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var DefaultGridRowDirective = /** @class */ (function (_super) {
    __extends(DefaultGridRowDirective, _super);
    function DefaultGridRowDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$9;
        return _this;
    }
DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) { return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective); };
DefaultGridRowDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridRowDirective, selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]], inputs: { gdRow: "gdRow", "gdRow.xs": "gdRow.xs", "gdRow.sm": "gdRow.sm", "gdRow.md": "gdRow.md", "gdRow.lg": "gdRow.lg", "gdRow.xl": "gdRow.xl", "gdRow.lt-sm": "gdRow.lt-sm", "gdRow.lt-md": "gdRow.lt-md", "gdRow.lt-lg": "gdRow.lt-lg", "gdRow.lt-xl": "gdRow.lt-xl", "gdRow.gt-xs": "gdRow.gt-xs", "gdRow.gt-sm": "gdRow.gt-sm", "gdRow.gt-md": "gdRow.gt-md", "gdRow.gt-lg": "gdRow.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridRowDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridRowDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridRowDirective, [{
        type: core.Directive,
        args: [{ selector: selector$9, inputs: inputs$9 }]
    }], null, null); })();
    return DefaultGridRowDirective;
}(GridRowDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/rows/rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$7 = 'none';
/** @type {?} */
var AUTO_SPECIFIER$1 = '!';
var GridRowsStyleBuilder = /** @class */ (function (_super) {
    __extends(GridRowsStyleBuilder, _super);
    function GridRowsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridRowsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        input = input || DEFAULT_VALUE$7;
        /** @type {?} */
        var auto = false;
        if (input.endsWith(AUTO_SPECIFIER$1)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = input;
        return css;
    };
    /** @nocollapse */ GridRowsStyleBuilder.ɵprov = core.ɵɵdefineInjectable({ factory: function GridRowsStyleBuilder_Factory() { return new GridRowsStyleBuilder(); }, token: GridRowsStyleBuilder, providedIn: "root" });
GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) { return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder); };
var ɵGridRowsStyleBuilder_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GridRowsStyleBuilder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridRowsStyleBuilder, [{
        type: core.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridRowsStyleBuilder;
}(core$1.StyleBuilder));
var GridRowsDirective = /** @class */ (function (_super) {
    __extends(GridRowsDirective, _super);
    function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-rows';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridRowsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = coercion.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridRowsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? rowsInlineCache : rowsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridRowsDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: GridRowsStyleBuilder },
        { type: core$1.StyleUtils },
        { type: core$1.MediaMarshaller }
    ]; };
    GridRowsDirective.propDecorators = {
        inline: [{ type: core.Input, args: ['gdInline',] }]
    };
GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) { return new (t || GridRowsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(GridRowsStyleBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.StyleUtils), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MediaMarshaller)); };
GridRowsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridRowsDirective, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: GridRowsStyleBuilder }, { type: ɵngcc1.StyleUtils }, { type: ɵngcc1.MediaMarshaller }]; }, { inline: [{
            type: core.Input,
            args: ['gdInline']
        }] }); })();
    return GridRowsDirective;
}(core$1.BaseDirective2));
/** @type {?} */
var rowsCache = new Map();
/** @type {?} */
var rowsInlineCache = new Map();
/** @type {?} */
var inputs$10 = [
    'gdRows',
    'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl',
    'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl',
    'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'
];
/** @type {?} */
var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var DefaultGridRowsDirective = /** @class */ (function (_super) {
    __extends(DefaultGridRowsDirective, _super);
    function DefaultGridRowsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$10;
        return _this;
    }
DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) { return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective); };
DefaultGridRowsDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DefaultGridRowsDirective, selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]], inputs: { gdRows: "gdRows", "gdRows.xs": "gdRows.xs", "gdRows.sm": "gdRows.sm", "gdRows.md": "gdRows.md", "gdRows.lg": "gdRows.lg", "gdRows.xl": "gdRows.xl", "gdRows.lt-sm": "gdRows.lt-sm", "gdRows.lt-md": "gdRows.lt-md", "gdRows.lt-lg": "gdRows.lt-lg", "gdRows.lt-xl": "gdRows.lt-xl", "gdRows.gt-xs": "gdRows.gt-xs", "gdRows.gt-sm": "gdRows.gt-sm", "gdRows.gt-md": "gdRows.gt-md", "gdRows.gt-lg": "gdRows.gt-lg" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵDefaultGridRowsDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(DefaultGridRowsDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DefaultGridRowsDirective, [{
        type: core.Directive,
        args: [{ selector: selector$10, inputs: inputs$10 }]
    }], null, null); })();
    return DefaultGridRowsDirective;
}(GridRowsDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    DefaultGridAlignDirective,
    DefaultGridAlignColumnsDirective,
    DefaultGridAlignRowsDirective,
    DefaultGridAreaDirective,
    DefaultGridAreasDirective,
    DefaultGridAutoDirective,
    DefaultGridColumnDirective,
    DefaultGridColumnsDirective,
    DefaultGridGapDirective,
    DefaultGridRowDirective,
    DefaultGridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
GridModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GridModule });
GridModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[core$1.CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GridModule, { declarations: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective], imports: [ɵngcc1.CoreModule], exports: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridModule, [{
        type: core.NgModule,
        args: [{
                imports: [core$1.CoreModule],
                declarations: __spreadArrays(ALL_DIRECTIVES),
                exports: __spreadArrays(ALL_DIRECTIVES)
            }]
    }], function () { return []; }, null); })();
    return GridModule;
}());

exports.GridModule = GridModule;
exports.ɵgrid_privatef = DefaultGridAlignColumnsDirective;
exports.ɵgrid_privatee = GridAlignColumnsDirective;
exports.ɵgrid_privated = GridAlignColumnsStyleBuilder;
exports.ɵgrid_privatei = DefaultGridAlignRowsDirective;
exports.ɵgrid_privateh = GridAlignRowsDirective;
exports.ɵgrid_privateg = GridAlignRowsStyleBuilder;
exports.ɵgrid_privatel = DefaultGridAreaDirective;
exports.ɵgrid_privatek = GridAreaDirective;
exports.ɵgrid_privatej = GridAreaStyleBuilder;
exports.ɵgrid_privateo = DefaultGridAreasDirective;
exports.ɵgrid_privaten = GridAreasDirective;
exports.ɵgrid_privatem = GridAreasStyleBuiler;
exports.ɵgrid_privater = DefaultGridAutoDirective;
exports.ɵgrid_privateq = GridAutoDirective;
exports.ɵgrid_privatep = GridAutoStyleBuilder;
exports.ɵgrid_privateu = DefaultGridColumnDirective;
exports.ɵgrid_privatet = GridColumnDirective;
exports.ɵgrid_privates = GridColumnStyleBuilder;
exports.ɵgrid_privatex = DefaultGridColumnsDirective;
exports.ɵgrid_privatew = GridColumnsDirective;
exports.ɵgrid_privatev = GridColumnsStyleBuilder;
exports.ɵgrid_privateba = DefaultGridGapDirective;
exports.ɵgrid_privatez = GridGapDirective;
exports.ɵgrid_privatey = GridGapStyleBuilder;
exports.ɵgrid_privatec = DefaultGridAlignDirective;
exports.ɵgrid_privateb = GridAlignDirective;
exports.ɵgrid_privatea = GridAlignStyleBuilder;
exports.ɵgrid_privatebd = DefaultGridRowDirective;
exports.ɵgrid_privatebc = GridRowDirective;
exports.ɵgrid_privatebb = GridRowStyleBuilder;
exports.ɵgrid_privatebg = DefaultGridRowsDirective;
exports.ɵgrid_privatebf = GridRowsDirective;
exports.ɵgrid_privatebe = GridRowsStyleBuilder;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=flex-layout-grid.umd.js.map