import { EventEmitter, QueryList, KeyValueDiffers, AfterContentInit, OnDestroy } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
import * as ɵngcc0 from '@angular/core';
export declare class OrderableDirective implements AfterContentInit, OnDestroy {
    private document;
    reorder: EventEmitter<any>;
    targetChanged: EventEmitter<any>;
    draggables: QueryList<DraggableDirective>;
    positions: any;
    differ: any;
    lastDraggingIndex: number;
    constructor(differs: KeyValueDiffers, document: any);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateSubscriptions(): void;
    onDragStart(): void;
    onDragging({ element, model, event }: any): void;
    onDragEnd({ element, model, event }: any): void;
    isTarget(model: any, event: any): any;
    private createMapDiffs;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OrderableDirective, "[orderable]", never, {}, { "reorder": "reorder"; "targetChanged": "targetChanged"; }, ["draggables"]>;
}

//# sourceMappingURL=orderable.directive.d.ts.map