// components/candidates/JourneyTimeline.jsx

const steps = [
  {
    title: "Training Completed",
    date: "Jan 2026",
    description: "Completed Web Development training",
    status: "completed",
  },
  {
    title: "Employment",
    date: "Feb 2026",
    description: "Joined as Junior Web Developer",
    status: "completed",
  },
  {
    title: "Job Relevance",
    date: "Current",
    description: "82% of current role aligns with trained skills",
    status: "completed",
  },
  {
    title: "Retention",
    date: "6 Months",
    description: "Currently retained in the same role",
    status: "completed",
  },
  {
    title: "Career Progression",
    date: "Tracking",
    description: "Monitoring income and career growth",
    status: "current",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Candidate Journey
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Track the candidate from training to long-term career outcomes.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                  ${
                    step.status === "current"
                      ? "bg-blue-100 text-blue-600 ring-4 ring-blue-50"
                      : "bg-blue-600 text-white"
                  }`}
              >
                {step.status === "current" ? "→" : "✓"}
              </div>

              {index !== steps.length - 1 && (
                <div className="w-px h-full min-h-8 bg-slate-200 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="pb-2">
              <div className="flex items-center gap-3">
                <h3 className="font-medium text-slate-900">
                  {step.title}
                </h3>

                <span className="text-xs text-slate-400">
                  {step.date}
                </span>
              </div>

              <p className="text-sm text-slate-500 mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}