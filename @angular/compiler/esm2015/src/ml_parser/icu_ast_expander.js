/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ParseError } from '../parse_util';
import * as html from './ast';
// http://cldr.unicode.org/index/cldr-spec/plural-rules
const PLURAL_CASES = ['zero', 'one', 'two', 'few', 'many', 'other'];
/**
 * Expands special forms into elements.
 *
 * For example,
 *
 * ```
 * { messages.length, plural,
 *   =0 {zero}
 *   =1 {one}
 *   other {more than one}
 * }
 * ```
 *
 * will be expanded into
 *
 * ```
 * <ng-container [ngPlural]="messages.length">
 *   <ng-template ngPluralCase="=0">zero</ng-template>
 *   <ng-template ngPluralCase="=1">one</ng-template>
 *   <ng-template ngPluralCase="other">more than one</ng-template>
 * </ng-container>
 * ```
 */
export function expandNodes(nodes) {
    const expander = new _Expander();
    return new ExpansionResult(html.visitAll(expander, nodes), expander.isExpanded, expander.errors);
}
export class ExpansionResult {
    constructor(nodes, expanded, errors) {
        this.nodes = nodes;
        this.expanded = expanded;
        this.errors = errors;
    }
}
export class ExpansionError extends ParseError {
    constructor(span, errorMsg) {
        super(span, errorMsg);
    }
}
/**
 * Expand expansion forms (plural, select) to directives
 *
 * @internal
 */
class _Expander {
    constructor() {
        this.isExpanded = false;
        this.errors = [];
    }
    visitElement(element, context) {
        return new html.Element(element.name, element.attrs, html.visitAll(this, element.children), element.sourceSpan, element.startSourceSpan, element.endSourceSpan);
    }
    visitAttribute(attribute, context) {
        return attribute;
    }
    visitText(text, context) {
        return text;
    }
    visitComment(comment, context) {
        return comment;
    }
    visitExpansion(icu, context) {
        this.isExpanded = true;
        return icu.type == 'plural' ? _expandPluralForm(icu, this.errors) :
            _expandDefaultForm(icu, this.errors);
    }
    visitExpansionCase(icuCase, context) {
        throw new Error('Should not be reached');
    }
}
// Plural forms are expanded to `NgPlural` and `NgPluralCase`s
function _expandPluralForm(ast, errors) {
    const children = ast.cases.map(c => {
        if (PLURAL_CASES.indexOf(c.value) == -1 && !c.value.match(/^=\d+$/)) {
            errors.push(new ExpansionError(c.valueSourceSpan, `Plural cases should be "=<number>" or one of ${PLURAL_CASES.join(', ')}`));
        }
        const expansionResult = expandNodes(c.expression);
        errors.push(...expansionResult.errors);
        return new html.Element(`ng-template`, [new html.Attribute('ngPluralCase', `${c.value}`, c.valueSourceSpan)], expansionResult.nodes, c.sourceSpan, c.sourceSpan, c.sourceSpan);
    });
    const switchAttr = new html.Attribute('[ngPlural]', ast.switchValue, ast.switchValueSourceSpan);
    return new html.Element('ng-container', [switchAttr], children, ast.sourceSpan, ast.sourceSpan, ast.sourceSpan);
}
// ICU messages (excluding plural form) are expanded to `NgSwitch`  and `NgSwitchCase`s
function _expandDefaultForm(ast, errors) {
    const children = ast.cases.map(c => {
        const expansionResult = expandNodes(c.expression);
        errors.push(...expansionResult.errors);
        if (c.value === 'other') {
            // other is the default case when no values match
            return new html.Element(`ng-template`, [new html.Attribute('ngSwitchDefault', '', c.valueSourceSpan)], expansionResult.nodes, c.sourceSpan, c.sourceSpan, c.sourceSpan);
        }
        return new html.Element(`ng-template`, [new html.Attribute('ngSwitchCase', `${c.value}`, c.valueSourceSpan)], expansionResult.nodes, c.sourceSpan, c.sourceSpan, c.sourceSpan);
    });
    const switchAttr = new html.Attribute('[ngSwitch]', ast.switchValue, ast.switchValueSourceSpan);
    return new html.Element('ng-container', [switchAttr], children, ast.sourceSpan, ast.sourceSpan, ast.sourceSpan);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWN1X2FzdF9leHBhbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIvaWN1X2FzdF9leHBhbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sQ0FBQztBQUU5Qix1REFBdUQ7QUFDdkQsTUFBTSxZQUFZLEdBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFrQjtJQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkcsQ0FBQztBQUVELE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW1CLEtBQWtCLEVBQVMsUUFBaUIsRUFBUyxNQUFvQjtRQUF6RSxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBRyxDQUFDO0NBQ2pHO0FBRUQsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQzVDLFlBQVksSUFBcUIsRUFBRSxRQUFnQjtRQUNqRCxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFNBQVM7SUFBZjtRQUNF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LEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFyc2VFcnJvciwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2FzdCc7XG5cbi8vIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL2luZGV4L2NsZHItc3BlYy9wbHVyYWwtcnVsZXNcbmNvbnN0IFBMVVJBTF9DQVNFUzogc3RyaW5nW10gPSBbJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueScsICdvdGhlciddO1xuXG4vKipcbiAqIEV4cGFuZHMgc3BlY2lhbCBmb3JtcyBpbnRvIGVsZW1lbnRzLlxuICpcbiAqIEZvciBleGFtcGxlLFxuICpcbiAqIGBgYFxuICogeyBtZXNzYWdlcy5sZW5ndGgsIHBsdXJhbCxcbiAqICAgPTAge3plcm99XG4gKiAgID0xIHtvbmV9XG4gKiAgIG90aGVyIHttb3JlIHRoYW4gb25lfVxuICogfVxuICogYGBgXG4gKlxuICogd2lsbCBiZSBleHBhbmRlZCBpbnRvXG4gKlxuICogYGBgXG4gKiA8bmctY29udGFpbmVyIFtuZ1BsdXJhbF09XCJtZXNzYWdlcy5sZW5ndGhcIj5cbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIj0wXCI+emVybzwvbmctdGVtcGxhdGU+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MVwiPm9uZTwvbmctdGVtcGxhdGU+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvdGhlclwiPm1vcmUgdGhhbiBvbmU8L25nLXRlbXBsYXRlPlxuICogPC9uZy1jb250YWluZXI+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZE5vZGVzKG5vZGVzOiBodG1sLk5vZGVbXSk6IEV4cGFuc2lvblJlc3VsdCB7XG4gIGNvbnN0IGV4cGFuZGVyID0gbmV3IF9FeHBhbmRlcigpO1xuICByZXR1cm4gbmV3IEV4cGFuc2lvblJlc3VsdChodG1sLnZpc2l0QWxsKGV4cGFuZGVyLCBub2RlcyksIGV4cGFuZGVyLmlzRXhwYW5kZWQsIGV4cGFuZGVyLmVycm9ycyk7XG59XG5cbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25SZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9kZXM6IGh0bWwuTm9kZVtdLCBwdWJsaWMgZXhwYW5kZWQ6IGJvb2xlYW4sIHB1YmxpYyBlcnJvcnM6IFBhcnNlRXJyb3JbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbkVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgZXJyb3JNc2c6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIGVycm9yTXNnKTtcbiAgfVxufVxuXG4vKipcbiAqIEV4cGFuZCBleHBhbnNpb24gZm9ybXMgKHBsdXJhbCwgc2VsZWN0KSB0byBkaXJlY3RpdmVzXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIF9FeHBhbmRlciBpbXBsZW1lbnRzIGh0bWwuVmlzaXRvciB7XG4gIGlzRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JzOiBQYXJzZUVycm9yW10gPSBbXTtcblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgICBlbGVtZW50Lm5hbWUsIGVsZW1lbnQuYXR0cnMsIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5jaGlsZHJlbiksIGVsZW1lbnQuc291cmNlU3BhbixcbiAgICAgICAgZWxlbWVudC5zdGFydFNvdXJjZVNwYW4sIGVsZW1lbnQuZW5kU291cmNlU3Bhbik7XG4gIH1cblxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmlzaXRDb21tZW50KGNvbW1lbnQ6IGh0bWwuQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29tbWVudDtcbiAgfVxuXG4gIHZpc2l0RXhwYW5zaW9uKGljdTogaHRtbC5FeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gaWN1LnR5cGUgPT0gJ3BsdXJhbCcgPyBfZXhwYW5kUGx1cmFsRm9ybShpY3UsIHRoaXMuZXJyb3JzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4cGFuZERlZmF1bHRGb3JtKGljdSwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGljdUNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBub3QgYmUgcmVhY2hlZCcpO1xuICB9XG59XG5cbi8vIFBsdXJhbCBmb3JtcyBhcmUgZXhwYW5kZWQgdG8gYE5nUGx1cmFsYCBhbmQgYE5nUGx1cmFsQ2FzZWBzXG5mdW5jdGlvbiBfZXhwYW5kUGx1cmFsRm9ybShhc3Q6IGh0bWwuRXhwYW5zaW9uLCBlcnJvcnM6IFBhcnNlRXJyb3JbXSk6IGh0bWwuRWxlbWVudCB7XG4gIGNvbnN0IGNoaWxkcmVuID0gYXN0LmNhc2VzLm1hcChjID0+IHtcbiAgICBpZiAoUExVUkFMX0NBU0VTLmluZGV4T2YoYy52YWx1ZSkgPT0gLTEgJiYgIWMudmFsdWUubWF0Y2goL149XFxkKyQvKSkge1xuICAgICAgZXJyb3JzLnB1c2gobmV3IEV4cGFuc2lvbkVycm9yKFxuICAgICAgICAgIGMudmFsdWVTb3VyY2VTcGFuLFxuICAgICAgICAgIGBQbHVyYWwgY2FzZXMgc2hvdWxkIGJlIFwiPTxudW1iZXI+XCIgb3Igb25lIG9mICR7UExVUkFMX0NBU0VTLmpvaW4oJywgJyl9YCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGFuc2lvblJlc3VsdCA9IGV4cGFuZE5vZGVzKGMuZXhwcmVzc2lvbik7XG4gICAgZXJyb3JzLnB1c2goLi4uZXhwYW5zaW9uUmVzdWx0LmVycm9ycyk7XG5cbiAgICByZXR1cm4gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgYG5nLXRlbXBsYXRlYCwgW25ldyBodG1sLkF0dHJpYnV0ZSgnbmdQbHVyYWxDYXNlJywgYCR7Yy52YWx1ZX1gLCBjLnZhbHVlU291cmNlU3BhbildLFxuICAgICAgICBleHBhbnNpb25SZXN1bHQubm9kZXMsIGMuc291cmNlU3BhbiwgYy5zb3VyY2VTcGFuLCBjLnNvdXJjZVNwYW4pO1xuICB9KTtcbiAgY29uc3Qgc3dpdGNoQXR0ciA9IG5ldyBodG1sLkF0dHJpYnV0ZSgnW25nUGx1cmFsXScsIGFzdC5zd2l0Y2hWYWx1ZSwgYXN0LnN3aXRjaFZhbHVlU291cmNlU3Bhbik7XG4gIHJldHVybiBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgJ25nLWNvbnRhaW5lcicsIFtzd2l0Y2hBdHRyXSwgY2hpbGRyZW4sIGFzdC5zb3VyY2VTcGFuLCBhc3Quc291cmNlU3BhbiwgYXN0LnNvdXJjZVNwYW4pO1xufVxuXG4vLyBJQ1UgbWVzc2FnZXMgKGV4Y2x1ZGluZyBwbHVyYWwgZm9ybSkgYXJlIGV4cGFuZGVkIHRvIGBOZ1N3aXRjaGAgIGFuZCBgTmdTd2l0Y2hDYXNlYHNcbmZ1bmN0aW9uIF9leHBhbmREZWZhdWx0Rm9ybShhc3Q6IGh0bWwuRXhwYW5zaW9uLCBlcnJvcnM6IFBhcnNlRXJyb3JbXSk6IGh0bWwuRWxlbWVudCB7XG4gIGNvbnN0IGNoaWxkcmVuID0gYXN0LmNhc2VzLm1hcChjID0+IHtcbiAgICBjb25zdCBleHBhbnNpb25SZXN1bHQgPSBleHBhbmROb2RlcyhjLmV4cHJlc3Npb24pO1xuICAgIGVycm9ycy5wdXNoKC4uLmV4cGFuc2lvblJlc3VsdC5lcnJvcnMpO1xuXG4gICAgaWYgKGMudmFsdWUgPT09ICdvdGhlcicpIHtcbiAgICAgIC8vIG90aGVyIGlzIHRoZSBkZWZhdWx0IGNhc2Ugd2hlbiBubyB2YWx1ZXMgbWF0Y2hcbiAgICAgIHJldHVybiBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgICAgIGBuZy10ZW1wbGF0ZWAsIFtuZXcgaHRtbC5BdHRyaWJ1dGUoJ25nU3dpdGNoRGVmYXVsdCcsICcnLCBjLnZhbHVlU291cmNlU3BhbildLFxuICAgICAgICAgIGV4cGFuc2lvblJlc3VsdC5ub2RlcywgYy5zb3VyY2VTcGFuLCBjLnNvdXJjZVNwYW4sIGMuc291cmNlU3Bhbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBodG1sLkVsZW1lbnQoXG4gICAgICAgIGBuZy10ZW1wbGF0ZWAsIFtuZXcgaHRtbC5BdHRyaWJ1dGUoJ25nU3dpdGNoQ2FzZScsIGAke2MudmFsdWV9YCwgYy52YWx1ZVNvdXJjZVNwYW4pXSxcbiAgICAgICAgZXhwYW5zaW9uUmVzdWx0Lm5vZGVzLCBjLnNvdXJjZVNwYW4sIGMuc291cmNlU3BhbiwgYy5zb3VyY2VTcGFuKTtcbiAgfSk7XG4gIGNvbnN0IHN3aXRjaEF0dHIgPSBuZXcgaHRtbC5BdHRyaWJ1dGUoJ1tuZ1N3aXRjaF0nLCBhc3Quc3dpdGNoVmFsdWUsIGFzdC5zd2l0Y2hWYWx1ZVNvdXJjZVNwYW4pO1xuICByZXR1cm4gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICduZy1jb250YWluZXInLCBbc3dpdGNoQXR0cl0sIGNoaWxkcmVuLCBhc3Quc291cmNlU3BhbiwgYXN0LnNvdXJjZVNwYW4sIGFzdC5zb3VyY2VTcGFuKTtcbn1cbiJdfQ==