import "./RevenueGoal.css";
import { goal } from "../../data/goalData";

export default function RevenueGoal() {
  const percentage = Math.round(
    (goal.current / goal.target) * 100
  );

  return (
    <div className="goal-card">

      <div className="goal-header">
        <h2>Monthly Revenue Goal</h2>
        <span>{percentage}%</span>
      </div>

      <div className="goal-circle">

        <svg width="170" height="170">

          <circle
            cx="85"
            cy="85"
            r="70"
            className="bg-circle"
          />

          <circle
            cx="85"
            cy="85"
            r="70"
            className="progress-circle"
            style={{
              strokeDashoffset:
                440 - (440 * percentage) / 100,
            }}
          />

        </svg>

        <div className="goal-text">
          <h1>{percentage}%</h1>
          <p>Completed</p>
        </div>

      </div>

      <div className="goal-info">

        <div>
          <h3>${goal.current.toLocaleString()}</h3>
          <span>Current</span>
        </div>

        <div>
          <h3>${goal.target.toLocaleString()}</h3>
          <span>Target</span>
        </div>

      </div>

    </div>
  );
}