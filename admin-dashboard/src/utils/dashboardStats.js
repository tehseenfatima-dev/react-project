export const getDashboardStats = () => {
  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  const totalProducts = products.length;

  const inStock = products.filter(
    (p) => p.status === "In Stock"
  ).length;

  const lowStock = products.filter(
    (p) => p.status === "Low Stock"
  ).length;

  const outOfStock = products.filter(
    (p) => p.status === "Out of Stock"
  ).length;

  const inventoryValue = products.reduce((total, product) => {
    const price = Number(
      String(product.price).replace("$", "")
    );

    const stock = Number(product.stock);

    return total + price * stock;
  }, 0);

  return {
    totalProducts,
    inStock,
    lowStock,
    outOfStock,
    inventoryValue,
  };
};