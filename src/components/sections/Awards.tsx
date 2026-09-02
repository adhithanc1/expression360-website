import { useCallback, useEffect, useRef, useState } from 'react';
import { awards } from '../../data/content';
import { Reveal, Eyebrow } from '../ui';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const AUTOPLAY_MS = 3200;

export function Awards() {
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const { ref: viewRef, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.2 });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const syncProgress = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  const step = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.award');
    const by = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + by, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (reduced || paused || !inView) return;
    const id = window.setInterval(step, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduced, paused, inView, step]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    syncProgress();
    el.addEventListener('scroll', syncProgress, { passive: true });
    window.addEventListener('resize', syncProgress);
    return () => {
      el.removeEventListener('scroll', syncProgress);
      window.removeEventListener('resize', syncProgress);
    };
  }, [syncProgress]);

  return (
    <section className="awards" ref={viewRef}>
      <div className="container">
        <Reveal className="awards__head">
          <div className="awards__intro">
            <Eyebrow>Our Awards</Eyebrow>
            <h2>Recognition Earned. Trust Reinforced.</h2>
            <p className="awards__count">50+ Awards &amp; Recognitions</p>
          </div>
        </Reveal>

        <Reveal className="carousel">
          <ul
            ref={track}
            className="carousel__track"
            tabIndex={0}
            aria-label="Awards and recognitions"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {awards.map((a, i) => (
              <li className="award" key={`${a.year}-${i}`}>
                <span className="award__year">{a.year}</span>
                <h4>{a.title}</h4>
                <p>{a.detail}</p>
              </li>
            ))}
          </ul>
          <div className="carousel__rail">
            <span
              className="carousel__fill"
              style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
