/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, QueryList, TemplateRef } from '@angular/core';
import { CanDisableRipple, CanDisableRippleCtor, MatOptgroup, MatOption } from '@angular/material/core';
/** Event object that is emitted when an autocomplete option is selected. */
import * as ɵngcc0 from '@angular/core';
export declare class MatAutocompleteSelectedEvent {
    /** Reference to the autocomplete panel that emitted the event. */
    source: MatAutocomplete;
    /** Option that was selected. */
    option: MatOption;
    constructor(
    /** Reference to the autocomplete panel that emitted the event. */
    source: MatAutocomplete, 
    /** Option that was selected. */
    option: MatOption);
}
/** @docs-private */
declare class MatAutocompleteBase {
}
declare const _MatAutocompleteMixinBase: CanDisableRippleCtor & typeof MatAutocompleteBase;
/** Default `mat-autocomplete` options that can be overridden. */
export interface MatAutocompleteDefaultOptions {
    /** Whether the first option should be highlighted when an autocomplete panel is opened. */
    autoActiveFirstOption?: boolean;
}
/** Injection token to be used to override the default options for `mat-autocomplete`. */
export declare const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS: InjectionToken<MatAutocompleteDefaultOptions>;
/** @docs-private */
export declare function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY(): MatAutocompleteDefaultOptions;
export declare class MatAutocomplete extends _MatAutocompleteMixinBase implements AfterContentInit, CanDisableRipple {
    private _changeDetectorRef;
    private _elementRef;
    /** Manages active item in option list based on key events. */
    _keyManager: ActiveDescendantKeyManager<MatOption>;
    /** Whether the autocomplete panel should be visible, depending on option length. */
    showPanel: boolean;
    /** Whether the autocomplete panel is open. */
    get isOpen(): boolean;
    _isOpen: boolean;
    /** @docs-private */
    template: TemplateRef<any>;
    /** Element for the panel containing the autocomplete options. */
    panel: ElementRef;
    /** @docs-private */
    options: QueryList<MatOption>;
    /** @docs-private */
    optionGroups: QueryList<MatOptgroup>;
    /** Function that maps an option's control value to its display value in the trigger. */
    displayWith: ((value: any) => string) | null;
    /**
     * Whether the first option should be highlighted when the autocomplete panel is opened.
     * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
     */
    get autoActiveFirstOption(): boolean;
    set autoActiveFirstOption(value: boolean);
    private _autoActiveFirstOption;
    /**
     * Specify the width of the autocomplete panel.  Can be any CSS sizing value, otherwise it will
     * match the width of its host.
     */
    panelWidth: string | number;
    /** Event that is emitted whenever an option from the list is selected. */
    readonly optionSelected: EventEmitter<MatAutocompleteSelectedEvent>;
    /** Event that is emitted when the autocomplete panel is opened. */
    readonly opened: EventEmitter<void>;
    /** Event that is emitted when the autocomplete panel is closed. */
    readonly closed: EventEmitter<void>;
    /**
     * Takes classes set on the host mat-autocomplete element and applies them to the panel
     * inside the overlay container to allow for easy styling.
     */
    set classList(value: string);
    _classList: {
        [key: string]: boolean;
    };
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
    id: string;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef<HTMLElement>, defaults: MatAutocompleteDefaultOptions);
    ngAfterContentInit(): void;
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    _setScrollTop(scrollTop: number): void;
    /** Returns the panel's scrollTop. */
    _getScrollTop(): number;
    /** Panel should hide itself when the option list is empty. */
    _setVisibility(): void;
    /** Emits the `select` event. */
    _emitSelectEvent(option: MatOption): void;
    /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
    private _setVisibilityClasses;
    static ngAcceptInputType_autoActiveFirstOption: BooleanInput;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatAutocomplete, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatAutocomplete, "mat-autocomplete", ["matAutocomplete"], { "disableRipple": "disableRipple"; "displayWith": "displayWith"; "autoActiveFirstOption": "autoActiveFirstOption"; "classList": "class"; "panelWidth": "panelWidth"; }, { "optionSelected": "optionSelected"; "opened": "opened"; "closed": "closed"; }, ["options", "optionGroups"], ["*"]>;
}
export {};

//# sourceMappingURL=autocomplete.d.ts.map