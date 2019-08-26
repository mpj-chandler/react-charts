import React from 'react';
import TestRenderer from 'react-test-renderer';
import YAxis from './YAxis';
import { AxisProps, AxisConfig } from '../BarChart/types';
import Placement from '../../enums/Placement';


jest.mock('../AxisTickLabel/AxisTickLabel');

describe('YAxis', () => {
    const props: AxisProps = {
        title: 'anything',
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
            right: 10,
        }
    };

    const config: AxisConfig = {
        zeroIntercept: true,
        margin: 20,
        tickPlacement: Placement.Aligned,
        tickLength: 10,
    }

    it('it renders consistently', () => {
        const component = TestRenderer.create(<YAxis {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with an explicit config', () => {
        const component = TestRenderer.create(<YAxis {...props} config={{ }}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });
})