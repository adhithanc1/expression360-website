import { useEffect, useRef, useState } from 'react';

type Options = { threshold?: number; rootMargin?: string; once?: boolean };

const SUPPORTED = typeof IntersectionObserver !== 'undefined';

/**
 * Fires once (by default) when the element scrolls into view.
 * Where IntersectionObserver is unavailable the initial state is `true`,
 * so content is never left permanently hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true }: Options = {},
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!SUPPORTED);

  useEffect(() => {
    const el = ref.current;
    if (!el || !SUPPORTED) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView } as const;
}
