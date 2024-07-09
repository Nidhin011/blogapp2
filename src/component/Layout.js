import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path as per your file structure

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login'; // Adjust this condition based on your routing logic

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
