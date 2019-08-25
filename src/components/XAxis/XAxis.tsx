import React from 'react';
import { XAxisTickProps } from './types';
import styles from './XAxis.scss';
import { AxisProps, AxisRange, SeriesDataPoint } from '../BarChart/types';
import { getXAxisRange } from '../../utils/getXAxisRange';
import { getYAxisRange } from '../../utils/getYAxisRange';
import Placement from '../../enums/Placement';

function getTickXPosition(props: XAxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = interval / numPoints;
        return ((100 - (props.padding.right + props.padding.left)) * ((step + label - range.min) / interval)) + props.padding.left;
    }

    return ((100 - (props.padding.right + props.padding.left)) * (label - range.min) / interval) + props.padding.left;
}

function getTickTextXPosition(x1: number, props: XAxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = 0.5 * (interval / numPoints);
        return (100 - (props.padding.left + props.padding.right)) * ((step + label - range.min) / interval) + props.padding.left;
    }

    return x1;
}

function renderTick(label: number, x1: number, y1: number, props: XAxisTickProps, textXPos: number, tickLength: number = 5) {
    const y2 = y1 === props.padding.top ? y1 - tickLength / 2 : y1 + tickLength;

    return (
        <g key={`tickGroup-${label}`}>
            <line
                key={`tickLine-${label}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x1}%`}
                y2={`${y2}%`}
                stroke={'black'}
            />
            <text
                key={`tickText-${label}`}
                className={styles.XAxis__TickLabels} x={`${textXPos}%`} y={`${y2}%`}
                stroke={'black'}>{label}
            </text>
        </g>
    );
}

function generateTickLabels(points: SeriesDataPoint[]) {
    return points.map((point: SeriesDataPoint) => point.x);
}

function renderTicks(props: XAxisTickProps, y1: number) {
    const points: SeriesDataPoint[] = props.data[0].points;
    const tickLabels: number[] = generateTickLabels(points);

    return (
        <g className={styles.XAxis__Ticks}>
            {tickLabels.map((label: number) => {
                const x1 = getTickXPosition(props, label);
                const textXPos = getTickTextXPosition(x1, props, label);
                return renderTick(label, x1, y1, props, textXPos)
            })}
        </g>
    )
}

function getXAxisYPos(props: AxisProps): number {
    const range = getYAxisRange(props.data, props.config);
    
    if (range.max <= 0) {
        return props.padding.top;
    }

    return ((100 - (props.padding.top + props.padding.bottom)) * (range.max / (range.max - range.min))) + props.padding.top;
}

const XAxis: React.FC<AxisProps> = (props) => {
    const axisYPos = getXAxisYPos(props);

    return (
        <div className={styles.XAxis}>
            <svg className={styles.XAxis__Svg}>
                <line x1={`${props.padding.left}%`} y1={`${axisYPos}%`} x2={`${100 - props.padding.right / 2}%`} y2={`${axisYPos}%`} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                {renderTicks({data: props.data, padding: props.padding, config: props.config}, axisYPos)}
            </svg>
        </div>
    );
};

export default XAxis;
