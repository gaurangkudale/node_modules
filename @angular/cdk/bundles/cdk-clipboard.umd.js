(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk/clipboard', ['@angular/core','@angular/common','exports', '@angular/common', '@angular/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,(global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.clipboard = {}), global.ng.common, global.ng.core));
}(this, (function (ɵngcc0,ɵngcc1,exports, i1, i0) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A pending copy-to-clipboard operation.
     *
     * The implementation of copying text to the clipboard modifies the DOM and
     * forces a relayout. This relayout can take too long if the string is large,
     * causing the execCommand('copy') to happen too long after the user clicked.
     * This results in the browser refusing to copy. This object lets the
     * relayout happen in a separate tick from copying by providing a copy function
     * that can be called later.
     *
     * Destroy must be called when no longer in use, regardless of whether `copy` is
     * called.
     */
    var PendingCopy = /** @class */ (function () {
        function PendingCopy(text, _document) {
            this._document = _document;
            var textarea = this._textarea = this._document.createElement('textarea');
            var styles = textarea.style;
            // Hide the element for display and accessibility. Set an
            // absolute position so the page layout isn't affected.
            styles.opacity = '0';
            styles.position = 'absolute';
            styles.left = styles.top = '-999em';
            textarea.setAttribute('aria-hidden', 'true');
            textarea.value = text;
            this._document.body.appendChild(textarea);
        }
        /** Finishes copying the text. */
        PendingCopy.prototype.copy = function () {
            var textarea = this._textarea;
            var successful = false;
            try { // Older browsers could throw if copy is not supported.
                if (textarea) {
                    var currentFocus = this._document.activeElement;
                    textarea.select();
                    textarea.setSelectionRange(0, textarea.value.length);
                    successful = this._document.execCommand('copy');
                    if (currentFocus && currentFocus instanceof HTMLElement) {
                        currentFocus.focus();
                    }
                }
            }
            catch (_a) {
                // Discard error.
                // Initial setting of {@code successful} will represent failure here.
            }
            return successful;
        };
        /** Cleans up DOM changes used to perform the copy operation. */
        PendingCopy.prototype.destroy = function () {
            var textarea = this._textarea;
            if (textarea) {
                if (textarea.parentNode) {
                    textarea.parentNode.removeChild(textarea);
                }
                this._textarea = undefined;
            }
        };
        return PendingCopy;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A service for copying text to the clipboard.
     */
    var Clipboard = /** @class */ (function () {
        function Clipboard(document) {
            this._document = document;
        }
        /**
         * Copies the provided text into the user's clipboard.
         *
         * @param text The string to copy.
         * @returns Whether the operation was successful.
         */
        Clipboard.prototype.copy = function (text) {
            var pendingCopy = this.beginCopy(text);
            var successful = pendingCopy.copy();
            pendingCopy.destroy();
            return successful;
        };
        /**
         * Prepares a string to be copied later. This is useful for large strings
         * which take too long to successfully render and be copied in the same tick.
         *
         * The caller must call `destroy` on the returned `PendingCopy`.
         *
         * @param text The string to copy.
         * @returns the pending copy operation.
         */
        Clipboard.prototype.beginCopy = function (text) {
            return new PendingCopy(text, this._document);
        };
        /** @nocollapse */
        Clipboard.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
        ]; };
        Clipboard.ɵprov = i0.ɵɵdefineInjectable({ factory: function Clipboard_Factory() { return new Clipboard(i0.ɵɵinject(i1.DOCUMENT)); }, token: Clipboard, providedIn: "root" });
Clipboard.ɵfac = function Clipboard_Factory(t) { return new (t || Clipboard)(ɵngcc0.ɵɵinject(i1.DOCUMENT)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Clipboard, [{
        type: i0.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: i0.Inject,
                args: [i1.DOCUMENT]
            }] }]; }, null); })();
        return Clipboard;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
    var CKD_COPY_TO_CLIPBOARD_CONFIG = new i0.InjectionToken('CKD_COPY_TO_CLIPBOARD_CONFIG');
    /**
     * Provides behavior for a button that when clicked copies content into user's
     * clipboard.
     */
    var CdkCopyToClipboard = /** @class */ (function () {
        function CdkCopyToClipboard(_clipboard, 
        /**
         * @deprecated _ngZone parameter to become required.
         * @breaking-change 10.0.0
         */
        _ngZone, config) {
            this._clipboard = _clipboard;
            this._ngZone = _ngZone;
            /** Content to be copied. */
            this.text = '';
            /**
             * How many times to attempt to copy the text. This may be necessary for longer text, because
             * the browser needs time to fill an intermediate textarea element and copy the content.
             */
            this.attempts = 1;
            /**
             * Emits when some text is copied to the clipboard. The
             * emitted value indicates whether copying was successful.
             */
            this.copied = new i0.EventEmitter();
            /**
             * Emits when some text is copied to the clipboard. The
             * emitted value indicates whether copying was successful.
             * @deprecated Use `cdkCopyToClipboardCopied` instead.
             * @breaking-change 10.0.0
             */
            this._deprecatedCopied = this.copied;
            if (config && config.attempts != null) {
                this.attempts = config.attempts;
            }
        }
        /** Copies the current text to the clipboard. */
        CdkCopyToClipboard.prototype.copy = function (attempts) {
            var _this = this;
            if (attempts === void 0) { attempts = this.attempts; }
            if (attempts > 1) {
                var remainingAttempts_1 = attempts;
                var pending_1 = this._clipboard.beginCopy(this.text);
                var attempt_1 = function () {
                    var successful = pending_1.copy();
                    if (!successful && --remainingAttempts_1) {
                        // @breaking-change 10.0.0 Remove null check for `_ngZone`.
                        if (_this._ngZone) {
                            _this._ngZone.runOutsideAngular(function () { return setTimeout(attempt_1); });
                        }
                        else {
                            setTimeout(attempt_1);
                        }
                    }
                    else {
                        pending_1.destroy();
                        _this.copied.emit(successful);
                    }
                };
                attempt_1();
            }
            else {
                this.copied.emit(this._clipboard.copy(this.text));
            }
        };
        /** @nocollapse */
        CdkCopyToClipboard.ctorParameters = function () { return [
            { type: Clipboard },
            { type: i0.NgZone },
            { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [CKD_COPY_TO_CLIPBOARD_CONFIG,] }] }
        ]; };
        CdkCopyToClipboard.propDecorators = {
            text: [{ type: i0.Input, args: ['cdkCopyToClipboard',] }],
            attempts: [{ type: i0.Input, args: ['cdkCopyToClipboardAttempts',] }],
            copied: [{ type: i0.Output, args: ['cdkCopyToClipboardCopied',] }],
            _deprecatedCopied: [{ type: i0.Output, args: ['copied',] }]
        };
CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) { return new (t || CdkCopyToClipboard)(ɵngcc0.ɵɵdirectiveInject(Clipboard), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(CKD_COPY_TO_CLIPBOARD_CONFIG, 8)); };
CdkCopyToClipboard.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCopyToClipboard, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() { return ctx.copy(); });
    } }, inputs: { text: ["cdkCopyToClipboard", "text"], attempts: ["cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied", _deprecatedCopied: "copied" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCopyToClipboard, [{
        type: i0.Directive,
        args: [{
                selector: '[cdkCopyToClipboard]',
                host: {
                    '(click)': 'copy()'
                }
            }]
    }], function () { return [{ type: Clipboard }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: i0.Optional
            }, {
                type: i0.Inject,
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }] }]; }, { text: [{
            type: i0.Input,
            args: ['cdkCopyToClipboard']
        }], attempts: [{
            type: i0.Input,
            args: ['cdkCopyToClipboardAttempts']
        }], copied: [{
            type: i0.Output,
            args: ['cdkCopyToClipboardCopied']
        }], _deprecatedCopied: [{
            type: i0.Output,
            args: ['copied']
        }] }); })();
        return CdkCopyToClipboard;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ClipboardModule = /** @class */ (function () {
        function ClipboardModule() {
        }
ClipboardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ClipboardModule });
ClipboardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[i1.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ClipboardModule, { declarations: [CdkCopyToClipboard], imports: [ɵngcc1.CommonModule], exports: [CdkCopyToClipboard] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClipboardModule, [{
        type: i0.NgModule,
        args: [{
                declarations: [CdkCopyToClipboard],
                imports: [i1.CommonModule],
                exports: [CdkCopyToClipboard]
            }]
    }], function () { return []; }, null); })();
        return ClipboardModule;
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

    exports.CKD_COPY_TO_CLIPBOARD_CONFIG = CKD_COPY_TO_CLIPBOARD_CONFIG;
    exports.CdkCopyToClipboard = CdkCopyToClipboard;
    exports.Clipboard = Clipboard;
    exports.ClipboardModule = ClipboardModule;
    exports.PendingCopy = PendingCopy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cdk-clipboard.umd.js.map