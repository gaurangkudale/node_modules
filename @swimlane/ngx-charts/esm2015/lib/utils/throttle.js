/**
 * Throttle a function
 *
 */
export function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
export function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvdGhyb3R0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUFTLEVBQUUsSUFBWSxFQUFFLE9BQWE7SUFDN0QsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEIsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLElBQUksQ0FBQztJQUNULElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztJQUVqQixTQUFTLEtBQUs7UUFDWixRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUMxQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRWpCLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ2pELE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWdCLEVBQUUsT0FBYTtJQUMxRCxPQUFPLFNBQVMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVTtRQUNwRCxPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLE1BQU07Z0JBQ2xCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtvQkFDakMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7aUJBQ3JELENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRocm90dGxlIGEgZnVuY3Rpb25cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlciwgb3B0aW9ucz86IGFueSkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IGNvbnRleHQ7XG4gIGxldCBhcmdzO1xuICBsZXQgcmVzdWx0O1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBwcmV2aW91cyA9IDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6ICtuZXcgRGF0ZSgpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICB9XG5cbiAgICBjb25zdCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIFRocm90dGxlIGRlY29yYXRvclxuICpcbiAqICBjbGFzcyBNeUNsYXNzIHtcbiAqICAgIHRocm90dGxlYWJsZSgxMClcbiAqICAgIG15Rm4oKSB7IC4uLiB9XG4gKiAgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVhYmxlKGR1cmF0aW9uOiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlubmVyRGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgICAgICB2YWx1ZTogdGhyb3R0bGUoZGVzY3JpcHRvci52YWx1ZSwgZHVyYXRpb24sIG9wdGlvbnMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==