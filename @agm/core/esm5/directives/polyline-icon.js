import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
import * as ɵngcc0 from '@angular/core';
var AgmPolylineIcon = /** @class */ (function () {
    function AgmPolylineIcon() {
    }
    AgmPolylineIcon.prototype.ngOnInit = function () {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "offset", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "repeat", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorX", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorY", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "fillColor", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "path", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "rotation", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "scale", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "strokeColor", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeWeight", void 0);
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) { return new (t || AgmPolylineIcon)(); };
AgmPolylineIcon.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AgmPolylineIcon, [{
        type: Directive,
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], function () { return []; }, { fixedRotation: [{
            type: Input
        }], offset: [{
            type: Input
        }], repeat: [{
            type: Input
        }], anchorX: [{
            type: Input
        }], anchorY: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], path: [{
            type: Input
        }], rotation: [{
            type: Input
        }], scale: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }] }); })();
    return AgmPolylineIcon;
}());
export { AgmPolylineIcon };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZXMiOlsibmc6L0BhZ20vY29yZS9kaXJlY3RpdmVzL3BvbHlsaW5lLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBRUUsSUFGRjtBQUE2QixJQWdJN0IsQ0FBQztBQUNELElBTkUsa0NBQVEsR0FBUjtBQUFjLFFBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtBQUMzQixZQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN4RCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0YsSUF0SFU7QUFBcUIsUUFBN0IsS0FBSyxFQUFFO0FBQUU7QUFHUywwREFIYTtBQUVsQyxJQVFXO0FBRVAsUUFGRCxLQUFLLEVBQUU7QUFBRTtBQUdnQixtREFIRjtBQUUxQixJQVFXO0FBRVAsUUFGRCxLQUFLLEVBQUU7QUFBRTtBQUdnQixtREFIRjtBQUUxQixJQVNXO0FBRVIsUUFGQSxLQUFLLEVBQUU7QUFBRTtBQUdlLG9EQUhBO0FBRTNCLElBU1c7QUFFUixRQUZBLEtBQUssRUFBRTtBQUFFO0FBR2Usb0RBSEE7QUFFM0IsSUFPVztBQUVWLFFBRkUsS0FBSyxFQUFFO0FBQUU7QUFHYSxzREFISTtBQUU3QixJQUdXO0FBQ1gsUUFERyxLQUFLLEVBQUU7QUFBRTtBQUdXLHdEQUhRO0FBRS9CLElBT1c7QUFBcUIsUUFBN0IsS0FBSyxFQUFFO0FBQUU7QUFBa0QsaURBQ3hCO0FBRXRDLElBUVc7QUFFVCxRQUZDLEtBQUssRUFBRTtBQUFFO0FBR2MscURBSEU7QUFFNUIsSUFRVztBQUVOLFFBRkYsS0FBSyxFQUFFO0FBQUU7QUFHaUIsa0RBSEo7QUFFekIsSUFPVztBQUNYLFFBREcsS0FBSyxFQUFFO0FBQUU7QUFHVyx3REFIUTtBQUUvQixJQU1XO0FBQXFCLFFBQTdCLEtBQUssRUFBRTtBQUFFO0FBR1MsMERBSFk7QUFFakMsSUFNVztBQUFxQixRQUE3QixLQUFLLEVBQUU7QUFBRTtBQUdMLHlEQUh5QjtJQXpIbkIsZUFBZSxnQ0FEM0IsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFO0lBQWdDLEVBQUMsQ0FBQyxRQUMzQyxlQUFlLENBZ0kzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxzQkFBQztBQUNBLENBREEsQUFoSUQsSUFnSUM7QUFDRCxTQWpJYSxlQUFlO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBZ21Qb2x5bGluZUljb24gZW5hYmxlcyB0byBhZGQgcG9seWxpbmUgc2VxdWVuY2VzIHRvIGFkZCBhcnJvd3MsIGNpcmNsZSxcbiAqIG9yIGN1c3RvbSBpY29ucyBlaXRoZXIgYWxvbmcgdGhlIGVudGlyZSBsaW5lLCBvciBpbiBhIHNwZWNpZmljIHBhcnQgb2YgaXQuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc2hhcGVzI3BvbHlsaW5lX2N1c3RvbWl6ZVxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBodG1sXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWxpbmU+XG4gKiAgICAgICAgICA8YWdtLWljb24tc2VxdWVuY2UgW2ZpeGVkUm90YXRpb25dPVwidHJ1ZVwiIFtwYXRoXT1cIidGT1JXQVJEX09QRU5fQVJST1cnXCI+XG4gKiAgICAgICAgICA8L2FnbS1pY29uLXNlcXVlbmNlPlxuICogICAgICA8L2FnbS1wb2x5bGluZT5cbiAqICAgIDwvYWdtLW1hcD5cbiAqIGBgYFxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBBZ21Qb2x5bGluZUljb25cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdhZ20tcG9seWxpbmUgYWdtLWljb24tc2VxdWVuY2UnfSlcbmV4cG9ydCBjbGFzcyBBZ21Qb2x5bGluZUljb24gaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgZWFjaCBpY29uIGluIHRoZSBzZXF1ZW5jZSBoYXMgdGhlIHNhbWUgZml4ZWQgcm90YXRpb24gcmVnYXJkbGVzcyBvZiB0aGVcbiAgICogYW5nbGUgb2YgdGhlIGVkZ2Ugb24gd2hpY2ggaXQgbGllcy4gRGVmYXVsdHMgdG8gYGZhbHNlYCwgaW4gd2hpY2ggY2FzZSBlYWNoIGljb25cbiAgICogaW4gdGhlIHNlcXVlbmNlIGlzIHJvdGF0ZWQgdG8gYWxpZ24gd2l0aCBpdHMgZWRnZS5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIGZpeGVkUm90YXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBvZiB0aGUgbGluZSBhdCB3aGljaCBhbiBpY29uIGlzIHRvIGJlIHJlbmRlcmVkLiBUaGlzXG4gICAqIGRpc3RhbmNlIG1heSBiZSBleHByZXNzZWQgYXMgYSBwZXJjZW50YWdlIG9mIGxpbmUncyBsZW5ndGggKGUuZy4gJzUwJScpIG9yIGluIHBpeGVsc1xuICAgKiAoZS5nLiAnNTBweCcpLiBEZWZhdWx0cyB0byAnMTAwJScuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIG9mZnNldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBpY29ucyBvbiB0aGUgbGluZS4gVGhpcyBkaXN0YW5jZSBtYXkgYmUgZXhwcmVzc2VkIGFzXG4gICAqIGEgcGVyY2VudGFnZSBvZiB0aGUgbGluZSdzIGxlbmd0aCAoZS5nLiAnNTAlJykgb3IgaW4gcGl4ZWxzIChlLmcuICc1MHB4JykuIFRvIGRpc2FibGVcbiAgICogcmVwZWF0aW5nIG9mIHRoZSBpY29uLCBzcGVjaWZ5ICcwJy4gRGVmYXVsdHMgdG8gJzAnLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSByZXBlYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9zaXRpb24gb2YgdGhlIHN5bWJvbCByZWxhdGl2ZSB0byB0aGUgcG9seWxpbmUuIFRoZSBjb29yZGluYXRlXG4gICAqIG9mIHRoZSBzeW1ib2wncyBwYXRoIGlzIHRyYW5zbGF0ZWQgX2xlZnRfIGJ5IHRoZSBhbmNob3IncyB4IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcbiAgICogc3ltYm9sIGlzIGFuY2hvcmVkIGF0ICgwLCAwKS4gVGhlIHBvc2l0aW9uIGlzIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjb29yZGluYXRlIHN5c3RlbSBhcyB0aGVcbiAgICogc3ltYm9sJ3MgcGF0aC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yWDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgc3ltYm9sIHJlbGF0aXZlIHRvIHRoZSBwb2x5bGluZS4gVGhlIGNvb3JkaW5hdGVcbiAgICogb2YgdGhlIHN5bWJvbCdzIHBhdGggaXMgdHJhbnNsYXRlZCBfdXBfIGJ5IHRoZSBhbmNob3IncyB5IGNvb3JkaW5hdGUuIEJ5IGRlZmF1bHQsIGFcbiAgICogc3ltYm9sIGlzIGFuY2hvcmVkIGF0ICgwLCAwKS4gVGhlIHBvc2l0aW9uIGlzIGV4cHJlc3NlZCBpbiB0aGUgc2FtZSBjb29yZGluYXRlIHN5c3RlbSBhcyB0aGVcbiAgICogc3ltYm9sJ3MgcGF0aC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yWTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZFxuICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGNvcnJlc3BvbmRpbmcgcG9seWxpbmUuXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBvcGFjaXR5LiBEZWZhdWx0cyB0byAwLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIHBhdGgsIHdoaWNoIGlzIGEgYnVpbHQtaW4gc3ltYm9sIHBhdGgsIG9yIGEgY3VzdG9tIHBhdGggZXhwcmVzc2VkIHVzaW5nXG4gICAqIFNWRyBwYXRoIG5vdGF0aW9uLiBSZXF1aXJlZC5cbiAgICpcbiAgICogQHR5cGUge1N5bWJvbFBhdGh9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHBhdGg6ICdDSVJDTEUnIHwgJ0JBQ0tXQVJEX0NMT1NFRF9BUlJPVycgfCAnQkFDS1dBUkRfT1BFTl9BUlJPVycgfCAnRk9SV0FSRF9DTE9TRURfQVJST1cnIHxcbiAgICAgICAgJ0ZPUldBUkRfT1BFTl9BUlJPVycgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgdGhlIHN5bWJvbCwgZXhwcmVzc2VkIGNsb2Nrd2lzZSBpbiBkZWdyZWVzLlxuICAgKiBEZWZhdWx0cyB0byAwLiBBIHN5bWJvbCB3aGVyZSBgZml4ZWRSb3RhdGlvbmAgaXMgYGZhbHNlYCBpcyByb3RhdGVkIHJlbGF0aXZlIHRvXG4gICAqIHRoZSBhbmdsZSBvZiB0aGUgZWRnZSBvbiB3aGljaCBpdCBsaWVzLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSByb3RhdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBzeW1ib2wgaXMgc2NhbGVkIGluIHNpemUuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugd2VpZ2h0XG4gICAqIG9mIHRoZSBwb2x5bGluZTsgYWZ0ZXIgc2NhbGluZywgdGhlIHN5bWJvbCBtdXN0IGxpZSBpbnNpZGUgYSBzcXVhcmUgMjIgcGl4ZWxzIGluXG4gICAqIHNpemUgY2VudGVyZWQgYXQgdGhlIHN5bWJvbCdzIGFuY2hvci5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQG1lbWJlcm9mIEFnbVBvbHlsaW5lSWNvblxuICAgKi9cbiAgQElucHV0KCkgc2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZFxuICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIHBvbHlsaW5lLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3Mgc3Ryb2tlIG9wYWNpdHkuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugb3BhY2l0eSBvZiB0aGUgcG9seWxpbmUuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBtZW1iZXJvZiBBZ21Qb2x5bGluZUljb25cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSB3ZWlnaHQuIERlZmF1bHRzIHRvIHRoZSBzY2FsZSBvZiB0aGUgc3ltYm9sLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAbWVtYmVyb2YgQWdtUG9seWxpbmVJY29uXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWNvbiBTZXF1ZW5jZSBwYXRoIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=