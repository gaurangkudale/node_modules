import { SnotifyService } from '../../services/snotify.service';
import { SnotifyToast } from '../../models/snotify-toast.model';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonsComponent {
    private service;
    /**
     * Get buttons Array
     */
    toast: SnotifyToast;
    constructor(service: SnotifyService);
    /**
     * remove toast
     */
    remove(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ButtonsComponent, "ng-snotify-button", never, { "toast": "toast"; }, {}, never, never>;
}

//# sourceMappingURL=buttons.component.d.ts.map