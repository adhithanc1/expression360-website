import { stats } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import type { Stat } from '../../data/types';

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="stat">
      <b>{value}{stat.suffix ?? ''}</b>
      <span>{stat.label}</span>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="stats">
      <div className="container">
        <div ref={ref} className={`stats__grid reveal${inView ? ' is-in' : ''}`}>
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
