import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class RangeValidator implements Validator, OnInit, OnChanges {
    range: [number];
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RangeValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RangeValidator, "[range][formControlName],[range][formControl],[range][ngModel]", never, { "range": "range"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map