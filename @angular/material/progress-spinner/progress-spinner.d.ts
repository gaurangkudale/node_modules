/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NumberInput } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { ElementRef, InjectionToken, OnInit } from '@angular/core';
import { CanColor, CanColorCtor } from '@angular/material/core';
/** Possible mode for a progress spinner. */
import * as ɵngcc0 from '@angular/core';
export declare type ProgressSpinnerMode = 'determinate' | 'indeterminate';
/** @docs-private */
declare class MatProgressSpinnerBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const _MatProgressSpinnerMixinBase: CanColorCtor & typeof MatProgressSpinnerBase;
/** Default `mat-progress-spinner` options that can be overridden. */
export interface MatProgressSpinnerDefaultOptions {
    /** Diameter of the spinner. */
    diameter?: number;
    /** Width of the spinner's stroke. */
    strokeWidth?: number;
    /**
     * Whether the animations should be force to be enabled, ignoring if the current environment is
     * using NoopAnimationsModule.
     */
    _forceAnimations?: boolean;
}
/** Injection token to be used to override the default options for `mat-progress-spinner`. */
export declare const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS: InjectionToken<MatProgressSpinnerDefaultOptions>;
/** @docs-private */
export declare function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY(): MatProgressSpinnerDefaultOptions;
/**
 * `<mat-progress-spinner>` component.
 */
export declare class MatProgressSpinner extends _MatProgressSpinnerMixinBase implements OnInit, CanColor {
    _elementRef: ElementRef<HTMLElement>;
    private _document;
    private _diameter;
    private _value;
    private _strokeWidth;
    private _fallbackAnimation;
    /**
     * Element to which we should add the generated style tags for the indeterminate animation.
     * For most elements this is the document, but for the ones in the Shadow DOM we need to
     * use the shadow root.
     */
    private _styleRoot;
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */
    private static _diameters;
    /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
    _noopAnimations: boolean;
    /** The diameter of the progress spinner (will set width and height of svg). */
    get diameter(): number;
    set diameter(size: number);
    /** Stroke width of the progress spinner. */
    get strokeWidth(): number;
    set strokeWidth(value: number);
    /** Mode of the progress circle */
    mode: ProgressSpinnerMode;
    /** Value of the progress circle. */
    get value(): number;
    set value(newValue: number);
    constructor(_elementRef: ElementRef<HTMLElement>, platform: Platform, _document: any, animationMode: string, defaults?: MatProgressSpinnerDefaultOptions);
    ngOnInit(): void;
    /** The radius of the spinner, adjusted for stroke width. */
    get _circleRadius(): number;
    /** The view box of the spinner's svg element. */
    get _viewBox(): string;
    /** The stroke circumference of the svg circle. */
    get _strokeCircumference(): number;
    /** The dash offset of the svg circle. */
    get _strokeDashOffset(): number | null;
    /** Stroke width of the circle in percent. */
    get _circleStrokeWidth(): number;
    /** Dynamically generates a style tag containing the correct animation for this diameter. */
    private _attachStyleNode;
    /** Generates animation styles adjusted for the spinner's diameter. */
    private _getAnimationText;
    static ngAcceptInputType_diameter: NumberInput;
    static ngAcceptInputType_strokeWidth: NumberInput;
    static ngAcceptInputType_value: NumberInput;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatProgressSpinner, [null, null, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatProgressSpinner, "mat-progress-spinner", ["matProgressSpinner"], { "color": "color"; "mode": "mode"; "diameter": "diameter"; "strokeWidth": "strokeWidth"; "value": "value"; }, {}, never, never>;
}
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
export declare class MatSpinner extends MatProgressSpinner {
    constructor(elementRef: ElementRef<HTMLElement>, platform: Platform, document: any, animationMode: string, defaults?: MatProgressSpinnerDefaultOptions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatSpinner, [null, null, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatSpinner, "mat-spinner", never, { "color": "color"; }, {}, never, never>;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
export declare function _getShadowRoot(element: HTMLElement, _document: Document): Node | null;
export {};

//# sourceMappingURL=progress-spinner.d.ts.map