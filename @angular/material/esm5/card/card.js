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
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*", [["mat-card-footer"]]];
var _c1 = ["*", "mat-card-footer"];
var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
var MatCardContent = /** @class */ (function () {
    function MatCardContent() {
    }
MatCardContent.ɵfac = function MatCardContent_Factory(t) { return new (t || MatCardContent)(); };
MatCardContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardContent, selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]], hostAttrs: [1, "mat-card-content"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatCardContent, [{
        type: Directive,
        args: [{
                selector: 'mat-card-content, [mat-card-content], [matCardContent]',
                host: { 'class': 'mat-card-content' }
            }]
    }], function () { return []; }, null); })();
    return MatCardContent;
}());
export { MatCardContent };
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
        type: Directive,
        args: [{
                selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                host: {
                    'class': 'mat-card-title'
                }
            }]
    }], function () { return []; }, null); })();
    return MatCardTitle;
}());
export { MatCardTitle };
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
        type: Directive,
        args: [{
                selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                host: {
                    'class': 'mat-card-subtitle'
                }
            }]
    }], function () { return []; }, null); })();
    return MatCardSubtitle;
}());
export { MatCardSubtitle };
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
        align: [{ type: Input }]
    };
MatCardActions.ɵfac = function MatCardActions_Factory(t) { return new (t || MatCardActions)(); };
MatCardActions.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatCardActions, selectors: [["mat-card-actions"]], hostAttrs: [1, "mat-card-actions"], hostVars: 2, hostBindings: function MatCardActions_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("mat-card-actions-align-end", ctx.align === "end");
    } }, inputs: { align: "align" }, exportAs: ["matCardActions"] });
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
    return MatCardActions;
}());
export { MatCardActions };
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
        type: Directive,
        args: [{
                selector: 'mat-card-footer',
                host: { 'class': 'mat-card-footer' }
            }]
    }], function () { return []; }, null); })();
    return MatCardFooter;
}());
export { MatCardFooter };
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
        type: Directive,
        args: [{
                selector: '[mat-card-image], [matCardImage]',
                host: { 'class': 'mat-card-image' }
            }]
    }], function () { return []; }, null); })();
    return MatCardImage;
}());
export { MatCardImage };
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
        type: Directive,
        args: [{
                selector: '[mat-card-sm-image], [matCardImageSmall]',
                host: { 'class': 'mat-card-sm-image' }
            }]
    }], function () { return []; }, null); })();
    return MatCardSmImage;
}());
export { MatCardSmImage };
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
        type: Directive,
        args: [{
                selector: '[mat-card-md-image], [matCardImageMedium]',
                host: { 'class': 'mat-card-md-image' }
            }]
    }], function () { return []; }, null); })();
    return MatCardMdImage;
}());
export { MatCardMdImage };
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
        type: Directive,
        args: [{
                selector: '[mat-card-lg-image], [matCardImageLarge]',
                host: { 'class': 'mat-card-lg-image' }
            }]
    }], function () { return []; }, null); })();
    return MatCardLgImage;
}());
export { MatCardLgImage };
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
        type: Directive,
        args: [{
                selector: '[mat-card-xl-image], [matCardImageXLarge]',
                host: { 'class': 'mat-card-xl-image' }
            }]
    }], function () { return []; }, null); })();
    return MatCardXlImage;
}());
export { MatCardXlImage };
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
        type: Directive,
        args: [{
                selector: '[mat-card-avatar], [matCardAvatar]',
                host: { 'class': 'mat-card-avatar' }
            }]
    }], function () { return []; }, null); })();
    return MatCardAvatar;
}());
export { MatCardAvatar };
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
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
MatCard.ɵfac = function MatCard_Factory(t) { return new (t || MatCard)(ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
MatCard.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatCard, selectors: [["mat-card"]], hostAttrs: [1, "mat-card"], hostVars: 2, hostBindings: function MatCard_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, exportAs: ["matCard"], ngContentSelectors: _c1, decls: 2, vars: 0, template: function MatCard_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵprojection(1, 1);
    } }, styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"], encapsulation: 2, changeDetection: 0 });
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
    return MatCard;
}());
export { MatCard };
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
        type: Component,
        args: [{
                selector: 'mat-card-header',
                template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-header' }
            }]
    }], function () { return []; }, null); })();
    return MatCardHeader;
}());
export { MatCardHeader };
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
        type: Component,
        args: [{
                selector: 'mat-card-title-group',
                template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'mat-card-title-group' }
            }]
    }], function () { return []; }, null); })();
    return MatCardTitleGroup;
}());
export { MatCardTitleGroup };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7Ozs7QUFDSDtBQUNxQyxJQURyQztBQUNlLElBR2MsQ0FBQztrREFKN0IsU0FBUyxTQUFDLHNCQUNUO0FBQVEsRUFBRSx3REFBd0Qsc0JBQ2xFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxrQkFDcEM7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFtQixxQkFBQztBQUU5QixDQUY4QixBQUo5QixJQUk4QjtBQUM5QixTQURhLGNBQWM7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ21DLElBRG5DO0FBQ2EsSUFLYyxDQUFDO2dEQU4zQixTQUFTLFNBQUMsc0JBQ1Q7SUFBUSxFQUFFLGtEQUFrRCxzQkFDNUQsSUFBSSxFQUFFLDBCQUNKLE9BQU8sRUFBRSxnQkFBZ0Isc0JBQzFCLGtCQUNGOzs7Ozs7Ozs7Z0RBQ1E7QUFBQyxJQUFpQixtQkFBQztBQUU1QixDQUY0QixBQU41QixJQU00QjtBQUM1QixTQURhLFlBQVk7QUFFekI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3NDLElBRHRDO0FBQ2dCLElBS2MsQ0FBQzttREFOOUIsU0FBUyxTQUFDLHNCQUNULFFBQVE7QUFBRSwyREFBMkQsc0JBQ3JFLElBQUksRUFBRSwwQkFDSixPQUFPLEVBQUUsbUJBQW1CLHNCQUM3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Ozs7Ozs7Ozs7Z0RBQ087QUFBQyxJQUFtQixvQkFBQztBQUU3QixDQUY2QixBQVA3QixJQU82QjtBQUM3QixTQURhLGFBQWE7QUFHMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFFSSxJQUZKO0FBQ2tCLElBTWMsQ0FBQztxREFQaEMsU0FBUyxTQUFDLHNCQUNULFFBQVEsRUFBRTtrQkFBc0Isc0JBQ2hDO2tDQUFvQzttQkFDcEMsYUFBYSxFQUFFO1VBQWlCLENBQUMsSUFBSTtLQUNyQyxlQUFlLEVBQUU7Y0FBdUIsQ0FBQyxNQUFNO1FBQy9DLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRTtZQUFzQixFQUFDLGtCQUN4Qzs7Ozs7Ozs7OztnREFDTztBQUFDLElBQXVCLHdCQUFDO0FBQ2hDLENBRGdDLEFBUGpDLElBT2lDO0FBQ2pDLFNBRGEsaUJBQWlCO0FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5cbi8qKlxuICogQ29udGVudCBvZiBhIGNhcmQsIG5lZWRlZCBhcyBpdCdzIHVzZWQgYXMgYSBzZWxlY3RvciBpbiB0aGUgQVBJLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtY2FyZC1jb250ZW50LCBbbWF0LWNhcmQtY29udGVudF0sIFttYXRDYXJkQ29udGVudF0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWNvbnRlbnQnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkQ29udGVudCB7fVxuXG4vKipcbiAqIFRpdGxlIG9mIGEgY2FyZCwgbmVlZGVkIGFzIGl0J3MgdXNlZCBhcyBhIHNlbGVjdG9yIGluIHRoZSBBUEkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG1hdC1jYXJkLXRpdGxlLCBbbWF0LWNhcmQtdGl0bGVdLCBbbWF0Q2FyZFRpdGxlXWAsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNhcmQtdGl0bGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZFRpdGxlIHt9XG5cbi8qKlxuICogU3ViLXRpdGxlIG9mIGEgY2FyZCwgbmVlZGVkIGFzIGl0J3MgdXNlZCBhcyBhIHNlbGVjdG9yIGluIHRoZSBBUEkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG1hdC1jYXJkLXN1YnRpdGxlLCBbbWF0LWNhcmQtc3VidGl0bGVdLCBbbWF0Q2FyZFN1YnRpdGxlXWAsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LWNhcmQtc3VidGl0bGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZFN1YnRpdGxlIHt9XG5cbi8qKlxuICogQWN0aW9uIHNlY3Rpb24gb2YgYSBjYXJkLCBuZWVkZWQgYXMgaXQncyB1c2VkIGFzIGEgc2VsZWN0b3IgaW4gdGhlIEFQSS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcmQtYWN0aW9ucycsXG4gIGV4cG9ydEFzOiAnbWF0Q2FyZEFjdGlvbnMnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1jYXJkLWFjdGlvbnMnLFxuICAgICdbY2xhc3MubWF0LWNhcmQtYWN0aW9ucy1hbGlnbi1lbmRdJzogJ2FsaWduID09PSBcImVuZFwiJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkQWN0aW9ucyB7XG4gIC8qKiBQb3NpdGlvbiBvZiB0aGUgYWN0aW9ucyBpbnNpZGUgdGhlIGNhcmQuICovXG4gIEBJbnB1dCgpIGFsaWduOiAnc3RhcnQnIHwgJ2VuZCcgPSAnc3RhcnQnO1xufVxuXG4vKipcbiAqIEZvb3RlciBvZiBhIGNhcmQsIG5lZWRlZCBhcyBpdCdzIHVzZWQgYXMgYSBzZWxlY3RvciBpbiB0aGUgQVBJLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtYXQtY2FyZC1mb290ZXInLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWZvb3Rlcid9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRGb290ZXIge31cblxuLyoqXG4gKiBJbWFnZSB1c2VkIGluIGEgY2FyZCwgbmVlZGVkIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYXJkLWltYWdlXSwgW21hdENhcmRJbWFnZV0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWltYWdlJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZEltYWdlIHt9XG5cbi8qKlxuICogSW1hZ2UgdXNlZCBpbiBhIGNhcmQsIG5lZWRlZCB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXQtY2FyZC1zbS1pbWFnZV0sIFttYXRDYXJkSW1hZ2VTbWFsbF0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLXNtLWltYWdlJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZFNtSW1hZ2Uge31cblxuLyoqXG4gKiBJbWFnZSB1c2VkIGluIGEgY2FyZCwgbmVlZGVkIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYXJkLW1kLWltYWdlXSwgW21hdENhcmRJbWFnZU1lZGl1bV0nLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLW1kLWltYWdlJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZE1kSW1hZ2Uge31cblxuLyoqXG4gKiBJbWFnZSB1c2VkIGluIGEgY2FyZCwgbmVlZGVkIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYXJkLWxnLWltYWdlXSwgW21hdENhcmRJbWFnZUxhcmdlXScsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWNhcmQtbGctaW1hZ2UnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkTGdJbWFnZSB7fVxuXG4vKipcbiAqIExhcmdlIGltYWdlIHVzZWQgaW4gYSBjYXJkLCBuZWVkZWQgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0LWNhcmQteGwtaW1hZ2VdLCBbbWF0Q2FyZEltYWdlWExhcmdlXScsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWNhcmQteGwtaW1hZ2UnfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkWGxJbWFnZSB7fVxuXG4vKipcbiAqIEF2YXRhciBpbWFnZSB1c2VkIGluIGEgY2FyZCwgbmVlZGVkIHRvIGFkZCB0aGUgbWF0LSBDU1Mgc3R5bGluZy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdC1jYXJkLWF2YXRhcl0sIFttYXRDYXJkQXZhdGFyXScsXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbWF0LWNhcmQtYXZhdGFyJ31cbn0pXG5leHBvcnQgY2xhc3MgTWF0Q2FyZEF2YXRhciB7fVxuXG5cbi8qKlxuICogQSBiYXNpYyBjb250ZW50IGNvbnRhaW5lciBjb21wb25lbnQgdGhhdCBhZGRzIHRoZSBzdHlsZXMgb2YgYSBNYXRlcmlhbCBkZXNpZ24gY2FyZC5cbiAqXG4gKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBhbG9uZSwgaXQgYWxzbyBwcm92aWRlcyBhIG51bWJlclxuICogb2YgcHJlc2V0IHN0eWxlcyBmb3IgY29tbW9uIGNhcmQgc2VjdGlvbnMsIGluY2x1ZGluZzpcbiAqIC0gbWF0LWNhcmQtdGl0bGVcbiAqIC0gbWF0LWNhcmQtc3VidGl0bGVcbiAqIC0gbWF0LWNhcmQtY29udGVudFxuICogLSBtYXQtY2FyZC1hY3Rpb25zXG4gKiAtIG1hdC1jYXJkLWZvb3RlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2FyZCcsXG4gIGV4cG9ydEFzOiAnbWF0Q2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhcmQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1jYXJkJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6ICdfYW5pbWF0aW9uTW9kZSA9PT0gXCJOb29wQW5pbWF0aW9uc1wiJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJkIHtcbiAgLy8gQGJyZWFraW5nLWNoYW5nZSA5LjAuMCBgX2FuaW1hdGlvbk1vZGVgIHBhcmFtZXRlciB0byBiZSBtYWRlIHJlcXVpcmVkLlxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHVibGljIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7fVxufVxuXG5cbi8qKlxuICogQ29tcG9uZW50IGludGVuZGVkIHRvIGJlIHVzZWQgd2l0aGluIHRoZSBgPG1hdC1jYXJkPmAgY29tcG9uZW50LiBJdCBhZGRzIHN0eWxlcyBmb3IgYVxuICogcHJlc2V0IGhlYWRlciBzZWN0aW9uIChpLmUuIGEgdGl0bGUsIHN1YnRpdGxlLCBhbmQgYXZhdGFyIGxheW91dCkuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1jYXJkLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1oZWFkZXIuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7J2NsYXNzJzogJ21hdC1jYXJkLWhlYWRlcid9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRIZWFkZXIge31cblxuXG4vKipcbiAqIENvbXBvbmVudCBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGhpbiB0aGUgYDxtYXQtY2FyZD5gIGNvbXBvbmVudC4gSXQgYWRkcyBzdHlsZXMgZm9yIGEgcHJlc2V0XG4gKiBsYXlvdXQgdGhhdCBncm91cHMgYW4gaW1hZ2Ugd2l0aCBhIHRpdGxlIHNlY3Rpb24uXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1jYXJkLXRpdGxlLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLXRpdGxlLWdyb3VwLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDogeydjbGFzcyc6ICdtYXQtY2FyZC10aXRsZS1ncm91cCd9XG59KVxuZXhwb3J0IGNsYXNzIE1hdENhcmRUaXRsZUdyb3VwIHt9XG4iXX0=