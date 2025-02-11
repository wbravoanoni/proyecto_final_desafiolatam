import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const VerCategorias = () => {
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
      <div className="container mt-5 text-center">
        <h2 className="pt-5">Crear Categorias</h2>
      </div>
      <Footer />
    </div>
  );
};

export default VerCategorias;
