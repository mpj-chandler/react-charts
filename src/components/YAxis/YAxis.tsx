import React from 'react';
import { AxisRange, YAxisTickProps } from './types';
import styles from './YAxis.scss';
import { SeriesData, SeriesDataPoint, Padding } from '../BarChart/types';

interface YAxisProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
}

const XAxis: React.FC<XAxisProps> = (props) => {
    const renderTicks: (props: YAxisTickProps) => JSX.Element = (props: XAxisTickProps) => {
        const tickLabels: number[] = props.points.map((point: SeriesDataPoint) => point.y)
        const range: AxisRange = { min: Math.min(...tickLabels), max: Math.max(...tickLabels) };
        const interval = range.max - range.min;

        return (
            <g className={styles.YAxis__Ticks}>
                {tickLabels.map((label: number) => {
                    const y1 = 100 * (1 - (label - range.min) / interval);
                    return (
                        <g>
                            <line x1={'90%'} y1={`${y1}%`} x2={'100%'} y2={`${y1}%`} stroke={'black'}/>
                            <text className={styles.YAxis__TickLabels} x={'60%'} y={`${y1 + 5}%`} stroke={'black'}>{label}</text>
                        </g>
                    )}
                )}
            </g>
        )
    }
    
    if(props.data && props.data.length > 0 && props.data[0].points.length > 0) {
        return (
            <div className={styles.YAxis}>
                <svg className={styles.YAxis__Svg}>
                    <line x1={'100%'} y1={'0%'} x2={'100%'} y2={'100%'} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                    {renderTicks({points: props.data[0].points, padding: props.padding})}
                </svg>
            </div>
        )
    }
    return <div>No data!</div>
};

export default XAxis;
