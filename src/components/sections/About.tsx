import { about, facts } from '../../data/content';
import { Reveal, Eyebrow, TextLink, Media, PlayButton } from '../ui';

type Props = { onPlay: () => void };

export function About({ onPlay }: Props) {
  const [a, hl1, b, hl2] = about.headingParts;

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__top">
          <Reveal className="about__copy">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2>
              {a}<span className="hl">{hl1}</span>{b}<span className="hl">{hl2}</span>
            </h2>
            <p className="lead">{about.body}</p>
            <TextLink href="#services">Learn More</TextLink>
          </Reveal>

          <Reveal className="about__media">
            <Media image={about.image} alt="Our team at work">
              <PlayButton onClick={onPlay} />
            </Media>
          </Reveal>
        </div>

        <div className="about__facts">
          {facts.map((f, i) => (
            <Reveal as="article" className="fact" key={f.title} delay={i * 70}>
              <div className="fact__head">
                <span className="fact__num">{f.number}</span>
                <h3>{f.title}</h3>
              </div>
              <p>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
