/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation, InjectionToken, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { mixinDisableRipple, } from '@angular/material/core';
/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';

var _c0 = ["button"];
var _c1 = ["*"];
export var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
export var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MatButtonToggleGroup; }),
    multi: true
};
/**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * @breaking-change 8.0.0
 */
var MatButtonToggleGroupMultiple = /** @class */ (function () {
    function MatButtonToggleGroupMultiple() {
    }
    return MatButtonToggleGroupMultiple;
}());
export { MatButtonToggleGroupMultiple };
var _uniqueIdCounter = 0;
/** Change event object emitted by MatButtonToggle. */
var MatButtonToggleChange = /** @class */ (function () {
    function MatButtonToggleChange(
    /** The MatButtonToggle that emits the event. */
    source, 
    /** The value assigned to the MatButtonToggle. */
    value) {
        this.source = source;
        this.value = value;
    }
    return MatButtonToggleChange;
}());
export { MatButtonToggleChange };
/** Exclusive selection button toggle group that behaves like a radio-button group. */
var MatButtonToggleGroup = /** @class */ (function () {
    function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = function () { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this._onTouched = function () { };
        this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * @docs-private
         */
        this.valueChange = new EventEmitter();
        /** Event emitted when the group's value changes. */
        this.change = new EventEmitter();
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
        /** `name` attribute for the underlying `input` element. */
        get: function () { return this._name; },
        set: function (value) {
            var _this = this;
            this._name = value;
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) {
                    toggle.name = _this._name;
                    toggle._markForCheck();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
        /** Whether the toggle group is vertical. */
        get: function () { return this._vertical; },
        set: function (value) {
            this._vertical = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
        /** Value of the toggle group. */
        get: function () {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            if (this.multiple) {
                return selected.map(function (toggle) { return toggle.value; });
            }
            return selected[0] ? selected[0].value : undefined;
        },
        set: function (newValue) {
            this._setSelectionByValue(newValue);
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
        /** Selected button toggles in the group. */
        get: function () {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : (selected[0] || null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "multiple", {
        /** Whether multiple button toggles can be selected. */
        get: function () { return this._multiple; },
        set: function (value) {
            this._multiple = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "disabled", {
        /** Whether multiple button toggle group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) { return toggle._markForCheck(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    MatButtonToggleGroup.prototype.ngOnInit = function () {
        this._selectionModel = new SelectionModel(this.multiple, undefined, false);
    };
    MatButtonToggleGroup.prototype.ngAfterContentInit = function () {
        var _a;
        (_a = this._selectionModel).select.apply(_a, __spread(this._buttonToggles.filter(function (toggle) { return toggle.checked; })));
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    MatButtonToggleGroup.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Dispatch change event with current selection and group value. */
    MatButtonToggleGroup.prototype._emitChangeEvent = function () {
        var selected = this.selected;
        var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
        var event = new MatButtonToggleChange(source, this.value);
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    };
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */
    MatButtonToggleGroup.prototype._syncButtonToggle = function (toggle, select, isUserInput, deferEvents) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = false; }
        if (deferEvents === void 0) { deferEvents = false; }
        // Deselect the currently-selected toggle, if we're in single-selection
        // mode and the button being toggled isn't selected at the moment.
        if (!this.multiple && this.selected && !toggle.checked) {
            this.selected.checked = false;
        }
        if (this._selectionModel) {
            if (select) {
                this._selectionModel.select(toggle);
            }
            else {
                this._selectionModel.deselect(toggle);
            }
        }
        else {
            deferEvents = true;
        }
        // We need to defer in some cases in order to avoid "changed after checked errors", however
        // the side-effect is that we may end up updating the model value out of sequence in others
        // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
        if (deferEvents) {
            Promise.resolve(function () { return _this._updateModelValue(isUserInput); });
        }
        else {
            this._updateModelValue(isUserInput);
        }
    };
    /** Checks whether a button toggle is selected. */
    MatButtonToggleGroup.prototype._isSelected = function (toggle) {
        return this._selectionModel && this._selectionModel.isSelected(toggle);
    };
    /** Determines whether a button toggle should be checked on init. */
    MatButtonToggleGroup.prototype._isPrechecked = function (toggle) {
        if (typeof this._rawValue === 'undefined') {
            return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(function (value) { return toggle.value != null && value === toggle.value; });
        }
        return toggle.value === this._rawValue;
    };
    /** Updates the selection state of the toggles in the group based on a value. */
    MatButtonToggleGroup.prototype._setSelectionByValue = function (value) {
        var _this = this;
        this._rawValue = value;
        if (!this._buttonToggles) {
            return;
        }
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
            }
            this._clearSelection();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
        }
        else {
            this._clearSelection();
            this._selectValue(value);
        }
    };
    /** Clears the selected toggles. */
    MatButtonToggleGroup.prototype._clearSelection = function () {
        this._selectionModel.clear();
        this._buttonToggles.forEach(function (toggle) { return toggle.checked = false; });
    };
    /** Selects a value if there's a toggle that corresponds to it. */
    MatButtonToggleGroup.prototype._selectValue = function (value) {
        var correspondingOption = this._buttonToggles.find(function (toggle) {
            return toggle.value != null && toggle.value === value;
        });
        if (correspondingOption) {
            correspondingOption.checked = true;
            this._selectionModel.select(correspondingOption);
        }
    };
    /** Syncs up the group's value with the model and emits the change event. */
    MatButtonToggleGroup.prototype._updateModelValue = function (isUserInput) {
        // Only emit the change event for user input.
        if (isUserInput) {
            this._emitChangeEvent();
        }
        // Note: we emit this one no matter whether it was a user interaction, because
        // it is used by Angular to sync up the two-way data binding.
        this.valueChange.emit(this.value);
    };
    /** @nocollapse */
    MatButtonToggleGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{ type: ContentChildren, args: [forwardRef(function () { return MatButtonToggle; }), {
                        // Note that this would technically pick up toggles
                        // from nested groups, but that's not a case that we support.
                        descendants: true
                    },] }],
        appearance: [{ type: Input }],
        name: [{ type: Input }],
        vertical: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        multiple: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }]
    };
MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) { return new (t || MatButtonToggleGroup)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggleGroup.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatButtonToggleGroup, selectors: [["mat-button-toggle-group"]], contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatButtonToggle, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._buttonToggles = _t);
    } }, hostAttrs: ["role", "group", 1, "mat-button-toggle-group"], hostVars: 5, hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-disabled", ctx.disabled);
        ɵngcc0.ɵɵclassProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { appearance: "appearance", name: "name", vertical: "vertical", value: "value", multiple: "multiple", disabled: "disabled" }, outputs: { valueChange: "valueChange", change: "change" }, exportAs: ["matButtonToggleGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
            { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatButtonToggleGroup, [{
        type: Directive,
        args: [{
                selector: 'mat-button-toggle-group',
                providers: [
                    MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                    { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
                ],
                host: {
                    'role': 'group',
                    'class': 'mat-button-toggle-group',
                    '[attr.aria-disabled]': 'disabled',
                    '[class.mat-button-toggle-vertical]': 'vertical',
                    '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
                },
                exportAs: 'matButtonToggleGroup'
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { valueChange: [{
            type: Output
        }], change: [{
            type: Output
        }], appearance: [{
            type: Input
        }], name: [{
            type: Input
        }], vertical: [{
            type: Input
        }], value: [{
            type: Input
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], _buttonToggles: [{
            type: ContentChildren,
            args: [forwardRef(function () { return MatButtonToggle; }), {
                    // Note that this would technically pick up toggles
                    // from nested groups, but that's not a case that we support.
                    descendants: true
                }]
        }] }); })();
    return MatButtonToggleGroup;
}());
export { MatButtonToggleGroup };
// Boilerplate for applying mixins to the MatButtonToggle class.
/** @docs-private */
var MatButtonToggleBase = /** @class */ (function () {
    function MatButtonToggleBase() {
    }
    return MatButtonToggleBase;
}());
var _MatButtonToggleMixinBase = mixinDisableRipple(MatButtonToggleBase);
/** Single button inside of a toggle group. */
var MatButtonToggle = /** @class */ (function (_super) {
    __extends(MatButtonToggle, _super);
    function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, 
    // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
    defaultTabIndex, defaultOptions) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._isSingleSelector = false;
        _this._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._disabled = false;
        /** Event emitted when the group value changes. */
        _this.change = new EventEmitter();
        var parsedTabIndex = Number(defaultTabIndex);
        _this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        _this.buttonToggleGroup = toggleGroup;
        _this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this;
    }
    Object.defineProperty(MatButtonToggle.prototype, "buttonId", {
        /** Unique ID for the underlying `button` element. */
        get: function () { return this.id + "-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "appearance", {
        /** The appearance style of the button. */
        get: function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        },
        set: function (value) {
            this._appearance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "checked", {
        /** Whether the button is checked. */
        get: function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        },
        set: function (value) {
            var newValue = coerceBooleanProperty(value);
            if (newValue !== this._checked) {
                this._checked = newValue;
                if (this.buttonToggleGroup) {
                    this.buttonToggleGroup._syncButtonToggle(this, this._checked);
                }
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "disabled", {
        /** Whether the button is disabled. */
        get: function () {
            return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
        },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MatButtonToggle.prototype.ngOnInit = function () {
        this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
        this._type = this._isSingleSelector ? 'radio' : 'checkbox';
        this.id = this.id || "mat-button-toggle-" + _uniqueIdCounter++;
        if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
        }
        if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
        }
        this._focusMonitor.monitor(this._elementRef, true);
    };
    MatButtonToggle.prototype.ngOnDestroy = function () {
        var group = this.buttonToggleGroup;
        this._focusMonitor.stopMonitoring(this._elementRef);
        // Remove the toggle from the selection once it's destroyed. Needs to happen
        // on the next tick in order to avoid "changed after checked" errors.
        if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
        }
    };
    /** Focuses the button. */
    MatButtonToggle.prototype.focus = function (options) {
        this._buttonElement.nativeElement.focus(options);
    };
    /** Checks the button toggle due to an interaction with the underlying native button. */
    MatButtonToggle.prototype._onButtonClick = function () {
        var newChecked = this._isSingleSelector ? true : !this._checked;
        if (newChecked !== this._checked) {
            this._checked = newChecked;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup._onTouched();
            }
        }
        // Emit a change event when it's the single selector
        this.change.emit(new MatButtonToggleChange(this, this.value));
    };
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    MatButtonToggle.prototype._markForCheck = function () {
        // When the group value changes, the button will not be notified.
        // Use `markForCheck` to explicit update button toggle's status.
        this._changeDetectorRef.markForCheck();
    };
    /** @nocollapse */
    MatButtonToggle.ctorParameters = function () { return [
        { type: MatButtonToggleGroup, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: FocusMonitor },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggle.propDecorators = {
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }],
        _buttonElement: [{ type: ViewChild, args: ['button',] }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        tabIndex: [{ type: Input }],
        appearance: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }]
    };
MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) { return new (t || MatButtonToggle)(ɵngcc0.ɵɵdirectiveInject(MatButtonToggleGroup, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵinjectAttribute('tabindex'), ɵngcc0.ɵɵdirectiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggle.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatButtonToggle, selectors: [["mat-button-toggle"]], viewQuery: function MatButtonToggle_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._buttonElement = _t.first);
    } }, hostAttrs: [1, "mat-button-toggle"], hostVars: 11, hostBindings: function MatButtonToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focus", function MatButtonToggle_focus_HostBindingHandler() { return ctx.focus(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", 0 - 1)("id", ctx.id)("name", null);
        ɵngcc0.ɵɵclassProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { disableRipple: "disableRipple", appearance: "appearance", checked: "checked", disabled: "disabled", id: "id", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], value: "value", tabIndex: "tabIndex" }, outputs: { change: "change" }, exportAs: ["matButtonToggle"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 9, consts: [["type", "button", 1, "mat-button-toggle-button", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]], template: function MatButtonToggle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MatButtonToggle_Template_button_click_0_listener() { return ctx._onButtonClick(); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "div", 3);
        ɵngcc0.ɵɵelement(5, "div", 4);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵproperty("id", ctx.buttonId)("disabled", ctx.disabled || null);
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    } }, directives: [ɵngcc2.MatRipple], styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatButtonToggle, [{
        type: Component,
        args: [{
                selector: 'mat-button-toggle',
                template: "<button #button class=\"mat-button-toggle-button\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <div class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </div>\n</button>\n\n<div class=\"mat-button-toggle-focus-overlay\"></div>\n<div class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matButtonToggle',
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['disableRipple'],
                host: {
                    '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                    '[class.mat-button-toggle-checked]': 'checked',
                    '[class.mat-button-toggle-disabled]': 'disabled',
                    '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                    'class': 'mat-button-toggle',
                    // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
                    // but can still receive focus from things like cdkFocusInitial.
                    '[attr.tabindex]': '-1',
                    '[attr.id]': 'id',
                    '[attr.name]': 'null',
                    '(focus)': 'focus()'
                },
                styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
            }]
    }], function () { return [{ type: MatButtonToggleGroup, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { appearance: [{
            type: Input
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], id: [{
            type: Input
        }], name: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }], _buttonElement: [{
            type: ViewChild,
            args: ['button']
        }], value: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();
    return MatButtonToggle;
}(_MatButtonToggleMixinBase));
export { MatButtonToggle };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBRUwsa0JBQWtCLEdBRW5CLE1BQU0sd0JBQXdCLENBQUM7QUFpQmhDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7QUFDSCxNQUFNLENBQUMsSUFBTSxpQ0FBaUMsR0FDMUMsSUFBSSxjQUFjLENBQWdDLG1DQUFtQyxDQUFDLENBQUM7QUFJM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxDQUFDLElBQU0sc0NBQXNDLEdBQVE7QUFDM0QsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7QUFDckQsSUFBRSxLQUFLLEVBQUUsSUFB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LHpCQXNFckMsMkJBa0JDLEtBQUs7VUF2Rk4sUUFBUSxFQUFFLHBCQXdGVix5QkFPQyxNQUFNO0VBL0ZvQixGQStGaEI7aUJBOUZYLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLHNCQUMvQyxNQUFNLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQ3pCLElBQUksRUFBRSwwQkFDSixzQ0FBc0MsRUFBRSxvQkFBb0IsMEJBQzVELG1DQUFtQyxFQUFFLFNBQVMsMEJBQzlDLG9DQUFvQyxFQUFFLFVBQVU7Q0FDaEQsK0NBQStDLEVBQUUsMkJBQTJCLDBCQUM1RSxPQUFPLEVBQUUsbUJBQW1CLDBCQUM1Qjs7O1NBQXVGO2tCQUN2RixnRUFBZ0U7Y0FDaEUsaUJBQWlCLEVBQUUsSUFBSSwwQkFDdkIsV0FBVyxFQUFFLElBQUksMEJBQ2pCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixTQUFTLEVBQUUsU0FBUyx1QkFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozh4QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQStFa0I7QUFBQyxJQW9GcEIsc0JBQUM7QUFDQSxDQURBLEFBeExELENBc0JxQyx5QkFBeUIsR0FrSzdEO0FBQ0QsU0FuS2EsZUFBZTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIENhbkRpc2FibGVSaXBwbGVDdG9yLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuXG4vKiogQWNjZXB0YWJsZSB0eXBlcyBmb3IgYSBidXR0b24gdG9nZ2xlLiAqL1xuZXhwb3J0IHR5cGUgVG9nZ2xlVHlwZSA9ICdjaGVja2JveCcgfCAncmFkaW8nO1xuXG4vKiogUG9zc2libGUgYXBwZWFyYW5jZSBzdHlsZXMgZm9yIHRoZSBidXR0b24gdG9nZ2xlLiAqL1xuZXhwb3J0IHR5cGUgTWF0QnV0dG9uVG9nZ2xlQXBwZWFyYW5jZSA9ICdsZWdhY3knIHwgJ3N0YW5kYXJkJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBidXR0b24gdG9nZ2xlIHRoYXQgY2FuIGJlIGNvbmZpZ3VyZWRcbiAqIHVzaW5nIHRoZSBgTUFUX0JVVFRPTl9UT0dHTEVfREVGQVVMVF9PUFRJT05TYCBpbmplY3Rpb24gdG9rZW4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWF0QnV0dG9uVG9nZ2xlRGVmYXVsdE9wdGlvbnMge1xuICBhcHBlYXJhbmNlPzogTWF0QnV0dG9uVG9nZ2xlQXBwZWFyYW5jZTtcbn1cblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlXG4gKiBkZWZhdWx0IG9wdGlvbnMgZm9yIGFsbCBidXR0b24gdG9nZ2xlcyB3aXRoaW4gYW4gYXBwLlxuICovXG5leHBvcnQgY29uc3QgTUFUX0JVVFRPTl9UT0dHTEVfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0QnV0dG9uVG9nZ2xlRGVmYXVsdE9wdGlvbnM+KCdNQVRfQlVUVE9OX1RPR0dMRV9ERUZBVUxUX09QVElPTlMnKTtcblxuXG5cbi8qKlxuICogUHJvdmlkZXIgRXhwcmVzc2lvbiB0aGF0IGFsbG93cyBtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB0byByZWdpc3RlciBhcyBhIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9CVVRUT05fVE9HR0xFX0dST1VQX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRCdXR0b25Ub2dnbGVHcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0QnV0dG9uVG9nZ2xlR3JvdXBgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRCdXR0b25Ub2dnbGVHcm91cE11bHRpcGxlIHt9XG5cbmxldCBfdW5pcXVlSWRDb3VudGVyID0gMDtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBNYXRCdXR0b25Ub2dnbGUuICovXG5leHBvcnQgY2xhc3MgTWF0QnV0dG9uVG9nZ2xlQ2hhbmdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIFRoZSBNYXRCdXR0b25Ub2dnbGUgdGhhdCBlbWl0cyB0aGUgZXZlbnQuICovXG4gICAgcHVibGljIHNvdXJjZTogTWF0QnV0dG9uVG9nZ2xlLFxuXG4gICAgLyoqIFRoZSB2YWx1ZSBhc3NpZ25lZCB0byB0aGUgTWF0QnV0dG9uVG9nZ2xlLiAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55KSB7fVxufVxuXG4vKiogRXhjbHVzaXZlIHNlbGVjdGlvbiBidXR0b24gdG9nZ2xlIGdyb3VwIHRoYXQgYmVoYXZlcyBsaWtlIGEgcmFkaW8tYnV0dG9uIGdyb3VwLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAnLFxuICBwcm92aWRlcnM6IFtcbiAgICBNQVRfQlVUVE9OX1RPR0dMRV9HUk9VUF9WQUxVRV9BQ0NFU1NPUixcbiAgICB7cHJvdmlkZTogTWF0QnV0dG9uVG9nZ2xlR3JvdXBNdWx0aXBsZSwgdXNlRXhpc3Rpbmc6IE1hdEJ1dHRvblRvZ2dsZUdyb3VwfSxcbiAgXSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2dyb3VwJyxcbiAgICAnY2xhc3MnOiAnbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICAgICdbY2xhc3MubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZF0nOiAnYXBwZWFyYW5jZSA9PT0gXCJzdGFuZGFyZFwiJyxcbiAgfSxcbiAgZXhwb3J0QXM6ICdtYXRCdXR0b25Ub2dnbGVHcm91cCcsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJ1dHRvblRvZ2dsZUdyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG4gIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbDxNYXRCdXR0b25Ub2dnbGU+O1xuXG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHJhdyB2YWx1ZSB0aGF0IHRoZSBjb25zdW1lciB0cmllZCB0byBhc3NpZ24uIFRoZSByZWFsXG4gICAqIHZhbHVlIHdpbGwgZXhjbHVkZSBhbnkgdmFsdWVzIGZyb20gdGhpcyBvbmUgdGhhdCBkb24ndCBjb3JyZXNwb25kIHRvIGFcbiAgICogdG9nZ2xlLiBVc2VmdWwgZm9yIHRoZSBjYXNlcyB3aGVyZSB0aGUgdmFsdWUgaXMgYXNzaWduZWQgYmVmb3JlIHRoZSB0b2dnbGVzXG4gICAqIGhhdmUgYmVlbiBpbml0aWFsaXplZCBvciBhdCB0aGUgc2FtZSB0aGF0IHRoZXkncmUgYmVpbmcgc3dhcHBlZCBvdXQuXG4gICAqL1xuICBwcml2YXRlIF9yYXdWYWx1ZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbC5cbiAgICogTm93IGBuZ01vZGVsYCBiaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gbXVsdGlwbGUgc2VsZWN0aW9uIG1vZGUuXG4gICAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS4gKi9cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgLyoqIENoaWxkIGJ1dHRvbiB0b2dnbGUgYnV0dG9ucy4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IE1hdEJ1dHRvblRvZ2dsZSksIHtcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyB3b3VsZCB0ZWNobmljYWxseSBwaWNrIHVwIHRvZ2dsZXNcbiAgICAvLyBmcm9tIG5lc3RlZCBncm91cHMsIGJ1dCB0aGF0J3Mgbm90IGEgY2FzZSB0aGF0IHdlIHN1cHBvcnQuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSkgX2J1dHRvblRvZ2dsZXM6IFF1ZXJ5TGlzdDxNYXRCdXR0b25Ub2dnbGU+O1xuXG4gIC8qKiBUaGUgYXBwZWFyYW5jZSBmb3IgYWxsIHRoZSBidXR0b25zIGluIHRoZSBncm91cC4gKi9cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTWF0QnV0dG9uVG9nZ2xlQXBwZWFyYW5jZTtcblxuICAvKiogYG5hbWVgIGF0dHJpYnV0ZSBmb3IgdGhlIHVuZGVybHlpbmcgYGlucHV0YCBlbGVtZW50LiAqL1xuICBASW5wdXQoKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2J1dHRvblRvZ2dsZXMpIHtcbiAgICAgIHRoaXMuX2J1dHRvblRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgICAgIHRvZ2dsZS5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbmFtZSA9IGBtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC0ke191bmlxdWVJZENvdW50ZXIrK31gO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgZ3JvdXAgaXMgdmVydGljYWwuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsOyB9XG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgdG9nZ2xlIGdyb3VwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQgOiBbXTtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQubWFwKHRvZ2dsZSA9PiB0b2dnbGUudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFswXSA/IHNlbGVjdGVkWzBdLnZhbHVlIDogdW5kZWZpbmVkO1xuICB9XG4gIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0aW9uQnlWYWx1ZShuZXdWYWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIHZhbHVlIG9mIHRoZSBncm91cCBjaGFuZ2VzLlxuICAgKiBVc2VkIHRvIGZhY2lsaXRhdGUgdHdvLXdheSBkYXRhIGJpbmRpbmcuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKiBTZWxlY3RlZCBidXR0b24gdG9nZ2xlcyBpbiB0aGUgZ3JvdXAuICovXG4gIGdldCBzZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsID8gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQgOiBbXTtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHNlbGVjdGVkIDogKHNlbGVjdGVkWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgbXVsdGlwbGUgYnV0dG9uIHRvZ2dsZXMgY2FuIGJlIHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9tdWx0aXBsZTsgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciBtdWx0aXBsZSBidXR0b24gdG9nZ2xlIGdyb3VwIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5fYnV0dG9uVG9nZ2xlcykge1xuICAgICAgdGhpcy5fYnV0dG9uVG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuX21hcmtGb3JDaGVjaygpKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBncm91cCdzIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXRCdXR0b25Ub2dnbGVDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8TWF0QnV0dG9uVG9nZ2xlQ2hhbmdlPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9CVVRUT05fVE9HR0xFX0RFRkFVTFRfT1BUSU9OUylcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM/OiBNYXRCdXR0b25Ub2dnbGVEZWZhdWx0T3B0aW9ucykge1xuXG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPVxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zICYmIGRlZmF1bHRPcHRpb25zLmFwcGVhcmFuY2UgPyBkZWZhdWx0T3B0aW9ucy5hcHBlYXJhbmNlIDogJ3N0YW5kYXJkJztcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWw8TWF0QnV0dG9uVG9nZ2xlPih0aGlzLm11bHRpcGxlLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoLi4udGhpcy5fYnV0dG9uVG9nZ2xlcy5maWx0ZXIodG9nZ2xlID0+IHRvZ2dsZS5jaGVja2VkKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbW9kZWwgdmFsdWUuIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBiZSBzZXQgdG8gdGhlIG1vZGVsLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBEaXNwYXRjaCBjaGFuZ2UgZXZlbnQgd2l0aCBjdXJyZW50IHNlbGVjdGlvbiBhbmQgZ3JvdXAgdmFsdWUuICovXG4gIF9lbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgIGNvbnN0IHNvdXJjZSA9IEFycmF5LmlzQXJyYXkoc2VsZWN0ZWQpID8gc2VsZWN0ZWRbc2VsZWN0ZWQubGVuZ3RoIC0gMV0gOiBzZWxlY3RlZDtcbiAgICBjb25zdCBldmVudCA9IG5ldyBNYXRCdXR0b25Ub2dnbGVDaGFuZ2Uoc291cmNlISwgdGhpcy52YWx1ZSk7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbihldmVudC52YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogU3luY3MgYSBidXR0b24gdG9nZ2xlJ3Mgc2VsZWN0ZWQgc3RhdGUgd2l0aCB0aGUgbW9kZWwgdmFsdWUuXG4gICAqIEBwYXJhbSB0b2dnbGUgVG9nZ2xlIHRvIGJlIHN5bmNlZC5cbiAgICogQHBhcmFtIHNlbGVjdCBXaGV0aGVyIHRoZSB0b2dnbGUgc2hvdWxkIGJlIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0gaXNVc2VySW5wdXQgV2hldGhlciB0aGUgY2hhbmdlIHdhcyBhIHJlc3VsdCBvZiBhIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAqIEBwYXJhbSBkZWZlckV2ZW50cyBXaGV0aGVyIHRvIGRlZmVyIGVtaXR0aW5nIHRoZSBjaGFuZ2UgZXZlbnRzLlxuICAgKi9cbiAgX3N5bmNCdXR0b25Ub2dnbGUodG9nZ2xlOiBNYXRCdXR0b25Ub2dnbGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgaXNVc2VySW5wdXQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJFdmVudHMgPSBmYWxzZSkge1xuICAgIC8vIERlc2VsZWN0IHRoZSBjdXJyZW50bHktc2VsZWN0ZWQgdG9nZ2xlLCBpZiB3ZSdyZSBpbiBzaW5nbGUtc2VsZWN0aW9uXG4gICAgLy8gbW9kZSBhbmQgdGhlIGJ1dHRvbiBiZWluZyB0b2dnbGVkIGlzbid0IHNlbGVjdGVkIGF0IHRoZSBtb21lbnQuXG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWQgJiYgIXRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAodGhpcy5zZWxlY3RlZCBhcyBNYXRCdXR0b25Ub2dnbGUpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHRvZ2dsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5kZXNlbGVjdCh0b2dnbGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWZlckV2ZW50cyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byBkZWZlciBpbiBzb21lIGNhc2VzIGluIG9yZGVyIHRvIGF2b2lkIFwiY2hhbmdlZCBhZnRlciBjaGVja2VkIGVycm9yc1wiLCBob3dldmVyXG4gICAgLy8gdGhlIHNpZGUtZWZmZWN0IGlzIHRoYXQgd2UgbWF5IGVuZCB1cCB1cGRhdGluZyB0aGUgbW9kZWwgdmFsdWUgb3V0IG9mIHNlcXVlbmNlIGluIG90aGVyc1xuICAgIC8vIFRoZSBgZGVmZXJFdmVudHNgIGZsYWcgYWxsb3dzIHVzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGRvIGl0IG9uIGEgY2FzZS1ieS1jYXNlIGJhc2lzLlxuICAgIGlmIChkZWZlckV2ZW50cykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCgpID0+IHRoaXMuX3VwZGF0ZU1vZGVsVmFsdWUoaXNVc2VySW5wdXQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlTW9kZWxWYWx1ZShpc1VzZXJJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIGEgYnV0dG9uIHRvZ2dsZSBpcyBzZWxlY3RlZC4gKi9cbiAgX2lzU2VsZWN0ZWQodG9nZ2xlOiBNYXRCdXR0b25Ub2dnbGUpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWwgJiYgdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNTZWxlY3RlZCh0b2dnbGUpO1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgd2hldGhlciBhIGJ1dHRvbiB0b2dnbGUgc2hvdWxkIGJlIGNoZWNrZWQgb24gaW5pdC4gKi9cbiAgX2lzUHJlY2hlY2tlZCh0b2dnbGU6IE1hdEJ1dHRvblRvZ2dsZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcmF3VmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl9yYXdWYWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXdWYWx1ZS5zb21lKHZhbHVlID0+IHRvZ2dsZS52YWx1ZSAhPSBudWxsICYmIHZhbHVlID09PSB0b2dnbGUudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0b2dnbGUudmFsdWUgPT09IHRoaXMuX3Jhd1ZhbHVlO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgdG9nZ2xlcyBpbiB0aGUgZ3JvdXAgYmFzZWQgb24gYSB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfc2V0U2VsZWN0aW9uQnlWYWx1ZSh2YWx1ZTogYW55fGFueVtdKSB7XG4gICAgdGhpcy5fcmF3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICghdGhpcy5fYnV0dG9uVG9nZ2xlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHZhbHVlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdWYWx1ZSBtdXN0IGJlIGFuIGFycmF5IGluIG11bHRpcGxlLXNlbGVjdGlvbiBtb2RlLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdmFsdWUuZm9yRWFjaCgoY3VycmVudFZhbHVlOiBhbnkpID0+IHRoaXMuX3NlbGVjdFZhbHVlKGN1cnJlbnRWYWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5fc2VsZWN0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhcnMgdGhlIHNlbGVjdGVkIHRvZ2dsZXMuICovXG4gIHByaXZhdGUgX2NsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgdGhpcy5fYnV0dG9uVG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGEgdmFsdWUgaWYgdGhlcmUncyBhIHRvZ2dsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0LiAqL1xuICBwcml2YXRlIF9zZWxlY3RWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgY29ycmVzcG9uZGluZ09wdGlvbiA9IHRoaXMuX2J1dHRvblRvZ2dsZXMuZmluZCh0b2dnbGUgPT4ge1xuICAgICAgcmV0dXJuIHRvZ2dsZS52YWx1ZSAhPSBudWxsICYmIHRvZ2dsZS52YWx1ZSA9PT0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAoY29ycmVzcG9uZGluZ09wdGlvbikge1xuICAgICAgY29ycmVzcG9uZGluZ09wdGlvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChjb3JyZXNwb25kaW5nT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKiogU3luY3MgdXAgdGhlIGdyb3VwJ3MgdmFsdWUgd2l0aCB0aGUgbW9kZWwgYW5kIGVtaXRzIHRoZSBjaGFuZ2UgZXZlbnQuICovXG4gIHByaXZhdGUgX3VwZGF0ZU1vZGVsVmFsdWUoaXNVc2VySW5wdXQ6IGJvb2xlYW4pIHtcbiAgICAvLyBPbmx5IGVtaXQgdGhlIGNoYW5nZSBldmVudCBmb3IgdXNlciBpbnB1dC5cbiAgICBpZiAoaXNVc2VySW5wdXQpIHtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgIH1cblxuICAgIC8vIE5vdGU6IHdlIGVtaXQgdGhpcyBvbmUgbm8gbWF0dGVyIHdoZXRoZXIgaXQgd2FzIGEgdXNlciBpbnRlcmFjdGlvbiwgYmVjYXVzZVxuICAgIC8vIGl0IGlzIHVzZWQgYnkgQW5ndWxhciB0byBzeW5jIHVwIHRoZSB0d28td2F5IGRhdGEgYmluZGluZy5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX211bHRpcGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIHRoZSBNYXRCdXR0b25Ub2dnbGUgY2xhc3MuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0QnV0dG9uVG9nZ2xlQmFzZSB7fVxuY29uc3QgX01hdEJ1dHRvblRvZ2dsZU1peGluQmFzZTogQ2FuRGlzYWJsZVJpcHBsZUN0b3IgJiB0eXBlb2YgTWF0QnV0dG9uVG9nZ2xlQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlUmlwcGxlKE1hdEJ1dHRvblRvZ2dsZUJhc2UpO1xuXG4vKiogU2luZ2xlIGJ1dHRvbiBpbnNpZGUgb2YgYSB0b2dnbGUgZ3JvdXAuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtYnV0dG9uLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWF0QnV0dG9uVG9nZ2xlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWydkaXNhYmxlUmlwcGxlJ10sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmVdJzogJyFidXR0b25Ub2dnbGVHcm91cCcsXG4gICAgJ1tjbGFzcy5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkXSc6ICdjaGVja2VkJyxcbiAgICAnW2NsYXNzLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkXSc6ICdhcHBlYXJhbmNlID09PSBcInN0YW5kYXJkXCInLFxuICAgICdjbGFzcyc6ICdtYXQtYnV0dG9uLXRvZ2dsZScsXG4gICAgLy8gQWx3YXlzIHJlc2V0IHRoZSB0YWJpbmRleCB0byAtMSBzbyBpdCBkb2Vzbid0IGNvbmZsaWN0IHdpdGggdGhlIG9uZSBvbiB0aGUgYGJ1dHRvbmAsXG4gICAgLy8gYnV0IGNhbiBzdGlsbCByZWNlaXZlIGZvY3VzIGZyb20gdGhpbmdzIGxpa2UgY2RrRm9jdXNJbml0aWFsLlxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnLTEnLFxuICAgICdbYXR0ci5pZF0nOiAnaWQnLFxuICAgICdbYXR0ci5uYW1lXSc6ICdudWxsJyxcbiAgICAnKGZvY3VzKSc6ICdmb2N1cygpJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRCdXR0b25Ub2dnbGUgZXh0ZW5kcyBfTWF0QnV0dG9uVG9nZ2xlTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LFxuICBDYW5EaXNhYmxlUmlwcGxlLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2lzU2luZ2xlU2VsZWN0b3IgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlZCB0byB0aGUgYXJpYS1sYWJlbCBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgZWxlbWVudC4gSW4gbW9zdCBjYXNlcywgYXJpYS1sYWJlbGxlZGJ5IHdpbGxcbiAgICogdGFrZSBwcmVjZWRlbmNlIHNvIHRoaXMgbWF5IGJlIG9taXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogVXNlcnMgY2FuIHNwZWNpZnkgdGhlIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZSB3aGljaCB3aWxsIGJlIGZvcndhcmRlZCB0byB0aGUgaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFR5cGUgb2YgdGhlIGJ1dHRvbiB0b2dnbGUuIEVpdGhlciAncmFkaW8nIG9yICdjaGVja2JveCcuICovXG4gIF90eXBlOiBUb2dnbGVUeXBlO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicpIF9idXR0b25FbGVtZW50OiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcblxuICAvKiogVGhlIHBhcmVudCBidXR0b24gdG9nZ2xlIGdyb3VwIChleGNsdXNpdmUgc2VsZWN0aW9uKS4gT3B0aW9uYWwuICovXG4gIGJ1dHRvblRvZ2dsZUdyb3VwOiBNYXRCdXR0b25Ub2dnbGVHcm91cDtcblxuICAvKiogVW5pcXVlIElEIGZvciB0aGUgdW5kZXJseWluZyBgYnV0dG9uYCBlbGVtZW50LiAqL1xuICBnZXQgYnV0dG9uSWQoKTogc3RyaW5nIHsgcmV0dXJuIGAke3RoaXMuaWR9LWJ1dHRvbmA7IH1cblxuICAvKiogVGhlIHVuaXF1ZSBJRCBmb3IgdGhpcyBidXR0b24gdG9nZ2xlLiAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuXG4gIC8qKiBIVE1MJ3MgJ25hbWUnIGF0dHJpYnV0ZSB1c2VkIHRvIGdyb3VwIHJhZGlvcyBmb3IgdW5pcXVlIHNlbGVjdGlvbi4gKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBNYXRCdXR0b25Ub2dnbGVHcm91cCByZWFkcyB0aGlzIHRvIGFzc2lnbiBpdHMgb3duIHZhbHVlLiAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIC8qKiBUYWJpbmRleCBmb3IgdGhlIHRvZ2dsZS4gKi9cbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqIFRoZSBhcHBlYXJhbmNlIHN0eWxlIG9mIHRoZSBidXR0b24uICovXG4gIEBJbnB1dCgpXG4gIGdldCBhcHBlYXJhbmNlKCk6IE1hdEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2Uge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwID8gdGhpcy5idXR0b25Ub2dnbGVHcm91cC5hcHBlYXJhbmNlIDogdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBzZXQgYXBwZWFyYW5jZSh2YWx1ZTogTWF0QnV0dG9uVG9nZ2xlQXBwZWFyYW5jZSkge1xuICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBNYXRCdXR0b25Ub2dnbGVBcHBlYXJhbmNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBidXR0b24gaXMgY2hlY2tlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uVG9nZ2xlR3JvdXAgPyB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwLl9pc1NlbGVjdGVkKHRoaXMpIDogdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5idXR0b25Ub2dnbGVHcm91cCkge1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwLl9zeW5jQnV0dG9uVG9nZ2xlKHRoaXMsIHRoaXMuX2NoZWNrZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8ICh0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwICYmIHRoaXMuYnV0dG9uVG9nZ2xlR3JvdXAuZGlzYWJsZWQpO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBncm91cCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8TWF0QnV0dG9uVG9nZ2xlQ2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPE1hdEJ1dHRvblRvZ2dsZUNoYW5nZT4oKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSB0b2dnbGVHcm91cDogTWF0QnV0dG9uVG9nZ2xlR3JvdXAsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgICAgICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIGBkZWZhdWx0VGFiSW5kZXhgIHRvIGJlIG1hZGUgYSByZXF1aXJlZCBwYXJhbWV0ZXIuXG4gICAgICAgICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgZGVmYXVsdFRhYkluZGV4OiBzdHJpbmcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0JVVFRPTl9UT0dHTEVfREVGQVVMVF9PUFRJT05TKVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM/OiBNYXRCdXR0b25Ub2dnbGVEZWZhdWx0T3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBwYXJzZWRUYWJJbmRleCA9IE51bWJlcihkZWZhdWx0VGFiSW5kZXgpO1xuICAgIHRoaXMudGFiSW5kZXggPSAocGFyc2VkVGFiSW5kZXggfHwgcGFyc2VkVGFiSW5kZXggPT09IDApID8gcGFyc2VkVGFiSW5kZXggOiBudWxsO1xuICAgIHRoaXMuYnV0dG9uVG9nZ2xlR3JvdXAgPSB0b2dnbGVHcm91cDtcbiAgICB0aGlzLmFwcGVhcmFuY2UgPVxuICAgICAgICBkZWZhdWx0T3B0aW9ucyAmJiBkZWZhdWx0T3B0aW9ucy5hcHBlYXJhbmNlID8gZGVmYXVsdE9wdGlvbnMuYXBwZWFyYW5jZSA6ICdzdGFuZGFyZCc7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pc1NpbmdsZVNlbGVjdG9yID0gdGhpcy5idXR0b25Ub2dnbGVHcm91cCAmJiAhdGhpcy5idXR0b25Ub2dnbGVHcm91cC5tdWx0aXBsZTtcbiAgICB0aGlzLl90eXBlID0gdGhpcy5faXNTaW5nbGVTZWxlY3RvciA/ICdyYWRpbycgOiAnY2hlY2tib3gnO1xuICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IGBtYXQtYnV0dG9uLXRvZ2dsZS0ke191bmlxdWVJZENvdW50ZXIrK31gO1xuXG4gICAgaWYgKHRoaXMuX2lzU2luZ2xlU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMuYnV0dG9uVG9nZ2xlR3JvdXAubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5idXR0b25Ub2dnbGVHcm91cCAmJiB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwLl9pc1ByZWNoZWNrZWQodGhpcykpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5fZWxlbWVudFJlZiwgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuYnV0dG9uVG9nZ2xlR3JvdXA7XG5cbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG5cbiAgICAvLyBSZW1vdmUgdGhlIHRvZ2dsZSBmcm9tIHRoZSBzZWxlY3Rpb24gb25jZSBpdCdzIGRlc3Ryb3llZC4gTmVlZHMgdG8gaGFwcGVuXG4gICAgLy8gb24gdGhlIG5leHQgdGljayBpbiBvcmRlciB0byBhdm9pZCBcImNoYW5nZWQgYWZ0ZXIgY2hlY2tlZFwiIGVycm9ycy5cbiAgICBpZiAoZ3JvdXAgJiYgZ3JvdXAuX2lzU2VsZWN0ZWQodGhpcykpIHtcbiAgICAgIGdyb3VwLl9zeW5jQnV0dG9uVG9nZ2xlKHRoaXMsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGJ1dHRvbi4gKi9cbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cyhvcHRpb25zKTtcbiAgfVxuXG4gIC8qKiBDaGVja3MgdGhlIGJ1dHRvbiB0b2dnbGUgZHVlIHRvIGFuIGludGVyYWN0aW9uIHdpdGggdGhlIHVuZGVybHlpbmcgbmF0aXZlIGJ1dHRvbi4gKi9cbiAgX29uQnV0dG9uQ2xpY2soKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZCA9IHRoaXMuX2lzU2luZ2xlU2VsZWN0b3IgPyB0cnVlIDogIXRoaXMuX2NoZWNrZWQ7XG5cbiAgICBpZiAobmV3Q2hlY2tlZCAhPT0gdGhpcy5fY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWQ7XG4gICAgICBpZiAodGhpcy5idXR0b25Ub2dnbGVHcm91cCkge1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwLl9zeW5jQnV0dG9uVG9nZ2xlKHRoaXMsIHRoaXMuX2NoZWNrZWQsIHRydWUpO1xuICAgICAgICB0aGlzLmJ1dHRvblRvZ2dsZUdyb3VwLl9vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW1pdCBhIGNoYW5nZSBldmVudCB3aGVuIGl0J3MgdGhlIHNpbmdsZSBzZWxlY3RvclxuICAgIHRoaXMuY2hhbmdlLmVtaXQobmV3IE1hdEJ1dHRvblRvZ2dsZUNoYW5nZSh0aGlzLCB0aGlzLnZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgdGhlIGJ1dHRvbiB0b2dnbGUgYXMgbmVlZGluZyBjaGVja2luZyBmb3IgY2hhbmdlIGRldGVjdGlvbi5cbiAgICogVGhpcyBtZXRob2QgaXMgZXhwb3NlZCBiZWNhdXNlIHRoZSBwYXJlbnQgYnV0dG9uIHRvZ2dsZSBncm91cCB3aWxsIGRpcmVjdGx5XG4gICAqIHVwZGF0ZSBib3VuZCBwcm9wZXJ0aWVzIG9mIHRoZSByYWRpbyBidXR0b24uXG4gICAqL1xuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIC8vIFdoZW4gdGhlIGdyb3VwIHZhbHVlIGNoYW5nZXMsIHRoZSBidXR0b24gd2lsbCBub3QgYmUgbm90aWZpZWQuXG4gICAgLy8gVXNlIGBtYXJrRm9yQ2hlY2tgIHRvIGV4cGxpY2l0IHVwZGF0ZSBidXR0b24gdG9nZ2xlJ3Mgc3RhdHVzLlxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGlwbGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVSaXBwbGU6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==