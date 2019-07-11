import React from 'react';
import { SeriesDataPoint, AxisRange, Padding } from '../BarChart/types';

interface BarProps {
    point: SeriesDataPoint
    yRange: AxisRange;
    xRange: AxisRange;
    width: number;
    fill: string;
    stroke: string;
    padding: Padding;
}

const Bar: React.FC<BarProps> = (props: BarProps) => {
    const x = ((100 - props.padding.right) * (props.point.x / (props.xRange.max - props.xRange.min)));
    const height = (100 - props.padding.top) * ((props.point.y - props.yRange.min) / (props.yRange.max - props.yRange.min));
    const y = 100 - height;
    
    return (
        <rect
            x={`${x - props.width / 2}%`}
            y={`${y}%`}
            height={`${height}%`}
            width={`${props.width}%`}
            fill={props.fill}
            stroke={props.stroke}
        >
        </rect>
    )
}

export default Bar;