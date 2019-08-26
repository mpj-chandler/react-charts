import React from 'react';
import styles from './AxisTickLabel.scss';

interface AxisTickLabelProps {
    label: number;
    xPos: number;
    yPos: number;
}

const AxisTickLabel: React.FC<AxisTickLabelProps> = (props) => {
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
