import { __decorate, __param } from 'tslib';
import { Inject, Injectable, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter, Output, Pipe, NgModule } from '@angular/core';
import { Subject, from } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * Toast style.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "snotifyToast__buttons--bold": a0 }; };
function ButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function ButtonsComponent_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const button_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return button_r1.action ? button_r1.action(ctx_r2.toast) : ctx_r2.remove(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, button_r1.bold));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r1.text, " ");
} }
const _c1 = function (a0) { return { "snotifyToast__input--filled": a0 }; };
function SnotifyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("opacity", ctx_r0.backdrop);
} }
function SnotifyComponent_div_1_ng_snotify_toast_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ng-snotify-toast", 4);
    ɵngcc0.ɵɵlistener("stateChanged", function SnotifyComponent_div_1_ng_snotify_toast_1_Template_ng_snotify_toast_stateChanged_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.stateChanged($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("toast", notification_r4);
} }
function SnotifyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_ng_snotify_toast_1_Template, 1, 1, "ng-snotify-toast", 3);
    ɵngcc0.ɵɵpipe(2, "slice");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const position_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("snotify snotify-", position_r2, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(2, 4, ctx_r1.notifications[position_r2], ctx_r1.blockSizeA, ctx_r1.blockSizeB));
} }
const _c2 = function (a0) { return { width: a0 }; };
function ToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelement(1, "span", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c2, ctx_r0.state.progress * 100 + "%"));
} }
function ToastComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "truncate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵattribute("id", "snotify_" + ctx_r5.toast.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 2, ctx_r5.toast.title, ctx_r5.toast.config.titleMaxLength), " ");
} }
function ToastComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "truncate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(2, 1, ctx_r6.toast.body, ctx_r6.toast.config.bodyMaxLength));
} }
function ToastComponent_div_2_ng_snotify_prompt_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ng-snotify-prompt", 14);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("toast", ctx_r7.toast);
} }
const _c3 = function (a1) { return ["snotify-icon", a1]; };
function ToastComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c3, ctx_r8.toast.config.iconClass || "snotify-icon--" + ctx_r8.toast.config.type));
} }
function ToastComponent_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 16);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", ctx_r10.toast.config.icon, ɵngcc0.ɵɵsanitizeUrl);
} }
function ToastComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, ToastComponent_div_2_div_1_Template, 3, 5, "div", 8);
    ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_div_2_Template, 3, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(3, ToastComponent_div_2_ng_snotify_prompt_3_Template, 1, 1, "ng-snotify-prompt", 4);
    ɵngcc0.ɵɵtemplate(4, ToastComponent_div_2_div_4_Template, 1, 3, "div", 10);
    ɵngcc0.ɵɵtemplate(5, ToastComponent_div_2_ng_template_5_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵngcc0.ɵɵreference(6);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.body);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.toast.config.type === ctx_r1.state.promptType);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.toast.config.icon)("ngIfElse", _r9);
} }
function ToastComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.toast.config.html, ɵngcc0.ɵɵsanitizeHtml);
} }
function ToastComponent_ng_snotify_button_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ng-snotify-button", 14);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("toast", ctx_r4.toast);
} }
const _c4 = function (a1, a2, a3) { return ["snotifyToast animated", a1, a2, a3]; };
const _c5 = function (a0, a1, a2, a3) { return { "-webkit-transition": a0, transition: a1, "-webkit-animation-duration": a2, "animation-duration": a3 }; };
var SnotifyStyle;
(function (SnotifyStyle) {
    SnotifyStyle["simple"] = "simple";
    SnotifyStyle["success"] = "success";
    SnotifyStyle["error"] = "error";
    SnotifyStyle["warning"] = "warning";
    SnotifyStyle["info"] = "info";
    SnotifyStyle["async"] = "async";
    SnotifyStyle["confirm"] = "confirm";
    SnotifyStyle["prompt"] = "prompt";
})(SnotifyStyle || (SnotifyStyle = {}));

/**
 * Transform arguments to Snotify object
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns Snotify
 */
function TransformArgument(target, propertyKey, descriptor) {
    if (propertyKey === SnotifyStyle.async) {
        return {
            value(...args) {
                let result;
                if (args.length === 2) {
                    result = {
                        title: null,
                        body: args[0],
                        config: null,
                        action: args[1]
                    };
                }
                else if (args.length === 3) {
                    if (typeof args[1] === 'string') {
                        result = {
                            title: args[1],
                            body: args[0],
                            config: null,
                            action: args[2]
                        };
                    }
                    else {
                        result = {
                            title: null,
                            body: args[0],
                            config: args[2],
                            action: args[1]
                        };
                    }
                }
                else {
                    result = {
                        title: args[1],
                        body: args[0],
                        config: args[3],
                        action: args[2]
                    };
                }
                return descriptor.value.apply(this, [result]);
            }
        };
    }
    else {
        return {
            value(...args) {
                let result;
                if (args.length === 1) {
                    result = {
                        title: null,
                        body: args[0],
                        config: null
                    };
                }
                else if (args.length === 3) {
                    result = {
                        title: args[1],
                        body: args[0],
                        config: args[2]
                    };
                }
                else {
                    result = {
                        title: null,
                        config: null,
                        body: args[0],
                        [typeof args[1] === 'string' ? 'title' : 'config']: args[1]
                    };
                }
                return descriptor.value.apply(this, [result]);
            }
        };
    }
}

/**
 * Generates random id
 * @return number
 */
function uuid() {
    return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}
/**
 * Simple is object check.
 * @param item Object<any>
 * @returns boolean
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge objects.
 * @param sources Array<Object<any>>
 * @returns Object<any>
 */
function mergeDeep(...sources) {
    const target = {};
    if (!sources.length) {
        return target;
    }
    while (sources.length > 0) {
        const source = sources.shift();
        if (isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    target[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    }
    return target;
}
function animate(start, duration, callback) {
    let endTime;
    requestAnimationFrame(timestamp => (endTime = timestamp + duration));
    const calculate = () => {
        requestAnimationFrame(timestamp => {
            const runtime = timestamp - endTime;
            const progress = Math.min(runtime / duration, 1) + start;
            if (runtime < duration) {
                if (callback(+(100 * progress).toFixed(2), progress)) {
                    calculate();
                }
            }
        });
    };
}

/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
function SetToastType(target, propertyKey, descriptor) {
    return {
        value(...args) {
            args[0].config = Object.assign(Object.assign({}, args[0].config), { type: propertyKey });
            return descriptor.value.apply(this, args);
        }
    };
}

// @TODO remove method in observable way
/**
 * Toast main model
 */
class SnotifyToast {
    constructor(id, title, body, config) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.config = config;
        /**
         * Emits SnotifyEvent
         */
        this.eventEmitter = new Subject();
        /**
         * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
         */
        this.eventsHolder = [];
        if (this.config.type === SnotifyStyle.prompt) {
            this.value = '';
        }
        this.on('hidden', () => {
            this.eventsHolder.forEach((subscription) => {
                subscription.unsubscribe();
            });
        });
    }
    /**
     * Subscribe to toast events
     * @returns this
     * @param event SnotifyEvent
     * @param action (toast: this) => void
     */
    on(event, action) {
        this.eventsHolder.push(this.eventEmitter.subscribe((e) => {
            if (e === event) {
                action(this);
            }
        }));
        return this;
    }
    /**
     * Tests if a toast equals this toast.
     * @returns boolean true then equals else false.
     * @param toast SnotifyToast
     */
    equals(toast) {
        return this.body === toast.body && this.title === toast.title && this.config.type === toast.config.type;
    }
}

/**
 * SnotifyService - create, remove, config toasts
 */
let SnotifyService = 
// tslint:disable:unified-signatures
class SnotifyService {
    constructor(config) {
        this.config = config;
        this.emitter = new Subject();
        this.toastChanged = new Subject();
        this.toastDeleted = new Subject();
        this.notifications = [];
    }
    /**
     * emit changes in notifications array
     */
    emit() {
        this.emitter.next(this.notifications.slice());
    }
    /**
     * returns SnotifyToast object
     * @param id Number
     * @return SnotifyToast|undefined
     */
    get(id) {
        return this.notifications.find(toast => toast.id === id);
    }
    /**
     * add SnotifyToast to notifications array
     * @param toast SnotifyToast
     */
    add(toast) {
        if (this.config.global.filterDuplicates && this.containsToast(toast)) {
            return;
        }
        if (this.config.global.newOnTop) {
            this.notifications.unshift(toast);
        }
        else {
            this.notifications.push(toast);
        }
        this.emit();
    }
    /**
     * checks if the toast is in the collection.
     * @param inToast SnotifyToast
     * @returns boolean
     */
    containsToast(inToast) {
        return this.notifications.some(toast => toast.equals(inToast));
    }
    /**
     * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
     * @param id number
     * @param remove boolean
     */
    remove(id, remove) {
        if (!id) {
            return this.clear();
        }
        else if (remove) {
            this.notifications = this.notifications.filter(toast => toast.id !== id);
            return this.emit();
        }
        this.toastDeleted.next(id);
    }
    /**
     * Clear notifications array
     */
    clear() {
        this.notifications = [];
        this.emit();
    }
    /**
     * Creates toast and add it to array, returns toast id
     * @param snotify Snotify
     * @return number
     */
    create(snotify) {
        const config = mergeDeep(this.config.toast, this.config.type[snotify.config.type], snotify.config);
        const toast = new SnotifyToast(uuid(), snotify.title, snotify.body, config);
        this.add(toast);
        return toast;
    }
    setDefaults(defaults) {
        return (this.config = mergeDeep(this.config, defaults));
    }
    /**
     * Transform toast arguments into Snotify object
     */
    simple(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    success(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    error(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    info(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    warning(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    confirm(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    prompt(args) {
        return this.create(args);
    }
    /**
     * Transform toast arguments into Snotify object
     */
    async(args) {
        let async;
        if (args.action instanceof Promise) {
            async = from(args.action);
        }
        else {
            async = args.action;
        }
        const toast = this.create(args);
        toast.on('mounted', () => {
            const subscription = async.subscribe((next) => {
                this.mergeToast(toast, next);
            }, (error) => {
                this.mergeToast(toast, error, SnotifyStyle.error);
                subscription.unsubscribe();
            }, () => {
                this.mergeToast(toast, {}, SnotifyStyle.success);
                subscription.unsubscribe();
            });
        });
        return toast;
    }
    mergeToast(toast, next, type) {
        if (next.body) {
            toast.body = next.body;
        }
        if (next.title) {
            toast.title = next.title;
        }
        if (type) {
            toast.config = mergeDeep(toast.config, this.config.global, this.config.toast[type], { type }, next.config);
        }
        else {
            toast.config = mergeDeep(toast.config, next.config);
        }
        if (next.html) {
            toast.config.html = next.html;
        }
        this.emit();
        this.toastChanged.next(toast);
    }
    /**
     * Creates empty toast with html string inside
     * @param html string | SafeHtml
     * @param config SnotifyToastConfig
     * @returns number
     */
    html(html, config) {
        return this.create({
            title: null,
            body: null,
            config: Object.assign(Object.assign({}, config), { html })
        });
    }
};
SnotifyService.ɵfac = function SnotifyService_Factory(t) { return new (t || SnotifyService)(ɵngcc0.ɵɵinject('SnotifyToastConfig')); };
SnotifyService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: SnotifyService, factory: function (t) { return SnotifyService.ɵfac(t); } });
SnotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['SnotifyToastConfig',] }] }
];
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "simple", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "success", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "error", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "info", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "warning", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "confirm", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "prompt", null);
__decorate([
    TransformArgument
    /**
     * Determines current toast type and collects default configuration
     */
    ,
    SetToastType
], SnotifyService.prototype, "async", null);
SnotifyService = __decorate([ __param(0, Inject('SnotifyToastConfig'))
], SnotifyService);

let ButtonsComponent = 
/**
 * Buttons component
 */
class ButtonsComponent {
    constructor(service) {
        this.service = service;
    }
    /**
     * remove toast
     */
    remove() {
        this.service.remove(this.toast.id);
    }
};
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
ButtonsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ButtonsComponent, selectors: [["ng-snotify-button"]], inputs: { toast: "toast" }, decls: 2, vars: 1, consts: [[1, "snotifyToast__buttons"], ["type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "ngClass", "click"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ButtonsComponent_button_1_Template, 2, 4, "button", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.toast.config.buttons);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], encapsulation: 2, changeDetection: 0 });
ButtonsComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ButtonsComponent.prototype, "toast", void 0);

let PromptComponent = 
/**
 * Prompt component. Part of PROMPT type
 */
class PromptComponent {
    constructor() {
        /**
         * Is PROMPT focused
         */
        this.isPromptFocused = false;
    }
};
PromptComponent.ɵfac = function PromptComponent_Factory(t) { return new (t || PromptComponent)(); };
PromptComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PromptComponent, selectors: [["ng-snotify-prompt"]], inputs: { toast: "toast" }, decls: 6, vars: 8, consts: [[1, "snotifyToast__input", 3, "ngClass"], ["autofocus", "", "type", "text", 1, "snotifyToast__input__field", 3, "id", "input", "focus", "blur"], [1, "snotifyToast__input__label", 3, "for"], [1, "snotifyToast__input__labelContent"]], template: function PromptComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1);
        ɵngcc0.ɵɵlistener("input", function PromptComponent_Template_input_input_1_listener($event) { ctx.toast.value = $event.target.value; return ctx.toast.eventEmitter.next("input"); })("focus", function PromptComponent_Template_input_focus_1_listener() { return ctx.isPromptFocused = true; })("blur", function PromptComponent_Template_input_blur_1_listener() { return ctx.isPromptFocused = !!ctx.toast.value.length; });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "label", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵpipe(5, "truncate");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx.isPromptFocused));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.toast.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("for", ctx.toast.id);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(5, 4, ctx.toast.config.placeholder));
    } }, directives: function () { return [ɵngcc1.NgClass]; }, pipes: function () { return [TruncatePipe]; }, encapsulation: 2, changeDetection: 0 });
__decorate([
    Input()
], PromptComponent.prototype, "toast", void 0);

/**
 * Toast position
 */
var SnotifyPosition;
(function (SnotifyPosition) {
    SnotifyPosition["leftTop"] = "leftTop";
    SnotifyPosition["leftCenter"] = "leftCenter";
    SnotifyPosition["leftBottom"] = "leftBottom";
    SnotifyPosition["rightTop"] = "rightTop";
    SnotifyPosition["rightCenter"] = "rightCenter";
    SnotifyPosition["rightBottom"] = "rightBottom";
    SnotifyPosition["centerTop"] = "centerTop";
    SnotifyPosition["centerCenter"] = "centerCenter";
    SnotifyPosition["centerBottom"] = "centerBottom";
})(SnotifyPosition || (SnotifyPosition = {}));

let SnotifyComponent = class SnotifyComponent {
    constructor(service) {
        this.service = service;
        /**
         * Backdrop Opacity
         */
        this.backdrop = -1;
    }
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    ngOnInit() {
        this.emitter = this.service.emitter.subscribe((toasts) => {
            if (this.service.config.global.newOnTop) {
                this.dockSizeA = -this.service.config.global.maxOnScreen;
                this.dockSizeB = undefined;
                this.blockSizeA = -this.service.config.global.maxAtPosition;
                this.blockSizeB = undefined;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
            }
            else {
                this.dockSizeA = 0;
                this.dockSizeB = this.service.config.global.maxOnScreen;
                this.blockSizeA = 0;
                this.blockSizeB = this.service.config.global.maxAtPosition;
                this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
            }
            this.notifications = this.splitToasts(toasts.slice(this.dockSizeA, this.dockSizeB));
            this.stateChanged('mounted');
        });
    }
    // TODO: fix backdrop if more than one toast called in a row
    /**
     * Changes the backdrop opacity
     * @param event SnotifyEvent
     */
    stateChanged(event) {
        if (!this.withBackdrop.length) {
            if (this.backdrop >= 0) {
                this.backdrop = -1;
            }
            return;
        }
        switch (event) {
            case 'mounted':
                if (this.backdrop < 0) {
                    this.backdrop = 0;
                }
                break;
            case 'beforeShow':
                this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
                break;
            case 'beforeHide':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = 0;
                }
                break;
            case 'hidden':
                if (this.withBackdrop.length === 1) {
                    this.backdrop = -1;
                }
                break;
        }
    }
    /**
     * Split toasts toasts into different objects
     * @param toasts SnotifyToast[]
     * @returns SnotifyNotifications
     */
    splitToasts(toasts) {
        const result = {};
        for (const property in SnotifyPosition) {
            if (SnotifyPosition.hasOwnProperty(property)) {
                result[SnotifyPosition[property]] = [];
            }
        }
        toasts.forEach((toast) => {
            result[toast.config.position].push(toast);
        });
        return result;
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
};
SnotifyComponent.ɵfac = function SnotifyComponent_Factory(t) { return new (t || SnotifyComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
SnotifyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SnotifyComponent, selectors: [["ng-snotify"]], decls: 3, vars: 4, consts: [["class", "snotify-backdrop", 3, "opacity", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "snotify-backdrop"], [3, "toast", "stateChanged", 4, "ngFor", "ngForOf"], [3, "toast", "stateChanged"]], template: function SnotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SnotifyComponent_div_0_Template, 1, 2, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SnotifyComponent_div_1_Template, 3, 8, "div", 1);
        ɵngcc0.ɵɵpipe(2, "keys");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.backdrop >= 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx.notifications));
    } }, directives: function () { return [ɵngcc1.NgIf, ɵngcc1.NgForOf, ToastComponent]; }, pipes: function () { return [KeysPipe, ɵngcc1.SlicePipe]; }, encapsulation: 2 });
SnotifyComponent.ctorParameters = () => [
    { type: SnotifyService }
];

let ToastComponent = class ToastComponent {
    constructor(service) {
        this.service = service;
        this.stateChanged = new EventEmitter();
        /**
         * Toast state
         */
        this.state = {
            paused: false,
            progress: 0,
            animation: '',
            isDestroying: false,
            promptType: SnotifyStyle.prompt
        };
    }
    // Lifecycles
    /**
     * Init base options. Subscribe to toast changed, toast deleted
     */
    ngOnInit() {
        this.toastChangedSubscription = this.service.toastChanged.subscribe((toast) => {
            if (this.toast.id === toast.id) {
                this.initToast();
            }
        });
        this.toastDeletedSubscription = this.service.toastDeleted.subscribe(id => {
            if (this.toast.id === id) {
                this.onRemove();
            }
        });
        if (!this.toast.config.timeout) {
            this.toast.config.showProgressBar = false;
        }
        this.toast.eventEmitter.next('mounted');
        this.state.animation = 'snotifyToast--in';
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.stateChanged.emit('beforeShow');
            this.toast.eventEmitter.next('beforeShow');
            this.state.animation = this.toast.config.animation.enter;
        }, this.service.config.toast.animation.time / 5); // time to show toast push animation (snotifyToast--in)
    }
    /**
     * Unsubscribe subscriptions
     */
    ngOnDestroy() {
        cancelAnimationFrame(this.animationFrame);
        this.toast.eventEmitter.next('destroyed');
        this.toastChangedSubscription.unsubscribe();
        this.toastDeletedSubscription.unsubscribe();
    }
    /*
    Event hooks
     */
    /**
     * Trigger OnClick lifecycle
     */
    onClick() {
        this.toast.eventEmitter.next('click');
        if (this.toast.config.closeOnClick) {
            this.service.remove(this.toast.id);
        }
    }
    /**
     * Trigger beforeDestroy lifecycle. Removes toast
     */
    onRemove() {
        this.state.isDestroying = true;
        this.toast.eventEmitter.next('beforeHide');
        this.stateChanged.emit('beforeHide');
        this.state.animation = this.toast.config.animation.exit;
        setTimeout(() => {
            this.stateChanged.emit('hidden');
            this.state.animation = 'snotifyToast--out';
            this.toast.eventEmitter.next('hidden');
            setTimeout(() => this.service.remove(this.toast.id, true), this.toast.config.animation.time / 2);
        }, this.toast.config.animation.time / 2);
    }
    /**
     * Trigger onHoverEnter lifecycle
     */
    onMouseEnter() {
        this.toast.eventEmitter.next('mouseenter');
        if (this.toast.config.pauseOnHover) {
            this.state.paused = true;
        }
    }
    /**
     * Trigger onHoverLeave lifecycle
     */
    onMouseLeave() {
        if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
            this.state.paused = false;
            this.startTimeout(this.toast.config.timeout * this.state.progress);
        }
        this.toast.eventEmitter.next('mouseleave');
    }
    /**
     * Remove toast completely after animation
     */
    onExitTransitionEnd() {
        if (this.state.isDestroying) {
            return;
        }
        this.initToast();
        this.toast.eventEmitter.next('shown');
    }
    /*
     Common
     */
    /**
     * Initialize base toast config
     *
     */
    initToast() {
        if (this.toast.config.timeout > 0) {
            this.startTimeout(0);
        }
    }
    /**
     * Start progress bar
     * @param startTime number
     */
    startTimeout(startTime = 0) {
        const start = performance.now();
        const calculate = () => {
            this.animationFrame = requestAnimationFrame(timestamp => {
                const runtime = timestamp + startTime - start;
                const progress = Math.min(runtime / this.toast.config.timeout, 1);
                if (this.state.paused) {
                    cancelAnimationFrame(this.animationFrame);
                }
                else if (runtime < this.toast.config.timeout) {
                    this.state.progress = progress;
                    calculate();
                }
                else {
                    this.state.progress = 1;
                    cancelAnimationFrame(this.animationFrame);
                    this.service.remove(this.toast.id);
                }
            });
        };
        calculate();
    }
};
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(ɵngcc0.ɵɵdirectiveInject(SnotifyService)); };
ToastComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ToastComponent, selectors: [["ng-snotify-toast"]], inputs: { toast: "toast" }, outputs: { stateChanged: "stateChanged" }, decls: 6, vars: 18, consts: [[3, "ngClass", "ngStyle", "animationend", "click", "mouseenter", "mouseleave"], ["class", "snotifyToast__progressBar", 4, "ngIf"], ["class", "snotifyToast__inner", 4, "ngIf", "ngIfElse"], ["toastHTML", ""], [3, "toast", 4, "ngIf"], [1, "snotifyToast__progressBar"], [1, "snotifyToast__progressBar__percentage", 3, "ngStyle"], [1, "snotifyToast__inner"], ["class", "snotifyToast__title", 4, "ngIf"], ["class", "snotifyToast__body", 4, "ngIf"], [3, "ngClass", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "snotifyToast__title"], [1, "snotifyToast__body"], [3, "toast"], [3, "ngClass"], [1, "snotify-icon", 3, "src"], [1, "snotifyToast__inner", 3, "innerHTML"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("animationend", function ToastComponent_Template_div_animationend_0_listener() { return ctx.onExitTransitionEnd(); })("click", function ToastComponent_Template_div_click_0_listener() { return ctx.onClick(); })("mouseenter", function ToastComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function ToastComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        ɵngcc0.ɵɵtemplate(1, ToastComponent_div_1_Template, 2, 3, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToastComponent_div_2_Template, 7, 5, "div", 2);
        ɵngcc0.ɵɵtemplate(3, ToastComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, ToastComponent_ng_snotify_button_5_Template, 1, 1, "ng-snotify-button", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(9, _c4, "snotify-" + ctx.toast.config.type, ctx.state.animation, ctx.toast.valid === undefined ? "" : ctx.toast.valid ? "snotifyToast--valid" : "snotifyToast--invalid"))("ngStyle", ɵngcc0.ɵɵpureFunction4(13, _c5, ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms", ctx.toast.config.animation.time + "ms"));
        ɵngcc0.ɵɵattribute("role", ctx.toast.config.type === ctx.state.promptType ? "dialog" : "alert")("aria-labelledby", "snotify_" + ctx.toast.id)("aria-modal", ctx.toast.config.type === ctx.state.promptType);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toast.config.showProgressBar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.toast.config.html)("ngIfElse", _r2);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.toast.config.buttons);
    } }, directives: function () { return [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, PromptComponent, ButtonsComponent]; }, pipes: function () { return [TruncatePipe]; }, encapsulation: 2 });
ToastComponent.ctorParameters = () => [
    { type: SnotifyService }
];
__decorate([
    Input()
], ToastComponent.prototype, "toast", void 0);
__decorate([
    Output()
], ToastComponent.prototype, "stateChanged", void 0);

let KeysPipe = 
/**
 * Extract object keys pipe
 */
class KeysPipe {
    transform(value, args = null) {
        if (!value) {
            return value;
        }
        return Object.keys(value);
    }
};
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: false });

let TruncatePipe = 
/**
 * Truncate toast text pipe
 */
class TruncatePipe {
    transform(value, ...args) {
        let limit = 40;
        let trail = '...';
        if (args.length > 0) {
            limit = args.length > 0 ? parseInt(args[0], 10) : limit;
            trail = args.length > 1 ? args[1] : trail;
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
};
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "truncate", type: TruncatePipe, pure: true });

var SnotifyModule_1;
let SnotifyModule = SnotifyModule_1 = class SnotifyModule {
    static forRoot() {
        return {
            ngModule: SnotifyModule_1,
            providers: [SnotifyService]
        };
    }
};
SnotifyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SnotifyModule });
SnotifyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SnotifyModule_Factory(t) { return new (t || SnotifyModule)(); }, imports: [[CommonModule]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['SnotifyToastConfig']
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-button',
                template: "<div class=\"snotifyToast__buttons\">\r\n  <button\r\n    type=\"button\"\r\n    *ngFor=\"let button of toast.config.buttons\"\r\n    [ngClass]=\"{ 'snotifyToast__buttons--bold': button.bold }\"\r\n    (click)=\"button.action ? button.action(toast) : remove()\"\r\n  >\r\n    {{ button.text }}\r\n  </button>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, { toast: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PromptComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-prompt',
                template: "<span class=\"snotifyToast__input\" [ngClass]=\"{ 'snotifyToast__input--filled': isPromptFocused }\">\r\n  <input\r\n    (input)=\"toast.value = $event.target.value; toast.eventEmitter.next('input')\"\r\n    autofocus\r\n    class=\"snotifyToast__input__field\"\r\n    type=\"text\"\r\n    [id]=\"toast.id\"\r\n    (focus)=\"isPromptFocused = true\"\r\n    (blur)=\"isPromptFocused = !!toast.value.length\"\r\n  />\r\n  <label class=\"snotifyToast__input__label\" [for]=\"toast.id\">\r\n    <span class=\"snotifyToast__input__labelContent\">{{ toast.config.placeholder | truncate }}</span>\r\n  </label>\r\n</span>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { toast: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify',
                template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div>\r\n<div *ngFor=\"let position of notifications | keys\" class=\"snotify snotify-{{ position }}\">\r\n  <ng-snotify-toast\r\n    *ngFor=\"let notification of notifications[position] | slice: blockSizeA:blockSizeB\"\r\n    [toast]=\"notification\"\r\n    (stateChanged)=\"stateChanged($event)\"\r\n  >\r\n  </ng-snotify-toast>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastComponent, [{
        type: Component,
        args: [{
                selector: 'ng-snotify-toast',
                template: "<div\r\n  [attr.role]=\"toast.config.type === state.promptType ? 'dialog' : 'alert'\"\r\n  [attr.aria-labelledby]=\"'snotify_' + toast.id\"\r\n  [attr.aria-modal]=\"toast.config.type === state.promptType\"\r\n  [ngClass]=\"[\r\n    'snotifyToast animated',\r\n    'snotify-' + toast.config.type,\r\n    state.animation,\r\n    toast.valid === undefined ? '' : toast.valid ? 'snotifyToast--valid' : 'snotifyToast--invalid'\r\n  ]\"\r\n  [ngStyle]=\"{\r\n    '-webkit-transition': toast.config.animation.time + 'ms',\r\n    transition: toast.config.animation.time + 'ms',\r\n    '-webkit-animation-duration': toast.config.animation.time + 'ms',\r\n    'animation-duration': toast.config.animation.time + 'ms'\r\n  }\"\r\n  (animationend)=\"onExitTransitionEnd()\"\r\n  (click)=\"onClick()\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"snotifyToast__progressBar\" *ngIf=\"toast.config.showProgressBar\">\r\n    <span class=\"snotifyToast__progressBar__percentage\" [ngStyle]=\"{ width: state.progress * 100 + '%' }\"></span>\r\n  </div>\r\n  <div class=\"snotifyToast__inner\" *ngIf=\"!toast.config.html; else toastHTML\">\r\n    <div class=\"snotifyToast__title\" [attr.id]=\"'snotify_' + toast.id\" *ngIf=\"toast.title\">\r\n      {{ toast.title | truncate: toast.config.titleMaxLength }}\r\n    </div>\r\n    <div class=\"snotifyToast__body\" *ngIf=\"toast.body\">{{ toast.body | truncate: toast.config.bodyMaxLength }}</div>\r\n    <ng-snotify-prompt *ngIf=\"toast.config.type === state.promptType\" [toast]=\"toast\"> </ng-snotify-prompt>\r\n    <div\r\n      *ngIf=\"!toast.config.icon; else elseBlock\"\r\n      [ngClass]=\"['snotify-icon', toast.config.iconClass || 'snotify-icon--' + toast.config.type]\"\r\n    ></div>\r\n    <ng-template #elseBlock>\r\n      <img class=\"snotify-icon\" [src]=\"toast.config.icon\" />\r\n    </ng-template>\r\n  </div>\r\n  <ng-template #toastHTML>\r\n    <div class=\"snotifyToast__inner\" [innerHTML]=\"toast.config.html\"></div>\r\n  </ng-template>\r\n  <ng-snotify-button *ngIf=\"toast.config.buttons\" [toast]=\"toast\"></ng-snotify-button>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: SnotifyService }]; }, { stateChanged: [{
            type: Output
        }], toast: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeysPipe, [{
        type: Pipe,
        args: [{
                name: 'keys',
                pure: false
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TruncatePipe, [{
        type: Pipe,
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SnotifyModule, { declarations: function () { return [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SnotifyComponent, TruncatePipe, KeysPipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SnotifyModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SnotifyComponent, ToastComponent, TruncatePipe, ButtonsComponent, PromptComponent, KeysPipe],
                exports: [SnotifyComponent, TruncatePipe, KeysPipe]
            }]
    }], null, null); })();

/**
 * Snotify default configuration object
 */
const ToastDefaults = {
    global: {
        newOnTop: true,
        maxOnScreen: 8,
        maxAtPosition: 8,
        filterDuplicates: false
    },
    toast: {
        type: SnotifyStyle.simple,
        showProgressBar: true,
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        bodyMaxLength: 150,
        titleMaxLength: 16,
        backdrop: -1,
        icon: null,
        iconClass: null,
        html: null,
        position: SnotifyPosition.rightBottom,
        animation: { enter: 'fadeIn', exit: 'fadeOut', time: 400 }
    },
    type: {
        [SnotifyStyle.prompt]: {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            placeholder: 'Enter answer here...',
            type: SnotifyStyle.prompt
        },
        [SnotifyStyle.confirm]: {
            timeout: 0,
            closeOnClick: false,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false }
            ],
            type: SnotifyStyle.confirm
        },
        [SnotifyStyle.simple]: {
            type: SnotifyStyle.simple
        },
        [SnotifyStyle.success]: {
            type: SnotifyStyle.success
        },
        [SnotifyStyle.error]: {
            type: SnotifyStyle.error
        },
        [SnotifyStyle.warning]: {
            type: SnotifyStyle.warning
        },
        [SnotifyStyle.info]: {
            type: SnotifyStyle.info
        },
        [SnotifyStyle.async]: {
            pauseOnHover: false,
            closeOnClick: false,
            timeout: 0,
            showProgressBar: false,
            type: SnotifyStyle.async
        }
    }
};

/*
 * Public API Surface of ng-snotify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonsComponent, KeysPipe, PromptComponent, SnotifyComponent, SnotifyModule, SnotifyPosition, SnotifyService, SnotifyStyle, SnotifyToast, ToastComponent, ToastDefaults, TruncatePipe, SnotifyComponent as ɵa, SnotifyService as ɵb, TransformArgument as ɵd, SetToastType as ɵe, ToastComponent as ɵf, TruncatePipe as ɵg, ButtonsComponent as ɵh, PromptComponent as ɵi, KeysPipe as ɵj };

//# sourceMappingURL=ng-snotify.js.map