/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MatSelectSearchComponent_1;
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, Input, OnDestroy, OnInit, Optional, Output, QueryList, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { _countGroupLabelsBeforeOption, MatOption } from '@angular/material/core';
import { MatSelect, SELECT_PANEL_MAX_HEIGHT } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { A, DOWN_ARROW, END, ENTER, ESCAPE, HOME, NINE, SPACE, UP_ARROW, Z, ZERO, } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { delay, filter, map, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <mat-option>
 *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         </mat-option>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
let MatSelectSearchComponent = MatSelectSearchComponent_1 = class MatSelectSearchComponent {
    constructor(matSelect, changeDetectorRef, _viewportRuler, matOption = null, liveAnnouncer, matFormField = null) {
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this.matOption = matOption;
        this.liveAnnouncer = liveAnnouncer;
        this.matFormField = matFormField;
        /** Label of the search placeholder */
        this.placeholderLabel = 'Suche';
        /** Type of the search input field */
        this.type = 'text';
        /** Label to be shown when no entries are found. Set to null if no message should be shown. */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /**
         *  Text that is appended to the currently active item label announced by screen readers,
         *  informing the user of the current index, value and total options.
         *  eg: Bank R (Germany) 1 of 6
        */
        this.indexAndLengthScreenReaderText = ' of ';
        /**
          * Whether or not the search field should be cleared after the dropdown menu is closed.
          * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
          */
        this.clearSearchInput = true;
        /** Whether to show the search-in-progress indicator */
        this.searching = false;
        /** Disables initial focusing of the input field */
        this.disableInitialFocus = false;
        /** Enable clear input on escape pressed */
        this.enableClearOnEscapePressed = false;
        /**
         * Prevents home / end key being propagated to mat-select,
         * allowing to move the cursor within the search input instead of navigating the options
         */
        this.preventHomeEndKeyPropagation = false;
        /** Disables scrolling to active options when option list changes. Useful for server-side search */
        this.disableScrollToActiveOnOptionsChanged = false;
        /** Adds 508 screen reader support for search box */
        this.ariaLabel = 'dropdown search';
        /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
        this.showToggleAllCheckbox = false;
        /** select all checkbox checked state */
        this.toggleAllCheckboxChecked = false;
        /** select all checkbox indeterminate state */
        this.toggleAllCheckboxIndeterminate = false;
        /** Display a message in a tooltip on the toggle-all checkbox */
        this.toggleAllCheckboxTooltipMessage = '';
        /** Define the position of the tooltip on the toggle-all checkbox. */
        this.toogleAllCheckboxTooltipPosition = 'below';
        /** Output emitter to send to parent component with the toggle all boolean */
        this.toggleAll = new EventEmitter();
        this.onTouched = (_) => { };
        this._options$ = new BehaviorSubject(null);
        this.optionsList$ = this._options$.pipe(switchMap(_options => _options ?
            _options.changes.pipe(map(options => options.toArray()), startWith(_options.toArray())) : of(null)));
        this.optionsLength$ = this.optionsList$.pipe(map(options => options ? options.length : 0));
        this._formControl = new FormControl('');
        /** whether to show the no entries found message */
        this._showNoEntriesFound$ = combineLatest([
            this._formControl.valueChanges,
            this.optionsLength$
        ]).pipe(map(([value, optionsLength]) => this.noEntriesFoundLabel && value
            && optionsLength === this.getOptionsLengthOffset()));
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    get isInsideMatOption() {
        return !!this.matOption;
    }
    /** Current search value */
    get value() {
        return this._formControl.value;
    }
    /** Reference to the MatSelect options */
    set _options(_options) {
        this._options$.next(_options);
    }
    get _options() {
        return this._options$.getValue();
    }
    ngOnInit() {
        // set custom panel class
        const panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // set custom mat-option class if the component was placed inside a mat-option
        if (this.matOption) {
            this.matOption.disabled = true;
            this.matOption._getHostElement().classList.add('contains-mat-select-search');
        }
        else {
            console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(delay(1), takeUntil(this._onDestroy))
            .subscribe((opened) => {
            if (opened) {
                this.updateInputWidth();
                // focus the search field when opening
                if (!this.disableInitialFocus) {
                    this._focus();
                }
            }
            else {
                // clear it when closing
                if (this.clearSearchInput) {
                    this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1))
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect._keyManager) {
                this.matSelect._keyManager.change.pipe(takeUntil(this._onDestroy))
                    .subscribe(() => this.adjustScrollTopToFitActiveOptionIntoView());
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            this._options = this.matSelect.options;
            // Closure variable for tracking the most recent first option.
            // In order to avoid avoid causing the list to
            // scroll to the top when options are added to the bottom of
            // the list (eg: infinite scroll), we compare only
            // the changes to the first options to determine if we
            // should set the first item as active.
            // This prevents unnecessary scrolling to the top of the list
            // when options are appended, but allows the first item
            // in the list to be set as active by default when there
            // is no active selection
            let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];
            this._options.changes
                .pipe(takeUntil(this._onDestroy))
                .subscribe(() => {
                // avoid "expression has been changed" error
                setTimeout(() => {
                    // Convert the QueryList to an array
                    const options = this._options.toArray();
                    // The true first item is offset by 1
                    const currentFirstOption = options[this.getOptionsLengthOffset()];
                    const keyManager = this.matSelect._keyManager;
                    if (keyManager && this.matSelect.panelOpen) {
                        // set first item active and input width
                        // Check to see if the first option in these changes is different from the previous.
                        const firstOptionIsChanged = !this.matSelect.compareWith(previousFirstOption, currentFirstOption);
                        // CASE: The first option is different now.
                        // Indiciates we should set it as active and scroll to the top.
                        if (firstOptionIsChanged
                            || !keyManager.activeItem
                            || !options.find(option => this.matSelect.compareWith(option, keyManager.activeItem))) {
                            keyManager.setFirstItemActive();
                        }
                        // wait for panel width changes
                        setTimeout(() => {
                            this.updateInputWidth();
                        });
                        if (!this.disableScrollToActiveOnOptionsChanged) {
                            this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }
                    // Update our reference
                    previousFirstOption = currentFirstOption;
                });
            });
        });
        // add or remove css class depending on whether to show the no entries found message
        // note: this is hacky
        this._showNoEntriesFound$.pipe(takeUntil(this._onDestroy)).subscribe(showNoEntriesFound => {
            // set no entries found class on mat option
            if (this.matOption) {
                if (showNoEntriesFound) {
                    this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                }
                else {
                    this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                }
            }
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect.panelOpen) {
                this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
        this.optionsList$.pipe(takeUntil(this._onDestroy)).subscribe(() => {
            // update view when available options change
            this.changeDetectorRef.markForCheck();
        });
    }
    _emitSelectAllBooleanToParent(state) {
        this.toggleAll.emit(state);
    }
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    _isToggleAllCheckboxVisible() {
        return this.matSelect.multiple && this.showToggleAllCheckbox;
    }
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    _handleKeydown(event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE) ||
            (event.keyCode === SPACE)
            || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))) {
            event.stopPropagation();
        }
        if (this.matSelect.multiple && event.key && event.keyCode === ENTER) {
            // Regain focus after multiselect, so we can further type
            setTimeout(() => this._focus());
        }
        // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
        if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
            this._reset(true);
            event.stopPropagation();
        }
    }
    /**
     * Handles the key up event with MatSelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    _handleKeyup(event) {
        if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
            const ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();
            const index = this._options.toArray().findIndex(item => item.id === ariaActiveDescendantId);
            if (index !== -1) {
                const activeDescendant = this._options.toArray()[index];
                this.liveAnnouncer.announce(activeDescendant.viewValue + ' '
                    + this.getAriaIndex(index)
                    + this.indexAndLengthScreenReaderText
                    + this.getAriaLength());
            }
        }
    }
    /**
     * Calculate the index of the current option, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
     *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
     */
    getAriaIndex(optionIndex) {
        if (this.getOptionsLengthOffset() === 0) {
            return optionIndex + 1;
        }
        return optionIndex;
    }
    /**
     * Calculate the length of the options, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
     *    Case 2 [1, 2, 3] will have length of options.length.
     */
    getAriaLength() {
        return this._options.toArray().length - this.getOptionsLengthOffset();
    }
    writeValue(value) {
        this._lastExternalInputValue = value;
        this._formControl.setValue(value);
        this.changeDetectorRef.markForCheck();
    }
    onBlur() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this._formControl.valueChanges.pipe(filter(value => value !== this._lastExternalInputValue), tap(() => this._lastExternalInputValue = undefined), takeUntil(this._onDestroy)).subscribe(fn);
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Focuses the search input field
     */
    _focus() {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        const panel = this.matSelect.panel.nativeElement;
        const scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    }
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    _reset(focus) {
        this._formControl.setValue('');
        if (focus) {
            this._focus();
        }
    }
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    initMultipleHandling() {
        if (!this.matSelect.ngControl) {
            if (this.matSelect.multiple) {
                // note: the access to matSelect.ngControl (instead of matSelect.value / matSelect.valueChanges)
                // is necessary to properly work in multi-selection mode.
                console.error('the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true');
            }
            return;
        }
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.previousSelectedValues = this.matSelect.ngControl.value;
        this.matSelect.ngControl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe((values) => {
            let restoreSelectedValues = false;
            if (this.matSelect.multiple) {
                if (this._formControl.value && this._formControl.value.length
                    && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    const optionValues = this.matSelect.options.map(option => option.value);
                    this.previousSelectedValues.forEach(previousValue => {
                        if (!values.some(v => this.matSelect.compareWith(v, previousValue))
                            && !optionValues.some(v => this.matSelect.compareWith(v, previousValue))) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues = true;
                        }
                    });
                }
            }
            this.previousSelectedValues = values;
            if (restoreSelectedValues) {
                this.matSelect._onChange(values);
            }
        });
    }
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    adjustScrollTopToFitActiveOptionIntoView() {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            const matOptionHeight = this.getMatOptionHeight();
            const activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            const labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            const indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            const currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            const searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            const amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
            const indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight
                    - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
            }
        }
    }
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    updateInputWidth() {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        let element = this.innerSelectSearch.nativeElement;
        let panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    }
    getMatOptionHeight() {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     * Determine the offset to length that can be caused by the optional matOption used as a search input.
     */
    getOptionsLengthOffset() {
        if (this.matOption) {
            return 1;
        }
        else {
            return 0;
        }
    }
};
MatSelectSearchComponent.ctorParameters = () => [
    { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
    { type: ChangeDetectorRef },
    { type: ViewportRuler },
    { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] },
    { type: LiveAnnouncer },
    { type: MatFormField, decorators: [{ type: Optional }, { type: Inject, args: [MatFormField,] }] }
];
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "searching", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
tslib_1.__decorate([
    Input()
], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
tslib_1.__decorate([
    Output()
], MatSelectSearchComponent.prototype, "toggleAll", void 0);
tslib_1.__decorate([
    ViewChild('searchSelectInput', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
tslib_1.__decorate([
    ViewChild('innerSelectSearch', { read: ElementRef, static: true })
], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
tslib_1.__decorate([
    ContentChild(MatSelectSearchClearDirective, { static: false })
], MatSelectSearchComponent.prototype, "clearIcon", void 0);
tslib_1.__decorate([
    HostBinding('class.mat-select-search-inside-mat-option')
], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
MatSelectSearchComponent = MatSelectSearchComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ngx-mat-select-search',
        template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\r\n<div\r\n      #innerSelectSearch\r\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\r\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\r\n\r\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\r\n                [color]=\"matFormField?.color\"\r\n                class=\"mat-select-search-toggle-all-checkbox\"\r\n                [checked]=\"toggleAllCheckboxChecked\"\r\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\r\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\r\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\r\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\r\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\r\n  ></mat-checkbox>\r\n\r\n  <input class=\"mat-select-search-input mat-input-element\"\r\n         autocomplete=\"off\"\r\n         [type]=\"type\"\r\n         [formControl]=\"_formControl\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (keyup)=\"_handleKeyup($event)\"\r\n         (blur)=\"onBlur()\"\r\n         [placeholder]=\"placeholderLabel\"\r\n         [attr.aria-label]=\"ariaLabel\"\r\n  />\r\n  <mat-spinner *ngIf=\"searching\"\r\n          class=\"mat-select-search-spinner\"\r\n          diameter=\"16\"></mat-spinner>\r\n\r\n  <button mat-button\r\n          *ngIf=\"value && !searching\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\r\n    <ng-template #defaultIcon>\r\n      <mat-icon>close</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"_showNoEntriesFound$ | async\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  {{noEntriesFoundLabel}}\r\n</div>\r\n<!--\r\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\r\n\r\nUse of this source code is governed by an MIT-style license that can be\r\nfound in the LICENSE file at https://angular.io/license\r\n-->\r\n",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatSelectSearchComponent_1),
                multi: true
            }
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 44px 16px 16px;box-sizing:border-box;width:100%}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:16px}"]
    }),
    tslib_1.__param(0, Inject(MatSelect)),
    tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(MatOption)),
    tslib_1.__param(5, Optional()), tslib_1.__param(5, Inject(MatFormField))
], MatSelectSearchComponent);
export { MatSelectSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC1zZWxlY3Qtc2VhcmNoLyIsInNvdXJjZXMiOlsibWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOzs7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFF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QUEyQyxDQUFDO2lFQUd4RDtBQTNFVSx3QkFBd0I7SUFicEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxtbUZBQWlEO1FBRWpELFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQXdCLENBQUM7Z0JBQ3ZELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0lBOEhhLG1CQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUczQixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUU3QixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtHQWxJeEIsd0JBQXdCLENBdWhCcEM7U0F2aEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggQml0aG9zdCBHbWJIIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBfY291bnRHcm91cExhYmVsc0JlZm9yZU9wdGlvbiwgTWF0T3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdCwgU0VMRUNUX1BBTkVMX01BWF9IRUlHSFQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgQSwgRE9XTl9BUlJPVywgRU5ELCBFTlRFUiwgRVNDQVBFLCBIT01FLCBOSU5FLCBTUEFDRSwgVVBfQVJST1csIFosIFpFUk8sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBMaXZlQW5ub3VuY2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2UsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUgfSBmcm9tICcuL21hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgY29tcG9uZW50LXNlbGVjdG9yICovXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgcHJvdmlkaW5nIGFuIGlucHV0IGZpZWxkIGZvciBzZWFyY2hpbmcgTWF0U2VsZWN0IG9wdGlvbnMuXHJcbiAqXHJcbiAqIEV4YW1wbGUgdXNhZ2U6XHJcbiAqXHJcbiAqIGludGVyZmFjZSBCYW5rIHtcclxuICogIGlkOiBzdHJpbmc7XHJcbiAqICBuYW1lOiBzdHJpbmc7XHJcbiAqIH1cclxuICpcclxuICogQENvbXBvbmVudCh7XHJcbiAqICAgc2VsZWN0b3I6ICdteS1hcHAtZGF0YS1zZWxlY3Rpb24nLFxyXG4gKiAgIHRlbXBsYXRlOiBgXHJcbiAqICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAqICAgICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJiYW5rQ3RybFwiIHBsYWNlaG9sZGVyPVwiQmFua1wiPlxyXG4gKiAgICAgICAgIDxtYXQtb3B0aW9uPlxyXG4gKiAgICAgICAgICAgPG5neC1tYXQtc2VsZWN0LXNlYXJjaCBbZm9ybUNvbnRyb2xdPVwiYmFua0ZpbHRlckN0cmxcIj48L25neC1tYXQtc2VsZWN0LXNlYXJjaD5cclxuICogICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAqICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGJhbmsgb2YgZmlsdGVyZWRCYW5rcyB8IGFzeW5jXCIgW3ZhbHVlXT1cImJhbmsuaWRcIj5cclxuICogICAgICAgICAgIHt7YmFuay5uYW1lfX1cclxuICogICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAqICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICogICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAqICAgYFxyXG4gKiB9KVxyXG4gKiBleHBvcnQgY2xhc3MgRGF0YVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICpcclxuICogICAvLyBjb250cm9sIGZvciB0aGUgc2VsZWN0ZWQgYmFua1xyXG4gKiAgIHB1YmxpYyBiYW5rQ3RybDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICogICAvLyBjb250cm9sIGZvciB0aGUgTWF0U2VsZWN0IGZpbHRlciBrZXl3b3JkXHJcbiAqICAgcHVibGljIGJhbmtGaWx0ZXJDdHJsOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gKlxyXG4gKiAgIC8vIGxpc3Qgb2YgYmFua3NcclxuICogICBwcml2YXRlIGJhbmtzOiBCYW5rW10gPSBbe25hbWU6ICdCYW5rIEEnLCBpZDogJ0EnfSwge25hbWU6ICdCYW5rIEInLCBpZDogJ0InfSwge25hbWU6ICdCYW5rIEMnLCBpZDogJ0MnfV07XHJcbiAqICAgLy8gbGlzdCBvZiBiYW5rcyBmaWx0ZXJlZCBieSBzZWFyY2gga2V5d29yZFxyXG4gKiAgIHB1YmxpYyBmaWx0ZXJlZEJhbmtzOiBSZXBsYXlTdWJqZWN0PEJhbmtbXT4gPSBuZXcgUmVwbGF5U3ViamVjdDxCYW5rW10+KDEpO1xyXG4gKlxyXG4gKiAgIC8vIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLlxyXG4gKiAgIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAqXHJcbiAqXHJcbiAqICAgbmdPbkluaXQoKSB7XHJcbiAqICAgICAvLyBsb2FkIHRoZSBpbml0aWFsIGJhbmsgbGlzdFxyXG4gKiAgICAgdGhpcy5maWx0ZXJlZEJhbmtzLm5leHQodGhpcy5iYW5rcy5zbGljZSgpKTtcclxuICogICAgIC8vIGxpc3RlbiBmb3Igc2VhcmNoIGZpZWxkIHZhbHVlIGNoYW5nZXNcclxuICogICAgIHRoaXMuYmFua0ZpbHRlckN0cmwudmFsdWVDaGFuZ2VzXHJcbiAqICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxyXG4gKiAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICAgICAgICB0aGlzLmZpbHRlckJhbmtzKCk7XHJcbiAqICAgICAgIH0pO1xyXG4gKiAgIH1cclxuICpcclxuICogICBuZ09uRGVzdHJveSgpIHtcclxuICogICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAqICAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICogICB9XHJcbiAqXHJcbiAqICAgcHJpdmF0ZSBmaWx0ZXJCYW5rcygpIHtcclxuICogICAgIGlmICghdGhpcy5iYW5rcykge1xyXG4gKiAgICAgICByZXR1cm47XHJcbiAqICAgICB9XHJcbiAqXHJcbiAqICAgICAvLyBnZXQgdGhlIHNlYXJjaCBrZXl3b3JkXHJcbiAqICAgICBsZXQgc2VhcmNoID0gdGhpcy5iYW5rRmlsdGVyQ3RybC52YWx1ZTtcclxuICogICAgIGlmICghc2VhcmNoKSB7XHJcbiAqICAgICAgIHRoaXMuZmlsdGVyZWRCYW5rcy5uZXh0KHRoaXMuYmFua3Muc2xpY2UoKSk7XHJcbiAqICAgICAgIHJldHVybjtcclxuICogICAgIH0gZWxzZSB7XHJcbiAqICAgICAgIHNlYXJjaCA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gKiAgICAgfVxyXG4gKlxyXG4gKiAgICAgLy8gZmlsdGVyIHRoZSBiYW5rc1xyXG4gKiAgICAgdGhpcy5maWx0ZXJlZEJhbmtzLm5leHQoXHJcbiAqICAgICAgIHRoaXMuYmFua3MuZmlsdGVyKGJhbmsgPT4gYmFuay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTEpXHJcbiAqICAgICApO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LXNlbGVjdC1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdFNlbGVjdFNlYXJjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgLyoqIExhYmVsIG9mIHRoZSBzZWFyY2ggcGxhY2Vob2xkZXIgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlckxhYmVsID0gJ1N1Y2hlJztcclxuXHJcbiAgLyoqIFR5cGUgb2YgdGhlIHNlYXJjaCBpbnB1dCBmaWVsZCAqL1xyXG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XHJcblxyXG4gIC8qKiBMYWJlbCB0byBiZSBzaG93biB3aGVuIG5vIGVudHJpZXMgYXJlIGZvdW5kLiBTZXQgdG8gbnVsbCBpZiBubyBtZXNzYWdlIHNob3VsZCBiZSBzaG93bi4gKi9cclxuICBASW5wdXQoKSBub0VudHJpZXNGb3VuZExhYmVsID0gJ0tlaW5lIE9wdGlvbmVuIGdlZnVuZGVuJztcclxuXHJcbiAgLyoqXHJcbiAgICogIFRleHQgdGhhdCBpcyBhcHBlbmRlZCB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSBpdGVtIGxhYmVsIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycyxcclxuICAgKiAgaW5mb3JtaW5nIHRoZSB1c2VyIG9mIHRoZSBjdXJyZW50IGluZGV4LCB2YWx1ZSBhbmQgdG90YWwgb3B0aW9ucy5cclxuICAgKiAgZWc6IEJhbmsgUiAoR2VybWFueSkgMSBvZiA2XHJcbiAgKi9cclxuICBASW5wdXQoKSBpbmRleEFuZExlbmd0aFNjcmVlblJlYWRlclRleHQgPSAnIG9mICc7XHJcblxyXG4gIC8qKlxyXG4gICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VhcmNoIGZpZWxkIHNob3VsZCBiZSBjbGVhcmVkIGFmdGVyIHRoZSBkcm9wZG93biBtZW51IGlzIGNsb3NlZC5cclxuICAgICogVXNlZnVsIGZvciBzZXJ2ZXItc2lkZSBmaWx0ZXJpbmcuIFNlZSBbIzNdKGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRob3N0LWdtYmgvbmd4LW1hdC1zZWxlY3Qtc2VhcmNoL2lzc3Vlcy8zKVxyXG4gICAgKi9cclxuICBASW5wdXQoKSBjbGVhclNlYXJjaElucHV0ID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aGUgc2VhcmNoLWluLXByb2dyZXNzIGluZGljYXRvciAqL1xyXG4gIEBJbnB1dCgpIHNlYXJjaGluZyA9IGZhbHNlO1xyXG5cclxuICAvKiogRGlzYWJsZXMgaW5pdGlhbCBmb2N1c2luZyBvZiB0aGUgaW5wdXQgZmllbGQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlSW5pdGlhbEZvY3VzID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFbmFibGUgY2xlYXIgaW5wdXQgb24gZXNjYXBlIHByZXNzZWQgKi9cclxuICBASW5wdXQoKSBlbmFibGVDbGVhck9uRXNjYXBlUHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBQcmV2ZW50cyBob21lIC8gZW5kIGtleSBiZWluZyBwcm9wYWdhdGVkIHRvIG1hdC1zZWxlY3QsXHJcbiAgICogYWxsb3dpbmcgdG8gbW92ZSB0aGUgY3Vyc29yIHdpdGhpbiB0aGUgc2VhcmNoIGlucHV0IGluc3RlYWQgb2YgbmF2aWdhdGluZyB0aGUgb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHByZXZlbnRIb21lRW5kS2V5UHJvcGFnYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgLyoqIERpc2FibGVzIHNjcm9sbGluZyB0byBhY3RpdmUgb3B0aW9ucyB3aGVuIG9wdGlvbiBsaXN0IGNoYW5nZXMuIFVzZWZ1bCBmb3Igc2VydmVyLXNpZGUgc2VhcmNoICovXHJcbiAgQElucHV0KCkgZGlzYWJsZVNjcm9sbFRvQWN0aXZlT25PcHRpb25zQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogQWRkcyA1MDggc2NyZWVuIHJlYWRlciBzdXBwb3J0IGZvciBzZWFyY2ggYm94ICovXHJcbiAgQElucHV0KCkgYXJpYUxhYmVsID0gJ2Ryb3Bkb3duIHNlYXJjaCc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgU2VsZWN0IEFsbCBDaGVja2JveCAoZm9yIG1hdC1zZWxlY3RbbXVsdGk9dHJ1ZV0pICovXHJcbiAgQElucHV0KCkgc2hvd1RvZ2dsZUFsbENoZWNrYm94ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBzZWxlY3QgYWxsIGNoZWNrYm94IGNoZWNrZWQgc3RhdGUgKi9cclxuICBASW5wdXQoKSB0b2dnbGVBbGxDaGVja2JveENoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIHNlbGVjdCBhbGwgY2hlY2tib3ggaW5kZXRlcm1pbmF0ZSBzdGF0ZSAqL1xyXG4gIEBJbnB1dCgpIHRvZ2dsZUFsbENoZWNrYm94SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAvKiogRGlzcGxheSBhIG1lc3NhZ2UgaW4gYSB0b29sdGlwIG9uIHRoZSB0b2dnbGUtYWxsIGNoZWNrYm94ICovXHJcbiAgQElucHV0KCkgdG9nZ2xlQWxsQ2hlY2tib3hUb29sdGlwTWVzc2FnZSA9ICcnO1xyXG5cclxuICAvKiogRGVmaW5lIHRoZSBwb3NpdGlvbiBvZiB0aGUgdG9vbHRpcCBvbiB0aGUgdG9nZ2xlLWFsbCBjaGVja2JveC4gKi9cclxuICBASW5wdXQoKSB0b29nbGVBbGxDaGVja2JveFRvb2x0aXBQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdhYm92ZScgfCAnYmVsb3cnIHwgJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2JlbG93JztcclxuXHJcbiAgLyoqIE91dHB1dCBlbWl0dGVyIHRvIHNlbmQgdG8gcGFyZW50IGNvbXBvbmVudCB3aXRoIHRoZSB0b2dnbGUgYWxsIGJvb2xlYW4gKi9cclxuICBAT3V0cHV0KCkgdG9nZ2xlQWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cclxuICBAVmlld0NoaWxkKCdzZWFyY2hTZWxlY3RJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIHNlYXJjaFNlbGVjdElucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgKi9cclxuICBAVmlld0NoaWxkKCdpbm5lclNlbGVjdFNlYXJjaCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGlubmVyU2VsZWN0U2VhcmNoOiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogUmVmZXJlbmNlIHRvIGN1c3RvbSBzZWFyY2ggaW5wdXQgY2xlYXIgaWNvbiAqL1xyXG4gIEBDb250ZW50Q2hpbGQoTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBjbGVhckljb246IE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zZWxlY3Qtc2VhcmNoLWluc2lkZS1tYXQtb3B0aW9uJylcclxuICBnZXQgaXNJbnNpZGVNYXRPcHRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm1hdE9wdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBDdXJyZW50IHNlYXJjaCB2YWx1ZSAqL1xyXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sLnZhbHVlO1xyXG4gIH1cclxuICBwcml2YXRlIF9sYXN0RXh0ZXJuYWxJbnB1dFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIG9uVG91Y2hlZDogRnVuY3Rpb24gPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIE1hdFNlbGVjdCBvcHRpb25zICovXHJcbiAgcHVibGljIHNldCBfb3B0aW9ucyhfb3B0aW9uczogUXVlcnlMaXN0PE1hdE9wdGlvbj4pIHtcclxuICAgIHRoaXMuX29wdGlvbnMkLm5leHQoX29wdGlvbnMpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0IF9vcHRpb25zKCk6IFF1ZXJ5TGlzdDxNYXRPcHRpb24+IHtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zJC5nZXRWYWx1ZSgpO1xyXG4gIH1cclxuICBwdWJsaWMgX29wdGlvbnMkOiBCZWhhdmlvclN1YmplY3Q8UXVlcnlMaXN0PE1hdE9wdGlvbj4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxRdWVyeUxpc3Q8TWF0T3B0aW9uPj4obnVsbCk7XHJcblxyXG4gIHByaXZhdGUgb3B0aW9uc0xpc3QkOiBPYnNlcnZhYmxlPE1hdE9wdGlvbltdPiA9IHRoaXMuX29wdGlvbnMkLnBpcGUoXHJcbiAgICBzd2l0Y2hNYXAoX29wdGlvbnMgPT4gX29wdGlvbnMgP1xyXG4gICAgICBfb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgbWFwKG9wdGlvbnMgPT4gb3B0aW9ucy50b0FycmF5KCkpLFxyXG4gICAgICAgIHN0YXJ0V2l0aDxNYXRPcHRpb25bXT4oX29wdGlvbnMudG9BcnJheSgpKSxcclxuICAgICAgKSA6IG9mKG51bGwpXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvcHRpb25zTGVuZ3RoJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5vcHRpb25zTGlzdCQucGlwZShcclxuICAgIG1hcChvcHRpb25zID0+IG9wdGlvbnMgPyBvcHRpb25zLmxlbmd0aCA6IDApXHJcbiAgKTtcclxuXHJcbiAgLyoqIFByZXZpb3VzbHkgc2VsZWN0ZWQgdmFsdWVzIHdoZW4gdXNpbmcgPG1hdC1zZWxlY3QgW211bHRpcGxlXT1cInRydWVcIj4qL1xyXG4gIHByaXZhdGUgcHJldmlvdXNTZWxlY3RlZFZhbHVlczogYW55W107XHJcblxyXG4gIHB1YmxpYyBfZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuXHJcbiAgLyoqIHdoZXRoZXIgdG8gc2hvdyB0aGUgbm8gZW50cmllcyBmb3VuZCBtZXNzYWdlICovXHJcbiAgcHVibGljIF9zaG93Tm9FbnRyaWVzRm91bmQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gY29tYmluZUxhdGVzdChbXHJcbiAgICB0aGlzLl9mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMsXHJcbiAgICB0aGlzLm9wdGlvbnNMZW5ndGgkXHJcbiAgXSkucGlwZShcclxuICAgIG1hcCgoW3ZhbHVlLCBvcHRpb25zTGVuZ3RoXSkgPT4gdGhpcy5ub0VudHJpZXNGb3VuZExhYmVsICYmIHZhbHVlXHJcbiAgICAgICYmIG9wdGlvbnNMZW5ndGggPT09IHRoaXMuZ2V0T3B0aW9uc0xlbmd0aE9mZnNldCgpKVxyXG4gICk7XHJcblxyXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cclxuICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChNYXRTZWxlY3QpIHB1YmxpYyBtYXRTZWxlY3Q6IE1hdFNlbGVjdCxcclxuICAgIHB1YmxpYyBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNYXRPcHRpb24pIHB1YmxpYyBtYXRPcHRpb246IE1hdE9wdGlvbiA9IG51bGwsXHJcbiAgICBwcml2YXRlIGxpdmVBbm5vdW5jZXI6IExpdmVBbm5vdW5jZXIsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1hdEZvcm1GaWVsZCkgcHVibGljIG1hdEZvcm1GaWVsZDogTWF0Rm9ybUZpZWxkID0gbnVsbFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBzZXQgY3VzdG9tIHBhbmVsIGNsYXNzXHJcbiAgICBjb25zdCBwYW5lbENsYXNzID0gJ21hdC1zZWxlY3Qtc2VhcmNoLXBhbmVsJztcclxuICAgIGlmICh0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MpKSB7XHJcbiAgICAgICAgKDxzdHJpbmdbXT50aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzKS5wdXNoKHBhbmVsQ2xhc3MpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hdFNlbGVjdC5wYW5lbENsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPSBbdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzcywgcGFuZWxDbGFzc107XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWxDbGFzc1twYW5lbENsYXNzXSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsQ2xhc3MgPSBwYW5lbENsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBjdXN0b20gbWF0LW9wdGlvbiBjbGFzcyBpZiB0aGUgY29tcG9uZW50IHdhcyBwbGFjZWQgaW5zaWRlIGEgbWF0LW9wdGlvblxyXG4gICAgaWYgKHRoaXMubWF0T3B0aW9uKSB7XHJcbiAgICAgIHRoaXMubWF0T3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LmFkZCgnY29udGFpbnMtbWF0LXNlbGVjdC1zZWFyY2gnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJzxuZ3gtbWF0LXNlbGVjdC1zZWFyY2g+IG11c3QgYmUgcGxhY2VkIGluc2lkZSBhIDxtYXQtb3B0aW9uPiBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2hlbiB0aGUgc2VsZWN0IGRyb3Bkb3duIHBhbmVsIGlzIG9wZW5lZCBvciBjbG9zZWRcclxuICAgIHRoaXMubWF0U2VsZWN0Lm9wZW5lZENoYW5nZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWxheSgxKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKG9wZW5lZCkgPT4ge1xyXG4gICAgICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgICAgICAgLy8gZm9jdXMgdGhlIHNlYXJjaCBmaWVsZCB3aGVuIG9wZW5pbmdcclxuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlSW5pdGlhbEZvY3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGNsZWFyIGl0IHdoZW4gY2xvc2luZ1xyXG4gICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBzZXQgdGhlIGZpcnN0IGl0ZW0gYWN0aXZlIGFmdGVyIHRoZSBvcHRpb25zIGNoYW5nZWRcclxuICAgIHRoaXMubWF0U2VsZWN0Lm9wZW5lZENoYW5nZVxyXG4gICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0U2VsZWN0Ll9rZXlNYW5hZ2VyKSB7XHJcbiAgICAgICAgICB0aGlzLm1hdFNlbGVjdC5fa2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFkanVzdFNjcm9sbFRvcFRvRml0QWN0aXZlT3B0aW9uSW50b1ZpZXcoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdfa2V5TWFuYWdlciB3YXMgbm90IGluaXRpYWxpemVkLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMubWF0U2VsZWN0Lm9wdGlvbnM7XHJcblxyXG4gICAgICAgIC8vIENsb3N1cmUgdmFyaWFibGUgZm9yIHRyYWNraW5nIHRoZSBtb3N0IHJlY2VudCBmaXJzdCBvcHRpb24uXHJcbiAgICAgICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgYXZvaWQgY2F1c2luZyB0aGUgbGlzdCB0b1xyXG4gICAgICAgIC8vIHNjcm9sbCB0byB0aGUgdG9wIHdoZW4gb3B0aW9ucyBhcmUgYWRkZWQgdG8gdGhlIGJvdHRvbSBvZlxyXG4gICAgICAgIC8vIHRoZSBsaXN0IChlZzogaW5maW5pdGUgc2Nyb2xsKSwgd2UgY29tcGFyZSBvbmx5XHJcbiAgICAgICAgLy8gdGhlIGNoYW5nZXMgdG8gdGhlIGZpcnN0IG9wdGlvbnMgdG8gZGV0ZXJtaW5lIGlmIHdlXHJcbiAgICAgICAgLy8gc2hvdWxkIHNldCB0aGUgZmlyc3QgaXRlbSBhcyBhY3RpdmUuXHJcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyB1bm5lY2Vzc2FyeSBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbGlzdFxyXG4gICAgICAgIC8vIHdoZW4gb3B0aW9ucyBhcmUgYXBwZW5kZWQsIGJ1dCBhbGxvd3MgdGhlIGZpcnN0IGl0ZW1cclxuICAgICAgICAvLyBpbiB0aGUgbGlzdCB0byBiZSBzZXQgYXMgYWN0aXZlIGJ5IGRlZmF1bHQgd2hlbiB0aGVyZVxyXG4gICAgICAgIC8vIGlzIG5vIGFjdGl2ZSBzZWxlY3Rpb25cclxuICAgICAgICBsZXQgcHJldmlvdXNGaXJzdE9wdGlvbiA9IHRoaXMuX29wdGlvbnMudG9BcnJheSgpW3RoaXMuZ2V0T3B0aW9uc0xlbmd0aE9mZnNldCgpXTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jaGFuZ2VzXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhdm9pZCBcImV4cHJlc3Npb24gaGFzIGJlZW4gY2hhbmdlZFwiIGVycm9yXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIFF1ZXJ5TGlzdCB0byBhbiBhcnJheVxyXG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gVGhlIHRydWUgZmlyc3QgaXRlbSBpcyBvZmZzZXQgYnkgMVxyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGaXJzdE9wdGlvbiA9IG9wdGlvbnNbdGhpcy5nZXRPcHRpb25zTGVuZ3RoT2Zmc2V0KCldO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBrZXlNYW5hZ2VyID0gdGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXI7XHJcbiAgICAgICAgICAgICAgaWYgKGtleU1hbmFnZXIgJiYgdGhpcy5tYXRTZWxlY3QucGFuZWxPcGVuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2V0IGZpcnN0IGl0ZW0gYWN0aXZlIGFuZCBpbnB1dCB3aWR0aFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZXNlIGNoYW5nZXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIHByZXZpb3VzLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RPcHRpb25Jc0NoYW5nZWQgPSAhdGhpcy5tYXRTZWxlY3QuY29tcGFyZVdpdGgocHJldmlvdXNGaXJzdE9wdGlvbiwgY3VycmVudEZpcnN0T3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDQVNFOiBUaGUgZmlyc3Qgb3B0aW9uIGlzIGRpZmZlcmVudCBub3cuXHJcbiAgICAgICAgICAgICAgICAvLyBJbmRpY2lhdGVzIHdlIHNob3VsZCBzZXQgaXQgYXMgYWN0aXZlIGFuZCBzY3JvbGwgdG8gdGhlIHRvcC5cclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdE9wdGlvbklzQ2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICB8fCAha2V5TWFuYWdlci5hY3RpdmVJdGVtXHJcbiAgICAgICAgICAgICAgICAgIHx8ICFvcHRpb25zLmZpbmQob3B0aW9uID0+IHRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKG9wdGlvbiwga2V5TWFuYWdlci5hY3RpdmVJdGVtKSkpIHtcclxuICAgICAgICAgICAgICAgICAga2V5TWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBwYW5lbCB3aWR0aCBjaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVNjcm9sbFRvQWN0aXZlT25PcHRpb25zQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFkanVzdFNjcm9sbFRvcFRvRml0QWN0aXZlT3B0aW9uSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSBvdXIgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgcHJldmlvdXNGaXJzdE9wdGlvbiA9IGN1cnJlbnRGaXJzdE9wdGlvbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBjc3MgY2xhc3MgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdG8gc2hvdyB0aGUgbm8gZW50cmllcyBmb3VuZCBtZXNzYWdlXHJcbiAgICAvLyBub3RlOiB0aGlzIGlzIGhhY2t5XHJcbiAgICB0aGlzLl9zaG93Tm9FbnRyaWVzRm91bmQkLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICApLnN1YnNjcmliZShzaG93Tm9FbnRyaWVzRm91bmQgPT4ge1xyXG4gICAgICAvLyBzZXQgbm8gZW50cmllcyBmb3VuZCBjbGFzcyBvbiBtYXQgb3B0aW9uXHJcbiAgICAgIGlmICh0aGlzLm1hdE9wdGlvbikge1xyXG4gICAgICAgIGlmIChzaG93Tm9FbnRyaWVzRm91bmQpIHtcclxuICAgICAgICAgIHRoaXMubWF0T3B0aW9uLl9nZXRIb3N0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoJ21hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tYXRPcHRpb24uX2dldEhvc3RFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnbWF0LXNlbGVjdC1zZWFyY2gtbm8tZW50cmllcy1mb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVzaXplIHRoZSBpbnB1dCB3aWR0aCB3aGVuIHRoZSB2aWV3cG9ydCBpcyByZXNpemVkLCBpLmUuIHRoZSB0cmlnZ2VyIHdpZHRoIGNvdWxkIHBvdGVudGlhbGx5IGJlIHJlc2l6ZWRcclxuICAgIHRoaXMuX3ZpZXdwb3J0UnVsZXIuY2hhbmdlKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdFNlbGVjdC5wYW5lbE9wZW4pIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5pbml0TXVsdGlwbGVIYW5kbGluZygpO1xyXG5cclxuICAgIHRoaXMub3B0aW9uc0xpc3QkLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZSB2aWV3IHdoZW4gYXZhaWxhYmxlIG9wdGlvbnMgY2hhbmdlXHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9lbWl0U2VsZWN0QWxsQm9vbGVhblRvUGFyZW50KHN0YXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUFsbC5lbWl0KHN0YXRlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX2lzVG9nZ2xlQWxsQ2hlY2tib3hWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWF0U2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuc2hvd1RvZ2dsZUFsbENoZWNrYm94O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB0aGUga2V5IGRvd24gZXZlbnQgd2l0aCBNYXRTZWxlY3QuXHJcbiAgICogQWxsb3dzIGUuZy4gc2VsZWN0aW5nIHdpdGggZW50ZXIga2V5LCBuYXZpZ2F0aW9uIHdpdGggYXJyb3cga2V5cywgZXRjLlxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAvLyBQcmV2ZW50IHByb3BhZ2F0aW9uIGZvciBhbGwgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgaW4gb3JkZXIgdG8gYXZvaWQgc2VsZWN0aW9uIGlzc3Vlc1xyXG4gICAgaWYgKChldmVudC5rZXkgJiYgZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkgfHxcclxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gQSAmJiBldmVudC5rZXlDb2RlIDw9IFopIHx8XHJcbiAgICAgIChldmVudC5rZXlDb2RlID49IFpFUk8gJiYgZXZlbnQua2V5Q29kZSA8PSBOSU5FKSB8fFxyXG4gICAgICAoZXZlbnQua2V5Q29kZSA9PT0gU1BBQ0UpXHJcbiAgICAgIHx8ICh0aGlzLnByZXZlbnRIb21lRW5kS2V5UHJvcGFnYXRpb24gJiYgKGV2ZW50LmtleUNvZGUgPT09IEhPTUUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5EKSlcclxuICAgICkge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXRTZWxlY3QubXVsdGlwbGUgJiYgZXZlbnQua2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgIC8vIFJlZ2FpbiBmb2N1cyBhZnRlciBtdWx0aXNlbGVjdCwgc28gd2UgY2FuIGZ1cnRoZXIgdHlwZVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2ZvY3VzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSBpZiBjbGljayBFc2NhcGUsIGlmIGlucHV0IGlzIGVtcHR5LCBjbG9zZSB0aGUgZHJvcGRvd24sIGlmIG5vdCwgZW1wdHkgb3V0IHRoZSBzZWFyY2ggZmllbGRcclxuICAgIGlmICh0aGlzLmVuYWJsZUNsZWFyT25Fc2NhcGVQcmVzc2VkID09PSB0cnVlICYmIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3Jlc2V0KHRydWUpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGhlIGtleSB1cCBldmVudCB3aXRoIE1hdFNlbGVjdC5cclxuICAgKiBBbGxvd3MgZS5nLiB0aGUgYW5ub3VuY2luZyBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZURlc2NlbmRhbnQgYnkgc2NyZWVuIHJlYWRlcnMuXHJcbiAgICovXHJcbiAgX2hhbmRsZUtleXVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVVBfQVJST1cgfHwgZXZlbnQua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICBjb25zdCBhcmlhQWN0aXZlRGVzY2VuZGFudElkID0gdGhpcy5tYXRTZWxlY3QuX2dldEFyaWFBY3RpdmVEZXNjZW5kYW50KCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KCkuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gYXJpYUFjdGl2ZURlc2NlbmRhbnRJZCk7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVEZXNjZW5kYW50ID0gdGhpcy5fb3B0aW9ucy50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMubGl2ZUFubm91bmNlci5hbm5vdW5jZShcclxuICAgICAgICAgIGFjdGl2ZURlc2NlbmRhbnQudmlld1ZhbHVlICsgJyAnXHJcbiAgICAgICAgICArIHRoaXMuZ2V0QXJpYUluZGV4KGluZGV4KVxyXG4gICAgICAgICAgKyB0aGlzLmluZGV4QW5kTGVuZ3RoU2NyZWVuUmVhZGVyVGV4dFxyXG4gICAgICAgICAgKyB0aGlzLmdldEFyaWFMZW5ndGgoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgb3B0aW9uLCB0YWtpbmcgdGhlIG9mZnNldCB0byBsZW5ndGggaW50byBhY2NvdW50LlxyXG4gICAqIGV4YW1wbGVzOlxyXG4gICAqICAgIENhc2UgMSBbU2VhcmNoLCAxLCAyLCAzXSB3aWxsIGhhdmUgb2Zmc2V0IG9mIDEsIGR1ZSB0byBzZWFyY2ggYW5kIHdpbGwgcmVhZCBpbmRleCBvZiB0b3RhbC5cclxuICAgKiAgICBDYXNlIDIgWzEsIDIsIDNdIHdpbGwgaGF2ZSBvZmZzZXQgb2YgMCBhbmQgd2lsbCByZWFkIGluZGV4ICsxIG9mIHRvdGFsLlxyXG4gICAqL1xyXG4gIGdldEFyaWFJbmRleChvcHRpb25JbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gb3B0aW9uSW5kZXggKyAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbkluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIG9wdGlvbnMsIHRha2luZyB0aGUgb2Zmc2V0IHRvIGxlbmd0aCBpbnRvIGFjY291bnQuXHJcbiAgICogZXhhbXBsZXM6XHJcbiAgICogICAgQ2FzZSAxIFtTZWFyY2gsIDEsIDIsIDNdIHdpbGwgaGF2ZSBsZW5ndGggb2Ygb3B0aW9ucy5sZW5ndGggLTEsIGR1ZSB0byBzZWFyY2guXHJcbiAgICogICAgQ2FzZSAyIFsxLCAyLCAzXSB3aWxsIGhhdmUgbGVuZ3RoIG9mIG9wdGlvbnMubGVuZ3RoLlxyXG4gICAqL1xyXG4gIGdldEFyaWFMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKS5sZW5ndGggLSB0aGlzLmdldE9wdGlvbnNMZW5ndGhPZmZzZXQoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbGFzdEV4dGVybmFsSW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5fZm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIGZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gdGhpcy5fbGFzdEV4dGVybmFsSW5wdXRWYWx1ZSksXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLl9sYXN0RXh0ZXJuYWxJbnB1dFZhbHVlID0gdW5kZWZpbmVkKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICkuc3Vic2NyaWJlKGZuKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvY3VzZXMgdGhlIHNlYXJjaCBpbnB1dCBmaWVsZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBfZm9jdXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuc2VhcmNoU2VsZWN0SW5wdXQgfHwgIXRoaXMubWF0U2VsZWN0LnBhbmVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHNhdmUgYW5kIHJlc3RvcmUgc2Nyb2xsVG9wIG9mIHBhbmVsLCBzaW5jZSBpdCB3aWxsIGJlIHJlc2V0IGJ5IGZvY3VzKClcclxuICAgIC8vIG5vdGU6IHRoaXMgaXMgaGFja3lcclxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHBhbmVsLnNjcm9sbFRvcDtcclxuXHJcbiAgICAvLyBmb2N1c1xyXG4gICAgdGhpcy5zZWFyY2hTZWxlY3RJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gICAgcGFuZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBjdXJyZW50IHNlYXJjaCB2YWx1ZVxyXG4gICAqIEBwYXJhbSBmb2N1cyB3aGV0aGVyIHRvIGZvY3VzIGFmdGVyIHJlc2V0dGluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBfcmVzZXQoZm9jdXM/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgdGhpcy5fZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBoYW5kbGluZyA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxyXG4gICAqIE5vdGU6IHRvIGltcHJvdmUgdGhpcyBjb2RlLCBtYXQtc2VsZWN0IHNob3VsZCBiZSBleHRlbmRlZCB0byBhbGxvdyBkaXNhYmxpbmcgcmVzZXR0aW5nIHRoZSBzZWxlY3Rpb24gd2hpbGUgZmlsdGVyaW5nLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5pdE11bHRpcGxlSGFuZGxpbmcoKSB7XHJcbiAgICBpZiAoIXRoaXMubWF0U2VsZWN0Lm5nQ29udHJvbCkge1xyXG4gICAgICBpZiAodGhpcy5tYXRTZWxlY3QubXVsdGlwbGUpIHtcclxuICAgICAgICAvLyBub3RlOiB0aGUgYWNjZXNzIHRvIG1hdFNlbGVjdC5uZ0NvbnRyb2wgKGluc3RlYWQgb2YgbWF0U2VsZWN0LnZhbHVlIC8gbWF0U2VsZWN0LnZhbHVlQ2hhbmdlcylcclxuICAgICAgICAvLyBpcyBuZWNlc3NhcnkgdG8gcHJvcGVybHkgd29yayBpbiBtdWx0aS1zZWxlY3Rpb24gbW9kZS5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCd0aGUgbWF0LXNlbGVjdCBjb250YWluaW5nIG5neC1tYXQtc2VsZWN0LXNlYXJjaCBtdXN0IGhhdmUgYSBuZ01vZGVsIG9yIGZvcm1Db250cm9sIGRpcmVjdGl2ZSB3aGVuIG11bHRpcGxlPXRydWUnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiA8bWF0LXNlbGVjdCBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxyXG4gICAgLy8gc3RvcmUgcHJldmlvdXNseSBzZWxlY3RlZCB2YWx1ZXMgYW5kIHJlc3RvcmUgdGhlbSB3aGVuIHRoZXkgYXJlIGRlc2VsZWN0ZWRcclxuICAgIC8vIGJlY2F1c2UgdGhlIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIHdoaWxlIHdlIGFyZSBjdXJyZW50bHkgZmlsdGVyaW5nXHJcbiAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm1hdFNlbGVjdC5uZ0NvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgdGhpcy5tYXRTZWxlY3QubmdDb250cm9sLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3RvcmVTZWxlY3RlZFZhbHVlcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm1hdFNlbGVjdC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2Zvcm1Db250cm9sLnZhbHVlICYmIHRoaXMuX2Zvcm1Db250cm9sLnZhbHVlLmxlbmd0aFxyXG4gICAgICAgICAgICAmJiB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMpKSB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcclxuICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSB0aGlzLm1hdFNlbGVjdC5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzLmZvckVhY2gocHJldmlvdXNWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMuc29tZSh2ID0+IHRoaXMubWF0U2VsZWN0LmNvbXBhcmVXaXRoKHYsIHByZXZpb3VzVmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgJiYgIW9wdGlvblZhbHVlcy5zb21lKHYgPT4gdGhpcy5tYXRTZWxlY3QuY29tcGFyZVdpdGgodiwgcHJldmlvdXNWYWx1ZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhIHZhbHVlIHRoYXQgd2FzIHNlbGVjdGVkIGJlZm9yZSBpcyBkZXNlbGVjdGVkIGFuZCBub3QgZm91bmQgaW4gdGhlIG9wdGlvbnMsIGl0IHdhcyBkZXNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGZpbHRlcmluZywgc28gd2UgcmVzdG9yZSBpdC5cclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHByZXZpb3VzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdG9yZVNlbGVjdGVkVmFsdWVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB2YWx1ZXM7XHJcblxyXG4gICAgICAgIGlmIChyZXN0b3JlU2VsZWN0ZWRWYWx1ZXMpIHtcclxuICAgICAgICAgIHRoaXMubWF0U2VsZWN0Ll9vbkNoYW5nZSh2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY3JvbGxzIHRoZSBjdXJyZW50bHkgYWN0aXZlIG9wdGlvbiBpbnRvIHRoZSB2aWV3IGlmIGl0IGlzIG5vdCB5ZXQgdmlzaWJsZS5cclxuICAgKi9cclxuICBwcml2YXRlIGFkanVzdFNjcm9sbFRvcFRvRml0QWN0aXZlT3B0aW9uSW50b1ZpZXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tYXRTZWxlY3QucGFuZWwgJiYgdGhpcy5tYXRTZWxlY3Qub3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG1hdE9wdGlvbkhlaWdodCA9IHRoaXMuZ2V0TWF0T3B0aW9uSGVpZ2h0KCk7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvbkluZGV4ID0gdGhpcy5tYXRTZWxlY3QuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4IHx8IDA7XHJcbiAgICAgIGNvbnN0IGxhYmVsQ291bnQgPSBfY291bnRHcm91cExhYmVsc0JlZm9yZU9wdGlvbihhY3RpdmVPcHRpb25JbmRleCwgdGhpcy5tYXRTZWxlY3Qub3B0aW9ucywgdGhpcy5tYXRTZWxlY3Qub3B0aW9uR3JvdXBzKTtcclxuICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyBpbiBhIE1hdE9wdGlvbiwgdGhlIGFjdGl2ZUl0ZW1JbmRleCB3aWxsIGJlIG9mZnNldCBieSBvbmUuXHJcbiAgICAgIGNvbnN0IGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3ID0gKHRoaXMubWF0T3B0aW9uID8gLTEgOiAwKSArIGxhYmVsQ291bnQgKyBhY3RpdmVPcHRpb25JbmRleDtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgY29uc3Qgc2VhcmNoSW5wdXRIZWlnaHQgPSB0aGlzLmlubmVyU2VsZWN0U2VhcmNoLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBjb25zdCBhbW91bnRPZlZpc2libGVPcHRpb25zID0gTWF0aC5mbG9vcigoU0VMRUNUX1BBTkVMX01BWF9IRUlHSFQgLSBzZWFyY2hJbnB1dEhlaWdodCkgLyBtYXRPcHRpb25IZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXhPZkZpcnN0VmlzaWJsZU9wdGlvbiA9IE1hdGgucm91bmQoKGN1cnJlbnRTY3JvbGxUb3AgKyBzZWFyY2hJbnB1dEhlaWdodCkgLyBtYXRPcHRpb25IZWlnaHQpIC0gMTtcclxuXHJcbiAgICAgIGlmIChpbmRleE9mRmlyc3RWaXNpYmxlT3B0aW9uID49IGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3KSB7XHJcbiAgICAgICAgdGhpcy5tYXRTZWxlY3QucGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldyAqIG1hdE9wdGlvbkhlaWdodDtcclxuICAgICAgfSBlbHNlIGlmIChpbmRleE9mRmlyc3RWaXNpYmxlT3B0aW9uICsgYW1vdW50T2ZWaXNpYmxlT3B0aW9ucyA8PSBpbmRleE9mT3B0aW9uVG9GaXRJbnRvVmlldykge1xyXG4gICAgICAgIHRoaXMubWF0U2VsZWN0LnBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gKGluZGV4T2ZPcHRpb25Ub0ZpdEludG9WaWV3ICsgMSkgKiBtYXRPcHRpb25IZWlnaHRcclxuICAgICAgICAgIC0gKFNFTEVDVF9QQU5FTF9NQVhfSEVJR0hUIC0gc2VhcmNoSW5wdXRIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgU2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5uZXJTZWxlY3RTZWFyY2ggdG8gZml0IGV2ZW4gY3VzdG9tIHNjcm9sbGJhcnNcclxuICAgKiAgQW5kIHN1cHBvcnQgYWxsIE9wZXJhdGlvbiBTeXN0ZW1zXHJcbiAgICovXHJcbiAgcHVibGljIHVwZGF0ZUlucHV0V2lkdGgoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5uZXJTZWxlY3RTZWFyY2ggfHwgIXRoaXMuaW5uZXJTZWxlY3RTZWFyY2gubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmlubmVyU2VsZWN0U2VhcmNoLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBsZXQgcGFuZWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF0LXNlbGVjdC1wYW5lbCcpKSB7XHJcbiAgICAgICAgcGFuZWxFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhbmVsRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlubmVyU2VsZWN0U2VhcmNoLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBwYW5lbEVsZW1lbnQuY2xpZW50V2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXRPcHRpb25IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLm1hdFNlbGVjdC5vcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWF0U2VsZWN0Lm9wdGlvbnMuZmlyc3QuX2dldEhvc3RFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHRoZSBvZmZzZXQgdG8gbGVuZ3RoIHRoYXQgY2FuIGJlIGNhdXNlZCBieSB0aGUgb3B0aW9uYWwgbWF0T3B0aW9uIHVzZWQgYXMgYSBzZWFyY2ggaW5wdXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zTGVuZ3RoT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5tYXRPcHRpb24pIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==