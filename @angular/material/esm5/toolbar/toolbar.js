/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, ElementRef, Inject, isDevMode, QueryList, ViewEncapsulation, } from '@angular/core';
import { mixinColor } from '@angular/material/core';
// Boilerplate for applying mixins to MatToolbar.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';

var _c0 = ["*", [["mat-toolbar-row"]]];
var _c1 = ["*", "mat-toolbar-row"];
var MatToolbarBase = /** @class */ (function () {
    function MatToolbarBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatToolbarBase;
}());
var _MatToolbarMixinBase = mixinColor(MatToolbarBase);
var MatToolbarRow = /** @class */ (function () {
    function MatToolbarRow() {
    }
MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) { return new (t || MatToolbarRow)(); };
MatToolbarRow.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatToolbarRow, selectors: [["mat-toolbar-row"]], hostAttrs: [1, "mat-toolbar-row"], exportAs: ["matToolbarRow"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbarRow, [{
        type: Directive,
        args: [{
                selector: 'mat-toolbar-row',
                exportAs: 'matToolbarRow',
                host: { 'class': 'mat-toolbar-row' }
            }]
    }], function () { return []; }, null); })();
    return MatToolbarRow;
}());
export { MatToolbarRow };
var MatToolbar = /** @class */ (function (_super) {
    __extends(MatToolbar, _super);
    function MatToolbar(elementRef, _platform, document) {
        var _this = _super.call(this, elementRef) || this;
        _this._platform = _platform;
        // TODO: make the document a required param when doing breaking changes.
        _this._document = document;
        return _this;
    }
    MatToolbar.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!isDevMode() || !this._platform.isBrowser) {
            return;
        }
        this._checkToolbarMixedModes();
        this._toolbarRows.changes.subscribe(function () { return _this._checkToolbarMixedModes(); });
    };
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     */
    MatToolbar.prototype._checkToolbarMixedModes = function () {
        var _this = this;
        if (!this._toolbarRows.length) {
            return;
        }
        // Check if there are any other DOM nodes that can display content but aren't inside of
        // a <mat-toolbar-row> element.
        var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes)
            .filter(function (node) { return !(node.classList && node.classList.contains('mat-toolbar-row')); })
            .filter(function (node) { return node.nodeType !== (_this._document ? _this._document.COMMENT_NODE : 8); })
            .some(function (node) { return !!(node.textContent && node.textContent.trim()); });
        if (isCombinedUsage) {
            throwToolbarMixedModesError();
        }
    };
    /** @nocollapse */
    MatToolbar.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Platform },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MatToolbar.propDecorators = {
        _toolbarRows: [{ type: ContentChildren, args: [MatToolbarRow, { descendants: true },] }]
    };
MatToolbar.ɵfac = function MatToolbar_Factory(t) { return new (t || MatToolbar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
MatToolbar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatToolbar, selectors: [["mat-toolbar"]], contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatToolbarRow, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._toolbarRows = _t);
    } }, hostAttrs: [1, "mat-toolbar"], hostVars: 4, hostBindings: function MatToolbar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    } }, inputs: { color: "color" }, exportAs: ["matToolbar"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatToolbar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵprojection(1, 1);
    } }, styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatToolbar, [{
        type: Component,
        args: [{
                selector: 'mat-toolbar',
                exportAs: 'matToolbar',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-toolbar',
                    '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
                    '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { _toolbarRows: [{
            type: ContentChildren,
            args: [MatToolbarRow, { descendants: true }]
        }] }); })();
    return MatToolbar;
}(_MatToolbarMixinBase));
export { MatToolbar };
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
export function throwToolbarMixedModesError() {
    throw Error('MatToolbar: Attempting to combine different toolbar modes. ' +
        'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' +
        'inside of a `<mat-toolbar>` for a single row.');
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRzFFLGlEQUFpRDtBQUNqRCxvQkFBb0I7Ozs7OztBQUNwQjtBQUMyQixJQUF6Qix3QkFBbUIsV0FBdUI7QUFBSSxRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtBQUFDLElBQUUsQ0FBQztBQUNoRCxJQUFBLHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFDRCxJQUFNLG9CQUFvQixHQUF5QyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFOUY7QUFFSyxJQUZMO0FBQ2MsSUFJYyxDQUFDO2lEQUw1QixTQUFTLFNBQUMsc0JBQ1Q7RUFBUSxFQUFFLGlCQUFpQixzQkFDM0IsUUFBUSxFQUFFLGVBQWUsc0JBQ3pCLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxtQkFDbkM7Ozs7Ozs7O2dEQUNRO0FBQUMsSUFBa0Isb0JBQUM7QUFFN0IsQ0FGNkIsQUFMN0IsSUFLNkI7QUFDN0IsU0FEYSxhQUFhO0FBRTFCO0FBRVksSUFZb0IsOEJBQW9CO0FBQUMsSUFNbkQsb0JBQ0UsVUFBc0IsRUFDZCxTQUFtQixFQUNULFFB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QVUsMkJBQTJCO0FBQzNDLElBQUUsTUFBTSxLQUFLLENBQUMsNkRBQTZEO0FBQzNFLFFBQUksd0ZBQXdGO0FBQzVGLFFBQUksK0NBQStDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBpc0Rldk1vZGUsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5Db2xvciwgQ2FuQ29sb3JDdG9yLCBtaXhpbkNvbG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdFRvb2xiYXIuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0VG9vbGJhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG59XG5jb25zdCBfTWF0VG9vbGJhck1peGluQmFzZTogQ2FuQ29sb3JDdG9yICYgdHlwZW9mIE1hdFRvb2xiYXJCYXNlID0gbWl4aW5Db2xvcihNYXRUb29sYmFyQmFzZSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC10b29sYmFyLXJvdycsXG4gIGV4cG9ydEFzOiAnbWF0VG9vbGJhclJvdycsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LXRvb2xiYXItcm93J30sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRvb2xiYXJSb3cge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXRvb2xiYXInLFxuICBleHBvcnRBczogJ21hdFRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLmNzcyddLFxuICBpbnB1dHM6IFsnY29sb3InXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtdG9vbGJhcicsXG4gICAgJ1tjbGFzcy5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzXSc6ICdfdG9vbGJhclJvd3MubGVuZ3RoID4gMCcsXG4gICAgJ1tjbGFzcy5tYXQtdG9vbGJhci1zaW5nbGUtcm93XSc6ICdfdG9vbGJhclJvd3MubGVuZ3RoID09PSAwJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRvb2xiYXIgZXh0ZW5kcyBfTWF0VG9vbGJhck1peGluQmFzZSBpbXBsZW1lbnRzIENhbkNvbG9yLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gYWxsIHRvb2xiYXIgcm93IGVsZW1lbnRzIHRoYXQgaGF2ZSBiZWVuIHByb2plY3RlZC4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihNYXRUb29sYmFyUm93LCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfdG9vbGJhclJvd3M6IFF1ZXJ5TGlzdDxNYXRUb29sYmFyUm93PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudD86IGFueSkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuXG4gICAgLy8gVE9ETzogbWFrZSB0aGUgZG9jdW1lbnQgYSByZXF1aXJlZCBwYXJhbSB3aGVuIGRvaW5nIGJyZWFraW5nIGNoYW5nZXMuXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIWlzRGV2TW9kZSgpIHx8ICF0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja1Rvb2xiYXJNaXhlZE1vZGVzKCk7XG4gICAgdGhpcy5fdG9vbGJhclJvd3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hlY2tUb29sYmFyTWl4ZWRNb2RlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gZGV2ZWxvcGVycyBhcmUgYXR0ZW1wdGluZyB0byBjb21iaW5lIHRoZSBkaWZmZXJlbnQgdG9vbGJhciByb3cgbW9kZXMuXG4gICAqL1xuICBwcml2YXRlIF9jaGVja1Rvb2xiYXJNaXhlZE1vZGVzKCkge1xuICAgIGlmICghdGhpcy5fdG9vbGJhclJvd3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBvdGhlciBET00gbm9kZXMgdGhhdCBjYW4gZGlzcGxheSBjb250ZW50IGJ1dCBhcmVuJ3QgaW5zaWRlIG9mXG4gICAgLy8gYSA8bWF0LXRvb2xiYXItcm93PiBlbGVtZW50LlxuICAgIGNvbnN0IGlzQ29tYmluZWRVc2FnZSA9IEFycmF5LmZyb208SFRNTEVsZW1lbnQ+KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzKVxuICAgICAgLmZpbHRlcihub2RlID0+ICEobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ21hdC10b29sYmFyLXJvdycpKSlcbiAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlICE9PSAodGhpcy5fZG9jdW1lbnQgPyB0aGlzLl9kb2N1bWVudC5DT01NRU5UX05PREUgOiA4KSlcbiAgICAgIC5zb21lKG5vZGUgPT4gISEobm9kZS50ZXh0Q29udGVudCAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSkpO1xuXG4gICAgaWYgKGlzQ29tYmluZWRVc2FnZSkge1xuICAgICAgdGhyb3dUb29sYmFyTWl4ZWRNb2Rlc0Vycm9yKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhyb3dzIGFuIGV4Y2VwdGlvbiB3aGVuIGF0dGVtcHRpbmcgdG8gY29tYmluZSB0aGUgZGlmZmVyZW50IHRvb2xiYXIgcm93IG1vZGVzLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dUb29sYmFyTWl4ZWRNb2Rlc0Vycm9yKCkge1xuICB0aHJvdyBFcnJvcignTWF0VG9vbGJhcjogQXR0ZW1wdGluZyB0byBjb21iaW5lIGRpZmZlcmVudCB0b29sYmFyIG1vZGVzLiAnICtcbiAgICAnRWl0aGVyIHNwZWNpZnkgbXVsdGlwbGUgYDxtYXQtdG9vbGJhci1yb3c+YCBlbGVtZW50cyBleHBsaWNpdGx5IG9yIGp1c3QgcGxhY2UgY29udGVudCAnICtcbiAgICAnaW5zaWRlIG9mIGEgYDxtYXQtdG9vbGJhcj5gIGZvciBhIHNpbmdsZSByb3cuJyk7XG59XG4iXX0=