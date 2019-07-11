import React from 'react';
import { XAxisTickProps } from './types';
import styles from './XAxis.scss';
import { SeriesData, SeriesDataPoint, AxisProps, AxisRange, Padding } from '../BarChart/types';
import { getXAxisRange } from '../../utils/getXAxisRange';

const XAxis: React.FC<AxisProps> = (props) => {
    const renderTicks: (props: XAxisTickProps) => JSX.Element = (props: XAxisTickProps) => {
        const points: SeriesDataPoint[] = props.data[0].points;
        const tickLabels: number[] = points.map((point: SeriesDataPoint) => point.x);
        const range: AxisRange = getXAxisRange(props.data, props.config);
        const interval = range.max - range.min;

        return (
            <g className={styles.XAxis__Ticks}>
                {tickLabels.map((label: number, index: number) => {
                    const x1 = ((100 - props.padding.right) * (label - range.min) / interval);
                    const textXPos = Math.min(Math.max(x1, 0), (100 - props.padding.right / 2));
                    return (
                        <g key={label}>
                            <line x1={`${x1}%`} y1={'0%'} x2={`${x1}%`} y2={`${props.padding.right}%`} stroke={'black'}/>
                            <text className={styles.XAxis__TickLabels} x={`${textXPos}%`} y={'25%'} stroke={'black'}>{label}</text>
                        </g>
                    )}
                )}
            </g>
        )
    }
    
    if(props.data && props.data.length > 0 && props.data[0].points.length > 0) {
        return (
            <div className={styles.XAxis}>
                <svg className={styles.XAxis__Svg}>
                    <line x1={'0%'} y1={'0%'} x2={'100%'} y2={'0%'} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                    {renderTicks({data: props.data, padding: props.padding, config: props.config})}
                </svg>
            </div>
        )
    }
    return <div>No data!</div>
};

export default XAxis;
