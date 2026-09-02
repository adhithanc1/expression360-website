import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  /** Use on dark backgrounds. */
  light?: boolean;
};

/** Underlined uppercase link with the brand hover wipe. */
export function TextLink({ children, light = false, className = '', ...rest }: Props) {
  return (
    <a className={`link${light ? ' link--light' : ''}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </a>
  );
}
