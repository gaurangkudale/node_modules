import { NgModule, Directive, ElementRef, HostListener, Input, Output, EventEmitter, Optional } from '@angular/core';
import { NgModel, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export class InputTextarea {
    constructor(el, ngModel, control) {
        this.el = el;
        this.ngModel = ngModel;
        this.control = control;
        this.onResize = new EventEmitter();
    }
    ngOnInit() {
        if (this.ngModel) {
            this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
        if (this.control) {
            this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
                this.updateState();
            });
        }
    }
    ngAfterViewInit() {
        if (this.autoResize)
            this.resize();
    }
    onInput(e) {
        this.updateState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
    onFocus(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    onBlur(e) {
        if (this.autoResize) {
            this.resize(e);
        }
    }
    resize(event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    }
    updateState() {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    }
    ngOnDestroy() {
        if (this.ngModelSubscription) {
            this.ngModelSubscription.unsubscribe();
        }
        if (this.ngControlSubscription) {
            this.ngControlSubscription.unsubscribe();
        }
    }
}
InputTextarea.ɵfac = function InputTextarea_Factory(t) { return new (t || InputTextarea)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 8)); };
InputTextarea.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputTextarea, selectors: [["", "pInputTextarea", ""]], hostVars: 10, hostBindings: function InputTextarea_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputTextarea_input_HostBindingHandler($event) { return ctx.onInput($event); })("focus", function InputTextarea_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("blur", function InputTextarea_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtextarea", true)("p-inputtext", true)("p-component", true)("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
    } }, inputs: { autoResize: "autoResize" }, outputs: { onResize: "onResize" } });
InputTextarea.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }] }
];
InputTextarea.propDecorators = {
    autoResize: [{ type: Input }],
    onResize: [{ type: Output }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextarea, [{
        type: Directive,
        args: [{
                selector: '[pInputTextarea]',
                host: {
                    '[class.p-inputtextarea]': 'true',
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled',
                    '[class.p-inputtextarea-resizable]': 'autoResize'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NgControl, decorators: [{
                type: Optional
            }] }]; }, { onResize: [{
            type: Output
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['focus', ['$event']]
        }], onBlur: [{
            type: HostListener,
            args: ['blur', ['$event']]
        }], autoResize: [{
            type: Input
        }] }); })();
export class InputTextareaModule {
}
InputTextareaModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextareaModule });
InputTextareaModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextareaModule_Factory(t) { return new (t || InputTextareaModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextareaModule, { declarations: function () { return [InputTextarea]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputTextarea]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextareaModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [InputTextarea],
                declarations: [InputTextarea]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXR0ZXh0YXJlYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2lucHV0dGV4dGFyZWEvaW5wdXR0ZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQVMsWUFBWSxFQUFDLFFBQVEsRUFBdUUsTUFBTSxlQUFlLENBQUM7QUFDMUwsT0FBTyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7OztBQWE3QyxNQUFNLE9BQU8sYUFBYTtBQUFHLElBY3pCLFlBQW1CLEVBQWMsRUFBcUIsT0FBZ0IsRUFBcUIsT0FBbUI7QUFBSSxRQUEvRixPQUFFLEdBQUYsRUFBRSxDQUFZO0FBQUMsUUFBb0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztBQUFDLFFBQW9CLFlBQU8sR0FBUCxPQUFPLENBQVk7QUFBQyxRQVZyRyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0QsSUFTcUgsQ0FBQztBQUN0SCxJQUNJLFFBQVE7QUFDWixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQixZQUFZLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQy9FLGdCQUFlLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0FBQ2QsU0FBUztBQUNULFFBQ1EsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzFCLFlBQVksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDbEYsZ0JBQWdC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QUM7QUFDckQsU0FBUztBQUNULElBQUksQ0FBQztBQUNMO3lDQXBHQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUIsSUFBSSxFQUFFLHNCQUNGLHlCQUF5QixFQUFFLE1BQU0sc0JBQ2pDLHFCQUFxQixFQUFFO0tBQU0sc0JBQzdCLHFCQUFxQixFQUFFLE1BQU0sc0JBQzdCLGtCQUFrQixFQUFFLFFBQVEsc0JBQzVCLG1DQUFtQyxFQUFFLFlBQVksa0JBQ3BEO1VBQ0o7OztvRkFDSTtBQUFDO0FBQXVDLFlBZmxCLFVBQVU7QUFBSSxZQUNqQyxPQUFPLHVCQTRCeUIsUUFBUTtBQUFPLFlBNUJ0QyxTQUFTLHVCQTRCbUQsUUFBUTtBQUFNO0FBQUc7QUFDdEYseUJBYkgsS0FBSztBQUFLLHVCQUVWLE1BQU07QUFBSyxzQkErQlgsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNoQyxzQkFRQSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2hDLHFCQU1BLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQTZDTixNQUFNLE9BQU8sbUJBQW1CO0FBQUc7K0NBTGxDLFFBQVEsU0FBQyxrQkFDTjtNQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsa0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFDeEIsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQ2hDOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsRGlyZWN0aXZlLEVsZW1lbnRSZWYsSG9zdExpc3RlbmVyLElucHV0LE91dHB1dCxEb0NoZWNrLEV2ZW50RW1pdHRlcixPcHRpb25hbCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0NoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ01vZGVsLCBOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BJbnB1dFRleHRhcmVhXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtaW5wdXR0ZXh0YXJlYV0nOiAndHJ1ZScsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHRleHRdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtY29tcG9uZW50XSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWZpbGxlZF0nOiAnZmlsbGVkJyxcbiAgICAgICAgJ1tjbGFzcy5wLWlucHV0dGV4dGFyZWEtcmVzaXphYmxlXSc6ICdhdXRvUmVzaXplJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0YXJlYSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95ICB7XG4gICAgXG4gICAgQElucHV0KCkgYXV0b1Jlc2l6ZTogYm9vbGVhbjtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25SZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICBcbiAgICBmaWxsZWQ6IGJvb2xlYW47XG5cbiAgICBjYWNoZWRTY3JvbGxIZWlnaHQ6bnVtYmVyO1xuXG4gICAgbmdNb2RlbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbmdDb250cm9sU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIHB1YmxpYyBuZ01vZGVsOiBOZ01vZGVsLCBAT3B0aW9uYWwoKSBwdWJsaWMgY29udHJvbCA6IE5nQ29udHJvbCkge31cbiAgICAgICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5nTW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubmdNb2RlbFN1YnNjcmlwdGlvbiA9IHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+e1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSlcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAgIG9uSW5wdXQoZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUZpbGxlZFN0YXRlKCkge1xuICAgICAgICB0aGlzLmZpbGxlZCA9ICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCkgfHwgKHRoaXMubmdNb2RlbCAmJiB0aGlzLm5nTW9kZWwubW9kZWwpO1xuICAgIH1cbiAgICBcbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gICAgb25Gb2N1cyhlKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKVxuICAgIG9uQmx1cihlKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlc2l6ZShldmVudD86IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICBpZiAocGFyc2VGbG9hdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0KSA+PSBwYXJzZUZsb2F0KHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25SZXNpemUuZW1pdChldmVudHx8e30pO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbGxlZFN0YXRlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYXV0b1Jlc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5uZ01vZGVsU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5nTW9kZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5uZ0NvbnRyb2xTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSW5wdXRUZXh0YXJlYV0sXG4gICAgZGVjbGFyYXRpb25zOiBbSW5wdXRUZXh0YXJlYV1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0YXJlYU1vZHVsZSB7IH1cbiJdfQ==