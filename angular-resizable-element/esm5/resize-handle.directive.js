/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, Renderer2, ElementRef, NgZone } from '@angular/core';
import { ResizableDirective } from './resizable.directive';
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
var ResizeHandleDirective = /** @class */ (function () {
    function ResizeHandleDirective(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                    _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                    _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            _this.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (clientX, clientY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @private
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            ((/** @type {?} */ (_this))).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    /** @nocollapse */
    ResizeHandleDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone },
        { type: ResizableDirective }
    ]; };
    ResizeHandleDirective.propDecorators = {
        resizeEdges: [{ type: Input }],
        onMousedown: [{ type: HostListener, args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY'
                    ],] }, { type: HostListener, args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] }],
        onMouseup: [{ type: HostListener, args: ['touchend', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: HostListener, args: ['touchcancel', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: HostListener, args: ['mouseup', ['$event.clientX', '$event.clientY'],] }]
    };
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) { return new (t || ResizeHandleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ResizableDirective)); };
ResizeHandleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizeHandleDirective, selectors: [["", "mwlResizeHandle", ""]], hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("touchstart", function ResizeHandleDirective_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event, $event.touches[0].clientX, $event.touches[0].clientY); })("mousedown", function ResizeHandleDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event, $event.clientX, $event.clientY); })("touchend", function ResizeHandleDirective_touchend_HostBindingHandler($event) { return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY); })("touchcancel", function ResizeHandleDirective_touchcancel_HostBindingHandler($event) { return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY); })("mouseup", function ResizeHandleDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event.clientX, $event.clientY); });
    } }, inputs: { resizeEdges: "resizeEdges" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizeHandleDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlResizeHandle]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ResizableDirective }]; }, { resizeEdges: [{
            type: Input
        }], onMousedown: [{
            type: HostListener,
            args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY'
                ]]
        }, {
            type: HostListener,
            args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
        }], onMouseup: [{
            type: HostListener,
            args: ['touchend', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ]]
        }, {
            type: HostListener,
            args: ['touchcancel', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ]]
        }, {
            type: HostListener,
            args: ['mouseup', ['$event.clientX', '$event.clientY']]
        }] }); })();
    return ResizeHandleDirective;
}());
export { ResizeHandleDirective };
if (false) {
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     * @type {?}
     */
    ResizeHandleDirective.prototype.resizeEdges;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.eventListeners;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.resizable;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50L3Jlc2l6ZS1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0Q7QUFBSTtBQUdtQztBQUFHO0FBQWU7QUFBRztBQUFXO0FBQXNCO0FBTXZFO0FBQVU7QUFBTzs7QUFJdkM7QUFHUyxJQVlQLCtCQUNVLFFBQW1CLEVBQ25CLE9BQW1CLEVBQ25CLElBQVksRUFDWixTQUE2QjtBQUN0QyxRQUpTLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFZO0FBQUMsUUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7QUFDekM7QUFFSTtBQVFFO0FBQ0YsUUF4Qk8sZ0JBQVcsR0FBVSxFQUFFLENBQUM7QUFDbkMsUUFDVSxtQkFBYyxHQUlsQixFQUFFLENBQUM7QUFDVCxJQU1LLENBQUM7QUFDTjtBQUNPO0FBQ0w7QUFBUSxJQURSLDJDQUFXO0FBQU87QUFDTDtBQUFRLElBRHJCO0FBQWMsUUFDWixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUNyQyxJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0w7QUFBUTtBQUFlO0FBRXRCO0FBQTBCO0FBQ1A7QUFFbEI7QUFBUSxJQUNSLDJDQUFXO0FBQ1I7QUFBZTtBQUNaO0FBQ0s7QUFFTjtBQUFtQjtBQUNwQixJQVpKLFVBT0UsS0FBOEIsRUFDOUIsT0FBZSxFQUNmLE9BQWU7QUFDaEIsUUFWRCxpQkE2Q0M7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TztBQUNUO0FBQ087QUFDRTtBQUFnQjtBQUN6QixJQURJLHlDQUEyQjtBQUFDO0FBQ3pCO0FBQWlCO0FBQ2pCO0FBQVEsSUFEWCx3Q0FBMkI7QUFBQztBQUN6QjtBQUFpQjtBQUNWO0FBQVEsSUFEbEIscUNBQW9CO0FBQUM7QUFDbEI7QUFBaUI7QUFBZ0I7QUFDbEMsSUFERiwwQ0FBcUM7QUFDekM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2l6YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVzaXphYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFZGdlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9lZGdlcy5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEFuIGVsZW1lbnQgcGxhY2VkIGluc2lkZSBhIGBtd2xSZXNpemFibGVgIGRpcmVjdGl2ZSB0byBiZSB1c2VkIGFzIGEgZHJhZyBhbmQgcmVzaXplIGhhbmRsZVxuICpcbiAqIEZvciBleGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBtd2xSZXNpemFibGU+XG4gKiAgIDxkaXYgbXdsUmVzaXplSGFuZGxlIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZX1cIj48L2Rpdj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xSZXNpemVIYW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVIYW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGBFZGdlc2Agb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGVkZ2VzIG9mIHRoZSBwYXJlbnQgZWxlbWVudCB0aGF0IGRyYWdnaW5nIHRoZSBoYW5kbGUgd2lsbCB0cmlnZ2VyIGEgcmVzaXplIG9uXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVFZGdlczogRWRnZXMgPSB7fTtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiB7XG4gICAgdG91Y2htb3ZlPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZW1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIFtrZXk6IHN0cmluZ106ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZXNpemFibGU6IFJlc2l6YWJsZURpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFtcbiAgICAnJGV2ZW50JyxcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCcsXG4gICAgJyRldmVudC50b3VjaGVzWzBdLmNsaWVudFknXG4gIF0pXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50JywgJyRldmVudC5jbGllbnRYJywgJyRldmVudC5jbGllbnRZJ10pXG4gIG9uTW91c2Vkb3duKFxuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCxcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy50b3VjaG1vdmUpIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy50b3VjaG1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgICAodG91Y2hNb3ZlRXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZW1vdmUoXG4gICAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMubW91c2Vtb3ZlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMubW91c2Vtb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgICAgKG1vdXNlTW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2Vtb3ZlKFxuICAgICAgICAgICAgICBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnQuY2xpZW50WVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6YWJsZS5tb3VzZWRvd24ubmV4dCh7XG4gICAgICAgIGNsaWVudFgsXG4gICAgICAgIGNsaWVudFksXG4gICAgICAgIGVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFtcbiAgICAnJGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgnLFxuICAgICckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSdcbiAgXSlcbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBbXG4gICAgJyRldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYJyxcbiAgICAnJGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFknXG4gIF0pXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudC5jbGllbnRYJywgJyRldmVudC5jbGllbnRZJ10pXG4gIG9uTW91c2V1cChjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMucmVzaXphYmxlLm1vdXNldXAubmV4dCh7XG4gICAgICAgIGNsaWVudFgsXG4gICAgICAgIGNsaWVudFksXG4gICAgICAgIGVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZW1vdmUoXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemFibGUubW91c2Vtb3ZlLm5leHQoe1xuICAgICAgY2xpZW50WCxcbiAgICAgIGNsaWVudFksXG4gICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ldmVudExpc3RlbmVycykuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lcnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzW3R5cGVdO1xuICAgIH0pO1xuICB9XG59XG4iXX0=