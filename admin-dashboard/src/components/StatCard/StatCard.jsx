import "./StatCard.css";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function StatCard({
  title,
  value,
  color,
  icon,
  growth = "+12.5%"
}) {
  return (
    <div className="stat-card">

      <div className="stat-top">

        <div
          className="stat-icon"
          style={{
            background: `linear-gradient(135deg, ${color}, #3B82F6)`
          }}
        >
          {icon}
        </div>

        <div className="growth">
          <FaArrowTrendUp />
          {growth}
        </div>

      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>

      <p>This Month</p>

    </div>
  );
}