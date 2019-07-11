import { applyAxisConfig } from './applyAxisConfig';

describe('ApplyAxisConfig', () => {
    const range = { min: 50, max: 100};
    
    describe('when the config requires a zero intercept', () => {    
        it('it transforms the config consistently', () => {
            const config = { zeroIntercept: true, margin: 0 };
            const newRange = applyAxisConfig(range, config);
    
            expect(newRange).toStrictEqual({ max: 100, min: 0 });
        })
    });

    describe('when the config requires a margin to be applied', () => {    
        it('it transforms the config consistently', () => {
            const config = { zeroIntercept: false, margin: 400 };
            const newRange = applyAxisConfig(range, config);
            expect(newRange).toStrictEqual({ max: 500, min: 10 });
        })
    });

    describe('when there is no config', () => {    
        it('it returns the original range', () => {
            const newRange = applyAxisConfig(range);
            expect(newRange).toStrictEqual({ max: 100, min: 50 });
        })
    });
})