import { site, footerNav, footerCols, socials } from '../../data/site';
import { SocialIcons } from '../ui';

export function Footer() {
  const { office, branch, contact } = footerCols;

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="logo">
                <img src={site.logo} alt={site.name} width={116} height={39} />
              </span>
              <p>{site.description}</p>
            </div>
            <nav className="footer__nav" aria-label="Footer">
              {footerNav.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </nav>
          </div>

          <hr />

          <div className="footer__cols">
            <div>
              <h4>{office.title}</h4>
              <p>
                {office.lines.map((line, i) => (
                  <span key={line}>{line}{i < office.lines.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
            <div>
              <h4>{contact.title}</h4>
              <ul>
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><a href={`tel:${contact.phoneTel}`}>{contact.phoneLabel}</a></li>
              </ul>
            </div>
            <div>
              <h4>{branch.title}</h4>
              <p>
                {branch.lines.map((line, i) => (
                  <span key={line}>{line}{i < branch.lines.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
            <div>
              <h4>Follow us</h4>
              <SocialIcons items={socials} className="footer__social" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          <p>{site.copyright}</p>
          <nav className="footer__legal" aria-label="Legal">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
