import { ElementRef, EventEmitter, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ResizeableDirective implements OnDestroy, AfterViewInit {
    private renderer;
    resizeEnabled: boolean;
    minWidth: number;
    maxWidth: number;
    resize: EventEmitter<any>;
    element: HTMLElement;
    subscription: Subscription;
    resizing: boolean;
    private resizeHandle;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onMouseup(): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, initialWidth: number, mouseDownScreenX: number): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResizeableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ResizeableDirective, "[resizeable]", never, { "resizeEnabled": "resizeEnabled"; "minWidth": "minWidth"; "maxWidth": "maxWidth"; }, { "resize": "resize"; }, never>;
}

//# sourceMappingURL=resizeable.directive.d.ts.map