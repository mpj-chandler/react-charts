import { useAnimationTimer } from './useAnimationTimer';
import { getEasingFunction } from './getEasingFunction';

export function useAnimation(
    easingName: string = 'linear',
    duration: number = 500,
    delay: number = 0
) {
    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);
    
    const easingFunction: ((n: number) => number) = getEasingFunction(easingName);

    return easingFunction!(n);
}
