import { useState } from 'react';
import { nav, site } from '../../data/site';
import { useScrollFlag } from '../../hooks/useScrollFlag';

type Props = { onOpenMenu: () => void; menuOpen: boolean };

export function Header({ onOpenMenu, menuOpen }: Props) {
  const stuck = useScrollFlag(10);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      <div className="header__inner">
        <div className="header__brand">
          <a className="logo" href="#top" aria-label={`${site.name} home`}>
            <img src={site.logo} alt={site.name} width={100} height={22} />
          </a>
        </div>

        <div className="header__bar">
          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {nav.map((item, i) => {
                const hasSub = Boolean(item.children?.length);
                return (
                  <li
                    key={item.label}
                    className={`nav__item${hasSub ? ' has-sub' : ''}`}
                    onMouseEnter={() => hasSub && setOpenSub(item.label)}
                    onMouseLeave={() => hasSub && setOpenSub(null)}
                  >
                    <a
                      className={`nav__link${i === 0 ? ' is-active' : ''}`}
                      href={item.href}
                      aria-haspopup={hasSub || undefined}
                      aria-expanded={hasSub ? openSub === item.label : undefined}
                    >
                      {item.label}
                      {hasSub && <span className="nav__caret" />}
                    </a>
                    {hasSub && (
                      <ul className="nav__sub">
                        {item.children!.map((c) => (
                          <li key={c.label}>
                            <a href={c.href}>{c.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="burger"
            onClick={onOpenMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
