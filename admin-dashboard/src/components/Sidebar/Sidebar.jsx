import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const name = user?.name || "Admin";

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");

    toast.success("Logged out successfully!");

    navigate("/");
  };

  return (
    <div className="sidebar card">

      <div className="sidebar-top">

        <h2 className="logo">
          Admin<span>Panel</span>
        </h2>

      </div>

      <nav className="menu">

        <NavLink to="/dashboard" className="link">
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink to="/users" className="link">
          <FaUsers />
          Users
        </NavLink>

        <NavLink to="/products" className="link">
          <FaBoxOpen />
          Products
        </NavLink>

        <NavLink to="/orders" className="link">
          <FaShoppingCart />
          Orders
        </NavLink>

        <NavLink to="/analytics" className="link">
          <FaChartLine />
          Analytics
        </NavLink>

        <NavLink to="/settings" className="link">
          <FaCog />
          Settings
        </NavLink>

      </nav>

      <div className="sidebar-footer">

        <div className="profile">

          <div className="profile-avatar">
            {initials}
          </div>

          <div>
            <h4>{name}</h4>
            <p>Administrator</p>
          </div>

        </div>

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}