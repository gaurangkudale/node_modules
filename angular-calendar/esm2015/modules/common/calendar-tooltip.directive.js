import { __decorate, __metadata, __param } from "tslib";
import { Directive, Component, HostListener, OnDestroy, Input, ComponentRef, Injector, ComponentFactoryResolver, ViewContainerRef, ElementRef, ComponentFactory, Inject, Renderer2, TemplateRef, OnChanges, SimpleChanges, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { positionElements } from 'positioning';
import { of, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelement(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const contents_r3 = ctx.contents;
    const placement_r4 = ctx.placement;
    ɵngcc0.ɵɵproperty("ngClass", "cal-tooltip-" + placement_r4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("innerHtml", contents_r3, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { contents: a0, placement: a1, event: a2 }; };
let CalendarTooltipWindowComponent = class CalendarTooltipWindowComponent {
};
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) { return new (t || CalendarTooltipWindowComponent)(); };
CalendarTooltipWindowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarTooltipWindowComponent, selectors: [["mwl-calendar-tooltip-window"]], inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]], template: function CalendarTooltipWindowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c0, ctx.contents, ctx.placement, ctx.event));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarTooltipWindowComponent.prototype, "contents", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarTooltipWindowComponent.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarTooltipWindowComponent.prototype, "event", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
export { CalendarTooltipWindowComponent };
let CalendarTooltipDirective = class CalendarTooltipDirective {
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.delay = null; // tslint:disable-line no-input-rename
        this.cancelTooltipDelay$ = new Subject();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    ngOnChanges(changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
            if (!this.contents) {
                this.hide();
            }
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    onMouseOver() {
        const delay$ = this.delay === null ? of('now') : timer(this.delay);
        delay$.pipe(takeUntil(this.cancelTooltipDelay$)).subscribe(() => {
            this.show();
        });
    }
    onMouseOut() {
        this.hide();
    }
    show() {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(() => {
                this.positionTooltip();
            });
        }
    }
    hide() {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    }
    positionTooltip(previousPositions = []) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([
                    ...previousPositions,
                    this.tooltipRef.instance.placement,
                ]);
            }
        }
    }
};
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) { return new (t || CalendarTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
CalendarTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTooltipDirective, selectors: [["", "mwlCalendarTooltip", ""]], hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseOut(); });
    } }, inputs: { placement: ["tooltipPlacement", "placement"], delay: ["tooltipDelay", "delay"], contents: ["mwlCalendarTooltip", "contents"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
CalendarTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input('mwlCalendarTooltip'),
    __metadata("design:type", String)
], CalendarTooltipDirective.prototype, "contents", void 0);
__decorate([
    Input('tooltipPlacement'),
    __metadata("design:type", Object)
], CalendarTooltipDirective.prototype, "placement", void 0);
__decorate([
    Input('tooltipTemplate'),
    __metadata("design:type", TemplateRef)
], CalendarTooltipDirective.prototype, "customTemplate", void 0);
__decorate([
    Input('tooltipEvent'),
    __metadata("design:type", Object)
], CalendarTooltipDirective.prototype, "event", void 0);
__decorate([
    Input('tooltipAppendToBody'),
    __metadata("design:type", Boolean)
], CalendarTooltipDirective.prototype, "appendToBody", void 0);
__decorate([
    Input('tooltipDelay'),
    __metadata("design:type", Number)
], CalendarTooltipDirective.prototype, "delay", void 0);
__decorate([
    HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOver", null);
__decorate([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOut", null);
CalendarTooltipDirective = __decorate([ __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ElementRef,
        Injector,
        Renderer2,
        ComponentFactoryResolver,
        ViewContainerRef, Object])
], CalendarTooltipDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipWindowComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-tooltip-window',
                template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
            }]
    }], null, { contents: [{
            type: Input
        }], placement: [{
            type: Input
        }], event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarTooltip]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { placement: [{
            type: Input,
            args: ['tooltipPlacement']
        }], delay: [{
            type: Input,
            args: ['tooltipDelay']
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseOut: [{
            type: HostListener,
            args: ['mouseleave']
        }], contents: [{
            type: Input,
            args: ['mwlCalendarTooltip']
        }], customTemplate: [{
            type: Input,
            args: ['tooltipTemplate']
        }], event: [{
            type: Input,
            args: ['tooltipEvent']
        }], appendToBody: [{
            type: Input,
            args: ['tooltipAppendToBody']
        }] }); })();
export { CalendarTooltipDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osUUFBUSxFQUNSLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsYUFBYSxHQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCM0MsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7QUFDM0MsQ0FPQzs7Ozs7Ozs7O29GQUFBO0FBUFU7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBRTtBQUVRLGdFQUZRO0FBRWpCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUU7QUFFTyxpRUFGVTtBQUVsQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFFO0FBRUksNkRBRmdCO0FBRXJCO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUUsOEJBQWUsV0FBVztBQUFFLHNFQUFJLENBRTVDO0FBVGEsOEJBQThCLDlCQVUzQyxTQVZhLDhCQUE4QjtPQXpCMUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLHJDQXFDWixJQUFhLHdCQUF3QixHQUFy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Q25EO0FBQWEsSUFEWixZQUFZLENBQUMsWUFBWSxDQUFDO0FBQzVCO0FBQ2lCO0FBQ0s7QUFDZiwyREFHTDtBQUdEO0FBQWEsSUFEWixZQUFZLENBQUMsWUFBWSxDQUFDO0FBQzVCO0FBRUM7QUFHVztBQUNELDBEQUpUO0FBOURVLHdCQUF3QixvQkFIcEMsU0FBUyxDQUFDLFVBQ1QsekJBRUUsQ0F1QkMsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7RUF6QlgsRUFBRSxzQkFBc0IsT0FDakMsQ0FBQyxsQ0F3QnFCLHFDQUxDLFVBQVU7QUFDbEMsUUFBc0IsUUFBUTtBQUM5QixRQUFzQixTQUFTO0FBQy9CLFFBQThCLHdCQUF3QjtBQUN0RCxRQUE4QixnQkFBZ0I7QUFDckMsR0F2Qkksd0JBQXdCLENBa0hwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsU0FuSFksd0JBQXdCO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIENvbXBvbmVudCxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5LCBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAncG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItdG9vbHRpcC13aW5kb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWNvbnRlbnRzPVwiY29udGVudHNcIlxuICAgICAgbGV0LXBsYWNlbWVudD1cInBsYWNlbWVudFwiXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwXCIgW25nQ2xhc3NdPVwiJ2NhbC10b29sdGlwLScgKyBwbGFjZW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwLWFycm93XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdG9vbHRpcC1pbm5lclwiIFtpbm5lckh0bWxdPVwiY29udGVudHNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgY29udGVudHM6IGNvbnRlbnRzLFxuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udGVudHM6IHN0cmluZztcblxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyVG9vbHRpcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnbXdsQ2FsZW5kYXJUb29sdGlwJykgY29udGVudHM6IHN0cmluZzsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcFRlbXBsYXRlJykgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgQElucHV0KCd0b29sdGlwRXZlbnQnKSBldmVudDogQ2FsZW5kYXJFdmVudDsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgQElucHV0KCd0b29sdGlwRGVsYXknKSBkZWxheTogbnVtYmVyIHwgbnVsbCA9IG51bGw7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgcHJpdmF0ZSB0b29sdGlwRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQ+O1xuICBwcml2YXRlIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQ+O1xuICBwcml2YXRlIGNhbmNlbFRvb2x0aXBEZWxheSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQgLy90c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICkge1xuICAgIHRoaXMudG9vbHRpcEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnRcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMudG9vbHRpcFJlZiAmJlxuICAgICAgKGNoYW5nZXMuY29udGVudHMgfHwgY2hhbmdlcy5jdXN0b21UZW1wbGF0ZSB8fCBjaGFuZ2VzLmV2ZW50KVxuICAgICkge1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmNvbnRlbnRzID0gdGhpcy5jb250ZW50cztcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jdXN0b21UZW1wbGF0ZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGU7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuZXZlbnQgPSB0aGlzLmV2ZW50O1xuICAgICAgdGhpcy50b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICBpZiAoIXRoaXMuY29udGVudHMpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZU92ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZGVsYXkkOiBPYnNlcnZhYmxlPGFueT4gPVxuICAgICAgdGhpcy5kZWxheSA9PT0gbnVsbCA/IG9mKCdub3cnKSA6IHRpbWVyKHRoaXMuZGVsYXkpO1xuICAgIGRlbGF5JC5waXBlKHRha2VVbnRpbCh0aGlzLmNhbmNlbFRvb2x0aXBEZWxheSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZU91dCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcFJlZiAmJiB0aGlzLmNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICB0aGlzLnRvb2x0aXBGYWN0b3J5LFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmluamVjdG9yLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb250ZW50cyA9IHRoaXMuY29udGVudHM7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmV2ZW50ID0gdGhpcy5ldmVudDtcbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblRvb2x0aXAoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpXG4gICAgICApO1xuICAgICAgdGhpcy50b29sdGlwUmVmID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jYW5jZWxUb29sdGlwRGVsYXkkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Ub29sdGlwKHByZXZpb3VzUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcFJlZikge1xuICAgICAgdGhpcy50b29sdGlwUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5wbGFjZW1lbnQgPSBwb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sXG4gICAgICAgIHRoaXMucGxhY2VtZW50LFxuICAgICAgICB0aGlzLmFwcGVuZFRvQm9keVxuICAgICAgKTtcbiAgICAgIC8vIGtlZXAgcmUtcG9zaXRpb25pbmcgdGhlIHRvb2x0aXAgdW50aWwgdGhlIGFycm93IHBvc2l0aW9uIGRvZXNuJ3QgbWFrZSBhIGRpZmZlcmVuY2VcbiAgICAgIGlmIChcbiAgICAgICAgcHJldmlvdXNQb3NpdGlvbnMuaW5kZXhPZih0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UucGxhY2VtZW50KSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uVG9vbHRpcChbXG4gICAgICAgICAgLi4ucHJldmlvdXNQb3NpdGlvbnMsXG4gICAgICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnBsYWNlbWVudCxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=