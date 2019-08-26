import { SeriesDataPoint } from '../../../components/BarChart/types';
import Axis from '../../../enums/Axis';
import { dataOne, dataTwo } from './generateAxisLabels.testdata';
import generateAxisLabels from './generateAxisLabels';

describe('generateAxisLabels', () => {
    it('it generates appropriate XAxis tick labels for a given range of data', () => {
        expect(generateAxisLabels(dataOne, Axis.XAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataTwo, Axis.XAxis)).toMatchSnapshot();
    });

    it('it generates appropriate YAxis tick labels for a given range of data', () => {
        expect(generateAxisLabels(dataOne, Axis.YAxis)).toMatchSnapshot();

        expect(generateAxisLabels(dataTwo, Axis.YAxis)).toMatchSnapshot();
    });
});




