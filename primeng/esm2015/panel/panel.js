import { NgModule, Component, Input, Output, EventEmitter, ElementRef, ContentChild, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Footer, PrimeTemplate } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

function Panel_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("id", ctx_r3.id + "_header");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.header);
} }
function Panel_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Panel_div_1_5_ng_template_0_Template(rf, ctx) { }
function Panel_div_1_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
} }
function Panel_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function Panel_div_1_button_6_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onIconClick($event); })("keydown.enter", function Panel_div_1_button_6_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.onIconClick($event); });
    ɵngcc0.ɵɵelement(1, "span");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("id", ctx_r6.id + "-label")("aria-controls", ctx_r6.id + "-content")("aria-expanded", !ctx_r6.collapsed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r6.collapsed ? ctx_r6.expandIcon : ctx_r6.collapseIcon);
} }
function Panel_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function Panel_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onHeaderClick($event); });
    ɵngcc0.ɵɵtemplate(1, Panel_div_1_span_1_Template, 2, 2, "span", 7);
    ɵngcc0.ɵɵprojection(2, 1);
    ɵngcc0.ɵɵtemplate(3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementStart(4, "div", 8);
    ɵngcc0.ɵɵtemplate(5, Panel_div_1_5_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵtemplate(6, Panel_div_1_button_6_Template, 2, 5, "button", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("id", ctx_r0.id + "-titlebar");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.header);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.toggleable);
} }
function Panel_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Panel_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Panel_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵtemplate(2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
} }
const _c0 = ["*", [["p-header"]], [["p-footer"]]];
const _c1 = function (a1) { return { "p-panel p-component": true, "p-panel-toggleable": a1 }; };
const _c2 = function (a0) { return { transitionParams: a0, height: "0", opacity: "0" }; };
const _c3 = function (a1) { return { value: "hidden", params: a1 }; };
const _c4 = function (a0) { return { transitionParams: a0, height: "*", opacity: "1" }; };
const _c5 = function (a1) { return { value: "visible", params: a1 }; };
const _c6 = ["*", "p-header", "p-footer"];
let idx = 0;
export class Panel {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.expandIcon = 'pi pi-plus';
        this.collapseIcon = 'pi pi-minus';
        this.showHeader = true;
        this.toggler = "icon";
        this.collapsedChange = new EventEmitter();
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `p-panel-${idx++}`;
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
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'icons':
                    this.iconTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    onHeaderClick(event) {
        if (this.toggler === 'header') {
            this.toggle(event);
        }
    }
    onIconClick(event) {
        if (this.toggler === 'icon') {
            this.toggle(event);
        }
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        event.preventDefault();
    }
    expand(event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    }
    collapse(event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    onToggleDone(event) {
        this.animating = false;
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
    }
}
Panel.ɵfac = function Panel_Factory(t) { return new (t || Panel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Panel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Panel, selectors: [["p-panel"]], contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { collapsed: "collapsed", expandIcon: "expandIcon", collapseIcon: "collapseIcon", showHeader: "showHeader", toggler: "toggler", transitionOptions: "transitionOptions", toggleable: "toggleable", header: "header", style: "style", styleClass: "styleClass" }, outputs: { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, ngContentSelectors: _c6, decls: 7, vars: 22, consts: [[3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-toggleable-content"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons"], ["type", "button", "class", "p-panel-header-icon p-panel-toggler p-link", "pRipple", "", "role", "tab", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-panel-title"], ["type", "button", "pRipple", "", "role", "tab", 1, "p-panel-header-icon", "p-panel-toggler", "p-link", 3, "click", "keydown.enter"], [1, "p-panel-footer"]], template: function Panel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Panel_div_1_Template, 7, 5, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) { return ctx.onToggleDone($event); });
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵtemplate(5, Panel_ng_container_5_Template, 1, 0, "ng-container", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, Panel_div_6_Template, 3, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c1, ctx.toggleable))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showHeader);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@panelContent", ctx.collapsed ? ɵngcc0.ɵɵpureFunction1(16, _c3, ɵngcc0.ɵɵpureFunction1(14, _c2, ctx.animating ? ctx.transitionOptions : "0ms")) : ɵngcc0.ɵɵpureFunction1(20, _c5, ɵngcc0.ɵɵpureFunction1(18, _c4, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵngcc0.ɵɵattribute("id", ctx.id + "-content")("aria-hidden", ctx.collapsed)("aria-labelledby", ctx.id + "-titlebar");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-panel-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-panel-title{line-height:1}.p-panel-header-icon{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;text-decoration:none}"], encapsulation: 2, data: { animation: [
            trigger('panelContent', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('void', style({
                    height: '{{height}}'
                }), { params: { height: '0' } }),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => hidden', animate('{{transitionParams}}')),
                transition('void => visible', animate('{{transitionParams}}'))
            ])
        ] }, changeDetection: 0 });
Panel.ctorParameters = () => [
    { type: ElementRef }
];
Panel.propDecorators = {
    toggleable: [{ type: Input }],
    header: [{ type: Input }],
    collapsed: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    expandIcon: [{ type: Input }],
    collapseIcon: [{ type: Input }],
    showHeader: [{ type: Input }],
    toggler: [{ type: Input }],
    collapsedChange: [{ type: Output }],
    onBeforeToggle: [{ type: Output }],
    onAfterToggle: [{ type: Output }],
    transitionOptions: [{ type: Input }],
    footerFacet: [{ type: ContentChild, args: [Footer,] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Panel, [{
        type: Component,
        args: [{
                selector: 'p-panel',
                template: `
        <div [attr.id]="id" [ngClass]="{'p-panel p-component': true, 'p-panel-toggleable': toggleable}" [ngStyle]="style" [class]="styleClass">
            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="p-panel-title" *ngIf="header" [attr.id]="id + '_header'">{{header}}</span>
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <div class="p-panel-icons">
                    <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
                    <button *ngIf="toggleable" type="button" [attr.id]="id + '-label'" class="p-panel-header-icon p-panel-toggler p-link" pRipple
                        (click)="onIconClick($event)" (keydown.enter)="onIconClick($event)" [attr.aria-controls]="id + '-content'" role="tab" [attr.aria-expanded]="!collapsed">
                        <span [class]="collapsed ? expandIcon : collapseIcon"></span>
                    </button>
                </div>
            </div>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@panelContent]="collapsed ? {value: 'hidden', params: {transitionParams: animating ? transitionOptions : '0ms', height: '0', opacity:'0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*', opacity: '1'}}" (@panelContent.done)="onToggleDone($event)"
                role="region" [attr.aria-hidden]="collapsed" [attr.aria-labelledby]="id  + '-titlebar'">
                <div class="p-panel-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                
                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
                animations: [
                    trigger('panelContent', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('void', style({
                            height: '{{height}}'
                        }), { params: { height: '0' } }),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => hidden', animate('{{transitionParams}}')),
                        transition('void => visible', animate('{{transitionParams}}'))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-panel-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-panel-title{line-height:1}.p-panel-header-icon{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;overflow:hidden;position:relative;text-decoration:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { collapsed: [{
            type: Input
        }], expandIcon: [{
            type: Input
        }], collapseIcon: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], toggler: [{
            type: Input
        }], collapsedChange: [{
            type: Output
        }], onBeforeToggle: [{
            type: Output
        }], onAfterToggle: [{
            type: Output
        }], transitionOptions: [{
            type: Input
        }], toggleable: [{
            type: Input
        }], header: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], footerFacet: [{
            type: ContentChild,
            args: [Footer]
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class PanelModule {
}
PanelModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PanelModule });
PanelModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PanelModule_Factory(t) { return new (t || PanelModule)(); }, imports: [[CommonModule, SharedModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PanelModule, { declarations: function () { return [Panel]; }, imports: function () { return [CommonModule, SharedModule, RippleModule]; }, exports: function () { return [Panel, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PanelModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, SharedModule, RippleModule],
                exports: [Panel, SharedModule],
                declarations: [Panel]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9wYW5lbC9wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBMkMsTUFBTSxlQUFlLENBQUM7QUFDek0sT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztBQXFEcEIsTUFBTSxPQUFPLEtBQUs7QUFBRyxJQTRDakIsWUFBb0IsRUFBYztBQUFJLFFBQWxCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQXRDMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUN4QyxRQUthLGVBQVUsR0FBVyxZQUFZLENBQUM7QUFDL0MsUUFDYSxpQkFBWSxHQUFXLGFBQWEsQ0FBQztBQUNsRCxRQUNhLGVBQVUsR0FBWSxJQUFJLENBQUM7QUFDeEMsUUFDYSxZQUFPLEdBQVcsTUFBTSxDQUFDO0FBQ3RDLFFBQ2Msb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN0RSxRQUNjLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFF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QUFDLENBQUMsMEJBQzdELFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7U0FBc0IsQ0FBQyxDQUFDLHNCQUNqRSxDQUFDLGtCQUNMLGtCQUNGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzlDLGFBQWEsRUFBRTtZQUFpQixDQUFDLElBQUk7Ozs0UkFFeEM7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQ0k7QUFBQztBQUErQixZQTVEZ0IsVUFBVTtBQUFHO0FBQUc7QUFBeUIseUJBOER6RixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHNCQUVWLEtBQUs7QUFBSyw4QkFFVixNQUFNO0FBQUssNkJBRVgsTUFBTTtBQUFLLDRCQUVYLE1BQU07QUFBSyxnQ0FFWCxLQUFLO0FBQUssMEJBRVYsWUFBWSxTQUFDLE1BQU07QUFBTyx3QkFFMUIsZUFBZSxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFrRzFDLE1BQU0sT0FBTyxXQUFXO0FBQUc7dUNBTDFCLFFBQVEsU0FBQztPQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUNqRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDLGtCQUM3QixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FDeEI7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixFbGVtZW50UmVmLENvbnRlbnRDaGlsZCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgQWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2hhcmVkTW9kdWxlLEZvb3RlciwgUHJpbWVUZW1wbGF0ZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtCbG9ja2FibGVVSX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7dHJpZ2dlcixzdGF0ZSxzdHlsZSx0cmFuc2l0aW9uLGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5sZXQgaWR4OiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtcGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW2F0dHIuaWRdPVwiaWRcIiBbbmdDbGFzc109XCJ7J3AtcGFuZWwgcC1jb21wb25lbnQnOiB0cnVlLCAncC1wYW5lbC10b2dnbGVhYmxlJzogdG9nZ2xlYWJsZX1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wYW5lbC1oZWFkZXJcIiAqbmdJZj1cInNob3dIZWFkZXJcIiAoY2xpY2spPVwib25IZWFkZXJDbGljaygkZXZlbnQpXCIgW2F0dHIuaWRdPVwiaWQgKyAnLXRpdGxlYmFyJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1wYW5lbC10aXRsZVwiICpuZ0lmPVwiaGVhZGVyXCIgW2F0dHIuaWRdPVwiaWQgKyAnX2hlYWRlcidcIj57e2hlYWRlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXBhbmVsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ0b2dnbGVhYmxlXCIgdHlwZT1cImJ1dHRvblwiIFthdHRyLmlkXT1cImlkICsgJy1sYWJlbCdcIiBjbGFzcz1cInAtcGFuZWwtaGVhZGVyLWljb24gcC1wYW5lbC10b2dnbGVyIHAtbGlua1wiIHBSaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkljb25DbGljaygkZXZlbnQpXCIgKGtleWRvd24uZW50ZXIpPVwib25JY29uQ2xpY2soJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiaWQgKyAnLWNvbnRlbnQnXCIgcm9sZT1cInRhYlwiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiIWNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cImNvbGxhcHNlZCA/IGV4cGFuZEljb24gOiBjb2xsYXBzZUljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFthdHRyLmlkXT1cImlkICsgJy1jb250ZW50J1wiIGNsYXNzPVwicC10b2dnbGVhYmxlLWNvbnRlbnRcIiBbQHBhbmVsQ29udGVudF09XCJjb2xsYXBzZWQgPyB7dmFsdWU6ICdoaWRkZW4nLCBwYXJhbXM6IHt0cmFuc2l0aW9uUGFyYW1zOiBhbmltYXRpbmcgPyB0cmFuc2l0aW9uT3B0aW9ucyA6ICcwbXMnLCBoZWlnaHQ6ICcwJywgb3BhY2l0eTonMCd9fSA6IHt2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHt0cmFuc2l0aW9uUGFyYW1zOiBhbmltYXRpbmcgPyB0cmFuc2l0aW9uT3B0aW9ucyA6ICcwbXMnLCBoZWlnaHQ6ICcqJywgb3BhY2l0eTogJzEnfX1cIiAoQHBhbmVsQ29udGVudC5kb25lKT1cIm9uVG9nZ2xlRG9uZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwiY29sbGFwc2VkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImlkICArICctdGl0bGViYXInXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcGFuZWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1wYW5lbC1mb290ZXJcIiAqbmdJZj1cImZvb3RlckZhY2V0IHx8IGZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZm9vdGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcigncGFuZWxDb250ZW50JywgW1xuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJ3t7aGVpZ2h0fX0nXG4gICAgICAgICAgICB9KSwge3BhcmFtczoge2hlaWdodDogJzAnfX0pLFxuICAgICAgICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnKidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPD0+IGhpZGRlbicsIFtzdHlsZSh7IG92ZXJmbG93OiAnaGlkZGVuJ30pLCBhbmltYXRlKCd7e3RyYW5zaXRpb25QYXJhbXN9fScpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGhpZGRlbicsIGFuaW1hdGUoJ3t7dHJhbnNpdGlvblBhcmFtc319JykpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiB2aXNpYmxlJywgYW5pbWF0ZSgne3t0cmFuc2l0aW9uUGFyYW1zfX0nKSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9wYW5lbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgdG9nZ2xlYWJsZTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgY29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgZXhwYW5kSWNvbjogc3RyaW5nID0gJ3BpIHBpLXBsdXMnO1xuICAgIFxuICAgIEBJbnB1dCgpIGNvbGxhcHNlSWNvbjogc3RyaW5nID0gJ3BpIHBpLW1pbnVzJztcbiAgXG4gICAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBASW5wdXQoKSB0b2dnbGVyOiBzdHJpbmcgPSBcImljb25cIjtcbiAgICBcbiAgICBAT3V0cHV0KCkgY29sbGFwc2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJlZm9yZVRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25BZnRlclRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQElucHV0KCkgdHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICc0MDBtcyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSknO1xuXG4gICAgQENvbnRlbnRDaGlsZChGb290ZXIpIGZvb3RlckZhY2V0O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgcHVibGljIGljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBcbiAgICBhbmltYXRpbmc6IGJvb2xlYW47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICAgIGlkOiBzdHJpbmcgPSBgcC1wYW5lbC0ke2lkeCsrfWA7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zvb3Rlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnaWNvbnMnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSGVhZGVyQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZXIgPT09ICdoZWFkZXInKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkljb25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlciA9PT0gJ2ljb24nKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmVmb3JlVG9nZ2xlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBjb2xsYXBzZWQ6IHRoaXMuY29sbGFwc2VkfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy50b2dnbGVhYmxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmQoZXZlbnQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICBleHBhbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLmNvbGxhcHNlZCk7XG4gICAgfVxuICAgIFxuICAgIGNvbGxhcHNlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLmNvbGxhcHNlZCk7XG4gICAgfVxuICAgIFxuICAgIGdldEJsb2NrYWJsZUVsZW1lbnQoKTogSFRNTEVsZW1lbnTCoHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICB9XG4gICAgXG4gICAgb25Ub2dnbGVEb25lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQWZ0ZXJUb2dnbGUuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGNvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWR9KTtcbiAgICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNoYXJlZE1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQYW5lbCxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1BhbmVsXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbE1vZHVsZSB7IH1cbiJdfQ==