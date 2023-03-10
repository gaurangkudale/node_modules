/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_INITIALIZER, ApplicationRef, NgProbeToken, NgZone, Optional, ɵgetDebugNodeR2 } from '@angular/core';
import { exportNgVar } from '../util';
const ɵ0 = () => ({
    'ApplicationRef': ApplicationRef,
    'NgZone': NgZone,
});
const CORE_TOKENS = (ɵ0)();
const INSPECT_GLOBAL_NAME = 'probe';
const CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
export function inspectNativeElementR2(element) {
    return ɵgetDebugNodeR2(element);
}
export function _createNgProbeR2(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElementR2);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, Object.assign(Object.assign({}, CORE_TOKENS), _ngProbeTokensToMap(coreTokens || [])));
    return () => inspectNativeElementR2;
}
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce((prev, t) => (prev[t.name] = t.token, prev), {});
}
/**
 * In Ivy, we don't support NgProbe because we have our own set of testing utilities
 * with more robust functionality.
 *
 * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
 * tree-shaking properly.
 */
export const ELEMENT_PROBE_PROVIDERS__POST_R3__ = [];
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
export const ELEMENT_PROBE_PROVIDERS__PRE_R3__ = [
    {
        provide: APP_INITIALIZER,
        useFactory: _createNgProbeR2,
        deps: [
            [NgProbeToken, new Optional()],
        ],
        multi: true,
    },
];
export const ELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS__POST_R3__;
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfcHJvYmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2RvbS9kZWJ1Zy9uZ19wcm9iZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQWEsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQVksZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDcEMsV0FDcUIsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1QixJQUF1QixnQkFBZ0IsRUFBRSxjQUFjO0FBQ3ZELElBQXVCLFFBQVEsRUFBRSxNQUFNO0FBQ3ZDLENBQXNCLENBQUM7QUFIdkIsTUFBTSxXQUFXLEdBQUcsSUFHSSxFQUFFLENBQUM7QUFFM0IsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDcEMsTUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUM7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxVQUFVLHNCQUFzQixDQUFDLE9BQVk7QUFBSSxJQUNyRCxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFVBQTBCO0FBQUksSUFDN0QsV0FBVyxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsSUFBRSxXQUFXLENBQUMsdUJBQXVCLGtDQUFNLFdBQVcsR0FBSyxtQkFBbUIsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNuRyxJQUFFLE9BQU8sR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsTUFBc0I7QUFBSSxJQUNyRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRixDQUFDO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHLEVBQUUsQ0FBQztBQUVyRDtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFlO0FBQzdELElBQUU7QUFDRixRQUFJLE9BQU8sRUFBRSxlQUFlO0FBQzVCLFFBQUksVUFBVSxFQUFFLGdCQUFnQjtBQUNoQyxRQUFJLElBQUksRUFBRTtBQUNWLFlBQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsUUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLEtBQUc7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxrQ0FBaUMsQ0FBQztBQUN6RTtBQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBBcHBsaWNhdGlvblJlZiwgRGVidWdOb2RlLCBOZ1Byb2JlVG9rZW4sIE5nWm9uZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCDJtWdldERlYnVnTm9kZVIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtleHBvcnROZ1Zhcn0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0IENPUkVfVE9LRU5TID0gKCgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICdBcHBsaWNhdGlvblJlZic6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAnTmdab25lJzogTmdab25lLFxuICAgICAgICAgICAgICAgICAgICAgfSkpKCk7XG5cbmNvbnN0IElOU1BFQ1RfR0xPQkFMX05BTUUgPSAncHJvYmUnO1xuY29uc3QgQ09SRV9UT0tFTlNfR0xPQkFMX05BTUUgPSAnY29yZVRva2Vucyc7XG5cbi8qKlxuICogUmV0dXJucyBhIHtAbGluayBEZWJ1Z0VsZW1lbnR9IGZvciB0aGUgZ2l2ZW4gbmF0aXZlIERPTSBlbGVtZW50LCBvclxuICogbnVsbCBpZiB0aGUgZ2l2ZW4gbmF0aXZlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhbiBBbmd1bGFyIHZpZXcgYXNzb2NpYXRlZFxuICogd2l0aCBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3ROYXRpdmVFbGVtZW50UjIoZWxlbWVudDogYW55KTogRGVidWdOb2RlfG51bGwge1xuICByZXR1cm4gybVnZXREZWJ1Z05vZGVSMihlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVOZ1Byb2JlUjIoY29yZVRva2VuczogTmdQcm9iZVRva2VuW10pOiBhbnkge1xuICBleHBvcnROZ1ZhcihJTlNQRUNUX0dMT0JBTF9OQU1FLCBpbnNwZWN0TmF0aXZlRWxlbWVudFIyKTtcbiAgZXhwb3J0TmdWYXIoQ09SRV9UT0tFTlNfR0xPQkFMX05BTUUsIHsuLi5DT1JFX1RPS0VOUywgLi4uX25nUHJvYmVUb2tlbnNUb01hcChjb3JlVG9rZW5zIHx8IFtdKX0pO1xuICByZXR1cm4gKCkgPT4gaW5zcGVjdE5hdGl2ZUVsZW1lbnRSMjtcbn1cblxuZnVuY3Rpb24gX25nUHJvYmVUb2tlbnNUb01hcCh0b2tlbnM6IE5nUHJvYmVUb2tlbltdKToge1tuYW1lOiBzdHJpbmddOiBhbnl9IHtcbiAgcmV0dXJuIHRva2Vucy5yZWR1Y2UoKHByZXY6IGFueSwgdDogYW55KSA9PiAocHJldlt0Lm5hbWVdID0gdC50b2tlbiwgcHJldiksIHt9KTtcbn1cblxuLyoqXG4gKiBJbiBJdnksIHdlIGRvbid0IHN1cHBvcnQgTmdQcm9iZSBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBzZXQgb2YgdGVzdGluZyB1dGlsaXRpZXNcbiAqIHdpdGggbW9yZSByb2J1c3QgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBXZSBzaG91bGRuJ3QgYnJpbmcgaW4gTmdQcm9iZSBiZWNhdXNlIGl0IHByZXZlbnRzIERlYnVnTm9kZSBhbmQgZnJpZW5kcyBmcm9tXG4gKiB0cmVlLXNoYWtpbmcgcHJvcGVybHkuXG4gKi9cbmV4cG9ydCBjb25zdCBFTEVNRU5UX1BST0JFX1BST1ZJREVSU19fUE9TVF9SM19fID0gW107XG5cbi8qKlxuICogUHJvdmlkZXJzIHdoaWNoIHN1cHBvcnQgZGVidWdnaW5nIEFuZ3VsYXIgYXBwbGljYXRpb25zIChlLmcuIHZpYSBgbmcucHJvYmVgKS5cbiAqL1xuZXhwb3J0IGNvbnN0IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTX19QUkVfUjNfXzogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBfY3JlYXRlTmdQcm9iZVIyLFxuICAgIGRlcHM6IFtcbiAgICAgIFtOZ1Byb2JlVG9rZW4sIG5ldyBPcHRpb25hbCgpXSxcbiAgICBdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTID0gRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfX1BSRV9SM19fO1xuIl19