import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
let RectangleManager = class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        }));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => r.setOptions(options));
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return Observable.create((observer) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
};
RectangleManager.ɵfac = function RectangleManager_Factory(t) { return new (t || RectangleManager)(ɵngcc0.ɵɵinject(GoogleMapsAPIWrapper), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
RectangleManager.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: RectangleManager, factory: function (t) { return RectangleManager.ɵfac(t); } });
RectangleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
RectangleManager = tslib_1.__decorate([ tslib_1.__metadata("design:paramtypes", [GoogleMapsAPIWrapper, NgZone])
], RectangleManager);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RectangleManager, [{
        type: Injectable
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: ɵngcc0.NgZone }]; }, null); })();
export { RectangleManager };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLW1hbmFnZXIuanMiLCJzb3VyY2VzIjpbIm5nOi9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvcmVjdGFuZ2xlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFHNUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBSWxFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0FBQzdCLElBR0UsWUFBb0IsV0FBaUMsRUFBVSxLQUFhO0FBQUksUUFBNUQsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFIckUsZ0JBQVcsR0FDZixJQUFJLEdBQUcsRUFBNkMsQ0FBQztBQUMzRCxJQUNpRixDQUFDO0FBQ2xGLElBQ0UsWUFBWSxDQUFDLFNBQXVCO0FBQ3RDLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0FBQ3JFLFlBQU0sTUFBTSxFQUFFO0FBQ2QsZ0JBQVEsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO0FBQzlCLGdCQUFRLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtBQUM1QixnQkFBUSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7QUFDOUIsZ0JBQVEsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0FBQzVCLGFBQU87QUFDUCxZQUFNLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztBQUNwQyxZQUFNLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztBQUNwQyxZQUFNLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtBQUNsQyxZQUFNLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztBQUNwQyxZ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Z0I7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtUmVjdGFuZ2xlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgKiBhcyBtYXBUeXBlcyBmcm9tICcuLi9nb29nbGUtbWFwcy10eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGVNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfcmVjdGFuZ2xlczogTWFwPEFnbVJlY3RhbmdsZSwgUHJvbWlzZTxtYXBUeXBlcy5SZWN0YW5nbGU+PiA9XG4gICAgICBuZXcgTWFwPEFnbVJlY3RhbmdsZSwgUHJvbWlzZTxtYXBUeXBlcy5SZWN0YW5nbGU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVdyYXBwZXI6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgYWRkUmVjdGFuZ2xlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKSB7XG4gICAgdGhpcy5fcmVjdGFuZ2xlcy5zZXQocmVjdGFuZ2xlLCB0aGlzLl9hcGlXcmFwcGVyLmNyZWF0ZVJlY3RhbmdsZSh7XG4gICAgICBib3VuZHM6IHtcbiAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgZWFzdDogcmVjdGFuZ2xlLmVhc3QsXG4gICAgICAgIHNvdXRoOiByZWN0YW5nbGUuc291dGgsXG4gICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgfSxcbiAgICAgIGNsaWNrYWJsZTogcmVjdGFuZ2xlLmNsaWNrYWJsZSxcbiAgICAgIGRyYWdnYWJsZTogcmVjdGFuZ2xlLmRyYWdnYWJsZSxcbiAgICAgIGVkaXRhYmxlOiByZWN0YW5nbGUuZWRpdGFibGUsXG4gICAgICBmaWxsQ29sb3I6IHJlY3RhbmdsZS5maWxsQ29sb3IsXG4gICAgICBmaWxsT3BhY2l0eTogcmVjdGFuZ2xlLmZpbGxPcGFjaXR5LFxuICAgICAgc3Ryb2tlQ29sb3I6IHJlY3RhbmdsZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHJlY3RhbmdsZS5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlUG9zaXRpb246IHJlY3RhbmdsZS5zdHJva2VQb3NpdGlvbixcbiAgICAgIHN0cm9rZVdlaWdodDogcmVjdGFuZ2xlLnN0cm9rZVdlaWdodCxcbiAgICAgIHZpc2libGU6IHJlY3RhbmdsZS52aXNpYmxlLFxuICAgICAgekluZGV4OiByZWN0YW5nbGUuekluZGV4LFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiByZWN0YW5nbGUgZnJvbSB0aGUgbWFwLlxuICAgKi9cbiAgcmVtb3ZlUmVjdGFuZ2xlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9yZWN0YW5nbGVzLmRlbGV0ZShyZWN0YW5nbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSwgb3B0aW9uczogbWFwVHlwZXMuUmVjdGFuZ2xlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHIuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBnZXRCb3VuZHMocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPG1hcFR5cGVzLkxhdExuZ0JvdW5kcz4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHIuZ2V0Qm91bmRzKCkpO1xuICB9XG5cbiAgc2V0Qm91bmRzKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0Qm91bmRzKHtcbiAgICAgICAgbm9ydGg6IHJlY3RhbmdsZS5ub3J0aCxcbiAgICAgICAgZWFzdDogcmVjdGFuZ2xlLmVhc3QsXG4gICAgICAgIHNvdXRoOiByZWN0YW5nbGUuc291dGgsXG4gICAgICAgIHdlc3Q6IHJlY3RhbmdsZS53ZXN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRFZGl0YWJsZShyZWN0YW5nbGU6IEFnbVJlY3RhbmdsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGVzLmdldChyZWN0YW5nbGUpLnRoZW4oKHIpID0+IHtcbiAgICAgIHJldHVybiByLnNldEVkaXRhYmxlKHJlY3RhbmdsZS5lZGl0YWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREcmFnZ2FibGUocmVjdGFuZ2xlOiBBZ21SZWN0YW5nbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICByZXR1cm4gci5zZXREcmFnZ2FibGUocmVjdGFuZ2xlLmRyYWdnYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlKHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZXMuZ2V0KHJlY3RhbmdsZSkudGhlbigocikgPT4ge1xuICAgICAgcmV0dXJuIHIuc2V0VmlzaWJsZShyZWN0YW5nbGUudmlzaWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIHJlY3RhbmdsZTogQWdtUmVjdGFuZ2xlKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIGxldCBsaXN0ZW5lcjogbWFwVHlwZXMuTWFwc0V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5fcmVjdGFuZ2xlcy5nZXQocmVjdGFuZ2xlKS50aGVuKChyKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gci5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==