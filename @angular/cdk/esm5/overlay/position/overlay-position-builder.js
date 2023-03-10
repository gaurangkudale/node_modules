/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { OverlayContainer } from '../overlay-container';
import { ConnectedPositionStrategy } from './connected-position-strategy';
import { FlexibleConnectedPositionStrategy, } from './flexible-connected-position-strategy';
import { GlobalPositionStrategy } from './global-position-strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "angular_material/src/cdk/overlay/overlay-container";
/** Builder for overlay position strategy. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/cdk/platform';
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 8.0.0
     */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = function (origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: ViewportRuler },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: OverlayContainer }
    ]; };
    OverlayPositionBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(i0.ɵɵinject(i1.ViewportRuler), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.Platform), i0.ɵɵinject(i4.OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });
OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) { return new (t || OverlayPositionBuilder)(ɵngcc0.ɵɵinject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ɵngcc2.Platform), ɵngcc0.ɵɵinject(OverlayContainer)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayPositionBuilder, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.ViewportRuler }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc2.Platform }, { type: OverlayContainer }]; }, null); })();
    return OverlayPositionBuilder;
}());
export { OverlayPositionBuilder };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvcG9zaXRpb24vb3ZlcmxheS1wb3NpdGlvbi1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQWEsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUd0RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsaUNBQWlDLEdBRWxDLE1BQU0sd0NBQXdDLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEU7QUFFbUM7QUFFbEM7QUFDQztBQUM4QjtBQUpoQyw2Q0FBNkM7Ozs7QUFDN0M7QUFDd0IsSUFDdEIsZ0NBQ1ksY0FBNkIsRUFBNEIsU0FBYyxFQUN2RSxTQUFtQixFQUFVLGlCQUFtQztBQUFJLFFBRHBFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0FBQUMsUUFBMkIsY0FBUyxHQUFULFNBQVMsQ0FBSztBQUFDLFFBQ3hFLGNBQVMsR0FBVCxTQUFTLENBQVU7QUFBQyxRQUFTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxJQUFFLENBQUM7QUFDbEYsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsdUNBQU0sR0FBTjtBQUFjLFFBQ1osT0FBTyxJQUFJLHNCQUFzQixFQUFFLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREQ7QUFDTCxJQUFFLDRDQUFXLEdBQVgsVUFDSSxVQUFzQixFQUN0QixTQUFtQyxFQUNuQyxVQUFxQztBQUFJLFFBQzNDLE9BQU8sSUFBSSx5QkFBeUIsQ0FDaEMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3RGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2hDLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUsb0RBQW1CLEdBQW5CLFVBQW9CLE1BQStDO0FBQ3BFLFFBQ0csT0FBTyxJQUFJLGlDQUFpQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3BGLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEQsSUFBRSxDQUFDLENBckNNO0FBQUM7bUNBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSxsRUFDVTtDQURSLE1BQU0sRUFBQyxUQUdlLGdCQW5CdkMsYUFBYTtBQUFJLGdEQW1CcUIsTUFBTSxTQUFDLFFBQVE7QUFBUyxnQkFwQjlELFFBQVE7QUFBSSxnQkFLWixnQkFBZ0I7QUFBRztBQUFVOzs7Ozs7Ozt5RkFRckM7QUFBQyxpQ0FyQkQ7QUFBRSxDQWlFRCxBQXhDRCxJQXdDQztBQUNELFNBeENhLHNCQUFzQjtBQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0VsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7T3ZlcmxheUNvbnRhaW5lcn0gZnJvbSAnLi4vb3ZlcmxheS1jb250YWluZXInO1xuXG5pbXBvcnQge09yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbiwgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbn0gZnJvbSAnLi9jb25uZWN0ZWQtcG9zaXRpb24nO1xuaW1wb3J0IHtDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL2Nvbm5lY3RlZC1wb3NpdGlvbi1zdHJhdGVneSc7XG5pbXBvcnQge1xuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneU9yaWdpbixcbn0gZnJvbSAnLi9mbGV4aWJsZS1jb25uZWN0ZWQtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtHbG9iYWxQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneSc7XG5cblxuLyoqIEJ1aWxkZXIgZm9yIG92ZXJsYXkgcG9zaXRpb24gc3RyYXRlZ3kuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5UG9zaXRpb25CdWlsZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyKSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ2xvYmFsIHBvc2l0aW9uIHN0cmF0ZWd5LlxuICAgKi9cbiAgZ2xvYmFsKCk6IEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiBuZXcgR2xvYmFsUG9zaXRpb25TdHJhdGVneSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByZWxhdGl2ZSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICogQHBhcmFtIGVsZW1lbnRSZWZcbiAgICogQHBhcmFtIG9yaWdpblBvc1xuICAgKiBAcGFyYW0gb3ZlcmxheVBvc1xuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGZsZXhpYmxlQ29ubmVjdGVkVG9gIGluc3RlYWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiAgICovXG4gIGNvbm5lY3RlZFRvKFxuICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgIG9yaWdpblBvczogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uLFxuICAgICAgb3ZlcmxheVBvczogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbik6IENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiBuZXcgQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneShcbiAgICAgICAgb3JpZ2luUG9zLCBvdmVybGF5UG9zLCBlbGVtZW50UmVmLCB0aGlzLl92aWV3cG9ydFJ1bGVyLCB0aGlzLl9kb2N1bWVudCwgdGhpcy5fcGxhdGZvcm0sXG4gICAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmbGV4aWJsZSBwb3NpdGlvbiBzdHJhdGVneS5cbiAgICogQHBhcmFtIG9yaWdpbiBPcmlnaW4gcmVsYXRpdmUgdG8gd2hpY2ggdG8gcG9zaXRpb24gdGhlIG92ZXJsYXkuXG4gICAqL1xuICBmbGV4aWJsZUNvbm5lY3RlZFRvKG9yaWdpbjogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5T3JpZ2luKTpcbiAgICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiBuZXcgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KG9yaWdpbiwgdGhpcy5fdmlld3BvcnRSdWxlciwgdGhpcy5fZG9jdW1lbnQsXG4gICAgICAgIHRoaXMuX3BsYXRmb3JtLCB0aGlzLl9vdmVybGF5Q29udGFpbmVyKTtcbiAgfVxuXG59XG4iXX0=