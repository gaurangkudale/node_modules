/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileMetadataResolver, CompilerConfig, CompileReflector, DirectiveNormalizer, DirectiveResolver, DomElementSchemaRegistry, ElementSchemaRegistry, HtmlParser, I18NHtmlParser, JitCompiler, JitEvaluator, JitSummaryResolver, Lexer, NgModuleCompiler, NgModuleResolver, Parser, PipeResolver, ProviderMeta, ResourceLoader, StaticSymbolCache, StyleCompiler, SummaryResolver, TemplateParser, UrlResolver, ViewCompiler } from '@angular/compiler';
import { Compiler, Inject, InjectionToken, Injector, isDevMode, MissingTranslationStrategy, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, TRANSLATIONS_FORMAT, ViewEncapsulation, ɵConsole as Console } from '@angular/core';
import { JitReflector } from './compiler_reflector';
export const ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {@link PACKAGE_ROOT_URL} that maps to '/'.
 */
export const DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
const _NO_RESOURCE_LOADER = {
    get(url) {
        throw new Error(`No ResourceLoader implementation has been provided. Can't read the url "${url}"`);
    }
};
const baseHtmlParser = new InjectionToken('HtmlParser');
export class CompilerImpl {
    constructor(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, jitEvaluator, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    getExtraNgModuleProviders() {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    }
    compileModuleSync(moduleType) {
        return this._delegate.compileModuleSync(moduleType);
    }
    compileModuleAsync(moduleType) {
        return this._delegate.compileModuleAsync(moduleType);
    }
    compileModuleAndAllComponentsSync(moduleType) {
        const result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: result.ngModuleFactory,
            componentFactories: result.componentFactories,
        };
    }
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then((result) => ({
            ngModuleFactory: result.ngModuleFactory,
            componentFactories: result.componentFactories,
        }));
    }
    loadAotSummaries(summaries) {
        this._delegate.loadAotSummaries(summaries);
    }
    hasAotSummary(ref) {
        return this._delegate.hasAotSummary(ref);
    }
    getComponentFactory(component) {
        return this._delegate.getComponentFactory(component);
    }
    clearCache() {
        this._delegate.clearCache();
    }
    clearCacheFor(type) {
        this._delegate.clearCacheFor(type);
    }
    getModuleId(moduleType) {
        const meta = this._metadataResolver.getNgModuleMetadata(moduleType);
        return meta && meta.id || undefined;
    }
}
const ɵ0 = new JitReflector(), ɵ1 = _NO_RESOURCE_LOADER, ɵ2 = (parser, translations, format, config, console) => {
    translations = translations || '';
    const missingTranslation = translations ? config.missingTranslation : MissingTranslationStrategy.Ignore;
    return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
}, ɵ3 = new CompilerConfig();
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 */
const COMPILER_PROVIDERS__PRE_R3__ = [
    { provide: CompileReflector, useValue: ɵ0 },
    { provide: ResourceLoader, useValue: ɵ1 },
    { provide: JitSummaryResolver, deps: [] },
    { provide: SummaryResolver, useExisting: JitSummaryResolver },
    { provide: Console, deps: [] },
    { provide: Lexer, deps: [] },
    { provide: Parser, deps: [Lexer] },
    {
        provide: baseHtmlParser,
        useClass: HtmlParser,
        deps: [],
    },
    {
        provide: I18NHtmlParser,
        useFactory: ɵ2,
        deps: [
            baseHtmlParser,
            [new Optional(), new Inject(TRANSLATIONS)],
            [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
            [CompilerConfig],
            [Console],
        ]
    },
    {
        provide: HtmlParser,
        useExisting: I18NHtmlParser,
    },
    {
        provide: TemplateParser,
        deps: [CompilerConfig, CompileReflector, Parser, ElementSchemaRegistry, I18NHtmlParser, Console]
    },
    { provide: JitEvaluator, useClass: JitEvaluator, deps: [] },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    {
        provide: CompileMetadataResolver,
        deps: [
            CompilerConfig, HtmlParser, NgModuleResolver, DirectiveResolver, PipeResolver,
            SummaryResolver, ElementSchemaRegistry, DirectiveNormalizer, Console,
            [Optional, StaticSymbolCache], CompileReflector, [Optional, ERROR_COLLECTOR_TOKEN]
        ]
    },
    DEFAULT_PACKAGE_URL_PROVIDER,
    { provide: StyleCompiler, deps: [UrlResolver] },
    { provide: ViewCompiler, deps: [CompileReflector] },
    { provide: NgModuleCompiler, deps: [CompileReflector] },
    { provide: CompilerConfig, useValue: ɵ3 },
    {
        provide: Compiler,
        useClass: CompilerImpl,
        deps: [
            Injector, CompileMetadataResolver, TemplateParser, StyleCompiler, ViewCompiler,
            NgModuleCompiler, SummaryResolver, CompileReflector, JitEvaluator, CompilerConfig, Console
        ]
    },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
];
export const COMPILER_PROVIDERS__POST_R3__ = [{ provide: Compiler, useFactory: () => new Compiler() }];
export const COMPILER_PROVIDERS = COMPILER_PROVIDERS__POST_R3__;
/**
 * @publicApi
 */
export class JitCompilerFactory {
    /* @internal */
    constructor(defaultOptions) {
        const compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = [compilerOptions, ...defaultOptions];
    }
    createCompiler(options = []) {
        const opts = _mergeOptions(this._defaultOptions.concat(options));
        const injector = Injector.create([
            COMPILER_PROVIDERS, {
                provide: CompilerConfig,
                useFactory: () => {
                    return new CompilerConfig({
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        useJit: opts.useJit,
                        jitDevMode: isDevMode(),
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        defaultEncapsulation: opts.defaultEncapsulation,
                        missingTranslation: opts.missingTranslation,
                        preserveWhitespaces: opts.preserveWhitespaces,
                    });
                },
                deps: []
            },
            opts.providers
        ]);
        return injector.get(Compiler);
    }
}
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map(options => options.useJit)),
        defaultEncapsulation: _lastDefined(optionsArr.map(options => options.defaultEncapsulation)),
        providers: _mergeArrays(optionsArr.map(options => options.providers)),
        missingTranslation: _lastDefined(optionsArr.map(options => options.missingTranslation)),
        preserveWhitespaces: _lastDefined(optionsArr.map(options => options.preserveWhitespaces)),
    };
}
function _lastDefined(args) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
function _mergeArrays(parts) {
    const result = [];
    parts.forEach((part) => part && result.push(...part));
    return result;
}
export { ɵ0, ɵ1, ɵ2, ɵ3 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9jb21waWxlcl9mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3YixPQUFPLEVBQUMsUUFBUSxFQUFzRCxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQWlELFFBQVEsRUFBRSxnQkFBZ0IsRUFBa0IsWUFBWSxFQUFFLG1CQUFtQixFQUFRLGlCQUFpQixFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaFYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFMUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztBQUM1QyxJQUFFLE9BQU8sRUFBRSxnQkFBZ0I7QUFDM0IsSUFBRSxRQUFRLEVBQUUsR0FBRztBQUNmLENBQUMsQ0FBQztB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QztBQUNoQixDQUFDO0FBQ0Q7QUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgQ29tcGlsZXJDb25maWcsIENvbXBpbGVSZWZsZWN0b3IsIERpcmVjdGl2ZU5vcm1hbGl6ZXIsIERpcmVjdGl2ZVJlc29sdmVyLCBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnksIEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgSHRtbFBhcnNlciwgSTE4Tkh0bWxQYXJzZXIsIEppdENvbXBpbGVyLCBKaXRFdmFsdWF0b3IsIEppdFN1bW1hcnlSZXNvbHZlciwgTGV4ZXIsIE5nTW9kdWxlQ29tcGlsZXIsIE5nTW9kdWxlUmVzb2x2ZXIsIFBhcnNlciwgUGlwZVJlc29sdmVyLCBQcm92aWRlck1ldGEsIFJlc291cmNlTG9hZGVyLCBTdGF0aWNTeW1ib2xDYWNoZSwgU3R5bGVDb21waWxlciwgU3VtbWFyeVJlc29sdmVyLCBUZW1wbGF0ZVBhcnNlciwgVXJsUmVzb2x2ZXIsIFZpZXdDb21waWxlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIENvbXBvbmVudEZhY3RvcnksIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBpc0Rldk1vZGUsIE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LCBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzLCBOZ01vZHVsZUZhY3RvcnksIE9wdGlvbmFsLCBQQUNLQUdFX1JPT1RfVVJMLCBTdGF0aWNQcm92aWRlciwgVFJBTlNMQVRJT05TLCBUUkFOU0xBVElPTlNfRk9STUFULCBUeXBlLCBWaWV3RW5jYXBzdWxhdGlvbiwgybVDb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0ppdFJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlcl9yZWZsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRVJST1JfQ09MTEVDVE9SX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuKCdFcnJvckNvbGxlY3RvcicpO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBwcm92aWRlciBmb3Ige0BsaW5rIFBBQ0tBR0VfUk9PVF9VUkx9IHRoYXQgbWFwcyB0byAnLycuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBQQUNLQUdFX1JPT1RfVVJMLFxuICB1c2VWYWx1ZTogJy8nXG59O1xuXG5jb25zdCBfTk9fUkVTT1VSQ0VfTE9BREVSOiBSZXNvdXJjZUxvYWRlciA9IHtcbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyBSZXNvdXJjZUxvYWRlciBpbXBsZW1lbnRhdGlvbiBoYXMgYmVlbiBwcm92aWRlZC4gQ2FuJ3QgcmVhZCB0aGUgdXJsIFwiJHt1cmx9XCJgKTtcbiAgfVxufTtcblxuY29uc3QgYmFzZUh0bWxQYXJzZXIgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0h0bWxQYXJzZXInKTtcblxuZXhwb3J0IGNsYXNzIENvbXBpbGVySW1wbCBpbXBsZW1lbnRzIENvbXBpbGVyIHtcbiAgcHJpdmF0ZSBfZGVsZWdhdGU6IEppdENvbXBpbGVyO1xuICBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yO1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfbWV0YWRhdGFSZXNvbHZlcjogQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIsXG4gICAgICB0ZW1wbGF0ZVBhcnNlcjogVGVtcGxhdGVQYXJzZXIsIHN0eWxlQ29tcGlsZXI6IFN0eWxlQ29tcGlsZXIsIHZpZXdDb21waWxlcjogVmlld0NvbXBpbGVyLFxuICAgICAgbmdNb2R1bGVDb21waWxlcjogTmdNb2R1bGVDb21waWxlciwgc3VtbWFyeVJlc29sdmVyOiBTdW1tYXJ5UmVzb2x2ZXI8VHlwZTxhbnk+PixcbiAgICAgIGNvbXBpbGVSZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsIGppdEV2YWx1YXRvcjogSml0RXZhbHVhdG9yLFxuICAgICAgY29tcGlsZXJDb25maWc6IENvbXBpbGVyQ29uZmlnLCBjb25zb2xlOiBDb25zb2xlKSB7XG4gICAgdGhpcy5fZGVsZWdhdGUgPSBuZXcgSml0Q29tcGlsZXIoXG4gICAgICAgIF9tZXRhZGF0YVJlc29sdmVyLCB0ZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyLCBuZ01vZHVsZUNvbXBpbGVyLFxuICAgICAgICBzdW1tYXJ5UmVzb2x2ZXIsIGNvbXBpbGVSZWZsZWN0b3IsIGppdEV2YWx1YXRvciwgY29tcGlsZXJDb25maWcsIGNvbnNvbGUsXG4gICAgICAgIHRoaXMuZ2V0RXh0cmFOZ01vZHVsZVByb3ZpZGVycy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gIH1cblxuICBwcml2YXRlIGdldEV4dHJhTmdNb2R1bGVQcm92aWRlcnMoKSB7XG4gICAgcmV0dXJuIFt0aGlzLl9tZXRhZGF0YVJlc29sdmVyLmdldFByb3ZpZGVyTWV0YWRhdGEoXG4gICAgICAgIG5ldyBQcm92aWRlck1ldGEoQ29tcGlsZXIsIHt1c2VWYWx1ZTogdGhpc30pKV07XG4gIH1cblxuICBjb21waWxlTW9kdWxlU3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogTmdNb2R1bGVGYWN0b3J5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZVN5bmMobW9kdWxlVHlwZSkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+O1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBc3luYzxUPihtb2R1bGVUeXBlOiBUeXBlPFQ+KTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZUFzeW5jKG1vZHVsZVR5cGUpIGFzIFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PjtcbiAgfVxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYyhtb2R1bGVUeXBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGVGYWN0b3J5OiByZXN1bHQubmdNb2R1bGVGYWN0b3J5IGFzIE5nTW9kdWxlRmFjdG9yeTxUPixcbiAgICAgIGNvbXBvbmVudEZhY3RvcmllczogcmVzdWx0LmNvbXBvbmVudEZhY3RvcmllcyBhcyBDb21wb25lbnRGYWN0b3J5PGFueT5bXSxcbiAgICB9O1xuICB9XG4gIGNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6XG4gICAgICBQcm9taXNlPE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXM8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNBc3luYyhtb2R1bGVUeXBlKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiAoe1xuICAgICAgICAgICAgICAgIG5nTW9kdWxlRmFjdG9yeTogcmVzdWx0Lm5nTW9kdWxlRmFjdG9yeSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD4sXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yaWVzOiByZXN1bHQuY29tcG9uZW50RmFjdG9yaWVzIGFzIENvbXBvbmVudEZhY3Rvcnk8YW55PltdLFxuICAgICAgICAgICAgICB9KSk7XG4gIH1cbiAgbG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXM6ICgpID0+IGFueVtdKSB7XG4gICAgdGhpcy5fZGVsZWdhdGUubG9hZEFvdFN1bW1hcmllcyhzdW1tYXJpZXMpO1xuICB9XG4gIGhhc0FvdFN1bW1hcnkocmVmOiBUeXBlPGFueT4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaGFzQW90U3VtbWFyeShyZWYpO1xuICB9XG4gIGdldENvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldENvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KSBhcyBDb21wb25lbnRGYWN0b3J5PFQ+O1xuICB9XG4gIGNsZWFyQ2FjaGUoKTogdm9pZCB7XG4gICAgdGhpcy5fZGVsZWdhdGUuY2xlYXJDYWNoZSgpO1xuICB9XG4gIGNsZWFyQ2FjaGVGb3IodHlwZTogVHlwZTxhbnk+KSB7XG4gICAgdGhpcy5fZGVsZWdhdGUuY2xlYXJDYWNoZUZvcih0eXBlKTtcbiAgfVxuICBnZXRNb2R1bGVJZChtb2R1bGVUeXBlOiBUeXBlPGFueT4pOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBtZXRhID0gdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXROZ01vZHVsZU1ldGFkYXRhKG1vZHVsZVR5cGUpO1xuICAgIHJldHVybiBtZXRhICYmIG1ldGEuaWQgfHwgdW5kZWZpbmVkO1xuICB9XG59XG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0aGF0IHByb3ZpZGUgYEppdENvbXBpbGVyYCBhbmQgaXRzIGRlcGVuZGVuY2llcyB0byB1c2UgZm9yXG4gKiB0ZW1wbGF0ZSBjb21waWxhdGlvbi5cbiAqL1xuY29uc3QgQ09NUElMRVJfUFJPVklERVJTX19QUkVfUjNfXyA9IDxTdGF0aWNQcm92aWRlcltdPltcbiAge3Byb3ZpZGU6IENvbXBpbGVSZWZsZWN0b3IsIHVzZVZhbHVlOiBuZXcgSml0UmVmbGVjdG9yKCl9LFxuICB7cHJvdmlkZTogUmVzb3VyY2VMb2FkZXIsIHVzZVZhbHVlOiBfTk9fUkVTT1VSQ0VfTE9BREVSfSxcbiAge3Byb3ZpZGU6IEppdFN1bW1hcnlSZXNvbHZlciwgZGVwczogW119LFxuICB7cHJvdmlkZTogU3VtbWFyeVJlc29sdmVyLCB1c2VFeGlzdGluZzogSml0U3VtbWFyeVJlc29sdmVyfSxcbiAge3Byb3ZpZGU6IENvbnNvbGUsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IExleGVyLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBQYXJzZXIsIGRlcHM6IFtMZXhlcl19LFxuICB7XG4gICAgcHJvdmlkZTogYmFzZUh0bWxQYXJzZXIsXG4gICAgdXNlQ2xhc3M6IEh0bWxQYXJzZXIsXG4gICAgZGVwczogW10sXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBJMThOSHRtbFBhcnNlcixcbiAgICB1c2VGYWN0b3J5OlxuICAgICAgICAocGFyc2VyOiBIdG1sUGFyc2VyLCB0cmFuc2xhdGlvbnM6IHN0cmluZ3xudWxsLCBmb3JtYXQ6IHN0cmluZywgY29uZmlnOiBDb21waWxlckNvbmZpZyxcbiAgICAgICAgIGNvbnNvbGU6IENvbnNvbGUpID0+IHtcbiAgICAgICAgICB0cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnMgfHwgJyc7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1RyYW5zbGF0aW9uID1cbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zID8gY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbiEgOiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneS5JZ25vcmU7XG4gICAgICAgICAgcmV0dXJuIG5ldyBJMThOSHRtbFBhcnNlcihwYXJzZXIsIHRyYW5zbGF0aW9ucywgZm9ybWF0LCBtaXNzaW5nVHJhbnNsYXRpb24sIGNvbnNvbGUpO1xuICAgICAgICB9LFxuICAgIGRlcHM6IFtcbiAgICAgIGJhc2VIdG1sUGFyc2VyLFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBuZXcgSW5qZWN0KFRSQU5TTEFUSU9OUyldLFxuICAgICAgW25ldyBPcHRpb25hbCgpLCBuZXcgSW5qZWN0KFRSQU5TTEFUSU9OU19GT1JNQVQpXSxcbiAgICAgIFtDb21waWxlckNvbmZpZ10sXG4gICAgICBbQ29uc29sZV0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHRtbFBhcnNlcixcbiAgICB1c2VFeGlzdGluZzogSTE4Tkh0bWxQYXJzZXIsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBUZW1wbGF0ZVBhcnNlcixcbiAgICBkZXBzOiBbQ29tcGlsZXJDb25maWcsIENvbXBpbGVSZWZsZWN0b3IsIFBhcnNlciwgRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBJMThOSHRtbFBhcnNlciwgQ29uc29sZV1cbiAgfSxcbiAge3Byb3ZpZGU6IEppdEV2YWx1YXRvciwgdXNlQ2xhc3M6IEppdEV2YWx1YXRvciwgZGVwczogW119LFxuICB7cHJvdmlkZTogRGlyZWN0aXZlTm9ybWFsaXplciwgZGVwczogW1Jlc291cmNlTG9hZGVyLCBVcmxSZXNvbHZlciwgSHRtbFBhcnNlciwgQ29tcGlsZXJDb25maWddfSxcbiAge1xuICAgIHByb3ZpZGU6IENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLFxuICAgIGRlcHM6IFtcbiAgICAgIENvbXBpbGVyQ29uZmlnLCBIdG1sUGFyc2VyLCBOZ01vZHVsZVJlc29sdmVyLCBEaXJlY3RpdmVSZXNvbHZlciwgUGlwZVJlc29sdmVyLFxuICAgICAgU3VtbWFyeVJlc29sdmVyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIERpcmVjdGl2ZU5vcm1hbGl6ZXIsIENvbnNvbGUsXG4gICAgICBbT3B0aW9uYWwsIFN0YXRpY1N5bWJvbENhY2hlXSwgQ29tcGlsZVJlZmxlY3RvciwgW09wdGlvbmFsLCBFUlJPUl9DT0xMRUNUT1JfVE9LRU5dXG4gICAgXVxuICB9LFxuICBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSLFxuICB7cHJvdmlkZTogU3R5bGVDb21waWxlciwgZGVwczogW1VybFJlc29sdmVyXX0sXG4gIHtwcm92aWRlOiBWaWV3Q29tcGlsZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBOZ01vZHVsZUNvbXBpbGVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7cHJvdmlkZTogQ29tcGlsZXJDb25maWcsIHVzZVZhbHVlOiBuZXcgQ29tcGlsZXJDb25maWcoKX0sXG4gIHtcbiAgICBwcm92aWRlOiBDb21waWxlcixcbiAgICB1c2VDbGFzczogQ29tcGlsZXJJbXBsLFxuICAgIGRlcHM6IFtcbiAgICAgIEluamVjdG9yLCBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgVGVtcGxhdGVQYXJzZXIsIFN0eWxlQ29tcGlsZXIsIFZpZXdDb21waWxlcixcbiAgICAgIE5nTW9kdWxlQ29tcGlsZXIsIFN1bW1hcnlSZXNvbHZlciwgQ29tcGlsZVJlZmxlY3RvciwgSml0RXZhbHVhdG9yLCBDb21waWxlckNvbmZpZywgQ29uc29sZVxuICAgIF1cbiAgfSxcbiAge3Byb3ZpZGU6IERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgZGVwczogW119LFxuICB7cHJvdmlkZTogRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB1c2VFeGlzdGluZzogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSxcbiAge3Byb3ZpZGU6IFVybFJlc29sdmVyLCBkZXBzOiBbUEFDS0FHRV9ST09UX1VSTF19LFxuICB7cHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBQaXBlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHtwcm92aWRlOiBOZ01vZHVsZVJlc29sdmVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuXTtcblxuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1BST1ZJREVSU19fUE9TVF9SM19fID1cbiAgICA8U3RhdGljUHJvdmlkZXJbXT5be3Byb3ZpZGU6IENvbXBpbGVyLCB1c2VGYWN0b3J5OiAoKSA9PiBuZXcgQ29tcGlsZXIoKX1dO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1BST1ZJREVSUyA9IENPTVBJTEVSX1BST1ZJREVSU19fUFJFX1IzX187XG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIEppdENvbXBpbGVyRmFjdG9yeSBpbXBsZW1lbnRzIENvbXBpbGVyRmFjdG9yeSB7XG4gIHByaXZhdGUgX2RlZmF1bHRPcHRpb25zOiBDb21waWxlck9wdGlvbnNbXTtcblxuICAvKiBAaW50ZXJuYWwgKi9cbiAgY29uc3RydWN0b3IoZGVmYXVsdE9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdKSB7XG4gICAgY29uc3QgY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnMgPSB7XG4gICAgICB1c2VKaXQ6IHRydWUsXG4gICAgICBkZWZhdWx0RW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG4gICAgICBtaXNzaW5nVHJhbnNsYXRpb246IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmcsXG4gICAgfTtcblxuICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0gW2NvbXBpbGVyT3B0aW9ucywgLi4uZGVmYXVsdE9wdGlvbnNdO1xuICB9XG4gIGNyZWF0ZUNvbXBpbGVyKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdID0gW10pOiBDb21waWxlciB7XG4gICAgY29uc3Qgb3B0cyA9IF9tZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMuY29uY2F0KG9wdGlvbnMpKTtcbiAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICBDT01QSUxFUl9QUk9WSURFUlMsIHtcbiAgICAgICAgcHJvdmlkZTogQ29tcGlsZXJDb25maWcsXG4gICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IENvbXBpbGVyQ29uZmlnKHtcbiAgICAgICAgICAgIC8vIGxldCBleHBsaWNpdCB2YWx1ZXMgZnJvbSB0aGUgY29tcGlsZXIgb3B0aW9ucyBvdmVyd3JpdGUgb3B0aW9uc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgYXBwIHByb3ZpZGVyc1xuICAgICAgICAgICAgdXNlSml0OiBvcHRzLnVzZUppdCxcbiAgICAgICAgICAgIGppdERldk1vZGU6IGlzRGV2TW9kZSgpLFxuICAgICAgICAgICAgLy8gbGV0IGV4cGxpY2l0IHZhbHVlcyBmcm9tIHRoZSBjb21waWxlciBvcHRpb25zIG92ZXJ3cml0ZSBvcHRpb25zXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBhcHAgcHJvdmlkZXJzXG4gICAgICAgICAgICBkZWZhdWx0RW5jYXBzdWxhdGlvbjogb3B0cy5kZWZhdWx0RW5jYXBzdWxhdGlvbixcbiAgICAgICAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogb3B0cy5taXNzaW5nVHJhbnNsYXRpb24sXG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBvcHRzLnByZXNlcnZlV2hpdGVzcGFjZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlcHM6IFtdXG4gICAgICB9LFxuICAgICAgb3B0cy5wcm92aWRlcnMhXG4gICAgXSk7XG4gICAgcmV0dXJuIGluamVjdG9yLmdldChDb21waWxlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21lcmdlT3B0aW9ucyhvcHRpb25zQXJyOiBDb21waWxlck9wdGlvbnNbXSk6IENvbXBpbGVyT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdXNlSml0OiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnVzZUppdCkpLFxuICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLmRlZmF1bHRFbmNhcHN1bGF0aW9uKSksXG4gICAgcHJvdmlkZXJzOiBfbWVyZ2VBcnJheXMob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByb3ZpZGVycyEpKSxcbiAgICBtaXNzaW5nVHJhbnNsYXRpb246IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMubWlzc2luZ1RyYW5zbGF0aW9uKSksXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogX2xhc3REZWZpbmVkKG9wdGlvbnNBcnIubWFwKG9wdGlvbnMgPT4gb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlc3BhY2VzKSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9sYXN0RGVmaW5lZDxUPihhcmdzOiBUW10pOiBUfHVuZGVmaW5lZCB7XG4gIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGFyZ3NbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFyZ3NbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZUFycmF5cyhwYXJ0czogYW55W11bXSk6IGFueVtdIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0ICYmIHJlc3VsdC5wdXNoKC4uLnBhcnQpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==