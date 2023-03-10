import { SimpleChanges, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PieSeriesComponent implements OnChanges {
    colors: any;
    series: any;
    dims: any;
    innerRadius: number;
    outerRadius: number;
    explodeSlices: any;
    showLabels: any;
    gradient: boolean;
    activeEntries: any[];
    labelFormatting: any;
    trimLabels: boolean;
    maxLabelLength: number;
    tooltipText: (o: any) => any;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    dblclick: EventEmitter<any>;
    max: number;
    data: any;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    midAngle(d: any): number;
    outerArc(): any;
    calculateLabelPositions(pieData: any): any;
    labelVisible(myArc: any): boolean;
    getTooltipTitle(a: any): any;
    labelText(myArc: any): string;
    label(myArc: any): string;
    defaultTooltipText(myArc: any): string;
    color(myArc: any): any;
    trackBy(index: any, item: any): string;
    onClick(data: any): void;
    isActive(entry: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PieSeriesComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PieSeriesComponent, "g[ngx-charts-pie-series]", never, { "series": "series"; "innerRadius": "innerRadius"; "outerRadius": "outerRadius"; "trimLabels": "trimLabels"; "maxLabelLength": "maxLabelLength"; "tooltipDisabled": "tooltipDisabled"; "animations": "animations"; "tooltipText": "tooltipText"; "colors": "colors"; "dims": "dims"; "explodeSlices": "explodeSlices"; "showLabels": "showLabels"; "gradient": "gradient"; "activeEntries": "activeEntries"; "labelFormatting": "labelFormatting"; "tooltipTemplate": "tooltipTemplate"; }, { "select": "select"; "activate": "activate"; "deactivate": "deactivate"; "dblclick": "dblclick"; }, never, never>;
}

//# sourceMappingURL=pie-series.component.d.ts.map