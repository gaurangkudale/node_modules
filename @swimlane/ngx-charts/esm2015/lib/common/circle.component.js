import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener } from '@angular/core';
export class CircleComponent {
    constructor() {
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    onClick() {
        this.select.emit(this.data);
    }
    onMouseEnter() {
        this.activate.emit(this.data);
    }
    onMouseLeave() {
        this.deactivate.emit(this.data);
    }
    ngOnChanges(changes) {
        this.classNames = Array.isArray(this.classNames) ? this.classNames.join(' ') : '';
        this.classNames += 'circle';
    }
}
CircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-circle]',
                template: `
    <svg:circle
      [attr.cx]="cx"
      [attr.cy]="cy"
      [attr.r]="r"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.opacity]="circleOpacity"
      [attr.class]="classNames"
      [attr.pointer-events]="pointerEvents"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CircleComponent.propDecorators = {
    cx: [{ type: Input }],
    cy: [{ type: Input }],
    r: [{ type: Input }],
    fill: [{ type: Input }],
    stroke: [{ type: Input }],
    data: [{ type: Input }],
    classNames: [{ type: Input }],
    circleOpacity: [{ type: Input }],
    pointerEvents: [{ type: Input }],
    select: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFrQnZCLE1BQU0sT0FBTyxlQUFlO0lBaEI1QjtRQTJCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXFCNUMsQ0FBQztJQWxCQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O2lCQUVFLEtBQUs7aUJBQ0wsS0FBSztnQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3FCQUVMLE1BQU07dUJBQ04sTUFBTTt5QkFDTixNQUFNO3NCQUVOLFlBQVksU0FBQyxPQUFPOzJCQUtwQixZQUFZLFNBQUMsWUFBWTsyQkFLekIsWUFBWSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtY2lyY2xlXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpjaXJjbGVcbiAgICAgIFthdHRyLmN4XT1cImN4XCJcbiAgICAgIFthdHRyLmN5XT1cImN5XCJcbiAgICAgIFthdHRyLnJdPVwiclwiXG4gICAgICBbYXR0ci5maWxsXT1cImZpbGxcIlxuICAgICAgW2F0dHIuc3Ryb2tlXT1cInN0cm9rZVwiXG4gICAgICBbYXR0ci5vcGFjaXR5XT1cImNpcmNsZU9wYWNpdHlcIlxuICAgICAgW2F0dHIuY2xhc3NdPVwiY2xhc3NOYW1lc1wiXG4gICAgICBbYXR0ci5wb2ludGVyLWV2ZW50c109XCJwb2ludGVyRXZlbnRzXCJcbiAgICAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjeDtcbiAgQElucHV0KCkgY3k7XG4gIEBJbnB1dCgpIHI7XG4gIEBJbnB1dCgpIGZpbGw7XG4gIEBJbnB1dCgpIHN0cm9rZTtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgY2xhc3NOYW1lcztcbiAgQElucHV0KCkgY2lyY2xlT3BhY2l0eTtcbiAgQElucHV0KCkgcG9pbnRlckV2ZW50cztcblxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IEFycmF5LmlzQXJyYXkodGhpcy5jbGFzc05hbWVzKSA/IHRoaXMuY2xhc3NOYW1lcy5qb2luKCcgJykgOiAnJztcbiAgICB0aGlzLmNsYXNzTmFtZXMgKz0gJ2NpcmNsZSc7XG4gIH1cbn1cbiJdfQ==