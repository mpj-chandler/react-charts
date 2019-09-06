import Axis from '../../../enums/Axis';
import calculateTickInterval from '../calculateTickInterval/calculateTickInterval';
import { getXAxisRange } from '../getXAxisRange/getXAxisRange';
import { getYAxisRange } from '../getYAxisRange/getYAxisRange';
import { SeriesData } from '../../../__types__/seriesTypes';
import { AxisRange } from '../../../__types__/axisTypes';

function generateAxisLabels(seriesData: SeriesData[], axis: Axis): string[] {
    const labels: string[] = [];
    let range: AxisRange;
    if (axis === Axis.XAxis) {
        range = getXAxisRange(seriesData);
    } else {
        range = getYAxisRange(seriesData);
    }

    const tickInterval = calculateTickInterval(range);
    const decimals = -1 * Math.min(0, Math.log10(tickInterval));
    let firstTickValue: number = 0;

    while (firstTickValue > range.min) {
        firstTickValue -= tickInterval;
    }
    let currentValue: number = firstTickValue;

    while (currentValue <= range.max + tickInterval) {
        labels.push(currentValue.toFixed(decimals));
        currentValue += tickInterval;
    }

    return labels;
}

export default generateAxisLabels;
