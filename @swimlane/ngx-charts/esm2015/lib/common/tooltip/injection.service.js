import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DomPortalHost, ComponentPortal } from '@angular/cdk/portal';
function isViewContainerRef(x) {
    return x.element;
}
/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 */
export class InjectionService {
    constructor(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Sets a default global root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     */
    static setGlobalRootViewContainer(container) {
        InjectionService.globalRootViewContainer = container;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @memberOf InjectionService
     */
    getRootViewContainer() {
        if (this._container)
            return this._container;
        if (InjectionService.globalRootViewContainer)
            return InjectionService.globalRootViewContainer;
        if (this.applicationRef.components.length)
            return this.applicationRef.components[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.');
    }
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     *
     * @memberOf InjectionService
     */
    setRootViewContainer(container) {
        this._container = container;
    }
    /**
     * Gets the html element for a component ref.
     *
     * @param componentRef
     *
     * @memberOf InjectionService
     */
    getComponentRootNode(component) {
        if (isViewContainerRef(component)) {
            return component.element.nativeElement;
        }
        if (component.hostView && component.hostView.rootNodes.length > 0) {
            return component.hostView.rootNodes[0];
        }
        // the top most component root node has no `hostView`
        return component.location.nativeElement;
    }
    /**
     * Gets the root component container html element.
     *
     * @memberOf InjectionService
     */
    getRootViewContainerNode(component) {
        return this.getComponentRootNode(component);
    }
    /**
     * Projects the bindings onto the component
     *
     * @param component
     * @param options
     *
     * @memberOf InjectionService
     */
    projectComponentBindings(component, bindings) {
        if (bindings) {
            if (bindings.inputs !== undefined) {
                const bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
                for (const bindingName of bindingKeys) {
                    component.instance[bindingName] = bindings.inputs[bindingName];
                }
            }
            if (bindings.outputs !== undefined) {
                const eventKeys = Object.getOwnPropertyNames(bindings.outputs);
                for (const eventName of eventKeys) {
                    component.instance[eventName] = bindings.outputs[eventName];
                }
            }
        }
        return component;
    }
    /**
     * Appends a component to a adjacent location
     *
     * @param componentClass
     * @param [options={}]
     * @param [location]
     *
     * @memberOf InjectionService
     */
    appendComponent(componentClass, bindings = {}, location) {
        if (!location)
            location = this.getRootViewContainer();
        const appendLocation = this.getComponentRootNode(location);
        const portalHost = new DomPortalHost(appendLocation, this.componentFactoryResolver, this.applicationRef, this.injector);
        const portal = new ComponentPortal(componentClass);
        const componentRef = portalHost.attach(portal);
        this.projectComponentBindings(componentRef, bindings);
        return componentRef;
    }
}
InjectionService.globalRootViewContainer = null;
InjectionService.decorators = [
    { type: Injectable }
];
InjectionService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3Rvb2x0aXAvaW5qZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFFBQVEsRUFJVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJFLFNBQVMsa0JBQWtCLENBQUMsQ0FBTTtJQUNoQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFlM0IsWUFDVSxjQUE4QixFQUM5Qix3QkFBa0QsRUFDbEQsUUFBa0I7UUFGbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBaEJKOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFNBQTJCO1FBQzNELGdCQUFnQixDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBVUQ7Ozs7T0FJRztJQUNILG9CQUFvQjtRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksZ0JBQWdCLENBQUMsdUJBQXVCO1lBQUUsT0FBTyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztRQUU5RixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBGLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0hBQXdILENBQ3pILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILG9CQUFvQixDQUFDLFNBQTJCO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxvQkFBb0IsQ0FBQyxTQUErQztRQUNsRSxJQUFJLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDeEM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLElBQUssU0FBUyxDQUFDLFFBQWlDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0YsT0FBUSxTQUFTLENBQUMsUUFBaUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1NBQ2pGO1FBRUQscURBQXFEO1FBQ3JELE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3QkFBd0IsQ0FBQyxTQUErQztRQUN0RSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILHdCQUF3QixDQUFDLFNBQTRCLEVBQUUsUUFBYTtRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hFLEtBQUssTUFBTSxXQUFXLElBQUksV0FBVyxFQUFFO29CQUNyQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2hFO2FBQ0Y7WUFFRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUNsQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRCxLQUFLLE1BQU0sU0FBUyxJQUFJLFNBQVMsRUFBRTtvQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO1NBQ0Y7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxlQUFlLENBQUksY0FBdUIsRUFBRSxXQUFnQixFQUFFLEVBQUUsUUFBYztRQUM1RSxJQUFJLENBQUMsUUFBUTtZQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFhLENBQ2xDLGNBQWMsRUFDZCxJQUFJLENBQUMsd0JBQXdCLEVBQzdCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztBQWpJTSx3Q0FBdUIsR0FBcUIsSUFBSSxDQUFDOztZQUZ6RCxVQUFVOzs7WUF0QlQsY0FBYztZQUNkLHdCQUF3QjtZQUd4QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmZ1bmN0aW9uIGlzVmlld0NvbnRhaW5lclJlZih4OiBhbnkpOiB4IGlzIFZpZXdDb250YWluZXJSZWYge1xuICByZXR1cm4geC5lbGVtZW50O1xufVxuXG4vKipcbiAqIEluamVjdGlvbiBzZXJ2aWNlIGlzIGEgaGVscGVyIHRvIGFwcGVuZCBjb21wb25lbnRzXG4gKiBkeW5hbWljYWxseSB0byBhIGtub3duIGxvY2F0aW9uIGluIHRoZSBET00sIG1vc3RcbiAqIG5vdGVhYmx5IGZvciBkaWFsb2dzL3Rvb2x0aXBzIGFwcGVuZGluZyB0byBib2R5LlxuICpcbiAqIEBleHBvcnRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluamVjdGlvblNlcnZpY2Uge1xuICBzdGF0aWMgZ2xvYmFsUm9vdFZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTZXRzIGEgZGVmYXVsdCBnbG9iYWwgcm9vdCB2aWV3IGNvbnRhaW5lci4gVGhpcyBpcyB1c2VmdWwgZm9yXG4gICAqIHRoaW5ncyBsaWtlIG5nVXBncmFkZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIEFwcGxpY2F0aW9uUmVmIHJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJcbiAgICovXG4gIHN0YXRpYyBzZXRHbG9iYWxSb290Vmlld0NvbnRhaW5lcihjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpOiB2b2lkIHtcbiAgICBJbmplY3Rpb25TZXJ2aWNlLmdsb2JhbFJvb3RWaWV3Q29udGFpbmVyID0gY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb290IHZpZXcgY29udGFpbmVyIHRvIGluamVjdCB0aGUgY29tcG9uZW50IHRvLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgKi9cbiAgZ2V0Um9vdFZpZXdDb250YWluZXIoKTogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgIGlmIChJbmplY3Rpb25TZXJ2aWNlLmdsb2JhbFJvb3RWaWV3Q29udGFpbmVyKSByZXR1cm4gSW5qZWN0aW9uU2VydmljZS5nbG9iYWxSb290Vmlld0NvbnRhaW5lcjtcblxuICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uUmVmLmNvbXBvbmVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5hcHBsaWNhdGlvblJlZi5jb21wb25lbnRzWzBdO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1ZpZXcgQ29udGFpbmVyIG5vdCBmb3VuZCEgbmdVcGdyYWRlIG5lZWRzIHRvIG1hbnVhbGx5IHNldCB0aGlzIHZpYSBzZXRSb290Vmlld0NvbnRhaW5lciBvciBzZXRHbG9iYWxSb290Vmlld0NvbnRhaW5lci4nXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGRlZmF1bHQgcm9vdCB2aWV3IGNvbnRhaW5lci4gVGhpcyBpcyB1c2VmdWwgZm9yXG4gICAqIHRoaW5ncyBsaWtlIG5nVXBncmFkZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIEFwcGxpY2F0aW9uUmVmIHJvb3QuXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJcbiAgICpcbiAgICogQG1lbWJlck9mIEluamVjdGlvblNlcnZpY2VcbiAgICovXG4gIHNldFJvb3RWaWV3Q29udGFpbmVyKGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZik6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBodG1sIGVsZW1lbnQgZm9yIGEgY29tcG9uZW50IHJlZi5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudFJlZlxuICAgKlxuICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgKi9cbiAgZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50OiBWaWV3Q29udGFpbmVyUmVmIHwgQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGlzVmlld0NvbnRhaW5lclJlZihjb21wb25lbnQpKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50LmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudC5ob3N0VmlldyAmJiAoY29tcG9uZW50Lmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChjb21wb25lbnQuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyB0aGUgdG9wIG1vc3QgY29tcG9uZW50IHJvb3Qgbm9kZSBoYXMgbm8gYGhvc3RWaWV3YFxuICAgIHJldHVybiBjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb290IGNvbXBvbmVudCBjb250YWluZXIgaHRtbCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgKi9cbiAgZ2V0Um9vdFZpZXdDb250YWluZXJOb2RlKGNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvamVjdHMgdGhlIGJpbmRpbmdzIG9udG8gdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50XG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAqL1xuICBwcm9qZWN0Q29tcG9uZW50QmluZGluZ3MoY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PiwgYmluZGluZ3M6IGFueSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBpZiAoYmluZGluZ3MpIHtcbiAgICAgIGlmIChiaW5kaW5ncy5pbnB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBiaW5kaW5nS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJpbmRpbmdzLmlucHV0cyk7XG4gICAgICAgIGZvciAoY29uc3QgYmluZGluZ05hbWUgb2YgYmluZGluZ0tleXMpIHtcbiAgICAgICAgICBjb21wb25lbnQuaW5zdGFuY2VbYmluZGluZ05hbWVdID0gYmluZGluZ3MuaW5wdXRzW2JpbmRpbmdOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYmluZGluZ3Mub3V0cHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJpbmRpbmdzLm91dHB1dHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudEtleXMpIHtcbiAgICAgICAgICBjb21wb25lbnQuaW5zdGFuY2VbZXZlbnROYW1lXSA9IGJpbmRpbmdzLm91dHB1dHNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGNvbXBvbmVudCB0byBhIGFkamFjZW50IGxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRDbGFzc1xuICAgKiBAcGFyYW0gW29wdGlvbnM9e31dXG4gICAqIEBwYXJhbSBbbG9jYXRpb25dXG4gICAqXG4gICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAqL1xuICBhcHBlbmRDb21wb25lbnQ8VD4oY29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sIGJpbmRpbmdzOiBhbnkgPSB7fSwgbG9jYXRpb24/OiBhbnkpOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgaWYgKCFsb2NhdGlvbikgbG9jYXRpb24gPSB0aGlzLmdldFJvb3RWaWV3Q29udGFpbmVyKCk7XG4gICAgY29uc3QgYXBwZW5kTG9jYXRpb24gPSB0aGlzLmdldENvbXBvbmVudFJvb3ROb2RlKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHBvcnRhbEhvc3QgPSBuZXcgRG9tUG9ydGFsSG9zdChcbiAgICAgIGFwcGVuZExvY2F0aW9uLFxuICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLFxuICAgICAgdGhpcy5pbmplY3RvclxuICAgICk7XG5cbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudENsYXNzKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHBvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCk7XG4gICAgdGhpcy5wcm9qZWN0Q29tcG9uZW50QmluZGluZ3MoY29tcG9uZW50UmVmLCBiaW5kaW5ncyk7XG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgfVxufVxuIl19