/**
 * @fileoverview added by tsickle
 * Generated from: src/material/datepicker/datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, InjectionToken, Input, NgZone, Optional, Output, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { DateAdapter, mixinColor, } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { MatCalendar } from './calendar';
import { matDatepickerAnimations } from './datepicker-animations';
import { createMissingDateImplError } from './datepicker-errors';
/**
 * Used to generate a unique ID for each datepicker instance.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './calendar';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/dialog';
import * as ɵngcc5 from '@angular/cdk/overlay';
import * as ɵngcc6 from '@angular/material/core';
import * as ɵngcc7 from '@angular/cdk/bidi';
let datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 * @type {?}
 */
export const MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken('mat-datepicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
export function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
export const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
class MatDatepickerContentBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatDatepickerContentBase.prototype._elementRef;
}
/** @type {?} */
const _MatDatepickerContentMixinBase = mixinColor(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
export class MatDatepickerContent extends _MatDatepickerContentMixinBase {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._calendar.focusActiveCell();
    }
}
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) { return new (t || MatDatepickerContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatDatepickerContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDatepickerContent, selectors: [["mat-datepicker-content"]], viewQuery: function MatDatepickerContent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatCalendar, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._calendar = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵupdateSyntheticHostBinding("@transformPanel", "enter");
        ɵngcc0.ɵɵclassProp("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 11, consts: [["cdkTrapFocus", "", 3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected", "_userSelection"]], template: function MatDatepickerContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mat-calendar", 0);
        ɵngcc0.ɵɵlistener("selectedChange", function MatDatepickerContent_Template_mat_calendar_selectedChange_0_listener($event) { return ctx.datepicker.select($event); })("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_0_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_0_listener($event) { return ctx.datepicker._selectMonth($event); })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_0_listener() { return ctx.datepicker.close(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._minDate)("maxDate", ctx.datepicker._maxDate)("dateFilter", ctx.datepicker._dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker._selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
    } }, directives: [ɵngcc1.MatCalendar, ɵngcc2.CdkTrapFocus, ɵngcc3.NgClass], styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
/** @nocollapse */
MatDatepickerContent.ctorParameters = () => [
    { type: ElementRef }
];
MatDatepickerContent.propDecorators = {
    _calendar: [{ type: ViewChild, args: [MatCalendar,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerContent, [{
        type: Component,
        args: [{
                selector: 'mat-datepicker-content',
                template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._minDate\"\n    [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"datepicker._selected\"\n    [dateClass]=\"datepicker.dateClass\"\n    [@fadeInCalendar]=\"'enter'\"\n    (selectedChange)=\"datepicker.select($event)\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"datepicker.close()\">\n</mat-calendar>\n",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '"enter"',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'matDatepickerContent',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { _calendar: [{
            type: ViewChild,
            args: [MatCalendar]
        }] }); })();
if (false) {
    /**
     * Reference to the internal calendar component.
     * @type {?}
     */
    MatDatepickerContent.prototype._calendar;
    /**
     * Reference to the datepicker that created the overlay.
     * @type {?}
     */
    MatDatepickerContent.prototype.datepicker;
    /**
     * Whether the datepicker is above or below the input.
     * @type {?}
     */
    MatDatepickerContent.prototype._isAbove;
}
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/**
 * Component responsible for managing the datepicker popup/dialog.
 * @template D
 */
export class MatDatepicker {
    /**
     * @param {?} _dialog
     * @param {?} _overlay
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} scrollStrategy
     * @param {?} _dateAdapter
     * @param {?} _dir
     * @param {?} _document
     */
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new EventEmitter();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new EventEmitter();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new EventEmitter();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new EventEmitter();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = `mat-datepicker-${datepickerUid++}`;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = Subscription.EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new Subject();
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /**
     * The date to open the calendar to initially.
     * @return {?}
     */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startAt(value) {
        this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * Color palette to use on the datepicker's calendar.
     * @return {?}
     */
    get color() {
        return this._color ||
            (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     * @return {?}
     */
    get touchUi() { return this._touchUi; }
    /**
     * @param {?} value
     * @return {?}
     */
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    /**
     * Whether the datepicker pop-up should be disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined && this._datepickerInput ?
            this._datepickerInput.disabled : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }
    /**
     * Whether the calendar is open.
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) { value ? this.open() : this.close(); }
    /**
     * The currently selected date.
     * @return {?}
     */
    get _selected() { return this._validSelected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set _selected(value) { this._validSelected = value; }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get _minDate() {
        return this._datepickerInput && this._datepickerInput.min;
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get _maxDate() {
        return this._datepickerInput && this._datepickerInput.max;
    }
    /**
     * @return {?}
     */
    get _dateFilter() {
        return this._datepickerInput && this._datepickerInput._dateFilter;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    }
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    select(date) {
        /** @type {?} */
        let oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
        }
    }
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    _registerInput(input) {
        if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => this._selected = value));
    }
    /**
     * Open the calendar.
     * @return {?}
     */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /**
     * Close the calendar.
     * @return {?}
     */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        /** @type {?} */
        const completeClose = (/**
         * @return {?}
         */
        () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        });
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    _openAsDialog() {
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        () => this.close()));
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    }
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    _openAsPopup() {
        if (!this._calendarPortal) {
            this._calendarPortal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._popupRef.updatePosition();
            }));
        }
    }
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    _createPopup() {
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === ESCAPE ||
                (this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        }));
    }
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    _createPopupPositionStrategy() {
        return this._overlay.position()
            .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
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
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    _setColor() {
        /** @type {?} */
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
MatDatepicker.ɵfac = function MatDatepicker_Factory(t) { return new (t || MatDatepicker)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.MatDialog), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(MAT_DATEPICKER_SCROLL_STRATEGY), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.DateAdapter, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8)); };
MatDatepicker.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDatepicker, selectors: [["mat-datepicker"]], inputs: { startView: "startView", startAt: "startAt", color: "color", touchUi: "touchUi", disabled: "disabled", opened: "opened", calendarHeaderComponent: "calendarHeaderComponent", panelClass: "panelClass", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", openedStream: "opened", closedStream: "closed" }, exportAs: ["matDatepicker"], decls: 0, vars: 0, template: function MatDatepicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatDatepicker.ctorParameters = () => [
    { type: MatDialog },
    { type: Overlay },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: DateAdapter, decorators: [{ type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
MatDatepicker.propDecorators = {
    calendarHeaderComponent: [{ type: Input }],
    startAt: [{ type: Input }],
    startView: [{ type: Input }],
    color: [{ type: Input }],
    touchUi: [{ type: Input }],
    disabled: [{ type: Input }],
    yearSelected: [{ type: Output }],
    monthSelected: [{ type: Output }],
    panelClass: [{ type: Input }],
    dateClass: [{ type: Input }],
    openedStream: [{ type: Output, args: ['opened',] }],
    closedStream: [{ type: Output, args: ['closed',] }],
    opened: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepicker, [{
        type: Component,
        args: [{
                selector: 'mat-datepicker',
                template: '',
                exportAs: 'matDatepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc4.MatDialog }, { type: ɵngcc5.Overlay }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: ɵngcc6.DateAdapter, decorators: [{
                type: Optional
            }] }, { type: ɵngcc7.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { startView: [{
            type: Input
        }], yearSelected: [{
            type: Output
        }], monthSelected: [{
            type: Output
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }], startAt: [{
            type: Input
        }], color: [{
            type: Input
        }], touchUi: [{
            type: Input
        }], disabled: [{
            type: Input
        }], opened: [{
            type: Input
        }], calendarHeaderComponent: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], dateClass: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    MatDatepicker.ngAcceptInputType_disabled;
    /** @type {?} */
    MatDatepicker.ngAcceptInputType_touchUi;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._scrollStrategy;
    /**
     * An input indicating the type of the custom header component for the calendar, if set.
     * @type {?}
     */
    MatDatepicker.prototype.calendarHeaderComponent;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._startAt;
    /**
     * The view that the calendar should start in.
     * @type {?}
     */
    MatDatepicker.prototype.startView;
    /** @type {?} */
    MatDatepicker.prototype._color;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._touchUi;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._disabled;
    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    MatDatepicker.prototype.yearSelected;
    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     * @type {?}
     */
    MatDatepicker.prototype.monthSelected;
    /**
     * Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`.
     * @type {?}
     */
    MatDatepicker.prototype.panelClass;
    /**
     * Function that can be used to add custom CSS classes to dates.
     * @type {?}
     */
    MatDatepicker.prototype.dateClass;
    /**
     * Emits when the datepicker has been opened.
     * @type {?}
     */
    MatDatepicker.prototype.openedStream;
    /**
     * Emits when the datepicker has been closed.
     * @type {?}
     */
    MatDatepicker.prototype.closedStream;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._opened;
    /**
     * The id for the datepicker calendar.
     * @type {?}
     */
    MatDatepicker.prototype.id;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._validSelected;
    /**
     * A reference to the overlay when the calendar is opened as a popup.
     * @type {?}
     */
    MatDatepicker.prototype._popupRef;
    /**
     * A reference to the dialog when the calendar is opened as a dialog.
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._dialogRef;
    /**
     * A portal containing the calendar for this datepicker.
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._calendarPortal;
    /**
     * Reference to the component instantiated in popup mode.
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._popupComponentRef;
    /**
     * The element that was focused before the datepicker was opened.
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._focusedElementBeforeOpen;
    /**
     * Subscription to value changes in the associated input element.
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._inputSubscription;
    /**
     * The input element this datepicker is associated with.
     * @type {?}
     */
    MatDatepicker.prototype._datepickerInput;
    /**
     * Emits when the datepicker is disabled.
     * @type {?}
     */
    MatDatepicker.prototype._disabledChange;
    /**
     * Emits new selected date when selected date changes.
     * @type {?}
     */
    MatDatepicker.prototype._selectedChanged;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._dialog;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._dateAdapter;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    MatDatepicker.prototype._document;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLGFBQWEsR0FJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxlQUFlLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFDbkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUdMLFdBQVcsRUFDWCxVQUFVLEdBRVgsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUMsU0FBUyxFQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUN2QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVB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aUI7QUFBUSxJQUE1Qix5Q0FBNkM7QUFDL0M7QUFDTztBQUFpQjtBQUFnQjtBQUNsQyxJQURRLGdDQUEwQjtBQUFDO0FBQ2xDO0FBQWlCO0FBQWdCO0FBQ2pDLElBRE8saUNBQXlCO0FBQUM7QUFDakM7QUFBaUI7QUFDdkI7QUFBUSxJQURLLGdDQUF1QjtBQUFDO0FBQy9CO0FBQWlCO0FBQWdCO0FBQVEsSUFBbEMsMENBQTJDO0FBQUM7QUFDbkQ7QUFBaUI7QUFBZ0I7QUFBUSxJQUNsQyxxQ0FBZ0Q7QUFBQztBQUN4RDtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLDZCQUF3QztBQUFDO0FBQ2hEO0FBQWlCO0FBQWdCO0FBQVEsSUFBbEMsa0NBQW9EO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtFU0NBUEUsIFVQX0FSUk9XfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneSxcbiAgU2Nyb2xsU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7Q29tcG9uZW50UG9ydGFsLCBDb21wb25lbnRUeXBlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkNvbG9yLFxuICBDYW5Db2xvckN0b3IsXG4gIERhdGVBZGFwdGVyLFxuICBtaXhpbkNvbG9yLFxuICBUaGVtZVBhbGV0dGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7bWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNYXRDYWxlbmRhcn0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQge21hdERhdGVwaWNrZXJBbmltYXRpb25zfSBmcm9tICcuL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQge2NyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yfSBmcm9tICcuL2RhdGVwaWNrZXItZXJyb3JzJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlcklucHV0fSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQnO1xuaW1wb3J0IHtNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzfSBmcm9tICcuL2NhbGVuZGFyLWJvZHknO1xuXG4vKiogVXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZWFjaCBkYXRlcGlja2VyIGluc3RhbmNlLiAqL1xubGV0IGRhdGVwaWNrZXJVaWQgPSAwO1xuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgZGV0ZXJtaW5lcyB0aGUgc2Nyb2xsIGhhbmRsaW5nIHdoaWxlIHRoZSBjYWxlbmRhciBpcyBvcGVuLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPCgpID0+IFNjcm9sbFN0cmF0ZWd5PignbWF0LWRhdGVwaWNrZXItc2Nyb2xsLXN0cmF0ZWd5Jyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6ICgpID0+IFNjcm9sbFN0cmF0ZWd5IHtcbiAgcmV0dXJuICgpID0+IG92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCk7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTUFUX0RBVEVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUllfUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSxcbiAgZGVwczogW092ZXJsYXldLFxuICB1c2VGYWN0b3J5OiBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWSxcbn07XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0RGF0ZXBpY2tlckNvbnRlbnQuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0RGF0ZXBpY2tlckNvbnRlbnRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cbn1cbmNvbnN0IF9NYXREYXRlcGlja2VyQ29udGVudE1peGluQmFzZTogQ2FuQ29sb3JDdG9yICYgdHlwZW9mIE1hdERhdGVwaWNrZXJDb250ZW50QmFzZSA9XG4gICAgbWl4aW5Db2xvcihNYXREYXRlcGlja2VyQ29udGVudEJhc2UpO1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIGFzIHRoZSBjb250ZW50IGZvciB0aGUgZGF0ZXBpY2tlciBkaWFsb2cgYW5kIHBvcHVwLiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIHVzaW5nXG4gKiBNYXRDYWxlbmRhciBkaXJlY3RseSBhcyB0aGUgY29udGVudCBzbyB3ZSBjYW4gY29udHJvbCB0aGUgaW5pdGlhbCBmb2N1cy4gVGhpcyBhbHNvIGdpdmVzIHVzIGFcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY2FsZW5kYXIgaXRzZWxmIGluIHRoZVxuICogZnV0dXJlLiAoZS5nLiBjb25maXJtYXRpb24gYnV0dG9ucykuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1kYXRlcGlja2VyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItY29udGVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItY29udGVudC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZGF0ZXBpY2tlci1jb250ZW50JyxcbiAgICAnW0B0cmFuc2Zvcm1QYW5lbF0nOiAnXCJlbnRlclwiJyxcbiAgICAnW2NsYXNzLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2hdJzogJ2RhdGVwaWNrZXIudG91Y2hVaScsXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBtYXREYXRlcGlja2VyQW5pbWF0aW9ucy50cmFuc2Zvcm1QYW5lbCxcbiAgICBtYXREYXRlcGlja2VyQW5pbWF0aW9ucy5mYWRlSW5DYWxlbmRhcixcbiAgXSxcbiAgZXhwb3J0QXM6ICdtYXREYXRlcGlja2VyQ29udGVudCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFsnY29sb3InXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXBpY2tlckNvbnRlbnQ8RD4gZXh0ZW5kcyBfTWF0RGF0ZXBpY2tlckNvbnRlbnRNaXhpbkJhc2VcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDYW5Db2xvciB7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgY2FsZW5kYXIgY29tcG9uZW50LiAqL1xuICBAVmlld0NoaWxkKE1hdENhbGVuZGFyKSBfY2FsZW5kYXI6IE1hdENhbGVuZGFyPEQ+O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGRhdGVwaWNrZXIgdGhhdCBjcmVhdGVkIHRoZSBvdmVybGF5LiAqL1xuICBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPEQ+O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkYXRlcGlja2VyIGlzIGFib3ZlIG9yIGJlbG93IHRoZSBpbnB1dC4gKi9cbiAgX2lzQWJvdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2NhbGVuZGFyLmZvY3VzQWN0aXZlQ2VsbCgpO1xuICB9XG59XG5cblxuLy8gVE9ETyhtbWFsZXJiYSk6IFdlIHVzZSBhIGNvbXBvbmVudCBpbnN0ZWFkIG9mIGEgZGlyZWN0aXZlIGhlcmUgc28gdGhlIHVzZXIgY2FuIHVzZSBpbXBsaWNpdFxuLy8gdGVtcGxhdGUgcmVmZXJlbmNlIHZhcmlhYmxlcyAoZS5nLiAjZCB2cyAjZD1cIm1hdERhdGVwaWNrZXJcIikuIFdlIGNhbiBjaGFuZ2UgdGhpcyB0byBhIGRpcmVjdGl2ZVxuLy8gaWYgYW5ndWxhciBhZGRzIHN1cHBvcnQgZm9yIGBleHBvcnRBczogJyRpbXBsaWNpdCdgIG9uIGRpcmVjdGl2ZXMuXG4vKiogQ29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZyB0aGUgZGF0ZXBpY2tlciBwb3B1cC9kaWFsb2cuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgZXhwb3J0QXM6ICdtYXREYXRlcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGVwaWNrZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIENhbkNvbG9yIHtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6ICgpID0+IFNjcm9sbFN0cmF0ZWd5O1xuXG4gIC8qKiBBbiBpbnB1dCBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gaGVhZGVyIGNvbXBvbmVudCBmb3IgdGhlIGNhbGVuZGFyLCBpZiBzZXQuICovXG4gIEBJbnB1dCgpIGNhbGVuZGFySGVhZGVyQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG5cbiAgLyoqIFRoZSBkYXRlIHRvIG9wZW4gdGhlIGNhbGVuZGFyIHRvIGluaXRpYWxseS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xuICAgIC8vIElmIGFuIGV4cGxpY2l0IHN0YXJ0QXQgaXMgc2V0IHdlIHN0YXJ0IHRoZXJlLCBvdGhlcndpc2Ugd2Ugc3RhcnQgYXQgd2hhdGV2ZXIgdGhlIGN1cnJlbnRseVxuICAgIC8vIHNlbGVjdGVkIHZhbHVlIGlzLlxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0IHx8ICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQudmFsdWUgOiBudWxsKTtcbiAgfVxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gIH1cbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XG5cbiAgLyoqIFRoZSB2aWV3IHRoYXQgdGhlIGNhbGVuZGFyIHNob3VsZCBzdGFydCBpbi4gKi9cbiAgQElucHV0KCkgc3RhcnRWaWV3OiAnbW9udGgnIHwgJ3llYXInIHwgJ211bHRpLXllYXInID0gJ21vbnRoJztcblxuICAvKiogQ29sb3IgcGFsZXR0ZSB0byB1c2Ugb24gdGhlIGRhdGVwaWNrZXIncyBjYWxlbmRhci4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IFRoZW1lUGFsZXR0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yIHx8XG4gICAgICAgICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQuX2dldFRoZW1lUGFsZXR0ZSgpIDogdW5kZWZpbmVkKTtcbiAgfVxuICBzZXQgY29sb3IodmFsdWU6IFRoZW1lUGFsZXR0ZSkge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gIH1cbiAgX2NvbG9yOiBUaGVtZVBhbGV0dGU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIFVJIGlzIGluIHRvdWNoIG1vZGUuIEluIHRvdWNoIG1vZGUgdGhlIGNhbGVuZGFyIG9wZW5zIGluIGEgZGlhbG9nIHJhdGhlclxuICAgKiB0aGFuIGEgcG9wdXAgYW5kIGVsZW1lbnRzIGhhdmUgbW9yZSBwYWRkaW5nIHRvIGFsbG93IGZvciBiaWdnZXIgdG91Y2ggdGFyZ2V0cy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3VjaFVpKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fdG91Y2hVaTsgfVxuICBzZXQgdG91Y2hVaSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3RvdWNoVWkgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3RvdWNoVWkgPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlciBwb3AtdXAgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID9cbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0LmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UubmV4dChuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBzZWxlY3RlZCB5ZWFyIGluIG11bHRpeWVhciB2aWV3LlxuICAgKiBUaGlzIGRvZXNuJ3QgaW1wbHkgYSBjaGFuZ2Ugb24gdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RD4gPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHNlbGVjdGVkIG1vbnRoIGluIHllYXIgdmlldy5cbiAgICogVGhpcyBkb2Vzbid0IGltcGx5IGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcblxuICAvKiogQ2xhc3NlcyB0byBiZSBwYXNzZWQgdG8gdGhlIGRhdGUgcGlja2VyIHBhbmVsLiBTdXBwb3J0cyB0aGUgc2FtZSBzeW50YXggYXMgYG5nQ2xhc3NgLiAqL1xuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKiogRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgY3VzdG9tIENTUyBjbGFzc2VzIHRvIGRhdGVzLiAqL1xuICBASW5wdXQoKSBkYXRlQ2xhc3M6IChkYXRlOiBEKSA9PiBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgnb3BlbmVkJykgb3BlbmVkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gY2xvc2VkLiAqL1xuICBAT3V0cHV0KCdjbG9zZWQnKSBjbG9zZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBvcGVuLiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3BlbmVkOyB9XG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHsgdmFsdWUgPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTsgfVxuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcblxuICAvKiogVGhlIGlkIGZvciB0aGUgZGF0ZXBpY2tlciBjYWxlbmRhci4gKi9cbiAgaWQ6IHN0cmluZyA9IGBtYXQtZGF0ZXBpY2tlci0ke2RhdGVwaWNrZXJVaWQrK31gO1xuXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXG4gIGdldCBfc2VsZWN0ZWQoKTogRCB8IG51bGwgeyByZXR1cm4gdGhpcy5fdmFsaWRTZWxlY3RlZDsgfVxuICBzZXQgX3NlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkgeyB0aGlzLl92YWxpZFNlbGVjdGVkID0gdmFsdWU7IH1cbiAgcHJpdmF0ZSBfdmFsaWRTZWxlY3RlZDogRCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIGdldCBfbWluRGF0ZSgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWluO1xuICB9XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cbiAgZ2V0IF9tYXhEYXRlKCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5tYXg7XG4gIH1cblxuICBnZXQgX2RhdGVGaWx0ZXIoKTogKGRhdGU6IEQgfCBudWxsKSA9PiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fZGF0ZUZpbHRlcjtcbiAgfVxuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBwb3B1cC4gKi9cbiAgX3BvcHVwUmVmOiBPdmVybGF5UmVmO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nIHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZCBhcyBhIGRpYWxvZy4gKi9cbiAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TWF0RGF0ZXBpY2tlckNvbnRlbnQ8RD4+IHwgbnVsbDtcblxuICAvKiogQSBwb3J0YWwgY29udGFpbmluZyB0aGUgY2FsZW5kYXIgZm9yIHRoaXMgZGF0ZXBpY2tlci4gKi9cbiAgcHJpdmF0ZSBfY2FsZW5kYXJQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxNYXREYXRlcGlja2VyQ29udGVudDxEPj47XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IGluc3RhbnRpYXRlZCBpbiBwb3B1cCBtb2RlLiAqL1xuICBwcml2YXRlIF9wb3B1cENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE1hdERhdGVwaWNrZXJDb250ZW50PEQ+PiB8IG51bGw7XG5cbiAgLyoqIFRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBkYXRlcGlja2VyIHdhcyBvcGVuZWQuICovXG4gIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHZhbHVlIGNoYW5nZXMgaW4gdGhlIGFzc29jaWF0ZWQgaW5wdXQgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfaW5wdXRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgZGF0ZXBpY2tlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXG4gIF9kYXRlcGlja2VySW5wdXQ6IE1hdERhdGVwaWNrZXJJbnB1dDxEPjtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBkaXNhYmxlZC4gKi9cbiAgcmVhZG9ubHkgX2Rpc2FibGVkQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKiogRW1pdHMgbmV3IHNlbGVjdGVkIGRhdGUgd2hlbiBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXG4gIHJlYWRvbmx5IF9zZWxlY3RlZENoYW5nZWQgPSBuZXcgU3ViamVjdDxEPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kpIHNjcm9sbFN0cmF0ZWd5OiBhbnksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKCdEYXRlQWRhcHRlcicpO1xuICAgIH1cblxuICAgIHRoaXMuX3Njcm9sbFN0cmF0ZWd5ID0gc2Nyb2xsU3RyYXRlZ3k7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9kaXNhYmxlZENoYW5nZS5jb21wbGV0ZSgpO1xuXG4gICAgaWYgKHRoaXMuX3BvcHVwUmVmKSB7XG4gICAgICB0aGlzLl9wb3B1cFJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdHMgdGhlIGdpdmVuIGRhdGUgKi9cbiAgc2VsZWN0KGRhdGU6IEQpOiB2b2lkIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLl9zZWxlY3RlZDtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IGRhdGU7XG4gICAgaWYgKCF0aGlzLl9kYXRlQWRhcHRlci5zYW1lRGF0ZShvbGRWYWx1ZSwgdGhpcy5fc2VsZWN0ZWQpKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZENoYW5nZWQubmV4dChkYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKiogRW1pdHMgdGhlIHNlbGVjdGVkIHllYXIgaW4gbXVsdGl5ZWFyIHZpZXcgKi9cbiAgX3NlbGVjdFllYXIobm9ybWFsaXplZFllYXI6IEQpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRZZWFyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBzZWxlY3RlZCBtb250aCBpbiB5ZWFyIHZpZXcgKi9cbiAgX3NlbGVjdE1vbnRoKG5vcm1hbGl6ZWRNb250aDogRCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhTZWxlY3RlZC5lbWl0KG5vcm1hbGl6ZWRNb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gaW5wdXQgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgZGF0ZXBpY2tlciBpbnB1dCB0byByZWdpc3RlciB3aXRoIHRoaXMgZGF0ZXBpY2tlci5cbiAgICovXG4gIF9yZWdpc3RlcklucHV0KGlucHV0OiBNYXREYXRlcGlja2VySW5wdXQ8RD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcignQSBNYXREYXRlcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0ZXBpY2tlcklucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQuX3ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IEQgfCBudWxsKSA9PiB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhci4gKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VySW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKCdBdHRlbXB0ZWQgdG8gb3BlbiBhbiBNYXREYXRlcGlja2VyIHdpdGggbm8gYXNzb2NpYXRlZCBpbnB1dC4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMudG91Y2hVaSA/IHRoaXMuX29wZW5Bc0RpYWxvZygpIDogdGhpcy5fb3BlbkFzUG9wdXAoKTtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMub3BlbmVkU3RyZWFtLmVtaXQoKTtcbiAgfVxuXG4gIC8qKiBDbG9zZSB0aGUgY2FsZW5kYXIuICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3B1cFJlZiAmJiB0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLl9wb3B1cFJlZi5kZXRhY2goKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FsZW5kYXJQb3J0YWwgJiYgdGhpcy5fY2FsZW5kYXJQb3J0YWwuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIFRoZSBgX29wZW5lZGAgY291bGQndmUgYmVlbiByZXNldCBhbHJlYWR5IGlmXG4gICAgICAvLyB3ZSBnb3QgdHdvIGV2ZW50cyBpbiBxdWljayBzdWNjZXNzaW9uLlxuICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbG9zZWRTdHJlYW0uZW1pdCgpO1xuICAgICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuICYmXG4gICAgICB0eXBlb2YgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBCZWNhdXNlIElFIG1vdmVzIGZvY3VzIGFzeW5jaHJvbm91c2x5LCB3ZSBjYW4ndCBjb3VudCBvbiBpdCBiZWluZyByZXN0b3JlZCBiZWZvcmUgd2UndmVcbiAgICAgIC8vIG1hcmtlZCB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQuIElmIHRoZSBldmVudCBmaXJlcyBvdXQgb2Ygc2VxdWVuY2UgYW5kIHRoZSBlbGVtZW50IHRoYXRcbiAgICAgIC8vIHdlJ3JlIHJlZm9jdXNpbmcgb3BlbnMgdGhlIGRhdGVwaWNrZXIgb24gZm9jdXMsIHRoZSB1c2VyIGNvdWxkIGJlIHN0dWNrIHdpdGggbm90IGJlaW5nXG4gICAgICAvLyBhYmxlIHRvIGNsb3NlIHRoZSBjYWxlbmRhciBhdCBhbGwuIFdlIHdvcmsgYXJvdW5kIGl0IGJ5IG1ha2luZyB0aGUgbG9naWMsIHRoYXQgbWFya3NcbiAgICAgIC8vIHRoZSBkYXRlcGlja2VyIGFzIGNsb3NlZCwgYXN5bmMgYXMgd2VsbC5cbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cygpO1xuICAgICAgc2V0VGltZW91dChjb21wbGV0ZUNsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGVDbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhciBhcyBhIGRpYWxvZy4gKi9cbiAgcHJpdmF0ZSBfb3BlbkFzRGlhbG9nKCk6IHZvaWQge1xuICAgIC8vIFVzdWFsbHkgdGhpcyB3b3VsZCBiZSBoYW5kbGVkIGJ5IGBvcGVuYCB3aGljaCBlbnN1cmVzIHRoYXQgd2UgY2FuIG9ubHkgaGF2ZSBvbmUgb3ZlcmxheVxuICAgIC8vIG9wZW4gYXQgYSB0aW1lLCBob3dldmVyIHNpbmNlIHdlIHJlc2V0IHRoZSB2YXJpYWJsZXMgaW4gYXN5bmMgaGFuZGxlcnMgc29tZSBvdmVybGF5c1xuICAgIC8vIG1heSBzbGlwIHRocm91Z2ggaWYgdGhlIHVzZXIgb3BlbnMgYW5kIGNsb3NlcyBtdWx0aXBsZSB0aW1lcyBpbiBxdWljayBzdWNjZXNzaW9uIChlLmcuXG4gICAgLy8gYnkgaG9sZGluZyBkb3duIHRoZSBlbnRlciBrZXkpLlxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2RpYWxvZ1JlZiA9IHRoaXMuX2RpYWxvZy5vcGVuPE1hdERhdGVwaWNrZXJDb250ZW50PEQ+PihNYXREYXRlcGlja2VyQ29udGVudCwge1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJyxcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBwYW5lbENsYXNzOiAnbWF0LWRhdGVwaWNrZXItZGlhbG9nJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX2RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRlcGlja2VyID0gdGhpcztcbiAgICB0aGlzLl9zZXRDb2xvcigpO1xuICB9XG5cbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgcG9wdXAuICovXG4gIHByaXZhdGUgX29wZW5Bc1BvcHVwKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY2FsZW5kYXJQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNYXREYXRlcGlja2VyQ29udGVudDxEPj4oTWF0RGF0ZXBpY2tlckNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvcHVwKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZiA9IHRoaXMuX3BvcHVwUmVmLmF0dGFjaCh0aGlzLl9jYWxlbmRhclBvcnRhbCk7XG4gICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRlcGlja2VyID0gdGhpcztcbiAgICAgIHRoaXMuX3NldENvbG9yKCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb25jZSB0aGUgY2FsZW5kYXIgaGFzIHJlbmRlcmVkLlxuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDcmVhdGUgdGhlIHBvcHVwLiAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3B1cCgpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdtYXQtb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpcixcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxuICAgICAgcGFuZWxDbGFzczogJ21hdC1kYXRlcGlja2VyLXBvcHVwJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX3BvcHVwUmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gICAgdGhpcy5fcG9wdXBSZWYub3ZlcmxheUVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuXG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLl9wb3B1cFJlZi5iYWNrZHJvcENsaWNrKCksXG4gICAgICB0aGlzLl9wb3B1cFJlZi5kZXRhY2htZW50cygpLFxuICAgICAgdGhpcy5fcG9wdXBSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgLy8gQ2xvc2luZyBvbiBhbHQgKyB1cCBpcyBvbmx5IHZhbGlkIHdoZW4gdGhlcmUncyBhbiBpbnB1dCBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGVwaWNrZXIuXG4gICAgICAgIHJldHVybiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHxcbiAgICAgICAgICAgICAgICh0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgZXZlbnQuYWx0S2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IFVQX0FSUk9XKTtcbiAgICAgIH0pKVxuICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cCBQb3NpdGlvblN0cmF0ZWd5LiAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZGF0ZXBpY2tlcklucHV0LmdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKSlcbiAgICAgIC53aXRoVHJhbnNmb3JtT3JpZ2luT24oJy5tYXQtZGF0ZXBpY2tlci1jb250ZW50JylcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbig4KVxuICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbigpXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgICAgfVxuICAgICAgXSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyBUaGUgZ2l2ZW4gb2JqZWN0IGlmIGl0IGlzIGJvdGggYSBkYXRlIGluc3RhbmNlIGFuZCB2YWxpZCwgb3RoZXJ3aXNlIG51bGwuXG4gICAqL1xuICBwcml2YXRlIF9nZXRWYWxpZERhdGVPck51bGwob2JqOiBhbnkpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuICh0aGlzLl9kYXRlQWRhcHRlci5pc0RhdGVJbnN0YW5jZShvYmopICYmIHRoaXMuX2RhdGVBZGFwdGVyLmlzVmFsaWQob2JqKSkgPyBvYmogOiBudWxsO1xuICB9XG5cbiAgLyoqIFBhc3NlcyB0aGUgY3VycmVudCB0aGVtZSBjb2xvciBhbG9uZyB0byB0aGUgY2FsZW5kYXIgb3ZlcmxheS4gKi9cbiAgcHJpdmF0ZSBfc2V0Q29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIGlmICh0aGlzLl9wb3B1cENvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5fcG9wdXBDb21wb25lbnRSZWYuaW5zdGFuY2UuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RpYWxvZ1JlZikge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmNvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b3VjaFVpOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=