/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkDragPreview<T = any> {
    templateRef: TemplateRef<T>;
    /** Context data to be added to the preview template instance. */
    data: T;
    constructor(templateRef: TemplateRef<T>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkDragPreview<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkDragPreview<any>, "ng-template[cdkDragPreview]", never, { "data": "data"; }, {}, never>;
}

//# sourceMappingURL=drag-preview.d.ts.map