import "./Products.css";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import ProductModal from "../../components/ProductModal/ProductModal";
import { products as initialProducts } from "../../data/products";

export default function Products({ search = "" }) {
  // LOAD FROM LOCAL STORAGE
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "In Stock",
  });

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // OPEN ADD MODAL
  const openAddModal = () => {
    setEditingId(null);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "In Stock",
    });

    setShowModal(true);
  };

  // SAVE PRODUCT
  const handleSave = () => {
    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.price ||
      !newProduct.stock
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editingId !== null) {
      setProducts(
        products.map((product) =>
          product.id === editingId
            ? { ...product, ...newProduct }
            : product
        )
      );
    } else {
      const product = {
        id:
          products.length > 0
            ? Math.max(...products.map((p) => p.id)) + 1
            : 1,
        ...newProduct,
      };

      setProducts([...products, product]);
    }

    setShowModal(false);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "In Stock",
    });

    setEditingId(null);
  };

  // EDIT PRODUCT
  const handleEdit = (product) => {
    setEditingId(product.id);

    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
    });

    setShowModal(true);
  };

  // DELETE PRODUCT
  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // RESET PRODUCTS
  const resetProducts = () => {
    localStorage.removeItem("products");
    setProducts(initialProducts);
  };

  // SEARCH
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.status.toLowerCase().includes(search.toLowerCase()) ||
      String(product.price).toLowerCase().includes(search.toLowerCase()) ||
      String(product.stock).includes(search)
  );

  return (
    <div className="products">

      <div className="page-header">

        <h1>Products</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="add-btn"
            onClick={openAddModal}
          >
            + Add Product
          </button>

          <button
            className="delete-btn"
            onClick={resetProducts}
          >
            Reset
          </button>
        </div>

      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>{product.price}</td>

                <td>{product.stock}</td>

                <td>
                  <span
                    className={`status ${product.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {product.status}
                  </span>
                </td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(product)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product.id)}
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "25px",
                  color: "#94A3B8",
                }}
              >
                No products found.
              </td>
            </tr>
          )}

        </tbody>

      </table>

      <ProductModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingId(null);
        }}
        product={newProduct}
        setProduct={setNewProduct}
        onSave={handleSave}
      />

    </div>
  );
}