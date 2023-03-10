/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
import * as ɵngcc0 from '@angular/core';
export declare class StylesheetMap {
    readonly stylesheet: Map<HTMLElement, Map<string, string | number>>;
    /**
     * Add an individual style to an HTML element
     */
    addStyleToElement(element: HTMLElement, style: string, value: string | number): void;
    /**
     * Clear the virtual stylesheet
     */
    clearStyles(): void;
    /**
     * Retrieve a given style for an HTML element
     */
    getStyleForElement(el: HTMLElement, styleName: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StylesheetMap, never>;
}

//# sourceMappingURL=stylesheet-map.d.ts.map