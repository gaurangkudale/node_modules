/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable, NgZone } from '@angular/core';
import { merge, of as observableOf, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/** Time in ms to throttle the resize events by default. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular(function () {
            _this._change = _platform.isBrowser ?
                merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange')) :
                observableOf();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe(function () { return _this._updateViewportSize(); });
        });
    }
    ViewportRuler.prototype.ngOnDestroy = function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    ViewportRuler.prototype.getViewportSize = function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = null;
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    ViewportRuler.prototype.getViewportRect = function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    ViewportRuler.prototype.getViewportScrollPosition = function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var documentElement = document.documentElement;
        var documentRect = documentElement.getBoundingClientRect();
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    ViewportRuler.prototype.change = function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    ViewportRuler.prototype._updateViewportSize = function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: Platform },
        { type: NgZone }
    ]; };
    ViewportRuler.ɵprov = i0.ɵɵdefineInjectable({ factory: function ViewportRuler_Factory() { return new ViewportRuler(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i0.NgZone)); }, token: ViewportRuler, providedIn: "root" });
ViewportRuler.ɵfac = function ViewportRuler_Factory(t) { return new (t || ViewportRuler)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ViewportRuler, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }, { type: ɵngcc0.NgZone }]; }, null); })();
    return ViewportRuler;
}());
export { ViewportRuler };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQtcnVsZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL3ZpZXdwb3J0LXJ1bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLFNBQVMsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDO0FBQ29DO0FBQXBDLDJEQUEyRDs7O0FBQzNELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztBQVF0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDZSxJQVViLHVCQUFvQixTQUFtQixFQUFFLE1BQWM7QUFDekQsUUFERSxpQkFVQztBQUNILFFBWHNCLGNBQVMsR0FBVCxTQUFTLENBQVU7QUFBQyxRQUN0QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7QUFDdkIsWUFBQSxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQyxnQkFBVSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGdCQUFVLFlBQVksRUFBRSxDQUFDO0FBQ3pCLFlBQ00sc0VBQXNFO0FBQzVFLFlBQU0sbUVBQW1FO0FBQ3pFLFlBQU0sS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFB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VSxJQUFJLENBQUMsQ0FBQztBQUNsRCxRQUNJLE9BQU8sRUFBQyxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUsOEJBQU0sR0FBTixVQUFPLFlBQTBDO0FBQUksUUFBOUMsNkJBQUEsRUFBQSxrQ0FBMEM7QUFBSSxRQUNuRCxPQUFPLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hGLElBQUUsQ0FBQztBQUVILElBQUUsd0NBQXdDO0FBQzFDLElBQVUsMkNBQW1CLEdBQTNCO0FBQWMsUUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsWUFBUSxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztBQUNoRSxZQUFRLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDOUIsSUFBRSxDQUFDLENBekdNO0FBQUM7MEJBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSx6REFDVTtDQURSLE1BQU0sRUFBQyxUQUc1QixnQkFyQkksUUFBUTtBQUFJLGdCQUNBLE1BQU07QUFBRztBQUFVOzs7OztrR0FLaEM7QUFBQyx3QkFkUjtBQUFFLENBcUlELEFBM0dELElBMkdDO0FBQ0QsU0EzR2EsYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0luamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHthdWRpdFRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIFRpbWUgaW4gbXMgdG8gdGhyb3R0bGUgdGhlIHJlc2l6ZSBldmVudHMgYnkgZGVmYXVsdC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFU0laRV9USU1FID0gMjA7XG5cbi8qKiBPYmplY3QgdGhhdCBob2xkcyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB2aWV3cG9ydCBpbiBlYWNoIGRpcmVjdGlvbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlld3BvcnRTY3JvbGxQb3NpdGlvbiB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG59XG5cbi8qKlxuICogU2ltcGxlIHV0aWxpdHkgZm9yIGdldHRpbmcgdGhlIGJvdW5kcyBvZiB0aGUgYnJvd3NlciB2aWV3cG9ydC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgVmlld3BvcnRSdWxlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDYWNoZWQgdmlld3BvcnQgZGltZW5zaW9ucy4gKi9cbiAgcHJpdmF0ZSBfdmlld3BvcnRTaXplOiB7d2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXJ9O1xuXG4gIC8qKiBTdHJlYW0gb2Ygdmlld3BvcnQgY2hhbmdlIGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfY2hhbmdlOiBPYnNlcnZhYmxlPEV2ZW50PjtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHN0cmVhbXMgdGhhdCBpbnZhbGlkYXRlIHRoZSBjYWNoZWQgdmlld3BvcnQgZGltZW5zaW9ucy4gKi9cbiAgcHJpdmF0ZSBfaW52YWxpZGF0ZUNhY2hlOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLCBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2UgPSBfcGxhdGZvcm0uaXNCcm93c2VyID9cbiAgICAgICAgICBtZXJnZShmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksIGZyb21FdmVudCh3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScpKSA6XG4gICAgICAgICAgb2JzZXJ2YWJsZU9mKCk7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGRvIHRoZSBzdWJzY3JpcHRpb24gaW5zaWRlIGBydW5PdXRzaWRlQW5ndWxhcmBcbiAgICAgIC8vIHNpbmNlIHN1YnNjcmliaW5nIGlzIHdoYXQgY2F1c2VzIHRoZSBldmVudCBsaXN0ZW5lciB0byBiZSBhZGRlZC5cbiAgICAgIHRoaXMuX2ludmFsaWRhdGVDYWNoZSA9IHRoaXMuY2hhbmdlKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVZpZXdwb3J0U2l6ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ludmFsaWRhdGVDYWNoZS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIHZpZXdwb3J0J3Mgd2lkdGggYW5kIGhlaWdodC4gKi9cbiAgZ2V0Vmlld3BvcnRTaXplKCk6IFJlYWRvbmx5PHt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn0+IHtcbiAgICBpZiAoIXRoaXMuX3ZpZXdwb3J0U2l6ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlVmlld3BvcnRTaXplKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0ID0ge3dpZHRoOiB0aGlzLl92aWV3cG9ydFNpemUud2lkdGgsIGhlaWdodDogdGhpcy5fdmlld3BvcnRTaXplLmhlaWdodH07XG5cbiAgICAvLyBJZiB3ZSdyZSBub3Qgb24gYSBicm93c2VyLCBkb24ndCBjYWNoZSB0aGUgc2l6ZSBzaW5jZSBpdCdsbCBiZSBtb2NrZWQgb3V0IGFueXdheS5cbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdmlld3BvcnRTaXplID0gbnVsbCE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIC8qKiBHZXRzIGEgQ2xpZW50UmVjdCBmb3IgdGhlIHZpZXdwb3J0J3MgYm91bmRzLiAqL1xuICBnZXRWaWV3cG9ydFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgLy8gVXNlIHRoZSBkb2N1bWVudCBlbGVtZW50J3MgYm91bmRpbmcgcmVjdCByYXRoZXIgdGhhbiB0aGUgd2luZG93IHNjcm9sbCBwcm9wZXJ0aWVzXG4gICAgLy8gKGUuZy4gcGFnZVlPZmZzZXQsIHNjcm9sbFkpIGR1ZSB0byBpbiBpc3N1ZSBpbiBDaHJvbWUgYW5kIElFIHdoZXJlIHdpbmRvdyBzY3JvbGxcbiAgICAvLyBwcm9wZXJ0aWVzIGFuZCBjbGllbnQgY29vcmRpbmF0ZXMgKGJvdW5kaW5nQ2xpZW50UmVjdCwgY2xpZW50WC9ZLCBldGMuKSBhcmUgaW4gZGlmZmVyZW50XG4gICAgLy8gY29uY2VwdHVhbCB2aWV3cG9ydHMuIFVuZGVyIG1vc3QgY2lyY3Vtc3RhbmNlcyB0aGVzZSB2aWV3cG9ydHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCB0aGV5XG4gICAgLy8gY2FuIGRpc2FncmVlIHdoZW4gdGhlIHBhZ2UgaXMgcGluY2gtem9vbWVkIChvbiBkZXZpY2VzIHRoYXQgc3VwcG9ydCB0b3VjaCkuXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ4OTIwNiNjNFxuICAgIC8vIFdlIHVzZSB0aGUgZG9jdW1lbnRFbGVtZW50IGluc3RlYWQgb2YgdGhlIGJvZHkgYmVjYXVzZSwgYnkgZGVmYXVsdCAod2l0aG91dCBhIGNzcyByZXNldClcbiAgICAvLyBicm93c2VycyB0eXBpY2FsbHkgZ2l2ZSB0aGUgZG9jdW1lbnQgYm9keSBhbiA4cHggbWFyZ2luLCB3aGljaCBpcyBub3QgaW5jbHVkZWQgaW5cbiAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5cbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0Vmlld3BvcnRTaXplKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbi50b3AsXG4gICAgICBsZWZ0OiBzY3JvbGxQb3NpdGlvbi5sZWZ0LFxuICAgICAgYm90dG9tOiBzY3JvbGxQb3NpdGlvbi50b3AgKyBoZWlnaHQsXG4gICAgICByaWdodDogc2Nyb2xsUG9zaXRpb24ubGVmdCArIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSAodG9wLCBsZWZ0KSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHZpZXdwb3J0LiAqL1xuICBnZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk6IFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24ge1xuICAgIC8vIFdoaWxlIHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGZha2UgZG9jdW1lbnRcbiAgICAvLyBkdXJpbmcgU1NSLCBpdCBkb2Vzbid0IGhhdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LlxuICAgIGlmICghdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4ge3RvcDogMCwgbGVmdDogMH07XG4gICAgfVxuXG4gICAgLy8gVGhlIHRvcC1sZWZ0LWNvcm5lciBvZiB0aGUgdmlld3BvcnQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkb2N1bWVudFxuICAgIC8vIGJvZHksIG5vcm1hbGx5IGp1c3QgKHNjcm9sbExlZnQsIHNjcm9sbFRvcCkuIEhvd2V2ZXIsIENocm9tZSBhbmQgRmlyZWZveCBkaXNhZ3JlZSBhYm91dFxuICAgIC8vIHdoZXRoZXIgYGRvY3VtZW50LmJvZHlgIG9yIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRgIGlzIHRoZSBzY3JvbGxlZCBlbGVtZW50LCBzbyByZWFkaW5nXG4gICAgLy8gYHNjcm9sbFRvcGAgYW5kIGBzY3JvbGxMZWZ0YCBpcyBpbmNvbnNpc3RlbnQuIEhvd2V2ZXIsIHVzaW5nIHRoZSBib3VuZGluZyByZWN0IG9mXG4gICAgLy8gYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudGAgd29ya3MgY29uc2lzdGVudGx5LCB3aGVyZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCB2YWx1ZXMgd2lsbFxuICAgIC8vIGVxdWFsIG5lZ2F0aXZlIHRoZSBzY3JvbGwgcG9zaXRpb24uXG4gICAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ITtcbiAgICBjb25zdCBkb2N1bWVudFJlY3QgPSBkb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCB0b3AgPSAtZG9jdW1lbnRSZWN0LnRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCB3aW5kb3cuc2Nyb2xsWSB8fFxuICAgICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IDA7XG5cbiAgICBjb25zdCBsZWZ0ID0gLWRvY3VtZW50UmVjdC5sZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCB3aW5kb3cuc2Nyb2xsWCB8fFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgMDtcblxuICAgIHJldHVybiB7dG9wLCBsZWZ0fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB0aHJvdHRsZVRpbWUgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgdGhlIHN0cmVhbS5cbiAgICovXG4gIGNoYW5nZSh0aHJvdHRsZVRpbWU6IG51bWJlciA9IERFRkFVTFRfUkVTSVpFX1RJTUUpOiBPYnNlcnZhYmxlPEV2ZW50PiB7XG4gICAgcmV0dXJuIHRocm90dGxlVGltZSA+IDAgPyB0aGlzLl9jaGFuZ2UucGlwZShhdWRpdFRpbWUodGhyb3R0bGVUaW1lKSkgOiB0aGlzLl9jaGFuZ2U7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgY2FjaGVkIHZpZXdwb3J0IHNpemUuICovXG4gIHByaXZhdGUgX3VwZGF0ZVZpZXdwb3J0U2l6ZSgpIHtcbiAgICB0aGlzLl92aWV3cG9ydFNpemUgPSB0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIgP1xuICAgICAgICB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0gOlxuICAgICAgICB7d2lkdGg6IDAsIGhlaWdodDogMH07XG4gIH1cbn1cbiJdfQ==