/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, IterableDiffers, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
import * as ɵngcc0 from '@angular/core';
export var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
var BaseRowDef = /** @class */ (function () {
    function BaseRowDef(
    /** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    BaseRowDef.prototype.ngOnChanges = function (changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            var columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    };
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    BaseRowDef.prototype.getColumnsDiff = function () {
        return this._columnsDiffer.diff(this.columns);
    };
    /** Gets this row def's relevant cell template from the provided column def. */
    BaseRowDef.prototype.extractCellTemplate = function (column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    };
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
BaseRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BaseRowDef, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

    return BaseRowDef;
}());
export { BaseRowDef };
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
var CdkHeaderRowDefBase = /** @class */ (function (_super) {
    __extends(CdkHeaderRowDefBase, _super);
    function CdkHeaderRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkHeaderRowDefBase;
}(BaseRowDef));
var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var CdkHeaderRowDef = /** @class */ (function (_super) {
    __extends(CdkHeaderRowDef, _super);
    function CdkHeaderRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    CdkHeaderRowDef.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /** @nocollapse */
    CdkHeaderRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers }
    ]; };
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
    return CdkHeaderRowDef;
}(_CdkHeaderRowDefBase));
export { CdkHeaderRowDef };
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
var CdkFooterRowDefBase = /** @class */ (function (_super) {
    __extends(CdkFooterRowDefBase, _super);
    function CdkFooterRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkFooterRowDefBase;
}(BaseRowDef));
var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var CdkFooterRowDef = /** @class */ (function (_super) {
    __extends(CdkFooterRowDef, _super);
    function CdkFooterRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    CdkFooterRowDef.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /** @nocollapse */
    CdkFooterRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers }
    ]; };
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
    return CdkFooterRowDef;
}(_CdkFooterRowDefBase));
export { CdkFooterRowDef };
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
var CdkRowDef = /** @class */ (function (_super) {
    __extends(CdkRowDef, _super);
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    function CdkRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    /** @nocollapse */
    CdkRowDef.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers }
    ]; };
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
    return CdkRowDef;
}(BaseRowDef));
export { CdkRowDef };
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
var CdkCellOutlet = /** @class */ (function () {
    function CdkCellOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    CdkCellOutlet.prototype.ngOnDestroy = function () {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    };
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    /** @nocollapse */
    CdkCellOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
CdkCellOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellOutlet, [{
        type: Directive,
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, null); })();
    return CdkCellOutlet;
}());
export { CdkCellOutlet };
/** Header template container that contains the cell outlet. Adds the right class and role. */
var CdkHeaderRow = /** @class */ (function () {
    function CdkHeaderRow() {
    }
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRow, [{
        type: Component,
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
    return CdkHeaderRow;
}());
export { CdkHeaderRow };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var CdkFooterRow = /** @class */ (function () {
    function CdkFooterRow() {
    }
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRow, [{
        type: Component,
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
    return CdkFooterRow;
}());
export { CdkFooterRow };
/** Data row template container that contains the cell outlet. Adds the right class and role. */
var CdkRow = /** @class */ (function () {
    function CdkRow() {
    }
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRow, [{
        type: Component,
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, null); })();
    return CdkRow;
}());
export { CdkRow };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBR1QsZUFBZSxFQUlmLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyw2Q0FBNkMsQ0FBQztBQUU5RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFBOEMsSUFPNUM7QUFDTSxJQUFGLG9CQUFvQixDQUFRLFFBQTBCLEVBQVksUUFBeUI7QUFDakcsUUFEa0MsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxRQUFXLGFBQVEsR0FBUixRQUFRLENBQWlCO0FBQUMsSUFDaEcsQ0FBQztBQUNILElBQ0UsZ0NBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQUksUUFDcEMsOEZBQThGO0FBQ2xHLFFBQUksaUVBQWlFO0FBQ3JFLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDOUIsWUFBTSxJQUFNLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BGLFlBQU0sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqRSxZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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UyxTQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQixzQkFDaEMsUUFBUSxFQUFFLGdCQUFnQixzQkFDMUIsSUFBSSxFQUFFLDBCQUNKLE9BQU8sRUFBRSxTQUFTLDBCQUNsQixNQUFNLEVBQUUsS0FBSyx1QkFDZCxzQkFDRDs7d0NBQStGO0VBQy9GLCtDQUErQztLQUMvQyxlQUFlLEVBQUU7O0dBQXVCLENBQUMsT0FBTyxzQkFDaEQsYUFBYSxFQUFFO2VBQWlCLENBQUMsSUFBSSxrQkFDdEM7Ozs7Ozs7Ozs7Z0RBQ087QUFBQyxJQUNULGFBQUM7QUFDQSxDQURBLEFBYkQsSUFhQztBQUNELFNBRmEsTUFBTTtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSXRlcmFibGVDaGFuZ2VzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5TdGljaywgQ2FuU3RpY2tDdG9yLCBtaXhpbkhhc1N0aWNreUlucHV0fSBmcm9tICcuL2Nhbi1zdGljayc7XG5pbXBvcnQge0Nka0NlbGxEZWYsIENka0NvbHVtbkRlZn0gZnJvbSAnLi9jZWxsJztcblxuLyoqXG4gKiBUaGUgcm93IHRlbXBsYXRlIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlIG1hdC10YWJsZS4gU2hvdWxkIG5vdCBiZSB1c2VkIG91dHNpZGUgb2YgdGhlXG4gKiBtYXRlcmlhbCBsaWJyYXJ5LlxuICovXG5leHBvcnQgY29uc3QgQ0RLX1JPV19URU1QTEFURSA9IGA8bmctY29udGFpbmVyIGNka0NlbGxPdXRsZXQ+PC9uZy1jb250YWluZXI+YDtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciB0aGUgQ2RrSGVhZGVyUm93RGVmIGFuZCBDZGtSb3dEZWYgdGhhdCBoYW5kbGVzIGNoZWNraW5nIHRoZWlyIGNvbHVtbnMgaW5wdXRzXG4gKiBmb3IgY2hhbmdlcyBhbmQgbm90aWZ5aW5nIHRoZSB0YWJsZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSb3dEZWYgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiogVGhlIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoaXMgcm93LiAqL1xuICBjb2x1bW5zOiBJdGVyYWJsZTxzdHJpbmc+O1xuXG4gIC8qKiBEaWZmZXIgdXNlZCB0byBjaGVjayBpZiBhbnkgY2hhbmdlcyB3ZXJlIG1hZGUgdG8gdGhlIGNvbHVtbnMuICovXG4gIHByb3RlY3RlZCBfY29sdW1uc0RpZmZlcjogSXRlcmFibGVEaWZmZXI8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBAZG9jcy1wcml2YXRlICovIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgcHJvdGVjdGVkIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgY29sdW1ucyBkaWZmZXIgaWYgb25lIGRvZXMgbm90IHlldCBleGlzdC4gSW5pdGlhbGl6ZSBpdCBiYXNlZCBvbiBpbml0aWFsIHZhbHVlXG4gICAgLy8gb2YgdGhlIGNvbHVtbnMgcHJvcGVydHkgb3IgYW4gZW1wdHkgYXJyYXkgaWYgbm9uZSBpcyBwcm92aWRlZC5cbiAgICBpZiAoIXRoaXMuX2NvbHVtbnNEaWZmZXIpIHtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSAoY2hhbmdlc1snY29sdW1ucyddICYmIGNoYW5nZXNbJ2NvbHVtbnMnXS5jdXJyZW50VmFsdWUpIHx8IFtdO1xuICAgICAgdGhpcy5fY29sdW1uc0RpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZChjb2x1bW5zKS5jcmVhdGUoKTtcbiAgICAgIHRoaXMuX2NvbHVtbnNEaWZmZXIuZGlmZihjb2x1bW5zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBjdXJyZW50IGNvbHVtbnMgYW5kIHRoZSBjb2x1bW5zIGZyb20gdGhlIGxhc3QgZGlmZiwgb3IgbnVsbFxuICAgKiBpZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlLlxuICAgKi9cbiAgZ2V0Q29sdW1uc0RpZmYoKTogSXRlcmFibGVDaGFuZ2VzPGFueT58bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNEaWZmZXIuZGlmZih0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhpcyByb3cgZGVmJ3MgcmVsZXZhbnQgY2VsbCB0ZW1wbGF0ZSBmcm9tIHRoZSBwcm92aWRlZCBjb2x1bW4gZGVmLiAqL1xuICBleHRyYWN0Q2VsbFRlbXBsYXRlKGNvbHVtbjogQ2RrQ29sdW1uRGVmKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDZGtIZWFkZXJSb3dEZWYpIHtcbiAgICAgIHJldHVybiBjb2x1bW4uaGVhZGVyQ2VsbC50ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDZGtGb290ZXJSb3dEZWYpIHtcbiAgICAgIHJldHVybiBjb2x1bW4uZm9vdGVyQ2VsbC50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbHVtbi5jZWxsLnRlbXBsYXRlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIENka0hlYWRlclJvd0RlZi5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBDZGtIZWFkZXJSb3dEZWZCYXNlIGV4dGVuZHMgQmFzZVJvd0RlZiB7fVxuY29uc3QgX0Nka0hlYWRlclJvd0RlZkJhc2U6IENhblN0aWNrQ3RvciZ0eXBlb2YgQ2RrSGVhZGVyUm93RGVmQmFzZSA9XG4gICAgbWl4aW5IYXNTdGlja3lJbnB1dChDZGtIZWFkZXJSb3dEZWZCYXNlKTtcblxuLyoqXG4gKiBIZWFkZXIgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBoZWFkZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtIZWFkZXJSb3dEZWZdJyxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IGNka0hlYWRlclJvd0RlZicsICdzdGlja3k6IGNka0hlYWRlclJvd0RlZlN0aWNreSddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtIZWFkZXJSb3dEZWYgZXh0ZW5kcyBfQ2RrSGVhZGVyUm93RGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrLCBPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICAgIHN1cGVyKHRlbXBsYXRlLCBfZGlmZmVycyk7XG4gIH1cblxuICAvLyBQcmVyZW5kZXIgZmFpbHMgdG8gcmVjb2duaXplIHRoYXQgbmdPbkNoYW5nZXMgaW4gYSBwYXJ0IG9mIHRoaXMgY2xhc3MgdGhyb3VnaCBpbmhlcml0YW5jZS5cbiAgLy8gRXhwbGljaXRseSBkZWZpbmUgaXQgc28gdGhhdCB0aGUgbWV0aG9kIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBBbmd1bGFyIGxpZmVjeWNsZS5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIENka0Zvb3RlclJvd0RlZi5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBDZGtGb290ZXJSb3dEZWZCYXNlIGV4dGVuZHMgQmFzZVJvd0RlZiB7fVxuY29uc3QgX0Nka0Zvb3RlclJvd0RlZkJhc2U6IENhblN0aWNrQ3RvciZ0eXBlb2YgQ2RrRm9vdGVyUm93RGVmQmFzZSA9XG4gICAgbWl4aW5IYXNTdGlja3lJbnB1dChDZGtGb290ZXJSb3dEZWZCYXNlKTtcblxuLyoqXG4gKiBGb290ZXIgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgZm9vdGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciBmb290ZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtGb290ZXJSb3dEZWZdJyxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IGNka0Zvb3RlclJvd0RlZicsICdzdGlja3k6IGNka0Zvb3RlclJvd0RlZlN0aWNreSddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJSb3dEZWYgZXh0ZW5kcyBfQ2RrRm9vdGVyUm93RGVmQmFzZSBpbXBsZW1lbnRzIENhblN0aWNrLCBPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICAgIHN1cGVyKHRlbXBsYXRlLCBfZGlmZmVycyk7XG4gIH1cblxuICAvLyBQcmVyZW5kZXIgZmFpbHMgdG8gcmVjb2duaXplIHRoYXQgbmdPbkNoYW5nZXMgaW4gYSBwYXJ0IG9mIHRoaXMgY2xhc3MgdGhyb3VnaCBpbmhlcml0YW5jZS5cbiAgLy8gRXhwbGljaXRseSBkZWZpbmUgaXQgc28gdGhhdCB0aGUgbWV0aG9kIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBBbmd1bGFyIGxpZmVjeWNsZS5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vKipcbiAqIERhdGEgcm93IGRlZmluaXRpb24gZm9yIHRoZSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBvdGhlciByb3cgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkgYW5kXG4gKiBhIHdoZW4gcHJlZGljYXRlIHRoYXQgZGVzY3JpYmVzIHdoZW4gdGhpcyByb3cgc2hvdWxkIGJlIHVzZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtSb3dEZWZdJyxcbiAgaW5wdXRzOiBbJ2NvbHVtbnM6IGNka1Jvd0RlZkNvbHVtbnMnLCAnd2hlbjogY2RrUm93RGVmV2hlbiddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtSb3dEZWY8VD4gZXh0ZW5kcyBCYXNlUm93RGVmIHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoaXMgcm93IHRlbXBsYXRlIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgcHJvdmlkZWQgaW5kZXhcbiAgICogYW5kIHJvdyBkYXRhLiBJZiBsZWZ0IHVuZGVmaW5lZCwgdGhpcyByb3cgd2lsbCBiZSBjb25zaWRlcmVkIHRoZSBkZWZhdWx0IHJvdyB0ZW1wbGF0ZSB0byB1c2VcbiAgICogd2hlbiBubyBvdGhlciB3aGVuIGZ1bmN0aW9ucyByZXR1cm4gdHJ1ZSBmb3IgdGhlIGRhdGEuXG4gICAqIEZvciBldmVyeSByb3csIHRoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIHdoZW4gZnVuY3Rpb24gdGhhdCBwYXNzZXMgb3IgYW4gdW5kZWZpbmVkIHRvIGRlZmF1bHQuXG4gICAqL1xuICB3aGVuOiAoaW5kZXg6IG51bWJlciwgcm93RGF0YTogVCkgPT4gYm9vbGVhbjtcblxuICAvLyBUT0RPKGFuZHJld3NlZ3Vpbik6IEFkZCBhbiBpbnB1dCBmb3IgcHJvdmlkaW5nIGEgc3dpdGNoIGZ1bmN0aW9uIHRvIGRldGVybWluZVxuICAvLyAgIGlmIHRoaXMgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQuXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIF9kaWZmZXJzKTtcbiAgfVxufVxuXG4vKiogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgcm93IGNlbGxzIHdoZW4gYG11bHRpVGVtcGxhdGVEYXRhUm93c2AgaXMgZmFsc2UgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrQ2VsbE91dGxldFJvd0NvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIHJvdyB0aGF0IHRoaXMgY2VsbCBpcyBsb2NhdGVkIHdpdGhpbi4gKi9cbiAgJGltcGxpY2l0PzogVDtcblxuICAvKiogSW5kZXggb2YgdGhlIGRhdGEgb2JqZWN0IGluIHRoZSBwcm92aWRlZCBkYXRhIGFycmF5LiAqL1xuICBpbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgcm93cy4gKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xuICBmaXJzdD86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgbGFzdCByb3cuICovXG4gIGxhc3Q/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBldmVuLW51bWJlcmVkIGluZGV4LiAqL1xuICBldmVuPzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gb2RkLW51bWJlcmVkIGluZGV4LiAqL1xuICBvZGQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbnRleHQgcHJvdmlkZWQgdG8gdGhlIHJvdyBjZWxscyB3aGVuIGBtdWx0aVRlbXBsYXRlRGF0YVJvd3NgIGlzIHRydWUuIFRoaXMgY29udGV4dCBpcyB0aGUgc2FtZVxuICogYXMgQ2RrQ2VsbE91dGxldFJvd0NvbnRleHQgZXhjZXB0IHRoYXQgdGhlIHNpbmdsZSBgaW5kZXhgIHZhbHVlIGlzIHJlcGxhY2VkIGJ5IGBkYXRhSW5kZXhgIGFuZFxuICogYHJlbmRlckluZGV4YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtDZWxsT3V0bGV0TXVsdGlSb3dDb250ZXh0PFQ+IHtcbiAgLyoqIERhdGEgZm9yIHRoZSByb3cgdGhhdCB0aGlzIGNlbGwgaXMgbG9jYXRlZCB3aXRoaW4uICovXG4gICRpbXBsaWNpdD86IFQ7XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBkYXRhIG9iamVjdCBpbiB0aGUgcHJvdmlkZWQgZGF0YSBhcnJheS4gKi9cbiAgZGF0YUluZGV4PzogbnVtYmVyO1xuXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgcmVuZGVyZWQgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICByZW5kZXJJbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgcm93cy4gKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgcm93LiAqL1xuICBmaXJzdD86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiB0aGUgbGFzdCByb3cuICovXG4gIGxhc3Q/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBldmVuLW51bWJlcmVkIGluZGV4LiAqL1xuICBldmVuPzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIGEgcm93IHdpdGggYW4gb2RkLW51bWJlcmVkIGluZGV4LiAqL1xuICBvZGQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE91dGxldCBmb3IgcmVuZGVyaW5nIGNlbGxzIGluc2lkZSBvZiBhIHJvdyBvciBoZWFkZXIgcm93LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjZGtDZWxsT3V0bGV0XSd9KVxuZXhwb3J0IGNsYXNzIENka0NlbGxPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogVGhlIG9yZGVyZWQgbGlzdCBvZiBjZWxscyB0byByZW5kZXIgd2l0aGluIHRoaXMgb3V0bGV0J3MgdmlldyBjb250YWluZXIgKi9cbiAgY2VsbHM6IENka0NlbGxEZWZbXTtcblxuICAvKiogVGhlIGRhdGEgY29udGV4dCB0byBiZSBwcm92aWRlZCB0byBlYWNoIGNlbGwgKi9cbiAgY29udGV4dDogYW55O1xuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgY29udGFpbmluZyB0aGUgbGF0ZXN0IGNvbnN0cnVjdGVkIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXG4gICAqIFVzZWQgYnkgdGhlIENESyB0YWJsZSB3aGVuIGVhY2ggQ2RrSGVhZGVyUm93IGFuZCBDZGtSb3cgY29tcG9uZW50IGlzIGNyZWF0ZWQgdXNpbmdcbiAgICogY3JlYXRlRW1iZWRkZWRWaWV3LiBBZnRlciBvbmUgb2YgdGhlc2UgY29tcG9uZW50cyBhcmUgY3JlYXRlZCwgdGhpcyBwcm9wZXJ0eSB3aWxsIHByb3ZpZGVcbiAgICogYSBoYW5kbGUgdG8gcHJvdmlkZSB0aGF0IGNvbXBvbmVudCdzIGNlbGxzIGFuZCBjb250ZXh0LiBBZnRlciBpbml0LCB0aGUgQ2RrQ2VsbE91dGxldCB3aWxsXG4gICAqIGNvbnN0cnVjdCB0aGUgY2VsbHMgd2l0aCB0aGUgcHJvdmlkZWQgY29udGV4dC5cbiAgICovXG4gIHN0YXRpYyBtb3N0UmVjZW50Q2VsbE91dGxldDogQ2RrQ2VsbE91dGxldHxudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBDZGtDZWxsT3V0bGV0Lm1vc3RSZWNlbnRDZWxsT3V0bGV0ID0gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIElmIHRoaXMgd2FzIHRoZSBsYXN0IG91dGxldCBiZWluZyByZW5kZXJlZCBpbiB0aGUgdmlldywgcmVtb3ZlIHRoZSByZWZlcmVuY2VcbiAgICAvLyBmcm9tIHRoZSBzdGF0aWMgcHJvcGVydHkgYWZ0ZXIgaXQgaGFzIGJlZW4gZGVzdHJveWVkIHRvIGF2b2lkIGxlYWtpbmcgbWVtb3J5LlxuICAgIGlmIChDZGtDZWxsT3V0bGV0Lm1vc3RSZWNlbnRDZWxsT3V0bGV0ID09PSB0aGlzKSB7XG4gICAgICBDZGtDZWxsT3V0bGV0Lm1vc3RSZWNlbnRDZWxsT3V0bGV0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEhlYWRlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWhlYWRlci1yb3csIHRyW2Nkay1oZWFkZXItcm93XScsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1oZWFkZXItcm93JyxcbiAgICAncm9sZSc6ICdyb3cnLFxuICB9LFxuICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENka0hlYWRlclJvdyB7XG59XG5cblxuLyoqIEZvb3RlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWZvb3Rlci1yb3csIHRyW2Nkay1mb290ZXItcm93XScsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1mb290ZXItcm93JyxcbiAgICAncm9sZSc6ICdyb3cnLFxuICB9LFxuICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENka0Zvb3RlclJvdyB7XG59XG5cbi8qKiBEYXRhIHJvdyB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXJvdywgdHJbY2RrLXJvd10nLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstcm93JyxcbiAgICAncm9sZSc6ICdyb3cnLFxuICB9LFxuICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENka1JvdyB7XG59XG4iXX0=