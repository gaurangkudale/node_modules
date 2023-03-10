/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CanColor, CanColorCtor, CanDisable, CanDisableCtor, CanDisableRipple, CanDisableRippleCtor, HasTabIndex, HasTabIndexCtor } from '@angular/material/core';
import { MatSlideToggleDefaultOptions } from './slide-toggle-config';
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
export declare const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR: any;
/** Change event object emitted by a MatSlideToggle. */
export declare class MatSlideToggleChange {
    /** The source MatSlideToggle of the event. */
    source: MatSlideToggle;
    /** The new `checked` value of the MatSlideToggle. */
    checked: boolean;
    constructor(
    /** The source MatSlideToggle of the event. */
    source: MatSlideToggle, 
    /** The new `checked` value of the MatSlideToggle. */
    checked: boolean);
}
/** @docs-private */
declare class MatSlideToggleBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const _MatSlideToggleMixinBase: HasTabIndexCtor & CanColorCtor & CanDisableRippleCtor & CanDisableCtor & typeof MatSlideToggleBase;
/** Represents a slidable "switch" toggle that can be moved between on and off. */
export declare class MatSlideToggle extends _MatSlideToggleMixinBase implements OnDestroy, AfterContentInit, ControlValueAccessor, CanDisable, CanColor, HasTabIndex, CanDisableRipple {
    private _focusMonitor;
    private _changeDetectorRef;
    defaults: MatSlideToggleDefaultOptions;
    _animationMode?: string | undefined;
    private _onChange;
    private _onTouched;
    private _uniqueId;
    private _required;
    private _checked;
    /** Reference to the thumb HTMLElement. */
    _thumbEl: ElementRef;
    /** Reference to the thumb bar HTMLElement. */
    _thumbBarEl: ElementRef;
    /** Name value will be applied to the input element if present. */
    name: string | null;
    /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
    id: string;
    /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
    labelPosition: 'before' | 'after';
    /** Used to set the aria-label attribute on the underlying input element. */
    ariaLabel: string | null;
    /** Used to set the aria-labelledby attribute on the underlying input element. */
    ariaLabelledby: string | null;
    /** Whether the slide-toggle is required. */
    get required(): boolean;
    set required(value: boolean);
    /** Whether the slide-toggle element is checked or not. */
    get checked(): boolean;
    set checked(value: boolean);
    /** An event will be dispatched each time the slide-toggle changes its value. */
    readonly change: EventEmitter<MatSlideToggleChange>;
    /**
     * An event will be dispatched each time the slide-toggle input is toggled.
     * This event is always emitted when the user toggles the slide toggle, but this does not mean
     * the slide toggle's value has changed.
     */
    readonly toggleChange: EventEmitter<void>;
    /**
     * An event will be dispatched each time the slide-toggle is dragged.
     * This event is always emitted when the user drags the slide toggle to make a change greater
     * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
     * the user toggles the slide toggle to change its value.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 10.0.0
     */
    readonly dragChange: EventEmitter<void>;
    /** Returns the unique id for the visual hidden input. */
    get inputId(): string;
    /** Reference to the underlying input element. */
    _inputElement: ElementRef<HTMLInputElement>;
    constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef, tabIndex: string, 
    /**
     * @deprecated `_ngZone` and `_dir` parameters to be removed.
     * @breaking-change 10.0.0
     */
    _ngZone: NgZone, defaults: MatSlideToggleDefaultOptions, _animationMode?: string | undefined, _dir?: Directionality);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /** Method being called whenever the underlying input emits a change event. */
    _onChangeEvent(event: Event): void;
    /** Method being called whenever the slide-toggle has been clicked. */
    _onInputClick(event: Event): void;
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value: any): void;
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn: any): void;
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn: any): void;
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled: boolean): void;
    /** Focuses the slide-toggle. */
    focus(options?: FocusOptions): void;
    /** Toggles the checked state of the slide-toggle. */
    toggle(): void;
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    private _emitChangeEvent;
    /** Method being called whenever the label text changes. */
    _onLabelTextChange(): void;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_checked: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatSlideToggle, [null, null, null, { attribute: "tabindex"; }, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatSlideToggle, "mat-slide-toggle", ["matSlideToggle"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; "name": "name"; "id": "id"; "labelPosition": "labelPosition"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "required": "required"; "checked": "checked"; }, { "change": "change"; "toggleChange": "toggleChange"; "dragChange": "dragChange"; }, never, ["*"]>;
}
export {};

//# sourceMappingURL=slide-toggle.d.ts.map