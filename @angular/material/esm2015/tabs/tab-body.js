/**
 * @fileoverview added by tsickle
 * Generated from: src/material/tabs/tab-body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ChangeDetectorRef, Input, Inject, Output, EventEmitter, ElementRef, Directive, Optional, ViewEncapsulation, ChangeDetectionStrategy, ComponentFactoryResolver, ViewContainerRef, forwardRef, ViewChild, } from '@angular/core';
import { TemplatePortal, CdkPortalOutlet, PortalHostDirective } from '@angular/cdk/portal';
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { Subscription, Subject } from 'rxjs';
import { matTabsAnimations } from './tabs-animations';
import { startWith, distinctUntilChanged } from 'rxjs/operators';
/**
 * The portal host directive for the contents of the tab.
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';

function MatTabBody_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0) { return { animationDuration: a0 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
export class MatTabBodyPortal extends CdkPortalOutlet {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     * @param {?} _host
     * @param {?=} _document
     */
    constructor(componentFactoryResolver, viewContainerRef, _host, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        super(componentFactoryResolver, viewContainerRef, _document);
        this._host = _host;
        /**
         * Subscription to events for when the tab body begins centering.
         */
        this._centeringSub = Subscription.EMPTY;
        /**
         * Subscription to events for when the tab body finishes leaving from center position.
         */
        this._leavingSub = Subscription.EMPTY;
    }
    /**
     * Set initial visibility or set up subscription for changing visibility.
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._centeringSub = this._host._beforeCentering
            .pipe(startWith(this._host._isCenterPosition(this._host._position)))
            .subscribe((/**
         * @param {?} isCentering
         * @return {?}
         */
        (isCentering) => {
            if (isCentering && !this.hasAttached()) {
                this.attach(this._host._content);
            }
        }));
        this._leavingSub = this._host._afterLeavingCenter.subscribe((/**
         * @return {?}
         */
        () => {
            this.detach();
        }));
    }
    /**
     * Clean up centering subscription.
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
}
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(forwardRef(( /**
                 * @return {?}
                 */() => MatTabBody))), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
MatTabBodyPortal.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTabBodyPortal, selectors: [["", "matTabBodyHost", ""]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
MatTabBodyPortal.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: MatTabBody, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => MatTabBody)),] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTabBodyPortal, [{
        type: Directive,
        args: [{
                selector: '[matTabBodyHost]'
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: MatTabBody, decorators: [{
                type: Inject,
                args: [forwardRef(( /**
                                     * @return {?}
                                     */() => MatTabBody))]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * Subscription to events for when the tab body begins centering.
     * @type {?}
     * @private
     */
    MatTabBodyPortal.prototype._centeringSub;
    /**
     * Subscription to events for when the tab body finishes leaving from center position.
     * @type {?}
     * @private
     */
    MatTabBodyPortal.prototype._leavingSub;
    /**
     * @type {?}
     * @private
     */
    MatTabBodyPortal.prototype._host;
}
/**
 * Base class with all of the `MatTabBody` functionality.
 * \@docs-private
 * @abstract
 */
// tslint:disable-next-line:class-name
export class _MatTabBodyBase {
    /**
     * @param {?} _elementRef
     * @param {?} _dir
     * @param {?} changeDetectorRef
     */
    constructor(_elementRef, _dir, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._dir = _dir;
        /**
         * Subscription to the directionality change observable.
         */
        this._dirChangeSubscription = Subscription.EMPTY;
        /**
         * Emits when an animation on the tab is complete.
         */
        this._translateTabComplete = new Subject();
        /**
         * Event emitted when the tab begins to animate towards the center as the active tab.
         */
        this._onCentering = new EventEmitter();
        /**
         * Event emitted before the centering of the tab begins.
         */
        this._beforeCentering = new EventEmitter();
        /**
         * Event emitted before the centering of the tab begins.
         */
        this._afterLeavingCenter = new EventEmitter();
        /**
         * Event emitted when the tab completes its animation towards the center.
         */
        this._onCentered = new EventEmitter(true);
        // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.
        /**
         * Duration for the tab's animation.
         */
        this.animationDuration = '500ms';
        if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            (dir) => {
                this._computePositionAnimationState(dir);
                changeDetectorRef.markForCheck();
            }));
        }
        // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
        this._translateTabComplete.pipe(distinctUntilChanged((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            // If the transition to the center is complete, emit an event.
            if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
                this._onCentered.emit();
            }
            if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
                this._afterLeavingCenter.emit();
            }
        }));
    }
    /**
     * The shifted index position of the tab body, where zero represents the active center tab.
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this._positionIndex = position;
        this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     * @return {?}
     */
    ngOnInit() {
        if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();
        this._translateTabComplete.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onTranslateTabStarted(event) {
        /** @type {?} */
        const isCentering = this._isCenterPosition(event.toState);
        this._beforeCentering.emit(isCentering);
        if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    }
    /**
     * The text direction of the containing app.
     * @return {?}
     */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Whether the provided position state is considered center, regardless of origin.
     * @param {?} position
     * @return {?}
     */
    _isCenterPosition(position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    }
    /**
     * Computes the position state that will be used for the tab-body animation trigger.
     * @private
     * @param {?=} dir
     * @return {?}
     */
    _computePositionAnimationState(dir = this._getLayoutDirection()) {
        if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
        }
        else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
        }
        else {
            this._position = 'center';
        }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     * @private
     * @param {?} origin
     * @return {?}
     */
    _computePositionFromOrigin(origin) {
        /** @type {?} */
        const dir = this._getLayoutDirection();
        if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
            return 'left-origin-center';
        }
        return 'right-origin-center';
    }
}
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) { return new (t || _MatTabBodyBase)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
_MatTabBodyBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: _MatTabBodyBase, inputs: { animationDuration: "animationDuration", position: "position", _content: ["content", "_content"], origin: "origin" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _afterLeavingCenter: "_afterLeavingCenter", _onCentered: "_onCentered" } });
/** @nocollapse */
_MatTabBodyBase.ctorParameters = () => [
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
_MatTabBodyBase.propDecorators = {
    _onCentering: [{ type: Output }],
    _beforeCentering: [{ type: Output }],
    _afterLeavingCenter: [{ type: Output }],
    _onCentered: [{ type: Output }],
    _content: [{ type: Input, args: ['content',] }],
    origin: [{ type: Input }],
    animationDuration: [{ type: Input }],
    position: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatTabBodyBase, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { _onCentering: [{
            type: Output
        }], _beforeCentering: [{
            type: Output
        }], _afterLeavingCenter: [{
            type: Output
        }], _onCentered: [{
            type: Output
        }], animationDuration: [{
            type: Input
        }], position: [{
            type: Input
        }], _content: [{
            type: Input,
            args: ['content']
        }], origin: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Current position of the tab-body in the tab-group. Zero means that the tab is visible.
     * @type {?}
     * @private
     */
    _MatTabBodyBase.prototype._positionIndex;
    /**
     * Subscription to the directionality change observable.
     * @type {?}
     * @private
     */
    _MatTabBodyBase.prototype._dirChangeSubscription;
    /**
     * Tab body position state. Used by the animation trigger for the current state.
     * @type {?}
     */
    _MatTabBodyBase.prototype._position;
    /**
     * Emits when an animation on the tab is complete.
     * @type {?}
     */
    _MatTabBodyBase.prototype._translateTabComplete;
    /**
     * Event emitted when the tab begins to animate towards the center as the active tab.
     * @type {?}
     */
    _MatTabBodyBase.prototype._onCentering;
    /**
     * Event emitted before the centering of the tab begins.
     * @type {?}
     */
    _MatTabBodyBase.prototype._beforeCentering;
    /**
     * Event emitted before the centering of the tab begins.
     * @type {?}
     */
    _MatTabBodyBase.prototype._afterLeavingCenter;
    /**
     * Event emitted when the tab completes its animation towards the center.
     * @type {?}
     */
    _MatTabBodyBase.prototype._onCentered;
    /**
     * The portal host inside of this container into which the tab body content will be loaded.
     * @type {?}
     */
    _MatTabBodyBase.prototype._portalHost;
    /**
     * The tab body content to display.
     * @type {?}
     */
    _MatTabBodyBase.prototype._content;
    /**
     * Position that will be used when the tab is immediately becoming visible after creation.
     * @type {?}
     */
    _MatTabBodyBase.prototype.origin;
    /**
     * Duration for the tab's animation.
     * @type {?}
     */
    _MatTabBodyBase.prototype.animationDuration;
    /**
     * @type {?}
     * @private
     */
    _MatTabBodyBase.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    _MatTabBodyBase.prototype._dir;
}
/**
 * Wrapper for the contents of a tab.
 * \@docs-private
 */
export class MatTabBody extends _MatTabBodyBase {
    /**
     * @param {?} elementRef
     * @param {?} dir
     * @param {?} changeDetectorRef
     */
    constructor(elementRef, dir, changeDetectorRef) {
        super(elementRef, dir, changeDetectorRef);
    }
}
MatTabBody.ɵfac = function MatTabBody_Factory(t) { return new (t || MatTabBody)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatTabBody.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTabBody, selectors: [["mat-tab-body"]], viewQuery: function MatTabBody_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(PortalHostDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._portalHost = _t.first);
    } }, hostAttrs: [1, "mat-tab-body"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 6, consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]], template: function MatTabBody_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) { return ctx._onTranslateTabStarted($event); })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) { return ctx._translateTabComplete.next($event); });
        ɵngcc0.ɵɵtemplate(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("@translateTab", ɵngcc0.ɵɵpureFunction2(3, _c1, ctx._position, ɵngcc0.ɵɵpureFunction1(1, _c0, ctx.animationDuration)));
    } }, directives: [MatTabBodyPortal], styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"], encapsulation: 2, data: { animation: [matTabsAnimations.translateTab] } });
/** @nocollapse */
MatTabBody.ctorParameters = () => [
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
MatTabBody.propDecorators = {
    _portalHost: [{ type: ViewChild, args: [PortalHostDirective,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTabBody, [{
        type: Component,
        args: [{
                selector: 'mat-tab-body',
                template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                animations: [matTabsAnimations.translateTab],
                host: {
                    'class': 'mat-tab-body'
                },
                styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, { _portalHost: [{
            type: ViewChild,
            args: [PortalHostDirective]
        }] }); })();
if (false) {
    /** @type {?} */
    MatTabBody.prototype._portalHost;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJvZHkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90YWJzL3RhYi1ib2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFHWixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9EO0FBQ0c7QUFDc0Q7QUFBa0I7Ozs7Ozs7QUEyQjNFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxlQUFlO0FBQUc7QUFBUTtBQUMxQztBQUFtQztBQUNoRDtBQUE2QjtBQUN0QyxJQUdFLFlBQ0Usd0JBQWtELEVBQ2xELGdCQUFrQyxFQUNZLEtBQWlCO0FBQ2xFLElBQUc7QUFDSjtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQXNCLFNBQWU7QUFDckMsUUFBSSxLQUFLLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakUsUUFQa0QsVUFBSyxHQUFM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QUFtQjtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQWE7QUFFaEQsSUFGSixpQ0FBaUU7QUFDbkU7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbnB1dCxcbiAgSW5qZWN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBmb3J3YXJkUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1RlbXBsYXRlUG9ydGFsLCBDZGtQb3J0YWxPdXRsZXQsIFBvcnRhbEhvc3REaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eSwgRGlyZWN0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTdWJzY3JpcHRpb24sIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXRUYWJzQW5pbWF0aW9uc30gZnJvbSAnLi90YWJzLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIGRpc3RpbmN0VW50aWxDaGFuZ2VkfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhlc2UgcG9zaXRpb24gc3RhdGVzIGFyZSB1c2VkIGludGVybmFsbHkgYXMgYW5pbWF0aW9uIHN0YXRlcyBmb3IgdGhlIHRhYiBib2R5LiBTZXR0aW5nIHRoZVxuICogcG9zaXRpb24gc3RhdGUgdG8gbGVmdCwgcmlnaHQsIG9yIGNlbnRlciB3aWxsIHRyYW5zaXRpb24gdGhlIHRhYiBib2R5IGZyb20gaXRzIGN1cnJlbnRcbiAqIHBvc2l0aW9uIHRvIGl0cyByZXNwZWN0aXZlIHN0YXRlLiBJZiB0aGVyZSBpcyBub3QgY3VycmVudCBwb3NpdGlvbiAodm9pZCwgaW4gdGhlIGNhc2Ugb2YgYSBuZXdcbiAqIHRhYiBib2R5KSwgdGhlbiB0aGVyZSB3aWxsIGJlIG5vIHRyYW5zaXRpb24gYW5pbWF0aW9uIHRvIGl0cyBzdGF0ZS5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBhIG5ldyB0YWIgYm9keSB0aGF0IHNob3VsZCBpbW1lZGlhdGVseSBiZSBjZW50ZXJlZCB3aXRoIGFuIGFuaW1hdGluZyB0cmFuc2l0aW9uLFxuICogdGhlbiBsZWZ0LW9yaWdpbi1jZW50ZXIgb3IgcmlnaHQtb3JpZ2luLWNlbnRlciBjYW4gYmUgdXNlZCwgd2hpY2ggd2lsbCB1c2UgbGVmdCBvciByaWdodCBhcyBpdHNcbiAqIHBzdWVkby1wcmlvciBzdGF0ZS5cbiAqL1xuZXhwb3J0IHR5cGUgTWF0VGFiQm9keVBvc2l0aW9uU3RhdGUgPVxuICAgICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICdsZWZ0LW9yaWdpbi1jZW50ZXInIHwgJ3JpZ2h0LW9yaWdpbi1jZW50ZXInO1xuXG4vKipcbiAqIFRoZSBvcmlnaW4gc3RhdGUgaXMgYW4gaW50ZXJuYWxseSB1c2VkIHN0YXRlIHRoYXQgaXMgc2V0IG9uIGEgbmV3IHRhYiBib2R5IGluZGljYXRpbmcgaWYgaXRcbiAqIGJlZ2FuIHRvIHRoZSBsZWZ0IG9yIHJpZ2h0IG9mIHRoZSBwcmlvciBzZWxlY3RlZCBpbmRleC4gRm9yIGV4YW1wbGUsIGlmIHRoZSBzZWxlY3RlZCBpbmRleCB3YXNcbiAqIHNldCB0byAxLCBhbmQgYSBuZXcgdGFiIGlzIGNyZWF0ZWQgYW5kIHNlbGVjdGVkIGF0IGluZGV4IDIsIHRoZW4gdGhlIHRhYiBib2R5IHdvdWxkIGhhdmUgYW5cbiAqIG9yaWdpbiBvZiByaWdodCBiZWNhdXNlIGl0cyBpbmRleCB3YXMgZ3JlYXRlciB0aGFuIHRoZSBwcmlvciBzZWxlY3RlZCBpbmRleC5cbiAqL1xuZXhwb3J0IHR5cGUgTWF0VGFiQm9keU9yaWdpblN0YXRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcblxuLyoqXG4gKiBUaGUgcG9ydGFsIGhvc3QgZGlyZWN0aXZlIGZvciB0aGUgY29udGVudHMgb2YgdGhlIHRhYi5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdFRhYkJvZHlIb3N0XSdcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFiQm9keVBvcnRhbCBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBldmVudHMgZm9yIHdoZW4gdGhlIHRhYiBib2R5IGJlZ2lucyBjZW50ZXJpbmcuICovXG4gIHByaXZhdGUgX2NlbnRlcmluZ1N1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBldmVudHMgZm9yIHdoZW4gdGhlIHRhYiBib2R5IGZpbmlzaGVzIGxlYXZpbmcgZnJvbSBjZW50ZXIgcG9zaXRpb24uICovXG4gIHByaXZhdGUgX2xlYXZpbmdTdWIgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTWF0VGFiQm9keSkpIHByaXZhdGUgX2hvc3Q6IE1hdFRhYkJvZHksXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgYF9kb2N1bWVudGAgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMFxuICAgICAqL1xuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudD86IGFueSkge1xuICAgIHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZiwgX2RvY3VtZW50KTtcbiAgfVxuXG4gIC8qKiBTZXQgaW5pdGlhbCB2aXNpYmlsaXR5IG9yIHNldCB1cCBzdWJzY3JpcHRpb24gZm9yIGNoYW5naW5nIHZpc2liaWxpdHkuICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIgPSB0aGlzLl9ob3N0Ll9iZWZvcmVDZW50ZXJpbmdcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLl9ob3N0Ll9pc0NlbnRlclBvc2l0aW9uKHRoaXMuX2hvc3QuX3Bvc2l0aW9uKSkpXG4gICAgICAuc3Vic2NyaWJlKChpc0NlbnRlcmluZzogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoaXNDZW50ZXJpbmcgJiYgIXRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgICAgIHRoaXMuYXR0YWNoKHRoaXMuX2hvc3QuX2NvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2xlYXZpbmdTdWIgPSB0aGlzLl9ob3N0Ll9hZnRlckxlYXZpbmdDZW50ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQ2xlYW4gdXAgY2VudGVyaW5nIHN1YnNjcmlwdGlvbi4gKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9jZW50ZXJpbmdTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9sZWF2aW5nU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIHdpdGggYWxsIG9mIHRoZSBgTWF0VGFiQm9keWAgZnVuY3Rpb25hbGl0eS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSgpXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9NYXRUYWJCb2R5QmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHRhYi1ib2R5IGluIHRoZSB0YWItZ3JvdXAuIFplcm8gbWVhbnMgdGhhdCB0aGUgdGFiIGlzIHZpc2libGUuICovXG4gIHByaXZhdGUgX3Bvc2l0aW9uSW5kZXg6IG51bWJlcjtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSBkaXJlY3Rpb25hbGl0eSBjaGFuZ2Ugb2JzZXJ2YWJsZS4gKi9cbiAgcHJpdmF0ZSBfZGlyQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBUYWIgYm9keSBwb3NpdGlvbiBzdGF0ZS4gVXNlZCBieSB0aGUgYW5pbWF0aW9uIHRyaWdnZXIgZm9yIHRoZSBjdXJyZW50IHN0YXRlLiAqL1xuICBfcG9zaXRpb246IE1hdFRhYkJvZHlQb3NpdGlvblN0YXRlO1xuXG4gIC8qKiBFbWl0cyB3aGVuIGFuIGFuaW1hdGlvbiBvbiB0aGUgdGFiIGlzIGNvbXBsZXRlLiAqL1xuICBfdHJhbnNsYXRlVGFiQ29tcGxldGUgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB0YWIgYmVnaW5zIHRvIGFuaW1hdGUgdG93YXJkcyB0aGUgY2VudGVyIGFzIHRoZSBhY3RpdmUgdGFiLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgX29uQ2VudGVyaW5nOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIGJlZm9yZSB0aGUgY2VudGVyaW5nIG9mIHRoZSB0YWIgYmVnaW5zLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgX2JlZm9yZUNlbnRlcmluZzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIGJlZm9yZSB0aGUgY2VudGVyaW5nIG9mIHRoZSB0YWIgYmVnaW5zLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgX2FmdGVyTGVhdmluZ0NlbnRlcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHRhYiBjb21wbGV0ZXMgaXRzIGFuaW1hdGlvbiB0b3dhcmRzIHRoZSBjZW50ZXIuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBfb25DZW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPih0cnVlKTtcblxuICAgLyoqIFRoZSBwb3J0YWwgaG9zdCBpbnNpZGUgb2YgdGhpcyBjb250YWluZXIgaW50byB3aGljaCB0aGUgdGFiIGJvZHkgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cbiAgYWJzdHJhY3QgX3BvcnRhbEhvc3Q6IFBvcnRhbEhvc3REaXJlY3RpdmU7XG5cbiAgLyoqIFRoZSB0YWIgYm9keSBjb250ZW50IHRvIGRpc3BsYXkuICovXG4gIEBJbnB1dCgnY29udGVudCcpIF9jb250ZW50OiBUZW1wbGF0ZVBvcnRhbDtcblxuICAvKiogUG9zaXRpb24gdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiB0aGUgdGFiIGlzIGltbWVkaWF0ZWx5IGJlY29taW5nIHZpc2libGUgYWZ0ZXIgY3JlYXRpb24uICovXG4gIEBJbnB1dCgpIG9yaWdpbjogbnVtYmVyIHwgbnVsbDtcblxuICAvLyBOb3RlIHRoYXQgdGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBhbHdheXMgYmUgb3ZlcndyaXR0ZW4gYnkgYE1hdFRhYkJvZHlgLCBidXQgd2UgbmVlZCBvbmVcbiAgLy8gYW55d2F5IHRvIHByZXZlbnQgdGhlIGFuaW1hdGlvbnMgbW9kdWxlIGZyb20gdGhyb3dpbmcgYW4gZXJyb3IgaWYgdGhlIGJvZHkgaXMgdXNlZCBvbiBpdHMgb3duLlxuICAvKiogRHVyYXRpb24gZm9yIHRoZSB0YWIncyBhbmltYXRpb24uICovXG4gIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmcgPSAnNTAwbXMnO1xuXG4gIC8qKiBUaGUgc2hpZnRlZCBpbmRleCBwb3NpdGlvbiBvZiB0aGUgdGFiIGJvZHksIHdoZXJlIHplcm8gcmVwcmVzZW50cyB0aGUgYWN0aXZlIGNlbnRlciB0YWIuICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9zaXRpb25JbmRleCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuX2NvbXB1dGVQb3NpdGlvbkFuaW1hdGlvblN0YXRlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICBpZiAoX2Rpcikge1xuICAgICAgdGhpcy5fZGlyQ2hhbmdlU3Vic2NyaXB0aW9uID0gX2Rpci5jaGFuZ2Uuc3Vic2NyaWJlKChkaXI6IERpcmVjdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl9jb21wdXRlUG9zaXRpb25BbmltYXRpb25TdGF0ZShkaXIpO1xuICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGF0IHdlIGdldCB1bmlxdWUgYW5pbWF0aW9uIGV2ZW50cywgYmVjYXVzZSB0aGUgYC5kb25lYCBjYWxsYmFjayBjYW4gZ2V0XG4gICAgLy8gaW52b2tlZCB0d2ljZSBpbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjQwODQuXG4gICAgdGhpcy5fdHJhbnNsYXRlVGFiQ29tcGxldGUucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHguZnJvbVN0YXRlID09PSB5LmZyb21TdGF0ZSAmJiB4LnRvU3RhdGUgPT09IHkudG9TdGF0ZTtcbiAgICB9KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIC8vIElmIHRoZSB0cmFuc2l0aW9uIHRvIHRoZSBjZW50ZXIgaXMgY29tcGxldGUsIGVtaXQgYW4gZXZlbnQuXG4gICAgICBpZiAodGhpcy5faXNDZW50ZXJQb3NpdGlvbihldmVudC50b1N0YXRlKSAmJiB0aGlzLl9pc0NlbnRlclBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKSkge1xuICAgICAgICB0aGlzLl9vbkNlbnRlcmVkLmVtaXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQ2VudGVyUG9zaXRpb24oZXZlbnQuZnJvbVN0YXRlKSAmJiAhdGhpcy5faXNDZW50ZXJQb3NpdGlvbih0aGlzLl9wb3NpdGlvbikpIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJMZWF2aW5nQ2VudGVyLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBpbml0aWFsaXplZCwgY2hlY2sgaWYgdGhlIGNvbnRlbnQgaXMgY2VudGVyZWQgYW5kIGhhcyBhbiBvcmlnaW4uIElmIHNvLCBzZXQgdGhlXG4gICAqIHNwZWNpYWwgcG9zaXRpb24gc3RhdGVzIHRoYXQgdHJhbnNpdGlvbiB0aGUgdGFiIGZyb20gdGhlIGxlZnQgb3IgcmlnaHQgYmVmb3JlIGNlbnRlcmluZy5cbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiA9PSAnY2VudGVyJyAmJiB0aGlzLm9yaWdpbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHRoaXMuX2NvbXB1dGVQb3NpdGlvbkZyb21PcmlnaW4odGhpcy5vcmlnaW4pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2RpckNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVRhYkNvbXBsZXRlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBfb25UcmFuc2xhdGVUYWJTdGFydGVkKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2VudGVyaW5nID0gdGhpcy5faXNDZW50ZXJQb3NpdGlvbihldmVudC50b1N0YXRlKTtcbiAgICB0aGlzLl9iZWZvcmVDZW50ZXJpbmcuZW1pdChpc0NlbnRlcmluZyk7XG4gICAgaWYgKGlzQ2VudGVyaW5nKSB7XG4gICAgICB0aGlzLl9vbkNlbnRlcmluZy5lbWl0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUaGUgdGV4dCBkaXJlY3Rpb24gb2YgdGhlIGNvbnRhaW5pbmcgYXBwLiAqL1xuICBfZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpciAmJiB0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBwcm92aWRlZCBwb3NpdGlvbiBzdGF0ZSBpcyBjb25zaWRlcmVkIGNlbnRlciwgcmVnYXJkbGVzcyBvZiBvcmlnaW4uICovXG4gIF9pc0NlbnRlclBvc2l0aW9uKHBvc2l0aW9uOiBNYXRUYWJCb2R5UG9zaXRpb25TdGF0ZXxzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcG9zaXRpb24gPT0gJ2NlbnRlcicgfHxcbiAgICAgICAgcG9zaXRpb24gPT0gJ2xlZnQtb3JpZ2luLWNlbnRlcicgfHxcbiAgICAgICAgcG9zaXRpb24gPT0gJ3JpZ2h0LW9yaWdpbi1jZW50ZXInO1xuICB9XG5cbiAgLyoqIENvbXB1dGVzIHRoZSBwb3NpdGlvbiBzdGF0ZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHRhYi1ib2R5IGFuaW1hdGlvbiB0cmlnZ2VyLiAqL1xuICBwcml2YXRlIF9jb21wdXRlUG9zaXRpb25BbmltYXRpb25TdGF0ZShkaXI6IERpcmVjdGlvbiA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpKSB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IGRpciA9PSAnbHRyJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wb3NpdGlvbkluZGV4ID4gMCkge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSBkaXIgPT0gJ2x0cicgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgcG9zaXRpb24gc3RhdGUgYmFzZWQgb24gdGhlIHNwZWNpZmllZCBvcmlnaW4gcG9zaXRpb24uIFRoaXMgaXMgdXNlZCBpZiB0aGVcbiAgICogdGFiIGlzIGJlY29taW5nIHZpc2libGUgaW1tZWRpYXRlbHkgYWZ0ZXIgY3JlYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9jb21wdXRlUG9zaXRpb25Gcm9tT3JpZ2luKG9yaWdpbjogbnVtYmVyKTogTWF0VGFiQm9keVBvc2l0aW9uU3RhdGUge1xuICAgIGNvbnN0IGRpciA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpO1xuXG4gICAgaWYgKChkaXIgPT0gJ2x0cicgJiYgb3JpZ2luIDw9IDApIHx8IChkaXIgPT0gJ3J0bCcgJiYgb3JpZ2luID4gMCkpIHtcbiAgICAgIHJldHVybiAnbGVmdC1vcmlnaW4tY2VudGVyJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3JpZ2h0LW9yaWdpbi1jZW50ZXInO1xuICB9XG59XG5cbi8qKlxuICogV3JhcHBlciBmb3IgdGhlIGNvbnRlbnRzIG9mIGEgdGFiLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdGFiLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ib2R5Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWJvZHkuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgYW5pbWF0aW9uczogW21hdFRhYnNBbmltYXRpb25zLnRyYW5zbGF0ZVRhYl0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LXRhYi1ib2R5JyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJCb2R5IGV4dGVuZHMgX01hdFRhYkJvZHlCYXNlIHtcbiAgQFZpZXdDaGlsZChQb3J0YWxIb3N0RGlyZWN0aXZlKSBfcG9ydGFsSG9zdDogUG9ydGFsSG9zdERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgZGlyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cbn1cbiJdfQ==