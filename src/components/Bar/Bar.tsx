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

function getBarXPosition(props: BarProps) {
    const interval = props.xRange.max - props.xRange.min;

    if (props.barAlignment === Placement.Bucket) {
        const step = 0.5 * interval / props.numBars;
        return (100 - props.padding.right) * ((step + props.point.x) / interval);
    }
    return (100 - props.padding.right) * (props.point.x / interval);
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    const x = getBarXPosition(props);
    const height = (100 - props.padding.top) * ((props.point.y - props.yRange.min) / (props.yRange.max - props.yRange.min));
    const y = 100 - height;

    const animation = useAnimation('elastic', 600, 0);
    
    return (
        <rect 
            x={`${x - props.width / 2}%`}
            y={`${100 - (animation * height)}%`}
            height={`${animation * height}%`}
            width={`${props.width}%`}
            fill={props.fill}
            stroke={props.stroke}
        >
        </rect>
    )
}

export default Bar;
