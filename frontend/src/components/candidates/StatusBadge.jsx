export default function StatusBadge({ status }) {
  const styles = {
    Employed: "bg-emerald-50 text-emerald-700",
    "Seeking Job": "bg-amber-50 text-amber-700",
    "Job Mismatch": "bg-red-50 text-red-700",
  };

  const dots = {
    Employed: "bg-emerald-500",
    "Seeking Job": "bg-amber-500",
    "Job Mismatch": "bg-red-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          dots[status] || "bg-slate-400"
        }`}
      />

      {status}
    </span>
  );
}