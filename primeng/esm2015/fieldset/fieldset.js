import { NgModule, Component, Input, Output, EventEmitter, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SharedModule, PrimeTemplate } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';

const _c0 = function (a0, a1) { return { "pi-minus": a0, "pi-plus": a1 }; };
function Fieldset_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 9);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, !ctx_r4.collapsed, ctx_r4.collapsed));
} }
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Fieldset_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function Fieldset_ng_container_2_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.toggle($event); })("keydown.enter", function Fieldset_ng_container_2_Template_a_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.toggle($event); });
    ɵngcc0.ɵɵtemplate(2, Fieldset_ng_container_2_span_2_Template, 1, 4, "span", 8);
    ɵngcc0.ɵɵtemplate(3, Fieldset_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-controls", ctx_r0.id + "-content")("aria-expanded", !ctx_r0.collapsed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.toggleable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Fieldset_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵprojection(2, 1);
    ɵngcc0.ɵɵtemplate(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.legend);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
} }
function Fieldset_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = ["*", [["p-header"]]];
const _c2 = function (a1) { return { "p-fieldset p-component": true, "p-fieldset-toggleable": a1 }; };
const _c3 = function (a0) { return { transitionParams: a0, height: "0" }; };
const _c4 = function (a1) { return { value: "hidden", params: a1 }; };
const _c5 = function (a0) { return { transitionParams: a0, height: "*" }; };
const _c6 = function (a1) { return { value: "visible", params: a1 }; };
const _c7 = ["*", "p-header"];
let idx = 0;
export class Fieldset {
    constructor(el) {
        this.el = el;
        this.collapsed = false;
        this.collapsedChange = new EventEmitter();
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `p-fieldset-${idx++}`;
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
            }
        });
    }
    toggle(event) {
        if (this.animating) {
            return false;
        }
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.collapsed)
            this.expand(event);
        else
            this.collapse(event);
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
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
    }
}
Fieldset.ɵfac = function Fieldset_Factory(t) { return new (t || Fieldset)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Fieldset.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Fieldset, selectors: [["p-fieldset"]], contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { collapsed: "collapsed", transitionOptions: "transitionOptions", legend: "legend", toggleable: "toggleable", style: "style", styleClass: "styleClass" }, outputs: { collapsedChange: "collapsedChange", onBeforeToggle: "onBeforeToggle", onAfterToggle: "onAfterToggle" }, ngContentSelectors: _c7, decls: 9, vars: 22, consts: [[3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["legendContent", ""], ["role", "region", 1, "p-toggleable-content"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["tabindex", "0", "pRipple", "", 3, "click", "keydown.enter"], ["class", "p-fieldset-toggler pi", 3, "ngClass", 4, "ngIf"], [1, "p-fieldset-toggler", "pi", 3, "ngClass"], [1, "p-fieldset-legend-text"]], template: function Fieldset_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "fieldset", 0);
        ɵngcc0.ɵɵelementStart(1, "legend", 1);
        ɵngcc0.ɵɵtemplate(2, Fieldset_ng_container_2_Template, 4, 4, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(3, Fieldset_ng_template_3_Template, 4, 2, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵlistener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener($event) { return ctx.onToggleDone($event); });
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵtemplate(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c2, ctx.toggleable))("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toggleable)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("@fieldsetContent", ctx.collapsed ? ɵngcc0.ɵɵpureFunction1(16, _c4, ɵngcc0.ɵɵpureFunction1(14, _c3, ctx.transitionOptions)) : ɵngcc0.ɵɵpureFunction1(20, _c6, ɵngcc0.ɵɵpureFunction1(18, _c5, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵngcc0.ɵɵattribute("id", ctx.id + "-content")("aria-labelledby", ctx.id)("aria-hidden", ctx.collapsed);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('fieldsetContent', [
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
Fieldset.ctorParameters = () => [
    { type: ElementRef }
];
Fieldset.propDecorators = {
    legend: [{ type: Input }],
    toggleable: [{ type: Input }],
    collapsed: [{ type: Input }],
    collapsedChange: [{ type: Output }],
    onBeforeToggle: [{ type: Output }],
    onAfterToggle: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Fieldset, [{
        type: Component,
        args: [{
                selector: 'p-fieldset',
                template: `
        <fieldset [attr.id]="id" [ngClass]="{'p-fieldset p-component': true, 'p-fieldset-toggleable': toggleable}" [ngStyle]="style" [class]="styleClass">
            <legend class="p-fieldset-legend">
                <ng-container *ngIf="toggleable; else legendContent">
                    <a tabindex="0" (click)="toggle($event)" (keydown.enter)="toggle($event)" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="!collapsed" pRipple>
                        <span class="p-fieldset-toggler pi" *ngIf="toggleable" [ngClass]="{'pi-minus': !collapsed,'pi-plus':collapsed}"></span>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </a>
                </ng-container>
                <ng-template #legendContent>
                    <span class="p-fieldset-legend-text">{{legend}}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@fieldsetContent]="collapsed ? {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}}" 
                        [attr.aria-labelledby]="id" [attr.aria-hidden]="collapsed"
                         (@fieldsetContent.done)="onToggleDone($event)" role="region">
                <div class="p-fieldset-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
                animations: [
                    trigger('fieldsetContent', [
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
                styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { collapsed: [{
            type: Input
        }], collapsedChange: [{
            type: Output
        }], onBeforeToggle: [{
            type: Output
        }], onAfterToggle: [{
            type: Output
        }], transitionOptions: [{
            type: Input
        }], legend: [{
            type: Input
        }], toggleable: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class FieldsetModule {
}
FieldsetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FieldsetModule });
FieldsetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FieldsetModule_Factory(t) { return new (t || FieldsetModule)(); }, imports: [[CommonModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FieldsetModule, { declarations: function () { return [Fieldset]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [Fieldset, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FieldsetModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [Fieldset, SharedModule],
                declarations: [Fieldset]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9maWVsZHNldC9maWVsZHNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQStCLGVBQWUsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUM1TCxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUM7QUE4Q3BCLE1BQU0sT0FBTyxRQUFRO0FBQUcsSUE0QnBCLFlBQW9CLEVBQWM7QUFBSSxRQUFsQixPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUF0QjFCLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDeEMsUUFDYyxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3RFLFFBQ2MsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNyRSxRQUNjLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsUUFLYSxzQkFBaUIsR0FBVyxzQ0FBc0MsQ0FBQztBQUNoRixRQVdJLE9BQUUsR0FBVyxjQUFjLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDdkMsSUFIeUMsQ0FBQztBQUMxQyxJQUdJ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QUFDLENBQUMsQ0FBQyxzQkFDdEMsQ0FBQyxrQkFDTDtTQUNELGVBQWUsRUFBRTtvQkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs4QkFFeEM7Ozs7Ozs7Ozs7OzttQ0FDSTtBQUFDO0FBQWtDLFlBckRhLFVBQVU7QUFBRztBQUFHO0FBQTRCLHFCQXVENUYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUssOEJBRVYsTUFBTTtBQUFLLDZCQUVYLE1BQU07QUFBSyw0QkFFWCxNQUFNO0FBQUssb0JBRVgsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUssd0JBRVYsZUFBZSxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFvRTFDLE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsa0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBQyxZQUFZLENBQUMsa0JBQ2hDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMzQjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLHN0YXRlLHN0eWxlLHRyYW5zaXRpb24sYW5pbWF0ZX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2hhcmVkTW9kdWxlLCBQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0Jsb2NrYWJsZVVJfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge1JpcHBsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9yaXBwbGUnOyAgXG5cbmxldCBpZHg6IG51bWJlciA9IDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1maWVsZHNldCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZpZWxkc2V0IFthdHRyLmlkXT1cImlkXCIgW25nQ2xhc3NdPVwieydwLWZpZWxkc2V0IHAtY29tcG9uZW50JzogdHJ1ZSwgJ3AtZmllbGRzZXQtdG9nZ2xlYWJsZSc6IHRvZ2dsZWFibGV9XCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzcz1cInAtZmllbGRzZXQtbGVnZW5kXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvZ2dsZWFibGU7IGVsc2UgbGVnZW5kQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YWJpbmRleD1cIjBcIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIiAoa2V5ZG93bi5lbnRlcik9XCJ0b2dnbGUoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiaWQgKyAnLWNvbnRlbnQnXCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCIhY29sbGFwc2VkXCIgcFJpcHBsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1maWVsZHNldC10b2dnbGVyIHBpXCIgKm5nSWY9XCJ0b2dnbGVhYmxlXCIgW25nQ2xhc3NdPVwieydwaS1taW51cyc6ICFjb2xsYXBzZWQsJ3BpLXBsdXMnOmNvbGxhcHNlZH1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVnZW5kQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNsZWdlbmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtZmllbGRzZXQtbGVnZW5kLXRleHRcIj57e2xlZ2VuZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImhlYWRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgPGRpdiBbYXR0ci5pZF09XCJpZCArICctY29udGVudCdcIiBjbGFzcz1cInAtdG9nZ2xlYWJsZS1jb250ZW50XCIgW0BmaWVsZHNldENvbnRlbnRdPVwiY29sbGFwc2VkID8ge3ZhbHVlOiAnaGlkZGVuJywgcGFyYW1zOiB7dHJhbnNpdGlvblBhcmFtczogdHJhbnNpdGlvbk9wdGlvbnMsIGhlaWdodDogJzAnfX0gOiB7dmFsdWU6ICd2aXNpYmxlJywgcGFyYW1zOiB7dHJhbnNpdGlvblBhcmFtczogYW5pbWF0aW5nID8gdHJhbnNpdGlvbk9wdGlvbnMgOiAnMG1zJywgaGVpZ2h0OiAnKid9fVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImlkXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwiY29sbGFwc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoQGZpZWxkc2V0Q29udGVudC5kb25lKT1cIm9uVG9nZ2xlRG9uZSgkZXZlbnQpXCIgcm9sZT1cInJlZ2lvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkc2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmllbGRzZXRDb250ZW50JywgW1xuICAgICAgICAgICAgc3RhdGUoJ2hpZGRlbicsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJyonXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlIDw9PiBoaWRkZW4nLCBbc3R5bGUoe292ZXJmbG93OiAnaGlkZGVuJ30pLCBhbmltYXRlKCd7e3RyYW5zaXRpb25QYXJhbXN9fScpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKDApKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9maWVsZHNldC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZHNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgbGVnZW5kOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0b2dnbGVhYmxlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgY29sbGFwc2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25CZWZvcmVUb2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQWZ0ZXJUb2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHRyYW5zaXRpb25PcHRpb25zOiBzdHJpbmcgPSAnNDAwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpJztcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBcbiAgICBwdWJsaWMgYW5pbWF0aW5nOiBib29sZWFuO1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cbiAgICBcbiAgICBpZDogc3RyaW5nID0gYHAtZmllbGRzZXQtJHtpZHgrK31gO1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25CZWZvcmVUb2dnbGUuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGNvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWR9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZClcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKGV2ZW50KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZShldmVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5vbkFmdGVyVG9nZ2xlLmVtaXQoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBjb2xsYXBzZWQ6IHRoaXMuY29sbGFwc2VkfSk7ICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIFxuICAgIGV4cGFuZChldmVudCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZENoYW5nZS5lbWl0KHRoaXMuY29sbGFwc2VkKTtcbiAgICB9XG4gICAgXG4gICAgY29sbGFwc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZENoYW5nZS5lbWl0KHRoaXMuY29sbGFwc2VkKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0QmxvY2thYmxlRWxlbWVudCgpOiBIVE1MRWxlbWVudMKge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgICBcbiAgICBvblRvZ2dsZURvbmUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSaXBwbGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtGaWVsZHNldCxTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0ZpZWxkc2V0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZHNldE1vZHVsZSB7IH0iXX0=