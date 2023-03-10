import { ElementRef, OnChanges, OnDestroy, SimpleChange, EventEmitter } from '@angular/core';
import { DragulaService } from './dragula.service';
import * as ɵngcc0 from '@angular/core';
export declare class DragulaDirective implements OnChanges, OnDestroy {
    private el;
    private dragulaService;
    dragula: string;
    dragulaModel: any[];
    dragulaModelChange: EventEmitter<any[]>;
    private subs;
    private readonly container;
    private group;
    constructor(el: ElementRef, dragulaService: DragulaService);
    ngOnChanges(changes: {
        dragula?: SimpleChange;
        dragulaModel?: SimpleChange;
    }): void;
    setup(): void;
    subscribe(name: string): void;
    teardown(groupName: string): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragulaDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DragulaDirective, "[dragula]", never, { "dragula": "dragula"; "dragulaModel": "dragulaModel"; }, { "dragulaModelChange": "dragulaModelChange"; }, never>;
}

//# sourceMappingURL=dragula.directive.d.ts.map