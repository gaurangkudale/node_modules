import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class GridPanelSeriesComponent {
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.gridPanels = this.getGridPanels();
    }
    getGridPanels() {
        return this.data.map(d => {
            let offset;
            let width;
            let height;
            let x;
            let y;
            let className = 'odd';
            if (this.orient === 'vertical') {
                const position = this.xScale(d.name);
                const positionIndex = Number.parseInt((position / this.xScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = 'even';
                }
                offset = this.xScale.bandwidth() * this.xScale.paddingInner();
                width = this.xScale.bandwidth() + offset;
                height = this.dims.height;
                x = this.xScale(d.name) - offset / 2;
                y = 0;
            }
            else if (this.orient === 'horizontal') {
                const position = this.yScale(d.name);
                const positionIndex = Number.parseInt((position / this.yScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = 'even';
                }
                offset = this.yScale.bandwidth() * this.yScale.paddingInner();
                width = this.dims.width;
                height = this.yScale.bandwidth() + offset;
                x = 0;
                y = this.yScale(d.name) - offset / 2;
            }
            return {
                name: d.name,
                class: className,
                height,
                width,
                x,
                y
            };
        });
    }
}
GridPanelSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-grid-panel-series]',
                template: `
    <svg:g
      ngx-charts-grid-panel
      *ngFor="let gridPanel of gridPanels"
      [height]="gridPanel.height"
      [width]="gridPanel.width"
      [x]="gridPanel.x"
      [y]="gridPanel.y"
      [class.grid-panel]="true"
      [class.odd]="gridPanel.class === 'odd'"
      [class.even]="gridPanel.class === 'even'"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GridPanelSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    dims: [{ type: Input }],
    xScale: [{ type: Input }],
    yScale: [{ type: Input }],
    orient: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1wYW5lbC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ncmlkLXBhbmVsLXNlcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJwRyxNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSSxLQUFLLENBQUM7WUFDVixJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtnQkFDOUIsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUV0RixJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQixTQUFTLEdBQUcsTUFBTSxDQUFDO2lCQUNwQjtnQkFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM5RCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQ3pDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDUDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUFFO2dCQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRXRGLElBQUksYUFBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLFNBQVMsR0FBRyxNQUFNLENBQUM7aUJBQ3BCO2dCQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRTlELEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsT0FBTztnQkFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7Z0JBQ1osS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxDQUFDO2dCQUNELENBQUM7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OzttQkFJRSxLQUFLO21CQUdMLEtBQUs7cUJBR0wsS0FBSztxQkFHTCxLQUFLO3FCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1ncmlkLXBhbmVsLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Z1xuICAgICAgbmd4LWNoYXJ0cy1ncmlkLXBhbmVsXG4gICAgICAqbmdGb3I9XCJsZXQgZ3JpZFBhbmVsIG9mIGdyaWRQYW5lbHNcIlxuICAgICAgW2hlaWdodF09XCJncmlkUGFuZWwuaGVpZ2h0XCJcbiAgICAgIFt3aWR0aF09XCJncmlkUGFuZWwud2lkdGhcIlxuICAgICAgW3hdPVwiZ3JpZFBhbmVsLnhcIlxuICAgICAgW3ldPVwiZ3JpZFBhbmVsLnlcIlxuICAgICAgW2NsYXNzLmdyaWQtcGFuZWxdPVwidHJ1ZVwiXG4gICAgICBbY2xhc3Mub2RkXT1cImdyaWRQYW5lbC5jbGFzcyA9PT0gJ29kZCdcIlxuICAgICAgW2NsYXNzLmV2ZW5dPVwiZ3JpZFBhbmVsLmNsYXNzID09PSAnZXZlbidcIlxuICAgID48L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkUGFuZWxTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBncmlkUGFuZWxzOiBhbnlbXTtcblxuICBASW5wdXQoKVxuICBkYXRhO1xuXG4gIEBJbnB1dCgpXG4gIGRpbXM7XG5cbiAgQElucHV0KClcbiAgeFNjYWxlO1xuXG4gIEBJbnB1dCgpXG4gIHlTY2FsZTtcblxuICBASW5wdXQoKVxuICBvcmllbnQ7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkUGFuZWxzID0gdGhpcy5nZXRHcmlkUGFuZWxzKCk7XG4gIH1cblxuICBnZXRHcmlkUGFuZWxzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcChkID0+IHtcbiAgICAgIGxldCBvZmZzZXQ7XG4gICAgICBsZXQgd2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0O1xuICAgICAgbGV0IHg7XG4gICAgICBsZXQgeTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnb2RkJztcblxuICAgICAgaWYgKHRoaXMub3JpZW50ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnhTY2FsZShkLm5hbWUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkluZGV4ID0gTnVtYmVyLnBhcnNlSW50KChwb3NpdGlvbiAvIHRoaXMueFNjYWxlLnN0ZXAoKSkudG9TdHJpbmcoKSwgMTApO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbkluZGV4ICUgMiA9PT0gMSkge1xuICAgICAgICAgIGNsYXNzTmFtZSA9ICdldmVuJztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgPSB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKSAqIHRoaXMueFNjYWxlLnBhZGRpbmdJbm5lcigpO1xuICAgICAgICB3aWR0aCA9IHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpICsgb2Zmc2V0O1xuICAgICAgICBoZWlnaHQgPSB0aGlzLmRpbXMuaGVpZ2h0O1xuICAgICAgICB4ID0gdGhpcy54U2NhbGUoZC5uYW1lKSAtIG9mZnNldCAvIDI7XG4gICAgICAgIHkgPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy55U2NhbGUoZC5uYW1lKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25JbmRleCA9IE51bWJlci5wYXJzZUludCgocG9zaXRpb24gLyB0aGlzLnlTY2FsZS5zdGVwKCkpLnRvU3RyaW5nKCksIDEwKTtcblxuICAgICAgICBpZiAocG9zaXRpb25JbmRleCAlIDIgPT09IDEpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSAnZXZlbic7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ID0gdGhpcy55U2NhbGUuYmFuZHdpZHRoKCkgKiB0aGlzLnlTY2FsZS5wYWRkaW5nSW5uZXIoKTtcblxuICAgICAgICB3aWR0aCA9IHRoaXMuZGltcy53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy55U2NhbGUuYmFuZHdpZHRoKCkgKyBvZmZzZXQ7XG4gICAgICAgIHggPSAwO1xuICAgICAgICB5ID0gdGhpcy55U2NhbGUoZC5uYW1lKSAtIG9mZnNldCAvIDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19