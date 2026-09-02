export default function ImpactScore({
  score,
  label,
  description,
}) {
  const circumference = 2 * Math.PI * 48;
  const progress = (score / 100) * circumference;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Skilling Impact Score
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Overall program performance
          </p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          {label}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-6">
        {/* Circular score */}
        <div className="relative h-32 w-32 shrink-0">
          <svg
            className="h-full w-full -rotate-90"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              className="text-slate-100"
            />

            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              className="text-blue-600 transition-all duration-700"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-900">
              {score}
            </span>

            <span className="text-[10px] text-slate-400">
              / 100
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium leading-6 text-slate-700">
            {description}
          </p>

          <button className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700">
            View detailed score →
          </button>
        </div>
      </div>
    </div>
  );
}