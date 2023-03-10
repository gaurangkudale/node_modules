import { EventEmitter, ChangeDetectorRef, OnDestroy, ElementRef } from '@angular/core';
/**
 * Count up component
 *
 * Loosely inspired by:
 *  - https://github.com/izupet/angular2-counto
 *  - https://inorganik.github.io/countUp.js/
 *
 * @export
 */
import * as ɵngcc0 from '@angular/core';
export declare class CountUpDirective implements OnDestroy {
    private cd;
    countDuration: number;
    countPrefix: string;
    countSuffix: string;
    valueFormatting: any;
    set countDecimals(val: number);
    get countDecimals(): number;
    set countTo(val: any);
    get countTo(): any;
    set countFrom(val: any);
    get countFrom(): any;
    countChange: EventEmitter<any>;
    countFinish: EventEmitter<any>;
    nativeElement: any;
    value: any;
    formattedValue: string;
    private animationReq;
    private _countDecimals;
    private _countTo;
    private _countFrom;
    constructor(cd: ChangeDetectorRef, element: ElementRef);
    ngOnDestroy(): void;
    start(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CountUpDirective, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CountUpDirective, "[ngx-charts-count-up]", never, { "countDuration": "countDuration"; "countPrefix": "countPrefix"; "countSuffix": "countSuffix"; "countDecimals": "countDecimals"; "countTo": "countTo"; "countFrom": "countFrom"; "valueFormatting": "valueFormatting"; }, { "countChange": "countChange"; "countFinish": "countFinish"; }, never, never>;
}

//# sourceMappingURL=count.directive.d.ts.map