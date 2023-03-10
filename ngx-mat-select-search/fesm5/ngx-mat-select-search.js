import { __decorate, __read, __param } from 'tslib';
import { Directive, EventEmitter, Inject, ChangeDetectorRef, Optional, Input, Output, ViewChild, ElementRef, ContentChild, HostBinding, Component, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { _countGroupLabelsBeforeOption, MatOption } from '@angular/material/core';
import { SELECT_PANEL_MAX_HEIGHT, MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { A, Z, ZERO, NINE, SPACE, HOME, END, ENTER, ESCAPE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { BehaviorSubject, of, combineLatest, Subject } from 'rxjs';
import { switchMap, map, startWith, delay, takeUntil, take, filter, tap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
var MatSelectSearchClearDirective = /** @class */ (function () {
    function MatSelectSearchClearDirective() {
    }
    MatSelectSearchClearDirective = __decorate([
        Directive({
            selector: '[ngxMatSelectSearchClear]'
        })
    ], MatSelectSearchClearDirective);
    return MatSelectSearchClearDirective;
}());

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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
var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef, _viewportRuler, matOption, liveAnnouncer, matFormField) {
        var _this = this;
        if (matOption === void 0) { matOption = null; }
        if (matFormField === void 0) { matFormField = null; }
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
        this.onTouched = function (_) { };
        this._options$ = new BehaviorSubject(null);
        this.optionsList$ = this._options$.pipe(switchMap(function (_options) { return _options ?
            _options.changes.pipe(map(function (options) { return options.toArray(); }), startWith(_options.toArray())) : of(null); }));
        this.optionsLength$ = this.optionsList$.pipe(map(function (options) { return options ? options.length : 0; }));
        this._formControl = new FormControl('');
        /** whether to show the no entries found message */
        this._showNoEntriesFound$ = combineLatest([
            this._formControl.valueChanges,
            this.optionsLength$
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), value = _b[0], optionsLength = _b[1];
            return _this.noEntriesFoundLabel && value
                && optionsLength === _this.getOptionsLengthOffset();
        }));
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "isInsideMatOption", {
        get: function () {
            return !!this.matOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._formControl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelectSearchComponent.prototype, "_options", {
        get: function () {
            return this._options$.getValue();
        },
        /** Reference to the MatSelect options */
        set: function (_options) {
            this._options$.next(_options);
        },
        enumerable: true,
        configurable: true
    });
    MatSelectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set custom panel class
        var panelClass = 'mat-select-search-panel';
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
            .subscribe(function (opened) {
            if (opened) {
                _this.updateInputWidth();
                // focus the search field when opening
                if (!_this.disableInitialFocus) {
                    _this._focus();
                }
            }
            else {
                // clear it when closing
                if (_this.clearSearchInput) {
                    _this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1))
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect._keyManager) {
                _this.matSelect._keyManager.change.pipe(takeUntil(_this._onDestroy))
                    .subscribe(function () { return _this.adjustScrollTopToFitActiveOptionIntoView(); });
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            _this._options = _this.matSelect.options;
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
            var previousFirstOption = _this._options.toArray()[_this.getOptionsLengthOffset()];
            _this._options.changes
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                // avoid "expression has been changed" error
                setTimeout(function () {
                    // Convert the QueryList to an array
                    var options = _this._options.toArray();
                    // The true first item is offset by 1
                    var currentFirstOption = options[_this.getOptionsLengthOffset()];
                    var keyManager = _this.matSelect._keyManager;
                    if (keyManager && _this.matSelect.panelOpen) {
                        // set first item active and input width
                        // Check to see if the first option in these changes is different from the previous.
                        var firstOptionIsChanged = !_this.matSelect.compareWith(previousFirstOption, currentFirstOption);
                        // CASE: The first option is different now.
                        // Indiciates we should set it as active and scroll to the top.
                        if (firstOptionIsChanged
                            || !keyManager.activeItem
                            || !options.find(function (option) { return _this.matSelect.compareWith(option, keyManager.activeItem); })) {
                            keyManager.setFirstItemActive();
                        }
                        // wait for panel width changes
                        setTimeout(function () {
                            _this.updateInputWidth();
                        });
                        if (!_this.disableScrollToActiveOnOptionsChanged) {
                            _this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }
                    // Update our reference
                    previousFirstOption = currentFirstOption;
                });
            });
        });
        // add or remove css class depending on whether to show the no entries found message
        // note: this is hacky
        this._showNoEntriesFound$.pipe(takeUntil(this._onDestroy)).subscribe(function (showNoEntriesFound) {
            // set no entries found class on mat option
            if (_this.matOption) {
                if (showNoEntriesFound) {
                    _this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                }
                else {
                    _this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                }
            }
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            if (_this.matSelect.panelOpen) {
                _this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
        this.optionsList$.pipe(takeUntil(this._onDestroy)).subscribe(function () {
            // update view when available options change
            _this.changeDetectorRef.markForCheck();
        });
    };
    MatSelectSearchComponent.prototype._emitSelectAllBooleanToParent = function (state) {
        this.toggleAll.emit(state);
    };
    MatSelectSearchComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MatSelectSearchComponent.prototype._isToggleAllCheckboxVisible = function () {
        return this.matSelect.multiple && this.showToggleAllCheckbox;
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    MatSelectSearchComponent.prototype._handleKeydown = function (event) {
        var _this = this;
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
            setTimeout(function () { return _this._focus(); });
        }
        // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
        if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
            this._reset(true);
            event.stopPropagation();
        }
    };
    /**
     * Handles the key up event with MatSelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    MatSelectSearchComponent.prototype._handleKeyup = function (event) {
        if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
            var ariaActiveDescendantId_1 = this.matSelect._getAriaActiveDescendant();
            var index = this._options.toArray().findIndex(function (item) { return item.id === ariaActiveDescendantId_1; });
            if (index !== -1) {
                var activeDescendant = this._options.toArray()[index];
                this.liveAnnouncer.announce(activeDescendant.viewValue + ' '
                    + this.getAriaIndex(index)
                    + this.indexAndLengthScreenReaderText
                    + this.getAriaLength());
            }
        }
    };
    /**
     * Calculate the index of the current option, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have offset of 1, due to search and will read index of total.
     *    Case 2 [1, 2, 3] will have offset of 0 and will read index +1 of total.
     */
    MatSelectSearchComponent.prototype.getAriaIndex = function (optionIndex) {
        if (this.getOptionsLengthOffset() === 0) {
            return optionIndex + 1;
        }
        return optionIndex;
    };
    /**
     * Calculate the length of the options, taking the offset to length into account.
     * examples:
     *    Case 1 [Search, 1, 2, 3] will have length of options.length -1, due to search.
     *    Case 2 [1, 2, 3] will have length of options.length.
     */
    MatSelectSearchComponent.prototype.getAriaLength = function () {
        return this._options.toArray().length - this.getOptionsLengthOffset();
    };
    MatSelectSearchComponent.prototype.writeValue = function (value) {
        this._lastExternalInputValue = value;
        this._formControl.setValue(value);
        this.changeDetectorRef.markForCheck();
    };
    MatSelectSearchComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._formControl.valueChanges.pipe(filter(function (value) { return value !== _this._lastExternalInputValue; }), tap(function () { return _this._lastExternalInputValue = undefined; }), takeUntil(this._onDestroy)).subscribe(fn);
    };
    MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     */
    MatSelectSearchComponent.prototype._focus = function () {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        var panel = this.matSelect.panel.nativeElement;
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param focus whether to focus after resetting
     */
    MatSelectSearchComponent.prototype._reset = function (focus) {
        this._formControl.setValue('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = function () {
        var _this = this;
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
            .subscribe(function (values) {
            var restoreSelectedValues = false;
            if (_this.matSelect.multiple) {
                if (_this._formControl.value && _this._formControl.value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (!values.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })
                            && !optionValues_1.some(function (v) { return _this.matSelect.compareWith(v, previousValue); })) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues = true;
                        }
                    });
                }
            }
            _this.previousSelectedValues = values;
            if (restoreSelectedValues) {
                _this.matSelect._onChange(values);
            }
        });
    };
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     */
    MatSelectSearchComponent.prototype.adjustScrollTopToFitActiveOptionIntoView = function () {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            var matOptionHeight = this.getMatOptionHeight();
            var activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            var labelCount = _countGroupLabelsBeforeOption(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            var indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            var currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            var searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            var amountOfVisibleOptions = Math.floor((SELECT_PANEL_MAX_HEIGHT - searchInputHeight) / matOptionHeight);
            var indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight
                    - (SELECT_PANEL_MAX_HEIGHT - searchInputHeight);
            }
        }
    };
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     */
    MatSelectSearchComponent.prototype.updateInputWidth = function () {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        var element = this.innerSelectSearch.nativeElement;
        var panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    };
    MatSelectSearchComponent.prototype.getMatOptionHeight = function () {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    };
    /**
     * Determine the offset to length that can be caused by the optional matOption used as a search input.
     */
    MatSelectSearchComponent.prototype.getOptionsLengthOffset = function () {
        if (this.matOption) {
            return 1;
        }
        else {
            return 0;
        }
    };
    var MatSelectSearchComponent_1;
    MatSelectSearchComponent.ctorParameters = function () { return [
        { type: MatSelect, decorators: [{ type: Inject, args: [MatSelect,] }] },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: MatOption, decorators: [{ type: Optional }, { type: Inject, args: [MatOption,] }] },
        { type: LiveAnnouncer },
        { type: MatFormField, decorators: [{ type: Optional }, { type: Inject, args: [MatFormField,] }] }
    ]; };
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "indexAndLengthScreenReaderText", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "clearSearchInput", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "searching", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "disableInitialFocus", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "enableClearOnEscapePressed", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "preventHomeEndKeyPropagation", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "disableScrollToActiveOnOptionsChanged", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "ariaLabel", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "showToggleAllCheckbox", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxChecked", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxIndeterminate", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toggleAllCheckboxTooltipMessage", void 0);
    __decorate([
        Input()
    ], MatSelectSearchComponent.prototype, "toogleAllCheckboxTooltipPosition", void 0);
    __decorate([
        Output()
    ], MatSelectSearchComponent.prototype, "toggleAll", void 0);
    __decorate([
        ViewChild('searchSelectInput', { read: ElementRef, static: true })
    ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
    __decorate([
        ViewChild('innerSelectSearch', { read: ElementRef, static: true })
    ], MatSelectSearchComponent.prototype, "innerSelectSearch", void 0);
    __decorate([
        ContentChild(MatSelectSearchClearDirective, { static: false })
    ], MatSelectSearchComponent.prototype, "clearIcon", void 0);
    __decorate([
        HostBinding('class.mat-select-search-inside-mat-option')
    ], MatSelectSearchComponent.prototype, "isInsideMatOption", null);
    MatSelectSearchComponent = MatSelectSearchComponent_1 = __decorate([
        Component({
            selector: 'ngx-mat-select-search',
            template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\r\n<div\r\n      #innerSelectSearch\r\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\r\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\r\n\r\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\r\n                [color]=\"matFormField?.color\"\r\n                class=\"mat-select-search-toggle-all-checkbox\"\r\n                [checked]=\"toggleAllCheckboxChecked\"\r\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\r\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\r\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\r\n                [matTooltipPosition]=\"toogleAllCheckboxTooltipPosition\"\r\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\r\n  ></mat-checkbox>\r\n\r\n  <input class=\"mat-select-search-input mat-input-element\"\r\n         autocomplete=\"off\"\r\n         [type]=\"type\"\r\n         [formControl]=\"_formControl\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (keyup)=\"_handleKeyup($event)\"\r\n         (blur)=\"onBlur()\"\r\n         [placeholder]=\"placeholderLabel\"\r\n         [attr.aria-label]=\"ariaLabel\"\r\n  />\r\n  <mat-spinner *ngIf=\"searching\"\r\n          class=\"mat-select-search-spinner\"\r\n          diameter=\"16\"></mat-spinner>\r\n\r\n  <button mat-button\r\n          *ngIf=\"value && !searching\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\r\n    <ng-template #defaultIcon>\r\n      <mat-icon>close</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"_showNoEntriesFound$ | async\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  {{noEntriesFoundLabel}}\r\n</div>\r\n<!--\r\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\r\n\r\nUse of this source code is governed by an MIT-style license that can be\r\nfound in the LICENSE file at https://angular.io/license\r\n-->\r\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:4px 4px 0 0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}::ng-deep .mat-select-search-panel{transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 44px 16px 16px;box-sizing:border-box;width:100%}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}::ng-deep .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:16px}"]
        }),
        __param(0, Inject(MatSelect)),
        __param(3, Optional()), __param(3, Inject(MatOption)),
        __param(5, Optional()), __param(5, Inject(MatFormField))
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
}());

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MatSelectSearchVersion = '3.1.4';
var NgxMatSelectSearchModule = /** @class */ (function () {
    function NgxMatSelectSearchModule() {
    }
    NgxMatSelectSearchModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatProgressSpinnerModule,
                MatTooltipModule
            ],
            declarations: [
                MatSelectSearchComponent,
                MatSelectSearchClearDirective
            ],
            exports: [
                MatSelectSearchComponent,
                MatSelectSearchClearDirective
            ]
        })
    ], NgxMatSelectSearchModule);
    return NgxMatSelectSearchModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, MatSelectSearchClearDirective as ??a };
//# sourceMappingURL=ngx-mat-select-search.js.map
