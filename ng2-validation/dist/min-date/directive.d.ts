import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class MinDateValidator implements Validator, OnInit, OnChanges {
    minDate: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MinDateValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MinDateValidator, "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]", never, { "minDate": "minDate"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map