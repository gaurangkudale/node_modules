import { __decorate, __param } from "tslib";
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';
import { Subject, fromEvent } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Optional, ElementRef, Directive, OnInit, DoCheck, OnChanges, OnDestroy, Input, Output, EventEmitter, SimpleChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { Geometry, Position } from './perfect-scrollbar.interfaces';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
import * as ɵngcc0 from '@angular/core';
let PerfectScrollbarDirective = class PerfectScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject();
        this.disabled = false;
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
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new PerfectScrollbar(this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new ResizeObserver(() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    fromEvent(this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && isPlatformBrowser(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};
PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
PerfectScrollbarDirective.ctorParameters = () => [
    { type: NgZone },
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
];
__decorate([
    Input()
], PerfectScrollbarDirective.prototype, "disabled", void 0);
__decorate([
    Input('perfectScrollbar')
], PerfectScrollbarDirective.prototype, "config", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
__decorate([
    Output()
], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
PerfectScrollbarDirective = __decorate([ __param(3, Inject(PLATFORM_ID)),
    __param(4, Optional()), __param(4, Inject(PERFECT_SCROLLBAR_CONFIG))
], PerfectScrollbarDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarDirective, [{
        type: Directive,
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.KeyValueDiffers }, { type: ɵngcc0.ElementRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
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
            type: Input,
            args: ['perfectScrollbar']
        }] }); })();
export { PerfectScrollbarDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL2xpYi9wZXJmZWN0LXNjcm9sbGJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sZ0JBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxjQUFjLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUN0RCxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2xFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUNoQyxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU14RixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtBQUFHLElBNkJ2QyxZQUFvQixJQUFZLEVBQVUsT0FBd0IsRUFDekQsVUFBc0IsRUFBK0IsVUFBa0IsRUFDeEIsUUFBeUM7QUFBSSxRQUZqRixTQUFJLEdBQUosSUFBSSxDQUFRO0FBQUMsUUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtBQUFDLFFBQzFELGVBQVUs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LFNBQUMsV0FBVztBQUFTLDRDQUMxRCxRQUFRLFlBQUksTUFBTSxTQUFDLHdCQUF3QjtBQUFRO0FBbkI3QztBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDJEQUEwQjtBQUVSO0FBQWEsSUFBdkMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0FBQUMseURBQXlDO0FBRTFEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNERBQXVEO0FBQ3ZEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNERBQXVEO0FBRXZEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsNkRBQXdEO0FBQ3hEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsK0RBQTBEO0FBQzFEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsK0RBQTBEO0FBQzFEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBRTNEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsOERBQXlEO0FBQ3pEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBQzNEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsOERBQXlEO0FBQ3pEO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUMsZ0VBQTJEO0FBM0IxRCx5QkFBeUIsb0JBSnJDLFNBQVMsQ0FBQyxVQUNULFFBQVEsakNBR04sQ0E4QmdDLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0NBakMzQyxvQkFBb0IsVUFDOUIsUUFBUSxFQUFFLHFCQUFxQixNQUNoQyxDQUFDLHJFQStCdUQsSUFDcEQsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUE7QUFBQyxHQS9CckMseUJBQXlCLENBK1NyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLFNBaFRZLHlCQUF5QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9uZSwgSW5qZWN0LCBPcHRpb25hbCwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLFxuICBPbkluaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvc2l0aW9uIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHLCBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnLCBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlLFxuICBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQsIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMgfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcGVyZmVjdFNjcm9sbGJhcl0nLFxuICBleHBvcnRBczogJ25neFBlcmZlY3RTY3JvbGxiYXInXG59KVxuZXhwb3J0IGNsYXNzIFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZTogUGVyZmVjdFNjcm9sbGJhciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcm86IFJlc2l6ZU9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBhbmltYXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgY29uZmlnRGlmZjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBuZ0Rlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdwZXJmZWN0U2Nyb2xsYmFyJykgY29uZmlnPzogUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxZOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxYOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxMZWZ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNTY3JvbGxSaWdodDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNZUmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1lSZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBwc1hSZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnKHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgICBjb25maWcuYXNzaWduKHRoaXMuY29uZmlnKTsgLy8gQ3VzdG9tIGNvbmZpZ3VyYXRpb25cblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5jb25maWdEaWZmKSB7XG4gICAgICAgIHRoaXMuY29uZmlnRGlmZiA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuY29uZmlnIHx8IHt9KS5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLmNvbmZpZ0RpZmYuZGlmZih0aGlzLmNvbmZpZyB8fCB7fSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMucm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSkge1xuICAgICAgICAgIHRoaXMucm8ub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJvLm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBldmVudFR5cGUgPSBldmVudE5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAoYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgICAgICAgIGZyb21FdmVudDxFdmVudD4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50VHlwZSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5uZ0Rlc3Ryb3kpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgdGhpc1tldmVudE5hbWVdLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMubmdEZXN0cm95Lm5leHQoKTtcbiAgICAgIHRoaXMubmdEZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICAgIGlmICh0aGlzLnJvKSB7XG4gICAgICAgIHRoaXMucm8uZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50aW1lb3V0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jb25maWdEaWZmICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmNvbmZpZ0RpZmYuZGlmZih0aGlzLmNvbmZpZyB8fCB7fSk7XG5cbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddICYmICFjaGFuZ2VzWydkaXNhYmxlZCddLmlzRmlyc3RDaGFuZ2UoKSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ2Rpc2FibGVkJ10ucHJldmlvdXNWYWx1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHMoKTogUGVyZmVjdFNjcm9sbGJhciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNvbmZpZ0RpZmYpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGNhbiBiZSBmaW5pc2hlZCBhZnRlciBkZXN0cm95IHNvIGNhdGNoIGVycm9yc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdlb21ldHJ5KHByZWZpeDogc3RyaW5nID0gJ3Njcm9sbCcpOiBHZW9tZXRyeSB7XG4gICAgcmV0dXJuIG5ldyBHZW9tZXRyeShcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3ByZWZpeCArICdMZWZ0J10sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnVG9wJ10sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnV2lkdGgnXSxcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3ByZWZpeCArICdIZWlnaHQnXVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcG9zaXRpb24oYWJzb2x1dGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBvc2l0aW9uIHtcbiAgICBpZiAoIWFic29sdXRlICYmIHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oXG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVhY2gueCB8fCAwLFxuICAgICAgICB0aGlzLmluc3RhbmNlLnJlYWNoLnkgfHwgMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxhYmxlKGRpcmVjdGlvbjogc3RyaW5nID0gJ2FueScpOiBib29sZWFuIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYW55Jykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSB8fFxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS15Jyk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdib3RoJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSAmJlxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS15Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS0nICsgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG8oeDogbnVtYmVyLCB5PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHkgPT0gbnVsbCAmJiBzcGVlZCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgeCwgc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIHgsIHNwZWVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHksIHNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1goeDogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIHgsIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1koeTogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgeSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvVG9wKG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0xlZnQob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1JpZ2h0KG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLVxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCBsZWZ0IC0gKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvQm90dG9tKG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgLVxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB0b3AgLSAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9FbGVtZW50KHFzOiBzdHJpbmcsIG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihxcyk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgZWxlbWVudFBvcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IHNjcm9sbGVyUG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteCcpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFsnc2Nyb2xsTGVmdCddO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWxlbWVudFBvcy5sZWZ0IC0gc2Nyb2xsZXJQb3MubGVmdCArIGN1cnJlbnRQb3M7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgcG9zaXRpb24gKyAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFsnc2Nyb2xsVG9wJ107XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlbGVtZW50UG9zLnRvcCAtIHNjcm9sbGVyUG9zLnRvcCArIGN1cnJlbnRQb3M7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCBwb3NpdGlvbiArIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGVTY3JvbGxpbmcodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFzcGVlZCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0pIHtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IDA7XG4gICAgICBsZXQgc2Nyb2xsQ291bnQgPSAwO1xuXG4gICAgICBsZXQgb2xkVGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdO1xuXG4gICAgICBjb25zdCBjb3NQYXJhbWV0ZXIgPSAob2xkVmFsdWUgLSB2YWx1ZSkgLyAyO1xuXG4gICAgICBjb25zdCBzdGVwID0gKG5ld1RpbWVzdGFtcDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNjcm9sbENvdW50ICs9IE1hdGguUEkgLyAoc3BlZWQgLyAobmV3VGltZXN0YW1wIC0gb2xkVGltZXN0YW1wKSk7XG5cbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICsgY29zUGFyYW1ldGVyICsgY29zUGFyYW1ldGVyICogTWF0aC5jb3Moc2Nyb2xsQ291bnQpKTtcblxuICAgICAgICAvLyBPbmx5IGNvbnRpbnVlIGFuaW1hdGlvbiBpZiBzY3JvbGwgcG9zaXRpb24gaGFzIG5vdCBjaGFuZ2VkXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdID09PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIGlmIChzY3JvbGxDb3VudCA+PSBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcodGFyZ2V0LCB2YWx1ZSwgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAgICAgLy8gT24gYSB6b29tZWQgb3V0IHBhZ2UgdGhlIHJlc3VsdGluZyBvZmZzZXQgbWF5IGRpZmZlclxuICAgICAgICAgICAgb2xkVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdO1xuXG4gICAgICAgICAgICBvbGRUaW1lc3RhbXAgPSBuZXdUaW1lc3RhbXA7XG5cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9XG59XG4iXX0=