/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { CdkAutofill } from './autofill';
import { CdkTextareaAutosize } from './autosize';
import * as ɵngcc0 from '@angular/core';
var TextFieldModule = /** @class */ (function () {
    function TextFieldModule() {
    }
TextFieldModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextFieldModule });
TextFieldModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); }, imports: [[PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextFieldModule, { declarations: function () { return [CdkAutofill, CdkTextareaAutosize]; }, imports: function () { return [PlatformModule]; }, exports: function () { return [CdkAutofill, CdkTextareaAutosize]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [CdkAutofill, CdkTextareaAutosize],
                imports: [PlatformModule],
                exports: [CdkAutofill, CdkTextareaAutosize]
            }]
    }], function () { return []; }, null); })();
    return TextFieldModule;
}());
export { TextFieldModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxZQUFZLENBQUM7O0FBRy9DO0FBQ3VDLElBRHZDO0FBQ2lCLElBSWEsQ0FBQzttREFMOUIsUUFBUSxTQUFDO2VBQ1IsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLHNCQUNoRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsc0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRTtNQUFtQixDQUFDLG1CQUM1Qzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFvQixzQkFBQztBQUM5QixDQUQ4QixBQUwvQixJQUsrQjtBQUMvQixTQURhLGVBQWU7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtBdXRvZmlsbH0gZnJvbSAnLi9hdXRvZmlsbCc7XG5pbXBvcnQge0Nka1RleHRhcmVhQXV0b3NpemV9IGZyb20gJy4vYXV0b3NpemUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Nka0F1dG9maWxsLCBDZGtUZXh0YXJlYUF1dG9zaXplXSxcbiAgaW1wb3J0czogW1BsYXRmb3JtTW9kdWxlXSxcbiAgZXhwb3J0czogW0Nka0F1dG9maWxsLCBDZGtUZXh0YXJlYUF1dG9zaXplXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkTW9kdWxlIHt9XG4iXX0=