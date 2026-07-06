import "./Orders.css";
import { orders } from "../../data/orders";

export default function Orders({ search = "" }) {
  const filteredOrders = orders.filter(
    (order) =>
      String(order.id).toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      String(order.total).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="orders">

      <h1>Orders</h1>

      <table>
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
  );
}