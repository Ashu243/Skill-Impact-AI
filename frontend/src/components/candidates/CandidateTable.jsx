import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function CandidateTable({ candidates }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                Candidate
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                Course
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                Relevance
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                Impact
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="group transition hover:bg-slate-50/70"
              >
                {/* Candidate */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-semibold text-blue-700">
                      {candidate.initials}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {candidate.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {candidate.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Course */}
                <td className="px-4 py-4">
                  <p className="text-sm text-slate-600">
                    {candidate.course}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {candidate.centre}
                  </p>
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <StatusBadge status={candidate.status} />
                </td>

                {/* Relevance */}
                <td className="px-4 py-4">
                  {candidate.jobRelevance > 0 ? (
                    <div className="w-24">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-slate-700">
                          {candidate.jobRelevance}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-600"
                          style={{
                            width: `${candidate.jobRelevance}%`,
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm text-slate-400">
                      —
                    </span>
                  )}
                </td>

                {/* Impact */}
                <td className="px-4 py-4">
                  <span
                    className={`text-sm font-semibold ${
                      candidate.impactScore >= 80
                        ? "text-emerald-600"
                        : candidate.impactScore >= 60
                        ? "text-amber-600"
                        : "text-red-600"
                    }`}
                  >
                    {candidate.impactScore}/100
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() =>
                      navigate(`/candidates/${candidate.id}`)
                    }
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-blue-600 opacity-70 transition hover:bg-blue-50 hover:opacity-100"
                  >
                    View profile →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Mobile cards */}
      <div className="divide-y divide-slate-100 md:hidden">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-semibold text-blue-700">
                  {candidate.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {candidate.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {candidate.course}
                  </p>
                </div>
              </div>

              <StatusBadge status={candidate.status} />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400">
                  Job Relevance
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {candidate.jobRelevance
                    ? `${candidate.jobRelevance}%`
                    : "—"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Impact Score
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {candidate.impactScore}/100
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                navigate(`/candidates/${candidate.id}`)
              }
              className="mt-5 w-full rounded-xl bg-slate-50 py-2.5 text-xs font-semibold text-blue-600 hover:bg-blue-50"
            >
              View candidate →
            </button>
          </div>
        ))}
      </div>


      {/* Empty state */}
      {candidates.length === 0 && (
        <div className="p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
            🔍
          </div>

          <h3 className="mt-4 text-sm font-semibold text-slate-700">
            No candidates found
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}