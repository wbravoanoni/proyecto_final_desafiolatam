import React from "react";
import Navbar from '../components/Navbar';
import ImagenInterna from '../components/ImagenInterna';
import Footer from '../components/Footer';
import Productos from '../components/Productos';


const CategoriasProductos = () => {
  return (
    <div>
    <Navbar />
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
