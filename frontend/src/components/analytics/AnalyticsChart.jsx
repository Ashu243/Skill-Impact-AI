import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartColors = [
  "#2563eb",
  "#0d9488",
  "#f59e0b",
  "#8b5cf6",
];

export default function AnalyticsChart({
  type = "line",
  data,
  dataKeys,
  xKey,
  title,
  description,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          {description}
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey={xKey}
                stroke="#94a3b8"
                fontSize={12}
              />

              <YAxis
                domain={[0, 100]}
                stroke="#94a3b8"
                fontSize={12}
              />

              <Tooltip />
              <Legend />

              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  name={key}
                  fill={chartColors[index % chartColors.length]}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey={xKey}
                stroke="#94a3b8"
                fontSize={12}
              />

              <YAxis
                domain={[0, 100]}
                stroke="#94a3b8"
                fontSize={12}
              />

              <Tooltip />
              <Legend />

              {dataKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  name={key}
                  stroke={chartColors[index % chartColors.length]}
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}