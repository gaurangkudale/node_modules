/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Inject, InjectionToken, Optional, ViewContainerRef, } from '@angular/core';
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
export const CDK_TREE_NODE_OUTLET_NODE = new InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
export class CdkTreeNodeOutlet {
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) { return new (t || CdkTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
CdkTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodeOutlet, selectors: [["", "cdkTreeNodeOutlet", ""]] });
/** @nocollapse */
CdkTreeNodeOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNodeOutlet, [{
        type: Directive,
        args: [{
                selector: '[cdkTreeNodeOutlet]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkTreeNodeOutlet.prototype.viewContainer;
    /** @type {?} */
    CdkTreeNodeOutlet.prototype._node;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBQ1IsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCO0FBQ0c7QUFDOEQ7QUFDckI7QUFFNUM7QUFDUzs7QUFBVCxNQUFNLE9BQU8seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQUssMkJBQTJCLENBQUM7QUFDNUY7QUFDRztBQUN5RjtBQUN2RTtBQUtyQixNQUFNLE9BQU8saUJBQWlCO0FBQzlCO0FBQVE7QUFDaUI7QUFDckI7QUFBUSxJQUZWLFlBQ1csYUFBK0IsRUFDZ0IsS0FBVztBQUFJLFFBRDlELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtBQUFDLFFBQ2UsVUFBSyxHQUFMLEtBQUssQ0FBTTtBQUFDLElBQUUsQ0FBQztBQUMzRTs2Q0FQQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHFCQUFxQixjQUNoQzsySEFDSTtBQUFDO0FBQW1CO0FBRUwsWUFuQmxCLGdCQUFnQjtBQUNoQiw0Q0FtQkssTUFBTSxTQUFDLHlCQUF5QixjQUFHLFFBQVE7QUFBTTs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQztBQUFhO0FBRXpELElBSFQsMENBQXNDO0FBQUM7QUFDekIsSUFBZCxrQ0FBaUU7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gdXNlZCB0byBwcm92aWRlIGEgYENka1RyZWVOb2RlYCB0byBpdHMgb3V0bGV0LlxuICogVXNlZCBwcmltYXJpbHkgdG8gYXZvaWQgY2lyY3VsYXIgaW1wb3J0cy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IENES19UUkVFX05PREVfT1VUTEVUX05PREUgPSBuZXcgSW5qZWN0aW9uVG9rZW48e30+KCdDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFJyk7XG5cbi8qKlxuICogT3V0bGV0IGZvciBuZXN0ZWQgQ2RrTm9kZS4gUHV0IGBbY2RrVHJlZU5vZGVPdXRsZXRdYCBvbiBhIHRhZyB0byBwbGFjZSBjaGlsZHJlbiBkYXRhTm9kZXNcbiAqIGluc2lkZSB0aGUgb3V0bGV0LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrVHJlZU5vZGVPdXRsZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTm9kZU91dGxldCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBASW5qZWN0KENES19UUkVFX05PREVfT1VUTEVUX05PREUpIEBPcHRpb25hbCgpIHB1YmxpYyBfbm9kZT86IGFueSkge31cbn1cbiJdfQ==