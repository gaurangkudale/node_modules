/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { ComponentFactoryResolver, Directive, EventEmitter, NgModule, Output, TemplateRef, ViewContainerRef, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BasePortalOutlet, TemplatePortal } from './portal';
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
import * as ɵngcc0 from '@angular/core';
var CdkPortal = /** @class */ (function (_super) {
    __extends(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
CdkPortal.ɵfac = function CdkPortal_Factory(t) { return new (t || CdkPortal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
CdkPortal.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkPortal, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkPortal, [{
        type: Directive,
        args: [{
                selector: '[cdkPortal]',
                exportAs: 'cdkPortal'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }]; }, null); })();
    return CdkPortal;
}(TemplatePortal));
export { CdkPortal };
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
var TemplatePortalDirective = /** @class */ (function (_super) {
    __extends(TemplatePortalDirective, _super);
    function TemplatePortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) { return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective); };
TemplatePortalDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TemplatePortalDirective, selectors: [["", "cdk-portal", ""], ["", "portal", ""]], exportAs: ["cdkPortal"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkPortal,
                useExisting: TemplatePortalDirective
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵTemplatePortalDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TemplatePortalDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TemplatePortalDirective, [{
        type: Directive,
        args: [{
                selector: '[cdk-portal], [portal]',
                exportAs: 'cdkPortal',
                providers: [{
                        provide: CdkPortal,
                        useExisting: TemplatePortalDirective
                    }]
            }]
    }], null, null); })();
    return TemplatePortalDirective;
}(CdkPortal));
export { TemplatePortalDirective };
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    __extends(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /** Whether the portal component is initialized. */
        _this._isInitialized = false;
        /** Emits when a portal is attached to the outlet. */
        _this.attached = new EventEmitter();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        _this.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this._document) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            var element = portal.element;
            if (!element.parentNode) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            var anchorNode = _this._document.createComment('dom-portal');
            portal.setAttachedHost(_this);
            element.parentNode.insertBefore(anchorNode, element);
            _this._getRootNode().appendChild(element);
            _super.prototype.setDisposeFn.call(_this, function () {
                if (anchorNode.parentNode) {
                    anchorNode.parentNode.replaceChild(element, anchorNode);
                }
            });
        };
        _this._document = _document;
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: function () {
            return this._attachedPortal;
        },
        set: function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    CdkPortalOutlet.prototype.ngOnInit = function () {
        this._isInitialized = true;
    };
    CdkPortalOutlet.prototype.ngOnDestroy = function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        // If we're using a view container that's different from the injected one (e.g. when the portal
        // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
        // inside of the alternate view container.
        if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
        }
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    /** Gets the root node of the portal outlet. */
    CdkPortalOutlet.prototype._getRootNode = function () {
        var nativeElement = this._viewContainerRef.element.nativeElement;
        // The directive could be set on a template which will result in a comment
        // node being the root. Use the comment's parent node if that is the case.
        return (nativeElement.nodeType === nativeElement.ELEMENT_NODE ?
            nativeElement : nativeElement.parentNode);
    };
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CdkPortalOutlet.propDecorators = {
        attached: [{ type: Output }]
    };
CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) { return new (t || CdkPortalOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
CdkPortalOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkPortalOutlet, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkPortalOutlet, [{
        type: Directive,
        args: [{
                selector: '[cdkPortalOutlet]',
                exportAs: 'cdkPortalOutlet',
                inputs: ['portal: cdkPortalOutlet']
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { attached: [{
            type: Output
        }] }); })();
    return CdkPortalOutlet;
}(BasePortalOutlet));
export { CdkPortalOutlet };
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
var PortalHostDirective = /** @class */ (function (_super) {
    __extends(PortalHostDirective, _super);
    function PortalHostDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) { return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective); };
PortalHostDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PortalHostDirective, selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]], inputs: { portal: ["cdkPortalHost", "portal"] }, exportAs: ["cdkPortalHost"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkPortalOutlet,
                useExisting: PortalHostDirective
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵPortalHostDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(PortalHostDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PortalHostDirective, [{
        type: Directive,
        args: [{
                selector: '[cdkPortalHost], [portalHost]',
                exportAs: 'cdkPortalHost',
                inputs: ['portal: cdkPortalHost'],
                providers: [{
                        provide: CdkPortalOutlet,
                        useExisting: PortalHostDirective
                    }]
            }]
    }], null, null); })();
    return PortalHostDirective;
}(CdkPortalOutlet));
export { PortalHostDirective };
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
PortalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PortalModule });
PortalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PortalModule_Factory(t) { return new (t || PortalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PortalModule, { declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective], exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PortalModule, [{
        type: NgModule,
        args: [{
                exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
            }]
    }], function () { return []; }, null); })();
    return PortalModule;
}());
export { PortalModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvcG9ydGFsL3BvcnRhbC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsU0FBUyxFQUVULFlBQVksRUFDWixRQUFRLEVBR1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQTJCLGNBQWMsRUFBWSxNQUFNLFVBQVUsQ0FBQztBQUc5RjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBRVcsSUFFb0IsNkJBQWM7QUFBQyxJQUM1QyxtQkFBWSxXQUE2QixFQUFFLGdCQUFrQztBQUMvRSxlQUFJLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztBQUl2QyxJQUhDLENBQUMsQUFITTtBQUFDO3NCQUpULFNBQVMsU0FBQyx4Q0FJc0I7UUFIL0IsUUFBUSxFQUFFLGxCQUkyQixnQkFqQnJDLFdBQVc7QUFhWSxzQkFDdkIsUUFBUSxFQUFFLGhDQWJWLGdCQUFBLGdCQUFnQjtRQWFLLFJBWnRCO2lCQWFBOzs7Ozs7OzsrR0FaRDtBQUFDLElBaUJELGdCQUFDO0FBRUQsQ0FGQyxBQVJELENBSStCLGNBQWMsR0FJNUM7QUFDRCxTQUxhLFNBQVM7QUFNdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRWMsSUFNK0IsMkNBQVM7QUFBQyxJQVJ2RDtBQUN3QjtBQUdOLElBSXNDLENBQUM7MkRBUnhELFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUUsd0JBQXdCO0FBQ2xDLFFBQVEsRUFBRSxXQUFXLHNCQUNyQixTQUFTLEVBQUUs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QUFFRCxJQU11QyxDQUFDO3VEQVQxRCxTQUFTLFNBQUMsc0JBQ1QsUUFBUSxFQUFFLCtCQUErQjttQkFDekMsUUFBUSxFQUFFLGVBQWUsc0JBQ3pCLE1BQU0sRUFBRSxDQUFDLHVCQUF1QixDQUFDLHNCQUNqQyxTQUFTLEVBQUUsQ0FBQyw4QkFDVixPQUFPLEVBQUUsZUFBZSw4QkFDeEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNqQyxDQUFDLGtCQUNIOzs7Ozs7Ozs7Ozs7Ozs7MEJBQ1E7QUFBQyxJQUFnRCwwQkFBQztBQUUzRCxDQUYyRCxBQVQzRCxDQVN5QyxlQUFlLEdBQUc7QUFDM0QsU0FEYSxtQkFBbUI7QUFHaEM7QUFDb0MsSUFEcEM7QUFDYyxJQUdhLENBQUM7Z0RBSjNCLFFBQVEsU0FBQztrQkFDUixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDLHNCQUNuRjtLQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDLG1CQUN6Rjs7Ozs7OztnREFDUTtBQUFDLElBQWlCLG1CQUFDO0FBQzNCLENBRDJCLEFBSjVCLElBSTRCO0FBQzVCLFNBRGEsWUFBWTtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdNb2R1bGUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QmFzZVBvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFRlbXBsYXRlUG9ydGFsLCBEb21Qb3J0YWx9IGZyb20gJy4vcG9ydGFsJztcblxuXG4vKipcbiAqIERpcmVjdGl2ZSB2ZXJzaW9uIG9mIGEgYFRlbXBsYXRlUG9ydGFsYC4gQmVjYXVzZSB0aGUgZGlyZWN0aXZlICppcyogYSBUZW1wbGF0ZVBvcnRhbCxcbiAqIHRoZSBkaXJlY3RpdmUgaW5zdGFuY2UgaXRzZWxmIGNhbiBiZSBhdHRhY2hlZCB0byBhIGhvc3QsIGVuYWJsaW5nIGRlY2xhcmF0aXZlIHVzZSBvZiBwb3J0YWxzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrUG9ydGFsXScsXG4gIGV4cG9ydEFzOiAnY2RrUG9ydGFsJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWwge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgQ2RrUG9ydGFsYCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrLXBvcnRhbF0sIFtwb3J0YWxdJyxcbiAgZXhwb3J0QXM6ICdjZGtQb3J0YWwnLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQ2RrUG9ydGFsLFxuICAgIHVzZUV4aXN0aW5nOiBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbCB7fVxuXG4vKipcbiAqIFBvc3NpYmxlIGF0dGFjaGVkIHJlZmVyZW5jZXMgdG8gdGhlIENka1BvcnRhbE91dGxldC5cbiAqL1xuZXhwb3J0IHR5cGUgQ2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWYgPSBDb21wb25lbnRSZWY8YW55PiB8IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbDtcblxuXG4vKipcbiAqIERpcmVjdGl2ZSB2ZXJzaW9uIG9mIGEgUG9ydGFsT3V0bGV0LiBCZWNhdXNlIHRoZSBkaXJlY3RpdmUgKmlzKiBhIFBvcnRhbE91dGxldCwgcG9ydGFscyBjYW4gYmVcbiAqIGRpcmVjdGx5IGF0dGFjaGVkIHRvIGl0LCBlbmFibGluZyBkZWNsYXJhdGl2ZSB1c2UuXG4gKlxuICogVXNhZ2U6XG4gKiBgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiZ3JlZXRpbmdcIj48L25nLXRlbXBsYXRlPmBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1BvcnRhbE91dGxldF0nLFxuICBleHBvcnRBczogJ2Nka1BvcnRhbE91dGxldCcsXG4gIGlucHV0czogWydwb3J0YWw6IGNka1BvcnRhbE91dGxldCddXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcnRhbE91dGxldCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogV2hldGhlciB0aGUgcG9ydGFsIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gKi9cbiAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseS1hdHRhY2hlZCBjb21wb25lbnQvdmlldyByZWYuICovXG4gIHByaXZhdGUgX2F0dGFjaGVkUmVmOiBDZGtQb3J0YWxPdXRsZXRBdHRhY2hlZFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblxuICAgICAgLyoqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBgX2RvY3VtZW50YCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgICAgICAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAgICAgICAqL1xuICAgICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50PzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9kb2N1bWVudCA9IF9kb2N1bWVudDtcbiAgfVxuXG4gIC8qKiBQb3J0YWwgYXNzb2NpYXRlZCB3aXRoIHRoZSBQb3J0YWwgb3V0bGV0LiAqL1xuICBnZXQgcG9ydGFsKCk6IFBvcnRhbDxhbnk+IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkUG9ydGFsO1xuICB9XG5cbiAgc2V0IHBvcnRhbChwb3J0YWw6IFBvcnRhbDxhbnk+IHwgbnVsbCkge1xuICAgIC8vIElnbm9yZSB0aGUgY2FzZXMgd2hlcmUgdGhlIGBwb3J0YWxgIGlzIHNldCB0byBhIGZhbHN5IHZhbHVlIGJlZm9yZSB0aGUgbGlmZWN5Y2xlIGhvb2tzIGhhdmVcbiAgICAvLyBydW4uIFRoaXMgaGFuZGxlcyB0aGUgY2FzZXMgd2hlcmUgdGhlIHVzZXIgbWlnaHQgZG8gc29tZXRoaW5nIGxpa2UgYDxkaXYgY2RrUG9ydGFsT3V0bGV0PmBcbiAgICAvLyBhbmQgYXR0YWNoIGEgcG9ydGFsIHByb2dyYW1tYXRpY2FsbHkgaW4gdGhlIHBhcmVudCBjb21wb25lbnQuIFdoZW4gQW5ndWxhciBkb2VzIHRoZSBmaXJzdCBDRFxuICAgIC8vIHJvdW5kLCBpdCB3aWxsIGZpcmUgdGhlIHNldHRlciB3aXRoIGVtcHR5IHN0cmluZywgY2F1c2luZyB0aGUgdXNlcidzIGNvbnRlbnQgdG8gYmUgY2xlYXJlZC5cbiAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpICYmICFwb3J0YWwgJiYgIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBzdXBlci5kZXRhY2goKTtcbiAgICB9XG5cbiAgICBpZiAocG9ydGFsKSB7XG4gICAgICBzdXBlci5hdHRhY2gocG9ydGFsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgfVxuXG4gIC8qKiBFbWl0cyB3aGVuIGEgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIHRoZSBvdXRsZXQuICovXG4gIEBPdXRwdXQoKSBhdHRhY2hlZDogRXZlbnRFbWl0dGVyPENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmPigpO1xuXG4gIC8qKiBDb21wb25lbnQgb3IgdmlldyByZWZlcmVuY2UgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgcG9ydGFsLiAqL1xuICBnZXQgYXR0YWNoZWRSZWYoKTogQ2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWYge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZFJlZjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gbnVsbDtcbiAgICB0aGlzLl9hdHRhY2hlZFJlZiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gdGhpcyBQb3J0YWxPdXRsZXQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICpcbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHBvcnRhbCBvdXRsZXQuXG4gICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBjb21wb25lbnQuXG4gICAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHBvcnRhbC5zZXRBdHRhY2hlZEhvc3QodGhpcyk7XG5cbiAgICAvLyBJZiB0aGUgcG9ydGFsIHNwZWNpZmllcyBhbiBvcmlnaW4sIHVzZSB0aGF0IGFzIHRoZSBsb2dpY2FsIGxvY2F0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICAvLyBpbiB0aGUgYXBwbGljYXRpb24gdHJlZS4gT3RoZXJ3aXNlIHVzZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBQb3J0YWxPdXRsZXQuXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHBvcnRhbC52aWV3Q29udGFpbmVyUmVmICE9IG51bGwgP1xuICAgICAgICBwb3J0YWwudmlld0NvbnRhaW5lclJlZiA6XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdCByZXNvbHZlciA9IHBvcnRhbC5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfHwgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShwb3J0YWwuY29tcG9uZW50KTtcbiAgICBjb25zdCByZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeSwgdmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgIHBvcnRhbC5pbmplY3RvciB8fCB2aWV3Q29udGFpbmVyUmVmLmluamVjdG9yKTtcblxuICAgIC8vIElmIHdlJ3JlIHVzaW5nIGEgdmlldyBjb250YWluZXIgdGhhdCdzIGRpZmZlcmVudCBmcm9tIHRoZSBpbmplY3RlZCBvbmUgKGUuZy4gd2hlbiB0aGUgcG9ydGFsXG4gICAgLy8gc3BlY2lmaWVzIGl0cyBvd24pIHdlIG5lZWQgdG8gbW92ZSB0aGUgY29tcG9uZW50IGludG8gdGhlIG91dGxldCwgb3RoZXJ3aXNlIGl0J2xsIGJlIHJlbmRlcmVkXG4gICAgLy8gaW5zaWRlIG9mIHRoZSBhbHRlcm5hdGUgdmlldyBjb250YWluZXIuXG4gICAgaWYgKHZpZXdDb250YWluZXJSZWYgIT09IHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuX2dldFJvb3ROb2RlKCkuYXBwZW5kQ2hpbGQoKHJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXREaXNwb3NlRm4oKCkgPT4gcmVmLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgdGhpcy5fYXR0YWNoZWRSZWYgPSByZWY7XG4gICAgdGhpcy5hdHRhY2hlZC5lbWl0KHJlZik7XG5cbiAgICByZXR1cm4gcmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgZ2l2ZW4gVGVtcGxhdGVQb3J0YWwgdG8gdGhpcyBQb3J0YWxIb3N0IGFzIGFuIGVtYmVkZGVkIFZpZXcuXG4gICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkLlxuICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgZW1iZWRkZWQgdmlldy5cbiAgICovXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsPEM+KHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz4pOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xuICAgIHBvcnRhbC5zZXRBdHRhY2hlZEhvc3QodGhpcyk7XG4gICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHBvcnRhbC50ZW1wbGF0ZVJlZiwgcG9ydGFsLmNvbnRleHQpO1xuICAgIHN1cGVyLnNldERpc3Bvc2VGbigoKSA9PiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCkpO1xuXG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgdGhpcy5fYXR0YWNoZWRSZWYgPSB2aWV3UmVmO1xuICAgIHRoaXMuYXR0YWNoZWQuZW1pdCh2aWV3UmVmKTtcblxuICAgIHJldHVybiB2aWV3UmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHRoZSBnaXZlbiBEb21Qb3J0YWwgdG8gdGhpcyBQb3J0YWxIb3N0IGJ5IG1vdmluZyBhbGwgb2YgdGhlIHBvcnRhbCBjb250ZW50IGludG8gaXQuXG4gICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkLlxuICAgKiBAZGVwcmVjYXRlZCBUbyBiZSB0dXJuZWQgaW50byBhIG1ldGhvZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGF0dGFjaERvbVBvcnRhbCA9IChwb3J0YWw6IERvbVBvcnRhbCkgPT4ge1xuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgUmVtb3ZlIGNoZWNrIGFuZCBlcnJvciBvbmNlIHRoZVxuICAgIC8vIGBfZG9jdW1lbnRgIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICBpZiAoIXRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2Fubm90IGF0dGFjaCBET00gcG9ydGFsIHdpdGhvdXQgX2RvY3VtZW50IGNvbnN0cnVjdG9yIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBwb3J0YWwuZWxlbWVudDtcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0RPTSBwb3J0YWwgY29udGVudCBtdXN0IGJlIGF0dGFjaGVkIHRvIGEgcGFyZW50IG5vZGUuJyk7XG4gICAgfVxuXG4gICAgLy8gQW5jaG9yIHVzZWQgdG8gc2F2ZSB0aGUgZWxlbWVudCdzIHByZXZpb3VzIHBvc2l0aW9uIHNvXG4gICAgLy8gdGhhdCB3ZSBjYW4gcmVzdG9yZSBpdCB3aGVuIHRoZSBwb3J0YWwgaXMgZGV0YWNoZWQuXG4gICAgY29uc3QgYW5jaG9yTm9kZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2RvbS1wb3J0YWwnKTtcblxuICAgIHBvcnRhbC5zZXRBdHRhY2hlZEhvc3QodGhpcyk7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhbmNob3JOb2RlLCBlbGVtZW50KTtcbiAgICB0aGlzLl9nZXRSb290Tm9kZSgpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgc3VwZXIuc2V0RGlzcG9zZUZuKCgpID0+IHtcbiAgICAgIGlmIChhbmNob3JOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgYW5jaG9yTm9kZS5wYXJlbnROb2RlIS5yZXBsYWNlQ2hpbGQoZWxlbWVudCwgYW5jaG9yTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcm9vdCBub2RlIG9mIHRoZSBwb3J0YWwgb3V0bGV0LiAqL1xuICBwcml2YXRlIF9nZXRSb290Tm9kZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogTm9kZSA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gVGhlIGRpcmVjdGl2ZSBjb3VsZCBiZSBzZXQgb24gYSB0ZW1wbGF0ZSB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIGNvbW1lbnRcbiAgICAvLyBub2RlIGJlaW5nIHRoZSByb290LiBVc2UgdGhlIGNvbW1lbnQncyBwYXJlbnQgbm9kZSBpZiB0aGF0IGlzIHRoZSBjYXNlLlxuICAgIHJldHVybiAobmF0aXZlRWxlbWVudC5ub2RlVHlwZSA9PT0gbmF0aXZlRWxlbWVudC5FTEVNRU5UX05PREUgP1xuICAgICAgICAgICBuYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudC5wYXJlbnROb2RlISkgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcG9ydGFsOiBQb3J0YWw8YW55PiB8IG51bGwgfCB1bmRlZmluZWQgfCAnJztcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYENka1BvcnRhbE91dGxldGAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1BvcnRhbEhvc3RdLCBbcG9ydGFsSG9zdF0nLFxuICBleHBvcnRBczogJ2Nka1BvcnRhbEhvc3QnLFxuICBpbnB1dHM6IFsncG9ydGFsOiBjZGtQb3J0YWxIb3N0J10sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBDZGtQb3J0YWxPdXRsZXQsXG4gICAgdXNlRXhpc3Rpbmc6IFBvcnRhbEhvc3REaXJlY3RpdmVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCB7fVxuXG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtDZGtQb3J0YWwsIENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUsIFBvcnRhbEhvc3REaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtQb3J0YWwsIENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUsIFBvcnRhbEhvc3REaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBQb3J0YWxNb2R1bGUge31cbiJdfQ==