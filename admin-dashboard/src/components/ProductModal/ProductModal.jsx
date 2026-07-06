import "./ProductModal.css";

export default function ProductModal({
  show,
  onClose,
  product,
  setProduct,
  onSave,
}) {
  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Price"
          value={product.price}
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) =>
            setProduct({
              ...product,
              category: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) =>
            setProduct({
              ...product,
              stock: e.target.value,
            })
          }
        />

        <select
          value={product.status}
          onChange={(e) =>
            setProduct({
              ...product,
              status: e.target.value,
            })
          }
        >
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={onSave}
          >
            Save Product
          </button>

        </div>

      </div>

    </div>
  );
}