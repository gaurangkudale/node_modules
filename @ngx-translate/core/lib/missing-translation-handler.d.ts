import { TranslateService } from "./translate.service";
import * as ɵngcc0 from '@angular/core';
export interface MissingTranslationHandlerParams {
    /**
     * the key that's missing in translation files
     */
    key: string;
    /**
     * an instance of the service that was unable to translate the key.
     */
    translateService: TranslateService;
    /**
     * interpolation params that were passed along for translating the given key.
     */
    interpolateParams?: Object;
}
export declare abstract class MissingTranslationHandler {
    /**
     * A function that handles missing translations.
     *
     * @param params context for resolving a missing translation
     * @returns a value or an observable
     * If it returns a value, then this value is used.
     * If it return an observable, the value returned by this observable will be used (except if the method was "instant").
     * If it doesn't return then the key will be used as a value
     */
    abstract handle(params: MissingTranslationHandlerParams): any;
}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
export declare class FakeMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FakeMissingTranslationHandler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FakeMissingTranslationHandler>;
}

//# sourceMappingURL=missing-translation-handler.d.ts.map