/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "@angular/common";
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
export var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
export var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-constrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
var HighContrastModeDetector = /** @class */ (function () {
    function HighContrastModeDetector(_platform, document) {
        this._platform = _platform;
        this._document = document;
    }
    /** Gets the current high-constrast-mode for the page. */
    HighContrastModeDetector.prototype.getHighContrastMode = function () {
        if (!this._platform.isBrowser) {
            return 0 /* NONE */;
        }
        // Create a test element with an arbitrary background-color that is neither black nor
        // white; high-contrast mode will coerce the color to either black or white. Also ensure that
        // appending the test element to the DOM does not affect layout by absolutely positioning it
        var testElement = this._document.createElement('div');
        testElement.style.backgroundColor = 'rgb(1,2,3)';
        testElement.style.position = 'absolute';
        this._document.body.appendChild(testElement);
        // Get the computed style for the background color, collapsing spaces to normalize between
        // browsers. Once we get this color, we no longer need the test element. Access the `window`
        // via the document so we can fake it in tests.
        var documentWindow = this._document.defaultView;
        var computedColor = (documentWindow.getComputedStyle(testElement).backgroundColor || '').replace(/ /g, '');
        this._document.body.removeChild(testElement);
        switch (computedColor) {
            case 'rgb(0,0,0)': return 2 /* WHITE_ON_BLACK */;
            case 'rgb(255,255,255)': return 1 /* BLACK_ON_WHITE */;
        }
        return 0 /* NONE */;
    };
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    HighContrastModeDetector.prototype._applyBodyHighContrastModeCssClasses = function () {
        if (this._platform.isBrowser && this._document.body) {
            var bodyClasses = this._document.body.classList;
            // IE11 doesn't support `classList` operations with multiple arguments
            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            var mode = this.getHighContrastMode();
            if (mode === 1 /* BLACK_ON_WHITE */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
            }
            else if (mode === 2 /* WHITE_ON_BLACK */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
            }
        }
    };
    /** @nocollapse */
    HighContrastModeDetector.ctorParameters = function () { return [
        { type: Platform },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    HighContrastModeDetector.ɵprov = i0.ɵɵdefineInjectable({ factory: function HighContrastModeDetector_Factory() { return new HighContrastModeDetector(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i2.DOCUMENT)); }, token: HighContrastModeDetector, providedIn: "root" });
HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) { return new (t || HighContrastModeDetector)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(DOCUMENT)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(HighContrastModeDetector, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
    return HighContrastModeDetector;
}());
export { HighContrastModeDetector };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaC1jb250cmFzdC1tb2RlLWRldGVjdG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2ExMXkvaGlnaC1jb250cmFzdC1tb2RlL2hpZ2gtY29udHJhc3QtbW9kZS1kZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRDtBQUVtQztBQUNWO0FBTXpCLHdGQUF3Rjs7O0FBQ3hGLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHLGtDQUFrQyxDQUFDO0FBRTNFLHdGQUF3RjtBQUN4RixNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxrQ0FBa0MsQ0FBQztBQUUzRSx5RUFBeUU7QUFDekUsTUFBTSxDQUFDLElBQU0sbUNBQW1DLEdBQUcsMEJBQTBCLENBQUM7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDMEIsSUFHeEIsa0NBQW9CLFNBQW1CLEVBQW9CLFFBQWE7QUFDMUUsUUFEc0IsY0FBUyxHQUFULFNBQVMsQ0FBVTtBQUFDLFFBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQ0UseURBQXlEO0FBQzNELElBQUUsc0RBQW1CLEdBQW5CO0FBQWMsUUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDbkMsWUFBTSxvQkFBNkI7QUFDbkMsU0FBSztBQUNMLFFBQ0kscUZBQXFGO0FBQ3pGLFFBQUksNkZBQTZGO0FBQ2pHLFFBQUksNEZBQTRGO0FBQ2hHLFFBQUksSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUQsUUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFDckQsUUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDNUMsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsUUFDSSwwRkFBMEY7QUFDOUYsUUFBSSw0RkFBNEY7QUFDaEcsUUFBSSwrQ0FBK0M7QUFDbkQsUUFBSSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVksQ0FBQztBQUN2RCxRQUFJLElBQU0sYUFBYSxHQUNmLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9GLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELFFBQ0ksUUFBUSxhQUFhLEVBQUU7QUFDM0IsWUFBTSxLQUFLLFlBQVksQ0FBQyxDQUFDLDhCQUF1QztBQUNoRSxZQUFNLEtBQUssa0JBQWtCLENBQUMsQ0FBQyw4QkFBdUM7QUFDdEUsU0FBSztBQUNMLFFBQUksb0JBQTZCO0FBQ2pDLElBQUUsQ0FBQztBQUVILElBQUUseUZBQXlGO0FBQzNGLElBQUUsdUVBQW9DLEdBQXBDO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3pELFlBQU0sSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3hELFlBQU0sc0VBQXNFO0FBQzVFLFlBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzlELFlBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ25ELFlBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ25ELFlBQ00sSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDOUMsWUFBTSxJQUFJLElBQUksMkJBQW9DLEVBQUU7QUFDcEQsZ0JBQVEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzdELGdCQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNsRCxhQUFPO0FBQUMsaUJBQUssSUFBSSxJQUFJLDJCQUFvQyxFQUFFO0FBQzNELGdCQUFRLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxnQkFBUSxXQUFXLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDbEQsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUMsQ0F0RE07QUFBQztxQ0FEVCxVQUFVLFNBQUMsRUFBQyxVQUFVLHBFQUNVO0NBRFIsTUFBTSxFQUFDLFRBSUYsZ0JBcEN0QixRQUFRO0FBQUksZ0RBb0N3QixNQUFNLFNBQUMsUUFBUTtBQUFRO0FBQVU7Ozs7Ozs7O2tDQVVuQztBQUFDLG1DQXREM0M7QUFBRSxDQWdHRCxBQXhERCxJQXdEQztBQUNELFNBeERhLHdCQUF3QjtBQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogU2V0IG9mIHBvc3NpYmxlIGhpZ2gtY29udHJhc3QgbW9kZSBiYWNrZ3JvdW5kcy4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEhpZ2hDb250cmFzdE1vZGUge1xuICBOT05FLFxuICBCTEFDS19PTl9XSElURSxcbiAgV0hJVEVfT05fQkxBQ0ssXG59XG5cbi8qKiBDU1MgY2xhc3MgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQgYm9keSB3aGVuIGluIGJsYWNrLW9uLXdoaXRlIGhpZ2gtY29udHJhc3QgbW9kZS4gKi9cbmV4cG9ydCBjb25zdCBCTEFDS19PTl9XSElURV9DU1NfQ0xBU1MgPSAnY2RrLWhpZ2gtY29udHJhc3QtYmxhY2stb24td2hpdGUnO1xuXG4vKiogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBpbiB3aGl0ZS1vbi1ibGFjayBoaWdoLWNvbnRyYXN0IG1vZGUuICovXG5leHBvcnQgY29uc3QgV0hJVEVfT05fQkxBQ0tfQ1NTX0NMQVNTID0gJ2Nkay1oaWdoLWNvbnRyYXN0LXdoaXRlLW9uLWJsYWNrJztcblxuLyoqIENTUyBjbGFzcyBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCBib2R5IHdoZW4gaW4gaGlnaC1jb250cmFzdCBtb2RlLiAqL1xuZXhwb3J0IGNvbnN0IEhJR0hfQ09OVFJBU1RfTU9ERV9BQ1RJVkVfQ1NTX0NMQVNTID0gJ2Nkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSc7XG5cbi8qKlxuICogU2VydmljZSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgYnJvd3NlciBpcyBjdXJyZW50bHkgaW4gYSBoaWdoLWNvbnN0cmFzdC1tb2RlIGVudmlyb25tZW50LlxuICpcbiAqIE1pY3Jvc29mdCBXaW5kb3dzIHN1cHBvcnRzIGFuIGFjY2Vzc2liaWxpdHkgZmVhdHVyZSBjYWxsZWQgXCJIaWdoIENvbnRyYXN0IE1vZGVcIi4gVGhpcyBtb2RlXG4gKiBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIGFsbCBhcHBsaWNhdGlvbnMsIGluY2x1ZGluZyB3ZWIgYXBwbGljYXRpb25zLCB0byBkcmFtYXRpY2FsbHkgaW5jcmVhc2VcbiAqIGNvbnRyYXN0LlxuICpcbiAqIElFLCBFZGdlLCBhbmQgRmlyZWZveCBjdXJyZW50bHkgc3VwcG9ydCB0aGlzIG1vZGUuIENocm9tZSBkb2VzIG5vdCBzdXBwb3J0IFdpbmRvd3MgSGlnaCBDb250cmFzdFxuICogTW9kZS4gVGhpcyBzZXJ2aWNlIGRvZXMgbm90IGRldGVjdCBoaWdoLWNvbnRyYXN0IG1vZGUgYXMgYWRkZWQgYnkgdGhlIENocm9tZSBcIkhpZ2ggQ29udHJhc3RcIlxuICogYnJvd3NlciBleHRlbnNpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEhpZ2hDb250cmFzdE1vZGVEZXRlY3RvciB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGN1cnJlbnQgaGlnaC1jb25zdHJhc3QtbW9kZSBmb3IgdGhlIHBhZ2UuICovXG4gIGdldEhpZ2hDb250cmFzdE1vZGUoKTogSGlnaENvbnRyYXN0TW9kZSB7XG4gICAgaWYgKCF0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBIaWdoQ29udHJhc3RNb2RlLk5PTkU7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgdGVzdCBlbGVtZW50IHdpdGggYW4gYXJiaXRyYXJ5IGJhY2tncm91bmQtY29sb3IgdGhhdCBpcyBuZWl0aGVyIGJsYWNrIG5vclxuICAgIC8vIHdoaXRlOyBoaWdoLWNvbnRyYXN0IG1vZGUgd2lsbCBjb2VyY2UgdGhlIGNvbG9yIHRvIGVpdGhlciBibGFjayBvciB3aGl0ZS4gQWxzbyBlbnN1cmUgdGhhdFxuICAgIC8vIGFwcGVuZGluZyB0aGUgdGVzdCBlbGVtZW50IHRvIHRoZSBET00gZG9lcyBub3QgYWZmZWN0IGxheW91dCBieSBhYnNvbHV0ZWx5IHBvc2l0aW9uaW5nIGl0XG4gICAgY29uc3QgdGVzdEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDEsMiwzKSc7XG4gICAgdGVzdEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuX2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVzdEVsZW1lbnQpO1xuXG4gICAgLy8gR2V0IHRoZSBjb21wdXRlZCBzdHlsZSBmb3IgdGhlIGJhY2tncm91bmQgY29sb3IsIGNvbGxhcHNpbmcgc3BhY2VzIHRvIG5vcm1hbGl6ZSBiZXR3ZWVuXG4gICAgLy8gYnJvd3NlcnMuIE9uY2Ugd2UgZ2V0IHRoaXMgY29sb3IsIHdlIG5vIGxvbmdlciBuZWVkIHRoZSB0ZXN0IGVsZW1lbnQuIEFjY2VzcyB0aGUgYHdpbmRvd2BcbiAgICAvLyB2aWEgdGhlIGRvY3VtZW50IHNvIHdlIGNhbiBmYWtlIGl0IGluIHRlc3RzLlxuICAgIGNvbnN0IGRvY3VtZW50V2luZG93ID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXchO1xuICAgIGNvbnN0IGNvbXB1dGVkQ29sb3IgPVxuICAgICAgICAoZG9jdW1lbnRXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0ZXN0RWxlbWVudCkuYmFja2dyb3VuZENvbG9yIHx8ICcnKS5yZXBsYWNlKC8gL2csICcnKTtcbiAgICB0aGlzLl9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlc3RFbGVtZW50KTtcblxuICAgIHN3aXRjaCAoY29tcHV0ZWRDb2xvcikge1xuICAgICAgY2FzZSAncmdiKDAsMCwwKSc6IHJldHVybiBIaWdoQ29udHJhc3RNb2RlLldISVRFX09OX0JMQUNLO1xuICAgICAgY2FzZSAncmdiKDI1NSwyNTUsMjU1KSc6IHJldHVybiBIaWdoQ29udHJhc3RNb2RlLkJMQUNLX09OX1dISVRFO1xuICAgIH1cbiAgICByZXR1cm4gSGlnaENvbnRyYXN0TW9kZS5OT05FO1xuICB9XG5cbiAgLyoqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgaW5kaWNhdGluZyBoaWdoLWNvbnRyYXN0IG1vZGUgdG8gZG9jdW1lbnQgYm9keSAoYnJvd3Nlci1vbmx5KS4gKi9cbiAgX2FwcGx5Qm9keUhpZ2hDb250cmFzdE1vZGVDc3NDbGFzc2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fZG9jdW1lbnQuYm9keSkge1xuICAgICAgY29uc3QgYm9keUNsYXNzZXMgPSB0aGlzLl9kb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcbiAgICAgIC8vIElFMTEgZG9lc24ndCBzdXBwb3J0IGBjbGFzc0xpc3RgIG9wZXJhdGlvbnMgd2l0aCBtdWx0aXBsZSBhcmd1bWVudHNcbiAgICAgIGJvZHlDbGFzc2VzLnJlbW92ZShISUdIX0NPTlRSQVNUX01PREVfQUNUSVZFX0NTU19DTEFTUyk7XG4gICAgICBib2R5Q2xhc3Nlcy5yZW1vdmUoQkxBQ0tfT05fV0hJVEVfQ1NTX0NMQVNTKTtcbiAgICAgIGJvZHlDbGFzc2VzLnJlbW92ZShXSElURV9PTl9CTEFDS19DU1NfQ0xBU1MpO1xuXG4gICAgICBjb25zdCBtb2RlID0gdGhpcy5nZXRIaWdoQ29udHJhc3RNb2RlKCk7XG4gICAgICBpZiAobW9kZSA9PT0gSGlnaENvbnRyYXN0TW9kZS5CTEFDS19PTl9XSElURSkge1xuICAgICAgICBib2R5Q2xhc3Nlcy5hZGQoSElHSF9DT05UUkFTVF9NT0RFX0FDVElWRV9DU1NfQ0xBU1MpO1xuICAgICAgICBib2R5Q2xhc3Nlcy5hZGQoQkxBQ0tfT05fV0hJVEVfQ1NTX0NMQVNTKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gSGlnaENvbnRyYXN0TW9kZS5XSElURV9PTl9CTEFDSykge1xuICAgICAgICBib2R5Q2xhc3Nlcy5hZGQoSElHSF9DT05UUkFTVF9NT0RFX0FDVElWRV9DU1NfQ0xBU1MpO1xuICAgICAgICBib2R5Q2xhc3Nlcy5hZGQoV0hJVEVfT05fQkxBQ0tfQ1NTX0NMQVNTKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==