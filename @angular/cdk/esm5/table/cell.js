/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ContentChild, Directive, ElementRef, Input, TemplateRef } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
import * as ɵngcc0 from '@angular/core';
var CdkCellDef = /** @class */ (function () {
    function CdkCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    /** @nocollapse */
    CdkCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
    return CdkCellDef;
}());
export { CdkCellDef };
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = /** @class */ (function () {
    function CdkHeaderCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    /** @nocollapse */
    CdkHeaderCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
    return CdkHeaderCellDef;
}());
export { CdkHeaderCellDef };
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var CdkFooterCellDef = /** @class */ (function () {
    function CdkFooterCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    /** @nocollapse */
    CdkFooterCellDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
    return CdkFooterCellDef;
}());
export { CdkFooterCellDef };
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
var CdkColumnDefBase = /** @class */ (function () {
    function CdkColumnDefBase() {
    }
    return CdkColumnDefBase;
}());
var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = /** @class */ (function (_super) {
    __extends(CdkColumnDef, _super);
    function CdkColumnDef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._stickyEnd = false;
        return _this;
    }
    Object.defineProperty(CdkColumnDef.prototype, "name", {
        /** Unique name for this column. */
        get: function () {
            return this._name;
        },
        set: function (name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!name) {
                return;
            }
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         */
        get: function () {
            return this._stickyEnd;
        },
        set: function (v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = coerceBooleanProperty(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        },
        enumerable: true,
        configurable: true
    });
    CdkColumnDef.propDecorators = {
        name: [{ type: Input, args: ['cdkColumnDef',] }],
        stickyEnd: [{ type: Input, args: ['stickyEnd',] }],
        cell: [{ type: ContentChild, args: [CdkCellDef,] }],
        headerCell: [{ type: ContentChild, args: [CdkHeaderCellDef,] }],
        footerCell: [{ type: ContentChild, args: [CdkFooterCellDef,] }]
    };
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return ɵCdkColumnDef_BaseFactory(t || CdkColumnDef); };
CdkColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkHeaderCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵCdkColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(CdkColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkColumnDef, [{
        type: Directive,
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], null, { name: [{
            type: Input,
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: Input,
            args: ['stickyEnd']
        }], cell: [{
            type: ContentChild,
            args: [CdkCellDef]
        }], headerCell: [{
            type: ContentChild,
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: ContentChild,
            args: [CdkFooterCellDef]
        }] }); })();
    return CdkColumnDef;
}(_CdkColumnDefBase));
export { CdkColumnDef };
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
var BaseCdkCell = /** @class */ (function () {
    function BaseCdkCell(columnDef, elementRef) {
        var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
        elementRef.nativeElement.classList.add(columnClassName);
    }
    return BaseCdkCell;
}());
export { BaseCdkCell };
/** Header cell template container that adds the right classes and role. */
var CdkHeaderCell = /** @class */ (function (_super) {
    __extends(CdkHeaderCell, _super);
    function CdkHeaderCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    /** @nocollapse */
    CdkHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return CdkHeaderCell;
}(BaseCdkCell));
export { CdkHeaderCell };
/** Footer cell template container that adds the right classes and role. */
var CdkFooterCell = /** @class */ (function (_super) {
    __extends(CdkFooterCell, _super);
    function CdkFooterCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    /** @nocollapse */
    CdkFooterCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return CdkFooterCell;
}(BaseCdkCell));
export { CdkFooterCell };
/** Cell template container that adds the right classes and role. */
var CdkCell = /** @class */ (function (_super) {
    __extends(CdkCell, _super);
    function CdkCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    /** @nocollapse */
    CdkCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef }
    ]; };
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return CdkCell;
}(BaseCdkCell));
export { CdkCell };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS9jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFReEU7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSDtBQUNPLElBQ0wsb0JBQVksb0JBQW9CLENBQVEsUUFBMEI7QUFBSSxRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFrQjtBQUFDLElBQUUsQ0FBQyxBQUQvRDtBQUFDO3VCQURULFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxyREFDVztZQURHLEVBQUMsZEFFTSxnQkFmUyxXQUFXO0FBQUc7Ozs7Ozs0RUFBUztBQUFDLElBZ0I1RSxpQkFBQztBQUVELENBRkMsQUFIRCxJQUdDO0FBQ0QsU0FIYSxVQUFVO0FBSXZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPLElBQ0wsMEJBQVksb0JBQW9CLENBQVEsUUFBMEI7QUFBSSxRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFrQjtBQUFDLElBQUUsQ0FBQyxBQUQvRDtBQUFDOzZCQURULFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSwzREFDVztrQkFEUyxFQUFDLHBCQUVBLGdCQXhCUyxXQUFXO0FBQUc7Ozs7Ozs0RUFBUztBQUFDLElBeUI1RSx1QkFBQztBQUVELENBRkMsQUFIRCxJQUdDO0FBQ0QsU0FIYSxnQkFBZ0I7QUFJN0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ08sSUFDTCwwQkFBWSxvQkFBb0IsQ0FB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QU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUc5QixJQUZBLENBQUMsQUFITTtBQUFDO29CQVBULFNBQVMsU0FBQyx0Q0FPc0I7UUFOL0IsUUFBUSxFQUFFLGxCQU84QixnQkFBakIsWUFBWTtVQVBELFZBT0ssZ0JBdEpSLFVBQVU7R0FnSnpDLElBQUksRUFBRSxUQWhKc0M7eUJBaUoxQyxPQUFPLEVBQUUsVUFBVSwwQkFDbkIsTUFBTSxFQUFFLFVBQVUsdUJBQ25CLG1CQUNGOzs7Ozs7Ozs7OzttR0FwSnNEO0FBQUMsSUF5SnhELGNBQUM7QUFDQSxDQURBLEFBWEQsQ0FPNkIsV0FBVyxHQUl2QztBQUNELFNBTGEsT0FBTztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5TdGljaywgQ2FuU3RpY2tDdG9yLCBtaXhpbkhhc1N0aWNreUlucHV0fSBmcm9tICcuL2Nhbi1zdGljayc7XG5cblxuLyoqIEJhc2UgaW50ZXJmYWNlIGZvciBhIGNlbGwgZGVmaW5pdGlvbi4gQ2FwdHVyZXMgYSBjb2x1bW4ncyBjZWxsIHRlbXBsYXRlIGRlZmluaXRpb24uICovXG5leHBvcnQgaW50ZXJmYWNlIENlbGxEZWYge1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cblxuLyoqXG4gKiBDZWxsIGRlZmluaXRpb24gZm9yIGEgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZGF0YSByb3cgY2VsbCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2RrQ2VsbERlZl0nfSlcbmV4cG9ydCBjbGFzcyBDZGtDZWxsRGVmIGltcGxlbWVudHMgQ2VsbERlZiB7XG4gIGNvbnN0cnVjdG9yKC8qKiBAZG9jcy1wcml2YXRlICovIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBIZWFkZXIgY2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGhlYWRlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2RrSGVhZGVyQ2VsbERlZl0nfSlcbmV4cG9ydCBjbGFzcyBDZGtIZWFkZXJDZWxsRGVmIGltcGxlbWVudHMgQ2VsbERlZiB7XG4gIGNvbnN0cnVjdG9yKC8qKiBAZG9jcy1wcml2YXRlICovIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLyoqXG4gKiBGb290ZXIgY2VsbCBkZWZpbml0aW9uIGZvciBhIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtbidzIGZvb3RlciBjZWxsIGFuZCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbY2RrRm9vdGVyQ2VsbERlZl0nfSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJDZWxsRGVmIGltcGxlbWVudHMgQ2VsbERlZiB7XG4gIGNvbnN0cnVjdG9yKC8qKiBAZG9jcy1wcml2YXRlICovIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBDZGtDb2x1bW5EZWYuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgQ2RrQ29sdW1uRGVmQmFzZSB7fVxuY29uc3QgX0Nka0NvbHVtbkRlZkJhc2U6IENhblN0aWNrQ3RvciZ0eXBlb2YgQ2RrQ29sdW1uRGVmQmFzZSA9XG4gICAgbWl4aW5IYXNTdGlja3lJbnB1dChDZGtDb2x1bW5EZWZCYXNlKTtcblxuLyoqXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIERlZmluZXMgYSBzZXQgb2YgY2VsbHMgYXZhaWxhYmxlIGZvciBhIHRhYmxlIGNvbHVtbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0NvbHVtbkRlZl0nLFxuICBpbnB1dHM6IFsnc3RpY2t5J10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiAnTUFUX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYnLCB1c2VFeGlzdGluZzogQ2RrQ29sdW1uRGVmfV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0NvbHVtbkRlZiBleHRlbmRzIF9DZGtDb2x1bW5EZWZCYXNlIGltcGxlbWVudHMgQ2FuU3RpY2sge1xuICAvKiogVW5pcXVlIG5hbWUgZm9yIHRoaXMgY29sdW1uLiAqL1xuICBASW5wdXQoJ2Nka0NvbHVtbkRlZicpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgLy8gSWYgdGhlIGRpcmVjdGl2ZSBpcyBzZXQgd2l0aG91dCBhIG5hbWUgKHVwZGF0ZWQgcHJvZ3JhbWF0aWNhbGx5KSwgdGhlbiB0aGlzIHNldHRlciB3aWxsXG4gICAgLy8gdHJpZ2dlciB3aXRoIGFuIGVtcHR5IHN0cmluZyBhbmQgc2hvdWxkIG5vdCBvdmVyd3JpdGUgdGhlIHByb2dyYW1hdGljYWxseSBzZXQgdmFsdWUuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jc3NDbGFzc0ZyaWVuZGx5TmFtZSA9IG5hbWUucmVwbGFjZSgvW15hLXowLTlfLV0vaWcsICctJyk7XG4gIH1cbiAgX25hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGNvbHVtbiBzaG91bGQgYmUgc3RpY2t5IHBvc2l0aW9uZWQgb24gdGhlIGVuZCBvZiB0aGUgcm93LiBTaG91bGQgbWFrZSBzdXJlXG4gICAqIHRoYXQgaXQgbWltaWNzIHRoZSBgQ2FuU3RpY2tgIG1peGluIHN1Y2ggdGhhdCBgX2hhc1N0aWNreUNoYW5nZWRgIGlzIHNldCB0byB0cnVlIGlmIHRoZSB2YWx1ZVxuICAgKiBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgKi9cbiAgQElucHV0KCdzdGlja3lFbmQnKVxuICBnZXQgc3RpY2t5RW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGlja3lFbmQ7XG4gIH1cbiAgc2V0IHN0aWNreUVuZCh2OiBib29sZWFuKSB7XG4gICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5fc3RpY2t5RW5kO1xuICAgIHRoaXMuX3N0aWNreUVuZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLl9oYXNTdGlja3lDaGFuZ2VkID0gcHJldlZhbHVlICE9PSB0aGlzLl9zdGlja3lFbmQ7XG4gIH1cbiAgX3N0aWNreUVuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBDb250ZW50Q2hpbGQoQ2RrQ2VsbERlZikgY2VsbDogQ2RrQ2VsbERlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAQ29udGVudENoaWxkKENka0hlYWRlckNlbGxEZWYpIGhlYWRlckNlbGw6IENka0hlYWRlckNlbGxEZWY7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQENvbnRlbnRDaGlsZChDZGtGb290ZXJDZWxsRGVmKSBmb290ZXJDZWxsOiBDZGtGb290ZXJDZWxsRGVmO1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1lZCB2ZXJzaW9uIG9mIHRoZSBjb2x1bW4gbmFtZSB0aGF0IGNhbiBiZSB1c2VkIGFzIHBhcnQgb2YgYSBDU1MgY2xhc3NuYW1lLiBFeGNsdWRlc1xuICAgKiBhbGwgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzICctJyBhbmQgJ18nLiBBbnkgY2hhcmFjdGVycyB0aGF0XG4gICAqIGRvIG5vdCBtYXRjaCBhcmUgcmVwbGFjZWQgYnkgdGhlICctJyBjaGFyYWN0ZXIuXG4gICAqL1xuICBjc3NDbGFzc0ZyaWVuZGx5TmFtZTogc3RyaW5nO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja3k6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreUVuZDogQm9vbGVhbklucHV0O1xufVxuXG4vKiogQmFzZSBjbGFzcyBmb3IgdGhlIGNlbGxzLiBBZGRzIGEgQ1NTIGNsYXNzbmFtZSB0aGF0IGlkZW50aWZpZXMgdGhlIGNvbHVtbiBpdCByZW5kZXJzIGluLiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VDZGtDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBjb25zdCBjb2x1bW5DbGFzc05hbWUgPSBgY2RrLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gO1xuICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbHVtbkNsYXNzTmFtZSk7XG4gIH1cbn1cblxuLyoqIEhlYWRlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstaGVhZGVyLWNlbGwsIHRoW2Nkay1oZWFkZXItY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1oZWFkZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnY29sdW1uaGVhZGVyJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrSGVhZGVyQ2VsbCBleHRlbmRzIEJhc2VDZGtDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbi8qKiBGb290ZXIgY2VsbCB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBhZGRzIHRoZSByaWdodCBjbGFzc2VzIGFuZCByb2xlLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2RrLWZvb3Rlci1jZWxsLCB0ZFtjZGstZm9vdGVyLWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstZm9vdGVyLWNlbGwnLFxuICAgICdyb2xlJzogJ2dyaWRjZWxsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRm9vdGVyQ2VsbCBleHRlbmRzIEJhc2VDZGtDZWxsIHtcbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbi8qKiBDZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstY2VsbCwgdGRbY2RrLWNlbGxdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gIH1cbn1cbiJdfQ==