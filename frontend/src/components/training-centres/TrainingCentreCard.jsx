// components/training-centres/TrainingCentreCard.jsx
import { useNavigate } from "react-router-dom";

export default function TrainingCentreCard({ centre }) {
    const isGood = centre.status === "High Performing";
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-sm transition">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        {centre.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                        {centre.location}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">
                        {centre.impactScore}
                    </p>

                    <p className="text-xs text-slate-400">
                        Impact Score
                    </p>
                </div>
            </div>

            {/* Status */}
            <div className="mt-5">
                <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${isGood
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                >
                    {centre.status}
                </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-6">

                <div>
                    <p className="text-xs text-slate-400">
                        Candidates Trained
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">
                        {centre.candidates.toLocaleString()}
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        Employment
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">
                        {centre.employment}%
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        Job Relevance
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">
                        {centre.relevance}%
                    </p>
                </div>

                <div>
                    <p className="text-xs text-slate-400">
                        6M Retention
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">
                        {centre.retention}%
                    </p>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                    onClick={() => navigate(`/training-centres/${centre.id}`)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    View performance →
                </button>
            </div>

        </div>
    );
}