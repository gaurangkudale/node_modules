import { EventEmitter, ElementRef, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class Timeline implements OnChanges {
    private cd;
    view: any;
    state: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: any;
    miniChart: any;
    autoScale: any;
    scaleType: any;
    height: number;
    select: EventEmitter<any>;
    onDomainChange: EventEmitter<any>;
    element: HTMLElement;
    dims: any;
    xDomain: any[];
    xScale: any;
    brush: any;
    transform: string;
    initialized: boolean;
    filterId: any;
    filter: any;
    constructor(element: ElementRef, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getXDomain(): any[];
    getXScale(): any;
    addBrush(): void;
    updateBrush(): void;
    getDims(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Timeline, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Timeline, "g[ngx-charts-timeline]", never, { "height": "height"; "view": "view"; "state": "state"; "results": "results"; "scheme": "scheme"; "customColors": "customColors"; "legend": "legend"; "miniChart": "miniChart"; "autoScale": "autoScale"; "scaleType": "scaleType"; }, { "select": "select"; "onDomainChange": "onDomainChange"; }, never, ["*"]>;
}

//# sourceMappingURL=timeline.component.d.ts.map