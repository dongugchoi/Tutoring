import React from 'react';
import Navi from './Navi'; 

import { Outlet } from 'react-router-dom'; // Outlet을 react-router-dom에서 임포트

const Root = () => {
  return (
    <div>
      <Navi />
      <Outlet />
    </div>
  );
}

export default Root;
