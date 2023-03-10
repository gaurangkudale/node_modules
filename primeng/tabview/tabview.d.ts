import { ElementRef, OnDestroy, EventEmitter, AfterContentInit, QueryList, TemplateRef, EmbeddedViewRef, ViewContainerRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { BlockableUI } from 'primeng/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/api';
import * as ɵngcc3 from 'primeng/tooltip';
import * as ɵngcc4 from 'primeng/ripple';
export declare class TabPanel implements AfterContentInit, OnDestroy {
    viewContainer: ViewContainerRef;
    cd: ChangeDetectorRef;
    header: string;
    closable: boolean;
    headerStyle: any;
    headerStyleClass: string;
    leftIcon: string;
    rightIcon: string;
    cache: boolean;
    tooltip: any;
    tooltipPosition: string;
    tooltipPositionStyle: string;
    tooltipStyleClass: string;
    templates: QueryList<any>;
    closed: boolean;
    view: EmbeddedViewRef<any>;
    _selected: boolean;
    _disabled: boolean;
    loaded: boolean;
    id: string;
    contentTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    tabView: TabView;
    constructor(tabView: any, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    get selected(): boolean;
    set selected(val: boolean);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabPanel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabPanel, "p-tabPanel", never, { "cache": "cache"; "tooltipPosition": "tooltipPosition"; "tooltipPositionStyle": "tooltipPositionStyle"; "selected": "selected"; "disabled": "disabled"; "header": "header"; "closable": "closable"; "headerStyle": "headerStyle"; "headerStyleClass": "headerStyleClass"; "leftIcon": "leftIcon"; "rightIcon": "rightIcon"; "tooltip": "tooltip"; "tooltipStyleClass": "tooltipStyleClass"; }, {}, ["templates"], ["*"]>;
}
export declare class TabView implements AfterContentInit, AfterViewChecked, BlockableUI {
    el: ElementRef;
    cd: ChangeDetectorRef;
    orientation: string;
    style: any;
    styleClass: string;
    controlClose: boolean;
    navbar: ElementRef;
    inkbar: ElementRef;
    tabPanels: QueryList<TabPanel>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    activeIndexChange: EventEmitter<number>;
    initialized: boolean;
    tabs: TabPanel[];
    _activeIndex: number;
    preventActiveIndexPropagation: boolean;
    tabChanged: boolean;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    initTabs(): void;
    open(event: Event, tab: TabPanel): void;
    close(event: Event, tab: TabPanel): void;
    closeTab(tab: TabPanel): void;
    findSelectedTab(): TabPanel;
    findTabIndex(tab: TabPanel): number;
    getBlockableElement(): HTMLElement;
    get activeIndex(): number;
    set activeIndex(val: number);
    updateInkBar(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabView, "p-tabView", never, { "orientation": "orientation"; "activeIndex": "activeIndex"; "style": "style"; "styleClass": "styleClass"; "controlClose": "controlClose"; }, { "onChange": "onChange"; "onClose": "onClose"; "activeIndexChange": "activeIndexChange"; }, ["tabPanels"], ["*"]>;
}
export declare class TabViewModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TabViewModule, [typeof TabView, typeof TabPanel], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.SharedModule, typeof ɵngcc3.TooltipModule, typeof ɵngcc4.RippleModule], [typeof TabView, typeof TabPanel, typeof ɵngcc2.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TabViewModule>;
}

//# sourceMappingURL=tabview.d.ts.map