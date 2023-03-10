import { NgModule, Directive, ElementRef, TemplateRef, ViewContainerRef, Renderer2, EventEmitter, Output, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export class DeferredLoader {
    constructor(el, renderer, viewContainer) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.onLoad = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.shouldLoad()) {
            this.load();
        }
        if (!this.isLoaded()) {
            this.documentScrollListener = this.renderer.listen('window', 'scroll', () => {
                if (this.shouldLoad()) {
                    this.load();
                    this.documentScrollListener();
                    this.documentScrollListener = null;
                }
            });
        }
    }
    shouldLoad() {
        if (this.isLoaded()) {
            return false;
        }
        else {
            let rect = this.el.nativeElement.getBoundingClientRect();
            let docElement = document.documentElement;
            let winHeight = docElement.clientHeight;
            return (winHeight >= rect.top);
        }
    }
    load() {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
    }
    isLoaded() {
        return this.view != null;
    }
    ngOnDestroy() {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    }
}
DeferredLoader.ɵfac = function DeferredLoader_Factory(t) { return new (t || DeferredLoader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
DeferredLoader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: DeferredLoader, selectors: [["", "pDefer", ""]], contentQueries: function DeferredLoader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, outputs: { onLoad: "onLoad" } });
DeferredLoader.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef }
];
DeferredLoader.propDecorators = {
    onLoad: [{ type: Output }],
    template: [{ type: ContentChild, args: [TemplateRef,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferredLoader, [{
        type: Directive,
        args: [{
                selector: '[pDefer]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }]; }, { onLoad: [{
            type: Output
        }], template: [{
            type: ContentChild,
            args: [TemplateRef]
        }] }); })();
export class DeferModule {
}
DeferModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DeferModule });
DeferModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DeferModule_Factory(t) { return new (t || DeferModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DeferModule, { declarations: function () { return [DeferredLoader]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DeferredLoader]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeferModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [DeferredLoader],
                declarations: [DeferredLoader]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9kZWZlci9kZWZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQXlCLFdBQVcsRUFDakUsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQVUxQixZQUFtQixFQUFjLEVBQVMsUUFBbUIsRUFBUyxhQUErQjtBQUFJLFFBQXRGLE9BQUUsR0FBRixFQUFFLENBQVk7QUFBQyxRQUFRLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFRLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtBQUFDLFFBUjVGLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3RCxJQU80RyxDQUFDO0FBQzdHLElBQ0ksZUFBZTtBQUNuQixRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQy9CLFlBQVksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUNRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDOUIsWUFBWSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7QUFDeEYsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQ3ZDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEMsb0JBQW9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ2xELG9CQUFvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3ZELGlCQUFpQjtBQUNqQixZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksVUFBVTtBQUFLLFFBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDN0IsWUFBWSxPQUFPLEtBQUssQ0FBQztBQUN6QixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNyRSxZQUFZLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7QUFDdEQsWUFBWSxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQ3BELFlBQ1ksT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNULElBQUksQ0FBQztBQUNMLElBQ0ksSUFBSTtBQUFLLFFBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsSUFBSSxDQUFDO0FBQ0wsSUFDSSxRQUFRO0FBQ1osUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ2pDLElBQUksQ0FBQztBQUNMLElBQ0ksV0FBVztBQUNmLFFBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDekIsUUFDUSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtBQUN6QyxZQUFZLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQzFDLFNBQVM7QUFDVCxJQUFJLENBQUM7QUFDTDswQ0E1REMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxVQUFVLGNBQ3ZCOzs7Ozs7MENBQ0k7QUFBQztBQUF3QyxZQVBuQixVQUFVO0FBQUksWUFDaEIsU0FBUztBQUFJLFlBQTlCLGdCQUFnQjtBQUFHO0FBQUc7QUFBa0MscUJBUTNELE1BQU07QUFBSyx1QkFFWCxZQUFZLFNBQUMsV0FBVztBQUFNOzs7Ozs7Ozs7OztvQkFBRTtBQTREckMsTUFBTSxPQUFPLFdBQVc7QUFBRzt1Q0FMMUIsUUFBUSxTQUFDO09BQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUNqQzs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLERpcmVjdGl2ZSxFbGVtZW50UmVmLEFmdGVyVmlld0luaXQsT25EZXN0cm95LFRlbXBsYXRlUmVmLEVtYmVkZGVkVmlld1JlZixcbiAgICAgICAgVmlld0NvbnRhaW5lclJlZixSZW5kZXJlcjIsRXZlbnRFbWl0dGVyLE91dHB1dCxDb250ZW50Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BEZWZlcl0nXG59KVxuZXhwb3J0IGNsYXNzIERlZmVycmVkTG9hZGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCxPbkRlc3Ryb3kge1xuICAgICAgICBcbiAgICBAT3V0cHV0KCkgb25Mb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICAgICAgXG4gICAgZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcjogRnVuY3Rpb247XG4gICAgXG4gICAgdmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gICAgICAgICAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cbiAgICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZExvYWQoKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50U2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRMb2FkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50U2Nyb2xsTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNob3VsZExvYWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgd2luSGVpZ2h0ID0gZG9jRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAod2luSGVpZ2h0ID49IHJlY3QudG9wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsb2FkKCk6IHZvaWQgeyBcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5vbkxvYWQuZW1pdCgpO1xuICAgIH1cbiAgICBcbiAgICBpc0xvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldyAhPSBudWxsO1xuICAgIH1cbiAgICAgICAgICAgIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RlZmVycmVkTG9hZGVyXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEZWZlcnJlZExvYWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgRGVmZXJNb2R1bGUgeyB9Il19