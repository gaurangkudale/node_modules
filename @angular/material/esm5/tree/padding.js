import { __extends } from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTreeNodePadding } from '@angular/cdk/tree';
import { Directive, Input } from '@angular/core';
/**
 * Wrapper for the CdkTree padding with Material design styles.
 */
import * as ɵngcc0 from '@angular/core';
var MatTreeNodePadding = /** @class */ (function (_super) {
    __extends(MatTreeNodePadding, _super);
    function MatTreeNodePadding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatTreeNodePadding.propDecorators = {
        level: [{ type: Input, args: ['matTreeNodePadding',] }],
        indent: [{ type: Input, args: ['matTreeNodePaddingIndent',] }]
    };
MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) { return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding); };
MatTreeNodePadding.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTreeNodePadding, selectors: [["", "matTreeNodePadding", ""]], inputs: { level: ["matTreeNodePadding", "level"], indent: ["matTreeNodePaddingIndent", "indent"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTreeNodePadding_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTreeNodePadding);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTreeNodePadding, [{
        type: Directive,
        args: [{
                selector: '[matTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: MatTreeNodePadding }]
            }]
    }], null, { level: [{
            type: Input,
            args: ['matTreeNodePadding']
        }], indent: [{
            type: Input,
            args: ['matTreeNodePaddingIndent']
        }] }); })();
    return MatTreeNodePadding;
}(CdkTreeNodePadding));
export { MatTreeNodePadding };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RyZWUvcGFkZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9DO0FBQ0E7QUFDQSxHQUFHOztBQUNIO0FBRVcsSUFFZ0Msc0NBQXFCO0FBQUMsSUFKakU7QUFDbUI7QUFDcUMsSUFTeEQsQ0FBQyxBQVBRO0FBQUM7WUFKVCxTQUFTLFNBQUMsc0JBQ1QsUUFBUSxFQUFFLDlEQUd3Qyx3QkFHakQsS0FBSyxTQUFDLG9CQUFvQjttQkFOSyxzQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsaEVBS1kseUJBR2pDLEtBQUssU0FBQywwQkFBMEI7QUFBTTtJQVJDLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFDLENBQUMsa0JBQzVFOzs7Ozs7Ozs7Ozs7Ozs7b0JBTzhDO0FBQUMsSUFDaEQseUJBQUM7QUFDQSxDQURBLEFBWEQsQ0FJMkMsa0JBQWtCLEdBTzVEO0FBQ0QsU0FSYSxrQkFBa0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtDZGtUcmVlTm9kZVBhZGRpbmd9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogV3JhcHBlciBmb3IgdGhlIENka1RyZWUgcGFkZGluZyB3aXRoIE1hdGVyaWFsIGRlc2lnbiBzdHlsZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRUcmVlTm9kZVBhZGRpbmddJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1RyZWVOb2RlUGFkZGluZywgdXNlRXhpc3Rpbmc6IE1hdFRyZWVOb2RlUGFkZGluZ31dXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRyZWVOb2RlUGFkZGluZzxUPiBleHRlbmRzIENka1RyZWVOb2RlUGFkZGluZzxUPiB7XG5cbiAgLyoqIFRoZSBsZXZlbCBvZiBkZXB0aCBvZiB0aGUgdHJlZSBub2RlLiBUaGUgcGFkZGluZyB3aWxsIGJlIGBsZXZlbCAqIGluZGVudGAgcGl4ZWxzLiAqL1xuICBASW5wdXQoJ21hdFRyZWVOb2RlUGFkZGluZycpIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBpbmRlbnQgZm9yIGVhY2ggbGV2ZWwuIERlZmF1bHQgbnVtYmVyIDQwcHggZnJvbSBtYXRlcmlhbCBkZXNpZ24gbWVudSBzdWItbWVudSBzcGVjLiAqL1xuICBASW5wdXQoJ21hdFRyZWVOb2RlUGFkZGluZ0luZGVudCcpIGluZGVudDogbnVtYmVyO1xufVxuIl19