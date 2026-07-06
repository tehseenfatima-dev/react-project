import "./SalesSummary.css";

export default function SalesSummary() {
  return (
    <div className="sales-summary">
      <h2>Sales Summary</h2>

      <div className="summary-item">
        <span>Total Revenue</span>
        <strong>$24,500</strong>
      </div>

      <div className="summary-item">
        <span>Total Orders</span>
        <strong>1,280</strong>
      </div>

      <div className="summary-item">
        <span>New Customers</span>
        <strong>542</strong>
      </div>

      <div className="summary-item">
        <span>Products Sold</span>
        <strong>860</strong>
      </div>
    </div>
  );
}