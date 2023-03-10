import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class MinValidator implements Validator, OnInit, OnChanges {
    min: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MinValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MinValidator, "[min][formControlName],[min][formControl],[min][ngModel]", never, { "min": "min"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map