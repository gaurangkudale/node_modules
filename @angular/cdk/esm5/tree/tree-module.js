/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkTreeNodeOutlet } from './outlet';
import { CdkTreeNodePadding } from './padding';
import { CdkTreeNodeToggle } from './toggle';
import { CdkTree, CdkTreeNode } from './tree';
import { CdkTreeNodeDef } from './node';
import { CdkNestedTreeNode } from './nested-node';
import * as ɵngcc0 from '@angular/core';
var EXPORTED_DECLARATIONS = [
    CdkNestedTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    CdkTreeNodeToggle,
    CdkTree,
    CdkTreeNode,
    CdkTreeNodeOutlet,
];
var CdkTreeModule = /** @class */ (function () {
    function CdkTreeModule() {
    }
CdkTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkTreeModule });
CdkTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkTreeModule_Factory(t) { return new (t || CdkTreeModule)(); }, providers: [FocusMonitor, CdkTreeNodeDef], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkTreeModule, { declarations: function () { return [CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CdkNestedTreeNode,
        CdkTreeNodeDef,
        CdkTreeNodePadding,
        CdkTreeNodeToggle,
        CdkTree,
        CdkTreeNode,
        CdkTreeNodeOutlet]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [FocusMonitor, CdkTreeNodeDef]
            }]
    }], function () { return []; }, null); })();
    return CdkTreeModule;
}());
export { CdkTreeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS90cmVlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUVoRCxJQUFNLHFCQUFxQixHQUFHO0FBQzlCLElBQUUsaUJBQWlCO0FBQ25CLElBQUUsY0FBYztBQUNoQixJQUFFLGtCQUFrQjtBQUNwQixJQUFFLGlCQUFpQjtBQUNuQixJQUFFLE9BQU87QUFDVCxJQUFFLFdBQVc7QUFDYixJQUFFLGlCQUFpQjtBQUNuQixDQUFDLENBQUM7QUFFRjtBQUVVLElBRlY7QUFDZSxJQUthLENBQUM7aURBTjVCLFFBQVEsU0FBQztpQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsc0JBQzlCLFlBQVksRUFBRSxxQkFBcUIsc0JBQ25DLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUFjLENBQUMsa0JBQzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFrQixvQkFBQztBQUM1QixDQUQ0QixBQU43QixJQU02QjtBQUM3QixTQURhLGFBQWE7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1RyZWVOb2RlT3V0bGV0fSBmcm9tICcuL291dGxldCc7XG5pbXBvcnQge0Nka1RyZWVOb2RlUGFkZGluZ30gZnJvbSAnLi9wYWRkaW5nJztcbmltcG9ydCB7Q2RrVHJlZU5vZGVUb2dnbGV9IGZyb20gJy4vdG9nZ2xlJztcbmltcG9ydCB7Q2RrVHJlZSwgQ2RrVHJlZU5vZGV9IGZyb20gJy4vdHJlZSc7XG5pbXBvcnQge0Nka1RyZWVOb2RlRGVmfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtDZGtOZXN0ZWRUcmVlTm9kZX0gZnJvbSAnLi9uZXN0ZWQtbm9kZSc7XG5cbmNvbnN0IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyA9IFtcbiAgQ2RrTmVzdGVkVHJlZU5vZGUsXG4gIENka1RyZWVOb2RlRGVmLFxuICBDZGtUcmVlTm9kZVBhZGRpbmcsXG4gIENka1RyZWVOb2RlVG9nZ2xlLFxuICBDZGtUcmVlLFxuICBDZGtUcmVlTm9kZSxcbiAgQ2RrVHJlZU5vZGVPdXRsZXQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcbiAgcHJvdmlkZXJzOiBbRm9jdXNNb25pdG9yLCBDZGtUcmVlTm9kZURlZl1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU1vZHVsZSB7fVxuIl19