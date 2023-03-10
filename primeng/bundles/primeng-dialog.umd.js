(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('primeng/focustrap'),require('primeng/ripple'),require('primeng/api'),exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng/dom'), require('primeng/api'), require('primeng/focustrap'), require('primeng/ripple')) :
    typeof define === 'function' && define.amd ? define('primeng/dialog', ['@angular/core','@angular/common','primeng/focustrap','primeng/ripple','primeng/api','exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng/dom', 'primeng/api', 'primeng/focustrap', 'primeng/ripple'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,global.primeng.focustrap,global.primeng.ripple,global.primeng.api,(global.primeng = global.primeng || {}, global.primeng.dialog = {}), global.ng.core, global.ng.animations, global.ng.common, global.primeng.dom, global.primeng.api, global.primeng.focustrap, global.primeng.ripple));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, animations, common, dom, api, focustrap, ripple) { 
var _c0 = ["titlebar"];
var _c1 = ["content"];
var _c2 = ["footer"];
function Dialog_div_0_div_1_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵattribute("id", ctx_r9.id + "-label");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.header);
} }
function Dialog_div_0_div_1_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵattribute("id", ctx_r10.id + "-label");
} }
function Dialog_div_0_div_1_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c3 = function () { return { "p-dialog-header-icon p-dialog-header-maximize p-link": true }; };
function Dialog_div_0_div_1_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Dialog_div_0_div_1_div_2_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(4); return ctx_r14.maximize(); })("keydown.enter", function Dialog_div_0_div_1_div_2_button_6_Template_button_keydown_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r16 = ɵngcc0.ɵɵnextContext(4); return ctx_r16.maximize(); });
    ɵngcc0.ɵɵelement(1, "span", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(2, _c3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r12.maximized ? ctx_r12.minimizeIcon : ctx_r12.maximizeIcon);
} }
var _c4 = function () { return { "p-dialog-header-icon p-dialog-header-close p-link": true }; };
function Dialog_div_0_div_1_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Dialog_div_0_div_1_div_2_button_7_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var ctx_r17 = ɵngcc0.ɵɵnextContext(4); return ctx_r17.close($event); })("keydown.enter", function Dialog_div_0_div_1_div_2_button_7_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var ctx_r19 = ɵngcc0.ɵɵnextContext(4); return ctx_r19.close($event); });
    ɵngcc0.ɵɵelement(1, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(2, _c4));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r13.closeIcon);
} }
function Dialog_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 11, 12);
    ɵngcc0.ɵɵlistener("mousedown", function Dialog_div_0_div_1_div_2_Template_div_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r20 = ɵngcc0.ɵɵnextContext(3); return ctx_r20.initDrag($event); });
    ɵngcc0.ɵɵtemplate(2, Dialog_div_0_div_1_div_2_span_2_Template, 2, 2, "span", 13);
    ɵngcc0.ɵɵtemplate(3, Dialog_div_0_div_1_div_2_span_3_Template, 2, 1, "span", 13);
    ɵngcc0.ɵɵtemplate(4, Dialog_div_0_div_1_div_2_ng_container_4_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementStart(5, "div", 14);
    ɵngcc0.ɵɵtemplate(6, Dialog_div_0_div_1_div_2_button_6_Template, 2, 3, "button", 15);
    ɵngcc0.ɵɵtemplate(7, Dialog_div_0_div_1_div_2_button_7_Template, 2, 3, "button", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.header);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.headerFacet);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.maximizable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.closable);
} }
function Dialog_div_0_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dialog_div_0_div_1_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Dialog_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20, 21);
    ɵngcc0.ɵɵprojection(2, 2);
    ɵngcc0.ɵɵtemplate(3, Dialog_div_0_div_1_div_7_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footerTemplate);
} }
function Dialog_div_0_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵlistener("mousedown", function Dialog_div_0_div_1_div_8_Template_div_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r24 = ɵngcc0.ɵɵnextContext(3); return ctx_r24.initResize($event); });
    ɵngcc0.ɵɵelementEnd();
} }
var _c5 = function (a1, a2, a3, a4) { return { "p-dialog p-component": true, "p-dialog-rtl": a1, "p-dialog-draggable": a2, "p-dialog-resizable": a3, "p-dialog-maximized": a4 }; };
var _c6 = function (a0, a1) { return { transform: a0, transition: a1 }; };
var _c7 = function (a1) { return { value: "visible", params: a1 }; };
function Dialog_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3, 4);
    ɵngcc0.ɵɵlistener("@animation.start", function Dialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onAnimationStart($event); })("@animation.done", function Dialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onAnimationEnd($event); });
    ɵngcc0.ɵɵtemplate(2, Dialog_div_0_div_1_div_2_Template, 8, 5, "div", 5);
    ɵngcc0.ɵɵelementStart(3, "div", 6, 7);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵtemplate(6, Dialog_div_0_div_1_ng_container_6_Template, 1, 0, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, Dialog_div_0_div_1_div_7_Template, 4, 1, "div", 9);
    ɵngcc0.ɵɵtemplate(8, Dialog_div_0_div_1_div_8_Template, 1, 0, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMap(ctx_r1.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(15, _c5, ctx_r1.rtl, ctx_r1.draggable, ctx_r1.resizable, ctx_r1.maximized))("ngStyle", ctx_r1.style)("pFocusTrapDisabled", ctx_r1.focusTrap === false)("@animation", ɵngcc0.ɵɵpureFunction1(23, _c7, ɵngcc0.ɵɵpureFunction2(20, _c6, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r1.id + "-label");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r1.contentStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", "p-dialog-content")("ngStyle", ctx_r1.contentStyle);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.resizable);
} }
var _c8 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "p-dialog-mask": true, "p-component-overlay": a1, "p-dialog-mask-scrollblocker": a2, "p-dialog-left": a3, "p-dialog-right": a4, "p-dialog-top": a5, "p-dialog-top-left": a6, "p-dialog-top-right": a7, "p-dialog-bottom": a8, "p-dialog-bottom-left": a9, "p-dialog-bottom-right": a10 }; };
function Dialog_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, Dialog_div_0_div_1_Template, 9, 25, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.maskStyleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunctionV(4, _c8, [ctx_r0.modal, ctx_r0.modal || ctx_r0.blockScroll, ctx_r0.position === "left", ctx_r0.position === "right", ctx_r0.position === "top", ctx_r0.position === "topleft" || ctx_r0.position === "top-left", ctx_r0.position === "topright" || ctx_r0.position === "top-right", ctx_r0.position === "bottom", ctx_r0.position === "bottomleft" || ctx_r0.position === "bottom-left", ctx_r0.position === "bottomright" || ctx_r0.position === "bottom-right"]));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
} }
var _c9 = ["*", [["p-header"]], [["p-footer"]]];
var _c10 = ["*", "p-header", "p-footer"];
'use strict';

    var idx = 0;
    var showAnimation = animations.animation([
        animations.style({ transform: '{{transform}}', opacity: 0 }),
        animations.animate('{{transition}}')
    ]);
    var hideAnimation = animations.animation([
        animations.animate('{{transition}}', animations.style({ transform: '{{transform}}', opacity: 0 }))
    ]);
    var Dialog = /** @class */ (function () {
        function Dialog(el, renderer, zone, cd) {
            this.el = el;
            this.renderer = renderer;
            this.zone = zone;
            this.cd = cd;
            this.draggable = true;
            this.resizable = true;
            this.closeOnEscape = true;
            this.closable = true;
            this.showHeader = true;
            this.blockScroll = false;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.minX = 0;
            this.minY = 0;
            this.focusOnShow = true;
            this.keepInViewport = true;
            this.focusTrap = true;
            this.transitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
            this.closeIcon = 'pi pi-times';
            this.minimizeIcon = 'pi pi-window-minimize';
            this.maximizeIcon = 'pi pi-window-maximize';
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.visibleChange = new core.EventEmitter();
            this.onResizeInit = new core.EventEmitter();
            this.onResizeEnd = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.id = "p-dialog-" + idx++;
            this._style = {};
            this._position = "center";
            this.transformOptions = "scale(0.7)";
        }
        Object.defineProperty(Dialog.prototype, "positionLeft", {
            get: function () {
                return 0;
            },
            set: function (_positionLeft) {
                console.log("positionLeft property is deprecated.");
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Dialog.prototype, "positionTop", {
            get: function () {
                return 0;
            },
            set: function (_positionTop) {
                console.log("positionTop property is deprecated.");
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Dialog.prototype, "responsive", {
            get: function () {
                return false;
            },
            set: function (_responsive) {
                console.log("Responsive property is deprecated.");
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Dialog.prototype, "breakpoint", {
            get: function () {
                return 649;
            },
            set: function (_breakpoint) {
                console.log("Breakpoint property is not utilized and deprecated, use CSS media queries instead.");
            },
            enumerable: false,
            configurable: true
        });
        ;
        Dialog.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'header':
                        _this.headerTemplate = item.template;
                        break;
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    case 'footer':
                        _this.footerTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
            });
        };
        Object.defineProperty(Dialog.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                this._visible = value;
                if (this._visible && !this.maskVisible) {
                    this.maskVisible = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dialog.prototype, "style", {
            get: function () {
                return this._style;
            },
            set: function (value) {
                if (value) {
                    this._style = Object.assign({}, value);
                    this.originalStyle = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dialog.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (value) {
                this._position = value;
                switch (value) {
                    case 'topleft':
                    case 'bottomleft':
                    case 'left':
                        this.transformOptions = "translate3d(-100%, 0px, 0px)";
                        break;
                    case 'topright':
                    case 'bottomright':
                    case 'right':
                        this.transformOptions = "translate3d(100%, 0px, 0px)";
                        break;
                    case 'bottom':
                        this.transformOptions = "translate3d(0px, 100%, 0px)";
                        break;
                    case 'top':
                        this.transformOptions = "translate3d(0px, -100%, 0px)";
                        break;
                    default:
                        this.transformOptions = "scale(0.7)";
                        break;
                }
            },
            enumerable: false,
            configurable: true
        });
        ;
        Dialog.prototype.focus = function () {
            var focusable = dom.DomHandler.findSingle(this.container, '[autofocus]');
            if (focusable) {
                this.zone.runOutsideAngular(function () {
                    setTimeout(function () { return focusable.focus(); }, 5);
                });
            }
        };
        Dialog.prototype.close = function (event) {
            this.visibleChange.emit(false);
            event.preventDefault();
        };
        Dialog.prototype.enableModality = function () {
            var _this = this;
            if (this.closable && this.dismissableMask) {
                this.maskClickListener = this.renderer.listen(this.wrapper, 'click', function (event) {
                    if (_this.wrapper && _this.wrapper.isSameNode(event.target)) {
                        _this.close(event);
                    }
                });
            }
            if (this.modal) {
                dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        };
        Dialog.prototype.disableModality = function () {
            if (this.wrapper) {
                if (this.dismissableMask) {
                    this.unbindMaskClickListener();
                }
                if (this.modal) {
                    dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                }
                if (!this.cd.destroyed) {
                    this.cd.detectChanges();
                }
            }
        };
        Dialog.prototype.maximize = function () {
            this.maximized = !this.maximized;
            if (!this.modal && !this.blockScroll) {
                if (this.maximized)
                    dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
                else
                    dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        };
        Dialog.prototype.unbindMaskClickListener = function () {
            if (this.maskClickListener) {
                this.maskClickListener();
                this.maskClickListener = null;
            }
        };
        Dialog.prototype.moveOnTop = function () {
            if (this.autoZIndex) {
                this.container.style.zIndex = String(this.baseZIndex + (++dom.DomHandler.zindex));
                this.wrapper.style.zIndex = String(this.baseZIndex + (dom.DomHandler.zindex - 1));
            }
        };
        Dialog.prototype.initDrag = function (event) {
            if (dom.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || dom.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
                return;
            }
            if (this.draggable) {
                this.dragging = true;
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;
                this.container.style.margin = '0';
                dom.DomHandler.addClass(document.body, 'p-unselectable-text');
            }
        };
        Dialog.prototype.onKeydown = function (event) {
            if (this.focusTrap) {
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
            }
        };
        Dialog.prototype.onDrag = function (event) {
            if (this.dragging) {
                var containerWidth = dom.DomHandler.getOuterWidth(this.container);
                var containerHeight = dom.DomHandler.getOuterHeight(this.container);
                var deltaX = event.pageX - this.lastPageX;
                var deltaY = event.pageY - this.lastPageY;
                var offset = dom.DomHandler.getOffset(this.container);
                var leftPos = offset.left + deltaX;
                var topPos = offset.top + deltaY;
                var viewport = dom.DomHandler.getViewport();
                this.container.style.position = 'fixed';
                if (this.keepInViewport) {
                    if (leftPos >= this.minX && (leftPos + containerWidth) < viewport.width) {
                        this._style.left = leftPos + 'px';
                        this.lastPageX = event.pageX;
                        this.container.style.left = leftPos + 'px';
                    }
                    if (topPos >= this.minY && (topPos + containerHeight) < viewport.height) {
                        this._style.top = topPos + 'px';
                        this.lastPageY = event.pageY;
                        this.container.style.top = topPos + 'px';
                    }
                }
                else {
                    this.lastPageX = event.pageX;
                    this.container.style.left = leftPos + 'px';
                    this.lastPageY = event.pageY;
                    this.container.style.top = topPos + 'px';
                }
            }
        };
        Dialog.prototype.endDrag = function (event) {
            if (this.dragging) {
                this.dragging = false;
                dom.DomHandler.removeClass(document.body, 'p-unselectable-text');
                this.cd.detectChanges();
                this.onDragEnd.emit(event);
            }
        };
        Dialog.prototype.resetPosition = function () {
            this.container.style.position = '';
            this.container.style.left = '';
            this.container.style.top = '';
            this.container.style.margin = '';
        };
        //backward compatibility
        Dialog.prototype.center = function () {
            this.resetPosition();
        };
        Dialog.prototype.initResize = function (event) {
            if (this.resizable) {
                this.resizing = true;
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;
                dom.DomHandler.addClass(document.body, 'p-unselectable-text');
                this.onResizeInit.emit(event);
            }
        };
        Dialog.prototype.onResize = function (event) {
            if (this.resizing) {
                var deltaX = event.pageX - this.lastPageX;
                var deltaY = event.pageY - this.lastPageY;
                var containerWidth = dom.DomHandler.getOuterWidth(this.container);
                var containerHeight = dom.DomHandler.getOuterHeight(this.container);
                var contentHeight = dom.DomHandler.getOuterHeight(this.contentViewChild.nativeElement);
                var newWidth = containerWidth + deltaX;
                var newHeight = containerHeight + deltaY;
                var minWidth = this.container.style.minWidth;
                var minHeight = this.container.style.minHeight;
                var offset = dom.DomHandler.getOffset(this.container);
                var viewport = dom.DomHandler.getViewport();
                var hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
                if (hasBeenDragged) {
                    newWidth += deltaX;
                    newHeight += deltaY;
                }
                if ((!minWidth || newWidth > parseInt(minWidth)) && (offset.left + newWidth) < viewport.width) {
                    this._style.width = newWidth + 'px';
                    this.container.style.width = this._style.width;
                }
                if ((!minHeight || newHeight > parseInt(minHeight)) && (offset.top + newHeight) < viewport.height) {
                    this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + 'px';
                    if (this._style.height) {
                        this._style.height = newHeight + 'px';
                        this.container.style.height = this._style.height;
                    }
                }
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;
            }
        };
        Dialog.prototype.resizeEnd = function (event) {
            if (this.resizing) {
                this.resizing = false;
                dom.DomHandler.removeClass(document.body, 'p-unselectable-text');
                this.onResizeEnd.emit(event);
            }
        };
        Dialog.prototype.bindGlobalListeners = function () {
            if (this.draggable) {
                this.bindDocumentDragListener();
                this.bindDocumentDragEndListener();
            }
            if (this.resizable) {
                this.bindDocumentResizeListeners();
            }
            if (this.closeOnEscape && this.closable) {
                this.bindDocumentEscapeListener();
            }
        };
        Dialog.prototype.unbindGlobalListeners = function () {
            this.unbindDocumentDragListener();
            this.unbindDocumentDragEndListener();
            this.unbindDocumentResizeListeners();
            this.unbindDocumentEscapeListener();
        };
        Dialog.prototype.bindDocumentDragListener = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentDragListener = _this.onDrag.bind(_this);
                window.document.addEventListener('mousemove', _this.documentDragListener);
            });
        };
        Dialog.prototype.unbindDocumentDragListener = function () {
            if (this.documentDragListener) {
                window.document.removeEventListener('mousemove', this.documentDragListener);
                this.documentDragListener = null;
            }
        };
        Dialog.prototype.bindDocumentDragEndListener = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentDragEndListener = _this.endDrag.bind(_this);
                window.document.addEventListener('mouseup', _this.documentDragEndListener);
            });
        };
        Dialog.prototype.unbindDocumentDragEndListener = function () {
            if (this.documentDragEndListener) {
                window.document.removeEventListener('mouseup', this.documentDragEndListener);
                this.documentDragEndListener = null;
            }
        };
        Dialog.prototype.bindDocumentResizeListeners = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.documentResizeListener = _this.onResize.bind(_this);
                _this.documentResizeEndListener = _this.resizeEnd.bind(_this);
                window.document.addEventListener('mousemove', _this.documentResizeListener);
                window.document.addEventListener('mouseup', _this.documentResizeEndListener);
            });
        };
        Dialog.prototype.unbindDocumentResizeListeners = function () {
            if (this.documentResizeListener && this.documentResizeEndListener) {
                window.document.removeEventListener('mousemove', this.documentResizeListener);
                window.document.removeEventListener('mouseup', this.documentResizeEndListener);
                this.documentResizeListener = null;
                this.documentResizeEndListener = null;
            }
        };
        Dialog.prototype.bindDocumentEscapeListener = function () {
            var _this = this;
            var documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentEscapeListener = this.renderer.listen(documentTarget, 'keydown', function (event) {
                if (event.which == 27) {
                    if (parseInt(_this.container.style.zIndex) === (dom.DomHandler.zindex + _this.baseZIndex)) {
                        _this.close(event);
                    }
                }
            });
        };
        Dialog.prototype.unbindDocumentEscapeListener = function () {
            if (this.documentEscapeListener) {
                this.documentEscapeListener();
                this.documentEscapeListener = null;
            }
        };
        Dialog.prototype.appendContainer = function () {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.wrapper);
                else
                    dom.DomHandler.appendChild(this.wrapper, this.appendTo);
            }
        };
        Dialog.prototype.restoreAppend = function () {
            if (this.container && this.appendTo) {
                this.el.nativeElement.appendChild(this.wrapper);
            }
        };
        Dialog.prototype.onAnimationStart = function (event) {
            switch (event.toState) {
                case 'visible':
                    this.container = event.element;
                    this.wrapper = this.container.parentElement;
                    this.onShow.emit({});
                    this.appendContainer();
                    this.moveOnTop();
                    this.bindGlobalListeners();
                    if (this.modal) {
                        this.enableModality();
                    }
                    if (!this.modal && this.blockScroll) {
                        dom.DomHandler.addClass(document.body, 'p-overflow-hidden');
                    }
                    if (this.focusOnShow) {
                        this.focus();
                    }
                    break;
            }
        };
        Dialog.prototype.onAnimationEnd = function (event) {
            switch (event.toState) {
                case 'void':
                    this.onContainerDestroy();
                    this.onHide.emit({});
                    break;
            }
        };
        Dialog.prototype.onContainerDestroy = function () {
            this.unbindGlobalListeners();
            this.dragging = false;
            this.maskVisible = false;
            if (this.maximized) {
                dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.maximized = false;
            }
            if (this.modal) {
                this.disableModality();
            }
            if (this.blockScroll) {
                dom.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
            this.container = null;
            this.wrapper = null;
            this._style = this.originalStyle ? Object.assign({}, this.originalStyle) : {};
        };
        Dialog.prototype.ngOnDestroy = function () {
            if (this.container) {
                this.restoreAppend();
                this.onContainerDestroy();
            }
        };
Dialog.ɵfac = function Dialog_Factory(t) { return new (t || Dialog)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Dialog.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Dialog, selectors: [["p-dialog"]], contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Header, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.Footer, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Dialog_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerViewChild = _t.first);
    } }, inputs: { draggable: "draggable", resizable: "resizable", closeOnEscape: "closeOnEscape", closable: "closable", showHeader: "showHeader", blockScroll: "blockScroll", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", minX: "minX", minY: "minY", focusOnShow: "focusOnShow", keepInViewport: "keepInViewport", focusTrap: "focusTrap", transitionOptions: "transitionOptions", closeIcon: "closeIcon", minimizeIcon: "minimizeIcon", maximizeIcon: "maximizeIcon", positionLeft: "positionLeft", positionTop: "positionTop", responsive: "responsive", breakpoint: "breakpoint", visible: "visible", style: "style", position: "position", header: "header", contentStyle: "contentStyle", contentStyleClass: "contentStyleClass", modal: "modal", dismissableMask: "dismissableMask", rtl: "rtl", appendTo: "appendTo", styleClass: "styleClass", maskStyleClass: "maskStyleClass", maximizable: "maximizable" }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange", onResizeInit: "onResizeInit", onResizeEnd: "onResizeEnd", onDragEnd: "onDragEnd" }, ngContentSelectors: _c10, decls: 1, vars: 1, consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"], ["container", ""], ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["content", ""], [4, "ngTemplateOutlet"], ["class", "p-dialog-footer", 4, "ngIf"], ["class", "p-resizable-handle", "style", "z-index: 90;", 3, "mousedown", 4, "ngIf"], [1, "p-dialog-header", 3, "mousedown"], ["titlebar", ""], ["class", "p-dialog-title", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title"], ["type", "button", "tabindex", "-1", "pRipple", "", 3, "ngClass", "click", "keydown.enter"], [1, "p-dialog-header-maximize-icon", 3, "ngClass"], [1, "p-dialog-header-close-icon", 3, "ngClass"], [1, "p-dialog-footer"], ["footer", ""], [1, "p-resizable-handle", 2, "z-index", "90", 3, "mousedown"]], template: function Dialog_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c9);
        ɵngcc0.ɵɵtemplate(0, Dialog_div_0_Template, 2, 15, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.maskVisible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.FocusTrap, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet, ɵngcc3.Ripple], styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"], encapsulation: 2, data: { animation: [
            animations.trigger('animation', [
                animations.transition('void => visible', [
                    animations.useAnimation(showAnimation)
                ]),
                animations.transition('visible => void', [
                    animations.useAnimation(hideAnimation)
                ])
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dialog, [{
        type: core.Component,
        args: [{
                selector: 'p-dialog',
                template: "\n        <div *ngIf=\"maskVisible\" [class]=\"maskStyleClass\"\n            [ngClass]=\"{'p-dialog-mask': true, 'p-component-overlay': this.modal, 'p-dialog-mask-scrollblocker': this.modal || this.blockScroll,\n                'p-dialog-left': position === 'left',\n                'p-dialog-right': position === 'right',\n                'p-dialog-top': position === 'top',\n                'p-dialog-top-left': position === 'topleft' || position === 'top-left',\n                'p-dialog-top-right': position === 'topright' || position === 'top-right',\n                'p-dialog-bottom': position === 'bottom',\n                'p-dialog-bottom-left': position === 'bottomleft' || position === 'bottom-left',\n                'p-dialog-bottom-right': position === 'bottomright' || position === 'bottom-right'}\">\n            <div #container [ngClass]=\"{'p-dialog p-component':true, 'p-dialog-rtl':rtl,'p-dialog-draggable':draggable,'p-dialog-resizable':resizable, 'p-dialog-maximized': maximized}\"\n                [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"visible\" pFocusTrap [pFocusTrapDisabled]=\"focusTrap === false\"\n                [@animation]=\"{value: 'visible', params: {transform: transformOptions, transition: transitionOptions}}\" (@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" [attr.aria-labelledby]=\"id + '-label'\">\n                <div #titlebar class=\"p-dialog-header\" (mousedown)=\"initDrag($event)\" *ngIf=\"showHeader\">\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                    <span [attr.id]=\"id + '-label'\" class=\"p-dialog-title\" *ngIf=\"headerFacet\">\n                        <ng-content select=\"p-header\"></ng-content>\n                    </span>\n                    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n                    <div class=\"p-dialog-header-icons\">\n                        <button *ngIf=\"maximizable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-maximize p-link':true}\" (click)=\"maximize()\" (keydown.enter)=\"maximize()\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-maximize-icon\" [ngClass]=\"maximized ? minimizeIcon : maximizeIcon\"></span>\n                        </button>\n                        <button *ngIf=\"closable\" type=\"button\" [ngClass]=\"{'p-dialog-header-icon p-dialog-header-close p-link':true}\" (click)=\"close($event)\" (keydown.enter)=\"close($event)\" tabindex=\"-1\" pRipple>\n                            <span class=\"p-dialog-header-close-icon\" [ngClass]=\"closeIcon\"></span>\n                        </button>\n                    </div>\n                </div>\n                <div #content [ngClass]=\"'p-dialog-content'\" [ngStyle]=\"contentStyle\" [class]=\"contentStyleClass\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n                <div #footer class=\"p-dialog-footer\" *ngIf=\"footerFacet || footerTemplate\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                    <ng-container *ngTemplateOutlet=\"footerTemplate\"></ng-container>\n                </div>\n                <div *ngIf=\"resizable\" class=\"p-resizable-handle\" style=\"z-index: 90;\" (mousedown)=\"initResize($event)\"></div>\n            </div>\n        </div>\n    ",
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
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-dialog-mask{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,0,0,0);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition-property:background-color;width:100%}.p-dialog,.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{-ms-flex-direction:column;-ms-transform:scale(1);display:-ms-flexbox;display:flex;flex-direction:column;max-height:90%;position:relative;transform:scale(1)}.p-dialog-content{overflow-y:auto}.p-dialog-header{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;justify-content:space-between}.p-dialog-footer,.p-dialog-header{-ms-flex-negative:0;flex-shrink:0}.p-dialog .p-dialog-header-icon,.p-dialog .p-dialog-header-icons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-dialog .p-dialog-header-icon{-ms-flex-pack:center;justify-content:center;overflow:hidden;position:relative}.p-dialog-mask.p-dialog-mask-leave{background-color:rgba(0,0,0,0)}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-top .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-ms-transform:none;height:100%;max-height:100%;transform:none;transition:none;width:100vw!important}.p-dialog-maximized .p-dialog-content{-ms-flex-positive:1;flex-grow:1}.p-dialog-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-right{-ms-flex-pack:end;justify-content:flex-end}.p-dialog-top,.p-dialog-top-left{-ms-flex-align:start;align-items:flex-start}.p-dialog-top-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-top-right{-ms-flex-align:start;-ms-flex-pack:end;align-items:flex-start;justify-content:flex-end}.p-dialog-bottom,.p-dialog-bottom-left{-ms-flex-align:end;align-items:flex-end}.p-dialog-bottom-left{-ms-flex-pack:start;justify-content:flex-start}.p-dialog-bottom-right{-ms-flex-align:end;-ms-flex-pack:end;align-items:flex-end;justify-content:flex-end}.p-dialog .p-resizable-handle{bottom:1px;cursor:se-resize;display:block;font-size:.1px;height:12px;position:absolute;right:1px;width:12px}.p-confirm-dialog .p-dialog-content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { draggable: [{
            type: core.Input
        }], resizable: [{
            type: core.Input
        }], closeOnEscape: [{
            type: core.Input
        }], closable: [{
            type: core.Input
        }], showHeader: [{
            type: core.Input
        }], blockScroll: [{
            type: core.Input
        }], autoZIndex: [{
            type: core.Input
        }], baseZIndex: [{
            type: core.Input
        }], minX: [{
            type: core.Input
        }], minY: [{
            type: core.Input
        }], focusOnShow: [{
            type: core.Input
        }], keepInViewport: [{
            type: core.Input
        }], focusTrap: [{
            type: core.Input
        }], transitionOptions: [{
            type: core.Input
        }], closeIcon: [{
            type: core.Input
        }], minimizeIcon: [{
            type: core.Input
        }], maximizeIcon: [{
            type: core.Input
        }], onShow: [{
            type: core.Output
        }], onHide: [{
            type: core.Output
        }], visibleChange: [{
            type: core.Output
        }], onResizeInit: [{
            type: core.Output
        }], onResizeEnd: [{
            type: core.Output
        }], onDragEnd: [{
            type: core.Output
        }], positionLeft: [{
            type: core.Input
        }], positionTop: [{
            type: core.Input
        }], responsive: [{
            type: core.Input
        }], breakpoint: [{
            type: core.Input
        }], visible: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], position: [{
            type: core.Input
        }], header: [{
            type: core.Input
        }], contentStyle: [{
            type: core.Input
        }], contentStyleClass: [{
            type: core.Input
        }], modal: [{
            type: core.Input
        }], dismissableMask: [{
            type: core.Input
        }], rtl: [{
            type: core.Input
        }], appendTo: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], maskStyleClass: [{
            type: core.Input
        }], maximizable: [{
            type: core.Input
        }], headerFacet: [{
            type: core.ContentChild,
            args: [api.Header]
        }], footerFacet: [{
            type: core.ContentChild,
            args: [api.Footer]
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }], headerViewChild: [{
            type: core.ViewChild,
            args: ['titlebar']
        }], contentViewChild: [{
            type: core.ViewChild,
            args: ['content']
        }], footerViewChild: [{
            type: core.ViewChild,
            args: ['footer']
        }] }); })();
        return Dialog;
    }());
    Dialog.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef }
    ]; };
    Dialog.propDecorators = {
        header: [{ type: core.Input }],
        draggable: [{ type: core.Input }],
        resizable: [{ type: core.Input }],
        positionLeft: [{ type: core.Input }],
        positionTop: [{ type: core.Input }],
        contentStyle: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        modal: [{ type: core.Input }],
        closeOnEscape: [{ type: core.Input }],
        dismissableMask: [{ type: core.Input }],
        rtl: [{ type: core.Input }],
        closable: [{ type: core.Input }],
        responsive: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        maskStyleClass: [{ type: core.Input }],
        showHeader: [{ type: core.Input }],
        breakpoint: [{ type: core.Input }],
        blockScroll: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        minX: [{ type: core.Input }],
        minY: [{ type: core.Input }],
        focusOnShow: [{ type: core.Input }],
        maximizable: [{ type: core.Input }],
        keepInViewport: [{ type: core.Input }],
        focusTrap: [{ type: core.Input }],
        transitionOptions: [{ type: core.Input }],
        closeIcon: [{ type: core.Input }],
        minimizeIcon: [{ type: core.Input }],
        maximizeIcon: [{ type: core.Input }],
        headerFacet: [{ type: core.ContentChild, args: [api.Header,] }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }],
        headerViewChild: [{ type: core.ViewChild, args: ['titlebar',] }],
        contentViewChild: [{ type: core.ViewChild, args: ['content',] }],
        footerViewChild: [{ type: core.ViewChild, args: ['footer',] }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        visibleChange: [{ type: core.Output }],
        onResizeInit: [{ type: core.Output }],
        onResizeEnd: [{ type: core.Output }],
        onDragEnd: [{ type: core.Output }],
        visible: [{ type: core.Input }],
        style: [{ type: core.Input }],
        position: [{ type: core.Input }]
    };
    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
DialogModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DialogModule });
DialogModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[common.CommonModule, focustrap.FocusTrapModule, ripple.RippleModule], ɵngcc4.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DialogModule, { declarations: [Dialog], imports: [ɵngcc1.CommonModule, ɵngcc2.FocusTrapModule, ɵngcc3.RippleModule], exports: [Dialog, ɵngcc4.SharedModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DialogModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, focustrap.FocusTrapModule, ripple.RippleModule],
                exports: [Dialog, api.SharedModule],
                declarations: [Dialog]
            }]
    }], function () { return []; }, null); })();
        return DialogModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Dialog = Dialog;
    exports.DialogModule = DialogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-dialog.umd.js.map