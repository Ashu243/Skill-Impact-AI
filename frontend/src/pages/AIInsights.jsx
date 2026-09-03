const insights = [
  {
    title: "High-risk candidates need intervention",
    description:
      "Several candidates are currently seeking jobs or have low job relevance scores.",
    impact: "High Impact",
    action:
      "Review high-risk candidates and provide targeted placement support.",
    actionClass: "bg-red-50 text-red-700",
  },
  {
    title: "Digital Marketing is underperforming",
    description:
      "The program has lower employment, relevance and retention outcomes compared with other courses.",
    impact: "High Impact",
    action:
      "Review the curriculum and strengthen industry alignment.",
    actionClass: "bg-red-50 text-red-700",
  },
  {
    title: "Post-placement retention needs attention",
    description:
      "Overall employment is 68.4%, while 6-month retention is 61.7%.",
    impact: "Medium Impact",
    action:
      "Introduce structured follow-ups during the first six months of employment.",
    actionClass: "bg-amber-50 text-amber-700",
  },
  {
    title: "Data Analytics is showing strong outcomes",
    description:
      "The course has strong employment, relevance and retention performance.",
    impact: "Positive Signal",
    action:
      "Consider using the program as a model for improving other courses.",
    actionClass: "bg-green-50 text-green-700",
  },
];

export default function AIInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          AI Insights
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          AI-generated insights to help improve training and employment
          outcomes.
        </p>
      </div>

      {/* AI Overview */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✦
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              AI Overview
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Employment outcomes are positive overall, but some
              candidates and programs require targeted intervention.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              AI analysis identifies candidate risk, course performance
              and retention patterns to help training centres decide
              where action is needed.
            </p>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Key Insights
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Important patterns identified from employment outcome data.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {insights.map((insight) => (
            <InsightCard
              key={insight.title}
              {...insight}
            />
          ))}
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Recommended Focus
          </p>

          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            Focus on candidate placement and post-placement support.
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Improving job matching and supporting candidates after
            placement can help increase both employment and retention
            outcomes.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            Candidate Support
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            Job Matching
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            Retention
          </span>
        </div>
      </div>
    </div>
  );
}

function InsightCard({
  title,
  description,
  impact,
  action,
  actionClass,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${actionClass}`}
        >
          {impact}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Recommended Action
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-700">
          {action}
        </p>
      </div>
    </div>
  );
}