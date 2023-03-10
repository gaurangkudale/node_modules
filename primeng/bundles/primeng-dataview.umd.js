(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/paginator'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('primeng/utils'), require('primeng/api'), require('primeng/paginator')) :
    typeof define === 'function' && define.amd ? define('primeng/dataview', ['@angular/core','@angular/common','primeng/paginator','primeng/api','exports', '@angular/core', '@angular/common', 'primeng/utils', 'primeng/api', 'primeng/paginator'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.paginator,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.dataview = {}), global.ng.core, global.ng.common, global.primeng.utils, global.primeng.api, global.primeng.paginator));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, core, common, utils, api, paginator) { 
function DataView_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵelementStart(1, "div", 11);
    ɵngcc0.ɵɵelement(2, "i");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap("p-dataview-loading-icon pi-spin " + ctx_r0.loadingIcon);
} }
function DataView_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DataView_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, DataView_div_2_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
} }
function DataView_p_paginator_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 14);
    ɵngcc0.ɵɵlistener("onPageChange", function DataView_p_paginator_3_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.paginate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r2.rows)("first", ctx_r2.first)("totalRecords", ctx_r2.totalRecords)("pageLinkSize", ctx_r2.pageLinks)("alwaysShow", ctx_r2.alwaysShowPaginator)("rowsPerPageOptions", ctx_r2.rowsPerPageOptions)("dropdownAppendTo", ctx_r2.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r2.paginatorDropdownScrollHeight)("templateLeft", ctx_r2.paginatorLeftTemplate)("templateRight", ctx_r2.paginatorRightTemplate)("currentPageReportTemplate", ctx_r2.currentPageReportTemplate)("showCurrentPageReport", ctx_r2.showCurrentPageReport)("showJumpToPageDropdown", ctx_r2.showJumpToPageDropdown)("showPageLinks", ctx_r2.showPageLinks);
} }
function DataView_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0, a1) { return { $implicit: a0, rowIndex: a1 }; };
function DataView_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DataView_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    var rowData_r10 = ctx.$implicit;
    var rowIndex_r11 = ctx.index;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, rowData_r10, rowIndex_r11));
} }
function DataView_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.emptyMessage);
} }
function DataView_p_paginator_9_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 18);
    ɵngcc0.ɵɵlistener("onPageChange", function DataView_p_paginator_9_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.paginate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r5.rows)("first", ctx_r5.first)("totalRecords", ctx_r5.totalRecords)("pageLinkSize", ctx_r5.pageLinks)("alwaysShow", ctx_r5.alwaysShowPaginator)("rowsPerPageOptions", ctx_r5.rowsPerPageOptions)("dropdownAppendTo", ctx_r5.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r5.paginatorDropdownScrollHeight)("templateLeft", ctx_r5.paginatorLeftTemplate)("templateRight", ctx_r5.paginatorRightTemplate)("currentPageReportTemplate", ctx_r5.currentPageReportTemplate)("showCurrentPageReport", ctx_r5.showCurrentPageReport)("showJumpToPageDropdown", ctx_r5.showJumpToPageDropdown)("showPageLinks", ctx_r5.showPageLinks);
} }
function DataView_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DataView_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, DataView_div_10_ng_container_2_Template, 1, 0, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
var _c1 = [[["p-header"]], [["p-footer"]]];
var _c2 = function (a1, a2) { return { "p-dataview p-component": true, "p-dataview-list": a1, "p-dataview-grid": a2 }; };
var _c3 = ["p-header", "p-footer"];
var _c4 = function (a0) { return { "p-highlight": a0 }; };
'use strict';

    var DataView = /** @class */ (function () {
        function DataView(el, cd) {
            this.el = el;
            this.cd = cd;
            this.layout = 'list';
            this.pageLinks = 5;
            this.paginatorPosition = 'bottom';
            this.alwaysShowPaginator = true;
            this.paginatorDropdownScrollHeight = '200px';
            this.currentPageReportTemplate = '{currentPage} of {totalPages}';
            this.showPageLinks = true;
            this.emptyMessage = 'No records found';
            this.onLazyLoad = new core.EventEmitter();
            this.trackBy = function (index, item) { return item; };
            this.loadingIcon = 'pi pi-spinner';
            this.first = 0;
            this.onPage = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onChangeLayout = new core.EventEmitter();
        }
        DataView.prototype.ngOnInit = function () {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            this.initialized = true;
        };
        DataView.prototype.ngOnChanges = function (simpleChanges) {
            if (simpleChanges.value) {
                this._value = simpleChanges.value.currentValue;
                this.updateTotalRecords();
                if (!this.lazy && this.hasFilter()) {
                    this.filter(this.filterValue);
                }
            }
            if (simpleChanges.sortField || simpleChanges.sortOrder) {
                //avoid triggering lazy load prior to lazy initialization at onInit
                if (!this.lazy || this.initialized) {
                    this.sort();
                }
            }
        };
        DataView.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'listItem':
                        _this.listItemTemplate = item.template;
                        break;
                    case 'gridItem':
                        _this.gridItemTemplate = item.template;
                        break;
                    case 'paginatorleft':
                        _this.paginatorLeftTemplate = item.template;
                        break;
                    case 'paginatorright':
                        _this.paginatorRightTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                }
            });
            this.updateItemTemplate();
        };
        DataView.prototype.updateItemTemplate = function () {
            switch (this.layout) {
                case 'list':
                    this.itemTemplate = this.listItemTemplate;
                    break;
                case 'grid':
                    this.itemTemplate = this.gridItemTemplate;
                    break;
            }
        };
        DataView.prototype.changeLayout = function (layout) {
            this.layout = layout;
            this.onChangeLayout.emit({
                layout: this.layout
            });
            this.updateItemTemplate();
            this.cd.markForCheck();
        };
        DataView.prototype.updateTotalRecords = function () {
            this.totalRecords = this.lazy ? this.totalRecords : (this._value ? this._value.length : 0);
        };
        DataView.prototype.paginate = function (event) {
            this.first = event.first;
            this.rows = event.rows;
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            this.onPage.emit({
                first: this.first,
                rows: this.rows
            });
        };
        DataView.prototype.sort = function () {
            var _this = this;
            this.first = 0;
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                this.value.sort(function (data1, data2) {
                    var value1 = utils.ObjectUtils.resolveFieldData(data1, _this.sortField);
                    var value2 = utils.ObjectUtils.resolveFieldData(data2, _this.sortField);
                    var result = null;
                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2);
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    return (_this.sortOrder * result);
                });
                if (this.hasFilter()) {
                    this.filter(this.filterValue);
                }
            }
            this.onSort.emit({
                sortField: this.sortField,
                sortOrder: this.sortOrder
            });
        };
        DataView.prototype.isEmpty = function () {
            var data = this.filteredValue || this.value;
            return data == null || data.length == 0;
        };
        DataView.prototype.createLazyLoadMetadata = function () {
            return {
                first: this.first,
                rows: this.rows,
                sortField: this.sortField,
                sortOrder: this.sortOrder
            };
        };
        DataView.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        DataView.prototype.filter = function (filter, filterMatchMode) {
            if (filterMatchMode === void 0) { filterMatchMode = "contains"; }
            this.filterValue = filter;
            if (this.value && this.value.length) {
                var searchFields = this.filterBy.split(',');
                this.filteredValue = utils.FilterUtils.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.first = 0;
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
                this.cd.markForCheck();
            }
        };
        DataView.prototype.hasFilter = function () {
            return this.filterValue && this.filterValue.trim().length > 0;
        };
DataView.ɵfac = function DataView_Factory(t) { return new (t || DataView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DataView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataView, selectors: [["p-dataView"]], contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { layout: "layout", pageLinks: "pageLinks", paginatorPosition: "paginatorPosition", alwaysShowPaginator: "alwaysShowPaginator", paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showPageLinks: "showPageLinks", emptyMessage: "emptyMessage", trackBy: "trackBy", loadingIcon: "loadingIcon", first: "first", totalRecords: "totalRecords", rows: "rows", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", lazy: "lazy", style: "style", styleClass: "styleClass", filterBy: "filterBy", filterLocale: "filterLocale", loading: "loading", sortField: "sortField", sortOrder: "sortOrder", value: "value" }, outputs: { onLazyLoad: "onLazyLoad", onPage: "onPage", onSort: "onSort", onChangeLayout: "onChangeLayout" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 11, vars: 19, consts: [[3, "ngClass", "ngStyle"], ["class", "p-dataview-loading", 4, "ngIf"], ["class", "p-dataview-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], [1, "p-dataview-content"], [1, "p-grid", "p-nogutter"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["class", "p-col", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-dataview-footer", 4, "ngIf"], [1, "p-dataview-loading"], [1, "p-dataview-loading-overlay", "p-component-overlay"], [1, "p-dataview-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-col"], [1, "p-dataview-emptymessage"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "dropdownAppendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-dataview-footer"]], template: function DataView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DataView_div_1_Template, 3, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, DataView_div_2_Template, 3, 1, "div", 2);
        ɵngcc0.ɵɵtemplate(3, DataView_p_paginator_3_Template, 1, 14, "p-paginator", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵtemplate(6, DataView_ng_template_6_Template, 1, 5, "ng-template", 6);
        ɵngcc0.ɵɵpipe(7, "slice");
        ɵngcc0.ɵɵtemplate(8, DataView_div_8_Template, 3, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, DataView_p_paginator_9_Template, 1, 14, "p-paginator", 8);
        ɵngcc0.ɵɵtemplate(10, DataView_div_10_Template, 3, 1, "div", 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c2, ctx.layout === "list", ctx.layout === "grid"))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.paginator ? ɵngcc0.ɵɵpipeBind3(7, 12, ctx.filteredValue || ctx.value, ctx.lazy ? 0 : ctx.first, (ctx.lazy ? 0 : ctx.first) + ctx.rows) : ctx.filteredValue || ctx.value)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isEmpty());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footer || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Paginator], pipes: [ɵngcc1.SlicePipe], styles: [".p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataView, [{
        type: core.Component,
        args: [{
                selector: 'p-dataView',
                template: "\n        <div [ngClass]=\"{'p-dataview p-component': true, 'p-dataview-list': (layout === 'list'), 'p-dataview-grid': (layout === 'grid')}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-dataview-loading\" *ngIf=\"loading\">\n                <div class=\"p-dataview-loading-overlay p-component-overlay\">\n                    <i [class]=\"'p-dataview-loading-icon pi-spin ' + loadingIcon\"></i>\n                </div>\n            </div>\n            <div class=\"p-dataview-header\" *ngIf=\"header || headerTemplate\">\n                <ng-content select=\"p-header\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"p-paginator-top\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n            <div class=\"p-dataview-content\">\n                <div class=\"p-grid p-nogutter\">\n                    <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"paginator ? ((filteredValue||value) | slice:(lazy ? 0 : first):((lazy ? 0 : first) + rows)) : (filteredValue||value)\" [ngForTrackBy]=\"trackBy\">\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: rowData, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n                    <div *ngIf=\"isEmpty()\" class=\"p-col\">\n                        <div class=\"p-dataview-emptymessage\">{{emptyMessage}}</div>\n                    </div>\n                </div>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"paginate($event)\" styleClass=\"p-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [dropdownAppendTo]=\"paginatorDropdownAppendTo\" [dropdownScrollHeight]=\"paginatorDropdownScrollHeight\" [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n            <div class=\"p-dataview-footer\" *ngIf=\"footer || footerTemplate\">\n                <ng-content select=\"p-footer\"></ng-content>\n                <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n            </div>\n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-dataview{position:relative}.p-dataview .p-dataview-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { layout: [{
            type: core.Input
        }], pageLinks: [{
            type: core.Input
        }], paginatorPosition: [{
            type: core.Input
        }], alwaysShowPaginator: [{
            type: core.Input
        }], paginatorDropdownScrollHeight: [{
            type: core.Input
        }], currentPageReportTemplate: [{
            type: core.Input
        }], showPageLinks: [{
            type: core.Input
        }], emptyMessage: [{
            type: core.Input
        }], onLazyLoad: [{
            type: core.Output
        }], trackBy: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], first: [{
            type: core.Input
        }], onPage: [{
            type: core.Output
        }], onSort: [{
            type: core.Output
        }], onChangeLayout: [{
            type: core.Output
        }], totalRecords: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], paginator: [{
            type: core.Input
        }], rowsPerPageOptions: [{
            type: core.Input
        }], paginatorDropdownAppendTo: [{
            type: core.Input
        }], showCurrentPageReport: [{
            type: core.Input
        }], showJumpToPageDropdown: [{
            type: core.Input
        }], lazy: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], filterBy: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }], sortField: [{
            type: core.Input
        }], sortOrder: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], header: [{
            type: core.ContentChild,
            args: [api.Header]
        }], footer: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return DataView;
    }());
    DataView.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    DataView.propDecorators = {
        layout: [{ type: core.Input }],
        paginator: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        totalRecords: [{ type: core.Input }],
        pageLinks: [{ type: core.Input }],
        rowsPerPageOptions: [{ type: core.Input }],
        paginatorPosition: [{ type: core.Input }],
        alwaysShowPaginator: [{ type: core.Input }],
        paginatorDropdownAppendTo: [{ type: core.Input }],
        paginatorDropdownScrollHeight: [{ type: core.Input }],
        currentPageReportTemplate: [{ type: core.Input }],
        showCurrentPageReport: [{ type: core.Input }],
        showJumpToPageDropdown: [{ type: core.Input }],
        showPageLinks: [{ type: core.Input }],
        lazy: [{ type: core.Input }],
        emptyMessage: [{ type: core.Input }],
        onLazyLoad: [{ type: core.Output }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        trackBy: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        first: [{ type: core.Input }],
        sortField: [{ type: core.Input }],
        sortOrder: [{ type: core.Input }],
        value: [{ type: core.Input }],
        onPage: [{ type: core.Output }],
        onSort: [{ type: core.Output }],
        onChangeLayout: [{ type: core.Output }],
        header: [{ type: core.ContentChild, args: [api.Header,] }],
        footer: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var DataViewLayoutOptions = /** @class */ (function () {
        function DataViewLayoutOptions(dv) {
            this.dv = dv;
        }
        DataViewLayoutOptions.prototype.changeLayout = function (event, layout) {
            this.dv.changeLayout(layout);
            event.preventDefault();
        };
DataViewLayoutOptions.ɵfac = function DataViewLayoutOptions_Factory(t) { return new (t || DataViewLayoutOptions)(ɵngcc0.ɵɵdirectiveInject(DataView)); };
DataViewLayoutOptions.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DataViewLayoutOptions, selectors: [["p-dataViewLayoutOptions"]], inputs: { style: "style", styleClass: "styleClass" }, decls: 5, vars: 10, consts: [[3, "ngClass", "ngStyle"], ["type", "button", 1, "p-button", "p-button-icon-only", 3, "ngClass", "click", "keydown.enter"], [1, "pi", "pi-bars"], [1, "pi", "pi-th-large"]], template: function DataViewLayoutOptions_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function DataViewLayoutOptions_Template_button_click_1_listener($event) { return ctx.changeLayout($event, "list"); })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_1_listener($event) { return ctx.changeLayout($event, "list"); });
        ɵngcc0.ɵɵelement(2, "i", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 1);
        ɵngcc0.ɵɵlistener("click", function DataViewLayoutOptions_Template_button_click_3_listener($event) { return ctx.changeLayout($event, "grid"); })("keydown.enter", function DataViewLayoutOptions_Template_button_keydown_enter_3_listener($event) { return ctx.changeLayout($event, "grid"); });
        ɵngcc0.ɵɵelement(4, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-dataview-layout-options p-selectbutton p-buttonset")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c4, ctx.dv.layout === "list"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c4, ctx.dv.layout === "grid"));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataViewLayoutOptions, [{
        type: core.Component,
        args: [{
                selector: 'p-dataViewLayoutOptions',
                template: "\n        <div [ngClass]=\"'p-dataview-layout-options p-selectbutton p-buttonset'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button type=\"button\" class=\"p-button p-button-icon-only\" [ngClass]=\"{'p-highlight': dv.layout === 'list'}\" (click)=\"changeLayout($event, 'list')\" (keydown.enter)=\"changeLayout($event, 'list')\">\n                <i class=\"pi pi-bars\"></i>\n            </button><button type=\"button\" class=\"p-button p-button-icon-only\" [ngClass]=\"{'p-highlight': dv.layout === 'grid'}\" (click)=\"changeLayout($event, 'grid')\" (keydown.enter)=\"changeLayout($event, 'grid')\">\n                <i class=\"pi pi-th-large\"></i>\n            </button>\n        </div>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: DataView }]; }, { style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }] }); })();
        return DataViewLayoutOptions;
    }());
    DataViewLayoutOptions.ctorParameters = function () { return [
        { type: DataView }
    ]; };
    DataViewLayoutOptions.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }]
    };
    var DataViewModule = /** @class */ (function () {
        function DataViewModule() {
        }
DataViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DataViewModule });
DataViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DataViewModule_Factory(t) { return new (t || DataViewModule)(); }, imports: [[common.CommonModule, api.SharedModule, paginator.PaginatorModule], ɵngcc3.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataViewModule, { declarations: [DataView, DataViewLayoutOptions], imports: [ɵngcc1.CommonModule, ɵngcc3.SharedModule, ɵngcc2.PaginatorModule], exports: [DataView, ɵngcc3.SharedModule, DataViewLayoutOptions] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataViewModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, api.SharedModule, paginator.PaginatorModule],
                exports: [DataView, api.SharedModule, DataViewLayoutOptions],
                declarations: [DataView, DataViewLayoutOptions]
            }]
    }], function () { return []; }, null); })();
        return DataViewModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DataView = DataView;
    exports.DataViewLayoutOptions = DataViewLayoutOptions;
    exports.DataViewModule = DataViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-dataview.umd.js.map