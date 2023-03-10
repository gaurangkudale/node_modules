/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Directive, Input } from '@angular/core';
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */
import * as ɵngcc0 from '@angular/core';
var MatTextareaAutosize = /** @class */ (function (_super) {
    __extends(MatTextareaAutosize, _super);
    function MatTextareaAutosize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMinRows", {
        get: function () { return this.minRows; },
        set: function (value) { this.minRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMaxRows", {
        get: function () { return this.maxRows; },
        set: function (value) { this.maxRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosize", {
        get: function () { return this.enabled; },
        set: function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matTextareaAutosize", {
        get: function () { return this.enabled; },
        set: function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{ type: Input }],
        matAutosizeMaxRows: [{ type: Input }],
        matAutosize: [{ type: Input, args: ['mat-autosize',] }],
        matTextareaAutosize: [{ type: Input }]
    };
MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) { return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize); };
MatTextareaAutosize.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: MatTextareaAutosize, selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"], inputs: { cdkAutosizeMinRows: "cdkAutosizeMinRows", cdkAutosizeMaxRows: "cdkAutosizeMaxRows", matAutosizeMinRows: "matAutosizeMinRows", matAutosizeMaxRows: "matAutosizeMaxRows", matAutosize: ["mat-autosize", "matAutosize"], matTextareaAutosize: "matTextareaAutosize" }, exportAs: ["matTextareaAutosize"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
var ɵMatTextareaAutosize_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatTextareaAutosize);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MatTextareaAutosize, [{
        type: Directive,
        args: [{
                selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                exportAs: 'matTextareaAutosize',
                inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                host: {
                    'class': 'cdk-textarea-autosize mat-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], null, { matAutosizeMinRows: [{
            type: Input
        }], matAutosizeMaxRows: [{
            type: Input
        }], matAutosize: [{
            type: Input,
            args: ['mat-autosize']
        }], matTextareaAutosize: [{
            type: Input
        }] }); })();
    return MatTextareaAutosize;
}(CdkTextareaAutosize));
export { MatTextareaAutosize };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9pbnB1dC9hdXRvc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBQ0g7QUFDZ0QsSUFVUCx1Q0FBbUI7QUFBQyxJQVg3RDtBQUNvQjtBQUNJLElBeUJ4QixDQUFDO0FBQ0QsSUFoQkUsc0JBQ0ksbURBQWtCO0FBQUksYUFEMUIsY0FDbUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMxRCxhQUFDLFVBQXVCLEtBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFakU7QUFDZTtBQUEyQixPQUppQjtBQUMzRCxJQUVFLHNCQUNJLG1EQUFrQjtBQUFJLGFBRDFCLGNBQ21DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDMUQsYUFBQyxVQUF1QixLQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRWpFO0FBQ0M7QUFBMkIsT0FKK0I7QUFDM0QsSUFFRSxzQkFDSSw0Q0FBVztBQUFJLGFBRG5CLGNBQzZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDcEQsYUFBQyxVQUFnQixLQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRTNEO0FBQ2U7QUFBMkIsT0FKVztBQUNyRCxJQUVFLHNCQUNJLG9EQUFtQjtBQUFJLGFBRDNCLGNBQ3FDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUQsYUFBQyxVQUF3QixLQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xFO0FBQ3dCO0FBQTJCLE9BSFMsQUFkcEQ7QUFBQztZQVhULFNBQVMsU0FBQyw5QkFXMEMscUNBQ2xELEtBQUs7S0FYTixRQUFRLEVBQUUsZkFZVixxQ0FHQyxLQUFLO3VCQWYyRCxzQkFDakUsUUFBUSxFQUFFLHZEQWVWLDhCQUdDLEtBQUssU0FBQyxjQUFjO1dBbEJVLHNCQUMvQixNQUFNLEVBQUUsQ0FBQywxQ0FrQk4sc0NBR0YsS0FBSztBQUNQO1FBdEI4QixFQUFFLG9CQUFvQixDQUFDLHNCQUNwRCxJQUFJLEVBQUUsMEJBQ0osT0FBTyxFQUFFLG9DQUFvQztpQkFDN0MseUZBQXlGLHlCQUN6Riw0RkFBNEYseUJBQzVGLE1BQU0sRUFBRSxHQUFHLHVCQUNaLG1CQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBZU07QUFBQyxJQUVSLDBCQUFDO0FBQ0EsQ0FEQSxBQTNCRCxDQVd5QyxtQkFBbUIsR0FnQjNEO0FBQ0QsU0FqQmEsbUJBQW1CO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBhdXRvbWF0aWNhbGx5IHJlc2l6ZSBhIHRleHRhcmVhIHRvIGZpdCBpdHMgY29udGVudC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgY2RrVGV4dGFyZWFBdXRvc2l6ZWAgZnJvbSBgQGFuZ3VsYXIvY2RrL3RleHQtZmllbGRgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RleHRhcmVhW21hdC1hdXRvc2l6ZV0sIHRleHRhcmVhW21hdFRleHRhcmVhQXV0b3NpemVdJyxcbiAgZXhwb3J0QXM6ICdtYXRUZXh0YXJlYUF1dG9zaXplJyxcbiAgaW5wdXRzOiBbJ2Nka0F1dG9zaXplTWluUm93cycsICdjZGtBdXRvc2l6ZU1heFJvd3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdGV4dGFyZWEtYXV0b3NpemUgbWF0LWF1dG9zaXplJyxcbiAgICAvLyBUZXh0YXJlYSBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIGRpcmVjdGl2ZSBhcHBsaWVkIHNob3VsZCBoYXZlIGEgc2luZ2xlIHJvdyBieSBkZWZhdWx0LlxuICAgIC8vIEJyb3dzZXJzIG5vcm1hbGx5IHNob3cgdHdvIHJvd3MgYnkgZGVmYXVsdCBhbmQgdGhlcmVmb3JlIHRoaXMgbGltaXRzIHRoZSBtaW5Sb3dzIGJpbmRpbmcuXG4gICAgJ3Jvd3MnOiAnMScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRleHRhcmVhQXV0b3NpemUgZXh0ZW5kcyBDZGtUZXh0YXJlYUF1dG9zaXplIHtcbiAgQElucHV0KClcbiAgZ2V0IG1hdEF1dG9zaXplTWluUm93cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5taW5Sb3dzOyB9XG4gIHNldCBtYXRBdXRvc2l6ZU1pblJvd3ModmFsdWU6IG51bWJlcikgeyB0aGlzLm1pblJvd3MgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtYXRBdXRvc2l6ZU1heFJvd3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMubWF4Um93czsgfVxuICBzZXQgbWF0QXV0b3NpemVNYXhSb3dzKHZhbHVlOiBudW1iZXIpIHsgdGhpcy5tYXhSb3dzID0gdmFsdWU7IH1cblxuICBASW5wdXQoJ21hdC1hdXRvc2l6ZScpXG4gIGdldCBtYXRBdXRvc2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZW5hYmxlZDsgfVxuICBzZXQgbWF0QXV0b3NpemUodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5lbmFibGVkID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBnZXQgbWF0VGV4dGFyZWFBdXRvc2l6ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZW5hYmxlZDsgfVxuICBzZXQgbWF0VGV4dGFyZWFBdXRvc2l6ZSh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmVuYWJsZWQgPSB2YWx1ZTsgfVxufVxuIl19