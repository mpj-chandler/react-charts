import React from 'react';
import { AxisRange, XAxisTickProps } from './types';
import styles from './XAxis.scss';
import { SeriesData, SeriesDataPoint, Padding } from '../BarChart/types';

interface XAxisProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
}

const XAxis: React.FC<XAxisProps> = (props) => {
    const renderTicks: (props: XAxisTickProps) => JSX.Element = (props: XAxisTickProps) => {
        const tickLabels: number[] = props.points.map((point: SeriesDataPoint) => point.x);
        const range: AxisRange = { min: Math.min(...tickLabels), max: Math.max(...tickLabels) };
        const interval = range.max - range.min;
        console.log(interval);

        return (
            <g className={styles.XAxis__Ticks}>
                {tickLabels.map((label: number, index: number) => {
                    const x1 = (100 * (label - range.min) / interval);
                    return (
                        <g>
                            <line x1={`${x1}%`} y1={'0%'} x2={`${x1}%`} y2={'10%'} stroke={'black'}/>
                            <text className={styles.XAxis__TickLabels} x={`${x1 - 3}%`} y={'25%'} stroke={'black'}>{label}</text>
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
                    {renderTicks({points: props.data[0].points, padding: props.padding})}
                </svg>
            </div>
        )
    }
    return <div>No data!</div>
};

export default XAxis;
