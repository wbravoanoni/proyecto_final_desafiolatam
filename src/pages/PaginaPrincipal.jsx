import React from "react";
import Navbar from '../components/Navbar';
import NavbarAdmin from '../components/NavbarAdmin';
import Carousel from '../components/Carousel';
import Categorias from '../components/Categorias';
import ProductosNuevos from '../components/ProductosNuevos';
import Footer from '../components/Footer';

import { useNavigate } from "react-router-dom";

const PaginaPrincipal = () => {

  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  return (
    <div>
     { isAuthenticated ? <NavbarAdmin /> :<Navbar /> }
    <div>
      <div className="container-fluid">
        <Carousel />
        <Categorias/>
        <ProductosNuevos/>
        <Footer/>
      </div>
    </div>
  </div>
  );
};

export default PaginaPrincipal;
