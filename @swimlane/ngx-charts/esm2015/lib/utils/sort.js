export function sortLinear(data, property, direction = 'asc') {
    return data.sort((a, b) => {
        if (direction === 'asc') {
            return a[property] - b[property];
        }
        else {
            return b[property] - a[property];
        }
    });
}
export function sortByDomain(data, property, direction = 'asc', domain) {
    return data.sort((a, b) => {
        const aVal = a[property];
        const bVal = b[property];
        const aIdx = domain.indexOf(aVal);
        const bIdx = domain.indexOf(bVal);
        if (direction === 'asc') {
            return aIdx - bIdx;
        }
        else {
            return bIdx - aIdx;
        }
    });
}
export function sortByTime(data, property, direction = 'asc') {
    return data.sort((a, b) => {
        const aDate = a[property].getTime();
        const bDate = b[property].getTime();
        if (direction === 'asc') {
            if (aDate > bDate)
                return 1;
            if (bDate > aDate)
                return -1;
            return 0;
        }
        else {
            if (aDate > bDate)
                return -1;
            if (bDate > aDate)
                return 1;
            return 0;
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEdBQUcsS0FBSztJQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsTUFBTTtJQUNwRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsSUFBSSxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsR0FBRyxLQUFLO0lBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBDLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtZQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLEtBQUs7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxJQUFJLEtBQUssR0FBRyxLQUFLO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFLLEdBQUcsS0FBSztnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNvcnRMaW5lYXIoZGF0YSwgcHJvcGVydHksIGRpcmVjdGlvbiA9ICdhc2MnKSB7XG4gIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgcmV0dXJuIGFbcHJvcGVydHldIC0gYltwcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiW3Byb3BlcnR5XSAtIGFbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEb21haW4oZGF0YSwgcHJvcGVydHksIGRpcmVjdGlvbiA9ICdhc2MnLCBkb21haW4pIHtcbiAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFWYWwgPSBhW3Byb3BlcnR5XTtcbiAgICBjb25zdCBiVmFsID0gYltwcm9wZXJ0eV07XG5cbiAgICBjb25zdCBhSWR4ID0gZG9tYWluLmluZGV4T2YoYVZhbCk7XG4gICAgY29uc3QgYklkeCA9IGRvbWFpbi5pbmRleE9mKGJWYWwpO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiBhSWR4IC0gYklkeDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJJZHggLSBhSWR4O1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlUaW1lKGRhdGEsIHByb3BlcnR5LCBkaXJlY3Rpb24gPSAnYXNjJykge1xuICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYURhdGUgPSBhW3Byb3BlcnR5XS5nZXRUaW1lKCk7XG4gICAgY29uc3QgYkRhdGUgPSBiW3Byb3BlcnR5XS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgaWYgKGFEYXRlID4gYkRhdGUpIHJldHVybiAxO1xuICAgICAgaWYgKGJEYXRlID4gYURhdGUpIHJldHVybiAtMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYURhdGUgPiBiRGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgaWYgKGJEYXRlID4gYURhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==