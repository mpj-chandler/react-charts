import React from 'react'
import styles from './BarChart.scss';
import XAxis from '../XAxis/XAxis';

interface SeriesData {
    seriesName: string;
    points: Array<{x: number | Date | string, y: number}>
}

export interface BarChartProps {
    data: SeriesData[];
    title: string;
}

const BarChart: React.FC<BarChartProps> = (props) => {
    return (
        <div className={styles.BarChart}>
            <div className={styles.BarChart__title}>{props.title}</div>
            <div className={styles.BarChart__yAxis}>yAxis</div>
            <div className={styles.BarChart__blank}>()</div>
            <XAxis range={{ min: 0, max: 100 }}/>
        </div>
    )
}

export default BarChart;
