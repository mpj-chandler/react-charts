import React from 'react';
import { XAxisTickProps } from './types';
import styles from './XAxis.scss';
import { AxisProps, AxisRange, SeriesDataPoint } from '../BarChart/types';
import { getXAxisRange } from '../../utils/getXAxisRange';
import Placement from '../../enums/Placement';

function getTickXPosition(props: XAxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = interval / numPoints;
        return (100 - props.padding.right) * ((step + label - range.min) / interval);
    }

    return (100 - props.padding.right) * (label - range.min) / interval;
}

function getTickTextXPosition(x1: number, props: XAxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = 0.5 * (interval / numPoints);
        return (100 - props.padding.right) * ((step + label - range.min) / interval);
    }

    return Math.min(Math.max(x1, 0), (100 - props.padding.right / 2));
}

function renderTick(label: number, x1: number, props: XAxisTickProps, textXPos: number) {
    return (
        <g key={`tickGroup-${label}`}>
            <line
                key={`tickLine-${label}`}
                x1={`${x1}%`}
                y1={'0%'}
                x2={`${x1}%`}
                y2={`${props.padding.right}%`}
                stroke={'black'}
            />
            <text
                key={`tickText-${label}`}
                className={styles.XAxis__TickLabels} x={`${textXPos}%`} y={'25%'}
                stroke={'black'}>{label}
            </text>
        </g>
    );
}

function generateTickLabels(points: SeriesDataPoint[]) {
    return points.map((point: SeriesDataPoint) => point.x);
}

function renderTicks(props: XAxisTickProps) {
    const points: SeriesDataPoint[] = props.data[0].points;
    const tickLabels: number[] = generateTickLabels(points);


    return (
        <g className={styles.XAxis__Ticks}>
            {tickLabels.map((label: number) => {
                const x1 = getTickXPosition(props, label);
                const textXPos = getTickTextXPosition(x1, props, label);
                return renderTick(label, x1, props, textXPos)
            })}
        </g>
    )
}

const XAxis: React.FC<AxisProps> = (props) => {
    return (
        <div className={styles.XAxis}>
            <svg className={styles.XAxis__Svg}>
                <line x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                {renderTicks({data: props.data, padding: props.padding, config: props.config})}
            </svg>
        </div>
    );
};

export default XAxis;
