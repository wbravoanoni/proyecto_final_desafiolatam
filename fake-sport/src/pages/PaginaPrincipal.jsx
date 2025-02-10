import React from "react";
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Categorias from '../components/Categorias';
import ProductosNuevos from '../components/ProductosNuevos';
import Footer from '../components/Footer';

const PaginaPrincipal = () => {
  return (
    <div>
    <Navbar />
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
