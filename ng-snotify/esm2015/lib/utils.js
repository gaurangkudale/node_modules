/**
 * Generates random id
 * @return number
 */
export function uuid() {
    return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}
/**
 * Simple is object check.
 * @param item Object<any>
 * @returns boolean
 */
export function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge objects.
 * @param sources Array<Object<any>>
 * @returns Object<any>
 */
export function mergeDeep(...sources) {
    const target = {};
    if (!sources.length) {
        return target;
    }
    while (sources.length > 0) {
        const source = sources.shift();
        if (isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    target[key] = mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    }
    return target;
}
export function animate(start, duration, callback) {
    let endTime;
    requestAnimationFrame(timestamp => (endTime = timestamp + duration));
    const calculate = () => {
        requestAnimationFrame(timestamp => {
            const runtime = timestamp - endTime;
            const progress = Math.min(runtime / duration, 1) + start;
            if (runtime < duration) {
                if (callback(+(100 * progress).toFixed(2), progress)) {
                    calculate();
                }
            }
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zbm90aWZ5LyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUNILE1BQU0sVUFBVSxJQUFJO0lBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQUk7SUFDM0IsT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBRyxPQUFPO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNuQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsUUFBd0Q7SUFDL0csSUFBSSxPQUFPLENBQUM7SUFDWixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNyQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoQyxNQUFNLE9BQU8sR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDekQsSUFBSSxPQUFPLEdBQUcsUUFBUSxFQUFFO2dCQUN0QixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRTtvQkFDcEQsU0FBUyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZW5lcmF0ZXMgcmFuZG9tIGlkXHJcbiAqIEByZXR1cm4gbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoRGF0ZS5ub3coKSAtIDEpKSArIDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgaXMgb2JqZWN0IGNoZWNrLlxyXG4gKiBAcGFyYW0gaXRlbSBPYmplY3Q8YW55PlxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZXAgbWVyZ2Ugb2JqZWN0cy5cclxuICogQHBhcmFtIHNvdXJjZXMgQXJyYXk8T2JqZWN0PGFueT4+XHJcbiAqIEByZXR1cm5zIE9iamVjdDxhbnk+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKC4uLnNvdXJjZXMpIHtcclxuICBjb25zdCB0YXJnZXQgPSB7fTtcclxuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKHNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xyXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZShzdGFydDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKGN1cnJlbnRWYWx1ZTogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyKSA9PiB7fSkge1xyXG4gIGxldCBlbmRUaW1lO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lc3RhbXAgPT4gKGVuZFRpbWUgPSB0aW1lc3RhbXAgKyBkdXJhdGlvbikpO1xyXG4gIGNvbnN0IGNhbGN1bGF0ZSA9ICgpID0+IHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lc3RhbXAgPT4ge1xyXG4gICAgICBjb25zdCBydW50aW1lID0gdGltZXN0YW1wIC0gZW5kVGltZTtcclxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbihydW50aW1lIC8gZHVyYXRpb24sIDEpICsgc3RhcnQ7XHJcbiAgICAgIGlmIChydW50aW1lIDwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2soKygxMDAgKiBwcm9ncmVzcykudG9GaXhlZCgyKSwgcHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgICBjYWxjdWxhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19