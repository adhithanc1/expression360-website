import { clients } from '../../data/content';
import { Reveal, Eyebrow, TextLink } from '../ui';

/** One pass of the logo strip. Rendered twice so the loop is seamless:
 *  the track translates by exactly half its width, at which point the
 *  copy sits where the original started and the animation restarts
 *  invisibly. The duplicate is decorative — screen readers get one set. */
function LogoRun({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="clients__run" aria-hidden={ariaHidden || undefined}>
      {clients.map((c) => (
        <li key={c.name}>
          <span
            className={c.light ? 'is-light' : undefined}
            role={ariaHidden ? undefined : 'img'}
            aria-label={ariaHidden ? undefined : c.name}
            style={{ backgroundImage: `url('${c.logo}')` }}
          />
        </li>
      ))}
    </ul>
  );
}

export function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <Reveal>
          <Eyebrow>Our Amazing Clients</Eyebrow>
          <h2>Trusted Across Government &amp; Industry</h2>
          <TextLink light href="#projects">View Our Projects</TextLink>
        </Reveal>
      </div>

      <Reveal className="clients__marquee">
        <div className="clients__track">
          <LogoRun />
          <LogoRun ariaHidden />
        </div>
      </Reveal>
    </section>
  );
}
