/**
 * @fileoverview added by tsickle
 * Generated from: src/material/card/card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive, Input, Optional, Inject, } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
/**
 * Content of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
export class MatCardContent {
}
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardContent, [{
        type: Directive,
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], null, null); })();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
export class MatCardTitle {
}
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) { return new (t || MatCardTitle)(); };
MatCardTitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardTitle, selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]], hostAttrs: [1, "mat-card-title"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardTitle, [{
        type: Directive,
        args: [{
                selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], null, null); })();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
export class MatCardSubtitle {
}
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) { return new (t || MatCardSubtitle)(); };
MatCardSubtitle.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardSubtitle, selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]], hostAttrs: [1, "mat-card-subtitle"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardSubtitle, [{
        type: Directive,
        args: [{
                selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], null, null); })();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
export class MatCardActions {
    constructor() {
        /**
         * Position of the actions inside the card.
         */
        this.align = 'start';
    }
}
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
MatCardActions.propDecorators = {
    align: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardActions, [{
        type: Directive,
        args: [{
                selector: 'mat-card-actions',
                exportAs: 'matCardActions',
                host: {
                    'class': 'mat-card-actions',
                    '[class.mat-card-actions-align-end]': 'align === "end"'
                }
            }]
    }], function () { return []; }, { align: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Position of the actions inside the card.
     * @type {?}
     */
    MatCardActions.prototype.align;
}
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
export class MatCardFooter {
}
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) { return new (t || MatCardFooter)(); };
MatCardFooter.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardFooter, selectors: [["mat-card-footer"]], hostAttrs: [1, "mat-card-footer"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardFooter, [{
        type: Directive,
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardImage {
}
MatCardImage.ɵfac = function MatCardImage_Factory(t) { return new (t || MatCardImage)(); };
MatCardImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardImage, selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]], hostAttrs: [1, "mat-card-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardImage, [{
        type: Directive,
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardSmImage {
}
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) { return new (t || MatCardSmImage)(); };
MatCardSmImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardSmImage, selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]], hostAttrs: [1, "mat-card-sm-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardSmImage, [{
        type: Directive,
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardMdImage {
}
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) { return new (t || MatCardMdImage)(); };
MatCardMdImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardMdImage, selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]], hostAttrs: [1, "mat-card-md-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardMdImage, [{
        type: Directive,
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], null, null); })();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardLgImage {
}
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) { return new (t || MatCardLgImage)(); };
MatCardLgImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardLgImage, selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]], hostAttrs: [1, "mat-card-lg-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardLgImage, [{
        type: Directive,
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], null, null); })();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardXlImage {
}
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) { return new (t || MatCardXlImage)(); };
MatCardXlImage.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardXlImage, selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], hostAttrs: [1, "mat-card-xl-image"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardXlImage, [{
        type: Directive,
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], null, null); })();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
export class MatCardAvatar {
}
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) { return new (t || MatCardAvatar)(); };
MatCardAvatar.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardAvatar, selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], hostAttrs: [1, "mat-card-avatar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardAvatar, [{
        type: Directive,
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], null, null); })();
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
export class MatCard {
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    /**
     * @param {?=} _animationMode
     */
    constructor(_animationMode) {
        this._animationMode = _animationMode;
    }
}
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatCard.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵprojection(1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatCard.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCard, [{
        type: Component,
        args: [{
                selector: 'mat-card',
                exportAs: 'matCard',
                template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'mat-card',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    MatCard.prototype._animationMode;
}
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * \@docs-private
 */
export class MatCardHeader {
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
        type: Component,
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], null, null); })();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * \@docs-private
 */
export class MatCardTitleGroup {
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
        type: Component,
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFO0FBRUU7QUFDZ0U7QUFDbEQ7Ozs7Ozs7OztBQU1oQixNQUFNLE9BQU8sY0FBYztBQUFHOzBDQUo3QixTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFOzhDQUF3RCxrQkFDbEUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFDLGNBQ3BDOzs7Ozs7OzBCQUNJO0FBQUM7QUFBSTtBQUc4QjtBQUFrQjtBQVMxRCxNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQU4zQixTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFOzRDQUFrRCxrQkFDNUQsSUFBSSxFQUFFLHNCQUNKLE9BQU8sRUFBRSxnQkFBZ0Isa0JBQzFCLGNBQ0Y7Ozs7Ozs7OzswQkFDSTtBQUFDO0FBQUk7QUFHb0M7QUFBa0I7QUFTaEUsTUFBTSxPQUFPLGVBQWU7QUFBRzsyQ0FOOUIsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTsrQ0FBMkQsa0JBQ3JFLElBQUksRUFBRSxzQkFDSixPQUFPLEVBQUUsbUJBQW1CLGtCQUM3QixjQUNGOzs7Ozs7Ozs7MEJBQ0k7QUFBQztBQUFJO0FBR3NDO0FBQWtCO0FBV2xFLE1BQU0sT0FBTyxjQUFjO0FBQzNCLElBVEE7QUFDRztBQUFZO0FBRVY7QUFDRSxRQU1JLFVBQUssR0FBb0IsT0FBTyxDQUFDO0FBQzVDLElBQUEsQ0FBQztBQUNEOzBDQVpDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUU7UUFBa0Is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U1osTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FQNUIsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtTQUFpQixrQkFDM0I7OzZCQUErQjtlQUMvQixhQUFhLEVBQUU7R0FBaUIsQ0FBQyxJQUFJLGtCQUNyQztNQUFlLEVBQUU7QUFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxJQUFJLEVBQUUsRUFBQztLQUFPLEVBQUUsaUJBQWlCLEVBQUMsY0FDbkM7Ozs7Ozs7Ozs7MEJBQ0c7QUFBQztBQUFJO0FBSTREO0FBQzNDO0FBQWtCO0FBVTVDLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FQaEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtNQUFzQixrQkFDaEM7a0JBQW9DLGtCQUNwQztZQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQyxlQUFlLEVBQUU7cUJBQXVCLENBQUMsTUFBTTtlQUMvQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUU7bUJBQXNCLEVBQUM7QUFDeEM7Ozs7Ozs7Ozs7MEJBQ0c7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FOSU1BVElPTl9NT0RVTEVfVFlQRX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuXG4vKipcbiAqIENvbnRlbnQgb2YgYSBjYXJkLCBuZWVkZWQgYXMgaXQncyB1c2VkIGFzIGEgc2VsZWN0b3IgaW4gdGhlIEFQSS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcmQtY29udGVudCwgW21hdC1jYXJkLWNvbnRlbnRdLCBbbWF0Q2FyZENvbnRlbnRdJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1jb250ZW50J31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZENvbnRlbnQge31cblxuLyoqXG4gKiBUaXRsZSBvZiBhIGNhcmQsIG5lZWRlZCBhcyBpdCdzIHVzZWQgYXMgYSBzZWxlY3RvciBpbiB0aGUgQVBJLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBtYXQtY2FyZC10aXRsZSwgW21hdC1jYXJkLXRpdGxlXSwgW21hdENhcmRUaXRsZV1gLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1jYXJkLXRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRUaXRsZSB7fVxuXG4vKipcbiAqIFN1Yi10aXRsZSBvZiBhIGNhcmQsIG5lZWRlZCBhcyBpdCdzIHVzZWQgYXMgYSBzZWxlY3RvciBpbiB0aGUgQVBJLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBtYXQtY2FyZC1zdWJ0aXRsZSwgW21hdC1jYXJkLXN1YnRpdGxlXSwgW21hdENhcmRTdWJ0aXRsZV1gLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1jYXJkLXN1YnRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRTdWJ0aXRsZSB7fVxuXG4vKipcbiAqIEFjdGlvbiBzZWN0aW9uIG9mIGEgY2FyZCwgbmVlZGVkIGFzIGl0J3MgdXNlZCBhcyBhIHNlbGVjdG9yIGluIHRoZSBBUEkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1jYXJkLWFjdGlvbnMnLFxuICBleHBvcnRBczogJ21hdENhcmRBY3Rpb25zJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtY2FyZC1hY3Rpb25zJyxcbiAgICAnW2NsYXNzLm1hdC1jYXJkLWFjdGlvbnMtYWxpZ24tZW5kXSc6ICdhbGlnbiA9PT0gXCJlbmRcIicsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZEFjdGlvbnMge1xuICAvKiogUG9zaXRpb24gb2YgdGhlIGFjdGlvbnMgaW5zaWRlIHRoZSBjYXJkLiAqL1xuICBASW5wdXQoKSBhbGlnbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0Jztcbn1cblxuLyoqXG4gKiBGb290ZXIgb2YgYSBjYXJkLCBuZWVkZWQgYXMgaXQncyB1c2VkIGFzIGEgc2VsZWN0b3IgaW4gdGhlIEFQSS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcmQtZm9vdGVyJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1mb290ZXInfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkRm9vdGVyIHt9XG5cbi8qKlxuICogSW1hZ2UgdXNlZCBpbiBhIGNhcmQsIG5lZWRlZCB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtY2FyZC1pbWFnZV0sIFttYXRDYXJkSW1hZ2VdJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1pbWFnZSd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRJbWFnZSB7fVxuXG4vKipcbiAqIEltYWdlIHVzZWQgaW4gYSBjYXJkLCBuZWVkZWQgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0LWNhcmQtc20taW1hZ2VdLCBbbWF0Q2FyZEltYWdlU21hbGxdJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1zbS1pbWFnZSd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRTbUltYWdlIHt9XG5cbi8qKlxuICogSW1hZ2UgdXNlZCBpbiBhIGNhcmQsIG5lZWRlZCB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtY2FyZC1tZC1pbWFnZV0sIFttYXRDYXJkSW1hZ2VNZWRpdW1dJyxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1tZC1pbWFnZSd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRNZEltYWdlIHt9XG5cbi8qKlxuICogSW1hZ2UgdXNlZCBpbiBhIGNhcmQsIG5lZWRlZCB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtY2FyZC1sZy1pbWFnZV0sIFttYXRDYXJkSW1hZ2VMYXJnZV0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWxnLWltYWdlJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZExnSW1hZ2Uge31cblxuLyoqXG4gKiBMYXJnZSBpbWFnZSB1c2VkIGluIGEgY2FyZCwgbmVlZGVkIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYXJkLXhsLWltYWdlXSwgW21hdENhcmRJbWFnZVhMYXJnZV0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLXhsLWltYWdlJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZFhsSW1hZ2Uge31cblxuLyoqXG4gKiBBdmF0YXIgaW1hZ2UgdXNlZCBpbiBhIGNhcmQsIG5lZWRlZCB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtY2FyZC1hdmF0YXJdLCBbbWF0Q2FyZEF2YXRhcl0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWF2YXRhcid9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRBdmF0YXIge31cblxuXG4vKipcbiAqIEEgYmFzaWMgY29udGVudCBjb250YWluZXIgY29tcG9uZW50IHRoYXQgYWRkcyB0aGUgc3R5bGVzIG9mIGEgTWF0ZXJpYWwgZGVzaWduIGNhcmQuXG4gKlxuICogV2hpbGUgdGhpcyBjb21wb25lbnQgY2FuIGJlIHVzZWQgYWxvbmUsIGl0IGFsc28gcHJvdmlkZXMgYSBudW1iZXJcbiAqIG9mIHByZXNldCBzdHlsZXMgZm9yIGNvbW1vbiBjYXJkIHNlY3Rpb25zLCBpbmNsdWRpbmc6XG4gKiAtIG1hdC1jYXJkLXRpdGxlXG4gKiAtIG1hdC1jYXJkLXN1YnRpdGxlXG4gKiAtIG1hdC1jYXJkLWNvbnRlbnRcbiAqIC0gbWF0LWNhcmQtYWN0aW9uc1xuICogLSBtYXQtY2FyZC1mb290ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcmQnLFxuICBleHBvcnRBczogJ21hdENhcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtY2FyZCcsXG4gICAgJ1tjbGFzcy5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZV0nOiAnX2FuaW1hdGlvbk1vZGUgPT09IFwiTm9vcEFuaW1hdGlvbnNcIicsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZCB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgOS4wLjAgYF9hbmltYXRpb25Nb2RlYCBwYXJhbWV0ZXIgdG8gYmUgbWFkZSByZXF1aXJlZC5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHB1YmxpYyBfYW5pbWF0aW9uTW9kZT86IHN0cmluZykge31cbn1cblxuXG4vKipcbiAqIENvbXBvbmVudCBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGhpbiB0aGUgYDxtYXQtY2FyZD5gIGNvbXBvbmVudC4gSXQgYWRkcyBzdHlsZXMgZm9yIGFcbiAqIHByZXNldCBoZWFkZXIgc2VjdGlvbiAoaS5lLiBhIHRpdGxlLCBzdWJ0aXRsZSwgYW5kIGF2YXRhciBsYXlvdXQpLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2FyZC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtaGVhZGVyLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC1oZWFkZXInfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkSGVhZGVyIHt9XG5cblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gdGhlIGA8bWF0LWNhcmQ+YCBjb21wb25lbnQuIEl0IGFkZHMgc3R5bGVzIGZvciBhIHByZXNldFxuICogbGF5b3V0IHRoYXQgZ3JvdXBzIGFuIGltYWdlIHdpdGggYSB0aXRsZSBzZWN0aW9uLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2FyZC10aXRsZS1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC10aXRsZS1ncm91cC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWNhcmQtdGl0bGUtZ3JvdXAnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkVGl0bGVHcm91cCB7fVxuIl19