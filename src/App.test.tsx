import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

jest.mock('./components/BarChart/BarChart.tsx');

describe('App', () => {
    it('it renders consistently', () => {
        const component = TestRenderer.create(<App/>);

        expect(component.toJSON()).toMatchSnapshot();
    })
})
