import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { salesData } from "../../data/analyticsData";

export default function SalesAnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={salesData}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.08)"
        />

        <XAxis
          dataKey="month"
          stroke="#94A3B8"
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          stroke="#94A3B8"
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          contentStyle={{
            background: "#1E293B",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
          }}
        />

        <Line
          type="monotone"
          dataKey="sales"
          stroke="#6366F1"
          strokeWidth={4}
          dot={{
            r: 5,
            fill: "#3B82F6",
            stroke: "#fff",
            strokeWidth: 2,
          }}
          activeDot={{
            r: 8,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}