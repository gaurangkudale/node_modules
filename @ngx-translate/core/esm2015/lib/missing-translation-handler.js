/**
 * @fileoverview added by tsickle
 * Generated from: lib/missing-translation-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function MissingTranslationHandlerParams() { }
if (false) {
    /**
     * the key that's missing in translation files
     * @type {?}
     */
    MissingTranslationHandlerParams.prototype.key;
    /**
     * an instance of the service that was unable to translate the key.
     * @type {?}
     */
    MissingTranslationHandlerParams.prototype.translateService;
    /**
     * interpolation params that were passed along for translating the given key.
     * @type {?|undefined}
     */
    MissingTranslationHandlerParams.prototype.interpolateParams;
}
/**
 * @abstract
 */
export class MissingTranslationHandler {
}
if (false) {
    /**
     * A function that handles missing translations.
     *
     * @abstract
     * @param {?} params context for resolving a missing translation
     * @return {?} a value or an observable
     * If it returns a value, then this value is used.
     * If it return an observable, the value returned by this observable will be used (except if the method was "instant").
     * If it doesn't return then the key will be used as a value
     */
    MissingTranslationHandler.prototype.handle = function (params) { };
}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
export class FakeMissingTranslationHandler {
    /**
     * @param {?} params
     * @return {?}
     */
    handle(params) {
        return params.key;
    }
}
FakeMissingTranslationHandler.ɵfac = function FakeMissingTranslationHandler_Factory(t) { return new (t || FakeMissingTranslationHandler)(); };
FakeMissingTranslationHandler.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: FakeMissingTranslationHandler, factory: FakeMissingTranslationHandler.ɵfac });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FakeMissingTranslationHandler, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDO0FBQUk7QUFBVzs7QUFFZixxREFlQztBQUNEO0FBQ1k7QUFBUTtBQUVMO0FBQWlCO0FBQVEsSUFmdEMsOENBQVk7QUFDZDtBQUVDO0FBQ0U7QUFDVztBQUFRLElBQXBCLDJEQUFtQztBQUNyQztBQUVDO0FBQ0U7QUFDcUI7QUFFeEIsSUFGRSw0REFBMkI7QUFDN0I7QUFDQTtBQUNHO0FBQWE7QUFBaEIsTUFBTSxPQUFnQix5QkFBeUI7QUFDL0MsQ0FVQztBQUNEO0FBRVE7QUFBUTtBQUFxRDtBQUFPO0FBQWlCO0FBR2xFO0FBQTRDO0FBQzNCO0FBSW1DO0FBQWlFO0FBQVEsSUFadEosbUVBQThEO0FBQ2hFO0FBQ0E7QUFDRztBQUNpSDtBQUdwSCxNQUFNLE9BQU8sNkJBQTZCO0FBQUc7QUFBUTtBQUF5QjtBQUMvRDtBQUFRLElBQXJCLE1BQU0sQ0FBQyxNQUF1QztBQUFJLFFBQ2hELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUN0QixJQUFFLENBQUM7QUFDSDt5REFMQyxVQUFVOzs7OzBCQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gXCIuL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyB7XG4gIC8qKlxuICAgKiB0aGUga2V5IHRoYXQncyBtaXNzaW5nIGluIHRyYW5zbGF0aW9uIGZpbGVzXG4gICAqL1xuICBrZXk6IHN0cmluZztcblxuICAvKipcbiAgICogYW4gaW5zdGFuY2Ugb2YgdGhlIHNlcnZpY2UgdGhhdCB3YXMgdW5hYmxlIHRvIHRyYW5zbGF0ZSB0aGUga2V5LlxuICAgKi9cbiAgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTtcblxuICAvKipcbiAgICogaW50ZXJwb2xhdGlvbiBwYXJhbXMgdGhhdCB3ZXJlIHBhc3NlZCBhbG9uZyBmb3IgdHJhbnNsYXRpbmcgdGhlIGdpdmVuIGtleS5cbiAgICovXG4gIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBtaXNzaW5nIHRyYW5zbGF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBjb250ZXh0IGZvciByZXNvbHZpbmcgYSBtaXNzaW5nIHRyYW5zbGF0aW9uXG4gICAqIEByZXR1cm5zIGEgdmFsdWUgb3IgYW4gb2JzZXJ2YWJsZVxuICAgKiBJZiBpdCByZXR1cm5zIGEgdmFsdWUsIHRoZW4gdGhpcyB2YWx1ZSBpcyB1c2VkLlxuICAgKiBJZiBpdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSwgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoaXMgb2JzZXJ2YWJsZSB3aWxsIGJlIHVzZWQgKGV4Y2VwdCBpZiB0aGUgbWV0aG9kIHdhcyBcImluc3RhbnRcIikuXG4gICAqIElmIGl0IGRvZXNuJ3QgcmV0dXJuIHRoZW4gdGhlIGtleSB3aWxsIGJlIHVzZWQgYXMgYSB2YWx1ZVxuICAgKi9cbiAgYWJzdHJhY3QgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyk6IGFueTtcbn1cblxuLyoqXG4gKiBUaGlzIGhhbmRsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgbWlzc2luZyB0cmFuc2xhdGlvbiBoYW5kbGVyIGF0IGFsbFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHBhcmFtcy5rZXk7XG4gIH1cbn1cbiJdfQ==