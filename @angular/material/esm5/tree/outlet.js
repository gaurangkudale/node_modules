/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet } from '@angular/cdk/tree';
import { Directive, Inject, Optional, ViewContainerRef, } from '@angular/core';
/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
import * as ɵngcc0 from '@angular/core';
var MatTreeNodeOutlet = /** @class */ (function () {
    function MatTreeNodeOutlet(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
    /** @nocollapse */
    MatTreeNodeOutlet.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
    ]; };
MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) { return new (t || MatTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
MatTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeOutlet, selectors: [["", "matTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkTreeNodeOutlet,
                useExisting: MatTreeNodeOutlet
            }])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeOutlet, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: CdkTreeNodeOutlet,
                        useExisting: MatTreeNodeOutlet
                    }]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();
    return MatTreeNodeOutlet;
}());
export { MatTreeNodeOutlet };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdHJlZS9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9FLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFDSDtBQUVLLElBTUgsMkJBQ1csYUFBK0IsRUFDZ0IsS0FBVztBQUFJLFFBRDlELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtBQUFDLFFBQ2UsVUFBSyxHQUFMLEtBQUssQ0FBTTtBQUFDLElBQUUsQ0FBQyxBQUhsRTtBQUFDOzhCQVBULFNBQVMsU0FBQyxoREFPc0I7UUFOL0IsUUFBUSxFQUFFLGxCQVFNLGdCQWhCaEIsZ0JBQWdCO0dBUWUsc0JBQy9CLFNBQVMsRUFBRSxDQUFDLDhCQUNWLE9BQU8sRUFBRSxpQkFBaUIsN0ZBVDVCLGdEQWdCSyxNQUFNLFNBQUMseUJBQXlCLGNBQUcsUUFBUTtPQU45QyxQQU1vRDtRQU56QyxFQUFFLGlCQUFpQiwwQkFDL0IsQ0FBQyxrQkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZ0U7QUFBQyxJQUNsRSx3QkFBQztBQUNBLENBREEsQUFYRCxJQVdDO0FBQ0QsU0FMYSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFLCBDZGtUcmVlTm9kZU91dGxldH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPdXRsZXQgZm9yIG5lc3RlZCBDZGtOb2RlLiBQdXQgYFttYXRUcmVlTm9kZU91dGxldF1gIG9uIGEgdGFnIHRvIHBsYWNlIGNoaWxkcmVuIGRhdGFOb2Rlc1xuICogaW5zaWRlIHRoZSBvdXRsZXQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUcmVlTm9kZU91dGxldF0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQ2RrVHJlZU5vZGVPdXRsZXQsXG4gICAgdXNlRXhpc3Rpbmc6IE1hdFRyZWVOb2RlT3V0bGV0XG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRyZWVOb2RlT3V0bGV0IGltcGxlbWVudHMgQ2RrVHJlZU5vZGVPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgQEluamVjdChDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFKSBAT3B0aW9uYWwoKSBwdWJsaWMgX25vZGU/OiBhbnkpIHt9XG59XG4iXX0=