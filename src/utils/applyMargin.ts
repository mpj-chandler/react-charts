import { AxisRange } from '../components/BarChart/types';

export function applyMargin(range: AxisRange, margin: number) {
    return { min: range.min / (1 + margin / 100), max: range.max * (1 + margin / 100) };
}