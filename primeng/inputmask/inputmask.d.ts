import { ElementRef, OnInit, OnDestroy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/inputtext';
export declare const INPUTMASK_VALUE_ACCESSOR: any;
export declare class InputMask implements OnInit, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    private cd;
    type: string;
    slotChar: string;
    autoClear: boolean;
    style: any;
    inputId: string;
    styleClass: string;
    placeholder: string;
    size: number;
    maxlength: number;
    tabindex: string;
    title: string;
    ariaLabel: string;
    ariaRequired: boolean;
    disabled: boolean;
    readonly: boolean;
    unmask: boolean;
    name: string;
    required: boolean;
    characterPattern: string;
    autoFocus: boolean;
    autocomplete: string;
    inputViewChild: ElementRef;
    onComplete: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onInput: EventEmitter<any>;
    value: any;
    _mask: string;
    onModelChange: Function;
    onModelTouched: Function;
    input: HTMLInputElement;
    filled: boolean;
    defs: any;
    tests: any[];
    partialPosition: any;
    firstNonMaskPos: number;
    lastRequiredNonMaskPos: any;
    len: number;
    oldVal: string;
    buffer: any;
    defaultBuffer: string;
    focusText: string;
    caretTimeoutId: any;
    androidChrome: boolean;
    focused: boolean;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    get mask(): string;
    set mask(val: string);
    initMask(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    caret(first?: number, last?: number): {
        begin: any;
        end: any;
    };
    isCompleted(): boolean;
    getPlaceholder(i: number): string;
    seekNext(pos: any): any;
    seekPrev(pos: any): any;
    shiftL(begin: number, end: number): void;
    shiftR(pos: any): void;
    handleAndroidInput(e: any): void;
    onInputBlur(e: any): void;
    onKeyDown(e: any): void;
    onKeyPress(e: any): void;
    clearBuffer(start: any, end: any): void;
    writeBuffer(): void;
    checkVal(allow?: boolean): any;
    onInputFocus(event: any): void;
    onInputChange(event: any): void;
    handleInputChange(event: any): void;
    getUnmaskedValue(): string;
    updateModel(e: any): void;
    updateFilledState(): void;
    focus(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputMask, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputMask, "p-inputMask", never, { "type": "type"; "slotChar": "slotChar"; "autoClear": "autoClear"; "characterPattern": "characterPattern"; "mask": "mask"; "disabled": "disabled"; "style": "style"; "inputId": "inputId"; "styleClass": "styleClass"; "placeholder": "placeholder"; "size": "size"; "maxlength": "maxlength"; "tabindex": "tabindex"; "title": "title"; "ariaLabel": "ariaLabel"; "ariaRequired": "ariaRequired"; "readonly": "readonly"; "unmask": "unmask"; "name": "name"; "required": "required"; "autoFocus": "autoFocus"; "autocomplete": "autocomplete"; }, { "onComplete": "onComplete"; "onFocus": "onFocus"; "onBlur": "onBlur"; "onInput": "onInput"; }, never, never>;
}
export declare class InputMaskModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<InputMaskModule, [typeof InputMask], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.InputTextModule], [typeof InputMask]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<InputMaskModule>;
}

//# sourceMappingURL=inputmask.d.ts.map