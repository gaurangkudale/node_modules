/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
/**
 * Whether we're in a testing environment.
 * TODO(crisbeto): remove this once we have an overlay testing module.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
const isTestEnvironment = typeof window !== 'undefined' && !!window &&
    !!(((/** @type {?} */ (window))).__karma__ || ((/** @type {?} */ (window))).jasmine);
/**
 * Container inside which all overlays will render.
 */
export class OverlayContainer {
    /**
     * @param {?} document
     * @param {?=} _platform
     */
    constructor(document, _platform) {
        this._platform = _platform;
        this._document = document;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const container = this._containerElement;
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    }
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @protected
     * @return {?}
     */
    _createContainer() {
        // @breaking-change 10.0.0 Remove null check for `_platform`.
        /** @type {?} */
        const isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
        /** @type {?} */
        const containerClass = 'cdk-overlay-container';
        if (isBrowser || isTestEnvironment) {
            /** @type {?} */
            const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], ` +
                `.${containerClass}[platform="test"]`);
            // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.
            for (let i = 0; i < oppositePlatformContainers.length; i++) {
                (/** @type {?} */ (oppositePlatformContainers[i].parentNode)).removeChild(oppositePlatformContainers[i]);
            }
        }
        /** @type {?} */
        const container = this._document.createElement('div');
        container.classList.add(containerClass);
        // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
        // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
        // The new logic was a little too aggressive since it was breaking some legitimate use cases.
        // To mitigate the problem we made it so that only containers from a different platform are
        // cleared, but the side-effect was that people started depending on the overly-aggressive
        // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
        // module which does the cleanup, we try to detect that we're in a test environment and we
        // always clear the container. See #17006.
        // TODO(crisbeto): remove the test environment check once we have an overlay testing module.
        if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
        }
        else if (!isBrowser) {
            container.setAttribute('platform', 'server');
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
    }
}
OverlayContainer.ɵfac = function OverlayContainer_Factory(t) { return new (t || OverlayContainer)(ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ɵngcc1.Platform)); };
/** @nocollapse */
OverlayContainer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ OverlayContainer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayContainer_Factory() { return new OverlayContainer(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: OverlayContainer, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayContainer, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.Platform }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OverlayContainer.prototype._containerElement;
    /**
     * @type {?}
     * @protected
     */
    OverlayContainer.prototype._document;
    /**
     * @deprecated `platform` parameter to become required.
     * \@breaking-change 10.0.0
     * @type {?}
     * @protected
     */
    OverlayContainer.prototype._platform;
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
export function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
export const OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new Optional(), new SkipSelf(), OverlayContainer],
        (/** @type {?} */ (DOCUMENT))
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBR1YsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0M7QUFFZ0M7QUFDSjtBQUMxQjtBQUNBO0FBQTJDO0FBQ1Q7QUFBYTs7O0FBQUksTUFEL0MsaUJBQWlCLEdBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNO0FBQzVFLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzFEO0FBQ0c7QUFBb0Q7QUFFdkQsTUFBTSxPQUFPLGdCQUFnQjtBQUFHO0FBQVE7QUFDMUI7QUFBNkI7QUFDcEMsSUFFTCxZQUNvQixRQUFhLEVBS3JCLFNBQW9CO0FBQ2xDLFFBRGMsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDQztBQUFRLElBRGQsV0FBVztBQUNiO0FBQXlCLGNBQWYsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7QUFDNUMsUUFDSSxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO0FBQzNDLFlBQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEQsU0FBSztBQUNMLElBQUUs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UyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUNEO0FBQ0c7QUFDRDtBQUFhO0FBQWYsTUFBTSxPQUFPLDBCQUEwQixHQUFHO0FBQzFDO0FBQ0UsSUFBQSxPQUFPLEVBQUUsZ0JBQWdCO0FBQzNCLElBQUUsSUFBSSxFQUFFO0FBQ1IsUUFBSSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQztBQUN0RCxRQUFJLG1CQUFBLFFBQVEsRUFBdUI7QUFBQyxLQUNqQztBQUNILElBQUUsVUFBVSxFQUFFLGtDQUFrQztBQUNoRCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogV2hldGhlciB3ZSdyZSBpbiBhIHRlc3RpbmcgZW52aXJvbm1lbnQuXG4gKiBUT0RPKGNyaXNiZXRvKTogcmVtb3ZlIHRoaXMgb25jZSB3ZSBoYXZlIGFuIG92ZXJsYXkgdGVzdGluZyBtb2R1bGUuXG4gKi9cbmNvbnN0IGlzVGVzdEVudmlyb25tZW50OiBib29sZWFuID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cgJiZcbiAgISEoKHdpbmRvdyBhcyBhbnkpLl9fa2FybWFfXyB8fCAod2luZG93IGFzIGFueSkuamFzbWluZSk7XG5cbi8qKiBDb250YWluZXIgaW5zaWRlIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIHJlbmRlci4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250YWluZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55LFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGBwbGF0Zm9ybWAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcGxhdGZvcm0/OiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuXG4gICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudC4gSXQgd2lsbCBsYXppbHlcbiAgICogY3JlYXRlIHRoZSBlbGVtZW50IHRoZSBmaXJzdCB0aW1lICBpdCBpcyBjYWxsZWQgdG8gZmFjaWxpdGF0ZSB1c2luZ1xuICAgKiB0aGUgY29udGFpbmVyIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50cy5cbiAgICogQHJldHVybnMgdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqL1xuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9jcmVhdGVDb250YWluZXIoKTogdm9pZCB7XG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMC4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGBfcGxhdGZvcm1gLlxuICAgIGNvbnN0IGlzQnJvd3NlciA9IHRoaXMuX3BsYXRmb3JtID8gdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSAnY2RrLW92ZXJsYXktY29udGFpbmVyJztcblxuICAgIGlmIChpc0Jyb3dzZXIgfHwgaXNUZXN0RW52aXJvbm1lbnQpIHtcbiAgICAgIGNvbnN0IG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzID1cbiAgICAgICAgICB0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb250YWluZXJDbGFzc31bcGxhdGZvcm09XCJzZXJ2ZXJcIl0sIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4ke2NvbnRhaW5lckNsYXNzfVtwbGF0Zm9ybT1cInRlc3RcIl1gKTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBvbGQgY29udGFpbmVycyBmcm9tIHRoZSBvcHBvc2l0ZSBwbGF0Zm9ybS5cbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRyYW5zaXRpb25pbmcgZnJvbSB0aGUgc2VydmVyIHRvIHRoZSBjbGllbnQuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzW2ldLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG9wcG9zaXRlUGxhdGZvcm1Db250YWluZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjb250YWluZXJDbGFzcyk7XG5cbiAgICAvLyBBIGxvbmcgdGltZSBhZ28gd2Uga2VwdCBhZGRpbmcgbmV3IG92ZXJsYXkgY29udGFpbmVycyB3aGVuZXZlciBhIG5ldyBhcHAgd2FzIGluc3RhbnRpYXRlZCxcbiAgICAvLyBidXQgYXQgc29tZSBwb2ludCB3ZSBhZGRlZCBsb2dpYyB3aGljaCBjbGVhcnMgdGhlIGR1cGxpY2F0ZSBvbmVzIGluIG9yZGVyIHRvIGF2b2lkIGxlYWtzLlxuICAgIC8vIFRoZSBuZXcgbG9naWMgd2FzIGEgbGl0dGxlIHRvbyBhZ2dyZXNzaXZlIHNpbmNlIGl0IHdhcyBicmVha2luZyBzb21lIGxlZ2l0aW1hdGUgdXNlIGNhc2VzLlxuICAgIC8vIFRvIG1pdGlnYXRlIHRoZSBwcm9ibGVtIHdlIG1hZGUgaXQgc28gdGhhdCBvbmx5IGNvbnRhaW5lcnMgZnJvbSBhIGRpZmZlcmVudCBwbGF0Zm9ybSBhcmVcbiAgICAvLyBjbGVhcmVkLCBidXQgdGhlIHNpZGUtZWZmZWN0IHdhcyB0aGF0IHBlb3BsZSBzdGFydGVkIGRlcGVuZGluZyBvbiB0aGUgb3Zlcmx5LWFnZ3Jlc3NpdmVcbiAgICAvLyBsb2dpYyB0byBjbGVhbiB1cCB0aGVpciB0ZXN0cyBmb3IgdGhlbS4gVW50aWwgd2UgY2FuIGludHJvZHVjZSBhbiBvdmVybGF5LXNwZWNpZmljIHRlc3RpbmdcbiAgICAvLyBtb2R1bGUgd2hpY2ggZG9lcyB0aGUgY2xlYW51cCwgd2UgdHJ5IHRvIGRldGVjdCB0aGF0IHdlJ3JlIGluIGEgdGVzdCBlbnZpcm9ubWVudCBhbmQgd2VcbiAgICAvLyBhbHdheXMgY2xlYXIgdGhlIGNvbnRhaW5lci4gU2VlICMxNzAwNi5cbiAgICAvLyBUT0RPKGNyaXNiZXRvKTogcmVtb3ZlIHRoZSB0ZXN0IGVudmlyb25tZW50IGNoZWNrIG9uY2Ugd2UgaGF2ZSBhbiBvdmVybGF5IHRlc3RpbmcgbW9kdWxlLlxuICAgIGlmIChpc1Rlc3RFbnZpcm9ubWVudCkge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgncGxhdGZvcm0nLCAndGVzdCcpO1xuICAgIH0gZWxzZSBpZiAoIWlzQnJvd3Nlcikge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgncGxhdGZvcm0nLCAnc2VydmVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gIH1cbn1cblxuXG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZnVuY3Rpb24gT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gIF9kb2N1bWVudDogYW55KSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IE92ZXJsYXlDb250YWluZXIoX2RvY3VtZW50KTtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGNvbnN0IE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogT3ZlcmxheUNvbnRhaW5lcixcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE92ZXJsYXlDb250YWluZXJdLFxuICAgIERPQ1VNRU5UIGFzIEluamVjdGlvblRva2VuPGFueT4gLy8gV2UgbmVlZCB0byB1c2UgdGhlIEluamVjdGlvblRva2VuIHNvbWV3aGVyZSB0byBrZWVwIFRTIGhhcHB5XG4gIF0sXG4gIHVzZUZhY3Rvcnk6IE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbn07XG4iXX0=