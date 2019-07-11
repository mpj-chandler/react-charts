import { SeriesData, SeriesDataPoint, AxisConfig, AxisRange } from '../components/BarChart/types';
import { applyAxisConfig } from './applyAxisConfig';

export function getYAxisRange(data: SeriesData[], config?: AxisConfig) {
    const yValues: number[] = data[0].points.map((point: SeriesDataPoint) => point.y);
    let range: AxisRange = { min: Math.min(...yValues), max: Math.max(...yValues) }
    
    if (config) {
        range = applyAxisConfig(range, config);
    }    

    return range;
}