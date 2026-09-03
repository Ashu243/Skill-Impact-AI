export default function MyTraining() {
  const training = {
    course: "Web Development",
    centre: "ABC Skills Institute",
    status: "Completed",
    completion: 100,
    duration: "6 Months",
    completedOn: "March 2026",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "MongoDB",
    ],
    jobRelevance: 82,
    employmentStatus: "Employed",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          My Training
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track your training progress and its impact on your career.
        </p>
      </div>

      {/* Training Overview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <p className="text-sm text-slate-400">
              Current Training
            </p>

            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              {training.course}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {training.centre}
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
            {training.status}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-medium text-slate-700">
              Course Completion
            </span>

            <span className="font-semibold text-blue-600">
              {training.completion}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: `${training.completion}%` }}
            />
          </div>
        </div>
      </div>

      {/* Training Details */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard
          label="Training Duration"
          value={training.duration}
        />

        <InfoCard
          label="Completed On"
          value={training.completedOn}
        />

        <InfoCard
          label="Job Relevance"
          value={`${training.jobRelevance}%`}
        />
      </div>

      {/* Skills */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Skills Acquired
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Skills covered during your training.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {training.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Training Impact */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Training → Employment
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Your training outcome so far.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white p-4">
            <p className="text-sm text-slate-400">
              Employment Status
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              {training.employmentStatus}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <p className="text-sm text-slate-400">
              Job Relevance
            </p>

            <p className="mt-1 text-lg font-semibold text-slate-900">
              {training.jobRelevance}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}