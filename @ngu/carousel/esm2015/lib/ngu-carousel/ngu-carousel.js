/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class NguCarouselStore {
    /**
     * @param {?=} touch
     * @param {?=} vertical
     * @param {?=} interval
     * @param {?=} transform
     * @param {?=} button
     * @param {?=} visibleItems
     * @param {?=} deviceType
     * @param {?=} type
     * @param {?=} token
     * @param {?=} items
     * @param {?=} load
     * @param {?=} deviceWidth
     * @param {?=} carouselWidth
     * @param {?=} itemWidth
     * @param {?=} slideItems
     * @param {?=} itemWidthPer
     * @param {?=} itemLength
     * @param {?=} currentSlide
     * @param {?=} easing
     * @param {?=} speed
     * @param {?=} loop
     * @param {?=} dexVal
     * @param {?=} touchTransform
     * @param {?=} isEnd
     * @param {?=} isFirst
     * @param {?=} isLast
     * @param {?=} RTL
     * @param {?=} point
     * @param {?=} velocity
     */
    constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
}
if (false) {
    /** @type {?} */
    NguCarouselStore.prototype.touch;
    /** @type {?} */
    NguCarouselStore.prototype.vertical;
    /** @type {?} */
    NguCarouselStore.prototype.interval;
    /** @type {?} */
    NguCarouselStore.prototype.transform;
    /** @type {?} */
    NguCarouselStore.prototype.button;
    /** @type {?} */
    NguCarouselStore.prototype.visibleItems;
    /** @type {?} */
    NguCarouselStore.prototype.deviceType;
    /** @type {?} */
    NguCarouselStore.prototype.type;
    /** @type {?} */
    NguCarouselStore.prototype.token;
    /** @type {?} */
    NguCarouselStore.prototype.items;
    /** @type {?} */
    NguCarouselStore.prototype.load;
    /** @type {?} */
    NguCarouselStore.prototype.deviceWidth;
    /** @type {?} */
    NguCarouselStore.prototype.carouselWidth;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidth;
    /** @type {?} */
    NguCarouselStore.prototype.slideItems;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidthPer;
    /** @type {?} */
    NguCarouselStore.prototype.itemLength;
    /** @type {?} */
    NguCarouselStore.prototype.currentSlide;
    /** @type {?} */
    NguCarouselStore.prototype.easing;
    /** @type {?} */
    NguCarouselStore.prototype.speed;
    /** @type {?} */
    NguCarouselStore.prototype.loop;
    /** @type {?} */
    NguCarouselStore.prototype.dexVal;
    /** @type {?} */
    NguCarouselStore.prototype.touchTransform;
    /** @type {?} */
    NguCarouselStore.prototype.isEnd;
    /** @type {?} */
    NguCarouselStore.prototype.isFirst;
    /** @type {?} */
    NguCarouselStore.prototype.isLast;
    /** @type {?} */
    NguCarouselStore.prototype.RTL;
    /** @type {?} */
    NguCarouselStore.prototype.point;
    /** @type {?} */
    NguCarouselStore.prototype.velocity;
}
/** @typedef {?} */
var DeviceType;
export { DeviceType };
/** @typedef {?} */
var ButtonVisible;
export { ButtonVisible };
export class ItemsControl {
}
if (false) {
    /** @type {?} */
    ItemsControl.prototype.start;
    /** @type {?} */
    ItemsControl.prototype.end;
}
export class Vertical {
}
if (false) {
    /** @type {?} */
    Vertical.prototype.enabled;
    /** @type {?} */
    Vertical.prototype.height;
}
export class NguButton {
}
if (false) {
    /** @type {?} */
    NguButton.prototype.visibility;
    /** @type {?} */
    NguButton.prototype.elastic;
}
export class Touch {
}
if (false) {
    /** @type {?} */
    Touch.prototype.active;
    /** @type {?} */
    Touch.prototype.swipe;
    /** @type {?} */
    Touch.prototype.velocity;
}
export class Transfrom {
    /**
     * @param {?=} xs
     * @param {?=} sm
     * @param {?=} md
     * @param {?=} lg
     * @param {?=} all
     */
    constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
}
if (false) {
    /** @type {?} */
    Transfrom.prototype.xs;
    /** @type {?} */
    Transfrom.prototype.sm;
    /** @type {?} */
    Transfrom.prototype.md;
    /** @type {?} */
    Transfrom.prototype.lg;
    /** @type {?} */
    Transfrom.prototype.all;
}
export class NguCarouselConfig {
}
if (false) {
    /** @type {?} */
    NguCarouselConfig.prototype.grid;
    /** @type {?} */
    NguCarouselConfig.prototype.slide;
    /** @type {?} */
    NguCarouselConfig.prototype.speed;
    /** @type {?} */
    NguCarouselConfig.prototype.interval;
    /** @type {?} */
    NguCarouselConfig.prototype.animation;
    /** @type {?} */
    NguCarouselConfig.prototype.point;
    /** @type {?} */
    NguCarouselConfig.prototype.type;
    /** @type {?} */
    NguCarouselConfig.prototype.load;
    /** @type {?} */
    NguCarouselConfig.prototype.custom;
    /** @type {?} */
    NguCarouselConfig.prototype.loop;
    /** @type {?} */
    NguCarouselConfig.prototype.touch;
    /** @type {?} */
    NguCarouselConfig.prototype.easing;
    /** @type {?} */
    NguCarouselConfig.prototype.RTL;
    /** @type {?} */
    NguCarouselConfig.prototype.button;
    /** @type {?} */
    NguCarouselConfig.prototype.vertical;
    /** @type {?} */
    NguCarouselConfig.prototype.velocity;
}
/** @typedef {?} */
var Custom;
export { Custom };
/** @typedef {?} */
var Animate;
export { Animate };
/**
 * @record
 */
export function Point() { }
/** @type {?} */
Point.prototype.visible;
/** @type {?|undefined} */
Point.prototype.hideOnSingleSlide;
/**
 * @record
 */
export function Animation() { }
/** @type {?|undefined} */
Animation.prototype.type;
/** @type {?|undefined} */
Animation.prototype.animateStyles;
/**
 * @record
 */
export function AnimationStyles() { }
/** @type {?|undefined} */
AnimationStyles.prototype.style;
/** @type {?|undefined} */
AnimationStyles.prototype.open;
/** @type {?|undefined} */
AnimationStyles.prototype.close;
/** @type {?|undefined} */
AnimationStyles.prototype.stagger;
/**
 * @record
 */
export function CarouselInterval() { }
/** @type {?} */
CarouselInterval.prototype.timing;
/** @type {?|undefined} */
CarouselInterval.prototype.initialDelay;
/**
 * @template T
 */
export class NguCarouselOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}
if (false) {
    /**
     * Data for the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.$implicit;
    /**
     * Depth of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.level;
    /**
     * Index location of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.index;
    /**
     * Length of the number of total dataNodes.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.count;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5ndS9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNKLFlBQ1MsUUFBUSxJQUFJLEtBQUssRUFBRSxFQUNuQixXQUFXLElBQUksUUFBUSxFQUFFLEVBQ3pCLFVBQ0EsWUFBWSxJQUFJLFNBQVMsRUFBRSxFQUMzQixRQUNBLGNBQ0EsWUFDQSxPQUFPLE9BQU8sRUFDZCxRQUFRLEVBQUUsRUFDVixRQUFRLENBQUMsRUFDVCxPQUFPLENBQUMsRUFDUixjQUFjLENBQUMsRUFDZixnQkFBZ0IsQ0FBQyxFQUNqQixZQUFZLENBQUMsRUFDYixhQUFhLENBQUMsRUFDZCxlQUFlLENBQUMsRUFDaEIsYUFBYSxDQUFDLEVBQ2QsZUFBZSxDQUFDLEVBQ2hCLFNBQVMsNEJBQTRCLEVBQ3JDLFFBQVEsR0FBRyxFQUNYLE9BQU8sS0FBSyxFQUNaLFNBQVMsQ0FBQyxFQUNWLGlCQUFpQixDQUFDLEVBQ2xCLFFBQVEsS0FBSyxFQUNiLFVBQVUsSUFBSSxFQUNkLFNBQVMsS0FBSyxFQUNkLE1BQU0sS0FBSyxFQUNYLFFBQVEsSUFBSSxFQUNaLFdBQVcsQ0FBQztRQTVCWixVQUFLLEdBQUwsS0FBSztRQUNMLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztRQUNULFdBQU0sR0FBTixNQUFNO1FBQ04saUJBQVksR0FBWixZQUFZO1FBQ1osZUFBVSxHQUFWLFVBQVU7UUFDVixTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wsVUFBSyxHQUFMLEtBQUs7UUFDTCxTQUFJLEdBQUosSUFBSTtRQUNKLGdCQUFXLEdBQVgsV0FBVztRQUNYLGtCQUFhLEdBQWIsYUFBYTtRQUNiLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZUFBVSxHQUFWLFVBQVU7UUFDVixpQkFBWSxHQUFaLFlBQVk7UUFDWixlQUFVLEdBQVYsVUFBVTtRQUNWLGlCQUFZLEdBQVosWUFBWTtRQUNaLFdBQU0sR0FBTixNQUFNO1FBQ04sVUFBSyxHQUFMLEtBQUs7UUFDTCxTQUFJLEdBQUosSUFBSTtRQUNKLFdBQU0sR0FBTixNQUFNO1FBQ04sbUJBQWMsR0FBZCxjQUFjO1FBQ2QsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sUUFBRyxHQUFILEdBQUc7UUFDSCxVQUFLLEdBQUwsS0FBSztRQUNMLGFBQVEsR0FBUixRQUFRO0tBQ2I7Q0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtELE1BQU07Q0FHTDs7Ozs7OztBQUVELE1BQU07Q0FJTDs7Ozs7OztBQUVELE1BQU07Q0FHTDs7Ozs7OztBQUVELE1BQU07Q0FJTDs7Ozs7Ozs7O0FBRUQsTUFBTTs7Ozs7Ozs7SUFDSixZQUNTLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLEtBQUssQ0FBQyxFQUNOLE1BQU0sQ0FBQztRQUpQLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFO1FBQ0YsUUFBRyxHQUFILEdBQUc7S0FDUjtDQUNMOzs7Ozs7Ozs7Ozs7O0FBRUQsTUFBTTtDQWlCTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkQsTUFBTTs7OztJQWFKLFlBQVksSUFBTztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN2QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRvdWNoID0gbmV3IFRvdWNoKCksXHJcbiAgICBwdWJsaWMgdmVydGljYWwgPSBuZXcgVmVydGljYWwoKSxcclxuICAgIHB1YmxpYyBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWwsXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtID0gbmV3IFRyYW5zZnJvbSgpLFxyXG4gICAgcHVibGljIGJ1dHRvbj86IE5ndUJ1dHRvbixcclxuICAgIHB1YmxpYyB2aXNpYmxlSXRlbXM/OiBJdGVtc0NvbnRyb2wsXHJcbiAgICBwdWJsaWMgZGV2aWNlVHlwZT86IERldmljZVR5cGUsXHJcbiAgICBwdWJsaWMgdHlwZSA9ICdmaXhlZCcsXHJcbiAgICBwdWJsaWMgdG9rZW4gPSAnJyxcclxuICAgIHB1YmxpYyBpdGVtcyA9IDAsXHJcbiAgICBwdWJsaWMgbG9hZCA9IDAsXHJcbiAgICBwdWJsaWMgZGV2aWNlV2lkdGggPSAwLFxyXG4gICAgcHVibGljIGNhcm91c2VsV2lkdGggPSAwLFxyXG4gICAgcHVibGljIGl0ZW1XaWR0aCA9IDAsXHJcbiAgICBwdWJsaWMgc2xpZGVJdGVtcyA9IDAsXHJcbiAgICBwdWJsaWMgaXRlbVdpZHRoUGVyID0gMCxcclxuICAgIHB1YmxpYyBpdGVtTGVuZ3RoID0gMCxcclxuICAgIHB1YmxpYyBjdXJyZW50U2xpZGUgPSAwLFxyXG4gICAgcHVibGljIGVhc2luZyA9ICdjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsXHJcbiAgICBwdWJsaWMgc3BlZWQgPSAyMDAsXHJcbiAgICBwdWJsaWMgbG9vcCA9IGZhbHNlLFxyXG4gICAgcHVibGljIGRleFZhbCA9IDAsXHJcbiAgICBwdWJsaWMgdG91Y2hUcmFuc2Zvcm0gPSAwLFxyXG4gICAgcHVibGljIGlzRW5kID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgaXNGaXJzdCA9IHRydWUsXHJcbiAgICBwdWJsaWMgaXNMYXN0ID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgUlRMID0gZmFsc2UsXHJcbiAgICBwdWJsaWMgcG9pbnQgPSB0cnVlLFxyXG4gICAgcHVibGljIHZlbG9jaXR5ID0gMVxyXG4gICkge31cclxufVxyXG5leHBvcnQgdHlwZSBEZXZpY2VUeXBlID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICdhbGwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQnV0dG9uVmlzaWJsZSA9ICdkaXNhYmxlZCcgfCAnaGlkZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb250cm9sIHtcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGVuZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVydGljYWwge1xyXG4gIGVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLy8gbnVtSGVpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1QnV0dG9uIHtcclxuICB2aXNpYmlsaXR5PzogQnV0dG9uVmlzaWJsZTtcclxuICBlbGFzdGljPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG91Y2gge1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgc3dpcGU6IHN0cmluZztcclxuICB2ZWxvY2l0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmcm9tIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB4cyA9IDAsXHJcbiAgICBwdWJsaWMgc20gPSAwLFxyXG4gICAgcHVibGljIG1kID0gMCxcclxuICAgIHB1YmxpYyBsZyA9IDAsXHJcbiAgICBwdWJsaWMgYWxsID0gMFxyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsQ29uZmlnIHtcclxuICBncmlkOiBUcmFuc2Zyb207XHJcbiAgc2xpZGU/OiBudW1iZXI7XHJcbiAgc3BlZWQ/OiBudW1iZXI7XHJcbiAgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsO1xyXG4gIGFuaW1hdGlvbj86IEFuaW1hdGU7XHJcbiAgcG9pbnQ/OiBQb2ludDtcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIGxvYWQ/OiBudW1iZXI7XHJcbiAgY3VzdG9tPzogQ3VzdG9tO1xyXG4gIGxvb3A/OiBib29sZWFuO1xyXG4gIHRvdWNoPzogYm9vbGVhbjtcclxuICBlYXNpbmc/OiBzdHJpbmc7XHJcbiAgUlRMPzogYm9vbGVhbjtcclxuICBidXR0b24/OiBOZ3VCdXR0b247XHJcbiAgdmVydGljYWw/OiBWZXJ0aWNhbDtcclxuICB2ZWxvY2l0eT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ3VzdG9tID0gJ2Jhbm5lcic7XHJcbmV4cG9ydCB0eXBlIEFuaW1hdGUgPSAnbGF6eSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICB2aXNpYmxlOiBib29sZWFuO1xyXG4gIGhpZGVPblNpbmdsZVNsaWRlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb24ge1xyXG4gIHR5cGU/OiBBbmltYXRlO1xyXG4gIGFuaW1hdGVTdHlsZXM/OiBBbmltYXRpb25TdHlsZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uU3R5bGVzIHtcclxuICBzdHlsZT86IHN0cmluZztcclxuICBvcGVuPzogc3RyaW5nO1xyXG4gIGNsb3NlPzogc3RyaW5nO1xyXG4gIHN0YWdnZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxJbnRlcnZhbCB7XHJcbiAgdGltaW5nOiBudW1iZXI7XHJcbiAgaW5pdGlhbERlbGF5PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PFQ+IHtcclxuICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXHJcbiAgJGltcGxpY2l0OiBUO1xyXG5cclxuICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSBub2RlLiAqL1xyXG4gIGluZGV4PzogbnVtYmVyO1xyXG5cclxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xyXG4gIGNvdW50PzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XHJcbiAgICB0aGlzLiRpbXBsaWNpdCA9IGRhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==