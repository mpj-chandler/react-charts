import React from 'react';
import styles from './BarChart.scss';
import XAxis from '../XAxis/XAxis';
import YAxis from '../YAxis/YAxis';
import { SeriesData, Padding, AxisConfig } from './types';
import BarPlot from '../BarPlot/BarPlot';

export interface BarChartProps {
    data: SeriesData[];
    title: string;
    padding: Padding;
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;
}

const BarChart: React.FC<BarChartProps> = (props: BarChartProps) => {
    return (
        <div className={styles.BarChart}>
            <div className={styles.BarChart__title}>{props.title}</div>
            <YAxis title={'YAxis'} data={props.data} config={props.yAxisConfig} padding={props.padding}/>
            <BarPlot data={props.data} padding={props.padding} xAxisConfig={props.xAxisConfig} yAxisConfig={props.yAxisConfig}/>
            <XAxis title={'XAxis'} data={props.data} config={props.xAxisConfig} padding={props.padding}/>
        </div>
    )
}

export default BarChart;
