/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scrollable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { getRtlScrollAxisType, RtlScrollAxisType, supportsScrollBehavior } from '@angular/cdk/platform';
import { Directive, ElementRef, NgZone, Optional } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollDispatcher } from './scroll-dispatcher';
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
export class CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} scrollDispatcher
     * @param {?} ngZone
     * @param {?=} dir
     */
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new Subject();
        this._elementScrolled = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => fromEvent(this.elementRef.nativeElement, 'scroll').pipe(takeUntil(this._destroyed))
            .subscribe(observer)))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.scrollDispatcher.register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    elementScrolled() {
        return this._elementScrolled;
    }
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    scrollTo(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
                options.left = options.right;
            }
            else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _applyScrollToOptions(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    measureScrollOffset(from) {
        /** @type {?} */
        const LEFT = 'left';
        /** @type {?} */
        const RIGHT = 'right';
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    }
}
CdkScrollable.ɵfac = function CdkScrollable_Factory(t) { return new (t || CdkScrollable)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ScrollDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
CdkScrollable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkScrollable, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
/** @nocollapse */
CdkScrollable.ctorParameters = () => [
    { type: ElementRef },
    { type: ScrollDispatcher },
    { type: NgZone },
    { type: Directionality, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkScrollable, [{
        type: Directive,
        args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ScrollDispatcher }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    CdkScrollable.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    CdkScrollable.prototype._elementScrolled;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.scrollDispatcher;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.ngZone;
    /**
     * @type {?}
     * @protected
     */
    CdkScrollable.prototype.dir;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY3JvbGxpbmcvc2Nyb2xsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3ZCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFxQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRDtBQUNHO0FBQ2tDO0FBRUM7QUFFbkM7OztBQXNCSCxNQUFNLE9BQU8sYUFBYTtBQUFHO0FBQVE7QUFDN0I7QUFFSjtBQUF5QjtBQUF1QjtBQUFRLElBSzFELFlBQXNCLFVBQW1DLEVBQ25DLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ0YsR0FBb0I7QUFBSSxRQUhwQyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtBQUFDLFFBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0FBQUMsUUFDSCxRQUFHLEdBQUgsR0FBRyxDQUFpQjtBQUFDLFFBVi9DLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLFFBQ1UscUJBQWdCLEdBQXNCLElBQUksVUFBVTtBQUFNO0FBQy9EO0FBQXVCO0FBQVksUUFEdUIsQ0FBQyxRQUF5QixFQUFFLEVBQUUsQ0FDdkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7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ZixtQ0FBbUM7QUFDckM7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBQTlDLHlDQUdtQztBQUNyQztBQUNPO0FBQWlCO0FBQWtCO0FBQVEsSUFBcEMsbUNBQTZDO0FBQUM7QUFDckQ7QUFBaUI7QUFBa0I7QUFBUSxJQUFwQyx5Q0FBNEM7QUFBQztBQUNwRDtBQUFpQjtBQUN0QjtBQUFRLElBREksK0JBQXdCO0FBQUM7QUFDaEM7QUFBaUI7QUFBa0I7QUFBUSxJQUFwQyw0QkFBMEM7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIGdldFJ0bFNjcm9sbEF4aXNUeXBlLFxuICBSdGxTY3JvbGxBeGlzVHlwZSxcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvclxufSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTY3JvbGxEaXNwYXRjaGVyfSBmcm9tICcuL3Njcm9sbC1kaXNwYXRjaGVyJztcblxuZXhwb3J0IHR5cGUgX1dpdGhvdXQ8VD4gPSB7W1AgaW4ga2V5b2YgVF0/OiBuZXZlcn07XG5leHBvcnQgdHlwZSBfWE9SPFQsIFU+ID0gKF9XaXRob3V0PFQ+ICYgVSkgfCAoX1dpdGhvdXQ8VT4gJiBUKTtcbmV4cG9ydCB0eXBlIF9Ub3AgPSB7dG9wPzogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIF9Cb3R0b20gPSB7Ym90dG9tPzogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIF9MZWZ0ID0ge2xlZnQ/OiBudW1iZXJ9O1xuZXhwb3J0IHR5cGUgX1JpZ2h0ID0ge3JpZ2h0PzogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIF9TdGFydCA9IHtzdGFydD86IG51bWJlcn07XG5leHBvcnQgdHlwZSBfRW5kID0ge2VuZD86IG51bWJlcn07XG5leHBvcnQgdHlwZSBfWEF4aXMgPSBfWE9SPF9YT1I8X0xlZnQsIF9SaWdodD4sIF9YT1I8X1N0YXJ0LCBfRW5kPj47XG5leHBvcnQgdHlwZSBfWUF4aXMgPSBfWE9SPF9Ub3AsIF9Cb3R0b20+O1xuXG4vKipcbiAqIEFuIGV4dGVuZGVkIHZlcnNpb24gb2YgU2Nyb2xsVG9PcHRpb25zIHRoYXQgYWxsb3dzIGV4cHJlc3Npbmcgc2Nyb2xsIG9mZnNldHMgcmVsYXRpdmUgdG8gdGhlXG4gKiB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHN0YXJ0LCBvciBlbmQgb2YgdGhlIHZpZXdwb3J0IHJhdGhlciB0aGFuIGp1c3QgdGhlIHRvcCBhbmQgbGVmdC5cbiAqIFBsZWFzZSBub3RlOiB0aGUgdG9wIGFuZCBib3R0b20gcHJvcGVydGllcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBhcyBhcmUgdGhlIGxlZnQsIHJpZ2h0LFxuICogc3RhcnQsIGFuZCBlbmQgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IHR5cGUgRXh0ZW5kZWRTY3JvbGxUb09wdGlvbnMgPSBfWEF4aXMgJiBfWUF4aXMgJiBTY3JvbGxPcHRpb25zO1xuXG4vKipcbiAqIFNlbmRzIGFuIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSdzIGVsZW1lbnQgaXMgc2Nyb2xsZWQuIFJlZ2lzdGVycyBpdHNlbGYgd2l0aCB0aGVcbiAqIFNjcm9sbERpc3BhdGNoZXIgc2VydmljZSB0byBpbmNsdWRlIGl0c2VsZiBhcyBwYXJ0IG9mIGl0cyBjb2xsZWN0aW9uIG9mIHNjcm9sbGluZyBldmVudHMgdGhhdCBpdFxuICogY2FuIGJlIGxpc3RlbmVkIHRvIHRocm91Z2ggdGhlIHNlcnZpY2UuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGstc2Nyb2xsYWJsZV0sIFtjZGtTY3JvbGxhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU2Nyb2xsYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIF9lbGVtZW50U2Nyb2xsZWQ6IE9ic2VydmFibGU8RXZlbnQ+ID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFdmVudD4pID0+XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUob2JzZXJ2ZXIpKSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgZGlyPzogRGlyZWN0aW9uYWxpdHkpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY3JvbGxEaXNwYXRjaGVyLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY3JvbGxEaXNwYXRjaGVyLmRlcmVnaXN0ZXIodGhpcyk7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIGEgc2Nyb2xsIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIGVsZW1lbnRTY3JvbGxlZCgpOiBPYnNlcnZhYmxlPEV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRTY3JvbGxlZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBFbGVtZW50UmVmIGZvciB0aGUgdmlld3BvcnQuICovXG4gIGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgc3BlY2lmaWVkIG9mZnNldHMuIFRoaXMgaXMgYSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIGJyb3dzZXIncyBuYXRpdmUgc2Nyb2xsVG9cbiAgICogbWV0aG9kLCBzaW5jZSBicm93c2VycyBhcmUgbm90IGNvbnNpc3RlbnQgYWJvdXQgd2hhdCBzY3JvbGxMZWZ0IG1lYW5zIGluIFJUTC4gRm9yIHRoaXMgbWV0aG9kXG4gICAqIGxlZnQgYW5kIHJpZ2h0IGFsd2F5cyByZWZlciB0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSBvZiB0aGUgc2Nyb2xsaW5nIGNvbnRhaW5lciBpcnJlc3BlY3RpdmVcbiAgICogb2YgdGhlIGxheW91dCBkaXJlY3Rpb24uIHN0YXJ0IGFuZCBlbmQgcmVmZXIgdG8gbGVmdCBhbmQgcmlnaHQgaW4gYW4gTFRSIGNvbnRleHQgYW5kIHZpY2UtdmVyc2FcbiAgICogaW4gYW4gUlRMIGNvbnRleHQuXG4gICAqIEBwYXJhbSBvcHRpb25zIHNwZWNpZmllZCB0aGUgb2Zmc2V0cyB0byBzY3JvbGwgdG8uXG4gICAqL1xuICBzY3JvbGxUbyhvcHRpb25zOiBFeHRlbmRlZFNjcm9sbFRvT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaXNSdGwgPSB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PSAncnRsJztcblxuICAgIC8vIFJld3JpdGUgc3RhcnQgJiBlbmQgb2Zmc2V0cyBhcyByaWdodCBvciBsZWZ0IG9mZnNldHMuXG4gICAgb3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5sZWZ0ID09IG51bGwgPyAoaXNSdGwgPyBvcHRpb25zLmVuZCA6IG9wdGlvbnMuc3RhcnQpIDogb3B0aW9ucy5sZWZ0O1xuICAgIG9wdGlvbnMucmlnaHQgPSBvcHRpb25zLnJpZ2h0ID09IG51bGwgPyAoaXNSdGwgPyBvcHRpb25zLnN0YXJ0IDogb3B0aW9ucy5lbmQpIDogb3B0aW9ucy5yaWdodDtcblxuICAgIC8vIFJld3JpdGUgdGhlIGJvdHRvbSBvZmZzZXQgYXMgYSB0b3Agb2Zmc2V0LlxuICAgIGlmIChvcHRpb25zLmJvdHRvbSAhPSBudWxsKSB7XG4gICAgICAob3B0aW9ucyBhcyBfV2l0aG91dDxfQm90dG9tPiAmIF9Ub3ApLnRvcCA9XG4gICAgICAgICAgZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0IC0gb3B0aW9ucy5ib3R0b207XG4gICAgfVxuXG4gICAgLy8gUmV3cml0ZSB0aGUgcmlnaHQgb2Zmc2V0IGFzIGEgbGVmdCBvZmZzZXQuXG4gICAgaWYgKGlzUnRsICYmIGdldFJ0bFNjcm9sbEF4aXNUeXBlKCkgIT0gUnRsU2Nyb2xsQXhpc1R5cGUuTk9STUFMKSB7XG4gICAgICBpZiAob3B0aW9ucy5sZWZ0ICE9IG51bGwpIHtcbiAgICAgICAgKG9wdGlvbnMgYXMgX1dpdGhvdXQ8X0xlZnQ+ICYgX1JpZ2h0KS5yaWdodCA9XG4gICAgICAgICAgICBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoIC0gb3B0aW9ucy5sZWZ0O1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0UnRsU2Nyb2xsQXhpc1R5cGUoKSA9PSBSdGxTY3JvbGxBeGlzVHlwZS5JTlZFUlRFRCkge1xuICAgICAgICBvcHRpb25zLmxlZnQgPSBvcHRpb25zLnJpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChnZXRSdGxTY3JvbGxBeGlzVHlwZSgpID09IFJ0bFNjcm9sbEF4aXNUeXBlLk5FR0FURUQpIHtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5yaWdodCA/IC1vcHRpb25zLnJpZ2h0IDogb3B0aW9ucy5yaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMucmlnaHQgIT0gbnVsbCkge1xuICAgICAgICAob3B0aW9ucyBhcyBfV2l0aG91dDxfUmlnaHQ+ICYgX0xlZnQpLmxlZnQgPVxuICAgICAgICAgICAgZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIG9wdGlvbnMucmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlTY3JvbGxUb09wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseVNjcm9sbFRvT3B0aW9ucyhvcHRpb25zOiBTY3JvbGxUb09wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKSkge1xuICAgICAgZWwuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLnRvcCAhPSBudWxsKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG9wdGlvbnMudG9wO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMubGVmdCAhPSBudWxsKSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBvcHRpb25zLmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lYXN1cmVzIHRoZSBzY3JvbGwgb2Zmc2V0IHJlbGF0aXZlIHRvIHRoZSBzcGVjaWZpZWQgZWRnZSBvZiB0aGUgdmlld3BvcnQuIFRoaXMgbWV0aG9kIGNhbiBiZVxuICAgKiB1c2VkIGluc3RlYWQgb2YgZGlyZWN0bHkgY2hlY2tpbmcgc2Nyb2xsTGVmdCBvciBzY3JvbGxUb3AsIHNpbmNlIGJyb3dzZXJzIGFyZSBub3QgY29uc2lzdGVudFxuICAgKiBhYm91dCB3aGF0IHNjcm9sbExlZnQgbWVhbnMgaW4gUlRMLiBUaGUgdmFsdWVzIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIGFyZSBub3JtYWxpemVkIHN1Y2ggdGhhdFxuICAgKiBsZWZ0IGFuZCByaWdodCBhbHdheXMgcmVmZXIgdG8gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcm9sbGluZyBjb250YWluZXIgaXJyZXNwZWN0aXZlXG4gICAqIG9mIHRoZSBsYXlvdXQgZGlyZWN0aW9uLiBzdGFydCBhbmQgZW5kIHJlZmVyIHRvIGxlZnQgYW5kIHJpZ2h0IGluIGFuIExUUiBjb250ZXh0IGFuZCB2aWNlLXZlcnNhXG4gICAqIGluIGFuIFJUTCBjb250ZXh0LlxuICAgKiBAcGFyYW0gZnJvbSBUaGUgZWRnZSB0byBtZWFzdXJlIGZyb20uXG4gICAqL1xuICBtZWFzdXJlU2Nyb2xsT2Zmc2V0KGZyb206ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ3N0YXJ0JyB8ICdlbmQnKTogbnVtYmVyIHtcbiAgICBjb25zdCBMRUZUID0gJ2xlZnQnO1xuICAgIGNvbnN0IFJJR0hUID0gJ3JpZ2h0JztcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChmcm9tID09ICd0b3AnKSB7XG4gICAgICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICBpZiAoZnJvbSA9PSAnYm90dG9tJykge1xuICAgICAgcmV0dXJuIGVsLnNjcm9sbEhlaWdodCAtIGVsLmNsaWVudEhlaWdodCAtIGVsLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICAvLyBSZXdyaXRlIHN0YXJ0ICYgZW5kIGFzIGxlZnQgb3IgcmlnaHQgb2Zmc2V0cy5cbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09ICdydGwnO1xuICAgIGlmIChmcm9tID09ICdzdGFydCcpIHtcbiAgICAgIGZyb20gPSBpc1J0bCA/IFJJR0hUIDogTEVGVDtcbiAgICB9IGVsc2UgaWYgKGZyb20gPT0gJ2VuZCcpIHtcbiAgICAgIGZyb20gPSBpc1J0bCA/IExFRlQgOiBSSUdIVDtcbiAgICB9XG5cbiAgICBpZiAoaXNSdGwgJiYgZ2V0UnRsU2Nyb2xsQXhpc1R5cGUoKSA9PSBSdGxTY3JvbGxBeGlzVHlwZS5JTlZFUlRFRCkge1xuICAgICAgLy8gRm9yIElOVkVSVEVELCBzY3JvbGxMZWZ0IGlzIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kXG4gICAgICAvLyAwIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAgICBpZiAoZnJvbSA9PSBMRUZUKSB7XG4gICAgICAgIHJldHVybiBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoIC0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbC5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNSdGwgJiYgZ2V0UnRsU2Nyb2xsQXhpc1R5cGUoKSA9PSBSdGxTY3JvbGxBeGlzVHlwZS5ORUdBVEVEKSB7XG4gICAgICAvLyBGb3IgTkVHQVRFRCwgc2Nyb2xsTGVmdCBpcyAtKHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpIHdoZW4gc2Nyb2xsZWQgYWxsIHRoZSB3YXkgbGVmdCBhbmRcbiAgICAgIC8vIDAgd2hlbiBzY3JvbGxlZCBhbGwgdGhlIHdheSByaWdodC5cbiAgICAgIGlmIChmcm9tID09IExFRlQpIHtcbiAgICAgICAgcmV0dXJuIGVsLnNjcm9sbExlZnQgKyBlbC5zY3JvbGxXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC1lbC5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGb3IgTk9STUFMLCBhcyB3ZWxsIGFzIG5vbi1SVEwgY29udGV4dHMsIHNjcm9sbExlZnQgaXMgMCB3aGVuIHNjcm9sbGVkIGFsbCB0aGUgd2F5IGxlZnQgYW5kXG4gICAgICAvLyAoc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkgd2hlbiBzY3JvbGxlZCBhbGwgdGhlIHdheSByaWdodC5cbiAgICAgIGlmIChmcm9tID09IExFRlQpIHtcbiAgICAgICAgcmV0dXJuIGVsLnNjcm9sbExlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZWwuc2Nyb2xsV2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIGVsLnNjcm9sbExlZnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=