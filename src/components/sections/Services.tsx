import { services, serviceTiles } from '../../data/content';
import { Reveal, SectionHead, TextLink } from '../ui';

export function Services() {
  /** The design alternates a dark copy card with a photo tile. */
  const cards = services.flatMap((s, i) => [
    { kind: 'text' as const, data: s },
    { kind: 'tile' as const, data: serviceTiles[i] },
  ]);

  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          heading={<>Integrated Communication.<br />Delivered End-to-End.</>}
        />

        <Reveal className="services__grid">
          {cards.map((card) =>
            card.kind === 'text' ? (
              <article className="svc svc--text" key={card.data.title}>
                <span className={`svc__icon svc__icon--${card.data.icon}`} />
                <h3>{card.data.title}</h3>
                <p>{card.data.blurb}</p>
                <TextLink href="#contact">Read More</TextLink>
              </article>
            ) : (
              <a className="svc svc--image" href="#projects" key={card.data.word}>
                <span
                  className="media__img"
                  style={{ backgroundImage: `url('${card.data.image}')` }}
                />
                <span className="svc__word">{card.data.word}</span>
              </a>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
