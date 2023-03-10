import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class LessThanValidator implements Validator, OnInit, OnChanges {
    lt: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LessThanValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LessThanValidator, "[lt][formControlName],[lt][formControl],[lt][ngModel]", never, { "lt": "lt"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map