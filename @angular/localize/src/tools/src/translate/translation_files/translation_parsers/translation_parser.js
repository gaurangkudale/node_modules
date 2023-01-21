(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_parser", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy90cmFuc2xhdGUvdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fcGFyc2Vycy90cmFuc2xhdGlvbl9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHvJtU1lc3NhZ2VJZCwgybVQYXJzZWRUcmFuc2xhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUvcHJpdmF0ZSc7XG5pbXBvcnQge0RpYWdub3N0aWNzfSBmcm9tICcuLi8uLi8uLi9kaWFnbm9zdGljcyc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBwYXJzZXIgY2FuIHBhcnNlIGEgZ2l2ZW4gZmlsZSwgd2l0aCBhIGhpbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVlZCB1cCBhY3R1YWxcbiAqIHBhcnNpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuUGFyc2VBbmFseXNpczxIaW50PiB7XG4gIGNhblBhcnNlOiB0cnVlO1xuICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3M7XG4gIGhpbnQ6IEhpbnQ7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBwYXJzZXIgY2Fubm90IHBhcnNlIGEgZ2l2ZW4gZmlsZSB3aXRoIGRpYWdub3N0aWNzIGFzIHdoeSB0aGlzIGlzLlxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fubm90UGFyc2VBbmFseXNpcyB7XG4gIGNhblBhcnNlOiBmYWxzZTtcbiAgZGlhZ25vc3RpY3M6IERpYWdub3N0aWNzO1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHdoZXRoZXIgYSBgVHJhbnNsYXRpb25QYXJzZXJgIGNhbiBwYXJzZSBhIGdpdmVuIGZpbGUuXG4gKi9cbmV4cG9ydCB0eXBlIFBhcnNlQW5hbHlzaXM8SGludD4gPSBDYW5QYXJzZUFuYWx5c2lzPEhpbnQ+fENhbm5vdFBhcnNlQW5hbHlzaXM7XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgaG9sZHMgdHJhbnNsYXRpb25zIHRoYXQgaGF2ZSBiZWVuIHBhcnNlZCBmcm9tIGEgdHJhbnNsYXRpb24gZmlsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIGxvY2FsZTogc3RyaW5nfHVuZGVmaW5lZDtcbiAgdHJhbnNsYXRpb25zOiBSZWNvcmQ8ybVNZXNzYWdlSWQsIMm1UGFyc2VkVHJhbnNsYXRpb24+O1xuICBkaWFnbm9zdGljczogRGlhZ25vc3RpY3M7XG59XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIHByb3ZpZGUgYSBjbGFzcyB0aGF0IGNhbiBwYXJzZSB0aGUgY29udGVudHMgb2YgYSB0cmFuc2xhdGlvbiBmaWxlLlxuICpcbiAqIFRoZSBgY2FuUGFyc2UoKWAgbWV0aG9kIGNhbiByZXR1cm4gYSBoaW50IHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlIGBwYXJzZSgpYCBtZXRob2QgdG8gc3BlZWQgdXBcbiAqIHBhcnNpbmcuIFRoaXMgYWxsb3dzIHRoZSBwYXJzZXIgdG8gZG8gc2lnbmlmaWNhbnQgd29yayB0byBkZXRlcm1pbmUgaWYgdGhlIGZpbGUgY2FuIGJlIHBhcnNlZFxuICogd2l0aG91dCBkdXBsaWNhdGluZyB0aGUgd29yayB3aGVuIGl0IGNvbWVzIHRvIGFjdHVhbGx5IHBhcnNpbmcgdGhlIGZpbGUuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHBhcnNlcjogVHJhbnNsYXRpb25QYXJzZXIgPSBnZXRQYXJzZXIoKTtcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5jYW5QYXJzZShmaWxlUGF0aCwgY29udGVudCk7XG4gKiBpZiAocmVzdWx0KSB7XG4gKiAgIHJldHVybiBwYXJzZXIucGFyc2UoZmlsZVBhdGgsIGNvbnRlbnQsIHJlc3VsdCk7XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblBhcnNlcjxIaW50ID0gdHJ1ZT4ge1xuICAvKipcbiAgICogQ2FuIHRoaXMgcGFyc2VyIHBhcnNlIHRoZSBnaXZlbiBmaWxlP1xuICAgKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFuYWx5emUoKWAgaW5zdGVhZFxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggVGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEBwYXJhbSBjb250ZW50cyBUaGUgY29udGVudHMgb2YgdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEByZXR1cm5zIEEgaGludCwgd2hpY2ggY2FuIGJlIHVzZWQgaW4gZG9pbmcgdGhlIGFjdHVhbCBwYXJzaW5nLCBpZiB0aGUgZmlsZSBjYW4gYmUgcGFyc2VkIGJ5XG4gICAqIHRoaXMgcGFyc2VyOyBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBjYW5QYXJzZShmaWxlUGF0aDogc3RyaW5nLCBjb250ZW50czogc3RyaW5nKTogSGludHxmYWxzZTtcblxuICAvKipcbiAgICogQW5hbHl6ZSB0aGUgZmlsZSB0byBzZWUgaWYgdGhpcyBwYXJzZXIgY2FuIHBhcnNlIHRoZSBnaXZlbiBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggVGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEBwYXJhbSBjb250ZW50cyBUaGUgY29udGVudHMgb2YgdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEByZXR1cm5zIEluZm9ybWF0aW9uIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmlsZSBjYW4gYmUgcGFyc2VkIGJ5IHRoaXMgcGFyc2VyLlxuICAgKi9cbiAgYW5hbHl6ZShmaWxlUGF0aDogc3RyaW5nLCBjb250ZW50czogc3RyaW5nKTogUGFyc2VBbmFseXNpczxIaW50PjtcblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiBmaWxlLCBleHRyYWN0aW5nIHRoZSB0YXJnZXQgbG9jYWxlIGFuZCB0cmFuc2xhdGlvbnMuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCBzaG91bGQgbm90IHRocm93IGFuIGVycm9yLiBDaGVjayB0aGUgYGJ1bmRsZS5kaWFnbm9zdGljc2AgcHJvcGVydHkgZm9yXG4gICAqIHBvdGVudGlhbCBwYXJzaW5nIGVycm9ycyBhbmQgd2FybmluZ3MuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlUGF0aCBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgdHJhbnNsYXRpb24gZmlsZS5cbiAgICogQHBhcmFtIGNvbnRlbnRzIFRoZSBjb250ZW50cyBvZiB0aGUgdHJhbnNsYXRpb24gZmlsZS5cbiAgICogQHBhcmFtIGhpbnQgQSB2YWx1ZSB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoZSBwYXJzZXIgdG8gc3BlZWQgdXAgcGFyc2luZyBvZiB0aGUgZmlsZS4gVGhpcyB3aWxsXG4gICAqIGhhdmUgYmVlbiBwcm92aWRlZCBhcyB0aGUgcmV0dXJuIHJlc3VsdCBmcm9tIGNhbGxpbmcgYGNhblBhcnNlKClgLlxuICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gYnVuZGxlIHBhcnNlZCBmcm9tIHRoZSBmaWxlLlxuICAgKiBAdGhyb3dzIE5vIGVycm9ycy4gSWYgdGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHBhcnNpbmcgdGhlIGJ1bmRsZSB3aWxsIGNvbnRhaW4gZXJyb3JzXG4gICAqIGluIHRoZSBgZGlhZ25vc3RpY3NgIHByb3BlcnR5LlxuICAgKi9cbiAgcGFyc2UoZmlsZVBhdGg6IHN0cmluZywgY29udGVudHM6IHN0cmluZywgaGludDogSGludCk6IFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlO1xuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiBmaWxlLCBleHRyYWN0aW5nIHRoZSB0YXJnZXQgbG9jYWxlIGFuZCB0cmFuc2xhdGlvbnMuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFRoaXMgb3ZlcmxvYWQgaXMga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gR29pbmcgZm9yd2FyZCB1c2UgdGhlIEhpbnRcbiAgICogcmV0dXJuZWQgZnJvbSBgY2FuUGFyc2UoKWAgc28gdGhhdCB0aGlzIG1ldGhvZCBjYW4gYXZvaWQgZHVwbGljYXRpbmcgZWZmb3J0LlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGggVGhlIGFic29sdXRlIHBhdGggdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEBwYXJhbSBjb250ZW50cyBUaGUgY29udGVudHMgb2YgdGhlIHRyYW5zbGF0aW9uIGZpbGUuXG4gICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBidW5kbGUgcGFyc2VkIGZyb20gdGhlIGZpbGUuXG4gICAqIEB0aHJvd3MgQW4gZXJyb3IgaWYgdGhlcmUgd2FzIGEgcHJvYmxlbSBwYXJzaW5nIHRoaXMgZmlsZS5cbiAgICovXG4gIHBhcnNlKGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpOiBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZTtcbn1cbiJdfQ==