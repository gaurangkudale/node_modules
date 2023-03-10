import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class GreaterThanValidator implements Validator, OnInit, OnChanges {
    gt: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GreaterThanValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<GreaterThanValidator, "[gt][formControlName],[gt][formControl],[gt][ngModel]", never, { "gt": "gt"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map