/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeNode, CdkTreeNodeDef, } from '@angular/cdk/tree';
import { Attribute, Directive, ElementRef, Input, IterableDiffers, } from '@angular/core';
import { mixinDisabled, mixinTabIndex, } from '@angular/material/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/tree';
var _MatTreeNodeMixinBase = mixinTabIndex(mixinDisabled(CdkTreeNode));
/**
 * Wrapper for the CdkTree node with Material design styles.
 */
var MatTreeNode = /** @class */ (function (_super) {
    __extends(MatTreeNode, _super);
    function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this = _super.call(this, _elementRef, _tree) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this.role = 'treeitem';
        _this.tabIndex = Number(tabIndex) || 0;
        return _this;
    }
    /** @nocollapse */
    MatTreeNode.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CdkTree },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
    ]; };
    MatTreeNode.propDecorators = {
        role: [{ type: Input }]
    };
MatTreeNode.ɵfac = function MatTreeNode_Factory(t) { return new (t || MatTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNode, selectors: [["mat-tree-node"]], hostAttrs: [1, "mat-tree-node"], hostVars: 3, hostBindings: function MatTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", role: "role" }, exportAs: ["matTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNode, useExisting: MatTreeNode }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNode, [{
        type: Directive,
        args: [{
                selector: 'mat-tree-node',
                exportAs: 'matTreeNode',
                inputs: ['disabled', 'tabIndex'],
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.aria-level]': 'role === "treeitem" ? level : null',
                    '[attr.role]': 'role',
                    'class': 'mat-tree-node'
                },
                providers: [{ provide: CdkTreeNode, useExisting: MatTreeNode }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { role: [{
            type: Input
        }] }); })();
    return MatTreeNode;
}(_MatTreeNodeMixinBase));
export { MatTreeNode };
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 */
var MatTreeNodeDef = /** @class */ (function (_super) {
    __extends(MatTreeNodeDef, _super);
    function MatTreeNodeDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTreeNodeDef.propDecorators = {
        data: [{ type: Input, args: ['matTreeNode',] }]
    };
MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) { return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef); };
MatTreeNodeDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeDef, selectors: [["", "matTreeNodeDef", ""]], inputs: { when: ["matTreeNodeDefWhen", "when"], data: ["matTreeNode", "data"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTreeNodeDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeDef, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: CdkTreeNodeDef, useExisting: MatTreeNodeDef }]
            }]
    }], null, { data: [{
            type: Input,
            args: ['matTreeNode']
        }] }); })();
    return MatTreeNodeDef;
}(CdkTreeNodeDef));
export { MatTreeNodeDef };
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */
var MatNestedTreeNode = /** @class */ (function (_super) {
    __extends(MatNestedTreeNode, _super);
    function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this = _super.call(this, _elementRef, _tree, _differs) || this;
        _this._elementRef = _elementRef;
        _this._tree = _tree;
        _this._differs = _differs;
        _this._disabled = false;
        _this.tabIndex = Number(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatNestedTreeNode.prototype, "disabled", {
        /** Whether the node is disabled. */
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatNestedTreeNode.prototype, "tabIndex", {
        /** Tabindex for the node. */
        get: function () { return this.disabled ? -1 : this._tabIndex; },
        set: function (value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : 0;
        },
        enumerable: true,
        configurable: true
    });
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #23091 is fixed
    MatNestedTreeNode.prototype.ngAfterContentInit = function () {
        _super.prototype.ngAfterContentInit.call(this);
    };
    MatNestedTreeNode.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /** @nocollapse */
    MatNestedTreeNode.ctorParameters = function () { return [
        { type: ElementRef },
        { type: CdkTree },
        { type: IterableDiffers },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
    ]; };
    MatNestedTreeNode.propDecorators = {
        node: [{ type: Input, args: ['matNestedTreeNode',] }],
        disabled: [{ type: Input }],
        tabIndex: [{ type: Input }]
    };
MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) { return new (t || MatNestedTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatNestedTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatNestedTreeNode, selectors: [["mat-nested-tree-node"]], hostAttrs: [1, "mat-nested-tree-node"], hostVars: 2, hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", node: ["matNestedTreeNode", "node"] }, exportAs: ["matNestedTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
            { provide: CdkTreeNode, useExisting: MatNestedTreeNode },
            { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatNestedTreeNode, [{
        type: Directive,
        args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node'
                },
                providers: [
                    { provide: CdkNestedTreeNode, useExisting: MatNestedTreeNode },
                    { provide: CdkTreeNode, useExisting: MatNestedTreeNode },
                    { provide: CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: ɵngcc0.IterableDiffers }, { type: String, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { disabled: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], node: [{
            type: Input,
            args: ['matNestedTreeNode']
        }] }); })();
    return MatNestedTreeNode;
}(CdkNestedTreeNode));
export { MatNestedTreeNode };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RyZWUvbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsV0FBVyxFQUNYLGNBQWMsR0FDZixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsZUFBZSxHQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBS0wsYUFBYSxFQUNiLGFBQWEsR0FDZCxNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7QUFFMUUsSUFBTSxxQkFBcUIsR0FDdkIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBRTlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFVyxJQVV5QiwrQkFBd0I7QUFDNUQsSUFHRSxxQkFBc0IsV0FBb0MsRUFDcEMsS0FBaUIsRUFDSixRQUFnQjtBQUNyRCxRQUhFLFlBR0Usa0JBQU0sV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUcxQjtBQUNILFFBUHdCLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtBQUFDLFFBQ3JDLFdBQUssR0FBTCxLQUFLLENBQVk7QUFBQyxRQUgvQixVQUFJLEdBQXlCLFVBQVUsQ0FBQztBQUNuRCxRQU1JLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQztBQUVpQixJQUZmLENBQUMsQUFWTTtBQUFDO3dCQVpULFNBQVMsU0FBQywxQ0FZc0I7UUFYL0IsUUFBUSxFQUFFLGxCQVlnQixnQkFsQzFCLFVBQVU7R0FzQmUsc0JBQ3pC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QztBQUVILElBQUUsdUNBQVcsR0FBWDtBQUFjLFFBQ1osaUJBQU0sV0FBVyxXQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDLENBcENNO0FBQUM7OEJBZFQsU0FBUyxTQUFDLGhEQWNzQjtRQWIvQixRQUFRLEVBQUUsbEJBY1QsZ0JBaEZELFVBQVU7VUFrRXNCLFZBakVoQyxnQkFUQSxPQUFPO0tBMkVQLFFBQVEsRUFBRSxtQkFBbUIsbENBMUU3QixnQkFTQSxlQUFlO3FCQWtFZixJQUFJLEVBQUUsMEJBQ0osc0JBQXNCLEVBQUUsN0VBbEUxQiw2Q0FrR2EsU0FBUyxTQUFDLFVBQVU7UUFoQ0ssUkFnQ0c7d0JBL0J2QyxhQUFhLEVBQUUsdkNBK0JrQztJQS9CNUIsMEJBQ3JCLE9BQU8sRUFBRSxzQkFBc0IsN0RBK0JFLHVCQXJCbEMsS0FBSyxTQUFDLG1CQUFtQjtxQkFUekIsckJBU2dDLDJCQUdoQyxLQUFLO01BWE4sU0FBUyxFQUFFLGpCQVlYLDJCQUtDLEtBQUs7QUFDUDtBQWpCRyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsMEJBQzVELEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUMsMEJBQ3RELEVBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBQyxzQkFDckU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWFNO0FBQUMsSUEyQlIsd0JBQUM7QUFDQSxDQURBLEFBckRELENBYzBDLGlCQUFpQixHQXVDMUQ7QUFDRCxTQXhDYSxpQkFBaUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDREtfVFJFRV9OT0RFX09VVExFVF9OT0RFLFxuICBDZGtOZXN0ZWRUcmVlTm9kZSxcbiAgQ2RrVHJlZSxcbiAgQ2RrVHJlZU5vZGUsXG4gIENka1RyZWVOb2RlRGVmLFxufSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBdHRyaWJ1dGUsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbkRpc2FibGUsXG4gIENhbkRpc2FibGVDdG9yLFxuICBIYXNUYWJJbmRleCxcbiAgSGFzVGFiSW5kZXhDdG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpblRhYkluZGV4LFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmNvbnN0IF9NYXRUcmVlTm9kZU1peGluQmFzZTogSGFzVGFiSW5kZXhDdG9yICYgQ2FuRGlzYWJsZUN0b3IgJiB0eXBlb2YgQ2RrVHJlZU5vZGUgPVxuICAgIG1peGluVGFiSW5kZXgobWl4aW5EaXNhYmxlZChDZGtUcmVlTm9kZSkpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIHRoZSBDZGtUcmVlIG5vZGUgd2l0aCBNYXRlcmlhbCBkZXNpZ24gc3R5bGVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtdHJlZS1ub2RlJyxcbiAgZXhwb3J0QXM6ICdtYXRUcmVlTm9kZScsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd0YWJJbmRleCddLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2lzRXhwYW5kZWQnLFxuICAgICdbYXR0ci5hcmlhLWxldmVsXSc6ICdyb2xlID09PSBcInRyZWVpdGVtXCIgPyBsZXZlbCA6IG51bGwnLFxuICAgICdbYXR0ci5yb2xlXSc6ICdyb2xlJyxcbiAgICAnY2xhc3MnOiAnbWF0LXRyZWUtbm9kZSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1RyZWVOb2RlLCB1c2VFeGlzdGluZzogTWF0VHJlZU5vZGV9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRUcmVlTm9kZTxUPiBleHRlbmRzIF9NYXRUcmVlTm9kZU1peGluQmFzZTxUPlxuICAgIGltcGxlbWVudHMgQ2FuRGlzYWJsZSwgSGFzVGFiSW5kZXgge1xuICBASW5wdXQoKSByb2xlOiAndHJlZWl0ZW0nIHwgJ2dyb3VwJyA9ICd0cmVlaXRlbSc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF90cmVlOiBDZGtUcmVlPFQ+LFxuICAgICAgICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHRhYkluZGV4OiBzdHJpbmcpIHtcbiAgICBzdXBlcihfZWxlbWVudFJlZiwgX3RyZWUpO1xuXG4gICAgdGhpcy50YWJJbmRleCA9IE51bWJlcih0YWJJbmRleCkgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuXG4vKipcbiAqIFdyYXBwZXIgZm9yIHRoZSBDZGtUcmVlIG5vZGUgZGVmaW5pdGlvbiB3aXRoIE1hdGVyaWFsIGRlc2lnbiBzdHlsZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUcmVlTm9kZURlZl0nLFxuICBpbnB1dHM6IFtcbiAgICAnd2hlbjogbWF0VHJlZU5vZGVEZWZXaGVuJ1xuICBdLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrVHJlZU5vZGVEZWYsIHVzZUV4aXN0aW5nOiBNYXRUcmVlTm9kZURlZn1dXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRyZWVOb2RlRGVmPFQ+IGV4dGVuZHMgQ2RrVHJlZU5vZGVEZWY8VD4ge1xuICBASW5wdXQoJ21hdFRyZWVOb2RlJykgZGF0YTogVDtcbn1cblxuLyoqXG4gKiBXcmFwcGVyIGZvciB0aGUgQ2RrVHJlZSBuZXN0ZWQgbm9kZSB3aXRoIE1hdGVyaWFsIGRlc2lnbiBzdHlsZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1uZXN0ZWQtdHJlZS1ub2RlJyxcbiAgZXhwb3J0QXM6ICdtYXROZXN0ZWRUcmVlTm9kZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnaXNFeHBhbmRlZCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdjbGFzcyc6ICdtYXQtbmVzdGVkLXRyZWUtbm9kZScsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBDZGtOZXN0ZWRUcmVlTm9kZSwgdXNlRXhpc3Rpbmc6IE1hdE5lc3RlZFRyZWVOb2RlfSxcbiAgICB7cHJvdmlkZTogQ2RrVHJlZU5vZGUsIHVzZUV4aXN0aW5nOiBNYXROZXN0ZWRUcmVlTm9kZX0sXG4gICAge3Byb3ZpZGU6IENES19UUkVFX05PREVfT1VUTEVUX05PREUsIHVzZUV4aXN0aW5nOiBNYXROZXN0ZWRUcmVlTm9kZX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXROZXN0ZWRUcmVlTm9kZTxUPiBleHRlbmRzIENka05lc3RlZFRyZWVOb2RlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95IHtcbiAgQElucHV0KCdtYXROZXN0ZWRUcmVlTm9kZScpIG5vZGU6IFQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG5vZGUgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBUYWJpbmRleCBmb3IgdGhlIG5vZGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaXNhYmxlZCA/IC0xIDogdGhpcy5fdGFiSW5kZXg7IH1cbiAgc2V0IHRhYkluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAvLyBJZiB0aGUgc3BlY2lmaWVkIHRhYkluZGV4IHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAwO1xuICB9XG4gIHByaXZhdGUgX3RhYkluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF90cmVlOiBDZGtUcmVlPFQ+LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB0YWJJbmRleDogc3RyaW5nKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIF90cmVlLCBfZGlmZmVycyk7XG4gICAgdGhpcy50YWJJbmRleCA9IE51bWJlcih0YWJJbmRleCkgfHwgMDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzA5MVxuICAvLyBJbiBhb3QgbW9kZSwgdGhlIGxpZmVjeWNsZSBob29rcyBmcm9tIHBhcmVudCBjbGFzcyBhcmUgbm90IGNhbGxlZC5cbiAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IFJlbW92ZSB3aGVuIHRoZSBhbmd1bGFyIGlzc3VlICMyMzA5MSBpcyBmaXhlZFxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=