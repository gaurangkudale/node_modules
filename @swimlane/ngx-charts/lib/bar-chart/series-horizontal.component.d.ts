import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { DataItem } from '../models/chart-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class SeriesHorizontal implements OnChanges {
    bars: any;
    x: any;
    y: any;
    barsForDataLabels: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        total: number;
        series: string;
    }>;
    dims: any;
    type: string;
    series: any;
    xScale: any;
    yScale: any;
    colors: any;
    tooltipDisabled: boolean;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    tooltipTemplate: TemplateRef<any>;
    roundEdges: boolean;
    animations: boolean;
    showDataLabel: boolean;
    dataLabelFormatting: any;
    noBarWhenZero: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dataLabelWidthChanged: EventEmitter<any>;
    tooltipPlacement: string;
    tooltipType: string;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    updateDataLabels(): void;
    updateTooltipSettings(): void;
    isActive(entry: any): boolean;
    getLabel(dataItem: any): string;
    trackBy(index: any, bar: any): any;
    trackDataLabelBy(index: any, barLabel: any): string;
    click(data: DataItem): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SeriesHorizontal, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SeriesHorizontal, "g[ngx-charts-series-horizontal]", never, { "type": "type"; "tooltipDisabled": "tooltipDisabled"; "animations": "animations"; "showDataLabel": "showDataLabel"; "noBarWhenZero": "noBarWhenZero"; "dims": "dims"; "series": "series"; "xScale": "xScale"; "yScale": "yScale"; "colors": "colors"; "gradient": "gradient"; "activeEntries": "activeEntries"; "seriesName": "seriesName"; "tooltipTemplate": "tooltipTemplate"; "roundEdges": "roundEdges"; "dataLabelFormatting": "dataLabelFormatting"; }, { "select": "select"; "activate": "activate"; "deactivate": "deactivate"; "dataLabelWidthChanged": "dataLabelWidthChanged"; }, never, never>;
}

//# sourceMappingURL=series-horizontal.component.d.ts.map