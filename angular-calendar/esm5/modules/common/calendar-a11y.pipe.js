import { __decorate, __metadata, __param } from "tslib";
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import { CalendarA11y } from './calendar-a11y.provider';
/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
var CalendarA11yPipe = /** @class */ (function () {
    function CalendarA11yPipe(calendarA11y, locale) {
        this.calendarA11y = calendarA11y;
        this.locale = locale;
    }
    CalendarA11yPipe.prototype.transform = function (a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === 'undefined') {
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) { return iMethod !== 'constructor'; });
            throw new Error(method + " is not a valid a11y method. Can only be one of " + allowedMethods.join(', '));
        }
        return this.calendarA11y[method](a11yParams);
    };
    CalendarA11yPipe.ctorParameters = function () { return [
        { type: CalendarA11y },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CalendarA11yPipe = __decorate([ __param(1, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [CalendarA11y, String])
    ], CalendarA11yPipe);
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) { return new (t || CalendarA11yPipe)(ɵngcc0.ɵɵdirectiveInject(CalendarA11y), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
CalendarA11yPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarA11y", type: CalendarA11yPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11yPipe, [{
        type: Pipe,
        args: [{
                name: 'calendarA11y'
            }]
    }], function () { return [{ type: CalendarA11y }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
    return CalendarA11yPipe;
}());
export { CalendarA11yPipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5waXBlLmpzIiwic291cmNlcyI6WyJuZzovYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1hMTF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBSUg7QUFBb0QsSUFDbEQsMEJBQ1UsWUFBMEIsRUFDUCxNQUFjO0FBQzFDLFFBRlMsaUJBQVksR0FBWixZQUFZLENBQWM7QUFBQyxRQUNSLFdBQU0sR0FBTixNQUFNLENBQVE7QUFDN0MsSUFBSyxDQUFDO0FBQ04sSUFDRSxvQ0FBUyxHQUFULFVBQVUsVUFBc0IsRUFBRSxNQUFjO0FBQUksUUFDbEQsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekQsUUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7QUFDMUQsWUFBTSxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUM5QyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sS0FBSyxhQUFhLEVBQXpCLENBQXlCLENBQUMsQ0FBQztBQUN2RCxZQUFNLE1BQU0sSUFBSSxLQUFLLENBQ1YsTUFBTSx3REFBbUQsY0FBYyxDQUFDLElBQUksQ0FDN0UsSUFBSSxDQUNILENBQ0osQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxJQUFFLENBQUM7QUFDRjtBQUMyRCxnQkFuQmxDLFlBQVk7QUFDcEMsNkNBQUcsTUFBTSxTQUFDLFNBQVM7QUFBUTtBQUFVLElBSDFCLGdCQUFnQix3QkFINUIsSUFBSSxDQUFDLGNBQ0osNUJBRU0sQ0FHSCxXQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUxoQixFQUFFLGNBQWMsV0FDckIsQ0FBQyw1QkFJc0IseUNBREUsWUFBWTtBQUM3QixPQUhJLGdCQUFnQixDQW9CNUI7Ozs7Ozs7Ozs7O2tDQUNEO0FBQUMsSUFERCx1QkFBQztBQUNBLENBREEsQUFwQkQsSUFvQkM7QUFDRCxTQXJCYSxnQkFBZ0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckExMXkgfSBmcm9tICcuL2NhbGVuZGFyLWExMXkucHJvdmlkZXInO1xuaW1wb3J0IHsgQTExeVBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoaXMgcGlwZSBpcyBwcmltYXJpbHkgZm9yIHJlbmRlcmluZyBhcmlhIGxhYmVscy4gRXhhbXBsZSB1c2FnZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIHdoZXJlIGBteUV2ZW50YCBpcyBhIGBDYWxlbmRhckV2ZW50YCBhbmQgbXlMb2NhbGUgaXMgYSBsb2NhbGUgaWRlbnRpZmllclxuICoge3sgeyBldmVudDogbXlFdmVudCwgbG9jYWxlOiBteUxvY2FsZSB9IHwgY2FsZW5kYXJBMTF5OiAnZXZlbnREZXNjcmlwdGlvbicgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdjYWxlbmRhckExMXknLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckExMXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FsZW5kYXJBMTF5OiBDYWxlbmRhckExMXksXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShhMTF5UGFyYW1zOiBBMTF5UGFyYW1zLCBtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgYTExeVBhcmFtcy5sb2NhbGUgPSBhMTF5UGFyYW1zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY2FsZW5kYXJBMTF5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhbGxvd2VkTWV0aG9kcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFxuICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXJBMTF5LnByb3RvdHlwZSlcbiAgICAgICkuZmlsdGVyKChpTWV0aG9kKSA9PiBpTWV0aG9kICE9PSAnY29uc3RydWN0b3InKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7bWV0aG9kfSBpcyBub3QgYSB2YWxpZCBhMTF5IG1ldGhvZC4gQ2FuIG9ubHkgYmUgb25lIG9mICR7YWxsb3dlZE1ldGhvZHMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9YFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXJBMTF5W21ldGhvZF0oYTExeVBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==