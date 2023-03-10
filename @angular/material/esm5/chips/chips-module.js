/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ENTER } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChip, MatChipAvatar, MatChipRemove, MatChipTrailingIcon } from './chip';
import { MAT_CHIPS_DEFAULT_OPTIONS } from './chip-default-options';
import { MatChipInput } from './chip-input';
import { MatChipList } from './chip-list';
import * as ɵngcc0 from '@angular/core';
var CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
var ɵ0 = {
    separatorKeyCodes: [ENTER]
};
var MatChipsModule = /** @class */ (function () {
    function MatChipsModule() {
    }
MatChipsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatChipsModule });
MatChipsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatChipsModule_Factory(t) { return new (t || MatChipsModule)(); }, providers: [
        ErrorStateMatcher,
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: ɵ0
        }
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatChipsModule, { declarations: [MatChipList,
        MatChip,
        MatChipInput,
        MatChipRemove,
        MatChipAvatar,
        MatChipTrailingIcon], exports: [MatChipList,
        MatChip,
        MatChipInput,
        MatChipRemove,
        MatChipAvatar,
        MatChipTrailingIcon] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatChipsModule, [{
        type: NgModule,
        args: [{
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    ErrorStateMatcher,
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: ɵ0
                    }
                ]
            }]
    }], function () { return []; }, null); })();
    return MatChipsModule;
}());
export { MatChipsModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtbW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDbEYsT0FBTyxFQUFDLHlCQUF5QixFQUF5QixNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFFeEMsSUFBTSxpQkFBaUIsR0FBRztBQUMxQixJQUFFLFdBQVc7QUFDYixJQUFFLE9BQU87QUFDVCxJQUFFLFlBQVk7QUFDZCxJQUFFLGFBQWE7QUFDZixJQUFFLGFBQWE7QUFDZixJQUFFLG1CQUFtQjtBQUNyQixDQUFDLENBQUM7QUFDRixTQVFnQjtBQUNoQixJQUFRLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ2xDLENBQWlDO0FBVGpDO0FBRVEsSUFGUjtBQUNnQixJQVlhLENBQUM7a0RBYjdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsaUJBQWlCLHNCQUMxQixZQUFZLEVBQUUsaUJBQWlCLHNCQUMvQixTQUFTLEVBQUU7UUFDVCxpQkFBaUI7O2NBQ2pCLDhCQUNFO0dBQU8sRUFBRTtLQUF5Qjs7ZUFDbEMsUUFBUSxJQUVtQiwwQkFDNUIsc0JBQ0Ysa0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFDUTtBQUFDLElBQW1CLHFCQUFDO0FBQzdCLENBRDZCLEFBYjlCLElBYThCO0FBQzlCLFNBRGEsY0FBYztBQUMzQjtBQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRDaGlwLCBNYXRDaGlwQXZhdGFyLCBNYXRDaGlwUmVtb3ZlLCBNYXRDaGlwVHJhaWxpbmdJY29ufSBmcm9tICcuL2NoaXAnO1xuaW1wb3J0IHtNQVRfQ0hJUFNfREVGQVVMVF9PUFRJT05TLCBNYXRDaGlwc0RlZmF1bHRPcHRpb25zfSBmcm9tICcuL2NoaXAtZGVmYXVsdC1vcHRpb25zJztcbmltcG9ydCB7TWF0Q2hpcElucHV0fSBmcm9tICcuL2NoaXAtaW5wdXQnO1xuaW1wb3J0IHtNYXRDaGlwTGlzdH0gZnJvbSAnLi9jaGlwLWxpc3QnO1xuXG5jb25zdCBDSElQX0RFQ0xBUkFUSU9OUyA9IFtcbiAgTWF0Q2hpcExpc3QsXG4gIE1hdENoaXAsXG4gIE1hdENoaXBJbnB1dCxcbiAgTWF0Q2hpcFJlbW92ZSxcbiAgTWF0Q2hpcEF2YXRhcixcbiAgTWF0Q2hpcFRyYWlsaW5nSWNvbixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IENISVBfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IENISVBfREVDTEFSQVRJT05TLFxuICBwcm92aWRlcnM6IFtcbiAgICBFcnJvclN0YXRlTWF0Y2hlcixcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfQ0hJUFNfREVGQVVMVF9PUFRJT05TLFxuICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgc2VwYXJhdG9yS2V5Q29kZXM6IFtFTlRFUl1cbiAgICAgIH0gYXMgTWF0Q2hpcHNEZWZhdWx0T3B0aW9uc1xuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDaGlwc01vZHVsZSB7fVxuIl19