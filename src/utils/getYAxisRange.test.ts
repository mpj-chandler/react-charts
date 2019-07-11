import { getYAxisRange } from './getYAxisRange';

describe('getYAxisRange', () => {
    const data = [
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
    ];
    
    describe('When not provided with a config object', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getYAxisRange(data);

            expect(range).toStrictEqual({ max: 30, min: 10 });
        });
    });

    describe('When provided with a config object', () => {
        it('it extracts the series maximum and minimum correctly', () => {
            const range = getYAxisRange(data, { zeroIntercept: false, margin: 400 });

            expect(range).toStrictEqual({ max: 150, min: 2 });
        });
    });
});