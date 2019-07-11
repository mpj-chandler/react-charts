import React from 'react';
import styles from './App.scss';
import BarChart, {BarChartProps} from './components/BarChart/BarChart';

interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    const barChartProps: BarChartProps = {
        title: 'My first bar chart',
        data: [
            {
                seriesName: 'A',
                points: [
                    {
                        x: 0,
                        y: 10
                    },
                    {
                        x: 1,
                        y: 20
                    },
                    {
                        x: 2,
                        y: 30
                    }
                ]
            }
        ],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        xAxisConfig: {
            zeroIntercept: true,
            margin: 10
        },
        yAxisConfig: {
            zeroIntercept: true,
            margin: 10
        }
    }
    return (
        <div className={styles.App} {...props}>
            <span className={styles.App__Title}>React Charts</span>
            <div className={styles.App__ChartContainer}>
                <BarChart {...barChartProps}/>
            </div>
        </div>
    );
};

export default App;
