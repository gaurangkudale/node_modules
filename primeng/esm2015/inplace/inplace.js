import { NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';

const _c0 = ["*"];
function Inplace_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function Inplace_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("click", function Inplace_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onActivateClick($event); })("keydown", function Inplace_div_1_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onKeydown($event); });
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r0.disabled));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.displayTemplate);
} }
function Inplace_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Inplace_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function Inplace_div_2_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onDeactivateClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r7.closeIcon);
} }
function Inplace_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵtemplate(2, Inplace_div_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, Inplace_div_2_button_3_Template, 1, 1, "button", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.closable);
} }
const _c2 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
const _c3 = function (a1) { return { "p-inplace p-component": true, "p-inplace-closable": a1 }; };
const _c4 = ["[pInplaceDisplay]", "[pInplaceContent]"];
export class InplaceDisplay {
}
InplaceDisplay.ɵfac = function InplaceDisplay_Factory(t) { return new (t || InplaceDisplay)(); };
InplaceDisplay.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InplaceDisplay, selectors: [["p-inplaceDisplay"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function InplaceDisplay_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceDisplay, [{
        type: Component,
        args: [{
                selector: 'p-inplaceDisplay',
                template: '<ng-content></ng-content>'
            }]
    }], null, null); })();
export class InplaceContent {
}
InplaceContent.ɵfac = function InplaceContent_Factory(t) { return new (t || InplaceContent)(); };
InplaceContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InplaceContent, selectors: [["p-inplaceContent"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function InplaceContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceContent, [{
        type: Component,
        args: [{
                selector: 'p-inplaceContent',
                template: '<ng-content></ng-content>'
            }]
    }], null, null); })();
export class Inplace {
    constructor(cd) {
        this.cd = cd;
        this.closeIcon = 'pi pi-times';
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'display':
                    this.displayTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    onActivateClick(event) {
        if (!this.preventClick)
            this.activate(event);
    }
    onDeactivateClick(event) {
        if (!this.preventClick)
            this.deactivate(event);
    }
    activate(event) {
        if (!this.disabled) {
            this.active = true;
            this.onActivate.emit(event);
            this.cd.markForCheck();
        }
    }
    deactivate(event) {
        if (!this.disabled) {
            this.active = false;
            this.hover = false;
            this.onDeactivate.emit(event);
            this.cd.markForCheck();
        }
    }
    onKeydown(event) {
        if (event.which === 13) {
            this.activate(event);
            event.preventDefault();
        }
    }
}
Inplace.ɵfac = function Inplace_Factory(t) { return new (t || Inplace)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Inplace.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Inplace, selectors: [["p-inplace"]], contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { closeIcon: "closeIcon", active: "active", closable: "closable", disabled: "disabled", preventClick: "preventClick", style: "style", styleClass: "styleClass" }, outputs: { onActivate: "onActivate", onDeactivate: "onDeactivate" }, ngContentSelectors: _c4, decls: 3, vars: 8, consts: [[3, "ngClass", "ngStyle"], ["class", "p-inplace-display", "tabindex", "0", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-inplace-content", 4, "ngIf"], ["tabindex", "0", 1, "p-inplace-display", 3, "ngClass", "click", "keydown"], [4, "ngTemplateOutlet"], [1, "p-inplace-content"], ["type", "button", "pButton", "", 3, "icon", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click"]], template: function Inplace_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Inplace_div_1_Template, 3, 4, "div", 1);
        ɵngcc0.ɵɵtemplate(2, Inplace_div_2_Template, 4, 2, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c3, ctx.closable))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.active);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.active);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.ButtonDirective], styles: [".p-inplace .p-inplace-display{cursor:pointer;display:inline}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:-ms-flexbox;display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}"], encapsulation: 2, changeDetection: 0 });
Inplace.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Inplace.propDecorators = {
    active: [{ type: Input }],
    closable: [{ type: Input }],
    disabled: [{ type: Input }],
    preventClick: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    closeIcon: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    onActivate: [{ type: Output }],
    onDeactivate: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Inplace, [{
        type: Component,
        args: [{
                selector: 'p-inplace',
                template: `
        <div [ngClass]="{'p-inplace p-component': true, 'p-inplace-closable': closable}" [ngStyle]="style" [class]="styleClass">
            <div class="p-inplace-display" (click)="onActivateClick($event)" tabindex="0" (keydown)="onKeydown($event)"   
                [ngClass]="{'p-disabled':disabled}" *ngIf="!active">
                <ng-content select="[pInplaceDisplay]"></ng-content>
                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>
            </div>
            <div class="p-inplace-content" *ngIf="active">
                <ng-content select="[pInplaceContent]"></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                <button type="button" [icon]="closeIcon" pButton (click)="onDeactivateClick($event)" *ngIf="closable"></button>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-inplace .p-inplace-display{cursor:pointer;display:inline}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:-ms-flexbox;display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{-ms-flex:1 1 auto;flex:1 1 auto;width:1%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { closeIcon: [{
            type: Input
        }], onActivate: [{
            type: Output
        }], onDeactivate: [{
            type: Output
        }], active: [{
            type: Input
        }], closable: [{
            type: Input
        }], disabled: [{
            type: Input
        }], preventClick: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class InplaceModule {
}
InplaceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InplaceModule });
InplaceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InplaceModule_Factory(t) { return new (t || InplaceModule)(); }, imports: [[CommonModule, ButtonModule], ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InplaceModule, { declarations: function () { return [Inplace, InplaceDisplay, InplaceContent]; }, imports: function () { return [CommonModule, ButtonModule]; }, exports: function () { return [Inplace, InplaceDisplay, InplaceContent, ButtonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InplaceModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule],
                exports: [Inplace, InplaceDisplay, InplaceContent, ButtonModule],
                declarations: [Inplace, InplaceDisplay, InplaceContent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wbGFjZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucGxhY2UvaW5wbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBNEMsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BNLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBSjdCLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUU7UUFBa0Isa0JBQzVCLFFBQVEsRUFBRSwyQkFBMkIsY0FDeEM7Ozs7Ozs7Ozs7MEJBQ0k7QUFNTCxNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUo3QixTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFO1FBQWtCLGtCQUM1QixRQUFRLEVBQUUsMkJBQTJCLGNBQ3hDOzs7Ozs7Ozs7OzBCQUNJO0FBc0JMLE1BQU0sT0FBTyxPQUFPO0FBQUcsSUE0Qm5CLFlBQW1CLEVBQXFCO0FBQUksUUFBekIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7QUFBQyxRQWRoQyxjQUFTLEdBQVcsYUFBYSxDQUFDO0FBQy9DLFFBR2MsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pFLFFBQ2MsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNuRSxJQU8rQyxDQUFDO0FBQ2hELElBQ0ksa0JBQWtCO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxP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Y0FBYyxFQUFDLFlBQVksQ0FBQyxrQkFDN0QsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQztRQUFjLENBQUMsY0FDeEQ7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyQ29udGVudEluaXQsIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge1ByaW1lVGVtcGxhdGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWlucGxhY2VEaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIElucGxhY2VEaXNwbGF5IHt9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1pbnBsYWNlQ29udGVudCcsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBJbnBsYWNlQ29udGVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtaW5wbGFjZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J3AtaW5wbGFjZSBwLWNvbXBvbmVudCc6IHRydWUsICdwLWlucGxhY2UtY2xvc2FibGUnOiBjbG9zYWJsZX1cIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1pbnBsYWNlLWRpc3BsYXlcIiAoY2xpY2spPVwib25BY3RpdmF0ZUNsaWNrKCRldmVudClcIiB0YWJpbmRleD1cIjBcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiICAgXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwLWRpc2FibGVkJzpkaXNhYmxlZH1cIiAqbmdJZj1cIiFhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcElucGxhY2VEaXNwbGF5XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGlzcGxheVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucGxhY2UtY29udGVudFwiICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BJbnBsYWNlQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFtpY29uXT1cImNsb3NlSWNvblwiIHBCdXR0b24gKGNsaWNrKT1cIm9uRGVhY3RpdmF0ZUNsaWNrKCRldmVudClcIiAqbmdJZj1cImNsb3NhYmxlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL2lucGxhY2UuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wbGFjZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY2xvc2FibGU6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHByZXZlbnRDbGljazogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG5cbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBjbG9zZUljb246IHN0cmluZyA9ICdwaSBwaS10aW1lcyc7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFByaW1lVGVtcGxhdGUpIHRlbXBsYXRlczogUXVlcnlMaXN0PGFueT47XG5cbiAgICBAT3V0cHV0KCkgb25BY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGhvdmVyOiBib29sZWFuO1xuXG4gICAgZGlzcGxheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzcGxheSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWN0aXZhdGVDbGljayhldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMucHJldmVudENsaWNrKVxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZShldmVudCk7XG4gICAgfVxuXG4gICAgb25EZWFjdGl2YXRlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZlbnRDbGljaylcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZShldmVudCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25BY3RpdmF0ZS5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ob3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUuZW1pdChldmVudCk7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoZXZlbnQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLEJ1dHRvbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0lucGxhY2UsSW5wbGFjZURpc3BsYXksSW5wbGFjZUNvbnRlbnQsQnV0dG9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtJbnBsYWNlLElucGxhY2VEaXNwbGF5LElucGxhY2VDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbnBsYWNlTW9kdWxlIHsgfVxuIl19