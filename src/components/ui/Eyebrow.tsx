type Props = { children: React.ReactNode; light?: boolean };

/** Small tracked-out label that sits above a section heading. */
export function Eyebrow({ children, light = false }: Props) {
  return <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{children}</p>;
}
