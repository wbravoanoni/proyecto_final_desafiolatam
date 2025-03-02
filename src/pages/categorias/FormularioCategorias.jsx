import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const FormularioCategorias = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/ingresar");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!nombre.trim()) {
      setError("El nombre de la categoría es obligatorio.");
      return;
    }

    try {
      const response = await fetch("https://api-fake-sport.onrender.com/api/categorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar la categoría");
      }

      alert("Categoría creada exitosamente");
      navigate("/verCategorias");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Crear Categorías</h2>

        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="offset-4 col-sm-4 mt-2">
              <label htmlFor="nombre" className="form-label fw-bold">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              {error && <div className="text-danger mt-2">{error}</div>}
            </div>
            <p className="text-center">
              <button type="submit" className="mt-3 btn btn-success mx-5 px-5">
                Guardar
              </button>
              <a href="/verCategorias" className="mt-3 btn btn-primary px-5">
                Regresar
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormularioCategorias;
