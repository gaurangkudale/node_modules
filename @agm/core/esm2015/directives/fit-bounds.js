import * as tslib_1 from "tslib";
import { Directive, Input, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FitBoundsAccessor, FitBoundsDetails, FitBoundsService } from '../services/fit-bounds';
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
import * as ɵngcc0 from '@angular/core';
let AgmFitBounds = class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new Subject();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), takeUntil(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
};
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) { return new (t || AgmFitBounds)(ɵngcc0.ɵɵdirectiveInject(FitBoundsAccessor, 2), ɵngcc0.ɵɵdirectiveInject(FitBoundsService)); };
AgmFitBounds.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AgmFitBounds, selectors: [["", "agmFitBounds", ""]], inputs: { agmFitBounds: "agmFitBounds" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: Self }] },
    { type: FitBoundsService }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AgmFitBounds.prototype, "agmFitBounds", void 0);
AgmFitBounds = tslib_1.__decorate([ tslib_1.__param(0, Self()),
    tslib_1.__metadata("design:paramtypes", [FitBoundsAccessor,
        FitBoundsService])
], AgmFitBounds);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AgmFitBounds, [{
        type: Directive,
        args: [{
                selector: '[agmFitBounds]'
            }]
    }], function () { return [{ type: FitBoundsAccessor, decorators: [{
                type: Self
            }] }, { type: FitBoundsService }]; }, { agmFitBounds: [{
            type: Input
        }] }); })();
export { AgmFitBounds };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZXMiOlsibmc6L0BhZ20vY29yZS9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQyxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBSUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtBQUFHLElBVTFCLFlBQzJCLGtCQUFxQyxFQUM3QyxpQkFBbUM7QUFDdEQsUUFGMkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtBQUFDLFFBQzlDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQVh2RDtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxpQkFBWSxHQUFHLElBQUksQ0FBQztBQUMvQixRQUNVLGdCQUFXLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7QUFDM0QsUUFBVSw0QkFBdUIsR0FBNEIsSUFBSSxDQUFDO0FBQ2xFLElBSUssQ0FBQztBQUNOLElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsa0JBQWtCO0FBQzNCLGFBQU8sb0JBQW9CLEVBQUU7QUFDN0IsYUFBTyxJQUFJLENBQ0gsb0JBQW9CLENBQ2xCLENBQUMsQ0FBbUIsRUFBRSxDQUFtQixFQUFFLEVBQUUsQ0FDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2pFLEVBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDNUI7QUFDUCxhQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6RCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVILE1BREQ7QUFDSixJQUFVLGFBQWEsQ0FBQyxtQkFBc0M7QUFDOUQsUUFBSSwyRUFBMkU7QUFDL0UsUUFBSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUN0QyxZQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkYsWUFBTSxrRkFBa0Y7QUFDeEYsWUFBTSwyRUFBMkU7QUFDakYsU0FBSztBQUNMLFFBQ0ksSUFBSSxtQkFBbUIsRUFBRTtBQUM3QixZQUFNLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQztBQUN6RCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO0FBQ3ZDLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7QUFDcEMsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RSxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsV0FBVztBQUNiLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEMsUUFBSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7QUFDL0MsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25GLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxDQUFDOzsrTEFBQTtBQUNEO0FBQXNDLFlBaEVXLGlCQUFpQix1QkFBN0QsSUFBSTtBQUFPLFlBQ3dCLGdCQUFnQjtBQUN2RDtBQVJVO0FBQ1gsSUFERyxLQUFLLEVBQUU7QUFBRTtBQUVhLGtEQUZNO0FBTGxCLFlBQVksNEJBSHhCLFNBQVMsQ0FBQyxVQUNULHpCQUVFLENBV0MsbUJBQUEsSUFBSSxFQUFFLENBQUE7SUFiRCxFQUFFLGdCQUFnQixPQUMzQixDQUFDLDlCQVlXLDZDQUFvQyxpQkFBaUI7QUFDbEUsUUFBd0MsZ0JBQWdCO0FBQ3ZELEdBYlksWUFBWSxDQTBFeEI7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQTNFWSxZQUFZO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGaXRCb3VuZHNBY2Nlc3NvciwgRml0Qm91bmRzRGV0YWlscywgRml0Qm91bmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xuXG4vKipcbiAqIEFkZHMgdGhlIGdpdmVuIGRpcmVjdGl2ZSB0byB0aGUgYXV0byBmaXQgYm91bmRzIGZlYXR1cmUgd2hlbiB0aGUgdmFsdWUgaXMgdHJ1ZS5cbiAqIFRvIG1ha2UgaXQgd29yayB3aXRoIHlvdSBjdXN0b20gQUdNIGNvbXBvbmVudCwgeW91IGFsc28gaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHtAbGluayBGaXRCb3VuZHNBY2Nlc3Nvcn0gYWJzdHJhY3QgY2xhc3MuXG4gKiBAZXhhbXBsZVxuICogPGFnbS1tYXJrZXIgW2FnbUZpdEJvdW5kc109XCJ0cnVlXCI+PC9hZ20tbWFya2VyPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWdtRml0Qm91bmRzXScsXG59KVxuZXhwb3J0IGNsYXNzIEFnbUZpdEJvdW5kcyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogSWYgdGhlIHZhbHVlIGlzIHRydWUsIHRoZSBlbGVtZW50IGdldHMgYWRkZWQgdG8gdGhlIGJvdW5kcyBvZiB0aGUgbWFwLlxuICAgKiBEZWZhdWx0OiB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgYWdtRml0Qm91bmRzID0gdHJ1ZTtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfbGF0ZXN0Rml0Qm91bmRzRGV0YWlsczogRml0Qm91bmRzRGV0YWlscyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBfZml0Qm91bmRzQWNjZXNzb3I6IEZpdEJvdW5kc0FjY2Vzc29yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc1NlcnZpY2U6IEZpdEJvdW5kc1NlcnZpY2UsXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVCb3VuZHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2ZpdEJvdW5kc0FjY2Vzc29yXG4gICAgICAuZ2V0Rml0Qm91bmRzRGV0YWlscyQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgICAgICh4OiBGaXRCb3VuZHNEZXRhaWxzLCB5OiBGaXRCb3VuZHNEZXRhaWxzKSA9PlxuICAgICAgICAgICAgeC5sYXRMbmcubGF0ID09PSB5LmxhdExuZy5sYXQgJiYgeC5sYXRMbmcubG5nID09PSB5LmxhdExuZy5sbmcsXG4gICAgICAgICksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGV0YWlscyA9PiB0aGlzLl91cGRhdGVCb3VuZHMoZGV0YWlscykpO1xuICB9XG5cbiAgLypcbiAgIEVpdGhlciB0aGUgbG9jYXRpb24gY2hhbmdlZCwgb3IgdmlzaWJsZSBzdGF0dXMgY2hhbmdlZC5cbiAgIFBvc3NpYmxlIHN0YXRlIGNoYW5nZXMgYXJlXG4gICBpbnZpc2libGUgLT4gdmlzaWJsZVxuICAgdmlzaWJsZSAtPiBpbnZpc2libGVcbiAgIHZpc2libGUgLT4gdmlzaWJsZSAobmV3IGxvY2F0aW9uKVxuICAqL1xuICBwcml2YXRlIF91cGRhdGVCb3VuZHMobmV3Rml0Qm91bmRzRGV0YWlscz86IEZpdEJvdW5kc0RldGFpbHMpIHtcbiAgICAvLyBlaXRoZXIgdmlzaWJpbGl0eSB3aWxsIGNoYW5nZSwgb3IgbG9jYXRpb24sIHNvIHJlbW92ZSB0aGUgb2xkIG9uZSBhbnl3YXlcbiAgICBpZiAodGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5yZW1vdmVGcm9tQm91bmRzKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMubGF0TG5nKTtcbiAgICAgIC8vIGRvbid0IHNldCBsYXRlc3RGaXRCb3VuZHNEZXRhaWxzIHRvIG51bGwsIGJlY2F1c2Ugd2UgY2FuIHRvZ2dsZSB2aXNpYmlsaXR5IGZyb21cbiAgICAgIC8vIHRydWUgLT4gZmFsc2UgLT4gdHJ1ZSwgaW4gd2hpY2ggY2FzZSB3ZSBzdGlsbCBuZWVkIG9sZCB2YWx1ZSBjYWNoZWQgaGVyZVxuICAgIH1cblxuICAgIGlmIChuZXdGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgICB0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzID0gbmV3Rml0Qm91bmRzRGV0YWlscztcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmFnbUZpdEJvdW5kcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5hZGRUb0JvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maXRCb3VuZHNTZXJ2aWNlLnJlbW92ZUZyb21Cb3VuZHModGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscy5sYXRMbmcpO1xuICAgIH1cbiAgfVxufVxuIl19