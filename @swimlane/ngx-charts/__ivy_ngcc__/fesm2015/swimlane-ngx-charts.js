import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, Component, ViewEncapsulation, ElementRef, Renderer2, Inject, PLATFORM_ID, Input, ViewChild, HostBinding, HostListener, EventEmitter, ChangeDetectionStrategy, Output, Directive, NgZone, ChangeDetectorRef, NgModule, ViewContainerRef, ContentChild } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomPortalHost, ComponentPortal } from '@angular/cdk/portal';
import { __decorate } from 'tslib';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { select } from 'd3-selection';
import { brushX } from 'd3-brush';
import { scaleTime, scaleLinear, scalePoint, scaleQuantile, scaleOrdinal, scaleBand } from 'd3-scale';
import { DomSanitizer } from '@angular/platform-browser';
import { curveLinear, area, line, curveCardinalClosed, lineRadial, arc, pie } from 'd3-shape';
import { range, min, max } from 'd3-array';
import { interpolate } from 'd3-interpolate';
import { format } from 'd3-format';
import { rgb } from 'd3-color';
import { treemap, stratify } from 'd3-hierarchy';
import { timeFormat } from 'd3-time-format';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/platform-browser';

const _c0 = ["caretElm"];
function TooltipContentComponent_span_4_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { model: a0 }; };
function TooltipContentComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, TooltipContentComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r1.context));
} }
function TooltipContentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.title, ɵngcc0.ɵɵsanitizeHtml);
} }
function ChartComponent_ngx_charts_scale_legend_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelement(0, "ngx-charts-scale-legend", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("horizontal", ctx_r0.legendOptions && ctx_r0.legendOptions.position === "below")("valueRange", ctx_r0.legendOptions.domain)("colors", ctx_r0.legendOptions.colors)("height", ctx_r0.view[1])("width", ctx_r0.legendWidth);
} }
function ChartComponent_ngx_charts_legend_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "ngx-charts-legend", 5);
    ɵngcc0.ɵɵlistener("labelClick", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.legendLabelClick.emit($event); })("labelActivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelActivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.legendLabelActivate.emit($event); })("labelDeactivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelDeactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.legendLabelDeactivate.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("horizontal", ctx_r1.legendOptions && ctx_r1.legendOptions.position === "below")("data", ctx_r1.legendOptions.domain)("title", ctx_r1.legendOptions.title)("colors", ctx_r1.legendOptions.colors)("height", ctx_r1.view[1])("width", ctx_r1.legendWidth)("activeEntries", ctx_r1.activeEntries);
} }
const _c2 = ["*"];
const _c3 = ["ngx-charts-axis-label", ""];
const _c4 = ["ticksel"];
const _c5 = ["ngx-charts-x-axis-ticks", ""];
function XAxisTicksComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 3);
    ɵngcc0.ɵɵelementStart(1, "title");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "text", 4);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r1.tickTransform(tick_r3));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.tickFormat(tick_r3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("font-size", "12px");
    ɵngcc0.ɵɵattribute("text-anchor", ctx_r1.textAnchor)("transform", ctx_r1.textTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.tickTrim(ctx_r1.tickFormat(tick_r3)), " ");
} }
function XAxisTicksComponent__svg_g_3__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "line", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("transform", ctx_r5.gridLineTransform());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("y1", 0 - ctx_r5.gridLineHeight);
} }
function XAxisTicksComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, XAxisTicksComponent__svg_g_3__svg_g_1_Template, 2, 2, "g", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r2.tickTransform(tick_r4));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showGridLines);
} }
const _c6 = ["ngx-charts-x-axis", ""];
function XAxisComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function XAxisComponent__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.emitTicksHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("trimTicks", ctx_r0.trimTicks)("rotateTicks", ctx_r0.rotateTicks)("maxTickLength", ctx_r0.maxTickLength)("tickFormatting", ctx_r0.tickFormatting)("tickArguments", ctx_r0.tickArguments)("tickStroke", ctx_r0.tickStroke)("scale", ctx_r0.xScale)("orient", ctx_r0.xOrient)("showGridLines", ctx_r0.showGridLines)("gridLineHeight", ctx_r0.dims.height)("width", ctx_r0.dims.width)("tickValues", ctx_r0.ticks);
} }
function XAxisComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("label", ctx_r1.labelText)("offset", ctx_r1.labelOffset)("orient", "bottom")("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
} }
const _c7 = ["ngx-charts-y-axis-ticks", ""];
function YAxisTicksComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 4);
    ɵngcc0.ɵɵelementStart(1, "title");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "text", 5);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r1.transform(tick_r5));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.tickFormat(tick_r5));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("font-size", "12px");
    ɵngcc0.ɵɵattribute("dy", ctx_r1.dy)("x", ctx_r1.x1)("y", ctx_r1.y1)("text-anchor", ctx_r1.textAnchor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.tickTrim(ctx_r1.tickFormat(tick_r5)), " ");
} }
function YAxisTicksComponent__svg_path_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "path", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("d", ctx_r2.referenceAreaPath)("transform", ctx_r2.gridLineTransform());
} }
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "line", 9);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("x2", ctx_r8.gridLineWidth);
} }
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "line", 9);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵattribute("x2", 0 - ctx_r9.gridLineWidth);
} }
function YAxisTicksComponent__svg_g_4__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template, 1, 1, "line", 8);
    ɵngcc0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template, 1, 1, "line", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("transform", ctx_r7.gridLineTransform());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.orient === "left");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.orient === "right");
} }
function YAxisTicksComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1_Template, 3, 3, "g", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r6 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r3.transform(tick_r6));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.showGridLines);
} }
function YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "title");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "text", 11);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const refLine_r10 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r12.tickTrim(ctx_r12.tickFormat(refLine_r10.value)));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("dy", ctx_r12.dy)("y", 0 - 6)("x", ctx_r12.gridLineWidth)("text-anchor", ctx_r12.textAnchor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", refLine_r10.name, " ");
} }
function YAxisTicksComponent__svg_g_5__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "line", 10);
    ɵngcc0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template, 5, 6, "g", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const refLine_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r11.transform(refLine_r10.value));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("x2", ctx_r11.gridLineWidth)("transform", ctx_r11.gridLineTransform());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.showRefLabels);
} }
function YAxisTicksComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_5__svg_g_1_Template, 3, 4, "g", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.showRefLines);
} }
const _c8 = ["ngx-charts-y-axis", ""];
function YAxisComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function YAxisComponent__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.emitTicksWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("trimTicks", ctx_r0.trimTicks)("maxTickLength", ctx_r0.maxTickLength)("tickFormatting", ctx_r0.tickFormatting)("tickArguments", ctx_r0.tickArguments)("tickValues", ctx_r0.ticks)("tickStroke", ctx_r0.tickStroke)("scale", ctx_r0.yScale)("orient", ctx_r0.yOrient)("showGridLines", ctx_r0.showGridLines)("gridLineWidth", ctx_r0.dims.width)("referenceLines", ctx_r0.referenceLines)("showRefLines", ctx_r0.showRefLines)("showRefLabels", ctx_r0.showRefLabels)("height", ctx_r0.dims.height);
} }
function YAxisComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("label", ctx_r1.labelText)("offset", ctx_r1.labelOffset)("orient", ctx_r1.yOrient)("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
} }
const _c9 = ["ngx-charts-circle-series", ""];
function CircleSeriesComponent__svg_g_0__svg_rect_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "rect", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("x", ctx_r1.circle.cx - ctx_r1.circle.radius)("y", ctx_r1.circle.cy)("width", ctx_r1.circle.radius * 2)("height", ctx_r1.circle.height)("fill", ctx_r1.gradientFill);
} }
const _c10 = function (a0) { return { name: a0 }; };
function CircleSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "defs");
    ɵngcc0.ɵɵelement(2, "g", 1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, CircleSeriesComponent__svg_g_0__svg_rect_3_Template, 1, 6, "rect", 2);
    ɵngcc0.ɵɵelementStart(4, "g", 3);
    ɵngcc0.ɵɵlistener("select", function CircleSeriesComponent__svg_g_0_Template__svg_g_select_4_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick(ctx_r2.circle.data); })("activate", function CircleSeriesComponent__svg_g_0_Template__svg_g_activate_4_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.activateCircle(); })("deactivate", function CircleSeriesComponent__svg_g_0_Template__svg_g_deactivate_4_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.deactivateCircle(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("name", ctx_r0.gradientId)("stops", ctx_r0.circle.gradientStops);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.barVisible && ctx_r0.type === "standard");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("active", ctx_r0.isActive(ɵngcc0.ɵɵpureFunction1(18, _c10, ctx_r0.circle.seriesName)));
    ɵngcc0.ɵɵproperty("cx", ctx_r0.circle.cx)("cy", ctx_r0.circle.cy)("r", ctx_r0.circle.radius)("fill", ctx_r0.circle.color)("pointerEvents", ctx_r0.circle.value === 0 ? "none" : "all")("data", ctx_r0.circle.value)("classNames", ctx_r0.circle.classNames)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(ctx_r0.circle))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", ctx_r0.circle.data);
} }
const _c11 = ["ngx-charts-circle", ""];
const _c12 = ["ngx-charts-grid-panel", ""];
const _c13 = ["ngx-charts-grid-panel-series", ""];
function GridPanelSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 1);
} if (rf & 2) {
    const gridPanel_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("grid-panel", true)("odd", gridPanel_r1.class === "odd")("even", gridPanel_r1.class === "even");
    ɵngcc0.ɵɵproperty("height", gridPanel_r1.height)("width", gridPanel_r1.width)("x", gridPanel_r1.x)("y", gridPanel_r1.y);
} }
const _c14 = ["ngx-charts-svg-linear-gradient", ""];
function SvgLinearGradientComponent__svg_stop_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    ɵngcc0.ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    ɵngcc0.ɵɵattribute("offset", stop_r1.offset + "%");
} }
const _c15 = ["ngx-charts-svg-radial-gradient", ""];
function SvgRadialGradientComponent__svg_stop_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    ɵngcc0.ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    ɵngcc0.ɵɵattribute("offset", stop_r1.offset + "%");
} }
const _c16 = ["ngx-charts-area", ""];
function AreaComponent__svg_defs_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelement(1, "g", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
const _c17 = ["ngx-charts-count-up", ""];
const _c18 = ["tooltipAnchor"];
const _c19 = ["ngx-charts-tooltip-area", ""];
function TooltipArea__svg_ng_template_2__xhtml_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelement(1, "span", 7);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tooltipItem_r5 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("background-color", tooltipItem_r5.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.getToolTipText(tooltipItem_r5), " ");
} }
function TooltipArea__svg_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtemplate(1, TooltipArea__svg_ng_template_2__xhtml_div_1_Template, 3, 3, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const model_r3 = ctx.model;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", model_r3);
} }
const _c20 = ["ngx-charts-timeline", ""];
function LegendComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "header", 4);
    ɵngcc0.ɵɵelementStart(1, "span", 5);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
function LegendComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelementStart(1, "ngx-charts-legend-entry", 7);
    ɵngcc0.ɵɵlistener("select", function LegendComponent_li_4_Template_ngx_charts_legend_entry_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.labelClick.emit($event); })("activate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activate($event); })("deactivate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.deactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("label", entry_r2.label)("formattedLabel", entry_r2.formattedLabel)("color", entry_r2.color)("isActive", ctx_r1.isActive(entry_r2));
} }
function AdvancedLegendComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("countTo", ctx_r0.roundedTotal)("valueFormatting", ctx_r0.valueFormatting);
} }
function AdvancedLegendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.valueFormatting ? ctx_r1.valueFormatting(ctx_r1.roundedTotal) : ctx_r1.defaultValueFormatting(ctx_r1.roundedTotal), " ");
} }
function AdvancedLegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16);
} if (rf & 2) {
    const legendItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("countTo", legendItem_r3._value)("valueFormatting", ctx_r4.valueFormatting);
} }
function AdvancedLegendComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.valueFormatting ? ctx_r5.valueFormatting(legendItem_r3.value) : ctx_r5.defaultValueFormatting(legendItem_r3.value), " ");
} }
function AdvancedLegendComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 18);
} if (rf & 2) {
    const legendItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("countTo", legendItem_r3.percentage)("countSuffix", "%");
} }
function AdvancedLegendComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", legendItem_r3.percentage.toLocaleString(), "%");
} }
function AdvancedLegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵlistener("mouseenter", function AdvancedLegendComponent_div_7_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const legendItem_r3 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.activate.emit(legendItem_r3.data); })("mouseleave", function AdvancedLegendComponent_div_7_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const legendItem_r3 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.deactivate.emit(legendItem_r3.data); })("click", function AdvancedLegendComponent_div_7_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const legendItem_r3 = ctx.$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.select.emit(legendItem_r3.data); });
    ɵngcc0.ɵɵelement(1, "div", 10);
    ɵngcc0.ɵɵtemplate(2, AdvancedLegendComponent_div_7_div_2_Template, 1, 2, "div", 11);
    ɵngcc0.ɵɵtemplate(3, AdvancedLegendComponent_div_7_div_3_Template, 2, 1, "div", 12);
    ɵngcc0.ɵɵelementStart(4, "div", 13);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, AdvancedLegendComponent_div_7_div_6_Template, 1, 2, "div", 14);
    ɵngcc0.ɵɵtemplate(7, AdvancedLegendComponent_div_7_div_7_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("border-left-color", legendItem_r3.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.animations);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.animations);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(legendItem_r3.displayLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.animations);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.animations);
} }
const _c21 = ["tooltipTemplate"];
const _c22 = ["seriesTooltipTemplate"];
function AreaChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function AreaChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 8);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function AreaChartComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("baseValue", ctx_r2.baseValue)("colors", ctx_r2.colors)("data", series_r9)("activeEntries", ctx_r2.activeEntries)("scaleType", ctx_r2.scaleType)("gradient", ctx_r2.gradient)("curve", ctx_r2.curve)("animations", ctx_r2.animations);
} }
function AreaChartComponent__svg_g_9__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 13);
    ɵngcc0.ɵɵlistener("select", function AreaChartComponent__svg_g_9__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const series_r11 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onClick($event, series_r11); })("activate", function AreaChartComponent__svg_g_9__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onActivate($event); })("deactivate", function AreaChartComponent__svg_g_9__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r10.xScale)("yScale", ctx_r10.yScale)("colors", ctx_r10.colors)("activeEntries", ctx_r10.activeEntries)("data", series_r11)("scaleType", ctx_r10.scaleType)("visibleValue", ctx_r10.hoveredVertical)("tooltipDisabled", ctx_r10.tooltipDisabled)("tooltipTemplate", ctx_r10.tooltipTemplate);
} }
function AreaChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 10);
    ɵngcc0.ɵɵlistener("mouseleave", function AreaChartComponent__svg_g_9_Template__svg_g_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.hideCircles(); });
    ɵngcc0.ɵɵelementStart(1, "g", 11);
    ɵngcc0.ɵɵlistener("hover", function AreaChartComponent__svg_g_9_Template__svg_g_hover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateHoveredVertical($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, AreaChartComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dims", ctx_r3.dims)("xSet", ctx_r3.xSet)("xScale", ctx_r3.xScale)("yScale", ctx_r3.yScale)("results", ctx_r3.results)("colors", ctx_r3.colors)("tooltipDisabled", ctx_r3.tooltipDisabled)("tooltipTemplate", ctx_r3.seriesTooltipTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.results);
} }
function AreaChartComponent__svg_g_10__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r19.timelineXScale)("yScale", ctx_r19.timelineYScale)("baseValue", ctx_r19.baseValue)("colors", ctx_r19.colors)("data", series_r20)("scaleType", ctx_r19.scaleType)("gradient", ctx_r19.gradient)("curve", ctx_r19.curve)("animations", ctx_r19.animations);
} }
const _c23 = function (a0, a1) { return [a0, a1]; };
function AreaChartComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 14);
    ɵngcc0.ɵɵlistener("onDomainChange", function AreaChartComponent__svg_g_10_Template__svg_g_onDomainChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.updateDomain($event); });
    ɵngcc0.ɵɵtemplate(1, AreaChartComponent__svg_g_10__svg_g_1_Template, 2, 9, "g", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("results", ctx_r4.results)("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx_r4.timelineWidth, ctx_r4.height))("height", ctx_r4.timelineHeight)("scheme", ctx_r4.scheme)("customColors", ctx_r4.customColors)("legend", ctx_r4.legend)("scaleType", ctx_r4.scaleType);
    ɵngcc0.ɵɵattribute("transform", ctx_r4.timelineTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.results)("ngForTrackBy", ctx_r4.trackBy);
} }
function AreaChartNormalizedComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartNormalizedComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function AreaChartNormalizedComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 8);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartNormalizedComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function AreaChartNormalizedComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("colors", ctx_r2.colors)("data", series_r9)("scaleType", ctx_r2.scaleType)("activeEntries", ctx_r2.activeEntries)("gradient", ctx_r2.gradient)("curve", ctx_r2.curve)("animations", ctx_r2.animations);
} }
function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 13);
    ɵngcc0.ɵɵlistener("select", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const series_r11 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onClick($event, series_r11); })("activate", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onActivate($event); })("deactivate", function AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r10.xScale)("yScale", ctx_r10.yScale)("colors", ctx_r10.colors)("activeEntries", ctx_r10.activeEntries)("data", series_r11)("scaleType", ctx_r10.scaleType)("visibleValue", ctx_r10.hoveredVertical)("tooltipDisabled", ctx_r10.tooltipDisabled)("tooltipTemplate", ctx_r10.tooltipTemplate);
} }
function AreaChartNormalizedComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 10);
    ɵngcc0.ɵɵlistener("mouseleave", function AreaChartNormalizedComponent__svg_g_9_Template__svg_g_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.hideCircles(); });
    ɵngcc0.ɵɵelementStart(1, "g", 11);
    ɵngcc0.ɵɵlistener("hover", function AreaChartNormalizedComponent__svg_g_9_Template__svg_g_hover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateHoveredVertical($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, AreaChartNormalizedComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dims", ctx_r3.dims)("xSet", ctx_r3.xSet)("xScale", ctx_r3.xScale)("yScale", ctx_r3.yScale)("results", ctx_r3.results)("colors", ctx_r3.colors)("showPercentage", true)("tooltipDisabled", ctx_r3.tooltipDisabled)("tooltipTemplate", ctx_r3.seriesTooltipTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.results);
} }
function AreaChartNormalizedComponent__svg_g_10__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r19.timelineXScale)("yScale", ctx_r19.timelineYScale)("colors", ctx_r19.colors)("data", series_r20)("scaleType", ctx_r19.scaleType)("gradient", ctx_r19.gradient)("curve", ctx_r19.curve)("animations", ctx_r19.animations);
} }
function AreaChartNormalizedComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 14);
    ɵngcc0.ɵɵlistener("onDomainChange", function AreaChartNormalizedComponent__svg_g_10_Template__svg_g_onDomainChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.updateDomain($event); });
    ɵngcc0.ɵɵtemplate(1, AreaChartNormalizedComponent__svg_g_10__svg_g_1_Template, 2, 8, "g", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("results", ctx_r4.results)("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx_r4.timelineWidth, ctx_r4.height))("height", ctx_r4.timelineHeight)("scheme", ctx_r4.scheme)("customColors", ctx_r4.customColors)("legend", ctx_r4.legend)("scaleType", ctx_r4.scaleType);
    ɵngcc0.ɵɵattribute("transform", ctx_r4.timelineTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.results)("ngForTrackBy", ctx_r4.trackBy);
} }
function AreaChartStackedComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartStackedComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function AreaChartStackedComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 8);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function AreaChartStackedComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function AreaChartStackedComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("colors", ctx_r2.colors)("data", series_r9)("scaleType", ctx_r2.scaleType)("gradient", ctx_r2.gradient)("activeEntries", ctx_r2.activeEntries)("curve", ctx_r2.curve)("animations", ctx_r2.animations);
} }
function AreaChartStackedComponent__svg_g_9__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 12);
    ɵngcc0.ɵɵlistener("select", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const series_r11 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onClick($event, series_r11); })("activate", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onActivate($event); })("deactivate", function AreaChartStackedComponent__svg_g_9__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r10.xScale)("yScale", ctx_r10.yScale)("colors", ctx_r10.colors)("activeEntries", ctx_r10.activeEntries)("data", series_r11)("scaleType", ctx_r10.scaleType)("visibleValue", ctx_r10.hoveredVertical)("tooltipDisabled", ctx_r10.tooltipDisabled)("tooltipTemplate", ctx_r10.tooltipTemplate);
} }
function AreaChartStackedComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 10);
    ɵngcc0.ɵɵlistener("mouseleave", function AreaChartStackedComponent__svg_g_9_Template__svg_g_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.hideCircles(); });
    ɵngcc0.ɵɵelementStart(1, "g", 11);
    ɵngcc0.ɵɵlistener("hover", function AreaChartStackedComponent__svg_g_9_Template__svg_g_hover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateHoveredVertical($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, AreaChartStackedComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dims", ctx_r3.dims)("xSet", ctx_r3.xSet)("xScale", ctx_r3.xScale)("yScale", ctx_r3.yScale)("results", ctx_r3.results)("colors", ctx_r3.colors)("tooltipDisabled", ctx_r3.tooltipDisabled)("tooltipTemplate", ctx_r3.seriesTooltipTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.results)("ngForTrackBy", ctx_r3.trackBy);
} }
function AreaChartStackedComponent__svg_g_10__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r19.timelineXScale)("yScale", ctx_r19.timelineYScale)("colors", ctx_r19.colors)("data", series_r20)("scaleType", ctx_r19.scaleType)("gradient", ctx_r19.gradient)("curve", ctx_r19.curve)("animations", ctx_r19.animations);
} }
function AreaChartStackedComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 13);
    ɵngcc0.ɵɵlistener("onDomainChange", function AreaChartStackedComponent__svg_g_10_Template__svg_g_onDomainChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.updateDomain($event); });
    ɵngcc0.ɵɵtemplate(1, AreaChartStackedComponent__svg_g_10__svg_g_1_Template, 2, 8, "g", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("results", ctx_r4.results)("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx_r4.timelineWidth, ctx_r4.height))("height", ctx_r4.timelineHeight)("scheme", ctx_r4.scheme)("customColors", ctx_r4.customColors)("legend", ctx_r4.legend)("scaleType", ctx_r4.scaleType);
    ɵngcc0.ɵɵattribute("transform", ctx_r4.timelineTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.results)("ngForTrackBy", ctx_r4.trackBy);
} }
const _c24 = ["ngx-charts-area-series", ""];
const _c25 = ["ngx-charts-bar", ""];
function BarComponent__svg_defs_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelement(1, "g", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("orientation", ctx_r0.orientation)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
function BarHorizontalComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarHorizontalComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative);
} }
function BarHorizontal2DComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontal2DComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.valueScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarHorizontal2DComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontal2DComponent__svg_g_4_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.groupScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative);
} }
function BarHorizontal2DComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 8);
    ɵngcc0.ɵɵlistener("select", function BarHorizontal2DComponent__svg_g_5_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onClick($event, group_r7); })("activate", function BarHorizontal2DComponent__svg_g_5_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onActivate($event, group_r7); })("deactivate", function BarHorizontal2DComponent__svg_g_5_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDeactivate($event, group_r7); })("dataLabelWidthChanged", function BarHorizontal2DComponent__svg_g_5_Template__svg_g_dataLabelWidthChanged_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const index_r8 = ctx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDataLabelMaxWidthChanged($event, index_r8); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.valueScale)("activeEntries", ctx_r2.activeEntries)("yScale", ctx_r2.innerScale)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("seriesName", group_r7.name)("roundEdges", ctx_r2.roundEdges)("animations", ctx_r2.animations)("showDataLabel", ctx_r2.showDataLabel)("dataLabelFormatting", ctx_r2.dataLabelFormatting)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
function BarHorizontalNormalizedComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarHorizontalNormalizedComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarHorizontalNormalizedComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 7);
    ɵngcc0.ɵɵlistener("select", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onClick($event, group_r7); })("activate", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActivate($event, group_r7); })("deactivate", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onDeactivate($event, group_r7); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("activeEntries", ctx_r2.activeEntries)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
function BarHorizontalStackedComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalStackedComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarHorizontalStackedComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarHorizontalStackedComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("yAxisOffset", ctx_r1.dataLabelMaxWidth.negative);
} }
function BarHorizontalStackedComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 7);
    ɵngcc0.ɵɵlistener("select", function BarHorizontalStackedComponent__svg_g_4_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onClick($event, group_r7); })("activate", function BarHorizontalStackedComponent__svg_g_4_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onActivate($event, group_r7); })("deactivate", function BarHorizontalStackedComponent__svg_g_4_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDeactivate($event, group_r7); })("dataLabelWidthChanged", function BarHorizontalStackedComponent__svg_g_4_Template__svg_g_dataLabelWidthChanged_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const index_r8 = ctx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDataLabelMaxWidthChanged($event, index_r8); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("colors", ctx_r2.colors)("series", group_r7.series)("activeEntries", ctx_r2.activeEntries)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r2.animations)("showDataLabel", ctx_r2.showDataLabel)("dataLabelFormatting", ctx_r2.dataLabelFormatting)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
function BarVerticalComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks)("xAxisOffset", ctx_r0.dataLabelMaxHeight.negative);
} }
function BarVerticalComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarVertical2DComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.groupScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks)("xAxisOffset", ctx_r0.dataLabelMaxHeight.negative);
} }
function BarVertical2DComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_4_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.valueScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarVertical2DComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 8);
    ɵngcc0.ɵɵlistener("select", function BarVertical2DComponent__svg_g_5_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onClick($event, group_r7); })("activate", function BarVertical2DComponent__svg_g_5_Template__svg_g_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onActivate($event, group_r7); })("deactivate", function BarVertical2DComponent__svg_g_5_Template__svg_g_deactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDeactivate($event, group_r7); })("dataLabelHeightChanged", function BarVertical2DComponent__svg_g_5_Template__svg_g_dataLabelHeightChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const index_r8 = ctx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDataLabelMaxHeightChanged($event, index_r8); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active")("activeEntries", ctx_r2.activeEntries)("xScale", ctx_r2.innerScale)("yScale", ctx_r2.valueScale)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("showDataLabel", ctx_r2.showDataLabel)("dataLabelFormatting", ctx_r2.dataLabelFormatting)("seriesName", group_r7.name)("roundEdges", ctx_r2.roundEdges)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
} }
function BarVerticalNormalizedComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalNormalizedComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarVerticalNormalizedComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalNormalizedComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarVerticalNormalizedComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 7);
    ɵngcc0.ɵɵlistener("select", function BarVerticalNormalizedComponent__svg_g_4_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onClick($event, group_r7); })("activate", function BarVerticalNormalizedComponent__svg_g_4_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActivate($event, group_r7); })("deactivate", function BarVerticalNormalizedComponent__svg_g_4_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onDeactivate($event, group_r7); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("activeEntries", ctx_r2.activeEntries)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
function BarVerticalStackedComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalStackedComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks)("xAxisOffset", ctx_r0.dataLabelMaxHeight.negative);
} }
function BarVerticalStackedComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BarVerticalStackedComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarVerticalStackedComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 7);
    ɵngcc0.ɵɵlistener("select", function BarVerticalStackedComponent__svg_g_4_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onClick($event, group_r7); })("activate", function BarVerticalStackedComponent__svg_g_4_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onActivate($event, group_r7); })("deactivate", function BarVerticalStackedComponent__svg_g_4_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const group_r7 = ctx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onDeactivate($event, group_r7); })("dataLabelHeightChanged", function BarVerticalStackedComponent__svg_g_4_Template__svg_g_dataLabelHeightChanged_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const index_r8 = ctx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDataLabelMaxHeightChanged($event, index_r8); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("activeEntries", ctx_r2.activeEntries)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("showDataLabel", ctx_r2.showDataLabel)("dataLabelFormatting", ctx_r2.dataLabelFormatting)("seriesName", group_r7.name)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
const _c26 = ["ngx-charts-series-vertical", ""];
function SeriesVerticalComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵlistener("select", function SeriesVerticalComponent__svg_g_0_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick($event); })("activate", function SeriesVerticalComponent__svg_g_0_Template__svg_g_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activate.emit($event); })("deactivate", function SeriesVerticalComponent__svg_g_0_Template__svg_g_deactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.deactivate.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active")("@.disabled", !ctx_r0.animations)("width", bar_r2.width)("height", bar_r2.height)("x", bar_r2.x)("y", bar_r2.y)("fill", bar_r2.color)("stops", bar_r2.gradientStops)("data", bar_r2.data)("orientation", "vertical")("roundEdges", bar_r2.roundEdges)("gradient", ctx_r0.gradient)("ariaLabel", bar_r2.ariaLabel)("isActive", ctx_r0.isActive(bar_r2.data))("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.tooltipPlacement)("tooltipType", ctx_r0.tooltipType)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : bar_r2.tooltipText)("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", bar_r2.data)("noBarWhenZero", ctx_r0.noBarWhenZero)("animations", ctx_r0.animations);
} }
function SeriesVerticalComponent__svg_g_1__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 4);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function SeriesVerticalComponent__svg_g_1__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const i_r9 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.dataLabelHeightChanged.emit({ size: $event, index: i_r9 }); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r8 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("barX", b_r8.x)("barY", b_r8.y)("barWidth", b_r8.width)("barHeight", b_r8.height)("value", b_r8.total)("valueFormatting", ctx_r7.dataLabelFormatting)("orientation", "vertical");
} }
function SeriesVerticalComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, SeriesVerticalComponent__svg_g_1__svg_g_1_Template, 1, 7, "g", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.barsForDataLabels)("ngForTrackBy", ctx_r1.trackDataLabelBy);
} }
const _c27 = ["ngx-charts-series-horizontal", ""];
function SeriesHorizontal__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵlistener("select", function SeriesHorizontal__svg_g_0_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.click($event); })("activate", function SeriesHorizontal__svg_g_0_Template__svg_g_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activate.emit($event); })("deactivate", function SeriesHorizontal__svg_g_0_Template__svg_g_deactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.deactivate.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active")("width", bar_r2.width)("height", bar_r2.height)("x", bar_r2.x)("y", bar_r2.y)("fill", bar_r2.color)("stops", bar_r2.gradientStops)("data", bar_r2.data)("orientation", "horizontal")("roundEdges", bar_r2.roundEdges)("gradient", ctx_r0.gradient)("isActive", ctx_r0.isActive(bar_r2.data))("ariaLabel", bar_r2.ariaLabel)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.tooltipPlacement)("tooltipType", ctx_r0.tooltipType)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : bar_r2.tooltipText)("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", bar_r2.data)("noBarWhenZero", ctx_r0.noBarWhenZero);
} }
function SeriesHorizontal__svg_g_1__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 4);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function SeriesHorizontal__svg_g_1__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const i_r9 = ctx.index; const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.dataLabelWidthChanged.emit({ size: $event, index: i_r9 }); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r8 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("barX", b_r8.x)("barY", b_r8.y)("barWidth", b_r8.width)("barHeight", b_r8.height)("value", b_r8.total)("valueFormatting", ctx_r7.dataLabelFormatting)("orientation", "horizontal");
} }
function SeriesHorizontal__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, SeriesHorizontal__svg_g_1__svg_g_1_Template, 1, 7, "g", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.barsForDataLabels)("ngForTrackBy", ctx_r1.trackDataLabelBy);
} }
const _c28 = ["ngx-charts-bar-label", ""];
function BubbleChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BubbleChartComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("showGridLines", ctx_r0.showGridLines)("dims", ctx_r0.dims)("xScale", ctx_r0.xScale)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BubbleChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function BubbleChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("showGridLines", ctx_r1.showGridLines)("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BubbleChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 8);
    ɵngcc0.ɵɵlistener("select", function BubbleChartComponent__svg_g_9_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const series_r7 = ctx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onClick($event, series_r7); })("activate", function BubbleChartComponent__svg_g_9_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onActivate($event); })("deactivate", function BubbleChartComponent__svg_g_9_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r7 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("rScale", ctx_r2.rScale)("xScaleType", ctx_r2.xScaleType)("yScaleType", ctx_r2.yScaleType)("xAxisLabel", ctx_r2.xAxisLabel)("yAxisLabel", ctx_r2.yAxisLabel)("colors", ctx_r2.colors)("data", series_r7)("activeEntries", ctx_r2.activeEntries)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate);
} }
const _c29 = ["ngx-charts-bubble-series", ""];
function BubbleSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g");
    ɵngcc0.ɵɵelementStart(2, "g", 1);
    ɵngcc0.ɵɵlistener("select", function BubbleSeriesComponent__svg_g_0_Template__svg_g_select_2_listener() { ɵngcc0.ɵɵrestoreView(_r3); const circle_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick(circle_r1.data); })("activate", function BubbleSeriesComponent__svg_g_0_Template__svg_g_activate_2_listener() { ɵngcc0.ɵɵrestoreView(_r3); const circle_r1 = ctx.$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.activateCircle(circle_r1); })("deactivate", function BubbleSeriesComponent__svg_g_0_Template__svg_g_deactivate_2_listener() { ɵngcc0.ɵɵrestoreView(_r3); const circle_r1 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.deactivateCircle(circle_r1); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const circle_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("transform", circle_r1.transform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("opacity", circle_r1.opacity);
    ɵngcc0.ɵɵclassProp("active", circle_r1.isActive);
    ɵngcc0.ɵɵproperty("@animationState", "active")("cx", 0)("cy", 0)("r", circle_r1.radius)("fill", circle_r1.color)("pointerEvents", "all")("data", circle_r1.value)("classNames", circle_r1.classNames)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(circle_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", circle_r1.data);
} }
const _c30 = ["ngx-charts-heat-map-cell", ""];
function HeatMapCellComponent__svg_defs_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelement(1, "g", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
const _c31 = ["ngx-charts-heat-map-cell-series", ""];
const _c32 = function (a0, a1, a2) { return { series: a0, name: a1, value: a2 }; };
function HeatCellSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 1);
    ɵngcc0.ɵɵlistener("select", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_select_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const c_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick(c_r1.cell); })("activate", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_activate_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const c_r1 = ctx.$implicit; const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.activate.emit(c_r1.cell); })("deactivate", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_deactivate_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const c_r1 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.deactivate.emit(c_r1.cell); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("x", c_r1.x)("y", c_r1.y)("width", c_r1.width)("height", c_r1.height)("fill", c_r1.fill)("data", c_r1.data)("gradient", ctx_r0.gradient)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.tooltipText(c_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", ɵngcc0.ɵɵpureFunction3(14, _c32, c_r1.series, c_r1.label, c_r1.data));
} }
function HeatMapComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 6);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function HeatMapComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function HeatMapComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function HeatMapComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function HeatMapComponent__svg_rect_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "rect");
} if (rf & 2) {
    const rect_r7 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("x", rect_r7.x)("y", rect_r7.y)("rx", rect_r7.rx)("width", rect_r7.width)("height", rect_r7.height)("fill", rect_r7.fill);
} }
const _c33 = ["ngx-charts-line", ""];
function LineChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 7);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.updateXAxisHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function LineChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 8);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("referenceLines", ctx_r1.referenceLines)("showRefLines", ctx_r1.showRefLines)("showRefLabels", ctx_r1.showRefLabels);
} }
function LineChartComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("colors", ctx_r2.colors)("data", series_r9)("activeEntries", ctx_r2.activeEntries)("scaleType", ctx_r2.scaleType)("curve", ctx_r2.curve)("rangeFillOpacity", ctx_r2.rangeFillOpacity)("hasRange", ctx_r2.hasRange)("animations", ctx_r2.animations);
} }
function LineChartComponent__svg_g_9__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 13);
    ɵngcc0.ɵɵlistener("select", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onClick($event); })("activate", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onActivate($event); })("deactivate", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r10.xScale)("yScale", ctx_r10.yScale)("colors", ctx_r10.colors)("data", series_r11)("scaleType", ctx_r10.scaleType)("visibleValue", ctx_r10.hoveredVertical)("activeEntries", ctx_r10.activeEntries)("tooltipDisabled", ctx_r10.tooltipDisabled)("tooltipTemplate", ctx_r10.tooltipTemplate);
} }
function LineChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 10);
    ɵngcc0.ɵɵlistener("mouseleave", function LineChartComponent__svg_g_9_Template__svg_g_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.hideCircles(); });
    ɵngcc0.ɵɵelementStart(1, "g", 11);
    ɵngcc0.ɵɵlistener("hover", function LineChartComponent__svg_g_9_Template__svg_g_hover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateHoveredVertical($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, LineChartComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dims", ctx_r3.dims)("xSet", ctx_r3.xSet)("xScale", ctx_r3.xScale)("yScale", ctx_r3.yScale)("results", ctx_r3.results)("colors", ctx_r3.colors)("tooltipDisabled", ctx_r3.tooltipDisabled)("tooltipTemplate", ctx_r3.seriesTooltipTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.results);
} }
function LineChartComponent__svg_g_10__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelement(1, "g", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("xScale", ctx_r19.timelineXScale)("yScale", ctx_r19.timelineYScale)("colors", ctx_r19.colors)("data", series_r20)("scaleType", ctx_r19.scaleType)("curve", ctx_r19.curve)("hasRange", ctx_r19.hasRange)("animations", ctx_r19.animations);
} }
function LineChartComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 14);
    ɵngcc0.ɵɵlistener("onDomainChange", function LineChartComponent__svg_g_10_Template__svg_g_onDomainChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.updateDomain($event); });
    ɵngcc0.ɵɵtemplate(1, LineChartComponent__svg_g_10__svg_g_1_Template, 2, 8, "g", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("results", ctx_r4.results)("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx_r4.timelineWidth, ctx_r4.height))("height", ctx_r4.timelineHeight)("scheme", ctx_r4.scheme)("customColors", ctx_r4.customColors)("scaleType", ctx_r4.scaleType)("legend", ctx_r4.legend);
    ɵngcc0.ɵɵattribute("transform", ctx_r4.timelineTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.results)("ngForTrackBy", ctx_r4.trackBy);
} }
const _c34 = ["ngx-charts-line-series", ""];
function LineSeriesComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
function LineSeriesComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 5);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", ctx_r1.isActive(ctx_r1.data))("inactive", ctx_r1.isInactive(ctx_r1.data));
    ɵngcc0.ɵɵproperty("data", ctx_r1.data)("path", ctx_r1.outerPath)("fill", ctx_r1.hasGradient ? ctx_r1.gradientUrl : ctx_r1.colors.getColor(ctx_r1.data.name))("opacity", ctx_r1.rangeFillOpacity)("animations", ctx_r1.animations);
} }
function PolarChartComponent__svg_g_4__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 8);
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("r", r_r6);
} }
function PolarChartComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, PolarChartComponent__svg_g_4__svg_circle_1_Template, 1, 1, "circle", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.radiusTicks);
} }
function PolarChartComponent__svg_g_5__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 10);
} if (rf & 2) {
    const tick_r8 = ctx.$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("data", tick_r8)("radius", ctx_r7.outerRadius)("label", tick_r8.label)("max", ctx_r7.outerRadius)("value", ctx_r7.showGridLines ? 1 : ctx_r7.outerRadius)("explodeSlices", true)("animations", ctx_r7.animations)("labelTrim", ctx_r7.labelTrim)("labelTrimSize", ctx_r7.labelTrimSize);
} }
function PolarChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, PolarChartComponent__svg_g_5__svg_g_1_Template, 1, 9, "g", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.thetaTicks);
} }
function PolarChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 11);
    ɵngcc0.ɵɵlistener("dimensionsChanged", function PolarChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.updateYAxisWidth($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("yScale", ctx_r2.yAxisScale)("dims", ctx_r2.yAxisDims)("showGridLines", ctx_r2.showGridLines)("showLabel", ctx_r2.showYAxisLabel)("labelText", ctx_r2.yAxisLabel)("trimTicks", ctx_r2.trimYAxisTicks)("maxTickLength", ctx_r2.maxYAxisTickLength)("tickFormatting", ctx_r2.yAxisTickFormatting);
    ɵngcc0.ɵɵattribute("transform", ctx_r2.transformYAxis);
} }
function PolarChartComponent__svg_g_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 12);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("label", ctx_r3.xAxisLabel)("offset", ctx_r3.labelOffset)("orient", "bottom")("height", ctx_r3.dims.height)("width", ctx_r3.dims.width);
} }
function PolarChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 13);
    ɵngcc0.ɵɵlistener("select", function PolarChartComponent__svg_g_9_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onClick($event); })("activate", function PolarChartComponent__svg_g_9_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onActivate($event); })("deactivate", function PolarChartComponent__svg_g_9_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@animationState", "active");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("gradient", ctx_r4.gradient)("xScale", ctx_r4.xScale)("yScale", ctx_r4.yScale)("colors", ctx_r4.colors)("data", series_r11)("activeEntries", ctx_r4.activeEntries)("scaleType", ctx_r4.scaleType)("curve", ctx_r4.curve)("rangeFillOpacity", ctx_r4.rangeFillOpacity)("animations", ctx_r4.animations)("tooltipDisabled", ctx_r4.tooltipDisabled)("tooltipTemplate", ctx_r4.tooltipTemplate);
} }
const _c35 = ["ngx-charts-polar-series", ""];
function PolarSeriesComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r0.seriesColor)("name", ctx_r0.gradientId)("startOpacity", 0.25)("endOpacity", 1)("stops", ctx_r0.gradientStops);
} }
function PolarSeriesComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 5);
    ɵngcc0.ɵɵlistener("select", function PolarSeriesComponent__svg_g_4_Template__svg_g_select_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const circle_r2 = ctx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.select.emit(circle_r2.data); })("activate", function PolarSeriesComponent__svg_g_4_Template__svg_g_activate_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const circle_r2 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activate.emit({ name: circle_r2.data.series }); })("deactivate", function PolarSeriesComponent__svg_g_4_Template__svg_g_deactivate_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const circle_r2 = ctx.$implicit; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.deactivate.emit({ name: circle_r2.data.series }); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const circle_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("opacity", ctx_r1.inactive ? 0.2 : 1);
    ɵngcc0.ɵɵproperty("cx", circle_r2.cx)("cy", circle_r2.cy)("r", ctx_r1.circleRadius)("fill", circle_r2.color)("tooltipDisabled", ctx_r1.tooltipDisabled)("tooltipPlacement", "top")("tooltipTitle", ctx_r1.tooltipTemplate ? undefined : ctx_r1.tooltipText(circle_r2))("tooltipTemplate", ctx_r1.tooltipTemplate)("tooltipContext", circle_r2.data);
} }
const _c36 = ["ngx-charts-pie-label", ""];
const _c37 = ["ngx-charts-pie-arc", ""];
function PieArcComponent__svg_defs_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelement(1, "g", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("color", ctx_r0.fill)("name", ctx_r0.radialGradientId)("startOpacity", ctx_r0.startOpacity);
} }
function PieGridComponent__svg_g_2__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "text", 10);
} if (rf & 2) {
    const series_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("countTo", series_r1.percent)("countSuffix", "%");
} }
function PieGridComponent__svg_g_2__svg_text_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", series_r1.percent.toLocaleString(), " ");
} }
function PieGridComponent__svg_g_2__svg_text_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "text", 12);
} if (rf & 2) {
    const series_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("countTo", series_r1.total)("countPrefix", ctx_r4.label + ": ");
    ɵngcc0.ɵɵattribute("y", series_r1.outerRadius);
} }
function PieGridComponent__svg_g_2__svg_text_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("y", series_r1.outerRadius);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r5.label, ": ", series_r1.total.toLocaleString(), " ");
} }
const _c38 = function (a0) { return { data: a0 }; };
function PieGridComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 3);
    ɵngcc0.ɵɵelementStart(1, "g", 4);
    ɵngcc0.ɵɵlistener("select", function PieGridComponent__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onClick($event); })("activate", function PieGridComponent__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onActivate($event); })("deactivate", function PieGridComponent__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(2, PieGridComponent__svg_g_2__svg_text_2_Template, 1, 2, "text", 5);
    ɵngcc0.ɵɵtemplate(3, PieGridComponent__svg_g_2__svg_text_3_Template, 2, 1, "text", 6);
    ɵngcc0.ɵɵelementStart(4, "text", 7);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, PieGridComponent__svg_g_2__svg_text_6_Template, 1, 3, "text", 8);
    ɵngcc0.ɵɵtemplate(7, PieGridComponent__svg_g_2__svg_text_7_Template, 2, 3, "text", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", series_r1.transform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colors", series_r1.colors)("data", series_r1.data)("innerRadius", series_r1.innerRadius)("outerRadius", series_r1.outerRadius)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.tooltipText(ɵngcc0.ɵɵpureFunction1(17, _c38, series_r1)))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", series_r1.data[0].data);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.animations);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.animations);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", series_r1.label, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.animations);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.animations);
} }
const _c39 = ["ngx-charts-pie-grid-series", ""];
function PieGridSeriesComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵlistener("select", function PieGridSeriesComponent__svg_g_1_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick($event); })("activate", function PieGridSeriesComponent__svg_g_1_Template__svg_g_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.activate.emit($event); })("deactivate", function PieGridSeriesComponent__svg_g_1_Template__svg_g_deactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.deactivate.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("startAngle", arc_r1.startAngle)("endAngle", arc_r1.endAngle)("innerRadius", ctx_r0.innerRadius)("outerRadius", ctx_r0.outerRadius)("fill", ctx_r0.color(arc_r1))("value", arc_r1.data.value)("data", arc_r1.data)("gradient", false)("pointerEvents", arc_r1.pointerEvents)("animate", arc_r1.animate);
    ɵngcc0.ɵɵattribute("class", arc_r1.class);
} }
const _c40 = ["ngx-charts-pie-series", ""];
function PieSeriesComponent__svg_g_0__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 3);
} if (rf & 2) {
    const arc_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("data", arc_r1)("radius", ctx_r2.outerRadius)("color", ctx_r2.color(arc_r1))("label", ctx_r2.labelText(arc_r1))("labelTrim", ctx_r2.trimLabels)("labelTrimSize", ctx_r2.maxLabelLength)("max", ctx_r2.max)("value", arc_r1.value)("explodeSlices", ctx_r2.explodeSlices)("animations", ctx_r2.animations);
} }
function PieSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵtemplate(1, PieSeriesComponent__svg_g_0__svg_g_1_Template, 1, 10, "g", 1);
    ɵngcc0.ɵɵelementStart(2, "g", 2);
    ɵngcc0.ɵɵlistener("select", function PieSeriesComponent__svg_g_0_Template__svg_g_select_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick($event); })("activate", function PieSeriesComponent__svg_g_0_Template__svg_g_activate_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.activate.emit($event); })("deactivate", function PieSeriesComponent__svg_g_0_Template__svg_g_deactivate_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.deactivate.emit($event); })("dblclick", function PieSeriesComponent__svg_g_0_Template__svg_g_dblclick_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.dblclick.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.labelVisible(arc_r1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("startAngle", arc_r1.startAngle)("endAngle", arc_r1.endAngle)("innerRadius", ctx_r0.innerRadius)("outerRadius", ctx_r0.outerRadius)("fill", ctx_r0.color(arc_r1))("value", arc_r1.data.value)("gradient", ctx_r0.gradient)("data", arc_r1.data)("max", ctx_r0.max)("explodeSlices", ctx_r0.explodeSlices)("isActive", ctx_r0.isActive(arc_r1.data))("animate", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.getTooltipTitle(arc_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", arc_r1.data);
} }
const _c41 = ["textEl"];
const _c42 = ["ngx-charts-card", ""];
function CardComponent__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "path", 7);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("fill", ctx_r0.bandColor)("transform", ctx_r0.transformBand)("d", ctx_r0.bandPath);
} }
const _c43 = ["ngx-charts-card-series", ""];
function CardSeriesComponent__svg_rect_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "rect", 2);
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("fill", ctx_r0.emptyColor);
    ɵngcc0.ɵɵattribute("x", c_r2.x)("y", c_r2.y)("width", c_r2.width)("height", c_r2.height);
} }
function CardSeriesComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 3);
    ɵngcc0.ɵɵlistener("select", function CardSeriesComponent__svg_g_1_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("x", c_r3.x)("y", c_r3.y)("width", c_r3.width)("height", c_r3.height)("color", c_r3.color)("bandColor", c_r3.bandColor)("textColor", c_r3.textColor)("data", c_r3.data)("label", c_r3.label)("medianSize", ctx_r1.medianSize)("valueFormatting", ctx_r1.valueFormatting)("labelFormatting", ctx_r1.labelFormatting)("animations", ctx_r1.animations);
} }
const _c44 = ["ngx-charts-tree-map-cell", ""];
function TreeMapCellComponent__svg_defs_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelement(1, "g", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
function TreeMapCellComponent__svg_foreignObject_3__xhtml_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("countTo", ctx_r2.value)("valueFormatting", ctx_r2.valueFormatting);
} }
function TreeMapCellComponent__svg_foreignObject_3__xhtml_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.formattedValue, " ");
} }
function TreeMapCellComponent__svg_foreignObject_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "foreignObject", 4);
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(1, "p");
    ɵngcc0.ɵɵelement(2, "span", 5);
    ɵngcc0.ɵɵelement(3, "br");
    ɵngcc0.ɵɵtemplate(4, TreeMapCellComponent__svg_foreignObject_3__xhtml_span_4_Template, 1, 2, "span", 6);
    ɵngcc0.ɵɵtemplate(5, TreeMapCellComponent__svg_foreignObject_3__xhtml_span_5_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("pointer-events", "none");
    ɵngcc0.ɵɵattribute("x", ctx_r1.x)("y", ctx_r1.y)("width", ctx_r1.width)("height", ctx_r1.height);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("color", ctx_r1.getTextColor())("height", ctx_r1.height + "px")("width", ctx_r1.width + "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r1.formattedLabel, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.animations);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.animations);
} }
const _c45 = ["ngx-charts-tree-map-cell-series", ""];
function TreeMapCellSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 1);
    ɵngcc0.ɵɵlistener("select", function TreeMapCellSeriesComponent__svg_g_0_Template__svg_g_select_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("data", c_r1.data)("x", c_r1.x)("y", c_r1.y)("width", c_r1.width)("height", c_r1.height)("fill", c_r1.fill)("label", c_r1.label)("value", c_r1.value)("valueType", c_r1.valueType)("valueFormatting", ctx_r0.valueFormatting)("labelFormatting", ctx_r0.labelFormatting)("gradient", ctx_r0.gradient)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(c_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", c_r1.data);
} }
const _c46 = ["valueTextEl"];
const _c47 = ["unitsTextEl"];
function LinearGaugeComponent__svg_line_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "line", 10);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r0.transformLine)("stroke", ctx_r0.colors.getColor(ctx_r0.units));
} }
function LinearGaugeComponent__svg_line_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "line", 11);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r1.transformLine)("stroke", ctx_r1.colors.getColor(ctx_r1.units));
} }
const _c48 = function () { return {}; };
function GaugeComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g");
    ɵngcc0.ɵɵelementStart(1, "g", 5);
    ɵngcc0.ɵɵlistener("select", function GaugeComponent__svg_g_2_Template__svg_g_select_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick($event); })("activate", function GaugeComponent__svg_g_2_Template__svg_g_activate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onActivate($event); })("deactivate", function GaugeComponent__svg_g_2_Template__svg_g_deactivate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onDeactivate($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r3 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("transform", ctx_r0.rotation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("backgroundArc", arc_r3.backgroundArc)("valueArc", arc_r3.valueArc)("cornerRadius", ctx_r0.cornerRadius)("colors", ctx_r0.colors)("isActive", ctx_r0.isActive(arc_r3.valueArc.data))("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipTemplate", ctx_r0.tooltipTemplate)("valueFormatting", ctx_r0.valueFormatting)("animations", ctx_r0.animations);
} }
function GaugeComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "g", 6);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("bigSegments", ctx_r1.bigSegments)("smallSegments", ctx_r1.smallSegments)("min", ctx_r1.min)("max", ctx_r1.max)("radius", ctx_r1.outerRadius)("angleSpan", ctx_r1.angleSpan)("valueScale", ctx_r1.valueScale)("startAngle", ctx_r1.startAngle)("tickFormatting", ctx_r1.axisTickFormatting);
} }
function GaugeComponent__svg_text_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 7, 8);
    ɵngcc0.ɵɵelementStart(2, "tspan", 9);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "tspan", 10);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("text-anchor", "middle");
    ɵngcc0.ɵɵattribute("transform", ctx_r2.textTransform);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.displayValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.units);
} }
const _c49 = ["ngx-charts-gauge-arc", ""];
const _c50 = ["ngx-charts-gauge-axis", ""];
function GaugeAxisComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵelement(1, "path");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("d", tick_r3.line);
} }
function GaugeAxisComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 2);
    ɵngcc0.ɵɵelementStart(1, "text", 3);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("text-anchor", tick_r4.textAnchor);
    ɵngcc0.ɵɵattribute("transform", tick_r4.textTransform);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", tick_r4.text, " ");
} }
function GaugeAxisComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "g", 4);
    ɵngcc0.ɵɵelement(1, "path");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("d", tick_r5.line);
} }
function isViewContainerRef(x) {
    return x.element;
}
/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 */
class InjectionService {
    constructor(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Sets a default global root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     */
    static setGlobalRootViewContainer(container) {
        InjectionService.globalRootViewContainer = container;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @memberOf InjectionService
     */
    getRootViewContainer() {
        if (this._container)
            return this._container;
        if (InjectionService.globalRootViewContainer)
            return InjectionService.globalRootViewContainer;
        if (this.applicationRef.components.length)
            return this.applicationRef.components[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.');
    }
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     *
     * @memberOf InjectionService
     */
    setRootViewContainer(container) {
        this._container = container;
    }
    /**
     * Gets the html element for a component ref.
     *
     * @param componentRef
     *
     * @memberOf InjectionService
     */
    getComponentRootNode(component) {
        if (isViewContainerRef(component)) {
            return component.element.nativeElement;
        }
        if (component.hostView && component.hostView.rootNodes.length > 0) {
            return component.hostView.rootNodes[0];
        }
        // the top most component root node has no `hostView`
        return component.location.nativeElement;
    }
    /**
     * Gets the root component container html element.
     *
     * @memberOf InjectionService
     */
    getRootViewContainerNode(component) {
        return this.getComponentRootNode(component);
    }
    /**
     * Projects the bindings onto the component
     *
     * @param component
     * @param options
     *
     * @memberOf InjectionService
     */
    projectComponentBindings(component, bindings) {
        if (bindings) {
            if (bindings.inputs !== undefined) {
                const bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
                for (const bindingName of bindingKeys) {
                    component.instance[bindingName] = bindings.inputs[bindingName];
                }
            }
            if (bindings.outputs !== undefined) {
                const eventKeys = Object.getOwnPropertyNames(bindings.outputs);
                for (const eventName of eventKeys) {
                    component.instance[eventName] = bindings.outputs[eventName];
                }
            }
        }
        return component;
    }
    /**
     * Appends a component to a adjacent location
     *
     * @param componentClass
     * @param [options={}]
     * @param [location]
     *
     * @memberOf InjectionService
     */
    appendComponent(componentClass, bindings = {}, location) {
        if (!location)
            location = this.getRootViewContainer();
        const appendLocation = this.getComponentRootNode(location);
        const portalHost = new DomPortalHost(appendLocation, this.componentFactoryResolver, this.applicationRef, this.injector);
        const portal = new ComponentPortal(componentClass);
        const componentRef = portalHost.attach(portal);
        this.projectComponentBindings(componentRef, bindings);
        return componentRef;
    }
}
InjectionService.ɵfac = function InjectionService_Factory(t) { return new (t || InjectionService)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
InjectionService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: InjectionService, factory: InjectionService.ɵfac });
InjectionService.globalRootViewContainer = null;
InjectionService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * Throttle a function
 *
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

var PlacementTypes;
(function (PlacementTypes) {
    PlacementTypes[PlacementTypes["top"] = 'top'] = "top";
    PlacementTypes[PlacementTypes["bottom"] = 'bottom'] = "bottom";
    PlacementTypes[PlacementTypes["left"] = 'left'] = "left";
    PlacementTypes[PlacementTypes["right"] = 'right'] = "right";
})(PlacementTypes || (PlacementTypes = {}));

const caretOffset = 7;
function verticalPosition(elDimensions, popoverDimensions, alignment) {
    if (alignment === 'top') {
        return elDimensions.top - caretOffset;
    }
    if (alignment === 'bottom') {
        return elDimensions.top + elDimensions.height - popoverDimensions.height + caretOffset;
    }
    if (alignment === 'center') {
        return elDimensions.top + elDimensions.height / 2 - popoverDimensions.height / 2;
    }
    return undefined;
}
function horizontalPosition(elDimensions, popoverDimensions, alignment) {
    if (alignment === 'left') {
        return elDimensions.left - caretOffset;
    }
    if (alignment === 'right') {
        return elDimensions.left + elDimensions.width - popoverDimensions.width + caretOffset;
    }
    if (alignment === 'center') {
        return elDimensions.left + elDimensions.width / 2 - popoverDimensions.width / 2;
    }
    return undefined;
}
/**
 * Position helper for the popover directive.
 *
 * @export
 */
class PositionHelper {
    /**
     * Calculate vertical alignment position
     *
     * @memberOf PositionHelper
     */
    static calculateVerticalAlignment(elDimensions, popoverDimensions, alignment) {
        let result = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.height > window.innerHeight) {
            result = window.innerHeight - popoverDimensions.height;
        }
        return result;
    }
    /**
     * Calculate vertical caret position
     *
     * @memberOf PositionHelper
     */
    static calculateVerticalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        let result;
        if (alignment === 'top') {
            result = elDimensions.height / 2 - caretDimensions.height / 2 + caretOffset;
        }
        if (alignment === 'bottom') {
            result = popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.height / 2 - caretDimensions.height / 2;
        }
        const popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.height > window.innerHeight) {
            result += popoverPosition + popoverDimensions.height - window.innerHeight;
        }
        return result;
    }
    /**
     * Calculate horz alignment position
     *
     * @memberOf PositionHelper
     */
    static calculateHorizontalAlignment(elDimensions, popoverDimensions, alignment) {
        let result = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (result + popoverDimensions.width > window.innerWidth) {
            result = window.innerWidth - popoverDimensions.width;
        }
        return result;
    }
    /**
     * Calculate horz caret position
     *
     * @memberOf PositionHelper
     */
    static calculateHorizontalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        let result;
        if (alignment === 'left') {
            result = elDimensions.width / 2 - caretDimensions.width / 2 + caretOffset;
        }
        if (alignment === 'right') {
            result = popoverDimensions.width - elDimensions.width / 2 - caretDimensions.width / 2 - caretOffset;
        }
        if (alignment === 'center') {
            result = popoverDimensions.width / 2 - caretDimensions.width / 2;
        }
        const popoverPosition = horizontalPosition(elDimensions, popoverDimensions, alignment);
        if (popoverPosition + popoverDimensions.width > window.innerWidth) {
            result += popoverPosition + popoverDimensions.width - window.innerWidth;
        }
        return result;
    }
    /**
     * Checks if the element's position should be flipped
     *
     * @memberOf PositionHelper
     */
    static shouldFlip(elDimensions, popoverDimensions, placement, spacing) {
        let flip = false;
        if (placement === 'right') {
            if (elDimensions.left + elDimensions.width + popoverDimensions.width + spacing > window.innerWidth) {
                flip = true;
            }
        }
        if (placement === 'left') {
            if (elDimensions.left - popoverDimensions.width - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'top') {
            if (elDimensions.top - popoverDimensions.height - spacing < 0) {
                flip = true;
            }
        }
        if (placement === 'bottom') {
            if (elDimensions.top + elDimensions.height + popoverDimensions.height + spacing > window.innerHeight) {
                flip = true;
            }
        }
        return flip;
    }
    /**
     * Position caret
     *
     * @memberOf PositionHelper
     */
    static positionCaret(placement, elmDim, hostDim, caretDimensions, alignment) {
        let top = 0;
        let left = 0;
        if (placement === PlacementTypes.right) {
            left = -7;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = elmDim.width;
            top = PositionHelper.calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = elmDim.height;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = -7;
            left = PositionHelper.calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
        }
        return { top, left };
    }
    /**
     * Position content
     *
     * @memberOf PositionHelper
     */
    static positionContent(placement, elmDim, hostDim, spacing, alignment) {
        let top = 0;
        let left = 0;
        if (placement === PlacementTypes.right) {
            left = hostDim.left + hostDim.width + spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.left) {
            left = hostDim.left - elmDim.width - spacing;
            top = PositionHelper.calculateVerticalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.top) {
            top = hostDim.top - elmDim.height - spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        else if (placement === PlacementTypes.bottom) {
            top = hostDim.top + hostDim.height + spacing;
            left = PositionHelper.calculateHorizontalAlignment(hostDim, elmDim, alignment);
        }
        return { top, left };
    }
    /**
     * Determine placement based on flip
     *
     * @memberOf PositionHelper
     */
    static determinePlacement(placement, elmDim, hostDim, spacing) {
        const shouldFlip = PositionHelper.shouldFlip(hostDim, elmDim, placement, spacing);
        if (shouldFlip) {
            if (placement === PlacementTypes.right) {
                return PlacementTypes.left;
            }
            else if (placement === PlacementTypes.left) {
                return PlacementTypes.right;
            }
            else if (placement === PlacementTypes.top) {
                return PlacementTypes.bottom;
            }
            else if (placement === PlacementTypes.bottom) {
                return PlacementTypes.top;
            }
        }
        return placement;
    }
}

class TooltipContentComponent {
    constructor(element, renderer, platformId) {
        this.element = element;
        this.renderer = renderer;
        this.platformId = platformId;
    }
    get cssClasses() {
        let clz = 'ngx-charts-tooltip-content';
        clz += ` position-${this.placement}`;
        clz += ` type-${this.type}`;
        clz += ` ${this.cssClass}`;
        return clz;
    }
    ngAfterViewInit() {
        setTimeout(this.position.bind(this));
    }
    position() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const nativeElm = this.element.nativeElement;
        const hostDim = this.host.nativeElement.getBoundingClientRect();
        // if no dims were found, never show
        if (!hostDim.height && !hostDim.width)
            return;
        const elmDim = nativeElm.getBoundingClientRect();
        this.checkFlip(hostDim, elmDim);
        this.positionContent(nativeElm, hostDim, elmDim);
        if (this.showCaret) {
            this.positionCaret(hostDim, elmDim);
        }
        // animate its entry
        setTimeout(() => this.renderer.addClass(nativeElm, 'animate'), 1);
    }
    positionContent(nativeElm, hostDim, elmDim) {
        const { top, left } = PositionHelper.positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment);
        this.renderer.setStyle(nativeElm, 'top', `${top}px`);
        this.renderer.setStyle(nativeElm, 'left', `${left}px`);
    }
    positionCaret(hostDim, elmDim) {
        const caretElm = this.caretElm.nativeElement;
        const caretDimensions = caretElm.getBoundingClientRect();
        const { top, left } = PositionHelper.positionCaret(this.placement, elmDim, hostDim, caretDimensions, this.alignment);
        this.renderer.setStyle(caretElm, 'top', `${top}px`);
        this.renderer.setStyle(caretElm, 'left', `${left}px`);
    }
    checkFlip(hostDim, elmDim) {
        this.placement = PositionHelper.determinePlacement(this.placement, elmDim, hostDim, this.spacing);
    }
    onWindowResize() {
        this.position();
    }
}
TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) { return new (t || TooltipContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
TooltipContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TooltipContentComponent, selectors: [["ngx-tooltip-content"]], viewQuery: function TooltipContentComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.caretElm = _t.first);
    } }, hostVars: 2, hostBindings: function TooltipContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function TooltipContentComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.cssClasses);
    } }, inputs: { placement: "placement", host: "host", showCaret: "showCaret", type: "type", alignment: "alignment", spacing: "spacing", cssClass: "cssClass", title: "title", template: "template", context: "context" }, decls: 6, vars: 6, consts: [[3, "hidden"], ["caretElm", ""], [1, "tooltip-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function TooltipContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelement(1, "span", 0, 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, TooltipContentComponent_span_4_Template, 2, 4, "span", 3);
        ɵngcc0.ɵɵtemplate(5, TooltipContentComponent_span_5_Template, 1, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("tooltip-caret position-", ctx.placement, "");
        ɵngcc0.ɵɵproperty("hidden", !ctx.showCaret);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ngx-charts-tooltip-content{border-radius:3px;display:block;font-weight:400;opacity:0;pointer-events:none!important;position:fixed;z-index:5000}.ngx-charts-tooltip-content.type-popover{background:#fff;border:1px solid #72809b;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#060709;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{height:0;position:absolute;width:0;z-index:5001}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-bottom:7px solid transparent;border-left:7px solid #fff;border-top:7px solid transparent}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-bottom:7px solid transparent;border-right:7px solid #fff;border-top:7px solid transparent}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-bottom:7px solid #fff;border-left:7px solid transparent;border-right:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip{background:rgba(0,0,0,.75);color:#fff;font-size:12px;padding:0 10px;pointer-events:auto;text-align:center}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75);border-top:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75);border-top:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-bottom:7px solid rgba(0,0,0,.75);border-left:7px solid transparent;border-right:7px solid transparent}.ngx-charts-tooltip-content .tooltip-label{display:block;font-size:1em;line-height:1em;padding:8px 5px 5px}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{height:0;position:absolute;width:0;z-index:5001}.ngx-charts-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-charts-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-charts-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-charts-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-charts-tooltip-content.animate{opacity:1;pointer-events:auto;transform:translateZ(0);transition:opacity .3s,transform .3s}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{line-height:1.2em;padding:5px 0;text-align:left}.tooltip-item .tooltip-item-color{border-radius:3px;color:#5b646b;display:inline-block;height:12px;margin-right:5px;width:12px}"], encapsulation: 2 });
TooltipContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TooltipContentComponent.propDecorators = {
    host: [{ type: Input }],
    showCaret: [{ type: Input }],
    type: [{ type: Input }],
    placement: [{ type: Input }],
    alignment: [{ type: Input }],
    spacing: [{ type: Input }],
    cssClass: [{ type: Input }],
    title: [{ type: Input }],
    template: [{ type: Input }],
    context: [{ type: Input }],
    caretElm: [{ type: ViewChild, args: ['caretElm',] }],
    cssClasses: [{ type: HostBinding, args: ['class',] }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
__decorate([
    throttleable(100)
], TooltipContentComponent.prototype, "onWindowResize", null);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InjectionService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Injector }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipContentComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tooltip-content',
                template: `
    <div>
      <span #caretElm [hidden]="!showCaret" class="tooltip-caret position-{{ this.placement }}"> </span>
      <div class="tooltip-content">
        <span *ngIf="!title">
          <ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ model: context }"> </ng-template>
        </span>
        <span *ngIf="title" [innerHTML]="title"> </span>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts-tooltip-content{border-radius:3px;display:block;font-weight:400;opacity:0;pointer-events:none!important;position:fixed;z-index:5000}.ngx-charts-tooltip-content.type-popover{background:#fff;border:1px solid #72809b;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#060709;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{height:0;position:absolute;width:0;z-index:5001}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-bottom:7px solid transparent;border-left:7px solid #fff;border-top:7px solid transparent}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-bottom:7px solid transparent;border-right:7px solid #fff;border-top:7px solid transparent}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-bottom:7px solid #fff;border-left:7px solid transparent;border-right:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip{background:rgba(0,0,0,.75);color:#fff;font-size:12px;padding:0 10px;pointer-events:auto;text-align:center}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75);border-top:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75);border-top:7px solid transparent}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-bottom:7px solid rgba(0,0,0,.75);border-left:7px solid transparent;border-right:7px solid transparent}.ngx-charts-tooltip-content .tooltip-label{display:block;font-size:1em;line-height:1em;padding:8px 5px 5px}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{height:0;position:absolute;width:0;z-index:5001}.ngx-charts-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-charts-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-charts-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-charts-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-charts-tooltip-content.animate{opacity:1;pointer-events:auto;transform:translateZ(0);transition:opacity .3s,transform .3s}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{line-height:1.2em;padding:5px 0;text-align:left}.tooltip-item .tooltip-item-color{border-radius:3px;color:#5b646b;display:inline-block;height:12px;margin-right:5px;width:12px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { cssClasses: [{
            type: HostBinding,
            args: ['class']
        }], placement: [{
            type: Input
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }], host: [{
            type: Input
        }], showCaret: [{
            type: Input
        }], type: [{
            type: Input
        }], alignment: [{
            type: Input
        }], spacing: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], title: [{
            type: Input
        }], template: [{
            type: Input
        }], context: [{
            type: Input
        }], caretElm: [{
            type: ViewChild,
            args: ['caretElm']
        }] }); })();

class InjectionRegisteryService {
    constructor(injectionService) {
        this.injectionService = injectionService;
        this.defaults = {};
        this.components = new Map();
    }
    getByType(type = this.type) {
        return this.components.get(type);
    }
    create(bindings) {
        return this.createByType(this.type, bindings);
    }
    createByType(type, bindings) {
        bindings = this.assignDefaults(bindings);
        const component = this.injectComponent(type, bindings);
        this.register(type, component);
        return component;
    }
    destroy(instance) {
        const compsByType = this.components.get(instance.componentType);
        if (compsByType && compsByType.length) {
            const idx = compsByType.indexOf(instance);
            if (idx > -1) {
                const component = compsByType[idx];
                component.destroy();
                compsByType.splice(idx, 1);
            }
        }
    }
    destroyAll() {
        this.destroyByType(this.type);
    }
    destroyByType(type) {
        const comps = this.components.get(type);
        if (comps && comps.length) {
            let i = comps.length - 1;
            while (i >= 0) {
                this.destroy(comps[i--]);
            }
        }
    }
    injectComponent(type, bindings) {
        return this.injectionService.appendComponent(type, bindings);
    }
    assignDefaults(bindings) {
        const inputs = Object.assign({}, this.defaults.inputs);
        const outputs = Object.assign({}, this.defaults.outputs);
        if (!bindings.inputs && !bindings.outputs) {
            bindings = { inputs: bindings };
        }
        if (inputs) {
            bindings.inputs = Object.assign(Object.assign({}, inputs), bindings.inputs);
        }
        if (outputs) {
            bindings.outputs = Object.assign(Object.assign({}, outputs), bindings.outputs);
        }
        return bindings;
    }
    register(type, component) {
        if (!this.components.has(type)) {
            this.components.set(type, []);
        }
        const types = this.components.get(type);
        types.push(component);
    }
}

class TooltipService extends InjectionRegisteryService {
    constructor(injectionService) {
        super(injectionService);
        this.type = TooltipContentComponent;
    }
}
TooltipService.ɵfac = function TooltipService_Factory(t) { return new (t || TooltipService)(ɵngcc0.ɵɵinject(InjectionService)); };
TooltipService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TooltipService, factory: TooltipService.ɵfac });
TooltipService.ctorParameters = () => [
    { type: InjectionService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipService, [{
        type: Injectable
    }], function () { return [{ type: InjectionService }]; }, null); })();

class ChartComponent {
    constructor() {
        this.showLegend = false;
        this.animations = true;
        this.legendLabelClick = new EventEmitter();
        this.legendLabelActivate = new EventEmitter();
        this.legendLabelDeactivate = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        let legendColumns = 0;
        if (this.showLegend) {
            this.legendType = this.getLegendType();
            if (!this.legendOptions || this.legendOptions.position === 'right') {
                if (this.legendType === 'scaleLegend') {
                    legendColumns = 1;
                }
                else {
                    legendColumns = 2;
                }
            }
        }
        const chartColumns = 12 - legendColumns;
        this.chartWidth = Math.floor((this.view[0] * chartColumns) / 12.0);
        this.legendWidth =
            !this.legendOptions || this.legendOptions.position === 'right'
                ? Math.floor((this.view[0] * legendColumns) / 12.0)
                : this.chartWidth;
    }
    getLegendType() {
        if (this.legendOptions.scaleType === 'linear') {
            return 'scaleLegend';
        }
        else {
            return 'legend';
        }
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["ngx-charts-chart"]], inputs: { showLegend: "showLegend", animations: "animations", legendType: "legendType", view: "view", legendOptions: "legendOptions", data: "data", legendData: "legendData", colors: "colors", activeEntries: "activeEntries" }, outputs: { legendLabelClick: "legendLabelClick", legendLabelActivate: "legendLabelActivate", legendLabelDeactivate: "legendLabelDeactivate" }, features: [ɵngcc0.ɵɵProvidersFeature([TooltipService]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 5, vars: 8, consts: [[1, "ngx-charts-outer"], [1, "ngx-charts"], ["class", "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width", 4, "ngIf"], ["class", "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate", 4, "ngIf"], [1, "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width"], [1, "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, ChartComponent_ngx_charts_scale_legend_3_Template, 1, 5, "ngx-charts-scale-legend", 2);
        ɵngcc0.ɵɵtemplate(4, ChartComponent_ngx_charts_legend_4_Template, 1, 7, "ngx-charts-legend", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.view[0], "px");
        ɵngcc0.ɵɵproperty("@animationState", "active")("@.disabled", !ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.chartWidth)("height", ctx.view[1]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === "scaleLegend");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === "legend");
    } }, directives: function () { return [ɵngcc1.NgIf, ScaleLegendComponent, LegendComponent]; }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [style({ opacity: 0 }), animate('500ms 100ms', style({ opacity: 1 }))])
            ])
        ] }, changeDetection: 0 });
ChartComponent.propDecorators = {
    view: [{ type: Input }],
    showLegend: [{ type: Input }],
    legendOptions: [{ type: Input }],
    data: [{ type: Input }],
    legendData: [{ type: Input }],
    legendType: [{ type: Input }],
    colors: [{ type: Input }],
    activeEntries: [{ type: Input }],
    animations: [{ type: Input }],
    legendLabelClick: [{ type: Output }],
    legendLabelActivate: [{ type: Output }],
    legendLabelDeactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                providers: [TooltipService],
                selector: 'ngx-charts-chart',
                template: `
    <div class="ngx-charts-outer" [style.width.px]="view[0]" [@animationState]="'active'" [@.disabled]="!animations">
      <svg class="ngx-charts" [attr.width]="chartWidth" [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
      <ngx-charts-scale-legend
        *ngIf="showLegend && legendType === 'scaleLegend'"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === 'below'"
        [valueRange]="legendOptions.domain"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
      >
      </ngx-charts-scale-legend>
      <ngx-charts-legend
        *ngIf="showLegend && legendType === 'legend'"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === 'below'"
        [data]="legendOptions.domain"
        [title]="legendOptions.title"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
        [activeEntries]="activeEntries"
        (labelClick)="legendLabelClick.emit($event)"
        (labelActivate)="legendLabelActivate.emit($event)"
        (labelDeactivate)="legendLabelDeactivate.emit($event)"
      >
      </ngx-charts-legend>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [style({ opacity: 0 }), animate('500ms 100ms', style({ opacity: 1 }))])
                    ])
                ]
            }]
    }], function () { return []; }, { showLegend: [{
            type: Input
        }], animations: [{
            type: Input
        }], legendLabelClick: [{
            type: Output
        }], legendLabelActivate: [{
            type: Output
        }], legendLabelDeactivate: [{
            type: Output
        }], legendType: [{
            type: Input
        }], view: [{
            type: Input
        }], legendOptions: [{
            type: Input
        }], data: [{
            type: Input
        }], legendData: [{
            type: Input
        }], colors: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }] }); })();

/**
 * Visibility Observer
 */
class VisibilityObserver {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.visible = new EventEmitter();
        this.isVisible = false;
        this.runCheck();
    }
    destroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            if (!this.element) {
                return;
            }
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 100);
                });
            }
        };
        this.zone.runOutsideAngular(() => {
            this.timeout = setTimeout(() => check());
        });
    }
}
VisibilityObserver.ɵfac = function VisibilityObserver_Factory(t) { return new (t || VisibilityObserver)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
VisibilityObserver.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: VisibilityObserver, selectors: [["visibility-observer"]], outputs: { visible: "visible" } });
VisibilityObserver.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
VisibilityObserver.propDecorators = {
    visible: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VisibilityObserver, [{
        type: Directive,
        args: [{
                selector: 'visibility-observer'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { visible: [{
            type: Output
        }] }); })();

class BaseChartComponent {
    constructor(chartElement, zone, cd, platformId) {
        this.chartElement = chartElement;
        this.zone = zone;
        this.cd = cd;
        this.platformId = platformId;
        this.scheme = 'cool';
        this.schemeType = 'ordinal';
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this.animations = false;
        }
    }
    ngAfterViewInit() {
        this.bindWindowResizeEvent();
        // listen for visibility of the element for hidden by default scenario
        this.visibilityObserver = new VisibilityObserver(this.chartElement, this.zone);
        this.visibilityObserver.visible.subscribe(this.update.bind(this));
    }
    ngOnDestroy() {
        this.unbindEvents();
        if (this.visibilityObserver) {
            this.visibilityObserver.visible.unsubscribe();
            this.visibilityObserver.destroy();
        }
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        if (this.results) {
            this.results = this.cloneData(this.results);
        }
        else {
            this.results = [];
        }
        if (this.view) {
            this.width = this.view[0];
            this.height = this.view[1];
        }
        else {
            const dims = this.getContainerDims();
            if (dims) {
                this.width = dims.width;
                this.height = dims.height;
            }
        }
        // default values if width or height are 0 or undefined
        if (!this.width) {
            this.width = 600;
        }
        if (!this.height) {
            this.height = 400;
        }
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        if (this.cd) {
            this.cd.markForCheck();
        }
    }
    getContainerDims() {
        let width;
        let height;
        const hostElem = this.chartElement.nativeElement;
        if (isPlatformBrowser(this.platformId) && hostElem.parentNode !== null) {
            // Get the container dimensions
            const dims = hostElem.parentNode.getBoundingClientRect();
            width = dims.width;
            height = dims.height;
        }
        if (width && height) {
            return { width, height };
        }
        return null;
    }
    /**
     * Converts all date objects that appear as name
     * into formatted date strings
     */
    formatDates() {
        for (let i = 0; i < this.results.length; i++) {
            const g = this.results[i];
            g.label = g.name;
            if (g.label instanceof Date) {
                g.label = g.label.toLocaleDateString();
            }
            if (g.series) {
                for (let j = 0; j < g.series.length; j++) {
                    const d = g.series[j];
                    d.label = d.name;
                    if (d.label instanceof Date) {
                        d.label = d.label.toLocaleDateString();
                    }
                }
            }
        }
    }
    unbindEvents() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }
    bindWindowResizeEvent() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const source = fromEvent(window, 'resize');
        const subscription = source.pipe(debounceTime(200)).subscribe(e => {
            this.update();
            if (this.cd) {
                this.cd.markForCheck();
            }
        });
        this.resizeSubscription = subscription;
    }
    /**
     * Clones the data into a new object
     *
     * @memberOf BaseChart
     */
    cloneData(data) {
        const results = [];
        for (const item of data) {
            const copy = {
                name: item['name']
            };
            if (item['value'] !== undefined) {
                copy['value'] = item['value'];
            }
            if (item['series'] !== undefined) {
                copy['series'] = [];
                for (const seriesItem of item['series']) {
                    const seriesItemCopy = Object.assign({}, seriesItem);
                    copy['series'].push(seriesItemCopy);
                }
            }
            if (item['extra'] !== undefined) {
                copy['extra'] = JSON.parse(JSON.stringify(item['extra']));
            }
            results.push(copy);
        }
        return results;
    }
}
BaseChartComponent.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
BaseChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BaseChartComponent, selectors: [["base-chart"]], inputs: { scheme: "scheme", schemeType: "schemeType", animations: "animations", results: "results", view: "view", customColors: "customColors" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, template: function BaseChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div");
    } }, encapsulation: 2 });
BaseChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
BaseChartComponent.propDecorators = {
    results: [{ type: Input }],
    view: [{ type: Input }],
    scheme: [{ type: Input }],
    schemeType: [{ type: Input }],
    customColors: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseChartComponent, [{
        type: Component,
        args: [{
                selector: 'base-chart',
                template: ` <div></div> `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { scheme: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], results: [{
            type: Input
        }], view: [{
            type: Input
        }], customColors: [{
            type: Input
        }] }); })();

class AxisLabelComponent {
    constructor(element) {
        this.textHeight = 25;
        this.margin = 5;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.strokeWidth = '0.01';
        this.textAnchor = 'middle';
        this.transform = '';
        switch (this.orient) {
            case 'top':
                this.y = this.offset;
                this.x = this.width / 2;
                break;
            case 'bottom':
                this.y = this.offset;
                this.x = this.width / 2;
                break;
            case 'left':
                this.y = -(this.offset + this.textHeight + this.margin);
                this.x = -this.height / 2;
                this.transform = 'rotate(270)';
                break;
            case 'right':
                this.y = this.offset + this.margin;
                this.x = -this.height / 2;
                this.transform = 'rotate(270)';
                break;
            default:
        }
    }
}
AxisLabelComponent.ɵfac = function AxisLabelComponent_Factory(t) { return new (t || AxisLabelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AxisLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AxisLabelComponent, selectors: [["g", "ngx-charts-axis-label", ""]], inputs: { orient: "orient", label: "label", offset: "offset", width: "width", height: "height" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c3, decls: 2, vars: 6, template: function AxisLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "text");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("stroke-width", ctx.strokeWidth)("x", ctx.x)("y", ctx.y)("text-anchor", ctx.textAnchor)("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
    } }, encapsulation: 2, changeDetection: 0 });
AxisLabelComponent.ctorParameters = () => [
    { type: ElementRef }
];
AxisLabelComponent.propDecorators = {
    orient: [{ type: Input }],
    label: [{ type: Input }],
    offset: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AxisLabelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-axis-label]',
                template: `
    <svg:text
      [attr.stroke-width]="strokeWidth"
      [attr.x]="x"
      [attr.y]="y"
      [attr.text-anchor]="textAnchor"
      [attr.transform]="transform"
    >
      {{ label }}
    </svg:text>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { orient: [{
            type: Input
        }], label: [{
            type: Input
        }], offset: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }] }); })();

function trimLabel(s, max = 16) {
    if (typeof s !== 'string') {
        if (typeof s === 'number') {
            return s + '';
        }
        else {
            return '';
        }
    }
    s = s.trim();
    if (s.length <= max) {
        return s;
    }
    else {
        return `${s.slice(0, max)}...`;
    }
}

function reduceTicks(ticks, maxTicks) {
    if (ticks.length > maxTicks) {
        const reduced = [];
        const modulus = Math.floor(ticks.length / maxTicks);
        for (let i = 0; i < ticks.length; i++) {
            if (i % modulus === 0) {
                reduced.push(ticks[i]);
            }
        }
        ticks = reduced;
    }
    return ticks;
}

class XAxisTicksComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.tickArguments = [5];
        this.tickStroke = '#ccc';
        this.trimTicks = true;
        this.maxTickLength = 16;
        this.showGridLines = false;
        this.rotateTicks = true;
        this.dimensionsChanged = new EventEmitter();
        this.verticalSpacing = 20;
        this.rotateLabels = false;
        this.innerTickSize = 6;
        this.outerTickSize = 6;
        this.tickPadding = 3;
        this.textAnchor = 'middle';
        this.maxTicksLength = 0;
        this.maxAllowedLength = 16;
        this.height = 0;
        this.approxHeight = 10;
    }
    ngOnChanges(changes) {
        this.update();
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateDims());
    }
    updateDims() {
        if (!isPlatformBrowser(this.platformId)) {
            // for SSR, use approximate value instead of measured
            this.dimensionsChanged.emit({ height: this.approxHeight });
            return;
        }
        const height = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().height, 10);
        if (height !== this.height) {
            this.height = height;
            this.dimensionsChanged.emit({ height: this.height });
            setTimeout(() => this.updateDims());
        }
    }
    update() {
        const scale = this.scale;
        this.ticks = this.getTicks();
        if (this.tickFormatting) {
            this.tickFormat = this.tickFormatting;
        }
        else if (scale.tickFormat) {
            this.tickFormat = scale.tickFormat.apply(scale, this.tickArguments);
        }
        else {
            this.tickFormat = function (d) {
                if (d.constructor.name === 'Date') {
                    return d.toLocaleDateString();
                }
                return d.toLocaleString();
            };
        }
        const angle = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
        this.adjustedScale = this.scale.bandwidth
            ? function (d) {
                return this.scale(d) + this.scale.bandwidth() * 0.5;
            }
            : this.scale;
        this.textTransform = '';
        if (angle && angle !== 0) {
            this.textTransform = `rotate(${angle})`;
            this.textAnchor = 'end';
            this.verticalSpacing = 10;
        }
        else {
            this.textAnchor = 'middle';
        }
        setTimeout(() => this.updateDims());
    }
    getRotationAngle(ticks) {
        let angle = 0;
        this.maxTicksLength = 0;
        for (let i = 0; i < ticks.length; i++) {
            const tick = this.tickFormat(ticks[i]).toString();
            let tickLength = tick.length;
            if (this.trimTicks) {
                tickLength = this.tickTrim(tick).length;
            }
            if (tickLength > this.maxTicksLength) {
                this.maxTicksLength = tickLength;
            }
        }
        const len = Math.min(this.maxTicksLength, this.maxAllowedLength);
        const charWidth = 7; // need to measure this
        const wordWidth = len * charWidth;
        let baseWidth = wordWidth;
        const maxBaseWidth = Math.floor(this.width / ticks.length);
        // calculate optimal angle
        while (baseWidth > maxBaseWidth && angle > -90) {
            angle -= 30;
            baseWidth = Math.cos(angle * (Math.PI / 180)) * wordWidth;
        }
        this.approxHeight = Math.max(Math.abs(Math.sin(angle * (Math.PI / 180)) * wordWidth), 10);
        return angle;
    }
    getTicks() {
        let ticks;
        const maxTicks = this.getMaxTicks(20);
        const maxScaleTicks = this.getMaxTicks(100);
        if (this.tickValues) {
            ticks = this.tickValues;
        }
        else if (this.scale.ticks) {
            ticks = this.scale.ticks.apply(this.scale, [maxScaleTicks]);
        }
        else {
            ticks = this.scale.domain();
            ticks = reduceTicks(ticks, maxTicks);
        }
        return ticks;
    }
    getMaxTicks(tickWidth) {
        return Math.floor(this.width / tickWidth);
    }
    tickTransform(tick) {
        return 'translate(' + this.adjustedScale(tick) + ',' + this.verticalSpacing + ')';
    }
    gridLineTransform() {
        return `translate(0,${-this.verticalSpacing - 5})`;
    }
    tickTrim(label) {
        return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
    }
}
XAxisTicksComponent.ɵfac = function XAxisTicksComponent_Factory(t) { return new (t || XAxisTicksComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
XAxisTicksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: XAxisTicksComponent, selectors: [["g", "ngx-charts-x-axis-ticks", ""]], viewQuery: function XAxisTicksComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    } }, inputs: { tickArguments: "tickArguments", tickStroke: "tickStroke", trimTicks: "trimTicks", maxTickLength: "maxTickLength", showGridLines: "showGridLines", rotateTicks: "rotateTicks", scale: "scale", orient: "orient", tickValues: "tickValues", tickFormatting: "tickFormatting", gridLineHeight: "gridLineHeight", width: "width" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c5, decls: 4, vars: 2, consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [4, "ngIf"], ["y2", "0", 1, "gridline-path", "gridline-path-vertical"]], template: function XAxisTicksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", null, 0);
        ɵngcc0.ɵɵtemplate(2, XAxisTicksComponent__svg_g_2_Template, 5, 7, "g", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, XAxisTicksComponent__svg_g_3_Template, 2, 2, "g", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
XAxisTicksComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
XAxisTicksComponent.propDecorators = {
    scale: [{ type: Input }],
    orient: [{ type: Input }],
    tickArguments: [{ type: Input }],
    tickValues: [{ type: Input }],
    tickStroke: [{ type: Input }],
    trimTicks: [{ type: Input }],
    maxTickLength: [{ type: Input }],
    tickFormatting: [{ type: Input }],
    showGridLines: [{ type: Input }],
    gridLineHeight: [{ type: Input }],
    width: [{ type: Input }],
    rotateTicks: [{ type: Input }],
    dimensionsChanged: [{ type: Output }],
    ticksElement: [{ type: ViewChild, args: ['ticksel',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(XAxisTicksComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-x-axis-ticks]',
                template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="tickTransform(tick)">
        <title>{{ tickFormat(tick) }}</title>
        <svg:text
          stroke-width="0.01"
          [attr.text-anchor]="textAnchor"
          [attr.transform]="textTransform"
          [style.font-size]="'12px'"
        >
          {{ tickTrim(tickFormat(tick)) }}
        </svg:text>
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let tick of ticks" [attr.transform]="tickTransform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line class="gridline-path gridline-path-vertical" [attr.y1]="-gridLineHeight" y2="0" />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { tickArguments: [{
            type: Input
        }], tickStroke: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], rotateTicks: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], scale: [{
            type: Input
        }], orient: [{
            type: Input
        }], tickValues: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], gridLineHeight: [{
            type: Input
        }], width: [{
            type: Input
        }], ticksElement: [{
            type: ViewChild,
            args: ['ticksel']
        }] }); })();

class XAxisComponent {
    constructor() {
        this.rotateTicks = true;
        this.showGridLines = false;
        this.xOrient = 'bottom';
        this.xAxisOffset = 0;
        this.dimensionsChanged = new EventEmitter();
        this.xAxisClassName = 'x axis';
        this.labelOffset = 0;
        this.fill = 'none';
        this.stroke = 'stroke';
        this.tickStroke = '#ccc';
        this.strokeWidth = 'none';
        this.padding = 5;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.transform = `translate(0,${this.xAxisOffset + this.padding + this.dims.height})`;
        if (typeof this.xAxisTickCount !== 'undefined') {
            this.tickArguments = [this.xAxisTickCount];
        }
    }
    emitTicksHeight({ height }) {
        const newLabelOffset = height + 25 + 5;
        if (newLabelOffset !== this.labelOffset) {
            this.labelOffset = newLabelOffset;
            setTimeout(() => {
                this.dimensionsChanged.emit({ height });
            }, 0);
        }
    }
}
XAxisComponent.ɵfac = function XAxisComponent_Factory(t) { return new (t || XAxisComponent)(); };
XAxisComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: XAxisComponent, selectors: [["g", "ngx-charts-x-axis", ""]], viewQuery: function XAxisComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(XAxisTicksComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ticksComponent = _t.first);
    } }, inputs: { rotateTicks: "rotateTicks", showGridLines: "showGridLines", xOrient: "xOrient", xAxisOffset: "xAxisOffset", xScale: "xScale", dims: "dims", trimTicks: "trimTicks", maxTickLength: "maxTickLength", tickFormatting: "tickFormatting", showLabel: "showLabel", labelText: "labelText", ticks: "ticks", xAxisTickInterval: "xAxisTickInterval", xAxisTickCount: "xAxisTickCount" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c6, decls: 3, vars: 4, consts: [["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]], template: function XAxisComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵtemplate(1, XAxisComponent__svg_g_1_Template, 1, 12, "g", 0);
        ɵngcc0.ɵɵtemplate(2, XAxisComponent__svg_g_2_Template, 1, 5, "g", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("class", ctx.xAxisClassName)("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xScale);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showLabel);
    } }, directives: [ɵngcc1.NgIf, XAxisTicksComponent, AxisLabelComponent], encapsulation: 2, changeDetection: 0 });
XAxisComponent.propDecorators = {
    xScale: [{ type: Input }],
    dims: [{ type: Input }],
    trimTicks: [{ type: Input }],
    rotateTicks: [{ type: Input }],
    maxTickLength: [{ type: Input }],
    tickFormatting: [{ type: Input }],
    showGridLines: [{ type: Input }],
    showLabel: [{ type: Input }],
    labelText: [{ type: Input }],
    ticks: [{ type: Input }],
    xAxisTickInterval: [{ type: Input }],
    xAxisTickCount: [{ type: Input }],
    xOrient: [{ type: Input }],
    xAxisOffset: [{ type: Input }],
    dimensionsChanged: [{ type: Output }],
    ticksComponent: [{ type: ViewChild, args: [XAxisTicksComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(XAxisComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-x-axis]',
                template: `
    <svg:g [attr.class]="xAxisClassName" [attr.transform]="transform">
      <svg:g
        ngx-charts-x-axis-ticks
        *ngIf="xScale"
        [trimTicks]="trimTicks"
        [rotateTicks]="rotateTicks"
        [maxTickLength]="maxTickLength"
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickStroke]="tickStroke"
        [scale]="xScale"
        [orient]="xOrient"
        [showGridLines]="showGridLines"
        [gridLineHeight]="dims.height"
        [width]="dims.width"
        [tickValues]="ticks"
        (dimensionsChanged)="emitTicksHeight($event)"
      />
      <svg:g
        ngx-charts-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="'bottom'"
        [height]="dims.height"
        [width]="dims.width"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { rotateTicks: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], xOrient: [{
            type: Input
        }], xAxisOffset: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], xScale: [{
            type: Input
        }], dims: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], labelText: [{
            type: Input
        }], ticks: [{
            type: Input
        }], xAxisTickInterval: [{
            type: Input
        }], xAxisTickCount: [{
            type: Input
        }], ticksComponent: [{
            type: ViewChild,
            args: [XAxisTicksComponent]
        }] }); })();

/**
 * Generates a rounded rectanglar path
 *
 * @export
 * @param x, y, w, h, r, tl, tr, bl, br
 */
function roundedRect(x, y, w, h, r, [tl, tr, bl, br]) {
    let retval = '';
    w = Math.floor(w);
    h = Math.floor(h);
    w = w === 0 ? 1 : w;
    h = h === 0 ? 1 : h;
    retval = `M${[x + r, y]}`;
    retval += `h${w - 2 * r}`;
    if (tr) {
        retval += `a${[r, r]} 0 0 1 ${[r, r]}`;
    }
    else {
        retval += `h${r}v${r}`;
    }
    retval += `v${h - 2 * r}`;
    if (br) {
        retval += `a${[r, r]} 0 0 1 ${[-r, r]}`;
    }
    else {
        retval += `v${r}h${-r}`;
    }
    retval += `h${2 * r - w}`;
    if (bl) {
        retval += `a${[r, r]} 0 0 1 ${[-r, -r]}`;
    }
    else {
        retval += `h${-r}v${-r}`;
    }
    retval += `v${2 * r - h}`;
    if (tl) {
        retval += `a${[r, r]} 0 0 1 ${[r, -r]}`;
    }
    else {
        retval += `v${-r}h${r}`;
    }
    retval += `z`;
    return retval;
}

class YAxisTicksComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.tickArguments = [5];
        this.tickStroke = '#ccc';
        this.trimTicks = true;
        this.maxTickLength = 16;
        this.showGridLines = false;
        this.showRefLabels = false;
        this.showRefLines = false;
        this.dimensionsChanged = new EventEmitter();
        this.innerTickSize = 6;
        this.tickPadding = 3;
        this.verticalSpacing = 20;
        this.textAnchor = 'middle';
        this.width = 0;
        this.outerTickSize = 6;
        this.rotateLabels = false;
        this.referenceLineLength = 0;
    }
    ngOnChanges(changes) {
        this.update();
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateDims());
    }
    updateDims() {
        if (!isPlatformBrowser(this.platformId)) {
            // for SSR, use approximate value instead of measured
            this.width = this.getApproximateAxisWidth();
            this.dimensionsChanged.emit({ width: this.width });
            return;
        }
        const width = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().width, 10);
        if (width !== this.width) {
            this.width = width;
            this.dimensionsChanged.emit({ width });
            setTimeout(() => this.updateDims());
        }
    }
    update() {
        let scale;
        const sign = this.orient === 'top' || this.orient === 'right' ? -1 : 1;
        this.tickSpacing = Math.max(this.innerTickSize, 0) + this.tickPadding;
        scale = this.scale;
        this.ticks = this.getTicks();
        if (this.tickFormatting) {
            this.tickFormat = this.tickFormatting;
        }
        else if (scale.tickFormat) {
            this.tickFormat = scale.tickFormat.apply(scale, this.tickArguments);
        }
        else {
            this.tickFormat = function (d) {
                if (d.constructor.name === 'Date') {
                    return d.toLocaleDateString();
                }
                return d.toLocaleString();
            };
        }
        this.adjustedScale = scale.bandwidth
            ? function (d) {
                return scale(d) + scale.bandwidth() * 0.5;
            }
            : scale;
        if (this.showRefLines && this.referenceLines) {
            this.setReferencelines();
        }
        switch (this.orient) {
            case 'top':
                this.transform = function (tick) {
                    return 'translate(' + this.adjustedScale(tick) + ',0)';
                };
                this.textAnchor = 'middle';
                this.y2 = this.innerTickSize * sign;
                this.y1 = this.tickSpacing * sign;
                this.dy = sign < 0 ? '0em' : '.71em';
                break;
            case 'bottom':
                this.transform = function (tick) {
                    return 'translate(' + this.adjustedScale(tick) + ',0)';
                };
                this.textAnchor = 'middle';
                this.y2 = this.innerTickSize * sign;
                this.y1 = this.tickSpacing * sign;
                this.dy = sign < 0 ? '0em' : '.71em';
                break;
            case 'left':
                this.transform = function (tick) {
                    return 'translate(0,' + this.adjustedScale(tick) + ')';
                };
                this.textAnchor = 'end';
                this.x2 = this.innerTickSize * -sign;
                this.x1 = this.tickSpacing * -sign;
                this.dy = '.32em';
                break;
            case 'right':
                this.transform = function (tick) {
                    return 'translate(0,' + this.adjustedScale(tick) + ')';
                };
                this.textAnchor = 'start';
                this.x2 = this.innerTickSize * -sign;
                this.x1 = this.tickSpacing * -sign;
                this.dy = '.32em';
                break;
            default:
        }
        setTimeout(() => this.updateDims());
    }
    setReferencelines() {
        this.refMin = this.adjustedScale(Math.min.apply(null, this.referenceLines.map(item => item.value)));
        this.refMax = this.adjustedScale(Math.max.apply(null, this.referenceLines.map(item => item.value)));
        this.referenceLineLength = this.referenceLines.length;
        this.referenceAreaPath = roundedRect(0, this.refMax, this.gridLineWidth, this.refMin - this.refMax, 0, [
            false,
            false,
            false,
            false
        ]);
    }
    getTicks() {
        let ticks;
        const maxTicks = this.getMaxTicks(20);
        const maxScaleTicks = this.getMaxTicks(50);
        if (this.tickValues) {
            ticks = this.tickValues;
        }
        else if (this.scale.ticks) {
            ticks = this.scale.ticks.apply(this.scale, [maxScaleTicks]);
        }
        else {
            ticks = this.scale.domain();
            ticks = reduceTicks(ticks, maxTicks);
        }
        return ticks;
    }
    getMaxTicks(tickHeight) {
        return Math.floor(this.height / tickHeight);
    }
    tickTransform(tick) {
        return `translate(${this.adjustedScale(tick)},${this.verticalSpacing})`;
    }
    gridLineTransform() {
        return `translate(5,0)`;
    }
    tickTrim(label) {
        return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
    }
    getApproximateAxisWidth() {
        const maxChars = Math.max(...this.ticks.map(t => this.tickTrim(this.tickFormat(t)).length));
        const charWidth = 7;
        return maxChars * charWidth;
    }
}
YAxisTicksComponent.ɵfac = function YAxisTicksComponent_Factory(t) { return new (t || YAxisTicksComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
YAxisTicksComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: YAxisTicksComponent, selectors: [["g", "ngx-charts-y-axis-ticks", ""]], viewQuery: function YAxisTicksComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    } }, inputs: { tickArguments: "tickArguments", tickStroke: "tickStroke", trimTicks: "trimTicks", maxTickLength: "maxTickLength", showGridLines: "showGridLines", showRefLabels: "showRefLabels", showRefLines: "showRefLines", scale: "scale", orient: "orient", tickValues: "tickValues", tickFormatting: "tickFormatting", gridLineWidth: "gridLineWidth", height: "height", referenceLines: "referenceLines" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c7, decls: 6, vars: 4, consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], ["class", "reference-area", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [1, "reference-area"], [4, "ngIf"], ["class", "gridline-path gridline-path-horizontal", "x1", "0", 4, "ngIf"], ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"], ["x1", "0", 1, "refline-path", "gridline-path-horizontal"], [1, "refline-label"]], template: function YAxisTicksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", null, 0);
        ɵngcc0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_2_Template, 5, 9, "g", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, YAxisTicksComponent__svg_path_3_Template, 1, 2, "path", 2);
        ɵngcc0.ɵɵtemplate(4, YAxisTicksComponent__svg_g_4_Template, 2, 2, "g", 3);
        ɵngcc0.ɵɵtemplate(5, YAxisTicksComponent__svg_g_5_Template, 2, 1, "g", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.referenceLineLength > 1 && ctx.refMax && ctx.refMin && ctx.showRefLines);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.referenceLines);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
YAxisTicksComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
YAxisTicksComponent.propDecorators = {
    scale: [{ type: Input }],
    orient: [{ type: Input }],
    tickArguments: [{ type: Input }],
    tickValues: [{ type: Input }],
    tickStroke: [{ type: Input }],
    trimTicks: [{ type: Input }],
    maxTickLength: [{ type: Input }],
    tickFormatting: [{ type: Input }],
    showGridLines: [{ type: Input }],
    gridLineWidth: [{ type: Input }],
    height: [{ type: Input }],
    referenceLines: [{ type: Input }],
    showRefLabels: [{ type: Input }],
    showRefLines: [{ type: Input }],
    dimensionsChanged: [{ type: Output }],
    ticksElement: [{ type: ViewChild, args: ['ticksel',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(YAxisTicksComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-y-axis-ticks]',
                template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="transform(tick)">
        <title>{{ tickFormat(tick) }}</title>
        <svg:text
          stroke-width="0.01"
          [attr.dy]="dy"
          [attr.x]="x1"
          [attr.y]="y1"
          [attr.text-anchor]="textAnchor"
          [style.font-size]="'12px'"
        >
          {{ tickTrim(tickFormat(tick)) }}
        </svg:text>
      </svg:g>
    </svg:g>

    <svg:path
      *ngIf="referenceLineLength > 1 && refMax && refMin && showRefLines"
      class="reference-area"
      [attr.d]="referenceAreaPath"
      [attr.transform]="gridLineTransform()"
    />
    <svg:g *ngFor="let tick of ticks" [attr.transform]="transform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line
          *ngIf="orient === 'left'"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
        />
        <svg:line
          *ngIf="orient === 'right'"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="-gridLineWidth"
        />
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let refLine of referenceLines">
      <svg:g *ngIf="showRefLines" [attr.transform]="transform(refLine.value)">
        <svg:line
          class="refline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
          [attr.transform]="gridLineTransform()"
        />
        <svg:g *ngIf="showRefLabels">
          <title>{{ tickTrim(tickFormat(refLine.value)) }}</title>
          <svg:text
            class="refline-label"
            [attr.dy]="dy"
            [attr.y]="-6"
            [attr.x]="gridLineWidth"
            [attr.text-anchor]="textAnchor"
          >
            {{ refLine.name }}
          </svg:text>
        </svg:g>
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { tickArguments: [{
            type: Input
        }], tickStroke: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], showRefLabels: [{
            type: Input
        }], showRefLines: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], scale: [{
            type: Input
        }], orient: [{
            type: Input
        }], tickValues: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], gridLineWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], referenceLines: [{
            type: Input
        }], ticksElement: [{
            type: ViewChild,
            args: ['ticksel']
        }] }); })();

class YAxisComponent {
    constructor() {
        this.showGridLines = false;
        this.yOrient = 'left';
        this.yAxisOffset = 0;
        this.dimensionsChanged = new EventEmitter();
        this.yAxisClassName = 'y axis';
        this.labelOffset = 15;
        this.fill = 'none';
        this.stroke = '#CCC';
        this.tickStroke = '#CCC';
        this.strokeWidth = 1;
        this.padding = 5;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.offset = -(this.yAxisOffset + this.padding);
        if (this.yOrient === 'right') {
            this.labelOffset = 65;
            this.transform = `translate(${this.offset + this.dims.width} , 0)`;
        }
        else {
            this.offset = this.offset;
            this.transform = `translate(${this.offset} , 0)`;
        }
        if (this.yAxisTickCount !== undefined) {
            this.tickArguments = [this.yAxisTickCount];
        }
    }
    emitTicksWidth({ width }) {
        if (width !== this.labelOffset && this.yOrient === 'right') {
            this.labelOffset = width + this.labelOffset;
            setTimeout(() => {
                this.dimensionsChanged.emit({ width });
            }, 0);
        }
        else if (width !== this.labelOffset) {
            this.labelOffset = width;
            setTimeout(() => {
                this.dimensionsChanged.emit({ width });
            }, 0);
        }
    }
}
YAxisComponent.ɵfac = function YAxisComponent_Factory(t) { return new (t || YAxisComponent)(); };
YAxisComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: YAxisComponent, selectors: [["g", "ngx-charts-y-axis", ""]], viewQuery: function YAxisComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(YAxisTicksComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ticksComponent = _t.first);
    } }, inputs: { showGridLines: "showGridLines", yOrient: "yOrient", yAxisOffset: "yAxisOffset", yScale: "yScale", dims: "dims", trimTicks: "trimTicks", maxTickLength: "maxTickLength", tickFormatting: "tickFormatting", ticks: "ticks", showLabel: "showLabel", labelText: "labelText", yAxisTickInterval: "yAxisTickInterval", yAxisTickCount: "yAxisTickCount", referenceLines: "referenceLines", showRefLines: "showRefLines", showRefLabels: "showRefLabels" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c8, decls: 3, vars: 4, consts: [["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-y-axis-ticks", "", 3, "trimTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickValues", "tickStroke", "scale", "orient", "showGridLines", "gridLineWidth", "referenceLines", "showRefLines", "showRefLabels", "height", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]], template: function YAxisComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵtemplate(1, YAxisComponent__svg_g_1_Template, 1, 14, "g", 0);
        ɵngcc0.ɵɵtemplate(2, YAxisComponent__svg_g_2_Template, 1, 5, "g", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("class", ctx.yAxisClassName)("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yScale);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showLabel);
    } }, directives: [ɵngcc1.NgIf, YAxisTicksComponent, AxisLabelComponent], encapsulation: 2, changeDetection: 0 });
YAxisComponent.propDecorators = {
    yScale: [{ type: Input }],
    dims: [{ type: Input }],
    trimTicks: [{ type: Input }],
    maxTickLength: [{ type: Input }],
    tickFormatting: [{ type: Input }],
    ticks: [{ type: Input }],
    showGridLines: [{ type: Input }],
    showLabel: [{ type: Input }],
    labelText: [{ type: Input }],
    yAxisTickInterval: [{ type: Input }],
    yAxisTickCount: [{ type: Input }],
    yOrient: [{ type: Input }],
    referenceLines: [{ type: Input }],
    showRefLines: [{ type: Input }],
    showRefLabels: [{ type: Input }],
    yAxisOffset: [{ type: Input }],
    dimensionsChanged: [{ type: Output }],
    ticksComponent: [{ type: ViewChild, args: [YAxisTicksComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(YAxisComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-y-axis]',
                template: `
    <svg:g [attr.class]="yAxisClassName" [attr.transform]="transform">
      <svg:g
        ngx-charts-y-axis-ticks
        *ngIf="yScale"
        [trimTicks]="trimTicks"
        [maxTickLength]="maxTickLength"
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickValues]="ticks"
        [tickStroke]="tickStroke"
        [scale]="yScale"
        [orient]="yOrient"
        [showGridLines]="showGridLines"
        [gridLineWidth]="dims.width"
        [referenceLines]="referenceLines"
        [showRefLines]="showRefLines"
        [showRefLabels]="showRefLabels"
        [height]="dims.height"
        (dimensionsChanged)="emitTicksWidth($event)"
      />

      <svg:g
        ngx-charts-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="yOrient"
        [height]="dims.height"
        [width]="dims.width"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { showGridLines: [{
            type: Input
        }], yOrient: [{
            type: Input
        }], yAxisOffset: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], yScale: [{
            type: Input
        }], dims: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], ticks: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], labelText: [{
            type: Input
        }], yAxisTickInterval: [{
            type: Input
        }], yAxisTickCount: [{
            type: Input
        }], referenceLines: [{
            type: Input
        }], showRefLines: [{
            type: Input
        }], showRefLabels: [{
            type: Input
        }], ticksComponent: [{
            type: ViewChild,
            args: [YAxisTicksComponent]
        }] }); })();

class AxesModule {
}
AxesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AxesModule });
AxesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AxesModule_Factory(t) { return new (t || AxesModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AxesModule, { declarations: function () { return [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AxesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent],
                exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]
            }]
    }], null, null); })();

var StyleTypes;
(function (StyleTypes) {
    StyleTypes[StyleTypes["popover"] = 'popover'] = "popover";
    StyleTypes[StyleTypes["tooltip"] = 'tooltip'] = "tooltip";
})(StyleTypes || (StyleTypes = {}));

var AlignmentTypes;
(function (AlignmentTypes) {
    AlignmentTypes[AlignmentTypes["left"] = 'left'] = "left";
    AlignmentTypes[AlignmentTypes["center"] = 'center'] = "center";
    AlignmentTypes[AlignmentTypes["right"] = 'right'] = "right";
})(AlignmentTypes || (AlignmentTypes = {}));

var ShowTypes;
(function (ShowTypes) {
    ShowTypes[ShowTypes["all"] = 'all'] = "all";
    ShowTypes[ShowTypes["focus"] = 'focus'] = "focus";
    ShowTypes[ShowTypes["mouseover"] = 'mouseover'] = "mouseover";
})(ShowTypes || (ShowTypes = {}));

class TooltipDirective {
    constructor(tooltipService, viewContainerRef, renderer) {
        this.tooltipService = tooltipService;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.tooltipCssClass = '';
        this.tooltipTitle = '';
        this.tooltipAppendToBody = true;
        this.tooltipSpacing = 10;
        this.tooltipDisabled = false;
        this.tooltipShowCaret = true;
        this.tooltipPlacement = PlacementTypes.top;
        this.tooltipAlignment = AlignmentTypes.center;
        this.tooltipType = StyleTypes.popover;
        this.tooltipCloseOnClickOutside = true;
        this.tooltipCloseOnMouseLeave = true;
        this.tooltipHideTimeout = 300;
        this.tooltipShowTimeout = 100;
        this.tooltipShowEvent = ShowTypes.all;
        this.tooltipImmediateExit = false;
        this.show = new EventEmitter();
        this.hide = new EventEmitter();
    }
    get listensForFocus() {
        return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.focus;
    }
    get listensForHover() {
        return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.mouseover;
    }
    ngOnDestroy() {
        this.hideTooltip(true);
    }
    onFocus() {
        if (this.listensForFocus) {
            this.showTooltip();
        }
    }
    onBlur() {
        if (this.listensForFocus) {
            this.hideTooltip(true);
        }
    }
    onMouseEnter() {
        if (this.listensForHover) {
            this.showTooltip();
        }
    }
    onMouseLeave(target) {
        if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            clearTimeout(this.timeout);
            if (this.component) {
                const contentDom = this.component.instance.element.nativeElement;
                const contains = contentDom.contains(target);
                if (contains)
                    return;
            }
            this.hideTooltip(this.tooltipImmediateExit);
        }
    }
    onMouseClick() {
        if (this.listensForHover) {
            this.hideTooltip(true);
        }
    }
    showTooltip(immediate) {
        if (this.component || this.tooltipDisabled)
            return;
        const time = immediate
            ? 0
            : this.tooltipShowTimeout + (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 300 : 0);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.tooltipService.destroyAll();
            const options = this.createBoundOptions();
            this.component = this.tooltipService.create(options);
            // add a tiny timeout to avoid event re-triggers
            setTimeout(() => {
                if (this.component) {
                    this.addHideListeners(this.component.instance.element.nativeElement);
                }
            }, 10);
            this.show.emit(true);
        }, time);
    }
    addHideListeners(tooltip) {
        // on mouse enter, cancel the hide triggered by the leave
        this.mouseEnterContentEvent = this.renderer.listen(tooltip, 'mouseenter', () => {
            clearTimeout(this.timeout);
        });
        // content mouse leave listener
        if (this.tooltipCloseOnMouseLeave) {
            this.mouseLeaveContentEvent = this.renderer.listen(tooltip, 'mouseleave', () => {
                this.hideTooltip(this.tooltipImmediateExit);
            });
        }
        // content close on click outside
        if (this.tooltipCloseOnClickOutside) {
            this.documentClickEvent = this.renderer.listen('window', 'click', event => {
                const contains = tooltip.contains(event.target);
                if (!contains)
                    this.hideTooltip();
            });
        }
    }
    hideTooltip(immediate = false) {
        if (!this.component)
            return;
        const destroyFn = () => {
            // remove events
            if (this.mouseLeaveContentEvent)
                this.mouseLeaveContentEvent();
            if (this.mouseEnterContentEvent)
                this.mouseEnterContentEvent();
            if (this.documentClickEvent)
                this.documentClickEvent();
            // emit events
            this.hide.emit(true);
            // destroy component
            this.tooltipService.destroy(this.component);
            this.component = undefined;
        };
        clearTimeout(this.timeout);
        if (!immediate) {
            this.timeout = setTimeout(destroyFn, this.tooltipHideTimeout);
        }
        else {
            destroyFn();
        }
    }
    createBoundOptions() {
        return {
            title: this.tooltipTitle,
            template: this.tooltipTemplate,
            host: this.viewContainerRef.element,
            placement: this.tooltipPlacement,
            alignment: this.tooltipAlignment,
            type: this.tooltipType,
            showCaret: this.tooltipShowCaret,
            cssClass: this.tooltipCssClass,
            spacing: this.tooltipSpacing,
            context: this.tooltipContext
        };
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵngcc0.ɵɵdirectiveInject(TooltipService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
TooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "ngx-tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() { return ctx.onFocus(); })("blur", function TooltipDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event.target); })("click", function TooltipDirective_click_HostBindingHandler() { return ctx.onMouseClick(); });
    } }, inputs: { tooltipCssClass: "tooltipCssClass", tooltipTitle: "tooltipTitle", tooltipAppendToBody: "tooltipAppendToBody", tooltipSpacing: "tooltipSpacing", tooltipDisabled: "tooltipDisabled", tooltipShowCaret: "tooltipShowCaret", tooltipPlacement: "tooltipPlacement", tooltipAlignment: "tooltipAlignment", tooltipType: "tooltipType", tooltipCloseOnClickOutside: "tooltipCloseOnClickOutside", tooltipCloseOnMouseLeave: "tooltipCloseOnMouseLeave", tooltipHideTimeout: "tooltipHideTimeout", tooltipShowTimeout: "tooltipShowTimeout", tooltipShowEvent: "tooltipShowEvent", tooltipImmediateExit: "tooltipImmediateExit", tooltipTemplate: "tooltipTemplate", tooltipContext: "tooltipContext" }, outputs: { show: "show", hide: "hide" } });
TooltipDirective.ctorParameters = () => [
    { type: TooltipService },
    { type: ViewContainerRef },
    { type: Renderer2 }
];
TooltipDirective.propDecorators = {
    tooltipCssClass: [{ type: Input }],
    tooltipTitle: [{ type: Input }],
    tooltipAppendToBody: [{ type: Input }],
    tooltipSpacing: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipShowCaret: [{ type: Input }],
    tooltipPlacement: [{ type: Input }],
    tooltipAlignment: [{ type: Input }],
    tooltipType: [{ type: Input }],
    tooltipCloseOnClickOutside: [{ type: Input }],
    tooltipCloseOnMouseLeave: [{ type: Input }],
    tooltipHideTimeout: [{ type: Input }],
    tooltipShowTimeout: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    tooltipShowEvent: [{ type: Input }],
    tooltipContext: [{ type: Input }],
    tooltipImmediateExit: [{ type: Input }],
    show: [{ type: Output }],
    hide: [{ type: Output }],
    onFocus: [{ type: HostListener, args: ['focusin',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event.target'],] }],
    onMouseClick: [{ type: HostListener, args: ['click',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{ selector: '[ngx-tooltip]' }]
    }], function () { return [{ type: TooltipService }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }]; }, { tooltipCssClass: [{
            type: Input
        }], tooltipTitle: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipSpacing: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipShowCaret: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAlignment: [{
            type: Input
        }], tooltipType: [{
            type: Input
        }], tooltipCloseOnClickOutside: [{
            type: Input
        }], tooltipCloseOnMouseLeave: [{
            type: Input
        }], tooltipHideTimeout: [{
            type: Input
        }], tooltipShowTimeout: [{
            type: Input
        }], tooltipShowEvent: [{
            type: Input
        }], tooltipImmediateExit: [{
            type: Input
        }], show: [{
            type: Output
        }], hide: [{
            type: Output
        }], onFocus: [{
            type: HostListener,
            args: ['focusin']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event.target']]
        }], onMouseClick: [{
            type: HostListener,
            args: ['click']
        }], tooltipTemplate: [{
            type: Input
        }], tooltipContext: [{
            type: Input
        }] }); })();

class TooltipModule {
}
TooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, providers: [InjectionService, TooltipService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipContentComponent, TooltipDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipContentComponent, TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [TooltipContentComponent, TooltipDirective],
                providers: [InjectionService, TooltipService],
                exports: [TooltipContentComponent, TooltipDirective],
                imports: [CommonModule],
                entryComponents: [TooltipContentComponent]
            }]
    }], null, null); })();

/**
 * Formats a label given a date, number or string.
 *
 * @export
 */
function formatLabel(label) {
    if (label instanceof Date) {
        label = label.toLocaleDateString();
    }
    else {
        label = label.toLocaleString();
    }
    return label;
}
/**
 * Escapes a label.
 *
 * @export
 */
function escapeLabel(label) {
    return label.toLocaleString().replace(/[&'`"<>]/g, match => {
        return {
            '&': '&amp;',
            // tslint:disable-next-line: quotemark
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        }[match];
    });
}

const cache = {};
/**
 * Generates a short id.
 *
 * Description:
 *   A 4-character alphanumeric sequence (364 = 1.6 million)
 *   This should only be used for JavaScript specific models.
 *   http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 *
 *   Example: `ebgf`
 */
function id() {
    let newId = ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    // append a 'a' because neo gets mad
    newId = `a${newId}`;
    // ensure not already used
    if (!cache[newId]) {
        cache[newId] = true;
        return newId;
    }
    return id();
}

class CircleSeriesComponent {
    constructor() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.barVisible = false;
    }
    ngOnInit() {
        this.gradientId = 'grad' + id().toString();
        this.gradientFill = `url(#${this.gradientId})`;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.circle = this.getActiveCircle();
    }
    getActiveCircle() {
        const indexActiveDataPoint = this.data.series.findIndex(d => {
            const label = d.name;
            return label && this.visibleValue && label.toString() === this.visibleValue.toString() && d.value !== undefined;
        });
        if (indexActiveDataPoint === -1) {
            // No valid point is 'active/hovered over' at this moment.
            return undefined;
        }
        return this.mapDataPointToCircle(this.data.series[indexActiveDataPoint], indexActiveDataPoint);
    }
    mapDataPointToCircle(d, i) {
        const seriesName = this.data.name;
        const value = d.value;
        const label = d.name;
        const tooltipLabel = formatLabel(label);
        let cx;
        if (this.scaleType === 'time') {
            cx = this.xScale(label);
        }
        else if (this.scaleType === 'linear') {
            cx = this.xScale(Number(label));
        }
        else {
            cx = this.xScale(label);
        }
        const cy = this.yScale(this.type === 'standard' ? value : d.d1);
        const radius = 5;
        const height = this.yScale.range()[0] - cy;
        const opacity = 1;
        let color;
        if (this.colors.scaleType === 'linear') {
            if (this.type === 'standard') {
                color = this.colors.getColor(value);
            }
            else {
                color = this.colors.getColor(d.d1);
            }
        }
        else {
            color = this.colors.getColor(seriesName);
        }
        const data = Object.assign({}, d, {
            series: seriesName,
            value,
            name: label
        });
        return {
            classNames: [`circle-data-${i}`],
            value,
            label,
            data,
            cx,
            cy,
            radius,
            height,
            tooltipLabel,
            color,
            opacity,
            seriesName,
            gradientStops: this.getGradientStops(color),
            min: d.min,
            max: d.max
        };
    }
    getTooltipText({ tooltipLabel, value, seriesName, min, max }) {
        return `
      <span class="tooltip-label">${escapeLabel(seriesName)} • ${escapeLabel(tooltipLabel)}</span>
      <span class="tooltip-val">${value.toLocaleString()}${this.getTooltipMinMaxText(min, max)}</span>
    `;
    }
    getTooltipMinMaxText(min, max) {
        if (min !== undefined || max !== undefined) {
            let result = ' (';
            if (min !== undefined) {
                if (max === undefined) {
                    result += '≥';
                }
                result += min.toLocaleString();
                if (max !== undefined) {
                    result += ' - ';
                }
            }
            else if (max !== undefined) {
                result += '≤';
            }
            if (max !== undefined) {
                result += max.toLocaleString();
            }
            result += ')';
            return result;
        }
        else {
            return '';
        }
    }
    getGradientStops(color) {
        return [
            {
                offset: 0,
                color,
                opacity: 0.2
            },
            {
                offset: 100,
                color,
                opacity: 1
            }
        ];
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    activateCircle() {
        this.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle() {
        this.barVisible = false;
        this.circle.opacity = 0;
        this.deactivate.emit({ name: this.data.name });
    }
}
CircleSeriesComponent.ɵfac = function CircleSeriesComponent_Factory(t) { return new (t || CircleSeriesComponent)(); };
CircleSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CircleSeriesComponent, selectors: [["g", "ngx-charts-circle-series", ""]], inputs: { type: "type", tooltipDisabled: "tooltipDisabled", data: "data", xScale: "xScale", yScale: "yScale", colors: "colors", scaleType: "scaleType", visibleValue: "visibleValue", activeEntries: "activeEntries", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c9, decls: 1, vars: 1, consts: [[4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops"], ["class", "tooltip-bar", 4, "ngIf"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"], [1, "tooltip-bar"]], template: function CircleSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CircleSeriesComponent__svg_g_0_Template, 5, 20, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.circle);
    } }, directives: function () { return [ɵngcc1.NgIf, SvgLinearGradientComponent, CircleComponent, TooltipDirective]; }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        opacity: 0
                    }),
                    animate(250, style({ opacity: 1 }))
                ])
            ])
        ] }, changeDetection: 0 });
CircleSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    type: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    visibleValue: [{ type: Input }],
    activeEntries: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CircleSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-circle-series]',
                template: `
    <svg:g *ngIf="circle">
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          orientation="vertical"
          [name]="gradientId"
          [stops]="circle.gradientStops"
        />
      </defs>
      <svg:rect
        *ngIf="barVisible && type === 'standard'"
        [@animationState]="'active'"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="gradientFill"
        class="tooltip-bar"
      />
      <svg:g
        ngx-charts-circle
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circle.radius"
        [fill]="circle.color"
        [class.active]="isActive({ name: circle.seriesName })"
        [pointerEvents]="circle.value === 0 ? 'none' : 'all'"
        [data]="circle.value"
        [classNames]="circle.classNames"
        (select)="onClick(circle.data)"
        (activate)="activateCircle()"
        (deactivate)="deactivateCircle()"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0
                            }),
                            animate(250, style({ opacity: 1 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], visibleValue: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class CircleComponent {
    constructor() {
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    onClick() {
        this.select.emit(this.data);
    }
    onMouseEnter() {
        this.activate.emit(this.data);
    }
    onMouseLeave() {
        this.deactivate.emit(this.data);
    }
    ngOnChanges(changes) {
        this.classNames = Array.isArray(this.classNames) ? this.classNames.join(' ') : '';
        this.classNames += 'circle';
    }
}
CircleComponent.ɵfac = function CircleComponent_Factory(t) { return new (t || CircleComponent)(); };
CircleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CircleComponent, selectors: [["g", "ngx-charts-circle", ""]], hostBindings: function CircleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CircleComponent_click_HostBindingHandler() { return ctx.onClick(); })("mouseenter", function CircleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function CircleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { classNames: "classNames", cx: "cx", cy: "cy", r: "r", fill: "fill", stroke: "stroke", data: "data", circleOpacity: "circleOpacity", pointerEvents: "pointerEvents" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c11, decls: 1, vars: 8, template: function CircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(0, "circle");
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r)("fill", ctx.fill)("stroke", ctx.stroke)("opacity", ctx.circleOpacity)("class", ctx.classNames)("pointer-events", ctx.pointerEvents);
    } }, encapsulation: 2, changeDetection: 0 });
CircleComponent.propDecorators = {
    cx: [{ type: Input }],
    cy: [{ type: Input }],
    r: [{ type: Input }],
    fill: [{ type: Input }],
    stroke: [{ type: Input }],
    data: [{ type: Input }],
    classNames: [{ type: Input }],
    circleOpacity: [{ type: Input }],
    pointerEvents: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CircleComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-circle]',
                template: `
    <svg:circle
      [attr.cx]="cx"
      [attr.cy]="cy"
      [attr.r]="r"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.opacity]="circleOpacity"
      [attr.class]="classNames"
      [attr.pointer-events]="pointerEvents"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], classNames: [{
            type: Input
        }], cx: [{
            type: Input
        }], cy: [{
            type: Input
        }], r: [{
            type: Input
        }], fill: [{
            type: Input
        }], stroke: [{
            type: Input
        }], data: [{
            type: Input
        }], circleOpacity: [{
            type: Input
        }], pointerEvents: [{
            type: Input
        }] }); })();

class GridPanelComponent {
}
GridPanelComponent.ɵfac = function GridPanelComponent_Factory(t) { return new (t || GridPanelComponent)(); };
GridPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GridPanelComponent, selectors: [["g", "ngx-charts-grid-panel", ""]], inputs: { path: "path", width: "width", height: "height", x: "x", y: "y" }, attrs: _c12, decls: 1, vars: 4, consts: [["stroke", "none", 1, "gridpanel"]], template: function GridPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(0, "rect", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("height", ctx.height)("width", ctx.width)("x", ctx.x)("y", ctx.y);
    } }, encapsulation: 2, changeDetection: 0 });
GridPanelComponent.propDecorators = {
    path: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridPanelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-grid-panel]',
                template: `
    <svg:rect [attr.height]="height" [attr.width]="width" [attr.x]="x" [attr.y]="y" stroke="none" class="gridpanel" />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { path: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }] }); })();

class GridPanelSeriesComponent {
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.gridPanels = this.getGridPanels();
    }
    getGridPanels() {
        return this.data.map(d => {
            let offset;
            let width;
            let height;
            let x;
            let y;
            let className = 'odd';
            if (this.orient === 'vertical') {
                const position = this.xScale(d.name);
                const positionIndex = Number.parseInt((position / this.xScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = 'even';
                }
                offset = this.xScale.bandwidth() * this.xScale.paddingInner();
                width = this.xScale.bandwidth() + offset;
                height = this.dims.height;
                x = this.xScale(d.name) - offset / 2;
                y = 0;
            }
            else if (this.orient === 'horizontal') {
                const position = this.yScale(d.name);
                const positionIndex = Number.parseInt((position / this.yScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = 'even';
                }
                offset = this.yScale.bandwidth() * this.yScale.paddingInner();
                width = this.dims.width;
                height = this.yScale.bandwidth() + offset;
                x = 0;
                y = this.yScale(d.name) - offset / 2;
            }
            return {
                name: d.name,
                class: className,
                height,
                width,
                x,
                y
            };
        });
    }
}
GridPanelSeriesComponent.ɵfac = function GridPanelSeriesComponent_Factory(t) { return new (t || GridPanelSeriesComponent)(); };
GridPanelSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GridPanelSeriesComponent, selectors: [["g", "ngx-charts-grid-panel-series", ""]], inputs: { data: "data", dims: "dims", xScale: "xScale", yScale: "yScale", orient: "orient" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c13, decls: 1, vars: 1, consts: [["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y", "grid-panel", "odd", "even", 4, "ngFor", "ngForOf"], ["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y"]], template: function GridPanelSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GridPanelSeriesComponent__svg_g_0_Template, 1, 10, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.gridPanels);
    } }, directives: [ɵngcc1.NgForOf, GridPanelComponent], encapsulation: 2, changeDetection: 0 });
GridPanelSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    dims: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    orient: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GridPanelSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-grid-panel-series]',
                template: `
    <svg:g
      ngx-charts-grid-panel
      *ngFor="let gridPanel of gridPanels"
      [height]="gridPanel.height"
      [width]="gridPanel.width"
      [x]="gridPanel.x"
      [y]="gridPanel.y"
      [class.grid-panel]="true"
      [class.odd]="gridPanel.class === 'odd'"
      [class.even]="gridPanel.class === 'even'"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], dims: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], orient: [{
            type: Input
        }] }); })();

class SvgLinearGradientComponent {
    constructor() {
        this.orientation = 'vertical';
    }
    ngOnChanges(changes) {
        this.x1 = '0%';
        this.x2 = '0%';
        this.y1 = '0%';
        this.y2 = '0%';
        if (this.orientation === 'horizontal') {
            this.x2 = '100%';
        }
        else if (this.orientation === 'vertical') {
            this.y1 = '100%';
        }
    }
}
SvgLinearGradientComponent.ɵfac = function SvgLinearGradientComponent_Factory(t) { return new (t || SvgLinearGradientComponent)(); };
SvgLinearGradientComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SvgLinearGradientComponent, selectors: [["g", "ngx-charts-svg-linear-gradient", ""]], inputs: { orientation: "orientation", name: "name", stops: "stops" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c14, decls: 2, vars: 6, consts: [[3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]], template: function SvgLinearGradientComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "linearGradient", 0);
        ɵngcc0.ɵɵtemplate(1, SvgLinearGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.name);
        ɵngcc0.ɵɵattribute("x1", ctx.x1)("y1", ctx.y1)("x2", ctx.x2)("y2", ctx.y2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.stops);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
SvgLinearGradientComponent.propDecorators = {
    orientation: [{ type: Input }],
    name: [{ type: Input }],
    stops: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SvgLinearGradientComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-svg-linear-gradient]',
                template: `
    <svg:linearGradient [id]="name" [attr.x1]="x1" [attr.y1]="y1" [attr.x2]="x2" [attr.y2]="y2">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:linearGradient>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { orientation: [{
            type: Input
        }], name: [{
            type: Input
        }], stops: [{
            type: Input
        }] }); })();

class SvgRadialGradientComponent {
    constructor() {
        this.endOpacity = 1;
        this.cx = 0;
        this.cy = 0;
    }
    get stops() {
        return this.stopsInput || this.stopsDefault;
    }
    set stops(value) {
        this.stopsInput = value;
    }
    ngOnChanges(changes) {
        this.r = '30%';
        if ('color' in changes || 'startOpacity' in changes || 'endOpacity' in changes) {
            this.stopsDefault = [
                {
                    offset: 0,
                    color: this.color,
                    opacity: this.startOpacity
                },
                {
                    offset: 100,
                    color: this.color,
                    opacity: this.endOpacity
                }
            ];
        }
    }
}
SvgRadialGradientComponent.ɵfac = function SvgRadialGradientComponent_Factory(t) { return new (t || SvgRadialGradientComponent)(); };
SvgRadialGradientComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SvgRadialGradientComponent, selectors: [["g", "ngx-charts-svg-radial-gradient", ""]], inputs: { endOpacity: "endOpacity", cx: "cx", cy: "cy", stops: "stops", color: "color", name: "name", startOpacity: "startOpacity" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c15, decls: 2, vars: 5, consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]], template: function SvgRadialGradientComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "radialGradient", 0);
        ɵngcc0.ɵɵtemplate(1, SvgRadialGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.name);
        ɵngcc0.ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.stops);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
SvgRadialGradientComponent.propDecorators = {
    color: [{ type: Input }],
    name: [{ type: Input }],
    startOpacity: [{ type: Input }],
    endOpacity: [{ type: Input }],
    cx: [{ type: Input }],
    cy: [{ type: Input }],
    stops: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SvgRadialGradientComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-svg-radial-gradient]',
                template: `
    <svg:radialGradient [id]="name" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" gradientUnits="userSpaceOnUse">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:radialGradient>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { endOpacity: [{
            type: Input
        }], cx: [{
            type: Input
        }], cy: [{
            type: Input
        }], stops: [{
            type: Input
        }], color: [{
            type: Input
        }], name: [{
            type: Input
        }], startOpacity: [{
            type: Input
        }] }); })();

class AreaComponent {
    constructor(element) {
        this.opacity = 1;
        this.startOpacity = 0.5;
        this.endOpacity = 1;
        this.gradient = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.initialized = false;
        this.hasGradient = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (!this.initialized) {
            this.loadAnimation();
            this.initialized = true;
        }
        else {
            this.update();
        }
    }
    update() {
        this.gradientId = 'grad' + id().toString();
        this.gradientFill = `url(#${this.gradientId})`;
        if (this.gradient || this.stops) {
            this.gradientStops = this.getGradient();
            this.hasGradient = true;
        }
        else {
            this.hasGradient = false;
        }
        this.updatePathEl();
    }
    loadAnimation() {
        this.areaPath = this.startingPath;
        setTimeout(this.update.bind(this), 100);
    }
    updatePathEl() {
        const node = select(this.element).select('.area');
        if (this.animations) {
            node.transition().duration(750).attr('d', this.path);
        }
        else {
            node.attr('d', this.path);
        }
    }
    getGradient() {
        if (this.stops) {
            return this.stops;
        }
        return [
            {
                offset: 0,
                color: this.fill,
                opacity: this.startOpacity
            },
            {
                offset: 100,
                color: this.fill,
                opacity: this.endOpacity
            }
        ];
    }
}
AreaComponent.ɵfac = function AreaComponent_Factory(t) { return new (t || AreaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AreaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaComponent, selectors: [["g", "ngx-charts-area", ""]], inputs: { opacity: "opacity", startOpacity: "startOpacity", endOpacity: "endOpacity", gradient: "gradient", animations: "animations", data: "data", path: "path", startingPath: "startingPath", fill: "fill", activeLabel: "activeLabel", stops: "stops" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c16, decls: 2, vars: 5, consts: [[4, "ngIf"], [1, "area"], ["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops"]], template: function AreaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, AreaComponent__svg_defs_0_Template, 2, 2, "defs", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(1, "path", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.gradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("opacity", ctx.opacity);
        ɵngcc0.ɵɵattribute("d", ctx.areaPath)("fill", ctx.gradient ? ctx.gradientFill : ctx.fill);
    } }, directives: [ɵngcc1.NgIf, SvgLinearGradientComponent], encapsulation: 2, changeDetection: 0 });
AreaComponent.ctorParameters = () => [
    { type: ElementRef }
];
AreaComponent.propDecorators = {
    data: [{ type: Input }],
    path: [{ type: Input }],
    startingPath: [{ type: Input }],
    fill: [{ type: Input }],
    opacity: [{ type: Input }],
    startOpacity: [{ type: Input }],
    endOpacity: [{ type: Input }],
    activeLabel: [{ type: Input }],
    gradient: [{ type: Input }],
    stops: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-area]',
                template: `
    <svg:defs *ngIf="gradient">
      <svg:g ngx-charts-svg-linear-gradient orientation="vertical" [name]="gradientId" [stops]="gradientStops" />
    </svg:defs>
    <svg:path class="area" [attr.d]="areaPath" [attr.fill]="gradient ? gradientFill : fill" [style.opacity]="opacity" />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { opacity: [{
            type: Input
        }], startOpacity: [{
            type: Input
        }], endOpacity: [{
            type: Input
        }], gradient: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], data: [{
            type: Input
        }], path: [{
            type: Input
        }], startingPath: [{
            type: Input
        }], fill: [{
            type: Input
        }], activeLabel: [{
            type: Input
        }], stops: [{
            type: Input
        }] }); })();

// Robert Penner's easeOutExpo
function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
}
/**
 * Counts from a number to the end incrementally.
 */
function count(countFrom, countTo, countDecimals, countDuration, callback) {
    const startVal = Number(countFrom);
    const endVal = Number(countTo);
    const countDown = startVal > endVal;
    const decimals = Math.max(0, countDecimals);
    const dec = Math.pow(10, decimals);
    const duration = Number(countDuration) * 1000;
    let startTime;
    function runCount(timestamp) {
        let frameVal;
        const progress = timestamp - startTime;
        if (countDown) {
            frameVal = startVal - easeOutExpo(progress, 0, startVal - endVal, duration);
        }
        else {
            frameVal = easeOutExpo(progress, startVal, endVal - startVal, duration);
        }
        if (countDown) {
            frameVal = frameVal < endVal ? endVal : frameVal;
        }
        else {
            frameVal = frameVal > endVal ? endVal : frameVal;
        }
        frameVal = Math.round(frameVal * dec) / dec;
        const tick = progress < duration;
        callback({
            value: frameVal,
            progress,
            timestamp,
            finished: !tick
        });
        if (tick) {
            return requestAnimationFrame(val => runCount(val));
        }
    }
    return requestAnimationFrame(timestamp => {
        startTime = timestamp;
        return runCount(timestamp);
    });
}
/**
 * Determine decimals places
 *
 * @export
 */
function decimalChecker(countTo) {
    const endVal = Number(countTo);
    if (endVal % 1 !== 0 && Math.abs(endVal) <= 10) {
        return 2;
    }
    return 0;
}

/**
 * Count up component
 *
 * Loosely inspired by:
 *  - https://github.com/izupet/angular2-counto
 *  - https://inorganik.github.io/countUp.js/
 *
 * @export
 */
class CountUpDirective {
    constructor(cd, element) {
        this.cd = cd;
        this.countDuration = 1;
        this.countPrefix = '';
        this.countSuffix = '';
        this.countChange = new EventEmitter();
        this.countFinish = new EventEmitter();
        this.value = '';
        this._countDecimals = 0;
        this._countTo = 0;
        this._countFrom = 0;
        this.nativeElement = element.nativeElement;
    }
    set countDecimals(val) {
        this._countDecimals = val;
    }
    get countDecimals() {
        if (this._countDecimals)
            return this._countDecimals;
        return decimalChecker(this.countTo);
    }
    set countTo(val) {
        this._countTo = parseFloat(val);
        this.start();
    }
    get countTo() {
        return this._countTo;
    }
    set countFrom(val) {
        this._countFrom = parseFloat(val);
        this.start();
    }
    get countFrom() {
        return this._countFrom;
    }
    ngOnDestroy() {
        cancelAnimationFrame(this.animationReq);
    }
    start() {
        cancelAnimationFrame(this.animationReq);
        const valueFormatting = this.valueFormatting || (value => `${this.countPrefix}${value.toLocaleString()}${this.countSuffix}`);
        const callback = ({ value, progress, finished }) => {
            this.value = valueFormatting(value);
            this.cd.markForCheck();
            if (!finished)
                this.countChange.emit({ value: this.value, progress });
            if (finished)
                this.countFinish.emit({ value: this.value, progress });
        };
        this.animationReq = count(this.countFrom, this.countTo, this.countDecimals, this.countDuration, callback);
    }
}
CountUpDirective.ɵfac = function CountUpDirective_Factory(t) { return new (t || CountUpDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CountUpDirective.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CountUpDirective, selectors: [["", "ngx-charts-count-up", ""]], inputs: { countDuration: "countDuration", countPrefix: "countPrefix", countSuffix: "countSuffix", countDecimals: "countDecimals", countTo: "countTo", countFrom: "countFrom", valueFormatting: "valueFormatting" }, outputs: { countChange: "countChange", countFinish: "countFinish" }, attrs: _c17, decls: 1, vars: 1, template: function CountUpDirective_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0);
    } if (rf & 2) {
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, encapsulation: 2 });
CountUpDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
CountUpDirective.propDecorators = {
    countDuration: [{ type: Input }],
    countPrefix: [{ type: Input }],
    countSuffix: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    countDecimals: [{ type: Input }],
    countTo: [{ type: Input }],
    countFrom: [{ type: Input }],
    countChange: [{ type: Output }],
    countFinish: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CountUpDirective, [{
        type: Component,
        args: [{
                selector: '[ngx-charts-count-up]',
                template: ` {{ value }} `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { countDuration: [{
            type: Input
        }], countPrefix: [{
            type: Input
        }], countSuffix: [{
            type: Input
        }], countChange: [{
            type: Output
        }], countFinish: [{
            type: Output
        }], countDecimals: [{
            type: Input
        }], countTo: [{
            type: Input
        }], countFrom: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }] }); })();

// If we don't check whether 'window' and 'global' variables are defined,
// code will fail in browser/node with 'variable is undefined' error.
let root;
if (typeof window !== 'undefined') {
    root = window;
}
else if (typeof global !== 'undefined') {
    root = global;
}
// tslint:disable-next-line:variable-name
const MouseEvent = root.MouseEvent;
function createMouseEvent(name, bubbles = false, cancelable = true) {
    // Calling new of an event does not work correctly on IE. The following is a tested workaround
    // See https://stackoverflow.com/questions/27176983/dispatchevent-not-working-in-ie11
    if (typeof MouseEvent === 'function') {
        // Sane browsers
        return new MouseEvent(name, { bubbles, cancelable });
    }
    else {
        // IE
        const event = document.createEvent('MouseEvent');
        event.initEvent(name, bubbles, cancelable);
        return event;
    }
}

class TooltipArea {
    constructor(platformId) {
        this.platformId = platformId;
        this.anchorOpacity = 0;
        this.anchorPos = -1;
        this.anchorValues = [];
        this.showPercentage = false;
        this.tooltipDisabled = false;
        this.hover = new EventEmitter();
    }
    getValues(xVal) {
        const results = [];
        for (const group of this.results) {
            const item = group.series.find(d => d.name.toString() === xVal.toString());
            let groupName = group.name;
            if (groupName instanceof Date) {
                groupName = groupName.toLocaleDateString();
            }
            if (item) {
                const label = item.name;
                let val = item.value;
                if (this.showPercentage) {
                    val = (item.d1 - item.d0).toFixed(2) + '%';
                }
                let color;
                if (this.colors.scaleType === 'linear') {
                    let v = val;
                    if (item.d1) {
                        v = item.d1;
                    }
                    color = this.colors.getColor(v);
                }
                else {
                    color = this.colors.getColor(group.name);
                }
                const data = Object.assign({}, item, {
                    value: val,
                    name: label,
                    series: groupName,
                    min: item.min,
                    max: item.max,
                    color
                });
                results.push(data);
            }
        }
        return results;
    }
    mouseMove(event) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const xPos = event.pageX - event.target.getBoundingClientRect().left;
        const closestIndex = this.findClosestPointIndex(xPos);
        const closestPoint = this.xSet[closestIndex];
        this.anchorPos = this.xScale(closestPoint);
        this.anchorPos = Math.max(0, this.anchorPos);
        this.anchorPos = Math.min(this.dims.width, this.anchorPos);
        this.anchorValues = this.getValues(closestPoint);
        if (this.anchorPos !== this.lastAnchorPos) {
            const ev = createMouseEvent('mouseleave');
            this.tooltipAnchor.nativeElement.dispatchEvent(ev);
            this.anchorOpacity = 0.7;
            this.hover.emit({
                value: closestPoint
            });
            this.showTooltip();
            this.lastAnchorPos = this.anchorPos;
        }
    }
    findClosestPointIndex(xPos) {
        let minIndex = 0;
        let maxIndex = this.xSet.length - 1;
        let minDiff = Number.MAX_VALUE;
        let closestIndex = 0;
        while (minIndex <= maxIndex) {
            const currentIndex = ((minIndex + maxIndex) / 2) | 0;
            const currentElement = this.xScale(this.xSet[currentIndex]);
            const curDiff = Math.abs(currentElement - xPos);
            if (curDiff < minDiff) {
                minDiff = curDiff;
                closestIndex = currentIndex;
            }
            if (currentElement < xPos) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > xPos) {
                maxIndex = currentIndex - 1;
            }
            else {
                minDiff = 0;
                closestIndex = currentIndex;
                break;
            }
        }
        return closestIndex;
    }
    showTooltip() {
        const event = createMouseEvent('mouseenter');
        this.tooltipAnchor.nativeElement.dispatchEvent(event);
    }
    hideTooltip() {
        const event = createMouseEvent('mouseleave');
        this.tooltipAnchor.nativeElement.dispatchEvent(event);
        this.anchorOpacity = 0;
        this.lastAnchorPos = -1;
    }
    getToolTipText(tooltipItem) {
        let result = '';
        if (tooltipItem.series !== undefined) {
            result += tooltipItem.series;
        }
        else {
            result += '???';
        }
        result += ': ';
        if (tooltipItem.value !== undefined) {
            result += tooltipItem.value.toLocaleString();
        }
        if (tooltipItem.min !== undefined || tooltipItem.max !== undefined) {
            result += ' (';
            if (tooltipItem.min !== undefined) {
                if (tooltipItem.max === undefined) {
                    result += '≥';
                }
                result += tooltipItem.min.toLocaleString();
                if (tooltipItem.max !== undefined) {
                    result += ' - ';
                }
            }
            else if (tooltipItem.max !== undefined) {
                result += '≤';
            }
            if (tooltipItem.max !== undefined) {
                result += tooltipItem.max.toLocaleString();
            }
            result += ')';
        }
        return result;
    }
}
TooltipArea.ɵfac = function TooltipArea_Factory(t) { return new (t || TooltipArea)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
TooltipArea.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TooltipArea, selectors: [["g", "ngx-charts-tooltip-area", ""]], viewQuery: function TooltipArea_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c18, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipAnchor = _t.first);
    } }, inputs: { showPercentage: "showPercentage", tooltipDisabled: "tooltipDisabled", dims: "dims", xSet: "xSet", xScale: "xScale", yScale: "yScale", results: "results", colors: "colors", tooltipTemplate: "tooltipTemplate" }, outputs: { hover: "hover" }, attrs: _c19, decls: 6, vars: 18, consts: [["y", "0", 1, "tooltip-area", 2, "opacity", "0", "cursor", "auto", 3, "mousemove", "mouseleave"], ["defaultTooltipTemplate", ""], ["y", "0", "ngx-tooltip", "", 1, "tooltip-anchor", 3, "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipSpacing", "tooltipTemplate", "tooltipContext", "tooltipImmediateExit"], ["tooltipAnchor", ""], [1, "area-tooltip-container"], ["class", "tooltip-item", 4, "ngFor", "ngForOf"], [1, "tooltip-item"], [1, "tooltip-item-color"]], template: function TooltipArea_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵelementStart(1, "rect", 0);
        ɵngcc0.ɵɵlistener("mousemove", function TooltipArea_Template__svg_rect_mousemove_1_listener($event) { return ctx.mouseMove($event); })("mouseleave", function TooltipArea_Template__svg_rect_mouseleave_1_listener() { return ctx.hideTooltip(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, TooltipArea__svg_ng_template_2_Template, 2, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelement(4, "rect", 2, 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("x", 0)("width", ctx.dims.width)("height", ctx.dims.height);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵstyleProp("opacity", ctx.anchorOpacity)("pointer-events", "none");
        ɵngcc0.ɵɵproperty("@animationState", ctx.anchorOpacity !== 0 ? "active" : "inactive")("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", "right")("tooltipType", "tooltip")("tooltipSpacing", 15)("tooltipTemplate", ctx.tooltipTemplate ? ctx.tooltipTemplate : _r0)("tooltipContext", ctx.anchorValues)("tooltipImmediateExit", true);
        ɵngcc0.ɵɵattribute("x", ctx.anchorPos)("width", 1)("height", ctx.dims.height);
    } }, directives: [TooltipDirective, ɵngcc1.NgForOf], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition('inactive => active', [
                    style({
                        opacity: 0
                    }),
                    animate(250, style({ opacity: 0.7 }))
                ]),
                transition('active => inactive', [
                    style({
                        opacity: 0.7
                    }),
                    animate(250, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
TooltipArea.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TooltipArea.propDecorators = {
    dims: [{ type: Input }],
    xSet: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    results: [{ type: Input }],
    colors: [{ type: Input }],
    showPercentage: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    hover: [{ type: Output }],
    tooltipAnchor: [{ type: ViewChild, args: ['tooltipAnchor', { static: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipArea, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-tooltip-area]',
                template: `
    <svg:g>
      <svg:rect
        class="tooltip-area"
        [attr.x]="0"
        y="0"
        [attr.width]="dims.width"
        [attr.height]="dims.height"
        style="opacity: 0; cursor: 'auto';"
        (mousemove)="mouseMove($event)"
        (mouseleave)="hideTooltip()"
      />
      <ng-template #defaultTooltipTemplate let-model="model">
        <xhtml:div class="area-tooltip-container">
          <xhtml:div *ngFor="let tooltipItem of model" class="tooltip-item">
            <xhtml:span class="tooltip-item-color" [style.background-color]="tooltipItem.color"></xhtml:span>
            {{ getToolTipText(tooltipItem) }}
          </xhtml:div>
        </xhtml:div>
      </ng-template>
      <svg:rect
        #tooltipAnchor
        [@animationState]="anchorOpacity !== 0 ? 'active' : 'inactive'"
        class="tooltip-anchor"
        [attr.x]="anchorPos"
        y="0"
        [attr.width]="1"
        [attr.height]="dims.height"
        [style.opacity]="anchorOpacity"
        [style.pointer-events]="'none'"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'right'"
        [tooltipType]="'tooltip'"
        [tooltipSpacing]="15"
        [tooltipTemplate]="tooltipTemplate ? tooltipTemplate : defaultTooltipTemplate"
        [tooltipContext]="anchorValues"
        [tooltipImmediateExit]="true"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition('inactive => active', [
                            style({
                                opacity: 0
                            }),
                            animate(250, style({ opacity: 0.7 }))
                        ]),
                        transition('active => inactive', [
                            style({
                                opacity: 0.7
                            }),
                            animate(250, style({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { showPercentage: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], hover: [{
            type: Output
        }], dims: [{
            type: Input
        }], xSet: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], results: [{
            type: Input
        }], colors: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], tooltipAnchor: [{
            type: ViewChild,
            args: ['tooltipAnchor', { static: false }]
        }] }); })();

class Timeline {
    constructor(element, cd) {
        this.cd = cd;
        this.height = 50;
        this.select = new EventEmitter();
        this.onDomainChange = new EventEmitter();
        this.initialized = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
        if (!this.initialized) {
            this.addBrush();
            this.initialized = true;
        }
    }
    update() {
        this.dims = this.getDims();
        this.height = this.dims.height;
        const offsetY = this.view[1] - this.height;
        this.xDomain = this.getXDomain();
        this.xScale = this.getXScale();
        if (this.brush) {
            this.updateBrush();
        }
        this.transform = `translate(0 , ${offsetY})`;
        this.filterId = 'filter' + id().toString();
        this.filter = `url(#${this.filterId})`;
        this.cd.markForCheck();
    }
    getXDomain() {
        let values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        let domain = [];
        if (this.scaleType === 'time') {
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        return domain;
    }
    getXScale() {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime().range([0, this.dims.width]).domain(this.xDomain);
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear().range([0, this.dims.width]).domain(this.xDomain);
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().range([0, this.dims.width]).padding(0.1).domain(this.xDomain);
        }
        return scale;
    }
    addBrush() {
        if (this.brush)
            return;
        const height = this.height;
        const width = this.view[0];
        this.brush = brushX()
            .extent([
            [0, 0],
            [width, height]
        ])
            .on('brush end', ({ d3selection }) => {
            const selection = d3selection || this.xScale.range();
            const newDomain = selection.map(this.xScale.invert);
            this.onDomainChange.emit(newDomain);
            this.cd.markForCheck();
        });
        select(this.element).select('.brush').call(this.brush);
    }
    updateBrush() {
        if (!this.brush)
            return;
        const height = this.height;
        const width = this.view[0];
        this.brush.extent([
            [0, 0],
            [width, height]
        ]);
        select(this.element).select('.brush').call(this.brush);
        // clear hardcoded properties so they can be defined by CSS
        select(this.element)
            .select('.selection')
            .attr('fill', undefined)
            .attr('stroke', undefined)
            .attr('fill-opacity', undefined);
        this.cd.markForCheck();
    }
    getDims() {
        const width = this.view[0];
        const dims = {
            width,
            height: this.height
        };
        return dims;
    }
}
Timeline.ɵfac = function Timeline_Factory(t) { return new (t || Timeline)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Timeline.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Timeline, selectors: [["g", "ngx-charts-timeline", ""]], inputs: { height: "height", view: "view", state: "state", results: "results", scheme: "scheme", customColors: "customColors", legend: "legend", miniChart: "miniChart", autoScale: "autoScale", scaleType: "scaleType" }, outputs: { select: "select", onDomainChange: "onDomainChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c20, ngContentSelectors: _c2, decls: 7, vars: 4, consts: [[1, "timeline"], ["in", "SourceGraphic", "type", "matrix", "values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"], [1, "embedded-chart"], ["x", "0", "y", "0", 1, "brush-background"], [1, "brush"]], template: function Timeline_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵelementStart(1, "filter");
        ɵngcc0.ɵɵelement(2, "feColorMatrix", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "g", 2);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "rect", 3);
        ɵngcc0.ɵɵelement(6, "g", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("id", ctx.filterId);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵattribute("width", ctx.view[0])("height", ctx.height);
    } }, styles: [".timeline .brush-background{fill:rgba(0,0,0,.05)}.timeline .brush .selection{fill:rgba(0,0,0,.1);stroke:#888;stroke-width:1px}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}"], encapsulation: 2, changeDetection: 0 });
Timeline.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Timeline.propDecorators = {
    view: [{ type: Input }],
    state: [{ type: Input }],
    results: [{ type: Input }],
    scheme: [{ type: Input }],
    customColors: [{ type: Input }],
    legend: [{ type: Input }],
    miniChart: [{ type: Input }],
    autoScale: [{ type: Input }],
    scaleType: [{ type: Input }],
    height: [{ type: Input }],
    select: [{ type: Output }],
    onDomainChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Timeline, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-timeline]',
                template: `
    <svg:g class="timeline" [attr.transform]="transform">
      <svg:filter [attr.id]="filterId">
        <svg:feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
        />
      </svg:filter>
      <svg:g class="embedded-chart">
        <ng-content></ng-content>
      </svg:g>
      <svg:rect x="0" [attr.width]="view[0]" y="0" [attr.height]="height" class="brush-background" />
      <svg:g class="brush"></svg:g>
    </svg:g>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".timeline .brush-background{fill:rgba(0,0,0,.05)}.timeline .brush .selection{fill:rgba(0,0,0,.1);stroke:#888;stroke-width:1px}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { height: [{
            type: Input
        }], select: [{
            type: Output
        }], onDomainChange: [{
            type: Output
        }], view: [{
            type: Input
        }], state: [{
            type: Input
        }], results: [{
            type: Input
        }], scheme: [{
            type: Input
        }], customColors: [{
            type: Input
        }], legend: [{
            type: Input
        }], miniChart: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], scaleType: [{
            type: Input
        }] }); })();

class LegendComponent {
    constructor(cd) {
        this.cd = cd;
        this.horizontal = false;
        this.labelClick = new EventEmitter();
        this.labelActivate = new EventEmitter();
        this.labelDeactivate = new EventEmitter();
        this.legendEntries = [];
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.cd.markForCheck();
        this.legendEntries = this.getLegendEntries();
    }
    getLegendEntries() {
        const items = [];
        for (const label of this.data) {
            const formattedLabel = formatLabel(label);
            const idx = items.findIndex(i => {
                return i.label === formattedLabel;
            });
            if (idx === -1) {
                items.push({
                    label,
                    formattedLabel,
                    color: this.colors.getColor(label)
                });
            }
        }
        return items;
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.label === d.name;
        });
        return item !== undefined;
    }
    activate(item) {
        this.labelActivate.emit(item);
    }
    deactivate(item) {
        this.labelDeactivate.emit(item);
    }
    trackBy(index, item) {
        return item.label;
    }
}
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
LegendComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["ngx-charts-legend"]], inputs: { horizontal: "horizontal", data: "data", title: "title", colors: "colors", height: "height", width: "width", activeEntries: "activeEntries" }, outputs: { labelClick: "labelClick", labelActivate: "labelActivate", labelDeactivate: "labelDeactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 9, consts: [["class", "legend-title", 4, "ngIf"], [1, "legend-wrap"], [1, "legend-labels"], ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "legend-title"], [1, "legend-title-text"], [1, "legend-label"], [3, "label", "formattedLabel", "color", "isActive", "select", "activate", "deactivate"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, LegendComponent_header_1_Template, 3, 1, "header", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "ul", 2);
        ɵngcc0.ɵɵtemplate(4, LegendComponent_li_4_Template, 2, 4, "li", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.title == null ? null : ctx.title.length) > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("max-height", ctx.height - 45, "px");
        ɵngcc0.ɵɵclassProp("horizontal-legend", ctx.horizontal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.legendEntries)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, LegendEntryComponent]; }, styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{font-size:14px;font-weight:700;margin-bottom:5px;margin-left:10px;overflow:hidden;white-space:nowrap}.chart-legend li,.chart-legend ul{list-style:none;margin:0;padding:0}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{background:rgba(0,0,0,.05);border-radius:3px;float:left;line-height:85%;list-style:none;overflow-x:hidden;overflow-y:auto;text-align:left;white-space:nowrap;width:100%}.chart-legend .legend-label{color:#afb7c8;cursor:pointer;font-size:90%;margin:8px}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{border-radius:3px;color:#5b646b;display:inline-block;height:15px;margin-right:5px;width:15px}.chart-legend .legend-label-text{font-size:12px;line-height:15px;vertical-align:top;width:calc(100% - 20px)}.chart-legend .legend-label-text,.chart-legend .legend-title-text{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart-legend .legend-title-text{line-height:16px;vertical-align:bottom}"], encapsulation: 2, changeDetection: 0 });
LegendComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
LegendComponent.propDecorators = {
    data: [{ type: Input }],
    title: [{ type: Input }],
    colors: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    activeEntries: [{ type: Input }],
    horizontal: [{ type: Input }],
    labelClick: [{ type: Output }],
    labelActivate: [{ type: Output }],
    labelDeactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LegendComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-legend',
                template: `
    <div [style.width.px]="width">
      <header class="legend-title" *ngIf="title?.length > 0">
        <span class="legend-title-text">{{ title }}</span>
      </header>
      <div class="legend-wrap">
        <ul class="legend-labels" [class.horizontal-legend]="horizontal" [style.max-height.px]="height - 45">
          <li *ngFor="let entry of legendEntries; trackBy: trackBy" class="legend-label">
            <ngx-charts-legend-entry
              [label]="entry.label"
              [formattedLabel]="entry.formattedLabel"
              [color]="entry.color"
              [isActive]="isActive(entry)"
              (select)="labelClick.emit($event)"
              (activate)="activate($event)"
              (deactivate)="deactivate($event)"
            >
            </ngx-charts-legend-entry>
          </li>
        </ul>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{font-size:14px;font-weight:700;margin-bottom:5px;margin-left:10px;overflow:hidden;white-space:nowrap}.chart-legend li,.chart-legend ul{list-style:none;margin:0;padding:0}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{background:rgba(0,0,0,.05);border-radius:3px;float:left;line-height:85%;list-style:none;overflow-x:hidden;overflow-y:auto;text-align:left;white-space:nowrap;width:100%}.chart-legend .legend-label{color:#afb7c8;cursor:pointer;font-size:90%;margin:8px}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{border-radius:3px;color:#5b646b;display:inline-block;height:15px;margin-right:5px;width:15px}.chart-legend .legend-label-text{font-size:12px;line-height:15px;vertical-align:top;width:calc(100% - 20px)}.chart-legend .legend-label-text,.chart-legend .legend-title-text{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chart-legend .legend-title-text{line-height:16px;vertical-align:bottom}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { horizontal: [{
            type: Input
        }], labelClick: [{
            type: Output
        }], labelActivate: [{
            type: Output
        }], labelDeactivate: [{
            type: Output
        }], data: [{
            type: Input
        }], title: [{
            type: Input
        }], colors: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }] }); })();

class LegendEntryComponent {
    constructor() {
        this.isActive = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.toggle = new EventEmitter();
    }
    get trimmedLabel() {
        return this.formattedLabel || '(empty)';
    }
    onMouseEnter() {
        this.activate.emit({ name: this.label });
    }
    onMouseLeave() {
        this.deactivate.emit({ name: this.label });
    }
}
LegendEntryComponent.ɵfac = function LegendEntryComponent_Factory(t) { return new (t || LegendEntryComponent)(); };
LegendEntryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LegendEntryComponent, selectors: [["ngx-charts-legend-entry"]], hostBindings: function LegendEntryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function LegendEntryComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function LegendEntryComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { isActive: "isActive", color: "color", label: "label", formattedLabel: "formattedLabel" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", toggle: "toggle" }, decls: 4, vars: 6, consts: [["tabindex", "-1", 3, "title", "click"], [1, "legend-label-color", 3, "click"], [1, "legend-label-text"]], template: function LegendEntryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵlistener("click", function LegendEntryComponent_Template_span_click_0_listener() { return ctx.select.emit(ctx.formattedLabel); });
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵlistener("click", function LegendEntryComponent_Template_span_click_1_listener() { return ctx.toggle.emit(ctx.formattedLabel); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
        ɵngcc0.ɵɵproperty("title", ctx.formattedLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background-color", ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.trimmedLabel, " ");
    } }, encapsulation: 2, changeDetection: 0 });
LegendEntryComponent.propDecorators = {
    color: [{ type: Input }],
    label: [{ type: Input }],
    formattedLabel: [{ type: Input }],
    isActive: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    toggle: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LegendEntryComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-legend-entry',
                template: `
    <span [title]="formattedLabel" tabindex="-1" [class.active]="isActive" (click)="select.emit(formattedLabel)">
      <span class="legend-label-color" [style.background-color]="color" (click)="toggle.emit(formattedLabel)"> </span>
      <span class="legend-label-text">
        {{ trimmedLabel }}
      </span>
    </span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { isActive: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], toggle: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], color: [{
            type: Input
        }], label: [{
            type: Input
        }], formattedLabel: [{
            type: Input
        }] }); })();

class ScaleLegendComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.horizontal = false;
    }
    ngOnChanges(changes) {
        const gradientValues = this.gradientString(this.colors.range(), this.colors.domain());
        const direction = this.horizontal ? 'right' : 'bottom';
        this.gradient = `linear-gradient(to ${direction}, ${gradientValues})`;
    }
    /**
     * Generates the string used in the gradient stylesheet properties
     * @param colors array of colors
     * @param splits array of splits on a scale of (0, 1)
     */
    gradientString(colors, splits) {
        // add the 100%
        splits.push(1);
        const pairs = [];
        colors.reverse().forEach((c, i) => {
            pairs.push(`${c} ${Math.round(splits[i] * 100)}%`);
        });
        return pairs.join(', ');
    }
}
ScaleLegendComponent.ɵfac = function ScaleLegendComponent_Factory(t) { return new (t || ScaleLegendComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer)); };
ScaleLegendComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScaleLegendComponent, selectors: [["ngx-charts-scale-legend"]], inputs: { horizontal: "horizontal", valueRange: "valueRange", colors: "colors", height: "height", width: "width" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 10, consts: [[1, "scale-legend"], [1, "scale-legend-label"], [1, "scale-legend-wrap"]], template: function ScaleLegendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "span");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "div", 2);
        ɵngcc0.ɵɵelementStart(5, "div", 1);
        ɵngcc0.ɵɵelementStart(6, "span");
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("height", ctx.horizontal ? undefined : ctx.height, "px")("width", ctx.width, "px");
        ɵngcc0.ɵɵclassProp("horizontal-legend", ctx.horizontal);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.valueRange[1].toLocaleString());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("background", ctx.gradient);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.valueRange[0].toLocaleString());
    } }, styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{display:flex;flex-direction:column;text-align:center}.chart-legend .scale-legend-wrap{border-radius:5px;display:inline-block;flex:1;margin:0 auto;width:30px}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{height:30px;margin:0 16px;width:auto}"], encapsulation: 2, changeDetection: 0 });
ScaleLegendComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
ScaleLegendComponent.propDecorators = {
    valueRange: [{ type: Input }],
    colors: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    horizontal: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScaleLegendComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-scale-legend',
                template: `
    <div
      class="scale-legend"
      [class.horizontal-legend]="horizontal"
      [style.height.px]="horizontal ? undefined : height"
      [style.width.px]="width"
    >
      <div class="scale-legend-label">
        <span>{{ valueRange[1].toLocaleString() }}</span>
      </div>
      <div class="scale-legend-wrap" [style.background]="gradient"></div>
      <div class="scale-legend-label">
        <span>{{ valueRange[0].toLocaleString() }}</span>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{display:flex;flex-direction:column;text-align:center}.chart-legend .scale-legend-wrap{border-radius:5px;display:inline-block;flex:1;margin:0 auto;width:30px}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{height:30px;margin:0 16px;width:auto}"]
            }]
    }], function () { return [{ type: ɵngcc2.DomSanitizer }]; }, { horizontal: [{
            type: Input
        }], valueRange: [{
            type: Input
        }], colors: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();

class AdvancedLegendComponent {
    constructor() {
        this.label = 'Total';
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.legendItems = [];
        this.labelFormatting = label => label;
        this.percentageFormatting = percentage => percentage;
        this.defaultValueFormatting = value => value.toLocaleString();
    }
    ngOnChanges(changes) {
        this.update();
    }
    getTotal() {
        return this.data.map(d => d.value).reduce((sum, d) => sum + d, 0);
    }
    update() {
        this.total = this.getTotal();
        this.roundedTotal = this.total;
        this.legendItems = this.getLegendItems();
    }
    getLegendItems() {
        return this.data.map(d => {
            const label = formatLabel(d.name);
            const value = d.value;
            const color = this.colors.getColor(label);
            const percentage = this.total > 0 ? (value / this.total) * 100 : 0;
            const formattedLabel = typeof this.labelFormatting === 'function' ? this.labelFormatting(label) : label;
            return {
                _value: value,
                data: d,
                value,
                color,
                label: formattedLabel,
                displayLabel: trimLabel(formattedLabel, 20),
                origialLabel: d.name,
                percentage: this.percentageFormatting ? this.percentageFormatting(percentage) : percentage.toLocaleString()
            };
        });
    }
    trackBy(item) {
        return item.formattedLabel;
    }
}
AdvancedLegendComponent.ɵfac = function AdvancedLegendComponent_Factory(t) { return new (t || AdvancedLegendComponent)(); };
AdvancedLegendComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AdvancedLegendComponent, selectors: [["ngx-charts-advanced-legend"]], inputs: { label: "label", animations: "animations", labelFormatting: "labelFormatting", percentageFormatting: "percentageFormatting", width: "width", data: "data", colors: "colors", valueFormatting: "valueFormatting" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 7, consts: [[1, "advanced-pie-legend"], ["class", "total-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "total-value", 4, "ngIf"], [1, "total-label"], [1, "legend-items-container"], [1, "legend-items"], ["tabindex", "-1", "class", "legend-item", 3, "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-count-up", "", 1, "total-value", 3, "countTo", "valueFormatting"], [1, "total-value"], ["tabindex", "-1", 1, "legend-item", 3, "mouseenter", "mouseleave", "click"], [1, "item-color"], ["class", "item-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "item-value", 4, "ngIf"], [1, "item-label"], ["class", "item-percent", "ngx-charts-count-up", "", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "item-percent", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "item-value", 3, "countTo", "valueFormatting"], [1, "item-value"], ["ngx-charts-count-up", "", 1, "item-percent", 3, "countTo", "countSuffix"], [1, "item-percent"]], template: function AdvancedLegendComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, AdvancedLegendComponent_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, AdvancedLegendComponent_div_2_Template, 2, 1, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtemplate(7, AdvancedLegendComponent_div_7_Template, 8, 7, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.label, " ");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.legendItems)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, CountUpDirective], styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{overflow:auto;white-space:nowrap}.advanced-pie-legend .legend-items-container .legend-items .legend-item{cursor:pointer;display:inline-block;margin-right:20px}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;margin-left:11px;margin-top:-6px;opacity:.7}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;margin-left:11px;opacity:.7}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;float:left;height:42px;margin-right:7px;width:4px}"], encapsulation: 2, changeDetection: 0 });
AdvancedLegendComponent.propDecorators = {
    width: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }],
    label: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    percentageFormatting: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AdvancedLegendComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-advanced-legend',
                template: `
    <div class="advanced-pie-legend" [style.width.px]="width">
      <div
        *ngIf="animations"
        class="total-value"
        ngx-charts-count-up
        [countTo]="roundedTotal"
        [valueFormatting]="valueFormatting"
      ></div>
      <div class="total-value" *ngIf="!animations">
        {{ valueFormatting ? valueFormatting(roundedTotal) : defaultValueFormatting(roundedTotal) }}
      </div>
      <div class="total-label">
        {{ label }}
      </div>
      <div class="legend-items-container">
        <div class="legend-items">
          <div
            *ngFor="let legendItem of legendItems; trackBy: trackBy"
            tabindex="-1"
            class="legend-item"
            (mouseenter)="activate.emit(legendItem.data)"
            (mouseleave)="deactivate.emit(legendItem.data)"
            (click)="select.emit(legendItem.data)"
          >
            <div class="item-color" [style.border-left-color]="legendItem.color"></div>
            <div
              *ngIf="animations"
              class="item-value"
              ngx-charts-count-up
              [countTo]="legendItem._value"
              [valueFormatting]="valueFormatting"
            ></div>
            <div *ngIf="!animations" class="item-value">
              {{ valueFormatting ? valueFormatting(legendItem.value) : defaultValueFormatting(legendItem.value) }}
            </div>
            <div class="item-label">{{ legendItem.displayLabel }}</div>
            <div
              *ngIf="animations"
              class="item-percent"
              ngx-charts-count-up
              [countTo]="legendItem.percentage"
              [countSuffix]="'%'"
            ></div>
            <div *ngIf="!animations" class="item-percent">{{ legendItem.percentage.toLocaleString() }}%</div>
          </div>
        </div>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{overflow:auto;white-space:nowrap}.advanced-pie-legend .legend-items-container .legend-items .legend-item{cursor:pointer;display:inline-block;margin-right:20px}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;margin-left:11px;margin-top:-6px;opacity:.7}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;margin-left:11px;opacity:.7}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;float:left;height:42px;margin-right:7px;width:4px}"]
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], labelFormatting: [{
            type: Input
        }], percentageFormatting: [{
            type: Input
        }], width: [{
            type: Input
        }], data: [{
            type: Input
        }], colors: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }] }); })();

const COMPONENTS = [
    AreaComponent,
    BaseChartComponent,
    CountUpDirective,
    TooltipArea,
    ChartComponent,
    LegendComponent,
    LegendEntryComponent,
    ScaleLegendComponent,
    CircleComponent,
    CircleSeriesComponent,
    GridPanelComponent,
    GridPanelSeriesComponent,
    SvgLinearGradientComponent,
    SvgRadialGradientComponent,
    Timeline,
    AdvancedLegendComponent
];
class ChartCommonModule {
}
ChartCommonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ChartCommonModule });
ChartCommonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ChartCommonModule_Factory(t) { return new (t || ChartCommonModule)(); }, imports: [[CommonModule, AxesModule, TooltipModule], CommonModule, AxesModule, TooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChartCommonModule, { declarations: function () { return [AreaComponent, BaseChartComponent, CountUpDirective, TooltipArea, ChartComponent, LegendComponent, LegendEntryComponent, ScaleLegendComponent, CircleComponent, CircleSeriesComponent, GridPanelComponent, GridPanelSeriesComponent, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, AdvancedLegendComponent, VisibilityObserver]; }, imports: function () { return [CommonModule, AxesModule, TooltipModule]; }, exports: function () { return [CommonModule, AxesModule, TooltipModule, AreaComponent, BaseChartComponent, CountUpDirective, TooltipArea, ChartComponent, LegendComponent, LegendEntryComponent, ScaleLegendComponent, CircleComponent, CircleSeriesComponent, GridPanelComponent, GridPanelSeriesComponent, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, AdvancedLegendComponent, VisibilityObserver]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ChartCommonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, AxesModule, TooltipModule],
                declarations: [...COMPONENTS, VisibilityObserver],
                exports: [CommonModule, AxesModule, TooltipModule, ...COMPONENTS, VisibilityObserver]
            }]
    }], null, null); })();

function calculateViewDimensions({ width, height, margins, showXAxis = false, showYAxis = false, xAxisHeight = 0, yAxisWidth = 0, showXLabel = false, showYLabel = false, showLegend = false, legendType = 'ordinal', legendPosition = 'right', columns = 12 }) {
    let xOffset = margins[3];
    let chartWidth = width;
    let chartHeight = height - margins[0] - margins[2];
    if (showLegend && legendPosition === 'right') {
        if (legendType === 'ordinal') {
            columns -= 2;
        }
        else {
            columns -= 1;
        }
    }
    chartWidth = (chartWidth * columns) / 12;
    chartWidth = chartWidth - margins[1] - margins[3];
    if (showXAxis) {
        chartHeight -= 5;
        chartHeight -= xAxisHeight;
        if (showXLabel) {
            // text height + spacing between axis label and tick labels
            const offset = 25 + 5;
            chartHeight -= offset;
        }
    }
    if (showYAxis) {
        chartWidth -= 5;
        chartWidth -= yAxisWidth;
        xOffset += yAxisWidth;
        xOffset += 10;
        if (showYLabel) {
            // text height + spacing between axis label and tick labels
            const offset = 25 + 5;
            chartWidth -= offset;
            xOffset += offset;
        }
    }
    chartWidth = Math.max(0, chartWidth);
    chartHeight = Math.max(0, chartHeight);
    return {
        width: Math.floor(chartWidth),
        height: Math.floor(chartHeight),
        xOffset: Math.floor(xOffset)
    };
}

let colorSets = [
    {
        name: 'vivid',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#647c8a',
            '#3f51b5',
            '#2196f3',
            '#00b862',
            '#afdf0a',
            '#a7b61a',
            '#f3e562',
            '#ff9800',
            '#ff5722',
            '#ff4514'
        ]
    },
    {
        name: 'natural',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#bf9d76',
            '#e99450',
            '#d89f59',
            '#f2dfa7',
            '#a5d7c6',
            '#7794b1',
            '#afafaf',
            '#707160',
            '#ba9383',
            '#d9d5c3'
        ]
    },
    {
        name: 'cool',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#a8385d',
            '#7aa3e5',
            '#a27ea8',
            '#aae3f5',
            '#adcded',
            '#a95963',
            '#8796c0',
            '#7ed3ed',
            '#50abcc',
            '#ad6886'
        ]
    },
    {
        name: 'fire',
        selectable: true,
        group: 'Ordinal',
        domain: ['#ff3d00', '#bf360c', '#ff8f00', '#ff6f00', '#ff5722', '#e65100', '#ffca28', '#ffab00']
    },
    {
        name: 'solar',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#fff8e1',
            '#ffecb3',
            '#ffe082',
            '#ffd54f',
            '#ffca28',
            '#ffc107',
            '#ffb300',
            '#ffa000',
            '#ff8f00',
            '#ff6f00'
        ]
    },
    {
        name: 'air',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e1f5fe',
            '#b3e5fc',
            '#81d4fa',
            '#4fc3f7',
            '#29b6f6',
            '#03a9f4',
            '#039be5',
            '#0288d1',
            '#0277bd',
            '#01579b'
        ]
    },
    {
        name: 'aqua',
        selectable: true,
        group: 'Continuous',
        domain: [
            '#e0f7fa',
            '#b2ebf2',
            '#80deea',
            '#4dd0e1',
            '#26c6da',
            '#00bcd4',
            '#00acc1',
            '#0097a7',
            '#00838f',
            '#006064'
        ]
    },
    {
        name: 'flame',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#A10A28',
            '#D3342D',
            '#EF6D49',
            '#FAAD67',
            '#FDDE90',
            '#DBED91',
            '#A9D770',
            '#6CBA67',
            '#2C9653',
            '#146738'
        ]
    },
    {
        name: 'ocean',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#1D68FB',
            '#33C0FC',
            '#4AFFFE',
            '#AFFFFF',
            '#FFFC63',
            '#FDBD2D',
            '#FC8A25',
            '#FA4F1E',
            '#FA141B',
            '#BA38D1'
        ]
    },
    {
        name: 'forest',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#55C22D',
            '#C1F33D',
            '#3CC099',
            '#AFFFFF',
            '#8CFC9D',
            '#76CFFA',
            '#BA60FB',
            '#EE6490',
            '#C42A1C',
            '#FC9F32'
        ]
    },
    {
        name: 'horizon',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2597FB',
            '#65EBFD',
            '#99FDD0',
            '#FCEE4B',
            '#FEFCFA',
            '#FDD6E3',
            '#FCB1A8',
            '#EF6F7B',
            '#CB96E8',
            '#EFDEE0'
        ]
    },
    {
        name: 'neons',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FF3333',
            '#FF33FF',
            '#CC33FF',
            '#0000FF',
            '#33CCFF',
            '#33FFFF',
            '#33FF66',
            '#CCFF33',
            '#FFCC00',
            '#FF6600'
        ]
    },
    {
        name: 'picnic',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#FAC51D',
            '#66BD6D',
            '#FAA026',
            '#29BB9C',
            '#E96B56',
            '#55ACD2',
            '#B7332F',
            '#2C83C9',
            '#9166B8',
            '#92E7E8'
        ]
    },
    {
        name: 'night',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#2B1B5A',
            '#501356',
            '#183356',
            '#28203F',
            '#391B3C',
            '#1E2B3C',
            '#120634',
            '#2D0432',
            '#051932',
            '#453080',
            '#75267D',
            '#2C507D',
            '#4B3880',
            '#752F7D',
            '#35547D'
        ]
    },
    {
        name: 'nightLights',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#4e31a5',
            '#9c25a7',
            '#3065ab',
            '#57468b',
            '#904497',
            '#46648b',
            '#32118d',
            '#a00fb3',
            '#1052a2',
            '#6e51bd',
            '#b63cc3',
            '#6c97cb',
            '#8671c1',
            '#b455be',
            '#7496c3'
        ]
    }
];

class ColorHelper {
    constructor(scheme, type, domain, customColors) {
        if (typeof scheme === 'string') {
            scheme = colorSets.find(cs => {
                return cs.name === scheme;
            });
        }
        this.colorDomain = scheme.domain;
        this.scaleType = type;
        this.domain = domain;
        this.customColors = customColors;
        this.scale = this.generateColorScheme(scheme, type, this.domain);
    }
    generateColorScheme(scheme, type, domain) {
        if (typeof scheme === 'string') {
            scheme = colorSets.find(cs => {
                return cs.name === scheme;
            });
        }
        let colorScale;
        if (type === 'quantile') {
            colorScale = scaleQuantile().range(scheme.domain).domain(domain);
        }
        else if (type === 'ordinal') {
            colorScale = scaleOrdinal().range(scheme.domain).domain(domain);
        }
        else if (type === 'linear') {
            // linear schemes must have at least 2 colors
            const colorDomain = [...scheme.domain];
            if (colorDomain.length === 1) {
                colorDomain.push(colorDomain[0]);
                this.colorDomain = colorDomain;
            }
            const points = range(0, 1, 1.0 / colorDomain.length);
            colorScale = scaleLinear().domain(points).range(colorDomain);
        }
        return colorScale;
    }
    getColor(value) {
        if (value === undefined || value === null) {
            throw new Error('Value can not be null');
        }
        if (this.scaleType === 'linear') {
            const valueScale = scaleLinear().domain(this.domain).range([0, 1]);
            return this.scale(valueScale(value));
        }
        else {
            if (typeof this.customColors === 'function') {
                return this.customColors(value);
            }
            const formattedValue = value.toString();
            let found; // todo type customColors
            if (this.customColors && this.customColors.length > 0) {
                found = this.customColors.find(mapping => {
                    return mapping.name.toLowerCase() === formattedValue.toLowerCase();
                });
            }
            if (found) {
                return found.value;
            }
            else {
                return this.scale(value);
            }
        }
    }
    getLinearGradientStops(value, start) {
        if (start === undefined) {
            start = this.domain[0];
        }
        const valueScale = scaleLinear().domain(this.domain).range([0, 1]);
        const colorValueScale = scaleBand().domain(this.colorDomain).range([0, 1]);
        const endColor = this.getColor(value);
        // generate the stops
        const startVal = valueScale(start);
        const startColor = this.getColor(start);
        const endVal = valueScale(value);
        let i = 1;
        let currentVal = startVal;
        const stops = [];
        stops.push({
            color: startColor,
            offset: startVal,
            originalOffset: startVal,
            opacity: 1
        });
        while (currentVal < endVal && i < this.colorDomain.length) {
            const color = this.colorDomain[i];
            const offset = colorValueScale(color);
            if (offset <= startVal) {
                i++;
                continue;
            }
            if (offset.toFixed(4) >= (endVal - colorValueScale.bandwidth()).toFixed(4)) {
                break;
            }
            stops.push({
                color,
                offset,
                opacity: 1
            });
            currentVal = offset;
            i++;
        }
        if (stops[stops.length - 1].offset < 100) {
            stops.push({
                color: endColor,
                offset: endVal,
                opacity: 1
            });
        }
        if (endVal === startVal) {
            stops[0].offset = 0;
            stops[1].offset = 100;
        }
        else {
            // normalize the offsets into percentages
            if (stops[stops.length - 1].offset !== 100) {
                for (const s of stops) {
                    s.offset = ((s.offset - startVal) / (endVal - startVal)) * 100;
                }
            }
        }
        return stops;
    }
}

/**
 * Based on the data, return an array with unique values.
 *
 * @export
 * @returns array
 */
function getUniqueXDomainValues(results) {
    const valueSet = new Set();
    for (const result of results) {
        for (const d of result.series) {
            valueSet.add(d.name);
        }
    }
    return Array.from(valueSet);
}
/**
 * Get the scaleType of enumerable of values.
 * @returns  'time', 'linear' or 'ordinal'
 */
function getScaleType(values, checkDateType = true) {
    if (checkDateType) {
        const allDates = values.every(value => value instanceof Date);
        if (allDates) {
            return 'time';
        }
    }
    const allNumbers = values.every(value => typeof value === 'number');
    if (allNumbers) {
        return 'linear';
    }
    return 'ordinal';
}

class AreaChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.baseValue = 'auto';
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset}, ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
        }
        let min;
        let max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin ? this.xScaleMin : Math.min(...values);
            max = this.xScaleMax ? this.xScaleMax : Math.max(...values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        const domain = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        const values = [...domain];
        if (!this.autoScale) {
            values.push(0);
        }
        if (this.baseValue !== 'auto') {
            values.push(this.baseValue);
        }
        const min = this.yScaleMin ? this.yScaleMin : Math.min(...values);
        const max = this.yScaleMax ? this.yScaleMax : Math.max(...values);
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime();
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear();
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().padding(0.1);
        }
        scale.range([0, width]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getScaleType(values) {
        let date = true;
        let num = true;
        for (const value of values) {
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date) {
            return 'time';
        }
        if (num) {
            return 'linear';
        }
        return 'ordinal';
    }
    isDate(value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
}
AreaChartComponent.ɵfac = function AreaChartComponent_Factory(t) { return ɵAreaChartComponent_BaseFactory(t || AreaChartComponent); };
AreaChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaChartComponent, selectors: [["ngx-charts-area-chart"]], contentQueries: function AreaChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c22, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    } }, hostBindings: function AreaChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function AreaChartComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { legendTitle: "legendTitle", legendPosition: "legendPosition", baseValue: "baseValue", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", legend: "legend", state: "state", xAxis: "xAxis", yAxis: "yAxis", autoScale: "autoScale", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", timeline: "timeline", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", xScaleMin: "xScaleMin", xScaleMax: "xScaleMax", yScaleMin: "yScaleMin", yScaleMax: "yScaleMax" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 20, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "baseValue", "colors", "data", "activeEntries", "scaleType", "gradient", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate", "hover"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange"], ["ngx-charts-area-series", "", 3, "xScale", "yScale", "baseValue", "colors", "data", "scaleType", "gradient", "curve", "animations"]], template: function AreaChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function AreaChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function AreaChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function AreaChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "clipPath");
        ɵngcc0.ɵɵelement(3, "rect");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g", 1);
        ɵngcc0.ɵɵtemplate(5, AreaChartComponent__svg_g_5_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(6, AreaChartComponent__svg_g_6_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵtemplate(8, AreaChartComponent__svg_g_8_Template, 2, 10, "g", 4);
        ɵngcc0.ɵɵtemplate(9, AreaChartComponent__svg_g_9_Template, 3, 9, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, AreaChartComponent__svg_g_10_Template, 2, 13, "g", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("id", ctx.clipPathId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("clip-path", ctx.clipPath);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tooltipDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
AreaChartComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    state: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    baseValue: [{ type: Input }],
    autoScale: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    timeline: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    xScaleMin: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    yScaleMin: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    seriesTooltipTemplate: [{ type: ContentChild, args: ['seriesTooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
const ɵAreaChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AreaChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-area-chart',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [baseValue]="baseValue"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [gradient]="gradient"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [baseValue]="baseValue"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], baseValue: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }], legend: [{
            type: Input
        }], state: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], timeline: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], seriesTooltipTemplate: [{
            type: ContentChild,
            args: ['seriesTooltipTemplate']
        }] }); })();

class AreaChartNormalizedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        for (let i = 0; i < this.xSet.length; i++) {
            const val = this.xSet[i];
            let d0 = 0;
            let total = 0;
            for (const group of this.results) {
                const d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    total += d.value;
                }
            }
            for (const group of this.results) {
                let d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    d.d0 = d0;
                    d.d1 = d0 + d.value;
                    d0 += d.value;
                }
                else {
                    d = {
                        name: val,
                        value: 0,
                        d0,
                        d1: d0
                    };
                    group.series.push(d);
                }
                if (total > 0) {
                    d.d0 = (d.d0 * 100) / total;
                    d.d1 = (d.d1 * 100) / total;
                }
                else {
                    d.d0 = 0;
                    d.d1 = 0;
                }
            }
        }
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === 'time') {
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        return [0, 100];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime();
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear();
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().padding(0.1);
        }
        scale.range([0, width]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
}
AreaChartNormalizedComponent.ɵfac = function AreaChartNormalizedComponent_Factory(t) { return ɵAreaChartNormalizedComponent_BaseFactory(t || AreaChartNormalizedComponent); };
AreaChartNormalizedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaChartNormalizedComponent, selectors: [["ngx-charts-area-chart-normalized"]], contentQueries: function AreaChartNormalizedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c22, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    } }, hostBindings: function AreaChartNormalizedComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function AreaChartNormalizedComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", timeline: "timeline", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 20, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-area-series", "", "normalized", "true", 3, "xScale", "yScale", "colors", "data", "scaleType", "activeEntries", "gradient", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "showPercentage", "tooltipDisabled", "tooltipTemplate", "hover"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", "type", "stacked", 3, "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange"], ["ngx-charts-area-series", "", "normalized", "true", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "curve", "animations"]], template: function AreaChartNormalizedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function AreaChartNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "clipPath");
        ɵngcc0.ɵɵelement(3, "rect");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g", 1);
        ɵngcc0.ɵɵtemplate(5, AreaChartNormalizedComponent__svg_g_5_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(6, AreaChartNormalizedComponent__svg_g_6_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵtemplate(8, AreaChartNormalizedComponent__svg_g_8_Template, 2, 9, "g", 4);
        ɵngcc0.ɵɵtemplate(9, AreaChartNormalizedComponent__svg_g_9_Template, 3, 10, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, AreaChartNormalizedComponent__svg_g_10_Template, 2, 13, "g", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("id", ctx.clipPathId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("clip-path", ctx.clipPath);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tooltipDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
AreaChartNormalizedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    timeline: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    seriesTooltipTemplate: [{ type: ContentChild, args: ['seriesTooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
const ɵAreaChartNormalizedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AreaChartNormalizedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaChartNormalizedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-area-chart-normalized',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [activeEntries]="activeEntries"
              [gradient]="gradient"
              normalized="true"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [showPercentage]="true"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                type="stacked"
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            normalized="true"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], timeline: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], seriesTooltipTemplate: [{
            type: ContentChild,
            args: ['seriesTooltipTemplate']
        }] }); })();

class AreaChartStackedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        for (let i = 0; i < this.xSet.length; i++) {
            const val = this.xSet[i];
            let d0 = 0;
            for (const group of this.results) {
                let d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    d.d0 = d0;
                    d.d1 = d0 + d.value;
                    d0 += d.value;
                }
                else {
                    d = {
                        name: val,
                        value: 0,
                        d0,
                        d1: d0
                    };
                    group.series.push(d);
                }
            }
        }
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
        }
        let min;
        let max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin ? this.xScaleMin : Math.min(...values);
            max = this.xScaleMax ? this.xScaleMax : Math.max(...values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        const domain = [];
        for (let i = 0; i < this.xSet.length; i++) {
            const val = this.xSet[i];
            let sum = 0;
            for (const group of this.results) {
                const d = group.series.find(item => {
                    let a = item.name;
                    let b = val;
                    if (this.scaleType === 'time') {
                        a = a.valueOf();
                        b = b.valueOf();
                    }
                    return a === b;
                });
                if (d) {
                    sum += d.value;
                }
            }
            domain.push(sum);
        }
        const min = this.yScaleMin ? this.yScaleMin : Math.min(0, ...domain);
        const max = this.yScaleMax ? this.yScaleMax : Math.max(...domain);
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime();
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear();
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().padding(0.1);
        }
        scale.range([0, width]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
}
AreaChartStackedComponent.ɵfac = function AreaChartStackedComponent_Factory(t) { return ɵAreaChartStackedComponent_BaseFactory(t || AreaChartStackedComponent); };
AreaChartStackedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaChartStackedComponent, selectors: [["ngx-charts-area-chart-stacked"]], contentQueries: function AreaChartStackedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c22, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    } }, hostBindings: function AreaChartStackedComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function AreaChartStackedComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", timeline: "timeline", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", xScaleMin: "xScaleMin", xScaleMax: "xScaleMax", yScaleMin: "yScaleMin", yScaleMax: "yScaleMax" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 20, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "area-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-area-series", "", "stacked", "true", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "activeEntries", "curve", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate", "hover"], ["ngx-charts-circle-series", "", "type", "stacked", 3, "xScale", "yScale", "colors", "activeEntries", "data", "scaleType", "visibleValue", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "legend", "scaleType", "onDomainChange"], ["ngx-charts-area-series", "", "stacked", "true", 3, "xScale", "yScale", "colors", "data", "scaleType", "gradient", "curve", "animations"]], template: function AreaChartStackedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function AreaChartStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "clipPath");
        ɵngcc0.ɵɵelement(3, "rect");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g", 1);
        ɵngcc0.ɵɵtemplate(5, AreaChartStackedComponent__svg_g_5_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(6, AreaChartStackedComponent__svg_g_6_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵtemplate(8, AreaChartStackedComponent__svg_g_8_Template, 2, 9, "g", 4);
        ɵngcc0.ɵɵtemplate(9, AreaChartStackedComponent__svg_g_9_Template, 3, 10, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, AreaChartStackedComponent__svg_g_10_Template, 2, 13, "g", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("id", ctx.clipPathId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("clip-path", ctx.clipPath);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tooltipDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, AreaSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
AreaChartStackedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    timeline: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    xScaleMin: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    yScaleMin: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    seriesTooltipTemplate: [{ type: ContentChild, args: ['seriesTooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
const ɵAreaChartStackedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AreaChartStackedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaChartStackedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-area-chart-stacked',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="area-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy">
            <svg:g
              ngx-charts-area-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [scaleType]="scaleType"
              [gradient]="gradient"
              [activeEntries]="activeEntries"
              stacked="true"
              [curve]="curve"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results; trackBy: trackBy">
              <svg:g
                ngx-charts-circle-series
                type="stacked"
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [activeEntries]="activeEntries"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event, series)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [legend]="legend"
        [scaleType]="scaleType"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-area-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [gradient]="gradient"
            stacked="true"
            [curve]="curve"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], timeline: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], seriesTooltipTemplate: [{
            type: ContentChild,
            args: ['seriesTooltipTemplate']
        }] }); })();

function sortLinear(data, property, direction = 'asc') {
    return data.sort((a, b) => {
        if (direction === 'asc') {
            return a[property] - b[property];
        }
        else {
            return b[property] - a[property];
        }
    });
}
function sortByDomain(data, property, direction = 'asc', domain) {
    return data.sort((a, b) => {
        const aVal = a[property];
        const bVal = b[property];
        const aIdx = domain.indexOf(aVal);
        const bIdx = domain.indexOf(bVal);
        if (direction === 'asc') {
            return aIdx - bIdx;
        }
        else {
            return bIdx - aIdx;
        }
    });
}
function sortByTime(data, property, direction = 'asc') {
    return data.sort((a, b) => {
        const aDate = a[property].getTime();
        const bDate = b[property].getTime();
        if (direction === 'asc') {
            if (aDate > bDate)
                return 1;
            if (bDate > aDate)
                return -1;
            return 0;
        }
        else {
            if (aDate > bDate)
                return -1;
            if (bDate > aDate)
                return 1;
            return 0;
        }
    });
}

class AreaSeriesComponent {
    constructor() {
        this.baseValue = 'auto';
        this.stacked = false;
        this.normalized = false;
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateGradient();
        let currentArea;
        let startingArea;
        const xProperty = d => {
            const label = d.name;
            return this.xScale(label);
        };
        if (this.stacked || this.normalized) {
            currentArea = area()
                .x(xProperty)
                .y0((d, i) => this.yScale(d.d0))
                .y1((d, i) => this.yScale(d.d1));
            startingArea = area()
                .x(xProperty)
                .y0(d => this.yScale.range()[0])
                .y1(d => this.yScale.range()[0]);
        }
        else {
            currentArea = area()
                .x(xProperty)
                .y0(() => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)))
                .y1(d => this.yScale(d.value));
            startingArea = area()
                .x(xProperty)
                .y0(d => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)))
                .y1(d => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)));
        }
        currentArea.curve(this.curve);
        startingArea.curve(this.curve);
        this.opacity = 0.8;
        let data = this.data.series;
        if (this.scaleType === 'linear') {
            data = sortLinear(data, 'name');
        }
        else if (this.scaleType === 'time') {
            data = sortByTime(data, 'name');
        }
        else {
            data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
        }
        this.path = currentArea(data);
        this.startingPath = startingArea(data);
    }
    updateGradient() {
        if (this.colors.scaleType === 'linear') {
            this.hasGradient = true;
            if (this.stacked || this.normalized) {
                const d0values = this.data.series.map(d => d.d0);
                const d1values = this.data.series.map(d => d.d1);
                const max = Math.max(...d1values);
                const min = Math.min(...d0values);
                this.gradientStops = this.colors.getLinearGradientStops(max, min);
            }
            else {
                const values = this.data.series.map(d => d.value);
                const max = Math.max(...values);
                this.gradientStops = this.colors.getLinearGradientStops(max);
            }
        }
        else {
            this.hasGradient = false;
            this.gradientStops = undefined;
        }
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isInactive(entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item === undefined;
    }
}
AreaSeriesComponent.ɵfac = function AreaSeriesComponent_Factory(t) { return new (t || AreaSeriesComponent)(); };
AreaSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AreaSeriesComponent, selectors: [["g", "ngx-charts-area-series", ""]], inputs: { baseValue: "baseValue", stacked: "stacked", normalized: "normalized", animations: "animations", data: "data", xScale: "xScale", yScale: "yScale", colors: "colors", scaleType: "scaleType", gradient: "gradient", curve: "curve", activeEntries: "activeEntries" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c24, decls: 1, vars: 12, consts: [["ngx-charts-area", "", 1, "area-series", 3, "data", "path", "fill", "stops", "startingPath", "opacity", "gradient", "animations"]], template: function AreaSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(0, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
        ɵngcc0.ɵɵproperty("data", ctx.data)("path", ctx.path)("fill", ctx.colors.getColor(ctx.data.name))("stops", ctx.gradientStops)("startingPath", ctx.startingPath)("opacity", ctx.opacity)("gradient", ctx.gradient || ctx.hasGradient)("animations", ctx.animations);
    } }, directives: [AreaComponent], encapsulation: 2, changeDetection: 0 });
AreaSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    baseValue: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    stacked: [{ type: Input }],
    normalized: [{ type: Input }],
    gradient: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-area-series]',
                template: `
    <svg:g
      ngx-charts-area
      class="area-series"
      [data]="data"
      [path]="path"
      [fill]="colors.getColor(data.name)"
      [stops]="gradientStops"
      [startingPath]="startingPath"
      [opacity]="opacity"
      [gradient]="gradient || hasGradient"
      [animations]="animations"
      [class.active]="isActive(data)"
      [class.inactive]="isInactive(data)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { baseValue: [{
            type: Input
        }], stacked: [{
            type: Input
        }], normalized: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], gradient: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }] }); })();

class AreaChartModule {
}
AreaChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AreaChartModule });
AreaChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AreaChartModule_Factory(t) { return new (t || AreaChartModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AreaChartModule, { declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent], imports: [ChartCommonModule], exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AreaChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent],
                exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent]
            }]
    }], null, null); })();

class BarComponent {
    constructor(element) {
        this.roundEdges = true;
        this.gradient = false;
        this.offset = 0;
        this.isActive = false;
        this.animations = true;
        this.noBarWhenZero = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.hasGradient = false;
        this.hideBar = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes.roundEdges) {
            this.loadAnimation();
        }
        this.update();
    }
    update() {
        this.gradientId = 'grad' + id().toString();
        this.gradientFill = `url(#${this.gradientId})`;
        if (this.gradient || this.stops) {
            this.gradientStops = this.getGradient();
            this.hasGradient = true;
        }
        else {
            this.hasGradient = false;
        }
        this.updatePathEl();
        this.checkToHideBar();
    }
    loadAnimation() {
        this.path = this.getStartingPath();
        setTimeout(this.update.bind(this), 100);
    }
    updatePathEl() {
        const node = select(this.element).select('.bar');
        const path = this.getPath();
        if (this.animations) {
            node.transition().duration(500).attr('d', path);
        }
        else {
            node.attr('d', path);
        }
    }
    getGradient() {
        if (this.stops) {
            return this.stops;
        }
        return [
            {
                offset: 0,
                color: this.fill,
                opacity: this.getStartOpacity()
            },
            {
                offset: 100,
                color: this.fill,
                opacity: 1
            }
        ];
    }
    getStartingPath() {
        if (!this.animations) {
            return this.getPath();
        }
        let radius = this.getRadius();
        let path;
        if (this.roundEdges) {
            if (this.orientation === 'vertical') {
                radius = Math.min(this.height, radius);
                path = roundedRect(this.x, this.y + this.height, this.width, 1, 0, this.edges);
            }
            else if (this.orientation === 'horizontal') {
                radius = Math.min(this.width, radius);
                path = roundedRect(this.x, this.y, 1, this.height, 0, this.edges);
            }
        }
        else {
            if (this.orientation === 'vertical') {
                path = roundedRect(this.x, this.y + this.height, this.width, 1, 0, this.edges);
            }
            else if (this.orientation === 'horizontal') {
                path = roundedRect(this.x, this.y, 1, this.height, 0, this.edges);
            }
        }
        return path;
    }
    getPath() {
        let radius = this.getRadius();
        let path;
        if (this.roundEdges) {
            if (this.orientation === 'vertical') {
                radius = Math.min(this.height, radius);
                path = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
            }
            else if (this.orientation === 'horizontal') {
                radius = Math.min(this.width, radius);
                path = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
            }
        }
        else {
            path = roundedRect(this.x, this.y, this.width, this.height, radius, this.edges);
        }
        return path;
    }
    getRadius() {
        let radius = 0;
        if (this.roundEdges && this.height > 5 && this.width > 5) {
            radius = Math.floor(Math.min(5, this.height / 2, this.width / 2));
        }
        return radius;
    }
    getStartOpacity() {
        if (this.roundEdges) {
            return 0.2;
        }
        else {
            return 0.5;
        }
    }
    get edges() {
        let edges = [false, false, false, false];
        if (this.roundEdges) {
            if (this.orientation === 'vertical') {
                if (this.data.value > 0) {
                    edges = [true, true, false, false];
                }
                else {
                    edges = [false, false, true, true];
                }
            }
            else if (this.orientation === 'horizontal') {
                if (this.data.value > 0) {
                    edges = [false, true, false, true];
                }
                else {
                    edges = [true, false, true, false];
                }
            }
        }
        return edges;
    }
    onMouseEnter() {
        this.activate.emit(this.data);
    }
    onMouseLeave() {
        this.deactivate.emit(this.data);
    }
    checkToHideBar() {
        this.hideBar =
            this.noBarWhenZero &&
                ((this.orientation === 'vertical' && this.height === 0) ||
                    (this.orientation === 'horizontal' && this.width === 0));
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarComponent, selectors: [["g", "ngx-charts-bar", ""]], hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function BarComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BarComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { roundEdges: "roundEdges", gradient: "gradient", offset: "offset", isActive: "isActive", animations: "animations", noBarWhenZero: "noBarWhenZero", fill: "fill", data: "data", width: "width", height: "height", x: "x", y: "y", orientation: "orientation", stops: "stops", ariaLabel: "ariaLabel" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c25, decls: 2, vars: 8, consts: [[4, "ngIf"], ["stroke", "none", "role", "img", "tabIndex", "-1", 1, "bar", 3, "click"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, BarComponent__svg_defs_0_Template, 2, 3, "defs", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "path", 1);
        ɵngcc0.ɵɵlistener("click", function BarComponent_Template__svg_path_click_1_listener() { return ctx.select.emit(ctx.data); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasGradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive)("hidden", ctx.hideBar);
        ɵngcc0.ɵɵattribute("d", ctx.path)("aria-label", ctx.ariaLabel)("fill", ctx.hasGradient ? ctx.gradientFill : ctx.fill);
    } }, directives: [ɵngcc1.NgIf, SvgLinearGradientComponent], encapsulation: 2, changeDetection: 0 });
BarComponent.ctorParameters = () => [
    { type: ElementRef }
];
BarComponent.propDecorators = {
    fill: [{ type: Input }],
    data: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }],
    orientation: [{ type: Input }],
    roundEdges: [{ type: Input }],
    gradient: [{ type: Input }],
    offset: [{ type: Input }],
    isActive: [{ type: Input }],
    stops: [{ type: Input }],
    animations: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-bar]',
                template: `
    <svg:defs *ngIf="hasGradient">
      <svg:g ngx-charts-svg-linear-gradient [orientation]="orientation" [name]="gradientId" [stops]="gradientStops" />
    </svg:defs>
    <svg:path
      class="bar"
      stroke="none"
      role="img"
      tabIndex="-1"
      [class.active]="isActive"
      [class.hidden]="hideBar"
      [attr.d]="path"
      [attr.aria-label]="ariaLabel"
      [attr.fill]="hasGradient ? gradientFill : fill"
      (click)="select.emit(data)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { roundEdges: [{
            type: Input
        }], gradient: [{
            type: Input
        }], offset: [{
            type: Input
        }], isActive: [{
            type: Input
        }], animations: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], fill: [{
            type: Input
        }], data: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }], orientation: [{
            type: Input
        }], stops: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }] }); })();

class BarHorizontalComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.roundEdges = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxWidth = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxWidth = { negative: 0, positive: 0 };
        }
        this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getXScale() {
        this.xDomain = this.getXDomain();
        const scale = scaleLinear().range([0, this.dims.width]).domain(this.xDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getYScale() {
        this.yDomain = this.getYDomain();
        const spacing = this.yDomain.length / (this.dims.height / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.yDomain);
    }
    getXDomain() {
        const values = this.results.map(d => d.value);
        const min = this.xScaleMin ? Math.min(this.xScaleMin, ...values) : Math.min(0, ...values);
        const max = this.xScaleMax ? Math.max(this.xScaleMax, ...values) : Math.max(0, ...values);
        return [min, max];
    }
    getYDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.yDomain;
        }
        else {
            domain = this.xDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.yDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.xDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onDataLabelMaxWidthChanged(event) {
        if (event.size.negative) {
            this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
        }
        else {
            this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
        }
        if (event.index === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarHorizontalComponent.ɵfac = function BarHorizontalComponent_Factory(t) { return ɵBarHorizontalComponent_BaseFactory(t || BarHorizontalComponent); };
BarHorizontalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarHorizontalComponent, selectors: [["ngx-charts-bar-horizontal"]], contentQueries: function BarHorizontalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", roundEdges: "roundEdges", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", xScaleMax: "xScaleMax", xScaleMin: "xScaleMin", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 25, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-horizontal", "", 3, "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "activeEntries", "roundEdges", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelWidthChanged"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged"]], template: function BarHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, true); })("legendLabelDeactivate", function BarHorizontalComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, true); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarHorizontalComponent__svg_g_2_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarHorizontalComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(4, "g", 4);
        ɵngcc0.ɵɵlistener("select", function BarHorizontalComponent_Template__svg_g_select_4_listener($event) { return ctx.onClick($event); })("activate", function BarHorizontalComponent_Template__svg_g_activate_4_listener($event) { return ctx.onActivate($event); })("deactivate", function BarHorizontalComponent_Template__svg_g_deactivate_4_listener($event) { return ctx.onDeactivate($event); })("dataLabelWidthChanged", function BarHorizontalComponent_Template__svg_g_dataLabelWidthChanged_4_listener($event) { return ctx.onDataLabelMaxWidthChanged($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(22, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("series", ctx.results)("dims", ctx.dims)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("activeEntries", ctx.activeEntries)("roundEdges", ctx.roundEdges)("animations", ctx.animations)("showDataLabel", ctx.showDataLabel)("dataLabelFormatting", ctx.dataLabelFormatting)("noBarWhenZero", ctx.noBarWhenZero);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, SeriesHorizontal, XAxisComponent, YAxisComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
BarHorizontalComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    roundEdges: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    xScaleMin: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarHorizontalComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarHorizontalComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarHorizontalComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-horizontal',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-horizontal
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [series]="results"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [activeEntries]="activeEntries"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [noBarWhenZero]="noBarWhenZero"
          (select)="onClick($event)"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
          (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event)"
        ></svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarHorizontal2DComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.groupPadding = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.roundEdges = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxWidth = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxWidth = { negative: 0, positive: 0 };
        }
        this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valuesDomain = this.getValueDomain();
        this.groupScale = this.getGroupScale();
        this.innerScale = this.getInnerScale();
        this.valueScale = this.getValueScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getGroupScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
        return scaleBand()
            .rangeRound([0, this.dims.height])
            .paddingInner(spacing)
            .paddingOuter(spacing / 2)
            .domain(this.groupDomain);
    }
    getInnerScale() {
        const height = this.groupScale.bandwidth();
        const spacing = this.innerDomain.length / (height / this.barPadding + 1);
        return scaleBand().rangeRound([0, height]).paddingInner(spacing).domain(this.innerDomain);
    }
    getValueScale() {
        const scale = scaleLinear().range([0, this.dims.width]).domain(this.valuesDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        const min = Math.min(0, ...domain);
        const max = this.xScaleMax ? Math.max(this.xScaleMax, ...domain) : Math.max(0, ...domain);
        return [min, max];
    }
    groupTransform(group) {
        return `translate(0, ${this.groupScale(group.label)})`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valuesDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valuesDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onDataLabelMaxWidthChanged(event, groupIndex) {
        if (event.size.negative) {
            this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
        }
        else {
            this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
        }
        if (groupIndex === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarHorizontal2DComponent.ɵfac = function BarHorizontal2DComponent_Factory(t) { return ɵBarHorizontal2DComponent_BaseFactory(t || BarHorizontal2DComponent); };
BarHorizontal2DComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarHorizontal2DComponent, selectors: [["ngx-charts-bar-horizontal-2d"]], contentQueries: function BarHorizontal2DComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", groupPadding: "groupPadding", barPadding: "barPadding", roundDomains: "roundDomains", roundEdges: "roundEdges", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", xScaleMax: "xScaleMax", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 17, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", "orient", "horizontal", 3, "xScale", "yScale", "data", "dims"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged"], ["ngx-charts-series-horizontal", "", 3, "xScale", "activeEntries", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "roundEdges", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelWidthChanged"]], template: function BarHorizontal2DComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarHorizontal2DComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelement(2, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarHorizontal2DComponent__svg_g_3_Template, 1, 10, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarHorizontal2DComponent__svg_g_4_Template, 1, 9, "g", 4);
        ɵngcc0.ɵɵtemplate(5, BarHorizontal2DComponent__svg_g_5_Template, 2, 17, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(14, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("xScale", ctx.valueScale)("yScale", ctx.groupScale)("data", ctx.results)("dims", ctx.dims);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, GridPanelSeriesComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesHorizontal]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarHorizontal2DComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    groupPadding: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    roundEdges: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarHorizontal2DComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarHorizontal2DComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarHorizontal2DComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-horizontal-2d',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-grid-panel-series
          [xScale]="valueScale"
          [yScale]="groupScale"
          [data]="results"
          [dims]="dims"
          orient="horizontal"
        ></svg:g>
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="groupScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-horizontal
            [xScale]="valueScale"
            [activeEntries]="activeEntries"
            [yScale]="innerScale"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            [roundEdges]="roundEdges"
            [animations]="animations"
            [showDataLabel]="showDataLabel"
            [dataLabelFormatting]="dataLabelFormatting"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], groupPadding: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarHorizontalNormalizedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valueDomain = this.getValueDomain();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        return [0, 100];
    }
    getYScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.groupDomain);
    }
    getXScale() {
        const scale = scaleLinear().range([0, this.dims.width]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    groupTransform(group) {
        return `translate(0, ${this.yScale(group.name)})`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valueDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valueDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarHorizontalNormalizedComponent.ɵfac = function BarHorizontalNormalizedComponent_Factory(t) { return ɵBarHorizontalNormalizedComponent_BaseFactory(t || BarHorizontalNormalizedComponent); };
BarHorizontalNormalizedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarHorizontalNormalizedComponent, selectors: [["ngx-charts-bar-horizontal-normalized"]], contentQueries: function BarHorizontalNormalizedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-horizontal", "", "type", "normalized", 3, "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "noBarWhenZero", "select", "activate", "deactivate"]], template: function BarHorizontalNormalizedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarHorizontalNormalizedComponent__svg_g_2_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarHorizontalNormalizedComponent__svg_g_3_Template, 1, 8, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarHorizontalNormalizedComponent__svg_g_4_Template, 2, 14, "g", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesHorizontal]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarHorizontalNormalizedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarHorizontalNormalizedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarHorizontalNormalizedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarHorizontalNormalizedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-horizontal-normalized',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-horizontal
            type="normalized"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            [animations]="animations"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            [noBarWhenZero]="noBarWhenZero"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarHorizontalStackedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxWidth = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxWidth = { negative: 0, positive: 0 };
        }
        this.margin = [10, 20 + this.dataLabelMaxWidth.positive, 10, 20 + this.dataLabelMaxWidth.negative];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valueDomain = this.getValueDomain();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        let smallest = 0;
        let biggest = 0;
        for (const group of this.results) {
            let smallestSum = 0;
            let biggestSum = 0;
            for (const d of group.series) {
                if (d.value < 0) {
                    smallestSum += d.value;
                }
                else {
                    biggestSum += d.value;
                }
                smallest = d.value < smallest ? d.value : smallest;
                biggest = d.value > biggest ? d.value : biggest;
            }
            domain.push(smallestSum);
            domain.push(biggestSum);
        }
        domain.push(smallest);
        domain.push(biggest);
        const min = Math.min(0, ...domain);
        const max = this.xScaleMax ? Math.max(this.xScaleMax, ...domain) : Math.max(...domain);
        return [min, max];
    }
    getYScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.groupDomain);
    }
    getXScale() {
        const scale = scaleLinear().range([0, this.dims.width]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    groupTransform(group) {
        return `translate(0, ${this.yScale(group.name)})`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valueDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valueDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onDataLabelMaxWidthChanged(event, groupIndex) {
        if (event.size.negative) {
            this.dataLabelMaxWidth.negative = Math.max(this.dataLabelMaxWidth.negative, event.size.width);
        }
        else {
            this.dataLabelMaxWidth.positive = Math.max(this.dataLabelMaxWidth.positive, event.size.width);
        }
        if (groupIndex === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarHorizontalStackedComponent.ɵfac = function BarHorizontalStackedComponent_Factory(t) { return ɵBarHorizontalStackedComponent_BaseFactory(t || BarHorizontalStackedComponent); };
BarHorizontalStackedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarHorizontalStackedComponent, selectors: [["ngx-charts-bar-horizontal-stacked"]], contentQueries: function BarHorizontalStackedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", xScaleMax: "xScaleMax", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "yAxisOffset", "dimensionsChanged"], ["ngx-charts-series-horizontal", "", "type", "stacked", 3, "xScale", "yScale", "colors", "series", "activeEntries", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "showDataLabel", "dataLabelFormatting", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelWidthChanged"]], template: function BarHorizontalStackedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarHorizontalStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarHorizontalStackedComponent__svg_g_2_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarHorizontalStackedComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarHorizontalStackedComponent__svg_g_4_Template, 2, 16, "g", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesHorizontal]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarHorizontalStackedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarHorizontalStackedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarHorizontalStackedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarHorizontalStackedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-horizontal-stacked',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [yAxisOffset]="dataLabelMaxWidth.negative"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-horizontal
            type="stacked"
            [xScale]="xScale"
            [yScale]="yScale"
            [colors]="colors"
            [series]="group.series"
            [activeEntries]="activeEntries"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            [animations]="animations"
            [showDataLabel]="showDataLabel"
            [dataLabelFormatting]="dataLabelFormatting"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            (dataLabelWidthChanged)="onDataLabelMaxWidthChanged($event, index)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarVerticalComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.roundEdges = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxHeight = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxHeight = { negative: 0, positive: 0 };
        }
        this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        if (this.showDataLabel) {
            this.dims.height -= this.dataLabelMaxHeight.negative;
        }
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
    }
    getXScale() {
        this.xDomain = this.getXDomain();
        const spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
        return scaleBand().range([0, this.dims.width]).paddingInner(spacing).domain(this.xDomain);
    }
    getYScale() {
        this.yDomain = this.getYDomain();
        const scale = scaleLinear().range([this.dims.height, 0]).domain(this.yDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getXDomain() {
        return this.results.map(d => d.label);
    }
    getYDomain() {
        const values = this.results.map(d => d.value);
        let min = this.yScaleMin ? Math.min(this.yScaleMin, ...values) : Math.min(0, ...values);
        if (this.yAxisTicks && !this.yAxisTicks.some(isNaN)) {
            min = Math.min(min, ...this.yAxisTicks);
        }
        let max = this.yScaleMax ? Math.max(this.yScaleMax, ...values) : Math.max(0, ...values);
        if (this.yAxisTicks && !this.yAxisTicks.some(isNaN)) {
            max = Math.max(max, ...this.yAxisTicks);
        }
        return [min, max];
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.xDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.xDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onDataLabelMaxHeightChanged(event) {
        if (event.size.negative) {
            this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
        }
        else {
            this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
        }
        if (event.index === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarVerticalComponent.ɵfac = function BarVerticalComponent_Factory(t) { return ɵBarVerticalComponent_BaseFactory(t || BarVerticalComponent); };
BarVerticalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarVerticalComponent, selectors: [["ngx-charts-bar-vertical"]], contentQueries: function BarVerticalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", roundEdges: "roundEdges", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", yScaleMax: "yScaleMax", yScaleMin: "yScaleMin", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 25, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "activeEntries", "roundEdges", "animations", "noBarWhenZero", "activate", "deactivate", "select", "dataLabelHeightChanged"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"]], template: function BarVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, true); })("legendLabelDeactivate", function BarVerticalComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, true); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarVerticalComponent__svg_g_2_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarVerticalComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(4, "g", 4);
        ɵngcc0.ɵɵlistener("activate", function BarVerticalComponent_Template__svg_g_activate_4_listener($event) { return ctx.onActivate($event); })("deactivate", function BarVerticalComponent_Template__svg_g_deactivate_4_listener($event) { return ctx.onDeactivate($event); })("select", function BarVerticalComponent_Template__svg_g_select_4_listener($event) { return ctx.onClick($event); })("dataLabelHeightChanged", function BarVerticalComponent_Template__svg_g_dataLabelHeightChanged_4_listener($event) { return ctx.onDataLabelMaxHeightChanged($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(22, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("series", ctx.results)("dims", ctx.dims)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("showDataLabel", ctx.showDataLabel)("dataLabelFormatting", ctx.dataLabelFormatting)("activeEntries", ctx.activeEntries)("roundEdges", ctx.roundEdges)("animations", ctx.animations)("noBarWhenZero", ctx.noBarWhenZero);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, SeriesVerticalComponent, XAxisComponent, YAxisComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
BarVerticalComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    roundEdges: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    yScaleMin: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarVerticalComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarVerticalComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarVerticalComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-vertical',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-vertical
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [series]="results"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [activeEntries]="activeEntries"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [noBarWhenZero]="noBarWhenZero"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
          (select)="onClick($event)"
          (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event)"
        ></svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarVertical2DComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.scaleType = 'ordinal';
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.groupPadding = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.roundEdges = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxHeight = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxHeight = { negative: 0, positive: 0 };
        }
        this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.showDataLabel) {
            this.dims.height -= this.dataLabelMaxHeight.negative;
        }
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valuesDomain = this.getValueDomain();
        this.groupScale = this.getGroupScale();
        this.innerScale = this.getInnerScale();
        this.valueScale = this.getValueScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
    }
    onDataLabelMaxHeightChanged(event, groupIndex) {
        if (event.size.negative) {
            this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
        }
        else {
            this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
        }
        if (groupIndex === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    getGroupScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
        return scaleBand()
            .rangeRound([0, this.dims.width])
            .paddingInner(spacing)
            .paddingOuter(spacing / 2)
            .domain(this.groupDomain);
    }
    getInnerScale() {
        const width = this.groupScale.bandwidth();
        const spacing = this.innerDomain.length / (width / this.barPadding + 1);
        return scaleBand().rangeRound([0, width]).paddingInner(spacing).domain(this.innerDomain);
    }
    getValueScale() {
        const scale = scaleLinear().range([this.dims.height, 0]).domain(this.valuesDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        const min = Math.min(0, ...domain);
        const max = this.yScaleMax ? Math.max(this.yScaleMax, ...domain) : Math.max(0, ...domain);
        return [min, max];
    }
    groupTransform(group) {
        return `translate(${this.groupScale(group.label)}, 0)`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valuesDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valuesDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarVertical2DComponent.ɵfac = function BarVertical2DComponent_Factory(t) { return ɵBarVertical2DComponent_BaseFactory(t || BarVertical2DComponent); };
BarVertical2DComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarVertical2DComponent, selectors: [["ngx-charts-bar-vertical-2d"]], contentQueries: function BarVertical2DComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", scaleType: "scaleType", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", groupPadding: "groupPadding", barPadding: "barPadding", roundDomains: "roundDomains", roundEdges: "roundEdges", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", yScaleMax: "yScaleMax", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 17, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", "orient", "vertical", 3, "xScale", "yScale", "data", "dims"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged"]], template: function BarVertical2DComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelement(2, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarVertical2DComponent__svg_g_3_Template, 1, 10, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarVertical2DComponent__svg_g_4_Template, 1, 9, "g", 4);
        ɵngcc0.ɵɵtemplate(5, BarVertical2DComponent__svg_g_5_Template, 1, 17, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(14, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("xScale", ctx.groupScale)("yScale", ctx.valueScale)("data", ctx.results)("dims", ctx.dims);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, GridPanelSeriesComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesVerticalComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarVertical2DComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    scaleType: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    groupPadding: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    roundEdges: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarVertical2DComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarVertical2DComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarVertical2DComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-vertical-2d',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-grid-panel-series
          [xScale]="groupScale"
          [yScale]="valueScale"
          [data]="results"
          [dims]="dims"
          orient="vertical"
        ></svg:g>
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="groupScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-vertical
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
          [activeEntries]="activeEntries"
          [xScale]="innerScale"
          [yScale]="valueScale"
          [colors]="colors"
          [series]="group.series"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [seriesName]="group.name"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [noBarWhenZero]="noBarWhenZero"
          (select)="onClick($event, group)"
          (activate)="onActivate($event, group)"
          (deactivate)="onDeactivate($event, group)"
          (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], groupPadding: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarVerticalNormalizedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valueDomain = this.getValueDomain();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        return [0, 100];
    }
    getXScale() {
        const spacing = this.groupDomain.length / (this.dims.width / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.width]).paddingInner(spacing).domain(this.groupDomain);
    }
    getYScale() {
        const scale = scaleLinear().range([this.dims.height, 0]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    groupTransform(group) {
        return `translate(${this.xScale(group.name)}, 0)`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valueDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valueDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarVerticalNormalizedComponent.ɵfac = function BarVerticalNormalizedComponent_Factory(t) { return ɵBarVerticalNormalizedComponent_BaseFactory(t || BarVerticalNormalizedComponent); };
BarVerticalNormalizedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarVerticalNormalizedComponent, selectors: [["ngx-charts-bar-vertical-normalized"]], contentQueries: function BarVerticalNormalizedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", "type", "normalized", 3, "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "noBarWhenZero", "select", "activate", "deactivate"]], template: function BarVerticalNormalizedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarVerticalNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarVerticalNormalizedComponent__svg_g_2_Template, 1, 9, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarVerticalNormalizedComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarVerticalNormalizedComponent__svg_g_4_Template, 2, 14, "g", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesVerticalComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarVerticalNormalizedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarVerticalNormalizedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarVerticalNormalizedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarVerticalNormalizedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-vertical-normalized',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-vertical
            type="normalized"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            [animations]="animations"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BarVerticalStackedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxHeight = { negative: 0, positive: 0 };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxHeight = { negative: 0, positive: 0 };
        }
        this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.showDataLabel) {
            this.dims.height -= this.dataLabelMaxHeight.negative;
        }
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valueDomain = this.getValueDomain();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        let smallest = 0;
        let biggest = 0;
        for (const group of this.results) {
            let smallestSum = 0;
            let biggestSum = 0;
            for (const d of group.series) {
                if (d.value < 0) {
                    smallestSum += d.value;
                }
                else {
                    biggestSum += d.value;
                }
                smallest = d.value < smallest ? d.value : smallest;
                biggest = d.value > biggest ? d.value : biggest;
            }
            domain.push(smallestSum);
            domain.push(biggestSum);
        }
        domain.push(smallest);
        domain.push(biggest);
        const min = Math.min(0, ...domain);
        const max = this.yScaleMax ? Math.max(this.yScaleMax, ...domain) : Math.max(...domain);
        return [min, max];
    }
    getXScale() {
        const spacing = this.groupDomain.length / (this.dims.width / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.width]).paddingInner(spacing).domain(this.groupDomain);
    }
    getYScale() {
        const scale = scaleLinear().range([this.dims.height, 0]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    onDataLabelMaxHeightChanged(event, groupIndex) {
        if (event.size.negative) {
            this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
        }
        else {
            this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
        }
        if (groupIndex === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    groupTransform(group) {
        return `translate(${this.xScale(group.name) || 0}, 0)`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.innerDomain;
        }
        else {
            domain = this.valueDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valueDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarVerticalStackedComponent.ɵfac = function BarVerticalStackedComponent_Factory(t) { return ɵBarVerticalStackedComponent_BaseFactory(t || BarVerticalStackedComponent); };
BarVerticalStackedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarVerticalStackedComponent, selectors: [["ngx-charts-bar-vertical-stacked"]], contentQueries: function BarVerticalStackedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", tooltipDisabled: "tooltipDisabled", showGridLines: "showGridLines", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", barPadding: "barPadding", roundDomains: "roundDomains", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", yScaleMax: "yScaleMax", dataLabelFormatting: "dataLabelFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", "type", "stacked", 3, "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged"]], template: function BarVerticalStackedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarVerticalStackedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, BarVerticalStackedComponent__svg_g_2_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, BarVerticalStackedComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵtemplate(4, BarVerticalStackedComponent__svg_g_4_Template, 2, 16, "g", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, SeriesVerticalComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BarVerticalStackedComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    barPadding: [{ type: Input }],
    roundDomains: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵBarVerticalStackedComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BarVerticalStackedComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarVerticalStackedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bar-vertical-stacked',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-vertical
            type="stacked"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [showDataLabel]="showDataLabel"
            [dataLabelFormatting]="dataLabelFormatting"
            [seriesName]="group.name"
            [animations]="animations"
            [noBarWhenZero]="noBarWhenZero"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

var D0Types;
(function (D0Types) {
    D0Types["positive"] = "positive";
    D0Types["negative"] = "negative";
})(D0Types || (D0Types = {}));
class SeriesVerticalComponent {
    constructor() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dataLabelHeightChanged = new EventEmitter();
        this.barsForDataLabels = [];
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateTooltipSettings();
        let width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
        }
        width = Math.round(width);
        const yScaleMin = Math.max(this.yScale.domain()[0], 0);
        const d0 = {
            [D0Types.positive]: 0,
            [D0Types.negative]: 0
        };
        let d0Type = D0Types.positive;
        let total;
        if (this.type === 'normalized') {
            total = this.series.map(d => d.value).reduce((sum, d) => sum + d, 0);
        }
        this.bars = this.series.map((d, index) => {
            let value = d.value;
            const label = this.getLabel(d);
            const formattedLabel = formatLabel(label);
            const roundEdges = this.roundEdges;
            d0Type = value > 0 ? D0Types.positive : D0Types.negative;
            const bar = {
                value,
                label,
                roundEdges,
                data: d,
                width,
                formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (this.type === 'standard') {
                bar.height = Math.abs(this.yScale(value) - this.yScale(yScaleMin));
                bar.x = this.xScale(label);
                if (value < 0) {
                    bar.y = this.yScale(0);
                }
                else {
                    bar.y = this.yScale(value);
                }
            }
            else if (this.type === 'stacked') {
                const offset0 = d0[d0Type];
                const offset1 = offset0 + value;
                d0[d0Type] += value;
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (this.type === 'normalized') {
                let offset0 = d0[d0Type];
                let offset1 = offset0 + value;
                d0[d0Type] += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (this.colors.scaleType === 'ordinal') {
                bar.color = this.colors.getColor(label);
            }
            else {
                if (this.type === 'standard') {
                    bar.color = this.colors.getColor(value);
                    bar.gradientStops = this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = this.colors.getColor(bar.offset1);
                    bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            let tooltipLabel = formattedLabel;
            bar.ariaLabel = formattedLabel + ' ' + value.toLocaleString();
            if (this.seriesName) {
                tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
                bar.data.series = this.seriesName;
                bar.ariaLabel = this.seriesName + ' ' + bar.ariaLabel;
            }
            bar.tooltipText = this.tooltipDisabled
                ? undefined
                : `
        <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
        <span class="tooltip-val">${this.dataLabelFormatting ? this.dataLabelFormatting(value) : value.toLocaleString()}</span>
      `;
            return bar;
        });
        this.updateDataLabels();
    }
    updateDataLabels() {
        if (this.type === 'stacked') {
            this.barsForDataLabels = [];
            const section = {};
            section.series = this.seriesName;
            const totalPositive = this.series.map(d => d.value).reduce((sum, d) => (d > 0 ? sum + d : sum), 0);
            const totalNegative = this.series.map(d => d.value).reduce((sum, d) => (d < 0 ? sum + d : sum), 0);
            section.total = totalPositive + totalNegative;
            section.x = 0;
            section.y = 0;
            if (section.total > 0) {
                section.height = this.yScale(totalPositive);
            }
            else {
                section.height = this.yScale(totalNegative);
            }
            section.width = this.xScale.bandwidth();
            this.barsForDataLabels.push(section);
        }
        else {
            this.barsForDataLabels = this.series.map(d => {
                const section = {};
                section.series = this.seriesName ? this.seriesName : d.label;
                section.total = d.value;
                section.x = this.xScale(d.label);
                section.y = this.yScale(0);
                section.height = this.yScale(section.total) - this.yScale(0);
                section.width = this.xScale.bandwidth();
                return section;
            });
        }
    }
    updateTooltipSettings() {
        this.tooltipPlacement = this.tooltipDisabled ? undefined : 'top';
        this.tooltipType = this.tooltipDisabled ? undefined : 'tooltip';
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
    onClick(data) {
        this.select.emit(data);
    }
    getLabel(dataItem) {
        if (dataItem.label) {
            return dataItem.label;
        }
        return dataItem.name;
    }
    trackBy(index, bar) {
        return bar.label;
    }
    trackDataLabelBy(index, barLabel) {
        return index + '#' + barLabel.series + '#' + barLabel.total;
    }
}
SeriesVerticalComponent.ɵfac = function SeriesVerticalComponent_Factory(t) { return new (t || SeriesVerticalComponent)(); };
SeriesVerticalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SeriesVerticalComponent, selectors: [["g", "ngx-charts-series-vertical", ""]], inputs: { type: "type", tooltipDisabled: "tooltipDisabled", animations: "animations", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", dims: "dims", series: "series", xScale: "xScale", yScale: "yScale", colors: "colors", gradient: "gradient", activeEntries: "activeEntries", seriesName: "seriesName", tooltipTemplate: "tooltipTemplate", roundEdges: "roundEdges", dataLabelFormatting: "dataLabelFormatting" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dataLabelHeightChanged: "dataLabelHeightChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c26, decls: 2, vars: 3, consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged"]], template: function SeriesVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SeriesVerticalComponent__svg_g_0_Template, 1, 22, "g", 0);
        ɵngcc0.ɵɵtemplate(1, SeriesVerticalComponent__svg_g_1_Template, 2, 2, "g", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showDataLabel);
    } }, directives: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgIf, BarComponent, TooltipDirective, BarLabelComponent]; }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
SeriesVerticalComponent.propDecorators = {
    dims: [{ type: Input }],
    type: [{ type: Input }],
    series: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    seriesName: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    roundEdges: [{ type: Input }],
    animations: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    dataLabelHeightChanged: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SeriesVerticalComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-series-vertical]',
                template: `
    <svg:g
      ngx-charts-bar
      *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [@.disabled]="!animations"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="'vertical'"
      [roundEdges]="bar.roundEdges"
      [gradient]="gradient"
      [ariaLabel]="bar.ariaLabel"
      [isActive]="isActive(bar.data)"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="bar.data"
      [noBarWhenZero]="noBarWhenZero"
      [animations]="animations"
    ></svg:g>
    <svg:g *ngIf="showDataLabel">
      <svg:g
        ngx-charts-bar-label
        *ngFor="let b of barsForDataLabels; let i = index; trackBy: trackDataLabelBy"
        [barX]="b.x"
        [barY]="b.y"
        [barWidth]="b.width"
        [barHeight]="b.height"
        [value]="b.total"
        [valueFormatting]="dataLabelFormatting"
        [orientation]="'vertical'"
        (dimensionsChanged)="dataLabelHeightChanged.emit({ size: $event, index: i })"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dataLabelHeightChanged: [{
            type: Output
        }], dims: [{
            type: Input
        }], series: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], gradient: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], seriesName: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }] }); })();

class SeriesHorizontal {
    constructor() {
        this.barsForDataLabels = [];
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dataLabelWidthChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateTooltipSettings();
        const d0 = {
            [D0Types.positive]: 0,
            [D0Types.negative]: 0
        };
        let d0Type;
        d0Type = D0Types.positive;
        let total;
        if (this.type === 'normalized') {
            total = this.series.map(d => d.value).reduce((sum, d) => sum + d, 0);
        }
        const xScaleMin = Math.max(this.xScale.domain()[0], 0);
        this.bars = this.series.map((d, index) => {
            let value = d.value;
            const label = this.getLabel(d);
            const formattedLabel = formatLabel(label);
            const roundEdges = this.roundEdges;
            d0Type = value > 0 ? D0Types.positive : D0Types.negative;
            const bar = {
                value,
                label,
                roundEdges,
                data: d,
                formattedLabel
            };
            bar.height = this.yScale.bandwidth();
            if (this.type === 'standard') {
                bar.width = Math.abs(this.xScale(value) - this.xScale(xScaleMin));
                if (value < 0) {
                    bar.x = this.xScale(value);
                }
                else {
                    bar.x = this.xScale(xScaleMin);
                }
                bar.y = this.yScale(label);
            }
            else if (this.type === 'stacked') {
                const offset0 = d0[d0Type];
                const offset1 = offset0 + value;
                d0[d0Type] += value;
                bar.width = this.xScale(offset1) - this.xScale(offset0);
                bar.x = this.xScale(offset0);
                bar.y = 0;
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (this.type === 'normalized') {
                let offset0 = d0[d0Type];
                let offset1 = offset0 + value;
                d0[d0Type] += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.width = this.xScale(offset1) - this.xScale(offset0);
                bar.x = this.xScale(offset0);
                bar.y = 0;
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (this.colors.scaleType === 'ordinal') {
                bar.color = this.colors.getColor(label);
            }
            else {
                if (this.type === 'standard') {
                    bar.color = this.colors.getColor(value);
                    bar.gradientStops = this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = this.colors.getColor(bar.offset1);
                    bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            let tooltipLabel = formattedLabel;
            bar.ariaLabel = formattedLabel + ' ' + value.toLocaleString();
            if (this.seriesName) {
                tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
                bar.data.series = this.seriesName;
                bar.ariaLabel = this.seriesName + ' ' + bar.ariaLabel;
            }
            bar.tooltipText = this.tooltipDisabled
                ? undefined
                : `
        <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
        <span class="tooltip-val">${this.dataLabelFormatting ? this.dataLabelFormatting(value) : value.toLocaleString()}</span>
      `;
            return bar;
        });
        this.updateDataLabels();
    }
    updateDataLabels() {
        if (this.type === 'stacked') {
            this.barsForDataLabels = [];
            const section = {};
            section.series = this.seriesName;
            const totalPositive = this.series.map(d => d.value).reduce((sum, d) => (d > 0 ? sum + d : sum), 0);
            const totalNegative = this.series.map(d => d.value).reduce((sum, d) => (d < 0 ? sum + d : sum), 0);
            section.total = totalPositive + totalNegative;
            section.x = 0;
            section.y = 0;
            // if total is positive then we show it on the right, otherwise on the left
            if (section.total > 0) {
                section.width = this.xScale(totalPositive);
            }
            else {
                section.width = this.xScale(totalNegative);
            }
            section.height = this.yScale.bandwidth();
            this.barsForDataLabels.push(section);
        }
        else {
            this.barsForDataLabels = this.series.map(d => {
                const section = {};
                section.series = this.seriesName ? this.seriesName : d.label;
                section.total = d.value;
                section.x = this.xScale(0);
                section.y = this.yScale(d.label);
                section.width = this.xScale(section.total) - this.xScale(0);
                section.height = this.yScale.bandwidth();
                return section;
            });
        }
    }
    updateTooltipSettings() {
        this.tooltipPlacement = this.tooltipDisabled ? undefined : 'top';
        this.tooltipType = this.tooltipDisabled ? undefined : 'tooltip';
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
    getLabel(dataItem) {
        if (dataItem.label) {
            return dataItem.label;
        }
        return dataItem.name;
    }
    trackBy(index, bar) {
        return bar.label;
    }
    trackDataLabelBy(index, barLabel) {
        return index + '#' + barLabel.series + '#' + barLabel.total;
    }
    click(data) {
        this.select.emit(data);
    }
}
SeriesHorizontal.ɵfac = function SeriesHorizontal_Factory(t) { return new (t || SeriesHorizontal)(); };
SeriesHorizontal.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SeriesHorizontal, selectors: [["g", "ngx-charts-series-horizontal", ""]], inputs: { type: "type", tooltipDisabled: "tooltipDisabled", animations: "animations", showDataLabel: "showDataLabel", noBarWhenZero: "noBarWhenZero", dims: "dims", series: "series", xScale: "xScale", yScale: "yScale", colors: "colors", gradient: "gradient", activeEntries: "activeEntries", seriesName: "seriesName", tooltipTemplate: "tooltipTemplate", roundEdges: "roundEdges", dataLabelFormatting: "dataLabelFormatting" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dataLabelWidthChanged: "dataLabelWidthChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c27, decls: 2, vars: 3, consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "ariaLabel", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "ariaLabel", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "select", "activate", "deactivate"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged"]], template: function SeriesHorizontal_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SeriesHorizontal__svg_g_0_Template, 1, 21, "g", 0);
        ɵngcc0.ɵɵtemplate(1, SeriesHorizontal__svg_g_1_Template, 2, 2, "g", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showDataLabel);
    } }, directives: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgIf, BarComponent, TooltipDirective, BarLabelComponent]; }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
SeriesHorizontal.propDecorators = {
    dims: [{ type: Input }],
    type: [{ type: Input }],
    series: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    seriesName: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    roundEdges: [{ type: Input }],
    animations: [{ type: Input }],
    showDataLabel: [{ type: Input }],
    dataLabelFormatting: [{ type: Input }],
    noBarWhenZero: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    dataLabelWidthChanged: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SeriesHorizontal, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-series-horizontal]',
                template: `
    <svg:g
      ngx-charts-bar
      *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="'horizontal'"
      [roundEdges]="bar.roundEdges"
      (select)="click($event)"
      [gradient]="gradient"
      [isActive]="isActive(bar.data)"
      [ariaLabel]="bar.ariaLabel"
      [animations]="animations"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="bar.data"
      [noBarWhenZero]="noBarWhenZero"
    ></svg:g>
    <svg:g *ngIf="showDataLabel">
      <svg:g
        ngx-charts-bar-label
        *ngFor="let b of barsForDataLabels; let i = index; trackBy: trackDataLabelBy"
        [barX]="b.x"
        [barY]="b.y"
        [barWidth]="b.width"
        [barHeight]="b.height"
        [value]="b.total"
        [valueFormatting]="dataLabelFormatting"
        [orientation]="'horizontal'"
        (dimensionsChanged)="dataLabelWidthChanged.emit({ size: $event, index: i })"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dataLabelWidthChanged: [{
            type: Output
        }], dims: [{
            type: Input
        }], series: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], gradient: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], seriesName: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }] }); })();

class BarLabelComponent {
    constructor(element) {
        this.dimensionsChanged = new EventEmitter();
        this.horizontalPadding = 2;
        this.verticalPadding = 5;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    getSize() {
        const h = this.element.getBoundingClientRect().height;
        const w = this.element.getBoundingClientRect().width;
        return { height: h, width: w, negative: this.value < 0 };
    }
    ngAfterViewInit() {
        this.dimensionsChanged.emit(this.getSize());
    }
    update() {
        if (this.valueFormatting) {
            this.formatedValue = this.valueFormatting(this.value);
        }
        else {
            this.formatedValue = formatLabel(this.value);
        }
        if (this.orientation === 'horizontal') {
            this.x = this.barX + this.barWidth;
            // if the value is negative then it's on the left of the x0.
            // we need to put the data label in front of the bar
            if (this.value < 0) {
                this.x = this.x - this.horizontalPadding;
                this.textAnchor = 'end';
            }
            else {
                this.x = this.x + this.horizontalPadding;
                this.textAnchor = 'start';
            }
            this.y = this.barY + this.barHeight / 2;
        }
        else {
            // orientation must be "vertical"
            this.x = this.barX + this.barWidth / 2;
            this.y = this.barY + this.barHeight;
            if (this.value < 0) {
                this.y = this.y + this.verticalPadding;
                this.textAnchor = 'end';
            }
            else {
                this.y = this.y - this.verticalPadding;
                this.textAnchor = 'start';
            }
            this.transform = `rotate(-45, ${this.x} , ${this.y})`;
        }
    }
}
BarLabelComponent.ɵfac = function BarLabelComponent_Factory(t) { return new (t || BarLabelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BarLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarLabelComponent, selectors: [["g", "ngx-charts-bar-label", ""]], inputs: { value: "value", valueFormatting: "valueFormatting", barX: "barX", barY: "barY", barWidth: "barWidth", barHeight: "barHeight", orientation: "orientation" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c28, decls: 2, vars: 5, consts: [["alignment-baseline", "middle", 1, "textDataLabel"]], template: function BarLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "text", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("text-anchor", ctx.textAnchor)("transform", ctx.transform)("x", ctx.x)("y", ctx.y);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.formatedValue, " ");
    } }, styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"], changeDetection: 0 });
BarLabelComponent.ctorParameters = () => [
    { type: ElementRef }
];
BarLabelComponent.propDecorators = {
    value: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    barX: [{ type: Input }],
    barY: [{ type: Input }],
    barWidth: [{ type: Input }],
    barHeight: [{ type: Input }],
    orientation: [{ type: Input }],
    dimensionsChanged: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarLabelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-bar-label]',
                template: `
    <svg:text
      class="textDataLabel"
      alignment-baseline="middle"
      [attr.text-anchor]="textAnchor"
      [attr.transform]="transform"
      [attr.x]="x"
      [attr.y]="y"
    >
      {{ formatedValue }}
    </svg:text>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".textDataLabel{font-size:11px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { dimensionsChanged: [{
            type: Output
        }], value: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], barX: [{
            type: Input
        }], barY: [{
            type: Input
        }], barWidth: [{
            type: Input
        }], barHeight: [{
            type: Input
        }], orientation: [{
            type: Input
        }] }); })();

class BarChartModule {
}
BarChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BarChartModule });
BarChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BarChartModule_Factory(t) { return new (t || BarChartModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BarChartModule, { declarations: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent], imports: [ChartCommonModule], exports: [BarComponent, BarHorizontalComponent, BarHorizontal2DComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarVerticalComponent, BarVertical2DComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BarLabelComponent, SeriesHorizontal, SeriesVerticalComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [
                    BarComponent,
                    BarHorizontalComponent,
                    BarHorizontal2DComponent,
                    BarHorizontalNormalizedComponent,
                    BarHorizontalStackedComponent,
                    BarVerticalComponent,
                    BarVertical2DComponent,
                    BarVerticalNormalizedComponent,
                    BarVerticalStackedComponent,
                    BarLabelComponent,
                    SeriesHorizontal,
                    SeriesVerticalComponent
                ],
                exports: [
                    BarComponent,
                    BarHorizontalComponent,
                    BarHorizontal2DComponent,
                    BarHorizontalNormalizedComponent,
                    BarHorizontalStackedComponent,
                    BarVerticalComponent,
                    BarVertical2DComponent,
                    BarVerticalNormalizedComponent,
                    BarVerticalStackedComponent,
                    BarLabelComponent,
                    SeriesHorizontal,
                    SeriesVerticalComponent
                ]
            }]
    }], null, null); })();

function getDomain(values, scaleType, autoScale, minVal, maxVal) {
    let domain = [];
    if (scaleType === 'linear') {
        values = values.map(v => Number(v));
        if (!autoScale) {
            values.push(0);
        }
    }
    if (scaleType === 'time' || scaleType === 'linear') {
        const min = minVal ? minVal : Math.min(...values);
        const max = maxVal ? maxVal : Math.max(...values);
        domain = [min, max];
    }
    else {
        domain = values;
    }
    return domain;
}
function getScale(domain, range, scaleType, roundDomains) {
    let scale;
    if (scaleType === 'time') {
        scale = scaleTime().range(range).domain(domain);
    }
    else if (scaleType === 'linear') {
        scale = scaleLinear().range(range).domain(domain);
        if (roundDomains) {
            scale = scale.nice();
        }
    }
    else if (scaleType === 'ordinal') {
        scale = scalePoint().range([range[0], range[1]]).domain(domain);
    }
    return scale;
}

class BubbleChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.showGridLines = true;
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.xAxis = true;
        this.yAxis = true;
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.schemeType = 'ordinal';
        this.tooltipDisabled = false;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.scaleType = 'linear';
        this.margin = [10, 20, 10, 20];
        this.bubblePadding = [0, 0, 0, 0];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.activeEntries = [];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        this.seriesDomain = this.results.map(d => d.name);
        this.rDomain = this.getRDomain();
        this.xDomain = this.getXDomain();
        this.yDomain = this.getYDomain();
        this.transform = `translate(${this.dims.xOffset},${this.margin[0]})`;
        const colorDomain = this.schemeType === 'ordinal' ? this.seriesDomain : this.rDomain;
        this.colors = new ColorHelper(this.scheme, this.schemeType, colorDomain, this.customColors);
        this.data = this.results;
        this.minRadius = Math.max(this.minRadius, 1);
        this.maxRadius = Math.max(this.maxRadius, 1);
        this.rScale = this.getRScale(this.rDomain, [this.minRadius, this.maxRadius]);
        this.bubblePadding = [0, 0, 0, 0];
        this.setScales();
        this.bubblePadding = this.getBubblePadding();
        this.setScales();
        this.legendOptions = this.getLegendOptions();
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    hideCircles() {
        this.deactivateAll();
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    getBubblePadding() {
        let yMin = 0;
        let xMin = 0;
        let yMax = this.dims.height;
        let xMax = this.dims.width;
        for (const s of this.data) {
            for (const d of s.series) {
                const r = this.rScale(d.r);
                const cx = this.xScaleType === 'linear' ? this.xScale(Number(d.x)) : this.xScale(d.x);
                const cy = this.yScaleType === 'linear' ? this.yScale(Number(d.y)) : this.yScale(d.y);
                xMin = Math.max(r - cx, xMin);
                yMin = Math.max(r - cy, yMin);
                yMax = Math.max(cy + r, yMax);
                xMax = Math.max(cx + r, xMax);
            }
        }
        xMax = Math.max(xMax - this.dims.width, 0);
        yMax = Math.max(yMax - this.dims.height, 0);
        return [yMin, xMax, yMax, xMin];
    }
    setScales() {
        let width = this.dims.width;
        if (this.xScaleMin === undefined && this.xScaleMax === undefined) {
            width = width - this.bubblePadding[1];
        }
        let height = this.dims.height;
        if (this.yScaleMin === undefined && this.yScaleMax === undefined) {
            height = height - this.bubblePadding[2];
        }
        this.xScale = this.getXScale(this.xDomain, width);
        this.yScale = this.getYScale(this.yDomain, height);
    }
    getYScale(domain, height) {
        return getScale(domain, [height, this.bubblePadding[0]], this.yScaleType, this.roundDomains);
    }
    getXScale(domain, width) {
        return getScale(domain, [this.bubblePadding[3], width], this.xScaleType, this.roundDomains);
    }
    getRScale(domain, range) {
        const scale = scaleLinear().range(range).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            position: this.legendPosition,
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.rDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    getXDomain() {
        const values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.x)) {
                    values.push(d.x);
                }
            }
        }
        this.xScaleType = getScaleType(values);
        return getDomain(values, this.xScaleType, this.autoScale, this.xScaleMin, this.xScaleMax);
    }
    getYDomain() {
        const values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.y)) {
                    values.push(d.y);
                }
            }
        }
        this.yScaleType = getScaleType(values);
        return getDomain(values, this.yScaleType, this.autoScale, this.yScaleMin, this.yScaleMax);
    }
    getRDomain() {
        let min = Infinity;
        let max = -Infinity;
        for (const results of this.results) {
            for (const d of results.series) {
                const value = Number(d.r) || 1;
                min = Math.min(min, value);
                max = Math.max(max, value);
            }
        }
        return [min, max];
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
    trackBy(index, item) {
        return item.name;
    }
}
BubbleChartComponent.ɵfac = function BubbleChartComponent_Factory(t) { return ɵBubbleChartComponent_BaseFactory(t || BubbleChartComponent); };
BubbleChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BubbleChartComponent, selectors: [["ngx-charts-bubble-chart"]], contentQueries: function BubbleChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, hostBindings: function BubbleChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function BubbleChartComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { showGridLines: "showGridLines", legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", xAxis: "xAxis", yAxis: "yAxis", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", maxRadius: "maxRadius", minRadius: "minRadius", schemeType: "schemeType", tooltipDisabled: "tooltipDisabled", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", autoScale: "autoScale", xScaleMin: "xScaleMin", xScaleMax: "xScaleMax", yScaleMin: "yScaleMin", yScaleMax: "yScaleMax" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 20, consts: [[3, "view", "showLegend", "activeEntries", "legendOptions", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bubble-chart", "chart"], ["ngx-charts-x-axis", "", 3, "showGridLines", "dims", "xScale", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "showGridLines", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["x", "0", "y", "0", 1, "bubble-chart-area", 2, "fill", "rgb(255, 0, 0)", "opacity", "0", "cursor", "auto", 3, "mouseenter"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "showGridLines", "dims", "xScale", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "showGridLines", "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-bubble-series", "", 3, "xScale", "yScale", "rScale", "xScaleType", "yScaleType", "xAxisLabel", "yAxisLabel", "colors", "data", "activeEntries", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"]], template: function BubbleChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function BubbleChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "clipPath");
        ɵngcc0.ɵɵelement(3, "rect");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g", 1);
        ɵngcc0.ɵɵtemplate(5, BubbleChartComponent__svg_g_5_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(6, BubbleChartComponent__svg_g_6_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementStart(7, "rect", 4);
        ɵngcc0.ɵɵlistener("mouseenter", function BubbleChartComponent_Template__svg_rect_mouseenter_7_listener() { return ctx.deactivateAll(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "g");
        ɵngcc0.ɵɵtemplate(9, BubbleChartComponent__svg_g_9_Template, 2, 13, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("activeEntries", ctx.activeEntries)("legendOptions", ctx.legendOptions)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("id", ctx.clipPathId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width)("height", ctx.dims.height);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("clip-path", ctx.clipPath);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, BubbleSeriesComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({
                        opacity: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
BubbleChartComponent.propDecorators = {
    showGridLines: [{ type: Input }],
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    maxRadius: [{ type: Input }],
    minRadius: [{ type: Input }],
    autoScale: [{ type: Input }],
    schemeType: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    xScaleMin: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    yScaleMin: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
const ɵBubbleChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(BubbleChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BubbleChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-bubble-chart',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [activeEntries]="activeEntries"
      [legendOptions]="legendOptions"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="bubble-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [showGridLines]="showGridLines"
          [dims]="dims"
          [xScale]="xScale"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        />
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [showGridLines]="showGridLines"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        />
        <svg:rect
          class="bubble-chart-area"
          x="0"
          y="0"
          [attr.width]="dims.width"
          [attr.height]="dims.height"
          style="fill: rgb(255, 0, 0); opacity: 0; cursor: 'auto';"
          (mouseenter)="deactivateAll()"
        />
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of data; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-bubble-series
              [xScale]="xScale"
              [yScale]="yScale"
              [rScale]="rScale"
              [xScaleType]="xScaleType"
              [yScaleType]="yScaleType"
              [xAxisLabel]="xAxisLabel"
              [yAxisLabel]="yAxisLabel"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event, series)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({
                                opacity: 0
                            }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { showGridLines: [{
            type: Input
        }], legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], maxRadius: [{
            type: Input
        }], minRadius: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class BubbleSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.circles = this.getCircles();
    }
    getCircles() {
        const seriesName = this.data.name;
        return this.data.series
            .map((d, i) => {
            if (typeof d.y !== 'undefined' && typeof d.x !== 'undefined') {
                const y = d.y;
                const x = d.x;
                const r = d.r;
                const radius = this.rScale(r || 1);
                const tooltipLabel = formatLabel(d.name);
                const cx = this.xScaleType === 'linear' ? this.xScale(Number(x)) : this.xScale(x);
                const cy = this.yScaleType === 'linear' ? this.yScale(Number(y)) : this.yScale(y);
                const color = this.colors.scaleType === 'linear' ? this.colors.getColor(r) : this.colors.getColor(seriesName);
                const isActive = !this.activeEntries.length ? true : this.isActive({ name: seriesName });
                const opacity = isActive ? 1 : 0.3;
                const data = Object.assign({}, d, {
                    series: seriesName,
                    name: d.name,
                    value: d.y,
                    x: d.x,
                    radius: d.r
                });
                return {
                    data,
                    x,
                    y,
                    r,
                    classNames: [`circle-data-${i}`],
                    value: y,
                    label: x,
                    cx,
                    cy,
                    radius,
                    tooltipLabel,
                    color,
                    opacity,
                    seriesName,
                    isActive,
                    transform: `translate(${cx},${cy})`
                };
            }
        })
            .filter(circle => circle !== undefined);
    }
    getTooltipText(circle) {
        const hasRadius = typeof circle.r !== 'undefined';
        const hasTooltipLabel = circle.tooltipLabel && circle.tooltipLabel.length;
        const hasSeriesName = circle.seriesName && circle.seriesName.length;
        const radiusValue = hasRadius ? formatLabel(circle.r) : '';
        const xAxisLabel = this.xAxisLabel && this.xAxisLabel !== '' ? `${this.xAxisLabel}:` : '';
        const yAxisLabel = this.yAxisLabel && this.yAxisLabel !== '' ? `${this.yAxisLabel}:` : '';
        const x = formatLabel(circle.x);
        const y = formatLabel(circle.y);
        const name = hasSeriesName && hasTooltipLabel
            ? `${circle.seriesName} • ${circle.tooltipLabel}`
            : circle.seriesName + circle.tooltipLabel;
        const tooltipTitle = hasSeriesName || hasTooltipLabel ? `<span class="tooltip-label">${escapeLabel(name)}</span>` : '';
        return `
      ${tooltipTitle}
      <span class="tooltip-label">
        <label>${escapeLabel(xAxisLabel)}</label> ${escapeLabel(x)}<br />
        <label>${escapeLabel(yAxisLabel)}</label> ${escapeLabel(y)}
      </span>
      <span class="tooltip-val">
        ${escapeLabel(radiusValue)}
      </span>
    `;
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isVisible(circle) {
        if (this.activeEntries.length > 0) {
            return this.isActive({ name: circle.seriesName });
        }
        return circle.opacity !== 0;
    }
    activateCircle(circle) {
        circle.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle(circle) {
        circle.barVisible = false;
        this.deactivate.emit({ name: this.data.name });
    }
    trackBy(index, circle) {
        return `${circle.data.series} ${circle.data.name}`;
    }
}
BubbleSeriesComponent.ɵfac = function BubbleSeriesComponent_Factory(t) { return new (t || BubbleSeriesComponent)(); };
BubbleSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BubbleSeriesComponent, selectors: [["g", "ngx-charts-bubble-series", ""]], inputs: { tooltipDisabled: "tooltipDisabled", data: "data", xScale: "xScale", yScale: "yScale", rScale: "rScale", xScaleType: "xScaleType", yScaleType: "yScaleType", colors: "colors", visibleValue: "visibleValue", activeEntries: "activeEntries", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c29, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function BubbleSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, BubbleSeriesComponent__svg_g_0_Template, 3, 19, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.circles)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, CircleComponent, TooltipDirective], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    animate(250, style({ opacity: 1, transform: 'scale(1)' }))
                ])
            ])
        ] }, changeDetection: 0 });
BubbleSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    rScale: [{ type: Input }],
    xScaleType: [{ type: Input }],
    yScaleType: [{ type: Input }],
    colors: [{ type: Input }],
    visibleValue: [{ type: Input }],
    activeEntries: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BubbleSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-bubble-series]',
                template: `
    <svg:g *ngFor="let circle of circles; trackBy: trackBy">
      <svg:g [attr.transform]="circle.transform">
        <svg:g
          ngx-charts-circle
          [@animationState]="'active'"
          class="circle"
          [cx]="0"
          [cy]="0"
          [r]="circle.radius"
          [fill]="circle.color"
          [style.opacity]="circle.opacity"
          [class.active]="circle.isActive"
          [pointerEvents]="'all'"
          [data]="circle.value"
          [classNames]="circle.classNames"
          (select)="onClick(circle.data)"
          (activate)="activateCircle(circle)"
          (deactivate)="deactivateCircle(circle)"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipPlacement]="'top'"
          [tooltipType]="'tooltip'"
          [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="circle.data"
        />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0,
                                transform: 'scale(0)'
                            }),
                            animate(250, style({ opacity: 1, transform: 'scale(1)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { tooltipDisabled: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], rScale: [{
            type: Input
        }], xScaleType: [{
            type: Input
        }], yScaleType: [{
            type: Input
        }], colors: [{
            type: Input
        }], visibleValue: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class BubbleChartModule {
}
BubbleChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BubbleChartModule });
BubbleChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BubbleChartModule_Factory(t) { return new (t || BubbleChartModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BubbleChartModule, { declarations: [BubbleChartComponent, BubbleSeriesComponent], imports: [ChartCommonModule], exports: [BubbleChartComponent, BubbleSeriesComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BubbleChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [BubbleChartComponent, BubbleSeriesComponent],
                exports: [BubbleChartComponent, BubbleSeriesComponent]
            }]
    }], null, null); })();

class HeatMapCellComponent {
    constructor(element) {
        this.gradient = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.transform = `translate(${this.x} , ${this.y})`;
        this.startOpacity = 0.3;
        this.gradientId = 'grad' + id().toString();
        this.gradientUrl = `url(#${this.gradientId})`;
        this.gradientStops = this.getGradientStops();
        if (this.animations) {
            this.loadAnimation();
        }
    }
    getGradientStops() {
        return [
            {
                offset: 0,
                color: this.fill,
                opacity: this.startOpacity
            },
            {
                offset: 100,
                color: this.fill,
                opacity: 1
            }
        ];
    }
    loadAnimation() {
        const node = select(this.element).select('.cell');
        node.attr('opacity', 0);
        this.animateToCurrentForm();
    }
    animateToCurrentForm() {
        const node = select(this.element).select('.cell');
        node.transition().duration(750).attr('opacity', 1);
    }
    onClick() {
        this.select.emit(this.data);
    }
    onMouseEnter() {
        this.activate.emit(this.data);
    }
    onMouseLeave() {
        this.deactivate.emit(this.data);
    }
}
HeatMapCellComponent.ɵfac = function HeatMapCellComponent_Factory(t) { return new (t || HeatMapCellComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
HeatMapCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeatMapCellComponent, selectors: [["g", "ngx-charts-heat-map-cell", ""]], hostBindings: function HeatMapCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function HeatMapCellComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HeatMapCellComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { gradient: "gradient", animations: "animations", fill: "fill", x: "x", y: "y", width: "width", height: "height", data: "data", label: "label" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c30, decls: 3, vars: 5, consts: [[1, "cell"], [4, "ngIf"], ["rx", "3", 1, "cell", 2, "cursor", "pointer", 3, "click"], ["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops"]], template: function HeatMapCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵtemplate(1, HeatMapCellComponent__svg_defs_1_Template, 2, 2, "defs", 1);
        ɵngcc0.ɵɵelementStart(2, "rect", 2);
        ɵngcc0.ɵɵlistener("click", function HeatMapCellComponent_Template__svg_rect_click_2_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.gradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("fill", ctx.gradient ? ctx.gradientUrl : ctx.fill)("width", ctx.width)("height", ctx.height);
    } }, directives: [ɵngcc1.NgIf, SvgLinearGradientComponent], encapsulation: 2, changeDetection: 0 });
HeatMapCellComponent.ctorParameters = () => [
    { type: ElementRef }
];
HeatMapCellComponent.propDecorators = {
    fill: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    data: [{ type: Input }],
    label: [{ type: Input }],
    gradient: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeatMapCellComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-heat-map-cell]',
                template: `
    <svg:g [attr.transform]="transform" class="cell">
      <defs *ngIf="gradient">
        <svg:g ngx-charts-svg-linear-gradient orientation="vertical" [name]="gradientId" [stops]="gradientStops" />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        rx="3"
        [attr.width]="width"
        [attr.height]="height"
        class="cell"
        style="cursor: pointer"
        (click)="onClick()"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { gradient: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], fill: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], data: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

class HeatCellSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    ngOnInit() {
        if (!this.tooltipText) {
            this.tooltipText = this.getTooltipText;
        }
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.cells = this.getCells();
    }
    getCells() {
        const cells = [];
        this.data.map(row => {
            row.series.map(cell => {
                const value = cell.value;
                cell.series = row.name;
                cells.push({
                    row,
                    cell,
                    x: this.xScale(row.name),
                    y: this.yScale(cell.name),
                    width: this.xScale.bandwidth(),
                    height: this.yScale.bandwidth(),
                    fill: this.colors.getColor(value),
                    data: value,
                    label: formatLabel(cell.name),
                    series: row.name
                });
            });
        });
        return cells;
    }
    getTooltipText({ label, data, series }) {
        return `
      <span class="tooltip-label">${escapeLabel(series)} • ${escapeLabel(label)}</span>
      <span class="tooltip-val">${data.toLocaleString()}</span>
    `;
    }
    trackBy(index, item) {
        return item.tooltipText;
    }
    onClick(data) {
        this.select.emit(data);
    }
}
HeatCellSeriesComponent.ɵfac = function HeatCellSeriesComponent_Factory(t) { return new (t || HeatCellSeriesComponent)(); };
HeatCellSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeatCellSeriesComponent, selectors: [["g", "ngx-charts-heat-map-cell-series", ""]], inputs: { tooltipDisabled: "tooltipDisabled", animations: "animations", tooltipText: "tooltipText", data: "data", colors: "colors", xScale: "xScale", yScale: "yScale", gradient: "gradient", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c31, decls: 1, vars: 2, consts: [["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function HeatCellSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, HeatCellSeriesComponent__svg_g_0_Template, 1, 18, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, HeatMapCellComponent, TooltipDirective], encapsulation: 2, changeDetection: 0 });
HeatCellSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    colors: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    gradient: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipText: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeatCellSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-heat-map-cell-series]',
                template: `
    <svg:g
      ngx-charts-heat-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [data]="c.data"
      (select)="onClick(c.cell)"
      (activate)="activate.emit(c.cell)"
      (deactivate)="deactivate.emit(c.cell)"
      [gradient]="gradient"
      [animations]="animations"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="{ series: c.series, name: c.label, value: c.data }"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipText: [{
            type: Input
        }], data: [{
            type: Input
        }], colors: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], gradient: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class HeatMapComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.innerPadding = 8;
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.tooltipDisabled = false;
        this.activeEntries = [];
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.scaleType = 'linear';
    }
    update() {
        super.update();
        this.formatDates();
        this.xDomain = this.getXDomain();
        this.yDomain = this.getYDomain();
        this.valueDomain = this.getValueDomain();
        this.scaleType = getScaleType(this.valueDomain, false);
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.scaleType,
            legendPosition: this.legendPosition
        });
        if (this.scaleType === 'linear') {
            let min = this.min;
            let max = this.max;
            if (!this.min) {
                min = Math.min(0, ...this.valueDomain);
            }
            if (!this.max) {
                max = Math.max(...this.valueDomain);
            }
            this.valueDomain = [min, max];
        }
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.rects = this.getRects();
    }
    getXDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.name)) {
                domain.push(group.name);
            }
        }
        return domain;
    }
    getYDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.name)) {
                    domain.push(d.name);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        return domain;
    }
    /**
     * Converts the input to gap paddingInner in fraction
     * Supports the following inputs:
     *    Numbers: 8
     *    Strings: "8", "8px", "8%"
     *    Arrays: [8,2], "8,2", "[8,2]"
     *    Mixed: [8,"2%"], ["8px","2%"], "8,2%", "[8,2%]"
     *
     * @memberOf HeatMapComponent
     */
    getDimension(value, index = 0, N, L) {
        if (typeof value === 'string') {
            value = value
                .replace('[', '')
                .replace(']', '')
                .replace('px', '')
                // tslint:disable-next-line: quotemark
                .replace("'", '');
            if (value.includes(',')) {
                value = value.split(',');
            }
        }
        if (Array.isArray(value) && typeof index === 'number') {
            return this.getDimension(value[index], null, N, L);
        }
        if (typeof value === 'string' && value.includes('%')) {
            return +value.replace('%', '') / 100;
        }
        return N / (L / +value + 1);
    }
    getXScale() {
        const f = this.getDimension(this.innerPadding, 0, this.xDomain.length, this.dims.width);
        return scaleBand().rangeRound([0, this.dims.width]).domain(this.xDomain).paddingInner(f);
    }
    getYScale() {
        const f = this.getDimension(this.innerPadding, 1, this.yDomain.length, this.dims.height);
        return scaleBand().rangeRound([this.dims.height, 0]).domain(this.yDomain).paddingInner(f);
    }
    getRects() {
        const rects = [];
        this.xDomain.map(xVal => {
            this.yDomain.map(yVal => {
                rects.push({
                    x: this.xScale(xVal),
                    y: this.yScale(yVal),
                    rx: 3,
                    width: this.xScale.bandwidth(),
                    height: this.yScale.bandwidth(),
                    fill: 'rgba(200,200,200,0.03)'
                });
            });
        });
        return rects;
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, this.scaleType, this.valueDomain);
    }
    getLegendOptions() {
        return {
            scaleType: this.scaleType,
            domain: this.valueDomain,
            colors: this.scaleType === 'ordinal' ? this.colors : this.colors.scale,
            title: this.scaleType === 'ordinal' ? this.legendTitle : undefined,
            position: this.legendPosition
        };
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
HeatMapComponent.ɵfac = function HeatMapComponent_Factory(t) { return ɵHeatMapComponent_BaseFactory(t || HeatMapComponent); };
HeatMapComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: HeatMapComponent, selectors: [["ngx-charts-heat-map"]], contentQueries: function HeatMapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legendTitle: "legendTitle", legendPosition: "legendPosition", innerPadding: "innerPadding", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", tooltipDisabled: "tooltipDisabled", activeEntries: "activeEntries", legend: "legend", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", gradient: "gradient", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", tooltipText: "tooltipText", min: "min", max: "max" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 20, consts: [[3, "view", "showLegend", "animations", "legendOptions", "legendLabelClick"], [1, "heat-map", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngx-charts-heat-map-cell-series", "", 3, "xScale", "yScale", "colors", "data", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText", "select", "activate", "deactivate"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"]], template: function HeatMapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function HeatMapComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, HeatMapComponent__svg_g_2_Template, 1, 9, "g", 2);
        ɵngcc0.ɵɵtemplate(3, HeatMapComponent__svg_g_3_Template, 1, 8, "g", 3);
        ɵngcc0.ɵɵtemplate(4, HeatMapComponent__svg_rect_4_Template, 1, 6, "rect", 4);
        ɵngcc0.ɵɵelementStart(5, "g", 5);
        ɵngcc0.ɵɵlistener("select", function HeatMapComponent_Template__svg_g_select_5_listener($event) { return ctx.onClick($event); })("activate", function HeatMapComponent_Template__svg_g_activate_5_listener($event) { return ctx.onActivate($event, undefined); })("deactivate", function HeatMapComponent_Template__svg_g_deactivate_5_listener($event) { return ctx.onDeactivate($event, undefined); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("animations", ctx.animations)("legendOptions", ctx.legendOptions);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.rects);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("data", ctx.results)("gradient", ctx.gradient)("animations", ctx.animations)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText);
    } }, directives: [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, HeatCellSeriesComponent, XAxisComponent, YAxisComponent], styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, changeDetection: 0 });
HeatMapComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    gradient: [{ type: Input }],
    innerPadding: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipText: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    activeEntries: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵHeatMapComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(HeatMapComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeatMapComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-heat-map',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [animations]="animations"
      [legendOptions]="legendOptions"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="heat-map chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:rect
          *ngFor="let rect of rects"
          [attr.x]="rect.x"
          [attr.y]="rect.y"
          [attr.rx]="rect.rx"
          [attr.width]="rect.width"
          [attr.height]="rect.height"
          [attr.fill]="rect.fill"
        />
        <svg:g
          ngx-charts-heat-map-cell-series
          [xScale]="xScale"
          [yScale]="yScale"
          [colors]="colors"
          [data]="results"
          [gradient]="gradient"
          [animations]="animations"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipText]="tooltipText"
          (select)="onClick($event)"
          (activate)="onActivate($event, undefined)"
          (deactivate)="onDeactivate($event, undefined)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], innerPadding: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], legend: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], gradient: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], tooltipText: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class HeatMapModule {
}
HeatMapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: HeatMapModule });
HeatMapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function HeatMapModule_Factory(t) { return new (t || HeatMapModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(HeatMapModule, { declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent], imports: [ChartCommonModule], exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HeatMapModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent],
                exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent]
            }]
    }], null, null); })();

class LineComponent {
    constructor(element) {
        this.element = element;
        this.fill = 'none';
        this.animations = true;
        this.select = new EventEmitter();
        this.initialized = false;
    }
    ngOnChanges(changes) {
        if (!this.initialized) {
            this.initialized = true;
            this.initialPath = this.path;
        }
        else {
            this.updatePathEl();
        }
    }
    updatePathEl() {
        const node = select(this.element.nativeElement).select('.line');
        if (this.animations) {
            node.transition().duration(750).attr('d', this.path);
        }
        else {
            node.attr('d', this.path);
        }
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
LineComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LineComponent, selectors: [["g", "ngx-charts-line", ""]], inputs: { fill: "fill", animations: "animations", path: "path", stroke: "stroke", data: "data" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c33, decls: 1, vars: 4, consts: [["stroke-width", "1.5px", 1, "line"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(0, "path", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@animationState", "active");
        ɵngcc0.ɵɵattribute("d", ctx.initialPath)("fill", ctx.fill)("stroke", ctx.stroke);
    } }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        strokeDasharray: 2000,
                        strokeDashoffset: 2000
                    }),
                    animate(1000, style({
                        strokeDashoffset: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
LineComponent.ctorParameters = () => [
    { type: ElementRef }
];
LineComponent.propDecorators = {
    path: [{ type: Input }],
    stroke: [{ type: Input }],
    data: [{ type: Input }],
    fill: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LineComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-line]',
                template: `
    <svg:path
      [@animationState]="'active'"
      class="line"
      [attr.d]="initialPath"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      stroke-width="1.5px"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                strokeDasharray: 2000,
                                strokeDashoffset: 2000
                            }),
                            animate(1000, style({
                                strokeDashoffset: 0
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { fill: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], path: [{
            type: Input
        }], stroke: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();

class LineChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.showRefLines = false;
        this.showRefLabels = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
        }
        let min;
        let max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin ? this.xScaleMin : Math.min(...values);
            max = this.xScaleMax ? this.xScaleMax : Math.max(...values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        const domain = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        const values = [...domain];
        if (!this.autoScale) {
            values.push(0);
        }
        const min = this.yScaleMin ? this.yScaleMin : Math.min(...values);
        const max = this.yScaleMax ? this.yScaleMax : Math.max(...values);
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === 'time') {
            scale = scaleTime().range([0, width]).domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = scaleLinear().range([0, width]).domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = scalePoint().range([0, width]).padding(0.1).domain(domain);
        }
        return scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data) {
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.name;
    }
    setColors() {
        let domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        this.deactivateAll();
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return ɵLineChartComponent_BaseFactory(t || LineChartComponent); };
LineChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["ngx-charts-line-chart"]], contentQueries: function LineChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c22, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    } }, hostBindings: function LineChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function LineChartComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { legendTitle: "legendTitle", legendPosition: "legendPosition", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", showRefLines: "showRefLines", showRefLabels: "showRefLabels", legend: "legend", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", autoScale: "autoScale", timeline: "timeline", gradient: "gradient", schemeType: "schemeType", rangeFillOpacity: "rangeFillOpacity", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", referenceLines: "referenceLines", xScaleMin: "xScaleMin", xScaleMax: "xScaleMax", yScaleMin: "yScaleMin", yScaleMax: "yScaleMax" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 20, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "line-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "scaleType", "legend", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "dimensionsChanged"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "hasRange", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate", "hover"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "visibleValue", "activeEntries", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "scaleType", "legend", "onDomainChange"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "curve", "hasRange", "animations"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function LineChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "clipPath");
        ɵngcc0.ɵɵelement(3, "rect");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "g", 1);
        ɵngcc0.ɵɵtemplate(5, LineChartComponent__svg_g_5_Template, 1, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(6, LineChartComponent__svg_g_6_Template, 1, 12, "g", 3);
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵtemplate(8, LineChartComponent__svg_g_8_Template, 2, 11, "g", 4);
        ɵngcc0.ɵɵtemplate(9, LineChartComponent__svg_g_9_Template, 3, 9, "g", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, LineChartComponent__svg_g_10_Template, 2, 13, "g", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("id", ctx.clipPathId);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("clip-path", ctx.clipPath);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.tooltipDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, XAxisComponent, YAxisComponent, LineSeriesComponent, TooltipArea, CircleSeriesComponent, Timeline]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({
                        opacity: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
LineChartComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    autoScale: [{ type: Input }],
    timeline: [{ type: Input }],
    gradient: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    rangeFillOpacity: [{ type: Input }],
    trimXAxisTicks: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    rotateXAxisTicks: [{ type: Input }],
    maxXAxisTickLength: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    xAxisTicks: [{ type: Input }],
    yAxisTicks: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    showRefLines: [{ type: Input }],
    referenceLines: [{ type: Input }],
    showRefLabels: [{ type: Input }],
    xScaleMin: [{ type: Input }],
    xScaleMax: [{ type: Input }],
    yScaleMin: [{ type: Input }],
    yScaleMax: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    seriesTooltipTemplate: [{ type: ContentChild, args: ['seriesTooltipTemplate',] }],
    hideCircles: [{ type: HostListener, args: ['mouseleave',] }]
};
const ɵLineChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(LineChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-line-chart',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="line-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [referenceLines]="referenceLines"
          [showRefLines]="showRefLines"
          [showRefLabels]="showRefLabels"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-line-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [hasRange]="hasRange"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [activeEntries]="activeEntries"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [scaleType]="scaleType"
        [legend]="legend"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-line-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [curve]="curve"
            [hasRange]="hasRange"
            [animations]="animations"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({
                                opacity: 0
                            }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
            }]
    }], null, { legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showRefLines: [{
            type: Input
        }], showRefLabels: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }], legend: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], timeline: [{
            type: Input
        }], gradient: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], rangeFillOpacity: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], referenceLines: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], seriesTooltipTemplate: [{
            type: ContentChild,
            args: ['seriesTooltipTemplate']
        }] }); })();

class LineSeriesComponent {
    constructor() {
        this.animations = true;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateGradients();
        const data = this.sortData(this.data.series);
        const lineGen = this.getLineGenerator();
        this.path = lineGen(data) || '';
        const areaGen = this.getAreaGenerator();
        this.areaPath = areaGen(data) || '';
        if (this.hasRange) {
            const range = this.getRangeGenerator();
            this.outerPath = range(data) || '';
        }
        if (this.hasGradient) {
            this.stroke = this.gradientUrl;
            const values = this.data.series.map(d => d.value);
            const max = Math.max(...values);
            const min = Math.min(...values);
            if (max === min) {
                this.stroke = this.colors.getColor(max);
            }
        }
        else {
            this.stroke = this.colors.getColor(this.data.name);
        }
    }
    getLineGenerator() {
        return line()
            .x(d => {
            const label = d.name;
            let value;
            if (this.scaleType === 'time') {
                value = this.xScale(label);
            }
            else if (this.scaleType === 'linear') {
                value = this.xScale(Number(label));
            }
            else {
                value = this.xScale(label);
            }
            return value;
        })
            .y(d => this.yScale(d.value))
            .curve(this.curve);
    }
    getRangeGenerator() {
        return area()
            .x(d => {
            const label = d.name;
            let value;
            if (this.scaleType === 'time') {
                value = this.xScale(label);
            }
            else if (this.scaleType === 'linear') {
                value = this.xScale(Number(label));
            }
            else {
                value = this.xScale(label);
            }
            return value;
        })
            .y0(d => this.yScale(typeof d.min === 'number' ? d.min : d.value))
            .y1(d => this.yScale(typeof d.max === 'number' ? d.max : d.value))
            .curve(this.curve);
    }
    getAreaGenerator() {
        const xProperty = d => {
            const label = d.name;
            return this.xScale(label);
        };
        return area()
            .x(xProperty)
            .y0(() => this.yScale.range()[0])
            .y1(d => this.yScale(d.value))
            .curve(this.curve);
    }
    sortData(data) {
        if (this.scaleType === 'linear') {
            data = sortLinear(data, 'name');
        }
        else if (this.scaleType === 'time') {
            data = sortByTime(data, 'name');
        }
        else {
            data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
        }
        return data;
    }
    updateGradients() {
        if (this.colors.scaleType === 'linear') {
            this.hasGradient = true;
            this.gradientId = 'grad' + id().toString();
            this.gradientUrl = `url(#${this.gradientId})`;
            const values = this.data.series.map(d => d.value);
            const max = Math.max(...values);
            const min = Math.min(...values);
            this.gradientStops = this.colors.getLinearGradientStops(max, min);
            this.areaGradientStops = this.colors.getLinearGradientStops(max);
        }
        else {
            this.hasGradient = false;
            this.gradientStops = undefined;
            this.areaGradientStops = undefined;
        }
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isInactive(entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item === undefined;
    }
}
LineSeriesComponent.ɵfac = function LineSeriesComponent_Factory(t) { return new (t || LineSeriesComponent)(); };
LineSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LineSeriesComponent, selectors: [["g", "ngx-charts-line-series", ""]], inputs: { animations: "animations", data: "data", xScale: "xScale", yScale: "yScale", colors: "colors", scaleType: "scaleType", curve: "curve", activeEntries: "activeEntries", rangeFillOpacity: "rangeFillOpacity", hasRange: "hasRange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c34, decls: 6, vars: 22, consts: [["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops", 4, "ngIf"], ["ngx-charts-area", "", 1, "line-highlight", 3, "data", "path", "fill", "opacity", "startOpacity", "gradient", "stops", "animations"], ["ngx-charts-line", "", 1, "line-series", 3, "data", "path", "stroke", "animations"], ["ngx-charts-area", "", "class", "line-series-range", 3, "data", "path", "fill", "active", "inactive", "opacity", "animations", 4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops"], ["ngx-charts-area", "", 1, "line-series-range", 3, "data", "path", "fill", "opacity", "animations"]], template: function LineSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵtemplate(2, LineSeriesComponent__svg_g_2_Template, 1, 2, "g", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "g", 1);
        ɵngcc0.ɵɵelement(4, "g", 2);
        ɵngcc0.ɵɵtemplate(5, LineSeriesComponent__svg_g_5_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasGradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
        ɵngcc0.ɵɵproperty("data", ctx.data)("path", ctx.areaPath)("fill", ctx.hasGradient ? ctx.gradientUrl : ctx.colors.getColor(ctx.data.name))("opacity", 0.25)("startOpacity", 0)("gradient", true)("stops", ctx.areaGradientStops)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
        ɵngcc0.ɵɵproperty("data", ctx.data)("path", ctx.path)("stroke", ctx.stroke)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasRange);
    } }, directives: [ɵngcc1.NgIf, AreaComponent, LineComponent, SvgLinearGradientComponent], encapsulation: 2, changeDetection: 0 });
LineSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    rangeFillOpacity: [{ type: Input }],
    hasRange: [{ type: Input }],
    animations: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LineSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-line-series]',
                template: `
    <svg:g>
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          *ngIf="hasGradient"
          orientation="vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:g
        ngx-charts-area
        class="line-highlight"
        [data]="data"
        [path]="areaPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [opacity]="0.25"
        [startOpacity]="0"
        [gradient]="true"
        [stops]="areaGradientStops"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [animations]="animations"
      />
      <svg:g
        ngx-charts-line
        class="line-series"
        [data]="data"
        [path]="path"
        [stroke]="stroke"
        [animations]="animations"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
      />
      <svg:g
        ngx-charts-area
        *ngIf="hasRange"
        class="line-series-range"
        [data]="data"
        [path]="outerPath"
        [fill]="hasGradient ? gradientUrl : colors.getColor(data.name)"
        [class.active]="isActive(data)"
        [class.inactive]="isInactive(data)"
        [opacity]="rangeFillOpacity"
        [animations]="animations"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { animations: [{
            type: Input
        }], data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], rangeFillOpacity: [{
            type: Input
        }], hasRange: [{
            type: Input
        }] }); })();

class LineChartModule {
}
LineChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LineChartModule });
LineChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LineChartModule_Factory(t) { return new (t || LineChartModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LineChartModule, { declarations: [LineComponent, LineChartComponent, LineSeriesComponent], imports: [ChartCommonModule], exports: [LineComponent, LineChartComponent, LineSeriesComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LineChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [LineComponent, LineChartComponent, LineSeriesComponent],
                exports: [LineComponent, LineChartComponent, LineSeriesComponent]
            }]
    }], null, null); })();

function isDate(value) {
    return toString.call(value) === '[object Date]';
}
function isNumber(value) {
    return typeof value === 'number';
}

const twoPI = 2 * Math.PI;
class PolarChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.showGridLines = true;
        this.curve = curveCardinalClosed;
        this.activeEntries = [];
        this.rangeFillOpacity = 0.15;
        this.trimYAxisTicks = true;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.showSeriesOnHover = true;
        this.gradient = false;
        this.yAxisMinScale = 0;
        this.labelTrim = true;
        this.labelTrimSize = 10;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
    }
    update() {
        super.update();
        this.setDims();
        this.setScales();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.setTicks();
    }
    setDims() {
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        const halfWidth = Math.floor(this.dims.width / 2);
        const halfHeight = Math.floor(this.dims.height / 2);
        const outerRadius = (this.outerRadius = Math.min(halfHeight / 1.5, halfWidth / 1.5));
        const yOffset = Math.max(0, halfHeight - outerRadius);
        this.yAxisDims = Object.assign(Object.assign({}, this.dims), { width: halfWidth });
        this.transform = `translate(${this.dims.xOffset}, ${this.margin[0]})`;
        this.transformYAxis = `translate(0, ${yOffset})`;
        this.labelOffset = this.dims.height + 40;
        this.transformPlot = `translate(${halfWidth}, ${halfHeight})`;
    }
    setScales() {
        const xValues = this.getXValues();
        this.scaleType = getScaleType(xValues);
        this.xDomain = this.filteredDomain || this.getXDomain(xValues);
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, twoPI);
        this.yScale = this.getYScale(this.yDomain, this.outerRadius);
        this.yAxisScale = this.getYScale(this.yDomain.reverse(), this.outerRadius);
    }
    setTicks() {
        let tickFormat;
        if (this.xAxisTickFormatting) {
            tickFormat = this.xAxisTickFormatting;
        }
        else if (this.xScale.tickFormat) {
            tickFormat = this.xScale.tickFormat.apply(this.xScale, [5]);
        }
        else {
            tickFormat = d => {
                if (isDate(d)) {
                    return d.toLocaleDateString();
                }
                return d.toLocaleString();
            };
        }
        const outerRadius = this.outerRadius;
        const s = 1.1;
        this.thetaTicks = this.xDomain.map(d => {
            const startAngle = this.xScale(d);
            const dd = s * outerRadius * (startAngle > Math.PI ? -1 : 1);
            const label = tickFormat(d);
            const startPos = [outerRadius * Math.sin(startAngle), -outerRadius * Math.cos(startAngle)];
            const pos = [dd, s * startPos[1]];
            return {
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle: startAngle,
                value: outerRadius,
                label,
                startPos,
                pos
            };
        });
        const minDistance = 10;
        /* from pie chart, abstract out -*/
        for (let i = 0; i < this.thetaTicks.length - 1; i++) {
            const a = this.thetaTicks[i];
            for (let j = i + 1; j < this.thetaTicks.length; j++) {
                const b = this.thetaTicks[j];
                // if they're on the same side
                if (b.pos[0] * a.pos[0] > 0) {
                    // if they're overlapping
                    const o = minDistance - Math.abs(b.pos[1] - a.pos[1]);
                    if (o > 0) {
                        // push the second up or down
                        b.pos[1] += Math.sign(b.pos[0]) * o;
                    }
                }
            }
        }
        this.radiusTicks = this.yAxisScale.ticks(Math.floor(this.dims.height / 50)).map(d => this.yScale(d));
    }
    getXValues() {
        const values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        return values;
    }
    getXDomain(values = this.getXValues()) {
        if (this.scaleType === 'time') {
            const min = Math.min(...values);
            const max = Math.max(...values);
            return [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            return [min, max];
        }
        return values;
    }
    getYValues() {
        const domain = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        return domain;
    }
    getYDomain(domain = this.getYValues()) {
        let min = Math.min(...domain);
        const max = Math.max(this.yAxisMinScale, ...domain);
        min = Math.max(0, min);
        if (!this.autoScale) {
            min = Math.min(0, min);
        }
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        switch (this.scaleType) {
            case 'time':
                return scaleTime().range([0, width]).domain(domain);
            case 'linear':
                const scale = scaleLinear().range([0, width]).domain(domain);
                return this.roundDomains ? scale.nice() : scale;
            default:
                return scalePoint()
                    .range([0, width - twoPI / domain.length])
                    .padding(0)
                    .domain(domain);
        }
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([0, height]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    setColors() {
        const domain = this.schemeType === 'ordinal' ? this.seriesDomain : this.yDomain.reverse();
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        if (this.schemeType === 'ordinal') {
            return {
                scaleType: this.schemeType,
                colors: this.colors,
                domain: this.seriesDomain,
                title: this.legendTitle,
                position: this.legendPosition
            };
        }
        return {
            scaleType: this.schemeType,
            colors: this.colors.scale,
            domain: this.yDomain,
            title: undefined,
            position: this.legendPosition
        };
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = this.showSeriesOnHover ? [item, ...this.activeEntries] : this.activeEntries;
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
    trackBy(index, item) {
        return item.name;
    }
}
PolarChartComponent.ɵfac = function PolarChartComponent_Factory(t) { return ɵPolarChartComponent_BaseFactory(t || PolarChartComponent); };
PolarChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PolarChartComponent, selectors: [["ngx-charts-polar-chart"]], contentQueries: function PolarChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legendTitle: "legendTitle", legendPosition: "legendPosition", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", rangeFillOpacity: "rangeFillOpacity", trimYAxisTicks: "trimYAxisTicks", maxYAxisTickLength: "maxYAxisTickLength", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", showSeriesOnHover: "showSeriesOnHover", gradient: "gradient", yAxisMinScale: "yAxisMinScale", labelTrim: "labelTrim", labelTrimSize: "labelTrimSize", legend: "legend", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", autoScale: "autoScale", schemeType: "schemeType", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 18, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "polar-chart", "chart"], ["cx", "0", "cy", "0", 1, "polar-chart-background"], [4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "gridline-path radial-gridline-path", "cx", "0", "cy", "0", 4, "ngFor", "ngForOf"], ["cx", "0", "cy", "0", 1, "gridline-path", "radial-gridline-path"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize", 4, "ngFor", "ngForOf"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"], ["ngx-charts-polar-series", "", 3, "gradient", "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "animations", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"]], template: function PolarChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function PolarChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelement(3, "circle", 2);
        ɵngcc0.ɵɵtemplate(4, PolarChartComponent__svg_g_4_Template, 2, 1, "g", 3);
        ɵngcc0.ɵɵtemplate(5, PolarChartComponent__svg_g_5_Template, 2, 1, "g", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, PolarChartComponent__svg_g_6_Template, 1, 9, "g", 4);
        ɵngcc0.ɵɵtemplate(7, PolarChartComponent__svg_g_7_Template, 1, 5, "g", 5);
        ɵngcc0.ɵɵelementStart(8, "g");
        ɵngcc0.ɵɵtemplate(9, PolarChartComponent__svg_g_9_Template, 2, 13, "g", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(15, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transformPlot);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("r", ctx.outerRadius);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showGridLines);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.yAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.xAxis && ctx.showXAxisLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transformPlot);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, PieLabelComponent, YAxisComponent, AxisLabelComponent, PolarSeriesComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:fadeIn .75s ease-in;animation:fadeIn .75s ease-in}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:drawOut 3s linear;animation:drawOut 3s linear;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{fill:none;stroke-dasharray:10 10}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({
                        opacity: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
PolarChartComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    autoScale: [{ type: Input }],
    showGridLines: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    schemeType: [{ type: Input }],
    rangeFillOpacity: [{ type: Input }],
    trimYAxisTicks: [{ type: Input }],
    maxYAxisTickLength: [{ type: Input }],
    xAxisTickFormatting: [{ type: Input }],
    yAxisTickFormatting: [{ type: Input }],
    roundDomains: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    showSeriesOnHover: [{ type: Input }],
    gradient: [{ type: Input }],
    yAxisMinScale: [{ type: Input }],
    labelTrim: [{ type: Input }],
    labelTrimSize: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵPolarChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(PolarChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PolarChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-polar-chart',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g class="polar-chart chart" [attr.transform]="transform">
        <svg:g [attr.transform]="transformPlot">
          <svg:circle class="polar-chart-background" cx="0" cy="0" [attr.r]="this.outerRadius" />
          <svg:g *ngIf="showGridLines">
            <svg:circle
              *ngFor="let r of radiusTicks"
              class="gridline-path radial-gridline-path"
              cx="0"
              cy="0"
              [attr.r]="r"
            />
          </svg:g>
          <svg:g *ngIf="xAxis">
            <svg:g
              ngx-charts-pie-label
              *ngFor="let tick of thetaTicks"
              [data]="tick"
              [radius]="outerRadius"
              [label]="tick.label"
              [max]="outerRadius"
              [value]="showGridLines ? 1 : outerRadius"
              [explodeSlices]="true"
              [animations]="animations"
              [labelTrim]="labelTrim"
              [labelTrimSize]="labelTrimSize"
            ></svg:g>
          </svg:g>
        </svg:g>
        <svg:g
          ngx-charts-y-axis
          [attr.transform]="transformYAxis"
          *ngIf="yAxis"
          [yScale]="yAxisScale"
          [dims]="yAxisDims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-axis-label
          *ngIf="xAxis && showXAxisLabel"
          [label]="xAxisLabel"
          [offset]="labelOffset"
          [orient]="'bottom'"
          [height]="dims.height"
          [width]="dims.width"
        ></svg:g>
        <svg:g [attr.transform]="transformPlot">
          <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-polar-series
              [gradient]="gradient"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [animations]="animations"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({
                                opacity: 0
                            }))
                        ])
                    ])
                ],
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:fadeIn .75s ease-in;animation:fadeIn .75s ease-in}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:drawOut 3s linear;animation:drawOut 3s linear;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{fill:none;stroke-dasharray:10 10}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}"]
            }]
    }], null, { legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], rangeFillOpacity: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showSeriesOnHover: [{
            type: Input
        }], gradient: [{
            type: Input
        }], yAxisMinScale: [{
            type: Input
        }], labelTrim: [{
            type: Input
        }], labelTrimSize: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], legend: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class PolarSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.gradient = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.circleRadius = 3;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateGradients();
        const line = this.getLineGenerator();
        const data = this.sortData(this.data.series);
        const seriesName = this.data.name;
        const linearScaleType = this.colors.scaleType === 'linear';
        const min = this.yScale.domain()[0];
        this.seriesColor = this.colors.getColor(linearScaleType ? min : seriesName);
        this.path = line(data) || '';
        this.circles = data.map(d => {
            const a = this.getAngle(d);
            const r = this.getRadius(d);
            const value = d.value;
            const color = this.colors.getColor(linearScaleType ? Math.abs(value) : seriesName);
            const cData = Object.assign({}, d, {
                series: seriesName,
                value,
                name: d.name
            });
            return {
                data: cData,
                cx: r * Math.sin(a),
                cy: -r * Math.cos(a),
                value,
                color,
                label: d.name
            };
        });
        this.active = this.isActive(this.data);
        this.inactive = this.isInactive(this.data);
        this.tooltipText = this.tooltipText || (c => this.defaultTooltipText(c));
    }
    getAngle(d) {
        const label = d.name;
        if (this.scaleType === 'time') {
            return this.xScale(label);
        }
        else if (this.scaleType === 'linear') {
            return this.xScale(Number(label));
        }
        return this.xScale(label);
    }
    getRadius(d) {
        return this.yScale(d.value);
    }
    getLineGenerator() {
        return lineRadial()
            .angle(d => this.getAngle(d))
            .radius(d => this.getRadius(d))
            .curve(this.curve);
    }
    sortData(data) {
        if (this.scaleType === 'linear') {
            return sortLinear(data, 'name');
        }
        else if (this.scaleType === 'time') {
            return sortByTime(data, 'name');
        }
        return sortByDomain(data, 'name', 'asc', this.xScale.domain());
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isInactive(entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item === undefined;
    }
    defaultTooltipText({ label, value }) {
        return `
      <span class="tooltip-label">${escapeLabel(this.data.name)} • ${escapeLabel(label)}</span>
      <span class="tooltip-val">${value.toLocaleString()}</span>
    `;
    }
    updateGradients() {
        this.hasGradient = this.gradient || this.colors.scaleType === 'linear';
        if (!this.hasGradient) {
            return;
        }
        this.gradientId = 'grad' + id().toString();
        this.gradientUrl = `url(#${this.gradientId})`;
        if (this.colors.scaleType === 'linear') {
            const values = this.data.series.map(d => d.value);
            const max = Math.max(...values);
            const min = Math.min(...values);
            this.gradientStops = this.colors.getLinearGradientStops(max, min);
        }
        else {
            this.gradientStops = undefined;
        }
    }
}
PolarSeriesComponent.ɵfac = function PolarSeriesComponent_Factory(t) { return new (t || PolarSeriesComponent)(); };
PolarSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PolarSeriesComponent, selectors: [["g", "ngx-charts-polar-series", ""]], inputs: { tooltipDisabled: "tooltipDisabled", gradient: "gradient", animations: "animations", tooltipText: "tooltipText", name: "name", data: "data", xScale: "xScale", yScale: "yScale", colors: "colors", scaleType: "scaleType", curve: "curve", activeEntries: "activeEntries", rangeFillOpacity: "rangeFillOpacity", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c35, decls: 5, vars: 11, consts: [[1, "polar-charts-series"], ["ngx-charts-svg-radial-gradient", "", "orientation", "vertical", 3, "color", "name", "startOpacity", "endOpacity", "stops", 4, "ngIf"], ["ngx-charts-line", "", 1, "polar-series-path", 3, "path", "stroke", "fill", "animations"], ["ngx-charts-circle", "", "class", "circle", "ngx-tooltip", "", "tooltipType", "tooltip", 3, "cx", "cy", "r", "fill", "opacity", "tooltipDisabled", "tooltipPlacement", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngFor", "ngForOf"], ["ngx-charts-svg-radial-gradient", "", "orientation", "vertical", 3, "color", "name", "startOpacity", "endOpacity", "stops"], ["ngx-charts-circle", "", "ngx-tooltip", "", "tooltipType", "tooltip", 1, "circle", 3, "cx", "cy", "r", "fill", "tooltipDisabled", "tooltipPlacement", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function PolarSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵtemplate(2, PolarSeriesComponent__svg_g_2_Template, 1, 5, "g", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "g", 2);
        ɵngcc0.ɵɵtemplate(4, PolarSeriesComponent__svg_g_4_Template, 1, 11, "g", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasGradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("active", ctx.active)("inactive", ctx.inactive);
        ɵngcc0.ɵɵproperty("path", ctx.path)("stroke", ctx.hasGradient ? ctx.gradientUrl : ctx.seriesColor)("fill", ctx.hasGradient ? ctx.gradientUrl : ctx.seriesColor)("animations", ctx.animations);
        ɵngcc0.ɵɵattribute("fill-opacity", ctx.rangeFillOpacity);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.circles);
    } }, directives: [ɵngcc1.NgIf, LineComponent, ɵngcc1.NgForOf, SvgRadialGradientComponent, CircleComponent, TooltipDirective], encapsulation: 2, changeDetection: 0 });
PolarSeriesComponent.propDecorators = {
    name: [{ type: Input }],
    data: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    colors: [{ type: Input }],
    scaleType: [{ type: Input }],
    curve: [{ type: Input }],
    activeEntries: [{ type: Input }],
    rangeFillOpacity: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipText: [{ type: Input }],
    gradient: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PolarSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-polar-series]',
                template: `
    <svg:g class="polar-charts-series">
      <defs>
        <svg:g
          ngx-charts-svg-radial-gradient
          *ngIf="hasGradient"
          orientation="vertical"
          [color]="seriesColor"
          [name]="gradientId"
          [startOpacity]="0.25"
          [endOpacity]="1"
          [stops]="gradientStops"
        />
      </defs>
      <svg:g
        ngx-charts-line
        class="polar-series-path"
        [path]="path"
        [stroke]="hasGradient ? gradientUrl : seriesColor"
        [class.active]="active"
        [class.inactive]="inactive"
        [attr.fill-opacity]="rangeFillOpacity"
        [fill]="hasGradient ? gradientUrl : seriesColor"
        [animations]="animations"
      />
      <svg:g
        ngx-charts-circle
        *ngFor="let circle of circles"
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circleRadius"
        [fill]="circle.color"
        [style.opacity]="inactive ? 0.2 : 1"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'top'"
        tooltipType="tooltip"
        [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
        (select)="select.emit(circle.data)"
        (activate)="activate.emit({ name: circle.data.series })"
        (deactivate)="deactivate.emit({ name: circle.data.series })"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { tooltipDisabled: [{
            type: Input
        }], gradient: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipText: [{
            type: Input
        }], name: [{
            type: Input
        }], data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], rangeFillOpacity: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class AdvancedPieChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.activeEntries = [];
        this.tooltipDisabled = false;
        this.label = 'Total';
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [20, 20, 20, 20];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: (this.width * 4) / 12.0,
            height: this.height,
            margins: this.margin
        });
        this.formatDates();
        this.domain = this.getDomain();
        this.setColors();
        const xOffset = this.dims.width / 2;
        const yOffset = this.margin[0] + this.dims.height / 2;
        this.legendWidth = this.width - this.dims.width - this.margin[1];
        this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2.5;
        this.innerRadius = this.outerRadius * 0.75;
        this.transform = `translate(${xOffset} , ${yOffset})`;
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
AdvancedPieChartComponent.ɵfac = function AdvancedPieChartComponent_Factory(t) { return ɵAdvancedPieChartComponent_BaseFactory(t || AdvancedPieChartComponent); };
AdvancedPieChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AdvancedPieChartComponent, selectors: [["ngx-charts-advanced-pie-chart"]], contentQueries: function AdvancedPieChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { activeEntries: "activeEntries", tooltipDisabled: "tooltipDisabled", label: "label", gradient: "gradient", tooltipText: "tooltipText", valueFormatting: "valueFormatting", nameFormatting: "nameFormatting", percentageFormatting: "percentageFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 7, vars: 37, consts: [[1, "advanced-pie", "chart"], [3, "view", "showLegend", "animations"], [1, "pie", "chart"], ["ngx-charts-pie-series", "", 3, "colors", "series", "innerRadius", "activeEntries", "outerRadius", "gradient", "tooltipDisabled", "tooltipTemplate", "tooltipText", "animations", "select", "activate", "deactivate"], [1, "advanced-pie-legend-wrapper"], [3, "data", "colors", "width", "label", "animations", "valueFormatting", "labelFormatting", "percentageFormatting", "select", "activate", "deactivate"]], template: function AdvancedPieChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "ngx-charts-chart", 1);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(3, "g", 2);
        ɵngcc0.ɵɵelementStart(4, "g", 3);
        ɵngcc0.ɵɵlistener("select", function AdvancedPieChartComponent_Template__svg_g_select_4_listener($event) { return ctx.onClick($event); })("activate", function AdvancedPieChartComponent_Template__svg_g_activate_4_listener($event) { return ctx.onActivate($event); })("deactivate", function AdvancedPieChartComponent_Template__svg_g_deactivate_4_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "ngx-charts-advanced-legend", 5);
        ɵngcc0.ɵɵlistener("select", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_select_6_listener($event) { return ctx.onClick($event); })("activate", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_activate_6_listener($event) { return ctx.onActivate($event, true); })("deactivate", function AdvancedPieChartComponent_Template_ngx_charts_advanced_legend_deactivate_6_listener($event) { return ctx.onDeactivate($event, true); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.dims.width, "px")("height", ctx.dims.height, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(34, _c23, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("colors", ctx.colors)("series", ctx.results)("innerRadius", ctx.innerRadius)("activeEntries", ctx.activeEntries)("outerRadius", ctx.outerRadius)("gradient", ctx.gradient)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.width - ctx.dims.width, "px")("height", ctx.height, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("data", ctx.results)("colors", ctx.colors)("width", ctx.width - ctx.dims.width - ctx.margin[1])("label", ctx.label)("animations", ctx.animations)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.nameFormatting)("percentageFormatting", ctx.percentageFormatting);
    } }, directives: function () { return [ChartComponent, PieSeriesComponent, AdvancedLegendComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".advanced-pie{float:left}.advanced-pie,.advanced-pie-legend-wrapper{display:inline-block}"], encapsulation: 2, changeDetection: 0 });
AdvancedPieChartComponent.propDecorators = {
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipText: [{ type: Input }],
    label: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    valueFormatting: [{ type: Input }],
    nameFormatting: [{ type: Input }],
    percentageFormatting: [{ type: Input }]
};
const ɵAdvancedPieChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AdvancedPieChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AdvancedPieChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-advanced-pie-chart',
                template: `
    <div [style.width.px]="width" [style.height.px]="height">
      <div class="advanced-pie chart" [style.width.px]="dims.width" [style.height.px]="dims.height">
        <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
          <svg:g [attr.transform]="transform" class="pie chart">
            <svg:g
              ngx-charts-pie-series
              [colors]="colors"
              [series]="results"
              [innerRadius]="innerRadius"
              [activeEntries]="activeEntries"
              [outerRadius]="outerRadius"
              [gradient]="gradient"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipText]="tooltipText"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
              [animations]="animations"
            ></svg:g>
          </svg:g>
        </ngx-charts-chart>
      </div>
      <div class="advanced-pie-legend-wrapper" [style.width.px]="width - dims.width" [style.height.px]="height">
        <ngx-charts-advanced-legend
          [data]="results"
          [colors]="colors"
          [width]="width - dims.width - margin[1]"
          [label]="label"
          [animations]="animations"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="nameFormatting"
          [percentageFormatting]="percentageFormatting"
          (select)="onClick($event)"
          (activate)="onActivate($event, true)"
          (deactivate)="onDeactivate($event, true)"
        >
        </ngx-charts-advanced-legend>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".advanced-pie{float:left}.advanced-pie,.advanced-pie-legend-wrapper{display:inline-block}"]
            }]
    }], null, { activeEntries: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], label: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], gradient: [{
            type: Input
        }], tooltipText: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], valueFormatting: [{
            type: Input
        }], nameFormatting: [{
            type: Input
        }], percentageFormatting: [{
            type: Input
        }] }); })();

class PieLabelComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.animations = true;
        this.labelTrim = true;
        this.labelTrimSize = 10;
        this.trimLabel = trimLabel;
    }
    ngOnChanges(changes) {
        this.setTransforms();
        this.update();
    }
    setTransforms() {
        if (isPlatformServer(this.platformId)) {
            this.styleTransform = `translate3d(${this.textX}px,${this.textY}px, 0)`;
            this.attrTransform = `translate(${this.textX},${this.textY})`;
            this.textTransition = !this.animations ? null : 'transform 0.75s';
        }
        else {
            const isIE = /(edge|msie|trident)/i.test(navigator.userAgent);
            this.styleTransform = isIE ? null : `translate3d(${this.textX}px,${this.textY}px, 0)`;
            this.attrTransform = !isIE ? null : `translate(${this.textX},${this.textY})`;
            this.textTransition = isIE || !this.animations ? null : 'transform 0.75s';
        }
    }
    update() {
        let startRadius = this.radius;
        if (this.explodeSlices) {
            startRadius = (this.radius * this.value) / this.max;
        }
        const innerArc = arc().innerRadius(startRadius).outerRadius(startRadius);
        // Calculate innerPos then scale outer position to match label position
        const innerPos = innerArc.centroid(this.data);
        let scale = this.data.pos[1] / innerPos[1];
        if (this.data.pos[1] === 0 || innerPos[1] === 0) {
            scale = 1;
        }
        const outerPos = [scale * innerPos[0], scale * innerPos[1]];
        this.line = `M${innerPos}L${outerPos}L${this.data.pos}`;
    }
    get textX() {
        return this.data.pos[0];
    }
    get textY() {
        return this.data.pos[1];
    }
    textAnchor() {
        return this.midAngle(this.data) < Math.PI ? 'start' : 'end';
    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
}
PieLabelComponent.ɵfac = function PieLabelComponent_Factory(t) { return new (t || PieLabelComponent)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
PieLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieLabelComponent, selectors: [["g", "ngx-charts-pie-label", ""]], inputs: { animations: "animations", labelTrim: "labelTrim", labelTrimSize: "labelTrimSize", data: "data", radius: "radius", label: "label", color: "color", max: "max", value: "value", explodeSlices: "explodeSlices" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c36, decls: 6, vars: 17, consts: [["dy", ".35em", 1, "pie-label"], ["fill", "none", 1, "pie-label-line", "line"]], template: function PieLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "title");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(2, "g");
        ɵngcc0.ɵɵelementStart(3, "text", 0);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(5, "path", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("transform", ctx.styleTransform)("transition", ctx.textTransition);
        ɵngcc0.ɵɵattribute("transform", ctx.attrTransform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("text-anchor", ctx.textAnchor())("shape-rendering", "crispEdges");
        ɵngcc0.ɵɵclassProp("animation", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.labelTrim ? ctx.trimLabel(ctx.label, ctx.labelTrimSize) : ctx.label, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("animation", ctx.animations);
        ɵngcc0.ɵɵattribute("d", ctx.line)("stroke", ctx.color);
    } }, encapsulation: 2, changeDetection: 0 });
PieLabelComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
PieLabelComponent.propDecorators = {
    data: [{ type: Input }],
    radius: [{ type: Input }],
    label: [{ type: Input }],
    color: [{ type: Input }],
    max: [{ type: Input }],
    value: [{ type: Input }],
    explodeSlices: [{ type: Input }],
    animations: [{ type: Input }],
    labelTrim: [{ type: Input }],
    labelTrimSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieLabelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-label]',
                template: `
    <title>{{ label }}</title>
    <svg:g [attr.transform]="attrTransform" [style.transform]="styleTransform" [style.transition]="textTransition">
      <svg:text
        class="pie-label"
        [class.animation]="animations"
        dy=".35em"
        [style.textAnchor]="textAnchor()"
        [style.shapeRendering]="'crispEdges'"
      >
        {{ labelTrim ? trimLabel(label, labelTrimSize) : label }}
      </svg:text>
    </svg:g>
    <svg:path
      [attr.d]="line"
      [attr.stroke]="color"
      fill="none"
      class="pie-label-line line"
      [class.animation]="animations"
    ></svg:path>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { animations: [{
            type: Input
        }], labelTrim: [{
            type: Input
        }], labelTrimSize: [{
            type: Input
        }], data: [{
            type: Input
        }], radius: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }], max: [{
            type: Input
        }], value: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }] }); })();

class PieArcComponent {
    constructor(element) {
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.cornerRadius = 0;
        this.explodeSlices = false;
        this.gradient = false;
        this.animate = true;
        this.pointerEvents = true;
        this.isActive = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.initialized = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    getGradient() {
        return this.gradient ? this.gradientFill : this.fill;
    }
    getPointerEvents() {
        return this.pointerEvents ? 'auto' : 'none';
    }
    update() {
        const calc = this.calculateArc();
        this.startOpacity = 0.5;
        this.radialGradientId = 'linearGrad' + id().toString();
        this.gradientFill = `url(#${this.radialGradientId})`;
        if (this.animate) {
            if (this.initialized) {
                this.updateAnimation();
            }
            else {
                this.loadAnimation();
                this.initialized = true;
            }
        }
        else {
            this.path = calc.startAngle(this.startAngle).endAngle(this.endAngle)();
        }
    }
    calculateArc() {
        let outerRadius = this.outerRadius;
        if (this.explodeSlices && this.innerRadius === 0) {
            outerRadius = (this.outerRadius * this.value) / this.max;
        }
        return arc().innerRadius(this.innerRadius).outerRadius(outerRadius).cornerRadius(this.cornerRadius);
    }
    loadAnimation() {
        const node = select(this.element)
            .selectAll('.arc')
            .data([{ startAngle: this.startAngle, endAngle: this.endAngle }]);
        const calc = this.calculateArc();
        node
            .transition()
            .attrTween('d', function (d) {
            this._current = this._current || d;
            const copyOfD = Object.assign({}, d);
            copyOfD.endAngle = copyOfD.startAngle;
            const interpolater = interpolate(copyOfD, copyOfD);
            this._current = interpolater(0);
            return function (t) {
                return calc(interpolater(t));
            };
        })
            .transition()
            .duration(750)
            .attrTween('d', function (d) {
            this._current = this._current || d;
            const interpolater = interpolate(this._current, d);
            this._current = interpolater(0);
            return function (t) {
                return calc(interpolater(t));
            };
        });
    }
    updateAnimation() {
        const node = select(this.element)
            .selectAll('.arc')
            .data([{ startAngle: this.startAngle, endAngle: this.endAngle }]);
        const calc = this.calculateArc();
        node
            .transition()
            .duration(750)
            .attrTween('d', function (d) {
            this._current = this._current || d;
            const interpolater = interpolate(this._current, d);
            this._current = interpolater(0);
            return function (t) {
                return calc(interpolater(t));
            };
        });
    }
    onClick() {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(() => this.select.emit(this.data), 200);
    }
    onDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(this._timeout);
        this.dblclick.emit({
            data: this.data,
            nativeEvent: event
        });
    }
}
PieArcComponent.ɵfac = function PieArcComponent_Factory(t) { return new (t || PieArcComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
PieArcComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieArcComponent, selectors: [["g", "ngx-charts-pie-arc", ""]], inputs: { startAngle: "startAngle", endAngle: "endAngle", cornerRadius: "cornerRadius", explodeSlices: "explodeSlices", gradient: "gradient", animate: "animate", pointerEvents: "pointerEvents", isActive: "isActive", fill: "fill", innerRadius: "innerRadius", outerRadius: "outerRadius", value: "value", max: "max", data: "data" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dblclick: "dblclick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c37, decls: 3, vars: 7, consts: [[1, "arc-group"], [4, "ngIf"], [1, "arc", 3, "click", "dblclick", "mouseenter", "mouseleave"], ["ngx-charts-svg-radial-gradient", "", "orientation", "vertical", 3, "color", "name", "startOpacity"]], template: function PieArcComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵtemplate(1, PieArcComponent__svg_defs_1_Template, 2, 3, "defs", 1);
        ɵngcc0.ɵɵelementStart(2, "path", 2);
        ɵngcc0.ɵɵlistener("click", function PieArcComponent_Template__svg_path_click_2_listener() { return ctx.onClick(); })("dblclick", function PieArcComponent_Template__svg_path_dblclick_2_listener($event) { return ctx.onDblClick($event); })("mouseenter", function PieArcComponent_Template__svg_path_mouseenter_2_listener() { return ctx.activate.emit(ctx.data); })("mouseleave", function PieArcComponent_Template__svg_path_mouseleave_2_listener() { return ctx.deactivate.emit(ctx.data); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.gradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("pointer-events", ctx.getPointerEvents());
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
        ɵngcc0.ɵɵattribute("d", ctx.path)("fill", ctx.getGradient());
    } }, directives: [ɵngcc1.NgIf, SvgRadialGradientComponent], encapsulation: 2, changeDetection: 0 });
PieArcComponent.ctorParameters = () => [
    { type: ElementRef }
];
PieArcComponent.propDecorators = {
    fill: [{ type: Input }],
    startAngle: [{ type: Input }],
    endAngle: [{ type: Input }],
    innerRadius: [{ type: Input }],
    outerRadius: [{ type: Input }],
    cornerRadius: [{ type: Input }],
    value: [{ type: Input }],
    max: [{ type: Input }],
    data: [{ type: Input }],
    explodeSlices: [{ type: Input }],
    gradient: [{ type: Input }],
    animate: [{ type: Input }],
    pointerEvents: [{ type: Input }],
    isActive: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    dblclick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieArcComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-arc]',
                template: `
    <svg:g class="arc-group">
      <svg:defs *ngIf="gradient">
        <svg:g
          ngx-charts-svg-radial-gradient
          [color]="fill"
          orientation="vertical"
          [name]="radialGradientId"
          [startOpacity]="startOpacity"
        />
      </svg:defs>
      <svg:path
        [attr.d]="path"
        class="arc"
        [class.active]="isActive"
        [attr.fill]="getGradient()"
        (click)="onClick()"
        (dblclick)="onDblClick($event)"
        (mouseenter)="activate.emit(data)"
        (mouseleave)="deactivate.emit(data)"
        [style.pointer-events]="getPointerEvents()"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { startAngle: [{
            type: Input
        }], endAngle: [{
            type: Input
        }], cornerRadius: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }], gradient: [{
            type: Input
        }], animate: [{
            type: Input
        }], pointerEvents: [{
            type: Input
        }], isActive: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dblclick: [{
            type: Output
        }], fill: [{
            type: Input
        }], innerRadius: [{
            type: Input
        }], outerRadius: [{
            type: Input
        }], value: [{
            type: Input
        }], max: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();

class PieChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.labels = false;
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        this.activeEntries = [];
        this.tooltipDisabled = false;
        this.trimLabels = true;
        this.maxLabelLength = 10;
        this.dblclick = new EventEmitter();
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    update() {
        super.update();
        if (this.labels && this.hasNoOptionalMarginsSet()) {
            this.margins = [30, 80, 30, 80];
        }
        else if (!this.labels && this.hasNoOptionalMarginsSet()) {
            // default value for margins
            this.margins = [20, 20, 20, 20];
        }
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margins,
            showLegend: this.legend,
            legendPosition: this.legendPosition
        });
        this.formatDates();
        const xOffset = this.margins[3] + this.dims.width / 2;
        const yOffset = this.margins[0] + this.dims.height / 2;
        this.translation = `translate(${xOffset}, ${yOffset})`;
        this.outerRadius = Math.min(this.dims.width, this.dims.height);
        if (this.labels) {
            // make room for labels
            this.outerRadius /= 3;
        }
        else {
            this.outerRadius /= 2;
        }
        this.innerRadius = 0;
        if (this.doughnut) {
            this.innerRadius = this.outerRadius * (1 - this.arcWidth);
        }
        this.domain = this.getDomain();
        // sort data according to domain
        this.data = this.results.sort((a, b) => {
            return this.domain.indexOf(a.name) - this.domain.indexOf(b.name);
        });
        this.setColors();
        this.legendOptions = this.getLegendOptions();
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
    getLegendOptions() {
        return {
            scaleType: 'ordinal',
            domain: this.domain,
            colors: this.colors,
            title: this.legendTitle,
            position: this.legendPosition
        };
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    hasNoOptionalMarginsSet() {
        return !this.margins || this.margins.length <= 0;
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return ɵPieChartComponent_BaseFactory(t || PieChartComponent); };
PieChartComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieChartComponent, selectors: [["ngx-charts-pie-chart"]], contentQueries: function PieChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { labels: "labels", legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", explodeSlices: "explodeSlices", doughnut: "doughnut", arcWidth: "arcWidth", activeEntries: "activeEntries", tooltipDisabled: "tooltipDisabled", trimLabels: "trimLabels", maxLabelLength: "maxLabelLength", margins: "margins", gradient: "gradient", labelFormatting: "labelFormatting", tooltipText: "tooltipText" }, outputs: { dblclick: "dblclick", select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 24, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "pie-chart", "chart"], ["ngx-charts-pie-series", "", 3, "colors", "series", "showLabels", "labelFormatting", "trimLabels", "maxLabelLength", "activeEntries", "innerRadius", "outerRadius", "explodeSlices", "gradient", "animations", "tooltipDisabled", "tooltipTemplate", "tooltipText", "dblclick", "select", "activate", "deactivate"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelActivate", function PieChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, true); })("legendLabelDeactivate", function PieChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, true); })("legendLabelClick", function PieChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵlistener("dblclick", function PieChartComponent_Template__svg_g_dblclick_2_listener($event) { return ctx.dblclick.emit($event); })("select", function PieChartComponent_Template__svg_g_select_2_listener($event) { return ctx.onClick($event); })("activate", function PieChartComponent_Template__svg_g_activate_2_listener($event) { return ctx.onActivate($event); })("deactivate", function PieChartComponent_Template__svg_g_deactivate_2_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(21, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.translation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("colors", ctx.colors)("series", ctx.data)("showLabels", ctx.labels)("labelFormatting", ctx.labelFormatting)("trimLabels", ctx.trimLabels)("maxLabelLength", ctx.maxLabelLength)("activeEntries", ctx.activeEntries)("innerRadius", ctx.innerRadius)("outerRadius", ctx.outerRadius)("explodeSlices", ctx.explodeSlices)("gradient", ctx.gradient)("animations", ctx.animations)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("tooltipText", ctx.tooltipText);
    } }, directives: function () { return [ChartComponent, PieSeriesComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:fadeIn .75s ease-in;animation:fadeIn .75s ease-in}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:drawOut 3s linear;animation:drawOut 3s linear;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}"], encapsulation: 2, changeDetection: 0 });
PieChartComponent.propDecorators = {
    labels: [{ type: Input }],
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    explodeSlices: [{ type: Input }],
    doughnut: [{ type: Input }],
    arcWidth: [{ type: Input }],
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    trimLabels: [{ type: Input }],
    maxLabelLength: [{ type: Input }],
    tooltipText: [{ type: Input }],
    dblclick: [{ type: Output }],
    margins: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵPieChartComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(PieChartComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieChartComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-pie-chart',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, true)"
      (legendLabelDeactivate)="onDeactivate($event, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="translation" class="pie-chart chart">
        <svg:g
          ngx-charts-pie-series
          [colors]="colors"
          [series]="data"
          [showLabels]="labels"
          [labelFormatting]="labelFormatting"
          [trimLabels]="trimLabels"
          [maxLabelLength]="maxLabelLength"
          [activeEntries]="activeEntries"
          [innerRadius]="innerRadius"
          [outerRadius]="outerRadius"
          [explodeSlices]="explodeSlices"
          [gradient]="gradient"
          [animations]="animations"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipText]="tooltipText"
          (dblclick)="dblclick.emit($event)"
          (select)="onClick($event)"
          (activate)="onActivate($event)"
          (deactivate)="onDeactivate($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:fadeIn .75s ease-in;animation:fadeIn .75s ease-in}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:drawOut 3s linear;animation:drawOut 3s linear;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}"]
            }]
    }], null, { labels: [{
            type: Input
        }], legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }], doughnut: [{
            type: Input
        }], arcWidth: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], trimLabels: [{
            type: Input
        }], maxLabelLength: [{
            type: Input
        }], dblclick: [{
            type: Output
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], margins: [{
            type: Input
        }], gradient: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], tooltipText: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

function gridSize(dims, len, minWidth) {
    let rows = 1;
    let cols = len;
    const width = dims.width;
    if (width > minWidth) {
        while (width / cols < minWidth) {
            rows += 1;
            cols = Math.ceil(len / rows);
        }
    }
    return [cols, rows];
}
function gridLayout(dims, data, minWidth, designatedTotal) {
    const xScale = scaleBand();
    const yScale = scaleBand();
    const width = dims.width;
    const height = dims.height;
    const [columns, rows] = gridSize(dims, data.length, minWidth);
    const xDomain = [];
    const yDomain = [];
    for (let i = 0; i < rows; i++) {
        yDomain.push(i);
    }
    for (let i = 0; i < columns; i++) {
        xDomain.push(i);
    }
    xScale.domain(xDomain);
    yScale.domain(yDomain);
    xScale.rangeRound([0, width], 0.1);
    yScale.rangeRound([0, height], 0.1);
    const res = [];
    const total = designatedTotal ? designatedTotal : getTotal(data);
    const cardWidth = xScale.bandwidth();
    const cardHeight = yScale.bandwidth();
    for (let i = 0; i < data.length; i++) {
        res[i] = {};
        res[i].data = {
            name: data[i] ? data[i].name : '',
            value: data[i] ? data[i].value : undefined,
            extra: data[i] ? data[i].extra : undefined,
            label: data[i] ? data[i].label : ''
        };
        res[i].x = xScale(i % columns);
        res[i].y = yScale(Math.floor(i / columns));
        res[i].width = cardWidth;
        res[i].height = cardHeight;
        res[i].data.percent = total > 0 ? res[i].data.value / total : 0;
        res[i].data.total = total;
    }
    return res;
}
function getTotal(results) {
    return results.map(d => (d ? d.value : 0)).reduce((sum, val) => sum + val, 0);
}

class PieGridComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.tooltipDisabled = false;
        this.label = 'Total';
        this.minWidth = 150;
        this.activeEntries = [];
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [20, 20, 20, 20];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.formatDates();
        this.domain = this.getDomain();
        this.data = gridLayout(this.dims, this.results, this.minWidth, this.designatedTotal);
        this.transform = `translate(${this.margin[3]} , ${this.margin[0]})`;
        this.series = this.getSeries();
        this.setColors();
        this.tooltipText = this.tooltipText || this.defaultTooltipText;
    }
    defaultTooltipText({ data }) {
        const label = trimLabel(formatLabel(data.name));
        const val = data.value.toLocaleString();
        return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    getSeries() {
        const total = this.designatedTotal ? this.designatedTotal : this.getTotal();
        return this.data.map(d => {
            const baselineLabelHeight = 20;
            const padding = 10;
            const name = d.data.name;
            const label = formatLabel(name);
            const value = d.data.value;
            const radius = min([d.width - padding, d.height - baselineLabelHeight]) / 2 - 5;
            const innerRadius = radius * 0.9;
            let count = 0;
            const colors = () => {
                count += 1;
                if (count === 1) {
                    return 'rgba(100,100,100,0.3)';
                }
                else {
                    return this.colorScale.getColor(label);
                }
            };
            const xPos = d.x + (d.width - padding) / 2;
            const yPos = d.y + (d.height - baselineLabelHeight) / 2;
            return {
                transform: `translate(${xPos}, ${yPos})`,
                colors,
                innerRadius,
                outerRadius: radius,
                name,
                label: trimLabel(label),
                total: value,
                value,
                percent: format('.1%')(d.data.percent),
                data: [
                    d,
                    {
                        data: {
                            other: true,
                            value: total - value,
                            name: d.data.name
                        }
                    }
                ]
            };
        });
    }
    getTotal() {
        return this.results.map(d => d.value).reduce((sum, d) => sum + d, 0);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colorScale = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
PieGridComponent.ɵfac = function PieGridComponent_Factory(t) { return ɵPieGridComponent_BaseFactory(t || PieGridComponent); };
PieGridComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieGridComponent, selectors: [["ngx-charts-pie-grid"]], contentQueries: function PieGridComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { tooltipDisabled: "tooltipDisabled", label: "label", minWidth: "minWidth", activeEntries: "activeEntries", tooltipText: "tooltipText", designatedTotal: "designatedTotal" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 8, consts: [[3, "view", "showLegend", "animations"], [1, "pie-grid", "chart"], ["class", "pie-grid-item", 4, "ngFor", "ngForOf"], [1, "pie-grid-item"], ["ngx-charts-pie-grid-series", "", "ngx-tooltip", "", 3, "colors", "data", "innerRadius", "outerRadius", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 4, "ngIf"], ["dy", "0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 3, "countTo", "countPrefix", 4, "ngIf"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", 4, "ngIf"], ["dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 1, "label", "percent-label", 3, "countTo", "countSuffix"], ["dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label", "percent-label"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 1, "label", 3, "countTo", "countPrefix"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", 1, "label"]], template: function PieGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, PieGridComponent__svg_g_2_Template, 8, 19, "g", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(5, _c23, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.series);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgForOf, PieGridSeriesComponent, TooltipDirective, ɵngcc1.NgIf, CountUpDirective]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}"], encapsulation: 2, changeDetection: 0 });
PieGridComponent.propDecorators = {
    designatedTotal: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipText: [{ type: Input }],
    label: [{ type: Input }],
    minWidth: [{ type: Input }],
    activeEntries: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵPieGridComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(PieGridComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieGridComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-pie-grid',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="pie-grid chart">
        <svg:g *ngFor="let series of series" class="pie-grid-item" [attr.transform]="series.transform">
          <svg:g
            ngx-charts-pie-grid-series
            [colors]="series.colors"
            [data]="series.data"
            [innerRadius]="series.innerRadius"
            [outerRadius]="series.outerRadius"
            [animations]="animations"
            (select)="onClick($event)"
            ngx-tooltip
            [tooltipDisabled]="tooltipDisabled"
            [tooltipPlacement]="'top'"
            [tooltipType]="'tooltip'"
            [tooltipTitle]="tooltipTemplate ? undefined : tooltipText({ data: series })"
            [tooltipTemplate]="tooltipTemplate"
            [tooltipContext]="series.data[0].data"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          />
          <svg:text
            *ngIf="animations"
            class="label percent-label"
            dy="-0.5em"
            x="0"
            y="5"
            ngx-charts-count-up
            [countTo]="series.percent"
            [countSuffix]="'%'"
            text-anchor="middle"
          ></svg:text>
          <svg:text *ngIf="!animations" class="label percent-label" dy="-0.5em" x="0" y="5" text-anchor="middle">
            {{ series.percent.toLocaleString() }}
          </svg:text>
          <svg:text class="label" dy="0.5em" x="0" y="5" text-anchor="middle">
            {{ series.label }}
          </svg:text>
          <svg:text
            *ngIf="animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
            ngx-charts-count-up
            [countTo]="series.total"
            [countPrefix]="label + ': '"
          ></svg:text>
          <svg:text
            *ngIf="!animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
          >
            {{ label }}: {{ series.total.toLocaleString() }}
          </svg:text>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}"]
            }]
    }], null, { tooltipDisabled: [{
            type: Input
        }], label: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipText: [{
            type: Input
        }], designatedTotal: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class PieGridSeriesComponent {
    constructor(element) {
        this.innerRadius = 70;
        this.outerRadius = 80;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.layout = pie()
            .value(d => d.data.value)
            .sort(null);
        this.arcs = this.getArcs();
    }
    getArcs() {
        return this.layout(this.data).map((arc, index) => {
            const label = arc.data.data.name;
            const other = arc.data.data.other;
            if (index === 0) {
                arc.startAngle = 0;
            }
            const color = this.colors(label);
            return {
                data: arc.data.data,
                class: 'arc ' + 'arc' + index,
                fill: color,
                startAngle: other ? 0 : arc.startAngle,
                endAngle: arc.endAngle,
                animate: this.animations && !other,
                pointerEvents: !other
            };
        });
    }
    onClick(data) {
        this.select.emit(this.data[0].data);
    }
    trackBy(index, item) {
        return item.data.name;
    }
    label(arc) {
        return arc.data.name;
    }
    color(arc) {
        return this.colors(this.label(arc));
    }
}
PieGridSeriesComponent.ɵfac = function PieGridSeriesComponent_Factory(t) { return new (t || PieGridSeriesComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
PieGridSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieGridSeriesComponent, selectors: [["g", "ngx-charts-pie-grid-series", ""]], inputs: { innerRadius: "innerRadius", outerRadius: "outerRadius", animations: "animations", colors: "colors", data: "data" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c39, decls: 2, vars: 2, consts: [[1, "pie-grid-arcs"], ["ngx-charts-pie-arc", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-arc", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate", "select", "activate", "deactivate"]], template: function PieGridSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵtemplate(1, PieGridSeriesComponent__svg_g_1_Template, 1, 11, "g", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, PieArcComponent], encapsulation: 2, changeDetection: 0 });
PieGridSeriesComponent.ctorParameters = () => [
    { type: ElementRef }
];
PieGridSeriesComponent.propDecorators = {
    colors: [{ type: Input }],
    data: [{ type: Input }],
    innerRadius: [{ type: Input }],
    outerRadius: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieGridSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-grid-series]',
                template: `
    <svg:g class="pie-grid-arcs">
      <svg:g
        ngx-charts-pie-arc
        *ngFor="let arc of arcs; trackBy: trackBy"
        [attr.class]="arc.class"
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [data]="arc.data"
        [gradient]="false"
        [pointerEvents]="arc.pointerEvents"
        [animate]="arc.animate"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { innerRadius: [{
            type: Input
        }], outerRadius: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], colors: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();

class PieSeriesComponent {
    constructor() {
        this.series = [];
        this.innerRadius = 60;
        this.outerRadius = 80;
        this.trimLabels = true;
        this.maxLabelLength = 10;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dblclick = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        const pieGenerator = pie()
            .value(d => d.value)
            .sort(null);
        const arcData = pieGenerator(this.series);
        this.max = max(arcData, d => {
            return d.value;
        });
        this.data = this.calculateLabelPositions(arcData);
        this.tooltipText = this.tooltipText || this.defaultTooltipText;
    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    outerArc() {
        const factor = 1.5;
        return arc()
            .innerRadius(this.outerRadius * factor)
            .outerRadius(this.outerRadius * factor);
    }
    calculateLabelPositions(pieData) {
        const factor = 1.5;
        const minDistance = 10;
        const labelPositions = pieData;
        labelPositions.forEach(d => {
            d.pos = this.outerArc().centroid(d);
            d.pos[0] = factor * this.outerRadius * (this.midAngle(d) < Math.PI ? 1 : -1);
        });
        for (let i = 0; i < labelPositions.length - 1; i++) {
            const a = labelPositions[i];
            if (!this.labelVisible(a)) {
                continue;
            }
            for (let j = i + 1; j < labelPositions.length; j++) {
                const b = labelPositions[j];
                if (!this.labelVisible(b)) {
                    continue;
                }
                // if they're on the same side
                if (b.pos[0] * a.pos[0] > 0) {
                    // if they're overlapping
                    const o = minDistance - Math.abs(b.pos[1] - a.pos[1]);
                    if (o > 0) {
                        // push the second up or down
                        b.pos[1] += Math.sign(b.pos[0]) * o;
                    }
                }
            }
        }
        return labelPositions;
    }
    labelVisible(myArc) {
        return this.showLabels && myArc.endAngle - myArc.startAngle > Math.PI / 30;
    }
    getTooltipTitle(a) {
        return this.tooltipTemplate ? undefined : this.tooltipText(a);
    }
    labelText(myArc) {
        if (this.labelFormatting) {
            return this.labelFormatting(myArc.data.name);
        }
        return this.label(myArc);
    }
    label(myArc) {
        return formatLabel(myArc.data.name);
    }
    defaultTooltipText(myArc) {
        const label = this.label(myArc);
        const val = formatLabel(myArc.data.value);
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
    color(myArc) {
        return this.colors.getColor(this.label(myArc));
    }
    trackBy(index, item) {
        return item.data.name;
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
}
PieSeriesComponent.ɵfac = function PieSeriesComponent_Factory(t) { return new (t || PieSeriesComponent)(); };
PieSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PieSeriesComponent, selectors: [["g", "ngx-charts-pie-series", ""]], inputs: { series: "series", innerRadius: "innerRadius", outerRadius: "outerRadius", trimLabels: "trimLabels", maxLabelLength: "maxLabelLength", tooltipDisabled: "tooltipDisabled", animations: "animations", tooltipText: "tooltipText", colors: "colors", dims: "dims", explodeSlices: "explodeSlices", showLabels: "showLabels", gradient: "gradient", activeEntries: "activeEntries", labelFormatting: "labelFormatting", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dblclick: "dblclick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c40, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations", 4, "ngIf"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "gradient", "data", "max", "explodeSlices", "isActive", "animate", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", "dblclick"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations"]], template: function PieSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, PieSeriesComponent__svg_g_0_Template, 3, 19, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, PieArcComponent, TooltipDirective, PieLabelComponent], encapsulation: 2, changeDetection: 0 });
PieSeriesComponent.propDecorators = {
    colors: [{ type: Input }],
    series: [{ type: Input }],
    dims: [{ type: Input }],
    innerRadius: [{ type: Input }],
    outerRadius: [{ type: Input }],
    explodeSlices: [{ type: Input }],
    showLabels: [{ type: Input }],
    gradient: [{ type: Input }],
    activeEntries: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    trimLabels: [{ type: Input }],
    maxLabelLength: [{ type: Input }],
    tooltipText: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    dblclick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-series]',
                template: `
    <svg:g *ngFor="let arc of data; trackBy: trackBy">
      <svg:g
        ngx-charts-pie-label
        *ngIf="labelVisible(arc)"
        [data]="arc"
        [radius]="outerRadius"
        [color]="color(arc)"
        [label]="labelText(arc)"
        [labelTrim]="trimLabels"
        [labelTrimSize]="maxLabelLength"
        [max]="max"
        [value]="arc.value"
        [explodeSlices]="explodeSlices"
        [animations]="animations"
      ></svg:g>
      <svg:g
        ngx-charts-pie-arc
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [gradient]="gradient"
        [data]="arc.data"
        [max]="max"
        [explodeSlices]="explodeSlices"
        [isActive]="isActive(arc.data)"
        [animate]="animations"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        (dblclick)="dblclick.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="getTooltipTitle(arc)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="arc.data"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { series: [{
            type: Input
        }], innerRadius: [{
            type: Input
        }], outerRadius: [{
            type: Input
        }], trimLabels: [{
            type: Input
        }], maxLabelLength: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dblclick: [{
            type: Output
        }], tooltipText: [{
            type: Input
        }], colors: [{
            type: Input
        }], dims: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], gradient: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class PieChartModule {
}
PieChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PieChartModule });
PieChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PieChartModule_Factory(t) { return new (t || PieChartModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PieChartModule, { declarations: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent], imports: [ChartCommonModule], exports: [AdvancedPieChartComponent, PieLabelComponent, PieArcComponent, PieChartComponent, PieGridComponent, PieGridSeriesComponent, PieSeriesComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PieChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [
                    AdvancedPieChartComponent,
                    PieLabelComponent,
                    PieArcComponent,
                    PieChartComponent,
                    PieGridComponent,
                    PieGridSeriesComponent,
                    PieSeriesComponent
                ],
                exports: [
                    AdvancedPieChartComponent,
                    PieLabelComponent,
                    PieArcComponent,
                    PieChartComponent,
                    PieGridComponent,
                    PieGridSeriesComponent,
                    PieSeriesComponent
                ]
            }]
    }], null, null); })();

class PolarChartModule {
}
PolarChartModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PolarChartModule });
PolarChartModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PolarChartModule_Factory(t) { return new (t || PolarChartModule)(); }, imports: [[ChartCommonModule, PieChartModule, LineChartModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PolarChartModule, { declarations: [PolarChartComponent, PolarSeriesComponent], imports: [ChartCommonModule, PieChartModule, LineChartModule], exports: [PolarChartComponent, PolarSeriesComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PolarChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule, PieChartModule, LineChartModule],
                declarations: [PolarChartComponent, PolarSeriesComponent],
                exports: [PolarChartComponent, PolarSeriesComponent]
            }]
    }], null, null); })();

function calculateTextWidth(fontFamilyKey, text, defaultWidth = 8) {
    return text.split('').reduce((acc, curr) => {
        const width = fontFamilyKey[curr] || defaultWidth;
        return acc + width;
    }, 0);
}

const VERDANA_FONT_WIDTHS_16_PX = {
    '0': 10,
    '1': 10,
    '2': 10,
    '3': 10,
    '4': 10,
    '5': 10,
    '6': 10,
    '7': 10,
    '8': 10,
    '9': 10,
    A: 11,
    B: 11,
    C: 11,
    D: 12,
    E: 10,
    F: 9,
    G: 12,
    H: 12,
    I: 7,
    J: 7,
    K: 11,
    L: 9,
    M: 13,
    N: 12,
    O: 13,
    P: 10,
    Q: 13,
    R: 11,
    S: 11,
    T: 10,
    U: 12,
    V: 11,
    W: 16,
    X: 11,
    Y: 10,
    Z: 11,
    a: 10,
    b: 10,
    c: 8,
    d: 10,
    e: 10,
    f: 6,
    g: 10,
    h: 10,
    i: 4,
    j: 6,
    k: 9,
    l: 4,
    m: 16,
    n: 10,
    o: 10,
    p: 10,
    q: 10,
    r: 7,
    s: 8,
    t: 6,
    u: 10,
    v: 9,
    w: 13,
    x: 9,
    y: 9,
    z: 8,
    '!': 6,
    '@': 16,
    '#': 13,
    $: 10,
    '%': 17,
    '^': 13,
    '&': 12,
    '*': 10,
    '(': 7,
    ')': 7,
    _: 10,
    '-': 7,
    '+': 13,
    '=': 13,
    ',': 6,
    '.': 6,
    '/': 7,
    "'": 4,
    ':': 7,
    '|': 7,
    '?': 9,
    ';': 7,
    '<': 13,
    '>': 13
};

class CardComponent {
    constructor(element, cd, zone, platformId) {
        this.cd = cd;
        this.zone = zone;
        this.platformId = platformId;
        this.animations = true;
        this.select = new EventEmitter();
        this.value = '';
        this.textFontSize = 12;
        this.textTransform = '';
        this.initialized = false;
        this.bandHeight = 10;
        this.textPadding = [10, 20, 5, 20];
        this.labelFontSize = 15;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this.scaleTextSSR();
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            cancelAnimationFrame(this.animationReq);
        }
    }
    update() {
        this.zone.run(() => {
            const hasValue = this.data && typeof this.data.value !== 'undefined';
            const valueFormatting = this.valueFormatting || (card => card.value.toLocaleString());
            const labelFormatting = this.labelFormatting || (card => escapeLabel(trimLabel(card.label, 55)));
            this.transform = `translate(${this.x} , ${this.y})`;
            this.textWidth = Math.max(0, this.width) - this.textPadding[1] - this.textPadding[3];
            this.cardWidth = Math.max(0, this.width);
            this.cardHeight = Math.max(0, this.height);
            this.label = this.label ? this.label : this.data.name;
            const cardData = {
                label: this.label,
                data: this.data,
                value: this.data.value
            };
            this.formattedLabel = labelFormatting(cardData);
            this.transformBand = `translate(0 , ${this.cardHeight - this.bandHeight})`;
            const value = hasValue ? valueFormatting(cardData) : '';
            this.value = this.paddedValue(value);
            this.setPadding();
            this.bandPath = roundedRect(0, 0, this.cardWidth, this.bandHeight, 3, [false, false, true, true]);
            setTimeout(() => {
                if (isPlatformBrowser(this.platformId)) {
                    this.scaleText();
                }
                this.value = value;
                if (hasValue && !this.initialized) {
                    setTimeout(() => this.startCount(), 20);
                }
            }, 8);
        });
    }
    paddedValue(value) {
        if (this.medianSize && this.medianSize > value.length) {
            value += '\u2007'.repeat(this.medianSize - value.length);
        }
        return value;
    }
    startCount() {
        if (!this.initialized && this.animations) {
            cancelAnimationFrame(this.animationReq);
            const val = this.data.value;
            const decs = decimalChecker(val);
            const valueFormatting = this.valueFormatting || (card => card.value.toLocaleString());
            const callback = ({ value, finished }) => {
                this.zone.run(() => {
                    value = finished ? val : value;
                    this.value = valueFormatting({ label: this.label, data: this.data, value });
                    if (!finished) {
                        this.value = this.paddedValue(this.value);
                    }
                    this.cd.markForCheck();
                });
            };
            this.animationReq = count(0, val, decs, 1, callback);
            this.initialized = true;
        }
    }
    scaleText() {
        this.zone.run(() => {
            const { width, height } = this.textEl.nativeElement.getBoundingClientRect();
            if (width === 0 || height === 0) {
                return;
            }
            const textPadding = (this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8);
            const availableWidth = this.cardWidth - 2 * textPadding;
            const availableHeight = this.cardHeight / 3;
            const resizeScale = Math.min(availableWidth / width, availableHeight / height);
            this.textFontSize = Math.floor(this.textFontSize * resizeScale);
            this.labelFontSize = Math.min(this.textFontSize, 15);
            this.setPadding();
            this.cd.markForCheck();
        });
    }
    scaleTextSSR() {
        const width = calculateTextWidth(VERDANA_FONT_WIDTHS_16_PX, this.value, 10);
        const height = 18;
        const textPadding = (this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8);
        const availableWidth = this.cardWidth - 2 * textPadding;
        const availableHeight = this.cardHeight / 3;
        const resizeScale = Math.min(availableWidth / width, availableHeight / height);
        this.textFontSize = Math.floor(this.textFontSize * resizeScale);
        this.labelFontSize = Math.min(this.textFontSize, 15);
        this.setPadding();
    }
    setPadding() {
        this.textPadding[1] = this.textPadding[3] = this.cardWidth / 8;
        const padding = this.cardHeight / 2;
        this.textPadding[0] = padding - this.textFontSize - this.labelFontSize / 2;
        this.textPadding[2] = padding - this.labelFontSize;
    }
    onClick() {
        this.select.emit(this.data);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
CardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["g", "ngx-charts-card", ""]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c41, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, inputs: { animations: "animations", label: "label", color: "color", bandColor: "bandColor", textColor: "textColor", x: "x", y: "y", width: "width", height: "height", data: "data", medianSize: "medianSize", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c42, decls: 10, vars: 25, consts: [[1, "cell", 3, "click"], ["rx", "3", "ry", "3", 1, "card"], ["class", "card-band", "stroke", "none", 4, "ngIf"], ["x", "5", "alignment-baseline", "hanging", 1, "trimmed-label"], [3, "innerHTML"], ["text-anchor", "start", "alignment-baseline", "hanging", 1, "value-text"], ["textEl", ""], ["stroke", "none", 1, "card-band"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g", 0);
        ɵngcc0.ɵɵlistener("click", function CardComponent_Template__svg_g_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelement(1, "rect", 1);
        ɵngcc0.ɵɵtemplate(2, CardComponent__svg_path_2_Template, 1, 3, "path", 2);
        ɵngcc0.ɵɵelementStart(3, "title");
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "foreignObject", 3);
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelement(6, "p", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(7, "text", 5, 6);
        ɵngcc0.ɵɵtext(9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("fill", ctx.color);
        ɵngcc0.ɵɵattribute("width", ctx.cardWidth)("height", ctx.cardHeight);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.bandColor && ctx.bandColor !== ctx.color);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("x", ctx.textPadding[3])("y", ctx.cardHeight - ctx.textPadding[2])("width", ctx.textWidth)("height", ctx.labelFontSize + ctx.textPadding[2]);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("color", ctx.textColor)("font-size", ctx.labelFontSize, "px")("line-height", ctx.labelFontSize, "px");
        ɵngcc0.ɵɵproperty("innerHTML", ctx.formattedLabel, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("fill", ctx.textColor)("font-size", ctx.textFontSize, "pt");
        ɵngcc0.ɵɵattribute("x", ctx.textPadding[3])("y", ctx.textPadding[0]);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
CardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CardComponent.propDecorators = {
    color: [{ type: Input }],
    bandColor: [{ type: Input }],
    textColor: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    label: [{ type: Input }],
    data: [{ type: Input }],
    medianSize: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-card]',
                template: `
    <svg:g [attr.transform]="transform" class="cell" (click)="onClick()">
      <svg:rect class="card" [style.fill]="color" [attr.width]="cardWidth" [attr.height]="cardHeight" rx="3" ry="3" />
      <svg:path
        *ngIf="bandColor && bandColor !== color"
        class="card-band"
        [attr.fill]="bandColor"
        [attr.transform]="transformBand"
        stroke="none"
        [attr.d]="bandPath"
      />
      <title>{{ label }}</title>
      <svg:foreignObject
        class="trimmed-label"
        x="5"
        [attr.x]="textPadding[3]"
        [attr.y]="cardHeight - textPadding[2]"
        [attr.width]="textWidth"
        [attr.height]="labelFontSize + textPadding[2]"
        alignment-baseline="hanging"
      >
        <xhtml:p
          [style.color]="textColor"
          [style.fontSize.px]="labelFontSize"
          [style.lineHeight.px]="labelFontSize"
          [innerHTML]="formattedLabel"
        >
        </xhtml:p>
      </svg:foreignObject>
      <svg:text
        #textEl
        class="value-text"
        [attr.x]="textPadding[3]"
        [attr.y]="textPadding[0]"
        [style.fill]="textColor"
        text-anchor="start"
        alignment-baseline="hanging"
        [style.font-size.pt]="textFontSize"
      >
        {{ value }}
      </svg:text>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { animations: [{
            type: Input
        }], select: [{
            type: Output
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }], bandColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], data: [{
            type: Input
        }], medianSize: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], textEl: [{
            type: ViewChild,
            args: ['textEl', { static: false }]
        }] }); })();

/**
 * Converts a hex to RGB
 *
 * @export
 */
function hexToRgb(value) {
    // deprecated, use d3.color()
    return rgb(value);
}
/**
 * Accepts a color (string) and returns a inverted hex color (string)
 * http://stackoverflow.com/questions/9600295/automatically-change-text-color-to-assure-readability
 *
 * @export
 */
function invertColor(value) {
    const color = rgb(value);
    const { r, g, b, opacity } = color;
    if (opacity === 0) {
        return color.toString();
    }
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    const depth = yiq >= 128 ? -0.8 : 0.8;
    return shadeRGBColor(color, depth);
}
/**
 * Given a rgb, it will darken/lighten
 * http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 *
 * @export
 * @param \{ r, g, b }
 */
function shadeRGBColor({ r, g, b }, percent) {
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    r = Math.round((t - r) * p) + r;
    g = Math.round((t - g) * p) + g;
    b = Math.round((t - b) * p) + b;
    return `rgb(${r}, ${g}, ${b})`;
}

class CardSeriesComponent {
    constructor() {
        this.innerPadding = 15;
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        if (this.data.length > 2) {
            const valueFormatting = this.valueFormatting || (card => card.value.toLocaleString());
            const sortedLengths = this.data
                .map(d => {
                const hasValue = d && d.data && typeof d.data.value !== 'undefined' && d.data.value !== null;
                return hasValue
                    ? valueFormatting({
                        data: d.data,
                        label: d ? d.data.name : '',
                        value: d && d.data ? d.data.value : ''
                    }).length
                    : 0;
            })
                .sort((a, b) => b - a);
            const idx = Math.ceil(this.data.length / 2);
            this.medianSize = sortedLengths[idx];
        }
        const cards = this.getCards();
        this.cards = cards.filter(d => d.data.value !== null);
        this.emptySlots = cards.filter(d => d.data.value === null);
    }
    getCards() {
        const yPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[0] + this.innerPadding[2];
        const xPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[1] + this.innerPadding[3];
        return this.data.map((d, index) => {
            let label = d.data.name;
            if (label && label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label ? label.toLocaleString() : label;
            }
            const value = d.data.value;
            const valueColor = label ? this.colors.getColor(label) : this.emptyColor;
            const color = this.cardColor || valueColor || '#000';
            return {
                x: d.x,
                y: d.y,
                width: d.width - xPadding,
                height: d.height - yPadding,
                color,
                bandColor: this.bandColor || valueColor,
                textColor: this.textColor || invertColor(color),
                label,
                data: d.data,
                tooltipText: `${label}: ${value}`
            };
        });
    }
    trackBy(index, card) {
        return card.label;
    }
    onClick(data) {
        this.select.emit(data);
    }
}
CardSeriesComponent.ɵfac = function CardSeriesComponent_Factory(t) { return new (t || CardSeriesComponent)(); };
CardSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CardSeriesComponent, selectors: [["g", "ngx-charts-card-series", ""]], inputs: { innerPadding: "innerPadding", emptyColor: "emptyColor", animations: "animations", data: "data", slots: "slots", dims: "dims", colors: "colors", cardColor: "cardColor", bandColor: "bandColor", textColor: "textColor", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c43, decls: 2, vars: 4, consts: [["class", "card-empty", "rx", "3", "ry", "3", 3, "fill", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-card", "", 3, "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["rx", "3", "ry", "3", 1, "card-empty"], ["ngx-charts-card", "", 3, "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations", "select"]], template: function CardSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CardSeriesComponent__svg_rect_0_Template, 1, 6, "rect", 0);
        ɵngcc0.ɵɵtemplate(1, CardSeriesComponent__svg_g_1_Template, 1, 13, "g", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.emptySlots)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.cards)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, CardComponent], encapsulation: 2, changeDetection: 0 });
CardSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    slots: [{ type: Input }],
    dims: [{ type: Input }],
    colors: [{ type: Input }],
    innerPadding: [{ type: Input }],
    cardColor: [{ type: Input }],
    bandColor: [{ type: Input }],
    emptyColor: [{ type: Input }],
    textColor: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CardSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-card-series]',
                template: `
    <svg:rect
      *ngFor="let c of emptySlots; trackBy: trackBy"
      class="card-empty"
      [attr.x]="c.x"
      [attr.y]="c.y"
      [style.fill]="emptyColor"
      [attr.width]="c.width"
      [attr.height]="c.height"
      rx="3"
      ry="3"
    />
    <svg:g
      ngx-charts-card
      *ngFor="let c of cards; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [color]="c.color"
      [bandColor]="c.bandColor"
      [textColor]="c.textColor"
      [data]="c.data"
      [label]="c.label"
      [medianSize]="medianSize"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [animations]="animations"
      (select)="onClick($event)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { innerPadding: [{
            type: Input
        }], emptyColor: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], data: [{
            type: Input
        }], slots: [{
            type: Input
        }], dims: [{
            type: Input
        }], colors: [{
            type: Input
        }], cardColor: [{
            type: Input
        }], bandColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }] }); })();

class NumberCardComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.innerPadding = 15;
        this.margin = [10, 10, 10, 10];
    }
    get clickable() {
        return !!this.select.observers.length;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.formatDates();
        this.domain = this.getDomain();
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        const size = gridSize(this.dims, this.results.length, 150);
        const N = size[0] * size[1];
        const data = this.results.slice();
        while (data.length < N) {
            data.push({ value: null });
        }
        this.data = gridLayout(this.dims, data, 150, this.designatedTotal);
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
}
NumberCardComponent.ɵfac = function NumberCardComponent_Factory(t) { return ɵNumberCardComponent_BaseFactory(t || NumberCardComponent); };
NumberCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NumberCardComponent, selectors: [["ngx-charts-number-card"]], inputs: { emptyColor: "emptyColor", innerPadding: "innerPadding", cardColor: "cardColor", bandColor: "bandColor", textColor: "textColor", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", designatedTotal: "designatedTotal" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 20, consts: [[3, "view", "showLegend", "animations"], [1, "number-card", "chart"], ["ngx-charts-card-series", "", 3, "colors", "cardColor", "bandColor", "textColor", "emptyColor", "data", "dims", "innerPadding", "valueFormatting", "labelFormatting", "animations", "select"]], template: function NumberCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵlistener("select", function NumberCardComponent_Template__svg_g_select_2_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(17, _c23, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("clickable", ctx.clickable);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("colors", ctx.colors)("cardColor", ctx.cardColor)("bandColor", ctx.bandColor)("textColor", ctx.textColor)("emptyColor", ctx.emptyColor)("data", ctx.data)("dims", ctx.dims)("innerPadding", ctx.innerPadding)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("animations", ctx.animations);
    } }, directives: [ChartComponent, CardSeriesComponent], styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;line-height:1em;overflow:hidden;pointer-events:none;text-align:left}ngx-charts-number-card .cell .trimmed-label p{margin:0;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap;width:100%}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}"], encapsulation: 2, changeDetection: 0 });
NumberCardComponent.propDecorators = {
    cardColor: [{ type: Input }],
    bandColor: [{ type: Input }],
    emptyColor: [{ type: Input }],
    innerPadding: [{ type: Input }],
    textColor: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    designatedTotal: [{ type: Input }]
};
const ɵNumberCardComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NumberCardComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberCardComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-number-card',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="number-card chart" [class.clickable]="clickable">
        <svg:g
          ngx-charts-card-series
          [colors]="colors"
          [cardColor]="cardColor"
          [bandColor]="bandColor"
          [textColor]="textColor"
          [emptyColor]="emptyColor"
          [data]="data"
          [dims]="dims"
          [innerPadding]="innerPadding"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;line-height:1em;overflow:hidden;pointer-events:none;text-align:left}ngx-charts-number-card .cell .trimmed-label p{margin:0;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap;width:100%}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}"]
            }]
    }], null, { emptyColor: [{
            type: Input
        }], innerPadding: [{
            type: Input
        }], cardColor: [{
            type: Input
        }], bandColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], designatedTotal: [{
            type: Input
        }] }); })();

class NumberCardModule {
}
NumberCardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NumberCardModule });
NumberCardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NumberCardModule_Factory(t) { return new (t || NumberCardModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NumberCardModule, { declarations: [CardComponent, CardSeriesComponent, NumberCardComponent], imports: [ChartCommonModule], exports: [CardComponent, CardSeriesComponent, NumberCardComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NumberCardModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [CardComponent, CardSeriesComponent, NumberCardComponent],
                exports: [CardComponent, CardSeriesComponent, NumberCardComponent]
            }]
    }], null, null); })();

class TreeMapCellComponent {
    constructor(element) {
        this.gradient = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.initialized = false;
        this.element = element.nativeElement;
    }
    ngOnChanges() {
        this.update();
        this.valueFormatting = this.valueFormatting || (value => value.toLocaleString());
        const labelFormatting = this.labelFormatting || (cell => escapeLabel(trimLabel(cell.label, 55)));
        const cellData = {
            data: this.data,
            label: this.label,
            value: this.value
        };
        this.formattedValue = this.valueFormatting(cellData.value);
        this.formattedLabel = labelFormatting(cellData);
        this.gradientId = 'grad' + id().toString();
        this.gradientUrl = `url(#${this.gradientId})`;
        this.gradientStops = this.getGradientStops();
    }
    update() {
        if (this.initialized) {
            this.animateToCurrentForm();
        }
        else {
            if (this.animations) {
                this.loadAnimation();
            }
            this.initialized = true;
        }
    }
    loadAnimation() {
        const node = select(this.element).select('.cell');
        node.attr('opacity', 0).attr('x', this.x).attr('y', this.y);
        this.animateToCurrentForm();
    }
    getTextColor() {
        return invertColor(this.fill);
    }
    animateToCurrentForm() {
        const node = select(this.element).select('.cell');
        if (this.animations) {
            node
                .transition()
                .duration(750)
                .attr('opacity', 1)
                .attr('x', this.x)
                .attr('y', this.y)
                .attr('width', this.width)
                .attr('height', this.height);
        }
        else {
            node.attr('opacity', 1).attr('x', this.x).attr('y', this.y).attr('width', this.width).attr('height', this.height);
        }
    }
    onClick() {
        this.select.emit(this.data);
    }
    getGradientStops() {
        return [
            {
                offset: 0,
                color: this.fill,
                opacity: 0.3
            },
            {
                offset: 100,
                color: this.fill,
                opacity: 1
            }
        ];
    }
}
TreeMapCellComponent.ɵfac = function TreeMapCellComponent_Factory(t) { return new (t || TreeMapCellComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TreeMapCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeMapCellComponent, selectors: [["g", "ngx-charts-tree-map-cell", ""]], inputs: { gradient: "gradient", animations: "animations", valueFormatting: "valueFormatting", data: "data", fill: "fill", x: "x", y: "y", width: "width", height: "height", label: "label", value: "value", valueType: "valueType", labelFormatting: "labelFormatting" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c44, decls: 4, vars: 9, consts: [[4, "ngIf"], [1, "cell", 3, "click"], ["class", "treemap-label", 3, "pointer-events", 4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", "orientation", "vertical", 3, "name", "stops"], [1, "treemap-label"], [1, "treemap-label", 3, "innerHTML"], ["class", "treemap-val", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "treemap-val", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "treemap-val", 3, "countTo", "valueFormatting"], [1, "treemap-val"]], template: function TreeMapCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵtemplate(1, TreeMapCellComponent__svg_defs_1_Template, 2, 2, "defs", 0);
        ɵngcc0.ɵɵelementStart(2, "rect", 1);
        ɵngcc0.ɵɵlistener("click", function TreeMapCellComponent_Template__svg_rect_click_2_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, TreeMapCellComponent__svg_foreignObject_3_Template, 6, 15, "foreignObject", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.gradient);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("cursor", "pointer");
        ɵngcc0.ɵɵattribute("fill", ctx.gradient ? ctx.gradientUrl : ctx.fill)("width", ctx.width)("height", ctx.height)("x", ctx.x)("y", ctx.y);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.width >= 70 && ctx.height >= 35);
    } }, directives: [ɵngcc1.NgIf, SvgLinearGradientComponent, CountUpDirective], encapsulation: 2, changeDetection: 0 });
TreeMapCellComponent.ctorParameters = () => [
    { type: ElementRef }
];
TreeMapCellComponent.propDecorators = {
    data: [{ type: Input }],
    fill: [{ type: Input }],
    x: [{ type: Input }],
    y: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    valueType: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    gradient: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeMapCellComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-tree-map-cell]',
                template: `
    <svg:g>
      <defs *ngIf="gradient">
        <svg:g ngx-charts-svg-linear-gradient orientation="vertical" [name]="gradientId" [stops]="gradientStops" />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        [attr.width]="width"
        [attr.height]="height"
        [attr.x]="x"
        [attr.y]="y"
        [style.cursor]="'pointer'"
        class="cell"
        (click)="onClick()"
      />
      <svg:foreignObject
        *ngIf="width >= 70 && height >= 35"
        [attr.x]="x"
        [attr.y]="y"
        [attr.width]="width"
        [attr.height]="height"
        class="treemap-label"
        [style.pointer-events]="'none'"
      >
        <xhtml:p [style.color]="getTextColor()" [style.height]="height + 'px'" [style.width]="width + 'px'">
          <xhtml:span class="treemap-label" [innerHTML]="formattedLabel"> </xhtml:span>
          <xhtml:br />
          <xhtml:span
            *ngIf="animations"
            class="treemap-val"
            ngx-charts-count-up
            [countTo]="value"
            [valueFormatting]="valueFormatting"
          >
          </xhtml:span>
          <xhtml:span *ngIf="!animations" class="treemap-val">
            {{ formattedValue }}
          </xhtml:span>
        </xhtml:p>
      </svg:foreignObject>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { gradient: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], valueFormatting: [{
            type: Input
        }], data: [{
            type: Input
        }], fill: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], valueType: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }] }); })();

class TreeMapCellSeriesComponent {
    constructor() {
        this.gradient = false;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.cells = this.getCells();
    }
    getCells() {
        return this.data.children
            .filter(d => {
            return d.depth === 1;
        })
            .map((d, index) => {
            const label = d.id;
            return {
                data: d.data,
                x: d.x0,
                y: d.y0,
                width: d.x1 - d.x0,
                height: d.y1 - d.y0,
                fill: this.colors.getColor(label),
                label,
                value: d.value,
                valueType: d.valueType
            };
        });
    }
    getTooltipText({ label, value }) {
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${value.toLocaleString()}</span>
    `;
    }
    onClick(data) {
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.label;
    }
}
TreeMapCellSeriesComponent.ɵfac = function TreeMapCellSeriesComponent_Factory(t) { return new (t || TreeMapCellSeriesComponent)(); };
TreeMapCellSeriesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeMapCellSeriesComponent, selectors: [["g", "ngx-charts-tree-map-cell-series", ""]], inputs: { gradient: "gradient", tooltipDisabled: "tooltipDisabled", animations: "animations", data: "data", dims: "dims", colors: "colors", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c45, decls: 1, vars: 2, consts: [["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "data", "x", "y", "width", "height", "fill", "label", "value", "valueType", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "data", "x", "y", "width", "height", "fill", "label", "value", "valueType", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select"]], template: function TreeMapCellSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TreeMapCellSeriesComponent__svg_g_0_Template, 1, 19, "g", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    } }, directives: [ɵngcc1.NgForOf, TreeMapCellComponent, TooltipDirective], encapsulation: 2, changeDetection: 0 });
TreeMapCellSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    dims: [{ type: Input }],
    colors: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    gradient: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeMapCellSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-tree-map-cell-series]',
                template: `
    <svg:g
      ngx-charts-tree-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [data]="c.data"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [label]="c.label"
      [value]="c.value"
      [valueType]="c.valueType"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [gradient]="gradient"
      [animations]="animations"
      (select)="onClick($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="c.data"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { gradient: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], data: [{
            type: Input
        }], dims: [{
            type: Input
        }], colors: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class TreeMapComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.tooltipDisabled = false;
        this.gradient = false;
        this.select = new EventEmitter();
        this.margin = [10, 10, 10, 10];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.domain = this.getDomain();
        this.treemap = treemap().size([this.dims.width, this.dims.height]);
        const rootNode = {
            name: 'root',
            value: 0,
            isRoot: true
        };
        const root = stratify()
            .id(d => {
            let label = d.name;
            if (label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label.toLocaleString();
            }
            return label;
        })
            .parentId(d => (d.isRoot ? null : 'root'))([rootNode, ...this.results])
            .sum(d => d.value);
        this.data = this.treemap(root);
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getDomain() {
        return this.results.map(d => d.name);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
}
TreeMapComponent.ɵfac = function TreeMapComponent_Factory(t) { return ɵTreeMapComponent_BaseFactory(t || TreeMapComponent); };
TreeMapComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TreeMapComponent, selectors: [["ngx-charts-tree-map"]], contentQueries: function TreeMapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { tooltipDisabled: "tooltipDisabled", gradient: "gradient", results: "results", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting" }, outputs: { select: "select" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 16, consts: [[3, "view", "showLegend", "animations"], [1, "tree-map", "chart"], ["ngx-charts-tree-map-cell-series", "", 3, "colors", "data", "dims", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "labelFormatting", "gradient", "animations", "select"]], template: function TreeMapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵlistener("select", function TreeMapComponent_Template__svg_g_select_2_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(13, _c23, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("colors", ctx.colors)("data", ctx.data)("dims", ctx.dims)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("gradient", ctx.gradient)("animations", ctx.animations);
    } }, directives: [ChartComponent, TreeMapCellSeriesComponent], styles: [".tree-map .treemap-val{display:inline-block;font-size:1.3em;padding-top:5px}.tree-map .treemap-label p{display:table-cell;line-height:1.2em;text-align:center;vertical-align:middle}"], encapsulation: 2, changeDetection: 0 });
TreeMapComponent.propDecorators = {
    results: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    gradient: [{ type: Input }],
    select: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }]
};
const ɵTreeMapComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TreeMapComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeMapComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-tree-map',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="tree-map chart">
        <svg:g
          ngx-charts-tree-map-cell-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [gradient]="gradient"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".tree-map .treemap-val{display:inline-block;font-size:1.3em;padding-top:5px}.tree-map .treemap-label p{display:table-cell;line-height:1.2em;text-align:center;vertical-align:middle}"]
            }]
    }], null, { tooltipDisabled: [{
            type: Input
        }], gradient: [{
            type: Input
        }], select: [{
            type: Output
        }], results: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();

class TreeMapModule {
}
TreeMapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeMapModule });
TreeMapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TreeMapModule_Factory(t) { return new (t || TreeMapModule)(); }, imports: [[ChartCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeMapModule, { declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent], imports: [ChartCommonModule], exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TreeMapModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent],
                exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent]
            }]
    }], null, null); })();

class LinearGaugeComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.margin = [10, 20, 10, 20];
        this.valueResizeScale = 1;
        this.unitsResizeScale = 1;
        this.valueTextTransform = '';
        this.valueTranslate = '';
        this.unitsTextTransform = '';
        this.unitsTranslate = '';
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.scaleText('value');
                this.scaleText('units');
            });
        }
    }
    update() {
        super.update();
        this.hasPreviousValue = this.previousValue !== undefined;
        this.max = Math.max(this.max, this.value);
        this.min = Math.min(this.min, this.value);
        if (this.hasPreviousValue) {
            this.max = Math.max(this.max, this.previousValue);
            this.min = Math.min(this.min, this.previousValue);
        }
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.valueDomain = this.getValueDomain();
        this.valueScale = this.getValueScale();
        this.displayValue = this.getDisplayValue();
        this.setColors();
        const xOffset = this.margin[3] + this.dims.width / 2;
        const yOffset = this.margin[0] + this.dims.height / 2;
        this.transform = `translate(${xOffset}, ${yOffset})`;
        this.transformLine = `translate(${this.margin[3] + this.valueScale(this.previousValue)}, ${yOffset})`;
        this.valueTranslate = `translate(0, -15)`;
        this.unitsTranslate = `translate(0, 15)`;
        if (isPlatformServer(this.platformId)) {
            this.scaleTextSSR('value');
            this.scaleTextSSR('units');
        }
        else {
            setTimeout(() => this.scaleText('value'), 50);
            setTimeout(() => this.scaleText('units'), 50);
        }
    }
    getValueDomain() {
        return [this.min, this.max];
    }
    getValueScale() {
        return scaleLinear().range([0, this.dims.width]).domain(this.valueDomain);
    }
    getDisplayValue() {
        if (this.valueFormatting) {
            return this.valueFormatting(this.value);
        }
        return this.value.toLocaleString();
    }
    scaleText(element, repeat = true) {
        let el;
        let resizeScale;
        if (element === 'value') {
            el = this.valueTextEl;
            resizeScale = this.valueResizeScale;
        }
        else {
            el = this.unitsTextEl;
            resizeScale = this.unitsResizeScale;
        }
        const { width, height } = el.nativeElement.getBoundingClientRect();
        if (width === 0 || height === 0)
            return;
        const oldScale = resizeScale;
        const availableWidth = this.dims.width;
        const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
        const resizeScaleWidth = Math.floor((availableWidth / (width / resizeScale)) * 100) / 100;
        const resizeScaleHeight = Math.floor((availableHeight / (height / resizeScale)) * 100) / 100;
        resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
        if (resizeScale !== oldScale) {
            if (element === 'value') {
                this.valueResizeScale = resizeScale;
                this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
            }
            else {
                this.unitsResizeScale = resizeScale;
                this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
            }
            this.cd.markForCheck();
            if (repeat && isPlatformBrowser(this.platformId)) {
                setTimeout(() => {
                    this.scaleText(element, false);
                }, 50);
            }
        }
    }
    scaleTextSSR(element) {
        let resizeScale = 1;
        const value = element === 'value' ? this.displayValue : this.units;
        const width = calculateTextWidth(VERDANA_FONT_WIDTHS_16_PX, value, 10);
        const height = 25;
        const availableWidth = this.dims.width;
        const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
        const resizeScaleWidth = Math.floor((availableWidth / (width / resizeScale)) * 100) / 100;
        const resizeScaleHeight = Math.floor((availableHeight / (height / resizeScale)) * 100) / 100;
        resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
        if (element === 'value') {
            this.valueResizeScale = resizeScale;
            this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
        }
        else {
            this.unitsResizeScale = resizeScale;
            this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
        }
        this.cd.markForCheck();
    }
    onClick() {
        this.select.emit({
            name: 'Value',
            value: this.value
        });
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', [this.value], this.customColors);
    }
}
LinearGaugeComponent.ɵfac = function LinearGaugeComponent_Factory(t) { return ɵLinearGaugeComponent_BaseFactory(t || LinearGaugeComponent); };
LinearGaugeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LinearGaugeComponent, selectors: [["ngx-charts-linear-gauge"]], viewQuery: function LinearGaugeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c46, true);
        ɵngcc0.ɵɵviewQuery(_c47, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.valueTextEl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.unitsTextEl = _t.first);
    } }, inputs: { min: "min", max: "max", value: "value", units: "units", previousValue: "previousValue", valueFormatting: "valueFormatting" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 15, vars: 38, consts: [[3, "view", "showLegend", "animations", "click"], [1, "linear-gauge", "chart"], ["ngx-charts-bar", "", 1, "background-bar", 3, "width", "height", "x", "y", "data", "orientation", "roundEdges", "animations"], ["ngx-charts-bar", "", 3, "width", "height", "x", "y", "fill", "data", "orientation", "roundEdges", "animations"], ["x1", "0", "y1", "5", "x2", "0", "y2", "15", 4, "ngIf"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15", 4, "ngIf"], ["alignment-baseline", "after-edge", 1, "value"], ["valueTextEl", ""], ["alignment-baseline", "before-edge", 1, "units"], ["unitsTextEl", ""], ["x1", "0", "y1", "5", "x2", "0", "y2", "15"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15"]], template: function LinearGaugeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("click", function LinearGaugeComponent_Template_ngx_charts_chart_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelement(2, "g", 2);
        ɵngcc0.ɵɵelement(3, "g", 3);
        ɵngcc0.ɵɵtemplate(4, LinearGaugeComponent__svg_line_4_Template, 1, 2, "line", 4);
        ɵngcc0.ɵɵtemplate(5, LinearGaugeComponent__svg_line_5_Template, 1, 2, "line", 5);
        ɵngcc0.ɵɵelementStart(6, "g");
        ɵngcc0.ɵɵelementStart(7, "g");
        ɵngcc0.ɵɵelementStart(8, "text", 6, 7);
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "g");
        ɵngcc0.ɵɵelementStart(12, "text", 8, 9);
        ɵngcc0.ɵɵtext(14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(33, _c23, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("width", ctx.dims.width)("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("data", ɵngcc0.ɵɵpureFunction0(36, _c48))("orientation", "horizontal")("roundEdges", true)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("width", ctx.valueScale(ctx.value))("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("fill", ctx.colors.getColor(ctx.units))("data", ɵngcc0.ɵɵpureFunction0(37, _c48))("orientation", "horizontal")("roundEdges", true)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasPreviousValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasPreviousValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.valueTranslate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("text-anchor", "middle");
        ɵngcc0.ɵɵattribute("transform", ctx.valueTextTransform);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.displayValue, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.unitsTranslate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("text-anchor", "middle");
        ɵngcc0.ɵɵattribute("transform", ctx.unitsTextTransform);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.units, " ");
    } }, directives: [ChartComponent, BarComponent, ɵngcc1.NgIf], styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:rgba(0,0,0,.05)}.linear-gauge .units{fill:#666}"], encapsulation: 2, changeDetection: 0 });
LinearGaugeComponent.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    value: [{ type: Input }],
    units: [{ type: Input }],
    previousValue: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    valueTextEl: [{ type: ViewChild, args: ['valueTextEl',] }],
    unitsTextEl: [{ type: ViewChild, args: ['unitsTextEl',] }]
};
const ɵLinearGaugeComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(LinearGaugeComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LinearGaugeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-linear-gauge',
                template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations" (click)="onClick()">
      <svg:g class="linear-gauge chart">
        <svg:g
          ngx-charts-bar
          class="background-bar"
          [width]="dims.width"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [data]="{}"
          [orientation]="'horizontal'"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>
        <svg:g
          ngx-charts-bar
          [width]="valueScale(value)"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [fill]="colors.getColor(units)"
          [data]="{}"
          [orientation]="'horizontal'"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="5"
          x2="0"
          y2="15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="-5"
          x2="0"
          y2="-15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:g [attr.transform]="transform">
          <svg:g [attr.transform]="valueTranslate">
            <svg:text
              #valueTextEl
              class="value"
              [style.textAnchor]="'middle'"
              [attr.transform]="valueTextTransform"
              alignment-baseline="after-edge"
            >
              {{ displayValue }}
            </svg:text>
          </svg:g>

          <svg:g [attr.transform]="unitsTranslate">
            <svg:text
              #unitsTextEl
              class="units"
              [style.textAnchor]="'middle'"
              [attr.transform]="unitsTextTransform"
              alignment-baseline="before-edge"
            >
              {{ units }}
            </svg:text>
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:rgba(0,0,0,.05)}.linear-gauge .units{fill:#666}"]
            }]
    }], null, { min: [{
            type: Input
        }], max: [{
            type: Input
        }], value: [{
            type: Input
        }], units: [{
            type: Input
        }], previousValue: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], valueTextEl: [{
            type: ViewChild,
            args: ['valueTextEl']
        }], unitsTextEl: [{
            type: ViewChild,
            args: ['unitsTextEl']
        }] }); })();

class GaugeComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = 'right';
        this.min = 0;
        this.max = 100;
        this.bigSegments = 10;
        this.smallSegments = 5;
        this.showAxis = true;
        this.startAngle = -120;
        this.angleSpan = 240;
        this.activeEntries = [];
        this.tooltipDisabled = false;
        this.showText = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.resizeScale = 1;
        this.rotation = '';
        this.textTransform = 'scale(1, 1)';
        this.cornerRadius = 10;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => this.scaleText());
    }
    update() {
        super.update();
        if (!this.showAxis) {
            if (!this.margin) {
                this.margin = [10, 20, 10, 20];
            }
        }
        else {
            if (!this.margin) {
                this.margin = [60, 100, 60, 100];
            }
        }
        // make the starting angle positive
        if (this.startAngle < 0) {
            this.startAngle = (this.startAngle % 360) + 360;
        }
        this.angleSpan = Math.min(this.angleSpan, 360);
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showLegend: this.legend,
            legendPosition: this.legendPosition
        });
        this.domain = this.getDomain();
        this.valueDomain = this.getValueDomain();
        this.valueScale = this.getValueScale();
        this.displayValue = this.getDisplayValue();
        this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2;
        this.arcs = this.getArcs();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        const xOffset = this.margin[3] + this.dims.width / 2;
        const yOffset = this.margin[0] + this.dims.height / 2;
        this.transform = `translate(${xOffset}, ${yOffset})`;
        this.rotation = `rotate(${this.startAngle})`;
        setTimeout(() => this.scaleText(), 50);
    }
    getArcs() {
        const arcs = [];
        const availableRadius = this.outerRadius * 0.7;
        const radiusPerArc = Math.min(availableRadius / this.results.length, 10);
        const arcWidth = radiusPerArc * 0.7;
        this.textRadius = this.outerRadius - this.results.length * radiusPerArc;
        this.cornerRadius = Math.floor(arcWidth / 2);
        let i = 0;
        for (const d of this.results) {
            const outerRadius = this.outerRadius - i * radiusPerArc;
            const innerRadius = outerRadius - arcWidth;
            const backgroundArc = {
                endAngle: (this.angleSpan * Math.PI) / 180,
                innerRadius,
                outerRadius,
                data: {
                    value: this.max,
                    name: d.name
                }
            };
            const valueArc = {
                endAngle: (Math.min(this.valueScale(d.value), this.angleSpan) * Math.PI) / 180,
                innerRadius,
                outerRadius,
                data: {
                    value: d.value,
                    name: d.name
                }
            };
            const arc = {
                backgroundArc,
                valueArc
            };
            arcs.push(arc);
            i++;
        }
        return arcs;
    }
    getDomain() {
        return this.results.map(d => d.name);
    }
    getValueDomain() {
        const values = this.results.map(d => d.value);
        const dataMin = Math.min(...values);
        const dataMax = Math.max(...values);
        if (this.min !== undefined) {
            this.min = Math.min(this.min, dataMin);
        }
        else {
            this.min = dataMin;
        }
        if (this.max !== undefined) {
            this.max = Math.max(this.max, dataMax);
        }
        else {
            this.max = dataMax;
        }
        return [this.min, this.max];
    }
    getValueScale() {
        return scaleLinear().range([0, this.angleSpan]).nice().domain(this.valueDomain);
    }
    getDisplayValue() {
        const value = this.results.map(d => d.value).reduce((a, b) => a + b, 0);
        if (this.textValue && 0 !== this.textValue.length) {
            return this.textValue.toLocaleString();
        }
        if (this.valueFormatting) {
            return this.valueFormatting(value);
        }
        return value.toLocaleString();
    }
    scaleText(repeat = true) {
        if (!this.showText) {
            return;
        }
        const { width } = this.textEl.nativeElement.getBoundingClientRect();
        const oldScale = this.resizeScale;
        if (width === 0) {
            this.resizeScale = 1;
        }
        else {
            const availableSpace = this.textRadius;
            this.resizeScale = Math.floor((availableSpace / (width / this.resizeScale)) * 100) / 100;
        }
        if (this.resizeScale !== oldScale) {
            this.textTransform = `scale(${this.resizeScale}, ${this.resizeScale})`;
            this.cd.markForCheck();
            if (repeat) {
                setTimeout(() => this.scaleText(false), 50);
            }
        }
    }
    onClick(data) {
        this.select.emit(data);
    }
    getLegendOptions() {
        return {
            scaleType: 'ordinal',
            colors: this.colors,
            domain: this.domain,
            title: this.legendTitle,
            position: this.legendPosition
        };
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, 'ordinal', this.domain, this.customColors);
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
    trackBy(index, item) {
        return item.valueArc.data.name;
    }
}
GaugeComponent.ɵfac = function GaugeComponent_Factory(t) { return ɵGaugeComponent_BaseFactory(t || GaugeComponent); };
GaugeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GaugeComponent, selectors: [["ngx-charts-gauge"]], contentQueries: function GaugeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c21, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function GaugeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c41, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", min: "min", max: "max", bigSegments: "bigSegments", smallSegments: "smallSegments", showAxis: "showAxis", startAngle: "startAngle", angleSpan: "angleSpan", activeEntries: "activeEntries", tooltipDisabled: "tooltipDisabled", showText: "showText", margin: "margin", textValue: "textValue", units: "units", results: "results", axisTickFormatting: "axisTickFormatting", valueFormatting: "valueFormatting" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "gauge", "chart"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting", 4, "ngIf"], ["alignment-baseline", "central", 3, "textAnchor", 4, "ngIf"], ["ngx-charts-gauge-arc", "", 3, "backgroundArc", "valueArc", "cornerRadius", "colors", "isActive", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "animations", "select", "activate", "deactivate"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting"], ["alignment-baseline", "central"], ["textEl", ""], ["x", "0", "dy", "0"], ["x", "0", "dy", "1.2em"]], template: function GaugeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        ɵngcc0.ɵɵlistener("legendLabelClick", function GaugeComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵtemplate(2, GaugeComponent__svg_g_2_Template, 2, 10, "g", 2);
        ɵngcc0.ɵɵtemplate(3, GaugeComponent__svg_g_3_Template, 1, 9, "g", 3);
        ɵngcc0.ɵɵtemplate(4, GaugeComponent__svg_text_4_Template, 6, 5, "text", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("view", ɵngcc0.ɵɵpureFunction2(10, _c23, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("transform", ctx.transform);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showAxis);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showText);
    } }, directives: function () { return [ChartComponent, ɵngcc1.NgForOf, ɵngcc1.NgIf, GaugeArcComponent, GaugeAxisComponent]; }, styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".gauge .background-arc path{fill:rgba(0,0,0,.05)}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{fill:#666;font-size:12px;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}"], encapsulation: 2, changeDetection: 0 });
GaugeComponent.propDecorators = {
    legend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    legendPosition: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    textValue: [{ type: Input }],
    units: [{ type: Input }],
    bigSegments: [{ type: Input }],
    smallSegments: [{ type: Input }],
    results: [{ type: Input }],
    showAxis: [{ type: Input }],
    startAngle: [{ type: Input }],
    angleSpan: [{ type: Input }],
    activeEntries: [{ type: Input }],
    axisTickFormatting: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    showText: [{ type: Input }],
    margin: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    tooltipTemplate: [{ type: ContentChild, args: ['tooltipTemplate',] }],
    textEl: [{ type: ViewChild, args: ['textEl',] }]
};
const ɵGaugeComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(GaugeComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GaugeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-gauge',
                template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g [attr.transform]="transform" class="gauge chart">
        <svg:g *ngFor="let arc of arcs; trackBy: trackBy" [attr.transform]="rotation">
          <svg:g
            ngx-charts-gauge-arc
            [backgroundArc]="arc.backgroundArc"
            [valueArc]="arc.valueArc"
            [cornerRadius]="cornerRadius"
            [colors]="colors"
            [isActive]="isActive(arc.valueArc.data)"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [valueFormatting]="valueFormatting"
            [animations]="animations"
            (select)="onClick($event)"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          ></svg:g>
        </svg:g>

        <svg:g
          ngx-charts-gauge-axis
          *ngIf="showAxis"
          [bigSegments]="bigSegments"
          [smallSegments]="smallSegments"
          [min]="min"
          [max]="max"
          [radius]="outerRadius"
          [angleSpan]="angleSpan"
          [valueScale]="valueScale"
          [startAngle]="startAngle"
          [tickFormatting]="axisTickFormatting"
        ></svg:g>

        <svg:text
          #textEl
          *ngIf="showText"
          [style.textAnchor]="'middle'"
          [attr.transform]="textTransform"
          alignment-baseline="central"
        >
          <tspan x="0" dy="0">{{ displayValue }}</tspan>
          <tspan x="0" dy="1.2em">{{ units }}</tspan>
        </svg:text>
      </svg:g>
    </ngx-charts-chart>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus{outline:none}.ngx-charts .arc.hidden,.ngx-charts .bar.hidden,.ngx-charts .card.hidden,.ngx-charts .cell.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{opacity:.2;transition:opacity .1s ease-in-out}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{fill:none;stroke:#ddd;stroke-width:1}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-dasharray:5;stroke-dashoffset:5;stroke-width:1}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill:#000;fill-opacity:.05}.ngx-charts .gridline-path-dotted{fill:none;stroke:#ddd;stroke-dasharray:1,20;stroke-dashoffset:3;stroke-width:1}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}", ".gauge .background-arc path{fill:rgba(0,0,0,.05)}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{fill:#666;font-size:12px;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}"]
            }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], bigSegments: [{
            type: Input
        }], smallSegments: [{
            type: Input
        }], showAxis: [{
            type: Input
        }], startAngle: [{
            type: Input
        }], angleSpan: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showText: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], margin: [{
            type: Input
        }], textValue: [{
            type: Input
        }], units: [{
            type: Input
        }], results: [{
            type: Input
        }], axisTickFormatting: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], textEl: [{
            type: ViewChild,
            args: ['textEl']
        }] }); })();

class GaugeArcComponent {
    constructor() {
        this.isActive = false;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    tooltipText(arc) {
        const label = formatLabel(arc.data.name);
        let val;
        if (this.valueFormatting) {
            val = this.valueFormatting(arc.data.value);
        }
        else {
            val = formatLabel(arc.data.value);
        }
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
}
GaugeArcComponent.ɵfac = function GaugeArcComponent_Factory(t) { return new (t || GaugeArcComponent)(); };
GaugeArcComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GaugeArcComponent, selectors: [["g", "ngx-charts-gauge-arc", ""]], inputs: { isActive: "isActive", tooltipDisabled: "tooltipDisabled", animations: "animations", backgroundArc: "backgroundArc", valueArc: "valueArc", cornerRadius: "cornerRadius", colors: "colors", valueFormatting: "valueFormatting", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, attrs: _c49, decls: 2, vars: 23, consts: [["ngx-charts-pie-arc", "", 1, "background-arc", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "data", "animate", "pointerEvents"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "fill", "data", "animate", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function GaugeArcComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelement(0, "g", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵlistener("select", function GaugeArcComponent_Template__svg_g_select_1_listener($event) { return ctx.select.emit($event); })("activate", function GaugeArcComponent_Template__svg_g_activate_1_listener($event) { return ctx.activate.emit($event); })("deactivate", function GaugeArcComponent_Template__svg_g_deactivate_1_listener($event) { return ctx.deactivate.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("startAngle", 0)("endAngle", ctx.backgroundArc.endAngle)("innerRadius", ctx.backgroundArc.innerRadius)("outerRadius", ctx.backgroundArc.outerRadius)("cornerRadius", ctx.cornerRadius)("data", ctx.backgroundArc.data)("animate", false)("pointerEvents", false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("startAngle", 0)("endAngle", ctx.valueArc.endAngle)("innerRadius", ctx.valueArc.innerRadius)("outerRadius", ctx.valueArc.outerRadius)("cornerRadius", ctx.cornerRadius)("fill", ctx.colors.getColor(ctx.valueArc.data.name))("data", ctx.valueArc.data)("animate", ctx.animations)("isActive", ctx.isActive)("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", ctx.tooltipTemplate ? undefined : ctx.tooltipText(ctx.valueArc))("tooltipTemplate", ctx.tooltipTemplate)("tooltipContext", ctx.valueArc.data);
    } }, directives: [PieArcComponent, TooltipDirective], encapsulation: 2, changeDetection: 0 });
GaugeArcComponent.propDecorators = {
    backgroundArc: [{ type: Input }],
    valueArc: [{ type: Input }],
    cornerRadius: [{ type: Input }],
    colors: [{ type: Input }],
    isActive: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GaugeArcComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-gauge-arc]',
                template: `
    <svg:g
      ngx-charts-pie-arc
      class="background-arc"
      [startAngle]="0"
      [endAngle]="backgroundArc.endAngle"
      [innerRadius]="backgroundArc.innerRadius"
      [outerRadius]="backgroundArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [data]="backgroundArc.data"
      [animate]="false"
      [pointerEvents]="false"
    ></svg:g>
    <svg:g
      ngx-charts-pie-arc
      [startAngle]="0"
      [endAngle]="valueArc.endAngle"
      [innerRadius]="valueArc.innerRadius"
      [outerRadius]="valueArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [fill]="colors.getColor(valueArc.data.name)"
      [data]="valueArc.data"
      [animate]="animations"
      [isActive]="isActive"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(valueArc)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="valueArc.data"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { isActive: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], backgroundArc: [{
            type: Input
        }], valueArc: [{
            type: Input
        }], cornerRadius: [{
            type: Input
        }], colors: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }] }); })();

class GaugeAxisComponent {
    constructor() {
        this.rotate = '';
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.rotationAngle = -90 + this.startAngle;
        this.rotate = `rotate(${this.rotationAngle})`;
        this.ticks = this.getTicks();
    }
    getTicks() {
        const bigTickSegment = this.angleSpan / this.bigSegments;
        const smallTickSegment = bigTickSegment / this.smallSegments;
        const tickLength = 20;
        const ticks = {
            big: [],
            small: []
        };
        const startDistance = this.radius + 10;
        const textDist = startDistance + tickLength + 10;
        for (let i = 0; i <= this.bigSegments; i++) {
            const angleDeg = i * bigTickSegment;
            const angle = (angleDeg * Math.PI) / 180;
            const textAnchor = this.getTextAnchor(angleDeg);
            let skip = false;
            if (i === 0 && this.angleSpan === 360) {
                skip = true;
            }
            if (!skip) {
                let text = Number.parseFloat(this.valueScale.invert(angleDeg).toString()).toLocaleString();
                if (this.tickFormatting) {
                    text = this.tickFormatting(text);
                }
                ticks.big.push({
                    line: this.getTickPath(startDistance, tickLength, angle),
                    textAnchor,
                    text,
                    textTransform: `
            translate(${textDist * Math.cos(angle)}, ${textDist * Math.sin(angle)}) rotate(${-this.rotationAngle})
          `
                });
            }
            if (i === this.bigSegments) {
                continue;
            }
            for (let j = 1; j <= this.smallSegments; j++) {
                const smallAngleDeg = angleDeg + j * smallTickSegment;
                const smallAngle = (smallAngleDeg * Math.PI) / 180;
                ticks.small.push({
                    line: this.getTickPath(startDistance, tickLength / 2, smallAngle)
                });
            }
        }
        return ticks;
    }
    getTextAnchor(angle) {
        // [0, 45] = 'middle';
        // [46, 135] = 'start';
        // [136, 225] = 'middle';
        // [226, 315] = 'end';
        angle = (this.startAngle + angle) % 360;
        let textAnchor = 'middle';
        if (angle > 45 && angle <= 135) {
            textAnchor = 'start';
        }
        else if (angle > 225 && angle <= 315) {
            textAnchor = 'end';
        }
        return textAnchor;
    }
    getTickPath(startDistance, tickLength, angle) {
        const y1 = startDistance * Math.sin(angle);
        const y2 = (startDistance + tickLength) * Math.sin(angle);
        const x1 = startDistance * Math.cos(angle);
        const x2 = (startDistance + tickLength) * Math.cos(angle);
        const points = [
            { x: x1, y: y1 },
            { x: x2, y: y2 }
        ];
        const lineGenerator = line()
            .x(d => d.x)
            .y(d => d.y);
        return lineGenerator(points);
    }
}
GaugeAxisComponent.ɵfac = function GaugeAxisComponent_Factory(t) { return new (t || GaugeAxisComponent)(); };
GaugeAxisComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GaugeAxisComponent, selectors: [["g", "ngx-charts-gauge-axis", ""]], inputs: { bigSegments: "bigSegments", smallSegments: "smallSegments", min: "min", max: "max", angleSpan: "angleSpan", startAngle: "startAngle", radius: "radius", valueScale: "valueScale", tickFormatting: "tickFormatting" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c50, decls: 4, vars: 4, consts: [["class", "gauge-tick gauge-tick-large", 4, "ngFor", "ngForOf"], ["class", "gauge-tick gauge-tick-small", 4, "ngFor", "ngForOf"], [1, "gauge-tick", "gauge-tick-large"], ["alignment-baseline", "central"], [1, "gauge-tick", "gauge-tick-small"]], template: function GaugeAxisComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "g");
        ɵngcc0.ɵɵtemplate(1, GaugeAxisComponent__svg_g_1_Template, 2, 1, "g", 0);
        ɵngcc0.ɵɵtemplate(2, GaugeAxisComponent__svg_g_2_Template, 3, 4, "g", 0);
        ɵngcc0.ɵɵtemplate(3, GaugeAxisComponent__svg_g_3_Template, 2, 1, "g", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("transform", ctx.rotate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks.big);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks.big);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.ticks.small);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
GaugeAxisComponent.propDecorators = {
    bigSegments: [{ type: Input }],
    smallSegments: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    angleSpan: [{ type: Input }],
    startAngle: [{ type: Input }],
    radius: [{ type: Input }],
    valueScale: [{ type: Input }],
    tickFormatting: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GaugeAxisComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-gauge-axis]',
                template: `
    <svg:g [attr.transform]="rotate">
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:text
          [style.textAnchor]="tick.textAnchor"
          [attr.transform]="tick.textTransform"
          alignment-baseline="central"
        >
          {{ tick.text }}
        </svg:text>
      </svg:g>
      <svg:g *ngFor="let tick of ticks.small" class="gauge-tick gauge-tick-small">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { bigSegments: [{
            type: Input
        }], smallSegments: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], angleSpan: [{
            type: Input
        }], startAngle: [{
            type: Input
        }], radius: [{
            type: Input
        }], valueScale: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }] }); })();

class GaugeModule {
}
GaugeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GaugeModule });
GaugeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GaugeModule_Factory(t) { return new (t || GaugeModule)(); }, imports: [[ChartCommonModule, PieChartModule, BarChartModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GaugeModule, { declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent], imports: [ChartCommonModule, PieChartModule, BarChartModule], exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GaugeModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule, PieChartModule, BarChartModule],
                declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent],
                exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent]
            }]
    }], null, null); })();

// The export is needed here to generate a valid polyfills.metadata.json file
function ngxChartsPolyfills() {
    // IE11 fix
    // Ref: https://github.com/swimlane/ngx-charts/issues/386
    if (typeof SVGElement !== 'undefined' && typeof SVGElement.prototype.contains === 'undefined') {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }
}

class NgxChartsModule {
    constructor() {
        ngxChartsPolyfills();
    }
}
NgxChartsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxChartsModule });
NgxChartsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxChartsModule_Factory(t) { return new (t || NgxChartsModule)(); }, imports: [ChartCommonModule, AreaChartModule, BarChartModule, BubbleChartModule, HeatMapModule, LineChartModule, PolarChartModule, NumberCardModule, PieChartModule, TreeMapModule, GaugeModule] });
NgxChartsModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxChartsModule, { exports: [ChartCommonModule, AreaChartModule, BarChartModule, BubbleChartModule, HeatMapModule, LineChartModule, PolarChartModule, NumberCardModule, PieChartModule, TreeMapModule, GaugeModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxChartsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ChartCommonModule,
                    AreaChartModule,
                    BarChartModule,
                    BubbleChartModule,
                    HeatMapModule,
                    LineChartModule,
                    PolarChartModule,
                    NumberCardModule,
                    PieChartModule,
                    TreeMapModule,
                    GaugeModule
                ]
            }]
    }], function () { return []; }, null); })();

function tickFormat(fieldType, groupByType) {
    return function (label) {
        if (label === 'No Value' || label === 'Other') {
            return label;
        }
        if (fieldType === 'date' && groupByType === 'groupBy') {
            const formatter = timeFormat('MM/DD/YYYY');
            return formatter(label);
        }
        return label.toString();
    };
}

/*
 * Public API Surface of ngx-charts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdvancedLegendComponent, AdvancedPieChartComponent, AlignmentTypes, AreaChartComponent, AreaChartModule, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaComponent, AreaSeriesComponent, AxesModule, AxisLabelComponent, BarChartModule, BarComponent, BarHorizontal2DComponent, BarHorizontalComponent, BarHorizontalNormalizedComponent, BarHorizontalStackedComponent, BarLabelComponent, BarVertical2DComponent, BarVerticalComponent, BarVerticalNormalizedComponent, BarVerticalStackedComponent, BaseChartComponent, BubbleChartComponent, BubbleChartModule, BubbleSeriesComponent, CardComponent, CardSeriesComponent, ChartCommonModule, ChartComponent, CircleComponent, CircleSeriesComponent, ColorHelper, CountUpDirective, D0Types, GaugeArcComponent, GaugeAxisComponent, GaugeComponent, GaugeModule, GridPanelComponent, GridPanelSeriesComponent, HeatCellSeriesComponent, HeatMapCellComponent, HeatMapComponent, HeatMapModule, LegendComponent, LegendEntryComponent, LineChartComponent, LineChartModule, LineComponent, LineSeriesComponent, LinearGaugeComponent, NgxChartsModule, NumberCardComponent, NumberCardModule, PieArcComponent, PieChartComponent, PieChartModule, PieGridComponent, PieGridSeriesComponent, PieLabelComponent, PieSeriesComponent, PlacementTypes, PolarChartComponent, PolarChartModule, PolarSeriesComponent, ScaleLegendComponent, SeriesHorizontal, SeriesVerticalComponent, ShowTypes, StyleTypes, SvgLinearGradientComponent, SvgRadialGradientComponent, Timeline, TooltipArea, TooltipContentComponent, TooltipDirective, TooltipModule, TooltipService, TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent, TreeMapModule, VisibilityObserver, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent, calculateViewDimensions, colorSets, count, decimalChecker, escapeLabel, formatLabel, getDomain, getScale, getScaleType, getUniqueXDomainValues, gridLayout, gridSize, hexToRgb, id, invertColor, reduceTicks, shadeRGBColor, sortByDomain, sortByTime, sortLinear, throttle, throttleable, tickFormat, trimLabel, InjectionRegisteryService as ɵa, InjectionService as ɵb };

//# sourceMappingURL=swimlane-ngx-charts.js.map