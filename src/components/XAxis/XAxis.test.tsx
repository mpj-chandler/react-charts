import React from 'react';
import TestRenderer from 'react-test-renderer';
import XAxis from './XAxis';
import { AxisProps } from '../BarChart/types';

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

    it('it renders consistently', () => {
        const component = TestRenderer.create(<XAxis {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    })
})