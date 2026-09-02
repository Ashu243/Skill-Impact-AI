// components/candidates/OutcomeMetric.jsx

export default function OutcomeMetric({
  title,
  value,
  description,
  icon,
  trend,
  positive = true,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="text-2xl font-bold text-slate-900 mt-2">
            {value}
          </h3>
        </div>

        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg">
          {icon}
        </div>
      </div>

      {trend && (
        <p
          className={`text-xs font-medium mt-3 ${
            positive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {trend}
        </p>
      )}

      {description && (
        <p className="text-xs text-slate-400 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}