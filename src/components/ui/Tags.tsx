type Props = { items: string[] };

/** Small pill labels used on project and blog cards. */
export function Tags({ items }: Props) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
