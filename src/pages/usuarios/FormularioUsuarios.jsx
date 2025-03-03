import React, { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const FormularioUsuarios = () => {
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

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      setError("No tienes permiso para crear usuarios. Inicia sesión.");
      return;
    }

    try {
      const response = await fetch("https://api-fake-sport.onrender.com/api/usuarios/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
      <NavbarAdmin />
      <div className="container mt-3 text-center">
        <h2 className="pt-5">Crear Usuarios</h2>

        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="nombre" className="form-label fw-bold">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="" required name="nombre" value={formData.nombre} onChange={handleChange}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="usuarios" className="form-label fw-bold">Usuario</label>
                    <input type="text" className="form-control" id="usuarios" placeholder="" required name="usuario" value={formData.usuario} onChange={handleChange}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="firstName" className="form-label fw-bold">Correo</label>
                    <input type="email" className="form-control" id="firstName" placeholder="" required name="correo" value={formData.correo} onChange={handleChange}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="contrasena" className="form-label fw-bold">Contraseña</label>
                    <input type="password" className="form-control" id="contrasena" placeholder="" required name="contrasena" value={formData.contrasena} onChange={handleChange}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="contrasena2" className="form-label fw-bold">Repita la contraseña</label>
                    <input type="password" className="form-control" id="contrasena2" placeholder="" required name="contrasena" value={formData.contrasena} onChange={handleChange}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <p className="text-center">
                  <button type="submit" className="mt-3 btn btn-success mx-5 px-5">
                    Guardar
                  </button>
                  
                    <a href="/verUsuarios" className="mt-3 btn btn-primary px-5">Regresar</a>
                </p>
            </form>
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default FormularioUsuarios;
