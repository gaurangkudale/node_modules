import { EventEmitter } from '@angular/core';
import { DatatableFooterDirective } from './footer.directive';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableFooterComponent {
    footerHeight: number;
    rowCount: number;
    pageSize: number;
    offset: number;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    footerTemplate: DatatableFooterDirective;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    get isVisible(): boolean;
    get curPage(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableFooterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableFooterComponent, "datatable-footer", never, { "selectedCount": "selectedCount"; "footerHeight": "footerHeight"; "rowCount": "rowCount"; "pageSize": "pageSize"; "offset": "offset"; "pagerLeftArrowIcon": "pagerLeftArrowIcon"; "pagerRightArrowIcon": "pagerRightArrowIcon"; "pagerPreviousIcon": "pagerPreviousIcon"; "pagerNextIcon": "pagerNextIcon"; "totalMessage": "totalMessage"; "footerTemplate": "footerTemplate"; "selectedMessage": "selectedMessage"; }, { "page": "page"; }, never, never>;
}

//# sourceMappingURL=footer.component.d.ts.map