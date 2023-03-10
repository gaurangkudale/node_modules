import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class LegendEntryComponent {
    color: string;
    label: any;
    formattedLabel: string;
    isActive: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    toggle: EventEmitter<any>;
    get trimmedLabel(): string;
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LegendEntryComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LegendEntryComponent, "ngx-charts-legend-entry", never, { "isActive": "isActive"; "color": "color"; "label": "label"; "formattedLabel": "formattedLabel"; }, { "select": "select"; "activate": "activate"; "deactivate": "deactivate"; "toggle": "toggle"; }, never, never>;
}

//# sourceMappingURL=legend-entry.component.d.ts.map