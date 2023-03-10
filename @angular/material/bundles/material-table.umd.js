(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/table'),require('@angular/common'),require('@angular/material/core'),exports, require('@angular/core'), require('tslib'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/material/core'), require('@angular/cdk/coercion'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material/table', ['@angular/core','@angular/cdk/table','@angular/common','@angular/material/core','exports', '@angular/core', 'tslib', '@angular/cdk/table', '@angular/common', '@angular/material/core', '@angular/cdk/coercion', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.table,global.ng.common,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.table = {}), global.ng.core, global.tslib, global.ng.cdk.table, global.ng.common, global.ng.material.core, global.ng.cdk.coercion, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, tslib, table, common, core$1, coercion, rxjs, operators) { 
var _c0 = [[["caption"]]];
var _c1 = ["caption"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var data_r2 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r1.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Wrapper for the CdkTable with Material design styles.
     */
    var MatTable = /** @class */ (function (_super) {
        tslib.__extends(MatTable, _super);
        function MatTable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Overrides the sticky CSS class set by the `CdkTable`. */
            _this.stickyCssClass = 'mat-table-sticky';
            return _this;
        }
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkTable, useExisting: MatTable }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementContainer(1, 0);
        ɵngcc0.ɵɵelementContainer(2, 1);
        ɵngcc0.ɵɵelementContainer(3, 2);
    } }, directives: [ɵngcc1.HeaderRowOutlet, ɵngcc1.DataRowOutlet, ɵngcc1.FooterRowOutlet], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"], encapsulation: 2 });
var ɵMatTable_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTable);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTable, [{
        type: core.Component,
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: table.CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'mat-table'
                },
                providers: [{ provide: table.CdkTable, useExisting: MatTable }],
                encapsulation: core.ViewEncapsulation.None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
            }]
    }], null, null); })();
        return MatTable;
    }(table.CdkTable));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Cell definition for the mat-table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */
    var MatCellDef = /** @class */ (function (_super) {
        tslib.__extends(MatCellDef, _super);
        function MatCellDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkCellDef, useExisting: MatCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCellDef, [{
        type: core.Directive,
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: table.CdkCellDef, useExisting: MatCellDef }]
            }]
    }], null, null); })();
        return MatCellDef;
    }(table.CdkCellDef));
    /**
     * Header cell definition for the mat-table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */
    var MatHeaderCellDef = /** @class */ (function (_super) {
        tslib.__extends(MatHeaderCellDef, _super);
        function MatHeaderCellDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkHeaderCellDef, useExisting: MatHeaderCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatHeaderCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCellDef, [{
        type: core.Directive,
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: table.CdkHeaderCellDef, useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
        return MatHeaderCellDef;
    }(table.CdkHeaderCellDef));
    /**
     * Footer cell definition for the mat-table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */
    var MatFooterCellDef = /** @class */ (function (_super) {
        tslib.__extends(MatFooterCellDef, _super);
        function MatFooterCellDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkFooterCellDef, useExisting: MatFooterCellDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatFooterCellDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterCellDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCellDef, [{
        type: core.Directive,
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: table.CdkFooterCellDef, useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
        return MatFooterCellDef;
    }(table.CdkFooterCellDef));
    /**
     * Column definition for the mat-table.
     * Defines a set of cells available for a table column.
     */
    var MatColumnDef = /** @class */ (function (_super) {
        tslib.__extends(MatColumnDef, _super);
        function MatColumnDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatColumnDef.propDecorators = {
            name: [{ type: core.Input, args: ['matColumnDef',] }]
        };
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: table.CdkColumnDef, useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatColumnDef, [{
        type: core.Directive,
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: table.CdkColumnDef, useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: core.Input,
            args: ['matColumnDef']
        }] }); })();
        return MatColumnDef;
    }(table.CdkColumnDef));
    /** Header cell template container that adds the right classes and role. */
    var MatHeaderCell = /** @class */ (function (_super) {
        tslib.__extends(MatHeaderCell, _super);
        function MatHeaderCell(columnDef, elementRef) {
            var _this = _super.call(this, columnDef, elementRef) || this;
            elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
            return _this;
        }
        /** @nocollapse */
        MatHeaderCell.ctorParameters = function () { return [
            { type: table.CdkColumnDef },
            { type: core.ElementRef }
        ]; };
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return new (t || MatHeaderCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderCell, [{
        type: core.Directive,
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
        return MatHeaderCell;
    }(table.CdkHeaderCell));
    /** Footer cell template container that adds the right classes and role. */
    var MatFooterCell = /** @class */ (function (_super) {
        tslib.__extends(MatFooterCell, _super);
        function MatFooterCell(columnDef, elementRef) {
            var _this = _super.call(this, columnDef, elementRef) || this;
            elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
            return _this;
        }
        /** @nocollapse */
        MatFooterCell.ctorParameters = function () { return [
            { type: table.CdkColumnDef },
            { type: core.ElementRef }
        ]; };
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return new (t || MatFooterCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterCell, [{
        type: core.Directive,
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
        return MatFooterCell;
    }(table.CdkFooterCell));
    /** Cell template container that adds the right classes and role. */
    var MatCell = /** @class */ (function (_super) {
        tslib.__extends(MatCell, _super);
        function MatCell(columnDef, elementRef) {
            var _this = _super.call(this, columnDef, elementRef) || this;
            elementRef.nativeElement.classList.add("mat-column-" + columnDef.cssClassFriendlyName);
            return _this;
        }
        /** @nocollapse */
        MatCell.ctorParameters = function () { return [
            { type: table.CdkColumnDef },
            { type: core.ElementRef }
        ]; };
MatCell.ɵfac = function MatCell_Factory(t) { return new (t || MatCell)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCell, [{
        type: core.Directive,
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: ɵngcc1.CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
        return MatCell;
    }(table.CdkCell));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Header row definition for the mat-table.
     * Captures the header row's template and other header properties such as the columns to display.
     */
    var MatHeaderRowDef = /** @class */ (function (_super) {
        tslib.__extends(MatHeaderRowDef, _super);
        function MatHeaderRowDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkHeaderRowDef, useExisting: MatHeaderRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatHeaderRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRowDef, [{
        type: core.Directive,
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: table.CdkHeaderRowDef, useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
        return MatHeaderRowDef;
    }(table.CdkHeaderRowDef));
    /**
     * Footer row definition for the mat-table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */
    var MatFooterRowDef = /** @class */ (function (_super) {
        tslib.__extends(MatFooterRowDef, _super);
        function MatFooterRowDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkFooterRowDef, useExisting: MatFooterRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatFooterRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRowDef, [{
        type: core.Directive,
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: table.CdkFooterRowDef, useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
        return MatFooterRowDef;
    }(table.CdkFooterRowDef));
    /**
     * Data row definition for the mat-table.
     * Captures the data row's template and other properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     */
    var MatRowDef = /** @class */ (function (_super) {
        tslib.__extends(MatRowDef, _super);
        function MatRowDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkRowDef, useExisting: MatRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRowDef, [{
        type: core.Directive,
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: table.CdkRowDef, useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
        return MatRowDef;
    }(table.CdkRowDef));
    /** Footer template container that contains the cell outlet. Adds the right class and role. */
    var MatHeaderRow = /** @class */ (function (_super) {
        tslib.__extends(MatHeaderRow, _super);
        function MatHeaderRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkHeaderRow, useExisting: MatHeaderRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatHeaderRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRow, [{
        type: core.Component,
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: table.CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: table.CdkHeaderRow, useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
        return MatHeaderRow;
    }(table.CdkHeaderRow));
    /** Footer template container that contains the cell outlet. Adds the right class and role. */
    var MatFooterRow = /** @class */ (function (_super) {
        tslib.__extends(MatFooterRow, _super);
        function MatFooterRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkFooterRow, useExisting: MatFooterRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatFooterRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRow, [{
        type: core.Component,
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: table.CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                exportAs: 'matFooterRow',
                providers: [{ provide: table.CdkFooterRow, useExisting: MatFooterRow }]
            }]
    }], null, null); })();
        return MatFooterRow;
    }(table.CdkFooterRow));
    /** Data row template container that contains the cell outlet. Adds the right class and role. */
    var MatRow = /** @class */ (function (_super) {
        tslib.__extends(MatRow, _super);
        function MatRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: table.CdkRow, useExisting: MatRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRow, [{
        type: core.Component,
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: table.CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                exportAs: 'matRow',
                providers: [{ provide: table.CdkRow, useExisting: MatRow }]
            }]
    }], null, null); })();
        return MatRow;
    }(table.CdkRow));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     */
    var MatTextColumn = /** @class */ (function (_super) {
        tslib.__extends(MatTextColumn, _super);
        function MatTextColumn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        ɵngcc0.ɵɵtemplate(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        ɵngcc0.ɵɵelementContainerEnd();
    } }, directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell], encapsulation: 2 });
var ɵMatTextColumn_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTextColumn);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTextColumn, [{
        type: core.Component,
        args: [{
                selector: 'mat-text-column',
                template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
                encapsulation: core.ViewEncapsulation.None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default
            }]
    }], null, null); })();
        return MatTextColumn;
    }(table.CdkTextColumn));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [
        // Table
        MatTable,
        // Template defs
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatColumnDef,
        MatCellDef,
        MatRowDef,
        MatFooterCellDef,
        MatFooterRowDef,
        // Cell directives
        MatHeaderCell,
        MatCell,
        MatFooterCell,
        // Row directives
        MatHeaderRow,
        MatRow,
        MatFooterRow,
        MatTextColumn,
    ];
    var MatTableModule = /** @class */ (function () {
        function MatTableModule() {
        }
MatTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTableModule });
MatTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            table.CdkTableModule,
            common.CommonModule,
            core$1.MatCommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTableModule, { declarations: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn], imports: [ɵngcc1.CdkTableModule, ɵngcc2.CommonModule, ɵngcc3.MatCommonModule], exports: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTableModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    table.CdkTableModule,
                    common.CommonModule,
                    core$1.MatCommonModule,
                ],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            }]
    }], function () { return []; }, null); })();
        return MatTableModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
     * flaky browser support and the value not being defined in Closure's typings.
     */
    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Data source that accepts a client-side data array and includes native support of filtering,
     * sorting (using MatSort), and pagination (using MatPaginator).
     *
     * Allows for sort customization by overriding sortingDataAccessor, which defines how data
     * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
     * which defines how row data is converted to a string for filter matching.
     *
     * **Note:** This class is meant to be a simple data source to help you get started. As such
     * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
     * interactions. If your app needs to support more advanced use cases, consider implementing your
     * own `DataSource`.
     */
    var MatTableDataSource = /** @class */ (function (_super) {
        tslib.__extends(MatTableDataSource, _super);
        function MatTableDataSource(initialData) {
            if (initialData === void 0) { initialData = []; }
            var _this = _super.call(this) || this;
            /** Stream emitting render data to the table (depends on ordered data changes). */
            _this._renderData = new rxjs.BehaviorSubject([]);
            /** Stream that emits when a new filter string is set on the data source. */
            _this._filter = new rxjs.BehaviorSubject('');
            /** Used to react to internal changes of the paginator that are made by the data source itself. */
            _this._internalPageChanges = new rxjs.Subject();
            /**
             * Subscription to the changes that should trigger an update to the table's rendered rows, such
             * as filtering, sorting, pagination, or base data changes.
             */
            _this._renderChangesSubscription = rxjs.Subscription.EMPTY;
            /**
             * Data accessor function that is used for accessing data properties for sorting through
             * the default sortData function.
             * This default function assumes that the sort header IDs (which defaults to the column name)
             * matches the data's properties (e.g. column Xyz represents data['Xyz']).
             * May be set to a custom function for different behavior.
             * @param data Data object that is being accessed.
             * @param sortHeaderId The name of the column that represents the data.
             */
            _this.sortingDataAccessor = function (data, sortHeaderId) {
                var value = data[sortHeaderId];
                if (coercion._isNumberValue(value)) {
                    var numberValue = Number(value);
                    // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                    // leave them as strings. For more info: https://goo.gl/y5vbSg
                    return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
                }
                return value;
            };
            /**
             * Gets a sorted copy of the data array based on the state of the MatSort. Called
             * after changes are made to the filtered data or when sort changes are emitted from MatSort.
             * By default, the function retrieves the active sort and its direction and compares data
             * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
             * of data ordering.
             * @param data The array of data that should be sorted.
             * @param sort The connected MatSort that holds the current sort state.
             */
            _this.sortData = function (data, sort) {
                var active = sort.active;
                var direction = sort.direction;
                if (!active || direction == '') {
                    return data;
                }
                return data.sort(function (a, b) {
                    var valueA = _this.sortingDataAccessor(a, active);
                    var valueB = _this.sortingDataAccessor(b, active);
                    // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                    // one value exists while the other doesn't. In this case, existing value should come last.
                    // This avoids inconsistent results when comparing values to undefined/null.
                    // If neither value exists, return 0 (equal).
                    var comparatorResult = 0;
                    if (valueA != null && valueB != null) {
                        // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                        if (valueA > valueB) {
                            comparatorResult = 1;
                        }
                        else if (valueA < valueB) {
                            comparatorResult = -1;
                        }
                    }
                    else if (valueA != null) {
                        comparatorResult = 1;
                    }
                    else if (valueB != null) {
                        comparatorResult = -1;
                    }
                    return comparatorResult * (direction == 'asc' ? 1 : -1);
                });
            };
            /**
             * Checks if a data object matches the data source's filter string. By default, each data object
             * is converted to a string of its properties and returns true if the filter has
             * at least one occurrence in that string. By default, the filter string has its whitespace
             * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
             * filter matching.
             * @param data Data object used to check against the filter.
             * @param filter Filter string that has been set on the data source.
             * @returns Whether the filter matches against the data
             */
            _this.filterPredicate = function (data, filter) {
                // Transform the data into a lowercase string of all property values.
                var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
                    // Use an obscure Unicode character to delimit the words in the concatenated string.
                    // This avoids matches where the values of two columns combined will match the user's query
                    // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                    // that has a very low chance of being typed in by somebody in a text field. This one in
                    // particular is "White up-pointing triangle with dot" from
                    // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                    return currentTerm + data[key] + '◬';
                }, '').toLowerCase();
                // Transform the filter by converting it to lowercase and removing whitespace.
                var transformedFilter = filter.trim().toLowerCase();
                return dataStr.indexOf(transformedFilter) != -1;
            };
            _this._data = new rxjs.BehaviorSubject(initialData);
            _this._updateChangeSubscription();
            return _this;
        }
        Object.defineProperty(MatTableDataSource.prototype, "data", {
            /** Array of data that should be rendered by the table, where each object represents one row. */
            get: function () { return this._data.value; },
            set: function (data) { this._data.next(data); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatTableDataSource.prototype, "filter", {
            /**
             * Filter term that should be used to filter out objects from the data array. To override how
             * data objects match to this filter string, provide a custom function for filterPredicate.
             */
            get: function () { return this._filter.value; },
            set: function (filter) { this._filter.next(filter); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatTableDataSource.prototype, "sort", {
            /**
             * Instance of the MatSort directive used by the table to control its sorting. Sort changes
             * emitted by the MatSort will trigger an update to the table's rendered data.
             */
            get: function () { return this._sort; },
            set: function (sort) {
                this._sort = sort;
                this._updateChangeSubscription();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatTableDataSource.prototype, "paginator", {
            /**
             * Instance of the MatPaginator component used by the table to control what page of the data is
             * displayed. Page changes emitted by the MatPaginator will trigger an update to the
             * table's rendered data.
             *
             * Note that the data source uses the paginator's properties to calculate which page of data
             * should be displayed. If the paginator receives its properties as template inputs,
             * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
             * initialized before assigning it to this data source.
             */
            get: function () { return this._paginator; },
            set: function (paginator) {
                this._paginator = paginator;
                this._updateChangeSubscription();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Subscribe to changes that should trigger an update to the table's rendered rows. When the
         * changes occur, process the current state of the filter, sort, and pagination along with
         * the provided base data and send it to the table for rendering.
         */
        MatTableDataSource.prototype._updateChangeSubscription = function () {
            var _this = this;
            // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.
            var sortChange = this._sort ?
                rxjs.merge(this._sort.sortChange, this._sort.initialized) :
                rxjs.of(null);
            var pageChange = this._paginator ?
                rxjs.merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
                rxjs.of(null);
            var dataStream = this._data;
            // Watch for base data or filter changes to provide a filtered set of data.
            var filteredData = rxjs.combineLatest([dataStream, this._filter])
                .pipe(operators.map(function (_a) {
                var _b = tslib.__read(_a, 1), data = _b[0];
                return _this._filterData(data);
            }));
            // Watch for filtered data or sort changes to provide an ordered set of data.
            var orderedData = rxjs.combineLatest([filteredData, sortChange])
                .pipe(operators.map(function (_a) {
                var _b = tslib.__read(_a, 1), data = _b[0];
                return _this._orderData(data);
            }));
            // Watch for ordered data or page changes to provide a paged set of data.
            var paginatedData = rxjs.combineLatest([orderedData, pageChange])
                .pipe(operators.map(function (_a) {
                var _b = tslib.__read(_a, 1), data = _b[0];
                return _this._pageData(data);
            }));
            // Watched for paged data changes and send the result to the table to render.
            this._renderChangesSubscription.unsubscribe();
            this._renderChangesSubscription = paginatedData.subscribe(function (data) { return _this._renderData.next(data); });
        };
        /**
         * Returns a filtered data array where each filter object contains the filter string within
         * the result of the filterTermAccessor function. If no filter is set, returns the data array
         * as provided.
         */
        MatTableDataSource.prototype._filterData = function (data) {
            var _this = this;
            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData =
                !this.filter ? data : data.filter(function (obj) { return _this.filterPredicate(obj, _this.filter); });
            if (this.paginator) {
                this._updatePaginator(this.filteredData.length);
            }
            return this.filteredData;
        };
        /**
         * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
         * data array as provided. Uses the default data accessor for data lookup, unless a
         * sortDataAccessor function is defined.
         */
        MatTableDataSource.prototype._orderData = function (data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
                return data;
            }
            return this.sortData(data.slice(), this.sort);
        };
        /**
         * Returns a paged slice of the provided data array according to the provided MatPaginator's page
         * index and length. If there is no paginator provided, returns the data array as provided.
         */
        MatTableDataSource.prototype._pageData = function (data) {
            if (!this.paginator) {
                return data;
            }
            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
        };
        /**
         * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
         * index does not exceed the paginator's last page. Values are changed in a resolved promise to
         * guard against making property changes within a round of change detection.
         */
        MatTableDataSource.prototype._updatePaginator = function (filteredDataLength) {
            var _this = this;
            Promise.resolve().then(function () {
                var paginator = _this.paginator;
                if (!paginator) {
                    return;
                }
                paginator.length = filteredDataLength;
                // If the page index is set beyond the page, reduce it to the last page.
                if (paginator.pageIndex > 0) {
                    var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                    var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                    if (newPageIndex !== paginator.pageIndex) {
                        paginator.pageIndex = newPageIndex;
                        // Since the paginator only emits after user-generated changes,
                        // we need our own stream so we know to should re-render the data.
                        _this._internalPageChanges.next();
                    }
                }
            });
        };
        /**
         * Used by the MatTable. Called when it connects to the data source.
         * @docs-private
         */
        MatTableDataSource.prototype.connect = function () { return this._renderData; };
        /**
         * Used by the MatTable. Called when it is destroyed. No-op.
         * @docs-private
         */
        MatTableDataSource.prototype.disconnect = function () { };
        return MatTableDataSource;
    }(table.DataSource));

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

    exports.MatCell = MatCell;
    exports.MatCellDef = MatCellDef;
    exports.MatColumnDef = MatColumnDef;
    exports.MatFooterCell = MatFooterCell;
    exports.MatFooterCellDef = MatFooterCellDef;
    exports.MatFooterRow = MatFooterRow;
    exports.MatFooterRowDef = MatFooterRowDef;
    exports.MatHeaderCell = MatHeaderCell;
    exports.MatHeaderCellDef = MatHeaderCellDef;
    exports.MatHeaderRow = MatHeaderRow;
    exports.MatHeaderRowDef = MatHeaderRowDef;
    exports.MatRow = MatRow;
    exports.MatRowDef = MatRowDef;
    exports.MatTable = MatTable;
    exports.MatTableDataSource = MatTableDataSource;
    exports.MatTableModule = MatTableModule;
    exports.MatTextColumn = MatTextColumn;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-table.umd.js.map