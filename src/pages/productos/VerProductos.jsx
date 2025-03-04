import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import TablaProductos from "../../components/TablaProductos";

const VerProductos = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/ingresar"); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Registros de Productos</h2>
        <p className="text-start"><a href="Productos" className="mt-3 btn btn-danger">Agregar Productos</a></p>
      </div>
      <TablaProductos/>
      <Footer />
    </div>
  );
};

export default VerProductos;
