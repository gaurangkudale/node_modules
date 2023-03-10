import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
/**
 * Manages all KML Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
let KmlLayerManager = class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) { return new (t || KmlLayerManager)(ɵngcc0.ɵɵinject(GoogleMapsAPIWrapper), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
KmlLayerManager.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KmlLayerManager, factory: function (t) { return KmlLayerManager.ɵfac(t); } });
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
KmlLayerManager = tslib_1.__decorate([ tslib_1.__metadata("design:paramtypes", [GoogleMapsAPIWrapper, NgZone])
], KmlLayerManager);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KmlLayerManager, [{
        type: Injectable
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: ɵngcc0.NgZone }]; }, null); })();
export { KmlLayerManager };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VzIjpbIm5nOi9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFHNUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLcEU7QUFDQTtBQUNBLEdBQUc7O0FBRUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtBQUM1QixJQUdFLFlBQW9CLFFBQThCLEVBQVUsS0FBYTtBQUFJLFFBQXpELGFBQVEsR0FBUixRQUFRLENBQXNCO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFIbEUsWUFBTyxHQUNYLElBQUksR0FBRyxFQUFrQyxDQUFDO0FBQ2hELElBQzhFLENBQUM7QUFDL0UsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsV0FBVyxDQUFDLEtBQWtCO0FBQ2hDLFFBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0QsWUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEMsZ0JBQVEsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0FBQ2xDLGdCQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2QsZ0JBQVEsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtBQUNoRCxnQkFBUSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7QUFDNUMsZ0JBQVEsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtBQUN0RCxnQkFBUSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7QUFDdEIsZ0JBQVEsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQzVCLGFBQTBCLENBQUMsQ0FBQztBQUM1QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsS0FBa0IsRUFBRSxPQUF3QjtBQUN6RCxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM3RCxJQUFFLENBQUM7QUFDSCxJQUNFLGNBQWMsQ0FBQyxLQUFrQjtBQUNuQyxRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNyQyxZQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUscUJBQXFCLENBQUksU0FBaUIsRUFBRSxLQUFrQjtBQUFJLFFBQ2hFLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7QUFDcEQsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFXLEVBQUUsRUFBRTtBQUNuRCxnQkFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkYsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxDQUFDOzt5SUFBQTtBQUNEO0FBQXlDLFlBMUNULG9CQUFvQjtBQUFJLFlBQWEsTUFBTTtBQUFHO0FBSmpFLGVBQWUsNEJBRDNCLFVBQVUsRUFBRSxqQkFDVCwwQ0FJNEIsb0JBQW9CLEVBQWlCLE1BQU07QUFBRyxHQUpqRSxlQUFlLENBNkMzQjs7O3VHQUNEO0FBQUMsU0E5Q1ksZUFBZTtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBLbWxMYXllciwgS21sTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy10eXBlcyc7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG4vKipcbiAqIE1hbmFnZXMgYWxsIEtNTCBMYXllcnMgZm9yIGEgR29vZ2xlIE1hcCBpbnN0YW5jZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEttbExheWVyTWFuYWdlciB7XG4gIHByaXZhdGUgX2xheWVyczogTWFwPEFnbUttbExheWVyLCBQcm9taXNlPEttbExheWVyPj4gPVxuICAgICAgbmV3IE1hcDxBZ21LbWxMYXllciwgUHJvbWlzZTxLbWxMYXllcj4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBLTUwgTGF5ZXIgdG8gdGhlIG1hcC5cbiAgICovXG4gIGFkZEttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcikge1xuICAgIGNvbnN0IG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKG0gPT4ge1xuICAgICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5LbWxMYXllcih7XG4gICAgICAgIGNsaWNrYWJsZTogbGF5ZXIuY2xpY2thYmxlLFxuICAgICAgICBtYXA6IG0sXG4gICAgICAgIHByZXNlcnZlVmlld3BvcnQ6IGxheWVyLnByZXNlcnZlVmlld3BvcnQsXG4gICAgICAgIHNjcmVlbk92ZXJsYXlzOiBsYXllci5zY3JlZW5PdmVybGF5cyxcbiAgICAgICAgc3VwcHJlc3NJbmZvV2luZG93czogbGF5ZXIuc3VwcHJlc3NJbmZvV2luZG93cyxcbiAgICAgICAgdXJsOiBsYXllci51cmwsXG4gICAgICAgIHpJbmRleDogbGF5ZXIuekluZGV4LFxuICAgICAgfSBhcyBLbWxMYXllck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMobGF5ZXI6IEFnbUttbExheWVyLCBvcHRpb25zOiBLbWxMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4gbC5zZXRPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGRlbGV0ZUttbExheWVyKGxheWVyOiBBZ21LbWxMYXllcikge1xuICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4obCA9PiB7XG4gICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMuX2xheWVycy5kZWxldGUobGF5ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIEttbExheWVyIGFzIGFuIE9ic2VydmFibGVcbiAgICovXG4gIGNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxUPihldmVudE5hbWU6IHN0cmluZywgbGF5ZXI6IEFnbUttbExheWVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oKG06IEttbExheWVyKSA9PiB7XG4gICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAoZTogVCkgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==