/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { MatCommonModule } from '../common-behaviors/common-module';
import { HammerInstance, HammerOptions } from './gesture-annotations';
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 */
import * as ɵngcc0 from '@angular/core';
export declare const MAT_HAMMER_OPTIONS: InjectionToken<HammerOptions>;
/**
 * Adjusts configuration of our gesture library, Hammer.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 */
export declare class GestureConfig extends HammerGestureConfig {
    private _hammerOptions?;
    /** List of new event names to add to the gesture support list */
    events: string[];
    constructor(_hammerOptions?: HammerOptions | undefined, _commonModule?: MatCommonModule);
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    buildHammer(element: HTMLElement): HammerInstance;
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    private _createRecognizer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GestureConfig, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GestureConfig>;
}

//# sourceMappingURL=gesture-config.d.ts.map