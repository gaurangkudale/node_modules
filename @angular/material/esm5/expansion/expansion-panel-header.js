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

var _c0 = function (a0, a1) { return { collapsedHeight: a0, expandedHeight: a1 }; };
var _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function MatExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@indicatorRotate", ctx_r0._getExpandedState());
} }
var _c2 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c3 = ["mat-panel-title", "mat-panel-description", "*"];
var MatExpansionPanelHeader = /** @class */ (function () {
    function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        var _this = this;
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = Subscription.EMPTY;
        /** Whether Angular animations in the panel header should be disabled. */
        this._animationsDisabled = true;
        var accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(filter(function (changes) { return !!(changes['hideToggle'] || changes['togglePosition']); })) :
            EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter(function (changes) {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            })))
                .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(filter(function () { return panel._containsFocus(); }))
            .subscribe(function () { return _focusMonitor.focusVia(_element, 'program'); });
        _focusMonitor.monitor(_element).subscribe(function (origin) {
            if (origin && panel.accordion) {
                panel.accordion._handleHeaderFocus(_this);
            }
        });
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    MatExpansionPanelHeader.prototype._animationStarted = function () {
        // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
        // there to work around a bug in Angular (see #13088), however this introduces a different
        // issue. The new transition will cause the header to animate in on init (see #16067), if the
        // consumer has set a header height that is different from the default one. We work around it
        // by disabling animations on the header and re-enabling them after the first animation has run.
        // Note that Angular dispatches animation events even if animations are disabled. Ideally this
        // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
        // for https://github.com/angular/angular/issues/18847 to be resolved.
        this._animationsDisabled = false;
    };
    Object.defineProperty(MatExpansionPanelHeader.prototype, "disabled", {
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */
        get: function () {
            return this.panel.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggles the expanded state of the panel. */
    MatExpansionPanelHeader.prototype._toggle = function () {
        if (!this.disabled) {
            this.panel.toggle();
        }
    };
    /** Gets whether the panel is expanded. */
    MatExpansionPanelHeader.prototype._isExpanded = function () {
        return this.panel.expanded;
    };
    /** Gets the expanded state string of the panel. */
    MatExpansionPanelHeader.prototype._getExpandedState = function () {
        return this.panel._getExpandedState();
    };
    /** Gets the panel id. */
    MatExpansionPanelHeader.prototype._getPanelId = function () {
        return this.panel.id;
    };
    /** Gets the toggle position for the header. */
    MatExpansionPanelHeader.prototype._getTogglePosition = function () {
        return this.panel.togglePosition;
    };
    /** Gets whether the expand indicator should be shown. */
    MatExpansionPanelHeader.prototype._showToggle = function () {
        return !this.panel.hideToggle && !this.panel.disabled;
    };
    /** Handle keydown event calling to toggle() if appropriate. */
    MatExpansionPanelHeader.prototype._keydown = function (event) {
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
    };
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    MatExpansionPanelHeader.prototype.focus = function (origin, options) {
        if (origin === void 0) { origin = 'program'; }
        this._focusMonitor.focusVia(this._element, origin, options);
    };
    MatExpansionPanelHeader.prototype.ngOnDestroy = function () {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    };
    /** @nocollapse */
    MatExpansionPanelHeader.ctorParameters = function () { return [
        { type: MatExpansionPanel, decorators: [{ type: Host }] },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: Optional }] }
    ]; };
    MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{ type: Input }],
        collapsedHeight: [{ type: Input }]
    };
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
                    '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
                    '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@.disabled]': '_animationsDisabled',
                    '(@expansionHeight.start)': '_animationStarted()',
                    '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }"
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
    return MatExpansionPanelHeader;
}());
export { MatExpansionPanelHeader };
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelDescription = /** @class */ (function () {
    function MatExpansionPanelDescription() {
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
    }], function () { return []; }, null); })();
    return MatExpansionPanelDescription;
}());
export { MatExpansionPanelDescription };
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelTitle = /** @class */ (function () {
    function MatExpansionPanelTitle() {
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
    }], function () { return []; }, null); })();
    return MatExpansionPanelTitle;
}());
export { MatExpansionPanelTitle };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUErQixNQUFNLG1CQUFtQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLG1DQUFtQyxHQUNwQyxNQUFNLG1CQUFtQixDQUFDO0FBSTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0g7QUFFSSxJQXNDRixpQ0FDbUIsS0FBd0IsRUFDL0IsUUFBb0IsRUFDcEIsYUFBMkIsRUFDM0Isa0JBQXFDLEVBRXpDLGNBQWdEO0FBQzFELFFBUEUsaUJBeUNDO0FBQ0gsUUF6Q3FCLFVBQUssR0FBTCxLQUFLLENBQW1CO0FBQUMsUUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtBQUFDLFFBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0FBQUMsUUFDNUIs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Q0FBQzswREFOckMsU0FBUyxTQUFDLHNCQUNULFFBQVEsRUFBRTtHQUFpQixzQkFDM0IsSUFBSSxFQUFFLDBCQUNKLEtBQUssRUFBRSxrQ0FBa0Msc0JBQzFDLGtCQUNGOzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUEyQiw2QkFBQztBQUNyQyxDQURxQyxBQU50QyxJQU1zQztBQUN0QyxTQURhLHNCQUFzQjtBQUNuQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNhYmxlT3B0aW9uLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtFTlRFUiwgU1BBQ0UsIGhhc01vZGlmaWVyS2V5fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgU3Vic2NyaXB0aW9uLCBFTVBUWX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHttYXRFeHBhbnNpb25BbmltYXRpb25zfSBmcm9tICcuL2V4cGFuc2lvbi1hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIE1hdEV4cGFuc2lvblBhbmVsLFxuICBNYXRFeHBhbnNpb25QYW5lbERlZmF1bHRPcHRpb25zLFxuICBNQVRfRVhQQU5TSU9OX1BBTkVMX0RFRkFVTFRfT1BUSU9OUyxcbn0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuaW1wb3J0IHtNYXRBY2NvcmRpb25Ub2dnbGVQb3NpdGlvbn0gZnJvbSAnLi9hY2NvcmRpb24tYmFzZSc7XG5cblxuLyoqXG4gKiBgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPmBcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBjb3JyZXNwb25kcyB0byB0aGUgaGVhZGVyIGVsZW1lbnQgb2YgYW4gYDxtYXQtZXhwYW5zaW9uLXBhbmVsPmAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgbWF0RXhwYW5zaW9uQW5pbWF0aW9ucy5pbmRpY2F0b3JSb3RhdGUsXG4gICAgbWF0RXhwYW5zaW9uQW5pbWF0aW9ucy5leHBhbnNpb25IZWFkZXJIZWlnaHRcbiAgXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gICAgJ3JvbGUnOiAnYnV0dG9uJyxcbiAgICAnW2F0dHIuaWRdJzogJ3BhbmVsLl9oZWFkZXJJZCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IC0xIDogMCcsXG4gICAgJ1thdHRyLmFyaWEtY29udHJvbHNdJzogJ19nZXRQYW5lbElkKCknLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAncGFuZWwuZGlzYWJsZWQnLFxuICAgICdbY2xhc3MubWF0LWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnW2NsYXNzLm1hdC1leHBhbnNpb24tdG9nZ2xlLWluZGljYXRvci1hZnRlcl0nOiBgX2dldFRvZ2dsZVBvc2l0aW9uKCkgPT09ICdhZnRlcidgLFxuICAgICdbY2xhc3MubWF0LWV4cGFuc2lvbi10b2dnbGUtaW5kaWNhdG9yLWJlZm9yZV0nOiBgX2dldFRvZ2dsZVBvc2l0aW9uKCkgPT09ICdiZWZvcmUnYCxcbiAgICAnKGNsaWNrKSc6ICdfdG9nZ2xlKCknLFxuICAgICcoa2V5ZG93biknOiAnX2tleWRvd24oJGV2ZW50KScsXG4gICAgJ1tALmRpc2FibGVkXSc6ICdfYW5pbWF0aW9uc0Rpc2FibGVkJyxcbiAgICAnKEBleHBhbnNpb25IZWlnaHQuc3RhcnQpJzogJ19hbmltYXRpb25TdGFydGVkKCknLFxuICAgICdbQGV4cGFuc2lvbkhlaWdodF0nOiBge1xuICAgICAgICB2YWx1ZTogX2dldEV4cGFuZGVkU3RhdGUoKSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29sbGFwc2VkSGVpZ2h0OiBjb2xsYXBzZWRIZWlnaHQsXG4gICAgICAgICAgZXhwYW5kZWRIZWlnaHQ6IGV4cGFuZGVkSGVpZ2h0XG4gICAgICAgIH1cbiAgICB9YCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RXhwYW5zaW9uUGFuZWxIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEZvY3VzYWJsZU9wdGlvbiB7XG4gIHByaXZhdGUgX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogV2hldGhlciBBbmd1bGFyIGFuaW1hdGlvbnMgaW4gdGhlIHBhbmVsIGhlYWRlciBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIF9hbmltYXRpb25zRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEhvc3QoKSBwdWJsaWMgcGFuZWw6IE1hdEV4cGFuc2lvblBhbmVsLFxuICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgQEluamVjdChNQVRfRVhQQU5TSU9OX1BBTkVMX0RFRkFVTFRfT1BUSU9OUykgQE9wdGlvbmFsKClcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucz86IE1hdEV4cGFuc2lvblBhbmVsRGVmYXVsdE9wdGlvbnMpIHtcbiAgICBjb25zdCBhY2NvcmRpb25IaWRlVG9nZ2xlQ2hhbmdlID0gcGFuZWwuYWNjb3JkaW9uID9cbiAgICAgICAgcGFuZWwuYWNjb3JkaW9uLl9zdGF0ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihjaGFuZ2VzID0+ICEhKGNoYW5nZXNbJ2hpZGVUb2dnbGUnXSB8fCBjaGFuZ2VzWyd0b2dnbGVQb3NpdGlvbiddKSkpIDpcbiAgICAgICAgRU1QVFk7XG5cbiAgICAvLyBTaW5jZSB0aGUgdG9nZ2xlIHN0YXRlIGRlcGVuZHMgb24gYW4gQElucHV0IG9uIHRoZSBwYW5lbCwgd2VcbiAgICAvLyBuZWVkIHRvIHN1YnNjcmliZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5LlxuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9XG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgcGFuZWwub3BlbmVkLCBwYW5lbC5jbG9zZWQsIGFjY29yZGlvbkhpZGVUb2dnbGVDaGFuZ2UsXG4gICAgICAgICAgICBwYW5lbC5faW5wdXRDaGFuZ2VzLnBpcGUoZmlsdGVyKFxuICAgICAgICAgICAgICAgIGNoYW5nZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzWydoaWRlVG9nZ2xlJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc1snZGlzYWJsZWQnXSB8fFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzWyd0b2dnbGVQb3NpdGlvbiddKTtcbiAgICAgICAgICAgICAgICAgIH0pKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcblxuICAgIC8vIEF2b2lkcyBmb2N1cyBiZWluZyBsb3N0IGlmIHRoZSBwYW5lbCBjb250YWluZWQgdGhlIGZvY3VzZWQgZWxlbWVudCBhbmQgd2FzIGNsb3NlZC5cbiAgICBwYW5lbC5jbG9zZWRcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiBwYW5lbC5fY29udGFpbnNGb2N1cygpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShfZWxlbWVudCwgJ3Byb2dyYW0nKSk7XG5cbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnQpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKG9yaWdpbiAmJiBwYW5lbC5hY2NvcmRpb24pIHtcbiAgICAgICAgcGFuZWwuYWNjb3JkaW9uLl9oYW5kbGVIZWFkZXJGb2N1cyh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZWZhdWx0T3B0aW9ucykge1xuICAgICAgdGhpcy5leHBhbmRlZEhlaWdodCA9IGRlZmF1bHRPcHRpb25zLmV4cGFuZGVkSGVpZ2h0O1xuICAgICAgdGhpcy5jb2xsYXBzZWRIZWlnaHQgPSBkZWZhdWx0T3B0aW9ucy5jb2xsYXBzZWRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgX2FuaW1hdGlvblN0YXJ0ZWQoKSB7XG4gICAgLy8gQ3VycmVudGx5IHRoZSBgZXhwYW5zaW9uSGVpZ2h0YCBhbmltYXRpb24gaGFzIGEgYHZvaWQgPT4gY29sbGFwc2VkYCB0cmFuc2l0aW9uIHdoaWNoIGlzXG4gICAgLy8gdGhlcmUgdG8gd29yayBhcm91bmQgYSBidWcgaW4gQW5ndWxhciAoc2VlICMxMzA4OCksIGhvd2V2ZXIgdGhpcyBpbnRyb2R1Y2VzIGEgZGlmZmVyZW50XG4gICAgLy8gaXNzdWUuIFRoZSBuZXcgdHJhbnNpdGlvbiB3aWxsIGNhdXNlIHRoZSBoZWFkZXIgdG8gYW5pbWF0ZSBpbiBvbiBpbml0IChzZWUgIzE2MDY3KSwgaWYgdGhlXG4gICAgLy8gY29uc3VtZXIgaGFzIHNldCBhIGhlYWRlciBoZWlnaHQgdGhhdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdCBvbmUuIFdlIHdvcmsgYXJvdW5kIGl0XG4gICAgLy8gYnkgZGlzYWJsaW5nIGFuaW1hdGlvbnMgb24gdGhlIGhlYWRlciBhbmQgcmUtZW5hYmxpbmcgdGhlbSBhZnRlciB0aGUgZmlyc3QgYW5pbWF0aW9uIGhhcyBydW4uXG4gICAgLy8gTm90ZSB0aGF0IEFuZ3VsYXIgZGlzcGF0Y2hlcyBhbmltYXRpb24gZXZlbnRzIGV2ZW4gaWYgYW5pbWF0aW9ucyBhcmUgZGlzYWJsZWQuIElkZWFsbHkgdGhpc1xuICAgIC8vIHdvdWxkbid0IGJlIG5lY2Vzc2FyeSBpZiB3ZSByZW1vdmUgdGhlIGB2b2lkID0+IGNvbGxhcHNlZGAgdHJhbnNpdGlvbiwgYnV0IHdlIGhhdmUgdG8gd2FpdFxuICAgIC8vIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODg0NyB0byBiZSByZXNvbHZlZC5cbiAgICB0aGlzLl9hbmltYXRpb25zRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGhlYWRlciB3aGlsZSB0aGUgcGFuZWwgaXMgZXhwYW5kZWQuICovXG4gIEBJbnB1dCgpIGV4cGFuZGVkSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgaGVhZGVyIHdoaWxlIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuICovXG4gIEBJbnB1dCgpIGNvbGxhcHNlZEhlaWdodDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhc3NvY2lhdGVkIHBhbmVsIGlzIGRpc2FibGVkLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgYEZvY3VzYWJsZU9wdGlvbmAuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgcGFuZWwuICovXG4gIF90b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnBhbmVsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHBhbmVsIGlzIGV4cGFuZGVkLiAqL1xuICBfaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5leHBhbmRlZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBzdHJpbmcgb2YgdGhlIHBhbmVsLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLl9nZXRFeHBhbmRlZFN0YXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcGFuZWwgaWQuICovXG4gIF9nZXRQYW5lbElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgdG9nZ2xlIHBvc2l0aW9uIGZvciB0aGUgaGVhZGVyLiAqL1xuICBfZ2V0VG9nZ2xlUG9zaXRpb24oKTogTWF0QWNjb3JkaW9uVG9nZ2xlUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLnRvZ2dsZVBvc2l0aW9uO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgZXhwYW5kIGluZGljYXRvciBzaG91bGQgYmUgc2hvd24uICovXG4gIF9zaG93VG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wYW5lbC5oaWRlVG9nZ2xlICYmICF0aGlzLnBhbmVsLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIEhhbmRsZSBrZXlkb3duIGV2ZW50IGNhbGxpbmcgdG8gdG9nZ2xlKCkgaWYgYXBwcm9wcmlhdGUuICovXG4gIF9rZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAvLyBUb2dnbGUgZm9yIHNwYWNlIGFuZCBlbnRlciBrZXlzLlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl90b2dnbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMucGFuZWwuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgdGhpcy5wYW5lbC5hY2NvcmRpb24uX2hhbmRsZUhlYWRlcktleWRvd24oZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwYW5lbCBoZWFkZXIuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBgRm9jdXNhYmxlT3B0aW9uYC5cbiAgICogQHBhcmFtIG9yaWdpbiBPcmlnaW4gb2YgdGhlIGFjdGlvbiB0aGF0IHRyaWdnZXJlZCB0aGUgZm9jdXMuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGZvY3VzKG9yaWdpbjogRm9jdXNPcmlnaW4gPSAncHJvZ3JhbScsIG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5fZWxlbWVudCwgb3JpZ2luLCBvcHRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIGA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPmBcbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyB0byBiZSB1c2VkIGluc2lkZSBvZiB0aGUgTWF0RXhwYW5zaW9uUGFuZWxIZWFkZXIgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtcGFuZWwtZGVzY3JpcHRpb24nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRFeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIHt9XG5cbi8qKlxuICogYDxtYXQtcGFuZWwtdGl0bGU+YFxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHRvIGJlIHVzZWQgaW5zaWRlIG9mIHRoZSBNYXRFeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1wYW5lbC10aXRsZScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEV4cGFuc2lvblBhbmVsVGl0bGUge31cbiJdfQ==