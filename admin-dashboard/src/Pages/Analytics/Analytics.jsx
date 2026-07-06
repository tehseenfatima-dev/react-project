import "./Analytics.css";

import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import SalesAnalyticsChart from "../../components/AnalyticsChart/SalesAnalyticsChart";
import TrafficChart from "../../components/AnalyticsChart/TrafficChart";

export default function Analytics() {
  return (
    <div className="analytics">

      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>Overview of your business performance</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="analytics-grid">

        <div className="analytics-card">
          <div className="analytics-icon revenue">
            <FaDollarSign />
          </div>

          <div>
            <h4>Revenue</h4>
            <h2>$12,450</h2>
            <span>+15.2% this month</span>
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-icon orders">
            <FaShoppingCart />
          </div>

          <div>
            <h4>Orders</h4>
            <h2>1,245</h2>
            <span>+8.7% this month</span>
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-icon visitors">
            <FaUsers />
          </div>

          <div>
            <h4>Visitors</h4>
            <h2>8,320</h2>
            <span>+11.4% this month</span>
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-icon conversion">
            <FaChartLine />
          </div>

          <div>
            <h4>Conversion</h4>
            <h2>3.6%</h2>
            <span>+1.2% this month</span>
          </div>
        </div>

      </div>

      {/* Charts */}
      <div className="analytics-bottom">

        <div className="chart-card">
          <div className="chart-header">
            <h2>Sales Overview</h2>
            <span>Last 6 Months</span>
          </div>

          <SalesAnalyticsChart />
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h2>Traffic Sources</h2>
            <span>Visitors</span>
          </div>

          <TrafficChart />
        </div>

      </div>

    </div>
  );
}