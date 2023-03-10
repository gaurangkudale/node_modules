import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class ArrayLengthValidator implements Validator, OnInit, OnChanges {
    arrayLength: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ArrayLengthValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ArrayLengthValidator, "[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]", never, { "arrayLength": "arrayLength"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map