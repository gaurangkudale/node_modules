/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty, coerceNumberProperty, coerceElement } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, Injectable, Input, NgModule, NgZone, Output, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    MutationObserverFactory.prototype.create = function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) { return new (t || MutationObserverFactory)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MutationObserverFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MutationObserverFactory;
}());
export { MutationObserverFactory };
/** An injectable service that allows watching elements for changes to their content. */
var ContentObserver = /** @class */ (function () {
    function ContentObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /** Keeps track of the existing MutationObservers so they can be reused. */
        this._observedElements = new Map();
    }
    ContentObserver.prototype.ngOnDestroy = function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this._cleanupObserver(element); });
    };
    ContentObserver.prototype.observe = function (elementOrRef) {
        var _this = this;
        var element = coerceElement(elementOrRef);
        return new Observable(function (observer) {
            var stream = _this._observeElement(element);
            var subscription = stream.subscribe(observer);
            return function () {
                subscription.unsubscribe();
                _this._unobserveElement(element);
            };
        });
    };
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    ContentObserver.prototype._observeElement = function (element) {
        if (!this._observedElements.has(element)) {
            var stream_1 = new Subject();
            var observer = this._mutationObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            this._observedElements.get(element).count++;
        }
        return this._observedElements.get(element).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    ContentObserver.prototype._unobserveElement = function (element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    };
    /** Clean up the underlying MutationObserver for the specified element. */
    ContentObserver.prototype._cleanupObserver = function (element) {
        if (this._observedElements.has(element)) {
            var _a = this._observedElements.get(element), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    };
    /** @nocollapse */
    ContentObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    ContentObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentObserver_Factory() { return new ContentObserver(i0.ɵɵinject(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
ContentObserver.ɵfac = function ContentObserver_Factory(t) { return new (t || ContentObserver)(ɵngcc0.ɵɵinject(MutationObserverFactory)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContentObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MutationObserverFactory }]; }, null); })();
    return ContentObserver;
}());
export { ContentObserver };
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** Event emitted for each change in the element's content. */
        this.event = new EventEmitter();
        this._disabled = false;
        this._currentSubscription = null;
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkObserveContent.prototype, "debounce", {
        /** Debounce interval for emitting the changes. */
        get: function () { return this._debounce; },
        set: function (value) {
            this._debounce = coerceNumberProperty(value);
            this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    CdkObserveContent.prototype.ngAfterContentInit = function () {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    };
    CdkObserveContent.prototype.ngOnDestroy = function () {
        this._unsubscribe();
    };
    CdkObserveContent.prototype._subscribe = function () {
        var _this = this;
        this._unsubscribe();
        var stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(function () {
            _this._currentSubscription =
                (_this.debounce ? stream.pipe(debounceTime(_this.debounce)) : stream).subscribe(_this.event);
        });
    };
    CdkObserveContent.prototype._unsubscribe = function () {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    };
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: ContentObserver },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    CdkObserveContent.propDecorators = {
        event: [{ type: Output, args: ['cdkObserveContent',] }],
        disabled: [{ type: Input, args: ['cdkObserveContentDisabled',] }],
        debounce: [{ type: Input }]
    };
CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) { return new (t || CdkObserveContent)(ɵngcc0.ɵɵdirectiveInject(ContentObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CdkObserveContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkObserveContent, selectors: [["", "cdkObserveContent", ""]], inputs: { disabled: ["cdkObserveContentDisabled", "disabled"], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkObserveContent, [{
        type: Directive,
        args: [{
                selector: '[cdkObserveContent]',
                exportAs: 'cdkObserveContent'
            }]
    }], function () { return [{ type: ContentObserver }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { event: [{
            type: Output,
            args: ['cdkObserveContent']
        }], disabled: [{
            type: Input,
            args: ['cdkObserveContentDisabled']
        }], debounce: [{
            type: Input
        }] }); })();
    return CdkObserveContent;
}());
export { CdkObserveContent };
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
ObserversModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ObserversModule });
ObserversModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ObserversModule_Factory(t) { return new (t || ObserversModule)(); }, providers: [MutationObserverFactory] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ObserversModule, { declarations: [CdkObserveContent], exports: [CdkObserveContent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ObserversModule, [{
        type: NgModule,
        args: [{
                exports: [CdkObserveContent],
                declarations: [CdkObserveContent],
                providers: [MutationObserverFactory]
            }]
    }], function () { return []; }, null); })();
    return ObserversModule;
}());
export { ObserversModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZS1jb250ZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL29ic2VydmVycy9vYnNlcnZlLWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFFZCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBRU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUF5QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBQ3lCLElBRHpCO0FBQ0csS0FJRjtBQUNELElBSkUsd0NBQU0sR0FBTixVQUFPLFFBQTBCO0FBQUksUUFDbkMsT0FBTyxPQUFPLGdCQUFnQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNGLElBQUUsQ0FBQyxDQUhNOzJEQURSLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMscEdBQ3RCOzs7OztnREFPTTtBQUFDLGtDQXpDakI7QUFBRSxDQXNDRCxBQUxELElBS0M7QUFDRCxTQUxhLHVCQUF1QjtBQU9wQyx3RkFBd0Y7QUFDeEY7QUFDaUIsSUFRZix5QkFBb0Isd0JBQWlEO0FBQUksUUFBckQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtBQUFDLFFBUHRFLDJFQUEyRTtBQUM3RSxRQUFVLHNCQUFpQixHQUFH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aUIsQ0FBQyxzQkFDakMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUMsa0JBQ3JDOzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixzQkFBQztBQUM5QixDQUQ4QixBQUwvQixJQUsrQjtBQUMvQixTQURhLGVBQWU7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBjb2VyY2VOdW1iZXJQcm9wZXJ0eSxcbiAgY29lcmNlRWxlbWVudCxcbiAgQm9vbGVhbklucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0YWJsZSxcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEZhY3RvcnkgdGhhdCBjcmVhdGVzIGEgbmV3IE11dGF0aW9uT2JzZXJ2ZXIgYW5kIGFsbG93cyB1cyB0byBzdHViIGl0IG91dCBpbiB1bml0IHRlc3RzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5cbi8qKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBhbGxvd3Mgd2F0Y2hpbmcgZWxlbWVudHMgZm9yIGNoYW5nZXMgdG8gdGhlaXIgY29udGVudC4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZXhpc3RpbmcgTXV0YXRpb25PYnNlcnZlcnMgc28gdGhleSBjYW4gYmUgcmV1c2VkLiAqL1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCB7XG4gICAgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsLFxuICAgIHN0cmVhbTogU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPixcbiAgICBjb3VudDogbnVtYmVyXG4gIH0+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbXV0YXRpb25PYnNlcnZlckZhY3Rvcnk6IE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5KSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5fY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlIGNvbnRlbnQgY2hhbmdlcyBvbiBhbiBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBvYnNlcnZlIGZvciBjb250ZW50IGNoYW5nZXMuXG4gICAqL1xuICBvYnNlcnZlKGVsZW1lbnQ6IEVsZW1lbnQpOiBPYnNlcnZhYmxlPE11dGF0aW9uUmVjb3JkW10+O1xuXG4gIC8qKlxuICAgKiBPYnNlcnZlIGNvbnRlbnQgY2hhbmdlcyBvbiBhbiBlbGVtZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBvYnNlcnZlIGZvciBjb250ZW50IGNoYW5nZXMuXG4gICAqL1xuICBvYnNlcnZlKGVsZW1lbnQ6IEVsZW1lbnRSZWY8RWxlbWVudD4pOiBPYnNlcnZhYmxlPE11dGF0aW9uUmVjb3JkW10+O1xuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8TXV0YXRpb25SZWNvcmRbXT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjb2VyY2VFbGVtZW50KGVsZW1lbnRPclJlZik7XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxNdXRhdGlvblJlY29yZFtdPikgPT4ge1xuICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdHJlYW0uc3Vic2NyaWJlKG9ic2VydmVyKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3Vub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBnaXZlbiBlbGVtZW50IGJ5IHVzaW5nIHRoZSBleGlzdGluZyBNdXRhdGlvbk9ic2VydmVyIGlmIGF2YWlsYWJsZSwgb3IgY3JlYXRpbmcgYVxuICAgKiBuZXcgb25lIGlmIG5vdC5cbiAgICovXG4gIHByaXZhdGUgX29ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBTdWJqZWN0PE11dGF0aW9uUmVjb3JkW10+IHtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPigpO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLl9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeS5jcmVhdGUobXV0YXRpb25zID0+IHN0cmVhbS5uZXh0KG11dGF0aW9ucykpO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7b2JzZXJ2ZXIsIHN0cmVhbSwgY291bnQ6IDF9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuc3RyZWFtO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuLW9ic2VydmVzIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBjbGVhbnMgdXAgdGhlIHVuZGVybHlpbmcgTXV0YXRpb25PYnNlcnZlciBpZiBub2JvZHkgZWxzZSBpc1xuICAgKiBvYnNlcnZpbmcgdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfdW5vYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQtLTtcbiAgICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50KSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXBPYnNlcnZlcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdXAgdGhlIHVuZGVybHlpbmcgTXV0YXRpb25PYnNlcnZlciBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qge29ic2VydmVyLCBzdHJlYW19ID0gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICAgIHN0cmVhbS5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCB0cmlnZ2VycyBhIGNhbGxiYWNrIHdoZW5ldmVyIHRoZSBjb250ZW50IG9mXG4gKiBpdHMgYXNzb2NpYXRlZCBlbGVtZW50IGhhcyBjaGFuZ2VkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrT2JzZXJ2ZUNvbnRlbnRdJyxcbiAgZXhwb3J0QXM6ICdjZGtPYnNlcnZlQ29udGVudCcsXG59KVxuZXhwb3J0IGNsYXNzIENka09ic2VydmVDb250ZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZm9yIGVhY2ggY2hhbmdlIGluIHRoZSBlbGVtZW50J3MgY29udGVudC4gKi9cbiAgQE91dHB1dCgnY2RrT2JzZXJ2ZUNvbnRlbnQnKSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TXV0YXRpb25SZWNvcmRbXT4oKTtcblxuICAvKipcbiAgICogV2hldGhlciBvYnNlcnZpbmcgY29udGVudCBpcyBkaXNhYmxlZC4gVGhpcyBvcHRpb24gY2FuIGJlIHVzZWRcbiAgICogdG8gZGlzY29ubmVjdCB0aGUgdW5kZXJseWluZyBNdXRhdGlvbk9ic2VydmVyIHVudGlsIGl0IGlzIG5lZWRlZC5cbiAgICovXG4gIEBJbnB1dCgnY2RrT2JzZXJ2ZUNvbnRlbnREaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2Rpc2FibGVkID8gdGhpcy5fdW5zdWJzY3JpYmUoKSA6IHRoaXMuX3N1YnNjcmliZSgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqIERlYm91bmNlIGludGVydmFsIGZvciBlbWl0dGluZyB0aGUgY2hhbmdlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRlYm91bmNlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9kZWJvdW5jZTsgfVxuICBzZXQgZGVib3VuY2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlYm91bmNlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX3N1YnNjcmliZSgpO1xuICB9XG4gIHByaXZhdGUgX2RlYm91bmNlOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfY3VycmVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fY29udGVudE9ic2VydmVyLm9ic2VydmUodGhpcy5fZWxlbWVudFJlZik7XG5cbiAgICAvLyBUT0RPKG1tYWxlcmJhKTogV2Ugc2hvdWxkbid0IGJlIGVtaXR0aW5nIG9uIHRoaXMgQE91dHB1dCgpIG91dHNpZGUgdGhlIHpvbmUuXG4gICAgLy8gQ29uc2lkZXIgYnJpbmluZyBpdCBiYWNrIGluc2lkZSB0aGUgem9uZSBuZXh0IHRpbWUgd2UncmUgbWFraW5nIGJyZWFraW5nIGNoYW5nZXMuXG4gICAgLy8gQnJpbmdpbmcgaXQgYmFjayBpbnNpZGUgY2FuIGNhdXNlIHRoaW5ncyBsaWtlIGluZmluaXRlIGNoYW5nZSBkZXRlY3Rpb24gbG9vcHMgYW5kIGNoYW5nZWRcbiAgICAvLyBhZnRlciBjaGVja2VkIGVycm9ycyBpZiBwZW9wbGUncyBjb2RlIGlzbid0IGhhbmRsaW5nIGl0IHByb3Blcmx5LlxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAodGhpcy5kZWJvdW5jZSA/IHN0cmVhbS5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSkgOiBzdHJlYW0pLnN1YnNjcmliZSh0aGlzLmV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWJvdW5jZTogQm9vbGVhbklucHV0O1xufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtDZGtPYnNlcnZlQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0Nka09ic2VydmVDb250ZW50XSxcbiAgcHJvdmlkZXJzOiBbTXV0YXRpb25PYnNlcnZlckZhY3RvcnldXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmVyc01vZHVsZSB7fVxuIl19