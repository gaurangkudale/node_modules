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
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
var defaultPositionList = [
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
/** Injection token that determines the scroll handling while the connected overlay is open. */
export var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken('cdk-connected-overlay-scroll-strategy');
/** @docs-private @deprecated @breaking-change 8.0.0 */
export function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
    return function (config) { return overlay.scrollStrategies.reposition(config); };
}
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
        this.elementRef = elementRef;
    }
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) { return new (t || CdkOverlayOrigin)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkOverlayOrigin.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkOverlayOrigin, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkOverlayOrigin, [{
        type: Directive,
        args: [{
                selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                exportAs: 'cdkOverlayOrigin'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return CdkOverlayOrigin;
}());
export { CdkOverlayOrigin };
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = Subscription.EMPTY;
        /** Margin between the overlay and the viewport edges. */
        this.viewportMargin = 0;
        /** Whether the overlay is open. */
        this.open = false;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new EventEmitter();
        /** Event emitted when the position has changed. */
        this.positionChange = new EventEmitter();
        /** Event emitted when the overlay has been attached. */
        this.attach = new EventEmitter();
        /** Event emitted when the overlay has been detached. */
        this.detach = new EventEmitter();
        /** Emits when there are keyboard events that are targeted at the overlay. */
        this.overlayKeydown = new EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: function () { return this._offsetX; },
        set: function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: function () { return this._offsetY; },
        set: function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._updatePositionStrategy(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: function () { return this._hasBackdrop; },
        set: function (value) { this._hasBackdrop = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        /** Whether or not the overlay should be locked when scrolling. */
        get: function () { return this._lockPosition; },
        set: function (value) { this._lockPosition = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDimensions", {
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */
        get: function () { return this._flexibleDimensions; },
        set: function (value) {
            this._flexibleDimensions = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
        get: function () { return this._growAfterOpen; },
        set: function (value) { this._growAfterOpen = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
        get: function () { return this._push; },
        set: function (value) { this._push = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    CdkConnectedOverlay.prototype.ngOnDestroy = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.prototype.ngOnChanges = function (changes) {
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
    };
    /** Creates an overlay */
    CdkConnectedOverlay.prototype._createOverlay = function () {
        var _this = this;
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe(function (event) {
            _this.overlayKeydown.next(event);
            if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
                event.preventDefault();
                _this._detachOverlay();
            }
        });
    };
    /** Builds the overlay config based on the directive's inputs */
    CdkConnectedOverlay.prototype._buildConfig = function () {
        var positionStrategy = this._position =
            this.positionStrategy || this._createPositionStrategy();
        var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
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
    };
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    CdkConnectedOverlay.prototype._updatePositionStrategy = function (positionStrategy) {
        var _this = this;
        var positions = this.positions.map(function (currentPosition) { return ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || _this.offsetX,
            offsetY: currentPosition.offsetY || _this.offsetY,
            panelClass: currentPosition.panelClass || undefined,
        }); });
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition)
            .withTransformOriginOn(this.transformOriginSelector);
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    CdkConnectedOverlay.prototype._createPositionStrategy = function () {
        var _this = this;
        var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    CdkConnectedOverlay.prototype._attachOverlay = function () {
        var _this = this;
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
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    CdkConnectedOverlay.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
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
CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) { return new (t || CdkConnectedOverlay)(ɵngcc0.ɵɵdirectiveInject(Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
CdkConnectedOverlay.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkConnectedOverlay, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], open: ["cdkConnectedOverlayOpen", "open"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"], push: ["cdkConnectedOverlayPush", "push"], positions: ["cdkConnectedOverlayPositions", "positions"], origin: ["cdkConnectedOverlayOrigin", "origin"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown" }, exportAs: ["cdkConnectedOverlay"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
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
    return CdkConnectedOverlay;
}());
export { CdkConnectedOverlay };
/** @docs-private */
export function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** @docs-private */
export var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1kaXJlY3RpdmVzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQVksY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4sV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFFTCxpQ0FBaUMsR0FDbEMsTUFBTSxpREFBaUQsQ0FBQztBQVF6RCxvRkFBb0Y7OztBQUNwRixJQUFNLG1CQUFtQixHQUF3QjtBQUNqRCxJQUFFO0FBQ0YsUUFBSSxPQUFPLEVBQUUsT0FBTztBQUNwQixRQUFJLE9BQU8sRUFBRSxRQUFRO0FBQ3JCLFFBQUksUUFBUSxFQUFFLE9BQU87QUFDckIsUUFBSSxRQUFRLEVBQUUsS0FBSztBQUNuQixLQUFHO0FBQ0gsSUFBRTtBQUNGLFFBQUksT0FBTyxFQUFFLE9BQU87QUFDcEIsUUFBSSxPQUFPLEVBQUUsS0FBSztBQUNs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LFNBQUMsK0JBQStCO0FBQU8saUNBRzVDLEtBQUssU0FBQyxtQ0FBbUM7QUFBTyxpQ0FHaEQsS0FBSyxTQUFDLG1DQUFtQztBQUFPLHVCQUdoRCxLQUFLLFNBQUMseUJBQXlCO0FBQU8sMENBR3RDLEtBQUssU0FBQyxzQ0FBc0M7QUFBTyw4QkFHbkQsS0FBSyxTQUFDLGdDQUFnQztBQUNwQywrQkFJRixLQUFLLFNBQUMsaUNBQWlDO0FBQ3JDLHFDQUlGLEtBQUssU0FBQyx1Q0FBdUM7QUFDM0MsZ0NBTUYsS0FBSyxTQUFDLGtDQUFrQztBQUN0Qyx1QkFJRixLQUFLLFNBQUMseUJBQXlCO0FBQzdCLGdDQUlGLE1BQU07QUFBSyxpQ0FHWCxNQUFNO0FBQUsseUJBR1gsTUFBTTtBQUFLLHlCQUdYLE1BQU07QUFBSyxpQ0FHWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBb0xwQiwwQkFBQztBQUVELENBRkMsQUE5U0QsSUE4U0M7QUFDRCxTQTNTYSxtQkFBbUI7QUE2U2hDLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsc0RBQXNELENBQUMsT0FBZ0I7QUFDdEYsSUFDQyxPQUFPLGNBQU0sT0FBQSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQXJDLENBQXFDLENBQUM7QUFDckQsQ0FBQztBQUVELG9CQUFvQjtBQUNwQixNQUFNLENBQUMsSUFBTSw4Q0FBOEMsR0FBRztBQUM5RCxJQUFFLE9BQU8sRUFBRSxxQ0FBcUM7QUFDaEQsSUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFDakIsSUFBRSxVQUFVLEVBQUUsc0RBQXNEO0FBQ3BFLENBQUMsQ0FBQztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RVNDQVBFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPdmVybGF5fSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHtPdmVybGF5Q29uZmlnfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7T3ZlcmxheVJlZn0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5pbXBvcnQge0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZX0gZnJvbSAnLi9wb3NpdGlvbi9jb25uZWN0ZWQtcG9zaXRpb24nO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGVkUG9zaXRpb24sXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbn0gZnJvbSAnLi9wb3NpdGlvbi9mbGV4aWJsZS1jb25uZWN0ZWQtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtcbiAgUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5LFxuICBSZXBvc2l0aW9uU2Nyb2xsU3RyYXRlZ3lDb25maWcsXG4gIFNjcm9sbFN0cmF0ZWd5LFxufSBmcm9tICcuL3Njcm9sbC9pbmRleCc7XG5cblxuLyoqIERlZmF1bHQgc2V0IG9mIHBvc2l0aW9ucyBmb3IgdGhlIG92ZXJsYXkuIEZvbGxvd3MgdGhlIGJlaGF2aW9yIG9mIGEgZHJvcGRvd24uICovXG5jb25zdCBkZWZhdWx0UG9zaXRpb25MaXN0OiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xuICB7XG4gICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ3RvcCdcbiAgfSxcbiAge1xuICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gIHtcbiAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnXG4gIH1cbl07XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBkZXRlcm1pbmVzIHRoZSBzY3JvbGwgaGFuZGxpbmcgd2hpbGUgdGhlIGNvbm5lY3RlZCBvdmVybGF5IGlzIG9wZW4uICovXG5leHBvcnQgY29uc3QgQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWSA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPCgpID0+IFNjcm9sbFN0cmF0ZWd5PignY2RrLWNvbm5lY3RlZC1vdmVybGF5LXNjcm9sbC1zdHJhdGVneScpO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZnVuY3Rpb24gQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9GQUNUT1JZKG92ZXJsYXk6IE92ZXJsYXkpOlxuICAoKSA9PiBTY3JvbGxTdHJhdGVneSB7XG4gIHJldHVybiAoY29uZmlnPzogUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5Q29uZmlnKSA9PiBvdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbihjb25maWcpO1xufVxuXG4vKipcbiAqIERpcmVjdGl2ZSBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgdG8gbWFrZSBpdCB1c2FibGUgYXMgYW4gb3JpZ2luIGZvciBhbiBPdmVybGF5IHVzaW5nIGFcbiAqIENvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGstb3ZlcmxheS1vcmlnaW5dLCBbb3ZlcmxheS1vcmlnaW5dLCBbY2RrT3ZlcmxheU9yaWdpbl0nLFxuICBleHBvcnRBczogJ2Nka092ZXJsYXlPcmlnaW4nLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtPdmVybGF5T3JpZ2luIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSBkaXJlY3RpdmUgaXMgYXBwbGllZC4gKi9cbiAgICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cbn1cblxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBmYWNpbGl0YXRlIGRlY2xhcmF0aXZlIGNyZWF0aW9uIG9mIGFuXG4gKiBPdmVybGF5IHVzaW5nIGEgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrLWNvbm5lY3RlZC1vdmVybGF5XSwgW2Nvbm5lY3RlZC1vdmVybGF5XSwgW2Nka0Nvbm5lY3RlZE92ZXJsYXldJyxcbiAgZXhwb3J0QXM6ICdjZGtDb25uZWN0ZWRPdmVybGF5J1xufSlcbmV4cG9ydCBjbGFzcyBDZGtDb25uZWN0ZWRPdmVybGF5IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIF90ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG4gIHByaXZhdGUgX2hhc0JhY2tkcm9wID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvY2tQb3NpdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ncm93QWZ0ZXJPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2ZsZXhpYmxlRGltZW5zaW9ucyA9IGZhbHNlO1xuICBwcml2YXRlIF9wdXNoID0gZmFsc2U7XG4gIHByaXZhdGUgX2JhY2tkcm9wU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9vZmZzZXRYOiBudW1iZXI7XG4gIHByaXZhdGUgX29mZnNldFk6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5OiAoKSA9PiBTY3JvbGxTdHJhdGVneTtcblxuICAvKiogT3JpZ2luIGZvciB0aGUgY29ubmVjdGVkIG92ZXJsYXkuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbicpIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcblxuICAvKiogUmVnaXN0ZXJlZCBjb25uZWN0ZWQgcG9zaXRpb24gcGFpcnMuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucycpIHBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXTtcblxuICAvKipcbiAgICogVGhpcyBpbnB1dCBvdmVycmlkZXMgdGhlIHBvc2l0aW9ucyBpbnB1dCBpZiBzcGVjaWZpZWQuIEl0IGxldHMgdXNlcnMgcGFzc1xuICAgKiBpbiBhcmJpdHJhcnkgcG9zaXRpb25pbmcgc3RyYXRlZ2llcy5cbiAgICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uU3RyYXRlZ3knKSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG5cbiAgLyoqIFRoZSBvZmZzZXQgaW4gcGl4ZWxzIGZvciB0aGUgb3ZlcmxheSBjb25uZWN0aW9uIHBvaW50IG9uIHRoZSB4LWF4aXMgKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5T2Zmc2V0WCcpXG4gIGdldCBvZmZzZXRYKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9vZmZzZXRYOyB9XG4gIHNldCBvZmZzZXRYKG9mZnNldFg6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFggPSBvZmZzZXRYO1xuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl91cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIG9mZnNldCBpbiBwaXhlbHMgZm9yIHRoZSBvdmVybGF5IGNvbm5lY3Rpb24gcG9pbnQgb24gdGhlIHktYXhpcyAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZJylcbiAgZ2V0IG9mZnNldFkoKSB7IHJldHVybiB0aGlzLl9vZmZzZXRZOyB9XG4gIHNldCBvZmZzZXRZKG9mZnNldFk6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFkgPSBvZmZzZXRZO1xuXG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl91cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIHdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aCcpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBoZWlnaHQgb2YgdGhlIG92ZXJsYXkgcGFuZWwuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheUhlaWdodCcpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aCcpIG1pbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5IZWlnaHQnKSBtaW5IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICAvKiogVGhlIGN1c3RvbSBjbGFzcyB0byBiZSBzZXQgb24gdGhlIGJhY2tkcm9wIGVsZW1lbnQuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheUJhY2tkcm9wQ2xhc3MnKSBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjdXN0b20gY2xhc3MgdG8gYWRkIHRvIHRoZSBvdmVybGF5IHBhbmUgZWxlbWVudC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzcycpIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKiBNYXJnaW4gYmV0d2VlbiB0aGUgb3ZlcmxheSBhbmQgdGhlIHZpZXdwb3J0IGVkZ2VzLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlWaWV3cG9ydE1hcmdpbicpIHZpZXdwb3J0TWFyZ2luOiBudW1iZXIgPSAwO1xuXG4gIC8qKiBTdHJhdGVneSB0byBiZSB1c2VkIHdoZW4gaGFuZGxpbmcgc2Nyb2xsIGV2ZW50cyB3aGlsZSB0aGUgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlTY3JvbGxTdHJhdGVneScpIHNjcm9sbFN0cmF0ZWd5OiBTY3JvbGxTdHJhdGVneTtcblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuJykgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBDU1Mgc2VsZWN0b3Igd2hpY2ggdG8gc2V0IHRoZSB0cmFuc2Zvcm0gb3JpZ2luLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5PbicpIHRyYW5zZm9ybU9yaWdpblNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBvdmVybGF5IHNob3VsZCBhdHRhY2ggYSBiYWNrZHJvcC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3AnKVxuICBnZXQgaGFzQmFja2Ryb3AoKSB7IHJldHVybiB0aGlzLl9oYXNCYWNrZHJvcDsgfVxuICBzZXQgaGFzQmFja2Ryb3AodmFsdWU6IGFueSkgeyB0aGlzLl9oYXNCYWNrZHJvcCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIGxvY2tlZCB3aGVuIHNjcm9sbGluZy4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5TG9ja1Bvc2l0aW9uJylcbiAgZ2V0IGxvY2tQb3NpdGlvbigpIHsgcmV0dXJuIHRoaXMuX2xvY2tQb3NpdGlvbjsgfVxuICBzZXQgbG9ja1Bvc2l0aW9uKHZhbHVlOiBhbnkpIHsgdGhpcy5fbG9ja1Bvc2l0aW9uID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5J3Mgd2lkdGggYW5kIGhlaWdodCBjYW4gYmUgY29uc3RyYWluZWQgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuICovXG4gIEBJbnB1dCgnY2RrQ29ubmVjdGVkT3ZlcmxheUZsZXhpYmxlRGltZW5zaW9ucycpXG4gIGdldCBmbGV4aWJsZURpbWVuc2lvbnMoKSB7IHJldHVybiB0aGlzLl9mbGV4aWJsZURpbWVuc2lvbnM7IH1cbiAgc2V0IGZsZXhpYmxlRGltZW5zaW9ucyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZsZXhpYmxlRGltZW5zaW9ucyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgb3ZlcmxheSBjYW4gZ3JvdyBhZnRlciB0aGUgaW5pdGlhbCBvcGVuIHdoZW4gZmxleGlibGUgcG9zaXRpb25pbmcgaXMgdHVybmVkIG9uLiAqL1xuICBASW5wdXQoJ2Nka0Nvbm5lY3RlZE92ZXJsYXlHcm93QWZ0ZXJPcGVuJylcbiAgZ2V0IGdyb3dBZnRlck9wZW4oKSB7IHJldHVybiB0aGlzLl9ncm93QWZ0ZXJPcGVuOyB9XG4gIHNldCBncm93QWZ0ZXJPcGVuKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2dyb3dBZnRlck9wZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG92ZXJsYXkgY2FuIGJlIHB1c2hlZCBvbi1zY3JlZW4gaWYgbm9uZSBvZiB0aGUgcHJvdmlkZWQgcG9zaXRpb25zIGZpdC4gKi9cbiAgQElucHV0KCdjZGtDb25uZWN0ZWRPdmVybGF5UHVzaCcpXG4gIGdldCBwdXNoKCkgeyByZXR1cm4gdGhpcy5fcHVzaDsgfVxuICBzZXQgcHVzaCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9wdXNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuICovXG4gIEBPdXRwdXQoKSBiYWNrZHJvcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcG9zaXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZT4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGF0dGFjaGVkLiAqL1xuICBAT3V0cHV0KCkgYXR0YWNoID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG92ZXJsYXkgaGFzIGJlZW4gZGV0YWNoZWQuICovXG4gIEBPdXRwdXQoKSBkZXRhY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlcmUgYXJlIGtleWJvYXJkIGV2ZW50cyB0aGF0IGFyZSB0YXJnZXRlZCBhdCB0aGUgb3ZlcmxheS4gKi9cbiAgQE91dHB1dCgpIG92ZXJsYXlLZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuXG4gIC8vIFRPRE8oamVsYm91cm4pOiBpbnB1dHMgZm9yIHNpemUsIHNjcm9sbCBiZWhhdmlvciwgYW5pbWF0aW9uLCBldGMuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgQEluamVjdChDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneUZhY3Rvcnk6IGFueSxcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHkpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5fc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5ID0gc2Nyb2xsU3RyYXRlZ3lGYWN0b3J5O1xuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLl9zY3JvbGxTdHJhdGVneUZhY3RvcnkoKTtcbiAgfVxuXG4gIC8qKiBUaGUgYXNzb2NpYXRlZCBvdmVybGF5IHJlZmVyZW5jZS4gKi9cbiAgZ2V0IG92ZXJsYXlSZWYoKTogT3ZlcmxheVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWY7XG4gIH1cblxuICAvKiogVGhlIGVsZW1lbnQncyBsYXlvdXQgZGlyZWN0aW9uLiAqL1xuICBnZXQgZGlyKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6ICdsdHInO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2JhY2tkcm9wU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl91cGRhdGVQb3NpdGlvblN0cmF0ZWd5KHRoaXMuX3Bvc2l0aW9uKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBtaW5XaWR0aDogdGhpcy5taW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgbWluSGVpZ2h0OiB0aGlzLm1pbkhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY2hhbmdlc1snb3JpZ2luJ10gJiYgdGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLmFwcGx5KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ29wZW4nXSkge1xuICAgICAgdGhpcy5vcGVuID8gdGhpcy5fYXR0YWNoT3ZlcmxheSgpIDogdGhpcy5fZGV0YWNoT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGFuIG92ZXJsYXkgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb25zIHx8ICF0aGlzLnBvc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucG9zaXRpb25zID0gZGVmYXVsdFBvc2l0aW9uTGlzdDtcbiAgICB9XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fYnVpbGRDb25maWcoKSk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlLZXlkb3duLm5leHQoZXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShldmVudCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fZGV0YWNoT3ZlcmxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEJ1aWxkcyB0aGUgb3ZlcmxheSBjb25maWcgYmFzZWQgb24gdGhlIGRpcmVjdGl2ZSdzIGlucHV0cyAqL1xuICBwcml2YXRlIF9idWlsZENvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fcG9zaXRpb24gPVxuICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5IHx8IHRoaXMuX2NyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKTtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIsXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3ksXG4gICAgICBoYXNCYWNrZHJvcDogdGhpcy5oYXNCYWNrZHJvcFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMud2lkdGggfHwgdGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgb3ZlcmxheUNvbmZpZy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGVpZ2h0IHx8IHRoaXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbldpZHRoIHx8IHRoaXMubWluV2lkdGggPT09IDApIHtcbiAgICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0aGlzLm1pbldpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbkhlaWdodCB8fCB0aGlzLm1pbkhlaWdodCA9PT0gMCkge1xuICAgICAgb3ZlcmxheUNvbmZpZy5taW5IZWlnaHQgPSB0aGlzLm1pbkhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iYWNrZHJvcENsYXNzKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLmJhY2tkcm9wQ2xhc3MgPSB0aGlzLmJhY2tkcm9wQ2xhc3M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWxDbGFzcykge1xuICAgICAgb3ZlcmxheUNvbmZpZy5wYW5lbENsYXNzID0gdGhpcy5wYW5lbENsYXNzO1xuICAgIH1cblxuICAgIHJldHVybiBvdmVybGF5Q29uZmlnO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIGEgcG9zaXRpb24gc3RyYXRlZ3ksIGJhc2VkIG9uIHRoZSB2YWx1ZXMgb2YgdGhlIGRpcmVjdGl2ZSBpbnB1dHMuICovXG4gIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kocG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KSB7XG4gICAgY29uc3QgcG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gdGhpcy5wb3NpdGlvbnMubWFwKGN1cnJlbnRQb3NpdGlvbiA9PiAoe1xuICAgICAgb3JpZ2luWDogY3VycmVudFBvc2l0aW9uLm9yaWdpblgsXG4gICAgICBvcmlnaW5ZOiBjdXJyZW50UG9zaXRpb24ub3JpZ2luWSxcbiAgICAgIG92ZXJsYXlYOiBjdXJyZW50UG9zaXRpb24ub3ZlcmxheVgsXG4gICAgICBvdmVybGF5WTogY3VycmVudFBvc2l0aW9uLm92ZXJsYXlZLFxuICAgICAgb2Zmc2V0WDogY3VycmVudFBvc2l0aW9uLm9mZnNldFggfHwgdGhpcy5vZmZzZXRYLFxuICAgICAgb2Zmc2V0WTogY3VycmVudFBvc2l0aW9uLm9mZnNldFkgfHwgdGhpcy5vZmZzZXRZLFxuICAgICAgcGFuZWxDbGFzczogY3VycmVudFBvc2l0aW9uLnBhbmVsQ2xhc3MgfHwgdW5kZWZpbmVkLFxuICAgIH0pKTtcblxuICAgIHJldHVybiBwb3NpdGlvblN0cmF0ZWd5XG4gICAgICAuc2V0T3JpZ2luKHRoaXMub3JpZ2luLmVsZW1lbnRSZWYpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyh0aGlzLmZsZXhpYmxlRGltZW5zaW9ucylcbiAgICAgIC53aXRoUHVzaCh0aGlzLnB1c2gpXG4gICAgICAud2l0aEdyb3dBZnRlck9wZW4odGhpcy5ncm93QWZ0ZXJPcGVuKVxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbih0aGlzLnZpZXdwb3J0TWFyZ2luKVxuICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbih0aGlzLmxvY2tQb3NpdGlvbilcbiAgICAgIC53aXRoVHJhbnNmb3JtT3JpZ2luT24odGhpcy50cmFuc2Zvcm1PcmlnaW5TZWxlY3Rvcik7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgcG9zaXRpb24gc3RyYXRlZ3kgb2YgdGhlIG92ZXJsYXkgdG8gYmUgc2V0IG9uIHRoZSBvdmVybGF5IGNvbmZpZyAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLm9yaWdpbi5lbGVtZW50UmVmKTtcblxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uU3RyYXRlZ3koc3RyYXRlZ3kpO1xuICAgIHN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlcy5zdWJzY3JpYmUocCA9PiB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQocCkpO1xuXG4gICAgcmV0dXJuIHN0cmF0ZWd5O1xuICB9XG5cbiAgLyoqIEF0dGFjaGVzIHRoZSBvdmVybGF5IGFuZCBzdWJzY3JpYmVzIHRvIGJhY2tkcm9wIGNsaWNrcyBpZiBiYWNrZHJvcCBleGlzdHMgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXBkYXRlIHRoZSBvdmVybGF5IHNpemUsIGluIGNhc2UgdGhlIGRpcmVjdGl2ZSdzIGlucHV0cyBoYXZlIGNoYW5nZWRcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuaGFzQmFja2Ryb3AgPSB0aGlzLmhhc0JhY2tkcm9wO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCh0aGlzLl90ZW1wbGF0ZVBvcnRhbCk7XG4gICAgICB0aGlzLmF0dGFjaC5lbWl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wU3Vic2NyaXB0aW9uID0gdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBvdmVybGF5IGFuZCB1bnN1YnNjcmliZXMgdG8gYmFja2Ryb3AgY2xpY2tzIGlmIGJhY2tkcm9wIGV4aXN0cyAqL1xuICBwcml2YXRlIF9kZXRhY2hPdmVybGF5KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5kZXRhY2guZW1pdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2JhY2tkcm9wU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzQmFja2Ryb3A6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvY2tQb3NpdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmxleGlibGVEaW1lbnNpb25zOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ncm93QWZ0ZXJPcGVuOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wdXNoOiBCb29sZWFuSW5wdXQ7XG59XG5cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6XG4gICAgKCkgPT4gUmVwb3NpdGlvblNjcm9sbFN0cmF0ZWd5IHtcbiAgcmV0dXJuICgpID0+IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWSxcbiAgZGVwczogW092ZXJsYXldLFxuICB1c2VGYWN0b3J5OiBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19