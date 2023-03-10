(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common'), require('perfect-scrollbar'), require('resize-observer-polyfill')) :
    typeof define === 'function' && define.amd ? define('ngx-perfect-scrollbar', ['@angular/core','@angular/common','exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common', 'perfect-scrollbar', 'resize-observer-polyfill'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global['ngx-perfect-scrollbar'] = {}, global.rxjs, global.rxjs.operators, global.ng.core, global.ng.common, global.PerfectScrollbar, global.ResizeObserver));
}(this, (function (ɵngcc0,ɵngcc1,exports, rxjs, operators, core, common, PerfectScrollbar, ResizeObserver) { 
function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelement(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 6);
    ɵngcc0.ɵɵelement(4, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
var _c0 = ["*"];
'use strict';

    PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;
    ResizeObserver = ResizeObserver && ResizeObserver.hasOwnProperty('default') ? ResizeObserver['default'] : ResizeObserver;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var PERFECT_SCROLLBAR_CONFIG = new core.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
    var Geometry = /** @class */ (function () {
        function Geometry(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        return Geometry;
    }());
    var Position = /** @class */ (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    var PerfectScrollbarEvents = [
        'psScrollY',
        'psScrollX',
        'psScrollUp',
        'psScrollDown',
        'psScrollLeft',
        'psScrollRight',
        'psYReachEnd',
        'psYReachStart',
        'psXReachEnd',
        'psXReachStart'
    ];
    var PerfectScrollbarConfig = /** @class */ (function () {
        function PerfectScrollbarConfig(config) {
            if (config === void 0) { config = {}; }
            this.assign(config);
        }
        PerfectScrollbarConfig.prototype.assign = function (config) {
            if (config === void 0) { config = {}; }
            for (var key in config) {
                this[key] = config[key];
            }
        };
        return PerfectScrollbarConfig;
    }());

    var PerfectScrollbarDirective = /** @class */ (function () {
        function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
            this.zone = zone;
            this.differs = differs;
            this.elementRef = elementRef;
            this.platformId = platformId;
            this.defaults = defaults;
            this.instance = null;
            this.ro = null;
            this.timeout = null;
            this.animation = null;
            this.configDiff = null;
            this.ngDestroy = new rxjs.Subject();
            this.disabled = false;
            this.psScrollY = new core.EventEmitter();
            this.psScrollX = new core.EventEmitter();
            this.psScrollUp = new core.EventEmitter();
            this.psScrollDown = new core.EventEmitter();
            this.psScrollLeft = new core.EventEmitter();
            this.psScrollRight = new core.EventEmitter();
            this.psYReachEnd = new core.EventEmitter();
            this.psYReachStart = new core.EventEmitter();
            this.psXReachEnd = new core.EventEmitter();
            this.psXReachStart = new core.EventEmitter();
        }
        PerfectScrollbarDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.disabled && common.isPlatformBrowser(this.platformId)) {
                var config_1 = new PerfectScrollbarConfig(this.defaults);
                config_1.assign(this.config); // Custom configuration
                this.zone.runOutsideAngular(function () {
                    _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
                });
                if (!this.configDiff) {
                    this.configDiff = this.differs.find(this.config || {}).create();
                    this.configDiff.diff(this.config || {});
                }
                this.zone.runOutsideAngular(function () {
                    _this.ro = new ResizeObserver(function () {
                        _this.update();
                    });
                    if (_this.elementRef.nativeElement.children[0]) {
                        _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                    }
                    _this.ro.observe(_this.elementRef.nativeElement);
                });
                this.zone.runOutsideAngular(function () {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        var eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                        rxjs.fromEvent(_this.elementRef.nativeElement, eventType)
                            .pipe(operators.auditTime(20), operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            _this[eventName].emit(event);
                        });
                    });
                });
            }
        };
        PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.complete();
                if (this.ro) {
                    this.ro.disconnect();
                }
                if (this.timeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.timeout);
                }
                this.zone.runOutsideAngular(function () {
                    if (_this.instance) {
                        _this.instance.destroy();
                    }
                });
                this.instance = null;
            }
        };
        PerfectScrollbarDirective.prototype.ngDoCheck = function () {
            if (!this.disabled && this.configDiff && common.isPlatformBrowser(this.platformId)) {
                var changes = this.configDiff.diff(this.config || {});
                if (changes) {
                    this.ngOnDestroy();
                    this.ngOnInit();
                }
            }
        };
        PerfectScrollbarDirective.prototype.ngOnChanges = function (changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && common.isPlatformBrowser(this.platformId)) {
                if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                    if (changes['disabled'].currentValue === true) {
                        this.ngOnDestroy();
                    }
                    else if (changes['disabled'].currentValue === false) {
                        this.ngOnInit();
                    }
                }
            }
        };
        PerfectScrollbarDirective.prototype.ps = function () {
            return this.instance;
        };
        PerfectScrollbarDirective.prototype.update = function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                if (this.timeout) {
                    window.clearTimeout(this.timeout);
                }
                this.timeout = window.setTimeout(function () {
                    if (!_this.disabled && _this.configDiff) {
                        try {
                            _this.zone.runOutsideAngular(function () {
                                if (_this.instance) {
                                    _this.instance.update();
                                }
                            });
                        }
                        catch (error) {
                            // Update can be finished after destroy so catch errors
                        }
                    }
                }, 0);
            }
        };
        PerfectScrollbarDirective.prototype.geometry = function (prefix) {
            if (prefix === void 0) { prefix = 'scroll'; }
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        };
        PerfectScrollbarDirective.prototype.position = function (absolute) {
            if (absolute === void 0) { absolute = false; }
            if (!absolute && this.instance) {
                return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            }
            else {
                return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
        };
        PerfectScrollbarDirective.prototype.scrollable = function (direction) {
            if (direction === void 0) { direction = 'any'; }
            var element = this.elementRef.nativeElement;
            if (direction === 'any') {
                return element.classList.contains('ps--active-x') ||
                    element.classList.contains('ps--active-y');
            }
            else if (direction === 'both') {
                return element.classList.contains('ps--active-x') &&
                    element.classList.contains('ps--active-y');
            }
            else {
                return element.classList.contains('ps--active-' + direction);
            }
        };
        PerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
            if (!this.disabled) {
                if (y == null && speed == null) {
                    this.animateScrolling('scrollTop', x, speed);
                }
                else {
                    if (x != null) {
                        this.animateScrolling('scrollLeft', x, speed);
                    }
                    if (y != null) {
                        this.animateScrolling('scrollTop', y, speed);
                    }
                }
            }
        };
        PerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
        };
        PerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
            this.animateScrolling('scrollTop', y, speed);
        };
        PerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
            this.animateScrolling('scrollTop', (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
            this.animateScrolling('scrollLeft', (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
            var left = this.elementRef.nativeElement.scrollWidth -
                this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
            var top = this.elementRef.nativeElement.scrollHeight -
                this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToElement = function (qs, offset, speed) {
            var element = this.elementRef.nativeElement.querySelector(qs);
            if (element) {
                var elementPos = element.getBoundingClientRect();
                var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
                if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                    var currentPos = this.elementRef.nativeElement['scrollLeft'];
                    var position = elementPos.left - scrollerPos.left + currentPos;
                    this.animateScrolling('scrollLeft', position + (offset || 0), speed);
                }
                if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                    var currentPos = this.elementRef.nativeElement['scrollTop'];
                    var position = elementPos.top - scrollerPos.top + currentPos;
                    this.animateScrolling('scrollTop', position + (offset || 0), speed);
                }
            }
        };
        PerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
            var _this = this;
            if (this.animation) {
                window.cancelAnimationFrame(this.animation);
                this.animation = null;
            }
            if (!speed || typeof window === 'undefined') {
                this.elementRef.nativeElement[target] = value;
            }
            else if (value !== this.elementRef.nativeElement[target]) {
                var newValue_1 = 0;
                var scrollCount_1 = 0;
                var oldTimestamp_1 = performance.now();
                var oldValue_1 = this.elementRef.nativeElement[target];
                var cosParameter_1 = (oldValue_1 - value) / 2;
                var step_1 = function (newTimestamp) {
                    scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                    newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                    // Only continue animation if scroll position has not changed
                    if (_this.elementRef.nativeElement[target] === oldValue_1) {
                        if (scrollCount_1 >= Math.PI) {
                            _this.animateScrolling(target, value, 0);
                        }
                        else {
                            _this.elementRef.nativeElement[target] = newValue_1;
                            // On a zoomed out page the resulting offset may differ
                            oldValue_1 = _this.elementRef.nativeElement[target];
                            oldTimestamp_1 = newTimestamp;
                            _this.animation = window.requestAnimationFrame(step_1);
                        }
                    }
                };
                window.requestAnimationFrame(step_1);
            }
        };
        PerfectScrollbarDirective.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.KeyValueDiffers },
            { type: core.ElementRef },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
        ]; };
        __decorate([
            core.Input()
        ], PerfectScrollbarDirective.prototype, "disabled", void 0);
        __decorate([
            core.Input('perfectScrollbar')
        ], PerfectScrollbarDirective.prototype, "config", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
        PerfectScrollbarDirective = __decorate([ __param(3, core.Inject(core.PLATFORM_ID)),
            __param(4, core.Optional()), __param(4, core.Inject(PERFECT_SCROLLBAR_CONFIG))
        ], PerfectScrollbarDirective);
PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(core.PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarDirective, [{
        type: core.Directive,
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.KeyValueDiffers }, { type: ɵngcc0.ElementRef }, { type: Object, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
            type: core.Input
        }], psScrollY: [{
            type: core.Output
        }], psScrollX: [{
            type: core.Output
        }], psScrollUp: [{
            type: core.Output
        }], psScrollDown: [{
            type: core.Output
        }], psScrollLeft: [{
            type: core.Output
        }], psScrollRight: [{
            type: core.Output
        }], psYReachEnd: [{
            type: core.Output
        }], psYReachStart: [{
            type: core.Output
        }], psXReachEnd: [{
            type: core.Output
        }], psXReachStart: [{
            type: core.Output
        }], config: [{
            type: core.Input,
            args: ['perfectScrollbar']
        }] }); })();
        return PerfectScrollbarDirective;
    }());

    var PerfectScrollbarComponent = /** @class */ (function () {
        function PerfectScrollbarComponent(zone, cdRef, platformId) {
            this.zone = zone;
            this.cdRef = cdRef;
            this.platformId = platformId;
            this.states = {};
            this.indicatorX = false;
            this.indicatorY = false;
            this.interaction = false;
            this.scrollPositionX = 0;
            this.scrollPositionY = 0;
            this.scrollDirectionX = 0;
            this.scrollDirectionY = 0;
            this.usePropagationX = false;
            this.usePropagationY = false;
            this.allowPropagationX = false;
            this.allowPropagationY = false;
            this.stateTimeout = null;
            this.ngDestroy = new rxjs.Subject();
            this.stateUpdate = new rxjs.Subject();
            this.disabled = false;
            this.usePSClass = true;
            this.autoPropagation = false;
            this.scrollIndicators = false;
            this.psScrollY = new core.EventEmitter();
            this.psScrollX = new core.EventEmitter();
            this.psScrollUp = new core.EventEmitter();
            this.psScrollDown = new core.EventEmitter();
            this.psScrollLeft = new core.EventEmitter();
            this.psScrollRight = new core.EventEmitter();
            this.psYReachEnd = new core.EventEmitter();
            this.psYReachStart = new core.EventEmitter();
            this.psXReachEnd = new core.EventEmitter();
            this.psXReachStart = new core.EventEmitter();
        }
        PerfectScrollbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.stateUpdate
                    .pipe(operators.takeUntil(this.ngDestroy), operators.distinctUntilChanged(function (a, b) { return (a === b && !_this.stateTimeout); }))
                    .subscribe(function (state) {
                    if (_this.stateTimeout && typeof window !== 'undefined') {
                        window.clearTimeout(_this.stateTimeout);
                        _this.stateTimeout = null;
                    }
                    if (state === 'x' || state === 'y') {
                        _this.interaction = false;
                        if (state === 'x') {
                            _this.indicatorX = false;
                            _this.states.left = false;
                            _this.states.right = false;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.allowPropagationX = false;
                            }
                        }
                        else if (state === 'y') {
                            _this.indicatorY = false;
                            _this.states.top = false;
                            _this.states.bottom = false;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.allowPropagationY = false;
                            }
                        }
                    }
                    else {
                        if (state === 'left' || state === 'right') {
                            _this.states.left = false;
                            _this.states.right = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.indicatorX = true;
                            }
                        }
                        else if (state === 'top' || state === 'bottom') {
                            _this.states.top = false;
                            _this.states.bottom = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.indicatorY = true;
                            }
                        }
                        if (_this.autoPropagation && typeof window !== 'undefined') {
                            _this.stateTimeout = window.setTimeout(function () {
                                _this.indicatorX = false;
                                _this.indicatorY = false;
                                _this.stateTimeout = null;
                                if (_this.interaction && (_this.states.left || _this.states.right)) {
                                    _this.allowPropagationX = true;
                                }
                                if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                    _this.allowPropagationY = true;
                                }
                                _this.cdRef.markForCheck();
                            }, 500);
                        }
                    }
                    _this.cdRef.markForCheck();
                    _this.cdRef.detectChanges();
                });
                this.zone.runOutsideAngular(function () {
                    if (_this.directiveRef) {
                        var element = _this.directiveRef.elementRef.nativeElement;
                        rxjs.fromEvent(element, 'wheel')
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                var scrollDeltaX = event.deltaX;
                                var scrollDeltaY = event.deltaY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            }
                        });
                        rxjs.fromEvent(element, 'touchmove')
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                var scrollPositionX = event.touches[0].clientX;
                                var scrollPositionY = event.touches[0].clientY;
                                var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                                var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                                _this.scrollPositionX = scrollPositionX;
                                _this.scrollPositionY = scrollPositionY;
                            }
                        });
                        rxjs.merge(rxjs.fromEvent(element, 'ps-scroll-x')
                            .pipe(operators.mapTo('x')), rxjs.fromEvent(element, 'ps-scroll-y')
                            .pipe(operators.mapTo('y')), rxjs.fromEvent(element, 'ps-x-reach-end')
                            .pipe(operators.mapTo('right')), rxjs.fromEvent(element, 'ps-y-reach-end')
                            .pipe(operators.mapTo('bottom')), rxjs.fromEvent(element, 'ps-x-reach-start')
                            .pipe(operators.mapTo('left')), rxjs.fromEvent(element, 'ps-y-reach-start')
                            .pipe(operators.mapTo('top')))
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (state) {
                            if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                                _this.stateUpdate.next(state);
                            }
                        });
                    }
                });
                window.setTimeout(function () {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        if (_this.directiveRef) {
                            _this.directiveRef[eventName] = _this[eventName];
                        }
                    });
                }, 0);
            }
        };
        PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.unsubscribe();
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                }
            }
        };
        PerfectScrollbarComponent.prototype.ngDoCheck = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                if (!this.disabled && this.autoPropagation && this.directiveRef) {
                    var element = this.directiveRef.elementRef.nativeElement;
                    this.usePropagationX = element.classList.contains('ps--active-x');
                    this.usePropagationY = element.classList.contains('ps--active-y');
                }
            }
        };
        PerfectScrollbarComponent.prototype.checkPropagation = function (event, deltaX, deltaY) {
            this.interaction = true;
            var scrollDirectionX = (deltaX < 0) ? -1 : 1;
            var scrollDirectionY = (deltaY < 0) ? -1 : 1;
            if ((this.usePropagationX && this.usePropagationY) ||
                (this.usePropagationX && (!this.allowPropagationX ||
                    (this.scrollDirectionX !== scrollDirectionX))) ||
                (this.usePropagationY && (!this.allowPropagationY ||
                    (this.scrollDirectionY !== scrollDirectionY)))) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (!!deltaX) {
                this.scrollDirectionX = scrollDirectionX;
            }
            if (!!deltaY) {
                this.scrollDirectionY = scrollDirectionY;
            }
            this.stateUpdate.next('interaction');
            this.cdRef.detectChanges();
        };
        PerfectScrollbarComponent.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        __decorate([
            core.Input()
        ], PerfectScrollbarComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
        __decorate([
            core.HostBinding('class.ps-show-limits'),
            core.Input()
        ], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
        __decorate([
            core.HostBinding('class.ps-show-active'),
            core.Input()
        ], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
        __decorate([
            core.Input()
        ], PerfectScrollbarComponent.prototype, "config", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
        __decorate([
            core.Output()
        ], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
        __decorate([
            core.ViewChild(PerfectScrollbarDirective, { static: true })
        ], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
        PerfectScrollbarComponent = __decorate([ __param(2, core.Inject(core.PLATFORM_ID))
        ], PerfectScrollbarComponent);
PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(core.PLATFORM_ID)); };
PerfectScrollbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(PerfectScrollbarDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps", ctx.usePSClass);
        ɵngcc0.ɵɵproperty("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollIndicators);
    } }, directives: [PerfectScrollbarDirective, ɵngcc1.NgIf], styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarComponent, [{
        type: core.Component,
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: core.ViewEncapsulation.None,
                styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }]; }, { disabled: [{
            type: core.Input
        }], usePSClass: [{
            type: core.Input
        }], autoPropagation: [{
            type: core.HostBinding,
            args: ['class.ps-show-limits']
        }, {
            type: core.Input
        }], scrollIndicators: [{
            type: core.HostBinding,
            args: ['class.ps-show-active']
        }, {
            type: core.Input
        }], psScrollY: [{
            type: core.Output
        }], psScrollX: [{
            type: core.Output
        }], psScrollUp: [{
            type: core.Output
        }], psScrollDown: [{
            type: core.Output
        }], psScrollLeft: [{
            type: core.Output
        }], psScrollRight: [{
            type: core.Output
        }], psYReachEnd: [{
            type: core.Output
        }], psYReachStart: [{
            type: core.Output
        }], psXReachEnd: [{
            type: core.Output
        }], psXReachStart: [{
            type: core.Output
        }], config: [{
            type: core.Input
        }], directiveRef: [{
            type: core.ViewChild,
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
        return PerfectScrollbarComponent;
    }());

    var PerfectScrollbarModule = /** @class */ (function () {
        function PerfectScrollbarModule() {
        }
PerfectScrollbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PerfectScrollbarModule });
PerfectScrollbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PerfectScrollbarModule_Factory(t) { return new (t || PerfectScrollbarModule)(); }, imports: [[common.CommonModule], ɵngcc1.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PerfectScrollbarModule, { declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective], imports: [ɵngcc1.CommonModule], exports: [ɵngcc1.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                exports: [common.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]
            }]
    }], function () { return []; }, null); })();
        return PerfectScrollbarModule;
    }());

    exports.Geometry = Geometry;
    exports.PERFECT_SCROLLBAR_CONFIG = PERFECT_SCROLLBAR_CONFIG;
    exports.PerfectScrollbarComponent = PerfectScrollbarComponent;
    exports.PerfectScrollbarConfig = PerfectScrollbarConfig;
    exports.PerfectScrollbarDirective = PerfectScrollbarDirective;
    exports.PerfectScrollbarModule = PerfectScrollbarModule;
    exports.Position = Position;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-perfect-scrollbar.umd.js.map