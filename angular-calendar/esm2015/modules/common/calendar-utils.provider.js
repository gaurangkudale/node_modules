import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { getMonthView, getWeekViewHeader, getWeekView, } from 'calendar-utils';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
let CalendarUtils = class CalendarUtils {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    getMonthView(args) {
        return getMonthView(this.dateAdapter, args);
    }
    getWeekViewHeader(args) {
        return getWeekViewHeader(this.dateAdapter, args);
    }
    getWeekView(args) {
        return getWeekView(this.dateAdapter, args);
    }
};
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarUtils.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarUtils, factory: function (t) { return CalendarUtils.ɵfac(t); } });
CalendarUtils.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarUtils = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarUtils);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarUtils, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
export { CalendarUtils };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdXRpbHMucHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFPTCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHL0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtBQUMxQixJQUFFLFlBQXNCLFdBQXdCO0FBQUksUUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7QUFBQyxJQUFFLENBQUM7QUFDcEQsSUFDRSxZQUFZLENBQUMsSUFBc0I7QUFBSSxRQUNyQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsSUFBMkI7QUFBSSxRQUMvQyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsSUFBcUI7QUFBSSxRQUNuQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLElBQUUsQ0FBQztBQUNILENBQUM7O21JQUFBO0FBQ0Q7QUFBdUMsWUFkRixXQUFXO0FBQUc7QUFEdEMsYUFBYSxvQkFEekIsVUFBVSxFQUFFLGpCQUNULGtDQUNpQyxXQUFXO0FBQUcsR0FEdEMsYUFBYSxDQWN6Qjs7O3FFQUNEO0FBQUMsU0FmWSxhQUFhO0FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2V0TW9udGhWaWV3QXJncyxcbiAgTW9udGhWaWV3LFxuICBHZXRXZWVrVmlld0hlYWRlckFyZ3MsXG4gIFdlZWtEYXksXG4gIEdldFdlZWtWaWV3QXJncyxcbiAgV2Vla1ZpZXcsXG4gIGdldE1vbnRoVmlldyxcbiAgZ2V0V2Vla1ZpZXdIZWFkZXIsXG4gIGdldFdlZWtWaWV3LFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVXRpbHMge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIGdldE1vbnRoVmlldyhhcmdzOiBHZXRNb250aFZpZXdBcmdzKTogTW9udGhWaWV3IHtcbiAgICByZXR1cm4gZ2V0TW9udGhWaWV3KHRoaXMuZGF0ZUFkYXB0ZXIsIGFyZ3MpO1xuICB9XG5cbiAgZ2V0V2Vla1ZpZXdIZWFkZXIoYXJnczogR2V0V2Vla1ZpZXdIZWFkZXJBcmdzKTogV2Vla0RheVtdIHtcbiAgICByZXR1cm4gZ2V0V2Vla1ZpZXdIZWFkZXIodGhpcy5kYXRlQWRhcHRlciwgYXJncyk7XG4gIH1cblxuICBnZXRXZWVrVmlldyhhcmdzOiBHZXRXZWVrVmlld0FyZ3MpOiBXZWVrVmlldyB7XG4gICAgcmV0dXJuIGdldFdlZWtWaWV3KHRoaXMuZGF0ZUFkYXB0ZXIsIGFyZ3MpO1xuICB9XG59XG4iXX0=