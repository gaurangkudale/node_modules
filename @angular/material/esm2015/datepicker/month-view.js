/**
 * @fileoverview added by tsickle
 * Generated from: src/material/datepicker/month-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOWN_ARROW, END, ENTER, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW, SPACE, } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, ViewEncapsulation, ViewChild, } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Directionality } from '@angular/cdk/bidi';
import { MatCalendarBody, MatCalendarCell } from './calendar-body';
import { createMissingDateImplError } from './datepicker-errors';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/core';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './calendar-body';

function MatMonthView_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("aria-label", day_r1.long);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r1.narrow);
} }
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 * @template D
 */
export class MatMonthView {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dateFormats
     * @param {?} _dateAdapter
     * @param {?=} _dir
     */
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = Subscription.EMPTY;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new EventEmitter();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     * @return {?}
     */
    get activeDate() { return this._activeDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        this._selectedDate = this._getDateInCurrentMonth(this._selected);
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() { return this._minDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() { return this._maxDate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(startWith(null))
            .subscribe((/**
         * @return {?}
         */
        () => this._init()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    _dateSelected(date) {
        if (this._selectedDate != date) {
            /** @type {?} */
            const selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */
            const selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */
            const selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit();
    }
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        /** @type {?} */
        const oldActiveDate = this._activeDate;
        /** @type {?} */
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case LEFT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case RIGHT_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case UP_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case DOWN_ARROW:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case HOME:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case END:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case PAGE_UP:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case PAGE_DOWN:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case ENTER:
            case SPACE:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected(this._dateAdapter.getDate(this._activeDate));
                    this._userSelection.emit();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /**
     * Initializes this month view.
     * @return {?}
     */
    _init() {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        /** @type {?} */
        let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Initializes the weekdays.
     * @private
     * @return {?}
     */
    _initWeekdays() {
        /** @type {?} */
        const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        /** @type {?} */
        const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        /** @type {?} */
        const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        /** @type {?} */
        let weekdays = longWeekdays.map((/**
         * @param {?} long
         * @param {?} i
         * @return {?}
         */
        (long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        }));
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /**
     * Creates MatCalendarCells for the dates in this month.
     * @private
     * @return {?}
     */
    _createWeekCells() {
        /** @type {?} */
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        /** @type {?} */
        const dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            /** @type {?} */
            const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */
            const enabled = this._shouldEnableDate(date);
            /** @type {?} */
            const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            /** @type {?} */
            const cellClasses = this.dateClass ? this.dateClass(date) : undefined;
            this._weeks[this._weeks.length - 1]
                .push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
        }
    }
    /**
     * Date filter for the month
     * @private
     * @param {?} date
     * @return {?}
     */
    _shouldEnableDate(date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @private
     * @param {?} date
     * @return {?}
     */
    _getDateInCurrentMonth(date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    }
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @private
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    _hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    _getValidDateOrNull(obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    }
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
}
MatMonthView.ɵfac = function MatMonthView_Factory(t) { return new (t || MatMonthView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(MAT_DATE_FORMATS, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
MatMonthView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatMonthView, selectors: [["mat-month-view"]], viewQuery: function MatMonthView_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatCalendarBody, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", activeDateChange: "activeDateChange" }, exportAs: ["matMonthView"], decls: 7, vars: 7, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "activeCell", "selectedValueChange", "keydown"], ["scope", "col"]], template: function MatMonthView_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵelementStart(1, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tr");
        ɵngcc0.ɵɵtemplate(3, MatMonthView_th_3_Template, 2, 2, "th", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "tr");
        ɵngcc0.ɵɵelement(5, "th", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "tbody", 4);
        ɵngcc0.ɵɵlistener("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) { return ctx._dateSelected($event); })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._weekdays);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("selectedValue", ctx._selectedDate)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc4.MatCalendarBody], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatMonthView.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DATE_FORMATS,] }] },
    { type: DateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
MatMonthView.propDecorators = {
    activeDate: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    dateClass: [{ type: Input }],
    selectedChange: [{ type: Output }],
    _userSelection: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _matCalendarBody: [{ type: ViewChild, args: [MatCalendarBody,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMonthView, [{
        type: Component,
        args: [{
                selector: 'mat-month-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [selectedValue]=\"_selectedDate!\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMonthView',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_DATE_FORMATS]
            }] }, { type: ɵngcc1.DateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { selectedChange: [{
            type: Output
        }], _userSelection: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateFilter: [{
            type: Input
        }], dateClass: [{
            type: Input
        }], _matCalendarBody: [{
            type: ViewChild,
            args: [MatCalendarBody]
        }] }); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._rerenderSubscription;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._activeDate;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._minDate;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._maxDate;
    /**
     * Function used to filter which dates are selectable.
     * @type {?}
     */
    MatMonthView.prototype.dateFilter;
    /**
     * Function that can be used to add custom CSS classes to dates.
     * @type {?}
     */
    MatMonthView.prototype.dateClass;
    /**
     * Emits when a new date is selected.
     * @type {?}
     */
    MatMonthView.prototype.selectedChange;
    /**
     * Emits when any date is selected.
     * @type {?}
     */
    MatMonthView.prototype._userSelection;
    /**
     * Emits when any date is activated.
     * @type {?}
     */
    MatMonthView.prototype.activeDateChange;
    /**
     * The body of calendar table
     * @type {?}
     */
    MatMonthView.prototype._matCalendarBody;
    /**
     * The label for this month (e.g. "January 2017").
     * @type {?}
     */
    MatMonthView.prototype._monthLabel;
    /**
     * Grid of calendar cells representing the dates of the month.
     * @type {?}
     */
    MatMonthView.prototype._weeks;
    /**
     * The number of blank cells in the first row before the 1st of the month.
     * @type {?}
     */
    MatMonthView.prototype._firstWeekOffset;
    /**
     * The date of the month that the currently selected Date falls on.
     * Null if the currently selected Date is in another month.
     * @type {?}
     */
    MatMonthView.prototype._selectedDate;
    /**
     * The date of the month that today falls on. Null if today is in another month.
     * @type {?}
     */
    MatMonthView.prototype._todayDate;
    /**
     * The names of the weekdays.
     * @type {?}
     */
    MatMonthView.prototype._weekdays;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._dateFormats;
    /** @type {?} */
    MatMonthView.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    MatMonthView.prototype._dir;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RhdGVwaWNrZXIvbW9udGgtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEdBQUcsRUFDSCxLQUFLLEVBQ0wsSUFBSSxFQUNKLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxHQUNOLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3JGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBNEIsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFULGFBQWEsR0FBRyxDQUFDO0FBQ3ZCO0FBRUU7QUFDdUU7QUFDekQ7QUFFTjtBQU9WLE1BQU0sT0FBTyxZQUFZO0FBQUc7QUFBUTtBQUNqQztBQUErQjtBQUc5QjtBQUF3QjtBQUFRLElBK0VsQyxZQUFvQixrQkFBcUMsRUFDQyxZQUE0QixFQUN2RCxZQUE0QixFQUMzQixJQUFxQjtBQUN2RCxRQUpzQix1QkFB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QztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERPV05fQVJST1csXG4gIEVORCxcbiAgRU5URVIsXG4gIEhPTUUsXG4gIExFRlRfQVJST1csXG4gIFBBR0VfRE9XTixcbiAgUEFHRV9VUCxcbiAgUklHSFRfQVJST1csXG4gIFVQX0FSUk9XLFxuICBTUEFDRSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNYXREYXRlRm9ybWF0c30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge01hdENhbGVuZGFyQm9keSwgTWF0Q2FsZW5kYXJDZWxsLCBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzfSBmcm9tICcuL2NhbGVuZGFyLWJvZHknO1xuaW1wb3J0IHtjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcn0gZnJvbSAnLi9kYXRlcGlja2VyLWVycm9ycyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xuXG5cbi8qKlxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHNpbmdsZSBtb250aCBpbiB0aGUgZGF0ZXBpY2tlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LW1vbnRoLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXZpZXcuaHRtbCcsXG4gIGV4cG9ydEFzOiAnbWF0TW9udGhWaWV3JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0TW9udGhWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIHRvIGRpc3BsYXkgaW4gdGhpcyBtb250aCB2aWV3IChldmVyeXRoaW5nIG90aGVyIHRoYW4gdGhlIG1vbnRoIGFuZCB5ZWFyIGlzIGlnbm9yZWQpLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7IHJldHVybiB0aGlzLl9hY3RpdmVEYXRlOyB9XG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XG4gICAgY29uc3Qgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XG4gICAgY29uc3QgdmFsaWREYXRlID1cbiAgICAgICAgdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSkgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIudG9kYXkoKTtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuY2xhbXBEYXRlKHZhbGlkRGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xuICAgIGlmICghdGhpcy5faGFzU2FtZU1vbnRoQW5kWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xuXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9zZWxlY3RlZDsgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5fc2VsZWN0ZWQpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9taW5EYXRlOyB9XG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7IHJldHVybiB0aGlzLl9tYXhEYXRlOyB9XG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgfVxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcblxuICAvKiogRnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBjdXN0b20gQ1NTIGNsYXNzZXMgdG8gZGF0ZXMuICovXG4gIEBJbnB1dCgpIGRhdGVDbGFzczogKGRhdGU6IEQpID0+IE1hdENhbGVuZGFyQ2VsbENzc0NsYXNzZXM7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RCB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxEIHwgbnVsbD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiBhbnkgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IF91c2VyU2VsZWN0aW9uOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gYW55IGRhdGUgaXMgYWN0aXZhdGVkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPEQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKiBUaGUgYm9keSBvZiBjYWxlbmRhciB0YWJsZSAqL1xuICBAVmlld0NoaWxkKE1hdENhbGVuZGFyQm9keSkgX21hdENhbGVuZGFyQm9keTogTWF0Q2FsZW5kYXJCb2R5O1xuXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoaXMgbW9udGggKGUuZy4gXCJKYW51YXJ5IDIwMTdcIikuICovXG4gIF9tb250aExhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguICovXG4gIF93ZWVrczogTWF0Q2FsZW5kYXJDZWxsW11bXTtcblxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyBpbiB0aGUgZmlyc3Qgcm93IGJlZm9yZSB0aGUgMXN0IG9mIHRoZSBtb250aC4gKi9cbiAgX2ZpcnN0V2Vla09mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBvZiB0aGUgbW9udGggdGhhdCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIERhdGUgZmFsbHMgb24uXG4gICAqIE51bGwgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBEYXRlIGlzIGluIGFub3RoZXIgbW9udGguXG4gICAqL1xuICBfc2VsZWN0ZWREYXRlOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKiBUaGUgZGF0ZSBvZiB0aGUgbW9udGggdGhhdCB0b2RheSBmYWxscyBvbi4gTnVsbCBpZiB0b2RheSBpcyBpbiBhbm90aGVyIG1vbnRoLiAqL1xuICBfdG9kYXlEYXRlOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKiBUaGUgbmFtZXMgb2YgdGhlIHdlZWtkYXlzLiAqL1xuICBfd2Vla2RheXM6IHtsb25nOiBzdHJpbmcsIG5hcnJvdzogc3RyaW5nfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZUZvcm1hdHMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPEQ+LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI/OiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKCdEYXRlQWRhcHRlcicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcignTUFUX0RBVEVfRk9STUFUUycpO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci50b2RheSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gdGhpcy5fZGF0ZUFkYXB0ZXIubG9jYWxlQ2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9pbml0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cbiAgX2RhdGVTZWxlY3RlZChkYXRlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWREYXRlICE9IGRhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkWWVhciA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuY3JlYXRlRGF0ZShzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIGRhdGUpO1xuXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cbiAgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUT0RPKG1tYWxlcmJhKTogV2UgY3VycmVudGx5IGFsbG93IGtleWJvYXJkIG5hdmlnYXRpb24gdG8gZGlzYWJsZWQgZGF0ZXMsIGJ1dCBqdXN0IHByZXZlbnRcbiAgICAvLyBkaXNhYmxlZCBvbmVzIGZyb20gYmVpbmcgc2VsZWN0ZWQuIFRoaXMgbWF5IG5vdCBiZSBpZGVhbCwgd2Ugc2hvdWxkIGxvb2sgaW50byB3aGV0aGVyXG4gICAgLy8gbmF2aWdhdGlvbiBzaG91bGQgc2tpcCBvdmVyIGRpc2FibGVkIGRhdGVzLCBhbmQgaWYgc28sIGhvdyB0byBpbXBsZW1lbnQgdGhhdCBlZmZpY2llbnRseS5cblxuICAgIGNvbnN0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xuICAgIGNvbnN0IGlzUnRsID0gdGhpcy5faXNSdGwoKTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgaXNSdGwgPyAxIDogLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCBpc1J0bCA/IC0xIDogMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIC03KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCA3KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhPTUU6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLFxuICAgICAgICAgICAgMSAtIHRoaXMuX2RhdGVBZGFwdGVyLmdldERhdGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSxcbiAgICAgICAgICAgICh0aGlzLl9kYXRlQWRhcHRlci5nZXROdW1EYXlzSW5Nb250aCh0aGlzLl9hY3RpdmVEYXRlKSAtXG4gICAgICAgICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldERhdGUodGhpcy5fYWN0aXZlRGF0ZSkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfVVA6XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XG4gICAgICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XG4gICAgICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0RPV046XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XG4gICAgICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICBpZiAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIodGhpcy5fYWN0aXZlRGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlU2VsZWN0ZWQodGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSk7XG4gICAgICAgICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XG4gICAgICAgICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGUob2xkQWN0aXZlRGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c0FjdGl2ZUNlbGwoKTtcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtb250aCB2aWV3LiAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5fdG9kYXlEYXRlID0gdGhpcy5fZ2V0RGF0ZUluQ3VycmVudE1vbnRoKHRoaXMuX2RhdGVBZGFwdGVyLnRvZGF5KCkpO1xuICAgIHRoaXMuX21vbnRoTGFiZWwgPVxuICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aE5hbWVzKCdzaG9ydCcpW3RoaXMuX2RhdGVBZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSldXG4gICAgICAgICAgICAudG9Mb2NhbGVVcHBlckNhc2UoKTtcblxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9kYXRlQWRhcHRlci5jcmVhdGVEYXRlKHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgMSk7XG4gICAgdGhpcy5fZmlyc3RXZWVrT2Zmc2V0ID1cbiAgICAgICAgKERBWVNfUEVSX1dFRUsgKyB0aGlzLl9kYXRlQWRhcHRlci5nZXREYXlPZldlZWsoZmlyc3RPZk1vbnRoKSAtXG4gICAgICAgICB0aGlzLl9kYXRlQWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpKSAlIERBWVNfUEVSX1dFRUs7XG5cbiAgICB0aGlzLl9pbml0V2Vla2RheXMoKTtcbiAgICB0aGlzLl9jcmVhdGVXZWVrQ2VsbHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBhY3RpdmUgY2VsbCBhZnRlciB0aGUgbWljcm90YXNrIHF1ZXVlIGlzIGVtcHR5LiAqL1xuICBfZm9jdXNBY3RpdmVDZWxsKCkge1xuICAgIHRoaXMuX21hdENhbGVuZGFyQm9keS5fZm9jdXNBY3RpdmVDZWxsKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhlIHdlZWtkYXlzLiAqL1xuICBwcml2YXRlIF9pbml0V2Vla2RheXMoKSB7XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpO1xuICAgIGNvbnN0IG5hcnJvd1dlZWtkYXlzID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoJ25hcnJvdycpO1xuICAgIGNvbnN0IGxvbmdXZWVrZGF5cyA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldERheU9mV2Vla05hbWVzKCdsb25nJyk7XG5cbiAgICAvLyBSb3RhdGUgdGhlIGxhYmVscyBmb3IgZGF5cyBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgY29uZmlndXJlZCBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgbGV0IHdlZWtkYXlzID0gbG9uZ1dlZWtkYXlzLm1hcCgobG9uZywgaSkgPT4ge1xuICAgICAgICByZXR1cm4ge2xvbmcsIG5hcnJvdzogbmFycm93V2Vla2RheXNbaV19O1xuICAgIH0pO1xuICAgIHRoaXMuX3dlZWtkYXlzID0gd2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLmNvbmNhdCh3ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgTWF0Q2FsZW5kYXJDZWxscyBmb3IgdGhlIGRhdGVzIGluIHRoaXMgbW9udGguICovXG4gIHByaXZhdGUgX2NyZWF0ZVdlZWtDZWxscygpIHtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgY29uc3QgZGF0ZU5hbWVzID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0RGF0ZU5hbWVzKCk7XG4gICAgdGhpcy5fd2Vla3MgPSBbW11dO1xuICAgIGZvciAobGV0IGkgPSAwLCBjZWxsID0gdGhpcy5fZmlyc3RXZWVrT2Zmc2V0OyBpIDwgZGF5c0luTW9udGg7IGkrKywgY2VsbCsrKSB7XG4gICAgICBpZiAoY2VsbCA9PSBEQVlTX1BFUl9XRUVLKSB7XG4gICAgICAgIHRoaXMuX3dlZWtzLnB1c2goW10pO1xuICAgICAgICBjZWxsID0gMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5jcmVhdGVEYXRlKFxuICAgICAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICAgICAgdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSwgaSArIDEpO1xuICAgICAgY29uc3QgZW5hYmxlZCA9IHRoaXMuX3Nob3VsZEVuYWJsZURhdGUoZGF0ZSk7XG4gICAgICBjb25zdCBhcmlhTGFiZWwgPSB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQoZGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlQTExeUxhYmVsKTtcbiAgICAgIGNvbnN0IGNlbGxDbGFzc2VzID0gdGhpcy5kYXRlQ2xhc3MgPyB0aGlzLmRhdGVDbGFzcyhkYXRlKSA6IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy5fd2Vla3NbdGhpcy5fd2Vla3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAucHVzaChuZXcgTWF0Q2FsZW5kYXJDZWxsKGkgKyAxLCBkYXRlTmFtZXNbaV0sIGFyaWFMYWJlbCwgZW5hYmxlZCwgY2VsbENsYXNzZXMpKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGF0ZSBmaWx0ZXIgZm9yIHRoZSBtb250aCAqL1xuICBwcml2YXRlIF9zaG91bGRFbmFibGVEYXRlKGRhdGU6IEQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRlICYmXG4gICAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlKSkgJiZcbiAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIuY29tcGFyZURhdGUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxuICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRhdGUgaW4gdGhpcyBtb250aCB0aGF0IHRoZSBnaXZlbiBEYXRlIGZhbGxzIG9uLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cbiAgICovXG4gIHByaXZhdGUgX2dldERhdGVJbkN1cnJlbnRNb250aChkYXRlOiBEIHwgbnVsbCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiBkYXRlICYmIHRoaXMuX2hhc1NhbWVNb250aEFuZFllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA/XG4gICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldERhdGUoZGF0ZSkgOiBudWxsO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSAyIGRhdGVzIGFyZSBub24tbnVsbCBhbmQgZmFsbCB3aXRoaW4gdGhlIHNhbWUgbW9udGggb2YgdGhlIHNhbWUgeWVhci4gKi9cbiAgcHJpdmF0ZSBfaGFzU2FtZU1vbnRoQW5kWWVhcihkMTogRCB8IG51bGwsIGQyOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShkMSAmJiBkMiAmJiB0aGlzLl9kYXRlQWRhcHRlci5nZXRNb250aChkMSkgPT0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0TW9udGgoZDIpICYmXG4gICAgICAgICAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZDEpID09IHRoaXMuX2RhdGVBZGFwdGVyLmdldFllYXIoZDIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIFRoZSBnaXZlbiBvYmplY3QgaWYgaXQgaXMgYm90aCBhIGRhdGUgaW5zdGFuY2UgYW5kIHZhbGlkLCBvdGhlcndpc2UgbnVsbC5cbiAgICovXG4gIHByaXZhdGUgX2dldFZhbGlkRGF0ZU9yTnVsbChvYmo6IGFueSk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gKHRoaXMuX2RhdGVBZGFwdGVyLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XG4gIH1cblxuICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1c2VyIGhhcyB0aGUgUlRMIGxheW91dCBkaXJlY3Rpb24uICovXG4gIHByaXZhdGUgX2lzUnRsKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXIgJiYgdGhpcy5fZGlyLnZhbHVlID09PSAncnRsJztcbiAgfVxufVxuIl19