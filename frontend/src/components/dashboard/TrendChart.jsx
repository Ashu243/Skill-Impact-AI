import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function TrendChart({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Employment & Retention
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Six-month outcome trend
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-slate-500">
              Employment
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span className="text-slate-500">
              Retention
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#94a3b8",
              }}
            />

            <YAxis
              domain={[40, 90]}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#94a3b8",
              }}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
              }}
              formatter={(value) => `${value}%`}
            />

            <Line
              type="monotone"
              dataKey="employment"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
              }}
            />

            <Line
              type="monotone"
              dataKey="retention"
              stroke="#94a3b8"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}