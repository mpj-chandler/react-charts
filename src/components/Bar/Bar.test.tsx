import React from 'react';
import TestRenderer from 'react-test-renderer';
import Bar, { BarProps } from './Bar';
import Placement from '../../enums/Placement';

jest.useFakeTimers();

describe('Bar', () => {
    describe('When all values on the yAxis are positive', () => {
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
                bottom: 10,
            },
            barAlignment: Placement.Aligned,
            numBars: 3,
        };

        it('it renders consistently with defaults', () => {
            const component = TestRenderer.create(<Bar {...props}/>);

            jest.runAllTimers();

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Aligned', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Aligned}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Bucket', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Bucket}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });

    describe('When all values on the yAxis are negative', () => {
        const props: BarProps = {
            point: { x: 10, y: -50 },
            xRange: { min: 0, max: 100 },
            yRange: { min: -100, max: -100 },
            width: 100,
            fill: 'anything',
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            barAlignment: Placement.Aligned,
            numBars: 3,
        };

        it('it renders consistently with defaults', () => {
            const component = TestRenderer.create(<Bar {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Aligned', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Aligned}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Bucket', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Bucket}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });


    describe('When the yAxis spans positive and negative values', () => {
        const props: BarProps = {
            point: { x: 10, y: -50 },
            xRange: { min: 0, max: 100 },
            yRange: { min: -100, max: 100 },
            width: 100,
            fill: 'anything',
            stroke: 'anything',
            padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
            },
            barAlignment: Placement.Aligned,
            numBars: 3,
        };

        it('it renders consistently with defaults', () => {
            const component = TestRenderer.create(<Bar {...props}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Aligned', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Aligned}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });

        it('it renders consistently with Placement set to Bucket', () => {
            const component = TestRenderer.create(<Bar {...props} barAlignment={Placement.Bucket}/>);

            expect(component.toJSON()).toMatchSnapshot();
        });
    });
})
