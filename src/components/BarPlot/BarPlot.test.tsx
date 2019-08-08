import React from 'react';
import TestRenderer from 'react-test-renderer';
import BarPlot, { BarPlotProps } from './BarPlot';
import { AxisConfig } from '../BarChart/types';
import Placement from '../../enums/Placement';

jest.mock('../Bar/Bar.tsx');

describe('BarPlot', () => {
    const inlineConfig: AxisConfig = {
        zeroIntercept: false,
        margin: 0,
        tickPlacement: Placement.Aligned
    };

    const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

    const props: BarPlotProps = {
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
        padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        }
    }

    it('it renders consistently with defaults', () => {
        const component = TestRenderer.create(<BarPlot {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with tick alignment explicitly set to Aligned for both axes', () => {
        const component = TestRenderer.create(<BarPlot {...props} xAxisConfig={inlineConfig} yAxisConfig={inlineConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with tick alignment explicitly set to Aligned for XAxis and Bucket for YAxis', () => {
        const component = TestRenderer.create(<BarPlot {...props} xAxisConfig={inlineConfig} yAxisConfig={bucketConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with tick alignment explicitly set to Bucket for XAxis and Aligned for YAxis', () => {
        const component = TestRenderer.create(<BarPlot {...props} xAxisConfig={bucketConfig} yAxisConfig={inlineConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with tick alignment explicitly set to Bucket for both axes', () => {
        const component = TestRenderer.create(<BarPlot {...props} xAxisConfig={bucketConfig} yAxisConfig={bucketConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });
})
