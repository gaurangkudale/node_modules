/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '../ripple/index';
import { MatPseudoCheckboxModule } from '../selection/index';
import { MatOption } from './option';
import { MatOptgroup } from './optgroup';
import * as ɵngcc0 from '@angular/core';
var MatOptionModule = /** @class */ (function () {
    function MatOptionModule() {
    }
MatOptionModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatOptionModule });
MatOptionModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatOptionModule_Factory(t) { return new (t || MatOptionModule)(); }, imports: [[MatRippleModule, CommonModule, MatPseudoCheckboxModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatOptionModule, { declarations: function () { return [MatOption, MatOptgroup]; }, imports: function () { return [MatRippleModule, CommonModule, MatPseudoCheckboxModule]; }, exports: function () { return [MatOption, MatOptgroup]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatOptionModule, [{
        type: NgModule,
        args: [{
                imports: [MatRippleModule, CommonModule, MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            }]
    }], function () { return []; }, null); })();
    return MatOptionModule;
}());
export { MatOptionModule };
export * from './option';
export * from './optgroup';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9jb3JlL29wdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7QUFHdkM7QUFDdUMsSUFEdkM7QUFDaUIsSUFJYSxDQUFDO21EQUw5QixRQUFRLFNBQUM7ZUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDLHNCQUNqRSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLHNCQUNqQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3ZDOzs7Ozs7OztnREFDUTtBQUFDLElBQW9CLHNCQUFDO0FBRS9CLENBRitCLEFBTC9CLElBSytCO0FBQy9CLFNBRGEsZUFBZTtBQUc1QixjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFlBQVksQ0FBQztBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJy4uL3JpcHBsZS9pbmRleCc7XG5pbXBvcnQge01hdFBzZXVkb0NoZWNrYm94TW9kdWxlfSBmcm9tICcuLi9zZWxlY3Rpb24vaW5kZXgnO1xuaW1wb3J0IHtNYXRPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7TWF0T3B0Z3JvdXB9IGZyb20gJy4vb3B0Z3JvdXAnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRSaXBwbGVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGVdLFxuICBleHBvcnRzOiBbTWF0T3B0aW9uLCBNYXRPcHRncm91cF0sXG4gIGRlY2xhcmF0aW9uczogW01hdE9wdGlvbiwgTWF0T3B0Z3JvdXBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdE9wdGlvbk1vZHVsZSB7fVxuXG5cbmV4cG9ydCAqIGZyb20gJy4vb3B0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vb3B0Z3JvdXAnO1xuIl19