const insights = [
  {
    title: "Digital Marketing outcomes are below average",
    category: "Program Performance",
    priority: "High",
    description:
      "Digital Marketing has a lower employment rate, job relevance, and 6-month retention compared with other major programs.",
    evidence: [
      "Employment rate: 64%",
      "Job relevance: 69%",
      "6-month retention: 57%",
    ],
    action:
      "Review the curriculum and strengthen alignment with current industry requirements.",
  },
  {
    title: "Data Analytics is showing strong outcomes",
    category: "Positive Trend",
    priority: "Low",
    description:
      "Data Analytics is performing strongly across employment, job relevance, and retention metrics.",
    evidence: [
      "Employment rate: 82%",
      "Job relevance: 86%",
      "6-month retention: 79%",
    ],
    action:
      "Consider expanding successful training models to additional centres.",
  },
  {
    title: "Post-placement retention needs attention",
    category: "Employment",
    priority: "Medium",
    description:
      "A significant number of candidates are getting placed but are not remaining employed for at least six months.",
    evidence: [
      "Overall employment: 68.4%",
      "Overall retention: 61.7%",
      "Retention gap: 6.7 percentage points",
    ],
    action:
      "Introduce structured post-placement follow-ups and early career support.",
  },
];

export default function PolicyInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Policy Insights
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          AI-powered insights to help identify areas for
          intervention and policy improvement.
        </p>
      </div>

      {/* AI Summary */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg text-white">
            ✦
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              AI Policy Summary
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Skilling outcomes are improving, but retention
              and program alignment remain key areas of concern.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Based on current employment, relevance, and
              retention data, resources should be prioritized
              toward programs with strong outcomes while
              underperforming programs receive targeted
              intervention.
            </p>
          </div>
        </div>
      </div>

      {/* Priority Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <SummaryCard
          label="High Priority"
          value="1"
          description="Immediate intervention"
        />

        <SummaryCard
          label="Medium Priority"
          value="1"
          description="Needs monitoring"
        />

        <SummaryCard
          label="Positive Signals"
          value="1"
          description="Potential to scale"
        />
      </div>

      {/* Insights */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Key Policy Insights
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Important findings identified from outcome data.
          </p>
        </div>

        <div className="space-y-4">
          {insights.map((insight) => (
            <InsightCard
              key={insight.title}
              insight={insight}
            />
          ))}
        </div>
      </div>

      {/* Action Framework */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          From Insight to Policy Action
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          How SkillImpact AI can support decision-making.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ActionStep
            number="01"
            title="Identify"
            description="Detect programs, regions, or groups that need attention."
          />

          <ActionStep
            number="02"
            title="Understand"
            description="Use outcome data and AI explanations to understand why."
          />

          <ActionStep
            number="03"
            title="Act"
            description="Recommend targeted interventions and resource allocation."
          />
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ label, value, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

function InsightCard({ insight }) {
  const priorityStyles = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-green-50 text-green-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {insight.category}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                priorityStyles[insight.priority]
              }`}
            >
              {insight.priority} Priority
            </span>
          </div>

          <h3 className="mt-2 text-base font-semibold text-slate-900">
            {insight.title}
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {insight.description}
          </p>
        </div>
      </div>

      {/* Evidence */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {insight.evidence.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          Recommended Action
        </p>

        <p className="mt-1 text-sm leading-6 text-blue-900">
          {insight.action}
        </p>
      </div>
    </div>
  );
}

function ActionStep({ number, title, description }) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <span className="text-xs font-bold text-blue-600">
        {number}
      </span>

      <h3 className="mt-2 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}