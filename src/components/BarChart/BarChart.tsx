import React from 'react';
import styles from './BarChart.scss';
import XAxis from '../XAxis/XAxis';
import YAxis from '../YAxis/YAxis';
import { SeriesData, Padding } from './types';

export interface BarChartProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
    return (
        <div className={styles.BarChart}>
            <div className={styles.BarChart__title}>{props.title}</div>
            <YAxis title={'YAxis'} data={props.data} padding={props.padding}/>
            <div className={styles.BarChart__blank}>()</div>
            <XAxis title={'XAxis'} data={props.data} padding={props.padding}/>
            <div className={styles.BarChart__padRight}>()</div>
        </div>
    )
}

export default BarChart;
