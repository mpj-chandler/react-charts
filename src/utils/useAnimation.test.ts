import { getEasingFunction } from './getEasingFunction';
import { useAnimation } from './useAnimation';
import { useAnimationTimer } from './useAnimationTimer';

jest.mock('./useAnimationTimer');
jest.mock('./getEasingFunction');

describe('useAnimation', () => {
    describe('when called', () => {

        it('it executes its methods correctly', () => {
            useAnimation('linear', 500, 0);

            expect(useAnimationTimer).toHaveBeenCalledWith(500, 0);
            expect(getEasingFunction).toHaveBeenCalledWith('linear');
        });
    });
});
