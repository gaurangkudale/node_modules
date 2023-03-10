import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { bindCallback, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { map, multicast, switchMap } from 'rxjs/operators';
import { GeocoderStatus } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
import * as ɵngcc0 from '@angular/core';
let AgmGeocoder = class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new Observable(subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(map(() => this._createGeocoder()), multicast(new ReplaySubject(1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(switchMap((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = bindCallback(geocoder.geocode);
        return geocodeObservable(request).pipe(switchMap(([results, status]) => {
            if (status === GeocoderStatus.OK) {
                return of(results);
            }
            return throwError(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
};
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) { return new (t || AgmGeocoder)(ɵngcc0.ɵɵinject(MapsAPILoader)); };
AgmGeocoder.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AgmGeocoder, factory: function (t) { return AgmGeocoder.ɵfac(t); }, providedIn: 'root' });
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
AgmGeocoder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(i0.ɵɵinject(i1.MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder = tslib_1.__decorate([ tslib_1.__metadata("design:paramtypes", [MapsAPILoader])
], AgmGeocoder);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AgmGeocoder, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();
export { AgmGeocoder };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L0BhZ20vY29yZS9zZXJ2aWNlcy9nZW9jb2Rlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQXlCLFVBQVUsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQTZDLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRTtBQUdVOztBQUNWLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7QUFDeEIsSUFFRSxZQUFZLE1BQXFCO0FBQ25DLFFBQUksTUFBTSxvQkFBb0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUM3RCxZQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbEQsUUFBSSxDQUFDLENBQUM7QUFDTixhQUFPLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNHLENBQUM7QUFDM0MsUUFDSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjtBQUM5RCxRQUFJLHlEQUF5RDtBQUM3RCxRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFDMUMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPLENBQUMsT0FBd0I7QUFBSSxRQUNsQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQ1UsaUJBQWlCLENBQUMsUUFBa0IsRUFBRSxPQUF3QjtBQUFJLFFBQ3hFLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3RCxRQUFJLE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO0FBQ3RDLFlBQVEsSUFBSSxNQUFNLEtBQUssY0FBYyxDQUFDLEVBQUUsRUFBRTtBQUMxQyxnQkFBVSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixhQUFTO0FBQ1QsWUFDUSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyxRQUFNLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNVLGVBQWU7QUFBSyxRQUMxQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWMsQ0FBQztBQUNsRCxJQUFFLENBQUM7QUFDSCxDQUFDOztpSkFBQTtBQUNEO0FBQXFDLFlBdENmLGFBQWE7QUFBRztBQUNwQztBQUpXLFdBQVcsNEJBRHZCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyx2Q0FDL0IsMENBR2tCLGFBQWE7QUFBRyxHQUh6QixXQUFXLENBd0N2Qjs7Ozt1RUFDRDtBQUFDLFNBekNZLFdBQVc7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiaW5kQ2FsbGJhY2ssIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbXVsdGljYXN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHZW9jb2RlciwgR2VvY29kZXJSZXF1ZXN0LCBHZW9jb2RlclJlc3VsdCwgR2VvY29kZXJTdGF0dXMgfSBmcm9tICcuL2dvb2dsZS1tYXBzLXR5cGVzJztcbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xuXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBZ21HZW9jb2RlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBnZW9jb2RlciQ6IE9ic2VydmFibGU8R2VvY29kZXI+O1xuXG4gIGNvbnN0cnVjdG9yKGxvYWRlcjogTWFwc0FQSUxvYWRlcikge1xuICAgIGNvbnN0IGNvbm5lY3RhYmxlR2VvY29kZXIkID0gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4gc3Vic2NyaWJlci5uZXh0KCkpO1xuICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuX2NyZWF0ZUdlb2NvZGVyKCkpLFxuICAgICAgICBtdWx0aWNhc3QobmV3IFJlcGxheVN1YmplY3QoMSkpLFxuICAgICAgKSBhcyBDb25uZWN0YWJsZU9ic2VydmFibGU8R2VvY29kZXI+O1xuXG4gICAgY29ubmVjdGFibGVHZW9jb2RlciQuY29ubmVjdCgpOyAvLyBpZ25vcmUgdGhlIHN1YnNjcmlwdGlvblxuICAgIC8vIHNpbmNlIHdlIHdpbGwgcmVtYWluIHN1YnNjcmliZWQgdGlsbCBhcHBsaWNhdGlvbiBleGl0c1xuXG4gICAgdGhpcy5nZW9jb2RlciQgPSBjb25uZWN0YWJsZUdlb2NvZGVyJDtcbiAgfVxuXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxHZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2VvY29kZXIkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGdlb2NvZGVyKSA9PiB0aGlzLl9nZXRHb29nbGVSZXN1bHRzKGdlb2NvZGVyLCByZXF1ZXN0KSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0R29vZ2xlUmVzdWx0cyhnZW9jb2RlcjogR2VvY29kZXIsIHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IE9ic2VydmFibGU8R2VvY29kZXJSZXN1bHRbXT4ge1xuICAgIGNvbnN0IGdlb2NvZGVPYnNlcnZhYmxlID0gYmluZENhbGxiYWNrKGdlb2NvZGVyLmdlb2NvZGUpO1xuICAgIHJldHVybiBnZW9jb2RlT2JzZXJ2YWJsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChbcmVzdWx0cywgc3RhdHVzXSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBHZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgIHJldHVybiBvZihyZXN1bHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHN0YXR1cyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVHZW9jb2RlcigpOiBHZW9jb2RlciB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpIGFzIEdlb2NvZGVyO1xuICB9XG59XG4iXX0=