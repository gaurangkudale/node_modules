/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Inject, Injectable, Optional } from '@angular/core';
import { DIR_DOCUMENT } from './dir-document-token';
import * as i0 from "@angular/core";
import * as i1 from "angular_material/src/cdk/bidi/dir-document-token";
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
import * as ɵngcc0 from '@angular/core';
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /** The current 'ltr' or 'rtl' value. */
        this.value = 'ltr';
        /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
        this.change = new EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    Directionality.prototype.ngOnDestroy = function () {
        this.change.complete();
    };
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DIR_DOCUMENT,] }] }
    ]; };
    Directionality.ɵprov = i0.ɵɵdefineInjectable({ factory: function Directionality_Factory() { return new Directionality(i0.ɵɵinject(i1.DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
Directionality.ɵfac = function Directionality_Factory(t) { return new (t || Directionality)(ɵngcc0.ɵɵinject(DIR_DOCUMENT, 8)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Directionality, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DIR_DOCUMENT]
            }] }]; }, null); })();
    return Directionality;
}());
export { Directionality };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uYWxpdHkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYmlkaS9kaXJlY3Rpb25hbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQ7QUFFbUM7QUFHbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSDtBQUNnQixJQU9kLHdCQUE4QyxTQUFlO0FBQy9ELFFBUEUsd0NBQXdDO0FBQzFDLFFBQVcsVUFBSyxHQUFjLEtBQUssQ0FBQztBQUNwQyxRQUNFLGtFQUFrRTtBQUNwRSxRQUFXLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0FBQ2xELFFBRUksSUFBSSxTQUFTLEVBQUU7QUFDbkIsWUFBTSw4QkFBOEI7QUFDcEMsWUFBTSwyQ0FBMkM7QUFDakQsWUFBTSxrRkFBa0Y7QUFDeEYsWUFBTSx1RkFBdUY7QUFDN0YsWUFBTSxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2pFLFlBQU0sSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN2RixZQUFNLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUM7QUFDdkMsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3hFLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLG9DQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDLENBdEJNO0FBQUM7MkJBRFQsVUFBVSxTQUFDLEVBQUMsVUFBVSwxREFDVTtDQURSLE1BQU0sRUFBQyxUQUVTLGdEQU0xQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7QUFBUTtBQUFVOzs7Ozs7Ozs7O2tDQUs1RDtBQUFDLHlCQWhDTDtBQUFFLENBMkNELEFBeEJELElBd0JDO0FBQ0QsU0F4QmEsY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtESVJfRE9DVU1FTlR9IGZyb20gJy4vZGlyLWRvY3VtZW50LXRva2VuJztcblxuXG5leHBvcnQgdHlwZSBEaXJlY3Rpb24gPSAnbHRyJyB8ICdydGwnO1xuXG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbmFsaXR5IChMVFIgLyBSVEwpIGNvbnRleHQgZm9yIHRoZSBhcHBsaWNhdGlvbiAob3IgYSBzdWJ0cmVlIG9mIGl0KS5cbiAqIEV4cG9zZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIGFuZCBhIHN0cmVhbSBvZiBkaXJlY3Rpb24gY2hhbmdlcy5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uYWxpdHkgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogVGhlIGN1cnJlbnQgJ2x0cicgb3IgJ3J0bCcgdmFsdWUuICovXG4gIHJlYWRvbmx5IHZhbHVlOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlICdsdHInIC8gJ3J0bCcgc3RhdGUgY2hhbmdlcy4gKi9cbiAgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEaXJlY3Rpb24+KCk7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChESVJfRE9DVU1FTlQpIF9kb2N1bWVudD86IGFueSkge1xuICAgIGlmIChfZG9jdW1lbnQpIHtcbiAgICAgIC8vIFRPRE86IGhhbmRsZSAnYXV0bycgdmFsdWUgLVxuICAgICAgLy8gV2Ugc3RpbGwgbmVlZCB0byBhY2NvdW50IGZvciBkaXI9XCJhdXRvXCIuXG4gICAgICAvLyBJdCBsb29rcyBsaWtlIEhUTUxFbGVtZW5ldC5kaXIgaXMgYWxzbyBcImF1dG9cIiB3aGVuIHRoYXQncyBzZXQgdG8gdGhlIGF0dHJpYnV0ZSxcbiAgICAgIC8vIGJ1dCBnZXRDb21wdXRlZFN0eWxlIHJldHVybiBlaXRoZXIgXCJsdHJcIiBvciBcInJ0bFwiLiBhdm9pZGluZyBnZXRDb21wdXRlZFN0eWxlIGZvciBub3dcbiAgICAgIGNvbnN0IGJvZHlEaXIgPSBfZG9jdW1lbnQuYm9keSA/IF9kb2N1bWVudC5ib2R5LmRpciA6IG51bGw7XG4gICAgICBjb25zdCBodG1sRGlyID0gX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IF9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyIDogbnVsbDtcbiAgICAgIGNvbnN0IHZhbHVlID0gYm9keURpciB8fCBodG1sRGlyO1xuICAgICAgdGhpcy52YWx1ZSA9ICh2YWx1ZSA9PT0gJ2x0cicgfHwgdmFsdWUgPT09ICdydGwnKSA/IHZhbHVlIDogJ2x0cic7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFuZ2UuY29tcGxldGUoKTtcbiAgfVxufVxuIl19