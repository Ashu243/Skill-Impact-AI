export default function AIInsightCard({
  type,
  title,
  description,
  action,
}) {
  const isWarning = type === "warning";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${
            isWarning
              ? "bg-amber-50"
              : "bg-emerald-50"
          }`}
        >
          {isWarning ? "⚠️" : "✦"}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1.5 text-sm leading-6 text-slate-500">
            {description}
          </p>

          <button className="mt-3 text-xs font-semibold text-blue-600 transition group-hover:text-blue-700">
            {action} →
          </button>
        </div>
      </div>
    </div>
  );
}