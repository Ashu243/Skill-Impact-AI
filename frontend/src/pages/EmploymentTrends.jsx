import AnalyticsChart from "../components/analytics/AnalyticsChart";

const employmentTrend = [
  { month: "Jan", employment: 58, relevance: 64, retention: 52 },
  { month: "Feb", employment: 61, relevance: 66, retention: 55 },
  { month: "Mar", employment: 63, relevance: 68, retention: 57 },
  { month: "Apr", employment: 65, relevance: 71, retention: 59 },
  { month: "May", employment: 67, relevance: 72, retention: 60 },
  { month: "Jun", employment: 68, relevance: 74, retention: 62 },
];

const programComparison = [
  { name: "Data Analytics", employment: 82, retention: 79 },
  { name: "Web Development", employment: 76, retention: 71 },
  { name: "Cloud Computing", employment: 74, retention: 76 },
  { name: "Digital Marketing", employment: 64, retention: 57 },
];

export default function EmploymentTrends() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Employment Trends
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor employment outcomes and workforce trends across
          skilling programs.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Employment Rate"
          value="68.4%"
          description="Overall placement"
        />

        <MetricCard
          label="Job Relevance"
          value="74.2%"
          description="Training-job alignment"
        />

        <MetricCard
          label="6M Retention"
          value="61.7%"
          description="Candidates retained"
        />

        <MetricCard
          label="Impact Score"
          value="78"
          description="Overall program impact"
        />
      </div>

      {/* Trend Chart */}
      <AnalyticsChart
        type="line"
        data={employmentTrend}
        dataKeys={["employment", "relevance", "retention"]}
        xKey="month"
        title="Employment Outcomes Over Time"
        description="Employment, job relevance and retention trends across the monitored period."
      />

      {/* Program Comparison */}
      <AnalyticsChart
        type="bar"
        data={programComparison}
        dataKeys={["employment", "retention"]}
        xKey="name"
        title="Program Employment Comparison"
        description="Comparison of employment and retention outcomes across major training programs."
      />

      {/* Key Observations */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Key Observations
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Important trends that may help inform policy decisions.
        </p>

        <div className="mt-6 space-y-4">
          <Observation
            title="Employment is improving"
            description="Overall employment increased from 58% in January to 68% in June."
          />

          <Observation
            title="Job relevance is consistently strong"
            description="Job relevance increased to 74%, indicating better alignment between training and employment."
          />

          <Observation
            title="Retention remains the key challenge"
            description="6-month retention is improving but remains below the overall employment rate."
          />

          <Observation
            title="Program outcomes vary significantly"
            description="Data Analytics shows stronger outcomes, while Digital Marketing requires additional attention."
          />
        </div>
      </div>

      {/* AI Policy Insight */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✦
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              AI Policy Insight
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Employment outcomes are improving, but retention needs
              targeted intervention.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Current trends suggest that employment and job relevance
              are moving positively. Policymakers should focus on
              improving post-placement support and identifying successful
              program models that can be expanded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, description }) {
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

function Observation({ title, description }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="font-medium text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}