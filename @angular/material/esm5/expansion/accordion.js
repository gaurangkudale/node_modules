/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { Directive, Input, ContentChildren, QueryList } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { HOME, END, hasModifierKey } from '@angular/cdk/keycodes';
import { startWith } from 'rxjs/operators';
import { MAT_ACCORDION } from './accordion-base';
import { MatExpansionPanelHeader } from './expansion-panel-header';
/**
 * Directive for a Material Design Accordion.
 */
import * as ɵngcc0 from '@angular/core';
var MatAccordion = /** @class */ (function (_super) {
    __extends(MatAccordion, _super);
    function MatAccordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Headers belonging to this accordion. */
        _this._ownHeaders = new QueryList();
        _this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        _this.displayMode = 'default';
        /** The position of the expansion indicator. */
        _this.togglePosition = 'after';
        return _this;
    }
    Object.defineProperty(MatAccordion.prototype, "hideToggle", {
        /** Whether the expansion indicator should be hidden. */
        get: function () { return this._hideToggle; },
        set: function (show) { this._hideToggle = coerceBooleanProperty(show); },
        enumerable: true,
        configurable: true
    });
    MatAccordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._headers.changes
            .pipe(startWith(this._headers))
            .subscribe(function (headers) {
            _this._ownHeaders.reset(headers.filter(function (header) { return header.panel.accordion === _this; }));
            _this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap();
    };
    /** Handles keyboard events coming in from the panel headers. */
    MatAccordion.prototype._handleHeaderKeydown = function (event) {
        var keyCode = event.keyCode;
        var manager = this._keyManager;
        if (keyCode === HOME) {
            if (!hasModifierKey(event)) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
        }
        else if (keyCode === END) {
            if (!hasModifierKey(event)) {
                manager.setLastItemActive();
                event.preventDefault();
            }
        }
        else {
            this._keyManager.onKeydown(event);
        }
    };
    MatAccordion.prototype._handleHeaderFocus = function (header) {
        this._keyManager.updateActiveItem(header);
    };
    MatAccordion.propDecorators = {
        _headers: [{ type: ContentChildren, args: [MatExpansionPanelHeader, { descendants: true },] }],
        hideToggle: [{ type: Input }],
        displayMode: [{ type: Input }],
        togglePosition: [{ type: Input }]
    };
MatAccordion.ɵfac = function MatAccordion_Factory(t) { return ɵMatAccordion_BaseFactory(t || MatAccordion); };
MatAccordion.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatAccordion, selectors: [["mat-accordion"]], contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatExpansionPanelHeader, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._headers = _t);
    } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function MatAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-accordion-multi", ctx.multi);
    } }, inputs: { multi: "multi", hideToggle: "hideToggle", displayMode: "displayMode", togglePosition: "togglePosition" }, exportAs: ["matAccordion"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: MAT_ACCORDION,
                useExisting: MatAccordion
            }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatAccordion_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatAccordion);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatAccordion, [{
        type: Directive,
        args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if multiple panel support is enabled.
                    '[class.mat-accordion-multi]': 'this.multi'
                }
            }]
    }], null, { hideToggle: [{
            type: Input
        }], _headers: [{
            type: ContentChildren,
            args: [MatExpansionPanelHeader, { descendants: true }]
        }], displayMode: [{
            type: Input
        }], togglePosition: [{
            type: Input
        }] }); })();
    return MatAccordion;
}(CdkAccordion));
export { MatAccordion };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvZXhwYW5zaW9uL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsYUFBYSxFQUlkLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFakU7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFFWSxJQWFzQixnQ0FBWTtBQUFDLElBZi9DO0FBQ2EsUUFEYixxRUFnRkM7QUFDRCxRQS9ERSwyQ0FBMkM7QUFDN0MsUUFBVSxpQkFBVyxHQUFHLElBQUksU0FBUyxFQUEyQixDQUFDO0FBQ2pFLFFBU1UsaUJBQVcsR0FBWSxLQUFLLENBQUM7QUFDdkMsUUFDRTtBQUNGO0FBQ007QUFDTTtBQUNNO0FBQ007QUFHcEI7QUFBMEIsV0FEekI7QUFDTCxRQUFXLGlCQUFXLEdBQTRCLFNBQVMsQ0FBQztBQUM1RCxRQUNFLCtDQUErQztBQUNqRCxRQUFXLG9CQUFjLEdBQStCLE9BQU8sQ0FBQztBQUNoRTtBQUNxQixJQW9DckIsQ0FBQztB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QjtBQUFDLElBc0NuQixtQkFBQztBQUNBLENBREEsQUFoRkQsQ0Fla0MsWUFBWSxHQWlFN0M7QUFDRCxTQWxFYSxZQUFZO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDZGtBY2NvcmRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuaW1wb3J0IHtGb2N1c0tleU1hbmFnZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7SE9NRSwgRU5ELCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7c3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBNQVRfQUNDT1JESU9OLFxuICBNYXRBY2NvcmRpb25CYXNlLFxuICBNYXRBY2NvcmRpb25EaXNwbGF5TW9kZSxcbiAgTWF0QWNjb3JkaW9uVG9nZ2xlUG9zaXRpb25cbn0gZnJvbSAnLi9hY2NvcmRpb24tYmFzZSc7XG5pbXBvcnQge01hdEV4cGFuc2lvblBhbmVsSGVhZGVyfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXInO1xuXG4vKipcbiAqIERpcmVjdGl2ZSBmb3IgYSBNYXRlcmlhbCBEZXNpZ24gQWNjb3JkaW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICdtYXRBY2NvcmRpb24nLFxuICBpbnB1dHM6IFsnbXVsdGknXSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE1BVF9BQ0NPUkRJT04sXG4gICAgdXNlRXhpc3Rpbmc6IE1hdEFjY29yZGlvblxuICB9XSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbWF0LWFjY29yZGlvbicsXG4gICAgLy8gQ2xhc3MgYmluZGluZyB3aGljaCBpcyBvbmx5IHVzZWQgYnkgdGhlIHRlc3QgaGFybmVzcyBhcyB0aGVyZSBpcyBubyBvdGhlclxuICAgIC8vIHdheSBmb3IgdGhlIGhhcm5lc3MgdG8gZGV0ZWN0IGlmIG11bHRpcGxlIHBhbmVsIHN1cHBvcnQgaXMgZW5hYmxlZC5cbiAgICAnW2NsYXNzLm1hdC1hY2NvcmRpb24tbXVsdGldJzogJ3RoaXMubXVsdGknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdEFjY29yZGlvbiBleHRlbmRzIENka0FjY29yZGlvbiBpbXBsZW1lbnRzIE1hdEFjY29yZGlvbkJhc2UsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBGb2N1c0tleU1hbmFnZXI8TWF0RXhwYW5zaW9uUGFuZWxIZWFkZXI+O1xuXG4gIC8qKiBIZWFkZXJzIGJlbG9uZ2luZyB0byB0aGlzIGFjY29yZGlvbi4gKi9cbiAgcHJpdmF0ZSBfb3duSGVhZGVycyA9IG5ldyBRdWVyeUxpc3Q8TWF0RXhwYW5zaW9uUGFuZWxIZWFkZXI+KCk7XG5cbiAgLyoqIEFsbCBoZWFkZXJzIGluc2lkZSB0aGUgYWNjb3JkaW9uLiBJbmNsdWRlcyBoZWFkZXJzIGluc2lkZSBuZXN0ZWQgYWNjb3JkaW9ucy4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihNYXRFeHBhbnNpb25QYW5lbEhlYWRlciwge2Rlc2NlbmRhbnRzOiB0cnVlfSlcbiAgX2hlYWRlcnM6IFF1ZXJ5TGlzdDxNYXRFeHBhbnNpb25QYW5lbEhlYWRlcj47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGV4cGFuc2lvbiBpbmRpY2F0b3Igc2hvdWxkIGJlIGhpZGRlbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGhpZGVUb2dnbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9oaWRlVG9nZ2xlOyB9XG4gIHNldCBoaWRlVG9nZ2xlKHNob3c6IGJvb2xlYW4pIHsgdGhpcy5faGlkZVRvZ2dsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzaG93KTsgfVxuICBwcml2YXRlIF9oaWRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgbW9kZSB1c2VkIGZvciBhbGwgZXhwYW5zaW9uIHBhbmVscyBpbiB0aGUgYWNjb3JkaW9uLiBDdXJyZW50bHkgdHdvIGRpc3BsYXlcbiAgICogbW9kZXMgZXhpc3Q6XG4gICAqICBkZWZhdWx0IC0gYSBndXR0ZXItbGlrZSBzcGFjaW5nIGlzIHBsYWNlZCBhcm91bmQgYW55IGV4cGFuZGVkIHBhbmVsLCBwbGFjaW5nIHRoZSBleHBhbmRlZFxuICAgKiAgICAgcGFuZWwgYXQgYSBkaWZmZXJlbnQgZWxldmF0aW9uIGZyb20gdGhlIHJlc3Qgb2YgdGhlIGFjY29yZGlvbi5cbiAgICogIGZsYXQgLSBubyBzcGFjaW5nIGlzIHBsYWNlZCBhcm91bmQgZXhwYW5kZWQgcGFuZWxzLCBzaG93aW5nIGFsbCBwYW5lbHMgYXQgdGhlIHNhbWVcbiAgICogICAgIGVsZXZhdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpIGRpc3BsYXlNb2RlOiBNYXRBY2NvcmRpb25EaXNwbGF5TW9kZSA9ICdkZWZhdWx0JztcblxuICAvKiogVGhlIHBvc2l0aW9uIG9mIHRoZSBleHBhbnNpb24gaW5kaWNhdG9yLiAqL1xuICBASW5wdXQoKSB0b2dnbGVQb3NpdGlvbjogTWF0QWNjb3JkaW9uVG9nZ2xlUG9zaXRpb24gPSAnYWZ0ZXInO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9oZWFkZXJzLmNoYW5nZXNcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLl9oZWFkZXJzKSlcbiAgICAgIC5zdWJzY3JpYmUoKGhlYWRlcnM6IFF1ZXJ5TGlzdDxNYXRFeHBhbnNpb25QYW5lbEhlYWRlcj4pID0+IHtcbiAgICAgICAgdGhpcy5fb3duSGVhZGVycy5yZXNldChoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4gaGVhZGVyLnBhbmVsLmFjY29yZGlvbiA9PT0gdGhpcykpO1xuICAgICAgICB0aGlzLl9vd25IZWFkZXJzLm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEZvY3VzS2V5TWFuYWdlcih0aGlzLl9vd25IZWFkZXJzKS53aXRoV3JhcCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMga2V5Ym9hcmQgZXZlbnRzIGNvbWluZyBpbiBmcm9tIHRoZSBwYW5lbCBoZWFkZXJzLiAqL1xuICBfaGFuZGxlSGVhZGVyS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IHtrZXlDb2RlfSA9IGV2ZW50O1xuICAgIGNvbnN0IG1hbmFnZXIgPSB0aGlzLl9rZXlNYW5hZ2VyO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEhPTUUpIHtcbiAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgIG1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTkQpIHtcbiAgICAgIGlmICghaGFzTW9kaWZpZXJLZXkoZXZlbnQpKSB7XG4gICAgICAgIG1hbmFnZXIuc2V0TGFzdEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVIZWFkZXJGb2N1cyhoZWFkZXI6IE1hdEV4cGFuc2lvblBhbmVsSGVhZGVyKSB7XG4gICAgdGhpcy5fa2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKGhlYWRlcik7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZVRvZ2dsZTogQm9vbGVhbklucHV0O1xufVxuIl19