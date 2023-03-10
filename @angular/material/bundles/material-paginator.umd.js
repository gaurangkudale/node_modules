(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/material/button'),require('@angular/material/tooltip'),require('@angular/material/form-field'),require('@angular/material/select'),require('@angular/material/core'),exports, require('@angular/common'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/select'), require('@angular/material/tooltip'), require('tslib'), require('@angular/cdk/coercion'), require('rxjs'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/material/paginator', ['@angular/core','@angular/common','@angular/material/button','@angular/material/tooltip','@angular/material/form-field','@angular/material/select','@angular/material/core','exports', '@angular/common', '@angular/core', '@angular/material/button', '@angular/material/select', '@angular/material/tooltip', 'tslib', '@angular/cdk/coercion', 'rxjs', '@angular/material/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ng.material.button,global.ng.material.tooltip,global.ng.material.formField,global.ng.material.select,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.paginator = {}), global.ng.common, global.ng.core, global.ng.material.button, global.ng.material.select, global.ng.material.tooltip, global.tslib, global.ng.cdk.coercion, global.rxjs, global.ng.material.core));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,exports, common, i0, button, select, tooltip, tslib, coercion, rxjs, core) { 
function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pageSizeOption_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", pageSizeOption_r6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", pageSizeOption_r6, " ");
} }
function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 16);
    ɵngcc0.ɵɵelementStart(1, "mat-select", 17);
    ɵngcc0.ɵɵlistener("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7._changePageSize($event.value); });
    ɵngcc0.ɵɵtemplate(2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("color", ctx_r3.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3._displayedPageSizeOptions);
} }
function MatPaginator_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.pageSize);
} }
function MatPaginator_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);
    ɵngcc0.ɵɵtemplate(4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0._intl.itemsPerPageLabel, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
} }
function MatPaginator_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 21);
    ɵngcc0.ɵɵlistener("click", function MatPaginator_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.firstPage(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 7);
    ɵngcc0.ɵɵelement(2, "path", 22);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1._intl.firstPageLabel);
} }
function MatPaginator_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "button", 23);
    ɵngcc0.ɵɵlistener("click", function MatPaginator_button_13_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.lastPage(); });
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 7);
    ɵngcc0.ɵɵelement(2, "path", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    ɵngcc0.ɵɵattribute("aria-label", ctx_r2._intl.lastPageLabel);
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
     * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
     * include it in a custom provider
     */
    var MatPaginatorIntl = /** @class */ (function () {
        function MatPaginatorIntl() {
            /**
             * Stream to emit from when labels are changed. Use this to notify components when the labels have
             * changed after initialization.
             */
            this.changes = new rxjs.Subject();
            /** A label for the page size selector. */
            this.itemsPerPageLabel = 'Items per page:';
            /** A label for the button that increments the current page. */
            this.nextPageLabel = 'Next page';
            /** A label for the button that decrements the current page. */
            this.previousPageLabel = 'Previous page';
            /** A label for the button that moves to the first page. */
            this.firstPageLabel = 'First page';
            /** A label for the button that moves to the last page. */
            this.lastPageLabel = 'Last page';
            /** A label for the range of items within the current page and the length of the whole list. */
            this.getRangeLabel = function (page, pageSize, length) {
                if (length == 0 || pageSize == 0) {
                    return "0 of " + length;
                }
                length = Math.max(length, 0);
                var startIndex = page * pageSize;
                // If the start index exceeds the list length, do not try and fix the end index to the end.
                var endIndex = startIndex < length ?
                    Math.min(startIndex + pageSize, length) :
                    startIndex + pageSize;
                return startIndex + 1 + " \u2013 " + endIndex + " of " + length;
            };
        }
        MatPaginatorIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatPaginatorIntl_Factory() { return new MatPaginatorIntl(); }, token: MatPaginatorIntl, providedIn: "root" });
MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) { return new (t || MatPaginatorIntl)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginatorIntl, [{
        type: i0.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
        return MatPaginatorIntl;
    }());
    /** @docs-private */
    function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new MatPaginatorIntl();
    }
    /** @docs-private */
    var MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: MatPaginatorIntl,
        deps: [[new i0.Optional(), new i0.SkipSelf(), MatPaginatorIntl]],
        useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** The default page size if there is no page size and there are no provided page size options. */
    var DEFAULT_PAGE_SIZE = 50;
    /**
     * Change event object that is emitted when the user selects a
     * different page size or navigates to another page.
     */
    var PageEvent = /** @class */ (function () {
        function PageEvent() {
        }
        return PageEvent;
    }());
    // Boilerplate for applying mixins to MatPaginator.
    /** @docs-private */
    var MatPaginatorBase = /** @class */ (function () {
        function MatPaginatorBase() {
        }
        return MatPaginatorBase;
    }());
    var _MatPaginatorBase = core.mixinDisabled(core.mixinInitialized(MatPaginatorBase));
    /**
     * Component to provide navigation between paged information. Displays the size of the current
     * page, user-selectable options to change that size, what items are being shown, and
     * navigational button to go to the previous or next page.
     */
    var MatPaginator = /** @class */ (function (_super) {
        tslib.__extends(MatPaginator, _super);
        function MatPaginator(_intl, _changeDetectorRef) {
            var _this = _super.call(this) || this;
            _this._intl = _intl;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._pageIndex = 0;
            _this._length = 0;
            _this._pageSizeOptions = [];
            _this._hidePageSize = false;
            _this._showFirstLastButtons = false;
            /** Event emitted when the paginator changes the page size or page index. */
            _this.page = new i0.EventEmitter();
            _this._intlChanges = _intl.changes.subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
            return _this;
        }
        Object.defineProperty(MatPaginator.prototype, "pageIndex", {
            /** The zero-based page index of the displayed list of items. Defaulted to 0. */
            get: function () { return this._pageIndex; },
            set: function (value) {
                this._pageIndex = Math.max(coercion.coerceNumberProperty(value), 0);
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatPaginator.prototype, "length", {
            /** The length of the total number of items that are being paginated. Defaulted to 0. */
            get: function () { return this._length; },
            set: function (value) {
                this._length = coercion.coerceNumberProperty(value);
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatPaginator.prototype, "pageSize", {
            /** Number of items to display on a page. By default set to 50. */
            get: function () { return this._pageSize; },
            set: function (value) {
                this._pageSize = Math.max(coercion.coerceNumberProperty(value), 0);
                this._updateDisplayedPageSizeOptions();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatPaginator.prototype, "pageSizeOptions", {
            /** The set of provided page size options to display to the user. */
            get: function () { return this._pageSizeOptions; },
            set: function (value) {
                this._pageSizeOptions = (value || []).map(function (p) { return coercion.coerceNumberProperty(p); });
                this._updateDisplayedPageSizeOptions();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatPaginator.prototype, "hidePageSize", {
            /** Whether to hide the page size selection UI from the user. */
            get: function () { return this._hidePageSize; },
            set: function (value) {
                this._hidePageSize = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatPaginator.prototype, "showFirstLastButtons", {
            /** Whether to show the first/last buttons UI to the user. */
            get: function () { return this._showFirstLastButtons; },
            set: function (value) {
                this._showFirstLastButtons = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        MatPaginator.prototype.ngOnInit = function () {
            this._initialized = true;
            this._updateDisplayedPageSizeOptions();
            this._markInitialized();
        };
        MatPaginator.prototype.ngOnDestroy = function () {
            this._intlChanges.unsubscribe();
        };
        /** Advances to the next page if it exists. */
        MatPaginator.prototype.nextPage = function () {
            if (!this.hasNextPage()) {
                return;
            }
            var previousPageIndex = this.pageIndex;
            this.pageIndex++;
            this._emitPageEvent(previousPageIndex);
        };
        /** Move back to the previous page if it exists. */
        MatPaginator.prototype.previousPage = function () {
            if (!this.hasPreviousPage()) {
                return;
            }
            var previousPageIndex = this.pageIndex;
            this.pageIndex--;
            this._emitPageEvent(previousPageIndex);
        };
        /** Move to the first page if not already there. */
        MatPaginator.prototype.firstPage = function () {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
                return;
            }
            var previousPageIndex = this.pageIndex;
            this.pageIndex = 0;
            this._emitPageEvent(previousPageIndex);
        };
        /** Move to the last page if not already there. */
        MatPaginator.prototype.lastPage = function () {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
                return;
            }
            var previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;
            this._emitPageEvent(previousPageIndex);
        };
        /** Whether there is a previous page. */
        MatPaginator.prototype.hasPreviousPage = function () {
            return this.pageIndex >= 1 && this.pageSize != 0;
        };
        /** Whether there is a next page. */
        MatPaginator.prototype.hasNextPage = function () {
            var maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
        };
        /** Calculate the number of pages */
        MatPaginator.prototype.getNumberOfPages = function () {
            if (!this.pageSize) {
                return 0;
            }
            return Math.ceil(this.length / this.pageSize);
        };
        /**
         * Changes the page size so that the first item displayed on the page will still be
         * displayed using the new page size.
         *
         * For example, if the page size is 10 and on the second page (items indexed 10-19) then
         * switching so that the page size is 5 will set the third page as the current page so
         * that the 10th item will still be displayed.
         */
        MatPaginator.prototype._changePageSize = function (pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.
            var startIndex = this.pageIndex * this.pageSize;
            var previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;
            this._emitPageEvent(previousPageIndex);
        };
        /** Checks whether the buttons for going forwards should be disabled. */
        MatPaginator.prototype._nextButtonsDisabled = function () {
            return this.disabled || !this.hasNextPage();
        };
        /** Checks whether the buttons for going backwards should be disabled. */
        MatPaginator.prototype._previousButtonsDisabled = function () {
            return this.disabled || !this.hasPreviousPage();
        };
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         */
        MatPaginator.prototype._updateDisplayedPageSizeOptions = function () {
            if (!this._initialized) {
                return;
            }
            // If no page size is provided, use the first page size option or the default page size.
            if (!this.pageSize) {
                this._pageSize = this.pageSizeOptions.length != 0 ?
                    this.pageSizeOptions[0] :
                    DEFAULT_PAGE_SIZE;
            }
            this._displayedPageSizeOptions = this.pageSizeOptions.slice();
            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
                this._displayedPageSizeOptions.push(this.pageSize);
            }
            // Sort the numbers using a number-specific sort function.
            this._displayedPageSizeOptions.sort(function (a, b) { return a - b; });
            this._changeDetectorRef.markForCheck();
        };
        /** Emits an event notifying that a change of the paginator's properties has been triggered. */
        MatPaginator.prototype._emitPageEvent = function (previousPageIndex) {
            this.page.emit({
                previousPageIndex: previousPageIndex,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                length: this.length
            });
        };
        /** @nocollapse */
        MatPaginator.ctorParameters = function () { return [
            { type: MatPaginatorIntl },
            { type: i0.ChangeDetectorRef }
        ]; };
        MatPaginator.propDecorators = {
            color: [{ type: i0.Input }],
            pageIndex: [{ type: i0.Input }],
            length: [{ type: i0.Input }],
            pageSize: [{ type: i0.Input }],
            pageSizeOptions: [{ type: i0.Input }],
            hidePageSize: [{ type: i0.Input }],
            showFirstLastButtons: [{ type: i0.Input }],
            page: [{ type: i0.Output }]
        };
MatPaginator.ɵfac = function MatPaginator_Factory(t) { return new (t || MatPaginator)(ɵngcc0.ɵɵdirectiveInject(MatPaginatorIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatPaginator.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatPaginator, selectors: [["mat-paginator"]], hostAttrs: [1, "mat-paginator"], inputs: { disabled: "disabled", pageIndex: "pageIndex", length: "length", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", hidePageSize: "hidePageSize", showFirstLastButtons: "showFirstLastButtons", color: "color" }, outputs: { page: "page" }, exportAs: ["matPaginator"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 14, vars: 14, consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]], template: function MatPaginator_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, MatPaginator_div_2_Template, 5, 3, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, MatPaginator_button_6_Template, 3, 5, "button", 5);
        ɵngcc0.ɵɵelementStart(7, "button", 6);
        ɵngcc0.ɵɵlistener("click", function MatPaginator_Template_button_click_7_listener() { return ctx.previousPage(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(8, "svg", 7);
        ɵngcc0.ɵɵelement(9, "path", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(10, "button", 9);
        ɵngcc0.ɵɵlistener("click", function MatPaginator_Template_button_click_10_listener() { return ctx.nextPage(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(11, "svg", 7);
        ɵngcc0.ɵɵelement(12, "path", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, MatPaginator_button_13_Template, 3, 5, "button", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hidePageSize);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFirstLastButtons);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx._intl.previousPageLabel);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
        ɵngcc0.ɵɵattribute("aria-label", ctx._intl.nextPageLabel);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showFirstLastButtons);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.MatButton, ɵngcc3.MatTooltip, ɵngcc4.MatFormField, ɵngcc5.MatSelect, ɵngcc1.NgForOf, ɵngcc6.MatOption], styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginator, [{
        type: i0.Component,
        args: [{
                selector: 'mat-paginator',
                exportAs: 'matPaginator',
                template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
                inputs: ['disabled'],
                host: {
                    'class': 'mat-paginator'
                },
                changeDetection: i0.ChangeDetectionStrategy.OnPush,
                encapsulation: i0.ViewEncapsulation.None,
                styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
            }]
    }], function () { return [{ type: MatPaginatorIntl }, { type: ɵngcc0.ChangeDetectorRef }]; }, { pageIndex: [{
            type: i0.Input
        }], length: [{
            type: i0.Input
        }], pageSize: [{
            type: i0.Input
        }], pageSizeOptions: [{
            type: i0.Input
        }], hidePageSize: [{
            type: i0.Input
        }], showFirstLastButtons: [{
            type: i0.Input
        }], color: [{
            type: i0.Input
        }], page: [{
            type: i0.Output
        }] }); })();
        return MatPaginator;
    }(_MatPaginatorBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatPaginatorModule = /** @class */ (function () {
        function MatPaginatorModule() {
        }
MatPaginatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatPaginatorModule });
MatPaginatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatPaginatorModule_Factory(t) { return new (t || MatPaginatorModule)(); }, providers: [MAT_PAGINATOR_INTL_PROVIDER], imports: [[
            common.CommonModule,
            button.MatButtonModule,
            select.MatSelectModule,
            tooltip.MatTooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatPaginatorModule, { declarations: [MatPaginator], imports: [ɵngcc1.CommonModule, ɵngcc2.MatButtonModule, ɵngcc5.MatSelectModule, ɵngcc3.MatTooltipModule], exports: [MatPaginator] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginatorModule, [{
        type: i0.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    button.MatButtonModule,
                    select.MatSelectModule,
                    tooltip.MatTooltipModule,
                ],
                exports: [MatPaginator],
                declarations: [MatPaginator],
                providers: [MAT_PAGINATOR_INTL_PROVIDER]
            }]
    }], function () { return []; }, null); })();
        return MatPaginatorModule;
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

    exports.MAT_PAGINATOR_INTL_PROVIDER = MAT_PAGINATOR_INTL_PROVIDER;
    exports.MAT_PAGINATOR_INTL_PROVIDER_FACTORY = MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
    exports.MatPaginator = MatPaginator;
    exports.MatPaginatorIntl = MatPaginatorIntl;
    exports.MatPaginatorModule = MatPaginatorModule;
    exports.PageEvent = PageEvent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-paginator.umd.js.map