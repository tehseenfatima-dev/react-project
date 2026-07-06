import "./Navbar.css";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";

export default function Navbar({
  search,
  setSearch,
  setSidebarOpen,
}) {
  return (
    <div className="navbar card">

      {/* LEFT */}
      <div className="nav-left">

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        {/* Search */}
        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <div className="icon-box">
          <FaBell />
        </div>

      </div>

    </div>
  );
}