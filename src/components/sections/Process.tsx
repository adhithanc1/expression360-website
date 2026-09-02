import { process } from '../../data/content';
import { Reveal, SectionHead, TextLink, Media } from '../ui';

export function Process() {
  return (
    <section className="work" id="process">
      <div className="container">
        <SectionHead eyebrow="How we work" heading="Integrated by Design. Delivered with Impact." />

        {process.map((step, i) => (
          <Reveal className={`work__row${i % 2 === 1 ? ' work__row--flip' : ''}`} key={step.number}>
            <div className="work__panel">
              <div className="fact__head">
                <span className="fact__num">{step.number}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.body}</p>
              <TextLink href="#contact">Learn More</TextLink>
            </div>
            <Media className="work__media" image={step.image} alt={step.title} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
