/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, InjectionToken, Inject, Optional, } from '@angular/core';
import { mixinDisabled } from '@angular/material/core';
import { Subject } from 'rxjs';
import { MatTabContent } from './tab-content';
import { MatTabLabel } from './tab-label';
// Boilerplate for applying mixins to MatTab.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';

function MatTab_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var MatTabBase = /** @class */ (function () {
    function MatTabBase() {
    }
    return MatTabBase;
}());
var _MatTabMixinBase = mixinDisabled(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
export var MAT_TAB_GROUP = new InjectionToken('MAT_TAB_GROUP');
var MatTab = /** @class */ (function (_super) {
    __extends(MatTab, _super);
    function MatTab(_viewContainerRef, 
    /**
     * @deprecated `_closestTabGroup` parameter to become required.
     * @breaking-change 10.0.0
     */
    _closestTabGroup) {
        var _this = _super.call(this) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._closestTabGroup = _closestTabGroup;
        /** Plain text label for the tab, used when there is no template label. */
        _this.textLabel = '';
        /** Portal that will be the hosted content of the tab */
        _this._contentPortal = null;
        /** Emits whenever the internal state of the tab changes. */
        _this._stateChanges = new Subject();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        _this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        _this.origin = null;
        /**
         * Whether the tab is currently active.
         */
        _this.isActive = false;
        return _this;
    }
    Object.defineProperty(MatTab.prototype, "templateLabel", {
        /** Content for the tab label given by `<ng-template mat-tab-label>`. */
        get: function () { return this._templateLabel; },
        set: function (value) {
            // Only update the templateLabel via query if there is actually
            // a MatTabLabel found. This works around an issue where a user may have
            // manually set `templateLabel` during creation mode, which would then get clobbered
            // by `undefined` when this query resolves.
            if (value) {
                this._templateLabel = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTab.prototype, "content", {
        /** @docs-private */
        get: function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    MatTab.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
        }
    };
    MatTab.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    MatTab.prototype.ngOnInit = function () {
        this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
    };
    /** @nocollapse */
    MatTab.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_TAB_GROUP,] }] }
    ]; };
    MatTab.propDecorators = {
        templateLabel: [{ type: ContentChild, args: [MatTabLabel,] }],
        _explicitContent: [{ type: ContentChild, args: [MatTabContent, { read: TemplateRef, static: true },] }],
        _implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        textLabel: [{ type: Input, args: ['label',] }],
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: Input, args: ['aria-labelledby',] }]
    };
MatTab.ɵfac = function MatTab_Factory(t) { return new (t || MatTab)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(MAT_TAB_GROUP, 8)); };
MatTab.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTab, selectors: [["mat-tab"]], contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatTabLabel, true);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, MatTabContent, true, TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateLabel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._explicitContent = _t.first);
    } }, viewQuery: function MatTab_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._implicitContent = _t.first);
    } }, inputs: { disabled: "disabled", textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, exportAs: ["matTab"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatTab_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTab, [{
        type: Component,
        args: [{
                selector: 'mat-tab',
                template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
                inputs: ['disabled'],
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matTab'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MAT_TAB_GROUP]
            }] }]; }, { templateLabel: [{
            type: ContentChild,
            args: [MatTabLabel]
        }], _explicitContent: [{
            type: ContentChild,
            args: [MatTabContent, { read: TemplateRef, static: true }]
        }], _implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], textLabel: [{
            type: Input,
            args: ['label']
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: Input,
            args: ['aria-labelledby']
        }] }); })();
    return MatTab;
}(_MatTabMixinBase));
export { MatTab };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdGFicy90YWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNkIsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHeEMsNkNBQTZDO0FBQzdDLG9CQUFvQjs7Ozs7OztBQUNwQjtBQUMwQixJQUQxQjtBQUNJLElBRGMsQ0FBQztBQUNuQixJQURrQixpQkFBQztBQUFELENBQUMsQUFBbkIsSUFBbUI7QUFDbkIsSUFBTSxnQkFBZ0IsR0FDbEIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQU0sZUFBZSxDQUFDLENBQUM7QUFFdEU7QUFFWSxJQU9nQiwwQkFBZ0I7QUFBQyxJQWdFM0MsZ0JBQ1UsaUJBQW1DO0FBQzlDLElBQUc7QUFDSjtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQThDLGdCQUFzQjtBQUNwRSxRQVBFLFlBT0UsaUJBQU8sU0FDUjtBQUNILFFBUlksdUJBQWlC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QUFLLFNBQUMsaUJBQWlCO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQXdEdkMsYUFBQztBQUNBLENBREEsQUFuR0QsQ0FTNEIsZ0JBQWdCLEdBMEYzQztBQUNELFNBM0ZhLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuRGlzYWJsZSwgQ2FuRGlzYWJsZUN0b3IsIG1peGluRGlzYWJsZWR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWF0VGFiQ29udGVudH0gZnJvbSAnLi90YWItY29udGVudCc7XG5pbXBvcnQge01hdFRhYkxhYmVsfSBmcm9tICcuL3RhYi1sYWJlbCc7XG5cblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGlucyB0byBNYXRUYWIuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY2xhc3MgTWF0VGFiQmFzZSB7fVxuY29uc3QgX01hdFRhYk1peGluQmFzZTogQ2FuRGlzYWJsZUN0b3IgJiB0eXBlb2YgTWF0VGFiQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlZChNYXRUYWJCYXNlKTtcblxuLyoqXG4gKiBVc2VkIHRvIHByb3ZpZGUgYSB0YWIgZ3JvdXAgdG8gYSB0YWIgd2l0aG91dCBjYXVzaW5nIGEgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IE1BVF9UQUJfR1JPVVAgPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignTUFUX1RBQl9HUk9VUCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWIuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCddLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWF0VGFiJyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFiIGV4dGVuZHMgX01hdFRhYk1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ2FuRGlzYWJsZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKiogQ29udGVudCBmb3IgdGhlIHRhYiBsYWJlbCBnaXZlbiBieSBgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+YC4gKi9cbiAgQENvbnRlbnRDaGlsZChNYXRUYWJMYWJlbClcbiAgZ2V0IHRlbXBsYXRlTGFiZWwoKTogTWF0VGFiTGFiZWwgeyByZXR1cm4gdGhpcy5fdGVtcGxhdGVMYWJlbDsgfVxuICBzZXQgdGVtcGxhdGVMYWJlbCh2YWx1ZTogTWF0VGFiTGFiZWwpIHtcbiAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgdGVtcGxhdGVMYWJlbCB2aWEgcXVlcnkgaWYgdGhlcmUgaXMgYWN0dWFsbHlcbiAgICAvLyBhIE1hdFRhYkxhYmVsIGZvdW5kLiBUaGlzIHdvcmtzIGFyb3VuZCBhbiBpc3N1ZSB3aGVyZSBhIHVzZXIgbWF5IGhhdmVcbiAgICAvLyBtYW51YWxseSBzZXQgYHRlbXBsYXRlTGFiZWxgIGR1cmluZyBjcmVhdGlvbiBtb2RlLCB3aGljaCB3b3VsZCB0aGVuIGdldCBjbG9iYmVyZWRcbiAgICAvLyBieSBgdW5kZWZpbmVkYCB3aGVuIHRoaXMgcXVlcnkgcmVzb2x2ZXMuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUxhYmVsID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3RlbXBsYXRlTGFiZWw6IE1hdFRhYkxhYmVsO1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBwcm92aWRlZCBpbiB0aGUgdGFiIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHVzZWQgaWYgcHJlc2VudCwgdXNlZCB0byBlbmFibGUgbGF6eS1sb2FkaW5nXG4gICAqL1xuICBAQ29udGVudENoaWxkKE1hdFRhYkNvbnRlbnQsIHtyZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlfSlcbiAgX2V4cGxpY2l0Q29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogVGVtcGxhdGUgaW5zaWRlIHRoZSBNYXRUYWIgdmlldyB0aGF0IGNvbnRhaW5zIGFuIGA8bmctY29udGVudD5gLiAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7c3RhdGljOiB0cnVlfSkgX2ltcGxpY2l0Q29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogUGxhaW4gdGV4dCBsYWJlbCBmb3IgdGhlIHRhYiwgdXNlZCB3aGVuIHRoZXJlIGlzIG5vIHRlbXBsYXRlIGxhYmVsLiAqL1xuICBASW5wdXQoJ2xhYmVsJykgdGV4dExhYmVsOiBzdHJpbmcgPSAnJztcblxuICAvKiogQXJpYSBsYWJlbCBmb3IgdGhlIHRhYi4gKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB0aGF0IHRoZSB0YWIgaXMgbGFiZWxsZWQgYnkuXG4gICAqIFdpbGwgYmUgY2xlYXJlZCBpZiBgYXJpYS1sYWJlbGAgaXMgc2V0IGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqL1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG5cbiAgLyoqIFBvcnRhbCB0aGF0IHdpbGwgYmUgdGhlIGhvc3RlZCBjb250ZW50IG9mIHRoZSB0YWIgKi9cbiAgcHJpdmF0ZSBfY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50UG9ydGFsO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW5ldmVyIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgdGFiIGNoYW5nZXMuICovXG4gIHJlYWRvbmx5IF9zdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVsYXRpdmVseSBpbmRleGVkIHBvc2l0aW9uIHdoZXJlIDAgcmVwcmVzZW50cyB0aGUgY2VudGVyLCBuZWdhdGl2ZSBpcyBsZWZ0LCBhbmQgcG9zaXRpdmVcbiAgICogcmVwcmVzZW50cyB0aGUgcmlnaHQuXG4gICAqL1xuICBwb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHJlbGF0aXZlbHkgaW5kZXggb3JpZ2luIG9mIHRoZSB0YWIgaWYgaXQgd2FzIGNyZWF0ZWQgYW5kIHNlbGVjdGVkIGFmdGVyIHRoZXJlXG4gICAqIHdhcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLiBQcm92aWRlcyBjb250ZXh0IG9mIHdoYXQgcG9zaXRpb24gdGhlIHRhYiBzaG91bGQgb3JpZ2luYXRlIGZyb20uXG4gICAqL1xuICBvcmlnaW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB0YWIgaXMgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBgX2Nsb3Nlc3RUYWJHcm91cGAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX1RBQl9HUk9VUCkgcHVibGljIF9jbG9zZXN0VGFiR3JvdXA/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCd0ZXh0TGFiZWwnKSB8fCBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXNhYmxlZCcpKSB7XG4gICAgICB0aGlzLl9zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChcbiAgICAgICAgdGhpcy5fZXhwbGljaXRDb250ZW50IHx8IHRoaXMuX2ltcGxpY2l0Q29udGVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==