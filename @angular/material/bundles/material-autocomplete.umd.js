(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/cdk/overlay'),require('@angular/cdk/bidi'),require('@angular/material/form-field'),require('@angular/cdk/scrolling'),require('@angular/material/core'),exports, require('tslib'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/core'), require('@angular/material/core'), require('@angular/common'), require('@angular/cdk/overlay'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/forms'), require('@angular/material/form-field'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/material/autocomplete', ['@angular/core','@angular/common','@angular/cdk/overlay','@angular/cdk/bidi','@angular/material/form-field','@angular/cdk/scrolling','@angular/material/core','exports', 'tslib', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/core', '@angular/material/core', '@angular/common', '@angular/cdk/overlay', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/forms', '@angular/material/form-field', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ng.cdk.overlay,global.ng.cdk.bidi,global.ng.material.formField,global.ng.cdk.scrolling,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.autocomplete = {}), global.tslib, global.ng.cdk.a11y, global.ng.cdk.coercion, global.ng.core, global.ng.material.core, global.ng.common, global.ng.cdk.overlay, global.ng.cdk.bidi, global.ng.cdk.keycodes, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.forms, global.ng.material.formField, global.rxjs, global.rxjs.operators));
}(this, (function (??ngcc0,??ngcc1,??ngcc2,??ngcc3,??ngcc4,??ngcc5,??ngcc6,exports, tslib, a11y, coercion, core, core$1, common, overlay, bidi, keycodes, platform, portal, scrolling, forms, formField, rxjs, operators) { 
var _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ??ngcc0.????elementStart(0, "div", 0, 1);
    ??ngcc0.????projection(2);
    ??ngcc0.????elementEnd();
} if (rf & 2) {
    var ctx_r0 = ??ngcc0.????nextContext();
    ??ngcc0.????property("id", ctx_r0.id)("ngClass", ctx_r0._classList);
} }
var _c1 = ["*"];
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     */
    var _uniqueAutocompleteIdCounter = 0;
    /** Event object that is emitted when an autocomplete option is selected. */
    var MatAutocompleteSelectedEvent = /** @class */ (function () {
        function MatAutocompleteSelectedEvent(
        /** Reference to the autocomplete panel that emitted the event. */
        source, 
        /** Option that was selected. */
        option) {
            this.source = source;
            this.option = option;
        }
        return MatAutocompleteSelectedEvent;
    }());
    // Boilerplate for applying mixins to MatAutocomplete.
    /** @docs-private */
    var MatAutocompleteBase = /** @class */ (function () {
        function MatAutocompleteBase() {
        }
        return MatAutocompleteBase;
    }());
    var _MatAutocompleteMixinBase = core$1.mixinDisableRipple(MatAutocompleteBase);
    /** Injection token to be used to override the default options for `mat-autocomplete`. */
    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new core.InjectionToken('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY,
    });
    /** @docs-private */
    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return { autoActiveFirstOption: false };
    }
    var MatAutocomplete = /** @class */ (function (_super) {
        tslib.__extends(MatAutocomplete, _super);
        function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
            var _this = _super.call(this) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._elementRef = _elementRef;
            /** Whether the autocomplete panel should be visible, depending on option length. */
            _this.showPanel = false;
            _this._isOpen = false;
            /** Function that maps an option's control value to its display value in the trigger. */
            _this.displayWith = null;
            /** Event that is emitted whenever an option from the list is selected. */
            _this.optionSelected = new core.EventEmitter();
            /** Event that is emitted when the autocomplete panel is opened. */
            _this.opened = new core.EventEmitter();
            /** Event that is emitted when the autocomplete panel is closed. */
            _this.closed = new core.EventEmitter();
            _this._classList = {};
            /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
            _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
            _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
            return _this;
        }
        Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
            /** Whether the autocomplete panel is open. */
            get: function () { return this._isOpen && this.showPanel; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
            /**
             * Whether the first option should be highlighted when the autocomplete panel is opened.
             * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
             */
            get: function () { return this._autoActiveFirstOption; },
            set: function (value) {
                this._autoActiveFirstOption = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatAutocomplete.prototype, "classList", {
            /**
             * Takes classes set on the host mat-autocomplete element and applies them to the panel
             * inside the overlay container to allow for easy styling.
             */
            set: function (value) {
                if (value && value.length) {
                    this._classList = value.split(' ').reduce(function (classList, className) {
                        classList[className.trim()] = true;
                        return classList;
                    }, {});
                }
                else {
                    this._classList = {};
                }
                this._setVisibilityClasses(this._classList);
                this._elementRef.nativeElement.className = '';
            },
            enumerable: true,
            configurable: true
        });
        MatAutocomplete.prototype.ngAfterContentInit = function () {
            this._keyManager = new a11y.ActiveDescendantKeyManager(this.options).withWrap();
            // Set the initial visibility state.
            this._setVisibility();
        };
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         */
        MatAutocomplete.prototype._setScrollTop = function (scrollTop) {
            if (this.panel) {
                this.panel.nativeElement.scrollTop = scrollTop;
            }
        };
        /** Returns the panel's scrollTop. */
        MatAutocomplete.prototype._getScrollTop = function () {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
        };
        /** Panel should hide itself when the option list is empty. */
        MatAutocomplete.prototype._setVisibility = function () {
            this.showPanel = !!this.options.length;
            this._setVisibilityClasses(this._classList);
            this._changeDetectorRef.markForCheck();
        };
        /** Emits the `select` event. */
        MatAutocomplete.prototype._emitSelectEvent = function (option) {
            var event = new MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
        };
        /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
        MatAutocomplete.prototype._setVisibilityClasses = function (classList) {
            classList['mat-autocomplete-visible'] = this.showPanel;
            classList['mat-autocomplete-hidden'] = !this.showPanel;
        };
        /** @nocollapse */
        MatAutocomplete.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] }] }
        ]; };
        MatAutocomplete.propDecorators = {
            template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
            panel: [{ type: core.ViewChild, args: ['panel',] }],
            options: [{ type: core.ContentChildren, args: [core$1.MatOption, { descendants: true },] }],
            optionGroups: [{ type: core.ContentChildren, args: [core$1.MatOptgroup, { descendants: true },] }],
            displayWith: [{ type: core.Input }],
            autoActiveFirstOption: [{ type: core.Input }],
            panelWidth: [{ type: core.Input }],
            optionSelected: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }],
            classList: [{ type: core.Input, args: ['class',] }]
        };
MatAutocomplete.??fac = function MatAutocomplete_Factory(t) { return new (t || MatAutocomplete)(??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS)); };
MatAutocomplete.??cmp = ??ngcc0.????defineComponent({ type: MatAutocomplete, selectors: [["mat-autocomplete"]], contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ??ngcc0.????contentQuery(dirIndex, core$1.MatOption, true);
        ??ngcc0.????contentQuery(dirIndex, core$1.MatOptgroup, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx.options = _t);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx.optionGroups = _t);
    } }, viewQuery: function MatAutocomplete_Query(rf, ctx) { if (rf & 1) {
        ??ngcc0.????staticViewQuery(core.TemplateRef, true);
        ??ngcc0.????viewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx.template = _t.first);
        ??ngcc0.????queryRefresh(_t = ??ngcc0.????loadQuery()) && (ctx.panel = _t.first);
    } }, hostAttrs: [1, "mat-autocomplete"], inputs: { disableRipple: "disableRipple", autoActiveFirstOption: "autoActiveFirstOption", classList: ["class", "classList"], displayWith: "displayWith", panelWidth: "panelWidth" }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed" }, exportAs: ["matAutocomplete"], features: [??ngcc0.????ProvidersFeature([
            { provide: core$1.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
        ]), ??ngcc0.????InheritDefinitionFeature], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]], template: function MatAutocomplete_Template(rf, ctx) { if (rf & 1) {
        ??ngcc0.????projectionDef();
        ??ngcc0.????template(0, MatAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
    } }, directives: [??ngcc1.NgClass], styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatAutocomplete, [{
        type: core.Component,
        args: [{
                selector: 'mat-autocomplete',
                template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                exportAs: 'matAutocomplete',
                inputs: ['disableRipple'],
                host: {
                    'class': 'mat-autocomplete'
                },
                providers: [
                    { provide: core$1.MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }
                ],
                styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
            }]
    }], function () { return [{ type: ??ngcc0.ChangeDetectorRef }, { type: ??ngcc0.ElementRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }] }]; }, { autoActiveFirstOption: [{
            type: core.Input
        }], classList: [{
            type: core.Input,
            args: ['class']
        }], template: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: true }]
        }], panel: [{
            type: core.ViewChild,
            args: ['panel']
        }], options: [{
            type: core.ContentChildren,
            args: [core$1.MatOption, { descendants: true }]
        }], optionGroups: [{
            type: core.ContentChildren,
            args: [core$1.MatOptgroup, { descendants: true }]
        }], displayWith: [{
            type: core.Input
        }], panelWidth: [{
            type: core.Input
        }], optionSelected: [{
            type: core.Output
        }], opened: [{
            type: core.Output
        }], closed: [{
            type: core.Output
        }] }); })();
        return MatAutocomplete;
    }(_MatAutocompleteMixinBase));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */
    var MatAutocompleteOrigin = /** @class */ (function () {
        function MatAutocompleteOrigin(
        /** Reference to the element on which the directive is applied. */
        elementRef) {
            this.elementRef = elementRef;
        }
        /** @nocollapse */
        MatAutocompleteOrigin.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
MatAutocompleteOrigin.??fac = function MatAutocompleteOrigin_Factory(t) { return new (t || MatAutocompleteOrigin)(??ngcc0.????directiveInject(??ngcc0.ElementRef)); };
MatAutocompleteOrigin.??dir = ??ngcc0.????defineDirective({ type: MatAutocompleteOrigin, selectors: [["", "matAutocompleteOrigin", ""]], exportAs: ["matAutocompleteOrigin"] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatAutocompleteOrigin, [{
        type: core.Directive,
        args: [{
                selector: '[matAutocompleteOrigin]',
                exportAs: 'matAutocompleteOrigin'
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }]; }, null); })();
        return MatAutocompleteOrigin;
    }());

    /**
     * The following style constants are necessary to save here in order
     * to properly calculate the scrollTop of the panel. Because we are not
     * actually focusing the active item, scroll must be handled manually.
     */
    /** The height of each autocomplete option. */
    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /** The total height of the autocomplete panel. */
    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /** Injection token that determines the scroll handling while the autocomplete panel is open. */
    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new core.InjectionToken('mat-autocomplete-scroll-strategy');
    /** @docs-private */
    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () { return overlay.scrollStrategies.reposition(); };
    }
    /** @docs-private */
    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [overlay.Overlay],
        useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY,
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * @docs-private
     */
    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return MatAutocompleteTrigger; }),
        multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * @docs-private
     */
    function getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
            'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
            'you\'re attempting to open it after the ngAfterContentInit hook.');
    }
    var MatAutocompleteTrigger = /** @class */ (function () {
        function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, 
        // @breaking-change 8.0.0 Make `_viewportRuler` required.
        _viewportRuler) {
            var _this = this;
            this._element = _element;
            this._overlay = _overlay;
            this._viewContainerRef = _viewContainerRef;
            this._zone = _zone;
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this._formField = _formField;
            this._document = _document;
            this._viewportRuler = _viewportRuler;
            this._componentDestroyed = false;
            this._autocompleteDisabled = false;
            /** Whether or not the label state is being overridden. */
            this._manuallyFloatingLabel = false;
            /** Subscription to viewport size changes. */
            this._viewportSubscription = rxjs.Subscription.EMPTY;
            /**
             * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
             * closed autocomplete from being reopened if the user switches to another browser tab and then
             * comes back.
             */
            this._canOpenOnNextFocus = true;
            /** Stream of keyboard events that can close the panel. */
            this._closeKeyEventStream = new rxjs.Subject();
            /**
             * Event handler for when the window is blurred. Needs to be an
             * arrow function in order to preserve the context.
             */
            this._windowBlurHandler = function () {
                // If the user blurred the window while the autocomplete is focused, it means that it'll be
                // refocused when they come back. In this case we want to skip the first focus event, if the
                // pane was closed, in order to avoid reopening it unintentionally.
                _this._canOpenOnNextFocus =
                    _this._document.activeElement !== _this._element.nativeElement || _this.panelOpen;
            };
            /** `View -> model callback called when value changes` */
            this._onChange = function () { };
            /** `View -> model callback called when autocomplete has been touched` */
            this._onTouched = function () { };
            /**
             * Position of the autocomplete panel relative to the trigger element. A position of `auto`
             * will render the panel underneath the trigger if there is enough space for it to fit in
             * the viewport, otherwise the panel will be shown above it. If the position is set to
             * `above` or `below`, the panel will always be shown above or below the trigger. no matter
             * whether it fits completely in the viewport.
             */
            this.position = 'auto';
            /**
             * `autocomplete` attribute to be set on the input element.
             * @docs-private
             */
            this.autocompleteAttribute = 'off';
            this._overlayAttached = false;
            /** Stream of autocomplete option selections. */
            this.optionSelections = rxjs.defer(function () {
                if (_this.autocomplete && _this.autocomplete.options) {
                    return rxjs.merge.apply(void 0, tslib.__spread(_this.autocomplete.options.map(function (option) { return option.onSelectionChange; })));
                }
                // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
                // Return a stream that we'll replace with the real one once everything is in place.
                return _this._zone.onStable
                    .asObservable()
                    .pipe(operators.take(1), operators.switchMap(function () { return _this.optionSelections; }));
            });
            this._scrollStrategy = scrollStrategy;
        }
        Object.defineProperty(MatAutocompleteTrigger.prototype, "autocompleteDisabled", {
            /**
             * Whether the autocomplete is disabled. When disabled, the element will
             * act as a regular input and the user won't be able to open the panel.
             */
            get: function () { return this._autocompleteDisabled; },
            set: function (value) {
                this._autocompleteDisabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        MatAutocompleteTrigger.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                this._zone.runOutsideAngular(function () {
                    window.addEventListener('blur', _this._windowBlurHandler);
                });
                if (platform._supportsShadowDom()) {
                    var element = this._element.nativeElement;
                    var rootNode = element.getRootNode ? element.getRootNode() : null;
                    // We need to take the `ShadowRoot` off of `window`, because the built-in types are
                    // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
                    this._isInsideShadowRoot = rootNode instanceof window.ShadowRoot;
                }
            }
        };
        MatAutocompleteTrigger.prototype.ngOnChanges = function (changes) {
            if (changes['position'] && this._positionStrategy) {
                this._setStrategyPositions(this._positionStrategy);
                if (this.panelOpen) {
                    this._overlayRef.updatePosition();
                }
            }
        };
        MatAutocompleteTrigger.prototype.ngOnDestroy = function () {
            if (typeof window !== 'undefined') {
                window.removeEventListener('blur', this._windowBlurHandler);
            }
            this._viewportSubscription.unsubscribe();
            this._componentDestroyed = true;
            this._destroyPanel();
            this._closeKeyEventStream.complete();
        };
        Object.defineProperty(MatAutocompleteTrigger.prototype, "panelOpen", {
            /** Whether or not the autocomplete panel is open. */
            get: function () {
                return this._overlayAttached && this.autocomplete.showPanel;
            },
            enumerable: true,
            configurable: true
        });
        /** Opens the autocomplete suggestion panel. */
        MatAutocompleteTrigger.prototype.openPanel = function () {
            this._attachOverlay();
            this._floatLabel();
        };
        /** Closes the autocomplete suggestion panel. */
        MatAutocompleteTrigger.prototype.closePanel = function () {
            this._resetLabel();
            if (!this._overlayAttached) {
                return;
            }
            if (this.panelOpen) {
                // Only emit if the panel was visible.
                this.autocomplete.closed.emit();
            }
            this.autocomplete._isOpen = this._overlayAttached = false;
            if (this._overlayRef && this._overlayRef.hasAttached()) {
                this._overlayRef.detach();
                this._closingActionsSubscription.unsubscribe();
            }
            // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.
            if (!this._componentDestroyed) {
                // We need to trigger change detection manually, because
                // `fromEvent` doesn't seem to do it at the proper time.
                // This ensures that the label is reset when the
                // user clicks outside.
                this._changeDetectorRef.detectChanges();
            }
        };
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         */
        MatAutocompleteTrigger.prototype.updatePosition = function () {
            if (this._overlayAttached) {
                this._overlayRef.updatePosition();
            }
        };
        Object.defineProperty(MatAutocompleteTrigger.prototype, "panelClosingActions", {
            /**
             * A stream of actions that should close the autocomplete panel, including
             * when an option is selected, on blur, and when TAB is pressed.
             */
            get: function () {
                var _this = this;
                return rxjs.merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(operators.filter(function () { return _this._overlayAttached; })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ?
                    this._overlayRef.detachments().pipe(operators.filter(function () { return _this._overlayAttached; })) :
                    rxjs.of()).pipe(
                // Normalize the output so we return a consistent type.
                operators.map(function (event) { return event instanceof core$1.MatOptionSelectionChange ? event : null; }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatAutocompleteTrigger.prototype, "activeOption", {
            /** The currently active option, coerced to MatOption type. */
            get: function () {
                if (this.autocomplete && this.autocomplete._keyManager) {
                    return this.autocomplete._keyManager.activeItem;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        /** Stream of clicks outside of the autocomplete panel. */
        MatAutocompleteTrigger.prototype._getOutsideClickStream = function () {
            var _this = this;
            return rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend'))
                .pipe(operators.filter(function (event) {
                // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
                // fall back to check the first element in the path of the click event.
                var clickTarget = (_this._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] :
                    event.target);
                var formField = _this._formField ? _this._formField._elementRef.nativeElement : null;
                return _this._overlayAttached && clickTarget !== _this._element.nativeElement &&
                    (!formField || !formField.contains(clickTarget)) &&
                    (!!_this._overlayRef && !_this._overlayRef.overlayElement.contains(clickTarget));
            }));
        };
        // Implemented as part of ControlValueAccessor.
        MatAutocompleteTrigger.prototype.writeValue = function (value) {
            var _this = this;
            Promise.resolve(null).then(function () { return _this._setTriggerValue(value); });
        };
        // Implemented as part of ControlValueAccessor.
        MatAutocompleteTrigger.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatAutocompleteTrigger.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        // Implemented as part of ControlValueAccessor.
        MatAutocompleteTrigger.prototype.setDisabledState = function (isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
        };
        MatAutocompleteTrigger.prototype._handleKeydown = function (event) {
            var keyCode = event.keyCode;
            // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.
            if (keyCode === keycodes.ESCAPE) {
                event.preventDefault();
            }
            if (this.activeOption && keyCode === keycodes.ENTER && this.panelOpen) {
                this.activeOption._selectViaInteraction();
                this._resetActiveItem();
                event.preventDefault();
            }
            else if (this.autocomplete) {
                var prevActiveItem = this.autocomplete._keyManager.activeItem;
                var isArrowKey = keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW;
                if (this.panelOpen || keyCode === keycodes.TAB) {
                    this.autocomplete._keyManager.onKeydown(event);
                }
                else if (isArrowKey && this._canOpen()) {
                    this.openPanel();
                }
                if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                    this._scrollToOption();
                }
            }
        };
        MatAutocompleteTrigger.prototype._handleInput = function (event) {
            var target = event.target;
            var value = target.value;
            // Based on `NumberValueAccessor` from forms.
            if (target.type === 'number') {
                value = value == '' ? null : parseFloat(value);
            }
            // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/
            if (this._previousValue !== value) {
                this._previousValue = value;
                this._onChange(value);
                if (this._canOpen() && this._document.activeElement === event.target) {
                    this.openPanel();
                }
            }
        };
        MatAutocompleteTrigger.prototype._handleFocus = function () {
            if (!this._canOpenOnNextFocus) {
                this._canOpenOnNextFocus = true;
            }
            else if (this._canOpen()) {
                this._previousValue = this._element.nativeElement.value;
                this._attachOverlay();
                this._floatLabel(true);
            }
        };
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @param shouldAnimate Whether the label should be animated when it is floated.
         */
        MatAutocompleteTrigger.prototype._floatLabel = function (shouldAnimate) {
            if (shouldAnimate === void 0) { shouldAnimate = false; }
            if (this._formField && this._formField.floatLabel === 'auto') {
                if (shouldAnimate) {
                    this._formField._animateAndLockLabel();
                }
                else {
                    this._formField.floatLabel = 'always';
                }
                this._manuallyFloatingLabel = true;
            }
        };
        /** If the label has been manually elevated, return it to its normal state. */
        MatAutocompleteTrigger.prototype._resetLabel = function () {
            if (this._manuallyFloatingLabel) {
                this._formField.floatLabel = 'auto';
                this._manuallyFloatingLabel = false;
            }
        };
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         */
        MatAutocompleteTrigger.prototype._scrollToOption = function () {
            var index = this.autocomplete._keyManager.activeItemIndex || 0;
            var labelCount = core$1._countGroupLabelsBeforeOption(index, this.autocomplete.options, this.autocomplete.optionGroups);
            if (index === 0 && labelCount === 1) {
                // If we've got one group label before the option and we're at the top option,
                // scroll the list to the top. This is better UX than scrolling the list to the
                // top of the option, because it allows the user to read the top group's label.
                this.autocomplete._setScrollTop(0);
            }
            else {
                var newScrollPosition = core$1._getOptionScrollPosition(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
                this.autocomplete._setScrollTop(newScrollPosition);
            }
        };
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         */
        MatAutocompleteTrigger.prototype._subscribeToClosingActions = function () {
            var _this = this;
            var firstStable = this._zone.onStable.asObservable().pipe(operators.take(1));
            var optionChanges = this.autocomplete.options.changes.pipe(operators.tap(function () { return _this._positionStrategy.reapplyLastPosition(); }), 
            // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            operators.delay(0));
            // When the zone is stable initially, and when the option list changes...
            return rxjs.merge(firstStable, optionChanges)
                .pipe(
            // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            operators.switchMap(function () {
                var wasOpen = _this.panelOpen;
                _this._resetActiveItem();
                _this.autocomplete._setVisibility();
                if (_this.panelOpen) {
                    _this._overlayRef.updatePosition();
                    // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                    // event, because we may not have emitted it when the panel was attached. This
                    // can happen if the users opens the panel and there are no options, but the
                    // options come in slightly later or as a result of the value changing.
                    if (wasOpen !== _this.panelOpen) {
                        _this.autocomplete.opened.emit();
                    }
                }
                return _this.panelClosingActions;
            }), 
            // when the first closing event occurs...
            operators.take(1))
                // set the value, close the panel, and complete.
                .subscribe(function (event) { return _this._setValueAndClose(event); });
        };
        /** Destroys the autocomplete suggestion panel. */
        MatAutocompleteTrigger.prototype._destroyPanel = function () {
            if (this._overlayRef) {
                this.closePanel();
                this._overlayRef.dispose();
                this._overlayRef = null;
            }
        };
        MatAutocompleteTrigger.prototype._setTriggerValue = function (value) {
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ?
                this.autocomplete.displayWith(value) :
                value;
            // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.
            var inputValue = toDisplay != null ? toDisplay : '';
            // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.
            if (this._formField) {
                this._formField._control.value = inputValue;
            }
            else {
                this._element.nativeElement.value = inputValue;
            }
            this._previousValue = inputValue;
        };
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         */
        MatAutocompleteTrigger.prototype._setValueAndClose = function (event) {
            if (event && event.source) {
                this._clearPreviousSelectedOption(event.source);
                this._setTriggerValue(event.source.value);
                this._onChange(event.source.value);
                this._element.nativeElement.focus();
                this.autocomplete._emitSelectEvent(event.source);
            }
            this.closePanel();
        };
        /**
         * Clear any previous selected option and emit a selection change event for this option
         */
        MatAutocompleteTrigger.prototype._clearPreviousSelectedOption = function (skip) {
            this.autocomplete.options.forEach(function (option) {
                if (option != skip && option.selected) {
                    option.deselect();
                }
            });
        };
        MatAutocompleteTrigger.prototype._attachOverlay = function () {
            var _this = this;
            if (!this.autocomplete) {
                throw getMatAutocompleteMissingPanelError();
            }
            var overlayRef = this._overlayRef;
            if (!overlayRef) {
                this._portal = new portal.TemplatePortal(this.autocomplete.template, this._viewContainerRef);
                overlayRef = this._overlay.create(this._getOverlayConfig());
                this._overlayRef = overlayRef;
                // Use the `keydownEvents` in order to take advantage of
                // the overlay event targeting provided by the CDK overlay.
                overlayRef.keydownEvents().subscribe(function (event) {
                    // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                    // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                    if (event.keyCode === keycodes.ESCAPE || (event.keyCode === keycodes.UP_ARROW && event.altKey)) {
                        _this._resetActiveItem();
                        _this._closeKeyEventStream.next();
                        // We need to stop propagation, otherwise the event will eventually
                        // reach the input itself and cause the overlay to be reopened.
                        event.stopPropagation();
                        event.preventDefault();
                    }
                });
                if (this._viewportRuler) {
                    this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                        if (_this.panelOpen && overlayRef) {
                            overlayRef.updateSize({ width: _this._getPanelWidth() });
                        }
                    });
                }
            }
            else {
                // Update the trigger, panel width and direction, in case anything has changed.
                this._positionStrategy.setOrigin(this._getConnectedElement());
                overlayRef.updateSize({ width: this._getPanelWidth() });
            }
            if (overlayRef && !overlayRef.hasAttached()) {
                overlayRef.attach(this._portal);
                this._closingActionsSubscription = this._subscribeToClosingActions();
            }
            var wasOpen = this.panelOpen;
            this.autocomplete._setVisibility();
            this.autocomplete._isOpen = this._overlayAttached = true;
            // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.
            if (this.panelOpen && wasOpen !== this.panelOpen) {
                this.autocomplete.opened.emit();
            }
        };
        MatAutocompleteTrigger.prototype._getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this._getOverlayPosition(),
                scrollStrategy: this._scrollStrategy(),
                width: this._getPanelWidth(),
                direction: this._dir
            });
        };
        MatAutocompleteTrigger.prototype._getOverlayPosition = function () {
            var strategy = this._overlay.position()
                .flexibleConnectedTo(this._getConnectedElement())
                .withFlexibleDimensions(false)
                .withPush(false);
            this._setStrategyPositions(strategy);
            this._positionStrategy = strategy;
            return strategy;
        };
        /** Sets the positions on a position strategy based on the directive's input state. */
        MatAutocompleteTrigger.prototype._setStrategyPositions = function (positionStrategy) {
            var belowPosition = {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            };
            var abovePosition = {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                // The overlay edge connected to the trigger should have squared corners, while
                // the opposite end has rounded corners. We apply a CSS class to swap the
                // border-radius based on the overlay position.
                panelClass: 'mat-autocomplete-panel-above'
            };
            var positions;
            if (this.position === 'above') {
                positions = [abovePosition];
            }
            else if (this.position === 'below') {
                positions = [belowPosition];
            }
            else {
                positions = [belowPosition, abovePosition];
            }
            positionStrategy.withPositions(positions);
        };
        MatAutocompleteTrigger.prototype._getConnectedElement = function () {
            if (this.connectedTo) {
                return this.connectedTo.elementRef;
            }
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        };
        MatAutocompleteTrigger.prototype._getPanelWidth = function () {
            return this.autocomplete.panelWidth || this._getHostWidth();
        };
        /** Returns the width of the input element, so the panel width can match it. */
        MatAutocompleteTrigger.prototype._getHostWidth = function () {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        };
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         */
        MatAutocompleteTrigger.prototype._resetActiveItem = function () {
            this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        };
        /** Determines whether the panel can be opened. */
        MatAutocompleteTrigger.prototype._canOpen = function () {
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        };
        /** @nocollapse */
        MatAutocompleteTrigger.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: overlay.Overlay },
            { type: core.ViewContainerRef },
            { type: core.NgZone },
            { type: core.ChangeDetectorRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] }] },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: formField.MatFormField, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: scrolling.ViewportRuler }
        ]; };
        MatAutocompleteTrigger.propDecorators = {
            autocomplete: [{ type: core.Input, args: ['matAutocomplete',] }],
            position: [{ type: core.Input, args: ['matAutocompletePosition',] }],
            connectedTo: [{ type: core.Input, args: ['matAutocompleteConnectedTo',] }],
            autocompleteAttribute: [{ type: core.Input, args: ['autocomplete',] }],
            autocompleteDisabled: [{ type: core.Input, args: ['matAutocompleteDisabled',] }]
        };
MatAutocompleteTrigger.??fac = function MatAutocompleteTrigger_Factory(t) { return new (t || MatAutocompleteTrigger)(??ngcc0.????directiveInject(??ngcc0.ElementRef), ??ngcc0.????directiveInject(??ngcc2.Overlay), ??ngcc0.????directiveInject(??ngcc0.ViewContainerRef), ??ngcc0.????directiveInject(??ngcc0.NgZone), ??ngcc0.????directiveInject(??ngcc0.ChangeDetectorRef), ??ngcc0.????directiveInject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY), ??ngcc0.????directiveInject(??ngcc3.Directionality, 8), ??ngcc0.????directiveInject(??ngcc4.MatFormField, 9), ??ngcc0.????directiveInject(common.DOCUMENT, 8), ??ngcc0.????directiveInject(??ngcc5.ViewportRuler)); };
MatAutocompleteTrigger.??dir = ??ngcc0.????defineDirective({ type: MatAutocompleteTrigger, selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]], hostAttrs: [1, "mat-autocomplete-trigger"], hostVars: 7, hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        ??ngcc0.????listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() { return ctx._handleFocus(); })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() { return ctx._onTouched(); })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) { return ctx._handleInput($event); })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        ??ngcc0.????attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
    } }, inputs: { position: ["matAutocompletePosition", "position"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"], autocomplete: ["matAutocomplete", "autocomplete"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"] }, exportAs: ["matAutocompleteTrigger"], features: [??ngcc0.????ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), ??ngcc0.????NgOnChangesFeature] });
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatAutocompleteTrigger, [{
        type: core.Directive,
        args: [{
                selector: "input[matAutocomplete], textarea[matAutocomplete]",
                host: {
                    'class': 'mat-autocomplete-trigger',
                    '[attr.autocomplete]': 'autocompleteAttribute',
                    '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
                    '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
                    '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
                    '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
                    '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
                    '[attr.aria-haspopup]': '!autocompleteDisabled',
                    // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                    // a little earlier. This avoids issues where IE delays the focusing of the input.
                    '(focusin)': '_handleFocus()',
                    '(blur)': '_onTouched()',
                    '(input)': '_handleInput($event)',
                    '(keydown)': '_handleKeydown($event)'
                },
                exportAs: 'matAutocompleteTrigger',
                providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: ??ngcc0.ElementRef }, { type: ??ngcc2.Overlay }, { type: ??ngcc0.ViewContainerRef }, { type: ??ngcc0.NgZone }, { type: ??ngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }] }, { type: ??ngcc3.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ??ngcc4.MatFormField, decorators: [{
                type: core.Optional
            }, {
                type: core.Host
            }] }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: ??ngcc5.ViewportRuler }]; }, { position: [{
            type: core.Input,
            args: ['matAutocompletePosition']
        }], autocompleteAttribute: [{
            type: core.Input,
            args: ['autocomplete']
        }], autocompleteDisabled: [{
            type: core.Input,
            args: ['matAutocompleteDisabled']
        }], autocomplete: [{
            type: core.Input,
            args: ['matAutocomplete']
        }], connectedTo: [{
            type: core.Input,
            args: ['matAutocompleteConnectedTo']
        }] }); })();
        return MatAutocompleteTrigger;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatAutocompleteModule = /** @class */ (function () {
        function MatAutocompleteModule() {
        }
MatAutocompleteModule.??mod = ??ngcc0.????defineNgModule({ type: MatAutocompleteModule });
MatAutocompleteModule.??inj = ??ngcc0.????defineInjector({ factory: function MatAutocompleteModule_Factory(t) { return new (t || MatAutocompleteModule)(); }, providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[core$1.MatOptionModule, overlay.OverlayModule, core$1.MatCommonModule, common.CommonModule], ??ngcc6.MatOptionModule, ??ngcc6.MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ??ngcc0.????setNgModuleScope(MatAutocompleteModule, { declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin], imports: [??ngcc6.MatOptionModule, ??ngcc2.OverlayModule, ??ngcc6.MatCommonModule, ??ngcc1.CommonModule], exports: [MatAutocomplete, ??ngcc6.MatOptionModule, MatAutocompleteTrigger, MatAutocompleteOrigin, ??ngcc6.MatCommonModule] }); })();
/*@__PURE__*/ (function () { ??ngcc0.??setClassMetadata(MatAutocompleteModule, [{
        type: core.NgModule,
        args: [{
                imports: [core$1.MatOptionModule, overlay.OverlayModule, core$1.MatCommonModule, common.CommonModule],
                exports: [
                    MatAutocomplete,
                    core$1.MatOptionModule,
                    MatAutocompleteTrigger,
                    MatAutocompleteOrigin,
                    core$1.MatCommonModule
                ],
                declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
                providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], function () { return []; }, null); })();
        return MatAutocompleteModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AUTOCOMPLETE_OPTION_HEIGHT = AUTOCOMPLETE_OPTION_HEIGHT;
    exports.AUTOCOMPLETE_PANEL_HEIGHT = AUTOCOMPLETE_PANEL_HEIGHT;
    exports.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    exports.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY = MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    exports.MAT_AUTOCOMPLETE_SCROLL_STRATEGY = MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    exports.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY = MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    exports.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    exports.MAT_AUTOCOMPLETE_VALUE_ACCESSOR = MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    exports.MatAutocomplete = MatAutocomplete;
    exports.MatAutocompleteModule = MatAutocompleteModule;
    exports.MatAutocompleteOrigin = MatAutocompleteOrigin;
    exports.MatAutocompleteSelectedEvent = MatAutocompleteSelectedEvent;
    exports.MatAutocompleteTrigger = MatAutocompleteTrigger;
    exports.getMatAutocompleteMissingPanelError = getMatAutocompleteMissingPanelError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-autocomplete.umd.js.map