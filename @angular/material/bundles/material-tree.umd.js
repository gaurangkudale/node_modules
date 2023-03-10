(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/tree'),require('@angular/common'),require('@angular/material/core'),exports, require('tslib'), require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material/core'), require('@angular/cdk/coercion'), require('@angular/common'), require('@angular/cdk/collections'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material/tree', ['@angular/core','@angular/cdk/tree','@angular/common','@angular/material/core','exports', 'tslib', '@angular/cdk/tree', '@angular/core', '@angular/material/core', '@angular/cdk/coercion', '@angular/common', '@angular/cdk/collections', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.tree,global.ng.common,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.tree = {}), global.tslib, global.ng.cdk.tree, global.ng.core, global.ng.material.core, global.ng.cdk.coercion, global.ng.common, global.ng.cdk.collections, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,exports, tslib, tree, core, core$1, coercion, common, collections, rxjs, operators) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _MatTreeNodeMixinBase = core$1.mixinTabIndex(core$1.mixinDisabled(tree.CdkTreeNode));
    /**
     * Wrapper for the CdkTree node with Material design styles.
     */
    var MatTreeNode = /** @class */ (function (_super) {
        tslib.__extends(MatTreeNode, _super);
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
            { type: core.ElementRef },
            { type: tree.CdkTree },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] }
        ]; };
        MatTreeNode.propDecorators = {
            role: [{ type: core.Input }]
        };
MatTreeNode.ɵfac = function MatTreeNode_Factory(t) { return new (t || MatTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNode, selectors: [["mat-tree-node"]], hostAttrs: [1, "mat-tree-node"], hostVars: 3, hostBindings: function MatTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", role: "role" }, exportAs: ["matTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: tree.CdkTreeNode, useExisting: MatTreeNode }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNode, [{
        type: core.Directive,
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
                providers: [{ provide: tree.CdkTreeNode, useExisting: MatTreeNode }]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: String, decorators: [{
                type: core.Attribute,
                args: ['tabindex']
            }] }]; }, { role: [{
            type: core.Input
        }] }); })();
        return MatTreeNode;
    }(_MatTreeNodeMixinBase));
    /**
     * Wrapper for the CdkTree node definition with Material design styles.
     */
    var MatTreeNodeDef = /** @class */ (function (_super) {
        tslib.__extends(MatTreeNodeDef, _super);
        function MatTreeNodeDef() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatTreeNodeDef.propDecorators = {
            data: [{ type: core.Input, args: ['matTreeNode',] }]
        };
MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) { return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef); };
MatTreeNodeDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeDef, selectors: [["", "matTreeNodeDef", ""]], inputs: { when: ["matTreeNodeDefWhen", "when"], data: ["matTreeNode", "data"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: tree.CdkTreeNodeDef, useExisting: MatTreeNodeDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTreeNodeDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeDef, [{
        type: core.Directive,
        args: [{
                selector: '[matTreeNodeDef]',
                inputs: [
                    'when: matTreeNodeDefWhen'
                ],
                providers: [{ provide: tree.CdkTreeNodeDef, useExisting: MatTreeNodeDef }]
            }]
    }], null, { data: [{
            type: core.Input,
            args: ['matTreeNode']
        }] }); })();
        return MatTreeNodeDef;
    }(tree.CdkTreeNodeDef));
    /**
     * Wrapper for the CdkTree nested node with Material design styles.
     */
    var MatNestedTreeNode = /** @class */ (function (_super) {
        tslib.__extends(MatNestedTreeNode, _super);
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
            set: function (value) { this._disabled = coercion.coerceBooleanProperty(value); },
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
            { type: core.ElementRef },
            { type: tree.CdkTree },
            { type: core.IterableDiffers },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] }
        ]; };
        MatNestedTreeNode.propDecorators = {
            node: [{ type: core.Input, args: ['matNestedTreeNode',] }],
            disabled: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }]
        };
MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) { return new (t || MatNestedTreeNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CdkTree), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵinjectAttribute('tabindex')); };
MatNestedTreeNode.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatNestedTreeNode, selectors: [["mat-nested-tree-node"]], hostAttrs: [1, "mat-nested-tree-node"], hostVars: 2, hostBindings: function MatNestedTreeNode_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isExpanded)("role", ctx.role);
    } }, inputs: { disabled: "disabled", tabIndex: "tabIndex", node: ["matNestedTreeNode", "node"] }, exportAs: ["matNestedTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: tree.CdkNestedTreeNode, useExisting: MatNestedTreeNode },
            { provide: tree.CdkTreeNode, useExisting: MatNestedTreeNode },
            { provide: tree.CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatNestedTreeNode, [{
        type: core.Directive,
        args: [{
                selector: 'mat-nested-tree-node',
                exportAs: 'matNestedTreeNode',
                host: {
                    '[attr.aria-expanded]': 'isExpanded',
                    '[attr.role]': 'role',
                    'class': 'mat-nested-tree-node'
                },
                providers: [
                    { provide: tree.CdkNestedTreeNode, useExisting: MatNestedTreeNode },
                    { provide: tree.CdkTreeNode, useExisting: MatNestedTreeNode },
                    { provide: tree.CDK_TREE_NODE_OUTLET_NODE, useExisting: MatNestedTreeNode }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.CdkTree }, { type: ɵngcc0.IterableDiffers }, { type: String, decorators: [{
                type: core.Attribute,
                args: ['tabindex']
            }] }]; }, { disabled: [{
            type: core.Input
        }], tabIndex: [{
            type: core.Input
        }], node: [{
            type: core.Input,
            args: ['matNestedTreeNode']
        }] }); })();
        return MatNestedTreeNode;
    }(tree.CdkNestedTreeNode));

    /**
     * Wrapper for the CdkTree padding with Material design styles.
     */
    var MatTreeNodePadding = /** @class */ (function (_super) {
        tslib.__extends(MatTreeNodePadding, _super);
        function MatTreeNodePadding() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatTreeNodePadding.propDecorators = {
            level: [{ type: core.Input, args: ['matTreeNodePadding',] }],
            indent: [{ type: core.Input, args: ['matTreeNodePaddingIndent',] }]
        };
MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) { return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding); };
MatTreeNodePadding.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodePadding, selectors: [["", "matTreeNodePadding", ""]], inputs: { level: ["matTreeNodePadding", "level"], indent: ["matTreeNodePaddingIndent", "indent"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: tree.CdkTreeNodePadding, useExisting: MatTreeNodePadding }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTreeNodePadding_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodePadding);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodePadding, [{
        type: core.Directive,
        args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: tree.CdkTreeNodePadding, useExisting: MatTreeNodePadding }]
            }]
    }], null, { level: [{
            type: core.Input,
            args: ['matTreeNodePadding']
        }], indent: [{
            type: core.Input,
            args: ['matTreeNodePaddingIndent']
        }] }); })();
        return MatTreeNodePadding;
    }(tree.CdkTreeNodePadding));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */
    var MatTreeNodeOutlet = /** @class */ (function () {
        function MatTreeNodeOutlet(viewContainer, _node) {
            this.viewContainer = viewContainer;
            this._node = _node;
        }
        /** @nocollapse */
        MatTreeNodeOutlet.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [tree.CDK_TREE_NODE_OUTLET_NODE,] }, { type: core.Optional }] }
        ]; };
MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) { return new (t || MatTreeNodeOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(tree.CDK_TREE_NODE_OUTLET_NODE, 8)); };
MatTreeNodeOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeOutlet, selectors: [["", "matTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: tree.CdkTreeNodeOutlet,
                useExisting: MatTreeNodeOutlet
            }])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeOutlet, [{
        type: core.Directive,
        args: [{
                selector: '[matTreeNodeOutlet]',
                providers: [{
                        provide: tree.CdkTreeNodeOutlet,
                        useExisting: MatTreeNodeOutlet
                    }]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [tree.CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: core.Optional
            }] }]; }, null); })();
        return MatTreeNodeOutlet;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Wrapper for the CdkTable with Material design styles.
     */
    var MatTree = /** @class */ (function (_super) {
        tslib.__extends(MatTree, _super);
        function MatTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatTree.propDecorators = {
            _nodeOutlet: [{ type: core.ViewChild, args: [MatTreeNodeOutlet, { static: true },] }]
        };
MatTree.ɵfac = function MatTree_Factory(t) { return ɵMatTree_BaseFactory(t || MatTree); };
MatTree.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatTree, selectors: [["mat-tree"]], viewQuery: function MatTree_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(MatTreeNodeOutlet, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    } }, hostAttrs: ["role", "tree", 1, "mat-tree"], exportAs: ["matTree"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: tree.CdkTree, useExisting: MatTree }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["matTreeNodeOutlet", ""]], template: function MatTree_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [MatTreeNodeOutlet], styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"], encapsulation: 2 });
var ɵMatTree_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTree);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTree, [{
        type: core.Component,
        args: [{
                selector: 'mat-tree',
                exportAs: 'matTree',
                template: "<ng-container matTreeNodeOutlet></ng-container>",
                host: {
                    'class': 'mat-tree',
                    'role': 'tree'
                },
                encapsulation: core.ViewEncapsulation.None,
                // See note on CdkTree for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                providers: [{ provide: tree.CdkTree, useExisting: MatTree }],
                styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
            }]
    }], null, { _nodeOutlet: [{
            type: core.ViewChild,
            args: [MatTreeNodeOutlet, { static: true }]
        }] }); })();
        return MatTree;
    }(tree.CdkTree));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Wrapper for the CdkTree's toggle with Material design styles.
     */
    var MatTreeNodeToggle = /** @class */ (function (_super) {
        tslib.__extends(MatTreeNodeToggle, _super);
        function MatTreeNodeToggle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.recursive = false;
            return _this;
        }
        MatTreeNodeToggle.propDecorators = {
            recursive: [{ type: core.Input, args: ['matTreeNodeToggleRecursive',] }]
        };
MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) { return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle); };
MatTreeNodeToggle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodeToggle, selectors: [["", "matTreeNodeToggle", ""]], inputs: { recursive: ["matTreeNodeToggleRecursive", "recursive"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: tree.CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTreeNodeToggle_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodeToggle);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodeToggle, [{
        type: core.Directive,
        args: [{
                selector: '[matTreeNodeToggle]',
                providers: [{ provide: tree.CdkTreeNodeToggle, useExisting: MatTreeNodeToggle }]
            }]
    }], null, { recursive: [{
            type: core.Input,
            args: ['matTreeNodeToggleRecursive']
        }] }); })();
        return MatTreeNodeToggle;
    }(tree.CdkTreeNodeToggle));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MAT_TREE_DIRECTIVES = [
        MatNestedTreeNode,
        MatTreeNodeDef,
        MatTreeNodePadding,
        MatTreeNodeToggle,
        MatTree,
        MatTreeNode,
        MatTreeNodeOutlet
    ];
    var MatTreeModule = /** @class */ (function () {
        function MatTreeModule() {
        }
MatTreeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatTreeModule });
MatTreeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatTreeModule_Factory(t) { return new (t || MatTreeModule)(); }, imports: [[tree.CdkTreeModule, common.CommonModule, core$1.MatCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatTreeModule, { declarations: [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet], imports: [ɵngcc1.CdkTreeModule, ɵngcc2.CommonModule, ɵngcc3.MatCommonModule], exports: [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeModule, [{
        type: core.NgModule,
        args: [{
                imports: [tree.CdkTreeModule, common.CommonModule, core$1.MatCommonModule],
                exports: MAT_TREE_DIRECTIVES,
                declarations: MAT_TREE_DIRECTIVES
            }]
    }], function () { return []; }, null); })();
        return MatTreeModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T` to flattened nodes of type `F`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F` with additional information.
     */
    var MatTreeFlattener = /** @class */ (function () {
        function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
            this.transformFunction = transformFunction;
            this.getLevel = getLevel;
            this.isExpandable = isExpandable;
            this.getChildren = getChildren;
        }
        MatTreeFlattener.prototype._flattenNode = function (node, level, resultNodes, parentMap) {
            var _this = this;
            var flatNode = this.transformFunction(node, level);
            resultNodes.push(flatNode);
            if (this.isExpandable(flatNode)) {
                var childrenNodes = this.getChildren(node);
                if (childrenNodes) {
                    if (Array.isArray(childrenNodes)) {
                        this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                    }
                    else {
                        childrenNodes.pipe(operators.take(1)).subscribe(function (children) {
                            _this._flattenChildren(children, level, resultNodes, parentMap);
                        });
                    }
                }
            }
            return resultNodes;
        };
        MatTreeFlattener.prototype._flattenChildren = function (children, level, resultNodes, parentMap) {
            var _this = this;
            children.forEach(function (child, index) {
                var childParentMap = parentMap.slice();
                childParentMap.push(index != children.length - 1);
                _this._flattenNode(child, level + 1, resultNodes, childParentMap);
            });
        };
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         */
        MatTreeFlattener.prototype.flattenNodes = function (structuredData) {
            var _this = this;
            var resultNodes = [];
            structuredData.forEach(function (node) { return _this._flattenNode(node, 0, resultNodes, []); });
            return resultNodes;
        };
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         */
        MatTreeFlattener.prototype.expandFlattenedNodes = function (nodes, treeControl) {
            var _this = this;
            var results = [];
            var currentExpand = [];
            currentExpand[0] = true;
            nodes.forEach(function (node) {
                var expand = true;
                for (var i = 0; i <= _this.getLevel(node); i++) {
                    expand = expand && currentExpand[i];
                }
                if (expand) {
                    results.push(node);
                }
                if (_this.isExpandable(node)) {
                    currentExpand[_this.getLevel(node) + 1] = treeControl.isExpanded(node);
                }
            });
            return results;
        };
        return MatTreeFlattener;
    }());
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `MatTree`.
     * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
     * to type `F` for `MatTree` to consume.
     */
    var MatTreeFlatDataSource = /** @class */ (function (_super) {
        tslib.__extends(MatTreeFlatDataSource, _super);
        function MatTreeFlatDataSource(_treeControl, _treeFlattener, initialData) {
            if (initialData === void 0) { initialData = []; }
            var _this = _super.call(this) || this;
            _this._treeControl = _treeControl;
            _this._treeFlattener = _treeFlattener;
            _this._flattenedData = new rxjs.BehaviorSubject([]);
            _this._expandedData = new rxjs.BehaviorSubject([]);
            _this._data = new rxjs.BehaviorSubject(initialData);
            return _this;
        }
        Object.defineProperty(MatTreeFlatDataSource.prototype, "data", {
            get: function () { return this._data.value; },
            set: function (value) {
                this._data.next(value);
                this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
                this._treeControl.dataNodes = this._flattenedData.value;
            },
            enumerable: true,
            configurable: true
        });
        MatTreeFlatDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            var changes = [
                collectionViewer.viewChange,
                this._treeControl.expansionModel.changed,
                this._flattenedData
            ];
            return rxjs.merge.apply(void 0, tslib.__spread(changes)).pipe(operators.map(function () {
                _this._expandedData.next(_this._treeFlattener.expandFlattenedNodes(_this._flattenedData.value, _this._treeControl));
                return _this._expandedData.value;
            }));
        };
        MatTreeFlatDataSource.prototype.disconnect = function () {
            // no op
        };
        return MatTreeFlatDataSource;
    }(collections.DataSource));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Data source for nested tree.
     *
     * The data source for nested tree doesn't have to consider node flattener, or the way to expand
     * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
     */
    var MatTreeNestedDataSource = /** @class */ (function (_super) {
        tslib.__extends(MatTreeNestedDataSource, _super);
        function MatTreeNestedDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._data = new rxjs.BehaviorSubject([]);
            return _this;
        }
        Object.defineProperty(MatTreeNestedDataSource.prototype, "data", {
            /**
             * Data for the nested tree
             */
            get: function () { return this._data.value; },
            set: function (value) { this._data.next(value); },
            enumerable: true,
            configurable: true
        });
        MatTreeNestedDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            return rxjs.merge.apply(void 0, tslib.__spread([collectionViewer.viewChange, this._data])).pipe(operators.map(function () {
                return _this.data;
            }));
        };
        MatTreeNestedDataSource.prototype.disconnect = function () {
            // no op
        };
        return MatTreeNestedDataSource;
    }(collections.DataSource));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MatNestedTreeNode = MatNestedTreeNode;
    exports.MatTree = MatTree;
    exports.MatTreeFlatDataSource = MatTreeFlatDataSource;
    exports.MatTreeFlattener = MatTreeFlattener;
    exports.MatTreeModule = MatTreeModule;
    exports.MatTreeNestedDataSource = MatTreeNestedDataSource;
    exports.MatTreeNode = MatTreeNode;
    exports.MatTreeNodeDef = MatTreeNodeDef;
    exports.MatTreeNodeOutlet = MatTreeNodeOutlet;
    exports.MatTreeNodePadding = MatTreeNodePadding;
    exports.MatTreeNodeToggle = MatTreeNodeToggle;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-tree.umd.js.map