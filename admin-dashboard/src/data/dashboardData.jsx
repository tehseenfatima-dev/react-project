import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

export const stats = [
  {
    title: "Revenue",
    value: "$24,500",
    color: "#2563EB",
    icon: <FaDollarSign />,
    growth: "+15.2%",
  },
  {
    title: "Orders",
    value: "1,280",
    color: "#22C55E",
    icon: <FaShoppingCart />,
    growth: "+8.7%",
  },
  {
    title: "Customers",
    value: "542",
    color: "#F59E0B",
    icon: <FaUsers />,
    growth: "+12.4%",
  },
  {
    title: "Products",
    value: "86",
    color: "#EF4444",
    icon: <FaBoxOpen />,
    growth: "+5.1%",
  },
];