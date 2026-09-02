import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Animates 0 -> `target` once `active` flips true.
 * With reduced motion the final value is derived rather than animated, so
 * no state is written and the number simply appears.
 */
export function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [animated, setAnimated] = useState(0);
  const reduced = useReducedMotion();
  const frame = useRef(0);

  useEffect(() => {
    if (!active || reduced) return;

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setAnimated(Math.round(target * easeOutCubic(p)));
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [target, active, duration, reduced]);

  if (reduced) return active ? target : 0;
  return animated;
}
