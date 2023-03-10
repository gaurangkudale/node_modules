import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, forwardRef, ChangeDetectorRef, Input, Output, ContentChildren, ElementRef, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Header, PrimeTemplate, SharedModule } from 'primeng/api';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function AccordionTab_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.header, " ");
} }
function AccordionTab_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AccordionTab_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "hasHeaderFacet"]);
} }
function AccordionTab_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AccordionTab_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, AccordionTab_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate);
} }
const _c0 = ["*", [["p-header"]]];
const _c1 = function (a0) { return { "p-accordion-tab-active": a0 }; };
const _c2 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
const _c3 = function (a0) { return { transitionParams: a0 }; };
const _c4 = function (a1) { return { value: "visible", params: a1 }; };
const _c5 = function (a1) { return { value: "hidden", params: a1 }; };
const _c6 = ["*", "p-header"];
const _c7 = ["*"];
let idx = 0;
class AccordionTab {
    constructor(accordion, changeDetector) {
        this.changeDetector = changeDetector;
        this.cache = true;
        this.selectedChange = new EventEmitter();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `p-accordiontab-${idx++}`;
        this.accordion = accordion;
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        if (!this.loaded) {
            this.changeDetector.detectChanges();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    toggle(event) {
        if (this.disabled) {
            return false;
        }
        let index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                    this.accordion.tabs[i].changeDetector.markForCheck();
                }
            }
            this.selected = true;
            this.loaded = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        this.accordion.updateActiveIndex();
        this.changeDetector.markForCheck();
        event.preventDefault();
    }
    findTabIndex() {
        let index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }
    get hasHeaderFacet() {
        return this.headerFacet && this.headerFacet.length > 0;
    }
    onKeydown(event) {
        if (event.which === 32 || event.which === 13) {
            this.toggle(event);
            event.preventDefault();
        }
    }
    ngOnDestroy() {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    }
}
AccordionTab.ɵfac = function AccordionTab_Factory(t) { return new (t || AccordionTab)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => Accordion)), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
AccordionTab.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionTab, selectors: [["p-accordionTab"]], contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Header, false);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", transitionOptions: "transitionOptions", selected: "selected", header: "header", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, ngContentSelectors: _c6, decls: 11, vars: 28, consts: [[1, "p-accordion-tab", 3, "ngClass"], [1, "p-accordion-header", 3, "ngClass"], ["role", "tab", 1, "p-accordion-header-link", 3, "click", "keydown"], [1, "p-accordion-toggle-icon", 3, "ngClass"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content"], [1, "p-accordion-header-text"]], template: function AccordionTab_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵlistener("click", function AccordionTab_Template_a_click_2_listener($event) { return ctx.toggle($event); })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵtemplate(4, AccordionTab_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(5, AccordionTab_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(6, AccordionTab_6_Template, 1, 0, undefined, 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 7);
        ɵngcc0.ɵɵelementStart(8, "div", 8);
        ɵngcc0.ɵɵprojection(9);
        ɵngcc0.ɵɵtemplate(10, AccordionTab_ng_container_10_Template, 2, 1, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c1, ctx.selected));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(17, _c2, ctx.selected, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : 0)("id", ctx.id)("aria-controls", ctx.id + "-content")("aria-expanded", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ctx.selected ? ctx.accordion.collapseIcon : ctx.accordion.expandIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hasHeaderFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasHeaderFacet);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@tabContent", ctx.selected ? ɵngcc0.ɵɵpureFunction1(22, _c4, ɵngcc0.ɵɵpureFunction1(20, _c3, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(26, _c5, ɵngcc0.ɵɵpureFunction1(24, _c3, ctx.transitionOptions)));
        ɵngcc0.ɵɵattribute("id", ctx.id + "-content")("aria-hidden", !ctx.selected)("aria-labelledby", ctx.id);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-accordion-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('tabContent', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] }, changeDetection: 0 });
AccordionTab.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => Accordion),] }] },
    { type: ChangeDetectorRef }
];
AccordionTab.propDecorators = {
    header: [{ type: Input }],
    disabled: [{ type: Input }],
    cache: [{ type: Input }],
    selectedChange: [{ type: Output }],
    transitionOptions: [{ type: Input }],
    headerFacet: [{ type: ContentChildren, args: [Header,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    selected: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionTab, [{
        type: Component,
        args: [{
                selector: 'p-accordionTab',
                template: `
        <div class="p-accordion-tab" [ngClass]="{'p-accordion-tab-active': selected}">
            <div class="p-accordion-header" [ngClass]="{'p-highlight': selected, 'p-disabled': disabled}">
                <a role="tab" class="p-accordion-header-link" (click)="toggle($event)" (keydown)="onKeydown($event)" [attr.tabindex]="disabled ? null : 0"
                    [attr.id]="id" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="selected">
                    <span class="p-accordion-toggle-icon" [ngClass]="selected ? accordion.collapseIcon : accordion.expandIcon"></span>
                    <span class="p-accordion-header-text" *ngIf="!hasHeaderFacet">
                        {{header}}
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@tabContent]="selected ? {value: 'visible', params: {transitionParams: transitionOptions}} : {value: 'hidden', params: {transitionParams: transitionOptions}}"
                role="region" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id">
                <div class="p-accordion-content">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('tabContent', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-accordion-header-link{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => Accordion)]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { cache: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], transitionOptions: [{
            type: Input
        }], selected: [{
            type: Input
        }], header: [{
            type: Input
        }], disabled: [{
            type: Input
        }], headerFacet: [{
            type: ContentChildren,
            args: [Header]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class Accordion {
    constructor(el, changeDetector) {
        this.el = el;
        this.changeDetector = changeDetector;
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.expandIcon = 'pi pi-fw pi-chevron-right';
        this.collapseIcon = 'pi pi-fw pi-chevron-down';
        this.activeIndexChange = new EventEmitter();
        this.tabs = [];
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabListSubscription = this.tabList.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    initTabs() {
        this.tabs = this.tabList.toArray();
        this.updateSelectionState();
        this.changeDetector.markForCheck();
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
        this.updateSelectionState();
    }
    updateSelectionState() {
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (let i = 0; i < this.tabs.length; i++) {
                let selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                let changed = selected !== this.tabs[i].selected;
                if (changed) {
                    this.tabs[i].selected = selected;
                    this.tabs[i].selectedChange.emit(selected);
                    this.tabs[i].changeDetector.markForCheck();
                }
            }
        }
    }
    updateActiveIndex() {
        let index = this.multiple ? [] : null;
        this.tabs.forEach((tab, i) => {
            if (tab.selected) {
                if (this.multiple) {
                    index.push(i);
                }
                else {
                    index = i;
                    return;
                }
            }
        });
        this.preventActiveIndexPropagation = true;
        this.activeIndexChange.emit(index);
    }
    ngOnDestroy() {
        if (this.tabListSubscription) {
            this.tabListSubscription.unsubscribe();
        }
    }
}
Accordion.ɵfac = function Accordion_Factory(t) { return new (t || Accordion)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Accordion.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Accordion, selectors: [["p-accordion"]], contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AccordionTab, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabList = _t);
    } }, inputs: { expandIcon: "expandIcon", collapseIcon: "collapseIcon", activeIndex: "activeIndex", multiple: "multiple", style: "style", styleClass: "styleClass" }, outputs: { onClose: "onClose", onOpen: "onOpen", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c7, decls: 2, vars: 4, consts: [["role", "tablist", 3, "ngClass", "ngStyle"]], template: function Accordion_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2, changeDetection: 0 });
Accordion.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
Accordion.propDecorators = {
    multiple: [{ type: Input }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    expandIcon: [{ type: Input }],
    collapseIcon: [{ type: Input }],
    activeIndexChange: [{ type: Output }],
    tabList: [{ type: ContentChildren, args: [AccordionTab,] }],
    activeIndex: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Accordion, [{
        type: Component,
        args: [{
                selector: 'p-accordion',
                template: `
        <div [ngClass]="'p-accordion p-component'" [ngStyle]="style" [class]="styleClass" role="tablist">
            <ng-content></ng-content>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onClose: [{
            type: Output
        }], onOpen: [{
            type: Output
        }], expandIcon: [{
            type: Input
        }], collapseIcon: [{
            type: Input
        }], activeIndexChange: [{
            type: Output
        }], activeIndex: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], tabList: [{
            type: ContentChildren,
            args: [AccordionTab]
        }] }); })();
class AccordionModule {
}
AccordionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[CommonModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AccordionModule, { declarations: function () { return [Accordion, AccordionTab]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Accordion, AccordionTab, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Accordion, AccordionTab, SharedModule],
                declarations: [Accordion, AccordionTab]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Accordion, AccordionModule, AccordionTab };

//# sourceMappingURL=primeng-accordion.js.map