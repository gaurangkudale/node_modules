import { Component, Inject, forwardRef, ViewContainerRef, ChangeDetectorRef, Input, ContentChildren, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ViewChild, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { DomHandler } from 'primeng/dom';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/tooltip';

function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabPanel_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
} }
function TabPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", !ctx_r0.selected);
    ɵngcc0.ɵɵattribute("id", ctx_r0.id)("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
} }
const _c0 = ["*"];
const _c1 = ["navbar"];
const _c2 = ["inkbar"];
function TabView_ng_template_3_li_0_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.leftIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabView_ng_template_3_li_0_ng_container_2_span_1_Template, 1, 1, "span", 13);
    ɵngcc0.ɵɵelementStart(2, "span", 14);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_ng_container_2_span_4_Template, 1, 1, "span", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.leftIcon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(tab_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.rightIcon);
} }
function TabView_ng_template_3_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function TabView_ng_template_3_li_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 18);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_span_4_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const tab_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.close($event, tab_r3); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
function TabView_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵelementStart(1, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabView_ng_template_3_li_0_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.open($event, tab_r3); })("keydown.enter", function TabView_ng_template_3_li_0_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.open($event, tab_r3); });
    ɵngcc0.ɵɵtemplate(2, TabView_ng_template_3_li_0_ng_container_2_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_li_0_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵtemplate(4, TabView_ng_template_3_li_0_span_4_Template, 1, 0, "span", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(tab_r3.headerStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c3, tab_r3.selected, tab_r3.disabled))("ngStyle", tab_r3.headerStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("pTooltip", tab_r3.tooltip)("tooltipPosition", tab_r3.tooltipPosition)("positionStyle", tab_r3.tooltipPositionStyle)("tooltipStyleClass", tab_r3.tooltipStyleClass);
    ɵngcc0.ɵɵattribute("id", tab_r3.id + "-label")("aria-selected", tab_r3.selected)("aria-controls", tab_r3.id)("aria-selected", tab_r3.selected)("tabindex", tab_r3.disabled ? null : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tab_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tab_r3.closable);
} }
function TabView_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabView_ng_template_3_li_0_Template, 5, 19, "li", 7);
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", !tab_r3.closed);
} }
let idx = 0;
class TabPanel {
    constructor(tabView, viewContainer, cd) {
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.cache = true;
        this.tooltipPosition = 'top';
        this.tooltipPositionStyle = 'absolute';
        this.id = `p-tabpanel-${idx++}`;
        this.tabView = tabView;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        if (!this.loaded) {
            this.cd.detectChanges();
        }
        this.loaded = true;
    }
    get disabled() {
        return this._disabled;
    }
    ;
    set disabled(disabled) {
        this._disabled = disabled;
        this.tabView.cd.markForCheck();
    }
    ngOnDestroy() {
        this.view = null;
    }
}
TabPanel.ɵfac = function TabPanel_Factory(t) { return new (t || TabPanel)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => TabView)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabPanel, selectors: [["p-tabPanel"]], contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", tooltipPosition: "tooltipPosition", tooltipPositionStyle: "tooltipPositionStyle", selected: "selected", disabled: "disabled", header: "header", closable: "closable", headerStyle: "headerStyle", headerStyleClass: "headerStyleClass", leftIcon: "leftIcon", rightIcon: "rightIcon", tooltip: "tooltip", tooltipStyleClass: "tooltipStyleClass" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function TabPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabPanel_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
TabPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => TabView),] }] },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TabPanel.propDecorators = {
    header: [{ type: Input }],
    closable: [{ type: Input }],
    headerStyle: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    leftIcon: [{ type: Input }],
    rightIcon: [{ type: Input }],
    cache: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipPosition: [{ type: Input }],
    tooltipPositionStyle: [{ type: Input }],
    tooltipStyleClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabPanel, [{
        type: Component,
        args: [{
                selector: 'p-tabPanel',
                template: `
        <div [attr.id]="id" class="p-tabview-panel" [hidden]="!selected"
            role="tabpanel" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id + '-label'" *ngIf="!closed">
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => TabView)]
            }] }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: Input
        }], tooltipPosition: [{
            type: Input
        }], tooltipPositionStyle: [{
            type: Input
        }], selected: [{
            type: Input
        }], disabled: [{
            type: Input
        }], header: [{
            type: Input
        }], closable: [{
            type: Input
        }], headerStyle: [{
            type: Input
        }], headerStyleClass: [{
            type: Input
        }], leftIcon: [{
            type: Input
        }], rightIcon: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipStyleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class TabView {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.orientation = 'top';
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.activeIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabPanels.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    ngAfterViewChecked() {
        if (this.tabChanged) {
            this.updateInkBar();
            this.tabChanged = false;
        }
    }
    initTabs() {
        this.tabs = this.tabPanels.toArray();
        let selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            if (this.activeIndex != null && this.tabs.length > this.activeIndex)
                this.tabs[this.activeIndex].selected = true;
            else
                this.tabs[0].selected = true;
            this.tabChanged = true;
        }
        this.cd.markForCheck();
    }
    open(event, tab) {
        if (tab.disabled) {
            if (event) {
                event.preventDefault();
            }
            return;
        }
        if (!tab.selected) {
            let selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            this.tabChanged = true;
            tab.selected = true;
            let selectedTabIndex = this.findTabIndex(tab);
            this.preventActiveIndexPropagation = true;
            this.activeIndexChange.emit(selectedTabIndex);
            this.onChange.emit({ originalEvent: event, index: selectedTabIndex });
        }
        if (event) {
            event.preventDefault();
        }
    }
    close(event, tab) {
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: () => {
                    this.closeTab(tab);
                }
            });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    }
    closeTab(tab) {
        if (tab.disabled) {
            return;
        }
        if (tab.selected) {
            this.tabChanged = true;
            tab.selected = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    }
    findSelectedTab() {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    }
    findTabIndex(tab) {
        let index = -1;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }
        if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
            this.findSelectedTab().selected = false;
            this.tabs[this._activeIndex].selected = true;
        }
    }
    updateInkBar() {
        let tabHeader = DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
        this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
    }
}
TabView.ɵfac = function TabView_Factory(t) { return new (t || TabView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabView, selectors: [["p-tabView"]], contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabPanel, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabPanels = _t);
    } }, viewQuery: function TabView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { orientation: "orientation", activeIndex: "activeIndex", style: "style", styleClass: "styleClass", controlClose: "controlClose" }, outputs: { onChange: "onChange", onClose: "onClose", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c0, decls: 8, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-tabview-ink-bar"], ["inkbar", ""], [1, "p-tabview-panels"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown.enter"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tabview-close pi pi-times", 3, "click", 4, "ngIf"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-close", "pi", "pi-times", 3, "click"]], template: function TabView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabView_ng_template_3_Template, 1, 1, "ng-template", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabview p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc3.Tooltip, ɵngcc1.NgTemplateOutlet], styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"], encapsulation: 2, changeDetection: 0 });
TabView.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TabView.propDecorators = {
    orientation: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    controlClose: [{ type: Input }],
    navbar: [{ type: ViewChild, args: ['navbar',] }],
    inkbar: [{ type: ViewChild, args: ['inkbar',] }],
    tabPanels: [{ type: ContentChildren, args: [TabPanel,] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    activeIndexChange: [{ type: Output }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabView, [{
        type: Component,
        args: [{
                selector: 'p-tabView',
                template: `
        <div [ngClass]="'p-tabview p-component'" [ngStyle]="style" [class]="styleClass">
            <ul #navbar class="p-tabview-nav" role="tablist">
                <ng-template ngFor let-tab [ngForOf]="tabs">
                    <li role="presentation" [ngClass]="{'p-highlight': tab.selected, 'p-disabled': tab.disabled}" [ngStyle]="tab.headerStyle" [class]="tab.headerStyleClass" *ngIf="!tab.closed">
                        <a role="tab" class="p-tabview-nav-link" [attr.id]="tab.id + '-label'" [attr.aria-selected]="tab.selected" [attr.aria-controls]="tab.id" [pTooltip]="tab.tooltip" [tooltipPosition]="tab.tooltipPosition"
                            [attr.aria-selected]="tab.selected" [positionStyle]="tab.tooltipPositionStyle" [tooltipStyleClass]="tab.tooltipStyleClass"
                            (click)="open($event,tab)" (keydown.enter)="open($event,tab)" pRipple [attr.tabindex]="tab.disabled ? null : '0'">
                            <ng-container *ngIf="!tab.headerTemplate">
                                <span class="p-tabview-left-icon" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>
                                <span class="p-tabview-title">{{tab.header}}</span>
                                <span class="p-tabview-right-icon" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>
                            </ng-container>
                            <ng-container *ngTemplateOutlet="tab.headerTemplate"></ng-container>
                            <span *ngIf="tab.closable" class="p-tabview-close pi pi-times" (click)="close($event,tab)"></span>
                        </a>
                    </li>
                </ng-template>
                <li #inkbar class="p-tabview-ink-bar"></li>
            </ul>
            <div class="p-tabview-panels">
                <ng-content></ng-content>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tabview-nav{-ms-flex-wrap:wrap;display:-ms-flexbox;display:flex;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabview-nav-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1}.p-tabview-close{z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { orientation: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onClose: [{
            type: Output
        }], activeIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], controlClose: [{
            type: Input
        }], navbar: [{
            type: ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: ViewChild,
            args: ['inkbar']
        }], tabPanels: [{
            type: ContentChildren,
            args: [TabPanel]
        }] }); })();
class TabViewModule {
}
TabViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabViewModule });
TabViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabViewModule_Factory(t) { return new (t || TabViewModule)(); }, imports: [[CommonModule, SharedModule, TooltipModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabViewModule, { declarations: function () { return [TabView, TabPanel]; }, imports: function () { return [CommonModule, SharedModule, TooltipModule, RippleModule]; }, exports: function () { return [TabView, TabPanel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabViewModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, TooltipModule, RippleModule],
                exports: [TabView, TabPanel, SharedModule],
                declarations: [TabView, TabPanel]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TabPanel, TabView, TabViewModule };

//# sourceMappingURL=primeng-tabview.js.map