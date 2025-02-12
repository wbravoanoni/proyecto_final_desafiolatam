import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const FormularioCategorias = () => {
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
        <h2 className="pt-5">Crear Categorias</h2>

        <div className="row">
            <form action="">
                <div className="offset-4 col-sm-4 mt-2">
                    <label for="nombre" className="form-label fw-bold">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="" required=""/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <p className="text-center">
                    <a className="mt-3 btn btn-success mx-5 px-5">Guardar</a>
                    <a href="/verCategorias" className="mt-3 btn btn-primary px-5">Regresar</a>
                </p>
            </form>
        </div>
    </div>
    <Footer />
    </div>
  );
};

export default FormularioCategorias;
