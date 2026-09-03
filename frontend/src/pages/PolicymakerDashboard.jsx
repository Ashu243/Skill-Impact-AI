const stats = [
  {
    label: "Candidates Trained",
    value: "2,820",
    description: "Across monitored programs",
  },
  {
    label: "Employment Rate",
    value: "68.4%",
    description: "Overall placement outcome",
  },
  {
    label: "6M Retention",
    value: "61.7%",
    description: "Candidates retained",
  },
  {
    label: "Impact Score",
    value: "78",
    description: "Overall skilling impact",
  },
];

export default function PolicymakerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Policy Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor employment outcomes and skilling impact
          across programs.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm text-slate-400">
              {stat.label}
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              {stat.value}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Priority Areas */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Priority Areas
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Areas that may require policy attention.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <PriorityItem
            title="Digital Marketing"
            description="Lower employment and retention outcomes"
            status="High Priority"
            statusClass="bg-red-50 text-red-700"
          />

          <PriorityItem
            title="Post-placement Retention"
            description="Retention remains below overall employment"
            status="Medium Priority"
            statusClass="bg-amber-50 text-amber-700"
          />

          <PriorityItem
            title="Data Analytics"
            description="Strong employment and retention outcomes"
            status="Positive Signal"
            statusClass="bg-green-50 text-green-700"
          />
        </div>
      </div>

      {/* AI Policy Summary */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✦
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              AI Policy Summary
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Focus resources on programs with stronger
              employment outcomes while improving weaker programs.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Current outcome data suggests that successful
              programs can provide models for expansion, while
              underperforming programs should receive targeted
              curriculum and industry-alignment interventions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriorityItem({
  title,
  description,
  status,
  statusClass,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-medium text-slate-900">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>

      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
      >
        {status}
      </span>
    </div>
  );
}