import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipArea {
    private platformId;
    anchorOpacity: number;
    anchorPos: number;
    anchorValues: any[];
    lastAnchorPos: number;
    dims: any;
    xSet: any;
    xScale: any;
    yScale: any;
    results: any;
    colors: any;
    showPercentage: boolean;
    tooltipDisabled: boolean;
    tooltipTemplate: TemplateRef<any>;
    hover: EventEmitter<any>;
    tooltipAnchor: any;
    constructor(platformId: any);
    getValues(xVal: any): any[];
    mouseMove(event: any): void;
    findClosestPointIndex(xPos: any): number;
    showTooltip(): void;
    hideTooltip(): void;
    getToolTipText(tooltipItem: any): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipArea, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipArea, "g[ngx-charts-tooltip-area]", never, { "showPercentage": "showPercentage"; "tooltipDisabled": "tooltipDisabled"; "dims": "dims"; "xSet": "xSet"; "xScale": "xScale"; "yScale": "yScale"; "results": "results"; "colors": "colors"; "tooltipTemplate": "tooltipTemplate"; }, { "hover": "hover"; }, never, never>;
}

//# sourceMappingURL=tooltip-area.component.d.ts.map