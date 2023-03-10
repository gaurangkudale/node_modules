import { __values } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
import * as ɵngcc0 from '@angular/core';
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    UniqueSelectionDispatcher.prototype.notify = function (id, name) {
        var e_1, _a;
        try {
            for (var _b = __values(this._listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                listener(id, name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    UniqueSelectionDispatcher.prototype.ngOnDestroy = function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UniqueSelectionDispatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return UniqueSelectionDispatcher;
}());
export { UniqueSelectionDispatcher };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXNlbGVjdGlvbi1kaXNwYXRjaGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NvbGxlY3Rpb25zL3VuaXF1ZS1zZWxlY3Rpb24tZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDcEQ7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSDtBQUMyQixJQUQzQjtBQUNLLFFBQ0ssZUFBVSxHQUF3QyxFQUFFLENBQUM7QUFDL0QsS0E0QkM7QUFDRCxJQTVCRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLDBDQUFNLEdBQU4sVUFBTyxFQUFVLEVBQUUsSUFBWTtBQUNqQztBQUFxQjtBQUFjLFlBQS9CLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUU7QUFDMUMsZ0JBRFMsSUFBSSxRQUFRLFdBQUE7QUFBRSxnQkFDakIsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QixhQUFLO0FBQ0w7QUFFSztBQUM0QztBQUNoQztBQUFrQjtBQUVhO0FBQWM7QUFFdEQ7QUFBVSxJQVJoQixDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBRSwwQ0FBTSxHQUFOLFVBQU8sUUFBMkM7QUFBSSxRQUF0RCxpQkFPQztBQUNILFFBUEksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsUUFBSSxPQUFPO0FBQ0wsWUFBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBNkM7QUFBSSxnQkFDekYsT0FBTyxRQUFRLEtBQUssVUFBVSxDQUFDO0FBQ3ZDLFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUFJLENBQUMsQ0FBQztBQUNOLElBQUUsQ0FBQztBQUVILElBQUUsK0NBQVcsR0FBWDtBQUFjLFFBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDLENBN0JNOzZEQURSLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsdEdBQ3RCOzs7OztnREFLWTtBQUFDLG9DQTdCdkI7QUFBRSxDQXNERCxBQS9CRCxJQStCQztBQUNELFNBL0JhLHlCQUF5QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vLyBVc2VycyBvZiB0aGUgRGlzcGF0Y2hlciBuZXZlciBuZWVkIHRvIHNlZSB0aGlzIHR5cGUsIGJ1dCBUeXBlU2NyaXB0IHJlcXVpcmVzIGl0IHRvIGJlIGV4cG9ydGVkLlxuZXhwb3J0IHR5cGUgVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlckxpc3RlbmVyID0gKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqXG4gKiBDbGFzcyB0byBjb29yZGluYXRlIHVuaXF1ZSBzZWxlY3Rpb24gYmFzZWQgb24gbmFtZS5cbiAqIEludGVuZGVkIHRvIGJlIGNvbnN1bWVkIGFzIGFuIEFuZ3VsYXIgc2VydmljZS5cbiAqIFRoaXMgc2VydmljZSBpcyBuZWVkZWQgYmVjYXVzZSBuYXRpdmUgcmFkaW8gY2hhbmdlIGV2ZW50cyBhcmUgb25seSBmaXJlZCBvbiB0aGUgaXRlbSBjdXJyZW50bHlcbiAqIGJlaW5nIHNlbGVjdGVkLCBhbmQgd2Ugc3RpbGwgbmVlZCB0byB1bmNoZWNrIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gKlxuICogVGhpcyBzZXJ2aWNlIGRvZXMgbm90ICpzdG9yZSogYW55IElEcyBhbmQgbmFtZXMgYmVjYXVzZSB0aGV5IG1heSBjaGFuZ2UgYXQgYW55IHRpbWUsIHNvIGl0IGlzXG4gKiBsZXNzIGVycm9yLXByb25lIGlmIHRoZXkgYXJlIHNpbXBseSBwYXNzZWQgdGhyb3VnaCB3aGVuIHRoZSBldmVudHMgb2NjdXIuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9saXN0ZW5lcnM6IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJMaXN0ZW5lcltdID0gW107XG5cbiAgLyoqXG4gICAqIE5vdGlmeSBvdGhlciBpdGVtcyB0aGF0IHNlbGVjdGlvbiBmb3IgdGhlIGdpdmVuIG5hbWUgaGFzIGJlZW4gc2V0LlxuICAgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIGl0ZW0uXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGl0ZW0uXG4gICAqL1xuICBub3RpZnkoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgbGlzdGVuZXIgb2YgdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihpZCwgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiBmb3IgZnV0dXJlIGNoYW5nZXMgdG8gaXRlbSBzZWxlY3Rpb24uXG4gICAqIEByZXR1cm4gRnVuY3Rpb24gdXNlZCB0byBkZXJlZ2lzdGVyIGxpc3RlbmVyXG4gICAqL1xuICBsaXN0ZW4obGlzdGVuZXI6IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJMaXN0ZW5lcik6ICgpID0+IHZvaWQge1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzLmZpbHRlcigocmVnaXN0ZXJlZDogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlckxpc3RlbmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lciAhPT0gcmVnaXN0ZXJlZDtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgfVxufVxuIl19