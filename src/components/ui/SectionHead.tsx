import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { Eyebrow } from './Eyebrow';

type Props = {
  eyebrow: string;
  heading: ReactNode;
  /** Widens the heading measure for longer titles. */
  wide?: boolean;
  children?: ReactNode;
};

/** Centred eyebrow + h2 intro used by most sections. */
export function SectionHead({ eyebrow, heading, wide = false, children }: Props) {
  return (
    <Reveal className={`head${wide ? ' head--wide' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{heading}</h2>
      {children}
    </Reveal>
  );
}
