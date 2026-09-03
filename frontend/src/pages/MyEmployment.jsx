const employment = {
  status: "Employed",
  company: "Tech Solutions Pvt. Ltd.",
  role: "Junior Web Developer",
  joiningDate: "April 2026",
  salary: "₹4.8 LPA",
  relevance: "82%",
  retention: "6 Months",
  incomeGrowth: "+24%",
};

export default function MyEmployment() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          My Employment
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Track your current employment and career outcomes.
        </p>
      </div>

      {/* Employment Status */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Current Employment Status
            </p>

            <div className="mt-2 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />

              <h2 className="text-xl font-semibold text-slate-900">
                {employment.status}
              </h2>
            </div>
          </div>

          <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            Currently Working
          </span>
        </div>
      </div>

      {/* Job Details */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Current Job
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your current employment details.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InfoCard
            label="Company"
            value={employment.company}
          />

          <InfoCard
            label="Job Role"
            value={employment.role}
          />

          <InfoCard
            label="Joining Date"
            value={employment.joiningDate}
          />

          <InfoCard
            label="Annual Salary"
            value={employment.salary}
          />
        </div>
      </div>

      {/* Outcome Metrics */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Employment Outcomes
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          How your training has translated into employment outcomes.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <OutcomeCard
            label="Job Relevance"
            value={employment.relevance}
            description="Training-job alignment"
          />

          <OutcomeCard
            label="Retention"
            value={employment.retention}
            description="Time retained in current job"
          />

          <OutcomeCard
            label="Income Growth"
            value={employment.incomeGrowth}
            description="Increase since training"
          />
        </div>
      </div>

      {/* AI Insight */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            ✦
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              AI Employment Insight
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Your training has translated well into employment.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your current job has an 82% relevance to your training,
              and you have maintained employment for 6 months.
              Your income has also increased by 24% since completing
              the program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function OutcomeCard({ label, value, description }) {
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