/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread, __values } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { isDataSource } from '@angular/cdk/collections';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, EmbeddedViewRef, Inject, Input, isDevMode, IterableDiffers, Optional, QueryList, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, of as observableOf, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkColumnDef } from './cell';
import { CdkCellOutlet, CdkFooterRowDef, CdkHeaderRowDef, CdkRowDef } from './row';
import { StickyStyler } from './sticky-styler';
import { getTableDuplicateColumnNameError, getTableMissingMatchingRowDefError, getTableMissingRowDefsError, getTableMultipleDefaultRowDefsError, getTableUnknownColumnError, getTableUnknownDataSourceError } from './table-errors';
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/cdk/platform';

var _c0 = [[["caption"]]];
var _c1 = ["caption"];
var DataRowOutlet = /** @class */ (function () {
    function DataRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    /** @nocollapse */
    DataRowOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DataRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataRowOutlet, [{
        type: Directive,
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return DataRowOutlet;
}());
export { DataRowOutlet };
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
var HeaderRowOutlet = /** @class */ (function () {
    function HeaderRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    /** @nocollapse */
    HeaderRowOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HeaderRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeaderRowOutlet, [{
        type: Directive,
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return HeaderRowOutlet;
}());
export { HeaderRowOutlet };
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
var FooterRowOutlet = /** @class */ (function () {
    function FooterRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    /** @nocollapse */
    FooterRowOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FooterRowOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FooterRowOutlet, [{
        type: Directive,
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ElementRef }]; }, null); })();
    return FooterRowOutlet;
}());
export { FooterRowOutlet };
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
export var CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
"\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
var RowViewRef = /** @class */ (function (_super) {
    __extends(RowViewRef, _super);
    function RowViewRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RowViewRef;
}(EmbeddedViewRef));
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
var CdkTable = /** @class */ (function () {
    function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * @docs-private
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    Object.defineProperty(CdkTable.prototype, "trackBy", {
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get: function () {
            return this._trackByFn;
        },
        set: function (fn) {
            if (isDevMode() && fn != null && typeof fn !== 'function' && console &&
                console.warn) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "dataSource", {
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         */
        get: function () {
            return this._dataSource;
        },
        set: function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "multiTemplateDataRows", {
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         */
        get: function () {
            return this._multiTemplateDataRows;
        },
        set: function (v) {
            this._multiTemplateDataRows = coerceBooleanProperty(v);
            // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.
            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkTable.prototype.ngOnInit = function () {
        var _this = this;
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
            return _this.trackBy ? _this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
    };
    CdkTable.prototype.ngAfterContentChecked = function () {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    };
    CdkTable.prototype.ngOnDestroy = function () {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    };
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    CdkTable.prototype.renderRows = function () {
        var _this = this;
        this._renderRows = this._getAllRenderRows();
        var changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        var viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation(function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
                _this._insertRow(record.item, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(prevIndex);
            }
            else {
                var view = viewContainer.get(prevIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange(function (record) {
            var rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this.updateStickyColumnStyles();
    };
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * @breaking-change 8.0.0
     */
    CdkTable.prototype.setHeaderRowDef = function (headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    };
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * @breaking-change 8.0.0
     */
    CdkTable.prototype.setFooterRowDef = function (footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    };
    /** Adds a column definition that was not included as part of the content children. */
    CdkTable.prototype.addColumnDef = function (columnDef) {
        this._customColumnDefs.add(columnDef);
    };
    /** Removes a column definition that was not included as part of the content children. */
    CdkTable.prototype.removeColumnDef = function (columnDef) {
        this._customColumnDefs.delete(columnDef);
    };
    /** Adds a row definition that was not included as part of the content children. */
    CdkTable.prototype.addRowDef = function (rowDef) {
        this._customRowDefs.add(rowDef);
    };
    /** Removes a row definition that was not included as part of the content children. */
    CdkTable.prototype.removeRowDef = function (rowDef) {
        this._customRowDefs.delete(rowDef);
    };
    /** Adds a header row definition that was not included as part of the content children. */
    CdkTable.prototype.addHeaderRowDef = function (headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Removes a header row definition that was not included as part of the content children. */
    CdkTable.prototype.removeHeaderRowDef = function (headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Adds a footer row definition that was not included as part of the content children. */
    CdkTable.prototype.addFooterRowDef = function (footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /** Removes a footer row definition that was not included as part of the content children. */
    CdkTable.prototype.removeFooterRowDef = function (footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    CdkTable.prototype.updateStickyHeaderRowStyles = function () {
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        var tableElement = this._elementRef.nativeElement;
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        var thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        var stickyStates = this._headerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    CdkTable.prototype.updateStickyFooterRowStyles = function () {
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        var tableElement = this._elementRef.nativeElement;
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        var tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        var stickyStates = this._footerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    CdkTable.prototype.updateStickyColumnStyles = function () {
        var _this = this;
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        var dataRows = this._getRenderedRows(this._rowOutlet);
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning(__spread(headerRows, dataRows, footerRows), ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach(function (headerRow, i) {
            _this._addStickyColumnStyles([headerRow], _this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(function (rowDef) {
            // Collect all the rows rendered with this row definition.
            var rows = [];
            for (var i = 0; i < dataRows.length; i++) {
                if (_this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            _this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach(function (footerRow, i) {
            _this._addStickyColumnStyles([footerRow], _this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    CdkTable.prototype._getAllRenderRows = function () {
        var renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        var prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (var i = 0; i < this._data.length; i++) {
            var data = this._data[i];
            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (var j = 0; j < renderRowsForData.length; j++) {
                var renderRow = renderRowsForData[j];
                var cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    };
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    CdkTable.prototype._getRenderRowsForData = function (data, dataIndex, cache) {
        var rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(function (rowDef) {
            var cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                var dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data: data, rowDef: rowDef, dataIndex: dataIndex };
            }
        });
    };
    /** Update the map containing the content's column definitions. */
    CdkTable.prototype._cacheColumnDefs = function () {
        var _this = this;
        this._columnDefsByName.clear();
        var columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
        columnDefs.forEach(function (columnDef) {
            if (_this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            _this._columnDefsByName.set(columnDef.name, columnDef);
        });
    };
    /** Update the list of all available row definitions that can be used. */
    CdkTable.prototype._cacheRowDefs = function () {
        this._headerRowDefs =
            mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
        this._footerRowDefs =
            mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
        this._rowDefs = mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        var defaultRowDefs = this._rowDefs.filter(function (def) { return !def.when; });
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    };
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    CdkTable.prototype._renderUpdatedColumns = function () {
        var columnsDiffReducer = function (acc, def) { return acc || !!def.getColumnsDiff(); };
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    };
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    CdkTable.prototype._switchDataSource = function (dataSource) {
        this._data = [];
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    };
    /** Set up a subscription for the data provided by the data source. */
    CdkTable.prototype._observeRenderChanges = function () {
        var _this = this;
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        var dataStream;
        if (isDataSource(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (this.dataSource instanceof Observable) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = observableOf(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe(function (data) {
            _this._data = data || [];
            _this.renderRows();
        });
    };
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    CdkTable.prototype._forceRenderHeaderRows = function () {
        var _this = this;
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._headerRowOutlet, def, i); });
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    };
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    CdkTable.prototype._forceRenderFooterRows = function () {
        var _this = this;
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._footerRowOutlet, def, i); });
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    };
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    CdkTable.prototype._addStickyColumnStyles = function (rows, rowDef) {
        var _this = this;
        var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
            var columnDef = _this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        var stickyStartStates = columnDefs.map(function (columnDef) { return columnDef.sticky; });
        var stickyEndStates = columnDefs.map(function (columnDef) { return columnDef.stickyEnd; });
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    };
    /** Gets the list of rows that have been rendered in the row outlet. */
    CdkTable.prototype._getRenderedRows = function (rowOutlet) {
        var renderedRows = [];
        for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            var viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    };
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    CdkTable.prototype._getRowDefs = function (data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        var rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(function (def) { return !def.when || def.when(dataIndex, data); });
        }
        else {
            var rowDef = this._rowDefs.find(function (def) { return def.when && def.when(dataIndex, data); }) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    };
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     */
    CdkTable.prototype._insertRow = function (renderRow, renderIndex) {
        var rowDef = renderRow.rowDef;
        var context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    };
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    CdkTable.prototype._renderRow = function (outlet, rowDef, index, context) {
        var e_1, _a;
        if (context === void 0) { context = {}; }
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        try {
            for (var _b = __values(this._getCellTemplates(rowDef)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cellTemplate = _c.value;
                if (CdkCellOutlet.mostRecentCellOutlet) {
                    CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
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
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    CdkTable.prototype._updateRowIndexContext = function () {
        var viewContainer = this._rowOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            var viewRef = viewContainer.get(renderIndex);
            var context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    };
    /** Gets the column definitions for the provided row def. */
    CdkTable.prototype._getCellTemplates = function (rowDef) {
        var _this = this;
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, function (columnId) {
            var column = _this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    };
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    CdkTable.prototype._applyNativeTableSections = function () {
        var e_2, _a;
        var documentFragment = this._document.createDocumentFragment();
        var sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        try {
            for (var sections_1 = __values(sections), sections_1_1 = sections_1.next(); !sections_1_1.done; sections_1_1 = sections_1.next()) {
                var section = sections_1_1.value;
                var element = this._document.createElement(section.tag);
                element.setAttribute('role', 'rowgroup');
                element.appendChild(section.outlet.elementRef.nativeElement);
                documentFragment.appendChild(element);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (sections_1_1 && !sections_1_1.done && (_a = sections_1.return)) _a.call(sections_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    };
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    CdkTable.prototype._forceRenderDataRows = function () {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    };
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    CdkTable.prototype._checkStickyStates = function () {
        var stickyCheckReducer = function (acc, d) {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    };
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    CdkTable.prototype._setupStickyStyler = function () {
        var _this = this;
        var direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
        (this._dir ? this._dir.change : observableOf())
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function (value) {
            _this._stickyStyler.direction = value;
            _this.updateStickyColumnStyles();
        });
    };
    /** @nocollapse */
    CdkTable.ctorParameters = function () { return [
        { type: IterableDiffers },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    CdkTable.propDecorators = {
        trackBy: [{ type: Input }],
        dataSource: [{ type: Input }],
        multiTemplateDataRows: [{ type: Input }],
        _rowOutlet: [{ type: ViewChild, args: [DataRowOutlet, { static: true },] }],
        _headerRowOutlet: [{ type: ViewChild, args: [HeaderRowOutlet, { static: true },] }],
        _footerRowOutlet: [{ type: ViewChild, args: [FooterRowOutlet, { static: true },] }],
        _contentColumnDefs: [{ type: ContentChildren, args: [CdkColumnDef, { descendants: true },] }],
        _contentRowDefs: [{ type: ContentChildren, args: [CdkRowDef, { descendants: true },] }],
        _contentHeaderRowDefs: [{ type: ContentChildren, args: [CdkHeaderRowDef, {
                        descendants: true
                    },] }],
        _contentFooterRowDefs: [{ type: ContentChildren, args: [CdkFooterRowDef, {
                        descendants: true
                    },] }]
    };
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵinjectAttribute('role'), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
CdkTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkColumnDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkRowDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkHeaderRowDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentColumnDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentRowDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentHeaderRowDefs = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(DataRowOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(HeaderRowOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(FooterRowOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._rowOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._headerRowOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._footerRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementContainer(1, 0);
        ɵngcc0.ɵɵelementContainer(2, 1);
        ɵngcc0.ɵɵelementContainer(3, 2);
    } }, directives: [HeaderRowOutlet, DataRowOutlet, FooterRowOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTable, [{
        type: Component,
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table'
                },
                encapsulation: ViewEncapsulation.None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: ɵngcc0.IterableDiffers }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: String, decorators: [{
                type: Attribute,
                args: ['role']
            }] }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc2.Platform }]; }, { trackBy: [{
            type: Input
        }], dataSource: [{
            type: Input
        }], multiTemplateDataRows: [{
            type: Input
        }], _rowOutlet: [{
            type: ViewChild,
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: ViewChild,
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: ViewChild,
            args: [FooterRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: ContentChildren,
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: ContentChildren,
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: ContentChildren,
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: ContentChildren,
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }] }); })();
    return CdkTable;
}());
export { CdkTable };
/** Utility function that gets a merged list of the entries in a QueryList and values of a Set. */
function mergeQueryListAndSet(queryList, set) {
    return queryList.toArray().concat(Array.from(set));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGFibGUvdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFZLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBK0IsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLGVBQWUsRUFDZixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFHVCxlQUFlLEVBR2YsUUFBUSxFQUNSLFNBQVMsRUFHVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNwQyxPQUFPLEVBRUwsYUFBYSxFQUdiLGVBQWUsRUFDZixlQUFlLEVBQ2YsU0FBUyxFQUNWLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxnQ0FBZ0MsRUFDaEMsa0NB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QUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO0FBQU8scUNBTWhELGVBQWUsU0FBQyxZQUFZLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO0FBQU8sa0NBR3hELGVBQWUsU0FBQyxTQUFTLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO0FBQU8sd0NBR3JELGVBQWUsU0FBQyxlQUFlLEVBQUU7QUFDcEMsd0JBQUksV0FBVyxFQUFFLElBQUk7QUFDckIscUJBQUc7QUFBTyx3Q0FHUCxlQUFlLFNBQUMsZUFBZSxFQUFFO0FBQ3BDLHdCQUFJLFdBQVcsRUFBRSxJQUFJO0FBQ3JCLHFCQUFHO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBbXJCaEIsZUFBQztBQUVELENBRkMsQUEvNUJELElBKzVCQztBQUNELFNBbDVCYSxRQUFRO0FBbTVCckIsa0dBQWtHO0FBQ2xHLFNBQVMsb0JBQW9CLENBQUksU0FBdUIsRUFBRSxHQUFXO0FBQUksSUFDdkUsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlLCBpc0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Nka0NvbHVtbkRlZn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7XG4gIEJhc2VSb3dEZWYsXG4gIENka0NlbGxPdXRsZXQsXG4gIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQsXG4gIENka0NlbGxPdXRsZXRSb3dDb250ZXh0LFxuICBDZGtGb290ZXJSb3dEZWYsXG4gIENka0hlYWRlclJvd0RlZixcbiAgQ2RrUm93RGVmXG59IGZyb20gJy4vcm93JztcbmltcG9ydCB7U3RpY2t5U3R5bGVyfSBmcm9tICcuL3N0aWNreS1zdHlsZXInO1xuaW1wb3J0IHtcbiAgZ2V0VGFibGVEdXBsaWNhdGVDb2x1bW5OYW1lRXJyb3IsXG4gIGdldFRhYmxlTWlzc2luZ01hdGNoaW5nUm93RGVmRXJyb3IsXG4gIGdldFRhYmxlTWlzc2luZ1Jvd0RlZnNFcnJvcixcbiAgZ2V0VGFibGVNdWx0aXBsZURlZmF1bHRSb3dEZWZzRXJyb3IsXG4gIGdldFRhYmxlVW5rbm93bkNvbHVtbkVycm9yLFxuICBnZXRUYWJsZVVua25vd25EYXRhU291cmNlRXJyb3Jcbn0gZnJvbSAnLi90YWJsZS1lcnJvcnMnO1xuXG4vKiogSW50ZXJmYWNlIHVzZWQgdG8gcHJvdmlkZSBhbiBvdXRsZXQgZm9yIHJvd3MgdG8gYmUgaW5zZXJ0ZWQgaW50by4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm93T3V0bGV0IHtcbiAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbn1cblxuLyoqXG4gKiBVbmlvbiBvZiB0aGUgdHlwZXMgdGhhdCBjYW4gYmUgc2V0IGFzIHRoZSBkYXRhIHNvdXJjZSBmb3IgYSBgQ2RrVGFibGVgLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG50eXBlIENka1RhYmxlRGF0YVNvdXJjZUlucHV0PFQ+ID1cbiAgICBEYXRhU291cmNlPFQ+fE9ic2VydmFibGU8UmVhZG9ubHlBcnJheTxUPnxUW10+fFJlYWRvbmx5QXJyYXk8VD58VFtdO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgaGFuZGxlIGZvciB0aGUgdGFibGUgdG8gZ3JhYiB0aGUgdmlldyBjb250YWluZXIncyBuZy1jb250YWluZXIgdG8gaW5zZXJ0IGRhdGEgcm93cy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbcm93T3V0bGV0XSd9KVxuZXhwb3J0IGNsYXNzIERhdGFSb3dPdXRsZXQgaW1wbGVtZW50cyBSb3dPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBoYW5kbGUgZm9yIHRoZSB0YWJsZSB0byBncmFiIHRoZSB2aWV3IGNvbnRhaW5lcidzIG5nLWNvbnRhaW5lciB0byBpbnNlcnQgdGhlIGhlYWRlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbaGVhZGVyUm93T3V0bGV0XSd9KVxuZXhwb3J0IGNsYXNzIEhlYWRlclJvd091dGxldCBpbXBsZW1lbnRzIFJvd091dGxldCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIGhhbmRsZSBmb3IgdGhlIHRhYmxlIHRvIGdyYWIgdGhlIHZpZXcgY29udGFpbmVyJ3MgbmctY29udGFpbmVyIHRvIGluc2VydCB0aGUgZm9vdGVyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tmb290ZXJSb3dPdXRsZXRdJ30pXG5leHBvcnQgY2xhc3MgRm9vdGVyUm93T3V0bGV0IGltcGxlbWVudHMgUm93T3V0bGV0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuXG4vKipcbiAqIFRoZSB0YWJsZSB0ZW1wbGF0ZSB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoZSBtYXQtdGFibGUuIFNob3VsZCBub3QgYmUgdXNlZCBvdXRzaWRlIG9mIHRoZVxuICogbWF0ZXJpYWwgbGlicmFyeS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IENES19UQUJMRV9URU1QTEFURSA9XG4gICAgLy8gTm90ZSB0aGF0IGFjY29yZGluZyB0byBNRE4sIHRoZSBgY2FwdGlvbmAgZWxlbWVudCBoYXMgdG8gYmUgcHJvamVjdGVkIGFzIHRoZSAqKmZpcnN0KipcbiAgICAvLyBlbGVtZW50IGluIHRoZSB0YWJsZS4gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9jYXB0aW9uXG4gICAgYFxuICA8bmctY29udGVudCBzZWxlY3Q9XCJjYXB0aW9uXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGFpbmVyIGhlYWRlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciByb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgZm9vdGVyUm93T3V0bGV0PjwvbmctY29udGFpbmVyPlxuYDtcblxuLyoqXG4gKiBJbnRlcmZhY2UgdXNlZCB0byBjb252ZW5pZW50bHkgdHlwZSB0aGUgcG9zc2libGUgY29udGV4dCBpbnRlcmZhY2VzIGZvciB0aGUgcmVuZGVyIHJvdy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3dDb250ZXh0PFQ+IGV4dGVuZHMgQ2RrQ2VsbE91dGxldE11bHRpUm93Q29udGV4dDxUPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENka0NlbGxPdXRsZXRSb3dDb250ZXh0PFQ+IHt9XG5cbi8qKlxuICogQ2xhc3MgdXNlZCB0byBjb252ZW5pZW50bHkgdHlwZSB0aGUgZW1iZWRkZWQgdmlldyByZWYgZm9yIHJvd3Mgd2l0aCBhIGNvbnRleHQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmFic3RyYWN0IGNsYXNzIFJvd1ZpZXdSZWY8VD4gZXh0ZW5kcyBFbWJlZGRlZFZpZXdSZWY8Um93Q29udGV4dDxUPj4ge31cblxuLyoqXG4gKiBTZXQgb2YgcHJvcGVydGllcyB0aGF0IHJlcHJlc2VudHMgdGhlIGlkZW50aXR5IG9mIGEgc2luZ2xlIHJlbmRlcmVkIHJvdy5cbiAqXG4gKiBXaGVuIHRoZSB0YWJsZSBuZWVkcyB0byBkZXRlcm1pbmUgdGhlIGxpc3Qgb2Ygcm93cyB0byByZW5kZXIsIGl0IHdpbGwgZG8gc28gYnkgaXRlcmF0aW5nIHRocm91Z2hcbiAqIGVhY2ggZGF0YSBvYmplY3QgYW5kIGV2YWx1YXRpbmcgaXRzIGxpc3Qgb2Ygcm93IHRlbXBsYXRlcyB0byBkaXNwbGF5ICh3aGVuIG11bHRpVGVtcGxhdGVEYXRhUm93c1xuICogaXMgZmFsc2UsIHRoZXJlIGlzIG9ubHkgb25lIHRlbXBsYXRlIHBlciBkYXRhIG9iamVjdCkuIEZvciBlYWNoIHBhaXIgb2YgZGF0YSBvYmplY3QgYW5kIHJvd1xuICogdGVtcGxhdGUsIGEgYFJlbmRlclJvd2AgaXMgYWRkZWQgdG8gdGhlIGxpc3Qgb2Ygcm93cyB0byByZW5kZXIuIElmIHRoZSBkYXRhIG9iamVjdCBhbmQgcm93XG4gKiB0ZW1wbGF0ZSBwYWlyIGhhcyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQsIHRoZSBwcmV2aW91c2x5IHVzZWQgYFJlbmRlclJvd2AgaXMgYWRkZWQ7IGVsc2UgYSBuZXdcbiAqIGBSZW5kZXJSb3dgIGlzICogY3JlYXRlZC4gT25jZSB0aGUgbGlzdCBpcyBjb21wbGV0ZSBhbmQgYWxsIGRhdGEgb2JqZWN0cyBoYXZlIGJlZW4gaXRlcmVhdGVkXG4gKiB0aHJvdWdoLCBhIGRpZmYgaXMgcGVyZm9ybWVkIHRvIGRldGVybWluZSB0aGUgY2hhbmdlcyB0aGF0IG5lZWQgdG8gYmUgbWFkZSB0byB0aGUgcmVuZGVyZWQgcm93cy5cbiAqXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyUm93PFQ+IHtcbiAgZGF0YTogVDtcbiAgZGF0YUluZGV4OiBudW1iZXI7XG4gIHJvd0RlZjogQ2RrUm93RGVmPFQ+O1xufVxuXG4vKipcbiAqIEEgZGF0YSB0YWJsZSB0aGF0IGNhbiByZW5kZXIgYSBoZWFkZXIgcm93LCBkYXRhIHJvd3MsIGFuZCBhIGZvb3RlciByb3cuXG4gKiBVc2VzIHRoZSBkYXRhU291cmNlIGlucHV0IHRvIGRldGVybWluZSB0aGUgZGF0YSB0byBiZSByZW5kZXJlZC4gVGhlIGRhdGEgY2FuIGJlIHByb3ZpZGVkIGVpdGhlclxuICogYXMgYSBkYXRhIGFycmF5LCBhbiBPYnNlcnZhYmxlIHN0cmVhbSB0aGF0IGVtaXRzIHRoZSBkYXRhIGFycmF5IHRvIHJlbmRlciwgb3IgYSBEYXRhU291cmNlIHdpdGggYVxuICogY29ubmVjdCBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIGFuIE9ic2VydmFibGUgc3RyZWFtIHRoYXQgZW1pdHMgdGhlIGRhdGEgYXJyYXkgdG8gcmVuZGVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdGFibGUsIHRhYmxlW2Nkay10YWJsZV0nLFxuICBleHBvcnRBczogJ2Nka1RhYmxlJyxcbiAgdGVtcGxhdGU6IENES19UQUJMRV9URU1QTEFURSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdGFibGUnLFxuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyBUaGUgXCJPblB1c2hcIiBzdGF0dXMgZm9yIHRoZSBgTWF0VGFibGVgIGNvbXBvbmVudCBpcyBlZmZlY3RpdmVseSBhIG5vb3AsIHNvIHdlIGFyZSByZW1vdmluZyBpdC5cbiAgLy8gVGhlIHZpZXcgZm9yIGBNYXRUYWJsZWAgY29uc2lzdHMgZW50aXJlbHkgb2YgdGVtcGxhdGVzIGRlY2xhcmVkIGluIG90aGVyIHZpZXdzLiBBcyB0aGV5IGFyZVxuICAvLyBkZWNsYXJlZCBlbHNld2hlcmUsIHRoZXkgYXJlIGNoZWNrZWQgd2hlbiB0aGVpciBkZWNsYXJhdGlvbiBwb2ludHMgYXJlIGNoZWNrZWQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb2xsZWN0aW9uVmlld2VyLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogTGF0ZXN0IGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcm90ZWN0ZWQgX2RhdGE6IFRbXXxSZWFkb25seUFycmF5PFQ+O1xuXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogTGlzdCBvZiB0aGUgcmVuZGVyZWQgcm93cyBhcyBpZGVudGlmaWVkIGJ5IHRoZWlyIGBSZW5kZXJSb3dgIG9iamVjdC4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyUm93czogUmVuZGVyUm93PFQ+W107XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0aGF0IGxpc3RlbnMgZm9yIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb258bnVsbDtcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCB0aGUgdXNlcidzIGRlZmluZWQgY29sdW1ucyAoaGVhZGVyLCBkYXRhLCBhbmQgZm9vdGVyIGNlbGwgdGVtcGxhdGUpIGlkZW50aWZpZWQgYnlcbiAgICogbmFtZS4gQ29sbGVjdGlvbiBwb3B1bGF0ZWQgYnkgdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBnYXRoZXJlZCBieSBgQ29udGVudENoaWxkcmVuYCBhcyB3ZWxsIGFzXG4gICAqIGFueSBjdXN0b20gY29sdW1uIGRlZmluaXRpb25zIGFkZGVkIHRvIGBfY3VzdG9tQ29sdW1uRGVmc2AuXG4gICAqL1xuICBwcml2YXRlIF9jb2x1bW5EZWZzQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIENka0NvbHVtbkRlZj4oKTtcblxuICAvKipcbiAgICogU2V0IG9mIGFsbCByb3cgZGVmaW5pdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGlzIHRhYmxlLiBQb3B1bGF0ZWQgYnkgdGhlIHJvd3MgZ2F0aGVyZWQgYnlcbiAgICogdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0byBgX2N1c3RvbVJvd0RlZnNgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcm93RGVmczogQ2RrUm93RGVmPFQ+W107XG5cbiAgLyoqXG4gICAqIFNldCBvZiBhbGwgaGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoaXMgdGFibGUuIFBvcHVsYXRlZCBieSB0aGUgcm93c1xuICAgKiBnYXRoZXJlZCBieSB1c2luZyBgQ29udGVudENoaWxkcmVuYCBhcyB3ZWxsIGFzIGFueSBjdXN0b20gcm93IGRlZmluaXRpb25zIGFkZGVkIHRvXG4gICAqIGBfY3VzdG9tSGVhZGVyUm93RGVmc2AuXG4gICAqL1xuICBwcml2YXRlIF9oZWFkZXJSb3dEZWZzOiBDZGtIZWFkZXJSb3dEZWZbXTtcblxuICAvKipcbiAgICogU2V0IG9mIGFsbCByb3cgZGVmaW5pdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGlzIHRhYmxlLiBQb3B1bGF0ZWQgYnkgdGhlIHJvd3MgZ2F0aGVyZWQgYnlcbiAgICogdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0b1xuICAgKiBgX2N1c3RvbUZvb3RlclJvd0RlZnNgLlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9vdGVyUm93RGVmczogQ2RrRm9vdGVyUm93RGVmW107XG5cbiAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxSZW5kZXJSb3c8VD4+O1xuXG4gIC8qKiBTdG9yZXMgdGhlIHJvdyBkZWZpbml0aW9uIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHdoZW4gcHJlZGljYXRlLiAqL1xuICBwcml2YXRlIF9kZWZhdWx0Um93RGVmOiBDZGtSb3dEZWY8VD58bnVsbDtcblxuICAvKipcbiAgICogQ29sdW1uIGRlZmluaXRpb25zIHRoYXQgd2VyZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGRpcmVjdCBjb250ZW50IGNoaWxkcmVuIG9mIHRoZSB0YWJsZS5cbiAgICogVGhlc2Ugd2lsbCBiZSBkZWZpbmVkIHdoZW4sIGUuZy4sIGNyZWF0aW5nIGEgd3JhcHBlciBhcm91bmQgdGhlIGNka1RhYmxlIHRoYXQgaGFzXG4gICAqIGNvbHVtbiBkZWZpbml0aW9ucyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tQ29sdW1uRGVmcyA9IG5ldyBTZXQ8Q2RrQ29sdW1uRGVmPigpO1xuXG4gIC8qKlxuICAgKiBEYXRhIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBkaXJlY3QgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgdGFibGUuXG4gICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgKiBidWlsdC1pbiBkYXRhIHJvd3MgYXMgKml0cyogY29udGVudCBjaGlsZC5cbiAgICovXG4gIHByaXZhdGUgX2N1c3RvbVJvd0RlZnMgPSBuZXcgU2V0PENka1Jvd0RlZjxUPj4oKTtcblxuICAvKipcbiAgICogSGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBkaXJlY3QgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgdGFibGUuXG4gICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgKiBidWlsdC1pbiBoZWFkZXIgcm93cyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tSGVhZGVyUm93RGVmcyA9IG5ldyBTZXQ8Q2RrSGVhZGVyUm93RGVmPigpO1xuXG4gIC8qKlxuICAgKiBGb290ZXIgcm93IGRlZmluaXRpb25zIHRoYXQgd2VyZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGRpcmVjdCBjb250ZW50IGNoaWxkcmVuIG9mIHRoZSB0YWJsZS5cbiAgICogVGhlc2Ugd2lsbCBiZSBkZWZpbmVkIHdoZW4sIGUuZy4sIGNyZWF0aW5nIGEgd3JhcHBlciBhcm91bmQgdGhlIGNka1RhYmxlIHRoYXQgaGFzIGFcbiAgICogYnVpbHQtaW4gZm9vdGVyIHJvdyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tRm9vdGVyUm93RGVmcyA9IG5ldyBTZXQ8Q2RrRm9vdGVyUm93RGVmPigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24gaGFzIGJlZW4gY2hhbmdlZC4gVHJpZ2dlcnMgYW4gdXBkYXRlIHRvIHRoZSBoZWFkZXIgcm93IGFmdGVyXG4gICAqIGNvbnRlbnQgaXMgY2hlY2tlZC4gSW5pdGlhbGl6ZWQgYXMgdHJ1ZSBzbyB0aGF0IHRoZSB0YWJsZSByZW5kZXJzIHRoZSBpbml0aWFsIHNldCBvZiByb3dzLlxuICAgKi9cbiAgcHJpdmF0ZSBfaGVhZGVyUm93RGVmQ2hhbmdlZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLiBUcmlnZ2VycyBhbiB1cGRhdGUgdG8gdGhlIGZvb3RlciByb3cgYWZ0ZXJcbiAgICogY29udGVudCBpcyBjaGVja2VkLiBJbml0aWFsaXplZCBhcyB0cnVlIHNvIHRoYXQgdGhlIHRhYmxlIHJlbmRlcnMgdGhlIGluaXRpYWwgc2V0IG9mIHJvd3MuXG4gICAqL1xuICBwcml2YXRlIF9mb290ZXJSb3dEZWZDaGFuZ2VkID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ2FjaGUgb2YgdGhlIGxhdGVzdCByZW5kZXJlZCBgUmVuZGVyUm93YCBvYmplY3RzIGFzIGEgbWFwIGZvciBlYXN5IHJldHJpZXZhbCB3aGVuIGNvbnN0cnVjdGluZ1xuICAgKiBhIG5ldyBsaXN0IG9mIGBSZW5kZXJSb3dgIG9iamVjdHMgZm9yIHJlbmRlcmluZyByb3dzLiBTaW5jZSB0aGUgbmV3IGxpc3QgaXMgY29uc3RydWN0ZWQgd2l0aFxuICAgKiB0aGUgY2FjaGVkIGBSZW5kZXJSb3dgIG9iamVjdHMgd2hlbiBwb3NzaWJsZSwgdGhlIHJvdyBpZGVudGl0eSBpcyBwcmVzZXJ2ZWQgd2hlbiB0aGUgZGF0YVxuICAgKiBhbmQgcm93IHRlbXBsYXRlIG1hdGNoZXMsIHdoaWNoIGFsbG93cyB0aGUgYEl0ZXJhYmxlRGlmZmVyYCB0byBjaGVjayByb3dzIGJ5IHJlZmVyZW5jZVxuICAgKiBhbmQgdW5kZXJzdGFuZCB3aGljaCByb3dzIGFyZSBhZGRlZC9tb3ZlZC9yZW1vdmVkLlxuICAgKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBhIG1hcCBvZiBtYXBzIHdoZXJlIHRoZSBmaXJzdCBrZXkgaXMgdGhlIGBkYXRhOiBUYCBvYmplY3QgYW5kIHRoZSBzZWNvbmQgaXMgdGhlXG4gICAqIGBDZGtSb3dEZWY8VD5gIG9iamVjdC4gV2l0aCB0aGUgdHdvIGtleXMsIHRoZSBjYWNoZSBwb2ludHMgdG8gYSBgUmVuZGVyUm93PFQ+YCBvYmplY3QgdGhhdFxuICAgKiBjb250YWlucyBhbiBhcnJheSBvZiBjcmVhdGVkIHBhaXJzLiBUaGUgYXJyYXkgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgZGF0YVxuICAgKiBhcnJheSBjb250YWlucyBtdWx0aXBsZSBkdXBsaWNhdGUgZGF0YSBvYmplY3RzIGFuZCBlYWNoIGluc3RhbnRpYXRlZCBgUmVuZGVyUm93YCBtdXN0IGJlXG4gICAqIHN0b3JlZC5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlZFJlbmRlclJvd3NNYXAgPSBuZXcgTWFwPFQsIFdlYWtNYXA8Q2RrUm93RGVmPFQ+LCBSZW5kZXJSb3c8VD5bXT4+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHRhYmxlIGlzIGFwcGxpZWQgdG8gYSBuYXRpdmUgYDx0YWJsZT5gLiAqL1xuICBwcml2YXRlIF9pc05hdGl2ZUh0bWxUYWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVXRpbGl0eSBjbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBhcHBseWluZyB0aGUgYXBwcm9wcmlhdGUgc3RpY2t5IHBvc2l0aW9uaW5nIHN0eWxlcyB0b1xuICAgKiB0aGUgdGFibGUncyByb3dzIGFuZCBjZWxscy5cbiAgICovXG4gIHByaXZhdGUgX3N0aWNreVN0eWxlcjogU3RpY2t5U3R5bGVyO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgYWRkZWQgdG8gYW55IHJvdyBvciBjZWxsIHRoYXQgaGFzIHN0aWNreSBwb3NpdGlvbmluZyBhcHBsaWVkLiBNYXkgYmUgb3ZlcnJpZGVuIGJ5XG4gICAqIHRhYmxlIHN1YmNsYXNzZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RpY2t5Q3NzQ2xhc3M6IHN0cmluZyA9ICdjZGstdGFibGUtc3RpY2t5JztcblxuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIHJvdyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgcm93IGJhc2VkIG9uIGl0cyBkYXRhXG4gICAqIHJlbGF0aXZlIHRvIHRoZSBmdW5jdGlvbiB0byBrbm93IGlmIGEgcm93IHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJhY2tCeUZuO1xuICB9XG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgZm4gIT0gbnVsbCAmJiB0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicgJiYgPGFueT5jb25zb2xlICYmXG4gICAgICAgIDxhbnk+Y29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHRyYWNrQnkgbXVzdCBiZSBhIGZ1bmN0aW9uLCBidXQgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShmbil9LmApO1xuICAgIH1cbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcbiAgfVxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICAvKipcbiAgICogVGhlIHRhYmxlJ3Mgc291cmNlIG9mIGRhdGEsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCBpbiB0aHJlZSB3YXlzIChpbiBvcmRlciBvZiBjb21wbGV4aXR5KTpcbiAgICogICAtIFNpbXBsZSBkYXRhIGFycmF5IChlYWNoIG9iamVjdCByZXByZXNlbnRzIG9uZSB0YWJsZSByb3cpXG4gICAqICAgLSBTdHJlYW0gdGhhdCBlbWl0cyBhIGRhdGEgYXJyYXkgZWFjaCB0aW1lIHRoZSBhcnJheSBjaGFuZ2VzXG4gICAqICAgLSBgRGF0YVNvdXJjZWAgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgY29ubmVjdC9kaXNjb25uZWN0IGludGVyZmFjZS5cbiAgICpcbiAgICogSWYgYSBkYXRhIGFycmF5IGlzIHByb3ZpZGVkLCB0aGUgdGFibGUgbXVzdCBiZSBub3RpZmllZCB3aGVuIHRoZSBhcnJheSdzIG9iamVjdHMgYXJlXG4gICAqIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZC4gVGhpcyBjYW4gYmUgZG9uZSBieSBjYWxsaW5nIHRoZSBgcmVuZGVyUm93cygpYCBmdW5jdGlvbiB3aGljaCB3aWxsXG4gICAqIHJlbmRlciB0aGUgZGlmZiBzaW5jZSB0aGUgbGFzdCB0YWJsZSByZW5kZXIuIElmIHRoZSBkYXRhIGFycmF5IHJlZmVyZW5jZSBpcyBjaGFuZ2VkLCB0aGUgdGFibGVcbiAgICogd2lsbCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgYW4gdXBkYXRlIHRvIHRoZSByb3dzLlxuICAgKlxuICAgKiBXaGVuIHByb3ZpZGluZyBhbiBPYnNlcnZhYmxlIHN0cmVhbSwgdGhlIHRhYmxlIHdpbGwgdHJpZ2dlciBhbiB1cGRhdGUgYXV0b21hdGljYWxseSB3aGVuIHRoZVxuICAgKiBzdHJlYW0gZW1pdHMgYSBuZXcgYXJyYXkgb2YgZGF0YS5cbiAgICpcbiAgICogRmluYWxseSwgd2hlbiBwcm92aWRpbmcgYSBgRGF0YVNvdXJjZWAgb2JqZWN0LCB0aGUgdGFibGUgd2lsbCB1c2UgdGhlIE9ic2VydmFibGUgc3RyZWFtXG4gICAqIHByb3ZpZGVkIGJ5IHRoZSBjb25uZWN0IGZ1bmN0aW9uIGFuZCB0cmlnZ2VyIHVwZGF0ZXMgd2hlbiB0aGF0IHN0cmVhbSBlbWl0cyBuZXcgZGF0YSBhcnJheVxuICAgKiB2YWx1ZXMuIER1cmluZyB0aGUgdGFibGUncyBuZ09uRGVzdHJveSBvciB3aGVuIHRoZSBkYXRhIHNvdXJjZSBpcyByZW1vdmVkIGZyb20gdGhlIHRhYmxlLCB0aGVcbiAgICogdGFibGUgd2lsbCBjYWxsIHRoZSBEYXRhU291cmNlJ3MgYGRpc2Nvbm5lY3RgIGZ1bmN0aW9uIChtYXkgYmUgdXNlZnVsIGZvciBjbGVhbmluZyB1cCBhbnlcbiAgICogc3Vic2NyaXB0aW9ucyByZWdpc3RlcmVkIGR1cmluZyB0aGUgY29ubmVjdCBwcm9jZXNzKS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhU291cmNlKCk6IENka1RhYmxlRGF0YVNvdXJjZUlucHV0PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuICBzZXQgZGF0YVNvdXJjZShkYXRhU291cmNlOiBDZGtUYWJsZURhdGFTb3VyY2VJbnB1dDxUPikge1xuICAgIGlmICh0aGlzLl9kYXRhU291cmNlICE9PSBkYXRhU291cmNlKSB7XG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kYXRhU291cmNlOiBDZGtUYWJsZURhdGFTb3VyY2VJbnB1dDxUPjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhbGxvdyBtdWx0aXBsZSByb3dzIHBlciBkYXRhIG9iamVjdCBieSBldmFsdWF0aW5nIHdoaWNoIHJvd3MgZXZhbHVhdGUgdGhlaXIgJ3doZW4nXG4gICAqIHByZWRpY2F0ZSB0byB0cnVlLiBJZiBgbXVsdGlUZW1wbGF0ZURhdGFSb3dzYCBpcyBmYWxzZSwgd2hpY2ggaXMgdGhlIGRlZmF1bHQgdmFsdWUsIHRoZW4gZWFjaFxuICAgKiBkYXRhb2JqZWN0IHdpbGwgcmVuZGVyIHRoZSBmaXJzdCByb3cgdGhhdCBldmFsdWF0ZXMgaXRzIHdoZW4gcHJlZGljYXRlIHRvIHRydWUsIGluIHRoZSBvcmRlclxuICAgKiBkZWZpbmVkIGluIHRoZSB0YWJsZSwgb3Igb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHJvdyB3aGljaCBkb2VzIG5vdCBoYXZlIGEgd2hlbiBwcmVkaWNhdGUuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlUZW1wbGF0ZURhdGFSb3dzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVRlbXBsYXRlRGF0YVJvd3M7XG4gIH1cbiAgc2V0IG11bHRpVGVtcGxhdGVEYXRhUm93cyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlUZW1wbGF0ZURhdGFSb3dzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuXG4gICAgLy8gSW4gSXZ5IGlmIHRoaXMgdmFsdWUgaXMgc2V0IHZpYSBhIHN0YXRpYyBhdHRyaWJ1dGUgKGUuZy4gPHRhYmxlIG11bHRpVGVtcGxhdGVEYXRhUm93cz4pLFxuICAgIC8vIHRoaXMgc2V0dGVyIHdpbGwgYmUgaW52b2tlZCBiZWZvcmUgdGhlIHJvdyBvdXRsZXQgaGFzIGJlZW4gZGVmaW5lZCBoZW5jZSB0aGUgbnVsbCBjaGVjay5cbiAgICBpZiAodGhpcy5fcm93T3V0bGV0ICYmIHRoaXMuX3Jvd091dGxldC52aWV3Q29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZm9yY2VSZW5kZXJEYXRhUm93cygpO1xuICAgIH1cbiAgfVxuICBfbXVsdGlUZW1wbGF0ZURhdGFSb3dzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gVE9ETyhhbmRyZXdzZWd1aW4pOiBSZW1vdmUgbWF4IHZhbHVlIGFzIHRoZSBlbmQgaW5kZXhcbiAgLy8gICBhbmQgaW5zdGVhZCBjYWxjdWxhdGUgdGhlIHZpZXcgb24gaW5pdCBhbmQgc2Nyb2xsLlxuICAvKipcbiAgICogU3RyZWFtIGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBvbiB3aGF0IHJvd3MgYXJlIGJlaW5nIGRpc3BsYXllZCBvbiBzY3JlZW4uXG4gICAqIENhbiBiZSB1c2VkIGJ5IHRoZSBkYXRhIHNvdXJjZSB0byBhcyBhIGhldXJpc3RpYyBvZiB3aGF0IGRhdGEgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICAgKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICB2aWV3Q2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8e3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyfT4gPVxuICAgICAgbmV3IEJlaGF2aW9yU3ViamVjdDx7c3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXJ9Pih7c3RhcnQ6IDAsIGVuZDogTnVtYmVyLk1BWF9WQUxVRX0pO1xuXG4gIC8vIE91dGxldHMgaW4gdGhlIHRhYmxlJ3MgdGVtcGxhdGUgd2hlcmUgdGhlIGhlYWRlciwgZGF0YSByb3dzLCBhbmQgZm9vdGVyIHdpbGwgYmUgaW5zZXJ0ZWQuXG4gIEBWaWV3Q2hpbGQoRGF0YVJvd091dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9yb3dPdXRsZXQ6IERhdGFSb3dPdXRsZXQ7XG4gIEBWaWV3Q2hpbGQoSGVhZGVyUm93T3V0bGV0LCB7c3RhdGljOiB0cnVlfSkgX2hlYWRlclJvd091dGxldDogSGVhZGVyUm93T3V0bGV0O1xuICBAVmlld0NoaWxkKEZvb3RlclJvd091dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9mb290ZXJSb3dPdXRsZXQ6IEZvb3RlclJvd091dGxldDtcblxuICAvKipcbiAgICogVGhlIGNvbHVtbiBkZWZpbml0aW9ucyBwcm92aWRlZCBieSB0aGUgdXNlciB0aGF0IGNvbnRhaW4gd2hhdCB0aGUgaGVhZGVyLCBkYXRhLCBhbmQgZm9vdGVyXG4gICAqIGNlbGxzIHNob3VsZCByZW5kZXIgZm9yIGVhY2ggY29sdW1uLlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtDb2x1bW5EZWYsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9jb250ZW50Q29sdW1uRGVmczogUXVlcnlMaXN0PENka0NvbHVtbkRlZj47XG5cbiAgLyoqIFNldCBvZiBkYXRhIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgcHJvdmlkZWQgdG8gdGhlIHRhYmxlIGFzIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2RrUm93RGVmLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfY29udGVudFJvd0RlZnM6IFF1ZXJ5TGlzdDxDZGtSb3dEZWY8VD4+O1xuXG4gIC8qKiBTZXQgb2YgaGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgcHJvdmlkZWQgdG8gdGhlIHRhYmxlIGFzIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2RrSGVhZGVyUm93RGVmLCB7XG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSkgX2NvbnRlbnRIZWFkZXJSb3dEZWZzOiBRdWVyeUxpc3Q8Q2RrSGVhZGVyUm93RGVmPjtcblxuICAvKiogU2V0IG9mIGZvb3RlciByb3cgZGVmaW5pdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkIHRvIHRoZSB0YWJsZSBhcyBjb250ZW50IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKENka0Zvb3RlclJvd0RlZiwge1xuICAgIGRlc2NlbmRhbnRzOiB0cnVlXG4gIH0pIF9jb250ZW50Rm9vdGVyUm93RGVmczogUXVlcnlMaXN0PENka0Zvb3RlclJvd0RlZj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAQXR0cmlidXRlKCdyb2xlJykgcm9sZTogc3RyaW5nLFxuICAgICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHJlYWRvbmx5IF9kaXI6IERpcmVjdGlvbmFsaXR5LCBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcbiAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGlmICghcm9sZSkge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdncmlkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gICAgdGhpcy5faXNOYXRpdmVIdG1sVGFibGUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT09ICdUQUJMRSc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZXR1cFN0aWNreVN0eWxlcigpO1xuXG4gICAgaWYgKHRoaXMuX2lzTmF0aXZlSHRtbFRhYmxlKSB7XG4gICAgICB0aGlzLl9hcHBseU5hdGl2ZVRhYmxlU2VjdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgdGhlIHRyYWNrQnkgZnVuY3Rpb24gc28gdGhhdCBpdCB1c2VzIHRoZSBgUmVuZGVyUm93YCBhcyBpdHMgaWRlbnRpdHkgYnkgZGVmYXVsdC4gSWZcbiAgICAvLyB0aGUgdXNlciBoYXMgcHJvdmlkZWQgYSBjdXN0b20gdHJhY2tCeSwgcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhhdCBmdW5jdGlvbiBhcyBldmFsdWF0ZWRcbiAgICAvLyB3aXRoIHRoZSB2YWx1ZXMgb2YgdGhlIGBSZW5kZXJSb3dgJ3MgZGF0YSBhbmQgaW5kZXguXG4gICAgdGhpcy5fZGF0YURpZmZlciA9IHRoaXMuX2RpZmZlcnMuZmluZChbXSkuY3JlYXRlKChfaTogbnVtYmVyLCBkYXRhUm93OiBSZW5kZXJSb3c8VD4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrQnkgPyB0aGlzLnRyYWNrQnkoZGF0YVJvdy5kYXRhSW5kZXgsIGRhdGFSb3cuZGF0YSkgOiBkYXRhUm93O1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIENhY2hlIHRoZSByb3cgYW5kIGNvbHVtbiBkZWZpbml0aW9ucyBnYXRoZXJlZCBieSBDb250ZW50Q2hpbGRyZW4gYW5kIHByb2dyYW1tYXRpYyBpbmplY3Rpb24uXG4gICAgdGhpcy5fY2FjaGVSb3dEZWZzKCk7XG4gICAgdGhpcy5fY2FjaGVDb2x1bW5EZWZzKCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgdXNlciBoYXMgYXQgbGVhc3QgYWRkZWQgaGVhZGVyLCBmb290ZXIsIG9yIGRhdGEgcm93IGRlZi5cbiAgICBpZiAoIXRoaXMuX2hlYWRlclJvd0RlZnMubGVuZ3RoICYmICF0aGlzLl9mb290ZXJSb3dEZWZzLmxlbmd0aCAmJiAhdGhpcy5fcm93RGVmcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGdldFRhYmxlTWlzc2luZ1Jvd0RlZnNFcnJvcigpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciB1cGRhdGVzIGlmIHRoZSBsaXN0IG9mIGNvbHVtbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZm9yIHRoZSBoZWFkZXIsIHJvdywgb3IgZm9vdGVyIGRlZnMuXG4gICAgdGhpcy5fcmVuZGVyVXBkYXRlZENvbHVtbnMoKTtcblxuICAgIC8vIElmIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24gaGFzIGJlZW4gY2hhbmdlZCwgdHJpZ2dlciBhIHJlbmRlciB0byB0aGUgaGVhZGVyIHJvdy5cbiAgICBpZiAodGhpcy5faGVhZGVyUm93RGVmQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fZm9yY2VSZW5kZXJIZWFkZXJSb3dzKCk7XG4gICAgICB0aGlzLl9oZWFkZXJSb3dEZWZDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLCB0cmlnZ2VyIGEgcmVuZGVyIHRvIHRoZSBmb290ZXIgcm93LlxuICAgIGlmICh0aGlzLl9mb290ZXJSb3dEZWZDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9mb3JjZVJlbmRlckZvb3RlclJvd3MoKTtcbiAgICAgIHRoaXMuX2Zvb3RlclJvd0RlZkNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGRhdGEgc291cmNlIGFuZCByb3cgZGVmaW5pdGlvbnMsIGNvbm5lY3QgdG8gdGhlIGRhdGEgc291cmNlIHVubGVzcyBhXG4gICAgLy8gY29ubmVjdGlvbiBoYXMgYWxyZWFkeSBiZWVuIG1hZGUuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLl9yb3dEZWZzLmxlbmd0aCA+IDAgJiYgIXRoaXMuX3JlbmRlckNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja1N0aWNreVN0YXRlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcm93T3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLl9oZWFkZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIHRoaXMuX2Zvb3RlclJvd091dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG5cbiAgICB0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLmNsZWFyKCk7XG5cbiAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKGlzRGF0YVNvdXJjZSh0aGlzLmRhdGFTb3VyY2UpKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyByb3dzIGJhc2VkIG9uIHRoZSB0YWJsZSdzIGxhdGVzdCBzZXQgb2YgZGF0YSwgd2hpY2ggd2FzIGVpdGhlciBwcm92aWRlZCBkaXJlY3RseSBhcyBhblxuICAgKiBpbnB1dCBvciByZXRyaWV2ZWQgdGhyb3VnaCBhbiBPYnNlcnZhYmxlIHN0cmVhbSAoZGlyZWN0bHkgb3IgZnJvbSBhIERhdGFTb3VyY2UpLlxuICAgKiBDaGVja3MgZm9yIGRpZmZlcmVuY2VzIGluIHRoZSBkYXRhIHNpbmNlIHRoZSBsYXN0IGRpZmYgdG8gcGVyZm9ybSBvbmx5IHRoZSBuZWNlc3NhcnlcbiAgICogY2hhbmdlcyAoYWRkL3JlbW92ZS9tb3ZlIHJvd3MpLlxuICAgKlxuICAgKiBJZiB0aGUgdGFibGUncyBkYXRhIHNvdXJjZSBpcyBhIERhdGFTb3VyY2Ugb3IgT2JzZXJ2YWJsZSwgdGhpcyB3aWxsIGJlIGludm9rZWQgYXV0b21hdGljYWxseVxuICAgKiBlYWNoIHRpbWUgdGhlIHByb3ZpZGVkIE9ic2VydmFibGUgc3RyZWFtIGVtaXRzIGEgbmV3IGRhdGEgYXJyYXkuIE90aGVyd2lzZSBpZiB5b3VyIGRhdGEgaXNcbiAgICogYW4gYXJyYXksIHRoaXMgZnVuY3Rpb24gd2lsbCBuZWVkIHRvIGJlIGNhbGxlZCB0byByZW5kZXIgYW55IGNoYW5nZXMuXG4gICAqL1xuICByZW5kZXJSb3dzKCkge1xuICAgIHRoaXMuX3JlbmRlclJvd3MgPSB0aGlzLl9nZXRBbGxSZW5kZXJSb3dzKCk7XG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuX2RhdGFEaWZmZXIuZGlmZih0aGlzLl9yZW5kZXJSb3dzKTtcbiAgICBpZiAoIWNoYW5nZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fcm93T3V0bGV0LnZpZXdDb250YWluZXI7XG5cbiAgICBjaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXG4gICAgICAgIChyZWNvcmQ6IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPFJlbmRlclJvdzxUPj4sIHByZXZJbmRleDogbnVtYmVyfG51bGwsXG4gICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlcnxudWxsKSA9PiB7XG4gICAgICAgICAgaWYgKHJlY29yZC5wcmV2aW91c0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc2VydFJvdyhyZWNvcmQuaXRlbSwgY3VycmVudEluZGV4ISk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUocHJldkluZGV4ISk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSA8Um93Vmlld1JlZjxUPj52aWV3Q29udGFpbmVyLmdldChwcmV2SW5kZXghKTtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXIubW92ZSh2aWV3ISwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBtZXRhIGNvbnRleHQgb2YgYSByb3cncyBjb250ZXh0IGRhdGEgKGluZGV4LCBjb3VudCwgZmlyc3QsIGxhc3QsIC4uLilcbiAgICB0aGlzLl91cGRhdGVSb3dJbmRleENvbnRleHQoKTtcblxuICAgIC8vIFVwZGF0ZSByb3dzIHRoYXQgZGlkIG5vdCBnZXQgYWRkZWQvcmVtb3ZlZC9tb3ZlZCBidXQgbWF5IGhhdmUgaGFkIHRoZWlyIGlkZW50aXR5IGNoYW5nZWQsXG4gICAgLy8gZS5nLiBpZiB0cmFja0J5IG1hdGNoZWQgZGF0YSBvbiBzb21lIHByb3BlcnR5IGJ1dCB0aGUgYWN0dWFsIGRhdGEgcmVmZXJlbmNlIGNoYW5nZWQuXG4gICAgY2hhbmdlcy5mb3JFYWNoSWRlbnRpdHlDaGFuZ2UoKHJlY29yZDogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8UmVuZGVyUm93PFQ+PikgPT4ge1xuICAgICAgY29uc3Qgcm93VmlldyA9IDxSb3dWaWV3UmVmPFQ+PnZpZXdDb250YWluZXIuZ2V0KHJlY29yZC5jdXJyZW50SW5kZXghKTtcbiAgICAgIHJvd1ZpZXcuY29udGV4dC4kaW1wbGljaXQgPSByZWNvcmQuaXRlbS5kYXRhO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24gdG8gYmUgdXNlZC4gT3ZlcnJpZGVzIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24gZ2F0aGVyZWQgYnlcbiAgICogdXNpbmcgYENvbnRlbnRDaGlsZGAsIGlmIG9uZSBleGlzdHMuIFNldHMgYSBmbGFnIHRoYXQgd2lsbCByZS1yZW5kZXIgdGhlIGhlYWRlciByb3cgYWZ0ZXIgdGhlXG4gICAqIHRhYmxlJ3MgY29udGVudCBpcyBjaGVja2VkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWRkSGVhZGVyUm93RGVmYCBhbmQgYHJlbW92ZUhlYWRlclJvd0RlZmAgaW5zdGVhZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBzZXRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmOiBDZGtIZWFkZXJSb3dEZWYpIHtcbiAgICB0aGlzLl9jdXN0b21IZWFkZXJSb3dEZWZzID0gbmV3IFNldChbaGVhZGVyUm93RGVmXSk7XG4gICAgdGhpcy5faGVhZGVyUm93RGVmQ2hhbmdlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZm9vdGVyIHJvdyBkZWZpbml0aW9uIHRvIGJlIHVzZWQuIE92ZXJyaWRlcyB0aGUgZm9vdGVyIHJvdyBkZWZpbml0aW9uIGdhdGhlcmVkIGJ5XG4gICAqIHVzaW5nIGBDb250ZW50Q2hpbGRgLCBpZiBvbmUgZXhpc3RzLiBTZXRzIGEgZmxhZyB0aGF0IHdpbGwgcmUtcmVuZGVyIHRoZSBmb290ZXIgcm93IGFmdGVyIHRoZVxuICAgKiB0YWJsZSdzIGNvbnRlbnQgaXMgY2hlY2tlZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFkZEZvb3RlclJvd0RlZmAgYW5kIGByZW1vdmVGb290ZXJSb3dEZWZgIGluc3RlYWRcbiAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICAgKi9cbiAgc2V0Rm9vdGVyUm93RGVmKGZvb3RlclJvd0RlZjogQ2RrRm9vdGVyUm93RGVmKSB7XG4gICAgdGhpcy5fY3VzdG9tRm9vdGVyUm93RGVmcyA9IG5ldyBTZXQoW2Zvb3RlclJvd0RlZl0pO1xuICAgIHRoaXMuX2Zvb3RlclJvd0RlZkNoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEFkZHMgYSBjb2x1bW4gZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgYWRkQ29sdW1uRGVmKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmKSB7XG4gICAgdGhpcy5fY3VzdG9tQ29sdW1uRGVmcy5hZGQoY29sdW1uRGVmKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGEgY29sdW1uIGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIHJlbW92ZUNvbHVtbkRlZihjb2x1bW5EZWY6IENka0NvbHVtbkRlZikge1xuICAgIHRoaXMuX2N1c3RvbUNvbHVtbkRlZnMuZGVsZXRlKGNvbHVtbkRlZik7XG4gIH1cblxuICAvKiogQWRkcyBhIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICBhZGRSb3dEZWYocm93RGVmOiBDZGtSb3dEZWY8VD4pIHtcbiAgICB0aGlzLl9jdXN0b21Sb3dEZWZzLmFkZChyb3dEZWYpO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYSByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgcmVtb3ZlUm93RGVmKHJvd0RlZjogQ2RrUm93RGVmPFQ+KSB7XG4gICAgdGhpcy5fY3VzdG9tUm93RGVmcy5kZWxldGUocm93RGVmKTtcbiAgfVxuXG4gIC8qKiBBZGRzIGEgaGVhZGVyIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICBhZGRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmOiBDZGtIZWFkZXJSb3dEZWYpIHtcbiAgICB0aGlzLl9jdXN0b21IZWFkZXJSb3dEZWZzLmFkZChoZWFkZXJSb3dEZWYpO1xuICAgIHRoaXMuX2hlYWRlclJvd0RlZkNoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgYSBoZWFkZXIgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIHJlbW92ZUhlYWRlclJvd0RlZihoZWFkZXJSb3dEZWY6IENka0hlYWRlclJvd0RlZikge1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlclJvd0RlZnMuZGVsZXRlKGhlYWRlclJvd0RlZik7XG4gICAgdGhpcy5faGVhZGVyUm93RGVmQ2hhbmdlZCA9IHRydWU7XG4gIH1cblxuICAvKiogQWRkcyBhIGZvb3RlciByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgYWRkRm9vdGVyUm93RGVmKGZvb3RlclJvd0RlZjogQ2RrRm9vdGVyUm93RGVmKSB7XG4gICAgdGhpcy5fY3VzdG9tRm9vdGVyUm93RGVmcy5hZGQoZm9vdGVyUm93RGVmKTtcbiAgICB0aGlzLl9mb290ZXJSb3dEZWZDaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGEgZm9vdGVyIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICByZW1vdmVGb290ZXJSb3dEZWYoZm9vdGVyUm93RGVmOiBDZGtGb290ZXJSb3dEZWYpIHtcbiAgICB0aGlzLl9jdXN0b21Gb290ZXJSb3dEZWZzLmRlbGV0ZShmb290ZXJSb3dEZWYpO1xuICAgIHRoaXMuX2Zvb3RlclJvd0RlZkNoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGhlYWRlciBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIHRvcC4gVGhlbiwgZXZhbHVhdGluZyB3aGljaCBjZWxscyBuZWVkIHRvIGJlIHN0dWNrIHRvIHRoZSB0b3AuIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgd2hlbiB0aGUgaGVhZGVyIHJvdyBjaGFuZ2VzIGl0cyBkaXNwbGF5ZWQgc2V0IG9mIGNvbHVtbnMsIG9yIGlmIGl0c1xuICAgKiBzdGlja3kgaW5wdXQgY2hhbmdlcy4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGVcbiAgICogb2YgdGhlc2UgZXZlbnRzLlxuICAgKi9cbiAgdXBkYXRlU3RpY2t5SGVhZGVyUm93U3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGhlYWRlclJvd3MgPSB0aGlzLl9nZXRSZW5kZXJlZFJvd3ModGhpcy5faGVhZGVyUm93T3V0bGV0KTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBIaWRlIHRoZSB0aGVhZCBlbGVtZW50IGlmIHRoZXJlIGFyZSBubyBoZWFkZXIgcm93cy4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc2F0aXNmeVxuICAgIC8vIG92ZXJ6ZWFsb3VzIGExMXkgY2hlY2tlcnMgdGhhdCBmYWlsIGJlY2F1c2UgdGhlIGByb3dncm91cGAgZWxlbWVudCBkb2VzIG5vdCBjb250YWluXG4gICAgLy8gcmVxdWlyZWQgY2hpbGQgYHJvd2AuXG4gICAgY29uc3QgdGhlYWQgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGhlYWQnKTtcbiAgICBpZiAodGhlYWQpIHtcbiAgICAgIHRoZWFkLnN0eWxlLmRpc3BsYXkgPSBoZWFkZXJSb3dzLmxlbmd0aCA/ICcnIDogJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IHN0aWNreVN0YXRlcyA9IHRoaXMuX2hlYWRlclJvd0RlZnMubWFwKGRlZiA9PiBkZWYuc3RpY2t5KTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuY2xlYXJTdGlja3lQb3NpdGlvbmluZyhoZWFkZXJSb3dzLCBbJ3RvcCddKTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuc3RpY2tSb3dzKGhlYWRlclJvd3MsIHN0aWNreVN0YXRlcywgJ3RvcCcpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGRpcnR5IHN0YXRlIG9mIHRoZSBzdGlja3kgaW5wdXQgY2hhbmdlIHNpbmNlIGl0IGhhcyBiZWVuIHVzZWQuXG4gICAgdGhpcy5faGVhZGVyUm93RGVmcy5mb3JFYWNoKGRlZiA9PiBkZWYucmVzZXRTdGlja3lDaGFuZ2VkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGZvb3RlciBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIGJvdHRvbS4gVGhlbiwgZXZhbHVhdGluZyB3aGljaCBjZWxscyBuZWVkIHRvIGJlIHN0dWNrIHRvIHRoZSBib3R0b20uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgd2hlbiB0aGUgZm9vdGVyIHJvdyBjaGFuZ2VzIGl0cyBkaXNwbGF5ZWQgc2V0IG9mIGNvbHVtbnMsIG9yIGlmIGl0c1xuICAgKiBzdGlja3kgaW5wdXQgY2hhbmdlcy4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGVcbiAgICogb2YgdGhlc2UgZXZlbnRzLlxuICAgKi9cbiAgdXBkYXRlU3RpY2t5Rm9vdGVyUm93U3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGZvb3RlclJvd3MgPSB0aGlzLl9nZXRSZW5kZXJlZFJvd3ModGhpcy5fZm9vdGVyUm93T3V0bGV0KTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBIaWRlIHRoZSB0Zm9vdCBlbGVtZW50IGlmIHRoZXJlIGFyZSBubyBmb290ZXIgcm93cy4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc2F0aXNmeVxuICAgIC8vIG92ZXJ6ZWFsb3VzIGExMXkgY2hlY2tlcnMgdGhhdCBmYWlsIGJlY2F1c2UgdGhlIGByb3dncm91cGAgZWxlbWVudCBkb2VzIG5vdCBjb250YWluXG4gICAgLy8gcmVxdWlyZWQgY2hpbGQgYHJvd2AuXG4gICAgY29uc3QgdGZvb3QgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGZvb3QnKTtcbiAgICBpZiAodGZvb3QpIHtcbiAgICAgIHRmb290LnN0eWxlLmRpc3BsYXkgPSBmb290ZXJSb3dzLmxlbmd0aCA/ICcnIDogJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IHN0aWNreVN0YXRlcyA9IHRoaXMuX2Zvb3RlclJvd0RlZnMubWFwKGRlZiA9PiBkZWYuc3RpY2t5KTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuY2xlYXJTdGlja3lQb3NpdGlvbmluZyhmb290ZXJSb3dzLCBbJ2JvdHRvbSddKTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuc3RpY2tSb3dzKGZvb3RlclJvd3MsIHN0aWNreVN0YXRlcywgJ2JvdHRvbScpO1xuICAgIHRoaXMuX3N0aWNreVN0eWxlci51cGRhdGVTdGlja3lGb290ZXJDb250YWluZXIodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGlja3lTdGF0ZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGRpcnR5IHN0YXRlIG9mIHRoZSBzdGlja3kgaW5wdXQgY2hhbmdlIHNpbmNlIGl0IGhhcyBiZWVuIHVzZWQuXG4gICAgdGhpcy5fZm9vdGVyUm93RGVmcy5mb3JFYWNoKGRlZiA9PiBkZWYucmVzZXRTdGlja3lDaGFuZ2VkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGNvbHVtbiBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIGxlZnQgYW5kIHJpZ2h0LiBUaGVuIHN0aWNreSBzdHlsZXMgYXJlIGFkZGVkIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgYWNjb3JkaW5nXG4gICAqIHRvIHRoZSBjb2x1bW4gZGVmaW5pdGlvbnMgZm9yIGVhY2ggY2VsbCBpbiBlYWNoIHJvdy4gVGhpcyBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuXG4gICAqIHRoZSBkYXRhIHNvdXJjZSBwcm92aWRlcyBhIG5ldyBzZXQgb2YgZGF0YSBvciB3aGVuIGEgY29sdW1uIGRlZmluaXRpb24gY2hhbmdlcyBpdHMgc3RpY2t5XG4gICAqIGlucHV0LiBNYXkgYmUgY2FsbGVkIG1hbnVhbGx5IGZvciBjYXNlcyB3aGVyZSB0aGUgY2VsbCBjb250ZW50IGNoYW5nZXMgb3V0c2lkZSBvZiB0aGVzZSBldmVudHMuXG4gICAqL1xuICB1cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKSB7XG4gICAgY29uc3QgaGVhZGVyUm93cyA9IHRoaXMuX2dldFJlbmRlcmVkUm93cyh0aGlzLl9oZWFkZXJSb3dPdXRsZXQpO1xuICAgIGNvbnN0IGRhdGFSb3dzID0gdGhpcy5fZ2V0UmVuZGVyZWRSb3dzKHRoaXMuX3Jvd091dGxldCk7XG4gICAgY29uc3QgZm9vdGVyUm93cyA9IHRoaXMuX2dldFJlbmRlcmVkUm93cyh0aGlzLl9mb290ZXJSb3dPdXRsZXQpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGxlZnQgYW5kIHJpZ2h0IHBvc2l0aW9uaW5nIGZyb20gYWxsIGNvbHVtbnMgaW4gdGhlIHRhYmxlIGFjcm9zcyBhbGwgcm93cyBzaW5jZVxuICAgIC8vIHN0aWNreSBjb2x1bW5zIHNwYW4gYWNyb3NzIGFsbCB0YWJsZSBzZWN0aW9ucyAoaGVhZGVyLCBkYXRhLCBmb290ZXIpXG4gICAgdGhpcy5fc3RpY2t5U3R5bGVyLmNsZWFyU3RpY2t5UG9zaXRpb25pbmcoXG4gICAgICAgIFsuLi5oZWFkZXJSb3dzLCAuLi5kYXRhUm93cywgLi4uZm9vdGVyUm93c10sIFsnbGVmdCcsICdyaWdodCddKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RpY2t5IHN0eWxlcyBmb3IgZWFjaCBoZWFkZXIgcm93IGRlcGVuZGluZyBvbiB0aGUgZGVmJ3Mgc3RpY2t5IHN0YXRlXG4gICAgaGVhZGVyUm93cy5mb3JFYWNoKChoZWFkZXJSb3csIGkpID0+IHtcbiAgICAgIHRoaXMuX2FkZFN0aWNreUNvbHVtblN0eWxlcyhbaGVhZGVyUm93XSwgdGhpcy5faGVhZGVyUm93RGVmc1tpXSk7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0aWNreSBzdHlsZXMgZm9yIGVhY2ggZGF0YSByb3cgZGVwZW5kaW5nIG9uIGl0cyBkZWYncyBzdGlja3kgc3RhdGVcbiAgICB0aGlzLl9yb3dEZWZzLmZvckVhY2gocm93RGVmID0+IHtcbiAgICAgIC8vIENvbGxlY3QgYWxsIHRoZSByb3dzIHJlbmRlcmVkIHdpdGggdGhpcyByb3cgZGVmaW5pdGlvbi5cbiAgICAgIGNvbnN0IHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlclJvd3NbaV0ucm93RGVmID09PSByb3dEZWYpIHtcbiAgICAgICAgICByb3dzLnB1c2goZGF0YVJvd3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZFN0aWNreUNvbHVtblN0eWxlcyhyb3dzLCByb3dEZWYpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGlja3kgc3R5bGVzIGZvciBlYWNoIGZvb3RlciByb3cgZGVwZW5kaW5nIG9uIHRoZSBkZWYncyBzdGlja3kgc3RhdGVcbiAgICBmb290ZXJSb3dzLmZvckVhY2goKGZvb3RlclJvdywgaSkgPT4ge1xuICAgICAgdGhpcy5fYWRkU3RpY2t5Q29sdW1uU3R5bGVzKFtmb290ZXJSb3ddLCB0aGlzLl9mb290ZXJSb3dEZWZzW2ldKTtcbiAgICB9KTtcblxuICAgIC8vIFJlc2V0IHRoZSBkaXJ0eSBzdGF0ZSBvZiB0aGUgc3RpY2t5IGlucHV0IGNoYW5nZSBzaW5jZSBpdCBoYXMgYmVlbiB1c2VkLlxuICAgIEFycmF5LmZyb20odGhpcy5fY29sdW1uRGVmc0J5TmFtZS52YWx1ZXMoKSkuZm9yRWFjaChkZWYgPT4gZGVmLnJlc2V0U3RpY2t5Q2hhbmdlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2YgUmVuZGVyUm93IG9iamVjdHMgdG8gcmVuZGVyIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBsaXN0IG9mIGRhdGEgYW5kIGRlZmluZWRcbiAgICogcm93IGRlZmluaXRpb25zLiBJZiB0aGUgcHJldmlvdXMgbGlzdCBhbHJlYWR5IGNvbnRhaW5lZCBhIHBhcnRpY3VsYXIgcGFpciwgaXQgc2hvdWxkIGJlIHJldXNlZFxuICAgKiBzbyB0aGF0IHRoZSBkaWZmZXIgZXF1YXRlcyB0aGVpciByZWZlcmVuY2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0QWxsUmVuZGVyUm93cygpOiBSZW5kZXJSb3c8VD5bXSB7XG4gICAgY29uc3QgcmVuZGVyUm93czogUmVuZGVyUm93PFQ+W10gPSBbXTtcblxuICAgIC8vIFN0b3JlIHRoZSBjYWNoZSBhbmQgY3JlYXRlIGEgbmV3IG9uZS4gQW55IHJlLXVzZWQgUmVuZGVyUm93IG9iamVjdHMgd2lsbCBiZSBtb3ZlZCBpbnRvIHRoZVxuICAgIC8vIG5ldyBjYWNoZSB3aGlsZSB1bnVzZWQgb25lcyBjYW4gYmUgcGlja2VkIHVwIGJ5IGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICBjb25zdCBwcmV2Q2FjaGVkUmVuZGVyUm93cyA9IHRoaXMuX2NhY2hlZFJlbmRlclJvd3NNYXA7XG4gICAgdGhpcy5fY2FjaGVkUmVuZGVyUm93c01hcCA9IG5ldyBNYXAoKTtcblxuICAgIC8vIEZvciBlYWNoIGRhdGEgb2JqZWN0LCBnZXQgdGhlIGxpc3Qgb2Ygcm93cyB0aGF0IHNob3VsZCBiZSByZW5kZXJlZCwgcmVwcmVzZW50ZWQgYnkgdGhlXG4gICAgLy8gcmVzcGVjdGl2ZSBgUmVuZGVyUm93YCBvYmplY3Qgd2hpY2ggaXMgdGhlIHBhaXIgb2YgYGRhdGFgIGFuZCBgQ2RrUm93RGVmYC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVtpXTtcbiAgICAgIGNvbnN0IHJlbmRlclJvd3NGb3JEYXRhID0gdGhpcy5fZ2V0UmVuZGVyUm93c0ZvckRhdGEoZGF0YSwgaSwgcHJldkNhY2hlZFJlbmRlclJvd3MuZ2V0KGRhdGEpKTtcblxuICAgICAgaWYgKCF0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLmhhcyhkYXRhKSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLnNldChkYXRhLCBuZXcgV2Vha01hcCgpKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZW5kZXJSb3dzRm9yRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcmVuZGVyUm93ID0gcmVuZGVyUm93c0ZvckRhdGFbal07XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLmdldChyZW5kZXJSb3cuZGF0YSkhO1xuICAgICAgICBpZiAoY2FjaGUuaGFzKHJlbmRlclJvdy5yb3dEZWYpKSB7XG4gICAgICAgICAgY2FjaGUuZ2V0KHJlbmRlclJvdy5yb3dEZWYpIS5wdXNoKHJlbmRlclJvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FjaGUuc2V0KHJlbmRlclJvdy5yb3dEZWYsIFtyZW5kZXJSb3ddKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJSb3dzLnB1c2gocmVuZGVyUm93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyUm93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBgUmVuZGVyUm93PFQ+YCBmb3IgdGhlIHByb3ZpZGVkIGRhdGEgb2JqZWN0IGFuZCBhbnkgYENka1Jvd0RlZmAgb2JqZWN0cyB0aGF0XG4gICAqIHNob3VsZCBiZSByZW5kZXJlZCBmb3IgdGhpcyBkYXRhLiBSZXVzZXMgdGhlIGNhY2hlZCBSZW5kZXJSb3cgb2JqZWN0cyBpZiB0aGV5IG1hdGNoIHRoZSBzYW1lXG4gICAqIGAoVCwgQ2RrUm93RGVmKWAgcGFpci5cbiAgICovXG4gIHByaXZhdGUgX2dldFJlbmRlclJvd3NGb3JEYXRhKFxuICAgICAgZGF0YTogVCwgZGF0YUluZGV4OiBudW1iZXIsIGNhY2hlPzogV2Vha01hcDxDZGtSb3dEZWY8VD4sIFJlbmRlclJvdzxUPltdPik6IFJlbmRlclJvdzxUPltdIHtcbiAgICBjb25zdCByb3dEZWZzID0gdGhpcy5fZ2V0Um93RGVmcyhkYXRhLCBkYXRhSW5kZXgpO1xuXG4gICAgcmV0dXJuIHJvd0RlZnMubWFwKHJvd0RlZiA9PiB7XG4gICAgICBjb25zdCBjYWNoZWRSZW5kZXJSb3dzID0gKGNhY2hlICYmIGNhY2hlLmhhcyhyb3dEZWYpKSA/IGNhY2hlLmdldChyb3dEZWYpISA6IFtdO1xuICAgICAgaWYgKGNhY2hlZFJlbmRlclJvd3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFSb3cgPSBjYWNoZWRSZW5kZXJSb3dzLnNoaWZ0KCkhO1xuICAgICAgICBkYXRhUm93LmRhdGFJbmRleCA9IGRhdGFJbmRleDtcbiAgICAgICAgcmV0dXJuIGRhdGFSb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge2RhdGEsIHJvd0RlZiwgZGF0YUluZGV4fTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIG1hcCBjb250YWluaW5nIHRoZSBjb250ZW50J3MgY29sdW1uIGRlZmluaXRpb25zLiAqL1xuICBwcml2YXRlIF9jYWNoZUNvbHVtbkRlZnMoKSB7XG4gICAgdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5jbGVhcigpO1xuXG4gICAgY29uc3QgY29sdW1uRGVmcyA9IG1lcmdlUXVlcnlMaXN0QW5kU2V0KHRoaXMuX2NvbnRlbnRDb2x1bW5EZWZzLCB0aGlzLl9jdXN0b21Db2x1bW5EZWZzKTtcbiAgICBjb2x1bW5EZWZzLmZvckVhY2goY29sdW1uRGVmID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5EZWZzQnlOYW1lLmhhcyhjb2x1bW5EZWYubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgZ2V0VGFibGVEdXBsaWNhdGVDb2x1bW5OYW1lRXJyb3IoY29sdW1uRGVmLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5zZXQoY29sdW1uRGVmLm5hbWUsIGNvbHVtbkRlZik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVXBkYXRlIHRoZSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcm93IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIHVzZWQuICovXG4gIHByaXZhdGUgX2NhY2hlUm93RGVmcygpIHtcbiAgICB0aGlzLl9oZWFkZXJSb3dEZWZzID1cbiAgICAgICAgbWVyZ2VRdWVyeUxpc3RBbmRTZXQodGhpcy5fY29udGVudEhlYWRlclJvd0RlZnMsIHRoaXMuX2N1c3RvbUhlYWRlclJvd0RlZnMpO1xuICAgIHRoaXMuX2Zvb3RlclJvd0RlZnMgPVxuICAgICAgICBtZXJnZVF1ZXJ5TGlzdEFuZFNldCh0aGlzLl9jb250ZW50Rm9vdGVyUm93RGVmcywgdGhpcy5fY3VzdG9tRm9vdGVyUm93RGVmcyk7XG4gICAgdGhpcy5fcm93RGVmcyA9IG1lcmdlUXVlcnlMaXN0QW5kU2V0KHRoaXMuX2NvbnRlbnRSb3dEZWZzLCB0aGlzLl9jdXN0b21Sb3dEZWZzKTtcblxuICAgIC8vIEFmdGVyIGFsbCByb3cgZGVmaW5pdGlvbnMgYXJlIGRldGVybWluZWQsIGZpbmQgdGhlIHJvdyBkZWZpbml0aW9uIHRvIGJlIGNvbnNpZGVyZWQgZGVmYXVsdC5cbiAgICBjb25zdCBkZWZhdWx0Um93RGVmcyA9IHRoaXMuX3Jvd0RlZnMuZmlsdGVyKGRlZiA9PiAhZGVmLndoZW4pO1xuICAgIGlmICghdGhpcy5tdWx0aVRlbXBsYXRlRGF0YVJvd3MgJiYgZGVmYXVsdFJvd0RlZnMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgZ2V0VGFibGVNdWx0aXBsZURlZmF1bHRSb3dEZWZzRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy5fZGVmYXVsdFJvd0RlZiA9IGRlZmF1bHRSb3dEZWZzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBoZWFkZXIsIGRhdGEsIG9yIGZvb3RlciByb3dzIGhhdmUgY2hhbmdlZCB3aGF0IGNvbHVtbnMgdGhleSB3YW50IHRvIGRpc3BsYXkgb3JcbiAgICogd2hldGhlciB0aGUgc3RpY2t5IHN0YXRlcyBoYXZlIGNoYW5nZWQgZm9yIHRoZSBoZWFkZXIgb3IgZm9vdGVyLiBJZiB0aGVyZSBpcyBhIGRpZmYsIHRoZW5cbiAgICogcmUtcmVuZGVyIHRoYXQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX3JlbmRlclVwZGF0ZWRDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVtbnNEaWZmUmVkdWNlciA9IChhY2M6IGJvb2xlYW4sIGRlZjogQmFzZVJvd0RlZikgPT4gYWNjIHx8ICEhZGVmLmdldENvbHVtbnNEaWZmKCk7XG5cbiAgICAvLyBGb3JjZSByZS1yZW5kZXIgZGF0YSByb3dzIGlmIHRoZSBsaXN0IG9mIGNvbHVtbiBkZWZpbml0aW9ucyBoYXZlIGNoYW5nZWQuXG4gICAgaWYgKHRoaXMuX3Jvd0RlZnMucmVkdWNlKGNvbHVtbnNEaWZmUmVkdWNlciwgZmFsc2UpKSB7XG4gICAgICB0aGlzLl9mb3JjZVJlbmRlckRhdGFSb3dzKCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmUtcmVuZGVyIGhlYWRlci9mb290ZXIgcm93cyBpZiB0aGUgbGlzdCBvZiBjb2x1bW4gZGVmaW5pdGlvbnMgaGF2ZSBjaGFuZ2VkLi5cbiAgICBpZiAodGhpcy5faGVhZGVyUm93RGVmcy5yZWR1Y2UoY29sdW1uc0RpZmZSZWR1Y2VyLCBmYWxzZSkpIHtcbiAgICAgIHRoaXMuX2ZvcmNlUmVuZGVySGVhZGVyUm93cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9mb290ZXJSb3dEZWZzLnJlZHVjZShjb2x1bW5zRGlmZlJlZHVjZXIsIGZhbHNlKSkge1xuICAgICAgdGhpcy5fZm9yY2VSZW5kZXJGb290ZXJSb3dzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0byB0aGUgcHJvdmlkZWQgZGF0YSBzb3VyY2UgYnkgcmVzZXR0aW5nIHRoZSBkYXRhIGFuZCB1bnN1YnNjcmliaW5nIGZyb20gdGhlIGN1cnJlbnRcbiAgICogcmVuZGVyIGNoYW5nZSBzdWJzY3JpcHRpb24gaWYgb25lIGV4aXN0cy4gSWYgdGhlIGRhdGEgc291cmNlIGlzIG51bGwsIGludGVycHJldCB0aGlzIGJ5XG4gICAqIGNsZWFyaW5nIHRoZSByb3cgb3V0bGV0LiBPdGhlcndpc2Ugc3RhcnQgbGlzdGVuaW5nIGZvciBuZXcgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogQ2RrVGFibGVEYXRhU291cmNlSW5wdXQ8VD4pIHtcbiAgICB0aGlzLl9kYXRhID0gW107XG5cbiAgICBpZiAoaXNEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSkpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgbGlzdGVuaW5nIGZvciBkYXRhIGZyb20gdGhlIHByZXZpb3VzIGRhdGEgc291cmNlLlxuICAgIGlmICh0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlckNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhRGlmZmVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFEaWZmZXIuZGlmZihbXSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICB9XG5cbiAgLyoqIFNldCB1cCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcbiAgICAvLyBJZiBubyBkYXRhIHNvdXJjZSBoYXMgYmVlbiBzZXQsIHRoZXJlIGlzIG5vdGhpbmcgdG8gb2JzZXJ2ZSBmb3IgY2hhbmdlcy5cbiAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhU3RyZWFtOiBPYnNlcnZhYmxlPFRbXXxSZWFkb25seUFycmF5PFQ+Pnx1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLmRhdGFTb3VyY2UuY29ubmVjdCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSBvYnNlcnZhYmxlT2YodGhpcy5kYXRhU291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZVVua25vd25EYXRhU291cmNlRXJyb3IoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhIHx8IFtdO1xuICAgICAgdGhpcy5yZW5kZXJSb3dzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFueSBleGlzdGluZyBjb250ZW50IGluIHRoZSBoZWFkZXIgcm93IG91dGxldCBhbmQgY3JlYXRlcyBhIG5ldyBlbWJlZGRlZCB2aWV3XG4gICAqIGluIHRoZSBvdXRsZXQgdXNpbmcgdGhlIGhlYWRlciByb3cgZGVmaW5pdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2ZvcmNlUmVuZGVySGVhZGVyUm93cygpIHtcbiAgICAvLyBDbGVhciB0aGUgaGVhZGVyIHJvdyBvdXRsZXQgaWYgYW55IGNvbnRlbnQgZXhpc3RzLlxuICAgIGlmICh0aGlzLl9oZWFkZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9oZWFkZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlclJvd0RlZnMuZm9yRWFjaCgoZGVmLCBpKSA9PiB0aGlzLl9yZW5kZXJSb3codGhpcy5faGVhZGVyUm93T3V0bGV0LCBkZWYsIGkpKTtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreUhlYWRlclJvd1N0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gIH1cbiAgLyoqXG4gICAqIENsZWFycyBhbnkgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgZm9vdGVyIHJvdyBvdXRsZXQgYW5kIGNyZWF0ZXMgYSBuZXcgZW1iZWRkZWQgdmlld1xuICAgKiBpbiB0aGUgb3V0bGV0IHVzaW5nIHRoZSBmb290ZXIgcm93IGRlZmluaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9mb3JjZVJlbmRlckZvb3RlclJvd3MoKSB7XG4gICAgLy8gQ2xlYXIgdGhlIGZvb3RlciByb3cgb3V0bGV0IGlmIGFueSBjb250ZW50IGV4aXN0cy5cbiAgICBpZiAodGhpcy5fZm9vdGVyUm93T3V0bGV0LnZpZXdDb250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZm9vdGVyUm93T3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb290ZXJSb3dEZWZzLmZvckVhY2goKGRlZiwgaSkgPT4gdGhpcy5fcmVuZGVyUm93KHRoaXMuX2Zvb3RlclJvd091dGxldCwgZGVmLCBpKSk7XG4gICAgdGhpcy51cGRhdGVTdGlja3lGb290ZXJSb3dTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpO1xuICB9XG5cbiAgLyoqIEFkZHMgdGhlIHN0aWNreSBjb2x1bW4gc3R5bGVzIGZvciB0aGUgcm93cyBhY2NvcmRpbmcgdG8gdGhlIGNvbHVtbnMnIHN0aWNrIHN0YXRlcy4gKi9cbiAgcHJpdmF0ZSBfYWRkU3RpY2t5Q29sdW1uU3R5bGVzKHJvd3M6IEhUTUxFbGVtZW50W10sIHJvd0RlZjogQmFzZVJvd0RlZikge1xuICAgIGNvbnN0IGNvbHVtbkRlZnMgPSBBcnJheS5mcm9tKHJvd0RlZi5jb2x1bW5zIHx8IFtdKS5tYXAoY29sdW1uTmFtZSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5EZWYgPSB0aGlzLl9jb2x1bW5EZWZzQnlOYW1lLmdldChjb2x1bW5OYW1lKTtcbiAgICAgIGlmICghY29sdW1uRGVmKSB7XG4gICAgICAgIHRocm93IGdldFRhYmxlVW5rbm93bkNvbHVtbkVycm9yKGNvbHVtbk5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbHVtbkRlZiE7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RpY2t5U3RhcnRTdGF0ZXMgPSBjb2x1bW5EZWZzLm1hcChjb2x1bW5EZWYgPT4gY29sdW1uRGVmLnN0aWNreSk7XG4gICAgY29uc3Qgc3RpY2t5RW5kU3RhdGVzID0gY29sdW1uRGVmcy5tYXAoY29sdW1uRGVmID0+IGNvbHVtbkRlZi5zdGlja3lFbmQpO1xuICAgIHRoaXMuX3N0aWNreVN0eWxlci51cGRhdGVTdGlja3lDb2x1bW5zKHJvd3MsIHN0aWNreVN0YXJ0U3RhdGVzLCBzdGlja3lFbmRTdGF0ZXMpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGxpc3Qgb2Ygcm93cyB0aGF0IGhhdmUgYmVlbiByZW5kZXJlZCBpbiB0aGUgcm93IG91dGxldC4gKi9cbiAgX2dldFJlbmRlcmVkUm93cyhyb3dPdXRsZXQ6IFJvd091dGxldCk6IEhUTUxFbGVtZW50W10ge1xuICAgIGNvbnN0IHJlbmRlcmVkUm93czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dPdXRsZXQudmlld0NvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IChyb3dPdXRsZXQudmlld0NvbnRhaW5lci5nZXQoaSkhIGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KTtcbiAgICAgIHJlbmRlcmVkUm93cy5wdXNoKHZpZXdSZWYucm9vdE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyZWRSb3dzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF0Y2hpbmcgcm93IGRlZmluaXRpb25zIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoaXMgcm93IGRhdGEuIElmIHRoZXJlIGlzIG9ubHlcbiAgICogb25lIHJvdyBkZWZpbml0aW9uLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBmaW5kIHRoZSByb3cgZGVmaW5pdGlvbnMgdGhhdCBoYXMgYSB3aGVuXG4gICAqIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdHJ1ZSB3aXRoIHRoZSBkYXRhLiBJZiBub25lIHJldHVybiB0cnVlLCByZXR1cm4gdGhlIGRlZmF1bHQgcm93XG4gICAqIGRlZmluaXRpb24uXG4gICAqL1xuICBfZ2V0Um93RGVmcyhkYXRhOiBULCBkYXRhSW5kZXg6IG51bWJlcik6IENka1Jvd0RlZjxUPltdIHtcbiAgICBpZiAodGhpcy5fcm93RGVmcy5sZW5ndGggPT0gMSkge1xuICAgICAgcmV0dXJuIFt0aGlzLl9yb3dEZWZzWzBdXTtcbiAgICB9XG5cbiAgICBsZXQgcm93RGVmczogQ2RrUm93RGVmPFQ+W10gPSBbXTtcbiAgICBpZiAodGhpcy5tdWx0aVRlbXBsYXRlRGF0YVJvd3MpIHtcbiAgICAgIHJvd0RlZnMgPSB0aGlzLl9yb3dEZWZzLmZpbHRlcihkZWYgPT4gIWRlZi53aGVuIHx8IGRlZi53aGVuKGRhdGFJbmRleCwgZGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcm93RGVmID1cbiAgICAgICAgICB0aGlzLl9yb3dEZWZzLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGRhdGFJbmRleCwgZGF0YSkpIHx8IHRoaXMuX2RlZmF1bHRSb3dEZWY7XG4gICAgICBpZiAocm93RGVmKSB7XG4gICAgICAgIHJvd0RlZnMucHVzaChyb3dEZWYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcm93RGVmcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGdldFRhYmxlTWlzc2luZ01hdGNoaW5nUm93RGVmRXJyb3IoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd0RlZnM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbWJlZGRlZCB2aWV3IGZvciB0aGUgZGF0YSByb3cgdGVtcGxhdGUgYW5kIHBsYWNlIGl0IGluIHRoZSBjb3JyZWN0IGluZGV4IGxvY2F0aW9uXG4gICAqIHdpdGhpbiB0aGUgZGF0YSByb3cgdmlldyBjb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRSb3cocmVuZGVyUm93OiBSZW5kZXJSb3c8VD4sIHJlbmRlckluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCByb3dEZWYgPSByZW5kZXJSb3cucm93RGVmO1xuICAgIGNvbnN0IGNvbnRleHQ6IFJvd0NvbnRleHQ8VD4gPSB7JGltcGxpY2l0OiByZW5kZXJSb3cuZGF0YX07XG4gICAgdGhpcy5fcmVuZGVyUm93KHRoaXMuX3Jvd091dGxldCwgcm93RGVmLCByZW5kZXJJbmRleCwgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyByb3cgdGVtcGxhdGUgaW4gdGhlIG91dGxldCBhbmQgZmlsbHMgaXQgd2l0aCB0aGUgc2V0IG9mIGNlbGwgdGVtcGxhdGVzLlxuICAgKiBPcHRpb25hbGx5IHRha2VzIGEgY29udGV4dCB0byBwcm92aWRlIHRvIHRoZSByb3cgYW5kIGNlbGxzLCBhcyB3ZWxsIGFzIGFuIG9wdGlvbmFsIGluZGV4XG4gICAqIG9mIHdoZXJlIHRvIHBsYWNlIHRoZSBuZXcgcm93IHRlbXBsYXRlIGluIHRoZSBvdXRsZXQuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJSb3coXG4gICAgICBvdXRsZXQ6IFJvd091dGxldCwgcm93RGVmOiBCYXNlUm93RGVmLCBpbmRleDogbnVtYmVyLCBjb250ZXh0OiBSb3dDb250ZXh0PFQ+ID0ge30pIHtcbiAgICAvLyBUT0RPKGFuZHJld3NlZ3Vpbik6IGVuZm9yY2UgdGhhdCBvbmUgb3V0bGV0IHdhcyBpbnN0YW50aWF0ZWQgZnJvbSBjcmVhdGVFbWJlZGRlZFZpZXdcbiAgICBvdXRsZXQudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcocm93RGVmLnRlbXBsYXRlLCBjb250ZXh0LCBpbmRleCk7XG5cbiAgICBmb3IgKGxldCBjZWxsVGVtcGxhdGUgb2YgdGhpcy5fZ2V0Q2VsbFRlbXBsYXRlcyhyb3dEZWYpKSB7XG4gICAgICBpZiAoQ2RrQ2VsbE91dGxldC5tb3N0UmVjZW50Q2VsbE91dGxldCkge1xuICAgICAgICBDZGtDZWxsT3V0bGV0Lm1vc3RSZWNlbnRDZWxsT3V0bGV0Ll92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhjZWxsVGVtcGxhdGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4LXJlbGF0ZWQgY29udGV4dCBmb3IgZWFjaCByb3cgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyBpbiB0aGUgaW5kZXggb2YgdGhlIHJvd3MsXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZVJvd0luZGV4Q29udGV4dCgpIHtcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fcm93T3V0bGV0LnZpZXdDb250YWluZXI7XG4gICAgZm9yIChsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoOyByZW5kZXJJbmRleCA8IGNvdW50OyByZW5kZXJJbmRleCsrKSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIFJvd1ZpZXdSZWY8VD47XG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIFJvd0NvbnRleHQ8VD47XG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xuXG4gICAgICBpZiAodGhpcy5tdWx0aVRlbXBsYXRlRGF0YVJvd3MpIHtcbiAgICAgICAgY29udGV4dC5kYXRhSW5kZXggPSB0aGlzLl9yZW5kZXJSb3dzW3JlbmRlckluZGV4XS5kYXRhSW5kZXg7XG4gICAgICAgIGNvbnRleHQucmVuZGVySW5kZXggPSByZW5kZXJJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuaW5kZXggPSB0aGlzLl9yZW5kZXJSb3dzW3JlbmRlckluZGV4XS5kYXRhSW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBmb3IgdGhlIHByb3ZpZGVkIHJvdyBkZWYuICovXG4gIHByaXZhdGUgX2dldENlbGxUZW1wbGF0ZXMocm93RGVmOiBCYXNlUm93RGVmKTogVGVtcGxhdGVSZWY8YW55PltdIHtcbiAgICBpZiAoIXJvd0RlZiB8fCAhcm93RGVmLmNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocm93RGVmLmNvbHVtbnMsIGNvbHVtbklkID0+IHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuX2NvbHVtbkRlZnNCeU5hbWUuZ2V0KGNvbHVtbklkKTtcblxuICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgdGhyb3cgZ2V0VGFibGVVbmtub3duQ29sdW1uRXJyb3IoY29sdW1uSWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93RGVmLmV4dHJhY3RDZWxsVGVtcGxhdGUoY29sdW1uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBZGRzIG5hdGl2ZSB0YWJsZSBzZWN0aW9ucyAoZS5nLiB0Ym9keSkgYW5kIG1vdmVzIHRoZSByb3cgb3V0bGV0cyBpbnRvIHRoZW0uICovXG4gIHByaXZhdGUgX2FwcGx5TmF0aXZlVGFibGVTZWN0aW9ucygpIHtcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgICAge3RhZzogJ3RoZWFkJywgb3V0bGV0OiB0aGlzLl9oZWFkZXJSb3dPdXRsZXR9LFxuICAgICAge3RhZzogJ3Rib2R5Jywgb3V0bGV0OiB0aGlzLl9yb3dPdXRsZXR9LFxuICAgICAge3RhZzogJ3Rmb290Jywgb3V0bGV0OiB0aGlzLl9mb290ZXJSb3dPdXRsZXR9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlY3Rpb24udGFnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3Jvd2dyb3VwJyk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNlY3Rpb24ub3V0bGV0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFVzZSBhIERvY3VtZW50RnJhZ21lbnQgc28gd2UgZG9uJ3QgaGl0IHRoZSBET00gb24gZWFjaCBpdGVyYXRpb24uXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhIHJlLXJlbmRlciBvZiB0aGUgZGF0YSByb3dzLiBTaG91bGQgYmUgY2FsbGVkIGluIGNhc2VzIHdoZXJlIHRoZXJlIGhhcyBiZWVuIGFuIGlucHV0XG4gICAqIGNoYW5nZSB0aGF0IGFmZmVjdHMgdGhlIGV2YWx1YXRpb24gb2Ygd2hpY2ggcm93cyBzaG91bGQgYmUgcmVuZGVyZWQsIGUuZy4gdG9nZ2xpbmdcbiAgICogYG11bHRpVGVtcGxhdGVEYXRhUm93c2Agb3IgYWRkaW5nL3JlbW92aW5nIHJvdyBkZWZpbml0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgX2ZvcmNlUmVuZGVyRGF0YVJvd3MoKSB7XG4gICAgdGhpcy5fZGF0YURpZmZlci5kaWZmKFtdKTtcbiAgICB0aGlzLl9yb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyUm93cygpO1xuICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGhhcyBiZWVuIGEgY2hhbmdlIGluIHN0aWNreSBzdGF0ZXMgc2luY2UgbGFzdCBjaGVjayBhbmQgYXBwbGllcyB0aGUgY29ycmVjdFxuICAgKiBzdGlja3kgc3R5bGVzLiBTaW5jZSBjaGVja2luZyByZXNldHMgdGhlIFwiZGlydHlcIiBzdGF0ZSwgdGhpcyBzaG91bGQgb25seSBiZSBwZXJmb3JtZWQgb25jZVxuICAgKiBkdXJpbmcgYSBjaGFuZ2UgZGV0ZWN0aW9uIGFuZCBhZnRlciB0aGUgaW5wdXRzIGFyZSBzZXR0bGVkIChhZnRlciBjb250ZW50IGNoZWNrKS5cbiAgICovXG4gIHByaXZhdGUgX2NoZWNrU3RpY2t5U3RhdGVzKCkge1xuICAgIGNvbnN0IHN0aWNreUNoZWNrUmVkdWNlciA9IChhY2M6IGJvb2xlYW4sIGQ6IENka0hlYWRlclJvd0RlZnxDZGtGb290ZXJSb3dEZWZ8Q2RrQ29sdW1uRGVmKSA9PiB7XG4gICAgICByZXR1cm4gYWNjIHx8IGQuaGFzU3RpY2t5Q2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICAvLyBOb3RlIHRoYXQgdGhlIGNoZWNrIG5lZWRzIHRvIG9jY3VyIGZvciBldmVyeSBkZWZpbml0aW9uIHNpbmNlIGl0IG5vdGlmaWVzIHRoZSBkZWZpbml0aW9uXG4gICAgLy8gdGhhdCBpdCBjYW4gcmVzZXQgaXRzIGRpcnR5IHN0YXRlLiBVc2luZyBhbm90aGVyIG9wZXJhdG9yIGxpa2UgYHNvbWVgIG1heSBzaG9ydC1jaXJjdWl0XG4gICAgLy8gcmVtYWluaW5nIGRlZmluaXRpb25zIGFuZCBsZWF2ZSB0aGVtIGluIGFuIHVuY2hlY2tlZCBzdGF0ZS5cblxuICAgIGlmICh0aGlzLl9oZWFkZXJSb3dEZWZzLnJlZHVjZShzdGlja3lDaGVja1JlZHVjZXIsIGZhbHNlKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGlja3lIZWFkZXJSb3dTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZm9vdGVyUm93RGVmcy5yZWR1Y2Uoc3RpY2t5Q2hlY2tSZWR1Y2VyLCBmYWxzZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RpY2t5Rm9vdGVyUm93U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20odGhpcy5fY29sdW1uRGVmc0J5TmFtZS52YWx1ZXMoKSkucmVkdWNlKHN0aWNreUNoZWNrUmVkdWNlciwgZmFsc2UpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBzdGlja3kgc3R5bGVyIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBzdGlja3kgcm93cyBhbmQgY29sdW1ucy4gTGlzdGVuc1xuICAgKiBmb3IgZGlyZWN0aW9uYWxpdHkgY2hhbmdlcyBhbmQgcHJvdmlkZXMgdGhlIGxhdGVzdCBkaXJlY3Rpb24gdG8gdGhlIHN0eWxlci4gUmUtYXBwbGllcyBjb2x1bW5cbiAgICogc3RpY2tpbmVzcyB3aGVuIGRpcmVjdGlvbmFsaXR5IGNoYW5nZXMuXG4gICAqL1xuICBwcml2YXRlIF9zZXR1cFN0aWNreVN0eWxlcigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb246IERpcmVjdGlvbiA9IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6ICdsdHInO1xuICAgIHRoaXMuX3N0aWNreVN0eWxlciA9IG5ldyBTdGlja3lTdHlsZXIoXG4gICAgICAgIHRoaXMuX2lzTmF0aXZlSHRtbFRhYmxlLCB0aGlzLnN0aWNreUNzc0NsYXNzLCBkaXJlY3Rpb24sIHRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcik7XG4gICAgKHRoaXMuX2RpciA/IHRoaXMuX2Rpci5jaGFuZ2UgOiBvYnNlcnZhYmxlT2Y8RGlyZWN0aW9uPigpKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5fc3RpY2t5U3R5bGVyLmRpcmVjdGlvbiA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX211bHRpVGVtcGxhdGVEYXRhUm93czogQm9vbGVhbklucHV0O1xufVxuXG4vKiogVXRpbGl0eSBmdW5jdGlvbiB0aGF0IGdldHMgYSBtZXJnZWQgbGlzdCBvZiB0aGUgZW50cmllcyBpbiBhIFF1ZXJ5TGlzdCBhbmQgdmFsdWVzIG9mIGEgU2V0LiAqL1xuZnVuY3Rpb24gbWVyZ2VRdWVyeUxpc3RBbmRTZXQ8VD4ocXVlcnlMaXN0OiBRdWVyeUxpc3Q8VD4sIHNldDogU2V0PFQ+KTogVFtdIHtcbiAgcmV0dXJuIHF1ZXJ5TGlzdC50b0FycmF5KCkuY29uY2F0KEFycmF5LmZyb20oc2V0KSk7XG59XG4iXX0=