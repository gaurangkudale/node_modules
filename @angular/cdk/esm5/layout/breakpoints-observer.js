/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone } from '@angular/core';
import { MediaMatcher } from './media-matcher';
import { combineLatest, concat, Observable, Subject } from 'rxjs';
import { debounceTime, map, skip, startWith, take, takeUntil } from 'rxjs/operators';
import { coerceArray } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "angular_material/src/cdk/layout/media-matcher";
/** Utility for checking the matching state of @media queries. */
import * as ɵngcc0 from '@angular/core';
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new Subject();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    BreakpointObserver.prototype.ngOnDestroy = function () {
        this._destroySubject.next();
        this._destroySubject.complete();
    };
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    BreakpointObserver.prototype.isMatched = function (value) {
        var _this = this;
        var queries = splitQueries(coerceArray(value));
        return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
    };
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    BreakpointObserver.prototype.observe = function (value) {
        var _this = this;
        var queries = splitQueries(coerceArray(value));
        var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
        var stateObservable = combineLatest(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map(function (breakpointStates) {
            var response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(function (state) {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            });
            return response;
        }));
    };
    /** Registers a specific query to be listened for. */
    BreakpointObserver.prototype._registerQuery = function (query) {
        var _this = this;
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        var mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        var queryObservable = new Observable(function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            var handler = function (e) { return _this._zone.run(function () { return observer.next(e); }); };
            mql.addListener(handler);
            return function () {
                mql.removeListener(handler);
            };
        }).pipe(startWith(mql), map(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }), takeUntil(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        var output = { observable: queryObservable, mql: mql };
        this._queries.set(query, output);
        return output;
    };
    /** @nocollapse */
    BreakpointObserver.ctorParameters = function () { return [
        { type: MediaMatcher },
        { type: NgZone }
    ]; };
    BreakpointObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(i0.ɵɵinject(i1.MediaMatcher), i0.ɵɵinject(i0.NgZone)); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(ɵngcc0.ɵɵinject(MediaMatcher), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BreakpointObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: ɵngcc0.NgZone }]; }, null); })();
    return BreakpointObserver;
}());
export { BreakpointObserver };
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(function (query) { return query.split(','); })
        .reduce(function (a1, a2) { return a1.concat(a2); })
        .map(function (query) { return query.trim(); });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludHMtb2JzZXJ2ZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvbGF5b3V0L2JyZWFrcG9pbnRzLW9ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQ7QUFFbUM7QUEwQm5DLGlFQUFpRTs7QUFDakU7QUFDb0IsSUFNbEIsNEJBQW9CLGFBQTJCLEVBQVUsS0FBYTtBQUFJLFFBQXRELGtCQUFhLEdBQWIsYUFBYSxDQUFjO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFMdkUsZ0VBQWdFO0FBQ2xFLFFBQVUsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0FBQzlDLFFBQUUsaUVBQWlFO0FBQ25FLFFBQVUsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ2hELElBQzJFLENBQUM7QUFDNUUsSUFDRSxxRkFBcUY7QUFDdkYsSUFBRSx3Q0FBVyxHQUFYO0FBQWMsUUFDWixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hDLFFBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNwQyxJQUFFLENBQUM7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aEIsQ0FBZ0IsQ0FBQztBQUN6RCxTQUFpQixNQUFNLENBQUMsVUFBQyxFQUFZLEVBQUUsRUFBWSxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7QUFDdEUsU0FBaUIsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVkaWFNYXRjaGVyfSBmcm9tICcuL21lZGlhLW1hdGNoZXInO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBjb25jYXQsIE9ic2VydmFibGUsIFN1YmplY3QsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBtYXAsIHNraXAsIHN0YXJ0V2l0aCwgdGFrZSwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2NvZXJjZUFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5cbi8qKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIGxheW91dCBicmVha3BvaW50LiAqL1xuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50U3RhdGUge1xuICAvKiogV2hldGhlciB0aGUgYnJlYWtwb2ludCBpcyBjdXJyZW50bHkgbWF0Y2hpbmcuICovXG4gIG1hdGNoZXM6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGtleSBib29sZWFuIHBhaXIgZm9yIGVhY2ggcXVlcnkgcHJvdmlkZWQgdG8gdGhlIG9ic2VydmUgbWV0aG9kLFxuICAgKiB3aXRoIGl0cyBjdXJyZW50IG1hdGNoZWQgc3RhdGUuXG4gICAqL1xuICBicmVha3BvaW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG4gIH07XG59XG5cbi8qKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIGxheW91dCBicmVha3BvaW50LiAqL1xuaW50ZXJmYWNlIEludGVybmFsQnJlYWtwb2ludFN0YXRlIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGJyZWFrcG9pbnQgaXMgY3VycmVudGx5IG1hdGNoaW5nLiAqL1xuICBtYXRjaGVzOiBib29sZWFuO1xuICAvKiogVGhlIG1lZGlhIHF1ZXJ5IGJlaW5nIHRvIGJlIG1hdGNoZWQgKi9cbiAgcXVlcnk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxJbnRlcm5hbEJyZWFrcG9pbnRTdGF0ZT47XG4gIG1xbDogTWVkaWFRdWVyeUxpc3Q7XG59XG5cbi8qKiBVdGlsaXR5IGZvciBjaGVja2luZyB0aGUgbWF0Y2hpbmcgc3RhdGUgb2YgQG1lZGlhIHF1ZXJpZXMuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogIEEgbWFwIG9mIGFsbCBtZWRpYSBxdWVyaWVzIGN1cnJlbnRseSBiZWluZyBsaXN0ZW5lZCBmb3IuICovXG4gIHByaXZhdGUgX3F1ZXJpZXMgPSBuZXcgTWFwPHN0cmluZywgUXVlcnk+KCk7XG4gIC8qKiBBIHN1YmplY3QgZm9yIGFsbCBvdGhlciBvYnNlcnZhYmxlcyB0byB0YWtlVW50aWwgYmFzZWQgb24uICovXG4gIHByaXZhdGUgX2Rlc3Ryb3lTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIC8qKiBDb21wbGV0ZXMgdGhlIGFjdGl2ZSBzdWJqZWN0LCBzaWduYWxsaW5nIHRvIGFsbCBvdGhlciBvYnNlcnZhYmxlcyB0byBjb21wbGV0ZS4gKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveVN1YmplY3QubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3lTdWJqZWN0LmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvbmUgb3IgbW9yZSBtZWRpYSBxdWVyaWVzIG1hdGNoIHRoZSBjdXJyZW50IHZpZXdwb3J0IHNpemUuXG4gICAqIEBwYXJhbSB2YWx1ZSBPbmUgb3IgbW9yZSBtZWRpYSBxdWVyaWVzIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyBXaGV0aGVyIGFueSBvZiB0aGUgbWVkaWEgcXVlcmllcyBtYXRjaC5cbiAgICovXG4gIGlzTWF0Y2hlZCh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBxdWVyaWVzID0gc3BsaXRRdWVyaWVzKGNvZXJjZUFycmF5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHF1ZXJpZXMuc29tZShtZWRpYVF1ZXJ5ID0+IHRoaXMuX3JlZ2lzdGVyUXVlcnkobWVkaWFRdWVyeSkubXFsLm1hdGNoZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gb2JzZXJ2YWJsZSBvZiByZXN1bHRzIGZvciB0aGUgZ2l2ZW4gcXVlcmllcyB0aGF0IHdpbGwgZW1pdCBuZXcgcmVzdWx0cyBmb3IgYW55IGNoYW5nZXNcbiAgICogaW4gbWF0Y2hpbmcgb2YgdGhlIGdpdmVuIHF1ZXJpZXMuXG4gICAqIEBwYXJhbSB2YWx1ZSBPbmUgb3IgbW9yZSBtZWRpYSBxdWVyaWVzIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyBBIHN0cmVhbSBvZiBtYXRjaGVzIGZvciB0aGUgZ2l2ZW4gcXVlcmllcy5cbiAgICovXG4gIG9ic2VydmUodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxCcmVha3BvaW50U3RhdGU+IHtcbiAgICBjb25zdCBxdWVyaWVzID0gc3BsaXRRdWVyaWVzKGNvZXJjZUFycmF5KHZhbHVlKSk7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSBxdWVyaWVzLm1hcChxdWVyeSA9PiB0aGlzLl9yZWdpc3RlclF1ZXJ5KHF1ZXJ5KS5vYnNlcnZhYmxlKTtcblxuICAgIGxldCBzdGF0ZU9ic2VydmFibGUgPSBjb21iaW5lTGF0ZXN0KG9ic2VydmFibGVzKTtcbiAgICAvLyBFbWl0IHRoZSBmaXJzdCBzdGF0ZSBpbW1lZGlhdGVseSwgYW5kIHRoZW4gZGVib3VuY2UgdGhlIHN1YnNlcXVlbnQgZW1pc3Npb25zLlxuICAgIHN0YXRlT2JzZXJ2YWJsZSA9IGNvbmNhdChcbiAgICAgIHN0YXRlT2JzZXJ2YWJsZS5waXBlKHRha2UoMSkpLFxuICAgICAgc3RhdGVPYnNlcnZhYmxlLnBpcGUoc2tpcCgxKSwgZGVib3VuY2VUaW1lKDApKSk7XG4gICAgcmV0dXJuIHN0YXRlT2JzZXJ2YWJsZS5waXBlKG1hcCgoYnJlYWtwb2ludFN0YXRlczogSW50ZXJuYWxCcmVha3BvaW50U3RhdGVbXSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2U6IEJyZWFrcG9pbnRTdGF0ZSA9IHtcbiAgICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7fSxcbiAgICAgIH07XG4gICAgICBicmVha3BvaW50U3RhdGVzLmZvckVhY2goKHN0YXRlOiBJbnRlcm5hbEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICByZXNwb25zZS5tYXRjaGVzID0gcmVzcG9uc2UubWF0Y2hlcyB8fCBzdGF0ZS5tYXRjaGVzO1xuICAgICAgICByZXNwb25zZS5icmVha3BvaW50c1tzdGF0ZS5xdWVyeV0gPSBzdGF0ZS5tYXRjaGVzO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqIFJlZ2lzdGVycyBhIHNwZWNpZmljIHF1ZXJ5IHRvIGJlIGxpc3RlbmVkIGZvci4gKi9cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogUXVlcnkge1xuICAgIC8vIE9ubHkgc2V0IHVwIGEgbmV3IE1lZGlhUXVlcnlMaXN0IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGJlaW5nIGxpc3RlbmVkIGZvci5cbiAgICBpZiAodGhpcy5fcXVlcmllcy5oYXMocXVlcnkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcmllcy5nZXQocXVlcnkpITtcbiAgICB9XG5cbiAgICBjb25zdCBtcWw6IE1lZGlhUXVlcnlMaXN0ID0gdGhpcy5fbWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgLy8gQ3JlYXRlIGNhbGxiYWNrIGZvciBtYXRjaCBjaGFuZ2VzIGFuZCBhZGQgaXQgaXMgYXMgYSBsaXN0ZW5lci5cbiAgICBjb25zdCBxdWVyeU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxNZWRpYVF1ZXJ5TGlzdD4oKG9ic2VydmVyOiBPYnNlcnZlcjxNZWRpYVF1ZXJ5TGlzdD4pID0+IHtcbiAgICAgIC8vIExpc3RlbmVyIGNhbGxiYWNrIG1ldGhvZHMgYXJlIHdyYXBwZWQgdG8gYmUgcGxhY2VkIGJhY2sgaW4gbmdab25lLiBDYWxsYmFja3MgbXVzdCBiZSBwbGFjZWRcbiAgICAgIC8vIGJhY2sgaW50byB0aGUgem9uZSBiZWNhdXNlIG1hdGNoTWVkaWEgaXMgb25seSBpbmNsdWRlZCBpbiBab25lLmpzIGJ5IGxvYWRpbmcgdGhlXG4gICAgICAvLyB3ZWJhcGlzLW1lZGlhLXF1ZXJ5LmpzIGZpbGUgYWxvbmdzaWRlIHRoZSB6b25lLmpzIGZpbGUuICBBZGRpdGlvbmFsbHksIHNvbWUgYnJvd3NlcnMgZG8gbm90XG4gICAgICAvLyBoYXZlIE1lZGlhUXVlcnlMaXN0IGluaGVyaXQgZnJvbSBFdmVudFRhcmdldCwgd2hpY2ggY2F1c2VzIGluY29uc2lzdGVuY2llcyBpbiBob3cgWm9uZS5qc1xuICAgICAgLy8gcGF0Y2hlcyBpdC5cbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZTogYW55KSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpO1xuICAgICAgfTtcbiAgICB9KS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG1xbCksXG4gICAgICBtYXAoKG5leHRNcWw6IE1lZGlhUXVlcnlMaXN0KSA9PiAoe3F1ZXJ5LCBtYXRjaGVzOiBuZXh0TXFsLm1hdGNoZXN9KSksXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveVN1YmplY3QpXG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgTWVkaWFRdWVyeUxpc3QgdG8gdGhlIHNldCBvZiBxdWVyaWVzLlxuICAgIGNvbnN0IG91dHB1dCA9IHtvYnNlcnZhYmxlOiBxdWVyeU9ic2VydmFibGUsIG1xbH07XG4gICAgdGhpcy5fcXVlcmllcy5zZXQocXVlcnksIG91dHB1dCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxufVxuXG4vKipcbiAqIFNwbGl0IGVhY2ggcXVlcnkgc3RyaW5nIGludG8gc2VwYXJhdGUgcXVlcnkgc3RyaW5ncyBpZiB0d28gcXVlcmllcyBhcmUgcHJvdmlkZWQgYXMgY29tbWFcbiAqIHNlcGFyYXRlZC5cbiAqL1xuZnVuY3Rpb24gc3BsaXRRdWVyaWVzKHF1ZXJpZXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5OiBzdHJpbmcpID0+IHF1ZXJ5LnNwbGl0KCcsJykpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYTE6IHN0cmluZ1tdLCBhMjogc3RyaW5nW10pID0+IGExLmNvbmNhdChhMikpXG4gICAgICAgICAgICAgICAgLm1hcChxdWVyeSA9PiBxdWVyeS50cmltKCkpO1xufVxuIl19