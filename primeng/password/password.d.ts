import { ElementRef, OnDestroy, DoCheck, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class Password implements OnDestroy, DoCheck {
    el: ElementRef;
    zone: NgZone;
    promptLabel: string;
    weakLabel: string;
    mediumLabel: string;
    strongLabel: string;
    feedback: boolean;
    set showPassword(show: boolean);
    panel: HTMLDivElement;
    meter: any;
    info: any;
    filled: boolean;
    scrollHandler: any;
    documentResizeListener: any;
    constructor(el: ElementRef, zone: NgZone);
    ngDoCheck(): void;
    onInput(e: any): void;
    updateFilledState(): void;
    createPanel(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onFocus(): void;
    onBlur(): void;
    onKeyup(e: any): void;
    testStrength(str: string): number;
    normalize(x: any, y: any): number;
    get disabled(): boolean;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    onWindowResize(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Password, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Password, "[pPassword]", never, { "promptLabel": "promptLabel"; "weakLabel": "weakLabel"; "mediumLabel": "mediumLabel"; "strongLabel": "strongLabel"; "feedback": "feedback"; "showPassword": "showPassword"; }, {}, never>;
}
export declare class PasswordModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PasswordModule, [typeof Password], [typeof ɵngcc1.CommonModule], [typeof Password]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PasswordModule>;
}

//# sourceMappingURL=password.d.ts.map