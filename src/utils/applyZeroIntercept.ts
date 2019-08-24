import { AxisRange } from '../components/BarChart/types';

export function applyZeroIntercept(range: AxisRange) {
    if (range.min > 0) {
        return { ...range, min: 0 };
    }

    if (range.max < 0) {
        return { ...range, max: 0 };
    }

    return range;
}
