import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class MaxValidator implements Validator, OnInit, OnChanges {
    max: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaxValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MaxValidator, "[max][formControlName],[max][formControl],[max][ngModel]", never, { "max": "max"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map