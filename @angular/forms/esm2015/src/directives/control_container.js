/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbstractControlDirective } from './abstract_control_directive';
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export class ControlContainer extends AbstractControlDirective {
    /**
     * @description
     * The top-level form directive for the control.
     */
    get formDirective() {
        return null;
    }
    /**
     * @description
     * The path to this group.
     */
    get path() {
        return null;
    }
}
ControlContainer.ɵfac = function ControlContainer_Factory(t) { return ɵControlContainer_BaseFactory(t || ControlContainer); };
ControlContainer.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ControlContainer, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
const ɵControlContainer_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(ControlContainer);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF9jb250YWluZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NvbnRyb2xfY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUl0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sT0FBZ0IsZ0JBQWlCLFNBQVEsd0JBQXdCO0FBQ3ZFLElBT0U7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUsSUFBSSxhQUFhO0FBQUssUUFDcEIsT0FBTyxJQUFJLENBQUM7QUFDaEIsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRSxPQUFDO0FBQ0wsSUFBRSxJQUFJLElBQUk7QUFBSyxRQUNYLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLElBQUUsQ0FBQztBQUNIOzs7cUZBQUM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGJhc2UgY2xhc3MgZm9yIGRpcmVjdGl2ZXMgdGhhdCBjb250YWluIG11bHRpcGxlIHJlZ2lzdGVyZWQgaW5zdGFuY2VzIG9mIGBOZ0NvbnRyb2xgLlxuICogT25seSB1c2VkIGJ5IHRoZSBmb3JtcyBtb2R1bGUuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIG5hbWUgZm9yIHRoZSBjb250cm9sXG4gICAqL1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgbmFtZSE6IHN0cmluZ3xudW1iZXJ8bnVsbDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFRoZSB0b3AtbGV2ZWwgZm9ybSBkaXJlY3RpdmUgZm9yIHRoZSBjb250cm9sLlxuICAgKi9cbiAgZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybXxudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIHBhdGggdG8gdGhpcyBncm91cC5cbiAgICovXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdfG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=