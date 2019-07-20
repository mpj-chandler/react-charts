import { AxisConfig, AxisRange } from '../components/BarChart/types';
import { applyZeroIntercept } from './applyZeroIntercept';
import { applyMargin } from './applyMargin';

export function applyAxisConfig(range: AxisRange, config?: AxisConfig) {

    if (config) {
        if (config.zeroIntercept) {
            range = applyZeroIntercept(range);
        }

        if (config.margin) {
            range = applyMargin(range, config.margin);
        }
    }

    return range;
}
