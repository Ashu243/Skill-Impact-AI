export default function CandidateDashboard() {
  const stats = [
    {
      label: "Training Progress",
      value: "100%",
      description: "Course completed",
    },
    {
      label: "Employment Status",
      value: "Employed",
      description: "Currently working",
    },
    {
      label: "Job Relevance",
      value: "82%",
      description: "Training-job alignment",
    },
    {
      label: "Income Growth",
      value: "+24%",
      description: "Since training",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          My Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track your training, employment and career progress.
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

      {/* Career Journey */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          My Career Journey
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your progress from training to employment.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <JourneyStep
            number="01"
            title="Training"
            description="Completed Web Development"
            active
          />

          <JourneyStep
            number="02"
            title="Skills"
            description="Technical skills acquired"
            active
          />

          <JourneyStep
            number="03"
            title="Employment"
            description="Currently employed"
            active
          />

          <JourneyStep
            number="04"
            title="Growth"
            description="Career progression tracking"
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
              Your training is strongly aligned with your current job.
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your job relevance is 82% and your income has
              increased by 24% since completing training.
              Continuing to build your technical skills could
              support further career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyStep({
  number,
  title,
  description,
  active = false,
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-blue-100 bg-blue-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <span
        className={`text-xs font-bold ${
          active ? "text-blue-600" : "text-slate-400"
        }`}
      >
        {number}
      </span>

      <h3 className="mt-2 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}