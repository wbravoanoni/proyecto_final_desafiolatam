import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FormularioIngreso from "../components/FormularioIngreso";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Ingresar = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (correo, contrasena) => {
    try {
      const response = await fetch("https://api-fake-sport.onrender.com/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en el login");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", "true");

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <FormularioIngreso handleLogin={handleLogin} error={error} />
        <a href="/Comprador">Crear Usuario</a>
      </div>
      <Footer />
    </div>
  );
};

export default Ingresar;
