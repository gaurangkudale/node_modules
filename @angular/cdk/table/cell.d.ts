/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { ElementRef, TemplateRef } from '@angular/core';
import { CanStick, CanStickCtor } from './can-stick';
/** Base interface for a cell definition. Captures a column's cell template definition. */
import * as ɵngcc0 from '@angular/core';
export interface CellDef {
    template: TemplateRef<any>;
}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export declare class CdkCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCellDef, "[cdkCellDef]", never, {}, {}, never>;
}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export declare class CdkHeaderCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCellDef, "[cdkHeaderCellDef]", never, {}, {}, never>;
}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export declare class CdkFooterCellDef implements CellDef {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCellDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCellDef, "[cdkFooterCellDef]", never, {}, {}, never>;
}
/** @docs-private */
declare class CdkColumnDefBase {
}
declare const _CdkColumnDefBase: CanStickCtor & typeof CdkColumnDefBase;
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
export declare class CdkColumnDef extends _CdkColumnDefBase implements CanStick {
    /** Unique name for this column. */
    get name(): string;
    set name(name: string);
    _name: string;
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd(): boolean;
    set stickyEnd(v: boolean);
    _stickyEnd: boolean;
    /** @docs-private */
    cell: CdkCellDef;
    /** @docs-private */
    headerCell: CdkHeaderCellDef;
    /** @docs-private */
    footerCell: CdkFooterCellDef;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     */
    cssClassFriendlyName: string;
    static ngAcceptInputType_sticky: BooleanInput;
    static ngAcceptInputType_stickyEnd: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkColumnDef, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkColumnDef, "[cdkColumnDef]", never, { "sticky": "sticky"; "name": "cdkColumnDef"; "stickyEnd": "stickyEnd"; }, {}, ["cell", "headerCell", "footerCell"]>;
}
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
export declare class BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
}
/** Header cell template container that adds the right classes and role. */
export declare class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkHeaderCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkHeaderCell, "cdk-header-cell, th[cdk-header-cell]", never, {}, {}, never>;
}
/** Footer cell template container that adds the right classes and role. */
export declare class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkFooterCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkFooterCell, "cdk-footer-cell, td[cdk-footer-cell]", never, {}, {}, never>;
}
/** Cell template container that adds the right classes and role. */
export declare class CdkCell extends BaseCdkCell {
    constructor(columnDef: CdkColumnDef, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCell, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCell, "cdk-cell, td[cdk-cell]", never, {}, {}, never>;
}
export {};

//# sourceMappingURL=cell.d.ts.map