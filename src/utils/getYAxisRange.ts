import { AxisConfig, AxisRange, SeriesData, SeriesDataPoint } from '../components/BarChart/types';
import { applyAxisConfig } from './applyAxisConfig';
import extractMaximumAndMinimum from './extractMaximumAndMinimum';
import Axis from '../enums/Axis';

export function getYAxisRange(data: SeriesData[], config?: AxisConfig) {
    let range: AxisRange = extractMaximumAndMinimum(data, Axis.YAxis);

    if (config) {
        range = applyAxisConfig(range, config);
    }

    return range;
}
