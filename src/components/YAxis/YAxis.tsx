import React from 'react';
import { AxisRange, YAxisTickProps } from './types';
import styles from './YAxis.scss';
import { SeriesData, SeriesDataPoint, Padding, AxisProps } from '../BarChart/types';
import { getYAxisRange } from '../../utils/getYAxisRange';
import { getXAxisRange } from '../../utils/getXAxisRange';

function getYAxisXPos(props: AxisProps): number {
    const range = getXAxisRange(props.data, props.config);
    
    return (100 * (range.min / (range.max - range.min)) + props.padding.left);
}

const YAxis: React.FC<AxisProps> = (props) => {
    const renderTicks: (props: YAxisTickProps, x2: number) => JSX.Element = (props, x2) => {
        const tickLabels: number[] = props.data[0].points.map((point: SeriesDataPoint) => point.y)
        const range: AxisRange = getYAxisRange(props.data, props.config);
        const interval = range.max - range.min;

        return (
            <g className={styles.YAxis__Ticks}>
                {tickLabels.map((label: number) => {
                    const y1 = (((100 - (props.padding.top + props.padding.bottom)) * (1 - (label - range.min) / interval))) + props.padding.top;

                    return (
                        <g>
                            <line x1={`${x2 - props.config.tickLength}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y1}%`} stroke={'black'}/>
                            <text className={styles.YAxis__TickLabels} x={`${x2 - props.tickLength}%`} y={`${y1}%`} stroke={'black'}>{label}</text>
                        </g>
                    )}
                )}
            </g>
        )
    }

    const yAxisXPos = getYAxisXPos(props);
    
    return (
        <div className={styles.YAxis}>
            <svg className={styles.YAxis__Svg}>
                <line x1={`${yAxisXPos}%`} y1={`${props.padding.top}%`} x2={`${yAxisXPos}%`} y2={`${100 - props.padding.bottom}%`} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                {renderTicks({data: props.data, padding: props.padding, config: props.config}, yAxisXPos)}
            </svg>
        </div>
    )
};

export default YAxis;
