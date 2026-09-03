export default function RiskSummaryCard({ title, value, description }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <p className="text-2xl font-bold text-slate-900 mt-2">
        {value}
      </p>

      <p className="text-xs text-slate-400 mt-1">
        {description}
      </p>
    </div>
  );
}