/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTextColumn } from '@angular/cdk/table';
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
import * as ɵngcc0 from '@angular/core';
export declare class MatTextColumn<T> extends CdkTextColumn<T> {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatTextColumn<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatTextColumn<any>, "mat-text-column", never, {}, {}, never, never>;
}

//# sourceMappingURL=text-column.d.ts.map