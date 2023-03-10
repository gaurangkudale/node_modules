import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class RangeLengthValidator implements Validator, OnInit, OnChanges {
    rangeLength: [number];
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RangeLengthValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RangeLengthValidator, "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]", never, { "rangeLength": "rangeLength"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map