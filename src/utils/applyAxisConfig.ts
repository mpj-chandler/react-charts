import { AxisConfig, AxisRange } from '../components/BarChart/types';
import { applyMargin } from './applyMargin';
import { applyZeroIntercept } from './applyZeroIntercept';

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
