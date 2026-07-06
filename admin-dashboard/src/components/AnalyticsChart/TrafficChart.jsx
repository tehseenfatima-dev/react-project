import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { trafficData } from "../../data/analyticsData";

const COLORS = [
  "#6366F1",
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

export default function TrafficChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>

        <Pie
          data={trafficData}
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={95}
          paddingAngle={4}
          dataKey="value"
        >
          {trafficData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            background: "#1E293B",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
          }}
        />

        <Legend />

      </PieChart>
    </ResponsiveContainer>
  );
}