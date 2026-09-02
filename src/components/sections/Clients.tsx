import { clients } from '../../data/content';
import { Reveal, Eyebrow, TextLink } from '../ui';

export function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <Reveal>
          <Eyebrow>Our Amazing Clients</Eyebrow>
          <h2>Trusted Across Government &amp; Industry</h2>
          <TextLink light href="#projects">View Our Projects</TextLink>
        </Reveal>

        <Reveal className="clients__grid">
          {clients.map((c) => (
            <span
              key={c.name}
              className={c.light ? 'is-light' : undefined}
              role="img"
              aria-label={c.name}
              style={{ backgroundImage: `url('${c.logo}')` }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
