/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Inject, InjectionToken, Input, Optional, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Overlay } from './overlay';
import { OverlayConfig } from './overlay-config';
import { FlexibleConnectedPositionStrategy, } from './position/flexible-connected-position-strategy';
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
const defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 * @type {?}
 */
export const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken('cdk-connected-overlay-scroll-strategy');
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} overlay
 * @return {?}
 */
export function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @param {?=} config
     * @return {?}
     */
    (config) => overlay.scrollStrategies.reposition(config));
}
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
export class CdkOverlayOrigin {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) { return new (t || CdkOverlayOrigin)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkOverlayOrigin.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkOverlayOrigin, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
/** @nocollapse */
CdkOverlayOrigin.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkOverlayOrigin, [{
        type: Directive,
        args: [{
                selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                exportAs: 'cdkOverlayOrigin'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
if (false) {
    /**
     * Reference to the element on which the directive is applied.
     * @type {?}
     */
    CdkOverlayOrigin.prototype.elementRef;
}
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
export class CdkConnectedOverlay {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    /**
     * @param {?} _overlay
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} scrollStrategyFactory
     * @param {?} _dir
     */
    constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = Subscription.EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new EventEmitter();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new EventEmitter();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new EventEmitter();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new EventEmitter();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */
        this.overlayKeydown = new EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    /**
     * The offset in pixels for the overlay connection point on the x-axis
     * @return {?}
     */
    get offsetX() { return this._offsetX; }
    /**
     * @param {?} offsetX
     * @return {?}
     */
    set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /**
     * The offset in pixels for the overlay connection point on the y-axis
     * @return {?}
     */
    get offsetY() { return this._offsetY; }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /**
     * Whether or not the overlay should attach a backdrop.
     * @return {?}
     */
    get hasBackdrop() { return this._hasBackdrop; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) { this._hasBackdrop = coerceBooleanProperty(value); }
    /**
     * Whether or not the overlay should be locked when scrolling.
     * @return {?}
     */
    get lockPosition() { return this._lockPosition; }
    /**
     * @param {?} value
     * @return {?}
     */
    set lockPosition(value) { this._lockPosition = coerceBooleanProperty(value); }
    /**
     * Whether the overlay's width and height can be constrained to fit within the viewport.
     * @return {?}
     */
    get flexibleDimensions() { return this._flexibleDimensions; }
    /**
     * @param {?} value
     * @return {?}
     */
    set flexibleDimensions(value) {
        this._flexibleDimensions = coerceBooleanProperty(value);
    }
    /**
     * Whether the overlay can grow after the initial open when flexible positioning is turned on.
     * @return {?}
     */
    get growAfterOpen() { return this._growAfterOpen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set growAfterOpen(value) { this._growAfterOpen = coerceBooleanProperty(value); }
    /**
     * Whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @return {?}
     */
    get push() { return this._push; }
    /**
     * @param {?} value
     * @return {?}
     */
    set push(value) { this._push = coerceBooleanProperty(value); }
    /**
     * The associated overlay reference.
     * @return {?}
     */
    get overlayRef() {
        return this._overlayRef;
    }
    /**
     * The element's layout direction.
     * @return {?}
     */
    get dir() {
        return this._dir ? this._dir.value : 'ltr';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
            if (changes['origin'] && this.open) {
                this._position.apply();
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    }
    /**
     * Creates an overlay
     * @private
     * @return {?}
     */
    _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.overlayKeydown.next(event);
            if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
                event.preventDefault();
                this._detachOverlay();
            }
        }));
    }
    /**
     * Builds the overlay config based on the directive's inputs
     * @private
     * @return {?}
     */
    _buildConfig() {
        /** @type {?} */
        const positionStrategy = this._position =
            this.positionStrategy || this._createPositionStrategy();
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    }
    /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    _updatePositionStrategy(positionStrategy) {
        /** @type {?} */
        const positions = this.positions.map((/**
         * @param {?} currentPosition
         * @return {?}
         */
        currentPosition => ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || this.offsetX,
            offsetY: currentPosition.offsetY || this.offsetY,
            panelClass: currentPosition.panelClass || undefined,
        })));
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition)
            .withTransformOriginOn(this.transformOriginSelector);
    }
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @private
     * @return {?}
     */
    _createPositionStrategy() {
        /** @type {?} */
        const strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe((/**
         * @param {?} p
         * @return {?}
         */
        p => this.positionChange.emit(p)));
        return strategy;
    }
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    _attachOverlay() {
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this.backdropClick.emit(event);
            }));
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
    }
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    _detachOverlay() {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    }
}
CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) { return new (t || CdkConnectedOverlay)(ɵngcc0.ɵɵdirectiveInject(Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
CdkConnectedOverlay.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkConnectedOverlay, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], open: ["cdkConnectedOverlayOpen", "open"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"], push: ["cdkConnectedOverlayPush", "push"], positions: ["cdkConnectedOverlayPositions", "positions"], origin: ["cdkConnectedOverlayOrigin", "origin"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown" }, exportAs: ["cdkConnectedOverlay"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
CdkConnectedOverlay.ctorParameters = () => [
    { type: Overlay },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
CdkConnectedOverlay.propDecorators = {
    origin: [{ type: Input, args: ['cdkConnectedOverlayOrigin',] }],
    positions: [{ type: Input, args: ['cdkConnectedOverlayPositions',] }],
    positionStrategy: [{ type: Input, args: ['cdkConnectedOverlayPositionStrategy',] }],
    offsetX: [{ type: Input, args: ['cdkConnectedOverlayOffsetX',] }],
    offsetY: [{ type: Input, args: ['cdkConnectedOverlayOffsetY',] }],
    width: [{ type: Input, args: ['cdkConnectedOverlayWidth',] }],
    height: [{ type: Input, args: ['cdkConnectedOverlayHeight',] }],
    minWidth: [{ type: Input, args: ['cdkConnectedOverlayMinWidth',] }],
    minHeight: [{ type: Input, args: ['cdkConnectedOverlayMinHeight',] }],
    backdropClass: [{ type: Input, args: ['cdkConnectedOverlayBackdropClass',] }],
    panelClass: [{ type: Input, args: ['cdkConnectedOverlayPanelClass',] }],
    viewportMargin: [{ type: Input, args: ['cdkConnectedOverlayViewportMargin',] }],
    scrollStrategy: [{ type: Input, args: ['cdkConnectedOverlayScrollStrategy',] }],
    open: [{ type: Input, args: ['cdkConnectedOverlayOpen',] }],
    transformOriginSelector: [{ type: Input, args: ['cdkConnectedOverlayTransformOriginOn',] }],
    hasBackdrop: [{ type: Input, args: ['cdkConnectedOverlayHasBackdrop',] }],
    lockPosition: [{ type: Input, args: ['cdkConnectedOverlayLockPosition',] }],
    flexibleDimensions: [{ type: Input, args: ['cdkConnectedOverlayFlexibleDimensions',] }],
    growAfterOpen: [{ type: Input, args: ['cdkConnectedOverlayGrowAfterOpen',] }],
    push: [{ type: Input, args: ['cdkConnectedOverlayPush',] }],
    backdropClick: [{ type: Output }],
    positionChange: [{ type: Output }],
    attach: [{ type: Output }],
    detach: [{ type: Output }],
    overlayKeydown: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkConnectedOverlay, [{
        type: Directive,
        args: [{
                selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                exportAs: 'cdkConnectedOverlay'
            }]
    }], function () { return [{ type: Overlay }, { type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }] }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { viewportMargin: [{
            type: Input,
            args: ['cdkConnectedOverlayViewportMargin']
        }], open: [{
            type: Input,
            args: ['cdkConnectedOverlayOpen']
        }], backdropClick: [{
            type: Output
        }], positionChange: [{
            type: Output
        }], attach: [{
            type: Output
        }], detach: [{
            type: Output
        }], overlayKeydown: [{
            type: Output
        }], scrollStrategy: [{
            type: Input,
            args: ['cdkConnectedOverlayScrollStrategy']
        }], offsetX: [{
            type: Input,
            args: ['cdkConnectedOverlayOffsetX']
        }], offsetY: [{
            type: Input,
            args: ['cdkConnectedOverlayOffsetY']
        }], hasBackdrop: [{
            type: Input,
            args: ['cdkConnectedOverlayHasBackdrop']
        }], lockPosition: [{
            type: Input,
            args: ['cdkConnectedOverlayLockPosition']
        }], flexibleDimensions: [{
            type: Input,
            args: ['cdkConnectedOverlayFlexibleDimensions']
        }], growAfterOpen: [{
            type: Input,
            args: ['cdkConnectedOverlayGrowAfterOpen']
        }], push: [{
            type: Input,
            args: ['cdkConnectedOverlayPush']
        }], positions: [{
            type: Input,
            args: ['cdkConnectedOverlayPositions']
        }], origin: [{
            type: Input,
            args: ['cdkConnectedOverlayOrigin']
        }], positionStrategy: [{
            type: Input,
            args: ['cdkConnectedOverlayPositionStrategy']
        }], width: [{
            type: Input,
            args: ['cdkConnectedOverlayWidth']
        }], height: [{
            type: Input,
            args: ['cdkConnectedOverlayHeight']
        }], minWidth: [{
            type: Input,
            args: ['cdkConnectedOverlayMinWidth']
        }], minHeight: [{
            type: Input,
            args: ['cdkConnectedOverlayMinHeight']
        }], backdropClass: [{
            type: Input,
            args: ['cdkConnectedOverlayBackdropClass']
        }], panelClass: [{
            type: Input,
            args: ['cdkConnectedOverlayPanelClass']
        }], transformOriginSelector: [{
            type: Input,
            args: ['cdkConnectedOverlayTransformOriginOn']
        }] }); })();
if (false) {
    /** @type {?} */
    CdkConnectedOverlay.ngAcceptInputType_hasBackdrop;
    /** @type {?} */
    CdkConnectedOverlay.ngAcceptInputType_lockPosition;
    /** @type {?} */
    CdkConnectedOverlay.ngAcceptInputType_flexibleDimensions;
    /** @type {?} */
    CdkConnectedOverlay.ngAcceptInputType_growAfterOpen;
    /** @type {?} */
    CdkConnectedOverlay.ngAcceptInputType_push;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._templatePortal;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._hasBackdrop;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._lockPosition;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._growAfterOpen;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._flexibleDimensions;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._push;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._backdropSubscription;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._offsetX;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._offsetY;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._position;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._scrollStrategyFactory;
    /**
     * Origin for the connected overlay.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.origin;
    /**
     * Registered connected position pairs.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.positions;
    /**
     * This input overrides the positions input if specified. It lets users pass
     * in arbitrary positioning strategies.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.positionStrategy;
    /**
     * The width of the overlay panel.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.width;
    /**
     * The height of the overlay panel.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.height;
    /**
     * The min width of the overlay panel.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.minWidth;
    /**
     * The min height of the overlay panel.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.minHeight;
    /**
     * The custom class to be set on the backdrop element.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.backdropClass;
    /**
     * The custom class to add to the overlay pane element.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.panelClass;
    /**
     * Margin between the overlay and the viewport edges.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.viewportMargin;
    /**
     * Strategy to be used when handling scroll events while the overlay is open.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.scrollStrategy;
    /**
     * Whether the overlay is open.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.open;
    /**
     * CSS selector which to set the transform origin.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.transformOriginSelector;
    /**
     * Event emitted when the backdrop is clicked.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.backdropClick;
    /**
     * Event emitted when the position has changed.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.positionChange;
    /**
     * Event emitted when the overlay has been attached.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.attach;
    /**
     * Event emitted when the overlay has been detached.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.detach;
    /**
     * Emits when there are keyboard events that are targeted at the overlay.
     * @type {?}
     */
    CdkConnectedOverlay.prototype.overlayKeydown;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    CdkConnectedOverlay.prototype._dir;
}
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
export const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1kaXJlY3RpdmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBWSxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsT0FBTyxFQUVMLGlDQUFpQyxHQUNsQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pEO0FBQUk7QUFHVTtBQUNMOzs7QUFBSSxNQUlQLG1CQUFtQixHQUF3QjtBQUNqRCxJQUFFO0FBQ0YsUUFBSSxPQUFPLEVBQUUsT0FBTztBQUNwQixRQUFJLE9BQU8sRUFBRSxRQUFRO0FBQ3JCLFFBQUksUUFBUSxFQUFFLE9BQU87QUFDckIsUUFBSSxRQUFRLEVBQUUsS0FBSztBQUNuQixLQUFHO0FBQ0gsSUFBRTtBQUNGLFFBQUksT0FBTyxFQUFFLE9BQU87QUFDcEIsUUFBSSxPQUFPLEVBQUUsS0FBSztBQUNsQixRQUFJLFFBQVEsRUFBRSxPQUFPO0FBQ3JC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QUFBZ0I7QUFBUSxJQUcxQyx1Q0FBeUI7QUFBQztBQUN6QjtBQUFpQjtBQUNyQjtBQUFRLElBRUwsbUNBQXdDO0FBQUM7QUFBRTtBQUM5QztBQUFrQjtBQUFzQjtBQUFlO0FBOEsxRCxNQUFNLFVBQVUsc0RBQXNELENBQUMsT0FBZ0I7QUFDdEYsSUFDQztBQUFZO0FBQW1CO0FBQVEsSUFBaEMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFDO0FBQ3JELENBQUM7QUFDRDtBQUNHO0FBQ0g7QUFBYTtBQUFiLE1BQU0sT0FBTyw4Q0FBOEMsR0FBRztBQUM5RCxJQUFFLE9BQU8sRUFBRSxxQ0FBcUM7QUFDaEQsSUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFDakIsSUFBRSxVQUFVLEVBQUUsc0RBQXNEO0FBQ3BFLENBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0VTQ0FQRSwgaGFzTW9kaWZpZXJLZXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1RlbXBsYXRlUG9ydGFsfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7T3ZlcmxheX0gZnJvbSAnLi9vdmVybGF5JztcbmltcG9ydCB7T3ZlcmxheUNvbmZpZ30gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQge092ZXJsYXlSZWZ9IGZyb20gJy4vb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2V9IGZyb20gJy4vcG9zaXRpb24vY29ubmVjdGVkLXBvc2l0aW9uJztcbmltcG9ydCB7XG4gIENvbm5lY3RlZFBvc2l0aW9uLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG59IGZyb20gJy4vcG9zaXRpb24vZmxleGlibGUtY29ubmVjdGVkLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7XG4gIFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneSxcbiAgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnLFxuICBTY3JvbGxTdHJhdGVneSxcbn0gZnJvbSAnLi9zY3JvbGwvaW5kZXgnO1xuXG5cbi8qKiBEZWZhdWx0IHNldCBvZiBwb3NpdGlvbnMgZm9yIHRoZSBvdmVybGF5LiBGb2xsb3dzIHRoZSBiZWhhdmlvciBvZiBhIGRyb3Bkb3duLiAqL1xuY29uc3QgZGVmYXVsdFBvc2l0aW9uTGlzdDogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcbiAge1xuICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgIG9yaWdpblk6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICB7XG4gICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICB7XG4gICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAndG9wJ1xuICB9XG5dO1xuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgZGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIGhhbmRsaW5nIHdoaWxlIHRoZSBjb25uZWN0ZWQgb3ZlcmxheSBpcyBvcGVuLiAqL1xuZXhwb3J0IGNvbnN0IENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1kgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjwoKSA9PiBTY3JvbGxTdHJhdGVneT4oJ2Nkay1jb25uZWN0ZWQtb3ZlcmxheS1zY3JvbGwtc3RyYXRlZ3knKTtcblxuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGZ1bmN0aW9uIENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWShvdmVybGF5OiBPdmVybGF5KTpcbiAgKCkgPT4gU2Nyb2xsU3RyYXRlZ3kge1xuICByZXR1cm4gKGNvbmZpZz86IFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneUNvbmZpZykgPT4gb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oY29uZmlnKTtcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgYXBwbGllZCB0byBhbiBlbGVtZW50IHRvIG1ha2UgaXQgdXNhYmxlIGFzIGFuIG9yaWdpbiBmb3IgYW4gT3ZlcmxheSB1c2luZyBhXG4gKiBDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrLW92ZXJsYXktb3JpZ2luXSwgW292ZXJsYXktb3JpZ2luXSwgW2Nka092ZXJsYXlPcmlnaW5dJyxcbiAgZXhwb3J0QXM6ICdjZGtPdmVybGF5T3JpZ2luJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrT3ZlcmxheU9yaWdpbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgZGlyZWN0aXZlIGlzIGFwcGxpZWQuICovXG4gICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG59XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gZmFjaWxpdGF0ZSBkZWNsYXJhdGl2ZSBjcmVhdGlvbiBvZiBhblxuICogT3ZlcmxheSB1c2luZyBhIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nkay1jb25uZWN0ZWQtb3ZlcmxheV0sIFtjb25uZWN0ZWQtb3ZlcmxheV0sIFtjZGtDb25uZWN0ZWRPdmVybGF5XScsXG4gIGV4cG9ydEFzOiAnY2RrQ29ubmVjdGVkT3ZlcmxheSdcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ29ubmVjdGVkT3ZlcmxheSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuICBwcml2YXRlIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2NrUG9zaXRpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZ3Jvd0FmdGVyT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mbGV4aWJsZURpbWVuc2lvbnMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcHVzaCA9IGZhbHNlO1xuICBwcml2YXRlIF9iYWNrZHJvcFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfb2Zmc2V0WDogbnVtYmVyO1xuICBwcml2YXRlIF9vZmZzZXRZOiBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5RmFjdG9yeTogKCkgPT4gU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgLyoqIE9yaWdpbiBmb3IgdGhlIGNvbm5lY3RlZCBvdmVybGF5LiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW4nKSBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XG5cbiAgLyoqIFJlZ2lzdGVyZWQgY29ubmVjdGVkIHBvc2l0aW9uIHBhaXJzLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMnKSBwb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW107XG5cbiAgLyoqXG4gICAqIFRoaXMgaW5wdXQgb3ZlcnJpZGVzIHRoZSBwb3NpdGlvbnMgaW5wdXQgaWYgc3BlY2lmaWVkLiBJdCBsZXRzIHVzZXJzIHBhc3NcbiAgICogaW4gYXJiaXRyYXJ5IHBvc2l0aW9uaW5nIHN0cmF0ZWdpZXMuXG4gICAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvblN0cmF0ZWd5JykgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuXG4gIC8qKiBUaGUgb2Zmc2V0IGluIHBpeGVscyBmb3IgdGhlIG92ZXJsYXkgY29ubmVjdGlvbiBwb2ludCBvbiB0aGUgeC1heGlzICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheU9mZnNldFgnKVxuICBnZXQgb2Zmc2V0WCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fb2Zmc2V0WDsgfVxuICBzZXQgb2Zmc2V0WChvZmZzZXRYOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXRYID0gb2Zmc2V0WDtcblxuICAgIGlmICh0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLl9wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBvZmZzZXQgaW4gcGl4ZWxzIGZvciB0aGUgb3ZlcmxheSBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSB5LWF4aXMgKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5T2Zmc2V0WScpXG4gIGdldCBvZmZzZXRZKCkgeyByZXR1cm4gdGhpcy5fb2Zmc2V0WTsgfVxuICBzZXQgb2Zmc2V0WShvZmZzZXRZOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuICAgIGlmICh0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLl9wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGgnKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlIZWlnaHQnKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICAvKiogVGhlIG1pbiB3aWR0aCBvZiB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGgnKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5TWluSGVpZ2h0JykgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjdXN0b20gY2xhc3MgdG8gYmUgc2V0IG9uIHRoZSBiYWNrZHJvcCBlbGVtZW50LiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlCYWNrZHJvcENsYXNzJykgYmFja2Ryb3BDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY3VzdG9tIGNsYXNzIHRvIGFkZCB0byB0aGUgb3ZlcmxheSBwYW5lIGVsZW1lbnQuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3MnKSBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKiogTWFyZ2luIGJldHdlZW4gdGhlIG92ZXJsYXkgYW5kIHRoZSB2aWV3cG9ydCBlZGdlcy4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5Vmlld3BvcnRNYXJnaW4nKSB2aWV3cG9ydE1hcmdpbjogbnVtYmVyID0gMDtcblxuICAvKiogU3RyYXRlZ3kgdG8gYmUgdXNlZCB3aGVuIGhhbmRsaW5nIHNjcm9sbCBldmVudHMgd2hpbGUgdGhlIG92ZXJsYXkgaXMgb3Blbi4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3knKSBzY3JvbGxTdHJhdGVneTogU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgaXMgb3Blbi4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5T3BlbicpIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQ1NTIHNlbGVjdG9yIHdoaWNoIHRvIHNldCB0aGUgdHJhbnNmb3JtIG9yaWdpbi4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT24nKSB0cmFuc2Zvcm1PcmlnaW5TZWxlY3Rvcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgb3ZlcmxheSBzaG91bGQgYXR0YWNoIGEgYmFja2Ryb3AuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wJylcbiAgZ2V0IGhhc0JhY2tkcm9wKCkgeyByZXR1cm4gdGhpcy5faGFzQmFja2Ryb3A7IH1cbiAgc2V0IGhhc0JhY2tkcm9wKHZhbHVlOiBhbnkpIHsgdGhpcy5faGFzQmFja2Ryb3AgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBvdmVybGF5IHNob3VsZCBiZSBsb2NrZWQgd2hlbiBzY3JvbGxpbmcuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheUxvY2tQb3NpdGlvbicpXG4gIGdldCBsb2NrUG9zaXRpb24oKSB7IHJldHVybiB0aGlzLl9sb2NrUG9zaXRpb247IH1cbiAgc2V0IGxvY2tQb3NpdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX2xvY2tQb3NpdGlvbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSdzIHdpZHRoIGFuZCBoZWlnaHQgY2FuIGJlIGNvbnN0cmFpbmVkIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlGbGV4aWJsZURpbWVuc2lvbnMnKVxuICBnZXQgZmxleGlibGVEaW1lbnNpb25zKCkgeyByZXR1cm4gdGhpcy5fZmxleGlibGVEaW1lbnNpb25zOyB9XG4gIHNldCBmbGV4aWJsZURpbWVuc2lvbnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbGV4aWJsZURpbWVuc2lvbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGdyb3cgYWZ0ZXIgdGhlIGluaXRpYWwgb3BlbiB3aGVuIGZsZXhpYmxlIHBvc2l0aW9uaW5nIGlzIHR1cm5lZCBvbi4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5R3Jvd0FmdGVyT3BlbicpXG4gIGdldCBncm93QWZ0ZXJPcGVuKCkgeyByZXR1cm4gdGhpcy5fZ3Jvd0FmdGVyT3BlbjsgfVxuICBzZXQgZ3Jvd0FmdGVyT3Blbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9ncm93QWZ0ZXJPcGVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGNhbiBiZSBwdXNoZWQgb24tc2NyZWVuIGlmIG5vbmUgb2YgdGhlIHByb3ZpZGVkIHBvc2l0aW9ucyBmaXQuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2gnKVxuICBnZXQgcHVzaCgpIHsgcmV0dXJuIHRoaXMuX3B1c2g7IH1cbiAgc2V0IHB1c2godmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fcHVzaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLiAqL1xuICBAT3V0cHV0KCkgYmFja2Ryb3BDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwb3NpdGlvbiBoYXMgY2hhbmdlZC4gKi9cbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2U+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBhdHRhY2hlZC4gKi9cbiAgQE91dHB1dCgpIGF0dGFjaCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGRldGFjaGVkLiAqL1xuICBAT3V0cHV0KCkgZGV0YWNoID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZXJlIGFyZSBrZXlib2FyZCBldmVudHMgdGhhdCBhcmUgdGFyZ2V0ZWQgYXQgdGhlIG92ZXJsYXkuICovXG4gIEBPdXRwdXQoKSBvdmVybGF5S2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvLyBUT0RPKGplbGJvdXJuKTogaW5wdXRzIGZvciBzaXplLCBzY3JvbGwgYmVoYXZpb3IsIGFuaW1hdGlvbiwgZXRjLlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgIEBJbmplY3QoQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWSkgc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5OiBhbnksXG4gICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5KSB7XG4gICAgdGhpcy5fdGVtcGxhdGVQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5RmFjdG9yeSA9IHNjcm9sbFN0cmF0ZWd5RmFjdG9yeTtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5fc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5KCk7XG4gIH1cblxuICAvKiogVGhlIGFzc29jaWF0ZWQgb3ZlcmxheSByZWZlcmVuY2UuICovXG4gIGdldCBvdmVybGF5UmVmKCk6IE92ZXJsYXlSZWYge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xuICB9XG5cbiAgLyoqIFRoZSBlbGVtZW50J3MgbGF5b3V0IGRpcmVjdGlvbi4gKi9cbiAgZ2V0IGRpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9iYWNrZHJvcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbikge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLl9wb3NpdGlvbik7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgbWluV2lkdGg6IHRoaXMubWluV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIG1pbkhlaWdodDogdGhpcy5taW5IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNoYW5nZXNbJ29yaWdpbiddICYmIHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbi5hcHBseSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydvcGVuJ10pIHtcbiAgICAgIHRoaXMub3BlbiA/IHRoaXMuX2F0dGFjaE92ZXJsYXkoKSA6IHRoaXMuX2RldGFjaE92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhbiBvdmVybGF5ICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9ucyB8fCAhdGhpcy5wb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9ucyA9IGRlZmF1bHRQb3NpdGlvbkxpc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX2J1aWxkQ29uZmlnKCkpO1xuXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vdmVybGF5S2V5ZG93bi5uZXh0KGV2ZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2RldGFjaE92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBCdWlsZHMgdGhlIG92ZXJsYXkgY29uZmlnIGJhc2VkIG9uIHRoZSBkaXJlY3RpdmUncyBpbnB1dHMgKi9cbiAgcHJpdmF0ZSBfYnVpbGRDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX3Bvc2l0aW9uID1cbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSB8fCB0aGlzLl9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyLFxuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLnNjcm9sbFN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuaGFzQmFja2Ryb3BcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLndpZHRoIHx8IHRoaXMud2lkdGggPT09IDApIHtcbiAgICAgIG92ZXJsYXlDb25maWcud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCB8fCB0aGlzLmhlaWdodCA9PT0gMCkge1xuICAgICAgb3ZlcmxheUNvbmZpZy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5XaWR0aCB8fCB0aGlzLm1pbldpZHRoID09PSAwKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdGhpcy5taW5XaWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5IZWlnaHQgfHwgdGhpcy5taW5IZWlnaHQgPT09IDApIHtcbiAgICAgIG92ZXJsYXlDb25maWcubWluSGVpZ2h0ID0gdGhpcy5taW5IZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmFja2Ryb3BDbGFzcykge1xuICAgICAgb3ZlcmxheUNvbmZpZy5iYWNrZHJvcENsYXNzID0gdGhpcy5iYWNrZHJvcENsYXNzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhbmVsQ2xhc3MpIHtcbiAgICAgIG92ZXJsYXlDb25maWcucGFuZWxDbGFzcyA9IHRoaXMucGFuZWxDbGFzcztcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBzdGF0ZSBvZiBhIHBvc2l0aW9uIHN0cmF0ZWd5LCBiYXNlZCBvbiB0aGUgdmFsdWVzIG9mIHRoZSBkaXJlY3RpdmUgaW5wdXRzLiAqL1xuICBwcml2YXRlIF91cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkge1xuICAgIGNvbnN0IHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IHRoaXMucG9zaXRpb25zLm1hcChjdXJyZW50UG9zaXRpb24gPT4gKHtcbiAgICAgIG9yaWdpblg6IGN1cnJlbnRQb3NpdGlvbi5vcmlnaW5YLFxuICAgICAgb3JpZ2luWTogY3VycmVudFBvc2l0aW9uLm9yaWdpblksXG4gICAgICBvdmVybGF5WDogY3VycmVudFBvc2l0aW9uLm92ZXJsYXlYLFxuICAgICAgb3ZlcmxheVk6IGN1cnJlbnRQb3NpdGlvbi5vdmVybGF5WSxcbiAgICAgIG9mZnNldFg6IGN1cnJlbnRQb3NpdGlvbi5vZmZzZXRYIHx8IHRoaXMub2Zmc2V0WCxcbiAgICAgIG9mZnNldFk6IGN1cnJlbnRQb3NpdGlvbi5vZmZzZXRZIHx8IHRoaXMub2Zmc2V0WSxcbiAgICAgIHBhbmVsQ2xhc3M6IGN1cnJlbnRQb3NpdGlvbi5wYW5lbENsYXNzIHx8IHVuZGVmaW5lZCxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25TdHJhdGVneVxuICAgICAgLnNldE9yaWdpbih0aGlzLm9yaWdpbi5lbGVtZW50UmVmKVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModGhpcy5mbGV4aWJsZURpbWVuc2lvbnMpXG4gICAgICAud2l0aFB1c2godGhpcy5wdXNoKVxuICAgICAgLndpdGhHcm93QWZ0ZXJPcGVuKHRoaXMuZ3Jvd0FmdGVyT3BlbilcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4odGhpcy52aWV3cG9ydE1hcmdpbilcbiAgICAgIC53aXRoTG9ja2VkUG9zaXRpb24odGhpcy5sb2NrUG9zaXRpb24pXG4gICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKHRoaXMudHJhbnNmb3JtT3JpZ2luU2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IG9mIHRoZSBvdmVybGF5IHRvIGJlIHNldCBvbiB0aGUgb3ZlcmxheSBjb25maWcgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5vcmlnaW4uZWxlbWVudFJlZik7XG5cbiAgICB0aGlzLl91cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHN0cmF0ZWd5KTtcbiAgICBzdHJhdGVneS5wb3NpdGlvbkNoYW5nZXMuc3Vic2NyaWJlKHAgPT4gdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHApKTtcblxuICAgIHJldHVybiBzdHJhdGVneTtcbiAgfVxuXG4gIC8qKiBBdHRhY2hlcyB0aGUgb3ZlcmxheSBhbmQgc3Vic2NyaWJlcyB0byBiYWNrZHJvcCBjbGlja3MgaWYgYmFja2Ryb3AgZXhpc3RzICovXG4gIHByaXZhdGUgX2F0dGFjaE92ZXJsYXkoKSB7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb3ZlcmxheSBzaXplLCBpbiBjYXNlIHRoZSBkaXJlY3RpdmUncyBpbnB1dHMgaGF2ZSBjaGFuZ2VkXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmdldENvbmZpZygpLmhhc0JhY2tkcm9wID0gdGhpcy5oYXNCYWNrZHJvcDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fdGVtcGxhdGVQb3J0YWwpO1xuICAgICAgdGhpcy5hdHRhY2guZW1pdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0JhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcFN1YnNjcmlwdGlvbiA9IHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGljay5lbWl0KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZXRhY2hlcyB0aGUgb3ZlcmxheSBhbmQgdW5zdWJzY3JpYmVzIHRvIGJhY2tkcm9wIGNsaWNrcyBpZiBiYWNrZHJvcCBleGlzdHMgKi9cbiAgcHJpdmF0ZSBfZGV0YWNoT3ZlcmxheSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuZGV0YWNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9iYWNrZHJvcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hhc0JhY2tkcm9wOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2NrUG9zaXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZsZXhpYmxlRGltZW5zaW9uczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ3Jvd0FmdGVyT3BlbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcHVzaDogQm9vbGVhbklucHV0O1xufVxuXG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZKG92ZXJsYXk6IE92ZXJsYXkpOlxuICAgICgpID0+IFJlcG9zaXRpb25TY3JvbGxTdHJhdGVneSB7XG4gIHJldHVybiAoKSA9PiBvdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1ksXG4gIGRlcHM6IFtPdmVybGF5XSxcbiAgdXNlRmFjdG9yeTogQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==