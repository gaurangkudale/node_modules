/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateFakeLoader } from "./lib/translate.loader";
import { MissingTranslationHandler, FakeMissingTranslationHandler } from "./lib/missing-translation-handler";
import { TranslateParser, TranslateDefaultParser } from "./lib/translate.parser";
import { TranslateCompiler, TranslateFakeCompiler } from "./lib/translate.compiler";
import { TranslateDirective } from "./lib/translate.directive";
import { TranslatePipe } from "./lib/translate.pipe";
import { TranslateStore } from "./lib/translate.store";
import { USE_DEFAULT_LANG, DEFAULT_LANGUAGE, USE_STORE, TranslateService, USE_EXTEND } from "./lib/translate.service";
import * as ɵngcc0 from '@angular/core';
export { TranslateLoader, TranslateFakeLoader } from "./lib/translate.loader";
export { USE_STORE, USE_DEFAULT_LANG, DEFAULT_LANGUAGE, USE_EXTEND, TranslateService } from "./lib/translate.service";
export { MissingTranslationHandler, FakeMissingTranslationHandler } from "./lib/missing-translation-handler";
export { TranslateParser, TranslateDefaultParser } from "./lib/translate.parser";
export { TranslateCompiler, TranslateFakeCompiler } from "./lib/translate.compiler";
export { TranslateDirective } from "./lib/translate.directive";
export { TranslatePipe } from "./lib/translate.pipe";
export { TranslateStore } from "./lib/translate.store";
/**
 * @record
 */
export function TranslateModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.loader;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.compiler;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.parser;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.missingTranslationHandler;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.isolate;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.extend;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.useDefaultLang;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.defaultLanguage;
}
export class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
}
TranslateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TranslateModule });
TranslateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TranslateModule_Factory(t) { return new (t || TranslateModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TranslateModule, { declarations: function () { return [TranslatePipe,
        TranslateDirective]; }, exports: function () { return [TranslatePipe,
        TranslateDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TranslateModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TranslatePipe,
                    TranslateDirective
                ],
                exports: [
                    TranslatePipe,
                    TranslateDirective
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9wdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVFLE9BQU8sRUFBQyx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzNHLE9BQU8sRUFBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7O0FBRXBILHFEQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLDRGQUFjLHlCQUF5QixDQUFDO0FBQ3hDLHlFQUFjLG1DQUFtQyxDQUFDO0FBQ2xELHdEQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLHlEQUFjLDBCQUEwQixDQUFDO0FBQ3pDLG1DQUFjLDJCQUEyQixDQUFDO0FBQzFDLDhCQUFjLHNCQUFzQixDQUFDO0FBQ3JDLCtCQUFjLHVCQUF1QixDQUFDO0FBQ3RDO0FBQ0c7QUFBVztBQUFkLDJDQVdDO0FBQ0Q7QUFFQTtBQUNhLElBZFgsdUNBQWtCO0FBQ3BCO0FBQ1EsSUFETix5Q0FBb0I7QUFDdEI7QUFD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Q2Isa0JBQWtCLGtCQUNuQixrQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYSxzQkFDYixrQkFBa0Isa0JBQ25CLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlcn0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7TWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJ9IGZyb20gXCIuL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7VHJhbnNsYXRlUGFyc2VyLCBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBhcnNlclwiO1xuaW1wb3J0IHtUcmFuc2xhdGVDb21waWxlciwgVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmNvbXBpbGVyXCI7XG5pbXBvcnQge1RyYW5zbGF0ZURpcmVjdGl2ZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5kaXJlY3RpdmVcIjtcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnN0b3JlXCI7XG5pbXBvcnQge1VTRV9ERUZBVUxUX0xBTkcsIERFRkFVTFRfTEFOR1VBR0UsIFVTRV9TVE9SRSwgVHJhbnNsYXRlU2VydmljZSwgVVNFX0VYVEVORH0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUubG9hZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUucGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmNvbXBpbGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5waXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnN0b3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlTW9kdWxlQ29uZmlnIHtcbiAgbG9hZGVyPzogUHJvdmlkZXI7XG4gIGNvbXBpbGVyPzogUHJvdmlkZXI7XG4gIHBhcnNlcj86IFByb3ZpZGVyO1xuICBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyPzogUHJvdmlkZXI7XG4gIC8vIGlzb2xhdGUgdGhlIHNlcnZpY2UgaW5zdGFuY2UsIG9ubHkgd29ya3MgZm9yIGxhenkgbG9hZGVkIG1vZHVsZXMgb3IgY29tcG9uZW50cyB3aXRoIHRoZSBcInByb3ZpZGVyc1wiIHByb3BlcnR5XG4gIGlzb2xhdGU/OiBib29sZWFuO1xuICAvLyBleHRlbmRzIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZSBpbnN0ZWFkIG9mIGlnbm9yaW5nIHRoZW0gaWYgcHJlc2VudFxuICBleHRlbmQ/OiBib29sZWFuO1xuICB1c2VEZWZhdWx0TGFuZz86IGJvb2xlYW47XG4gIGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9kdWxlIHtcbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogVHJhbnNsYXRlTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRyYW5zbGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbmZpZy5sb2FkZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXJ9LFxuICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcbiAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0sXG4gICAgICAgIGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHx8IHtwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJ9LFxuICAgICAgICBUcmFuc2xhdGVTdG9yZSxcbiAgICAgICAge3Byb3ZpZGU6IFVTRV9TVE9SRSwgdXNlVmFsdWU6IGNvbmZpZy5pc29sYXRlfSxcbiAgICAgICAge3Byb3ZpZGU6IFVTRV9ERUZBVUxUX0xBTkcsIHVzZVZhbHVlOiBjb25maWcudXNlRGVmYXVsdExhbmd9LFxuICAgICAgICB7cHJvdmlkZTogVVNFX0VYVEVORCwgdXNlVmFsdWU6IGNvbmZpZy5leHRlbmR9LFxuICAgICAgICB7cHJvdmlkZTogREVGQVVMVF9MQU5HVUFHRSwgdXNlVmFsdWU6IGNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2V9LFxuICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgKi9cbiAgc3RhdGljIGZvckNoaWxkKGNvbmZpZzogVHJhbnNsYXRlTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRyYW5zbGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbmZpZy5sb2FkZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUZha2VMb2FkZXJ9LFxuICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcbiAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7cHJvdmlkZTogVHJhbnNsYXRlUGFyc2VyLCB1c2VDbGFzczogVHJhbnNsYXRlRGVmYXVsdFBhcnNlcn0sXG4gICAgICAgIGNvbmZpZy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHx8IHtwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VDbGFzczogRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJ9LFxuICAgICAgICB7cHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGV9LFxuICAgICAgICB7cHJvdmlkZTogVVNFX0RFRkFVTFRfTEFORywgdXNlVmFsdWU6IGNvbmZpZy51c2VEZWZhdWx0TGFuZ30sXG4gICAgICAgIHtwcm92aWRlOiBVU0VfRVhURU5ELCB1c2VWYWx1ZTogY29uZmlnLmV4dGVuZH0sXG4gICAgICAgIHtwcm92aWRlOiBERUZBVUxUX0xBTkdVQUdFLCB1c2VWYWx1ZTogY29uZmlnLmRlZmF1bHRMYW5ndWFnZX0sXG4gICAgICAgIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=