import { OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SvgRadialGradientComponent implements OnChanges {
    color: string;
    name: string;
    startOpacity: number;
    endOpacity: number;
    cx: number;
    cy: number;
    get stops(): any[];
    set stops(value: any[]);
    r: string;
    private stopsInput;
    private stopsDefault;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SvgRadialGradientComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SvgRadialGradientComponent, "g[ngx-charts-svg-radial-gradient]", never, { "endOpacity": "endOpacity"; "cx": "cx"; "cy": "cy"; "stops": "stops"; "color": "color"; "name": "name"; "startOpacity": "startOpacity"; }, {}, never, never>;
}

//# sourceMappingURL=svg-radial-gradient.component.d.ts.map