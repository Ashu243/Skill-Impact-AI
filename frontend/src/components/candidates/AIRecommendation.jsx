// components/candidates/AIRecommendation.jsx

export default function AIRecommendation() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
          ✨
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            AI Recommendation
          </h2>

          <p className="text-sm text-slate-300 mt-1">
            Suggested intervention based on the candidate's outcome data.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
        <p className="text-sm leading-6 text-slate-200">
          Rahul is currently employed, but his moderate retention and
          relatively low income growth indicate a potential long-term
          career risk.
        </p>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Recommended Action
          </p>

          <p className="text-sm font-medium text-white mt-2">
            Provide targeted upskilling and career counselling to improve
            job stability and income progression.
          </p>
        </div>
      </div>

      <button className="mt-5 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition">
        Create Intervention Plan
      </button>
    </div>
  );
}