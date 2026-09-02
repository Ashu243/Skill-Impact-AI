// pages/CandidateDetails.jsx

import { useNavigate, useParams } from "react-router-dom";
import { candidates } from "../data/mockData";

import StatusBadge from "../components/candidates/StatusBadge";
import JourneyTimeline from "../components/candidates/JourneyTimeline";
import OutcomeMetric from "../components/candidates/OutcomeMetric";
import ImpactBreakdown from "../components/candidates/ImpactBreakdown";
import AIRecommendation from "../components/candidates/AIRecommendation";

export default function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const candidate = candidates.find(
    (candidate) => candidate.id === id
  );

  if (!candidate) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-slate-900">
          Candidate not found
        </h2>

        <button
          onClick={() => navigate("/candidates")}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          Back to Candidates
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Back button */}
      <button
        onClick={() => navigate("/candidates")}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
      >
        ← Back to Candidates
      </button>

      {/* Candidate Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-bold">
              {candidate.initials}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {candidate.name}
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                {candidate.id} • {candidate.course}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {candidate.centre}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status={candidate.status} />

            <span
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                candidate.risk === "High"
                  ? "bg-red-50 text-red-600"
                  : candidate.risk === "Medium"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-emerald-50 text-emerald-600"
              }`}
            >
              {candidate.risk} Risk
            </span>
          </div>
        </div>
      </div>

      {/* Outcome Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <OutcomeMetric
          title="Job Relevance"
          value={`${candidate.jobRelevance}%`}
          icon="🎯"
          description="Skills aligned with current role"
        />

        <OutcomeMetric
          title="6M Retention"
          value={`${candidate.retention}%`}
          icon="📈"
          description="Retention after employment"
        />

        <OutcomeMetric
          title="Income Growth"
          value={`+${candidate.incomeGrowth}%`}
          icon="💰"
          trend="Positive growth"
          description="Since first employment"
        />

        <OutcomeMetric
          title="Impact Score"
          value={candidate.impactScore}
          icon="⭐"
          trend="Overall outcome"
          description="Candidate impact score"
        />

      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <JourneyTimeline />

        <ImpactBreakdown />

      </div>

      {/* AI Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* AI Analysis */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              🧠
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                AI Analysis
              </h2>

              <p className="text-xs text-slate-400">
                Outcome interpretation
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Key Finding
              </p>

              <p className="text-sm text-slate-600 mt-2 leading-6">
                {candidate.name} successfully transitioned from training
                to employment. However, retention and income growth are
                moderate compared to high-performing candidates.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Risk Signal
              </p>

              <p className="text-sm text-amber-600 font-medium mt-2">
                Moderate long-term career outcome risk detected.
              </p>
            </div>

          </div>
        </div>

        <AIRecommendation />

      </div>

    </div>
  );
}