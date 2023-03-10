(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common'), require('primeng/dom'), require('primeng/api')) :
    typeof define === 'function' && define.amd ? define('primeng/scrollpanel', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common', 'primeng/dom', 'primeng/api'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global.primeng = global.primeng || {}, global.primeng.scrollpanel = {}), global.ng.core, global.ng.common, global.primeng.dom, global.primeng.api));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common, dom, api) { 
var _c0 = ["container"];
var _c1 = ["content"];
var _c2 = ["xBar"];
var _c3 = ["yBar"];
function ScrollPanel_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c4 = ["*"];
'use strict';

    var ScrollPanel = /** @class */ (function () {
        function ScrollPanel(el, zone, cd) {
            this.el = el;
            this.zone = zone;
            this.cd = cd;
            this.timeoutFrame = function (fn) { return setTimeout(fn, 0); };
        }
        ScrollPanel.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                _this.moveBar();
                _this.moveBar = _this.moveBar.bind(_this);
                _this.onXBarMouseDown = _this.onXBarMouseDown.bind(_this);
                _this.onYBarMouseDown = _this.onYBarMouseDown.bind(_this);
                _this.onDocumentMouseMove = _this.onDocumentMouseMove.bind(_this);
                _this.onDocumentMouseUp = _this.onDocumentMouseUp.bind(_this);
                window.addEventListener('resize', _this.moveBar);
                _this.contentViewChild.nativeElement.addEventListener('scroll', _this.moveBar);
                _this.contentViewChild.nativeElement.addEventListener('mouseenter', _this.moveBar);
                _this.xBarViewChild.nativeElement.addEventListener('mousedown', _this.onXBarMouseDown);
                _this.yBarViewChild.nativeElement.addEventListener('mousedown', _this.onYBarMouseDown);
                _this.calculateContainerHeight();
                _this.initialized = true;
            });
        };
        ScrollPanel.prototype.ngAfterContentInit = function () {
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
        ScrollPanel.prototype.calculateContainerHeight = function () {
            var container = this.containerViewChild.nativeElement;
            var content = this.contentViewChild.nativeElement;
            var xBar = this.xBarViewChild.nativeElement;
            var containerStyles = getComputedStyle(container), xBarStyles = getComputedStyle(xBar), pureContainerHeight = dom.DomHandler.getHeight(container) - parseInt(xBarStyles['height'], 10);
            if (containerStyles['max-height'] != "none" && pureContainerHeight == 0) {
                if (content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
                    container.style.height = containerStyles['max-height'];
                }
                else {
                    container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
                }
            }
        };
        ScrollPanel.prototype.moveBar = function () {
            var _this = this;
            var container = this.containerViewChild.nativeElement;
            var content = this.contentViewChild.nativeElement;
            /* horizontal scroll */
            var xBar = this.xBarViewChild.nativeElement;
            var totalWidth = content.scrollWidth;
            var ownWidth = content.clientWidth;
            var bottom = (container.clientHeight - xBar.clientHeight) * -1;
            this.scrollXRatio = ownWidth / totalWidth;
            /* vertical scroll */
            var yBar = this.yBarViewChild.nativeElement;
            var totalHeight = content.scrollHeight;
            var ownHeight = content.clientHeight;
            var right = (container.clientWidth - yBar.clientWidth) * -1;
            this.scrollYRatio = ownHeight / totalHeight;
            this.requestAnimationFrame(function () {
                if (_this.scrollXRatio >= 1) {
                    dom.DomHandler.addClass(xBar, 'p-scrollpanel-hidden');
                }
                else {
                    dom.DomHandler.removeClass(xBar, 'p-scrollpanel-hidden');
                    var xBarWidth = Math.max(_this.scrollXRatio * 100, 10);
                    var xBarLeft = content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth);
                    xBar.style.cssText = 'width:' + xBarWidth + '%; left:' + xBarLeft + '%;bottom:' + bottom + 'px;';
                }
                if (_this.scrollYRatio >= 1) {
                    dom.DomHandler.addClass(yBar, 'p-scrollpanel-hidden');
                }
                else {
                    dom.DomHandler.removeClass(yBar, 'p-scrollpanel-hidden');
                    var yBarHeight = Math.max(_this.scrollYRatio * 100, 10);
                    var yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
                    yBar.style.cssText = 'height:' + yBarHeight + '%; top: calc(' + yBarTop + '% - ' + xBar.clientHeight + 'px);right:' + right + 'px;';
                }
            });
        };
        ScrollPanel.prototype.onYBarMouseDown = function (e) {
            this.isYBarClicked = true;
            this.lastPageY = e.pageY;
            dom.DomHandler.addClass(this.yBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
            dom.DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');
            document.addEventListener('mousemove', this.onDocumentMouseMove);
            document.addEventListener('mouseup', this.onDocumentMouseUp);
            e.preventDefault();
        };
        ScrollPanel.prototype.onXBarMouseDown = function (e) {
            this.isXBarClicked = true;
            this.lastPageX = e.pageX;
            dom.DomHandler.addClass(this.xBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
            dom.DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');
            document.addEventListener('mousemove', this.onDocumentMouseMove);
            document.addEventListener('mouseup', this.onDocumentMouseUp);
            e.preventDefault();
        };
        ScrollPanel.prototype.onDocumentMouseMove = function (e) {
            if (this.isXBarClicked) {
                this.onMouseMoveForXBar(e);
            }
            else if (this.isYBarClicked) {
                this.onMouseMoveForYBar(e);
            }
            else {
                this.onMouseMoveForXBar(e);
                this.onMouseMoveForYBar(e);
            }
        };
        ScrollPanel.prototype.onMouseMoveForXBar = function (e) {
            var _this = this;
            var deltaX = e.pageX - this.lastPageX;
            this.lastPageX = e.pageX;
            this.requestAnimationFrame(function () {
                _this.contentViewChild.nativeElement.scrollLeft += deltaX / _this.scrollXRatio;
            });
        };
        ScrollPanel.prototype.onMouseMoveForYBar = function (e) {
            var _this = this;
            var deltaY = e.pageY - this.lastPageY;
            this.lastPageY = e.pageY;
            this.requestAnimationFrame(function () {
                _this.contentViewChild.nativeElement.scrollTop += deltaY / _this.scrollYRatio;
            });
        };
        ScrollPanel.prototype.scrollTop = function (scrollTop) {
            var scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
            scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
            this.contentViewChild.nativeElement.scrollTop = scrollTop;
        };
        ScrollPanel.prototype.onDocumentMouseUp = function (e) {
            dom.DomHandler.removeClass(this.yBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
            dom.DomHandler.removeClass(this.xBarViewChild.nativeElement, 'p-scrollpanel-grabbed');
            dom.DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');
            document.removeEventListener('mousemove', this.onDocumentMouseMove);
            document.removeEventListener('mouseup', this.onDocumentMouseUp);
            this.isXBarClicked = false;
            this.isYBarClicked = false;
        };
        ScrollPanel.prototype.requestAnimationFrame = function (f) {
            var frame = window.requestAnimationFrame || this.timeoutFrame;
            frame(f);
        };
        ScrollPanel.prototype.ngOnDestroy = function () {
            if (this.initialized) {
                window.removeEventListener('resize', this.moveBar);
                this.contentViewChild.nativeElement.removeEventListener('scroll', this.moveBar);
                this.contentViewChild.nativeElement.removeEventListener('mouseenter', this.moveBar);
                this.xBarViewChild.nativeElement.removeEventListener('mousedown', this.onXBarMouseDown);
                this.yBarViewChild.nativeElement.removeEventListener('mousedown', this.onYBarMouseDown);
            }
        };
        ScrollPanel.prototype.refresh = function () {
            this.moveBar();
        };
ScrollPanel.ɵfac = function ScrollPanel_Factory(t) { return new (t || ScrollPanel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ScrollPanel.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollPanel, selectors: [["p-scrollPanel"]], contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, api.PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function ScrollPanel_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.xBarViewChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.yBarViewChild = _t.first);
    } }, inputs: { style: "style", styleClass: "styleClass" }, ngContentSelectors: _c4, decls: 11, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["container", ""], [1, "p-scrollpanel-wrapper"], [1, "p-scrollpanel-content"], ["content", ""], [4, "ngTemplateOutlet"], [1, "p-scrollpanel-bar", "p-scrollpanel-bar-x"], ["xBar", ""], [1, "p-scrollpanel-bar", "p-scrollpanel-bar-y"], ["yBar", ""]], template: function ScrollPanel_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3, 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵtemplate(6, ScrollPanel_ng_container_6_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(7, "div", 6, 7);
        ɵngcc0.ɵɵelement(9, "div", 8, 9);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-scrollpanel p-component")("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgTemplateOutlet], styles: [".p-scrollpanel-wrapper{float:left;height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.p-scrollpanel-content{box-sizing:border-box;height:calc(100% + 18px);overflow:auto;padding:0 18px 18px 0;position:relative;width:calc(100% + 18px)}.p-scrollpanel-bar{background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;position:relative;transition:opacity .25s linear;z-index:2}.p-scrollpanel-bar-y{top:0;width:9px}.p-scrollpanel-bar-x{bottom:0;height:9px}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:active .p-scrollpanel-bar,.p-scrollpanel:hover .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollPanel, [{
        type: core.Component,
        args: [{
                selector: 'p-scrollPanel',
                template: "\n        <div #container [ngClass]=\"'p-scrollpanel p-component'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"p-scrollpanel-wrapper\">\n                <div #content class=\"p-scrollpanel-content\">\n                    <ng-content></ng-content>\n                    <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n                </div>\n            </div>\n            <div #xBar class=\"p-scrollpanel-bar p-scrollpanel-bar-x\"></div>\n            <div #yBar class=\"p-scrollpanel-bar p-scrollpanel-bar-y\"></div>   \n        </div>\n    ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: [".p-scrollpanel-wrapper{float:left;height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.p-scrollpanel-content{box-sizing:border-box;height:calc(100% + 18px);overflow:auto;padding:0 18px 18px 0;position:relative;width:calc(100% + 18px)}.p-scrollpanel-bar{background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;position:relative;transition:opacity .25s linear;z-index:2}.p-scrollpanel-bar-y{top:0;width:9px}.p-scrollpanel-bar-x{bottom:0;height:9px}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:active .p-scrollpanel-bar,.p-scrollpanel:hover .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { style: [{
            type: core.Input
        }], styleClass: [{
            type: core.Input
        }], containerViewChild: [{
            type: core.ViewChild,
            args: ['container']
        }], contentViewChild: [{
            type: core.ViewChild,
            args: ['content']
        }], xBarViewChild: [{
            type: core.ViewChild,
            args: ['xBar']
        }], yBarViewChild: [{
            type: core.ViewChild,
            args: ['yBar']
        }], templates: [{
            type: core.ContentChildren,
            args: [api.PrimeTemplate]
        }] }); })();
        return ScrollPanel;
    }());
    ScrollPanel.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef }
    ]; };
    ScrollPanel.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        containerViewChild: [{ type: core.ViewChild, args: ['container',] }],
        contentViewChild: [{ type: core.ViewChild, args: ['content',] }],
        xBarViewChild: [{ type: core.ViewChild, args: ['xBar',] }],
        yBarViewChild: [{ type: core.ViewChild, args: ['yBar',] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var ScrollPanelModule = /** @class */ (function () {
        function ScrollPanelModule() {
        }
ScrollPanelModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollPanelModule });
ScrollPanelModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollPanelModule_Factory(t) { return new (t || ScrollPanelModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollPanelModule, { declarations: [ScrollPanel], imports: [ɵngcc1.CommonModule], exports: [ScrollPanel] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollPanelModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [ScrollPanel],
                declarations: [ScrollPanel]
            }]
    }], function () { return []; }, null); })();
        return ScrollPanelModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ScrollPanel = ScrollPanel;
    exports.ScrollPanelModule = ScrollPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=primeng-scrollpanel.umd.js.map