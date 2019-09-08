import React from 'react';
import styles from './BarPlot.scss';
import Bar from '../Bar/Bar';
import { getYAxisRange } from '../../utils/axisUtils/getYAxisRange/getYAxisRange';
import { getXAxisRange } from '../../utils/axisUtils/getXAxisRange/getXAxisRange';
import Placement from '../../enums/Placement';
import { extractDataType } from '../../utils/axisUtils/generateAxisLabels/extractDataType';
import DataType from '../../enums/DataType';
import Axis from '../../enums/Axis';
import { Padding } from '../../__types__/stylingTypes';
import { SeriesData, NonNullNumericDataPoint, NumericDataPoint, NamedDataPoint, DateIndexedDataPoint } from '../../__types__/seriesTypes';
import { AxisConfig } from '../../__types__/axisTypes';

export interface BarPlotProps {
    padding: Padding;
    data: SeriesData[];
    xAxisConfig?: AxisConfig;
    yAxisConfig?: AxisConfig;
}

const BarPlot: React.FC<BarPlotProps> = (props: BarPlotProps) => {
    const xRange = getXAxisRange(props.data, props.xAxisConfig);
    const yRange = getYAxisRange(props.data, props.yAxisConfig);
    const placement = props.xAxisConfig ? props.xAxisConfig.tickPlacement : Placement.Aligned;
    const dataType: DataType = extractDataType(props.data, Axis.XAxis);

    return (
        <svg className={styles.BarPlot}>
            <g>
                {props.data[0].points.map(
                    (
                        point: NonNullNumericDataPoint | NumericDataPoint | NamedDataPoint | DateIndexedDataPoint,
                        index: number) => {
                    if (point.x !== null && point.y !== null) {
                        return (
                            <Bar
                                key={`${props.data[0].seriesName}${point.x}`}
                                point={point}
                                index={index}
                                type={dataType}
                                xRange={xRange}
                                yRange={yRange}
                                width={10}
                                fill={'red'}
                                stroke={'black'}
                                padding={props.padding}
                                numBars={props.data[0].points.length}
                                barAlignment={placement}
                            />
                        );
                    }

                    return null;
                })}
            </g>
        </svg>
    );
}

export default BarPlot;
