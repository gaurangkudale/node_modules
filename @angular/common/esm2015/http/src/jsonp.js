/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpEventType, HttpResponse } from './response';
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
import * as ɵngcc0 from '@angular/core';
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
export const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
export const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
export const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
export class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
export class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new Observable((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK',
                    url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(ɵngcc0.ɵɵinject(JsonpCallbackContext), ɵngcc0.ɵɵinject(DOCUMENT)); };
JsonpClientBackend.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: JsonpClientBackend, factory: JsonpClientBackend.ɵfac });
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JsonpClientBackend, [{
        type: Injectable
    }], function () { return [{ type: JsonpCallbackContext }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
export class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(ɵngcc0.ɵɵinject(JsonpClientBackend)); };
JsonpInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: JsonpInterceptor, factory: JsonpInterceptor.ɵfac });
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(JsonpInterceptor, [{
        type: Injectable
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3NyYy9qc29ucC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFckYsa0ZBQWtGO0FBQ2xGLGtGQUFrRjtBQUNsRixrRkFBa0Y7QUFDbEYsZ0RBQWdEOztBQUNoRCxJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7QUFFOUIsb0ZBQW9GO0FBQ3BGLHFCQUFxQjtBQUNyQixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxnREFBZ0QsQ0FBQztBQUV0RixtRkFBbUY7QUFDbkYsK0JBQStCO0FBQy9CLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLCtDQUErQyxDQUFDO0FBQ3RGLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLDZDQUE2QyxDQUFDO0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLE9BQWdCLG9CQUFvQjtBQUMxQyxDQUNDO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtBQUFHLElBQ2hDLFlBQW9CLFdBQWlDLEVBQTRCLFFBQWE7QUFBSSxRQUE5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7QUFBQyxRQUEyQixhQUFRLEdBQVIsUUFBUSxDQUFLO0FBQUMsSUFBRSxDQUFDO0FBQ3BHLElBQ0U7QUFD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O0FBQTRDLFlBQ1osb0JBQW9CO0FBQUksNENBQUQsTUFBTSxTQUFDLFFBQVE7QUFBUTs7Ozs7O2tDQUFFO0FBbUtuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0FBQzdCLElBQUUsWUFBb0IsS0FBeUI7QUFBSSxRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtBQUFDLElBQUUsQ0FBQztBQUNuRCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFFLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO0FBQUksUUFDcEQsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtBQUNoQyxZQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBeUIsQ0FBQyxDQUFDO0FBQzFELFNBQUs7QUFDTCxRQUFJLHlDQUF5QztBQUM3QyxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSDs0Q0FsQkMsVUFBVTtnSEFDVDtBQUFDO0FBQ1UsWUFBZ0Isa0JBQWtCO0FBQUc7Ozs0RUFDbEQ7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7SHR0cEJhY2tlbmQsIEh0dHBIYW5kbGVyfSBmcm9tICcuL2JhY2tlbmQnO1xuaW1wb3J0IHtIdHRwUmVxdWVzdH0gZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlfSBmcm9tICcuL3Jlc3BvbnNlJztcblxuLy8gRXZlcnkgcmVxdWVzdCBtYWRlIHRocm91Z2ggSlNPTlAgbmVlZHMgYSBjYWxsYmFjayBuYW1lIHRoYXQncyB1bmlxdWUgYWNyb3NzIHRoZVxuLy8gd2hvbGUgcGFnZS4gRWFjaCByZXF1ZXN0IGlzIGFzc2lnbmVkIGFuIGlkIGFuZCB0aGUgY2FsbGJhY2sgbmFtZSBpcyBjb25zdHJ1Y3RlZFxuLy8gZnJvbSB0aGF0LiBUaGUgbmV4dCBpZCB0byBiZSBhc3NpZ25lZCBpcyB0cmFja2VkIGluIGEgZ2xvYmFsIHZhcmlhYmxlIGhlcmUgdGhhdFxuLy8gaXMgc2hhcmVkIGFtb25nIGFsbCBhcHBsaWNhdGlvbnMgb24gdGhlIHBhZ2UuXG5sZXQgbmV4dFJlcXVlc3RJZDogbnVtYmVyID0gMDtcblxuLy8gRXJyb3IgdGV4dCBnaXZlbiB3aGVuIGEgSlNPTlAgc2NyaXB0IGlzIGluamVjdGVkLCBidXQgZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4vLyBwYXNzZWQgaW4gaXRzIFVSTC5cbmV4cG9ydCBjb25zdCBKU09OUF9FUlJfTk9fQ0FMTEJBQ0sgPSAnSlNPTlAgaW5qZWN0ZWQgc2NyaXB0IGRpZCBub3QgaW52b2tlIGNhbGxiYWNrLic7XG5cbi8vIEVycm9yIHRleHQgZ2l2ZW4gd2hlbiBhIHJlcXVlc3QgaXMgcGFzc2VkIHRvIHRoZSBKc29ucENsaWVudEJhY2tlbmQgdGhhdCBkb2Vzbid0XG4vLyBoYXZlIGEgcmVxdWVzdCBtZXRob2QgSlNPTlAuXG5leHBvcnQgY29uc3QgSlNPTlBfRVJSX1dST05HX01FVEhPRCA9ICdKU09OUCByZXF1ZXN0cyBtdXN0IHVzZSBKU09OUCByZXF1ZXN0IG1ldGhvZC4nO1xuZXhwb3J0IGNvbnN0IEpTT05QX0VSUl9XUk9OR19SRVNQT05TRV9UWVBFID0gJ0pTT05QIHJlcXVlc3RzIG11c3QgdXNlIEpzb24gcmVzcG9uc2UgdHlwZS4nO1xuXG4vKipcbiAqIERJIHRva2VuL2Fic3RyYWN0IHR5cGUgcmVwcmVzZW50aW5nIGEgbWFwIG9mIEpTT05QIGNhbGxiYWNrcy5cbiAqXG4gKiBJbiB0aGUgYnJvd3NlciwgdGhpcyBzaG91bGQgYWx3YXlzIGJlIHRoZSBgd2luZG93YCBvYmplY3QuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpzb25wQ2FsbGJhY2tDb250ZXh0IHtcbiAgW2tleTogc3RyaW5nXTogKGRhdGE6IGFueSkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBQcm9jZXNzZXMgYW4gYEh0dHBSZXF1ZXN0YCB3aXRoIHRoZSBKU09OUCBtZXRob2QsXG4gKiBieSBwZXJmb3JtaW5nIEpTT05QIHN0eWxlIHJlcXVlc3RzLlxuICogQHNlZSBgSHR0cEhhbmRsZXJgXG4gKiBAc2VlIGBIdHRwWGhyQmFja2VuZGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29ucENsaWVudEJhY2tlbmQgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbGJhY2tNYXA6IEpzb25wQ2FsbGJhY2tDb250ZXh0LCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgbmV4dCBjYWxsYmFjayBtZXRob2QsIGJ5IGluY3JlbWVudGluZyB0aGUgZ2xvYmFsIGBuZXh0UmVxdWVzdElkYC5cbiAgICovXG4gIHByaXZhdGUgbmV4dENhbGxiYWNrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBuZ19qc29ucF9jYWxsYmFja18ke25leHRSZXF1ZXN0SWQrK31gO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3NlcyBhIEpTT05QIHJlcXVlc3QgYW5kIHJldHVybnMgYW4gZXZlbnQgc3RyZWFtIG9mIHRoZSByZXN1bHRzLlxuICAgKiBAcGFyYW0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdC5cbiAgICogQHJldHVybnMgQW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgZXZlbnRzLlxuICAgKlxuICAgKi9cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8bmV2ZXI+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIEZpcnN0bHksIGNoZWNrIGJvdGggdGhlIG1ldGhvZCBhbmQgcmVzcG9uc2UgdHlwZS4gSWYgZWl0aGVyIGRvZXNuJ3QgbWF0Y2hcbiAgICAvLyB0aGVuIHRoZSByZXF1ZXN0IHdhcyBpbXByb3Blcmx5IHJvdXRlZCBoZXJlIGFuZCBjYW5ub3QgYmUgaGFuZGxlZC5cbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ0pTT05QJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT05QX0VSUl9XUk9OR19NRVRIT0QpO1xuICAgIH0gZWxzZSBpZiAocmVxLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTlBfRVJSX1dST05HX1JFU1BPTlNFX1RZUEUpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZWxzZSBoYXBwZW5zIGluc2lkZSB0aGUgT2JzZXJ2YWJsZSBib3VuZGFyeS5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+KChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAvLyBUaGUgZmlyc3Qgc3RlcCB0byBtYWtlIGEgcmVxdWVzdCBpcyB0byBnZW5lcmF0ZSB0aGUgY2FsbGJhY2sgbmFtZSwgYW5kIHJlcGxhY2UgdGhlXG4gICAgICAvLyBjYWxsYmFjayBwbGFjZWhvbGRlciBpbiB0aGUgVVJMIHdpdGggdGhlIG5hbWUuIENhcmUgaGFzIHRvIGJlIHRha2VuIGhlcmUgdG8gZW5zdXJlXG4gICAgICAvLyBhIHRyYWlsaW5nICYsIGlmIG1hdGNoZWQsIGdldHMgaW5zZXJ0ZWQgYmFjayBpbnRvIHRoZSBVUkwgaW4gdGhlIGNvcnJlY3QgcGxhY2UuXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubmV4dENhbGxiYWNrKCk7XG4gICAgICBjb25zdCB1cmwgPSByZXEudXJsV2l0aFBhcmFtcy5yZXBsYWNlKC89SlNPTlBfQ0FMTEJBQ0soJnwkKS8sIGA9JHtjYWxsYmFja30kMWApO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIDxzY3JpcHQ+IHRhZyBhbmQgcG9pbnQgaXQgYXQgdGhlIFVSTC5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgbm9kZS5zcmMgPSB1cmw7XG5cbiAgICAgIC8vIEEgSlNPTlAgcmVxdWVzdCByZXF1aXJlcyB3YWl0aW5nIGZvciBtdWx0aXBsZSBjYWxsYmFja3MuIFRoZXNlIHZhcmlhYmxlc1xuICAgICAgLy8gYXJlIGNsb3NlZCBvdmVyIGFuZCB0cmFjayBzdGF0ZSBhY3Jvc3MgdGhvc2UgY2FsbGJhY2tzLlxuXG4gICAgICAvLyBUaGUgcmVzcG9uc2Ugb2JqZWN0LCBpZiBvbmUgaGFzIGJlZW4gcmVjZWl2ZWQsIG9yIG51bGwgb3RoZXJ3aXNlLlxuICAgICAgbGV0IGJvZHk6IGFueXxudWxsID0gbnVsbDtcblxuICAgICAgLy8gV2hldGhlciB0aGUgcmVzcG9uc2UgY2FsbGJhY2sgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAgbGV0IGZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaGFzIGJlZW4gY2FuY2VsbGVkIChhbmQgdGh1cyBhbnkgb3RoZXIgY2FsbGJhY2tzKVxuICAgICAgLy8gc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAgICBsZXQgY2FuY2VsbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldCB0aGUgcmVzcG9uc2UgY2FsbGJhY2sgaW4gdGhpcy5jYWxsYmFja01hcCAod2hpY2ggd2lsbCBiZSB0aGUgd2luZG93XG4gICAgICAvLyBvYmplY3QgaW4gdGhlIGJyb3dzZXIuIFRoZSBzY3JpcHQgYmVpbmcgbG9hZGVkIHZpYSB0aGUgPHNjcmlwdD4gdGFnIHdpbGxcbiAgICAgIC8vIGV2ZW50dWFsbHkgY2FsbCB0aGlzIGNhbGxiYWNrLlxuICAgICAgdGhpcy5jYWxsYmFja01hcFtjYWxsYmFja10gPSAoZGF0YT86IGFueSkgPT4ge1xuICAgICAgICAvLyBEYXRhIGhhcyBiZWVuIHJlY2VpdmVkIGZyb20gdGhlIEpTT05QIHNjcmlwdC4gRmlyc3RseSwgZGVsZXRlIHRoaXMgY2FsbGJhY2suXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrTWFwW2NhbGxiYWNrXTtcblxuICAgICAgICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlcXVlc3Qgd2Fzbid0IGNhbmNlbGxlZCBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgc3RhdGUgdG8gaW5kaWNhdGUgZGF0YSB3YXMgcmVjZWl2ZWQuXG4gICAgICAgIGJvZHkgPSBkYXRhO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICAvLyBjbGVhbnVwKCkgaXMgYSB1dGlsaXR5IGNsb3N1cmUgdGhhdCByZW1vdmVzIHRoZSA8c2NyaXB0PiBmcm9tIHRoZSBwYWdlIGFuZFxuICAgICAgLy8gdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGZyb20gdGhlIHdpbmRvdy4gVGhpcyBsb2dpYyBpcyB1c2VkIGluIGJvdGggdGhlXG4gICAgICAvLyBzdWNjZXNzLCBlcnJvciwgYW5kIGNhbmNlbGxhdGlvbiBwYXRocywgc28gaXQncyBleHRyYWN0ZWQgb3V0IGZvciBjb252ZW5pZW5jZS5cbiAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgPHNjcmlwdD4gdGFnIGlmIGl0J3Mgc3RpbGwgb24gdGhlIHBhZ2UuXG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGZyb20gdGhlIGNhbGxiYWNrTWFwICh3aW5kb3cgb2JqZWN0IGluIHRoZVxuICAgICAgICAvLyBicm93c2VyKS5cbiAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xuICAgICAgfTtcblxuICAgICAgLy8gb25Mb2FkKCkgaXMgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgd2hpY2ggcnVucyBhZnRlciB0aGUgcmVzcG9uc2UgY2FsbGJhY2tcbiAgICAgIC8vIGlmIHRoZSBKU09OUCBzY3JpcHQgbG9hZHMgc3VjY2Vzc2Z1bGx5LiBUaGUgZXZlbnQgaXRzZWxmIGlzIHVuaW1wb3J0YW50LlxuICAgICAgLy8gSWYgc29tZXRoaW5nIHdlbnQgd3JvbmcsIG9uTG9hZCgpIG1heSBydW4gd2l0aG91dCB0aGUgcmVzcG9uc2UgY2FsbGJhY2tcbiAgICAgIC8vIGhhdmluZyBiZWVuIGludm9rZWQuXG4gICAgICBjb25zdCBvbkxvYWQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHJlcXVlc3QgaGFzIGJlZW4gY2FuY2VsbGVkLlxuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xlYW51cCB0aGUgcGFnZS5cbiAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGhhcyBydW4uXG4gICAgICAgIGlmICghZmluaXNoZWQpIHtcbiAgICAgICAgICAvLyBJdCBoYXNuJ3QsIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHJlcXVlc3QuIFJldHVybiBhbiBlcnJvciB2aWFcbiAgICAgICAgICAvLyB0aGUgT2JzZXJ2YWJsZSBlcnJvciBwYXRoLiBBbGwgSlNPTlAgZXJyb3JzIGhhdmUgc3RhdHVzIDAuXG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdKU09OUCBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKEpTT05QX0VSUl9OT19DQUxMQkFDSyksXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1Y2Nlc3MuIGJvZHkgZWl0aGVyIGNvbnRhaW5zIHRoZSByZXNwb25zZSBib2R5IG9yIG51bGwgaWYgbm9uZSB3YXNcbiAgICAgICAgLy8gcmV0dXJuZWQuXG4gICAgICAgIG9ic2VydmVyLm5leHQobmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnT0snLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIENvbXBsZXRlIHRoZSBzdHJlYW0sIHRoZSByZXNwb25zZSBpcyBvdmVyLlxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfTtcblxuICAgICAgLy8gb25FcnJvcigpIGlzIHRoZSBlcnJvciBjYWxsYmFjaywgd2hpY2ggcnVucyBpZiB0aGUgc2NyaXB0IHJldHVybmVkIGdlbmVyYXRlc1xuICAgICAgLy8gYSBKYXZhc2NyaXB0IGVycm9yLiBJdCBlbWl0cyB0aGUgZXJyb3IgdmlhIHRoZSBPYnNlcnZhYmxlIGVycm9yIGNoYW5uZWwgYXNcbiAgICAgIC8vIGEgSHR0cEVycm9yUmVzcG9uc2UuXG4gICAgICBjb25zdCBvbkVycm9yOiBhbnkgPSAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBhbHJlYWR5IGNhbmNlbGxlZCwgbm8gbmVlZCB0byBlbWl0IGFueXRoaW5nLlxuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFudXAoKTtcblxuICAgICAgICAvLyBXcmFwIHRoZSBlcnJvciBpbiBhIEh0dHBFcnJvclJlc3BvbnNlLlxuICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnSlNPTlAgRXJyb3InLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gU3Vic2NyaWJlIHRvIGJvdGggdGhlIHN1Y2Nlc3MgKGxvYWQpIGFuZCBlcnJvciBldmVudHMgb24gdGhlIDxzY3JpcHQ+IHRhZyxcbiAgICAgIC8vIGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2UuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBoYXMgbm93IGJlZW4gc3VjY2Vzc2Z1bGx5IHNlbnQuXG4gICAgICBvYnNlcnZlci5uZXh0KHt0eXBlOiBIdHRwRXZlbnRUeXBlLlNlbnR9KTtcblxuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhbmRsZXIuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAvLyBUcmFjayB0aGUgY2FuY2VsbGF0aW9uIHNvIGV2ZW50IGxpc3RlbmVycyB3b24ndCBkbyBhbnl0aGluZyBldmVuIGlmIGFscmVhZHkgc2NoZWR1bGVkLlxuICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzIHNvIHRoZXkgd29uJ3QgcnVuIGlmIHRoZSBldmVudHMgbGF0ZXIgZmlyZS5cbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuXG4gICAgICAgIC8vIEFuZCBmaW5hbGx5LCBjbGVhbiB1cCB0aGUgcGFnZS5cbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIElkZW50aWZpZXMgcmVxdWVzdHMgd2l0aCB0aGUgbWV0aG9kIEpTT05QIGFuZFxuICogc2hpZnRzIHRoZW0gdG8gdGhlIGBKc29ucENsaWVudEJhY2tlbmRgLlxuICpcbiAqIEBzZWUgYEh0dHBJbnRlcmNlcHRvcmBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29ucEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29ucDogSnNvbnBDbGllbnRCYWNrZW5kKSB7fVxuXG4gIC8qKlxuICAgKiBJZGVudGlmaWVzIGFuZCBoYW5kbGVzIGEgZ2l2ZW4gSlNPTlAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHJlcSBUaGUgb3V0Z29pbmcgcmVxdWVzdCBvYmplY3QgdG8gaGFuZGxlLlxuICAgKiBAcGFyYW0gbmV4dCBUaGUgbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIG9yIHRoZSBiYWNrZW5kXG4gICAqIGlmIG5vIGludGVyY2VwdG9ycyByZW1haW4gaW4gdGhlIGNoYWluLlxuICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSBldmVudCBzdHJlYW0uXG4gICAqL1xuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0pTT05QJykge1xuICAgICAgcmV0dXJuIHRoaXMuanNvbnAuaGFuZGxlKHJlcSBhcyBIdHRwUmVxdWVzdDxuZXZlcj4pO1xuICAgIH1cbiAgICAvLyBGYWxsIHRocm91Z2ggZm9yIG5vcm1hbCBIVFRQIHJlcXVlc3RzLlxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=