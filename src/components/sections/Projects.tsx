import { projects } from '../../data/content';
import { Reveal, Eyebrow, TextLink, Tags } from '../ui';

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal className="projects__head">
          <div>
            <Eyebrow>Our Projects</Eyebrow>
            <h2>Work That Speaks For Itself.</h2>
          </div>
          <TextLink href="#projects">View All Case Studies</TextLink>
        </Reveal>

        <Reveal className="projects__grid">
          {projects.map((p) => (
            <a className="project" href={p.href} key={p.number}>
              <span
                className="project__img"
                role="img"
                aria-label={p.title}
                style={{ backgroundImage: `url('${p.image}')` }}
              />
              <span className="project__num">{p.number}</span>
              <div className="project__body">
                <h3>{p.title}</h3>
                <Tags items={p.tags} />
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
