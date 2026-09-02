import { offices, site } from '../../data/site';
import { Reveal, Eyebrow, TextLink } from '../ui';

export function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <Reveal className="cta__head">
          <Eyebrow>Get in touch</Eyebrow>
          <h2>Let&rsquo;s Start A Conversation.</h2>
          <p className="cta__note">Feel free to send a message</p>
          <TextLink light href={`mailto:${site.email}`}>Let&rsquo;s Talk!</TextLink>
        </Reveal>

        <Reveal className="offices">
          {offices.map((o) => (
            <article className="office" key={o.city}>
              <h4>{o.city} {o.note && <span>{o.note}</span>}</h4>
              <address>
                {o.address.map((line, i) => (
                  <span key={line}>{line}{i < o.address.length - 1 && <br />}</span>
                ))}
              </address>
              <p className="office__line">
                <b>Tel:</b>{' '}
                {o.phones.map((p, i) => (
                  <span key={p.tel + i}>
                    <a href={`tel:${p.tel}`}>{p.label}</a>
                    {i < o.phones.length - 1 && ', '}
                  </span>
                ))}
              </p>
              <p className="office__line">
                <b>Email:</b>{' '}
                {o.emails.map((e, i) => (
                  <span key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                    {i < o.emails.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
