import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}>
        ×
      </button>
      <ul>
        <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
        <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
        <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
