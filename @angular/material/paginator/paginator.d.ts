/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorIntl } from './paginator-intl';
import { HasInitialized, HasInitializedCtor, ThemePalette, CanDisableCtor, CanDisable } from '@angular/material/core';
/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PageEvent {
    /** The current page index. */
    pageIndex: number;
    /**
     * Index of the page that was selected previously.
     * @breaking-change 8.0.0 To be made into a required property.
     */
    previousPageIndex?: number;
    /** The current page size */
    pageSize: number;
    /** The current total number of items being paged */
    length: number;
}
/** @docs-private */
declare class MatPaginatorBase {
}
declare const _MatPaginatorBase: CanDisableCtor & HasInitializedCtor & typeof MatPaginatorBase;
/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
export declare class MatPaginator extends _MatPaginatorBase implements OnInit, OnDestroy, CanDisable, HasInitialized {
    _intl: MatPaginatorIntl;
    private _changeDetectorRef;
    private _initialized;
    private _intlChanges;
    /** Theme color to be used for the underlying form controls. */
    color: ThemePalette;
    /** The zero-based page index of the displayed list of items. Defaulted to 0. */
    get pageIndex(): number;
    set pageIndex(value: number);
    private _pageIndex;
    /** The length of the total number of items that are being paginated. Defaulted to 0. */
    get length(): number;
    set length(value: number);
    private _length;
    /** Number of items to display on a page. By default set to 50. */
    get pageSize(): number;
    set pageSize(value: number);
    private _pageSize;
    /** The set of provided page size options to display to the user. */
    get pageSizeOptions(): number[];
    set pageSizeOptions(value: number[]);
    private _pageSizeOptions;
    /** Whether to hide the page size selection UI from the user. */
    get hidePageSize(): boolean;
    set hidePageSize(value: boolean);
    private _hidePageSize;
    /** Whether to show the first/last buttons UI to the user. */
    get showFirstLastButtons(): boolean;
    set showFirstLastButtons(value: boolean);
    private _showFirstLastButtons;
    /** Event emitted when the paginator changes the page size or page index. */
    readonly page: EventEmitter<PageEvent>;
    /** Displayed set of page size options. Will be sorted and include current page size. */
    _displayedPageSizeOptions: number[];
    constructor(_intl: MatPaginatorIntl, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Advances to the next page if it exists. */
    nextPage(): void;
    /** Move back to the previous page if it exists. */
    previousPage(): void;
    /** Move to the first page if not already there. */
    firstPage(): void;
    /** Move to the last page if not already there. */
    lastPage(): void;
    /** Whether there is a previous page. */
    hasPreviousPage(): boolean;
    /** Whether there is a next page. */
    hasNextPage(): boolean;
    /** Calculate the number of pages */
    getNumberOfPages(): number;
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    _changePageSize(pageSize: number): void;
    /** Checks whether the buttons for going forwards should be disabled. */
    _nextButtonsDisabled(): boolean;
    /** Checks whether the buttons for going backwards should be disabled. */
    _previousButtonsDisabled(): boolean;
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */
    private _updateDisplayedPageSizeOptions;
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    private _emitPageEvent;
    static ngAcceptInputType_pageIndex: NumberInput;
    static ngAcceptInputType_length: NumberInput;
    static ngAcceptInputType_pageSize: NumberInput;
    static ngAcceptInputType_hidePageSize: BooleanInput;
    static ngAcceptInputType_showFirstLastButtons: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatPaginator, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatPaginator, "mat-paginator", ["matPaginator"], { "disabled": "disabled"; "pageIndex": "pageIndex"; "length": "length"; "pageSize": "pageSize"; "pageSizeOptions": "pageSizeOptions"; "hidePageSize": "hidePageSize"; "showFirstLastButtons": "showFirstLastButtons"; "color": "color"; }, { "page": "page"; }, never, never>;
}
export {};

//# sourceMappingURL=paginator.d.ts.map