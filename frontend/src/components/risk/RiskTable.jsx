import { useNavigate } from "react-router-dom";
import RiskBadge from "./RiskBadge";

export default function RiskTable({ candidates }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          Candidates needing attention
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Review candidates with employment or retention risks.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-slate-500">
              <th className="px-5 py-3 font-medium">Candidate</th>
              <th className="px-5 py-3 font-medium">Risk level</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Impact score</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-slate-50">
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900">
                    {candidate.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {candidate.course}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <RiskBadge level={candidate.risk} />
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {candidate.status}
                </td>

                <td className="px-5 py-4 font-medium text-slate-700">
                  {candidate.impactScore}
                </td>

                <td className="px-5 py-4">
                  <button
                    onClick={() => navigate(`/candidates/${candidate.id}`)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View details →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}