import { EventEmitter, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DatatableGroupHeaderDirective {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    rowHeight: number | ((group?: any, index?: number) => number);
    _templateInput: TemplateRef<any>;
    _templateQuery: TemplateRef<any>;
    get template(): TemplateRef<any>;
    /**
     * Track toggling of group visibility
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group: any): void;
    /**
     * Expand all groups
     */
    expandAllGroups(): void;
    /**
     * Collapse all groups
     */
    collapseAllGroups(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatatableGroupHeaderDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DatatableGroupHeaderDirective, "ngx-datatable-group-header", never, { "rowHeight": "rowHeight"; "_templateInput": "template"; }, { "toggle": "toggle"; }, ["_templateQuery"]>;
}

//# sourceMappingURL=body-group-header.directive.d.ts.map