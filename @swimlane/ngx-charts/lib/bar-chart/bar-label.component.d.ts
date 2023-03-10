import { OnChanges, SimpleChanges, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class BarLabelComponent implements OnChanges {
    value: any;
    valueFormatting: any;
    barX: any;
    barY: any;
    barWidth: any;
    barHeight: any;
    orientation: any;
    dimensionsChanged: EventEmitter<any>;
    element: any;
    x: number;
    y: number;
    horizontalPadding: number;
    verticalPadding: number;
    formatedValue: string;
    transform: string;
    textAnchor: string;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    getSize(): any;
    ngAfterViewInit(): void;
    update(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarLabelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarLabelComponent, "g[ngx-charts-bar-label]", never, { "value": "value"; "valueFormatting": "valueFormatting"; "barX": "barX"; "barY": "barY"; "barWidth": "barWidth"; "barHeight": "barHeight"; "orientation": "orientation"; }, { "dimensionsChanged": "dimensionsChanged"; }, never, never>;
}

//# sourceMappingURL=bar-label.component.d.ts.map