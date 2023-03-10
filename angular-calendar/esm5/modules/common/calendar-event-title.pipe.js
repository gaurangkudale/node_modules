import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { CalendarEventTitleFormatter } from './calendar-event-title-formatter.provider';
import * as ɵngcc0 from '@angular/core';
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    };
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter }
    ]; };
    CalendarEventTitlePipe = __decorate([ __metadata("design:paramtypes", [CalendarEventTitleFormatter])
    ], CalendarEventTitlePipe);
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarEventTitleFormatter)); };
CalendarEventTitlePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitlePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarEventTitle'
            }]
    }], function () { return [{ type: CalendarEventTitleFormatter }]; }, null); })();
    return CalendarEventTitlePipe;
}());
export { CalendarEventTitlePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBS3hGO0FBQTBELElBQ3hELGdDQUFvQixrQkFBK0M7QUFBSSxRQUFuRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTZCO0FBQUMsSUFBRSxDQUFDO0FBQ3pFLElBQ0UsMENBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxTQUFpQixFQUFFLEtBQW9CO0FBQUksUUFDbEUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVELElBQUUsQ0FBQztBQUNGO0FBQ2lFLGdCQU54QiwyQkFBMkI7QUFBRztBQUVqRSxJQUhNLHNCQUFzQix3QkFIbEMsSUFBSSxDQUFDLGNBQ0osSUFBSSxFQUFFLG9CQUFvQix0REFFcEIsa0NBQ2tDLDJCQUEyQjtDQUZwRSxDQUFDLEZBRXNFLE9BRDNELHNCQUFzQixDQU1sQzs7Ozs7Ozs7cUZBQ0Q7QUFBQyxJQURELDZCQUFDO0FBQ0EsQ0FEQSxBQU5ELElBTUM7QUFDRCxTQVBhLHNCQUFzQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY2FsZW5kYXJFdmVudFRpdGxlJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFRpdGxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyRXZlbnRUaXRsZTogQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyKSB7fVxuXG4gIHRyYW5zZm9ybSh0aXRsZTogc3RyaW5nLCB0aXRsZVR5cGU6IHN0cmluZywgZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyRXZlbnRUaXRsZVt0aXRsZVR5cGVdKGV2ZW50LCB0aXRsZSk7XG4gIH1cbn1cbiJdfQ==