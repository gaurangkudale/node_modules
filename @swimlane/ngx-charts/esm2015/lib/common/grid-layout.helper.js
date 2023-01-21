import { scaleBand } from 'd3-scale';
export function gridSize(dims, len, minWidth) {
    let rows = 1;
    let cols = len;
    const width = dims.width;
    if (width > minWidth) {
        while (width / cols < minWidth) {
            rows += 1;
            cols = Math.ceil(len / rows);
        }
    }
    return [cols, rows];
}
export function gridLayout(dims, data, minWidth, designatedTotal) {
    const xScale = scaleBand();
    const yScale = scaleBand();
    const width = dims.width;
    const height = dims.height;
    const [columns, rows] = gridSize(dims, data.length, minWidth);
    const xDomain = [];
    const yDomain = [];
    for (let i = 0; i < rows; i++) {
        yDomain.push(i);
    }
    for (let i = 0; i < columns; i++) {
        xDomain.push(i);
    }
    xScale.domain(xDomain);
    yScale.domain(yDomain);
    xScale.rangeRound([0, width], 0.1);
    yScale.rangeRound([0, height], 0.1);
    const res = [];
    const total = designatedTotal ? designatedTotal : getTotal(data);
    const cardWidth = xScale.bandwidth();
    const cardHeight = yScale.bandwidth();
    for (let i = 0; i < data.length; i++) {
        res[i] = {};
        res[i].data = {
            name: data[i] ? data[i].name : '',
            value: data[i] ? data[i].value : undefined,
            extra: data[i] ? data[i].extra : undefined,
            label: data[i] ? data[i].label : ''
        };
        res[i].x = xScale(i % columns);
        res[i].y = yScale(Math.floor(i / columns));
        res[i].width = cardWidth;
        res[i].height = cardHeight;
        res[i].data.percent = total > 0 ? res[i].data.value / total : 0;
        res[i].data.total = total;
    }
    return res;
}
function getTotal(results) {
    return results.map(d => (d ? d.value : 0)).reduce((sum, val) => sum + val, 0);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1sYXlvdXQuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ncmlkLWxheW91dC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVyQyxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUTtJQUMxQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7SUFDZixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXpCLElBQUksS0FBSyxHQUFHLFFBQVEsRUFBRTtRQUNwQixPQUFPLEtBQUssR0FBRyxJQUFJLEdBQUcsUUFBUSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLENBQUM7WUFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDOUI7S0FDRjtJQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZTtJQUM5RCxNQUFNLE1BQU0sR0FBUSxTQUFTLEVBQVUsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBUSxTQUFTLEVBQVUsQ0FBQztJQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFM0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFF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QjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLE9BQU87SUFDdkIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2NhbGVCYW5kIH0gZnJvbSAnZDMtc2NhbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JpZFNpemUoZGltcywgbGVuLCBtaW5XaWR0aCkge1xuICBsZXQgcm93cyA9IDE7XG4gIGxldCBjb2xzID0gbGVuO1xuICBjb25zdCB3aWR0aCA9IGRpbXMud2lkdGg7XG5cbiAgaWYgKHdpZHRoID4gbWluV2lkdGgpIHtcbiAgICB3aGlsZSAod2lkdGggLyBjb2xzIDwgbWluV2lkdGgpIHtcbiAgICAgIHJvd3MgKz0gMTtcbiAgICAgIGNvbHMgPSBNYXRoLmNlaWwobGVuIC8gcm93cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtjb2xzLCByb3dzXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyaWRMYXlvdXQoZGltcywgZGF0YSwgbWluV2lkdGgsIGRlc2lnbmF0ZWRUb3RhbCkge1xuICBjb25zdCB4U2NhbGU6IGFueSA9IHNjYWxlQmFuZDxudW1iZXI+KCk7XG4gIGNvbnN0IHlTY2FsZTogYW55ID0gc2NhbGVCYW5kPG51bWJlcj4oKTtcbiAgY29uc3Qgd2lkdGggPSBkaW1zLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBkaW1zLmhlaWdodDtcblxuICBjb25zdCBbY29sdW1ucywgcm93c10gPSBncmlkU2l6ZShkaW1zLCBkYXRhLmxlbmd0aCwgbWluV2lkdGgpO1xuXG4gIGNvbnN0IHhEb21haW4gPSBbXTtcbiAgY29uc3QgeURvbWFpbiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHlEb21haW4ucHVzaChpKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgIHhEb21haW4ucHVzaChpKTtcbiAgfVxuICB4U2NhbGUuZG9tYWluKHhEb21haW4pO1xuICB5U2NhbGUuZG9tYWluKHlEb21haW4pO1xuXG4gIHhTY2FsZS5yYW5nZVJvdW5kKFswLCB3aWR0aF0sIDAuMSk7XG4gIHlTY2FsZS5yYW5nZVJvdW5kKFswLCBoZWlnaHRdLCAwLjEpO1xuXG4gIGNvbnN0IHJlcyA9IFtdO1xuICBjb25zdCB0b3RhbCA9IGRlc2lnbmF0ZWRUb3RhbCA/IGRlc2lnbmF0ZWRUb3RhbCA6IGdldFRvdGFsKGRhdGEpO1xuICBjb25zdCBjYXJkV2lkdGggPSB4U2NhbGUuYmFuZHdpZHRoKCk7XG4gIGNvbnN0IGNhcmRIZWlnaHQgPSB5U2NhbGUuYmFuZHdpZHRoKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzW2ldID0ge307XG4gICAgcmVzW2ldLmRhdGEgPSB7XG4gICAgICBuYW1lOiBkYXRhW2ldID8gZGF0YVtpXS5uYW1lIDogJycsXG4gICAgICB2YWx1ZTogZGF0YVtpXSA/IGRhdGFbaV0udmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICBleHRyYTogZGF0YVtpXSA/IGRhdGFbaV0uZXh0cmEgOiB1bmRlZmluZWQsXG4gICAgICBsYWJlbDogZGF0YVtpXSA/IGRhdGFbaV0ubGFiZWwgOiAnJ1xuICAgIH07XG4gICAgcmVzW2ldLnggPSB4U2NhbGUoaSAlIGNvbHVtbnMpO1xuICAgIHJlc1tpXS55ID0geVNjYWxlKE1hdGguZmxvb3IoaSAvIGNvbHVtbnMpKTtcbiAgICByZXNbaV0ud2lkdGggPSBjYXJkV2lkdGg7XG4gICAgcmVzW2ldLmhlaWdodCA9IGNhcmRIZWlnaHQ7XG4gICAgcmVzW2ldLmRhdGEucGVyY2VudCA9IHRvdGFsID4gMCA/IHJlc1tpXS5kYXRhLnZhbHVlIC8gdG90YWwgOiAwO1xuICAgIHJlc1tpXS5kYXRhLnRvdGFsID0gdG90YWw7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBnZXRUb3RhbChyZXN1bHRzKSB7XG4gIHJldHVybiByZXN1bHRzLm1hcChkID0+IChkID8gZC52YWx1ZSA6IDApKS5yZWR1Y2UoKHN1bSwgdmFsKSA9PiBzdW0gKyB2YWwsIDApO1xufVxuIl19