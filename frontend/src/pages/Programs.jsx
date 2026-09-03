const programs = [
  {
    name: "Web Development",
    centres: 12,
    candidates: 840,
    employment: 76,
    relevance: 82,
    retention: 71,
    impact: 84,
  },
  {
    name: "Data Analytics",
    centres: 9,
    candidates: 620,
    employment: 82,
    relevance: 86,
    retention: 79,
    impact: 91,
  },
  {
    name: "Cloud Computing",
    centres: 7,
    candidates: 410,
    employment: 74,
    relevance: 84,
    retention: 76,
    impact: 86,
  },
  {
    name: "Digital Marketing",
    centres: 15,
    candidates: 950,
    employment: 64,
    relevance: 69,
    retention: 57,
    impact: 68,
  },
];

export default function Programs() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Skilling Programs
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor program performance and employment outcomes
          across the skilling ecosystem.
        </p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Active Programs"
          value="43"
        />

        <MetricCard
          label="Candidates Trained"
          value="2,820"
        />

        <MetricCard
          label="Employment Rate"
          value="68.4%"
        />

        <MetricCard
          label="Average Impact Score"
          value="78"
        />
      </div>

      {/* Program Performance */}
      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Program Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Compare employment outcomes across major
            skilling programs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Program
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Candidates
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Employment
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Relevance
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Retention
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Impact
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {programs.map((program) => (
                <tr
                  key={program.name}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">
                        {program.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {program.centres} training centres
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {program.candidates}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-slate-700">
                    {program.employment}%
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {program.relevance}%
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {program.retention}%
                  </td>

                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-900">
                      {program.impact}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {program.impact >= 80 ? (
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        Performing Well
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        Needs Attention
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Insight */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✦
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">
              Policy Insight
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Data Analytics and Cloud Computing are showing
              stronger employment and retention outcomes.
              Digital Marketing has comparatively lower
              employment and retention, suggesting that its
              curriculum and industry alignment may need review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}