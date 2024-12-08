import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">My App</div>
          <div className="hamburger-icon" onClick={toggleSidebar}>
            ☰
          </div>
        </nav>
      </header>

      {/* 사이드바 */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </aside>

      {/* 메인 콘텐츠 */}
      <main className="content">
        <h1>Welcome to My App</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
