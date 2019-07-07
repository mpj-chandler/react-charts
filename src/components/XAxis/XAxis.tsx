import React from 'react';
import { AxisRange } from './types';
import styles from './XAxis.scss';

interface XAxisProps {
    range: AxisRange;
    numTicks: number;
}

const XAxis: React.FC<XAxisProps> = (props) => {
    const renderTicks: (props: XAxisProps) => JSX.Element = (props) => {
        const tickLabels: string[] = [];
        const interval = props.range.max - props.range.min;
        const increment = (interval / props.numTicks);

        for (let i=0; i<=props.numTicks; i++) {
            tickLabels.push(`${props.range.min + (i * increment)}`)
        };

        return (
            <g className={styles.XAxis__Ticks}>
                {tickLabels.map((label: string, index: number) => {
                    return (
                        <g>
                            <line x1={`${5 + (0.9 * index * increment)}%`} y1={'50%'} x2={`${5 + (0.9 * index * increment)}%`} y2={'60%'} stroke={'black'}/>
                            <text className={styles.XAxis__TickLabels} x={`${2.5 + (0.9 * index * increment)}%`} y={'80%'} stroke={'black'}>{label}</text>
                        </g>
                    )}
                )}
            </g>
        )
    }

    return (
        <div className={styles.XAxis}>
            <svg className={styles.XAxis__Svg}>
                <line x1={'5%'} y1={'50%'} x2={'95%'} y2={'50%'} stroke={'black'} fill={'transparent'} strokeWidth={1}/>
                {renderTicks(props)}
            </svg>
        </div>
    )
};

export default XAxis;
