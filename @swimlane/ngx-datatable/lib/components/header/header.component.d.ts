import { EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SortType } from '../../types/sort.type';
import { SelectionType } from '../../types/selection.type';
import { DataTableColumnDirective } from '../columns/column.directive';
import * as ɵngcc0 from '@angular/core';
export declare class DataTableHeaderComponent implements OnDestroy {
    private cd;
    sortAscendingIcon: any;
    sortDescendingIcon: any;
    scrollbarH: boolean;
    dealsWithGroup: boolean;
    targetMarkerTemplate: any;
    targetMarkerContext: any;
    set innerWidth(val: number);
    get innerWidth(): number;
    sorts: any[];
    sortType: SortType;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    reorderable: boolean;
    dragEventTarget: any;
    set headerHeight(val: any);
    get headerHeight(): any;
    set columns(val: any[]);
    get columns(): any[];
    set offsetX(val: number);
    get offsetX(): number;
    sort: EventEmitter<any>;
    reorder: EventEmitter<any>;
    resize: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    _columnsByPin: any;
    _columnGroupWidths: any;
    _innerWidth: number;
    _offsetX: number;
    _columns: any[];
    _headerHeight: string;
    _styleByGroup: {
        [prop: string]: {};
    };
    private destroyed;
    constructor(cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    onLongPressStart({ event, model }: {
        event: any;
        model: any;
    }): void;
    onLongPressEnd({ event, model }: {
        event: any;
        model: any;
    }): void;
    get headerWidth(): string;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    onColumnResized(width: number, column: DataTableColumnDirective): void;
    onColumnReordered({ prevIndex, newIndex, model }: any): void;
    onTargetChanged({ prevIndex, newIndex, initialIndex }: any): void;
    getColumn(index: number): any;
    onSort({ column, prevValue, newValue }: any): void;
    calcNewSorts(column: any, prevValue: number, newValue: number): any[];
    setStylesByGroup(): void;
    calcStylesByGroup(group: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataTableHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DataTableHeaderComponent, "datatable-header", never, { "innerWidth": "innerWidth"; "headerHeight": "headerHeight"; "columns": "columns"; "offsetX": "offsetX"; "sorts": "sorts"; "sortAscendingIcon": "sortAscendingIcon"; "sortDescendingIcon": "sortDescendingIcon"; "scrollbarH": "scrollbarH"; "dealsWithGroup": "dealsWithGroup"; "targetMarkerTemplate": "targetMarkerTemplate"; "sortType": "sortType"; "allRowsSelected": "allRowsSelected"; "selectionType": "selectionType"; "reorderable": "reorderable"; }, { "sort": "sort"; "reorder": "reorder"; "resize": "resize"; "select": "select"; "columnContextmenu": "columnContextmenu"; }, never, never>;
}

//# sourceMappingURL=header.component.d.ts.map