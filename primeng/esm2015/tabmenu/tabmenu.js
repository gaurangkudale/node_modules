import { NgModule, Component, Input, ContentChildren, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { DomHandler } from 'primeng/dom';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from '@angular/router';

const _c0 = ["navbar"];
const _c1 = ["inkbar"];
function TabMenu_li_3_a_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r3.icon);
} }
function TabMenu_li_3_a_1_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r3.label);
} }
function TabMenu_li_3_a_1_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r3.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TabMenu_li_3_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_ng_container_1_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_1_ng_container_1_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_a_1_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = ɵngcc0.ɵɵreference(4);
    const item_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", _r11);
} }
function TabMenu_li_3_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function TabMenu_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function TabMenu_li_3_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const item_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.itemClick($event, item_r3); });
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_ng_container_1_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_1_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext();
    const item_r3 = ctx_r20.$implicit;
    const i_r4 = ctx_r20.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("href", item_r3.url, ɵngcc0.ɵɵsanitizeUrl)("tabindex", item_r3.disabled ? null : "0")("target", item_r3.target)("title", item_r3.title)("id", item_r3.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r5.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(8, _c2, item_r3, i_r4));
} }
function TabMenu_li_3_a_2_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("ngClass", item_r3.icon);
} }
function TabMenu_li_3_a_2_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r3.label);
} }
function TabMenu_li_3_a_2_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const item_r3 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", item_r3.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TabMenu_li_3_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_2_ng_container_1_span_1_Template, 1, 1, "span", 12);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_ng_container_1_span_2_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_a_2_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r25 = ɵngcc0.ɵɵreference(4);
    const item_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.escape !== false)("ngIfElse", _r25);
} }
function TabMenu_li_3_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function () { return { exact: false }; };
function TabMenu_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵlistener("click", function TabMenu_li_3_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); const item_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.itemClick($event, item_r3); });
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_2_ng_container_1_Template, 5, 3, "ng-container", 10);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵngcc0.ɵɵnextContext();
    const item_r3 = ctx_r34.$implicit;
    const i_r4 = ctx_r34.index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(17, _c3))("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    ɵngcc0.ɵɵattribute("tabindex", item_r3.disabled ? null : "0")("target", item_r3.target)("title", item_r3.title)("id", item_r3.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.itemTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(18, _c2, item_r3, i_r4));
} }
const _c4 = function (a1, a2, a3) { return { "p-tabmenuitem": true, "p-disabled": a1, "p-highlight": a2, "p-hidden": a3 }; };
function TabMenu_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵtemplate(1, TabMenu_li_3_a_1_Template, 3, 11, "a", 7);
    ɵngcc0.ɵɵtemplate(2, TabMenu_li_3_a_2_Template, 3, 21, "a", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(5, _c4, item_r3.disabled, ctx_r1.activeItem == item_r3, item_r3.visible === false));
    ɵngcc0.ɵɵattribute("aria-selected", ctx_r1.activeItem == item_r3)("aria-expanded", ctx_r1.activeItem == item_r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r3.routerLink);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r3.routerLink);
} }
export class TabMenu {
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterViewInit() {
        this.updateInkBar();
    }
    ngAfterViewChecked() {
        if (this.tabChanged) {
            this.updateInkBar();
            this.tabChanged = false;
        }
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = item;
        this.tabChanged = true;
    }
    updateInkBar() {
        let tabHeader = DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
        if (tabHeader) {
            this.inkbar.nativeElement.style.width = DomHandler.getWidth(tabHeader) + 'px';
            this.inkbar.nativeElement.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
        }
    }
}
TabMenu.ɵfac = function TabMenu_Factory(t) { return new (t || TabMenu)(); };
TabMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabMenu, selectors: [["p-tabMenu"]], contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function TabMenu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inkbar = _t.first);
    } }, inputs: { activeItem: "activeItem", model: "model", popup: "popup", style: "style", styleClass: "styleClass" }, decls: 6, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["role", "tablist", 1, "p-tabmenu-nav", "p-reset"], ["navbar", ""], ["role", "tab", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-tabmenu-ink-bar"], ["inkbar", ""], ["role", "tab", 3, "ngClass"], ["class", "p-menuitem-link", "role", "presentation", "pRipple", "", 3, "click", 4, "ngIf"], ["role", "presentation", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "presentation", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""]], template: function TabMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1, 2);
        ɵngcc0.ɵɵtemplate(3, TabMenu_li_3_Template, 3, 9, "li", 3);
        ɵngcc0.ɵɵelement(4, "li", 4, 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-tabmenu p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc3.RouterLinkWithHref, ɵngcc3.RouterLinkActive], styles: [".p-tabmenu-nav{-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabmenu-nav,.p-tabmenu-nav a{display:-ms-flexbox;display:flex}.p-tabmenu-nav a{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1}.p-tabmenu-ink-bar{display:none;z-index:1}"], encapsulation: 2, changeDetection: 0 });
TabMenu.propDecorators = {
    model: [{ type: Input }],
    activeItem: [{ type: Input }],
    popup: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    navbar: [{ type: ViewChild, args: ['navbar',] }],
    inkbar: [{ type: ViewChild, args: ['inkbar',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabMenu, [{
        type: Component,
        args: [{
                selector: 'p-tabMenu',
                template: `
        <div [ngClass]="'p-tabmenu p-component'" [ngStyle]="style" [class]="styleClass">
            <ul #navbar class="p-tabmenu-nav p-reset" role="tablist">
                <li *ngFor="let item of model; let i = index" role="tab" [attr.aria-selected]="activeItem==item" [attr.aria-expanded]="activeItem==item"
                    [ngClass]="{'p-tabmenuitem':true,'p-disabled':item.disabled,'p-highlight':activeItem==item,'p-hidden': item.visible === false}">
                    <a *ngIf="!item.routerLink" [attr.href]="item.url" class="p-menuitem-link" role="presentation" (click)="itemClick($event,item)" [attr.tabindex]="item.disabled ? null : '0'"
                        [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id" pRipple>
                        <ng-container *ngIf="!itemTemplate">
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                    </a>
                    <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}"
                        role="presentation" class="p-menuitem-link" (click)="itemClick($event,item)" [attr.tabindex]="item.disabled ? null : '0'"
                        [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id"
                        [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state" pRipple>
                        <ng-container *ngIf="!itemTemplate">
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item, index: i}"></ng-container>
                    </a>
                </li>
                <li #inkbar class="p-tabmenu-ink-bar"></li>
            </ul>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tabmenu-nav{-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin:0;padding:0}.p-tabmenu-nav,.p-tabmenu-nav a{display:-ms-flexbox;display:flex}.p-tabmenu-nav a{-moz-user-select:none;-ms-flex-align:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;overflow:hidden;position:relative;text-decoration:none;user-select:none}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1}.p-tabmenu-ink-bar{display:none;z-index:1}"]
            }]
    }], null, { activeItem: [{
            type: Input
        }], model: [{
            type: Input
        }], popup: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], navbar: [{
            type: ViewChild,
            args: ['navbar']
        }], inkbar: [{
            type: ViewChild,
            args: ['inkbar']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class TabMenuModule {
}
TabMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabMenuModule });
TabMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabMenuModule_Factory(t) { return new (t || TabMenuModule)(); }, imports: [[CommonModule, RouterModule, SharedModule, RippleModule], RouterModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabMenuModule, { declarations: function () { return [TabMenu]; }, imports: function () { return [CommonModule, RouterModule, SharedModule, RippleModule]; }, exports: function () { return [TabMenu, RouterModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, SharedModule, RippleModule],
                exports: [TabMenu, RouterModule, SharedModule],
                declarations: [TabMenu]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibWVudS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3RhYm1lbnUvdGFibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZUFBZSxFQUF1RSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL00sT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDdkMsTUFBTSxPQUFPLE9BQU87QUFBRyxJQXNCbkIsa0JBQWtCO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUN4QyxZQUFZLFFBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ25DLGdCQUFnQixLQUFLLE1BQU07QUFDM0Isb0JBQW9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0RCxvQkFBZ0IsTUFBTTtBQUN0QixnQkFDZ0I7QUFDaEIsb0JBQW9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0RCxvQkFBZ0IsTUFBTTtBQUN0QixhQUFhO0FBQ2IsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQztBQUNMLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFJLENBQUM7QUFDTCxJQUNJLGtCQUFrQjtBQUN0QixRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM3QixZQUFZLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNoQyxZQUFZLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTCxJQUNJLFNBQVMsQ0FBQyxLQUFZLEVBQUUsSUFBYztBQUMxQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMzQixZQUFZLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQyxZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNULFFBQ1EsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzFCLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN6QixnQkFBZ0IsYUFBYSxFQUFFLEtBQUs7QUFDcEMsZ0JBQWdCLElBQUksRUFBRSxJQUFJO0FBQzFCLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULFFBQ1EsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMvQixJQUFJLENBQUM7QUFDTCxJQUNJLFlBQVk7QUFDaEIsUUFBUSxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDM0YsUUFBUSxJQUFJLFNBQVMsRUFBRTtBQUN2QixZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDMUYsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3RKLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTDttQ0EzR0MsU0FBUyxTQUFDLGtCQUNQO0VBQVEsRUFBRSxXQUFXLGtCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttUUE2QlQsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLG1WQUdwQztBQUFDO0FBQTJCLG9CQUU1QixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztLQVhULExBV2MscUJBRVYsU0FBUyxTQUFDLFFBQVE7QUFBTyxxQkFFekIsU0FBUyxTQUFDLFFBQVE7QUFBTyx3QkFFekIsZUFBZSxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQThEMUMsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxDQUFDLGtCQUM5RCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksQ0FBQyxrQkFDNUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQzFCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsQWZ0ZXJDb250ZW50SW5pdCxBZnRlclZpZXdJbml0LEFmdGVyVmlld0NoZWNrZWQsVGVtcGxhdGVSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xuaW1wb3J0IHtQcmltZVRlbXBsYXRlLCBTaGFyZWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtEb21IYW5kbGVyfSBmcm9tICdwcmltZW5nL2RvbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10YWJNZW51JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLXRhYm1lbnUgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPHVsICNuYXZiYXIgY2xhc3M9XCJwLXRhYm1lbnUtbmF2IHAtcmVzZXRcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtb2RlbDsgbGV0IGkgPSBpbmRleFwiIHJvbGU9XCJ0YWJcIiBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImFjdGl2ZUl0ZW09PWl0ZW1cIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImFjdGl2ZUl0ZW09PWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtdGFibWVudWl0ZW0nOnRydWUsJ3AtZGlzYWJsZWQnOml0ZW0uZGlzYWJsZWQsJ3AtaGlnaGxpZ2h0JzphY3RpdmVJdGVtPT1pdGVtLCdwLWhpZGRlbic6IGl0ZW0udmlzaWJsZSA9PT0gZmFsc2V9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiIWl0ZW0ucm91dGVyTGlua1wiIFthdHRyLmhyZWZdPVwiaXRlbS51cmxcIiBjbGFzcz1cInAtbWVudWl0ZW0tbGlua1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudCxpdGVtKVwiIFthdHRyLnRhYmluZGV4XT1cIml0ZW0uZGlzYWJsZWQgPyBudWxsIDogJzAnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJpdGVtLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cIml0ZW0udGl0bGVcIiBbYXR0ci5pZF09XCJpdGVtLmlkXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbVRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJpdGVtLmljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxMYWJlbFwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaHRtbExhYmVsPjxzcGFuIGNsYXNzPVwicC1tZW51aXRlbS10ZXh0XCIgW2lubmVySFRNTF09XCJpdGVtLmxhYmVsXCI+PC9zcGFuPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3F1ZXJ5UGFyYW1zXT1cIml0ZW0ucXVlcnlQYXJhbXNcIiBbcm91dGVyTGlua0FjdGl2ZV09XCIncC1tZW51aXRlbS1saW5rLWFjdGl2ZSdcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwiaXRlbS5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc3x8e2V4YWN0OmZhbHNlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJwLW1lbnVpdGVtLWxpbmtcIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudCxpdGVtKVwiIFthdHRyLnRhYmluZGV4XT1cIml0ZW0uZGlzYWJsZWQgPyBudWxsIDogJzAnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJpdGVtLnRhcmdldFwiIFthdHRyLnRpdGxlXT1cIml0ZW0udGl0bGVcIiBbYXR0ci5pZF09XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmcmFnbWVudF09XCJpdGVtLmZyYWdtZW50XCIgW3F1ZXJ5UGFyYW1zSGFuZGxpbmddPVwiaXRlbS5xdWVyeVBhcmFtc0hhbmRsaW5nXCIgW3ByZXNlcnZlRnJhZ21lbnRdPVwiaXRlbS5wcmVzZXJ2ZUZyYWdtZW50XCIgW3NraXBMb2NhdGlvbkNoYW5nZV09XCJpdGVtLnNraXBMb2NhdGlvbkNoYW5nZVwiIFtyZXBsYWNlVXJsXT1cIml0ZW0ucmVwbGFjZVVybFwiIFtzdGF0ZV09XCJpdGVtLnN0YXRlXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbVRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLW1lbnVpdGVtLWljb25cIiBbbmdDbGFzc109XCJpdGVtLmljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiICpuZ0lmPVwiaXRlbS5lc2NhcGUgIT09IGZhbHNlOyBlbHNlIGh0bWxSb3V0ZUxhYmVsXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNodG1sUm91dGVMYWJlbD48c3BhbiBjbGFzcz1cInAtbWVudWl0ZW0tdGV4dFwiIFtpbm5lckhUTUxdPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtLCBpbmRleDogaX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpICNpbmtiYXIgY2xhc3M9XCJwLXRhYm1lbnUtaW5rLWJhclwiPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibWVudS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJNZW51IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxBZnRlclZpZXdJbml0LEFmdGVyVmlld0NoZWNrZWQge1xuXG4gICAgQElucHV0KCkgbW9kZWw6IE1lbnVJdGVtW107XG5cbiAgICBASW5wdXQoKSBhY3RpdmVJdGVtOiBNZW51SXRlbTtcblxuICAgIEBJbnB1dCgpIHBvcHVwOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ25hdmJhcicpIG5hdmJhcjogRWxlbWVudFJlZjtcblxuICAgIEBWaWV3Q2hpbGQoJ2lua2JhcicpIGlua2JhcjogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHRhYkNoYW5nZWQ6IGJvb2xlYW47XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5rQmFyKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgICAgICBpZiAodGhpcy50YWJDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlua0JhcigpO1xuICAgICAgICAgICAgdGhpcy50YWJDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpdGVtQ2xpY2soZXZlbnQ6IEV2ZW50LCBpdGVtOiBNZW51SXRlbSnCoHtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7XG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcbiAgICAgICAgdGhpcy50YWJDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbmtCYXIoKSB7XG4gICAgICAgIGxldCB0YWJIZWFkZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCwgJ2xpLnAtaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGlmICh0YWJIZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5rYmFyLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBEb21IYW5kbGVyLmdldFdpZHRoKHRhYkhlYWRlcikgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pbmtiYXIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGFiSGVhZGVyKS5sZWZ0IC0gRG9tSGFuZGxlci5nZXRPZmZzZXQodGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCkubGVmdCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGUsU2hhcmVkTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RhYk1lbnUsUm91dGVyTW9kdWxlLFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVGFiTWVudV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiTWVudU1vZHVsZSB7IH1cbiJdfQ==