import React from 'react';
import { AxisRange, Padding, SeriesDataPoint } from '../BarChart/types';
import { useAnimation } from '../../utils/useAnimation';
import Placement from '../../enums/Placement';
import { getXAxisRange } from '../../utils/getXAxisRange';

export interface BarProps {
    point: SeriesDataPoint
    yRange: AxisRange;
    xRange: AxisRange;
    width: number;
    fill: string;
    stroke: string;
    padding: Padding;
    numBars: number;
    barAlignment: Placement;
}

function getBarEndingHeight(props: BarProps): number {
    const yMin = Math.min(0, Math.max(0, props.yRange.min));
    
    if (props.yRange.max <= 0) {
        return (100 - props.padding.top) * ((yMin - props.point.y) / (props.yRange.min - props.yRange.max));
    }

    return (100 - props.padding.top) * ((props.point.y - yMin) / (props.yRange.max - props.yRange.min));
}

function getZeroPoint(props: BarProps): number {
    return (props.yRange.max / (props.yRange.max - props.yRange.min));
}

function getBarXPosition(props: BarProps) {
    const interval = props.xRange.max - props.xRange.min;

    if (props.barAlignment === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;
        return (100 - props.padding.right) * ((step + props.point.x) / interval);
    }
    return (100 - props.padding.right) * (props.point.x / interval);
}

function getY(height: number, yStart: number, value: number) {
    
    if (value >= 0) {
        return yStart - height;
    }

    return yStart;
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    const x = getBarXPosition(props);
    const height = getBarEndingHeight(props);
    const zeroPoint = getZeroPoint(props);
    const animation = useAnimation('elastic', 600, 0);
    const yStart = props.yRange.max <= 0 ? props.padding.top : 100 * zeroPoint;
    
    return (
        <rect 
            x={`${x - props.width / 2}%`}
            y={`${getY(animation * height, yStart, props.point.y)}%`}
            height={`${props.point.y < 0 ? -1 * animation * height : animation * height}%`}
            width={`${props.width}%`}
            fill={props.fill}
            stroke={props.stroke}
        >
        </rect>
    )
}

export default Bar;
