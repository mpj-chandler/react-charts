import { AxisRange } from '../components/BarChart/types';

export function applyMargin(range: AxisRange, margin: number) {
    return { min: range.min / margin, max: range.max * margin };
}