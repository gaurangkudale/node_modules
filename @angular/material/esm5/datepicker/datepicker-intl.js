/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** Datepicker data that requires internationalization. */
import * as ɵngcc0 from '@angular/core';
var MatDatepickerIntl = /** @class */ (function () {
    function MatDatepickerIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** A label for the calendar popup (used by screen readers). */
        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */
        this.openCalendarLabel = 'Open calendar';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 20 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 20 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /** Formats a range of years. */
    MatDatepickerIntl.prototype.formatYearRange = function (start, end) {
        return start + " \u2013 " + end;
    };
    MatDatepickerIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) { return new (t || MatDatepickerIntl)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MatDatepickerIntl;
}());
export { MatDatepickerIntl };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnRsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWludGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QjtBQUVBLDBEQUEwRDs7QUFDMUQ7QUFDbUIsSUFEbkI7QUFBK0IsUUFFN0I7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQVcsWUFBTyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3hELFFBQ0UsK0RBQStEO0FBQ2pFLFFBQUUsa0JBQWEsR0FBVyxVQUFVLENBQUM7QUFDckMsUUFDRSx1RkFBdUY7QUFDekYsUUFBRSxzQkFBaUIsR0FBVyxlQUFlLENBQUM7QUFDOUMsUUFDRSxzRUFBc0U7QUFDeEUsUUFBRSxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO0FBQzVDLFFBQ0Usa0VBQWtFO0FBQ3BFLFFBQUUsbUJBQWMsR0FBVyxZQUFZLENBQUM7QUFDeEMsUUFDRSxxRUFBcUU7QUFDdkUsUUFBRSxrQkFBYSxHQUFXLGVBQWUsQ0FBQztBQUMxQyxRQUNFLGlFQUFpRTtBQUNuRSxRQUFFLGtCQUFhLEdBQVcsV0FBVyxDQUFDO0FBQ3RDLFFBQ0UsMkVBQTJFO0FBQzdFLFFBQUUsdUJBQWtCLEdBQVcsbUJBQW1CLENBQUM7QUFDbkQsUUFDRSx1RUFBdUU7QUFDekUsUUFBRSx1QkFBa0IsR0FBVyxlQUFlLENBQUM7QUFDL0MsUUFDRSw4RUFBOEU7QUFDaEYsUUFBRSwyQkFBc0IsR0FBVyxhQUFhLENBQUM7QUFDakQsUUFDRSw2RUFBNkU7QUFDL0UsUUFBRSwrQkFBMEIsR0FBVyx1QkFBdUIsQ0FBQztBQUMvRCxLQUtDO0FBQ0QsSUFMRSxnQ0FBZ0M7QUFDbEMsSUFBRSwyQ0FBZSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxHQUFXO0FBQUksUUFDNUMsT0FBVSxLQUFLLGdCQUFXLEdBQUssQ0FBQztBQUNwQyxJQUFFLENBQUMsQ0F4Q007cURBRFIsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyw5RkFDdEI7Ozs7O2dEQUtMO0FBQUMsNEJBbkJOO0FBQUUsQ0F1REQsQUExQ0QsSUEwQ0M7QUFDRCxTQTFDYSxpQkFBaUI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cblxuLyoqIERhdGVwaWNrZXIgZGF0YSB0aGF0IHJlcXVpcmVzIGludGVybmF0aW9uYWxpemF0aW9uLiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXBpY2tlckludGwge1xuICAvKipcbiAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGxhYmVscyBoZXJlIGFyZSBjaGFuZ2VkLiBVc2UgdGhpcyB0byBub3RpZnlcbiAgICogY29tcG9uZW50cyBpZiB0aGUgbGFiZWxzIGhhdmUgY2hhbmdlZCBhZnRlciBpbml0aWFsaXphdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgY2FsZW5kYXIgcG9wdXAgKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBjYWxlbmRhckxhYmVsOiBzdHJpbmcgPSAnQ2FsZW5kYXInO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgYnV0dG9uIHVzZWQgdG8gb3BlbiB0aGUgY2FsZW5kYXIgcG9wdXAgKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBvcGVuQ2FsZW5kYXJMYWJlbDogc3RyaW5nID0gJ09wZW4gY2FsZW5kYXInO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgbW9udGggYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgcHJldk1vbnRoTGFiZWw6IHN0cmluZyA9ICdQcmV2aW91cyBtb250aCc7XG5cbiAgLyoqIEEgbGFiZWwgZm9yIHRoZSBuZXh0IG1vbnRoIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIG5leHRNb250aExhYmVsOiBzdHJpbmcgPSAnTmV4dCBtb250aCc7XG5cbiAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyB5ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIHByZXZZZWFyTGFiZWw6IHN0cmluZyA9ICdQcmV2aW91cyB5ZWFyJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIG5leHQgeWVhciBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBuZXh0WWVhckxhYmVsOiBzdHJpbmcgPSAnTmV4dCB5ZWFyJztcblxuICAvKiogQSBsYWJlbCBmb3IgdGhlIHByZXZpb3VzIG11bHRpLXllYXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gKi9cbiAgcHJldk11bHRpWWVhckxhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMgMjAgeWVhcnMnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIG5leHRNdWx0aVllYXJMYWJlbDogc3RyaW5nID0gJ05leHQgMjAgeWVhcnMnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgJ3N3aXRjaCB0byBtb250aCB2aWV3JyBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICBzd2l0Y2hUb01vbnRoVmlld0xhYmVsOiBzdHJpbmcgPSAnQ2hvb3NlIGRhdGUnO1xuXG4gIC8qKiBBIGxhYmVsIGZvciB0aGUgJ3N3aXRjaCB0byB5ZWFyIHZpZXcnIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gIHN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsOiBzdHJpbmcgPSAnQ2hvb3NlIG1vbnRoIGFuZCB5ZWFyJztcblxuICAvKiogRm9ybWF0cyBhIHJhbmdlIG9mIHllYXJzLiAqL1xuICBmb3JtYXRZZWFyUmFuZ2Uoc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtzdGFydH0gXFx1MjAxMyAke2VuZH1gO1xuICB9XG59XG4iXX0=