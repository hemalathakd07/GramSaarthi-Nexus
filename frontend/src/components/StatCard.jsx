export default function StatCard({ label, value, change, icon, trend = 'up' }) {
  const trendColor = trend === 'up' ? 'text-emerald-400' : 'text-rose-400';

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </span>
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            {icon}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {change && (
        <p className={`mt-1 text-xs font-medium ${trendColor}`}>{change}</p>
      )}
    </div>
  );
}
