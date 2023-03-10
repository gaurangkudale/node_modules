import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DataTablePagerComponent {
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    set size(val: number);
    get size(): number;
    set count(val: number);
    get count(): number;
    set page(val: number);
    get page(): number;
    get totalPages(): number;
    change: EventEmitter<any>;
    _count: number;
    _page: number;
    _size: number;
    pages: any;
    canPrevious(): boolean;
    canNext(): boolean;
    prevPage(): void;
    nextPage(): void;
    selectPage(page: number): void;
    calcPages(page?: number): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTablePagerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTablePagerComponent, "datatable-pager", never, { "size": "size"; "count": "count"; "page": "page"; "pagerLeftArrowIcon": "pagerLeftArrowIcon"; "pagerRightArrowIcon": "pagerRightArrowIcon"; "pagerPreviousIcon": "pagerPreviousIcon"; "pagerNextIcon": "pagerNextIcon"; }, { "change": "change"; }, never, never>;
}

//# sourceMappingURL=pager.component.d.ts.map