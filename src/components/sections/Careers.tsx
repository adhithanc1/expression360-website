import { careers, values } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { Reveal, Eyebrow, Media, PlayButton } from '../ui';
import type { Value } from '../../data/types';

function ValueBar({ value, active }: { value: Value; active: boolean }) {
  return (
    <div className={`bar${active ? ' is-on' : ''}`}>
      <div className="bar__top"><b>{value.title}</b></div>
      <p className="bar__note">{value.note}</p>
      <div className="bar__meter">
        <div className="bar__rail">
          <div className="bar__fill" style={{ width: active ? `${value.weight}%` : 0 }} />
        </div>
        <span className="bar__pct">{value.weight}%</span>
      </div>
    </div>
  );
}

type Props = { onPlay: () => void };

export function Careers({ onPlay }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="skills careers" id="careers">
      <div className="container skills__inner">
        <Reveal className="skills__media">
          <Media image={careers.image} alt="Life at Expression 360">
            <PlayButton dark onClick={onPlay} label="Play careers video" />
          </Media>
        </Reveal>

        <div ref={ref} className={`skills__copy reveal${inView ? ' is-in' : ''}`}>
          <Eyebrow>{careers.eyebrow}</Eyebrow>
          <h2>{careers.heading}</h2>
          <p className="careers__lead">{careers.lead}</p>

          {values.map((v) => (
            <ValueBar key={v.title} value={v} active={inView} />
          ))}

          <a className="btn careers__apply" href={careers.cta.href}>{careers.cta.label}</a>
        </div>
      </div>
    </section>
  );
}
