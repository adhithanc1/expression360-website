import { useState } from 'react';
import { posts } from '../../data/content';
import { Reveal, SectionHead, Tags } from '../ui';

type Status = 'idle' | 'error' | 'done';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  return (
    <Reveal className="newsletter">
      <h3>Sign Up for Our Newsletter</h3>
      {/* Netlify Forms: the `netlify` attribute makes this work with no backend. */}
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        onSubmit={(e) => {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            e.preventDefault();
            setStatus('error');
            return;
          }
          setStatus('done');
        }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          aria-invalid={status === 'error'}
          style={status === 'error' ? { borderColor: 'var(--c-red)' } : undefined}
        />
        <button type="submit">{status === 'done' ? 'Subscribed' : 'Subscribe'}</button>
      </form>
    </Reveal>
  );
}

export function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <SectionHead eyebrow="Blog News" heading="Latest News &amp; Articles" />

        <Reveal className="blog__grid">
          {posts.map((p) => (
            <a className="post" href={p.href} key={p.title}>
              <span
                className="post__img"
                role="img"
                aria-label={p.title}
                style={{ backgroundImage: `url('${p.image}')` }}
              />
              <div className="post__body">
                <Tags items={p.tags} />
                <h3>{p.title}</h3>
                <span className="post__date">{p.date}</span>
              </div>
            </a>
          ))}
        </Reveal>

        <Newsletter />
      </div>
    </section>
  );
}
