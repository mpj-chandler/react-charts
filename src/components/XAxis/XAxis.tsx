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
        const increment = 0.9 * (interval / props.numTicks);

        for (let i=0; i<=props.numTicks; i++) {
            tickLabels.push(`${props.range.min + (i * increment)}`)
        };

        return (
            <g className={styles.XAxis__Ticks}>
                {tickLabels.map((label: string, index: number) => <line x1={`${5 + (index * increment)}%`} y1={'50%'} x2={`${5 + (index * increment)}%`} y2={'60%'} stroke={'black'}/>)}
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
