import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { invertColor } from '../utils/color-utils';
export class CardSeriesComponent {
    constructor() {
        this.innerPadding = 15;
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        if (this.data.length > 2) {
            const valueFormatting = this.valueFormatting || (card => card.value.toLocaleString());
            const sortedLengths = this.data
                .map(d => {
                const hasValue = d && d.data && typeof d.data.value !== 'undefined' && d.data.value !== null;
                return hasValue
                    ? valueFormatting({
                        data: d.data,
                        label: d ? d.data.name : '',
                        value: d && d.data ? d.data.value : ''
                    }).length
                    : 0;
            })
                .sort((a, b) => b - a);
            const idx = Math.ceil(this.data.length / 2);
            this.medianSize = sortedLengths[idx];
        }
        const cards = this.getCards();
        this.cards = cards.filter(d => d.data.value !== null);
        this.emptySlots = cards.filter(d => d.data.value === null);
    }
    getCards() {
        const yPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[0] + this.innerPadding[2];
        const xPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[1] + this.innerPadding[3];
        return this.data.map((d, index) => {
            let label = d.data.name;
            if (label && label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label ? label.toLocaleString() : label;
            }
            const value = d.data.value;
            const valueColor = label ? this.colors.getColor(label) : this.emptyColor;
            const color = this.cardColor || valueColor || '#000';
            return {
                x: d.x,
                y: d.y,
                width: d.width - xPadding,
                height: d.height - yPadding,
                color,
                bandColor: this.bandColor || valueColor,
                textColor: this.textColor || invertColor(color),
                label,
                data: d.data,
                tooltipText: `${label}: ${value}`
            };
        });
    }
    trackBy(index, card) {
        return card.label;
    }
    onClick(data) {
        this.select.emit(data);
    }
}
CardSeriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[ngx-charts-card-series]',
                template: `
    <svg:rect
      *ngFor="let c of emptySlots; trackBy: trackBy"
      class="card-empty"
      [attr.x]="c.x"
      [attr.y]="c.y"
      [style.fill]="emptyColor"
      [attr.width]="c.width"
      [attr.height]="c.height"
      rx="3"
      ry="3"
    />
    <svg:g
      ngx-charts-card
      *ngFor="let c of cards; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [color]="c.color"
      [bandColor]="c.bandColor"
      [textColor]="c.textColor"
      [data]="c.data"
      [label]="c.label"
      [medianSize]="medianSize"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [animations]="animations"
      (select)="onClick($event)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CardSeriesComponent.propDecorators = {
    data: [{ type: Input }],
    slots: [{ type: Input }],
    dims: [{ type: Input }],
    colors: [{ type: Input }],
    innerPadding: [{ type: Input }],
    cardColor: [{ type: Input }],
    bandColor: [{ type: Input }],
    emptyColor: [{ type: Input }],
    textColor: [{ type: Input }],
    valueFormatting: [{ type: Input }],
    labelFormatting: [{ type: Input }],
    animations: [{ type: Input }],
    select: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL251bWJlci1jYXJkL2NhcmQtc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFnRG5ELE1BQU0sT0FBTyxtQkFBbUI7SUFuQ2hDO1FBd0NXLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWxCLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUloQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBMEV4QyxDQUFDO0lBcEVDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFdEYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUk7aUJBQzVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDUCxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJ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LEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRO2dCQUN6QixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRO2dCQUMzQixLQUFLO2dCQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVU7Z0JBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQy9DLEtBQUs7Z0JBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNaLFdBQVcsRUFBRSxHQUFHLEtBQUssS0FBSyxLQUFLLEVBQUU7YUFDbEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBM0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFFTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludmVydENvbG9yIH0gZnJvbSAnLi4vdXRpbHMvY29sb3ItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRNb2RlbCB7XG4gIHg7XG4gIHk7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkYXRhO1xuICB0b29sdGlwVGV4dDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtY2FyZC1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOnJlY3RcbiAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGVtcHR5U2xvdHM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgY2xhc3M9XCJjYXJkLWVtcHR5XCJcbiAgICAgIFthdHRyLnhdPVwiYy54XCJcbiAgICAgIFthdHRyLnldPVwiYy55XCJcbiAgICAgIFtzdHlsZS5maWxsXT1cImVtcHR5Q29sb3JcIlxuICAgICAgW2F0dHIud2lkdGhdPVwiYy53aWR0aFwiXG4gICAgICBbYXR0ci5oZWlnaHRdPVwiYy5oZWlnaHRcIlxuICAgICAgcng9XCIzXCJcbiAgICAgIHJ5PVwiM1wiXG4gICAgLz5cbiAgICA8c3ZnOmdcbiAgICAgIG5neC1jaGFydHMtY2FyZFxuICAgICAgKm5nRm9yPVwibGV0IGMgb2YgY2FyZHM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgW3hdPVwiYy54XCJcbiAgICAgIFt5XT1cImMueVwiXG4gICAgICBbd2lkdGhdPVwiYy53aWR0aFwiXG4gICAgICBbaGVpZ2h0XT1cImMuaGVpZ2h0XCJcbiAgICAgIFtjb2xvcl09XCJjLmNvbG9yXCJcbiAgICAgIFtiYW5kQ29sb3JdPVwiYy5iYW5kQ29sb3JcIlxuICAgICAgW3RleHRDb2xvcl09XCJjLnRleHRDb2xvclwiXG4gICAgICBbZGF0YV09XCJjLmRhdGFcIlxuICAgICAgW2xhYmVsXT1cImMubGFiZWxcIlxuICAgICAgW21lZGlhblNpemVdPVwibWVkaWFuU2l6ZVwiXG4gICAgICBbdmFsdWVGb3JtYXR0aW5nXT1cInZhbHVlRm9ybWF0dGluZ1wiXG4gICAgICBbbGFiZWxGb3JtYXR0aW5nXT1cImxhYmVsRm9ybWF0dGluZ1wiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIHNsb3RzOiBhbnlbXTtcbiAgQElucHV0KCkgZGltcztcbiAgQElucHV0KCkgY29sb3JzO1xuICBASW5wdXQoKSBpbm5lclBhZGRpbmcgPSAxNTtcblxuICBASW5wdXQoKSBjYXJkQ29sb3I7XG4gIEBJbnB1dCgpIGJhbmRDb2xvcjtcbiAgQElucHV0KCkgZW1wdHlDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDApJztcbiAgQElucHV0KCkgdGV4dENvbG9yO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FyZHM6IENhcmRNb2RlbFtdO1xuICBlbXB0eVNsb3RzOiBhbnlbXTtcbiAgbWVkaWFuU2l6ZTogbnVtYmVyO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMikge1xuICAgICAgY29uc3QgdmFsdWVGb3JtYXR0aW5nID0gdGhpcy52YWx1ZUZvcm1hdHRpbmcgfHwgKGNhcmQgPT4gY2FyZC52YWx1ZS50b0xvY2FsZVN0cmluZygpKTtcblxuICAgICAgY29uc3Qgc29ydGVkTGVuZ3RocyA9IHRoaXMuZGF0YVxuICAgICAgICAubWFwKGQgPT4ge1xuICAgICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gZCAmJiBkLmRhdGEgJiYgdHlwZW9mIGQuZGF0YS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZC5kYXRhLnZhbHVlICE9PSBudWxsO1xuICAgICAgICAgIHJldHVybiBoYXNWYWx1ZVxuICAgICAgICAgICAgPyB2YWx1ZUZvcm1hdHRpbmcoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGQuZGF0YSxcbiAgICAgICAgICAgICAgICBsYWJlbDogZCA/IGQuZGF0YS5uYW1lIDogJycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGQgJiYgZC5kYXRhID8gZC5kYXRhLnZhbHVlIDogJydcbiAgICAgICAgICAgICAgfSkubGVuZ3RoXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gICAgICBjb25zdCBpZHggPSBNYXRoLmNlaWwodGhpcy5kYXRhLmxlbmd0aCAvIDIpO1xuICAgICAgdGhpcy5tZWRpYW5TaXplID0gc29ydGVkTGVuZ3Roc1tpZHhdO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5nZXRDYXJkcygpO1xuICAgIHRoaXMuY2FyZHMgPSBjYXJkcy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgIT09IG51bGwpO1xuICAgIHRoaXMuZW1wdHlTbG90cyA9IGNhcmRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PT0gbnVsbCk7XG4gIH1cblxuICBnZXRDYXJkcygpOiBhbnlbXSB7XG4gICAgY29uc3QgeVBhZGRpbmcgPVxuICAgICAgdHlwZW9mIHRoaXMuaW5uZXJQYWRkaW5nID09PSAnbnVtYmVyJyA/IHRoaXMuaW5uZXJQYWRkaW5nIDogdGhpcy5pbm5lclBhZGRpbmdbMF0gKyB0aGlzLmlubmVyUGFkZGluZ1syXTtcbiAgICBjb25zdCB4UGFkZGluZyA9XG4gICAgICB0eXBlb2YgdGhpcy5pbm5lclBhZGRpbmcgPT09ICdudW1iZXInID8gdGhpcy5pbm5lclBhZGRpbmcgOiB0aGlzLmlubmVyUGFkZGluZ1sxXSArIHRoaXMuaW5uZXJQYWRkaW5nWzNdO1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSBkLmRhdGEubmFtZTtcbiAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScpIHtcbiAgICAgICAgbGFiZWwgPSBsYWJlbC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbGFiZWwgPyBsYWJlbC50b0xvY2FsZVN0cmluZygpIDogbGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gZC5kYXRhLnZhbHVlO1xuICAgICAgY29uc3QgdmFsdWVDb2xvciA9IGxhYmVsID8gdGhpcy5jb2xvcnMuZ2V0Q29sb3IobGFiZWwpIDogdGhpcy5lbXB0eUNvbG9yO1xuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNhcmRDb2xvciB8fCB2YWx1ZUNvbG9yIHx8ICcjMDAwJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGQueCxcbiAgICAgICAgeTogZC55LFxuICAgICAgICB3aWR0aDogZC53aWR0aCAtIHhQYWRkaW5nLFxuICAgICAgICBoZWlnaHQ6IGQuaGVpZ2h0IC0geVBhZGRpbmcsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBiYW5kQ29sb3I6IHRoaXMuYmFuZENvbG9yIHx8IHZhbHVlQ29sb3IsXG4gICAgICAgIHRleHRDb2xvcjogdGhpcy50ZXh0Q29sb3IgfHwgaW52ZXJ0Q29sb3IoY29sb3IpLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgZGF0YTogZC5kYXRhLFxuICAgICAgICB0b29sdGlwVGV4dDogYCR7bGFiZWx9OiAke3ZhbHVlfWBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICB0cmFja0J5KGluZGV4LCBjYXJkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY2FyZC5sYWJlbDtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cbn1cbiJdfQ==