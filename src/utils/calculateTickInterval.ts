import { AxisRange } from '../components/YAxis/types';

function calculateTickInterval(range: AxisRange): number {
    if (range.max <= range.min) {
        throw new Error('Error! Range maximum has to be greater than range minimum.');
    }
    const interval = range.max - range.min;

    return Math.pow(10, Math.round(Math.log10(interval)) - 1);
}

export default calculateTickInterval;

