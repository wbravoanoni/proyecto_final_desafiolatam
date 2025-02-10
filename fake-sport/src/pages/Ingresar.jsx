import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FormularioIngreso from "../components/FormularioIngreso";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Ingresar = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    if (email === "admin@admin.com" && password === "123456") {
      localStorage.setItem("isAuthenticated", "true"); 
      navigate("/dashboard");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <FormularioIngreso handleLogin={handleLogin} error={error} />
      </div>
      <Footer />
    </div>
  );
};

export default Ingresar;
