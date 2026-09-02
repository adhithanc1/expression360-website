import { useEffect } from 'react';
import { drawerNav } from '../../data/site';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

type Props = { open: boolean; onClose: () => void };

export function MobileDrawer({ open, onClose }: Props) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`scrim${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`drawer${open ? ' is-open' : ''}`}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <button type="button" className="drawer__close" onClick={onClose} aria-label="Close menu">
          &times;
        </button>
        {drawerNav.map((item) => (
          <a key={item.label} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </aside>
    </>
  );
}
