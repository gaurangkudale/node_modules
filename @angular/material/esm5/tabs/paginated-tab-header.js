/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectorRef, ElementRef, NgZone, Optional, EventEmitter, Directive, Inject, Input, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { END, ENTER, HOME, SPACE, hasModifierKey } from '@angular/cdk/keycodes';
import { merge, of as observableOf, Subject, timer, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Platform, normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/** Config used to bind passive event listeners */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/cdk/platform';
var passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
var EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
var HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
var HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
var MatPaginatedTabHeader = /** @class */ (function () {
    function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, 
    /**
     * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
     * parameters to become required.
     */
    _platform, _animationMode) {
        var _this = this;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Emits when the component is destroyed. */
        this._destroyed = new Subject();
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        /** Stream that will stop the automated scrolling. */
        this._stopScrolling = new Subject();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */
        this.disablePagination = false;
        this._selectedIndex = 0;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new EventEmitter();
        /** Event emitted when a label is focused. */
        this.indexFocused = new EventEmitter();
        // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
        _ngZone.runOutsideAngular(function () {
            fromEvent(_elementRef.nativeElement, 'mouseleave')
                .pipe(takeUntil(_this._destroyed))
                .subscribe(function () {
                _this._stopInterval();
            });
        });
    }
    Object.defineProperty(MatPaginatedTabHeader.prototype, "selectedIndex", {
        /** The index of the active tab. */
        get: function () { return this._selectedIndex; },
        set: function (value) {
            value = coerceNumberProperty(value);
            if (this._selectedIndex != value) {
                this._selectedIndexChanged = true;
                this._selectedIndex = value;
                if (this._keyManager) {
                    this._keyManager.updateActiveItem(value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MatPaginatedTabHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        // We need to handle these events manually, because we want to bind passive event listeners.
        fromEvent(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(takeUntil(this._destroyed))
            .subscribe(function () {
            _this._handlePaginatorPress('before');
        });
        fromEvent(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(takeUntil(this._destroyed))
            .subscribe(function () {
            _this._handlePaginatorPress('after');
        });
    };
    MatPaginatedTabHeader.prototype.ngAfterContentInit = function () {
        var _this = this;
        var dirChange = this._dir ? this._dir.change : observableOf(null);
        var resize = this._viewportRuler.change(150);
        var realign = function () {
            _this.updatePagination();
            _this._alignInkBarToSelectedTab();
        };
        this._keyManager = new FocusKeyManager(this._items)
            .withHorizontalOrientation(this._getLayoutDirection())
            .withWrap();
        this._keyManager.updateActiveItem(0);
        // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.
        typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
        // On dir change or window resize, realign the ink bar and update the orientation of
        // the key manager if the direction has changed.
        merge(dirChange, resize, this._items.changes).pipe(takeUntil(this._destroyed)).subscribe(function () {
            realign();
            _this._keyManager.withHorizontalOrientation(_this._getLayoutDirection());
        });
        // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.
        this._keyManager.change.pipe(takeUntil(this._destroyed)).subscribe(function (newFocusIndex) {
            _this.indexFocused.emit(newFocusIndex);
            _this._setTabFocus(newFocusIndex);
        });
    };
    MatPaginatedTabHeader.prototype.ngAfterContentChecked = function () {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;
            this._changeDetectorRef.markForCheck();
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
            this._changeDetectorRef.markForCheck();
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    };
    MatPaginatedTabHeader.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._stopScrolling.complete();
    };
    /** Handles keyboard events on the header. */
    MatPaginatedTabHeader.prototype._handleKeydown = function (event) {
        // We don't handle any key bindings with a modifier key.
        if (hasModifierKey(event)) {
            return;
        }
        switch (event.keyCode) {
            case HOME:
                this._keyManager.setFirstItemActive();
                event.preventDefault();
                break;
            case END:
                this._keyManager.setLastItemActive();
                event.preventDefault();
                break;
            case ENTER:
            case SPACE:
                this.selectFocusedIndex.emit(this.focusIndex);
                this._itemSelected(event);
                break;
            default:
                this._keyManager.onKeydown(event);
        }
    };
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    MatPaginatedTabHeader.prototype._onContentChanges = function () {
        var _this = this;
        var textContent = this._elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || '';
            // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.
            this._ngZone.run(function () {
                _this.updatePagination();
                _this._alignInkBarToSelectedTab();
                _this._changeDetectorRef.markForCheck();
            });
        }
    };
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    MatPaginatedTabHeader.prototype.updatePagination = function () {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    };
    Object.defineProperty(MatPaginatedTabHeader.prototype, "focusIndex", {
        /** Tracks which element has focus; used for keyboard navigation */
        get: function () {
            return this._keyManager ? this._keyManager.activeItemIndex : 0;
        },
        /** When the focus index is set, we must manually send focus to the correct label */
        set: function (value) {
            if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
                return;
            }
            this._keyManager.setActiveItem(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    MatPaginatedTabHeader.prototype._isValidIndex = function (index) {
        if (!this._items) {
            return true;
        }
        var tab = this._items ? this._items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    };
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    MatPaginatedTabHeader.prototype._setTabFocus = function (tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            var containerEl = this._tabListContainer.nativeElement;
            var dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    };
    /** The layout direction of the containing app. */
    MatPaginatedTabHeader.prototype._getLayoutDirection = function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    MatPaginatedTabHeader.prototype._updateTabScrollPosition = function () {
        if (this.disablePagination) {
            return;
        }
        var scrollDistance = this.scrollDistance;
        var platform = this._platform;
        var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
        // Don't use `translate3d` here because we don't want to create a new layer. A new layer
        // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
        // and ripples will exceed the boundaries of the visible tab bar.
        // See: https://github.com/angular/components/issues/10276
        // We round the `transform` here, because transforms with sub-pixel precision cause some
        // browsers to blur the content of the element.
        this._tabList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
        // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
        // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.
        if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
        }
    };
    Object.defineProperty(MatPaginatedTabHeader.prototype, "scrollDistance", {
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        get: function () { return this._scrollDistance; },
        set: function (value) {
            this._scrollTo(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MatPaginatedTabHeader.prototype._scrollHeader = function (direction) {
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
    };
    /** Handles click events on the pagination arrows. */
    MatPaginatedTabHeader.prototype._handlePaginatorClick = function (direction) {
        this._stopInterval();
        this._scrollHeader(direction);
    };
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MatPaginatedTabHeader.prototype._scrollToLabel = function (labelIndex) {
        if (this.disablePagination) {
            return;
        }
        var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        var _a = selectedLabel.elementRef.nativeElement, offsetLeft = _a.offsetLeft, offsetWidth = _a.offsetWidth;
        var labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
        }
        var beforeVisiblePos = this.scrollDistance;
        var afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    };
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MatPaginatedTabHeader.prototype._checkPaginationEnabled = function () {
        if (this.disablePagination) {
            this._showPaginationControls = false;
        }
        else {
            var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
            }
            this._showPaginationControls = isEnabled;
        }
    };
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MatPaginatedTabHeader.prototype._checkScrollingControls = function () {
        if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
        }
        else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MatPaginatedTabHeader.prototype._getMaxScrollDistance = function () {
        var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return (lengthOfTabList - viewLength) || 0;
    };
    /** Tells the ink-bar to align itself to the current label wrapper */
    MatPaginatedTabHeader.prototype._alignInkBarToSelectedTab = function () {
        var selectedItem = this._items && this._items.length ?
            this._items.toArray()[this.selectedIndex] : null;
        var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
        }
        else {
            this._inkBar.hide();
        }
    };
    /** Stops the currently-running paginator interval.  */
    MatPaginatedTabHeader.prototype._stopInterval = function () {
        this._stopScrolling.next();
    };
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */
    MatPaginatedTabHeader.prototype._handlePaginatorPress = function (direction, mouseEvent) {
        var _this = this;
        // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
        // null check the `button`, but we do it so we don't break tests that use fake events.
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
        }
        // Avoid overlapping timers.
        this._stopInterval();
        // Start a timer after the delay and keep firing based on the interval.
        timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
            // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe(takeUntil(merge(this._stopScrolling, this._destroyed)))
            .subscribe(function () {
            var _a = _this._scrollHeader(direction), maxScrollDistance = _a.maxScrollDistance, distance = _a.distance;
            // Stop the timer if we've reached the start or the end.
            if (distance === 0 || distance >= maxScrollDistance) {
                _this._stopInterval();
            }
        });
    };
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */
    MatPaginatedTabHeader.prototype._scrollTo = function (position) {
        if (this.disablePagination) {
            return { maxScrollDistance: 0, distance: 0 };
        }
        var maxScrollDistance = this._getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
        return { maxScrollDistance: maxScrollDistance, distance: this._scrollDistance };
    };
    /** @nocollapse */
    MatPaginatedTabHeader.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: NgZone },
        { type: Platform },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatPaginatedTabHeader.propDecorators = {
        disablePagination: [{ type: Input }]
    };
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) { return new (t || MatPaginatedTabHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatPaginatedTabHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatPaginatedTabHeader, inputs: { disablePagination: "disablePagination" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatPaginatedTabHeader, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.ViewportRuler }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.Platform }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { disablePagination: [{
            type: Input
        }] }); })();
    return MatPaginatedTabHeader;
}());
export { MatPaginatedTabHeader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGVkLXRhYi1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC90YWJzL3BhZ2luYXRlZC10YWItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUVSLFlBQVksRUFLWixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVksY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFDLG9CQUFvQixFQUFjLE1BQU0sdUJBQXVCLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQWtCLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUUsK0JBQStCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxrREFBa0Q7Ozs7O0FBQ2xELElBQU0sMkJBQTJCLEdBQzdCLCtCQUErQixDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUF5QixDQUFDO0FBUzdFO0FBQ0E7QUFDQTtB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QixnQkE5REEsVUFBVTtBQUNWLGdCQUZBLGlCQUFpQjtBQUNqQixnQkFlTSxhQUFhO0FBQUksZ0JBRk4sY0FBYyx1QkE2SGxCLFFBQVE7QUFBTyxnQkF6STVCLE1BQU07QUFDTixnQkFrQk0sUUFBUTtBQUFJLDZDQTZITCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjtBQUFRO0FBQVU7QUFFL0Msb0NBckN2QixLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O29CQUFNO0FBQUMsSUE0ZFIsNEJBQUM7QUFDQSxDQURBLEFBL2dCRCxJQStnQkM7QUFDRCxTQS9nQnNCLHFCQUFxQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Vmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlciwgRm9jdXNhYmxlT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0VORCwgRU5URVIsIEhPTUUsIFNQQUNFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7bWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCwgdGltZXIsIGZyb21FdmVudH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQbGF0Zm9ybSwgbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5cbi8qKiBDb25maWcgdXNlZCB0byBiaW5kIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzICovXG5jb25zdCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMgPVxuICAgIG5vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMoe3Bhc3NpdmU6IHRydWV9KSBhcyBFdmVudExpc3RlbmVyT3B0aW9ucztcblxuLyoqXG4gKiBUaGUgZGlyZWN0aW9ucyB0aGF0IHNjcm9sbGluZyBjYW4gZ28gaW4gd2hlbiB0aGUgaGVhZGVyJ3MgdGFicyBleGNlZWQgdGhlIGhlYWRlciB3aWR0aC4gJ0FmdGVyJ1xuICogd2lsbCBzY3JvbGwgdGhlIGhlYWRlciB0b3dhcmRzIHRoZSBlbmQgb2YgdGhlIHRhYnMgbGlzdCBhbmQgJ2JlZm9yZScgd2lsbCBzY3JvbGwgdG93YXJkcyB0aGVcbiAqIGJlZ2lubmluZyBvZiB0aGUgbGlzdC5cbiAqL1xuZXhwb3J0IHR5cGUgU2Nyb2xsRGlyZWN0aW9uID0gJ2FmdGVyJyB8ICdiZWZvcmUnO1xuXG4vKipcbiAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB3aWxsIGJlIG92ZXJzaG90IHdoZW4gc2Nyb2xsaW5nIGEgdGFiIGxhYmVsIGludG8gdmlldy4gVGhpcyBoZWxwc1xuICogcHJvdmlkZSBhIHNtYWxsIGFmZm9yZGFuY2UgdG8gdGhlIGxhYmVsIG5leHQgdG8gaXQuXG4gKi9cbmNvbnN0IEVYQUdHRVJBVEVEX09WRVJTQ1JPTEwgPSA2MDtcblxuLyoqXG4gKiBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIHNjcm9sbCB0aGUgaGVhZGVyIGF1dG9tYXRpY2FsbHkuXG4gKiBTZXQgYSBsaXR0bGUgY29uc2VydmF0aXZlbHkgaW4gb3JkZXIgdG8gaGFuZGxlIGZha2UgZXZlbnRzIGRpc3BhdGNoZWQgb24gdG91Y2ggZGV2aWNlcy5cbiAqL1xuY29uc3QgSEVBREVSX1NDUk9MTF9ERUxBWSA9IDY1MDtcblxuLyoqXG4gKiBJbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMgYXQgd2hpY2ggdG8gc2Nyb2xsIHRoZSBoZWFkZXJcbiAqIHdoaWxlIHRoZSB1c2VyIGlzIGhvbGRpbmcgdGhlaXIgcG9pbnRlci5cbiAqL1xuY29uc3QgSEVBREVSX1NDUk9MTF9JTlRFUlZBTCA9IDEwMDtcblxuLyoqIEl0ZW0gaW5zaWRlIGEgcGFnaW5hdGVkIHRhYiBoZWFkZXIuICovXG5leHBvcnQgdHlwZSBNYXRQYWdpbmF0ZWRUYWJIZWFkZXJJdGVtID0gRm9jdXNhYmxlT3B0aW9uICYge2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZ9O1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGEgdGFiIGhlYWRlciB0aGF0IHN1cHBvcnRlZCBwYWdpbmF0aW9uLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNYXRQYWdpbmF0ZWRUYWJIZWFkZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBhYnN0cmFjdCBfaXRlbXM6IFF1ZXJ5TGlzdDxNYXRQYWdpbmF0ZWRUYWJIZWFkZXJJdGVtPjtcbiAgYWJzdHJhY3QgX2lua0Jhcjoge2hpZGU6ICgpID0+IHZvaWQsIGFsaWduVG9FbGVtZW50OiAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWR9O1xuICBhYnN0cmFjdCBfdGFiTGlzdENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIGFic3RyYWN0IF90YWJMaXN0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgYWJzdHJhY3QgX25leHRQYWdpbmF0b3I6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBhYnN0cmFjdCBfcHJldmlvdXNQYWdpbmF0b3I6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIC8qKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBsYWJlbHMgc2hvdWxkIGJlIHRyYW5zbGF0ZWQgdG8gdGhlIGxlZnQuICovXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcblxuICAvKiogV2hldGhlciB0aGUgaGVhZGVyIHNob3VsZCBzY3JvbGwgdG8gdGhlIHNlbGVjdGVkIGluZGV4IGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGNoZWNrZWQuICovXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByb3RlY3RlZCByZWFkb25seSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbHMgZm9yIHBhZ2luYXRpb24gc2hvdWxkIGJlIGRpc3BsYXllZCAqL1xuICBfc2hvd1BhZ2luYXRpb25Db250cm9scyA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB0YWIgbGlzdCBjYW4gYmUgc2Nyb2xsZWQgbW9yZSB0b3dhcmRzIHRoZSBlbmQgb2YgdGhlIHRhYiBsYWJlbCBsaXN0LiAqL1xuICBfZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgdGFiIGxpc3QgY2FuIGJlIHNjcm9sbGVkIG1vcmUgdG93YXJkcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0YWIgbGFiZWwgbGlzdC4gKi9cbiAgX2Rpc2FibGVTY3JvbGxCZWZvcmUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHRhYiBsYWJlbHMgdGhhdCBhcmUgZGlzcGxheWVkIG9uIHRoZSBoZWFkZXIuIFdoZW4gdGhpcyBjaGFuZ2VzLCB0aGUgaGVhZGVyXG4gICAqIHNob3VsZCByZS1ldmFsdWF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfdGFiTGFiZWxDb3VudDogbnVtYmVyO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgYW5kIHNob3VsZCBiZSBhcHBsaWVkIGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQuICovXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlQ2hhbmdlZDogYm9vbGVhbjtcblxuICAvKiogVXNlZCB0byBtYW5hZ2UgZm9jdXMgYmV0d2VlbiB0aGUgdGFicy4gKi9cbiAgcHJpdmF0ZSBfa2V5TWFuYWdlcjogRm9jdXNLZXlNYW5hZ2VyPE1hdFBhZ2luYXRlZFRhYkhlYWRlckl0ZW0+O1xuXG4gIC8qKiBDYWNoZWQgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIuICovXG4gIHByaXZhdGUgX2N1cnJlbnRUZXh0Q29udGVudDogc3RyaW5nO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCB3aWxsIHN0b3AgdGhlIGF1dG9tYXRlZCBzY3JvbGxpbmcuICovXG4gIHByaXZhdGUgX3N0b3BTY3JvbGxpbmcgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHBhZ2luYXRpb24gc2hvdWxkIGJlIGRpc2FibGVkLiBUaGlzIGNhbiBiZSB1c2VkIHRvIGF2b2lkIHVubmVjZXNzYXJ5XG4gICAqIGxheW91dCByZWNhbGN1bGF0aW9ucyBpZiBpdCdzIGtub3duIHRoYXQgcGFnaW5hdGlvbiB3b24ndCBiZSByZXF1aXJlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpc2FibGVQYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIHRhYi4gKi9cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7IH1cbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcblxuICAgICAgaWYgKHRoaXMuX2tleU1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuICovXG4gIHJlYWRvbmx5IHNlbGVjdEZvY3VzZWRJbmRleDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIGEgbGFiZWwgaXMgZm9jdXNlZC4gKi9cbiAgcmVhZG9ubHkgaW5kZXhGb2N1c2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgYF9wbGF0Zm9ybWAgYW5kIGBfYW5pbWF0aW9uTW9kZWBcbiAgICAgICAgICAgICAgICogcGFyYW1ldGVycyB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBwcml2YXRlIF9wbGF0Zm9ybT86IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHVibGljIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7XG5cbiAgICAvLyBCaW5kIHRoZSBgbW91c2VsZWF2ZWAgZXZlbnQgb24gdGhlIG91dHNpZGUgc2luY2UgaXQgZG9lc24ndCBjaGFuZ2UgYW55dGhpbmcgaW4gdGhlIHZpZXcuXG4gICAgX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc3RvcEludGVydmFsKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCBhbiBpdGVtIHZpYSB0aGUga2V5Ym9hcmQuICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfaXRlbVNlbGVjdGVkKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgdGhlc2UgZXZlbnRzIG1hbnVhbGx5LCBiZWNhdXNlIHdlIHdhbnQgdG8gYmluZCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycy5cbiAgICBmcm9tRXZlbnQodGhpcy5fcHJldmlvdXNQYWdpbmF0b3IubmF0aXZlRWxlbWVudCwgJ3RvdWNoc3RhcnQnLCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVQYWdpbmF0b3JQcmVzcygnYmVmb3JlJyk7XG4gICAgICB9KTtcblxuICAgIGZyb21FdmVudCh0aGlzLl9uZXh0UGFnaW5hdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0JywgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlUGFnaW5hdG9yUHJlc3MoJ2FmdGVyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCBkaXJDaGFuZ2UgPSB0aGlzLl9kaXIgPyB0aGlzLl9kaXIuY2hhbmdlIDogb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgIGNvbnN0IHJlc2l6ZSA9IHRoaXMuX3ZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCk7XG4gICAgY29uc3QgcmVhbGlnbiA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgdGhpcy5fYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgfTtcblxuICAgIHRoaXMuX2tleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyPE1hdFBhZ2luYXRlZFRhYkhlYWRlckl0ZW0+KHRoaXMuX2l0ZW1zKVxuICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkpXG4gICAgICAud2l0aFdyYXAoKTtcblxuICAgIHRoaXMuX2tleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSgwKTtcblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCBjYWxsIGluIG9yZGVyIHRvIGFsbG93IGZvciBzbG93ZXIgYnJvd3NlcnMgdG8gbGF5IG91dCB0aGUgZWxlbWVudHMuXG4gICAgLy8gVGhpcyBoZWxwcyBpbiBjYXNlcyB3aGVyZSB0aGUgdXNlciBsYW5kcyBkaXJlY3RseSBvbiBhIHBhZ2Ugd2l0aCBwYWdpbmF0ZWQgdGFicy5cbiAgICB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZWFsaWduKSA6IHJlYWxpZ24oKTtcblxuICAgIC8vIE9uIGRpciBjaGFuZ2Ugb3Igd2luZG93IHJlc2l6ZSwgcmVhbGlnbiB0aGUgaW5rIGJhciBhbmQgdXBkYXRlIHRoZSBvcmllbnRhdGlvbiBvZlxuICAgIC8vIHRoZSBrZXkgbWFuYWdlciBpZiB0aGUgZGlyZWN0aW9uIGhhcyBjaGFuZ2VkLlxuICAgIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplLCB0aGlzLl9pdGVtcy5jaGFuZ2VzKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgcmVhbGlnbigpO1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX2dldExheW91dERpcmVjdGlvbigpKTtcbiAgICB9KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHRoZSBmb2N1cyBrZXkgbWFuYWdlciB3ZSBuZWVkIHRvIGVtaXQgdGhlIGBpbmRleEZvY3VzZWRgXG4gICAgLy8gZXZlbnQgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIHB1YmxpYyBldmVudCB0aGF0IG5vdGlmaWVzIGFib3V0IGZvY3VzIGNoYW5nZXMuIEFsc28gd2UgcmVhbGlnblxuICAgIC8vIHRoZSB0YWJzIGNvbnRhaW5lciBieSBzY3JvbGxpbmcgdGhlIG5ldyBmb2N1c2VkIHRhYiBpbnRvIHRoZSB2aXNpYmxlIHNlY3Rpb24uXG4gICAgdGhpcy5fa2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKG5ld0ZvY3VzSW5kZXggPT4ge1xuICAgICAgdGhpcy5pbmRleEZvY3VzZWQuZW1pdChuZXdGb2N1c0luZGV4KTtcbiAgICAgIHRoaXMuX3NldFRhYkZvY3VzKG5ld0ZvY3VzSW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgdGFiIGxhYmVscyBoYXZlIGNoYW5nZWQsIGNoZWNrIGlmIHNjcm9sbGluZyBzaG91bGQgYmUgZW5hYmxlZFxuICAgIGlmICh0aGlzLl90YWJMYWJlbENvdW50ICE9IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB0aGlzLl90YWJMYWJlbENvdW50ID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBjaGFuZ2VkLCBzY3JvbGwgdG8gdGhlIGxhYmVsIGFuZCBjaGVjayBpZiB0aGUgc2Nyb2xsaW5nIGNvbnRyb2xzXG4gICAgLy8gc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4Q2hhbmdlZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICAgIHRoaXMuX2FsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGJlZW4gY2hhbmdlZCAodGFiIHNlbGVjdGVkLCBmb2N1c2VkLCBzY3JvbGwgY29udHJvbHMgYWN0aXZhdGVkKSxcbiAgICAvLyB0aGVuIHRyYW5zbGF0ZSB0aGUgaGVhZGVyIHRvIHJlZmxlY3QgdGhpcy5cbiAgICBpZiAodGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3N0b3BTY3JvbGxpbmcuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGtleWJvYXJkIGV2ZW50cyBvbiB0aGUgaGVhZGVyLiAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIFdlIGRvbid0IGhhbmRsZSBhbnkga2V5IGJpbmRpbmdzIHdpdGggYSBtb2RpZmllciBrZXkuXG4gICAgaWYgKGhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBIT01FOlxuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldExhc3RJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIHRoaXMuc2VsZWN0Rm9jdXNlZEluZGV4LmVtaXQodGhpcy5mb2N1c0luZGV4KTtcbiAgICAgICAgdGhpcy5faXRlbVNlbGVjdGVkKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciB3aGVuIHRoZSBNdXRhdGlvbk9ic2VydmVyIGRldGVjdHMgdGhhdCB0aGUgY29udGVudCBoYXMgY2hhbmdlZC5cbiAgICovXG4gIF9vbkNvbnRlbnRDaGFuZ2VzKCkge1xuICAgIGNvbnN0IHRleHRDb250ZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuXG4gICAgLy8gV2UgbmVlZCB0byBkaWZmIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGhlYWRlciwgYmVjYXVzZSB0aGUgTXV0YXRpb25PYnNlcnZlciBjYWxsYmFja1xuICAgIC8vIHdpbGwgZmlyZSBldmVuIGlmIHRoZSB0ZXh0IGNvbnRlbnQgZGlkbid0IGNoYW5nZSB3aGljaCBpcyBpbmVmZmljaWVudCBhbmQgaXMgcHJvbmVcbiAgICAvLyB0byBpbmZpbml0ZSBsb29wcyBpZiBhIHBvb3JseSBjb25zdHJ1Y3RlZCBleHByZXNzaW9uIGlzIHBhc3NlZCBpbiAoc2VlICMxNDI0OSkuXG4gICAgaWYgKHRleHRDb250ZW50ICE9PSB0aGlzLl9jdXJyZW50VGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUZXh0Q29udGVudCA9IHRleHRDb250ZW50IHx8ICcnO1xuXG4gICAgICAvLyBUaGUgY29udGVudCBvYnNlcnZlciBydW5zIG91dHNpZGUgdGhlIGBOZ1pvbmVgIGJ5IGRlZmF1bHQsIHdoaWNoXG4gICAgICAvLyBtZWFucyB0aGF0IHdlIG5lZWQgdG8gYnJpbmcgdGhlIGNhbGxiYWNrIGJhY2sgaW4gb3Vyc2VsdmVzLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB0aGlzLl9hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmlldyB3aGV0aGVyIHBhZ2luYXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgb3Igbm90LlxuICAgKlxuICAgKiBXQVJOSU5HOiBDYWxsaW5nIHRoaXMgbWV0aG9kIGNhbiBiZSB2ZXJ5IGNvc3RseSBpbiB0ZXJtcyBvZiBwZXJmb3JtYW5jZS4gSXQgc2hvdWxkIGJlIGNhbGxlZFxuICAgKiBhcyBpbmZyZXF1ZW50bHkgYXMgcG9zc2libGUgZnJvbSBvdXRzaWRlIG9mIHRoZSBUYWJzIGNvbXBvbmVudCBhcyBpdCBjYXVzZXMgYSByZWZsb3cgb2YgdGhlXG4gICAqIHBhZ2UuXG4gICAqL1xuICB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMuX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUcmFja3Mgd2hpY2ggZWxlbWVudCBoYXMgZm9jdXM7IHVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cbiAgZ2V0IGZvY3VzSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFuYWdlciA/IHRoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ISA6IDA7XG4gIH1cblxuICAvKiogV2hlbiB0aGUgZm9jdXMgaW5kZXggaXMgc2V0LCB3ZSBtdXN0IG1hbnVhbGx5IHNlbmQgZm9jdXMgdG8gdGhlIGNvcnJlY3QgbGFiZWwgKi9cbiAgc2V0IGZvY3VzSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5faXNWYWxpZEluZGV4KHZhbHVlKSB8fCB0aGlzLmZvY3VzSW5kZXggPT09IHZhbHVlIHx8ICF0aGlzLl9rZXlNYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fa2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIGFuIGluZGV4IGlzIHZhbGlkLiAgSWYgdGhlIHRhYnMgYXJlIG5vdCByZWFkeSB5ZXQsIHdlIGFzc3VtZSB0aGF0IHRoZSB1c2VyIGlzXG4gICAqIHByb3ZpZGluZyBhIHZhbGlkIGluZGV4IGFuZCByZXR1cm4gdHJ1ZS5cbiAgICovXG4gIF9pc1ZhbGlkSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5faXRlbXMpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIGNvbnN0IHRhYiA9IHRoaXMuX2l0ZW1zID8gdGhpcy5faXRlbXMudG9BcnJheSgpW2luZGV4XSA6IG51bGw7XG4gICAgcmV0dXJuICEhdGFiICYmICF0YWIuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgSFRNTCBlbGVtZW50IGZvciB0aGUgbGFiZWwgd3JhcHBlciBhbmQgc2Nyb2xscyBpdCBpbnRvIHRoZSB2aWV3IGlmXG4gICAqIHNjcm9sbGluZyBpcyBlbmFibGVkLlxuICAgKi9cbiAgX3NldFRhYkZvY3VzKHRhYkluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc2hvd1BhZ2luYXRpb25Db250cm9scykge1xuICAgICAgdGhpcy5fc2Nyb2xsVG9MYWJlbCh0YWJJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2l0ZW1zICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RhYkluZGV4XS5mb2N1cygpO1xuXG4gICAgICAvLyBEbyBub3QgbGV0IHRoZSBicm93c2VyIG1hbmFnZSBzY3JvbGxpbmcgdG8gZm9jdXMgdGhlIGVsZW1lbnQsIHRoaXMgd2lsbCBiZSBoYW5kbGVkXG4gICAgICAvLyBieSB1c2luZyB0cmFuc2xhdGlvbi4gSW4gTFRSLCB0aGUgc2Nyb2xsIGxlZnQgc2hvdWxkIGJlIDAuIEluIFJUTCwgdGhlIHNjcm9sbCB3aWR0aFxuICAgICAgLy8gc2hvdWxkIGJlIHRoZSBmdWxsIHdpZHRoIG1pbnVzIHRoZSBvZmZzZXQgd2lkdGguXG4gICAgICBjb25zdCBjb250YWluZXJFbCA9IHRoaXMuX3RhYkxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IGRpciA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpO1xuXG4gICAgICBpZiAoZGlyID09ICdsdHInKSB7XG4gICAgICAgIGNvbnRhaW5lckVsLnNjcm9sbExlZnQgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyRWwuc2Nyb2xsTGVmdCA9IGNvbnRhaW5lckVsLnNjcm9sbFdpZHRoIC0gY29udGFpbmVyRWwub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBjb250YWluaW5nIGFwcC4gKi9cbiAgX2dldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXIgJiYgdGhpcy5fZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICAvKiogUGVyZm9ybXMgdGhlIENTUyB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgdGFiIGxpc3QgdGhhdCB3aWxsIGNhdXNlIHRoZSBsaXN0IHRvIHNjcm9sbC4gKi9cbiAgX3VwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgIGNvbnN0IHBsYXRmb3JtID0gdGhpcy5fcGxhdGZvcm07XG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuX2dldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJyA/IC1zY3JvbGxEaXN0YW5jZSA6IHNjcm9sbERpc3RhbmNlO1xuXG4gICAgLy8gRG9uJ3QgdXNlIGB0cmFuc2xhdGUzZGAgaGVyZSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gY3JlYXRlIGEgbmV3IGxheWVyLiBBIG5ldyBsYXllclxuICAgIC8vIHNlZW1zIHRvIGNhdXNlIGZsaWNrZXJpbmcgYW5kIG92ZXJmbG93IGluIEludGVybmV0IEV4cGxvcmVyLiBGb3IgZXhhbXBsZSwgdGhlIGluayBiYXJcbiAgICAvLyBhbmQgcmlwcGxlcyB3aWxsIGV4Y2VlZCB0aGUgYm91bmRhcmllcyBvZiB0aGUgdmlzaWJsZSB0YWIgYmFyLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvMTAyNzZcbiAgICAvLyBXZSByb3VuZCB0aGUgYHRyYW5zZm9ybWAgaGVyZSwgYmVjYXVzZSB0cmFuc2Zvcm1zIHdpdGggc3ViLXBpeGVsIHByZWNpc2lvbiBjYXVzZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgdG8gYmx1ciB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAgICB0aGlzLl90YWJMaXN0Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtNYXRoLnJvdW5kKHRyYW5zbGF0ZVgpfXB4KWA7XG5cbiAgICAvLyBTZXR0aW5nIHRoZSBgdHJhbnNmb3JtYCBvbiBJRSB3aWxsIGNoYW5nZSB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgcGFyZW50LCBjYXVzaW5nIHRoZVxuICAgIC8vIHBvc2l0aW9uIHRvIGJlIHRocm93biBvZmYgaW4gc29tZSBjYXNlcy4gV2UgaGF2ZSB0byByZXNldCBpdCBvdXJzZWx2ZXMgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyBpdCBkb2Vzbid0IGdldCB0aHJvd24gb2ZmLiBOb3RlIHRoYXQgd2Ugc2NvcGUgaXQgb25seSB0byBJRSBhbmQgRWRnZSwgYmVjYXVzZSBtZXNzaW5nXG4gICAgLy8gd2l0aCB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRocm93cyBvZmYgQ2hyb21lIDcxKyBpbiBSVEwgbW9kZSAoc2VlICMxNDY4OSkuXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSA5LjAuMCBSZW1vdmUgbnVsbCBjaGVjayBmb3IgYHBsYXRmb3JtYCBhZnRlciBpdCBjYW4gbm8gbG9uZ2VyIGJlIHVuZGVmaW5lZC5cbiAgICBpZiAocGxhdGZvcm0gJiYgKHBsYXRmb3JtLlRSSURFTlQgfHwgcGxhdGZvcm0uRURHRSkpIHtcbiAgICAgIHRoaXMuX3RhYkxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2Nyb2xsRGlzdGFuY2U7IH1cbiAgc2V0IHNjcm9sbERpc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxUbyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHRhYiBsaXN0IGluIHRoZSAnYmVmb3JlJyBvciAnYWZ0ZXInIGRpcmVjdGlvbiAodG93YXJkcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IG9yXG4gICAqIHRoZSBlbmQgb2YgdGhlIGxpc3QsIHJlc3BlY3RpdmVseSkuIFRoZSBkaXN0YW5jZSB0byBzY3JvbGwgaXMgY29tcHV0ZWQgdG8gYmUgYSB0aGlyZCBvZiB0aGVcbiAgICogbGVuZ3RoIG9mIHRoZSB0YWIgbGlzdCB2aWV3IHdpbmRvdy5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxuICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cbiAgICovXG4gIF9zY3JvbGxIZWFkZXIoZGlyZWN0aW9uOiBTY3JvbGxEaXJlY3Rpb24pIHtcbiAgICBjb25zdCB2aWV3TGVuZ3RoID0gdGhpcy5fdGFiTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgLy8gTW92ZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIG9uZS10aGlyZCB0aGUgbGVuZ3RoIG9mIHRoZSB0YWIgbGlzdCdzIHZpZXdwb3J0LlxuICAgIGNvbnN0IHNjcm9sbEFtb3VudCA9IChkaXJlY3Rpb24gPT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdmlld0xlbmd0aCAvIDM7XG5cbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVG8odGhpcy5fc2Nyb2xsRGlzdGFuY2UgKyBzY3JvbGxBbW91bnQpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgY2xpY2sgZXZlbnRzIG9uIHRoZSBwYWdpbmF0aW9uIGFycm93cy4gKi9cbiAgX2hhbmRsZVBhZ2luYXRvckNsaWNrKGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fc3RvcEludGVydmFsKCk7XG4gICAgdGhpcy5fc2Nyb2xsSGVhZGVyKGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHRhYiBsaXN0IHN1Y2ggdGhhdCB0aGUgZGVzaXJlZCB0YWIgbGFiZWwgKG1hcmtlZCBieSBpbmRleCkgaXMgbW92ZWQgaW50byB2aWV3LlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgc3BhcmluZ2x5LlxuICAgKi9cbiAgX3Njcm9sbFRvTGFiZWwobGFiZWxJbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gdGhpcy5faXRlbXMgPyB0aGlzLl9pdGVtcy50b0FycmF5KClbbGFiZWxJbmRleF0gOiBudWxsO1xuXG4gICAgaWYgKCFzZWxlY3RlZExhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlIHZpZXcgbGVuZ3RoIGlzIHRoZSB2aXNpYmxlIHdpZHRoIG9mIHRoZSB0YWIgbGFiZWxzLlxuICAgIGNvbnN0IHZpZXdMZW5ndGggPSB0aGlzLl90YWJMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qge29mZnNldExlZnQsIG9mZnNldFdpZHRofSA9IHNlbGVjdGVkTGFiZWwuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgbGV0IGxhYmVsQmVmb3JlUG9zOiBudW1iZXIsIGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcbiAgICBpZiAodGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT0gJ2x0cicpIHtcbiAgICAgIGxhYmVsQmVmb3JlUG9zID0gb2Zmc2V0TGVmdDtcbiAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIG9mZnNldFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbEFmdGVyUG9zID0gdGhpcy5fdGFiTGlzdC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gb2Zmc2V0TGVmdDtcbiAgICAgIGxhYmVsQmVmb3JlUG9zID0gbGFiZWxBZnRlclBvcyAtIG9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGJlZm9yZVZpc2libGVQb3MgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB2aWV3TGVuZ3RoO1xuXG4gICAgaWYgKGxhYmVsQmVmb3JlUG9zIDwgYmVmb3JlVmlzaWJsZVBvcykge1xuICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBiZWZvcmUgZGlyZWN0aW9uXG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlIC09IGJlZm9yZVZpc2libGVQb3MgLSBsYWJlbEJlZm9yZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XG4gICAgfSBlbHNlIGlmIChsYWJlbEFmdGVyUG9zID4gYWZ0ZXJWaXNpYmxlUG9zKSB7XG4gICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGFmdGVyIGRpcmVjdGlvblxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSBsYWJlbEFmdGVyUG9zIC0gYWZ0ZXJWaXNpYmxlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiB0aGUgc2Nyb2xsIHdpZHRoIG9mIHRoZVxuICAgKiB0YWIgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBoZWFkZXIgY29udGFpbmVyLCB0aGVuIHRoZSBwYWdpbmF0aW9uIGNvbnRyb2xzIHNob3VsZFxuICAgKiBiZSBzaG93bi5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxuICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cbiAgICovXG4gIF9jaGVja1BhZ2luYXRpb25FbmFibGVkKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzRW5hYmxlZCA9XG4gICAgICAgICAgdGhpcy5fdGFiTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRW5hYmxlZCAhPT0gdGhpcy5fc2hvd1BhZ2luYXRpb25Db250cm9scykge1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2hvd1BhZ2luYXRpb25Db250cm9scyA9IGlzRW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgYmVmb3JlIGFuZCBhZnRlciBjb250cm9scyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gMCkgdGhlbiBkaXNhYmxlIHRoZVxuICAgKiBiZWZvcmUgYnV0dG9uLiBJZiB0aGUgaGVhZGVyIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgKHNjcm9sbCBkaXN0YW5jZSBpcyBlcXVhbCB0byB0aGVcbiAgICogbWF4aW11bSBkaXN0YW5jZSB3ZSBjYW4gc2Nyb2xsKSwgdGhlbiBkaXNhYmxlIHRoZSBhZnRlciBidXR0b24uXG4gICAqXG4gICAqIFRoaXMgaXMgYW4gZXhwZW5zaXZlIGNhbGwgdGhhdCBmb3JjZXMgYSBsYXlvdXQgcmVmbG93IHRvIGNvbXB1dGUgYm94IGFuZCBzY3JvbGwgbWV0cmljcyBhbmRcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBzcGFyaW5nbHkuXG4gICAqL1xuICBfY2hlY2tTY3JvbGxpbmdDb250cm9scygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5fZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5fZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBwYWdpbmF0aW9uIGFycm93cyBzaG91bGQgYmUgYWN0aXZhdGVkLlxuICAgICAgdGhpcy5fZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT0gMDtcbiAgICAgIHRoaXMuX2Rpc2FibGVTY3JvbGxBZnRlciA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT0gdGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgdGFiIGxpc3QgY29udGFpbmVyIGFuZCB0YWIgaGVhZGVyIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxuICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cbiAgICovXG4gIF9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGxlbmd0aE9mVGFiTGlzdCA9IHRoaXMuX3RhYkxpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCB2aWV3TGVuZ3RoID0gdGhpcy5fdGFiTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHJldHVybiAobGVuZ3RoT2ZUYWJMaXN0IC0gdmlld0xlbmd0aCkgfHwgMDtcbiAgfVxuXG4gIC8qKiBUZWxscyB0aGUgaW5rLWJhciB0byBhbGlnbiBpdHNlbGYgdG8gdGhlIGN1cnJlbnQgbGFiZWwgd3JhcHBlciAqL1xuICBfYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuX2l0ZW1zICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA/XG4gICAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdIDogbnVsbDtcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsV3JhcHBlciA9IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuXG4gICAgaWYgKHNlbGVjdGVkTGFiZWxXcmFwcGVyKSB7XG4gICAgICB0aGlzLl9pbmtCYXIuYWxpZ25Ub0VsZW1lbnQoc2VsZWN0ZWRMYWJlbFdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbmtCYXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTdG9wcyB0aGUgY3VycmVudGx5LXJ1bm5pbmcgcGFnaW5hdG9yIGludGVydmFsLiAgKi9cbiAgX3N0b3BJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9zdG9wU2Nyb2xsaW5nLm5leHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSB1c2VyIHByZXNzaW5nIGRvd24gb24gb25lIG9mIHRoZSBwYWdpbmF0b3JzLlxuICAgKiBTdGFydHMgc2Nyb2xsaW5nIHRoZSBoZWFkZXIgYWZ0ZXIgYSBjZXJ0YWluIGFtb3VudCBvZiB0aW1lLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIEluIHdoaWNoIGRpcmVjdGlvbiB0aGUgcGFnaW5hdG9yIHNob3VsZCBiZSBzY3JvbGxlZC5cbiAgICovXG4gIF9oYW5kbGVQYWdpbmF0b3JQcmVzcyhkaXJlY3Rpb246IFNjcm9sbERpcmVjdGlvbiwgbW91c2VFdmVudD86IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBEb24ndCBzdGFydCBhdXRvIHNjcm9sbGluZyBmb3IgcmlnaHQgbW91c2UgYnV0dG9uIGNsaWNrcy4gTm90ZSB0aGF0IHdlIHNob3VsZG4ndCBoYXZlIHRvXG4gICAgLy8gbnVsbCBjaGVjayB0aGUgYGJ1dHRvbmAsIGJ1dCB3ZSBkbyBpdCBzbyB3ZSBkb24ndCBicmVhayB0ZXN0cyB0aGF0IHVzZSBmYWtlIGV2ZW50cy5cbiAgICBpZiAobW91c2VFdmVudCAmJiBtb3VzZUV2ZW50LmJ1dHRvbiAhPSBudWxsICYmIG1vdXNlRXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgb3ZlcmxhcHBpbmcgdGltZXJzLlxuICAgIHRoaXMuX3N0b3BJbnRlcnZhbCgpO1xuXG4gICAgLy8gU3RhcnQgYSB0aW1lciBhZnRlciB0aGUgZGVsYXkgYW5kIGtlZXAgZmlyaW5nIGJhc2VkIG9uIHRoZSBpbnRlcnZhbC5cbiAgICB0aW1lcihIRUFERVJfU0NST0xMX0RFTEFZLCBIRUFERVJfU0NST0xMX0lOVEVSVkFMKVxuICAgICAgLy8gS2VlcCB0aGUgdGltZXIgZ29pbmcgdW50aWwgc29tZXRoaW5nIHRlbGxzIGl0IHRvIHN0b3Agb3IgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAgICAucGlwZSh0YWtlVW50aWwobWVyZ2UodGhpcy5fc3RvcFNjcm9sbGluZywgdGhpcy5fZGVzdHJveWVkKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3Qge21heFNjcm9sbERpc3RhbmNlLCBkaXN0YW5jZX0gPSB0aGlzLl9zY3JvbGxIZWFkZXIoZGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBTdG9wIHRoZSB0aW1lciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBzdGFydCBvciB0aGUgZW5kLlxuICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDAgfHwgZGlzdGFuY2UgPj0gbWF4U2Nyb2xsRGlzdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLl9zdG9wSW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgaGVhZGVyIHRvIGEgZ2l2ZW4gcG9zaXRpb24uXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBQb3NpdGlvbiB0byB3aGljaCB0byBzY3JvbGwuXG4gICAqIEByZXR1cm5zIEluZm9ybWF0aW9uIG9uIHRoZSBjdXJyZW50IHNjcm9sbCBkaXN0YW5jZSBhbmQgdGhlIG1heGltdW0uXG4gICAqL1xuICBwcml2YXRlIF9zY3JvbGxUbyhwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybiB7bWF4U2Nyb2xsRGlzdGFuY2U6IDAsIGRpc3RhbmNlOiAwfTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXhTY3JvbGxEaXN0YW5jZSA9IHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCk7XG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhTY3JvbGxEaXN0YW5jZSwgcG9zaXRpb24pKTtcblxuICAgIC8vIE1hcmsgdGhhdCB0aGUgc2Nyb2xsIGRpc3RhbmNlIGhhcyBjaGFuZ2VkIHNvIHRoYXQgYWZ0ZXIgdGhlIHZpZXcgaXMgY2hlY2tlZCwgdGhlIENTU1xuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG5cbiAgICByZXR1cm4ge21heFNjcm9sbERpc3RhbmNlLCBkaXN0YW5jZTogdGhpcy5fc2Nyb2xsRGlzdGFuY2V9O1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NlbGVjdGVkSW5kZXg6IE51bWJlcklucHV0O1xufVxuIl19