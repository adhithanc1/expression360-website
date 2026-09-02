import { team } from '../../data/content';
import { Reveal, SectionHead, SocialIcons } from '../ui';
import { site } from '../../data/site';

export function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <SectionHead eyebrow="Our Team" heading={`Creative People Behind ${site.name}`} />

        <Reveal className="team__grid">
          {team.map((m) => (
            <article className="member" key={m.name}>
              <div className="member__photo">
                <span
                  className="member__a"
                  role="img"
                  aria-label={m.name}
                  style={{ backgroundImage: `url('${m.photo}')` }}
                />
                <span
                  className="member__b"
                  aria-hidden="true"
                  style={{ backgroundImage: `url('${m.photoHover}')` }}
                />
                <SocialIcons items={m.socials} className="member__social" />
              </div>
              <h4>{m.name}</h4>
              <span>{m.role}</span>
            </article>
          ))}
        </Reveal>

        <Reveal className="team__more">
          <a className="btn" href="#contact">View More</a>
        </Reveal>
      </div>
    </section>
  );
}
