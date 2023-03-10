import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { CalendarEventTitleFormatter } from './calendar-event-title-formatter.provider';
import * as ɵngcc0 from '@angular/core';
let CalendarEventTitlePipe = class CalendarEventTitlePipe {
    constructor(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    transform(title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    }
};
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarEventTitleFormatter)); };
CalendarEventTitlePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });
CalendarEventTitlePipe.ctorParameters = () => [
    { type: CalendarEventTitleFormatter }
];
CalendarEventTitlePipe = __decorate([ __metadata("design:paramtypes", [CalendarEventTitleFormatter])
], CalendarEventTitlePipe);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitlePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarEventTitle'
            }]
    }], function () { return [{ type: CalendarEventTitleFormatter }]; }, null); })();
export { CalendarEventTitlePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBS3hGLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0FBQUcsSUFDcEMsWUFBb0Isa0JBQStDO0FBQUksUUFBbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE2QjtBQUFDLElBQUUsQ0FBQztBQUN6RSxJQUNFLFNBQVMsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsRUFBRSxLQUFvQjtBQUFJLFFBQ2xFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFDSCxDQUFDOzs2SEFBQTtBQUNEO0FBQWdELFlBTk4sMkJBQTJCO0FBQUc7QUFEM0Qsc0JBQXNCLG9CQUhsQyxJQUFJLENBQUMsVUFDSixJQUFJLEVBQUUsb0JBQW9CLE9BQzNCLENBQUMsdERBQ0Usa0NBQ3NDLDJCQUEyQjtBQUFHLEdBRDNELHNCQUFzQixDQU1sQzs7Ozs7O3FGQUNEO0FBQUMsU0FQWSxzQkFBc0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2NhbGVuZGFyRXZlbnRUaXRsZScsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWxlbmRhckV2ZW50VGl0bGU6IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcikge31cblxuICB0cmFuc2Zvcm0odGl0bGU6IHN0cmluZywgdGl0bGVUeXBlOiBzdHJpbmcsIGV2ZW50OiBDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jYWxlbmRhckV2ZW50VGl0bGVbdGl0bGVUeXBlXShldmVudCwgdGl0bGUpO1xuICB9XG59XG4iXX0=