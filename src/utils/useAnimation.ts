import { getEasingFunction } from './getEasingFunction';
import { useAnimationTimer } from './useAnimationTimer';

export function useAnimation(
    easingName: string,
    duration: number,
    delay: number,
) {
    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);

    const easingFunction: ((n: number) => number) = getEasingFunction(easingName);

    return easingFunction!(n);
}
