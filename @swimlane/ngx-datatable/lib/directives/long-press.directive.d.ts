import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LongPressDirective implements OnDestroy {
    pressEnabled: boolean;
    pressModel: any;
    duration: number;
    longPressStart: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    subscription: Subscription;
    get press(): boolean;
    get isLongPress(): boolean;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    loop(event: MouseEvent): void;
    endPress(): void;
    onMouseup(): void;
    ngOnDestroy(): void;
    private _destroySubscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LongPressDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LongPressDirective, "[long-press]", never, { "pressEnabled": "pressEnabled"; "duration": "duration"; "pressModel": "pressModel"; }, { "longPressStart": "longPressStart"; "longPressing": "longPressing"; "longPressEnd": "longPressEnd"; }, never>;
}

//# sourceMappingURL=long-press.directive.d.ts.map