/**
 * @fileoverview added by tsickle
 * Generated from: src/material/toolbar/toolbar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, ElementRef, Inject, isDevMode, QueryList, ViewEncapsulation, } from '@angular/core';
import { mixinColor } from '@angular/material/core';
// Boilerplate for applying mixins to MatToolbar.
/**
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';

const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
class MatToolbarBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {
    /** @type {?} */
    MatToolbarBase.prototype._elementRef;
}
/** @type {?} */
const _MatToolbarMixinBase = mixinColor(MatToolbarBase);
export class MatToolbarRow {
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
    }], null, null); })();
export class MatToolbar extends _MatToolbarMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _platform
     * @param {?=} document
     */
    constructor(elementRef, _platform, document) {
        super(elementRef);
        this._platform = _platform;
        // TODO: make the document a required param when doing breaking changes.
        this._document = document;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isDevMode() || !this._platform.isBrowser) {
            return;
        }
        this._checkToolbarMixedModes();
        this._toolbarRows.changes.subscribe((/**
         * @return {?}
         */
        () => this._checkToolbarMixedModes()));
    }
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     * @private
     * @return {?}
     */
    _checkToolbarMixedModes() {
        if (!this._toolbarRows.length) {
            return;
        }
        // Check if there are any other DOM nodes that can display content but aren't inside of
        // a <mat-toolbar-row> element.
        /** @type {?} */
        const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes)
            .filter((/**
         * @param {?} node
         * @return {?}
         */
        node => !(node.classList && node.classList.contains('mat-toolbar-row'))))
            .filter((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)))
            .some((/**
         * @param {?} node
         * @return {?}
         */
        node => !!(node.textContent && node.textContent.trim())));
        if (isCombinedUsage) {
            throwToolbarMixedModesError();
        }
    }
}
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
/** @nocollapse */
MatToolbar.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MatToolbar.propDecorators = {
    _toolbarRows: [{ type: ContentChildren, args: [MatToolbarRow, { descendants: true },] }]
};
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatToolbar.prototype._document;
    /**
     * Reference to all toolbar row elements that have been projected.
     * @type {?}
     */
    MatToolbar.prototype._toolbarRows;
    /**
     * @type {?}
     * @private
     */
    MatToolbar.prototype._platform;
}
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * \@docs-private
 * @return {?}
 */
export function throwToolbarMixedModesError() {
    throw Error('MatToolbar: Attempting to combine different toolbar modes. ' +
        'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' +
        'inside of a `<mat-toolbar>` for a single row.');
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFFO0FBRWdEO0FBQzlDO0FBQWtCOzs7Ozs7QUFDcEIsTUFBTSxjQUFjO0FBQ3BCO0FBQVE7QUFBOEI7QUFBUSxJQUE1QyxZQUFtQixXQUF1QjtBQUFJLFFBQTNCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0FBQUMsSUFBRSxDQUFDO0FBQ2hELENBQUM7QUFDRDtBQUFhO0FBQXFCLElBRnBCLHFDQUE4QjtBQUFDO0FBQUU7QUFFbEMsTUFBUCxvQkFBb0IsR0FBeUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztBQU83RixNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQUw1QixTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO1NBQWlCLGtCQUMzQixRQUFRLEVBQUUsZUFBZSxrQkFDekIsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFDLGVBQ25DOzs7Ozs7OzswQkFDSTtBQWdCTCxNQUFNLE9BQU8sVUFBVyxTQUFRLG9CQUFvQjtBQUFHO0FBQVE7QUFDN0Q7QUFBNEI7QUFFSjtBQUFRLElBR2hDLFlBQ0UsVUFBc0IsRUFDZCxTQUFtQixFQUNULFFBQWM7QUFDcEMsUUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENB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QkFBMkI7QUFDM0MsSUFBRSxNQUFNLEtBQUssQ0FBQyw2REFBNkQ7QUFDM0UsUUFBSSx3RkFBd0Y7QUFDNUYsUUFBSSwrQ0FBK0MsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIGlzRGV2TW9kZSxcbiAgUXVlcnlMaXN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkNvbG9yLCBDYW5Db2xvckN0b3IsIG1peGluQ29sb3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gTWF0VG9vbGJhci5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBNYXRUb29sYmFyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cbmNvbnN0IF9NYXRUb29sYmFyTWl4aW5CYXNlOiBDYW5Db2xvckN0b3IgJiB0eXBlb2YgTWF0VG9vbGJhckJhc2UgPSBtaXhpbkNvbG9yKE1hdFRvb2xiYXJCYXNlKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LXRvb2xiYXItcm93JyxcbiAgZXhwb3J0QXM6ICdtYXRUb29sYmFyUm93JyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtdG9vbGJhci1yb3cnfSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0VG9vbGJhclJvdyB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdG9vbGJhcicsXG4gIGV4cG9ydEFzOiAnbWF0VG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXIuY3NzJ10sXG4gIGlucHV0czogWydjb2xvciddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC10b29sYmFyJyxcbiAgICAnW2NsYXNzLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3NdJzogJ190b29sYmFyUm93cy5sZW5ndGggPiAwJyxcbiAgICAnW2NsYXNzLm1hdC10b29sYmFyLXNpbmdsZS1yb3ddJzogJ190b29sYmFyUm93cy5sZW5ndGggPT09IDAnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0VG9vbGJhciBleHRlbmRzIF9NYXRUb29sYmFyTWl4aW5CYXNlIGltcGxlbWVudHMgQ2FuQ29sb3IsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byBhbGwgdG9vbGJhciByb3cgZWxlbWVudHMgdGhhdCBoYXZlIGJlZW4gcHJvamVjdGVkLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdFRvb2xiYXJSb3csIHtkZXNjZW5kYW50czogdHJ1ZX0pIF90b29sYmFyUm93czogUXVlcnlMaXN0PE1hdFRvb2xiYXJSb3c+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50PzogYW55KSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG5cbiAgICAvLyBUT0RPOiBtYWtlIHRoZSBkb2N1bWVudCBhIHJlcXVpcmVkIHBhcmFtIHdoZW4gZG9pbmcgYnJlYWtpbmcgY2hhbmdlcy5cbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghaXNEZXZNb2RlKCkgfHwgIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrVG9vbGJhck1peGVkTW9kZXMoKTtcbiAgICB0aGlzLl90b29sYmFyUm93cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGVja1Rvb2xiYXJNaXhlZE1vZGVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhbiBleGNlcHRpb24gd2hlbiBkZXZlbG9wZXJzIGFyZSBhdHRlbXB0aW5nIHRvIGNvbWJpbmUgdGhlIGRpZmZlcmVudCB0b29sYmFyIHJvdyBtb2Rlcy5cbiAgICovXG4gIHByaXZhdGUgX2NoZWNrVG9vbGJhck1peGVkTW9kZXMoKSB7XG4gICAgaWYgKCF0aGlzLl90b29sYmFyUm93cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG90aGVyIERPTSBub2RlcyB0aGF0IGNhbiBkaXNwbGF5IGNvbnRlbnQgYnV0IGFyZW4ndCBpbnNpZGUgb2ZcbiAgICAvLyBhIDxtYXQtdG9vbGJhci1yb3c+IGVsZW1lbnQuXG4gICAgY29uc3QgaXNDb21iaW5lZFVzYWdlID0gQXJyYXkuZnJvbTxIVE1MRWxlbWVudD4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gIShub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucygnbWF0LXRvb2xiYXItcm93JykpKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUubm9kZVR5cGUgIT09ICh0aGlzLl9kb2N1bWVudCA/IHRoaXMuX2RvY3VtZW50LkNPTU1FTlRfTk9ERSA6IDgpKVxuICAgICAgLnNvbWUobm9kZSA9PiAhIShub2RlLnRleHRDb250ZW50ICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpKSk7XG5cbiAgICBpZiAoaXNDb21iaW5lZFVzYWdlKSB7XG4gICAgICB0aHJvd1Rvb2xiYXJNaXhlZE1vZGVzRXJyb3IoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4gYXR0ZW1wdGluZyB0byBjb21iaW5lIHRoZSBkaWZmZXJlbnQgdG9vbGJhciByb3cgbW9kZXMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Rvb2xiYXJNaXhlZE1vZGVzRXJyb3IoKSB7XG4gIHRocm93IEVycm9yKCdNYXRUb29sYmFyOiBBdHRlbXB0aW5nIHRvIGNvbWJpbmUgZGlmZmVyZW50IHRvb2xiYXIgbW9kZXMuICcgK1xuICAgICdFaXRoZXIgc3BlY2lmeSBtdWx0aXBsZSBgPG1hdC10b29sYmFyLXJvdz5gIGVsZW1lbnRzIGV4cGxpY2l0bHkgb3IganVzdCBwbGFjZSBjb250ZW50ICcgK1xuICAgICdpbnNpZGUgb2YgYSBgPG1hdC10b29sYmFyPmAgZm9yIGEgc2luZ2xlIHJvdy4nKTtcbn1cbiJdfQ==