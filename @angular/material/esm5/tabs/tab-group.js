/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { mixinColor, mixinDisableRipple, } from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { merge, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MAT_TAB_GROUP, MatTab } from './tab';
import { MAT_TABS_CONFIG } from './tab-config';
/** Used to generate unique ID's for each tab component */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './tab-header';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './tab-label-wrapper';
import * as ɵngcc4 from '@angular/material/core';
import * as ɵngcc5 from '@angular/cdk/a11y';
import * as ɵngcc6 from '@angular/cdk/portal';
import * as ɵngcc7 from './tab-body';

var _c0 = ["tabBodyWrapper"];
var _c1 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) { }
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    var tab_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("cdkPortalOutlet", tab_r4.templateLabel);
} }
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    var tab_r4 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵtextInterpolate(tab_r4.textLabel);
} }
function MatTabGroup_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function MatTabGroup_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var tab_r4 = ctx.$implicit; var i_r5 = ctx.index; var ctx_r11 = ɵngcc0.ɵɵnextContext(); var _r0 = ɵngcc0.ɵɵreference(1); return ctx_r11._handleClick(tab_r4, _r0, i_r5); });
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵtemplate(2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    ɵngcc0.ɵɵtemplate(3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    ɵngcc0.ɵɵproperty("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    ɵngcc0.ɵɵattribute("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", tab_r4.templateLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !tab_r4.templateLabel);
} }
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-tab-body", 10);
    ɵngcc0.ɵɵlistener("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15._removeTabBodyWrapperHeight(); })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17._setTabBodyWrapperHeight($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);
    ɵngcc0.ɵɵproperty("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
} }
var nextId = 0;
/** A simple change event emitted on focus or selection changes. */
var MatTabChangeEvent = /** @class */ (function () {
    function MatTabChangeEvent() {
    }
    return MatTabChangeEvent;
}());
export { MatTabChangeEvent };
// Boilerplate for applying mixins to MatTabGroup.
/** @docs-private */
var MatTabGroupMixinBase = /** @class */ (function () {
    function MatTabGroupMixinBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatTabGroupMixinBase;
}());
var _MatTabGroupMixinBase = mixinColor(mixinDisableRipple(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */
var _MatTabGroupBase = /** @class */ (function (_super) {
    __extends(_MatTabGroupBase, _super);
    function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._animationMode = _animationMode;
        /** All of the tabs that belong to the group. */
        _this._tabs = new QueryList();
        /** The tab index that should be selected after the content has been checked. */
        _this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        _this._tabBodyWrapperHeight = 0;
        /** Subscription to tabs being added/removed. */
        _this._tabsSubscription = Subscription.EMPTY;
        /** Subscription to changes in the tab labels. */
        _this._tabLabelSubscription = Subscription.EMPTY;
        _this._dynamicHeight = false;
        _this._selectedIndex = null;
        /** Position of the tab header. */
        _this.headerPosition = 'above';
        /** Output to enable support for two-way binding on `[(selectedIndex)]` */
        _this.selectedIndexChange = new EventEmitter();
        /** Event emitted when focus has changed within a tab group. */
        _this.focusChange = new EventEmitter();
        /** Event emitted when the body animation has completed */
        _this.animationDone = new EventEmitter();
        /** Event emitted when the tab selection has changed. */
        _this.selectedTabChange = new EventEmitter(true);
        _this._groupId = nextId++;
        _this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
            defaultConfig.animationDuration : '500ms';
        _this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ?
            defaultConfig.disablePagination : false;
        return _this;
    }
    Object.defineProperty(_MatTabGroupBase.prototype, "dynamicHeight", {
        /** Whether the tab group should grow to the size of the active tab. */
        get: function () { return this._dynamicHeight; },
        set: function (value) { this._dynamicHeight = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatTabGroupBase.prototype, "selectedIndex", {
        /** The index of the active tab. */
        get: function () { return this._selectedIndex; },
        set: function (value) {
            this._indexToSelect = coerceNumberProperty(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatTabGroupBase.prototype, "animationDuration", {
        /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
        get: function () { return this._animationDuration; },
        set: function (value) {
            this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_MatTabGroupBase.prototype, "backgroundColor", {
        /** Background color of the tab group. */
        get: function () { return this._backgroundColor; },
        set: function (value) {
            var nativeElement = this._elementRef.nativeElement;
            nativeElement.classList.remove("mat-background-" + this.backgroundColor);
            if (value) {
                nativeElement.classList.add("mat-background-" + value);
            }
            this._backgroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    _MatTabGroupBase.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != indexToSelect) {
            var isFirstRun_1 = this._selectedIndex == null;
            if (!isFirstRun_1) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(function () {
                _this._tabs.forEach(function (tab, index) { return tab.isActive = index === indexToSelect; });
                if (!isFirstRun_1) {
                    _this.selectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach(function (tab, index) {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (_this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - _this._selectedIndex;
            }
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    };
    _MatTabGroupBase.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._subscribeToAllTabChanges();
        this._subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this._tabsSubscription = this._tabs.changes.subscribe(function () {
            var indexToSelect = _this._clampTabIndex(_this._indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                var tabs = _this._tabs.toArray();
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        _this._indexToSelect = _this._selectedIndex = i;
                        break;
                    }
                }
            }
            _this._changeDetectorRef.markForCheck();
        });
    };
    /** Listens to changes in all of the tabs. */
    _MatTabGroupBase.prototype._subscribeToAllTabChanges = function () {
        var _this = this;
        // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
        // some that are inside of nested tab groups. We filter them out manually by checking that
        // the closest group to the tab is the current one.
        this._allTabs.changes
            .pipe(startWith(this._allTabs))
            .subscribe(function (tabs) {
            _this._tabs.reset(tabs.filter(function (tab) {
                // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
                // once it becomes a required parameter in MatTab.
                return !tab._closestTabGroup || tab._closestTabGroup === _this;
            }));
            _this._tabs.notifyOnChanges();
        });
    };
    _MatTabGroupBase.prototype.ngOnDestroy = function () {
        this._tabs.destroy();
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
    };
    /** Re-aligns the ink bar to the selected tab element. */
    _MatTabGroupBase.prototype.realignInkBar = function () {
        if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
        }
    };
    _MatTabGroupBase.prototype._focusChanged = function (index) {
        this.focusChange.emit(this._createChangeEvent(index));
    };
    _MatTabGroupBase.prototype._createChangeEvent = function (index) {
        var event = new MatTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    };
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */
    _MatTabGroupBase.prototype._subscribeToTabLabels = function () {
        var _this = this;
        if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = merge.apply(void 0, __spread(this._tabs.map(function (tab) { return tab._stateChanges; }))).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    _MatTabGroupBase.prototype._clampTabIndex = function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    };
    /** Returns a unique id for each tab label element */
    _MatTabGroupBase.prototype._getTabLabelId = function (i) {
        return "mat-tab-label-" + this._groupId + "-" + i;
    };
    /** Returns a unique id for each tab content element */
    _MatTabGroupBase.prototype._getTabContentId = function (i) {
        return "mat-tab-content-" + this._groupId + "-" + i;
    };
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _MatTabGroupBase.prototype._setTabBodyWrapperHeight = function (tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        var wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + 'px';
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
        }
    };
    /** Removes the height of the tab body wrapper. */
    _MatTabGroupBase.prototype._removeTabBodyWrapperHeight = function () {
        var wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationDone.emit();
    };
    /** Handle click events, setting new selected index if appropriate. */
    _MatTabGroupBase.prototype._handleClick = function (tab, tabHeader, index) {
        if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
        }
    };
    /** Retrieves the tabindex for the tab. */
    _MatTabGroupBase.prototype._getTabIndex = function (tab, idx) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === idx ? 0 : -1;
    };
    /** @nocollapse */
    _MatTabGroupBase.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_TABS_CONFIG,] }, { type: Optional }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    _MatTabGroupBase.propDecorators = {
        dynamicHeight: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        headerPosition: [{ type: Input }],
        animationDuration: [{ type: Input }],
        disablePagination: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        selectedIndexChange: [{ type: Output }],
        focusChange: [{ type: Output }],
        animationDone: [{ type: Output }],
        selectedTabChange: [{ type: Output }]
    };
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) { return new (t || _MatTabGroupBase)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_TABS_CONFIG, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
_MatTabGroupBase.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: _MatTabGroupBase, inputs: { dynamicHeight: "dynamicHeight", selectedIndex: "selectedIndex", animationDuration: "animationDuration", backgroundColor: "backgroundColor", headerPosition: "headerPosition", disablePagination: "disablePagination" }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(_MatTabGroupBase, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: Optional
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { dynamicHeight: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], headerPosition: [{
            type: Input
        }], disablePagination: [{
            type: Input
        }], selectedIndexChange: [{
            type: Output
        }], focusChange: [{
            type: Output
        }], animationDone: [{
            type: Output
        }], selectedTabChange: [{
            type: Output
        }] }); })();
    return _MatTabGroupBase;
}(_MatTabGroupMixinBase));
export { _MatTabGroupBase };
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
var MatTabGroup = /** @class */ (function (_super) {
    __extends(MatTabGroup, _super);
    function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        return _super.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode) || this;
    }
    /** @nocollapse */
    MatTabGroup.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_TABS_CONFIG,] }, { type: Optional }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    MatTabGroup.propDecorators = {
        _allTabs: [{ type: ContentChildren, args: [MatTab, { descendants: true },] }],
        _tabBodyWrapper: [{ type: ViewChild, args: ['tabBodyWrapper',] }],
        _tabHeader: [{ type: ViewChild, args: ['tabHeader',] }]
    };
MatTabGroup.ɵfac = function MatTabGroup_Factory(t) { return new (t || MatTabGroup)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_TABS_CONFIG, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatTabGroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTabGroup, selectors: [["mat-tab-group"]], contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatTab, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._allTabs = _t);
    } }, viewQuery: function MatTabGroup_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._tabBodyWrapper = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._tabHeader = _t.first);
    } }, hostAttrs: [1, "mat-tab-group"], hostVars: 4, hostBindings: function MatTabGroup_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    } }, inputs: { color: "color", disableRipple: "disableRipple" }, exportAs: ["matTabGroup"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_TAB_GROUP,
                useExisting: MatTabGroup
            }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]], template: function MatTabGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-tab-header", 0, 1);
        ɵngcc0.ɵɵlistener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) { return ctx._focusChanged($event); })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) { return ctx.selectedIndex = $event; });
        ɵngcc0.ɵɵtemplate(2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵtemplate(5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._tabs);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._tabs);
    } }, directives: [ɵngcc1.MatTabHeader, ɵngcc2.NgForOf, ɵngcc3.MatTabLabelWrapper, ɵngcc4.MatRipple, ɵngcc5.CdkMonitorFocus, ɵngcc2.NgIf, ɵngcc6.CdkPortalOutlet, ɵngcc7.MatTabBody], styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTabGroup, [{
        type: Component,
        args: [{
                selector: 'mat-tab-group',
                exportAs: 'matTabGroup',
                template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                inputs: ['color', 'disableRipple'],
                providers: [{
                        provide: MAT_TAB_GROUP,
                        useExisting: MatTabGroup
                    }],
                host: {
                    'class': 'mat-tab-group',
                    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                    '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
                },
                styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: Optional
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { _allTabs: [{
            type: ContentChildren,
            args: [MatTab, { descendants: true }]
        }], _tabBodyWrapper: [{
            type: ViewChild,
            args: ['tabBodyWrapper']
        }], _tabHeader: [{
            type: ViewChild,
            args: ['tabHeader']
        }] }); })();
    return MatTabGroup;
}(_MatTabGroupBase));
export { MatTabGroup };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUVMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFFckIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBS0wsVUFBVSxFQUNWLGtCQUFrQixHQUVuQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFnQixNQUFNLGNBQWMsQ0FBQztBQUc1RCwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmLG1FQUFtRTtBQUNuRTtBQUNvQixJQURwQjtBQUErQixJQUsvQixDQUFDO0FBQ0QsSUFEQSx3QkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBQ0Q7QUFJQSxrREFBa0Q7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LFNBQUMsZ0JBQWdCO0FBQU8sNkJBQ2pDLFNBQVMsU0FBQyxXQUFXO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dVdBbkJDLHNCQUU3QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxzQkFDckMsK0NBQStDLHFCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTyxzQkFDaEQsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxzQkFDbEMsU0FBUyxFQUFFLENBQUMsOEJBQ1YsT0FBTyxFQUFFLGFBQWEsOEJBQ3RCLFdBQVcsRUFBRSxXQUFXLDBCQUN6QixDQUFDLHNCQUNGLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUsZUFBZSwwQkFDeEIsc0NBQXNDLEVBQUUsZUFBZSwwQkFDdkQsdUNBQXVDLEVBQUUsNEJBQTRCO2lCQUN0RTs7Ozs7Ozs7Ozs7Ozs7OzBmQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJbUM7QUFBQyxJQVFyQyxrQkFBQztBQUNBLENBREEsQUE5QkQsQ0FtQmlDLGdCQUFnQixHQVdoRDtBQUNELFNBWmEsV0FBVztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIEJvb2xlYW5JbnB1dCxcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBjb2VyY2VOdW1iZXJQcm9wZXJ0eSxcbiAgTnVtYmVySW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5Db2xvcixcbiAgQ2FuQ29sb3JDdG9yLFxuICBDYW5EaXNhYmxlUmlwcGxlLFxuICBDYW5EaXNhYmxlUmlwcGxlQ3RvcixcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBUaGVtZVBhbGV0dGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge21lcmdlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TUFUX1RBQl9HUk9VUCwgTWF0VGFifSBmcm9tICcuL3RhYic7XG5pbXBvcnQge01BVF9UQUJTX0NPTkZJRywgTWF0VGFic0NvbmZpZ30gZnJvbSAnLi90YWItY29uZmlnJztcblxuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSUQncyBmb3IgZWFjaCB0YWIgY29tcG9uZW50ICovXG5sZXQgbmV4dElkID0gMDtcblxuLyoqIEEgc2ltcGxlIGNoYW5nZSBldmVudCBlbWl0dGVkIG9uIGZvY3VzIG9yIHNlbGVjdGlvbiBjaGFuZ2VzLiAqL1xuZXhwb3J0IGNsYXNzIE1hdFRhYkNoYW5nZUV2ZW50IHtcbiAgLyoqIEluZGV4IG9mIHRoZSBjdXJyZW50bHktc2VsZWN0ZWQgdGFiLiAqL1xuICBpbmRleDogbnVtYmVyO1xuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHktc2VsZWN0ZWQgdGFiLiAqL1xuICB0YWI6IE1hdFRhYjtcbn1cblxuLyoqIFBvc3NpYmxlIHBvc2l0aW9ucyBmb3IgdGhlIHRhYiBoZWFkZXIuICovXG5leHBvcnQgdHlwZSBNYXRUYWJIZWFkZXJQb3NpdGlvbiA9ICdhYm92ZScgfCAnYmVsb3cnO1xuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdFRhYkdyb3VwLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdFRhYkdyb3VwTWl4aW5CYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuY29uc3QgX01hdFRhYkdyb3VwTWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJiBDYW5EaXNhYmxlUmlwcGxlQ3RvciAmIHR5cGVvZiBNYXRUYWJHcm91cE1peGluQmFzZSA9XG4gICAgbWl4aW5Db2xvcihtaXhpbkRpc2FibGVSaXBwbGUoTWF0VGFiR3JvdXBNaXhpbkJhc2UpLCAncHJpbWFyeScpO1xuXG5pbnRlcmZhY2UgTWF0VGFiR3JvdXBCYXNlSGVhZGVyIHtcbiAgX2FsaWduSW5rQmFyVG9TZWxlY3RlZFRhYjogKCkgPT4gdm9pZDtcbiAgZm9jdXNJbmRleDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3Mgd2l0aCBhbGwgb2YgdGhlIGBNYXRUYWJHcm91cEJhc2VgIGZ1bmN0aW9uYWxpdHkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfTWF0VGFiR3JvdXBCYXNlIGV4dGVuZHMgX01hdFRhYkdyb3VwTWl4aW5CYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3ksIENhbkNvbG9yLCBDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogQWxsIHRhYnMgaW5zaWRlIHRoZSB0YWIgZ3JvdXAuIFRoaXMgaW5jbHVkZXMgdGFicyB0aGF0IGJlbG9uZyB0byBncm91cHMgdGhhdCBhcmUgbmVzdGVkXG4gICAqIGluc2lkZSB0aGUgY3VycmVudCBvbmUuIFdlIGZpbHRlciBvdXQgb25seSB0aGUgdGFicyB0aGF0IGJlbG9uZyB0byB0aGlzIGdyb3VwIGluIGBfdGFic2AuXG4gICAqL1xuICBhYnN0cmFjdCBfYWxsVGFiczogUXVlcnlMaXN0PE1hdFRhYj47XG4gIGFic3RyYWN0IF90YWJCb2R5V3JhcHBlcjogRWxlbWVudFJlZjtcbiAgYWJzdHJhY3QgX3RhYkhlYWRlcjogTWF0VGFiR3JvdXBCYXNlSGVhZGVyO1xuXG4gIC8qKiBBbGwgb2YgdGhlIHRhYnMgdGhhdCBiZWxvbmcgdG8gdGhlIGdyb3VwLiAqL1xuICBfdGFiczogUXVlcnlMaXN0PE1hdFRhYj4gPSBuZXcgUXVlcnlMaXN0PE1hdFRhYj4oKTtcblxuICAvKiogVGhlIHRhYiBpbmRleCB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZCBhZnRlciB0aGUgY29udGVudCBoYXMgYmVlbiBjaGVja2VkLiAqL1xuICBwcml2YXRlIF9pbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcblxuICAvKiogU25hcHNob3Qgb2YgdGhlIGhlaWdodCBvZiB0aGUgdGFiIGJvZHkgd3JhcHBlciBiZWZvcmUgYW5vdGhlciB0YWIgaXMgYWN0aXZhdGVkLiAqL1xuICBwcml2YXRlIF90YWJCb2R5V3JhcHBlckhlaWdodDogbnVtYmVyID0gMDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRhYnMgYmVpbmcgYWRkZWQvcmVtb3ZlZC4gKi9cbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIGNoYW5nZXMgaW4gdGhlIHRhYiBsYWJlbHMuICovXG4gIHByaXZhdGUgX3RhYkxhYmVsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB0YWIgZ3JvdXAgc2hvdWxkIGdyb3cgdG8gdGhlIHNpemUgb2YgdGhlIGFjdGl2ZSB0YWIuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkeW5hbWljSGVpZ2h0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZHluYW1pY0hlaWdodDsgfVxuICBzZXQgZHluYW1pY0hlaWdodCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9keW5hbWljSGVpZ2h0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9keW5hbWljSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIHRhYi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7IHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4OyB9XG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5faW5kZXhUb1NlbGVjdCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCBudWxsKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAvKiogUG9zaXRpb24gb2YgdGhlIHRhYiBoZWFkZXIuICovXG4gIEBJbnB1dCgpIGhlYWRlclBvc2l0aW9uOiBNYXRUYWJIZWFkZXJQb3NpdGlvbiA9ICdhYm92ZSc7XG5cbiAgLyoqIER1cmF0aW9uIGZvciB0aGUgdGFiIGFuaW1hdGlvbi4gV2lsbCBiZSBub3JtYWxpemVkIHRvIG1pbGxpc2Vjb25kcyBpZiBubyB1bml0cyBhcmUgc2V0LiAqL1xuICBASW5wdXQoKVxuICBnZXQgYW5pbWF0aW9uRHVyYXRpb24oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uOyB9XG4gIHNldCBhbmltYXRpb25EdXJhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uRHVyYXRpb24gPSAvXlxcZCskLy50ZXN0KHZhbHVlKSA/IHZhbHVlICsgJ21zJyA6IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2FuaW1hdGlvbkR1cmF0aW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgcGFnaW5hdGlvbiBzaG91bGQgYmUgZGlzYWJsZWQuIFRoaXMgY2FuIGJlIHVzZWQgdG8gYXZvaWQgdW5uZWNlc3NhcnlcbiAgICogbGF5b3V0IHJlY2FsY3VsYXRpb25zIGlmIGl0J3Mga25vd24gdGhhdCBwYWdpbmF0aW9uIHdvbid0IGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZVBhZ2luYXRpb246IGJvb2xlYW47XG5cbiAgLyoqIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYiBncm91cC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBUaGVtZVBhbGV0dGUgeyByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yOyB9XG4gIHNldCBiYWNrZ3JvdW5kQ29sb3IodmFsdWU6IFRoZW1lUGFsZXR0ZSkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgbmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBtYXQtYmFja2dyb3VuZC0ke3RoaXMuYmFja2dyb3VuZENvbG9yfWApO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG1hdC1iYWNrZ3JvdW5kLSR7dmFsdWV9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqIE91dHB1dCB0byBlbmFibGUgc3VwcG9ydCBmb3IgdHdvLXdheSBiaW5kaW5nIG9uIGBbKHNlbGVjdGVkSW5kZXgpXWAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiBmb2N1cyBoYXMgY2hhbmdlZCB3aXRoaW4gYSB0YWIgZ3JvdXAuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmb2N1c0NoYW5nZTogRXZlbnRFbWl0dGVyPE1hdFRhYkNoYW5nZUV2ZW50PiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdFRhYkNoYW5nZUV2ZW50PigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGJvZHkgYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFuaW1hdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB0YWIgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRUYWJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXRUYWJDaGFuZ2VFdmVudD4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxNYXRUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XG5cbiAgcHJpdmF0ZSBfZ3JvdXBJZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9UQUJTX0NPTkZJRykgQE9wdGlvbmFsKCkgZGVmYXVsdENvbmZpZz86IE1hdFRhYnNDb25maWcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgICB0aGlzLl9ncm91cElkID0gbmV4dElkKys7XG4gICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IGRlZmF1bHRDb25maWcgJiYgZGVmYXVsdENvbmZpZy5hbmltYXRpb25EdXJhdGlvbiA/XG4gICAgICAgIGRlZmF1bHRDb25maWcuYW5pbWF0aW9uRHVyYXRpb24gOiAnNTAwbXMnO1xuICAgIHRoaXMuZGlzYWJsZVBhZ2luYXRpb24gPSBkZWZhdWx0Q29uZmlnICYmIGRlZmF1bHRDb25maWcuZGlzYWJsZVBhZ2luYXRpb24gIT0gbnVsbCA/XG4gICAgICAgIGRlZmF1bHRDb25maWcuZGlzYWJsZVBhZ2luYXRpb24gOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciB0aGUgY29udGVudCBpcyBjaGVja2VkLCB0aGlzIGNvbXBvbmVudCBrbm93cyB3aGF0IHRhYnMgaGF2ZSBiZWVuIGRlZmluZWRcbiAgICogYW5kIHdoYXQgdGhlIHNlbGVjdGVkIGluZGV4IHNob3VsZCBiZS4gVGhpcyBpcyB3aGVyZSB3ZSBjYW4ga25vdyBleGFjdGx5IHdoYXQgcG9zaXRpb25cbiAgICogZWFjaCB0YWIgc2hvdWxkIGJlIGluIGFjY29yZGluZyB0byB0aGUgbmV3IHNlbGVjdGVkIGluZGV4LCBhbmQgYWRkaXRpb25hbGx5IHdlIGtub3cgaG93XG4gICAqIGEgbmV3IHNlbGVjdGVkIHRhYiBzaG91bGQgdHJhbnNpdGlvbiBpbiAoZnJvbSB0aGUgbGVmdCBvciByaWdodCkuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XG4gICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxuICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLl9pbmRleFRvU2VsZWN0ID0gdGhpcy5fY2xhbXBUYWJJbmRleCh0aGlzLl9pbmRleFRvU2VsZWN0KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xuXG4gICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYkNoYW5nZS5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxuICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCk7XG5cbiAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cbiAgICB0aGlzLl90YWJzLmZvckVhY2goKHRhYjogTWF0VGFiLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXG4gICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PSAwICYmICF0YWIub3JpZ2luKSB7XG4gICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxuICAgIC8vIGFibGUgdG8gcmUtcmVuZGVyIHRoZSBjb250ZW50IGFzIG5ldyB0YWJzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLl90YWJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLl9jbGFtcFRhYkluZGV4KHRoaXMuX2luZGV4VG9TZWxlY3QpO1xuXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLl90YWJzLnRvQXJyYXkoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgLy8gQXNzaWduIGJvdGggdG8gdGhlIGBfaW5kZXhUb1NlbGVjdGAgYW5kIGBfc2VsZWN0ZWRJbmRleGAgc28gd2UgZG9uJ3QgZmlyZSBhIGNoYW5nZWRcbiAgICAgICAgICAgIC8vIGV2ZW50LCBvdGhlcndpc2UgdGhlIGNvbnN1bWVyIG1heSBlbmQgdXAgaW4gYW4gaW5maW5pdGUgbG9vcCBpbiBzb21lIGVkZ2UgY2FzZXMgbGlrZVxuICAgICAgICAgICAgLy8gYWRkaW5nIGEgdGFiIHdpdGhpbiB0aGUgYHNlbGVjdGVkSW5kZXhDaGFuZ2VgIGV2ZW50LlxuICAgICAgICAgICAgdGhpcy5faW5kZXhUb1NlbGVjdCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIExpc3RlbnMgdG8gY2hhbmdlcyBpbiBhbGwgb2YgdGhlIHRhYnMuICovXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpIHtcbiAgICAvLyBTaW5jZSB3ZSB1c2UgYSBxdWVyeSB3aXRoIGBkZXNjZW5kYW50czogdHJ1ZWAgdG8gcGljayB1cCB0aGUgdGFicywgd2UgbWF5IGVuZCB1cCBjYXRjaGluZ1xuICAgIC8vIHNvbWUgdGhhdCBhcmUgaW5zaWRlIG9mIG5lc3RlZCB0YWIgZ3JvdXBzLiBXZSBmaWx0ZXIgdGhlbSBvdXQgbWFudWFsbHkgYnkgY2hlY2tpbmcgdGhhdFxuICAgIC8vIHRoZSBjbG9zZXN0IGdyb3VwIHRvIHRoZSB0YWIgaXMgdGhlIGN1cnJlbnQgb25lLlxuICAgIHRoaXMuX2FsbFRhYnMuY2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2FsbFRhYnMpKVxuICAgICAgLnN1YnNjcmliZSgodGFiczogUXVlcnlMaXN0PE1hdFRhYj4pID0+IHtcbiAgICAgICAgdGhpcy5fdGFicy5yZXNldCh0YWJzLmZpbHRlcih0YWIgPT4ge1xuICAgICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wIFJlbW92ZSBudWxsIGNoZWNrIGZvciBgX2Nsb3Nlc3RUYWJHcm91cGBcbiAgICAgICAgICAvLyBvbmNlIGl0IGJlY29tZXMgYSByZXF1aXJlZCBwYXJhbWV0ZXIgaW4gTWF0VGFiLlxuICAgICAgICAgIHJldHVybiAhdGFiLl9jbG9zZXN0VGFiR3JvdXAgfHwgdGFiLl9jbG9zZXN0VGFiR3JvdXAgPT09IHRoaXM7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5fdGFicy5ub3RpZnlPbkNoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFicy5kZXN0cm95KCk7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3RhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKiogUmUtYWxpZ25zIHRoZSBpbmsgYmFyIHRvIHRoZSBzZWxlY3RlZCB0YWIgZWxlbWVudC4gKi9cbiAgcmVhbGlnbklua0JhcigpIHtcbiAgICBpZiAodGhpcy5fdGFiSGVhZGVyKSB7XG4gICAgICB0aGlzLl90YWJIZWFkZXIuX2FsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0NoYW5nZWQoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZm9jdXNDaGFuZ2UuZW1pdCh0aGlzLl9jcmVhdGVDaGFuZ2VFdmVudChpbmRleCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE1hdFRhYkNoYW5nZUV2ZW50IHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBNYXRUYWJDaGFuZ2VFdmVudDtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLl90YWJzICYmIHRoaXMuX3RhYnMubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLl90YWJzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVzIHRvIGNoYW5nZXMgaW4gdGhlIHRhYiBsYWJlbHMuIFRoaXMgaXMgbmVlZGVkLCBiZWNhdXNlIHRoZSBASW5wdXQgZm9yIHRoZSBsYWJlbCBpc1xuICAgKiBvbiB0aGUgTWF0VGFiIGNvbXBvbmVudCwgd2hlcmVhcyB0aGUgZGF0YSBiaW5kaW5nIGlzIGluc2lkZSB0aGUgTWF0VGFiR3JvdXAuIEluIG9yZGVyIGZvciB0aGVcbiAgICogYmluZGluZyB0byBiZSB1cGRhdGVkLCB3ZSBuZWVkIHRvIHN1YnNjcmliZSB0byBjaGFuZ2VzIGluIGl0IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb25cbiAgICogbWFudWFsbHkuXG4gICAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb1RhYkxhYmVscygpIHtcbiAgICBpZiAodGhpcy5fdGFiTGFiZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3RhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLl90YWJzLm1hcCh0YWIgPT4gdGFiLl9zdGF0ZUNoYW5nZXMpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cbiAgcHJpdmF0ZSBfY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLl90YWJzLmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGEgdW5pcXVlIGlkIGZvciBlYWNoIHRhYiBsYWJlbCBlbGVtZW50ICovXG4gIF9nZXRUYWJMYWJlbElkKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBtYXQtdGFiLWxhYmVsLSR7dGhpcy5fZ3JvdXBJZH0tJHtpfWA7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHVuaXF1ZSBpZCBmb3IgZWFjaCB0YWIgY29udGVudCBlbGVtZW50ICovXG4gIF9nZXRUYWJDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYG1hdC10YWItY29udGVudC0ke3RoaXMuX2dyb3VwSWR9LSR7aX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgYm9keSB3cmFwcGVyIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGFjdGl2YXRpbmcgdGFiIGlmIGR5bmFtaWNcbiAgICogaGVpZ2h0IHByb3BlcnR5IGlzIHRydWUuXG4gICAqL1xuICBfc2V0VGFiQm9keVdyYXBwZXJIZWlnaHQodGFiSGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2R5bmFtaWNIZWlnaHQgfHwgIXRoaXMuX3RhYkJvZHlXcmFwcGVySGVpZ2h0KSB7IHJldHVybjsgfVxuXG4gICAgY29uc3Qgd3JhcHBlcjogSFRNTEVsZW1lbnQgPSB0aGlzLl90YWJCb2R5V3JhcHBlci5uYXRpdmVFbGVtZW50O1xuXG4gICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSB0aGlzLl90YWJCb2R5V3JhcHBlckhlaWdodCArICdweCc7XG5cbiAgICAvLyBUaGlzIGNvbmRpdGlvbmFsIGZvcmNlcyB0aGUgYnJvd3NlciB0byBwYWludCB0aGUgaGVpZ2h0IHNvIHRoYXRcbiAgICAvLyB0aGUgYW5pbWF0aW9uIHRvIHRoZSBuZXcgaGVpZ2h0IGNhbiBoYXZlIGFuIG9yaWdpbi5cbiAgICBpZiAodGhpcy5fdGFiQm9keVdyYXBwZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gdGFiSGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyB0aGUgaGVpZ2h0IG9mIHRoZSB0YWIgYm9keSB3cmFwcGVyLiAqL1xuICBfcmVtb3ZlVGFiQm9keVdyYXBwZXJIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuX3RhYkJvZHlXcmFwcGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fdGFiQm9keVdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyLmNsaWVudEhlaWdodDtcbiAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KCk7XG4gIH1cblxuICAvKiogSGFuZGxlIGNsaWNrIGV2ZW50cywgc2V0dGluZyBuZXcgc2VsZWN0ZWQgaW5kZXggaWYgYXBwcm9wcmlhdGUuICovXG4gIF9oYW5kbGVDbGljayh0YWI6IE1hdFRhYiwgdGFiSGVhZGVyOiBNYXRUYWJHcm91cEJhc2VIZWFkZXIsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGFiSGVhZGVyLmZvY3VzSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0cmlldmVzIHRoZSB0YWJpbmRleCBmb3IgdGhlIHRhYi4gKi9cbiAgX2dldFRhYkluZGV4KHRhYjogTWF0VGFiLCBpZHg6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0YWIuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4ID09PSBpZHggPyAwIDogLTE7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZHluYW1pY0hlaWdodDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0aW9uRHVyYXRpb246IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWRJbmRleDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlUmlwcGxlOiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKlxuICogTWF0ZXJpYWwgZGVzaWduIHRhYi1ncm91cCBjb21wb25lbnQuIFN1cHBvcnRzIGJhc2ljIHRhYiBwYWlycyAobGFiZWwgKyBjb250ZW50KSBhbmQgaW5jbHVkZXNcbiAqIGFuaW1hdGVkIGluay1iYXIsIGtleWJvYXJkIG5hdmlnYXRpb24sIGFuZCBzY3JlZW4gcmVhZGVyLlxuICogU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3RhYnMuaHRtbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdGFiLWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdtYXRUYWJHcm91cCcsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlUmlwcGxlJ10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBNQVRfVEFCX0dST1VQLFxuICAgIHVzZUV4aXN0aW5nOiBNYXRUYWJHcm91cFxuICB9XSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtdGFiLWdyb3VwJyxcbiAgICAnW2NsYXNzLm1hdC10YWItZ3JvdXAtZHluYW1pYy1oZWlnaHRdJzogJ2R5bmFtaWNIZWlnaHQnLFxuICAgICdbY2xhc3MubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXJdJzogJ2hlYWRlclBvc2l0aW9uID09PSBcImJlbG93XCInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNYXRUYWJHcm91cCBleHRlbmRzIF9NYXRUYWJHcm91cEJhc2Uge1xuICBAQ29udGVudENoaWxkcmVuKE1hdFRhYiwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgX2FsbFRhYnM6IFF1ZXJ5TGlzdDxNYXRUYWI+O1xuICBAVmlld0NoaWxkKCd0YWJCb2R5V3JhcHBlcicpIF90YWJCb2R5V3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiSGVhZGVyJykgX3RhYkhlYWRlcjogTWF0VGFiR3JvdXBCYXNlSGVhZGVyO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfVEFCU19DT05GSUcpIEBPcHRpb25hbCgpIGRlZmF1bHRDb25maWc/OiBNYXRUYWJzQ29uZmlnLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgYW5pbWF0aW9uTW9kZT86IHN0cmluZykge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yUmVmLCBkZWZhdWx0Q29uZmlnLCBhbmltYXRpb25Nb2RlKTtcbiAgfVxufVxuIl19