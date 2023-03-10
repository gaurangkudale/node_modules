/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/** Global registry for all dynamically-created, injected media queries. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
var mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
var mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
var MediaMatcher = /** @class */ (function () {
    function MediaMatcher(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    MediaMatcher.prototype.matchMedia = function (query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    };
    /** @nocollapse */
    MediaMatcher.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    MediaMatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaMatcher_Factory() { return new MediaMatcher(i0.ɵɵinject(i1.Platform)); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(ɵngcc0.ɵɵinject(ɵngcc1.Platform)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MediaMatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }]; }, null); })();
    return MediaMatcher;
}());
export { MediaMatcher };
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: function () { },
        removeListener: function () { }
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtbWF0Y2hlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9sYXlvdXQvbWVkaWEtbWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0M7QUFDb0M7QUFBcEMsMkVBQTJFOzs7QUFDM0UsSUFBTSxrQ0FBa0MsR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztBQUUxRSx5RUFBeUU7QUFDekUsSUFBSSxtQkFBaUQsQ0FBQztBQUV0RCxnREFBZ0Q7QUFDaEQ7QUFDYyxJQUlaLHNCQUFvQixTQUFtQjtBQUN6QyxRQURzQixjQUFTLEdBQVQsU0FBUyxDQUFVO0FBQUMsUUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEUsWUFBTSwwRkFBMEY7QUFDaEcsWUFBTSxrQ0FBa0M7QUFDeEMsWUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sY0FBYyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFFLGlDQUFVLEdBQVYsVUFBVyxLQUFhO0FBQUksUUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtBQUMvQixZQUFNLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFNBQUs7QUFDTCxRQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxJQUFFLENBQUMsQ0F2Qk07QUFBQzt5QkFEVCxVQUFVLFNBQUMsRUFBQyxVQUFVLHhEQUVsQjtDQUZvQixNQUFNLEVBQUMsVEFFOEIsZ0JBWHRELFFBQVE7QUFBRztBQUFVOzs7Ozt5RUFLWjtBQUFDLHVCQWJsQjtBQUFFLENBMENELEFBekJELElBeUJDO0FBQ0QsU0F6QmEsWUFBWTtBQTBCekI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsb0JBQW9CLENBQUMsS0FBYTtBQUMzQyxJQUFFLElBQUksa0NBQWtDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JELFFBQUksT0FBTztBQUNYLEtBQUc7QUFDSCxJQUNFLElBQUk7QUFDTixRQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUM5QixZQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsWUFBTSxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzNELFlBQU0sUUFBUSxDQUFDLElBQUssQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN0RCxTQUFLO0FBQ0wsUUFDSSxJQUFJLG1CQUFtQixDQUFDLEtBQUssRUFBRTtBQUNuQyxZQUFPLG1CQUFtQixDQUFDLEtBQXVCO0FBQ2xELGlCQUFXLFVBQVUsQ0FBQyxZQUFVLEtBQUsseUJBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEUsWUFBTSxrQ0FBa0MsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsU0FBSztBQUNMLEtBQUc7QUFBQyxJQUFBLE9BQU8sQ0FBQyxFQUFFO0FBQ2QsUUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLEtBQUc7QUFDSCxDQUFDO0FBRUQsOERBQThEO0FBQzlELFNBQVMsY0FBYyxDQUFDLEtBQWE7QUFBSSxJQUN2Qyx3RUFBd0U7QUFDMUUsSUFBRSxvQkFBb0I7QUFDdEIsSUFBRSxPQUFPO0FBQ1QsUUFBSSxPQUFPLEVBQUUsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRTtBQUM1QyxRQUFJLEtBQUssRUFBRSxLQUFLO0FBQ2hCLFFBQUksV0FBVyxFQUFFLGNBQU8sQ0FBQztBQUN6QixRQUFJLGNBQWMsRUFBRSxjQUFPLENBQUM7QUFDNUIsS0FBVSxDQUFDO0FBQ1gsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuLyoqIEdsb2JhbCByZWdpc3RyeSBmb3IgYWxsIGR5bmFtaWNhbGx5LWNyZWF0ZWQsIGluamVjdGVkIG1lZGlhIHF1ZXJpZXMuICovXG5jb25zdCBtZWRpYVF1ZXJpZXNGb3JXZWJraXRDb21wYXRpYmlsaXR5OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4vKiogU3R5bGUgdGFnIHRoYXQgaG9sZHMgYWxsIG9mIHRoZSBkeW5hbWljYWxseS1jcmVhdGVkIG1lZGlhIHF1ZXJpZXMuICovXG5sZXQgbWVkaWFRdWVyeVN0eWxlTm9kZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuLyoqIEEgdXRpbGl0eSBmb3IgY2FsbGluZyBtYXRjaE1lZGlhIHF1ZXJpZXMuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNZWRpYU1hdGNoZXIge1xuICAvKiogVGhlIGludGVybmFsIG1hdGNoTWVkaWEgbWV0aG9kIHRvIHJldHVybiBiYWNrIGEgTWVkaWFRdWVyeUxpc3QgbGlrZSBvYmplY3QuICovXG4gIHByaXZhdGUgX21hdGNoTWVkaWE6IChxdWVyeTogc3RyaW5nKSA9PiBNZWRpYVF1ZXJ5TGlzdDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICB0aGlzLl9tYXRjaE1lZGlhID0gdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyICYmIHdpbmRvdy5tYXRjaE1lZGlhID9cbiAgICAgIC8vIG1hdGNoTWVkaWEgaXMgYm91bmQgdG8gdGhlIHdpbmRvdyBzY29wZSBpbnRlbnRpb25hbGx5IGFzIGl0IGlzIGFuIGlsbGVnYWwgaW52b2NhdGlvbiB0b1xuICAgICAgLy8gY2FsbCBpdCBmcm9tIGEgZGlmZmVyZW50IHNjb3BlLlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEuYmluZCh3aW5kb3cpIDpcbiAgICAgIG5vb3BNYXRjaE1lZGlhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlcyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSBNZWRpYVF1ZXJ5TGlzdCBmcm9tIHdoaWNoIHJlc3VsdHNcbiAgICogY2FuIGJlIHJldHJpZXZlZC5cbiAgICogQ29uZmlybXMgdGhlIGxheW91dCBlbmdpbmUgd2lsbCB0cmlnZ2VyIGZvciB0aGUgc2VsZWN0b3IgcXVlcnkgcHJvdmlkZWQgYW5kIHJldHVybnMgdGhlXG4gICAqIE1lZGlhUXVlcnlMaXN0IGZvciB0aGUgcXVlcnkgcHJvdmlkZWQuXG4gICAqL1xuICBtYXRjaE1lZGlhKHF1ZXJ5OiBzdHJpbmcpOiBNZWRpYVF1ZXJ5TGlzdCB7XG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtLldFQktJVCkge1xuICAgICAgY3JlYXRlRW1wdHlTdHlsZVJ1bGUocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hNZWRpYShxdWVyeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBGb3IgV2Via2l0IGVuZ2luZXMgdGhhdCBvbmx5IHRyaWdnZXIgdGhlIE1lZGlhUXVlcnlMaXN0TGlzdGVuZXIgd2hlblxuICogdGhlcmUgaXMgYXQgbGVhc3Qgb25lIENTUyBzZWxlY3RvciBmb3IgdGhlIHJlc3BlY3RpdmUgbWVkaWEgcXVlcnkuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5U3R5bGVSdWxlKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgaWYgKG1lZGlhUXVlcmllc0ZvcldlYmtpdENvbXBhdGliaWxpdHkuaGFzKHF1ZXJ5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKCFtZWRpYVF1ZXJ5U3R5bGVOb2RlKSB7XG4gICAgICBtZWRpYVF1ZXJ5U3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIG1lZGlhUXVlcnlTdHlsZU5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICBkb2N1bWVudC5oZWFkIS5hcHBlbmRDaGlsZChtZWRpYVF1ZXJ5U3R5bGVOb2RlKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaWFRdWVyeVN0eWxlTm9kZS5zaGVldCkge1xuICAgICAgKG1lZGlhUXVlcnlTdHlsZU5vZGUuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldClcbiAgICAgICAgICAuaW5zZXJ0UnVsZShgQG1lZGlhICR7cXVlcnl9IHsuZngtcXVlcnktdGVzdHsgfX1gLCAwKTtcbiAgICAgIG1lZGlhUXVlcmllc0ZvcldlYmtpdENvbXBhdGliaWxpdHkuYWRkKHF1ZXJ5KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5cbi8qKiBOby1vcCBtYXRjaE1lZGlhIHJlcGxhY2VtZW50IGZvciBub24tYnJvd3NlciBwbGF0Zm9ybXMuICovXG5mdW5jdGlvbiBub29wTWF0Y2hNZWRpYShxdWVyeTogc3RyaW5nKTogTWVkaWFRdWVyeUxpc3Qge1xuICAvLyBVc2UgYGFzIGFueWAgaGVyZSB0byBhdm9pZCBhZGRpbmcgYWRkaXRpb25hbCBuZWNlc3NhcnkgcHJvcGVydGllcyBmb3JcbiAgLy8gdGhlIG5vb3AgbWF0Y2hlci5cbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBxdWVyeSA9PT0gJ2FsbCcgfHwgcXVlcnkgPT09ICcnLFxuICAgIG1lZGlhOiBxdWVyeSxcbiAgICBhZGRMaXN0ZW5lcjogKCkgPT4ge30sXG4gICAgcmVtb3ZlTGlzdGVuZXI6ICgpID0+IHt9XG4gIH0gYXMgYW55O1xufVxuIl19