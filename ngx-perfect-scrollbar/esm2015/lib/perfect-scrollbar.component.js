import { __decorate, __param } from "tslib";
import { Subject, merge, fromEvent } from 'rxjs';
import { mapTo, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Component, OnInit, OnDestroy, DoCheck, Input, Output, EventEmitter, HostBinding, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './perfect-scrollbar.directive';
import * as ɵngcc2 from '@angular/common';

function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelement(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 6);
    ɵngcc0.ɵɵelement(4, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
const _c0 = ["*"];
let PerfectScrollbarComponent = class PerfectScrollbarComponent {
    constructor(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new Subject();
        this.stateUpdate = new Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.stateUpdate
                .pipe(takeUntil(this.ngDestroy), distinctUntilChanged((a, b) => (a === b && !this.stateTimeout)))
                .subscribe((state) => {
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                    this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    this.interaction = false;
                    if (state === 'x') {
                        this.indicatorX = false;
                        this.states.left = false;
                        this.states.right = false;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        this.indicatorY = false;
                        this.states.top = false;
                        this.states.bottom = false;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        this.states.left = false;
                        this.states.right = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        this.states.top = false;
                        this.states.bottom = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.indicatorY = true;
                        }
                    }
                    if (this.autoPropagation && typeof window !== 'undefined') {
                        this.stateTimeout = window.setTimeout(() => {
                            this.indicatorX = false;
                            this.indicatorY = false;
                            this.stateTimeout = null;
                            if (this.interaction && (this.states.left || this.states.right)) {
                                this.allowPropagationX = true;
                            }
                            if (this.interaction && (this.states.top || this.states.bottom)) {
                                this.allowPropagationY = true;
                            }
                            this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                this.cdRef.markForCheck();
                this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(() => {
                if (this.directiveRef) {
                    const element = this.directiveRef.elementRef.nativeElement;
                    fromEvent(element, 'wheel')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollDeltaX = event.deltaX;
                            const scrollDeltaY = event.deltaY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    fromEvent(element, 'touchmove')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollPositionX = event.touches[0].clientX;
                            const scrollPositionY = event.touches[0].clientY;
                            const scrollDeltaX = scrollPositionX - this.scrollPositionX;
                            const scrollDeltaY = scrollPositionY - this.scrollPositionY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            this.scrollPositionX = scrollPositionX;
                            this.scrollPositionY = scrollPositionY;
                        }
                    });
                    merge(fromEvent(element, 'ps-scroll-x')
                        .pipe(mapTo('x')), fromEvent(element, 'ps-scroll-y')
                        .pipe(mapTo('y')), fromEvent(element, 'ps-x-reach-end')
                        .pipe(mapTo('right')), fromEvent(element, 'ps-y-reach-end')
                        .pipe(mapTo('bottom')), fromEvent(element, 'ps-x-reach-start')
                        .pipe(mapTo('left')), fromEvent(element, 'ps-y-reach-start')
                        .pipe(mapTo('top')))
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((state) => {
                        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
                            this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        this.directiveRef[eventName] = this[eventName];
                    }
                });
            }, 0);
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    }
    ngDoCheck() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                const element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    }
    checkPropagation(event, deltaX, deltaY) {
        this.interaction = true;
        const scrollDirectionX = (deltaX < 0) ? -1 : 1;
        const scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    }
};
PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
PerfectScrollbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(PerfectScrollbarDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps", ctx.usePSClass);
        ɵngcc0.ɵɵproperty("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollIndicators);
    } }, directives: [ɵngcc1.PerfectScrollbarDirective, ɵngcc2.NgIf], styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"], encapsulation: 2 });
PerfectScrollbarComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
__decorate([
    HostBinding('class.ps-show-limits'),
    Input()
], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
__decorate([
    HostBinding('class.ps-show-active'),
    Input()
], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
__decorate([
    Input()
], PerfectScrollbarComponent.prototype, "config", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
__decorate([
    ViewChild(PerfectScrollbarDirective, { static: true })
], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
PerfectScrollbarComponent = __decorate([ __param(2, Inject(PLATFORM_ID))
], PerfectScrollbarComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarComponent, [{
        type: Component,
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { disabled: [{
            type: Input
        }], usePSClass: [{
            type: Input
        }], autoPropagation: [{
            type: HostBinding,
            args: ['class.ps-show-limits']
        }, {
            type: Input
        }], scrollIndicators: [{
            type: HostBinding,
            args: ['class.ps-show-active']
        }, {
            type: Input
        }], psScrollY: [{
            type: Output
        }], psScrollX: [{
            type: Output
        }], psScrollUp: [{
            type: Output
        }], psScrollDown: [{
            type: Output
        }], psScrollLeft: [{
            type: Output
        }], psScrollRight: [{
            type: Output
        }], psYReachEnd: [{
            type: Output
        }], psYReachStart: [{
            type: Output
        }], psXReachEnd: [{
            type: Output
        }], psXReachStart: [{
            type: Output
        }], config: [{
            type: Input
        }], directiveRef: [{
            type: ViewChild,
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
export { PerfectScrollbarComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL2xpYi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUNoQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQ3BFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQXlCLHNCQUFzQixFQUNuQixNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTFFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0FBQUcsSUFxRHZDLFlBQW9CLElBQVksRUFBVSxLQUF3QixFQUNuQyxVQUFrQjtBQUFJLFFBRGpDLFNBQUksR0FBSixJQUFJLENBQVE7QUFBQyxRQUFTLFVBQUssR0FBTCxLQUFLLENBQW1CO0FBQUMsUUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtBQUFDLFFBckQzQyxXQUFNLEdBQVEsRUFBRSxDQUFDO0FBQzFCLFFBQ1MsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUFTLGVBQVUs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O0FBQ3JDLElBQUUsS0FBSyxFQUFFO0FBQUMsbUVBQWtDO0FBRWxDO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMseURBQXlDO0FBRXhDO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNERBQXVEO0FBQ3ZEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNERBQXVEO0FBRXZEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNkRBQXdEO0FBQ3hEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsK0RBQTBEO0FBQzFEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsK0RBQTBEO0FBQzFEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBRTNEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsOERBQXlEO0FBQ3pEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBQzNEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsOERBQXlEO0FBQ3pEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBRWI7QUFBYSxJQUFwRSxTQUFTLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFBQywrREFBeUM7QUFuRHRGLHlCQUF5QixvQkFWckMsU0FBUyxDQUFDLFVBQ1QsekJBU0UsQ0FzREMsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7QUEvRGQsRUFBRSxtQkFBbUIsckJBK0ROLEdBdERaLHlCQUF5QixDQW1RckM7QUEzUUMsUUFBUSxFQUFFLHFCQUFxQixVQUMvQjs7Ozs7b29CQUFpRCxVQUtqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7MjhQQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFxUUY7QUFBQyxTQXBRWSx5QkFBeUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QsIG1lcmdlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvLCB0YWtlVW50aWwsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab25lLCBJbmplY3QsIENvbXBvbmVudCxcbiAgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXG4gIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmUgfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJFdmVudCwgUGVyZmVjdFNjcm9sbGJhckV2ZW50cyxcbiAgUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4vcGVyZmVjdC1zY3JvbGxiYXIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlcmZlY3Qtc2Nyb2xsYmFyJyxcbiAgZXhwb3J0QXM6ICduZ3hQZXJmZWN0U2Nyb2xsYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vcGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmNzcycsXG4gICAgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJ1xuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBlcmZlY3RTY3JvbGxiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG4gIHB1YmxpYyBzdGF0ZXM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBpbmRpY2F0b3JYOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpbmRpY2F0b3JZOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGludGVyYWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzY3JvbGxQb3NpdGlvblg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsUG9zaXRpb25ZOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgc2Nyb2xsRGlyZWN0aW9uWDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxEaXJlY3Rpb25ZOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgdXNlUHJvcGFnYXRpb25YOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgdXNlUHJvcGFnYXRpb25ZOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBhbGxvd1Byb3BhZ2F0aW9uWDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGFsbG93UHJvcGFnYXRpb25ZOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdGF0ZVRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdEZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXRlVXBkYXRlOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdXNlUFNDbGFzczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcy1zaG93LWxpbWl0cycpXG4gIEBJbnB1dCgpIGF1dG9Qcm9wYWdhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHMtc2hvdy1hY3RpdmUnKVxuICBASW5wdXQoKSBzY3JvbGxJbmRpY2F0b3JzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY29uZmlnPzogUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxZOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxYOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxMZWZ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxSaWdodDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNZUmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1lSZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1hSZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoUGVyZmVjdFNjcm9sbGJhckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgZGlyZWN0aXZlUmVmPzogUGVyZmVjdFNjcm9sbGJhckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc3RhdGVVcGRhdGVcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4gKGEgPT09IGIgJiYgIXRoaXMuc3RhdGVUaW1lb3V0KSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGVUaW1lb3V0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGVUaW1lb3V0KTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ3gnIHx8IHN0YXRlID09PSAneScpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JYID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5yaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dQcm9wYWdhdGlvblggPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnRvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5ib3R0b20gPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93UHJvcGFnYXRpb25ZID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9wqBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2xlZnQnIHx8IHN0YXRlID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmlnaHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YXRlc1tzdGF0ZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICd0b3AnIHx8IHN0YXRlID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy50b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuYm90dG9tID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXNbc3RhdGVdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclkgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uICYmICh0aGlzLnN0YXRlcy5sZWZ0IHx8IHRoaXMuc3RhdGVzLnJpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb24gJiYgKHRoaXMuc3RhdGVzLnRvcCB8fCB0aGlzLnN0YXRlcy5ib3R0b20pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbG93UHJvcGFnYXRpb25ZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5kaXJlY3RpdmVSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgZnJvbUV2ZW50PFdoZWVsRXZlbnQ+KGVsZW1lbnQsICd3aGVlbCcpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuYXV0b1Byb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGFYID0gZXZlbnQuZGVsdGFYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWSA9IGV2ZW50LmRlbHRhWTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9wYWdhdGlvbihldmVudCwgc2Nyb2xsRGVsdGFYLCBzY3JvbGxEZWx0YVkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50PihlbGVtZW50LCAndG91Y2htb3ZlJylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5uZ0Rlc3Ryb3kpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5hdXRvUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvblggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb25ZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGFYID0gc2Nyb2xsUG9zaXRpb25YIC0gdGhpcy5zY3JvbGxQb3NpdGlvblg7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsRGVsdGFZID0gc2Nyb2xsUG9zaXRpb25ZIC0gdGhpcy5zY3JvbGxQb3NpdGlvblk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUHJvcGFnYXRpb24oZXZlbnQsIHNjcm9sbERlbHRhWCwgc2Nyb2xsRGVsdGFZKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25YID0gc2Nyb2xsUG9zaXRpb25YO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb25ZID0gc2Nyb2xsUG9zaXRpb25ZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMtc2Nyb2xsLXgnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCd4JykpLFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXNjcm9sbC15JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygneScpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy14LXJlYWNoLWVuZCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ3JpZ2h0JykpLFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXktcmVhY2gtZW5kJylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygnYm90dG9tJykpLFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXgtcmVhY2gtc3RhcnQnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCdsZWZ0JykpLFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXktcmVhY2gtc3RhcnQnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCd0b3AnKSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uIHx8IHRoaXMuc2Nyb2xsSW5kaWNhdG9ycykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlVXBkYXRlLm5leHQoc3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgUGVyZmVjdFNjcm9sbGJhckV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IFBlcmZlY3RTY3JvbGxiYXJFdmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGl2ZVJlZikge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVSZWZbZXZlbnROYW1lXSA9IHRoaXNbZXZlbnROYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMubmdEZXN0cm95Lm5leHQoKTtcbiAgICAgIHRoaXMubmdEZXN0cm95LnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlVGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGVUaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmF1dG9Qcm9wYWdhdGlvbiAmJiB0aGlzLmRpcmVjdGl2ZVJlZikge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5kaXJlY3RpdmVSZWYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHRoaXMudXNlUHJvcGFnYXRpb25YID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteCcpO1xuXG4gICAgICAgIHRoaXMudXNlUHJvcGFnYXRpb25ZID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tQcm9wYWdhdGlvbihldmVudDogYW55LCBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIpOiB2b2lkwqB7XG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9IHRydWU7XG5cbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb25YID0gKGRlbHRhWCA8IDApID8gLTEgOiAxO1xuICAgIGNvbnN0IHNjcm9sbERpcmVjdGlvblkgPSAoZGVsdGFZIDwgMCkgPyAtMSA6IDE7XG5cbiAgICBpZiAoKHRoaXMudXNlUHJvcGFnYXRpb25YICYmIHRoaXMudXNlUHJvcGFnYXRpb25ZKSB8fFxuICAgICAgICAodGhpcy51c2VQcm9wYWdhdGlvblggJiYgKCF0aGlzLmFsbG93UHJvcGFnYXRpb25YIHx8XG4gICAgICAgICh0aGlzLnNjcm9sbERpcmVjdGlvblggIT09IHNjcm9sbERpcmVjdGlvblgpKSkgfHxcbiAgICAgICAgKHRoaXMudXNlUHJvcGFnYXRpb25ZICYmICghdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWSB8fFxuICAgICAgICAodGhpcy5zY3JvbGxEaXJlY3Rpb25ZICE9PSBzY3JvbGxEaXJlY3Rpb25ZKSkpKVxuICAgIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoISFkZWx0YVgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlyZWN0aW9uWCA9IHNjcm9sbERpcmVjdGlvblg7XG4gICAgfVxuXG4gICAgaWYgKCEhZGVsdGFZKSB7XG4gICAgICB0aGlzLnNjcm9sbERpcmVjdGlvblkgPSBzY3JvbGxEaXJlY3Rpb25ZO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGVVcGRhdGUubmV4dCgnaW50ZXJhY3Rpb24nKTtcblxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=