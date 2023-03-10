import { Directive, ElementRef, NgModule, } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class ToastContainerDirective {
    constructor(el) {
        this.el = el;
    }
    getContainerElement() {
        return this.el.nativeElement;
    }
}
ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) { return new (t || ToastContainerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ToastContainerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ToastContainerDirective, selectors: [["", "toastContainer", ""]], exportAs: ["toastContainer"] });
ToastContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
export class ToastContainerModule {
}
ToastContainerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastContainerModule });
ToastContainerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastContainerModule_Factory(t) { return new (t || ToastContainerModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastContainerModule, { declarations: [ToastContainerDirective], exports: [ToastContainerDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastContainerModule, [{
        type: NgModule,
        args: [{
                declarations: [ToastContainerDirective],
                exports: [ToastContainerDirective]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3RvYXN0ci90b2FzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDOztBQU12QixNQUFNLE9BQU8sdUJBQXVCO0FBQ3BDLElBQUUsWUFBb0IsRUFBYztBQUFJLFFBQWxCLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxJQUFHLENBQUM7QUFDekMsSUFBRSxtQkFBbUI7QUFBSyxRQUN0QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUNIO21EQVRDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO01BQzNCLDRKQUNJO0FBQUM7QUFDVSxZQVRkLFVBQVU7QUFDWDs7Ozs7OzsyRUFBRTtBQWtCSCxNQUFNLE9BQU8sb0JBQW9CO0FBQUc7Z0RBSm5DLFFBQVEsU0FBQyxrQkFDUjtVQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUMsZUFDbkM7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvYXN0Q29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAndG9hc3RDb250YWluZXInLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJNb2R1bGUge31cbiJdfQ==