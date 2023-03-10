import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillEditorComponent } from './quill-editor.component';
import { QUILL_CONFIG_TOKEN } from './quill-editor.interfaces';
import { QuillViewHTMLComponent } from './quill-view-html.component';
import { QuillViewComponent } from './quill-view.component';
import { QuillService } from './quill.service';
import * as ɵngcc0 from '@angular/core';
export class QuillModule {
    static forRoot(config) {
        return {
            ngModule: QuillModule,
            providers: [
                {
                    provide: QUILL_CONFIG_TOKEN,
                    useValue: config
                }
            ]
        };
    }
}
QuillModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: QuillModule });
QuillModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function QuillModule_Factory(t) { return new (t || QuillModule)(); }, providers: [QuillService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(QuillModule, { declarations: function () { return [QuillEditorComponent,
        QuillViewComponent,
        QuillViewHTMLComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    QuillEditorComponent,
                    QuillViewComponent,
                    QuillViewHTMLComponent
                ],
                exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
                imports: [CommonModule],
                providers: [QuillService]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcXVpbGwvc3JjL2xpYi9xdWlsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFBO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBZSxNQUFNLDJCQUEyQixDQUFBO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTs7QUFZOUMsTUFBTSxPQUFPLFdBQVc7QUFDeEIsSUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW9CO0FBQUksUUFDckMsT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLFdBQVc7QUFDM0IsWUFBTSxTQUFTLEVBQUU7QUFDakIsZ0JBQVE7QUFDUixvQkFBVSxPQUFPLEVBQUUsa0JBQWtCO0FBQ3JDLG9CQUFVLFFBQVEsRUFBRSxNQUFNO0FBQzFCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUssQ0FBQTtBQUNMLElBQUUsQ0FBQztBQUNIO3VDQXRCQyxRQUFRLFNBQUM7T0FDUixZQUFZLEVBQUUsc0JBQ1osb0JBQW9CLHNCQUNwQixrQkFBa0Isc0JBQ2xCLHNCQUFzQixrQkFDdkI7RUFDRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQyxrQkFDM0UsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7VUFDMUI7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IFF1aWxsRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9xdWlsbC1lZGl0b3IuY29tcG9uZW50J1xuaW1wb3J0IHsgUVVJTExfQ09ORklHX1RPS0VOLCBRdWlsbENvbmZpZyB9IGZyb20gJy4vcXVpbGwtZWRpdG9yLmludGVyZmFjZXMnXG5pbXBvcnQgeyBRdWlsbFZpZXdIVE1MQ29tcG9uZW50IH0gZnJvbSAnLi9xdWlsbC12aWV3LWh0bWwuY29tcG9uZW50J1xuaW1wb3J0IHsgUXVpbGxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9xdWlsbC12aWV3LmNvbXBvbmVudCdcbmltcG9ydCB7IFF1aWxsU2VydmljZSB9IGZyb20gJy4vcXVpbGwuc2VydmljZSdcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUXVpbGxFZGl0b3JDb21wb25lbnQsXG4gICAgUXVpbGxWaWV3Q29tcG9uZW50LFxuICAgIFF1aWxsVmlld0hUTUxDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1F1aWxsRWRpdG9yQ29tcG9uZW50LCBRdWlsbFZpZXdDb21wb25lbnQsIFF1aWxsVmlld0hUTUxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbUXVpbGxTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFF1aWxsQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxRdWlsbE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUXVpbGxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFFVSUxMX0NPTkZJR19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==