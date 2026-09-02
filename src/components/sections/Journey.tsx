import {
  FaRocket, FaBuilding, FaAward, FaBullhorn, FaLandmark, FaCertificate,
} from 'react-icons/fa';
import { journey, creed } from '../../data/content';
import { Reveal, SectionHead } from '../ui';
import type { Milestone } from '../../data/types';

const ICONS: Record<Milestone['icon'], React.ComponentType> = {
  rocket: FaRocket,
  building: FaBuilding,
  award: FaAward,
  bullhorn: FaBullhorn,
  columns: FaLandmark,
  certificate: FaCertificate,
};

export function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <SectionHead
          eyebrow="Our Journey"
          heading="Over 15 Years of Growth. Built on Trust. Driven by Purpose."
          wide
        />

        <Reveal className="timeline">
          <ol className="timeline__list">
            {journey.map((m) => {
              const Icon = ICONS[m.icon];
              return (
                <li className="milestone" key={m.year}>
                  <span className="milestone__head">
                    <span className="milestone__icon"><Icon /></span>
                    <span className="milestone__year">{m.year}</span>
                  </span>
                  <span className="milestone__track"><span className="milestone__dot" /></span>
                  <p className="milestone__kicker">{m.kicker}</p>
                  <h4>{m.title}</h4>
                  <p>{m.body}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal as="ul" className="creed">
          {creed.map((c) => <li key={c}>{c}</li>)}
        </Reveal>
      </div>
    </section>
  );
}
