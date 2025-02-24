import React from "react";
import Navbar from '../components/Navbar';
import Categorias from '../components/Categorias';
import Bloque404 from '../components/Bloque404';
import Footer from '../components/Footer';

const Pagina404 = () => {
  return (
    <div>
      
      <div className="container-fluid">
      <Navbar />
        <Bloque404 />
        <Footer />
      </div>
    </div>
  );
};

export default Pagina404;
