import { ElementRef, EventEmitter, Renderer2, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollerComponent implements OnInit, OnDestroy {
    private ngZone;
    private renderer;
    scrollbarV: boolean;
    scrollbarH: boolean;
    scrollHeight: number;
    scrollWidth: number;
    scroll: EventEmitter<any>;
    scrollYPos: number;
    scrollXPos: number;
    prevScrollYPos: number;
    prevScrollXPos: number;
    element: any;
    parentElement: any;
    onScrollListener: any;
    private _scrollEventListener;
    constructor(ngZone: NgZone, element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setOffset(offsetY: number): void;
    onScrolled(event: MouseEvent): void;
    updateOffset(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScrollerComponent, "datatable-scroller", never, { "scrollbarV": "scrollbarV"; "scrollbarH": "scrollbarH"; "scrollHeight": "scrollHeight"; "scrollWidth": "scrollWidth"; }, { "scroll": "scroll"; }, never, ["*"]>;
}

//# sourceMappingURL=scroller.component.d.ts.map