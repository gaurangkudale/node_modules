import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { line } from 'd3-shape';
export class GaugeAxisComponent {
    constructor() {
        this.rotate = '';
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.rotationAngle = -90 + this.startAngle;
        this.rotate = `rotate(${this.rotationAngle})`;
        this.ticks = this.getTicks();
    }
    getTicks() {
        const bigTickSegment = this.angleSpan / this.bigSegments;
        const smallTickSegment = bigTickSegment / this.smallSegments;
        const tickLength = 20;
        const ticks = {
            big: [],
            small: []
        };
        const startDistance = this.radius + 10;
        const textDist = startDistance + tickLength + 10;
        for (let i = 0; i <= this.bigSegments; i++) {
            const angleDeg = i * bigTickSegment;
            const angle = (angleDeg * Math.PI) / 180;
            const textAnchor = this.getTextAnchor(angleDeg);
            let skip = false;
            if (i === 0 && this.angleSpan === 360) {
                skip = true;
            }
            if (!skip) {
                let text = Number.parseFloat(this.valueScale.invert(angleDeg).toString()).toLocaleString();
                if (this.tickFormatting) {
                    text = this.tickFormatting(text);
                }
                ticks.big.push({
                    line: this.getTickPath(startDistance, tickLength, angle),
                    textAnchor,
                    text,
                    textTransform: `
            translate(${textDist * Math.cos(angle)}, ${textDist * Math.sin(angle)}) rotate(${-this.rotationAngle})
          `
                });
            }
            if (i === this.bigSegments) {
                continue;
            }
            for (let j = 1; j <= this.smallSegments; j++) {
                const smallAngleDeg = angleDeg + j * smallTickSegment;
                const smallAngle = (smallAngleDeg * Math.PI) / 180;
                ticks.small.push({
                    line: this.getTickPath(startDistance, tickLength / 2, smallAngle)
                });
            }
        }
        return ticks;
    }
    getTextAnchor(angle) {
        // [0, 45] = 'middle';
        // [46, 135] = 'start';
        // [136, 225] = 'middle';
        // [226, 315] = 'end';
        angle = (this.startAngle + angle) % 360;
        let textAnchor = 'middle';
        if (angle > 45 && angle <= 135) {
            textAnchor = 'start';
        }
        else if (angle > 225 && angle <= 315) {
            textAnchor = 'end';
        }
        return textAnchor;
    }
    getTickPath(startDistance, tickLength, angle) {
        const y1 = startDistance * Math.sin(angle);
        const y2 = (startDistance + tickLength) * Math.sin(angle);
        const x1 = startDistance * Math.cos(angle);
        const x2 = (startDistance + tickLength) * Math.cos(angle);
        const points = [
            { x: x1, y: y1 },
            { x: x2, y: y2 }
        ];
        const lineGenerator = line()
            .x(d => d.x)
            .y(d => d.y);
        return lineGenerator(points);
    }
}
GaugeAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-gauge-axis]',
                template: `
    <svg:g [attr.transform]="rotate">
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:text
          [style.textAnchor]="tick.textAnchor"
          [attr.transform]="tick.textTransform"
          alignment-baseline="central"
        >
          {{ tick.text }}
        </svg:text>
      </svg:g>
      <svg:g *ngFor="let tick of ticks.small" class="gauge-tick gauge-tick-small">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GaugeAxisComponent.propDecorators = {
    bigSegments: [{ type: Input }],
    smallSegments: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    angleSpan: [{ type: Input }],
    startAngle: [{ type: Input }],
    radius: [{ type: Input }],
    valueScale: [{ type: Input }],
    tickFormatting: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvZ2F1Z2UvZ2F1Z2UtYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUF5QmhDLE1BQU0sT0FBTyxrQkFBa0I7SUF2Qi9CO1FBb0NFLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFrR3RCLENBQUM7SUFoR0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pELE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0QsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sS0FBSyxHQUFHO1lBQ1osR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxhQUFhLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVoRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFO2dCQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0YsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUM7b0JBQ3hELFVBQVU7b0JBQ1YsSUFBSTtvQkFDSixhQUFhLEVBQUU7d0JBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYTtXQUNyRztpQkFDRixDQUFDLENBQUM7YUFDSjtZQUVELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLFNBQVM7YUFDVjtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxNQUFNLGFBQWEsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUN0RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUVuRCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUM7aUJBQ2xFLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFFdEIsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLEVBQUUsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQzlCLFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDdEI7YUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUN0QyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUs7UUFDMUMsTUFBTSxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE1BQU0sTUFBTSxHQUFHO1lBQ2IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7U0FDakIsQ0FBQztRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksRUFBTzthQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBcklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OzBCQUVFLEtBQUs7NEJBQ0wsS0FBSztrQkFDTCxLQUFLO2tCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbGluZSB9IGZyb20gJ2QzLXNoYXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWdhdWdlLWF4aXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cInJvdGF0ZVwiPlxuICAgICAgPHN2ZzpnICpuZ0Zvcj1cImxldCB0aWNrIG9mIHRpY2tzLmJpZ1wiIGNsYXNzPVwiZ2F1Z2UtdGljayBnYXVnZS10aWNrLWxhcmdlXCI+XG4gICAgICAgIDxzdmc6cGF0aCBbYXR0ci5kXT1cInRpY2subGluZVwiIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgICAgPHN2ZzpnICpuZ0Zvcj1cImxldCB0aWNrIG9mIHRpY2tzLmJpZ1wiIGNsYXNzPVwiZ2F1Z2UtdGljayBnYXVnZS10aWNrLWxhcmdlXCI+XG4gICAgICAgIDxzdmc6dGV4dFxuICAgICAgICAgIFtzdHlsZS50ZXh0QW5jaG9yXT1cInRpY2sudGV4dEFuY2hvclwiXG4gICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInRpY2sudGV4dFRyYW5zZm9ybVwiXG4gICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwiY2VudHJhbFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB0aWNrLnRleHQgfX1cbiAgICAgICAgPC9zdmc6dGV4dD5cbiAgICAgIDwvc3ZnOmc+XG4gICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3Muc21hbGxcIiBjbGFzcz1cImdhdWdlLXRpY2sgZ2F1Z2UtdGljay1zbWFsbFwiPlxuICAgICAgICA8c3ZnOnBhdGggW2F0dHIuZF09XCJ0aWNrLmxpbmVcIiAvPlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBiaWdTZWdtZW50czogYW55O1xuICBASW5wdXQoKSBzbWFsbFNlZ21lbnRzOiBhbnk7XG4gIEBJbnB1dCgpIG1pbjogYW55O1xuICBASW5wdXQoKSBtYXg6IGFueTtcbiAgQElucHV0KCkgYW5nbGVTcGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0YXJ0QW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCkgcmFkaXVzOiBhbnk7XG4gIEBJbnB1dCgpIHZhbHVlU2NhbGU6IGFueTtcbiAgQElucHV0KCkgdGlja0Zvcm1hdHRpbmc6IGFueTtcblxuICB0aWNrczogYW55O1xuICByb3RhdGlvbkFuZ2xlOiBudW1iZXI7XG4gIHJvdGF0ZTogc3RyaW5nID0gJyc7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5yb3RhdGlvbkFuZ2xlID0gLTkwICsgdGhpcy5zdGFydEFuZ2xlO1xuICAgIHRoaXMucm90YXRlID0gYHJvdGF0ZSgke3RoaXMucm90YXRpb25BbmdsZX0pYDtcbiAgICB0aGlzLnRpY2tzID0gdGhpcy5nZXRUaWNrcygpO1xuICB9XG5cbiAgZ2V0VGlja3MoKTogYW55IHtcbiAgICBjb25zdCBiaWdUaWNrU2VnbWVudCA9IHRoaXMuYW5nbGVTcGFuIC8gdGhpcy5iaWdTZWdtZW50cztcbiAgICBjb25zdCBzbWFsbFRpY2tTZWdtZW50ID0gYmlnVGlja1NlZ21lbnQgLyB0aGlzLnNtYWxsU2VnbWVudHM7XG4gICAgY29uc3QgdGlja0xlbmd0aCA9IDIwO1xuICAgIGNvbnN0IHRpY2tzID0ge1xuICAgICAgYmlnOiBbXSxcbiAgICAgIHNtYWxsOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCBzdGFydERpc3RhbmNlID0gdGhpcy5yYWRpdXMgKyAxMDtcbiAgICBjb25zdCB0ZXh0RGlzdCA9IHN0YXJ0RGlzdGFuY2UgKyB0aWNrTGVuZ3RoICsgMTA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmJpZ1NlZ21lbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IGFuZ2xlRGVnID0gaSAqIGJpZ1RpY2tTZWdtZW50O1xuICAgICAgY29uc3QgYW5nbGUgPSAoYW5nbGVEZWcgKiBNYXRoLlBJKSAvIDE4MDtcblxuICAgICAgY29uc3QgdGV4dEFuY2hvciA9IHRoaXMuZ2V0VGV4dEFuY2hvcihhbmdsZURlZyk7XG5cbiAgICAgIGxldCBza2lwID0gZmFsc2U7XG4gICAgICBpZiAoaSA9PT0gMCAmJiB0aGlzLmFuZ2xlU3BhbiA9PT0gMzYwKSB7XG4gICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNraXApIHtcbiAgICAgICAgbGV0IHRleHQgPSBOdW1iZXIucGFyc2VGbG9hdCh0aGlzLnZhbHVlU2NhbGUuaW52ZXJ0KGFuZ2xlRGVnKS50b1N0cmluZygpKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBpZiAodGhpcy50aWNrRm9ybWF0dGluZykge1xuICAgICAgICAgIHRleHQgPSB0aGlzLnRpY2tGb3JtYXR0aW5nKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRpY2tzLmJpZy5wdXNoKHtcbiAgICAgICAgICBsaW5lOiB0aGlzLmdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2UsIHRpY2tMZW5ndGgsIGFuZ2xlKSxcbiAgICAgICAgICB0ZXh0QW5jaG9yLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogYFxuICAgICAgICAgICAgdHJhbnNsYXRlKCR7dGV4dERpc3QgKiBNYXRoLmNvcyhhbmdsZSl9LCAke3RleHREaXN0ICogTWF0aC5zaW4oYW5nbGUpfSkgcm90YXRlKCR7LXRoaXMucm90YXRpb25BbmdsZX0pXG4gICAgICAgICAgYFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IHRoaXMuYmlnU2VnbWVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMuc21hbGxTZWdtZW50czsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNtYWxsQW5nbGVEZWcgPSBhbmdsZURlZyArIGogKiBzbWFsbFRpY2tTZWdtZW50O1xuICAgICAgICBjb25zdCBzbWFsbEFuZ2xlID0gKHNtYWxsQW5nbGVEZWcgKiBNYXRoLlBJKSAvIDE4MDtcblxuICAgICAgICB0aWNrcy5zbWFsbC5wdXNoKHtcbiAgICAgICAgICBsaW5lOiB0aGlzLmdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2UsIHRpY2tMZW5ndGggLyAyLCBzbWFsbEFuZ2xlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlja3M7XG4gIH1cblxuICBnZXRUZXh0QW5jaG9yKGFuZ2xlKSB7XG4gICAgLy8gWzAsIDQ1XSA9ICdtaWRkbGUnO1xuICAgIC8vIFs0NiwgMTM1XSA9ICdzdGFydCc7XG4gICAgLy8gWzEzNiwgMjI1XSA9ICdtaWRkbGUnO1xuICAgIC8vIFsyMjYsIDMxNV0gPSAnZW5kJztcblxuICAgIGFuZ2xlID0gKHRoaXMuc3RhcnRBbmdsZSArIGFuZ2xlKSAlIDM2MDtcbiAgICBsZXQgdGV4dEFuY2hvciA9ICdtaWRkbGUnO1xuICAgIGlmIChhbmdsZSA+IDQ1ICYmIGFuZ2xlIDw9IDEzNSkge1xuICAgICAgdGV4dEFuY2hvciA9ICdzdGFydCc7XG4gICAgfSBlbHNlIGlmIChhbmdsZSA+IDIyNSAmJiBhbmdsZSA8PSAzMTUpIHtcbiAgICAgIHRleHRBbmNob3IgPSAnZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIHRleHRBbmNob3I7XG4gIH1cblxuICBnZXRUaWNrUGF0aChzdGFydERpc3RhbmNlLCB0aWNrTGVuZ3RoLCBhbmdsZSk6IGFueSB7XG4gICAgY29uc3QgeTEgPSBzdGFydERpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IHkyID0gKHN0YXJ0RGlzdGFuY2UgKyB0aWNrTGVuZ3RoKSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB4MSA9IHN0YXJ0RGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgY29uc3QgeDIgPSAoc3RhcnREaXN0YW5jZSArIHRpY2tMZW5ndGgpICogTWF0aC5jb3MoYW5nbGUpO1xuXG4gICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgeyB4OiB4MSwgeTogeTEgfSxcbiAgICAgIHsgeDogeDIsIHk6IHkyIH1cbiAgICBdO1xuICAgIGNvbnN0IGxpbmVHZW5lcmF0b3IgPSBsaW5lPGFueT4oKVxuICAgICAgLngoZCA9PiBkLngpXG4gICAgICAueShkID0+IGQueSk7XG4gICAgcmV0dXJuIGxpbmVHZW5lcmF0b3IocG9pbnRzKTtcbiAgfVxufVxuIl19