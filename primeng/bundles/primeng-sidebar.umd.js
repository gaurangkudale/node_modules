(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/ripple'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/ripple'), require('primeng/dom'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/sidebar', ['@angular/core','@angular/common','primeng/ripple','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/ripple', 'primeng/dom', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.ripple,(global.primeng = global.primeng || {}, global.primeng.sidebar = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.ripple, global.primeng.dom, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, animations, common, ripple, dom, api) { 
var _c0 = ["container"];
function Sidebar_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function Sidebar_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.close($event); })("keydown.enter", function Sidebar_button_3_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.close($event); });
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("aria-label", ctx_r1.ariaCloseLabel);
} }
function Sidebar_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function (a1, a2, a3, a4, a5, a6) { return { "p-sidebar": true, "p-sidebar-active": a1, "p-sidebar-left": a2, "p-sidebar-right": a3, "p-sidebar-top": a4, "p-sidebar-bottom": a5, "p-sidebar-full": a6 }; };
var _c2 = ["*"];
'use strict';

    var Sidebar = /** @class */ (function () {
        function Sidebar(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.position = 'left';
            this.blockScroll = false;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.modal = true;
            this.dismissible = true;
            this.showCloseIcon = true;
            this.closeOnEscape = true;
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.visibleChange = new core.EventEmitter();
        }
        Sidebar.prototype.ngAfterViewInit = function () {
            this.initialized = true;
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.containerViewChild.nativeElement);
                else
                    dom.DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
            }
            if (this.visible) {
                this.show();
            }
        };
        Sidebar.prototype.ngAfterContentInit = function () {
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
            });
        };
        Object.defineProperty(Sidebar.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (val) {
                this._visible = val;
                if (this.initialized && this.containerViewChild && this.containerViewChild.nativeElement) {
                    if (this._visible)
                        this.show();
                    else {
                        if (this.preventVisibleChangePropagation)
                            this.preventVisibleChangePropagation = false;
                        else
                            this.hide();
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Sidebar.prototype.ngAfterViewChecked = function () {
            if (this.executePostDisplayActions) {
                this.onShow.emit({});
                this.executePostDisplayActions = false;
            }
        };
        Sidebar.prototype.show = function () {
            this.executePostDisplayActions = true;
            if (this.autoZIndex) {
                this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
            }
            if (this.modal) {
                this.enableModality();
            }
        };
        Sidebar.prototype.hide = function () {
            this.onHide.emit({});
            if (this.modal) {
                this.disableModality();
            }
        };
        Sidebar.prototype.close = function (event) {
            this.preventVisibleChangePropagation = true;
            this.hide();
            this.visibleChange.emit(false);
            event.preventDefault();
        };
        Sidebar.prototype.enableModality = function () {
            var _this = this;
            if (!this.mask) {
                this.mask = document.createElement('div');
                this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
                dom.DomHandler.addMultipleClasses(this.mask, 'p-component-overlay p-sidebar-mask');
                if (this.dismissible) {
                    this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                        if (_this.dismissible) {
                            _this.close(event);
                        }
                    });
                }
                document.body.appendChild(this.mask);
                if (this.blockScroll) {
                    dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
                }
            }
        };
        Sidebar.prototype.disableModality = function () {
            if (this.mask) {
                this.unbindMaskClickListener();
                document.body.removeChild(this.mask);
                if (this.blockScroll) {
                    dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
                this.mask = null;
            }
        };
        Sidebar.prototype.onAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    if (this.closeOnEscape) {
                        this.bindDocumentEscapeListener();
                    }
                    break;
                case 'hidden':
                    this.unbindGlobalListeners();
                    break;
            }
        };
        Sidebar.prototype.bindDocumentEscapeListener = function () {
            var _this = this;
            var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
                if (event.which == 27) {
                    if (parseInt(_this.containerViewChild.nativeElement.style.zIndex) === (dom.DomHandler.zindex + _this.baseZIndex)) {
                        _this.close(event);
                    }
                }
            });
        };
        Sidebar.prototype.unbindDocumentEscapeListener = function () {
            if (this.documentEscapeListener) {
                this.documentEscapeListener();
                this.documentEscapeListener = null;
            }
        };
        Sidebar.prototype.unbindMaskClickListener = function () {
            if (this.maskClickListener) {
                this.maskClickListener();
                this.maskClickListener = null;
            }
        };
        Sidebar.prototype.unbindGlobalListeners = function () {
            this.unbindMaskClickListener();
            this.unbindDocumentEscapeListener();
        };
        Sidebar.prototype.ngOnDestroy = function () {
            this.initialized = false;
            if (this.visible) {
                this.hide();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
            }
            this.unbindGlobalListeners();
        };
Sidebar.ɵfac = function Sidebar_Factory(t) { return new (t || Sidebar)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Sidebar.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Sidebar, selectors: [["p-sidebar"]], contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Sidebar_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { position: "position", blockScroll: "blockScroll", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", modal: "modal", dismissible: "dismissible", showCloseIcon: "showCloseIcon", closeOnEscape: "closeOnEscape", visible: "visible", fullScreen: "fullScreen", appendTo: "appendTo", style: "style", styleClass: "styleClass", ariaCloseLabel: "ariaCloseLabel" }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange" }, ngContentSelectors: _c2, decls: 6, vars: 15, consts: [["role", "complementary", 3, "ngClass", "ngStyle"], ["container", ""], [1, "p-sidebar-content"], ["type", "button", "class", "p-sidebar-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 1, "p-sidebar-close", "p-link", 3, "click", "keydown.enter"], [1, "p-sidebar-close-icon", "pi", "pi-times"]], template: function Sidebar_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("@panelState.start", function Sidebar_Template_div_animation_panelState_start_0_listener($event) { return ctx.onAnimationStart($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, Sidebar_button_3_Template, 2, 1, "button", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵtemplate(5, Sidebar_ng_container_5_Template, 1, 0, "ng-container", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction6(8, _c1, ctx.visible, ctx.position === "left", ctx.position === "right", ctx.position === "top", ctx.position === "bottom", ctx.fullScreen))("@panelState", ctx.visible ? "visible" : "hidden")("ngStyle", ctx.style);
        ɵngcc0.ɵɵattribute("aria-modal", ctx.modal);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showCloseIcon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-sidebar{position:fixed;transition:transform .3s}.p-sidebar-content{position:relative}.p-sidebar-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:absolute;right:0;top:0}.p-sidebar-mask{transition-property:background-color}.p-sidebar-mask,.p-sidebar-mask-leave.p-component-overlay{background-color:rgba(0,0,0,0)}.p-sidebar-left{-ms-transform:translateX(-100%);height:100%;left:0;top:0;transform:translateX(-100%);width:20rem}.p-sidebar-left.p-sidebar-active{-ms-transform:translateX(0);transform:translateX(0)}.p-sidebar-right{-ms-transform:translateX(100%);height:100%;right:0;top:0;transform:translateX(100%);width:20rem}.p-sidebar-right.p-sidebar-active{-ms-transform:translateX(0);transform:translateX(0)}.p-sidebar-top{-ms-transform:translateY(-100%);height:10rem;left:0;top:0;transform:translateY(-100%);width:100%}.p-sidebar-top.p-sidebar-active{-ms-transform:translateY(0);transform:translateY(0)}.p-sidebar-bottom{-ms-transform:translateY(100%);bottom:0;height:10rem;left:0;transform:translateY(100%);width:100%}.p-sidebar-bottom.p-sidebar-active{-ms-transform:translateY(0);transform:translateY(0)}.p-sidebar-full{height:100%;left:0;top:0;transition:none;width:100%}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-bottom.p-sidebar-sm,.p-sidebar-top.p-sidebar-sm{height:10rem}.p-sidebar-bottom.p-sidebar-md,.p-sidebar-top.p-sidebar-md{height:20rem}.p-sidebar-bottom.p-sidebar-lg,.p-sidebar-top.p-sidebar-lg{height:30rem}@media screen and (max-width:64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}"], encapsulation: 2, data: { animation: [
            animations.trigger('panelState', [
                animations.state('hidden', animations.style({
                    opacity: 0
                })),
                animations.state('visible', animations.style({
                    opacity: 1
                })),
                animations.transition('visible => hidden', animations.animate('300ms ease-in')),
                animations.transition('hidden => visible', animations.animate('300ms ease-out'))
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Sidebar, [{
        type: core.Component,
        args: [{
                selector: 'p-sidebar',
                template: "\n        <div #container [ngClass]=\"{'p-sidebar':true, 'p-sidebar-active': visible,\n            'p-sidebar-left': (position === 'left'), 'p-sidebar-right': (position === 'right'),\n            'p-sidebar-top': (position === 'top'), 'p-sidebar-bottom': (position === 'bottom'),\n            'p-sidebar-full': fullScreen}\"\n            [@panelState]=\"visible ? 'visible' : 'hidden'\" (@panelState.start)=\"onAnimationStart($event)\" [ngStyle]=\"style\" [class]=\"styleClass\"  role=\"complementary\" [attr.aria-modal]=\"modal\">\n            <div class=\"p-sidebar-content\">\n                <button type=\"button\" class=\"p-sidebar-close p-link\" *ngIf=\"showCloseIcon\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" [attr.aria-label]=\"ariaCloseLabel\" pRipple>\n                    <span class=\"p-sidebar-close-icon pi pi-times\"></span>\n                </button>\n                <ng-content></ng-content>\n                <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n            </div>\n        </div>\n    ",
                animations: [
                    animations.trigger('panelState', [
                        animations.state('hidden', animations.style({
                            opacity: 0
                        })),
                        animations.state('visible', animations.style({
                            opacity: 1
                        })),
                        animations.transition('visible => hidden', animations.animate('300ms ease-in')),
                        animations.transition('hidden => visible', animations.animate('300ms ease-out'))
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-sidebar{position:fixed;transition:transform .3s}.p-sidebar-content{position:relative}.p-sidebar-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:absolute;right:0;top:0}.p-sidebar-mask{transition-property:background-color}.p-sidebar-mask,.p-sidebar-mask-leave.p-component-overlay{background-color:rgba(0,0,0,0)}.p-sidebar-left{-ms-transform:translateX(-100%);height:100%;left:0;top:0;transform:translateX(-100%);width:20rem}.p-sidebar-left.p-sidebar-active{-ms-transform:translateX(0);transform:translateX(0)}.p-sidebar-right{-ms-transform:translateX(100%);height:100%;right:0;top:0;transform:translateX(100%);width:20rem}.p-sidebar-right.p-sidebar-active{-ms-transform:translateX(0);transform:translateX(0)}.p-sidebar-top{-ms-transform:translateY(-100%);height:10rem;left:0;top:0;transform:translateY(-100%);width:100%}.p-sidebar-top.p-sidebar-active{-ms-transform:translateY(0);transform:translateY(0)}.p-sidebar-bottom{-ms-transform:translateY(100%);bottom:0;height:10rem;left:0;transform:translateY(100%);width:100%}.p-sidebar-bottom.p-sidebar-active{-ms-transform:translateY(0);transform:translateY(0)}.p-sidebar-full{height:100%;left:0;top:0;transition:none;width:100%}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-bottom.p-sidebar-sm,.p-sidebar-top.p-sidebar-sm{height:10rem}.p-sidebar-bottom.p-sidebar-md,.p-sidebar-top.p-sidebar-md{height:20rem}.p-sidebar-bottom.p-sidebar-lg,.p-sidebar-top.p-sidebar-lg{height:30rem}@media screen and (max-width:64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { position: [{
            type: core.Input
        }], blockScroll: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], modal: [{
            type: core.Input
        }], dismissible: [{
            type: core.Input
        }], showCloseIcon: [{
            type: core.Input
        }], closeOnEscape: [{
            type: core.Input
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], visibleChange: [{
            type: core.Output
        }], visible: [{
            type: core.Input
        }], fullScreen: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], ariaCloseLabel: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return Sidebar;
    }());
    Sidebar.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    Sidebar.propDecorators = {
        position: [{ type: core.Input }],
        fullScreen: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        blockScroll: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        ariaCloseLabel: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        modal: [{ type: core.Input }],
        dismissible: [{ type: core.Input }],
        showCloseIcon: [{ type: core.Input }],
        closeOnEscape: [{ type: core.Input }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        visibleChange: [{ type: core.Output }],
        visible: [{ type: core.Input }]
    };
    var SidebarModule = /** @class */ (function () {
        function SidebarModule() {
        }
SidebarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SidebarModule });
SidebarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[common.CommonModule, ripple.RippleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SidebarModule, { declarations: [Sidebar], imports: [ɵngcc1.CommonModule, ɵngcc2.RippleModule], exports: [Sidebar] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SidebarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, ripple.RippleModule],
                exports: [Sidebar],
                declarations: [Sidebar]
            }]
    }], function () { return []; }, null); })();
        return SidebarModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Sidebar = Sidebar;
    exports.SidebarModule = SidebarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-sidebar.umd.js.map