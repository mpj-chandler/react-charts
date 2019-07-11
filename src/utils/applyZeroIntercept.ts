import { AxisRange } from '../components/BarChart/types';

export function applyZeroIntercept(range: AxisRange) {
    return { ...range, min: 0 };
}