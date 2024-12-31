import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from './SideBar';

const Navbar = () => {
    // 네비바 오픈여부 상태
  const [isOpen, setIsOpen] = useState(false);

 // 네비바 오픈여부 상태 업데이트 함수
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <FaBars className="hamburger-icon" onClick={toggleSidebar} />
        <h1 className="logo">My Portfolio</h1>
      </nav>
      {isOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
