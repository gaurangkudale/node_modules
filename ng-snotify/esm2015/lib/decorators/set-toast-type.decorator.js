/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType(target, propertyKey, descriptor) {
    return {
        value(...args) {
            args[0].config = Object.assign(Object.assign({}, args[0].config), { type: propertyKey });
            return descriptor.value.apply(this, args);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXRvYXN0LXR5cGUuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc25vdGlmeS8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL3NldC10b2FzdC10eXBlLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQVcsRUFBRSxXQUF3QixFQUFFLFVBQThCO0lBQ2hHLE9BQU87UUFDTCxLQUFLLENBQUMsR0FBRyxJQUFXO1lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQWEsQ0FBQyxNQUFNLG1DQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFhLENBQUMsTUFBTSxLQUM5QixJQUFJLEVBQUUsV0FBVyxHQUNsQixDQUFDO1lBQ0YsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU25vdGlmeVR5cGUgfSBmcm9tICcuLi90eXBlcy9zbm90aWZ5LnR5cGUnO1xyXG5pbXBvcnQgeyBTbm90aWZ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zbm90aWZ5LmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0b2FzdCBzdHlsZSBkZXBlbmRpbmcgb24gbWV0aG9kIG5hbWVcclxuICogQHBhcmFtIHRhcmdldCBhbnlcclxuICogQHBhcmFtIHByb3BlcnR5S2V5IFNub3RpZnlUeXBlXHJcbiAqIEBwYXJhbSBkZXNjcmlwdG9yIFByb3BlcnR5RGVzY3JpcHRvclxyXG4gKiBAcmV0dXJucyB2YWx1ZTogKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNldFRvYXN0VHlwZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IFNub3RpZnlUeXBlLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWUoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgKGFyZ3NbMF0gYXMgU25vdGlmeSkuY29uZmlnID0ge1xyXG4gICAgICAgIC4uLihhcmdzWzBdIGFzIFNub3RpZnkpLmNvbmZpZyxcclxuICAgICAgICB0eXBlOiBwcm9wZXJ0eUtleVxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==