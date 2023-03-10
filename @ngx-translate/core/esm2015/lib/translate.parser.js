/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.parser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { isDefined } from "./util";
/**
 * @abstract
 */
import * as ɵngcc0 from '@angular/core';
export class TranslateParser {
}
if (false) {
    /**
     * Interpolates a string to replace parameters
     * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
     * @abstract
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateParser.prototype.interpolate = function (expr, params) { };
    /**
     * Gets a value from an object by composed key
     * parser.getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
     * @abstract
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    TranslateParser.prototype.getValue = function (target, key) { };
}
export class TranslateDefaultParser extends TranslateParser {
    constructor() {
        super(...arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolate(expr, params) {
        /** @type {?} */
        let result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    }
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    getValue(target, key) {
        /** @type {?} */
        let keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    }
    /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    interpolateFunction(fn, params) {
        return fn(params);
    }
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        (substring, b) => {
            /** @type {?} */
            let r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    }
}
TranslateDefaultParser.ɵfac = function TranslateDefaultParser_Factory(t) { return ɵTranslateDefaultParser_BaseFactory(t || TranslateDefaultParser); };
TranslateDefaultParser.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TranslateDefaultParser, factory: TranslateDefaultParser.ɵfac });
const ɵTranslateDefaultParser_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TranslateDefaultParser);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TranslateDefaultParser, [{
        type: Injectable
    }], null, null); })();
if (false) {
    /** @type {?} */
    TranslateDefaultParser.prototype.templateMatcher;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBhcnNlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9saWIvdHJhbnNsYXRlLnBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNqQztBQUNHO0FBQWE7O0FBQWhCLE1BQU0sT0FBZ0IsZUFBZTtBQUNyQyxDQWVDO0FBQ0Q7QUFDWTtBQUNOO0FBQW1EO0FBR2pDO0FBQWlCO0FBQXVCO0FBQzVDO0FBRU47QUFBUSxJQWxCcEIsb0VBQW9FO0FBQ3RFO0FBRUM7QUFDRTtBQUNFO0FBQ0Y7QUFFRztBQUFzQjtBQUFtQjtBQUc5QyxJQUhDLGdFQUFnRDtBQUNsRDtBQUdBLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0FBQzNELElBRkE7QUFDRTtBQUE2QixRQUM3QixvQkFBZSxHQUFXLHVCQUF1QixDQUFDO0FBQ3BELElBZ0RBLENBQUM7QUFDRDtBQUFRO0FBQXVCO0FBQTBCO0FBQW1CO0FBQVEsSUFoRDNFLFdBQVcsQ0FBQyxJQUF1QixFQUFFLE1BQVk7QUFBSTtBQUM3QyxZQUFULE1BQWM7QUFDdEIsUUFDSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUNsQyxZQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3BELFNBQUs7QUFBQyxhQUFLLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO0FBQzNDLFlBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLCtFQUErRTtBQUNyRixZQUFNLE1BQU0sR0FBRyxtQkFBQSxJQUFJLEVBQVUsQ0FBQztBQUM5QixTQUFLO0FBQ0wsUUFDSSxPQUFPLE1BQU0sQ0FBQztBQUNsQixJQUFFLENBQUM7QUFDSDtBQUNPO0FBQXlCO0FBQ3RCO0FBQW1CO0FBQVEsSUFEbkMsUUFBUSxDQUFDLE1BQVcsRUFBRSxHQUFXO0FBQUk7QUFDbkIsWUFBWixJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUMvRCxRQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixRQUFJLEdBQUc7QUFDUCxZQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUIsWUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDNUcsZ0JBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixnQkFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGFBQU87QUFBQyxpQkFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUMvQixnQkFBUSxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDbkIsYUFBTztBQUNQLFNBQUssUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzFCLFFBQ0ksT0FBTyxNQUFNLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUFnQjtBQUFxQjtBQUNsQztBQUdUO0FBQVEsSUFKQyxtQkFBbUIsQ0FBQyxFQUFZLEVBQUUsTUFBWTtBQUN4RCxRQUFJLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFBZ0I7QUFBdUI7QUFDaEM7QUFDQTtBQUNYLElBSE8saUJBQWlCLENBQUMsSUFBWSxFQUFFLE1BQVk7QUFDdEQsUUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pCLFlBQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsU0FBSztBQUNMLFFBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlO0FBQU87QUFDbEQ7QUFBd0I7QUFDakI7QUFBWSxRQUYwQixDQUFDLFNBQWlCLEVBQUUsQ0FBUyxFQUFFLEVBQUU7QUFDL0U7QUFBNkIsZ0JBQW5CLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDdEMsWUFBTSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDMUMsUUFBSSxDQUFDLEVBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIO2tEQW5EQyxVQUFVOzs7OzswQkFDVDtBQUFDO0FBQWE7QUFBcUIsSUFDbkMsaURBQWtEO0FBQ3BEO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlUGFyc2VyIHtcbiAgLyoqXG4gICAqIEludGVycG9sYXRlcyBhIHN0cmluZyB0byByZXBsYWNlIHBhcmFtZXRlcnNcbiAgICogXCJUaGlzIGlzIGEge3sga2V5IH19XCIgPT0+IFwiVGhpcyBpcyBhIHZhbHVlXCIsIHdpdGggcGFyYW1zID0geyBrZXk6IFwidmFsdWVcIiB9XG4gICAqIEBwYXJhbSBleHByXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG4gIGFic3RyYWN0IGludGVycG9sYXRlKGV4cHI6IHN0cmluZyB8IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZSBmcm9tIGFuIG9iamVjdCBieSBjb21wb3NlZCBrZXlcbiAgICogcGFyc2VyLmdldFZhbHVlKHsga2V5MTogeyBrZXlBOiAndmFsdWVJJyB9fSwgJ2tleTEua2V5QScpID09PiAndmFsdWVJJ1xuICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGFic3RyYWN0IGdldFZhbHVlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGVmYXVsdFBhcnNlciBleHRlbmRzIFRyYW5zbGF0ZVBhcnNlciB7XG4gIHRlbXBsYXRlTWF0Y2hlcjogUmVnRXhwID0gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cbiAgcHVibGljIGludGVycG9sYXRlKGV4cHI6IHN0cmluZyB8IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZztcblxuICAgIGlmICh0eXBlb2YgZXhwciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW50ZXJwb2xhdGVTdHJpbmcoZXhwciwgcGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHByID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmludGVycG9sYXRlRnVuY3Rpb24oZXhwciwgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGFuIHVucmVsYXRlZCBUcmFuc2xhdGVTZXJ2aWNlIHRlc3QgZGVwZW5kcyBvbiBpdFxuICAgICAgcmVzdWx0ID0gZXhwciBhcyBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFZhbHVlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgbGV0IGtleXMgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG4gICAga2V5ID0gJyc7XG4gICAgZG8ge1xuICAgICAga2V5ICs9IGtleXMuc2hpZnQoKTtcbiAgICAgIGlmIChpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGtleSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5ICs9ICcuJztcbiAgICAgIH1cbiAgICB9IHdoaWxlIChrZXlzLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZUZ1bmN0aW9uKGZuOiBGdW5jdGlvbiwgcGFyYW1zPzogYW55KSB7XG4gICAgcmV0dXJuIGZuKHBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGludGVycG9sYXRlU3RyaW5nKGV4cHI6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiBleHByO1xuICAgIH1cblxuICAgIHJldHVybiBleHByLnJlcGxhY2UodGhpcy50ZW1wbGF0ZU1hdGNoZXIsIChzdWJzdHJpbmc6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgciA9IHRoaXMuZ2V0VmFsdWUocGFyYW1zLCBiKTtcbiAgICAgIHJldHVybiBpc0RlZmluZWQocikgPyByIDogc3Vic3RyaW5nO1xuICAgIH0pO1xuICB9XG59XG4iXX0=