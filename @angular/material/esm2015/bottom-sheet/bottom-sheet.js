/**
 * @fileoverview added by tsickle
 * Generated from: src/material/bottom-sheet/bottom-sheet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector, Optional, SkipSelf, TemplateRef, InjectionToken, Inject, } from '@angular/core';
import { Location } from '@angular/common';
import { of as observableOf } from 'rxjs';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig } from './bottom-sheet-config';
import { MatBottomSheetContainer } from './bottom-sheet-container';
import { MatBottomSheetModule } from './bottom-sheet-module';
import { MatBottomSheetRef } from './bottom-sheet-ref';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/common";
import * as i3 from "angular_material/src/material/bottom-sheet/bottom-sheet-module";
/**
 * Injection token that can be used to specify default bottom sheet options.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/common';
export const MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken('mat-bottom-sheet-default-options');
/**
 * Service to trigger Material Design bottom sheets.
 */
export class MatBottomSheet {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} _parentBottomSheet
     * @param {?=} _location
     * @param {?=} _defaultOptions
     */
    constructor(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
    }
    /**
     * Reference to the currently opened bottom sheet.
     * @return {?}
     */
    get _openedBottomSheetRef() {
        /** @type {?} */
        const parent = this._parentBottomSheet;
        return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _openedBottomSheetRef(value) {
        if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
        }
        else {
            this._bottomSheetRefAtThisLevel = value;
        }
    }
    /**
     * @template T, D, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    open(componentOrTemplateRef, config) {
        /** @type {?} */
        const _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
        /** @type {?} */
        const overlayRef = this._createOverlay(_config);
        /** @type {?} */
        const container = this._attachContainer(overlayRef, _config);
        /** @type {?} */
        const ref = new MatBottomSheetRef(container, overlayRef, this._location);
        if (componentOrTemplateRef instanceof TemplateRef) {
            container.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({
                $implicit: _config.data,
                bottomSheetRef: ref
            }))));
        }
        else {
            /** @type {?} */
            const portal = new ComponentPortal(componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            /** @type {?} */
            const contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        // When the bottom sheet is dismissed, clear the reference to it.
        ref.afterDismissed().subscribe((/**
         * @return {?}
         */
        () => {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (this._openedBottomSheetRef == ref) {
                this._openedBottomSheetRef = null;
            }
        }));
        if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe((/**
             * @return {?}
             */
            () => ref.containerInstance.enter()));
            this._openedBottomSheetRef.dismiss();
        }
        else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    }
    /**
     * Dismisses the currently-visible bottom sheet.
     * @return {?}
     */
    dismiss() {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the bottom sheet container component to the overlay.
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    _attachContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injector = new PortalInjector(userInjector || this._injector, new WeakMap([
            [MatBottomSheetConfig, config]
        ]));
        /** @type {?} */
        const containerPortal = new ComponentPortal(MatBottomSheetContainer, config.viewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @private
     * @param {?} config The user-specified bottom sheet config.
     * @return {?}
     */
    _createOverlay(config) {
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @private
     * @template T
     * @param {?} config Config that was used to create the bottom sheet.
     * @param {?} bottomSheetRef Reference to the bottom sheet.
     * @return {?}
     */
    _createInjector(config, bottomSheetRef) {
        /** @type {?} */
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        /** @type {?} */
        const injectionTokens = new WeakMap([
            [MatBottomSheetRef, bottomSheetRef],
            [MAT_BOTTOM_SHEET_DATA, config.data]
        ]);
        if (config.direction &&
            (!userInjector || !userInjector.get(Directionality, null))) {
            injectionTokens.set(Directionality, {
                value: config.direction,
                change: observableOf()
            });
        }
        return new PortalInjector(userInjector || this._injector, injectionTokens);
    }
}
MatBottomSheet.ɵfac = function MatBottomSheet_Factory(t) { return new (t || MatBottomSheet)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(MatBottomSheet, 12), ɵngcc0.ɵɵinject(ɵngcc2.Location, 8), ɵngcc0.ɵɵinject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); };
/** @nocollapse */
MatBottomSheet.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: MatBottomSheet, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Location, decorators: [{ type: Optional }] },
    { type: MatBottomSheetConfig, decorators: [{ type: Optional }, { type: Inject, args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ MatBottomSheet.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatBottomSheet_Factory() { return new MatBottomSheet(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(MatBottomSheet, 12), i0.ɵɵinject(i2.Location, 8), i0.ɵɵinject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); }, token: MatBottomSheet, providedIn: i3.MatBottomSheetModule });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatBottomSheet, [{
        type: Injectable,
        args: [{ providedIn: MatBottomSheetModule }]
    }], function () { return [{ type: ɵngcc1.Overlay }, { type: ɵngcc0.Injector }, { type: MatBottomSheet, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ɵngcc2.Location, decorators: [{
                type: Optional
            }] }, { type: MatBottomSheetConfig, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._bottomSheetRefAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._parentBottomSheet;
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._location;
    /**
     * @type {?}
     * @private
     */
    MatBottomSheet.prototype._defaultOptions;
}
/**
 * Applies default options to the bottom sheet config.
 * @param {?} defaults Object containing the default values to which to fall back.
 * @param {?=} config The configuration to which the defaults will be applied.
 * @return {?} The new configuration object with defaults applied.
 */
function _applyConfigDefaults(defaults, config) {
    return Object.assign(Object.assign({}, defaults), config);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXNoZWV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFpQixjQUFjLEVBQUUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkcsT0FBTyxFQUVMLFVBQVUsRUFDVixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixXQUFXLEVBQ1gsY0FBYyxFQUNkLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDckQ7QUFFbUM7QUFBNEM7QUFDMUM7QUFDc0M7QUFBSTtBQUtuRTtBQUFhOzs7O0FBTnpCLE1BQU0sT0FBTyxnQ0FBZ0MsR0FDekMsSUFBSSxjQUFjLENBQXVCLGtDQUFrQyxDQUFDO0FBQ2hGO0FBQ0c7QUFDaUQ7QUFHcEQsTUFBTSxPQUFPLGNBQWM7QUFBRztBQUFRO0FBQ3hCO0FBQTRCO0FBRXhDO0FBQTZCO0FBQ3RCO0FBQVEsSUFhZixZQUNZLFFBQWlCLEVB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Z0M7QUFDcEQ7QUFBRzs7Ozs7Ozs7Ozs7Ozs7O2tDQU9rQztBQUFDO0FBQWE7QUFBUTtBQUFpQjtBQUN2RTtBQUFRLElBOUJqQixvREFBeUU7QUFDM0U7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBZTFDLGtDQUF5QjtBQUFDO0FBQ3pCO0FBQWlCO0FBQ25CO0FBQVEsSUFEUCxtQ0FBMkI7QUFBQztBQUMzQjtBQUFpQjtBQUFnQjtBQUFRLElBQTFDLDRDQUFrRTtBQUFDO0FBQ2xFO0FBQWlCO0FBQWdCO0FBQ3hDLElBRE0sbUNBQXdDO0FBQUM7QUFDeEM7QUFBaUI7QUFBZ0I7QUFBUSxJQUExQyx5Q0FDa0Q7QUFBQztBQUFFO0FBRTFEO0FBQXVEO0FBRXJEO0FBQ3lCO0FBRWI7QUFpSWYsU0FBUyxvQkFBb0IsQ0FBQyxRQUE4QixFQUM5QixNQUE2QjtBQUFJLElBQzdELHVDQUFXLFFBQVEsR0FBSyxNQUFNLEVBQUU7QUFDbEMsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWwsIENvbXBvbmVudFR5cGUsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7b2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TUFUX0JPVFRPTV9TSEVFVF9EQVRBLCBNYXRCb3R0b21TaGVldENvbmZpZ30gZnJvbSAnLi9ib3R0b20tc2hlZXQtY29uZmlnJztcbmltcG9ydCB7TWF0Qm90dG9tU2hlZXRDb250YWluZXJ9IGZyb20gJy4vYm90dG9tLXNoZWV0LWNvbnRhaW5lcic7XG5pbXBvcnQge01hdEJvdHRvbVNoZWV0TW9kdWxlfSBmcm9tICcuL2JvdHRvbS1zaGVldC1tb2R1bGUnO1xuaW1wb3J0IHtNYXRCb3R0b21TaGVldFJlZn0gZnJvbSAnLi9ib3R0b20tc2hlZXQtcmVmJztcblxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBkZWZhdWx0IGJvdHRvbSBzaGVldCBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9CT1RUT01fU0hFRVRfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0Qm90dG9tU2hlZXRDb25maWc+KCdtYXQtYm90dG9tLXNoZWV0LWRlZmF1bHQtb3B0aW9ucycpO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gdHJpZ2dlciBNYXRlcmlhbCBEZXNpZ24gYm90dG9tIHNoZWV0cy5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46IE1hdEJvdHRvbVNoZWV0TW9kdWxlfSlcbmV4cG9ydCBjbGFzcyBNYXRCb3R0b21TaGVldCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2JvdHRvbVNoZWV0UmVmQXRUaGlzTGV2ZWw6IE1hdEJvdHRvbVNoZWV0UmVmPGFueT4gfCBudWxsID0gbnVsbDtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHkgb3BlbmVkIGJvdHRvbSBzaGVldC4gKi9cbiAgZ2V0IF9vcGVuZWRCb3R0b21TaGVldFJlZigpOiBNYXRCb3R0b21TaGVldFJlZjxhbnk+IHwgbnVsbCB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fcGFyZW50Qm90dG9tU2hlZXQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5fb3BlbmVkQm90dG9tU2hlZXRSZWYgOiB0aGlzLl9ib3R0b21TaGVldFJlZkF0VGhpc0xldmVsO1xuICB9XG5cbiAgc2V0IF9vcGVuZWRCb3R0b21TaGVldFJlZih2YWx1ZTogTWF0Qm90dG9tU2hlZXRSZWY8YW55PiB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50Qm90dG9tU2hlZXQpIHtcbiAgICAgIHRoaXMuX3BhcmVudEJvdHRvbVNoZWV0Ll9vcGVuZWRCb3R0b21TaGVldFJlZiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ib3R0b21TaGVldFJlZkF0VGhpc0xldmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBfcGFyZW50Qm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfbG9jYXRpb24/OiBMb2NhdGlvbixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9ERUZBVUxUX09QVElPTlMpXG4gICAgICAgICAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM/OiBNYXRCb3R0b21TaGVldENvbmZpZykge31cblxuICBvcGVuPFQsIEQgPSBhbnksIFIgPSBhbnk+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcbiAgICAgICAgICAgICAgICAgICBjb25maWc/OiBNYXRCb3R0b21TaGVldENvbmZpZzxEPik6IE1hdEJvdHRvbVNoZWV0UmVmPFQsIFI+O1xuICBvcGVuPFQsIEQgPSBhbnksIFIgPSBhbnk+KHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUPixcbiAgICAgICAgICAgICAgICAgICBjb25maWc/OiBNYXRCb3R0b21TaGVldENvbmZpZzxEPik6IE1hdEJvdHRvbVNoZWV0UmVmPFQsIFI+O1xuXG4gIG9wZW48VCwgRCA9IGFueSwgUiA9IGFueT4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxuICAgICAgICAgICAgICAgICAgIGNvbmZpZz86IE1hdEJvdHRvbVNoZWV0Q29uZmlnPEQ+KTogTWF0Qm90dG9tU2hlZXRSZWY8VCwgUj4ge1xuXG4gICAgY29uc3QgX2NvbmZpZyA9XG4gICAgICAgIF9hcHBseUNvbmZpZ0RlZmF1bHRzKHRoaXMuX2RlZmF1bHRPcHRpb25zIHx8IG5ldyBNYXRCb3R0b21TaGVldENvbmZpZygpLCBjb25maWcpO1xuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KF9jb25maWcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2F0dGFjaENvbnRhaW5lcihvdmVybGF5UmVmLCBfY29uZmlnKTtcbiAgICBjb25zdCByZWYgPSBuZXcgTWF0Qm90dG9tU2hlZXRSZWY8VCwgUj4oY29udGFpbmVyLCBvdmVybGF5UmVmLCB0aGlzLl9sb2NhdGlvbik7XG5cbiAgICBpZiAoY29tcG9uZW50T3JUZW1wbGF0ZVJlZiBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb250YWluZXIuYXR0YWNoVGVtcGxhdGVQb3J0YWwobmV3IFRlbXBsYXRlUG9ydGFsPFQ+KGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIG51bGwhLCB7XG4gICAgICAgICRpbXBsaWNpdDogX2NvbmZpZy5kYXRhLFxuICAgICAgICBib3R0b21TaGVldFJlZjogcmVmXG4gICAgICB9IGFzIGFueSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUluamVjdG9yKF9jb25maWcsIHJlZikpO1xuICAgICAgY29uc3QgY29udGVudFJlZiA9IGNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgICAgIHJlZi5pbnN0YW5jZSA9IGNvbnRlbnRSZWYuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgYm90dG9tIHNoZWV0IGlzIGRpc21pc3NlZCwgY2xlYXIgdGhlIHJlZmVyZW5jZSB0byBpdC5cbiAgICByZWYuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gQ2xlYXIgdGhlIGJvdHRvbSBzaGVldCByZWYgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiByZXBsYWNlZCBieSBhIG5ld2VyIG9uZS5cbiAgICAgIGlmICh0aGlzLl9vcGVuZWRCb3R0b21TaGVldFJlZiA9PSByZWYpIHtcbiAgICAgICAgdGhpcy5fb3BlbmVkQm90dG9tU2hlZXRSZWYgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX29wZW5lZEJvdHRvbVNoZWV0UmVmKSB7XG4gICAgICAvLyBJZiBhIGJvdHRvbSBzaGVldCBpcyBhbHJlYWR5IGluIHZpZXcsIGRpc21pc3MgaXQgYW5kIGVudGVyIHRoZVxuICAgICAgLy8gbmV3IGJvdHRvbSBzaGVldCBhZnRlciBleGl0IGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgIHRoaXMuX29wZW5lZEJvdHRvbVNoZWV0UmVmLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKCgpID0+IHJlZi5jb250YWluZXJJbnN0YW5jZS5lbnRlcigpKTtcbiAgICAgIHRoaXMuX29wZW5lZEJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgbm8gYm90dG9tIHNoZWV0IGlzIGluIHZpZXcsIGVudGVyIHRoZSBuZXcgYm90dG9tIHNoZWV0LlxuICAgICAgcmVmLmNvbnRhaW5lckluc3RhbmNlLmVudGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3BlbmVkQm90dG9tU2hlZXRSZWYgPSByZWY7XG5cbiAgICByZXR1cm4gcmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc21pc3NlcyB0aGUgY3VycmVudGx5LXZpc2libGUgYm90dG9tIHNoZWV0LlxuICAgKi9cbiAgZGlzbWlzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkQm90dG9tU2hlZXRSZWYpIHtcbiAgICAgIHRoaXMuX29wZW5lZEJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYm90dG9tU2hlZXRSZWZBdFRoaXNMZXZlbCkge1xuICAgICAgdGhpcy5fYm90dG9tU2hlZXRSZWZBdFRoaXNMZXZlbC5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoZSBib3R0b20gc2hlZXQgY29udGFpbmVyIGNvbXBvbmVudCB0byB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHByaXZhdGUgX2F0dGFjaENvbnRhaW5lcihvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBNYXRCb3R0b21TaGVldENvbmZpZyk6IE1hdEJvdHRvbVNoZWV0Q29udGFpbmVyIHtcblxuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5faW5qZWN0b3IsIG5ldyBXZWFrTWFwKFtcbiAgICAgIFtNYXRCb3R0b21TaGVldENvbmZpZywgY29uZmlnXVxuICAgIF0pKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9XG4gICAgICAgIG5ldyBDb21wb25lbnRQb3J0YWwoTWF0Qm90dG9tU2hlZXRDb250YWluZXIsIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3Rvcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8TWF0Qm90dG9tU2hlZXRDb250YWluZXI+ID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgb3ZlcmxheSBhbmQgcGxhY2VzIGl0IGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gY29uZmlnIFRoZSB1c2VyLXNwZWNpZmllZCBib3R0b20gc2hlZXQgY29uZmlnLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheShjb25maWc6IE1hdEJvdHRvbVNoZWV0Q29uZmlnKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGRpcmVjdGlvbjogY29uZmlnLmRpcmVjdGlvbixcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBkaXNwb3NlT25OYXZpZ2F0aW9uOiBjb25maWcuY2xvc2VPbk5hdmlnYXRpb24sXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IGNvbmZpZy5zY3JvbGxTdHJhdGVneSB8fCB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5jZW50ZXJIb3Jpem9udGFsbHkoKS5ib3R0b20oJzAnKVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5iYWNrZHJvcENsYXNzKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLmJhY2tkcm9wQ2xhc3MgPSBjb25maWcuYmFja2Ryb3BDbGFzcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbmplY3RvciB0byBiZSB1c2VkIGluc2lkZSBvZiBhIGJvdHRvbSBzaGVldCBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIHRoYXQgd2FzIHVzZWQgdG8gY3JlYXRlIHRoZSBib3R0b20gc2hlZXQuXG4gICAqIEBwYXJhbSBib3R0b21TaGVldFJlZiBSZWZlcmVuY2UgdG8gdGhlIGJvdHRvbSBzaGVldC5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUluamVjdG9yPFQ+KGNvbmZpZzogTWF0Qm90dG9tU2hlZXRDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxUPik6IFBvcnRhbEluamVjdG9yIHtcblxuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcDxhbnksIGFueT4oW1xuICAgICAgW01hdEJvdHRvbVNoZWV0UmVmLCBib3R0b21TaGVldFJlZl0sXG4gICAgICBbTUFUX0JPVFRPTV9TSEVFVF9EQVRBLCBjb25maWcuZGF0YV1cbiAgICBdKTtcblxuICAgIGlmIChjb25maWcuZGlyZWN0aW9uICYmXG4gICAgICAgICghdXNlckluamVjdG9yIHx8ICF1c2VySW5qZWN0b3IuZ2V0PERpcmVjdGlvbmFsaXR5IHwgbnVsbD4oRGlyZWN0aW9uYWxpdHksIG51bGwpKSkge1xuICAgICAgaW5qZWN0aW9uVG9rZW5zLnNldChEaXJlY3Rpb25hbGl0eSwge1xuICAgICAgICB2YWx1ZTogY29uZmlnLmRpcmVjdGlvbixcbiAgICAgICAgY2hhbmdlOiBvYnNlcnZhYmxlT2YoKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5faW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRlZmF1bHQgb3B0aW9ucyB0byB0aGUgYm90dG9tIHNoZWV0IGNvbmZpZy5cbiAqIEBwYXJhbSBkZWZhdWx0cyBPYmplY3QgY29udGFpbmluZyB0aGUgZGVmYXVsdCB2YWx1ZXMgdG8gd2hpY2ggdG8gZmFsbCBiYWNrLlxuICogQHBhcmFtIGNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byB3aGljaCB0aGUgZGVmYXVsdHMgd2lsbCBiZSBhcHBsaWVkLlxuICogQHJldHVybnMgVGhlIG5ldyBjb25maWd1cmF0aW9uIG9iamVjdCB3aXRoIGRlZmF1bHRzIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIF9hcHBseUNvbmZpZ0RlZmF1bHRzKGRlZmF1bHRzOiBNYXRCb3R0b21TaGVldENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz86IE1hdEJvdHRvbVNoZWV0Q29uZmlnKTogTWF0Qm90dG9tU2hlZXRDb25maWcge1xuICByZXR1cm4gey4uLmRlZmF1bHRzLCAuLi5jb25maWd9O1xufVxuIl19