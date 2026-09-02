import type { ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type Props = {
  children: ReactNode;
  /** Rendered element. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger in ms, applied as a transition delay. */
  delay?: number;
};

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
