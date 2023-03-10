/**
 * @fileoverview added by tsickle
 * Generated from: src/material/sort/sort-header-intl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class MatSortHeaderIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /**
         * ARIA label for the sorting button.
         */
        this.sortButtonLabel = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            return `Change sorting for ${id}`;
        });
    }
}
MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) { return new (t || MatSortHeaderIntl)(); };
/** @nocollapse */ MatSortHeaderIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSortHeaderIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     * @type {?}
     */
    MatSortHeaderIntl.prototype.changes;
    /**
     * ARIA label for the sorting button.
     * @type {?}
     */
    MatSortHeaderIntl.prototype.sortButtonLabel;
}
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
export function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/**
 * \@docs-private
 * @type {?}
 */
export const MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
    useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oZWFkZXItaW50bC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3NvcnQvc29ydC1oZWFkZXItaW50bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QjtBQUVnQztBQUFJO0FBRXBDO0FBQ2dDOztBQUNoQyxNQUFNLE9BQU8saUJBQWlCO0FBQzlCLElBRkE7QUFBZ0I7QUFBWTtBQUdhO0FBQ1Q7QUFBWSxRQUVqQyxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7QUFDeEQ7QUFDVztBQUNFO0FBQVksUUFBdkIsb0JBQWU7QUFBUTtBQUNiO0FBQXVCO0FBR2pDLFFBSmtCLENBQUMsRUFBVSxFQUFFLEVBQUU7QUFDbkMsWUFBSSxPQUFPLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztBQUN0QyxRQUFFLENBQUMsRUFBQTtBQUNILEtBQUM7QUFDRDs2Q0FiQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLG9CQUMzQjtBQUFDOzs7O2dEQUtVO0FBQUM7QUFBYTtBQUFRO0FBR3BCO0FBSWhCO0FBQWlCO0FBQ2IsSUFSSixvQ0FBc0Q7QUFDeEQ7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIsNENBRUM7QUFDSDtBQUNBO0FBQUk7QUFDSDtBQUF5QjtBQUFlO0FBQXpDLE1BQU0sVUFBVSxxQ0FBcUMsQ0FBQyxVQUE2QjtBQUNuRixJQUFFLE9BQU8sVUFBVSxJQUFJLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBQ0Q7QUFDRztBQUNIO0FBQWE7QUFBYixNQUFNLE9BQU8sNkJBQTZCLEdBQUc7QUFDN0M7QUFDRSxJQUFBLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdELElBQUUsVUFBVSxFQUFFLHFDQUFxQztBQUNuRCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBTa2lwU2VsZiwgT3B0aW9uYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBUbyBtb2RpZnkgdGhlIGxhYmVscyBhbmQgdGV4dCBkaXNwbGF5ZWQsIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBNYXRTb3J0SGVhZGVySW50bCBhbmRcbiAqIGluY2x1ZGUgaXQgaW4gYSBjdXN0b20gcHJvdmlkZXIuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1hdFNvcnRIZWFkZXJJbnRsIHtcbiAgLyoqXG4gICAqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSBsYWJlbHMgaGVyZSBhcmUgY2hhbmdlZC4gVXNlIHRoaXMgdG8gbm90aWZ5XG4gICAqIGNvbXBvbmVudHMgaWYgdGhlIGxhYmVscyBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogQVJJQSBsYWJlbCBmb3IgdGhlIHNvcnRpbmcgYnV0dG9uLiAqL1xuICBzb3J0QnV0dG9uTGFiZWwgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgQ2hhbmdlIHNvcnRpbmcgZm9yICR7aWR9YDtcbiAgfVxufVxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNQVRfU09SVF9IRUFERVJfSU5UTF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudEludGw6IE1hdFNvcnRIZWFkZXJJbnRsKSB7XG4gIHJldHVybiBwYXJlbnRJbnRsIHx8IG5ldyBNYXRTb3J0SGVhZGVySW50bCgpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IE1BVF9TT1JUX0hFQURFUl9JTlRMX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE1hdFNvcnRIZWFkZXJJbnRsIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IE1hdFNvcnRIZWFkZXJJbnRsLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTWF0U29ydEhlYWRlckludGxdXSxcbiAgdXNlRmFjdG9yeTogTUFUX1NPUlRfSEVBREVSX0lOVExfUFJPVklERVJfRkFDVE9SWVxufTtcbiJdfQ==