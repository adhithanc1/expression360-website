import type { ReactNode } from 'react';

type Props = {
  image: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Framed image that desaturates at rest and returns to colour on hover,
 * matching the design's treatment of all photography.
 */
export function Media({ image, alt = '', className = '', children }: Props) {
  return (
    <div className={`media${className ? ` ${className}` : ''}`}>
      <div
        className="media__img"
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        style={{ backgroundImage: `url('${image}')` }}
      />
      {children}
    </div>
  );
}
