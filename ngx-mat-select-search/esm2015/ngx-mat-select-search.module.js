/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';
export const MatSelectSearchVersion = '3.1.4';
let NgxMatSelectSearchModule = class NgxMatSelectSearchModule {
};
NgxMatSelectSearchModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatTooltipModule
        ],
        declarations: [
            MatSelectSearchComponent,
            MatSelectSearchClearDirective
        ],
        exports: [
            MatSelectSearchComponent,
            MatSelectSearchClearDirective
        ]
    })
], NgxMatSelectSearchModule);
export { NgxMatSelectSearchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1zZWxlY3Qtc2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXQtc2VsZWN0LXNlYXJjaC8iLCJzb3VyY2VzIjpbIm5neC1tYXQtc2VsZWN0LXNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUM7QUFzQjlDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0NBQUksQ0FBQTtBQUE1Qix3QkFBd0I7SUFuQnBDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2Isd0JBQXdCO1lBQ3hCLGdCQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRTtZQUNaLHdCQUF3QjtZQUN4Qiw2QkFBNkI7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDUCx3QkFBd0I7WUFDeEIsNkJBQTZCO1NBQzlCO0tBQ0YsQ0FBQztHQUNXLHdCQUF3QixDQUFJO1NBQTVCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggQml0aG9zdCBHbWJIIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL21hdC1zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LXNlbGVjdC1zZWFyY2gtY2xlYXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYXRTZWxlY3RTZWFyY2hWZXJzaW9uID0gJzMuMS40JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdFNlbGVjdFNlYXJjaENvbXBvbmVudCxcclxuICAgIE1hdFNlbGVjdFNlYXJjaENsZWFyRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNYXRTZWxlY3RTZWFyY2hDb21wb25lbnQsXHJcbiAgICBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSB7IH1cclxuIl19