/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Directive, Input, ViewEncapsulation, ViewChild, } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { MatDatepicker } from './datepicker';
import { MatDatepickerIntl } from './datepicker-intl';
/** Can be used to override the icon of a `matDatepickerToggle`. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/material/button';
import * as ɵngcc2 from '@angular/common';

var _c0 = ["button"];
function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "svg", 3);
    ɵngcc0.ɵɵelement(1, "path", 4);
    ɵngcc0.ɵɵelementEnd();
} }
var _c1 = [[["", "matDatepickerToggleIcon", ""]]];
var _c2 = ["[matDatepickerToggleIcon]"];
var MatDatepickerToggleIcon = /** @class */ (function () {
    function MatDatepickerToggleIcon() {
    }
MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) { return new (t || MatDatepickerToggleIcon)(); };
MatDatepickerToggleIcon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDatepickerToggleIcon, selectors: [["", "matDatepickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerToggleIcon, [{
        type: Directive,
        args: [{
                selector: '[matDatepickerToggleIcon]'
            }]
    }], function () { return []; }, null); })();
    return MatDatepickerToggleIcon;
}());
export { MatDatepickerToggleIcon };
var MatDatepickerToggle = /** @class */ (function () {
    function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    Object.defineProperty(MatDatepickerToggle.prototype, "disabled", {
        /** Whether the toggle button is disabled. */
        get: function () {
            if (this._disabled === undefined && this.datepicker) {
                return this.datepicker.disabled;
            }
            return !!this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MatDatepickerToggle.prototype.ngOnChanges = function (changes) {
        if (changes['datepicker']) {
            this._watchStateChanges();
        }
    };
    MatDatepickerToggle.prototype.ngOnDestroy = function () {
        this._stateChanges.unsubscribe();
    };
    MatDatepickerToggle.prototype.ngAfterContentInit = function () {
        this._watchStateChanges();
    };
    MatDatepickerToggle.prototype._open = function (event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    MatDatepickerToggle.prototype._watchStateChanges = function () {
        var _this = this;
        var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : observableOf();
        var inputDisabled = this.datepicker && this.datepicker._datepickerInput ?
            this.datepicker._datepickerInput._disabledChange : observableOf();
        var datepickerToggled = this.datepicker ?
            merge(this.datepicker.openedStream, this.datepicker.closedStream) :
            observableOf();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    /** @nocollapse */
    MatDatepickerToggle.ctorParameters = function () { return [
        { type: MatDatepickerIntl },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
    ]; };
    MatDatepickerToggle.propDecorators = {
        datepicker: [{ type: Input, args: ['for',] }],
        tabIndex: [{ type: Input }],
        disabled: [{ type: Input }],
        disableRipple: [{ type: Input }],
        _customIcon: [{ type: ContentChild, args: [MatDatepickerToggleIcon,] }],
        _button: [{ type: ViewChild, args: ['button',] }]
    };
MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) { return new (t || MatDatepickerToggle)(ɵngcc0.ɵɵdirectiveInject(MatDatepickerIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatDatepickerToggle.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatDatepickerToggle, selectors: [["mat-datepicker-toggle"]], contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatDatepickerToggleIcon, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MatDatepickerToggle_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 7, hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focus", function MatDatepickerToggle_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("tabindex", ctx.disabled ? null : 0 - 1);
        ɵngcc0.ɵɵclassProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", datepicker: ["for", "datepicker"], disableRipple: "disableRipple" }, exportAs: ["matDatepickerToggle"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function MatDatepickerToggle_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "button", 0, 1);
        ɵngcc0.ɵɵlistener("click", function MatDatepickerToggle_Template_button_click_0_listener($event) { return ctx._open($event); });
        ɵngcc0.ɵɵtemplate(2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        ɵngcc0.ɵɵattribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx._customIcon);
    } }, directives: [ɵngcc1.MatButton, ɵngcc2.NgIf], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDatepickerToggle, [{
        type: Component,
        args: [{
                selector: 'mat-datepicker-toggle',
                template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
                host: {
                    'class': 'mat-datepicker-toggle',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                    '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                    '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                    '(focus)': '_button.focus()'
                },
                exportAs: 'matDatepickerToggle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: ɵngcc0.ChangeDetectorRef }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], datepicker: [{
            type: Input,
            args: ['for']
        }], disableRipple: [{
            type: Input
        }], _customIcon: [{
            type: ContentChild,
            args: [MatDatepickerToggleIcon]
        }], _button: [{
            type: ViewChild,
            args: ['button']
        }] }); })();
    return MatDatepickerToggle;
}());
export { MatDatepickerToggle };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci10b2dnbGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUlMLGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUdwRCxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7O0FBQ25FO0FBR0csSUFISDtBQUN3QixJQUVjLENBQUM7MkRBSHRDLFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUU7V0FBMkIsa0JBQ3RDOzs7Ozs7Z0RBQ1E7QUFBQyxJQUE0Qiw4QkFBQztBQUV2QyxDQUZ1QyxBQUh2QyxJQUd1QztBQUN2QyxTQURhLHVCQUF1QjtBQUdwQztBQUVLLElBZ0RILDZCQUNTLEtBQXdCLEVBQ3ZCLGtCQUFxQyxFQUN0QixlQUF1QjtBQUNsRCxRQUhXLFVBQUssR0FBTCxLQUFLLENBQW1CO0FBQUMsUUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtBQUFDLFFBakN4QyxrQkFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDN0MsUUFtQ0ksSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLGNBQWMsSUFBSSxjQUFjLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3JGLElBQUUsQ0FBQztBQUNILElBOUJFLHNCQUNJLHlDQUFRO0FBQUksUUFGaEIsNkNBQTZDO0FBQy9DLGFBQUU7QUFDRyxZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6RCxnQkFBTSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGFBQUs7QUFDTCxZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDNUIsUUFBRSxDQUFDO0FBQ0YsYUFBQyxVQUFhLEtBQWM7QUFDN0IsWUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELFFBQUUsQ0FBQztBQUNGO0FBQTBCO0FBRUosT0FOcEI7QUFDSCxJQXVCRSx5Q0FBVyxHQUFYLFVBQVksT0FBc0I7QUFDcEMsUUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMvQixZQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ2hDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFFSCxJQUFFLHlDQUFXLEdBQVg7QUFBYyxRQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBRUgsSUFBRSxnREFBa0IsR0FBbEI7QUFBYyxRQUNaLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUVILElBQUUsbUNBQUssR0FBTCxVQUFNLEtBQVk7QUFBSSxRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixZQUFNLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM5QixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBVSxnREFBa0IsR0FBMUI7QUFBYyxRQUFkLGlCQWVDO0FBQ0gsUUFmSSxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNsRyxRQUFJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQy9FLFlBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFFLFFBQUksSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0MsWUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQzNFLFlBQVEsWUFBWSxFQUFFLENBQUM7QUFDdkIsUUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUNsQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGlCQUFpQixDQUNsQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxFQUF0QyxDQUFzQyxDQUFDLENBQUM7QUFDOUQsSUFBRSxDQUFDLENBN0VLO0FBQUM7Z0NBbEJSLFNBQVMsU0FBQyxsREFrQnFCO1FBakI5QixRQUFRLEVBQUUsbEJBa0JKLGdCQTdCQSxpQkFBaUI7SUFXVSxzQkFDakMsMUJBWjJCLGdCQWQzQixpQkFBaUI7QUFDakIsNkNBNEVHLFNBQVMsU0FBQyxVQUFVO0FBQVE7QUFBVTtBQUVaLDZCQWpDNUIsS0FBSyxTQUFDLEtBQUs7QUFBTywyQkFHbEIsS0FBSztBQUFLLDJCQUdWLEtBQUs7QUFDTixnQ0FhQyxLQUFLO0FBQUssOEJBR1YsWUFBWSxTQUFDLHVCQUF1QjtBQUFPLDBCQUczQyxTQUFTLFNBQUMsUUFBUTtBQUFNOzsyREE5Q1ksc0JBRXJDLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUsdUJBQXVCLDBCQUNoQzsyQ0FBd0YseUJBQ3hGOzs7K0JBQXVFLHlCQUN2RSxpQkFBaUIsRUFBRTtPQUFzQiwwQkFDekMsc0NBQXNDLEVBQUU7MEJBQWlDO2FBQ3pFO2FBQW9CLEVBQUU7NENBQTZDLDBCQUNuRTtFQUFrQixFQUFFLDJDQUEyQywwQkFDL0QsU0FBUyxFQUFFLGlCQUFpQix1QkFDN0I7RUFDRCxRQUFRLEVBQUUscUJBQXFCLHNCQUMvQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxzQkFDckM7SUFBZSxFQUFFO1NBQXVCLENBQUMsTUFBTTs7MmZBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBK0JnQztBQUFDLElBa0RsQywwQkFBQztBQUNBLENBREEsQUFsR0QsSUFrR0M7QUFDRCxTQWpGYSxtQkFBbUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQXR0cmlidXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7bWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlcn0gZnJvbSAnLi9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlckludGx9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnRsJztcblxuXG4vKiogQ2FuIGJlIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGljb24gb2YgYSBgbWF0RGF0ZXBpY2tlclRvZ2dsZWAuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0RGF0ZXBpY2tlclRvZ2dsZUljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRlcGlja2VyVG9nZ2xlSWNvbiB7fVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1kYXRlcGlja2VyLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci10b2dnbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXRvZ2dsZS5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZGF0ZXBpY2tlci10b2dnbGUnLFxuICAgIC8vIEFsd2F5cyBzZXQgdGhlIHRhYmluZGV4IHRvIC0xIHNvIHRoYXQgaXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IGN1c3RvbSB0YWJpbmRleCB0aGVcbiAgICAvLyBjb25zdW1lciBtYXkgaGF2ZSBwcm92aWRlZCwgd2hpbGUgc3RpbGwgYmVpbmcgYWJsZSB0byByZWNlaXZlIGZvY3VzLlxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnZGlzYWJsZWQgPyBudWxsIDogLTEnLFxuICAgICdbY2xhc3MubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZV0nOiAnZGF0ZXBpY2tlciAmJiBkYXRlcGlja2VyLm9wZW5lZCcsXG4gICAgJ1tjbGFzcy5tYXQtYWNjZW50XSc6ICdkYXRlcGlja2VyICYmIGRhdGVwaWNrZXIuY29sb3IgPT09IFwiYWNjZW50XCInLFxuICAgICdbY2xhc3MubWF0LXdhcm5dJzogJ2RhdGVwaWNrZXIgJiYgZGF0ZXBpY2tlci5jb2xvciA9PT0gXCJ3YXJuXCInLFxuICAgICcoZm9jdXMpJzogJ19idXR0b24uZm9jdXMoKScsXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWF0RGF0ZXBpY2tlclRvZ2dsZScsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRlcGlja2VyVG9nZ2xlPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIERhdGVwaWNrZXIgaW5zdGFuY2UgdGhhdCB0aGUgYnV0dG9uIHdpbGwgdG9nZ2xlLiAqL1xuICBASW5wdXQoJ2ZvcicpIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8RD47XG5cbiAgLyoqIFRhYmluZGV4IGZvciB0aGUgdG9nZ2xlLiAqL1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuZGF0ZXBpY2tlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgcmlwcGxlcyBvbiB0aGUgdG9nZ2xlIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCkgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcblxuICAvKiogQ3VzdG9tIGljb24gc2V0IGJ5IHRoZSBjb25zdW1lci4gKi9cbiAgQENvbnRlbnRDaGlsZChNYXREYXRlcGlja2VyVG9nZ2xlSWNvbikgX2N1c3RvbUljb246IE1hdERhdGVwaWNrZXJUb2dnbGVJY29uO1xuXG4gIC8qKiBVbmRlcmx5aW5nIGJ1dHRvbiBlbGVtZW50LiAqL1xuICBAVmlld0NoaWxkKCdidXR0b24nKSBfYnV0dG9uOiBNYXRCdXR0b247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEF0dHJpYnV0ZSgndGFiaW5kZXgnKSBkZWZhdWx0VGFiSW5kZXg6IHN0cmluZykge1xuXG4gICAgY29uc3QgcGFyc2VkVGFiSW5kZXggPSBOdW1iZXIoZGVmYXVsdFRhYkluZGV4KTtcbiAgICB0aGlzLnRhYkluZGV4ID0gKHBhcnNlZFRhYkluZGV4IHx8IHBhcnNlZFRhYkluZGV4ID09PSAwKSA/IHBhcnNlZFRhYkluZGV4IDogbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snZGF0ZXBpY2tlciddKSB7XG4gICAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XG4gIH1cblxuICBfb3BlbihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRhdGVwaWNrZXIub3BlbigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckRpc2FibGVkID0gdGhpcy5kYXRlcGlja2VyID8gdGhpcy5kYXRlcGlja2VyLl9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xuICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmRhdGVwaWNrZXIgJiYgdGhpcy5kYXRlcGlja2VyLl9kYXRlcGlja2VySW5wdXQgP1xuICAgICAgICB0aGlzLmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dC5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcbiAgICBjb25zdCBkYXRlcGlja2VyVG9nZ2xlZCA9IHRoaXMuZGF0ZXBpY2tlciA/XG4gICAgICAgIG1lcmdlKHRoaXMuZGF0ZXBpY2tlci5vcGVuZWRTdHJlYW0sIHRoaXMuZGF0ZXBpY2tlci5jbG9zZWRTdHJlYW0pIDpcbiAgICAgICAgb2JzZXJ2YWJsZU9mKCk7XG5cbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMgPSBtZXJnZShcbiAgICAgIHRoaXMuX2ludGwuY2hhbmdlcyxcbiAgICAgIGRhdGVwaWNrZXJEaXNhYmxlZCxcbiAgICAgIGlucHV0RGlzYWJsZWQsXG4gICAgICBkYXRlcGlja2VyVG9nZ2xlZFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19