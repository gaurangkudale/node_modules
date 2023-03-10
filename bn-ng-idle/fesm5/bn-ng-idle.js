import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { Subject, merge, fromEvent, timer } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BnNgIdleService = /** @class */ (function () {
    function BnNgIdleService() {
        this.expired$ = new Subject();
    }
    /**
     * @param {?} timeOutSeconds
     * @return {?}
     */
    BnNgIdleService.prototype.startWatching = /**
     * @param {?} timeOutSeconds
     * @return {?}
     */
    function (timeOutSeconds) {
        var _this = this;
        this.idle$ = merge(fromEvent(document, 'mousemove'), fromEvent(document, 'click'), fromEvent(document, 'mousedown'), fromEvent(document, 'keypress'), fromEvent(document, 'DOMMouseScroll'), fromEvent(document, 'mousewheel'), fromEvent(document, 'touchmove'), fromEvent(document, 'MSPointerMove'), fromEvent(window, 'mousemove'), fromEvent(window, 'resize'));
        this.timeOutMilliSeconds = timeOutSeconds * 1000;
        this.idleSubscription = this.idle$.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.resetTimer();
        }));
        this.startTimer();
        return this.expired$;
    };
    /**
     * @private
     * @return {?}
     */
    BnNgIdleService.prototype.startTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.timer$ = timer(this.timeOutMilliSeconds, this.timeOutMilliSeconds).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.expired$.next(true);
        }));
    };
    /**
     * @return {?}
     */
    BnNgIdleService.prototype.resetTimer = /**
     * @return {?}
     */
    function () {
        this.timer$.unsubscribe();
        this.startTimer();
    };
    /**
     * @return {?}
     */
    BnNgIdleService.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        this.timer$.unsubscribe();
        this.idleSubscription.unsubscribe();
    };
    BnNgIdleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BnNgIdleService.ctorParameters = function () { return []; };
    /** @nocollapse */ BnNgIdleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BnNgIdleService_Factory() { return new BnNgIdleService(); }, token: BnNgIdleService, providedIn: "root" });
    return BnNgIdleService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    BnNgIdleService.prototype.idle$;
    /**
     * @type {?}
     * @private
     */
    BnNgIdleService.prototype.timer$;
    /**
     * @type {?}
     * @private
     */
    BnNgIdleService.prototype.timeOutMilliSeconds;
    /**
     * @type {?}
     * @private
     */
    BnNgIdleService.prototype.idleSubscription;
    /** @type {?} */
    BnNgIdleService.prototype.expired$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BnNgIdleModule = /** @class */ (function () {
    function BnNgIdleModule() {
    }
    BnNgIdleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    providers: [BnNgIdleService],
                    exports: []
                },] }
    ];
    return BnNgIdleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BnNgIdleModule, BnNgIdleService };
//# sourceMappingURL=bn-ng-idle.js.map
