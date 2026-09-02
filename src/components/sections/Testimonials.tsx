import { testimonials } from '../../data/content';
import { Reveal, SectionHead, TextLink } from '../ui';

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionHead eyebrow="Testimonials" heading="Reviews From Our Clients">
          <TextLink light href="#contact">More Reviews</TextLink>
        </SectionHead>

        <Reveal className="testi__grid">
          {testimonials.map((t, i) => (
            <article className="testi" key={`${t.author}-${i}`}>
              <span className="testi__mark" aria-hidden="true" />
              <h4>{t.heading}</h4>
              <p>{t.quote}</p>
              <div className="testi__by">
                <span
                  role="img"
                  aria-label={t.author}
                  style={{ backgroundImage: `url('${t.avatar}')` }}
                />
                <div>
                  <b>{t.author}</b>
                  <i>{t.org}</i>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
