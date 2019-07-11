import { useAnimationTimer } from './useAnimationTimer';

export function useAnimation(
    easingName: string = 'linear',
    duration: number = 500,
    delay: number = 0
) {
    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);
    
    const easingFunction: ((n: number) => number) | undefined = easing.get(easingName);

    if (!easingFunction) {
        throw new Error('Error - that easing type is not defined!')
    }

    return easingFunction!(n);
}

const easing: Map<string, (n: number) => number> = new Map([
    ['linear', (n: number) => n],
    ['elastic', (n: number) => n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15)],
    ['inExpo', (n: number) => Math.pow(2, 10 * (n - 1))]
]);