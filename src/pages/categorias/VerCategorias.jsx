import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import TablaCategorias from "../../components/TablaCategorias";

const VerUsuarios = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/ingresar"); 
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
    navigate("/ingresar");
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Registros de Categorias</h2>
        <p className="text-start"><a href="Categorias" className="mt-3 btn btn-danger">Agregar categorias</a></p>
      </div>
      <TablaCategorias/>
      <Footer />
    </div>
  );
};

export default VerUsuarios;
