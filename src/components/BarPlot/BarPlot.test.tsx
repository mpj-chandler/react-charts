import React from 'react';
import TestRenderer from 'react-test-renderer';
import BarPlot, { BarPlotProps } from './BarPlot';

jest.mock('../Bar/Bar.tsx');

describe('BarPlot', () => {

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

    it('it renders consistently', () => {
        const component = TestRenderer.create(<BarPlot {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    })
})