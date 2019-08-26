import React, { forwardRef, MutableRefObject } from 'react';
import styles from './AxisTickLabel.scss';

export interface AxisTickLabelProps {
    label: number;
    xPos: number;
    yPos: number;
    ref: MutableRefObject<any>;
}

const AxisTickLabel: React.FC<AxisTickLabelProps> = (props: AxisTickLabelProps) => {
    return (
        <text
                key={`tickText-${props.label}`}
                className={styles.AxisTickLabel}
                x={`${props.xPos}%`}
                y={`${props.yPos}%`}
                stroke={'black'}
                textLength={'1vw'}
        >
            {props.label}
        </text>
    );
};

export default AxisTickLabel;
