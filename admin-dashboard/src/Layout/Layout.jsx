import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        style={{
          marginLeft: window.innerWidth > 768 ? "240px" : "0",
          width: "100%",
          padding: "20px",
          transition: "0.3s",
        }}
      >
        <Navbar
          search={search}
          setSearch={setSearch}
          setSidebarOpen={setSidebarOpen}
        />

        {React.cloneElement(children, {
          search,
        })}
      </div>
    </div>
  );
}