import { BehaviorSubject } from 'rxjs';
import { ChartOptions } from 'chart.js';
import * as ɵngcc0 from '@angular/core';
export declare class ThemeService {
    private pColorschemesOptions;
    colorschemesOptions: BehaviorSubject<ChartOptions>;
    constructor();
    setColorschemesOptions(options: ChartOptions): void;
    getColorschemesOptions(): ChartOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ThemeService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ThemeService>;
}

//# sourceMappingURL=theme.service.d.ts.map