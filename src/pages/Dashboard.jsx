import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const Dashboard = () => {
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
      {localStorage.getItem("tipo") === 1 ? <NavbarAdmin /> : <NavbarUser /> }
      
      <div className="container mt-5 text-center">
        <h2>Bienvenido al Dashboard</h2>
        <p>Has iniciado sesión correctamente.</p>
        <button className="btn btn-danger" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
