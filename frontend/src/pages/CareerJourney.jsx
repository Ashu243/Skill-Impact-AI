const journey = [
  {
    step: "01",
    title: "Training",
    date: "March 2026",
    description: "Completed Web Development training at ABC Skills Institute.",
    status: "Completed",
  },
  {
    step: "02",
    title: "Skills",
    date: "March 2026",
    description: "Developed skills in React, Node.js, JavaScript and MongoDB.",
    status: "Completed",
  },
  {
    step: "03",
    title: "Employment",
    date: "April 2026",
    description: "Started working as a Junior Web Developer.",
    status: "Completed",
  },
  {
    step: "04",
    title: "Career Growth",
    date: "Current",
    description: "Tracking income growth, job relevance and career progression.",
    status: "In Progress",
  },
];

export default function CareerJourney() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          My Career Journey
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track your journey from training to career growth.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Career Progress
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your progress across the employment journey.
        </p>

        <div className="mt-8 space-y-8">
          {journey.map((item, index) => (
            <div key={item.step} className="flex gap-4">
              {/* Step */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {item.step}
                </div>

                {index !== journey.length - 1 && (
                  <div className="mt-2 h-full min-h-12 w-px bg-slate-200" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {item.date}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Outcomes */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Career Outcomes
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Key indicators of your career progress.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <OutcomeCard
            label="Job Relevance"
            value="82%"
            description="Training-job alignment"
          />

          <OutcomeCard
            label="Income Growth"
            value="+24%"
            description="Since completing training"
          />

          <OutcomeCard
            label="Employment"
            value="6 Months"
            description="Current retention"
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
              AI Career Insight
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Your career journey shows positive progress.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              You successfully moved from training into employment,
              with an 82% job relevance and 24% income growth.
              Continuing to strengthen your technical skills can
              support further career progression.
            </p>
          </div>
        </div>
      </div>
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