import { NgModule, Component, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Toolbar_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Toolbar_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.leftTemplate);
} }
function Toolbar_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Toolbar_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.rightTemplate);
} }
const _c0 = ["*"];
export class Toolbar {
    constructor(el) {
        this.el = el;
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'left':
                    this.leftTemplate = item.template;
                    break;
                case 'right':
                    this.rightTemplate = item.template;
                    break;
            }
        });
    }
}
Toolbar.ɵfac = function Toolbar_Factory(t) { return new (t || Toolbar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Toolbar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Toolbar, selectors: [["p-toolbar"]], contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { style: "style", styleClass: "styleClass" }, ngContentSelectors: _c0, decls: 4, vars: 6, consts: [["role", "toolbar", 3, "ngClass", "ngStyle"], ["class", "p-toolbar-group-left", 4, "ngIf"], ["class", "p-toolbar-group-right", 4, "ngIf"], [1, "p-toolbar-group-left"], [4, "ngTemplateOutlet"], [1, "p-toolbar-group-right"]], template: function Toolbar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Toolbar_div_2_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵtemplate(3, Toolbar_div_3_Template, 2, 1, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-toolbar p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.leftTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rightTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".p-toolbar{-ms-flex-pack:justify;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:space-between}.p-toolbar,.p-toolbar-group-left,.p-toolbar-group-right{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"], encapsulation: 2, changeDetection: 0 });
Toolbar.ctorParameters = () => [
    { type: ElementRef }
];
Toolbar.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Toolbar, [{
        type: Component,
        args: [{
                selector: 'p-toolbar',
                template: `
        <div [ngClass]="'p-toolbar p-component'" [ngStyle]="style" [class]="styleClass" role="toolbar">
            <ng-content></ng-content>
            <div class="p-toolbar-group-left" *ngIf="leftTemplate">
                <ng-container *ngTemplateOutlet="leftTemplate"></ng-container>
            </div>
            <div class="p-toolbar-group-right" *ngIf="rightTemplate">
                <ng-container *ngTemplateOutlet="rightTemplate"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-toolbar{-ms-flex-pack:justify;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:space-between}.p-toolbar,.p-toolbar-group-left,.p-toolbar-group-right{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ToolbarModule {
}
ToolbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToolbarModule });
ToolbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToolbarModule_Factory(t) { return new (t || ToolbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToolbarModule, { declarations: function () { return [Toolbar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Toolbar]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToolbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Toolbar],
                declarations: [Toolbar]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFFLGlCQUFpQixFQUFvQixlQUFlLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hLLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQWMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CdkQsTUFBTSxPQUFPLE9BQU87QUFBRyxJQVluQixZQUFvQixFQUFjO0FBQUksUUFBbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtBQUFDLElBQUUsQ0FBQztBQUMxQyxJQUNJLG1CQUFtQjtBQUFLLFFBQ3RCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLElBQUksQ0FBQztBQUNMLElBQ0ksa0JBQWtCO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUN4QyxZQUFZLFFBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO0FBQ25DLGdCQUFnQixLQUFLLE1BQU07QUFDM0Isb0JBQW9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0RCxvQkFBZ0IsTUFBTTtBQUN0QixnQkFDZ0IsS0FBSyxPQUFPO0FBQzVCLG9CQUFvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdkQsb0JBQWdCLE1BQU07QUFDdEIsYUFBYTtBQUNiLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxJQUFJLENBQUM7QUFDTDttQ0FoREMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxXQUFXLGtCQUNyQixRQUFRO0FBQUU7Ozs7O3NKQVVULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs4QkFFeEM7Ozs7Ozs7Ozs7c1hBQ0k7QUFBQztBQUFpQyxZQXJCTixVQUFVO0FBQUc7QUFBRztBQUEyQixvQkF1QnZFLEtBQUs7QUFBSyx5QkFFVixLQUFLO0FBQUssd0JBRVYsZUFBZSxTQUFDLGFBQWE7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBaUMxQyxNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQUw1QixRQUFRLFNBQUM7S0FDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFDbEIsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQzFCOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LEVsZW1lbnRSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Jsb2NrYWJsZVVJLCBQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIidwLXRvb2xiYXIgcC1jb21wb25lbnQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIHJvbGU9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10b29sYmFyLWdyb3VwLWxlZnRcIiAqbmdJZj1cImxlZnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWZ0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtdG9vbGJhci1ncm91cC1yaWdodFwiICpuZ0lmPVwicmlnaHRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyaWdodFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3Rvb2xiYXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsQmxvY2thYmxlVUkge1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIGxlZnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHJpZ2h0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgZ2V0QmxvY2thYmxlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1Rvb2xiYXJdLFxuICAgIGRlY2xhcmF0aW9uczogW1Rvb2xiYXJdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNb2R1bGUgeyB9XG4iXX0=