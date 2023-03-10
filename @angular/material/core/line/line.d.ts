/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, QueryList } from '@angular/core';
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../common-behaviors/common-module';
export declare class MatLine {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatLine, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatLine, "[mat-line], [matLine]", never, {}, {}, never>;
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
export declare function setLines(lines: QueryList<MatLine>, element: ElementRef<HTMLElement>): void;
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 * @deprecated Use `setLines` instead.
 * @breaking-change 8.0.0
 */
export declare class MatLineSetter {
    constructor(lines: QueryList<MatLine>, element: ElementRef<HTMLElement>);
}
export declare class MatLineModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<MatLineModule, [typeof MatLine], [typeof ɵngcc1.MatCommonModule], [typeof MatLine, typeof ɵngcc1.MatCommonModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<MatLineModule>;
}

//# sourceMappingURL=line.d.ts.map