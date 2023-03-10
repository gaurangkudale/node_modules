import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class UUIDValidator implements Validator, OnInit, OnChanges {
    uuid: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UUIDValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<UUIDValidator, "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]", never, { "uuid": "uuid"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map