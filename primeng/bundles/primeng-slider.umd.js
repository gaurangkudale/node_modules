(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng/slider', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.slider = {}), global.ng.core, global.ng.common, global.primeng.dom, global.ng.forms));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, dom, forms) { 
var _c0 = ["sliderHandle"];
var _c1 = ["sliderHandleStart"];
var _c2 = ["sliderHandleEnd"];
var _c3 = function (a0, a1) { return { "left": a0, width: a1 }; };
function Slider_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(1, _c3, ctx_r0.handleValues[0] + "%", ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"));
} }
var _c4 = function (a0, a1) { return { "bottom": a0, height: a1 }; };
function Slider_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(1, _c4, ctx_r1.handleValues[0] + "%", ctx_r1.handleValues[1] - ctx_r1.handleValues[0] + "%"));
} }
var _c5 = function (a0) { return { "height": a0 }; };
function Slider_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c5, ctx_r2.handleValue + "%"));
} }
var _c6 = function (a0) { return { "width": a0 }; };
function Slider_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c6, ctx_r3.handleValue + "%"));
} }
var _c7 = function (a0, a1) { return { "left": a0, "bottom": a1 }; };
function Slider_span_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5, 6);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onHandleKeydown($event); })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onMouseDown($event); })("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onTouchStart($event); })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onTouchMove($event); })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r4.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(8, _c7, ctx_r4.orientation == "horizontal" ? ctx_r4.handleValue + "%" : null, ctx_r4.orientation == "vertical" ? ctx_r4.handleValue + "%" : null));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r4.disabled ? null : ctx_r4.tabindex)("aria-valuemin", ctx_r4.min)("aria-valuenow", ctx_r4.value)("aria-valuemax", ctx_r4.max)("aria-labelledby", ctx_r4.ariaLabelledBy);
} }
var _c8 = function (a0) { return { "p-slider-handle-active": a0 }; };
function Slider_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7, 8);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onHandleKeydown($event, 0); })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onMouseDown($event, 0); })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.onTouchStart($event, 0); })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onTouchMove($event, 0); })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r5.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c7, ctx_r5.rangeStartLeft, ctx_r5.rangeStartBottom))("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx_r5.handleIndex == 0));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r5.disabled ? null : ctx_r5.tabindex)("aria-valuemin", ctx_r5.min)("aria-valuenow", ctx_r5.value ? ctx_r5.value[0] : null)("aria-valuemax", ctx_r5.max)("aria-labelledby", ctx_r5.ariaLabelledBy);
} }
function Slider_span_7_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 7, 9);
    ɵngcc0.ɵɵlistener("keydown", function Slider_span_7_Template_span_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onHandleKeydown($event, 1); })("mousedown", function Slider_span_7_Template_span_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onMouseDown($event, 1); })("touchstart", function Slider_span_7_Template_span_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onTouchStart($event, 1); })("touchmove", function Slider_span_7_Template_span_touchmove_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onTouchMove($event, 1); })("touchend", function Slider_span_7_Template_span_touchend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onTouchEnd($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transition", ctx_r6.dragging ? "none" : null);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c7, ctx_r6.rangeEndLeft, ctx_r6.rangeEndBottom))("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c8, ctx_r6.handleIndex == 1));
    ɵngcc0.ɵɵattribute("tabindex", ctx_r6.disabled ? null : ctx_r6.tabindex)("aria-valuemin", ctx_r6.min)("aria-valuenow", ctx_r6.value ? ctx_r6.value[1] : null)("aria-valuemax", ctx_r6.max)("aria-labelledby", ctx_r6.ariaLabelledBy);
} }
var _c9 = function (a1, a2, a3, a4) { return { "p-slider p-component": true, "p-disabled": a1, "p-slider-horizontal": a2, "p-slider-vertical": a3, "p-slider-animate": a4 }; };
'use strict';

    var SLIDER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return Slider; }),
        multi: true
    };
    var Slider = /** @class */ (function () {
        function Slider(el, renderer, ngZone, cd) {
            this.el = el;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cd = cd;
            this.min = 0;
            this.max = 100;
            this.orientation = 'horizontal';
            this.tabindex = 0;
            this.onChange = new core.EventEmitter();
            this.onSlideEnd = new core.EventEmitter();
            this.handleValues = [];
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
            this.handleIndex = 0;
        }
        Slider.prototype.onMouseDown = function (event, index) {
            if (this.disabled) {
                return;
            }
            this.dragging = true;
            this.updateDomData();
            this.sliderHandleClick = true;
            this.handleIndex = index;
            this.bindDragListeners();
            event.target.focus();
            event.preventDefault();
            if (this.animate) {
                dom.DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
            }
        };
        Slider.prototype.onTouchStart = function (event, index) {
            if (this.disabled) {
                return;
            }
            var touchobj = event.changedTouches[0];
            this.startHandleValue = (this.range) ? this.handleValues[index] : this.handleValue;
            this.dragging = true;
            this.handleIndex = index;
            if (this.orientation === 'horizontal') {
                this.startx = parseInt(touchobj.clientX, 10);
                this.barWidth = this.el.nativeElement.children[0].offsetWidth;
            }
            else {
                this.starty = parseInt(touchobj.clientY, 10);
                this.barHeight = this.el.nativeElement.children[0].offsetHeight;
            }
            if (this.animate) {
                dom.DomHandler.removeClass(this.el.nativeElement.children[0], 'p-slider-animate');
            }
            event.preventDefault();
        };
        Slider.prototype.onTouchMove = function (event, index) {
            if (this.disabled) {
                return;
            }
            var touchobj = event.changedTouches[0], handleValue = 0;
            if (this.orientation === 'horizontal') {
                handleValue = Math.floor(((parseInt(touchobj.clientX, 10) - this.startx) * 100) / (this.barWidth)) + this.startHandleValue;
            }
            else {
                handleValue = Math.floor(((this.starty - parseInt(touchobj.clientY, 10)) * 100) / (this.barHeight)) + this.startHandleValue;
            }
            this.setValueFromHandle(event, handleValue);
            event.preventDefault();
        };
        Slider.prototype.onTouchEnd = function (event, index) {
            if (this.disabled) {
                return;
            }
            this.dragging = false;
            if (this.range)
                this.onSlideEnd.emit({ originalEvent: event, values: this.values });
            else
                this.onSlideEnd.emit({ originalEvent: event, value: this.value });
            if (this.animate) {
                dom.DomHandler.addClass(this.el.nativeElement.children[0], 'p-slider-animate');
            }
            event.preventDefault();
        };
        Slider.prototype.onBarClick = function (event) {
            if (this.disabled) {
                return;
            }
            if (!this.sliderHandleClick) {
                this.updateDomData();
                this.handleChange(event);
            }
            this.sliderHandleClick = false;
        };
        Slider.prototype.onHandleKeydown = function (event, handleIndex) {
            if (this.disabled) {
                return;
            }
            if (event.which == 38 || event.which == 39) {
                this.spin(event, 1, handleIndex);
            }
            else if (event.which == 37 || event.which == 40) {
                this.spin(event, -1, handleIndex);
            }
        };
        Slider.prototype.spin = function (event, dir, handleIndex) {
            var step = (this.step || 1) * dir;
            if (this.range) {
                this.handleIndex = handleIndex;
                this.updateValue(this.values[this.handleIndex] + step);
                this.updateHandleValue();
            }
            else {
                this.updateValue(this.value + step);
                this.updateHandleValue();
            }
            event.preventDefault();
        };
        Slider.prototype.handleChange = function (event) {
            var handleValue = this.calculateHandleValue(event);
            this.setValueFromHandle(event, handleValue);
        };
        Slider.prototype.bindDragListeners = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                var documentTarget = _this.el ? _this.el.nativeElement.ownerDocument : 'document';
                if (!_this.dragListener) {
                    _this.dragListener = _this.renderer.listen(documentTarget, 'mousemove', function (event) {
                        if (_this.dragging) {
                            _this.ngZone.run(function () {
                                _this.handleChange(event);
                            });
                        }
                    });
                }
                if (!_this.mouseupListener) {
                    _this.mouseupListener = _this.renderer.listen(documentTarget, 'mouseup', function (event) {
                        if (_this.dragging) {
                            _this.dragging = false;
                            _this.ngZone.run(function () {
                                if (_this.range)
                                    _this.onSlideEnd.emit({ originalEvent: event, values: _this.values });
                                else
                                    _this.onSlideEnd.emit({ originalEvent: event, value: _this.value });
                                if (_this.animate) {
                                    dom.DomHandler.addClass(_this.el.nativeElement.children[0], 'p-slider-animate');
                                }
                            });
                        }
                    });
                }
            });
        };
        Slider.prototype.unbindDragListeners = function () {
            if (this.dragListener) {
                this.dragListener();
            }
            if (this.mouseupListener) {
                this.mouseupListener();
            }
        };
        Slider.prototype.setValueFromHandle = function (event, handleValue) {
            var newValue = this.getValueFromHandle(handleValue);
            if (this.range) {
                if (this.step) {
                    this.handleStepChange(newValue, this.values[this.handleIndex]);
                }
                else {
                    this.handleValues[this.handleIndex] = handleValue;
                    this.updateValue(newValue, event);
                }
            }
            else {
                if (this.step) {
                    this.handleStepChange(newValue, this.value);
                }
                else {
                    this.handleValue = handleValue;
                    this.updateValue(newValue, event);
                }
            }
            this.cd.markForCheck();
        };
        Slider.prototype.handleStepChange = function (newValue, oldValue) {
            var diff = (newValue - oldValue);
            var val = oldValue;
            if (diff < 0) {
                val = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
            }
            else if (diff > 0) {
                val = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
            }
            this.updateValue(val);
            this.updateHandleValue();
        };
        Slider.prototype.writeValue = function (value) {
            if (this.range)
                this.values = value || [0, 0];
            else
                this.value = value || 0;
            this.updateHandleValue();
            this.cd.markForCheck();
        };
        Slider.prototype.registerOnChange = function (fn) {
            this.onModelChange = fn;
        };
        Slider.prototype.registerOnTouched = function (fn) {
            this.onModelTouched = fn;
        };
        Slider.prototype.setDisabledState = function (val) {
            this.disabled = val;
            this.cd.markForCheck();
        };
        Object.defineProperty(Slider.prototype, "rangeStartLeft", {
            get: function () {
                return this.isVertical() ? 'auto' : this.handleValues[0] + '%';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "rangeStartBottom", {
            get: function () {
                return this.isVertical() ? this.handleValues[0] + '%' : 'auto';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "rangeEndLeft", {
            get: function () {
                return this.isVertical() ? 'auto' : this.handleValues[1] + '%';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "rangeEndBottom", {
            get: function () {
                return this.isVertical() ? this.handleValues[1] + '%' : 'auto';
            },
            enumerable: false,
            configurable: true
        });
        Slider.prototype.isVertical = function () {
            return this.orientation === 'vertical';
        };
        Slider.prototype.updateDomData = function () {
            var rect = this.el.nativeElement.children[0].getBoundingClientRect();
            this.initX = rect.left + dom.DomHandler.getWindowScrollLeft();
            this.initY = rect.top + dom.DomHandler.getWindowScrollTop();
            this.barWidth = this.el.nativeElement.children[0].offsetWidth;
            this.barHeight = this.el.nativeElement.children[0].offsetHeight;
        };
        Slider.prototype.calculateHandleValue = function (event) {
            if (this.orientation === 'horizontal')
                return ((event.pageX - this.initX) * 100) / (this.barWidth);
            else
                return (((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight);
        };
        Slider.prototype.updateHandleValue = function () {
            if (this.range) {
                this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
                this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
            }
            else {
                if (this.value < this.min)
                    this.handleValue = 0;
                else if (this.value > this.max)
                    this.handleValue = 100;
                else
                    this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
            }
        };
        Slider.prototype.updateValue = function (val, event) {
            if (this.range) {
                var value = val;
                if (this.handleIndex == 0) {
                    if (value < this.min) {
                        value = this.min;
                        this.handleValues[0] = 0;
                    }
                    else if (value > this.values[1]) {
                        value = this.values[1];
                        this.handleValues[0] = this.handleValues[1];
                    }
                    this.sliderHandleStart.nativeElement.focus();
                }
                else {
                    if (value > this.max) {
                        value = this.max;
                        this.handleValues[1] = 100;
                    }
                    else if (value < this.values[0]) {
                        value = this.values[0];
                        this.handleValues[1] = this.handleValues[0];
                    }
                    this.sliderHandleEnd.nativeElement.focus();
                }
                this.values[this.handleIndex] = this.getNormalizedValue(value);
                this.values = this.values.slice();
                this.onModelChange(this.values);
                this.onChange.emit({ event: event, values: this.values });
            }
            else {
                if (val < this.min) {
                    val = this.min;
                    this.handleValue = 0;
                }
                else if (val > this.max) {
                    val = this.max;
                    this.handleValue = 100;
                }
                this.value = this.getNormalizedValue(val);
                this.onModelChange(this.value);
                this.onChange.emit({ event: event, value: this.value });
                this.sliderHandle.nativeElement.focus();
            }
        };
        Slider.prototype.getValueFromHandle = function (handleValue) {
            return (this.max - this.min) * (handleValue / 100) + this.min;
        };
        Slider.prototype.getDecimalsCount = function (value) {
            if (value && Math.floor(value) !== value)
                return value.toString().split(".")[1].length || 0;
            return 0;
        };
        Slider.prototype.getNormalizedValue = function (val) {
            var decimalsCount = this.getDecimalsCount(this.step);
            if (decimalsCount > 0) {
                return +val.toFixed(decimalsCount);
            }
            else {
                return Math.floor(val);
            }
        };
        Slider.prototype.ngOnDestroy = function () {
            this.unbindDragListeners();
        };
Slider.ɵfac = function Slider_Factory(t) { return new (t || Slider)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Slider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Slider, selectors: [["p-slider"]], viewQuery: function Slider_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandleStart = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.sliderHandleEnd = _t.first);
    } }, inputs: { min: "min", max: "max", orientation: "orientation", tabindex: "tabindex", disabled: "disabled", animate: "animate", step: "step", range: "range", style: "style", styleClass: "styleClass", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onChange: "onChange", onSlideEnd: "onSlideEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([SLIDER_VALUE_ACCESSOR])], decls: 8, vars: 16, consts: [[3, "ngStyle", "ngClass", "click"], ["class", "p-slider-range", 3, "ngStyle", 4, "ngIf"], ["class", "p-slider-handle", 3, "transition", "ngStyle", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["class", "p-slider-handle", 3, "transition", "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [1, "p-slider-range", 3, "ngStyle"], [1, "p-slider-handle", 3, "ngStyle", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandle", ""], [1, "p-slider-handle", 3, "ngStyle", "ngClass", "keydown", "mousedown", "touchstart", "touchmove", "touchend"], ["sliderHandleStart", ""], ["sliderHandleEnd", ""]], template: function Slider_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function Slider_Template_div_click_0_listener($event) { return ctx.onBarClick($event); });
        ɵngcc0.ɵɵtemplate(1, Slider_span_1_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵtemplate(2, Slider_span_2_Template, 1, 4, "span", 1);
        ɵngcc0.ɵɵtemplate(3, Slider_span_3_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(4, Slider_span_4_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(5, Slider_span_5_Template, 2, 11, "span", 2);
        ɵngcc0.ɵɵtemplate(6, Slider_span_6_Template, 2, 14, "span", 3);
        ɵngcc0.ɵɵtemplate(7, Slider_span_7_Template, 2, 14, "span", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction4(11, _c9, ctx.disabled, ctx.orientation == "horizontal", ctx.orientation == "vertical", ctx.animate));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range && ctx.orientation == "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range && ctx.orientation == "vertical");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "vertical");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range && ctx.orientation == "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.range);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.range);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".p-slider{position:relative}.p-slider .p-slider-handle{-ms-touch-action:none;cursor:-webkit-grab;cursor:grab;touch-action:none}.p-slider-range,.p-slider .p-slider-handle{display:block;position:absolute}.p-slider-horizontal .p-slider-range{height:100%;left:0;top:0}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Slider, [{
        type: core.Component,
        args: [{
                selector: 'p-slider',
                template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'p-slider p-component':true,'p-disabled':disabled,\n            'p-slider-horizontal':orientation == 'horizontal','p-slider-vertical':orientation == 'vertical','p-slider-animate':animate}\"\n            (click)=\"onBarClick($event)\">\n            <span *ngIf=\"range && orientation == 'horizontal'\" class=\"p-slider-range\" [ngStyle]=\"{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"range && orientation == 'vertical'\" class=\"p-slider-range\" [ngStyle]=\"{'bottom':handleValues[0] + '%',height: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"!range && orientation=='vertical'\" class=\"p-slider-range\" [ngStyle]=\"{'height': handleValue + '%'}\"></span>\n            <span *ngIf=\"!range && orientation=='horizontal'\" class=\"p-slider-range\" [ngStyle]=\"{'width': handleValue + '%'}\"></span>\n            <span #sliderHandle *ngIf=\"!range\" [attr.tabindex]=\"disabled ? null : tabindex\" (keydown)=\"onHandleKeydown($event)\" class=\"p-slider-handle\" (mousedown)=\"onMouseDown($event)\" (touchstart)=\"onTouchStart($event)\" (touchmove)=\"onTouchMove($event)\" (touchend)=\"onTouchEnd($event)\"\n                [style.transition]=\"dragging ? 'none': null\" [ngStyle]=\"{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleStart *ngIf=\"range\" [attr.tabindex]=\"disabled ? null : tabindex\" (keydown)=\"onHandleKeydown($event,0)\" (mousedown)=\"onMouseDown($event,0)\" (touchstart)=\"onTouchStart($event,0)\" (touchmove)=\"onTouchMove($event,0)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"p-slider-handle\" \n                [ngStyle]=\"{'left': rangeStartLeft, 'bottom': rangeStartBottom}\" [ngClass]=\"{'p-slider-handle-active':handleIndex==0}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[0] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n            <span #sliderHandleEnd *ngIf=\"range\" [attr.tabindex]=\"disabled ? null : tabindex\" (keydown)=\"onHandleKeydown($event,1)\" (mousedown)=\"onMouseDown($event,1)\" (touchstart)=\"onTouchStart($event,1)\" (touchmove)=\"onTouchMove($event,1)\" (touchend)=\"onTouchEnd($event)\" [style.transition]=\"dragging ? 'none': null\" class=\"p-slider-handle\" \n                [ngStyle]=\"{'left': rangeEndLeft, 'bottom': rangeEndBottom}\" [ngClass]=\"{'p-slider-handle-active':handleIndex==1}\"\n                [attr.aria-valuemin]=\"min\" [attr.aria-valuenow]=\"value ? value[1] : null\" [attr.aria-valuemax]=\"max\" [attr.aria-labelledby]=\"ariaLabelledBy\"></span>\n        </div>\n    ",
                providers: [SLIDER_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-slider{position:relative}.p-slider .p-slider-handle{-ms-touch-action:none;cursor:-webkit-grab;cursor:grab;touch-action:none}.p-slider-range,.p-slider .p-slider-handle{display:block;position:absolute}.p-slider-horizontal .p-slider-range{height:100%;left:0;top:0}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { min: [{
            type: core.Input
        }], max: [{
            type: core.Input
        }], orientation: [{
            type: core.Input
        }], tabindex: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], onSlideEnd: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], animate: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }], range: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], sliderHandle: [{
            type: core.ViewChild,
            args: ["sliderHandle"]
        }], sliderHandleStart: [{
            type: core.ViewChild,
            args: ["sliderHandleStart"]
        }], sliderHandleEnd: [{
            type: core.ViewChild,
            args: ["sliderHandleEnd"]
        }] }); })();
        return Slider;
    }());
    Slider.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef }
    ]; };
    Slider.propDecorators = {
        animate: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        orientation: [{ type: core.Input }],
        step: [{ type: core.Input }],
        range: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        ariaLabelledBy: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        onChange: [{ type: core.Output }],
        onSlideEnd: [{ type: core.Output }],
        sliderHandle: [{ type: core.ViewChild, args: ["sliderHandle",] }],
        sliderHandleStart: [{ type: core.ViewChild, args: ["sliderHandleStart",] }],
        sliderHandleEnd: [{ type: core.ViewChild, args: ["sliderHandleEnd",] }]
    };
    var SliderModule = /** @class */ (function () {
        function SliderModule() {
        }
SliderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SliderModule });
SliderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SliderModule_Factory(t) { return new (t || SliderModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SliderModule, { declarations: [Slider], imports: [ɵngcc1.CommonModule], exports: [Slider] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SliderModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [Slider],
                declarations: [Slider]
            }]
    }], function () { return []; }, null); })();
        return SliderModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SLIDER_VALUE_ACCESSOR = SLIDER_VALUE_ACCESSOR;
    exports.Slider = Slider;
    exports.SliderModule = SliderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-slider.umd.js.map