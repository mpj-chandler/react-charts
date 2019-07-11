import React from 'react';
import styles from './BarPlot.scss';
import { Padding, SeriesData, SeriesDataPoint, AxisRange, AxisConfig } from '../BarChart/types';
import Bar from '../Bar/Bar';
import { getYAxisRange } from '../../utils/getYAxisRange';
import { getXAxisRange } from '../../utils/getXAxisRange';

export interface BarPlotProps {
    padding: Padding;
    data: SeriesData[],
    xAxisConfig?: AxisConfig,
    yAxisConfig?: AxisConfig
}

const BarPlot: React.FC<BarPlotProps> = (props: BarPlotProps) => {
    const xRange = getXAxisRange(props.data, props.xAxisConfig);
    const yRange = getYAxisRange(props.data, props.yAxisConfig);

    console.log('XRange: ', xRange, 'YRange: ', yRange);

    return (
        <svg className={styles.BarPlot}>
            <g>
                {props.data[0].points.map((point: SeriesDataPoint) => {
                    return (
                        <Bar
                            key={`${props.data[0].seriesName}${point.x}`}
                            point={point}
                            xRange={xRange}
                            yRange={yRange}
                            width={10}
                            fill={'red'}
                            stroke={'black'}
                            padding={props.padding}
                        />
                    );
                })}
            </g>
        </svg>
    )
}

export default BarPlot;