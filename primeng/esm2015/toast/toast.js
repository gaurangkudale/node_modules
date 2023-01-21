import { NgModule, Component, Input, Output, ViewChild, EventEmitter, ContentChildren, ChangeDetectionStrategy, NgZone, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { trigger, state, style, transition, animate, query, animateChild } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/ripple';
import * as ɵngcc3 from 'primeng/api';

const _c0 = ["container"];
const _c1 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-exclamation-triangle": a1, "pi-times-circle": a2, "pi-check": a3 }; };
function ToastItem_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementStart(2, "div", 7);
    ɵngcc0.ɵɵelementStart(3, "div", 8);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div", 9);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(3, _c1, ctx_r1.message.severity == "info", ctx_r1.message.severity == "warn", ctx_r1.message.severity == "error", ctx_r1.message.severity == "success"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.message.summary);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.message.detail);
} }
function ToastItem_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function ToastItem_button_4_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onCloseIconClick($event); })("keydown.enter", function ToastItem_button_4_Template_button_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onCloseIconClick($event); });
    ɵngcc0.ɵɵelement(1, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} }
function ToastItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1, a2, a3) { return { showTransformParams: a0, hideTransformParams: a1, showTransitionParams: a2, hideTransitionParams: a3 }; };
const _c3 = function (a1) { return { value: "visible", params: a1 }; };
const _c4 = function (a0) { return { $implicit: a0 }; };
function Toast_p_toastItem_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-toastItem", 3);
    ɵngcc0.ɵɵlistener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onMessageClose($event); })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onAnimationStart($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("message", msg_r2)("index", i_r3)("template", ctx_r1.template)("@toastAnimation", undefined)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
} }
export class ToastItem {
    constructor(zone) {
        this.zone = zone;
        this.onClose = new EventEmitter();
    }
    ngAfterViewInit() {
        this.initTimeout();
    }
    initTimeout() {
        if (!this.message.sticky) {
            this.zone.runOutsideAngular(() => {
                this.timeout = setTimeout(() => {
                    this.onClose.emit({
                        index: this.index,
                        message: this.message
                    });
                }, this.message.life || 3000);
            });
        }
    }
    clearTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    onMouseEnter() {
        this.clearTimeout();
    }
    onMouseLeave() {
        this.initTimeout();
    }
    onCloseIconClick(event) {
        this.clearTimeout();
        this.onClose.emit({
            index: this.index,
            message: this.message
        });
        event.preventDefault();
    }
    ngOnDestroy() {
        this.clearTimeout();
    }
}
ToastItem.ɵfac = function ToastItem_Factory(t) { return new (t || ToastItem)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ToastItem.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastItem, selectors: [["p-toastItem"]], viewQuery: function ToastItem_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { message: "message", index: "index", template: "template", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onClose: "onClose" }, decls: 6, vars: 16, consts: [[1, "p-toast-message", 3, "ngClass", "mouseenter", "mouseleave"], ["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "p-toast-message-content"], [4, "ngIf"], ["type", "button", "class", "p-toast-icon-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-toast-message-icon", "pi", 3, "ngClass"], [1, "p-toast-message-text"], [1, "p-toast-summary"], [1, "p-toast-detail"], ["type", "button", "pRipple", "", 1, "p-toast-icon-close", "p-link", 3, "click", "keydown.enter"], [1, "p-toast-icon-close-icon", "pi", "pi-times"]], template: function ToastItem_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastItem_ng_container_3_Template, 7, 8, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(4, ToastItem_button_4_Template, 2, 0, "button", 4);
        ɵngcc0.ɵɵtemplate(5, ToastItem_ng_container_5_Template, 1, 0, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", "p-toast-message-" + ctx.message.severity)("@messageState", ɵngcc0.ɵɵpureFunction1(12, _c3, ɵngcc0.ɵɵpureFunction4(7, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        ɵngcc0.ɵɵattribute("id", ctx.message.id);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.message.closable !== false);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(14, _c4, ctx.message));
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], encapsulation: 2, data: { animation: [
            trigger('messageState', [
                state('visible', style({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                transition('void => *', [
                    style({ transform: '{{showTransformParams}}', opacity: 0 }),
                    animate('{{showTransitionParams}}')
                ]),
                transition('* => void', [
                    animate(('{{hideTransitionParams}}'), style({
                        height: 0,
                        opacity: 0,
                        transform: '{{hideTransformParams}}'
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
ToastItem.ctorParameters = () => [
    { type: NgZone }
];
ToastItem.propDecorators = {
    message: [{ type: Input }],
    index: [{ type: Input }],
    template: [{ type: Input }],
    showTransformOptions: [{ type: Input }],
    hideTransformOptions: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    onClose: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastItem, [{
        type: Component,
        args: [{
                selector: 'p-toastItem',
                template: `
        <div #container [attr.id]="message.id" class="p-toast-message" [ngClass]="'p-toast-message-' + message.severity" [@messageState]="{value: 'visible', params: {showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
                (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
            <div class="p-toast-message-content" role="alert" aria-live="assertive" aria-atomic="true">
                <ng-container *ngIf="!template">
                    <span class="p-toast-message-icon pi" [ngClass]="{'pi-info-circle': message.severity == 'info', 'pi-exclamation-triangle': message.severity == 'warn',
                        'pi-times-circle': message.severity == 'error', 'pi-check' :message.severity == 'success'}"></span>
                    <div class="p-toast-message-text">
                        <div class="p-toast-summary">{{message.summary}}</div>
                        <div class="p-toast-detail">{{message.detail}}</div>
                    </div>
                </ng-container>
                <button type="button" class="p-toast-icon-close p-link" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" *ngIf="message.closable !== false" pRipple>
                    <span class="p-toast-icon-close-icon pi pi-times"></span>
                </button>
                <ng-container *ngTemplateOutlet="template; context: {$implicit: message}"></ng-container>
            </div>
        </div>
    `,
                animations: [
                    trigger('messageState', [
                        state('visible', style({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        transition('void => *', [
                            style({ transform: '{{showTransformParams}}', opacity: 0 }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition('* => void', [
                            animate(('{{hideTransitionParams}}'), style({
                                height: 0,
                                opacity: 0,
                                transform: '{{hideTransformParams}}'
                            }))
                        ])
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, { onClose: [{
            type: Output
        }], message: [{
            type: Input
        }], index: [{
            type: Input
        }], template: [{
            type: Input
        }], showTransformOptions: [{
            type: Input
        }], hideTransformOptions: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }] }); })();
export class Toast {
    constructor(messageService, cd) {
        this.messageService = messageService;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.position = 'top-right';
        this.preventOpenDuplicates = false;
        this.preventDuplicates = false;
        this.showTransformOptions = 'translateY(100%)';
        this.hideTransformOptions = 'translateY(-100%)';
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.onClose = new EventEmitter();
    }
    ngOnInit() {
        this.messageSubscription = this.messageService.messageObserver.subscribe(messages => {
            if (messages) {
                if (messages instanceof Array) {
                    const filteredMessages = messages.filter(m => this.canAdd(m));
                    this.add(filteredMessages);
                }
                else if (this.canAdd(messages)) {
                    this.add([messages]);
                }
            }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
            if (key) {
                if (this.key === key) {
                    this.messages = null;
                }
            }
            else {
                this.messages = null;
            }
            this.cd.markForCheck();
        });
    }
    add(messages) {
        this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
        if (this.preventDuplicates) {
            this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
        }
        this.cd.markForCheck();
    }
    canAdd(message) {
        let allow = this.key === message.key;
        if (allow && this.preventOpenDuplicates) {
            allow = !this.containsMessage(this.messages, message);
        }
        if (allow && this.preventDuplicates) {
            allow = !this.containsMessage(this.messagesArchieve, message);
        }
        return allow;
    }
    containsMessage(collection, message) {
        if (!collection) {
            return false;
        }
        return collection.find(m => {
            return ((m.summary === message.summary) && (m.detail == message.detail) && (m.severity === message.severity));
        }) != null;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'message':
                    this.template = item.template;
                    break;
                default:
                    this.template = item.template;
                    break;
            }
        });
    }
    onMessageClose(event) {
        this.messages.splice(event.index, 1);
        this.onClose.emit({
            message: event.message
        });
        this.cd.detectChanges();
    }
    onAnimationStart(event) {
        if (event.fromState === 'void' && this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
    }
    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    }
}
Toast.ɵfac = function Toast_Factory(t) { return new (t || Toast)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.MessageService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Toast.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Toast, selectors: [["p-toast"]], contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, viewQuery: function Toast_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", position: "position", preventOpenDuplicates: "preventOpenDuplicates", preventDuplicates: "preventDuplicates", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", key: "key", style: "style", styleClass: "styleClass" }, outputs: { onClose: "onClose" }, decls: 3, vars: 5, consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose"]], template: function Toast_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵtemplate(2, Toast_p_toastItem_2_Template, 1, 8, "p-toastItem", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-toast p-component p-toast-" + ctx.position)("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.messages);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ToastItem], styles: [".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex}.p-toast-message-text{-ms-flex:1 1 auto;flex:1 1 auto}.p-toast-top-right{right:20px;top:20px}.p-toast-top-left{left:20px;top:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{left:50%;margin-left:-10em;top:20px}.p-toast-bottom-center{bottom:20px;left:50%;margin-left:-10em}.p-toast-center{-ms-transform:translate(-50%,-50%);left:50%;min-width:20vw;top:50%;transform:translate(-50%,-50%)}.p-toast-icon-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}"], encapsulation: 2, data: { animation: [
            trigger('toastAnimation', [
                transition(':enter, :leave', [
                    query('@*', animateChild())
                ])
            ])
        ] }, changeDetection: 0 });
Toast.ctorParameters = () => [
    { type: MessageService },
    { type: ChangeDetectorRef }
];
Toast.propDecorators = {
    key: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    position: [{ type: Input }],
    preventOpenDuplicates: [{ type: Input }],
    preventDuplicates: [{ type: Input }],
    showTransformOptions: [{ type: Input }],
    hideTransformOptions: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    onClose: [{ type: Output }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Toast, [{
        type: Component,
        args: [{
                selector: 'p-toast',
                template: `
        <div #container [ngClass]="'p-toast p-component p-toast-' + position" [ngStyle]="style" [class]="styleClass">
            <p-toastItem *ngFor="let msg of messages; let i=index" [message]="msg" [index]="i" (onClose)="onMessageClose($event)"
                    [template]="template" @toastAnimation (@toastAnimation.start)="onAnimationStart($event)" 
                    [showTransformOptions]="showTransformOptions" [hideTransformOptions]="hideTransformOptions" 
                    [showTransitionOptions]="showTransitionOptions" [hideTransitionOptions]="hideTransitionOptions"></p-toastItem>
        </div>
    `,
                animations: [
                    trigger('toastAnimation', [
                        transition(':enter, :leave', [
                            query('@*', animateChild())
                        ])
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex}.p-toast-message-text{-ms-flex:1 1 auto;flex:1 1 auto}.p-toast-top-right{right:20px;top:20px}.p-toast-top-left{left:20px;top:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{left:50%;margin-left:-10em;top:20px}.p-toast-bottom-center{bottom:20px;left:50%;margin-left:-10em}.p-toast-center{-ms-transform:translate(-50%,-50%);left:50%;min-width:20vw;top:50%;transform:translate(-50%,-50%)}.p-toast-icon-close{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}"]
            }]
    }], function () { return [{ type: ɵngcc3.MessageService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], position: [{
            type: Input
        }], preventOpenDuplicates: [{
            type: Input
        }], preventDuplicates: [{
            type: Input
        }], showTransformOptions: [{
            type: Input
        }], hideTransformOptions: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onClose: [{
            type: Output
        }], key: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
export class ToastModule {
}
ToastModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastModule });
ToastModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastModule_Factory(t) { return new (t || ToastModule)(); }, imports: [[CommonModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastModule, { declarations: function () { return [Toast, ToastItem]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [Toast, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [Toast, SharedModule],
                declarations: [Toast, ToastItem]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy90b2FzdC90b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUE0RCxTQUFTLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBdUIsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVQLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxZQUFZLEVBQWdCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkM3RyxNQUFNLE9BQU8sU0FBUztBQUFHLElBc0JyQixZQUFvQixJQUFZO0FBQUksUUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBTnZCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5RCxJQUt1QyxDQUFDO0FBQ3hDLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLENBQUM7QUFDTCxJQUNJLFdBQVc7QUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFB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WSxFQUFDLFlBQVksQ0FBQyxrQkFDcEMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQyxrQkFDN0IsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQyxjQUNsQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLENvbXBvbmVudCxJbnB1dCxPdXRwdXQsT25Jbml0LEFmdGVyVmlld0luaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkRlc3Ryb3ksRWxlbWVudFJlZixWaWV3Q2hpbGQsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsVGVtcGxhdGVSZWYsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQge0RvbUhhbmRsZXJ9IGZyb20gJ3ByaW1lbmcvZG9tJztcbmltcG9ydCB7UHJpbWVUZW1wbGF0ZSxTaGFyZWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7UmlwcGxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3RyaWdnZXIsc3RhdGUsc3R5bGUsdHJhbnNpdGlvbixhbmltYXRlLHF1ZXJ5LGFuaW1hdGVDaGlsZCxBbmltYXRpb25FdmVudH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC10b2FzdEl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbYXR0ci5pZF09XCJtZXNzYWdlLmlkXCIgY2xhc3M9XCJwLXRvYXN0LW1lc3NhZ2VcIiBbbmdDbGFzc109XCIncC10b2FzdC1tZXNzYWdlLScgKyBtZXNzYWdlLnNldmVyaXR5XCIgW0BtZXNzYWdlU3RhdGVdPVwie3ZhbHVlOiAndmlzaWJsZScsIHBhcmFtczoge3Nob3dUcmFuc2Zvcm1QYXJhbXM6IHNob3dUcmFuc2Zvcm1PcHRpb25zLCBoaWRlVHJhbnNmb3JtUGFyYW1zOiBoaWRlVHJhbnNmb3JtT3B0aW9ucywgc2hvd1RyYW5zaXRpb25QYXJhbXM6IHNob3dUcmFuc2l0aW9uT3B0aW9ucywgaGlkZVRyYW5zaXRpb25QYXJhbXM6IGhpZGVUcmFuc2l0aW9uT3B0aW9uc319XCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJvbk1vdXNlRW50ZXIoKVwiIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10b2FzdC1tZXNzYWdlLWNvbnRlbnRcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC10b2FzdC1tZXNzYWdlLWljb24gcGlcIiBbbmdDbGFzc109XCJ7J3BpLWluZm8tY2lyY2xlJzogbWVzc2FnZS5zZXZlcml0eSA9PSAnaW5mbycsICdwaS1leGNsYW1hdGlvbi10cmlhbmdsZSc6IG1lc3NhZ2Uuc2V2ZXJpdHkgPT0gJ3dhcm4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BpLXRpbWVzLWNpcmNsZSc6IG1lc3NhZ2Uuc2V2ZXJpdHkgPT0gJ2Vycm9yJywgJ3BpLWNoZWNrJyA6bWVzc2FnZS5zZXZlcml0eSA9PSAnc3VjY2Vzcyd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10b2FzdC1tZXNzYWdlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXRvYXN0LXN1bW1hcnlcIj57e21lc3NhZ2Uuc3VtbWFyeX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC10b2FzdC1kZXRhaWxcIj57e21lc3NhZ2UuZGV0YWlsfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwLXRvYXN0LWljb24tY2xvc2UgcC1saW5rXCIgKGNsaWNrKT1cIm9uQ2xvc2VJY29uQ2xpY2soJGV2ZW50KVwiIChrZXlkb3duLmVudGVyKT1cIm9uQ2xvc2VJY29uQ2xpY2soJGV2ZW50KVwiICpuZ0lmPVwibWVzc2FnZS5jbG9zYWJsZSAhPT0gZmFsc2VcIiBwUmlwcGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtdG9hc3QtaWNvbi1jbG9zZS1pY29uIHBpIHBpLXRpbWVzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyRpbXBsaWNpdDogbWVzc2FnZX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignbWVzc2FnZVN0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd7e3Nob3dUcmFuc2Zvcm1QYXJhbXN9fScsIG9wYWNpdHk6IDB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCd7e3Nob3dUcmFuc2l0aW9uUGFyYW1zfX0nKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgoJ3t7aGlkZVRyYW5zaXRpb25QYXJhbXN9fScpLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAne3toaWRlVHJhbnNmb3JtUGFyYW1zfX0nXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEl0ZW0gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcblxuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2Zvcm1PcHRpb25zOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNmb3JtT3B0aW9uczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgc2hvd1RyYW5zaXRpb25PcHRpb25zOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lclZpZXdDaGlsZDogRWxlbWVudFJlZjtcblxuICAgIHRpbWVvdXQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0VGltZW91dCgpO1xuICAgIH1cblxuICAgIGluaXRUaW1lb3V0KCkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZS5zdGlja3kpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMubWVzc2FnZS5saWZlIHx8IDMwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLmluaXRUaW1lb3V0KCk7XG4gICAgfVxuIFxuICAgIG9uQ2xvc2VJY29uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtdG9hc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgI2NvbnRhaW5lciBbbmdDbGFzc109XCIncC10b2FzdCBwLWNvbXBvbmVudCBwLXRvYXN0LScgKyBwb3NpdGlvblwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxwLXRvYXN0SXRlbSAqbmdGb3I9XCJsZXQgbXNnIG9mIG1lc3NhZ2VzOyBsZXQgaT1pbmRleFwiIFttZXNzYWdlXT1cIm1zZ1wiIFtpbmRleF09XCJpXCIgKG9uQ2xvc2UpPVwib25NZXNzYWdlQ2xvc2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiIEB0b2FzdEFuaW1hdGlvbiAoQHRvYXN0QW5pbWF0aW9uLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiIFxuICAgICAgICAgICAgICAgICAgICBbc2hvd1RyYW5zZm9ybU9wdGlvbnNdPVwic2hvd1RyYW5zZm9ybU9wdGlvbnNcIiBbaGlkZVRyYW5zZm9ybU9wdGlvbnNdPVwiaGlkZVRyYW5zZm9ybU9wdGlvbnNcIiBcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dUcmFuc2l0aW9uT3B0aW9uc109XCJzaG93VHJhbnNpdGlvbk9wdGlvbnNcIiBbaGlkZVRyYW5zaXRpb25PcHRpb25zXT1cImhpZGVUcmFuc2l0aW9uT3B0aW9uc1wiPjwvcC10b2FzdEl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCd0b2FzdEFuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlciwgOmxlYXZlJywgW1xuICAgICAgICAgICAgICAgIHF1ZXJ5KCdAKicsIGFuaW1hdGVDaGlsZCgpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3QgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBASW5wdXQoKSBiYXNlWkluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICAgICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcG9zaXRpb246IHN0cmluZyA9ICd0b3AtcmlnaHQnO1xuXG4gICAgQElucHV0KCkgcHJldmVudE9wZW5EdXBsaWNhdGVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBwcmV2ZW50RHVwbGljYXRlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2Zvcm1PcHRpb25zOiBzdHJpbmcgPSAndHJhbnNsYXRlWSgxMDAlKSc7XG5cbiAgICBASW5wdXQoKSBoaWRlVHJhbnNmb3JtT3B0aW9uczogc3RyaW5nID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJztcblxuICAgIEBJbnB1dCgpIHNob3dUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzMwMG1zIGVhc2Utb3V0JztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJzI1MG1zIGVhc2UtaW4nO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gICAgbWVzc2FnZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY2xlYXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIG1lc3NhZ2VzOiBNZXNzYWdlW107XG5cbiAgICBtZXNzYWdlc0FyY2hpZXZlOiBNZXNzYWdlW107XG5cbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VPYnNlcnZlci5zdWJzY3JpYmUobWVzc2FnZXMgPT4ge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRNZXNzYWdlcyA9IG1lc3NhZ2VzLmZpbHRlcihtID0+IHRoaXMuY2FuQWRkKG0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoZmlsdGVyZWRNZXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2FuQWRkKG1lc3NhZ2VzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChbbWVzc2FnZXNdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24gPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNsZWFyT2JzZXJ2ZXIuc3Vic2NyaWJlKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pOyAgICAgICBcbiAgICB9XG5cbiAgICBhZGQobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcyA/IFsuLi50aGlzLm1lc3NhZ2VzLCAuLi5tZXNzYWdlc10gOiBbLi4ubWVzc2FnZXNdO1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZlbnREdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzQXJjaGlldmUgPSB0aGlzLm1lc3NhZ2VzQXJjaGlldmUgPyBbLi4udGhpcy5tZXNzYWdlc0FyY2hpZXZlLCAuLi5tZXNzYWdlc10gOiBbLi4ubWVzc2FnZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjYW5BZGQobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWxsb3cgPSB0aGlzLmtleSA9PT0gbWVzc2FnZS5rZXk7XG5cbiAgICAgICAgaWYgKGFsbG93ICYmIHRoaXMucHJldmVudE9wZW5EdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICBhbGxvdyA9ICF0aGlzLmNvbnRhaW5zTWVzc2FnZSh0aGlzLm1lc3NhZ2VzLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbGxvdyAmJiB0aGlzLnByZXZlbnREdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICBhbGxvdyA9ICF0aGlzLmNvbnRhaW5zTWVzc2FnZSh0aGlzLm1lc3NhZ2VzQXJjaGlldmUsIG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbG93O1xuICAgIH1cblxuICAgIGNvbnRhaW5zTWVzc2FnZShjb2xsZWN0aW9uOiBNZXNzYWdlW10sIG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKG0gPT4ge1xuICAgICAgICAgICByZXR1cm4gKChtLnN1bW1hcnkgPT09IG1lc3NhZ2Uuc3VtbWFyeSkgJiYgKG0uZGV0YWlsID09IG1lc3NhZ2UuZGV0YWlsKSAmJiAobS5zZXZlcml0eSA9PT0gbWVzc2FnZS5zZXZlcml0eSkpO1xuICAgICAgICB9KSAhPSBudWxsO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTWVzc2FnZUNsb3NlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGV2ZW50LmluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBldmVudC5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgPT09ICd2b2lkJyAmJiB0aGlzLmF1dG9aSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gU3RyaW5nKHRoaXMuYmFzZVpJbmRleCArICgrK0RvbUhhbmRsZXIuemluZGV4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHsgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFJpcHBsZU1vZHVsZV0sXG4gICAgZXhwb3J0czogW1RvYXN0LFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVG9hc3QsVG9hc3RJdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7IH1cbiJdfQ==