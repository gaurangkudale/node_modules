/**
 * @fileoverview added by tsickle
 * Generated from: src/material/menu/menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusKeyManager } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, UP_ARROW, HOME, END, hasModifierKey, } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Inject, InjectionToken, Input, NgZone, Output, TemplateRef, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { merge, Subject, Subscription } from 'rxjs';
import { startWith, switchMap, take } from 'rxjs/operators';
import { matMenuAnimations } from './menu-animations';
import { MatMenuContent } from './menu-content';
import { throwMatMenuInvalidPositionX, throwMatMenuInvalidPositionY } from './menu-errors';
import { MatMenuItem } from './menu-item';
import { MAT_MENU_PANEL } from './menu-panel';
/**
 * Default `mat-menu` options that can be overridden.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function _MatMenu_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0);
    ɵngcc0.ɵɵlistener("keydown", function _MatMenu_ng_template_0_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1._handleKeydown($event); })("click", function _MatMenu_ng_template_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.closed.emit("click"); })("@transformMenu.start", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4._onAnimationStart($event); })("@transformMenu.done", function _MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5._onAnimationDone($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 1);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
} }
const _c0 = ["*"];
export function MatMenuDefaultOptions() { }
if (false) {
    /**
     * The x-axis position of the menu.
     * @type {?}
     */
    MatMenuDefaultOptions.prototype.xPosition;
    /**
     * The y-axis position of the menu.
     * @type {?}
     */
    MatMenuDefaultOptions.prototype.yPosition;
    /**
     * Whether the menu should overlap the menu trigger.
     * @type {?}
     */
    MatMenuDefaultOptions.prototype.overlapTrigger;
    /**
     * Class to be applied to the menu's backdrop.
     * @type {?}
     */
    MatMenuDefaultOptions.prototype.backdropClass;
    /**
     * Whether the menu has a backdrop.
     * @type {?|undefined}
     */
    MatMenuDefaultOptions.prototype.hasBackdrop;
}
/**
 * Injection token to be used to override the default options for `mat-menu`.
 * @type {?}
 */
export const MAT_MENU_DEFAULT_OPTIONS = new InjectionToken('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
export function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * \@docs-private
 * @type {?}
 */
const MAT_MENU_BASE_ELEVATION = 4;
/** @type {?} */
let menuPanelUid = 0;
/**
 * Base class with all of the `MatMenu` functionality.
 */
// tslint:disable-next-line:class-name
export class _MatMenuBase {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _defaultOptions
     */
    constructor(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Only the direct descendant menu items.
         */
        this._directDescendantItems = new QueryList();
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = Subscription.EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */
        this._animationDone = new Subject();
        /**
         * Class to be added to the backdrop element.
         */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */
        this.closed = new EventEmitter();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */
        this.close = this.closed;
        this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    }
    /**
     * Position of the menu in the X axis.
     * @return {?}
     */
    get xPosition() { return this._xPosition; }
    /**
     * @param {?} value
     * @return {?}
     */
    set xPosition(value) {
        if (value !== 'before' && value !== 'after') {
            throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    /**
     * Position of the menu in the Y axis.
     * @return {?}
     */
    get yPosition() { return this._yPosition; }
    /**
     * @param {?} value
     * @return {?}
     */
    set yPosition(value) {
        if (value !== 'above' && value !== 'below') {
            throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    /**
     * Whether the menu should overlap its trigger.
     * @return {?}
     */
    get overlapTrigger() { return this._overlapTrigger; }
    /**
     * @param {?} value
     * @return {?}
     */
    set overlapTrigger(value) {
        this._overlapTrigger = coerceBooleanProperty(value);
    }
    /**
     * Whether the menu has a backdrop.
     * @return {?}
     */
    get hasBackdrop() { return this._hasBackdrop; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) {
        this._hasBackdrop = coerceBooleanProperty(value);
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param {?} classes list of class names
     * @return {?}
     */
    set panelClass(classes) {
        /** @type {?} */
        const previousPanelClass = this._previousPanelClass;
        if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach((/**
             * @param {?} className
             * @return {?}
             */
            (className) => {
                this._classList[className] = false;
            }));
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(' ').forEach((/**
             * @param {?} className
             * @return {?}
             */
            (className) => {
                this._classList[className] = true;
            }));
            this._elementRef.nativeElement.className = '';
        }
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * \@breaking-change 8.0.0
     * @return {?}
     */
    get classList() { return this.panelClass; }
    /**
     * @param {?} classes
     * @return {?}
     */
    set classList(classes) { this.panelClass = classes; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setPositionClasses();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead();
        this._tabSubscription = this._keyManager.tabOut.subscribe((/**
         * @return {?}
         */
        () => this.closed.emit('tab')));
        // If a user manually (programatically) focuses a menu item, we need to reflect that focus
        // change back to the key manager. Note that we don't need to unsubscribe here because _focused
        // is internal and we know that it gets completed on destroy.
        this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => merge(...items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._focused)))))).subscribe((/**
         * @param {?} focusedItem
         * @return {?}
         */
        focusedItem => this._keyManager.updateActiveItem(focusedItem)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._directDescendantItems.destroy();
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    }
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    _hovered() {
        // Coerce the `changes` property because Angular types it as `Observable<any>`
        /** @type {?} */
        const itemChanges = (/** @type {?} */ (this._directDescendantItems.changes));
        return (/** @type {?} */ (itemChanges.pipe(startWith(this._directDescendantItems), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => merge(...items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._hovered))))))));
    }
    /*
       * Registers a menu item with the menu.
       * @docs-private
       * @deprecated No longer being used. To be removed.
       * @breaking-change 9.0.0
       */
    /**
     * @param {?} _item
     * @return {?}
     */
    addItem(_item) { }
    /**
     * Removes an item from the menu.
     * \@docs-private
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 9.0.0
     * @param {?} _item
     * @return {?}
     */
    removeItem(_item) { }
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const manager = this._keyManager;
        switch (keyCode) {
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case LEFT_ARROW:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case RIGHT_ARROW:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            case HOME:
            case END:
                if (!hasModifierKey(event)) {
                    keyCode === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
                    event.preventDefault();
                }
                break;
            default:
                if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
        }
    }
    /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    focusFirstItem(origin = 'program') {
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable.asObservable()
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => this._focusFirstItem(origin)));
        }
        else {
            this._focusFirstItem(origin);
        }
    }
    /**
     * Actual implementation that focuses the first item. Needs to be separated
     * out so we don't repeat the same logic in the public `focusFirstItem` method.
     * @private
     * @param {?} origin
     * @return {?}
     */
    _focusFirstItem(origin) {
        /** @type {?} */
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menu panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.
        if (!manager.activeItem && this._directDescendantItems.length) {
            /** @type {?} */
            let element = this._directDescendantItems.first._getHostElement().parentElement;
            // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.
            while (element) {
                if (element.getAttribute('role') === 'menu') {
                    element.focus();
                    break;
                }
                else {
                    element = element.parentElement;
                }
            }
        }
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    resetActiveItem() {
        this._keyManager.setActiveItem(-1);
    }
    /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    setElevation(depth) {
        // The elevation starts at the base and increases by one for each level.
        // Capped at 24 because that's the maximum elevation defined in the Material design spec.
        /** @type {?} */
        const elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
        /** @type {?} */
        const newElevation = `mat-elevation-z${elevation}`;
        /** @type {?} */
        const customElevation = Object.keys(this._classList).find((/**
         * @param {?} c
         * @return {?}
         */
        c => c.startsWith('mat-elevation-z')));
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    }
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
        /** @type {?} */
        const classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    }
    /**
     * Starts the enter animation.
     * @return {?}
     */
    _startAnimation() {
        // @breaking-change 8.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    }
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    _resetAnimation() {
        // @breaking-change 8.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    }
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    _onAnimationDone(event) {
        this._animationDone.next(event);
        this._isAnimating = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onAnimationStart(event) {
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
        // because we move focus to the first item while it's still being animated, which can throw
        // the browser off when it determines the scroll position. Alternatively we can move focus
        // when the animation is done, however moving focus asynchronously will interrupt screen
        // readers which are in the process of reading out the menu already. We take the `element`
        // from the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     * @private
     * @return {?}
     */
    _updateDirectDescendants() {
        this._allItems.changes
            .pipe(startWith(this._allItems))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this._directDescendantItems.reset(items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item._parentMenu === this)));
            this._directDescendantItems.notifyOnChanges();
        }));
    }
}
_MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) { return new (t || _MatMenuBase)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(MAT_MENU_DEFAULT_OPTIONS)); };
_MatMenuBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: _MatMenuBase, contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatMenuContent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatMenuItem, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatMenuItem, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lazyContent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._allItems = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, viewQuery: function _MatMenuBase_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { backdropClass: "backdropClass", xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: ["class", "panelClass"], classList: "classList", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { closed: "closed", close: "close" } });
/** @nocollapse */
_MatMenuBase.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
_MatMenuBase.propDecorators = {
    _allItems: [{ type: ContentChildren, args: [MatMenuItem, { descendants: true },] }],
    backdropClass: [{ type: Input }],
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: Input, args: ['aria-describedby',] }],
    xPosition: [{ type: Input }],
    yPosition: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    items: [{ type: ContentChildren, args: [MatMenuItem, { descendants: false },] }],
    lazyContent: [{ type: ContentChild, args: [MatMenuContent,] }],
    overlapTrigger: [{ type: Input }],
    hasBackdrop: [{ type: Input }],
    panelClass: [{ type: Input, args: ['class',] }],
    classList: [{ type: Input }],
    closed: [{ type: Output }],
    close: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatMenuBase, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, { backdropClass: [{
            type: Input
        }], closed: [{
            type: Output
        }], close: [{
            type: Output
        }], xPosition: [{
            type: Input
        }], yPosition: [{
            type: Input
        }], overlapTrigger: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], panelClass: [{
            type: Input,
            args: ['class']
        }], classList: [{
            type: Input
        }], _allItems: [{
            type: ContentChildren,
            args: [MatMenuItem, { descendants: true }]
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: Input,
            args: ['aria-describedby']
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }], items: [{
            type: ContentChildren,
            args: [MatMenuItem, { descendants: false }]
        }], lazyContent: [{
            type: ContentChild,
            args: [MatMenuContent]
        }] }); })();
if (false) {
    /** @type {?} */
    _MatMenuBase.ngAcceptInputType_overlapTrigger;
    /** @type {?} */
    _MatMenuBase.ngAcceptInputType_hasBackdrop;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._keyManager;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._xPosition;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._yPosition;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._previousElevation;
    /**
     * All items inside the menu. Includes items nested inside another menu.
     * @type {?}
     */
    _MatMenuBase.prototype._allItems;
    /**
     * Only the direct descendant menu items.
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._directDescendantItems;
    /**
     * Subscription to tab events on the menu panel
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._tabSubscription;
    /**
     * Config object to be passed into the menu's ngClass
     * @type {?}
     */
    _MatMenuBase.prototype._classList;
    /**
     * Current state of the panel animation.
     * @type {?}
     */
    _MatMenuBase.prototype._panelAnimationState;
    /**
     * Emits whenever an animation on the menu completes.
     * @type {?}
     */
    _MatMenuBase.prototype._animationDone;
    /**
     * Whether the menu is animating.
     * @type {?}
     */
    _MatMenuBase.prototype._isAnimating;
    /**
     * Parent menu of the current menu panel.
     * @type {?}
     */
    _MatMenuBase.prototype.parentMenu;
    /**
     * Layout direction of the menu.
     * @type {?}
     */
    _MatMenuBase.prototype.direction;
    /**
     * Class to be added to the backdrop element.
     * @type {?}
     */
    _MatMenuBase.prototype.backdropClass;
    /**
     * aria-label for the menu panel.
     * @type {?}
     */
    _MatMenuBase.prototype.ariaLabel;
    /**
     * aria-labelledby for the menu panel.
     * @type {?}
     */
    _MatMenuBase.prototype.ariaLabelledby;
    /**
     * aria-describedby for the menu panel.
     * @type {?}
     */
    _MatMenuBase.prototype.ariaDescribedby;
    /**
     * \@docs-private
     * @type {?}
     */
    _MatMenuBase.prototype.templateRef;
    /**
     * List of the items inside of a menu.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */
    _MatMenuBase.prototype.items;
    /**
     * Menu content that will be rendered lazily.
     * \@docs-private
     * @type {?}
     */
    _MatMenuBase.prototype.lazyContent;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._overlapTrigger;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._hasBackdrop;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._previousPanelClass;
    /**
     * Event emitted when the menu is closed.
     * @type {?}
     */
    _MatMenuBase.prototype.closed;
    /**
     * Event emitted when the menu is closed.
     * @deprecated Switch to `closed` instead
     * \@breaking-change 8.0.0
     * @type {?}
     */
    _MatMenuBase.prototype.close;
    /** @type {?} */
    _MatMenuBase.prototype.panelId;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    _MatMenuBase.prototype._defaultOptions;
}
/**
 * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
 */
export class MatMenu extends _MatMenuBase {
}
MatMenu.ɵfac = function MatMenu_Factory(t) { return ɵMatMenu_BaseFactory(t || MatMenu); };
MatMenu.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatMenu, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵMatMenu_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatMenu);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenu, [{
        type: Directive
    }], null, null); })();
// Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
// extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
// to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
// queries and DI to work correctly, while still not referencing the actual menu class.
// Class responsibility is split up as follows:
// * _MatMenuBase - provides all the functionality without any of the Angular metadata.
// * MatMenu - keeps the same name symbol name as the current menu and
// is used as a provider for DI and query purposes.
// * _MatMenu - the actual menu component implementation with the Angular metadata that should
// be tree shaken away for MDC.
/**
 * \@docs-public MatMenu
 */
// tslint:disable-next-line:class-name
export class _MatMenu extends MatMenu {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} defaultOptions
     */
    constructor(elementRef, ngZone, defaultOptions) {
        super(elementRef, ngZone, defaultOptions);
    }
}
_MatMenu.ɵfac = function _MatMenu_Factory(t) { return new (t || _MatMenu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(MAT_MENU_DEFAULT_OPTIONS)); };
_MatMenu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: _MatMenu, selectors: [["mat-menu"]], exportAs: ["matMenu"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: MAT_MENU_PANEL, useExisting: MatMenu },
            { provide: MatMenu, useExisting: _MatMenu }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]], template: function _MatMenu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, _MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    } }, directives: [ɵngcc1.NgClass], styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, data: { animation: [
            matMenuAnimations.transformMenu,
            matMenuAnimations.fadeInItems
        ] }, changeDetection: 0 });
/** @nocollapse */
_MatMenu.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatMenu, [{
        type: Component,
        args: [{
                selector: 'mat-menu',
                template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matMenu',
                animations: [
                    matMenuAnimations.transformMenu,
                    matMenuAnimations.fadeInItems
                ],
                providers: [
                    { provide: MAT_MENU_PANEL, useExisting: MatMenu },
                    { provide: MatMenu, useExisting: _MatMenu }
                ],
                styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL21lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsZUFBZSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFFL0QsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsV0FBVyxFQUNYLFVBQVUsRUFDVixRQUFRLEVBQ1IsSUFBSSxFQUNKLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixjQUFjLEVBQ2QsS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxLQUFLLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFDLDRCQUE0QixFQUFFLDRCQUE0QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBZSxNQUFNLGNBQWMsQ0FBQztBQUMxRDtBQUFJO0FBRUM7QUFBVzs7Ozs7Ozs7Ozs7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QUU7QUFFdkY7QUFJc0I7QUFrT3RCLE1BQU0sT0FBTyxPQUFRLFNBQVEsWUFBWTtBQUFHO21DQUQzQyxTQUFTOzs7OzswQkFDUjtBQUFDO0FBRW1EO0FBQ0M7QUFDSDtBQUNQO0FBQ3hDO0FBQ3dDO0FBQ2pCO0FBQ25CO0FBQzJDO0FBQWdDO0FBQUk7QUFDdEU7QUFtQmxCLHNDQUFzQztBQUN0QyxNQUFNLE9BQU8sUUFBUyxTQUFRLE9BQU87QUFDckM7QUFDTztBQUE2QjtBQUF5QjtBQUNsQztBQUFRLElBRGpDLFlBQVksVUFBbUMsRUFBRSxNQUFjLEVBQ3pCLGNBQXFDO0FBQzdFLFFBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDOUMsSUFBRSxDQUFDO0FBQ0g7b0NBdkJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsVUFBVSxrQkFDcEI7Ozs7O01BQXdCLGtCQUV4QjtLQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFO0dBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLFNBQVMsa0JBQ25CLFVBQVUsRUFBRSxzQkFDVixpQkFBaUIsQ0FBQyxhQUFhLHNCQUMvQixpQkFBaUIsQ0FBQyxXQUFXLGtCQUM5QixrQkFDRCxTQUFTLEVBQUUsc0JBQ1QsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUMsc0JBQy9DLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFDLGtCQUMxQzs7O21DQUVDO0FBQUM7QUFBbUI7QUFDTCxZQXZlakIsVUFBVTtBQUNWLFlBSUEsTUFBTTtBQUNOLDRDQW9lSyxNQUFNLFNBQUMsd0JBQXdCO0FBQVE7Y0FMN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLK0M7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgRVNDQVBFLFxuICBMRUZUX0FSUk9XLFxuICBSSUdIVF9BUlJPVyxcbiAgRE9XTl9BUlJPVyxcbiAgVVBfQVJST1csXG4gIEhPTUUsXG4gIEVORCxcbiAgaGFzTW9kaWZpZXJLZXksXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7bWF0TWVudUFuaW1hdGlvbnN9IGZyb20gJy4vbWVudS1hbmltYXRpb25zJztcbmltcG9ydCB7TWF0TWVudUNvbnRlbnR9IGZyb20gJy4vbWVudS1jb250ZW50JztcbmltcG9ydCB7TWVudVBvc2l0aW9uWCwgTWVudVBvc2l0aW9uWX0gZnJvbSAnLi9tZW51LXBvc2l0aW9ucyc7XG5pbXBvcnQge3Rocm93TWF0TWVudUludmFsaWRQb3NpdGlvblgsIHRocm93TWF0TWVudUludmFsaWRQb3NpdGlvbll9IGZyb20gJy4vbWVudS1lcnJvcnMnO1xuaW1wb3J0IHtNYXRNZW51SXRlbX0gZnJvbSAnLi9tZW51LWl0ZW0nO1xuaW1wb3J0IHtNQVRfTUVOVV9QQU5FTCwgTWF0TWVudVBhbmVsfSBmcm9tICcuL21lbnUtcGFuZWwnO1xuaW1wb3J0IHtBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKiBEZWZhdWx0IGBtYXQtbWVudWAgb3B0aW9ucyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXRNZW51RGVmYXVsdE9wdGlvbnMge1xuICAvKiogVGhlIHgtYXhpcyBwb3NpdGlvbiBvZiB0aGUgbWVudS4gKi9cbiAgeFBvc2l0aW9uOiBNZW51UG9zaXRpb25YO1xuXG4gIC8qKiBUaGUgeS1heGlzIHBvc2l0aW9uIG9mIHRoZSBtZW51LiAqL1xuICB5UG9zaXRpb246IE1lbnVQb3NpdGlvblk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgc2hvdWxkIG92ZXJsYXAgdGhlIG1lbnUgdHJpZ2dlci4gKi9cbiAgb3ZlcmxhcFRyaWdnZXI6IGJvb2xlYW47XG5cbiAgLyoqIENsYXNzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG1lbnUncyBiYWNrZHJvcC4gKi9cbiAgYmFja2Ryb3BDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGhhcyBhIGJhY2tkcm9wLiAqL1xuICBoYXNCYWNrZHJvcD86IGJvb2xlYW47XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdG8gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBgbWF0LW1lbnVgLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9NRU5VX0RFRkFVTFRfT1BUSU9OUyA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPE1hdE1lbnVEZWZhdWx0T3B0aW9ucz4oJ21hdC1tZW51LWRlZmF1bHQtb3B0aW9ucycsIHtcbiAgICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICAgIGZhY3Rvcnk6IE1BVF9NRU5VX0RFRkFVTFRfT1BUSU9OU19GQUNUT1JZXG4gICAgfSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX01FTlVfREVGQVVMVF9PUFRJT05TX0ZBQ1RPUlkoKTogTWF0TWVudURlZmF1bHRPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICBvdmVybGFwVHJpZ2dlcjogZmFsc2UsXG4gICAgeFBvc2l0aW9uOiAnYWZ0ZXInLFxuICAgIHlQb3NpdGlvbjogJ2JlbG93JyxcbiAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICB9O1xufVxuLyoqXG4gKiBTdGFydCBlbGV2YXRpb24gZm9yIHRoZSBtZW51IHBhbmVsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5jb25zdCBNQVRfTUVOVV9CQVNFX0VMRVZBVElPTiA9IDQ7XG5cbmxldCBtZW51UGFuZWxVaWQgPSAwO1xuXG4vKiogQmFzZSBjbGFzcyB3aXRoIGFsbCBvZiB0aGUgYE1hdE1lbnVgIGZ1bmN0aW9uYWxpdHkuICovXG5ARGlyZWN0aXZlKClcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgX01hdE1lbnVCYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgTWF0TWVudVBhbmVsPE1hdE1lbnVJdGVtPiwgT25Jbml0LFxuICBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBGb2N1c0tleU1hbmFnZXI8TWF0TWVudUl0ZW0+O1xuICBwcml2YXRlIF94UG9zaXRpb246IE1lbnVQb3NpdGlvblggPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy54UG9zaXRpb247XG4gIHByaXZhdGUgX3lQb3NpdGlvbjogTWVudVBvc2l0aW9uWSA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLnlQb3NpdGlvbjtcbiAgcHJpdmF0ZSBfcHJldmlvdXNFbGV2YXRpb246IHN0cmluZztcblxuICAvKiogQWxsIGl0ZW1zIGluc2lkZSB0aGUgbWVudS4gSW5jbHVkZXMgaXRlbXMgbmVzdGVkIGluc2lkZSBhbm90aGVyIG1lbnUuICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0TWVudUl0ZW0sIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9hbGxJdGVtczogUXVlcnlMaXN0PE1hdE1lbnVJdGVtPjtcblxuICAvKiogT25seSB0aGUgZGlyZWN0IGRlc2NlbmRhbnQgbWVudSBpdGVtcy4gKi9cbiAgcHJpdmF0ZSBfZGlyZWN0RGVzY2VuZGFudEl0ZW1zID0gbmV3IFF1ZXJ5TGlzdDxNYXRNZW51SXRlbT4oKTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYiBldmVudHMgb24gdGhlIG1lbnUgcGFuZWwgKi9cbiAgcHJpdmF0ZSBfdGFiU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBDb25maWcgb2JqZWN0IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZW51J3MgbmdDbGFzcyAqL1xuICBfY2xhc3NMaXN0OiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcblxuICAvKiogQ3VycmVudCBzdGF0ZSBvZiB0aGUgcGFuZWwgYW5pbWF0aW9uLiAqL1xuICBfcGFuZWxBbmltYXRpb25TdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyA9ICd2b2lkJztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgYW4gYW5pbWF0aW9uIG9uIHRoZSBtZW51IGNvbXBsZXRlcy4gKi9cbiAgX2FuaW1hdGlvbkRvbmUgPSBuZXcgU3ViamVjdDxBbmltYXRpb25FdmVudD4oKTtcblxuICAvKiogV2hldGhlciB0aGUgbWVudSBpcyBhbmltYXRpbmcuICovXG4gIF9pc0FuaW1hdGluZzogYm9vbGVhbjtcblxuICAvKiogUGFyZW50IG1lbnUgb2YgdGhlIGN1cnJlbnQgbWVudSBwYW5lbC4gKi9cbiAgcGFyZW50TWVudTogTWF0TWVudVBhbmVsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBMYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBtZW51LiAqL1xuICBkaXJlY3Rpb246IERpcmVjdGlvbjtcblxuICAvKiogQ2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIGJhY2tkcm9wIGVsZW1lbnQuICovXG4gIEBJbnB1dCgpIGJhY2tkcm9wQ2xhc3M6IHN0cmluZyA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLmJhY2tkcm9wQ2xhc3M7XG5cbiAgLyoqIGFyaWEtbGFiZWwgZm9yIHRoZSBtZW51IHBhbmVsLiAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKiogYXJpYS1sYWJlbGxlZGJ5IGZvciB0aGUgbWVudSBwYW5lbC4gKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuXG4gIC8qKiBhcmlhLWRlc2NyaWJlZGJ5IGZvciB0aGUgbWVudSBwYW5lbC4gKi9cbiAgQElucHV0KCdhcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG5cbiAgLyoqIFBvc2l0aW9uIG9mIHRoZSBtZW51IGluIHRoZSBYIGF4aXMuICovXG4gIEBJbnB1dCgpXG4gIGdldCB4UG9zaXRpb24oKTogTWVudVBvc2l0aW9uWCB7IHJldHVybiB0aGlzLl94UG9zaXRpb247IH1cbiAgc2V0IHhQb3NpdGlvbih2YWx1ZTogTWVudVBvc2l0aW9uWCkge1xuICAgIGlmICh2YWx1ZSAhPT0gJ2JlZm9yZScgJiYgdmFsdWUgIT09ICdhZnRlcicpIHtcbiAgICAgIHRocm93TWF0TWVudUludmFsaWRQb3NpdGlvblgoKTtcbiAgICB9XG4gICAgdGhpcy5feFBvc2l0aW9uID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkNsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgbWVudSBpbiB0aGUgWSBheGlzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgeVBvc2l0aW9uKCk6IE1lbnVQb3NpdGlvblkgeyByZXR1cm4gdGhpcy5feVBvc2l0aW9uOyB9XG4gIHNldCB5UG9zaXRpb24odmFsdWU6IE1lbnVQb3NpdGlvblkpIHtcbiAgICBpZiAodmFsdWUgIT09ICdhYm92ZScgJiYgdmFsdWUgIT09ICdiZWxvdycpIHtcbiAgICAgIHRocm93TWF0TWVudUludmFsaWRQb3NpdGlvblkoKTtcbiAgICB9XG4gICAgdGhpcy5feVBvc2l0aW9uID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkNsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHRoZSBpdGVtcyBpbnNpZGUgb2YgYSBtZW51LlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdE1lbnVJdGVtLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgaXRlbXM6IFF1ZXJ5TGlzdDxNYXRNZW51SXRlbT47XG5cbiAgLyoqXG4gICAqIE1lbnUgY29udGVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbGF6aWx5LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBAQ29udGVudENoaWxkKE1hdE1lbnVDb250ZW50KSBsYXp5Q29udGVudDogTWF0TWVudUNvbnRlbnQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgc2hvdWxkIG92ZXJsYXAgaXRzIHRyaWdnZXIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvdmVybGFwVHJpZ2dlcigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX292ZXJsYXBUcmlnZ2VyOyB9XG4gIHNldCBvdmVybGFwVHJpZ2dlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX292ZXJsYXBUcmlnZ2VyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9vdmVybGFwVHJpZ2dlcjogYm9vbGVhbiA9IHRoaXMuX2RlZmF1bHRPcHRpb25zLm92ZXJsYXBUcmlnZ2VyO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBtZW51IGhhcyBhIGJhY2tkcm9wLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzLl9oYXNCYWNrZHJvcDsgfVxuICBzZXQgaGFzQmFja2Ryb3AodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB0aGlzLl9kZWZhdWx0T3B0aW9ucy5oYXNCYWNrZHJvcDtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdGFrZXMgY2xhc3NlcyBzZXQgb24gdGhlIGhvc3QgbWF0LW1lbnUgZWxlbWVudCBhbmQgYXBwbGllcyB0aGVtIG9uIHRoZVxuICAgKiBtZW51IHRlbXBsYXRlIHRoYXQgZGlzcGxheXMgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLiAgT3RoZXJ3aXNlLCBpdCdzIGRpZmZpY3VsdFxuICAgKiB0byBzdHlsZSB0aGUgY29udGFpbmluZyBtZW51IGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gY2xhc3NlcyBsaXN0IG9mIGNsYXNzIG5hbWVzXG4gICAqL1xuICBASW5wdXQoJ2NsYXNzJylcbiAgc2V0IHBhbmVsQ2xhc3MoY2xhc3Nlczogc3RyaW5nKSB7XG4gICAgY29uc3QgcHJldmlvdXNQYW5lbENsYXNzID0gdGhpcy5fcHJldmlvdXNQYW5lbENsYXNzO1xuXG4gICAgaWYgKHByZXZpb3VzUGFuZWxDbGFzcyAmJiBwcmV2aW91c1BhbmVsQ2xhc3MubGVuZ3RoKSB7XG4gICAgICBwcmV2aW91c1BhbmVsQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9jbGFzc0xpc3RbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldmlvdXNQYW5lbENsYXNzID0gY2xhc3NlcztcblxuICAgIGlmIChjbGFzc2VzICYmIGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fY2xhc3NMaXN0W2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSAnJztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfcHJldmlvdXNQYW5lbENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRha2VzIGNsYXNzZXMgc2V0IG9uIHRoZSBob3N0IG1hdC1tZW51IGVsZW1lbnQgYW5kIGFwcGxpZXMgdGhlbSBvbiB0aGVcbiAgICogbWVudSB0ZW1wbGF0ZSB0aGF0IGRpc3BsYXlzIGluIHRoZSBvdmVybGF5IGNvbnRhaW5lci4gIE90aGVyd2lzZSwgaXQncyBkaWZmaWN1bHRcbiAgICogdG8gc3R5bGUgdGhlIGNvbnRhaW5pbmcgbWVudSBmcm9tIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBwYW5lbENsYXNzYCBpbnN0ZWFkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2xhc3NMaXN0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnBhbmVsQ2xhc3M7IH1cbiAgc2V0IGNsYXNzTGlzdChjbGFzc2VzOiBzdHJpbmcpIHsgdGhpcy5wYW5lbENsYXNzID0gY2xhc3NlczsgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZCB8ICdjbGljaycgfCAna2V5ZG93bicgfCAndGFiJz4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJyB8ICd0YWInPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkLlxuICAgKiBAZGVwcmVjYXRlZCBTd2l0Y2ggdG8gYGNsb3NlZGAgaW5zdGVhZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gICAqL1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICdrZXlkb3duJyB8ICd0YWInPiA9IHRoaXMuY2xvc2VkO1xuXG4gIHJlYWRvbmx5IHBhbmVsSWQgPSBgbWF0LW1lbnUtcGFuZWwtJHttZW51UGFuZWxVaWQrK31gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTUFUX01FTlVfREVGQVVMVF9PUFRJT05TKSBwcml2YXRlIF9kZWZhdWx0T3B0aW9uczogTWF0TWVudURlZmF1bHRPcHRpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uQ2xhc3NlcygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZURpcmVjdERlc2NlbmRhbnRzKCk7XG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXIodGhpcy5fZGlyZWN0RGVzY2VuZGFudEl0ZW1zKS53aXRoV3JhcCgpLndpdGhUeXBlQWhlYWQoKTtcbiAgICB0aGlzLl90YWJTdWJzY3JpcHRpb24gPSB0aGlzLl9rZXlNYW5hZ2VyLnRhYk91dC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZWQuZW1pdCgndGFiJykpO1xuXG4gICAgLy8gSWYgYSB1c2VyIG1hbnVhbGx5IChwcm9ncmFtYXRpY2FsbHkpIGZvY3VzZXMgYSBtZW51IGl0ZW0sIHdlIG5lZWQgdG8gcmVmbGVjdCB0aGF0IGZvY3VzXG4gICAgLy8gY2hhbmdlIGJhY2sgdG8gdGhlIGtleSBtYW5hZ2VyLiBOb3RlIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byB1bnN1YnNjcmliZSBoZXJlIGJlY2F1c2UgX2ZvY3VzZWRcbiAgICAvLyBpcyBpbnRlcm5hbCBhbmQgd2Uga25vdyB0aGF0IGl0IGdldHMgY29tcGxldGVkIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5fZGlyZWN0RGVzY2VuZGFudEl0ZW1zLmNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+IG1lcmdlPE1hdE1lbnVJdGVtPiguLi5pdGVtcy5tYXAoKGl0ZW06IE1hdE1lbnVJdGVtKSA9PiBpdGVtLl9mb2N1c2VkKSkpXG4gICAgKS5zdWJzY3JpYmUoZm9jdXNlZEl0ZW0gPT4gdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKGZvY3VzZWRJdGVtKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMuZGVzdHJveSgpO1xuICAgIHRoaXMuX3RhYlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2xvc2VkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGhvdmVyZWQgbWVudSBpdGVtIGNoYW5nZXMuICovXG4gIF9ob3ZlcmVkKCk6IE9ic2VydmFibGU8TWF0TWVudUl0ZW0+IHtcbiAgICAvLyBDb2VyY2UgdGhlIGBjaGFuZ2VzYCBwcm9wZXJ0eSBiZWNhdXNlIEFuZ3VsYXIgdHlwZXMgaXQgYXMgYE9ic2VydmFibGU8YW55PmBcbiAgICBjb25zdCBpdGVtQ2hhbmdlcyA9IHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5jaGFuZ2VzIGFzIE9ic2VydmFibGU8UXVlcnlMaXN0PE1hdE1lbnVJdGVtPj47XG4gICAgcmV0dXJuIGl0ZW1DaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgodGhpcy5fZGlyZWN0RGVzY2VuZGFudEl0ZW1zKSxcbiAgICAgIHN3aXRjaE1hcChpdGVtcyA9PiBtZXJnZSguLi5pdGVtcy5tYXAoKGl0ZW06IE1hdE1lbnVJdGVtKSA9PiBpdGVtLl9ob3ZlcmVkKSkpXG4gICAgKSBhcyBPYnNlcnZhYmxlPE1hdE1lbnVJdGVtPjtcbiAgfVxuXG4gIC8qXG4gICAqIFJlZ2lzdGVycyBhIG1lbnUgaXRlbSB3aXRoIHRoZSBtZW51LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqIEBkZXByZWNhdGVkIE5vIGxvbmdlciBiZWluZyB1c2VkLiBUbyBiZSByZW1vdmVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gICAqL1xuICBhZGRJdGVtKF9pdGVtOiBNYXRNZW51SXRlbSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIG1lbnUuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAgICovXG4gIHJlbW92ZUl0ZW0oX2l0ZW06IE1hdE1lbnVJdGVtKSB7fVxuXG4gIC8qKiBIYW5kbGUgYSBrZXlib2FyZCBldmVudCBmcm9tIHRoZSBtZW51LCBkZWxlZ2F0aW5nIHRvIHRoZSBhcHByb3ByaWF0ZSBhY3Rpb24uICovXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICBpZiAoIWhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgna2V5ZG93bicpO1xuICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMucGFyZW50TWVudSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2x0cicpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCdrZXlkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMucGFyZW50TWVudSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCdrZXlkb3duJyk7XG4gICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIT01FOlxuICAgICAgY2FzZSBFTkQ6XG4gICAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgICAga2V5Q29kZSA9PT0gSE9NRSA/IG1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCkgOiBtYW5hZ2VyLnNldExhc3RJdGVtQWN0aXZlKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cgfHwga2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICAgIG1hbmFnZXIuc2V0Rm9jdXNPcmlnaW4oJ2tleWJvYXJkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBtZW51LlxuICAgKiBAcGFyYW0gb3JpZ2luIEFjdGlvbiBmcm9tIHdoaWNoIHRoZSBmb2N1cyBvcmlnaW5hdGVkLiBVc2VkIHRvIHNldCB0aGUgY29ycmVjdCBzdHlsaW5nLlxuICAgKi9cbiAgZm9jdXNGaXJzdEl0ZW0ob3JpZ2luOiBGb2N1c09yaWdpbiA9ICdwcm9ncmFtJyk6IHZvaWQge1xuICAgIC8vIFdoZW4gdGhlIGNvbnRlbnQgaXMgcmVuZGVyZWQgbGF6aWx5LCBpdCB0YWtlcyBhIGJpdCBiZWZvcmUgdGhlIGl0ZW1zIGFyZSBpbnNpZGUgdGhlIERPTS5cbiAgICBpZiAodGhpcy5sYXp5Q29udGVudCkge1xuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZm9jdXNGaXJzdEl0ZW0ob3JpZ2luKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzRmlyc3RJdGVtKG9yaWdpbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBpbXBsZW1lbnRhdGlvbiB0aGF0IGZvY3VzZXMgdGhlIGZpcnN0IGl0ZW0uIE5lZWRzIHRvIGJlIHNlcGFyYXRlZFxuICAgKiBvdXQgc28gd2UgZG9uJ3QgcmVwZWF0IHRoZSBzYW1lIGxvZ2ljIGluIHRoZSBwdWJsaWMgYGZvY3VzRmlyc3RJdGVtYCBtZXRob2QuXG4gICAqL1xuICBwcml2YXRlIF9mb2N1c0ZpcnN0SXRlbShvcmlnaW46IEZvY3VzT3JpZ2luKSB7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG5cbiAgICBtYW5hZ2VyLnNldEZvY3VzT3JpZ2luKG9yaWdpbikuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG5cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGFjdGl2ZSBpdGVtIGF0IHRoaXMgcG9pbnQsIGl0IG1lYW5zIHRoYXQgYWxsIHRoZSBpdGVtcyBhcmUgZGlzYWJsZWQuXG4gICAgLy8gTW92ZSBmb2N1cyB0byB0aGUgbWVudSBwYW5lbCBzbyBrZXlib2FyZCBldmVudHMgbGlrZSBFc2NhcGUgc3RpbGwgd29yay4gQWxzbyB0aGlzIHdpbGxcbiAgICAvLyBnaXZlIF9zb21lXyBmZWVkYmFjayB0byBzY3JlZW4gcmVhZGVycy5cbiAgICBpZiAoIW1hbmFnZXIuYWN0aXZlSXRlbSAmJiB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuX2RpcmVjdERlc2NlbmRhbnRJdGVtcy5maXJzdC5fZ2V0SG9zdEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAvLyBCZWNhdXNlIHRoZSBgbWF0LW1lbnVgIGlzIGF0IHRoZSBET00gaW5zZXJ0aW9uIHBvaW50LCBub3QgaW5zaWRlIHRoZSBvdmVybGF5LCB3ZSBkb24ndFxuICAgICAgLy8gaGF2ZSBhIG5pY2Ugd2F5IG9mIGdldHRpbmcgYSBob2xkIG9mIHRoZSBtZW51IHBhbmVsLiBXZSBjYW4ndCB1c2UgYSBgVmlld0NoaWxkYCBlaXRoZXJcbiAgICAgIC8vIGJlY2F1c2UgdGhlIHBhbmVsIGlzIGluc2lkZSBhbiBgbmctdGVtcGxhdGVgLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBzdGFydGluZyBmcm9tIG9uZSBvZlxuICAgICAgLy8gdGhlIGl0ZW1zIGFuZCB3YWxraW5nIHVwIHRoZSBET00uXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBhY3RpdmUgaXRlbSBpbiB0aGUgbWVudS4gVGhpcyBpcyB1c2VkIHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkLCBhbGxvd2luZ1xuICAgKiB0aGUgdXNlciB0byBzdGFydCBmcm9tIHRoZSBmaXJzdCBvcHRpb24gd2hlbiBwcmVzc2luZyB0aGUgZG93biBhcnJvdy5cbiAgICovXG4gIHJlc2V0QWN0aXZlSXRlbSgpIHtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oLTEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1lbnUgcGFuZWwgZWxldmF0aW9uLlxuICAgKiBAcGFyYW0gZGVwdGggTnVtYmVyIG9mIHBhcmVudCBtZW51cyB0aGF0IGNvbWUgYmVmb3JlIHRoZSBtZW51LlxuICAgKi9cbiAgc2V0RWxldmF0aW9uKGRlcHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBUaGUgZWxldmF0aW9uIHN0YXJ0cyBhdCB0aGUgYmFzZSBhbmQgaW5jcmVhc2VzIGJ5IG9uZSBmb3IgZWFjaCBsZXZlbC5cbiAgICAvLyBDYXBwZWQgYXQgMjQgYmVjYXVzZSB0aGF0J3MgdGhlIG1heGltdW0gZWxldmF0aW9uIGRlZmluZWQgaW4gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuICAgIGNvbnN0IGVsZXZhdGlvbiA9IE1hdGgubWluKE1BVF9NRU5VX0JBU0VfRUxFVkFUSU9OICsgZGVwdGgsIDI0KTtcbiAgICBjb25zdCBuZXdFbGV2YXRpb24gPSBgbWF0LWVsZXZhdGlvbi16JHtlbGV2YXRpb259YDtcbiAgICBjb25zdCBjdXN0b21FbGV2YXRpb24gPSBPYmplY3Qua2V5cyh0aGlzLl9jbGFzc0xpc3QpLmZpbmQoYyA9PiBjLnN0YXJ0c1dpdGgoJ21hdC1lbGV2YXRpb24teicpKTtcblxuICAgIGlmICghY3VzdG9tRWxldmF0aW9uIHx8IGN1c3RvbUVsZXZhdGlvbiA9PT0gdGhpcy5fcHJldmlvdXNFbGV2YXRpb24pIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c0VsZXZhdGlvbikge1xuICAgICAgICB0aGlzLl9jbGFzc0xpc3RbdGhpcy5fcHJldmlvdXNFbGV2YXRpb25dID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsYXNzTGlzdFtuZXdFbGV2YXRpb25dID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3ByZXZpb3VzRWxldmF0aW9uID0gbmV3RWxldmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzZXMgdG8gdGhlIG1lbnUgcGFuZWwgYmFzZWQgb24gaXRzIHBvc2l0aW9uLiBDYW4gYmUgdXNlZCBieVxuICAgKiBjb25zdW1lcnMgdG8gYWRkIHNwZWNpZmljIHN0eWxpbmcgYmFzZWQgb24gdGhlIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gcG9zWCBQb3NpdGlvbiBvZiB0aGUgbWVudSBhbG9uZyB0aGUgeCBheGlzLlxuICAgKiBAcGFyYW0gcG9zWSBQb3NpdGlvbiBvZiB0aGUgbWVudSBhbG9uZyB0aGUgeSBheGlzLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBzZXRQb3NpdGlvbkNsYXNzZXMocG9zWDogTWVudVBvc2l0aW9uWCA9IHRoaXMueFBvc2l0aW9uLCBwb3NZOiBNZW51UG9zaXRpb25ZID0gdGhpcy55UG9zaXRpb24pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5fY2xhc3NMaXN0O1xuICAgIGNsYXNzZXNbJ21hdC1tZW51LWJlZm9yZSddID0gcG9zWCA9PT0gJ2JlZm9yZSc7XG4gICAgY2xhc3Nlc1snbWF0LW1lbnUtYWZ0ZXInXSA9IHBvc1ggPT09ICdhZnRlcic7XG4gICAgY2xhc3Nlc1snbWF0LW1lbnUtYWJvdmUnXSA9IHBvc1kgPT09ICdhYm92ZSc7XG4gICAgY2xhc3Nlc1snbWF0LW1lbnUtYmVsb3cnXSA9IHBvc1kgPT09ICdiZWxvdyc7XG4gIH1cblxuICAvKiogU3RhcnRzIHRoZSBlbnRlciBhbmltYXRpb24uICovXG4gIF9zdGFydEFuaW1hdGlvbigpIHtcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIENvbWJpbmUgd2l0aCBfcmVzZXRBbmltYXRpb24uXG4gICAgdGhpcy5fcGFuZWxBbmltYXRpb25TdGF0ZSA9ICdlbnRlcic7XG4gIH1cblxuICAvKiogUmVzZXRzIHRoZSBwYW5lbCBhbmltYXRpb24gdG8gaXRzIGluaXRpYWwgc3RhdGUuICovXG4gIF9yZXNldEFuaW1hdGlvbigpIHtcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIENvbWJpbmUgd2l0aCBfc3RhcnRBbmltYXRpb24uXG4gICAgdGhpcy5fcGFuZWxBbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcbiAgfVxuXG4gIC8qKiBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgcGFuZWwgYW5pbWF0aW9uIGNvbXBsZXRlcy4gKi9cbiAgX29uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICB0aGlzLl9hbmltYXRpb25Eb25lLm5leHQoZXZlbnQpO1xuICAgIHRoaXMuX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBfb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICB0aGlzLl9pc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgICAvLyBTY3JvbGwgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgdG9wIGFzIHNvb24gYXMgdGhlIGFuaW1hdGlvbiBzdGFydHMuIFRoaXMgaXMgbmVjZXNzYXJ5LFxuICAgIC8vIGJlY2F1c2Ugd2UgbW92ZSBmb2N1cyB0byB0aGUgZmlyc3QgaXRlbSB3aGlsZSBpdCdzIHN0aWxsIGJlaW5nIGFuaW1hdGVkLCB3aGljaCBjYW4gdGhyb3dcbiAgICAvLyB0aGUgYnJvd3NlciBvZmYgd2hlbiBpdCBkZXRlcm1pbmVzIHRoZSBzY3JvbGwgcG9zaXRpb24uIEFsdGVybmF0aXZlbHkgd2UgY2FuIG1vdmUgZm9jdXNcbiAgICAvLyB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZSwgaG93ZXZlciBtb3ZpbmcgZm9jdXMgYXN5bmNocm9ub3VzbHkgd2lsbCBpbnRlcnJ1cHQgc2NyZWVuXG4gICAgLy8gcmVhZGVycyB3aGljaCBhcmUgaW4gdGhlIHByb2Nlc3Mgb2YgcmVhZGluZyBvdXQgdGhlIG1lbnUgYWxyZWFkeS4gV2UgdGFrZSB0aGUgYGVsZW1lbnRgXG4gICAgLy8gZnJvbSB0aGUgYGV2ZW50YCBzaW5jZSB3ZSBjYW4ndCB1c2UgYSBgVmlld0NoaWxkYCB0byBhY2Nlc3MgdGhlIHBhbmUuXG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicgJiYgdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggPT09IDApIHtcbiAgICAgIGV2ZW50LmVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCBhIHN0cmVhbSB0aGF0IHdpbGwga2VlcCB0cmFjayBvZiBhbnkgbmV3bHktYWRkZWQgbWVudSBpdGVtcyBhbmQgd2lsbCB1cGRhdGUgdGhlIGxpc3RcbiAgICogb2YgZGlyZWN0IGRlc2NlbmRhbnRzLiBXZSBjb2xsZWN0IHRoZSBkZXNjZW5kYW50cyB0aGlzIHdheSwgYmVjYXVzZSBgX2FsbEl0ZW1zYCBjYW4gaW5jbHVkZVxuICAgKiBpdGVtcyB0aGF0IGFyZSBwYXJ0IG9mIGNoaWxkIG1lbnVzLCBhbmQgdXNpbmcgYSBjdXN0b20gd2F5IG9mIHJlZ2lzdGVyaW5nIGl0ZW1zIGlzIHVucmVsaWFibGVcbiAgICogd2hlbiBpdCBjb21lcyB0byBtYWludGFpbmluZyB0aGUgaXRlbSBvcmRlci5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZURpcmVjdERlc2NlbmRhbnRzKCkge1xuICAgIHRoaXMuX2FsbEl0ZW1zLmNoYW5nZXNcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLl9hbGxJdGVtcykpXG4gICAgICAuc3Vic2NyaWJlKChpdGVtczogUXVlcnlMaXN0PE1hdE1lbnVJdGVtPikgPT4ge1xuICAgICAgICB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMucmVzZXQoaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fcGFyZW50TWVudSA9PT0gdGhpcykpO1xuICAgICAgICB0aGlzLl9kaXJlY3REZXNjZW5kYW50SXRlbXMubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vdmVybGFwVHJpZ2dlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGFzQmFja2Ryb3A6IEJvb2xlYW5JbnB1dDtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgV2Ugc2hvdyB0aGUgXCJfTWF0TWVudVwiIGNsYXNzIGFzIFwiTWF0TWVudVwiIGluIHRoZSBkb2NzLiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgTWF0TWVudSBleHRlbmRzIF9NYXRNZW51QmFzZSB7fVxuXG4vLyBOb3RlIG9uIHRoZSB3ZWlyZCBpbmhlcml0YW5jZSBzZXR1cDogd2UgbmVlZCB0aHJlZSBjbGFzc2VzLCBiZWNhdXNlIHRoZSBNREMtYmFzZWQgbWVudSBoYXMgdG9cbi8vIGV4dGVuZCBgTWF0TWVudWAsIGhvd2V2ZXIga2VlcGluZyBhIHJlZmVyZW5jZSB0byBpdCB3aWxsIGNhdXNlIHRoZSBpbmxpbmVkIHRlbXBsYXRlIGFuZCBzdHlsZXNcbi8vIHRvIGJlIHJldGFpbmVkIGFzIHdlbGwuIFRoZSBNREMgbWVudSBhbHNvIGhhcyB0byBwcm92aWRlIGl0c2VsZiBhcyBhIGBNYXRNZW51YCBpbiBvcmRlciBmb3Jcbi8vIHF1ZXJpZXMgYW5kIERJIHRvIHdvcmsgY29ycmVjdGx5LCB3aGlsZSBzdGlsbCBub3QgcmVmZXJlbmNpbmcgdGhlIGFjdHVhbCBtZW51IGNsYXNzLlxuLy8gQ2xhc3MgcmVzcG9uc2liaWxpdHkgaXMgc3BsaXQgdXAgYXMgZm9sbG93czpcbi8vICogX01hdE1lbnVCYXNlIC0gcHJvdmlkZXMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IHdpdGhvdXQgYW55IG9mIHRoZSBBbmd1bGFyIG1ldGFkYXRhLlxuLy8gKiBNYXRNZW51IC0ga2VlcHMgdGhlIHNhbWUgbmFtZSBzeW1ib2wgbmFtZSBhcyB0aGUgY3VycmVudCBtZW51IGFuZFxuLy8gaXMgdXNlZCBhcyBhIHByb3ZpZGVyIGZvciBESSBhbmQgcXVlcnkgcHVycG9zZXMuXG4vLyAqIF9NYXRNZW51IC0gdGhlIGFjdHVhbCBtZW51IGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZSBBbmd1bGFyIG1ldGFkYXRhIHRoYXQgc2hvdWxkXG4vLyBiZSB0cmVlIHNoYWtlbiBhd2F5IGZvciBNREMuXG5cbi8qKiBAZG9jcy1wdWJsaWMgTWF0TWVudSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtZW51LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdtYXRNZW51JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIG1hdE1lbnVBbmltYXRpb25zLnRyYW5zZm9ybU1lbnUsXG4gICAgbWF0TWVudUFuaW1hdGlvbnMuZmFkZUluSXRlbXNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9NRU5VX1BBTkVMLCB1c2VFeGlzdGluZzogTWF0TWVudX0sXG4gICAge3Byb3ZpZGU6IE1hdE1lbnUsIHVzZUV4aXN0aW5nOiBfTWF0TWVudX1cbiAgXVxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgX01hdE1lbnUgZXh0ZW5kcyBNYXRNZW51IHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgbmdab25lOiBOZ1pvbmUsXG4gICAgICBASW5qZWN0KE1BVF9NRU5VX0RFRkFVTFRfT1BUSU9OUykgZGVmYXVsdE9wdGlvbnM6IE1hdE1lbnVEZWZhdWx0T3B0aW9ucykge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSwgZGVmYXVsdE9wdGlvbnMpO1xuICB9XG59XG4iXX0=