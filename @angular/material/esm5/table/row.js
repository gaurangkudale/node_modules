/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { CDK_ROW_TEMPLATE, CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/table';
var MatHeaderRowDef = /** @class */ (function (_super) {
    __extends(MatHeaderRowDef, _super);
    function MatHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderRowDef, useExisting: MatHeaderRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatHeaderRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: CdkHeaderRowDef, useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
    return MatHeaderRowDef;
}(CdkHeaderRowDef));
export { MatHeaderRowDef };
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var MatFooterRowDef = /** @class */ (function (_super) {
    __extends(MatFooterRowDef, _super);
    function MatFooterRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterRowDef, useExisting: MatFooterRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatFooterRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRowDef, [{
        type: Directive,
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: CdkFooterRowDef, useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
    return MatFooterRowDef;
}(CdkFooterRowDef));
export { MatFooterRowDef };
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
var MatRowDef = /** @class */ (function (_super) {
    __extends(MatRowDef, _super);
    function MatRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkRowDef, useExisting: MatRowDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatRowDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRowDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRowDef, [{
        type: Directive,
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: CdkRowDef, useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
    return MatRowDef;
}(CdkRowDef));
export { MatRowDef };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var MatHeaderRow = /** @class */ (function (_super) {
    __extends(MatHeaderRow, _super);
    function MatHeaderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkHeaderRow, useExisting: MatHeaderRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatHeaderRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHeaderRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatHeaderRow, [{
        type: Component,
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: CdkHeaderRow, useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
    return MatHeaderRow;
}(CdkHeaderRow));
export { MatHeaderRow };
/** Footer template container that contains the cell outlet. Adds the right class and role. */
var MatFooterRow = /** @class */ (function (_super) {
    __extends(MatFooterRow, _super);
    function MatFooterRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkFooterRow, useExisting: MatFooterRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatFooterRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatFooterRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatFooterRow, [{
        type: Component,
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matFooterRow',
                providers: [{ provide: CdkFooterRow, useExisting: MatFooterRow }]
            }]
    }], null, null); })();
    return MatFooterRow;
}(CdkFooterRow));
export { MatFooterRow };
/** Data row template container that contains the cell outlet. Adds the right class and role. */
var MatRow = /** @class */ (function (_super) {
    __extends(MatRow, _super);
    function MatRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkRow, useExisting: MatRow }]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [ɵngcc1.CdkCellOutlet], encapsulation: 2 });
var ɵMatRow_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatRow);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatRow, [{
        type: Component,
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matRow',
                providers: [{ provide: CdkRow, useExisting: MatRow }]
            }]
    }], null, null); })();
    return MatRow;
}(CdkRow));
export { MatRow };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvdGFibGUvcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFDSDtBQUVXLElBRzBCLG1DQUFlO0FBQUMsSUFMckQ7QUFDZ0I7QUFDd0MsSUFLeEQsQ0FBQzttREFQQSxTQUFTLFNBQUMsc0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjttQkFDN0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUMsQ0FBQyxzQkFDckUsTUFBTSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsK0JBQStCLENBQUMsbUJBQ3RFOzs7Ozs7Ozs7MEJBQ1E7QUFBQyxJQUVWLHNCQUFDO0FBRUQsQ0FGQyxBQVBELENBS3FDLGVBQWUsR0FFbkQ7QUFDRCxTQUhhLGVBQWU7QUFJNUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRVcsSUFHMEIsbUNBQWU7QUFBQyxJQUxyRDtBQUNnQjtBQUN3QyxJQUt4RCxDQUFDO21EQVBBLFNBQVMsU0FBQyxzQkFDVCxRQUFRLEVBQUUsbUJBQW1CO21CQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBQyxDQUFDLHNCQUNyRSxNQUFNLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwrQkFBK0Is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REEsQUFmRCxDQWM0QixNQUFNLEdBQ2pDO0FBQ0QsU0FGYSxNQUFNO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDREtfUk9XX1RFTVBMQVRFLFxuICBDZGtGb290ZXJSb3csXG4gIENka0Zvb3RlclJvd0RlZixcbiAgQ2RrSGVhZGVyUm93LFxuICBDZGtIZWFkZXJSb3dEZWYsXG4gIENka1JvdyxcbiAgQ2RrUm93RGVmXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEhlYWRlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIG1hdC10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBoZWFkZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIGhlYWRlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdEhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrSGVhZGVyUm93RGVmLCB1c2VFeGlzdGluZzogTWF0SGVhZGVyUm93RGVmfV0sXG4gIGlucHV0czogWydjb2x1bW5zOiBtYXRIZWFkZXJSb3dEZWYnLCAnc3RpY2t5OiBtYXRIZWFkZXJSb3dEZWZTdGlja3knXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0SGVhZGVyUm93RGVmIGV4dGVuZHMgQ2RrSGVhZGVyUm93RGVmIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vKipcbiAqIEZvb3RlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIG1hdC10YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBmb290ZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIGZvb3RlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hdEZvb3RlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrRm9vdGVyUm93RGVmLCB1c2VFeGlzdGluZzogTWF0Rm9vdGVyUm93RGVmfV0sXG4gIGlucHV0czogWydjb2x1bW5zOiBtYXRGb290ZXJSb3dEZWYnLCAnc3RpY2t5OiBtYXRGb290ZXJSb3dEZWZTdGlja3knXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Rm9vdGVyUm93RGVmIGV4dGVuZHMgQ2RrRm9vdGVyUm93RGVmIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xufVxuXG4vKipcbiAqIERhdGEgcm93IGRlZmluaXRpb24gZm9yIHRoZSBtYXQtdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgZGF0YSByb3cncyB0ZW1wbGF0ZSBhbmQgb3RoZXIgcHJvcGVydGllcyBzdWNoIGFzIHRoZSBjb2x1bW5zIHRvIGRpc3BsYXkgYW5kXG4gKiBhIHdoZW4gcHJlZGljYXRlIHRoYXQgZGVzY3JpYmVzIHdoZW4gdGhpcyByb3cgc2hvdWxkIGJlIHVzZWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1Jvd0RlZiwgdXNlRXhpc3Rpbmc6IE1hdFJvd0RlZn1dLFxuICBpbnB1dHM6IFsnY29sdW1uczogbWF0Um93RGVmQ29sdW1ucycsICd3aGVuOiBtYXRSb3dEZWZXaGVuJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFJvd0RlZjxUPiBleHRlbmRzIENka1Jvd0RlZjxUPiB7XG59XG5cbi8qKiBGb290ZXIgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1oZWFkZXItcm93LCB0clttYXQtaGVhZGVyLXJvd10nLFxuICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtaGVhZGVyLXJvdycsXG4gICAgJ3JvbGUnOiAncm93JyxcbiAgfSxcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ21hdEhlYWRlclJvdycsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtIZWFkZXJSb3csIHVzZUV4aXN0aW5nOiBNYXRIZWFkZXJSb3d9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0SGVhZGVyUm93IGV4dGVuZHMgQ2RrSGVhZGVyUm93IHtcbn1cblxuLyoqIEZvb3RlciB0ZW1wbGF0ZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgY2VsbCBvdXRsZXQuIEFkZHMgdGhlIHJpZ2h0IGNsYXNzIGFuZCByb2xlLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvb3Rlci1yb3csIHRyW21hdC1mb290ZXItcm93XScsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1mb290ZXItcm93JyxcbiAgICAncm9sZSc6ICdyb3cnLFxuICB9LFxuICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFsaWRhdGUtZGVjb3JhdG9yc1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWF0Rm9vdGVyUm93JyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka0Zvb3RlclJvdywgdXNlRXhpc3Rpbmc6IE1hdEZvb3RlclJvd31dLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRGb290ZXJSb3cgZXh0ZW5kcyBDZGtGb290ZXJSb3cge1xufVxuXG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1yb3csIHRyW21hdC1yb3ddJyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LXJvdycsXG4gICAgJ3JvbGUnOiAncm93JyxcbiAgfSxcbiAgLy8gU2VlIG5vdGUgb24gQ2RrVGFibGUgZm9yIGV4cGxhbmF0aW9uIG9uIHdoeSB0aGlzIHVzZXMgdGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBzdHJhdGVneS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ21hdFJvdycsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtSb3csIHVzZUV4aXN0aW5nOiBNYXRSb3d9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0Um93IGV4dGVuZHMgQ2RrUm93IHtcbn1cbiJdfQ==