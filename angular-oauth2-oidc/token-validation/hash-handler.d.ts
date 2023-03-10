/**
 * Abstraction for crypto algorithms
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class HashHandler {
    abstract calcHash(valueToHash: string, algorithm: string): Promise<string>;
}
export declare class DefaultHashHandler implements HashHandler {
    calcHash(valueToHash: string, algorithm: string): Promise<string>;
    toHashString2(byteArray: number[]): string;
    toHashString(buffer: ArrayBuffer): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultHashHandler, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DefaultHashHandler>;
}

//# sourceMappingURL=hash-handler.d.ts.map