/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewEncapsulation, Inject, ElementRef, } from '@angular/core';
import { mixinDisabled } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { merge } from 'rxjs';
import { MatSort } from './sort';
import { matSortAnimations } from './sort-animations';
import { getSortHeaderNotContainedWithinSortError } from './sort-errors';
import { MatSortHeaderIntl } from './sort-header-intl';
// Boilerplate for applying mixins to the sort header.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/common';

var _c0 = ["mat-sort-header", ""];
function MatSortHeader_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1._disableViewStateAnimation = true; })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3._disableViewStateAnimation = false; });
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 6);
    ɵngcc0.ɵɵelement(4, "div", 7);
    ɵngcc0.ɵɵelement(5, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("@indicator", ctx_r0._getArrowDirectionState());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@leftPointer", ctx_r0._getArrowDirectionState());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@rightPointer", ctx_r0._getArrowDirectionState());
} }
var _c1 = ["*"];
var MatSortHeaderBase = /** @class */ (function () {
    function MatSortHeaderBase() {
    }
    return MatSortHeaderBase;
}());
var _MatSortHeaderMixinBase = mixinDisabled(MatSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
var MatSortHeader = /** @class */ (function (_super) {
    __extends(MatSortHeader, _super);
    function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef, 
    /**
     * @deprecated _focusMonitor and _elementRef to become required parameters.
     * @breaking-change 10.0.0
     */
    _focusMonitor, _elementRef) {
        var _this = 
        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _super.call(this) || this;
        _this._intl = _intl;
        _this._sort = _sort;
        _this._columnDef = _columnDef;
        _this._focusMonitor = _focusMonitor;
        _this._elementRef = _elementRef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */
        _this._showIndicatorHint = false;
        /** The direction the arrow should be facing according to the current state. */
        _this._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */
        _this._disableViewStateAnimation = false;
        /** Sets the position of the arrow that displays when sorted. */
        _this.arrowPosition = 'after';
        if (!_sort) {
            throw getSortHeaderNotContainedWithinSortError();
        }
        _this._rerenderSubscription = merge(_sort.sortChange, _sort._stateChanges, _intl.changes)
            .subscribe(function () {
            if (_this._isSorted()) {
                _this._updateArrowDirection();
            }
            // If this header was recently active and now no longer sorted, animate away the arrow.
            if (!_this._isSorted() && _this._viewState && _this._viewState.toState === 'active') {
                _this._disableViewStateAnimation = false;
                _this._setAnimationTransitionState({ fromState: 'active', toState: _this._arrowDirection });
            }
            changeDetectorRef.markForCheck();
        });
        if (_focusMonitor && _elementRef) {
            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            _focusMonitor.monitor(_elementRef, true)
                .subscribe(function (origin) { return _this._setIndicatorHintVisible(!!origin); });
        }
        return _this;
    }
    Object.defineProperty(MatSortHeader.prototype, "disableClear", {
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
        get: function () { return this._disableClear; },
        set: function (v) { this._disableClear = coerceBooleanProperty(v); },
        enumerable: true,
        configurable: true
    });
    MatSortHeader.prototype.ngOnInit = function () {
        if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
        }
        // Initialize the direction of the arrow and set the view state to be immediately that state.
        this._updateArrowDirection();
        this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
        this._sort.register(this);
    };
    MatSortHeader.prototype.ngOnDestroy = function () {
        // @breaking-change 10.0.0 Remove null check for _focusMonitor and _elementRef.
        if (this._focusMonitor && this._elementRef) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        this._sort.deregister(this);
        this._rerenderSubscription.unsubscribe();
    };
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     */
    MatSortHeader.prototype._setIndicatorHintVisible = function (visible) {
        // No-op if the sort header is disabled - should not make the hint visible.
        if (this._isDisabled() && visible) {
            return;
        }
        this._showIndicatorHint = visible;
        if (!this._isSorted()) {
            this._updateArrowDirection();
            if (this._showIndicatorHint) {
                this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
            }
            else {
                this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
            }
        }
    };
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     */
    MatSortHeader.prototype._setAnimationTransitionState = function (viewState) {
        this._viewState = viewState;
        // If the animation for arrow position state (opacity/translation) should be disabled,
        // remove the fromState so that it jumps right to the toState.
        if (this._disableViewStateAnimation) {
            this._viewState = { toState: viewState.toState };
        }
    };
    /** Triggers the sort on this sort header and removes the indicator hint. */
    MatSortHeader.prototype._handleClick = function () {
        if (this._isDisabled()) {
            return;
        }
        this._sort.sort(this);
        // Do not show the animation if the header was already shown in the right position.
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
        }
        // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
        // the direction it is facing.
        var viewState = this._isSorted() ?
            { fromState: this._arrowDirection, toState: 'active' } :
            { fromState: 'active', toState: this._arrowDirection };
        this._setAnimationTransitionState(viewState);
        this._showIndicatorHint = false;
    };
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    MatSortHeader.prototype._isSorted = function () {
        return this._sort.active == this.id &&
            (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    };
    /** Returns the animation state for the arrow direction (indicator and pointers). */
    MatSortHeader.prototype._getArrowDirectionState = function () {
        return "" + (this._isSorted() ? 'active-' : '') + this._arrowDirection;
    };
    /** Returns the arrow position state (opacity, translation). */
    MatSortHeader.prototype._getArrowViewState = function () {
        var fromState = this._viewState.fromState;
        return (fromState ? fromState + "-to-" : '') + this._viewState.toState;
    };
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     */
    MatSortHeader.prototype._updateArrowDirection = function () {
        this._arrowDirection = this._isSorted() ?
            this._sort.direction :
            (this.start || this._sort.start);
    };
    MatSortHeader.prototype._isDisabled = function () {
        return this._sort.disabled || this.disabled;
    };
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    MatSortHeader.prototype._getAriaSortAttribute = function () {
        if (!this._isSorted()) {
            return null;
        }
        return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    };
    /** Whether the arrow inside the sort header should be rendered. */
    MatSortHeader.prototype._renderArrow = function () {
        return !this._isDisabled() || this._isSorted();
    };
    /** @nocollapse */
    MatSortHeader.ctorParameters = function () { return [
        { type: MatSortHeaderIntl },
        { type: ChangeDetectorRef },
        { type: MatSort, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: Optional }] },
        { type: FocusMonitor },
        { type: ElementRef }
    ]; };
    MatSortHeader.propDecorators = {
        id: [{ type: Input, args: ['mat-sort-header',] }],
        arrowPosition: [{ type: Input }],
        start: [{ type: Input }],
        disableClear: [{ type: Input }]
    };
MatSortHeader.ɵfac = function MatSortHeader_Factory(t) { return new (t || MatSortHeader)(ɵngcc0.ɵɵdirectiveInject(MatSortHeaderIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MatSort, 8), ɵngcc0.ɵɵdirectiveInject('MAT_SORT_HEADER_COLUMN_DEF', 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatSortHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatSortHeader, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function MatSortHeader_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatSortHeader_click_HostBindingHandler() { return ctx._handleClick(); })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() { return ctx._setIndicatorHintVisible(true); })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() { return ctx._setIndicatorHintVisible(false); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-sort", ctx._getAriaSortAttribute());
        ɵngcc0.ɵɵclassProp("mat-sort-header-disabled", ctx._isDisabled());
    } }, inputs: { disabled: "disabled", disableClear: "disableClear", id: ["mat-sort-header", "id"], arrowPosition: "arrowPosition", start: "start" }, exportAs: ["matSortHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 7, consts: [[1, "mat-sort-header-container"], ["type", "button", 1, "mat-sort-header-button"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]], template: function MatSortHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("disabled", ctx._isDisabled() || null)("aria-label", ctx._intl.sortButtonLabel(ctx.id));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx._renderArrow());
    } }, directives: [ɵngcc2.NgIf], styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"], encapsulation: 2, data: { animation: [
            matSortAnimations.indicator,
            matSortAnimations.leftPointer,
            matSortAnimations.rightPointer,
            matSortAnimations.arrowOpacity,
            matSortAnimations.arrowPosition,
            matSortAnimations.allowChildren,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatSortHeader, [{
        type: Component,
        args: [{
                selector: '[mat-sort-header]',
                exportAs: 'matSortHeader',
                template: "<div class=\"mat-sort-header-container\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\">\n  <button class=\"mat-sort-header-button\" type=\"button\"\n          [attr.disabled]=\"_isDisabled() || null\"\n          [attr.aria-label]=\"_intl.sortButtonLabel(id)\">\n    <ng-content></ng-content>\n  </button>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
                host: {
                    'class': 'mat-sort-header',
                    '(click)': '_handleClick()',
                    '(mouseenter)': '_setIndicatorHintVisible(true)',
                    '(mouseleave)': '_setIndicatorHintVisible(false)',
                    '[attr.aria-sort]': '_getAriaSortAttribute()',
                    '[class.mat-sort-header-disabled]': '_isDisabled()'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
                animations: [
                    matSortAnimations.indicator,
                    matSortAnimations.leftPointer,
                    matSortAnimations.rightPointer,
                    matSortAnimations.arrowOpacity,
                    matSortAnimations.arrowPosition,
                    matSortAnimations.allowChildren,
                ],
                styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
            }]
    }], function () { return [{ type: MatSortHeaderIntl }, { type: ɵngcc0.ChangeDetectorRef }, { type: MatSort, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
                type: Optional
            }] }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }]; }, { disableClear: [{
            type: Input
        }], id: [{
            type: Input,
            args: ['mat-sort-header']
        }], arrowPosition: [{
            type: Input
        }], start: [{
            type: Input
        }] }); })();
    return MatSortHeader;
}(_MatSortHeaderMixinBase));
export { MatSortHeader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9zb3J0L3NvcnQtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNkIsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxLQUFLLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBYyxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsd0NBQXdDLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsc0RBQXNEO0FBQ3RELG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNwQjtBQUMwQixJQUQxQjtBQUNJLElBRHFCLENBQUM7QUFDMUIsSUFEeUIsd0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQzFCLElBQU0sdUJBQXVCLEdBQ3pCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBMkJyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRVMsSUF1QjBCLGlDQUF1QjtBQUMxRCxJQTBDRSx1QkFBbUIsS0FBd0IsRUFDL0IsaUJBQW9DLEVBQ2pCLEtBQWMsRUFFdEIsVUFBa0M7QUFDMUQsSUFBYTtBQUNkO0FBQWdGO0FBQzNELE9BQ0o7QUFDakIsSUFBc0IsYUFBNEIsRUFDNUIsV0FBcUM7QUFDM0QsUUFYRTtBQUFhLFFBV1gsOEZBQThGO0FBQ2xHLFFBQUksb0ZBQW9GO0FBQ3hGLFFBQUksaUZBQWlGO0FBQ3JGLFFBQUksNEJBQTRCO0FBQ2hDLFFBQUksaUJBQU8sU0EyQlI7QUFDSCxRQTNDcUIsV0FBSyxHQUFMLEtBQUssQ0FBbUI7QUFBQyxRQUViLFdBQUssR0FBTCxLQUFLLENBQVM7QUFBQyxRQUV2QixnQkFBVSxHQUFWLFVBQVUsQ0FBd0I7QUFBQyxRQUt0QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtBQUFDLFFBQzdCLGlCQUFXLEdBQVgsV0FBVyxDQUEwQjtBQUFDLFFBakQxRDtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSx3QkFBa0IsR0FBWSxLQUFLLENBQUM7QUFDdEMsUUFRRSwrRUFBK0U7QUFDakYsUUFBRSxxQkFBZSxHQUFrQixFQUFFLENBQUM7QUFDdEMsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsZ0NBQTBCLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLFFBT0UsZ0VBQWdFO0FBQ2xFLFFBQVcsbUJBQWEsR0FBdUIsT0FBTyxDQUFDO0FBQ3ZELFFBMkJJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEIsWUFBTSxNQUFNLHdDQUF3QyxFQUFFLENBQUM7QUFDdkQsU0FBSztBQUNMLFFBQ0ksS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUM1RixhQUFTLFNBQVMsQ0FBQztBQUNiLFlBQUksSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDaEMsZ0JBQVksS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDekMsYUFBVztBQUNYLFlBQ1UsdUZBQXVGO0FBQ2pHLFlBQVUsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUM1RixnQkFBWSxLQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDO0FBQ3BELGdCQUFZLEtBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBQ3BHLGFBQVc7QUFDWCxZQUNVLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxRQUNJLElBQUksYUFBYSxJQUFJLFdBQVcsRUFBRTtBQUN0QyxZQUFNLHlEQUF5RDtBQUMvRCxZQUFNLGdEQUFnRDtBQUN0RCxZQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztBQUM5QyxpQkFBVyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7QUFDeEUsU0FBSztBQUNMO0FBR0UsSUFIQSxDQUFDO0FBQ0gsSUFoREUsc0JBQ0ksdUNBQVk7QUFBSSxRQUZwQix3RkFBd0Y7QUFDMUYsYUFBRSxjQUM4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzNELGFBQUMsVUFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFO0FBQTBCO0FBRVIsT0FKeUM7QUFDNUQsSUErQ0UsZ0NBQVEsR0FBUjtBQUNELFFBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNyQyxZQUFNLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckMsU0FBSztBQUNMLFFBQ0ksNkZBQTZGO0FBQ2pHLFFBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDakMsUUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQzdCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQztBQUN2RSxRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUVILElBQUUsbUNBQVcsR0FBWDtBQUFjLFFBQ1osK0VBQStFO0FBQ25GLFFBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEQsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsUUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0MsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBRSxnREFBd0IsR0FBeEIsVUFBeUIsT0FBZ0I7QUFDM0MsUUFBSSwyRUFBMkU7QUFDL0UsUUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxPQUFPLEVBQUU7QUFBRSxZQUFBLE9BQU87QUFBQyxTQUFDO0FBQ2xELFFBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUN0QyxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNuQyxZQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQ25DLGdCQUFRLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBQzlGLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBQzlGLGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLG9EQUE0QixHQUE1QixVQUE2QixTQUFtQztBQUNsRSxRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLFFBQ0ksc0ZBQXNGO0FBQzFGLFFBQUksOERBQThEO0FBQ2xFLFFBQUksSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7QUFDekMsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUMsQ0FBQztBQUNyRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSw0RUFBNEU7QUFDOUUsSUFBRSxvQ0FBWSxHQUFaO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtBQUFFLFlBQUEsT0FBTztBQUFDLFNBQUM7QUFDdkMsUUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixRQUNJLG1GQUFtRjtBQUN2RixRQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUNwRixZQUFNLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUM7QUFDN0MsU0FBSztBQUNMLFFBQ0ksNEZBQTRGO0FBQ2hHLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksSUFBTSxTQUFTLEdBQTZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLFlBQVEsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztBQUM5RCxZQUFRLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBQyxDQUFDO0FBQzdELFFBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELFFBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztBQUNwQyxJQUFFLENBQUM7QUFFSCxJQUFFLDhGQUE4RjtBQUNoRyxJQUFFLGlDQUFTLEdBQVQ7QUFDRixRQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7QUFDdkMsWUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUM1RSxJQUFFLENBQUM7QUFFSCxJQUFFLG9GQUFvRjtBQUN0RixJQUFFLCtDQUF1QixHQUF2QjtBQUFjLFFBQ1osT0FBTyxNQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLGVBQWlCLENBQUM7QUFDekUsSUFBRSxDQUFDO0FBRUgsSUFBRSwrREFBK0Q7QUFDakUsSUFBRSwwQ0FBa0IsR0FBbEI7QUFBYyxRQUNaLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0FBQ2hELFFBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUksU0FBUyxTQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQzNFLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FETDtBQUNMLElBQUUsNkNBQXFCLEdBQXJCO0FBQWMsUUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLFlBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixZQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUVILElBQUUsbUNBQVcsR0FBWDtBQUFjLFFBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFFLDZDQUFxQixHQUFyQjtBQUFjLFFBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtBQUFFLFlBQUEsT0FBTyxJQUFJLENBQUM7QUFBQyxTQUFDO0FBQzNDLFFBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ3RFLElBQUUsQ0FBQztBQUVILElBQUUsbUVBQW1FO0FBQ3JFLElBQUUsb0NBQVksR0FBWjtBQUFjLFFBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkQsSUFBRSxDQUFDLENBMU5LO0FBQUM7MEJBekJSLFNBQVMsU0FBQyw1Q0F5QnFCO1FBeEI5QixRQUFRLEVBQUUsbEJBeUJtQixnQkFyRXZCLGlCQUFpQjtBQTRDTSxzQkFDN0IsUUFBUSxFQUFFLGhDQTdDaUIsZ0JBakIzQixpQkFBaUI7VUE4RFEsc0JBQ3pCLGhDQTlEQSxnQkFZTSxPQUFPLHVCQXFIQSxRQUFRO0FBQU8sZ0RBQ2YsTUFBTSxTQUFDLDRCQUE0QixjQUFHLFFBQVE7QUFDekQsZ0JBekhJLFlBQVk7QUFBSSxnQkFIdEIsVUFBVTtBQUNYO0FBQVU7QUFDYSxxQkF3R3JCLEtBQUssU0FBQyxpQkFBaUI7QUFBTyxnQ0FHOUIsS0FBSztBQUFLLHdCQUdWLEtBQUs7QUFBSywrQkFHVixLQUFLO0FBQ1A7Ozs2TkE3RGdDLHNCQUUvQixJQUFJLEVBQUUsMEJBQ0osT0FBTyxFQUFFLGlCQUFpQiwwQkFDMUIsU0FBUyxFQUFFO0NBQWdCO09BQzNCLGNBQWMsRUFBRSxnQ0FBZ0M7V0FDaEQsY0FBYyxFQUFFLGlDQUFpQztXQUNqRCxrQkFBa0IsRUFBRSx5QkFBeUIsMEJBQzdDLGtDQUFrQyxFQUFFLGVBQWUsdUJBQ3BELHNCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxzQkFDL0MsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUNwQixVQUFVLEVBQUUsMEJBQ1YsaUJBQWlCLENBQUMsU0FBUywwQkFDM0IsaUJBQWlCLENBQUMsV0FBVywwQkFDN0IsaUJBQWlCLENBQUMsWUFBWSwwQkFDOUIsaUJBQWlCLENBQUMsWUFBWSwwQkFDOUIsaUJBQWlCLENBQUMsYUFBYSwwQkFDL0IsaUJBQWlCLENBQUMsYUFBYTttQkFDaEM7Ozs7Ozs7Ozs7Ozs7NHNDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBd0NNO0FBQUMsSUF1TFIsb0JBQUM7QUFDQSxDQURBLEFBdlBELENBeUJtQyx1QkFBdUIsR0E4TnpEO0FBQ0QsU0EvTmEsYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkRpc2FibGUsIENhbkRpc2FibGVDdG9yLCBtaXhpbkRpc2FibGVkfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge21lcmdlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNYXRTb3J0LCBNYXRTb3J0YWJsZX0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7bWF0U29ydEFuaW1hdGlvbnN9IGZyb20gJy4vc29ydC1hbmltYXRpb25zJztcbmltcG9ydCB7U29ydERpcmVjdGlvbn0gZnJvbSAnLi9zb3J0LWRpcmVjdGlvbic7XG5pbXBvcnQge2dldFNvcnRIZWFkZXJOb3RDb250YWluZWRXaXRoaW5Tb3J0RXJyb3J9IGZyb20gJy4vc29ydC1lcnJvcnMnO1xuaW1wb3J0IHtNYXRTb3J0SGVhZGVySW50bH0gZnJvbSAnLi9zb3J0LWhlYWRlci1pbnRsJztcblxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIHRoZSBzb3J0IGhlYWRlci5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRTb3J0SGVhZGVyQmFzZSB7fVxuY29uc3QgX01hdFNvcnRIZWFkZXJNaXhpbkJhc2U6IENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdFNvcnRIZWFkZXJCYXNlID1cbiAgICBtaXhpbkRpc2FibGVkKE1hdFNvcnRIZWFkZXJCYXNlKTtcblxuLyoqXG4gKiBWYWxpZCBwb3NpdGlvbnMgZm9yIHRoZSBhcnJvdyB0byBiZSBpbiBmb3IgaXRzIG9wYWNpdHkgYW5kIHRyYW5zbGF0aW9uLiBJZiB0aGUgc3RhdGUgaXMgYVxuICogc29ydCBkaXJlY3Rpb24sIHRoZSBwb3NpdGlvbiBvZiB0aGUgYXJyb3cgd2lsbCBiZSBhYm92ZS9iZWxvdyBhbmQgb3BhY2l0eSAwLiBJZiB0aGUgc3RhdGUgaXNcbiAqIGhpbnQsIHRoZSBhcnJvdyB3aWxsIGJlIGluIHRoZSBjZW50ZXIgd2l0aCBhIHNsaWdodCBvcGFjaXR5LiBBY3RpdmUgc3RhdGUgbWVhbnMgdGhlIGFycm93IHdpbGxcbiAqIGJlIGZ1bGx5IG9wYXF1ZSBpbiB0aGUgY2VudGVyLlxuICpcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IHR5cGUgQXJyb3dWaWV3U3RhdGUgPSBTb3J0RGlyZWN0aW9uIHwgJ2hpbnQnIHwgJ2FjdGl2ZSc7XG5cbi8qKlxuICogU3RhdGVzIGRlc2NyaWJpbmcgdGhlIGFycm93J3MgYW5pbWF0ZWQgcG9zaXRpb24gKGFuaW1hdGluZyBmcm9tU3RhdGUgdG8gdG9TdGF0ZSkuXG4gKiBJZiB0aGUgZnJvbVN0YXRlIGlzIG5vdCBkZWZpbmVkLCB0aGVyZSB3aWxsIGJlIG5vIGFuaW1hdGVkIHRyYW5zaXRpb24gdG8gdGhlIHRvU3RhdGUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXJyb3dWaWV3U3RhdGVUcmFuc2l0aW9uIHtcbiAgZnJvbVN0YXRlPzogQXJyb3dWaWV3U3RhdGU7XG4gIHRvU3RhdGU6IEFycm93Vmlld1N0YXRlO1xufVxuXG4vKiogQ29sdW1uIGRlZmluaXRpb24gYXNzb2NpYXRlZCB3aXRoIGEgYE1hdFNvcnRIZWFkZXJgLiAqL1xuaW50ZXJmYWNlIE1hdFNvcnRIZWFkZXJDb2x1bW5EZWYge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQXBwbGllcyBzb3J0aW5nIGJlaGF2aW9yIChjbGljayB0byBjaGFuZ2Ugc29ydCkgYW5kIHN0eWxlcyB0byBhbiBlbGVtZW50LCBpbmNsdWRpbmcgYW5cbiAqIGFycm93IHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgc29ydCBkaXJlY3Rpb24uXG4gKlxuICogTXVzdCBiZSBwcm92aWRlZCB3aXRoIGFuIGlkIGFuZCBjb250YWluZWQgd2l0aGluIGEgcGFyZW50IE1hdFNvcnQgZGlyZWN0aXZlLlxuICpcbiAqIElmIHVzZWQgb24gaGVhZGVyIGNlbGxzIGluIGEgQ2RrVGFibGUsIGl0IHdpbGwgYXV0b21hdGljYWxseSBkZWZhdWx0IGl0cyBpZCBmcm9tIGl0cyBjb250YWluaW5nXG4gKiBjb2x1bW4gZGVmaW5pdGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW21hdC1zb3J0LWhlYWRlcl0nLFxuICBleHBvcnRBczogJ21hdFNvcnRIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NvcnQtaGVhZGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc29ydC1oZWFkZXIuY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LXNvcnQtaGVhZGVyJyxcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soKScsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdfc2V0SW5kaWNhdG9ySGludFZpc2libGUodHJ1ZSknLFxuICAgICcobW91c2VsZWF2ZSknOiAnX3NldEluZGljYXRvckhpbnRWaXNpYmxlKGZhbHNlKScsXG4gICAgJ1thdHRyLmFyaWEtc29ydF0nOiAnX2dldEFyaWFTb3J0QXR0cmlidXRlKCknLFxuICAgICdbY2xhc3MubWF0LXNvcnQtaGVhZGVyLWRpc2FibGVkXSc6ICdfaXNEaXNhYmxlZCgpJyxcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxuICBhbmltYXRpb25zOiBbXG4gICAgbWF0U29ydEFuaW1hdGlvbnMuaW5kaWNhdG9yLFxuICAgIG1hdFNvcnRBbmltYXRpb25zLmxlZnRQb2ludGVyLFxuICAgIG1hdFNvcnRBbmltYXRpb25zLnJpZ2h0UG9pbnRlcixcbiAgICBtYXRTb3J0QW5pbWF0aW9ucy5hcnJvd09wYWNpdHksXG4gICAgbWF0U29ydEFuaW1hdGlvbnMuYXJyb3dQb3NpdGlvbixcbiAgICBtYXRTb3J0QW5pbWF0aW9ucy5hbGxvd0NoaWxkcmVuLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNvcnRIZWFkZXIgZXh0ZW5kcyBfTWF0U29ydEhlYWRlck1peGluQmFzZVxuICAgIGltcGxlbWVudHMgQ2FuRGlzYWJsZSwgTWF0U29ydGFibGUsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogRmxhZyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBpbmRpY2F0b3Igc2hvdWxkIGJlIGRpc3BsYXllZCB3aGlsZSB0aGUgc29ydCBpcyBub3QgYWN0aXZlLiBVc2VkIHRvXG4gICAqIHByb3ZpZGUgYW4gYWZmb3JkYW5jZSB0aGF0IHRoZSBoZWFkZXIgaXMgc29ydGFibGUgYnkgc2hvd2luZyBvbiBmb2N1cyBhbmQgaG92ZXIuXG4gICAqL1xuICBfc2hvd0luZGljYXRvckhpbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIHZpZXcgdHJhbnNpdGlvbiBzdGF0ZSBvZiB0aGUgYXJyb3cgKHRyYW5zbGF0aW9uLyBvcGFjaXR5KSAtIGluZGljYXRlcyBpdHMgYGZyb21gIGFuZCBgdG9gXG4gICAqIHBvc2l0aW9uIHRocm91Z2ggdGhlIGFuaW1hdGlvbi4gSWYgYW5pbWF0aW9ucyBhcmUgY3VycmVudGx5IGRpc2FibGVkLCB0aGUgZnJvbVN0YXRlIGlzIHJlbW92ZWRcbiAgICogc28gdGhhdCB0aGVyZSBpcyBubyBhbmltYXRpb24gZGlzcGxheWVkLlxuICAgKi9cbiAgX3ZpZXdTdGF0ZTogQXJyb3dWaWV3U3RhdGVUcmFuc2l0aW9uO1xuXG4gIC8qKiBUaGUgZGlyZWN0aW9uIHRoZSBhcnJvdyBzaG91bGQgYmUgZmFjaW5nIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gKi9cbiAgX2Fycm93RGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uID0gJyc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHZpZXcgc3RhdGUgYW5pbWF0aW9uIHNob3VsZCBzaG93IHRoZSB0cmFuc2l0aW9uIGJldHdlZW4gdGhlIGBmcm9tYCBhbmQgYHRvYCBzdGF0ZXMuXG4gICAqL1xuICBfZGlzYWJsZVZpZXdTdGF0ZUFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJRCBvZiB0aGlzIHNvcnQgaGVhZGVyLiBJZiB1c2VkIHdpdGhpbiB0aGUgY29udGV4dCBvZiBhIENka0NvbHVtbkRlZiwgdGhpcyB3aWxsIGRlZmF1bHQgdG9cbiAgICogdGhlIGNvbHVtbidzIG5hbWUuXG4gICAqL1xuICBASW5wdXQoJ21hdC1zb3J0LWhlYWRlcicpIGlkOiBzdHJpbmc7XG5cbiAgLyoqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhcnJvdyB0aGF0IGRpc3BsYXlzIHdoZW4gc29ydGVkLiAqL1xuICBASW5wdXQoKSBhcnJvd1Bvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuXG4gIC8qKiBPdmVycmlkZXMgdGhlIHNvcnQgc3RhcnQgdmFsdWUgb2YgdGhlIGNvbnRhaW5pbmcgTWF0U29ydCBmb3IgdGhpcyBNYXRTb3J0YWJsZS4gKi9cbiAgQElucHV0KCkgc3RhcnQ6ICdhc2MnIHwgJ2Rlc2MnO1xuXG4gIC8qKiBPdmVycmlkZXMgdGhlIGRpc2FibGUgY2xlYXIgdmFsdWUgb2YgdGhlIGNvbnRhaW5pbmcgTWF0U29ydCBmb3IgdGhpcyBNYXRTb3J0YWJsZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVDbGVhcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGVhcjsgfVxuICBzZXQgZGlzYWJsZUNsZWFyKHYpIHsgdGhpcy5fZGlzYWJsZUNsZWFyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpOyB9XG4gIHByaXZhdGUgX2Rpc2FibGVDbGVhcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2ludGw6IE1hdFNvcnRIZWFkZXJJbnRsLFxuICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfc29ydDogTWF0U29ydCxcbiAgICAgICAgICAgICAgQEluamVjdCgnTUFUX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYnKSBAT3B0aW9uYWwoKVxuICAgICAgICAgICAgICAgICAgcHVibGljIF9jb2x1bW5EZWY6IE1hdFNvcnRIZWFkZXJDb2x1bW5EZWYsXG4gICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgKiBAZGVwcmVjYXRlZCBfZm9jdXNNb25pdG9yIGFuZCBfZWxlbWVudFJlZiB0byBiZWNvbWUgcmVxdWlyZWQgcGFyYW1ldGVycy5cbiAgICAgICAgICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcj86IEZvY3VzTW9uaXRvcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIHVzZSBhIHN0cmluZyB0b2tlbiBmb3IgdGhlIGBfY29sdW1uRGVmYCwgYmVjYXVzZSB0aGUgdmFsdWUgaXMgcHJvdmlkZWQgYm90aCBieVxuICAgIC8vIGBtYXRlcmlhbC90YWJsZWAgYW5kIGBjZGsvdGFibGVgIGFuZCB3ZSBjYW4ndCBoYXZlIHRoZSBDREsgZGVwZW5kaW5nIG9uIE1hdGVyaWFsLFxuICAgIC8vIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGhhdmluZyB0aGUgc29ydCBoZWFkZXIgZGVwZW5kaW5nIG9uIHRoZSBDREsgdGFibGUgYmVjYXVzZVxuICAgIC8vIG9mIHRoaXMgc2luZ2xlIHJlZmVyZW5jZS5cbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKCFfc29ydCkge1xuICAgICAgdGhyb3cgZ2V0U29ydEhlYWRlck5vdENvbnRhaW5lZFdpdGhpblNvcnRFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gbWVyZ2UoX3NvcnQuc29ydENoYW5nZSwgX3NvcnQuX3N0YXRlQ2hhbmdlcywgX2ludGwuY2hhbmdlcylcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzU29ydGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFycm93RGlyZWN0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhpcyBoZWFkZXIgd2FzIHJlY2VudGx5IGFjdGl2ZSBhbmQgbm93IG5vIGxvbmdlciBzb3J0ZWQsIGFuaW1hdGUgYXdheSB0aGUgYXJyb3cuXG4gICAgICAgICAgaWYgKCF0aGlzLl9pc1NvcnRlZCgpICYmIHRoaXMuX3ZpZXdTdGF0ZSAmJiB0aGlzLl92aWV3U3RhdGUudG9TdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVWaWV3U3RhdGVBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3NldEFuaW1hdGlvblRyYW5zaXRpb25TdGF0ZSh7ZnJvbVN0YXRlOiAnYWN0aXZlJywgdG9TdGF0ZTogdGhpcy5fYXJyb3dEaXJlY3Rpb259KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoX2ZvY3VzTW9uaXRvciAmJiBfZWxlbWVudFJlZikge1xuICAgICAgLy8gV2UgdXNlIHRoZSBmb2N1cyBtb25pdG9yIGJlY2F1c2Ugd2UgYWxzbyB3YW50IHRvIHN0eWxlXG4gICAgICAvLyB0aGluZ3MgZGlmZmVyZW50bHkgYmFzZWQgb24gdGhlIGZvY3VzIG9yaWdpbi5cbiAgICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKG9yaWdpbiA9PiB0aGlzLl9zZXRJbmRpY2F0b3JIaW50VmlzaWJsZSghIW9yaWdpbikpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pZCAmJiB0aGlzLl9jb2x1bW5EZWYpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9jb2x1bW5EZWYubmFtZTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGFycm93IGFuZCBzZXQgdGhlIHZpZXcgc3RhdGUgdG8gYmUgaW1tZWRpYXRlbHkgdGhhdCBzdGF0ZS5cbiAgICB0aGlzLl91cGRhdGVBcnJvd0RpcmVjdGlvbigpO1xuICAgIHRoaXMuX3NldEFuaW1hdGlvblRyYW5zaXRpb25TdGF0ZShcbiAgICAgICAge3RvU3RhdGU6IHRoaXMuX2lzU29ydGVkKCkgPyAnYWN0aXZlJyA6IHRoaXMuX2Fycm93RGlyZWN0aW9ufSk7XG5cbiAgICB0aGlzLl9zb3J0LnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMC4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIF9mb2N1c01vbml0b3IgYW5kIF9lbGVtZW50UmVmLlxuICAgIGlmICh0aGlzLl9mb2N1c01vbml0b3IgJiYgdGhpcy5fZWxlbWVudFJlZikge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnQuZGVyZWdpc3Rlcih0aGlzKTtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFwiaGludFwiIHN0YXRlIHN1Y2ggdGhhdCB0aGUgYXJyb3cgd2lsbCBiZSBzZW1pLXRyYW5zcGFyZW50bHkgZGlzcGxheWVkIGFzIGEgaGludCB0byB0aGVcbiAgICogdXNlciBzaG93aW5nIHdoYXQgdGhlIGFjdGl2ZSBzb3J0IHdpbGwgYmVjb21lLiBJZiBzZXQgdG8gZmFsc2UsIHRoZSBhcnJvdyB3aWxsIGZhZGUgYXdheS5cbiAgICovXG4gIF9zZXRJbmRpY2F0b3JIaW50VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgLy8gTm8tb3AgaWYgdGhlIHNvcnQgaGVhZGVyIGlzIGRpc2FibGVkIC0gc2hvdWxkIG5vdCBtYWtlIHRoZSBoaW50IHZpc2libGUuXG4gICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQoKSAmJiB2aXNpYmxlKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5fc2hvd0luZGljYXRvckhpbnQgPSB2aXNpYmxlO1xuXG4gICAgaWYgKCF0aGlzLl9pc1NvcnRlZCgpKSB7XG4gICAgICB0aGlzLl91cGRhdGVBcnJvd0RpcmVjdGlvbigpO1xuICAgICAgaWYgKHRoaXMuX3Nob3dJbmRpY2F0b3JIaW50KSB7XG4gICAgICAgIHRoaXMuX3NldEFuaW1hdGlvblRyYW5zaXRpb25TdGF0ZSh7ZnJvbVN0YXRlOiB0aGlzLl9hcnJvd0RpcmVjdGlvbiwgdG9TdGF0ZTogJ2hpbnQnfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXRBbmltYXRpb25UcmFuc2l0aW9uU3RhdGUoe2Zyb21TdGF0ZTogJ2hpbnQnLCB0b1N0YXRlOiB0aGlzLl9hcnJvd0RpcmVjdGlvbn0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhbmltYXRpb24gdHJhbnNpdGlvbiB2aWV3IHN0YXRlIGZvciB0aGUgYXJyb3cncyBwb3NpdGlvbiBhbmQgb3BhY2l0eS4gSWYgdGhlXG4gICAqIGBkaXNhYmxlVmlld1N0YXRlQW5pbWF0aW9uYCBmbGFnIGlzIHNldCB0byB0cnVlLCB0aGUgYGZyb21TdGF0ZWAgd2lsbCBiZSBpZ25vcmVkIHNvIHRoYXRcbiAgICogbm8gYW5pbWF0aW9uIGFwcGVhcnMuXG4gICAqL1xuICBfc2V0QW5pbWF0aW9uVHJhbnNpdGlvblN0YXRlKHZpZXdTdGF0ZTogQXJyb3dWaWV3U3RhdGVUcmFuc2l0aW9uKSB7XG4gICAgdGhpcy5fdmlld1N0YXRlID0gdmlld1N0YXRlO1xuXG4gICAgLy8gSWYgdGhlIGFuaW1hdGlvbiBmb3IgYXJyb3cgcG9zaXRpb24gc3RhdGUgKG9wYWNpdHkvdHJhbnNsYXRpb24pIHNob3VsZCBiZSBkaXNhYmxlZCxcbiAgICAvLyByZW1vdmUgdGhlIGZyb21TdGF0ZSBzbyB0aGF0IGl0IGp1bXBzIHJpZ2h0IHRvIHRoZSB0b1N0YXRlLlxuICAgIGlmICh0aGlzLl9kaXNhYmxlVmlld1N0YXRlQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl92aWV3U3RhdGUgPSB7dG9TdGF0ZTogdmlld1N0YXRlLnRvU3RhdGV9O1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUcmlnZ2VycyB0aGUgc29ydCBvbiB0aGlzIHNvcnQgaGVhZGVyIGFuZCByZW1vdmVzIHRoZSBpbmRpY2F0b3IgaGludC4gKi9cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkKCkpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLl9zb3J0LnNvcnQodGhpcyk7XG5cbiAgICAvLyBEbyBub3Qgc2hvdyB0aGUgYW5pbWF0aW9uIGlmIHRoZSBoZWFkZXIgd2FzIGFscmVhZHkgc2hvd24gaW4gdGhlIHJpZ2h0IHBvc2l0aW9uLlxuICAgIGlmICh0aGlzLl92aWV3U3RhdGUudG9TdGF0ZSA9PT0gJ2hpbnQnIHx8IHRoaXMuX3ZpZXdTdGF0ZS50b1N0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5fZGlzYWJsZVZpZXdTdGF0ZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGFycm93IGlzIG5vdyBzb3J0ZWQsIGFuaW1hdGUgdGhlIGFycm93IGludG8gcGxhY2UuIE90aGVyd2lzZSwgYW5pbWF0ZSBpdCBhd2F5IGludG9cbiAgICAvLyB0aGUgZGlyZWN0aW9uIGl0IGlzIGZhY2luZy5cbiAgICBjb25zdCB2aWV3U3RhdGU6IEFycm93Vmlld1N0YXRlVHJhbnNpdGlvbiA9IHRoaXMuX2lzU29ydGVkKCkgP1xuICAgICAgICB7ZnJvbVN0YXRlOiB0aGlzLl9hcnJvd0RpcmVjdGlvbiwgdG9TdGF0ZTogJ2FjdGl2ZSd9IDpcbiAgICAgICAge2Zyb21TdGF0ZTogJ2FjdGl2ZScsIHRvU3RhdGU6IHRoaXMuX2Fycm93RGlyZWN0aW9ufTtcbiAgICB0aGlzLl9zZXRBbmltYXRpb25UcmFuc2l0aW9uU3RhdGUodmlld1N0YXRlKTtcblxuICAgIHRoaXMuX3Nob3dJbmRpY2F0b3JIaW50ID0gZmFsc2U7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIE1hdFNvcnRIZWFkZXIgaXMgY3VycmVudGx5IHNvcnRlZCBpbiBlaXRoZXIgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIuICovXG4gIF9pc1NvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydC5hY3RpdmUgPT0gdGhpcy5pZCAmJlxuICAgICAgICAodGhpcy5fc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnIHx8IHRoaXMuX3NvcnQuZGlyZWN0aW9uID09PSAnZGVzYycpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGFuaW1hdGlvbiBzdGF0ZSBmb3IgdGhlIGFycm93IGRpcmVjdGlvbiAoaW5kaWNhdG9yIGFuZCBwb2ludGVycykuICovXG4gIF9nZXRBcnJvd0RpcmVjdGlvblN0YXRlKCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9pc1NvcnRlZCgpID8gJ2FjdGl2ZS0nIDogJyd9JHt0aGlzLl9hcnJvd0RpcmVjdGlvbn1gO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGFycm93IHBvc2l0aW9uIHN0YXRlIChvcGFjaXR5LCB0cmFuc2xhdGlvbikuICovXG4gIF9nZXRBcnJvd1ZpZXdTdGF0ZSgpIHtcbiAgICBjb25zdCBmcm9tU3RhdGUgPSB0aGlzLl92aWV3U3RhdGUuZnJvbVN0YXRlO1xuICAgIHJldHVybiAoZnJvbVN0YXRlID8gYCR7ZnJvbVN0YXRlfS10by1gIDogJycpICsgdGhpcy5fdmlld1N0YXRlLnRvU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZGlyZWN0aW9uIHRoZSBhcnJvdyBzaG91bGQgYmUgcG9pbnRpbmcuIElmIGl0IGlzIG5vdCBzb3J0ZWQsIHRoZSBhcnJvdyBzaG91bGQgYmVcbiAgICogZmFjaW5nIHRoZSBzdGFydCBkaXJlY3Rpb24uIE90aGVyd2lzZSBpZiBpdCBpcyBzb3J0ZWQsIHRoZSBhcnJvdyBzaG91bGQgcG9pbnQgaW4gdGhlIGN1cnJlbnRseVxuICAgKiBhY3RpdmUgc29ydGVkIGRpcmVjdGlvbi4gVGhlIHJlYXNvbiB0aGlzIGlzIHVwZGF0ZWQgdGhyb3VnaCBhIGZ1bmN0aW9uIGlzIGJlY2F1c2UgdGhlIGRpcmVjdGlvblxuICAgKiBzaG91bGQgb25seSBiZSBjaGFuZ2VkIGF0IHNwZWNpZmljIHRpbWVzIC0gd2hlbiBkZWFjdGl2YXRlZCBidXQgdGhlIGhpbnQgaXMgZGlzcGxheWVkIGFuZCB3aGVuXG4gICAqIHRoZSBzb3J0IGlzIGFjdGl2ZSBhbmQgdGhlIGRpcmVjdGlvbiBjaGFuZ2VzLiBPdGhlcndpc2UgdGhlIGFycm93J3MgZGlyZWN0aW9uIHNob3VsZCBsaW5nZXJcbiAgICogaW4gY2FzZXMgc3VjaCBhcyB0aGUgc29ydCBiZWNvbWluZyBkZWFjdGl2YXRlZCBidXQgd2Ugd2FudCB0byBhbmltYXRlIHRoZSBhcnJvdyBhd2F5IHdoaWxlXG4gICAqIHByZXNlcnZpbmcgaXRzIGRpcmVjdGlvbiwgZXZlbiB0aG91Z2ggdGhlIG5leHQgc29ydCBkaXJlY3Rpb24gaXMgYWN0dWFsbHkgZGlmZmVyZW50IGFuZCBzaG91bGRcbiAgICogb25seSBiZSBjaGFuZ2VkIG9uY2UgdGhlIGFycm93IGRpc3BsYXlzIGFnYWluIChoaW50IG9yIGFjdGl2YXRpb24pLlxuICAgKi9cbiAgX3VwZGF0ZUFycm93RGlyZWN0aW9uKCkge1xuICAgIHRoaXMuX2Fycm93RGlyZWN0aW9uID0gdGhpcy5faXNTb3J0ZWQoKSA/XG4gICAgICAgIHRoaXMuX3NvcnQuZGlyZWN0aW9uIDpcbiAgICAgICAgKHRoaXMuc3RhcnQgfHwgdGhpcy5fc29ydC5zdGFydCk7XG4gIH1cblxuICBfaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydC5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFyaWEtc29ydCBhdHRyaWJ1dGUgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGlzIHNvcnQgaGVhZGVyLiBJZiB0aGlzIGhlYWRlclxuICAgKiBpcyBub3Qgc29ydGVkLCByZXR1cm5zIG51bGwgc28gdGhhdCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgaG9zdCBlbGVtZW50LiBBcmlhIHNwZWNcbiAgICogc2F5cyB0aGF0IHRoZSBhcmlhLXNvcnQgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgcHJlc2VudCBvbiBvbmUgaGVhZGVyIGF0IGEgdGltZSwgc28gcmVtb3ZpbmdcbiAgICogZW5zdXJlcyB0aGlzIGlzIHRydWUuXG4gICAqL1xuICBfZ2V0QXJpYVNvcnRBdHRyaWJ1dGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NvcnRlZCgpKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICByZXR1cm4gdGhpcy5fc29ydC5kaXJlY3Rpb24gPT0gJ2FzYycgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBhcnJvdyBpbnNpZGUgdGhlIHNvcnQgaGVhZGVyIHNob3VsZCBiZSByZW5kZXJlZC4gKi9cbiAgX3JlbmRlckFycm93KCkge1xuICAgIHJldHVybiAhdGhpcy5faXNEaXNhYmxlZCgpIHx8IHRoaXMuX2lzU29ydGVkKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZUNsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19