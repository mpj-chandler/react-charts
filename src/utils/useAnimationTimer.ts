import { useState, useEffect } from 'react';


export function useAnimationTimer(duration = 1000, delay = 0) {
    const [elapsed, setTime] = useState(0);

    useEffect(() => {
        let animationFrame: number;
        let timerStop: any;
        let start: number;

        function onFrame() {
            setTime(Date.now() - start);
            loop();
        }

        function loop() {
            animationFrame = requestAnimationFrame(onFrame);
        }

        function onStart() {
            timerStop = setTimeout(() => {
                cancelAnimationFrame(animationFrame);
                setTime(Date.now() - start);
            }, duration);

            start = Date.now();
            loop();
        }

        const timerDelay = setTimeout(onStart, delay);

        return () => {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(animationFrame);
        };
    },
    [duration, delay]
    );

    return  elapsed;
}