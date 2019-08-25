import { setupAnimation } from './setupAnimation';
import '../setupTests.js';
import onStart from './onStart';
import loop from './loop';

jest.useFakeTimers();
jest.mock('./onStart');
jest.mock('./loop');

const mockSetTime = jest.fn();

describe('setUp animation', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('it calls the correct functions', async () => {
        setupAnimation(mockSetTime, 1000, 0);

        jest.advanceTimersByTime(1000);

        jest.runAllTimers();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);
        expect(loop).toHaveBeenCalledTimes(1);
    });

    it('it calls the correct functions', async () => {
        setupAnimation(mockSetTime, 1000, 0)();

        jest.advanceTimersByTime(200);

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(clearTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);

        jest.runOnlyPendingTimers();

        expect(onStart).toHaveBeenCalledTimes(1);
    });
});
