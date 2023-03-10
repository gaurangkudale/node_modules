import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class LessThanEqualValidator implements Validator, OnInit, OnChanges {
    lte: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LessThanEqualValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LessThanEqualValidator, "[lte][formControlName],[lte][formControl],[lte][ngModel]", never, { "lte": "lte"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map