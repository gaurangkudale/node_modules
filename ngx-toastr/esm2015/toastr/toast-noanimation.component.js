import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, HostBinding, HostListener, NgModule, } from '@angular/core';
import { DefaultNoComponentGlobalConfig, ToastPackage, TOAST_CONFIG, } from './toastr-config';
import { ToastrService } from './toastr.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["toast-component", ""];
function ToastNoAnimation_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.remove(); });
    ɵngcc0.ɵɵelementStart(1, "span", 6);
    ɵngcc0.ɵɵtext(2, "\u00D7");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("[", ctx_r7.duplicatesCount + 1, "]");
} }
function ToastNoAnimation_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.options.titleClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.duplicatesCount);
} }
function ToastNoAnimation_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r2.options.messageClass);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.message, ɵngcc0.ɵɵsanitizeHtml);
} }
function ToastNoAnimation_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r3.options.messageClass);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r3.message);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.message, " ");
} }
function ToastNoAnimation_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelement(1, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r4.width + "%");
} }
export class ToastNoAnimation {
    constructor(toastrService, toastPackage, appRef) {
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
            this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(count => {
            this.duplicatesCount = count;
        });
    }
    /** hides component when waiting to be displayed */
    get displayStyle() {
        if (this.state === 'inactive') {
            return 'none';
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     */
    activateToast() {
        this.state = 'active';
        if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
            this.timeout = setTimeout(() => {
                this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(() => this.updateProgress(), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    }
    /**
     * updates progress bar width
     */
    updateProgress() {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        const now = new Date().getTime();
        const remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    }
    resetTimeout() {
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = 'active';
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
    }
    tapToast() {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    stickAround() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    delayedHideToast() {
        if ((this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut') ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
}
ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) { return new (t || ToastNoAnimation)(ɵngcc0.ɵɵdirectiveInject(ToastrService), ɵngcc0.ɵɵdirectiveInject(ToastPackage), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef)); };
ToastNoAnimation.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastNoAnimation, selectors: [["", "toast-component", ""]], hostVars: 4, hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ToastNoAnimation_click_HostBindingHandler() { return ctx.tapToast(); })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() { return ctx.stickAround(); })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() { return ctx.delayedHideToast(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.toastClasses);
        ɵngcc0.ɵɵstyleProp("display", ctx.displayStyle);
    } }, attrs: _c0, decls: 5, vars: 5, consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]], template: function ToastNoAnimation_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);
        ɵngcc0.ɵɵtemplate(1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);
        ɵngcc0.ɵɵtemplate(4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.closeButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message && !ctx.options.enableHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.options.progressBar);
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2 });
ToastNoAnimation.ctorParameters = () => [
    { type: ToastrService },
    { type: ToastPackage },
    { type: ApplicationRef }
];
ToastNoAnimation.propDecorators = {
    toastClasses: [{ type: HostBinding, args: ['class',] }],
    displayStyle: [{ type: HostBinding, args: ['style.display',] }],
    tapToast: [{ type: HostListener, args: ['click',] }],
    stickAround: [{ type: HostListener, args: ['mouseenter',] }],
    delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastNoAnimation, [{
        type: Component,
        args: [{
                selector: '[toast-component]',
                template: `
  <button *ngIf="options.closeButton" (click)="remove()" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `
            }]
    }], function () { return [{ type: ToastrService }, { type: ToastPackage }, { type: ɵngcc0.ApplicationRef }]; }, { toastClasses: [{
            type: HostBinding,
            args: ['class']
        }], displayStyle: [{
            type: HostBinding,
            args: ['style.display']
        }], tapToast: [{
            type: HostListener,
            args: ['click']
        }], stickAround: [{
            type: HostListener,
            args: ['mouseenter']
        }], delayedHideToast: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
export const DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), { toastComponent: ToastNoAnimation });
export class ToastNoAnimationModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastNoAnimationModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoAnimationsGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastNoAnimationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastNoAnimationModule });
ToastNoAnimationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastNoAnimationModule_Factory(t) { return new (t || ToastNoAnimationModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastNoAnimationModule, { declarations: function () { return [ToastNoAnimation]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ToastNoAnimation]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastNoAnimationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtbm9hbmltYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3RvYXN0ci90b2FzdC1ub2FuaW1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFDTCw4QkFBOEIsRUFHOUIsWUFBWSxFQUNaLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCakQsTUFBTSxPQUFPLGdCQUFnQjtBQUFHLElBNkI5QixZQUNZLGFBQTRCLEVBQy9CLFlBQTBCLEVBQ3ZCLE1BQXNCO0FBQ2xDLFFBSFksa0JBQWEsR0FBYixhQUFhLENBQWU7QUFBQyxRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO0FBQUMsUUExQm5DLDRCQUE0QjtBQUM5QixRQUFFLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNiLFFBQUUseURBQXlEO0FBQzNELFFBQXdCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0FBQzFDLFFBU0UseUJBQXlCO0FBQzNCLFFBQUUsVUFBSyxHQUFHLFVBQVUsQ0FBQztBQUNyQixRQWFJLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQztBQUN4QyxRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFD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QUUsZ0JBQWdCLEdBQ2pDLENBQUM7QUFRRixNQUFNLE9BQU8sc0JBQXNCO0FBQ25DLElBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFnQyxFQUFFO0FBQUksUUFDbkQsT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLHNCQUFzQjtBQUN0QyxZQUFNLFNBQVMsRUFBRTtBQUNqQixnQkFBUTtBQUNSLG9CQUFVLE9BQU8sRUFBRSxZQUFZO0FBQy9CLG9CQUFVLFFBQVEsRUFBRTtBQUNwQix3QkFBWSxPQUFPLEVBQUUsK0JBQStCO0FBQ3BELHdCQUFZLE1BQU07QUFDbEIscUJBQVc7QUFDWCxpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDtrREFyQkMsUUFBUSxTQUFDLGtCQUNSO0dBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsa0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUNwQzs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE5nTW9kdWxlLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGVmYXVsdE5vQ29tcG9uZW50R2xvYmFsQ29uZmlnLFxuICBHbG9iYWxDb25maWcsXG4gIEluZGl2aWR1YWxDb25maWcsXG4gIFRvYXN0UGFja2FnZSxcbiAgVE9BU1RfQ09ORklHLFxufSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbdG9hc3QtY29tcG9uZW50XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxidXR0b24gKm5nSWY9XCJvcHRpb25zLmNsb3NlQnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZSgpXCIgY2xhc3M9XCJ0b2FzdC1jbG9zZS1idXR0b25cIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzXT1cIm9wdGlvbnMudGl0bGVDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIj5cbiAgICB7eyB0aXRsZSB9fSA8bmctY29udGFpbmVyICpuZ0lmPVwiZHVwbGljYXRlc0NvdW50XCI+W3t7IGR1cGxpY2F0ZXNDb3VudCArIDEgfX1dPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiBvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgIW9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXNzYWdlXCI+XG4gICAge3sgbWVzc2FnZSB9fVxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm9wdGlvbnMucHJvZ3Jlc3NCYXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidG9hc3QtcHJvZ3Jlc3NcIiBbc3R5bGUud2lkdGhdPVwid2lkdGggKyAnJSdcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtZXNzYWdlPzogc3RyaW5nIHwgbnVsbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IEluZGl2aWR1YWxDb25maWc7XG4gIGR1cGxpY2F0ZXNDb3VudCE6IG51bWJlcjtcbiAgb3JpZ2luYWxUaW1lb3V0OiBudW1iZXI7XG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgd2lkdGggPSAtMTtcbiAgLyoqIGEgY29tYmluYXRpb24gb2YgdG9hc3QgdHlwZSBhbmQgb3B0aW9ucy50b2FzdENsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0b2FzdENsYXNzZXMgPSAnJztcblxuICAvKiogaGlkZXMgY29tcG9uZW50IHdoZW4gd2FpdGluZyB0byBiZSBkaXNwbGF5ZWQgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2luYWN0aXZlJykge1xuICAgICAgcmV0dXJuICdub25lJztcbiAgICB9XG4gIH1cblxuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIHN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xuICBwcml2YXRlIGhpZGVUaW1lITogbnVtYmVyO1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzdWIyOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3ViMzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcbiAgICBwcm90ZWN0ZWQgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gdG9hc3RQYWNrYWdlLm1lc3NhZ2U7XG4gICAgdGhpcy50aXRsZSA9IHRvYXN0UGFja2FnZS50aXRsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0b2FzdFBhY2thZ2UuY29uZmlnO1xuICAgIHRoaXMub3JpZ2luYWxUaW1lb3V0ID0gdG9hc3RQYWNrYWdlLmNvbmZpZy50aW1lT3V0O1xuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcbiAgICAgIHRvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc1xuICAgIH1gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3ViMiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi50aW1lb3V0UmVzZXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFRpbWVvdXQoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YjMgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYuY291bnREdXBsaWNhdGUoKS5zdWJzY3JpYmUoY291bnQgPT4ge1xuICAgICAgdGhpcy5kdXBsaWNhdGVzQ291bnQgPSBjb3VudDtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3ViMy51bnN1YnNjcmliZSgpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuICAvKipcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcbiAgICovXG4gIGFjdGl2YXRlVG9hc3QoKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xuICAgIGlmICghKHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCA9PT0gdHJ1ZSB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgPT09ICd0aW1lT3V0JykgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWN0aXZhdGVUaWNrKSB7XG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiB1cGRhdGVzIHByb2dyZXNzIGJhciB3aWR0aFxuICAgKi9cbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDAgfHwgdGhpcy53aWR0aCA9PT0gMTAwIHx8ICF0aGlzLm9wdGlvbnMudGltZU91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NBbmltYXRpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgICAgdGhpcy53aWR0aCA9IDEwMCAtIHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoIDw9IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA+PSAxMDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLnN0YXRlID0gJ2FjdGl2ZSc7XG5cbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IHRoaXMub3JpZ2luYWxUaW1lb3V0O1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcmlnaW5hbFRpbWVvdXQpO1xuICAgIHRoaXMuaGlkZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICh0aGlzLm9yaWdpbmFsVGltZW91dCB8fCAwKTtcbiAgICB0aGlzLndpZHRoID0gLTE7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRlbGxzIHRvYXN0clNlcnZpY2UgdG8gcmVtb3ZlIHRoaXMgdG9hc3QgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVcbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuc3RhdGUgPSAncmVtb3ZlZCc7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PlxuICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLnJlbW92ZSh0aGlzLnRvYXN0UGFja2FnZS50b2FzdElkKSxcbiAgICApO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdGFwVG9hc3QoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyVGFwKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBzdGlja0Fyb3VuZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gMDtcbiAgICB0aGlzLmhpZGVUaW1lID0gMDtcblxuICAgIC8vIGRpc2FibGUgcHJvZ3Jlc3NCYXJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XG4gICAgaWYgKFxuICAgICAgKHRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCA9PT0gdHJ1ZSB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgPT09ICdleHRlbmRlZFRpbWVPdXQnKSB8fFxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9PT0gMCB8fFxuICAgICAgdGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnJlbW92ZSgpLFxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCxcbiAgICApO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dDtcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XG4gICAgdGhpcy53aWR0aCA9IC0xO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdE5vQW5pbWF0aW9uc0dsb2JhbENvbmZpZzogR2xvYmFsQ29uZmlnID0ge1xuICAuLi5EZWZhdWx0Tm9Db21wb25lbnRHbG9iYWxDb25maWcsXG4gIHRvYXN0Q29tcG9uZW50OiBUb2FzdE5vQW5pbWF0aW9uLFxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Tm9BbmltYXRpb25dLFxuICBleHBvcnRzOiBbVG9hc3ROb0FuaW1hdGlvbl0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0Tm9BbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE5vQW5pbWF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBQYXJ0aWFsPEdsb2JhbENvbmZpZz4gPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VG9hc3ROb0FuaW1hdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG9hc3ROb0FuaW1hdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9BU1RfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBEZWZhdWx0Tm9BbmltYXRpb25zR2xvYmFsQ29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==