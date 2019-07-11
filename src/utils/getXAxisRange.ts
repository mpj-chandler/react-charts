import { SeriesData, SeriesDataPoint, AxisRange, AxisConfig } from '../components/BarChart/types';
import { applyAxisConfig } from './applyAxisConfig';


export function getXAxisRange(data: SeriesData[], config?: AxisConfig) {
    const xValues: number[] = data[0].points.map((point: SeriesDataPoint) => point.x);
    let range: AxisRange = { min: Math.min(...xValues), max: Math.max(...xValues) }

    if (config) {
        range = applyAxisConfig(range, config);
    }

    return range;
}