import React from 'react';
import Navi from './Navi'; 
import About from './About';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import { Outlet } from 'react-router-dom'; // Outlet을 react-router-dom에서 임포트

const Root = () => {
  return (
    <div>
      <Navi />
      <Navigation />
      <Outlet />
      <Navigation2 />
    </div>
  );
}

export default Root;
