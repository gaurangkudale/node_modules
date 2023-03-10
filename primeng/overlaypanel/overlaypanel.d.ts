import { OnDestroy, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef, NgZone, TemplateRef, AfterContentInit, QueryList } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
export declare class OverlayPanel implements AfterContentInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    private zone;
    dismissable: boolean;
    showCloseIcon: boolean;
    style: any;
    styleClass: string;
    appendTo: any;
    autoZIndex: boolean;
    ariaCloseLabel: string;
    baseZIndex: number;
    focusOnShow: boolean;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    templates: QueryList<any>;
    container: HTMLDivElement;
    overlayVisible: boolean;
    render: boolean;
    isContainerClicked: boolean;
    documentClickListener: any;
    target: any;
    willHide: boolean;
    scrollHandler: any;
    documentResizeListener: any;
    contentTemplate: TemplateRef<any>;
    destroyCallback: Function;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, zone: NgZone);
    ngAfterContentInit(): void;
    onContainerClick(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    toggle(event: any, target?: any): void;
    show(event: any, target?: any): void;
    hasTargetChanged(event: any, target: any): boolean;
    appendContainer(): void;
    restoreAppend(): void;
    align(): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    focus(): void;
    hide(): void;
    onCloseClick(event: any): void;
    onWindowResize(event: any): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    onContainerDestroy(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayPanel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OverlayPanel, "p-overlayPanel", never, { "dismissable": "dismissable"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "focusOnShow": "focusOnShow"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "showCloseIcon": "showCloseIcon"; "style": "style"; "styleClass": "styleClass"; "appendTo": "appendTo"; "ariaCloseLabel": "ariaCloseLabel"; }, { "onShow": "onShow"; "onHide": "onHide"; }, ["templates"], ["*"]>;
}
export declare class OverlayPanelModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<OverlayPanelModule, [typeof OverlayPanel], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.RippleModule], [typeof OverlayPanel]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<OverlayPanelModule>;
}

//# sourceMappingURL=overlaypanel.d.ts.map