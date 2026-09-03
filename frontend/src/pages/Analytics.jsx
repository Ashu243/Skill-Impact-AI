import AnalyticsChart from "../components/analytics/AnalyticsChart";
import { analyticsTrend, analyticsCourses } from "../data/mockData";

function AnalyticsMetric({ title, value, description }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <p className="text-2xl font-bold text-slate-900 mt-2">
        {value}
      </p>

      <p className="text-xs text-slate-400 mt-1">
        {description}
      </p>
    </div>
  );
}

export default function Analytics() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Analytics
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Understand how training programs are performing over time.
        </p>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsMetric
          title="Employment Rate"
          value="68.4%"
          description="Across all programs"
        />

        <AnalyticsMetric
          title="Job Relevance"
          value="74.2%"
          description="Average skill alignment"
        />

        <AnalyticsMetric
          title="6M Retention"
          value="61.7%"
          description="Candidates retained"
        />

        <AnalyticsMetric
          title="Impact Score"
          value="78"
          description="Overall program impact"
        />
      </div>

      {/* Main Trend Chart */}
      <AnalyticsChart
        title="Employment Outcomes"
        description="Track employment, relevance and retention over time."
        data={analyticsTrend}
        dataKeys={["employment", "relevance", "retention"]}
        xKey="month"
      />

      {/* Course Comparison */}
      <AnalyticsChart
        type="bar"
        title="Course Performance Comparison"
        description="Compare employment outcomes across different courses."
        data={analyticsCourses}
        dataKeys={["employment", "relevance", "retention"]}
        xKey="name"
      />

      {/* Key Observations */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white">
        <h2 className="text-lg font-semibold">
          Key Observations
        </h2>

        <p className="text-sm text-slate-300 mt-1">
          Important patterns identified from the current data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm font-medium">
              Employment is improving
            </p>

            <p className="text-xs text-slate-400 mt-2 leading-5">
              Employment has increased steadily across the reporting period.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm font-medium">
              Retention remains lower
            </p>

            <p className="text-xs text-slate-400 mt-2 leading-5">
              Retention is below employment, suggesting some candidates
              leave their jobs after placement.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm font-medium">
              Digital Marketing needs attention
            </p>

            <p className="text-xs text-slate-400 mt-2 leading-5">
              Its employment, relevance and retention are lower than
              the other major courses.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}