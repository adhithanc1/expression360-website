import { site, socials } from '../../data/site';
import { Reveal, TextLink, SocialIcons } from '../ui';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <div className="hero__lines">
          <h1 className="hero__title">{site.tagline}</h1>
          <p className="hero__tagline">{site.subline}</p>
        </div>
        <div className="hero__stage"><span className="hero__scrim" /></div>
      </div>

      <div className="hero__foot">
        <Reveal className="hero__copy">
          <p>
            At {site.name}, we see communication as more than a message. It is how ideas are
            understood, experiences are shaped and connections are built.
          </p>
          <TextLink light href="#contact">Get Started</TextLink>
        </Reveal>
        <Reveal>
          <SocialIcons items={socials} className="socials" />
        </Reveal>
      </div>
    </section>
  );
}
