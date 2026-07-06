import "./Dashboard.css";

import StatCard from "../../components/StatCard/StatCard";
import SalesChart from "../../components/Chart/SalesChart";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import RevenueGoal from "../../components/RevenueGoal/RevenueGoal";
import TopProducts from "../../components/TopProducts/TopProducts";

import { orders } from "../../data/orders";
import { customers } from "../../data/customers";
import { getDashboardStats } from "../../utils/dashboardStats";

export default function Dashboard({ search = "" }) {

  const dashboard = getDashboardStats();

  const filteredOrders = orders.filter(
    (order) =>
      String(order.id).toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      String(order.total).toLowerCase().includes(search.toLowerCase())
  );

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>

        <button className="add-btn">
          + Add Product
        </button>
      </div>

      {/* Dynamic Stats */}
      <div className="stats-grid">

        <StatCard
          title="Total Products"
          value={dashboard.totalProducts}
          color="#6366F1"
          icon="📦"
          growth="+12%"
        />

        <StatCard
          title="In Stock"
          value={dashboard.inStock}
          color="#22C55E"
          icon="✅"
          growth="+8%"
        />

        <StatCard
          title="Low Stock"
          value={dashboard.lowStock}
          color="#F59E0B"
          icon="⚠️"
          growth="-3%"
        />

        <StatCard
          title="Inventory Value"
          value={`$${dashboard.inventoryValue.toLocaleString()}`}
          color="#3B82F6"
          icon="💰"
          growth="+18%"
        />

      </div>

      {/* Sales Chart */}
      <div className="dashboard-card">
        <div className="card-title">
          <h2>Sales Overview</h2>
          <span>Last 6 Months</span>
        </div>

        <SalesChart />
      </div>

      {/* Orders + Customers */}
      <div className="bottom-grid">

        {/* Orders */}
        <div className="dashboard-card">

          <div className="card-title">
            <h2>Recent Orders</h2>
          </div>

          <table className="orders-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#94A3B8",
                    }}
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

        {/* Customers */}
        <div className="dashboard-card">

          <div className="card-title">
            <h2>Customers</h2>
          </div>

          <div className="customer-list">

            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <div className="customer-item" key={customer.id}>

                  <div className="customer-avatar">
                    {customer.name.charAt(0)}
                  </div>

                  <div>
                    <h4>{customer.name}</h4>
                    <p>{customer.email}</p>
                  </div>

                </div>
              ))
            ) : (
              <p
                style={{
                  textAlign: "center",
                  color: "#94A3B8",
                  padding: "20px",
                }}
              >
                No customers found.
              </p>
            )}

          </div>

        </div>

      </div>

      {/* Recent Activity + Revenue Goal */}
      <div className="dashboard-widgets">

        <RecentActivity />

        <RevenueGoal />

      </div>

      {/* Top Products */}
      <div className="dashboard-products">

        <TopProducts />

      </div>

    </div>
  );
}