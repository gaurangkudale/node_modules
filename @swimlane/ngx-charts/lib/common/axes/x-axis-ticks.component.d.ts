import { EventEmitter, OnChanges, ElementRef, SimpleChanges, AfterViewInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class XAxisTicksComponent implements OnChanges, AfterViewInit {
    private platformId;
    scale: any;
    orient: any;
    tickArguments: number[];
    tickValues: any[];
    tickStroke: string;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    showGridLines: boolean;
    gridLineHeight: any;
    width: any;
    rotateTicks: boolean;
    dimensionsChanged: EventEmitter<any>;
    verticalSpacing: number;
    rotateLabels: boolean;
    innerTickSize: number;
    outerTickSize: number;
    tickPadding: number;
    textAnchor: string;
    maxTicksLength: number;
    maxAllowedLength: number;
    adjustedScale: any;
    textTransform: any;
    ticks: any;
    tickFormat: (o: any) => any;
    height: number;
    approxHeight: number;
    ticksElement: ElementRef;
    constructor(platformId: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    updateDims(): void;
    update(): void;
    getRotationAngle(ticks: any): number;
    getTicks(): any;
    getMaxTicks(tickWidth: number): number;
    tickTransform(tick: any): string;
    gridLineTransform(): string;
    tickTrim(label: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<XAxisTicksComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<XAxisTicksComponent, "g[ngx-charts-x-axis-ticks]", never, { "tickArguments": "tickArguments"; "tickStroke": "tickStroke"; "trimTicks": "trimTicks"; "maxTickLength": "maxTickLength"; "showGridLines": "showGridLines"; "rotateTicks": "rotateTicks"; "scale": "scale"; "orient": "orient"; "tickValues": "tickValues"; "tickFormatting": "tickFormatting"; "gridLineHeight": "gridLineHeight"; "width": "width"; }, { "dimensionsChanged": "dimensionsChanged"; }, never, never>;
}

//# sourceMappingURL=x-axis-ticks.component.d.ts.map