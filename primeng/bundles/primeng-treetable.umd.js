(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/paginator'),require('@angular/cdk/scrolling'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('primeng/dom'), require('primeng/paginator'), require('primeng/api'), require('primeng/utils'), require('primeng/ripple'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('primeng/treetable', ['@angular/core','@angular/common','primeng/paginator','@angular/cdk/scrolling','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/common', 'rxjs', 'primeng/dom', 'primeng/paginator', 'primeng/api', 'primeng/utils', 'primeng/ripple', '@angular/cdk/scrolling'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.paginator,global.ng.cdk.scrolling,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.treetable = {}), global.ng.core, global.ng.common, global.rxjs, global.primeng.dom, global.primeng.paginator, global.primeng.api, global.primeng.utils, global.primeng.ripple, global.ng.cdk.scrolling));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, core, common, rxjs, dom, paginator, api, utils, ripple, scrolling) { 
var _c0 = ["container"];
var _c1 = ["resizeHelper"];
var _c2 = ["reorderIndicatorUp"];
var _c3 = ["reorderIndicatorDown"];
var _c4 = ["table"];
var _c5 = ["scrollableView"];
var _c6 = ["scrollableFrozenView"];
function TreeTable_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementStart(1, "div", 13);
    ɵngcc0.ɵɵelement(2, "i");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap("p-treetable-loading-icon pi-spin " + ctx_r1.loadingIcon);
} }
function TreeTable_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.captionTemplate);
} }
function TreeTable_p_paginator_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 16);
    ɵngcc0.ɵɵlistener("onPageChange", function TreeTable_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks);
} }
function TreeTable_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c7 = function (a0) { return { $implicit: a0 }; };
function TreeTable_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "table", 18, 19);
    ɵngcc0.ɵɵtemplate(3, TreeTable_div_5_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementStart(4, "thead", 21);
    ɵngcc0.ɵɵtemplate(5, TreeTable_div_5_ng_container_5_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "tbody", 22);
    ɵngcc0.ɵɵelementStart(7, "tfoot", 23);
    ɵngcc0.ɵɵtemplate(8, TreeTable_div_5_ng_container_8_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(10, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(12, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.bodyTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r4.columns));
} }
var _c8 = function (a0) { return { width: a0 }; };
function TreeTable_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 28, 29);
} if (rf & 2) {
    var ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ttScrollableView", ctx_r18.frozenColumns)("frozen", true)("ngStyle", ɵngcc0.ɵɵpureFunction1(4, _c8, ctx_r18.frozenWidth))("scrollHeight", ctx_r18.scrollHeight);
} }
var _c9 = function (a0, a1) { return { left: a0, width: a1 }; };
function TreeTable_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_6_div_1_Template, 2, 6, "div", 25);
    ɵngcc0.ɵɵelement(2, "div", 26, 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ttScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
} }
function TreeTable_p_paginator_7_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-paginator", 30);
    ɵngcc0.ɵɵlistener("onPageChange", function TreeTable_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onPageChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks);
} }
function TreeTable_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTable_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 31);
    ɵngcc0.ɵɵtemplate(1, TreeTable_div_8_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.summaryTemplate);
} }
function TreeTable_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 32, 33);
} }
function TreeTable_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34, 35);
} }
function TreeTable_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 36, 37);
} }
var _c10 = function (a1, a2, a3, a4, a5) { return { "p-treetable p-component": true, "p-treetable-hoverable-rows": a1, "p-treetable-auto-layout": a2, "p-treetable-resizable": a3, "p-treetable-resizable-fit": a4, "p-treetable-flex-scrollable": a5 }; };
var _c11 = ["pTreeTableBody", ""];
function TTBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c12 = function (a0, a1, a2, a3) { return { $implicit: a0, node: a1, rowData: a2, columns: a3 }; };
function TTBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var serializedNode_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, serializedNode_r4, serializedNode_r4.node, serializedNode_r4.node.data, ctx_r6.columns));
} }
function TTBody_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 7, "ng-container", 0);
} if (rf & 2) {
    var serializedNode_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", serializedNode_r4.visible);
} }
function TTBody_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_0_ng_template_1_Template, 1, 1, "ng-template", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.tt.serializedValue)("ngForTrackBy", ctx_r0.tt.rowTrackBy);
} }
function TTBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var serializedNode_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r12.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction4(2, _c12, serializedNode_r10, serializedNode_r10.node, serializedNode_r10.node.data, ctx_r12.columns));
} }
function TTBody_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 7, "ng-container", 0);
} if (rf & 2) {
    var serializedNode_r10 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", serializedNode_r10.visible);
} }
function TTBody_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx_r1.tt.serializedValue)("cdkVirtualForTrackBy", ctx_r1.tt.rowTrackBy)("cdkVirtualForTemplateCacheSize", 0);
} }
function TTBody_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTBody_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.tt.emptyMessageTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c7, ctx_r2.columns));
} }
var _c13 = ["scrollHeader"];
var _c14 = ["scrollHeaderBox"];
var _c15 = ["scrollBody"];
var _c16 = ["scrollTable"];
var _c17 = ["loadingTable"];
var _c18 = ["scrollFooter"];
var _c19 = ["scrollFooterBox"];
var _c20 = ["scrollableAligner"];
var _c21 = ["ttScrollableView", ""];
function TTScrollableView_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_container_8_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16, 17);
} }
var _c22 = function (a0, a1) { return { "max-height": a0, "overflow-y": a1 }; };
function TTScrollableView_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 10, 11);
    ɵngcc0.ɵɵelementStart(3, "table", 12, 13);
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_container_8_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(6, "tbody", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, TTScrollableView_ng_container_8_div_7_Template, 2, 0, "div", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(10, _c22, ctx_r4.tt.scrollHeight !== "flex" ? ctx_r4.scrollHeight : undefined, !ctx_r4.frozen && ctx_r4.tt.scrollHeight ? "scroll" : undefined));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMap(ctx_r4.tt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r4.tt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.frozen ? ctx_r4.tt.frozenColGroupTemplate || ctx_r4.tt.colGroupTemplate : ctx_r4.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(13, _c7, ctx_r4.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.frozen ? ctx_r4.tt.frozenBodyTemplate || ctx_r4.tt.bodyTemplate : ctx_r4.tt.bodyTemplate)("frozen", ctx_r4.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.frozen);
} }
function TTScrollableView_ng_template_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_ng_template_9_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16, 17);
} }
function TTScrollableView_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 18);
    ɵngcc0.ɵɵelementStart(1, "table", 12, 13);
    ɵngcc0.ɵɵtemplate(3, TTScrollableView_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelement(4, "tbody", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_template_9_div_5_Template, 2, 0, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r6.tt.scrollHeight !== "flex" ? ctx_r6.scrollHeight : undefined);
    ɵngcc0.ɵɵproperty("itemSize", ctx_r6.tt.virtualRowHeight)("minBufferPx", ctx_r6.tt.minBufferPx)("maxBufferPx", ctx_r6.tt.maxBufferPx);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r6.tt.tableStyleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r6.tt.tableStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.frozen ? ctx_r6.tt.frozenColGroupTemplate || ctx_r6.tt.colGroupTemplate : ctx_r6.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c7, ctx_r6.columns));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTreeTableBody", ctx_r6.columns)("pTreeTableBodyTemplate", ctx_r6.frozen ? ctx_r6.tt.frozenBodyTemplate || ctx_r6.tt.bodyTemplate : ctx_r6.tt.bodyTemplate)("frozen", ctx_r6.frozen);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.frozen);
} }
function TTScrollableView_div_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_div_11_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TTScrollableView_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19, 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21, 22);
    ɵngcc0.ɵɵelementStart(4, "table", 23);
    ɵngcc0.ɵɵtemplate(5, TTScrollableView_div_11_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementStart(6, "tfoot", 24);
    ɵngcc0.ɵɵtemplate(7, TTScrollableView_div_11_ng_container_7_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r7.tt.tableStyleClass)("ngStyle", ctx_r7.tt.tableStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.tt.frozenColGroupTemplate || ctx_r7.tt.colGroupTemplate : ctx_r7.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(6, _c7, ctx_r7.columns));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.frozen ? ctx_r7.tt.frozenFooterTemplate || ctx_r7.tt.footerTemplate : ctx_r7.tt.footerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(8, _c7, ctx_r7.columns));
} }
var _c23 = function (a0, a1, a2) { return { "pi-sort-amount-up-alt": a0, "pi-sort-amount-down": a1, "pi-sort-alt": a2 }; };
var _c24 = ["box"];
var _c25 = function (a1, a2) { return { "p-checkbox-box": true, "p-highlight": a1, "p-disabled": a2 }; };
var _c26 = function (a0, a1) { return { "pi-check": a0, "pi-minus": a1 }; };
var _c27 = function (a0) { return { "pi pi-check": a0 }; };
function TreeTableCellEditor_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTableCellEditor_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
} }
function TreeTableCellEditor_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TreeTableCellEditor_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.outputTemplate);
} }
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TreeTableService = /** @class */ (function () {
        function TreeTableService() {
            this.sortSource = new rxjs.Subject();
            this.selectionSource = new rxjs.Subject();
            this.contextMenuSource = new rxjs.Subject();
            this.uiUpdateSource = new rxjs.Subject();
            this.totalRecordsSource = new rxjs.Subject();
            this.sortSource$ = this.sortSource.asObservable();
            this.selectionSource$ = this.selectionSource.asObservable();
            this.contextMenuSource$ = this.contextMenuSource.asObservable();
            this.uiUpdateSource$ = this.uiUpdateSource.asObservable();
            this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
        }
        TreeTableService.prototype.onSort = function (sortMeta) {
            this.sortSource.next(sortMeta);
        };
        TreeTableService.prototype.onSelectionChange = function () {
            this.selectionSource.next();
        };
        TreeTableService.prototype.onContextMenu = function (node) {
            this.contextMenuSource.next(node);
        };
        TreeTableService.prototype.onUIUpdate = function (value) {
            this.uiUpdateSource.next(value);
        };
        TreeTableService.prototype.onTotalRecordsChange = function (value) {
            this.totalRecordsSource.next(value);
        };
TreeTableService.ɵfac = function TreeTableService_Factory(t) { return new (t || TreeTableService)(); };
TreeTableService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeTableService, factory: function (t) { return TreeTableService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();
        return TreeTableService;
    }());
    var TreeTable = /** @class */ (function () {
        function TreeTable(el, zone, tableService) {
            this.el = el;
            this.zone = zone;
            this.tableService = tableService;
            this.lazy = false;
            this.lazyLoadOnInit = true;
            this.first = 0;
            this.pageLinks = 5;
            this.alwaysShowPaginator = true;
            this.paginatorPosition = 'bottom';
            this.currentPageReportTemplate = '{currentPage} of {totalPages}';
            this.showPageLinks = true;
            this.defaultSortOrder = 1;
            this.sortMode = 'single';
            this.resetPageOnSort = true;
            this.selectionChange = new core.EventEmitter();
            this.contextMenuSelectionChange = new core.EventEmitter();
            this.contextMenuSelectionMode = "separate";
            this.compareSelectionBy = 'deepEquals';
            this.loadingIcon = 'pi pi-spinner';
            this.showLoader = true;
            this.virtualScrollDelay = 150;
            this.virtualRowHeight = 28;
            this.columnResizeMode = 'fit';
            this.rowTrackBy = function (index, item) { return item; };
            this.filters = {};
            this.filterDelay = 300;
            this.filterMode = 'lenient';
            this.onFilter = new core.EventEmitter();
            this.onNodeExpand = new core.EventEmitter();
            this.onNodeCollapse = new core.EventEmitter();
            this.onPage = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onLazyLoad = new core.EventEmitter();
            this.sortFunction = new core.EventEmitter();
            this.onColResize = new core.EventEmitter();
            this.onColReorder = new core.EventEmitter();
            this.onNodeSelect = new core.EventEmitter();
            this.onNodeUnselect = new core.EventEmitter();
            this.onContextMenuSelect = new core.EventEmitter();
            this.onHeaderCheckboxToggle = new core.EventEmitter();
            this.onEditInit = new core.EventEmitter();
            this.onEditComplete = new core.EventEmitter();
            this.onEditCancel = new core.EventEmitter();
            this._value = [];
            this._totalRecords = 0;
            this._sortOrder = 1;
            this.selectionKeys = {};
        }
        TreeTable.prototype.ngOnInit = function () {
            if (this.lazy && this.lazyLoadOnInit) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            this.initialized = true;
        };
        TreeTable.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'caption':
                        _this.captionTemplate = item.template;
                        break;
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'body':
                        _this.bodyTemplate = item.template;
                        break;
                    case 'loadingbody':
                        _this.loadingBodyTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    case 'summary':
                        _this.summaryTemplate = item.template;
                        break;
                    case 'colgroup':
                        _this.colGroupTemplate = item.template;
                        break;
                    case 'emptymessage':
                        _this.emptyMessageTemplate = item.template;
                        break;
                    case 'paginatorleft':
                        _this.paginatorLeftTemplate = item.template;
                        break;
                    case 'paginatorright':
                        _this.paginatorRightTemplate = item.template;
                        break;
                    case 'frozenheader':
                        _this.frozenHeaderTemplate = item.template;
                        break;
                    case 'frozenbody':
                        _this.frozenBodyTemplate = item.template;
                        break;
                    case 'frozenfooter':
                        _this.frozenFooterTemplate = item.template;
                        break;
                    case 'frozencolgroup':
                        _this.frozenColGroupTemplate = item.template;
                        break;
                }
            });
        };
        TreeTable.prototype.ngOnChanges = function (simpleChange) {
            if (simpleChange.value) {
                this._value = simpleChange.value.currentValue;
                if (!this.lazy) {
                    this.totalRecords = (this._value ? this._value.length : 0);
                    if (this.sortMode == 'single' && this.sortField)
                        this.sortSingle();
                    else if (this.sortMode == 'multiple' && this.multiSortMeta)
                        this.sortMultiple();
                    else if (this.hasFilter()) //sort already filters
                        this._filter();
                }
                this.updateSerializedValue();
                this.tableService.onUIUpdate(this.value);
            }
            if (simpleChange.sortField) {
                this._sortField = simpleChange.sortField.currentValue;
                //avoid triggering lazy load prior to lazy initialization at onInit
                if (!this.lazy || this.initialized) {
                    if (this.sortMode === 'single') {
                        this.sortSingle();
                    }
                }
            }
            if (simpleChange.sortOrder) {
                this._sortOrder = simpleChange.sortOrder.currentValue;
                //avoid triggering lazy load prior to lazy initialization at onInit
                if (!this.lazy || this.initialized) {
                    if (this.sortMode === 'single') {
                        this.sortSingle();
                    }
                }
            }
            if (simpleChange.multiSortMeta) {
                this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
                if (this.sortMode === 'multiple') {
                    this.sortMultiple();
                }
            }
            if (simpleChange.selection) {
                this._selection = simpleChange.selection.currentValue;
                if (!this.preventSelectionSetterPropagation) {
                    this.updateSelectionKeys();
                    this.tableService.onSelectionChange();
                }
                this.preventSelectionSetterPropagation = false;
            }
        };
        Object.defineProperty(TreeTable.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                this._value = val;
            },
            enumerable: false,
            configurable: true
        });
        TreeTable.prototype.updateSerializedValue = function () {
            this.serializedValue = [];
            if (this.paginator)
                this.serializePageNodes();
            else
                this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
        };
        TreeTable.prototype.serializeNodes = function (parent, nodes, level, visible) {
            var e_1, _a;
            if (nodes && nodes.length) {
                try {
                    for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var node = nodes_1_1.value;
                        node.parent = parent;
                        var rowNode = {
                            node: node,
                            parent: parent,
                            level: level,
                            visible: visible && (parent ? parent.expanded : true)
                        };
                        this.serializedValue.push(rowNode);
                        if (rowNode.visible && node.expanded) {
                            this.serializeNodes(node, node.children, level + 1, rowNode.visible);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        TreeTable.prototype.serializePageNodes = function () {
            var data = this.filteredNodes || this.value;
            this.serializedValue = [];
            if (data && data.length) {
                var first = this.lazy ? 0 : this.first;
                for (var i = first; i < (first + this.rows); i++) {
                    var node = data[i];
                    if (node) {
                        this.serializedValue.push({
                            node: node,
                            parent: null,
                            level: 0,
                            visible: true
                        });
                        this.serializeNodes(node, node.children, 1, true);
                    }
                }
            }
        };
        Object.defineProperty(TreeTable.prototype, "totalRecords", {
            get: function () {
                return this._totalRecords;
            },
            set: function (val) {
                this._totalRecords = val;
                this.tableService.onTotalRecordsChange(this._totalRecords);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeTable.prototype, "sortField", {
            get: function () {
                return this._sortField;
            },
            set: function (val) {
                this._sortField = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeTable.prototype, "sortOrder", {
            get: function () {
                return this._sortOrder;
            },
            set: function (val) {
                this._sortOrder = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeTable.prototype, "multiSortMeta", {
            get: function () {
                return this._multiSortMeta;
            },
            set: function (val) {
                this._multiSortMeta = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TreeTable.prototype, "selection", {
            get: function () {
                return this._selection;
            },
            set: function (val) {
                this._selection = val;
            },
            enumerable: false,
            configurable: true
        });
        TreeTable.prototype.updateSelectionKeys = function () {
            var e_2, _a;
            if (this.dataKey && this._selection) {
                this.selectionKeys = {};
                if (Array.isArray(this._selection)) {
                    try {
                        for (var _b = __values(this._selection), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var node = _c.value;
                            this.selectionKeys[String(utils.ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    this.selectionKeys[String(utils.ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
                }
            }
        };
        TreeTable.prototype.onPageChange = function (event) {
            this.first = event.first;
            this.rows = event.rows;
            if (this.lazy)
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            else
                this.serializePageNodes();
            this.onPage.emit({
                first: this.first,
                rows: this.rows
            });
            this.tableService.onUIUpdate(this.value);
            if (this.scrollable) {
                this.resetScrollTop();
            }
        };
        TreeTable.prototype.sort = function (event) {
            var originalEvent = event.originalEvent;
            if (this.sortMode === 'single') {
                this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
                this._sortField = event.field;
                this.sortSingle();
                if (this.resetPageOnSort && this.scrollable) {
                    this.resetScrollTop();
                }
            }
            if (this.sortMode === 'multiple') {
                var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
                var sortMeta = this.getSortMeta(event.field);
                if (sortMeta) {
                    if (!metaKey) {
                        this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                        if (this.resetPageOnSort && this.scrollable) {
                            this.resetScrollTop();
                        }
                    }
                    else {
                        sortMeta.order = sortMeta.order * -1;
                    }
                }
                else {
                    if (!metaKey || !this.multiSortMeta) {
                        this._multiSortMeta = [];
                        if (this.resetPageOnSort && this.scrollable) {
                            this.resetScrollTop();
                        }
                    }
                    this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
                }
                this.sortMultiple();
            }
        };
        TreeTable.prototype.sortSingle = function () {
            if (this.sortField && this.sortOrder) {
                if (this.lazy) {
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                }
                else if (this.value) {
                    this.sortNodes(this.value);
                    if (this.hasFilter()) {
                        this._filter();
                    }
                }
                var sortMeta = {
                    field: this.sortField,
                    order: this.sortOrder
                };
                this.onSort.emit(sortMeta);
                this.tableService.onSort(sortMeta);
                this.updateSerializedValue();
            }
        };
        TreeTable.prototype.sortNodes = function (nodes) {
            var e_3, _a;
            var _this = this;
            if (!nodes || nodes.length === 0) {
                return;
            }
            if (this.customSort) {
                this.sortFunction.emit({
                    data: nodes,
                    mode: this.sortMode,
                    field: this.sortField,
                    order: this.sortOrder
                });
            }
            else {
                nodes.sort(function (node1, node2) {
                    var value1 = utils.ObjectUtils.resolveFieldData(node1.data, _this.sortField);
                    var value2 = utils.ObjectUtils.resolveFieldData(node2.data, _this.sortField);
                    var result = null;
                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2, undefined, { numeric: true });
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    return (_this.sortOrder * result);
                });
            }
            try {
                for (var nodes_2 = __values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                    var node = nodes_2_1.value;
                    this.sortNodes(node.children);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        TreeTable.prototype.sortMultiple = function () {
            if (this.multiSortMeta) {
                if (this.lazy) {
                    this.onLazyLoad.emit(this.createLazyLoadMetadata());
                }
                else if (this.value) {
                    this.sortMultipleNodes(this.value);
                    if (this.hasFilter()) {
                        this._filter();
                    }
                }
                this.onSort.emit({
                    multisortmeta: this.multiSortMeta
                });
                this.updateSerializedValue();
                this.tableService.onSort(this.multiSortMeta);
            }
        };
        TreeTable.prototype.sortMultipleNodes = function (nodes) {
            var e_4, _a;
            var _this = this;
            if (!nodes || nodes.length === 0) {
                return;
            }
            if (this.customSort) {
                this.sortFunction.emit({
                    data: this.value,
                    mode: this.sortMode,
                    multiSortMeta: this.multiSortMeta
                });
            }
            else {
                nodes.sort(function (node1, node2) {
                    return _this.multisortField(node1, node2, _this.multiSortMeta, 0);
                });
            }
            try {
                for (var nodes_3 = __values(nodes), nodes_3_1 = nodes_3.next(); !nodes_3_1.done; nodes_3_1 = nodes_3.next()) {
                    var node = nodes_3_1.value;
                    this.sortMultipleNodes(node.children);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (nodes_3_1 && !nodes_3_1.done && (_a = nodes_3.return)) _a.call(nodes_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        TreeTable.prototype.multisortField = function (node1, node2, multiSortMeta, index) {
            var value1 = utils.ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
            var value2 = utils.ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
            var result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            if (typeof value1 == 'string' || value1 instanceof String) {
                if (value1.localeCompare && (value1 != value2)) {
                    return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
                }
            }
            else {
                result = (value1 < value2) ? -1 : 1;
            }
            if (value1 == value2) {
                return (multiSortMeta.length - 1) > (index) ? (this.multisortField(node1, node2, multiSortMeta, index + 1)) : 0;
            }
            return (multiSortMeta[index].order * result);
        };
        TreeTable.prototype.getSortMeta = function (field) {
            if (this.multiSortMeta && this.multiSortMeta.length) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field === field) {
                        return this.multiSortMeta[i];
                    }
                }
            }
            return null;
        };
        TreeTable.prototype.isSorted = function (field) {
            if (this.sortMode === 'single') {
                return (this.sortField && this.sortField === field);
            }
            else if (this.sortMode === 'multiple') {
                var sorted = false;
                if (this.multiSortMeta) {
                    for (var i = 0; i < this.multiSortMeta.length; i++) {
                        if (this.multiSortMeta[i].field == field) {
                            sorted = true;
                            break;
                        }
                    }
                }
                return sorted;
            }
        };
        TreeTable.prototype.createLazyLoadMetadata = function () {
            return {
                first: this.first,
                rows: this.rows,
                sortField: this.sortField,
                sortOrder: this.sortOrder,
                filters: this.filters,
                globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
                multiSortMeta: this.multiSortMeta
            };
        };
        TreeTable.prototype.resetScrollTop = function () {
            if (this.virtualScroll)
                this.scrollToVirtualIndex(0);
            else
                this.scrollTo({ top: 0 });
        };
        TreeTable.prototype.scrollToVirtualIndex = function (index) {
            if (this.scrollableViewChild) {
                this.scrollableViewChild.scrollToVirtualIndex(index);
            }
            if (this.scrollableFrozenViewChild) {
                this.scrollableFrozenViewChild.scrollToVirtualIndex(index);
            }
        };
        TreeTable.prototype.scrollTo = function (options) {
            if (this.scrollableViewChild) {
                this.scrollableViewChild.scrollTo(options);
            }
            if (this.scrollableFrozenViewChild) {
                this.scrollableFrozenViewChild.scrollTo(options);
            }
        };
        TreeTable.prototype.isEmpty = function () {
            var data = this.filteredNodes || this.value;
            return data == null || data.length == 0;
        };
        TreeTable.prototype.getBlockableElement = function () {
            return this.el.nativeElement.children[0];
        };
        TreeTable.prototype.onColumnResizeBegin = function (event) {
            var containerLeft = dom.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
            this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
            event.preventDefault();
        };
        TreeTable.prototype.onColumnResize = function (event) {
            var containerLeft = dom.DomHandler.getOffset(this.containerViewChild.nativeElement).left;
            dom.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
            this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
            this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
            this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
            this.resizeHelperViewChild.nativeElement.style.display = 'block';
        };
        TreeTable.prototype.onColumnResizeEnd = function (event, column) {
            var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
            var columnWidth = column.offsetWidth;
            var newColumnWidth = columnWidth + delta;
            var minWidth = column.style.minWidth || 15;
            if (columnWidth + delta > parseInt(minWidth)) {
                if (this.columnResizeMode === 'fit') {
                    var nextColumn = column.nextElementSibling;
                    while (!nextColumn.offsetParent) {
                        nextColumn = nextColumn.nextElementSibling;
                    }
                    if (nextColumn) {
                        var nextColumnWidth = nextColumn.offsetWidth - delta;
                        var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                        if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                            if (this.scrollable) {
                                var scrollableView = this.findParentScrollableView(column);
                                var scrollableBodyTable = dom.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table');
                                var scrollableHeaderTable = dom.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                                var scrollableFooterTable = dom.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                                var resizeColumnIndex = dom.DomHandler.index(column);
                                this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                                this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                                this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            }
                            else {
                                column.style.width = newColumnWidth + 'px';
                                if (nextColumn) {
                                    nextColumn.style.width = nextColumnWidth + 'px';
                                }
                            }
                        }
                    }
                }
                else if (this.columnResizeMode === 'expand') {
                    if (this.scrollable) {
                        var scrollableView = this.findParentScrollableView(column);
                        var scrollableBody_1 = dom.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body');
                        var scrollableHeader = dom.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-header');
                        var scrollableFooter = dom.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-footer');
                        var scrollableBodyTable = dom.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table');
                        var scrollableHeaderTable = dom.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                        var scrollableFooterTable = dom.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                        scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                        scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                        if (scrollableFooterTable) {
                            scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + 'px';
                        }
                        var resizeColumnIndex = dom.DomHandler.index(column);
                        var scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
                        var scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
                        var isContainerInViewport = this.containerViewChild.nativeElement.offsetWidth >= scrollableBodyTableWidth;
                        var setWidth = function (container, table, width, isContainerInViewport) {
                            if (container && table) {
                                container.style.width = isContainerInViewport ? width + dom.DomHandler.calculateScrollbarWidth(scrollableBody_1) + 'px' : 'auto';
                                table.style.width = width + 'px';
                            }
                        };
                        setWidth(scrollableBody_1, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
                        setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
                        setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
                        this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                        this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                        this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                    }
                    else {
                        this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                        column.style.width = newColumnWidth + 'px';
                        var containerWidth = this.tableViewChild.nativeElement.style.width;
                        this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                    }
                }
                this.onColResize.emit({
                    element: column,
                    delta: delta
                });
            }
            this.resizeHelperViewChild.nativeElement.style.display = 'none';
            dom.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-unselectable-text');
        };
        TreeTable.prototype.findParentScrollableView = function (column) {
            if (column) {
                var parent = column.parentElement;
                while (parent && !dom.DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
                    parent = parent.parentElement;
                }
                return parent;
            }
            else {
                return null;
            }
        };
        TreeTable.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
            if (table) {
                var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
                if (colGroup) {
                    var col = colGroup.children[resizeColumnIndex];
                    var nextCol = col.nextElementSibling;
                    col.style.width = newColumnWidth + 'px';
                    if (nextCol && nextColumnWidth) {
                        nextCol.style.width = nextColumnWidth + 'px';
                    }
                }
                else {
                    throw "Scrollable tables require a colgroup to support resizable columns";
                }
            }
        };
        TreeTable.prototype.onColumnDragStart = function (event, columnElement) {
            this.reorderIconWidth = dom.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
            this.reorderIconHeight = dom.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
            this.draggedColumn = columnElement;
            event.dataTransfer.setData('text', 'b'); // For firefox
        };
        TreeTable.prototype.onColumnDragEnter = function (event, dropHeader) {
            if (this.reorderableColumns && this.draggedColumn && dropHeader) {
                event.preventDefault();
                var containerOffset = dom.DomHandler.getOffset(this.containerViewChild.nativeElement);
                var dropHeaderOffset = dom.DomHandler.getOffset(dropHeader);
                if (this.draggedColumn != dropHeader) {
                    var targetLeft = dropHeaderOffset.left - containerOffset.left;
                    var targetTop = containerOffset.top - dropHeaderOffset.top;
                    var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                    this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                    if (event.pageX > columnCenter) {
                        this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.dropPosition = 1;
                    }
                    else {
                        this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                        this.dropPosition = -1;
                    }
                    this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                    this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
                }
                else {
                    event.dataTransfer.dropEffect = 'none';
                }
            }
        };
        TreeTable.prototype.onColumnDragLeave = function (event) {
            if (this.reorderableColumns && this.draggedColumn) {
                event.preventDefault();
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            }
        };
        TreeTable.prototype.onColumnDrop = function (event, dropColumn) {
            event.preventDefault();
            if (this.draggedColumn) {
                var dragIndex = dom.DomHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
                var dropIndex = dom.DomHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
                var allowDrop = (dragIndex != dropIndex);
                if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                    allowDrop = false;
                }
                if (allowDrop && ((dropIndex < dragIndex && this.dropPosition === 1))) {
                    dropIndex = dropIndex + 1;
                }
                if (allowDrop && ((dropIndex > dragIndex && this.dropPosition === -1))) {
                    dropIndex = dropIndex - 1;
                }
                if (allowDrop) {
                    utils.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                    this.onColReorder.emit({
                        dragIndex: dragIndex,
                        dropIndex: dropIndex,
                        columns: this.columns
                    });
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
                this.draggedColumn.draggable = false;
                this.draggedColumn = null;
                this.dropPosition = null;
            }
        };
        TreeTable.prototype.handleRowClick = function (event) {
            var targetNode = event.originalEvent.target.nodeName;
            if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (dom.DomHandler.hasClass(event.originalEvent.target, 'p-clickable'))) {
                return;
            }
            if (this.selectionMode) {
                this.preventSelectionSetterPropagation = true;
                var rowNode = event.rowNode;
                var selected = this.isSelected(rowNode.node);
                var metaSelection = this.rowTouched ? false : this.metaKeySelection;
                var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
                if (metaSelection) {
                    var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            var selectionIndex_1 = this.findIndexInSelection(rowNode.node);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowNode.node;
                            this.selectionChange.emit(rowNode.node);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = __spread(this.selection, [rowNode.node]);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                    }
                }
                else {
                    if (this.selectionMode === 'single') {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(this.selection);
                            this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                        }
                        else {
                            this._selection = rowNode.node;
                            this.selectionChange.emit(this.selection);
                            this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else if (this.selectionMode === 'multiple') {
                        if (selected) {
                            var selectionIndex_2 = this.findIndexInSelection(rowNode.node);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                            this.selectionChange.emit(this.selection);
                            this.onNodeUnselect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? __spread(this.selection, [rowNode.node]) : [rowNode.node];
                            this.selectionChange.emit(this.selection);
                            this.onNodeSelect.emit({ originalEvent: event.originalEvent, node: rowNode.node, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                }
                this.tableService.onSelectionChange();
            }
            this.rowTouched = false;
        };
        TreeTable.prototype.handleRowTouchEnd = function (event) {
            this.rowTouched = true;
        };
        TreeTable.prototype.handleRowRightClick = function (event) {
            if (this.contextMenu) {
                var node = event.rowNode.node;
                if (this.contextMenuSelectionMode === 'separate') {
                    this.contextMenuSelection = node;
                    this.contextMenuSelectionChange.emit(node);
                    this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
                    this.contextMenu.show(event.originalEvent);
                    this.tableService.onContextMenu(node);
                }
                else if (this.contextMenuSelectionMode === 'joint') {
                    this.preventSelectionSetterPropagation = true;
                    var selected = this.isSelected(node);
                    var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
                    if (!selected) {
                        if (this.isSingleSelectionMode()) {
                            this.selection = node;
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = [node];
                            this.selectionChange.emit(this.selection);
                        }
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                    this.contextMenu.show(event.originalEvent);
                    this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, node: node });
                }
            }
        };
        TreeTable.prototype.toggleNodeWithCheckbox = function (event) {
            this.selection = this.selection || [];
            this.preventSelectionSetterPropagation = true;
            var node = event.rowNode.node;
            var selected = this.isSelected(node);
            if (selected) {
                this.propagateSelectionDown(node, false);
                if (event.rowNode.parent) {
                    this.propagateSelectionUp(node.parent, false);
                }
                this.selectionChange.emit(this.selection);
                this.onNodeUnselect.emit({ originalEvent: event, node: node });
            }
            else {
                this.propagateSelectionDown(node, true);
                if (event.rowNode.parent) {
                    this.propagateSelectionUp(node.parent, true);
                }
                this.selectionChange.emit(this.selection);
                this.onNodeSelect.emit({ originalEvent: event, node: node });
            }
            this.tableService.onSelectionChange();
        };
        TreeTable.prototype.toggleNodesWithCheckbox = function (event, check) {
            var e_5, _a;
            var data = this.filteredNodes || this.value;
            this._selection = check && data ? data.slice() : [];
            if (check) {
                if (data && data.length) {
                    try {
                        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                            var node = data_1_1.value;
                            this.propagateSelectionDown(node, true);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
            else {
                this._selection = [];
                this.selectionKeys = {};
            }
            this.preventSelectionSetterPropagation = true;
            this.selectionChange.emit(this._selection);
            this.tableService.onSelectionChange();
            this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
        };
        TreeTable.prototype.propagateSelectionUp = function (node, select) {
            var e_6, _a;
            if (node.children && node.children.length) {
                var selectedChildCount = 0;
                var childPartialSelected = false;
                var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (this.isSelected(child))
                            selectedChildCount++;
                        else if (child.partialSelected)
                            childPartialSelected = true;
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                if (select && selectedChildCount == node.children.length) {
                    this._selection = __spread(this.selection || [], [node]);
                    node.partialSelected = false;
                    if (dataKeyValue) {
                        this.selectionKeys[dataKeyValue] = 1;
                    }
                }
                else {
                    if (!select) {
                        var index_1 = this.findIndexInSelection(node);
                        if (index_1 >= 0) {
                            this._selection = this.selection.filter(function (val, i) { return i != index_1; });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                    }
                    if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length)
                        node.partialSelected = true;
                    else
                        node.partialSelected = false;
                }
            }
            var parent = node.parent;
            if (parent) {
                this.propagateSelectionUp(parent, select);
            }
        };
        TreeTable.prototype.propagateSelectionDown = function (node, select) {
            var e_7, _a;
            var index = this.findIndexInSelection(node);
            var dataKeyValue = this.dataKey ? String(utils.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
            if (select && index == -1) {
                this._selection = __spread(this.selection || [], [node]);
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
            }
            else if (!select && index > -1) {
                this._selection = this.selection.filter(function (val, i) { return i != index; });
                if (dataKeyValue) {
                    delete this.selectionKeys[dataKeyValue];
                }
            }
            node.partialSelected = false;
            if (node.children && node.children.length) {
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        this.propagateSelectionDown(child, select);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        };
        TreeTable.prototype.isSelected = function (node) {
            if (node && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys[utils.ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== undefined;
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(node) > -1;
                    else
                        return this.equals(node, this.selection);
                }
            }
            return false;
        };
        TreeTable.prototype.findIndexInSelection = function (node) {
            var index = -1;
            if (this.selection && this.selection.length) {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.equals(node, this.selection[i])) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        TreeTable.prototype.isSingleSelectionMode = function () {
            return this.selectionMode === 'single';
        };
        TreeTable.prototype.isMultipleSelectionMode = function () {
            return this.selectionMode === 'multiple';
        };
        TreeTable.prototype.equals = function (node1, node2) {
            return this.compareSelectionBy === 'equals' ? (node1 === node2) : utils.ObjectUtils.equals(node1.data, node2.data, this.dataKey);
        };
        TreeTable.prototype.filter = function (value, field, matchMode) {
            var _this = this;
            if (this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }
            if (!this.isFilterBlank(value)) {
                this.filters[field] = { value: value, matchMode: matchMode };
            }
            else if (this.filters[field]) {
                delete this.filters[field];
            }
            this.filterTimeout = setTimeout(function () {
                _this._filter();
                _this.filterTimeout = null;
            }, this.filterDelay);
        };
        TreeTable.prototype.filterGlobal = function (value, matchMode) {
            this.filter(value, 'global', matchMode);
        };
        TreeTable.prototype.isFilterBlank = function (filter) {
            if (filter !== null && filter !== undefined) {
                if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                    return true;
                else
                    return false;
            }
            return true;
        };
        TreeTable.prototype._filter = function () {
            var e_8, _a;
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                if (!this.value) {
                    return;
                }
                if (!this.hasFilter()) {
                    this.filteredNodes = null;
                    if (this.paginator) {
                        this.totalRecords = this.value ? this.value.length : 0;
                    }
                }
                else {
                    var globalFilterFieldsArray = void 0;
                    if (this.filters['global']) {
                        if (!this.columns && !this.globalFilterFields)
                            throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                        else
                            globalFilterFieldsArray = this.globalFilterFields || this.columns;
                    }
                    this.filteredNodes = [];
                    var isStrictMode = this.filterMode === 'strict';
                    var isValueChanged = false;
                    try {
                        for (var _b = __values(this.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var node = _c.value;
                            var copyNode = Object.assign({}, node);
                            var localMatch = true;
                            var globalMatch = false;
                            var paramsWithoutNode = void 0;
                            for (var prop in this.filters) {
                                if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                                    var filterMeta = this.filters[prop];
                                    var filterField = prop;
                                    var filterValue = filterMeta.value;
                                    var filterMatchMode = filterMeta.matchMode || 'startsWith';
                                    var filterConstraint = utils.FilterUtils[filterMatchMode];
                                    paramsWithoutNode = { filterField: filterField, filterValue: filterValue, filterConstraint: filterConstraint, isStrictMode: isStrictMode };
                                    if ((isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode))) ||
                                        (!isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)))) {
                                        localMatch = false;
                                    }
                                    if (!localMatch) {
                                        break;
                                    }
                                }
                            }
                            if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                                for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                                    var copyNodeForGlobal = Object.assign({}, copyNode);
                                    var filterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                                    var filterValue = this.filters['global'].value;
                                    var filterConstraint = utils.FilterUtils[this.filters['global'].matchMode];
                                    paramsWithoutNode = { filterField: filterField, filterValue: filterValue, filterConstraint: filterConstraint, isStrictMode: isStrictMode };
                                    if ((isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode))) ||
                                        (!isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode)))) {
                                        globalMatch = true;
                                        copyNode = copyNodeForGlobal;
                                    }
                                }
                            }
                            var matches = localMatch;
                            if (this.filters['global']) {
                                matches = localMatch && globalMatch;
                            }
                            if (matches) {
                                this.filteredNodes.push(copyNode);
                            }
                            isValueChanged = isValueChanged || !localMatch || globalMatch || (localMatch && this.filteredNodes.length > 0) || (!globalMatch && this.filteredNodes.length === 0);
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                    if (!isValueChanged) {
                        this.filteredNodes = null;
                    }
                    if (this.paginator) {
                        this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
                    }
                }
            }
            this.first = 0;
            var filteredValue = this.filteredNodes || this.value;
            this.onFilter.emit({
                filters: this.filters,
                filteredValue: filteredValue
            });
            this.tableService.onUIUpdate(filteredValue);
            this.updateSerializedValue();
            if (this.scrollable) {
                this.resetScrollTop();
            }
        };
        TreeTable.prototype.findFilteredNodes = function (node, paramsWithoutNode) {
            var e_9, _a;
            if (node) {
                var matched = false;
                if (node.children) {
                    var childNodes = __spread(node.children);
                    node.children = [];
                    try {
                        for (var childNodes_1 = __values(childNodes), childNodes_1_1 = childNodes_1.next(); !childNodes_1_1.done; childNodes_1_1 = childNodes_1.next()) {
                            var childNode = childNodes_1_1.value;
                            var copyChildNode = Object.assign({}, childNode);
                            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                                matched = true;
                                node.children.push(copyChildNode);
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (childNodes_1_1 && !childNodes_1_1.done && (_a = childNodes_1.return)) _a.call(childNodes_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                }
                if (matched) {
                    return true;
                }
            }
        };
        TreeTable.prototype.isFilterMatched = function (node, _a) {
            var filterField = _a.filterField, filterValue = _a.filterValue, filterConstraint = _a.filterConstraint, isStrictMode = _a.isStrictMode;
            var matched = false;
            var dataFieldValue = utils.ObjectUtils.resolveFieldData(node.data, filterField);
            if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
                matched = true;
            }
            if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
                matched = this.findFilteredNodes(node, { filterField: filterField, filterValue: filterValue, filterConstraint: filterConstraint, isStrictMode: isStrictMode }) || matched;
            }
            return matched;
        };
        TreeTable.prototype.isNodeLeaf = function (node) {
            return node.leaf === false ? false : !(node.children && node.children.length);
        };
        TreeTable.prototype.hasFilter = function () {
            var empty = true;
            for (var prop in this.filters) {
                if (this.filters.hasOwnProperty(prop)) {
                    empty = false;
                    break;
                }
            }
            return !empty;
        };
        TreeTable.prototype.reset = function () {
            this._sortField = null;
            this._sortOrder = 1;
            this._multiSortMeta = null;
            this.tableService.onSort(null);
            this.filteredNodes = null;
            this.filters = {};
            this.first = 0;
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                this.totalRecords = (this._value ? this._value.length : 0);
            }
        };
        TreeTable.prototype.updateEditingCell = function (cell) {
            this.editingCell = cell;
            this.bindDocumentEditListener();
        };
        TreeTable.prototype.isEditingCellValid = function () {
            return (this.editingCell && dom.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0);
        };
        TreeTable.prototype.bindDocumentEditListener = function () {
            var _this = this;
            if (!this.documentEditListener) {
                this.documentEditListener = function (event) {
                    if (_this.editingCell && !_this.editingCellClick && _this.isEditingCellValid()) {
                        dom.DomHandler.removeClass(_this.editingCell, 'p-cell-editing');
                        _this.editingCell = null;
                        _this.unbindDocumentEditListener();
                    }
                    _this.editingCellClick = false;
                };
                document.addEventListener('click', this.documentEditListener);
            }
        };
        TreeTable.prototype.unbindDocumentEditListener = function () {
            if (this.documentEditListener) {
                document.removeEventListener('click', this.documentEditListener);
                this.documentEditListener = null;
            }
        };
        TreeTable.prototype.ngOnDestroy = function () {
            this.unbindDocumentEditListener();
            this.editingCell = null;
            this.initialized = null;
        };
TreeTable.ɵfac = function TreeTable_Factory(t) { return new (t || TreeTable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TreeTable.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTable, selectors: [["p-treeTable"]], contentQueries: function TreeTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function TreeTable_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableFrozenViewChild = _t.first);
    } }, inputs: { lazy: "lazy", lazyLoadOnInit: "lazyLoadOnInit", first: "first", pageLinks: "pageLinks", alwaysShowPaginator: "alwaysShowPaginator", paginatorPosition: "paginatorPosition", currentPageReportTemplate: "currentPageReportTemplate", showPageLinks: "showPageLinks", defaultSortOrder: "defaultSortOrder", sortMode: "sortMode", resetPageOnSort: "resetPageOnSort", contextMenuSelectionMode: "contextMenuSelectionMode", compareSelectionBy: "compareSelectionBy", loadingIcon: "loadingIcon", showLoader: "showLoader", virtualScrollDelay: "virtualScrollDelay", virtualRowHeight: "virtualRowHeight", columnResizeMode: "columnResizeMode", rowTrackBy: "rowTrackBy", filters: "filters", filterDelay: "filterDelay", filterMode: "filterMode", totalRecords: "totalRecords", value: "value", sortField: "sortField", sortOrder: "sortOrder", multiSortMeta: "multiSortMeta", selection: "selection", rows: "rows", contextMenuSelection: "contextMenuSelection", columns: "columns", style: "style", styleClass: "styleClass", tableStyle: "tableStyle", tableStyleClass: "tableStyleClass", autoLayout: "autoLayout", paginator: "paginator", rowsPerPageOptions: "rowsPerPageOptions", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", showJumpToPageDropdown: "showJumpToPageDropdown", customSort: "customSort", selectionMode: "selectionMode", dataKey: "dataKey", metaKeySelection: "metaKeySelection", rowHover: "rowHover", loading: "loading", scrollable: "scrollable", scrollHeight: "scrollHeight", virtualScroll: "virtualScroll", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx", frozenWidth: "frozenWidth", frozenColumns: "frozenColumns", resizableColumns: "resizableColumns", reorderableColumns: "reorderableColumns", contextMenu: "contextMenu", globalFilterFields: "globalFilterFields", filterLocale: "filterLocale" }, outputs: { selectionChange: "selectionChange", contextMenuSelectionChange: "contextMenuSelectionChange", onFilter: "onFilter", onNodeExpand: "onNodeExpand", onNodeCollapse: "onNodeCollapse", onPage: "onPage", onSort: "onSort", onLazyLoad: "onLazyLoad", sortFunction: "sortFunction", onColResize: "onColResize", onColReorder: "onColReorder", onNodeSelect: "onNodeSelect", onNodeUnselect: "onNodeUnselect", onContextMenuSelect: "onContextMenuSelect", onHeaderCheckboxToggle: "onHeaderCheckboxToggle", onEditInit: "onEditInit", onEditComplete: "onEditComplete", onEditCancel: "onEditCancel" }, features: [ɵngcc0.ɵɵProvidersFeature([TreeTableService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 20, consts: [["data-scrollselectors", ".p-treetable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-treetable-loading", 4, "ngIf"], ["class", "p-treetable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-wrapper", 4, "ngIf"], ["class", "p-treetable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-treetable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "pi pi-arrow-down p-treetable-reorder-indicator-up", 4, "ngIf"], ["class", "pi pi-arrow-up p-treetable-reorder-indicator-down", 4, "ngIf"], [1, "p-treetable-loading"], [1, "p-treetable-loading-overlay", "p-component-overlay"], [1, "p-treetable-header"], [4, "ngTemplateOutlet"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-treetable-wrapper"], [3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], [1, "p-treetable-tfoot"], [1, "p-treetable-scrollable-wrapper"], ["class", "p-treetable-scrollable-view p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-treetable-scrollable-view", 3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-treetable-scrollable-view", "p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "onPageChange"], [1, "p-treetable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "pi", "pi-arrow-down", "p-treetable-reorder-indicator-up"], ["reorderIndicatorUp", ""], [1, "pi", "pi-arrow-up", "p-treetable-reorder-indicator-down"], ["reorderIndicatorDown", ""]], template: function TreeTable_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, TreeTable_div_2_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, TreeTable_div_3_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, TreeTable_p_paginator_4_Template, 1, 13, "p-paginator", 4);
        ɵngcc0.ɵɵtemplate(5, TreeTable_div_5_Template, 9, 16, "div", 5);
        ɵngcc0.ɵɵtemplate(6, TreeTable_div_6_Template, 4, 8, "div", 6);
        ɵngcc0.ɵɵtemplate(7, TreeTable_p_paginator_7_Template, 1, 13, "p-paginator", 7);
        ɵngcc0.ɵɵtemplate(8, TreeTable_div_8_Template, 2, 1, "div", 8);
        ɵngcc0.ɵɵtemplate(9, TreeTable_div_9_Template, 2, 0, "div", 9);
        ɵngcc0.ɵɵtemplate(10, TreeTable_span_10_Template, 2, 0, "span", 10);
        ɵngcc0.ɵɵtemplate(11, TreeTable_span_11_Template, 2, 0, "span", 11);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction5(14, _c10, ctx.rowHover || (ctx.selectionMode === "single" || ctx.selectionMode === "multiple"), ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable && ctx.scrollHeight === "flex"));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.captionTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.summaryTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.reorderableColumns);
    } }, directives: function () { return [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Paginator, TTBody, TTScrollableView]; }, styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-treetable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-badge,.p-treetable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;user-select:none}.p-treetable-toggler,p-treetabletoggler+p-treetablecheckbox+span,p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-footer,.p-treetable-scrollable-header{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-view,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-treetable-flex-scrollable .p-treetable-scrollable-body{-ms-flex:1;flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-tbody>tr>td,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-thead>tr>th{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-treetable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-treetable .p-row-editor-cancel,.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-down,.p-treetable-reorder-indicator-up{display:none;position:absolute}.p-treetable .p-treetable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTable, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTable',
                template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\" data-scrollselectors=\".p-treetable-scrollable-body\"\n                [ngClass]=\"{'p-treetable p-component': true,\n                'p-treetable-hoverable-rows': (rowHover||(selectionMode === 'single' || selectionMode === 'multiple')),\n                'p-treetable-auto-layout': autoLayout,\n                'p-treetable-resizable': resizableColumns,\n                'p-treetable-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'p-treetable-flex-scrollable': (scrollable && scrollHeight === 'flex')}\">\n            <div class=\"p-treetable-loading\" *ngIf=\"loading && showLoader\">\n                <div class=\"p-treetable-loading-overlay p-component-overlay\">\n                    <i [class]=\"'p-treetable-loading-icon pi-spin ' + loadingIcon\"></i>\n                </div>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"p-treetable-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"p-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n\n            <div class=\"p-treetable-wrapper\" *ngIf=\"!scrollable\">\n                <table #table [ngClass]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"p-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"p-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                    <tfoot class=\"p-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n\n            <div class=\"p-treetable-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"p-treetable-scrollable-view p-treetable-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" #scrollableFrozenView [ttScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div class=\"p-treetable-scrollable-view\" #scrollableView [ttScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\" [ngStyle]=\"{left: frozenWidth, width: 'calc(100% - '+frozenWidth+')'}\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"p-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"\n                [currentPageReportTemplate]=\"currentPageReportTemplate\" [showCurrentPageReport]=\"showCurrentPageReport\" [showJumpToPageDropdown]=\"showJumpToPageDropdown\" [showPageLinks]=\"showPageLinks\"></p-paginator>\n            <div *ngIf=\"summaryTemplate\" class=\"p-treetable-footer\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"p-column-resizer-helper\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"pi pi-arrow-down p-treetable-reorder-indicator-up\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"pi pi-arrow-up p-treetable-reorder-indicator-down\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
                providers: [TreeTableService],
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-treetable{position:relative}.p-treetable table{border-collapse:collapse;table-layout:fixed;width:100%}.p-treetable .p-sortable-column{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-badge,.p-treetable .p-sortable-column .p-sortable-column-icon{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;user-select:none}.p-treetable-toggler,p-treetabletoggler+p-treetablecheckbox+span,p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-footer,.p-treetable-scrollable-header{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-view,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper{-ms-flex:1;-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%}.p-treetable-flex-scrollable .p-treetable-scrollable-body{-ms-flex:1;flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-tbody>tr>td,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-thead>tr>th{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{border:1px solid rgba(0,0,0,0);cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5rem}.p-treetable .p-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.p-treetable .p-row-editor-cancel,.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-toggler{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-down,.p-treetable-reorder-indicator-up{display:none;position:absolute}.p-treetable .p-treetable-loading-overlay{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;position:absolute;z-index:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: TreeTableService }]; }, { lazy: [{
            type: core.Input
        }], lazyLoadOnInit: [{
            type: core.Input
        }], first: [{
            type: core.Input
        }], pageLinks: [{
            type: core.Input
        }], alwaysShowPaginator: [{
            type: core.Input
        }], paginatorPosition: [{
            type: core.Input
        }], currentPageReportTemplate: [{
            type: core.Input
        }], showPageLinks: [{
            type: core.Input
        }], defaultSortOrder: [{
            type: core.Input
        }], sortMode: [{
            type: core.Input
        }], resetPageOnSort: [{
            type: core.Input
        }], selectionChange: [{
            type: core.Output
        }], contextMenuSelectionChange: [{
            type: core.Output
        }], contextMenuSelectionMode: [{
            type: core.Input
        }], compareSelectionBy: [{
            type: core.Input
        }], loadingIcon: [{
            type: core.Input
        }], showLoader: [{
            type: core.Input
        }], virtualScrollDelay: [{
            type: core.Input
        }], virtualRowHeight: [{
            type: core.Input
        }], columnResizeMode: [{
            type: core.Input
        }], rowTrackBy: [{
            type: core.Input
        }], filters: [{
            type: core.Input
        }], filterDelay: [{
            type: core.Input
        }], filterMode: [{
            type: core.Input
        }], onFilter: [{
            type: core.Output
        }], onNodeExpand: [{
            type: core.Output
        }], onNodeCollapse: [{
            type: core.Output
        }], onPage: [{
            type: core.Output
        }], onSort: [{
            type: core.Output
        }], onLazyLoad: [{
            type: core.Output
        }], sortFunction: [{
            type: core.Output
        }], onColResize: [{
            type: core.Output
        }], onColReorder: [{
            type: core.Output
        }], onNodeSelect: [{
            type: core.Output
        }], onNodeUnselect: [{
            type: core.Output
        }], onContextMenuSelect: [{
            type: core.Output
        }], onHeaderCheckboxToggle: [{
            type: core.Output
        }], onEditInit: [{
            type: core.Output
        }], onEditComplete: [{
            type: core.Output
        }], onEditCancel: [{
            type: core.Output
        }], totalRecords: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], sortField: [{
            type: core.Input
        }], sortOrder: [{
            type: core.Input
        }], multiSortMeta: [{
            type: core.Input
        }], selection: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], contextMenuSelection: [{
            type: core.Input
        }], columns: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], tableStyle: [{
            type: core.Input
        }], tableStyleClass: [{
            type: core.Input
        }], autoLayout: [{
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
        }], customSort: [{
            type: core.Input
        }], selectionMode: [{
            type: core.Input
        }], dataKey: [{
            type: core.Input
        }], metaKeySelection: [{
            type: core.Input
        }], rowHover: [{
            type: core.Input
        }], loading: [{
            type: core.Input
        }], scrollable: [{
            type: core.Input
        }], scrollHeight: [{
            type: core.Input
        }], virtualScroll: [{
            type: core.Input
        }], minBufferPx: [{
            type: core.Input
        }], maxBufferPx: [{
            type: core.Input
        }], frozenWidth: [{
            type: core.Input
        }], frozenColumns: [{
            type: core.Input
        }], resizableColumns: [{
            type: core.Input
        }], reorderableColumns: [{
            type: core.Input
        }], contextMenu: [{
            type: core.Input
        }], globalFilterFields: [{
            type: core.Input
        }], filterLocale: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], resizeHelperViewChild: [{
            type: core.ViewChild,
            args: ['resizeHelper']
        }], reorderIndicatorUpViewChild: [{
            type: core.ViewChild,
            args: ['reorderIndicatorUp']
        }], reorderIndicatorDownViewChild: [{
            type: core.ViewChild,
            args: ['reorderIndicatorDown']
        }], tableViewChild: [{
            type: core.ViewChild,
            args: ['table']
        }], scrollableViewChild: [{
            type: core.ViewChild,
            args: ['scrollableView']
        }], scrollableFrozenViewChild: [{
            type: core.ViewChild,
            args: ['scrollableFrozenView']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return TreeTable;
    }());
    TreeTable.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: TreeTableService }
    ]; };
    TreeTable.propDecorators = {
        columns: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        tableStyle: [{ type: core.Input }],
        tableStyleClass: [{ type: core.Input }],
        autoLayout: [{ type: core.Input }],
        lazy: [{ type: core.Input }],
        lazyLoadOnInit: [{ type: core.Input }],
        paginator: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        first: [{ type: core.Input }],
        pageLinks: [{ type: core.Input }],
        rowsPerPageOptions: [{ type: core.Input }],
        alwaysShowPaginator: [{ type: core.Input }],
        paginatorPosition: [{ type: core.Input }],
        paginatorDropdownAppendTo: [{ type: core.Input }],
        currentPageReportTemplate: [{ type: core.Input }],
        showCurrentPageReport: [{ type: core.Input }],
        showJumpToPageDropdown: [{ type: core.Input }],
        showPageLinks: [{ type: core.Input }],
        defaultSortOrder: [{ type: core.Input }],
        sortMode: [{ type: core.Input }],
        resetPageOnSort: [{ type: core.Input }],
        customSort: [{ type: core.Input }],
        selectionMode: [{ type: core.Input }],
        selectionChange: [{ type: core.Output }],
        contextMenuSelection: [{ type: core.Input }],
        contextMenuSelectionChange: [{ type: core.Output }],
        contextMenuSelectionMode: [{ type: core.Input }],
        dataKey: [{ type: core.Input }],
        metaKeySelection: [{ type: core.Input }],
        compareSelectionBy: [{ type: core.Input }],
        rowHover: [{ type: core.Input }],
        loading: [{ type: core.Input }],
        loadingIcon: [{ type: core.Input }],
        showLoader: [{ type: core.Input }],
        scrollable: [{ type: core.Input }],
        scrollHeight: [{ type: core.Input }],
        virtualScroll: [{ type: core.Input }],
        virtualScrollDelay: [{ type: core.Input }],
        virtualRowHeight: [{ type: core.Input }],
        minBufferPx: [{ type: core.Input }],
        maxBufferPx: [{ type: core.Input }],
        frozenWidth: [{ type: core.Input }],
        frozenColumns: [{ type: core.Input }],
        resizableColumns: [{ type: core.Input }],
        columnResizeMode: [{ type: core.Input }],
        reorderableColumns: [{ type: core.Input }],
        contextMenu: [{ type: core.Input }],
        rowTrackBy: [{ type: core.Input }],
        filters: [{ type: core.Input }],
        globalFilterFields: [{ type: core.Input }],
        filterDelay: [{ type: core.Input }],
        filterMode: [{ type: core.Input }],
        filterLocale: [{ type: core.Input }],
        onFilter: [{ type: core.Output }],
        onNodeExpand: [{ type: core.Output }],
        onNodeCollapse: [{ type: core.Output }],
        onPage: [{ type: core.Output }],
        onSort: [{ type: core.Output }],
        onLazyLoad: [{ type: core.Output }],
        sortFunction: [{ type: core.Output }],
        onColResize: [{ type: core.Output }],
        onColReorder: [{ type: core.Output }],
        onNodeSelect: [{ type: core.Output }],
        onNodeUnselect: [{ type: core.Output }],
        onContextMenuSelect: [{ type: core.Output }],
        onHeaderCheckboxToggle: [{ type: core.Output }],
        onEditInit: [{ type: core.Output }],
        onEditComplete: [{ type: core.Output }],
        onEditCancel: [{ type: core.Output }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        resizeHelperViewChild: [{ type: core.ViewChild, args: ['resizeHelper',] }],
        reorderIndicatorUpViewChild: [{ type: core.ViewChild, args: ['reorderIndicatorUp',] }],
        reorderIndicatorDownViewChild: [{ type: core.ViewChild, args: ['reorderIndicatorDown',] }],
        tableViewChild: [{ type: core.ViewChild, args: ['table',] }],
        scrollableViewChild: [{ type: core.ViewChild, args: ['scrollableView',] }],
        scrollableFrozenViewChild: [{ type: core.ViewChild, args: ['scrollableFrozenView',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        value: [{ type: core.Input }],
        totalRecords: [{ type: core.Input }],
        sortField: [{ type: core.Input }],
        sortOrder: [{ type: core.Input }],
        multiSortMeta: [{ type: core.Input }],
        selection: [{ type: core.Input }]
    };
    var TTBody = /** @class */ (function () {
        function TTBody(tt, treeTableService, cd) {
            var _this = this;
            this.tt = tt;
            this.treeTableService = treeTableService;
            this.cd = cd;
            this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(function () {
                if (_this.tt.virtualScroll) {
                    _this.cd.detectChanges();
                }
            });
        }
        TTBody.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTBody.ɵfac = function TTBody_Factory(t) { return new (t || TTBody)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTBody, selectors: [["", "pTreeTableBody", ""]], inputs: { columns: ["pTreeTableBody", "columns"], template: ["pTreeTableBodyTemplate", "template"], frozen: "frozen" }, attrs: _c11, decls: 3, vars: 3, consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"]], template: function TTBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TTBody_ng_container_0_Template, 2, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TTBody_ng_container_1_Template, 2, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, TTBody_ng_container_2_Template, 2, 4, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.virtualScroll);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.isEmpty());
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.CdkVirtualForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTBody, [{
        type: core.Component,
        args: [{
                selector: '[pTreeTableBody]',
                template: "\n        <ng-container *ngIf=\"!tt.virtualScroll\">\n            <ng-template ngFor let-serializedNode let-rowIndex=\"index\" [ngForOf]=\"tt.serializedValue\" [ngForTrackBy]=\"tt.rowTrackBy\">\n                <ng-container *ngIf=\"serializedNode.visible\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"tt.virtualScroll\">\n            <ng-template cdkVirtualFor let-serializedNode let-rowIndex=\"index\" [cdkVirtualForOf]=\"tt.serializedValue\" [cdkVirtualForTrackBy]=\"tt.rowTrackBy\" [cdkVirtualForTemplateCacheSize]=\"0\">\n                <ng-container *ngIf=\"serializedNode.visible\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: serializedNode, node: serializedNode.node, rowData: serializedNode.node.data, columns: columns}\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"tt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"tt.emptyMessageTemplate; context: {$implicit: columns}\"></ng-container>\n        </ng-container>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { columns: [{
            type: core.Input,
            args: ["pTreeTableBody"]
        }], template: [{
            type: core.Input,
            args: ["pTreeTableBodyTemplate"]
        }], frozen: [{
            type: core.Input
        }] }); })();
        return TTBody;
    }());
    TTBody.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TTBody.propDecorators = {
        columns: [{ type: core.Input, args: ["pTreeTableBody",] }],
        template: [{ type: core.Input, args: ["pTreeTableBodyTemplate",] }],
        frozen: [{ type: core.Input }]
    };
    var TTScrollableView = /** @class */ (function () {
        function TTScrollableView(tt, el, zone) {
            this.tt = tt;
            this.el = el;
            this.zone = zone;
        }
        Object.defineProperty(TTScrollableView.prototype, "scrollHeight", {
            get: function () {
                return this._scrollHeight;
            },
            set: function (val) {
                this._scrollHeight = val;
                if (val != null && (val.includes('%') || val.includes('calc'))) {
                    console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
                }
            },
            enumerable: false,
            configurable: true
        });
        TTScrollableView.prototype.ngAfterViewInit = function () {
            if (!this.frozen) {
                if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
                    dom.DomHandler.addClass(this.el.nativeElement, 'p-treetable-unfrozen-view');
                }
                var frozenView = this.el.nativeElement.previousElementSibling;
                if (frozenView) {
                    if (this.tt.virtualScroll)
                        this.frozenSiblingBody = dom.DomHandler.findSingle(frozenView, '.p-treetable-virtual-scrollable-body');
                    else
                        this.frozenSiblingBody = dom.DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
                }
                var scrollBarWidth = dom.DomHandler.calculateScrollbarWidth();
                this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                    this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
                }
            }
            else {
                if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
                    this.scrollableAlignerViewChild.nativeElement.style.height = dom.DomHandler.calculateScrollbarHeight() + 'px';
                }
            }
            this.bindEvents();
        };
        TTScrollableView.prototype.bindEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                    _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                    _this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
                }
                if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                    _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                    _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
                }
                if (!_this.frozen) {
                    _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                    if (_this.tt.virtualScroll)
                        _this.virtualScrollBody.getElementRef().nativeElement.addEventListener('scroll', _this.bodyScrollListener);
                    else
                        _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
                }
            });
        };
        TTScrollableView.prototype.unbindEvents = function () {
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
            }
            if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
                this.scrollBodyViewChild.nativeElement.removeEventListener('scroll', this.bodyScrollListener);
            }
            if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
                this.virtualScrollBody.getElementRef().nativeElement.removeEventListener('scroll', this.bodyScrollListener);
            }
        };
        TTScrollableView.prototype.onHeaderScroll = function () {
            var scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;
            this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
            }
            this.preventBodyScrollPropagation = true;
        };
        TTScrollableView.prototype.onFooterScroll = function () {
            var scrollLeft = this.scrollFooterViewChild.nativeElement.scrollLeft;
            this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
            }
            this.preventBodyScrollPropagation = true;
        };
        TTScrollableView.prototype.onBodyScroll = function (event) {
            if (this.preventBodyScrollPropagation) {
                this.preventBodyScrollPropagation = false;
                return;
            }
            if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
                this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
            }
            if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
            }
            if (this.frozenSiblingBody) {
                this.frozenSiblingBody.scrollTop = event.target.scrollTop;
            }
        };
        TTScrollableView.prototype.scrollToVirtualIndex = function (index) {
            if (this.virtualScrollBody) {
                this.virtualScrollBody.scrollToIndex(index);
            }
        };
        TTScrollableView.prototype.scrollTo = function (options) {
            if (this.virtualScrollBody) {
                this.virtualScrollBody.scrollTo(options);
            }
            else {
                if (this.scrollBodyViewChild.nativeElement.scrollTo) {
                    this.scrollBodyViewChild.nativeElement.scrollTo(options);
                }
                else {
                    this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
                    this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
                }
            }
        };
        TTScrollableView.prototype.ngOnDestroy = function () {
            this.unbindEvents();
            this.frozenSiblingBody = null;
        };
TTScrollableView.ɵfac = function TTScrollableView_Factory(t) { return new (t || TTScrollableView)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTScrollableView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTScrollableView, selectors: [["", "ttScrollableView", ""]], viewQuery: function TTScrollableView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c13, true);
        ɵngcc0.ɵɵviewQuery(_c14, true);
        ɵngcc0.ɵɵviewQuery(_c15, true);
        ɵngcc0.ɵɵviewQuery(_c16, true);
        ɵngcc0.ɵɵviewQuery(_c17, true);
        ɵngcc0.ɵɵviewQuery(_c18, true);
        ɵngcc0.ɵɵviewQuery(_c19, true);
        ɵngcc0.ɵɵviewQuery(_c20, true);
        ɵngcc0.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollLoadingTableViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollBody = _t.first);
    } }, inputs: { scrollHeight: "scrollHeight", columns: ["ttScrollableView", "columns"], frozen: "frozen" }, attrs: _c21, decls: 12, vars: 13, consts: [[1, "p-treetable-scrollable-header"], ["scrollHeader", ""], [1, "p-treetable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-treetable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-treetable-thead"], [4, "ngIf", "ngIfElse"], ["virtualScrollTemplate", ""], ["class", "p-treetable-scrollable-footer", 4, "ngIf"], [1, "p-treetable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], [3, "ngStyle"], ["scrollTable", ""], [1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "p-treetable-virtual-scrollable-body", 3, "itemSize", "minBufferPx", "maxBufferPx"], [1, "p-treetable-scrollable-footer"], ["scrollFooter", ""], [1, "p-treetable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-treetable-scrollable-footer-table", 3, "ngClass", "ngStyle"], [1, "p-treetable-tfoot"]], template: function TTScrollableView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelementStart(4, "table", 4);
        ɵngcc0.ɵɵtemplate(5, TTScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementStart(6, "thead", 6);
        ɵngcc0.ɵɵtemplate(7, TTScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, TTScrollableView_ng_container_8_Template, 8, 15, "ng-container", 7);
        ɵngcc0.ɵɵtemplate(9, TTScrollableView_ng_template_9_Template, 6, 16, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(11, TTScrollableView_div_11_Template, 8, 10, "div", 9);
    } if (rf & 2) {
        var _r5 = ɵngcc0.ɵɵreference(10);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngClass", ctx.tt.tableStyleClass)("ngStyle", ctx.tt.tableStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt.colGroupTemplate : ctx.tt.colGroupTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt.headerTemplate : ctx.tt.headerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(11, _c7, ctx.columns));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.virtualScroll)("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, TTBody, ɵngcc3.CdkVirtualScrollViewport, ɵngcc3.CdkFixedSizeVirtualScroll], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTScrollableView, [{
        type: core.Component,
        args: [{
                selector: '[ttScrollableView]',
                template: "\n        <div #scrollHeader class=\"p-treetable-scrollable-header\">\n            <div #scrollHeaderBox class=\"p-treetable-scrollable-header-box\">\n                <table class=\"p-treetable-scrollable-header-table\" [ngClass]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"p-treetable-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenHeaderTemplate||tt.headerTemplate : tt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                </table>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!tt.virtualScroll; else virtualScrollTemplate\">\n            <div #scrollBody class=\"p-treetable-scrollable-body\" [ngStyle]=\"{'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined, 'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined}\">\n                <table #scrollTable [class]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"p-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </div>\n        </ng-container>\n        <ng-template #virtualScrollTemplate>\n            <cdk-virtual-scroll-viewport [itemSize]=\"tt.virtualRowHeight\" [style.height]=\"tt.scrollHeight !== 'flex' ? scrollHeight : undefined\"\n                    [minBufferPx]=\"tt.minBufferPx\" [maxBufferPx]=\"tt.maxBufferPx\" class=\"p-treetable-virtual-scrollable-body\">\n                <table #scrollTable [class]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tbody class=\"p-treetable-tbody\" [pTreeTableBody]=\"columns\" [pTreeTableBodyTemplate]=\"frozen ? tt.frozenBodyTemplate||tt.bodyTemplate : tt.bodyTemplate\" [frozen]=\"frozen\"></tbody>\n                </table>\n                <div #scrollableAligner style=\"background-color:transparent\" *ngIf=\"frozen\"></div>\n            </cdk-virtual-scroll-viewport>\n        </ng-template>\n        <div #scrollFooter *ngIf=\"tt.footerTemplate\" class=\"p-treetable-scrollable-footer\">\n            <div #scrollFooterBox class=\"p-treetable-scrollable-footer-box\">\n                <table class=\"p-treetable-scrollable-footer-table\" [ngClass]=\"tt.tableStyleClass\" [ngStyle]=\"tt.tableStyle\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenColGroupTemplate||tt.colGroupTemplate : tt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"p-treetable-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? tt.frozenFooterTemplate||tt.footerTemplate : tt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { scrollHeight: [{
            type: core.Input
        }], columns: [{
            type: core.Input,
            args: ["ttScrollableView"]
        }], frozen: [{
            type: core.Input
        }], scrollHeaderViewChild: [{
            type: core.ViewChild,
            args: ['scrollHeader']
        }], scrollHeaderBoxViewChild: [{
            type: core.ViewChild,
            args: ['scrollHeaderBox']
        }], scrollBodyViewChild: [{
            type: core.ViewChild,
            args: ['scrollBody']
        }], scrollTableViewChild: [{
            type: core.ViewChild,
            args: ['scrollTable']
        }], scrollLoadingTableViewChild: [{
            type: core.ViewChild,
            args: ['loadingTable']
        }], scrollFooterViewChild: [{
            type: core.ViewChild,
            args: ['scrollFooter']
        }], scrollFooterBoxViewChild: [{
            type: core.ViewChild,
            args: ['scrollFooterBox']
        }], scrollableAlignerViewChild: [{
            type: core.ViewChild,
            args: ['scrollableAligner']
        }], virtualScrollBody: [{
            type: core.ViewChild,
            args: [scrolling.CdkVirtualScrollViewport]
        }] }); })();
        return TTScrollableView;
    }());
    TTScrollableView.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    TTScrollableView.propDecorators = {
        columns: [{ type: core.Input, args: ["ttScrollableView",] }],
        frozen: [{ type: core.Input }],
        scrollHeaderViewChild: [{ type: core.ViewChild, args: ['scrollHeader',] }],
        scrollHeaderBoxViewChild: [{ type: core.ViewChild, args: ['scrollHeaderBox',] }],
        scrollBodyViewChild: [{ type: core.ViewChild, args: ['scrollBody',] }],
        scrollTableViewChild: [{ type: core.ViewChild, args: ['scrollTable',] }],
        scrollLoadingTableViewChild: [{ type: core.ViewChild, args: ['loadingTable',] }],
        scrollFooterViewChild: [{ type: core.ViewChild, args: ['scrollFooter',] }],
        scrollFooterBoxViewChild: [{ type: core.ViewChild, args: ['scrollFooterBox',] }],
        scrollableAlignerViewChild: [{ type: core.ViewChild, args: ['scrollableAligner',] }],
        virtualScrollBody: [{ type: core.ViewChild, args: [scrolling.CdkVirtualScrollViewport,] }],
        scrollHeight: [{ type: core.Input }]
    };
    var TTSortableColumn = /** @class */ (function () {
        function TTSortableColumn(tt) {
            var _this = this;
            this.tt = tt;
            if (this.isEnabled()) {
                this.subscription = this.tt.tableService.sortSource$.subscribe(function (sortMeta) {
                    _this.updateSortState();
                });
            }
        }
        TTSortableColumn.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.updateSortState();
            }
        };
        TTSortableColumn.prototype.updateSortState = function () {
            this.sorted = this.tt.isSorted(this.field);
        };
        TTSortableColumn.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.updateSortState();
                this.tt.sort({
                    originalEvent: event,
                    field: this.field
                });
                dom.DomHandler.clearSelection();
            }
        };
        TTSortableColumn.prototype.onEnterKey = function (event) {
            this.onClick(event);
        };
        TTSortableColumn.prototype.isEnabled = function () {
            return this.ttSortableColumnDisabled !== true;
        };
        TTSortableColumn.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTSortableColumn.ɵfac = function TTSortableColumn_Factory(t) { return new (t || TTSortableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable)); };
TTSortableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSortableColumn, selectors: [["", "ttSortableColumn", ""]], hostVars: 6, hostBindings: function TTSortableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTSortableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown.enter", function TTSortableColumn_keydown_enter_HostBindingHandler($event) { return ctx.onEnterKey($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader");
        ɵngcc0.ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    } }, inputs: { field: ["ttSortableColumn", "field"], ttSortableColumnDisabled: "ttSortableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSortableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[ttSortableColumn]',
                host: {
                    '[class.p-sortable-column]': 'isEnabled()',
                    '[class.p-highlight]': 'sorted',
                    '[attr.tabindex]': 'isEnabled() ? "0" : null',
                    '[attr.role]': '"columnheader"'
                }
            }]
    }], function () { return [{ type: TreeTable }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: core.HostListener,
            args: ['keydown.enter', ['$event']]
        }], field: [{
            type: core.Input,
            args: ["ttSortableColumn"]
        }], ttSortableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return TTSortableColumn;
    }());
    TTSortableColumn.ctorParameters = function () { return [
        { type: TreeTable }
    ]; };
    TTSortableColumn.propDecorators = {
        field: [{ type: core.Input, args: ["ttSortableColumn",] }],
        ttSortableColumnDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onEnterKey: [{ type: core.HostListener, args: ['keydown.enter', ['$event'],] }]
    };
    var TTSortIcon = /** @class */ (function () {
        function TTSortIcon(tt, cd) {
            var _this = this;
            this.tt = tt;
            this.cd = cd;
            this.subscription = this.tt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
                _this.cd.markForCheck();
            });
        }
        TTSortIcon.prototype.ngOnInit = function () {
            this.updateSortState();
        };
        TTSortIcon.prototype.onClick = function (event) {
            event.preventDefault();
        };
        TTSortIcon.prototype.updateSortState = function () {
            if (this.tt.sortMode === 'single') {
                this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
            }
            else if (this.tt.sortMode === 'multiple') {
                var sortMeta = this.tt.getSortMeta(this.field);
                this.sortOrder = sortMeta ? sortMeta.order : 0;
            }
        };
        TTSortIcon.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTSortIcon.ɵfac = function TTSortIcon_Factory(t) { return new (t || TTSortIcon)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTSortIcon.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTSortIcon, selectors: [["p-treeTableSortIcon"]], inputs: { field: "field", ariaLabelDesc: "ariaLabelDesc", ariaLabelAsc: "ariaLabelAsc" }, decls: 1, vars: 5, consts: [[1, "p-sortable-column-icon", "pi", "pi-fw", 3, "ngClass"]], template: function TTSortIcon_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(1, _c23, ctx.sortOrder === 1, ctx.sortOrder === 0 - 1, ctx.sortOrder === 0));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSortIcon, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTableSortIcon',
                template: "\n        <i class=\"p-sortable-column-icon pi pi-fw\" [ngClass]=\"{'pi-sort-amount-up-alt': sortOrder === 1, 'pi-sort-amount-down': sortOrder === -1, 'pi-sort-alt': sortOrder === 0}\"></i>\n    ",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ChangeDetectorRef }]; }, { field: [{
            type: core.Input
        }], ariaLabelDesc: [{
            type: core.Input
        }], ariaLabelAsc: [{
            type: core.Input
        }] }); })();
        return TTSortIcon;
    }());
    TTSortIcon.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ChangeDetectorRef }
    ]; };
    TTSortIcon.propDecorators = {
        field: [{ type: core.Input }],
        ariaLabelDesc: [{ type: core.Input }],
        ariaLabelAsc: [{ type: core.Input }]
    };
    var TTResizableColumn = /** @class */ (function () {
        function TTResizableColumn(tt, el, zone) {
            this.tt = tt;
            this.el = el;
            this.zone = zone;
        }
        TTResizableColumn.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.isEnabled()) {
                dom.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
                this.resizer = document.createElement('span');
                this.resizer.className = 'p-column-resizer';
                this.el.nativeElement.appendChild(this.resizer);
                this.zone.runOutsideAngular(function () {
                    _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                    _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
                });
            }
        };
        TTResizableColumn.prototype.bindDocumentEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
                document.addEventListener('mousemove', _this.documentMouseMoveListener);
                _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
                document.addEventListener('mouseup', _this.documentMouseUpListener);
            });
        };
        TTResizableColumn.prototype.unbindDocumentEvents = function () {
            if (this.documentMouseMoveListener) {
                document.removeEventListener('mousemove', this.documentMouseMoveListener);
                this.documentMouseMoveListener = null;
            }
            if (this.documentMouseUpListener) {
                document.removeEventListener('mouseup', this.documentMouseUpListener);
                this.documentMouseUpListener = null;
            }
        };
        TTResizableColumn.prototype.onMouseDown = function (event) {
            this.tt.onColumnResizeBegin(event);
            this.bindDocumentEvents();
        };
        TTResizableColumn.prototype.onDocumentMouseMove = function (event) {
            this.tt.onColumnResize(event);
        };
        TTResizableColumn.prototype.onDocumentMouseUp = function (event) {
            this.tt.onColumnResizeEnd(event, this.el.nativeElement);
            this.unbindDocumentEvents();
        };
        TTResizableColumn.prototype.isEnabled = function () {
            return this.ttResizableColumnDisabled !== true;
        };
        TTResizableColumn.prototype.ngOnDestroy = function () {
            if (this.resizerMouseDownListener) {
                this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
            }
            this.unbindDocumentEvents();
        };
TTResizableColumn.ɵfac = function TTResizableColumn_Factory(t) { return new (t || TTResizableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTResizableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTResizableColumn, selectors: [["", "ttResizableColumn", ""]], inputs: { ttResizableColumnDisabled: "ttResizableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTResizableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[ttResizableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { ttResizableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return TTResizableColumn;
    }());
    TTResizableColumn.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    TTResizableColumn.propDecorators = {
        ttResizableColumnDisabled: [{ type: core.Input }]
    };
    var TTReorderableColumn = /** @class */ (function () {
        function TTReorderableColumn(tt, el, zone) {
            this.tt = tt;
            this.el = el;
            this.zone = zone;
        }
        TTReorderableColumn.prototype.ngAfterViewInit = function () {
            if (this.isEnabled()) {
                this.bindEvents();
            }
        };
        TTReorderableColumn.prototype.bindEvents = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.mouseDownListener = _this.onMouseDown.bind(_this);
                _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                _this.dragStartListener = _this.onDragStart.bind(_this);
                _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
                _this.dragOverListener = _this.onDragEnter.bind(_this);
                _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
                _this.dragEnterListener = _this.onDragEnter.bind(_this);
                _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
                _this.dragLeaveListener = _this.onDragLeave.bind(_this);
                _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
            });
        };
        TTReorderableColumn.prototype.unbindEvents = function () {
            if (this.mouseDownListener) {
                document.removeEventListener('mousedown', this.mouseDownListener);
                this.mouseDownListener = null;
            }
            if (this.dragOverListener) {
                document.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            }
            if (this.dragEnterListener) {
                document.removeEventListener('dragenter', this.dragEnterListener);
                this.dragEnterListener = null;
            }
            if (this.dragEnterListener) {
                document.removeEventListener('dragenter', this.dragEnterListener);
                this.dragEnterListener = null;
            }
            if (this.dragLeaveListener) {
                document.removeEventListener('dragleave', this.dragLeaveListener);
                this.dragLeaveListener = null;
            }
        };
        TTReorderableColumn.prototype.onMouseDown = function (event) {
            if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || dom.DomHandler.hasClass(event.target, 'p-column-resizer'))
                this.el.nativeElement.draggable = false;
            else
                this.el.nativeElement.draggable = true;
        };
        TTReorderableColumn.prototype.onDragStart = function (event) {
            this.tt.onColumnDragStart(event, this.el.nativeElement);
        };
        TTReorderableColumn.prototype.onDragOver = function (event) {
            event.preventDefault();
        };
        TTReorderableColumn.prototype.onDragEnter = function (event) {
            this.tt.onColumnDragEnter(event, this.el.nativeElement);
        };
        TTReorderableColumn.prototype.onDragLeave = function (event) {
            this.tt.onColumnDragLeave(event);
        };
        TTReorderableColumn.prototype.onDrop = function (event) {
            if (this.isEnabled()) {
                this.tt.onColumnDrop(event, this.el.nativeElement);
            }
        };
        TTReorderableColumn.prototype.isEnabled = function () {
            return this.ttReorderableColumnDisabled !== true;
        };
        TTReorderableColumn.prototype.ngOnDestroy = function () {
            this.unbindEvents();
        };
TTReorderableColumn.ɵfac = function TTReorderableColumn_Factory(t) { return new (t || TTReorderableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTReorderableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTReorderableColumn, selectors: [["", "ttReorderableColumn", ""]], hostBindings: function TTReorderableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("drop", function TTReorderableColumn_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { ttReorderableColumnDisabled: "ttReorderableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTReorderableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[ttReorderableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onDrop: [{
            type: core.HostListener,
            args: ['drop', ['$event']]
        }], ttReorderableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return TTReorderableColumn;
    }());
    TTReorderableColumn.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    TTReorderableColumn.propDecorators = {
        ttReorderableColumnDisabled: [{ type: core.Input }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
    };
    var TTSelectableRow = /** @class */ (function () {
        function TTSelectableRow(tt, tableService) {
            var _this = this;
            this.tt = tt;
            this.tableService = tableService;
            if (this.isEnabled()) {
                this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
                    _this.selected = _this.tt.isSelected(_this.rowNode.node);
                });
            }
        }
        TTSelectableRow.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.selected = this.tt.isSelected(this.rowNode.node);
            }
        };
        TTSelectableRow.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.tt.handleRowClick({
                    originalEvent: event,
                    rowNode: this.rowNode
                });
            }
        };
        TTSelectableRow.prototype.onEnterKey = function (event) {
            if (event.which === 13) {
                this.onClick(event);
            }
        };
        TTSelectableRow.prototype.onTouchEnd = function (event) {
            if (this.isEnabled()) {
                this.tt.handleRowTouchEnd(event);
            }
        };
        TTSelectableRow.prototype.isEnabled = function () {
            return this.ttSelectableRowDisabled !== true;
        };
        TTSelectableRow.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTSelectableRow.ɵfac = function TTSelectableRow_Factory(t) { return new (t || TTSelectableRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TTSelectableRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSelectableRow, selectors: [["", "ttSelectableRow", ""]], hostVars: 2, hostBindings: function TTSelectableRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTSelectableRow_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function TTSelectableRow_keydown_HostBindingHandler($event) { return ctx.onEnterKey($event); })("touchend", function TTSelectableRow_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-highlight", ctx.selected);
    } }, inputs: { rowNode: ["ttSelectableRow", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSelectableRow, [{
        type: core.Directive,
        args: [{
                selector: '[ttSelectableRow]',
                host: {
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onEnterKey: [{
            type: core.HostListener,
            args: ['keydown', ['$event']]
        }], onTouchEnd: [{
            type: core.HostListener,
            args: ['touchend', ['$event']]
        }], rowNode: [{
            type: core.Input,
            args: ["ttSelectableRow"]
        }], ttSelectableRowDisabled: [{
            type: core.Input
        }] }); })();
        return TTSelectableRow;
    }());
    TTSelectableRow.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService }
    ]; };
    TTSelectableRow.propDecorators = {
        rowNode: [{ type: core.Input, args: ["ttSelectableRow",] }],
        ttSelectableRowDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onEnterKey: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
        onTouchEnd: [{ type: core.HostListener, args: ['touchend', ['$event'],] }]
    };
    var TTSelectableRowDblClick = /** @class */ (function () {
        function TTSelectableRowDblClick(tt, tableService) {
            var _this = this;
            this.tt = tt;
            this.tableService = tableService;
            if (this.isEnabled()) {
                this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
                    _this.selected = _this.tt.isSelected(_this.rowNode.node);
                });
            }
        }
        TTSelectableRowDblClick.prototype.ngOnInit = function () {
            if (this.isEnabled()) {
                this.selected = this.tt.isSelected(this.rowNode.node);
            }
        };
        TTSelectableRowDblClick.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.tt.handleRowClick({
                    originalEvent: event,
                    rowNode: this.rowNode
                });
            }
        };
        TTSelectableRowDblClick.prototype.isEnabled = function () {
            return this.ttSelectableRowDisabled !== true;
        };
        TTSelectableRowDblClick.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTSelectableRowDblClick.ɵfac = function TTSelectableRowDblClick_Factory(t) { return new (t || TTSelectableRowDblClick)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService)); };
TTSelectableRowDblClick.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTSelectableRowDblClick, selectors: [["", "ttSelectableRowDblClick", ""]], hostVars: 2, hostBindings: function TTSelectableRowDblClick_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dblclick", function TTSelectableRowDblClick_dblclick_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-highlight", ctx.selected);
    } }, inputs: { rowNode: ["ttSelectableRowDblClick", "rowNode"], ttSelectableRowDisabled: "ttSelectableRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTSelectableRowDblClick, [{
        type: core.Directive,
        args: [{
                selector: '[ttSelectableRowDblClick]',
                host: {
                    '[class.p-highlight]': 'selected'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }]; }, { onClick: [{
            type: core.HostListener,
            args: ['dblclick', ['$event']]
        }], rowNode: [{
            type: core.Input,
            args: ["ttSelectableRowDblClick"]
        }], ttSelectableRowDisabled: [{
            type: core.Input
        }] }); })();
        return TTSelectableRowDblClick;
    }());
    TTSelectableRowDblClick.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService }
    ]; };
    TTSelectableRowDblClick.propDecorators = {
        rowNode: [{ type: core.Input, args: ["ttSelectableRowDblClick",] }],
        ttSelectableRowDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['dblclick', ['$event'],] }]
    };
    var TTContextMenuRow = /** @class */ (function () {
        function TTContextMenuRow(tt, tableService, el) {
            var _this = this;
            this.tt = tt;
            this.tableService = tableService;
            this.el = el;
            if (this.isEnabled()) {
                this.subscription = this.tt.tableService.contextMenuSource$.subscribe(function (node) {
                    _this.selected = _this.tt.equals(_this.rowNode.node, node);
                });
            }
        }
        TTContextMenuRow.prototype.onContextMenu = function (event) {
            if (this.isEnabled()) {
                this.tt.handleRowRightClick({
                    originalEvent: event,
                    rowNode: this.rowNode
                });
                this.el.nativeElement.focus();
                event.preventDefault();
            }
        };
        TTContextMenuRow.prototype.isEnabled = function () {
            return this.ttContextMenuRowDisabled !== true;
        };
        TTContextMenuRow.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTContextMenuRow.ɵfac = function TTContextMenuRow_Factory(t) { return new (t || TTContextMenuRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TTContextMenuRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTContextMenuRow, selectors: [["", "ttContextMenuRow", ""]], hostVars: 3, hostBindings: function TTContextMenuRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("contextmenu", function TTContextMenuRow_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : undefined);
        ɵngcc0.ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
    } }, inputs: { rowNode: ["ttContextMenuRow", "rowNode"], ttContextMenuRowDisabled: "ttContextMenuRowDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTContextMenuRow, [{
        type: core.Directive,
        args: [{
                selector: '[ttContextMenuRow]',
                host: {
                    '[class.p-highlight-contextmenu]': 'selected',
                    '[attr.tabindex]': 'isEnabled() ? 0 : undefined'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ElementRef }]; }, { onContextMenu: [{
            type: core.HostListener,
            args: ['contextmenu', ['$event']]
        }], rowNode: [{
            type: core.Input,
            args: ["ttContextMenuRow"]
        }], ttContextMenuRowDisabled: [{
            type: core.Input
        }] }); })();
        return TTContextMenuRow;
    }());
    TTContextMenuRow.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService },
        { type: core.ElementRef }
    ]; };
    TTContextMenuRow.propDecorators = {
        rowNode: [{ type: core.Input, args: ["ttContextMenuRow",] }],
        ttContextMenuRowDisabled: [{ type: core.Input }],
        onContextMenu: [{ type: core.HostListener, args: ['contextmenu', ['$event'],] }]
    };
    var TTCheckbox = /** @class */ (function () {
        function TTCheckbox(tt, tableService, cd) {
            var _this = this;
            this.tt = tt;
            this.tableService = tableService;
            this.cd = cd;
            this.subscription = this.tt.tableService.selectionSource$.subscribe(function () {
                _this.checked = _this.tt.isSelected(_this.rowNode.node);
                _this.cd.markForCheck();
            });
        }
        TTCheckbox.prototype.ngOnInit = function () {
            this.checked = this.tt.isSelected(this.rowNode.node);
        };
        TTCheckbox.prototype.onClick = function (event) {
            if (!this.disabled) {
                this.tt.toggleNodeWithCheckbox({
                    originalEvent: event,
                    rowNode: this.rowNode
                });
            }
            dom.DomHandler.clearSelection();
        };
        TTCheckbox.prototype.onFocus = function () {
            dom.DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TTCheckbox.prototype.onBlur = function () {
            dom.DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TTCheckbox.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
TTCheckbox.ɵfac = function TTCheckbox_Factory(t) { return new (t || TTCheckbox)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTCheckbox, selectors: [["p-treeTableCheckbox"]], viewQuery: function TTCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c24, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, inputs: { disabled: "disabled", rowNode: ["value", "rowNode"] }, decls: 6, vars: 10, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", "pi", 3, "ngClass"]], template: function TTCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TTCheckbox_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2);
        ɵngcc0.ɵɵlistener("focus", function TTCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TTCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵelement(5, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c25, ctx.checked, ctx.disabled));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c26, ctx.checked, ctx.rowNode.node.partialSelected));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTCheckbox, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTableCheckbox',
                template: "\n        <div class=\"p-checkbox p-component\" (click)=\"onClick($event)\">\n            <div class=\"p-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'p-checkbox-box':true,\n                'p-highlight':checked, 'p-disabled':disabled}\"  role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"p-checkbox-icon pi\" [ngClass]=\"{'pi-check':checked, 'pi-minus': rowNode.node.partialSelected}\"></span>\n            </div>\n        </div>\n    ",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: core.Input
        }], rowNode: [{
            type: core.Input,
            args: ["value"]
        }], boxViewChild: [{
            type: core.ViewChild,
            args: ['box']
        }] }); })();
        return TTCheckbox;
    }());
    TTCheckbox.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TTCheckbox.propDecorators = {
        disabled: [{ type: core.Input }],
        rowNode: [{ type: core.Input, args: ["value",] }],
        boxViewChild: [{ type: core.ViewChild, args: ['box',] }]
    };
    var TTHeaderCheckbox = /** @class */ (function () {
        function TTHeaderCheckbox(tt, tableService, cd) {
            var _this = this;
            this.tt = tt;
            this.tableService = tableService;
            this.cd = cd;
            this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(function () {
                _this.checked = _this.updateCheckedState();
            });
            this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(function () {
                _this.checked = _this.updateCheckedState();
            });
        }
        TTHeaderCheckbox.prototype.ngOnInit = function () {
            this.checked = this.updateCheckedState();
        };
        TTHeaderCheckbox.prototype.onClick = function (event, checked) {
            if (this.tt.value && this.tt.value.length > 0) {
                this.tt.toggleNodesWithCheckbox(event, !checked);
            }
            dom.DomHandler.clearSelection();
        };
        TTHeaderCheckbox.prototype.onFocus = function () {
            dom.DomHandler.addClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TTHeaderCheckbox.prototype.onBlur = function () {
            dom.DomHandler.removeClass(this.boxViewChild.nativeElement, 'p-focus');
        };
        TTHeaderCheckbox.prototype.ngOnDestroy = function () {
            if (this.selectionChangeSubscription) {
                this.selectionChangeSubscription.unsubscribe();
            }
            if (this.valueChangeSubscription) {
                this.valueChangeSubscription.unsubscribe();
            }
        };
        TTHeaderCheckbox.prototype.updateCheckedState = function () {
            var e_10, _a;
            this.cd.markForCheck();
            var checked;
            var data = this.tt.filteredNodes || this.tt.value;
            if (data) {
                try {
                    for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                        var node = data_2_1.value;
                        if (this.tt.isSelected(node)) {
                            checked = true;
                        }
                        else {
                            checked = false;
                            break;
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
            else {
                checked = false;
            }
            return checked;
        };
TTHeaderCheckbox.ɵfac = function TTHeaderCheckbox_Factory(t) { return new (t || TTHeaderCheckbox)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TreeTableService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TTHeaderCheckbox.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TTHeaderCheckbox, selectors: [["p-treeTableHeaderCheckbox"]], viewQuery: function TTHeaderCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c24, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.boxViewChild = _t.first);
    } }, decls: 7, vars: 10, consts: [[1, "p-checkbox", "p-component", 3, "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [1, "p-checkbox-icon", 3, "ngClass"]], template: function TTHeaderCheckbox_Template(rf, ctx) { if (rf & 1) {
        var _r2 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function TTHeaderCheckbox_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var _r0 = ɵngcc0.ɵɵreference(3); return ctx.onClick($event, _r0.checked); });
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "input", 2, 3);
        ɵngcc0.ɵɵlistener("focus", function TTHeaderCheckbox_Template_input_focus_2_listener() { return ctx.onFocus(); })("blur", function TTHeaderCheckbox_Template_input_blur_2_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
        ɵngcc0.ɵɵelement(6, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c25, ctx.checked, !ctx.tt.value || ctx.tt.value.length === 0));
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c27, ctx.checked));
    } }, directives: [ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTHeaderCheckbox, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTableHeaderCheckbox',
                template: "\n        <div class=\"p-checkbox p-component\" (click)=\"onClick($event, cb.checked)\">\n            <div class=\"p-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"!tt.value||tt.value.length === 0\">\n            </div>\n            <div #box [ngClass]=\"{'p-checkbox-box':true,\n                'p-highlight':checked, 'p-disabled': (!tt.value || tt.value.length === 0)}\"  role=\"checkbox\" [attr.aria-checked]=\"checked\">\n                <span class=\"p-checkbox-icon\" [ngClass]=\"{'pi pi-check':checked}\"></span>\n            </div>\n        </div>\n    ",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: TreeTable }, { type: TreeTableService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { boxViewChild: [{
            type: core.ViewChild,
            args: ['box']
        }] }); })();
        return TTHeaderCheckbox;
    }());
    TTHeaderCheckbox.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TreeTableService },
        { type: core.ChangeDetectorRef }
    ]; };
    TTHeaderCheckbox.propDecorators = {
        boxViewChild: [{ type: core.ViewChild, args: ['box',] }]
    };
    var TTEditableColumn = /** @class */ (function () {
        function TTEditableColumn(tt, el, zone) {
            this.tt = tt;
            this.el = el;
            this.zone = zone;
        }
        TTEditableColumn.prototype.ngAfterViewInit = function () {
            if (this.isEnabled()) {
                dom.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
            }
        };
        TTEditableColumn.prototype.onClick = function (event) {
            if (this.isEnabled()) {
                this.tt.editingCellClick = true;
                if (this.tt.editingCell) {
                    if (this.tt.editingCell !== this.el.nativeElement) {
                        if (!this.tt.isEditingCellValid()) {
                            return;
                        }
                        dom.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                        this.openCell();
                    }
                }
                else {
                    this.openCell();
                }
            }
        };
        TTEditableColumn.prototype.openCell = function () {
            var _this = this;
            this.tt.updateEditingCell(this.el.nativeElement);
            dom.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
            this.tt.onEditInit.emit({ field: this.field, data: this.data });
            this.tt.editingCellClick = true;
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    var focusable = dom.DomHandler.findSingle(_this.el.nativeElement, 'input, textarea');
                    if (focusable) {
                        focusable.focus();
                    }
                }, 50);
            });
        };
        TTEditableColumn.prototype.closeEditingCell = function () {
            dom.DomHandler.removeClass(this.tt.editingCell, 'p-checkbox-icon');
            this.tt.editingCell = null;
            this.tt.unbindDocumentEditListener();
        };
        TTEditableColumn.prototype.onKeyDown = function (event) {
            if (this.isEnabled()) {
                //enter
                if (event.keyCode == 13) {
                    if (this.tt.isEditingCellValid()) {
                        dom.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                        this.closeEditingCell();
                        this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                    }
                    event.preventDefault();
                }
                //escape
                else if (event.keyCode == 27) {
                    if (this.tt.isEditingCellValid()) {
                        dom.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
                        this.closeEditingCell();
                        this.tt.onEditCancel.emit({ field: this.field, data: this.data });
                    }
                    event.preventDefault();
                }
                //tab
                else if (event.keyCode == 9) {
                    this.tt.onEditComplete.emit({ field: this.field, data: this.data });
                    if (event.shiftKey)
                        this.moveToPreviousCell(event);
                    else
                        this.moveToNextCell(event);
                }
            }
        };
        TTEditableColumn.prototype.findCell = function (element) {
            if (element) {
                var cell = element;
                while (cell && !dom.DomHandler.hasClass(cell, 'p-cell-editing')) {
                    cell = cell.parentElement;
                }
                return cell;
            }
            else {
                return null;
            }
        };
        TTEditableColumn.prototype.moveToPreviousCell = function (event) {
            var currentCell = this.findCell(event.target);
            var row = currentCell.parentElement;
            var targetCell = this.findPreviousEditableColumn(currentCell);
            if (targetCell) {
                dom.DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        };
        TTEditableColumn.prototype.moveToNextCell = function (event) {
            var currentCell = this.findCell(event.target);
            var row = currentCell.parentElement;
            var targetCell = this.findNextEditableColumn(currentCell);
            if (targetCell) {
                dom.DomHandler.invokeElementMethod(targetCell, 'click');
                event.preventDefault();
            }
        };
        TTEditableColumn.prototype.findPreviousEditableColumn = function (cell) {
            var prevCell = cell.previousElementSibling;
            if (!prevCell) {
                var previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
                if (previousRow) {
                    prevCell = previousRow.lastElementChild;
                }
            }
            if (prevCell) {
                if (dom.DomHandler.hasClass(prevCell, 'p-editable-column'))
                    return prevCell;
                else
                    return this.findPreviousEditableColumn(prevCell);
            }
            else {
                return null;
            }
        };
        TTEditableColumn.prototype.findNextEditableColumn = function (cell) {
            var nextCell = cell.nextElementSibling;
            if (!nextCell) {
                var nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
                if (nextRow) {
                    nextCell = nextRow.firstElementChild;
                }
            }
            if (nextCell) {
                if (dom.DomHandler.hasClass(nextCell, 'p-editable-column'))
                    return nextCell;
                else
                    return this.findNextEditableColumn(nextCell);
            }
            else {
                return null;
            }
        };
        TTEditableColumn.prototype.isEnabled = function () {
            return this.ttEditableColumnDisabled !== true;
        };
TTEditableColumn.ɵfac = function TTEditableColumn_Factory(t) { return new (t || TTEditableColumn)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTEditableColumn.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTEditableColumn, selectors: [["", "ttEditableColumn", ""]], hostBindings: function TTEditableColumn_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function TTEditableColumn_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function TTEditableColumn_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { data: ["ttEditableColumn", "data"], field: ["ttEditableColumnField", "field"], ttEditableColumnDisabled: "ttEditableColumnDisabled" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTEditableColumn, [{
        type: core.Directive,
        args: [{
                selector: '[ttEditableColumn]'
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onClick: [{
            type: core.HostListener,
            args: ['click', ['$event']]
        }], onKeyDown: [{
            type: core.HostListener,
            args: ['keydown', ['$event']]
        }], data: [{
            type: core.Input,
            args: ["ttEditableColumn"]
        }], field: [{
            type: core.Input,
            args: ["ttEditableColumnField"]
        }], ttEditableColumnDisabled: [{
            type: core.Input
        }] }); })();
        return TTEditableColumn;
    }());
    TTEditableColumn.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    TTEditableColumn.propDecorators = {
        data: [{ type: core.Input, args: ["ttEditableColumn",] }],
        field: [{ type: core.Input, args: ["ttEditableColumnField",] }],
        ttEditableColumnDisabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    var TreeTableCellEditor = /** @class */ (function () {
        function TreeTableCellEditor(tt, editableColumn) {
            this.tt = tt;
            this.editableColumn = editableColumn;
        }
        TreeTableCellEditor.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'input':
                        _this.inputTemplate = item.template;
                        break;
                    case 'output':
                        _this.outputTemplate = item.template;
                        break;
                }
            });
        };
TreeTableCellEditor.ɵfac = function TreeTableCellEditor_Factory(t) { return new (t || TreeTableCellEditor)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(TTEditableColumn)); };
TreeTableCellEditor.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTableCellEditor, selectors: [["p-treeTableCellEditor"]], contentQueries: function TreeTableCellEditor_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TreeTableCellEditor_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TreeTableCellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, TreeTableCellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableCellEditor, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTableCellEditor',
                template: "\n        <ng-container *ngIf=\"tt.editingCell === editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }, { type: TTEditableColumn }]; }, { templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return TreeTableCellEditor;
    }());
    TreeTableCellEditor.ctorParameters = function () { return [
        { type: TreeTable },
        { type: TTEditableColumn }
    ]; };
    TreeTableCellEditor.propDecorators = {
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var TTRow = /** @class */ (function () {
        function TTRow(tt, el, zone) {
            this.tt = tt;
            this.el = el;
            this.zone = zone;
        }
        TTRow.prototype.onKeyDown = function (event) {
            switch (event.which) {
                //down arrow
                case 40:
                    var nextRow = this.el.nativeElement.nextElementSibling;
                    if (nextRow) {
                        nextRow.focus();
                    }
                    event.preventDefault();
                    break;
                //down arrow
                case 38:
                    var prevRow = this.el.nativeElement.previousElementSibling;
                    if (prevRow) {
                        prevRow.focus();
                    }
                    event.preventDefault();
                    break;
                //left arrow
                case 37:
                    if (this.rowNode.node.expanded) {
                        this.tt.toggleRowIndex = dom.DomHandler.index(this.el.nativeElement);
                        this.rowNode.node.expanded = false;
                        this.tt.onNodeCollapse.emit({
                            originalEvent: event,
                            node: this.rowNode.node
                        });
                        this.tt.updateSerializedValue();
                        this.tt.tableService.onUIUpdate(this.tt.value);
                        this.restoreFocus();
                    }
                    break;
                //right arrow
                case 39:
                    if (!this.rowNode.node.expanded) {
                        this.tt.toggleRowIndex = dom.DomHandler.index(this.el.nativeElement);
                        this.rowNode.node.expanded = true;
                        this.tt.onNodeExpand.emit({
                            originalEvent: event,
                            node: this.rowNode.node
                        });
                        this.tt.updateSerializedValue();
                        this.tt.tableService.onUIUpdate(this.tt.value);
                        this.restoreFocus();
                    }
                    break;
            }
        };
        TTRow.prototype.restoreFocus = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    var row = dom.DomHandler.findSingle(_this.tt.containerViewChild.nativeElement, '.p-treetable-tbody').children[_this.tt.toggleRowIndex];
                    if (row) {
                        row.focus();
                    }
                }, 25);
            });
        };
TTRow.ɵfac = function TTRow_Factory(t) { return new (t || TTRow)(ɵngcc0.ɵɵdirectiveInject(TreeTable), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
TTRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TTRow, selectors: [["", "ttRow", ""]], hostVars: 1, hostBindings: function TTRow_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function TTRow_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", "0");
    } }, inputs: { rowNode: ["ttRow", "rowNode"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TTRow, [{
        type: core.Directive,
        args: [{
                selector: '[ttRow]',
                host: {
                    '[attr.tabindex]': '"0"'
                }
            }]
    }], function () { return [{ type: TreeTable }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onKeyDown: [{
            type: core.HostListener,
            args: ['keydown', ['$event']]
        }], rowNode: [{
            type: core.Input,
            args: ['ttRow']
        }] }); })();
        return TTRow;
    }());
    TTRow.ctorParameters = function () { return [
        { type: TreeTable },
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    TTRow.propDecorators = {
        rowNode: [{ type: core.Input, args: ['ttRow',] }],
        onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };
    var TreeTableToggler = /** @class */ (function () {
        function TreeTableToggler(tt) {
            this.tt = tt;
        }
        TreeTableToggler.prototype.onClick = function (event) {
            this.rowNode.node.expanded = !this.rowNode.node.expanded;
            if (this.rowNode.node.expanded) {
                this.tt.onNodeExpand.emit({
                    originalEvent: event,
                    node: this.rowNode.node
                });
            }
            else {
                this.tt.onNodeCollapse.emit({
                    originalEvent: event,
                    node: this.rowNode.node
                });
            }
            this.tt.updateSerializedValue();
            this.tt.tableService.onUIUpdate(this.tt.value);
            event.preventDefault();
        };
TreeTableToggler.ɵfac = function TreeTableToggler_Factory(t) { return new (t || TreeTableToggler)(ɵngcc0.ɵɵdirectiveInject(TreeTable)); };
TreeTableToggler.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeTableToggler, selectors: [["p-treeTableToggler"]], inputs: { rowNode: "rowNode" }, decls: 2, vars: 5, consts: [["type", "button", "tabindex", "-1", "pRipple", "", 1, "p-treetable-toggler", "p-link", 3, "click"], [3, "ngClass"]], template: function TreeTableToggler_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function TreeTableToggler_Template_button_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelement(1, "i", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("visibility", ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden")("margin-left", ctx.rowNode.level * 16 + "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.rowNode.node.expanded ? "pi pi-fw pi-chevron-down" : "pi pi-fw pi-chevron-right");
    } }, directives: [ɵngcc4.Ripple, ɵngcc1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableToggler, [{
        type: core.Component,
        args: [{
                selector: 'p-treeTableToggler',
                template: "\n        <button type=\"button\" class=\"p-treetable-toggler p-link\" (click)=\"onClick($event)\" tabindex=\"-1\" pRipple\n            [style.visibility]=\"rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'\" [style.marginLeft]=\"rowNode.level * 16 + 'px'\">\n            <i [ngClass]=\"rowNode.node.expanded ? 'pi pi-fw pi-chevron-down' : 'pi pi-fw pi-chevron-right'\"></i>\n        </button>\n    ",
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: TreeTable }]; }, { rowNode: [{
            type: core.Input
        }] }); })();
        return TreeTableToggler;
    }());
    TreeTableToggler.ctorParameters = function () { return [
        { type: TreeTable }
    ]; };
    TreeTableToggler.propDecorators = {
        rowNode: [{ type: core.Input }]
    };
    var TreeTableModule = /** @class */ (function () {
        function TreeTableModule() {
        }
TreeTableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeTableModule });
TreeTableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TreeTableModule_Factory(t) { return new (t || TreeTableModule)(); }, imports: [[common.CommonModule, paginator.PaginatorModule, scrolling.ScrollingModule, ripple.RippleModule], ɵngcc5.SharedModule, ɵngcc3.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeTableModule, { declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor], imports: [ɵngcc1.CommonModule, ɵngcc2.PaginatorModule, ɵngcc3.ScrollingModule, ɵngcc4.RippleModule], exports: [TreeTable, ɵngcc5.SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, ɵngcc3.ScrollingModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeTableModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, paginator.PaginatorModule, scrolling.ScrollingModule, ripple.RippleModule],
                exports: [TreeTable, api.SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, scrolling.ScrollingModule],
                declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
            }]
    }], function () { return []; }, null); })();
        return TreeTableModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TTBody = TTBody;
    exports.TTCheckbox = TTCheckbox;
    exports.TTContextMenuRow = TTContextMenuRow;
    exports.TTEditableColumn = TTEditableColumn;
    exports.TTHeaderCheckbox = TTHeaderCheckbox;
    exports.TTReorderableColumn = TTReorderableColumn;
    exports.TTResizableColumn = TTResizableColumn;
    exports.TTRow = TTRow;
    exports.TTScrollableView = TTScrollableView;
    exports.TTSelectableRow = TTSelectableRow;
    exports.TTSelectableRowDblClick = TTSelectableRowDblClick;
    exports.TTSortIcon = TTSortIcon;
    exports.TTSortableColumn = TTSortableColumn;
    exports.TreeTable = TreeTable;
    exports.TreeTableCellEditor = TreeTableCellEditor;
    exports.TreeTableModule = TreeTableModule;
    exports.TreeTableService = TreeTableService;
    exports.TreeTableToggler = TreeTableToggler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-treetable.umd.js.map