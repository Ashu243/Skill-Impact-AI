// components/candidates/ImpactBreakdown.jsx

const factors = [
  {
    label: "Employment",
    score: 85,
    description: "Candidate is currently employed",
  },
  {
    label: "Job Relevance",
    score: 82,
    description: "Current role matches trained skills",
  },
  {
    label: "Retention",
    score: 74,
    description: "6-month retention is moderate",
  },
  {
    label: "Income Growth",
    score: 45,
    description: "Income growth is below target",
  },
];

export default function ImpactBreakdown() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Impact Score Breakdown
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Factors contributing to the candidate's overall impact score.
        </p>
      </div>

      <div className="space-y-5">
        {factors.map((factor) => (
          <div key={factor.label}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-slate-800">
                  {factor.label}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {factor.description}
                </p>
              </div>

              <span className="text-sm font-semibold text-slate-900">
                {factor.score}%
              </span>
            </div>

            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${factor.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}