/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { APP_ID, Injectable, NgModule } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export function escapeHtml(text) {
    const escapedText = {
        '&': '&a;',
        '"': '&q;',
        '\'': '&s;',
        '<': '&l;',
        '>': '&g;',
    };
    return text.replace(/[&"'<>]/g, s => escapedText[s]);
}
export function unescapeHtml(text) {
    const unescapedText = {
        '&a;': '&',
        '&q;': '"',
        '&s;': '\'',
        '&l;': '<',
        '&g;': '>',
    };
    return text.replace(/&[^;]+;/g, s => unescapedText[s]);
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
export function makeStateKey(key) {
    return key;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * @publicApi
 */
export class TransferState {
    constructor() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    /** @internal */
    static init(initState) {
        const transferState = new TransferState();
        transferState.store = initState;
        return transferState;
    }
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get(key, defaultValue) {
        return this.store[key] !== undefined ? this.store[key] : defaultValue;
    }
    /**
     * Set the value corresponding to a key.
     */
    set(key, value) {
        this.store[key] = value;
    }
    /**
     * Remove a key from the store.
     */
    remove(key) {
        delete this.store[key];
    }
    /**
     * Test whether a key exists in the store.
     */
    hasKey(key) {
        return this.store.hasOwnProperty(key);
    }
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize(key, callback) {
        this.onSerializeCallbacks[key] = callback;
    }
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson() {
        // Call the onSerialize callbacks and put those values into the store.
        for (const key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    }
}
TransferState.ɵfac = function TransferState_Factory(t) { return new (t || TransferState)(); };
TransferState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TransferState, factory: TransferState.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TransferState, [{
        type: Injectable
    }], function () { return []; }, null); })();
export function initTransferState(doc, appId) {
    // Locate the script tag with the JSON data transferred from the server.
    // The id of the script tag is set to the Angular appId + 'state'.
    const script = doc.getElementById(appId + '-state');
    let initialState = {};
    if (script && script.textContent) {
        try {
            initialState = JSON.parse(unescapeHtml(script.textContent));
        }
        catch (e) {
            console.warn('Exception while restoring TransferState for app ' + appId, e);
        }
    }
    return TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */
export class BrowserTransferStateModule {
}
BrowserTransferStateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BrowserTransferStateModule });
BrowserTransferStateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BrowserTransferStateModule_Factory(t) { return new (t || BrowserTransferStateModule)(); }, providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT, APP_ID] }] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BrowserTransferStateModule, [{
        type: NgModule,
        args: [{
                providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT, APP_ID] }]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXJfc3RhdGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXIvdHJhbnNmZXJfc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRTNELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBWTtBQUFJLElBQ3pDLE1BQU0sV0FBVyxHQUEwQjtBQUM3QyxRQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ2QsUUFBSSxHQUFHLEVBQUUsS0FBSztBQUNkLFFBQUksSUFBSSxFQUFFLEtBQUs7QUFDZixRQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ2QsUUFBSSxHQUFHLEVBQUUsS0FBSztBQUNkLEtBQUcsQ0FBQztBQUNKLElBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLElBQVk7QUFBSSxJQUMzQyxNQUFNLGFBQWEsR0FBMEI7QUFDL0MsUUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLFFBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxRQUFJLEtBQUssRUFBRSxJQUFJO0FBQ2YsUUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLFFBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxLQUFHLENBQUM7QUFDSixJQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6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QUF3RTtBQUMxRSxJQUFFLGtFQUFrRTtBQUNwRSxJQUFFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELElBQUUsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLElBQUUsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtBQUNwQyxRQUFJLElBQUk7QUFDUixZQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNsRSxTQUFLO0FBQUMsUUFBQSxPQUFPLENBQUMsRUFBRTtBQUNoQixZQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0RBQWtELEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFNBQUs7QUFDTCxLQUFHO0FBQ0gsSUFBRSxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBSUgsTUFBTSxPQUFPLDBCQUEwQjtBQUN2QztzREFKQyxRQUFRLFNBQUMsa0JBQ1I7Q0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUMsQ0FBQyxlQUMvRjs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QVBQX0lELCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGVzY2FwZWRUZXh0OiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgJyYnOiAnJmE7JyxcbiAgICAnXCInOiAnJnE7JyxcbiAgICAnXFwnJzogJyZzOycsXG4gICAgJzwnOiAnJmw7JyxcbiAgICAnPic6ICcmZzsnLFxuICB9O1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bJlwiJzw+XS9nLCBzID0+IGVzY2FwZWRUZXh0W3NdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlSHRtbCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB1bmVzY2FwZWRUZXh0OiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgJyZhOyc6ICcmJyxcbiAgICAnJnE7JzogJ1wiJyxcbiAgICAnJnM7JzogJ1xcJycsXG4gICAgJyZsOyc6ICc8JyxcbiAgICAnJmc7JzogJz4nLFxuICB9O1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mW147XSs7L2csIHMgPT4gdW5lc2NhcGVkVGV4dFtzXSk7XG59XG5cbi8qKlxuICogQSB0eXBlLXNhZmUga2V5IHRvIHVzZSB3aXRoIGBUcmFuc2ZlclN0YXRlYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogY29uc3QgQ09VTlRFUl9LRVkgPSBtYWtlU3RhdGVLZXk8bnVtYmVyPignY291bnRlcicpO1xuICogbGV0IHZhbHVlID0gMTA7XG4gKlxuICogdHJhbnNmZXJTdGF0ZS5zZXQoQ09VTlRFUl9LRVksIHZhbHVlKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgU3RhdGVLZXk8VD4gPSBzdHJpbmcme19fbm90X2Ffc3RyaW5nOiBuZXZlcn07XG5cbi8qKlxuICogQ3JlYXRlIGEgYFN0YXRlS2V5PFQ+YCB0aGF0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIHZhbHVlIG9mIHR5cGUgVCB3aXRoIGBUcmFuc2ZlclN0YXRlYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogY29uc3QgQ09VTlRFUl9LRVkgPSBtYWtlU3RhdGVLZXk8bnVtYmVyPignY291bnRlcicpO1xuICogbGV0IHZhbHVlID0gMTA7XG4gKlxuICogdHJhbnNmZXJTdGF0ZS5zZXQoQ09VTlRFUl9LRVksIHZhbHVlKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZUtleTxUID0gdm9pZD4oa2V5OiBzdHJpbmcpOiBTdGF0ZUtleTxUPiB7XG4gIHJldHVybiBrZXkgYXMgU3RhdGVLZXk8VD47XG59XG5cbi8qKlxuICogQSBrZXkgdmFsdWUgc3RvcmUgdGhhdCBpcyB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBhcHBsaWNhdGlvbiBvbiB0aGUgc2VydmVyIHNpZGUgdG8gdGhlIGFwcGxpY2F0aW9uXG4gKiBvbiB0aGUgY2xpZW50IHNpZGUuXG4gKlxuICogYFRyYW5zZmVyU3RhdGVgIHdpbGwgYmUgYXZhaWxhYmxlIGFzIGFuIGluamVjdGFibGUgdG9rZW4uIFRvIHVzZSBpdCBpbXBvcnRcbiAqIGBTZXJ2ZXJUcmFuc2ZlclN0YXRlTW9kdWxlYCBvbiB0aGUgc2VydmVyIGFuZCBgQnJvd3NlclRyYW5zZmVyU3RhdGVNb2R1bGVgIG9uIHRoZSBjbGllbnQuXG4gKlxuICogVGhlIHZhbHVlcyBpbiB0aGUgc3RvcmUgYXJlIHNlcmlhbGl6ZWQvZGVzZXJpYWxpemVkIHVzaW5nIEpTT04uc3RyaW5naWZ5L0pTT04ucGFyc2UuIFNvIG9ubHlcbiAqIGJvb2xlYW4sIG51bWJlciwgc3RyaW5nLCBudWxsIGFuZCBub24tY2xhc3Mgb2JqZWN0cyB3aWxsIGJlIHNlcmlhbGl6ZWQgYW5kIGRlc2VyaWFsemllZCBpbiBhXG4gKiBub24tbG9zc3kgbWFubmVyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyU3RhdGUge1xuICBwcml2YXRlIHN0b3JlOiB7W2s6IHN0cmluZ106IHt9fHVuZGVmaW5lZH0gPSB7fTtcbiAgcHJpdmF0ZSBvblNlcmlhbGl6ZUNhbGxiYWNrczoge1trOiBzdHJpbmddOiAoKSA9PiB7fSB8IHVuZGVmaW5lZH0gPSB7fTtcblxuICAvKiogQGludGVybmFsICovXG4gIHN0YXRpYyBpbml0KGluaXRTdGF0ZToge30pIHtcbiAgICBjb25zdCB0cmFuc2ZlclN0YXRlID0gbmV3IFRyYW5zZmVyU3RhdGUoKTtcbiAgICB0cmFuc2ZlclN0YXRlLnN0b3JlID0gaW5pdFN0YXRlO1xuICAgIHJldHVybiB0cmFuc2ZlclN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0byBhIGtleS4gUmV0dXJuIGBkZWZhdWx0VmFsdWVgIGlmIGtleSBpcyBub3QgZm91bmQuXG4gICAqL1xuICBnZXQ8VD4oa2V5OiBTdGF0ZUtleTxUPiwgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5XSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zdG9yZVtrZXldIGFzIFQgOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIGEga2V5LlxuICAgKi9cbiAgc2V0PFQ+KGtleTogU3RhdGVLZXk8VD4sIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZVtrZXldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JlLlxuICAgKi9cbiAgcmVtb3ZlPFQ+KGtleTogU3RhdGVLZXk8VD4pOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5zdG9yZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3Qgd2hldGhlciBhIGtleSBleGlzdHMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgaGFzS2V5PFQ+KGtleTogU3RhdGVLZXk8VD4pIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gcHJvdmlkZSB0aGUgdmFsdWUgZm9yIGEga2V5IHdoZW4gYHRvSnNvbmAgaXMgY2FsbGVkLlxuICAgKi9cbiAgb25TZXJpYWxpemU8VD4oa2V5OiBTdGF0ZUtleTxUPiwgY2FsbGJhY2s6ICgpID0+IFQpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VyaWFsaXplQ2FsbGJhY2tzW2tleV0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0b3JlIHRvIEpTT04uXG4gICAqL1xuICB0b0pzb24oKTogc3RyaW5nIHtcbiAgICAvLyBDYWxsIHRoZSBvblNlcmlhbGl6ZSBjYWxsYmFja3MgYW5kIHB1dCB0aG9zZSB2YWx1ZXMgaW50byB0aGUgc3RvcmUuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5vblNlcmlhbGl6ZUNhbGxiYWNrcykge1xuICAgICAgaWYgKHRoaXMub25TZXJpYWxpemVDYWxsYmFja3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc3RvcmVba2V5XSA9IHRoaXMub25TZXJpYWxpemVDYWxsYmFja3Nba2V5XSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdFeGNlcHRpb24gaW4gb25TZXJpYWxpemUgY2FsbGJhY2s6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRyYW5zZmVyU3RhdGUoZG9jOiBEb2N1bWVudCwgYXBwSWQ6IHN0cmluZykge1xuICAvLyBMb2NhdGUgdGhlIHNjcmlwdCB0YWcgd2l0aCB0aGUgSlNPTiBkYXRhIHRyYW5zZmVycmVkIGZyb20gdGhlIHNlcnZlci5cbiAgLy8gVGhlIGlkIG9mIHRoZSBzY3JpcHQgdGFnIGlzIHNldCB0byB0aGUgQW5ndWxhciBhcHBJZCArICdzdGF0ZScuXG4gIGNvbnN0IHNjcmlwdCA9IGRvYy5nZXRFbGVtZW50QnlJZChhcHBJZCArICctc3RhdGUnKTtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICBpZiAoc2NyaXB0ICYmIHNjcmlwdC50ZXh0Q29udGVudCkge1xuICAgIHRyeSB7XG4gICAgICBpbml0aWFsU3RhdGUgPSBKU09OLnBhcnNlKHVuZXNjYXBlSHRtbChzY3JpcHQudGV4dENvbnRlbnQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0V4Y2VwdGlvbiB3aGlsZSByZXN0b3JpbmcgVHJhbnNmZXJTdGF0ZSBmb3IgYXBwICcgKyBhcHBJZCwgZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBUcmFuc2ZlclN0YXRlLmluaXQoaW5pdGlhbFN0YXRlKTtcbn1cblxuLyoqXG4gKiBOZ01vZHVsZSB0byBpbnN0YWxsIG9uIHRoZSBjbGllbnQgc2lkZSB3aGlsZSB1c2luZyB0aGUgYFRyYW5zZmVyU3RhdGVgIHRvIHRyYW5zZmVyIHN0YXRlIGZyb21cbiAqIHNlcnZlciB0byBjbGllbnQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogVHJhbnNmZXJTdGF0ZSwgdXNlRmFjdG9yeTogaW5pdFRyYW5zZmVyU3RhdGUsIGRlcHM6IFtET0NVTUVOVCwgQVBQX0lEXX1dLFxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VyVHJhbnNmZXJTdGF0ZU1vZHVsZSB7XG59XG4iXX0=