import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Toast } from './toast.component';
import { DefaultNoComponentGlobalConfig, TOAST_CONFIG, } from './toastr-config';
import * as ɵngcc0 from '@angular/core';
export const DefaultGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), { toastComponent: Toast });
export class ToastrModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastrModule });
ToastrModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastrModule_Factory(t) { return new (t || ToastrModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastrModule, { declarations: function () { return [Toast]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Toast]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastrModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [Toast],
                exports: [Toast],
                entryComponents: [Toast]
            }]
    }], null, null); })();
export class ToastrComponentlessModule {
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoComponentGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrComponentlessModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ToastrComponentlessModule });
ToastrComponentlessModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ToastrComponentlessModule_Factory(t) { return new (t || ToastrComponentlessModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToastrComponentlessModule, { imports: function () { return [CommonModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ToastrComponentlessModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi90b2FzdHIvdG9hc3RyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFDTCw4QkFBOEIsRUFFOUIsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7O0FBRXpCLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixtQ0FDM0IsOEJBQThCLEtBQ2pDLGNBQWMsRUFBRSxLQUFLLEdBQ3RCLENBQUM7QUFRRixNQUFNLE9BQU8sWUFBWTtBQUN6QixJQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBZ0MsRUFBRTtBQUFJLFFBQ25ELE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxZQUFZO0FBQzVCLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRO0FBQ1Isb0JBQVUsT0FBTyxFQUFFLFlBQVk7QUFDL0Isb0JBQVUsUUFBUSxFQUFFO0FBQ3BCLHdCQUFZLE9BQU8sRUFBRSxtQkFBbUI7QUFDeEMsd0JBQVksTUFBTTtBQUNsQixxQkFBVztBQUNYLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIO3dDQXJCQyxRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUNoQixlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFDekI7Ozs7Ozs7OzswQkFDSTtBQW9CTCxNQUFNLE9BQU8seUJBQXlCO0FBQ3RDLElBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFnQyxFQUFFO0FBQUksUUFDbkQsT0FBTztBQUNYLFlBQU0sUUFBUSxFQUFFLFlBQVk7QUFDNUIsWUFBTSxTQUFTLEVBQUU7QUFDakIsZ0JBQVE7QUFDUixvQkFBVSxPQUFPLEVBQUUsWUFBWTtBQUMvQixvQkFBVSxRQUFRLEVBQUU7QUFDcEIsd0JBQVksT0FBTyxFQUFFLDhCQUE4QjtBQUNuRCx3QkFBWSxNQUFNO0FBQ2xCLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0g7cURBbEJDLFFBQVEsU0FBQyxrQkFDUjtBQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFDeEI7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIERlZmF1bHROb0NvbXBvbmVudEdsb2JhbENvbmZpZyxcbiAgR2xvYmFsQ29uZmlnLFxuICBUT0FTVF9DT05GSUcsXG59IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0R2xvYmFsQ29uZmlnOiBHbG9iYWxDb25maWcgPSB7XG4gIC4uLkRlZmF1bHROb0NvbXBvbmVudEdsb2JhbENvbmZpZyxcbiAgdG9hc3RDb21wb25lbnQ6IFRvYXN0LFxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0XSxcbiAgZXhwb3J0czogW1RvYXN0XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3RdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdHJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8R2xvYmFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUb2FzdHJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9BU1RfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBEZWZhdWx0R2xvYmFsQ29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ckNvbXBvbmVudGxlc3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8R2xvYmFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUb2FzdHJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9BU1RfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBEZWZhdWx0Tm9Db21wb25lbnRHbG9iYWxDb25maWcsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19