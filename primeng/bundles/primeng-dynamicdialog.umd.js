(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('primeng/dynamicdialog', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.dynamicdialog = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.rxjs));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, animations, common, dom, rxjs) { 
var _c0 = ["mask"];
function DynamicDialogComponent_div_2_div_1_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function DynamicDialogComponent_div_2_div_1_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(3); return ctx_r6.hide(); })("keydown.enter", function DynamicDialogComponent_div_2_div_1_button_4_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r8 = ɵngcc0.ɵɵnextContext(3); return ctx_r8.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("ngClass", "p-dialog-header-icon p-dialog-header-maximize p-link");
} }
function DynamicDialogComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "span", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 10);
    ɵngcc0.ɵɵtemplate(4, DynamicDialogComponent_div_2_div_1_button_4_Template, 2, 1, "button", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.config.header);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.closable !== false);
} }
function DynamicDialogComponent_div_2_ng_template_3_Template(rf, ctx) { }
function DynamicDialogComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r4.config.footer, " ");
} }
var _c1 = function (a1) { return { "p-dialog p-dynamic-dialog p-component": true, "p-dialog-rtl": a1 }; };
var _c2 = function (a0, a1) { return { transform: a0, transition: a1 }; };
var _c3 = function (a1) { return { value: "visible", params: a1 }; };
function DynamicDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵlistener("@animation.start", function DynamicDialogComponent_div_2_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onAnimationStart($event); })("@animation.done", function DynamicDialogComponent_div_2_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onAnimationEnd($event); });
    ɵngcc0.ɵɵtemplate(1, DynamicDialogComponent_div_2_div_1_Template, 5, 2, "div", 4);
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵtemplate(3, DynamicDialogComponent_div_2_ng_template_3_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, DynamicDialogComponent_div_2_div_4_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r1.config.styleClass);
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.config.width)("height", ctx_r1.config.height);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c1, ctx_r1.config.rtl))("ngStyle", ctx_r1.config.style)("@animation", ɵngcc0.ɵɵpureFunction1(17, _c3, ɵngcc0.ɵɵpureFunction2(14, _c2, ctx_r1.transformOptions, ctx_r1.config.transitionOptions || "150ms cubic-bezier(0, 0, 0.2, 1)")));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.config.showHeader === false ? false : true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.config.contentStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.config.footer);
} }
var _c4 = function (a1) { return { "p-dialog-mask": true, "p-component-overlay p-dialog-mask-scrollblocker": a1 }; };
'use strict';

    var DynamicDialogContent = /** @class */ (function () {
        function DynamicDialogContent(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
DynamicDialogContent.ɵfac = function DynamicDialogContent_Factory(t) { return new (t || DynamicDialogContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
DynamicDialogContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DynamicDialogContent, selectors: [["", "pDynamicDialogContent", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicDialogContent, [{
        type: core.Directive,
        args: [{
                selector: '[pDynamicDialogContent]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, null); })();
        return DynamicDialogContent;
    }());
    DynamicDialogContent.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };

    var DynamicDialogConfig = /** @class */ (function () {
        function DynamicDialogConfig() {
        }
        return DynamicDialogConfig;
    }());

    var DynamicDialogRef = /** @class */ (function () {
        function DynamicDialogRef() {
            this._onClose = new rxjs.Subject();
            this.onClose = this._onClose.asObservable();
            this._onDestroy = new rxjs.Subject();
            this.onDestroy = this._onDestroy.asObservable();
        }
        DynamicDialogRef.prototype.close = function (result) {
            this._onClose.next(result);
        };
        DynamicDialogRef.prototype.destroy = function () {
            this._onDestroy.next();
        };
        return DynamicDialogRef;
    }());

    var showAnimation = animations.animation([
        animations.style({ transform: '{{transform}}', opacity: 0 }),
        animations.animate('{{transition}}', animations.style({ transform: 'none', opacity: 1 }))
    ]);
    var hideAnimation = animations.animation([
        animations.animate('{{transition}}', animations.style({ transform: '{{transform}}', opacity: 0 }))
    ]);
    var DynamicDialogComponent = /** @class */ (function () {
        function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.cd = cd;
            this.renderer = renderer;
            this.config = config;
            this.dialogRef = dialogRef;
            this.zone = zone;
            this.visible = true;
            this.transformOptions = "scale(0.7)";
        }
        DynamicDialogComponent.prototype.ngAfterViewInit = function () {
            this.loadChildComponent(this.childComponentType);
            this.cd.detectChanges();
        };
        DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            var viewContainerRef = this.insertionPoint.viewContainerRef;
            viewContainerRef.clear();
            this.componentRef = viewContainerRef.createComponent(componentFactory);
        };
        DynamicDialogComponent.prototype.moveOnTop = function () {
            if (this.config.autoZIndex !== false) {
                var zIndex = (this.config.baseZIndex || 0) + (++dom.DomHandler.zindex);
                this.container.style.zIndex = String(zIndex);
                this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
            }
        };
        DynamicDialogComponent.prototype.onAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.container = event.element;
                    this.wrapper = this.container.parentElement;
                    this.moveOnTop();
                    this.bindGlobalListeners();
                    if (this.config.modal !== false) {
                        this.enableModality();
                    }
                    this.focus();
                    break;
                case 'void':
                    this.onContainerDestroy();
                    break;
            }
        };
        DynamicDialogComponent.prototype.onAnimationEnd = function (event) {
            if (event.toState === 'void') {
                this.dialogRef.destroy();
            }
        };
        DynamicDialogComponent.prototype.onContainerDestroy = function () {
            this.unbindGlobalListeners();
            if (this.config.modal !== false) {
                this.disableModality();
            }
            this.container = null;
        };
        DynamicDialogComponent.prototype.close = function () {
            this.visible = false;
            this.cd.markForCheck();
        };
        DynamicDialogComponent.prototype.hide = function () {
            if (this.dialogRef) {
                this.dialogRef.close();
            }
        };
        DynamicDialogComponent.prototype.enableModality = function () {
            var _this = this;
            if (this.config.closable !== false && this.config.dismissableMask) {
                this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
                    if (_this.wrapper && _this.wrapper.isSameNode(event.target)) {
                        _this.hide();
                    }
                });
            }
            if (this.config.modal !== false) {
                dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        };
        DynamicDialogComponent.prototype.disableModality = function () {
            if (this.wrapper) {
                if (this.config.dismissableMask) {
                    this.unbindMaskClickListener();
                }
                if (this.config.modal !== false) {
                    dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
                if (!this.cd.destroyed) {
                    this.cd.detectChanges();
                }
            }
        };
        DynamicDialogComponent.prototype.onKeydown = function (event) {
            if (event.which === 9) {
                event.preventDefault();
                var focusableElements = dom.DomHandler.getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!focusableElements[0].ownerDocument.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        var focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            }
        };
        DynamicDialogComponent.prototype.focus = function () {
            var focusable = dom.DomHandler.findSingle(this.container, '[autofocus]');
            if (focusable) {
                this.zone.runOutsideAngular(function () {
                    setTimeout(function () { return focusable.focus(); }, 5);
                });
            }
        };
        DynamicDialogComponent.prototype.bindGlobalListeners = function () {
            this.bindDocumentKeydownListener();
            if (this.config.closeOnEscape !== false && this.config.closable !== false) {
                this.bindDocumentEscapeListener();
            }
        };
        DynamicDialogComponent.prototype.unbindGlobalListeners = function () {
            this.unbindDocumentKeydownListener();
            this.unbindDocumentEscapeListener();
        };
        DynamicDialogComponent.prototype.bindDocumentKeydownListener = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentKeydownListener = _this.onKeydown.bind(_this);
                window.document.addEventListener('keydown', _this.documentKeydownListener);
            });
        };
        DynamicDialogComponent.prototype.unbindDocumentKeydownListener = function () {
            if (this.documentKeydownListener) {
                window.document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
        };
        DynamicDialogComponent.prototype.bindDocumentEscapeListener = function () {
            var _this = this;
            var documentTarget = this.maskViewChild ? this.maskViewChild.nativeElement.ownerDocument : 'document';
            this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
                if (event.which == 27) {
                    if (parseInt(_this.container.style.zIndex) == (dom.DomHandler.zindex + (_this.config.baseZIndex ? _this.config.baseZIndex : 0))) {
                        _this.hide();
                    }
                }
            });
        };
        DynamicDialogComponent.prototype.unbindDocumentEscapeListener = function () {
            if (this.documentEscapeListener) {
                this.documentEscapeListener();
                this.documentEscapeListener = null;
            }
        };
        DynamicDialogComponent.prototype.unbindMaskClickListener = function () {
            if (this.maskClickListener) {
                this.maskClickListener();
                this.maskClickListener = null;
            }
        };
        DynamicDialogComponent.prototype.ngOnDestroy = function () {
            this.onContainerDestroy();
            if (this.componentRef) {
                this.componentRef.destroy();
            }
        };
DynamicDialogComponent.ɵfac = function DynamicDialogComponent_Factory(t) { return new (t || DynamicDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(DynamicDialogConfig), ɵngcc0.ɵɵdirectiveInject(DynamicDialogRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
DynamicDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DynamicDialogComponent, selectors: [["p-dynamicDialog"]], viewQuery: function DynamicDialogComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DynamicDialogContent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.insertionPoint = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.maskViewChild = _t.first);
    } }, decls: 3, vars: 4, consts: [[3, "ngClass"], ["mask", ""], ["role", "dialog", 3, "ngClass", "ngStyle", "class", "width", "height", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "ngStyle"], ["class", "p-dialog-header", 4, "ngIf"], [1, "p-dialog-content", 3, "ngStyle"], ["pDynamicDialogContent", ""], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-dialog-header"], [1, "p-dialog-title"], [1, "p-dialog-header-icons"], ["type", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], ["type", "button", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-close-icon", "pi", "pi-times"], [1, "p-dialog-footer"]], template: function DynamicDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, DynamicDialogComponent_div_2_Template, 5, 19, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c4, ctx.config.modal !== false));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgStyle, DynamicDialogContent], styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"], encapsulation: 2, data: { animation: [
            animations.trigger('animation', [
                animations.transition('void => visible', [
                    animations.useAnimation(showAnimation)
                ]),
                animations.transition('visible => void', [
                    animations.useAnimation(hideAnimation)
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicDialogComponent, [{
        type: core.Component,
        args: [{
                selector: 'p-dynamicDialog',
                template: "\n        <div #mask [ngClass]=\"{'p-dialog-mask':true, 'p-component-overlay p-dialog-mask-scrollblocker': config.modal !== false}\">\n            <div [ngClass]=\"{'p-dialog p-dynamic-dialog p-component':true, 'p-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\"\n                (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n                [style.width]=\"config.width\" [style.height]=\"config.height\">\n                <div class=\"p-dialog-header\" *ngIf=\"config.showHeader === false ? false: true\">\n                    <span class=\"p-dialog-title\">{{config.header}}</span>\n                    <div class=\"p-dialog-header-icons\">\n                        <button [ngClass]=\"'p-dialog-header-icon p-dialog-header-maximize p-link'\" type=\"button\" (click)=\"hide()\" (keydown.enter)=\"hide()\" *ngIf=\"config.closable !== false\">\n                            <span class=\"p-dialog-header-close-icon pi pi-times\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"p-dialog-content\" [ngStyle]=\"config.contentStyle\">\n                    <ng-template pDynamicDialogContent></ng-template>\n                </div>\n                <div class=\"p-dialog-footer\" *ngIf=\"config.footer\">\n                    {{config.footer}}\n                </div>\n            </div>\n        </div>\n\t",
                animations: [
                    animations.trigger('animation', [
                        animations.transition('void => visible', [
                            animations.useAnimation(showAnimation)
                        ]),
                        animations.transition('visible => void', [
                            animations.useAnimation(hideAnimation)
                        ])
                    ])
                ],
                changeDetection: core.ChangeDetectionStrategy.Default,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: DynamicDialogConfig }, { type: DynamicDialogRef }, { type: ɵngcc0.NgZone }]; }, { insertionPoint: [{
            type: core.ViewChild,
            args: [DynamicDialogContent]
        }], maskViewChild: [{
            type: core.ViewChild,
            args: ['mask']
        }] }); })();
        return DynamicDialogComponent;
    }());
    DynamicDialogComponent.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: DynamicDialogConfig },
        { type: DynamicDialogRef },
        { type: core.NgZone }
    ]; };
    DynamicDialogComponent.propDecorators = {
        insertionPoint: [{ type: core.ViewChild, args: [DynamicDialogContent,] }],
        maskViewChild: [{ type: core.ViewChild, args: ['mask',] }]
    };
    var DynamicDialogModule = /** @class */ (function () {
        function DynamicDialogModule() {
        }
DynamicDialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DynamicDialogModule });
DynamicDialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DynamicDialogModule_Factory(t) { return new (t || DynamicDialogModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DynamicDialogModule, { declarations: [DynamicDialogComponent, DynamicDialogContent], imports: [ɵngcc1.CommonModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicDialogModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                declarations: [DynamicDialogComponent, DynamicDialogContent],
                entryComponents: [DynamicDialogComponent]
            }]
    }], function () { return []; }, null); })();
        return DynamicDialogModule;
    }());

    var DynamicDialogInjector = /** @class */ (function () {
        function DynamicDialogInjector(_parentInjector, _additionalTokens) {
            this._parentInjector = _parentInjector;
            this._additionalTokens = _additionalTokens;
        }
        DynamicDialogInjector.prototype.get = function (token, notFoundValue, flags) {
            var value = this._additionalTokens.get(token);
            if (value)
                return value;
            return this._parentInjector.get(token, notFoundValue);
        };
        return DynamicDialogInjector;
    }());

    var DialogService = /** @class */ (function () {
        function DialogService(componentFactoryResolver, appRef, injector) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
            this.dialogComponentRefMap = new Map();
        }
        DialogService.prototype.open = function (componentType, config) {
            var dialogRef = this.appendDialogComponentToBody(config);
            this.dialogComponentRefMap.get(dialogRef).instance.childComponentType = componentType;
            return dialogRef;
        };
        DialogService.prototype.appendDialogComponentToBody = function (config) {
            var _this = this;
            var map = new WeakMap();
            map.set(DynamicDialogConfig, config);
            var dialogRef = new DynamicDialogRef();
            map.set(DynamicDialogRef, dialogRef);
            var sub = dialogRef.onClose.subscribe(function () {
                _this.dialogComponentRefMap.get(dialogRef).instance.close();
            });
            var destroySub = dialogRef.onDestroy.subscribe(function () {
                _this.removeDialogComponentFromBody(dialogRef);
                destroySub.unsubscribe();
                sub.unsubscribe();
            });
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicDialogComponent);
            var componentRef = componentFactory.create(new DynamicDialogInjector(this.injector, map));
            this.appRef.attachView(componentRef.hostView);
            var domElem = componentRef.hostView.rootNodes[0];
            document.body.appendChild(domElem);
            this.dialogComponentRefMap.set(dialogRef, componentRef);
            return dialogRef;
        };
        DialogService.prototype.removeDialogComponentFromBody = function (dialogRef) {
            if (!dialogRef || !this.dialogComponentRefMap.has(dialogRef)) {
                return;
            }
            var dialogComponentRef = this.dialogComponentRefMap.get(dialogRef);
            this.appRef.detachView(dialogComponentRef.hostView);
            dialogComponentRef.destroy();
            this.dialogComponentRefMap.delete(dialogRef);
        };
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
DialogService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DialogService, factory: function (t) { return DialogService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DialogService, [{
        type: core.Injectable
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.Injector }]; }, null); })();
        return DialogService;
    }());
    DialogService.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DialogService = DialogService;
    exports.DynamicDialogComponent = DynamicDialogComponent;
    exports.DynamicDialogConfig = DynamicDialogConfig;
    exports.DynamicDialogInjector = DynamicDialogInjector;
    exports.DynamicDialogModule = DynamicDialogModule;
    exports.DynamicDialogRef = DynamicDialogRef;
    exports.ɵa = DynamicDialogContent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-dynamicdialog.umd.js.map