import { useEffect, useRef } from 'react';

export const Grain = () => {
  const grainRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const grain = grainRef.current;
    if (!grain) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      // Don't animate for users who prefer reduced motion
      return;
    }

    const keyframesX = [
      '0%',
      '-5%',
      '-15%',
      '7%',
      '-5%',
      '-15%',
      '15%',
      '0%',
      '3%',
      '-10%',
    ];
    const keyframesY = [
      '0%',
      '-10%',
      '5%',
      '-25%',
      '25%',
      '10%',
      '0%',
      '15%',
      '35%',
      '10%',
    ];

    let i = 0;
    let lastTime = 0;
    const frameDelay = 50; // ms between frames

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameDelay) {
        grain.style.transform = `translateX(${
          keyframesX[i % keyframesX.length]
        }) translateY(${keyframesY[i % keyframesY.length]})`;

        i++;
        lastTime = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden print:hidden"
      aria-hidden="true"
    >
      <div
        ref={grainRef}
        className="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/images/framernoise.png')] bg-[length:256px] bg-left-top opacity-[3%]"
      />
    </div>
  );
};
