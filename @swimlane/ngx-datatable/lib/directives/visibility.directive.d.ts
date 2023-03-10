import { EventEmitter, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class VisibilityDirective implements OnInit, OnDestroy {
    private element;
    private zone;
    isVisible: boolean;
    visible: EventEmitter<any>;
    timeout: any;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onVisibilityChange(): void;
    runCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VisibilityDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<VisibilityDirective, "[visibilityObserver]", never, {}, { "visible": "visible"; }, never>;
}

//# sourceMappingURL=visibility.directive.d.ts.map