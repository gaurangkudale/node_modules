/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/common-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { Inject, InjectionToken, isDevMode, NgModule, Optional, Version } from '@angular/core';
import { VERSION as CDK_VERSION } from '@angular/cdk';
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
const VERSION = new Version('9.0.0');
/**
 * \@docs-private
 * @return {?}
 */
export function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */
export const MATERIAL_SANITY_CHECKS = new InjectionToken('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Object that can be used to configure the sanity checks granularly.
 * @record
 */
export function GranularSanityChecks() { }
if (false) {
    /** @type {?} */
    GranularSanityChecks.prototype.doctype;
    /** @type {?} */
    GranularSanityChecks.prototype.theme;
    /** @type {?} */
    GranularSanityChecks.prototype.version;
    /**
     * @deprecated No longer being used.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    GranularSanityChecks.prototype.hammer;
}
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
export class MatCommonModule {
    /**
     * @param {?} highContrastModeDetector
     * @param {?} sanityChecks
     */
    constructor(highContrastModeDetector, sanityChecks) {
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        /**
         * Reference to the global `document` object.
         */
        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */
        this._window = typeof window === 'object' && window ? window : null;
        // While A11yModule also does this, we repeat it here to avoid importing A11yModule
        // in MatCommonModule.
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
        // Note that `_sanityChecks` is typed to `any`, because AoT
        // throws an error if we use the `SanityChecks` type directly.
        this._sanityChecks = sanityChecks;
        if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Whether any sanity checks are enabled.
     * @private
     * @return {?}
     */
    _checksAreEnabled() {
        return isDevMode() && !this._isTestEnv();
    }
    /**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */
    _isTestEnv() {
        /** @type {?} */
        const window = (/** @type {?} */ (this._window));
        return window && (window.__karma__ || window.jasmine);
    }
    /**
     * @private
     * @return {?}
     */
    _checkDoctypeIsDefined() {
        /** @type {?} */
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || ((/** @type {?} */ (this._sanityChecks))).doctype);
        if (isEnabled && this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        /** @type {?} */
        const isDisabled = !this._checksAreEnabled() ||
            (this._sanityChecks === false || !((/** @type {?} */ (this._sanityChecks))).theme);
        if (isDisabled || !this._document || !this._document.body ||
            typeof getComputedStyle !== 'function') {
            return;
        }
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        /** @type {?} */
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        this._document.body.removeChild(testElement);
    }
    /**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */
    _checkCdkVersionMatch() {
        /** @type {?} */
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || ((/** @type {?} */ (this._sanityChecks))).version);
        if (isEnabled && VERSION.full !== CDK_VERSION.full) {
            console.warn('The Angular Material version (' + VERSION.full + ') does not match ' +
                'the Angular CDK version (' + CDK_VERSION.full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
}
MatCommonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatCommonModule });
MatCommonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatCommonModule_Factory(t) { return new (t || MatCommonModule)(ɵngcc0.ɵɵinject(ɵngcc1.HighContrastModeDetector), ɵngcc0.ɵɵinject(MATERIAL_SANITY_CHECKS, 8)); }, imports: [[BidiModule], BidiModule] });
/** @nocollapse */
MatCommonModule.ctorParameters = () => [
    { type: HighContrastModeDetector },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MATERIAL_SANITY_CHECKS,] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatCommonModule, { imports: function () { return [BidiModule]; }, exports: function () { return [BidiModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCommonModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule],
                exports: [BidiModule]
            }]
    }], function () { return [{ type: ɵngcc1.HighContrastModeDetector }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MATERIAL_SANITY_CHECKS]
            }] }]; }, null); })();
if (false) {
    /**
     * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
     * @type {?}
     * @private
     */
    MatCommonModule.prototype._hasDoneGlobalChecks;
    /**
     * Reference to the global `document` object.
     * @type {?}
     * @private
     */
    MatCommonModule.prototype._document;
    /**
     * Reference to the global 'window' object.
     * @type {?}
     * @private
     */
    MatCommonModule.prototype._window;
    /**
     * Configured sanity checks.
     * @type {?}
     * @private
     */
    MatCommonModule.prototype._sanityChecks;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NvcmUvY29tbW9uLWJlaGF2aW9ycy9jb21tb24tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFDLE9BQU8sSUFBSSxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEQ7QUFFMkQ7QUFDYTtBQUNSO0FBQ3pCOzs7QUFDeEIsTUFBVCxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7QUFBVTtBQUFJLEtBQUssQ0FBQztBQUV2QztBQUNOO0FBQUgsTUFBTSxVQUFVLDhCQUE4QjtBQUFLLElBQ2pELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEO0FBQ0c7QUFBbUY7QUFDMUU7QUFBWixNQUFNLE9BQU8sc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQWUsbUJBQW1CLEVBQUU7QUFDNUYsSUFBRSxVQUFVLEVBQUUsTUFBTTtBQUNwQixJQUFFLE9BQU8sRUFBRSw4QkFBOEI7QUFDekMsQ0FBQyxDQUFDO0FBQ0Y7QUFDRztBQUVTO0FBQVc7QUFLdkIsMENBVUM7QUFDRDtBQUVRO0FBQXFCLElBWjNCLHVDQUFpQjtBQUNuQjtBQUNHLElBREQscUNBQWU7QUFDakI7QUFFQSxJQUZFLHVDQUFpQjtBQUNuQjtBQUVDO0FBQ0U7QUFFSDtBQUFpQjtBQUdkLElBSEQsc0NBQWdCO0FBQ2xCO0FBQ0E7QUFDRztBQUN5RjtBQUNyRDtBQUNyQztBQUN5RjtBQU0zRixNQUFNLE9BQU8sZUFB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UUFBUSxTQUFDO0dBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUNyQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsZUFDdEIsNkxBQ0k7QUFBQztBQUFtQjtBQUNVLFlBckQzQix3QkFBd0I7QUFBSSw0Q0FtRTdCLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCO0FBQVE7Ozs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUMxRDtBQUFRO0FBQ1M7QUFDVjtBQUFnQjtBQUFRLElBaEI5QiwrQ0FBcUM7QUFDdkM7QUFDTztBQUNGO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMsb0NBQStFO0FBQ2pGO0FBQ087QUFDRjtBQUFpQjtBQUFnQjtBQUFRLElBQTVDLGtDQUF1RTtBQUN6RTtBQUNPO0FBQ0Y7QUFBaUI7QUFBZ0I7QUFFaEMsSUFGSix3Q0FBb0M7QUFDdEM7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0hpZ2hDb250cmFzdE1vZGVEZXRlY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCaWRpTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0aW9uVG9rZW4sIGlzRGV2TW9kZSwgTmdNb2R1bGUsIE9wdGlvbmFsLCBWZXJzaW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VkVSU0lPTiBhcyBDREtfVkVSU0lPTn0gZnJvbSAnQGFuZ3VsYXIvY2RrJztcblxuXG4vLyBQcml2YXRlIHZlcnNpb24gY29uc3RhbnQgdG8gY2lyY3VtdmVudCB0ZXN0L2J1aWxkIGlzc3Vlcyxcbi8vIGkuZS4gYXZvaWQgY29yZSB0byBkZXBlbmQgb24gdGhlIEBhbmd1bGFyL21hdGVyaWFsIHByaW1hcnkgZW50cnktcG9pbnRcbi8vIENhbiBiZSByZW1vdmVkIG9uY2UgdGhlIE1hdGVyaWFsIHByaW1hcnkgZW50cnktcG9pbnQgbm8gbG9uZ2VyXG4vLyByZS1leHBvcnRzIGFsbCBzZWNvbmRhcnkgZW50cnktcG9pbnRzXG5jb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZnVuY3Rpb24gTUFURVJJQUxfU0FOSVRZX0NIRUNLU19GQUNUT1JZKCk6IFNhbml0eUNoZWNrcyB7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY29uZmlndXJlcyB3aGV0aGVyIHRoZSBNYXRlcmlhbCBzYW5pdHkgY2hlY2tzIGFyZSBlbmFibGVkLiAqL1xuZXhwb3J0IGNvbnN0IE1BVEVSSUFMX1NBTklUWV9DSEVDS1MgPSBuZXcgSW5qZWN0aW9uVG9rZW48U2FuaXR5Q2hlY2tzPignbWF0LXNhbml0eS1jaGVja3MnLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogTUFURVJJQUxfU0FOSVRZX0NIRUNLU19GQUNUT1JZLFxufSk7XG5cbi8qKlxuICogUG9zc2libGUgc2FuaXR5IGNoZWNrcyB0aGF0IGNhbiBiZSBlbmFibGVkLiBJZiBzZXQgdG9cbiAqIHRydWUvZmFsc2UsIGFsbCBjaGVja3Mgd2lsbCBiZSBlbmFibGVkL2Rpc2FibGVkLlxuICovXG5leHBvcnQgdHlwZSBTYW5pdHlDaGVja3MgPSBib29sZWFuIHwgR3JhbnVsYXJTYW5pdHlDaGVja3M7XG5cbi8qKiBPYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIHNhbml0eSBjaGVja3MgZ3JhbnVsYXJseS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3JhbnVsYXJTYW5pdHlDaGVja3Mge1xuICBkb2N0eXBlOiBib29sZWFuO1xuICB0aGVtZTogYm9vbGVhbjtcbiAgdmVyc2lvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBoYW1tZXI6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTW9kdWxlIHRoYXQgY2FwdHVyZXMgYW55dGhpbmcgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGFuZC9vciBydW4gZm9yICphbGwqIEFuZ3VsYXIgTWF0ZXJpYWxcbiAqIGNvbXBvbmVudHMuIFRoaXMgaW5jbHVkZXMgQmlkaSwgZXRjLlxuICpcbiAqIFRoaXMgbW9kdWxlIHNob3VsZCBiZSBpbXBvcnRlZCB0byBlYWNoIHRvcC1sZXZlbCBjb21wb25lbnQgbW9kdWxlIChlLmcuLCBNYXRUYWJzTW9kdWxlKS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGVdLFxuICBleHBvcnRzOiBbQmlkaU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdENvbW1vbk1vZHVsZSB7XG4gIC8qKiBXaGV0aGVyIHdlJ3ZlIGRvbmUgdGhlIGdsb2JhbCBzYW5pdHkgY2hlY2tzIChlLmcuIGEgdGhlbWUgaXMgbG9hZGVkLCB0aGVyZSBpcyBhIGRvY3R5cGUpLiAqL1xuICBwcml2YXRlIF9oYXNEb25lR2xvYmFsQ2hlY2tzID0gZmFsc2U7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIGBkb2N1bWVudGAgb2JqZWN0LiAqL1xuICBwcml2YXRlIF9kb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQgPyBkb2N1bWVudCA6IG51bGw7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsICd3aW5kb3cnIG9iamVjdC4gKi9cbiAgcHJpdmF0ZSBfd2luZG93ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ID8gd2luZG93IDogbnVsbDtcblxuICAvKiogQ29uZmlndXJlZCBzYW5pdHkgY2hlY2tzLiAqL1xuICBwcml2YXRlIF9zYW5pdHlDaGVja3M6IFNhbml0eUNoZWNrcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGhpZ2hDb250cmFzdE1vZGVEZXRlY3RvcjogSGlnaENvbnRyYXN0TW9kZURldGVjdG9yLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRFUklBTF9TQU5JVFlfQ0hFQ0tTKSBzYW5pdHlDaGVja3M6IGFueSkge1xuICAgIC8vIFdoaWxlIEExMXlNb2R1bGUgYWxzbyBkb2VzIHRoaXMsIHdlIHJlcGVhdCBpdCBoZXJlIHRvIGF2b2lkIGltcG9ydGluZyBBMTF5TW9kdWxlXG4gICAgLy8gaW4gTWF0Q29tbW9uTW9kdWxlLlxuICAgIGhpZ2hDb250cmFzdE1vZGVEZXRlY3Rvci5fYXBwbHlCb2R5SGlnaENvbnRyYXN0TW9kZUNzc0NsYXNzZXMoKTtcblxuICAgIC8vIE5vdGUgdGhhdCBgX3Nhbml0eUNoZWNrc2AgaXMgdHlwZWQgdG8gYGFueWAsIGJlY2F1c2UgQW9UXG4gICAgLy8gdGhyb3dzIGFuIGVycm9yIGlmIHdlIHVzZSB0aGUgYFNhbml0eUNoZWNrc2AgdHlwZSBkaXJlY3RseS5cbiAgICB0aGlzLl9zYW5pdHlDaGVja3MgPSBzYW5pdHlDaGVja3M7XG5cbiAgICBpZiAoIXRoaXMuX2hhc0RvbmVHbG9iYWxDaGVja3MpIHtcbiAgICAgIHRoaXMuX2NoZWNrRG9jdHlwZUlzRGVmaW5lZCgpO1xuICAgICAgdGhpcy5fY2hlY2tUaGVtZUlzUHJlc2VudCgpO1xuICAgICAgdGhpcy5fY2hlY2tDZGtWZXJzaW9uTWF0Y2goKTtcbiAgICAgIHRoaXMuX2hhc0RvbmVHbG9iYWxDaGVja3MgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGFueSBzYW5pdHkgY2hlY2tzIGFyZSBlbmFibGVkLiAqL1xuICBwcml2YXRlIF9jaGVja3NBcmVFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0Rldk1vZGUoKSAmJiAhdGhpcy5faXNUZXN0RW52KCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgY29kZSBpcyBydW5uaW5nIGluIHRlc3RzLiAqL1xuICBwcml2YXRlIF9pc1Rlc3RFbnYoKSB7XG4gICAgY29uc3Qgd2luZG93ID0gdGhpcy5fd2luZG93IGFzIGFueTtcbiAgICByZXR1cm4gd2luZG93ICYmICh3aW5kb3cuX19rYXJtYV9fIHx8IHdpbmRvdy5qYXNtaW5lKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrRG9jdHlwZUlzRGVmaW5lZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0VuYWJsZWQgPSB0aGlzLl9jaGVja3NBcmVFbmFibGVkKCkgJiZcbiAgICAgICh0aGlzLl9zYW5pdHlDaGVja3MgPT09IHRydWUgfHwgKHRoaXMuX3Nhbml0eUNoZWNrcyBhcyBHcmFudWxhclNhbml0eUNoZWNrcykuZG9jdHlwZSk7XG5cbiAgICBpZiAoaXNFbmFibGVkICYmIHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLl9kb2N1bWVudC5kb2N0eXBlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdDdXJyZW50IGRvY3VtZW50IGRvZXMgbm90IGhhdmUgYSBkb2N0eXBlLiBUaGlzIG1heSBjYXVzZSAnICtcbiAgICAgICAgJ3NvbWUgQW5ndWxhciBNYXRlcmlhbCBjb21wb25lbnRzIG5vdCB0byBiZWhhdmUgYXMgZXhwZWN0ZWQuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1RoZW1lSXNQcmVzZW50KCk6IHZvaWQge1xuICAgIC8vIFdlIG5lZWQgdG8gYXNzZXJ0IHRoYXQgdGhlIGBib2R5YCBpcyBkZWZpbmVkLCBiZWNhdXNlIHRoZXNlIGNoZWNrcyBydW4gdmVyeSBlYXJseVxuICAgIC8vIGFuZCB0aGUgYGJvZHlgIHdvbid0IGJlIGRlZmluZWQgaWYgdGhlIGNvbnN1bWVyIHB1dCB0aGVpciBzY3JpcHRzIGluIHRoZSBgaGVhZGAuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICF0aGlzLl9jaGVja3NBcmVFbmFibGVkKCkgfHxcbiAgICAgICh0aGlzLl9zYW5pdHlDaGVja3MgPT09IGZhbHNlIHx8ICEodGhpcy5fc2FuaXR5Q2hlY2tzIGFzIEdyYW51bGFyU2FuaXR5Q2hlY2tzKS50aGVtZSk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCB8fCAhdGhpcy5fZG9jdW1lbnQgfHwgIXRoaXMuX2RvY3VtZW50LmJvZHkgfHxcbiAgICAgICAgdHlwZW9mIGdldENvbXB1dGVkU3R5bGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXN0RWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWF0LXRoZW1lLWxvYWRlZC1tYXJrZXInKTtcbiAgICB0aGlzLl9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlc3RFbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRlc3RFbGVtZW50KTtcblxuICAgIC8vIEluIHNvbWUgc2l0dWF0aW9ucyB0aGUgY29tcHV0ZWQgc3R5bGUgb2YgdGhlIHRlc3QgZWxlbWVudCBjYW4gYmUgbnVsbC4gRm9yIGV4YW1wbGUgaW5cbiAgICAvLyBGaXJlZm94LCB0aGUgY29tcHV0ZWQgc3R5bGUgaXMgbnVsbCBpZiBhbiBhcHBsaWNhdGlvbiBpcyBydW5uaW5nIGluc2lkZSBvZiBhIGhpZGRlbiBpZnJhbWUuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICBpZiAoY29tcHV0ZWRTdHlsZSAmJiBjb21wdXRlZFN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnQ291bGQgbm90IGZpbmQgQW5ndWxhciBNYXRlcmlhbCBjb3JlIHRoZW1lLiBNb3N0IE1hdGVyaWFsICcgK1xuICAgICAgICAnY29tcG9uZW50cyBtYXkgbm90IHdvcmsgYXMgZXhwZWN0ZWQuIEZvciBtb3JlIGluZm8gcmVmZXIgJyArXG4gICAgICAgICd0byB0aGUgdGhlbWluZyBndWlkZTogaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL3RoZW1pbmcnXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVzdEVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBtYXRlcmlhbCB2ZXJzaW9uIG1hdGNoZXMgdGhlIGNkayB2ZXJzaW9uICovXG4gIHByaXZhdGUgX2NoZWNrQ2RrVmVyc2lvbk1hdGNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzRW5hYmxlZCA9IHRoaXMuX2NoZWNrc0FyZUVuYWJsZWQoKSAmJlxuICAgICAgKHRoaXMuX3Nhbml0eUNoZWNrcyA9PT0gdHJ1ZSB8fCAodGhpcy5fc2FuaXR5Q2hlY2tzIGFzIEdyYW51bGFyU2FuaXR5Q2hlY2tzKS52ZXJzaW9uKTtcblxuICAgIGlmIChpc0VuYWJsZWQgJiYgVkVSU0lPTi5mdWxsICE9PSBDREtfVkVSU0lPTi5mdWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1RoZSBBbmd1bGFyIE1hdGVyaWFsIHZlcnNpb24gKCcgKyBWRVJTSU9OLmZ1bGwgKyAnKSBkb2VzIG5vdCBtYXRjaCAnICtcbiAgICAgICAgICAndGhlIEFuZ3VsYXIgQ0RLIHZlcnNpb24gKCcgKyBDREtfVkVSU0lPTi5mdWxsICsgJykuXFxuJyArXG4gICAgICAgICAgJ1BsZWFzZSBlbnN1cmUgdGhlIHZlcnNpb25zIG9mIHRoZXNlIHR3byBwYWNrYWdlcyBleGFjdGx5IG1hdGNoLidcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=