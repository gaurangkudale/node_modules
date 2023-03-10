import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class GreaterThanEqualValidator implements Validator, OnInit, OnChanges {
    gte: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GreaterThanEqualValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<GreaterThanEqualValidator, "[gte][formControlName],[gte][formControl],[gte][ngModel]", never, { "gte": "gte"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map