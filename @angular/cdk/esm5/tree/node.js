/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, TemplateRef } from '@angular/core';
/** Context provided to the tree node component. */
import * as ɵngcc0 from '@angular/core';
var CdkTreeNodeOutletContext = /** @class */ (function () {
    function CdkTreeNodeOutletContext(data) {
        this.$implicit = data;
    }
    return CdkTreeNodeOutletContext;
}());
export { CdkTreeNodeOutletContext };
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */
var CdkTreeNodeDef = /** @class */ (function () {
    /** @docs-private */
    function CdkTreeNodeDef(template) {
        this.template = template;
    }
    /** @nocollapse */
    CdkTreeNodeDef.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) { return new (t || CdkTreeNodeDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkTreeNodeDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodeDef, selectors: [["", "cdkTreeNodeDef", ""]], inputs: { when: ["cdkTreeNodeDefWhen", "when"] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNodeDef, [{
        type: Directive,
        args: [{
                selector: '[cdkTreeNodeDef]',
                inputs: [
                    'when: cdkTreeNodeDefWhen'
                ]
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
    return CdkTreeNodeDef;
}());
export { CdkTreeNodeDef };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3JELG1EQUFtRDs7QUFDbkQ7QUFDaUIsSUFZZixrQ0FBWSxJQUFPO0FBQ3JCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFBQSwrQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVLLElBY0gsb0JBQW9CO0FBQ3RCLElBQUUsd0JBQW1CLFFBQTBCO0FBQUksUUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxJQUFFLENBQUMsQUFYMUM7QUFBQzsyQkFOVCxTQUFTLFNBQUMsN0NBT1g7UUFORSxRQUFRLEVBQUUsbEJBT3lDLGdCQWxDbEMsV0FBVztNQTJCQSxOQTNCRztrQkE0Qi9CLE1BQU0sRUFBRSwwQkFDTiwwQkFBMEIsc0JBQzNCLG1CQUNGOzs7Ozs7Ozs7OzRFQS9CeUM7QUFBQyxJQTRDM0MscUJBQUM7QUFDQSxDQURBLEFBbEJELElBa0JDO0FBQ0QsU0FiYSxjQUFjO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgdHJlZSBub2RlIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUcmVlTm9kZU91dGxldENvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXG4gICRpbXBsaWNpdDogVDtcblxuICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSBub2RlLiAqL1xuICBpbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBub2RlIGRlZmluaXRpb24gZm9yIHRoZSBDZGtUcmVlLlxuICogQ2FwdHVyZXMgdGhlIG5vZGUncyB0ZW1wbGF0ZSBhbmQgYSB3aGVuIHByZWRpY2F0ZSB0aGF0IGRlc2NyaWJlcyB3aGVuIHRoaXMgbm9kZSBzaG91bGQgYmUgdXNlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RyZWVOb2RlRGVmXScsXG4gIGlucHV0czogW1xuICAgICd3aGVuOiBjZGtUcmVlTm9kZURlZldoZW4nXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOb2RlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoaXMgbm9kZSB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHByb3ZpZGVkIG5vZGVcbiAgICogZGF0YSBhbmQgaW5kZXguIElmIGxlZnQgdW5kZWZpbmVkLCB0aGlzIG5vZGUgd2lsbCBiZSBjb25zaWRlcmVkIHRoZSBkZWZhdWx0IG5vZGUgdGVtcGxhdGUgdG9cbiAgICogdXNlIHdoZW4gbm8gb3RoZXIgd2hlbiBmdW5jdGlvbnMgcmV0dXJuIHRydWUgZm9yIHRoZSBkYXRhLlxuICAgKiBGb3IgZXZlcnkgbm9kZSwgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG9cbiAgICogZGVmYXVsdC5cbiAgICovXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG4iXX0=