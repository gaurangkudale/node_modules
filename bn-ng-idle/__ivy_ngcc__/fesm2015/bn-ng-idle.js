import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { Subject, merge, fromEvent, timer } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class BnNgIdleService {
    constructor() {
        this.expired$ = new Subject();
    }
    /**
     * @param {?} timeOutSeconds
     * @return {?}
     */
    startWatching(timeOutSeconds) {
        this.idle$ = merge(fromEvent(document, 'mousemove'), fromEvent(document, 'click'), fromEvent(document, 'mousedown'), fromEvent(document, 'keypress'), fromEvent(document, 'DOMMouseScroll'), fromEvent(document, 'mousewheel'), fromEvent(document, 'touchmove'), fromEvent(document, 'MSPointerMove'), fromEvent(window, 'mousemove'), fromEvent(window, 'resize'));
        this.timeOutMilliSeconds = timeOutSeconds * 1000;
        this.idleSubscription = this.idle$.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.resetTimer();
        }));
        this.startTimer();
        return this.expired$;
    }
    /**
     * @private
     * @return {?}
     */
    startTimer() {
        this.timer$ = timer(this.timeOutMilliSeconds, this.timeOutMilliSeconds).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.expired$.next(true);
        }));
    }
    /**
     * @return {?}
     */
    resetTimer() {
        this.timer$.unsubscribe();
        this.startTimer();
    }
    /**
     * @return {?}
     */
    stopTimer() {
        this.timer$.unsubscribe();
        this.idleSubscription.unsubscribe();
    }
}
BnNgIdleService.ɵfac = function BnNgIdleService_Factory(t) { return new (t || BnNgIdleService)(); };
BnNgIdleService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: BnNgIdleService, factory: BnNgIdleService.ɵfac, providedIn: 'root' });
/** @nocollapse */
BnNgIdleService.ctorParameters = () => [];
/** @nocollapse */ BnNgIdleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function BnNgIdleService_Factory() { return new BnNgIdleService(); }, token: BnNgIdleService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BnNgIdleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
class BnNgIdleModule {
}
BnNgIdleModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BnNgIdleModule });
BnNgIdleModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BnNgIdleModule_Factory(t) { return new (t || BnNgIdleModule)(); }, providers: [BnNgIdleService], imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BnNgIdleModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                providers: [BnNgIdleService],
                exports: []
            }]
    }], null, null); })();

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