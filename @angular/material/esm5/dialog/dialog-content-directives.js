/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, Optional, ElementRef, } from '@angular/core';
import { MatDialog } from './dialog';
import { MatDialogRef } from './dialog-ref';
/** Counter used to generate unique IDs for dialog elements. */
import * as ɵngcc0 from '@angular/core';
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var MatDialogClose = /** @class */ (function () {
    function MatDialogClose(dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /** Default to "button" to prevents accidental form submits. */
        this.type = 'button';
    }
    MatDialogClose.prototype.ngOnInit = function () {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
    };
    MatDialogClose.prototype.ngOnChanges = function (changes) {
        var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    /** @nocollapse */
    MatDialogClose.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: MatDialog }
    ]; };
    MatDialogClose.propDecorators = {
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        type: [{ type: Input }],
        dialogResult: [{ type: Input, args: ['mat-dialog-close',] }],
        _matDialogClose: [{ type: Input, args: ['matDialogClose',] }]
    };
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(ɵngcc0.ɵɵdirectiveInject(MatDialogRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MatDialog)); };
MatDialogClose.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogClose, [{
        type: Directive,
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: MatDialog }]; }, { type: [{
            type: Input
        }], dialogResult: [{
            type: Input,
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], _matDialogClose: [{
            type: Input,
            args: ['matDialogClose']
        }] }); })();
    return MatDialogClose;
}());
export { MatDialogClose };
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var MatDialogTitle = /** @class */ (function () {
    function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-" + dialogElementUid++;
    }
    MatDialogTitle.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._dialogRef) {
            this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
            Promise.resolve().then(function () {
                var container = _this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = _this.id;
                }
            });
        }
    };
    /** @nocollapse */
    MatDialogTitle.ctorParameters = function () { return [
        { type: MatDialogRef, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: MatDialog }
    ]; };
    MatDialogTitle.propDecorators = {
        id: [{ type: Input }]
    };
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(ɵngcc0.ɵɵdirectiveInject(MatDialogRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MatDialog)); };
MatDialogTitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogTitle, [{
        type: Directive,
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ElementRef }, { type: MatDialog }]; }, { id: [{
            type: Input
        }] }); })();
    return MatDialogTitle;
}());
export { MatDialogTitle };
/**
 * Scrollable content container of a dialog.
 */
var MatDialogContent = /** @class */ (function () {
    function MatDialogContent() {
    }
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogContent, [{
        type: Directive,
        args: [{
                selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
                host: { 'class': 'mat-dialog-content' }
            }]
    }], function () { return []; }, null); })();
    return MatDialogContent;
}());
export { MatDialogContent };
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var MatDialogActions = /** @class */ (function () {
    function MatDialogActions() {
    }
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatDialogActions, [{
        type: Directive,
        args: [{
                selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], function () { return []; }, null); })();
    return MatDialogActions;
}());
export { MatDialogActions };
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
    var parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(function (dialog) { return dialog.id === parent.id; }) : null;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZGlyZWN0aXZlcy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxRQUFRLEVBRVIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUxQywrREFBK0Q7O0FBQy9ELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBRXpCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDcUMsSUFvQm5DLHdCQUNxQixTQUE0QixFQUN2QyxXQUFvQyxFQUNwQyxPQUFrQjtBQUFJLFFBRlgsY0FBUyxHQUFULFNBQVMsQ0FBbUI7QUFBQyxRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFXO0FBQUMsUUFYN0IsK0RBQStEO0FBQ2pFLFFBQVcsU0FBSSxHQUFrQyxRQUFRLENBQUM7QUFDMUQsSUFTaUMsQ0FBQztBQUNsQyxJQUNFLGlDQUFRLEdBQVI7QUFDRCxRQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3pCLFlBQU0saUZBQWlGO0FBQ3ZGLFlBQU0sZ0ZBQWdGO0FBQ3RGLFlBQU0sZ0ZBQWdGO0FBQ3RGLFlBQU0sb0ZBQW9GO0FBQzFGLFlBQU0sbUNBQW1DO0FBQ3pDLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFFLENBQUM7QUFDckYsU0FBSztB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LENBQUM7b0RBSi9CLFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUU7NERBQThELHNCQUN4RSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUMsa0JBQ3RDOzs7Ozs7O2dEQUNRO0FBQUMsSUFBcUIsdUJBQUM7QUFFaEMsQ0FGZ0MsQUFKaEMsSUFJZ0M7QUFDaEMsU0FEYSxnQkFBZ0I7QUFHN0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3VDLElBRHZDO0FBQ2lCLElBR2MsQ0FBQztvREFKL0IsU0FBUyxTQUFDLHNCQUNULFFBQVEsRUFBRTs0REFBOEQsc0JBQ3hFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBQyxrQkFDdEM7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFxQix1QkFBQztBQUVoQyxDQUZnQyxBQUpoQyxJQUlnQztBQUNoQyxTQURhLGdCQUFnQjtBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLGdCQUFnQixDQUFDLE9BQWdDLEVBQUUsV0FBZ0M7QUFDNUYsSUFBRSxJQUFJLE1BQU0sR0FBdUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkUsSUFDRSxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7QUFDdkUsUUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUNsQyxLQUFHO0FBQ0gsSUFDRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTyxDQUFDLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUUsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IHtNYXREaWFsb2dSZWZ9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5cbi8qKiBDb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgZGlhbG9nIGVsZW1lbnRzLiAqL1xubGV0IGRpYWxvZ0VsZW1lbnRVaWQgPSAwO1xuXG4vKipcbiAqIEJ1dHRvbiB0aGF0IHdpbGwgY2xvc2UgdGhlIGN1cnJlbnQgZGlhbG9nLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0LWRpYWxvZy1jbG9zZV0sIFttYXREaWFsb2dDbG9zZV0nLFxuICBleHBvcnRBczogJ21hdERpYWxvZ0Nsb3NlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ2RpYWxvZ1JlZi5jbG9zZShkaWFsb2dSZXN1bHQpJyxcbiAgICAnW2F0dHIuYXJpYS1sYWJlbF0nOiAnYXJpYUxhYmVsIHx8IG51bGwnLFxuICAgICdbYXR0ci50eXBlXSc6ICd0eXBlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dDbG9zZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqIFNjcmVlbnJlYWRlciBsYWJlbCBmb3IgdGhlIGJ1dHRvbi4gKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIERlZmF1bHQgdG8gXCJidXR0b25cIiB0byBwcmV2ZW50cyBhY2NpZGVudGFsIGZvcm0gc3VibWl0cy4gKi9cbiAgQElucHV0KCkgdHlwZTogJ3N1Ym1pdCcgfCAnYnV0dG9uJyB8ICdyZXNldCcgPSAnYnV0dG9uJztcblxuICAvKiogRGlhbG9nIGNsb3NlIGlucHV0LiAqL1xuICBASW5wdXQoJ21hdC1kaWFsb2ctY2xvc2UnKSBkaWFsb2dSZXN1bHQ6IGFueTtcblxuICBASW5wdXQoJ21hdERpYWxvZ0Nsb3NlJykgX21hdERpYWxvZ0Nsb3NlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ1JlZikge1xuICAgICAgLy8gV2hlbiB0aGlzIGRpcmVjdGl2ZSBpcyBpbmNsdWRlZCBpbiBhIGRpYWxvZyB2aWEgVGVtcGxhdGVSZWYgKHJhdGhlciB0aGFuIGJlaW5nXG4gICAgICAvLyBpbiBhIENvbXBvbmVudCksIHRoZSBEaWFsb2dSZWYgaXNuJ3QgYXZhaWxhYmxlIHZpYSBpbmplY3Rpb24gYmVjYXVzZSBlbWJlZGRlZFxuICAgICAgLy8gdmlld3MgY2Fubm90IGJlIGdpdmVuIGEgY3VzdG9tIGluamVjdG9yLiBJbnN0ZWFkLCB3ZSBsb29rIHVwIHRoZSBEaWFsb2dSZWYgYnlcbiAgICAgIC8vIElELiBUaGlzIG11c3Qgb2NjdXIgaW4gYG9uSW5pdGAsIGFzIHRoZSBJRCBiaW5kaW5nIGZvciB0aGUgZGlhbG9nIGNvbnRhaW5lciB3b24ndFxuICAgICAgLy8gYmUgcmVzb2x2ZWQgYXQgY29uc3RydWN0b3IgdGltZS5cbiAgICAgIHRoaXMuZGlhbG9nUmVmID0gZ2V0Q2xvc2VzdERpYWxvZyh0aGlzLl9lbGVtZW50UmVmLCB0aGlzLl9kaWFsb2cub3BlbkRpYWxvZ3MpITtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJveGllZENoYW5nZSA9IGNoYW5nZXNbJ19tYXREaWFsb2dDbG9zZSddIHx8IGNoYW5nZXNbJ19tYXREaWFsb2dDbG9zZVJlc3VsdCddO1xuXG4gICAgaWYgKHByb3hpZWRDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVzdWx0ID0gcHJveGllZENoYW5nZS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGl0bGUgb2YgYSBkaWFsb2cgZWxlbWVudC4gU3RheXMgZml4ZWQgdG8gdGhlIHRvcCBvZiB0aGUgZGlhbG9nIHdoZW4gc2Nyb2xsaW5nLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0LWRpYWxvZy10aXRsZV0sIFttYXREaWFsb2dUaXRsZV0nLFxuICBleHBvcnRBczogJ21hdERpYWxvZ1RpdGxlJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZGlhbG9nLXRpdGxlJyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERpYWxvZ1RpdGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBtYXQtZGlhbG9nLXRpdGxlLSR7ZGlhbG9nRWxlbWVudFVpZCsrfWA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2RpYWxvZ1JlZikge1xuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gZ2V0Q2xvc2VzdERpYWxvZyh0aGlzLl9lbGVtZW50UmVmLCB0aGlzLl9kaWFsb2cub3BlbkRpYWxvZ3MpITtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZGlhbG9nUmVmLl9jb250YWluZXJJbnN0YW5jZTtcblxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFjb250YWluZXIuX2FyaWFMYWJlbGxlZEJ5KSB7XG4gICAgICAgICAgY29udGFpbmVyLl9hcmlhTGFiZWxsZWRCeSA9IHRoaXMuaWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogU2Nyb2xsYWJsZSBjb250ZW50IGNvbnRhaW5lciBvZiBhIGRpYWxvZy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW21hdC1kaWFsb2ctY29udGVudF0sIG1hdC1kaWFsb2ctY29udGVudCwgW21hdERpYWxvZ0NvbnRlbnRdYCxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtZGlhbG9nLWNvbnRlbnQnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dDb250ZW50IHt9XG5cblxuLyoqXG4gKiBDb250YWluZXIgZm9yIHRoZSBib3R0b20gYWN0aW9uIGJ1dHRvbnMgaW4gYSBkaWFsb2cuXG4gKiBTdGF5cyBmaXhlZCB0byB0aGUgYm90dG9tIHdoZW4gc2Nyb2xsaW5nLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbWF0LWRpYWxvZy1hY3Rpb25zXSwgbWF0LWRpYWxvZy1hY3Rpb25zLCBbbWF0RGlhbG9nQWN0aW9uc11gLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1kaWFsb2ctYWN0aW9ucyd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdERpYWxvZ0FjdGlvbnMge31cblxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IE1hdERpYWxvZ1JlZiB0byBhbiBlbGVtZW50IGJ5IGxvb2tpbmcgYXQgdGhlIERPTS5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgcmVsYXRpdmUgdG8gd2hpY2ggdG8gbG9vayBmb3IgYSBkaWFsb2cuXG4gKiBAcGFyYW0gb3BlbkRpYWxvZ3MgUmVmZXJlbmNlcyB0byB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9ncy5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2xvc2VzdERpYWxvZyhlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgb3BlbkRpYWxvZ3M6IE1hdERpYWxvZ1JlZjxhbnk+W10pIHtcbiAgbGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbWF0LWRpYWxvZy1jb250YWluZXInKSkge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudCA/IG9wZW5EaWFsb2dzLmZpbmQoZGlhbG9nID0+IGRpYWxvZy5pZCA9PT0gcGFyZW50IS5pZCkgOiBudWxsO1xufVxuIl19