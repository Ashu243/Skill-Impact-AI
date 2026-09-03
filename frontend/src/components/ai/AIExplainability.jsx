export default function AIExplainability({
  riskLevel,
  reasons,
  recommendation,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-lg">
          🤖
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            AI Analysis
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Explanation behind the candidate risk assessment.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          Risk assessment
        </p>

        <p className="text-lg font-semibold text-slate-900 mt-1">
          {riskLevel} Risk
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-800">
          Why this candidate was flagged
        </p>

        <div className="space-y-3 mt-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-slate-50 rounded-xl p-3"
            >
              <span className="text-red-500 mt-0.5">●</span>

              <p className="text-sm text-slate-600">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">
          Recommended intervention
        </p>

        <p className="text-sm text-blue-900 mt-2 leading-6">
          {recommendation}
        </p>
      </div>
    </div>
  );
}