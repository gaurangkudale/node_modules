import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class EqualValidator implements Validator, OnInit, OnChanges {
    equal: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EqualValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<EqualValidator, "[equal][formControlName],[equal][formControl],[equal][ngModel]", never, { "equal": "equal"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map