import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, timer } from 'rxjs';
import { flatMap, map, sample, shareReplay, switchMap, } from 'rxjs/operators';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
import * as ɵngcc0 from '@angular/core';
export class FitBoundsAccessor {
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
let FitBoundsService = class FitBoundsService {
    constructor(loader) {
        this._boundsChangeSampleTime$ = new BehaviorSubject(200);
        this._includeInBounds$ = new BehaviorSubject(new Map());
        this.bounds$ = from(loader.load()).pipe(flatMap(() => this._includeInBounds$), sample(this._boundsChangeSampleTime$.pipe(switchMap(time => timer(0, time)))), map(includeInBounds => this._generateBounds(includeInBounds)), shareReplay(1));
    }
    _generateBounds(includeInBounds) {
        const bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(b => bounds.extend(b));
        return bounds;
    }
    addToBounds(latLng) {
        const id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        const map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    }
    removeFromBounds(latLng) {
        const map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    }
    changeFitBoundsChangeSampleTime(timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    }
    getBounds$() {
        return this.bounds$;
    }
    _createIdentifier(latLng) {
        return `${latLng.lat}+${latLng.lng}`;
    }
};
FitBoundsService.ɵfac = function FitBoundsService_Factory(t) { return new (t || FitBoundsService)(ɵngcc0.ɵɵinject(MapsAPILoader)); };
FitBoundsService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FitBoundsService, factory: function (t) { return FitBoundsService.ɵfac(t); } });
FitBoundsService.ctorParameters = () => [
    { type: MapsAPILoader }
];
FitBoundsService = tslib_1.__decorate([ tslib_1.__metadata("design:paramtypes", [MapsAPILoader])
], FitBoundsService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FitBoundsService, [{
        type: Injectable
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();
export { FitBoundsService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZXMiOlsibmc6L0BhZ20vY29yZS9zZXJ2aWNlcy9maXQtYm91bmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEdBQUcsRUFDSCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWFsRTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sT0FBZ0IsaUJBQWlCO0FBQ3ZDLENBQ0M7QUFFRDtBQUNBO0FBQ0EsR0FBRztBQUVILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0FBQzdCLElBSUUsWUFBWSxNQUFxQjtBQUNuQyxRQUpxQiw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBUyxHQUFHLENBQUMsQ0FBQztBQUNqRixRQUFxQixzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBWSxJQUFJLEdBQUcsRUFBa0MsQ0FBQyxDQUFDO0FBQ25ILFFBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNyQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLE1BQU0sQ0FDSixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUN0RSxFQUNELEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsRUFDN0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNVLGVBQWUsQ0FDckIsZUFBb0Q7QUFDdEQsUUFDRSxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFrQixDQUFDO0FBQ2xFLFFBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxRQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLE1BQThCO0FBQzVDLFFBQUksTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFFBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5QyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0FBQzdDLFFBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEIsUUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsTUFBOEI7QUFDakQsUUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0FBQzdDLFFBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvQyxRQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFDRSwrQkFBK0IsQ0FBQyxNQUFjO0FBQ2hELFFBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVU7QUFBSyxRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixJQUFFLENBQUM7QUFDSCxJQUNZLGlCQUFpQixDQUFDLE1BQThCO0FBQUksUUFDNUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILENBQUM7OzRJQUFBO0FBQ0Q7QUFBMEMsWUEvQ3BCLGFBQWE7QUFBRztBQUx6QixnQkFBZ0IsNEJBRDVCLFVBQVUsRUFBRSxqQkFDVCwwQ0FLa0IsYUFBYTtBQUFHLEdBTHpCLGdCQUFnQixDQW1ENUI7Ozt1RUFDRDtBQUFDLFNBcERZLGdCQUFnQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZnJvbSwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZsYXRNYXAsXG4gIG1hcCxcbiAgc2FtcGxlLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXRMbmcsIExhdExuZ0JvdW5kcywgTGF0TG5nTGl0ZXJhbCB9IGZyb20gJy4vZ29vZ2xlLW1hcHMtdHlwZXMnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5cbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpdEJvdW5kc0RldGFpbHMge1xuICBsYXRMbmc6IExhdExuZyB8IExhdExuZ0xpdGVyYWw7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB0eXBlIEJvdW5kc01hcCA9IE1hcDxzdHJpbmcsIExhdExuZyB8IExhdExuZ0xpdGVyYWw+O1xuXG4vKipcbiAqIENsYXNzIHRvIGltcGxlbWVudCB3aGVuIHlvdSB3aGF0IHRvIGJlIGFibGUgdG8gbWFrZSBpdCB3b3JrIHdpdGggdGhlIGF1dG8gZml0IGJvdW5kcyBmZWF0dXJlXG4gKiBvZiBBR00uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaXRCb3VuZHNBY2Nlc3NvciB7XG4gIGFic3RyYWN0IGdldEZpdEJvdW5kc0RldGFpbHMkKCk6IE9ic2VydmFibGU8Rml0Qm91bmRzRGV0YWlscz47XG59XG5cbi8qKlxuICogVGhlIEZpdEJvdW5kc1NlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGluZyB0aGUgYm91bmRzIG9mIHRoZSBhIHNpbmdsZSBtYXAuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXRCb3VuZHNTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGJvdW5kcyQ6IE9ic2VydmFibGU8TGF0TG5nQm91bmRzPjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9ib3VuZHNDaGFuZ2VTYW1wbGVUaW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigyMDApO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2luY2x1ZGVJbkJvdW5kcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJvdW5kc01hcD4obmV3IE1hcDxzdHJpbmcsIExhdExuZyB8IExhdExuZ0xpdGVyYWw+KCkpO1xuXG4gIGNvbnN0cnVjdG9yKGxvYWRlcjogTWFwc0FQSUxvYWRlcikge1xuICAgIHRoaXMuYm91bmRzJCA9IGZyb20obG9hZGVyLmxvYWQoKSkucGlwZShcbiAgICAgIGZsYXRNYXAoKCkgPT4gdGhpcy5faW5jbHVkZUluQm91bmRzJCksXG4gICAgICBzYW1wbGUoXG4gICAgICAgIHRoaXMuX2JvdW5kc0NoYW5nZVNhbXBsZVRpbWUkLnBpcGUoc3dpdGNoTWFwKHRpbWUgPT4gdGltZXIoMCwgdGltZSkpKSxcbiAgICAgICksXG4gICAgICBtYXAoaW5jbHVkZUluQm91bmRzID0+IHRoaXMuX2dlbmVyYXRlQm91bmRzKGluY2x1ZGVJbkJvdW5kcykpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlQm91bmRzKFxuICAgIGluY2x1ZGVJbkJvdW5kczogTWFwPHN0cmluZywgTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbD4sXG4gICkge1xuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKSBhcyBMYXRMbmdCb3VuZHM7XG4gICAgaW5jbHVkZUluQm91bmRzLmZvckVhY2goYiA9PiBib3VuZHMuZXh0ZW5kKGIpKTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgYWRkVG9Cb3VuZHMobGF0TG5nOiBMYXRMbmcgfCBMYXRMbmdMaXRlcmFsKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLl9jcmVhdGVJZGVudGlmaWVyKGxhdExuZyk7XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVJbkJvdW5kcyQudmFsdWUuaGFzKGlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLl9pbmNsdWRlSW5Cb3VuZHMkLnZhbHVlO1xuICAgIG1hcC5zZXQoaWQsIGxhdExuZyk7XG4gICAgdGhpcy5faW5jbHVkZUluQm91bmRzJC5uZXh0KG1hcCk7XG4gIH1cblxuICByZW1vdmVGcm9tQm91bmRzKGxhdExuZzogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMuX2luY2x1ZGVJbkJvdW5kcyQudmFsdWU7XG4gICAgbWFwLmRlbGV0ZSh0aGlzLl9jcmVhdGVJZGVudGlmaWVyKGxhdExuZykpO1xuICAgIHRoaXMuX2luY2x1ZGVJbkJvdW5kcyQubmV4dChtYXApO1xuICB9XG5cbiAgY2hhbmdlRml0Qm91bmRzQ2hhbmdlU2FtcGxlVGltZSh0aW1lTXM6IG51bWJlcikge1xuICAgIHRoaXMuX2JvdW5kc0NoYW5nZVNhbXBsZVRpbWUkLm5leHQodGltZU1zKTtcbiAgfVxuXG4gIGdldEJvdW5kcyQoKTogT2JzZXJ2YWJsZTxMYXRMbmdCb3VuZHM+IHtcbiAgICByZXR1cm4gdGhpcy5ib3VuZHMkO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVJZGVudGlmaWVyKGxhdExuZzogTGF0TG5nIHwgTGF0TG5nTGl0ZXJhbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2xhdExuZy5sYXR9KyR7bGF0TG5nLmxuZ31gO1xuICB9XG59XG4iXX0=