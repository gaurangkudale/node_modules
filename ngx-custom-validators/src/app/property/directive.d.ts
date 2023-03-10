import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class PropertyValidator implements Validator, OnInit, OnChanges {
    property: string;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PropertyValidator, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PropertyValidator, "[property][formControlName],[property][formControl],[property][ngModel]", never, { "property": "property"; }, {}, never>;
}

//# sourceMappingURL=directive.d.ts.map