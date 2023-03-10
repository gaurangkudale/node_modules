/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, Directive, Inject, Injector, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
import * as ɵngcc0 from '@angular/core';
var MatMenuContent = /** @class */ (function () {
    function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the menu content has been attached. */
        this._attached = new Subject();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    MatMenuContent.prototype.attach = function (context) {
        if (context === void 0) { context = {}; }
        if (!this._portal) {
            this._portal = new TemplatePortal(this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        var element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
        // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
        // by Angular. This causes the `@ContentChildren` for menu items within the menu to
        // not be updated by Angular. By explicitly marking for check here, we tell Angular that
        // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
        // @breaking-change 9.0.0 Make change detector ref required
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
        this._portal.attach(this._outlet, context);
        this._attached.next();
    };
    /**
     * Detaches the content.
     * @docs-private
     */
    MatMenuContent.prototype.detach = function () {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    };
    MatMenuContent.prototype.ngOnDestroy = function () {
        if (this._outlet) {
            this._outlet.dispose();
        }
    };
    /** @nocollapse */
    MatMenuContent.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
MatMenuContent.ɵfac = function MatMenuContent_Factory(t) { return new (t || MatMenuContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatMenuContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatMenuContent, selectors: [["ng-template", "matMenuContent", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuContent, [{
        type: Directive,
        args: [{
                selector: 'ng-template[matMenuContent]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();
    return MatMenuContent;
}());
export { MatMenuContent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1jb250ZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbWVudS9tZW51LWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFFUixXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFN0I7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDcUMsSUFTbkMsd0JBQ1UsU0FBMkIsRUFDM0IseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLGlCQUFtQyxFQUNqQixTQUFjLEVBQ2hDLGtCQUFzQztBQUFJLFFBTjFDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0FBQUMsUUFDNUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtBQUFDLFFBQ3BELFlBQU8sR0FBUCxPQUFPLENBQWdCO0FBQUMsUUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtBQUFDLFFBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7QUFBQyxRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFLO0FBQUMsUUFDakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtBQUFDLFFBVmpELHFEQUFxRDtBQUN2RCxRQUFFLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ2xDLElBUXFELENBQUM7QUFDdEQsSUFDRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBRSwrQkFBTSxHQUFOLFVBQU8sT0FBaUI7QUFDMUIsUUFEUyx3QkFBQSxFQUFBLFlBQWlCO0FBQzFCLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEYsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUNsRSxJQUFJLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEUsU0FBSztBQUNMLFFBQ0ksSUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUN6RSxRQUNJLDZGQUE2RjtBQUNqRyxRQUFJLDBGQUEwRjtBQUM5RixRQUFJLGtFQUFrRTtBQUN0RSxRQUFJLE9BQU8sQ0FBQyxVQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLFFBQ0ksb0ZBQW9GO0FBQ3hGLFFBQUksb0ZBQW9GO0FBQ3hGLFFBQUksbUZBQW1GO0FBQ3ZGLFFBQUksd0ZBQXdGO0FBQzVGLFFBQUksb0ZBQW9GO0FBQ3hGLFFBQUksMkRBQTJEO0FBQy9ELFFBQUksSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7QUFDakMsWUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0MsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQyxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBRSwrQkFBTSxHQUFOO0FBQ0MsUUFBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQ2pDLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBRUgsSUFBRSxvQ0FBVyxHQUFYO0FBQWMsUUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdCLFNBQUs7QUFDTCxJQUFFLENBQUMsQ0FuRU07QUFBQzsyQkFIVCxTQUFTLFNBQUMsN0NBR3NCO1FBRi9CLFFBQVEsRUFBRSxsQkFJWCxnQkFiQyxXQUFXO2dCQVM0QixrQkFDeEMsbENBVEMsZ0JBTkEsd0JBQXdCO0FBQ3hCLGdCQUhBLGNBQWM7QUFDZCxnQkFJQSxRQUFRO0FBQ1IsZ0JBRUEsZ0JBQWdCO0FBQ2hCLGdEQXNCRyxNQUFNLFNBQUMsUUFBUTtBQUFTLGdCQTlCM0IsaUJBQWlCO0FBQ2xCOzs7Ozs7Ozs7OztzRUFBUztBQUFDLElBb0ZYLHFCQUFDO0FBQ0EsQ0FEQSxBQXZFRCxJQXVFQztBQUNELFNBckVhLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RvbVBvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBNZW51IGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseSBvbmNlIHRoZSBtZW51IGlzIG9wZW5lZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbWF0TWVudUNvbnRlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRNZW51Q29udGVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcbiAgcHJpdmF0ZSBfb3V0bGV0OiBEb21Qb3J0YWxPdXRsZXQ7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG1lbnUgY29udGVudCBoYXMgYmVlbiBhdHRhY2hlZC4gKi9cbiAgX2F0dGFjaGVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY/OiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGNvbnRlbnQgd2l0aCBhIHBhcnRpY3VsYXIgY29udGV4dC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgYXR0YWNoKGNvbnRleHQ6IGFueSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLl9wb3J0YWwpIHtcbiAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl90ZW1wbGF0ZSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5kZXRhY2goKTtcblxuICAgIGlmICghdGhpcy5fb3V0bGV0KSB7XG4gICAgICB0aGlzLl9vdXRsZXQgPSBuZXcgRG9tUG9ydGFsT3V0bGV0KHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl90ZW1wbGF0ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBCZWNhdXNlIHdlIHN1cHBvcnQgb3BlbmluZyB0aGUgc2FtZSBtZW51IGZyb20gZGlmZmVyZW50IHRyaWdnZXJzICh3aGljaCBpbiB0dXJuIGhhdmUgdGhlaXJcbiAgICAvLyBvd24gYE92ZXJsYXlSZWZgIHBhbmVsKSwgd2UgaGF2ZSB0byByZS1pbnNlcnQgdGhlIGhvc3QgZWxlbWVudCBldmVyeSB0aW1lLCBvdGhlcndpc2Ugd2VcbiAgICAvLyByaXNrIGl0IHN0YXlpbmcgYXR0YWNoZWQgdG8gYSBwYW5lIHRoYXQncyBubyBsb25nZXIgaW4gdGhlIERPTS5cbiAgICBlbGVtZW50LnBhcmVudE5vZGUhLmluc2VydEJlZm9yZSh0aGlzLl9vdXRsZXQub3V0bGV0RWxlbWVudCwgZWxlbWVudCk7XG5cbiAgICAvLyBXaGVuIGBNYXRNZW51Q29udGVudGAgaXMgdXNlZCBpbiBhbiBgT25QdXNoYCBjb21wb25lbnQsIHRoZSBpbnNlcnRpb24gb2YgdGhlIG1lbnVcbiAgICAvLyBjb250ZW50IHZpYSBgY3JlYXRlRW1iZWRkZWRWaWV3YCBkb2VzIG5vdCBjYXVzZSB0aGUgY29udGVudCB0byBiZSBzZWVuIGFzIFwiZGlydHlcIlxuICAgIC8vIGJ5IEFuZ3VsYXIuIFRoaXMgY2F1c2VzIHRoZSBgQENvbnRlbnRDaGlsZHJlbmAgZm9yIG1lbnUgaXRlbXMgd2l0aGluIHRoZSBtZW51IHRvXG4gICAgLy8gbm90IGJlIHVwZGF0ZWQgYnkgQW5ndWxhci4gQnkgZXhwbGljaXRseSBtYXJraW5nIGZvciBjaGVjayBoZXJlLCB3ZSB0ZWxsIEFuZ3VsYXIgdGhhdFxuICAgIC8vIGl0IG5lZWRzIHRvIGNoZWNrIGZvciBuZXcgbWVudSBpdGVtcyBhbmQgdXBkYXRlIHRoZSBgQENvbnRlbnRDaGlsZGAgaW4gYE1hdE1lbnVgLlxuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgTWFrZSBjaGFuZ2UgZGV0ZWN0b3IgcmVmIHJlcXVpcmVkXG4gICAgaWYgKHRoaXMuX2NoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3J0YWwuYXR0YWNoKHRoaXMuX291dGxldCwgY29udGV4dCk7XG4gICAgdGhpcy5fYXR0YWNoZWQubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHRoZSBjb250ZW50LlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3BvcnRhbC5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9wb3J0YWwuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX291dGxldCkge1xuICAgICAgdGhpcy5fb3V0bGV0LmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==