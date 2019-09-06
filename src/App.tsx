import React from 'react';
import styles from './App.scss';
import BarChart, { BarChartProps } from './components/BarChart/BarChart';
import Placement from './enums/Placement';
import DataType from './enums/DataType';

interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    const firstBarChartProps: BarChartProps = {
        title: 'My first bar chart',
        data: [
            {
                seriesName: 'A',
                type: {
                    x: DataType.NonNullNumeric,
                    y: DataType.NonNullNumeric,
                },
                points: [
                    {
                        x: 0,
                        y: 10,
                    },
                    {
                        x: 1,
                        y: 20,
                    },
                    {
                        x: 2,
                        y: 30,
                    },
                ],
            },
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Bucket,
            tickLength: 2,
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Aligned,
            tickLength: 2,
        },
    };

    const secondBarChartProps: BarChartProps = {
        title: 'My second bar chart',
        data: [
            {
                seriesName: 'A',
                type: {
                    x: DataType.NonNullNumeric,
                    y: DataType.NonNullNumeric,
                },
                points: [
                    {
                        x: 0,
                        y: -10,
                    },
                    {
                        x: 1,
                        y: 20,
                    },
                    {
                        x: 2,
                        y: 30,
                    },
                ],
            },
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Bucket,
            tickLength: 2,
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Aligned,
            tickLength: 2,
        },
    };

    const thirdBarChartProps: BarChartProps = {
        title: 'My third bar chart',
        data: [
            {
                seriesName: 'A',
                type: {
                    x: DataType.NonNullNumeric,
                    y: DataType.NonNullNumeric,
                },
                points: [
                    {
                        x: 0,
                        y: -10,
                    },
                    {
                        x: 1,
                        y: -20,
                    },
                    {
                        x: 2,
                        y: -30,
                    },
                ],
            },
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Bucket,
            tickLength: 2,
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Aligned,
            tickLength: 2,
        },
    };

    const fourthBarChartProps: BarChartProps = {
        title: 'My fourth bar chart',
        data: [
            {
                seriesName: 'A',
                type: {
                    x: DataType.Named,
                    y: DataType.NonNullNumeric,
                },
                points: [
                    {
                        x: 0,
                        y: -10,
                    },
                    {
                        x: 1,
                        y: -20,
                    },
                    {
                        x: 2,
                        y: -30,
                    },
                ],
            },
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Bucket,
            tickLength: 2,
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10,
            tickPlacement: Placement.Aligned,
            tickLength: 2,
        },
    };

    return (
        <div className={styles.App} {...props}>
            <span className={styles.App__Title}>React Charts</span>
            <div className={styles.App__ChartContainer}>
                <BarChart {...firstBarChartProps}/>
            </div>
            <div className={styles.App__SecondChartContainer}>
                <BarChart {...secondBarChartProps}/>
            </div>
            <div className={styles.App__ThirdChartContainer}>
                <BarChart {...thirdBarChartProps}/>
            </div>
            <div className={styles.App__FourthChartContainer}>
                <BarChart {...fourthBarChartProps}/>
            </div>
        </div>
    );
};

export default App;
