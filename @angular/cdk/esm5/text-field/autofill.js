/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform, normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Injectable, NgZone, Output, } from '@angular/core';
import { coerceElement } from '@angular/cdk/coercion';
import { EMPTY, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/** Options to pass to the animationstart listener. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
var listenerOptions = normalizePassiveListenerOptions({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
var AutofillMonitor = /** @class */ (function () {
    function AutofillMonitor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    AutofillMonitor.prototype.monitor = function (elementOrRef) {
        var _this = this;
        if (!this._platform.isBrowser) {
            return EMPTY;
        }
        var element = coerceElement(elementOrRef);
        var info = this._monitoredElements.get(element);
        if (info) {
            return info.subject.asObservable();
        }
        var result = new Subject();
        var cssClass = 'cdk-text-field-autofilled';
        var listener = (function (event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                _this._ngZone.run(function () { return result.next({ target: event.target, isAutofilled: true }); });
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                _this._ngZone.run(function () { return result.next({ target: event.target, isAutofilled: false }); });
            }
        });
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: function () {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result.asObservable();
    };
    AutofillMonitor.prototype.stopMonitoring = function (elementOrRef) {
        var element = coerceElement(elementOrRef);
        var info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    };
    AutofillMonitor.prototype.ngOnDestroy = function () {
        var _this = this;
        this._monitoredElements.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /** @nocollapse */
    AutofillMonitor.ctorParameters = function () { return [
        { type: Platform },
        { type: NgZone }
    ]; };
    AutofillMonitor.ɵprov = i0.ɵɵdefineInjectable({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i0.NgZone)); }, token: AutofillMonitor, providedIn: "root" });
AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) { return new (t || AutofillMonitor)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutofillMonitor, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }, { type: ɵngcc0.NgZone }]; }, null); })();
    return AutofillMonitor;
}());
export { AutofillMonitor };
/** A directive that can be used to monitor the autofill state of an input. */
var CdkAutofill = /** @class */ (function () {
    function CdkAutofill(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /** Emits when the autofill state of the element changes. */
        this.cdkAutofill = new EventEmitter();
    }
    CdkAutofill.prototype.ngOnInit = function () {
        var _this = this;
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(function (event) { return _this.cdkAutofill.emit(event); });
    };
    CdkAutofill.prototype.ngOnDestroy = function () {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    };
    /** @nocollapse */
    CdkAutofill.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AutofillMonitor }
    ]; };
    CdkAutofill.propDecorators = {
        cdkAutofill: [{ type: Output }]
    };
CdkAutofill.ɵfac = function CdkAutofill_Factory(t) { return new (t || CdkAutofill)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(AutofillMonitor)); };
CdkAutofill.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkAutofill, selectors: [["", "cdkAutofill", ""]], outputs: { cdkAutofill: "cdkAutofill" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAutofill, [{
        type: Directive,
        args: [{
                selector: '[cdkAutofill]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: AutofillMonitor }]; }, { cdkAutofill: [{
            type: Output
        }] }); })();
    return CdkAutofill;
}());
export { CdkAutofill };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZpbGwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGV4dC1maWVsZC9hdXRvZmlsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUdOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLEtBQUssRUFBYyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEQ7QUFFbUM7QUFnQm5DLHNEQUFzRDs7O0FBQ3RELElBQU0sZUFBZSxHQUFHLCtCQUErQixDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFHekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDaUIsSUFHZix5QkFBb0IsU0FBbUIsRUFBVSxPQUFlO0FBQUksUUFBaEQsY0FBUyxHQUFULFNBQVMsQ0FBVTtBQUFDLFFBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBRnpELHVCQUFrQixHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO0FBQ3hFLElBQ3FFLENBQUM7QUFDdEUsSUFlRSxpQ0FBTyxHQUFQLFVBQVEsWUFBMkM7QUFBSSxRQUF2RCxpQkEwQ0M7QUFDSCxRQTFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDbkMsWUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsUUFDSSxJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDaEQsUUFBSSxJQUFNLElB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QUUsaUNBQVcsR0FBWDtBQUFjLFFBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0QsSUFBRSxDQUFDLENBZk07QUFBQzt3QkFIVCxTQUFTLFNBQUMsMUNBR3NCO1FBRi9CLFFBQVEsRUFBRSxsQkFHcUIsZ0JBekkvQixVQUFVO0dBc0llLG1CQUMxQix0QkF0SUMsZ0JBNElzQyxlQUFlO0FBQUc7QUFFbkQ7QUFFTiw4QkFQRSxNQUFNO0FBQUk7Ozs7Ozs7Ozs7b0JBQU07QUFBQyxJQWNwQixrQkFBQztBQUNBLENBREEsQUFuQkQsSUFtQkM7QUFDRCxTQWpCYSxXQUFXO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybSwgbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RhYmxlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb2VyY2VFbGVtZW50fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cblxuLyoqIEFuIGV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiBhbiBpbnB1dCBjaGFuZ2VzLiAqL1xuZXhwb3J0IHR5cGUgQXV0b2ZpbGxFdmVudCA9IHtcbiAgLyoqIFRoZSBlbGVtZW50IHdob3NlIGF1dG9maWxsIHN0YXRlIGNoYW5nZXMuICovXG4gIHRhcmdldDogRWxlbWVudDtcbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGF1dG9maWxsZWQuICovXG4gIGlzQXV0b2ZpbGxlZDogYm9vbGVhbjtcbn07XG5cblxuLyoqIFVzZWQgdG8gdHJhY2sgaW5mbyBhYm91dCBjdXJyZW50bHkgbW9uaXRvcmVkIGVsZW1lbnRzLiAqL1xudHlwZSBNb25pdG9yZWRFbGVtZW50SW5mbyA9IHtcbiAgc3ViamVjdDogU3ViamVjdDxBdXRvZmlsbEV2ZW50PjtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG59O1xuXG5cbi8qKiBPcHRpb25zIHRvIHBhc3MgdG8gdGhlIGFuaW1hdGlvbnN0YXJ0IGxpc3RlbmVyLiAqL1xuY29uc3QgbGlzdGVuZXJPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7cGFzc2l2ZTogdHJ1ZX0pO1xuXG5cbi8qKlxuICogQW4gaW5qZWN0YWJsZSBzZXJ2aWNlIHRoYXQgY2FuIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgYW4gaW5wdXQuXG4gKiBCYXNlZCBvbiB0aGUgZm9sbG93aW5nIGJsb2cgcG9zdDpcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEF1dG9maWxsTW9uaXRvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX21vbml0b3JlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNb25pdG9yZWRFbGVtZW50SW5mbz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIC8qKlxuICAgKiBNb25pdG9yIGZvciBjaGFuZ2VzIGluIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZ2l2ZW4gaW5wdXQgZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbW9uaXRvci5cbiAgICogQHJldHVybiBBIHN0cmVhbSBvZiBhdXRvZmlsbCBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgbW9uaXRvcihlbGVtZW50OiBFbGVtZW50KTogT2JzZXJ2YWJsZTxBdXRvZmlsbEV2ZW50PjtcblxuICAvKipcbiAgICogTW9uaXRvciBmb3IgY2hhbmdlcyBpbiB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgdGhlIGdpdmVuIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1vbml0b3IuXG4gICAqIEByZXR1cm4gQSBzdHJlYW0gb2YgYXV0b2ZpbGwgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIG1vbml0b3IoZWxlbWVudDogRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8QXV0b2ZpbGxFdmVudD47XG5cbiAgbW9uaXRvcihlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxBdXRvZmlsbEV2ZW50PiB7XG4gICAgaWYgKCF0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50T3JSZWYpO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLl9tb25pdG9yZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG5cbiAgICBpZiAoaW5mbykge1xuICAgICAgcmV0dXJuIGluZm8uc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU3ViamVjdDxBdXRvZmlsbEV2ZW50PigpO1xuICAgIGNvbnN0IGNzc0NsYXNzID0gJ2Nkay10ZXh0LWZpZWxkLWF1dG9maWxsZWQnO1xuICAgIGNvbnN0IGxpc3RlbmVyID0gKChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgIC8vIEFuaW1hdGlvbiBldmVudHMgZmlyZSBvbiBpbml0aWFsIGVsZW1lbnQgcmVuZGVyLCB3ZSBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBhdXRvZmlsbFxuICAgICAgLy8gQ1NTIGNsYXNzIHRvIG1ha2Ugc3VyZSB0aGlzIGlzIGEgcmVhbCBjaGFuZ2UgaW4gc3RhdGUsIG5vdCBqdXN0IHRoZSBpbml0aWFsIHJlbmRlciBiZWZvcmVcbiAgICAgIC8vIHdlIGZpcmUgb2ZmIGV2ZW50cy5cbiAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSAnY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQnICYmXG4gICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHJlc3VsdC5uZXh0KHt0YXJnZXQ6IGV2ZW50LnRhcmdldCBhcyBFbGVtZW50LCBpc0F1dG9maWxsZWQ6IHRydWV9KSk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09ICdjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQnICYmXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gcmVzdWx0Lm5leHQoe3RhcmdldDogZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQsIGlzQXV0b2ZpbGxlZDogZmFsc2V9KSk7XG4gICAgICB9XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgbGlzdGVuZXIsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbW9uaXRvcmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHtcbiAgICAgIHN1YmplY3Q6IHJlc3VsdCxcbiAgICAgIHVubGlzdGVuOiAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBsaXN0ZW5lciwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBtb25pdG9yaW5nIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZ2l2ZW4gaW5wdXQgZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gc3RvcCBtb25pdG9yaW5nLlxuICAgKi9cbiAgc3RvcE1vbml0b3JpbmcoZWxlbWVudDogRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFN0b3AgbW9uaXRvcmluZyB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgdGhlIGdpdmVuIGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHN0b3AgbW9uaXRvcmluZy5cbiAgICovXG4gIHN0b3BNb25pdG9yaW5nKGVsZW1lbnQ6IEVsZW1lbnRSZWY8RWxlbWVudD4pOiB2b2lkO1xuXG4gIHN0b3BNb25pdG9yaW5nKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50T3JSZWYpO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLl9tb25pdG9yZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG5cbiAgICBpZiAoaW5mbykge1xuICAgICAgaW5mby51bmxpc3RlbigpO1xuICAgICAgaW5mby5zdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZCcpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjZGstdGV4dC1maWVsZC1hdXRvZmlsbGVkJyk7XG4gICAgICB0aGlzLl9tb25pdG9yZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbW9uaXRvcmVkRWxlbWVudHMuZm9yRWFjaCgoX2luZm8sIGVsZW1lbnQpID0+IHRoaXMuc3RvcE1vbml0b3JpbmcoZWxlbWVudCkpO1xuICB9XG59XG5cblxuLyoqIEEgZGlyZWN0aXZlIHRoYXQgY2FuIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgYXV0b2ZpbGwgc3RhdGUgb2YgYW4gaW5wdXQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrQXV0b2ZpbGxdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQXV0b2ZpbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBhdXRvZmlsbCBzdGF0ZSBvZiB0aGUgZWxlbWVudCBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgY2RrQXV0b2ZpbGw6IEV2ZW50RW1pdHRlcjxBdXRvZmlsbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b2ZpbGxFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0b2ZpbGxNb25pdG9yOiBBdXRvZmlsbE1vbml0b3IpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGxNb25pdG9yXG4gICAgICAubW9uaXRvcih0aGlzLl9lbGVtZW50UmVmKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmNka0F1dG9maWxsLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2F1dG9maWxsTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxufVxuIl19