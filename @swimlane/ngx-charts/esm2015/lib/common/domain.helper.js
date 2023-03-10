/**
 * Based on the data, return an array with unique values.
 *
 * @export
 * @returns array
 */
export function getUniqueXDomainValues(results) {
    const valueSet = new Set();
    for (const result of results) {
        for (const d of result.series) {
            valueSet.add(d.name);
        }
    }
    return Array.from(valueSet);
}
/**
 * Get the scaleType of enumerable of values.
 * @returns  'time', 'linear' or 'ordinal'
 */
export function getScaleType(values, checkDateType = true) {
    if (checkDateType) {
        const allDates = values.every(value => value instanceof Date);
        if (allDates) {
            return 'time';
        }
    }
    const allNumbers = values.every(value => typeof value === 'number');
    if (allNumbers) {
        return 'linear';
    }
    return 'ordinal';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vZG9tYWluLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxPQUFjO0lBQ25ELE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0IsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDNUIsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBYSxFQUFFLGFBQWEsR0FBRyxJQUFJO0lBQzlELElBQUksYUFBYSxFQUFFO1FBQ2pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLE1BQU0sQ0FBQztTQUNmO0tBQ0Y7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDcEUsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJhc2VkIG9uIHRoZSBkYXRhLCByZXR1cm4gYW4gYXJyYXkgd2l0aCB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVYRG9tYWluVmFsdWVzKHJlc3VsdHM6IGFueVtdKTogYW55W10ge1xuICBjb25zdCB2YWx1ZVNldCA9IG5ldyBTZXQoKTtcbiAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgIGZvciAoY29uc3QgZCBvZiByZXN1bHQuc2VyaWVzKSB7XG4gICAgICB2YWx1ZVNldC5hZGQoZC5uYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20odmFsdWVTZXQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2NhbGVUeXBlIG9mIGVudW1lcmFibGUgb2YgdmFsdWVzLlxuICogQHJldHVybnMgICd0aW1lJywgJ2xpbmVhcicgb3IgJ29yZGluYWwnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZVR5cGUodmFsdWVzOiBhbnlbXSwgY2hlY2tEYXRlVHlwZSA9IHRydWUpOiBzdHJpbmcge1xuICBpZiAoY2hlY2tEYXRlVHlwZSkge1xuICAgIGNvbnN0IGFsbERhdGVzID0gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSk7XG4gICAgaWYgKGFsbERhdGVzKSB7XG4gICAgICByZXR1cm4gJ3RpbWUnO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFsbE51bWJlcnMgPSB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyk7XG4gIGlmIChhbGxOdW1iZXJzKSB7XG4gICAgcmV0dXJuICdsaW5lYXInO1xuICB9XG5cbiAgcmV0dXJuICdvcmRpbmFsJztcbn1cbiJdfQ==