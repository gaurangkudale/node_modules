/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, Input, ContentChildren, QueryList, ElementRef, Optional, ChangeDetectionStrategy, } from '@angular/core';
import { MatGridTile } from './grid-tile';
import { TileCoordinator } from './tile-coordinator';
import { FitTileStyler, RatioTileStyler, FixedTileStyler } from './tile-styler';
import { Directionality } from '@angular/cdk/bidi';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MAT_GRID_LIST } from './grid-list-base';
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';

var _c0 = ["*"];
var MAT_FIT_MODE = 'fit';
var MatGridList = /** @class */ (function () {
    function MatGridList(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    Object.defineProperty(MatGridList.prototype, "cols", {
        /** Amount of columns in the grid list. */
        get: function () { return this._cols; },
        set: function (value) {
            this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "gutterSize", {
        /** Size of the grid list's gutter in pixels. */
        get: function () { return this._gutter; },
        set: function (value) { this._gutter = "" + (value == null ? '' : value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatGridList.prototype, "rowHeight", {
        /** Set internal representation of row height from the user-provided value. */
        get: function () { return this._rowHeight; },
        set: function (value) {
            var newValue = "" + (value == null ? '' : value);
            if (newValue !== this._rowHeight) {
                this._rowHeight = newValue;
                this._setTileStyler(this._rowHeight);
            }
        },
        enumerable: true,
        configurable: true
    });
    MatGridList.prototype.ngOnInit = function () {
        this._checkCols();
        this._checkRowHeight();
    };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    MatGridList.prototype.ngAfterContentChecked = function () {
        this._layoutTiles();
    };
    /** Throw a friendly error if cols property is missing */
    MatGridList.prototype._checkCols = function () {
        if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " +
                "Example: <mat-grid-list cols=\"3\">");
        }
    };
    /** Default to equal width:height if rowHeight property is missing */
    MatGridList.prototype._checkRowHeight = function () {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    };
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    MatGridList.prototype._setTileStyler = function (rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    };
    /** Computes and applies the size and position for all children grid tiles. */
    MatGridList.prototype._layoutTiles = function () {
        var _this = this;
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        var tracker = this._tileCoordinator;
        var tiles = this._tiles.filter(function (tile) { return !tile._gridList || tile._gridList === _this; });
        var direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach(function (tile, index) {
            var pos = tracker.positions[index];
            _this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    };
    /** Sets style on the main grid-list element, given the style name and value. */
    MatGridList.prototype._setListStyle = function (style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    };
    /** @nocollapse */
    MatGridList.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    MatGridList.propDecorators = {
        _tiles: [{ type: ContentChildren, args: [MatGridTile, { descendants: true },] }],
        cols: [{ type: Input }],
        gutterSize: [{ type: Input }],
        rowHeight: [{ type: Input }]
    };
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
MatGridList.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatGridTile, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatGridList, [{
        type: Component,
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { cols: [{
            type: Input
        }], gutterSize: [{
            type: Input
        }], rowHeight: [{
            type: Input
        }], _tiles: [{
            type: ContentChildren,
            args: [MatGridTile, { descendants: true }]
        }] }); })();
    return MatGridList;
}());
export { MatGridList };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFHakIsS0FBSyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFhLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0JBQW9CLEVBQWMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFrQixNQUFNLGtCQUFrQixDQUFDO0FBR2hFLGdFQUFnRTtBQUNoRSxxRUFBcUU7QUFDckUsaURBQWlEOzs7OztBQUVqRCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7QUFFSyxJQXdDSCxxQkFBb0IsUUFBaUMsRUFDckIsSUFBb0I7QUFBSSxRQURwQyxhQUFRLEdBQVIsUUFBUSxDQUF5QjtBQUFDLFFBQ3RCLFNBQUksR0FBSixJQUFJLENBQWdCO0FBQUMsUUFWckQscUZBQXFGO0FBQ3ZGLFFBQVUsWUFBTyxHQUFXLEtBQUssQ0FBQztBQUNsQyxJQVF5RCxDQUFDO0FBQzFELElBRUUsc0JBQ0ksNkJBQUk7QUFBSSxRQUZaLDBDQUEwQztBQUM1QyxhQUFFLGNBQ3FCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENB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MENNO0FBQUMsSUFtRlIsa0JBQUM7QUFDQSxDQURBLEFBOUlELElBOElDO0FBQ0QsU0E3SGEsV0FBVztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBFbGVtZW50UmVmLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRHcmlkVGlsZX0gZnJvbSAnLi9ncmlkLXRpbGUnO1xuaW1wb3J0IHtUaWxlQ29vcmRpbmF0b3J9IGZyb20gJy4vdGlsZS1jb29yZGluYXRvcic7XG5pbXBvcnQge1RpbGVTdHlsZXIsIEZpdFRpbGVTdHlsZXIsIFJhdGlvVGlsZVN0eWxlciwgRml4ZWRUaWxlU3R5bGVyfSBmcm9tICcuL3RpbGUtc3R5bGVyJztcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtNQVRfR1JJRF9MSVNULCBNYXRHcmlkTGlzdEJhc2V9IGZyb20gJy4vZ3JpZC1saXN0LWJhc2UnO1xuXG5cbi8vIFRPRE8oa2FyYSk6IENvbmRpdGlvbmFsIChyZXNwb25zaXZlKSBjb2x1bW4gY291bnQgLyByb3cgc2l6ZS5cbi8vIFRPRE8oa2FyYSk6IFJlLWxheW91dCBvbiB3aW5kb3cgcmVzaXplIC8gbWVkaWEgY2hhbmdlIChkZWJvdW5jZWQpLlxuLy8gVE9ETyhrYXJhKTogZ3JpZFRpbGVIZWFkZXIgYW5kIGdyaWRUaWxlRm9vdGVyLlxuXG5jb25zdCBNQVRfRklUX01PREUgPSAnZml0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWdyaWQtbGlzdCcsXG4gIGV4cG9ydEFzOiAnbWF0R3JpZExpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtZ3JpZC1saXN0JyxcbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIFwiY29sc1wiIGlucHV0IHZhbHVlIGlzIHJlZmxlY3RlZCBpbiB0aGUgRE9NLiBUaGlzIGlzXG4gICAgLy8gbmVlZGVkIGZvciB0aGUgZ3JpZC1saXN0IGhhcm5lc3MuXG4gICAgJ1thdHRyLmNvbHNdJzogJ2NvbHMnLFxuICB9LFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTUFUX0dSSURfTElTVCxcbiAgICB1c2VFeGlzdGluZzogTWF0R3JpZExpc3RcbiAgfV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRHcmlkTGlzdCBpbXBsZW1lbnRzIE1hdEdyaWRMaXN0QmFzZSwgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgLyoqIE51bWJlciBvZiBjb2x1bW5zIGJlaW5nIHJlbmRlcmVkLiAqL1xuICBwcml2YXRlIF9jb2xzOiBudW1iZXI7XG5cbiAgLyoqIFVzZWQgZm9yIGRldGVybWluaW5ndGhlIHBvc2l0aW9uIG9mIGVhY2ggdGlsZSBpbiB0aGUgZ3JpZC4gKi9cbiAgcHJpdmF0ZSBfdGlsZUNvb3JkaW5hdG9yOiBUaWxlQ29vcmRpbmF0b3I7XG5cbiAgLyoqXG4gICAqIFJvdyBoZWlnaHQgdmFsdWUgcGFzc2VkIGluIGJ5IHVzZXIuIFRoaXMgY2FuIGJlIG9uZSBvZiB0aHJlZSB0eXBlczpcbiAgICogLSBOdW1iZXIgdmFsdWUgKGV4OiBcIjEwMHB4XCIpOiAgc2V0cyBhIGZpeGVkIHJvdyBoZWlnaHQgdG8gdGhhdCB2YWx1ZVxuICAgKiAtIFJhdGlvIHZhbHVlIChleDogXCI0OjNcIik6IHNldHMgdGhlIHJvdyBoZWlnaHQgYmFzZWQgb24gd2lkdGg6aGVpZ2h0IHJhdGlvXG4gICAqIC0gXCJGaXRcIiBtb2RlIChleDogXCJmaXRcIik6IHNldHMgdGhlIHJvdyBoZWlnaHQgdG8gdG90YWwgaGVpZ2h0IGRpdmlkZWQgYnkgbnVtYmVyIG9mIHJvd3NcbiAgICovXG4gIHByaXZhdGUgX3Jvd0hlaWdodDogc3RyaW5nO1xuXG4gIC8qKiBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGlsZXMuIFRoaXMgd2lsbCBiZSBzb21ldGhpbmcgbGlrZSAnNXB4JyBvciAnMmVtJy4gKi9cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBzdHJpbmcgPSAnMXB4JztcblxuICAvKiogU2V0cyBwb3NpdGlvbiBhbmQgc2l6ZSBzdHlsZXMgZm9yIGEgdGlsZSAqL1xuICBwcml2YXRlIF90aWxlU3R5bGVyOiBUaWxlU3R5bGVyO1xuXG4gIC8qKiBRdWVyeSBsaXN0IG9mIHRpbGVzIHRoYXQgYXJlIGJlaW5nIHJlbmRlcmVkLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE1hdEdyaWRUaWxlLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfdGlsZXM6IFF1ZXJ5TGlzdDxNYXRHcmlkVGlsZT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHkpIHt9XG5cbiAgLyoqIEFtb3VudCBvZiBjb2x1bW5zIGluIHRoZSBncmlkIGxpc3QuICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9jb2xzOyB9XG4gIHNldCBjb2xzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb2xzID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSkpKTtcbiAgfVxuXG4gIC8qKiBTaXplIG9mIHRoZSBncmlkIGxpc3QncyBndXR0ZXIgaW4gcGl4ZWxzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyU2l6ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fZ3V0dGVyOyB9XG4gIHNldCBndXR0ZXJTaXplKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5fZ3V0dGVyID0gYCR7dmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWV9YDsgfVxuXG4gIC8qKiBTZXQgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2Ygcm93IGhlaWdodCBmcm9tIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgcm93SGVpZ2h0KCk6IHN0cmluZyB8IG51bWJlciB7IHJldHVybiB0aGlzLl9yb3dIZWlnaHQ7IH1cbiAgc2V0IHJvd0hlaWdodCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBgJHt2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZX1gO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl9yb3dIZWlnaHQpIHtcbiAgICAgIHRoaXMuX3Jvd0hlaWdodCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fc2V0VGlsZVN0eWxlcih0aGlzLl9yb3dIZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2NoZWNrQ29scygpO1xuICAgIHRoaXMuX2NoZWNrUm93SGVpZ2h0KCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxheW91dCBjYWxjdWxhdGlvbiBpcyBmYWlybHkgY2hlYXAgaWYgbm90aGluZyBjaGFuZ2VzLCBzbyB0aGVyZSdzIGxpdHRsZSBjb3N0XG4gICAqIHRvIHJ1biBpdCBmcmVxdWVudGx5LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMuX2xheW91dFRpbGVzKCk7XG4gIH1cblxuICAvKiogVGhyb3cgYSBmcmllbmRseSBlcnJvciBpZiBjb2xzIHByb3BlcnR5IGlzIG1pc3NpbmcgKi9cbiAgcHJpdmF0ZSBfY2hlY2tDb2xzKCkge1xuICAgIGlmICghdGhpcy5jb2xzKSB7XG4gICAgICB0aHJvdyBFcnJvcihgbWF0LWdyaWQtbGlzdDogbXVzdCBwYXNzIGluIG51bWJlciBvZiBjb2x1bW5zLiBgICtcbiAgICAgICAgICAgICAgICAgIGBFeGFtcGxlOiA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiM1wiPmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZWZhdWx0IHRvIGVxdWFsIHdpZHRoOmhlaWdodCBpZiByb3dIZWlnaHQgcHJvcGVydHkgaXMgbWlzc2luZyAqL1xuICBwcml2YXRlIF9jaGVja1Jvd0hlaWdodCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3Jvd0hlaWdodCkge1xuICAgICAgdGhpcy5fc2V0VGlsZVN0eWxlcignMToxJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENyZWF0ZXMgY29ycmVjdCBUaWxlIFN0eWxlciBzdWJ0eXBlIGJhc2VkIG9uIHJvd0hlaWdodCBwYXNzZWQgaW4gYnkgdXNlciAqL1xuICBwcml2YXRlIF9zZXRUaWxlU3R5bGVyKHJvd0hlaWdodDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RpbGVTdHlsZXIpIHtcbiAgICAgIHRoaXMuX3RpbGVTdHlsZXIucmVzZXQodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHJvd0hlaWdodCA9PT0gTUFUX0ZJVF9NT0RFKSB7XG4gICAgICB0aGlzLl90aWxlU3R5bGVyID0gbmV3IEZpdFRpbGVTdHlsZXIoKTtcbiAgICB9IGVsc2UgaWYgKHJvd0hlaWdodCAmJiByb3dIZWlnaHQuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICAgIHRoaXMuX3RpbGVTdHlsZXIgPSBuZXcgUmF0aW9UaWxlU3R5bGVyKHJvd0hlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpbGVTdHlsZXIgPSBuZXcgRml4ZWRUaWxlU3R5bGVyKHJvd0hlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENvbXB1dGVzIGFuZCBhcHBsaWVzIHRoZSBzaXplIGFuZCBwb3NpdGlvbiBmb3IgYWxsIGNoaWxkcmVuIGdyaWQgdGlsZXMuICovXG4gIHByaXZhdGUgX2xheW91dFRpbGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdGlsZUNvb3JkaW5hdG9yKSB7XG4gICAgICB0aGlzLl90aWxlQ29vcmRpbmF0b3IgPSBuZXcgVGlsZUNvb3JkaW5hdG9yKCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCB0cmFja2VyID0gdGhpcy5fdGlsZUNvb3JkaW5hdG9yO1xuICAgIGNvbnN0IHRpbGVzID0gdGhpcy5fdGlsZXMuZmlsdGVyKHRpbGUgPT4gIXRpbGUuX2dyaWRMaXN0IHx8IHRpbGUuX2dyaWRMaXN0ID09PSB0aGlzKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJztcblxuICAgIHRoaXMuX3RpbGVDb29yZGluYXRvci51cGRhdGUodGhpcy5jb2xzLCB0aWxlcyk7XG4gICAgdGhpcy5fdGlsZVN0eWxlci5pbml0KHRoaXMuZ3V0dGVyU2l6ZSwgdHJhY2tlciwgdGhpcy5jb2xzLCBkaXJlY3Rpb24pO1xuXG4gICAgdGlsZXMuZm9yRWFjaCgodGlsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IHRyYWNrZXIucG9zaXRpb25zW2luZGV4XTtcbiAgICAgIHRoaXMuX3RpbGVTdHlsZXIuc2V0U3R5bGUodGlsZSwgcG9zLnJvdywgcG9zLmNvbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRMaXN0U3R5bGUodGhpcy5fdGlsZVN0eWxlci5nZXRDb21wdXRlZEhlaWdodCgpKTtcbiAgfVxuXG4gIC8qKiBTZXRzIHN0eWxlIG9uIHRoZSBtYWluIGdyaWQtbGlzdCBlbGVtZW50LCBnaXZlbiB0aGUgc3R5bGUgbmFtZSBhbmQgdmFsdWUuICovXG4gIF9zZXRMaXN0U3R5bGUoc3R5bGU6IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZSBhcyBhbnkpW3N0eWxlWzBdXSA9IHN0eWxlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xzOiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==