import { SimpleChanges, EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class CircleSeriesComponent implements OnChanges, OnInit {
    data: any;
    type: string;
    xScale: any;
    yScale: any;
    colors: ColorHelper;
    scaleType: any;
    visibleValue: any;
    activeEntries: any[];
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    areaPath: any;
    circle: any;
    barVisible: boolean;
    gradientId: string;
    gradientFill: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getActiveCircle(): {};
    mapDataPointToCircle(d: any, i: number): any;
    getTooltipText({ tooltipLabel, value, seriesName, min, max }: {
        tooltipLabel: any;
        value: any;
        seriesName: any;
        min: any;
        max: any;
    }): string;
    getTooltipMinMaxText(min: any, max: any): string;
    getGradientStops(color: any): {
        offset: number;
        color: any;
        opacity: number;
    }[];
    onClick(data: any): void;
    isActive(entry: any): boolean;
    activateCircle(): void;
    deactivateCircle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CircleSeriesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CircleSeriesComponent, "g[ngx-charts-circle-series]", never, { "type": "type"; "tooltipDisabled": "tooltipDisabled"; "data": "data"; "xScale": "xScale"; "yScale": "yScale"; "colors": "colors"; "scaleType": "scaleType"; "visibleValue": "visibleValue"; "activeEntries": "activeEntries"; "tooltipTemplate": "tooltipTemplate"; }, { "select": "select"; "activate": "activate"; "deactivate": "deactivate"; }, never, never>;
}

//# sourceMappingURL=circle-series.component.d.ts.map