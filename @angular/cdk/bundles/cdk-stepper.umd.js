(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/bidi'),require('@angular/common'),exports, require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/stepper', ['@angular/core','@angular/cdk/bidi','@angular/common','exports', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.cdk.bidi,global.ng.common,(global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.stepper = {}), global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, a11y, bidi, coercion, keycodes, common, core, rxjs, operators) { 
function CdkStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CdkStepHeader = /** @class */ (function () {
        function CdkStepHeader(_elementRef) {
            this._elementRef = _elementRef;
        }
        /** Focuses the step header. */
        CdkStepHeader.prototype.focus = function () {
            this._elementRef.nativeElement.focus();
        };
        /** @nocollapse */
        CdkStepHeader.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkStepHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepHeader, [{
        type: core.Directive,
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return CdkStepHeader;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CdkStepLabel = /** @class */ (function () {
        function CdkStepLabel(/** @docs-private */ template) {
            this.template = template;
        }
        /** @nocollapse */
        CdkStepLabel.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) { return new (t || CdkStepLabel)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkStepLabel.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepLabel, selectors: [["", "cdkStepLabel", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepLabel, [{
        type: core.Directive,
        args: [{
                selector: '[cdkStepLabel]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
        return CdkStepLabel;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Used to generate unique ID for each stepper component. */
    var nextId = 0;
    /** Change event emitted on selection changes. */
    var StepperSelectionEvent = /** @class */ (function () {
        function StepperSelectionEvent() {
        }
        return StepperSelectionEvent;
    }());
    /** Enum to represent the different states of the steps. */
    var STEP_STATE = {
        NUMBER: 'number',
        EDIT: 'edit',
        DONE: 'done',
        ERROR: 'error'
    };
    /** InjectionToken that can be used to specify the global stepper options. */
    var STEPPER_GLOBAL_OPTIONS = new core.InjectionToken('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * @breaking-change 8.0.0.
     */
    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
    var CdkStep = /** @class */ (function () {
        /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
        function CdkStep(_stepper, stepperOptions) {
            this._stepper = _stepper;
            /** Whether user has seen the expanded step content or not. */
            this.interacted = false;
            this._editable = true;
            this._optional = false;
            this._completedOverride = null;
            this._customError = null;
            this._stepperOptions = stepperOptions ? stepperOptions : {};
            this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
            this._showError = !!this._stepperOptions.showError;
        }
        Object.defineProperty(CdkStep.prototype, "editable", {
            /** Whether the user can return to this step once it has been marked as completed. */
            get: function () {
                return this._editable;
            },
            set: function (value) {
                this._editable = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkStep.prototype, "optional", {
            /** Whether the completion of step is optional. */
            get: function () {
                return this._optional;
            },
            set: function (value) {
                this._optional = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkStep.prototype, "completed", {
            /** Whether step is marked as completed. */
            get: function () {
                return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
            },
            set: function (value) {
                this._completedOverride = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        CdkStep.prototype._getDefaultCompleted = function () {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        };
        Object.defineProperty(CdkStep.prototype, "hasError", {
            /** Whether step has an error. */
            get: function () {
                return this._customError == null ? this._getDefaultError() : this._customError;
            },
            set: function (value) {
                this._customError = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        CdkStep.prototype._getDefaultError = function () {
            return this.stepControl && this.stepControl.invalid && this.interacted;
        };
        /** Selects this step component. */
        CdkStep.prototype.select = function () {
            this._stepper.selected = this;
        };
        /** Resets the step to its initial state. Note that this includes resetting form data. */
        CdkStep.prototype.reset = function () {
            this.interacted = false;
            if (this._completedOverride != null) {
                this._completedOverride = false;
            }
            if (this._customError != null) {
                this._customError = false;
            }
            if (this.stepControl) {
                this.stepControl.reset();
            }
        };
        CdkStep.prototype.ngOnChanges = function () {
            // Since basically all inputs of the MatStep get proxied through the view down to the
            // underlying MatStepHeader, we have to make sure that change detection runs correctly.
            this._stepper._stateChanged();
        };
        /** @nocollapse */
        CdkStep.ctorParameters = function () { return [
            { type: CdkStepper, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return CdkStepper; }),] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
        ]; };
        CdkStep.propDecorators = {
            stepLabel: [{ type: core.ContentChild, args: [CdkStepLabel,] }],
            content: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
            stepControl: [{ type: core.Input }],
            label: [{ type: core.Input }],
            errorMessage: [{ type: core.Input }],
            ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
            ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }],
            state: [{ type: core.Input }],
            editable: [{ type: core.Input }],
            optional: [{ type: core.Input }],
            completed: [{ type: core.Input }],
            hasError: [{ type: core.Input }]
        };
CdkStep.ɵfac = function CdkStep_Factory(t) { return new (t || CdkStep)(ɵngcc0.ɵɵdirectiveInject(core.forwardRef(function () { return CdkStepper; })), ɵngcc0.ɵɵdirectiveInject(STEPPER_GLOBAL_OPTIONS, 8)); };
CdkStep.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkStep, selectors: [["cdk-step"]], contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkStepLabel, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
    } }, viewQuery: function CdkStep_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { editable: "editable", optional: "optional", completed: "completed", hasError: "hasError", stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state" }, exportAs: ["cdkStep"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CdkStep_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStep, [{
        type: core.Component,
        args: [{
                selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: CdkStepper, decorators: [{
                type: core.Inject,
                args: [core.forwardRef(function () { return CdkStepper; })]
            }] }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { editable: [{
            type: core.Input
        }], optional: [{
            type: core.Input
        }], completed: [{
            type: core.Input
        }], hasError: [{
            type: core.Input
        }], stepLabel: [{
            type: core.ContentChild,
            args: [CdkStepLabel]
        }], content: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: true }]
        }], stepControl: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], errorMessage: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input,
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: core.Input,
            args: ['aria-labelledby']
        }], state: [{
            type: core.Input
        }] }); })();
        return CdkStep;
    }());
    var CdkStepper = /** @class */ (function () {
        function CdkStepper(_dir, _changeDetectorRef, 
        // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
        _elementRef, _document) {
            this._dir = _dir;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            /** Emits when the component is destroyed. */
            this._destroyed = new rxjs.Subject();
            this._linear = false;
            this._selectedIndex = 0;
            /** Event emitted when the selected step has changed. */
            this.selectionChange = new core.EventEmitter();
            this._orientation = 'horizontal';
            this._groupId = nextId++;
            this._document = _document;
        }
        Object.defineProperty(CdkStepper.prototype, "steps", {
            /** The list of step components that the stepper is holding. */
            get: function () {
                return this._steps;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkStepper.prototype, "linear", {
            /** Whether the validity of previous steps should be checked or not. */
            get: function () {
                return this._linear;
            },
            set: function (value) {
                this._linear = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
            /** The index of the selected step. */
            get: function () {
                return this._selectedIndex;
            },
            set: function (index) {
                var newIndex = coercion.coerceNumberProperty(index);
                if (this.steps) {
                    // Ensure that the index can't be out of bounds.
                    if (newIndex < 0 || newIndex > this.steps.length - 1) {
                        throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                    }
                    if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                        (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                        this._updateSelectedItemIndex(index);
                    }
                }
                else {
                    this._selectedIndex = newIndex;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkStepper.prototype, "selected", {
            /** The step that is selected. */
            get: function () {
                // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
                return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
            },
            set: function (step) {
                this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
            },
            enumerable: true,
            configurable: true
        });
        CdkStepper.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Note that while the step headers are content children by default, any components that
            // extend this one might have them as view children. We initialize the keyboard handling in
            // AfterViewInit so we're guaranteed for both view and content children to be defined.
            this._keyManager = new a11y.FocusKeyManager(this._stepHeader)
                .withWrap()
                .withVerticalOrientation(this._orientation === 'vertical');
            (this._dir ? this._dir.change : rxjs.of())
                .pipe(operators.startWith(this._layoutDirection()), operators.takeUntil(this._destroyed))
                .subscribe(function (direction) { return _this._keyManager.withHorizontalOrientation(direction); });
            this._keyManager.updateActiveItem(this._selectedIndex);
            this.steps.changes.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                if (!_this.selected) {
                    _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
                }
            });
        };
        CdkStepper.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        /** Selects and focuses the next step in list. */
        CdkStepper.prototype.next = function () {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
        };
        /** Selects and focuses the previous step in list. */
        CdkStepper.prototype.previous = function () {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        };
        /** Resets the stepper to its initial state. Note that this includes clearing form data. */
        CdkStepper.prototype.reset = function () {
            this._updateSelectedItemIndex(0);
            this.steps.forEach(function (step) { return step.reset(); });
            this._stateChanged();
        };
        /** Returns a unique id for each step label element. */
        CdkStepper.prototype._getStepLabelId = function (i) {
            return "cdk-step-label-" + this._groupId + "-" + i;
        };
        /** Returns unique id for each step content element. */
        CdkStepper.prototype._getStepContentId = function (i) {
            return "cdk-step-content-" + this._groupId + "-" + i;
        };
        /** Marks the component to be change detected. */
        CdkStepper.prototype._stateChanged = function () {
            this._changeDetectorRef.markForCheck();
        };
        /** Returns position state of the step with the given index. */
        CdkStepper.prototype._getAnimationDirection = function (index) {
            var position = index - this._selectedIndex;
            if (position < 0) {
                return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
            }
            else if (position > 0) {
                return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
            }
            return 'current';
        };
        /** Returns the type of icon to be displayed. */
        CdkStepper.prototype._getIndicatorType = function (index, state) {
            if (state === void 0) { state = STEP_STATE.NUMBER; }
            var step = this.steps.toArray()[index];
            var isCurrentStep = this._isCurrentStep(index);
            return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
                this._getGuidelineLogic(step, isCurrentStep, state);
        };
        CdkStepper.prototype._getDefaultIndicatorLogic = function (step, isCurrentStep) {
            if (step._showError && step.hasError && !isCurrentStep) {
                return STEP_STATE.ERROR;
            }
            else if (!step.completed || isCurrentStep) {
                return STEP_STATE.NUMBER;
            }
            else {
                return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
            }
        };
        CdkStepper.prototype._getGuidelineLogic = function (step, isCurrentStep, state) {
            if (state === void 0) { state = STEP_STATE.NUMBER; }
            if (step._showError && step.hasError && !isCurrentStep) {
                return STEP_STATE.ERROR;
            }
            else if (step.completed && !isCurrentStep) {
                return STEP_STATE.DONE;
            }
            else if (step.completed && isCurrentStep) {
                return state;
            }
            else if (step.editable && isCurrentStep) {
                return STEP_STATE.EDIT;
            }
            else {
                return state;
            }
        };
        CdkStepper.prototype._isCurrentStep = function (index) {
            return this._selectedIndex === index;
        };
        /** Returns the index of the currently-focused step header. */
        CdkStepper.prototype._getFocusIndex = function () {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
        };
        CdkStepper.prototype._updateSelectedItemIndex = function (newIndex) {
            var stepsArray = this.steps.toArray();
            this.selectionChange.emit({
                selectedIndex: newIndex,
                previouslySelectedIndex: this._selectedIndex,
                selectedStep: stepsArray[newIndex],
                previouslySelectedStep: stepsArray[this._selectedIndex],
            });
            // If focus is inside the stepper, move it to the next header, otherwise it may become
            // lost when the active step content is hidden. We can't be more granular with the check
            // (e.g. checking whether focus is inside the active step), because we don't have a
            // reference to the elements that are rendering out the content.
            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
                this._keyManager.updateActiveItem(newIndex);
            this._selectedIndex = newIndex;
            this._stateChanged();
        };
        CdkStepper.prototype._onKeydown = function (event) {
            var hasModifier = keycodes.hasModifierKey(event);
            var keyCode = event.keyCode;
            var manager = this._keyManager;
            if (manager.activeItemIndex != null && !hasModifier &&
                (keyCode === keycodes.SPACE || keyCode === keycodes.ENTER)) {
                this.selectedIndex = manager.activeItemIndex;
                event.preventDefault();
            }
            else if (keyCode === keycodes.HOME) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
            else if (keyCode === keycodes.END) {
                manager.setLastItemActive();
                event.preventDefault();
            }
            else {
                manager.onKeydown(event);
            }
        };
        CdkStepper.prototype._anyControlsInvalidOrPending = function (index) {
            var steps = this.steps.toArray();
            steps[this._selectedIndex].interacted = true;
            if (this._linear && index >= 0) {
                return steps.slice(0, index).some(function (step) {
                    var control = step.stepControl;
                    var isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                    return isIncomplete && !step.optional && !step._completedOverride;
                });
            }
            return false;
        };
        CdkStepper.prototype._layoutDirection = function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        /** Checks whether the stepper contains the focused element. */
        CdkStepper.prototype._containsFocus = function () {
            if (!this._document || !this._elementRef) {
                return false;
            }
            var stepperElement = this._elementRef.nativeElement;
            var focusedElement = this._document.activeElement;
            return stepperElement === focusedElement || stepperElement.contains(focusedElement);
        };
        /** @nocollapse */
        CdkStepper.ctorParameters = function () { return [
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        CdkStepper.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [CdkStep, { descendants: true },] }],
            _stepHeader: [{ type: core.ContentChildren, args: [CdkStepHeader, { descendants: true },] }],
            linear: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }]
        };
CdkStepper.ɵfac = function CdkStepper_Factory(t) { return new (t || CdkStepper)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT)); };
CdkStepper.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepper, selectors: [["", "cdkStepper", ""]], contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkStep, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkStepHeader, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._steps = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
    } }, inputs: { linear: "linear", selectedIndex: "selectedIndex", selected: "selected" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["cdkStepper"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepper, [{
        type: core.Directive,
        args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper'
            }]
    }], function () { return [{ type: ɵngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }]; }, { selectionChange: [{
            type: core.Output
        }], linear: [{
            type: core.Input
        }], selectedIndex: [{
            type: core.Input
        }], selected: [{
            type: core.Input
        }], _steps: [{
            type: core.ContentChildren,
            args: [CdkStep, { descendants: true }]
        }], _stepHeader: [{
            type: core.ContentChildren,
            args: [CdkStepHeader, { descendants: true }]
        }] }); })();
        return CdkStepper;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Button that moves to the next step in a stepper workflow. */
    var CdkStepperNext = /** @class */ (function () {
        function CdkStepperNext(_stepper) {
            this._stepper = _stepper;
            /** Type of the next button. Defaults to "submit" if not specified. */
            this.type = 'submit';
        }
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete
        CdkStepperNext.prototype._handleClick = function () {
            this._stepper.next();
        };
        /** @nocollapse */
        CdkStepperNext.ctorParameters = function () { return [
            { type: CdkStepper }
        ]; };
        CdkStepperNext.propDecorators = {
            type: [{ type: core.Input }],
            _handleClick: [{ type: core.HostListener, args: ['click',] }]
        };
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperNext.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperNext, [{
        type: core.Directive,
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: core.Input
        }], _handleClick: [{
            type: core.HostListener,
            args: ['click']
        }] }); })();
        return CdkStepperNext;
    }());
    /** Button that moves to the previous step in a stepper workflow. */
    var CdkStepperPrevious = /** @class */ (function () {
        function CdkStepperPrevious(_stepper) {
            this._stepper = _stepper;
            /** Type of the previous button. Defaults to "button" if not specified. */
            this.type = 'button';
        }
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete
        CdkStepperPrevious.prototype._handleClick = function () {
            this._stepper.previous();
        };
        /** @nocollapse */
        CdkStepperPrevious.ctorParameters = function () { return [
            { type: CdkStepper }
        ]; };
        CdkStepperPrevious.propDecorators = {
            type: [{ type: core.Input }],
            _handleClick: [{ type: core.HostListener, args: ['click',] }]
        };
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperPrevious.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperPrevious, [{
        type: core.Directive,
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: core.Input
        }], _handleClick: [{
            type: core.HostListener,
            args: ['click']
        }] }); })();
        return CdkStepperPrevious;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CdkStepperModule = /** @class */ (function () {
        function CdkStepperModule() {
        }
CdkStepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CdkStepperModule });
CdkStepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); }, imports: [[bidi.BidiModule, common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CdkStepperModule, { declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious], imports: [ɵngcc1.BidiModule, ɵngcc2.CommonModule], exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperModule, [{
        type: core.NgModule,
        args: [{
                imports: [bidi.BidiModule, common.CommonModule],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], function () { return []; }, null); })();
        return CdkStepperModule;
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

    exports.CdkStep = CdkStep;
    exports.CdkStepHeader = CdkStepHeader;
    exports.CdkStepLabel = CdkStepLabel;
    exports.CdkStepper = CdkStepper;
    exports.CdkStepperModule = CdkStepperModule;
    exports.CdkStepperNext = CdkStepperNext;
    exports.CdkStepperPrevious = CdkStepperPrevious;
    exports.MAT_STEPPER_GLOBAL_OPTIONS = MAT_STEPPER_GLOBAL_OPTIONS;
    exports.STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
    exports.STEP_STATE = STEP_STATE;
    exports.StepperSelectionEvent = StepperSelectionEvent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cdk-stepper.umd.js.map