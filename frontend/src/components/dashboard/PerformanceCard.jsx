export default function PerformanceCard({ courses }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Top Performing Courses
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Based on Skilling Impact Score
          </p>
        </div>

        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {courses.map((course, index) => (
          <div
            key={course.name}
            className="flex items-center gap-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-xs font-semibold text-slate-500">
              {index + 1}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-medium text-slate-700">
                  {course.name}
                </p>

                <span className="text-sm font-semibold text-slate-900">
                  {course.score}
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-700"
                  style={{
                    width: `${course.score}%`,
                  }}
                />
              </div>

              <p className="mt-1 text-[11px] text-slate-400">
                {course.employment} employment rate
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}