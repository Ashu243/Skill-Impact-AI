import { useNavigate, useParams } from "react-router-dom";
import { trainingCentres, centreCourses } from "../data/mockData";

import CoursePerformanceTable from "../components/training-centres/CoursePerformanceTable";

export default function TrainingCentreDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const centre = trainingCentres.find(
    (centre) => centre.id === id
  );

  const courses = centreCourses[id] || [];

  if (!centre) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-slate-900">
          Training centre not found
        </h2>

        <button
          onClick={() => navigate("/training-centres")}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          Back to Training Centres
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Back */}
      <button
        onClick={() => navigate("/training-centres")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
      >
        ← Back to Training Centres
      </button>

      {/* Centre Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {centre.name}
              </h1>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  centre.status === "High Performing"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {centre.status}
              </span>
            </div>

            <p className="text-sm text-slate-500 mt-2">
              {centre.location}
            </p>
          </div>

          {/* Impact Score */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-400">
                Overall Impact
              </p>

              <p className="text-3xl font-bold text-slate-900">
                {centre.impactScore}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
              {centre.impactScore}
            </div>
          </div>

        </div>
      </div>

      {/* Centre Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Metric
          title="Candidates Trained"
          value={centre.candidates.toLocaleString()}
        />

        <Metric
          title="Employment Rate"
          value={`${centre.employment}%`}
        />

        <Metric
          title="Job Relevance"
          value={`${centre.relevance}%`}
        />

        <Metric
          title="6M Retention"
          value={`${centre.retention}%`}
        />

      </div>

      {/* Course Performance */}
      <CoursePerformanceTable courses={courses} />

      {/* AI Insight */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
            🧠
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              AI Performance Insight
            </h2>

            <p className="text-sm text-slate-300 mt-1">
              Automated analysis of centre-level outcomes.
            </p>
          </div>

        </div>

        <div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-5">
          <p className="text-sm leading-6 text-slate-200">
            {centre.name} is showing{" "}
            {centre.impactScore >= 80
              ? "strong overall employment outcomes"
              : "below-target employment outcomes"}.
            {" "}
            {courses.length > 0 &&
              `Course-level analysis shows ${
                courses.reduce(
                  (lowest, course) =>
                    course.impactScore < lowest.impactScore
                      ? course
                      : lowest,
                  courses[0]
                ).name
              } as the area requiring the most attention.`}
          </p>
        </div>

      </div>

    </div>
  );
}


/* Reusable metric */

function Metric({ title, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="text-2xl font-bold text-slate-900 mt-2">
        {value}
      </p>
    </div>
  );
}