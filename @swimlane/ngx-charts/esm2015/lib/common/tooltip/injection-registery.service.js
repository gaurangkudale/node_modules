export class InjectionRegisteryService {
    constructor(injectionService) {
        this.injectionService = injectionService;
        this.defaults = {};
        this.components = new Map();
    }
    getByType(type = this.type) {
        return this.components.get(type);
    }
    create(bindings) {
        return this.createByType(this.type, bindings);
    }
    createByType(type, bindings) {
        bindings = this.assignDefaults(bindings);
        const component = this.injectComponent(type, bindings);
        this.register(type, component);
        return component;
    }
    destroy(instance) {
        const compsByType = this.components.get(instance.componentType);
        if (compsByType && compsByType.length) {
            const idx = compsByType.indexOf(instance);
            if (idx > -1) {
                const component = compsByType[idx];
                component.destroy();
                compsByType.splice(idx, 1);
            }
        }
    }
    destroyAll() {
        this.destroyByType(this.type);
    }
    destroyByType(type) {
        const comps = this.components.get(type);
        if (comps && comps.length) {
            let i = comps.length - 1;
            while (i >= 0) {
                this.destroy(comps[i--]);
            }
        }
    }
    injectComponent(type, bindings) {
        return this.injectionService.appendComponent(type, bindings);
    }
    assignDefaults(bindings) {
        const inputs = Object.assign({}, this.defaults.inputs);
        const outputs = Object.assign({}, this.defaults.outputs);
        if (!bindings.inputs && !bindings.outputs) {
            bindings = { inputs: bindings };
        }
        if (inputs) {
            bindings.inputs = Object.assign(Object.assign({}, inputs), bindings.inputs);
        }
        if (outputs) {
            bindings.outputs = Object.assign(Object.assign({}, outputs), bindings.outputs);
        }
        return bindings;
    }
    register(type, component) {
        if (!this.components.has(type)) {
            this.components.set(type, []);
        }
        const types = this.components.get(type);
        types.push(component);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLXJlZ2lzdGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi90b29sdGlwL2luamVjdGlvbi1yZWdpc3Rlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxNQUFNLE9BQWdCLHlCQUF5QjtJQU03QyxZQUFtQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUgzQyxhQUFRLEdBQW9CLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQXFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFFWCxDQUFDO0lBRXpELFNBQVMsQ0FBQyxPQUFnQixJQUFJLENBQUMsSUFBSTtRQUNqQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFhLEVBQUUsUUFBeUI7UUFDbkQsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFL0IsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUF5QjtRQUMvQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEUsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWE7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRVMsZUFBZSxDQUFDLElBQWEsRUFBRSxRQUF5QjtRQUNoRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFUyxjQUFjLENBQUMsUUFBeUI7UUFDaEQsTUFBTSxNQUFNLHFCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDM0MsTUFBTSxPQUFPLHFCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLENBQUM7UUFFN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pDLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLE1BQU0sbUNBQVEsTUFBTSxHQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUNyRDtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsUUFBUSxDQUFDLE9BQU8sbUNBQVEsT0FBTyxHQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUN4RDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxRQUFRLENBQUMsSUFBYSxFQUFFLFNBQTBCO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4vaW5qZWN0aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpYWxCaW5kaW5ncyB7XG4gIGlucHV0cz86IG9iamVjdDtcbiAgb3V0cHV0cz86IG9iamVjdDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluamVjdGlvblJlZ2lzdGVyeVNlcnZpY2U8VCA9IGFueT4ge1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHlwZTogVHlwZTxUPjtcblxuICBwcm90ZWN0ZWQgZGVmYXVsdHM6IFBhcnRpYWxCaW5kaW5ncyA9IHt9O1xuICBwcm90ZWN0ZWQgY29tcG9uZW50czogTWFwPGFueSwgQXJyYXk8Q29tcG9uZW50UmVmPFQ+Pj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGluamVjdGlvblNlcnZpY2U6IEluamVjdGlvblNlcnZpY2UpIHt9XG5cbiAgZ2V0QnlUeXBlKHR5cGU6IFR5cGU8VD4gPSB0aGlzLnR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmdldCh0eXBlKTtcbiAgfVxuXG4gIGNyZWF0ZShiaW5kaW5nczogb2JqZWN0KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVCeVR5cGUodGhpcy50eXBlLCBiaW5kaW5ncyk7XG4gIH1cblxuICBjcmVhdGVCeVR5cGUodHlwZTogVHlwZTxUPiwgYmluZGluZ3M6IFBhcnRpYWxCaW5kaW5ncyk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgYmluZGluZ3MgPSB0aGlzLmFzc2lnbkRlZmF1bHRzKGJpbmRpbmdzKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuaW5qZWN0Q29tcG9uZW50KHR5cGUsIGJpbmRpbmdzKTtcbiAgICB0aGlzLnJlZ2lzdGVyKHR5cGUsIGNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgZGVzdHJveShpbnN0YW5jZTogQ29tcG9uZW50UmVmPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgY29tcHNCeVR5cGUgPSB0aGlzLmNvbXBvbmVudHMuZ2V0KGluc3RhbmNlLmNvbXBvbmVudFR5cGUpO1xuXG4gICAgaWYgKGNvbXBzQnlUeXBlICYmIGNvbXBzQnlUeXBlLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWR4ID0gY29tcHNCeVR5cGUuaW5kZXhPZihpbnN0YW5jZSk7XG5cbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb21wc0J5VHlwZVtpZHhdO1xuICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICBjb21wc0J5VHlwZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUJ5VHlwZSh0aGlzLnR5cGUpO1xuICB9XG5cbiAgZGVzdHJveUJ5VHlwZSh0eXBlOiBUeXBlPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmNvbXBvbmVudHMuZ2V0KHR5cGUpO1xuXG4gICAgaWYgKGNvbXBzICYmIGNvbXBzLmxlbmd0aCkge1xuICAgICAgbGV0IGkgPSBjb21wcy5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koY29tcHNbaS0tXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGluamVjdENvbXBvbmVudCh0eXBlOiBUeXBlPFQ+LCBiaW5kaW5nczogUGFydGlhbEJpbmRpbmdzKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rpb25TZXJ2aWNlLmFwcGVuZENvbXBvbmVudCh0eXBlLCBiaW5kaW5ncyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXNzaWduRGVmYXVsdHMoYmluZGluZ3M6IFBhcnRpYWxCaW5kaW5ncyk6IFBhcnRpYWxCaW5kaW5ncyB7XG4gICAgY29uc3QgaW5wdXRzID0geyAuLi50aGlzLmRlZmF1bHRzLmlucHV0cyB9O1xuICAgIGNvbnN0IG91dHB1dHMgPSB7IC4uLnRoaXMuZGVmYXVsdHMub3V0cHV0cyB9O1xuXG4gICAgaWYgKCFiaW5kaW5ncy5pbnB1dHMgJiYgIWJpbmRpbmdzLm91dHB1dHMpIHtcbiAgICAgIGJpbmRpbmdzID0geyBpbnB1dHM6IGJpbmRpbmdzIH07XG4gICAgfVxuXG4gICAgaWYgKGlucHV0cykge1xuICAgICAgYmluZGluZ3MuaW5wdXRzID0geyAuLi5pbnB1dHMsIC4uLmJpbmRpbmdzLmlucHV0cyB9O1xuICAgIH1cblxuICAgIGlmIChvdXRwdXRzKSB7XG4gICAgICBiaW5kaW5ncy5vdXRwdXRzID0geyAuLi5vdXRwdXRzLCAuLi5iaW5kaW5ncy5vdXRwdXRzIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbmRpbmdzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKHR5cGU6IFR5cGU8VD4sIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudHMuaGFzKHR5cGUpKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc2V0KHR5cGUsIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuY29tcG9uZW50cy5nZXQodHlwZSk7XG4gICAgdHlwZXMucHVzaChjb21wb25lbnQpO1xuICB9XG59XG4iXX0=