import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  // Verificar si el usuario está autenticado
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/ingresar"); // Redirigir al login si no está autenticado
    }
  }, [isAuthenticated, navigate]);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("isAuthenticated");
    navigate("/ingresar");
  };

  return (
    <div>
      <Navbar />
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
