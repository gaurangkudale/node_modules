import { OnChanges, PipeTransform, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface ISummaryColumn {
    summaryFunc?: (cells: any[]) => any;
    summaryTemplate?: TemplateRef<any>;
    prop: string;
    pipe?: PipeTransform;
}
export declare class DataTableSummaryRowComponent implements OnChanges {
    rows: any[];
    columns: ISummaryColumn[];
    rowHeight: number;
    offsetX: number;
    innerWidth: number;
    _internalColumns: ISummaryColumn[];
    summaryRow: any;
    ngOnChanges(): void;
    private updateInternalColumns;
    private updateValues;
    private getSummaryFunction;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableSummaryRowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableSummaryRowComponent, "datatable-summary-row", never, { "rows": "rows"; "columns": "columns"; "rowHeight": "rowHeight"; "offsetX": "offsetX"; "innerWidth": "innerWidth"; }, {}, never, never>;
}

//# sourceMappingURL=summary-row.component.d.ts.map