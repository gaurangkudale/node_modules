import { ElementRef, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class DraggableDirective implements OnDestroy, OnChanges {
    dragEventTarget: any;
    dragModel: any;
    dragX: boolean;
    dragY: boolean;
    dragStart: EventEmitter<any>;
    dragging: EventEmitter<any>;
    dragEnd: EventEmitter<any>;
    element: HTMLElement;
    isDragging: boolean;
    subscription: Subscription;
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onMouseup(event: MouseEvent): void;
    onMousedown(event: MouseEvent): void;
    move(event: MouseEvent, mouseDownPos: {
        x: number;
        y: number;
    }): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DraggableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DraggableDirective, "[draggable]", never, { "dragX": "dragX"; "dragY": "dragY"; "dragEventTarget": "dragEventTarget"; "dragModel": "dragModel"; }, { "dragStart": "dragStart"; "dragging": "dragging"; "dragEnd": "dragEnd"; }, never>;
}

//# sourceMappingURL=draggable.directive.d.ts.map