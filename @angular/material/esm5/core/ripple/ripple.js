/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional, } from '@angular/core';
import { RippleRenderer } from './ripple-renderer';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/** Injection token that can be used to specify the global ripple options. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken('mat-ripple-global-options');
var MatRipple = /** @class */ (function () {
    function MatRipple(_elementRef, ngZone, platform, globalOptions, animationMode) {
        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /** Whether ripple directive is initialized and the input bindings are set. */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        if (animationMode === 'NoopAnimations') {
            this._globalOptions.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    Object.defineProperty(MatRipple.prototype, "disabled", {
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = value;
            this._setupTriggerEventsIfEnabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRipple.prototype, "trigger", {
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         */
        get: function () { return this._trigger || this._elementRef.nativeElement; },
        set: function (trigger) {
            this._trigger = trigger;
            this._setupTriggerEventsIfEnabled();
        },
        enumerable: true,
        configurable: true
    });
    MatRipple.prototype.ngOnInit = function () {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    };
    MatRipple.prototype.ngOnDestroy = function () {
        this._rippleRenderer._removeTriggerEvents();
    };
    /** Fades out all currently showing ripple elements. */
    MatRipple.prototype.fadeOutAll = function () {
        this._rippleRenderer.fadeOutAll();
    };
    Object.defineProperty(MatRipple.prototype, "rippleConfig", {
        /**
         * Ripple configuration from the directive's input values.
         * @docs-private Implemented as part of RippleTarget
         */
        get: function () {
            return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: __assign(__assign({}, this._globalOptions.animation), this.animation),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRipple.prototype, "rippleDisabled", {
        /**
         * Whether ripples on pointer-down are disabled or not.
         * @docs-private Implemented as part of RippleTarget
         */
        get: function () {
            return this.disabled || !!this._globalOptions.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets up the trigger event listeners if ripples are enabled. */
    MatRipple.prototype._setupTriggerEventsIfEnabled = function () {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    };
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
    MatRipple.prototype.launch = function (configOrX, y, config) {
        if (y === void 0) { y = 0; }
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, __assign(__assign({}, this.rippleConfig), config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, __assign(__assign({}, this.rippleConfig), configOrX));
        }
    };
    /** @nocollapse */
    MatRipple.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatRipple.propDecorators = {
        color: [{ type: Input, args: ['matRippleColor',] }],
        unbounded: [{ type: Input, args: ['matRippleUnbounded',] }],
        centered: [{ type: Input, args: ['matRippleCentered',] }],
        radius: [{ type: Input, args: ['matRippleRadius',] }],
        animation: [{ type: Input, args: ['matRippleAnimation',] }],
        disabled: [{ type: Input, args: ['matRippleDisabled',] }],
        trigger: [{ type: Input, args: ['matRippleTrigger',] }]
    };
MatRipple.ɵfac = function MatRipple_Factory(t) { return new (t || MatRipple)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatRipple.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatRipple, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function MatRipple_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-ripple-unbounded", ctx.unbounded);
    } }, inputs: { radius: ["matRippleRadius", "radius"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"], color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], animation: ["matRippleAnimation", "animation"] }, exportAs: ["matRipple"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRipple, [{
        type: Directive,
        args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { radius: [{
            type: Input,
            args: ['matRippleRadius']
        }], disabled: [{
            type: Input,
            args: ['matRippleDisabled']
        }], trigger: [{
            type: Input,
            args: ['matRippleTrigger']
        }], color: [{
            type: Input,
            args: ['matRippleColor']
        }], unbounded: [{
            type: Input,
            args: ['matRippleUnbounded']
        }], centered: [{
            type: Input,
            args: ['matRippleCentered']
        }], animation: [{
            type: Input,
            args: ['matRippleAnimation']
        }] }); })();
    return MatRipple;
}());
export { MatRipple };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY29yZS9yaXBwbGUvcmlwcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBc0MsY0FBYyxFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFDcEcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUF3QjNFLDZFQUE2RTs7O0FBQzdFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUNsQyxJQUFJLGNBQWMsQ0FBc0IsMkJBQTJCLENBQUMsQ0FBQztBQUV6RTtBQUNnQyxJQW9FOUIsbUJBQW9CLFdBQW9DLEVBQzVDLE1BQWMsRUFDZCxRQUFrQixFQUM2QixhQUFtQyxFQUN2QyxhQUFzQjtBQUMvRSxRQUxzQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxRQS9DekQ7QUFDRjtBQUNNO0FBQ007QUFFQSxXQURQO0FBQ0wsUUFBNEIsV0FBTSxHQUFXLENBQUMsQ0FBQztBQUMvQyxRQWtCVSxjQUFTLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBbUJFLDhFQUE4RTtBQUNoRixRQUFVLG1CQUFjLEdBQVksS0FBSyxDQUFDO0FBQzFDLFFBT0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNu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O0FBQ0QsU0E3SWEsU0FBUztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JpcHBsZVJlZn0gZnJvbSAnLi9yaXBwbGUtcmVmJztcbmltcG9ydCB7UmlwcGxlQW5pbWF0aW9uQ29uZmlnLCBSaXBwbGVDb25maWcsIFJpcHBsZVJlbmRlcmVyLCBSaXBwbGVUYXJnZXR9IGZyb20gJy4vcmlwcGxlLXJlbmRlcmVyJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG4vKiogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIGBtYXRSaXBwbGVgLiAqL1xuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVHbG9iYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgcmlwcGxlcyBzaG91bGQgYmUgZGlzYWJsZWQuIFJpcHBsZXMgY2FuIGJlIHN0aWxsIGxhdW5jaGVkIG1hbnVhbGx5IGJ5IHVzaW5nXG4gICAqIHRoZSBgbGF1bmNoKClgIG1ldGhvZC4gVGhlcmVmb3JlIGZvY3VzIGluZGljYXRvcnMgd2lsbCBzdGlsbCBzaG93IHVwLlxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIGZvciB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uIG9mIHRoZSByaXBwbGVzLiBUaGVyZSBhcmUgdHdvIHBoYXNlcyB3aXRoIGRpZmZlcmVudFxuICAgKiBkdXJhdGlvbnMgZm9yIHRoZSByaXBwbGVzLiBUaGUgYW5pbWF0aW9uIGR1cmF0aW9ucyB3aWxsIGJlIG92ZXJ3cml0dGVuIGlmIHRoZVxuICAgKiBgTm9vcEFuaW1hdGlvbnNNb2R1bGVgIGlzIGJlaW5nIHVzZWQuXG4gICAqL1xuICBhbmltYXRpb24/OiBSaXBwbGVBbmltYXRpb25Db25maWc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgcmlwcGxlcyBzaG91bGQgc3RhcnQgZmFkaW5nIG91dCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbW91c2Ugb3IgdG91Y2ggaXMgcmVsZWFzZWQuIEJ5XG4gICAqIGRlZmF1bHQsIHJpcHBsZXMgd2lsbCB3YWl0IGZvciB0aGUgZW50ZXIgYW5pbWF0aW9uIHRvIGNvbXBsZXRlIGFuZCBmb3IgbW91c2Ugb3IgdG91Y2ggcmVsZWFzZS5cbiAgICovXG4gIHRlcm1pbmF0ZU9uUG9pbnRlclVwPzogYm9vbGVhbjtcbn1cblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGdsb2JhbCByaXBwbGUgb3B0aW9ucy4gKi9cbmV4cG9ydCBjb25zdCBNQVRfUklQUExFX0dMT0JBTF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48UmlwcGxlR2xvYmFsT3B0aW9ucz4oJ21hdC1yaXBwbGUtZ2xvYmFsLW9wdGlvbnMnKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1yaXBwbGVdLCBbbWF0UmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbWF0UmlwcGxlJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtcmlwcGxlJyxcbiAgICAnW2NsYXNzLm1hdC1yaXBwbGUtdW5ib3VuZGVkXSc6ICd1bmJvdW5kZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFJpcHBsZVRhcmdldCB7XG5cbiAgLyoqIEN1c3RvbSBjb2xvciBmb3IgYWxsIHJpcHBsZXMuICovXG4gIEBJbnB1dCgnbWF0UmlwcGxlQ29sb3InKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSByaXBwbGVzIHNob3VsZCBiZSB2aXNpYmxlIG91dHNpZGUgdGhlIGNvbXBvbmVudCdzIGJvdW5kcy4gKi9cbiAgQElucHV0KCdtYXRSaXBwbGVVbmJvdW5kZWQnKSB1bmJvdW5kZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHJpcHBsZSBhbHdheXMgb3JpZ2luYXRlcyBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGhvc3QgZWxlbWVudCdzIGJvdW5kcywgcmF0aGVyXG4gICAqIHRoYW4gb3JpZ2luYXRpbmcgZnJvbSB0aGUgbG9jYXRpb24gb2YgdGhlIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgQElucHV0KCdtYXRSaXBwbGVDZW50ZXJlZCcpIGNlbnRlcmVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQsIHRoZSByYWRpdXMgaW4gcGl4ZWxzIG9mIGZvcmVncm91bmQgcmlwcGxlcyB3aGVuIGZ1bGx5IGV4cGFuZGVkLiBJZiB1bnNldCwgdGhlIHJhZGl1c1xuICAgKiB3aWxsIGJlIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHJpcHBsZSB0byB0aGUgZnVydGhlc3QgY29ybmVyIG9mIHRoZSBob3N0IGVsZW1lbnQnc1xuICAgKiBib3VuZGluZyByZWN0YW5nbGUuXG4gICAqL1xuICBASW5wdXQoJ21hdFJpcHBsZVJhZGl1cycpIHJhZGl1czogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIHJpcHBsZSBhbmltYXRpb24uIEFsbG93cyBtb2RpZnlpbmcgdGhlIGVudGVyIGFuZCBleGl0IGFuaW1hdGlvblxuICAgKiBkdXJhdGlvbiBvZiB0aGUgcmlwcGxlcy4gVGhlIGFuaW1hdGlvbiBkdXJhdGlvbnMgd2lsbCBiZSBvdmVyd3JpdHRlbiBpZiB0aGVcbiAgICogYE5vb3BBbmltYXRpb25zTW9kdWxlYCBpcyBiZWluZyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCdtYXRSaXBwbGVBbmltYXRpb24nKSBhbmltYXRpb246IFJpcHBsZUFuaW1hdGlvbkNvbmZpZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGljayBldmVudHMgd2lsbCBub3QgdHJpZ2dlciB0aGUgcmlwcGxlLiBSaXBwbGVzIGNhbiBiZSBzdGlsbCBsYXVuY2hlZCBtYW51YWxseVxuICAgKiBieSB1c2luZyB0aGUgYGxhdW5jaCgpYCBtZXRob2QuXG4gICAqL1xuICBASW5wdXQoJ21hdFJpcHBsZURpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXR1cFRyaWdnZXJFdmVudHNJZkVuYWJsZWQoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IHRyaWdnZXJzIHRoZSByaXBwbGUgd2hlbiBjbGljayBldmVudHMgYXJlIHJlY2VpdmVkLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgZGlyZWN0aXZlJ3MgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCdtYXRSaXBwbGVUcmlnZ2VyJylcbiAgZ2V0IHRyaWdnZXIoKSB7IHJldHVybiB0aGlzLl90cmlnZ2VyIHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDsgfVxuICBzZXQgdHJpZ2dlcih0cmlnZ2VyOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHRoaXMuX3NldHVwVHJpZ2dlckV2ZW50c0lmRW5hYmxlZCgpO1xuICB9XG4gIHByaXZhdGUgX3RyaWdnZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8qKiBSZW5kZXJlciBmb3IgdGhlIHJpcHBsZSBET00gbWFuaXB1bGF0aW9ucy4gKi9cbiAgcHJpdmF0ZSBfcmlwcGxlUmVuZGVyZXI6IFJpcHBsZVJlbmRlcmVyO1xuXG4gIC8qKiBPcHRpb25zIHRoYXQgYXJlIHNldCBnbG9iYWxseSBmb3IgYWxsIHJpcHBsZXMuICovXG4gIHByaXZhdGUgX2dsb2JhbE9wdGlvbnM6IFJpcHBsZUdsb2JhbE9wdGlvbnM7XG5cbiAgLyoqIFdoZXRoZXIgcmlwcGxlIGRpcmVjdGl2ZSBpcyBpbml0aWFsaXplZCBhbmQgdGhlIGlucHV0IGJpbmRpbmdzIGFyZSBzZXQuICovXG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfUklQUExFX0dMT0JBTF9PUFRJT05TKSBnbG9iYWxPcHRpb25zPzogUmlwcGxlR2xvYmFsT3B0aW9ucyxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMgPSBnbG9iYWxPcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX3JpcHBsZVJlbmRlcmVyID0gbmV3IFJpcHBsZVJlbmRlcmVyKHRoaXMsIG5nWm9uZSwgX2VsZW1lbnRSZWYsIHBsYXRmb3JtKTtcblxuICAgIGlmIChhbmltYXRpb25Nb2RlID09PSAnTm9vcEFuaW1hdGlvbnMnKSB7XG4gICAgICB0aGlzLl9nbG9iYWxPcHRpb25zLmFuaW1hdGlvbiA9IHtlbnRlckR1cmF0aW9uOiAwLCBleGl0RHVyYXRpb246IDB9O1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3NldHVwVHJpZ2dlckV2ZW50c0lmRW5hYmxlZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlUmVuZGVyZXIuX3JlbW92ZVRyaWdnZXJFdmVudHMoKTtcbiAgfVxuXG4gIC8qKiBGYWRlcyBvdXQgYWxsIGN1cnJlbnRseSBzaG93aW5nIHJpcHBsZSBlbGVtZW50cy4gKi9cbiAgZmFkZU91dEFsbCgpIHtcbiAgICB0aGlzLl9yaXBwbGVSZW5kZXJlci5mYWRlT3V0QWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogUmlwcGxlIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZGlyZWN0aXZlJ3MgaW5wdXQgdmFsdWVzLlxuICAgKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgUmlwcGxlVGFyZ2V0XG4gICAqL1xuICBnZXQgcmlwcGxlQ29uZmlnKCk6IFJpcHBsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcmVkOiB0aGlzLmNlbnRlcmVkLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgYW5pbWF0aW9uOiB7Li4udGhpcy5fZ2xvYmFsT3B0aW9ucy5hbmltYXRpb24sIC4uLnRoaXMuYW5pbWF0aW9ufSxcbiAgICAgIHRlcm1pbmF0ZU9uUG9pbnRlclVwOiB0aGlzLl9nbG9iYWxPcHRpb25zLnRlcm1pbmF0ZU9uUG9pbnRlclVwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciByaXBwbGVzIG9uIHBvaW50ZXItZG93biBhcmUgZGlzYWJsZWQgb3Igbm90LlxuICAgKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgUmlwcGxlVGFyZ2V0XG4gICAqL1xuICBnZXQgcmlwcGxlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgISF0aGlzLl9nbG9iYWxPcHRpb25zLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIFNldHMgdXAgdGhlIHRyaWdnZXIgZXZlbnQgbGlzdGVuZXJzIGlmIHJpcHBsZXMgYXJlIGVuYWJsZWQuICovXG4gIHByaXZhdGUgX3NldHVwVHJpZ2dlckV2ZW50c0lmRW5hYmxlZCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fcmlwcGxlUmVuZGVyZXIuc2V0dXBUcmlnZ2VyRXZlbnRzKHRoaXMudHJpZ2dlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIGEgbWFudWFsIHJpcHBsZSB1c2luZyB0aGUgc3BlY2lmaWVkIHJpcHBsZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBtYW51YWwgcmlwcGxlLlxuICAgKi9cbiAgbGF1bmNoKGNvbmZpZzogUmlwcGxlQ29uZmlnKTogUmlwcGxlUmVmO1xuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBhIG1hbnVhbCByaXBwbGUgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcyB3aXRoaW4gdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB4IENvb3JkaW5hdGUgd2l0aGluIHRoZSBlbGVtZW50LCBhbG9uZyB0aGUgWCBheGlzIGF0IHdoaWNoIHRvIGZhZGUtaW4gdGhlIHJpcHBsZS5cbiAgICogQHBhcmFtIHkgQ29vcmRpbmF0ZSB3aXRoaW4gdGhlIGVsZW1lbnQsIGFsb25nIHRoZSBZIGF4aXMgYXQgd2hpY2ggdG8gZmFkZS1pbiB0aGUgcmlwcGxlLlxuICAgKiBAcGFyYW0gY29uZmlnIE9wdGlvbmFsIHJpcHBsZSBjb25maWd1cmF0aW9uIGZvciB0aGUgbWFudWFsIHJpcHBsZS5cbiAgICovXG4gIGxhdW5jaCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29uZmlnPzogUmlwcGxlQ29uZmlnKTogUmlwcGxlUmVmO1xuXG4gIC8qKiBMYXVuY2hlcyBhIG1hbnVhbCByaXBwbGUgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlZCBvciBqdXN0IGJ5IHRoZSByaXBwbGUgY29uZmlnLiAqL1xuICBsYXVuY2goY29uZmlnT3JYOiBudW1iZXIgfCBSaXBwbGVDb25maWcsIHk6IG51bWJlciA9IDAsIGNvbmZpZz86IFJpcHBsZUNvbmZpZyk6IFJpcHBsZVJlZiB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdPclggPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmlwcGxlUmVuZGVyZXIuZmFkZUluUmlwcGxlKGNvbmZpZ09yWCwgeSwgey4uLnRoaXMucmlwcGxlQ29uZmlnLCAuLi5jb25maWd9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3JpcHBsZVJlbmRlcmVyLmZhZGVJblJpcHBsZSgwLCAwLCB7Li4udGhpcy5yaXBwbGVDb25maWcsIC4uLmNvbmZpZ09yWH0pO1xuICAgIH1cbiAgfVxufVxuIl19