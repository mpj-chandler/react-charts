import Axis from '../../../enums/Axis';
import calculateTickInterval from '../calculateTickInterval/calculateTickInterval';
import { getXAxisRange } from '../getXAxisRange/getXAxisRange';
import { getYAxisRange } from '../getYAxisRange/getYAxisRange';
import { SeriesData, DataPoint, NamedDataPoint } from '../../../__types__/seriesTypes';
import { AxisRange } from '../../../__types__/axisTypes';
import DataType from '../../../enums/DataType';
import { extractDataType } from './extractDataType';

function generateAxisLabels(seriesData: SeriesData[], axis: Axis): string[] {
    const dataType = extractDataType(seriesData, axis);

    switch (dataType) {
        case DataType.NonNullNumeric:
        case DataType.Numeric:
            return generateScaledNumericAxisLabels(seriesData, axis);
        case DataType.Named:
            return generateNamedAxisLabels(seriesData, axis);
        default:
            throw new Error('Error in axis calibration: unrecognised data type!');
    }
}

function generateScaledNumericAxisLabels(seriesData: SeriesData[], axis: Axis): string[] {
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

function generateNamedAxisLabels(seriesData: SeriesData[], axis: Axis): string[] {
    if (axis === Axis.YAxis) {
        throw new Error('Error in axis calibration: only numeric values currently allowed on y axis!');
    }

    const labels: string[] = [];

    seriesData.forEach((data: SeriesData) => {
        data.points.forEach((point: DataPoint) => {
            if (axis === Axis.XAxis) {
                labels.push((point as NamedDataPoint).x);
            }
        });
    });

    return labels;
}

export default generateAxisLabels;
