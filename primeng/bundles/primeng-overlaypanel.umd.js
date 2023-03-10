(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api'), require('primeng/ripple'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('primeng/overlaypanel', ['@angular/core','@angular/common','primeng/ripple','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api', 'primeng/ripple', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,(global.primeng = global.primeng || {}, global.primeng.overlaypanel = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api, global.primeng.ripple, global.ng.animations));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, common, dom, api, ripple, animations) { 
function OverlayPanel_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function OverlayPanel_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function OverlayPanel_div_0_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.onCloseClick($event); })("keydown.enter", function OverlayPanel_div_0_button_4_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("aria-label", ctx_r2.ariaCloseLabel);
} }
var _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
var _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function OverlayPanel_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function OverlayPanel_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onContainerClick(); })("@animation.start", function OverlayPanel_div_0_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onAnimationStart($event); })("@animation.done", function OverlayPanel_div_0_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationEnd($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵtemplate(3, OverlayPanel_div_0_ng_container_3_Template, 1, 0, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, OverlayPanel_div_0_button_4_Template, 2, 1, "button", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-overlaypanel p-component")("ngStyle", ctx_r0.style)("@animation", ɵngcc0.ɵɵpureFunction2(10, _c1, ctx_r0.overlayVisible ? "open" : "close", ɵngcc0.ɵɵpureFunction2(7, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showCloseIcon);
} }
var _c2 = ["*"];
'use strict';

    var OverlayPanel = /** @class */ (function () {
        function OverlayPanel(el, renderer, cd, zone) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.zone = zone;
            this.dismissable = true;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.focusOnShow = true;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.overlayVisible = false;
            this.render = false;
            this.isContainerClicked = true;
        }
        OverlayPanel.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
                _this.cd.markForCheck();
            });
        };
        OverlayPanel.prototype.onContainerClick = function () {
            this.isContainerClicked = true;
        };
        OverlayPanel.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener && this.dismissable) {
                this.zone.runOutsideAngular(function () {
                    var documentEvent = dom.DomHandler.isIOS() ? 'touchstart' : 'click';
                    var documentTarget = _this.el ? _this.el.nativeElement.ownerDocument : 'document';
                    _this.documentClickListener = _this.renderer.listen(documentTarget, documentEvent, function (event) {
                        if (!_this.container.contains(event.target) && _this.target !== event.target && !_this.target.contains(event.target) && !_this.isContainerClicked) {
                            _this.zone.run(function () {
                                _this.hide();
                            });
                        }
                        _this.isContainerClicked = false;
                        _this.cd.markForCheck();
                    });
                });
            }
        };
        OverlayPanel.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        OverlayPanel.prototype.toggle = function (event, target) {
            var _this = this;
            if (this.overlayVisible) {
                if (this.hasTargetChanged(event, target)) {
                    this.destroyCallback = function () {
                        _this.show(null, (target || event.currentTarget || event.target));
                    };
                }
                this.hide();
            }
            else {
                this.show(event, target);
            }
        };
        OverlayPanel.prototype.show = function (event, target) {
            this.target = target || event.currentTarget || event.target;
            this.overlayVisible = true;
            this.render = true;
            this.cd.markForCheck();
        };
        OverlayPanel.prototype.hasTargetChanged = function (event, target) {
            return this.target != null && this.target !== (target || event.currentTarget || event.target);
        };
        OverlayPanel.prototype.appendContainer = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    dom.DomHandler.appendChild(this.container, this.appendTo);
            }
        };
        OverlayPanel.prototype.restoreAppend = function () {
            if (this.container && this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        };
        OverlayPanel.prototype.align = function () {
            if (this.autoZIndex) {
                this.container.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
            dom.DomHandler.absolutePosition(this.container, this.target);
            if (dom.DomHandler.getOffset(this.container).top < dom.DomHandler.getOffset(this.target).top) {
                dom.DomHandler.addClass(this.container, 'p-overlaypanel-flipped');
            }
            if (Math.floor(dom.DomHandler.getOffset(this.container).left) < Math.floor(dom.DomHandler.getOffset(this.target).left) &&
                dom.DomHandler.getOffset(this.container).left > 0) {
                dom.DomHandler.addClass(this.container, 'p-overlaypanel-shifted');
            }
        };
        OverlayPanel.prototype.onAnimationStart = function (event) {
            if (event.toState === 'open') {
                this.container = event.element;
                this.onShow.emit(null);
                this.appendContainer();
                this.align();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                this.bindScrollListener();
                if (this.focusOnShow) {
                    this.focus();
                }
            }
        };
        OverlayPanel.prototype.onAnimationEnd = function (event) {
            switch (event.toState) {
                case 'void':
                    if (this.destroyCallback) {
                        this.destroyCallback();
                        this.destroyCallback = null;
                    }
                    break;
                case 'close':
                    this.onContainerDestroy();
                    this.onHide.emit({});
                    this.render = false;
                    break;
            }
        };
        OverlayPanel.prototype.focus = function () {
            var focusable = dom.DomHandler.findSingle(this.container, '[autofocus]');
            if (focusable) {
                this.zone.runOutsideAngular(function () {
                    setTimeout(function () { return focusable.focus(); }, 5);
                });
            }
        };
        OverlayPanel.prototype.hide = function () {
            this.overlayVisible = false;
            this.cd.markForCheck();
        };
        OverlayPanel.prototype.onCloseClick = function (event) {
            this.hide();
            event.preventDefault();
        };
        OverlayPanel.prototype.onWindowResize = function (event) {
            this.hide();
        };
        OverlayPanel.prototype.bindDocumentResizeListener = function () {
            this.documentResizeListener = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.documentResizeListener);
        };
        OverlayPanel.prototype.unbindDocumentResizeListener = function () {
            if (this.documentResizeListener) {
                window.removeEventListener('resize', this.documentResizeListener);
                this.documentResizeListener = null;
            }
        };
        OverlayPanel.prototype.bindScrollListener = function () {
            var _this = this;
            if (!this.scrollHandler) {
                this.scrollHandler = new dom.ConnectedOverlayScrollHandler(this.target, function () {
                    if (_this.overlayVisible) {
                        _this.hide();
                    }
                });
            }
            this.scrollHandler.bindScrollListener();
        };
        OverlayPanel.prototype.unbindScrollListener = function () {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        };
        OverlayPanel.prototype.onContainerDestroy = function () {
            this.target = null;
            this.unbindDocumentClickListener();
            this.unbindDocumentResizeListener();
            this.unbindScrollListener();
        };
        OverlayPanel.prototype.ngOnDestroy = function () {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.target = null;
            this.destroyCallback = null;
            if (this.container) {
                this.restoreAppend();
                this.onContainerDestroy();
            }
        };
OverlayPanel.ɵfac = function OverlayPanel_Factory(t) { return new (t || OverlayPanel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
OverlayPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: OverlayPanel, selectors: [["p-overlayPanel"]], contentQueries: function OverlayPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { dismissable: "dismissable", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", focusOnShow: "focusOnShow", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", showCloseIcon: "showCloseIcon", style: "style", styleClass: "styleClass", appendTo: "appendTo", ariaCloseLabel: "ariaCloseLabel" }, outputs: { onShow: "onShow", onHide: "onHide" }, ngContentSelectors: _c2, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], [1, "p-overlaypanel-content"], [4, "ngTemplateOutlet"], ["type", "button", "class", "p-overlaypanel-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-overlaypanel-close", "p-link", 3, "click", "keydown.enter"], [1, "p-overlaypanel-close-icon", "pi", "pi-times"]], template: function OverlayPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, OverlayPanel_div_0_Template, 5, 13, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.render);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-overlaypanel{margin-top:10px;position:absolute}.p-overlaypanel-flipped{margin-bottom:10px;margin-top:0}.p-overlaypanel-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;content:\" \";height:0;left:1.25rem;pointer-events:none;position:absolute;width:0}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after,.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:rgba(0,0,0,0)}"], encapsulation: 2, data: { animation: [
            animations.trigger('animation', [
                animations.state('void', animations.style({
                    transform: 'scaleY(0.8)',
                    opacity: 0
                })),
                animations.state('close', animations.style({
                    opacity: 0
                })),
                animations.state('open', animations.style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                animations.transition('open => close', animations.animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayPanel, [{
        type: core.Component,
        args: [{
                selector: 'p-overlayPanel',
                template: "\n        <div *ngIf=\"render\" [ngClass]=\"'p-overlaypanel p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\" (click)=\"onContainerClick()\"\n            [@animation]=\"{value: (overlayVisible ? 'open': 'close'), params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\"\n                (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\">\n            <div class=\"p-overlaypanel-content\">\n                <ng-content></ng-content>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n            <button *ngIf=\"showCloseIcon\" type=\"button\" class=\"p-overlaypanel-close p-link\" (click)=\"onCloseClick($event)\" (keydown.enter)=\"hide()\" [attr.aria-label]=\"ariaCloseLabel\" pRipple>\n                <span class=\"p-overlaypanel-close-icon pi pi-times\"></span>\n            </button>\n        </div>\n    ",
                animations: [
                    animations.trigger('animation', [
                        animations.state('void', animations.style({
                            transform: 'scaleY(0.8)',
                            opacity: 0
                        })),
                        animations.state('close', animations.style({
                            opacity: 0
                        })),
                        animations.state('open', animations.style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        animations.transition('void => open', animations.animate('{{showTransitionParams}}')),
                        animations.transition('open => close', animations.animate('{{hideTransitionParams}}')),
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-overlaypanel{margin-top:10px;position:absolute}.p-overlaypanel-flipped{margin-bottom:10px;margin-top:0}.p-overlaypanel-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;content:\" \";height:0;left:1.25rem;pointer-events:none;position:absolute;width:0}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after,.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:rgba(0,0,0,0)}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { dismissable: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], focusOnShow: [{
            type: core.Input
        }], showTransitionOptions: [{
            type: core.Input
        }], hideTransitionOptions: [{
            type: core.Input
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], showCloseIcon: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], ariaCloseLabel: [{
            type: core.Input
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return OverlayPanel;
    }());
    OverlayPanel.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    OverlayPanel.propDecorators = {
        dismissable: [{ type: core.Input }],
        showCloseIcon: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        ariaCloseLabel: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        focusOnShow: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var OverlayPanelModule = /** @class */ (function () {
        function OverlayPanelModule() {
        }
OverlayPanelModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: OverlayPanelModule });
OverlayPanelModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function OverlayPanelModule_Factory(t) { return new (t || OverlayPanelModule)(); }, imports: [[common.CommonModule, ripple.RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OverlayPanelModule, { declarations: [OverlayPanel], imports: [ɵngcc1.CommonModule, ɵngcc2.RippleModule], exports: [OverlayPanel] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayPanelModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [OverlayPanel],
                declarations: [OverlayPanel]
            }]
    }], function () { return []; }, null); })();
        return OverlayPanelModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverlayPanel = OverlayPanel;
    exports.OverlayPanelModule = OverlayPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-overlaypanel.umd.js.map