/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-panel-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, SPACE, hasModifierKey } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Host, Input, ViewEncapsulation, Optional, Inject, } from '@angular/core';
import { merge, Subscription, EMPTY } from 'rxjs';
import { filter } from 'rxjs/operators';
import { matExpansionAnimations } from './expansion-animations';
import { MatExpansionPanel, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, } from './expansion-panel';
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/common';

const _c0 = function (a0, a1) { return { collapsedHeight: a0, expandedHeight: a1 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function MatExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@indicatorRotate", ctx_r0._getExpandedState());
} }
const _c2 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c3 = ["mat-panel-title", "mat-panel-description", "*"];
export class MatExpansionPanelHeader {
    /**
     * @param {?} panel
     * @param {?} _element
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?=} defaultOptions
     */
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = Subscription.EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */
        this._animationsDisabled = true;
        /** @type {?} */
        const accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(filter((/**
             * @param {?} changes
             * @return {?}
             */
            changes => !!(changes['hideToggle'] || changes['togglePosition'])))) :
            EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((/**
             * @param {?} changes
             * @return {?}
             */
            changes => {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            }))))
                .subscribe((/**
             * @return {?}
             */
            () => this._changeDetectorRef.markForCheck()));
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(filter((/**
         * @return {?}
         */
        () => panel._containsFocus())))
            .subscribe((/**
         * @return {?}
         */
        () => _focusMonitor.focusVia(_element, 'program')));
        _focusMonitor.monitor(_element).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (origin && panel.accordion) {
                panel.accordion._handleHeaderFocus(this);
            }
        }));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * @return {?}
     */
    _animationStarted() {
        // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
        // there to work around a bug in Angular (see #13088), however this introduces a different
        // issue. The new transition will cause the header to animate in on init (see #16067), if the
        // consumer has set a header height that is different from the default one. We work around it
        // by disabling animations on the header and re-enabling them after the first animation has run.
        // Note that Angular dispatches animation events even if animations are disabled. Ideally this
        // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
        // for https://github.com/angular/angular/issues/18847 to be resolved.
        this._animationsDisabled = false;
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @return {?}
     */
    get disabled() {
        return this.panel.disabled;
    }
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    _toggle() {
        if (!this.disabled) {
            this.panel.toggle();
        }
    }
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    _isExpanded() {
        return this.panel.expanded;
    }
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /**
     * Gets the panel id.
     * @return {?}
     */
    _getPanelId() {
        return this.panel.id;
    }
    /**
     * Gets the toggle position for the header.
     * @return {?}
     */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case SPACE:
            case ENTER:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @param {?=} origin Origin of the action that triggered the focus.
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._element, origin, options);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
}
MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) { return new (t || MatExpansionPanelHeader)(ɵngcc0.ɵɵdirectiveInject(MatExpansionPanel, 1), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8)); };
MatExpansionPanelHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatExpansionPanelHeader, selectors: [["mat-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "mat-expansion-panel-header"], hostVars: 19, hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵcomponentHostSyntheticListener("@expansionHeight.start", function MatExpansionPanelHeader_animation_expansionHeight_start_HostBindingHandler() { return ctx._animationStarted(); });
        ɵngcc0.ɵɵlistener("click", function MatExpansionPanelHeader_click_HostBindingHandler() { return ctx._toggle(); })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? 0 - 1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@.disabled", ctx._animationsDisabled)("@expansionHeight", ɵngcc0.ɵɵpureFunction2(16, _c1, ctx._getExpandedState(), ɵngcc0.ɵɵpureFunction2(13, _c0, ctx.collapsedHeight, ctx.expandedHeight)));
        ɵngcc0.ɵɵclassProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
    } }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, ngContentSelectors: _c3, decls: 5, vars: 1, consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]], template: function MatExpansionPanelHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵprojection(3, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showToggle());
    } }, directives: [ɵngcc2.NgIf], styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"], encapsulation: 2, data: { animation: [
            matExpansionAnimations.indicatorRotate,
            matExpansionAnimations.expansionHeaderHeight
        ] }, changeDetection: 0 });
/** @nocollapse */
MatExpansionPanelHeader.ctorParameters = () => [
    { type: MatExpansionPanel, decorators: [{ type: Host }] },
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: Optional }] }
];
MatExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: Input }],
    collapsedHeight: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatExpansionPanelHeader, [{
        type: Component,
        args: [{
                selector: 'mat-expansion-panel-header',
                template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    matExpansionAnimations.indicatorRotate,
                    matExpansionAnimations.expansionHeaderHeight
                ],
                host: {
                    'class': 'mat-expansion-panel-header',
                    'role': 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.mat-expanded]': '_isExpanded()',
                    '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
                    '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@.disabled]': '_animationsDisabled',
                    '(@expansionHeight.start)': '_animationStarted()',
                    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`
                },
                styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
            }]
    }], function () { return [{ type: MatExpansionPanel, decorators: [{
                type: Host
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: Optional
            }] }]; }, { expandedHeight: [{
            type: Input
        }], collapsedHeight: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatExpansionPanelHeader.prototype._parentChangeSubscription;
    /**
     * Whether Angular animations in the panel header should be disabled.
     * @type {?}
     */
    MatExpansionPanelHeader.prototype._animationsDisabled;
    /**
     * Height of the header while the panel is expanded.
     * @type {?}
     */
    MatExpansionPanelHeader.prototype.expandedHeight;
    /**
     * Height of the header while the panel is collapsed.
     * @type {?}
     */
    MatExpansionPanelHeader.prototype.collapsedHeight;
    /** @type {?} */
    MatExpansionPanelHeader.prototype.panel;
    /**
     * @type {?}
     * @private
     */
    MatExpansionPanelHeader.prototype._element;
    /**
     * @type {?}
     * @private
     */
    MatExpansionPanelHeader.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MatExpansionPanelHeader.prototype._changeDetectorRef;
}
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
export class MatExpansionPanelDescription {
}
MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) { return new (t || MatExpansionPanelDescription)(); };
MatExpansionPanelDescription.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatExpansionPanelDescription, selectors: [["mat-panel-description"]], hostAttrs: [1, "mat-expansion-panel-header-description"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatExpansionPanelDescription, [{
        type: Directive,
        args: [{
                selector: 'mat-panel-description',
                host: {
                    class: 'mat-expansion-panel-header-description'
                }
            }]
    }], null, null); })();
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
export class MatExpansionPanelTitle {
}
MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) { return new (t || MatExpansionPanelTitle)(); };
MatExpansionPanelTitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatExpansionPanelTitle, selectors: [["mat-panel-title"]], hostAttrs: [1, "mat-expansion-panel-header-title"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatExpansionPanelTitle, [{
        type: Directive,
        args: [{
                selector: 'mat-panel-title',
                host: {
                    class: 'mat-expansion-panel-header-title'
                }
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxZQUFZLEVBQStCLE1BQU0sbUJBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsbUNBQW1DLEdBQ3BDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0I7QUFBSTtBQUFrQztBQUFHO0FBTXJCOzs7Ozs7Ozs7Ozs7Ozs7QUFvQ3BCLE1BQU0sT0FBTyx1QkFBdUI7QUFBRztBQUFRO0FBQXdCO0FBQ2xEO0FBQWdDO0FBRXRCO0FBQWtDO0FBQVEsSUFHdkUsWUFDbUIsS0FBd0IsRUFDL0IsUUFBb0IsRUFDcEIsYUFBMkIsRUFDM0Isa0JBQXFDLEVBRXpDLGNBQWdEO0FBQzFELFFBTnFCLFVBQUssR0FBTCxLQUFLLENBQW1CO0FBQUMsUUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtBQUFDLFFBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0FBQUMsUUFD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QTZDO0FBQUM7QUFDbkQ7QUFBSTtBQUE2QjtBQUFHO0FBQ2tCO0FBOEl2RCxNQUFNLE9BQU8sNEJBQTRCO0FBQUc7d0RBTjNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsdUJBQXVCO0dBQ2pDLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsd0NBQXdDLGtCQUNoRCxjQUNGOzs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFJO0FBQXVCO0FBQUc7QUFLSztBQVF6QyxNQUFNLE9BQU8sc0JBQXNCO0FBQUc7a0RBTnJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCO1NBQzNCLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsa0NBQWtDLGtCQUMxQyxjQUNGOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNhYmxlT3B0aW9uLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtFTlRFUiwgU1BBQ0UsIGhhc01vZGlmaWVyS2V5fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgU3Vic2NyaXB0aW9uLCBFTVBUWX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHttYXRFeHBhbnNpb25BbmltYXRpb25zfSBmcm9tICcuL2V4cGFuc2lvbi1hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIE1hdEV4cGFuc2lvblBhbmVsLFxuICBNYXRFeHBhbnNpb25QYW5lbERlZmF1bHRPcHRpb25zLFxuICBNQVRfRVhQQU5TSU9OX1BBTkVMX0RFRkFVTFRfT1BUSU9OUyxcbn0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuaW1wb3J0IHtNYXRBY2NvcmRpb25Ub2dnbGVQb3NpdGlvbn0gZnJvbSAnLi9hY2NvcmRpb24tYmFzZSc7XG5cblxuLyoqXG4gKiBgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb3JyZXNwb25kcyB0byB0aGUgaGVhZGVyIGVsZW1lbnQgb2YgYW4gYDxtYXQtZXhwYW5zaW9uLXBhbmVsPmAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgbWF0RXhwYW5zaW9uQW5pbWF0aW9ucy5pbmRpY2F0b3JSb3RhdGUsXG4gICAgbWF0RXhwYW5zaW9uQW5pbWF0aW9ucy5leHBhbnNpb25IZWFkZXJIZWlnaHRcbiAgXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gICAgJ3JvbGUnOiAnYnV0dG9uJyxcbiAgICAnW2F0dHIuaWRdJzogJ3BhbmVsLl9oZWFkZXJJZCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IC0xIDogMCcsXG4gICAgJ1thdHRyLmFyaWEtY29udHJvbHNdJzogJ19nZXRQYW5lbElkKCknLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAncGFuZWwuZGlzYWJsZWQnLFxuICAgICdbY2xhc3MubWF0LWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnW2NsYXNzLm1hdC1leHBhbnNpb24tdG9nZ2xlLWluZGljYXRvci1hZnRlcl0nOiBgX2dldFRvZ2dsZVBvc2l0aW9uKCkgPT09ICdhZnRlcidgLFxuICAgICdbY2xhc3MubWF0LWV4cGFuc2lvbi10b2dnbGUtaW5kaWNhdG9yLWJlZm9yZV0nOiBgX2dldFRvZ2dsZVBvc2l0aW9uKCkgPT09ICdiZWZvcmUnYCxcbiAgICAnKGNsaWNrKSc6ICdfdG9nZ2xlKCknLFxuICAgICcoa2V5ZG93biknOiAnX2tleWRvd24oJGV2ZW50KScsXG4gICAgJ1tALmRpc2FibGVkXSc6ICdfYW5pbWF0aW9uc0Rpc2FibGVkJyxcbiAgICAnKEBleHBhbnNpb25IZWlnaHQuc3RhcnQpJzogJ19hbmltYXRpb25TdGFydGVkKCknLFxuICAgICdbQGV4cGFuc2lvbkhlaWdodF0nOiBge1xuICAgICAgICB2YWx1ZTogX2dldEV4cGFuZGVkU3RhdGUoKSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29sbGFwc2VkSGVpZ2h0OiBjb2xsYXBzZWRIZWlnaHQsXG4gICAgICAgICAgZXhwYW5kZWRIZWlnaHQ6IGV4cGFuZGVkSGVpZ2h0XG4gICAgICAgIH1cbiAgICB9YCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RXhwYW5zaW9uUGFuZWxIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEZvY3VzYWJsZU9wdGlvbiB7XG4gIHByaXZhdGUgX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogV2hldGhlciBBbmd1bGFyIGFuaW1hdGlvbnMgaW4gdGhlIHBhbmVsIGhlYWRlciBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIF9hbmltYXRpb25zRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE1hdEV4cGFuc2lvblBhbmVsLFxuICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQEluamVjdChNQVRfRVhQQU5TSU9OX1BBTkVMX0RFRkFVTFRfT1BUSU9OUykgQE9wdGlvbmFsKClcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucz86IE1hdEV4cGFuc2lvblBhbmVsRGVmYXVsdE9wdGlvbnMpIHtcbiAgICBjb25zdCBhY2NvcmRpb25IaWRlVG9nZ2xlQ2hhbmdlID0gcGFuZWwuYWNjb3JkaW9uID9cbiAgICAgICAgcGFuZWwuYWNjb3JkaW9uLl9zdGF0ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihjaGFuZ2VzID0+ICEhKGNoYW5nZXNbJ2hpZGVUb2dnbGUnXSB8fCBjaGFuZ2VzWyd0b2dnbGVQb3NpdGlvbiddKSkpIDpcbiAgICAgICAgRU1QVFk7XG5cbiAgICAvLyBTaW5jZSB0aGUgdG9nZ2xlIHN0YXRlIGRlcGVuZHMgb24gYW4gQElucHV0IG9uIHRoZSBwYW5lbCwgd2VcbiAgICAvLyBuZWVkIHRvIHN1YnNjcmliZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5LlxuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9XG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgcGFuZWwub3BlbmVkLCBwYW5lbC5jbG9zZWQsIGFjY29yZGlvbkhpZGVUb2dnbGVDaGFuZ2UsXG4gICAgICAgICAgICBwYW5lbC5faW5wdXRDaGFuZ2VzLnBpcGUoZmlsdGVyKFxuICAgICAgICAgICAgICAgIGNoYW5nZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzWydoaWRlVG9nZ2xlJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc1snZGlzYWJsZWQnXSB8fFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzWyd0b2dnbGVQb3NpdGlvbiddKTtcbiAgICAgICAgICAgICAgICAgIH0pKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcblxuICAgIC8vIEF2b2lkcyBmb2N1cyBiZWluZyBsb3N0IGlmIHRoZSBwYW5lbCBjb250YWluZWQgdGhlIGZvY3VzZWQgZWxlbWVudCBhbmQgd2FzIGNsb3NlZC5cbiAgICBwYW5lbC5jbG9zZWRcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiBwYW5lbC5fY29udGFpbnNGb2N1cygpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShfZWxlbWVudCwgJ3Byb2dyYW0nKSk7XG5cbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnQpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKG9yaWdpbiAmJiBwYW5lbC5hY2NvcmRpb24pIHtcbiAgICAgICAgcGFuZWwuYWNjb3JkaW9uLl9oYW5kbGVIZWFkZXJGb2N1cyh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZWZhdWx0T3B0aW9ucykge1xuICAgICAgdGhpcy5leHBhbmRlZEhlaWdodCA9IGRlZmF1bHRPcHRpb25zLmV4cGFuZGVkSGVpZ2h0O1xuICAgICAgdGhpcy5jb2xsYXBzZWRIZWlnaHQgPSBkZWZhdWx0T3B0aW9ucy5jb2xsYXBzZWRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgX2FuaW1hdGlvblN0YXJ0ZWQoKSB7XG4gICAgLy8gQ3VycmVudGx5IHRoZSBgZXhwYW5zaW9uSGVpZ2h0YCBhbmltYXRpb24gaGFzIGEgYHZvaWQgPT4gY29sbGFwc2VkYCB0cmFuc2l0aW9uIHdoaWNoIGlzXG4gICAgLy8gdGhlcmUgdG8gd29yayBhcm91bmQgYSBidWcgaW4gQW5ndWxhciAoc2VlICMxMzA4OCksIGhvd2V2ZXIgdGhpcyBpbnRyb2R1Y2VzIGEgZGlmZmVyZW50XG4gICAgLy8gaXNzdWUuIFRoZSBuZXcgdHJhbnNpdGlvbiB3aWxsIGNhdXNlIHRoZSBoZWFkZXIgdG8gYW5pbWF0ZSBpbiBvbiBpbml0IChzZWUgIzE2MDY3KSwgaWYgdGhlXG4gICAgLy8gY29uc3VtZXIgaGFzIHNldCBhIGhlYWRlciBoZWlnaHQgdGhhdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdCBvbmUuIFdlIHdvcmsgYXJvdW5kIGl0XG4gICAgLy8gYnkgZGlzYWJsaW5nIGFuaW1hdGlvbnMgb24gdGhlIGhlYWRlciBhbmQgcmUtZW5hYmxpbmcgdGhlbSBhZnRlciB0aGUgZmlyc3QgYW5pbWF0aW9uIGhhcyBydW4uXG4gICAgLy8gTm90ZSB0aGF0IEFuZ3VsYXIgZGlzcGF0Y2hlcyBhbmltYXRpb24gZXZlbnRzIGV2ZW4gaWYgYW5pbWF0aW9ucyBhcmUgZGlzYWJsZWQuIElkZWFsbHkgdGhpc1xuICAgIC8vIHdvdWxkbid0IGJlIG5lY2Vzc2FyeSBpZiB3ZSByZW1vdmUgdGhlIGB2b2lkID0+IGNvbGxhcHNlZGAgdHJhbnNpdGlvbiwgYnV0IHdlIGhhdmUgdG8gd2FpdFxuICAgIC8vIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODg0NyB0byBiZSByZXNvbHZlZC5cbiAgICB0aGlzLl9hbmltYXRpb25zRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGhlYWRlciB3aGlsZSB0aGUgcGFuZWwgaXMgZXhwYW5kZWQuICovXG4gIEBJbnB1dCgpIGV4cGFuZGVkSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgaGVhZGVyIHdoaWxlIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuICovXG4gIEBJbnB1dCgpIGNvbGxhcHNlZEhlaWdodDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhc3NvY2lhdGVkIHBhbmVsIGlzIGRpc2FibGVkLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgYEZvY3VzYWJsZU9wdGlvbmAuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgcGFuZWwuICovXG4gIF90b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHBhbmVsIGlzIGV4cGFuZGVkLiAqL1xuICBfaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5leHBhbmRlZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBzdHJpbmcgb2YgdGhlIHBhbmVsLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLl9nZXRFeHBhbmRlZFN0YXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcGFuZWwgaWQuICovXG4gIF9nZXRQYW5lbElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgdG9nZ2xlIHBvc2l0aW9uIGZvciB0aGUgaGVhZGVyLiAqL1xuICBfZ2V0VG9nZ2xlUG9zaXRpb24oKTogTWF0QWNjb3JkaW9uVG9nZ2xlUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLnRvZ2dsZVBvc2l0aW9uO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgZXhwYW5kIGluZGljYXRvciBzaG91bGQgYmUgc2hvd24uICovXG4gIF9zaG93VG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wYW5lbC5oaWRlVG9nZ2xlICYmICF0aGlzLnBhbmVsLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBrZXlkb3duIGV2ZW50IGNhbGxpbmcgdG8gdG9nZ2xlKCkgaWYgYXBwcm9wcmlhdGUuICovXG4gIF9rZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAvLyBUb2dnbGUgZm9yIHNwYWNlIGFuZCBlbnRlciBrZXlzLlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl90b2dnbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMucGFuZWwuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgdGhpcy5wYW5lbC5hY2NvcmRpb24uX2hhbmRsZUhlYWRlcktleWRvd24oZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwYW5lbCBoZWFkZXIuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBgRm9jdXNhYmxlT3B0aW9uYC5cbiAgICogQHBhcmFtIG9yaWdpbiBPcmlnaW4gb2YgdGhlIGFjdGlvbiB0aGF0IHRyaWdnZXJlZCB0aGUgZm9jdXMuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGZvY3VzKG9yaWdpbjogRm9jdXNPcmlnaW4gPSAncHJvZ3JhbScsIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5fZWxlbWVudCwgb3JpZ2luLCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIGA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPmBcbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyB0byBiZSB1c2VkIGluc2lkZSBvZiB0aGUgTWF0RXhwYW5zaW9uUGFuZWxIZWFkZXIgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtcGFuZWwtZGVzY3JpcHRpb24nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRFeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIHt9XG5cbi8qKlxuICogYDxtYXQtcGFuZWwtdGl0bGU+YFxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHRvIGJlIHVzZWQgaW5zaWRlIG9mIHRoZSBNYXRFeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1wYW5lbC10aXRsZScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEV4cGFuc2lvblBhbmVsVGl0bGUge31cbiJdfQ==