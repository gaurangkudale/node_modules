/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationEvent } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { BooleanInput } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { MatExpansionPanelContent } from './expansion-panel-content';
import { MatAccordionBase, MatAccordionTogglePosition } from './accordion-base';
/** MatExpansionPanel's states. */
import * as ɵngcc0 from '@angular/core';
export declare type MatExpansionPanelState = 'expanded' | 'collapsed';
/**
 * Object that can be used to override the default options
 * for all of the expansion panels in a module.
 */
export interface MatExpansionPanelDefaultOptions {
    /** Height of the header while the panel is expanded. */
    expandedHeight: string;
    /** Height of the header while the panel is collapsed. */
    collapsedHeight: string;
    /** Whether the toggle indicator should be hidden. */
    hideToggle: boolean;
}
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 */
export declare const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS: InjectionToken<MatExpansionPanelDefaultOptions>;
/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
export declare class MatExpansionPanel extends CdkAccordionItem implements AfterContentInit, OnChanges, OnDestroy {
    private _viewContainerRef;
    _animationMode: string;
    private _document;
    private _hideToggle;
    private _togglePosition;
    /** Whether the toggle indicator should be hidden. */
    get hideToggle(): boolean;
    set hideToggle(value: boolean);
    /** The position of the expansion indicator. */
    get togglePosition(): MatAccordionTogglePosition;
    set togglePosition(value: MatAccordionTogglePosition);
    /** An event emitted after the body's expansion animation happens. */
    afterExpand: EventEmitter<void>;
    /** An event emitted after the body's collapse animation happens. */
    afterCollapse: EventEmitter<void>;
    /** Stream that emits for changes in `@Input` properties. */
    readonly _inputChanges: Subject<SimpleChanges>;
    /** Optionally defined accordion the expansion panel belongs to. */
    accordion: MatAccordionBase;
    /** Content that will be rendered lazily. */
    _lazyContent: MatExpansionPanelContent;
    /** Element containing the panel's user-provided content. */
    _body: ElementRef<HTMLElement>;
    /** Portal holding the user's content. */
    _portal: TemplatePortal;
    /** ID for the associated header element. Used for a11y labelling. */
    _headerId: string;
    /** Stream of body animation done events. */
    _bodyAnimationDone: Subject<AnimationEvent>;
    constructor(accordion: MatAccordionBase, _changeDetectorRef: ChangeDetectorRef, _uniqueSelectionDispatcher: UniqueSelectionDispatcher, _viewContainerRef: ViewContainerRef, _document: any, _animationMode: string, defaultOptions?: MatExpansionPanelDefaultOptions);
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing(): boolean;
    /** Gets the expanded state string. */
    _getExpandedState(): MatExpansionPanelState;
    /** Toggles the expanded state of the expansion panel. */
    toggle(): void;
    /** Sets the expanded state of the expansion panel to false. */
    close(): void;
    /** Sets the expanded state of the expansion panel to true. */
    open(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus(): boolean;
    static ngAcceptInputType_hideToggle: BooleanInput;
    static ngAcceptInputType_expanded: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatExpansionPanel, [{ optional: true; skipSelf: true; }, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatExpansionPanel, "mat-expansion-panel", ["matExpansionPanel"], { "disabled": "disabled"; "expanded": "expanded"; "hideToggle": "hideToggle"; "togglePosition": "togglePosition"; }, { "opened": "opened"; "closed": "closed"; "expandedChange": "expandedChange"; "afterExpand": "afterExpand"; "afterCollapse": "afterCollapse"; }, ["_lazyContent"], ["mat-expansion-panel-header", "*", "mat-action-row"]>;
}
export declare class MatExpansionPanelActionRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatExpansionPanelActionRow, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatExpansionPanelActionRow, "mat-action-row", never, {}, {}, never>;
}

//# sourceMappingURL=expansion-panel.d.ts.map