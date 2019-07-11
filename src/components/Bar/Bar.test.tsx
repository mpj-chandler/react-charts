import React from 'react';
import TestRenderer from 'react-test-renderer';
import Bar, { BarProps } from './Bar';

describe('Bar', () => {
    const props: BarProps = {
        point: { x: 10, y: 100 },
        xRange: { min: 0, max: 100 },
        yRange: { min: 0, max: 200 },
        width: 100,
        fill: 'anything',
        stroke: 'anything',
        padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        }
    };

    it('it renders consistently', () => {
        const component = TestRenderer.create(<Bar {...props}/>);

        expect(component.toJSON()).toMatchSnapshot();
    })
})