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
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
var CdkTreeNodeOutlet = /** @class */ (function () {
    function CdkTreeNodeOutlet(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
    /** @nocollapse */
    CdkTreeNodeOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
    ]; };
CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) { return new (t || CdkTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
CdkTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodeOutlet, selectors: [["", "cdkTreeNodeOutlet", ""]] });
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
    return CdkTreeNodeOutlet;
}());
export { CdkTreeNodeOutlet };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RyZWUvb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixjQUFjLEVBQ2QsUUFBUSxFQUNSLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0gsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQUssMkJBQTJCLENBQUMsQ0FBQztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFHRyxJQUNELDJCQUNXLGFBQStCLEVBQ2dCLEtBQVc7QUFBSSxRQUQ5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7QUFBQyxRQUNlLFVBQUssR0FBTCxLQUFLLENBQU07QUFBQyxJQUFFLENBQUMsQUFIbEU7QUFBQzs4QkFIVCxTQUFTLFNBQUMsaERBSVg7UUFIRSxRQUFRLEVBQUUsbEJBS1gsZ0JBcEJDLGdCQUFnQjtHQWVlLGtCQUNoQyxyQkFmQyxnREFtQkssTUFBTSxTQUFDLHlCQUF5QixjQUFHLFFBQVE7QUFBTTs7Ozs7Ozs7Ozs7OztrQ0FBUztBQUFDLElBQ2xFLHdCQUFDO0FBQ0EsQ0FEQSxBQVBELElBT0M7QUFDRCxTQUxhLGlCQUFpQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gcHJvdmlkZSBhIGBDZGtUcmVlTm9kZWAgdG8gaXRzIG91dGxldC5cbiAqIFVzZWQgcHJpbWFyaWx5IHRvIGF2b2lkIGNpcmN1bGFyIGltcG9ydHMuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFID0gbmV3IEluamVjdGlvblRva2VuPHt9PignQ0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERScpO1xuXG4vKipcbiAqIE91dGxldCBmb3IgbmVzdGVkIENka05vZGUuIFB1dCBgW2Nka1RyZWVOb2RlT3V0bGV0XWAgb24gYSB0YWcgdG8gcGxhY2UgY2hpbGRyZW4gZGF0YU5vZGVzXG4gKiBpbnNpZGUgdGhlIG91dGxldC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RyZWVOb2RlT3V0bGV0XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU5vZGVPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgQEluamVjdChDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFKSBAT3B0aW9uYWwoKSBwdWJsaWMgX25vZGU/OiBhbnkpIHt9XG59XG4iXX0=