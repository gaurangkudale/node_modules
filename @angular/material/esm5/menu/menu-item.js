/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation, Inject, Optional, Input, HostListener, } from '@angular/core';
import { mixinDisabled, mixinDisableRipple, } from '@angular/material/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { MAT_MENU_PANEL } from './menu-panel';
// Boilerplate for applying mixins to MatMenuItem.
/** @docs-private */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';

var _c0 = ["mat-menu-item", ""];
var _c1 = ["*"];
var MatMenuItemBase = /** @class */ (function () {
    function MatMenuItemBase() {
    }
    return MatMenuItemBase;
}());
var _MatMenuItemMixinBase = mixinDisableRipple(mixinDisabled(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem = /** @class */ (function (_super) {
    __extends(MatMenuItem, _super);
    function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this = 
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /** ARIA role for the menu item. */
        _this.role = 'menuitem';
        /** Stream that emits when the menu item is hovered. */
        _this._hovered = new Subject();
        /** Stream that emits when the menu item is focused. */
        _this._focused = new Subject();
        /** Whether the menu item is highlighted. */
        _this._highlighted = false;
        /** Whether the menu item acts as a trigger for a sub-menu. */
        _this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(_this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_this);
        }
        _this._document = document;
        return _this;
    }
    /** Focuses the menu item. */
    MatMenuItem.prototype.focus = function (origin, options) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
        this._focused.next(this);
    };
    MatMenuItem.prototype.ngOnDestroy = function () {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
        this._focused.complete();
    };
    /** Used to set the `tabindex`. */
    MatMenuItem.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /** Returns the host DOM element. */
    MatMenuItem.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._checkDisabled = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    MatMenuItem.prototype._handleMouseEnter = function () {
        this._hovered.next(this);
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    MatMenuItem.prototype.getLabel = function () {
        var element = this._elementRef.nativeElement;
        var textNodeType = this._document ? this._document.TEXT_NODE : 3;
        var output = '';
        if (element.childNodes) {
            var length_1 = element.childNodes.length;
            // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.
            for (var i = 0; i < length_1; i++) {
                if (element.childNodes[i].nodeType === textNodeType) {
                    output += element.childNodes[i].textContent;
                }
            }
        }
        return output.trim();
    };
    /** @nocollapse */
    MatMenuItem.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: FocusMonitor },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_MENU_PANEL,] }, { type: Optional }] }
    ]; };
    MatMenuItem.propDecorators = {
        role: [{ type: Input }],
        _checkDisabled: [{ type: HostListener, args: ['click', ['$event'],] }],
        _handleMouseEnter: [{ type: HostListener, args: ['mouseenter',] }]
    };
MatMenuItem.ɵfac = function MatMenuItem_Factory(t) { return new (t || MatMenuItem)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(MAT_MENU_PANEL, 8)); };
MatMenuItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatMenuItem, selectors: [["", "mat-menu-item", ""]], hostVars: 10, hostBindings: function MatMenuItem_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function MatMenuItem_click_HostBindingHandler($event) { return ctx._checkDisabled($event); })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() { return ctx._handleMouseEnter(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        ɵngcc0.ɵɵclassProp("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, exportAs: ["matMenuItem"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]], template: function MatMenuItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelement(1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [ɵngcc2.MatRipple], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatMenuItem, [{
        type: Component,
        args: [{
                selector: '[mat-menu-item]',
                exportAs: 'matMenuItem',
                inputs: ['disabled', 'disableRipple'],
                host: {
                    '[attr.role]': 'role',
                    '[class.mat-menu-item]': 'true',
                    '[class.mat-menu-item-highlighted]': '_highlighted',
                    '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.disabled]': 'disabled || null'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.FocusMonitor }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_MENU_PANEL]
            }, {
                type: Optional
            }] }]; }, { _checkDisabled: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], _handleMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], role: [{
            type: Input
        }] }); })();
    return MatMenuItem;
}(_MatMenuItemMixinBase));
export { MatMenuItem };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbWVudS9tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUFrQixZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUU3RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBRVYsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsYUFBYSxFQUNiLGtCQUFrQixHQUNuQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFFMUQsa0RBQWtEO0FBQ2xELG9CQUFvQjs7Ozs7OztBQUNwQjtBQUMwQixJQUQxQjtBQUNJLElBRG1CLENBQUM7QUFDeEIsSUFEdUIsc0JBQUM7QUFBRCxDQUFDLEFBQXhCLElBQXdCO0FBQ3hCLElBQU0scUJBQXFCLEdBQ3ZCLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBRXZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVTLElBZXdCLCtCQUFxQjtBQUN0RCxJQW1CRSxxQkFDVSxXQUFvQyxFQUMxQixRQUFjLEVBQ3hCLGFBQTRCLEVBQ08sV0FBdUM7QUFDdEYsUUFMRTtBQUNGLFFBS0ksOEVBQThFO0FBQ2xGLFFBQUksaUJBQU8sU0FjUjtBQUNILFFBckJZLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBRXJDLG1CQUFhLEdBQWIsYUFB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bCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0ZvY3VzYWJsZU9wdGlvbiwgRm9jdXNNb25pdG9yLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkRpc2FibGUsIENhbkRpc2FibGVDdG9yLFxuICBDYW5EaXNhYmxlUmlwcGxlLCBDYW5EaXNhYmxlUmlwcGxlQ3RvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNQVRfTUVOVV9QQU5FTCwgTWF0TWVudVBhbmVsfSBmcm9tICcuL21lbnUtcGFuZWwnO1xuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIE1hdE1lbnVJdGVtLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIE1hdE1lbnVJdGVtQmFzZSB7fVxuY29uc3QgX01hdE1lbnVJdGVtTWl4aW5CYXNlOiBDYW5EaXNhYmxlUmlwcGxlQ3RvciAmIENhbkRpc2FibGVDdG9yICYgdHlwZW9mIE1hdE1lbnVJdGVtQmFzZSA9XG4gICAgbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoTWF0TWVudUl0ZW1CYXNlKSk7XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbnNpZGUgYW4gbWF0LW1lbnUgdGFnLlxuICogSXQgZXhpc3RzIG1vc3RseSB0byBzZXQgdGhlIHJvbGUgYXR0cmlidXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbWF0LW1lbnUtaXRlbV0nLFxuICBleHBvcnRBczogJ21hdE1lbnVJdGVtJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5yb2xlXSc6ICdyb2xlJyxcbiAgICAnW2NsYXNzLm1hdC1tZW51LWl0ZW1dJzogJ3RydWUnLFxuICAgICdbY2xhc3MubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZF0nOiAnX2hpZ2hsaWdodGVkJyxcbiAgICAnW2NsYXNzLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyXSc6ICdfdHJpZ2dlcnNTdWJtZW51JyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ19nZXRUYWJJbmRleCgpJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1pdGVtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRNZW51SXRlbSBleHRlbmRzIF9NYXRNZW51SXRlbU1peGluQmFzZVxuICAgIGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uLCBDYW5EaXNhYmxlLCBDYW5EaXNhYmxlUmlwcGxlLCBPbkRlc3Ryb3kge1xuXG4gIC8qKiBBUklBIHJvbGUgZm9yIHRoZSBtZW51IGl0ZW0uICovXG4gIEBJbnB1dCgpIHJvbGU6ICdtZW51aXRlbScgfCAnbWVudWl0ZW1yYWRpbycgfCAnbWVudWl0ZW1jaGVja2JveCcgPSAnbWVudWl0ZW0nO1xuXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGhvdmVyZWQuICovXG4gIHJlYWRvbmx5IF9ob3ZlcmVkOiBTdWJqZWN0PE1hdE1lbnVJdGVtPiA9IG5ldyBTdWJqZWN0PE1hdE1lbnVJdGVtPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgZm9jdXNlZC4gKi9cbiAgcmVhZG9ubHkgX2ZvY3VzZWQgPSBuZXcgU3ViamVjdDxNYXRNZW51SXRlbT4oKTtcblxuICAvKiogV2hldGhlciB0aGUgbWVudSBpdGVtIGlzIGhpZ2hsaWdodGVkLiAqL1xuICBfaGlnaGxpZ2h0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgbWVudSBpdGVtIGFjdHMgYXMgYSB0cmlnZ2VyIGZvciBhIHN1Yi1tZW51LiAqL1xuICBfdHJpZ2dlcnNTdWJtZW51OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ/OiBhbnksXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yPzogRm9jdXNNb25pdG9yLFxuICAgIEBJbmplY3QoTUFUX01FTlVfUEFORUwpIEBPcHRpb25hbCgpIHB1YmxpYyBfcGFyZW50TWVudT86IE1hdE1lbnVQYW5lbDxNYXRNZW51SXRlbT4pIHtcblxuICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgbWFrZSBgX2ZvY3VzTW9uaXRvcmAgYW5kIGBkb2N1bWVudGAgcmVxdWlyZWQgcGFyYW1zLlxuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoX2ZvY3VzTW9uaXRvcikge1xuICAgICAgLy8gU3RhcnQgbW9uaXRvcmluZyB0aGUgZWxlbWVudCBzbyBpdCBnZXRzIHRoZSBhcHByb3ByaWF0ZSBmb2N1c2VkIGNsYXNzZXMuIFdlIHdhbnRcbiAgICAgIC8vIHRvIHNob3cgdGhlIGZvY3VzIHN0eWxlIGZvciBtZW51IGl0ZW1zIG9ubHkgd2hlbiB0aGUgZm9jdXMgd2FzIG5vdCBjYXVzZWQgYnkgYVxuICAgICAgLy8gbW91c2Ugb3IgdG91Y2ggaW50ZXJhY3Rpb24uXG4gICAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5fZWxlbWVudFJlZiwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChfcGFyZW50TWVudSAmJiBfcGFyZW50TWVudS5hZGRJdGVtKSB7XG4gICAgICBfcGFyZW50TWVudS5hZGRJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgbWVudSBpdGVtLiAqL1xuICBmb2N1cyhvcmlnaW46IEZvY3VzT3JpZ2luID0gJ3Byb2dyYW0nLCBvcHRpb25zPzogRm9jdXNPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzTW9uaXRvcikge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIG9yaWdpbiwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXNlZC5uZXh0KHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzTW9uaXRvcikge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJlbnRNZW51ICYmIHRoaXMuX3BhcmVudE1lbnUucmVtb3ZlSXRlbSkge1xuICAgICAgdGhpcy5fcGFyZW50TWVudS5yZW1vdmVJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9mb2N1c2VkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogVXNlZCB0byBzZXQgdGhlIGB0YWJpbmRleGAuICovXG4gIF9nZXRUYWJJbmRleCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJy0xJyA6ICcwJztcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBob3N0IERPTSBlbGVtZW50LiAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKiogUHJldmVudHMgdGhlIGRlZmF1bHQgZWxlbWVudCBhY3Rpb25zIGlmIGl0IGlzIGRpc2FibGVkLiAqL1xuICAvLyBXZSBoYXZlIHRvIHVzZSBhIGBIb3N0TGlzdGVuZXJgIGhlcmUgaW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIEl2eSBhbmQgVmlld0VuZ2luZS5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgYmluZGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2hlbiB0aGlzIGNsYXNzIGlzIGV4dGVuZGVkLCB3aGVyZWFzIGluXG4gIC8vIFZpZXdFbmdpbmUgdGhleSdyZSBvdmVyd3JpdHRlbi5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IHdlIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgIG9uY2UgSXZ5IGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBfY2hlY2tEaXNhYmxlZChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyB0byB0aGUgaG92ZXIgc3RyZWFtLiAqL1xuICAvLyBXZSBoYXZlIHRvIHVzZSBhIGBIb3N0TGlzdGVuZXJgIGhlcmUgaW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIEl2eSBhbmQgVmlld0VuZ2luZS5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgYmluZGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2hlbiB0aGlzIGNsYXNzIGlzIGV4dGVuZGVkLCB3aGVyZWFzIGluXG4gIC8vIFZpZXdFbmdpbmUgdGhleSdyZSBvdmVyd3JpdHRlbi5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IHdlIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgIG9uY2UgSXZ5IGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIF9oYW5kbGVNb3VzZUVudGVyKCkge1xuICAgIHRoaXMuX2hvdmVyZWQubmV4dCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBsYWJlbCB0byBiZSB1c2VkIHdoZW4gZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgb3B0aW9uIHNob3VsZCBiZSBmb2N1c2VkLiAqL1xuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHRleHROb2RlVHlwZSA9IHRoaXMuX2RvY3VtZW50ID8gdGhpcy5fZG9jdW1lbnQuVEVYVF9OT0RFIDogMztcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAvLyBHbyB0aHJvdWdoIGFsbCB0aGUgdG9wLWxldmVsIHRleHQgbm9kZXMgYW5kIGV4dHJhY3QgdGhlaXIgdGV4dC5cbiAgICAgIC8vIFdlIHNraXAgYW55dGhpbmcgdGhhdCdzIG5vdCBhIHRleHQgbm9kZSB0byBwcmV2ZW50IHRoZSB0ZXh0IGZyb21cbiAgICAgIC8vIGJlaW5nIHRocm93biBvZmYgYnkgc29tZXRoaW5nIGxpa2UgYW4gaWNvbi5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gdGV4dE5vZGVUeXBlKSB7XG4gICAgICAgICAgb3V0cHV0ICs9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQudHJpbSgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlUmlwcGxlOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=