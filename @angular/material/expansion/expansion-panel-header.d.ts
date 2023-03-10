/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor, FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelDefaultOptions } from './expansion-panel';
import { MatAccordionTogglePosition } from './accordion-base';
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class MatExpansionPanelHeader implements OnDestroy, FocusableOption {
    panel: MatExpansionPanel;
    private _element;
    private _focusMonitor;
    private _changeDetectorRef;
    private _parentChangeSubscription;
    /** Whether Angular animations in the panel header should be disabled. */
    _animationsDisabled: boolean;
    constructor(panel: MatExpansionPanel, _element: ElementRef, _focusMonitor: FocusMonitor, _changeDetectorRef: ChangeDetectorRef, defaultOptions?: MatExpansionPanelDefaultOptions);
    _animationStarted(): void;
    /** Height of the header while the panel is expanded. */
    expandedHeight: string;
    /** Height of the header while the panel is collapsed. */
    collapsedHeight: string;
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled(): any;
    /** Toggles the expanded state of the panel. */
    _toggle(): void;
    /** Gets whether the panel is expanded. */
    _isExpanded(): boolean;
    /** Gets the expanded state string of the panel. */
    _getExpandedState(): string;
    /** Gets the panel id. */
    _getPanelId(): string;
    /** Gets the toggle position for the header. */
    _getTogglePosition(): MatAccordionTogglePosition;
    /** Gets whether the expand indicator should be shown. */
    _showToggle(): boolean;
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event: KeyboardEvent): void;
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatExpansionPanelHeader, [{ host: true; }, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatExpansionPanelHeader, "mat-expansion-panel-header", never, { "expandedHeight": "expandedHeight"; "collapsedHeight": "collapsedHeight"; }, {}, never, ["mat-panel-title", "mat-panel-description", "*"]>;
}
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
export declare class MatExpansionPanelDescription {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatExpansionPanelDescription, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatExpansionPanelDescription, "mat-panel-description", never, {}, {}, never>;
}
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
export declare class MatExpansionPanelTitle {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatExpansionPanelTitle, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatExpansionPanelTitle, "mat-panel-title", never, {}, {}, never>;
}

//# sourceMappingURL=expansion-panel-header.d.ts.map