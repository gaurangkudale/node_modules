/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from './keyboard/overlay-keyboard-dispatcher';
import { Overlay } from './overlay';
import { OVERLAY_CONTAINER_PROVIDER } from './overlay-container';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER, CdkConnectedOverlay, CdkOverlayOrigin, } from './overlay-directives';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import * as ɵngcc0 from '@angular/core';
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
OverlayModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OverlayModule });
OverlayModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OverlayModule_Factory(t) { return new (t || OverlayModule)(); }, providers: [
        Overlay,
        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[BidiModule, PortalModule, ScrollingModule], ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OverlayModule, { declarations: function () { return [CdkConnectedOverlay, CdkOverlayOrigin]; }, imports: function () { return [BidiModule, PortalModule, ScrollingModule]; }, exports: function () { return [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, PortalModule, ScrollingModule],
                exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
                declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                providers: [
                    Overlay,
                    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                ]
            }]
    }], function () { return []; }, null); })();
    return OverlayModule;
}());
export { OverlayModule };
/**
 * @deprecated Use `OverlayModule` instead.
 * @breaking-change 8.0.0
 * @docs-private
 */
export var OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvb3ZlcmxheS9vdmVybGF5LW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0NBQW9DLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9ELE9BQU8sRUFDTCw4Q0FBOEMsRUFDOUMsbUJBQW1CLEVBQ25CLGdCQUFnQixHQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOztBQUczRTtBQUNxQyxJQURyQztBQUNlLElBUWEsQ0FBQztpREFUNUIsUUFBUSxTQUFDO2lCQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLHNCQUNwRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRTtZQUFlLENBQUM7a0JBQ2pFLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFO2NBQWdCLENBQUMsc0JBQ3JELFNBQVMsRUFBRSwwQkFDVCxPQUFPO3dCQUNQLDhDQUE4Qyx1QkFDL0MsbUJBQ0Y7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQWtCLG9CQUFDO0FBRTdCLENBRjZCLEFBVDdCLElBUzZCO0FBQzdCLFNBRGEsYUFBYTtBQUcxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBZTtBQUM3QyxJQUFFLE9BQU87QUFDVCxJQUFFLHNCQUFzQjtBQUN4QixJQUFFLG9DQUFvQztBQUN0QyxJQUFFLDBCQUEwQjtBQUM1QixJQUFFLDhDQUE4QztBQUNoRCxDQUFDLENBQUM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0JpZGlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7TmdNb2R1bGUsIFByb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSfSBmcm9tICcuL2tleWJvYXJkL292ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQge092ZXJsYXl9IGZyb20gJy4vb3ZlcmxheSc7XG5pbXBvcnQge09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7XG4gIENES19DT05ORUNURURfT1ZFUkxBWV9TQ1JPTExfU1RSQVRFR1lfUFJPVklERVIsXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG59IGZyb20gJy4vb3ZlcmxheS1kaXJlY3RpdmVzJztcbmltcG9ydCB7T3ZlcmxheVBvc2l0aW9uQnVpbGRlcn0gZnJvbSAnLi9wb3NpdGlvbi9vdmVybGF5LXBvc2l0aW9uLWJ1aWxkZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBQb3J0YWxNb2R1bGUsIFNjcm9sbGluZ01vZHVsZV0sXG4gIGV4cG9ydHM6IFtDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBTY3JvbGxpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgT3ZlcmxheSxcbiAgICBDREtfQ09OTkVDVEVEX09WRVJMQVlfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5TW9kdWxlIHt9XG5cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE92ZXJsYXlNb2R1bGVgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBPVkVSTEFZX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcbiAgT1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSLFxuICBPVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUixcbiAgQ0RLX0NPTk5FQ1RFRF9PVkVSTEFZX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbl07XG4iXX0=