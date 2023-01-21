import { ElementRef, AfterViewInit } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class LinearGaugeComponent extends BaseChartComponent implements AfterViewInit {
    min: number;
    max: number;
    value: number;
    units: string;
    previousValue: any;
    valueFormatting: any;
    valueTextEl: ElementRef;
    unitsTextEl: ElementRef;
    dims: ViewDimensions;
    valueDomain: any;
    valueScale: any;
    colors: ColorHelper;
    transform: string;
    margin: any[];
    transformLine: string;
    valueResizeScale: number;
    unitsResizeScale: number;
    valueTextTransform: string;
    valueTranslate: string;
    unitsTextTransform: string;
    unitsTranslate: string;
    displayValue: string;
    hasPreviousValue: boolean;
    ngAfterViewInit(): void;
    update(): void;
    getValueDomain(): any[];
    getValueScale(): any;
    getDisplayValue(): string;
    scaleText(element: any, repeat?: boolean): void;
    scaleTextSSR(element: any): void;
    onClick(): void;
    setColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LinearGaugeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LinearGaugeComponent, "ngx-charts-linear-gauge", never, { "min": "min"; "max": "max"; "value": "value"; "units": "units"; "previousValue": "previousValue"; "valueFormatting": "valueFormatting"; }, {}, never, never>;
}

//# sourceMappingURL=linear-gauge.component.d.ts.map