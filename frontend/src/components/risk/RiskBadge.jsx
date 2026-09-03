export default function RiskBadge({ level }) {
  const styles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
        styles[level] || "bg-slate-100 text-slate-600"
      }`}
    >
      {level} Risk
    </span>
  );
}