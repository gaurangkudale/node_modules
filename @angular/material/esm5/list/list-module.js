/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatLineModule, MatPseudoCheckboxModule, MatRippleModule, } from '@angular/material/core';
import { MatList, MatNavList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListItem, MatListSubheaderCssMatStyler, } from './list';
import { MatListOption, MatSelectionList } from './selection-list';
import { MatDividerModule } from '@angular/material/divider';
import * as ɵngcc0 from '@angular/core';
var MatListModule = /** @class */ (function () {
    function MatListModule() {
    }
MatListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatListModule });
MatListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatListModule_Factory(t) { return new (t || MatListModule)(); }, imports: [[MatLineModule, MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, CommonModule], MatLineModule,
        MatCommonModule,
        MatPseudoCheckboxModule,
        MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatListModule, { declarations: function () { return [MatList,
        MatNavList,
        MatListItem,
        MatListAvatarCssMatStyler,
        MatListIconCssMatStyler,
        MatListSubheaderCssMatStyler,
        MatSelectionList,
        MatListOption]; }, imports: function () { return [MatLineModule, MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, CommonModule]; }, exports: function () { return [MatList,
        MatNavList,
        MatListItem,
        MatListAvatarCssMatStyler,
        MatLineModule,
        MatCommonModule,
        MatListIconCssMatStyler,
        MatListSubheaderCssMatStyler,
        MatPseudoCheckboxModule,
        MatSelectionList,
        MatListOption,
        MatDividerModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatListModule, [{
        type: NgModule,
        args: [{
                imports: [MatLineModule, MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, CommonModule],
                exports: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatLineModule,
                    MatCommonModule,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatPseudoCheckboxModule,
                    MatSelectionList,
                    MatListOption,
                    MatDividerModule
                ],
                declarations: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatSelectionList,
                    MatListOption
                ]
            }]
    }], function () { return []; }, null); })();
    return MatListModule;
}());
export { MatListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9saXN0L2xpc3QtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsZUFBZSxHQUNoQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLDRCQUE0QixHQUM3QixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBRzNEO0FBQ3FDLElBRHJDO0FBQ2UsSUEwQmEsQ0FBQztpREEzQjVCLFFBQVEsU0FBQztpQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLENBQUMsc0JBQ2pHLE9BQU8sRUFBRSwwQkFDUCxPQUFPLDBCQUNQLFVBQVUsMEJBQ1Y7TUFBVztPQUNYLHlCQUF5Qjt5QkFDekI7UUFBYSwwQkFDYixlQUFlLDBCQUNmLHVCQUF1QiwwQkFDdkIsNEJBQTRCOztJQUM1QjtNQUF1QiwwQkFDdkI7YUFBZ0I7TUFDaEIsYUFBYTtPQUNiLGdCQUFnQjttQkFDakIsc0JBQ0QsWUFBWSxFQUFFLDBCQUNaLE9BQU8sMEJBQ1AsVUFBVSwwQkFDVixXQUFXLDBCQUNYOztFQUF5QjtPQUN6Qix1QkFBdUI7cUJBQ3ZCOztDQUE0QiwwQkFDNUI7VUFBZ0IsMEJBQ2hCO1dBQWE7QUFDZCxtQkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFrQixvQkFBQztBQUM1QixDQUQ0QixBQTNCN0IsSUEyQjZCO0FBQzdCLFNBRGEsYUFBYTtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0Q29tbW9uTW9kdWxlLFxuICBNYXRMaW5lTW9kdWxlLFxuICBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7XG4gIE1hdExpc3QsXG4gIE1hdE5hdkxpc3QsXG4gIE1hdExpc3RBdmF0YXJDc3NNYXRTdHlsZXIsXG4gIE1hdExpc3RJY29uQ3NzTWF0U3R5bGVyLFxuICBNYXRMaXN0SXRlbSxcbiAgTWF0TGlzdFN1YmhlYWRlckNzc01hdFN0eWxlcixcbn0gZnJvbSAnLi9saXN0JztcbmltcG9ydCB7TWF0TGlzdE9wdGlvbiwgTWF0U2VsZWN0aW9uTGlzdH0gZnJvbSAnLi9zZWxlY3Rpb24tbGlzdCc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRMaW5lTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGUsIE1hdENvbW1vbk1vZHVsZSwgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRMaXN0LFxuICAgIE1hdE5hdkxpc3QsXG4gICAgTWF0TGlzdEl0ZW0sXG4gICAgTWF0TGlzdEF2YXRhckNzc01hdFN0eWxlcixcbiAgICBNYXRMaW5lTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXRMaXN0SWNvbkNzc01hdFN0eWxlcixcbiAgICBNYXRMaXN0U3ViaGVhZGVyQ3NzTWF0U3R5bGVyLFxuICAgIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICAgIE1hdFNlbGVjdGlvbkxpc3QsXG4gICAgTWF0TGlzdE9wdGlvbixcbiAgICBNYXREaXZpZGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdExpc3QsXG4gICAgTWF0TmF2TGlzdCxcbiAgICBNYXRMaXN0SXRlbSxcbiAgICBNYXRMaXN0QXZhdGFyQ3NzTWF0U3R5bGVyLFxuICAgIE1hdExpc3RJY29uQ3NzTWF0U3R5bGVyLFxuICAgIE1hdExpc3RTdWJoZWFkZXJDc3NNYXRTdHlsZXIsXG4gICAgTWF0U2VsZWN0aW9uTGlzdCxcbiAgICBNYXRMaXN0T3B0aW9uXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdExpc3RNb2R1bGUge31cbiJdfQ==