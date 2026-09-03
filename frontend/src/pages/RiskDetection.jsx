import { useMemo } from "react";
import RiskBadge from "../components/risk/RiskBadge";
import RiskSummaryCard from "../components/risk/RiskSummaryCard";
import RiskTable from "../components/risk/RiskTable";
import { candidates } from "../data/mockData";

export default function RiskDetection() {
  const riskCandidates = useMemo(() => {
    return candidates.filter(
      (candidate) =>
        candidate.risk === "High" || candidate.risk === "Medium"
    );
  }, []);

  const highRiskCount = candidates.filter(
    (candidate) => candidate.risk === "High"
  ).length;

  const mediumRiskCount = candidates.filter(
    (candidate) => candidate.risk === "Medium"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Risk Detection
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Identify candidates who may need additional support after training.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <RiskSummaryCard
          title="High-risk candidates"
          value={highRiskCount}
          description="Require immediate attention"
        />

        <RiskSummaryCard
          title="Medium-risk candidates"
          value={mediumRiskCount}
          description="Need regular monitoring"
        />

        <RiskSummaryCard
          title="Candidates to review"
          value={riskCandidates.length}
          description="High and medium risk combined"
        />

        <RiskSummaryCard
          title="Overall risk"
          value={highRiskCount > 0 ? "Needs attention" : "Low"}
          description="Based on current outcomes"
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="text-amber-600 text-xl">⚠️</div>

          <div>
            <h2 className="font-semibold text-amber-900">
              Early intervention can improve outcomes
            </h2>

            <p className="text-sm text-amber-800 mt-1">
              These candidates may need counselling, job-matching support,
              additional training, or follow-up from the training centre.
            </p>
          </div>
        </div>
      </div>

      <RiskTable candidates={riskCandidates} />

      <div className="bg-slate-900 rounded-2xl p-6 text-white">
        <h2 className="text-lg font-semibold">How risk is identified</h2>

        <p className="text-sm text-slate-300 mt-1">
          The prototype uses outcome indicators to simulate AI-based risk
          detection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="font-medium">Employment status</p>
            <p className="text-xs text-slate-400 mt-2">
              Candidates who are still seeking employment may be at higher risk.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="font-medium">Job relevance</p>
            <p className="text-xs text-slate-400 mt-2">
              A mismatch between training and job can reduce long-term impact.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="font-medium">Retention</p>
            <p className="text-xs text-slate-400 mt-2">
              Candidates leaving jobs early may need additional support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}