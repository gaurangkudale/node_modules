import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter, } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    };
    CalendarTodayDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarTodayDirective.prototype, "viewDate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarTodayDirective.prototype, "viewDateChange", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTodayDirective.prototype, "onClick", null);
    CalendarTodayDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
    ], CalendarTodayDirective);
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarTodayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarTodayDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTodayDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarToday]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { viewDateChange: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], viewDate: [{
            type: Input
        }] }); })();
    return CalendarTodayDirective;
}());
export { CalendarTodayDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9kYXkuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci10b2RheS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBSUg7QUFFYyxJQVNaLGdDQUFvQixXQUF3QjtBQUFJLFFBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0FBQUMsUUFMN0M7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsSUFDaUQsQ0FBQztBQUNsRCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFDRSx3Q0FBTyxHQUFQO0FBQWMsUUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RSxJQUFFLENBQUM7QUFDRjtBQUNpRSxnQkFWL0IsV0FBVztBQUFHO0FBR2hELElBVlU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBRSxrQ0FBUyxJQUFJO0FBQ3pCLDREQUQwQjtBQUUxQixJQUdZO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0FBQUUsa0NBQWUsWUFBWTtBQUFFLGtFQUEwQjtBQUVwRSxJQU1FO0FBQWEsUUFEWixZQUFZLENBQUMsT0FBTyxDQUFDO0FBQ3ZCO0FBQ3lCO0FBQzFCO0FBRTBDLHlEQUZ2QztBQUNGLElBcEJZLHNCQUFzQix3QkFIbEMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLDNDQUVKLGtDQVcyQixXQUFXO2VBYmQsV0FDL0IsQ0FBQywzQkFZK0MsT0FYcEMsc0JBQXNCLENBb0JsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELDZCQUFDO0FBQ0EsQ0FEQSxBQXBCRCxJQW9CQztBQUNELFNBckJhLHNCQUFzQjtBQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2aWV3IGRhdGUgdG8gdGhlIGN1cnJlbnQgZGF5LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJUb2RheVxuICogIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCI+XG4gKiAgVG9kYXlcbiAqIDwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDYWxlbmRhclRvZGF5XScsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKSB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGVBZGFwdGVyLnN0YXJ0T2ZEYXkobmV3IERhdGUoKSkpO1xuICB9XG59XG4iXX0=