import Placement from '../../../enums/Placement';
import { BarProps } from '../Bar';
import DataType from '../../../enums/DataType';
import { NonNullNumericDataPoint } from '../../../__types__/seriesTypes';

export function getBarXPosition(props: BarProps): number {
    const interval = props.xRange.max - props.xRange.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    switch (props.type) {
        case DataType.NonNullNumeric:
            return getNumericBarXPosition(props, interval, totalHorizontalPadding);
        case DataType.Named:
            return getNamedBarXPosition(props, interval, totalHorizontalPadding);
        default:
            throw new Error('Error in rendering bar! Unrecognized data type!');
    }
}

function getNumericBarXPosition(props: BarProps, interval: number, totalHorizontalPadding: number): number {
    if (props.barAlignment === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;

        return ((100 - totalHorizontalPadding)
            * ((step + (props.point as NonNullNumericDataPoint).x) / interval))
            + props.padding.left;
    }

    return ((100 - totalHorizontalPadding)
        * ((props.point as NonNullNumericDataPoint).x / interval))
        + props.padding.left;
}

function getNamedBarXPosition(props: BarProps, interval: number, totalHorizontalPadding: number): number {
    if (props.barAlignment === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;

        return ((100 - totalHorizontalPadding)
            * (step + (props.index)) / interval)
            + props.padding.left;
    }

    return ((100 - totalHorizontalPadding)
        * (props.index / interval)
        + props.padding.left);
}

