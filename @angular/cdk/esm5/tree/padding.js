/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CdkTree, CdkTreeNode } from './tree';
/** Regex used to split a string on its CSS units. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
var cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */
var CdkTreeNodePadding = /** @class */ (function () {
    function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this = this;
        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new Subject();
        /** CSS units used for the indentation value. */
        this.indentUnits = 'px';
        this._indent = 40;
        this._setPadding();
        if (_dir) {
            _dir.change.pipe(takeUntil(this._destroyed)).subscribe(function () { return _this._setPadding(true); });
        }
        // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.
        _treeNode._dataChanges.subscribe(function () { return _this._setPadding(); });
    }
    Object.defineProperty(CdkTreeNodePadding.prototype, "level", {
        /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
        get: function () { return this._level; },
        set: function (value) {
            // Set to null as the fallback value so that _setPadding can fall back to the node level if the
            // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
            // they set 0 explicitly.
            this._level = coerceNumberProperty(value, null);
            this._setPadding();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTreeNodePadding.prototype, "indent", {
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         */
        get: function () { return this._indent; },
        set: function (indent) {
            var value = indent;
            var units = 'px';
            if (typeof indent === 'string') {
                var parts = indent.split(cssUnitPattern);
                value = parts[0];
                units = parts[1] || units;
            }
            this.indentUnits = units;
            this._indent = coerceNumberProperty(value);
            this._setPadding();
        },
        enumerable: true,
        configurable: true
    });
    CdkTreeNodePadding.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    CdkTreeNodePadding.prototype._paddingIndent = function () {
        var nodeLevel = (this._treeNode.data && this._tree.treeControl.getLevel)
            ? this._tree.treeControl.getLevel(this._treeNode.data)
            : null;
        var level = this._level == null ? nodeLevel : this._level;
        return typeof level === 'number' ? "" + level * this._indent + this.indentUnits : null;
    };
    CdkTreeNodePadding.prototype._setPadding = function (forceChange) {
        if (forceChange === void 0) { forceChange = false; }
        var padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
            var element = this._element.nativeElement;
            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
            this._renderer.setStyle(element, paddingProp, padding);
            this._renderer.setStyle(element, resetProp, null);
            this._currentPadding = padding;
        }
    };
    /** @nocollapse */
    CdkTreeNodePadding.ctorParameters = function () { return [
        { type: CdkTreeNode },
        { type: CdkTree },
        { type: Renderer2 },
        { type: ElementRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
    CdkTreeNodePadding.propDecorators = {
        level: [{ type: Input, args: ['cdkTreeNodePadding',] }],
        indent: [{ type: Input, args: ['cdkTreeNodePaddingIndent',] }]
    };
CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) { return new (t || CdkTreeNodePadding)(ɵngcc0.ɵɵdirectiveInject(CdkTreeNode), ɵngcc0.ɵɵdirectiveInject(CdkTree), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
CdkTreeNodePadding.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodePadding, selectors: [["", "cdkTreeNodePadding", ""]], inputs: { level: ["cdkTreeNodePadding", "level"], indent: ["cdkTreeNodePaddingIndent", "indent"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNodePadding, [{
        type: Directive,
        args: [{
                selector: '[cdkTreeNodePadding]'
            }]
    }], function () { return [{ type: CdkTreeNode }, { type: CdkTree }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { level: [{
            type: Input,
            args: ['cdkTreeNodePadding']
        }], indent: [{
            type: Input,
            args: ['cdkTreeNodePaddingIndent']
        }] }); })();
    return CdkTreeNodePadding;
}());
export { CdkTreeNodePadding };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL3BhZGRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0JBQW9CLEVBQWMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QyxxREFBcUQ7OztBQUNyRCxJQUFNLGNBQWMsR0FBRyxlQUFlLENBQUM7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBR0UsSUE0Q0EsNEJBQW9CLFNBQXlCLEVBQ3pCLEtBQWlCLEVBQ2pCLFNBQW9CLEVBQ3BCLFFBQWlDLEVBQ3JCLElBQW9CO0FBQ3RELFFBTEUsaUJBY0M7QUFDSCxRQWZzQixjQUFTLEdBQVQsU0FBUyxDQUFnQjtBQUFDLFFBQzFCLFVBQUssR0FBTCxLQUFLLENBQVk7QUFBQyxRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO0FBQUMsUUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7QUFBQyxRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFnQjtBQUFDLFFBNUNyRCxnRUFBZ0U7QUFDbEUsUUFBVSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUMzQyxRQUNFLGdEQUFnRDtBQUNsRCxRQUFFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3JC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LERBWGtCLGdCQUh3QyxTQUFTO0FBQUksZ0JBQXJELFVBQVU7QUFBSSxnQkFGekIsY0FBYyx1QkFpRVAsUUFBUTtBQUFNO0FBQVU7QUFDaEIsd0JBdENwQixLQUFLLFNBQUMsb0JBQW9CO0FBQ3hCLHlCQWNGLEtBQUssU0FBQywwQkFBMEI7QUFDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQTZEWCx5QkFBQztBQUNBLENBREEsQUEzRkQsSUEyRkM7QUFDRCxTQXpGYSxrQkFBa0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDZGtUcmVlLCBDZGtUcmVlTm9kZX0gZnJvbSAnLi90cmVlJztcblxuLyoqIFJlZ2V4IHVzZWQgdG8gc3BsaXQgYSBzdHJpbmcgb24gaXRzIENTUyB1bml0cy4gKi9cbmNvbnN0IGNzc1VuaXRQYXR0ZXJuID0gLyhbQS1aYS16JV0rKSQvO1xuXG4vKipcbiAqIEluZGVudCBmb3IgdGhlIGNoaWxkcmVuIHRyZWUgZGF0YU5vZGVzLlxuICogVGhpcyBkaXJlY3RpdmUgd2lsbCBhZGQgbGVmdC1wYWRkaW5nIHRvIHRoZSBub2RlIHRvIHNob3cgaGllcmFyY2h5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrVHJlZU5vZGVQYWRkaW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOb2RlUGFkZGluZzxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IHBhZGRpbmcgdmFsdWUgYXBwbGllZCB0byB0aGUgZWxlbWVudC4gVXNlZCB0byBhdm9pZCB1bm5lY2Vzc2FyaWx5IGhpdHRpbmcgdGhlIERPTS4gKi9cbiAgcHJpdmF0ZSBfY3VycmVudFBhZGRpbmc6IHN0cmluZ3xudWxsO1xuXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogQ1NTIHVuaXRzIHVzZWQgZm9yIHRoZSBpbmRlbnRhdGlvbiB2YWx1ZS4gKi9cbiAgaW5kZW50VW5pdHMgPSAncHgnO1xuXG4gIC8qKiBUaGUgbGV2ZWwgb2YgZGVwdGggb2YgdGhlIHRyZWUgbm9kZS4gVGhlIHBhZGRpbmcgd2lsbCBiZSBgbGV2ZWwgKiBpbmRlbnRgIHBpeGVscy4gKi9cbiAgQElucHV0KCdjZGtUcmVlTm9kZVBhZGRpbmcnKVxuICBnZXQgbGV2ZWwoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9XG4gIHNldCBsZXZlbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgLy8gU2V0IHRvIG51bGwgYXMgdGhlIGZhbGxiYWNrIHZhbHVlIHNvIHRoYXQgX3NldFBhZGRpbmcgY2FuIGZhbGwgYmFjayB0byB0aGUgbm9kZSBsZXZlbCBpZiB0aGVcbiAgICAvLyBjb25zdW1lciBzZXQgdGhlIGRpcmVjdGl2ZSBhcyBgY2RrVHJlZU5vZGVQYWRkaW5nPVwiXCJgLiBXZSBzdGlsbCB3YW50IHRvIHRha2UgdGhpcyB2YWx1ZSBpZlxuICAgIC8vIHRoZXkgc2V0IDAgZXhwbGljaXRseS5cbiAgICB0aGlzLl9sZXZlbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCBudWxsKSE7XG4gICAgdGhpcy5fc2V0UGFkZGluZygpO1xuICB9XG4gIF9sZXZlbDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZW50IGZvciBlYWNoIGxldmVsLiBDYW4gYmUgYSBudW1iZXIgb3IgYSBDU1Mgc3RyaW5nLlxuICAgKiBEZWZhdWx0IG51bWJlciA0MHB4IGZyb20gbWF0ZXJpYWwgZGVzaWduIG1lbnUgc3ViLW1lbnUgc3BlYy5cbiAgICovXG4gIEBJbnB1dCgnY2RrVHJlZU5vZGVQYWRkaW5nSW5kZW50JylcbiAgZ2V0IGluZGVudCgpOiBudW1iZXIgfCBzdHJpbmcgeyByZXR1cm4gdGhpcy5faW5kZW50OyB9XG4gIHNldCBpbmRlbnQoaW5kZW50OiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICBsZXQgdmFsdWUgPSBpbmRlbnQ7XG4gICAgbGV0IHVuaXRzID0gJ3B4JztcblxuICAgIGlmICh0eXBlb2YgaW5kZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcGFydHMgPSBpbmRlbnQuc3BsaXQoY3NzVW5pdFBhdHRlcm4pO1xuICAgICAgdmFsdWUgPSBwYXJ0c1swXTtcbiAgICAgIHVuaXRzID0gcGFydHNbMV0gfHwgdW5pdHM7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRlbnRVbml0cyA9IHVuaXRzO1xuICAgIHRoaXMuX2luZGVudCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zZXRQYWRkaW5nKCk7XG4gIH1cbiAgX2luZGVudDogbnVtYmVyID0gNDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJlZU5vZGU6IENka1RyZWVOb2RlPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF90cmVlOiBDZGtUcmVlPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIHRoaXMuX3NldFBhZGRpbmcoKTtcbiAgICBpZiAoX2Rpcikge1xuICAgICAgX2Rpci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3NldFBhZGRpbmcodHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vIEluIEl2eSB0aGUgaW5kZW50YXRpb24gYmluZGluZyBtaWdodCBiZSBzZXQgYmVmb3JlIHRoZSB0cmVlIG5vZGUncyBkYXRhIGhhcyBiZWVuIGFkZGVkLFxuICAgIC8vIHdoaWNoIG1lYW5zIHRoYXQgd2UnbGwgbWlzcyB0aGUgZmlyc3QgcmVuZGVyLiBXZSBoYXZlIHRvIHN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZVxuICAgIC8vIGRhdGEgdG8gZW5zdXJlIHRoYXQgZXZlcnl0aGluZyBpcyB1cCB0byBkYXRlLlxuICAgIF90cmVlTm9kZS5fZGF0YUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3NldFBhZGRpbmcoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIFRoZSBwYWRkaW5nIGluZGVudCB2YWx1ZSBmb3IgdGhlIHRyZWUgbm9kZS4gUmV0dXJucyBhIHN0cmluZyB3aXRoIHB4IG51bWJlcnMgaWYgbm90IG51bGwuICovXG4gIF9wYWRkaW5nSW5kZW50KCk6IHN0cmluZ3xudWxsIHtcbiAgICBjb25zdCBub2RlTGV2ZWwgPSAodGhpcy5fdHJlZU5vZGUuZGF0YSAmJiB0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldExldmVsKVxuICAgICAgPyB0aGlzLl90cmVlLnRyZWVDb250cm9sLmdldExldmVsKHRoaXMuX3RyZWVOb2RlLmRhdGEpXG4gICAgICA6IG51bGw7XG4gICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9sZXZlbCA9PSBudWxsID8gbm9kZUxldmVsIDogdGhpcy5fbGV2ZWw7XG4gICAgcmV0dXJuIHR5cGVvZiBsZXZlbCA9PT0gJ251bWJlcicgPyBgJHtsZXZlbCAqIHRoaXMuX2luZGVudH0ke3RoaXMuaW5kZW50VW5pdHN9YCA6IG51bGw7XG4gIH1cblxuICBfc2V0UGFkZGluZyhmb3JjZUNoYW5nZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcGFkZGluZyA9IHRoaXMuX3BhZGRpbmdJbmRlbnQoKTtcblxuICAgIGlmIChwYWRkaW5nICE9PSB0aGlzLl9jdXJyZW50UGFkZGluZyB8fCBmb3JjZUNoYW5nZSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHBhZGRpbmdQcm9wID0gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcgPyAncGFkZGluZ1JpZ2h0JyA6ICdwYWRkaW5nTGVmdCc7XG4gICAgICBjb25zdCByZXNldFByb3AgPSBwYWRkaW5nUHJvcCA9PT0gJ3BhZGRpbmdMZWZ0JyA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0JztcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsIHBhZGRpbmdQcm9wLCBwYWRkaW5nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsIHJlc2V0UHJvcCwgbnVsbCk7XG4gICAgICB0aGlzLl9jdXJyZW50UGFkZGluZyA9IHBhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xldmVsOiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==