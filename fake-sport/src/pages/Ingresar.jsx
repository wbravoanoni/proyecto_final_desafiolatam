import React from "react";
import Navbar from '../components/Navbar';
import FormularioIngreso from '../components/FormularioIngreso';
import Footer from '../components/Footer';

const Ingresar = () => {
  return (
    <div>
    <Navbar />
    <div>
      <div className="container-fluid">
        <FormularioIngreso/>
        <Footer/>
      </div>
    </div>
  </div>
  );
};

export default Ingresar;
