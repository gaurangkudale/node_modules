export function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
export function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1kYXRhdGFibGUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxVQUFVLENBQUMsUUFBZSxFQUFFLEdBQVEsRUFBRSxTQUFjO0lBQ2xFLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFL0MsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkM7U0FBTTtRQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixRQUFlLEVBQ2YsSUFBVyxFQUNYLEtBQWEsRUFDYixTQUFpQixFQUNqQixTQUFjO0lBRWQsTUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUU1QyxJQUFJLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxHQUFHO2dCQUNOLEtBQUssRUFBRSxLQUFLO2dCQUNaLEdBQUcsRUFBRSxTQUFTO2FBQ2YsQ0FBQztTQUNIO2FBQU07WUFDTCxLQUFLLEdBQUc7Z0JBQ04sS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQzthQUNmLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRTtZQUNoRCwwREFBMEQ7WUFDMUQsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRjtLQUNGO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3dzKHNlbGVjdGVkOiBhbnlbXSwgcm93OiBhbnksIGNvbXBhcmVmbjogYW55KSB7XG4gIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBjb21wYXJlZm4ocm93LCBzZWxlY3RlZCk7XG5cbiAgaWYgKHNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgIHNlbGVjdGVkLnNwbGljZShzZWxlY3RlZEluZGV4LCAxKTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZC5wdXNoKHJvdyk7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSb3dzQmV0d2VlbihcbiAgc2VsZWN0ZWQ6IGFueVtdLFxuICByb3dzOiBhbnlbXSxcbiAgaW5kZXg6IG51bWJlcixcbiAgcHJldkluZGV4OiBudW1iZXIsXG4gIGNvbXBhcmVmbjogYW55XG4pOiBhbnlbXSB7XG4gIGNvbnN0IHJldmVyc2UgPSBpbmRleCA8IHByZXZJbmRleDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSByb3dzW2ldO1xuICAgIGNvbnN0IGdyZWF0ZXIgPSBpID49IHByZXZJbmRleCAmJiBpIDw9IGluZGV4O1xuICAgIGNvbnN0IGxlc3NlciA9IGkgPD0gcHJldkluZGV4ICYmIGkgPj0gaW5kZXg7XG5cbiAgICBsZXQgcmFuZ2UgPSB7IHN0YXJ0OiAwLCBlbmQ6IDAgfTtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0OiBpbmRleCxcbiAgICAgICAgZW5kOiBwcmV2SW5kZXhcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlID0ge1xuICAgICAgICBzdGFydDogcHJldkluZGV4LFxuICAgICAgICBlbmQ6IGluZGV4ICsgMVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoKHJldmVyc2UgJiYgbGVzc2VyKSB8fCAoIXJldmVyc2UgJiYgZ3JlYXRlcikpIHtcbiAgICAgIC8vIGlmIGluIHRoZSBwb3NpdGl2ZSByYW5nZSB0byBiZSBhZGRlZCB0byBgc2VsZWN0ZWRgLCBhbmRcbiAgICAgIC8vIG5vdCBhbHJlYWR5IGluIHRoZSBzZWxlY3RlZCBhcnJheSwgYWRkIGl0XG4gICAgICBpZiAoaSA+PSByYW5nZS5zdGFydCAmJiBpIDw9IHJhbmdlLmVuZCkge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkO1xufVxuIl19