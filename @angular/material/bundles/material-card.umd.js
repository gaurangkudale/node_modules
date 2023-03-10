(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/material/core'),exports, require('@angular/core'), require('@angular/platform-browser/animations'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/material/card', ['@angular/core','@angular/material/core','exports', '@angular/core', '@angular/platform-browser/animations', '@angular/material/core'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.material.core,(global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.card = {}), global.ng.core, global.ng.platformBrowser.animations, global.ng.material.core));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, animations, core$1) { 
var _c0 = ["*", [["mat-card-footer"]]];
var _c1 = ["*", "mat-card-footer"];
var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Content of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var MatCardContent = /** @class */ (function () {
        function MatCardContent() {
        }
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardContent, [{
        type: core.Directive,
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], function () { return []; }, null); })();
        return MatCardContent;
    }());
    /**
     * Title of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var MatCardTitle = /** @class */ (function () {
        function MatCardTitle() {
        }
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) { return new (t || MatCardTitle)(); };
MatCardTitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardTitle, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-card-title"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardTitle, [{
        type: core.Directive,
        args: [{
                selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], function () { return []; }, null); })();
        return MatCardTitle;
    }());
    /**
     * Sub-title of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var MatCardSubtitle = /** @class */ (function () {
        function MatCardSubtitle() {
        }
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) { return new (t || MatCardSubtitle)(); };
MatCardSubtitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardSubtitle, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-card-subtitle"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardSubtitle, [{
        type: core.Directive,
        args: [{
                selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], function () { return []; }, null); })();
        return MatCardSubtitle;
    }());
    /**
     * Action section of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var MatCardActions = /** @class */ (function () {
        function MatCardActions() {
            /** Position of the actions inside the card. */
            this.align = 'start';
        }
        MatCardActions.propDecorators = {
            align: [{ type: core.Input }]
        };
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardActions, [{
        type: core.Directive,
        args: [{
                selector: 'mat-card-actions',
                exportAs: 'matCardActions',
                host: {
                    'class': 'mat-card-actions',
                    '[class.mat-card-actions-align-end]': 'align === "end"'
                }
            }]
    }], function () { return []; }, { align: [{
            type: core.Input
        }] }); })();
        return MatCardActions;
    }());
    /**
     * Footer of a card, needed as it's used as a selector in the API.
     * @docs-private
     */
    var MatCardFooter = /** @class */ (function () {
        function MatCardFooter() {
        }
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) { return new (t || MatCardFooter)(); };
MatCardFooter.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardFooter, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-card-footer"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardFooter, [{
        type: core.Directive,
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], function () { return []; }, null); })();
        return MatCardFooter;
    }());
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardImage = /** @class */ (function () {
        function MatCardImage() {
        }
MatCardImage.ɵfac = function MatCardImage_Factory(t) { return new (t || MatCardImage)(); };
MatCardImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardImage, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-card-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardImage, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], function () { return []; }, null); })();
        return MatCardImage;
    }());
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardSmImage = /** @class */ (function () {
        function MatCardSmImage() {
        }
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) { return new (t || MatCardSmImage)(); };
MatCardSmImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardSmImage, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-card-sm-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardSmImage, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], function () { return []; }, null); })();
        return MatCardSmImage;
    }());
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardMdImage = /** @class */ (function () {
        function MatCardMdImage() {
        }
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) { return new (t || MatCardMdImage)(); };
MatCardMdImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardMdImage, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-card-md-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardMdImage, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], function () { return []; }, null); })();
        return MatCardMdImage;
    }());
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardLgImage = /** @class */ (function () {
        function MatCardLgImage() {
        }
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) { return new (t || MatCardLgImage)(); };
MatCardLgImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardLgImage, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-card-lg-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardLgImage, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], function () { return []; }, null); })();
        return MatCardLgImage;
    }());
    /**
     * Large image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardXlImage = /** @class */ (function () {
        function MatCardXlImage() {
        }
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) { return new (t || MatCardXlImage)(); };
MatCardXlImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardXlImage, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-card-xl-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardXlImage, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], function () { return []; }, null); })();
        return MatCardXlImage;
    }());
    /**
     * Avatar image used in a card, needed to add the mat- CSS styling.
     * @docs-private
     */
    var MatCardAvatar = /** @class */ (function () {
        function MatCardAvatar() {
        }
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) { return new (t || MatCardAvatar)(); };
MatCardAvatar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardAvatar, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-card-avatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardAvatar, [{
        type: core.Directive,
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], function () { return []; }, null); })();
        return MatCardAvatar;
    }());
    /**
     * A basic content container component that adds the styles of a Material design card.
     *
     * While this component can be used alone, it also provides a number
     * of preset styles for common card sections, including:
     * - mat-card-title
     * - mat-card-subtitle
     * - mat-card-content
     * - mat-card-actions
     * - mat-card-footer
     */
    var MatCard = /** @class */ (function () {
        // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        function MatCard(_animationMode) {
            this._animationMode = _animationMode;
        }
        /** @nocollapse */
        MatCard.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(ɵngcc0.ɵɵdirectiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
MatCard.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵprojection(1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCard, [{
        type: core.Component,
        args: [{
                selector: 'mat-card',
                exportAs: 'matCard',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-card',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations.ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
        return MatCard;
    }());
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a
     * preset header section (i.e. a title, subtitle, and avatar layout).
     * @docs-private
     */
    var MatCardHeader = /** @class */ (function () {
        function MatCardHeader() {
        }
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) { return new (t || MatCardHeader)(); };
MatCardHeader.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCardHeader, selectors: [["mat-card-header"]], hostAttrs: [1, "mat-card-header"], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [[1, "mat-card-header-text"]], template: function MatCardHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardHeader, [{
        type: core.Component,
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], function () { return []; }, null); })();
        return MatCardHeader;
    }());
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
     * layout that groups an image with a title section.
     * @docs-private
     */
    var MatCardTitleGroup = /** @class */ (function () {
        function MatCardTitleGroup() {
        }
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) { return new (t || MatCardTitleGroup)(); };
MatCardTitleGroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCardTitleGroup, selectors: [["mat-card-title-group"]], hostAttrs: [1, "mat-card-title-group"], ngContentSelectors: _c5, decls: 4, vars: 0, template: function MatCardTitleGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c4);
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵprojection(3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardTitleGroup, [{
        type: core.Component,
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], function () { return []; }, null); })();
        return MatCardTitleGroup;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatCardModule = /** @class */ (function () {
        function MatCardModule() {
        }
MatCardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MatCardModule });
MatCardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MatCardModule_Factory(t) { return new (t || MatCardModule)(); }, imports: [[core$1.MatCommonModule], ɵngcc1.MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatCardModule, { declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar], imports: [ɵngcc1.MatCommonModule], exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, ɵngcc1.MatCommonModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardModule, [{
        type: core.NgModule,
        args: [{
                imports: [core$1.MatCommonModule],
                exports: [
                    MatCard,
                    MatCardHeader,
                    MatCardTitleGroup,
                    MatCardContent,
                    MatCardTitle,
                    MatCardSubtitle,
                    MatCardActions,
                    MatCardFooter,
                    MatCardSmImage,
                    MatCardMdImage,
                    MatCardLgImage,
                    MatCardImage,
                    MatCardXlImage,
                    MatCardAvatar,
                    core$1.MatCommonModule,
                ],
                declarations: [
                    MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                    MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                    MatCardXlImage, MatCardAvatar,
                ]
            }]
    }], function () { return []; }, null); })();
        return MatCardModule;
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

    exports.MatCard = MatCard;
    exports.MatCardActions = MatCardActions;
    exports.MatCardAvatar = MatCardAvatar;
    exports.MatCardContent = MatCardContent;
    exports.MatCardFooter = MatCardFooter;
    exports.MatCardHeader = MatCardHeader;
    exports.MatCardImage = MatCardImage;
    exports.MatCardLgImage = MatCardLgImage;
    exports.MatCardMdImage = MatCardMdImage;
    exports.MatCardModule = MatCardModule;
    exports.MatCardSmImage = MatCardSmImage;
    exports.MatCardSubtitle = MatCardSubtitle;
    exports.MatCardTitle = MatCardTitle;
    exports.MatCardTitleGroup = MatCardTitleGroup;
    exports.MatCardXlImage = MatCardXlImage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=material-card.umd.js.map