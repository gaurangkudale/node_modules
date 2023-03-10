/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { BlockScrollStrategy } from './block-scroll-strategy';
import { CloseScrollStrategy } from './close-scroll-strategy';
import { NoopScrollStrategy } from './noop-scroll-strategy';
import { RepositionScrollStrategy, } from './reposition-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) { return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config); };
        /** Block scrolling. */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) { return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config); };
        this._document = document;
    }
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: ScrollDispatcher },
        { type: ViewportRuler },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollStrategyOptions.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(i0.ɵɵinject(i1.ScrollDispatcher), i0.ɵɵinject(i1.ViewportRuler), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: ScrollStrategyOptions, providedIn: "root" });
ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) { return new (t || ScrollStrategyOptions)(ɵngcc0.ɵɵinject(ɵngcc1.ScrollDispatcher), ɵngcc0.ɵɵinject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(DOCUMENT)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollStrategyOptions, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.ScrollDispatcher }, { type: ɵngcc1.ViewportRuler }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return ScrollStrategyOptions;
}());
export { ScrollStrategyOptions };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9zY3JvbGwvc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBNEIsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsd0JBQXdCLEdBRXpCLE1BQU0sOEJBQThCLENBQUM7QUFDdEM7QUFHK0I7QUFFVjtBQUhyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBQ0g7QUFDdUIsSUFHckIsK0JBQ1UsaUJBQW1DLEVBQ25DLGNBQTZCLEVBQzdCLE9BQWUsRUFDTCxRQUFhO0FBQ25DLFFBTEUsaUJBTUc7QUFDTCxRQU5ZLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtBQUFDLFFBQzlCLFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxRQUsxQiw0QkFBNEI7QUFDOUIsUUFBRSxTQUFJLEdBQUcsY0FBTSxPQUFBLElBQUksa0JBQWtCLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQztBQUN4QyxRQUNFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLFVBQUssR0FBRyxVQUFDLE1BQWtDLElBQUssT0FBQSxJQUFJLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxpQkFBaUIsRUFDMUYsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQURFLENBQ0YsQ0FBQTtBQUNoRCxRQUNFLHVCQUF1QjtBQUN6QixRQUFFLFVBQUssR0FBRyxjQUFNLE9BQUEsSUFBSSxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQztBQUM3RSxRQUNFO0FBQ0Y7QUFDTTtBQUNNO0FBRUEsV0FEUDtBQUNMLFFBQUUsZUFBVSxHQUFHLFVBQUMsTUFBdUMsSUFBSyxPQUFBLElBQUksd0JBQXdCLENBQ2xGLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBRFosQ0FDWSxDQUFBO0FBQ3hFLFFBdkJNLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ2hDLElBQUksQ0FBQyxBQVRJO0FBQUM7a0NBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSxqRUFDVTtDQURSLE1BQU0sRUFBQyxUQUtqQixnQkF2QlAsZ0JBQWdCO0FBQUksZ0JBQUYsYUFBYTtBQUFJLGdCQUVmLE1BQU07QUFBSSxnREF3QmpDLE1BQU0sU0FBQyxRQUFRO0FBQVE7QUFBVTs7Ozs7Ozs7a0NBVzBCO0FBQUMsZ0NBN0NqRTtBQUFFLENBMERELEFBaENELElBZ0NDO0FBQ0QsU0FoQ2EscUJBQXFCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U2Nyb2xsRGlzcGF0Y2hlciwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jsb2NrU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcbmltcG9ydCB7Q2xvc2VTY3JvbGxTdHJhdGVneSwgQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZ30gZnJvbSAnLi9jbG9zZS1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtOb29wU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJy4vbm9vcC1zY3JvbGwtc3RyYXRlZ3knO1xuaW1wb3J0IHtcbiAgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5LFxuICBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3lDb25maWcsXG59IGZyb20gJy4vcmVwb3NpdGlvbi1zY3JvbGwtc3RyYXRlZ3knO1xuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgaG93IGFuIG92ZXJsYXkgd2lsbCBoYW5kbGUgc2Nyb2xsaW5nLlxuICpcbiAqIFVzZXJzIGNhbiBwcm92aWRlIGEgY3VzdG9tIHZhbHVlIGZvciBgU2Nyb2xsU3RyYXRlZ3lPcHRpb25zYCB0byByZXBsYWNlIHRoZSBkZWZhdWx0XG4gKiBiZWhhdmlvcnMuIFRoaXMgY2xhc3MgcHJpbWFyaWx5IGFjdHMgYXMgYSBmYWN0b3J5IGZvciBTY3JvbGxTdHJhdGVneSBpbnN0YW5jZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgLyoqIERvIG5vdGhpbmcgb24gc2Nyb2xsLiAqL1xuICBub29wID0gKCkgPT4gbmV3IE5vb3BTY3JvbGxTdHJhdGVneSgpO1xuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgb3ZlcmxheSBhcyBzb29uIGFzIHRoZSB1c2VyIHNjcm9sbHMuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGluc2lkZSB0aGUgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgKi9cbiAgY2xvc2UgPSAoY29uZmlnPzogQ2xvc2VTY3JvbGxTdHJhdGVneUNvbmZpZykgPT4gbmV3IENsb3NlU2Nyb2xsU3RyYXRlZ3kodGhpcy5fc2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgIHRoaXMuX25nWm9uZSwgdGhpcy5fdmlld3BvcnRSdWxlciwgY29uZmlnKVxuXG4gIC8qKiBCbG9jayBzY3JvbGxpbmcuICovXG4gIGJsb2NrID0gKCkgPT4gbmV3IEJsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fZG9jdW1lbnQpO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIG92ZXJsYXkncyBwb3NpdGlvbiBvbiBzY3JvbGwuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGluc2lkZSB0aGUgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgKiBBbGxvd3MgZGVib3VuY2luZyB0aGUgcmVwb3NpdGlvbiBjYWxscy5cbiAgICovXG4gIHJlcG9zaXRpb24gPSAoY29uZmlnPzogUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnKSA9PiBuZXcgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5KFxuICAgICAgdGhpcy5fc2Nyb2xsRGlzcGF0Y2hlciwgdGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fbmdab25lLCBjb25maWcpXG59XG4iXX0=