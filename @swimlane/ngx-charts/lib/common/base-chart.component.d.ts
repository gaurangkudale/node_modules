import { ElementRef, NgZone, ChangeDetectorRef, EventEmitter, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { VisibilityObserver } from '../utils/visibility-observer';
import * as ɵngcc0 from '@angular/core';
export declare class BaseChartComponent implements OnChanges, AfterViewInit, OnDestroy {
    protected chartElement: ElementRef;
    protected zone: NgZone;
    protected cd: ChangeDetectorRef;
    platformId: any;
    results: any;
    view: [number, number];
    scheme: any;
    schemeType: string;
    customColors: any;
    animations: boolean;
    select: EventEmitter<any>;
    width: number;
    height: number;
    resizeSubscription: any;
    visibilityObserver: VisibilityObserver;
    constructor(chartElement: ElementRef, zone: NgZone, cd: ChangeDetectorRef, platformId: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getContainerDims(): any;
    /**
     * Converts all date objects that appear as name
     * into formatted date strings
     */
    formatDates(): void;
    protected unbindEvents(): void;
    private bindWindowResizeEvent;
    /**
     * Clones the data into a new object
     *
     * @memberOf BaseChart
     */
    private cloneData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseChartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BaseChartComponent, "base-chart", never, { "scheme": "scheme"; "schemeType": "schemeType"; "animations": "animations"; "results": "results"; "view": "view"; "customColors": "customColors"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=base-chart.component.d.ts.map