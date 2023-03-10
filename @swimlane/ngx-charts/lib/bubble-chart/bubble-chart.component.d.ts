import { EventEmitter, TemplateRef } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class BubbleChartComponent extends BaseChartComponent {
    showGridLines: boolean;
    legend: boolean;
    legendTitle: string;
    legendPosition: string;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    trimXAxisTicks: boolean;
    trimYAxisTicks: boolean;
    rotateXAxisTicks: boolean;
    maxXAxisTickLength: number;
    maxYAxisTickLength: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    roundDomains: boolean;
    maxRadius: number;
    minRadius: number;
    autoScale: boolean;
    schemeType: string;
    tooltipDisabled: boolean;
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: any;
    yScaleMax: any;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    colors: ColorHelper;
    scaleType: string;
    margin: number[];
    bubblePadding: number[];
    data: any;
    legendOptions: any;
    transform: string;
    clipPath: string;
    clipPathId: string;
    seriesDomain: any[];
    xDomain: any[];
    yDomain: any[];
    rDomain: number[];
    xScaleType: string;
    yScaleType: string;
    yScale: any;
    xScale: any;
    rScale: any;
    xAxisHeight: number;
    yAxisWidth: number;
    activeEntries: any[];
    update(): void;
    hideCircles(): void;
    onClick(data: any, series?: any): void;
    getBubblePadding(): number[];
    setScales(): void;
    getYScale(domain: any, height: any): any;
    getXScale(domain: any, width: any): any;
    getRScale(domain: any, range: any): any;
    getLegendOptions(): any;
    getXDomain(): any[];
    getYDomain(): any[];
    getRDomain(): number[];
    updateYAxisWidth({ width }: {
        width: any;
    }): void;
    updateXAxisHeight({ height }: {
        height: any;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
    trackBy(index: any, item: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BubbleChartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BubbleChartComponent, "ngx-charts-bubble-chart", never, { "showGridLines": "showGridLines"; "legend": "legend"; "legendTitle": "legendTitle"; "legendPosition": "legendPosition"; "xAxis": "xAxis"; "yAxis": "yAxis"; "trimXAxisTicks": "trimXAxisTicks"; "trimYAxisTicks": "trimYAxisTicks"; "rotateXAxisTicks": "rotateXAxisTicks"; "maxXAxisTickLength": "maxXAxisTickLength"; "maxYAxisTickLength": "maxYAxisTickLength"; "roundDomains": "roundDomains"; "maxRadius": "maxRadius"; "minRadius": "minRadius"; "schemeType": "schemeType"; "tooltipDisabled": "tooltipDisabled"; "showXAxisLabel": "showXAxisLabel"; "showYAxisLabel": "showYAxisLabel"; "xAxisLabel": "xAxisLabel"; "yAxisLabel": "yAxisLabel"; "xAxisTickFormatting": "xAxisTickFormatting"; "yAxisTickFormatting": "yAxisTickFormatting"; "xAxisTicks": "xAxisTicks"; "yAxisTicks": "yAxisTicks"; "autoScale": "autoScale"; "xScaleMin": "xScaleMin"; "xScaleMax": "xScaleMax"; "yScaleMin": "yScaleMin"; "yScaleMax": "yScaleMax"; }, { "activate": "activate"; "deactivate": "deactivate"; }, ["tooltipTemplate"], never>;
}

//# sourceMappingURL=bubble-chart.component.d.ts.map