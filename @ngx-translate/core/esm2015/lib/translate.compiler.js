/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.compiler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export class TranslateCompiler {
}
if (false) {
    /**
     * @abstract
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    TranslateCompiler.prototype.compile = function (value, lang) { };
    /**
     * @abstract
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    TranslateCompiler.prototype.compileTranslations = function (translations, lang) { };
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
export class TranslateFakeCompiler extends TranslateCompiler {
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    compile(value, lang) {
        return value;
    }
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    compileTranslations(translations, lang) {
        return translations;
    }
}
TranslateFakeCompiler.ɵfac = function TranslateFakeCompiler_Factory(t) { return ɵTranslateFakeCompiler_BaseFactory(t || TranslateFakeCompiler); };
TranslateFakeCompiler.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TranslateFakeCompiler, factory: TranslateFakeCompiler.ɵfac });
const ɵTranslateFakeCompiler_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TranslateFakeCompiler);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TranslateFakeCompiler, [{
        type: Injectable
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBpbGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL2xpYi90cmFuc2xhdGUuY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDO0FBQ0c7QUFBYTs7QUFBaEIsTUFBTSxPQUFnQixpQkFBaUI7QUFDdkMsQ0FHQztBQUNEO0FBRVE7QUFBUTtBQUFpQjtBQUF3QjtBQUF1QjtBQUNoRjtBQUNJLElBUkYsaUVBQWlFO0FBQ25FO0FBQ087QUFBaUI7QUFBK0I7QUFJdEQ7QUFBbUI7QUFBUSxJQUoxQixvRkFBbUU7QUFDckU7QUFDQTtBQUNHO0FBQytGO0FBR2xHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7QUFDNUQ7QUFBUTtBQUF3QjtBQUF1QjtBQUN6QztBQUVkLElBSEUsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFZO0FBQUksUUFDckMsT0FBTyxLQUFLLENBQUM7QUFDakIsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUErQjtBQUF1QjtBQUMzQztBQUNqQixJQUZDLG1CQUFtQixDQUFDLFlBQWlCLEVBQUUsSUFBWTtBQUFJLFFBQ3JELE9BQU8sWUFBWSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNIO2lEQVRDLFVBQVU7Ozs7OzBCQUNUO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGVDb21waWxlciB7XG4gIGFic3RyYWN0IGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHwgRnVuY3Rpb247XG5cbiAgYWJzdHJhY3QgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSwgbGFuZzogc3RyaW5nKTogYW55O1xufVxuXG4vKipcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlQ29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XG4gIGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHwgRnVuY3Rpb24ge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcbiAgfVxufVxuIl19