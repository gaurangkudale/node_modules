/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
/** Used to generate unique ID for each accordion. */
import * as ɵngcc0 from '@angular/core';
var nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
var CdkAccordion = /** @class */ (function () {
    function CdkAccordion() {
        /** Emits when the state of the accordion changes */
        this._stateChanges = new Subject();
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
        /** A readonly id value to use for unique selection coordination. */
        this.id = "cdk-accordion-" + nextId++;
        this._multi = false;
    }
    Object.defineProperty(CdkAccordion.prototype, "multi", {
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
        get: function () { return this._multi; },
        set: function (multi) { this._multi = coerceBooleanProperty(multi); },
        enumerable: true,
        configurable: true
    });
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    CdkAccordion.prototype.openAll = function () {
        this._openCloseAll(true);
    };
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    CdkAccordion.prototype.closeAll = function () {
        this._openCloseAll(false);
    };
    CdkAccordion.prototype.ngOnChanges = function (changes) {
        this._stateChanges.next(changes);
    };
    CdkAccordion.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    CdkAccordion.prototype._openCloseAll = function (expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    };
    CdkAccordion.propDecorators = {
        multi: [{ type: Input }]
    };
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) { return new (t || CdkAccordion)(); };
CdkAccordion.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkAccordion, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: "multi" }, exportAs: ["cdkAccordion"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAccordion, [{
        type: Directive,
        args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion'
            }]
    }], function () { return []; }, { multi: [{
            type: Input
        }] }); })();
    return CdkAccordion;
}());
export { CdkAccordion };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2FjY29yZGlvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFzQyxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdCLHFEQUFxRDs7QUFDckQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNtQyxJQURuQztBQUNhLFFBSVgsb0RBQW9EO0FBQ3RELFFBQVcsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztBQUN4RCxRQUNFLHVFQUF1RTtBQUN6RSxRQUFXLHlCQUFvQixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO0FBQzNFLFFBQ0Usb0VBQW9FO0FBQ3RFLFFBQVcsT0FBRSxHQUFHLG1CQUFpQixNQUFNLEVBQUksQ0FBQztBQUM1QyxRQUtVLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbEMsSUEwQkEsQ0FBQztBQUNELElBL0JFLHNCQUNJLCtCQUFLO0FBQUksUUFGYiwyRkFBMkY7QUFDN0YsYUFBRSxjQUN1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGFBQUMsVUFBVSxLQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUU7QUFBMEI7QUFFVCxPQUo0QjtBQUM5QyxJQUdFLGdGQUFnRjtBQUNsRixJQUFFLDhCQUFPLEdBQVA7QUFBYyxRQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBRUgsSUFBRSxpRkFBaUY7QUFDbkYsSUFBRSwrQkFBUSxHQUFSO0FBQWMsUUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUVILElBQUUsa0NBQVcsR0FBWCxVQUFZLE9BQXNCO0FBQ3BDLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBRUgsSUFBRSxrQ0FBVyxHQUFYO0FBQWMsUUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUVILElBQVUsb0NBQWEsR0FBckIsVUFBc0IsUUFBaUI7QUFBSSxRQUN6QyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLFNBQUs7QUFDTCxJQUFFLENBQUMsQ0F0Q007QUFBQztZQUpULFNBQVMsU0FBQyw5QkFJbUMsd0JBVzNDLEtBQUs7QUFDUDtZQWZDLFFBQVEsRUFBRSwrQkFBK0Isc0JBQ3pDLFFBQVEsRUFBRTtPQUFjLG1CQUN6Qjs7Ozs7Ozs7O29CQWFNO0FBQUMsSUE2QlIsbUJBQUM7QUFDQSxDQURBLEFBN0NELElBNkNDO0FBQ0QsU0ExQ2EsWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBVc2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRCBmb3IgZWFjaCBhY2NvcmRpb24uICovXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBtYW5hZ2UgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIENka0FjY29yZGlvbkl0ZW0gY2hpbGRyZW4uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1hY2NvcmRpb24sIFtjZGtBY2NvcmRpb25dJyxcbiAgZXhwb3J0QXM6ICdjZGtBY2NvcmRpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBY2NvcmRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGNoYW5nZXMgKi9cbiAgcmVhZG9ubHkgX3N0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRydWUvZmFsc2Ugd2hlbiBvcGVuQWxsL2Nsb3NlQWxsIGlzIHRyaWdnZXJlZC4gKi9cbiAgcmVhZG9ubHkgX29wZW5DbG9zZUFsbEFjdGlvbnM6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIC8qKiBBIHJlYWRvbmx5IGlkIHZhbHVlIHRvIHVzZSBmb3IgdW5pcXVlIHNlbGVjdGlvbiBjb29yZGluYXRpb24uICovXG4gIHJlYWRvbmx5IGlkID0gYGNkay1hY2NvcmRpb24tJHtuZXh0SWQrK31gO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBhY2NvcmRpb24gc2hvdWxkIGFsbG93IG11bHRpcGxlIGV4cGFuZGVkIGFjY29yZGlvbiBpdGVtcyBzaW11bHRhbmVvdXNseS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbXVsdGk7IH1cbiAgc2V0IG11bHRpKG11bHRpOiBib29sZWFuKSB7IHRoaXMuX211bHRpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpKTsgfVxuICBwcml2YXRlIF9tdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBPcGVucyBhbGwgZW5hYmxlZCBhY2NvcmRpb24gaXRlbXMgaW4gYW4gYWNjb3JkaW9uIHdoZXJlIG11bHRpIGlzIGVuYWJsZWQuICovXG4gIG9wZW5BbGwoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKHRydWUpO1xuICB9XG5cbiAgLyoqIENsb3NlcyBhbGwgZW5hYmxlZCBhY2NvcmRpb24gaXRlbXMgaW4gYW4gYWNjb3JkaW9uIHdoZXJlIG11bHRpIGlzIGVuYWJsZWQuICovXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbChmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLm5leHQoY2hhbmdlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbChleHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLm5leHQoZXhwYW5kZWQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tdWx0aTogQm9vbGVhbklucHV0O1xufVxuIl19