export default function StatCard({
  title,
  value,
  change,
  description,
  icon,
  positive,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-lg">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {positive ? "↗" : "↘"} {change}
        </span>

        <span className="text-xs text-slate-400">
          {description}
        </span>
      </div>
    </div>
  );
}