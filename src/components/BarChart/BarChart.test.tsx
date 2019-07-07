import React from 'react';
import TestRenderer from 'react-test-renderer';
import BarChart, { BarChartProps } from './BarChart';

describe('Bar Chart', () => {
    const props: BarChartProps = {
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
        ]
    }
    it('it renders consistently', () => {
        const component = TestRenderer.create(<BarChart {...props}/>)

        expect(component.toJSON()).toMatchSnapshot();
    })
})
