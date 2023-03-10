import { NgZone, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DateAdapter } from '../../date-adapters/date-adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarWeekViewCurrentTimeMarkerComponent implements OnChanges {
    private dateAdapter;
    private zone;
    columnDate: Date;
    dayStartHour: number;
    dayStartMinute: number;
    dayEndHour: number;
    dayEndMinute: number;
    hourSegments: number;
    hourSegmentHeight: number;
    customTemplate: TemplateRef<any>;
    columnDate$: BehaviorSubject<Date>;
    marker$: Observable<{
        isVisible: boolean;
        top: number;
    }>;
    constructor(dateAdapter: DateAdapter, zone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarWeekViewCurrentTimeMarkerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarWeekViewCurrentTimeMarkerComponent, "mwl-calendar-week-view-current-time-marker", never, { "columnDate": "columnDate"; "dayStartHour": "dayStartHour"; "dayStartMinute": "dayStartMinute"; "dayEndHour": "dayEndHour"; "dayEndMinute": "dayEndMinute"; "hourSegments": "hourSegments"; "hourSegmentHeight": "hourSegmentHeight"; "customTemplate": "customTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=calendar-week-view-current-time-marker.component.d.ts.map