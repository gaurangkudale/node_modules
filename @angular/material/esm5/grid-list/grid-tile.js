/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, ElementRef, Input, Optional, ContentChildren, QueryList, Directive, ChangeDetectionStrategy, Inject, } from '@angular/core';
import { MatLine, setLines } from '@angular/material/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MAT_GRID_LIST } from './grid-list-base';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
var MatGridTile = /** @class */ (function () {
    function MatGridTile(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MatGridTile.prototype, "rowspan", {
        /** Amount of rows that the grid tile takes up. */
        get: function () { return this._rowspan; },
        set: function (value) { this._rowspan = Math.round(coerceNumberProperty(value)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridTile.prototype, "colspan", {
        /** Amount of columns that the grid tile takes up. */
        get: function () { return this._colspan; },
        set: function (value) { this._colspan = Math.round(coerceNumberProperty(value)); },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    MatGridTile.prototype._setStyle = function (property, value) {
        this._element.nativeElement.style[property] = value;
    };
    /** @nocollapse */
    MatGridTile.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_GRID_LIST,] }] }
    ]; };
    MatGridTile.propDecorators = {
        rowspan: [{ type: Input }],
        colspan: [{ type: Input }]
    };
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "figure", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTile, [{
        type: Component,
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: Input
        }], colspan: [{
            type: Input
        }] }); })();
    return MatGridTile;
}());
export { MatGridTile };
var MatGridTileText = /** @class */ (function () {
    function MatGridTileText(_element) {
        this._element = _element;
    }
    MatGridTileText.prototype.ngAfterContentInit = function () {
        setLines(this._lines, this._element);
    };
    /** @nocollapse */
    MatGridTileText.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MatGridTileText.propDecorators = {
        _lines: [{ type: ContentChildren, args: [MatLine, { descendants: true },] }]
    };
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
MatGridTileText.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatLine, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileText, [{
        type: Component,
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { _lines: [{
            type: ContentChildren,
            args: [MatLine, { descendants: true }]
        }] }); })();
    return MatGridTileText;
}());
export { MatGridTileText };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
var MatGridAvatarCssMatStyler = /** @class */ (function () {
    function MatGridAvatarCssMatStyler() {
    }
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridAvatarCssMatStyler, [{
        type: Directive,
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], function () { return []; }, null); })();
    return MatGridAvatarCssMatStyler;
}());
export { MatGridAvatarCssMatStyler };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
var MatGridTileHeaderCssMatStyler = /** @class */ (function () {
    function MatGridTileHeaderCssMatStyler() {
    }
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileHeaderCssMatStyler, [{
        type: Directive,
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], function () { return []; }, null); })();
    return MatGridTileHeaderCssMatStyler;
}());
export { MatGridTileHeaderCssMatStyler };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
var MatGridTileFooterCssMatStyler = /** @class */ (function () {
    function MatGridTileFooterCssMatStyler() {
    }
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridTileFooterCssMatStyler, [{
        type: Directive,
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], function () { return []; }, null); })();
    return MatGridTileFooterCssMatStyler;
}());
export { MatGridTileFooterCssMatStyler };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC10aWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtdGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsZUFBZSxFQUNmLFNBQVMsRUFFVCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxvQkFBb0IsRUFBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUVoRTtBQUVLLElBaUJILHFCQUNVLFFBQWlDLEVBQ0MsU0FBMkI7QUFBSSxRQURqRSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtBQUFDLFFBQ0EsY0FBUyxHQUFULFNBQVMsQ0FBa0I7QUFBQyxRQUx4RSxhQUFRLEdBQVcsQ0FBQyxDQUFDO0FBQ3ZCLFFBQUUsYUFBUSxHQUFXLENBQUMsQ0FBQztBQUN2QixJQUc0RSxDQUFDO0FBQzdFLElBRUUsc0JBQ0ksZ0NBQU87QUFBSSxRQUZmLGtEQUFrRDtBQUNwRCxhQUFFLGNBQ3dCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDaEQsYUFBQyxVQUFZLEtBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFekY7QUFBMEI7QUFBMkIsT0FISjtBQUNqRCxJQUdFLHNCQUNJLGdDQUFPO0FBQUksUUFGZixxREFBcUQ7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QUNBO0FBQ0EsR0FBRztBQUNIO0FBRWdCLElBRmhCO0FBQzhCLElBR2MsQ0FBQztpRUFKNUMsU0FBUyxTQUFDLHNCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBQyxrQkFDeEM7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFrQyxvQ0FBQztBQUM1QyxDQUQ0QyxBQUo3QyxJQUk2QztBQUM3QyxTQURhLDZCQUE2QjtBQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMaW5lLCBzZXRMaW5lc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7TUFUX0dSSURfTElTVCwgTWF0R3JpZExpc3RCYXNlfSBmcm9tICcuL2dyaWQtbGlzdC1iYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWdyaWQtdGlsZScsXG4gIGV4cG9ydEFzOiAnbWF0R3JpZFRpbGUnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1ncmlkLXRpbGUnLFxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgXCJyb3dzcGFuXCIgYW5kIFwiY29sc3BhblwiIGlucHV0IHZhbHVlIGlzIHJlZmxlY3RlZCBpblxuICAgIC8vIHRoZSBET00uIFRoaXMgaXMgbmVlZGVkIGZvciB0aGUgZ3JpZC10aWxlIGhhcm5lc3MuXG4gICAgJ1thdHRyLnJvd3NwYW5dJzogJ3Jvd3NwYW4nLFxuICAgICdbYXR0ci5jb2xzcGFuXSc6ICdjb2xzcGFuJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtdGlsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEdyaWRUaWxlIHtcbiAgX3Jvd3NwYW46IG51bWJlciA9IDE7XG4gIF9jb2xzcGFuOiBudW1iZXIgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0dSSURfTElTVCkgcHVibGljIF9ncmlkTGlzdD86IE1hdEdyaWRMaXN0QmFzZSkge31cblxuICAvKiogQW1vdW50IG9mIHJvd3MgdGhhdCB0aGUgZ3JpZCB0aWxlIHRha2VzIHVwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgcm93c3BhbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcm93c3BhbjsgfVxuICBzZXQgcm93c3Bhbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX3Jvd3NwYW4gPSBNYXRoLnJvdW5kKGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKSk7IH1cblxuICAvKiogQW1vdW50IG9mIGNvbHVtbnMgdGhhdCB0aGUgZ3JpZCB0aWxlIHRha2VzIHVwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sc3BhbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY29sc3BhbjsgfVxuICBzZXQgY29sc3Bhbih2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX2NvbHNwYW4gPSBNYXRoLnJvdW5kKGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKSk7IH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3R5bGUgb2YgdGhlIGdyaWQtdGlsZSBlbGVtZW50LiAgTmVlZHMgdG8gYmUgc2V0IG1hbnVhbGx5IHRvIGF2b2lkXG4gICAqIFwiQ2hhbmdlZCBhZnRlciBjaGVja2VkXCIgZXJyb3JzIHRoYXQgd291bGQgb2NjdXIgd2l0aCBIb3N0QmluZGluZy5cbiAgICovXG4gIF9zZXRTdHlsZShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZSBhcyBhbnkpW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd3NwYW46IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sc3BhbjogTnVtYmVySW5wdXQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1ncmlkLXRpbGUtaGVhZGVyLCBtYXQtZ3JpZC10aWxlLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC10aWxlLXRleHQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRHcmlkVGlsZVRleHQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRMaW5lLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfbGluZXM6IFF1ZXJ5TGlzdDxNYXRMaW5lPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0TGluZXModGhpcy5fbGluZXMsIHRoaXMuX2VsZW1lbnQpO1xuICB9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHdob3NlIHB1cnBvc2UgaXMgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nIHRvIHRoaXMgc2VsZWN0b3IuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtZ3JpZC1hdmF0YXJdLCBbbWF0R3JpZEF2YXRhcl0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1ncmlkLWF2YXRhcid9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEdyaWRBdmF0YXJDc3NNYXRTdHlsZXIge31cblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcgdG8gdGhpcyBzZWxlY3Rvci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWdyaWQtdGlsZS1oZWFkZXInLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1ncmlkLXRpbGUtaGVhZGVyJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0R3JpZFRpbGVIZWFkZXJDc3NNYXRTdHlsZXIge31cblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcgdG8gdGhpcyBzZWxlY3Rvci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWdyaWQtdGlsZS1mb290ZXInLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1ncmlkLXRpbGUtZm9vdGVyJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0R3JpZFRpbGVGb290ZXJDc3NNYXRTdHlsZXIge31cbiJdfQ==