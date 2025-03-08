import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import NavbarAdmin from '../components/NavbarAdmin';
import ImagenInterna from '../components/ImagenInterna';
import Footer from '../components/Footer';
import ProductoUnico from '../components/ProductoUnico';

import { useNavigate } from "react-router-dom";


const DetalleProducto = () => {
    const navigate = useNavigate();
    const isAuthenticated =
      localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");
      
  return (
    <div>
      { isAuthenticated ? (parseInt(localStorage.getItem("tipo")) === 1 ? <NavbarAdmin /> : <NavbarUser />) : <Navbar /> }
      
    <div>
      <div className="container-fluid">
        <ProductoUnico/>
        <Footer/>
      </div>
    </div>
  </div>
  );
};

export default DetalleProducto;
