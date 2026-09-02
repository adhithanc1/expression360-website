import { FaArrowUp } from 'react-icons/fa';
import { useScrollFlag } from '../../hooks/useScrollFlag';

export function BackToTop() {
  const visible = useScrollFlag(600);
  return (
    <a className={`totop${visible ? ' is-on' : ''}`} href="#top" aria-label="Back to top">
      <FaArrowUp />
    </a>
  );
}
