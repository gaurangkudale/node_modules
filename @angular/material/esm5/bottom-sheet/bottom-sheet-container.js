/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, EventEmitter, Inject, Optional, } from '@angular/core';
import { BasePortalOutlet, CdkPortalOutlet, } from '@angular/cdk/portal';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheetConfig } from './bottom-sheet-config';
import { matBottomSheetAnimations } from './bottom-sheet-animations';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
// TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar
/**
 * Internal component that wraps user-provided bottom sheet content.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/layout';
import * as ɵngcc3 from '@angular/cdk/portal';

function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) { }
var MatBottomSheetContainer = /** @class */ (function (_super) {
    __extends(MatBottomSheetContainer, _super);
    function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, 
    /** The bottom sheet configuration. */
    bottomSheetConfig) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this.bottomSheetConfig = bottomSheetConfig;
        /** The state of the bottom sheet animations. */
        _this._animationState = 'void';
        /** Emits whenever the state of the animation changes. */
        _this._animationStateChanged = new EventEmitter();
        /** Element that was focused before the bottom sheet was opened. */
        _this._elementFocusedBeforeOpened = null;
        /**
         * Attaches a DOM portal to the bottom sheet container.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        _this.attachDomPortal = function (portal) {
            _this._validatePortalAttached();
            _this._setPanelClass();
            _this._savePreviouslyFocusedElement();
            return _this._portalOutlet.attachDomPortal(portal);
        };
        _this._document = document;
        _this._breakpointSubscription = breakpointObserver
            .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
            .subscribe(function () {
            _this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(Breakpoints.Medium));
            _this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(Breakpoints.Large));
            _this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(Breakpoints.XLarge));
        });
        return _this;
    }
    /** Attach a component portal as content to this bottom sheet container. */
    MatBottomSheetContainer.prototype.attachComponentPortal = function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this bottom sheet container. */
    MatBottomSheetContainer.prototype.attachTemplatePortal = function (portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    };
    /** Begin animation of bottom sheet entrance into view. */
    MatBottomSheetContainer.prototype.enter = function () {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    };
    /** Begin animation of the bottom sheet exiting from view. */
    MatBottomSheetContainer.prototype.exit = function () {
        if (!this._destroyed) {
            this._animationState = 'hidden';
            this._changeDetectorRef.markForCheck();
        }
    };
    MatBottomSheetContainer.prototype.ngOnDestroy = function () {
        this._breakpointSubscription.unsubscribe();
        this._destroyed = true;
    };
    MatBottomSheetContainer.prototype._onAnimationDone = function (event) {
        if (event.toState === 'hidden') {
            this._restoreFocus();
        }
        else if (event.toState === 'visible') {
            this._trapFocus();
        }
        this._animationStateChanged.emit(event);
    };
    MatBottomSheetContainer.prototype._onAnimationStart = function (event) {
        this._animationStateChanged.emit(event);
    };
    MatBottomSheetContainer.prototype._toggleClass = function (cssClass, add) {
        var classList = this._elementRef.nativeElement.classList;
        add ? classList.add(cssClass) : classList.remove(cssClass);
    };
    MatBottomSheetContainer.prototype._validatePortalAttached = function () {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
        }
    };
    MatBottomSheetContainer.prototype._setPanelClass = function () {
        var element = this._elementRef.nativeElement;
        var panelClass = this.bottomSheetConfig.panelClass;
        if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach(function (cssClass) { return element.classList.add(cssClass); });
        }
        else if (panelClass) {
            element.classList.add(panelClass);
        }
    };
    /** Moves the focus inside the focus trap. */
    MatBottomSheetContainer.prototype._trapFocus = function () {
        var element = this._elementRef.nativeElement;
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
        }
        if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else {
            var activeElement = this._document.activeElement;
            // Otherwise ensure that focus is on the container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the bottom sheet already, because it's possible that the
            // consumer turned off `autoFocus` in order to move focus themselves.
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    };
    /** Restores focus to the element that was focused before the bottom sheet was opened. */
    MatBottomSheetContainer.prototype._restoreFocus = function () {
        var toFocus = this._elementFocusedBeforeOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            var activeElement = this._document.activeElement;
            var element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the bottom sheet or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /** Saves a reference to the element that was focused before the bottom sheet was opened. */
    MatBottomSheetContainer.prototype._savePreviouslyFocusedElement = function () {
        var _this = this;
        this._elementFocusedBeforeOpened = this._document.activeElement;
        // The `focus` method isn't available during server-side rendering.
        if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then(function () { return _this._elementRef.nativeElement.focus(); });
        }
    };
    /** @nocollapse */
    MatBottomSheetContainer.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FocusTrapFactory },
        { type: BreakpointObserver },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: MatBottomSheetConfig }
    ]; };
    MatBottomSheetContainer.propDecorators = {
        _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }]
    };
MatBottomSheetContainer.ɵfac = function MatBottomSheetContainer_Factory(t) { return new (t || MatBottomSheetContainer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.BreakpointObserver), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(MatBottomSheetConfig)); };
MatBottomSheetContainer.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatBottomSheetContainer, selectors: [["mat-bottom-sheet-container"]], viewQuery: function MatBottomSheetContainer_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "mat-bottom-sheet-container"], hostVars: 2, hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵcomponentHostSyntheticListener("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-label", ctx.bottomSheetConfig == null ? null : ctx.bottomSheetConfig.ariaLabel);
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@state", ctx._animationState);
    } }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatBottomSheetContainer_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [ɵngcc3.CdkPortalOutlet], styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"], encapsulation: 2, data: { animation: [matBottomSheetAnimations.bottomSheetState] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBottomSheetContainer, [{
        type: Component,
        args: [{
                selector: 'mat-bottom-sheet-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [matBottomSheetAnimations.bottomSheetState],
                host: {
                    'class': 'mat-bottom-sheet-container',
                    'tabindex': '-1',
                    'role': 'dialog',
                    'aria-modal': 'true',
                    '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
                    '[@state]': '_animationState',
                    '(@state.start)': '_onAnimationStart($event)',
                    '(@state.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc2.BreakpointObserver }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: MatBottomSheetConfig }]; }, { _portalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: true }]
        }] }); })();
    return MatBottomSheetContainer;
}(BasePortalOutlet));
export { MatBottomSheetContainer };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LWNvbnRhaW5lci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFDTCxTQUFTLEVBR1QsU0FBUyxFQUVULFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZ0JBQWdCLEVBR2hCLGVBQWUsR0FFaEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBWSxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTlELGlGQUFpRjtBQUVqRjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7O0FBQ0g7QUFFVSxJQWdCbUMsMkNBQWdCO0FBQUMsSUF3QjVELGlDQUNVLFdBQW9DLEVBQ3BDLGtCQUFxQyxFQUNyQyxpQkFBbUMsRUFDM0Msa0JBQXNDLEVBQ1IsUUFBYTtBQUM5QyxJQUFHLHNDQUFzQztBQUMxQyxJQUFXLGlCQUF1QztBQUNsRCxRQVJFLFlBUUUsaUJBQU8sU0FhUjtBQUNILFFBckJZLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQ3JDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7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QkFDaEIsWUFBWSxFQUFFLE1BQU0sMEJBQ3BCLG1CQUFtQixFQUFFLDhCQUE4QiwwQkFDbkQsVUFBVSxFQUFFLGlCQUFpQiwwQkFDN0IsZ0JBQWdCLEVBQUUsMkJBQTJCLDBCQUM3QyxlQUFlLEVBQUUsMEJBQTBCO0dBQzVDOzs7Ozs7OERBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUt1RDtBQUFDLElBMEx6RCw4QkFBQztBQUNBLENBREEsQUFoTkQsQ0FrQjZDLGdCQUFnQixHQThMNUQ7QUFDRCxTQS9MYSx1QkFBdUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQmFzZVBvcnRhbE91dGxldCxcbiAgQ29tcG9uZW50UG9ydGFsLFxuICBUZW1wbGF0ZVBvcnRhbCxcbiAgQ2RrUG9ydGFsT3V0bGV0LFxuICBEb21Qb3J0YWwsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRDb25maWd9IGZyb20gJy4vYm90dG9tLXNoZWV0LWNvbmZpZyc7XG5pbXBvcnQge21hdEJvdHRvbVNoZWV0QW5pbWF0aW9uc30gZnJvbSAnLi9ib3R0b20tc2hlZXQtYW5pbWF0aW9ucyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuLy8gVE9ETyhjcmlzYmV0byk6IGNvbnNvbGlkYXRlIHNvbWUgbG9naWMgYmV0d2VlbiB0aGlzLCBNYXREaWFsb2cgYW5kIE1hdFNuYWNrQmFyXG5cbi8qKlxuICogSW50ZXJuYWwgY29tcG9uZW50IHRoYXQgd3JhcHMgdXNlci1wcm92aWRlZCBib3R0b20gc2hlZXQgY29udGVudC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWJvdHRvbS1zaGVldC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC1jb250YWluZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydib3R0b20tc2hlZXQtY29udGFpbmVyLmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW21hdEJvdHRvbVNoZWV0QW5pbWF0aW9ucy5ib3R0b21TaGVldFN0YXRlXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcicsXG4gICAgJ3RhYmluZGV4JzogJy0xJyxcbiAgICAncm9sZSc6ICdkaWFsb2cnLFxuICAgICdhcmlhLW1vZGFsJzogJ3RydWUnLFxuICAgICdbYXR0ci5hcmlhLWxhYmVsXSc6ICdib3R0b21TaGVldENvbmZpZz8uYXJpYUxhYmVsJyxcbiAgICAnW0BzdGF0ZV0nOiAnX2FuaW1hdGlvblN0YXRlJyxcbiAgICAnKEBzdGF0ZS5zdGFydCknOiAnX29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAc3RhdGUuZG9uZSknOiAnX29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJ1xuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRCb3R0b21TaGVldENvbnRhaW5lciBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9icmVha3BvaW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqIFRoZSBwb3J0YWwgb3V0bGV0IGluc2lkZSBvZiB0aGlzIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcblxuICAvKiogVGhlIHN0YXRlIG9mIHRoZSBib3R0b20gc2hlZXQgYW5pbWF0aW9ucy4gKi9cbiAgX2FuaW1hdGlvblN0YXRlOiAndm9pZCcgfCAndmlzaWJsZScgfCAnaGlkZGVuJyA9ICd2b2lkJztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIHN0YXRlIG9mIHRoZSBhbmltYXRpb24gY2hhbmdlcy4gKi9cbiAgX2FuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgLyoqIFRoZSBjbGFzcyB0aGF0IHRyYXBzIGFuZCBtYW5hZ2VzIGZvY3VzIHdpdGhpbiB0aGUgYm90dG9tIHNoZWV0LiAqL1xuICBwcml2YXRlIF9mb2N1c1RyYXA6IEZvY3VzVHJhcDtcblxuICAvKiogRWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgYm90dG9tIHNoZWV0IHdhcyBvcGVuZWQuICovXG4gIHByaXZhdGUgX2VsZW1lbnRGb2N1c2VkQmVmb3JlT3BlbmVkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBTZXJ2ZXItc2lkZSByZW5kZXJpbmctY29tcGF0aWJsZSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBkb2N1bWVudCBvYmplY3QuICovXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogV2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveWVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnksXG4gICAgLyoqIFRoZSBib3R0b20gc2hlZXQgY29uZmlndXJhdGlvbi4gKi9cbiAgICBwdWJsaWMgYm90dG9tU2hlZXRDb25maWc6IE1hdEJvdHRvbVNoZWV0Q29uZmlnKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5fYnJlYWtwb2ludFN1YnNjcmlwdGlvbiA9IGJyZWFrcG9pbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUoW0JyZWFrcG9pbnRzLk1lZGl1bSwgQnJlYWtwb2ludHMuTGFyZ2UsIEJyZWFrcG9pbnRzLlhMYXJnZV0pXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3MoJ21hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyLW1lZGl1bScsXG4gICAgICAgICAgICBicmVha3BvaW50T2JzZXJ2ZXIuaXNNYXRjaGVkKEJyZWFrcG9pbnRzLk1lZGl1bSkpO1xuICAgICAgICB0aGlzLl90b2dnbGVDbGFzcygnbWF0LWJvdHRvbS1zaGVldC1jb250YWluZXItbGFyZ2UnLFxuICAgICAgICAgICAgYnJlYWtwb2ludE9ic2VydmVyLmlzTWF0Y2hlZChCcmVha3BvaW50cy5MYXJnZSkpO1xuICAgICAgICB0aGlzLl90b2dnbGVDbGFzcygnbWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIteGxhcmdlJyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRPYnNlcnZlci5pc01hdGNoZWQoQnJlYWtwb2ludHMuWExhcmdlKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBBdHRhY2ggYSBjb21wb25lbnQgcG9ydGFsIGFzIGNvbnRlbnQgdG8gdGhpcyBib3R0b20gc2hlZXQgY29udGFpbmVyLiAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHRoaXMuX3ZhbGlkYXRlUG9ydGFsQXR0YWNoZWQoKTtcbiAgICB0aGlzLl9zZXRQYW5lbENsYXNzKCk7XG4gICAgdGhpcy5fc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG4gIH1cblxuICAvKiogQXR0YWNoIGEgdGVtcGxhdGUgcG9ydGFsIGFzIGNvbnRlbnQgdG8gdGhpcyBib3R0b20gc2hlZXQgY29udGFpbmVyLiAqL1xuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICB0aGlzLl92YWxpZGF0ZVBvcnRhbEF0dGFjaGVkKCk7XG4gICAgdGhpcy5fc2V0UGFuZWxDbGFzcygpO1xuICAgIHRoaXMuX3NhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaFRlbXBsYXRlUG9ydGFsKHBvcnRhbCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgYSBET00gcG9ydGFsIHRvIHRoZSBib3R0b20gc2hlZXQgY29udGFpbmVyLlxuICAgKiBAZGVwcmVjYXRlZCBUbyBiZSB0dXJuZWQgaW50byBhIG1ldGhvZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGF0dGFjaERvbVBvcnRhbCA9IChwb3J0YWw6IERvbVBvcnRhbCkgPT4ge1xuICAgIHRoaXMuX3ZhbGlkYXRlUG9ydGFsQXR0YWNoZWQoKTtcbiAgICB0aGlzLl9zZXRQYW5lbENsYXNzKCk7XG4gICAgdGhpcy5fc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWxPdXRsZXQuYXR0YWNoRG9tUG9ydGFsKHBvcnRhbCk7XG4gIH1cblxuICAvKiogQmVnaW4gYW5pbWF0aW9uIG9mIGJvdHRvbSBzaGVldCBlbnRyYW5jZSBpbnRvIHZpZXcuICovXG4gIGVudGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9ICd2aXNpYmxlJztcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQmVnaW4gYW5pbWF0aW9uIG9mIHRoZSBib3R0b20gc2hlZXQgZXhpdGluZyBmcm9tIHZpZXcuICovXG4gIGV4aXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9icmVha3BvaW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIF9vbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgdGhpcy5fdHJhcEZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgX29uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQ2xhc3MoY3NzQ2xhc3M6IHN0cmluZywgYWRkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBhZGQgPyBjbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSA6IGNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsaWRhdGVQb3J0YWxBdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRocm93IEVycm9yKCdBdHRlbXB0aW5nIHRvIGF0dGFjaCBib3R0b20gc2hlZXQgY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRQYW5lbENsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHBhbmVsQ2xhc3MgPSB0aGlzLmJvdHRvbVNoZWV0Q29uZmlnLnBhbmVsQ2xhc3M7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYW5lbENsYXNzKSkge1xuICAgICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSBhIHNwcmVhZCBoZXJlLCBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuXG4gICAgICBwYW5lbENsYXNzLmZvckVhY2goY3NzQ2xhc3MgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSk7XG4gICAgfSBlbHNlIGlmIChwYW5lbENsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQocGFuZWxDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1vdmVzIHRoZSBmb2N1cyBpbnNpZGUgdGhlIGZvY3VzIHRyYXAuICovXG4gIHByaXZhdGUgX3RyYXBGb2N1cygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKCF0aGlzLl9mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcCA9IHRoaXMuX2ZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdHRvbVNoZWV0Q29uZmlnLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIC8vIE90aGVyd2lzZSBlbnN1cmUgdGhhdCBmb2N1cyBpcyBvbiB0aGUgY29udGFpbmVyLiBJdCdzIHBvc3NpYmxlIHRoYXQgYSBkaWZmZXJlbnRcbiAgICAgIC8vIGNvbXBvbmVudCB0cmllZCB0byBtb3ZlIGZvY3VzIHdoaWxlIHRoZSBvcGVuIGFuaW1hdGlvbiB3YXMgcnVubmluZy4gU2VlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvMTYyMTUuIE5vdGUgdGhhdCB3ZSBvbmx5IHdhbnQgdG8gZG8gdGhpc1xuICAgICAgLy8gaWYgdGhlIGZvY3VzIGlzbid0IGluc2lkZSB0aGUgYm90dG9tIHNoZWV0IGFscmVhZHksIGJlY2F1c2UgaXQncyBwb3NzaWJsZSB0aGF0IHRoZVxuICAgICAgLy8gY29uc3VtZXIgdHVybmVkIG9mZiBgYXV0b0ZvY3VzYCBpbiBvcmRlciB0byBtb3ZlIGZvY3VzIHRoZW1zZWx2ZXMuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gZWxlbWVudCAmJiAhZWxlbWVudC5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlc3RvcmVzIGZvY3VzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBib3R0b20gc2hlZXQgd2FzIG9wZW5lZC4gKi9cbiAgcHJpdmF0ZSBfcmVzdG9yZUZvY3VzKCkge1xuICAgIGNvbnN0IHRvRm9jdXMgPSB0aGlzLl9lbGVtZW50Rm9jdXNlZEJlZm9yZU9wZW5lZDtcblxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgaWYgKHRoaXMuYm90dG9tU2hlZXRDb25maWcucmVzdG9yZUZvY3VzICYmIHRvRm9jdXMgJiYgdHlwZW9mIHRvRm9jdXMuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgZm9jdXMgaXMgc3RpbGwgaW5zaWRlIHRoZSBib3R0b20gc2hlZXQgb3IgaXMgb24gdGhlIGJvZHkgKHVzdWFsbHkgYmVjYXVzZSBhXG4gICAgICAvLyBub24tZm9jdXNhYmxlIGVsZW1lbnQgbGlrZSB0aGUgYmFja2Ryb3Agd2FzIGNsaWNrZWQpIGJlZm9yZSBtb3ZpbmcgaXQuIEl0J3MgcG9zc2libGUgdGhhdFxuICAgICAgLy8gdGhlIGNvbnN1bWVyIG1vdmVkIGl0IHRoZW1zZWx2ZXMgYmVmb3JlIHRoZSBhbmltYXRpb24gd2FzIGRvbmUsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkbid0XG4gICAgICAvLyBkbyBhbnl0aGluZy5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ID09PSB0aGlzLl9kb2N1bWVudC5ib2R5IHx8IGFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQgfHxcbiAgICAgICAgZWxlbWVudC5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2F2ZXMgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIGJvdHRvbSBzaGVldCB3YXMgb3BlbmVkLiAqL1xuICBwcml2YXRlIF9zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCkge1xuICAgIHRoaXMuX2VsZW1lbnRGb2N1c2VkQmVmb3JlT3BlbmVkID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIFRoZSBgZm9jdXNgIG1ldGhvZCBpc24ndCBhdmFpbGFibGUgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==