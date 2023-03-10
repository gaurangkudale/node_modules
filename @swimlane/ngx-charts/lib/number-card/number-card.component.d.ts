import { BaseChartComponent } from '../common/base-chart.component';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import * as ɵngcc0 from '@angular/core';
export declare class NumberCardComponent extends BaseChartComponent {
    cardColor: string;
    bandColor: string;
    emptyColor: string;
    innerPadding: number;
    textColor: string;
    valueFormatting: any;
    labelFormatting: any;
    designatedTotal: number;
    dims: ViewDimensions;
    data: any[];
    slots: any[];
    colors: ColorHelper;
    transform: string;
    domain: any[];
    margin: number[];
    backgroundCards: any[];
    get clickable(): boolean;
    update(): void;
    getDomain(): any[];
    onClick(data: any): void;
    setColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NumberCardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NumberCardComponent, "ngx-charts-number-card", never, { "emptyColor": "emptyColor"; "innerPadding": "innerPadding"; "cardColor": "cardColor"; "bandColor": "bandColor"; "textColor": "textColor"; "valueFormatting": "valueFormatting"; "labelFormatting": "labelFormatting"; "designatedTotal": "designatedTotal"; }, {}, never, never>;
}

//# sourceMappingURL=number-card.component.d.ts.map