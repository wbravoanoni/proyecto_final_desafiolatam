import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from '../components/Navbar';

const FormularioComprador = () => {
  const navigate = useNavigate();
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") || sessionStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/ingresar"); 
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    correo: "",
    contrasena: "",
    contrasena2: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.contrasena !== formData.contrasena2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("https://api-fake-sport.onrender.com/api/comprador/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          contrasena: formData.contrasena,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al registrar usuario");
      }

      setSuccess("Usuario registrado exitosamente.");
      setFormData({ nombre: "", usuario: "", correo: "", contrasena: "", contrasena2: "" });

      setTimeout(() => {
        navigate("/verUsuarios");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Crear Usuarios</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="offset-4 col-sm-4 mt-2">
              <label className="form-label fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offset-4 col-sm-4 mt-2">
              <label className="form-label fw-bold">Usuario</label>
              <input
                type="text"
                className="form-control"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offset-4 col-sm-4 mt-2">
              <label className="form-label fw-bold">Correo</label>
              <input
                type="email"
                className="form-control"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offset-4 col-sm-4 mt-2">
              <label className="form-label fw-bold">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>
            <div className="offset-4 col-sm-4 mt-2">
              <label className="form-label fw-bold">Repita la contraseña</label>
              <input
                type="password"
                className="form-control"
                name="contrasena2"
                value={formData.contrasena2}
                onChange={handleChange}
                required
              />
            </div>
            <p className="text-center">
              <button type="submit" className="mt-3 btn btn-success mx-5 px-5">
                Guardar
              </button>
              <a href="/verUsuarios" className="mt-3 btn btn-primary px-5">
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

export default FormularioComprador;
