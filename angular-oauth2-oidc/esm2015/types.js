import { Injectable } from '@angular/core';
/**
 * Additional options that can be passed to tryLogin.
 */
export class LoginOptions {
    constructor() {
        /**
         * Normally, you want to clear your hash fragment after
         * the lib read the token(s) so that they are not displayed
         * anymore in the url. If not, set this to true. For code flow
         * this controls removing query string values.
         */
        this.preventClearHashAfterLogin = false;
    }
}
/**
 * Defines the logging interface the OAuthService uses
 * internally. Is compatible with the `console` object,
 * but you can provide your own implementation as well
 * through dependency injection.
 */
export class OAuthLogger {
}
/**
 * Defines a simple storage that can be used for
 * storing the tokens at client side.
 * Is compatible to localStorage and sessionStorage,
 * but you can also create your own implementations.
 */
export class OAuthStorage {
}
export class MemoryStorage {
    constructor() {
        this.data = new Map();
    }
    getItem(key) {
        return this.data.get(key);
    }
    removeItem(key) {
        this.data.delete(key);
    }
    setItem(key, data) {
        this.data.set(key, data);
    }
}
MemoryStorage.decorators = [
    { type: Injectable }
];
/**
 * Represents the received tokens, the received state
 * and the parsed claims from the id-token.
 */
export class ReceivedTokens {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9saWIvc3JjL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQThDRTs7Ozs7V0FLRztRQUNILCtCQUEwQixHQUFJLEtBQUssQ0FBQztJQVF0QyxDQUFDO0NBQUE7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsV0FBVztDQU1oQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFnQixZQUFZO0NBSWpDO0FBR0QsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFVSxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFhM0MsQ0FBQztJQVhDLE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLElBQVk7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWRGLFVBQVU7O0FBaUJYOzs7R0FHRztBQUNILE1BQU0sT0FBTyxjQUFjO0NBSzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdHJ5TG9naW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9naW5PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBJcyBjYWxsZWQsIGFmdGVyIGEgdG9rZW4gaGFzIGJlZW4gcmVjZWl2ZWQgYW5kXHJcbiAgICogc3VjY2Vzc2Z1bGx5IHZhbGlkYXRlZC5cclxuICAgKlxyXG4gICAqIERlcHJlY2F0ZWQ6ICBVc2UgcHJvcGVydHkgYGBldmVudHNgYCBvbiBPQXV0aFNlcnZpY2UgaW5zdGVhZC5cclxuICAgKi9cclxuICBvblRva2VuUmVjZWl2ZWQ/OiAocmVjZWl2ZWRUb2tlbnM6IFJlY2VpdmVkVG9rZW5zKSA9PiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBIb29rLCB0byB2YWxpZGF0ZSB0aGUgcmVjZWl2ZWQgdG9rZW5zLlxyXG4gICAqXHJcbiAgICogRGVwcmVjYXRlZDogIFVzZSBwcm9wZXJ0eSBgYHRva2VuVmFsaWRhdGlvbkhhbmRsZXJgYCBvbiBPQXV0aFNlcnZpY2UgaW5zdGVhZC5cclxuICAgKi9cclxuICB2YWxpZGF0aW9uSGFuZGxlcj86IChyZWNlaXZlZFRva2VuczogUmVjZWl2ZWRUb2tlbnMpID0+IFByb21pc2U8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIHdoZW4gdHJ5TG9naW4gZGV0ZWN0cyB0aGF0IHRoZSBhdXRoIHNlcnZlclxyXG4gICAqIGluY2x1ZGVkIGFuIGVycm9yIG1lc3NhZ2UgaW50byB0aGUgaGFzaCBmcmFnbWVudC5cclxuICAgKlxyXG4gICAqIERlcHJlY2F0ZWQ6ICBVc2UgcHJvcGVydHkgYGBldmVudHNgYCBvbiBPQXV0aFNlcnZpY2UgaW5zdGVhZC5cclxuICAgKi9cclxuICBvbkxvZ2luRXJyb3I/OiAocGFyYW1zOiBvYmplY3QpID0+IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY3VzdG9tIGhhc2ggZnJhZ21lbnQgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZVxyXG4gICAqIGFjdHVhbCBvbmUuIFRoaXMgaXMgdXNlZCBmb3Igc2lsZW50IHJlZnJlc2hlcywgdG9cclxuICAgKiBwYXNzIHRoZSBpZnJhbWVzIGhhc2ggZnJhZ21lbnQgdG8gdGhpcyBtZXRob2QsIGFuZFxyXG4gICAqIGlzIGFsc28gdXNlZCBieSBwb3B1cCBmbG93cyBpbiB0aGUgc2FtZSBtYW5uZXIuXHJcbiAgICogVGhpcyBjYW4gYmUgdXNlZCB3aXRoIGNvZGUgZmxvdywgd2hlcmUgaXMgbXVzdCBiZSBzZXRcclxuICAgKiB0byBhIGhhc2ggc3ltYm9sIGZvbGxvd2VkIGJ5IHRoZSBxdWVyeXN0cmluZy4gVGhlXHJcbiAgICogcXVlc3Rpb24gbWFyayBpcyBvcHRpb25hbCwgYnV0IG1heSBiZSBwcmVzZW50IGZvbGxvd2luZ1xyXG4gICAqIHRoZSBoYXNoIHN5bWJvbC5cclxuICAgKi9cclxuICBjdXN0b21IYXNoRnJhZ21lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGlzIHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgb2F1dGgyIHN0YXRlXHJcbiAgICogY2hlY2sgd2hpY2ggaXMgYSBiZXN0IHByYWN0aWNlIHRvIGF2b2lkXHJcbiAgICogc2VjdXJpdHkgYXR0YWNrcy5cclxuICAgKiBBcyBPSURDIGRlZmluZXMgYSBub25jZSBjaGVjayB0aGF0IGluY2x1ZGVzXHJcbiAgICogdGhpcywgdGhpcyBjYW4gYmUgc2V0IHRvIHRydWUgd2hlbiBvbmx5IGRvaW5nXHJcbiAgICogT0lEQy5cclxuICAgKi9cclxuICBkaXNhYmxlT0F1dGgyU3RhdGVDaGVjaz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vcm1hbGx5LCB5b3Ugd2FudCB0byBjbGVhciB5b3VyIGhhc2ggZnJhZ21lbnQgYWZ0ZXJcclxuICAgKiB0aGUgbGliIHJlYWQgdGhlIHRva2VuKHMpIHNvIHRoYXQgdGhleSBhcmUgbm90IGRpc3BsYXllZFxyXG4gICAqIGFueW1vcmUgaW4gdGhlIHVybC4gSWYgbm90LCBzZXQgdGhpcyB0byB0cnVlLiBGb3IgY29kZSBmbG93XHJcbiAgICogdGhpcyBjb250cm9scyByZW1vdmluZyBxdWVyeSBzdHJpbmcgdmFsdWVzLlxyXG4gICAqL1xyXG4gIHByZXZlbnRDbGVhckhhc2hBZnRlckxvZ2luPyA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhpcyBmb3IgY29kZSBmbG93IGlmIHlvdSB1c2VkIGEgY3VzdG9tIHJlZGlyZWN0IFVyaVxyXG4gICAqIHdoZW4gcmV0cmlldmluZyB0aGUgY29kZS4gVGhpcyBpcyB1c2VkIGludGVybmFsbHkgZm9yIHNpbGVudFxyXG4gICAqIHJlZnJlc2ggYW5kIHBvcHVwIGZsb3dzLlxyXG4gICAqL1xyXG4gIGN1c3RvbVJlZGlyZWN0VXJpPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgbG9nZ2luZyBpbnRlcmZhY2UgdGhlIE9BdXRoU2VydmljZSB1c2VzXHJcbiAqIGludGVybmFsbHkuIElzIGNvbXBhdGlibGUgd2l0aCB0aGUgYGNvbnNvbGVgIG9iamVjdCxcclxuICogYnV0IHlvdSBjYW4gcHJvdmlkZSB5b3VyIG93biBpbXBsZW1lbnRhdGlvbiBhcyB3ZWxsXHJcbiAqIHRocm91Z2ggZGVwZW5kZW5jeSBpbmplY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT0F1dGhMb2dnZXIge1xyXG4gIGFic3RyYWN0IGRlYnVnKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgaW5mbyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xyXG4gIGFic3RyYWN0IGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xyXG4gIGFic3RyYWN0IHdhcm4obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZDtcclxuICBhYnN0cmFjdCBlcnJvcihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHNpbXBsZSBzdG9yYWdlIHRoYXQgY2FuIGJlIHVzZWQgZm9yXHJcbiAqIHN0b3JpbmcgdGhlIHRva2VucyBhdCBjbGllbnQgc2lkZS5cclxuICogSXMgY29tcGF0aWJsZSB0byBsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlLFxyXG4gKiBidXQgeW91IGNhbiBhbHNvIGNyZWF0ZSB5b3VyIG93biBpbXBsZW1lbnRhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT0F1dGhTdG9yYWdlIHtcclxuICBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcclxuICBhYnN0cmFjdCByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZDtcclxuICBhYnN0cmFjdCBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZW1vcnlTdG9yYWdlIGltcGxlbWVudHMgT0F1dGhTdG9yYWdlIHtcclxuICBwcml2YXRlIGRhdGEgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0KGtleSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGEuZGVsZXRlKGtleSk7XHJcbiAgfVxyXG5cclxuICBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YS5zZXQoa2V5LCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSByZWNlaXZlZCB0b2tlbnMsIHRoZSByZWNlaXZlZCBzdGF0ZVxyXG4gKiBhbmQgdGhlIHBhcnNlZCBjbGFpbXMgZnJvbSB0aGUgaWQtdG9rZW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVjZWl2ZWRUb2tlbnMge1xyXG4gIGlkVG9rZW46IHN0cmluZztcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIGlkQ2xhaW1zPzogb2JqZWN0O1xyXG4gIHN0YXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgcGFyc2VkIGFuZCB2YWxpZGF0ZWQgaWRfdG9rZW4uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZElkVG9rZW4ge1xyXG4gIGlkVG9rZW46IHN0cmluZztcclxuICBpZFRva2VuQ2xhaW1zOiBvYmplY3Q7XHJcbiAgaWRUb2tlbkhlYWRlcjogb2JqZWN0O1xyXG4gIGlkVG9rZW5DbGFpbXNKc29uOiBzdHJpbmc7XHJcbiAgaWRUb2tlbkhlYWRlckpzb246IHN0cmluZztcclxuICBpZFRva2VuRXhwaXJlc0F0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSByZXNwb25zZSBmcm9tIHRoZSB0b2tlbiBlbmRwb2ludFxyXG4gKiBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1Rva2VuRW5kcG9pbnRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5SZXNwb25zZSB7XHJcbiAgYWNjZXNzX3Rva2VuOiBzdHJpbmc7XHJcbiAgaWRfdG9rZW46IHN0cmluZztcclxuICB0b2tlbl90eXBlOiBzdHJpbmc7XHJcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xyXG4gIHJlZnJlc2hfdG9rZW46IHN0cmluZztcclxuICBzY29wZTogc3RyaW5nO1xyXG4gIHN0YXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgdXNlciBpbmZvIGVuZHBvaW50XHJcbiAqIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjVXNlckluZm9cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlckluZm8ge1xyXG4gIHN1Yjogc3RyaW5nO1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYW4gT3BlbklEIENvbm5lY3QgZGlzY292ZXJ5IGRvY3VtZW50XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9pZGNEaXNjb3ZlcnlEb2Mge1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IHN0cmluZztcclxuICB0b2tlbl9lbmRwb2ludDogc3RyaW5nO1xyXG4gIHRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIHRva2VuX2VuZHBvaW50X2F1dGhfc2lnbmluZ19hbGdfdmFsdWVzX3N1cHBvcnRlZDogc3RyaW5nW107XHJcbiAgdXNlcmluZm9fZW5kcG9pbnQ6IHN0cmluZztcclxuICBjaGVja19zZXNzaW9uX2lmcmFtZTogc3RyaW5nO1xyXG4gIGVuZF9zZXNzaW9uX2VuZHBvaW50OiBzdHJpbmc7XHJcbiAgandrc191cmk6IHN0cmluZztcclxuICByZWdpc3RyYXRpb25fZW5kcG9pbnQ6IHN0cmluZztcclxuICBzY29wZXNfc3VwcG9ydGVkOiBzdHJpbmdbXTtcclxuICByZXNwb25zZV90eXBlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGFjcl92YWx1ZXNfc3VwcG9ydGVkOiBzdHJpbmdbXTtcclxuICByZXNwb25zZV9tb2Rlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGdyYW50X3R5cGVzX3N1cHBvcnRlZDogc3RyaW5nW107XHJcbiAgc3ViamVjdF90eXBlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIHVzZXJpbmZvX3NpZ25pbmdfYWxnX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIHVzZXJpbmZvX2VuY3J5cHRpb25fYWxnX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIHVzZXJpbmZvX2VuY3J5cHRpb25fZW5jX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGlkX3Rva2VuX3NpZ25pbmdfYWxnX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGlkX3Rva2VuX2VuY3J5cHRpb25fYWxnX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGlkX3Rva2VuX2VuY3J5cHRpb25fZW5jX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIHJlcXVlc3Rfb2JqZWN0X3NpZ25pbmdfYWxnX3ZhbHVlc19zdXBwb3J0ZWQ6IHN0cmluZ1tdO1xyXG4gIGRpc3BsYXlfdmFsdWVzX3N1cHBvcnRlZDogc3RyaW5nW107XHJcbiAgY2xhaW1fdHlwZXNfc3VwcG9ydGVkOiBzdHJpbmdbXTtcclxuICBjbGFpbXNfc3VwcG9ydGVkOiBzdHJpbmdbXTtcclxuICBjbGFpbXNfcGFyYW1ldGVyX3N1cHBvcnRlZDogYm9vbGVhbjtcclxuICBzZXJ2aWNlX2RvY3VtZW50YXRpb246IHN0cmluZztcclxuICB1aV9sb2NhbGVzX3N1cHBvcnRlZDogc3RyaW5nW107XHJcbiAgcmV2b2NhdGlvbl9lbmRwb2ludDogc3RyaW5nO1xyXG59XHJcbiJdfQ==