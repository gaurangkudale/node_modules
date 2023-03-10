import { EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { CalendarView } from './calendar-view.enum';
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class CalendarPreviousViewDirective {
    private dateAdapter;
    /**
     * The current view
     */
    view: CalendarView | 'month' | 'week' | 'day';
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * Days to skip when going back by 1 day
     */
    excludeDays: number[];
    /**
     * The number of days in a week. If set will subtract this amount of days instead of 1 week
     */
    daysInWeek: number;
    /**
     * Called when the view date is changed
     */
    viewDateChange: EventEmitter<Date>;
    constructor(dateAdapter: DateAdapter);
    /**
     * @hidden
     */
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarPreviousViewDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CalendarPreviousViewDirective, "[mwlCalendarPreviousView]", never, { "excludeDays": "excludeDays"; "view": "view"; "viewDate": "viewDate"; "daysInWeek": "daysInWeek"; }, { "viewDateChange": "viewDateChange"; }, never>;
}

//# sourceMappingURL=calendar-previous-view.directive.d.ts.map