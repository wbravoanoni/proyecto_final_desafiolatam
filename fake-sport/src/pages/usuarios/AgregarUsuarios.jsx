import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import TablaUsuarios from "../../components/TablaUsuarios";

const AgregarUsuarios = () => {
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
        <h2 className="pt-5">Crear Usuarios</h2>
        <p className="text-start"><button className="mt-3 btn btn-danger">Agregar usuario</button></p>
      </div>
      <TablaUsuarios/>
      <Footer />
    </div>
  );
};

export default AgregarUsuarios;
