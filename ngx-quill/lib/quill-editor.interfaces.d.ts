import { InjectionToken } from '@angular/core';
export interface CustomOption {
    import: string;
    whitelist: any[];
}
export interface CustomModule {
    implementation: any;
    path: string;
}
export declare type QuillToolbarConfig = Array<Array<string | {
    indent?: string;
    list?: string;
    direction?: string;
    header?: number | Array<boolean | number>;
    color?: string[] | string;
    background?: string[] | string;
    align?: string[] | string;
    script?: string;
    font?: string[] | string;
    size?: Array<boolean | string>;
}>>;
export interface QuillModules {
    [key: string]: any;
    clipboard?: {
        matchers?: any[];
        matchVisual?: boolean;
    } | boolean;
    history?: {
        delay?: number;
        maxStack?: number;
        userOnly?: boolean;
    } | boolean;
    keyboard?: {
        bindings?: any;
    } | boolean;
    syntax?: boolean;
    toolbar?: QuillToolbarConfig | string | {
        container?: string | string[] | QuillToolbarConfig;
        handlers?: {
            [key: string]: any;
        };
    } | boolean;
}
export declare type QuillFormat = 'object' | 'json' | 'html' | 'text';
export interface QuillConfig {
    bounds?: HTMLElement | string;
    customModules?: CustomModule[];
    customOptions?: CustomOption[];
    suppressGlobalRegisterWarning?: boolean;
    debug?: 'error' | 'warn' | 'log' | false;
    format?: QuillFormat;
    formats?: string[];
    modules?: QuillModules;
    placeholder?: string;
    readOnly?: boolean;
    scrollingContainer?: HTMLElement | string | null;
    theme?: string;
    strict?: boolean;
    trackChanges?: 'user' | 'all';
}
export declare const QUILL_CONFIG_TOKEN: InjectionToken<QuillConfig>;
