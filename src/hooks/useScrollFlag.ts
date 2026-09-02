import { useEffect, useState } from 'react';

/** True once the page has scrolled past `offset` pixels. */
export function useScrollFlag(offset: number): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return past;
}
