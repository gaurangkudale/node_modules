/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Output, Directive, EventEmitter, Input, Optional, ChangeDetectorRef, SkipSelf, } from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { CdkAccordion } from './accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subscription } from 'rxjs';
/** Used to generate unique ID for each accordion item. */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/collections';
var nextId = 0;
var ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
var CdkAccordionItem = /** @class */ (function () {
    function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = Subscription.EMPTY;
        /** Event emitted every time the AccordionItem is closed. */
        this.closed = new EventEmitter();
        /** Event emitted every time the AccordionItem is opened. */
        this.opened = new EventEmitter();
        /** Event emitted when the AccordionItem is destroyed. */
        this.destroyed = new EventEmitter();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * @docs-private
         */
        this.expandedChange = new EventEmitter();
        /** The unique AccordionItem id. */
        this.id = "cdk-accordion-child-" + nextId++;
        this._expanded = false;
        this._disabled = false;
        /** Unregister function for _expansionDispatcher. */
        this._removeUniqueSelectionListener = function () { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen(function (id, accordionId) {
                if (_this.accordion && !_this.accordion.multi &&
                    _this.accordion.id === accordionId && _this.id !== id) {
                    _this.expanded = false;
                }
            });
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
        /** Whether the AccordionItem is expanded. */
        get: function () { return this._expanded; },
        set: function (expanded) {
            expanded = coerceBooleanProperty(expanded);
            // Only emit events and update the internal value if the value changes.
            if (this._expanded !== expanded) {
                this._expanded = expanded;
                this.expandedChange.emit(expanded);
                if (expanded) {
                    this.opened.emit();
                    /**
                     * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                     * the name value is the id of the accordion.
                     */
                    var accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
                // Ensures that the animation will run when the value is set outside of an `@Input`.
                // This includes cases like the open, close and toggle methods.
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
        /** Whether the AccordionItem is disabled. */
        get: function () { return this._disabled; },
        set: function (disabled) { this._disabled = coerceBooleanProperty(disabled); },
        enumerable: true,
        configurable: true
    });
    /** Emits an event for the accordion item being destroyed. */
    CdkAccordionItem.prototype.ngOnDestroy = function () {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    };
    /** Toggles the expanded state of the accordion item. */
    CdkAccordionItem.prototype.toggle = function () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    };
    /** Sets the expanded state of the accordion item to false. */
    CdkAccordionItem.prototype.close = function () {
        if (!this.disabled) {
            this.expanded = false;
        }
    };
    /** Sets the expanded state of the accordion item to true. */
    CdkAccordionItem.prototype.open = function () {
        if (!this.disabled) {
            this.expanded = true;
        }
    };
    CdkAccordionItem.prototype._subscribeToOpenCloseAllActions = function () {
        var _this = this;
        return this.accordion._openCloseAllActions.subscribe(function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this.disabled) {
                _this.expanded = expanded;
            }
        });
    };
    /** @nocollapse */
    CdkAccordionItem.ctorParameters = function () { return [
        { type: CdkAccordion, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: ChangeDetectorRef },
        { type: UniqueSelectionDispatcher }
    ]; };
    CdkAccordionItem.propDecorators = {
        closed: [{ type: Output }],
        opened: [{ type: Output }],
        destroyed: [{ type: Output }],
        expandedChange: [{ type: Output }],
        expanded: [{ type: Input }],
        disabled: [{ type: Input }]
    };
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) { return new (t || CdkAccordionItem)(ɵngcc0.ɵɵdirectiveInject(CdkAccordion, 12), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.UniqueSelectionDispatcher)); };
CdkAccordionItem.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkAccordionItem, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: "expanded", disabled: "disabled" }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [ɵngcc0.ɵɵProvidersFeature([
            // Provide CdkAccordion as undefined to prevent nested accordion items from registering
            // to the same accordion.
            { provide: CdkAccordion, useValue: ɵ0 },
        ])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkAccordionItem, [{
        type: Directive,
        args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: CdkAccordion, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.UniqueSelectionDispatcher }]; }, { closed: [{
            type: Output
        }], opened: [{
            type: Output
        }], destroyed: [{
            type: Output
        }], expandedChange: [{
            type: Output
        }], expanded: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
    return CdkAccordionItem;
}());
export { CdkAccordionItem };
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVsQywwREFBMEQ7OztBQUMxRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDZixTQVdzQyxTQUFTO0FBVi9DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUN1QyxJQW1FckMsMEJBQTJDLFNBQXVCLEVBQzlDLGtCQUFxQyxFQUNuQyxvQkFBK0M7QUFDdkUsUUFIRSxpQkFlQztBQUNILFFBaEI2QyxjQUFTLEdBQVQsU0FBUyxDQUFjO0FBQUMsUUFDL0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtBQUFDLFFBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7QUFBQyxRQTVEdEUsK0NBQStDO0FBQ2pELFFBQVUsOEJBQXlCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztBQUN6RCxRQUFFLDREQUE0RDtBQUM5RCxRQUFZLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztBQUNsRSxRQUFFLDREQUE0RDtBQUM5RCxRQUFZLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FB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SSxZQUMvRCxnREFBZ0Q7QUFDdEQsWUFBTSxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtBQUMxQixnQkFBUSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNqQyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQyxDQWxITTtBQUFDOzZCQVRULFNBQVMsU0FBQywvQ0FTc0I7UUFSL0IsUUFBUSxFQUFFLHdDQUF3QyxzQkFDbEQsaEZBUXVDLGdCQXJCakMsWUFBWSx1QkErRUwsUUFBUSxZQUFJLFFBQVE7RUFsRXpCLEVBQUUsa0JBQWtCLHRCQWtFWSxnQkFuRnhDLGlCQUFpQjtPQWtCakIsU0FBUyxFQUFFLGxCQWpCWCxnQkFFTSx5QkFBeUI7QUFnQjdCLEFBaEJnQztBQUFVO0FBQzVCLHlCQXdCZixNQUFNO0NBVGtGLHlCQUN2RiwxQkFRVSx5QkFFWCxNQUFNO2VBVm9CLGZBVWYsNEJBRVgsTUFBTTtDQVhMLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLElBQVcsRUFBQyx4Q0FXbEMsaUNBT1gsTUFBTTttQkFqQk4sbkJBaUJXLDJCQU1YLEtBQUs7Q0F0QlAsREF1QkMsMkJBNkJDLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBTTtBQUFDLElBa0VSLHVCQUFDO0FBQ0EsQ0FEQSxBQS9IRCxJQStIQztBQUNELFNBdkhhLGdCQUFnQjtBQUFJO0FBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Nka0FjY29yZGlvbn0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEIGZvciBlYWNoIGFjY29yZGlvbiBpdGVtLiAqL1xubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogQW4gYmFzaWMgZGlyZWN0aXZlIGV4cGVjdGVkIHRvIGJlIGV4dGVuZGVkIGFuZCBkZWNvcmF0ZWQgYXMgYSBjb21wb25lbnQuICBTZXRzIHVwIGFsbFxuICogZXZlbnRzIGFuZCBhdHRyaWJ1dGVzIG5lZWRlZCB0byBiZSBtYW5hZ2VkIGJ5IGEgQ2RrQWNjb3JkaW9uIHBhcmVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2RrLWFjY29yZGlvbi1pdGVtLCBbY2RrQWNjb3JkaW9uSXRlbV0nLFxuICBleHBvcnRBczogJ2Nka0FjY29yZGlvbkl0ZW0nLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBQcm92aWRlIENka0FjY29yZGlvbiBhcyB1bmRlZmluZWQgdG8gcHJldmVudCBuZXN0ZWQgYWNjb3JkaW9uIGl0ZW1zIGZyb20gcmVnaXN0ZXJpbmdcbiAgICAvLyB0byB0aGUgc2FtZSBhY2NvcmRpb24uXG4gICAge3Byb3ZpZGU6IENka0FjY29yZGlvbiwgdXNlVmFsdWU6IHVuZGVmaW5lZH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENka0FjY29yZGlvbkl0ZW0gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogU3Vic2NyaXB0aW9uIHRvIG9wZW5BbGwvY2xvc2VBbGwgZXZlbnRzLiAqL1xuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIC8qKiBFdmVudCBlbWl0dGVkIGV2ZXJ5IHRpbWUgdGhlIEFjY29yZGlvbkl0ZW0gaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIC8qKiBFdmVudCBlbWl0dGVkIGV2ZXJ5IHRpbWUgdGhlIEFjY29yZGlvbkl0ZW0gaXMgb3BlbmVkLiAqL1xuICBAT3V0cHV0KCkgb3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIEFjY29yZGlvbkl0ZW0gaXMgZGVzdHJveWVkLiAqL1xuICBAT3V0cHV0KCkgZGVzdHJveWVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW5ldmVyIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGNoYW5nZXMuXG4gICAqIFByaW1hcmlseSB1c2VkIHRvIGZhY2lsaXRhdGUgdHdvLXdheSBiaW5kaW5nLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKiogVGhlIHVuaXF1ZSBBY2NvcmRpb25JdGVtIGlkLiAqL1xuICByZWFkb25seSBpZDogc3RyaW5nID0gYGNkay1hY2NvcmRpb24tY2hpbGQtJHtuZXh0SWQrK31gO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBBY2NvcmRpb25JdGVtIGlzIGV4cGFuZGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZXhwYW5kZWQoKTogYW55IHsgcmV0dXJuIHRoaXMuX2V4cGFuZGVkOyB9XG4gIHNldCBleHBhbmRlZChleHBhbmRlZDogYW55KSB7XG4gICAgZXhwYW5kZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZXhwYW5kZWQpO1xuXG4gICAgLy8gT25seSBlbWl0IGV2ZW50cyBhbmQgdXBkYXRlIHRoZSBpbnRlcm5hbCB2YWx1ZSBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAodGhpcy5fZXhwYW5kZWQgIT09IGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLl9leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgICAgdGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KGV4cGFuZGVkKTtcblxuICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluIHRoZSB1bmlxdWUgc2VsZWN0aW9uIGRpc3BhdGNoZXIsIHRoZSBpZCBwYXJhbWV0ZXIgaXMgdGhlIGlkIG9mIHRoZSBDZGtBY2NvcmRpb25JdGVtLFxuICAgICAgICAgKiB0aGUgbmFtZSB2YWx1ZSBpcyB0aGUgaWQgb2YgdGhlIGFjY29yZGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGFjY29yZGlvbklkID0gdGhpcy5hY2NvcmRpb24gPyB0aGlzLmFjY29yZGlvbi5pZCA6IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuX2V4cGFuc2lvbkRpc3BhdGNoZXIubm90aWZ5KHRoaXMuaWQsIGFjY29yZGlvbklkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBhbmltYXRpb24gd2lsbCBydW4gd2hlbiB0aGUgdmFsdWUgaXMgc2V0IG91dHNpZGUgb2YgYW4gYEBJbnB1dGAuXG4gICAgICAvLyBUaGlzIGluY2x1ZGVzIGNhc2VzIGxpa2UgdGhlIG9wZW4sIGNsb3NlIGFuZCB0b2dnbGUgbWV0aG9kcy5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9leHBhbmRlZCA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBBY2NvcmRpb25JdGVtIGlzIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXNhYmxlZCk7IH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVW5yZWdpc3RlciBmdW5jdGlvbiBmb3IgX2V4cGFuc2lvbkRpc3BhdGNoZXIuICovXG4gIHByaXZhdGUgX3JlbW92ZVVuaXF1ZVNlbGVjdGlvbkxpc3RlbmVyOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGFjY29yZGlvbjogQ2RrQWNjb3JkaW9uLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZXhwYW5zaW9uRGlzcGF0Y2hlcjogVW5pcXVlU2VsZWN0aW9uRGlzcGF0Y2hlcikge1xuICAgIHRoaXMuX3JlbW92ZVVuaXF1ZVNlbGVjdGlvbkxpc3RlbmVyID1cbiAgICAgIF9leHBhbnNpb25EaXNwYXRjaGVyLmxpc3RlbigoaWQ6IHN0cmluZywgYWNjb3JkaW9uSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGhpcy5hY2NvcmRpb24gJiYgIXRoaXMuYWNjb3JkaW9uLm11bHRpICYmXG4gICAgICAgICAgICB0aGlzLmFjY29yZGlvbi5pZCA9PT0gYWNjb3JkaW9uSWQgJiYgdGhpcy5pZCAhPT0gaWQpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gV2hlbiBhbiBhY2NvcmRpb24gaXRlbSBpcyBob3N0ZWQgaW4gYW4gYWNjb3JkaW9uLCBzdWJzY3JpYmUgdG8gb3Blbi9jbG9zZSBldmVudHMuXG4gICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICB0aGlzLl9vcGVuQ2xvc2VBbGxTdWJzY3JpcHRpb24gPSB0aGlzLl9zdWJzY3JpYmVUb09wZW5DbG9zZUFsbEFjdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogRW1pdHMgYW4gZXZlbnQgZm9yIHRoZSBhY2NvcmRpb24gaXRlbSBiZWluZyBkZXN0cm95ZWQuICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub3BlbmVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbG9zZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5lbWl0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9yZW1vdmVVbmlxdWVTZWxlY3Rpb25MaXN0ZW5lcigpO1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gaXRlbS4gKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGl0ZW0gdG8gZmFsc2UuICovXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgYWNjb3JkaW9uIGl0ZW0gdG8gdHJ1ZS4gKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvT3BlbkNsb3NlQWxsQWN0aW9ucygpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmFjY29yZGlvbi5fb3BlbkNsb3NlQWxsQWN0aW9ucy5zdWJzY3JpYmUoZXhwYW5kZWQgPT4ge1xuICAgICAgLy8gT25seSBjaGFuZ2UgZXhwYW5kZWQgc3RhdGUgaWYgaXRlbSBpcyBlbmFibGVkXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19