(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/platform'),require('@angular/material/core'),exports, require('@angular/core'), require('@angular/material/core'), require('tslib'), require('@angular/cdk/platform'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/material/toolbar', ['@angular/core','@angular/cdk/platform','@angular/material/core','exports', '@angular/core', '@angular/material/core', 'tslib', '@angular/cdk/platform', '@angular/common'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.platform,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.toolbar = {}), global.ng.core, global.ng.material.core, global.tslib, global.ng.cdk.platform, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, core$1, tslib, platform, common) { 
var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Boilerplate for applying mixins to MatToolbar.
    /** @docs-private */
    var MatToolbarBase = /** @class */ (function () {
        function MatToolbarBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatToolbarBase;
    }());
    var _MatToolbarMixinBase = core$1.mixinColor(MatToolbarBase);
    var MatToolbarRow = /** @class */ (function () {
        function MatToolbarRow() {
        }
MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) { return new (t || MatToolbarRow)(); };
MatToolbarRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatToolbarRow, selectors: [["mat-toolbar-row"]], hostAttrs: [1, "mat-toolbar-row"], exportAs: ["matToolbarRow"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbarRow, [{
        type: core.Directive,
        args: [{
                selector: 'mat-toolbar-row',
                exportAs: 'matToolbarRow',
                host: { 'class': 'mat-toolbar-row' }
            }]
    }], function () { return []; }, null); })();
        return MatToolbarRow;
    }());
    var MatToolbar = /** @class */ (function (_super) {
        tslib.__extends(MatToolbar, _super);
        function MatToolbar(elementRef, _platform, document) {
            var _this = _super.call(this, elementRef) || this;
            _this._platform = _platform;
            // TODO: make the document a required param when doing breaking changes.
            _this._document = document;
            return _this;
        }
        MatToolbar.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!core.isDevMode() || !this._platform.isBrowser) {
                return;
            }
            this._checkToolbarMixedModes();
            this._toolbarRows.changes.subscribe(function () { return _this._checkToolbarMixedModes(); });
        };
        /**
         * Throws an exception when developers are attempting to combine the different toolbar row modes.
         */
        MatToolbar.prototype._checkToolbarMixedModes = function () {
            var _this = this;
            if (!this._toolbarRows.length) {
                return;
            }
            // Check if there are any other DOM nodes that can display content but aren't inside of
            // a <mat-toolbar-row> element.
            var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes)
                .filter(function (node) { return !(node.classList && node.classList.contains('mat-toolbar-row')); })
                .filter(function (node) { return node.nodeType !== (_this._document ? _this._document.COMMENT_NODE : 8); })
                .some(function (node) { return !!(node.textContent && node.textContent.trim()); });
            if (isCombinedUsage) {
                throwToolbarMixedModesError();
            }
        };
        /** @nocollapse */
        MatToolbar.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: platform.Platform },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        MatToolbar.propDecorators = {
            _toolbarRows: [{ type: core.ContentChildren, args: [MatToolbarRow, { descendants: true },] }]
        };
MatToolbar.ɵfac = function MatToolbar_Factory(t) { return new (t || MatToolbar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT)); };
MatToolbar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatToolbar, selectors: [["mat-toolbar"]], contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatToolbarRow, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._toolbarRows = _t);
    } }, hostAttrs: [1, "mat-toolbar"], hostVars: 4, hostBindings: function MatToolbar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    } }, inputs: { color: "color" }, exportAs: ["matToolbar"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatToolbar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵprojection(1, 1);
    } }, styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbar, [{
        type: core.Component,
        args: [{
                selector: 'mat-toolbar',
                exportAs: 'matToolbar',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-toolbar',
                    '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
                    '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, { _toolbarRows: [{
            type: core.ContentChildren,
            args: [MatToolbarRow, { descendants: true }]
        }] }); })();
        return MatToolbar;
    }(_MatToolbarMixinBase));
    /**
     * Throws an exception when attempting to combine the different toolbar row modes.
     * @docs-private
     */
    function throwToolbarMixedModesError() {
        throw Error('MatToolbar: Attempting to combine different toolbar modes. ' +
            'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' +
            'inside of a `<mat-toolbar>` for a single row.');
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatToolbarModule = /** @class */ (function () {
        function MatToolbarModule() {
        }
MatToolbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatToolbarModule });
MatToolbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatToolbarModule_Factory(t) { return new (t || MatToolbarModule)(); }, imports: [[core$1.MatCommonModule], ɵngcc2.MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatToolbarModule, { declarations: [MatToolbar, MatToolbarRow], imports: [ɵngcc2.MatCommonModule], exports: [MatToolbar, MatToolbarRow, ɵngcc2.MatCommonModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbarModule, [{
        type: core.NgModule,
        args: [{
                imports: [core$1.MatCommonModule],
                exports: [MatToolbar, MatToolbarRow, core$1.MatCommonModule],
                declarations: [MatToolbar, MatToolbarRow]
            }]
    }], function () { return []; }, null); })();
        return MatToolbarModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatToolbar = MatToolbar;
    exports.MatToolbarModule = MatToolbarModule;
    exports.MatToolbarRow = MatToolbarRow;
    exports.throwToolbarMixedModesError = throwToolbarMixedModesError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-toolbar.umd.js.map