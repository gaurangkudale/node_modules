/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Output, Input, EventEmitter, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, Observable, merge, EMPTY } from 'rxjs';
import { map, mergeMap, takeUntil, filter, pairwise, take, share, auditTime, switchMap, startWith, tap } from 'rxjs/operators';
/**
 * @record
 */
import * as ɵngcc0 from '@angular/core';
function PointerEventCoordinate() { }
if (false) {
    /** @type {?} */
    PointerEventCoordinate.prototype.clientX;
    /** @type {?} */
    PointerEventCoordinate.prototype.clientY;
    /** @type {?} */
    PointerEventCoordinate.prototype.event;
}
/**
 * @record
 */
function Coordinate() { }
if (false) {
    /** @type {?} */
    Coordinate.prototype.x;
    /** @type {?} */
    Coordinate.prototype.y;
}
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    /** @type {?} */
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    var translateX = 0;
    /** @type {?} */
    var translateY = 0;
    /** @type {?} */
    var style = element.nativeElement.style;
    /** @type {?} */
    var transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    var transform = transformProperties
        .map(function (property) { return style[property]; })
        .find(function (value) { return !!value; });
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
        translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    /** @type {?} */
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/**
 * @record
 */
export function ResizeCursors() { }
if (false) {
    /** @type {?} */
    ResizeCursors.prototype.topLeft;
    /** @type {?} */
    ResizeCursors.prototype.topRight;
    /** @type {?} */
    ResizeCursors.prototype.bottomLeft;
    /** @type {?} */
    ResizeCursors.prototype.bottomRight;
    /** @type {?} */
    ResizeCursors.prototype.leftOrRight;
    /** @type {?} */
    ResizeCursors.prototype.topOrBottom;
}
/** @type {?} */
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    /** @type {?} */
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
var RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
export var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
var ResizableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function ResizableDirective(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */
        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new EventEmitter();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new EventEmitter();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new EventEmitter();
        /**
         * @hidden
         */
        this.mouseup = new Subject();
        /**
         * @hidden
         */
        this.mousedown = new Subject();
        /**
         * @hidden
         */
        this.mousemove = new Subject();
        this.destroy$ = new Subject();
        this.resizeEdges$ = new Subject();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mousedown$ = merge(this.pointerEventListeners.pointerDown, this.mousedown);
        /** @type {?} */
        var mousemove$ = merge(this.pointerEventListeners.pointerMove, this.mousemove).pipe(tap(function (_a) {
            var event = _a.event;
            if (currentResize) {
                event.preventDefault();
            }
        }), share());
        /** @type {?} */
        var mouseup$ = merge(this.pointerEventListeners.pointerUp, this.mouseup);
        /** @type {?} */
        var currentResize;
        /** @type {?} */
        var removeGhostElement = function () {
            if (currentResize && currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        var getResizeCursors = function () {
            return tslib_1.__assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
        };
        this.resizeEdges$
            .pipe(startWith(this.resizeEdges), map(function () {
            return (_this.resizeEdges &&
                Object.keys(_this.resizeEdges).some(function (edge) { return !!_this.resizeEdges[edge]; }));
        }), switchMap(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : EMPTY;
        }), auditTime(this.mouseMoveThrottleMS), takeUntil(this.destroy$))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            /** @type {?} */
            var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            /** @type {?} */
            var resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            }
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        var mousedrag = mousedown$
            .pipe(mergeMap(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            var getSnapGrid = function () {
                /** @type {?} */
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return ((/** @type {?} */ (merge(mousemove$.pipe(take(1)).pipe(map(function (coords) { return [, coords]; })), mousemove$.pipe(pairwise())))))
                .pipe(map(function (_a) {
                var _b = tslib_1.__read(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(filter(function (_a) {
                var _b = tslib_1.__read(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                var snapGrid = getSnapGrid();
                /** @type {?} */
                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(map(function (_a) {
                var _b = tslib_1.__read(_a, 2), newCoords = _b[1];
                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(takeUntil(merge(mouseup$, mousedown$)));
        }))
            .pipe(filter(function () { return !!currentResize; }));
        mousedrag
            .pipe(map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe(filter(function (newBoundingRect) {
            return (_this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(filter(function (newBoundingRect) {
            return _this.validateResize
                ? _this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }), takeUntil(this.destroy$))
            .subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            if (_this.resizing.observers.length > 0) {
                _this.zone.run(function () {
                    _this.resizing.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: newBoundingRect
                        }),
                        rectangle: newBoundingRect
                    });
                });
            }
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        mousedown$
            .pipe(map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return (edges ||
                getResizeEdges({
                    clientX: clientX,
                    clientY: clientY,
                    elm: _this.elm,
                    allowedEdges: _this.resizeEdges,
                    cursorPrecision: _this.resizeCursorPrecision
                }));
        }))
            .pipe(filter(function (edges) {
            return Object.keys(edges).length > 0;
        }), takeUntil(this.destroy$))
            .subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            var resizeCursors = getResizeCursors();
            /** @type {?} */
            var cursor = getResizeCursor(currentResize.edges, resizeCursors);
            _this.renderer.setStyle(document.body, 'cursor', cursor);
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, true);
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            if (_this.resizeStart.observers.length > 0) {
                _this.zone.run(function () {
                    _this.resizeStart.emit({
                        edges: getEdgesDiff({
                            edges: edges,
                            initialRectangle: startingRect,
                            newRectangle: startingRect
                        }),
                        rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                    });
                });
            }
        });
        mouseup$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.renderer.setStyle(document.body, 'cursor', '');
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');
                if (_this.resizeEnd.observers.length > 0) {
                    _this.zone.run(function () {
                        _this.resizeEnd.emit({
                            edges: getEdgesDiff({
                                edges: (/** @type {?} */ (currentResize)).edges,
                                initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                                newRectangle: (/** @type {?} */ (currentResize)).currentRect
                            }),
                            rectangle: (/** @type {?} */ (currentResize)).currentRect
                        });
                    });
                }
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ResizableDirective.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        // browser check for angular universal, because it doesn't know what document is
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    };
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    ResizableDirective.prototype.setElementClass = /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    /** @nocollapse */
    ResizableDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    ResizableDirective.propDecorators = {
        validateResize: [{ type: Input }],
        resizeEdges: [{ type: Input }],
        enableGhostResize: [{ type: Input }],
        resizeSnapGrid: [{ type: Input }],
        resizeCursors: [{ type: Input }],
        resizeCursorPrecision: [{ type: Input }],
        ghostElementPositioning: [{ type: Input }],
        allowNegativeResizes: [{ type: Input }],
        mouseMoveThrottleMS: [{ type: Input }],
        resizeStart: [{ type: Output }],
        resizing: [{ type: Output }],
        resizeEnd: [{ type: Output }]
    };
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ResizableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizableDirective, selectors: [["", "mwlResizable", ""]], inputs: { resizeEdges: "resizeEdges", enableGhostResize: "enableGhostResize", resizeSnapGrid: "resizeSnapGrid", resizeCursors: "resizeCursors", resizeCursorPrecision: "resizeCursorPrecision", ghostElementPositioning: "ghostElementPositioning", allowNegativeResizes: "allowNegativeResizes", mouseMoveThrottleMS: "mouseMoveThrottleMS", validateResize: "validateResize" }, outputs: { resizeStart: "resizeStart", resizing: "resizing", resizeEnd: "resizeEnd" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ResizableDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlResizable]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { resizeEdges: [{
            type: Input
        }], enableGhostResize: [{
            type: Input
        }], resizeSnapGrid: [{
            type: Input
        }], resizeCursors: [{
            type: Input
        }], resizeCursorPrecision: [{
            type: Input
        }], ghostElementPositioning: [{
            type: Input
        }], allowNegativeResizes: [{
            type: Input
        }], mouseMoveThrottleMS: [{
            type: Input
        }], resizeStart: [{
            type: Output
        }], resizing: [{
            type: Output
        }], resizeEnd: [{
            type: Output
        }], validateResize: [{
            type: Input
        }] }); })();
    return ResizableDirective;
}());
export { ResizableDirective };
if (false) {
    /**
     * A function that will be called before each resize event. Return `true` to allow the resize event to propagate or `false` to cancel it
     * @type {?}
     */
    ResizableDirective.prototype.validateResize;
    /**
     * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
     * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
     * @type {?}
     */
    ResizableDirective.prototype.resizeEdges;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     * @type {?}
     */
    ResizableDirective.prototype.enableGhostResize;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     * @type {?}
     */
    ResizableDirective.prototype.resizeSnapGrid;
    /**
     * The mouse cursors that will be set on the resize edges
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursors;
    /**
     * Mouse over thickness to active cursor.
     * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
     * @type {?}
     */
    ResizableDirective.prototype.resizeCursorPrecision;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     * @type {?}
     */
    ResizableDirective.prototype.ghostElementPositioning;
    /**
     * Allow elements to be resized to negative dimensions
     * @type {?}
     */
    ResizableDirective.prototype.allowNegativeResizes;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     * @type {?}
     */
    ResizableDirective.prototype.mouseMoveThrottleMS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeStart;
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizing;
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     * @type {?}
     */
    ResizableDirective.prototype.resizeEnd;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mouseup;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousedown;
    /**
     * @hidden
     * @type {?}
     */
    ResizableDirective.prototype.mousemove;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.pointerEventListeners;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.resizeEdges$;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.renderer;
    /** @type {?} */
    ResizableDirective.prototype.elm;
    /**
     * @type {?}
     * @private
     */
    ResizableDirective.prototype.zone;
}
var PointerEventListeners = /** @class */ (function () {
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseDown;
            /** @type {?} */
            var unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(share());
        this.pointerMove = new Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseMove;
            /** @type {?} */
            var unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(share());
        this.pointerUp = new Observable(function (observer) {
            /** @type {?} */
            var unsubscribeMouseUp;
            /** @type {?} */
            var unsubscribeTouchEnd;
            /** @type {?} */
            var unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(share());
    }
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    PointerEventListeners.getInstance = 
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PointerEventListeners.instance;
    /** @type {?} */
    PointerEventListeners.prototype.pointerDown;
    /** @type {?} */
    PointerEventListeners.prototype.pointerMove;
    /** @type {?} */
    PointerEventListeners.prototype.pointerUp;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsibmc6L2FuZ3VsYXItcmVzaXphYmxlLWVsZW1lbnQvcmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFFWixNQUFNLEVBR04sTUFBTSxFQUNOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBWSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFDTCxHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsR0FBRyxFQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEI7QUFBSTtBQUFXOztBQUlmLHFDQUlDO0FBQ0Q7QUFDWTtBQUNGLElBTlIseUNBQWdCO0FBQ2xCO0FBQ0UsSUFEQSx5Q0FBZ0I7QUFDbEI7QUFBcUIsSUFBbkIsdUNBQStCO0FBQ2pDO0FBQ0E7QUFDRztBQUFXO0FBQWQseUJBR0M7QUFDRDtBQUNZO0FBQ0wsSUFMTCx1QkFBVTtBQUNaO0FBR0ssSUFISCx1QkFBVTtBQUNaO0FBQ0E7QUFDRztBQUFxQjtBQUV2QjtBQUNPO0FBQWU7QUFIdkIsU0FBUyxlQUFlLENBQ3RCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBcUI7QUFDcEIsSUFERCwwQkFBQSxFQUFBLGFBQXFCO0FBQ3BCO0FBQ1EsUUFBSCxJQUFJLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2hELElBQUUsT0FBTyxJQUFJ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QXFCLENBQ3hELFFBQVEsRUFDUixJQUFJLENBQ0wsQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLE9BQU8scUJBQXFCLENBQUMsUUFBUSxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUVILElBaUlBLDRCQUFDO0FBQUQsQ0FBQyxBQXZKRCxJQXVKQztBQUNEO0FBQWE7QUFBUTtBQUFpQjtBQUFnQjtBQUFRLElBako1RCwrQkFBK0M7QUFBQztBQUFxQixJQU5yRSw0Q0FBdUQ7QUFDekQ7QUFDb0IsSUFBbEIsNENBQXVEO0FBQ3pEO0FBQ29CLElBQWxCLDBDQUFxRDtBQUN2RDtBQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG1lcmdlLCBFTVBUWSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFrZVVudGlsLFxuICBmaWx0ZXIsXG4gIHBhaXJ3aXNlLFxuICB0YWtlLFxuICBzaGFyZSxcbiAgYXVkaXRUaW1lLFxuICBzd2l0Y2hNYXAsXG4gIHN0YXJ0V2l0aCxcbiAgdGFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCb3VuZGluZ1JlY3RhbmdsZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9ib3VuZGluZy1yZWN0YW5nbGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3Jlc2l6ZS1ldmVudC5pbnRlcmZhY2UnO1xuXG5pbnRlcmZhY2UgUG9pbnRlckV2ZW50Q29vcmRpbmF0ZSB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbmludGVyZmFjZSBDb29yZGluYXRlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyQ2xvc2VUbyhcbiAgdmFsdWUxOiBudW1iZXIsXG4gIHZhbHVlMjogbnVtYmVyLFxuICBwcmVjaXNpb246IG51bWJlciA9IDNcbik6IGJvb2xlYW4ge1xuICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmFicyh2YWx1ZTEgLSB2YWx1ZTIpO1xuICByZXR1cm4gZGlmZiA8IHByZWNpc2lvbjtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3Qm91bmRpbmdSZWN0YW5nbGUoXG4gIHN0YXJ0aW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUsXG4gIGVkZ2VzOiBFZGdlcyxcbiAgY2xpZW50WDogbnVtYmVyLFxuICBjbGllbnRZOiBudW1iZXJcbik6IEJvdW5kaW5nUmVjdGFuZ2xlIHtcbiAgY29uc3QgbmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IHtcbiAgICB0b3A6IHN0YXJ0aW5nUmVjdC50b3AsXG4gICAgYm90dG9tOiBzdGFydGluZ1JlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHN0YXJ0aW5nUmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBzdGFydGluZ1JlY3QucmlnaHRcbiAgfTtcblxuICBpZiAoZWRnZXMudG9wKSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LnRvcCArPSBjbGllbnRZO1xuICB9XG4gIGlmIChlZGdlcy5ib3R0b20pIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QuYm90dG9tICs9IGNsaWVudFk7XG4gIH1cbiAgaWYgKGVkZ2VzLmxlZnQpIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QubGVmdCArPSBjbGllbnRYO1xuICB9XG4gIGlmIChlZGdlcy5yaWdodCkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5yaWdodCArPSBjbGllbnRYO1xuICB9XG4gIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgPSBuZXdCb3VuZGluZ1JlY3QuYm90dG9tIC0gbmV3Qm91bmRpbmdSZWN0LnRvcDtcbiAgbmV3Qm91bmRpbmdSZWN0LndpZHRoID0gbmV3Qm91bmRpbmdSZWN0LnJpZ2h0IC0gbmV3Qm91bmRpbmdSZWN0LmxlZnQ7XG5cbiAgcmV0dXJuIG5ld0JvdW5kaW5nUmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFJlY3QoXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gIGdob3N0RWxlbWVudFBvc2l0aW9uaW5nOiBzdHJpbmdcbik6IEJvdW5kaW5nUmVjdGFuZ2xlIHtcbiAgbGV0IHRyYW5zbGF0ZVggPSAwO1xuICBsZXQgdHJhbnNsYXRlWSA9IDA7XG4gIGNvbnN0IHN0eWxlID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlO1xuICBjb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0aWVzID0gW1xuICAgICd0cmFuc2Zvcm0nLFxuICAgICctbXMtdHJhbnNmb3JtJyxcbiAgICAnLW1vei10cmFuc2Zvcm0nLFxuICAgICctby10cmFuc2Zvcm0nXG4gIF07XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHRyYW5zZm9ybVByb3BlcnRpZXNcbiAgICAubWFwKHByb3BlcnR5ID0+IHN0eWxlW3Byb3BlcnR5XSlcbiAgICAuZmluZCh2YWx1ZSA9PiAhIXZhbHVlKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0uaW5jbHVkZXMoJ3RyYW5zbGF0ZScpKSB7XG4gICAgdHJhbnNsYXRlWCA9IHRyYW5zZm9ybS5yZXBsYWNlKFxuICAgICAgLy4qdHJhbnNsYXRlMz9kP1xcKCgtP1swLTldKilweCwgKC0/WzAtOV0qKXB4LiovLFxuICAgICAgJyQxJ1xuICAgICk7XG4gICAgdHJhbnNsYXRlWSA9IHRyYW5zZm9ybS5yZXBsYWNlKFxuICAgICAgLy4qdHJhbnNsYXRlMz9kP1xcKCgtP1swLTldKilweCwgKC0/WzAtOV0qKXB4LiovLFxuICAgICAgJyQyJ1xuICAgICk7XG4gIH1cblxuICBpZiAoZ2hvc3RFbGVtZW50UG9zaXRpb25pbmcgPT09ICdhYnNvbHV0ZScpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIHRvcDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRyYW5zbGF0ZVksXG4gICAgICBib3R0b206XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgK1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC1cbiAgICAgICAgdHJhbnNsYXRlWSxcbiAgICAgIGxlZnQ6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC0gdHJhbnNsYXRlWCxcbiAgICAgIHJpZ2h0OlxuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggK1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtXG4gICAgICAgIHRyYW5zbGF0ZVhcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgLSB0cmFuc2xhdGVZLFxuICAgICAgYm90dG9tOiBib3VuZGluZ1JlY3QuYm90dG9tIC0gdHJhbnNsYXRlWSxcbiAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0IC0gdHJhbnNsYXRlWCxcbiAgICAgIHJpZ2h0OiBib3VuZGluZ1JlY3QucmlnaHQgLSB0cmFuc2xhdGVYLFxuICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdDogZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzV2l0aGluQm91bmRpbmdZKHtcbiAgY2xpZW50WSxcbiAgcmVjdFxufToge1xuICBjbGllbnRZOiBudW1iZXI7XG4gIHJlY3Q6IENsaWVudFJlY3Q7XG59KTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGllbnRZID49IHJlY3QudG9wICYmIGNsaWVudFkgPD0gcmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzV2l0aGluQm91bmRpbmdYKHtcbiAgY2xpZW50WCxcbiAgcmVjdFxufToge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIHJlY3Q6IENsaWVudFJlY3Q7XG59KTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGllbnRYID49IHJlY3QubGVmdCAmJiBjbGllbnRYIDw9IHJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGdldFJlc2l6ZUVkZ2VzKHtcbiAgY2xpZW50WCxcbiAgY2xpZW50WSxcbiAgZWxtLFxuICBhbGxvd2VkRWRnZXMsXG4gIGN1cnNvclByZWNpc2lvblxufToge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZWxtOiBFbGVtZW50UmVmO1xuICBhbGxvd2VkRWRnZXM6IEVkZ2VzO1xuICBjdXJzb3JQcmVjaXNpb246IG51bWJlcjtcbn0pOiBFZGdlcyB7XG4gIGNvbnN0IGVsbVBvc2l0aW9uOiBDbGllbnRSZWN0ID0gZWxtLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGVkZ2VzOiBFZGdlcyA9IHt9O1xuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMubGVmdCAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRYLCBlbG1Qb3NpdGlvbi5sZWZ0LCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1koeyBjbGllbnRZLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy5sZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMucmlnaHQgJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WCwgZWxtUG9zaXRpb24ucmlnaHQsIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWSh7IGNsaWVudFksIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLnJpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMudG9wICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFksIGVsbVBvc2l0aW9uLnRvcCwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdYKHsgY2xpZW50WCwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMudG9wID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICBhbGxvd2VkRWRnZXMuYm90dG9tICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFksIGVsbVBvc2l0aW9uLmJvdHRvbSwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdYKHsgY2xpZW50WCwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMuYm90dG9tID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNpemVDdXJzb3JzIHtcbiAgdG9wTGVmdDogc3RyaW5nO1xuICB0b3BSaWdodDogc3RyaW5nO1xuICBib3R0b21MZWZ0OiBzdHJpbmc7XG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XG4gIGxlZnRPclJpZ2h0OiBzdHJpbmc7XG4gIHRvcE9yQm90dG9tOiBzdHJpbmc7XG59XG5cbmNvbnN0IERFRkFVTFRfUkVTSVpFX0NVUlNPUlM6IFJlc2l6ZUN1cnNvcnMgPSBPYmplY3QuZnJlZXplKHtcbiAgdG9wTGVmdDogJ253LXJlc2l6ZScsXG4gIHRvcFJpZ2h0OiAnbmUtcmVzaXplJyxcbiAgYm90dG9tTGVmdDogJ3N3LXJlc2l6ZScsXG4gIGJvdHRvbVJpZ2h0OiAnc2UtcmVzaXplJyxcbiAgbGVmdE9yUmlnaHQ6ICdjb2wtcmVzaXplJyxcbiAgdG9wT3JCb3R0b206ICdyb3ctcmVzaXplJ1xufSk7XG5cbmZ1bmN0aW9uIGdldFJlc2l6ZUN1cnNvcihlZGdlczogRWRnZXMsIGN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMpOiBzdHJpbmcge1xuICBpZiAoZWRnZXMubGVmdCAmJiBlZGdlcy50b3ApIHtcbiAgICByZXR1cm4gY3Vyc29ycy50b3BMZWZ0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLnJpZ2h0ICYmIGVkZ2VzLnRvcCkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcFJpZ2h0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLmxlZnQgJiYgZWRnZXMuYm90dG9tKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMuYm90dG9tTGVmdDtcbiAgfSBlbHNlIGlmIChlZGdlcy5yaWdodCAmJiBlZGdlcy5ib3R0b20pIHtcbiAgICByZXR1cm4gY3Vyc29ycy5ib3R0b21SaWdodDtcbiAgfSBlbHNlIGlmIChlZGdlcy5sZWZ0IHx8IGVkZ2VzLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGN1cnNvcnMubGVmdE9yUmlnaHQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMudG9wIHx8IGVkZ2VzLmJvdHRvbSkge1xuICAgIHJldHVybiBjdXJzb3JzLnRvcE9yQm90dG9tO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFZGdlc0RpZmYoe1xuICBlZGdlcyxcbiAgaW5pdGlhbFJlY3RhbmdsZSxcbiAgbmV3UmVjdGFuZ2xlXG59OiB7XG4gIGVkZ2VzOiBFZGdlcztcbiAgaW5pdGlhbFJlY3RhbmdsZTogQm91bmRpbmdSZWN0YW5nbGU7XG4gIG5ld1JlY3RhbmdsZTogQm91bmRpbmdSZWN0YW5nbGU7XG59KTogRWRnZXMge1xuICBjb25zdCBlZGdlc0RpZmY6IEVkZ2VzID0ge307XG4gIE9iamVjdC5rZXlzKGVkZ2VzKS5mb3JFYWNoKGVkZ2UgPT4ge1xuICAgIGVkZ2VzRGlmZltlZGdlXSA9IChuZXdSZWN0YW5nbGVbZWRnZV0gfHwgMCkgLSAoaW5pdGlhbFJlY3RhbmdsZVtlZGdlXSB8fCAwKTtcbiAgfSk7XG4gIHJldHVybiBlZGdlc0RpZmY7XG59XG5cbmNvbnN0IFJFU0laRV9BQ1RJVkVfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtYWN0aXZlJztcbmNvbnN0IFJFU0laRV9MRUZUX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWxlZnQtaG92ZXInO1xuY29uc3QgUkVTSVpFX1JJR0hUX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLXJpZ2h0LWhvdmVyJztcbmNvbnN0IFJFU0laRV9UT1BfSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtdG9wLWhvdmVyJztcbmNvbnN0IFJFU0laRV9CT1RUT01fSE9WRVJfQ0xBU1M6IHN0cmluZyA9ICdyZXNpemUtYm90dG9tLWhvdmVyJztcbmNvbnN0IFJFU0laRV9HSE9TVF9FTEVNRU5UX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWdob3N0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgTU9VU0VfTU9WRV9USFJPVFRMRV9NUzogbnVtYmVyID0gNTA7XG5cbi8qKlxuICogUGxhY2UgdGhpcyBvbiBhbiBlbGVtZW50IHRvIG1ha2UgaXQgcmVzaXphYmxlLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2XG4gKiAgIG13bFJlc2l6YWJsZVxuICogICBbcmVzaXplRWRnZXNdPVwie2JvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWUsIHRvcDogdHJ1ZSwgbGVmdDogdHJ1ZX1cIlxuICogICBbZW5hYmxlR2hvc3RSZXNpemVdPVwidHJ1ZVwiPlxuICogPC9kaXY+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bFJlc2l6YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlYWNoIHJlc2l6ZSBldmVudC4gUmV0dXJuIGB0cnVlYCB0byBhbGxvdyB0aGUgcmVzaXplIGV2ZW50IHRvIHByb3BhZ2F0ZSBvciBgZmFsc2VgIHRvIGNhbmNlbCBpdFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRhdGVSZXNpemU6IChyZXNpemVFdmVudDogUmVzaXplRXZlbnQpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBlZGdlcyB0aGF0IGFuIGVsZW1lbnQgY2FuIGJlIHJlc2l6ZWQgZnJvbS4gUGFzcyBhbiBvYmplY3QgbGlrZSBge3RvcDogdHJ1ZSwgYm90dG9tOiBmYWxzZX1gLiBCeSBkZWZhdWx0IG5vIGVkZ2VzIGNhbiBiZSByZXNpemVkLlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYSByZXNpemUgaGFuZGxlIGluc3RlYWQgdGhhdCBwb3NpdGlvbnMgaXRzZWxmIHRvIHRoZSBzaWRlIG9mIHRoZSBlbGVtZW50IHlvdSB3b3VsZCBsaWtlIHRvIHJlc2l6ZVxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplRWRnZXM6IEVkZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIFNldCB0byBgdHJ1ZWAgdG8gZW5hYmxlIGEgdGVtcG9yYXJ5IHJlc2l6aW5nIGVmZmVjdCBvZiB0aGUgZWxlbWVudCBpbiBiZXR3ZWVuIHRoZSBgcmVzaXplU3RhcnRgIGFuZCBgcmVzaXplRW5kYCBldmVudHMuXG4gICAqL1xuICBASW5wdXQoKSBlbmFibGVHaG9zdFJlc2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIHNuYXAgZ3JpZCB0aGF0IHJlc2l6ZSBldmVudHMgd2lsbCBiZSBsb2NrZWQgdG8uXG4gICAqXG4gICAqIGUuZy4gdG8gb25seSBhbGxvdyB0aGUgZWxlbWVudCB0byBiZSByZXNpemVkIGV2ZXJ5IDEwcHggc2V0IGl0IHRvIGB7bGVmdDogMTAsIHJpZ2h0OiAxMH1gXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVTbmFwR3JpZDogRWRnZXMgPSB7fTtcblxuICAvKipcbiAgICogVGhlIG1vdXNlIGN1cnNvcnMgdGhhdCB3aWxsIGJlIHNldCBvbiB0aGUgcmVzaXplIGVkZ2VzXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVDdXJzb3JzOiBSZXNpemVDdXJzb3JzID0gREVGQVVMVF9SRVNJWkVfQ1VSU09SUztcblxuICAvKipcbiAgICogTW91c2Ugb3ZlciB0aGlja25lc3MgdG8gYWN0aXZlIGN1cnNvci5cbiAgICogQGRlcHJlY2F0ZWQgaW52YWxpZCB3aGVuIHlvdSBtaWdyYXRlIHRvIHVzZSByZXNpemUgaGFuZGxlcyBpbnN0ZWFkIG9mIHNldHRpbmcgcmVzaXplRWRnZXMgb24gdGhlIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZUN1cnNvclByZWNpc2lvbjogbnVtYmVyID0gMztcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBwb3NpdGlvbmluZyBvZiB0aGUgZ2hvc3QgZWxlbWVudCAoY2FuIGJlIGZpeGVkIG9yIGFic29sdXRlKVxuICAgKi9cbiAgQElucHV0KCkgZ2hvc3RFbGVtZW50UG9zaXRpb25pbmc6ICdmaXhlZCcgfCAnYWJzb2x1dGUnID0gJ2ZpeGVkJztcblxuICAvKipcbiAgICogQWxsb3cgZWxlbWVudHMgdG8gYmUgcmVzaXplZCB0byBuZWdhdGl2ZSBkaW1lbnNpb25zXG4gICAqL1xuICBASW5wdXQoKSBhbGxvd05lZ2F0aXZlUmVzaXplczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbW91c2UgbW92ZSB0aHJvdHRsZSBpbiBtaWxsaXNlY29uZHMsIGRlZmF1bHQ6IDUwIG1zXG4gICAqL1xuICBASW5wdXQoKSBtb3VzZU1vdmVUaHJvdHRsZU1TOiBudW1iZXIgPSBNT1VTRV9NT1ZFX1RIUk9UVExFX01TO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgbW91c2UgaXMgcHJlc3NlZCBhbmQgYSByZXNpemUgZXZlbnQgaXMgYWJvdXQgdG8gYmVnaW4uIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVzaXplU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYXMgdGhlIG1vdXNlIGlzIGRyYWdnZWQgYWZ0ZXIgYSByZXNpemUgZXZlbnQgaGFzIGJlZ3VuLiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlc2l6aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNpemVFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIGFmdGVyIHRoZSBtb3VzZSBpcyByZWxlYXNlZCBhZnRlciBhIHJlc2l6ZSBldmVudC4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSByZXNpemVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgbW91c2V1cCA9IG5ldyBTdWJqZWN0PHtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xuICAgIGVkZ2VzPzogRWRnZXM7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZWRvd24gPSBuZXcgU3ViamVjdDx7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBlZGdlcz86IEVkZ2VzO1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwdWJsaWMgbW91c2Vtb3ZlID0gbmV3IFN1YmplY3Q8e1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWRnZXM/OiBFZGdlcztcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG4gIH0+KCk7XG5cbiAgcHJpdmF0ZSBwb2ludGVyRXZlbnRMaXN0ZW5lcnM6IFBvaW50ZXJFdmVudExpc3RlbmVycztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIHJlc2l6ZUVkZ2VzJCA9IG5ldyBTdWJqZWN0PEVkZ2VzPigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGVsbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVycyA9IFBvaW50ZXJFdmVudExpc3RlbmVycy5nZXRJbnN0YW5jZShcbiAgICAgIHJlbmRlcmVyLFxuICAgICAgem9uZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbW91c2Vkb3duJDogT2JzZXJ2YWJsZTx7XG4gICAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgICBlZGdlcz86IEVkZ2VzO1xuICAgIH0+ID0gbWVyZ2UodGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlckRvd24sIHRoaXMubW91c2Vkb3duKTtcblxuICAgIGNvbnN0IG1vdXNlbW92ZSQgPSBtZXJnZShcbiAgICAgIHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzLnBvaW50ZXJNb3ZlLFxuICAgICAgdGhpcy5tb3VzZW1vdmVcbiAgICApLnBpcGUoXG4gICAgICB0YXAoKHsgZXZlbnQgfSkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBjb25zdCBtb3VzZXVwJCA9IG1lcmdlKHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzLnBvaW50ZXJVcCwgdGhpcy5tb3VzZXVwKTtcblxuICAgIGxldCBjdXJyZW50UmVzaXplOiB7XG4gICAgICBlZGdlczogRWRnZXM7XG4gICAgICBzdGFydGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY3VycmVudFJlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY2xvbmVkTm9kZT86IEhUTUxFbGVtZW50O1xuICAgIH0gfCBudWxsO1xuXG4gICAgY29uc3QgcmVtb3ZlR2hvc3RFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRSZXNpemUgJiYgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFJlc2l6ZUN1cnNvcnMgPSAoKTogUmVzaXplQ3Vyc29ycyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAuLi50aGlzLnJlc2l6ZUN1cnNvcnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHRoaXMucmVzaXplRWRnZXMkXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMucmVzaXplRWRnZXMpLFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVkZ2VzICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc2l6ZUVkZ2VzKS5zb21lKGVkZ2UgPT4gISF0aGlzLnJlc2l6ZUVkZ2VzW2VkZ2VdKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBzd2l0Y2hNYXAobGVnYWN5UmVzaXplRWRnZXNFbmFibGVkID0+XG4gICAgICAgICAgbGVnYWN5UmVzaXplRWRnZXNFbmFibGVkID8gbW91c2Vtb3ZlJCA6IEVNUFRZXG4gICAgICAgICksXG4gICAgICAgIGF1ZGl0VGltZSh0aGlzLm1vdXNlTW92ZVRocm90dGxlTVMpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZUVkZ2VzOiBFZGdlcyA9IGdldFJlc2l6ZUVkZ2VzKHtcbiAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgZWxtOiB0aGlzLmVsbSxcbiAgICAgICAgICBhbGxvd2VkRWRnZXM6IHRoaXMucmVzaXplRWRnZXMsXG4gICAgICAgICAgY3Vyc29yUHJlY2lzaW9uOiB0aGlzLnJlc2l6ZUN1cnNvclByZWNpc2lvblxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzaXplQ3Vyc29ycyA9IGdldFJlc2l6ZUN1cnNvcnMoKTtcbiAgICAgICAgaWYgKCFjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yID0gZ2V0UmVzaXplQ3Vyc29yKHJlc2l6ZUVkZ2VzLCByZXNpemVDdXJzb3JzKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCBjdXJzb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9MRUZUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLmxlZnQgPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX1JJR0hUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9UT1BfSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMudG9wID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9CT1RUT01fSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMuYm90dG9tID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlZHJhZzogT2JzZXJ2YWJsZTxhbnk+ID0gbW91c2Vkb3duJFxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKHN0YXJ0Q29vcmRzID0+IHtcbiAgICAgICAgICBmdW5jdGlvbiBnZXREaWZmKG1vdmVDb29yZHM6IHsgY2xpZW50WDogbnVtYmVyOyBjbGllbnRZOiBudW1iZXIgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY2xpZW50WDogbW92ZUNvb3Jkcy5jbGllbnRYIC0gc3RhcnRDb29yZHMuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogbW92ZUNvb3Jkcy5jbGllbnRZIC0gc3RhcnRDb29yZHMuY2xpZW50WVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBnZXRTbmFwR3JpZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBHcmlkOiBDb29yZGluYXRlID0geyB4OiAxLCB5OiAxIH07XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVNuYXBHcmlkLmxlZnQgJiYgY3VycmVudFJlc2l6ZS5lZGdlcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgc25hcEdyaWQueCA9ICt0aGlzLnJlc2l6ZVNuYXBHcmlkLmxlZnQ7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTbmFwR3JpZC5yaWdodCAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuZWRnZXMucmlnaHRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc25hcEdyaWQueCA9ICt0aGlzLnJlc2l6ZVNuYXBHcmlkLnJpZ2h0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplU25hcEdyaWQudG9wICYmIGN1cnJlbnRSZXNpemUuZWRnZXMudG9wKSB7XG4gICAgICAgICAgICAgICAgc25hcEdyaWQueSA9ICt0aGlzLnJlc2l6ZVNuYXBHcmlkLnRvcDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNuYXBHcmlkLmJvdHRvbSAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuZWRnZXMuYm90dG9tXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnkgPSArdGhpcy5yZXNpemVTbmFwR3JpZC5ib3R0b207XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNuYXBHcmlkO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRHcmlkKFxuICAgICAgICAgICAgY29vcmRzOiB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH0sXG4gICAgICAgICAgICBzbmFwR3JpZDogQ29vcmRpbmF0ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogTWF0aC5jZWlsKGNvb3Jkcy5jbGllbnRYIC8gc25hcEdyaWQueCksXG4gICAgICAgICAgICAgIHk6IE1hdGguY2VpbChjb29yZHMuY2xpZW50WSAvIHNuYXBHcmlkLnkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAobWVyZ2UoXG4gICAgICAgICAgICBtb3VzZW1vdmUkLnBpcGUodGFrZSgxKSkucGlwZShtYXAoY29vcmRzID0+IFssIGNvb3Jkc10pKSxcbiAgICAgICAgICAgIG1vdXNlbW92ZSQucGlwZShwYWlyd2lzZSgpKVxuICAgICAgICAgICkgYXMgT2JzZXJ2YWJsZTxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9LFxuICAgICAgICAgICAgICB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICA+KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoW3ByZXZpb3VzQ29vcmRzLCBuZXdDb29yZHNdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzID8gZ2V0RGlmZihwcmV2aW91c0Nvb3JkcykgOiBwcmV2aW91c0Nvb3JkcyxcbiAgICAgICAgICAgICAgICAgIGdldERpZmYobmV3Q29vcmRzKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKChbcHJldmlvdXNDb29yZHMsIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZpb3VzQ29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IGdldFNuYXBHcmlkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNHcmlkOiBDb29yZGluYXRlID0gZ2V0R3JpZChcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgc25hcEdyaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dyaWQ6IENvb3JkaW5hdGUgPSBnZXRHcmlkKG5ld0Nvb3Jkcywgc25hcEdyaWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIHByZXZpb3VzR3JpZC54ICE9PSBuZXdHcmlkLnggfHwgcHJldmlvdXNHcmlkLnkgIT09IG5ld0dyaWQueVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChbLCBuZXdDb29yZHNdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEdyaWQ6IENvb3JkaW5hdGUgPSBnZXRTbmFwR3JpZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBjbGllbnRYOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5ld0Nvb3Jkcy5jbGllbnRYIC8gc25hcEdyaWQueCkgKiBzbmFwR3JpZC54LFxuICAgICAgICAgICAgICAgICAgY2xpZW50WTpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChuZXdDb29yZHMuY2xpZW50WSAvIHNuYXBHcmlkLnkpICogc25hcEdyaWQueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwobWVyZ2UobW91c2V1cCQsIG1vdXNlZG93biQpKSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gISFjdXJyZW50UmVzaXplKSk7XG5cbiAgICBtb3VzZWRyYWdcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGdldE5ld0JvdW5kaW5nUmVjdGFuZ2xlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZSEuc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuYWxsb3dOZWdhdGl2ZVJlc2l6ZXMgfHxcbiAgICAgICAgICAgICEhKFxuICAgICAgICAgICAgICBuZXdCb3VuZGluZ1JlY3QuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgIG5ld0JvdW5kaW5nUmVjdC53aWR0aCAmJlxuICAgICAgICAgICAgICBuZXdCb3VuZGluZ1JlY3QuaGVpZ2h0ID4gMCAmJlxuICAgICAgICAgICAgICBuZXdCb3VuZGluZ1JlY3Qud2lkdGggPiAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKG5ld0JvdW5kaW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVJlc2l6ZVxuICAgICAgICAgICAgPyB0aGlzLnZhbGlkYXRlUmVzaXplKHtcbiAgICAgICAgICAgICAgICByZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdCxcbiAgICAgICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgICAgIGVkZ2VzOiBjdXJyZW50UmVzaXplIS5lZGdlcyxcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgICAgIG5ld1JlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogdHJ1ZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSAmJiBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3QuaGVpZ2h0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3Qud2lkdGh9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBgJHtuZXdCb3VuZGluZ1JlY3QudG9wfXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC5sZWZ0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZXNpemluZy5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemluZy5lbWl0KHtcbiAgICAgICAgICAgICAgZWRnZXM6IGdldEVkZ2VzRGlmZih7XG4gICAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBuZXdCb3VuZGluZ1JlY3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0ID0gbmV3Qm91bmRpbmdSZWN0O1xuICAgICAgfSk7XG5cbiAgICBtb3VzZWRvd24kXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh7IGNsaWVudFgsIGNsaWVudFksIGVkZ2VzIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZWRnZXMgfHxcbiAgICAgICAgICAgIGdldFJlc2l6ZUVkZ2VzKHtcbiAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgZWxtOiB0aGlzLmVsbSxcbiAgICAgICAgICAgICAgYWxsb3dlZEVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzLFxuICAgICAgICAgICAgICBjdXJzb3JQcmVjaXNpb246IHRoaXMucmVzaXplQ3Vyc29yUHJlY2lzaW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChlZGdlczogRWRnZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZWRnZXMpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGVkZ2VzOiBFZGdlcykgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIHJlbW92ZUdob3N0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUgPSBnZXRFbGVtZW50UmVjdChcbiAgICAgICAgICB0aGlzLmVsbSxcbiAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudFBvc2l0aW9uaW5nXG4gICAgICAgICk7XG4gICAgICAgIGN1cnJlbnRSZXNpemUgPSB7XG4gICAgICAgICAgZWRnZXMsXG4gICAgICAgICAgc3RhcnRpbmdSZWN0LFxuICAgICAgICAgIGN1cnJlbnRSZWN0OiBzdGFydGluZ1JlY3RcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzaXplQ3Vyc29ycyA9IGdldFJlc2l6ZUN1cnNvcnMoKTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZ2V0UmVzaXplQ3Vyc29yKGN1cnJlbnRSZXNpemUuZWRnZXMsIHJlc2l6ZUN1cnNvcnMpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCBjdXJzb3IpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsbSwgUkVTSVpFX0FDVElWRV9DTEFTUywgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUdob3N0UmVzaXplKSB7XG4gICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICdoaWRkZW4nXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50UG9zaXRpb25pbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC5sZWZ0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3QudG9wfXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3QuaGVpZ2h0fXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICd3aWR0aCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC53aWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnY3Vyc29yJyxcbiAgICAgICAgICAgIGdldFJlc2l6ZUN1cnNvcihjdXJyZW50UmVzaXplLmVkZ2VzLCByZXNpemVDdXJzb3JzKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgIFJFU0laRV9HSE9TVF9FTEVNRU5UX0NMQVNTXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUhLnNjcm9sbFRvcCA9IGN1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0XG4gICAgICAgICAgICAuc2Nyb2xsVG9wIGFzIG51bWJlcjtcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUhLnNjcm9sbExlZnQgPSBjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdFxuICAgICAgICAgICAgLnNjcm9sbExlZnQgYXMgbnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZVN0YXJ0Lm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVN0YXJ0LmVtaXQoe1xuICAgICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBzdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBzdGFydGluZ1JlY3RcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHJlY3RhbmdsZTogZ2V0TmV3Qm91bmRpbmdSZWN0YW5nbGUoc3RhcnRpbmdSZWN0LCB7fSwgMCwgMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIG1vdXNldXAkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRSZXNpemUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCBSRVNJWkVfQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnJyk7XG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZUVuZC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVFbmQuZW1pdCh7XG4gICAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICAgIGVkZ2VzOiBjdXJyZW50UmVzaXplIS5lZGdlcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgICAgIGN1cnJlbnRSZXNpemUgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5yZXNpemVFZGdlcykge1xuICAgICAgdGhpcy5yZXNpemVFZGdlcyQubmV4dCh0aGlzLnJlc2l6ZUVkZ2VzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gYnJvd3NlciBjaGVjayBmb3IgYW5ndWxhciB1bml2ZXJzYWwsIGJlY2F1c2UgaXQgZG9lc24ndCBrbm93IHdoYXQgZG9jdW1lbnQgaXNcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgIH1cbiAgICB0aGlzLm1vdXNlZG93bi5jb21wbGV0ZSgpO1xuICAgIHRoaXMubW91c2V1cC5jb21wbGV0ZSgpO1xuICAgIHRoaXMubW91c2Vtb3ZlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5yZXNpemVFZGdlcyQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RWxlbWVudENsYXNzKGVsbTogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nLCBhZGQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoYWRkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsbS5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbG0ubmF0aXZlRWxlbWVudCwgbmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBvaW50ZXJFdmVudExpc3RlbmVycyB7XG4gIHB1YmxpYyBwb2ludGVyRG93bjogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwdWJsaWMgcG9pbnRlck1vdmU6IE9ic2VydmFibGU8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT47XG5cbiAgcHVibGljIHBvaW50ZXJVcDogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9pbnRlckV2ZW50TGlzdGVuZXJzOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHpvbmU6IE5nWm9uZVxuICApOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnMge1xuICAgIGlmICghUG9pbnRlckV2ZW50TGlzdGVuZXJzLmluc3RhbmNlKSB7XG4gICAgICBQb2ludGVyRXZlbnRMaXN0ZW5lcnMuaW5zdGFuY2UgPSBuZXcgUG9pbnRlckV2ZW50TGlzdGVuZXJzKFxuICAgICAgICByZW5kZXJlcixcbiAgICAgICAgem9uZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFBvaW50ZXJFdmVudExpc3RlbmVycy5pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMucG9pbnRlckRvd24gPSBuZXcgT2JzZXJ2YWJsZShcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT4pID0+IHtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlTW91c2VEb3duOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0OiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VEb3duID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0ID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZURvd24oKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJNb3ZlID0gbmV3IE9ic2VydmFibGUoXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+KSA9PiB7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZU1vdXNlTW92ZTogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hNb3ZlOiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJVcCA9IG5ldyBPYnNlcnZhYmxlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxQb2ludGVyRXZlbnRDb29yZGluYXRlPikgPT4ge1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaEVuZDogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hDYW5jZWw6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZVVwID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgICAgIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hFbmQgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hDYW5jZWwgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlVXAoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoRW5kKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaENhbmNlbCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19