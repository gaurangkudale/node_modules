/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationBuilder } from '@angular/animations';
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵCssKeyframesDriver as CssKeyframesDriver, ɵNoopAnimationDriver as NoopAnimationDriver, ɵsupportsWebAnimations as supportsWebAnimations, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, InjectionToken, NgZone, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { BrowserAnimationBuilder } from './animation_builder';
import { AnimationRendererFactory } from './animation_renderer';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/animations/browser';
export class InjectableAnimationEngine extends AnimationEngine {
    constructor(doc, driver, normalizer) {
        super(doc.body, driver, normalizer);
    }
}
InjectableAnimationEngine.ɵfac = function InjectableAnimationEngine_Factory(t) { return new (t || InjectableAnimationEngine)(ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ɵngcc1.AnimationDriver), ɵngcc0.ɵɵinject(ɵngcc1.ɵAnimationStyleNormalizer)); };
InjectableAnimationEngine.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: InjectableAnimationEngine, factory: InjectableAnimationEngine.ɵfac });
InjectableAnimationEngine.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AnimationDriver },
    { type: AnimationStyleNormalizer }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InjectableAnimationEngine, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.AnimationDriver }, { type: ɵngcc1.ɵAnimationStyleNormalizer }]; }, null); })();
export function instantiateSupportedAnimationDriver() {
    return supportsWebAnimations() ? new WebAnimationsDriver() : new CssKeyframesDriver();
}
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * @publicApi
 */
export const ANIMATION_MODULE_TYPE = new InjectionToken('AnimationModuleType');
const SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationBuilder, useClass: BrowserAnimationBuilder },
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export const BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMvc3JjL3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUseUJBQXlCLElBQUksd0JBQXdCLEVBQUUsbUJBQW1CLElBQUksa0JBQWtCLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsc0JBQXNCLElBQUkscUJBQXFCLEVBQUUsb0JBQW9CLElBQUksbUJBQW1CLEVBQUUsNkJBQTZCLElBQUksNEJBQTRCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3WSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBWSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsb0JBQW9CLElBQUksbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRzlELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxlQUFlO0FBQzlELElBQUUsWUFDc0IsR0FBUSxFQUFFLE1BQXVCLEVBQUUsVUFBb0M7QUFDL0YsUUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0g7cURBTkMsVUFBVTsySUFDVDtBQUFDO0FBQW1ELDRDQUUvQyxNQUFNLFNBQUMsUUFBUTtBQUFTLFlBWHZCLGVBQWU7QUFBSSxZQUFnRSx3QkFBd0I7QUFBRzs7Ozs7O2dIQUFFO0FBZ0J4SCxNQUFNLFVBQVUsbUNBQW1DO0FBQ25ELElBQUUsT0FBTyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUN4RixDQUFDO0FBRUQsTUFBTSxVQUFVLGlDQUFpQztBQUNqRCxJQUFFLE9BQU8sSUFBSSw0QkFBNEIsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQ3RDLFFBQTZCLEVBQUUsTUFBdUIsRUFBRSxJQUFZO0FBQ3hFLElBQUUsT0FBTyxJQUFJLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQzlCLElBQUksY0FBYyxDQUF1QyxxQkFBcUIsQ0FBQyxDQUFDO0FBRXBGLE1BQU0sMEJBQTBCLEdBQWU7QUFDL0MsSUFBRSxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7QUFDaEUsSUFBRSxFQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsaUNBQWlDLEVBQUM7QUFDcEYsSUFBRSxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFDLEVBQUU7QUFDbkUsUUFBSSxPQUFPLEVBQUUsZ0JBQWdCO0FBQzdCLFFBQUksVUFBVSxFQUFFLDBCQUEwQjtBQUMxQyxRQUFJLElBQUksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7QUFDeEQsS0FBRztBQUNILENBQUMsQ0FBQztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBZTtBQUN4RCxJQUFFLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUM7QUFDN0UsSUFBRSxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsRUFBRSxHQUFHLDBCQUEwQjtBQUNoRyxDQUFDLENBQUM7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQWU7QUFDN0QsSUFBRSxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0FBQzNELElBQUUsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFDLEVBQUUsR0FBRywwQkFBMEI7QUFDN0YsQ0FBQyxDQUFDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBbmltYXRpb25CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyLCDJtUFuaW1hdGlvbkVuZ2luZSBhcyBBbmltYXRpb25FbmdpbmUsIMm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIGFzIEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgybVDc3NLZXlmcmFtZXNEcml2ZXIgYXMgQ3NzS2V5ZnJhbWVzRHJpdmVyLCDJtU5vb3BBbmltYXRpb25Ecml2ZXIgYXMgTm9vcEFuaW1hdGlvbkRyaXZlciwgybVzdXBwb3J0c1dlYkFuaW1hdGlvbnMgYXMgc3VwcG9ydHNXZWJBbmltYXRpb25zLCDJtVdlYkFuaW1hdGlvbnNEcml2ZXIgYXMgV2ViQW5pbWF0aW9uc0RyaXZlciwgybVXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyIGFzIFdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMvYnJvd3Nlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIFByb3ZpZGVyLCBSZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ybVEb21SZW5kZXJlckZhY3RvcnkyIGFzIERvbVJlbmRlcmVyRmFjdG9yeTJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25CdWlsZGVyfSBmcm9tICcuL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7QW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5fSBmcm9tICcuL2FuaW1hdGlvbl9yZW5kZXJlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmplY3RhYmxlQW5pbWF0aW9uRW5naW5lIGV4dGVuZHMgQW5pbWF0aW9uRW5naW5lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSwgZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIG5vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcikge1xuICAgIHN1cGVyKGRvYy5ib2R5LCBkcml2ZXIsIG5vcm1hbGl6ZXIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVN1cHBvcnRlZEFuaW1hdGlvbkRyaXZlcigpIHtcbiAgcmV0dXJuIHN1cHBvcnRzV2ViQW5pbWF0aW9ucygpID8gbmV3IFdlYkFuaW1hdGlvbnNEcml2ZXIoKSA6IG5ldyBDc3NLZXlmcmFtZXNEcml2ZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlRGVmYXVsdFN0eWxlTm9ybWFsaXplcigpIHtcbiAgcmV0dXJuIG5ldyBXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZVJlbmRlcmVyRmFjdG9yeShcbiAgICByZW5kZXJlcjogRG9tUmVuZGVyZXJGYWN0b3J5MiwgZW5naW5lOiBBbmltYXRpb25FbmdpbmUsIHpvbmU6IE5nWm9uZSkge1xuICByZXR1cm4gbmV3IEFuaW1hdGlvblJlbmRlcmVyRmFjdG9yeShyZW5kZXJlciwgZW5naW5lLCB6b25lKTtcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBBTklNQVRJT05fTU9EVUxFX1RZUEUgPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjwnTm9vcEFuaW1hdGlvbnMnfCdCcm93c2VyQW5pbWF0aW9ucyc+KCdBbmltYXRpb25Nb2R1bGVUeXBlJyk7XG5cbmNvbnN0IFNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uQnVpbGRlciwgdXNlQ2xhc3M6IEJyb3dzZXJBbmltYXRpb25CdWlsZGVyfSxcbiAge3Byb3ZpZGU6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVEZWZhdWx0U3R5bGVOb3JtYWxpemVyfSxcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkVuZ2luZSwgdXNlQ2xhc3M6IEluamVjdGFibGVBbmltYXRpb25FbmdpbmV9LCB7XG4gICAgcHJvdmlkZTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZVJlbmRlcmVyRmFjdG9yeSxcbiAgICBkZXBzOiBbRG9tUmVuZGVyZXJGYWN0b3J5MiwgQW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdXG4gIH1cbl07XG5cbi8qKlxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyTW9kdWxlLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BTklNQVRJT05TX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkRyaXZlciwgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVTdXBwb3J0ZWRBbmltYXRpb25Ecml2ZXJ9LFxuICB7cHJvdmlkZTogQU5JTUFUSU9OX01PRFVMRV9UWVBFLCB1c2VWYWx1ZTogJ0Jyb3dzZXJBbmltYXRpb25zJ30sIC4uLlNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTXG5dO1xuXG4vKipcbiAqIFNlcGFyYXRlIHByb3ZpZGVycyBmcm9tIHRoZSBhY3R1YWwgbW9kdWxlIHNvIHRoYXQgd2UgY2FuIGRvIGEgbG9jYWwgbW9kaWZpY2F0aW9uIGluIEdvb2dsZTMgdG9cbiAqIGluY2x1ZGUgdGhlbSBpbiB0aGUgQnJvd3NlclRlc3RpbmdNb2R1bGUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX05PT1BfQU5JTUFUSU9OU19QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXG4gIHtwcm92aWRlOiBBbmltYXRpb25Ecml2ZXIsIHVzZUNsYXNzOiBOb29wQW5pbWF0aW9uRHJpdmVyfSxcbiAge3Byb3ZpZGU6IEFOSU1BVElPTl9NT0RVTEVfVFlQRSwgdXNlVmFsdWU6ICdOb29wQW5pbWF0aW9ucyd9LCAuLi5TSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSU1xuXTtcbiJdfQ==