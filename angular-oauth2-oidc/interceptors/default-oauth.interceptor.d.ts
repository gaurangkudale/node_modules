import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthResourceServerErrorHandler } from './resource-server-error-handler';
import { OAuthModuleConfig } from '../oauth-module.config';
import { OAuthStorage } from '../types';
import { OAuthService } from '../oauth-service';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultOAuthInterceptor implements HttpInterceptor {
    private authStorage;
    private oAuthService;
    private errorHandler;
    private moduleConfig;
    constructor(authStorage: OAuthStorage, oAuthService: OAuthService, errorHandler: OAuthResourceServerErrorHandler, moduleConfig: OAuthModuleConfig);
    private checkUrl;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultOAuthInterceptor, [null, null, null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DefaultOAuthInterceptor>;
}

//# sourceMappingURL=default-oauth.interceptor.d.ts.map