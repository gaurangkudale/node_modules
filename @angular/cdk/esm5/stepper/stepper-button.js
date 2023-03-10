/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, HostListener, Input } from '@angular/core';
import { CdkStepper } from './stepper';
/** Button that moves to the next step in a stepper workflow. */
import * as ɵngcc0 from '@angular/core';
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /** Type of the next button. Defaults to "submit" if not specified. */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    CdkStepperNext.prototype._handleClick = function () {
        this._stepper.next();
    };
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperNext.propDecorators = {
        type: [{ type: Input }],
        _handleClick: [{ type: HostListener, args: ['click',] }]
    };
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperNext.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperNext, [{
        type: Directive,
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: Input
        }], _handleClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
    return CdkStepperNext;
}());
export { CdkStepperNext };
/** Button that moves to the previous step in a stepper workflow. */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /** Type of the previous button. Defaults to "button" if not specified. */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    CdkStepperPrevious.prototype._handleClick = function () {
        this._stepper.previous();
    };
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperPrevious.propDecorators = {
        type: [{ type: Input }],
        _handleClick: [{ type: HostListener, args: ['click',] }]
    };
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperPrevious.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperPrevious, [{
        type: Directive,
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: Input
        }], _handleClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
    return CdkStepperPrevious;
}());
export { CdkStepperPrevious };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwcGVyLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFckMsZ0VBQWdFOztBQUNoRTtBQUNxQyxJQVNuQyx3QkFBbUIsUUFBb0I7QUFBSSxRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFZO0FBQUMsUUFIeEMsc0VBQXNFO0FBQ3hFLFFBQVcsU0FBSSxHQUFXLFFBQVEsQ0FBQztBQUNuQyxJQUM0QyxDQUFDO0FBQzdDLElBQ0Usb0ZBQW9GO0FBQ3RGLElBQUUsb0ZBQW9GO0FBQ3RGLElBQUUsa0NBQWtDO0FBQ3BDLElBQUUsa0ZBQWtGO0FBQ3BGLElBQUUseURBQXlEO0FBQzNELElBQ0UscUNBQVksR0FEWjtBQUFjLFFBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixJQUFFLENBQUMsQ0FkTTtBQUFDOzJCQU5ULFNBQVMsU0FBQyw3Q0FPUjtRQU5ELFFBQVEsRUFBRSxsQkFNa0QsZ0JBVnRELFVBQVU7QUFBRztHQUllLHNCQUNsQyxJQUFJLEVBQUUsL0JBTHVCO21CQU0zQixRQUFRLEVBQUUsN0JBSmdCLHVCQVMzQixLQUFLO0VBTFksdUJBQ2pCLGtCQUNGLDNDQUdZLCtCQVNWLFlBQVksU0FBQyxPQUFPO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBR1gscUJBQUM7QUFFRCxDQUZDLEFBckJELElBcUJDO0FBQ0QsU0FoQmEsY0FBYztBQWlCM0Isb0VBQW9FO0FBQ3BFO0FBQ3lDLElBU3ZDLDRCQUFtQixRQUFvQjtBQUFJLFFBQXhCLGFBQVEsR0FBUixRQUFRLENBQVk7QUFBQyxRQUh4QywwRUFBMEU7QUFDNUUsUUFBVyxTQUFJLEdBQVcsUUFBUSxDQUFDO0FBQ25DLElBQzRDLENBQUM7QUFDN0MsSUFDRSxvRkFBb0Y7QUFDdEYsSUFBRSxvRkFBb0Y7QUFDdEYsSUFBRSxrQ0FBa0M7QUFDcEMsSUFBRSxrRkFBa0Y7QUFDcEYsSUFBRSx5REFBeUQ7QUFDM0QsSUFDRSx5Q0FBWSxHQURaO0FBQWMsUUFFWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQyxDQWRNO0FBQUM7K0JBTlQsU0FBUyxTQUFDLGpEQU1zQjtRQUwvQixRQUFRLEVBQUUsbEJBTWtELGdCQWxDdEQsVUFBVTtBQUFHO09BNEJtQixzQkFDdEMsSUFBSSxFQUFFLG5DQTdCdUI7bUJBOEIzQixRQUFRLEVBQUUsN0JBNUJvQix1QkFpQy9CLEtBQUs7RUFMWSx1QkFDakIsa0JBQ0YsM0NBR1ksK0JBU1YsWUFBWSxTQUFDLE9BQU87QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFNO0FBQUMsSUFHWCx5QkFBQztBQUNBLENBREEsQUFyQkQsSUFxQkM7QUFDRCxTQWhCYSxrQkFBa0I7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJy4vc3RlcHBlcic7XG5cbi8qKiBCdXR0b24gdGhhdCBtb3ZlcyB0byB0aGUgbmV4dCBzdGVwIGluIGEgc3RlcHBlciB3b3JrZmxvdy4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltjZGtTdGVwcGVyTmV4dF0nLFxuICBob3N0OiB7XG4gICAgJ1t0eXBlXSc6ICd0eXBlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwcGVyTmV4dCB7XG4gIC8qKiBUeXBlIG9mIHRoZSBuZXh0IGJ1dHRvbi4gRGVmYXVsdHMgdG8gXCJzdWJtaXRcIiBpZiBub3Qgc3BlY2lmaWVkLiAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnc3VibWl0JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3N0ZXBwZXI6IENka1N0ZXBwZXIpIHt9XG5cbiAgLy8gV2UgaGF2ZSB0byB1c2UgYSBgSG9zdExpc3RlbmVyYCBoZXJlIGluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBJdnkgYW5kIFZpZXdFbmdpbmUuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIGJpbmRpbmdzIHdpbGwgYmUgbWVyZ2VkIHdoZW4gdGhpcyBjbGFzcyBpcyBleHRlbmRlZCwgd2hlcmVhcyBpblxuICAvLyBWaWV3RW5naW5lIHRoZXkncmUgb3ZlcndyaXR0ZW4uXG4gIC8vIFRPRE8oY3Jpc2JldG8pOiB3ZSBtb3ZlIHRoaXMgYmFjayBpbnRvIGBob3N0YCBvbmNlIEl2eSBpcyB0dXJuZWQgb24gYnkgZGVmYXVsdC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuX3N0ZXBwZXIubmV4dCgpO1xuICB9XG59XG5cbi8qKiBCdXR0b24gdGhhdCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bY2RrU3RlcHBlclByZXZpb3VzXScsXG4gIGhvc3Q6IHtcbiAgICAnW3R5cGVdJzogJ3R5cGUnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENka1N0ZXBwZXJQcmV2aW91cyB7XG4gIC8qKiBUeXBlIG9mIHRoZSBwcmV2aW91cyBidXR0b24uIERlZmF1bHRzIHRvIFwiYnV0dG9uXCIgaWYgbm90IHNwZWNpZmllZC4gKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2J1dHRvbic7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9zdGVwcGVyOiBDZGtTdGVwcGVyKSB7fVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLl9zdGVwcGVyLnByZXZpb3VzKCk7XG4gIH1cbn1cbiJdfQ==