import { __awaiter } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { QUILL_CONFIG_TOKEN } from './quill-editor.interfaces';
import { defaultModules } from './quill-defaults';
import * as i0 from "@angular/core";
import * as i1 from "./quill-editor.interfaces";
import * as ɵngcc0 from '@angular/core';
export class QuillService {
    constructor(config) {
        this.config = config;
        this.count = 0;
        if (!this.config) {
            this.config = { modules: defaultModules };
        }
    }
    getQuill() {
        this.count++;
        if (!this.Quill && this.count === 1) {
            this.$importPromise = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                const quillImport = yield import('quill');
                this.Quill = (quillImport.default ? quillImport.default : quillImport);
                // Only register custom options and modules once
                (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach((customOption) => {
                    const newCustomOption = this.Quill.import(customOption.import);
                    newCustomOption.whitelist = customOption.whitelist;
                    this.Quill.register(newCustomOption, true, this.config.suppressGlobalRegisterWarning);
                });
                (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(({ implementation, path }) => {
                    this.Quill.register(path, implementation, this.config.suppressGlobalRegisterWarning);
                });
                resolve(this.Quill);
            }));
        }
        return this.$importPromise;
    }
}
QuillService.ɵfac = function QuillService_Factory(t) { return new (t || QuillService)(ɵngcc0.ɵɵinject(QUILL_CONFIG_TOKEN)); };
QuillService.ɵprov = i0.ɵɵdefineInjectable({ factory: function QuillService_Factory() { return new QuillService(i0.ɵɵinject(i1.QUILL_CONFIG_TOKEN)); }, token: QuillService, providedIn: "root" });
QuillService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [QUILL_CONFIG_TOKEN,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(QuillService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [QUILL_CONFIG_TOKEN]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXF1aWxsL3NyYy9saWIvcXVpbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFlLE1BQU0sMkJBQTJCLENBQUE7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ2pEO0FBR0M7O0FBQ0QsTUFBTSxPQUFPLFlBQVk7QUFDekIsSUFJRSxZQUNxQyxNQUFtQjtBQUN2RCxRQURvQyxXQUFNLEdBQU4sTUFBTSxDQUFhO0FBQzFELFFBSlUsVUFBSyxHQUFHLENBQUMsQ0FBQTtBQUNuQixRQUlJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQTtBQUMvQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDaEIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUN6QyxZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsRUFBRTtBQUNiO0FBRXZCLGdCQUZkLE1BQU0sV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2pELGdCQUNRLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQVEsQ0FBQTtBQUNyRixnQkFDUSxnREFBZ0Q7QUFDeEQsZ0JBQVEsTUFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsMENBQUUsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7QUFDNUQsb0JBQVUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3hFLG9CQUFVLGVBQWUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQTtBQUM1RCxvQkFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRixnQkFBUSxDQUFDLEVBQUM7QUFDVixnQkFDUSxNQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFFO0FBQ3RFLG9CQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlGLGdCQUFRLENBQUMsRUFBQztBQUNWLGdCQUNRLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0IsWUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ1IsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO0FBQzlCLElBQUUsQ0FBQztBQUNIOzhIQUFDO0FBQ0QsbU1BdENLO0FBQUM7RUFITCxVQUFVLFNBQUMsa0JBQ1YsVUFBVSxFQUFFLE1BQU0sY0FDbkIsdkVBRWUsNENBS1gsTUFBTSxTQUFDLGtCQUFrQjtBQUFROzs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBRVUlMTF9DT05GSUdfVE9LRU4sIFF1aWxsQ29uZmlnIH0gZnJvbSAnLi9xdWlsbC1lZGl0b3IuaW50ZXJmYWNlcydcbmltcG9ydCB7IGRlZmF1bHRNb2R1bGVzIH0gZnJvbSAnLi9xdWlsbC1kZWZhdWx0cydcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUXVpbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBRdWlsbCE6IGFueVxuICBwcml2YXRlICRpbXBvcnRQcm9taXNlITogUHJvbWlzZTxhbnk+XG4gIHByaXZhdGUgY291bnQgPSAwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChRVUlMTF9DT05GSUdfVE9LRU4pIHB1YmxpYyBjb25maWc6IFF1aWxsQ29uZmlnXG4gICkge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge8KgbW9kdWxlczogZGVmYXVsdE1vZHVsZXMgfVxuICAgIH1cbiAgfVxuXG4gIGdldFF1aWxsKCkge1xuICAgIHRoaXMuY291bnQrK1xuICAgIGlmICghdGhpcy5RdWlsbCAmJiB0aGlzLmNvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLiRpbXBvcnRQcm9taXNlID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgcXVpbGxJbXBvcnQgPSBhd2FpdCBpbXBvcnQoJ3F1aWxsJylcblxuICAgICAgICB0aGlzLlF1aWxsID0gKHF1aWxsSW1wb3J0LmRlZmF1bHQgPyBxdWlsbEltcG9ydC5kZWZhdWx0IDogcXVpbGxJbXBvcnQpIGFzIGFueVxuXG4gICAgICAgIC8vIE9ubHkgcmVnaXN0ZXIgY3VzdG9tIG9wdGlvbnMgYW5kIG1vZHVsZXMgb25jZVxuICAgICAgICB0aGlzLmNvbmZpZy5jdXN0b21PcHRpb25zPy5mb3JFYWNoKChjdXN0b21PcHRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdDdXN0b21PcHRpb24gPSB0aGlzLlF1aWxsLmltcG9ydChjdXN0b21PcHRpb24uaW1wb3J0KVxuICAgICAgICAgIG5ld0N1c3RvbU9wdGlvbi53aGl0ZWxpc3QgPSBjdXN0b21PcHRpb24ud2hpdGVsaXN0XG4gICAgICAgICAgdGhpcy5RdWlsbC5yZWdpc3RlcihuZXdDdXN0b21PcHRpb24sIHRydWUsIHRoaXMuY29uZmlnLnN1cHByZXNzR2xvYmFsUmVnaXN0ZXJXYXJuaW5nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmN1c3RvbU1vZHVsZXM/LmZvckVhY2goKHtpbXBsZW1lbnRhdGlvbiwgcGF0aH0pID0+IHtcbiAgICAgICAgICB0aGlzLlF1aWxsLnJlZ2lzdGVyKHBhdGgsIGltcGxlbWVudGF0aW9uLCB0aGlzLmNvbmZpZy5zdXBwcmVzc0dsb2JhbFJlZ2lzdGVyV2FybmluZylcbiAgICAgICAgfSlcblxuICAgICAgICByZXNvbHZlKHRoaXMuUXVpbGwpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kaW1wb3J0UHJvbWlzZVxuICB9XG59XG4iXX0=