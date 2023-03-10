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
let CalendarTodayDirective = class CalendarTodayDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
};
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarTodayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarTodayDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarTodayDirective.ctorParameters = () => [
    { type: DateAdapter }
];
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
export { CalendarTodayDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9kYXkuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci10b2RheS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBSUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7QUFDbkMsSUFVRSxZQUFvQixXQUF3QjtBQUFJLFFBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0FBQUMsUUFMN0M7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDcEUsSUFDaUQsQ0FBQztBQUNsRCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFDRSxPQUFPO0FBQUssUUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RSxJQUFFLENBQUM7QUFDSCxDQUFDOzs7OzRGQUFBO0FBQ0Q7QUFBZ0QsWUFWYixXQUFXO0FBQUc7QUFQdEM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRSw4QkFBUyxJQUFJO0FBQ3pCLHdEQUQwQjtBQUtkO0FBQWEsSUFBdEIsTUFBTSxFQUFFO0FBQUUsOEJBQWUsWUFBWTtBQUFFLDhEQUEwQjtBQVFsRTtBQUFhLElBRFosWUFBWSxDQUFDLE9BQU8sQ0FBQztBQUN2QjtBQUNxQjtBQUF5QztBQUdqQyxxREFGM0I7QUFuQlUsc0JBQXNCLG9CQUhsQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsbkNBRVIsa0NBVytCLFdBQVc7T0FiZCxPQUMvQixDQUFDLGZBWStDLEdBWHBDLHNCQUFzQixDQW9CbEM7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxTQXJCWSxzQkFBc0I7QUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmlldyBkYXRlIHRvIHRoZSBjdXJyZW50IGRheS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyVG9kYXlcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiPlxuICogIFRvZGF5XG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJUb2RheV0nLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclRvZGF5RGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KCkgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlQWRhcHRlci5zdGFydE9mRGF5KG5ldyBEYXRlKCkpKTtcbiAgfVxufVxuIl19