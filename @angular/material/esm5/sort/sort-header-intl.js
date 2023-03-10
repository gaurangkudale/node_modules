/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
import * as ɵngcc0 from '@angular/core';
var MatSortHeaderIntl = /** @class */ (function () {
    function MatSortHeaderIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** ARIA label for the sorting button. */
        this.sortButtonLabel = function (id) {
            return "Change sorting for " + id;
        };
    }
    MatSortHeaderIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) { return new (t || MatSortHeaderIntl)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSortHeaderIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MatSortHeaderIntl;
}());
export { MatSortHeaderIntl };
/** @docs-private */
export function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
export var MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
    useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oZWFkZXItaW50bC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NvcnQvc29ydC1oZWFkZXItaW50bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBQ21CLElBRG5CO0FBQStCLFFBRTdCO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFXLFlBQU8sR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUN4RCxRQUNFLHlDQUF5QztBQUMzQyxRQUFFLG9CQUFlLEdBQUcsVUFBQyxFQUFVO0FBQUksWUFDL0IsT0FBTyx3QkFBc0IsRUFBSSxDQUFDO0FBQ3RDLFFBQUUsQ0FBQyxDQUFBO0FBQ0gsS0FBQyxBQVhRO3FEQURSLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsOUZBQ3RCOzs7OztnREFLTDtBQUFDLDRCQXJCTjtBQUFFLENBMkJELEFBWkQsSUFZQztBQUNELFNBWmEsaUJBQWlCO0FBWTlCLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUscUNBQXFDLENBQUMsVUFBNkI7QUFDbkYsSUFBRSxPQUFPLFVBQVUsSUFBSSxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBRztBQUM3QyxJQUFFLDhGQUE4RjtBQUNoRyxJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdELElBQUUsVUFBVSxFQUFFLHFDQUFxQztBQUNuRCxDQUFDLENBQUM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIFNraXBTZWxmLCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRvIG1vZGlmeSB0aGUgbGFiZWxzIGFuZCB0ZXh0IGRpc3BsYXllZCwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIE1hdFNvcnRIZWFkZXJJbnRsIGFuZFxuICogaW5jbHVkZSBpdCBpbiBhIGN1c3RvbSBwcm92aWRlci5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTWF0U29ydEhlYWRlckludGwge1xuICAvKipcbiAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGxhYmVscyBoZXJlIGFyZSBjaGFuZ2VkLiBVc2UgdGhpcyB0byBub3RpZnlcbiAgICogY29tcG9uZW50cyBpZiB0aGUgbGFiZWxzIGhhdmUgY2hhbmdlZCBhZnRlciBpbml0aWFsaXphdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBBUklBIGxhYmVsIGZvciB0aGUgc29ydGluZyBidXR0b24uICovXG4gIHNvcnRCdXR0b25MYWJlbCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGBDaGFuZ2Ugc29ydGluZyBmb3IgJHtpZH1gO1xuICB9XG59XG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1BVF9TT1JUX0hFQURFUl9JTlRMX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50SW50bDogTWF0U29ydEhlYWRlckludGwpIHtcbiAgcmV0dXJuIHBhcmVudEludGwgfHwgbmV3IE1hdFNvcnRIZWFkZXJJbnRsKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX1NPUlRfSEVBREVSX0lOVExfUFJPVklERVIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTWF0U29ydEhlYWRlckludGwgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogTWF0U29ydEhlYWRlckludGwsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBNYXRTb3J0SGVhZGVySW50bF1dLFxuICB1c2VGYWN0b3J5OiBNQVRfU09SVF9IRUFERVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZXG59O1xuIl19