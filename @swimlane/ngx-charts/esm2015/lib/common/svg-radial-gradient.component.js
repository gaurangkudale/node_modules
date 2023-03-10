import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class SvgRadialGradientComponent {
    constructor() {
        this.endOpacity = 1;
        this.cx = 0;
        this.cy = 0;
    }
    get stops() {
        return this.stopsInput || this.stopsDefault;
    }
    set stops(value) {
        this.stopsInput = value;
    }
    ngOnChanges(changes) {
        this.r = '30%';
        if ('color' in changes || 'startOpacity' in changes || 'endOpacity' in changes) {
            this.stopsDefault = [
                {
                    offset: 0,
                    color: this.color,
                    opacity: this.startOpacity
                },
                {
                    offset: 100,
                    color: this.color,
                    opacity: this.endOpacity
                }
            ];
        }
    }
}
SvgRadialGradientComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-svg-radial-gradient]',
                template: `
    <svg:radialGradient [id]="name" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" gradientUnits="userSpaceOnUse">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:radialGradient>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
SvgRadialGradientComponent.propDecorators = {
    color: [{ type: Input }],
    name: [{ type: Input }],
    startOpacity: [{ type: Input }],
    endOpacity: [{ type: Input }],
    cx: [{ type: Input }],
    cy: [{ type: Input }],
    stops: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXJhZGlhbC1ncmFkaWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3N2Zy1yYWRpYWwtZ3JhZGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLHVCQUF1QixFQUFpQixNQUFNLGVBQWUsQ0FBQztBQWdCcEcsTUFBTSxPQUFPLDBCQUEwQjtJQWR2QztRQWtCVyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBRSxHQUFXLENBQUMsQ0FBQztRQUNmLE9BQUUsR0FBVyxDQUFDLENBQUM7SUFpQzFCLENBQUM7SUEvQkMsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQU9ELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxjQUFjLElBQUksT0FBTyxJQUFJLFlBQVksSUFBSSxPQUFPLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEI7b0JBQ0UsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQzNCO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUN6QjthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7aUJBQ0wsS0FBSztpQkFDTCxLQUFLO29CQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1zdmctcmFkaWFsLWdyYWRpZW50XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpyYWRpYWxHcmFkaWVudCBbaWRdPVwibmFtZVwiIFthdHRyLmN4XT1cImN4XCIgW2F0dHIuY3ldPVwiY3lcIiBbYXR0ci5yXT1cInJcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgIDxzdmc6c3RvcFxuICAgICAgICAqbmdGb3I9XCJsZXQgc3RvcCBvZiBzdG9wc1wiXG4gICAgICAgIFthdHRyLm9mZnNldF09XCJzdG9wLm9mZnNldCArICclJ1wiXG4gICAgICAgIFtzdHlsZS5zdG9wLWNvbG9yXT1cInN0b3AuY29sb3JcIlxuICAgICAgICBbc3R5bGUuc3RvcC1vcGFjaXR5XT1cInN0b3Aub3BhY2l0eVwiXG4gICAgICAvPlxuICAgIDwvc3ZnOnJhZGlhbEdyYWRpZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdmdSYWRpYWxHcmFkaWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3RhcnRPcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuZE9wYWNpdHkgPSAxO1xuICBASW5wdXQoKSBjeDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY3k6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0b3BzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5zdG9wc0lucHV0IHx8IHRoaXMuc3RvcHNEZWZhdWx0O1xuICB9XG5cbiAgc2V0IHN0b3BzKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuc3RvcHNJbnB1dCA9IHZhbHVlO1xuICB9XG5cbiAgcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3RvcHNJbnB1dDogYW55W107XG4gIHByaXZhdGUgc3RvcHNEZWZhdWx0OiBhbnlbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5yID0gJzMwJSc7XG4gICAgaWYgKCdjb2xvcicgaW4gY2hhbmdlcyB8fCAnc3RhcnRPcGFjaXR5JyBpbiBjaGFuZ2VzIHx8ICdlbmRPcGFjaXR5JyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnN0b3BzRGVmYXVsdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICBvcGFjaXR5OiB0aGlzLnN0YXJ0T3BhY2l0eVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb2Zmc2V0OiAxMDAsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgICAgb3BhY2l0eTogdGhpcy5lbmRPcGFjaXR5XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICB9XG59XG4iXX0=