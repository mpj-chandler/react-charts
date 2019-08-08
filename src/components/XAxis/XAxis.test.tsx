import React from 'react';
import TestRenderer from 'react-test-renderer';
import XAxis from './XAxis';
import { AxisConfig, AxisProps } from '../BarChart/types';
import Placement from '../../enums/Placement';

describe('XAxis', () => {
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
            right: 10
        }
    };

    const inlineConfig: AxisConfig = {
        zeroIntercept: false,
        margin: 0,
        tickPlacement: Placement.Aligned
    };

    const bucketConfig: AxisConfig = { ...inlineConfig, tickPlacement: Placement.Bucket };

    it('it renders consistently with default tick placement', () => {
        const component = TestRenderer.create(<XAxis {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with explicit inline tick placement', () => {

        const component = TestRenderer.create(<XAxis {...props} config={inlineConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('it renders consistently with explicit bucket tick placement', () => {

        const component = TestRenderer.create(<XAxis {...props} config={bucketConfig}/>);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
