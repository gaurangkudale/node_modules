import { __extends } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, inject, InjectionToken, Input, NgZone, Optional, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
// Boilerplate for applying mixins to MatProgressBar.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["primaryValueBar"];
var MatProgressBarBase = /** @class */ (function () {
    function MatProgressBarBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatProgressBarBase;
}());
var _MatProgressBarMixinBase = mixinColor(MatProgressBarBase, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
export var MAT_PROGRESS_BAR_LOCATION = new InjectionToken('mat-progress-bar-location', { providedIn: 'root', factory: MAT_PROGRESS_BAR_LOCATION_FACTORY });
/** @docs-private */
export function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
    var _document = inject(DOCUMENT);
    var _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: function () { return _location ? (_location.pathname + _location.search) : ''; }
    };
}
/** Counter used to generate unique IDs for progress bars. */
var progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
var MatProgressBar = /** @class */ (function (_super) {
    __extends(MatProgressBar, _super);
    function MatProgressBar(_elementRef, _ngZone, _animationMode, 
    /**
     * @deprecated `location` parameter to be made required.
     * @breaking-change 8.0.0
     */
    location) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this._animationMode = _animationMode;
        /** Flag that indicates whether NoopAnimations mode is set to true. */
        _this._isNoopAnimation = false;
        _this._value = 0;
        _this._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */
        _this.animationEnd = new EventEmitter();
        /** Reference to animation end subscription to be unsubscribed on destroy. */
        _this._animationEndSubscription = Subscription.EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        _this.mode = 'determinate';
        /** ID of the progress bar. */
        _this.progressbarId = "mat-progress-bar-" + progressbarId++;
        // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.
        var path = location ? location.getPathname().split('#')[0] : '';
        _this._rectangleFillValue = "url('" + path + "#" + _this.progressbarId + "')";
        _this._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this;
    }
    Object.defineProperty(MatProgressBar.prototype, "value", {
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
        get: function () { return this._value; },
        set: function (v) {
            this._value = clamp(coerceNumberProperty(v) || 0);
            // When noop animation is set to true, trigger animationEnd directly.
            if (this._isNoopAnimation) {
                this._emitAnimationEnd();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressBar.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: function () { return this._bufferValue; },
        set: function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    MatProgressBar.prototype._primaryTransform = function () {
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    MatProgressBar.prototype._bufferTransform = function () {
        if (this.mode === 'buffer') {
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
        return null;
    };
    MatProgressBar.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this._isNoopAnimation) {
            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular((function () {
                var element = _this._primaryValueBar.nativeElement;
                _this._animationEndSubscription =
                    fromEvent(element, 'transitionend')
                        .pipe(filter((function (e) { return e.target === element; })))
                        .subscribe(function () { return _this._ngZone.run(function () { return _this._emitAnimationEnd(); }); });
            }));
        }
    };
    MatProgressBar.prototype.ngOnDestroy = function () {
        this._animationEndSubscription.unsubscribe();
    };
    /** Emit an animationEnd event if in determinate or buffer mode. */
    MatProgressBar.prototype._emitAnimationEnd = function () {
        if (this.mode === 'determinate' || this.mode === 'buffer') {
            this.animationEnd.next({ value: this.value });
        }
    };
    /** @nocollapse */
    MatProgressBar.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_PROGRESS_BAR_LOCATION,] }] }
    ]; };
    MatProgressBar.propDecorators = {
        value: [{ type: Input }],
        bufferValue: [{ type: Input }],
        _primaryValueBar: [{ type: ViewChild, args: ['primaryValueBar',] }],
        animationEnd: [{ type: Output }],
        mode: [{ type: Input }]
    };
MatProgressBar.ɵfac = function MatProgressBar_Factory(t) { return new (t || MatProgressBar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵngcc0.ɵɵdirectiveInject(MAT_PROGRESS_BAR_LOCATION, 8)); };
MatProgressBar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatProgressBar, selectors: [["mat-progress-bar"]], viewQuery: function MatProgressBar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._primaryValueBar = _t.first);
    } }, hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "mat-progress-bar"], hostVars: 4, hostBindings: function MatProgressBar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._isNoopAnimation);
    } }, inputs: { color: "color", value: "value", bufferValue: "bufferValue", mode: "mode" }, outputs: { animationEnd: "animationEnd" }, exportAs: ["matProgressBar"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 9, vars: 4, consts: [["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]], template: function MatProgressBar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "defs");
        ɵngcc0.ɵɵelementStart(2, "pattern", 1);
        ɵngcc0.ɵɵelement(3, "circle", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "rect", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelement(5, "div", 4);
        ɵngcc0.ɵɵelement(6, "div", 5, 6);
        ɵngcc0.ɵɵelement(8, "div", 7);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("id", ctx.progressbarId);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("fill", ctx._rectangleFillValue);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx._bufferTransform());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx._primaryTransform());
    } }, directives: [ɵngcc1.NgStyle], styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatProgressBar, [{
        type: Component,
        args: [{
                selector: 'mat-progress-bar',
                exportAs: 'matProgressBar',
                host: {
                    'role': 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuemax': '100',
                    '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
                    '[attr.mode]': 'mode',
                    'class': 'mat-progress-bar',
                    '[class._mat-animation-noopable]': '_isNoopAnimation'
                },
                inputs: ['color'],
                template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_PROGRESS_BAR_LOCATION]
            }] }]; }, { value: [{
            type: Input
        }], bufferValue: [{
            type: Input
        }], _primaryValueBar: [{
            type: ViewChild,
            args: ['primaryValueBar']
        }], animationEnd: [{
            type: Output
        }], mode: [{
            type: Input
        }] }); })();
    return MatProgressBar;
}(_MatProgressBarMixinBase));
export { MatProgressBar };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBQyxvQkFBb0IsRUFBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBeUIsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBV3RDLHFEQUFxRDtBQUNyRCxvQkFBb0I7Ozs7O0FBQ3BCO0FBQzJCLElBQXpCLDRCQUFtQixXQUF1QjtBQUFJLFFBQTNCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0FBQUMsSUFBRyxDQUFDO0FBQ2pELElBQUEseUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELElBQU0sd0JBQXdCLEdBQzFCLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxJQUFJLGNBQWMsQ0FD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TExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtjb2VyY2VOdW1iZXJQcm9wZXJ0eSwgTnVtYmVySW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIGluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkNvbG9yLCBDYW5Db2xvckN0b3IsIG1peGluQ29sb3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQmVuY2hwcmVzcyB0ZXN0cy5cbi8vIFRPRE8oam9zZXBocGVycm90dCk6IEFkZCBBUklBIGF0dHJpYnV0ZXMgZm9yIHByb2dyZXNzIGJhciBcImZvclwiLlxuXG4vKiogTGFzdCBhbmltYXRpb24gZW5kIGRhdGEuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQW5pbWF0aW9uRW5kIHtcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRQcm9ncmVzc0Jhci5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRQcm9ncmVzc0JhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxufVxuXG5jb25zdCBfTWF0UHJvZ3Jlc3NCYXJNaXhpbkJhc2U6IENhbkNvbG9yQ3RvciAmIHR5cGVvZiBNYXRQcm9ncmVzc0JhckJhc2UgPVxuICAgIG1peGluQ29sb3IoTWF0UHJvZ3Jlc3NCYXJCYXNlLCAncHJpbWFyeScpO1xuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB1c2VkIHRvIHByb3ZpZGUgdGhlIGN1cnJlbnQgbG9jYXRpb24gdG8gYE1hdFByb2dyZXNzQmFyYC5cbiAqIFVzZWQgdG8gaGFuZGxlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBhbmQgdG8gc3R1YiBvdXQgZHVyaW5nIHVuaXQgdGVzdHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfUFJPR1JFU1NfQkFSX0xPQ0FUSU9OID0gbmV3IEluamVjdGlvblRva2VuPE1hdFByb2dyZXNzQmFyTG9jYXRpb24+KFxuICAnbWF0LXByb2dyZXNzLWJhci1sb2NhdGlvbicsXG4gIHtwcm92aWRlZEluOiAncm9vdCcsIGZhY3Rvcnk6IE1BVF9QUk9HUkVTU19CQVJfTE9DQVRJT05fRkFDVE9SWX1cbik7XG5cbi8qKlxuICogU3R1YmJlZCBvdXQgbG9jYXRpb24gZm9yIGBNYXRQcm9ncmVzc0JhcmAuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWF0UHJvZ3Jlc3NCYXJMb2NhdGlvbiB7XG4gIGdldFBhdGhuYW1lOiAoKSA9PiBzdHJpbmc7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX1BST0dSRVNTX0JBUl9MT0NBVElPTl9GQUNUT1JZKCk6IE1hdFByb2dyZXNzQmFyTG9jYXRpb24ge1xuICBjb25zdCBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xuICBjb25zdCBfbG9jYXRpb24gPSBfZG9jdW1lbnQgPyBfZG9jdW1lbnQubG9jYXRpb24gOiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYSBmdW5jdGlvbiwgcmF0aGVyIHRoYW4gYSBwcm9wZXJ0eSwgYmVjYXVzZSBBbmd1bGFyXG4gICAgLy8gd2lsbCBvbmx5IHJlc29sdmUgaXQgb25jZSwgYnV0IHdlIHdhbnQgdGhlIGN1cnJlbnQgcGF0aCBvbiBlYWNoIGNhbGwuXG4gICAgZ2V0UGF0aG5hbWU6ICgpID0+IF9sb2NhdGlvbiA/IChfbG9jYXRpb24ucGF0aG5hbWUgKyBfbG9jYXRpb24uc2VhcmNoKSA6ICcnXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFByb2dyZXNzQmFyTW9kZSA9ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZScgfCAnYnVmZmVyJyB8ICdxdWVyeSc7XG5cbi8qKiBDb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgcHJvZ3Jlc3MgYmFycy4gKi9cbmxldCBwcm9ncmVzc2JhcklkID0gMDtcblxuLyoqXG4gKiBgPG1hdC1wcm9ncmVzcy1iYXI+YCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1wcm9ncmVzcy1iYXInLFxuICBleHBvcnRBczogJ21hdFByb2dyZXNzQmFyJyxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAnYXJpYS12YWx1ZW1heCc6ICcxMDAnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICcobW9kZSA9PT0gXCJpbmRldGVybWluYXRlXCIgfHwgbW9kZSA9PT0gXCJxdWVyeVwiKSA/IG51bGwgOiB2YWx1ZScsXG4gICAgJ1thdHRyLm1vZGVdJzogJ21vZGUnLFxuICAgICdjbGFzcyc6ICdtYXQtcHJvZ3Jlc3MtYmFyJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6ICdfaXNOb29wQW5pbWF0aW9uJyxcbiAgfSxcbiAgaW5wdXRzOiBbJ2NvbG9yJ10sXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3MtYmFyLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UHJvZ3Jlc3NCYXIgZXh0ZW5kcyBfTWF0UHJvZ3Jlc3NCYXJNaXhpbkJhc2UgaW1wbGVtZW50cyBDYW5Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcsXG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiBAZGVwcmVjYXRlZCBgbG9jYXRpb25gIHBhcmFtZXRlciB0byBiZSBtYWRlIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9QUk9HUkVTU19CQVJfTE9DQVRJT04pIGxvY2F0aW9uPzogTWF0UHJvZ3Jlc3NCYXJMb2NhdGlvbikge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gcHJlZml4IHRoZSBTVkcgcmVmZXJlbmNlIHdpdGggdGhlIGN1cnJlbnQgcGF0aCwgb3RoZXJ3aXNlIHRoZXkgd29uJ3Qgd29ya1xuICAgIC8vIGluIFNhZmFyaSBpZiB0aGUgcGFnZSBoYXMgYSBgPGJhc2U+YCB0YWcuIE5vdGUgdGhhdCB3ZSBuZWVkIHF1b3RlcyBpbnNpZGUgdGhlIGB1cmwoKWAsXG5cbiAgICAvLyBiZWNhdXNlIG5hbWVkIHJvdXRlIFVSTHMgY2FuIGNvbnRhaW4gcGFyZW50aGVzZXMgKHNlZSAjMTIzMzgpLiBBbHNvIHdlIGRvbid0IHVzZSBzaW5jZVxuICAgIC8vIHdlIGNhbid0IHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3aGV0aGVyXG4gICAgLy8gdGhlIGNvbnN1bWVyIGlzIHVzaW5nIHRoZSBoYXNoIGxvY2F0aW9uIHN0cmF0ZWd5IG9yIG5vdCwgYmVjYXVzZSBgTG9jYXRpb25gIG5vcm1hbGl6ZXNcbiAgICAvLyBib3RoIGAvIy9mb28vYmFyYCBhbmQgYC9mb28vYmFyYCB0byB0aGUgc2FtZSB0aGluZy5cbiAgICBjb25zdCBwYXRoID0gbG9jYXRpb24gPyBsb2NhdGlvbi5nZXRQYXRobmFtZSgpLnNwbGl0KCcjJylbMF0gOiAnJztcbiAgICB0aGlzLl9yZWN0YW5nbGVGaWxsVmFsdWUgPSBgdXJsKCcke3BhdGh9IyR7dGhpcy5wcm9ncmVzc2JhcklkfScpYDtcbiAgICB0aGlzLl9pc05vb3BBbmltYXRpb24gPSBfYW5pbWF0aW9uTW9kZSA9PT0gJ05vb3BBbmltYXRpb25zJztcbiAgfVxuXG4gIC8qKiBGbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgTm9vcEFuaW1hdGlvbnMgbW9kZSBpcyBzZXQgdG8gdHJ1ZS4gKi9cbiAgX2lzTm9vcEFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiBNaXJyb3JlZCB0byBhcmlhLXZhbHVlbm93LiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNsYW1wKGNvZXJjZU51bWJlclByb3BlcnR5KHYpIHx8IDApO1xuXG4gICAgLy8gV2hlbiBub29wIGFuaW1hdGlvbiBpcyBzZXQgdG8gdHJ1ZSwgdHJpZ2dlciBhbmltYXRpb25FbmQgZGlyZWN0bHkuXG4gICAgaWYgKHRoaXMuX2lzTm9vcEFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZW1pdEFuaW1hdGlvbkVuZCgpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcblxuICAvKiogQnVmZmVyIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuIERlZmF1bHRzIHRvIHplcm8uICovXG4gIEBJbnB1dCgpXG4gIGdldCBidWZmZXJWYWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYnVmZmVyVmFsdWU7IH1cbiAgc2V0IGJ1ZmZlclZhbHVlKHY6IG51bWJlcikgeyB0aGlzLl9idWZmZXJWYWx1ZSA9IGNsYW1wKHYgfHwgMCk7IH1cbiAgcHJpdmF0ZSBfYnVmZmVyVmFsdWU6IG51bWJlciA9IDA7XG5cbiAgQFZpZXdDaGlsZCgncHJpbWFyeVZhbHVlQmFyJykgX3ByaW1hcnlWYWx1ZUJhcjogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFuaW1hdGlvbiBvZiB0aGUgcHJpbWFyeSBwcm9ncmVzcyBiYXIgY29tcGxldGVzLiBUaGlzIGV2ZW50IHdpbGwgbm90XG4gICAqIGJlIGVtaXR0ZWQgd2hlbiBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCwgbm9yIHdpbGwgaXQgYmUgZW1pdHRlZCBmb3IgbW9kZXMgd2l0aCBjb250aW51b3VzXG4gICAqIGFuaW1hdGlvbnMgKGluZGV0ZXJtaW5hdGUgYW5kIHF1ZXJ5KS5cbiAgICovXG4gIEBPdXRwdXQoKSBhbmltYXRpb25FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQW5pbWF0aW9uRW5kPigpO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gYW5pbWF0aW9uIGVuZCBzdWJzY3JpcHRpb24gdG8gYmUgdW5zdWJzY3JpYmVkIG9uIGRlc3Ryb3kuICovXG4gIHByaXZhdGUgX2FuaW1hdGlvbkVuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKlxuICAgKiBNb2RlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIElucHV0IG11c3QgYmUgb25lIG9mIHRoZXNlIHZhbHVlczogZGV0ZXJtaW5hdGUsIGluZGV0ZXJtaW5hdGUsIGJ1ZmZlciwgcXVlcnksIGRlZmF1bHRzIHRvXG4gICAqICdkZXRlcm1pbmF0ZScuXG4gICAqIE1pcnJvcmVkIHRvIG1vZGUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KCkgbW9kZTogUHJvZ3Jlc3NCYXJNb2RlID0gJ2RldGVybWluYXRlJztcblxuICAvKiogSUQgb2YgdGhlIHByb2dyZXNzIGJhci4gKi9cbiAgcHJvZ3Jlc3NiYXJJZCA9IGBtYXQtcHJvZ3Jlc3MtYmFyLSR7cHJvZ3Jlc3NiYXJJZCsrfWA7XG5cbiAgLyoqIEF0dHJpYnV0ZSB0byBiZSB1c2VkIGZvciB0aGUgYGZpbGxgIGF0dHJpYnV0ZSBvbiB0aGUgaW50ZXJuYWwgYHJlY3RgIGVsZW1lbnQuICovXG4gIF9yZWN0YW5nbGVGaWxsVmFsdWU6IHN0cmluZztcblxuICAvKiogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBwcmltYXJ5IGluZGljYXRvci4gKi9cbiAgX3ByaW1hcnlUcmFuc2Zvcm0oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnZhbHVlIC8gMTAwO1xuICAgIHJldHVybiB7dHJhbnNmb3JtOiBgc2NhbGVYKCR7c2NhbGV9KWB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgdHJhbnNmb3JtIHZhbHVlIGZvciB0aGUgcHJvZ3Jlc3MgYmFyJ3MgYnVmZmVyIGluZGljYXRvci4gT25seSB1c2VkIGlmIHRoZVxuICAgKiBwcm9ncmVzcyBtb2RlIGlzIHNldCB0byBidWZmZXIsIG90aGVyd2lzZSByZXR1cm5zIGFuIHVuZGVmaW5lZCwgY2F1c2luZyBubyB0cmFuc2Zvcm1hdGlvbi5cbiAgICovXG4gIF9idWZmZXJUcmFuc2Zvcm0oKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5idWZmZXJWYWx1ZSAvIDEwMDtcbiAgICAgIHJldHVybiB7dHJhbnNmb3JtOiBgc2NhbGVYKCR7c2NhbGV9KWB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzTm9vcEFuaW1hdGlvbikge1xuICAgICAgLy8gUnVuIG91dHNpZGUgYW5ndWxhciBzbyBjaGFuZ2UgZGV0ZWN0aW9uIGRpZG4ndCBnZXQgdHJpZ2dlcmVkIG9uIGV2ZXJ5IHRyYW5zaXRpb24gZW5kXG4gICAgICAvLyBpbnN0ZWFkIG9ubHkgb24gdGhlIGFuaW1hdGlvbiB0aGF0IHdlIGNhcmUgYWJvdXQgKHByaW1hcnkgdmFsdWUgYmFyJ3MgdHJhbnNpdGlvbmVuZClcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fcHJpbWFyeVZhbHVlQmFyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRW5kU3Vic2NyaXB0aW9uID1cbiAgICAgICAgICAgIChmcm9tRXZlbnQoZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnKSBhcyBPYnNlcnZhYmxlPFRyYW5zaXRpb25FdmVudD4pXG4gICAgICAgICAgICAgIC5waXBlKGZpbHRlcigoKGU6IFRyYW5zaXRpb25FdmVudCkgPT4gZS50YXJnZXQgPT09IGVsZW1lbnQpKSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2VtaXRBbmltYXRpb25FbmQoKSkpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2FuaW1hdGlvbkVuZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIEVtaXQgYW4gYW5pbWF0aW9uRW5kIGV2ZW50IGlmIGluIGRldGVybWluYXRlIG9yIGJ1ZmZlciBtb2RlLiAqL1xuICBwcml2YXRlIF9lbWl0QW5pbWF0aW9uRW5kKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgfHwgdGhpcy5tb2RlID09PSAnYnVmZmVyJykge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmQubmV4dCh7dmFsdWU6IHRoaXMudmFsdWV9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmFsdWU6IE51bWJlcklucHV0O1xufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiB0d28gbnVtYmVycywgYnkgZGVmYXVsdCAwIGFuZCAxMDAuICovXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHYpKTtcbn1cbiJdfQ==