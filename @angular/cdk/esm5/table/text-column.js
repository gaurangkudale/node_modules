/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Input, Optional, ViewChild, ViewEncapsulation, isDevMode, } from '@angular/core';
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef } from './cell';
import { CdkTable } from './table';
import { getTableTextColumnMissingParentTableError, getTableTextColumnMissingNameError, } from './table-errors';
/** Injection token that can be used to specify the text column options. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './cell';

function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
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
export var TEXT_COLUMN_OPTIONS = new InjectionToken('text-column-options');
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
var CdkTextColumn = /** @class */ (function () {
    function CdkTextColumn(_table, _options) {
        this._table = _table;
        this._options = _options;
        /** Alignment of the cell values. */
        this.justify = 'start';
        this._options = _options || {};
    }
    Object.defineProperty(CdkTextColumn.prototype, "name", {
        /** Column name that should be used to reference this column. */
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.
            this._syncColumnDefName();
        },
        enumerable: true,
        configurable: true
    });
    CdkTextColumn.prototype.ngOnInit = function () {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || (function (data, name) { return data[name]; });
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else {
            throw getTableTextColumnMissingParentTableError();
        }
    };
    CdkTextColumn.prototype.ngOnDestroy = function () {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    };
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    CdkTextColumn.prototype._createDefaultHeaderText = function () {
        var name = this.name;
        if (isDevMode() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    };
    /** Synchronizes the column definition name with the text column name. */
    CdkTextColumn.prototype._syncColumnDefName = function () {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    };
    /** @nocollapse */
    CdkTextColumn.ctorParameters = function () { return [
        { type: CdkTable, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [TEXT_COLUMN_OPTIONS,] }] }
    ]; };
    CdkTextColumn.propDecorators = {
        name: [{ type: Input }],
        headerText: [{ type: Input }],
        dataAccessor: [{ type: Input }],
        justify: [{ type: Input }],
        columnDef: [{ type: ViewChild, args: [CdkColumnDef, { static: true },] }],
        cell: [{ type: ViewChild, args: [CdkCellDef, { static: true },] }],
        headerCell: [{ type: ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
    };
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(ɵngcc0.ɵɵdirectiveInject(CdkTable, 8), ɵngcc0.ɵɵdirectiveInject(TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkColumnDef, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkCellDef, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkHeaderCellDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.columnDef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        ɵngcc0.ɵɵtemplate(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        ɵngcc0.ɵɵelementContainerEnd();
    } }, directives: [ɵngcc1.CdkColumnDef, ɵngcc1.CdkHeaderCellDef, ɵngcc1.CdkCellDef, ɵngcc1.CdkHeaderCell, ɵngcc1.CdkCell], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTextColumn, [{
        type: Component,
        args: [{
                selector: 'cdk-text-column',
                template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
                encapsulation: ViewEncapsulation.None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: Input
        }], name: [{
            type: Input
        }], headerText: [{
            type: Input
        }], dataAccessor: [{
            type: Input
        }], columnDef: [{
            type: ViewChild,
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: ViewChild,
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: ViewChild,
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();
    return CdkTextColumn;
}());
export { CdkTextColumn };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2x1bW4uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGFibGUvdGV4dC1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNsRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2pDLE9BQU8sRUFDTCx5Q0FBeUMsRUFDekMsa0NBQWtDLEdBQ25DLE1BQU0sZ0JBQWdCLENBQUM7QUFleEIsMkVBQTJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzNFLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUM1QixJQUFJLGNBQWMsQ0FBeUIscUJBQXFCLENBQUMsQ0FBQztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUssSUF3RUgsdUJBQ3dCLE1BQW1CLEVBQ1UsUUFBOEI7QUFDckYsUUFGMEIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtBQUFDLFFBQ1MsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7QUFBQyxRQTFCcEYsb0NBQW9DO0FBQ3RDLFFBQVcsWUFBTyxHQUFrQixPQUFPLENBQUM7QUFDNUMsUUF5QkksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNILElBeERFLHNCQUNJLCtCQUFJO0FBQUksUUFGWixnRUFBZ0U7QUFDbEUsYUFBRTtBQUNHLFlBQ0QsT0FBTyxJ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REFDZixRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQjtBQUFRO0FBQVU7QUFDcEQsdUJBdERSLEtBQUs7QUFDTiw2QkFnQkMsS0FBSztBQUFLLCtCQVFWLEtBQUs7QUFBSywwQkFHVixLQUFLO0NBeENMLHNCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNCQUNyQyxsRkFzQ1csNEJBR1YsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7QUFBTyx1QkFTN0MsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7cUJBbEQ2RCxxQkFDbEcsMUNBaUQ0Qyw2QkFTM0MsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztBQUFNOzhDQTFEaUQscUJBQ2xHLCtGQUErRjtDQUMvRixrR0FBa0cscUJBQ2xHO0dBQW1ELHFCQUNuRDtpQkFBK0MscUJBQy9DO0NBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPLGtCQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBb0R3RDtBQUFDLElBOEQxRCxvQkFBQztBQUNBLENBREEsQUF0SUQsSUFzSUM7QUFDRCxTQWxIYSxhQUFhO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgaXNEZXZNb2RlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrQ2VsbERlZiwgQ2RrQ29sdW1uRGVmLCBDZGtIZWFkZXJDZWxsRGVmfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHtDZGtUYWJsZX0gZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQge1xuICBnZXRUYWJsZVRleHRDb2x1bW5NaXNzaW5nUGFyZW50VGFibGVFcnJvcixcbiAgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ05hbWVFcnJvcixcbn0gZnJvbSAnLi90YWJsZS1lcnJvcnMnO1xuXG5cbi8qKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgYENka1RleHRDb2x1bW5gLiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZXh0Q29sdW1uT3B0aW9uczxUPiB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIGhlYWRlciB0ZXh0IGJhc2VkIG9uIHRoZSBjb2x1bW4gbmFtZSBpZiBhIGhlYWRlclxuICAgKiB0ZXh0IGlzIG5vdCBwcm92aWRlZC5cbiAgICovXG4gIGRlZmF1bHRIZWFkZXJUZXh0VHJhbnNmb3JtPzogKG5hbWU6IHN0cmluZykgPT4gc3RyaW5nO1xuXG4gIC8qKiBEZWZhdWx0IGRhdGEgYWNjZXNzb3IgdG8gdXNlIGlmIG9uZSBpcyBub3QgcHJvdmlkZWQuICovXG4gIGRlZmF1bHREYXRhQWNjZXNzb3I/OiAoZGF0YTogVCwgbmFtZTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSB0ZXh0IGNvbHVtbiBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IFRFWFRfQ09MVU1OX09QVElPTlMgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxUZXh0Q29sdW1uT3B0aW9uczxhbnk+PigndGV4dC1jb2x1bW4tb3B0aW9ucycpO1xuXG4vKipcbiAqIENvbHVtbiB0aGF0IHNpbXBseSBzaG93cyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWFkZXIgYW5kIHJvdyBjZWxscy4gQXNzdW1lcyB0aGF0IHRoZSB0YWJsZVxuICogaXMgdXNpbmcgdGhlIG5hdGl2ZSB0YWJsZSBpbXBsZW1lbnRhdGlvbiAoYDx0YWJsZT5gKS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGUgbmFtZSBvZiB0aGlzIGNvbHVtbiB3aWxsIGJlIHRoZSBoZWFkZXIgdGV4dCBhbmQgZGF0YSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAqIFRoZSBoZWFkZXIgdGV4dCBjYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIHRoZSBgaGVhZGVyVGV4dGAgaW5wdXQuIENlbGwgdmFsdWVzIGNhbiBiZSBvdmVycmlkZGVuIHdpdGhcbiAqIHRoZSBgZGF0YUFjY2Vzc29yYCBpbnB1dC4gQ2hhbmdlIHRoZSB0ZXh0IGp1c3RpZmljYXRpb24gdG8gdGhlIHN0YXJ0IG9yIGVuZCB1c2luZyB0aGUgYGp1c3RpZnlgXG4gKiBpbnB1dC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRleHQtY29sdW1uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj5cbiAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWYgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2hlYWRlclRleHR9fVxuICAgICAgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBkYXRhXCIgW3N0eWxlLnRleHQtYWxpZ25dPVwianVzdGlmeVwiPlxuICAgICAgICB7e2RhdGFBY2Nlc3NvcihkYXRhLCBuYW1lKX19XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyBDaGFuZ2UgZGV0ZWN0aW9uIGlzIGludGVudGlvbmFsbHkgbm90IHNldCB0byBPblB1c2guIFRoaXMgY29tcG9uZW50J3MgdGVtcGxhdGUgd2lsbCBiZSBwcm92aWRlZFxuICAvLyB0byB0aGUgdGFibGUgdG8gYmUgaW5zZXJ0ZWQgaW50byBpdHMgdmlldy4gVGhpcyBpcyBwcm9ibGVtYXRpYyB3aGVuIGNoYW5nZSBkZXRlY3Rpb24gcnVucyBzaW5jZVxuICAvLyB0aGUgYmluZGluZ3MgaW4gdGhpcyB0ZW1wbGF0ZSB3aWxsIGJlIGV2YWx1YXRlZCBfYWZ0ZXJfIHRoZSB0YWJsZSdzIHZpZXcgaXMgZXZhbHVhdGVkLCB3aGljaFxuICAvLyBtZWFuJ3MgdGhlIHRlbXBsYXRlIGluIHRoZSB0YWJsZSdzIHZpZXcgd2lsbCBub3QgaGF2ZSB0aGUgdXBkYXRlZCB2YWx1ZSAoYW5kIGluIGZhY3Qgd2lsbCBjYXVzZVxuICAvLyBhbiBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yKS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0Q29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sdW1uIG5hbWUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG5cbiAgICAvLyBXaXRoIEl2eSwgaW5wdXRzIGNhbiBiZSBpbml0aWFsaXplZCBiZWZvcmUgc3RhdGljIHF1ZXJ5IHJlc3VsdHMgYXJlXG4gICAgLy8gYXZhaWxhYmxlLiBJbiB0aGF0IGNhc2UsIHdlIGRlZmVyIHRoZSBzeW5jaHJvbml6YXRpb24gdW50aWwgXCJuZ09uSW5pdFwiIGZpcmVzLlxuICAgIHRoaXMuX3N5bmNDb2x1bW5EZWZOYW1lKCk7XG4gIH1cbiAgX25hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBsYWJlbCB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGUgY29sdW1uIGhlYWRlci4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3RcbiAgICogc2V0LCB0aGUgaGVhZGVyIHRleHQgd2lsbCBkZWZhdWx0IHRvIHRoZSBjb2x1bW4gbmFtZSB3aXRoIGl0cyBmaXJzdCBsZXR0ZXIgY2FwaXRhbGl6ZWQuXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXJUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFjY2Vzc29yIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBkYXRhIHJlbmRlcmVkIGZvciBlYWNoIGNlbGwuIElmIHRoaXNcbiAgICogcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGRhdGEgY2VsbHMgd2lsbCByZW5kZXIgdGhlIHZhbHVlIGZvdW5kIGluIHRoZSBkYXRhJ3MgcHJvcGVydHkgbWF0Y2hpbmdcbiAgICogdGhlIGNvbHVtbidzIG5hbWUuIEZvciBleGFtcGxlLCBpZiB0aGUgY29sdW1uIGlzIG5hbWVkIGBpZGAsIHRoZW4gdGhlIHJlbmRlcmVkIHZhbHVlIHdpbGwgYmVcbiAgICogdmFsdWUgZGVmaW5lZCBieSB0aGUgZGF0YSdzIGBpZGAgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoKSBkYXRhQWNjZXNzb3I6IChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZztcblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgQElucHV0KCkganVzdGlmeTogJ3N0YXJ0J3wnZW5kJyA9ICdzdGFydCc7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQFZpZXdDaGlsZChDZGtDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBjb2x1bW5EZWY6IENka0NvbHVtbkRlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBjZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgY2VsbDogQ2RrQ2VsbERlZjtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBoZWFkZXJDZWxsIGlzIHByb3ZpZGVkIHRvIHRoZSBjb2x1bW4gZHVyaW5nIGBuZ09uSW5pdGAgd2l0aCBhIHN0YXRpYyBxdWVyeS5cbiAgICogTm9ybWFsbHksIHRoaXMgd2lsbCBiZSByZXRyaWV2ZWQgYnkgdGhlIGNvbHVtbiB1c2luZyBgQ29udGVudENoaWxkYCwgYnV0IHRoYXQgYXNzdW1lcyB0aGVcbiAgICogY29sdW1uIGRlZmluaXRpb24gd2FzIHByb3ZpZGVkIGluIHRoZSBzYW1lIHZpZXcgYXMgdGhlIHRhYmxlLCB3aGljaCBpcyBub3QgdGhlIGNhc2Ugd2l0aCB0aGlzXG4gICAqIGNvbXBvbmVudC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQFZpZXdDaGlsZChDZGtIZWFkZXJDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYmxlOiBDZGtUYWJsZTxUPixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVEVYVF9DT0xVTU5fT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogVGV4dENvbHVtbk9wdGlvbnM8VD4pIHtcbiAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zeW5jQ29sdW1uRGVmTmFtZSgpO1xuXG4gICAgaWYgKHRoaXMuaGVhZGVyVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmhlYWRlclRleHQgPSB0aGlzLl9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhQWNjZXNzb3IpIHtcbiAgICAgIHRoaXMuZGF0YUFjY2Vzc29yID1cbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmRlZmF1bHREYXRhQWNjZXNzb3IgfHwgKChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IChkYXRhIGFzIGFueSlbbmFtZV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90YWJsZSkge1xuICAgICAgLy8gUHJvdmlkZSB0aGUgY2VsbCBhbmQgaGVhZGVyQ2VsbCBkaXJlY3RseSB0byB0aGUgdGFibGUgd2l0aCB0aGUgc3RhdGljIGBWaWV3Q2hpbGRgIHF1ZXJ5LFxuICAgICAgLy8gc2luY2UgdGhlIGNvbHVtbkRlZiB3aWxsIG5vdCBwaWNrIHVwIGl0cyBjb250ZW50IGJ5IHRoZSB0aW1lIHRoZSB0YWJsZSBmaW5pc2hlcyBjaGVja2luZ1xuICAgICAgLy8gaXRzIGNvbnRlbnQgYW5kIGluaXRpYWxpemluZyB0aGUgcm93cy5cbiAgICAgIHRoaXMuY29sdW1uRGVmLmNlbGwgPSB0aGlzLmNlbGw7XG4gICAgICB0aGlzLmNvbHVtbkRlZi5oZWFkZXJDZWxsID0gdGhpcy5oZWFkZXJDZWxsO1xuICAgICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0VGFibGVUZXh0Q29sdW1uTWlzc2luZ1BhcmVudFRhYmxlRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdGFibGUpIHtcbiAgICAgIHRoaXMuX3RhYmxlLnJlbW92ZUNvbHVtbkRlZih0aGlzLmNvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkZWZhdWx0IGhlYWRlciB0ZXh0LiBVc2UgdGhlIG9wdGlvbnMnIGhlYWRlciB0ZXh0IHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGlmIG9uZVxuICAgKiBoYXMgYmVlbiBwcm92aWRlZC4gT3RoZXJ3aXNlIHNpbXBseSBjYXBpdGFsaXplIHRoZSBjb2x1bW4gbmFtZS5cbiAgICovXG4gIF9jcmVhdGVEZWZhdWx0SGVhZGVyVGV4dCgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXG4gICAgaWYgKGlzRGV2TW9kZSgpICYmICFuYW1lKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZVRleHRDb2x1bW5NaXNzaW5nTmFtZUVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5kZWZhdWx0SGVhZGVyVGV4dFRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZGVmYXVsdEhlYWRlclRleHRUcmFuc2Zvcm0obmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIH1cblxuICAvKiogU3luY2hyb25pemVzIHRoZSBjb2x1bW4gZGVmaW5pdGlvbiBuYW1lIHdpdGggdGhlIHRleHQgY29sdW1uIG5hbWUuICovXG4gIHByaXZhdGUgX3N5bmNDb2x1bW5EZWZOYW1lKCkge1xuICAgIGlmICh0aGlzLmNvbHVtbkRlZikge1xuICAgICAgdGhpcy5jb2x1bW5EZWYubmFtZSA9IHRoaXMubmFtZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==