import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  const labelStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  };

  const inputStyle = {
    marginRight: "10px",
  };

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
      />

      

      <h3>Season</h3>
      <div className="seasons">
        <label style={labelStyle}>
          <input type="checkbox" style={inputStyle} /> Kharif
        </label>
        <label style={labelStyle}>
          <input type="checkbox" style={inputStyle} /> Rabi
        </label>
        <label style={labelStyle}>
          <input type="checkbox" style={inputStyle} /> Zaid
        </label>
        <label style={labelStyle}>
          <input type="checkbox" style={inputStyle} /> Perennial
        </label>
      </div>
    </div>
  );
}

export default Sidebar;