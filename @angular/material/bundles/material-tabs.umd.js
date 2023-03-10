(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/bidi'),require('@angular/common'),require('@angular/material/core'),require('@angular/cdk/a11y'),require('@angular/cdk/portal'),require('@angular/cdk/scrolling'),require('@angular/cdk/platform'),require('@angular/cdk/observers'),exports, require('@angular/cdk/a11y'), require('@angular/cdk/observers'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/core'), require('@angular/material/core'), require('@angular/platform-browser/animations'), require('tslib'), require('rxjs'), require('@angular/cdk/bidi'), require('@angular/animations'), require('rxjs/operators'), require('@angular/cdk/coercion'), require('@angular/cdk/scrolling'), require('@angular/cdk/platform'), require('@angular/cdk/keycodes')) :
    typeof define === 'function' && define.amd ? define('@angular/material/tabs', ['@angular/core','@angular/cdk/bidi','@angular/common','@angular/material/core','@angular/cdk/a11y','@angular/cdk/portal','@angular/cdk/scrolling','@angular/cdk/platform','@angular/cdk/observers','exports', '@angular/cdk/a11y', '@angular/cdk/observers', '@angular/cdk/portal', '@angular/common', '@angular/core', '@angular/material/core', '@angular/platform-browser/animations', 'tslib', 'rxjs', '@angular/cdk/bidi', '@angular/animations', 'rxjs/operators', '@angular/cdk/coercion', '@angular/cdk/scrolling', '@angular/cdk/platform', '@angular/cdk/keycodes'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.bidi,global.ng.common,global.ng.material.core,global.ng.cdk.a11y,global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.platform,global.ng.cdk.observers,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.tabs = {}), global.ng.cdk.a11y, global.ng.cdk.observers, global.ng.cdk.portal, global.ng.common, global.ng.core, global.ng.material.core, global.ng.platformBrowser.animations, global.tslib, global.rxjs, global.ng.cdk.bidi, global.ng.animations, global.rxjs.operators, global.ng.cdk.coercion, global.ng.cdk.scrolling, global.ng.cdk.platform, global.ng.cdk.keycodes));
}(this, (function (??ngcc0,??ngcc1,??ngcc2,??ngcc3,??ngcc4,??ngcc5,??ngcc6,??ngcc7,??ngcc8,exports, a11y, observers, portal, common, core, core$1, animations, tslib, rxjs, bidi, animations$1, operators, coercion, scrolling, platform, keycodes) { 
function MatTab_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ??ngcc0.????projection(0);
} }
var _c0 = ["*"];
function MatTabBody_ng_template_2_Template(rf, ctx) { }
var _c1 = function (a0) { return { animationDuration: a0 }; };
var _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
var _c3 = ["tabBodyWrapper"];
var _c4 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) { }
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ??ngcc0.????template(0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    var tab_r4 = ??ngcc0.????nextContext().$implicit;
    ??ngcc0.????property("cdkPortalOutlet", tab_r4.templateLabel);
} }
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ??ngcc0.????text(0);
} if (rf & 2) {
    var tab_r4 = ??ngcc0.????nextContext().$implicit;
    ??ngcc0.????textInterpolate(tab_r4.textLabel);
} }
function MatTabGroup_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ??ngcc0.????getCurrentView();
    ??ngcc0.????elementStart(0, "div", 6);
    ??ngcc0.????listener("click", function MatTabGroup_div_2_Template_div_click_0_listener() { ??ngcc0.????restoreView(_r12); var tab_r4 = ctx.$implicit; var i_r5 = ctx.index; var ctx_r11 = ??ngcc0.????nextContext(); var _r0 = ??ngcc0.????reference(1); return ctx_r11._handleClick(tab_r4, _r0, i_r5); });
    ??ngcc0.????elementStart(1, "div", 7);
    ??ngcc0.????template(2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    ??ngcc0.????template(3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    ??ngcc0.????elementEnd();
    ??ngcc0.????elementEnd();
} if (rf & 2) {
    var tab_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r1 = ??ngcc0.????nextContext();
    ??ngcc0.????classProp("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    ??ngcc0.????property("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    ??ngcc0.????attribute("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    ??ngcc0.????advance(2);
    ??ngcc0.????property("ngIf", tab_r4.templateLabel);
    ??ngcc0.????advance(1);
    ??ngcc0.????property("ngIf", !tab_r4.templateLabel);
} }
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ??ngcc0.????getCurrentView();
    ??ngcc0.????elementStart(0, "mat-tab-body", 10);
    ??ngcc0.????listener("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() { ??ngcc0.????restoreView(_r16); var ctx_r15 = ??ngcc0.????nextContext(); return ctx_r15._removeTabBodyWrapperHeight(); })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) { ??ngcc0.????restoreView(_r16); var ctx_r17 = ??ngcc0.????nextContext(); return ctx_r17._setTabBodyWrapperHeight($event); });
    ??ngcc0.????elementEnd();
} if (rf & 2) {
    var tab_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    var ctx_r3 = ??ngcc0.????nextContext();
    ??ngcc0.????classProp("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);
    ??ngcc0.????property("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);
    ??ngcc0.????attribute("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
} }
var _c5 = ["tabListContainer"];
var _c6 = ["tabList"];
var _c7 = ["nextPaginator"];
var _c8 = ["previousPaginator"];
var _c9 = ["mat-tab-nav-bar", ""];
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token for the MatInkBar's Positioner. */
    var _MAT_INK_BAR_POSITIONER = new core.InjectionToken('MatInkBarPositioner', {
        providedIn: 'root',
        factory: _MAT_INK_BAR_POSITIONER_FACTORY
    });
    /**
     * The default positioner function for the MatInkBar.
     * @docs-private
     */
    function _MAT_INK_BAR_POSITIONER_FACTORY() {
        var method = function (element) { return ({
            left: element ? (element.offsetLeft || 0) + 'px' : '0',
            width: element ? (element.offsetWidth || 0) + 'px' : '0',
        }); };
        return method;
    }
    /**
     * The ink-bar is used to display and animate the line underneath the current active tab label.
     * @docs-private
     */
    var MatInkBar = /** @class */ (function () {
        function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            this._inkBarPositioner = _inkBarPositioner;
            this._animationMode = _animationMode;
        }
        /**
         * Calculates the styles from the provided element in order to align the ink-bar to that element.
         * Shows the ink bar if previously set as hidden.
         * @param element
         */
        MatInkBar.prototype.alignToElement = function (element) {
            var _this = this;
            this.show();
            if (typeof requestAnimationFrame !== 'undefined') {
                this._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () { return _this._setStyles(element); });
                });
            }
            else {
                this._setStyles(element);
            }
        };
        /** Shows the ink bar. */
        MatInkBar.prototype.show = function () {
            this._elementRef.nativeElement.style.visibility = 'visible';
        };
        /** Hides the ink bar. */
        MatInkBar.prototype.hide = function () {
            this._elementRef.nativeElement.style.visibility = 'hidden';
        };
        /**
         * Sets the proper styles to the ink bar element.
         * @param element
         */
        MatInkBar.prototype._setStyles = function (element) {
            var positions = this._inkBarPositioner(element);
            var inkBar = this._elementRef.nativeElement;
            inkBar.style.left = positions.left;
            inkBar.style.width = positions.width;
        };
        /** @nocollapse */
        MatInkBar.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: undefined, decorators: [{ type: core.Inject, args: [_MAT_INK_BAR_POSITIONER,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
MatInkBar.??fac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(_MAT_INK_BAR_POSITIONER), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatInkBar.??dir = ??ngcc0.????defineDirective({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatInkBar, [{
        type: core.Directive,
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
                }
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.NgZone }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
        return MatInkBar;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Decorates the `ng-template` tags and reads out the template from it. */
    var MatTabContent = /** @class */ (function () {
        function MatTabContent(template) {
            this.template = template;
        }
        /** @nocollapse */
        MatTabContent.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
MatTabContent.??fac = function MatTabContent_Factory(t) { return new (t || MatTabContent)(??ngcc0.????directiveInject(??ngcc0.TemplateRef)); };
MatTabContent.??dir = ??ngcc0.????defineDirective({ type: MatTabContent, selectors: [["", "matTabContent", ""]] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabContent, [{
        type: core.Directive,
        args: [{ selector: '[matTabContent]' }]
    }], function () { return [{ type: ??ngcc0.TemplateRef }]; }, null); })();
        return MatTabContent;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Used to flag tab labels for use with the portal directive */
    var MatTabLabel = /** @class */ (function (_super) {
        tslib.__extends(MatTabLabel, _super);
        function MatTabLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
MatTabLabel.??fac = function MatTabLabel_Factory(t) { return ??MatTabLabel_BaseFactory(t || MatTabLabel); };
MatTabLabel.??dir = ??ngcc0.????defineDirective({ type: MatTabLabel, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [??ngcc0.????InheritDefinitionFeature] });
var ??MatTabLabel_BaseFactory = ??ngcc0.????getInheritedFactory(MatTabLabel);
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabLabel, [{
        type: core.Directive,
        args: [{
                selector: '[mat-tab-label], [matTabLabel]'
            }]
    }], null, null); })();
        return MatTabLabel;
    }(portal.CdkPortal));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Boilerplate for applying mixins to MatTab.
    /** @docs-private */
    var MatTabBase = /** @class */ (function () {
        function MatTabBase() {
        }
        return MatTabBase;
    }());
    var _MatTabMixinBase = core$1.mixinDisabled(MatTabBase);
    /**
     * Used to provide a tab group to a tab without causing a circular dependency.
     * @docs-private
     */
    var MAT_TAB_GROUP = new core.InjectionToken('MAT_TAB_GROUP');
    var MatTab = /** @class */ (function (_super) {
        tslib.__extends(MatTab, _super);
        function MatTab(_viewContainerRef, 
        /**
         * @deprecated `_closestTabGroup` parameter to become required.
         * @breaking-change 10.0.0
         */
        _closestTabGroup) {
            var _this = _super.call(this) || this;
            _this._viewContainerRef = _viewContainerRef;
            _this._closestTabGroup = _closestTabGroup;
            /** Plain text label for the tab, used when there is no template label. */
            _this.textLabel = '';
            /** Portal that will be the hosted content of the tab */
            _this._contentPortal = null;
            /** Emits whenever the internal state of the tab changes. */
            _this._stateChanges = new rxjs.Subject();
            /**
             * The relatively indexed position where 0 represents the center, negative is left, and positive
             * represents the right.
             */
            _this.position = null;
            /**
             * The initial relatively index origin of the tab if it was created and selected after there
             * was already a selected tab. Provides context of what position the tab should originate from.
             */
            _this.origin = null;
            /**
             * Whether the tab is currently active.
             */
            _this.isActive = false;
            return _this;
        }
        Object.defineProperty(MatTab.prototype, "templateLabel", {
            /** Content for the tab label given by `<ng-template mat-tab-label>`. */
            get: function () { return this._templateLabel; },
            set: function (value) {
                // Only update the templateLabel via query if there is actually
                // a MatTabLabel found. This works around an issue where a user may have
                // manually set `templateLabel` during creation mode, which would then get clobbered
                // by `undefined` when this query resolves.
                if (value) {
                    this._templateLabel = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatTab.prototype, "content", {
            /** @docs-private */
            get: function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        MatTab.prototype.ngOnChanges = function (changes) {
            if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
                this._stateChanges.next();
            }
        };
        MatTab.prototype.ngOnDestroy = function () {
            this._stateChanges.complete();
        };
        MatTab.prototype.ngOnInit = function () {
            this._contentPortal = new portal.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
        };
        /** @nocollapse */
        MatTab.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_TAB_GROUP,] }] }
        ]; };
        MatTab.propDecorators = {
            templateLabel: [{ type: core.ContentChild, args: [MatTabLabel,] }],
            _explicitContent: [{ type: core.ContentChild, args: [MatTabContent, { read: core.TemplateRef, static: true },] }],
            _implicitContent: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
            textLabel: [{ type: core.Input, args: ['label',] }],
            ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
            ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }]
        };
MatTab.??fac = function MatTab_Factory(t) { return new (t || MatTab)(??ngcc0.????directiveInject(??ngcc0.ViewContainerRef), ??ngcc0.????directiveInject(MAT_TAB_GROUP, 8)); };
MatTab.??cmp = ??ngcc0.????defineComponent({ type: MatTab, selectors: [["mat-tab"]], contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ??ngcc0.????contentQuery(dirIndex, MatTabLabel, true);
        ??ngcc0.????staticContentQuery(dirIndex, MatTabContent, true, core.TemplateRef);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx.templateLabel = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._explicitContent = _t.first);
    } }, viewQuery: function MatTab_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????staticViewQuery(core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._implicitContent = _t.first);
    } }, inputs: { disabled: "disabled", textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, exportAs: ["matTab"], features: [??ngcc0.????InheritDefinitionFeature, ??ngcc0.????NgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatTab_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????projectionDef();
        ??ngcc0.????template(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTab, [{
        type: core.Component,
        args: [{
                selector: 'mat-tab',
                template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
                inputs: ['disabled'],
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                exportAs: 'matTab'
            }]
    }], function () { return [{ type: ??ngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [MAT_TAB_GROUP]
            }] }]; }, { templateLabel: [{
            type: core.ContentChild,
            args: [MatTabLabel]
        }], _explicitContent: [{
            type: core.ContentChild,
            args: [MatTabContent, { read: core.TemplateRef, static: true }]
        }], _implicitContent: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: true }]
        }], textLabel: [{
            type: core.Input,
            args: ['label']
        }], ariaLabel: [{
            type: core.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: core.Input,
            args: ['aria-labelledby']
        }] }); })();
        return MatTab;
    }(_MatTabMixinBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Animations used by the Material tabs.
     * @docs-private
     */
    var matTabsAnimations = {
        /** Animation translates a tab along the X axis. */
        translateTab: animations$1.trigger('translateTab', [
            // Note: transitions to `none` instead of 0, because some browsers might blur the content.
            animations$1.state('center, void, left-origin-center, right-origin-center', animations$1.style({ transform: 'none' })),
            // If the tab is either on the left or right, we additionally add a `min-height` of 1px
            // in order to ensure that the element has a height before its state changes. This is
            // necessary because Chrome does seem to skip the transition in RTL mode if the element does
            // not have a static height and is not rendered. See related issue: #9465
            animations$1.state('left', animations$1.style({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
            animations$1.state('right', animations$1.style({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),
            animations$1.transition('* => left, * => right, left => center, right => center', animations$1.animate('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')),
            animations$1.transition('void => left-origin-center', [
                animations$1.style({ transform: 'translate3d(-100%, 0, 0)' }),
                animations$1.animate('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
            ]),
            animations$1.transition('void => right-origin-center', [
                animations$1.style({ transform: 'translate3d(100%, 0, 0)' }),
                animations$1.animate('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
            ])
        ])
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The portal host directive for the contents of the tab.
     * @docs-private
     */
    var MatTabBodyPortal = /** @class */ (function (_super) {
        tslib.__extends(MatTabBodyPortal, _super);
        function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host, 
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
            var _this = _super.call(this, componentFactoryResolver, viewContainerRef, _document) || this;
            _this._host = _host;
            /** Subscription to events for when the tab body begins centering. */
            _this._centeringSub = rxjs.Subscription.EMPTY;
            /** Subscription to events for when the tab body finishes leaving from center position. */
            _this._leavingSub = rxjs.Subscription.EMPTY;
            return _this;
        }
        /** Set initial visibility or set up subscription for changing visibility. */
        MatTabBodyPortal.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this._centeringSub = this._host._beforeCentering
                .pipe(operators.startWith(this._host._isCenterPosition(this._host._position)))
                .subscribe(function (isCentering) {
                if (isCentering && !_this.hasAttached()) {
                    _this.attach(_this._host._content);
                }
            });
            this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
                _this.detach();
            });
        };
        /** Clean up centering subscription. */
        MatTabBodyPortal.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._centeringSub.unsubscribe();
            this._leavingSub.unsubscribe();
        };
        /** @nocollapse */
        MatTabBodyPortal.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef },
            { type: MatTabBody, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return MatTabBody; }),] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
MatTabBodyPortal.??fac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(??ngcc0.????directiveInject(??ngcc0.ComponentFactoryResolver), ??ngcc0.????directiveInject(??ngcc0.ViewContainerRef), ??ngcc0.????directiveInject(core.forwardRef(function () { return MatTabBody; })), ??ngcc0.????directiveInject(common.DOCUMENT)); };
MatTabBodyPortal.??dir = ??ngcc0.????defineDirective({ type: MatTabBodyPortal, selectors: [["", "matTabBodyHost", ""]], features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabBodyPortal, [{
        type: core.Directive,
        args: [{
                selector: '[matTabBodyHost]'
            }]
    }], function () { return [{ type: ??ngcc0.ComponentFactoryResolver }, { type: ??ngcc0.ViewContainerRef }, { type: MatTabBody, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return MatTabBody; })]
            }] }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, null); })();
        return MatTabBodyPortal;
    }(portal.CdkPortalOutlet));
    /**
     * Base class with all of the `MatTabBody` functionality.
     * @docs-private
     */
    var _MatTabBodyBase = /** @class */ (function () {
        function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
            var _this = this;
            this._elementRef = _elementRef;
            this._dir = _dir;
            /** Subscription to the directionality change observable. */
            this._dirChangeSubscription = rxjs.Subscription.EMPTY;
            /** Emits when an animation on the tab is complete. */
            this._translateTabComplete = new rxjs.Subject();
            /** Event emitted when the tab begins to animate towards the center as the active tab. */
            this._onCentering = new core.EventEmitter();
            /** Event emitted before the centering of the tab begins. */
            this._beforeCentering = new core.EventEmitter();
            /** Event emitted before the centering of the tab begins. */
            this._afterLeavingCenter = new core.EventEmitter();
            /** Event emitted when the tab completes its animation towards the center. */
            this._onCentered = new core.EventEmitter(true);
            // Note that the default value will always be overwritten by `MatTabBody`, but we need one
            // anyway to prevent the animations module from throwing an error if the body is used on its own.
            /** Duration for the tab's animation. */
            this.animationDuration = '500ms';
            if (_dir) {
                this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
                    _this._computePositionAnimationState(dir);
                    changeDetectorRef.markForCheck();
                });
            }
            // Ensure that we get unique animation events, because the `.done` callback can get
            // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
            this._translateTabComplete.pipe(operators.distinctUntilChanged(function (x, y) {
                return x.fromState === y.fromState && x.toState === y.toState;
            })).subscribe(function (event) {
                // If the transition to the center is complete, emit an event.
                if (_this._isCenterPosition(event.toState) && _this._isCenterPosition(_this._position)) {
                    _this._onCentered.emit();
                }
                if (_this._isCenterPosition(event.fromState) && !_this._isCenterPosition(_this._position)) {
                    _this._afterLeavingCenter.emit();
                }
            });
        }
        Object.defineProperty(_MatTabBodyBase.prototype, "position", {
            /** The shifted index position of the tab body, where zero represents the active center tab. */
            set: function (position) {
                this._positionIndex = position;
                this._computePositionAnimationState();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * After initialized, check if the content is centered and has an origin. If so, set the
         * special position states that transition the tab from the left or right before centering.
         */
        _MatTabBodyBase.prototype.ngOnInit = function () {
            if (this._position == 'center' && this.origin != null) {
                this._position = this._computePositionFromOrigin(this.origin);
            }
        };
        _MatTabBodyBase.prototype.ngOnDestroy = function () {
            this._dirChangeSubscription.unsubscribe();
            this._translateTabComplete.complete();
        };
        _MatTabBodyBase.prototype._onTranslateTabStarted = function (event) {
            var isCentering = this._isCenterPosition(event.toState);
            this._beforeCentering.emit(isCentering);
            if (isCentering) {
                this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
            }
        };
        /** The text direction of the containing app. */
        _MatTabBodyBase.prototype._getLayoutDirection = function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        /** Whether the provided position state is considered center, regardless of origin. */
        _MatTabBodyBase.prototype._isCenterPosition = function (position) {
            return position == 'center' ||
                position == 'left-origin-center' ||
                position == 'right-origin-center';
        };
        /** Computes the position state that will be used for the tab-body animation trigger. */
        _MatTabBodyBase.prototype._computePositionAnimationState = function (dir) {
            if (dir === void 0) { dir = this._getLayoutDirection(); }
            if (this._positionIndex < 0) {
                this._position = dir == 'ltr' ? 'left' : 'right';
            }
            else if (this._positionIndex > 0) {
                this._position = dir == 'ltr' ? 'right' : 'left';
            }
            else {
                this._position = 'center';
            }
        };
        /**
         * Computes the position state based on the specified origin position. This is used if the
         * tab is becoming visible immediately after creation.
         */
        _MatTabBodyBase.prototype._computePositionFromOrigin = function (origin) {
            var dir = this._getLayoutDirection();
            if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
                return 'left-origin-center';
            }
            return 'right-origin-center';
        };
        /** @nocollapse */
        _MatTabBodyBase.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef }
        ]; };
        _MatTabBodyBase.propDecorators = {
            _onCentering: [{ type: core.Output }],
            _beforeCentering: [{ type: core.Output }],
            _afterLeavingCenter: [{ type: core.Output }],
            _onCentered: [{ type: core.Output }],
            _content: [{ type: core.Input, args: ['content',] }],
            origin: [{ type: core.Input }],
            animationDuration: [{ type: core.Input }],
            position: [{ type: core.Input }]
        };
_MatTabBodyBase.??fac = function _MatTabBodyBase_Factory(t) { return new (t || _MatTabBodyBase)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef)); };
_MatTabBodyBase.??dir = ??ngcc0.????defineDirective({ type: _MatTabBodyBase, inputs: { animationDuration: "animationDuration", position: "position", _content: ["content", "_content"], origin: "origin" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _afterLeavingCenter: "_afterLeavingCenter", _onCentered: "_onCentered" } });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(_MatTabBodyBase, [{
        type: core.Directive
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.ChangeDetectorRef }]; }, { _onCentering: [{
            type: core.Output
        }], _beforeCentering: [{
            type: core.Output
        }], _afterLeavingCenter: [{
            type: core.Output
        }], _onCentered: [{
            type: core.Output
        }], animationDuration: [{
            type: core.Input
        }], position: [{
            type: core.Input
        }], _content: [{
            type: core.Input,
            args: ['content']
        }], origin: [{
            type: core.Input
        }] }); })();
        return _MatTabBodyBase;
    }());
    /**
     * Wrapper for the contents of a tab.
     * @docs-private
     */
    var MatTabBody = /** @class */ (function (_super) {
        tslib.__extends(MatTabBody, _super);
        function MatTabBody(elementRef, dir, changeDetectorRef) {
            return _super.call(this, elementRef, dir, changeDetectorRef) || this;
        }
        /** @nocollapse */
        MatTabBody.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef }
        ]; };
        MatTabBody.propDecorators = {
            _portalHost: [{ type: core.ViewChild, args: [portal.PortalHostDirective,] }]
        };
MatTabBody.??fac = function MatTabBody_Factory(t) { return new (t || MatTabBody)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef)); };
MatTabBody.??cmp = ??ngcc0.????defineComponent({ type: MatTabBody, selectors: [["mat-tab-body"]], viewQuery: function MatTabBody_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????viewQuery(portal.PortalHostDirective, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._portalHost = _t.first);
    } }, hostAttrs: [1, "mat-tab-body"], features: [??ngcc0.????InheritDefinitionFeature], decls: 3, vars: 6, consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]], template: function MatTabBody_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????elementStart(0, "div", 0, 1);
        ??ngcc0.????listener("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) { return ctx._onTranslateTabStarted($event); })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) { return ctx._translateTabComplete.next($event); });
        ??ngcc0.????template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        ??ngcc0.????elementEnd();
    } if (rf & 2) {
        ??ngcc0.????property("@translateTab", ??ngcc0.????pureFunction2(3, _c2, ctx._position, ??ngcc0.????pureFunction1(1, _c1, ctx.animationDuration)));
    } }, directives: [MatTabBodyPortal], styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"], encapsulation: 2, data: { animation: [matTabsAnimations.translateTab] } });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabBody, [{
        type: core.Component,
        args: [{
                selector: 'mat-tab-body',
                template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
                encapsulation: core.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                animations: [matTabsAnimations.translateTab],
                host: {
                    'class': 'mat-tab-body'
                },
                styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.ChangeDetectorRef }]; }, { _portalHost: [{
            type: core.ViewChild,
            args: [portal.PortalHostDirective]
        }] }); })();
        return MatTabBody;
    }(_MatTabBodyBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token that can be used to provide the default options the tabs module. */
    var MAT_TABS_CONFIG = new core.InjectionToken('MAT_TABS_CONFIG');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Used to generate unique ID's for each tab component */
    var nextId = 0;
    /** A simple change event emitted on focus or selection changes. */
    var MatTabChangeEvent = /** @class */ (function () {
        function MatTabChangeEvent() {
        }
        return MatTabChangeEvent;
    }());
    // Boilerplate for applying mixins to MatTabGroup.
    /** @docs-private */
    var MatTabGroupMixinBase = /** @class */ (function () {
        function MatTabGroupMixinBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MatTabGroupMixinBase;
    }());
    var _MatTabGroupMixinBase = core$1.mixinColor(core$1.mixinDisableRipple(MatTabGroupMixinBase), 'primary');
    /**
     * Base class with all of the `MatTabGroupBase` functionality.
     * @docs-private
     */
    var _MatTabGroupBase = /** @class */ (function (_super) {
        tslib.__extends(_MatTabGroupBase, _super);
        function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
            var _this = _super.call(this, elementRef) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._animationMode = _animationMode;
            /** All of the tabs that belong to the group. */
            _this._tabs = new core.QueryList();
            /** The tab index that should be selected after the content has been checked. */
            _this._indexToSelect = 0;
            /** Snapshot of the height of the tab body wrapper before another tab is activated. */
            _this._tabBodyWrapperHeight = 0;
            /** Subscription to tabs being added/removed. */
            _this._tabsSubscription = rxjs.Subscription.EMPTY;
            /** Subscription to changes in the tab labels. */
            _this._tabLabelSubscription = rxjs.Subscription.EMPTY;
            _this._dynamicHeight = false;
            _this._selectedIndex = null;
            /** Position of the tab header. */
            _this.headerPosition = 'above';
            /** Output to enable support for two-way binding on `[(selectedIndex)]` */
            _this.selectedIndexChange = new core.EventEmitter();
            /** Event emitted when focus has changed within a tab group. */
            _this.focusChange = new core.EventEmitter();
            /** Event emitted when the body animation has completed */
            _this.animationDone = new core.EventEmitter();
            /** Event emitted when the tab selection has changed. */
            _this.selectedTabChange = new core.EventEmitter(true);
            _this._groupId = nextId++;
            _this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
                defaultConfig.animationDuration : '500ms';
            _this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ?
                defaultConfig.disablePagination : false;
            return _this;
        }
        Object.defineProperty(_MatTabGroupBase.prototype, "dynamicHeight", {
            /** Whether the tab group should grow to the size of the active tab. */
            get: function () { return this._dynamicHeight; },
            set: function (value) { this._dynamicHeight = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatTabGroupBase.prototype, "selectedIndex", {
            /** The index of the active tab. */
            get: function () { return this._selectedIndex; },
            set: function (value) {
                this._indexToSelect = coercion.coerceNumberProperty(value, null);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatTabGroupBase.prototype, "animationDuration", {
            /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
            get: function () { return this._animationDuration; },
            set: function (value) {
                this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatTabGroupBase.prototype, "backgroundColor", {
            /** Background color of the tab group. */
            get: function () { return this._backgroundColor; },
            set: function (value) {
                var nativeElement = this._elementRef.nativeElement;
                nativeElement.classList.remove("mat-background-" + this.backgroundColor);
                if (value) {
                    nativeElement.classList.add("mat-background-" + value);
                }
                this._backgroundColor = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * After the content is checked, this component knows what tabs have been defined
         * and what the selected index should be. This is where we can know exactly what position
         * each tab should be in according to the new selected index, and additionally we know how
         * a new selected tab should transition in (from the left or right).
         */
        _MatTabGroupBase.prototype.ngAfterContentChecked = function () {
            var _this = this;
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex != indexToSelect) {
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(function () {
                    _this._tabs.forEach(function (tab, index) { return tab.isActive = index === indexToSelect; });
                    if (!isFirstRun_1) {
                        _this.selectedIndexChange.emit(indexToSelect);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this._tabs.forEach(function (tab, index) {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                    tab.origin = indexToSelect - _this._selectedIndex;
                }
            });
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this._changeDetectorRef.markForCheck();
            }
        };
        _MatTabGroupBase.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._subscribeToAllTabChanges();
            this._subscribeToTabLabels();
            // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.
            this._tabsSubscription = this._tabs.changes.subscribe(function () {
                var indexToSelect = _this._clampTabIndex(_this._indexToSelect);
                // Maintain the previously-selected tab if a new tab is added or removed and there is no
                // explicit change that selects a different tab.
                if (indexToSelect === _this._selectedIndex) {
                    var tabs = _this._tabs.toArray();
                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].isActive) {
                            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                            // adding a tab within the `selectedIndexChange` event.
                            _this._indexToSelect = _this._selectedIndex = i;
                            break;
                        }
                    }
                }
                _this._changeDetectorRef.markForCheck();
            });
        };
        /** Listens to changes in all of the tabs. */
        _MatTabGroupBase.prototype._subscribeToAllTabChanges = function () {
            var _this = this;
            // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
            // some that are inside of nested tab groups. We filter them out manually by checking that
            // the closest group to the tab is the current one.
            this._allTabs.changes
                .pipe(operators.startWith(this._allTabs))
                .subscribe(function (tabs) {
                _this._tabs.reset(tabs.filter(function (tab) {
                    // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
                    // once it becomes a required parameter in MatTab.
                    return !tab._closestTabGroup || tab._closestTabGroup === _this;
                }));
                _this._tabs.notifyOnChanges();
            });
        };
        _MatTabGroupBase.prototype.ngOnDestroy = function () {
            this._tabs.destroy();
            this._tabsSubscription.unsubscribe();
            this._tabLabelSubscription.unsubscribe();
        };
        /** Re-aligns the ink bar to the selected tab element. */
        _MatTabGroupBase.prototype.realignInkBar = function () {
            if (this._tabHeader) {
                this._tabHeader._alignInkBarToSelectedTab();
            }
        };
        _MatTabGroupBase.prototype._focusChanged = function (index) {
            this.focusChange.emit(this._createChangeEvent(index));
        };
        _MatTabGroupBase.prototype._createChangeEvent = function (index) {
            var event = new MatTabChangeEvent;
            event.index = index;
            if (this._tabs && this._tabs.length) {
                event.tab = this._tabs.toArray()[index];
            }
            return event;
        };
        /**
         * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
         * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
         * binding to be updated, we need to subscribe to changes in it and trigger change detection
         * manually.
         */
        _MatTabGroupBase.prototype._subscribeToTabLabels = function () {
            var _this = this;
            if (this._tabLabelSubscription) {
                this._tabLabelSubscription.unsubscribe();
            }
            this._tabLabelSubscription = rxjs.merge.apply(void 0, tslib.__spread(this._tabs.map(function (tab) { return tab._stateChanges; }))).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        };
        /** Clamps the given index to the bounds of 0 and the tabs length. */
        _MatTabGroupBase.prototype._clampTabIndex = function (index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
        };
        /** Returns a unique id for each tab label element */
        _MatTabGroupBase.prototype._getTabLabelId = function (i) {
            return "mat-tab-label-" + this._groupId + "-" + i;
        };
        /** Returns a unique id for each tab content element */
        _MatTabGroupBase.prototype._getTabContentId = function (i) {
            return "mat-tab-content-" + this._groupId + "-" + i;
        };
        /**
         * Sets the height of the body wrapper to the height of the activating tab if dynamic
         * height property is true.
         */
        _MatTabGroupBase.prototype._setTabBodyWrapperHeight = function (tabHeight) {
            if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
                return;
            }
            var wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.height = this._tabBodyWrapperHeight + 'px';
            // This conditional forces the browser to paint the height so that
            // the animation to the new height can have an origin.
            if (this._tabBodyWrapper.nativeElement.offsetHeight) {
                wrapper.style.height = tabHeight + 'px';
            }
        };
        /** Removes the height of the tab body wrapper. */
        _MatTabGroupBase.prototype._removeTabBodyWrapperHeight = function () {
            var wrapper = this._tabBodyWrapper.nativeElement;
            this._tabBodyWrapperHeight = wrapper.clientHeight;
            wrapper.style.height = '';
            this.animationDone.emit();
        };
        /** Handle click events, setting new selected index if appropriate. */
        _MatTabGroupBase.prototype._handleClick = function (tab, tabHeader, index) {
            if (!tab.disabled) {
                this.selectedIndex = tabHeader.focusIndex = index;
            }
        };
        /** Retrieves the tabindex for the tab. */
        _MatTabGroupBase.prototype._getTabIndex = function (tab, idx) {
            if (tab.disabled) {
                return null;
            }
            return this.selectedIndex === idx ? 0 : -1;
        };
        /** @nocollapse */
        _MatTabGroupBase.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [MAT_TABS_CONFIG,] }, { type: core.Optional }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        _MatTabGroupBase.propDecorators = {
            dynamicHeight: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            headerPosition: [{ type: core.Input }],
            animationDuration: [{ type: core.Input }],
            disablePagination: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            selectedIndexChange: [{ type: core.Output }],
            focusChange: [{ type: core.Output }],
            animationDone: [{ type: core.Output }],
            selectedTabChange: [{ type: core.Output }]
        };
_MatTabGroupBase.??fac = function _MatTabGroupBase_Factory(t) { return new (t || _MatTabGroupBase)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(MAT_TABS_CONFIG, 8), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
_MatTabGroupBase.??dir = ??ngcc0.????defineDirective({ type: _MatTabGroupBase, inputs: { dynamicHeight: "dynamicHeight", selectedIndex: "selectedIndex", animationDuration: "animationDuration", backgroundColor: "backgroundColor", headerPosition: "headerPosition", disablePagination: "disablePagination" }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(_MatTabGroupBase, [{
        type: core.Directive
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: core.Optional
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { dynamicHeight: [{
            type: core.Input
        }], selectedIndex: [{
            type: core.Input
        }], animationDuration: [{
            type: core.Input
        }], backgroundColor: [{
            type: core.Input
        }], headerPosition: [{
            type: core.Input
        }], disablePagination: [{
            type: core.Input
        }], selectedIndexChange: [{
            type: core.Output
        }], focusChange: [{
            type: core.Output
        }], animationDone: [{
            type: core.Output
        }], selectedTabChange: [{
            type: core.Output
        }] }); })();
        return _MatTabGroupBase;
    }(_MatTabGroupMixinBase));
    /**
     * Material design tab-group component. Supports basic tab pairs (label + content) and includes
     * animated ink-bar, keyboard navigation, and screen reader.
     * See: https://material.io/design/components/tabs.html
     */
    var MatTabGroup = /** @class */ (function (_super) {
        tslib.__extends(MatTabGroup, _super);
        function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
            return _super.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode) || this;
        }
        /** @nocollapse */
        MatTabGroup.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [MAT_TABS_CONFIG,] }, { type: core.Optional }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        MatTabGroup.propDecorators = {
            _allTabs: [{ type: core.ContentChildren, args: [MatTab, { descendants: true },] }],
            _tabBodyWrapper: [{ type: core.ViewChild, args: ['tabBodyWrapper',] }],
            _tabHeader: [{ type: core.ViewChild, args: ['tabHeader',] }]
        };
MatTabGroup.??fac = function MatTabGroup_Factory(t) { return new (t || MatTabGroup)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(MAT_TABS_CONFIG, 8), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatTabGroup.??cmp = ??ngcc0.????defineComponent({ type: MatTabGroup, selectors: [["mat-tab-group"]], contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ??ngcc0.????contentQuery(dirIndex, MatTab, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._allTabs = _t);
    } }, viewQuery: function MatTabGroup_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????viewQuery(_c3, true);
        ??ngcc0.????viewQuery(_c4, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabBodyWrapper = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabHeader = _t.first);
    } }, hostAttrs: [1, "mat-tab-group"], hostVars: 4, hostBindings: function MatTabGroup_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????classProp("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    } }, inputs: { color: "color", disableRipple: "disableRipple" }, exportAs: ["matTabGroup"], features: [??ngcc0.????ProvidersFeature([{
                provide: MAT_TAB_GROUP,
                useExisting: MatTabGroup
            }]), ??ngcc0.????InheritDefinitionFeature], decls: 6, vars: 7, consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]], template: function MatTabGroup_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????elementStart(0, "mat-tab-header", 0, 1);
        ??ngcc0.????listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) { return ctx._focusChanged($event); })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) { return ctx.selectedIndex = $event; });
        ??ngcc0.????template(2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementStart(3, "div", 3, 4);
        ??ngcc0.????template(5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        ??ngcc0.????elementEnd();
    } if (rf & 2) {
        ??ngcc0.????property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        ??ngcc0.????advance(2);
        ??ngcc0.????property("ngForOf", ctx._tabs);
        ??ngcc0.????advance(1);
        ??ngcc0.????classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        ??ngcc0.????advance(2);
        ??ngcc0.????property("ngForOf", ctx._tabs);
    } }, directives: function () { return [MatTabHeader, ??ngcc2.NgForOf, MatTabLabelWrapper, ??ngcc3.MatRipple, ??ngcc4.CdkMonitorFocus, ??ngcc2.NgIf, ??ngcc5.CdkPortalOutlet, MatTabBody]; }, styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabGroup, [{
        type: core.Component,
        args: [{
                selector: 'mat-tab-group',
                exportAs: 'matTabGroup',
                template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
                encapsulation: core.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                inputs: ['color', 'disableRipple'],
                providers: [{
                        provide: MAT_TAB_GROUP,
                        useExisting: MatTabGroup
                    }],
                host: {
                    'class': 'mat-tab-group',
                    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                    '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
                },
                styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [MAT_TABS_CONFIG]
            }, {
                type: core.Optional
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { _allTabs: [{
            type: core.ContentChildren,
            args: [MatTab, { descendants: true }]
        }], _tabBodyWrapper: [{
            type: core.ViewChild,
            args: ['tabBodyWrapper']
        }], _tabHeader: [{
            type: core.ViewChild,
            args: ['tabHeader']
        }] }); })();
        return MatTabGroup;
    }(_MatTabGroupBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Boilerplate for applying mixins to MatTabLabelWrapper.
    /** @docs-private */
    var MatTabLabelWrapperBase = /** @class */ (function () {
        function MatTabLabelWrapperBase() {
        }
        return MatTabLabelWrapperBase;
    }());
    var _MatTabLabelWrapperMixinBase = core$1.mixinDisabled(MatTabLabelWrapperBase);
    /**
     * Used in the `mat-tab-group` view to display tab labels.
     * @docs-private
     */
    var MatTabLabelWrapper = /** @class */ (function (_super) {
        tslib.__extends(MatTabLabelWrapper, _super);
        function MatTabLabelWrapper(elementRef) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            return _this;
        }
        /** Sets focus on the wrapper element */
        MatTabLabelWrapper.prototype.focus = function () {
            this.elementRef.nativeElement.focus();
        };
        MatTabLabelWrapper.prototype.getOffsetLeft = function () {
            return this.elementRef.nativeElement.offsetLeft;
        };
        MatTabLabelWrapper.prototype.getOffsetWidth = function () {
            return this.elementRef.nativeElement.offsetWidth;
        };
        /** @nocollapse */
        MatTabLabelWrapper.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
MatTabLabelWrapper.??fac = function MatTabLabelWrapper_Factory(t) { return new (t || MatTabLabelWrapper)(??ngcc0.????directiveInject(??ngcc0.ElementRef)); };
MatTabLabelWrapper.??dir = ??ngcc0.????defineDirective({ type: MatTabLabelWrapper, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????attribute("aria-disabled", !!ctx.disabled);
        ??ngcc0.????classProp("mat-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabLabelWrapper, [{
        type: core.Directive,
        args: [{
                selector: '[matTabLabelWrapper]',
                inputs: ['disabled'],
                host: {
                    '[class.mat-tab-disabled]': 'disabled',
                    '[attr.aria-disabled]': '!!disabled'
                }
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }]; }, null); })();
        return MatTabLabelWrapper;
    }(_MatTabLabelWrapperMixinBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Config used to bind passive event listeners */
    var passiveEventListenerOptions = platform.normalizePassiveListenerOptions({ passive: true });
    /**
     * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
     * provide a small affordance to the label next to it.
     */
    var EXAGGERATED_OVERSCROLL = 60;
    /**
     * Amount of milliseconds to wait before starting to scroll the header automatically.
     * Set a little conservatively in order to handle fake events dispatched on touch devices.
     */
    var HEADER_SCROLL_DELAY = 650;
    /**
     * Interval in milliseconds at which to scroll the header
     * while the user is holding their pointer.
     */
    var HEADER_SCROLL_INTERVAL = 100;
    /**
     * Base class for a tab header that supported pagination.
     * @docs-private
     */
    var MatPaginatedTabHeader = /** @class */ (function () {
        function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, 
        /**
         * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
         * parameters to become required.
         */
        _platform, _animationMode) {
            var _this = this;
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._viewportRuler = _viewportRuler;
            this._dir = _dir;
            this._ngZone = _ngZone;
            this._platform = _platform;
            this._animationMode = _animationMode;
            /** The distance in pixels that the tab labels should be translated to the left. */
            this._scrollDistance = 0;
            /** Whether the header should scroll to the selected index after the view has been checked. */
            this._selectedIndexChanged = false;
            /** Emits when the component is destroyed. */
            this._destroyed = new rxjs.Subject();
            /** Whether the controls for pagination should be displayed */
            this._showPaginationControls = false;
            /** Whether the tab list can be scrolled more towards the end of the tab label list. */
            this._disableScrollAfter = true;
            /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
            this._disableScrollBefore = true;
            /** Stream that will stop the automated scrolling. */
            this._stopScrolling = new rxjs.Subject();
            /**
             * Whether pagination should be disabled. This can be used to avoid unnecessary
             * layout recalculations if it's known that pagination won't be required.
             */
            this.disablePagination = false;
            this._selectedIndex = 0;
            /** Event emitted when the option is selected. */
            this.selectFocusedIndex = new core.EventEmitter();
            /** Event emitted when a label is focused. */
            this.indexFocused = new core.EventEmitter();
            // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
            _ngZone.runOutsideAngular(function () {
                rxjs.fromEvent(_elementRef.nativeElement, 'mouseleave')
                    .pipe(operators.takeUntil(_this._destroyed))
                    .subscribe(function () {
                    _this._stopInterval();
                });
            });
        }
        Object.defineProperty(MatPaginatedTabHeader.prototype, "selectedIndex", {
            /** The index of the active tab. */
            get: function () { return this._selectedIndex; },
            set: function (value) {
                value = coercion.coerceNumberProperty(value);
                if (this._selectedIndex != value) {
                    this._selectedIndexChanged = true;
                    this._selectedIndex = value;
                    if (this._keyManager) {
                        this._keyManager.updateActiveItem(value);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        MatPaginatedTabHeader.prototype.ngAfterViewInit = function () {
            var _this = this;
            // We need to handle these events manually, because we want to bind passive event listeners.
            rxjs.fromEvent(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe(function () {
                _this._handlePaginatorPress('before');
            });
            rxjs.fromEvent(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe(function () {
                _this._handlePaginatorPress('after');
            });
        };
        MatPaginatedTabHeader.prototype.ngAfterContentInit = function () {
            var _this = this;
            var dirChange = this._dir ? this._dir.change : rxjs.of(null);
            var resize = this._viewportRuler.change(150);
            var realign = function () {
                _this.updatePagination();
                _this._alignInkBarToSelectedTab();
            };
            this._keyManager = new a11y.FocusKeyManager(this._items)
                .withHorizontalOrientation(this._getLayoutDirection())
                .withWrap();
            this._keyManager.updateActiveItem(0);
            // Defer the first call in order to allow for slower browsers to lay out the elements.
            // This helps in cases where the user lands directly on a page with paginated tabs.
            typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
            // On dir change or window resize, realign the ink bar and update the orientation of
            // the key manager if the direction has changed.
            rxjs.merge(dirChange, resize, this._items.changes).pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                realign();
                _this._keyManager.withHorizontalOrientation(_this._getLayoutDirection());
            });
            // If there is a change in the focus key manager we need to emit the `indexFocused`
            // event in order to provide a public event that notifies about focus changes. Also we realign
            // the tabs container by scrolling the new focused tab into the visible section.
            this._keyManager.change.pipe(operators.takeUntil(this._destroyed)).subscribe(function (newFocusIndex) {
                _this.indexFocused.emit(newFocusIndex);
                _this._setTabFocus(newFocusIndex);
            });
        };
        MatPaginatedTabHeader.prototype.ngAfterContentChecked = function () {
            // If the number of tab labels have changed, check if scrolling should be enabled
            if (this._tabLabelCount != this._items.length) {
                this.updatePagination();
                this._tabLabelCount = this._items.length;
                this._changeDetectorRef.markForCheck();
            }
            // If the selected index has changed, scroll to the label and check if the scrolling controls
            // should be disabled.
            if (this._selectedIndexChanged) {
                this._scrollToLabel(this._selectedIndex);
                this._checkScrollingControls();
                this._alignInkBarToSelectedTab();
                this._selectedIndexChanged = false;
                this._changeDetectorRef.markForCheck();
            }
            // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
            // then translate the header to reflect this.
            if (this._scrollDistanceChanged) {
                this._updateTabScrollPosition();
                this._scrollDistanceChanged = false;
                this._changeDetectorRef.markForCheck();
            }
        };
        MatPaginatedTabHeader.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
            this._stopScrolling.complete();
        };
        /** Handles keyboard events on the header. */
        MatPaginatedTabHeader.prototype._handleKeydown = function (event) {
            // We don't handle any key bindings with a modifier key.
            if (keycodes.hasModifierKey(event)) {
                return;
            }
            switch (event.keyCode) {
                case keycodes.HOME:
                    this._keyManager.setFirstItemActive();
                    event.preventDefault();
                    break;
                case keycodes.END:
                    this._keyManager.setLastItemActive();
                    event.preventDefault();
                    break;
                case keycodes.ENTER:
                case keycodes.SPACE:
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this._itemSelected(event);
                    break;
                default:
                    this._keyManager.onKeydown(event);
            }
        };
        /**
         * Callback for when the MutationObserver detects that the content has changed.
         */
        MatPaginatedTabHeader.prototype._onContentChanges = function () {
            var _this = this;
            var textContent = this._elementRef.nativeElement.textContent;
            // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).
            if (textContent !== this._currentTextContent) {
                this._currentTextContent = textContent || '';
                // The content observer runs outside the `NgZone` by default, which
                // means that we need to bring the callback back in ourselves.
                this._ngZone.run(function () {
                    _this.updatePagination();
                    _this._alignInkBarToSelectedTab();
                    _this._changeDetectorRef.markForCheck();
                });
            }
        };
        /**
         * Updates the view whether pagination should be enabled or not.
         *
         * WARNING: Calling this method can be very costly in terms of performance. It should be called
         * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
         * page.
         */
        MatPaginatedTabHeader.prototype.updatePagination = function () {
            this._checkPaginationEnabled();
            this._checkScrollingControls();
            this._updateTabScrollPosition();
        };
        Object.defineProperty(MatPaginatedTabHeader.prototype, "focusIndex", {
            /** Tracks which element has focus; used for keyboard navigation */
            get: function () {
                return this._keyManager ? this._keyManager.activeItemIndex : 0;
            },
            /** When the focus index is set, we must manually send focus to the correct label */
            set: function (value) {
                if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
                    return;
                }
                this._keyManager.setActiveItem(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
         * providing a valid index and return true.
         */
        MatPaginatedTabHeader.prototype._isValidIndex = function (index) {
            if (!this._items) {
                return true;
            }
            var tab = this._items ? this._items.toArray()[index] : null;
            return !!tab && !tab.disabled;
        };
        /**
         * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
         * scrolling is enabled.
         */
        MatPaginatedTabHeader.prototype._setTabFocus = function (tabIndex) {
            if (this._showPaginationControls) {
                this._scrollToLabel(tabIndex);
            }
            if (this._items && this._items.length) {
                this._items.toArray()[tabIndex].focus();
                // Do not let the browser manage scrolling to focus the element, this will be handled
                // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
                // should be the full width minus the offset width.
                var containerEl = this._tabListContainer.nativeElement;
                var dir = this._getLayoutDirection();
                if (dir == 'ltr') {
                    containerEl.scrollLeft = 0;
                }
                else {
                    containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
                }
            }
        };
        /** The layout direction of the containing app. */
        MatPaginatedTabHeader.prototype._getLayoutDirection = function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
        MatPaginatedTabHeader.prototype._updateTabScrollPosition = function () {
            if (this.disablePagination) {
                return;
            }
            var scrollDistance = this.scrollDistance;
            var platform = this._platform;
            var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            // Don't use `translate3d` here because we don't want to create a new layer. A new layer
            // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
            // and ripples will exceed the boundaries of the visible tab bar.
            // See: https://github.com/angular/components/issues/10276
            // We round the `transform` here, because transforms with sub-pixel precision cause some
            // browsers to blur the content of the element.
            this._tabList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
            // Setting the `transform` on IE will change the scroll offset of the parent, causing the
            // position to be thrown off in some cases. We have to reset it ourselves to ensure that
            // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
            // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
            // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.
            if (platform && (platform.TRIDENT || platform.EDGE)) {
                this._tabListContainer.nativeElement.scrollLeft = 0;
            }
        };
        Object.defineProperty(MatPaginatedTabHeader.prototype, "scrollDistance", {
            /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
            get: function () { return this._scrollDistance; },
            set: function (value) {
                this._scrollTo(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively). The distance to scroll is computed to be a third of the
         * length of the tab list view window.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        MatPaginatedTabHeader.prototype._scrollHeader = function (direction) {
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            // Move the scroll distance one-third the length of the tab list's viewport.
            var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
            return this._scrollTo(this._scrollDistance + scrollAmount);
        };
        /** Handles click events on the pagination arrows. */
        MatPaginatedTabHeader.prototype._handlePaginatorClick = function (direction) {
            this._stopInterval();
            this._scrollHeader(direction);
        };
        /**
         * Moves the tab list such that the desired tab label (marked by index) is moved into view.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        MatPaginatedTabHeader.prototype._scrollToLabel = function (labelIndex) {
            if (this.disablePagination) {
                return;
            }
            var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
            if (!selectedLabel) {
                return;
            }
            // The view length is the visible width of the tab labels.
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            var _a = selectedLabel.elementRef.nativeElement, offsetLeft = _a.offsetLeft, offsetWidth = _a.offsetWidth;
            var labelBeforePos, labelAfterPos;
            if (this._getLayoutDirection() == 'ltr') {
                labelBeforePos = offsetLeft;
                labelAfterPos = labelBeforePos + offsetWidth;
            }
            else {
                labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
                labelBeforePos = labelAfterPos - offsetWidth;
            }
            var beforeVisiblePos = this.scrollDistance;
            var afterVisiblePos = this.scrollDistance + viewLength;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        };
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * tab list is wider than the size of the header container, then the pagination controls should
         * be shown.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        MatPaginatedTabHeader.prototype._checkPaginationEnabled = function () {
            if (this.disablePagination) {
                this._showPaginationControls = false;
            }
            else {
                var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
                if (!isEnabled) {
                    this.scrollDistance = 0;
                }
                if (isEnabled !== this._showPaginationControls) {
                    this._changeDetectorRef.markForCheck();
                }
                this._showPaginationControls = isEnabled;
            }
        };
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        MatPaginatedTabHeader.prototype._checkScrollingControls = function () {
            if (this.disablePagination) {
                this._disableScrollAfter = this._disableScrollBefore = true;
            }
            else {
                // Check if the pagination arrows should be activated.
                this._disableScrollBefore = this.scrollDistance == 0;
                this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        MatPaginatedTabHeader.prototype._getMaxScrollDistance = function () {
            var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
            var viewLength = this._tabListContainer.nativeElement.offsetWidth;
            return (lengthOfTabList - viewLength) || 0;
        };
        /** Tells the ink-bar to align itself to the current label wrapper */
        MatPaginatedTabHeader.prototype._alignInkBarToSelectedTab = function () {
            var selectedItem = this._items && this._items.length ?
                this._items.toArray()[this.selectedIndex] : null;
            var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
            if (selectedLabelWrapper) {
                this._inkBar.alignToElement(selectedLabelWrapper);
            }
            else {
                this._inkBar.hide();
            }
        };
        /** Stops the currently-running paginator interval.  */
        MatPaginatedTabHeader.prototype._stopInterval = function () {
            this._stopScrolling.next();
        };
        /**
         * Handles the user pressing down on one of the paginators.
         * Starts scrolling the header after a certain amount of time.
         * @param direction In which direction the paginator should be scrolled.
         */
        MatPaginatedTabHeader.prototype._handlePaginatorPress = function (direction, mouseEvent) {
            var _this = this;
            // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
            // null check the `button`, but we do it so we don't break tests that use fake events.
            if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
                return;
            }
            // Avoid overlapping timers.
            this._stopInterval();
            // Start a timer after the delay and keep firing based on the interval.
            rxjs.timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
                // Keep the timer going until something tells it to stop or the component is destroyed.
                .pipe(operators.takeUntil(rxjs.merge(this._stopScrolling, this._destroyed)))
                .subscribe(function () {
                var _a = _this._scrollHeader(direction), maxScrollDistance = _a.maxScrollDistance, distance = _a.distance;
                // Stop the timer if we've reached the start or the end.
                if (distance === 0 || distance >= maxScrollDistance) {
                    _this._stopInterval();
                }
            });
        };
        /**
         * Scrolls the header to a given position.
         * @param position Position to which to scroll.
         * @returns Information on the current scroll distance and the maximum.
         */
        MatPaginatedTabHeader.prototype._scrollTo = function (position) {
            if (this.disablePagination) {
                return { maxScrollDistance: 0, distance: 0 };
            }
            var maxScrollDistance = this._getMaxScrollDistance();
            this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this._scrollDistanceChanged = true;
            this._checkScrollingControls();
            return { maxScrollDistance: maxScrollDistance, distance: this._scrollDistance };
        };
        /** @nocollapse */
        MatPaginatedTabHeader.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        MatPaginatedTabHeader.propDecorators = {
            disablePagination: [{ type: core.Input }]
        };
MatPaginatedTabHeader.??fac = function MatPaginatedTabHeader_Factory(t) { return new (t || MatPaginatedTabHeader)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc6.ViewportRuler), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc7.Platform), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatPaginatedTabHeader.??dir = ??ngcc0.????defineDirective({ type: MatPaginatedTabHeader, inputs: { disablePagination: "disablePagination" } });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatPaginatedTabHeader, [{
        type: core.Directive
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc6.ViewportRuler }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.NgZone }, { type: ??ngcc7.Platform }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { disablePagination: [{
            type: core.Input
        }] }); })();
        return MatPaginatedTabHeader;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Base class with all of the `MatTabHeader` functionality.
     * @docs-private
     */
    var _MatTabHeaderBase = /** @class */ (function (_super) {
        tslib.__extends(_MatTabHeaderBase, _super);
        function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
        // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        animationMode) {
            var _this = _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
            _this._disableRipple = false;
            return _this;
        }
        Object.defineProperty(_MatTabHeaderBase.prototype, "disableRipple", {
            /** Whether the ripple effect is disabled or not. */
            get: function () { return this._disableRipple; },
            set: function (value) { this._disableRipple = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        _MatTabHeaderBase.prototype._itemSelected = function (event) {
            event.preventDefault();
        };
        /** @nocollapse */
        _MatTabHeaderBase.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        _MatTabHeaderBase.propDecorators = {
            disableRipple: [{ type: core.Input }]
        };
_MatTabHeaderBase.??fac = function _MatTabHeaderBase_Factory(t) { return new (t || _MatTabHeaderBase)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc6.ViewportRuler), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc7.Platform), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
_MatTabHeaderBase.??dir = ??ngcc0.????defineDirective({ type: _MatTabHeaderBase, inputs: { disableRipple: "disableRipple" }, features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(_MatTabHeaderBase, [{
        type: core.Directive
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc6.ViewportRuler }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.NgZone }, { type: ??ngcc7.Platform }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { disableRipple: [{
            type: core.Input
        }] }); })();
        return _MatTabHeaderBase;
    }(MatPaginatedTabHeader));
    /**
     * The header of the tab group which displays a list of all the tabs in the tab group. Includes
     * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
     * width of the header container, then arrows will be displayed to allow the user to scroll
     * left and right across the header.
     * @docs-private
     */
    var MatTabHeader = /** @class */ (function (_super) {
        tslib.__extends(MatTabHeader, _super);
        function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
        // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        animationMode) {
            return _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
        }
        /** @nocollapse */
        MatTabHeader.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        MatTabHeader.propDecorators = {
            _items: [{ type: core.ContentChildren, args: [MatTabLabelWrapper, { descendants: false },] }],
            _inkBar: [{ type: core.ViewChild, args: [MatInkBar, { static: true },] }],
            _tabListContainer: [{ type: core.ViewChild, args: ['tabListContainer', { static: true },] }],
            _tabList: [{ type: core.ViewChild, args: ['tabList', { static: true },] }],
            _nextPaginator: [{ type: core.ViewChild, args: ['nextPaginator',] }],
            _previousPaginator: [{ type: core.ViewChild, args: ['previousPaginator',] }]
        };
MatTabHeader.??fac = function MatTabHeader_Factory(t) { return new (t || MatTabHeader)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc6.ViewportRuler), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc7.Platform), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatTabHeader.??cmp = ??ngcc0.????defineComponent({ type: MatTabHeader, selectors: [["mat-tab-header"]], contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ??ngcc0.????contentQuery(dirIndex, MatTabLabelWrapper, false);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._items = _t);
    } }, viewQuery: function MatTabHeader_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????staticViewQuery(MatInkBar, true);
        ??ngcc0.????staticViewQuery(_c5, true);
        ??ngcc0.????staticViewQuery(_c6, true);
        ??ngcc0.????viewQuery(_c7, true);
        ??ngcc0.????viewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._inkBar = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabListContainer = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabList = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._nextPaginator = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-header"], hostVars: 4, hostBindings: function MatTabHeader_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????classProp("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    } }, inputs: { selectedIndex: "selectedIndex" }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" }, features: [??ngcc0.????InheritDefinitionFeature], ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabHeader_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????projectionDef();
        ??ngcc0.????elementStart(0, "div", 0, 1);
        ??ngcc0.????listener("click", function MatTabHeader_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabHeader_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        ??ngcc0.????element(2, "div", 2);
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementStart(3, "div", 3, 4);
        ??ngcc0.????listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        ??ngcc0.????elementStart(5, "div", 5, 6);
        ??ngcc0.????listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        ??ngcc0.????elementStart(7, "div", 7);
        ??ngcc0.????projection(8);
        ??ngcc0.????elementEnd();
        ??ngcc0.????element(9, "mat-ink-bar");
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementStart(10, "div", 8, 9);
        ??ngcc0.????listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabHeader_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabHeader_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        ??ngcc0.????element(12, "div", 2);
        ??ngcc0.????elementEnd();
    } if (rf & 2) {
        ??ngcc0.????classProp("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        ??ngcc0.????property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        ??ngcc0.????advance(5);
        ??ngcc0.????classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        ??ngcc0.????advance(5);
        ??ngcc0.????classProp("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        ??ngcc0.????property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [??ngcc3.MatRipple, ??ngcc8.CdkObserveContent, MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabHeader, [{
        type: core.Component,
        args: [{
                selector: 'mat-tab-header',
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                inputs: ['selectedIndex'],
                outputs: ['selectFocusedIndex', 'indexFocused'],
                encapsulation: core.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                host: {
                    'class': 'mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
                },
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc6.ViewportRuler }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.NgZone }, { type: ??ngcc7.Platform }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { _items: [{
            type: core.ContentChildren,
            args: [MatTabLabelWrapper, { descendants: false }]
        }], _inkBar: [{
            type: core.ViewChild,
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: core.ViewChild,
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: core.ViewChild,
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: core.ViewChild,
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: core.ViewChild,
            args: ['previousPaginator']
        }] }); })();
        return MatTabHeader;
    }(_MatTabHeaderBase));

    /**
     * Base class with all of the `MatTabNav` functionality.
     * @docs-private
     */
    var _MatTabNavBase = /** @class */ (function (_super) {
        tslib.__extends(_MatTabNavBase, _super);
        function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
        /**
         * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
         */
        platform, animationMode) {
            var _this = _super.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) || this;
            _this._disableRipple = false;
            /** Theme color of the nav bar. */
            _this.color = 'primary';
            return _this;
        }
        Object.defineProperty(_MatTabNavBase.prototype, "backgroundColor", {
            /** Background color of the tab nav. */
            get: function () { return this._backgroundColor; },
            set: function (value) {
                var classList = this._elementRef.nativeElement.classList;
                classList.remove("mat-background-" + this.backgroundColor);
                if (value) {
                    classList.add("mat-background-" + value);
                }
                this._backgroundColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatTabNavBase.prototype, "disableRipple", {
            /** Whether the ripple effect is disabled or not. */
            get: function () { return this._disableRipple; },
            set: function (value) { this._disableRipple = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        _MatTabNavBase.prototype._itemSelected = function () {
            // noop
        };
        _MatTabNavBase.prototype.ngAfterContentInit = function () {
            var _this = this;
            // We need this to run before the `changes` subscription in parent to ensure that the
            // selectedIndex is up-to-date by the time the super class starts looking for it.
            this._items.changes.pipe(operators.startWith(null), operators.takeUntil(this._destroyed)).subscribe(function () {
                _this.updateActiveLink();
            });
            _super.prototype.ngAfterContentInit.call(this);
        };
        /**
         * Notifies the component that the active link has been changed.
         * @breaking-change 8.0.0 `element` parameter to be removed.
         */
        _MatTabNavBase.prototype.updateActiveLink = function (_element) {
            if (!this._items) {
                return;
            }
            var items = this._items.toArray();
            for (var i = 0; i < items.length; i++) {
                if (items[i].active) {
                    this.selectedIndex = i;
                    this._changeDetectorRef.markForCheck();
                    return;
                }
            }
            // The ink bar should hide itself if no items are active.
            this.selectedIndex = -1;
            this._inkBar.hide();
        };
        /** @nocollapse */
        _MatTabNavBase.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: platform.Platform, decorators: [{ type: core.Optional }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        _MatTabNavBase.propDecorators = {
            backgroundColor: [{ type: core.Input }],
            disableRipple: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
_MatTabNavBase.??fac = function _MatTabNavBase_Factory(t) { return new (t || _MatTabNavBase)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc6.ViewportRuler), ??ngcc0.????directiveInject(??ngcc7.Platform, 8), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
_MatTabNavBase.??dir = ??ngcc0.????defineDirective({ type: _MatTabNavBase, inputs: { backgroundColor: "backgroundColor", disableRipple: "disableRipple", color: "color" }, features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(_MatTabNavBase, [{
        type: core.Directive
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.NgZone }, { type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc6.ViewportRuler }, { type: ??ngcc7.Platform, decorators: [{
                type: core.Optional
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { backgroundColor: [{
            type: core.Input
        }], disableRipple: [{
            type: core.Input
        }], color: [{
            type: core.Input
        }] }); })();
        return _MatTabNavBase;
    }(MatPaginatedTabHeader));
    /**
     * Navigation component matching the styles of the tab group header.
     * Provides anchored navigation with animated ink bar.
     */
    var MatTabNav = /** @class */ (function (_super) {
        tslib.__extends(MatTabNav, _super);
        function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
        /**
         * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
         */
        platform, animationMode) {
            return _super.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) || this;
        }
        /** @nocollapse */
        MatTabNav.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: scrolling.ViewportRuler },
            { type: platform.Platform, decorators: [{ type: core.Optional }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        MatTabNav.propDecorators = {
            _items: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return MatTabLink; }), { descendants: true },] }],
            _inkBar: [{ type: core.ViewChild, args: [MatInkBar, { static: true },] }],
            _tabListContainer: [{ type: core.ViewChild, args: ['tabListContainer', { static: true },] }],
            _tabList: [{ type: core.ViewChild, args: ['tabList', { static: true },] }],
            _nextPaginator: [{ type: core.ViewChild, args: ['nextPaginator',] }],
            _previousPaginator: [{ type: core.ViewChild, args: ['previousPaginator',] }]
        };
MatTabNav.??fac = function MatTabNav_Factory(t) { return new (t || MatTabNav)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc1.Directionality, 8), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc6.ViewportRuler), ??ngcc0.????directiveInject(??ngcc7.Platform, 8), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatTabNav.??cmp = ??ngcc0.????defineComponent({ type: MatTabNav, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ??ngcc0.????contentQuery(dirIndex, MatTabLink, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._items = _t);
    } }, viewQuery: function MatTabNav_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????staticViewQuery(MatInkBar, true);
        ??ngcc0.????staticViewQuery(_c5, true);
        ??ngcc0.????staticViewQuery(_c6, true);
        ??ngcc0.????viewQuery(_c7, true);
        ??ngcc0.????viewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._inkBar = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabListContainer = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._tabList = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._nextPaginator = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"], hostVars: 10, hostBindings: function MatTabNav_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????classProp("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { color: "color" }, exportAs: ["matTabNavBar", "matTabNav"], features: [??ngcc0.????InheritDefinitionFeature], attrs: _c9, ngContentSelectors: _c0, decls: 13, vars: 6, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabNav_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????projectionDef();
        ??ngcc0.????elementStart(0, "div", 0, 1);
        ??ngcc0.????listener("click", function MatTabNav_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabNav_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        ??ngcc0.????element(2, "div", 2);
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementStart(3, "div", 3, 4);
        ??ngcc0.????listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        ??ngcc0.????elementStart(5, "div", 5, 6);
        ??ngcc0.????listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        ??ngcc0.????elementStart(7, "div", 7);
        ??ngcc0.????projection(8);
        ??ngcc0.????elementEnd();
        ??ngcc0.????element(9, "mat-ink-bar");
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementEnd();
        ??ngcc0.????elementStart(10, "div", 8, 9);
        ??ngcc0.????listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabNav_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabNav_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        ??ngcc0.????element(12, "div", 2);
        ??ngcc0.????elementEnd();
    } if (rf & 2) {
        ??ngcc0.????classProp("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        ??ngcc0.????property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        ??ngcc0.????advance(10);
        ??ngcc0.????classProp("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        ??ngcc0.????property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [??ngcc3.MatRipple, ??ngcc8.CdkObserveContent, MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabNav, [{
        type: core.Component,
        args: [{
                selector: '[mat-tab-nav-bar]',
                exportAs: 'matTabNavBar, matTabNav',
                inputs: ['color'],
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div class=\"mat-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                host: {
                    'class': 'mat-tab-nav-bar mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"'
                },
                encapsulation: core.ViewEncapsulation.None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: core.ChangeDetectionStrategy.Default,
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc0.NgZone }, { type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc6.ViewportRuler }, { type: ??ngcc7.Platform, decorators: [{
                type: core.Optional
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { _items: [{
            type: core.ContentChildren,
            args: [core.forwardRef(function () { return MatTabLink; }), { descendants: true }]
        }], _inkBar: [{
            type: core.ViewChild,
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: core.ViewChild,
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: core.ViewChild,
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: core.ViewChild,
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: core.ViewChild,
            args: ['previousPaginator']
        }] }); })();
        return MatTabNav;
    }(_MatTabNavBase));
    // Boilerplate for applying mixins to MatTabLink.
    var MatTabLinkMixinBase = /** @class */ (function () {
        function MatTabLinkMixinBase() {
        }
        return MatTabLinkMixinBase;
    }());
    var _MatTabLinkMixinBase = core$1.mixinTabIndex(core$1.mixinDisableRipple(core$1.mixinDisabled(MatTabLinkMixinBase)));
    /** Base class with all of the `MatTabLink` functionality. */
    var _MatTabLinkBase = /** @class */ (function (_super) {
        tslib.__extends(_MatTabLinkBase, _super);
        function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
            var _this = _super.call(this) || this;
            _this._tabNavBar = _tabNavBar;
            _this.elementRef = elementRef;
            _this._focusMonitor = _focusMonitor;
            /** Whether the tab link is active or not. */
            _this._isActive = false;
            _this.rippleConfig = globalRippleOptions || {};
            _this.tabIndex = parseInt(tabIndex) || 0;
            if (animationMode === 'NoopAnimations') {
                _this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
            }
            _focusMonitor.monitor(elementRef);
            return _this;
        }
        Object.defineProperty(_MatTabLinkBase.prototype, "active", {
            /** Whether the link is active. */
            get: function () { return this._isActive; },
            set: function (value) {
                if (value !== this._isActive) {
                    this._isActive = value;
                    this._tabNavBar.updateActiveLink(this.elementRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(_MatTabLinkBase.prototype, "rippleDisabled", {
            /**
             * Whether ripples are disabled on interaction.
             * @docs-private
             */
            get: function () {
                return this.disabled || this.disableRipple || this._tabNavBar.disableRipple ||
                    !!this.rippleConfig.disabled;
            },
            enumerable: true,
            configurable: true
        });
        _MatTabLinkBase.prototype.focus = function () {
            this.elementRef.nativeElement.focus();
        };
        _MatTabLinkBase.prototype.ngOnDestroy = function () {
            this._focusMonitor.stopMonitoring(this.elementRef);
        };
        /** @nocollapse */
        _MatTabLinkBase.ctorParameters = function () { return [
            { type: _MatTabNavBase },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
            { type: a11y.FocusMonitor },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        _MatTabLinkBase.propDecorators = {
            active: [{ type: core.Input }]
        };
_MatTabLinkBase.??fac = function _MatTabLinkBase_Factory(t) { return new (t || _MatTabLinkBase)(??ngcc0.????directiveInject(_MatTabNavBase), ??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(core$1.MAT_RIPPLE_GLOBAL_OPTIONS, 8), ??ngcc0.????injectAttribute('tabindex'), ??ngcc0.????directiveInject(??ngcc4.FocusMonitor), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
_MatTabLinkBase.??dir = ??ngcc0.????defineDirective({ type: _MatTabLinkBase, inputs: { active: "active" }, features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(_MatTabLinkBase, [{
        type: core.Directive
    }], function () { return [{ type: _MatTabNavBase }, { type: ??ngcc0.ElementRef }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: core.Attribute,
                args: ['tabindex']
            }] }, { type: ??ngcc4.FocusMonitor }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, { active: [{
            type: core.Input
        }] }); })();
        return _MatTabLinkBase;
    }(_MatTabLinkMixinBase));
    /**
     * Link inside of a `mat-tab-nav-bar`.
     */
    var MatTabLink = /** @class */ (function (_super) {
        tslib.__extends(MatTabLink, _super);
        function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
            var _this = _super.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode) || this;
            _this._tabLinkRipple = new core$1.RippleRenderer(_this, ngZone, elementRef, platform);
            _this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
            return _this;
        }
        MatTabLink.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._tabLinkRipple._removeTriggerEvents();
        };
        /** @nocollapse */
        MatTabLink.ctorParameters = function () { return [
            { type: MatTabNav },
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
            { type: String, decorators: [{ type: core.Attribute, args: ['tabindex',] }] },
            { type: a11y.FocusMonitor },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
MatTabLink.??fac = function MatTabLink_Factory(t) { return new (t || MatTabLink)(??ngcc0.????directiveInject(MatTabNav), ??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc7.Platform), ??ngcc0.????directiveInject(core$1.MAT_RIPPLE_GLOBAL_OPTIONS, 8), ??ngcc0.????injectAttribute('tabindex'), ??ngcc0.????directiveInject(??ngcc4.FocusMonitor), ??ngcc0.????directiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatTabLink.??dir = ??ngcc0.????defineDirective({ type: MatTabLink, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mat-tab-link"], hostVars: 7, hostBindings: function MatTabLink_HostBindings(rf, ctx) { if (rf & 2) {
        ??ngcc0.????attribute("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        ??ngcc0.????classProp("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matTabLink"], features: [??ngcc0.????InheritDefinitionFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabLink, [{
        type: core.Directive,
        args: [{
                selector: '[mat-tab-link], [matTabLink]',
                exportAs: 'matTabLink',
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                host: {
                    'class': 'mat-tab-link',
                    '[attr.aria-current]': 'active ? "page" : null',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabIndex]': 'tabIndex',
                    '[class.mat-tab-disabled]': 'disabled',
                    '[class.mat-tab-label-active]': 'active'
                }
            }]
    }], function () { return [{ type: MatTabNav }, { type: ??ngcc0.ElementRef }, { type: ??ngcc0.NgZone }, { type: ??ngcc7.Platform }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [core$1.MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: core.Attribute,
                args: ['tabindex']
            }] }, { type: ??ngcc4.FocusMonitor }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
        return MatTabLink;
    }(_MatTabLinkBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatTabsModule = /** @class */ (function () {
        function MatTabsModule() {
        }
MatTabsModule.??mod = ??ngcc0.????defineNgModule({ type: MatTabsModule });
MatTabsModule.??inj = ??ngcc0.????defineInjector({ factory: function MatTabsModule_Factory(t) { return new (t || MatTabsModule)(); }, imports: [[
            common.CommonModule,
            core$1.MatCommonModule,
            portal.PortalModule,
            core$1.MatRippleModule,
            observers.ObserversModule,
            a11y.A11yModule,
        ], ??ngcc3.MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ??ngcc0.????setNgModuleScope(MatTabsModule, { declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent], imports: [??ngcc2.CommonModule, ??ngcc3.MatCommonModule, ??ngcc5.PortalModule, ??ngcc3.MatRippleModule, ??ngcc8.ObserversModule, ??ngcc4.A11yModule], exports: [??ngcc3.MatCommonModule, MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent] }); })();
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatTabsModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    core$1.MatCommonModule,
                    portal.PortalModule,
                    core$1.MatRippleModule,
                    observers.ObserversModule,
                    a11y.A11yModule,
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    core$1.MatCommonModule,
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatTabNav,
                    MatTabLink,
                    MatTabContent,
                ],
                declarations: [
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatInkBar,
                    MatTabLabelWrapper,
                    MatTabNav,
                    MatTabLink,
                    MatTabBody,
                    MatTabBodyPortal,
                    MatTabHeader,
                    MatTabContent,
                ]
            }]
    }], function () { return []; }, null); })();
        return MatTabsModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

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

    exports.MAT_TABS_CONFIG = MAT_TABS_CONFIG;
    exports.MAT_TAB_GROUP = MAT_TAB_GROUP;
    exports.MatInkBar = MatInkBar;
    exports.MatTab = MatTab;
    exports.MatTabBody = MatTabBody;
    exports.MatTabBodyPortal = MatTabBodyPortal;
    exports.MatTabChangeEvent = MatTabChangeEvent;
    exports.MatTabContent = MatTabContent;
    exports.MatTabGroup = MatTabGroup;
    exports.MatTabHeader = MatTabHeader;
    exports.MatTabLabel = MatTabLabel;
    exports.MatTabLabelWrapper = MatTabLabelWrapper;
    exports.MatTabLink = MatTabLink;
    exports.MatTabNav = MatTabNav;
    exports.MatTabsModule = MatTabsModule;
    exports._MAT_INK_BAR_POSITIONER = _MAT_INK_BAR_POSITIONER;
    exports._MatTabBodyBase = _MatTabBodyBase;
    exports._MatTabGroupBase = _MatTabGroupBase;
    exports._MatTabHeaderBase = _MatTabHeaderBase;
    exports._MatTabLinkBase = _MatTabLinkBase;
    exports._MatTabNavBase = _MatTabNavBase;
    exports.matTabsAnimations = matTabsAnimations;
    exports.??angular_material_src_material_tabs_tabs_a = _MAT_INK_BAR_POSITIONER_FACTORY;
    exports.??angular_material_src_material_tabs_tabs_b = MatPaginatedTabHeader;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-tabs.umd.js.map