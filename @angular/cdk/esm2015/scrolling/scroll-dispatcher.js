/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable, NgZone } from '@angular/core';
import { fromEvent, of as observableOf, Subject, Observable } from 'rxjs';
import { auditTime, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
export class ScrollDispatcher {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     */
    constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new Subject();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next(scrollable))));
        }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    deregister(scrollable) {
        /** @type {?} */
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
            return observableOf();
        }
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (!this._globalSubscription) {
                this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            const subscription = auditTimeInMs > 0 ?
                this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) :
                this._scrolled.subscribe(observer);
            this._scrolledCount++;
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._scrolledCount--;
                if (!this._scrolledCount) {
                    this._removeGlobalListener();
                }
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        (_, container) => this.deregister(container)));
        this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ancestorScrolled(elementRef, auditTimeInMs) {
        /** @type {?} */
        const ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((/**
         * @param {?} target
         * @return {?}
         */
        target => {
            return !target || ancestors.indexOf(target) > -1;
        })));
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    getAncestorScrollContainers(elementRef) {
        /** @type {?} */
        const scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        (_subscription, scrollable) => {
            if (this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    _scrollableContainsElement(scrollable, elementRef) {
        /** @type {?} */
        let element = elementRef.nativeElement;
        /** @type {?} */
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    }
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return fromEvent(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next()));
        }));
    }
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    }
}
ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) { return new (t || ScrollDispatcher)(ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc1.Platform)); };
/** @nocollapse */
ScrollDispatcher.ctorParameters = () => [
    { type: NgZone },
    { type: Platform }
];
/** @nocollapse */ ScrollDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.Platform)); }, token: ScrollDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollDispatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }]; }, null); })();
if (false) {
    /**
     * Subject for notifying that a registered scrollable reference element has been scrolled.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolled;
    /**
     * Keeps track of the global `scroll` and `resize` subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype._globalSubscription;
    /**
     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     * @type {?}
     */
    ScrollDispatcher.prototype.scrollContainers;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollDispatcher.prototype._platform;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2Nyb2xsaW5nL3Njcm9sbC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxFQUFnQixVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDaEcsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRDtBQUFxQztBQUdEO0FBQUk7QUFDSjtBQUcvQjs7O0FBSEwsTUFBTSxPQUFPLG1CQUFtQixHQUFHLEVBQUU7QUFDckM7QUFDRztBQUM2RjtBQUNqRDtBQUcvQyxNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7QUFBUTtBQUMzQjtBQUE0QjtBQUFRLElBQS9DLFlBQW9CLE9BQWUsRUFBVSxTQUFtQjtBQUFJLFFBQWhELFlBQU8sR0FBUCxPQUFPLENBQVE7QUFBQyxRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7QUFBQztBQUU3RDtBQUNFO0FBQVksUUFBVixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQXNCLENBQUM7QUFDeEQ7QUFDVztBQUNFO0FBQVksUUFBdkIsd0JBQW1CLEdBQXdCLElBQUksQ0FBQztBQUNsRDtBQUNXO0FBQ0U7QUFBWSxRQUFmLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQzdCO0FBRUs7QUFDTTtBQUVBO0FBQVksUUFBckIscUJBQWdCLEdBQXFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDakUsSUFoQnNFLENBQUM7QUFDdkU7QUFDTztBQUNLO0FBRTZCO0FBQ0w7QUFFakM7QUFBUSxJQWNULFFBQVEsQ0FBQyxVQUF5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TztBQUNGO0FBQWlCO0FBR3JCO0FBQVEsSUFIUCwwQ0FBMkI7QUFDN0I7QUFFQztBQUNFO0FBQ0U7QUFDVztBQUFRLElBQXRCLDRDQUErRDtBQUNqRTtBQUVDO0FBQWlCO0FBQWdCO0FBQVEsSUFsQjVCLG1DQUF1QjtBQUFDO0FBQVE7QUFBaUI7QUFFekQ7QUFBUSxJQUZ5QixxQ0FBMkI7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge0VsZW1lbnRSZWYsIEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHthdWRpdFRpbWUsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtDZGtTY3JvbGxhYmxlfSBmcm9tICcuL3Njcm9sbGFibGUnO1xuXG5cbi8qKiBUaW1lIGluIG1zIHRvIHRocm90dGxlIHRoZSBzY3JvbGxpbmcgZXZlbnRzIGJ5IGRlZmF1bHQuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TQ1JPTExfVElNRSA9IDIwO1xuXG4vKipcbiAqIFNlcnZpY2UgY29udGFpbmVkIGFsbCByZWdpc3RlcmVkIFNjcm9sbGFibGUgcmVmZXJlbmNlcyBhbmQgZW1pdHMgYW4gZXZlbnQgd2hlbiBhbnkgb25lIG9mIHRoZVxuICogU2Nyb2xsYWJsZSByZWZlcmVuY2VzIGVtaXQgYSBzY3JvbGxlZCBldmVudC5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLCBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhhdCBhIHJlZ2lzdGVyZWQgc2Nyb2xsYWJsZSByZWZlcmVuY2UgZWxlbWVudCBoYXMgYmVlbiBzY3JvbGxlZC4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsZWQgPSBuZXcgU3ViamVjdDxDZGtTY3JvbGxhYmxlfHZvaWQ+KCk7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBnbG9iYWwgYHNjcm9sbGAgYW5kIGByZXNpemVgIHN1YnNjcmlwdGlvbnMuICovXG4gIF9nbG9iYWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgYW1vdW50IG9mIHN1YnNjcmlwdGlvbnMgdG8gYHNjcm9sbGVkYC4gVXNlZCBmb3IgY2xlYW5pbmcgdXAgYWZ0ZXJ3YXJkcy4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsZWRDb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgdGhlIHNjcm9sbGFibGUgcmVmZXJlbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhlIHNlcnZpY2UgYW5kIHRoZWlyXG4gICAqIHNjcm9sbCBldmVudCBzdWJzY3JpcHRpb25zLlxuICAgKi9cbiAgc2Nyb2xsQ29udGFpbmVyczogTWFwPENka1Njcm9sbGFibGUsIFN1YnNjcmlwdGlvbj4gPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHNjcm9sbGFibGUgaW5zdGFuY2Ugd2l0aCB0aGUgc2VydmljZSBhbmQgbGlzdGVucyBmb3IgaXRzIHNjcm9sbGVkIGV2ZW50cy4gV2hlbiB0aGVcbiAgICogc2Nyb2xsYWJsZSBpcyBzY3JvbGxlZCwgdGhlIHNlcnZpY2UgZW1pdHMgdGhlIGV2ZW50IHRvIGl0cyBzY3JvbGxlZCBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0gc2Nyb2xsYWJsZSBTY3JvbGxhYmxlIGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3RlcihzY3JvbGxhYmxlOiBDZGtTY3JvbGxhYmxlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbENvbnRhaW5lcnMuaGFzKHNjcm9sbGFibGUpKSB7XG4gICAgICB0aGlzLnNjcm9sbENvbnRhaW5lcnMuc2V0KHNjcm9sbGFibGUsIHNjcm9sbGFibGUuZWxlbWVudFNjcm9sbGVkKClcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3Njcm9sbGVkLm5leHQoc2Nyb2xsYWJsZSkpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYSBTY3JvbGxhYmxlIHJlZmVyZW5jZSBhbmQgdW5zdWJzY3JpYmVzIGZyb20gaXRzIHNjcm9sbCBldmVudCBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0gc2Nyb2xsYWJsZSBTY3JvbGxhYmxlIGluc3RhbmNlIHRvIGJlIGRlcmVnaXN0ZXJlZC5cbiAgICovXG4gIGRlcmVnaXN0ZXIoc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZSk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbGFibGVSZWZlcmVuY2UgPSB0aGlzLnNjcm9sbENvbnRhaW5lcnMuZ2V0KHNjcm9sbGFibGUpO1xuXG4gICAgaWYgKHNjcm9sbGFibGVSZWZlcmVuY2UpIHtcbiAgICAgIHNjcm9sbGFibGVSZWZlcmVuY2UudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVycy5kZWxldGUoc2Nyb2xsYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFuIGV2ZW50IHdoZW5ldmVyIGFueSBvZiB0aGUgcmVnaXN0ZXJlZCBTY3JvbGxhYmxlXG4gICAqIHJlZmVyZW5jZXMgKG9yIHdpbmRvdywgZG9jdW1lbnQsIG9yIGJvZHkpIGZpcmUgYSBzY3JvbGxlZCBldmVudC4gQ2FuIHByb3ZpZGUgYSB0aW1lIGluIG1zXG4gICAqIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IFwidGhyb3R0bGVcIiB0aW1lLlxuICAgKlxuICAgKiAqKk5vdGU6KiogaW4gb3JkZXIgdG8gYXZvaWQgaGl0dGluZyBjaGFuZ2UgZGV0ZWN0aW9uIGZvciBldmVyeSBzY3JvbGwgZXZlbnQsXG4gICAqIGFsbCBvZiB0aGUgZXZlbnRzIGVtaXR0ZWQgZnJvbSB0aGlzIHN0cmVhbSB3aWxsIGJlIHJ1biBvdXRzaWRlIHRoZSBBbmd1bGFyIHpvbmUuXG4gICAqIElmIHlvdSBuZWVkIHRvIHVwZGF0ZSBhbnkgZGF0YSBiaW5kaW5ncyBhcyBhIHJlc3VsdCBvZiBhIHNjcm9sbCBldmVudCwgeW91IGhhdmVcbiAgICogdG8gcnVuIHRoZSBjYWxsYmFjayB1c2luZyBgTmdab25lLnJ1bmAuXG4gICAqL1xuICBzY3JvbGxlZChhdWRpdFRpbWVJbk1zOiBudW1iZXIgPSBERUZBVUxUX1NDUk9MTF9USU1FKTogT2JzZXJ2YWJsZTxDZGtTY3JvbGxhYmxlfHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZjx2b2lkPigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPENka1Njcm9sbGFibGV8dm9pZD4pID0+IHtcbiAgICAgIGlmICghdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuX2FkZEdsb2JhbExpc3RlbmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEluIHRoZSBjYXNlIG9mIGEgMG1zIGRlbGF5LCB1c2UgYW4gb2JzZXJ2YWJsZSB3aXRob3V0IGF1ZGl0VGltZVxuICAgICAgLy8gc2luY2UgaXQgZG9lcyBhZGQgYSBwZXJjZXB0aWJsZSBkZWxheSBpbiBwcm9jZXNzaW5nIG92ZXJoZWFkLlxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXVkaXRUaW1lSW5NcyA+IDAgP1xuICAgICAgICB0aGlzLl9zY3JvbGxlZC5waXBlKGF1ZGl0VGltZShhdWRpdFRpbWVJbk1zKSkuc3Vic2NyaWJlKG9ic2VydmVyKSA6XG4gICAgICAgIHRoaXMuX3Njcm9sbGVkLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICAgIHRoaXMuX3Njcm9sbGVkQ291bnQrKztcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbGVkQ291bnQtLTtcblxuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbGVkQ291bnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lcnMuZm9yRWFjaCgoXywgY29udGFpbmVyKSA9PiB0aGlzLmRlcmVnaXN0ZXIoY29udGFpbmVyKSk7XG4gICAgdGhpcy5fc2Nyb2xsZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuZXZlciBhbnkgb2YgdGhlXG4gICAqIHNjcm9sbGFibGUgYW5jZXN0b3JzIG9mIGFuIGVsZW1lbnQgYXJlIHNjcm9sbGVkLlxuICAgKiBAcGFyYW0gZWxlbWVudFJlZiBFbGVtZW50IHdob3NlIGFuY2VzdG9ycyB0byBsaXN0ZW4gZm9yLlxuICAgKiBAcGFyYW0gYXVkaXRUaW1lSW5NcyBUaW1lIHRvIHRocm90dGxlIHRoZSBzY3JvbGwgZXZlbnRzLlxuICAgKi9cbiAgYW5jZXN0b3JTY3JvbGxlZChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBhdWRpdFRpbWVJbk1zPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDZGtTY3JvbGxhYmxlfHZvaWQ+IHtcbiAgICBjb25zdCBhbmNlc3RvcnMgPSB0aGlzLmdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50UmVmKTtcblxuICAgIHJldHVybiB0aGlzLnNjcm9sbGVkKGF1ZGl0VGltZUluTXMpLnBpcGUoZmlsdGVyKHRhcmdldCA9PiB7XG4gICAgICByZXR1cm4gIXRhcmdldCB8fCBhbmNlc3RvcnMuaW5kZXhPZih0YXJnZXQpID4gLTE7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYWxsIHJlZ2lzdGVyZWQgU2Nyb2xsYWJsZXMgdGhhdCBjb250YWluIHRoZSBwcm92aWRlZCBlbGVtZW50LiAqL1xuICBnZXRBbmNlc3RvclNjcm9sbENvbnRhaW5lcnMoZWxlbWVudFJlZjogRWxlbWVudFJlZik6IENka1Njcm9sbGFibGVbXSB7XG4gICAgY29uc3Qgc2Nyb2xsaW5nQ29udGFpbmVyczogQ2RrU2Nyb2xsYWJsZVtdID0gW107XG5cbiAgICB0aGlzLnNjcm9sbENvbnRhaW5lcnMuZm9yRWFjaCgoX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uLCBzY3JvbGxhYmxlOiBDZGtTY3JvbGxhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsYWJsZUNvbnRhaW5zRWxlbWVudChzY3JvbGxhYmxlLCBlbGVtZW50UmVmKSkge1xuICAgICAgICBzY3JvbGxpbmdDb250YWluZXJzLnB1c2goc2Nyb2xsYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2Nyb2xsaW5nQ29udGFpbmVycztcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgcHJvdmlkZWQgU2Nyb2xsYWJsZS4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsYWJsZUNvbnRhaW5zRWxlbWVudChzY3JvbGxhYmxlOiBDZGtTY3JvbGxhYmxlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogYm9vbGVhbiB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc2Nyb2xsYWJsZUVsZW1lbnQgPSBzY3JvbGxhYmxlLmdldEVsZW1lbnRSZWYoKS5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gVHJhdmVyc2UgdGhyb3VnaCB0aGUgZWxlbWVudCBwYXJlbnRzIHVudGlsIHdlIHJlYWNoIG51bGwsIGNoZWNraW5nIGlmIGFueSBvZiB0aGUgZWxlbWVudHNcbiAgICAvLyBhcmUgdGhlIHNjcm9sbGFibGUncyBlbGVtZW50LlxuICAgIGRvIHtcbiAgICAgIGlmIChlbGVtZW50ID09IHNjcm9sbGFibGVFbGVtZW50KSB7IHJldHVybiB0cnVlOyB9XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQhLnBhcmVudEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIFNldHMgdXAgdGhlIGdsb2JhbCBzY3JvbGwgbGlzdGVuZXJzLiAqL1xuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcigpIHtcbiAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdzY3JvbGwnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc2Nyb2xsZWQubmV4dCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDbGVhbnMgdXAgdGhlIGdsb2JhbCBzY3JvbGwgbGlzdGVuZXIuICovXG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2dsb2JhbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==