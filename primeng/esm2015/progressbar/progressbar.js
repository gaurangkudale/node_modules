import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ProgressBar_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.value + "%");
} }
function ProgressBar_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("display", ctx_r1.value != null ? "block" : "none");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r1.value, "", ctx_r1.unit, "");
} }
function ProgressBar_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelement(1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a1, a2) { return { "p-progressbar p-component": true, "p-progressbar-determinate": a1, "p-progressbar-indeterminate": a2 }; };
export class ProgressBar {
    constructor() {
        this.showValue = true;
        this.unit = '%';
        this.mode = 'determinate';
    }
}
ProgressBar.ɵfac = function ProgressBar_Factory(t) { return new (t || ProgressBar)(); };
ProgressBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressBar, selectors: [["p-progressBar"]], inputs: { showValue: "showValue", unit: "unit", mode: "mode", value: "value", style: "style", styleClass: "styleClass" }, decls: 4, vars: 11, consts: [["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngStyle", "ngClass"], ["class", "p-progressbar-value p-progressbar-value-animate", "style", "display:block", 3, "width", 4, "ngIf"], ["class", "p-progressbar-label", 3, "display", 4, "ngIf"], ["class", "p-progressbar-indeterminate-container", 4, "ngIf"], [1, "p-progressbar-value", "p-progressbar-value-animate", 2, "display", "block"], [1, "p-progressbar-label"], [1, "p-progressbar-indeterminate-container"], [1, "p-progressbar-value", "p-progressbar-value-animate"]], template: function ProgressBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ProgressBar_div_1_Template, 1, 2, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ProgressBar_div_2_Template, 2, 4, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ProgressBar_div_3_Template, 2, 0, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c0, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "determinate" && ctx.showValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "indeterminate");
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"], encapsulation: 2, changeDetection: 0 });
ProgressBar.propDecorators = {
    value: [{ type: Input }],
    showValue: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    unit: [{ type: Input }],
    mode: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBar, [{
        type: Component,
        args: [{
                selector: 'p-progressBar',
                template: `
        <div [class]="styleClass" [ngStyle]="style" role="progressbar" aria-valuemin="0" [attr.aria-valuenow]="value" aria-valuemax="100"
            [ngClass]="{'p-progressbar p-component': true, 'p-progressbar-determinate': (mode === 'determinate'), 'p-progressbar-indeterminate': (mode === 'indeterminate')}">
            <div *ngIf="mode === 'determinate'" class="p-progressbar-value p-progressbar-value-animate" [style.width]="value + '%'" style="display:block"></div>
            <div *ngIf="mode === 'determinate' && showValue" class="p-progressbar-label" [style.display]="value != null ? 'block' : 'none'">{{value}}{{unit}}</div>
            <div *ngIf="mode === 'indeterminate'" class="p-progressbar-indeterminate-container">
                <div class="p-progressbar-value p-progressbar-value-animate"></div>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{-webkit-animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{-webkit-animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:\"\";left:0;position:absolute;top:0;will-change:left,right}@-webkit-keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}"]
            }]
    }], function () { return []; }, { showValue: [{
            type: Input
        }], unit: [{
            type: Input
        }], mode: [{
            type: Input
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class ProgressBarModule {
}
ProgressBarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressBarModule });
ProgressBarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressBarModule, { declarations: function () { return [ProgressBar]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ProgressBar]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ProgressBar],
                declarations: [ProgressBar]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0MsTUFBTSxPQUFPLFdBQVc7QUFDeEIsSUFqQkE7QUFDRyxRQW1CVSxjQUFTLEdBQVksSUFBSSxDQUFDO0FBQ3ZDLFFBS2EsU0FBSSxHQUFXLEdBQUcsQ0FBQztBQUNoQyxRQUNhLFNBQUksR0FBVyxhQUFhLENBQUM7QUFDMUMsSUFDQSxDQUFDO0FBQ0Q7dUNBL0JDLFNBQVMsU0FBQyxrQkFDUCxRQUFRLEVBQUU7V0FBZSxrQkFDekIsUUFBUSxFQUFFO3lDQVNUO2VBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07TUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7NjdCQUV4Qywwd0JBQ0k7QUFBQztBQUVHLG9CQUFKLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBU2hCLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FMaEMsUUFBUSxTQUFDO0NBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQ3RCLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUM5Qjs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1wcm9ncmVzc0JhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3AtcHJvZ3Jlc3NiYXIgcC1jb21wb25lbnQnOiB0cnVlLCAncC1wcm9ncmVzc2Jhci1kZXRlcm1pbmF0ZSc6IChtb2RlID09PSAnZGV0ZXJtaW5hdGUnKSwgJ3AtcHJvZ3Jlc3NiYXItaW5kZXRlcm1pbmF0ZSc6IChtb2RlID09PSAnaW5kZXRlcm1pbmF0ZScpfVwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1vZGUgPT09ICdkZXRlcm1pbmF0ZSdcIiBjbGFzcz1cInAtcHJvZ3Jlc3NiYXItdmFsdWUgcC1wcm9ncmVzc2Jhci12YWx1ZS1hbmltYXRlXCIgW3N0eWxlLndpZHRoXT1cInZhbHVlICsgJyUnXCIgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibW9kZSA9PT0gJ2RldGVybWluYXRlJyAmJiBzaG93VmFsdWVcIiBjbGFzcz1cInAtcHJvZ3Jlc3NiYXItbGFiZWxcIiBbc3R5bGUuZGlzcGxheV09XCJ2YWx1ZSAhPSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJ1wiPnt7dmFsdWV9fXt7dW5pdH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibW9kZSA9PT0gJ2luZGV0ZXJtaW5hdGUnXCIgY2xhc3M9XCJwLXByb2dyZXNzYmFyLWluZGV0ZXJtaW5hdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtcHJvZ3Jlc3NiYXItdmFsdWUgcC1wcm9ncmVzc2Jhci12YWx1ZS1hbmltYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc2hvd1ZhbHVlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIHVuaXQ6IHN0cmluZyA9ICclJztcbiAgICBcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnZGV0ZXJtaW5hdGUnO1xuICAgIFxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtQcm9ncmVzc0Jhcl0sXG4gICAgZGVjbGFyYXRpb25zOiBbUHJvZ3Jlc3NCYXJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyTW9kdWxlIHsgfSJdfQ==