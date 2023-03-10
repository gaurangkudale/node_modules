/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTreeNodePadding } from '@angular/cdk/tree';
/**
 * Wrapper for the CdkTree padding with Material design styles.
 */
import * as ɵngcc0 from '@angular/core';
export declare class MatTreeNodePadding<T> extends CdkTreeNodePadding<T> {
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    level: number;
    /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
    indent: number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatTreeNodePadding<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatTreeNodePadding<any>, "[matTreeNodePadding]", never, { "level": "matTreeNodePadding"; "indent": "matTreeNodePaddingIndent"; }, {}, never>;
}

//# sourceMappingURL=padding.d.ts.map