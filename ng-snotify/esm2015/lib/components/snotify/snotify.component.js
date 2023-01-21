import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { SnotifyService } from '../../services/snotify.service';
import { SnotifyPosition } from '../../enums/snotify-position.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../toast/toast.component';
import * as ɵngcc3 from '../../pipes/keys.pipe';

function SnotifyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("opacity", ctx_r0.backdrop);
} }
function SnotifyComponent_div_1_ng_snotify_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ng-snotify-toast", 4);
    ɵngcc0.ɵɵlistener("stateChanged", function SnotifyComponent_div_1_ng_snotify_toast_1_Template_ng_snotify_toast_stateChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.stateChanged($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("toast", notification_r4);
} }
function SnotifyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_ng_snotify_toast_1_Template, 1, 1, "ng-snotify-toast", 3);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("snotify snotify-", position_r2, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(2, 4, ctx_r1.notifications[position_r2], ctx_r1.blockSizeA, ctx_r1.blockSizeB));
} }
let SnotifyComponent = class SnotifyComponent {
    constructor(service) {
        this.service = service;
        /**
         * Backdrop Opacity
         */
        this.backdrop = -1;
    }
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    ngOnInit() {
        this.emitter = this.service.emitter.subscribe((toasts) => {
            if (this.service.config.global.newOnTop) {
                this.dockSizeA = -this.service.config.global.maxOnScreen;
                this.dockSizeB = undefined;
                this.blockSizeA = -this.service.config.global.maxAtPosition;
                this.blockSizeB = undefined;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
            }
            else {
                this.dockSizeA = 0;
                this.dockSizeB = this.service.config.global.maxOnScreen;
                this.blockSizeA = 0;
                this.blockSizeB = this.service.config.global.maxAtPosition;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
            }
            this.notifications = this.splitToasts(toasts.slice(this.dockSizeA, this.dockSizeB));
            this.stateChanged('mounted');
        });
    }
    // TODO: fix backdrop if more than one toast called in a row
    /**
     * Changes the backdrop opacity
     * @param event SnotifyEvent
     */
    stateChanged(event) {
        if (!this.withBackdrop.length) {
            if (this.backdrop >= 0) {
                this.backdrop = -1;
            }
            return;
        }
        switch (event) {
            case 'mounted':
                if (this.backdrop < 0) {
                    this.backdrop = 0;
                }
                break;
            case 'beforeShow':
                this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
                break;
            case 'beforeHide':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = 0;
                }
                break;
            case 'hidden':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = -1;
                }
                break;
        }
    }
    /**
     * Split toasts toasts into different objects
     * @param toasts SnotifyToast[]
     * @returns SnotifyNotifications
     */
    splitToasts(toasts) {
        const result = {};
        for (const property in SnotifyPosition) {
            if (SnotifyPosition.hasOwnProperty(property)) {
                result[SnotifyPosition[property]] = [];
            }
        }
        toasts.forEach((toast) => {
            result[toast.config.position].push(toast);
        });
        return result;
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
};
SnotifyComponent.ɵfac = function SnotifyComponent_Factory(t) { return new (t || SnotifyComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
SnotifyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SnotifyComponent, selectors: [["ng-snotify"]], decls: 3, vars: 4, consts: [["class", "snotify-backdrop", 3, "opacity", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "snotify-backdrop"], [3, "toast", "stateChanged", 4, "ngFor", "ngForOf"], [3, "toast", "stateChanged"]], template: function SnotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SnotifyComponent_div_0_Template, 1, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_Template, 3, 8, "div", 1);
        ɵngcc0.ɵɵpipe(2, "keys");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.backdrop >= 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx.notifications));
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ToastComponent], pipes: [ɵngcc3.KeysPipe, ɵngcc1.SlicePipe], encapsulation: 2 });
SnotifyComponent.ctorParameters = () => [
    { type: SnotifyService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify',
                template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, null); })();
export { SnotifyComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9uZy1zbm90aWZ5L2xpYi9jb21wb25lbnRzL3Nub3RpZnkvc25vdGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUloRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtBQUFHLElBa0M5QixZQUFvQixPQUF1QjtBQUFJLFFBQTNCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0FBQUMsUUFUNUM7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFFLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQixJQUtnRCxDQUFDO0FBQ2pELElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBc0IsRUFBRSxFQUFFO0FBQzdFLFlBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQy9DLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ2pFLGdCQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ25DLGdCQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ3BF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QUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFDQSxBQUdBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBRUEsQUFJQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFFQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUF0RkEsQUFBQSxBQWxDQSxBQUFBLEFBTEEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUF3SEEsQUF4SEEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNub3RpZnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc25vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU25vdGlmeVRvYXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Nub3RpZnktdG9hc3QubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU25vdGlmeU5vdGlmaWNhdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Nub3RpZnktbm90aWZpY2F0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTbm90aWZ5UG9zaXRpb24gfSBmcm9tICcuLi8uLi9lbnVtcy9zbm90aWZ5LXBvc2l0aW9uLmVudW0nO1xyXG5pbXBvcnQgeyBTbm90aWZ5RXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudC50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctc25vdGlmeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Nub3RpZnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFNub3RpZnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqXHJcbiAgICogVG9hc3RzIGFycmF5XHJcbiAgICovXHJcbiAgbm90aWZpY2F0aW9uczogU25vdGlmeU5vdGlmaWNhdGlvbnM7XHJcbiAgLyoqXHJcbiAgICogVG9hc3RzIGVtaXR0ZXJcclxuICAgKi9cclxuICBlbWl0dGVyOiBTdWJzY3JpcHRpb247XHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZvciBzbGljZSBwaXBlIChtYXhPblNjcmVlbilcclxuICAgKi9cclxuICBkb2NrU2l6ZUE6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBIZWxwZXIgZm9yIHNsaWNlIHBpcGUgKG1heE9uU2NyZWVuKVxyXG4gICAqL1xyXG4gIGRvY2tTaXplQjogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhlbHBlciBmb3Igc2xpY2UgcGlwZSAobWF4QXRQb3NpdGlvbilcclxuICAgKi9cclxuICBibG9ja1NpemVBOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZvciBzbGljZSBwaXBlIChtYXhBdFBvc2l0aW9uKVxyXG4gICAqL1xyXG4gIGJsb2NrU2l6ZUI6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBCYWNrZHJvcCBPcGFjaXR5XHJcbiAgICovXHJcbiAgYmFja2Ryb3AgPSAtMTtcclxuICAvKipcclxuICAgKiBIb3cgbWFueSB0b2FzdHMgd2l0aCBiYWNrZHJvcCBpbiBjdXJyZW50IHF1ZXVlXHJcbiAgICovXHJcbiAgd2l0aEJhY2tkcm9wOiBTbm90aWZ5VG9hc3RbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBTbm90aWZ5U2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdCBiYXNlIG9wdGlvbnMuIFN1YnNjcmliZSB0byBvcHRpb25zLCBsaWZlY3ljbGUgY2hhbmdlXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLnNlcnZpY2UuZW1pdHRlci5zdWJzY3JpYmUoKHRvYXN0czogU25vdGlmeVRvYXN0W10pID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2VydmljZS5jb25maWcuZ2xvYmFsLm5ld09uVG9wKSB7XHJcbiAgICAgICAgdGhpcy5kb2NrU2l6ZUEgPSAtdGhpcy5zZXJ2aWNlLmNvbmZpZy5nbG9iYWwubWF4T25TY3JlZW47XHJcbiAgICAgICAgdGhpcy5kb2NrU2l6ZUIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVBID0gLXRoaXMuc2VydmljZS5jb25maWcuZ2xvYmFsLm1heEF0UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVCID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdG9hc3RzLmZpbHRlcih0b2FzdCA9PiB0b2FzdC5jb25maWcuYmFja2Ryb3AgPj0gMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kb2NrU2l6ZUEgPSAwO1xyXG4gICAgICAgIHRoaXMuZG9ja1NpemVCID0gdGhpcy5zZXJ2aWNlLmNvbmZpZy5nbG9iYWwubWF4T25TY3JlZW47XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemVBID0gMDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZUIgPSB0aGlzLnNlcnZpY2UuY29uZmlnLmdsb2JhbC5tYXhBdFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdG9hc3RzLmZpbHRlcih0b2FzdCA9PiB0b2FzdC5jb25maWcuYmFja2Ryb3AgPj0gMCkucmV2ZXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IHRoaXMuc3BsaXRUb2FzdHModG9hc3RzLnNsaWNlKHRoaXMuZG9ja1NpemVBLCB0aGlzLmRvY2tTaXplQikpO1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlZCgnbW91bnRlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBmaXggYmFja2Ryb3AgaWYgbW9yZSB0aGFuIG9uZSB0b2FzdCBjYWxsZWQgaW4gYSByb3dcclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSBiYWNrZHJvcCBvcGFjaXR5XHJcbiAgICogQHBhcmFtIGV2ZW50IFNub3RpZnlFdmVudFxyXG4gICAqL1xyXG4gIHN0YXRlQ2hhbmdlZChldmVudDogU25vdGlmeUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMud2l0aEJhY2tkcm9wLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5iYWNrZHJvcCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgY2FzZSAnbW91bnRlZCc6XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3AgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLmJhY2tkcm9wID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JlZm9yZVNob3cnOlxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcFt0aGlzLndpdGhCYWNrZHJvcC5sZW5ndGggLSAxXS5jb25maWcuYmFja2Ryb3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JlZm9yZUhpZGUnOlxyXG4gICAgICAgIGlmICh0aGlzLndpdGhCYWNrZHJvcC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuYmFja2Ryb3AgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaGlkZGVuJzpcclxuICAgICAgICBpZiAodGhpcy53aXRoQmFja2Ryb3AubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmJhY2tkcm9wID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3BsaXQgdG9hc3RzIHRvYXN0cyBpbnRvIGRpZmZlcmVudCBvYmplY3RzXHJcbiAgICogQHBhcmFtIHRvYXN0cyBTbm90aWZ5VG9hc3RbXVxyXG4gICAqIEByZXR1cm5zIFNub3RpZnlOb3RpZmljYXRpb25zXHJcbiAgICovXHJcbiAgc3BsaXRUb2FzdHModG9hc3RzOiBTbm90aWZ5VG9hc3RbXSk6IFNub3RpZnlOb3RpZmljYXRpb25zIHtcclxuICAgIGNvbnN0IHJlc3VsdDogU25vdGlmeU5vdGlmaWNhdGlvbnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIFNub3RpZnlQb3NpdGlvbikge1xyXG4gICAgICBpZiAoU25vdGlmeVBvc2l0aW9uLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgIHJlc3VsdFtTbm90aWZ5UG9zaXRpb25bcHJvcGVydHldXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9hc3RzLmZvckVhY2goKHRvYXN0OiBTbm90aWZ5VG9hc3QpID0+IHtcclxuICAgICAgcmVzdWx0W3RvYXN0LmNvbmZpZy5wb3NpdGlvbiBhcyBzdHJpbmddLnB1c2godG9hc3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlIHN1YnNjcmlwdGlvbnNcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZW1pdHRlci51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=