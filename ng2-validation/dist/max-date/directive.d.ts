import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class MaxDateValidator implements Validator, OnInit, OnChanges {
    maxDate: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaxDateValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MaxDateValidator, "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]", never, { "maxDate": "maxDate"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map