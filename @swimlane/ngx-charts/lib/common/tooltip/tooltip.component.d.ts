import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
import { AlignmentTypes } from './alignment.type';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContentComponent implements AfterViewInit {
    element: ElementRef;
    private renderer;
    private platformId;
    host: any;
    showCaret: boolean;
    type: StyleTypes;
    placement: PlacementTypes;
    alignment: AlignmentTypes;
    spacing: number;
    cssClass: string;
    title: string;
    template: any;
    context: any;
    caretElm: any;
    get cssClasses(): string;
    constructor(element: ElementRef, renderer: Renderer2, platformId: any);
    ngAfterViewInit(): void;
    position(): void;
    positionContent(nativeElm: any, hostDim: any, elmDim: any): void;
    positionCaret(hostDim: any, elmDim: any): void;
    checkFlip(hostDim: any, elmDim: any): void;
    onWindowResize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipContentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipContentComponent, "ngx-tooltip-content", never, { "placement": "placement"; "host": "host"; "showCaret": "showCaret"; "type": "type"; "alignment": "alignment"; "spacing": "spacing"; "cssClass": "cssClass"; "title": "title"; "template": "template"; "context": "context"; }, {}, never, never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map