import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import NavbarAdmin from '../components/NavbarAdmin';
import ImagenInterna from '../components/ImagenInterna';
import Footer from '../components/Footer';
import Productos from '../components/Productos';

import { useNavigate } from "react-router-dom";


const CategoriasProductos = () => {
    const navigate = useNavigate();
    const isAuthenticated =
      localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");
      
  return (
    <div>
      { isAuthenticated ? <NavbarAdmin /> :<Navbar /> }
    <div>
      <div className="container-fluid">
        <ImagenInterna/>
        <Productos/>
        <Footer/>
      </div>
    </div>
  </div>
  );
};

export default CategoriasProductos;
