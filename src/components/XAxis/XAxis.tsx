import React from 'react';
import { AxisRange } from './types';
import styles from './XAxis.scss';

interface XAxisProps {
    range: AxisRange;
}

const XAxis: React.FC<XAxisProps> = (props) => {
    return (
        <div className={styles.XAxis}>xAxis</div>
    )
};

export default XAxis;
