import { NgModule, Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class ProgressSpinner {
    constructor() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
}
ProgressSpinner.ɵfac = function ProgressSpinner_Factory(t) { return new (t || ProgressSpinner)(); };
ProgressSpinner.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressSpinner, selectors: [["p-progressSpinner"]], inputs: { strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", style: "style", styleClass: "styleClass" }, decls: 3, vars: 6, consts: [["role", "alert", "aria-busy", "true", 1, "p-progress-spinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progress-spinner-svg"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progress-spinner-circle"]], template: function ProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(1, "svg", 1);
        ɵngcc0.ɵɵelement(2, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("animation-duration", ctx.animationDuration);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass], styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{-ms-transform-origin:center center;-webkit-animation:p-progress-spinner-rotate 2s linear infinite;animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{-webkit-animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@-webkit-keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"], encapsulation: 2, changeDetection: 0 });
ProgressSpinner.propDecorators = {
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    fill: [{ type: Input }],
    animationDuration: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinner, [{
        type: Component,
        args: [{
                selector: 'p-progressSpinner',
                template: `
        <div class="p-progress-spinner" [ngStyle]="style" [ngClass]="styleClass"  role="alert" aria-busy="true">
            <svg class="p-progress-spinner-svg" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
                <circle class="p-progress-spinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10"/>
            </svg>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-progress-spinner{display:inline-block;height:100px;margin:0 auto;position:relative;width:100px}.p-progress-spinner:before{content:\"\";display:block;padding-top:100%}.p-progress-spinner-svg{-ms-transform-origin:center center;-webkit-animation:p-progress-spinner-rotate 2s linear infinite;animation:p-progress-spinner-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.p-progress-spinner-circle{-webkit-animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke:#d62d20;stroke-dasharray:89,200;stroke-dashoffset:0;stroke-linecap:round}@-webkit-keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@keyframes p-progress-spinner-rotate{to{transform:rotate(1turn)}}@-webkit-keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}@keyframes p-progress-spinner-color{0%,to{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}"]
            }]
    }], function () { return []; }, { strokeWidth: [{
            type: Input
        }], fill: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
export class ProgressSpinnerModule {
}
ProgressSpinnerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressSpinnerModule });
ProgressSpinnerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressSpinnerModule_Factory(t) { return new (t || ProgressSpinnerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressSpinnerModule, { declarations: function () { return [ProgressSpinner]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ProgressSpinner]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressSpinnerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ProgressSpinner],
                declarations: [ProgressSpinner]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NzcGlubmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3NzcGlubmVyL3Byb2dyZXNzc3Bpbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFlN0MsTUFBTSxPQUFPLGVBQWU7QUFDNUIsSUFkQTtBQUNHLFFBa0JVLGdCQUFXLEdBQVcsR0FBRyxDQUFDO0FBQ3ZDLFFBQ2EsU0FBSSxHQUFXLE1BQU0sQ0FBQztBQUNuQyxRQUNhLHNCQUFpQixHQUFXLElBQUksQ0FBQztBQUM5QyxJQUNBLENBQUM7QUFDRDsyQ0ExQkMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRTtPQUFtQixrQkFDN0IsUUFBUSxFQUFFLCthQU1ULGtCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7QUFBSTs7Ozs7Ozs7Ozs7OzhpQ0FFeEMsb2xCQUNJO0FBQUM7QUFFRyxvQkFBSixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLDBCQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUssZ0NBRVYsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQVNoQixNQUFNLE9BQU8scUJBQXFCO0FBQUc7aURBTHBDLFFBQVEsU0FBQyxrQkFDTjtJQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQ2xDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXByb2dyZXNzU3Bpbm5lcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtcHJvZ3Jlc3Mtc3Bpbm5lclwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwic3R5bGVDbGFzc1wiICByb2xlPVwiYWxlcnRcIiBhcmlhLWJ1c3k9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwicC1wcm9ncmVzcy1zcGlubmVyLXN2Z1wiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiIFtzdHlsZS5hbmltYXRpb24tZHVyYXRpb25dPVwiYW5pbWF0aW9uRHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwicC1wcm9ncmVzcy1zcGlubmVyLWNpcmNsZVwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjIwXCIgW2F0dHIuZmlsbF09XCJmaWxsXCIgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3NzcGlubmVyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lciB7XG5cbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgICBcbiAgICBASW5wdXQoKSBzdHJva2VXaWR0aDogc3RyaW5nID0gXCIyXCI7XG4gICAgXG4gICAgQElucHV0KCkgZmlsbDogc3RyaW5nID0gXCJub25lXCI7XG4gICAgXG4gICAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyA9IFwiMnNcIjtcbiAgICBcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbUHJvZ3Jlc3NTcGlubmVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc1NwaW5uZXJdXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lck1vZHVsZSB7IH0iXX0=