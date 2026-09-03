import { useNavigate } from "react-router-dom";

export default function RecommendationCard({
    title,
    description,
    action,
    priority = "Medium",
    link,
    linkText,
}) {
    const priorityStyles = {
        High: "bg-red-100 text-red-700",
        Medium: "bg-amber-100 text-amber-700",
        Low: "bg-green-100 text-green-700",
    };

    const navigate = useNavigate();
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-900">
                    {title}
                </h3>

                <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityStyles[priority]
                        }`}
                >
                    {priority} Priority
                </span>
            </div>

            <p className="text-sm text-slate-500 mt-3 leading-6">
                {description}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Recommended action
                </p>

                <p className="text-sm text-slate-700 mt-1">
                    {action}
                </p>
                <button
                    onClick={() => navigate(link)}
                    className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    {linkText} →
                </button>
            </div>
        </div>
    );
}