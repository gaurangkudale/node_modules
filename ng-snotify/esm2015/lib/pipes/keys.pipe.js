import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let KeysPipe = 
/**
 * Extract object keys pipe
 */
class KeysPipe {
    transform(value, args = null) {
        if (!value) {
            return value;
        }
        return Object.keys(value);
    }
};
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: false });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeysPipe, [{
        type: Pipe,
        args: [{
                name: 'keys',
                pure: false
            }]
    }], null, null); })();
export { KeysPipe };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5waXBlLmpzIiwic291cmNlcyI6WyJuZzovbmctc25vdGlmeS9saWIvcGlwZXMva2V5cy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFTcEQsSUFBYSxRQUFRO0FBSHJCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBYSxRQUFRO0FBQUcsSUFDdEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxPQUFjLElBQUk7QUFBSSxRQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2hCLFlBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsU0FBSztBQUNMLFFBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQVBZLFFBQVEsb0JBUHBCLElBQUksQ0FBQyxVQUNKLElBQUksRUFBRSxNQUFNLFVBQ1osSUFBSSxFQUFFLEtBQUs7RUFDWixDQUFDLEtBQ0YsMkNBRUcsSUFDVSxRQUFRLENBT3BCOzs7Ozs7OzBCQUNEOztBQWpCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBSEEsQUFFQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQVBBLEFBQUEsQUFQQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFDQSxBQUFBLEFBT0EsQUFQQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdrZXlzJyxcclxuICBwdXJlOiBmYWxzZVxyXG59KVxyXG4vKipcclxuICogRXh0cmFjdCBvYmplY3Qga2V5cyBwaXBlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19