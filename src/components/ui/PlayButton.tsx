type Props = {
  onClick: () => void;
  /** Dark variant for use over lighter imagery. */
  dark?: boolean;
  label?: string;
};

/** Circular play trigger with the pulsing ring. */
export function PlayButton({ onClick, dark = false, label = 'Play showreel' }: Props) {
  return (
    <button
      type="button"
      className={`play${dark ? ' play--dark' : ''}`}
      onClick={onClick}
      aria-label={label}
    />
  );
}
