import React from 'react';
import styles from './XAxis.scss';
import { getXAxisRange } from '../../utils/axisUtils/getXAxisRange/getXAxisRange';
import { getYAxisRange } from '../../utils/axisUtils/getYAxisRange/getYAxisRange';
import Placement from '../../enums/Placement';
import AxisTickLabel from '../AxisTickLabel/AxisTickLabel';
import Axis from '../../enums/Axis';
import generateAxisLabels from '../../utils/axisUtils/generateAxisLabels/generateAxisLabels';
import { AxisTickProps, AxisProps } from '../../__types__/axisTypes';
import { SeriesDataPoint } from '../../__types__/seriesTypes';

function getTickXPosition(props: AxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = interval / numPoints;

        return ((100 - totalHorizontalPadding) * ((step + label - range.min) / interval)) + props.padding.left;
    }

    return ((100 - totalHorizontalPadding) * (label - range.min) / interval) + props.padding.left;
}

function getTickTextXPosition(x1: number, props: AxisTickProps, label: number) {
    const range = getXAxisRange(props.data, props.config);
    const numPoints = props.data[0].points.length;
    const interval = range.max - range.min;
    const totalHorizontalPadding = props.padding.right + props.padding.left;

    if (props.config && props.config.tickPlacement === Placement.Bucket) {
        const step = 0.5 * (interval / numPoints);

        return (100 - totalHorizontalPadding) * ((step + label - range.min) / interval) + props.padding.left;
    }

    return x1;
}

function renderTick(
    label: number,
    x1: number,
    y1: number,
    props: AxisTickProps,
    textXPos: number,
    tickLength: number = 5) {
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
            <AxisTickLabel
                key={`tickText-${label}`}
                xPos={textXPos}
                yPos={y2}
                label={label}
                axis={Axis.XAxis}
            />
        </g>
    );
}

function renderTicks(props: AxisTickProps, y1: number) {
    const points: SeriesDataPoint[] = props.data[0].points;
    const tickLabels: string[] = generateAxisLabels(props.data, Axis.XAxis);

    return (
        <g className={styles.XAxis__Ticks}>
            {tickLabels.map((label: string) => {
                const x1 = getTickXPosition(props, Number(label));
                const textXPos = getTickTextXPosition(x1, props, Number(label));

                return renderTick(Number(label), x1, y1, props, textXPos);
            })}
        </g>
    );
}

function getXAxisYPos(props: AxisProps): number {
    const range = getYAxisRange(props.data, props.config);
    const interval = range.max - range.min;
    const totalVerticalPadding = props.padding.top + props.padding.bottom;

    if (range.max <= 0) {
        return props.padding.top;
    }

    return ((100 - totalVerticalPadding) * (range.max / interval)) + props.padding.top;
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
