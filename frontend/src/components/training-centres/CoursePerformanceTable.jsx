export default function CoursePerformanceTable({ courses }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-900">
          Course Performance
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Compare employment outcomes across courses.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Course
              </th>

              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Trained
              </th>

              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Employment
              </th>

              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Relevance
              </th>

              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Retention
              </th>

              <th className="text-left px-6 py-4 font-medium text-slate-500">
                Impact
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {courses.map((course) => (
              <tr
                key={course.name}
                className="hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4 font-medium text-slate-900">
                  {course.name}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {course.trained.toLocaleString()}
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {course.employment}%
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {course.relevance}%
                </td>

                <td className="px-6 py-4 text-slate-600">
                  {course.retention}%
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`font-semibold ${
                      course.impactScore >= 80
                        ? "text-emerald-600"
                        : course.impactScore >= 70
                        ? "text-blue-600"
                        : "text-amber-600"
                    }`}
                  >
                    {course.impactScore}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}