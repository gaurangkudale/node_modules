/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/portal/portal-directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactoryResolver, Directive, EventEmitter, NgModule, Output, TemplateRef, ViewContainerRef, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BasePortalOutlet, TemplatePortal } from './portal';
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
import * as ɵngcc0 from '@angular/core';
export class CdkPortal extends TemplatePortal {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
CdkPortal.ɵfac = function CdkPortal_Factory(t) { return new (t || CdkPortal)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
CdkPortal.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkPortal, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkPortal.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkPortal, [{
        type: Directive,
        args: [{
                selector: '[cdkPortal]',
                exportAs: 'cdkPortal'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }]; }, null); })();
/**
 * @deprecated Use `CdkPortal` instead.
 * \@breaking-change 9.0.0
 */
export class TemplatePortalDirective extends CdkPortal {
}
TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) { return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective); };
TemplatePortalDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TemplatePortalDirective, selectors: [["", "cdk-portal", ""], ["", "portal", ""]], exportAs: ["cdkPortal"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkPortal,
                useExisting: TemplatePortalDirective
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵTemplatePortalDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(TemplatePortalDirective);
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
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
export class CdkPortalOutlet extends BasePortalOutlet {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _viewContainerRef
     * @param {?=} _document
     */
    constructor(_componentFactoryResolver, _viewContainerRef, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        super();
        this._componentFactoryResolver = _componentFactoryResolver;
        this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        this._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */
        this.attached = new EventEmitter();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */
        this.attachDomPortal = (/**
         * @param {?} portal
         * @return {?}
         */
        (portal) => {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!this._document) {
                throw Error('Cannot attach DOM portal without _document constructor parameter');
            }
            /** @type {?} */
            const element = portal.element;
            if (!element.parentNode) {
                throw Error('DOM portal content must be attached to a parent node.');
            }
            // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.
            /** @type {?} */
            const anchorNode = this._document.createComment('dom-portal');
            portal.setAttachedHost(this);
            element.parentNode.insertBefore(anchorNode, element);
            this._getRootNode().appendChild(element);
            super.setDisposeFn((/**
             * @return {?}
             */
            () => {
                if (anchorNode.parentNode) {
                    (/** @type {?} */ (anchorNode.parentNode)).replaceChild(element, anchorNode);
                }
            }));
        });
        this._document = _document;
    }
    /**
     * Portal associated with the Portal outlet.
     * @return {?}
     */
    get portal() {
        return this._attachedPortal;
    }
    /**
     * @param {?} portal
     * @return {?}
     */
    set portal(portal) {
        // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
        // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
        // and attach a portal programmatically in the parent component. When Angular does the first CD
        // round, it will fire the setter with empty string, causing the user's content to be cleared.
        if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
        }
        if (this.hasAttached()) {
            super.detach();
        }
        if (portal) {
            super.attach(portal);
        }
        this._attachedPortal = portal;
    }
    /**
     * Component or view reference that is attached to the portal.
     * @return {?}
     */
    get attachedRef() {
        return this._attachedRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.dispose();
        this._attachedPortal = null;
        this._attachedRef = null;
    }
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    attachComponentPortal(portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        /** @type {?} */
        const viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        /** @type {?} */
        const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */
        const componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        // If we're using a view container that's different from the injected one (e.g. when the portal
        // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
        // inside of the alternate view container.
        if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(((/** @type {?} */ (ref.hostView))).rootNodes[0]);
        }
        super.setDisposeFn((/**
         * @return {?}
         */
        () => ref.destroy()));
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    }
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        /** @type {?} */
        const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        super.setDisposeFn((/**
         * @return {?}
         */
        () => this._viewContainerRef.clear()));
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    }
    /**
     * Gets the root node of the portal outlet.
     * @private
     * @return {?}
     */
    _getRootNode() {
        /** @type {?} */
        const nativeElement = this._viewContainerRef.element.nativeElement;
        // The directive could be set on a template which will result in a comment
        // node being the root. Use the comment's parent node if that is the case.
        return (/** @type {?} */ ((nativeElement.nodeType === nativeElement.ELEMENT_NODE ?
            nativeElement : (/** @type {?} */ (nativeElement.parentNode)))));
    }
}
CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) { return new (t || CdkPortalOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
CdkPortalOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkPortalOutlet, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkPortalOutlet.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CdkPortalOutlet.propDecorators = {
    attached: [{ type: Output }]
};
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
if (false) {
    /** @type {?} */
    CdkPortalOutlet.ngAcceptInputType_portal;
    /**
     * @type {?}
     * @private
     */
    CdkPortalOutlet.prototype._document;
    /**
     * Whether the portal component is initialized.
     * @type {?}
     * @private
     */
    CdkPortalOutlet.prototype._isInitialized;
    /**
     * Reference to the currently-attached component/view ref.
     * @type {?}
     * @private
     */
    CdkPortalOutlet.prototype._attachedRef;
    /**
     * Emits when a portal is attached to the outlet.
     * @type {?}
     */
    CdkPortalOutlet.prototype.attached;
    /**
     * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
     * \@param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    CdkPortalOutlet.prototype.attachDomPortal;
    /**
     * @type {?}
     * @private
     */
    CdkPortalOutlet.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    CdkPortalOutlet.prototype._viewContainerRef;
}
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * \@breaking-change 9.0.0
 */
export class PortalHostDirective extends CdkPortalOutlet {
}
PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) { return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective); };
PortalHostDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PortalHostDirective, selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]], inputs: { portal: ["cdkPortalHost", "portal"] }, exportAs: ["cdkPortalHost"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: CdkPortalOutlet,
                useExisting: PortalHostDirective
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵPortalHostDirective_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(PortalHostDirective);
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
export class PortalModule {
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
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWRpcmVjdGl2ZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvcG9ydGFsL3BvcnRhbC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsU0FBUyxFQUVULFlBQVksRUFDWixRQUFRLEVBR1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQTJCLGNBQWMsRUFBWSxNQUFNLFVBQVUsQ0FBQztBQUM5RjtBQUVFO0FBQ3FGO0FBQ1E7O0FBTS9GLE1BQU0sT0FBTyxTQUFVLFNBQVEsY0FBYztBQUM3QztBQUFRO0FBQThCO0FBQW1DO0FBQVEsSUFBL0UsWUFBWSxXQUE2QixFQUFFLGdCQUFrQztBQUMvRSxRQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN6QyxJQUFFLENBQUM7QUFDSDtxQ0FSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGFBQWEsa0JBQ3ZCLFFBQVEsRUFBRSxXQUFXLGVBQ3RCOzJLQUNJO0FBQUM7QUFBbUI7QUFDYixZQWpCVixXQUFXO0FBQ1gsWUFBQSxnQkFBZ0I7QUFDakI7Ozs7Ozs7K0dBQUU7QUFBQztBQUFJO0FBRU07QUFBMkI7QUE4QnpDLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxTQUFTO0FBQUc7bURBUnhELFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsd0JBQXdCLGtCQUNsQyxRQUFRLEVBQUU7S0FBVyxrQkFDckIsU0FBUyxFQUFFLENBQUMsMEJBQ1YsT0FBTyxFQUFFLFNBQVMsMEJBQ2xCLFdBQVcsRUFBRSx1QkFBdUIsc0JBQ3JDLENBQUMsY0FDSDs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FB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QStEVCwwQ0F5QkM7QUFDSDtBQUNPO0FBQWlCO0FBQWdCO0FBQVEsSUE5STFDLG9EQUEyRDtBQUFDO0FBQzNEO0FBQWlCO0FBQWdCO0FBQVEsSUFBMUMsNENBQTJDO0FBQUM7QUFFbEQ7QUFBSTtBQUNvQztBQUNyQztBQW1LSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZUFBZTtBQUFHOytDQVQxRCxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtHQUN6QyxRQUFRLEVBQUUsZUFBZSxrQkFDekIsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUMsa0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUNWLE9BQU8sRUFBRSxlQUFlLDBCQUN4QixXQUFXLEVBQUUsbUJBQW1CLHNCQUNqQyxDQUFDLGNBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFPTCxNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQUozQixRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDLGtCQUNuRixZQUFZLEVBQUUsQ0FBQztDQUFTLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixDQUFDLGVBQ3pGOzs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nTW9kdWxlLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Jhc2VQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCwgRG9tUG9ydGFsfSBmcm9tICcuL3BvcnRhbCc7XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUgdmVyc2lvbiBvZiBhIGBUZW1wbGF0ZVBvcnRhbGAuIEJlY2F1c2UgdGhlIGRpcmVjdGl2ZSAqaXMqIGEgVGVtcGxhdGVQb3J0YWwsXG4gKiB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGl0c2VsZiBjYW4gYmUgYXR0YWNoZWQgdG8gYSBob3N0LCBlbmFibGluZyBkZWNsYXJhdGl2ZSB1c2Ugb2YgcG9ydGFscy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1BvcnRhbF0nLFxuICBleHBvcnRBczogJ2Nka1BvcnRhbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcnRhbCBleHRlbmRzIFRlbXBsYXRlUG9ydGFsIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYENka1BvcnRhbGAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nkay1wb3J0YWxdLCBbcG9ydGFsXScsXG4gIGV4cG9ydEFzOiAnY2RrUG9ydGFsJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IENka1BvcnRhbCxcbiAgICB1c2VFeGlzdGluZzogVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmVcbiAgfV1cbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWwge31cblxuLyoqXG4gKiBQb3NzaWJsZSBhdHRhY2hlZCByZWZlcmVuY2VzIHRvIHRoZSBDZGtQb3J0YWxPdXRsZXQuXG4gKi9cbmV4cG9ydCB0eXBlIENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmID0gQ29tcG9uZW50UmVmPGFueT4gfCBFbWJlZGRlZFZpZXdSZWY8YW55PiB8IG51bGw7XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUgdmVyc2lvbiBvZiBhIFBvcnRhbE91dGxldC4gQmVjYXVzZSB0aGUgZGlyZWN0aXZlICppcyogYSBQb3J0YWxPdXRsZXQsIHBvcnRhbHMgY2FuIGJlXG4gKiBkaXJlY3RseSBhdHRhY2hlZCB0byBpdCwgZW5hYmxpbmcgZGVjbGFyYXRpdmUgdXNlLlxuICpcbiAqIFVzYWdlOlxuICogYDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cImdyZWV0aW5nXCI+PC9uZy10ZW1wbGF0ZT5gXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtQb3J0YWxPdXRsZXRdJyxcbiAgZXhwb3J0QXM6ICdjZGtQb3J0YWxPdXRsZXQnLFxuICBpbnB1dHM6IFsncG9ydGFsOiBjZGtQb3J0YWxPdXRsZXQnXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdXRsZXQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHBvcnRhbCBjb21wb25lbnQgaXMgaW5pdGlhbGl6ZWQuICovXG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50bHktYXR0YWNoZWQgY29tcG9uZW50L3ZpZXcgcmVmLiAqL1xuICBwcml2YXRlIF9hdHRhY2hlZFJlZjogQ2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cbiAgICAgIC8qKlxuICAgICAgICogQGRlcHJlY2F0ZWQgYF9kb2N1bWVudGAgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gICAgICAgKi9cbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudD86IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG4gIH1cblxuICAvKiogUG9ydGFsIGFzc29jaWF0ZWQgd2l0aCB0aGUgUG9ydGFsIG91dGxldC4gKi9cbiAgZ2V0IHBvcnRhbCgpOiBQb3J0YWw8YW55PiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZFBvcnRhbDtcbiAgfVxuXG4gIHNldCBwb3J0YWwocG9ydGFsOiBQb3J0YWw8YW55PiB8IG51bGwpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGNhc2VzIHdoZXJlIHRoZSBgcG9ydGFsYCBpcyBzZXQgdG8gYSBmYWxzeSB2YWx1ZSBiZWZvcmUgdGhlIGxpZmVjeWNsZSBob29rcyBoYXZlXG4gICAgLy8gcnVuLiBUaGlzIGhhbmRsZXMgdGhlIGNhc2VzIHdoZXJlIHRoZSB1c2VyIG1pZ2h0IGRvIHNvbWV0aGluZyBsaWtlIGA8ZGl2IGNka1BvcnRhbE91dGxldD5gXG4gICAgLy8gYW5kIGF0dGFjaCBhIHBvcnRhbCBwcm9ncmFtbWF0aWNhbGx5IGluIHRoZSBwYXJlbnQgY29tcG9uZW50LiBXaGVuIEFuZ3VsYXIgZG9lcyB0aGUgZmlyc3QgQ0RcbiAgICAvLyByb3VuZCwgaXQgd2lsbCBmaXJlIHRoZSBzZXR0ZXIgd2l0aCBlbXB0eSBzdHJpbmcsIGNhdXNpbmcgdGhlIHVzZXIncyBjb250ZW50IHRvIGJlIGNsZWFyZWQuXG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSAmJiAhcG9ydGFsICYmICF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgc3VwZXIuZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgaWYgKHBvcnRhbCkge1xuICAgICAgc3VwZXIuYXR0YWNoKHBvcnRhbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gIH1cblxuICAvKiogRW1pdHMgd2hlbiBhIHBvcnRhbCBpcyBhdHRhY2hlZCB0byB0aGUgb3V0bGV0LiAqL1xuICBAT3V0cHV0KCkgYXR0YWNoZWQ6IEV2ZW50RW1pdHRlcjxDZGtQb3J0YWxPdXRsZXRBdHRhY2hlZFJlZj4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxDZGtQb3J0YWxPdXRsZXRBdHRhY2hlZFJlZj4oKTtcblxuICAvKiogQ29tcG9uZW50IG9yIHZpZXcgcmVmZXJlbmNlIHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIHBvcnRhbC4gKi9cbiAgZ2V0IGF0dGFjaGVkUmVmKCk6IENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNoZWRSZWY7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IG51bGw7XG4gICAgdGhpcy5fYXR0YWNoZWRSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIHRoaXMgUG9ydGFsT3V0bGV0IHVzaW5nIHRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBwb3J0YWwgb3V0bGV0LlxuICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgY29tcG9uZW50LlxuICAgKi9cbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBwb3J0YWwuc2V0QXR0YWNoZWRIb3N0KHRoaXMpO1xuXG4gICAgLy8gSWYgdGhlIHBvcnRhbCBzcGVjaWZpZXMgYW4gb3JpZ2luLCB1c2UgdGhhdCBhcyB0aGUgbG9naWNhbCBsb2NhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAgLy8gaW4gdGhlIGFwcGxpY2F0aW9uIHRyZWUuIE90aGVyd2lzZSB1c2UgdGhlIGxvY2F0aW9uIG9mIHRoaXMgUG9ydGFsT3V0bGV0LlxuICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSBwb3J0YWwudmlld0NvbnRhaW5lclJlZiAhPSBudWxsID9cbiAgICAgICAgcG9ydGFsLnZpZXdDb250YWluZXJSZWYgOlxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSBwb3J0YWwuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHx8IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkocG9ydGFsLmNvbXBvbmVudCk7XG4gICAgY29uc3QgcmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnksIHZpZXdDb250YWluZXJSZWYubGVuZ3RoLFxuICAgICAgICBwb3J0YWwuaW5qZWN0b3IgfHwgdmlld0NvbnRhaW5lclJlZi5pbmplY3Rvcik7XG5cbiAgICAvLyBJZiB3ZSdyZSB1c2luZyBhIHZpZXcgY29udGFpbmVyIHRoYXQncyBkaWZmZXJlbnQgZnJvbSB0aGUgaW5qZWN0ZWQgb25lIChlLmcuIHdoZW4gdGhlIHBvcnRhbFxuICAgIC8vIHNwZWNpZmllcyBpdHMgb3duKSB3ZSBuZWVkIHRvIG1vdmUgdGhlIGNvbXBvbmVudCBpbnRvIHRoZSBvdXRsZXQsIG90aGVyd2lzZSBpdCdsbCBiZSByZW5kZXJlZFxuICAgIC8vIGluc2lkZSBvZiB0aGUgYWx0ZXJuYXRlIHZpZXcgY29udGFpbmVyLlxuICAgIGlmICh2aWV3Q29udGFpbmVyUmVmICE9PSB0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLl9nZXRSb290Tm9kZSgpLmFwcGVuZENoaWxkKChyZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0RGlzcG9zZUZuKCgpID0+IHJlZi5kZXN0cm95KCkpO1xuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xuICAgIHRoaXMuX2F0dGFjaGVkUmVmID0gcmVmO1xuICAgIHRoaXMuYXR0YWNoZWQuZW1pdChyZWYpO1xuXG4gICAgcmV0dXJuIHJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggdGhlIGdpdmVuIFRlbXBsYXRlUG9ydGFsIHRvIHRoaXMgUG9ydGFsSG9zdCBhcyBhbiBlbWJlZGRlZCBWaWV3LlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZC5cbiAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIGVtYmVkZGVkIHZpZXcuXG4gICAqL1xuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICBwb3J0YWwuc2V0QXR0YWNoZWRIb3N0KHRoaXMpO1xuICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhwb3J0YWwudGVtcGxhdGVSZWYsIHBvcnRhbC5jb250ZXh0KTtcbiAgICBzdXBlci5zZXREaXNwb3NlRm4oKCkgPT4gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpKTtcblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xuICAgIHRoaXMuX2F0dGFjaGVkUmVmID0gdmlld1JlZjtcbiAgICB0aGlzLmF0dGFjaGVkLmVtaXQodmlld1JlZik7XG5cbiAgICByZXR1cm4gdmlld1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyB0aGUgZ2l2ZW4gRG9tUG9ydGFsIHRvIHRoaXMgUG9ydGFsSG9zdCBieSBtb3ZpbmcgYWxsIG9mIHRoZSBwb3J0YWwgY29udGVudCBpbnRvIGl0LlxuICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZC5cbiAgICogQGRlcHJlY2F0ZWQgVG8gYmUgdHVybmVkIGludG8gYSBtZXRob2QuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBhdHRhY2hEb21Qb3J0YWwgPSAocG9ydGFsOiBEb21Qb3J0YWwpID0+IHtcbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDkuMC4wIFJlbW92ZSBjaGVjayBhbmQgZXJyb3Igb25jZSB0aGVcbiAgICAvLyBgX2RvY3VtZW50YCBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXG4gICAgaWYgKCF0aGlzLl9kb2N1bWVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Nhbm5vdCBhdHRhY2ggRE9NIHBvcnRhbCB3aXRob3V0IF9kb2N1bWVudCBjb25zdHJ1Y3RvciBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gcG9ydGFsLmVsZW1lbnQ7XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHRocm93IEVycm9yKCdET00gcG9ydGFsIGNvbnRlbnQgbXVzdCBiZSBhdHRhY2hlZCB0byBhIHBhcmVudCBub2RlLicpO1xuICAgIH1cblxuICAgIC8vIEFuY2hvciB1c2VkIHRvIHNhdmUgdGhlIGVsZW1lbnQncyBwcmV2aW91cyBwb3NpdGlvbiBzb1xuICAgIC8vIHRoYXQgd2UgY2FuIHJlc3RvcmUgaXQgd2hlbiB0aGUgcG9ydGFsIGlzIGRldGFjaGVkLlxuICAgIGNvbnN0IGFuY2hvck5vZGUgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVDb21tZW50KCdkb20tcG9ydGFsJyk7XG5cbiAgICBwb3J0YWwuc2V0QXR0YWNoZWRIb3N0KHRoaXMpO1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYW5jaG9yTm9kZSwgZWxlbWVudCk7XG4gICAgdGhpcy5fZ2V0Um9vdE5vZGUoKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHN1cGVyLnNldERpc3Bvc2VGbigoKSA9PiB7XG4gICAgICBpZiAoYW5jaG9yTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGFuY2hvck5vZGUucGFyZW50Tm9kZSEucmVwbGFjZUNoaWxkKGVsZW1lbnQsIGFuY2hvck5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgcG9ydGFsIG91dGxldC4gKi9cbiAgcHJpdmF0ZSBfZ2V0Um9vdE5vZGUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IE5vZGUgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIFRoZSBkaXJlY3RpdmUgY291bGQgYmUgc2V0IG9uIGEgdGVtcGxhdGUgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBjb21tZW50XG4gICAgLy8gbm9kZSBiZWluZyB0aGUgcm9vdC4gVXNlIHRoZSBjb21tZW50J3MgcGFyZW50IG5vZGUgaWYgdGhhdCBpcyB0aGUgY2FzZS5cbiAgICByZXR1cm4gKG5hdGl2ZUVsZW1lbnQubm9kZVR5cGUgPT09IG5hdGl2ZUVsZW1lbnQuRUxFTUVOVF9OT0RFID9cbiAgICAgICAgICAgbmF0aXZlRWxlbWVudCA6IG5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSEpIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BvcnRhbDogUG9ydGFsPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkIHwgJyc7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDZGtQb3J0YWxPdXRsZXRgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtQb3J0YWxIb3N0XSwgW3BvcnRhbEhvc3RdJyxcbiAgZXhwb3J0QXM6ICdjZGtQb3J0YWxIb3N0JyxcbiAgaW5wdXRzOiBbJ3BvcnRhbDogY2RrUG9ydGFsSG9zdCddLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQ2RrUG9ydGFsT3V0bGV0LFxuICAgIHVzZUV4aXN0aW5nOiBQb3J0YWxIb3N0RGlyZWN0aXZlXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRhbEhvc3REaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWxPdXRsZXQge31cblxuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQ2RrUG9ydGFsLCBDZGtQb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlLCBQb3J0YWxIb3N0RGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2RrUG9ydGFsLCBDZGtQb3J0YWxPdXRsZXQsIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlLCBQb3J0YWxIb3N0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsTW9kdWxlIHt9XG4iXX0=