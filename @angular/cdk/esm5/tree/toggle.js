/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostListener, Input } from '@angular/core';
import { CdkTree, CdkTreeNode } from './tree';
/**
 * Node toggle to expand/collapse the node.
 */
import * as ɵngcc0 from '@angular/core';
var CdkTreeNodeToggle = /** @class */ (function () {
    function CdkTreeNodeToggle(_tree, _treeNode) {
        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
    }
    Object.defineProperty(CdkTreeNodeToggle.prototype, "recursive", {
        /** Whether expand/collapse the node recursively. */
        get: function () { return this._recursive; },
        set: function (value) { this._recursive = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    CdkTreeNodeToggle.prototype._toggle = function (event) {
        this.recursive
            ? this._tree.treeControl.toggleDescendants(this._treeNode.data)
            : this._tree.treeControl.toggle(this._treeNode.data);
        event.stopPropagation();
    };
    /** @nocollapse */
    CdkTreeNodeToggle.ctorParameters = function () { return [
        { type: CdkTree },
        { type: CdkTreeNode }
    ]; };
    CdkTreeNodeToggle.propDecorators = {
        recursive: [{ type: Input, args: ['cdkTreeNodeToggleRecursive',] }],
        _toggle: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) { return new (t || CdkTreeNodeToggle)(ɵngcc0.ɵɵdirectiveInject(CdkTree), ɵngcc0.ɵɵdirectiveInject(CdkTreeNode)); };
CdkTreeNodeToggle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodeToggle, selectors: [["", "cdkTreeNodeToggle", ""]], hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) { return ctx._toggle($event); });
    } }, inputs: { recursive: ["cdkTreeNodeToggleRecursive", "recursive"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNodeToggle, [{
        type: Directive,
        args: [{ selector: '[cdkTreeNodeToggle]' }]
    }], function () { return [{ type: CdkTree }, { type: CdkTreeNode }]; }, { recursive: [{
            type: Input,
            args: ['cdkTreeNodeToggleRecursive']
        }], _toggle: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
    return CdkTreeNodeToggle;
}());
export { CdkTreeNodeToggle };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUM7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDTyxJQU9MLDJCQUFzQixLQUFpQixFQUNqQixTQUF5QjtBQUFJLFFBRDdCLFVBQUssR0FBTCxLQUFLLENBQVk7QUFBQyxRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFnQjtBQUFDLFFBSHRDLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDL0IsSUFFb0QsQ0FBQztBQUNyRCxJQVBFLHNCQUNJLHdDQUFTO0FBQUksUUFGakIsb0RBQW9EO0FBQ3RELGFBQUUsY0FDMkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRCxhQUFDLFVBQWMsS0FBYyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGO0FBQTBCO0FBRU4sT0FKaUM7QUFDdEQsSUFNRSxvRkFBb0Y7QUFDdEYsSUFBRSxvRkFBb0Y7QUFDdEYsSUFBRSxrQ0FBa0M7QUFDcEMsSUFBRSxrRkFBa0Y7QUFDcEYsSUFBRSx5REFBeUQ7QUFDM0QsSUFDRSxtQ0FBTyxHQURQLFVBQ1EsS0FBWTtBQUFJLFFBQ3RCLElBQUksQ0FBQyxTQUFTO0FBQ2xCLFlBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ3JFLFlBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELFFBQ0ksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQyxDQXRCTTtBQUFDOzhCQURULFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSw1REFDVzttQkFEVSxFQUFDLHJCQUd4QyxnQkFSSSxPQUFPO0FBQUksZ0JBQUYsV0FBVztBQUFHO0FBQVU7QUFHVCw0QkFLN0IsS0FBSyxTQUFDLDRCQUE0QjtBQUNoQywwQkFZRixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQy9COzs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBU1gsd0JBQUM7QUFDQSxDQURBLEFBMUJELElBMEJDO0FBQ0QsU0ExQmEsaUJBQWlCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDZGtUcmVlLCBDZGtUcmVlTm9kZX0gZnJvbSAnLi90cmVlJztcblxuLyoqXG4gKiBOb2RlIHRvZ2dsZSB0byBleHBhbmQvY29sbGFwc2UgdGhlIG5vZGUuXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nka1RyZWVOb2RlVG9nZ2xlXSd9KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOb2RlVG9nZ2xlPFQ+IHtcbiAgLyoqIFdoZXRoZXIgZXhwYW5kL2NvbGxhcHNlIHRoZSBub2RlIHJlY3Vyc2l2ZWx5LiAqL1xuICBASW5wdXQoJ2Nka1RyZWVOb2RlVG9nZ2xlUmVjdXJzaXZlJylcbiAgZ2V0IHJlY3Vyc2l2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlY3Vyc2l2ZTsgfVxuICBzZXQgcmVjdXJzaXZlKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX3JlY3Vyc2l2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgcHJvdGVjdGVkIF9yZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3RyZWU6IENka1RyZWU8VD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdHJlZU5vZGU6IENka1RyZWVOb2RlPFQ+KSB7fVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIF90b2dnbGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZWN1cnNpdmVcbiAgICAgID8gdGhpcy5fdHJlZS50cmVlQ29udHJvbC50b2dnbGVEZXNjZW5kYW50cyh0aGlzLl90cmVlTm9kZS5kYXRhKVxuICAgICAgOiB0aGlzLl90cmVlLnRyZWVDb250cm9sLnRvZ2dsZSh0aGlzLl90cmVlTm9kZS5kYXRhKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlY3Vyc2l2ZTogQm9vbGVhbklucHV0O1xufVxuIl19