import { getXAxisRange } from './getXAxisRange';
import Placement from '../../../enums/Placement';

describe('getXAxisRange', () => {
    const data = [
        {
            seriesName: 'A',
            points: [
                {
                    x: 0,
                    y: 10,
                },
                {
                    x: 1,
                    y: 20,
                },
                {
                    x: 2,
                    y: 30,
                },
            ],
        },
    ];

    describe('When not provided with a config object', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getXAxisRange(data);

            expect(range).toStrictEqual({ max: 2, min: 0 });
        });
    });

    describe('When provided with a config object', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getXAxisRange(
                data,
                {
                    zeroIntercept: false,
                    margin: 400,
                    tickPlacement: Placement.Aligned,
                    tickLength: 10,
                });

            expect(range).toStrictEqual({ max: 10, min: 0 });
        });
    });
});
