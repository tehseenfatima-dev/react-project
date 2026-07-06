import "./RecentActivity.css";
import { activities } from "../../data/activityData";

export default function RecentActivity() {
  return (
    <div className="activity-card">

      <div className="activity-header">
        <h2>Recent Activity</h2>
        <span>Today</span>
      </div>

      <div className="activity-list">

        {activities.map((activity) => (
          <div className="activity-item" key={activity.id}>

            <div
              className="activity-dot"
              style={{ background: activity.color }}
            />

            <div className="activity-content">
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
            </div>

            <span className="activity-time">
              {activity.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}