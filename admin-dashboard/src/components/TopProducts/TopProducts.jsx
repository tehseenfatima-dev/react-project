import "./TopProducts.css";
import { topProducts } from "../../data/topProducts";

export default function TopProducts() {
  return (
    <div className="top-products">

      <div className="top-header">
        <h2>Top Selling Products</h2>
        <span>This Month</span>
      </div>

      {topProducts.map((product) => (
        <div
          className="product-item"
          key={product.id}
        >

          <div className="product-info">
            <h4>{product.name}</h4>
            <span>{product.sales} Sales</span>
          </div>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: `${product.progress}%`,
              }}
            />

          </div>

        </div>
      ))}

    </div>
  );
}