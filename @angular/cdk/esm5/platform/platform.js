/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
import * as ɵngcc0 from '@angular/core';
var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Optional }, { type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    Platform.ɵprov = i0.ɵɵdefineInjectable({ factory: function Platform_Factory() { return new Platform(i0.ɵɵinject(i0.PLATFORM_ID, 8)); }, token: Platform, providedIn: "root" });
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(ɵngcc0.ɵɵinject(PLATFORM_ID, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Platform, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
    return Platform;
}());
export { Platform };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvcGxhdGZvcm0vcGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDbEQ7QUFDQSw0RUFBNEU7QUFDNUUsbURBQW1EOztBQUNuRCxJQUFJLGtCQUEyQixDQUFDO0FBRWhDLDZGQUE2RjtBQUM3Riw4RkFBOEY7QUFDOUYscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsSUFBSTtBQUNKLElBQUUsa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUssSUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFBQyxXQUFNO0FBQ1IsSUFBRSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFDN0IsQ0FBQztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNVLElBOENSO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxrQkFBcUQsV0FBb0I7QUFBSSxRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBUztBQUFDLFFBaEQxRSwrRUFBK0U7QUFDakYsUUFBRSxtRkFBbUY7QUFDckYsUUFBRSxrRkFBa0Y7QUFDcEYsUUFBRSx3RUFBd0U7QUFDMUUsUUFBRSxjQUFTLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLFlBQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN2RixRQUNFLHFEQUFxRDtBQUN2RCxRQUFFLFNBQUksR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hFLFFBQ0UsaUVBQWlFO0FBQ25FLFFBQUUsWUFBTyxHQUFZLElBQUksQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuRixRQUNFLDJGQUEyRjtBQUM3RixRQUFFLHFEQUFxRDtBQUN2RCxRQUFFLFVBQUssR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztBQUN0RixZQUFNLE9BQU8sR0FBRyxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsUUFDRSx1RkFBdUY7QUFDekYsUUFBRSwrRUFBK0U7QUFDakYsUUFBRSxzREFBc0Q7QUFDeEQsUUFBRSxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVM7QUFDbEMsWUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM3RixRQUNFLGlEQUFpRDtBQUNuRCxRQUFFLFFBQUcsR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQy9FLFlBQU0sQ0FBQyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUM5QixRQUNFLHlGQUF5RjtBQUMzRixRQUFFLGlGQUFpRjtBQUNuRixRQUFFLGlGQUFpRjtBQUNuRixRQUFFLGlEQUFpRDtBQUNuRCxRQUFFLDhDQUE4QztBQUNoRCxRQUFFLFlBQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEYsUUFDRSwrQ0FBK0M7QUFDakQsUUFBRSxvRkFBb0Y7QUFDdEYsUUFBRSxZQUFPLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDN0YsUUFDRSw2RkFBNkY7QUFDL0YsUUFBRSw4RkFBOEY7QUFDaEcsUUFBRSw4REFBOEQ7QUFDaEUsUUFBRSw2Q0FBNkM7QUFDL0MsUUFBRSxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pGLElBSThFLENBQUMsQUFqRHRFO0FBQUM7cUJBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSxwREFFZDtDQUZnQixNQUFNLEVBQUMsVEFFOEIsZ0JBZ0RPLE1BQU0sdUJBQTVELFFBQVEsWUFBSSxNQUFNLFNBQUMsV0FBVztBQUFRO0FBQVU7Ozs7Ozs7Ozs7a0NBRWlHO0FBQUMsbUJBbEZqSztBQUFFLENBaUZELEFBbkRELElBbURDO0FBQ0QsU0FuRGEsUUFBUTtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcbi8vIGlzIG5lY2Vzc2FyeSB0byBkZXRlY3QgYWxsIEJsaW5rIGJhc2VkIGJyb3dzZXJzLlxubGV0IGhhc1Y4QnJlYWtJdGVyYXRvcjogYm9vbGVhbjtcblxuLy8gV2UgbmVlZCBhIHRyeS9jYXRjaCBhcm91bmQgdGhlIHJlZmVyZW5jZSB0byBgSW50bGAsIGJlY2F1c2UgYWNjZXNzaW5nIGl0IGluIHNvbWUgY2FzZXMgY2FuXG4vLyBjYXVzZSBJRSB0byB0aHJvdy4gVGhlc2UgY2FzZXMgYXJlIHRpZWQgdG8gcGFydGljdWxhciB2ZXJzaW9ucyBvZiBXaW5kb3dzIGFuZCBjYW4gaGFwcGVuIGlmXG4vLyB0aGUgY29uc3VtZXIgaXMgcHJvdmlkaW5nIGEgcG9seWZpbGxlZCBgTWFwYC4gU2VlOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9DaGFrcmFDb3JlL2lzc3Vlcy8zMTg5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8xNTY4N1xudHJ5IHtcbiAgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XG59IGNhdGNoIHtcbiAgaGFzVjhCcmVha0l0ZXJhdG9yID0gZmFsc2U7XG59XG5cbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcbiAgLy8gV2Ugd2FudCB0byB1c2UgdGhlIEFuZ3VsYXIgcGxhdGZvcm0gY2hlY2sgYmVjYXVzZSBpZiB0aGUgRG9jdW1lbnQgaXMgc2hpbW1lZFxuICAvLyB3aXRob3V0IHRoZSBuYXZpZ2F0b3IsIHRoZSBmb2xsb3dpbmcgY2hlY2tzIHdpbGwgZmFpbC4gVGhpcyBpcyBwcmVmZXJyZWQgYmVjYXVzZVxuICAvLyBzb21ldGltZXMgdGhlIERvY3VtZW50IG1heSBiZSBzaGltbWVkIHdpdGhvdXQgdGhlIHVzZXIncyBrbm93bGVkZ2Ugb3IgaW50ZW50aW9uXG4gIC8qKiBXaGV0aGVyIHRoZSBBbmd1bGFyIGFwcGxpY2F0aW9uIGlzIGJlaW5nIHJlbmRlcmVkIGluIHRoZSBicm93c2VyLiAqL1xuICBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0aGlzLl9wbGF0Zm9ybUlkID9cbiAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpIDogdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgTWljcm9zb2Z0IEVkZ2UuICovXG4gIEVER0U6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCByZW5kZXJpbmcgZW5naW5lIGlzIE1pY3Jvc29mdCBUcmlkZW50LiAqL1xuICBUUklERU5UOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgQmxpbmsuICovXG4gIEJMSU5LOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJlxuICAgICAgdHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcblxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCByZW5kZXJpbmcgZW5naW5lIGlzIFdlYktpdC4gKi9cbiAgV0VCS0lUOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiZcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuQkxJTksgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlzIEFwcGxlIGlPUy4gKi9cbiAgSU9TOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiZcbiAgICAgICEoJ01TU3RyZWFtJyBpbiB3aW5kb3cpO1xuXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIGlzIEZpcmVmb3guICovXG4gIEZJUkVGT1g6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gaXMgQW5kcm9pZC4gKi9cbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXG4gIEFORFJPSUQ6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcblxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIGlzIFNhZmFyaS4gKi9cbiAgU0FGQVJJOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgdGhpcy5XRUJLSVQ7XG5cbiAgLyoqXG4gICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgcmVtb3ZlIG9wdGlvbmFsIGRlY29yYXRvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZD86IE9iamVjdCkge31cbn1cbiJdfQ==