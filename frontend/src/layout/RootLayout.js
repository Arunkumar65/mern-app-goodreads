import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../component/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TopHeader } from "../component/Header/TopHeader";
import { MenuNavbar } from "../component/Navbar/Navbar";

export const RootLayout = () => {

  const { pathname } = useLocation();

  return (
    <div>
      <ToastContainer />
      {(pathname === '/') && <Header />}
      {pathname !== 'login' && pathname !== 'register' && <><TopHeader />
        <div className='navbar-container'>
          <MenuNavbar />
        </div></>}
      <div className="body-content">
        <Outlet />
      </div>
    </div>
  )
}
