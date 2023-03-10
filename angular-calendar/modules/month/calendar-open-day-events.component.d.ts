import { EventEmitter, TemplateRef } from '@angular/core';
import { AnimationTriggerMetadata } from '@angular/animations';
import { CalendarEvent } from 'calendar-utils';
import { isWithinThreshold } from '../common/util';
import * as ɵngcc0 from '@angular/core';
export declare const collapseAnimation: AnimationTriggerMetadata;
export declare class CalendarOpenDayEventsComponent {
    locale: string;
    isOpen: boolean;
    events: CalendarEvent[];
    customTemplate: TemplateRef<any>;
    eventTitleTemplate: TemplateRef<any>;
    eventActionsTemplate: TemplateRef<any>;
    date: Date;
    eventClicked: EventEmitter<{
        event: CalendarEvent<any>;
        sourceEvent: any;
    }>;
    trackByEventId: (index: number, event: CalendarEvent<any>) => string | number | CalendarEvent<any>;
    validateDrag: typeof isWithinThreshold;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarOpenDayEventsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarOpenDayEventsComponent, "mwl-calendar-open-day-events", never, { "isOpen": "isOpen"; "locale": "locale"; "events": "events"; "customTemplate": "customTemplate"; "eventTitleTemplate": "eventTitleTemplate"; "eventActionsTemplate": "eventActionsTemplate"; "date": "date"; }, { "eventClicked": "eventClicked"; }, never, never>;
}

//# sourceMappingURL=calendar-open-day-events.component.d.ts.map