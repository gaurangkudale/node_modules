/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { of } from "rxjs";
/**
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export class TranslateLoader {
}
if (false) {
    /**
     * @abstract
     * @param {?} lang
     * @return {?}
     */
    TranslateLoader.prototype.getTranslation = function (lang) { };
}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
export class TranslateFakeLoader extends TranslateLoader {
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return of({});
    }
}
TranslateFakeLoader.ɵfac = function TranslateFakeLoader_Factory(t) { return ɵTranslateFakeLoader_BaseFactory(t || TranslateFakeLoader); };
TranslateFakeLoader.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TranslateFakeLoader, factory: TranslateFakeLoader.ɵfac });
const ɵTranslateFakeLoader_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TranslateFakeLoader);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TranslateFakeLoader, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmxvYWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9saWIvdHJhbnNsYXRlLmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQztBQUNHO0FBQWE7O0FBQWhCLE1BQU0sT0FBZ0IsZUFBZTtBQUNyQyxDQUNDO0FBQ0Q7QUFFUTtBQUFRO0FBQWlCO0FBQXVCO0FBQW1CO0FBQVEsSUFKakYsK0RBQXVEO0FBQ3pEO0FBQ0E7QUFDRztBQUMyRjtBQUc5RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTtBQUN4RDtBQUFRO0FBQXVCO0FBQy9CO0FBQVEsSUFETixjQUFjLENBQUMsSUFBWTtBQUFJLFFBQzdCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNIOytDQUxDLFVBQVU7Ozs7OzBCQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlTG9hZGVyIHtcbiAgYWJzdHJhY3QgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG4vKipcbiAqIFRoaXMgbG9hZGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGxvYWRlciBhdCBhbGxcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUZha2VMb2FkZXIgZXh0ZW5kcyBUcmFuc2xhdGVMb2FkZXIge1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvZih7fSk7XG4gIH1cbn1cbiJdfQ==